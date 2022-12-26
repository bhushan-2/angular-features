import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular13Component } from './angular13/angular13.component';
import { Angular13RoutingModule } from './angular13-routing.module';


@NgModule({
  declarations: [
    Angular13Component
  ],
  imports: [
    CommonModule,
    Angular13RoutingModule
  ]
})
export class Angular13Module { }
