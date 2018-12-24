import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';

import {GoodsService} from '../goods.service';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-goods-create',
  templateUrl: './goods-create.component.html',
  styleUrls: ['./goods-create.component.css']
})
export class GoodsCreateComponent implements OnInit {
	name: string;
	description: string;
	price: string;
	type: string;
	toRent: boolean;
	toBuy: boolean;
	keywords;

	public good: Object;
  constructor(private goodsService: GoodsService,private router: Router, public appService: AppService) { }

	redirectionCreate(){
		this.router.navigate(['../','create']);
	}

 	ngOnInit() {
  	}

 	onSubmit(){
 		
 		//print outs
 		//console.log("type: " + this.type);
 		//console.log("user id from gooods-create: " + this.appService.user.id);
	 	//console.log(" On submit is clicked. your Good's name : " + this.name);
	
	 	var rDate = (new Date()).toISOString().slice(0, 10);
	 	console.log("rDate: ", rDate);
	 	console.log("Keywords: " + this.keywords);
	 	let result=this.goodsService.insertGood(this.name, this.description, this.price, this.appService.user.id, this.type, this.toRent, this.toBuy, this.keywords, rDate).subscribe(res=>this.good = res);
	 	

	}
}
