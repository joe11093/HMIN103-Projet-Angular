import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsDisplayComponent } from './goods-display/goods-display.component';
import { GoodsCreateComponent } from './goods-create/goods-create.component';
import { GoodsDisplayIdComponent } from './goods-display-id/goods-display-id.component';
import { GoodsSearchComponent } from './goods-search/goods-search.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
	{
		path: 'display',
		component: GoodsDisplayComponent
	},
	{
		path: 'display/:id',
		component: GoodsDisplayIdComponent
	},
	{
		path: 'create',
		component: GoodsCreateComponent
	},
	{
		path: 'search',
		component: GoodsSearchComponent
	},
	{
		path: 'search-result',
		component: SearchResultComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
