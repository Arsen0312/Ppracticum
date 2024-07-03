from rest_framework import generics

from .serializers import (
    AdvantageListSerializer,
    CourseListSerializer,
    CourseSerializer,
    SkillListSerializer,
)
from .serializers import SkillSerializer
from .serializers import AdvantageSerializer

from .models import Course
from .models import Skill
from .models import Advantage


class AdvantageListView(generics.ListAPIView):
    queryset = Advantage.objects.all()
    serializer_class = AdvantageListSerializer


class AdvantageRetrieveView(generics.RetrieveAPIView):
    queryset = Advantage.objects.all()
    serializer_class = AdvantageSerializer


class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseListSerializer


class CourseRetrieveView(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillListSerializer


class SkillRetrieveView(generics.RetrieveAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
