import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';


import {MemberService} from '../member.service';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	email: string;
	password: string;

	membre: string;

	isLoggedIn: boolean = false;
	loginMessage: string;

  	constructor(public memberService: MemberService, private router: Router, public appService: AppService) { }

  	ngOnInit() {
  	}

  onSubmitLogin(){

	 	this.appService.login(this.email, this.password).subscribe(
	 	res=>{
	 		if(res[0]){
	 			console.log("res0 email: " + res[0]._id);
	 			this.isLoggedIn = true;
	 			this.appService.isLoggedIn = true;
	 			this.appService.user = {"id": res[0]._id, "email": res[0].email};

	 			console.log("appService.user id: " + this.appService.user.id);
	 			//this.router.navigate([""]);
	 		}
	 		else{
	 			this.loginMessage = "Incorrect username/password";
	 		}
	 	});
	}

}
