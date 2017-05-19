import { EventEmitter, OnChanges, SimpleChanges, Renderer, TemplateRef } from '@angular/core';
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
    showPercentage: boolean;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    hover: EventEmitter<{}>;
    tooltips: any;
    constructor(renderer: Renderer);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getTooltipAreas(): any[];
    getValues(xVal: any): any[];
    getUniqueValues(array: any): any[];
    showTooltip(index: any): void;
    hideTooltip(index: any): void;
    getToolTipText(tooltipItem: any): string;
}
