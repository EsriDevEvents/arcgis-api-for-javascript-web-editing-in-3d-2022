var D=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var C=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))$.call(t,r)&&C(e,r,t[r]);if(O)for(var r of O(t))E.call(t,r)&&C(e,r,t[r]);return e},p=(e,t)=>N(e,P(t));import{k as M,hP as Q,g as Z,a8 as c,id as I,ac as a,ad as l,ae as g,aN as w,aH as S,lT as j,g5 as A,hH as H,lU as U,lV as T,aa as x,fF as k,fG as L,c as q,fQ as R,cP as v,i1 as V,fH as J,f4 as B,kx as Y,V as z}from"./vendor.1dc52be5.js";import{A as G,E as K,O as W}from"./FeatureLikeLayerView3D.d5cf1831.js";import{r as X}from"./EventedSet.41265e0c.js";import{O as ee}from"./FeatureLayerView.70ac15e3.js";import{i as te}from"./RefreshableLayerView.3b33c0ca.js";class re{constructor(t){this._schedule=t,this._handle=new se(t)}destroy(){this._handle.destroy()}invoke(t,r){return t.buffer&&t.buffer.byteLength!==0?(t.options.sourceSpatialReference&&t.options.sourceSpatialReference instanceof M&&(t.options=p(d({},t.options),{sourceSpatialReference:t.options.sourceSpatialReference.toJSON()})),this._handle.invoke(t,r).then(s=>this._schedule(()=>{if(s.spatialReference=M.fromJSON(s.spatialReference),s.fields)for(let i=0;i<s.fields.length;i++)s.fields[i]=Q.fromJSON(s.fields[i]);const o=s.spatialReference;for(const i of s.features)i.uid=Z.generateUID(),c(i.geometry)&&(i.geometry.spatialReference=o);return s}))):Promise.resolve(null)}}class se extends I{constructor(t){super("PBFDecoderWorker","_parseFeatureQuery",t)}getTransferList(t){return[t.buffer]}}let y=class extends w{constructor(e){super(e)}get queryFeaturesDehydrated(){const e=this.layer.capabilities,t=e&&e.query;if(t&&t.supportsFormatPBF){var r,s;S(this._decoder)&&(this._decoder=new re(this.schedule));const o={sourceSpatialReference:(r=(s=this.layer.spatialReference)==null?void 0:s.toJSON())!=null?r:null,applyTransform:!0,maxStringAttributeLength:1024};return(i,u)=>j(this.layer.parsedUrl,i,"pbf",this._createRequestOptions(u)).then(h=>(A(u),c(this._decoder)?this._decoder.invoke({buffer:h.data,options:o},u.signal):Promise.reject(H())))}return(o,i)=>U(this.layer.parsedUrl,o,this.layer.spatialReference,this._createRequestOptions(i)).then(u=>T(u.data))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}destroy(){this._decoder=x(this._decoder)}_createRequestOptions(e){return p(d({},e),{query:d(p(d({},this.layer.customParameters),{token:this.layer.apiKey}),e==null?void 0:e.query)})}};a([l({constructOnly:!0})],y.prototype,"layer",void 0),a([l({constructOnly:!0})],y.prototype,"schedule",void 0),a([l({readOnly:!0})],y.prototype,"queryFeaturesDehydrated",null),y=a([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],y);let m=class extends w{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};a([l({constructOnly:!0})],m.prototype,"layer",void 0),a([l({readOnly:!0})],m.prototype,"queryFeaturesDehydrated",null),m=a([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],m);let b=class extends w{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}};a([l({constructOnly:!0})],b.prototype,"layer",void 0),b=a([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],b);let f=class extends w{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.source.queryFeaturesJSON(e,t).then(T,r=>{if(r&&r.name==="query-features-json:unsupported")return this.layer.queryFeatures(e,t);throw r})}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};function ie(e,t){return e.type==="feature"&&e.source.type==="feature-layer"?c(e.infoFor3D)?new m({layer:e}):new y({layer:e,schedule:t}):e.type==="feature"&&e.source.type==="memory"||e.type==="csv"||e.type==="geojson"||e.type==="wfs"?new f({layer:e,source:e.source}):e.type==="ogc-feature"?new b({layer:e}):null}a([l({constructOnly:!0})],f.prototype,"layer",void 0),a([l({constructOnly:!0})],f.prototype,"source",void 0),f=a([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],f);class ae{constructor(t){this._memoryCache=null,this._capabilities=null;const r=t.layerView.layer;this.layerView=t.layerView,this.objectIdField=r.objectIdField,this.globalIdField="globalIdField"in r?r.globalIdField:null,this.returnZ=t.returnZ,this.returnM=t.returnM;const s=this.layerView.view.resourceController;this.query=ie(r,o=>s.schedule(o)),s&&this.memoryCacheEnabled&&(this._memoryCache=s.memoryController.newCache(r.uid))}get memoryCacheEnabled(){switch(this.layerView.layer.source.type){case"feature-layer":case"ogc-feature":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=x(this._memoryCache),this.query.destroy()}createQuery(){const t=this.layerView.layer.createQuery();return t.outFields=this.layerView.availableFields,t.returnZ=this.returnZ,t.returnM=this.returnM,t.outSpatialReference=this.tilingScheme.spatialReference,t}get memoryCache(){return this._memoryCache}get viewingMode(){return this.layerView.view.state.viewingMode}get tilingScheme(){return this.layerView.view.featureTiles.tilingScheme}get scheduler(){const t=this.layerView.view.resourceController;return t?t.scheduler:null}get geometryType(){return this.layerView.layer.geometryType}get fullExtent(){return this.layerView.layer.fullExtent}get tileMaxRecordCount(){return this.layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this.layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return c(this._capabilities)||(this._capabilities=G(this.layerView.layer)),this._capabilities}logFetchError(t,r){t.error("#fetchTile()",this.layerView.layer,r&&r.message?r.message:r)}}let n=class extends te(K(ee(k(L)))){constructor(e){super(e),this._controllerTotal=0,this._processorTotal=0,this.suspendResumeExtentMode="data"}initialize(){this.updatingHandles.add(()=>this.view.floors,()=>this.processor.filterVisibility.filterChanged()),this.handles.add(q(()=>this._updatingRequiredFieldsPromise,e=>this.updatingHandles.addPromise(e),R))}destroy(){this.updatingHandles.removeAll(),this.handles.removeAll(),this.fetcherContext=x(this.fetcherContext)}get maximumNumberOfFeatures(){var e,t;return(e=(t=this.controller)==null?void 0:t.maximumNumberOfFeatures)!=null?e:this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var e,t;let r=0;if((e=this.controller)!=null&&e.updating){const o=this.controller.updatingRemaining,i=Math.max(this.controller.updatingTotal,this._controllerTotal);i>0&&(r=(i-o)/i,this._controllerTotal=i)}let s=0;if((t=this.processor)!=null&&t.updating){const o=this.processor.updatingRemaining,i=Math.max(o,this._processorTotal);i>0&&(s=(i-o)/i,this._processorTotal=i)}return .5*(r+s)}get updatePolicy(){if(!this.controller)return v.ASYNC;switch(this.controller.mode){case"snapshot":{const e=oe[this.layer.geometryType];return e==null||this.controller.serviceDataCount>e?v.ASYNC:v.SYNC}case"tiles":return v.ASYNC}}get hasZ(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in e&&e.returnZ!=null?e.returnZ:t.supportsZ)}get hasM(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in e&&e.returnM!=null&&e.returnM}setVisibility(e,t){var r;(r=this.processor)==null||r.setObjectIdVisibility(e,t)}createQuery(){return super.createQuery()}queryFeatures(e,t){const r=()=>super.queryFeatures(e,t);return this.layer.geometryType==="mesh"?this._queryFeaturesMesh(this._ensureQuery(e),r):r()}beforeSetController(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}createController(){this.fetcherContext=new ae({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const e=new W({layerView:this,context:this.fetcherContext,graphics:new X,extent:this.clippingExtent});return this.updatingHandles.add(()=>e.serviceDataExtent,t=>{this.processor&&(this.processor.dataExtent=t)},V),this.handles.add(q(()=>this.suspended,t=>{t?e.suspend():e.resume()},R)),this.updatingHandles.add(()=>{var t;return(t=this.processor)==null?void 0:t.displayFeatureLimit},t=>e.displayFeatureLimit=t,V),this.handles.add(J(()=>!this.updating,()=>{this._controllerTotal=0,this._processorTotal=0})),e}async doRefresh(e){e&&!this.suspended&&this.controller&&this.controller.refetch(),this.processor.filterVisibility.dirty=!0}getUsedMemory(){var e,t,r,s;return((e=(t=this.processor)==null?void 0:t.usedMemory)!=null?e:0)+((r=(s=this.controller)==null?void 0:s.memoryForUnusedFeatures)!=null?r:0)}getUnloadedMemory(){var e,t,r,s,o;return((e=(t=this.processor)==null?void 0:t.unprocessedMemoryEstimate)!=null?e:0)+((r=((s=this.controller)==null?void 0:s.expectedFeatureDiff)*((o=this.processor)==null?void 0:o.usedMemoryPerFeature))!=null?r:0)}ignoresMemoryFactor(){var e;return(e=this.controller)==null?void 0:e.hasMaximumNumberOfFeaturesOverride}async _queryFeaturesMesh(e,t){await this._validateQueryFeaturesMesh(e);const r=await t();if(e&&e.outStatistics||S(this.graphics3DProcessor))return r;const s=this.layer.objectIdField,o=this.graphics3DProcessor.graphics3DGraphicsByObjectID,i=[];for(const u of r.features)if(u.geometry){const h=o.get(u.attributes[s]);h&&(u.geometry=B(h.graphic.geometry),i.push(u))}else i.push(u);return r.features=i,r}async _validateQueryFeaturesMesh(e){if(!e)return;const t=s=>{throw new z("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${s}'`)},r=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const s of r)e[s]!=null&&t(s);"returnM"in e&&e.returnM&&t("returnM"),"returnCentroid"in e&&e.returnCentroid&&t("returnCentroid"),c(e.outSpatialReference)&&!e.outSpatialReference.equals(this.view.spatialReference)&&t("outSpatialReference")}get performanceInfo(){var e,t,r,s,o;const i=(e=this.controller)==null?void 0:e.displayFeatureLimit,u=c(i)&&i.averageSymbolComplexity,h=c(u)?`f:${u.primitivesPerFeature},v:${u.primitivesPerCoordinate}`:"n/a",F=p(d({},this._getResourceInfo()),{storedFeatures:0,totalVertices:0,partial:this.maximumNumberOfFeaturesExceeded,mode:(t=(r=this.controller)==null?void 0:r.mode)!=null?t:"n/a",symbolComplexity:h,nodes:(s=(o=this.controller)==null?void 0:o.tileDescriptors.length)!=null?s:0});if(this.controller&&F.displayedNumberOfFeatures){const _=this.controller.debug;F.storedFeatures=_.storedFeatures,F.totalVertices=_.totalVertices}return F}get test(){return{updatePolicy:this.updatePolicy,controller:this.controller}}};a([l()],n.prototype,"layer",void 0),a([l()],n.prototype,"controller",void 0),a([l()],n.prototype,"_controllerTotal",void 0),a([l()],n.prototype,"_processorTotal",void 0),a([l()],n.prototype,"maximumNumberOfFeatures",null),a([l()],n.prototype,"maximumNumberOfFeaturesExceeded",null),a([l(Y)],n.prototype,"updatingProgress",void 0),a([l({readOnly:!0})],n.prototype,"updatingProgressValue",null),a([l({readOnly:!0})],n.prototype,"updatePolicy",null),a([l({readOnly:!0})],n.prototype,"hasZ",null),a([l({readOnly:!0})],n.prototype,"hasM",null),a([l()],n.prototype,"suspendResumeExtentMode",void 0),n=a([g("esri.views.3d.layers.FeatureLayerViewBase3D")],n);const oe={point:5e3,polygon:500,polyline:1e3},ye=n;export{ye as w};