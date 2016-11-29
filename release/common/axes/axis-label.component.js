"use strict";
var core_1 = require('@angular/core');
var AxisLabel = (function () {
    function AxisLabel(element) {
        this.textHeight = 25;
        this.margin = 5;
        this.element = element.nativeElement;
    }
    AxisLabel.prototype.ngOnChanges = function () {
        this.update();
    };
    AxisLabel.prototype.update = function () {
        this.strokeWidth = '0.01';
        this.textAnchor = 'middle';
        this.transform = '';
        switch (this.orient) {
            case 'top':
                this.y = this.offset;
                this.x = this.width / 2;
                break;
            case 'bottom':
                this.y = this.offset;
                this.x = this.width / 2;
                break;
            case 'left':
                this.y = -(this.offset + this.textHeight + this.margin);
                this.x = -this.height / 2;
                this.transform = "rotate(270)";
                break;
            case 'right':
                this.y = this.offset + this.margin;
                this.x = -this.height / 2;
                this.transform = "rotate(270)";
                break;
        }
    };
    AxisLabel.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'g[axisLabel]',
                    template: "\n    <svg:text\n      [attr.stroke-width]=\"strokeWidth\"\n      [attr.text-anchor]=\"textAnchor\"\n      [attr.x]=\"x\"\n      [attr.y]=\"y\"\n      [attr.text-anchor]=\"textAnchor\"\n      [attr.transform]=\"transform\">\n      {{label}}\n    </svg:text>\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    AxisLabel.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    AxisLabel.propDecorators = {
        'orient': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'offset': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
    };
    return AxisLabel;
}());
exports.AxisLabel = AxisLabel;
//# sourceMappingURL=axis-label.component.js.map