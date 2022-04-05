import{lR as V,lS as c,a8 as k}from"./vendor.1dc52be5.js";import{n as w}from"./I3SNode.d0d399f2.js";var L,x;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(L||(L={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(x||(x={}));function G(){return S||(S=new Promise(e=>import("./i3s.fce15eb5.js").then(t=>t.i).then(({default:t})=>{const o=t({locateFile:q,onRuntimeInitialized:()=>e(o)});delete o.then})).catch(e=>Promise.reject(e))),S}function q(e){return V(`esri/libs/i3s/${e}`)}let S;async function W(e){await p();const t=[e.geometryBuffer];return{result:D(e,t),transferList:t}}async function J(e){var t;await p();const o=[e.geometryBuffer],{geometryBuffer:a}=e,s=a.byteLength,d=r._malloc(s),f=new Uint8Array(r.HEAPU8.buffer,d,s);f.set(new Uint8Array(a));const y=r.dracoDecompressPointCloudData(d,f.byteLength);if(r._free(d),y.error.length>0)throw`i3s.wasm: ${y.error}`;const b=((t=y.featureIds)==null?void 0:t.length)>0?c(y.featureIds):null,g=c(y.positions);return b&&o.push(b.buffer),o.push(g.buffer),{result:{positions:g,featureIds:b},transferList:o}}async function K(e){await p(),$(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Q(e){await p(),N(e)}async function X(e){await p(),r.setLegacySchema(e.context,e.jsonSchema)}function Z(e){C(e)}let _,r;function N(e){const t=e.modifications,o=r._malloc(8*t.length),a=new Float64Array(r.HEAPU8.buffer,o,t.length);for(let s=0;s<t.length;++s)a[s]=t[s];r.setModifications(e.context,o,t.length,e.isGeodetic),r._free(o)}function D(e,t){if(!r)return null;const{context:o,localOrigin:a,globalTrafo:s,mbs:d,obb:f,elevationOffset:y,geometryBuffer:b,geometryDescriptor:g,indexToVertexProjector:Y,vertexToRenderProjector:j}=e,A=r._malloc(b.byteLength),F=33,I=r._malloc(F*Float64Array.BYTES_PER_ELEMENT),M=new Uint8Array(r.HEAPU8.buffer,A,b.byteLength);M.set(new Uint8Array(b));const i=new Float64Array(r.HEAPU8.buffer,I,F);E(i,a);let u=i.byteOffset+3*i.BYTES_PER_ELEMENT,l=new Float64Array(i.buffer,u);E(l,s),u+=16*i.BYTES_PER_ELEMENT,l=new Float64Array(i.buffer,u),E(l,d),u+=4*i.BYTES_PER_ELEMENT,k(f)&&(l=new Float64Array(i.buffer,u),E(l,f.center),u+=3*i.BYTES_PER_ELEMENT,l=new Float64Array(i.buffer,u),E(l,f.halfSize),u+=3*i.BYTES_PER_ELEMENT,l=new Float64Array(i.buffer,u),E(l,f.quaternion));const O=g,H={isDraco:!1,isLegacy:!1,color:e.layouts.some(m=>m.some(h=>h.name==="color")),normal:e.needNormals&&e.layouts.some(m=>m.some(h=>h.name==="normalCompressed")),uv0:e.layouts.some(m=>m.some(h=>h.name==="uv0")),uvRegion:e.layouts.some(m=>m.some(h=>h.name==="uvRegion")),featureIndex:O.featureIndex},n=r.process(o,!!e.obb,A,M.byteLength,O,H,I,y,Y,j,e.normalReferenceFrame);if(r._free(I),r._free(A),n.error.length>0)throw`i3s.wasm: ${n.error}`;if(n.discarded)return null;const P=n.componentOffsets.length>0?c(n.componentOffsets):null,T=n.featureIds.length>0?c(n.featureIds):null,R=c(n.interleavedVertedData).buffer,U=n.indicesType===L.Int16?c(new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2)):c(new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4)),v=c(n.positions),B=n.positionIndicesType===L.Int16?c(new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2)):c(new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4)),z={layout:e.layouts[0],interleavedVertexData:R,indices:U,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:v,indices:B}};return T&&t.push(T.buffer),P&&t.push(P.buffer),t.push(R),t.push(U.buffer),t.push(v.buffer),t.push(B.buffer),{componentOffsets:P,featureIds:T,transformedGeometry:z,obb:n.obb}}function ee(e){return e===0?w.Unmodified:e===1?w.PotentiallyModified:e===2?w.Culled:w.Unknown}function $(e){const{context:t,buffer:o}=e,a=r._malloc(o.byteLength),s=o.byteLength/Float64Array.BYTES_PER_ELEMENT,d=new Float64Array(r.HEAPU8.buffer,a,s),f=new Float64Array(o);d.set(f),r.filterOBBs(t,a,s),f.set(d),r._free(a)}function C(e){r&&r.destroy(e)}function E(e,t){for(let o=0;o<t.length;++o)e[o]=t[o]}function p(){return r?Promise.resolve():(_||(_=G().then(e=>{r=e,_=null})),_)}const te={transform:D,destroy:C};var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",destroyContext:Z,dracoDecompressPointCloudData:J,filterObbsForModifications:K,filterObbsForModificationsSync:$,initialize:p,interpretObbModificationResults:ee,process:W,setLegacySchema:X,setModifications:Q,setModificationsSync:N,test:te});export{$ as E,oe as S,N as b,ee as d,x as e,p as g};