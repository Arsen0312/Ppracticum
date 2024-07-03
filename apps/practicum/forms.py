from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from django import forms

from .models import FounderSection


class FounderSectionForm(forms.ModelForm):
    class Meta:
        model = FounderSection
        fields = "__all__"

    MAX_PARAGRAPHS = 6

    def clean_paragraphs(self):
        paragraphs = self.cleaned_data["paragraphs"]
        if paragraphs:
            num_paragraphs = len(paragraphs.split("\n"))
            if num_paragraphs > self.MAX_PARAGRAPHS:
                raise ValidationError(
                    _("Вы не можете добавить более %(max)d параграфов.")
                    % {"max": self.MAX_PARAGRAPHS}
                )
        return paragraphs
