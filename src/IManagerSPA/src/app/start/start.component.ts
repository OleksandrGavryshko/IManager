import { Component, OnInit } from '@angular/core';

import { TestClient } from '../services/api.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(
    private testClient: TestClient
  ) { }

  ngOnInit(): void {
  }


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
