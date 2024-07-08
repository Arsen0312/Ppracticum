import contextlib

from pathlib import Path
from decouple import config


BASE_DIR = Path(__file__).resolve().parent.parent


SECRET_KEY = config("SECRET_KEY")
DEBUG = config("DEBUG", cast=bool)
ALLOWED_HOSTS = config("ALLOWED_HOSTS").split(", ")
DOCKER_STARTUP = config("DOCKER_STARTUP", cast=bool, default=False)


MY_APPS = ["apps.academy", "apps.practicum", "apps.account", "apps.outsourcing"]

THIRD_PARTY_APPS = [
    "corsheaders",
    "rest_framework",
    "django_filters",
    "drf_yasg",
    "phonenumber_field",
    'drf_spectacular',

]

INSTALLED_APPS = (
    [
        "jazzmin",
        "django.contrib.admin",
        "django.contrib.auth",
        "django.contrib.contenttypes",
        "django.contrib.sessions",
        "django.contrib.messages",
        "django.contrib.staticfiles",
    ]
    + MY_APPS
    + THIRD_PARTY_APPS
)


MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]


ROOT_URLCONF = "config.urls"


TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]


WSGI_APPLICATION = "config.wsgi.application"

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('POSTGRES_DB'),
        'USER': config('POSTGRES_USER'),
        'PASSWORD': config('POSTGRES_PASSWORD'),
        'HOST': config('POSTGRES_HOST'),
        'PORT': config('POSTGRES_PORT'),
    }
}


AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


LANGUAGE_CODE = "ru-RU"
TIME_ZONE = "Asia/Bishkek"

USE_I18N = True
USE_TZ = True


STATIC_URL = "/back-static/"
STATICFILES_DIRS = [BASE_DIR / "staticfiles"]
STATIC_ROOT = BASE_DIR / "back-static"

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"


DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


CORS_ALLOW_CREDENTIALS = config("CORS_ALLOW_CREDENTIALS", cast=bool)
CORS_ALLOWED_ORIGINS = config("CORS_ALLOWED_ORIGINS").split(", ")


X_FRAME_OPTIONS = "SAMEORIGIN"
CSP_FRAME_ANCESTORS = ("'self'", "127.0.0.1")
CSP_DEFAULT_SRC = ("'self'", "127.0.0.1")
CSP_STYLE_SRC = (
    "'self'",
    "'unsafe-inline'",
    "stackpath.bootstrapcdn.com",
    "cdn.ckeditor.com",
)
CSP_FONT_SRC = ("'self'", "stackpath.bootstrapcdn.com", "cdn.ckeditor.com", "data:")
CSP_SCRIPT_SRC = (
    "'self'",
    "'unsafe-inline'",
    "stackpath.bootstrapcdn.com",
    "cdn.ckeditor.com",
)
CSP_IMG_SRC = ("'self'", "data:", "cdn.ckeditor.com")


CSRF_COOKIE_HTTPONLY = True
CSRF_TRUSTED_ORIGINS = config("CSRF_TRUSTED_ORIGINS").split(", ")

# REST FRAMEWORK
REST_FRAMEWORK = {
    'DEFAULT_DATETIME_FORMAT': '%d.%m.%Y %H:%M:%S',
    'DATE_FORMAT': '%d.%m.%Y',
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ],
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 10,
}

# drf_spectacular config
SPECTACULAR_SETTINGS = {
    'TITLE': "AYAR GROUP's API",
    'DESCRIPTION': 'AYAR GROUP',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
}

JAZZMIN_SETTINGS = {
    "site_title": "Practicum Admin",
    "site_header": "Practicum",
    "site_brand": "Practicum",
    "site_logo": "icon_practicum.png",
    "login_logo": "practicum_login_logo.png",
    "login_logo_dark": None,
    "site_logo_classes": "img-circle",
    "site_icon": None,
    "welcome_sign": 'Имя пользователя: "admin" | Пароль: "1"',
    "copyright": "Practicum",
    "search_model": ["auth.User", "auth.Group"],
    "user_avatar": None,
    "topmenu_links": [
        {"name": "Главная", "url": "admin:index", "permissions": ["auth.view_user"]},
        {
            "name": "Поддержка",
            "url": "https://github.com/Dastan-Oskonbaev",
            "new_window": True,
        },
        {"model": "auth.User"},
    ],
    "usermenu_links": [
        {
            "name": "Поддержка",
            "url": "https://github.com/Dastan-Oskonbaev",
            "new_window": True,
        },
        {"model": "auth.user"},
    ],
    "show_sidebar": True,
    "navigation_expanded": True,
    "hide_apps": [],
    "hide_models": [],
    "order_with_respect_to": [
        "auth",
    ],
    "custom_links": {},
    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "auth.Group": "fas fa-users",
    },
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",
    "related_modal_active": True,
    "custom_css": None,
    "custom_js": None,
    "use_google_fonts_cdn": True,
    "show_ui_builder": False,
    "changeform_format": "horizontal_tabs",
    "changeform_format_overrides": {
        "auth.user": "collapsible",
        "auth.group": "vertical_tabs",
    },
}

JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": True,
    "footer_small_text": True,
    "body_small_text": False,
    "brand_small_text": True,
    "brand_colour": "navbar-danger",
    "accent": "accent-danger",
    "navbar": "navbar-danger navbar-dark",
    "no_navbar_border": True,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": True,
    "sidebar_fixed": True,
    "sidebar": "sidebar-dark-danger",
    "sidebar_nav_small_text": True,
    "sidebar_disable_expand": True,
    "sidebar_nav_child_indent": True,
    "sidebar_nav_compact_style": True,
    "sidebar_nav_legacy_style": True,
    "sidebar_nav_flat_style": True,
    "theme": "yeti",
    "dark_mode_theme": None,
    "button_classes": {
        "primary": "btn-outline-primary",
        "secondary": "btn-outline-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success",
    },
    "actions_sticky_top": True,
}


RETAILCRM_URL = config("RETAILCRM_URL", "")
RETAILCRM_KEY = config("RETAILCRM_KEY", "")

with contextlib.suppress(ImportError):
    from .local_settings import *