import { AuthGuard } from './pages/auth/guards';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'typography',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/typography/typography.module').then((m) => m.TypographyModule),
  },
  {
    path: 'tables',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tables/tables.module').then((m) => m.TablesModule),
  },
  {
    path: 'notification',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/notification/notification.module').then((m) => m.NotificationModule),
  },
  {
    path: 'ui',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/ui-elements/ui-elements.module').then((m) => m.UiElementsModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
