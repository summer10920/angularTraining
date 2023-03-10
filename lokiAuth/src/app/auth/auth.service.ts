import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  idToken: string; // Firebase 身份驗證 ID 令牌
  email: string; // 用戶的電子郵件
  refreshToken: string; // Firebase 身份驗證刷新token
  expiresIn: string; // token過期的秒數
  localId: string; // 用戶的uid
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
    );
  }
}
