import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "./auth/auth.service";
import { Router } from '@angular/router';

@Injectable()
export class InterceptorService {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  

    const authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
    return next.handle(authReq);
  }

}
