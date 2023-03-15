import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {};
  
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Greenhouse gases from Norwegian economic activity',
          align: 'left'
      },
      subtitle: {
          text: 'Source: ' +
              '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
              'target="_blank">SSB</a>',
          align: 'left'
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Million tonnes CO<sub>2</sub>-equivalents'
          }
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
          series: {
              pointStart: 2012
          },
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          type: "line", // TODO: Should be area?
          data: [1,2,3,4,5]
      }]
  };
  }
}
