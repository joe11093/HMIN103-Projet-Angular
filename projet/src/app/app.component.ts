import { Component } from '@angular/core';
import {MemberService} from './membres/member.service';
import { CommonModule } from '@angular/common';  

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'projet';
  author_name = 'Joseph';

  constructor(public appService: AppService){}
}
