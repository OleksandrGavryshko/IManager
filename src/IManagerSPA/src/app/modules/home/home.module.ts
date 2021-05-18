import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }