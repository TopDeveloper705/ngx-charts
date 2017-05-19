import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { area, line } from 'd3-shape';
import { id } from '../utils/id';
import { sortLinear, sortByTime, sortByDomain } from '../utils/sort';
var LineSeriesComponent = (function () {
    function LineSeriesComponent(location) {
        this.location = location;
    }
    LineSeriesComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    LineSeriesComponent.prototype.update = function () {
        this.updateGradients();
        var data = this.sortData(this.data.series);
        var line = this.getLineGenerator();
        this.path = line(data) || '';
        var area = this.getAreaGenerator();
        this.areaPath = area(data) || '';
        if (this.hasRange) {
            var range = this.getRangeGenerator();
            this.outerPath = range(data) || '';
        }
        this.stroke = this.hasGradient ? this.gradientUrl : this.colors.getColor(this.data.name);
        var values = this.data.series.map(function (d) { return d.value; });
        var max = Math.max.apply(Math, values);
        var min = Math.min.apply(Math, values);
        if (max === min) {
            this.stroke = this.colors.getColor(max);
        }
    };
    LineSeriesComponent.prototype.getLineGenerator = function () {
        var _this = this;
        return line()
            .x(function (d) {
            var label = d.name;
            var value;
            if (_this.scaleType === 'time') {
                value = _this.xScale(label);
            }
            else if (_this.scaleType === 'linear') {
                value = _this.xScale(Number(label));
            }
            else {
                value = _this.xScale(label);
            }
            return value;
        })
            .y(function (d) { return _this.yScale(d.value); })
            .curve(this.curve);
    };
    LineSeriesComponent.prototype.getRangeGenerator = function () {
        var _this = this;
        return area()
            .x(function (d) {
            var label = d.name;
            var value;
            if (_this.scaleType === 'time') {
                value = _this.xScale(label);
            }
            else if (_this.scaleType === 'linear') {
                value = _this.xScale(Number(label));
            }
            else {
                value = _this.xScale(label);
            }
            return value;
        })
            .y0(function (d) { return _this.yScale(d.min ? d.min : d.value); })
            .y1(function (d) { return _this.yScale(d.max ? d.max : d.value); })
            .curve(this.curve);
    };
    LineSeriesComponent.prototype.getAreaGenerator = function () {
        var _this = this;
        var xProperty = function (d) {
            var label = d.name;
            return _this.xScale(label);
        };
        return area()
            .x(xProperty)
            .y0(function () { return _this.yScale.range()[0]; })
            .y1(function (d) { return _this.yScale(d.value); })
            .curve(this.curve);
    };
    LineSeriesComponent.prototype.sortData = function (data) {
        if (this.scaleType === 'linear') {
            data = sortLinear(data, 'name');
        }
        else if (this.scaleType === 'time') {
            data = sortByTime(data, 'name');
        }
        else {
            data = sortByDomain(data, 'name', 'asc', this.xScale.domain());
        }
        return data;
    };
    LineSeriesComponent.prototype.updateGradients = function () {
        if (this.colors.scaleType === 'linear') {
            this.hasGradient = true;
            var pageUrl = this.location instanceof PathLocationStrategy
                ? this.location.path()
                : '';
            this.gradientId = 'grad' + id().toString();
            this.gradientUrl = "url(" + pageUrl + "#" + this.gradientId + ")";
            var values = this.data.series.map(function (d) { return d.value; });
            var max = Math.max.apply(Math, values);
            var min = Math.min.apply(Math, values);
            this.gradientStops = this.colors.getLinearGradientStops(max, min);
            this.areaGradientStops = this.colors.getLinearGradientStops(max);
        }
        else {
            this.hasGradient = false;
            this.gradientStops = undefined;
            this.areaGradientStops = undefined;
        }
    };
    LineSeriesComponent.prototype.isActive = function (entry) {
        if (!this.activeEntries)
            return false;
        var item = this.activeEntries.find(function (d) {
            return entry.name === d.name;
        });
        return item !== undefined;
    };
    LineSeriesComponent.prototype.isInactive = function (entry) {
        if (!this.activeEntries || this.activeEntries.length === 0)
            return false;
        var item = this.activeEntries.find(function (d) {
            return entry.name === d.name;
        });
        return item === undefined;
    };
    return LineSeriesComponent;
}());
export { LineSeriesComponent };
LineSeriesComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[ngx-charts-line-series]',
                template: "\n    <svg:g>\n      <defs>\n        <svg:g ngx-charts-svg-linear-gradient *ngIf=\"hasGradient\"\n          orientation=\"vertical\"\n          [name]=\"gradientId\"\n          [stops]=\"gradientStops\"\n        />\n      </defs>\n      <svg:g ngx-charts-area\n        class=\"line-highlight\"\n        [data]=\"data\"\n        [path]=\"areaPath\"\n        [fill]=\"hasGradient ? gradientUrl : colors.getColor(data.name)\"\n        [opacity]=\"0.25\"\n        [startOpacity]=\"0\"\n        [gradient]=\"true\"\n        [stops]=\"areaGradientStops\"\n        [class.active]=\"isActive(data)\"\n        [class.inactive]=\"isInactive(data)\"\n      />\n      <svg:g ngx-charts-line\n        class=\"line-series\"\n        [data]=\"data\"\n        [path]=\"path\"\n        [stroke]=\"stroke\"\n        [class.active]=\"isActive(data)\"\n        [class.inactive]=\"isInactive(data)\"\n      />\n     <svg:g ngx-charts-area\n        *ngIf=\"hasRange\"\n        class=\"line-series-range\"\n        [data]=\"data\"\n        [path]=\"outerPath\"\n        [fill]=\"hasGradient ? gradientUrl : colors.getColor(data.name)\"\n        [class.active]=\"isActive(data)\"\n        [class.inactive]=\"isInactive(data)\"\n        [opacity]=\"rangeFillOpacity\"\n      />\n    </svg:g>\n  ",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
LineSeriesComponent.ctorParameters = function () { return [
    { type: LocationStrategy, },
]; };
LineSeriesComponent.propDecorators = {
    'data': [{ type: Input },],
    'xScale': [{ type: Input },],
    'yScale': [{ type: Input },],
    'colors': [{ type: Input },],
    'scaleType': [{ type: Input },],
    'curve': [{ type: Input },],
    'activeEntries': [{ type: Input },],
    'rangeFillOpacity': [{ type: Input },],
    'hasRange': [{ type: Input },],
};
//# sourceMappingURL=line-series.component.js.map