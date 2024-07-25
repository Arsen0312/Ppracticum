from rest_framework import serializers
from .models import Course
from .models import Skill, Advantage
from ..account.models import Teacher


class CourseTeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ("id", "first_name", "last_name", "role", "avatar")


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"


class AdvantageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advantage
        fields = "__all__"


class CourseSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    advantages = AdvantageSerializer(many=True, read_only=True)
    teachers = CourseTeacherSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = "__all__"


class CourseListSerializer(CourseSerializer):
    class Meta:
        model = Course
        fields = ("id", "title", "rating")
