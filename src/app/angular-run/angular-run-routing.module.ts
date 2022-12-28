import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularLiveComponent } from './angular-live/angular-live.component';

const routes: Routes = [
    {
        path: '',
        component: AngularLiveComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AngularRunRoutingModule {
}
