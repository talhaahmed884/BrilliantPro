import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Course Update', 'Learners'],
      ['Learners Enrolled In Course',     11],
      ['Learners Started Course',      2],
      ['Learners In Middle Of Course',  2],
      ['Learners Passed', 2],
      ['Learners Failed',    7]
    ],
    //firstRowIsData: true,
    options: {'title': 'Course Update'},
  };

  constructor() { }

  ngOnInit(): void {
  }

}
