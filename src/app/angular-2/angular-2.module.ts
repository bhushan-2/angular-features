import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2Component } from './angular2/angular2.component';
import { Angular2RoutingModule } from './angular2-routing.module';


@NgModule({
  declarations: [
    Angular2Component
  ],
  imports: [
    CommonModule,
    Angular2RoutingModule
  ]
})
export class Angular2Module { }
