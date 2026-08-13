import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginformComponent }
  from './loginform/loginform.component';

import { DashboardComponent }
  from './dashboard/dashboard.component';

import { TransferformComponent }
  from './transferform/transferform.component';


export const routes: Routes = [

  // Default page
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginformComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'transfer',
    component: TransferformComponent,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];

