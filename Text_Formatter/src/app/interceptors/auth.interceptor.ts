import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Get auth token from localStorage (or session storage)
  const authToken = localStorage.getItem('auth_token');
  
  // If token exists, add it to request headers
  if (authToken) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next(authReq);
  }
  
  // If no token, forward the original request
  return next(req);
};