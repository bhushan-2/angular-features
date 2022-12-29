import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularLiveComponent } from './angular-live/angular-live.component';
import { AngularRunRoutingModule } from './angular-run-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AngularLiveComponent
  ],
  imports: [
    CommonModule,
    AngularRunRoutingModule,
    NgSelectModule,
    FormsModule
  ]
})
export class AngularRunModule { }
