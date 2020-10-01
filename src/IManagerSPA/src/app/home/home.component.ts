import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public objects = [];

  constructor() { }

  ngOnInit(): void {

    for (let index = 0; index < 300; index++) {
      this.objects.push(index);
    }

  }

}
