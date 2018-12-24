import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ServicesDisplayComponent } from './services-display/services-display.component';
import{ AppService} from '../app.service';

import {ServicesService} from './services.service'
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesCreateComponent } from './services-create/services-create.component';
import { ServicesDisplayIdComponent } from './services-display-id/services-display-id.component';


@NgModule({
  declarations: [ServicesDisplayComponent, ServicesCreateComponent, ServicesDisplayIdComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FormsModule
  ]
})
export class ServicesModule { }