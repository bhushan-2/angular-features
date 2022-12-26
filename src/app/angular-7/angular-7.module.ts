import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular7Component } from './angular7/angular7.component';
import { Angular7RoutingModule } from './angular7-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    Angular7Component
  ],
  imports: [
    CommonModule,
    Angular7RoutingModule,
    ScrollingModule,
    DragDropModule
  ]
})
export class Angular7Module { }
