import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export class AuthGuardService implements CanActivate {

  CanActivate(route: ActivatedRouteSnapshot, status: RouterStateSnapshot): Observable<Boolean> | Promise<boolean> | boolean {

  }
}
