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
