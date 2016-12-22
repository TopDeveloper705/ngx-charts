"use strict";
var core_1 = require('@angular/core');
var d3_1 = require('../d3');
var PieGridSeriesComponent = (function () {
    function PieGridSeriesComponent(element) {
        this.innerRadius = 70;
        this.outerRadius = 80;
        this.select = new core_1.EventEmitter();
        this.element = element.nativeElement;
    }
    PieGridSeriesComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    PieGridSeriesComponent.prototype.update = function () {
        this.layout = d3_1.default.pie()
            .value(function (d) { return d.data.value; }).sort(null);
        this.arcs = this.getArcs();
    };
    PieGridSeriesComponent.prototype.getArcs = function () {
        var _this = this;
        return this.layout(this.data).map(function (arc, index) {
            var label = arc.data.data.name;
            var other = arc.data.data.other;
            if (index === 0) {
                arc.startAngle = 0;
            }
            var color = _this.colors(label);
            return {
                data: arc.data.data,
                class: 'arc ' + 'arc' + index,
                fill: color,
                startAngle: other ? 0 : arc.startAngle,
                endAngle: arc.endAngle,
                animate: !other,
                pointerEvents: !other
            };
        });
    };
    PieGridSeriesComponent.prototype.onClick = function (data) {
        this.select.emit({
            name: this.data[0].data.name,
            value: this.data[0].data.value
        });
    };
    PieGridSeriesComponent.prototype.trackBy = function (index, item) {
        return item.data.name;
    };
    PieGridSeriesComponent.prototype.label = function (arc) {
        return arc.data.name;
    };
    PieGridSeriesComponent.prototype.color = function (arc) {
        return this.colors(this.label(arc));
    };
    PieGridSeriesComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'g[ngx-charts-pie-grid-series]',
                    template: "\n    <svg:g class=\"pie-grid-arcs\">\n      <svg:g ngx-charts-pie-arc *ngFor=\"let arc of arcs; trackBy:trackBy\"\n        [attr.class]=\"arc.class\"\n        [startAngle]=\"arc.startAngle\"\n        [endAngle]=\"arc.endAngle\"\n        [innerRadius]=\"innerRadius\"\n        [outerRadius]=\"outerRadius\"\n        [fill]=\"color(arc)\"\n        [value]=\"arc.data.value\"\n        [data]=\"arc.data\"\n        [max]=\"max\"\n        [gradient]=\"false\"\n        [pointerEvents]=\"arc.pointerEvents\"\n        [animate]=\"arc.animate\"\n        (select)=\"onClick($event)\">\n      </svg:g>\n    </svg:g>\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    PieGridSeriesComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    PieGridSeriesComponent.propDecorators = {
        'colors': [{ type: core_1.Input },],
        'data': [{ type: core_1.Input },],
        'innerRadius': [{ type: core_1.Input },],
        'outerRadius': [{ type: core_1.Input },],
        'select': [{ type: core_1.Output },],
    };
    return PieGridSeriesComponent;
}());
exports.PieGridSeriesComponent = PieGridSeriesComponent;
//# sourceMappingURL=pie-grid-series.component.js.map