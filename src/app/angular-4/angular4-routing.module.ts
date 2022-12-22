import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular4Component } from './angular4/angular4.component';

const routes: Routes = [
  {
    path: '',
    component: Angular4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular4RoutingModule { 
}
