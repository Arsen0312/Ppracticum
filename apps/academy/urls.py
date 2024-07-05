from django.urls import path
from .views import (
    CourseListView,
    CourseRetrieveView,
    TopCoursesView,
)

urlpatterns = [
    path("courses/", CourseListView.as_view(), name="course-list"),
    path("top_courses/", TopCoursesView.as_view(), name="top_course-list"),
    path("courses/<int:pk>/", CourseRetrieveView.as_view(), name="course-detail"),
]
