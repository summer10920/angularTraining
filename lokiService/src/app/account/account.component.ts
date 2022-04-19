import { LoggingService } from './../logging.service';
import { AccountsService } from './../accounts.service';  //※重點
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService, AccountsService]
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account!: { name: string; status: string; };
  @Input() id!: number;
  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(
    private theLoggingState: LoggingService,
    private accountsService: AccountsService //※重點
  ) { }

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accountsService.StatusChange(this.id, status);

    // console.log('A server status changed, new status: ' + status);
    // this.theLoggingState.logState(status); 
    //※重點 取消該元件要對服務做的事，到時候由account服務來做

    this.accountsService.statusAlert.emit(status);


  }
}
