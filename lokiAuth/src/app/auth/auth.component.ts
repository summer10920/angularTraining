import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

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

    if (this.isLoginMode) {
      // 登入作業
    } else {
      // 註冊作業
      this.isLoading = true;
      this.AuthService.singUp(form.value.email, form.value.password).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
        },
        error => {
          // console.error(error);
          // this.isError = error.error.error.message;
          this.isError = error;
          this.isLoading = false;
        }
      );
    }

    form.reset();
  }
}