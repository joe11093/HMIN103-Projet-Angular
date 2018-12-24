import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppService } from '../../app.service';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-services-display',
  templateUrl: './services-display.component.html',
  styleUrls: ['./services-display.component.css']
})
export class ServicesDisplayComponent implements OnInit {
  
  public services: Object[];
  
  constructor(private servicesService: ServicesService,public appService: AppService) { }

  ngOnInit() {
    console.log("dans component");
    this.servicesService.getAllServices().subscribe(res=>this.services = res);

  }

}