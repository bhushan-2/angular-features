import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular8Component } from './angular8/angular8.component';
import { Angular8RoutingModule } from './angular8-routing.module';



@NgModule({
  declarations: [
    Angular8Component
  ],
  imports: [
    CommonModule,
    Angular8RoutingModule
  ]
})
export class Angular8Module { }
