import {
  Component,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import d3 from '../d3';
import { formatLabel } from '../common/label.helper';

@Component({
  selector: 'g[pieSeries]',
  template: `
    <svg:g *ngFor="let arc of data; trackBy:trackBy">
      <svg:g pieLabel
        *ngIf="labelVisible(arc)"
        [data]="arc"
        [radius]="outerRadius"
        [color]="color(arc)"
        [label]="label(arc)"
        [max]="max"
        [value]="arc.value"
        [explodeSlices]="explodeSlices">
      </svg:g>
      <svg:g 
        pieArc
        [startAngle]="arc.startAngle"
        [endAngle]="arc.endAngle"
        [innerRadius]="innerRadius"
        [outerRadius]="outerRadius"
        [fill]="color(arc)"
        [value]="arc.data.value"
        [data]="arc.data"
        [max]="max"
        [explodeSlices]="explodeSlices"
        [isActive]="isActive(arc)"
        (clickHandler)="onClick($event)"
        [gradient]="gradient" 
        swui-tooltip
        [tooltipPlacement]="'top'"
        [tooltipType]="'tooltip'"
        [tooltipTitle]="tooltipText(arc)">
      </svg:g>
    </svg:g>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieSeriesComponent implements OnChanges {

  @Input() colors;
  @Input() series: any = [];
  @Input() dims;
  @Input() innerRadius = 60;
  @Input() outerRadius = 80;
  @Input() explodeSlices;
  @Input() showLabels;
  @Input() gradient: boolean;
  @Input() activeEntries: any[];

  @Output() clickHandler = new EventEmitter();

  max: number;
  data: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  update(): void {
    let pie: any = d3.pie()
      .value((d) => d.value)
      .sort(null);

    const arcData = pie(this.series);

    this.max = d3.max(arcData, (d) => {
      return d.value;
    });

    this.data = this.calculateLabelPositions(arcData);
  }

  midAngle(d): number {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }

  outerArc(): any {
    const factor = 1.5;

    return d3.arc()
      .innerRadius(this.outerRadius * factor)
      .outerRadius(this.outerRadius * factor);
  }

  calculateLabelPositions(pieData): any {
    const minDistance = 10;
    let labelPositions = pieData;

    labelPositions.forEach((d) => {
      d.pos = this.outerArc().centroid(d);
      d.pos[0] = this.outerRadius * (this.midAngle(d) < Math.PI ? 1 : -1);
    });

    for (let i = 0; i < labelPositions.length - 1; i++) {
      let a = labelPositions[i];

      for (let j = i + 1; j < labelPositions.length; j++) {
        let b = labelPositions[j];
        // if they're on the same side
        if (b.pos[0] * a.pos[0] > 0) {
          // if they're overlapping
          if (Math.abs(b.pos[1] - a.pos[1]) <= minDistance) {
            // push the second one down
            labelPositions[j].pos[1] = b.pos[1] + minDistance;
            j--;
          }
        }
      }
    }

    return labelPositions;
  }

  labelVisible(arc): boolean {
    return this.showLabels && (arc.endAngle - arc.startAngle > Math.PI / 30);
  }

  label(arc): string {
    return formatLabel(arc.data.name);
  }

  tooltipText(arc) {
    const label = this.label(arc);
    const val = formatLabel(arc.data.value);

    return `
      <span class="tooltip-label">${label}</span>
      <span class="tooltip-val">${val}</span>
    `;
  }

  color(arc): any {
    return this.colors(this.label(arc));
  }

  trackBy(index, item): string {
    return item.data.name;
  }

  onClick(data): void {
    this.clickHandler.emit(data);
  }

  isActive(entry): boolean {
    if(!this.activeEntries) return false;
    
    const label = this.label(entry);
    return this.activeEntries.indexOf(label) > -1;
  }

}
