import { ElementRef, AfterViewInit } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../utils/color-sets';
export declare class LinearGaugeComponent extends BaseChartComponent implements AfterViewInit {
    min: number;
    max: number;
    value: number;
    units: string;
    previousValue: any;
    valueTextEl: ElementRef;
    unitsTextEl: ElementRef;
    dims: ViewDimensions;
    valueDomain: any;
    valueScale: any;
    colors: ColorHelper;
    transform: string;
    margin: any[];
    transformLine: string;
    valueResizeScale: number;
    unitsResizeScale: number;
    valueTextTransform: string;
    valueTranslate: string;
    unitsTextTransform: string;
    unitsTranslate: string;
    displayValue: string;
    hasPreviousValue: boolean;
    ngAfterViewInit(): void;
    update(): void;
    getValueDomain(): any[];
    getValueScale(): any;
    getDisplayValue(): string;
    scaleText(element: any): void;
    onClick(): void;
    setColors(): void;
}
