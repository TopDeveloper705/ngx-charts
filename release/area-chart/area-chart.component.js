"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var view_dimensions_helper_1 = require('../common/view-dimensions.helper');
var color_sets_1 = require('../utils/color-sets');
var base_chart_component_1 = require('../common/base-chart.component');
var moment = require('moment');
var id_1 = require("../utils/id");
var d3_1 = require('../d3');
var AreaChartComponent = (function (_super) {
    __extends(AreaChartComponent, _super);
    function AreaChartComponent() {
        _super.apply(this, arguments);
        this.showGridLines = true;
        this.curve = d3_1.default.shape.curveLinear;
        this.activeEntries = [];
        this.activate = new core_1.EventEmitter();
        this.deactivate = new core_1.EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.timelineHeight = 50;
        this.timelinePadding = 10;
    }
    AreaChartComponent.prototype.update = function () {
        var _this = this;
        _super.prototype.update.call(this);
        this.zone.run(function () {
            _this.dims = view_dimensions_helper_1.calculateViewDimensions({
                width: _this.width,
                height: _this.height,
                margins: _this.margin,
                showXAxis: _this.xAxis,
                showYAxis: _this.yAxis,
                xAxisHeight: _this.xAxisHeight,
                yAxisWidth: _this.yAxisWidth,
                showXLabel: _this.showXAxisLabel,
                showYLabel: _this.showYAxisLabel,
                showLegend: _this.legend,
                legendType: _this.schemeType
            });
            if (_this.timeline) {
                _this.dims.height -= (_this.timelineHeight + _this.margin[2] + _this.timelinePadding);
            }
            _this.xDomain = _this.getXDomain();
            if (_this.filteredDomain) {
                _this.xDomain = _this.filteredDomain;
            }
            _this.yDomain = _this.getYDomain();
            _this.seriesDomain = _this.getSeriesDomain();
            _this.xScale = _this.getXScale(_this.xDomain, _this.dims.width);
            _this.yScale = _this.getYScale(_this.yDomain, _this.dims.height);
            _this.updateTimeline();
            _this.setColors();
            _this.legendOptions = _this.getLegendOptions();
            _this.transform = "translate(" + _this.dims.xOffset + ", " + _this.margin[0] + ")";
            var pageUrl = window.location.href;
            _this.clipPathId = 'clip' + id_1.id().toString();
            _this.clipPath = "url(" + pageUrl + "#" + _this.clipPathId + ")";
        });
    };
    AreaChartComponent.prototype.updateTimeline = function () {
        if (this.timeline) {
            this.timelineWidth = this.width;
            if (this.legend) {
                this.timelineWidth = this.dims.width;
            }
            this.timelineXDomain = this.getXDomain();
            this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
            this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
            this.timelineTransform = "translate(" + this.dims.xOffset + ", " + -this.margin[2] + ")";
        }
    };
    AreaChartComponent.prototype.getXDomain = function () {
        var values = [];
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (!values.includes(d.name)) {
                    values.push(d.name);
                }
            }
        }
        this.scaleType = this.getScaleType(values);
        var domain = [];
        if (this.scaleType === 'time') {
            values = values.map(function (v) { return moment(v).toDate(); });
            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            domain = [min, max];
        }
        else if (this.scaleType === 'linear') {
            values = values.map(function (v) { return Number(v); });
            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            domain = [min, max];
        }
        else {
            domain = values;
        }
        this.xSet = values;
        return domain;
    };
    AreaChartComponent.prototype.getYDomain = function () {
        var domain = [];
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (!domain.includes(d.value)) {
                    domain.push(d.value);
                }
            }
        }
        var min = Math.min.apply(Math, domain);
        var max = Math.max.apply(Math, domain);
        if (!this.autoScale) {
            min = Math.min(0, min);
        }
        return [min, max];
    };
    AreaChartComponent.prototype.getSeriesDomain = function () {
        return this.results.map(function (d) { return d.name; });
    };
    AreaChartComponent.prototype.getXScale = function (domain, width) {
        var scale;
        if (this.scaleType === 'time') {
            scale = d3_1.default.scaleTime()
                .range([0, width])
                .domain(domain);
        }
        else if (this.scaleType === 'linear') {
            scale = d3_1.default.scaleLinear()
                .range([0, width])
                .domain(domain);
        }
        else if (this.scaleType === 'ordinal') {
            scale = d3_1.default.scalePoint()
                .range([0, width])
                .padding(0.1)
                .domain(domain);
        }
        return scale;
    };
    AreaChartComponent.prototype.getYScale = function (domain, height) {
        return d3_1.default.scaleLinear()
            .range([height, 0])
            .domain(domain);
    };
    AreaChartComponent.prototype.getScaleType = function (values) {
        var date = true;
        var number = true;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            if (!this.isDate(value)) {
                date = false;
            }
            if (typeof value !== 'number') {
                number = false;
            }
        }
        if (date) {
            return 'time';
        }
        if (number) {
            return 'linear';
        }
        return 'ordinal';
    };
    AreaChartComponent.prototype.isDate = function (value) {
        if (value instanceof Date) {
            return true;
        }
        return false;
    };
    AreaChartComponent.prototype.updateDomain = function (domain) {
        this.filteredDomain = domain;
        this.xDomain = this.filteredDomain;
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
    };
    AreaChartComponent.prototype.updateHoveredVertical = function (item) {
        this.hoveredVertical = item.value;
    };
    AreaChartComponent.prototype.hideCircles = function () {
        this.hoveredVertical = null;
    };
    AreaChartComponent.prototype.onClick = function (data, series) {
        if (series) {
            data.series = series.name;
        }
        this.select.emit(data);
    };
    AreaChartComponent.prototype.trackBy = function (index, item) {
        return item.name;
    };
    AreaChartComponent.prototype.setColors = function () {
        var domain;
        if (this.schemeType === 'ordinal') {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new color_sets_1.ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    };
    AreaChartComponent.prototype.getLegendOptions = function () {
        var opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: []
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors;
        }
        else {
            opts.domain = this.yDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    };
    AreaChartComponent.prototype.updateYAxisWidth = function (_a) {
        var width = _a.width;
        this.yAxisWidth = width;
        this.update();
    };
    AreaChartComponent.prototype.updateXAxisHeight = function (_a) {
        var height = _a.height;
        this.xAxisHeight = height;
        this.update();
    };
    AreaChartComponent.prototype.onActivate = function (item) {
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item].concat(this.activeEntries);
        this.activate.emit({ value: item, entries: this.activeEntries });
    };
    AreaChartComponent.prototype.onDeactivate = function (item) {
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = this.activeEntries.slice();
        this.deactivate.emit({ value: event, entries: this.activeEntries });
    };
    AreaChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ngx-charts-area-chart',
                    template: "\n    <ngx-charts-chart\n      [view]=\"[width, height]\"\n      [showLegend]=\"legend\"\n      [legendOptions]=\"legendOptions\"\n      [activeEntries]=\"activeEntries\"\n      (legendLabelClick)=\"onClick($event)\"\n      (legendLabelActivate)=\"onActivate($event)\"\n      (legendLabelDeactivate)=\"onDeactivate($event)\">\n      <svg:defs>\n        <svg:clipPath [attr.id]=\"clipPathId\">\n          <svg:rect\n            [attr.width]=\"dims.width + 10\"\n            [attr.height]=\"dims.height + 10\"\n            [attr.transform]=\"'translate(-5, -5)'\"/>\n        </svg:clipPath>\n      </svg:defs>\n      <svg:g [attr.transform]=\"transform\" class=\"area-chart chart\">\n        <svg:g ngx-charts-x-axis\n          *ngIf=\"xAxis\"\n          [xScale]=\"xScale\"\n          [dims]=\"dims\"\n          [showGridLines]=\"showGridLines\"\n          [showLabel]=\"showXAxisLabel\"\n          [labelText]=\"xAxisLabel\"\n          (dimensionsChanged)=\"updateXAxisHeight($event)\">\n        </svg:g>\n        <svg:g ngx-charts-y-axis\n          *ngIf=\"yAxis\"\n          [yScale]=\"yScale\"\n          [dims]=\"dims\"\n          [showGridLines]=\"showGridLines\"\n          [showLabel]=\"showYAxisLabel\"\n          [labelText]=\"yAxisLabel\"\n          (dimensionsChanged)=\"updateYAxisWidth($event)\">\n        </svg:g>\n        <svg:g [attr.clip-path]=\"clipPath\">\n          <svg:g *ngFor=\"let series of results; trackBy:trackBy\">\n            <svg:g ngx-charts-area-series\n              [xScale]=\"xScale\"\n              [yScale]=\"yScale\"\n              [colors]=\"colors\"\n              [data]=\"series\"\n              [activeEntries]=\"activeEntries\"\n              [scaleType]=\"scaleType\"\n              [gradient]=\"gradient\"\n              [curve]=\"curve\"\n            />\n          </svg:g>\n          <svg:g ngx-charts-area-tooltip\n            [xSet]=\"xSet\"\n            [xScale]=\"xScale\"\n            [yScale]=\"yScale\"\n            [results]=\"results\"\n            [height]=\"dims.height\"\n            [colors]=\"colors\"\n            (hover)=\"updateHoveredVertical($event)\"\n          />\n          <svg:g *ngFor=\"let series of results\">\n            <svg:g ngx-charts-circle-ceries\n              [xScale]=\"xScale\"\n              [yScale]=\"yScale\"\n              [colors]=\"colors\"\n              [activeEntries]=\"activeEntries\"\n              [data]=\"series\"\n              [scaleType]=\"scaleType\"\n              [visibleValue]=\"hoveredVertical\"\n              (select)=\"onClick($event, series)\"\n              (activate)=\"onActivate($event)\"\n              (deactivate)=\"onDeactivate($event)\"\n            />\n          </svg:g>\n        </svg:g>\n      </svg:g>\n      <svg:g ngx-charts-timeline\n        *ngIf=\"timeline && scaleType === 'time'\"\n        [attr.transform]=\"timelineTransform\"\n        [results]=\"results\"\n        [view]=\"[timelineWidth, height]\"\n        [height]=\"timelineHeight\"\n        [scheme]=\"scheme\"\n        [customColors]=\"customColors\"\n        [legend]=\"legend\"\n        [scaleType]=\"scaleType\"\n        (onDomainChange)=\"updateDomain($event)\">\n        <svg:g *ngFor=\"let series of results; trackBy:trackBy\">\n          <svg:g ngx-charts-area-series\n            [xScale]=\"timelineXScale\"\n            [yScale]=\"timelineYScale\"\n            [colors]=\"colors\"\n            [data]=\"series\"\n            [scaleType]=\"scaleType\"\n            [gradient]=\"gradient\"\n            [curve]=\"curve\"\n          />\n        </svg:g>\n      </svg:g>\n    </ngx-charts-chart>\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    AreaChartComponent.ctorParameters = function () { return []; };
    AreaChartComponent.propDecorators = {
        'legend': [{ type: core_1.Input },],
        'state': [{ type: core_1.Input },],
        'xAxis': [{ type: core_1.Input },],
        'yAxis': [{ type: core_1.Input },],
        'autoScale': [{ type: core_1.Input },],
        'showXAxisLabel': [{ type: core_1.Input },],
        'showYAxisLabel': [{ type: core_1.Input },],
        'xAxisLabel': [{ type: core_1.Input },],
        'yAxisLabel': [{ type: core_1.Input },],
        'timeline': [{ type: core_1.Input },],
        'gradient': [{ type: core_1.Input },],
        'showGridLines': [{ type: core_1.Input },],
        'curve': [{ type: core_1.Input },],
        'activeEntries': [{ type: core_1.Input },],
        'schemeType': [{ type: core_1.Input },],
        'activate': [{ type: core_1.Output },],
        'deactivate': [{ type: core_1.Output },],
        'hideCircles': [{ type: core_1.HostListener, args: ['mouseleave',] },],
    };
    return AreaChartComponent;
}(base_chart_component_1.BaseChartComponent));
exports.AreaChartComponent = AreaChartComponent;
//# sourceMappingURL=area-chart.component.js.map