import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular12Component } from './angular12/angular12.component';

const routes: Routes = [
    {
        path: '',
        component: Angular12Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Angular12RoutingModule {
}
