import { API_BASE_URL, TestClient } from './services/api.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { AccountModule } from './modules/account/account.module';
import { AppComponent } from './app.component';
import { AppContainerComponent } from './components/container/app-container/app-container.component';
import { AppContainerHeaderComponent } from './components/container/app-container-header/app-container-header.component';
import { AppContainerSidebarComponent } from './components/container/app-container-sidebar/app-container-sidebar.component';
import { AppRoutingModule } from './app.routing';
import { AuthInterceptor } from './common/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ErrorInterceptor } from './common/interceptors/error.interceptor';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StartContainerComponent } from './components/container/start-container/start-container.component';
import { StartContainerHeaderComponent } from './components/container/start-container-header/start-container-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AppContainerComponent,
    AppContainerHeaderComponent,
    StartContainerComponent,
    StartContainerHeaderComponent,
    AppContainerSidebarComponent,
    HomeComponent    
  ],
  imports: [
    HttpClientModule,
    BsDropdownModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccountModule,
    SnotifyModule
  ],
  providers: [
    TestClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: API_BASE_URL,
      // TODO: url to config
      useValue: 'https://localhost:5001'
    },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
