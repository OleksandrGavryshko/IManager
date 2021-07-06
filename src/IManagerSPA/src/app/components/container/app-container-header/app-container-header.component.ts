import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AppContainerSidebarService } from '../app-container-sidebar/app-container-sidebar.service';
import { AuthService } from 'src/app/common/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-header',
  templateUrl: './app-container-header.component.html',
  styleUrls: ['./app-container-header.component.scss']
})
export class AppContainerHeaderComponent implements OnInit {

  public navbarShrinked: boolean = false;;
  public collapsed: boolean = true;
  public isStartPage: boolean = false;
  public userIsLoggedIn: boolean;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private sidebarService: AppContainerSidebarService
    ) { }

  ngOnInit(): void {
  }

  public toggleHeader(): void {
    this.collapsed = !this.collapsed;
  }

  public toggleSideBar(): void {
    this.sidebarService.toggleSideBar();
  }

  public onLogout(): void {
    this.authService.removeToken();
    this.router.navigate(['/']);
  }

}
