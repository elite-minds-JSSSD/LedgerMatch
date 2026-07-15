import { AfterViewInit, Component } from '@angular/core';
import {
  Chart,
  DoughnutController,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register Chart.js components
Chart.register(
  DoughnutController,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  constructor() {
    console.log("Dashboard Loaded");
  }

  ngAfterViewInit(): void {
  this.createReconciliationChart();
  this.createTrendChart();
}

  createReconciliationChart(): void {

    new Chart("reconciliationChart", {

      type: 'doughnut',

      data: {

        labels: [
          'Matched',
          'Unmatched',
          'Suspicious',
          'Duplicate'
        ],

        datasets: [
          {
            data: [9856, 1963, 638, 153],

            backgroundColor: [
              '#22C55E',
              '#EF4444',
              '#F59E0B',
              '#3B82F6'
            ],

            borderWidth: 0,

            hoverOffset: 12
          }
        ]

      },
      

      options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

          legend: {

            position: 'bottom',

            labels: {

              padding: 20,

              usePointStyle: true,

              pointStyle: 'circle',

              font: {
                size: 13
              }

            }

          }

        },

        cutout: '70%'

      }
      

    })
    ;
    

  }
  createTrendChart(): void {

  new Chart("trendChart", {

    type: 'line',

    data: {

      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun'
      ],

      datasets: [

        {

          label: 'Reconciliation %',

          data: [68, 72, 79, 83, 88, 91],

          borderColor: '#4F46E5',

          backgroundColor: 'rgba(79,70,229,0.15)',

          fill: true,

          tension: 0.4,

          pointRadius: 5,

          pointBackgroundColor: '#4F46E5'

        }

      ]

    },

    options: {

      responsive: true,

      maintainAspectRatio: false,

      plugins: {

        legend: {

          display: false

        }

      },

      scales: {

        y: {

          beginAtZero: false,

          min: 60,

          max: 100

        }

      }

    }

  });

}

}