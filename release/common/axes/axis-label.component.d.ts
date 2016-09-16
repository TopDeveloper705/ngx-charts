import { ElementRef, OnChanges } from '@angular/core';
export declare class AxisLabel implements OnChanges {
    orient: any;
    label: any;
    offset: any;
    width: any;
    height: any;
    x: any;
    y: any;
    transform: any;
    strokeWidth: any;
    textAnchor: any;
    element: ElementRef;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    update(): void;
}
