import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ContentChild,
  TemplateRef
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { scaleBand, scaleLinear } from 'd3-scale';

import { calculateViewDimensions, ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';

@Component({
  selector: 'ngx-charts-bar-vertical-stacked',
  template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
      (legendLabelClick)="onClick($event)">
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [tickFormatting]="xAxisTickFormatting"
          (dimensionsChanged)="updateXAxisHeight($event)">
        </svg:g>
        <svg:g ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [tickFormatting]="yAxisTickFormatting"
          (dimensionsChanged)="updateYAxisWidth($event)">
        </svg:g>
        <svg:g
          *ngFor="let group of results; trackBy:trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)">
          <svg:g ngx-charts-series-vertical
            type="stacked"
            [xScale]="xScale"
            [yScale]="yScale"
            [activeEntries]="activeEntries"
            [colors]="colors"
            [series]="group.series"
            [dims]="dims"
            [gradient]="gradient"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [seriesName]="group.name"
            (select)="onClick($event, group)"
            (activate)="onActivate($event, group)"
            (deactivate)="onDeactivate($event, group)"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
  styleUrls: ['../common/base-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animationState', [
      transition(':leave', [
        style({
          opacity: 1,
          transform: '*',
        }),
        animate(500, style({opacity: 0, transform: 'scale(0)'}))
      ])
    ])
  ]
})
export class BarVerticalStackedComponent extends BaseChartComponent {

  @Input() legend = false;
  @Input() legendTitle: string = 'Legend';
  @Input() xAxis;
  @Input() yAxis;
  @Input() showXAxisLabel;
  @Input() showYAxisLabel;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
  @Input() tooltipDisabled: boolean = false;
  @Input() gradient: boolean;
  @Input() showGridLines: boolean = true;
  @Input() activeEntries: any[] = [];
  @Input() schemeType: string;
  @Input() xAxisTickFormatting: any;
  @Input() yAxisTickFormatting: any;
  @Input() barPadding = 8;
  @Input() roundDomains: boolean = false;

  @Output() activate: EventEmitter<any> = new EventEmitter();
  @Output() deactivate: EventEmitter<any> = new EventEmitter();

  @ContentChild('tooltipTemplate') tooltipTemplate: TemplateRef<any>;

  dims: ViewDimensions;
  groupDomain: any[];
  innerDomain: any[];
  valueDomain: any[];
  xScale: any;
  yScale: any;
  transform: string;
  tickFormatting: (label: string) => string;
  colors: ColorHelper;
  margin = [10, 20, 10, 20];
  xAxisHeight: number = 0;
  yAxisWidth: number = 0;
  legendOptions: any;

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

    this.formatDates();

    this.groupDomain = this.getGroupDomain();
    this.innerDomain = this.getInnerDomain();
    this.valueDomain = this.getValueDomain();

    this.xScale = this.getXScale();
    this.yScale = this.getYScale();

    this.setColors();
    this.legendOptions = this.getLegendOptions();

    this.transform = `translate(${ this.dims.xOffset } , ${ this.margin[0] })`;
  }

  getGroupDomain() {
    const domain = [];
    for (const group of this.results) {
      if (!domain.includes(group.name)) {
        domain.push(group.name);
      }
    }

    return domain;
  }

  getInnerDomain() {
    const domain = [];
    for (const group of this.results) {
      for (const d of group.series) {
        if (!domain.includes(d.name)) {
          domain.push(d.name);
        }
      }
    }

    return domain;
  }

  getValueDomain() {
    const domain = [];
    for (const group of this.results) {
      let sum = 0;
      for (const d of group.series) {
        sum += d.value;
      }

      domain.push(sum);
    }

    const min = Math.min(0, ...domain);
    const max = Math.max(...domain);
    return [min, max];
  }

  getXScale(): any {
    const spacing = this.groupDomain.length / (this.dims.width / this.barPadding + 1);
    return scaleBand()
      .rangeRound([0, this.dims.width])
      .paddingInner(spacing)
      .domain(this.groupDomain);
  }

  getYScale(): any {
    const scale = scaleLinear()
      .range([this.dims.height, 0])
      .domain(this.valueDomain);
    return this.roundDomains ? scale.nice() : scale;
  }

  groupTransform(group) {
    return `translate(${this.xScale(group.name)}, 0)`;
  }

  onClick(data, group?) {
    if (group) {
      data.series = group.name;
    }

    this.select.emit(data);
  }

  trackBy(index, item) {
    return item.name;
  }

  setColors(): void {
    let domain;
    if (this.schemeType === 'ordinal') {
      domain = this.innerDomain;
    } else {
      domain = this.valueDomain;
    }

    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }

  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: undefined,
      domain: [],
      title: undefined
    };
    if (opts.scaleType === 'ordinal') {
      opts.domain = this.innerDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.valueDomain;
      opts.colors = this.colors.scale;
    }

    return opts;
  }

  updateYAxisWidth({width}) {
    this.yAxisWidth = width;
    this.update();
  }

  updateXAxisHeight({height}) {
    this.xAxisHeight = height;
    this.update();
  }

  onActivate(event, group?) {
    const item = Object.assign({}, event);
    if (group) {
      item.series = group.name;
    }

    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    if (idx > -1) {
      return;
    }

    this.activeEntries = [ item, ...this.activeEntries ];
    this.activate.emit({ value: item, entries: this.activeEntries });
  }

  onDeactivate(event, group?) {
    const item = Object.assign({}, event);
    if (group) {
      item.series = group.name;
    }

    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });

    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];

    this.deactivate.emit({ value: item, entries: this.activeEntries });
  }

}
