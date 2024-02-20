import { Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth.guard';
import { guestGuard } from '../core/guards/guest.guard';
import { LoginComponent } from '../pages/login/login.component';
import { TodoComponent } from '../pages/todo/todo.component';
import { DefaultComponent } from './layouts/default/default.component';
import { MasterComponent } from './layouts/master/master.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [guestGuard],
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: '',
    component: MasterComponent,
    canActivate: [authGuard],
    children: [{ path: 'todo', component: TodoComponent }],
  },
];
