import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { TestClient } from '../services/api.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  // public navbarShrinked: boolean;
  // @ViewChild("mainNav") mainNav: ElementRef;



  constructor(
    private testClient: TestClient,
    // @Inject(DOCUMENT) private document: Document
  ) {
    // this.navbarShrinked = false;
   }

  ngOnInit(): void {
  }

  // collapsed = true;
  // toggleCollapsed(): void {
  //   this.collapsed = !this.collapsed;
  // }

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event) {
  //   // console.log(this.document.documentElement.scrollTop);
  //   // console.log(this.mainNav.nativeElement.offsetTop);
  //   if (this.document.documentElement.scrollTop > 100) {
  //     this.navbarShrinked = true;
  //   } else {
  //     this.navbarShrinked = false;
  //   }

  // //   if ($("#mainNav").offset().top > 100) {
  // //     $("#mainNav").addClass("navbar-shrink");
  // // } else {
  // //     $("#mainNav").removeClass("navbar-shrink");
  // // }
  // }



  ongetval() {
    this.testClient.getValue().subscribe(response => {
      console.log(response)
    });
  }

  ongetvalauth() {
    this.testClient.getValueAuth().subscribe(response => {
      console.log(response)
    });
  }
}
