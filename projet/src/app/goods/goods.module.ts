import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { GoodsDisplayComponent } from './goods-display/goods-display.component';

import {GoodsService} from './goods.service'
import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsCreateComponent } from './goods-create/goods-create.component';
import { GoodsDisplayIdComponent } from './goods-display-id/goods-display-id.component';
import { GoodsSearchComponent } from './goods-search/goods-search.component';
import { SearchResultComponent } from './search-result/search-result.component';


@NgModule({
  declarations: [GoodsDisplayComponent, GoodsCreateComponent, GoodsDisplayIdComponent, GoodsSearchComponent, SearchResultComponent],
  imports: [
    CommonModule,GoodsRoutingModule,HttpClientModule, FormsModule],
    exports: [GoodsDisplayComponent,GoodsCreateComponent],
  	providers: [GoodsService],
})
export class GoodsModule { }
