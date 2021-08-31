import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ExpDetailsComponent } from './components/display/exp-details/exp-details.component';
import { EduDetailsComponent } from './components/display/edu-details/edu-details.component';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UserDashboardComponent,
    ExpDetailsComponent,
    EduDetailsComponent,
    DashboardActionComponent,
  ],
  imports: [CommonModule, HttpClientModule, UserDashboardRoutingModule],
})
export class UserDashboardModule {}
