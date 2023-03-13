import { take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private AuthService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.AuthService.userSbj.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) return next.handle(req);

        const modifyReq = req.clone({
          params: new HttpParams().set('auth', user.token)
        });
        return next.handle(modifyReq);
      })
    );
  }
}
