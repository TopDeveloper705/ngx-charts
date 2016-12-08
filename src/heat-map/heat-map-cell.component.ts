import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ElementRef,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { id } from "../utils/id";
import d3 from '../d3';

@Component({
  selector: 'g[heatMapCell]',
  template: `
    <svg:g [attr.transform]="transform" class="cell">
      <defs *ngIf="gradient">
        <svg:g svgLinearGradient
          [color]="fill"
          orientation="vertical"
          [name]="gradientId"
          [startOpacity]="startOpacity"
        />
      </defs>
      <svg:rect
        [attr.fill]="gradient ? gradientUrl : fill"
        rx="3"
        [attr.width]="width"
        [attr.height]="height"
        class="cell"
        style="cursor: pointer"
        (click)="onClick()"
      />
    </svg:g>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeatMapCellComponent implements OnChanges {

  @Input() fill;
  @Input() x;
  @Input() y;
  @Input() width;
  @Input() height;
  @Input() data;
  @Input() label;
  @Input() gradient: boolean = false;

  @Output() select = new EventEmitter();

  element: HTMLElement;
  transform: string;
  activeRange: any[];
  startOpacity: number;
  gradientId: string;
  gradientUrl: string;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.transform = `translate(${this.x} , ${this.y})`;
    let pageUrl = window.location.href;
    this.startOpacity = 0.3;
    this.gradientId = 'grad' + id().toString();
    this.gradientUrl = `url(${pageUrl}#${this.gradientId})`;

    this.loadAnimation();
  }

  loadAnimation(): void {
    let node = d3.select(this.element).select('.cell');
    node.attr('opacity', 0);
    this.animateToCurrentForm();
  }

  animateToCurrentForm(): void {
    let node = d3.select(this.element).select('.cell');

    node.transition().duration(750)
      .attr('opacity', 1);
  }

  onClick() {
    this.select.emit(this.data);
  }

}
