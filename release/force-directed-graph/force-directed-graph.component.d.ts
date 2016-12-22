import { ElementRef, TemplateRef, EventEmitter } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../utils/color-sets';
export declare class ForceDirectedGraphComponent extends BaseChartComponent {
    force: any;
    forceLink: any;
    groupResultsBy: (node: any) => string;
    legend: boolean;
    nodes: any[];
    links: {
        source: any;
        target: any;
    }[];
    activeEntries: any[];
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    linkTemplate: TemplateRef<any>;
    nodeTemplate: TemplateRef<any>;
    chart: ElementRef;
    colors: ColorHelper;
    dims: ViewDimensions;
    draggingNode: any;
    draggingStart: {
        x: number;
        y: number;
    };
    margin: number[];
    results: any[];
    seriesDomain: any;
    transform: string;
    legendOptions: any;
    update(): void;
    onClick(data: any, node: any): void;
    onActivate(event: any): void;
    onDeactivate(event: any): void;
    getSeriesDomain(): any[];
    trackLinkBy(index: any, link: any): any;
    trackNodeBy(index: any, node: any): any;
    setColors(): void;
    getLegendOptions(): {
        scaleType: string;
        domain: any;
        colors: ColorHelper;
    };
    onDragStart(node: any, $event: MouseEvent): void;
    onDrag($event: MouseEvent): void;
    onDragEnd(node: any, $event: MouseEvent): void;
}
