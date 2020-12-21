import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardPageComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        data: { breadcrumb: 'finances' },
        component: DashboardPageComponent,
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class DashboardRoutingModule {
}


