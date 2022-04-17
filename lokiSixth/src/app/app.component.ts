import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') viewForm!: NgForm;
  defaultAns = 'pet'; //※重點
  answer='your answer';
  
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }
  onSubmit() {
    console.log(this.viewForm.value);
  }
}