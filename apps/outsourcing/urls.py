from django.urls import path
from .views import (
    OutsourcingServiceListView,
    OutsourcingBenefitListView,
    OutsourcingSkillListView,
)

urlpatterns = [
    path(
        "outsourcing_services/",
        OutsourcingServiceListView.as_view(),
        name="outsourcing-service-list",
    ),
    path(
        "outsourcing_benefits/",
        OutsourcingBenefitListView.as_view(),
        name="outsourcing-benefit-list",
    ),
    path(
        "outsourcing_skills/",
        OutsourcingSkillListView.as_view(),
        name="outsourcing-skill-list",
    ),
]
