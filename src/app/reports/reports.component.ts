import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  title = 'ng-chart';
  chart: any = [];
  pie: any = [];
  radar:any=[];
  data = {
    labels: [
      'Security',
      'Performance',
      'Cost',
      'Realiability',
      'Operational Excellence'
    ],
    datasets: [{
      label: 'Radar por dominio',
      data: [50,15,30,10,5],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  };
  constructor() {}

  ngOnInit() {
    this.radar= new Chart('radar',{
      type: 'radar',
      data: this.data,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    });
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Implementado', 'No implementado'],
        datasets: [
          {
            label: ' % de Implementados vs no implelmentados',
            data: [30, 70],
            backgroundColor: ["#0074D9", "#FF4136"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

  this.pie = new Chart('canvaspie', {
    type: 'pie',
    data: {
      labels: ['Seguridad', 'Costos', 'Resilencia', 'Exc. Operativa', 'Rendimiento'],
      datasets: [
        {
          label: 'Porcentaje de implementacion por Dominios',
          data: [50, 30, 10, 5, 12, 3],
          backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  }


}
