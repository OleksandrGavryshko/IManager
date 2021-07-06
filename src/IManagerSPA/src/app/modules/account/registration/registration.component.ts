import { AuthClient, CreateUserCommand } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NotifyService } from 'src/app/services/notify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authClient: AuthClient,
    private _router: Router,
    private _notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', Validators.required]
    });
  }

  onRegister() {
    this.submitted = true;

    if (this.form.invalid)
      return;

      const model = CreateUserCommand.fromJS(this.form.value);

      this._authClient.signUp(model).subscribe(response => {
        //if (this.apiErrorHandler.errorsExistInResponse(response)) return;

        if(response.errors && response.errors.length > 0){
          response.errors.forEach(e=> this._notifyService.error(e));
          return;
        }

        if(!response.result) {
          this._notifyService.error('Wystąpił nieznany błąd');
          return;
        }

        this._notifyService.success('Pomyślnie założono użytkownika, zaloguj się!')
        this._router.navigateByUrl('/account/login');

      });

  }


}
