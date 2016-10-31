
import { EventEmitter, OnChanges, OnDestroy, AfterViewInit, NgZone, ElementRef } from '@angular/core';
import { BaseChart } from '../common/base-chart.component';
export declare class PieChart extends BaseChart implements OnChanges, OnDestroy, AfterViewInit {
    private element;
    outerRadius: number;
    innerRadius: number;
    data: any;
    colors: Function;
    domain: any;
    view: any;
    results: any;
    margin: number[];
    scheme: any;
    customColors: any;
    labels: boolean;
    legend: boolean;
    explodeSlices: boolean;
    doughnut: boolean;
    gradient: boolean;
    clickHandler: EventEmitter<{}>;
    translation: string;
    constructor(element: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    update(): void;
    getDomain(): any;
    click(data: any): void;
    setColors(): void;
}
