import { AuthClient, SignInCommand } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/common/auth/auth.service';
import { FormatWidth } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authClient: AuthClient,
    private _router: Router,
    private _snotifyService: SnotifyService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.submitted = true;

    if (this.form.invalid)
      return;

      const model = SignInCommand.fromJS(this.form.value);

      this._authClient.signIn(model).subscribe(response => {
        //if (this.apiErrorHandler.errorsExistInResponse(response)) return;

        if(response.errors && response.errors.length > 0){
          response.errors.forEach(e=> this._snotifyService.error(e));
          return;
        }

        this._authService.setToken(response.result.token);
        this._router.navigateByUrl('/');

      },
      error => {
        console.log(error);
      });

  }


}
