import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular4Component } from './angular4/angular4.component';
import { Angular4RoutingModule } from './angular4-routing.module';

@NgModule({
  declarations: [
    Angular4Component
  ],
  imports: [
    CommonModule,
    Angular4RoutingModule
  ]
})
export class Angular4Module { }
