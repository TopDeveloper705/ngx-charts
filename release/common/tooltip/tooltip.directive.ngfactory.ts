/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/common/tooltip/tooltip.directive';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
export class Wrapper_TooltipDirective {
  /*private*/ _eventHandler:Function;
  context:import0.TooltipDirective;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  subscription0:any;
  subscription1:any;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this._changed = false;
    this.context = new import0.TooltipDirective(p0,p1,p2,p3);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
  }
  check_tooltipCssClass(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.tooltipCssClass = currValue;
      this._expr_0 = currValue;
    }
  }
  check_tooltipTitle(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.tooltipTitle = currValue;
      this._expr_1 = currValue;
    }
  }
  check_tooltipAppendToBody(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.tooltipAppendToBody = currValue;
      this._expr_2 = currValue;
    }
  }
  check_tooltipSpacing(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.tooltipSpacing = currValue;
      this._expr_3 = currValue;
    }
  }
  check_tooltipDisabled(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.tooltipDisabled = currValue;
      this._expr_4 = currValue;
    }
  }
  check_tooltipShowCaret(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.tooltipShowCaret = currValue;
      this._expr_5 = currValue;
    }
  }
  check_tooltipPlacement(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.tooltipPlacement = currValue;
      this._expr_6 = currValue;
    }
  }
  check_tooltipAlignment(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.tooltipAlignment = currValue;
      this._expr_7 = currValue;
    }
  }
  check_tooltipType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.tooltipType = currValue;
      this._expr_8 = currValue;
    }
  }
  check_tooltipCloseOnClickOutside(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.tooltipCloseOnClickOutside = currValue;
      this._expr_9 = currValue;
    }
  }
  check_tooltipCloseOnMouseLeave(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.tooltipCloseOnMouseLeave = currValue;
      this._expr_10 = currValue;
    }
  }
  check_tooltipHideTimeout(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.tooltipHideTimeout = currValue;
      this._expr_11 = currValue;
    }
  }
  check_tooltipShowTimeout(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.tooltipShowTimeout = currValue;
      this._expr_12 = currValue;
    }
  }
  check_tooltipTemplate(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_13,currValue))) {
      this._changed = true;
      this.context.tooltipTemplate = currValue;
      this._expr_13 = currValue;
    }
  }
  check_tooltipShowEvent(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_14,currValue))) {
      this._changed = true;
      this.context.tooltipShowEvent = currValue;
      this._expr_14 = currValue;
    }
  }
  check_tooltipContext(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_15,currValue))) {
      this._changed = true;
      this.context.tooltipContext = currValue;
      this._expr_15 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'focusin')) {
      const pd_sub_0:any = ((<any>this.context.onFocus()) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'blur')) {
      const pd_sub_1:any = ((<any>this.context.onBlur()) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'mouseenter')) {
      const pd_sub_2:any = ((<any>this.context.onMouseEnter()) !== false);
      result = (pd_sub_2 && result);
    }
    if ((eventName == 'mouseleave')) {
      const pd_sub_3:any = ((<any>this.context.onMouseLeave($event.target)) !== false);
      result = (pd_sub_3 && result);
    }
    if ((eventName == 'click')) {
      const pd_sub_4:any = ((<any>this.context.onMouseClick()) !== false);
      result = (pd_sub_4 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.show.subscribe(_eventHandler.bind(view,'show'))); }
    if (emit1) { (this.subscription1 = this.context.hide.subscribe(_eventHandler.bind(view,'hide'))); }
  }
}