import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';


import { GoodsService } from '../goods.service';
import {AppService } from '../../app.service';

@Component({
  selector: 'app-goods-search',
  templateUrl: './goods-search.component.html',
  styleUrls: ['./goods-search.component.css']
})
export class GoodsSearchComponent implements OnInit {

  public goods: Object[];
  public types;

  type;
  maxprice;
  toRent;
  toBuy;
  keywords;

  resultMessage;


  	constructor(private goodsService: GoodsService, public appService: AppService, private router: Router) { }

  	ngOnInit() {
  		this.goodsService.getTypes().subscribe(res =>{ this.types = res; console.log("types: " + JSON.stringify(this.types))})
  	}

  	onGoodSearchSubmit(): void{
  	if(this.type == null)
  		this.type = "*";
  	if(this.maxprice == null)
  		this.maxprice = "*";
  	if(this.keywords == null)
  		this.keywords = "*";

  	if(this.toBuy == null)
  		this.toBuy = false;
  	if(this.toRent == null)
  		this.toRent = false;


  	console.log("type: " + this.type + " maxprice: " + this.maxprice + " toBuy: " + this.toBuy + " toRent: " + this.toRent + " keywords: " +this.keywords);

	this.goodsService.searchGoods(this.type, this.maxprice, this.toBuy, this.toRent, this.keywords).subscribe(
		res=>{ 
		
		console.log("res[0]: " + res[0]);
		if(res[0]===undefined){
			this.resultMessage = "We didnt find any result";
		}
		else{

			this.resultMessage = "We found results to match your search";
			this.goods = res; 
			console.log("this.goods: " + JSON.stringify(this.goods))
			this.goodsService.searchResult = res;
			console.log("this.goodsService.searchResult: " + JSON.stringify(this.goodsService.searchResult));
      this.router.navigateByUrl("/goods/search-result");

		}
		});

  	}

}
