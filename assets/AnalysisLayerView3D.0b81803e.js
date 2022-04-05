import{fF as w,fG as u,n as c,a8 as o,V as y,a$ as m,aH as V,hG as p,ac as n,ad as r,ae as f}from"./vendor.1dc52be5.js";const d="analysis-view-handles";let i=class extends w(u){constructor(e){super(e),this.type="analysis-3d",this.allAnalysisViews=new c,this._creatingViewCount=0,this._analysisViewCreationTasks=new Map,this._analysisModules={"area-measurement":{module:null},"direct-line-measurement":{module:null},"line-of-sight":{module:null},slice:{module:null}}}initialize(){for(const e of this.layer.analyses)this._createAnalysisView(e);this.handles.add([this.layer.analyses.on("after-add",e=>{this._createAnalysisView(e.item)}),this.layer.analyses.on("after-remove",e=>{const s=this.allAnalysisViews.removeAt(this.allAnalysisViews.findIndex(t=>t.analysis===e.item));o(s)&&s.destroy();const a=this._analysisViewCreationTasks.get(e.item);o(a)&&(a.abort(),this._analysisViewCreationTasks.delete(e.item))})],d)}destroy(){this.handles.remove(d),this.allAnalysisViews.drain(e=>e.destroy()),this._analysisViewCreationTasks.clear(),this._creatingViewCount=0}whenAnalysisView(e){const s=this._analysisViewCreationTasks.get(e);if(o(s))return s.promise;const a=new y("layerview:no-analysisview-for-analysis","The analysis has not been added to the AnalysisLayer of this layer view",{analysis:e});return Promise.reject(a)}isUpdating(){return this._creatingViewCount!==0||this.allAnalysisViews.some(e=>e.updating)}_createAnalysisView(e){this._analysisViewCreationTasks.set(e,m(s=>this._createAnalysisViewPromise(e,s)))}async _createAnalysisViewPromise(e,s){this._creatingViewCount+=1;const a=e.type,t=this._analysisModules[a];if(V(t.module)){const h=await this._loadAnalysisModule(a);t.module=h}const l=new t.module.default({analysis:e,view:this.view,parent:this});if(await l.when(),this._creatingViewCount-=1,p(s))throw l.destroy(),new y("layerview:no-analysisview-for-analysis","The analysis has not been added to the AnalysisLayer of this layer view",{analysis:e});return this.allAnalysisViews.add(l),l}_loadAnalysisModule(e){switch(e){case"area-measurement":return import("./AreaMeasurementAnalysisView3D.fba113cd.js").then(function(s){return s.A});case"direct-line-measurement":return import("./DirectLineMeasurementAnalysisView3D.db30e025.js").then(function(s){return s.D});case"line-of-sight":return import("./LineOfSightAnalysisView3D.cf6cff63.js");case"slice":return import("./SliceAnalysisView3D.62885e3d.js");default:return null}}};n([r()],i.prototype,"type",void 0),n([r()],i.prototype,"layer",void 0),n([r()],i.prototype,"allAnalysisViews",void 0),n([r()],i.prototype,"_creatingViewCount",void 0),i=n([f("esri.views.3d.layers.AnalysisLayerView3D")],i);const A=i;export{A as default};