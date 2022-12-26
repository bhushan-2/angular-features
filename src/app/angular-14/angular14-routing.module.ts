import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular14Component } from './angular14/angular14.component';

const routes: Routes = [
    {
        path: '',
        component: Angular14Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Angular14RoutingModule {
}
