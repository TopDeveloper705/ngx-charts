
import { EventEmitter, OnChanges, OnDestroy, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { BaseChart } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
export declare class HeatMap extends BaseChart implements OnChanges, OnDestroy, AfterViewInit {
    private element;
    dims: ViewDimensions;
    xDomain: any[];
    yDomain: any[];
    valueDomain: any[];
    xScale: any;
    yScale: any;
    color: any;
    colors: Function;
    colorScale: any;
    transform: string;
    rects: any[];
    margin: number[];
    view: any;
    results: any;
    scheme: any;
    customColors: any;
    legend: any;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    gradient: boolean;
    clickHandler: EventEmitter<{}>;
    constructor(element: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    update(): void;
    getXDomain(): any[];
    getYDomain(): any[];
    getValueDomain(): number[];
    getXScale(): any;
    getYScale(): any;
    getRects(): any[];
    click(data: any): void;
    setColors(): void;
}
