import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MembresModule } from './membres/membres.module';
import {RouterModule, Routes} from "@angular/router";
import { TestRoutingComponent } from './test-routing/test-routing.component';

import { AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    TestRoutingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MembresModule,
    


    AppRoutingModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
