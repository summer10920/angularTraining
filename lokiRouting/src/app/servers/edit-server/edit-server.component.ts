import { DeactivateGuardService } from './deactivate-guard.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, DeactivateGuardService {
  // server: { id: number, name: string, status: string };
  server: any;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSave = false; //※重點

  constructor(private serversService: ServersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // console.log(this.router.snapshot.fragment);
    // console.log(this.router.snapshot.queryParams);
    // this.router.fragment.subscribe(e => console.log(e));
    // this.router.queryParams.subscribe(e => console.log(e));
    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params.allowEdit === '1' ? true : false;
    });

    // if (this.serversService.getServer(1) !== null)
    const id = this.route.snapshot.params.id;
    this.server = this.serversService.getServer(+id);
    console.log(this.server);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) return true; //如果不允許編輯則可離開
    // 如果某欄位有修改且發生變化
    if (this.serverName != this.server.name || this.serverStatus != this.server.status && !this.changesSave)
      return confirm('Do you want leave page?');  //如果住戶回復yes會得到true而離開 false則不能離開
    else return false; //沒有改變，可以離開
  }
}