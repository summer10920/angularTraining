import { ServerResolveService } from './servers/server/server-resolve.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './auth-guard.service';
import { DeactivateGuardService } from './servers/edit-server/deactivate-guard.service'; //※重點

const lokiRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  {
    path: 'servers',
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolveService } },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [DeactivateGuardService] } //※重點
    ]
  },
  // { path: '404', component: PageNotFoundComponent },
  {
    path: '404', component: PageNotFoundComponent, data: {
      message: "you miss the way...."
    }
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(lokiRoutes)
    RouterModule.forRoot(lokiRoutes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }