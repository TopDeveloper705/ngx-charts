import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { LinearGaugeComponent } from './linear-gauge.component';
import { GaugeComponent } from './gauge.component';
import { GaugeArcComponent } from './gauge-arc.component';
import { GaugeAxisComponent } from './gauge-axis.component';
import { PieChartModule } from '../pie-chart/pie-chart.module';
import { BarChartModule } from '../bar-chart/bar-chart.module';
export { GaugeComponent, GaugeArcComponent, GaugeAxisComponent, LinearGaugeComponent };
var GaugeModule = (function () {
    function GaugeModule() {
    }
    return GaugeModule;
}());
export { GaugeModule };
GaugeModule.decorators = [
    { type: NgModule, args: [{
                imports: [ChartCommonModule, PieChartModule, BarChartModule],
                declarations: [
                    LinearGaugeComponent,
                    GaugeComponent,
                    GaugeArcComponent,
                    GaugeAxisComponent
                ],
                exports: [
                    LinearGaugeComponent,
                    GaugeComponent,
                    GaugeArcComponent,
                    GaugeAxisComponent
                ]
            },] },
];
/** @nocollapse */
GaugeModule.ctorParameters = function () { return []; };
//# sourceMappingURL=gauge.module.js.map