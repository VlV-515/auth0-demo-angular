import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth0',
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./auth0/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'logout',
        loadChildren: () =>
          import('./auth0/logout/logout.module').then((m) => m.LogoutModule),
      },
    ],
  },
  {
    path: '**',
    component: ErrorPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
