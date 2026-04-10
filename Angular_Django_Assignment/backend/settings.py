"""
Django Settings - Simple and beginner-friendly
"""

SECRET_KEY = 'my-simple-secret-key-for-learning'

DEBUG = True

ALLOWED_HOSTS = ['*']  # Allow all hosts during development

# Apps installed in our project
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',          # ← REQUIRED - Authentication framework
    'django.contrib.contenttypes',  # ← REQUIRED - Needed by auth
    'django.contrib.sessions',      # ← REQUIRED - Session management
    'django.contrib.messages',      # ← REQUIRED - Message framework
    'django.contrib.staticfiles',
    
    # Third-party apps
    'rest_framework',      # Django REST Framework for building APIs
    'corsheaders',         # Allows Angular (port 4200) to talk to Django (port 8000)
    
    # Your apps
    'api',                 # Our own app where models and views live
]

# Middleware - runs on every request/response
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',   # Must be first for CORS to work
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',  
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',  
    'django.contrib.messages.middleware.MessageMiddleware',  
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'api.middleware.LogRequestMiddleware'    ]

ROOT_URLCONF = 'urls'

# Templates - Required for admin and messages
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',  # ← REQUIRED
                'django.contrib.messages.context_processors.messages',  # ← REQUIRED
            ],
        },
    },
]

# Allow Angular dev server to call Django APIs
CORS_ALLOW_ALL_ORIGINS = True

# Database - PostgreSQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'angular_django',
        'USER': 'postgres',
        'PASSWORD': 'hrishikesh',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
STATIC_URL = 'static/'

# DRF Settings (optional but recommended)
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [],  # No auth for now
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',  # Allow all access
    ],
}

# Session and authentication settings
SESSION_ENGINE = 'django.contrib.sessions.backends.db'