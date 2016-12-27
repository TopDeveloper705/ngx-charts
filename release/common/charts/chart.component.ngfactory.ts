/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/common/charts/chart.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_container';
import * as import7 from '../../../../src/common/tooltip/tooltip.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../../../src/services/injection.service';
import * as import12 from '@angular/core/src/animation/animation_transition';
import * as import13 from '@angular/core/src/animation/animation_sequence_player';
import * as import14 from '@angular/core/src/animation/animation_styles';
import * as import15 from '@angular/core/src/animation/animation_style_util';
import * as import16 from '@angular/core/src/animation/animation_keyframe';
import * as import17 from '@angular/core/src/animation/animation_player';
import * as import18 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '@angular/core/src/security';
import * as import22 from '../../../../src/common/legend/scale-legend.component';
import * as import23 from '../legend/scale-legend.component.ngfactory';
import * as import24 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import25 from '../../../../src/common/legend/legend.component';
import * as import26 from '../legend/legend.component.ngfactory';
import * as import27 from '@angular/core/src/zone/ng_zone';
export class Wrapper_ChartComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ChartComponent;
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
  subscription0:any;
  subscription1:any;
  subscription2:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.ChartComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_showLegend(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.showLegend = currValue;
      this._changes['showLegend'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_legendOptions(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.legendOptions = currValue;
      this._changes['legendOptions'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_legendData(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.legendData = currValue;
      this._changes['legendData'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_legendType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.legendType = currValue;
      this._changes['legendType'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_legendTitle(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.legendTitle = currValue;
      this._changes['legendTitle'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_colors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.colors = currValue;
      this._changes['colors'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  check_activeEntries(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.activeEntries = currValue;
      this._changes['activeEntries'] = new import1.SimpleChange(this._expr_8,currValue);
      this._expr_8 = currValue;
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
    if (emit0) { (this.subscription0 = this.context.legendLabelClick.subscribe(_eventHandler.bind(view,'legendLabelClick'))); }
    if (emit1) { (this.subscription1 = this.context.legendLabelActivate.subscribe(_eventHandler.bind(view,'legendLabelActivate'))); }
    if (emit2) { (this.subscription2 = this.context.legendLabelDeactivate.subscribe(_eventHandler.bind(view,'legendLabelDeactivate'))); }
  }
}
var renderType_ChartComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_ChartComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import6.ViewContainer;
  compView_0:import2.AppView<import0.ChartComponent>;
  _TooltipService_0_5:import7.TooltipService;
  _ChartComponent_0_6:Wrapper_ChartComponent;
  _el_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ChartComponent_Host0,renderType_ChartComponent_Host,import8.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import10.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ngx-charts-chart',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._vc_0 = new import6.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new View_ChartComponent0(this.viewUtils,this,0,this._el_0);
    this._TooltipService_0_5 = new import7.TooltipService(this.injectorGet(import11.InjectionService,this.parentIndex));
    this._ChartComponent_0_6 = new Wrapper_ChartComponent(this._vc_0.vcRef,this._TooltipService_0_5);
    this.compView_0.create(this._ChartComponent_0_6.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import10.ComponentRef_<any>(0,this,this._el_0,this._ChartComponent_0_6.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import7.TooltipService) && (0 === requestNodeIndex))) { return this._TooltipService_0_5; }
    if (((token === import0.ChartComponent) && (0 === requestNodeIndex))) { return this._ChartComponent_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._ChartComponent_0_6.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._ChartComponent_0_6.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
}
export const ChartComponentNgFactory:import10.ComponentFactory<import0.ChartComponent> = new import10.ComponentFactory<import0.ChartComponent>('ngx-charts-chart',View_ChartComponent_Host0,import0.ChartComponent);
const styles_ChartComponent:any[] = ([] as any[]);
var ChartComponent_animationState_states:any = {
  '*': {},
  'void': {}
}
;
function ChartComponent_animationState_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import12.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'animationState'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = ChartComponent_animationState_states['*'];
  var startStateStyles:any = ChartComponent_animationState_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = ChartComponent_animationState_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {'opacity': '0'}
      ]
      )),[
        new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{'opacity': '0'}]))),
        new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{'opacity': '1'}])))
      ]
    ,500,100,(null as any),previousPlayers)]);
    totalTime = 600;
  }
  if ((player == (null as any))) { (player = new import17.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import15.renderStyles(element,view.renderer,import15.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import13.AnimationSequencePlayer(previousPlayers).destroy();
  import15.renderStyles(element,view.renderer,import15.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'animationState',player);
  return new import12.AnimationTransition(player,currentState,nextState,totalTime);
}
var renderType_ChartComponent:import4.RenderComponentType = import3.createRenderComponentType('',1,import5.ViewEncapsulation.None,styles_ChartComponent,{animationState: ChartComponent_animationState_factory});
export class View_ChartComponent0 extends import2.AppView<import0.ChartComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import6.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import18.Wrapper_NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import6.ViewContainer;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import18.Wrapper_NgIf;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ChartComponent0,renderType_ChartComponent,import8.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckOnce);
    this._expr_18 = import1.UNINITIALIZED;
    this._expr_19 = import1.UNINITIALIZED;
    this._expr_20 = import1.UNINITIALIZED;
    this._expr_21 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import10.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,':svg:svg',new import3.InlineArray2(2,'class','ngx-charts'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this.projectNodes(this._el_3,0);
    this._text_5 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_6 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_7 = new import6.ViewContainer(7,1,this,this._anchor_7);
    this._TemplateRef_7_5 = new import19.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import18.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_9 = new import6.ViewContainer(9,1,this,this._anchor_9);
    this._TemplateRef_9_5 = new import19.TemplateRef_(this,9,this._anchor_9);
    this._NgIf_9_6 = new import18.Wrapper_NgIf(this._vc_9.vcRef,this._TemplateRef_9_5);
    this._text_10 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._text_11
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import20.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import19.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import20.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_19:any = 'active';
    if (import3.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_1,((this._expr_19 == import1.UNINITIALIZED)? 'void': this._expr_19),((currVal_19 == import1.UNINITIALIZED)? 'void': currVal_19));
      this._expr_19 = currVal_19;
    }
    const currVal_7_0_0:any = (this.context.showLegend && (this.context.legendType === 'scaleLegend'));
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_9_0_0:any = (this.context.showLegend && (this.context.legendType === 'legend'));
    this._NgIf_9_6.check_ngIf(currVal_9_0_0,throwOnChange,false);
    this._NgIf_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    const currVal_18:any = this.context.view[0];
    if (import3.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementStyle(this._el_1,'width',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_18) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_18).toString() + 'px')));
      this._expr_18 = currVal_18;
    }
    const currVal_20:any = this.context.chartWidth;
    if (import3.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementAttribute(this._el_3,'width',((currVal_20 == null)? (null as any): currVal_20.toString()));
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = this.context.view[1];
    if (import3.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementAttribute(this._el_3,'height',((currVal_21 == null)? (null as any): currVal_21.toString()));
      this._expr_21 = currVal_21;
    }
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
    this._vc_9.destroyNestedViews();
  }
  detachInternal():void {
    var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_1,this._expr_19,'void');
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 7)) { return new View_ChartComponent1(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    if ((nodeIndex == 9)) { return new View_ChartComponent2(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    return (null as any);
  }
}
class View_ChartComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import22.ScaleLegendComponent>;
  _ScaleLegendComponent_0_3:import23.Wrapper_ScaleLegendComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import6.ViewContainer) {
    super(View_ChartComponent1,renderType_ChartComponent,import8.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import10.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'ngx-charts-scale-legend',new import3.InlineArray2(2,'class','chart-legend'),(null as any));
    this.compView_0 = new import23.View_ScaleLegendComponent0(this.viewUtils,this,0,this._el_0);
    this._ScaleLegendComponent_0_3 = new import23.Wrapper_ScaleLegendComponent(this.parentView.parentView.injectorGet(import24.DomSanitizer,this.parentView.parentIndex));
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._ScaleLegendComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.ScaleLegendComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._ScaleLegendComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.legendOptions.domain;
    this._ScaleLegendComponent_0_3.check_valueRange(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.legendOptions.colors;
    this._ScaleLegendComponent_0_3.check_colors(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.view[1];
    this._ScaleLegendComponent_0_3.check_height(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.legendWidth;
    this._ScaleLegendComponent_0_3.check_width(currVal_0_0_3,throwOnChange,false);
    if (this._ScaleLegendComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_ChartComponent2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import25.LegendComponent>;
  _LegendComponent_0_3:import26.Wrapper_LegendComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import6.ViewContainer) {
    super(View_ChartComponent2,renderType_ChartComponent,import8.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import10.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'ngx-charts-legend',new import3.InlineArray2(2,'class','chart-legend'),(null as any));
    this.compView_0 = new import26.View_LegendComponent0(this.viewUtils,this,0,this._el_0);
    this._LegendComponent_0_3 = new import26.Wrapper_LegendComponent(this.compView_0.ref,this.parentView.parentView.injectorGet(import27.NgZone,this.parentView.parentIndex));
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._LegendComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray8(6,'labelClick',(null as any),'labelActivate',(null as any),'labelDeactivate',(null as any)),this.eventHandler(this.handleEvent_0));
    this._LegendComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true,true,true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.LegendComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._LegendComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.legendOptions.domain;
    this._LegendComponent_0_3.check_data(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.legendTitle;
    this._LegendComponent_0_3.check_title(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.legendOptions.colors;
    this._LegendComponent_0_3.check_colors(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.view[1];
    this._LegendComponent_0_3.check_height(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.legendWidth;
    this._LegendComponent_0_3.check_width(currVal_0_0_4,throwOnChange,false);
    const currVal_0_0_5:any = this.parentView.context.activeEntries;
    this._LegendComponent_0_3.check_activeEntries(currVal_0_0_5,throwOnChange,false);
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
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'labelClick')) {
      const pd_sub_0:any = ((<any>this.parentView.context.legendLabelClick.emit($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'labelActivate')) {
      const pd_sub_1:any = ((<any>this.parentView.context.legendLabelActivate.emit($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'labelDeactivate')) {
      const pd_sub_2:any = ((<any>this.parentView.context.legendLabelDeactivate.emit($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}