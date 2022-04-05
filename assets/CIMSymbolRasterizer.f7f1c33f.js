import{hK as W,g5 as j,rv as K,hc as q,rw as g,ft as M,rx as B,b7 as Q,r1 as Z,ry as $,rz as N,iw as U,ix as ee}from"./vendor.1dc52be5.js";import{H as te,o as ae}from"./cimAnalyzer.13178822.js";import{s as re,a as ie}from"./CIMSymbolHelper.e5777d0e.js";import{m as se}from"./Rasterizer.44ed8c8f.js";import"./enums.c01b5663.js";import"./BidiEngine.b9926823.js";import"./alignmentUtils.03ee467b.js";import"./definitions.52b5fae8.js";import"./number.dc47462b.js";import"./GeometryUtils.e53da643.js";var F;(function(m){m.Legend="legend",m.Preview="preview"})(F||(F={}));const D=(m,e,t)=>{if(m&&m.targetSize){let s;if(t){const r=Math.max(t.frame.xmax-t.frame.xmin,t.frame.ymax-t.frame.ymin);s=m.targetSize/M(r)}else s=m.targetSize/e.referenceSize;return s}return m&&m.scaleFactor?m.scaleFactor:1},E={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};class Me{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._pictureMarkerCache=new Map,this._textRasterizer=new re,this._cimResourceManager=new ie,this._rasterizer=new se(this._cimResourceManager)}async rasterizeCIMSymbolAsync(e,t,s,r,a,i,o,n){r=r||(t?t.centroid!=null?"esriGeometryPolygon":W(t.geometry):null)||oe(e);const c=await this.analyzeCIMSymbol(e,t?ne(t.attributes):null,s,r,n);return this.rasterizeCIMSymbol(c,t,r,a,i,o)}async analyzeCIMSymbol(e,t,s,r,a){const i=[],o=t?{geometryType:r,spatialReference:this._spatialReference,fields:t}:null;let n;await te(e.data,o,this._cimResourceManager,i,this._avoidSDF),j(a);for(const c of i)c.cim.type!=="CIMPictureMarker"&&c.cim.type!=="CIMPictureFill"&&c.cim.type!=="CIMPictureStroke"||(n||(n=[]),n.push(this._fetchPictureMarkerResource(c,a))),s&&c.type==="text"&&typeof c.text=="string"&&c.text.indexOf("[")>-1&&(c.text=K(s,c.text,c.cim.textCase));return n&&await Promise.all(n),i}async _fetchPictureMarkerResource(e,t){const s=e.materialHash;if(!this._pictureMarkerCache.get(s)){const r=(await q(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;this._pictureMarkerCache.set(s,r)}}rasterizeCIMSymbol(e,t,s,r,a,i){const o=[];for(const n of e){r&&typeof r.scaleFactor=="function"&&(r.scaleFactor=r.scaleFactor(t,a,i));const c=this._getRasterizedResource(n,t,s,r,a,i);if(!c)continue;let p=0,I=c.anchorX||0,u=c.anchorY||0,l=!1,f=0,h=0;if(s==="esriGeometryPoint"){const y=D(r,n,null);if(f=g(n.offsetX,t,a,i)*y||0,h=g(n.offsetY,t,a,i)*y||0,n.type==="marker")p=g(n.rotation,t,a,i)||0,l=!!n.rotateClockwise&&n.rotateClockwise;else if(n.type==="text"){if(p=g(n.angle,t,a,i)||0,n.horizontalAlignment!==void 0)switch(n.horizontalAlignment){case"left":I=-.5;break;case"right":I=.5;break;default:I=0}if(n.verticalAlignment!==void 0)switch(n.verticalAlignment){case"top":u=.5;break;case"bottom":u=-.5;break;case"baseline":u=-.25;break;default:u=0}}}c!=null&&o.push({angle:p,rotateClockWise:l,anchorX:I,anchorY:u,offsetX:f,offsetY:h,rasterizedResource:c})}return this.getSymbolImage(o)}getSymbolImage(e){const t=document.createElement("canvas"),s=t.getContext("2d");let r=0,a=0,i=0,o=0;const n=[];for(let u=0;u<e.length;u++){const l=e[u],f=l.rasterizedResource;if(!f)continue;const h=f.size,y=l.offsetX,d=l.offsetY,C=l.anchorX,x=l.anchorY,z=l.rotateClockWise||!1;let _=l.angle,P=M(y)-h[0]*(.5+C),w=M(d)-h[1]*(.5+x),b=P+h[0],S=w+h[1];if(_){z&&(_=-_);const v=Math.sin(_*Math.PI/180),k=Math.cos(_*Math.PI/180),T=P*k-w*v,X=P*v+w*k,Y=P*k-S*v,G=P*v+S*k,H=b*k-S*v,O=b*v+S*k,L=b*k-w*v,V=b*v+w*k;P=Math.min(T,Y,H,L),w=Math.min(X,G,O,V),b=Math.max(T,Y,H,L),S=Math.max(X,G,O,V)}r=P<r?P:r,a=w<a?w:a,i=b>i?b:i,o=S>o?S:o;const A=s.createImageData(f.size[0],f.size[1]);A.data.set(new Uint8ClampedArray(f.image.buffer));const J={offsetX:y,offsetY:d,rotateClockwise:z,angle:_,rasterizedImage:A,anchorX:C,anchorY:x};n.push(J)}t.width=i-r,t.height=o-a;const c=-r,p=o;for(let u=0;u<n.length;u++){const l=n[u],f=this._imageDataToCanvas(l.rasterizedImage),h=l.rasterizedImage.width,y=l.rasterizedImage.height,d=c-h*(.5+l.anchorX),C=p-y*(.5-l.anchorY);if(l.angle){const x=(360-l.angle)*Math.PI/180;s.save(),s.translate(M(l.offsetX),-M(l.offsetY)),s.translate(c,p),s.rotate(x),s.translate(-c,-p),s.drawImage(f,d,C),s.restore()}else s.drawImage(f,d+M(l.offsetX),C-M(l.offsetY))}const I=new B({x:c/t.width-.5,y:p/t.height-.5});return{imageData:t.width!==0&&t.height!==0?s.getImageData(0,0,t.width,t.height):s.createImageData(1,1),anchorPosition:I}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,s=t.getContext("2d");return t.width=e.width,t.height=e.height,s.putImageData(e,0,0),t}_imageTo32Array(e,t,s,r){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const a=this._imageDataCanvas,i=a.getContext("2d");if(a.width=t,a.height=s,i.drawImage(e,0,0,t,s),r){i.save();const o=new Q(r);i.fillStyle=o.toHex(),i.globalCompositeOperation="multiply",i.fillRect(0,0,t,s),i.globalCompositeOperation="destination-atop",i.drawImage(e,0,0,t,s),i.restore()}return new Uint32Array(i.getImageData(0,0,t,s).data.buffer)}_getRasterizedResource(e,t,s,r,a,i){let o,n,c,p,I=null,u=null;if(s==="esriGeometryPolyline"||s==="esriGeometryPolygon"){const f=r&&r.style?r.style:F.Legend,h=s==="esriGeometryPolyline"?E.stroke[f]:E.fill[f];if(e.type==="line"){if(e.cim.type!=="CIMSolidStroke"){if(e.cim.type==="CIMPictureStroke"){const y=g(e.width,t,a,i),d=g(e.color,t,a,i),{image:C,width:x,height:z}=this._getPictureResource(e,y,d);return this._rasterizePictureResource(e,C,x,z,h,y)}return null}({analyzedCIM:o,hash:c}=R(e,t,a,i)),n=this._embedCIMLayerInVectorMarker(o,h)}else if(e.type==="marker"){if(e.cim.type==="CIMPictureMarker"){const y=g(e.size,t,a,i),d=g(e.color,t,a,i),{image:C,width:x,height:z}=this._getPictureResource(e,y,d);return this._rasterizePictureResource(e,C,x,z,h,y)}if(e.cim.type!=="CIMVectorMarker")return null;e.cim.offsetX=g(e.offsetX,t,a,i),e.cim.offsetY=g(e.offsetY,t,a,i),e.cim.rotation=g(e.rotation,t,a,i),e.cim.markerPlacement=e.markerPlacement,{analyzedCIM:o}=R(e,t,a,i),c=Z(JSON.stringify(o)).toString(),n=this._embedCIMLayerInVectorMarker(o,h),I=g(e.size,t,a,i),u=e.path}else{if(e.type==="text")return null;if(e.type==="fill"){if(e.cim.type==="CIMHatchFill"||e.cim.type==="CIMVectorMarker"||e.cim.type==="CIMPictureMarker"||e.cim.type==="CIMPictureFill"){const y=e.cim.size||e.cim.height;let d,C,x;if(e.cim.type==="CIMPictureMarker"||e.cim.type==="CIMPictureFill")({image:d,width:C,height:x}=this._getPictureResource(e,y,g(e.color,t,a,i)));else{({analyzedCIM:o,hash:c}=R(e,t,a,i));const z=this._rasterizer.rasterizeJSONResource({cim:o,type:e.type,url:e.url,mosaicHash:c,size:y,path:u},1,this._avoidSDF);d=z.image,C=z.size[0],x=z.size[1]}return this._rasterizePictureResource(e,d,C,x,h,null)}if(e.cim.type!=="CIMSolidFill")return null;({analyzedCIM:o,hash:c}=R(e,t,a,i)),n=this._embedCIMLayerInVectorMarker(o,h)}}}else{if(e.type==="text")return p=this._rasterizeTextResource(e,t,r,a,i),p;({analyzedCIM:o,hash:c}=R(e,t,a,i));const f=D(r,e,null);if(e.cim.type==="CIMPictureMarker"){const h=g(e.size,t,a,i)*f,{image:y,width:d,height:C}=this._getPictureResource(e,h,g(e.color,t,a,i));return p={image:y,size:[d,C],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},p}$(o,f,{preserveOutlineWidth:!1}),n=o}c+=s,r&&(c+=JSON.stringify(r));const l=this._resourceCache;return l.has(c)?l.get(c):(p=this._rasterizer.rasterizeJSONResource({cim:n,type:e.type,url:e.url,mosaicHash:c,size:I,path:u},window.devicePixelRatio||1,this._avoidSDF),l.set(c,p),p)}_rasterizeTextResource(e,t,s,r,a){const i=D(s,e,null),o=g(e.text,t,r,a);if(!o||o.length===0)return null;const n=g(e.fontName,t,r,a),c=g(e.style,t,r,a),p=g(e.weight,t,r,a),I=g(e.decoration,t,r,a),u=g(e.size,t,r,a)*i,l=g(e.horizontalAlignment,t,r,a),f=g(e.verticalAlignment,t,r,a),h=N(g(e.color,t,r,a)),y=N(g(e.outlineColor,t,r,a)),d={color:h,size:u,horizontalAlignment:l,verticalAlignment:f,font:{family:n,style:c,weight:p,decoration:I},halo:{size:g(e.outlineSize,t,r,a)||0,color:y,style:c},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(o,d)}_rasterizePictureResource(e,t,s,r,a,i){const o=document.createElement("canvas"),n=o.getContext("2d");o.height=M(Math.max(a.frame.ymax-a.frame.ymin,i)),o.width=M(a.frame.xmax-a.frame.xmin);const c=n.createImageData(s,r);c.data.set(new Uint8ClampedArray(t.buffer));const p=this._imageDataToCanvas(c),I=n.createPattern(p,"repeat"),u=Math.cos((-e.cim.rotation||0)*Math.PI/180),l=Math.sin((-e.cim.rotation||0)*Math.PI/180);I.setTransform({m11:u,m12:l,m21:-l,m22:u,m41:M(e.cim.offsetX)||0,m42:M(e.cim.offsetY)||0});const f=a.canvasPaths;let h,y,d;U(f)?(h=f.rings,n.fillStyle=I,y=n.fill,d=["evenodd"]):ee(f)&&(h=f.paths,n.strokeStyle=I,n.lineWidth=i,y=n.stroke,h[0][0][1]=o.height/2,h[0][1][1]=o.height/2),n.beginPath();for(const z of h){const _=z?z.length:0;if(_>1){let P=z[0];n.moveTo(M(P[0]),M(P[1]));for(let w=1;w<_;++w)P=z[w],n.lineTo(M(P[0]),M(P[1]));n.closePath()}}y.apply(n,d);const C=n.getImageData(0,0,o.width,o.height),x=new Uint8Array(C.data);return{size:[o.width,o.height],image:new Uint32Array(x.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_getPictureResource(e,t,s){const r=this._pictureMarkerCache.get(e.materialHash);if(!r)return null;const a=r.height/r.width,i=t?a>1?M(t):M(t)/a:r.width,o=t?a>1?M(t)*a:M(t):r.height;return{image:this._imageTo32Array(r,i,o,s),width:i,height:o}}_embedCIMLayerInVectorMarker(e,t){const s=U(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",r=t.frame;return{type:"CIMVectorMarker",frame:r,size:r.ymax-r.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:s,symbolLayers:[e]}}]}}}function ne(m){return(m?Object.keys(m):[]).map(e=>({name:e,alias:e,type:typeof m[e]=="string"?"esriFieldTypeString":"esriFieldTypeDouble"}))}function oe(m){if(!(m&&m.data&&m.data.symbol))return null;switch(m.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function R(m,e,t,s){let r,a;return typeof m.materialHash=="function"?(r=(0,m.materialHash)(e,t,s),a=ae(m.cim,m.materialOverrides)):(r=m.materialHash,a=m.cim),{analyzedCIM:a,hash:r}}export{Me as CIMSymbolRasterizer,F as GeometryStyle};