var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
export var AdvancedPieChartComponent = (function (_super) {
    __extends(AdvancedPieChartComponent, _super);
    function AdvancedPieChartComponent() {
        _super.apply(this, arguments);
        this.activeEntries = [];
        this.tooltipDisabled = false;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [20, 20, 20, 20];
    }
    AdvancedPieChartComponent.prototype.update = function () {
        var _this = this;
        _super.prototype.update.call(this);
        this.zone.run(function () {
            _this.dims = calculateViewDimensions({
                width: _this.width * 4 / 12.0,
                height: _this.height,
                margins: _this.margin
            });
            _this.domain = _this.getDomain();
            _this.setColors();
            var xOffset = _this.dims.width / 2;
            var yOffset = _this.margin[0] + _this.dims.height / 2;
            _this.legendWidth = _this.width - _this.dims.width - _this.margin[1];
            _this.outerRadius = Math.min(_this.dims.width, _this.dims.height) / 2.5;
            _this.innerRadius = _this.outerRadius * 0.75;
            _this.transform = "translate(" + xOffset + " , " + yOffset + ")";
        });
    };
    AdvancedPieChartComponent.prototype.getDomain = function () {
        return this.results.map(function (d) { return d.name; });
    };
    AdvancedPieChartComponent.prototype.onClick = function (data) {
        this.select.emit(data);
    };
    AdvancedPieChartComponent.prototype.setColors = function () {
        this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
    };
    AdvancedPieChartComponent.prototype.onActivate = function (event) {
        if (this.activeEntries.indexOf(event) > -1)
            return;
        this.activeEntries = [event].concat(this.activeEntries);
        this.activate.emit({ value: event, entries: this.activeEntries });
    };
    AdvancedPieChartComponent.prototype.onDeactivate = function (event) {
        var idx = this.activeEntries.indexOf(event);
        this.activeEntries.splice(idx, 1);
        this.activeEntries = this.activeEntries.slice();
        this.deactivate.emit({ value: event, entries: this.activeEntries });
    };
    AdvancedPieChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-charts-advanced-pie-chart',
                    template: "\n    <div\n      [style.width.px]=\"width\"\n      [style.height.px]=\"height\">\n      <div class=\"advanced-pie chart\"\n        [style.width.px]=\"dims.width\"\n        [style.height.px]=\"dims.height\">\n        <ngx-charts-chart\n          [view]=\"[width, height]\"\n          [showLegend]=\"false\">\n          <svg:g\n            [attr.transform]=\"transform\"\n            class=\"pie chart\">\n            <svg:g ngx-charts-pie-series\n              [colors]=\"colors\"\n              [showLabels]=\"labels\"\n              [series]=\"results\"\n              [innerRadius]=\"innerRadius\"\n              [activeEntries]=\"activeEntries\"\n              [outerRadius]=\"outerRadius\"\n              [gradient]=\"gradient\"\n              [tooltipDisabled]=\"tooltipDisabled\"\n              (select)=\"onClick($event)\">\n            </svg:g>\n          </svg:g>\n        </ngx-charts-chart>\n      </div>\n      <div\n        class=\"advanced-pie-legend-wrapper\"\n        [style.width.px]=\"width - dims.width\"\n        [style.height.px]=\"height\">\n        <ngx-charts-advanced-legend\n          [data]=\"results\"\n          [colors]=\"colors\"\n          [width]=\"width - dims.width - margin[1]\"\n          (select)=\"onClick($event)\"\n          (activate)=\"onActivate($event)\"\n          (deactivate)=\"onDeactivate($event)\">\n        </ngx-charts-advanced-legend>\n      </div>\n    </div>\n  ",
                    styleUrls: [
                        '../common/base-chart.component.css',
                        './advanced-pie-chart.component.css'
                    ],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    AdvancedPieChartComponent.ctorParameters = function () { return []; };
    AdvancedPieChartComponent.propDecorators = {
        'gradient': [{ type: Input },],
        'activeEntries': [{ type: Input },],
        'tooltipDisabled': [{ type: Input },],
        'activate': [{ type: Output },],
        'deactivate': [{ type: Output },],
    };
    return AdvancedPieChartComponent;
}(BaseChartComponent));
//# sourceMappingURL=advanced-pie-chart.component.js.map