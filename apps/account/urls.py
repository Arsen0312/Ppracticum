from django.urls import path

from .views import TeacherListView, TeacherDetailView, TopTeachersView

urlpatterns = [
    path("teachers/", TeacherListView.as_view(), name="teacher-list"),
    path("teachers/<int:pk>/", TeacherDetailView.as_view(), name="teacher-detail"),
    path("top_teachers/", TopTeachersView.as_view(), name="top_teachers-list"),
]
