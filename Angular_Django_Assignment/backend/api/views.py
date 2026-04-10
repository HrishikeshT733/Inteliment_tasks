
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Person


@api_view(['POST'])
def submit_form(request):
    """Save form data to database"""
    data = request.data
    gender = data.get('gender', '').lower();
    # Check if email exists
    if Person.objects.filter(email=data.get('email')).exists():
        return Response(
            {'message': 'Email already registered!'},
            status=status.HTTP_400_BAD_REQUEST
        )
    ALLOWED_GENDERS = ['male', 'female', 'other']
    
    if gender not in ALLOWED_GENDERS:
        return Response(
            {'message': f'Gender must be one of: {", ".join(ALLOWED_GENDERS)}'},
            status=status.HTTP_400_BAD_REQUEST
        )
    # Create and save
    person = Person.objects.create(
        name=data.get('name'),
        email=data.get('email'),
        age=data.get('age'),
        gender=data.get('gender')
    )
    
    return Response(
        {'message': 'Record saved successfully!'},
        status=status.HTTP_201_CREATED
    )


@api_view(['GET'])
def get_records(request):
    """Get all records"""
    persons = Person.objects.all().order_by('-created_at')
    
    # Convert to list of dictionaries
    data = list(persons.values('id', 'name', 'email', 'age', 'gender', 'created_at'))
    
    return Response(data)