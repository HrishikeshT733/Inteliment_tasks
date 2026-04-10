"""
models.py - Defines what our database table looks like.
Each field here becomes a column in the database.
"""
from django.db import models

class Person(models.Model):
    name       = models.CharField(max_length=100)    # Text, max 100 chars
    email      = models.EmailField(unique=True)      # Email field (validated) - UNIQUE
    age        = models.IntegerField()                # Number
    gender     = models.CharField(max_length=10)    # Our extra field
    created_at = models.DateTimeField(auto_now_add=True)  # Auto-set on save

    def __str__(self):
        # How this object looks when printed
        return f"{self.name} ({self.email})"