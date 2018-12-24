import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MemberService } from '../member.service';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-membres-display',
  templateUrl: './membres-display.component.html',
  styleUrls: ['./membres-display.component.css']
})
export class MembresDisplayComponent implements OnInit {
	
	public membres: Object[];

 	constructor(public memberService: MemberService, public appService: AppService) { }

	ngOnInit() {
		this.memberService.getAllMembers().subscribe(res=>this.membres = res);
  	}

}
