# Используем базовый образ Python
FROM python:3.12

# Устанавливаем переменную окружения
ENV PYTHONUNBUFFERED 1

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только файл зависимостей
COPY requirements.txt /app/

# Устанавливаем зависимости
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Копируем оставшийся код приложения
COPY . /app/
