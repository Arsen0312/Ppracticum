from django.urls import path
from .views import (
    SkillListView,
    SkillRetrieveView,
    AdvantageListView,
    AdvantageRetrieveView,
    CourseListView,
    CourseRetrieveView,
)

urlpatterns = [
    path("skills/", SkillListView.as_view(), name="skill-list"),
    path("skills/<int:pk>/", SkillRetrieveView.as_view(), name="skill-detail"),
    path("advantages/", AdvantageListView.as_view(), name="advantage-list"),
    path(
        "advantages/<int:pk>/", AdvantageRetrieveView.as_view(), name="advantage-detail"
    ),
    path("courses/", CourseListView.as_view(), name="course-list"),
    path("courses/<int:pk>/", CourseRetrieveView.as_view(), name="course-detail"),
]
