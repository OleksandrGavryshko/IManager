import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navbarShrinked: boolean;
  collapsed = true;
isStartPage = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    this.navbarShrinked = false;
  }

  ngOnInit(): void {
    this.router.events
    .subscribe(event => {
      if(event instanceof NavigationEnd){
        if(event.urlAfterRedirects.includes('start')){
          this.isStartPage = true;
        } else{
          this.isStartPage = false;
        }
      }
    })
  }


  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if(!this.isStartPage) return;

    // console.log(this.document.documentElement.scrollTop);
    // console.log(this.mainNav.nativeElement.offsetTop);
    if (this.document.documentElement.scrollTop > 100) {
      this.navbarShrinked = true;
    } else {
      this.navbarShrinked = false;
    }

    //   if ($("#mainNav").offset().top > 100) {
    //     $("#mainNav").addClass("navbar-shrink");
    // } else {
    //     $("#mainNav").removeClass("navbar-shrink");
    // }
  }

}
