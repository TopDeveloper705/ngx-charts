import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ViewChildren,
  SimpleChanges,
  Renderer,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'g[areaTooltip]',
  template: `
    <svg:g
      #tooltips
      *ngFor="let tooltipArea of tooltipAreas; let i = index">
      <svg:rect
        class="tooltip-area"
        [attr.x]="tooltipArea.x0"
        y="0"
        [attr.width]="tooltipArea.width"
        [attr.height]="height"
        style="fill: rgb(255, 0, 0); opacity: 0; cursor: 'auto';"
        (mouseenter)="showTooltip(i)"
        (mouseleave)="hideTooltip(i)"
      />
      <xhtml:template #tooltipTemplate>
        <xhtml:div class="area-tooltip-container">
          <xhtml:div
            *ngFor="let tooltipItem of tooltipArea.values"
            class="tooltip-item">
            <span
              class="tooltip-item-color"
              [style.background-color]="tooltipItem.color">
            </span>
            {{tooltipItem.series}}: {{tooltipItem.value.toLocaleString()}}
          </xhtml:div>
        </xhtml:div>
      </xhtml:template>
      <svg:rect
        class="tooltip-anchor"
        [attr.x]="tooltipArea.tooltipAnchor"
        y="0"
        [attr.width]="1"
        [attr.height]="height"
        style="fill: rgb(255, 255, 255);"
        [style.opacity]="anchorOpacity[i]"
        [style.pointer-events]="'none'"
        swui-tooltip
        [tooltipPlacement]="'right'"
        [tooltipType]="'tooltip'"
        [tooltipSpacing]="5"
        [tooltipTemplate]="tooltipTemplate"
      />
    </svg:g>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaTooltip implements OnChanges {
  tooltipAreas: any[];
  anchorOpacity: number[] = new Array();

  @Input() xSet;
  @Input() xScale;
  @Input() yScale;
  @Input() results;
  @Input() height;
  @Input() colors;
  @Input() showPercentage: boolean = false;

  @Output() hover = new EventEmitter();

  @ViewChildren('tooltips') tooltips;

  constructor(private renderer:Renderer) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  update(): void {
    this.tooltipAreas = this.getTooltipAreas();
  }

  getTooltipAreas(): any[] {
    let uniqueSet = this.getUniqueValues(this.xSet);

    uniqueSet = uniqueSet.sort((a, b) => {
      return this.xScale(a) - this.xScale(b);
    });

    let results = [];
    for (let i = 0; i < uniqueSet.length; i++) {
      let val = uniqueSet[i];
      let ob: any = {};
      ob.tooltipAnchor = this.xScale(val);

      if (i === 0) {
        ob.x0 = this.xScale(val);
      } else {
        ob.x0 = (this.xScale(uniqueSet[i-1]) + this.xScale(uniqueSet[i])) / 2;
      }

      if (i === uniqueSet.length - 1) {
        ob.x1 = this.xScale(uniqueSet[i]);
      } else {
        ob.x1 = (this.xScale(uniqueSet[i]) + this.xScale(uniqueSet[i+1])) / 2;
      }

      ob.width = ob.x1 - ob.x0;
      ob.value = val;
      ob.values = this.getValues(val);
      results.push(ob);

      this.anchorOpacity[i] = 0;
    }

    return results;
  }

  getValues(xVal): any[] {
    let results = [];

    for (let group of this.results) {
      let item = group.series.find(d => d.name.toString() === xVal.toString());
      let groupName = group.name;
      if (groupName instanceof Date) {
        groupName = groupName.toLocaleDateString();
      }

      if (item) {
        let label = item.name;
        if (label instanceof Date) {
          label = label.toLocaleDateString();
        }
        let val = item.value;
        if (this.showPercentage) {
          val = (item.d1 - item.d0).toFixed(2) + '%';
        }
        results.push({
          value: val,
          name: label,
          series: groupName,
          color: this.colors(group.name)
        });
      }
    }

    return results;
  }

  getUniqueValues(array): any[] {
    let results = [];

    for (let i = 0; i < array.length; i++) {
      let val = array[i];

      let exists = results.find(v => {
        return v.toString() === val.toString();
      });

      if (!exists) {
        results.push(val);
      }
    }

    return results;
  }

  showTooltip(index): void {
    let tooltipAnchor = this.tooltips.toArray()[index].nativeElement.children[1];
    let event = new MouseEvent('mouseenter', {bubbles: false});
    this.renderer.invokeElementMethod(tooltipAnchor, 'dispatchEvent', [event]);
    this.anchorOpacity[index] = 0.7;
    this.hover.emit(this.tooltipAreas[index]);
  }

  hideTooltip(index): void {
    let tooltipAnchor = this.tooltips.toArray()[index].nativeElement.children[1];
    let event = new MouseEvent('mouseleave', {bubbles: false});
    this.renderer.invokeElementMethod(tooltipAnchor, 'dispatchEvent', [event]);
    this.anchorOpacity[index] = 0;
  }

}
