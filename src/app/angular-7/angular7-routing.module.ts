import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular7Component } from './angular7/angular7.component';

const routes: Routes = [
  {
    path: '',
    component: Angular7Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular7RoutingModule { 
}
