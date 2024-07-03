from rest_framework import generics

from apps.practicum.serializers import (
    BenefitSerializer,
    FounderSectionSerializer,
    LeadSerializer,
    ReviewSerializer,
)

from .models import Benefit, FounderSection, Lead, Review


class LeadView(generics.CreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


class BenefitView(generics.ListAPIView):
    queryset = Benefit.objects.all()
    serializer_class = BenefitSerializer


class FounderSectionView(generics.ListAPIView):
    queryset = FounderSection.objects.all()
    serializer_class = FounderSectionSerializer


class ReviewView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
