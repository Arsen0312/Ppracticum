from rest_framework import serializers
from .models import OutsourcingService, OutsourcingBenefit, OutsourcingSkill


class OutsourcingServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = OutsourcingService
        fields = "__all__"


class OutsourcingBenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = OutsourcingBenefit
        fields = "__all__"


class OutsourcingSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = OutsourcingSkill
        fields = "__all__"
