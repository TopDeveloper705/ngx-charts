import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  SimpleChanges,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { interpolate } from 'd3-interpolate';
import { select } from 'd3-selection';
import { arc } from 'd3-shape';

import { id } from '../utils/id';

@Component({
  selector: 'g[ngx-charts-pie-arc]',
  template: `
    <svg:g class="arc-group">
      <svg:defs *ngIf="gradient">
        <svg:g ngx-charts-svg-radial-gradient
          [color]="fill"
          orientation="vertical"
          [name]="radialGradientId"
          [startOpacity]="startOpacity"
        />
      </svg:defs>
      <svg:path
        [attr.d]="path"
        class="arc"
        [class.active]="isActive"
        [attr.fill]="gradient ? gradientFill : fill"
        (click)="onClick()"
        (mouseenter)="activate.emit(data)"
        (mouseleave)="deactivate.emit(data)"
        [style.pointer-events]="pointerEvents ? 'auto' : 'none'"
      />
    </svg:g>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieArcComponent implements OnChanges {

  @Input() fill;
  @Input() startAngle: number = 0;
  @Input() endAngle: number = Math.PI * 2;
  @Input() innerRadius;
  @Input() outerRadius;
  @Input() cornerRadius: number = 0;
  @Input() value;
  @Input() max;
  @Input() data;
  @Input() explodeSlices: boolean = false;
  @Input() gradient: boolean = false;
  @Input() animate: boolean = true;
  @Input() pointerEvents: boolean = true;
  @Input() isActive: boolean = false;

  @Output() select = new EventEmitter();
  @Output() activate = new EventEmitter();
  @Output() deactivate = new EventEmitter();

  element: HTMLElement;
  path: any;
  startOpacity: number;
  radialGradientId: string;
  linearGradientId: string;
  gradientFill: string;
  initialized: boolean = false;

  constructor(element: ElementRef, private location: LocationStrategy) {
    this.element = element.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  update(): void {
    const arc = this.calculateArc();
    this.path = arc.startAngle(this.startAngle).endAngle(this.endAngle)();
    this.startOpacity = 0.5;

    const pageUrl = this.location instanceof PathLocationStrategy
      ? this.location.path()
      : '';

    this.radialGradientId = 'linearGrad' + id().toString();
    this.gradientFill = `url(${pageUrl}#${this.radialGradientId})`;

    if (this.animate) {
      if (this.initialized) {
        this.updateAnimation();
      } else {
        this.loadAnimation();
        this.initialized = true;
      }
    }

  }

  calculateArc(): any {
    let outerRadius = this.outerRadius;
    if (this.explodeSlices && this.innerRadius === 0) {
      outerRadius = this.outerRadius * this.value / this.max;
    }

    return arc()
      .innerRadius(this.innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(this.cornerRadius);
  }

  loadAnimation(): void {
    const node = select(this.element)
      .selectAll('.arc')
      .data([{startAngle: this.startAngle, endAngle: this.endAngle}]);

    const arc = this.calculateArc();

    node
      .transition()
      .attrTween('d', function(d) {
        (<any>this)._current = (<any>this)._current || d;
        const copyOfD = Object.assign({}, d);
        copyOfD.endAngle = copyOfD.startAngle;
        const interpolater = interpolate(copyOfD, copyOfD);
        (<any>this)._current = interpolater(0);
        return function(t) {
          return arc(interpolater(t));
        };
      })
      .transition().duration(750)
      .attrTween('d', function(d) {
        (<any>this)._current = (<any>this)._current || d;
        const interpolater = interpolate((<any>this)._current, d);
        (<any>this)._current = interpolater(0);
        return function(t) {
          return arc(interpolater(t));
        };
      });
  }

  updateAnimation(): void {
    const node = select(this.element)
      .selectAll('.arc')
      .data([{startAngle: this.startAngle, endAngle: this.endAngle}]);

    const arc = this.calculateArc();

    node
      .transition().duration(750)
      .attrTween('d', function(d) {
        (<any>this)._current = (<any>this)._current || d;
        const interpolater = interpolate((<any>this)._current, d);
        (<any>this)._current = interpolater(0);
        return function(t) {
          return arc(interpolater(t));
        };
      });
  }

  onClick(): void {
    this.select.emit(this.data);
  }

}
