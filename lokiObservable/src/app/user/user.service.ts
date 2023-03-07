import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  activateEmitter = new EventEmitter<boolean>();
  constructor() { }
}
