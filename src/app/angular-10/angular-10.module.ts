import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular10Component } from './angular10/angular10.component';
import { Angular10RoutingModule } from './angular10-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    Angular10Component
  ],
  imports: [
    CommonModule,
    Angular10RoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ]
})
export class Angular10Module { }
