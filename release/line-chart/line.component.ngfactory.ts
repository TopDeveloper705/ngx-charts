/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/line-chart/line.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/animation/animation_transition';
import * as import10 from '@angular/core/src/animation/animation_sequence_player';
import * as import11 from '@angular/core/src/animation/animation_styles';
import * as import12 from '@angular/core/src/animation/animation_style_util';
import * as import13 from '@angular/core/src/animation/animation_keyframe';
import * as import14 from '@angular/core/src/animation/animation_player';
export class Wrapper_Line {
  /*private*/ _eventHandler:Function;
  context:import0.Line;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.Line(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_path(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.path = currValue;
      this._changes['path'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_stroke(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.stroke = currValue;
      this._changes['stroke'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
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
var renderType_Line_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_Line_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.Line>;
  _Line_0_3:Wrapper_Line;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Line_Host0,renderType_Line_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'line',''),rootSelector,(null as any));
    this.compView_0 = new View_Line0(this.viewUtils,this,0,this._el_0);
    this._Line_0_3 = new Wrapper_Line(new import8.ElementRef(this._el_0));
    this.compView_0.create(this._Line_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._Line_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Line) && (0 === requestNodeIndex))) { return this._Line_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Line_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._Line_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const LineNgFactory:import7.ComponentFactory<import0.Line> = new import7.ComponentFactory<import0.Line>('g[line]',View_Line_Host0,import0.Line);
const styles_Line:any[] = ([] as any[]);
var Line_animationState_states:any = {
  '*': {},
  void: {}
}
;
function Line_animationState_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import9.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,'animationState',(nextState == 'void'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = Line_animationState_states['*'];
  var startStateStyles:any = Line_animationState_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = Line_animationState_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import10.AnimationSequencePlayer([view.renderer.animate(element,new import11.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          strokeDasharray: '2000',
          strokeDashoffset: '2000'
        }

      ]
      )),[
        new import13.AnimationKeyframe(0,new import11.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[{strokeDashoffset: '2000'}]))),
        new import13.AnimationKeyframe(1,new import11.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[{strokeDashoffset: '0'}])))
      ]
    ,1000,0,(null as any),previousPlayers)]);
    totalTime = 1000;
  }
  if ((player == (null as any))) { (player = new import14.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import12.renderStyles(element,view.renderer,import12.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import10.AnimationSequencePlayer(previousPlayers).destroy();
  import12.renderStyles(element,view.renderer,import12.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'animationState',player);
  return new import9.AnimationTransition(player,currentState,nextState,totalTime);
}
var renderType_Line:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_Line,{animationState: Line_animationState_factory});
export class View_Line0 extends import2.AppView<import0.Line> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Line0,renderType_Line,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:path',new import3.InlineArray8(6,'class','line','fill','none','stroke-width','1.5px'),(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3:any = 'active';
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_1,((this._expr_3 == import1.UNINITIALIZED)? 'void': this._expr_3),((currVal_3 == import1.UNINITIALIZED)? 'void': currVal_3));
      animationTransition_animationState.onStart(import3.noop.bind(this).bind(this,'@animationState.start'));
      animationTransition_animationState.onDone(import3.noop.bind(this).bind(this,'@animationState.done'));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.path;
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_1,'d',((currVal_4 == null)? (null as any): currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.stroke;
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementAttribute(this._el_1,'stroke',((currVal_5 == null)? (null as any): currVal_5.toString()));
      this._expr_5 = currVal_5;
    }
  }
  detachInternal():void {
    var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_1,this._expr_3,'void');
    animationTransition_animationState.onStart(import3.noop.bind(this).bind(this,'@animationState.start'));
    animationTransition_animationState.onDone(import3.noop.bind(this).bind(this,'@animationState.done'));
  }
}