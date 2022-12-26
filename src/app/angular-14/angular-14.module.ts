import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular14Component } from './angular14/angular14.component';
import { Angular14RoutingModule } from './angular14-routing.module';


@NgModule({
  declarations: [
    Angular14Component
  ],
  imports: [
    CommonModule,
    Angular14RoutingModule
  ]
})
export class Angular14Module { }
