import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// 不宣告於此，稍晚定義於 app.modules.ts內
// @Injectable({
//   providedIn: 'root'
// })

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('API 攔截處理中');

    // 在請求被發送前執行一些前置處理，例如加入 token 到 headers 中
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Loki insert by intercept!!')
    });
    //這裡用set修改，也可以使用append插入新的headers其他屬性資訊

    // 攔截並繼續執行請求，處理後續的響應
    return next.handle(authReq).pipe(
      tap(
        event => console.log('HttpResponse', event),
        error => console.log('HttpErrorResponse', error)
      )
    );
  }
  // constructor() { }
}
