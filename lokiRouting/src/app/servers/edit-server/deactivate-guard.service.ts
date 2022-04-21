import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentNameComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class DeactivateGuardService implements CanDeactivate<ComponentNameComponent> {
  canDeactivate(
    component: ComponentNameComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextStat?:RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}

// vssocde quikykeyworad is a-guard-can-deactivate