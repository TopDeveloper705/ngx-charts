import { OnChanges, SimpleChanges } from '@angular/core';
export declare class SvgRadialGradientComponent implements OnChanges {
    color: any;
    name: any;
    startOpacity: any;
    endOpacity: number;
    cx: number;
    cy: number;
    stops: any[];
    r: string;
    ngOnChanges(changes: SimpleChanges): void;
}
