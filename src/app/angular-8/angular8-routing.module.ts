import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular8Component } from './angular8/angular8.component';

const routes: Routes = [
  {
    path: '',
    component: Angular8Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular8RoutingModule { 
}
