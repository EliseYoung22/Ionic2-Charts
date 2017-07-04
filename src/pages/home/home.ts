import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import {D3Page} from '../d3/d3';
import {HeatmapPage} from '../heatmap/heatmap';
import {StatsPage} from '../stats/stats';

import { GithubServiceProvider } from '../../providers/github-service/github-service';

import { User } from '../../models/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   D3Page = D3Page;
   HeatmapPage = HeatmapPage;
   StatsPage = StatsPage;
   user: User[];
   login: string;

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas')lineCanvas;
  @ViewChild('polarAreaCanvas')polarAreaCanvas;
  @ViewChild('radarCanvas')radarCanvas;
  @ViewChild('halfdoughnutCanvas')halfdoughnutCanvas;


  barChart: any;
  doughnutChart: any;
  lineChart: any;
  polarAreaChart: any;
  radarChart: any;
  halfdoughnutChart: any;

  constructor(private githubServiceProvider: GithubServiceProvider, navCtrl: NavController) {  
    githubServiceProvider.load().subscribe(user => {
        this.user = user;
        console.log(user);
    })
    // githubServiceProvider.loadDetails().subscribe(user => {
    //   this.user = user;
    //   console.log(user); 
    // })
  }

    // getFollowers(){
    //     this.githubService.getFollowers().subscribe(user => {
    //         this.user = user;
    //         console.log(user); 
    //     });
    // }
  ionViewDidLoad() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul"],
                datasets: [{
                    label: '# of Daily Step Goals Achieved',
                    data: [22, 19, 26, 20, 28, 1],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
      }
    });

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
        data: {
            labels: ["Discover", "Share", "Act"],
            datasets: [{
                label: '%',
                data: [45, 77, 89],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)'
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        }
    });
 
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Personal Growth",
                    fill: false,
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [45, 57, 60, 65, 62, 68, 70],
                    spanGaps: false,
                },
                {
                    label: "Average Others Growth",
                    fill: false,
                    lineTension: 0.3,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "#FF6384",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#FF6384",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#FF6384",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [33, 78, 48, 64, 54, 71, 73],
                    spanGaps: false,
                }
            ],
        }

    });

    this.polarAreaChart = new Chart(this.polarAreaCanvas.nativeElement, {
        type: 'polarArea',
        data: {
                labels: ["Discover", "Share", "Act"],
                datasets: [{
                label:"others",
                data: [45, 77, 89],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
    
                    // 'rgba(54, 162, 235, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#FF6384",
                    "#FF6384",
                    // "#36A2EB",
                    // "#FFCE56",
                    // "#FF6384",
                    // "#36A2EB",
                    // "#FFCE56"
                ]
            },
            {
                label: 'You',
                data: [20, 55, 81],
                backgroundColor: [
                    // 'rgba(255, 99, 132, 0.2)',
                    // 'rgba(54, 162, 235, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                hoverBackgroundColor: [
                    // "#FF6384",
                    // "#36A2EB",
                    // "#FFCE56",
                    // "#FF6384",
                    "#36A2EB",
                    "#36A2EB",
                    "#36A2EB",
                    // "#FF9B00"
                ]
            }],     
        }

    });

    this.radarChart = new Chart(this.radarCanvas.nativeElement, {
        type: 'radar',
        data: {
                labels: ["Discover", "Share", "Act"],
                datasets: [{
                    label:'Others',
                    lineTension: 0.3,
                    data: [84, 77, 56],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(255, 99, 132, 0.4)',

                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#FF6384",
                        "#FF6384",
                    ]
                },
                {
                    label: 'You',
                    lineTension: 0.3,
                    data: [90, 78, 81],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    hoverBackgroundColor: [
                        "#36A2EB",
                        "#36A2EB",
                        "#36A2EB",
        
                    ]
                }], 
            },
        options: {
            legend: {
                labels: {
                    fontSize: 20
                }
            },
        },
    });

     this.halfdoughnutChart = new Chart(this.halfdoughnutCanvas.nativeElement, {
      type: 'doughnut',
        data: {
            labels: ["Discover", "Share", "Act"],
            datasets: [{
                label: '%',
                data: [45, 77, 89],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)'
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }],
           
        },
        options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
        }
    });
  }
}
