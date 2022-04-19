import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  myForm!: FormGroup;
  lockUserName = ['Loki', 'Max']; //※重點

  ngOnInit() {
    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkLuckName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], <AsyncValidatorFn>this.checkLuckMailAsync),
      }),
      'gender': new FormControl('male'),
      'likes': new FormArray([])
    });

    this.myForm.valueChanges.subscribe(val => console.log(val));  //訂閱FormGrup其中當有值變化時
    this.myForm.statusChanges.subscribe(val => console.log(val));  //訂閱FormGrup其中當有驗證結果變化時

    this.myForm.patchValue({
      userData: {
        username: 'July',
        email: 'cc@cc'
      },
      gender: 'female',
      likes: []
    });
    this.myForm.patchValue({
      userData: {
        username: 'Marry',
        email: 'dd@cc'
      }
    });
  }


  onSubmit() {
    // console.log(this.myForm.value);
    // console.log(this.myForm);

    // console.log(this.myForm.controls['userData'].get('username')?.errors);
    console.log(this.myForm.get('userData.username')?.errors); // 同上

    this.myForm.reset();
  }
  onAddlike() {
    const newCtl = new FormControl(null, Validators.required);
    (<FormArray>this.myForm.get('likes')).push(newCtl);
  }
  getControls() {
    return (<FormArray>this.myForm.get('likes')).controls;
  }
  //※重點 - 非強迫，可指定return 的 強型別
  checkLuckName(ctl: FormControl): { [s: string]: boolean } | null {
    // 找到會提供該位置索引數字，當找不到時則為-1
    if (this.lockUserName.indexOf(ctl.value) !== -1) return { 'nameLuck': true };
    return null;
  }

  checkLuckMailAsync(ctl: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        if (ctl.value === 'a@a') res({ 'emailLuck': true });
        else res(null);
        // 這裡不要用rej(null)，避免發生error而中斷valid的後續動作
      }, 2000);
    });
    return promise;
  }
}