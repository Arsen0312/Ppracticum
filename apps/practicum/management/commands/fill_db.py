from django.core.management.base import BaseCommand

from apps.academy.utils import fill_academy
from apps.practicum.utils import fill_practicum


class Command(BaseCommand):
    help = "Создает стандартные данные"

    def handle(self, *args, **kwargs):
        fill_practicum()
        fill_academy()
        create_admin()
        self.stdout.write(self.style.SUCCESS("Стандартные данные успешно созданы"))


from django.contrib.auth.models import User


def create_admin():
    username = "admin"
    password = "1"

    if not User.objects.filter(username=username).exists():
        User.objects.create_superuser(username=username, password=password)
