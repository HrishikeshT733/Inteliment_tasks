from django.db import models
from django.core.validators import MinValueValidator
from decimal import Decimal

class NumberSet(models.Model):
    """Store original numbers"""
    name = models.CharField(max_length=200, help_text="Name/Identifier for this number set")
    numbers = models.JSONField(help_text="Array of numbers", default=list)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.created_at}"
    
    def get_numbers_list(self):
        """Return numbers as Python list"""
        return self.numbers if isinstance(self.numbers, list) else []

class AnalysisResult(models.Model):
    """Store analysis results for each number set"""
    number_set = models.OneToOneField(
        NumberSet, 
        on_delete=models.CASCADE,
        related_name='analysis'
    )
    
    # Basic statistics
    count = models.IntegerField()
    sum_value = models.DecimalField(max_digits=15, decimal_places=2)
    mean_value = models.DecimalField(max_digits=15, decimal_places=2)
    median_value = models.DecimalField(max_digits=15, decimal_places=2)
    min_value = models.DecimalField(max_digits=15, decimal_places=2)
    max_value = models.DecimalField(max_digits=15, decimal_places=2)
    std_value = models.DecimalField(max_digits=15, decimal_places=2)
    variance_value = models.DecimalField(max_digits=15, decimal_places=2)
    
    # Additional stats
    range_value = models.DecimalField(max_digits=15, decimal_places=2)
    q1_value = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
    q3_value = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Analysis for {self.number_set.name}"