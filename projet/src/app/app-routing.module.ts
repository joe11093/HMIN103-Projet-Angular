import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {TestRoutingComponent} from './test-routing/test-routing.component';

const routes: Routes = [
	{
		path: 'members',
		loadChildren: './membres/membres.module#MembresModule',
	},
	{
		path: 'goods',
		loadChildren: './goods/goods.module#GoodsModule',
	},
	{
		path: 'services',
		loadChildren: './services/services.module#ServicesModule',
	},
	{
		path: 'testrouting',
		component: TestRoutingComponent,
		outlet: 'testoutlet'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }