import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularLiveComponent } from './angular-live/angular-live.component';
import { AngularRunRoutingModule } from './angular-run-routing.module';


@NgModule({
  declarations: [
    AngularLiveComponent
  ],
  imports: [
    CommonModule,
    AngularRunRoutingModule
  ]
})
export class AngularRunModule { }
