/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/heat-map/heat-map.component';
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
import * as import12 from '../../../src/common/axes/x-axis.component';
import * as import13 from '../common/axes/x-axis.component.ngfactory';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../../src/common/axes/y-axis.component';
import * as import16 from '../common/axes/y-axis.component.ngfactory';
import * as import17 from '../../../src/common/charts/chart.component';
import * as import18 from '../../../src/common/tooltip/tooltip.service';
import * as import19 from '../common/charts/chart.component.ngfactory';
import * as import20 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import21 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import22 from '../../../src/heat-map/heat-map-cell-series.component';
import * as import23 from './heat-map-cell-series.component.ngfactory';
import * as import24 from '../../../src/services/injection.service';
import * as import25 from '@angular/core/src/linker/template_ref';
import * as import26 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import27 from '@angular/common/src/directives/ng_if';
import * as import28 from '@angular/common/src/directives/ng_for';
export class Wrapper_HeatMapComponent {
  /*private*/ _eventHandler:Function;
  context:import0.HeatMapComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
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
  subscription0:any;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.HeatMapComponent(p0,p1,p2,p3);
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
  check_legend(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.legend = currValue;
      this._changes['legend'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_xAxis(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.xAxis = currValue;
      this._changes['xAxis'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_yAxis(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.yAxis = currValue;
      this._changes['yAxis'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  check_showXAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.showXAxisLabel = currValue;
      this._changes['showXAxisLabel'] = new import1.SimpleChange(this._expr_8,currValue);
      this._expr_8 = currValue;
    }
  }
  check_showYAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.showYAxisLabel = currValue;
      this._changes['showYAxisLabel'] = new import1.SimpleChange(this._expr_9,currValue);
      this._expr_9 = currValue;
    }
  }
  check_xAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.xAxisLabel = currValue;
      this._changes['xAxisLabel'] = new import1.SimpleChange(this._expr_10,currValue);
      this._expr_10 = currValue;
    }
  }
  check_yAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.yAxisLabel = currValue;
      this._changes['yAxisLabel'] = new import1.SimpleChange(this._expr_11,currValue);
      this._expr_11 = currValue;
    }
  }
  check_gradient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.gradient = currValue;
      this._changes['gradient'] = new import1.SimpleChange(this._expr_12,currValue);
      this._expr_12 = currValue;
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
var renderType_HeatMapComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_HeatMapComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.HeatMapComponent>;
  _HeatMapComponent_0_3:Wrapper_HeatMapComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeatMapComponent_Host0,renderType_HeatMapComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ngx-charts-heat-map',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_HeatMapComponent0(this.viewUtils,this,0,this._el_0);
    this._HeatMapComponent_0_3 = new Wrapper_HeatMapComponent(new import9.ElementRef(this._el_0),this.injectorGet(import10.NgZone,this.parentIndex),this.compView_0.ref,this.injectorGet(import11.Location,this.parentIndex));
    this.compView_0.create(this._HeatMapComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._HeatMapComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HeatMapComponent) && (0 === requestNodeIndex))) { return this._HeatMapComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._HeatMapComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._HeatMapComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._HeatMapComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HeatMapComponentNgFactory:import8.ComponentFactory<import0.HeatMapComponent> = new import8.ComponentFactory<import0.HeatMapComponent>('ngx-charts-heat-map',View_HeatMapComponent_Host0,import0.HeatMapComponent);
const styles_HeatMapComponent:any[] = ([] as any[]);
class View_HeatMapComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import12.XAxisComponent>;
  _XAxisComponent_0_3:import13.Wrapper_XAxisComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import14.ViewContainer) {
    super(View_HeatMapComponent1,renderType_HeatMapComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'ngx-charts-x-axis',''),(null as any));
    this.compView_0 = new import13.View_XAxisComponent0(this.viewUtils,this,0,this._el_0);
    this._XAxisComponent_0_3 = new import13.Wrapper_XAxisComponent();
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_0.create(this._XAxisComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'dimensionsChanged',(null as any)),this.eventHandler(this.handleEvent_0));
    this._XAxisComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.XAxisComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._XAxisComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.xScale;
    this._XAxisComponent_0_3.check_xScale(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.dims;
    this._XAxisComponent_0_3.check_dims(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.showXAxisLabel;
    this._XAxisComponent_0_3.check_showLabel(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.xAxisLabel;
    this._XAxisComponent_0_3.check_labelText(currVal_0_0_3,throwOnChange,false);
    if (this._XAxisComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._XAxisComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'dimensionsChanged')) {
      const pd_sub_0:any = ((<any>this.parentView.context.updateXAxisHeight($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_HeatMapComponent2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import15.YAxisComponent>;
  _YAxisComponent_0_3:import16.Wrapper_YAxisComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import14.ViewContainer) {
    super(View_HeatMapComponent2,renderType_HeatMapComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'ngx-charts-y-axis',''),(null as any));
    this.compView_0 = new import16.View_YAxisComponent0(this.viewUtils,this,0,this._el_0);
    this._YAxisComponent_0_3 = new import16.Wrapper_YAxisComponent();
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_0.create(this._YAxisComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'dimensionsChanged',(null as any)),this.eventHandler(this.handleEvent_0));
    this._YAxisComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.YAxisComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._YAxisComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.yScale;
    this._YAxisComponent_0_3.check_yScale(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.dims;
    this._YAxisComponent_0_3.check_dims(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.showYAxisLabel;
    this._YAxisComponent_0_3.check_showLabel(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.yAxisLabel;
    this._YAxisComponent_0_3.check_labelText(currVal_0_0_3,throwOnChange,false);
    if (this._YAxisComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._YAxisComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'dimensionsChanged')) {
      const pd_sub_0:any = ((<any>this.parentView.context.updateYAxisWidth($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_HeatMapComponent3 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import14.ViewContainer) {
    super(View_HeatMapComponent3,renderType_HeatMapComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:rect',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.context.$implicit.x;
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementAttribute(this._el_0,'x',((currVal_1 == null)? (null as any): currVal_1.toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.$implicit.y;
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementAttribute(this._el_0,'y',((currVal_2 == null)? (null as any): currVal_2.toString()));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.context.$implicit.rx;
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementAttribute(this._el_0,'rx',((currVal_3 == null)? (null as any): currVal_3.toString()));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.$implicit.width;
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_0,'width',((currVal_4 == null)? (null as any): currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.$implicit.height;
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementAttribute(this._el_0,'height',((currVal_5 == null)? (null as any): currVal_5.toString()));
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.$implicit.fill;
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementAttribute(this._el_0,'fill',((currVal_6 == null)? (null as any): currVal_6.toString()));
      this._expr_6 = currVal_6;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_HeatMapComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_HeatMapComponent,{});
export class View_HeatMapComponent0 extends import2.AppView<import0.HeatMapComponent> {
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import14.ViewContainer;
  compView_1:import2.AppView<import17.ChartComponent>;
  _TooltipService_1_5:import18.TooltipService;
  _ChartComponent_1_6:import19.Wrapper_ChartComponent;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import14.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import20.Wrapper_NgIf;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import14.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import20.Wrapper_NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import14.ViewContainer;
  _TemplateRef_9_5:any;
  _NgFor_9_6:import21.Wrapper_NgFor;
  _text_10:any;
  _el_11:any;
  compView_11:import2.AppView<import22.HeatCellSeriesComponent>;
  _HeatCellSeriesComponent_11_3:import23.Wrapper_HeatCellSeriesComponent;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _arr_30:any;
  /*private*/ _expr_31:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeatMapComponent0,renderType_HeatMapComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._arr_30 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_31 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'ngx-charts-chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_1 = new import14.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import19.View_ChartComponent0(this.viewUtils,this,1,this._el_1);
    this._TooltipService_1_5 = new import18.TooltipService(this.parentView.injectorGet(import24.InjectionService,this.parentIndex));
    this._ChartComponent_1_6 = new import19.Wrapper_ChartComponent(this._vc_1.vcRef,this._TooltipService_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','heat-map chart'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_5 = new import14.ViewContainer(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import25.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import20.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_7 = new import14.ViewContainer(7,3,this,this._anchor_7);
    this._TemplateRef_7_5 = new import25.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import20.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_9 = new import14.ViewContainer(9,3,this,this._anchor_9);
    this._TemplateRef_9_5 = new import25.TemplateRef_(this,9,this._anchor_9);
    this._NgFor_9_6 = new import21.Wrapper_NgFor(this._vc_9.vcRef,this._TemplateRef_9_5,this.parentView.injectorGet(import26.IterableDiffers,this.parentIndex),this.ref);
    this._text_10 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_3,':svg:g',new import3.InlineArray2(2,'ngx-charts-heat-map-cell-series',''),(null as any));
    this.compView_11 = new import23.View_HeatCellSeriesComponent0(this.viewUtils,this,11,this._el_11);
    this._HeatCellSeriesComponent_11_3 = new import23.Wrapper_HeatCellSeriesComponent();
    this.compView_11.create(this._HeatCellSeriesComponent_11_3.context);
    this._text_12 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_1.create(this._ChartComponent_1_6.context);
    this._text_14 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray8(6,'legendLabelActivate',(null as any),'legendLabelDeactivate',(null as any),'legendLabelClick',(null as any)),this.eventHandler(this.handleEvent_1));
    this._ChartComponent_1_6.subscribe(this,this.eventHandler(this.handleEvent_1),true,true,true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_11,new import3.InlineArray2(2,'select',(null as any)),this.eventHandler(this.handleEvent_11));
    this._HeatCellSeriesComponent_11_3.subscribe(this,this.eventHandler(this.handleEvent_11),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import27.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    if (((token === import25.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import27.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import25.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import28.NgFor) && (9 === requestNodeIndex))) { return this._NgFor_9_6.context; }
    if (((token === import22.HeatCellSeriesComponent) && (11 === requestNodeIndex))) { return this._HeatCellSeriesComponent_11_3.context; }
    if (((token === import18.TooltipService) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._TooltipService_1_5; }
    if (((token === import17.ChartComponent) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._ChartComponent_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_30(this.context.width,this.context.height);
    this._ChartComponent_1_6.check_view(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.legend;
    this._ChartComponent_1_6.check_showLegend(currVal_1_0_1,throwOnChange,false);
    const currVal_1_0_2:any = this.context.legendOptions;
    this._ChartComponent_1_6.check_legendOptions(currVal_1_0_2,throwOnChange,false);
    if (this._ChartComponent_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_5_0_0:any = this.context.xAxis;
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    const currVal_7_0_0:any = this.context.yAxis;
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_9_0_0:any = this.context.rects;
    this._NgFor_9_6.check_ngForOf(currVal_9_0_0,throwOnChange,false);
    this._NgFor_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    const currVal_11_0_0:any = this.context.results;
    this._HeatCellSeriesComponent_11_3.check_data(currVal_11_0_0,throwOnChange,false);
    const currVal_11_0_1:any = this.context.colors;
    this._HeatCellSeriesComponent_11_3.check_colors(currVal_11_0_1,throwOnChange,false);
    const currVal_11_0_2:any = this.context.xScale;
    this._HeatCellSeriesComponent_11_3.check_xScale(currVal_11_0_2,throwOnChange,false);
    const currVal_11_0_3:any = this.context.yScale;
    this._HeatCellSeriesComponent_11_3.check_yScale(currVal_11_0_3,throwOnChange,false);
    const currVal_11_0_4:any = this.context.gradient;
    this._HeatCellSeriesComponent_11_3.check_gradient(currVal_11_0_4,throwOnChange,false);
    if (this._HeatCellSeriesComponent_11_3.ngDoCheck(this,this._el_11,throwOnChange)) { this.compView_11.markAsCheckOnce(); }
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    const currVal_31:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_31,currVal_31)) {
      this.renderer.setElementAttribute(this._el_3,'transform',((currVal_31 == null)? (null as any): currVal_31.toString()));
      this._expr_31 = currVal_31;
    }
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_11.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_5.destroyNestedViews();
    this._vc_7.destroyNestedViews();
    this._vc_9.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_11.destroy();
    this._HeatCellSeriesComponent_11_3.ngOnDestroy();
    this._ChartComponent_1_6.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_13,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 5)) { return new View_HeatMapComponent1(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    if ((nodeIndex == 7)) { return new View_HeatMapComponent2(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    if ((nodeIndex == 9)) { return new View_HeatMapComponent3(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    return (null as any);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'legendLabelActivate')) {
      const pd_sub_0:any = ((<any>this.context.onActivate($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'legendLabelDeactivate')) {
      const pd_sub_1:any = ((<any>this.context.onDeactivate($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'legendLabelClick')) {
      const pd_sub_2:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
  handleEvent_11(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}