import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular12Component } from './angular12/angular12.component';
import { Angular12RoutingModule } from './angular12-routing.module';


@NgModule({
  declarations: [
    Angular12Component
  ],
  imports: [
    CommonModule,
    Angular12RoutingModule
  ]
})
export class Angular12Module { }
