import { EventEmitter, ElementRef, OnChanges, ChangeDetectorRef, NgZone } from '@angular/core';
export declare class Card implements OnChanges {
    private cd;
    private zone;
    color: any;
    x: any;
    y: any;
    width: any;
    height: any;
    label: any;
    data: any;
    clickHandler: EventEmitter<{}>;
    textEl: ElementRef;
    element: HTMLElement;
    transform: string;
    trimmedLabel: string;
    value: string;
    cardWidth: number;
    cardHeight: number;
    textWidth: number;
    resizeScale: number;
    textFontSize: number;
    textTransform: string;
    initialized: boolean;
    constructor(element: ElementRef, cd: ChangeDetectorRef, zone: NgZone);
    ngOnChanges(): void;
    update(): void;
    countUp(current: any, max: any, step: any): void;
    scaleText(): void;
    onClick(): void;
}
