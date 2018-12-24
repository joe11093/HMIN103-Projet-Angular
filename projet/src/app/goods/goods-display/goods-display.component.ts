import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

import { GoodsService } from '../goods.service';
import {AppService } from '../../app.service';

@Component({
  selector: 'app-goods-display',
  templateUrl: './goods-display.component.html',
  styleUrls: ['./goods-display.component.css']
})
export class GoodsDisplayComponent implements OnInit {

	public goods: Object[];

  	constructor(private goodsService: GoodsService, public appService: AppService) { }

  	ngOnInit() {
  		this.goodsService.getAllGoods().subscribe(res=>this.goods = res);
  	}

}
