import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidatorComponent} from '../components/ui/validator/validator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations : [
  ValidatorComponent
  ],
  exports: [
    ValidatorComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {

}
