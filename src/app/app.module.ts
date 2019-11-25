import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import {UserModule} from './user/user.module';
import {MentorModule} from './mentor/mentor.module';
import {AdminModule} from './admin/admin.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { UserSignUpComponent } from './user/user-sign-up/user-sign-up.component';
import { MentorSignUpComponent } from './mentor/mentor-sign-up/mentor-sign-up.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { MentorDashComponent } from './mentor-dash/mentor-dash.component';
import { SearchComponent } from './search/search.component';
import { UtCompletedComponent } from './ut-completed/ut-completed.component';
import { UtCurrentComponent } from './ut-current/ut-current.component';
import { SresultsComponent } from './sresults/sresults.component';
import { PaymentComponent } from './payment/payment.component';
import { MtCompletedComponent } from './mt-completed/mt-completed.component';
import { MtCurrentComponent } from './mt-current/mt-current.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignUpComponent,
    MentorSignUpComponent,
    UserDashComponent,
    SearchComponent,
    UtCompletedComponent,
    UtCurrentComponent,
    SresultsComponent,
    PaymentComponent,
    MtCompletedComponent,
    MtCurrentComponent,
    EditSkillsComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    MentorModule,
    AdminModule,
    HttpClientModule,
    LoginModule,
    SignUpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [ FormsModule,
    ReactiveFormsModule],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
