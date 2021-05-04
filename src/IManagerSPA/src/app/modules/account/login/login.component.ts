import { AuthClient, SignInCommand } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiErrorHandler } from 'src/app/services/api-base-services/api-error-handler';
import { AuthService } from 'src/app/common/auth/auth.service';
import { NotifyService } from 'src/app/services/notify.service';
import { Router } from '@angular/router';

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
    private _notifyService: NotifyService,
    private _authService: AuthService,
    private _apiErrorHandler : ApiErrorHandler
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
        if (this._apiErrorHandler.errorsExistInResponse(response)) return;

        this._authService.setToken(response.result.token);
        this._router.navigateByUrl('/');

      },
      error => {
        console.log(error);
      });

  }


}
