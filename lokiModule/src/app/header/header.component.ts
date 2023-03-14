import { AuthService } from './../auth/auth.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isLogged = false;

  constructor(
    private dataStorageService: DataStorageService,
    private AuthService: AuthService
  ) { }


  ngOnInit(): void {
    this.userSub = this.AuthService.userSbj.subscribe(user => {
      this.isLogged = !!user;  // user存在就等價true
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.AuthService.signOut();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
