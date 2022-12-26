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
  },
  {
    path: 'angular7',
    loadChildren: () => import('./angular-7/angular-7.module').then(m => m.Angular7Module)
  },
  {
    path: 'angular8',
    loadChildren: () => import('./angular-8/angular-8.module').then(m => m.Angular8Module)
  },
  {
    path: 'angular9',
    loadChildren: () => import('./angular-9/angular-9.module').then(m => m.Angular9Module)
  },
  {
    path: 'angular10',
    loadChildren: () => import('./angular-10/angular-10.module').then(m => m.Angular10Module)
  },
  {
    path: 'angular11',
    loadChildren: () => import('./angular-11/angular-11.module').then(m => m.Angular11Module)
  },
  {
    path: 'angular12',
    loadChildren: () => import('./angular-12/angular-12.module').then(m => m.Angular12Module)
  },
  {
    path: 'angular13',
    loadChildren: () => import('./angular-13/angular-13.module').then(m => m.Angular13Module)
  },
  {
    path: 'angular14',
    loadChildren: () => import('./angular-14/angular-14.module').then(m => m.Angular14Module)
  },
  {
    path: 'angular15',
    loadChildren: () => import('./angular-15/angular-15.module').then(m => m.Angular15Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
