import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout.component';

const routes: Routes = [
  {
    path: '',
    component: LogoutComponent,
  },
  {
    path: '**',
    redirectTo: 'auth0/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoutRoutingModule {}
