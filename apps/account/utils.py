from django.contrib.auth.models import User


def create_admin():
    username = "admin"
    password = "1"

    if not User.objects.filter(username=username).exists():
        User.objects.create_superuser(username=username, password=password)


def fill_account():
    create_admin()
