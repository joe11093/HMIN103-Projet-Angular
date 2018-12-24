import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ServicesDisplayComponent} from './services-display/services-display.component'

import {ServicesCreateComponent} from './services-create/services-create.component'

import {ServicesDisplayIdComponent} from './services-display-id/services-display-id.component'

const routes: Routes = [
	{
		path: 'display',
		component: ServicesDisplayComponent,
	},
	{
		path: 'create',
		component: ServicesCreateComponent,
	},
	{
		path: 'display/:id',
		component: ServicesDisplayIdComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }