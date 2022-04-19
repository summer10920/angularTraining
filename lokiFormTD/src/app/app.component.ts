import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') viewForm!: NgForm;
  defaultAns = 'pet';
  answer = 'your answer';
  genders = ['man', 'woman']; //※重點

  suggestUserName() {
    const suggestedName = 'Superuser';
    // const defaultData = {
    //   gender: "man",
    //   secret: "pet",
    //   userAns: "your sky",
    //   userData: { username: 'super', email: 'aa@aa' }
    // };
    // this.viewForm.setValue(defaultData);
    this.viewForm.form.patchValue({
      userData: { username: suggestedName }
    });
  }
  onSubmit() {
    console.log(this.viewForm.value);
    this.viewForm.reset();
  }
}