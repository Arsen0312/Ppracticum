from rest_framework import serializers

from .models import Lead, Benefit, Review, FounderSection, Paragraphs


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


class ParagraphsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paragraphs
        fields = (
            'id',
            'paragraphs',
        )


class FounderSectionSerializer(serializers.ModelSerializer):
    paragraphs = ParagraphsSerializer(many=True, read_only=True)
    class Meta:
        model = FounderSection
        fields =(
            'full_name',
            'image',
            'description',
            'paragraphs',
        )
