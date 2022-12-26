import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular13Component } from './angular13/angular13.component';

const routes: Routes = [
    {
        path: '',
        component: Angular13Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Angular13RoutingModule {
}
