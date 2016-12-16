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

@Component({
  selector: 'advanced-pie-chart',
  template: `
    <div
      [style.width.px]="width"
      [style.height.px]="height">
      <div class="advanced-pie chart"
        [style.width.px]="dims.width"
        [style.height.px]="dims.height">
        <chart
          [colors]="colors"
          [legend]="legend"
          [legendData]="domain"
          (legendLabelClick)="onClick($event)"
          (legendLabelActivate)="onActivate($event)"
          (legendLabelDeactivate)="onDeactivate($event)"
          [view]="[dims.width, dims.height]">
          <svg:g
            [attr.transform]="transform"
            class="pie chart">
            <svg:g pieSeries
              [colors]="colors"
              [showLabels]="labels"
              [series]="results"
              [innerRadius]="innerRadius"
              [activeEntries]="activeEntries"
              [outerRadius]="outerRadius"
              [gradient]="gradient"
              (select)="onClick($event)">
            </svg:g>
          </svg:g>
        </chart>
      </div>
      <div 
        class="advanced-pie-legend-wrapper"
        [style.width.px]="width - dims.width">
        <advanced-legend
          [data]="results"
          [colors]="colors"
          [width]="width - dims.width - margin[1]"
          (select)="onClick($event)"
          (activate)="onActivate($event)"
          (deactivate)="onDeactivate($event)">
        </advanced-legend>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedPieChartComponent extends BaseChartComponent {

  @Input() gradient: boolean;
  @Input() activeEntries: any[] = [];

  @Output() activate: EventEmitter<any> = new EventEmitter();
  @Output() deactivate: EventEmitter<any> = new EventEmitter();

  data: any;
  dims: ViewDimensions;
  domain: any[];
  outerRadius: number;
  innerRadius: number;
  transform: string;
  colors: ColorHelper;
  legendWidth: number;
  margin = [20, 20, 20, 20];

  update(): void {
    super.update();

    this.zone.run(() => {
      this.dims = calculateViewDimensions({
        width: this.width * 4 / 12.0,
        height: this.height,
        margins: this.margin
      });

      this.domain = this.getDomain();
      this.setColors();

      let xOffset = this.dims.width / 2;
      let yOffset = this.margin[0] + this.dims.height / 2;
      this.legendWidth = this.width - this.dims.width - this.margin[1];

      this.outerRadius = Math.min(this.dims.width, this.dims.height) / 2.5;
      this.innerRadius = this.outerRadius * 0.75;

      this.transform = `translate(${xOffset} , ${yOffset})`;
    });
  }

  getDomain(): any[] {
    return this.results.map(d => d.name);
  }

  onClick(data) {
    this.select.emit(data);
  }

  setColors(): void {
    this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
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
