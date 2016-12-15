import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import d3 from '../d3';
import { BaseChartComponent } from '../common/base-chart.component';
import { calculateViewDimensions, ViewDimensions } from '../common/view-dimensions.helper';
import { generateColorScale, colorHelper } from '../utils/color-sets';

@Component({
  selector: 'heat-map',
  template: `
    <chart
      [legend]="legend"
      (legendLabelClick)="onClick($event)"
      [legendData]="colorScale"
      [data]="valueDomain"
      [view]="[width, height]">
      <svg:g [attr.transform]="transform" class="heat-map chart">
        <svg:g xAxis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          (dimensionsChanged)="updateXAxisHeight($event)">
        </svg:g>
        <svg:g yAxis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          (dimensionsChanged)="updateYAxisWidth($event)">
        </svg:g>
        <svg:rect *ngFor="let rect of rects"
          [attr.x]="rect.x"
          [attr.y]="rect.y"
          [attr.rx]="rect.rx"
          [attr.width]="rect.width"
          [attr.height]="rect.height"
          [attr.fill]="rect.fill"
        />
        <svg:g heatMapCellSeries
          [xScale]="xScale"
          [yScale]="yScale"
          [colors]="colors"
          [data]="results"
          [gradient]="gradient"
          (select)="onClick($event)"
        />
      </svg:g>
    </chart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeatMapComponent extends BaseChartComponent {

  @Input() legend;
  @Input() xAxis;
  @Input() yAxis;
  @Input() showXAxisLabel;
  @Input() showYAxisLabel;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
  @Input() gradient: boolean;

  dims: ViewDimensions;
  xDomain: any[];
  yDomain: any[];
  valueDomain: any[];
  xScale: any;
  yScale: any;
  color: any;
  colors: Function;
  colorScale: any;
  transform: string;
  rects: any[];
  margin = [10, 20, 10, 20];
  xAxisHeight: number = 0;
  yAxisWidth: number = 0;

  update(): void {
    super.update();

    this.zone.run(() => {
      this.dims = calculateViewDimensions({
        width: this.width,
        height: this.height,
        margins: this.margin,
        showXAxis: this.xAxis,
        showYAxis: this.yAxis,
        xAxisHeight: this.xAxisHeight,
        yAxisWidth: this.yAxisWidth,
        showXLabel: this.showXAxisLabel,
        showYLabel: this.showYAxisLabel,
        showLegend: this.legend,
        columns: 11
      });

      this.formatDates();

      this.xDomain = this.getXDomain();
      this.yDomain = this.getYDomain();
      this.valueDomain = this.getValueDomain();

      this.xScale = this.getXScale();
      this.yScale = this.getYScale();

      this.setColors();
      this.transform = `translate(${ this.dims.xOffset } , ${ this.margin[0] })`;

      this.rects = this.getRects();
    });
  }

  getXDomain(): any {
    let domain = [];
    for (let group of this.results) {
      if (!domain.includes(group.name)) {
        domain.push(group.name);
      }
    }

    return domain;
  }

  getYDomain(): any[] {
    let domain = [];

    for (let group of this.results) {
      for (let d of group.series) {
        if (!domain.includes(d.name)) {
          domain.push(d.name);
        }
      }
    }

    return domain;
  }

  getValueDomain(): any[] {
    let domain = [];

    for (let group of this.results) {
      for (let d of group.series) {
        if (!domain.includes(d.value)) {
          domain.push(d.value);
        }
      }
    }

    let min = Math.min(0, ...domain);
    let max = Math.max(...domain);

    return [min, max];
  }

  getXScale(): any {
    return d3.scaleBand()
      .rangeRound([0, this.dims.width])
      .paddingInner(0.1)
      .domain(this.xDomain);
  }

  getYScale(): any {
    return d3.scaleBand()
      .rangeRound([this.dims.height, 0])
      .paddingInner(0.1)
      .domain(this.yDomain);
  }

  getRects(): any[] {
    let rects = [];

    this.xDomain.map((xVal) => {
      this.yDomain.map((yVal) => {
        rects.push({
          x: this.xScale(xVal),
          y: this.yScale(yVal),
          rx: 3,
          width: this.xScale.bandwidth(),
          height: this.yScale.bandwidth(),
          fill: 'rgba(200,200,200,0.03)'
        });
      });
    });

    return rects;
  }

  onClick(data): void {
    this.select.emit(data);
  }

  setColors(): void {
    this.colors = colorHelper(this.scheme, 'linear', this.valueDomain);
    this.colorScale = generateColorScale(this.scheme, 'linear', this.valueDomain);
  }

  updateYAxisWidth({ width }): void {
    this.yAxisWidth = width;
    this.update();
  }

  updateXAxisHeight({ height }):void {
    this.xAxisHeight = height;
    this.update();
  }

}
