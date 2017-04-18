import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  NgZone
} from '@angular/core';
import { gridSize, gridLayout } from '../common/grid-layout.helper';
import { invertColor } from '../utils/color-utils';

export interface CardModel {
  x;
  y;
  width: number;
  height: number;
  color: string;
  label: string;
  data;
  tooltipText: string;
}

@Component({
  selector: 'g[ngx-charts-card-series]',
  template: `
    <svg:rect
      *ngFor="let c of emptySlots; trackBy:trackBy"
      class="card-empty"
      [attr.x]="c.x"
      [attr.y]="c.y"
      [style.fill]="emptyColor"
      [attr.width]="c.width"
      [attr.height]="c.height"
      rx="3"
      ry="3"
    />
    <svg:g ngx-charts-card *ngFor="let c of cards; trackBy:trackBy"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [color]="c.color"
      [bandColor]="c.bandColor"
      [textColor]="c.textColor"
      [data]="c.data"
      [medianSize]="medianSize"
      [valueFormatting]="valueFormatting"
      [labelFormatting]="labelFormatting"
      (select)="onClick($event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardSeriesComponent implements OnChanges {

  @Input() data: any[];
  @Input() slots: any[];
  @Input() dims;
  @Input() colors;
  @Input() innerPadding = 15;

  @Input() cardColor;
  @Input() bandColor;
  @Input() emptyColor = 'rgba(0, 0, 0, 0)';
  @Input() textColor;
  @Input() valueFormatting: any;
  @Input() labelFormatting: any;

  @Output() select = new EventEmitter();

  cards: CardModel[];
  emptySlots: any[];
  medianSize: number;

  constructor(private zone: NgZone) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  update(): void {
    if (this.data.length > 2) {
      this.valueFormatting = this.valueFormatting || (card => card.data.value.toLocaleString());

      const sortedLengths = this.data
        .map(d => {
          const hasValue = d && d.data && typeof d.data.value !== 'undefined' && d.data.value !== null;
          return hasValue ? this.valueFormatting({
            data: d.data,
            label: d ? d.data.name : '',
            value: (d && d.data) ? d.data.value : ''
          }).length : 0;
        })
        .sort((a, b) => b - a);
      const idx = Math.ceil(this.data.length / 2);
      this.medianSize = sortedLengths[idx];
    }

    const cards = this.getCards();
    this.cards = cards.filter(d => d.data.value !== null);
    this.emptySlots = cards.filter(d => d.data.value === null);
  }

  getCards(): any[] {
    const yPadding = typeof this.innerPadding === 'number' ?
      this.innerPadding :
      this.innerPadding[0] + this.innerPadding[2];
    const xPadding = typeof this.innerPadding === 'number' ?
      this.innerPadding :
      this.innerPadding[1] + this.innerPadding[3];

    return this.data
      .map((d, index) => {
        let label = d.data.name;
        if (label && label.constructor.name === 'Date') {
          label = label.toLocaleDateString();
        } else {
          label = label ? label.toLocaleString() : label;
        }
        d.data.name = label;

        const value = d.data.value;
        const valueColor = label ? this.colors.getColor(label) : this.emptyColor;
        const color = this.cardColor || valueColor;
        return {
          x: d.x,
          y: d.y,
          width: d.width - xPadding,
          height: d.height - yPadding,
          color,
          bandColor: this.bandColor || valueColor,
          textColor: this.textColor || invertColor(color),
          label,
          data: d.data,
          tooltipText: `${label}: ${value}`
        };
      });
  }

  trackBy(index, card): string {
    return card.label;
  }

  onClick(data): void {
    this.select.emit(data);
  }

}
