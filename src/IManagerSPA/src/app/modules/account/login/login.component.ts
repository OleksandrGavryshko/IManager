import { AuthClient, SignInCommand } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  onLogin() {
    this.submitted = true;

    if (this.form.invalid)
      return;

      const model = SignInCommand.fromJS(this.form.value);

      this.authClient.signIn(model).subscribe(response => {
        //if (this.apiErrorHandler.errorsExistInResponse(response)) return;

        if(response.errors && response.errors.length > 0){
          response.errors.forEach(e=> this.snotifyService.error(e));
          return;
        }

        console.log(response);
        localStorage.setItem('token', response.result.token);
        this.router.navigateByUrl('/');

      });

  }


}
