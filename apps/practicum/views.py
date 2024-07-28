from rest_framework import generics

from apps.practicum.serializers import (
    BenefitSerializer,
    FounderSectionSerializer,
    LeadSerializer,
    ReviewSerializer, NewsSerializer,
)

from .models import Benefit, FounderSection, Lead, Review, News


class LeadView(generics.CreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


class BenefitView(generics.ListAPIView):
    queryset = Benefit.objects.all()[:5]
    serializer_class = BenefitSerializer


class FounderSectionView(generics.ListAPIView):
    queryset = FounderSection.objects.all()[:1]
    serializer_class = FounderSectionSerializer


class ReviewView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class NewsView(generics.ListAPIView):
    queryset = News.objects.all().order_by('-rating')
    serializer_class = NewsSerializer
