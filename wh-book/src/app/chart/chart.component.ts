import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { map } from 'rxjs';

interface IData {
  dt_date: string,
  office_id: number,
  office: string,
  qty_shk: number,
  qty_shk_cat1: number,
  qty_shk_cat2: number,
  qty_shk_cat3: number,
  qty_shk_cat4: number
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [ChartService]
})

export class ChartComponent implements OnInit {
  data: IData[] = [];

  constructor(private service: ChartService) {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
  }

  ngOnInit(): void {
    this.service.getData()
      .pipe(
        map((value: any) => value.data))
      .subscribe({
        next: (value: any) => this.data = value.reverse(),
        error: (err) => console.log(err),
        complete: () => this.paint()
      });
  }
  paint() {
    new Chart('lineChart', {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Всего',
            data: this.data,
            borderColor: 'red',
            parsing: {
              yAxisKey: 'qty_shk'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk
              }
            }
          },
          {
            label: 'Этап 1',
            data: this.data,
            borderColor: '#6B8E23',
            parsing: {
              yAxisKey: 'qty_shk_cat1'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat1
              }
            }
          },
          {
            label: 'Этап 2',
            data: this.data,
            borderColor: 'green',
            parsing: {
              yAxisKey: 'qty_shk_cat2'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat2
              }
            }
          },
          {
            label: 'Этап 3',
            data: this.data,
            borderColor: 'blue',
            parsing: {
              yAxisKey: 'qty_shk_cat3'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat3
              }
            }
          },
          {
            label: 'Этап 4',
            data: this.data,
            borderColor: 'purple',
            parsing: {
              yAxisKey: 'qty_shk_cat4'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat4
              }
            }
          },
        ]
      },
      options: {
        parsing: {
          xAxisKey: 'dt_date',
          yAxisKey: 'qty_shk_cat1'
        },
        elements: {
          line: {
            tension: 0.4
          },
        },
        plugins: {
          datalabels: {
            color: 'black',
            align: 'top',
            font: {
              size: 14
            }
            }
          }
      },
    });
    let shk1 = 0,
      shk2 = 0,
      shk3 = 0,
      shk4 = 0;

    this.data.forEach((value: any) => {
      shk1 += value.qty_shk_cat1
      shk2 += value.qty_shk_cat2
      shk3 += value.qty_shk_cat3
      shk4 += value.qty_shk_cat4
    });

    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Этап 1', 'Этап 2', 'Этап 3', 'Этап 4'],
        datasets: [{
          label: '# of Votes',
          data: [shk1, shk2, shk3, shk4],
          parsing: {
            key: 'qty_shk'
          },
          backgroundColor: [
            '#6B8E23',
            'green',
            'blue',
            'purple',
          ],
          borderColor: [
            'white'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        plugins: {
          datalabels: {
            formatter: function (value) {
              return null
            }
          }
        }
      }
    });
  }
}