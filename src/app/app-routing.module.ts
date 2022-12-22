import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'angular2',
    loadChildren: () => import('./angular-2/angular-2.module').then(m => m.Angular2Module)
  },
  {
    path: 'angular4',
    loadChildren: () => import('./angular-4/angular-4.module').then(m => m.Angular4Module)
  },
  {
    path: 'angular5',
    loadChildren: () => import('./angular-5/angular-5.module').then(m => m.Angular5Module)
  },
  {
    path: 'angular6',
    loadChildren: () => import('./angular-6/angular-6.module').then(m => m.Angular6Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
