import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account.routing';
import { AuthClient } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';

// import  { AuthClient } from './../../services/api.service'

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
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
  ]
})
export class AccountModule { }
