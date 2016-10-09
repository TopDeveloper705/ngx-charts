import { EventEmitter, OnChanges, Renderer } from '@angular/core';
export declare class AreaTooltip implements OnChanges {
    private renderer;
    tooltipAreas: any[];
    anchorOpacity: number[];
    xSet: any;
    xScale: any;
    yScale: any;
    results: any;
    height: any;
    colors: any;
    hover: EventEmitter<{}>;
    tooltips: any;
    constructor(renderer: Renderer);
    ngOnChanges(): void;
    update(): void;
    getTooltipAreas(): any[];
    getValues(xVal: any): any[];
    getUniqueValues(array: any): any[];
    showTooltip(index: any): void;
    hideTooltip(index: any): void;
}
