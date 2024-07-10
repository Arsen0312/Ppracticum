from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from django import forms

from .models import Course


class CourseValidateForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = "__all__"

    MAX_SKILLS = 4
    MAX_ADVANTAGES = 4

    def clean_skills(self):
        skills = self.cleaned_data["skills"]
        if skills.count() > self.MAX_SKILLS:
            raise ValidationError(
                _("Вы не можете добавить более %(max)d навыков к курсу.")
                % {"max": self.MAX_SKILLS}
            )
        return skills

    def clean_advantages(self):
        advantages = self.cleaned_data["advantages"]
        if advantages.count() > self.MAX_ADVANTAGES:
            raise ValidationError(
                _("Вы не можете добавить более %(max)d преимуществ к курсу.")
                % {"max": self.MAX_ADVANTAGES}
            )
        return advantages
