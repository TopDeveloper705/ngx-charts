import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import d3 from '../d3';
import { BaseChartComponent } from '../common/base-chart.component';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../utils/color-sets';

@Component({
  selector: 'ngx-charts-tree-map',
  template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="false">
      <svg:g [attr.transform]="transform" class="tree-map chart">
        <svg:g ngx-charts-tree-map-cell-series
          [colors]="colors"
          [data]="data"
          [dims]="dims"
          (select)="onClick($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeMapComponent extends BaseChartComponent {

  @Input() results;

  @Output() select = new EventEmitter();

  dims: any;
  domain: any;
  transform: any;
  colors: ColorHelper;
  treemap: any;
  data: any;
  margin = [10, 10, 10, 10];

  update(): void {
    super.update();

    this.zone.run(() => {
      this.dims = calculateViewDimensions({
        width: this.width,
        height: this.height,
        margins: this.margin
      });

      this.domain = this.getDomain();

      this.treemap = d3.treemap()
        .size([this.dims.width, this.dims.height]);

      let rootNode = {
        name: 'root',
        value: 0,
        isRoot: true
      };

      let root = d3.stratify()
        .id(d => {
          let label = d.name;

          if (label.constructor.name === 'Date') {
            label = label.toLocaleDateString();
          } else {
            label = label.toLocaleString();
          }
          return label;
        })
        .parentId(d => { return d.isRoot ? null : 'root'; })
        ([rootNode, ...this.results])
        .sum(d => d.value);

      this.data = this.treemap(root);

      this.setColors();

      this.transform = `translate(${ this.dims.xOffset } , ${ this.margin[0] })`;
    });
  }

  getDomain(): any[] {
    return this.results.map(d => d.name);
  }

  onClick(data): void {
    this.select.emit(data);
  }

  setColors(): void {
    this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
  }

}
