import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';


import {MemberService} from '../member.service';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	address: string;
	city: string;
	phoneNumber: string;

	public membre: Object;
	public message;
	public signupMessage;

	result: string;
	constructor(public memberService: MemberService, private router: Router, public appService: AppService) { }

	ngOnInit() {
		this.message = "Sign up to use our website";
		this.signupMessage = "";
	}

	redirectionLogin(){
		this.router.navigate(['../','login']);
	}

	onSubmit(){
	 	console.log(" On submit is clicked. your email: " + this.email);
	 	this.memberService.insertMember(this.email, this.firstName, this.lastName, this.password, this.address, this.city, this.phoneNumber).subscribe(res=>this.membre = res);
	 	this.signupMessage = "Your email is already in use";
	}
}
