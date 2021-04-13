import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  public tokenExists: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.tokenExists = true;
    }
  }

}
