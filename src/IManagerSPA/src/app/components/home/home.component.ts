import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/common/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public navbarShrinked: boolean = false;;
  public collapsed: boolean = true;
  public isStartPage: boolean = false;
  public userIsLoggedIn: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isUserLoggedIn();
    this.onRouteChange();
  }

  public toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  public onLogout(): void {
    this.authService.removeToken();
    this.router.navigate(['/']);
  }

  @HostListener('window:scroll')
  private onScroll(): void {
    if (!this.isStartPage) return;

    if (this.document.documentElement.scrollTop > 100) {
      this.navbarShrinked = true;
    } else {
      this.navbarShrinked = false;
    }
  }

  private onRouteChange() {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (event.urlAfterRedirects.includes('start')) {
            this.isStartPage = true;
          } else {
            this.isStartPage = false;
          }
        }
      });
  }

  private isUserLoggedIn(): void {
    this.authService.userIsLoggedIn.subscribe(val => {
      this.userIsLoggedIn = val;
    })
  }

}
