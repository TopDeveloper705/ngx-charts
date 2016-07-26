import { Component, Input, Output, EventEmitter } from '@angular/core';
import d3 from 'd3';
import { Chart } from '../common/charts/Chart.js';
import { BaseChart } from '../BaseChart.js';
import { CardSeries } from './CardSeries.js';
import { calculateViewDimensions } from '../common/viewDimensions.js';
import { colorHelper } from 'common/services/stats/colorSets.js';
import { gridLayout } from '../common/gridLayout.js';

@Component({
  selector: 'number-card',
  directives: [Chart, CardSeries],
  template: `
    <chart
      [legend]="false"
      [view]="view">
      <svg:g [attr.transform]="transform" class="viz numbercard">
        <svg:g card-series
          [colors]="colors"
          [data]="data"
          [dims]="dims"
          (clickHandler)="click($event)"
        />
      </svg:g>
    </chart>
  `
})
export class NumberCard extends BaseChart {
  @Input() view;
  @Input() results;
  @Input() margin = [10, 10, 10, 10];
  @Input() scheme;
  @Input() customColors;

  @Output() clickHandler = new EventEmitter();

  ngOnInit() {
    this.dims = calculateViewDimensions(this.view, this.margin, false, false, false);

    let sortedData = this.results.series[0].sort((a, b) => {
      return this.results.d0Domain.indexOf(a.vals[0].label[1]) - this.results.d0Domain.indexOf(b.vals[0].label[1])
    })

    this.data = gridLayout(this.dims, sortedData, 150);

    this.colors = colorHelper(this.scheme, 'ordinal', this.results.d0Domain, this.customColors);
    this.transform = `translate(${ this.dims.xOffset } , ${ this.margin[0] })`;
  }

  click(data){
    this.clickHandler.emit(data);
  }

}
