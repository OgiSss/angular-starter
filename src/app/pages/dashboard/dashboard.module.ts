import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { TrendModule } from 'ngx-trend';
import { SharedModule } from '../../shared/shared.module';
import {
  DailyLineChartComponent,
  PerformanceChartComponent,
  ProjectStatChartComponent,
  RevenueChartComponent,
  ServerChartComponent,
  SupportRequestsComponent,
  VisitsChartComponent
} from './components';
import { DashboardPageComponent } from './containers';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './services';

@NgModule({

  imports: [
    SharedModule,
    NgxEchartsModule,
    TrendModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    NgApexchartsModule,
    MatDialogModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardPageComponent,
    VisitsChartComponent,
    PerformanceChartComponent,
    ServerChartComponent,
    RevenueChartComponent,
    DailyLineChartComponent,
    SupportRequestsComponent,
    ProjectStatChartComponent,
  ],
  exports: [
    DailyLineChartComponent,
  ],
  providers: [
    DashboardService,
  ],
})
export class DashboardModule { }
