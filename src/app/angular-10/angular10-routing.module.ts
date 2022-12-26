import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular10Component } from './angular10/angular10.component';

const routes: Routes = [
  {
    path: '',
    component: Angular10Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular10RoutingModule { 
}
