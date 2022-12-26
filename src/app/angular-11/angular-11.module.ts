import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular11Component } from './angular11/angular11.component';
import { Angular11RoutingModule } from './angular-11.routing.module';


@NgModule({
  declarations: [
    Angular11Component
  ],
  imports: [
    CommonModule,
    Angular11RoutingModule
  ]
})
export class Angular11Module { }
