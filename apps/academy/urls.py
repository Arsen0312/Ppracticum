from django.urls import path
from .views import (
    CourseListView,
    CourseRetrieveView,
)

urlpatterns = [
    path("courses/", CourseListView.as_view(), name="course-list"),
    path("courses/<int:pk>/", CourseRetrieveView.as_view(), name="course-detail"),
]
