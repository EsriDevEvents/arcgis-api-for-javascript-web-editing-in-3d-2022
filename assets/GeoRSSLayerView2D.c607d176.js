import{fG as c,cR as p,hh as g,n as w,l4 as f,u6 as u,u7 as l,ac as d,ae as V}from"./vendor.1dc52be5.js";import{f as b}from"./LayerView2D.117f6ba5.js";import{i as S}from"./GraphicContainer.6ad8253a.js";import{r as v}from"./BaseGraphicContainer.875f1ac5.js";import"./Container.a479a20a.js";import"./EffectView.c4d390fc.js";import"./Utils.25ecb0e0.js";import"./enums.c01b5663.js";import"./number.dc47462b.js";import"./CIMSymbolHelper.e5777d0e.js";import"./BidiEngine.b9926823.js";import"./alignmentUtils.03ee467b.js";import"./definitions.52b5fae8.js";import"./GeometryUtils.e53da643.js";import"./normalizeUtilsSync.74de1b64.js";import"./FeatureContainer.183e9c44.js";import"./visualVariablesUtils.7fd15dde.js";import"./visualVariablesUtils.2f752113.js";import"./TileContainer.c6767449.js";import"./WGLContainer.5147bf48.js";import"./brushes.576aab26.js";import"./ProgramTemplate.baf6faf0.js";import"./StyleDefinition.57b891ae.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.4c6f010e.js";import"./Matcher.28a7d10a.js";import"./tileUtils.85af3d89.js";import"./TileClipper.95bbf067.js";import"./Geometry.e891c191.js";import"./cimAnalyzer.13178822.js";import"./ExpandedCIM.b5e8a891.js";import"./schemaUtils.64b2d47a.js";import"./createSymbolSchema.d85b2a0c.js";import"./MD5.67d7a872.js";import"./util.2009583e.js";import"./ComputedAttributeStorage.96ac9ebb.js";import"./GraphicsView.eb98715d.js";let m=class extends b(c){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,t){if(!this.graphicsViews.length)return null;const a=this.graphicsViews.reverse().map(i=>i.hitTest(e));return(await Promise.all(a)).flat().filter((i,r)=>(i&&(i.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),i.layer=this.layer,i.sourceLayer=this.layer),!!i))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.handles.add([p(this.layer,"featureCollections",e=>{this._clear();for(const{popupInfo:t,featureSet:a,layerDefinition:i}of e){const r=g.fromJSON(a),h=new w(r.features),n=i.drawingInfo,y=t?f.fromJSON(t):null,s=u(n.renderer),o=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:h,renderer:s,container:new S(this.view.featuresTilingScheme)});this._graphicsViewMap[r.geometryType]=o,this._popupTemplates.set(o,y),r.geometryType!=="polygon"||this.layer.polygonSymbol?r.geometryType!=="polyline"||this.layer.lineSymbol?r.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(o),this.container.addChild(o.container)}}),p(this.layer,"polygonSymbol",e=>{this._graphicsViewMap.polygon.renderer=new l({symbol:e})}),p(this.layer,"lineSymbol",e=>{this._graphicsViewMap.polyline.renderer=new l({symbol:e})}),p(this.layer,"pointSymbol",e=>{this._graphicsViewMap.point.renderer=new l({symbol:e})})],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};m=d([V("esri.views.2d.layers.GeoRSSLayerView2D")],m);const pe=m;export{pe as default};