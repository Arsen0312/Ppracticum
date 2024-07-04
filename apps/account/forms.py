from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from django import forms

from .models import Teacher


class TeacherForm(forms.ModelForm):
    class Meta:
        model = Teacher
        fields = "__all__"

    MAX_EXPERIENCE = 20

    def clean_experience(self):
        experience = self.cleaned_data["experience"]
        if experience:
            num_experience = len(experience.split("\n"))
            if num_experience > self.MAX_EXPERIENCE:
                raise ValidationError(
                    _("Вы не можете добавить более %(max)d пунктов в опыте.")
                    % {"max": self.MAX_EXPERIENCE}
                )
        return experience
