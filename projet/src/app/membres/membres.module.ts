import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MembresDisplayComponent } from './membres-display/membres-display.component';
import { MembresCreateComponent } from './membres-create/membres-create.component';

import { MemberService } from './member.service';
import{ AppService} from '../app.service';

import { MembersRoutingModule } from './members-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [MembresDisplayComponent, MembresCreateComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, HttpClientModule, MembersRoutingModule, FormsModule],
  exports: [MembresDisplayComponent,MembresCreateComponent],
  providers: [],
})
export class MembresModule { }
