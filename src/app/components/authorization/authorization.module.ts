import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorizationComponent} from './authorization.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthorizationRoutingModule} from './authorization-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import {SharedModule} from '../../shared/shared.module';





@NgModule({
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    SharedModule

  ],
  declarations: [
    AuthorizationComponent,
    LoginComponent,
    RegistrationComponent,
    HomePageComponent,
    FeedbackComponent,
    AboutComponent,


   ],
 exports: [AuthorizationComponent]
})
export class AuthorizationModule { }
