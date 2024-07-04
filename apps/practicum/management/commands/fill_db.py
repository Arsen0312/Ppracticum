from django.core.management.base import BaseCommand

from apps.academy.utils import fill_academy
from apps.account.commands.create_admin import create_admin
from apps.account.utils import fill_account
from apps.outsourcing.utils import fill_outsourcing
from apps.practicum.utils import fill_practicum


class Command(BaseCommand):
    help = "Создает стандартные данные"

    def handle(self, *args, **kwargs):
        fill_practicum()
        fill_academy()
        fill_account()
        fill_outsourcing()
        create_admin()
        self.stdout.write(self.style.SUCCESS("Стандартные данные успешно созданы"))
