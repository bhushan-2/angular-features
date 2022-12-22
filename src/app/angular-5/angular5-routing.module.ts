import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular5Component } from './angular5/angular5.component';

const routes: Routes = [
  {
    path: '',
    component: Angular5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular5RoutingModule { 
}
