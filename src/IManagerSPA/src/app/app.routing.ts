import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './common/auth/auth.guard';
import { GoToHomeModuleGuard } from './modules/home/guard/go-to-home-module.guard';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: HomeComponent,
    canActivate: [GoToHomeModuleGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
