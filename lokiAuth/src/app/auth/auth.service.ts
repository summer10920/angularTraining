import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AuthResponseData {
  idToken: string; // Firebase 身份驗證 ID 令牌
  email: string; // 用戶的電子郵件
  refreshToken: string; // Firebase 身份驗證刷新token
  expiresIn: string; // token過期的秒數
  localId: string; // 用戶的uid
  registered?: boolean; // 電子郵件是否用於現有帳戶
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  singUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBD5oglUIsgkYiQlabvMw1Y8OGsGC_w6JA',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.errorHandle)
      // catchError(err => {
      //   let errorMsg = 'unknown Error';
      //   if (!err.error || !err.error.error) return throwError(errorMsg);

      //   switch (err.error.error.message) {
      //     case 'EMAIL_EXISTS':
      //       errorMsg = '電子郵件地址已被另一個帳戶使用。';
      //       break;
      //     case 'OPERATION_NOT_ALLOWED':
      //       errorMsg = '此項目禁用密碼登錄。';
      //       break;
      //     case 'TOO_MANY_ATTEMPTS_TRY_LATER':
      //       errorMsg = '由於異常活動，我們已阻止來自此設備的所有請求。稍後再試。';
      //       break;
      //   }
      //   return throwError(errorMsg);
      // })
    );
  }

  singIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBD5oglUIsgkYiQlabvMw1Y8OGsGC_w6JA',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.errorHandle)
    );
  }

  private errorHandle(errorRes: HttpErrorResponse) {
    let errorMsg = 'unknown Error';
    if (!errorRes.error || !errorRes.error.error) return throwError(errorMsg);

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = '電子郵件地址已被另一個帳戶使用。';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMsg = '此項目禁用密碼登錄。';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMsg = '由於異常活動，我們已阻止來自此設備的所有請求。稍後再試。';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = '沒有與此標識符對應的用戶記錄。該用戶可能已被刪除。';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = '密碼無效或用戶沒有密碼。';
        break;
      case 'USER_DISABLED':
        errorMsg = '用戶帳戶已被管理員禁用。';
        break;
    }

    return throwError(errorMsg);
  }
}
