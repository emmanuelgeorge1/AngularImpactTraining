import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then((m) => {
        m.AdminDashboardModule;
      }),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-dashboard/user-dashboard.module').then((m) => {
        m.UserDashboardModule;
      }),
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
