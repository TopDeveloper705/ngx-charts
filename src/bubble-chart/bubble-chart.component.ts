import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewEncapsulation,
  ChangeDetectionStrategy } from '@angular/core';
import { scaleLinear } from 'd3-scale';

import { BaseChartComponent } from '../common/base-chart.component';
import { calculateViewDimensions, ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { getScaleType, getDomain, getScale } from './bubble-chart.utils';

@Component({
  selector: 'ngx-charts-bubble-chart',
  template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [activeEntries]="activeEntries"
      [legendOptions]="legendOptions"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)">
      <svg:defs>
        <svg:clipPath>
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"/>
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="bubble-chart chart">
        <svg:g ngx-charts-x-axis
          *ngIf="xAxis"
          [showGridLines]="showGridLines"
          [dims]="dims"
          [xScale]="xScale"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [tickFormatting]="xAxisTickFormatting"
          (dimensionsChanged)="updateXAxisHeight($event)"/>
        <svg:g ngx-charts-y-axis
          *ngIf="yAxis"
          [showGridLines]="showGridLines"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [tickFormatting]="yAxisTickFormatting"
          (dimensionsChanged)="updateYAxisWidth($event)"/>
        <svg:rect
          class="bubble-chart-area"
          x="0"
          y="0"
          [attr.width]="dims.width"
          [attr.height]="dims.height"
          style="fill: rgb(255, 0, 0); opacity: 0; cursor: 'auto';"
          (mouseenter)="deactivateAll()"
        />
        <svg:g *ngFor="let series of data">
          <svg:g ngx-charts-bubble-series
            [xScale]="xScale"
            [yScale]="yScale"
            [rScale]="rScale"
            [xScaleType]="xScaleType"
            [yScaleType]="yScaleType"
            [xAxisLabel]="xAxisLabel"
            [yAxisLabel]="yAxisLabel"
            [colors]="colors"
            [data]="series"
            [activeEntries]="activeEntries"
            [tooltipDisabled]="tooltipDisabled"
            (select)="onClick($event, series)"
            (activate)="onActivate($event)"
            (deactivate)="onDeactivate($event)" />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>`,
    styleUrls: ['../common/base-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class BubbleChartComponent extends BaseChartComponent {
  @Input() showGridLines: boolean = true;
  @Input() legend = false;
  @Input() legendTitle: string = 'Legend';
  @Input() xAxis: boolean = true;
  @Input() yAxis: boolean = true;
  @Input() showXAxisLabel: boolean;
  @Input() showYAxisLabel: boolean;
  @Input() xAxisLabel: string;
  @Input() yAxisLabel: string;
  @Input() xAxisTickFormatting: any;
  @Input() yAxisTickFormatting: any;
  @Input() roundDomains: boolean = false;
  @Input() maxRadius = 10;
  @Input() minRadius = 3;
  @Input() autoScale: boolean;
  @Input() schemeType = 'ordinal';
  @Input() legendPosition: string = 'right';
  @Input() tooltipDisabled: boolean = false;

  @Output() activate: EventEmitter<any> = new EventEmitter();
  @Output() deactivate: EventEmitter<any> = new EventEmitter();

  dims: ViewDimensions;
  colors: ColorHelper;
  scaleType = 'linear';
  margin = [10, 20, 10, 20];
  bubblePadding = [0, 0, 0, 0];
  data: any;

  legendOptions: any;
  transform: string;

  seriesDomain: any[];
  xDomain: any[];
  yDomain: any[];
  rDomain: number[];

  xScaleType: string;
  yScaleType: string;

  yScale: any;
  xScale: any;
  rScale: any;

  xAxisHeight: number = 0;
  yAxisWidth: number = 0;

  activeEntries: any[] = [];

  update(): void {
    super.update();

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

    this.seriesDomain = this.results.map(d => d.name);
    this.rDomain = this.getRDomain();
    this.xDomain = this.getXDomain();
    this.yDomain = this.getYDomain();

    this.transform = `translate(${ this.dims.xOffset },${ this.margin[0] })`;

    const colorDomain = this.schemeType === 'ordinal' ? this.seriesDomain : this.rDomain;
    this.colors = new ColorHelper(this.scheme, this.schemeType, colorDomain, this.customColors);

    this.data = this.results;

    this.minRadius = Math.max(this.minRadius, 1);
    this.maxRadius = Math.max(this.maxRadius, 1);

    this.rScale = this.getRScale(this.rDomain, [this.minRadius, this.maxRadius]);

    this.bubblePadding = [0, 0, 0, 0];
    this.setScales();

    this.bubblePadding = this.getBubblePadding();
    this.setScales();

    this.legendOptions = this.getLegendOptions();
  }

  @HostListener('mouseleave')
  hideCircles(): void {
    this.deactivateAll();
  }

  onClick(data, series?): void {
    if (series) {
      data.series = series.name;
    }

    this.select.emit(data);
  }

  getBubblePadding() {
    let yMin = 0;
    let xMin = 0;
    let yMax = this.dims.height;
    let xMax = this.dims.width;

    for (const s of this.data) {
      for (const d of s.series) {
        const r = this.rScale(d.r);
        const cx = (this.xScaleType === 'linear') ? this.xScale(Number(d.x)) : this.xScale(d.x);
        const cy = (this.yScaleType === 'linear') ? this.yScale(Number(d.y)) : this.yScale(d.y);
        xMin = Math.max(r - cx, xMin);
        yMin = Math.max(r - cy, yMin);
        yMax = Math.max(cy + r, yMax);
        xMax = Math.max(cx + r, xMax);
      }
    }

    xMax = Math.max(xMax - this.dims.width, 0);
    yMax = Math.max(yMax - this.dims.height, 0);

    return [yMin, xMax, yMax, xMin];
  }

  setScales() {
    this.xScale = this.getXScale(this.xDomain, this.dims.width - this.bubblePadding[1]);
    this.yScale = this.getYScale(this.yDomain, this.dims.height - this.bubblePadding[2]);
  }

  getYScale(domain, height): any {
    return getScale(domain, [height, this.bubblePadding[0]], this.yScaleType, this.roundDomains);
  }

  getXScale(domain, width): any {
    return getScale(domain, [this.bubblePadding[3], width], this.xScaleType, this.roundDomains);
  }

  getRScale(domain, range): any {
    const scale = scaleLinear()
      .range(range)
      .domain(domain);

    return this.roundDomains ? scale.nice() : scale;
  }

  getLegendOptions(): any {
    const opts = {
      scaleType: this.schemeType,
      colors: undefined,
      domain: [],
      position: this.legendPosition,
      title: undefined
    };

    if (opts.scaleType === 'ordinal') {
      opts.domain = this.seriesDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.rDomain;
      opts.colors = this.colors.scale;
    }

    return opts;
  }

  getXDomain(): any[] {
    const values = [];

    for (const results of this.results) {
      for (const d of results.series){
        if (!values.includes(d.x)) {
          values.push(d.x);
        }
      }
    }

    this.xScaleType = getScaleType(values);
    return getDomain(values, this.xScaleType, this.autoScale);
  }

  getYDomain(): any[] {
    const values = [];

    for (const results of this.results) {
      for (const d of results.series){
        if (!values.includes(d.y)) {
          values.push(d.y);
        }
      }
    }

    this.yScaleType = getScaleType(values);
    return getDomain(values, this.yScaleType, this.autoScale);
  }

  getRDomain(): number[] {
    let min = Infinity;
    let max = -Infinity;

    for (const results of this.results) {
      for (const d of results.series){
        const value = Number(d.r) || 1;
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
    }

    return [min, max];
  }

  updateYAxisWidth({ width }): void {
    this.yAxisWidth = width;
    this.update();
  }

  updateXAxisHeight({ height }): void {
    this.xAxisHeight = height;
    this.update();
  }

  onActivate(item): void {
    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name;
    });
    if (idx > -1) {
      return;
    }

    this.activeEntries = [ item, ...this.activeEntries ];
    this.activate.emit({ value: item, entries: this.activeEntries });
  }

  onDeactivate(item): void {
    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name;
    });

    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];

    this.deactivate.emit({ value: item, entries: this.activeEntries });
  }

  deactivateAll() {
    this.activeEntries = [...this.activeEntries];
    for (const entry of this.activeEntries) {
      this.deactivate.emit({ value: entry, entries: [] });
    }
    this.activeEntries = [];
  }
}
