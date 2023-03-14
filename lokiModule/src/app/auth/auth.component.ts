import { take } from 'rxjs/operators';
import { AlertComponent } from './../shared/alert/alert/alert.component';
import { Router } from '@angular/router';
import { AuthResponseData, AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
// import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  isError = null;
  // @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;
  @ViewChild('dynamicAlertComp', {
    read: ViewContainerRef,
    static: false
  }) theViewContainerRef: ViewContainerRef;

  constructor(
    private AuthService: AuthService,
    private Router: Router,
    private ComponentFactoryResolver: ComponentFactoryResolver
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

    authObservable.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.Router.navigate(['/recipes']);
      },
      error => {
        this.isError = error;
        this.showErrorAlert(error);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onErrorHandle() {
    this.isError = null;
  }

  private showErrorAlert(errMessage: string) {
    // 建立 AlertComponent 工廠
    const AlertCmpFty = this.ComponentFactoryResolver.resolveComponentFactory(AlertComponent);
    this.theViewContainerRef.clear();

     // 插入 AlertComponent 到 ng-template 中
    const compRef = this.theViewContainerRef.createComponent(AlertCmpFty);

    compRef.instance.message = errMessage;
    compRef.instance.close.subscribe(() => {
      console.log(11);
      this.theViewContainerRef.clear();
    });

    //手動實例Component
    // const AlertCmpFty = this.ComponentFactoryResolver.resolveComponentFactory(AlertComponent);
    // const hostViewContainerRef = this.alertHost.ViewContainerRef;
    // hostViewContainerRef.clear();

    // const componentRef = hostViewContainerRef.createComponent(AlertCmpFty);
    // componentRef.instance.message = errMessage;
    // componentRef.instance.close.pipe(take(1)).subscribe(() => {
    //   hostViewContainerRef.clear();
    // });
  }
}