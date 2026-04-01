import { HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      // Log the error
      console.error('HTTP Error:', error);
      
      // You can show a toast notification here
      // For now, just throw the error
      return throwError(() => error);
    })
  );
};