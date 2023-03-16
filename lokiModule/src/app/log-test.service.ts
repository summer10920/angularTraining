// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class LogTestService {
  lastLog: string;
  printLog(message: string) {
    console.log('now:' + message);
    console.log('last:' + this.lastLog);
    this.lastLog = message;
  }
}