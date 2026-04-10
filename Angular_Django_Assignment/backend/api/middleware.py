"""
middleware.py - Custom middleware that runs on EVERY request.

Middleware sits between the browser and your views.
Request flow:  Browser → Middleware → View → Middleware → Browser

This middleware does two things:
  1. Logs every request (method + URL + time)
  2. Adds a custom header to every response
"""
import datetime


class LogRequestMiddleware:

    def __init__(self, get_response):
        # This runs once when Django starts
        self.get_response = get_response

    def __call__(self, request):
        # ---- BEFORE the view runs ----
        now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        print(f"[{now}]  {request.method}  {request.path}")

        # Call the actual view
        response = self.get_response(request)

        # ---- AFTER the view runs ----
        # Add a custom header to every response
        response['X-POWERED-BY'] = 'MyDjangoApp'

        return response
