import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular9Component } from './angular9/angular9.component';

const routes: Routes = [
  {
    path: '',
    component: Angular9Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular9RoutingModule { 
}
