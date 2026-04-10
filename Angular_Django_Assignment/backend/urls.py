"""
Main URL file - connects URLs to our API views
"""
from django.urls import path
from api import views

urlpatterns = [
    path('api/submit/', views.submit_form),  
    path('api/records/', views.get_records),  
]
