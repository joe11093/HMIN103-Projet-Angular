import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MemberService } from '../member.service';

@Component({
  selector: 'app-membres-create',
  templateUrl: './membres-create.component.html',
  styleUrls: ['./membres-create.component.css']
})
export class MembresCreateComponent implements OnInit {

  constructor(public memberService: MemberService) { }

  ngOnInit() {
  }

}
