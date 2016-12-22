import { OnChanges, ViewContainerRef, EventEmitter, SimpleChanges } from '@angular/core';
import { InjectionService } from '../../services';
export declare class ChartComponent implements OnChanges {
    private vcr;
    private injectionService;
    view: any;
    showLegend: boolean;
    legendOptions: any;
    data: any;
    legendData: any;
    legendType: any;
    legendTitle: string;
    colors: any;
    activeEntries: any[];
    legendLabelClick: EventEmitter<any>;
    legendLabelActivate: EventEmitter<any>;
    legendLabelDeactivate: EventEmitter<any>;
    chartWidth: any;
    title: any;
    legendWidth: any;
    constructor(vcr: ViewContainerRef, injectionService: InjectionService);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getLegendType(): string;
}
