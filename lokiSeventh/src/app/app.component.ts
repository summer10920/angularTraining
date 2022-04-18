import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'likes': new FormArray([]) //※重點
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
  onAddlike() { //※重點
    const newCtl = new FormControl(null, Validators.required);

    //※重點 - 透過GET找到這個FormArray，並給予結果為FormArray型別
    (<FormArray>this.myForm.get('likes')).push(newCtl);
  }
  getControls() { //※重點
    return (<FormArray>this.myForm.get('likes')).controls;
  }
}