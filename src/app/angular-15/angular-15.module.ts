import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular15Component } from './angular15/angular15.component';
import { Angular15RoutingModule } from './angular15-routing.module';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    Angular15Component
  ],
  imports: [
    CommonModule,
    Angular15RoutingModule,
    NgOptimizedImage
  ]
})
export class Angular15Module { }
