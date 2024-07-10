from rest_framework import generics

from .serializers import (
    OutsourcingBenefitSerializer,
    OutsourcingServiceSerializer,
    OutsourcingSkillSerializer,
)
from .models import OutsourcingService, OutsourcingBenefit, OutsourcingSkill


class OutsourcingServiceListView(generics.ListAPIView):
    queryset = OutsourcingService.objects.all()
    serializer_class = OutsourcingServiceSerializer


class OutsourcingBenefitListView(generics.ListAPIView):
    queryset = OutsourcingBenefit.objects.all()
    serializer_class = OutsourcingBenefitSerializer


class OutsourcingSkillListView(generics.ListAPIView):
    queryset = OutsourcingSkill.objects.all()
    serializer_class = OutsourcingSkillSerializer
