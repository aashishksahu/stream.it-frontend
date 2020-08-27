import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  

    const authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
    return next.handle(authReq);
  }

}
