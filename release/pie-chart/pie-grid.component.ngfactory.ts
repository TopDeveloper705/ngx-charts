/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/pie-chart/pie-grid.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../src/common/charts/chart.component';
import * as import12 from '../../../src/utils/injection.service';
import * as import13 from '../common/charts/chart.component.ngfactory';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import15 from '@angular/core/src/application_ref';
import * as import16 from '@angular/core/src/linker/component_factory_resolver';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '../../../src/pie-chart/pie-grid-series.component';
import * as import21 from '../common/tooltip/tooltip.directive.ngfactory';
import * as import22 from './pie-grid-series.component.ngfactory';
import * as import23 from '../../../src/common/tooltip/tooltip.service';
import * as import24 from '../../../src/common/tooltip/tooltip.directive';
export class Wrapper_PieGrid {
  /*private*/ _eventHandler:Function;
  context:import0.PieGrid;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  subscription0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.PieGrid(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_results(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.results = currValue;
      this._changes['results'] = new import1.SimpleChange(this._expr_1,currValue);
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
  check_customColors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.customColors = currValue;
      this._changes['customColors'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
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
    if (emit0) { (this.subscription0 = this.context.clickHandler.subscribe(_eventHandler.bind(view,'clickHandler'))); }
  }
}
var renderType_PieGrid_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PieGrid_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PieGrid>;
  _PieGrid_0_3:Wrapper_PieGrid;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieGrid_Host0,renderType_PieGrid_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'pie-grid',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PieGrid0(this.viewUtils,this,0,this._el_0);
    this._PieGrid_0_3 = new Wrapper_PieGrid(new import8.ElementRef(this._el_0),this.compView_0.ref,this.injectorGet(import9.NgZone,this.parentIndex));
    this.compView_0.create(this._PieGrid_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._PieGrid_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PieGrid) && (0 === requestNodeIndex))) { return this._PieGrid_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._PieGrid_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._PieGrid_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PieGrid_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PieGridNgFactory:import7.ComponentFactory<import0.PieGrid> = new import7.ComponentFactory<import0.PieGrid>('pie-grid',View_PieGrid_Host0,import0.PieGrid);
const styles_PieGrid:any[] = ([] as any[]);
var renderType_PieGrid:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_PieGrid,{});
export class View_PieGrid0 extends import2.AppView<import0.PieGrid> {
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import10.ViewContainer;
  compView_1:import2.AppView<import11.Chart>;
  _InjectionService_1_5:import12.InjectionService;
  _Chart_1_6:import13.Wrapper_Chart;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import10.ViewContainer;
  _TemplateRef_5_5:any;
  _NgFor_5_6:import14.Wrapper_NgFor;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _arr_16:any;
  /*private*/ _expr_17:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieGrid0,renderType_PieGrid,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._arr_16 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_17 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_1 = new import10.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import13.View_Chart0(this.viewUtils,this,1,this._el_1);
    this._InjectionService_1_5 = new import12.InjectionService(this.parentView.injectorGet(import15.ApplicationRef,this.parentIndex),this.parentView.injectorGet(import16.ComponentFactoryResolver,this.parentIndex),this.injector(1));
    this._Chart_1_6 = new import13.Wrapper_Chart(this._vc_1.vcRef,this._InjectionService_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','pie-grid chart'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_5 = new import10.ViewContainer(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import17.TemplateRef_(this,5,this._anchor_5);
    this._NgFor_5_6 = new import14.Wrapper_NgFor(this._vc_5.vcRef,this._TemplateRef_5_5,this.parentView.injectorGet(import18.IterableDiffers,this.parentIndex),this.ref);
    this._text_6 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_1.create(this._Chart_1_6.context);
    this._text_8 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import19.NgFor) && (5 === requestNodeIndex))) { return this._NgFor_5_6.context; }
    if (((token === import12.InjectionService) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._InjectionService_1_5; }
    if (((token === import11.Chart) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Chart_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_16(this.context.width,this.context.height);
    this._Chart_1_6.check_view(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = false;
    this._Chart_1_6.check_legend(currVal_1_0_1,throwOnChange,false);
    if (this._Chart_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_5_0_0:any = this.context.series;
    this._NgFor_5_6.check_ngForOf(currVal_5_0_0,throwOnChange,false);
    this._NgFor_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    const currVal_17:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementAttribute(this._el_3,'transform',((currVal_17 == null)? (null as any): currVal_17.toString()));
      this._expr_17 = currVal_17;
    }
    this.compView_1.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_5.destroyNestedViews();
    this.compView_1.destroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_7,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 5)) { return new View_PieGrid1(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    return (null as any);
  }
}
class View_PieGrid1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _vc_2:import10.ViewContainer;
  compView_2:import2.AppView<import20.PieGridSeries>;
  _TooltipDirective_2_5:import21.Wrapper_TooltipDirective;
  _PieGridSeries_2_6:import22.Wrapper_PieGridSeries;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_PieGrid1,renderType_PieGrid,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_17 = import1.UNINITIALIZED;
    this._expr_18 = import1.UNINITIALIZED;
    this._expr_19 = import1.UNINITIALIZED;
    this._expr_20 = import1.UNINITIALIZED;
    this._expr_21 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','pie-grid-item'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n\n          ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,':svg:g',new import3.InlineArray4(4,'pieGridSeries','','swui-tooltip',''),(null as any));
    this._vc_2 = new import10.ViewContainer(2,0,this,this._el_2);
    this.compView_2 = new import22.View_PieGridSeries0(this.viewUtils,this,2,this._el_2);
    this._TooltipDirective_2_5 = new import21.Wrapper_TooltipDirective(this.parentView.parentView.injectorGet(import23.TooltipService,this.parentView.parentIndex),this._vc_2.vcRef,(<View_PieGrid0>this.parentView)._InjectionService_1_5,this.renderer,new import8.ElementRef(this._el_2),this.parentView.parentView.injectorGet(import9.NgZone,this.parentView.parentIndex));
    this._PieGridSeries_2_6 = new import22.Wrapper_PieGridSeries(new import8.ElementRef(this._el_2));
    this.compView_2.create(this._PieGridSeries_2_6.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n\n          ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_0,':svg:text',new import3.InlineArray16(10,'class','label','dy','-0.5em','text-anchor','middle','x','0','y','5'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n\n          ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_0,':svg:text',new import3.InlineArray16(10,'class','label','dy','0.5em','text-anchor','middle','x','0','y','5'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n\n          ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_0,':svg:text',new import3.InlineArray8(8,'class','label','dy','1.23em','text-anchor','middle','x','0'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'',(null as any));
    this._text_12 = this.renderer.createText(this._el_0,'\n\n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray16(10,'clickHandler',(null as any),'focusin',(null as any),'mouseenter',(null as any),'blur',(null as any),'mouseleave',(null as any)),this.eventHandler(this.handleEvent_2));
    this._PieGridSeries_2_6.subscribe(this,this.eventHandler(this.handleEvent_2),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.TooltipDirective) && (2 === requestNodeIndex))) { return this._TooltipDirective_2_5.context; }
    if (((token === import20.PieGridSeries) && (2 === requestNodeIndex))) { return this._PieGridSeries_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = ((this.context.$implicit.label + ': ') + this.context.$implicit.value.toLocaleString());
    this._TooltipDirective_2_5.check_tooltipTitle(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = 'top';
    this._TooltipDirective_2_5.check_tooltipPlacement(currVal_2_0_1,throwOnChange,false);
    const currVal_2_0_2:any = 'tooltip';
    this._TooltipDirective_2_5.check_tooltipType(currVal_2_0_2,throwOnChange,false);
    this._TooltipDirective_2_5.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_2_1_0:any = this.context.$implicit.colors;
    this._PieGridSeries_2_6.check_colors(currVal_2_1_0,throwOnChange,false);
    const currVal_2_1_1:any = this.context.$implicit.data;
    this._PieGridSeries_2_6.check_data(currVal_2_1_1,throwOnChange,false);
    const currVal_2_1_2:any = this.context.$implicit.innerRadius;
    this._PieGridSeries_2_6.check_innerRadius(currVal_2_1_2,throwOnChange,false);
    const currVal_2_1_3:any = this.context.$implicit.outerRadius;
    this._PieGridSeries_2_6.check_outerRadius(currVal_2_1_3,throwOnChange,false);
    if (this._PieGridSeries_2_6.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    const currVal_17:any = this.context.$implicit.transform;
    if (import3.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementAttribute(this._el_0,'transform',((currVal_17 == null)? (null as any): currVal_17.toString()));
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = import3.inlineInterpolate(1,'\n            ',this.context.$implicit.percent,'\n          ');
    if (import3.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setText(this._text_5,currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = import3.inlineInterpolate(1,'\n            ',this.context.$implicit.label,'\n          ');
    if (import3.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setText(this._text_8,currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this.context.$implicit.outerRadius;
    if (import3.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementAttribute(this._el_10,'y',((currVal_20 == null)? (null as any): currVal_20.toString()));
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = import3.inlineInterpolate(1,'\n            ',this.context.$implicit.total.toLocaleString(),'\n          ');
    if (import3.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setText(this._text_11,currVal_21);
      this._expr_21 = currVal_21;
    }
    this.compView_2.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this.compView_2.destroy();
    this._TooltipDirective_2_5.ngOnDestroy();
    this._PieGridSeries_2_6.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._TooltipDirective_2_5.handleEvent(eventName,$event) && result);
    if ((eventName == 'clickHandler')) {
      const pd_sub_0:any = ((<any>this.parentView.context.click($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}