/// <reference types="core-js" />
import { EventEmitter, OnChanges } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { BaseChart } from '../common/base-chart.component';
export declare class LineChart extends BaseChart implements OnChanges {
    dims: ViewDimensions;
    xSet: any;
    xDomain: any;
    yDomain: any;
    seriesDomain: any;
    yScale: any;
    xScale: any;
    colors: Function;
    scaleType: string;
    transform: string;
    clipPath: string;
    clipPathId: string;
    series: any;
    areaPath: any;
    margin: number[];
    hoveredVertical: any;
    view: any;
    results: any;
    scheme: any;
    legend: any;
    customColors: any;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    autoScale: any;
    timeline: any;
    gradient: boolean;
    clickHandler: EventEmitter<{}>;
    ngOnChanges(): void;
    update(): void;
    getXDomain(): any[];
    getYDomain(): number[];
    getSeriesDomain(): any;
    getXScale(): any;
    getYScale(): any;
    getScaleType(values: any): string;
    isDate(value: any): boolean;
    updateDomain(domain: any): void;
    updateHoveredVertical(item: any): void;
    hideCircles(): void;
    click(data: any, series: any): void;
    setColors(): void;
}
