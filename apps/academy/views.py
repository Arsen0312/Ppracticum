from rest_framework import generics

from .serializers import (
    CourseListSerializer,
    CourseSerializer,
)

from .models import Course


class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseListSerializer


class CourseRetrieveView(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class TopCoursesView(generics.ListAPIView):
    serializer_class = CourseListSerializer

    def get_queryset(self):
        return Course.objects.all().order_by("-rating")[:5]
