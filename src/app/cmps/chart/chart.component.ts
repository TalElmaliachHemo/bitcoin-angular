import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() {
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: '',
        fill: false,
        tension: 0,
        borderColor: 'lightblue',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  @Input() labels: string[] = []
  @Input() data: number[] = []
  @Input() description: string = ''

  ngOnInit() {
    this.lineChartData.labels = this.labels
    this.lineChartData.datasets[0].data = this.data
    this.lineChartData.datasets[0].label = this.description
  }
}