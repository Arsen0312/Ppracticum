from rest_framework import generics

from .models import Teacher

from .serializers import TeacherListSerializer, TeacherSerializer


class TeacherListView(generics.ListAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherListSerializer


class TeacherDetailView(generics.RetrieveAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class TopTeachersView(generics.ListAPIView):
    serializer_class = TeacherListSerializer

    def get_queryset(self):
        return Teacher.objects.all().order_by("-rating")[:5]
