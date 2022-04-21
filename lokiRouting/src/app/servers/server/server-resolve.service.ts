import { ServersService } from './../servers.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

interface ServerType { id: number, name: string, status: string }


@Injectable()
export class ServerResolveService implements Resolve<ServerType> {

  constructor(private serverService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerType> | Promise<ServerType> | ServerType {
    return this.serverService.getServer(+route.params.id)!;
    //被TypeScript認為有null可能這裡!強迫它
  }
}