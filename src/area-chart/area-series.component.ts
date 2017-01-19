import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import d3 from '../d3';
import { sortLinear, sortByTime, sortByDomain } from '../utils/sort';

@Component({
  selector: 'g[ngx-charts-area-series]',
  template: `
    <svg:g ngx-charts-area
      class="area-series"
      [data]="data"
      [path]="path"
      [fill]="colors.getColor(data.name)"
      [stops]="gradientStops"
      [startingPath]="startingPath"
      [opacity]="opacity"
      [gradient]="gradient || hasGradient"
      [class.active]="isActive(data)"
      [class.inactive]="isInactive(data)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaSeriesComponent implements OnChanges {

  @Input() data;
  @Input() xScale;
  @Input() yScale;
  @Input() colors;
  @Input() scaleType;
  @Input() stacked: boolean = false;
  @Input() normalized: boolean = false;
  @Input() gradient;
  @Input() curve;
  @Input() activeEntries: any[];

  @Output() select = new EventEmitter();

  opacity: number;
  path: string;
  startingPath: string;

  hasGradient: boolean;
  gradientStops: any[];

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  update(): void {
    this.updateGradient();

    let area;
    let startingArea;

    const xProperty = (d) => {
      const label = d.name;
      return this.xScale(label);
    };

    if (this.stacked || this.normalized) {
      area = d3.area()
        .x(xProperty)
        .y0((d, i) => this.yScale(d.d0))
        .y1((d, i) => this.yScale(d.d1));

      startingArea = d3.area()
        .x(xProperty)
        .y0(d => this.yScale.range()[0])
        .y1(d => this.yScale.range()[0]);
    } else {
      area = d3.area()
        .x(xProperty)
        .y0(() => this.yScale.range()[0])
        .y1(d => this.yScale(d.value));

      startingArea = d3.area()
        .x(xProperty)
        .y0(d => this.yScale.range()[0])
        .y1(d => this.yScale.range()[0]);
    }

    area.curve(this.curve);
    startingArea.curve(this.curve);

    this.opacity = .8;

    let data = this.data.series;
    if (this.scaleType === 'linear') {
      data = sortLinear(data, 'name');
    } else if (this.scaleType === 'time') {
      data = sortByTime(data, 'name');
    } else {
      data = sortByDomain(data, 'name', 'asc', this.xScale.domain());
    }

    this.path = area(data);
    this.startingPath = startingArea(data);
  }

  updateGradient() {
    if (this.colors.scaleType === 'linear') {
      this.hasGradient = true;
      if (this.stacked || this.normalized) {        
        const d0values = this.data.series.map(d => d.d0);
        const d1values = this.data.series.map(d => d.d1);
        const max = Math.max(...d1values);
        const min = Math.min(...d0values);
        this.gradientStops = this.colors.getLinearGradientStops(max, min);
      } else {
        const values = this.data.series.map(d => d.value);
        const max = Math.max(...values);
        this.gradientStops = this.colors.getLinearGradientStops(max);
      }
    } else {
      this.hasGradient = false;
      this.gradientStops = undefined;
    }
  }

  isActive(entry): boolean {
    if(!this.activeEntries) return false;
    const item = this.activeEntries.find(d => {
      return entry.name === d.name;
    });
    return item !== undefined;
  }

  isInactive(entry): boolean {
    if(!this.activeEntries || this.activeEntries.length === 0) return false;
    const item = this.activeEntries.find(d => {
      return entry.name === d.name;
    });
    return item === undefined;
  }
  
}
