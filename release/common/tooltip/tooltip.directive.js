import { Directive, Input, Output, EventEmitter, HostListener, ViewContainerRef, ElementRef, Renderer, NgZone } from '@angular/core';
import { PlacementTypes } from './position';
import { StyleTypes } from './style.type';
import { AlignmentTypes } from './alignment.type';
import { ShowTypes } from './show.type';
import { TooltipService } from './tooltip.service';
var TooltipDirective = (function () {
    function TooltipDirective(tooltipService, viewContainerRef, renderer, element, zone) {
        this.tooltipService = tooltipService;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.tooltipCssClass = '';
        this.tooltipTitle = '';
        this.tooltipAppendToBody = true;
        this.tooltipSpacing = 10;
        this.tooltipDisabled = false;
        this.tooltipShowCaret = true;
        this.tooltipPlacement = PlacementTypes.top;
        this.tooltipAlignment = AlignmentTypes.center;
        this.tooltipType = StyleTypes.popover;
        this.tooltipCloseOnClickOutside = true;
        this.tooltipCloseOnMouseLeave = true;
        this.tooltipHideTimeout = 300;
        this.tooltipShowTimeout = 100;
        this.tooltipShowEvent = ShowTypes.all;
        this.show = new EventEmitter();
        this.hide = new EventEmitter();
    }
    Object.defineProperty(TooltipDirective.prototype, "listensForFocus", {
        get: function () {
            return this.tooltipShowEvent === ShowTypes.all ||
                this.tooltipShowEvent === ShowTypes.focus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "listensForHover", {
        get: function () {
            return this.tooltipShowEvent === ShowTypes.all ||
                this.tooltipShowEvent === ShowTypes.mouseover;
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.ngOnDestroy = function () {
        this.hideTooltip(true);
    };
    TooltipDirective.prototype.onFocus = function () {
        if (this.listensForFocus) {
            this.showTooltip();
        }
    };
    TooltipDirective.prototype.onBlur = function () {
        if (this.listensForFocus) {
            this.hideTooltip(true);
        }
    };
    TooltipDirective.prototype.onMouseEnter = function () {
        if (this.listensForHover) {
            this.showTooltip();
        }
    };
    TooltipDirective.prototype.onMouseLeave = function (target) {
        if (this.listensForHover && this.tooltipCloseOnMouseLeave) {
            clearTimeout(this.timeout);
            if (this.component) {
                var contentDom = this.component.instance.element.nativeElement;
                var contains = contentDom.contains(target);
                if (contains)
                    return;
            }
            this.hideTooltip();
        }
    };
    TooltipDirective.prototype.onMouseClick = function () {
        if (this.listensForHover) {
            this.hideTooltip(true);
        }
    };
    TooltipDirective.prototype.showTooltip = function (immediate) {
        var _this = this;
        if (this.component || this.tooltipDisabled)
            return;
        var time = immediate ? 0 : this.tooltipShowTimeout;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            _this.tooltipService.destroyAll();
            var options = _this.createBoundOptions();
            _this.component = _this.tooltipService.create(options);
            // add a tiny timeout to avoid event re-triggers
            setTimeout(function () {
                if (_this.component) {
                    _this.addHideListeners(_this.component.instance.element.nativeElement);
                }
            }, 10);
            _this.show.emit(true);
        }, time);
    };
    TooltipDirective.prototype.addHideListeners = function (tooltip) {
        var _this = this;
        // on mouse enter, cancel the hide triggered by the leave
        this.mouseEnterContentEvent = this.renderer.listen(tooltip, 'mouseenter', function () {
            clearTimeout(_this.timeout);
        });
        // content mouse leave listener
        if (this.tooltipCloseOnMouseLeave) {
            this.mouseLeaveContentEvent = this.renderer.listen(tooltip, 'mouseleave', function () {
                _this.hideTooltip();
            });
        }
        // content close on click outside
        if (this.tooltipCloseOnClickOutside) {
            this.documentClickEvent = this.renderer.listen(document, 'click', function (event) {
                var contains = tooltip.contains(event.target);
                if (!contains)
                    _this.hideTooltip();
            });
        }
    };
    TooltipDirective.prototype.hideTooltip = function (immediate) {
        var _this = this;
        if (!this.component)
            return;
        var destroyFn = function () {
            // remove events
            if (_this.mouseLeaveContentEvent)
                _this.mouseLeaveContentEvent();
            if (_this.mouseEnterContentEvent)
                _this.mouseEnterContentEvent();
            if (_this.documentClickEvent)
                _this.documentClickEvent();
            // emit events
            _this.hide.emit(true);
            // destroy component
            _this.tooltipService.destroy(_this.component);
            _this.component = undefined;
        };
        clearTimeout(this.timeout);
        if (!immediate) {
            this.timeout = setTimeout(destroyFn, this.tooltipHideTimeout);
        }
        else {
            destroyFn();
        }
    };
    TooltipDirective.prototype.createBoundOptions = function () {
        return {
            title: this.tooltipTitle,
            template: this.tooltipTemplate,
            host: this.viewContainerRef.element,
            placement: this.tooltipPlacement,
            alignment: this.tooltipAlignment,
            type: this.tooltipType,
            showCaret: this.tooltipShowCaret,
            cssClass: this.tooltipCssClass,
            spacing: this.tooltipSpacing,
            context: this.tooltipContext
        };
    };
    return TooltipDirective;
}());
export { TooltipDirective };
TooltipDirective.decorators = [
    { type: Directive, args: [{ selector: '[ngx-tooltip]' },] },
];
/** @nocollapse */
TooltipDirective.ctorParameters = function () { return [
    { type: TooltipService, },
    { type: ViewContainerRef, },
    { type: Renderer, },
    { type: ElementRef, },
    { type: NgZone, },
]; };
TooltipDirective.propDecorators = {
    'tooltipCssClass': [{ type: Input },],
    'tooltipTitle': [{ type: Input },],
    'tooltipAppendToBody': [{ type: Input },],
    'tooltipSpacing': [{ type: Input },],
    'tooltipDisabled': [{ type: Input },],
    'tooltipShowCaret': [{ type: Input },],
    'tooltipPlacement': [{ type: Input },],
    'tooltipAlignment': [{ type: Input },],
    'tooltipType': [{ type: Input },],
    'tooltipCloseOnClickOutside': [{ type: Input },],
    'tooltipCloseOnMouseLeave': [{ type: Input },],
    'tooltipHideTimeout': [{ type: Input },],
    'tooltipShowTimeout': [{ type: Input },],
    'tooltipTemplate': [{ type: Input },],
    'tooltipShowEvent': [{ type: Input },],
    'tooltipContext': [{ type: Input },],
    'show': [{ type: Output },],
    'hide': [{ type: Output },],
    'onFocus': [{ type: HostListener, args: ['focusin',] },],
    'onBlur': [{ type: HostListener, args: ['blur',] },],
    'onMouseEnter': [{ type: HostListener, args: ['mouseenter',] },],
    'onMouseLeave': [{ type: HostListener, args: ['mouseleave', ['$event.target'],] },],
    'onMouseClick': [{ type: HostListener, args: ['click',] },],
};
//# sourceMappingURL=tooltip.directive.js.map