import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo';
  @Input('labels') labelsGrafica: Label[] = [];
  @Input('data') doughnutChartData = []; 
  public colors: Color[] = [
    {backgroundColor: ['#6857E6', '#009FEE', '#F0']}
  ]

  constructor() { }


}
