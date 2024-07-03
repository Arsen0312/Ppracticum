from rest_framework import serializers

from .models import Lead, Benefit, Review, FounderSection


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = "__all__"


class BenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefit
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class FounderSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FounderSection
        fields = "__all__"
