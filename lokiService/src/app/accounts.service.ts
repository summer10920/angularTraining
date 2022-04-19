import { Injectable, EventEmitter } from '@angular/core';//※重要
import { LoggingService } from './logging.service'; 


@Injectable() export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusAlert=new EventEmitter<string>();//添加一個自訂事件的屬性

  constructor(private loggingService: LoggingService) { }

  AccountAdd(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
    this.loggingService.logState(newAccount.status);
  }

  StatusChange(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logState(newStatus);
  }
}