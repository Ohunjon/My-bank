import {RouterModule, Routes} from '@angular/router';
import {AuthorizationComponent} from './authorization.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {AboutComponent} from './about/about.component';
import {ValidatorComponent} from '../ui/validator/validator.component';

const routes: Routes=[
  {
  path: '', component:AuthorizationComponent, children: [
    {
    path: '', redirectTo: 'login'
    },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'registration', component: RegistrationComponent
      },
      {
        path: 'home', component:HomePageComponent
      },
      {
        path: 'feedback', component: FeedbackComponent
      },
      {
        path: 'about', component: AboutComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthorizationRoutingModule {}
