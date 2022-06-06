import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  labels: string[] = [];
  data: number[] = [];
  pieChartType: string = 'pie';
  colors: any = ['#5fb2c6', '#53a759', '#e88b44', '#e23f3d']
  ChartLegend:boolean=true;
  pieChartColors: any;
  options: any = {
    legend: {
      position: 'right',
      orient: 'vertical',
    }
  }
  constructor() { }
  ngOnInit(): void {
  }
  makeChartData(){
    this.pieChartColors = [{ backgroundColor: this.colors }];
    this.data = [1000, 3000, 40.5, 9999, 3000, 6700 ];
    this.labels = [ "2017", "2018", "2019", "2020", "2021", "2022" ] 
  }

}
