import { AuthClient, CreateUserCommand, SignInCommand } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  public form: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authClient: AuthClient,
    private router: Router,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', Validators.required]
    });
  }

  onRegister() {
    this.submitted = true;

    if (this.form.invalid)
      return;

      const model = CreateUserCommand.fromJS(this.form.value);

      this.authClient.signUp(model).subscribe(response => {
        //if (this.apiErrorHandler.errorsExistInResponse(response)) return;

        if(response.errors && response.errors.length > 0){
          response.errors.forEach(e=> this.snotifyService.error(e));
          return;
        }

        if(!response.result) {
          this.snotifyService.error('Wystąpił nieznany błąd');
          return;
        }

        this.snotifyService.success('Pomyślnie założono użytkownika, zaloguj się!')
        this.router.navigateByUrl('/account/login');

      });

  }


}
