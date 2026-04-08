from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from django.shortcuts import get_object_or_404
from .models import NumberSet, AnalysisResult
from .serializers import NumberSetSerializer, AnalysisResultSerializer, NumberSetWithAnalysisSerializer
from .utils import analyze_numbers, process_csv_data

@api_view(['POST'])
def create_numbers(request):
  
    serializer = NumberSetSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save number set
        number_set = serializer.save()
        
        # Analyze numbers
        analysis_stats = analyze_numbers(number_set.numbers)
        
        # Create analysis result
        analysis = AnalysisResult.objects.create(
            number_set=number_set,
            **analysis_stats
        )
        
        # Return combined response
        response_data = NumberSetWithAnalysisSerializer(number_set).data
        return Response(response_data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_numbers_from_csv(request):
   
    if 'file' not in request.FILES:
        return Response(
            {"error": "No file provided"}, 
            status=status.HTTP_400_BAD_REQUEST
        )
    
    csv_file = request.FILES['file']
    name = request.data.get('name', csv_file.name)
    
    try:
        # Process CSV
        numbers = process_csv_data(csv_file.read())
        
        if not numbers:
            return Response(
                {"error": "No valid numbers found in CSV"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create number set
        number_set = NumberSet.objects.create(
            name=name,
            numbers=numbers
        )
        
        # Analyze and create results
        analysis_stats = analyze_numbers(numbers)
        analysis = AnalysisResult.objects.create(
            number_set=number_set,
            **analysis_stats
        )
        
        response_data = NumberSetWithAnalysisSerializer(number_set).data
        return Response(response_data, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        return Response(
            {"error": f"Error processing CSV: {str(e)}"}, 
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['GET'])
def get_all_numbers(request):
   
    number_sets = NumberSet.objects.all()
    serializer = NumberSetWithAnalysisSerializer(number_sets, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_number_set(request, pk):
  
    number_set = get_object_or_404(NumberSet, pk=pk)
    serializer = NumberSetWithAnalysisSerializer(number_set)
    return Response(serializer.data)

@api_view(['PUT'])
def update_numbers(request, pk):
  
    number_set = get_object_or_404(NumberSet, pk=pk)
    serializer = NumberSetSerializer(number_set, data=request.data, partial=False)
    
    if serializer.is_valid():
        # Update number set
        updated_set = serializer.save()
        
        # Re-analyze with new numbers
        analysis_stats = analyze_numbers(updated_set.numbers)
        
        # Update or create analysis
        analysis, created = AnalysisResult.objects.update_or_create(
            number_set=updated_set,
            defaults=analysis_stats
        )
        
        response_data = NumberSetWithAnalysisSerializer(updated_set).data
        return Response(response_data)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
def partial_update_numbers(request, pk):
    
    number_set = get_object_or_404(NumberSet, pk=pk)
    serializer = NumberSetSerializer(number_set, data=request.data, partial=True)
    
    if serializer.is_valid():
        updated_set = serializer.save()
        
        # If numbers were updated, re-analyze
        if 'numbers' in request.data:
            analysis_stats = analyze_numbers(updated_set.numbers)
            AnalysisResult.objects.update_or_create(
                number_set=updated_set,
                defaults=analysis_stats
            )
        
        response_data = NumberSetWithAnalysisSerializer(updated_set).data
        return Response(response_data)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_numbers(request, pk):
   
    number_set = get_object_or_404(NumberSet, pk=pk)
    number_set.delete()
    return Response(
        {"message": f"Number set {pk} deleted successfully"},
        status=status.HTTP_204_NO_CONTENT
    )

@api_view(['GET'])
def get_analysis_only(request, pk):
  
    analysis = get_object_or_404(AnalysisResult, number_set_id=pk)
    serializer = AnalysisResultSerializer(analysis)
    return Response(serializer.data)

@api_view(['GET'])
def get_all_analyses(request):
   
    analyses = AnalysisResult.objects.select_related('number_set').all()
    serializer = AnalysisResultSerializer(analyses, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def compare_analyses(request):
  
    id1 = request.data.get('id1')
    id2 = request.data.get('id2')
    
    if not id1 or not id2:
        return Response(
            {"error": "Both id1 and id2 are required"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    try:
        set1 = NumberSet.objects.get(pk=id1)
        set2 = NumberSet.objects.get(pk=id2)
        analysis1 = set1.analysis
        analysis2 = set2.analysis
        
        comparison = {
            'set1': {
                'id': set1.id,
                'name': set1.name,
                'mean': float(analysis1.mean_value),
                'median': float(analysis1.median_value),
                'sum': float(analysis1.sum_value),
                'count': analysis1.count
            },
            'set2': {
                'id': set2.id,
                'name': set2.name,
                'mean': float(analysis2.mean_value),
                'median': float(analysis2.median_value),
                'sum': float(analysis2.sum_value),
                'count': analysis2.count
            },
            'differences': {
                'mean_diff': round(float(analysis2.mean_value - analysis1.mean_value), 2),
                'median_diff': round(float(analysis2.median_value - analysis1.median_value), 2),
                'sum_diff': round(float(analysis2.sum_value - analysis1.sum_value), 2),
                'percent_change': round(
                    ((analysis2.mean_value - analysis1.mean_value) / analysis1.mean_value) * 100 
                    if analysis1.mean_value != 0 else 0, 2
                )
            }
        }
        
        return Response(comparison)
        
    except NumberSet.DoesNotExist:
        return Response(
            {"error": "One or both number sets not found"},
            status=status.HTTP_404_NOT_FOUND
        )