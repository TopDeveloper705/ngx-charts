"use strict";
var core_1 = require('@angular/core');
var trim_label_helper_1 = require('../common/trim-label.helper');
var CardComponent = (function () {
    function CardComponent(element, cd, zone) {
        this.cd = cd;
        this.zone = zone;
        this.clickHandler = new core_1.EventEmitter();
        this.resizeScale = 1;
        this.textFontSize = 35;
        this.textTransform = '';
        this.initialized = false;
        this.element = element.nativeElement;
    }
    CardComponent.prototype.ngOnChanges = function () {
        this.update();
    };
    CardComponent.prototype.update = function () {
        var _this = this;
        this.zone.run(function () {
            _this.transform = "translate(" + _this.x + " , " + _this.y + ")";
            _this.textWidth = Math.max(0, _this.width - 15);
            _this.cardWidth = Math.max(0, _this.width - 5);
            _this.cardHeight = Math.max(0, _this.height - 5);
            _this.label = _this.data.name;
            _this.trimmedLabel = trim_label_helper_1.trimLabel(_this.label, 55);
            _this.value = _this.data.value.toLocaleString();
            setTimeout(function () {
                _this.scaleText();
            });
            if (!_this.initialized) {
                setTimeout(function () {
                    var step = _this.data.value / 100;
                    _this.countUp(0, _this.data.value, step);
                }, 20);
                _this.initialized = true;
            }
        });
    };
    CardComponent.prototype.countUp = function (current, max, step) {
        var _this = this;
        this.zone.run(function () {
            _this.value = Math.round(current).toLocaleString();
            if (current >= max) {
                return;
            }
            var newValue = Math.min(current + step, max);
            _this.cd.markForCheck();
            setTimeout(function () {
                _this.countUp(newValue, max, step);
            }, 16);
        });
    };
    CardComponent.prototype.scaleText = function () {
        var _this = this;
        this.zone.run(function () {
            var _a = _this.textEl.nativeElement.getBoundingClientRect(), width = _a.width, height = _a.height;
            if (width === 0 || height === 0) {
                return;
            }
            var availableWidth = _this.cardWidth * 0.85;
            var availableHeight = _this.cardHeight * 0.60;
            if (!_this.originalWidthRatio) {
                _this.originalWidthRatio = availableWidth / width;
                _this.originalWidth = availableWidth;
            }
            if (!_this.originalHeightRatio) {
                _this.originalHeightRatio = availableHeight / height;
                _this.originalHeight = availableHeight;
            }
            var newWidthRatio = (availableWidth / _this.originalWidth) * _this.originalWidthRatio;
            var newHeightRatio = (availableHeight / _this.originalHeight) * _this.originalHeightRatio;
            _this.resizeScale = Math.min(newWidthRatio, newHeightRatio);
            _this.textFontSize = Number.parseInt((35 * _this.resizeScale).toString());
            _this.cd.markForCheck();
        });
    };
    CardComponent.prototype.onClick = function () {
        this.clickHandler.emit({
            name: this.data.name,
            value: this.data.value
        });
    };
    CardComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'g[card]',
                    template: "\n    <svg:g\n      [attr.transform]=\"transform\"\n      class=\"cell\"\n      (click)=\"onClick()\">\n      <svg:rect\n        class=\"card\"\n        [style.fill]=\"color\"\n        [style.opacity]=\"0.3\"\n        style=\"cursor: pointer;\"\n        [attr.width]=\"cardWidth\"\n        [attr.height]=\"cardHeight\"\n        rx=\"3\"\n        ry=\"3\"\n      />\n      <title>{{label}}</title>\n      <svg:foreignObject\n        x=\"5\"\n        [attr.y]=\"height * 0.7\"\n        [attr.width]=\"textWidth\"\n        [attr.height]=\"height * 0.3\"\n        style=\"font-size: 12px;\n               pointer-events: none;\n               text-transform: uppercase;\n               overflow: hidden;\n               text-align: center;\n               line-height: 1em;\">\n        <xhtml:p\n          style=\"overflow: hidden;\n                 white-space: nowrap;\n                 text-overflow: ellipsis;\n                 width: 100%;\">\n          {{trimmedLabel}}\n        </xhtml:p>\n      </svg:foreignObject>\n      <svg:text #textEl\n        [attr.x]=\"cardWidth / 2\"\n        [attr.y]=\"height * 0.30\"\n        dy=\".35em\"\n        class=\"value-text\"\n        [style.fill]=\"color\"\n        text-anchor=\"middle\"\n        [style.font-size.pt]=\"textFontSize\"\n        style=\"pointer-events: none;\">\n        {{value}}\n      </svg:text>\n    </svg:g>\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.ChangeDetectorRef, },
        { type: core_1.NgZone, },
    ];
    CardComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'x': [{ type: core_1.Input },],
        'y': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'data': [{ type: core_1.Input },],
        'clickHandler': [{ type: core_1.Output },],
        'textEl': [{ type: core_1.ViewChild, args: ['textEl',] },],
    };
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map