import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular15Component } from './angular15/angular15.component';

const routes: Routes = [
    {
        path: '',
        component: Angular15Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Angular15RoutingModule {
}
