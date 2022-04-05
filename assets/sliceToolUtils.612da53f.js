var zt=Object.defineProperty;var je=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,Ut=Object.prototype.propertyIsEnumerable;var xe=(t,e,i)=>e in t?zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,be=(t,e)=>{for(var i in e||(e={}))kt.call(e,i)&&xe(t,i,e[i]);if(je)for(var i of je(e))Ut.call(e,i)&&xe(t,i,e[i]);return t};import{bU as $,bV as gt,eg as Wt,eh as Vt,ei as Gt,bW as _,bS as qt,ej as Bt,ek as Ht,el as F,ac as w,bX as j,dm as x,em as te,bY as pt,b_ as ft,b$ as mt,en as _t,eo as Yt,ep as bt,eq as Xt,er as Zt,c1 as vt,es as Qt,et as Jt,eu as Kt,ev as le,ew as ei,ex as ti,c4 as yt,ey as ii,bZ as Et,bm as si,av as G,am as S,ez as Tt,eA as wt,eB as Oe,eC as ri,cj as H,eD as Ot,c6 as ai,eE as ni,eF as oi,eG as ci,eH as li,c7 as q,as as L,bx as R,eI as di,eJ as hi,cg as ui,cA as St,bt as gi,j as ie,eK as pi,c5 as V,dY as k,aS as fi,b3 as $t,dU as mi,eL as _i,eM as bi,eN as Ne,a8 as P,dv as vi,eO as At,dy as ve,aH as T,eP as Me,eQ as De,by as Se,dz as ze,cq as Y,eR as yi,cJ as ke,cZ as f,eS as Ue,bl as de,e9 as Ei,e2 as Ti,eT as wi,eU as Oi,cO as Si,cP as $i,eV as Ai,dA as Li,eW as Ri,a6 as ae,eX as ye,dF as y,a7 as se,cQ as Pi,au as U,eY as Ci,dH as Z,eZ as Fi,e_ as Ii,e$ as ji,bJ as he,f0 as $e,f1 as xi,dK as X,cC as O,bn as Lt,dE as pe,aw as Rt,f2 as Ni,f3 as Mi,f4 as Di,f5 as zi,f6 as ki,ad as B,f7 as ee,f8 as We,ae as Ui,f9 as Wi,fa as Ve,fb as Ge,dP as Vi,ce as Gi,fc as qi,c3 as ne,fd as Bi,fe as Hi,cB as qe,bq as Be,cE as N,aM as Yi,dB as Q,dG as Pt,dN as Ct,dM as Xi,ff as Ft,fg as Re,cD as Zi,fh as Qi,aW as z,c0 as He,fi as Ye,ax as Xe,fj as Ze,fk as Ji,ar as Ae,fl as It,bO as Qe,ea as jt,fm as Ki,fn as Le,fo as es,e7 as ts}from"./vendor.1dc52be5.js";import{n as is,g as ss,a as rs}from"./LineVisualElement.bea542a9.js";import{m as as}from"./ImageMaterial.012e4446.js";function ns(t){t.vertex.uniforms.add("cameraPosition","vec3").add("perScreenPixelRatio","float").add("screenSize","float"),t.vertex.code.add($`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance*perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSize * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function os(t,e,i){t.setUniform1f("perScreenPixelRatio",i.camera.perScreenPixelRatio),t.setUniform1f("screenSize",e.screenSize)}function cs(t){const e=new gt;return e.include(Wt,{linearDepth:!1}),e.include(ns,{}),e.include(Vt,t),e.fragment.include(Gt),e.vertex.uniforms.add("proj","mat4").add("view","mat4"),e.fragment.uniforms.add("uColor","vec4"),e.attributes.add(_.POSITION,"vec3"),e.varyings.add("vWorldPosition","vec3"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),t.screenSizeEnabled&&e.attributes.add(_.OFFSET,"vec3"),t.shadingEnabled&&(e.vertex.uniforms.add("viewNormal","mat4"),e.fragment.uniforms.add("shadedColor","vec4").add("shadingDirection","vec3"),e.attributes.add(_.NORMAL,"vec3"),e.varyings.add("vViewNormal","vec3")),e.vertex.code.add($`
    void main(void) {
      vWorldPosition = ${t.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),t.shadingEnabled&&e.vertex.code.add($`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),e.vertex.code.add($`
    ${t.multipassTerrainEnabled?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),t.multipassTerrainEnabled&&(e.fragment.include(qt),e.include(Bt,t)),e.fragment.code.add($`
    void main() {
      discardBySlice(vWorldPosition);
      ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),t.shadingEnabled?e.fragment.code.add($`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`):e.fragment.code.add($`vec4 finalColor = uColor;`),e.fragment.code.add($`
      if (finalColor.a < ${$.float(Ht)}) {
        discard;
      }
      ${t.output===F.Alpha?$`gl_FragColor = vec4(finalColor.a);`:""}

      ${t.output===F.Color?$`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${t.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),e}const ls=Object.freeze({__proto__:null,build:cs});class fe extends ft{initializeProgram(e){const i=fe.shader.get(),s=this.configuration,a=i.build({output:s.output,slicePlaneEnabled:s.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,screenSizeEnabled:s.screenSizeEnabled,shadingEnabled:s.shadingEnabled,oitEnabled:s.transparencyPassType===te.Color,multipassTerrainEnabled:s.multipassTerrainEnabled,cullAboveGround:s.cullAboveGround});return new mt(e.rctx,a,xt)}bindPass(e,i){const{screenSizeEnabled:s,shadingEnabled:a}=this.configuration,{color:r,shadingTint:n,shadingDirection:c}=e;_t(this.program,i.camera.projectionMatrix),this.program.setUniform4fv("uColor",r),i.multipassTerrainEnabled&&(this.program.setUniform2fv("nearFar",i.camera.nearFar),this.program.setUniform2fv("inverseViewport",i.inverseViewport),Yt(this.program,i)),a&&(this.program.setUniform4fv("shadedColor",this._blendColor(ds,n,r)),this.program.setUniform3fv("shadingDirection",c),this.program.setUniformMatrix4fv("viewNormal",i.camera.viewInverseTransposeMatrix)),s&&os(this.program,e,i)}bindDraw(e){bt(this.program,e),Xt(this.program,e.origin,e.camera.viewInverseTransposeMatrix),Zt(this.program,this.configuration,e),this.program.rebindTextures()}_blendColor(e,i,s){const a=1-i[3],r=i[3]+s[3]*a;return r===0?(e[3]=r,e):(e[0]=(i[0]*i[3]+s[0]*s[3]*a)/r,e[1]=(i[1]*i[3]+s[1]*s[3]*a)/r,e[2]=(i[2]*i[3]+s[2]*s[3]*a)/r,e[3]=s[3],e)}_setPipelineState(e){const i=this.configuration,s=e===te.NONE,a=e===te.FrontFace;return vt({blending:i.output!==F.Color&&i.output!==F.Alpha||!i.transparent?null:s?Qt:Jt(e),culling:Kt(i.cullFace),depthTest:{func:a?le.LESS:i.shadingEnabled?le.LEQUAL:le.LESS},depthWrite:s?i.writeDepth&&ei:ti(e),colorWrite:yt,polygonOffset:s||a?null:ii})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}fe.shader=new Et(ls,()=>import("./ShadedColorMaterial.glsl.a143ff2a.js"));class C extends pt{constructor(){super(...arguments),this.output=F.Color,this.cullFace=x.None,this.slicePlaneEnabled=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.transparencyPassType=te.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}w([j({count:F.COUNT})],C.prototype,"output",void 0),w([j({count:x.COUNT})],C.prototype,"cullFace",void 0),w([j()],C.prototype,"slicePlaneEnabled",void 0),w([j()],C.prototype,"transparent",void 0),w([j()],C.prototype,"writeDepth",void 0),w([j()],C.prototype,"screenSizeEnabled",void 0),w([j()],C.prototype,"shadingEnabled",void 0),w([j({count:te.COUNT})],C.prototype,"transparencyPassType",void 0),w([j()],C.prototype,"multipassTerrainEnabled",void 0),w([j()],C.prototype,"cullAboveGround",void 0);const xt=new Map([[_.POSITION,0],[_.NORMAL,1],[_.OFFSET,2]]),ds=si();class hs extends wt{constructor(e){super(e,gs),this.supportsEdges=!0,this.techniqueConfig=new C,this._vertexAttributeLocations=xt}getTechniqueConfig(e,i){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.screenSizeEnabled=this.parameters.screenSizeEnabled,this.techniqueConfig.shadingEnabled=this.parameters.shadingEnabled,this.techniqueConfig.transparencyPassType=i.transparencyPassType,this.techniqueConfig.multipassTerrainEnabled=i.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=i.cullAboveGround,this.techniqueConfig}getPassParameters(){return this.parameters}intersect(e,i,s,a,r,n,c){if(this.parameters.screenSizeEnabled){const h=e.vertexAttributes.get(_.OFFSET);Oe(e,i,a,r,n,{applyToVertex:(l,o,u,v)=>{const p=q(Je,h.data[3*v+0],h.data[3*v+1],h.data[3*v+2]),g=q(fs,l,o,u);return L(p,p,this.parameters.screenSize*a.camera.computeRenderPixelSizeAt(p)),R(g,g,p),[g[0],g[1],g[2]]},applyToAabb:l=>{const o=di(l,Je);return hi(l,this.parameters.screenSize*a.camera.computeRenderPixelSizeAt(o))}},c)}else Oe(e,i,a,r,n,void 0,c)}requiresSlot(e,i){if(ri(i)===F.Highlight)return e===H.OPAQUE_MATERIAL;let s=H.OPAQUE_MATERIAL;return this.parameters.transparent&&(s=this.parameters.writeDepth?H.TRANSPARENT_MATERIAL:H.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===s||e===H.DRAPED_MATERIAL}createGLMaterial(e){return e.output===F.Color||e.output===F.Alpha||e.output===F.Highlight?new us(e):null}createBufferWriter(){return new ps(this.parameters.screenSizeEnabled)}}class us extends Ot{updateParameters(e){return this.ensureTechnique(fe,e)}beginSlot(e){return this.updateParameters(e)}bind(e,i){i.bindPass(this._material.getPassParameters(),e)}}const gs=be({color:[1,1,1,1],shadingTint:[0,0,0,.25],shadingDirection:G(S(),[.5,-.5,-.5]),transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:x.None,screenSizeEnabled:!1,screenSize:14,shadingEnabled:!0},Tt);class ps{constructor(e){this.screenSizeEnabled=e;const i=ai().vec3f(_.POSITION).vec3f(_.NORMAL);this.screenSizeEnabled&&i.vec3f(_.OFFSET),this.vertexBufferLayout=i}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(_.POSITION).length}write(e,i,s,a){if(ni(i,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,s,a),this.screenSizeEnabled){if(!i.vertexAttributes.has(_.OFFSET))throw new Error(`${_.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);{const r=i.vertexAttributes.get(_.OFFSET),n=i.indices.get(_.OFFSET);oi(r.size===3);const c=s.getField(_.OFFSET,ci);if(!c)throw new Error("unable to acquire view for "+_.OFFSET);li(n,r.data,e.invTranspTransformation,c,a)}}}}const Je=S(),fs=S();class Pe{constructor(e){this.camera=new pi,this._elevation={offset:0,override:null},this.collisionType={type:"point"},this.collisionPriority=0,this._renderObjects=[],this.autoScaleRenderObjects=!0,this._available=!0,this._noDisplayCount=0,this._radius=10,this._worldSized=!1,this.focusMultiplier=2,this.touchMultiplier=2.5,this.worldOriented=!1,this._modelTransform=V(),this._worldFrame=null,this._renderLocation=S(),this._renderLocationDirty=!0,this._location=new ie({x:0,y:0,z:0}),this._elevationAlignedLocation=new ie,this._elevationAlignedLocationDirty=!0,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.cursor=null,this._grabbing=!1,this.dragging=!1,this._hovering=!1,this._selected=!1,this._state=k.None,this._focused=!1,this.events=new fi.EventEmitter,this._screenLocation={screenPointArray:$t(),renderScreenPointArray:mi(),pixelSize:0},this._screenLocationDirty=!0,this._applyObjectTransform=null,this._engineResourcesAddedToStage=!1,this._engineResources=null,this._attached=!1,this._engineLayer=null,this._materialIdReferences=null,this._location.spatialReference=e.view.spatialReference;for(const i in e)this[i]=e[i];this.view.state&&this.view.state.camera&&this.camera.copyFrom(this.view.state.camera)}destroy(){this._removeResourcesFromStage(),this._engineResources=null,this.view=null,this.camera=null}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this._elevationAlignedLocationDirty=!0,this._renderLocationDirty=!0,this._updateEngineObject()}get renderObjects(){return this._renderObjects}set renderObjects(e){this._removeResourcesFromStage(),this._engineResources=null,this._renderObjects=e.slice(),this._updateEngineObject()}set available(e){e!==this._available&&(this._available=e,this._updateEngineObject())}get available(){return this._available}disableDisplay(){return this._noDisplayCount++,this._noDisplayCount===1&&this._updateEngineObject(),{remove:_i(()=>{this._noDisplayCount--,this._noDisplayCount===0&&this._updateEngineObject()})}}set radius(e){e!==this._radius&&(this._radius=e,this._updateEngineObject())}get radius(){return this._radius}set worldSized(e){e!==this._worldSized&&(this._worldSized=e,this._updateEngineObject())}get worldSized(){return this._worldSized}get modelTransform(){return this._modelTransform}set modelTransform(e){Ke(e)&&(this._screenLocationDirty=!0),bi(this._modelTransform,e),this._updateEngineObject()}get renderLocation(){return this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=V()),ms(this.view,this._renderLocation,this._worldFrame)):this._worldFrame&&(this._worldFrame=null)),this._renderLocation}set renderLocation(e){this.view.renderCoordsHelper.fromRenderCoords(e,this._location),this.elevationAlignedLocation=this._location}get location(){return this._location}set location(e){Ne(e,this._location),this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!0,this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}get elevationAlignedLocation(){return this._elevationAlignedLocationDirty?(this._evaluateElevationAlignment(),this._updateElevationAlignedLocation(),this._elevationAlignedLocation):this._elevationAlignedLocation}set elevationAlignedLocation(e){Ne(e,this._location),this._evaluateElevationAlignment(),this._location.z-=this._elevation.offset,this._updateElevationAlignedLocation(),this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}_updateElevationAlignedLocation(){this._elevationAlignedLocation.x=this.location.x,this._elevationAlignedLocation.y=this.location.y;const e=P(this._elevation.override)?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.z=e+this._elevation.offset,this._elevationAlignedLocation.spatialReference=this.location.spatialReference,this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!1}grabbableForEvent(){return!0}get grabbing(){return this._grabbing}set grabbing(e){e!==this._grabbing&&(this._grabbing=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get hovering(){return this._hovering}set hovering(e){e!==this._hovering&&(this._hovering=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get selected(){return this._selected}set selected(e){e!==this._selected&&(this._selected=e,this._updateEngineObject(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get state(){return this._state}set state(e){e!==this._state&&(this._state=e,this._updateEngineObject())}updateStateEnabled(e,i){i?this.state|=e:this.state&=~e}_setFocused(e){e!==this._focused&&(this._focused=e,this.events.emit("focus-changed",{action:e===!0?"focus":"unfocus"}))}get focused(){return this._focused}get screenLocation(){return this._ensureScreenLocation(),this._screenLocation}_ensureScreenLocation(){if(!this._screenLocationDirty)return;this._screenLocation.pixelSize=this.camera.computeScreenPixelSizeAt(this.renderLocation),this._screenLocationDirty=!1;let e;if(Ke(this._modelTransform)){const i=this._calculateModelTransformOffset(vs);e=R(i,i,this.renderLocation)}else e=this.renderLocation;this.camera.projectToRenderScreen(e,this._screenLocation.renderScreenPointArray),this.camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}get applyObjectTransform(){return this._applyObjectTransform}set applyObjectTransform(e){this._applyObjectTransform=e,this._screenLocationDirty=!0,this._updateEngineObject()}intersectionDistance(e,i){if(!this.available)return null;const s=vi(e,_s),a=this._getCollisionRadius(i),r=-1*this.collisionPriority;switch(this.collisionType.type){case"point":if(Oi(this.screenLocation.screenPointArray,s)<a*a)return this.screenLocation.renderScreenPointArray[2]+r;break;case"line":{const c=this.collisionType.paths,h=this._getWorldToScreenObjectScale(),d=this._calculateObjectTransform(h,oe),l=a*this.screenLocation.pixelSize,o=ve(this.camera,s,Ee);if(T(o))return null;for(const u of c){if(u.length===0)continue;const v=Y(re,u[0],d);for(let p=1;p<u.length;p++){const g=Y(it,u[p],d),m=wi(ke(v,g,et),o);if(m!=null&&m<l*l){const E=R(f.get(),v,g);L(E,E,.5);const b=Ue(f.get());return this.camera.projectToRenderScreen(E,b),b[2]+r}de(v,g)}}break}case"disc":{var n;const c=this.collisionType.direction,h=(n=this.collisionType.offset)!=null?n:Ei,d=this._getWorldToScreenObjectScale(),l=this._calculateObjectTransform(d,oe),o=a*this.screenLocation.pixelSize,u=ve(this.camera,s,Ee);if(T(u))return null;const v=Me(tt,l),p=De(rt,c,v),g=Y(at,h,l);Se(g,p,ce);const m=st;if(ze(ce,u,m)&&Ti(m,g)<o*o)return this.screenLocation.renderScreenPointArray[2]+r;break}case"ribbon":{const{paths:c,direction:h}=this.collisionType,d=this._getWorldToScreenObjectScale(),l=this._calculateObjectTransform(d,oe),o=a*this.camera.computeScreenPixelSizeAt(this.renderLocation),u=ve(this.camera,s,Ee);if(T(u))return null;const v=Me(tt,l),p=De(rt,h,v),g=this._calculateModelTransformPosition(at);Se(g,p,ce);const m=st;if(!ze(ce,u,m))break;for(const E of c){if(E.length===0)continue;const b=Y(re,E[0],l);for(let I=1;I<E.length;I++){const D=Y(it,E[I],l),Fe=yi(ke(b,D,et),m);if(Fe!=null&&Fe<o*o){const _e=R(f.get(),b,D);L(_e,_e,.5);const Ie=Ue(f.get());return this.camera.projectToRenderScreen(_e,Ie),Ie[2]+r}de(b,D)}}break}default:At(this.collisionType)}return null}attach(e={manipulator3D:{}}){var i;if(!this.view._stage)return;const s=e.manipulator3D;if(T(s.engineLayerId)){const a=new Si({isPickable:!1,updatePolicy:$i.SYNC});this.view._stage.add(a),s.engineLayerId=a.id,this._engineLayer=a}else(i=this.view._stage)!=null&&i.getObject&&(this._engineLayer=this.view._stage.getObject(s.engineLayerId));s.engineLayerReferences=(s.engineLayerReferences||0)+1,this._materialIdReferences=s.materialIdReferences,T(this._materialIdReferences)&&(this._materialIdReferences=new Map,s.materialIdReferences=this._materialIdReferences),this.camera.copyFrom(this.view.state.camera),this._attached=!0,this._updateEngineObject(),Ai(this._location.spatialReference,this.view.spatialReference)||(this.location=new ie({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}detach(e={manipulator3D:{}}){const i=e.manipulator3D;i.engineLayerReferences--;const s=i.engineLayerReferences===0;s&&(i.engineLayerId=null),this._removeResourcesFromStage(s),this._engineResources=null,this._engineLayer=null,this._materialIdReferences=null,this._attached=!1}onViewChange(){this.camera.copyFrom(this.view.state.camera),this._screenLocationDirty=!0,this._updateEngineObject()}onElevationChange(e){Li(this.location,nt,e.spatialReference),Ri(e.extent,nt)&&(this.location=this._location)}_evaluateElevationAlignment(e=this.location){if(T(this.elevationInfo))return!1;let i=null,s=0;const a=ae(this.elevationInfo.offset,0);switch(this.elevationInfo.mode){case"on-the-ground":i=ae(ye(this.view.elevationProvider,e,"ground"),0);break;case"relative-to-ground":s=ae(ye(this.view.elevationProvider,e,"ground"),0)+a;break;case"relative-to-scene":s=ae(ye(this.view.elevationProvider,e,"scene"),0)+a;break;case"absolute-height":s=a}return(s!==this._elevation.offset||i!==this._elevation.override)&&(this._elevation.offset=s,this._elevation.override=i,!0)}_updateEngineObject(){if(!this._attached)return;if(!this.available)return void this._removeResourcesFromStage();const e=this._getWorldToScreenObjectScale(),i=oe;if(this.autoScaleRenderObjects===!0){const n=this._getFocusedSize(this._radius,this.focused)*e;this._calculateObjectTransform(n,i)}else this._calculateObjectTransform(e,i);const{objectsByState:s}=this._ensureEngineResources(),a=(this.focused?y.Focused:y.Unfocused)|(this.selected?y.Selected:y.Unselected),r=this._noDisplayCount>0;for(const{stateMask:n,objects:c}of s){if(r){for(const u of c)u.setVisible(!1);continue}const h=(n&y.All)!==y.None,d=(n&k.All)!==k.None,l=!h||(a&n)==(n&y.All),o=!d||(this.state&n)==(n&k.All);if(l&&o)for(const u of c)u.setVisible(!0),u.transformation=i;else for(const u of c)u.setVisible(!1)}}_ensureEngineResources(){if(T(this._engineResources)){const e=se(this._engineLayer),i=[],s=new Set;this.renderObjects.forEach(({material:c})=>{s.has(c)||(i.push(c),s.add(c))});const a=(c,h)=>{const{geometry:d,material:l,transform:o}=h;Array.isArray(d)?d.forEach(u=>c.addGeometry(u,l,o)):c.addGeometry(d,l,o)},r=new Map;this._renderObjects.forEach(c=>{const h=new Pi({castShadow:!1});a(h,c);const d=c.stateMask||0,l=r.get(d)||[];l.push(h),r.set(d,l)});const n=[];r.forEach((c,h)=>n.push({stateMask:h,objects:c})),this._engineResources={objectsByState:n,layer:e,materials:i}}return this._addResourcesToStage(),this._engineResources}_addResourcesToStage(){if(this._engineResourcesAddedToStage||T(this._engineResources))return;const{objectsByState:e,layer:i,materials:s}=this._engineResources;s.forEach(a=>{const r=se(this._materialIdReferences),n=r.get(a.id)||0;n===0&&this.view._stage.add(a),r.set(a.id,n+1)}),e.forEach(({objects:a})=>{i.addMany(a),this.view._stage.addMany(a)}),this._engineResourcesAddedToStage=!0}_removeResourcesFromStage(e=!1){if(!this._engineResourcesAddedToStage||T(this._engineResources)||!this.view._stage)return;const{objectsByState:i,layer:s,materials:a}=this._engineResources;i.forEach(({objects:r})=>{s.removeMany(r),this.view._stage.removeMany(r)}),a.forEach(r=>{const n=se(this._materialIdReferences),c=n.get(r.id);c===1?(this.view._stage.remove(r),n.delete(r.id)):n.set(r.id,c-1)}),e&&this.view._stage.remove(s),this._engineResourcesAddedToStage=!1}_getCollisionRadius(e){return this._getFocusedSize(this.radius,!0)*(e==="touch"?this.touchMultiplier:1)}_getFocusedSize(e,i){return e*(i?this.focusMultiplier:1)}_getWorldToScreenObjectScale(){return this._worldSized?1:this.screenLocation.pixelSize}_calculateModelTransformPosition(e){const i=this._getWorldToScreenObjectScale(),s=this._calculateObjectTransform(i,bs);return q(e,s[12],s[13],s[14])}_calculateModelTransformOffset(e){const i=this._calculateModelTransformPosition(e);return U(e,i,this.renderLocation)}_calculateObjectTransform(e,i){return Ci(i,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1),this._worldFrame&&Z(i,i,this._worldFrame),Z(i,i,this._modelTransform),i[12]+=this.renderLocation[0],i[13]+=this.renderLocation[1],i[14]+=this.renderLocation[2],i[15]=1,P(this._applyObjectTransform)&&this._applyObjectTransform(i),i}get test(){let e=!1;if(P(this._engineResources))for(const i in this._engineResources.objectsByState){const s=this._engineResources.objectsByState[i];for(const a of s.objects)if(a.isVisible){e=!0;break}if(e)break}return{areAnyResourcesVisible:e}}}function Ke(t){return t[12]!==0||t[13]!==0||t[14]!==0}function ms(t,e,i){switch(t.viewingMode){case"local":return $e(i),!0;case"global":{const s=Fi(t.renderCoordsHelper.spatialReference);return Ii(e,0,re,0,s.radius),ji(he(re[0]),he(re[1]),i),!0}}}const _s=$t(),et=ui(),Ee=St(),tt=xi(),bs=V(),oe=V(),ce=gi(),re=S(),it=S(),st=S(),rt=S(),at=S(),vs=S(),nt=new ie({x:0,y:0,z:0,spatialReference:null});function pr(t,e=O.OccludeAndTransparent,i=!0){const s=Lt(t[0],t[1],t[2],t.length>3?t[3]:1),a=t[3]<1;return i?new hs({color:s,transparent:a,writeDepth:!0,cullFace:x.Back,renderOccluded:e}):new X({color:s,transparent:a,writeDepth:!0,cullFace:x.Back,renderOccluded:e})}function fr(t,e=O.OccludeAndTransparent){const i=Lt(t[0],t[1],t[2],t.length===4?t[3]:1);return new X({color:i,transparent:!0,writeDepth:!0,cullFace:x.Front,renderOccluded:e})}function mr(t,e,i,s){const a=U(f.get(),t,i),r=Nt(a,Rt(f.get(),s,a),i,pe.get());Ni(r,r);const n=Y(f.get(),e,r);return Math.atan2(n[1],n[0])}function Nt(t,e,i,s){const a=G(f.get(),t),r=G(f.get(),e),n=Rt(f.get(),a,r);return s[0]=a[0],s[1]=a[1],s[2]=a[2],s[3]=0,s[4]=r[0],s[5]=r[1],s[6]=r[2],s[7]=0,s[8]=n[0],s[9]=n[1],s[10]=n[2],s[11]=0,s[12]=i[0],s[13]=i[1],s[14]=i[2],s[15]=1,s}function ys(t,e){const i=t.getViewForGraphic(e);return P(i)&&"computeAttachmentOrigin"in i?i.computeAttachmentOrigin(e,t.spatialReference):null}function _r(t,e,i){const s=ys(t,i);P(s)?e.elevationAlignedLocation=s:Es(e,i.geometry)}function Es(t,e){if(T(e))return;const i=e.type==="mesh"?e.anchor:Mi(e);T(i)||(t.location=Di(i))}let M=class extends zi(Wi){constructor(t){super(t),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10}equals(t){return this.heading===t.heading&&this.tilt===t.tilt&&ki(this.position,t.position)&&this.width===t.width&&this.height===t.height}};w([B({readOnly:!0,json:{read:!1,write:!0}})],M.prototype,"type",void 0),w([B({type:ie}),ee()],M.prototype,"position",void 0),w([B({type:Number,nonNullable:!0,range:{min:0,max:360}}),ee(),We(t=>Ve.normalize(Ge(t),0,!0))],M.prototype,"heading",void 0),w([B({type:Number,nonNullable:!0,range:{min:0,max:360}}),ee(),We(t=>Ve.normalize(Ge(t),0,!0))],M.prototype,"tilt",void 0),w([B({type:Number,nonNullable:!0}),ee()],M.prototype,"width",void 0),w([B({type:Number,nonNullable:!0}),ee()],M.prototype,"height",void 0),M=w([Ui("esri.analysis.SlicePlane")],M);const Ts=M;Vi("mac");const ws=2,Os=1.15,Ss=1.15,$s=1.1,As=.7,K=[1,.5,0],br=2,Ls=1,Rs=[...K,As],Ps=[0,0,0,.04],Cs=[...K,.5],Fs=[...K,1],Is=[1,1,1,1],js=[1,.8,.6,1],xs=[1,.93,.86,1],Ns=[...K,1],Ms=[...K,1],Ds=3,ot=11,zs=22.5,Te=40,ct=48,ks=2.25,Us=[...K,1],Ws=4,lt=1,Vs=.3,Gs=6,qs=4,dt=12,Bs=40,Hs=27;function Ys(){const t=new gt;return t.extensions.add("GL_OES_standard_derivatives"),t.vertex.uniforms.add("proj","mat4").add("view","mat4"),t.attributes.add(_.POSITION,"vec3"),t.attributes.add(_.UV0,"vec2"),t.varyings.add("vUV","vec2"),t.vertex.code.add($`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),t.fragment.uniforms.add("backgroundColor","vec4").add("gridColor","vec4").add("ratio","float").add("gridWidth","float"),t.fragment.code.add($`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
gl_FragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`),t}const Xs=Object.freeze({__proto__:null,build:Ys});class me extends ft{initializeProgram(e){const i=me.shader.get().build();return new mt(e.rctx,i,Gi)}bindPass(e,i){_t(this.program,i.camera.projectionMatrix),this.program.setUniform4fv("backgroundColor",e.backgroundColor),this.program.setUniform4fv("gridColor",e.gridColor),this.program.setUniform1f("gridWidth",e.gridWidth)}bindDraw(e){bt(this.program,e),this.program.rebindTextures()}initializePipeline(){return vt({blending:qi(ne.ONE,ne.ONE,ne.ONE_MINUS_SRC_ALPHA,ne.ONE_MINUS_SRC_ALPHA),depthTest:{func:le.LESS},colorWrite:yt})}}me.shader=new Et(Xs,()=>import("./SlicePlaneMaterial.glsl.9aa42d56.js"));class Zs extends wt{constructor(e){super(e,Js),this._config=new pt}intersect(e,i,s,a,r,n,c){return Oe(e,i,a,r,n,void 0,c)}createBufferWriter(){return new Bi(Hi)}requiresSlot(e){return e===H.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL}createGLMaterial(e){return e.output===F.Color?new Qs(e):null}getTechniqueConfig(){return this._config}}class Qs extends Ot{constructor(e){super(e),this.ensureTechnique(me,null)}updateParameters(){return se(this.technique)}beginSlot(){return se(this.technique)}bind(e,i){i.bindPass(this._material.parameters,e)}}const Js=be({backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4},Tt);class Ks extends is{constructor(e){super(e),this._material=null,this._renderOccluded=O.OccludeAndTransparent,this._gridWidth=1,this._gridColor=qe(1,0,0,1),this._backgroundColor=qe(1,0,0,1),this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(e){this._gridWidth!==e&&(this._gridWidth=e,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(e){Be(this._gridColor,e),this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){Be(this._backgroundColor,e),this._updateMaterial()}createExternalResources(){this._material=new Zs(this.materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(e){P(this._material)&&e(this._material)}createGeometries(e){if(P(this._material)){const i=N.createSquareGeometry();e.addGeometry(i,this._material)}}get materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded}}_updateMaterial(){P(this._material)&&this._material.setParameters(this.materialParameters)}}const er=Yi.getLogger("esri.views.3d.interactive.analysisTools.slice.sliceToolUtils");function tr(t,e,i){const s=e.worldUpAtPosition(t.origin,f.get()),a=t.basis1,r=Ce(t,s),n=Math.round(r/J)*J;return Le(t,n-r,a,i)}function vr(t,e){return Nt(t.basis1,t.basis2,t.origin,e)}function yr(t,e,i,s){const a=e.worldUpAtPosition(t.origin,f.get()),r=f.get();switch(i){case ue.HEADING:de(r,a);break;case ue.TILT:de(r,t.basis1)}return Se(t.origin,r,s)}function Er(t,e,i,s){const a=Q(s.basis1),r=Q(s.basis2),n=Mt(s),c=sr(s),h=q(f.get(),0,0,0);R(h,L(f.get(),s.basis1,e.direction[0]),L(f.get(),s.basis2,e.direction[1])),R(h,s.origin,h);let d=0,l=1;if(Dt(e))e.direction[0]===1&&e.direction[1]===-1?d=J:e.direction[0]===1&&e.direction[1]===1?d=Math.PI:e.direction[0]===-1&&e.direction[1]===1&&(d=3*Math.PI/2),l=c;else{const u=e.direction[0]!==0?1:2;d=u===1?J:0,l=(u===1?r:a)-n}const o=Pt(pe.get(),d);Ct(o,o,q(f.get(),l,l,l)),Z(o,i,o),o[12]=0,o[13]=0,o[14]=0,t.modelTransform=o,t.renderLocation=h}function Tr(t,e,i,s){const a=s.worldUpAtPosition(i.origin,f.get()),r=ir(i,W.POSITIVE_X),n=Pt(pe.get(),r.edge*Math.PI/2);Xi(n,n,-Ce(i,a)),Z(n,e,n),n[12]=0,n[13]=0,n[14]=0,t.modelTransform=n,t.renderLocation=r.position}var W;function ir(t,e){switch(e){case W.POSITIVE_X:return{basis:t.basis1,direction:1,position:R(f.get(),t.origin,t.basis1),edge:e};case W.POSITIVE_Y:return{basis:t.basis2,direction:1,position:R(f.get(),t.origin,t.basis2),edge:e};case W.NEGATIVE_X:return{basis:t.basis1,direction:-1,position:U(f.get(),t.origin,t.basis1),edge:e};case W.NEGATIVE_Y:return{basis:t.basis2,direction:-1,position:U(f.get(),t.origin,t.basis2),edge:e}}}function Mt(t){const e=Q(t.basis1),i=Q(t.basis2);return Vs*Math.min(e,i)}function sr(t){return Mt(t)}function Dt(t){return t.direction[0]!==0&&t.direction[1]!==0}function wr(t,e=ge.CENTER_ON_ARROW){const i=e===ge.CENTER_ON_CALLOUT?Te:0,s=[z(i,0,-ct/2),z(i,0,ct/2)],a=nr(s,!0),r=(g,m)=>rr(s,s,{tubeRadius:Ds,tipRadius:ot,tipLength:zs,tubeFocusMultiplier:Os,tipFocusMultiplier:Ss,padding:g,bothEnds:!0,flat:null,focusTipLength:!0,addCap:m}),n=r(0,!1),c=r(ks,!0),h=new X({color:Is,cullFace:x.Back,renderOccluded:O.Opaque}),d=new X({color:js,cullFace:x.Back,renderOccluded:O.Opaque}),l=new X({color:xs,cullFace:x.Back,renderOccluded:O.Opaque}),o=new X({color:Ms,transparent:!0,writeDepth:!1,cullFace:x.Front,renderOccluded:O.Transparent}),u=N.createPolylineGeometry([[i,0,0],[i-Te,0,0]]),v=N.createPolylineGeometry([[i,0,0],[i-Te,0,0]]),p=new Re({color:Ns,renderOccluded:O.OccludeAndTransparent});return new Pe({view:t,renderObjects:[...n.normal.map(({part:g,geometry:m,transform:E})=>({geometry:m,material:g==="tip"?h:g==="cap"?d:l,transform:E,stateMask:y.Unfocused|A})),...c.normal.map(({geometry:g,transform:m})=>({geometry:g,material:o,transform:m,stateMask:y.Unfocused|A})),{geometry:u,material:p,stateMask:y.Unfocused|A|ut},...n.focused.map(({part:g,geometry:m,transform:E})=>({geometry:m,material:g==="tip"?h:g==="cap"?d:l,transform:E,stateMask:y.Focused|A})),...c.focused.map(({geometry:g,transform:m})=>({geometry:g,material:o,transform:m,stateMask:y.Focused|A})),{geometry:v,material:p,stateMask:y.Focused|A|ut}],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[a]},collisionPriority:1,radius:ot,state:A})}function Or(t,e){const i=new as({transparent:!0,writeDepth:!1,textureId:e.id,renderOccluded:O.Opaque}),s=Bs,a=Hs,r=a*$s,n=o=>{const u=new Uint32Array([0,1,2,2,3,0]);return new Qi([[_.POSITION,{size:3,data:[s-o,-o,0,s+o,-o,0,s+o,o,0,s-o,o,0],exclusive:!0}],[_.UV0,{size:2,data:[0,0,1,0,1,1,0,1]}]],[[_.POSITION,u],[_.UV0,u]])},c=N.createPolylineGeometry([[0,0,0],[s-a,0,0]]),h=N.createPolylineGeometry([[0,0,0],[s-r,0,0]]),d=new Re({color:Fs,renderOccluded:O.OccludeAndTransparent}),l=[{geometry:n(a),material:i,stateMask:y.Unfocused|A},{geometry:c,material:d,stateMask:y.Unfocused|A},{geometry:n(r),material:i,stateMask:y.Focused|A},{geometry:h,material:d,stateMask:y.Focused|A}];return new Pe({view:t,renderObjects:l,autoScaleRenderObjects:!1,collisionType:{type:"disc",direction:[0,0,1],offset:[s,0,0]},collisionPriority:1,radius:a/2,state:A})}function Sr(t){const e=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]];return new ss({view:t,attached:!0,color:Rs,width:Ls,writeDepthEnabled:!1,renderOccluded:O.OccludeAndTransparent,geometry:[e]})}function $r(t){return new Ks({view:t,attached:!0,backgroundColor:[...Ps],gridColor:Cs,gridWidth:4,renderOccluded:O.OccludeAndTransparent})}function Ar(t,e){const i=Dt(e),s=i?[z(1,0,0),z(0,0,0),z(0,1,0)]:[z(1,0,0),z(-1,0,0)],a=N.createPolylineGeometry(s),r=Us,n=p=>new Zi({color:r,width:p,renderOccluded:O.OccludeAndTransparent}),c=()=>new Re({color:r,renderOccluded:O.OccludeAndTransparent}),h=i?Ws:lt,d=h*ws,l=lt,o=p=>p>1?n(p):c(),u=[{geometry:a,material:o(h),stateMask:y.Unfocused|we},{geometry:a,material:o(d),stateMask:y.Focused|we},{geometry:a,material:o(l),stateMask:lr}],v=new Pe({view:t,renderObjects:u,collisionType:{type:"line",paths:[s]},autoScaleRenderObjects:!1,worldSized:!0,radius:i?Gs:qs});return v.state=we,v}function rr(t,e,i){const s=a=>{const r=(a?e:t).slice(0),n=U(f.get(),r[0],r[1]);G(n,n);const c=U(f.get(),r[r.length-1],r[r.length-2]);if(G(c,c),i.padding>0){const b=L(S(),c,-i.padding);if(r[r.length-1]=R(b,b,r[r.length-1]),i.bothEnds){const I=L(S(),n,-i.padding);r[0]=R(I,I,r[0])}}const h=a?i.tipFocusMultiplier:1,d=i.tipLength*(i.focusTipLength?h:1),l=i.tipRadius*h,o=$e(pe.get());if(i.padding>0){const b=d/4,I=q(f.get(),0,b,0),D=1+i.padding/b;He(o,o,I),Ct(o,o,q(f.get(),D,D,D)),He(o,o,L(I,I,-1/D))}const u=$e(V()),v=z(0,1,0),p=Ye(V(),Xe(Ze.get(),v,c));p[12]=r[r.length-1][0],p[13]=r[r.length-1][1],p[14]=r[r.length-1][2],Z(p,p,o);const g=[{part:"tube",geometry:ar(i.tubeRadius*(a?i.tubeFocusMultiplier:1)+i.padding,i.flat,r),transform:u}];let m,E;if(P(i.flat)?m=N.createExtrudedTriangle(d,l,l,i.flat.thickness):(m=N.createConeGeometry(d,l,24,!1,!1,!0),E=N.createConeGeometry(d,l,24,!1,!0,!1)),g.push({part:"tip",geometry:m,transform:p}),E&&g.push({part:"cap",geometry:E,transform:p}),i.bothEnds){const b=Ye(V(),Xe(Ze.get(),v,n));b[12]=r[0][0],b[13]=r[0][1],b[14]=r[0][2],Z(b,b,o),g.push({part:"tip",geometry:m,transform:b}),E&&g.push({part:"cap",geometry:E,transform:b})}return g};return{normal:s(!1),focused:s(!0)}}function ar(t,e,i){const s=[];if(P(e))s.push([t,e.thickness/2],[-t,e.thickness/2],[-t,-e.thickness/2],[t,-e.thickness/2]);else for(let r=0;r<12;r++){const n=r/12*2*Math.PI;s.push([Math.cos(n)*t,Math.sin(n)*t])}return N.createPathExtrusionGeometry(s,i,[],[],!1)}function nr(t,e){const i=U(S(),t[t.length-1],t[t.length-2]);if(G(i,i),L(i,i,dt),R(i,i,t[t.length-1]),e){const s=U(S(),t[0],t[1]);return G(s,s),L(s,s,dt),R(s,s,t[0]),[s,...t,i]}return[...t,i]}function Lr(t,e,i,s=new Ts){if(T(t))return null;const{renderCoordsHelper:a}=e,r=a.fromRenderCoords(t.origin,e.spatialReference);if(T(r))return null;const n=Ji(r,i);if(T(n))return null;s.position=n;const c=a.worldUpAtPosition(t.origin,f.get()),h=a.worldBasisAtPosition(t.origin,Ae.Y,f.get()),d=2*Q(t.basis1),l=2*Q(t.basis2),o=It.renderUnitScaleFactor(e.spatialReference,i);return s.width=d*o,s.height=l*o,s.tilt=Qe(Ce(t,c)),s.heading=Qe(or(t,c,h)),s}function Ce(t,e){return Ft(e,t.basis2,t.basis1)+J}function or(t,e,i){return Ft(t.basis1,i,e)-J}function cr(t,e,i,s,a,r,n=jt()){return r.toRenderCoords(t,n.origin)?(r.worldBasisAtPosition(n.origin,Ae.X,n.basis1),r.worldBasisAtPosition(n.origin,Ae.Y,n.basis2),Ki(n.basis2,n.basis1,n.origin,n.plane),Le(n,-he(e),es(n),n),Le(n,he(i),n.basis1,n),L(n.basis1,n.basis1,s/2),L(n.basis2,n.basis2,a/2),ts(n),n):(er.error(`Failed to project slice plane position, projection from ${t.spatialReference.wkid} is not supported`),null)}function Rr(t,e){if(T(t)||T(t.position))return null;const i=rs(t.position,e.spatialReference,e.elevationProvider);if(T(i))return null;const s=It.renderUnitScaleFactor(t.position.spatialReference,e.spatialReference),a=t.width*s,r=t.height*s;return{position:i,heading:t.heading,tilt:t.tilt,renderWidth:a,renderHeight:r}}function Pr(t,e,i,s=jt()){if(T(t))return null;const a=cr(t.position,t.heading,t.tilt,t.renderWidth,t.renderHeight,e.renderCoordsHelper,s);return!i.tiltEnabled&&P(a)&&tr(a,e.renderCoordsHelper,a),a}function Cr(t){switch(t.type){case"analysis":case"building-scene":case"csv":case"feature":case"geo-rss":case"geojson":case"graphics":case"group":case"integrated-mesh":case"kml":case"map-notes":case"ogc-feature":case"point-cloud":case"route":case"scene":case"stream":case"voxel":case"subtype-group":case"unknown":case"unsupported":case"wfs":case null:return!1;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"elevation":case"imagery":case"imagery-tile":case"map-image":case"open-street-map":case"tile":case"vector-tile":case"wcs":case"web-tile":case"wms":case"wmts":return!0;default:return At(t.type),!1}}(function(t){t[t.POSITIVE_X=0]="POSITIVE_X",t[t.POSITIVE_Y=1]="POSITIVE_Y",t[t.NEGATIVE_X=2]="NEGATIVE_X",t[t.NEGATIVE_Y=3]="NEGATIVE_Y"})(W||(W={}));const A=k.Custom1;var ue,ht;(function(t){t[t.HEADING=1]="HEADING",t[t.TILT=2]="TILT"})(ue||(ue={})),function(t){t[t.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",t[t.HORIZONTAL=1]="HORIZONTAL",t[t.VERTICAL=2]="VERTICAL",t[t.TILTED=3]="TILTED"}(ht||(ht={}));const ut=k.Custom2;St();const J=Math.PI/2,we=k.Custom1,lr=k.Custom2;var ge;function Fr(t){const e=t.type==="building-scene-3d"?t:null;return P(e)}(function(t){t[t.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",t[t.CENTER_ON_ARROW=1]="CENTER_ON_ARROW"})(ge||(ge={}));export{Ls as C,hs as F,vr as K,Cr as L,Pr as M,mr as O,yr as Q,ge as S,we as U,lr as V,ut as _,ys as a,fr as b,Rs as c,wr as d,br as e,Ar as f,$r as g,Ts as h,Ps as i,Rr as j,ue as k,sr as l,Or as m,Cs as n,cs as o,Sr as p,Ys as q,Er as r,Tr as s,Pe as t,Dt as u,_r as v,pr as w,Fr as x,Lr as y};