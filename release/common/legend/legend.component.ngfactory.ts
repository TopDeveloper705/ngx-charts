/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/common/legend/legend.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '@angular/core/src/security';
import * as import16 from '../../../../src/common/legend/legend-entry.component';
import * as import17 from './legend-entry.component.ngfactory';
export class Wrapper_LegendComponent {
  /*private*/ _eventHandler:Function;
  context:import0.LegendComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.LegendComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_title(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.title = currValue;
      this._changes['title'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_colors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.colors = currValue;
      this._changes['colors'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_height(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.height = currValue;
      this._changes['height'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_width(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.width = currValue;
      this._changes['width'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_activeEntries(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.activeEntries = currValue;
      this._changes['activeEntries'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.labelClick.subscribe(_eventHandler.bind(view,'labelClick'))); }
    if (emit1) { (this.subscription1 = this.context.labelActivate.subscribe(_eventHandler.bind(view,'labelActivate'))); }
    if (emit2) { (this.subscription2 = this.context.labelDeactivate.subscribe(_eventHandler.bind(view,'labelDeactivate'))); }
  }
}
var renderType_LegendComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_LegendComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.LegendComponent>;
  _LegendComponent_0_3:Wrapper_LegendComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LegendComponent_Host0,renderType_LegendComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ngx-charts-legend',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_LegendComponent0(this.viewUtils,this,0,this._el_0);
    this._LegendComponent_0_3 = new Wrapper_LegendComponent(this.compView_0.ref,this.injectorGet(import9.NgZone,this.parentIndex));
    this.compView_0.create(this._LegendComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._LegendComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.LegendComponent) && (0 === requestNodeIndex))) { return this._LegendComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._LegendComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._LegendComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const LegendComponentNgFactory:import8.ComponentFactory<import0.LegendComponent> = new import8.ComponentFactory<import0.LegendComponent>('ngx-charts-legend',View_LegendComponent_Host0,import0.LegendComponent);
const styles_LegendComponent:any[] = ([] as any[]);
var renderType_LegendComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_LegendComponent,{});
export class View_LegendComponent0 extends import2.AppView<import0.LegendComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _anchor_15:any;
  /*private*/ _vc_15:import10.ViewContainer;
  _TemplateRef_15_5:any;
  _NgFor_15_6:import11.Wrapper_NgFor;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_25:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LegendComponent0,renderType_LegendComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._expr_23 = import1.UNINITIALIZED;
    this._expr_24 = import1.UNINITIALIZED;
    this._expr_25 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'header',new import3.InlineArray2(2,'class','legend-title'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'span',new import3.InlineArray2(2,'class','legend-icon icon-eye'),(null as any));
    this._text_6 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_3,'span',new import3.InlineArray2(2,'class','legend-title-text'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_10 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','legend-wrap'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_11,'ul',new import3.InlineArray2(2,'class','legend-labels'),(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'\n          ',(null as any));
    this._anchor_15 = this.renderer.createTemplateAnchor(this._el_13,(null as any));
    this._vc_15 = new import10.ViewContainer(15,13,this,this._anchor_15);
    this._TemplateRef_15_5 = new import12.TemplateRef_(this,15,this._anchor_15);
    this._NgFor_15_6 = new import11.Wrapper_NgFor(this._vc_15.vcRef,this._TemplateRef_15_5,this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.ref);
    this._text_16 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_11,'\n      ',(null as any));
    this._text_18 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_19 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._anchor_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (15 === requestNodeIndex))) { return this._TemplateRef_15_5; }
    if (((token === import14.NgFor) && (15 === requestNodeIndex))) { return this._NgFor_15_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_15_0_0:any = this.context.legendEntries;
    this._NgFor_15_6.check_ngForOf(currVal_15_0_0,throwOnChange,false);
    const currVal_15_0_1:any = this.context.trackBy;
    this._NgFor_15_6.check_ngForTrackBy(currVal_15_0_1,throwOnChange,false);
    this._NgFor_15_6.ngDoCheck(this,this._anchor_15,throwOnChange);
    this._vc_15.detectChangesInNestedViews(throwOnChange);
    const currVal_23:any = this.context.width;
    if (import3.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementStyle(this._el_1,'width',((this.viewUtils.sanitizer.sanitize(import15.SecurityContext.STYLE,currVal_23) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import15.SecurityContext.STYLE,currVal_23).toString() + 'px')));
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = import3.inlineInterpolate(1,'',this.context.title,'');
    if (import3.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setText(this._text_8,currVal_24);
      this._expr_24 = currVal_24;
    }
    const currVal_25:any = (this.context.height - 45);
    if (import3.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this.renderer.setElementStyle(this._el_13,'max-height',((this.viewUtils.sanitizer.sanitize(import15.SecurityContext.STYLE,currVal_25) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import15.SecurityContext.STYLE,currVal_25).toString() + 'px')));
      this._expr_25 = currVal_25;
    }
  }
  destroyInternal():void {
    this._vc_15.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 15)) { return new View_LegendComponent1(this.viewUtils,this,15,this._anchor_15,this._vc_15); }
    return (null as any);
  }
}
class View_LegendComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import16.LegendEntryComponent>;
  _LegendEntryComponent_2_3:import17.Wrapper_LegendEntryComponent;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_LegendComponent1,renderType_LegendComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',new import3.InlineArray2(2,'class','legend-label'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'ngx-charts-legend-entry',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_2 = new import17.View_LegendEntryComponent0(this.viewUtils,this,2,this._el_2);
    this._LegendEntryComponent_2_3 = new import17.Wrapper_LegendEntryComponent();
    this._text_3 = this.renderer.createText((null as any),'\n            ',(null as any));
    this.compView_2.create(this._LegendEntryComponent_2_3.context);
    this._text_4 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray16(10,'select',(null as any),'activate',(null as any),'deactivate',(null as any),'mouseenter',(null as any),'mouseleave',(null as any)),this.eventHandler(this.handleEvent_2));
    this._LegendEntryComponent_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true,true,true,false);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.LegendEntryComponent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._LegendEntryComponent_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.$implicit.color;
    this._LegendEntryComponent_2_3.check_color(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.context.$implicit.label;
    this._LegendEntryComponent_2_3.check_label(currVal_2_0_1,throwOnChange,false);
    const currVal_2_0_2:any = this.context.$implicit.formattedLabel;
    this._LegendEntryComponent_2_3.check_formattedLabel(currVal_2_0_2,throwOnChange,false);
    const currVal_2_0_3:any = this.parentView.context.isActive(this.context.$implicit);
    this._LegendEntryComponent_2_3.check_isActive(currVal_2_0_3,throwOnChange,false);
    if (this._LegendEntryComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
    this._LegendEntryComponent_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.compView_2.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._LegendEntryComponent_2_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.parentView.context.labelClick.emit($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'activate')) {
      const pd_sub_1:any = ((<any>this.parentView.context.activate($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'deactivate')) {
      const pd_sub_2:any = ((<any>this.parentView.context.deactivate($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}