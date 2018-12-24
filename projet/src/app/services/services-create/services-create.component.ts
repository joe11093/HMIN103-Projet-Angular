import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';

import {ServicesService} from '../services.service';

@Component({
  selector: 'app-services-create',
  templateUrl: './services-create.component.html',
  styleUrls: ['./services-create.component.css']
})
export class ServicesCreateComponent implements OnInit {
	name: string;
	description: string;

	public service: Object;
  constructor(public servicesService: ServicesService,public router: Router) { }

  ngOnInit() {
  }

	onSubmit(){

	 	console.log(" On submit is clicked. your Service's name : " + this.name);
	 	let result=this.servicesService.insertService(this.name, this.description).subscribe(res=>this.service = res);
	 	
	}
}