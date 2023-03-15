import { NgModule } from '@angular/core';

import { HighchartsChartModule } from 'highcharts-angular';

import { AreaComponent } from './area/area.component';

@NgModule({
  declarations: [
    AreaComponent
  ],
  imports: [
    HighchartsChartModule
  ],
  exports: [
    AreaComponent
  ]
})
export class ChartsModule { }
