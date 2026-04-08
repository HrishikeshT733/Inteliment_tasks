from rest_framework import serializers
from .models import NumberSet, AnalysisResult

class NumberSetSerializer(serializers.ModelSerializer):
    """Serializer for NumberSet model"""
    class Meta:
        model = NumberSet
        fields = ['id', 'name', 'numbers', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def validate_numbers(self, value):
        """Validate that numbers is a list of numbers"""
        if not isinstance(value, list):
            raise serializers.ValidationError("Numbers must be a list")
        
        if len(value) == 0:
            raise serializers.ValidationError("Numbers list cannot be empty")
        
        # Convert all to float
        try:
            validated = [float(x) for x in value]
        except (ValueError, TypeError):
            raise serializers.ValidationError("All values must be numbers")
        
        return validated

class AnalysisResultSerializer(serializers.ModelSerializer):
    """Serializer for AnalysisResult model"""
    number_set_name = serializers.CharField(source='number_set.name', read_only=True)
    numbers = serializers.SerializerMethodField()
    
    class Meta:
        model = AnalysisResult
        fields = [
            'id', 'number_set', 'number_set_name', 'numbers',
            'count', 'sum_value', 'mean_value', 'median_value',
            'min_value', 'max_value', 'std_value', 'variance_value',
            'range_value', 'q1_value', 'q3_value',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def get_numbers(self, obj):
        """Get original numbers from the number set"""
        return obj.number_set.numbers

class NumberSetWithAnalysisSerializer(serializers.ModelSerializer):
    """Combined serializer with analysis results"""
    analysis = AnalysisResultSerializer(read_only=True)
    
    class Meta:
        model = NumberSet
        fields = ['id', 'name', 'numbers', 'analysis', 'created_at', 'updated_at']