import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  // server: { id: number, name: string, status: string };
  server: any;
  serverName = '';
  serverStatus = '';
  allowEdit = false;

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

    if (this.serversService.getServer(1) !== null) this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }
}