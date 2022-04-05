import{fG as m,a8 as o,g as u,n as f,cR as p,gN as w,aH as _,ac as y,ae as V}from"./vendor.1dc52be5.js";import{f as v}from"./LayerView2D.117f6ba5.js";import{i as c}from"./GraphicContainer.6ad8253a.js";import{r as g}from"./BaseGraphicContainer.875f1ac5.js";import"./Container.a479a20a.js";import"./EffectView.c4d390fc.js";import"./Utils.25ecb0e0.js";import"./enums.c01b5663.js";import"./number.dc47462b.js";import"./CIMSymbolHelper.e5777d0e.js";import"./BidiEngine.b9926823.js";import"./alignmentUtils.03ee467b.js";import"./definitions.52b5fae8.js";import"./GeometryUtils.e53da643.js";import"./normalizeUtilsSync.74de1b64.js";import"./FeatureContainer.183e9c44.js";import"./visualVariablesUtils.7fd15dde.js";import"./visualVariablesUtils.2f752113.js";import"./TileContainer.c6767449.js";import"./WGLContainer.5147bf48.js";import"./brushes.576aab26.js";import"./ProgramTemplate.baf6faf0.js";import"./StyleDefinition.57b891ae.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.4c6f010e.js";import"./Matcher.28a7d10a.js";import"./tileUtils.85af3d89.js";import"./TileClipper.95bbf067.js";import"./Geometry.e891c191.js";import"./cimAnalyzer.13178822.js";import"./ExpandedCIM.b5e8a891.js";import"./schemaUtils.64b2d47a.js";import"./createSymbolSchema.d85b2a0c.js";import"./MD5.67d7a872.js";import"./util.2009583e.js";import"./ComputedAttributeStorage.96ac9ebb.js";import"./GraphicsView.eb98715d.js";const d="sublayers",n="layerView",C=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends v(m){constructor(){super(...arguments),this._highlightIds=new Map}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){o(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():o(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){const e=Array.from(this.graphicsViews(),async r=>{const a=await r.hitTest(i);if(o(this._graphicsViewsFeatureCollectionMap)){const s=this._graphicsViewsFeatureCollectionMap.get(r);for(const h of a)!h.popupTemplate&&s.popupTemplate&&(h.popupTemplate=s.popupTemplate)}return a});return(await Promise.all(e)).flat()}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):f.isCollection(i)&&(t=i.map(e=>e&&e.uid).toArray()),t=t.filter(e=>e!=null),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t)}}):C}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(o(e)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of e){const a=new c(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const s=new g({view:i,graphics:r.source,renderer:r.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(s,r),this.container.addChild(s.container),this.handles.add([p(r,"visible",h=>s.container.visible=h),p(s,"updating",()=>this.notifyChange("updating"))],n)}this._updateHighlight()}else o(this.layer.sublayers)&&this.handles.add(w(this.layer,"sublayers","change",()=>this._createGraphicsViews(),()=>this._createGraphicsViews(),()=>this._destroyGraphicsViews()),d)}detach(){this._destroyGraphicsViews(),this.handles.remove(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),_(this.layer.sublayers))return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const r of this.layer.sublayers){const a=new c(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const s=new g({view:t,graphics:r.graphics,requestUpdateCallback:e,container:a});this.handles.add([r.on("graphic-update",s.graphicUpdateHandler),p(r,"visible",h=>s.container.visible=h),p(s,"updating",()=>this.notifyChange("updating"))],n),this.container.addChild(s.container),i.push(s)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=y([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const hi=l;export{hi as default};