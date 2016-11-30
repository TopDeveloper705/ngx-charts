import { EventEmitter, ElementRef, OnChanges } from '@angular/core';
export declare class PieArcComponent implements OnChanges {
    fill: any;
    startAngle: number;
    endAngle: number;
    innerRadius: any;
    outerRadius: any;
    cornerRadius: number;
    value: any;
    max: any;
    data: any;
    explodeSlices: boolean;
    gradient: boolean;
    animate: boolean;
    pointerEvents: boolean;
    clickHandler: EventEmitter<{}>;
    element: HTMLElement;
    path: any;
    startOpacity: number;
    radialGradientId: string;
    linearGradientId: string;
    gradientFill: string;
    initialized: boolean;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    update(): void;
    calculateArc(): any;
    loadAnimation(): void;
    updateAnimation(): void;
    onClick(): void;
}
