import { HttpInterceptorFn } from '@angular/common/http';
import { constants } from '../../utils/constants/app.contants';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(constants.AUTHTOKEN_KEY);
  
  if (token!==null && ['POST', 'PUT', 'GET', 'DELETE'].includes(req.method)) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("Request with token:", req);
  }   
  return next(req).pipe(
    catchError(error => {
      console.error('Interceptor caught an error:', error);
      return throwError(() => error);
    })
  );
};
