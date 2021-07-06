import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ManufactureComponent } from './components/manufacture/manufacture.component';
import { ManufactureListComponent } from './components/manufacture-list/manufacture-list.component';
import { NgModule } from '@angular/core';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleRoutingModule } from './vehicle.routing';

@NgModule({
  declarations: [VehicleListComponent, VehicleComponent, ManufactureListComponent, ManufactureComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
