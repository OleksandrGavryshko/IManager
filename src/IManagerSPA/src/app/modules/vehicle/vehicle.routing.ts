import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManufactureComponent } from './components/manufacture/manufacture.component';
import { ManufactureListComponent } from './components/manufacture-list/manufacture-list.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vehicles',
    pathMatch: 'full',
  },
  {
    path: 'vehicles',
    children: [
      {
        path: '',
        component: VehicleListComponent
      },
      {
        path: 'add',
        component: VehicleComponent
      },
      {
        path: 'edit/:id',
        component: VehicleComponent
      }
    ]
  },
  {
    path: 'manufactures',
    children: [
      {
        path: '',
        component: ManufactureListComponent
      },
      {
        path: 'add',
        component: ManufactureComponent
      },
      {
        path: 'edit/:id',
        component: ManufactureComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
