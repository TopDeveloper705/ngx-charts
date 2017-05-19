import { EventEmitter, OnChanges, TemplateRef } from '@angular/core';
export declare class SeriesVerticalComponent implements OnChanges {
    dims: any;
    type: string;
    series: any;
    xScale: any;
    yScale: any;
    colors: any;
    gradient: boolean;
    activeEntries: any[];
    seriesName: string;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    select: EventEmitter<{}>;
    activate: EventEmitter<{}>;
    deactivate: EventEmitter<{}>;
    bars: any;
    x: any;
    y: any;
    ngOnChanges(changes: any): void;
    update(): void;
    isActive(entry: any): boolean;
    onClick(data: any): void;
    trackBy(index: any, bar: any): string;
}
