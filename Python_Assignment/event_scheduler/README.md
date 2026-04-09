# Event Scheduler – Django Assignment 4

A beginner Django web app for creating, viewing, updating, and deleting events.
Users are created by the admin via `django-admin` / the Django admin panel.

---

## Project Structure

```
event_scheduler/
├── manage.py
├── requirements.txt
├── event_scheduler/         # Project config
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── events/                  # App
    ├── models.py            # Event model
    ├── forms.py             # EventForm with conflict validation
    ├── views.py             # List, Detail, Create, Update, Delete
    ├── urls.py
    ├── admin.py
    └── templates/events/
        ├── base.html
        ├── login.html
        ├── event_list.html
        ├── event_detail.html
        ├── event_form.html
        └── event_confirm_delete.html
```

---

## Setup & Run

### 1. Install Django
```bash
pip install django
```

### 2. Apply migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. Create a superuser (admin)
```bash
python manage.py createsuperuser
```

### 4. Create regular users (from Django Admin)
- Start the server: `python manage.py runserver`
- Go to: http://127.0.0.1:8000/admin/
- Login with your superuser credentials
- Click **Users → Add User** to create users

### 5. Use the app
- Visit: http://127.0.0.1:8000/
- Login with any user created in admin
- Create, view, edit, and delete your events

---

## Features

- **Login / Logout** using Django's built-in auth views
- **Users managed entirely by admin** — no self-registration
- **Event CRUD**: Create, Read, Update, Delete
- **Ownership**: each user only sees and manages their own events
- **Conflict validation**: prevents two events at the same date & time for the same user
- **Django Admin**: view and manage all events at `/admin/`

---

## Models

```python
class Event(models.Model):
    user        = ForeignKey(User)       # Django's built-in User
    name        = CharField(max_length=200)
    date        = DateField()
    time        = TimeField()
    description = TextField(blank=True)
    created_at  = DateTimeField(auto_now_add=True)
    updated_at  = DateTimeField(auto_now=True)
```

---

## URL Routes

| URL                        | View           | Description         |
|----------------------------|----------------|---------------------|
| `/`                        | event_list     | All events for user |
| `/event/create/`           | event_create   | Create new event    |
| `/event/<id>/`             | event_detail   | View event details  |
| `/event/<id>/update/`      | event_update   | Edit event          |
| `/event/<id>/delete/`      | event_delete   | Delete event        |
| `/login/`                  | LoginView      | Login page          |
| `/logout/`                 | LogoutView     | Logout              |
| `/admin/`                  | Django Admin   | Admin panel         |
