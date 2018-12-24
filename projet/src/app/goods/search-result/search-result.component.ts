import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

import { GoodsService } from '../goods.service';
import {AppService } from '../../app.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

	public goods: Object[];
  constructor(public goodsService: GoodsService) { }

  searchResults = this.goodsService.searchResult;
  ngOnInit() {
  	this.goods = this.goodsService.searchResult;
  }

}
