import { HttpInterceptor, HttpEventType, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoginInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Login 攔截處理中');
    console.log(req.url);

    return next.handle(req).pipe(
      tap(
        event => {
          if (event.type === HttpEventType.Response) console.log('Login is Response');
        }
      )
    );
  }
}