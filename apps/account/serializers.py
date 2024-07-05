from rest_framework import serializers

from .models import Teacher, Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class TeacherSerializer(serializers.ModelSerializer):
    contacts = ContactSerializer()

    class Meta:
        model = Teacher
        fields = "__all__"


class TeacherListSerializer(TeacherSerializer):
    class Meta:
        model = Teacher
        fields = ("id", "first_name", "last_name", "role", "rating")
