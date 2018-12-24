import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MembresDisplayComponent} from './membres-display/membres-display.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
	{
		path: 'display',
		component: MembresDisplayComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'register',
		component: RegisterComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
