import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  myForm!: FormGroup;
  lockUserName = ['Loki', 'Max'];

  ngOnInit() {
    this.myForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    });
  }

  //非強迫，可指定return 的 強型別
  checkLuckName(ctl: FormControl): { [s: string]: boolean } | null {
    if (this.lockUserName.indexOf(ctl.value)) return { 'nameLuck': true };
    return null;
  }
}