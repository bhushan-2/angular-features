import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular6Component } from './angular6/angular6.component';
import { Angular6RoutingModule } from './angular6-routing.module';



@NgModule({
  declarations: [
    Angular6Component
  ],
  imports: [
    CommonModule,
    Angular6RoutingModule
  ]
})
export class Angular6Module { }
