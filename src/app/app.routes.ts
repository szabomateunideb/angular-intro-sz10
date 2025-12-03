import { Routes } from '@angular/router';
import {BindingsDirectives} from './bindings-directives/bindings-directives';
import {UserManagement} from './user-management/user-management';
import {Login} from './login/login';

export const routes: Routes = [
  {path:'bindings-directives', component:BindingsDirectives},
  {path:'',redirectTo: 'login', pathMatch: 'full'},
  {path:'users', component: UserManagement},
  {path:'login', component: Login}
];
