import { ActivatedRoute, Router } from '@angular/router'; //※重點
import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: { id: number, name: string, status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router, //※重點
    private nowAt: ActivatedRoute //※重點
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  reloadServer() { //※重點
    //at: localhost/servers
    // this.router.navigate(['/servers'], { relativeTo: this.nowAt });

    //at: localhost/servers/servers
    this.router.navigate(['servers'], { relativeTo: this.nowAt });
  }
}
