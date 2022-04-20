import { ActivatedRoute, Params, Router } from '@angular/router'; // ※重點
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // server: {id: number, name: string, status: string};
  server: any;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe((prm: Params) => {
      this.server = this.serversService.getServer(+prm.id);
    });
  }

  onEdit() { // ※重點
    //目前位置為 /servers/2 ，並自帶參數為 ?allowEdit=1#loading
    // this.router.navigate(['/servers', this.server.id, 'edit']);  // 方法一
    // this.router.navigate(['edit'], { relativeTo: this.route })  //方法二：使用相對目前位置路徑添加edit位置
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    })  //可合併原本的query params
  }
}
