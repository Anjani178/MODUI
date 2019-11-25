import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { RouterModule } from '@angular/router';
import { UserDashComponent } from '../user-dash/user-dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UtCompletedComponent} from '../ut-completed/ut-completed.component';
import {UtCurrentComponent} from '../ut-current/ut-current.component'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,RouterModule.forChild([{
      path:'userD',component:UserDashComponent, children:[
        {path:'utCurrent',component:UtCurrentComponent},   
      ]
    }])
  ]
})
export class UserModule { }
