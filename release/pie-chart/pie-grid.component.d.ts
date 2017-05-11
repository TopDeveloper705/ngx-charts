import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
export declare class PieGridComponent extends BaseChartComponent {
    tooltipDisabled: boolean;
    tooltipText: (o: any) => any;
    dims: ViewDimensions;
    data: any[];
    transform: string;
    series: any[];
    domain: any[];
    colorScale: ColorHelper;
    margin: number[];
    update(): void;
    defaultTooltipText({data}: {
        data: any;
    }): string;
    getDomain(): any[];
    getSeries(): any[];
    getTotal(): any;
    onClick(data: any): void;
    setColors(): void;
}
