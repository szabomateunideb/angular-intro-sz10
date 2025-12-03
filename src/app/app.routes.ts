import { Routes } from '@angular/router';
import {BindingsDirectives} from './bindings-directives/bindings-directives';
import {UserManagement} from './user-management/user-management';
import {Login} from './login/login';
import {Alkatreszek} from './alkatreszek/alkatreszek';

export const routes: Routes = [
  {path:'bindings-directives', component:BindingsDirectives},
  {path:'',redirectTo: 'login', pathMatch: 'full'},
  {path:'users', component: UserManagement},
  {path:'login', component: Login},
  {path:'alkatreszek', component: Alkatreszek}
];
