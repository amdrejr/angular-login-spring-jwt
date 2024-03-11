import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'user-page',
    loadComponent: () => import('./pages/user-page/user-page.component').then(m => m.UserPageComponent),
    // canActivate: [canActivateGuard]
  },
  {
    path: '**',
    redirectTo: 'user-page'
  }
];
