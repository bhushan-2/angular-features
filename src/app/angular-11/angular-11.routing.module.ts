import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular11Component } from './angular11/angular11.component';

const routes: Routes = [
  {
    path: '',
    component: Angular11Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular11RoutingModule { 
}
