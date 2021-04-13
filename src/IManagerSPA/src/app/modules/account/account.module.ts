import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account.routing';
import { AuthClient } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';

// import  { AuthClient } from './../../services/api.service'

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccountRoutingModule
  ],
  providers: [
    AuthClient
  ],
  exports:[
    LoginButtonComponent
  ]
})
export class AccountModule { }
