import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // activateEmitter = new EventEmitter<boolean>();
  activateEmitter = new Subject<boolean>();
  constructor() { }
}
