/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/pie-chart/pie-label.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/animation/animation_transition';
import * as import11 from '@angular/core/src/animation/animation_sequence_player';
import * as import12 from '@angular/core/src/animation/animation_styles';
import * as import13 from '@angular/core/src/animation/animation_style_util';
import * as import14 from '@angular/core/src/animation/animation_keyframe';
import * as import15 from '@angular/core/src/animation/animation_player';
import * as import16 from '@angular/core/src/security';
export class Wrapper_PieLabelComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PieLabelComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.PieLabelComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_radius(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.radius = currValue;
      this._changes['radius'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_label(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.label = currValue;
      this._changes['label'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_color(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.color = currValue;
      this._changes['color'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_max(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.max = currValue;
      this._changes['max'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_value(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.value = currValue;
      this._changes['value'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_explodeSlices(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.explodeSlices = currValue;
      this._changes['explodeSlices'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
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
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_PieLabelComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PieLabelComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PieLabelComponent>;
  _PieLabelComponent_0_3:Wrapper_PieLabelComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieLabelComponent_Host0,renderType_PieLabelComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'ngx-charts-pie-label',''),rootSelector,(null as any));
    this.compView_0 = new View_PieLabelComponent0(this.viewUtils,this,0,this._el_0);
    this._PieLabelComponent_0_3 = new Wrapper_PieLabelComponent(new import9.ElementRef(this._el_0));
    this.compView_0.create(this._PieLabelComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._PieLabelComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PieLabelComponent) && (0 === requestNodeIndex))) { return this._PieLabelComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._PieLabelComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PieLabelComponentNgFactory:import8.ComponentFactory<import0.PieLabelComponent> = new import8.ComponentFactory<import0.PieLabelComponent>('g[ngx-charts-pie-label]',View_PieLabelComponent_Host0,import0.PieLabelComponent);
const styles_PieLabelComponent:any[] = ([] as any[]);
var PieLabelComponent_animationState_states:any = {
  '*': {},
  'void': {}
}
;
function PieLabelComponent_animationState_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import10.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'animationState'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = PieLabelComponent_animationState_states['*'];
  var startStateStyles:any = PieLabelComponent_animationState_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = PieLabelComponent_animationState_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import11.AnimationSequencePlayer([view.renderer.animate(element,new import12.AnimationStyles(import13.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {'opacity': '0'}
      ]
      )),[
        new import14.AnimationKeyframe(0,new import12.AnimationStyles(import13.collectAndResolveStyles(collectedStyles,[{'opacity': '0'}]))),
        new import14.AnimationKeyframe(1,new import12.AnimationStyles(import13.collectAndResolveStyles(collectedStyles,[{'opacity': '1'}])))
      ]
    ,250,1000,(null as any),previousPlayers)]);
    totalTime = 1250;
  }
  if ((player == (null as any))) { (player = new import15.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import13.renderStyles(element,view.renderer,import13.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import11.AnimationSequencePlayer(previousPlayers).destroy();
  import13.renderStyles(element,view.renderer,import13.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'animationState',player);
  return new import10.AnimationTransition(player,currentState,nextState,totalTime);
}
var renderType_PieLabelComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_PieLabelComponent,{'animationState': PieLabelComponent_animationState_factory});
export class View_PieLabelComponent0 extends import2.AppView<import0.PieLabelComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieLabelComponent0,renderType_PieLabelComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
    this._expr_16 = import1.UNINITIALIZED;
    this._expr_17 = import1.UNINITIALIZED;
    this._expr_18 = import1.UNINITIALIZED;
    this._expr_19 = import1.UNINITIALIZED;
    this._expr_20 = import1.UNINITIALIZED;
    this._expr_21 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'title',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:text',new import3.InlineArray4(4,'class','pie-label','dy','.35em'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:path',new import3.InlineArray4(4,'class','line','fill','none'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_11:any = 'active';
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_4,((this._expr_11 == import1.UNINITIALIZED)? 'void': this._expr_11),((currVal_11 == import1.UNINITIALIZED)? 'void': currVal_11));
      this._expr_11 = currVal_11;
    }
    const currVal_17:any = 'active';
    if (import3.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_7,((this._expr_17 == import1.UNINITIALIZED)? 'void': this._expr_17),((currVal_17 == import1.UNINITIALIZED)? 'void': currVal_17));
      this._expr_17 = currVal_17;
    }
    const currVal_10:any = import3.inlineInterpolate(1,'',this.context.label,'');
    if (import3.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setText(this._text_2,currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_12:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementAttribute(this._el_4,'transform',((currVal_12 == null)? (null as any): currVal_12.toString()));
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this.context.textAnchor();
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementStyle(this._el_4,'textAnchor',((this.viewUtils.sanitizer.sanitize(import16.SecurityContext.STYLE,currVal_13) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import16.SecurityContext.STYLE,currVal_13).toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = 'crispEdges';
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementStyle(this._el_4,'shapeRendering',((this.viewUtils.sanitizer.sanitize(import16.SecurityContext.STYLE,currVal_14) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import16.SecurityContext.STYLE,currVal_14).toString()));
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = 'uppercase';
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementStyle(this._el_4,'textTransform',((this.viewUtils.sanitizer.sanitize(import16.SecurityContext.STYLE,currVal_15) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import16.SecurityContext.STYLE,currVal_15).toString()));
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = import3.inlineInterpolate(1,'\n      ',this.context.trimLabel(this.context.label,10),'\n    ');
    if (import3.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setText(this._text_5,currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_18:any = this.context.line;
    if (import3.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementAttribute(this._el_7,'d',((currVal_18 == null)? (null as any): currVal_18.toString()));
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this.context.color;
    if (import3.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementAttribute(this._el_7,'stroke',((currVal_19 == null)? (null as any): currVal_19.toString()));
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = 2000;
    if (import3.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementStyle(this._el_7,'strokeDasharray',((this.viewUtils.sanitizer.sanitize(import16.SecurityContext.STYLE,currVal_20) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import16.SecurityContext.STYLE,currVal_20).toString()));
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = 0;
    if (import3.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementStyle(this._el_7,'strokeDashoffset',((this.viewUtils.sanitizer.sanitize(import16.SecurityContext.STYLE,currVal_21) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import16.SecurityContext.STYLE,currVal_21).toString()));
      this._expr_21 = currVal_21;
    }
  }
  detachInternal():void {
    var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_4,this._expr_11,'void');
    var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_7,this._expr_17,'void');
  }
}