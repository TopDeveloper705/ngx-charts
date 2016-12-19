import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  trigger,
  style,
  transition,
  animate,
  ChangeDetectionStrategy
 } from '@angular/core';
import { formatLabel } from '../common/label.helper';

@Component({
  selector: 'g[ngx-charts-seriesVertical]',
  template: `
    <svg:g ngx-charts-bar *ngFor="let bar of bars; trackBy: trackBy"
      [@animationState]="'active'"
      [width]="bar.width"
      [height]="bar.height"
      [x]="bar.x"
      [y]="bar.y"
      [fill]="bar.color"
      [stops]="bar.gradientStops"
      [data]="bar.data"
      [orientation]="'vertical'"
      [roundEdges]="bar.roundEdges"
      [gradient]="gradient"
      [isActive]="isActive(bar.formattedLabel)"
      (select)="onClick($event)"
      swui-tooltip
      [tooltipPlacement]="'top'"
      [tooltipType]="'tooltip'"
      [tooltipTitle]="bar.tooltipText">
    </svg:g>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animationState', [
      transition('* => void', [
        style({
          opacity: 1,
          transform: '*',
        }),
        animate(500, style({opacity: 0, transform: 'scale(0)'}))
      ])
    ])
  ]
})
export class SeriesVerticalComponent implements OnChanges {

  @Input() dims;
  @Input() type = 'standard';
  @Input() series;
  @Input() xScale;
  @Input() yScale;
  @Input() colors;
  @Input() gradient: boolean;
  @Input() activeEntries: any[];

  @Output() select = new EventEmitter();

  bars: any;
  x: any;
  y: any;

  ngOnChanges(changes): void {
    this.update();
  }

  update(): void {
    let width;
    if (this.series.length) {
      width = this.xScale.bandwidth();
    }

    let d0 = 0;
    let total;
    if (this.type === 'normalized') {
      total = this.series.map(d => d.value).reduce((sum, d) => { return sum + d; }, 0);
    }

    this.bars = this.series.map((d, index) => {
      let value = d.value;
      let label = d.name;
      const formattedLabel = formatLabel(label);
      const roundEdges = this.type === 'standard';
      
      let bar: any = {
        value,
        label,
        roundEdges: roundEdges,
        data: d,
        width,
        formattedLabel,
        height: 0,
        x: 0,
        y: 0
      };

      if (this.type === 'standard') {
        bar.height = Math.abs(this.yScale(value) - this.yScale(0));
        bar.x = this.xScale(label);

        if (value < 0) {
          bar.y = this.yScale(0);
        } else {
          bar.y = this.yScale(value);
        }
      } else if (this.type === 'stacked') {
        let offset0 = d0;
        let offset1 = offset0 + value;
        d0 += value;

        bar.height = this.yScale(offset0) - this.yScale(offset1);
        bar.x = 0;
        bar.y = this.yScale(offset1);
        bar.offset0 = offset0;
        bar.offset1 = offset1;
      } else if (this.type === 'normalized') {
        let offset0 = d0;
        let offset1 = offset0 + value;
        d0 += value;

        if (total > 0) {
          offset0 = (offset0 * 100) / total;
          offset1 = (offset1 * 100) /total;
        } else {
          offset0 = 0;
          offset1 = 0;
        }

        bar.height = this.yScale(offset0) - this.yScale(offset1);
        bar.x = 0;
        bar.y = this.yScale(offset1);
        bar.offset0 = offset0;
        bar.offset1 = offset1;
        value = (offset1 - offset0).toFixed(2) + '%';
      }

      if (this.colors.scaleType === 'ordinal') {
        bar.color = this.colors.getColor(label);
      } else {
        if (this.type === 'standard') {
          bar.color = this.colors.getColor(value);
          bar.gradientStops = this.colors.getLinearGradientStops(value);
        } else {
          bar.color = this.colors.getColor(bar.offset1);
          bar.gradientStops = this.colors.getLinearGradientStops(bar.offset1, bar.offset0);
        }
      }

      bar.tooltipText = `
        <span class="tooltip-label">${formattedLabel}</span>
        <span class="tooltip-val">${value.toLocaleString()}</span>
      `;

      return bar;
    });
  }

  isActive(entry): boolean {
    if(!this.activeEntries) return false;
    return this.activeEntries.indexOf(entry) > -1;
  }

  onClick(data): void {
    this.select.emit(data);
  }

  trackBy(index, bar): string {
    return bar.label;
  }

}
