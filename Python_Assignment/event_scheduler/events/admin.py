from django.contrib import admin
from .models import Event

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['name', 'user', 'date', 'time', 'created_at']
    list_filter = ['user', 'date']
    search_fields = ['name', 'description']
