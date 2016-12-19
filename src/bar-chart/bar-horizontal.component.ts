import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { calculateViewDimensions, ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../utils/color-sets';
import { BaseChartComponent } from '../common/base-chart.component';
import d3 from '../d3';

@Component({
  selector: 'ngx-charts-bar-horizontal',
  template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)">
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g ngx-charts-xAxis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          (dimensionsChanged)="updateXAxisHeight($event)">
        </svg:g>
        <svg:g ngx-charts-yAxis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          (dimensionsChanged)="updateYAxisWidth($event)">
        </svg:g>
        <svg:g ngx-charts-seriesHorizontal
          [xScale]="xScale"
          [yScale]="yScale"
          [colors]="colors"
          [series]="results"
          [dims]="dims"
          [gradient]="gradient"
          [activeEntries]="activeEntries"
          (select)="onClick($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarHorizontalComponent extends BaseChartComponent {

  @Input() legend = false;
  @Input() xAxis;
  @Input() yAxis;
  @Input() showXAxisLabel;
  @Input() showYAxisLabel;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
  @Input() gradient: boolean;
  @Input() showGridLines: boolean = true;
  @Input() activeEntries: any[] = [];
  @Input() schemeType: string;

  @Output() activate: EventEmitter<any> = new EventEmitter();
  @Output() deactivate: EventEmitter<any> = new EventEmitter();

  dims: ViewDimensions;
  yScale: any;
  xScale: any;
  xDomain: any;
  yDomain: any;
  transform: string;
  colors: ColorHelper;
  margin = [10, 20, 10, 20];
  xAxisHeight: number = 0;
  yAxisWidth: number = 0;
  legendOptions: any;

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
        legendType: this.schemeType
      });

      this.xScale = this.getXScale();
      this.yScale = this.getYScale();

      this.setColors();
      this.legendOptions = this.getLegendOptions();

      this.transform = `translate(${ this.dims.xOffset } , ${ this.margin[0] })`;
    });
  }

  getXScale() {
    this.xDomain = this.getXDomain();

    return d3.scaleLinear()
      .range([0, this.dims.width])
      .domain(this.xDomain);
  }

  getYScale() {
    const spacing = 0.2;
    this.yDomain = this.getYDomain();

    return d3.scaleBand()
      .rangeRound([this.dims.height, 0])
      .paddingInner(spacing)
      .domain(this.yDomain);
  }

  getXDomain(): any[] {
    const values = this.results.map(d => d.value);

    const min = Math.min(0, ...values);
    const max = Math.max(...values);

    return [ min, max ];
  }

  getYDomain(): any[] {
    return this.results.map(d => d.name);
  }

  onClick(data): void {
    this.select.emit(data);
  }
  
  setColors(): void {
    let domain;
    if (this.schemeType === 'ordinal') {
      domain = this.yDomain; 
    } else {
      domain = this.xDomain;
    }

    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }

  getLegendOptions() {
    let opts = {
      scaleType: this.schemeType,
      colors: undefined,
      domain: []
    };
    if (opts.scaleType === 'ordinal') {
      opts.domain = this.yDomain;
      opts.colors = this.colors;
    } else {
      opts.domain = this.xDomain;
      opts.colors = this.colors.scale;
    }

    return opts;
  }

  updateYAxisWidth({ width }): void {
    this.yAxisWidth = width;
    this.update();
  }

  updateXAxisHeight({ height }): void {
    this.xAxisHeight = height;
    this.update();
  }

  onActivate(event): void {
    if(this.activeEntries.indexOf(event) > -1) return;
    this.activeEntries = [ event, ...this.activeEntries ];
    this.activate.emit({ value: event, entries: this.activeEntries });
  }

  onDeactivate(event): void {
    const idx = this.activeEntries.indexOf(event);

    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];

    this.deactivate.emit({ value: event, entries: this.activeEntries });
  }
  
}
