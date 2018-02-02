import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('label') doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // tslint:disable-next-line:no-input-rename
  @Input('data') doughnutChartData: number[] = [350, 450, 100];
  // tslint:disable-next-line:no-input-rename
  @Input('charType') doughnutChartType: string = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
