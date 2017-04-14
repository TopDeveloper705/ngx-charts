import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { CardComponent } from './card.component';
import { CardSeriesComponent } from './card-series.component';
import { NumberCardComponent } from './number-card.component';
export { CardComponent, CardSeriesComponent, NumberCardComponent };
var NumberCardModule = (function () {
    function NumberCardModule() {
    }
    return NumberCardModule;
}());
export { NumberCardModule };
NumberCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [ChartCommonModule],
                declarations: [
                    CardComponent,
                    CardSeriesComponent,
                    NumberCardComponent
                ],
                exports: [
                    CardComponent,
                    CardSeriesComponent,
                    NumberCardComponent
                ]
            },] },
];
/** @nocollapse */
NumberCardModule.ctorParameters = function () { return []; };
//# sourceMappingURL=number-card.module.js.map