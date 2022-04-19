import { LoggingService } from './../logging.service';
import { AccountsService } from './../accounts.service'; //※重點，我們要宣告服務 AccountsService 來源
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService, AccountsService]
  // providers: [LoggingService]
})
export class NewAccountComponent {
  //※重點 - 原本配自訂事件是為了@Output給App，現在透過服務所以就不需要了
  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(
    private theLoggingService: LoggingService,
    private accountsService: AccountsService
  ) {
     // ※重點 - 這裡會在建構實體化時會執行一次
    accountsService.statusAlert.subscribe(
      (status: string) => alert('the status is ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    //※重點 - 原本配自訂事件是為了@Output給App，現在透過服務所以就不需要了
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    //※重點 - 直接將資料提供給服務內的方法做新增作業
    this.accountsService.AccountAdd({ name: accountName, status: accountStatus });

    // console.log('A server status changed, new status: ' + accountStatus);
    // this.theLoggingService.logState(accountStatus); 
    //※重點 取消該元件要對服務做的事，到時候由account服務來做
  }
}