from django.urls import path

from apps.practicum.views import BenefitView, FounderSectionView, LeadView, ReviewView, NewsView

urlpatterns = [
    path("lead/", LeadView.as_view(), name="lead-create"),
    path("benefits/", BenefitView.as_view(), name="benefits-list"),
    path("reviews/", ReviewView.as_view(), name="reviews-list"),
    path("founder_section/", FounderSectionView.as_view(), name="founder_section-list"),
    path("news/", NewsView.as_view(), name="news-list"),
]
