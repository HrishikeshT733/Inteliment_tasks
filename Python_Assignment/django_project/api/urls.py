from django.urls import path
from . import views

urlpatterns = [
   
    path('numbers/', views.get_all_numbers, name='get-all-numbers'),
    path('numbers/create/', views.create_numbers, name='create-numbers'),
    path('numbers/csv/', views.create_numbers_from_csv, name='create-numbers-csv'),
    path('numbers/<int:pk>/', views.get_number_set, name='get-number-set'),
    path('numbers/<int:pk>/update/', views.update_numbers, name='update-numbers'),
    path('numbers/<int:pk>/partial/', views.partial_update_numbers, name='partial-update'),
    path('numbers/<int:pk>/delete/', views.delete_numbers, name='delete-numbers'),
    path('analysis/', views.get_all_analyses, name='get-all-analyses'),
    path('analysis/<int:pk>/', views.get_analysis_only, name='get-analysis'),
    path('compare/', views.compare_analyses, name='compare'),
]