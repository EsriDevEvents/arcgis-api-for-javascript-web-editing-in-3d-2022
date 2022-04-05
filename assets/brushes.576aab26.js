var je=Object.defineProperty;var ye=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var Te=(_,e,t)=>e in _?je(_,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):_[e]=t,oe=(_,e)=>{for(var t in e||(e={}))qe.call(e,t)&&Te(_,t,e[t]);if(ye)for(var t of ye(e))Ke.call(e,t)&&Te(_,t,e[t]);return _};import{ev as M,aH as w,c3 as A,c8 as P,mM as u,a8 as z,nI as Xe,nJ as V,lk as Ve,nK as Qe,nL as _e,nM as J,nN as Je,nO as et,nP as tt,nQ as nt,nR as it,nS as ot,nT as Ce,cb as j,cc as q,c9 as K,mL as at,nU as rt,nV as lt,nW as ae,nX as st,nY as ut,nZ as ct,n_ as ft,n$ as dt,o0 as W,cB as de,o1 as ge,ny as Me,o2 as we,nz as he,nA as xe,kj as be,o3 as _t,o4 as Ie,o5 as mt,nG as Ee,cn as De,o6 as vt,o7 as pt,o8 as gt,o9 as ht,oa as xt,ob as bt}from"./vendor.1dc52be5.js";import{z as Oe,W as F,Y as Ue,X as Pe,h as St,A as yt,B as Tt,C as Ct,D as It,H as Et,I as Dt,o as me}from"./definitions.52b5fae8.js";import{d as Y,I as H,E as te}from"./Utils.25ecb0e0.js";import{e as Ot,a as ce}from"./ProgramTemplate.baf6faf0.js";import{M as ne}from"./number.dc47462b.js";import{r as X,l as G,n as Ae}from"./StyleDefinition.57b891ae.js";import{M as Re}from"./GeometryUtils.5ea26345.js";import{x as Pt,b as At,B as Rt,U as Lt,R as Nt}from"./MaterialKey.4c6f010e.js";class U{constructor(){this.name=this.constructor.name||"UnnamedBrush"}prepareState(e,t,n){}draw(e,t,n){}drawMany(e,t,n){for(const o of t)this.draw(e,o,n)}}class zt extends U{dispose(){}prepareState(e){const{context:t}=e;t.setColorMask(!0,!0,!0,!0),t.setStencilFunction(M.EQUAL,0,255)}draw(e,t){const{context:n}=e,{displayData:o}=t;if(w(o)||(o.state.name==="loaded"&&o.prepareForRendering(n),o.state.name!=="attached"))return;const i=o.state.resources;n.setFaceCullingEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunctionSeparate(A.ONE,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE);const a=[];i.values.lineColor.kind==="ramp"&&a.push("vvLineColor"),i.values.lineOpacity.kind==="ramp"&&a.push("vvLineOpacity"),i.values.lineRenderWidth.kind==="ramp"&&a.push("vvLineRenderWidth");const r=e.painter.materialManager.getProgram(e,{vsPath:"raster/flow",fsPath:"raster/flow",attributes:i.locations},a);n.useProgram(r),r.setUniform1f("u_time",e.time/1e3),r.setUniform1f("u_fadeDuration",o.flowStyle.renderSettings.fadeDuration),r.setUniform1f("u_lineSpeed",o.flowStyle.renderSettings.lineSpeed),r.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),r.setUniformMatrix3fv("u_displayViewMat3",e.state.displayViewMat3),ve(r,"lineColor","vec4",o.flowStyle.renderSettings.lineColor),ve(r,"lineOpacity","float",o.flowStyle.renderSettings.lineOpacity),ve(r,"lineRenderWidth","float",o.flowStyle.renderSettings.lineRenderWidth),n.bindVAO(i.vertexArray),n.drawElements(P.TRIANGLES,i.indexBuffer.size,u.UNSIGNED_INT,0),o.flowStyle.animated&&t.requestRender()}}function re(_,e,t,n){switch(e){case"int":_.setUniform1iv(t,n);break;case"float":_.setUniform1fv(t,n);break;case"vec2":_.setUniform2fv(t,n);break;case"vec3":_.setUniform3fv(t,n);break;case"vec4":_.setUniform4fv(t,n)}}function ve(_,e,t,n){n.kind==="constant"?re(_,t,`u_${e}`,n.value):(re(_,"float",`u_${e}_stops`,n.stops),re(_,t,`u_${e}_values`,n.values),re(_,"int",`u_${e}_count`,[n.count]))}const Vt={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,stretchType:"none",type:"stretch"};class vn extends Xe{constructor(e=null,t=null,n=null){super(),this._textureInvalidated=!0,this._colormapTextureInvalidated=!0,this._supportsBilinearTexture=!0,this.stencilRef=0,this.coordScale=[1,1],this._symbolizerParameters=null,this.height=null,this.isRendereredSource=!1,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this.rawPixelData=null,this._suspended=!1,this._bandIds=null,this._interpolation=null,this._transformGrid=null,this.width=null,this.x=0,this.y=0,this.source=e,this.transformGrid=t,this.interpolation=n}destroy(){const e=this.getTextures();e==null||e.textures.forEach(t=>t.dispose()),this._rasterTexture=null,this._transformGridTexture=null,this._colormapTexture=null}get symbolizerParameters(){return this._symbolizerParameters||Vt}set symbolizerParameters(e){this._symbolizerParameters!==e&&(this._symbolizerParameters=e,this._colormapTextureInvalidated=!0)}get source(){return this._source}set source(e){this._source!==e&&(this._source=e,this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null),this.invalidateTexture())}get suspended(){return this._suspended}set suspended(e){this._suspended&&!e&&this.stage&&(this.ready(),this.requestRender()),this._suspended=e}get bandIds(){return this._bandIds}set bandIds(e){this._bandIds=e,this._isBandIdschanged(e)&&this.invalidateTexture()}get interpolation(){return this._interpolation||"nearest"}set interpolation(e){this._interpolation=e,this._rasterTexture&&this._rasterTexture.setSamplingMode(this._getTextureSamplingMethod(e)==="bilinear"?V.LINEAR:V.NEAREST)}get transformGrid(){return this._transformGrid}set transformGrid(e){this._transformGrid=e,this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRender())}_createTransforms(){return{dvs:Ve()}}setTransform(e){const t=Qe(this.transforms.dvs),[n,o]=e.toScreenNoRotation([0,0],[this.x,this.y]),i=this.resolution/this.pixelRatio/e.resolution,a=i*this.width,r=i*this.height,c=Math.PI*this.rotation/180;_e(t,t,J(n,o)),_e(t,t,J(a/2,r/2)),Je(t,t,-c),_e(t,t,J(-a/2,-r/2)),et(t,t,J(a,r)),tt(this.transforms.dvs,e.displayViewMat3,t)}getTextures(){if(!this._rasterTexture)return null;const e=[],t=[];return this._transformGridTexture&&(t.push(this._transformGridTexture),e.push("u_transformGrid")),this._rasterTexture&&(t.push(this._rasterTexture),e.push("u_image")),this._colormapTexture&&(t.push(this._colormapTexture),e.push("u_colormap")),{names:e,textures:t}}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}updateTexture({context:e}){var t,n,o;if(!this.stage)return(t=this._rasterTexture)==null||t.dispose(),(n=this._transformGridTexture)==null||n.dispose(),(o=this._colormapTexture)==null||o.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._transformGridTexture=null,void(this._colormapTexture=null);const i=this._isValidSource(this.source);i&&this._colormapTextureInvalidated&&(this._colormapTextureInvalidated=!1,this._updateColormapTexture(e)),this._textureInvalidated&&(this._textureInvalidated=!1,this._createOrDestroyRasterTexture(e),this._rasterTexture&&(i?this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=nt(e,this.transformGrid)):this._rasterTexture.setData(null)),this.suspended||(this.ready(),this.requestRender()))}_createOrDestroyRasterTexture(e){var t,n;const o=z(this.source)?it(this.source,this.bandIds):null;if(!this._isValidSource(o))return void(this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null));const i=!this._isBandIdschanged(this.bandIds);if(this._rasterTexture){if(i)return;this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null}this._supportsBilinearTexture=(t=e.capabilities.textureFloat)==null?void 0:t.textureFloatLinear;const a=this._getTextureSamplingMethod(this.interpolation),r=this.isRendereredSource||!((n=e.capabilities.textureFloat)!=null&&n.textureFloat);this._rasterTexture=ot(e,o,a,r),this._rasterTextureBandIds=this.bandIds?[...this.bandIds]:null}_isBandIdschanged(e){const t=this._rasterTextureBandIds;return!(t==null&&e==null||t&&e&&t.join("")===e.join(""))}_isValidSource(e){var t;return z(e)&&((t=e.pixels)==null?void 0:t.length)>0}_getTextureSamplingMethod(e){const{type:t,colormap:n}=this.symbolizerParameters,o=t==="lut"||t==="stretch"&&z(n);return!this._supportsBilinearTexture||o||e!=="bilinear"&&e!=="cubic"?"nearest":"bilinear"}_updateColormapTexture(e){const t=this._colormap,n=this.symbolizerParameters.colormap;return n?t?n.length!==t.length||n.some((o,i)=>o!==t[i])?(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=Ce(e,n),void(this._colormap=n)):void 0:(this._colormapTexture=Ce(e,n),void(this._colormap=n)):(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),void(this._colormap=null))}}function Mt(_){return z(_.source)}class Fe{constructor(e,t){this.rctx=e,this._vertexBuffer=j.createVertex(e,q.STATIC_DRAW,new Uint16Array(t)),this._vao=new K(e,new Map([["a_position",0]]),{geometry:[new at("a_position",2,u.SHORT,0,4)]},{geometry:this._vertexBuffer}),this._count=t.length/2}bind(){this._vao.bind()}unbind(){this._vao.unbind()}dispose(){this._vao.dispose(!1),this._vertexBuffer.dispose()}draw(){this.rctx.bindVAO(this._vao),this.rctx.drawArrays(P.TRIANGLE_STRIP,0,this._count)}}class wt extends U{constructor(){super(...arguments),this._desc={lut:{vsPath:"raster/lut",fsPath:"raster/lut",attributes:new Map([["a_position",0],["a_texcoord",1]])},stretch:{vsPath:"raster/stretch",fsPath:"raster/stretch",attributes:new Map([["a_position",0],["a_texcoord",1]])},hillshade:{vsPath:"raster/hillshade",fsPath:"raster/hillshade",attributes:new Map([["a_position",0],["a_texcoord",1]])}},this._rendererUniformInfos=new Map}dispose(){this._quad&&this._quad.dispose()}prepareState({context:e},t){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(A.ONE,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilFunction(M.EQUAL,t.stencilRef,255)}draw(e,t){var n;if(!Mt(t)||t.suspended)return;e.timeline.begin(this.name);const o=!((n=e.context.capabilities.textureFloat)!=null&&n.textureFloatLinear);t.updateTexture(e);const i=this._getShaderVariations(t,o),a=e.painter.materialManager.getProgram(e,this._desc[t.symbolizerParameters.type],i);this._drawWithProgram(e.context,a,t),e.timeline.end(this.name)}_drawWithProgram(e,t,n,o=1,i=[0,0],a=!1){this._quad||(this._quad=new Fe(e,[0,0,1,0,0,1,1,1]));const{symbolizerParameters:r,transformGrid:c,width:l,height:s,opacity:d}=n,g=r.type;e.useProgram(t);const f=this._getShaderVariations(n),p=this._getUniformInfos(g,e,t,f),{names:S,textures:m}=n.getTextures();rt(e,t,S,m);const T=dt(o,i),E=lt(c,[l,s],[n.source.width,n.source.height],d,a);if(ae(t,p,oe(oe({u_coordScale:n.coordScale,u_dvsMat3:n.transforms.dvs},T),E)),r.colormap){const{colormap:y,colormapOffset:C}=r,h=st(y,C);ae(t,p,h)}if(r.type==="stretch"){const y=ut(r);ae(t,p,y)}else if(r.type==="hillshade"){const y=ct(r);ae(t,p,y)}this._quad.draw()}_getUniformInfos(e,t,n,o){const i=o.length>0?e+"-"+o.join("-"):e;if(this._rendererUniformInfos.has(i))return this._rendererUniformInfos.get(i);const a=ft(t,n);return this._rendererUniformInfos.set(i,a),a}_getShaderVariations(e,t=!1){const n=[],{interpolation:o}=e,{type:i,colormap:a}=e.symbolizerParameters;return o==="cubic"?n.push("bicubic"):o==="bilinear"&&i==="stretch"&&a!=null?(n.push("bilinear"),n.push("nnedge")):t&&o==="bilinear"&&n.push("bilinear"),e.isRendereredSource?n.push("noop"):a&&n.push("applyColormap"),e.transformGrid&&(n.push("applyProjection"),e.transformGrid.spacing[0]===1&&n.push("lookupProjection")),n}}const le=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),Le={beaufort_ft:le,beaufort_m:le,beaufort_km:le,beaufort_mi:le,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),single_arrow:new Float32Array([0,92/255,230/255,1]),wind_speed:new Float32Array([0,0,0,1])};class Ut extends U{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState({context:e},t){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(A.ONE,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilOp(W.KEEP,W.KEEP,W.REPLACE),e.setStencilFunction(M.EQUAL,t.stencilRef,255)}draw(e,t){if(w(t.source)||t.source.validPixelCount===0)return;const{timeline:n}=e;if(n.begin(this.name),t.updateVectorFieldVAO(e),e.renderPass==="scalar"){const o=t.vaoData.scalar;o&&this._drawScalars(e,t,o.vao,o.elementCount)}else{const o=t.vaoData.magdir;o&&this._drawTriangles(e,t,o.vao,o.elementCount)}n.end(this.name)}_drawTriangles(e,t,n,o){const{context:i,painter:a}=e,{symbolizerParameters:r}=t,c=r.dataRange?["dataRange"]:[];r.rotationType==="geographic"&&c.push("rotationGeographic");const l=a.materialManager.getProgram(e,this._desc.magdir,c);i.useProgram(l);const{coordScale:s,opacity:d,transforms:g}=t;l.setUniform2fv("u_coordScale",s),l.setUniform1f("u_opacity",d),l.setUniformMatrix3fv("u_dvsMat3",g.dvs);const{style:f,dataRange:p,rotation:S,symbolPercentRange:m}=r;l.setUniform4fv("u_colors",Le[f]||Le.single_arrow),l.setUniform2fv("u_dataRange",p),l.setUniform1f("u_rotation",S),l.setUniform2fv("u_symbolPercentRange",m);const T=this._getSymbolSize(e,t);l.setUniform2fv("u_symbolSize",T),i.bindVAO(n),i.drawElements(P.TRIANGLES,o,u.UNSIGNED_INT,0)}_drawScalars(e,t,n,o){const{context:i,painter:a}=e,{symbolizerParameters:r}=t,c=[];r.style==="wind_speed"?c.push("innerCircle"):r.dataRange&&c.push("dataRange"),r.rotationType==="geographic"&&c.push("rotationGeographic");const l=a.materialManager.getProgram(e,this._desc.scalar,c);i.useProgram(l);const{coordScale:s,opacity:d,transforms:g}=t;l.setUniform2fv("u_coordScale",s),l.setUniform1f("u_opacity",d),l.setUniformMatrix3fv("u_dvsMat3",g.dvs);const{dataRange:f,symbolPercentRange:p}=r;l.setUniform2fv("u_dataRange",f),l.setUniform2fv("u_symbolPercentRange",p);const S=this._getSymbolSize(e,t);l.setUniform2fv("u_symbolSize",S),i.bindVAO(n),i.drawElements(P.TRIANGLES,o,u.UNSIGNED_INT,0)}_getSymbolSize(e,t){const n=t.key?2**(e.displayLevel-t.key.level):t.resolution/e.state.resolution,{symbolTileSize:o}=t.symbolizerParameters;return[o/(Math.round((t.width-t.offset[0])/o)*o)/n,o/(Math.round((t.height-t.offset[1])/o)*o)/n]}}const pe={nearest:{defines:[],samplingMode:V.NEAREST,mips:!1},bilinear:{defines:[],samplingMode:V.LINEAR,mips:!1},bicubic:{defines:["bicubic"],samplingMode:V.LINEAR,mips:!1},trilinear:{defines:[],samplingMode:V.LINEAR_MIPMAP_LINEAR,mips:!0}},Ft=(_,e,t)=>{if(t.samplingMode==="dynamic"){const{state:n}=_,o=e.resolution/e.pixelRatio/n.resolution,i=Math.round(_.pixelRatio)!==_.pixelRatio,a=o>1.05||o<.95;return n.rotation||a||i||e.isSourceScaled||e.rotation?pe.bilinear:pe.nearest}return pe[t.samplingMode]};class Gt extends U{constructor(){super(...arguments),this._desc={vsPath:"raster/bitmap",fsPath:"raster/bitmap",attributes:new Map([["a_position",0],["a_texcoord",1]])}}dispose(){this._quad&&this._quad.dispose()}prepareState({context:e},t){e.setBlendingEnabled(!0),t.blendFunction==="additive"?e.setBlendFunctionSeparate(A.ONE,A.ONE,A.ONE,A.ONE):e.setBlendFunctionSeparate(A.ONE,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilFunction(M.EQUAL,t.stencilRef,255)}draw(e,t){const{context:n,renderingOptions:o,painter:i}=e;if(!t.source)return;e.timeline.begin(this.name),this._quad||(this._quad=new Fe(n,[0,0,1,0,0,1,1,1]));const a=Ft(e,t,o),r=i.materialManager.getProgram(e,this._desc,a.defines),{coordScale:c,computedOpacity:l,transforms:s}=t;t.setSamplingProfile(a),t.bind(e.context,Oe),n.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",s.dvs),r.setUniform1i("u_texture",Oe),r.setUniform2fv("u_coordScale",c),r.setUniform1f("u_opacity",l),this._quad.draw(),e.timeline.end(this.name)}}const Bt={background:{"background.frag":`uniform lowp vec4 u_color;
void main() {
gl_FragColor = u_color;
}`,"background.vert":`attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump vec2 u_coord_range;
uniform mediump float u_depth;
void main() {
vec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);
gl_Position = vec4(v_pos.xy, 0.0, 1.0);
}`},bitBlit:{"bitBlit.frag":`uniform lowp sampler2D u_tex;
uniform lowp float u_opacity;
varying mediump vec2 v_uv;
void main() {
lowp vec4 color = texture2D(u_tex, v_uv);
gl_FragColor = color *  u_opacity;
}`,"bitBlit.vert":`attribute vec2 a_pos;
attribute vec2 a_tex;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_pos, 0.0, 1.0);
v_uv = a_tex;
}`},blend:{"blend.frag":`precision mediump float;
uniform sampler2D u_layerTexture;
uniform lowp float u_opacity;
uniform lowp float u_inFadeOpacity;
#ifndef NORMAL
uniform sampler2D u_backbufferTexture;
#endif
varying mediump vec2 v_uv;
float rgb2v(in vec3 c) {
return max(c.x, max(c.y, c.z));
}
vec3 rgb2hsv(in vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(in vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
vec3 tint(in vec3 Cb, in vec3 Cs) {
float vIn = rgb2v(Cb);
vec3 hsvTint = rgb2hsv(Cs);
vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
return hsv2rgb(hsvOut);
}
float overlay(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * (1.0 - 2.0 * (1.0 - Cs ) * (1.0 - Cb)) + step(0.5, Cs) * (2.0 * Cs * Cb);
}
float colorDodge(in float Cb, in float Cs) {
return (Cb == 0.0) ? 0.0 : (Cs == 1.0) ? 1.0 : min(1.0, Cb / (1.0 - Cs));
}
float colorBurn(in float Cb, in float Cs) {
return (Cb == 1.0) ? 1.0 : (Cs == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - Cb) / Cs);
}
float hardLight(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * (2.0 * Cs * Cb) + step(0.5, Cs) * (1.0 - 2.0 * (1.0 - Cs) * (1.0 - Cb));
}
float reflectBlend(in float Cb, in float Cs) {
return (Cs == 1.0) ? Cs : min(Cb * Cb / (1.0 - Cs), 1.0);
}
float softLight(in float Cb, in float Cs) {
if (Cs <= 0.5) {
return Cb - (1.0 - 2.0 * Cs) * Cb * (1.0 - Cb);
}
if (Cb <= 0.25) {
return Cb + (2.0 * Cs - 1.0) * Cb * ((16.0 * Cb - 12.0) * Cb + 3.0);
}
return Cb + (2.0 * Cs - 1.0) * (sqrt(Cb) - Cb);
}
float vividLight(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * colorBurn(Cb, 2.0 * Cs) + step(0.5, Cs) * colorDodge(Cb, (2.0 * (Cs - 0.5)));
}
float minv3(in vec3 c) {
return min(min(c.r, c.g), c.b);
}
float maxv3(in vec3 c) {
return max(max(c.r, c.g), c.b);
}
float lumv3(in vec3 c) {
return dot(c, vec3(0.3, 0.59, 0.11));
}
float satv3(vec3 c) {
return maxv3(c) - minv3(c);
}
vec3 clipColor(vec3 color) {
float lum = lumv3(color);
float mincol = minv3(color);
float maxcol = maxv3(color);
if (mincol < 0.0) {
color = lum + ((color - lum) * lum) / (lum - mincol);
}
if (maxcol > 1.0) {
color = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);
}
return color;
}
vec3 setLum(vec3 cbase, vec3 clum) {
float lbase = lumv3(cbase);
float llum = lumv3(clum);
float ldiff = llum - lbase;
vec3 color = cbase + vec3(ldiff);
return clipColor(color);
}
vec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)
{
float minbase = minv3(cbase);
float sbase = satv3(cbase);
float ssat = satv3(csat);
vec3 color;
if (sbase > 0.0) {
color = (cbase - minbase) * ssat / sbase;
} else {
color = vec3(0.0);
}
return setLum(color, clum);
}
void main() {
vec4 src = texture2D(u_layerTexture, v_uv);
#ifdef NORMAL
gl_FragColor = src *  u_opacity;
#else
vec4 dst = texture2D(u_backbufferTexture, v_uv);
vec3 Cs = src.a == 0.0 ? src.rgb : vec3(src.rgb / src.a);
vec3 Cb = dst.a == 0.0 ? dst.rgb : vec3(dst.rgb / dst.a);
float as = u_opacity * src.a;
float ab = dst.a;
#ifdef DESTINATION_OVER
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb, as + ab - as * ab);
#endif
#ifdef SOURCE_IN
vec4 color = vec4(as * Cs * ab, as * ab);
vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);
gl_FragColor = color + fadeColor;
#endif
#ifdef DESTINATION_IN
vec4 color = vec4(ab * Cb * as, ab * as);
vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);
gl_FragColor = color + fadeColor;
#endif
#ifdef SOURCE_OUT
gl_FragColor = vec4(as * Cs * (1.0 - ab), as * (1.0 - ab));
#endif
#ifdef DESTINATION_OUT
gl_FragColor = vec4(ab * Cb * (1.0 - as), ab * (1.0 - as));
#endif
#ifdef SOURCE_ATOP
gl_FragColor = vec4(as * Cs * ab + ab * Cb * (1.0 - as), ab);
#endif
#ifdef DESTINATION_ATOP
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * as, as);
#endif
#ifdef XOR
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * (1.0 - as),
as * (1.0 - ab) + ab * (1.0 - as));
#endif
#ifdef MULTIPLY
gl_FragColor = vec4(as * Cs * ab * Cb + (1.0 - ab) * as * Cs + (1.0 - as) * ab * Cb,
as + ab * (1.0 - as));
#endif
#ifdef SCREEN
gl_FragColor = vec4((Cs + Cb - Cs * Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef OVERLAY
vec3 f = vec3(overlay(Cb.r, Cs.r), overlay(Cb.g, Cs.g), overlay(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef DARKEN
gl_FragColor = vec4(min(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef LIGHTER
gl_FragColor = vec4(as * Cs + ab * Cb, as + ab);
#endif
#ifdef LIGHTEN
gl_FragColor = vec4(max(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR_DODGE
vec3 f = vec3(colorDodge(Cb.r, Cs.r), colorDodge(Cb.g, Cs.g), colorDodge(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR_BURN
vec3 f = vec3(colorBurn(Cb.r, Cs.r), colorBurn(Cb.g, Cs.g), colorBurn(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef HARD_LIGHT
vec3 f = vec3(hardLight(Cb.r, Cs.r), hardLight(Cb.g, Cs.g), hardLight(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef SOFT_LIGHT
vec3 f = vec3(softLight(Cb.r, Cs.r), softLight(Cb.g, Cs.g), softLight(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef DIFFERENCE
gl_FragColor = vec4(abs(Cb - Cs) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef EXCLUSION
vec3 f = Cs + Cb - 2.0 * Cs * Cb;
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef INVERT
gl_FragColor = vec4((1.0 - Cb) * as * ab + Cb * ab * (1.0 - as), ab);
#endif
#ifdef VIVID_LIGHT
vec3 f = vec3(vividLight(Cb.r, Cs.r),
vividLight(Cb.g, Cs.g),
vividLight(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef HUE
vec3 f = setLumSat(Cs,Cb,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef SATURATION
vec3 f = setLumSat(Cb,Cs,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR
vec3 f = setLum(Cs,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef LUMINOSITY
vec3 f = setLum(Cb,Cs);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef PLUS
gl_FragColor = clamp(vec4(src.r + Cb.r, src.g + Cb.g, src.b + Cb.b, as + ab), 0.0, 1.0);
#endif
#ifdef MINUS
gl_FragColor = vec4(clamp(vec3(Cb.r - src.r, Cb.g - src.g, Cb.b - src.b), 0.0, 1.0), ab * as);
#endif
#ifdef AVERAGE
vec3 f = (Cb + Cs) / 2.0;
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef REFLECT
vec3 f = vec3(reflectBlend(Cb.r, Cs.r),
reflectBlend(Cb.g, Cs.g),
reflectBlend(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#endif
}`,"blend.vert":`attribute vec2 a_position;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_position , 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`},dot:{dot:{"dot.frag":`precision mediump float;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
uniform highp float u_tileZoomFactor;
void main()
{
float dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;
float alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);
gl_FragColor = v_color * alpha;
}`,"dot.vert":`precision highp float;
attribute vec2 a_pos;
uniform sampler2D u_texture;
uniform highp mat3 u_dvsMat3;
uniform highp float u_tileZoomFactor;
uniform highp float u_dotSize;
uniform highp float u_pixelRatio;
varying vec2 v_pos;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
const float EPSILON = 0.000001;
void main()
{
mat3 tileToTileTexture = mat3(  1., 0., 0.,
0., -1., 0.,
0., 1., 1.  );
vec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);
v_color = texture2D(u_texture, texCoords.xy);
float smoothEdgeWidth = max(u_dotSize / 2., 1.) ;
float z = 0.;
z += 2.0 * step(v_color.a, EPSILON);
gl_PointSize = (smoothEdgeWidth + u_dotSize);
gl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);
v_dotRatio = u_dotSize / gl_PointSize;
v_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );
gl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);
}`}},filtering:{"bicubic.glsl":`vec4 computeWeights(float v) {
float b = 1.0 / 6.0;
float v2 = v * v;
float v3 = v2 * v;
float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);
float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);
float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);
float w3 = b * v3;
return vec4(w0, w1, w2, w3);
}
vec4 bicubicOffsetsAndWeights(float v) {
vec4 w = computeWeights(v);
float g0 = w.x + w.y;
float g1 = w.z + w.w;
float h0 = 1.0 - (w.y / g0) + v;
float h1 = 1.0 + (w.w / g1) - v;
return vec4(h0, h1, g0, g1);
}
vec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 eX = vec2(1.0 / texSize.x, 0.0);
vec2 eY = vec2(0.0, 1.0 / texSize.y);
vec2 texel = coords * texSize - 0.5;
vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;
vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;
vec2 coords10 = coords + hgX.x * eX;
vec2 coords00 = coords - hgX.y * eX;
vec2 coords11 = coords10 + hgY.x * eY;
vec2 coords01 = coords00 + hgY.x * eY;
coords10 = coords10 - hgY.y * eY;
coords00 = coords00 - hgY.y * eY;
vec4 color00 = texture2D(sampler, coords00);
vec4 color10 = texture2D(sampler, coords10);
vec4 color01 = texture2D(sampler, coords01);
vec4 color11 = texture2D(sampler, coords11);
color00 = mix(color00, color01, hgY.z);
color10 = mix(color10, color11, hgY.z);
color00 = mix(color00, color10, hgX.z);
return color00;
}`,"bilinear.glsl":`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture2D(sampler, coord0);
vec4 color1 = texture2D(sampler, coord1);
vec4 color2 = texture2D(sampler, coord2);
vec4 color3 = texture2D(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
#ifdef NNEDGE
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);
#endif
return color;
}`,"epx.glsl":`vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {
vec2 invSize = 1.0 / texSize;
vec2 texel = coords * texSize;
vec2 texel_i = floor(texel);
vec2 texel_frac = fract(texel);
vec4 colorP = texture2D(sampler, texel_i * invSize);
vec4 colorP1 = vec4(colorP);
vec4 colorP2 = vec4(colorP);
vec4 colorP3 = vec4(colorP);
vec4 colorP4 = vec4(colorP);
vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);
vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);
vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);
vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);
if (colorC == colorA && colorC != colorD && colorA != colorB) {
colorP1 = colorA;
}
if (colorA == colorB && colorA != colorC && colorB != colorD) {
colorP2 = colorB;
}
if (colorD == colorC && colorD != colorB && colorC != colorA) {
colorP3 = colorC;
}
if (colorB == colorD && colorB != colorA && colorD != colorC) {
colorP4 = colorD;
}
vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);
vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);
return mix(colorP12, colorP34, texel_frac.y);
}`},fx:{integrate:{"integrate.frag":`precision mediump float;
uniform lowp sampler2D u_sourceTexture;
uniform lowp sampler2D u_maskTexture;
uniform mediump float u_zoomLevel;
uniform highp float u_timeDelta;
uniform highp float u_animationTime;
varying highp vec2 v_texcoord;
#include <materials/utils.glsl>
void main()
{
#ifdef DELTA
vec4 texel = texture2D(u_sourceTexture, v_texcoord);
vec4 data0 = texture2D(u_maskTexture, v_texcoord);
float flags = data0.r * 255.0;
float groupMinZoom = data0.g * 255.0;
float isVisible = getFilterBit(flags, 0);
float wouldClip = step(groupMinZoom, u_zoomLevel);
float direction = wouldClip * 1.0 + (1.0 - wouldClip) * -1.0;
float dt = u_timeDelta / max(u_animationTime, 0.0001);
vec4 nextState = vec4(texel + direction * dt);
gl_FragColor =  vec4(nextState);
#elif defined(UPDATE)
vec4 texel = texture2D(u_sourceTexture, v_texcoord);
gl_FragColor = texel;
#endif
}`,"integrate.vert":`precision mediump float;
attribute vec2 a_pos;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
}`}},highlight:{"blur.frag":`varying mediump vec2 v_texcoord;
uniform mediump vec4 u_direction;
uniform mediump mat4 u_channelSelector;
uniform mediump float u_sigma;
uniform sampler2D u_texture;
mediump float gauss1(mediump vec2 dir) {
return exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));
}
mediump vec4 selectChannel(mediump vec4 sample) {
return u_channelSelector * sample;
}
void accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {
mediump float w = gauss1(i * u_direction.xy);
tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;
weight += w;
}
void main(void) {
mediump float tot = 0.0;
mediump float weight = 0.0;
accumGauss1(-5.0, tot, weight);
accumGauss1(-4.0, tot, weight);
accumGauss1(-3.0, tot, weight);
accumGauss1(-2.0, tot, weight);
accumGauss1(-1.0, tot, weight);
accumGauss1(0.0, tot, weight);
accumGauss1(1.0, tot, weight);
accumGauss1(2.0, tot, weight);
accumGauss1(3.0, tot, weight);
accumGauss1(4.0, tot, weight);
accumGauss1(5.0, tot, weight);
gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);
}`,"highlight.frag":`varying mediump vec2 v_texcoord;
uniform sampler2D u_texture;
uniform mediump float u_sigma;
uniform sampler2D u_shade;
uniform mediump vec2 u_minMaxDistance;
mediump float estimateDistance() {
mediump float y = texture2D(u_texture, v_texcoord)[3];
const mediump float y0 = 0.5;
mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);
mediump float d = (y - y0) / m0;
return d;
}
mediump vec4 shade(mediump float d) {
mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);
mappedDistance = clamp(mappedDistance, 0.0, 1.0);
return texture2D(u_shade, vec2(mappedDistance, 0.5));
}
void main(void) {
mediump float d = estimateDistance();
gl_FragColor = shade(d);
}`,"textured.vert":`attribute mediump vec2 a_position;
attribute mediump vec2 a_texcoord;
varying mediump vec2 v_texcoord;
void main(void) {
gl_Position = vec4(a_position, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},magnifier:{"magnifier.frag":`uniform lowp vec4 u_background;
uniform mediump sampler2D u_readbackTexture;
uniform mediump sampler2D u_maskTexture;
uniform mediump sampler2D u_overlayTexture;
uniform bool u_maskEnabled;
uniform bool u_overlayEnabled;
varying mediump vec2 v_texCoord;
const lowp float barrelFactor = 1.1;
lowp vec2 barrel(lowp vec2 uv) {
lowp vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
lowp float theta = atan(uvn.y, uvn.x);
lowp float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}
void main(void)
{
lowp vec4 color = texture2D(u_readbackTexture, barrel(v_texCoord));
color = (color + (1.0 - color.a) * u_background);
lowp float mask = u_maskEnabled ? texture2D(u_maskTexture, v_texCoord).a : 1.0;
color *= mask;
lowp vec4 overlayColor = u_overlayEnabled ? texture2D(u_overlayTexture, v_texCoord) : vec4(0);
gl_FragColor = overlayColor + (1.0 - overlayColor.a) * color;
}`,"magnifier.vert":`precision mediump float;
attribute mediump vec2 a_pos;
uniform mediump vec4 u_drawPos;
varying mediump vec2 v_texCoord;
void main(void)
{
v_texCoord = a_pos;
gl_Position = vec4(u_drawPos.xy + vec2(a_pos - 0.5) * u_drawPos.zw, 0.0, 1.0);
}`},materials:{"attributeData.glsl":`uniform highp sampler2D u_attributeData0;
uniform highp sampler2D u_attributeData1;
uniform highp sampler2D u_attributeData2;
uniform highp sampler2D u_attributeData3;
uniform highp int u_attributeTextureSize;
highp vec2 getAttributeDataCoords(in highp vec3 id) {
highp vec3  texel = unpackDisplayIdTexel(id);
highp float size = float(u_attributeTextureSize);
highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);
highp float col = mod(u32, size);
highp float row = (u32 - col) / size;
highp float u = col / size;
highp float v = row / size;
return vec2(u, v);
}
highp vec2 getAttributeDataTextureCoords(in highp vec3 id) {
return (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(u_attributeTextureSize));
}
highp vec4 getAttributeData0(in highp vec3 id) {
vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData0, coords);
}
highp vec4 getAttributeData1(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData1, coords);
}
highp vec4 getAttributeData2(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData2, coords);
}
highp vec4 getAttributeData3(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData3, coords);
}
float u88VVToFloat(in vec2 v) {
bool isMagic = v.x == 255.0 && v.y == 255.0;
if (isMagic) {
return NAN_MAGIC_NUMBER;
}
return (v.x + v.y * float(0x100)) - 32768.0;
}`,"constants.glsl":`const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float SIGNED_BYTE_TO_UNSIGNED = 128.0;
const float POSITION_PRECISION = 1.0 / 8.0;
const float FILL_POSITION_PRECISION = 1.0 / 1.0;
const float SOFT_EDGE_RATIO = 1.0;
const float THIN_LINE_WIDTH_FACTOR = 1.1;
const float THIN_LINE_HALF_WIDTH = 1.0;
const float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;
const float OFFSET_PRECISION = 1.0 / 8.0;
const float OUTLINE_SCALE = 1.0 / 5.0;
const float SDF_FONT_SIZE = 24.0;
const float MAX_SDF_DISTANCE = 8.0;
const float PLACEMENT_PADDING = 8.0;
const float EPSILON = 0.00001;
const int MAX_FILTER_COUNT = 2;
const int ATTR_VV_SIZE = 0;
const int ATTR_VV_COLOR = 1;
const int ATTR_VV_OPACITY = 2;
const int ATTR_VV_ROTATION = 3;
const highp float NAN_MAGIC_NUMBER = 1e-30;
const int BITSET_GENERIC_LOCK_COLOR = 1;
const int BITSET_MARKER_ALIGNMENT_MAP = 0;
const int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;
const int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;
const int BITSET_TYPE_FILL_OUTLINE = 0;
const int BITSET_LINE_SCALE_DASH = 2;`,fill:{"common.glsl":`#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;
#endif
#ifdef DOT_DENSITY
uniform lowp vec4 u_isActive[ 2 ];
uniform highp float u_dotValue;
uniform highp float u_tileDotsOverArea;
uniform highp float u_dotTextureDotCount;
uniform mediump float u_tileZoomFactor;
#endif
varying highp vec3 v_id;
varying lowp vec4 v_color;
varying lowp float v_opacity;
varying mediump vec4 v_aux1;
#ifdef PATTERN
varying mediump vec2 v_tileTextureCoord;
#endif
#ifdef OUTLINED_FILL
varying lowp float v_isOutline;
#endif
#ifdef DOT_DENSITY
varying highp vec2 v_dotTextureCoords;
varying highp vec4 v_dotThresholds[ 2 ];
#endif`,"fill.frag":`precision highp float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/fill/common.glsl>
#ifdef PATTERN
uniform lowp sampler2D u_texture;
#endif
#ifdef DOT_DENSITY
uniform mediump mat4 u_dotColors[ 2 ];
uniform sampler2D u_dotTextures[ 2 ];
uniform vec4 u_dotBackgroundColor;
#endif
#ifdef OUTLINED_FILL
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
lowp vec4 drawLine() {
float v_lineWidth = v_aux1.x;
vec2  v_normal    = v_aux1.yz;
LineData inputs = LineData(
v_color,
v_normal,
v_lineWidth,
v_opacity,
v_id
);
return shadeLine(inputs);
}
#endif
lowp vec4 drawFill() {
lowp vec4 out_color = vec4(0.);
#ifdef HITTEST
out_color = vec4(1.0, 0.0, 0.0, 0.0);
#elif defined(PATTERN)
mediump vec4 v_tlbr = v_aux1;
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
out_color = v_opacity * v_color * color;
#elif defined(DOT_DENSITY) && !defined(HIGHLIGHT)
vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);
vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);
vec4 difference0 = v_dotThresholds[0] - textureThresholds0;
vec4 difference1 = v_dotThresholds[1] - textureThresholds1;
#ifdef DD_DOT_BLENDING
vec4 isPositive0 = step(0.0, difference0);
vec4 isPositive1 = step(0.0, difference1);
float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);
float lessThanEqZero = step(weightSum, 0.0);
float greaterThanZero = 1.0 - lessThanEqZero ;
float divisor = (weightSum + lessThanEqZero);
vec4 weights0 = difference0 * isPositive0 / divisor;
vec4 weights1 = difference1 * isPositive1 / divisor;
vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;
vec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;
#else
float diffMax = max(max4(difference0), max4(difference1));
float lessThanZero = step(diffMax, 0.0);
float greaterOrEqZero = 1.0 - lessThanZero;
vec4 isMax0 = step(diffMax, difference0);
vec4 isMax1 = step(diffMax, difference1);
vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;
vec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;
#endif
out_color = preEffectColor;
#else
out_color = v_opacity * v_color;
#endif
#ifdef HIGHLIGHT
out_color.a = 1.0;
#endif
return out_color;
}
void main() {
#ifdef OUTLINED_FILL
if (v_isOutline > 0.5) {
gl_FragColor = drawLine();
} else {
gl_FragColor = drawFill();
}
#else
gl_FragColor = drawFill();
#endif
}`,"fill.vert":`#define PACKED_LINE
precision highp float;
attribute float a_bitset;
#ifdef DOT_DENSITY
attribute float a_inverseArea;
vec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
#else
attribute vec4 a_color;
attribute vec4 a_aux2;
attribute vec4 a_aux3;
#ifndef SIMPLE
attribute vec4 a_aux1;
attribute vec2 a_zoomRange;
#else
vec2 a_zoomRange = vec2(0.0, 10000.0);
#endif
#endif
uniform vec2 u_tileOffset;
#include <materials/vcommon.glsl>
#include <materials/fill/common.glsl>
#include <materials/fill/hittest.glsl>
#ifdef DOT_DENSITY
vec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {
return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);
}
#endif
#ifdef OUTLINED_FILL
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
void drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {
LineData outputs = buildLine(
out_pos,
a_id,
a_pos,
a_color,
(a_aux3.xy - 128.) / 16.,
(a_aux3.zw - 128.) / 16.,
0.,
a_aux2.z / 16.,
a_bitset,
vec4(0.),
vec2(0.),
a_aux2.w / 16.
);
v_id      = outputs.id;
v_color   = outputs.color;
v_opacity = outputs.opacity;
v_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);
out_color = outputs.color;
}
#endif
void drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {
float a_bitSet = a_bitset;
v_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity = getOpacity();
v_id      = norm(a_id);
out_color = v_color;
#ifdef DOT_DENSITY
mat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,
0., -2. / 512.,  0.,
-1.,  1.,  1.  );
out_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);
#else
out_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);
#endif
#ifdef PATTERN
vec4  a_tlbr   = a_aux1;
float a_width  = a_aux2.x;
float a_height = a_aux2.y;
vec2  a_offset = a_aux2.zw;
vec2  a_scale  = a_aux3.xy;
float a_angle  = a_aux3.z;
vec2 scale = (1.0 / SIGNED_BYTE_TO_UNSIGNED) * a_scale;
float width = u_pixelRatio * u_zoomFactor * a_width * scale.x;
float height = u_pixelRatio * u_zoomFactor * a_height * scale.y;
float angle = C_256_TO_RAD * a_angle;
float sinA = sin(angle);
float cosA = cos(angle);
mat3 patternMatrix = mat3(cosA / width, sinA / height, 0,
-sinA / width, cosA / height, 0,
0,            0,             1);
vec2 tileOffset = vec2(u_tileOffset.x * cosA - u_tileOffset.y * sinA, u_tileOffset.x * sinA + u_tileOffset.y * cosA);
tileOffset = mod(tileOffset, vec2(a_aux2.x, a_aux2.y));
vec2 symbolOffset = (a_offset - tileOffset - SIGNED_BYTE_TO_UNSIGNED) / vec2(width, height);
v_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;
v_aux1 = a_tlbr / u_mosaicSize.xyxy;
#elif defined(DOT_DENSITY)
vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;
vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;
float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;
v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);
v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);
v_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;
#endif
}
#ifdef HITTEST
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
#ifdef OUTLINED_FILL
if (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {
out_pos = vec3(0., 0., 2.);
return;
}
#endif
out_pos = hittestFill();
gl_PointSize = 1.0;
}
#elif defined(OUTLINED_FILL)
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
v_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);
if (v_isOutline > 0.5) {
drawLine(out_color, out_pos);
} else {
drawFill(out_color, out_pos);
}
}
#else
#define draw drawFill
#endif
void main()
{
INIT;
lowp vec4 color = vec4(0.);
highp vec3 pos  = vec3(0.);
draw(color, pos);
gl_Position = vec4(clip(color, pos, getFilterFlags(), a_zoomRange), 1.0);
}`,"hittest.glsl":`#include <materials/hittest/common.glsl>
#ifdef HITTEST
attribute vec2 a_pos1;
attribute vec2 a_pos2;
const float EPSILON_PARALLEL = 0.05;
bool hasSameSide(vec3 p0, vec3 p1, vec3 a, vec3 b) {
vec3 cp0 = cross(b - a, p0 - a);
vec3 cp1 = cross(b - a, p1 - a);
return dot(cp0, cp1) >= 0.;
}
bool intersectPointTriangle(vec3 p, vec3 a, vec3 b, vec3 c) {
return hasSameSide(p, a, b, c) && hasSameSide(p, b, a, c) && hasSameSide(p, c, a, b);
}
bool intersectCircleTriange(vec3 p, vec3 a, vec3 b, vec3 c, float radius) {
vec2 ba = b.xy - a.xy;
vec2 ca = c.xy - a.xy;
float crossProduct = ba.x * ca.y - ca.x * ba.y;
bool isParallel = crossProduct < EPSILON_PARALLEL && crossProduct > -EPSILON_PARALLEL;
if (isParallel) {
return false;
}
if (distance(p, a) <= radius) {
return true;
}
if (distance(p, b) <= radius) {
return true;
}
if (distance(p, c) <= radius) {
return true;
}
vec3 p0 = p - normalize(p - a) * radius;
if (intersectPointTriangle(p0, a, b, c)) {
return true;
}
vec3 p1 = p - normalize(p - b) * radius;
if (intersectPointTriangle(p1, a, b, c)) {
return true;
}
vec3 p2 = p - normalize(p - c) * radius;
return intersectPointTriangle(p2, a, b, c);
}
vec3 hittestFill() {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);
vec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);
vec3  hittestPos = vec3(u_hittestPos, 1.);
float hittestDist = u_hittestDist;
if (!intersectCircleTriange(hittestPos, pos, pos1, pos2, hittestDist)) {
outTextureCoords.z += 2.0;
}
return outTextureCoords;
}
#endif`},hittest:{"common.glsl":`#ifdef HITTEST
uniform float u_hittestDist;
uniform highp vec2 u_hittestPos;
#endif`},icon:{"common.glsl":`uniform lowp vec2 u_mosaicSize;
varying lowp vec4 v_color;
varying highp vec3 v_id;
varying highp vec4 v_sizeTex;
varying mediump vec3 v_pos;
varying highp float v_filters;
varying lowp float v_opacity;
#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
varying mediump float v_overridingOutlineColor;
varying mediump float v_isThin;
#endif`,"hittest.glsl":`#include <materials/hittest/common.glsl>
#ifdef HITTEST
vec3 hittestMarker(vec2 size) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);
vec3  hittestPos = vec3(u_hittestPos, 1.);
float hittestDist = u_hittestDist;
vec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);
float maxHalfSize = max(size.x, size.y) / 2.;
if (distance(pos, hittestPos) - maxHalfSize > hittestDist) {
outTextureCoords.z += 2.0;
}
return outTextureCoords;
}
#endif`,"icon.frag":`precision mediump float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <util/encoding.glsl>
#include <materials/constants.glsl>
#include <materials/icon/common.glsl>
uniform lowp sampler2D u_texture;
#ifdef HITTEST
vec4 getColor() {
return vec4(1.);
}
#elif defined(SDF)
vec4 getColor() {
vec2 v_size = v_sizeTex.xy;
vec2 v_tex  = v_sizeTex.zw;
lowp vec4 fillPixelColor = v_color;
float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));
float size = max(v_size.x, v_size.y);
float dist = d * size * SOFT_EDGE_RATIO * v_distRatio;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
float outlineWidth = v_outlineWidth;
#ifdef HIGHLIGHT
outlineWidth = max(outlineWidth, 4.0 * v_isThin);
#endif
if (outlineWidth > 0.25) {
lowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;
float clampedOutlineSize = min(outlineWidth, size);
outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);
return v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);
}
return v_opacity * fillPixelColor;
}
#else
vec4 getColor() {
vec2 v_tex  = v_sizeTex.zw;
lowp vec4 texColor = texture2D(u_texture, v_tex);
return v_opacity * texColor * v_color;
}
#endif
void main()
{
vec4 color = getColor();
#ifdef HIGHLIGHT
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"icon.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec2 a_bitSetAndDistRatio;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>
#include <materials/icon/hittest.glsl>
vec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float referenceSize, in float bitSet) {
vec2 outSize = baseSize;
#ifdef VV_SIZE
float r = getSize(referenceSize) / referenceSize;
outSize.xy *= r;
offset.xy *= r;
float scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;
#endif
return outSize;
}
vec3 getOffset(in vec2 in_offset, float a_bitSet) {
float isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
vec3  offset       = getRotation() * vec3(in_offset, 0.0);
return getMatrix(isMapAligned) * offset;
}
void main()
{
INIT;
vec2  a_size   = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;
vec2  a_offset = a_vertexOffset / 16.0;
float a_outlineSize = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;
float a_bitSet = a_bitSetAndDistRatio.x;
vec2 v_size = getMarkerSize(a_offset, a_size, a_outlineSize, a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0, a_bitSet);
vec2 v_tex      = a_texCoords / u_mosaicSize;
v_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity  = getOpacity();
v_id       = norm(a_id);
v_filters  = getFilterFlags();
v_pos      = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0) + getOffset(a_offset, a_bitSet);
v_sizeTex  = vec4(v_size.xy, v_tex.xy);
#ifdef SDF
v_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);
#ifdef VV_COLOR
v_overridingOutlineColor = v_isThin;
#else
v_overridingOutlineColor = 0.0;
#endif
v_outlineWidth = min(a_outlineSize, max(max(v_size.x, v_size.y) - 0.99, 0.0));
v_outlineColor = a_outlineColor;
v_distRatio = a_bitSetAndDistRatio.y / 126.0;
#endif
#ifdef HITTEST
vec3 pos = hittestMarker(v_size.xy);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, pos, v_filters, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, v_filters, a_zoomRange), 1.0);
#endif
}`},label:{"common.glsl":`uniform mediump float u_zoomLevel;
uniform mediump float u_mapRotation;
uniform mediump float u_mapAligned;
uniform mediump vec2 u_mosaicSize;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;
varying mediump vec4 v_color;
varying lowp vec4 v_animation;`,"label.frag":"#include <materials/text/text.frag>","label.vert":`precision highp float;
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texAndSize;
attribute vec4 a_refSymbolAndPlacementOffset;
attribute vec4 a_glyphData;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHalo;
uniform float u_mapRotation;
uniform float u_mapAligned;
float getZ(in float minZoom, in float maxZoom, in float angle) {
float glyphAngle = angle * 360.0 / 254.0;
float mapAngle = u_mapRotation * 360.0 / 254.0;
float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
float z = 0.0;
z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));
z += u_mapAligned * 2.0 * step(90.0, diffAngle);
z += 2.0 * (1.0 - step(u_currentZoom, maxZoom));
return z;
}
void main()
{
INIT;
float groupMinZoom    = getMinZoom();
float glyphMinZoom    = a_glyphData.x;
float glyphMaxZoom    = a_glyphData.y;
float glyphAngle      = a_glyphData.z;
float a_minZoom          = max(groupMinZoom, glyphMinZoom);
float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;
vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);
float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;
float fontSize           = a_texAndSize.z;
float haloSize           = a_texAndSize.w * OUTLINE_SCALE;
vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;
vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);
float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);
float fontScale    = fontSize / SDF_FONT_SIZE;
float halfSize     = getSize(a_refSymbolSize) / 2.0;
float animation    = pow(getAnimationState(), vec4(2.0)).r;
v_color     = animation * ((1.0 - u_isHalo) * a_color + (u_isHalo * a_haloColor));
v_opacity   = 1.0;
v_tex       = a_texCoords / u_mosaicSize;
v_edgeDistanceOffset = u_isHalo * haloSize / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);
vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);
gl_Position = vec4(v_pos, 1.0);
#ifdef DEBUG
v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);
#endif
}`},line:{"common.glsl":`varying lowp vec4 v_color;
varying highp vec3 v_id;
varying mediump vec2 v_normal;
varying mediump float v_lineHalfWidth;
varying lowp float v_opacity;
#ifdef PATTERN
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
#endif
#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance;
#endif
#ifdef SDF
varying mediump float v_lineWidthRatio;
#endif`,"hittest.glsl":`#include <materials/hittest/common.glsl>
#ifdef HITTEST
attribute vec2 a_pos1;
attribute vec2 a_pos2;
bool intersectCircleLineInner(vec3 p, vec3 a, vec3 b, float radius) {
vec3 v0 = a - p;
vec3 b2 = b - p;
vec3 v  = b2 - v0;
float D = 4. * dot(v0, v) * dot(v0, v) - 4. * dot(v, v) * ( dot(v0, v0) - radius * radius );
if (D < 0.) {
return false;
}
float sqrtD = sqrt(D);
float t0 = (-2. * dot(v0, v) + sqrtD) / (2. * dot(v, v));
float t1 = (-2. * dot(v0, v) - sqrtD) / (2. * dot(v, v));
return ((t0 >= 0. && t0 <= 1.) || (t1 >= 0. && t1 <= 1.));
}
bool intersectCircleLine(vec3 p, vec3 a, vec3 b, vec3 c, float radius) {
return intersectCircleLineInner(p, a, b, radius) || intersectCircleLineInner(p, b, c, radius);
}
vec3 hittestLine(float halfWidth) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);
vec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);
vec3  hittestPos = vec3(u_hittestPos, 1.);
float hittestDist = u_hittestDist;
if (!intersectCircleLine(hittestPos, pos, pos1, pos2, hittestDist + halfWidth)) {
outTextureCoords.z += 2.0;
}
return outTextureCoords;
}
#endif`,"line.frag":`precision lowp float;
#include <util/encoding.glsl>
#include <materials/constants.glsl>
#include <materials/line/common.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
#ifdef HITTEST
void main() {
gl_FragColor = vec4(1.);
}
#else
void main() {
LineData inputs = LineData(
v_color,
v_normal,
v_lineHalfWidth,
v_opacity,
#ifndef OUTLINED_FILL
#ifdef PATTERN
v_tlbr,
v_patternSize,
#endif
#ifdef SDF
v_lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance,
#endif
#endif
v_id
);
gl_FragColor = shadeLine(inputs);
}
#endif`,"line.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;
attribute vec2 a_aux;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/line/common.glsl>
#include <materials/line/hittest.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
#ifdef HITTEST
void draw() {
float aa        = 0.5 * u_antialiasing;
float a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;
float a_cimHalfWidth = a_aux.x / 16. ;
vec2  a_offset = a_offsetAndNormal.xy / 16.;
float baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
gl_PointSize = 1.;
vec3 pos = hittestLine(halfWidth);
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#else
void draw()
{
highp vec3 pos = vec3(0.);
LineData outputs = buildLine(
pos,
a_id,
a_pos,
a_color,
a_offsetAndNormal.xy / 16.,
a_offsetAndNormal.zw / 16.,
a_accumulatedDistanceAndHalfWidth.x,
a_accumulatedDistanceAndHalfWidth.y / 16.,
a_segmentDirection.w,
a_tlbr,
a_segmentDirection.xy / 16.,
a_aux.x / 16.
);
v_id              = outputs.id;
v_color           = outputs.color;
v_normal          = outputs.normal;
v_lineHalfWidth   = outputs.lineHalfWidth;
v_opacity         = outputs.opacity;
#ifndef OUTLINED_FILL
#ifdef PATTERN
v_tlbr          = outputs.tlbr;
v_patternSize   = outputs.patternSize;
#endif
#ifdef SDF
v_lineWidthRatio = outputs.lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance = outputs.accumulatedDistance;
#endif
#endif
gl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#endif
void main() {
INIT;
draw();
}`},shared:{line:{"common.glsl":`#if !defined(OUTLINED_FILL) && defined(PATTERN)
uniform mediump vec2 u_mosaicSize;
#endif
struct LineData {
lowp vec4 color;
mediump vec2 normal;
mediump float lineHalfWidth;
lowp float opacity;
#ifndef OUTLINED_FILL
#ifdef PATTERN
mediump vec4 tlbr;
mediump vec2 patternSize;
#endif
#ifdef SDF
mediump float lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
highp float accumulatedDistance;
#endif
#endif
highp vec3 id;
};`,"line.frag":`uniform lowp float u_blur;
#if !defined(OUTLINED_FILL) && !defined(HIGHLIGHT)
#if defined(PATTERN) || defined(SDF)
uniform sampler2D u_texture;
uniform highp float u_pixelRatio;
#endif
#endif
#if defined(SDF) && !defined(HIGHLIGHT) && !defined(OUTLINED_FILL)
lowp vec4 getLineColor(LineData line) {
mediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;
mediump float relativeTexX = fract(u_pixelRatio * line.accumulatedDistance / adjustedPatternWidth);
mediump float relativeTexY = 0.5 + 0.25 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * line.lineHalfWidth;
return line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;
}
#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(OUTLINED_FILL)
lowp vec4 getLineColor(LineData line) {
mediump float lineHalfWidth = line.lineHalfWidth;
mediump float adjustedPatternWidth = line.patternSize.x * 2.0 * lineHalfWidth / line.patternSize.y;
mediump float relativeTexX = fract(u_pixelRatio * line.accumulatedDistance / adjustedPatternWidth);
mediump float relativeTexY = 0.5 + 0.5 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexY, relativeTexX));
lowp vec4 color = texture2D(u_texture, texCoord);
return line.opacity * line.color * color;
}
#else
lowp vec4 getLineColor(LineData line) {
return line.opacity * line.color;
}
#endif
vec4 shadeLine(LineData line)
{
mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);
mediump float fragDist = length(line.normal) * line.lineHalfWidth;
lowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);
lowp vec4 out_color = getLineColor(line) * alpha;
#ifdef HIGHLIGHT
out_color.a = step(1.0 / 255.0, out_color.a);
#endif
#ifdef ID
if (out_color.a < 1.0 / 255.0) {
discard;
}
out_color = vec4(line.id, 0.0);
#endif
return out_color;
}`,"line.vert":`float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {
#ifdef VV_SIZE
float refLineWidth = 2.0 * referenceHalfWidth;
return 0.5 * (lineHalfWidth / referenceHalfWidth) * getSize(refLineWidth);
#else
return lineHalfWidth;
#endif
}
float getLineHalfWidth(in float baseWidth, in float aa) {
float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;
#ifdef HIGHLIGHT
halfWidth = max(halfWidth, 2.0);
#endif
return halfWidth;
}
vec2 getDist(in vec2 offset, in float halfWidth) {
float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);
return thinLineFactor * halfWidth * offset;
}
LineData buildLine(
out vec3 out_pos,
in vec3 in_id,
in vec2 in_pos,
in vec4 in_color,
in vec2 in_offset,
in vec2 in_normal,
in float in_accumulatedDist,
in float in_lineHalfWidth,
in float in_bitSet,
in vec4 in_tlbr,
in vec2 in_segmentDirection,
in float in_referenceHalfWidth
)
{
float aa        = 0.5 * u_antialiasing;
float baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
float z         = 2.0 * step(baseWidth, 0.0);
vec2  dist      = getDist(in_offset, halfWidth);
vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);
vec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;
#ifdef OUTLINED_FILL
vec4  color     = in_color;
float opacity   = 1.0;
#else
vec4  color     = getColor(in_color, in_bitSet, 0);
float opacity   = getOpacity();
#ifdef SDF
const float SDF_PATTERN_HALF_WIDTH = 15.5;
float scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);
float lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;
#endif
#endif
out_pos = vec3(pos.xy, z);
return LineData(
color,
in_normal,
halfWidth,
opacity,
#ifndef OUTLINED_FILL
#ifdef PATTERN
in_tlbr / u_mosaicSize.xyxy,
vec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),
#endif
#ifdef SDF
lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
in_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),
#endif
#endif
norm(in_id)
);
}`}},text:{"common.glsl":`uniform highp vec2 u_mosaicSize;
varying highp vec3 v_id;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
varying lowp vec4 v_color;
varying highp vec2 v_tex;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying lowp float v_transparency;`,"hittest.glsl":`#include <materials/hittest/common.glsl>
#ifdef HITTEST
vec3 hittestGlyph(in vec3 in_pos, in vec3 offset, in float fontSize) {
vec3 pos        = u_viewMat3 * u_tileMat3 * in_pos + u_tileMat3 * offset;
vec3  hittestPos = vec3(u_hittestPos, 1.);
float hittestDist = u_hittestDist;
vec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);
float halfFontSize = fontSize / 2.;
if (distance(pos, hittestPos) > hittestDist + halfFontSize) {
outTextureCoords.z += 2.0;
}
return outTextureCoords;
}
#endif`,"text.frag":`precision mediump float;
#include <materials/text/common.glsl>
uniform lowp sampler2D u_texture;
#ifdef HITTEST
vec4 getColor() {
return vec4(1.);
}
#else
vec4 getColor()
{
float SDF_CUTOFF = (2.0 / 8.0);
float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;
#ifdef HIGHLIGHT
edge /= 2.0;
#endif
lowp float aa = v_antialiasingWidth;
lowp float alpha = smoothstep(edge - aa, edge + aa, dist);
return alpha * v_color * v_opacity;
}
#endif
void main()
{
gl_FragColor = getColor();
}`,"text.vert":`precision highp float;
#include <materials/utils.glsl>
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
#include <materials/text/hittest.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texFontSize;
attribute vec4 a_aux;
attribute vec2 a_zoomRange;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHalo;
float getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {
#ifdef VV_SIZE
float r = getSize(referenceSize) / referenceSize;
baseSize *= r;
offset.xy *= r;
return baseSize;
#endif
return baseSize;
}
void main()
{
INIT;
float a_referenceSize = a_aux.z * a_aux.z / 256.0;
float a_bitSet        = a_aux.w;
float a_fontSize      = a_texFontSize.z;
vec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;
vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);
float fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);
float fontScale     = fontSize / SDF_FONT_SIZE;
vec3  offset        = getRotation() * vec3(a_offset, 0.0);
mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;
v_color   = u_isHalo * a_haloColor + (1.0 - u_isHalo) * getColor(a_color, a_bitSet, 1);
v_opacity = getOpacity();
v_id      = norm(a_id);
v_tex     = a_texCoords / u_mosaicSize;
v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;
v_edgeDistanceOffset = u_isHalo * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
#ifdef HITTEST
vec3 pos = hittestGlyph(in_pos, offset, fontSize);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
#else
gl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);
#endif
}`},"utils.glsl":`float rshift(in float u32, in int amount) {
return floor(u32 / pow(2.0, float(amount)));
}
float getBit(in float bitset, in int bitIndex) {
float offset = pow(2.0, float(bitIndex));
return mod(floor(bitset / offset), 2.0);
}
float getFilterBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex + 1);
}
float getHighlightBit(in float bitset) {
return getBit(bitset, 0);
}
highp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {
float isAggregate = getBit(bitset.b, 7);
return (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));
}
vec4 unpack(in float u32) {
float r = mod(rshift(u32, 0), 255.0);
float g = mod(rshift(u32, 8), 255.0);
float b = mod(rshift(u32, 16), 255.0);
float a = mod(rshift(u32, 24), 255.0);
return vec4(r, g, b, a);
}
vec3 norm(in vec3 v) {
return v /= 255.0;
}
vec4 norm(in vec4 v) {
return v /= 255.0;
}
float max4(vec4 target) {
return max(max(max(target.x, target.y), target.z), target.w);
}
vec2 unpack_u8_nf32(vec2 bytes) {
return (bytes - 127.0) / 127.0;
}`,"vcommon.glsl":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/attributeData.glsl>
#include <materials/vv.glsl>
attribute vec2 a_pos;
attribute highp vec3 a_id;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform highp mat3 u_tileMat3;
uniform highp mat3 u_viewMat3;
uniform highp float u_pixelRatio;
uniform mediump float u_zoomFactor;
uniform mediump float u_antialiasing;
uniform mediump float u_currentZoom;
vec4 VV_ADATA = vec4(0.0);
void loadVisualVariableData(inout vec4 target) {
#ifdef OES_TEXTURE_FLOAT
target.rgba = getAttributeData2(a_id);
#else
vec4 data0 = getAttributeData2(a_id);
vec4 data1 = getAttributeData3(a_id);
target.r = u88VVToFloat(data0.rg * 255.0);
target.g = u88VVToFloat(data0.ba * 255.0);
target.b = u88VVToFloat(data1.rg * 255.0);
target.a = u88VVToFloat(data1.ba * 255.0);
#endif
}
#ifdef VV
#define INIT loadVisualVariableData(VV_ADATA)
#else
#define INIT
#endif
vec4 getColor(in vec4 a_color, in float a_bitSet, int index) {
#ifdef VV_COLOR
float isColorLocked   = getBit(a_bitSet, index);
return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);
#else
return a_color;
#endif
}
float getOpacity() {
#ifdef VV_OPACITY
return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);
#else
return 1.0;
#endif
}
float getSize(in float in_size) {
#ifdef VV_SIZE
return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE]);
#else
return in_size;
#endif
}
mat3 getRotation() {
#ifdef VV_ROTATION
return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));
#else
return mat3(1.0);
#endif
}
float getFilterFlags() {
#ifdef IGNORES_SAMPLER_PRECISION
return ceil(getAttributeData0(a_id).x * 255.0);
#else
return getAttributeData0(a_id).x * 255.0;
#endif
}
vec4 getAnimationState() {
return getAttributeData1(a_id);
}
float getMinZoom() {
vec4 data0 = getAttributeData0(a_id) * 255.0;
return data0.g;
}
mat3 getMatrix(float isMapAligned) {
return isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;
}
vec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));
#ifdef INSIDE
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));
#elif defined(OUTSIDE)
pos.z += 2.0 * getFilterBit(filterFlags, 1);
#elif defined(HIGHLIGHT)
#if !defined(HIGHLIGHT_ALL)
pos.z += 2.0 * (1.0 - getHighlightBit(filterFlags));
#endif
#endif
pos.z += 2.0 * (step(minMaxZoom.y, u_currentZoom) + (1.0 - step(minMaxZoom.x, u_currentZoom)));
return pos;
}`,"vv.glsl":`#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)
#define VV_SIZE
#endif
#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)
#define VV
#endif
#ifdef VV_COLOR
uniform highp float u_vvColorValues[8];
uniform vec4 u_vvColors[8];
#endif
#ifdef VV_SIZE_MIN_MAX_VALUE
uniform highp vec4 u_vvSizeMinMaxValue;
#endif
#ifdef VV_SIZE_SCALE_STOPS
uniform highp float u_vvSizeScaleStopsValue;
#endif
#ifdef VV_SIZE_FIELD_STOPS
uniform highp float u_vvSizeFieldStopsValues[6];
uniform float u_vvSizeFieldStopsSizes[6];
#endif
#ifdef VV_SIZE_UNIT_VALUE
uniform highp float u_vvSizeUnitValueWorldToPixelsRatio;
#endif
#ifdef VV_OPACITY
uniform highp float u_vvOpacityValues[8];
uniform float u_vvOpacities[8];
#endif
#ifdef VV_ROTATION
uniform lowp float u_vvRotationType;
#endif
bool isNan(float val) {
return (val == NAN_MAGIC_NUMBER);
}
#ifdef VV_SIZE_MIN_MAX_VALUE
float getVVMinMaxSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
float interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);
interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);
return u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);
}
#endif
#ifdef VV_SIZE_FIELD_STOPS
const int VV_SIZE_N = 6;
float getVVStopsSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
if (sizeValue <= u_vvSizeFieldStopsValues[0]) {
return u_vvSizeFieldStopsSizes[0];
}
for (int i = 1; i < VV_SIZE_N; ++i) {
if (u_vvSizeFieldStopsValues[i] >= sizeValue) {
float f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);
return mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);
}
}
return u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];
}
#endif
#ifdef VV_SIZE_UNIT_VALUE
float getVVUnitValue(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
return u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;
}
#endif
#ifdef VV_OPACITY
const int VV_OPACITY_N = 8;
float getVVOpacity(float opacityValue) {
if (isNan(opacityValue)) {
return 1.0;
}
if (opacityValue <= u_vvOpacityValues[0]) {
return u_vvOpacities[0];
}
for (int i = 1; i < VV_OPACITY_N; ++i) {
if (u_vvOpacityValues[i] >= opacityValue) {
float f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);
return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);
}
}
return u_vvOpacities[VV_OPACITY_N - 1];
}
#endif
#ifdef VV_ROTATION
mat4 getVVRotation(float rotationValue) {
if (isNan(rotationValue)) {
return mat4(1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1);
}
float rotation = rotationValue;
if (u_vvRotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat4(cosA, sinA, 0, 0,
-sinA,  cosA, 0, 0,
0,     0, 1, 0,
0,     0, 0, 1);
}
mat3 getVVRotationMat3(float rotationValue) {
if (isNan(rotationValue)) {
return mat3(1, 0, 0,
0, 1, 0,
0, 0, 1);
}
float rotation = rotationValue;
if (u_vvRotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * -rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat3(cosA, -sinA, 0,
sinA, cosA, 0,
0,    0,    1);
}
#endif
#ifdef VV_COLOR
const int VV_COLOR_N = 8;
vec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {
if (isNan(colorValue) || isColorLocked == 1.0) {
return fallback;
}
if (colorValue <= u_vvColorValues[0]) {
return u_vvColors[0];
}
for (int i = 1; i < VV_COLOR_N; ++i) {
if (u_vvColorValues[i] >= colorValue) {
float f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);
return mix(u_vvColors[i-1], u_vvColors[i], f);
}
}
return u_vvColors[VV_COLOR_N - 1];
}
#endif
float getVVSize(in float size, in float vvSize)  {
#ifdef VV_SIZE_MIN_MAX_VALUE
return getVVMinMaxSize(vvSize, size);
#elif defined(VV_SIZE_SCALE_STOPS)
return u_vvSizeScaleStopsValue;
#elif defined(VV_SIZE_FIELD_STOPS)
float outSize = getVVStopsSize(vvSize, size);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_UNIT_VALUE)
return getVVUnitValue(vvSize, size);
#else
return size;
#endif
}`},"post-processing":{blit:{"blit.frag":`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
gl_FragColor = texture2D(u_texture, v_uv);
}`},bloom:{composite:{"composite.frag":`precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_blurTexture1;
uniform sampler2D u_blurTexture2;
uniform sampler2D u_blurTexture3;
uniform sampler2D u_blurTexture4;
uniform sampler2D u_blurTexture5;
uniform float u_bloomStrength;
uniform float u_bloomRadius;
uniform float u_bloomFactors[NUMMIPS];
uniform vec3 u_bloomTintColors[NUMMIPS];
float lerpBloomFactor(const in float factor) {
float mirrorFactor = 1.2 - factor;
return mix(factor, mirrorFactor, u_bloomRadius);
}
void main() {
gl_FragColor = u_bloomStrength * (
lerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +
lerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +
lerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +
lerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +
lerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)
);
}`},gaussianBlur:{"gaussianBlur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
uniform vec2 u_direction;
varying vec2 v_uv;
#define KERNEL_RADIUS RADIUS
#define SIGMA RADIUS
float gaussianPdf(in float x, in float sigma) {
return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;
}
void main() {
vec2 invSize = 1.0 / u_texSize;
float fSigma = float(SIGMA);
float weightSum = gaussianPdf(0.0, fSigma);
vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;
for (int i = 1; i < KERNEL_RADIUS; i ++) {
float x = float(i);
float w = gaussianPdf(x, fSigma);
vec2 uvOffset = u_direction * invSize * x;
vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);
vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);
pixelColorSum += (sample1 + sample2) * w;
weightSum += 2.0 * w;
}
gl_FragColor = pixelColorSum /weightSum;
}`},luminosityHighPass:{"luminosityHighPass.frag":`precision mediump float;
uniform sampler2D u_texture;
uniform vec3 u_defaultColor;
uniform float u_defaultOpacity;
uniform float u_luminosityThreshold;
uniform float u_smoothWidth;
varying vec2 v_uv;
void main() {
vec4 texel = texture2D(u_texture, v_uv);
vec3 luma = vec3(0.299, 0.587, 0.114);
float v = dot(texel.xyz, luma);
vec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);
float alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);
gl_FragColor = mix(outputColor, texel, alpha);
}`}},blur:{gaussianBlur:{"gaussianBlur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
uniform vec2 u_direction;
uniform float u_sigma;
varying vec2 v_uv;
#define KERNEL_RADIUS RADIUS
float gaussianPdf(in float x, in float sigma) {
return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;
}
void main() {
vec2 invSize = 1.0 / u_texSize;
float fSigma = u_sigma;
float weightSum = gaussianPdf(0.0, fSigma);
vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;
for (int i = 1; i < KERNEL_RADIUS; i ++) {
float x = float(i);
float w = gaussianPdf(x, fSigma);
vec2 uvOffset = u_direction * invSize * x;
vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);
vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);
pixelColorSum += (sample1 + sample2) * w;
weightSum += 2.0 * w;
}
gl_FragColor = pixelColorSum /weightSum;
}`},"radial-blur":{"radial-blur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
const float sampleDist = 1.0;
const float sampleStrength = 2.2;
void main(void) {
float samples[10];
samples[0] = -0.08;
samples[1] = -0.05;
samples[2] = -0.03;
samples[3] = -0.02;
samples[4] = -0.01;
samples[5] =  0.01;
samples[6] =  0.02;
samples[7] =  0.03;
samples[8] =  0.05;
samples[9] =  0.08;
vec2 dir = 0.5 - v_uv;
float dist = sqrt(dir.x * dir.x + dir.y * dir.y);
dir = dir / dist;
vec4 color = texture2D(u_colorTexture,v_uv);
vec4 sum = color;
for (int i = 0; i < 10; i++) {
sum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);
}
sum *= 1.0 / 11.0;
float t = dist * sampleStrength;
t = clamp(t, 0.0, 1.0);
gl_FragColor = mix(color, sum, t);
}`}},dra:{"dra.frag":`precision mediump float;
uniform sampler2D u_minColor;
uniform sampler2D u_maxColor;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
vec4 minColor = texture2D(u_minColor, vec2(0.5));
vec4 maxColor = texture2D(u_maxColor, vec2(0.5));
vec4 color = texture2D(u_texture, v_uv);
vec3 minColorUnpremultiply = minColor.rgb / minColor.a;
vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;
vec3 colorUnpremultiply = color.rgb / color.a;
vec3 range = maxColorUnpremultiply - minColorUnpremultiply;
gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);
}`,"min-max":{"min-max.frag":`#extension GL_EXT_draw_buffers : require
precision mediump float;
#define CELL_SIZE 2
uniform sampler2D u_minTexture;
uniform sampler2D u_maxTexture;
uniform vec2 u_srcResolution;
uniform vec2 u_dstResolution;
varying vec2 v_uv;
void main() {
vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);
vec2 onePixel = vec2(1.0) / u_srcResolution;
vec2 uv = (srcPixel + 0.5) / u_srcResolution;
vec4 minColor = vec4(1.0);
vec4 maxColor = vec4(0.0);
for (int y = 0; y < CELL_SIZE; ++y) {
for (int x = 0; x < CELL_SIZE; ++x) {
vec2 offset = uv + vec2(x, y) * onePixel;
minColor = min(minColor, texture2D(u_minTexture, offset));
maxColor = max(maxColor, texture2D(u_maxTexture, offset));
}
}
gl_FragData[0] = minColor;
gl_FragData[1] = maxColor;
}`}},"drop-shadow":{composite:{"composite.frag":`precision mediump float;
uniform sampler2D u_layerFBOTexture;
uniform sampler2D u_blurTexture;
uniform vec4 u_shadowColor;
uniform vec2 u_shadowOffset;
uniform highp mat3 u_displayViewMat3;
varying vec2 v_uv;
void main() {
vec3 offset = u_displayViewMat3 * vec3(u_shadowOffset, 0.0);
vec4 layerColor = texture2D(u_layerFBOTexture, v_uv);
vec4 blurColor = texture2D(u_blurTexture, v_uv - offset.xy / 2.0);
gl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);
}`}},"edge-detect":{"frei-chen":{"frei-chen.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
varying vec2 v_uv;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[9];
const mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );
const mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );
const mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );
const mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );
const mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );
const mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );
const mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );
const mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );
const mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );
void main() {
G[0] = g0,
G[1] = g1,
G[2] = g2,
G[3] = g3,
G[4] = g4,
G[5] = g5,
G[6] = g6,
G[7] = g7,
G[8] = g8;
mat3 I;
float cnv[9];
vec3 sample;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 9; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
float M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);
float S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);
gl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);
}`},sobel:{"sobel.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );
const mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);
}`}},"edge-enhance":{"edge-enhance.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );
const mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
vec4 color = texture2D(u_colorTexture, v_uv);
gl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);
}`},filterEffect:{"filterEffect.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform mat4 u_coefficients;
varying vec2 v_uv;
void main() {
vec4 color = texture2D(u_colorTexture, v_uv);
vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
float a = color.a;
gl_FragColor = vec4(a * rgbw.rgb, a);
}`},pp:{"pp.vert":`precision mediump float;
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
gl_Position = vec4(a_position, 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`}},raster:{bitmap:{"bitmap.frag":`precision mediump float;
varying highp vec2 v_texcoord;
uniform sampler2D u_texture;
uniform highp vec2 u_coordScale;
uniform lowp float u_opacity;
#include <filtering/bicubic.glsl>
void main() {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);
#else
vec4 color = texture2D(u_texture, v_texcoord);
#endif
float alpha = u_opacity * color.a;
gl_FragColor = vec4(alpha * color.rgb, alpha);
}`,"bitmap.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`},common:{"common.glsl":`uniform sampler2D u_image;
uniform int u_bandCount;
uniform bool u_isFloatTexture;
uniform bool u_flipY;
uniform float u_opacity;
uniform int u_resampling;
uniform vec2 u_srcImageSize;
#ifdef APPLY_PROJECTION
#include <raster/common/projection.glsl>
#endif
#ifdef BICUBIC
#include <filtering/bicubic.glsl>
#endif
#ifdef BILINEAR
#include <filtering/bilinear.glsl>
#endif
vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
#ifdef APPLY_PROJECTION
targetLocation = projectPixelLocation(targetLocation);
#endif
return targetLocation;
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);
#elif defined(BILINEAR)
vec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);
#else
vec4 color = texture2D(u_image, pixelLocation);
#endif
return color;
}`,"contrastBrightness.glsl":`uniform float u_contrastOffset;
uniform float u_brightnessOffset;
vec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {
vec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;
float maxI = 255.0;
float mid = 128.0;
float c = u_contrastOffset;
float b = u_brightnessOffset;
vec4 v;
if (c > 0.0 && c < 100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;
} else if (c <= 0.0 && c > -100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;
} else if (c == 100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);
v = (sign(v) + 1.0) / 2.0;
} else if (c == -100.0) {
v = vec4(mid, mid, mid, currentPixel.a);
}
return vec4(v.r / 255.0, v.g / 255.0, v.b / 255.0, currentPixel.a);
}`,"projection.glsl":`uniform sampler2D u_transformGrid;
uniform vec2 u_transformSpacing;
uniform vec2 u_transformGridSize;
uniform vec2 u_targetImageSize;
vec2 projectPixelLocation(vec2 coords) {
#ifdef LOOKUP_PROJECTION
vec4 pv = texture2D(u_transformGrid, coords);
return vec2(pv.r, pv.g);
#endif
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;
}`},flow:{"flow.frag":`precision highp float;
varying float v_side;
varying float v_time;
varying float v_totalTime;
varying float v_timeSeed;
varying vec4 v_lineColor;
varying float v_lineRenderWidth;
uniform float u_time;
uniform float u_fadeDuration;
uniform float u_lineSpeed;
void main(void) {
vec4 color = v_lineColor;
float edgeWidth = min(2.0 * v_lineRenderWidth - 1.0, 1.0);
float edgeStart = (v_lineRenderWidth - edgeWidth) / v_lineRenderWidth;
if (edgeStart < 0.95) {
float s = step(edgeStart, abs(v_side));
color.a *= (1.0 - s) + s * (1.0 - (abs(v_side) - edgeStart) / (1.0 - edgeStart));
}
float t = mod(v_timeSeed * (v_totalTime + u_fadeDuration) + u_time * u_lineSpeed, v_totalTime + u_fadeDuration) - v_time;
color.a *= step(0.0, t) * exp(-2.3 * t / u_fadeDuration);
color.rgb *= color.a;
gl_FragColor = color;
}`,"flow.vert":`precision highp float;
attribute vec3 a_positionAndSide;
attribute vec3 a_timeInfo;
attribute vec2 a_extrude;
attribute float a_speed;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
varying float v_side;
varying float v_time;
varying float v_totalTime;
varying float v_timeSeed;
varying vec4 v_lineColor;
varying float v_lineRenderWidth;
#define MAX_STOPS 8
#ifdef VV_LINE_COLOR
uniform float u_lineColor_stops[MAX_STOPS];
uniform vec4 u_lineColor_values[MAX_STOPS];
uniform int u_lineColor_count;
#else
uniform vec4 u_lineColor;
#endif
#ifdef VV_LINE_OPACITY
uniform float u_lineOpacity_stops[MAX_STOPS];
uniform float u_lineOpacity_values[MAX_STOPS];
uniform int u_lineOpacity_count;
#else
uniform float u_lineOpacity;
#endif
#ifdef VV_LINE_RENDER_WIDTH
uniform float u_lineRenderWidth_stops[MAX_STOPS];
uniform float u_lineRenderWidth_values[MAX_STOPS];
uniform int u_lineRenderWidth_count;
#else
uniform float u_lineRenderWidth;
#endif
void main(void) {
float x = a_speed;
#ifdef VV_LINE_COLOR
vec4 lineColor = u_lineColor_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_lineColor_count) {
break;
}
float x1 = u_lineColor_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_lineColor_stops[i];
vec4 y2 = u_lineColor_values[i];
if (x < x2) {
vec4 y1 = u_lineColor_values[i - 1];
lineColor = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
lineColor = y2;
}
}
}
#else
vec4 lineColor = u_lineColor;
#endif
#ifdef VV_LINE_OPACITY
float lineOpacity = u_lineOpacity_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_lineOpacity_count) {
break;
}
float x1 = u_lineOpacity_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_lineOpacity_stops[i];
float y2 = u_lineOpacity_values[i];
if (x < x2) {
float y1 = u_lineOpacity_values[i - 1];
lineOpacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
lineOpacity = y2;
}
}
}
#else
float lineOpacity = u_lineOpacity;
#endif
#ifdef VV_LINE_RENDER_WIDTH
float lineRenderWidth = u_lineRenderWidth_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_lineRenderWidth_count) {
break;
}
float x1 = u_lineRenderWidth_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_lineRenderWidth_stops[i];
float y2 = u_lineRenderWidth_values[i];
if (x < x2) {
float y1 = u_lineRenderWidth_values[i - 1];
lineRenderWidth = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
lineRenderWidth = y2;
}
}
}
#else
float lineRenderWidth = u_lineRenderWidth;
#endif
vec2 position = a_positionAndSide.xy;
float side = a_positionAndSide.z;
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineRenderWidth, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_side = side;
v_time = a_timeInfo.x;
v_totalTime = a_timeInfo.y;
v_timeSeed = a_timeInfo.z;
v_lineColor = vec4(lineColor.rgb, lineColor.a * lineOpacity);
v_lineRenderWidth = lineRenderWidth;
}`},hillshade:{"hillshade.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
uniform int u_hillshadeType;
uniform float u_sinZcosAs[6];
uniform float u_sinZsinAs[6];
uniform float u_cosZs[6];
uniform float u_weights[6];
uniform vec2 u_factor;
uniform float u_minValue;
uniform float u_maxValue;
#include <raster/lut/colorize.glsl>
float getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){
if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {
return 0.0;
}
else {
return e;
}
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
vec4 overlay(float val, float minValue, float maxValue, float hillshade) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);
vec3 hsv = rgb2hsv(rgb.xyz);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv), 1.0) * rgb.a;
}
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
if (currentPixel.a == 0.0) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec2 axy = vec2(-1.0, -1.0);
vec2 bxy = vec2(0.0, -1.0);
vec2 cxy = vec2(1.0, -1.0);
vec2 dxy = vec2(-1.0, 0.0);
vec2 fxy = vec2(1.0, 0.0);
vec2 gxy = vec2(-1.0, 1.0);
vec2 hxy = vec2(0.0, 1.0);
vec2 ixy = vec2(1.0, 1.0);
vec2 onePixel = 1.0 / u_srcImageSize;
if (pixelLocation.s < onePixel.s) {
axy[0] = 1.0;
dxy[0] = 1.0;
gxy[0] = 1.0;
}
if (pixelLocation.t < onePixel.t) {
axy[1] = 1.0;
bxy[1] = 1.0;
cxy[1] = 1.0;
}
if (pixelLocation.s > 1.0 - onePixel.s) {
cxy[0] = -1.0;
fxy[0] = -1.0;
ixy[0] = -1.0;
}
if (pixelLocation.t > 1.0 - onePixel.t) {
gxy[1] = -1.0;
hxy[1] = -1.0;
ixy[1] = -1.0;
}
vec4 va = texture2D(u_image, pixelLocation + onePixel * axy);
vec4 vb = texture2D(u_image, pixelLocation + onePixel * bxy);
vec4 vc = texture2D(u_image, pixelLocation + onePixel * cxy);
vec4 vd = texture2D(u_image, pixelLocation + onePixel * dxy);
vec4 ve = texture2D(u_image, pixelLocation);
vec4 vf = texture2D(u_image, pixelLocation + onePixel * fxy);
vec4 vg = texture2D(u_image, pixelLocation + onePixel * gxy);
vec4 vh = texture2D(u_image, pixelLocation + onePixel * hxy);
vec4 vi = texture2D(u_image, pixelLocation + onePixel * ixy);
float dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;
float dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;
float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);
float hillshade = 0.0;
if (u_hillshadeType == 0){
float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;
float z = (u_cosZs[0] + cosDelta) / dzd;
if (z < 0.0)  z = 0.0;
hillshade = z;
} else {
for (int k = 0; k < 6; k++) {
float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;
float z = (u_cosZs[k] + cosDelta) / dzd;
if (z < 0.0) z = 0.0;
hillshade = hillshade + z * u_weights[k];
if (k == 5) break;
}
}
float alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);
#ifdef APPLY_COLORMAP
gl_FragColor = overlay(ve.r, u_minValue, u_maxValue, hillshade) * alpha * u_opacity;
#else
gl_FragColor = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;
#endif
}`,"hillshade.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`},lut:{"colorize.glsl":`uniform sampler2D u_colormap;
uniform float u_colormapOffset;
uniform float u_colormapMaxIndex;
vec4 colorize(vec4 currentPixel, float scaleFactor) {
float clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);
vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
vec4 color = texture2D(u_colormap, clrPosition);
vec4 result = vec4(color.rgb, color.a * currentPixel.a);
return result;
}`,"lut.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
#include <raster/lut/colorize.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
vec4 result = colorize(currentPixel, 1.0);
gl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;
}`,"lut.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform highp float u_scale;
uniform highp vec2 u_offset;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos * u_scale + u_offset;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`},magdir:{"magdir.frag":`precision mediump float;
varying vec4 v_color;
uniform lowp float u_opacity;
void main() {
gl_FragColor = v_color * u_opacity;
}`,"magdir.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_vv;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform vec2 u_symbolSize;
uniform vec2 u_symbolPercentRange;
uniform vec2 u_dataRange;
uniform float u_rotation;
uniform vec4 u_colors[12];
varying vec4 v_color;
void main()
{
float angle = a_offset.y + u_rotation;
#ifndef ROTATION_GEOGRAPHIC
angle = 3.14159265359 * 2.0 - angle - 3.14159265359 / 2.0;
#endif
vec2 offset = vec2(cos(angle), sin(angle)) * a_offset.x;
#ifdef DATA_RANGE
float valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);
float sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);
float sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);
#else
float sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;
#endif
vec2 pos = a_pos + offset * sizePercentage * u_symbolSize;
v_color = u_colors[int(a_vv.x)];
gl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);
}`},reproject:{"reproject.frag":`precision mediump float;
varying vec2 v_texcoord;
#include <raster/common/common.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
}`,"reproject.vert":`precision mediump float;
attribute vec2 a_position;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_position;
gl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);
}`},scalar:{"scalar.frag":`precision mediump float;
uniform lowp float u_opacity;
varying vec2 v_pos;
const vec4 outlineColor = vec4(0.2, 0.2, 0.2, 1.0);
const float outlineSize = 0.02;
const float innerRadius = 0.25;
const float outerRadius = 0.42;
const float innerSquareLength = 0.15;
void main() {
mediump float dist = length(v_pos);
mediump float fillalpha1 = smoothstep(outerRadius, outerRadius + outlineSize, dist);
fillalpha1 *= (1.0-smoothstep(outerRadius + outlineSize, outerRadius + 0.1 + outlineSize, dist));
#ifdef INNER_CIRCLE
mediump float fillalpha2 = smoothstep(innerRadius, innerRadius + outlineSize, dist);
fillalpha2 *= (1.0-smoothstep(innerRadius + outlineSize, innerRadius + 0.1 + outlineSize, dist));
#else
mediump float fillalpha2 = (abs(v_pos.x) < innerSquareLength ? 1.0 : 0.0) * (abs(v_pos.y) < innerSquareLength ? 1.0 : 0.0);
#endif
gl_FragColor = (fillalpha2 + fillalpha1) * outlineColor * u_opacity;
}`,"scalar.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_vv;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform vec2 u_symbolSize;
uniform vec2 u_symbolPercentRange;
uniform vec2 u_dataRange;
varying vec2 v_pos;
void main()
{
#ifdef DATA_RANGE
float valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);
float sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);
float sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);
#else
float sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;
#endif
vec2 size = u_symbolSize * sizePercentage;
vec2 pos = a_pos + a_offset * size;
v_pos = a_offset;
gl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);
}`},stretch:{"stretch.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
uniform float u_minCutOff[3];
uniform float u_maxCutOff[3];
uniform float u_minOutput;
uniform float u_maxOutput;
uniform float u_factor[3];
uniform bool u_useGamma;
uniform float u_gamma[3];
uniform float u_gammaCorrection[3];
#include <raster/lut/colorize.glsl>
float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
if (val >= maxCutOff) {
return maxOutput;
} else if (val <= minCutOff) {
return minOutput;
}
float stretchedVal;
if (useGamma) {
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
if (gamma > 1.0) {
tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
}
stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
} else {
stretchedVal = minOutput + (val - minCutOff) * factor;
}
return stretchedVal;
}
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
#ifdef NOOP
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
return;
#endif
if (u_bandCount == 1) {
float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
#ifdef APPLY_COLORMAP
vec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);
gl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;
#else
gl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;
#endif
} else {
float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
gl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;
}
}`,"stretch.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform highp float u_scale;
uniform highp vec2 u_offset;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos * u_scale + u_offset;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`}},stencil:{"stencil.frag":`void main() {
gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,"stencil.vert":`attribute vec2 a_pos;
void main() {
gl_Position = vec4(a_pos, 0.0, 1.0);
}`},tileInfo:{"tileInfo.frag":`uniform mediump sampler2D u_texture;
varying mediump vec2 v_tex;
void main(void) {
lowp vec4 color = texture2D(u_texture, v_tex);
gl_FragColor = 0.75 * color;
}`,"tileInfo.vert":`attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_coord_ratio;
uniform mediump vec2 u_delta;
uniform mediump vec2 u_dimensions;
varying mediump vec2 v_tex;
void main() {
mediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);
vec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);
gl_Position = vec4(v_pos.xy, 0.0, 1.0);
v_tex = a_pos;
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`}};function Wt(_){let e=Bt;return _.split("/").forEach(t=>{e&&(e=e[t])}),e}const Ht=new Ot(Wt);function fe(_){return Ht.resolveIncludes(_)}const ee={shaders:{vertexShader:fe("background/background.vert"),fragmentShader:fe("background/background.frag")},attributes:new Map([["a_pos",0]])},kt=()=>Y("clip",{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT}]});class $t extends U{constructor(){super(...arguments),this._color=de(0,1,0,1)}dispose(){this._program&&this._program.dispose()}prepareState({context:e}){e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setFaceCullingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(W.KEEP,W.KEEP,W.REPLACE),e.setStencilWriteMask(255),e.setStencilFunction(M.ALWAYS,0,255)}draw(e,t){const{context:n,state:o}=e,i=kt(),a=t.getVAO(n,o,i.attributes,i.bufferLayouts);w(a.indexBuffer)||(this._program||(this._program=ce(n,ee)),n.useProgram(this._program),this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",o.displayMat3),n.bindVAO(a),n.drawElements(P.TRIANGLES,a.indexBuffer.size,u.UNSIGNED_INT,0),n.bindVAO())}}const Ne={shaders:{vertexShader:fe("tileInfo/tileInfo.vert"),fragmentShader:fe("tileInfo/tileInfo.frag")},attributes:new Map([["a_pos",0]])},se=300,ue=32;class Yt extends U{constructor(){super(...arguments),this._color=de(1,0,0,1)}dispose(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null),this._canvas=null}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(A.ONE,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1)}draw(e,t){const{context:n}=e;if(!t.isReady)return;this._loadWGLResources(n),n.bindVAO(this._outlineVertexArrayObject),n.useProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._outlineProgram.setUniform2f("u_coord_range",t.rangeX,t.rangeY),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),n.drawArrays(P.LINE_STRIP,0,4);const o=this._getTexture(n,t);o&&(n.bindVAO(this._tileInfoVertexArrayObject),n.useProgram(this._tileInfoProgram),n.bindTexture(o,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",t.rangeX/t.width,t.rangeY/t.height),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",o.descriptor.width,o.descriptor.height),n.drawArrays(P.TRIANGLE_STRIP,0,4)),n.bindVAO()}_loadWGLResources(e){if(this._outlineProgram&&this._tileInfoProgram)return;const t=ce(e,ee),n=ce(e,Ne),o=new Int8Array([0,0,1,0,1,1,0,1]),i=j.createVertex(e,q.STATIC_DRAW,o),a=new K(e,ee.attributes,ge,{geometry:i}),r=new Int8Array([0,0,1,0,0,1,1,1]),c=j.createVertex(e,q.STATIC_DRAW,r),l=new K(e,Ne.attributes,ge,{geometry:c});this._outlineProgram=t,this._tileInfoProgram=n,this._outlineVertexArrayObject=a,this._tileInfoVertexArrayObject=l}_getTexture(e,t){if(t.texture&&t.triangleCountReportedInDebug===t.triangleCount)return t.texture;t.triangleCountReportedInDebug=t.triangleCount,this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width",`${se}`),this._canvas.setAttribute("height",`${ue}`),this._canvas.setAttribute("style","display:none"));const n=t.triangleCount;let o=t.key.id;t.triangleCount>0&&(o+=`, ${n}`);const i=this._canvas,a=i.getContext("2d");return a.font="24px sans-serif",a.textAlign="left",a.textBaseline="top",a.clearRect(0,0,se,ue),n>1e5?(a.fillStyle="red",a.fillRect(0,0,se,ue),a.fillStyle="black"):(a.clearRect(0,0,se,ue),a.fillStyle="blue"),a.fillText(o,0,0),t.texture=new Me(e,{target:we.TEXTURE_2D,pixelFormat:he.RGBA,dataType:xe.UNSIGNED_BYTE,samplingMode:V.NEAREST,wrapMode:be.CLAMP_TO_EDGE},i),t.texture}}class Zt extends U{constructor(){super(...arguments),this._color=de(1,0,0,1),this._initialized=!1}dispose(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)}prepareState({context:e},t){e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(W.KEEP,W.KEEP,W.REPLACE),e.setStencilWriteMask(255),e.setStencilFunctionSeparate(_t.FRONT_AND_BACK,M.GREATER,t.stencilRef,255)}draw(e,t){const{context:n}=e;this._initialized||this._initialize(n),n.bindVAO(this._solidVertexArrayObject),n.useProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._solidProgram.setUniform2fv("u_coord_range",[t.rangeX,t.rangeY]),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),n.drawArrays(P.TRIANGLE_STRIP,0,4),n.bindVAO()}_initialize(e){if(this._initialized)return!0;const t=ce(e,ee);if(!t)return!1;const n=new Int8Array([0,0,1,0,0,1,1,1]),o=j.createVertex(e,q.STATIC_DRAW,n),i=new K(e,ee.attributes,ge,{geometry:o});return this._solidProgram=t,this._solidVertexArrayObject=i,this._initialized=!0,!0}}class Ge extends U{constructor(){super(...arguments),this._color=de(1,0,0,1),this._patternMatrix=Ve(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,t){const{context:n,painter:o,styleLayerUID:i}=e;this._loadWGLResources(e);const a=e.displayLevel,r=e.styleLayer,c=r.backgroundMaterial,l=o.vectorTilesMaterialManager,s=r.getPaintValue("background-color",a),d=r.getPaintValue("background-opacity",a),g=r.getPaintValue("background-pattern",a),f=g!==void 0,p=s[3]*d,S=1|window.devicePixelRatio,m=e.spriteMosaic;let T,E;const y=S>Ue?2:1,C=e.drawPhase===H.HITTEST,h=this._programOptions;h.id=C,h.pattern=f;const v=l.getMaterialProgram(n,c,h);if(n.bindVAO(this._vao),n.useProgram(v),f){const x=m.getMosaicItemPosition(g,!0);if(z(x)){const{tl:I,br:b,page:O}=x;T=b[0]-I[0],E=b[1]-I[1];const D=m.getPageSize(O);z(D)&&(m.bind(n,V.LINEAR,O,F),v.setUniform4f("u_tlbr",I[0],I[1],b[0],b[1]),v.setUniform2fv("u_mosaicSize",D),v.setUniform1i("u_texture",F))}v.setUniform1f("u_opacity",d)}else this._color[0]=p*s[0],this._color[1]=p*s[1],this._color[2]=p*s[2],this._color[3]=p,v.setUniform4fv("u_color",this._color);if(v.setUniform1f("u_depth",r.z||0),C){const x=ne(i+1);v.setUniform4fv("u_id",x)}for(const x of t){if(v.setUniform1f("u_coord_range",x.rangeX),v.setUniformMatrix3fv("u_dvsMat3",x.transforms.dvs),f){const I=Math.max(2**(Math.round(a)-x.key.level),1),b=y*x.width*I,O=b/Ie(T),D=b/Ie(E);this._patternMatrix[0]=O,this._patternMatrix[4]=D,v.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}n.setStencilFunction(M.EQUAL,x.stencilRef,255),n.drawArrays(P.TRIANGLE_STRIP,0,4)}}_loadWGLResources(e){if(this._vao)return;const{context:t,styleLayer:n}=e,o=n.backgroundMaterial,i=new Int8Array([0,0,1,0,0,1,1,1]),a=j.createVertex(t,q.STATIC_DRAW,i),r=new K(t,o.getAttributeLocations(),o.getLayoutInfo(),{geometry:a});this._vao=r}}class Be extends U{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,t){const{context:n,displayLevel:o,requiredLevel:i,state:a,drawPhase:r,painter:c,spriteMosaic:l,styleLayerUID:s}=e;if(!t.some(h=>{var v,x;return(v=(x=h.layerData.get(s))==null?void 0:x.circleIndexCount)!=null&&v}))return;const d=e.styleLayer,g=d.circleMaterial,f=c.vectorTilesMaterialManager,p=1.2,S=d.getPaintValue("circle-translate",o),m=d.getPaintValue("circle-translate-anchor",o),T=r===H.HITTEST,E=this._programOptions;E.id=T;const y=f.getMaterialProgram(n,g,E);n.useProgram(y),y.setUniformMatrix3fv("u_displayMat3",m===X.VIEWPORT?a.displayMat3:a.displayViewMat3),y.setUniform2fv("u_circleTranslation",S),y.setUniform1f("u_depth",d.z),y.setUniform1f("u_antialiasingWidth",p);let C=-1;if(T){const h=ne(s+1);y.setUniform4fv("u_id",h)}for(const h of t){if(!h.layerData.has(s))continue;h.key.level!==C&&(C=h.key.level,g.setDataUniforms(y,o,d,C,l));const v=h.layerData.get(s);if(!v.circleIndexCount)continue;v.prepareForRendering(n);const x=v.circleVertexArrayObject;w(x)||(n.bindVAO(x),y.setUniformMatrix3fv("u_dvsMat3",h.transforms.dvs),i!==h.key.level?n.setStencilFunction(M.EQUAL,h.stencilRef,255):n.setStencilFunction(M.GREATER,255,255),n.drawElements(P.TRIANGLES,v.circleIndexCount,u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*v.circleIndexStart),h.triangleCount+=v.circleIndexCount/3)}}}const ze=1/65536;class We extends U{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,t){const{displayLevel:n,drawPhase:o,renderPass:i,spriteMosaic:a,styleLayerUID:r}=e;let c=!1;for(const h of t)if(h.layerData.has(r)){const v=h.layerData.get(r);if(v.fillIndexCount>0||v.outlineIndexCount>0){c=!0;break}}if(!c)return;const l=e.styleLayer,s=l.getPaintProperty("fill-pattern"),d=s!==void 0,g=d&&s.isDataDriven;let f;if(d&&!g){const h=s.getValue(n);f=a.getMosaicItemPosition(h,!0)}const p=!d&&l.getPaintValue("fill-antialias",n);let S=!0,m=1;if(!d){const h=l.getPaintProperty("fill-color"),v=l.getPaintProperty("fill-opacity");if(!(h!=null&&h.isDataDriven||v!=null&&v.isDataDriven)){const x=l.getPaintValue("fill-color",n);m=l.getPaintValue("fill-opacity",n)*x[3],m>=1&&(S=!1)}}if(S&&i==="opaque")return;let T;o===H.HITTEST&&(T=ne(r+1));const E=l.getPaintValue("fill-translate",n),y=l.getPaintValue("fill-translate-anchor",n);(S||i!=="translucent")&&this._drawFill(e,r,l,t,E,y,d,f,g,T);const C=!l.hasDataDrivenOutlineColor&&l.outlineUsesFillColor&&m<1;p&&i!=="opaque"&&!C&&this._drawOutline(e,r,l,t,E,y,T)}_drawFill(e,t,n,o,i,a,r,c,l,s){if(r&&!l&&w(c))return;const{context:d,displayLevel:g,state:f,drawPhase:p,painter:S,pixelRatio:m,spriteMosaic:T}=e,E=n.fillMaterial,y=S.vectorTilesMaterialManager,C=m>Ue?2:1,h=p===H.HITTEST,v=this._fillProgramOptions;v.id=h,v.pattern=r;const x=y.getMaterialProgram(d,E,v);if(d.useProgram(x),z(c)){const{page:b}=c,O=T.getPageSize(b);z(O)&&(T.bind(d,V.LINEAR,b,F),x.setUniform2fv("u_mosaicSize",O),x.setUniform1i("u_texture",F))}x.setUniformMatrix3fv("u_displayMat3",a===X.VIEWPORT?f.displayMat3:f.displayViewMat3),x.setUniform2fv("u_fillTranslation",i),x.setUniform1f("u_depth",n.z+ze),h&&x.setUniform4fv("u_id",s);let I=-1;for(const b of o){if(!b.layerData.has(t))continue;b.key.level!==I&&(I=b.key.level,E.setDataUniforms(x,g,n,I,T));const O=b.layerData.get(t);if(!O.fillIndexCount)continue;O.prepareForRendering(d);const D=O.fillVertexArrayObject;if(!w(D)){if(d.bindVAO(D),x.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs),d.setStencilFunction(M.EQUAL,b.stencilRef,255),r){const N=Math.max(2**(Math.round(g)-b.key.level),1),R=b.rangeX/(C*b.width*N);x.setUniform1f("u_patternFactor",R)}if(l){const N=O.patternMap;if(!N)continue;for(const[R,k]of N){const $=T.getPageSize(R);z($)&&(T.bind(d,V.LINEAR,R,F),x.setUniform2fv("u_mosaicSize",$),x.setUniform1i("u_texture",F),d.drawElements(P.TRIANGLES,k[1],u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*k[0]))}}else d.drawElements(P.TRIANGLES,O.fillIndexCount,u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*O.fillIndexStart);b.triangleCount+=O.fillIndexCount/3}}}_drawOutline(e,t,n,o,i,a,r){const{context:c,displayLevel:l,state:s,drawPhase:d,painter:g,pixelRatio:f,spriteMosaic:p}=e,S=n.outlineMaterial,m=g.vectorTilesMaterialManager,T=.75/f,E=d===H.HITTEST,y=this._outlineProgramOptions;y.id=E;const C=m.getMaterialProgram(c,S,y);c.useProgram(C),C.setUniformMatrix3fv("u_displayMat3",a===X.VIEWPORT?s.displayMat3:s.displayViewMat3),C.setUniform2fv("u_fillTranslation",i),C.setUniform1f("u_depth",n.z+ze),C.setUniform1f("u_outline_width",T),E&&C.setUniform4fv("u_id",r);let h=-1;for(const v of o){if(!v.layerData.has(t))continue;v.key.level!==h&&(h=v.key.level,S.setDataUniforms(C,l,n,h,p));const x=v.layerData.get(t);if(x.prepareForRendering(c),!x.outlineIndexCount)continue;const I=x.outlineVertexArrayObject;w(I)||(c.bindVAO(I),C.setUniformMatrix3fv("u_dvsMat3",v.transforms.dvs),c.setStencilFunction(M.EQUAL,v.stencilRef,255),c.drawElements(P.TRIANGLES,x.outlineIndexCount,u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*x.outlineIndexStart),v.triangleCount+=x.outlineIndexCount/3)}}}class He extends U{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,t){const{context:n,displayLevel:o,state:i,drawPhase:a,painter:r,pixelRatio:c,spriteMosaic:l,styleLayerUID:s}=e;if(!t.some(D=>{var N,R;return(N=(R=D.layerData.get(s))==null?void 0:R.lineIndexCount)!=null&&N}))return;const d=e.styleLayer,g=d.lineMaterial,f=r.vectorTilesMaterialManager,p=d.getPaintValue("line-translate",o),S=d.getPaintValue("line-translate-anchor",o),m=d.getPaintProperty("line-pattern"),T=m!==void 0,E=T&&m.isDataDriven;let y,C;if(T&&!E){const D=m.getValue(o);y=l.getMosaicItemPosition(D)}let h=!1;if(!T){const D=d.getPaintProperty("line-dasharray");if(C=D!==void 0,h=C&&D.isDataDriven,C&&!h){const N=D.getValue(o),R=d.getDashKey(N,d.getLayoutValue("line-cap",o));y=l.getMosaicItemPosition(R)}}const v=1/c,x=a===H.HITTEST,I=this._programOptions;I.id=x,I.pattern=T,I.sdf=C;const b=f.getMaterialProgram(n,g,I);if(n.useProgram(b),b.setUniformMatrix3fv("u_displayViewMat3",i.displayViewMat3),b.setUniformMatrix3fv("u_displayMat3",S===X.VIEWPORT?i.displayMat3:i.displayViewMat3),b.setUniform2fv("u_lineTranslation",p),b.setUniform1f("u_depth",d.z),b.setUniform1f("u_antialiasing",v),x){const D=ne(s+1);b.setUniform4fv("u_id",D)}if(y&&z(y)){const{page:D}=y,N=l.getPageSize(D);z(N)&&(l.bind(n,V.LINEAR,D,F),b.setUniform2fv("u_mosaicSize",N),b.setUniform1i("u_texture",F))}let O=-1;for(const D of t){if(!D.layerData.has(s))continue;D.key.level!==O&&(O=D.key.level,g.setDataUniforms(b,o,d,O,l));const N=2**(o-O)/c;b.setUniform1f("u_zoomFactor",N);const R=D.layerData.get(s);if(!R.lineIndexCount)continue;R.prepareForRendering(n);const k=R.lineVertexArrayObject;if(!w(k)){if(n.bindVAO(k),b.setUniformMatrix3fv("u_dvsMat3",D.transforms.dvs),n.setStencilFunction(M.EQUAL,D.stencilRef,255),E||h){const $=R.patternMap;if(!$)continue;for(const[Q,L]of $){const Z=l.getPageSize(Q);z(Z)&&(l.bind(n,V.LINEAR,Q,F),b.setUniform2fv("u_mosaicSize",Z),b.setUniform1i("u_texture",F),n.drawElements(P.TRIANGLES,L[1],u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*L[0]))}}else n.drawElements(P.TRIANGLES,R.lineIndexCount,u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*R.lineIndexStart);D.triangleCount+=R.lineIndexCount/3}}}}const jt=1/65536;class ke extends U{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=mt()}dispose(){}drawMany(e,t){const{drawPhase:n,styleLayerUID:o}=e,i=e.styleLayer;let a;n===H.HITTEST&&(a=ne(o+1)),this._drawIcons(e,i,t,a),this._drawText(e,i,t,a)}_drawIcons(e,t,n,o){const{context:i,displayLevel:a,drawPhase:r,painter:c,spriteMosaic:l,state:s,styleLayerUID:d}=e,g=t.iconMaterial,f=c.vectorTilesMaterialManager;let p,S=!1;for(const O of n)if(O.layerData.has(d)&&(p=O.layerData.get(d),p.iconPerPageElementsMap.size>0)){S=!0;break}if(!S)return;const m=t.getPaintValue("icon-translate",a),T=t.getPaintValue("icon-translate-anchor",a);let E=t.getLayoutValue("icon-rotation-alignment",a);E===G.AUTO&&(E=t.getLayoutValue("symbol-placement",a)===Ae.POINT?G.VIEWPORT:G.MAP);const y=E===G.MAP,C=t.getLayoutValue("icon-keep-upright",a)&&y,h=p.isIconSDF,v=r===H.HITTEST,x=this._iconProgramOptions;x.id=v,x.sdf=h;const I=f.getMaterialProgram(i,g,x);i.useProgram(I),I.setUniformMatrix3fv("u_displayViewMat3",E===G.MAP?s.displayViewMat3:s.displayMat3),I.setUniformMatrix3fv("u_displayMat3",T===X.VIEWPORT?s.displayMat3:s.displayViewMat3),I.setUniform2fv("u_iconTranslation",m),I.setUniform1f("u_depth",t.z),I.setUniform1f("u_mapRotation",Re(s.rotation)),I.setUniform1f("u_keepUpright",C?1:0),I.setUniform1f("u_level",10*a),I.setUniform1i("u_texture",F),I.setUniform1f("u_fadeDuration",Ee/1e3),v&&I.setUniform4fv("u_id",o);let b=-1;for(const O of n){if(!O.layerData.has(d)||(O.key.level!==b&&(b=O.key.level,g.setDataUniforms(I,a,t,b,l)),p=O.layerData.get(d),p.iconPerPageElementsMap.size===0))continue;p.prepareForRendering(i),p.updateOpacityInfo();const D=p.iconVertexArrayObject;if(!w(D)){i.bindVAO(D),I.setUniformMatrix3fv("u_dvsMat3",O.transforms.dvs),I.setUniform1f("u_time",(performance.now()-p.lastOpacityUpdate)/1e3);for(const[N,R]of p.iconPerPageElementsMap)this._renderIconRange(e,I,R,N,O)}}}_renderIconRange(e,t,n,o,i){const{context:a,spriteMosaic:r}=e;this._spritesTextureSize[0]=r.getWidth(o)/4,this._spritesTextureSize[1]=r.getHeight(o)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),r.bind(a,V.LINEAR,o,F),a.setStencilTestEnabled(!0),a.setStencilFunction(M.GREATER,255,255),a.setStencilWriteMask(0),a.drawElements(P.TRIANGLES,n[1],u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n[0]),i.triangleCount+=n[1]/3}_drawText(e,t,n,o){const{context:i,displayLevel:a,drawPhase:r,glyphMosaic:c,painter:l,pixelRatio:s,spriteMosaic:d,state:g,styleLayerUID:f}=e,p=t.textMaterial,S=l.vectorTilesMaterialManager;let m,T=!1;for(const B of n)if(B.layerData.has(f)&&(m=B.layerData.get(f),m.glyphPerPageElementsMap.size>0)){T=!0;break}if(!T)return;const E=t.getPaintProperty("text-opacity");if(E&&!E.isDataDriven&&E.getValue(a)===0)return;const y=t.getPaintProperty("text-color"),C=!y||y.isDataDriven||y.getValue(a)[3]>0,h=t.getPaintProperty("text-halo-width"),v=t.getPaintProperty("text-halo-color"),x=(!h||h.isDataDriven||h.getValue(a)>0)&&(!v||v.isDataDriven||v.getValue(a)[3]>0);if(!C&&!x)return;const I=24/8;let b=t.getLayoutValue("text-rotation-alignment",a);b===G.AUTO&&(b=t.getLayoutValue("symbol-placement",a)===Ae.POINT?G.VIEWPORT:G.MAP);const O=b===G.MAP,D=t.getLayoutValue("text-keep-upright",a)&&O,N=r===H.HITTEST,R=.8*I/s;this._glyphTextureSize||(this._glyphTextureSize=J(c.width/4,c.height/4));const k=t.getPaintValue("text-translate",a),$=t.getPaintValue("text-translate-anchor",a),Q=this._sdfProgramOptions;Q.id=N;const L=S.getMaterialProgram(i,p,Q);i.useProgram(L),L.setUniformMatrix3fv("u_displayViewMat3",b===G.MAP?g.displayViewMat3:g.displayMat3),L.setUniformMatrix3fv("u_displayMat3",$===X.VIEWPORT?g.displayMat3:g.displayViewMat3),L.setUniform2fv("u_textTranslation",k),L.setUniform1f("u_depth",t.z+jt),L.setUniform2fv("u_mosaicSize",this._glyphTextureSize),L.setUniform1f("u_mapRotation",Re(g.rotation)),L.setUniform1f("u_keepUpright",D?1:0),L.setUniform1f("u_level",10*a),L.setUniform1i("u_texture",Pe),L.setUniform1f("u_antialiasingWidth",R),L.setUniform1f("u_fadeDuration",Ee/1e3),N&&L.setUniform4fv("u_id",o);let Z=-1;for(const B of n){if(!B.layerData.has(f)||(B.key.level!==Z&&(Z=B.key.level,p.setDataUniforms(L,a,t,Z,d)),m=B.layerData.get(f),m.glyphPerPageElementsMap.size===0))continue;m.prepareForRendering(i),m.updateOpacityInfo();const Se=m.textVertexArrayObject;if(w(Se))continue;i.bindVAO(Se),L.setUniformMatrix3fv("u_dvsMat3",B.transforms.dvs),i.setStencilTestEnabled(!0),i.setStencilFunction(M.GREATER,255,255),i.setStencilWriteMask(0);const $e=(performance.now()-m.lastOpacityUpdate)/1e3;L.setUniform1f("u_time",$e),m.glyphPerPageElementsMap.forEach((Ye,Ze)=>{this._renderGlyphRange(i,Ye,Ze,c,L,x,C,B)})}}_renderGlyphRange(e,t,n,o,i,a,r,c){o.bind(e,V.LINEAR,n,Pe),a&&(i.setUniform1f("u_halo",1),e.drawElements(P.TRIANGLES,t[1],u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),c.triangleCount+=t[1]/3),r&&(i.setUniform1f("u_halo",0),e.drawElements(P.TRIANGLES,t[1],u.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),c.triangleCount+=t[1]/3)}}class ie extends U{constructor(){super(...arguments),this._computeDesc=new Map}prepareState({context:e},t,n){const o=n&&n.indexOf("hittest")!==-1;e.setBlendingEnabled(!o),e.setBlendFunctionSeparate(A.ONE,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilFunction(M.EQUAL,t.stencilRef,255)}draw(e,t,n){const o=this.getGeometryType();t.commit(e);const i=t.getGeometry(o);w(i)||(e.timeline.begin(this.name),e.attributeView.bindTextures(e.context),i.forEachCommand(a=>this.drawGeometry(e,t,a,n)))}_setSharedUniforms(e,t,n){const{displayLevel:o,pixelRatio:i,state:a,passOptions:r}=t;z(r)&&r.type==="hittest"&&(e.setUniform2fv("u_hittestPos",r.position),e.setUniform1f("u_hittestDist",r.distance)),e.setUniform1f("u_pixelRatio",i),e.setUniformMatrix3fv("u_tileMat3",n.transforms.tileMat3),e.setUniformMatrix3fv("u_viewMat3",a.viewMat3),e.setUniformMatrix3fv("u_dvsMat3",n.transforms.dvs),e.setUniformMatrix3fv("u_displayViewMat3",a.displayViewMat3),e.setUniform1f("u_currentZoom",Math.round(o*St)),e.setUniform1i("u_attributeTextureSize",t.attributeView.size),e.setUniform1i("u_attributeData0",yt),e.setUniform1i("u_attributeData1",Tt),e.setUniform1i("u_attributeData2",Ct),e.setUniform1i("u_attributeData3",It)}_setSizeVVUniforms(e,t,n,o){if(e.vvSizeMinMaxValue&&t.setUniform4fv("u_vvSizeMinMaxValue",n.vvSizeMinMaxValue),e.vvSizeScaleStops&&t.setUniform1f("u_vvSizeScaleStopsValue",n.vvSizeScaleStopsValue),e.vvSizeFieldStops){const i=n.getSizeVVFieldStops(o.key.level);t.setUniform1fv("u_vvSizeFieldStopsValues",i.values),t.setUniform1fv("u_vvSizeFieldStopsSizes",i.sizes)}e.vvSizeUnitValue&&t.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",n.vvSizeUnitValueToPixelsRatio)}_setColorAndOpacityVVUniforms(e,t,n){e.vvColor&&(t.setUniform1fv("u_vvColorValues",n.vvColorValues),t.setUniform4fv("u_vvColors",n.vvColors)),e.vvOpacity&&(t.setUniform1fv("u_vvOpacityValues",n.vvOpacityValues),t.setUniform1fv("u_vvOpacities",n.vvOpacities))}_setRotationVVUniforms(e,t,n){e.vvRotation&&t.setUniform1f("u_vvRotationType",n.vvMaterialParameters.vvRotationType==="geographic"?0:1)}_getTriangleDesc(e,t){let n=this._computeDesc.get(e);if(!n){const o=t.strides,i=t.strides.geometry,a=new Map(t.attributes),r=t.bufferLayouts.geometry.map(s=>oe({},s)),c=Math.max(...t.attributes.values()),l={geometry:r};l.geometry.push({count:2,name:"a_pos1",divisor:0,normalized:!1,offset:i,stride:i,type:u.SHORT}),l.geometry.push({count:2,name:"a_pos2",divisor:0,normalized:!1,offset:2*i,stride:i,type:u.SHORT}),a.set("a_pos1",c+1),a.set("a_pos2",c+2),n={bufferLayouts:l,attributes:a,strides:o},this._computeDesc.set(e,n)}return n}}const qt=_=>{const e={geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_id",count:3,type:u.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:u.UNSIGNED_BYTE}]};return _.dotDensity?(e.geometry.push({location:3,name:"a_inverseArea",count:1,type:u.FLOAT}),Y(_.data,e)):(e.geometry.push({location:3,name:"a_color",count:4,type:u.UNSIGNED_BYTE,normalized:!0}),_.simple||e.geometry.push({location:4,name:"a_aux1",count:4,type:u.UNSIGNED_SHORT}),e.geometry.push({location:5,name:"a_aux2",count:4,type:u.UNSIGNED_BYTE},{location:6,name:"a_aux3",count:4,type:u.UNSIGNED_BYTE}),_.simple||e.geometry.push({location:7,name:"a_zoomRange",count:2,type:u.UNSIGNED_SHORT}),Y(_.data,e))};class Kt extends ie{constructor(){super(...arguments),this._dotTextureSize=0,this._dotTextures=null,this._dotSamplers=new Int32Array([Et,Dt]),this._dotVAO=null,this._dotDesc={vsPath:"dot/dot",fsPath:"dot/dot",attributes:new Map([["a_pos",0]])}}dispose(){this._disposeTextures(),this._dotFBO=De(this._dotFBO),this._dotVAO=De(this._dotVAO)}getGeometryType(){return te.FILL}drawGeometry(e,t,n,o){const{context:i,painter:a,rendererInfo:r,requiredLevel:c,passOptions:l}=e,s=Pt.load(n.materialKey),d=a.materialManager;let g=P.TRIANGLES,f=qt(s);z(l)&&l.type==="hittest"&&(f=this._getTriangleDesc(n.materialKey,f),g=P.POINTS);const{attributes:p,bufferLayouts:S}=f,m=d.getMaterialProgram(e,s,"materials/fill",p,o);if(i.useProgram(m),this._setSharedUniforms(m,e,t),m.setUniform2f("u_tileOffset",512*t.key.col,512*t.key.row),s.textureBinding){a.textureManager.bindTextures(i,m,s);const v=1/2**(c-t.key.level)/e.pixelRatio;m.setUniform1f("u_zoomFactor",v)}const T=1/e.pixelRatio;m.setUniform1f("u_blur",T),m.setUniform1f("u_antialiasing",T),this._setSizeVVUniforms(s,m,r,t),this._setColorAndOpacityVVUniforms(s,m,r);const E=z(l)&&l.type==="hittest",y=n.target.getVAO(i,S,p,E);let C=n.indexCount,h=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;if(E&&(C/=3,h/=3),i.bindVAO(y),!s.dotDensity||E)i.drawElements(g,C,u.UNSIGNED_INT,h);else{const v=this._drawDotLocations(e,t,m,C,h);this._drawDotDensity(e,t,v)}}_drawDotDensity(e,t,n){const{context:o,painter:i,rendererInfo:a}=e,r=i.materialManager.getProgram(e,this._dotDesc),c=this._createDotDensityMesh(o,this._dotDesc.attributes,{geometry:[{name:"a_pos",count:2,type:u.SHORT,divisor:0,normalized:!1,offset:0,stride:4}]});o.setStencilTestEnabled(!0),o.useProgram(r),r.setUniform1f("u_tileZoomFactor",1),r.setUniform1i("u_texture",this._dotSamplers[0]),r.setUniform1f("u_dotSize",Math.max(a.ddDotSize,1)),r.setUniform1f("u_pixelRatio",window.devicePixelRatio),this._setSharedUniforms(r,e,t),o.bindTexture(n,this._dotSamplers[0]),o.bindVAO(c),o.drawArrays(P.POINTS,0,262144)}_drawDotLocations(e,t,n,o,i){const{context:a,rendererInfo:r,requiredLevel:c}=e,l=a.getViewport();a.setViewport(0,0,512,512);const s=a.getBoundFramebufferObject(),d=this._createFBO(a);a.bindFramebuffer(d),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT|a.gl.STENCIL_BUFFER_BIT),a.setStencilTestEnabled(!1);const g=1/2**(c-t.key.level),f=me,p=f*window.devicePixelRatio*f*window.devicePixelRatio,S=1/g*(1/g),m=r.ddDotScale?e.state.scale/r.ddDotScale:1;return n.setUniform1f("u_tileZoomFactor",g),n.setUniform1f("u_tileDotsOverArea",p/(me*window.devicePixelRatio*me*window.devicePixelRatio)),n.setUniformMatrix4fv("u_dotColors",r.ddColors),n.setUniform4fv("u_isActive",r.ddActiveDots),n.setUniform4fv("u_dotBackgroundColor",r.ddBackgroundColor),n.setUniform1f("u_dotValue",Math.max(1,r.ddDotValue*m*S)),this._bindDotDensityTextures(a,n,r,f),a.drawElements(P.TRIANGLES,o,u.UNSIGNED_INT,i),a.setViewport(l.x,l.y,l.width,l.height),a.bindFramebuffer(s),d.colorTexture}_createFBO(e){if(w(this._dotFBO)){const o={target:we.TEXTURE_2D,pixelFormat:he.RGBA,dataType:xe.UNSIGNED_BYTE,samplingMode:V.NEAREST,wrapMode:be.CLAMP_TO_EDGE,width:512,height:512},i={colorTarget:vt.TEXTURE,depthStencilTarget:pt.DEPTH_STENCIL_RENDER_BUFFER},a=new gt(e,{width:512,height:512,internalFormat:ht.DEPTH_STENCIL});this._dotFBO=new xt(e,i,o,a)}return this._dotFBO}_disposeTextures(){if(this._dotTextures){for(let e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}}_bindDotDensityTextures(e,t,n,o){const i=this._createDotDensityTextures(e,o,n.ddSeed);t.setUniform1iv("u_dotTextures",this._dotSamplers);for(let a=0;a<i.length;a++)e.bindTexture(i[a],this._dotSamplers[a])}_createDotDensityMesh(e,t,n){if(w(this._dotVAO)){const i=new Int16Array(524288);for(let r=0;r<512;r++)for(let c=0;c<512;c++)i[2*(c+512*r)]=c,i[2*(c+512*r)+1]=r;const a=j.createVertex(e,q.STATIC_DRAW,i);this._dotVAO=new K(e,t,n,{geometry:a},null)}return this._dotVAO}_createDotDensityTextures(e,t,n){if(this._dotTextureSize===t&&this._seed===n||(this._disposeTextures(),this._dotTextureSize=t,this._seed=n),this._dotTextures===null){const o=new bt(n);this._dotTextures=[this._allocDotDensityTexture(e,t,o),this._allocDotDensityTexture(e,t,o)]}return this._dotTextures}_allocDotDensityTexture(e,t,n){const o=new Float32Array(t*t*4);for(let i=0;i<o.length;i++)o[i]=n.getFloat();return new Me(e,{wrapMode:be.REPEAT,pixelFormat:he.RGBA,dataType:xe.FLOAT,samplingMode:V.NEAREST,width:t,height:t},o)}}const Xt=_=>Y(_.data,{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_id",count:4,type:u.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texAndSize",count:4,type:u.UNSIGNED_BYTE},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:u.UNSIGNED_BYTE},{location:6,name:"a_glyphData",count:4,type:u.UNSIGNED_BYTE},{location:7,name:"a_vertexOffset",count:2,type:u.SHORT},{location:8,name:"a_texCoords",count:2,type:u.UNSIGNED_SHORT}]});class Qt extends ie{dispose(){}getGeometryType(){return te.LABEL}drawGeometry(e,t,n,o){const{context:i,painter:a,state:r,rendererInfo:c}=e,l=At.load(n.materialKey),s=l.mapAligned?1:0;if(!s&&Math.abs(t.key.level-Math.round(100*e.displayLevel)/100)>=1)return;const{bufferLayouts:d,attributes:g}=Xt(l),f=a.materialManager.getMaterialProgram(e,l,"materials/label",g,o);e.context.setStencilFunction(M.EQUAL,0,255),i.useProgram(f),this._setSharedUniforms(f,e,t),a.textureManager.bindTextures(i,f,l);const p=s===1?r.displayViewMat3:r.displayMat3;this._setSizeVVUniforms(l,f,c,t),f.setUniform1f("u_mapRotation",Math.floor(r.rotation/360*254)),f.setUniform1f("u_mapAligned",s),f.setUniformMatrix3fv("u_displayMat3",p),f.setUniform1f("u_opacity",1),f.setUniform2fv("u_screenSize",e.state.size),f.setUniform1f("u_isHalo",1);const S=n.target.getVAO(i,d,g),m=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;i.bindVAO(S),i.drawElements(P.TRIANGLES,n.indexCount,u.UNSIGNED_INT,m),f.setUniform1f("u_isHalo",0),i.drawElements(P.TRIANGLES,n.indexCount,u.UNSIGNED_INT,m),i.setStencilTestEnabled(!0),i.setBlendingEnabled(!0)}}const Jt=_=>Y(_.data,{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_id",count:4,type:u.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:u.BYTE},{location:4,name:"a_accumulatedDistanceAndHalfWidth",count:2,type:u.UNSIGNED_SHORT},{location:5,name:"a_tlbr",count:4,type:u.UNSIGNED_SHORT},{location:6,name:"a_segmentDirection",count:4,type:u.BYTE},{location:7,name:"a_aux",count:2,type:u.UNSIGNED_SHORT},{location:8,name:"a_zoomRange",count:2,type:u.UNSIGNED_SHORT}]});class en extends ie{dispose(){}getGeometryType(){return te.LINE}drawGeometry(e,t,n,o){const{context:i,painter:a,rendererInfo:r,displayLevel:c,passOptions:l}=e,s=Rt.load(n.materialKey);let d=Jt(s),g=P.TRIANGLES;z(l)&&l.type==="hittest"&&(d=this._getTriangleDesc(n.materialKey,d),g=P.POINTS);const{attributes:f,bufferLayouts:p}=d,S=a.materialManager.getMaterialProgram(e,s,"materials/line",f,o),m=1/e.pixelRatio,T=0;i.useProgram(S),this._setSharedUniforms(S,e,t),s.textureBinding&&a.textureManager.bindTextures(i,S,s);const E=2**(c-t.key.level)/e.pixelRatio;S.setUniform1f("u_zoomFactor",E),S.setUniform1f("u_blur",T+m),S.setUniform1f("u_antialiasing",m),this._setSizeVVUniforms(s,S,r,t),this._setColorAndOpacityVVUniforms(s,S,r),i.setFaceCullingEnabled(!1);const y=z(l)&&l.type==="hittest",C=n.target.getVAO(i,p,f,y);let h=n.indexCount,v=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;y&&(h/=3,v/=3),i.bindVAO(C),i.drawElements(g,h,u.UNSIGNED_INT,v)}}const tn=_=>Y(_.data,{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_vertexOffset",count:2,type:u.SHORT},{location:2,name:"a_texCoords",count:2,type:u.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:u.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:u.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:u.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:u.UNSIGNED_SHORT}]});class nn extends ie{dispose(){}getGeometryType(){return te.MARKER}drawGeometry(e,t,n,o){const{context:i,painter:a,rendererInfo:r,state:c,passOptions:l}=e,s=Lt.load(n.materialKey),{bufferLayouts:d,attributes:g}=tn(s),f=a.materialManager.getMaterialProgram(e,s,"materials/icon",g,o);i.useProgram(f),s.textureBinding&&a.textureManager.bindTextures(i,f,s,!0);let p=P.TRIANGLES;z(l)&&l.type==="hittest"&&(p=P.POINTS),this._setSharedUniforms(f,e,t);const S=s.vvRotation?c.displayViewMat3:c.displayMat3;f.setUniformMatrix3fv("u_displayMat3",S),this._setSizeVVUniforms(s,f,r,t),this._setColorAndOpacityVVUniforms(s,f,r),this._setRotationVVUniforms(s,f,r);const m=n.target.getVAO(i,d,g),T=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;i.bindVAO(m),i.drawElements(p,n.indexCount,u.UNSIGNED_INT,T)}}const on=_=>Y(_.data,{geometry:[{location:0,name:"a_pos",count:2,type:u.SHORT},{location:1,name:"a_id",count:4,type:u.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:u.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:u.UNSIGNED_BYTE},{location:5,name:"a_aux",count:4,type:u.BYTE},{location:6,name:"a_zoomRange",count:2,type:u.UNSIGNED_SHORT},{location:7,name:"a_vertexOffset",count:2,type:u.SHORT},{location:8,name:"a_texCoords",count:2,type:u.UNSIGNED_SHORT}]});class an extends ie{dispose(){}getGeometryType(){return te.TEXT}drawGeometry(e,t,n,o){const{context:i,painter:a,rendererInfo:r,state:c,passOptions:l}=e,s=Nt.load(n.materialKey),{bufferLayouts:d,attributes:g}=on(s),f=a.materialManager.getMaterialProgram(e,s,"materials/text",g,o);i.useProgram(f);let p=P.TRIANGLES;z(l)&&l.type==="hittest"&&(p=P.POINTS),this._setSharedUniforms(f,e,t),a.textureManager.bindTextures(i,f,s),f.setUniformMatrix3fv("u_displayMat3",c.displayMat3),f.setUniformMatrix3fv("u_displayViewMat3",c.displayViewMat3),this._setSizeVVUniforms(s,f,r,t),this._setColorAndOpacityVVUniforms(s,f,r),this._setRotationVVUniforms(s,f,r),f.setUniform1f("u_isHalo",1);const S=n.target.getVAO(i,d,g),m=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;i.bindVAO(S),i.drawElements(P.TRIANGLES,n.indexCount,u.UNSIGNED_INT,m),f.setUniform1f("u_isHalo",0),i.drawElements(p,n.indexCount,u.UNSIGNED_INT,m)}}const pn={marker:nn,line:en,fill:Kt,text:an,label:Qt,clip:$t,stencil:Zt,bitmap:Gt,raster:wt,rasterVF:Ut,flow:zt,tileInfo:Yt,vtlBackground:Ge,vtlFill:We,vtlLine:He,vtlCircle:Be,vtlSymbol:ke},gn={vtlBackground:Ge,vtlFill:We,vtlLine:He,vtlCircle:Be,vtlSymbol:ke};export{gn as G,Fe as a,Ut as b,Zt as c,vn as d,zt as i,fe as n,Yt as p,pn as w};
