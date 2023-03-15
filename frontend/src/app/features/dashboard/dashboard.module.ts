import { NgModule } from '@angular/core';
import { ChartsModule } from 'src/app/shared/charts/charts.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    ChartsModule
  ]
})
export class DashboardModule { }
