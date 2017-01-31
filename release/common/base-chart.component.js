"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/operator/debounceTime");
var utils_1 = require("../utils");
var BaseChartComponent = (function () {
    function BaseChartComponent(chartElement, zone, cd, location) {
        this.chartElement = chartElement;
        this.zone = zone;
        this.cd = cd;
        this.location = location;
        this.schemeType = 'ordinal';
        this.select = new core_1.EventEmitter();
    }
    BaseChartComponent.prototype.ngAfterViewInit = function () {
        this.bindWindowResizeEvent();
        // listen for visibility of the element for hidden by default scenario
        this.visibilityObserver = new utils_1.VisibilityObserver(this.chartElement, this.zone);
        this.visibilityObserver.visible.subscribe(this.update.bind(this));
    };
    BaseChartComponent.prototype.ngOnDestroy = function () {
        this.unbindEvents();
        this.visibilityObserver.visible.unsubscribe();
        this.visibilityObserver.destroy();
    };
    BaseChartComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    BaseChartComponent.prototype.update = function () {
        if (this.results) {
            this.results = this.cloneData(this.results);
        }
        if (this.view) {
            this.width = this.view[0];
            this.height = this.view[1];
        }
        else {
            var dims = this.getContainerDims();
            if (dims) {
                this.width = dims.width;
                this.height = dims.height;
            }
        }
        if (!this.width || !this.height) {
            this.width = this.height = 0;
        }
        if (this.cd) {
            this.cd.markForCheck();
        }
    };
    BaseChartComponent.prototype.getContainerDims = function () {
        var width;
        var height;
        var hostElem = this.chartElement.nativeElement;
        if (hostElem.parentNode !== null) {
            // Get the container dimensions
            var dims = hostElem.parentNode.getBoundingClientRect();
            width = dims.width;
            height = dims.height;
        }
        if (width && height) {
            return { width: width, height: height };
        }
        return null;
    };
    /**
     * Converts all date objects that appear as name
     * into formatted date strings
     */
    BaseChartComponent.prototype.formatDates = function () {
        for (var i = 0; i < this.results.length; i++) {
            var g = this.results[i];
            if (g.name instanceof Date) {
                g.name = g.name.toLocaleDateString();
            }
            if (g.series) {
                for (var j = 0; j < g.series.length; j++) {
                    var d = g.series[j];
                    if (d.name instanceof Date) {
                        d.name = d.name.toLocaleDateString();
                    }
                }
            }
        }
    };
    BaseChartComponent.prototype.unbindEvents = function () {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    };
    BaseChartComponent.prototype.bindWindowResizeEvent = function () {
        var _this = this;
        this.zone.run(function () {
            var source = Observable_1.Observable.fromEvent(window, 'resize', null, null);
            var subscription = source.debounceTime(200).subscribe(function (e) {
                _this.update();
                if (_this.cd) {
                    _this.cd.markForCheck();
                }
            });
            _this.resizeSubscription = subscription;
        });
    };
    /**
     * Clones the data into a new object
     *
     * @private
     * @param {any} data
     * @returns {*}
     *
     * @memberOf BaseChart
     */
    BaseChartComponent.prototype.cloneData = function (data) {
        var results = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            var copy = {
                name: item['name']
            };
            if (item['value'] !== undefined) {
                copy['value'] = item['value'];
            }
            if (item['series'] !== undefined) {
                copy['series'] = [];
                for (var _a = 0, _b = item['series']; _a < _b.length; _a++) {
                    var seriesItem = _b[_a];
                    var seriesItemCopy = Object.assign({}, seriesItem);
                    copy['series'].push(seriesItemCopy);
                }
            }
            results.push(copy);
        }
        return results;
    };
    return BaseChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaseChartComponent.prototype, "results", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BaseChartComponent.prototype, "view", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaseChartComponent.prototype, "scheme", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaseChartComponent.prototype, "schemeType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaseChartComponent.prototype, "customColors", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaseChartComponent.prototype, "select", void 0);
BaseChartComponent = __decorate([
    core_1.Component({
        selector: 'base-chart',
        template: "<div></div>"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.NgZone,
        core_1.ChangeDetectorRef,
        common_1.Location])
], BaseChartComponent);
exports.BaseChartComponent = BaseChartComponent;
//# sourceMappingURL=base-chart.component.js.map