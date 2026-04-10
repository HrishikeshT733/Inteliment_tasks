#!/usr/bin/env python
"""
manage.py - Django command-line tool
Usage:
  python manage.py runserver     <- Start the server
  python manage.py makemigrations <- Create migration files
  python manage.py migrate       <- Apply migrations (create tables)
"""
import os
import sys

def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'settings')
    from django.core.management import execute_from_command_line
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
