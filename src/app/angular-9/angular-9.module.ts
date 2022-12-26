import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular9Component } from './angular9/angular9.component';
import { Angular9RoutingModule } from './angular9-routing.module';


@NgModule({
  declarations: [
    Angular9Component
  ],
  imports: [
    CommonModule,
    Angular9RoutingModule
  ]
})
export class Angular9Module { }
