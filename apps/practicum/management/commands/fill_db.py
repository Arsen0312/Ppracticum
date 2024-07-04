from django.core.management.base import BaseCommand

from apps.academy.utils import fill_academy
from apps.account.utils import fill_account
from apps.practicum.utils import fill_practicum


class Command(BaseCommand):
    help = "Создает стандартные данные"

    def handle(self, *args, **kwargs):
        fill_practicum()
        fill_academy()
        fill_account()
        self.stdout.write(self.style.SUCCESS("Стандартные данные успешно созданы"))
