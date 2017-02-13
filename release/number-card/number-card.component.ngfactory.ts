/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/number-card/number-card.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/zone/ng_zone';
import * as import11 from '@angular/common/src/location/location';
import * as import12 from '../common/base-chart.component.scss.ngstyle';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../../src/common/charts/chart.component';
import * as import15 from '../../../src/common/tooltip/tooltip.service';
import * as import16 from '../common/charts/chart.component.ngfactory';
import * as import17 from '../../../src/number-card/card-series.component';
import * as import18 from './card-series.component.ngfactory';
import * as import19 from '../../../src/common/tooltip/injection.service';
export class Wrapper_NumberCardComponent {
  /*private*/ _eventHandler:Function;
  context:import0.NumberCardComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  subscription0:any;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.NumberCardComponent(p0,p1,p2,p3);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_results(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.results = currValue;
      this._changes['results'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_scheme(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.scheme = currValue;
      this._changes['scheme'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_schemeType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.schemeType = currValue;
      this._changes['schemeType'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_customColors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.customColors = currValue;
      this._changes['customColors'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
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
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
  }
}
var renderType_NumberCardComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_NumberCardComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.NumberCardComponent>;
  _NumberCardComponent_0_3:Wrapper_NumberCardComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NumberCardComponent_Host0,renderType_NumberCardComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ngx-charts-number-card',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_NumberCardComponent0(this.viewUtils,this,0,this._el_0);
    this._NumberCardComponent_0_3 = new Wrapper_NumberCardComponent(new import9.ElementRef(this._el_0),this.injectorGet(import10.NgZone,this.parentIndex),this.compView_0.ref,this.injectorGet(import11.Location,this.parentIndex));
    this.compView_0.create(this._NumberCardComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._NumberCardComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NumberCardComponent) && (0 === requestNodeIndex))) { return this._NumberCardComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._NumberCardComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._NumberCardComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._NumberCardComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const NumberCardComponentNgFactory:import8.ComponentFactory<import0.NumberCardComponent> = new import8.ComponentFactory<import0.NumberCardComponent>('ngx-charts-number-card',View_NumberCardComponent_Host0,import0.NumberCardComponent);
const styles_NumberCardComponent:any[] = [import12.styles];
var renderType_NumberCardComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_NumberCardComponent,{});
export class View_NumberCardComponent0 extends import2.AppView<import0.NumberCardComponent> {
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import13.ViewContainer;
  compView_1:import2.AppView<import14.ChartComponent>;
  _TooltipService_1_5:import15.TooltipService;
  _ChartComponent_1_6:import16.Wrapper_ChartComponent;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  compView_5:import2.AppView<import17.CardSeriesComponent>;
  _CardSeriesComponent_5_3:import18.Wrapper_CardSeriesComponent;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _arr_15:any;
  /*private*/ _expr_16:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NumberCardComponent0,renderType_NumberCardComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._arr_15 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_16 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'ngx-charts-chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_1 = new import13.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import16.View_ChartComponent0(this.viewUtils,this,1,this._el_1);
    this._TooltipService_1_5 = new import15.TooltipService(this.parentView.injectorGet(import19.InjectionService,this.parentIndex));
    this._ChartComponent_1_6 = new import16.Wrapper_ChartComponent(this._vc_1.vcRef,this._TooltipService_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','number-card chart'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,':svg:g',new import3.InlineArray2(2,'ngx-charts-card-series',''),(null as any));
    this.compView_5 = new import18.View_CardSeriesComponent0(this.viewUtils,this,5,this._el_5);
    this._CardSeriesComponent_5_3 = new import18.Wrapper_CardSeriesComponent(this.parentView.injectorGet(import10.NgZone,this.parentIndex));
    this.compView_5.create(this._CardSeriesComponent_5_3.context);
    this._text_6 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_1.create(this._ChartComponent_1_6.context);
    this._text_8 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'select',(null as any)),this.eventHandler(this.handleEvent_5));
    this._CardSeriesComponent_5_3.subscribe(this,this.eventHandler(this.handleEvent_5),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.CardSeriesComponent) && (5 === requestNodeIndex))) { return this._CardSeriesComponent_5_3.context; }
    if (((token === import15.TooltipService) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._TooltipService_1_5; }
    if (((token === import14.ChartComponent) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ChartComponent_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_15(this.context.width,this.context.height);
    this._ChartComponent_1_6.check_view(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = false;
    this._ChartComponent_1_6.check_showLegend(currVal_1_0_1,throwOnChange,false);
    if (this._ChartComponent_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_5_0_0:any = this.context.data;
    this._CardSeriesComponent_5_3.check_data(currVal_5_0_0,throwOnChange,false);
    const currVal_5_0_1:any = this.context.dims;
    this._CardSeriesComponent_5_3.check_dims(currVal_5_0_1,throwOnChange,false);
    const currVal_5_0_2:any = this.context.colors;
    this._CardSeriesComponent_5_3.check_colors(currVal_5_0_2,throwOnChange,false);
    if (this._CardSeriesComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    const currVal_16:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementAttribute(this._el_3,'transform',((currVal_16 == null)? (null as any): currVal_16.toString()));
      this._expr_16 = currVal_16;
    }
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_5.destroy();
    this._CardSeriesComponent_5_3.ngOnDestroy();
    this._ChartComponent_1_6.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_7,ctx);
    }
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}