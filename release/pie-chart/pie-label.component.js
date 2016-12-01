"use strict";
var core_1 = require('@angular/core');
var trim_label_helper_1 = require('../common/trim-label.helper');
var d3_1 = require('../d3');
var PieLabelComponent = (function () {
    function PieLabelComponent(element) {
        this.element = element.nativeElement;
        this.trimLabel = trim_label_helper_1.trimLabel;
    }
    PieLabelComponent.prototype.ngOnChanges = function () {
        this.update();
    };
    PieLabelComponent.prototype.update = function () {
        var factor = 1.5;
        var outerArc = d3_1.default.arc()
            .innerRadius(this.radius * factor)
            .outerRadius(this.radius * factor);
        var startRadius = this.radius;
        if (this.explodeSlices) {
            startRadius = this.radius * this.value / this.max;
        }
        var innerArc = d3_1.default.arc()
            .innerRadius(startRadius)
            .outerRadius(startRadius);
        this.labelXY = outerArc.centroid(this.data);
        this.labelXY[0] = this.radius * factor * (this.midAngle(this.data) < Math.PI ? 1 : -1);
        this.labelXY[1] = this.data.pos[1];
        this.line = "M" + innerArc.centroid(this.data) + "L" + outerArc.centroid(this.data) + "L" + this.labelXY;
        this.transform = "translate(" + this.labelXY + ")";
        this.loadAnimation();
    };
    PieLabelComponent.prototype.textAnchor = function () {
        return this.midAngle(this.data) < Math.PI ? "start" : "end";
    };
    PieLabelComponent.prototype.midAngle = function (d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    };
    PieLabelComponent.prototype.loadAnimation = function () {
        var label = d3_1.default.select(this.element).select('.label');
        var line = d3_1.default.select(this.element).select('.line');
        label
            .attr('opacity', 0)
            .transition().delay(750).duration(750)
            .attr('opacity', 1);
        line
            .style('stroke-dashoffset', 2000)
            .transition().delay(750).duration(750)
            .style('stroke-dashoffset', '0')
            .transition()
            .style('stroke-dasharray', 'none');
    };
    PieLabelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'g[pieLabel]',
                    template: "\n    <title>{{label}}</title>\n    <svg:text\n      class=\"pie-label\"\n      [attr.transform]=\"transform\"\n      dy=\".35em\"\n      [style.textAnchor]=\"textAnchor()\"\n      [style.shapeRendering]=\"'crispEdges'\"\n      [style.textTransform]=\"'uppercase'\">\n      {{trimLabel(label, 10)}}\n    </svg:text>\n    <svg:path\n      [attr.d]=\"line\"\n      [attr.stroke]=\"color\"\n      fill=\"none\"\n      class=\"line\"\n      [style.strokeDasharray]=\"2000\"\n      [style.strokeDashoffset]=\"0\">\n    </svg:path>\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    PieLabelComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    PieLabelComponent.propDecorators = {
        'data': [{ type: core_1.Input },],
        'radius': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'explodeSlices': [{ type: core_1.Input },],
    };
    return PieLabelComponent;
}());
exports.PieLabelComponent = PieLabelComponent;
//# sourceMappingURL=pie-label.component.js.map