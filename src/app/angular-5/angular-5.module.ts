import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular5Component } from './angular5/angular5.component';
import { Angular5RoutingModule } from './angular5-routing.module';



@NgModule({
  declarations: [
    Angular5Component
  ],
  imports: [
    CommonModule,
    Angular5RoutingModule
  ]
})
export class Angular5Module { }
