import { AuthResponseData, AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  isError = null;

  constructor(
    private AuthService: AuthService
  ) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    if (form.invalid) return;

    let authObservable: Observable<AuthResponseData>;
    this.isLoading = true;

    if (this.isLoginMode)
      // 登入作業
      authObservable = this.AuthService.singIn(form.value.email, form.value.password);

    else
      // 註冊作業
      authObservable = this.AuthService.singUp(form.value.email, form.value.password);
    // this.AuthService.singUp(form.value.email, form.value.password).subscribe(
    //   resData => {
    //     console.log(resData);
    //     this.isLoading = false;
    //   },
    //   error => {
    //     // console.error(error);
    //     // this.isError = error.error.error.message;
    //     this.isError = error;
    //     this.isLoading = false;
    //   }
    // );

    authObservable.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
      },
      error => {
        this.isError = error;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}