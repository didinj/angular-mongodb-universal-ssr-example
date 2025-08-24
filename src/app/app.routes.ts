import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'users',
    loadComponent: () => import('./users.component/users.component').then(m => m.UsersComponent)
  },
  { path: '**', redirectTo: '' }
];
