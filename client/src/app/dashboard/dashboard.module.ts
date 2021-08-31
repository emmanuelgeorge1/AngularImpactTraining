import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from '../profile/services/profile.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
  providers: [ProfileService],
})
export class DashboardModule {}
