var Q=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var N=(e,s,a)=>s in e?Q(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,I=(e,s)=>{for(var a in s||(s={}))_.call(s,a)&&N(e,a,s[a]);if(F)for(var a of F(s))ee.call(s,a)&&N(e,a,s[a]);return e},T=(e,s)=>X(e,Y(s));import{r3 as P,aM as se,aH as S,r4 as te,r5 as $,r6 as ae,lR as G,ft as w,V,r7 as re,gr as ne,r8 as le,a8 as M,r9 as J,ra as oe,rb as ie,rc as ce,rd as pe,re as ue,rf as he,rg as me,rh as fe,dV as ye,ri as E,rj as de,d3 as be,d4 as ve,rk as ge}from"./vendor.1dc52be5.js";import{l as Z,d as ke}from"./renderUtils.3228987e.js";import{resolveWebStyleSymbol as we}from"./webStyleSymbolUtils.cf28ccef.js";const L=P.size,D=P.maxSize,q=P.maxOutlineSize,U=P.lineWidth,H=P.tallSymbolWidth,xe=se.getLogger("esri.symbols.support.previewSymbol3D");function z(e){const s=e.outline,a=M(e.material)?e.material.color:null,t=M(a)?a.toHex():null;if(S(s)||"pattern"in s&&M(s.pattern)&&s.pattern.type==="style"&&s.pattern.style==="none")return e.type==="fill"&&t==="#ffffff"?{color:"#bdc3c7",width:.75}:null;const r=w(s.size)||0;return{color:"rgba("+(M(s.color)?s.color.toRgba():"255,255,255,1")+")",width:Math.min(r,q),style:"pattern"in s&&M(s.pattern)&&s.pattern.type==="style"?J(s.pattern.style):null,join:"butt",cap:"patternCap"in s?s.patternCap:"butt"}}function Me(e,s){const a=s&&s.resource,t=a&&a.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(t&&s.type!=="object")return Promise.resolve(le(e,s));const r=G("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?we(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch(n=>n).then(n=>{var l;return(n==null||(l=n.thumbnail)==null?void 0:l.url)||r}):Promise.resolve(r)}function R(e,s=1){const a=e.a,t=be(e),r=t.h,n=t.s/s,l=100-(100-t.v)/s,{r:p,g:y,b:h}=ve({h:r,s:n,v:l});return[p,y,h,a]}function C(e){return e.type==="water"?S(e.color)?null:e.color:S(e.material)||S(e.material.color)?null:e.material.color}function i(e,s=0){const a=C(e);if(!a){if(e.type==="fill")return null;const r=te.r,n=$(r,s);return[n,n,n,100]}const t=a.toRgba();for(let r=0;r<3;r++)t[r]=$(t[r],s);return t}async function Le(e,s){const a=e.style;return a==="none"?null:{type:"pattern",x:0,y:0,src:await ae(G(`esri/symbols/patterns/${a}.png`),s.toCss(!0)),width:5,height:5}}function B(e){return e.outline?z(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function K(e,s){const a=C(e);if(!a)return null;let t="rgba(";return t+=$(a.r,s)+",",t+=$(a.g,s)+",",t+=$(a.b,s)+",",t+a.a+");"}function W(e,s){const a=K(e,s);return a?"pattern"in e&&M(e.pattern)&&e.pattern.type==="style"&&e.pattern.style==="none"?null:{color:a,width:Math.min(e.size?w(e.size):.75,q),style:"pattern"in e&&M(e.pattern)&&e.pattern.type==="style"?J(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?e.join==="miter"?w(2):e.join:null}:{}}function O(e,s,a){const t=.75*a;return{type:"linear",x1:t?.25*t:0,y1:t?.5*t:0,x2:t||4,y2:t?.5*t:4,colors:[{color:e,offset:0},{color:s,offset:1}]}}function ze(e){const s=e.depth,a=e.height,t=e.width;return t&&s&&a&&t===s&&t<a}function Se(e,s,a){const t=[];if(!e)return t;switch(e.type){case"icon":{const l=s,p=s;switch(e.resource&&e.resource.primitive||fe){case"circle":t.push({shape:{type:"circle",cx:0,cy:0,r:.5*s},fill:i(e,0),stroke:z(e)});break;case"square":t.push({shape:{type:"path",path:[{command:"M",values:[0,p]},{command:"L",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,p]},{command:"Z",values:[]}]},fill:i(e,0),stroke:z(e)});break;case"triangle":t.push({shape:{type:"path",path:[{command:"M",values:[0,p]},{command:"L",values:[.5*l,0]},{command:"L",values:[l,p]},{command:"Z",values:[]}]},fill:i(e,0),stroke:z(e)});break;case"cross":t.push({shape:{type:"path",path:[{command:"M",values:[.5*l,0]},{command:"L",values:[.5*l,p]},{command:"M",values:[0,.5*p]},{command:"L",values:[l,.5*p]}]},stroke:B(e)});break;case"x":t.push({shape:{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,p]},{command:"M",values:[l,0]},{command:"L",values:[0,p]}]},stroke:B(e)});break;case"kite":t.push({shape:{type:"path",path:[{command:"M",values:[0,.5*p]},{command:"L",values:[.5*l,0]},{command:"L",values:[l,.5*p]},{command:"L",values:[.5*l,p]},{command:"Z",values:[]}]},fill:i(e,0),stroke:z(e)})}break}case"object":switch(e.resource&&e.resource.primitive||oe){case"cone":{const r=O(i(e,0),i(e,-.6),a?H:s),n=me(s,a);t.push({shape:n[0],fill:r}),t.push({shape:n[1],fill:r});break}case"inverted-cone":{const r=i(e,0),n=O(r,i(e,-.6),s),l=he(s);t.push({shape:l[0],fill:n}),t.push({shape:l[1],fill:r});break}case"cube":{const r=ue(s,a);t.push({shape:r[0],fill:i(e,0)}),t.push({shape:r[1],fill:i(e,-.3)}),t.push({shape:r[2],fill:i(e,-.5)});break}case"cylinder":{const r=O(i(e,0),i(e,-.6),a?H:s),n=pe(s,a);t.push({shape:n[0],fill:r}),t.push({shape:n[1],fill:r}),t.push({shape:n[2],fill:i(e,0)});break}case"diamond":{const r=ce(s);t.push({shape:r[0],fill:i(e,-.3)}),t.push({shape:r[1],fill:i(e,0)}),t.push({shape:r[2],fill:i(e,-.3)}),t.push({shape:r[3],fill:i(e,-.7)});break}case"sphere":{const r=O(i(e,0),i(e,-.6));r.x1=0,r.y1=0,r.x2=.25*s,r.y2=.25*s,t.push({shape:{type:"circle",cx:0,cy:0,r:.5*s},fill:r});break}case"tetrahedron":{const r=ie(s);t.push({shape:r[0],fill:i(e,-.3)}),t.push({shape:r[1],fill:i(e,0)}),t.push({shape:r[2],fill:i(e,-.6)});break}}break}return t}function A(e){const s=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null;return s?w(s):null}function je(e){return e.type==="icon"?"multiply":"tint"}function $e(e,s){const a=A(s),t=s&&s.maxSize?w(s.maxSize):null,r=s&&s.disableUpsampling,n=e.symbolLayers,l=[];let p=0,y=0;const h=n.getItemAt(n.length-1);let d;return h&&h.type==="icon"&&(d=h.size&&w(h.size)),n.forEach(f=>{if(f.type!=="icon"&&f.type!=="object")return;const c=f.type==="icon"?f.size&&w(f.size):0,u=a||c?Math.ceil(Math.min(a||c,t||D)):L;if(f&&f.resource&&f.resource.href){const o=Me(e,f).then(function(m){const b=f.get("material.color"),v=je(f);return ke(m,u,b,v,r)}).then(function(m){const b=m.width,v=m.height;return p=Math.max(p,b),y=Math.max(y,v),[{shape:{type:"image",x:0,y:0,width:b,height:v,src:m.url},fill:null,stroke:null}]});l.push(o)}else{var k;let o=u;f.type==="icon"&&d&&a&&(o=u*(c/d));const m=(s==null?void 0:s.symbolConfig)==="tall"||(s==null||(k=s.symbolConfig)==null?void 0:k.isTall)||f.type==="object"&&ze(f);p=Math.max(p,m?H:o),y=Math.max(y,o),l.push(Promise.resolve(Se(f,o,m)))}}),ne(l).then(function(f){const c=[];return f.forEach(function(u){u.value?c.push(u.value):u.error&&xe.warn("error while building swatchInfo!",u.error)}),Z(c,[p,y],{node:s&&s.node,scale:!1,opacity:s&&s.opacity})})}function Pe(e,s){const a=e.symbolLayers,t=[],r=ye(e),n=A(s),l=(s&&s.maxSize?w(s.maxSize):null)||q;let p,y=0,h=0;return a.forEach((d,f)=>{if(!d||d.type!=="line"&&d.type!=="path")return;const c=[];switch(d.type){case"line":{const u=W(d,0);if(S(u))break;const k=u&&u.width||0;f===0&&(p=k);const o=Math.min(n||k,l),m=f===0?o:n?o*(k/p):o,b=m>U/2?2*m:U;h=Math.max(h,m),y=Math.max(y,b),u.width=m,c.push({shape:{type:"path",path:[{command:"M",values:[0,.5*h]},{command:"L",values:[y,.5*h]}]},stroke:u});break}case"path":{const u=Math.min(n||L,l),k=i(d,0),o=i(d,-.2),m=K(d,-.4),b=m?{color:m,width:1}:{};if(d.profile==="quad"){const v=d.width,g=d.height,x=re(v&&g?v/g:1,g===0,v===0),j=T(I({},b),{join:"bevel"});c.push({shape:x[0],fill:o,stroke:j}),c.push({shape:x[1],fill:o,stroke:j}),c.push({shape:x[2],fill:k,stroke:j})}else c.push({shape:E.pathSymbol3DLayer[0],fill:o,stroke:b}),c.push({shape:E.pathSymbol3DLayer[1],fill:k,stroke:b});h=Math.max(h,u),y=h}}t.push(c)}),Promise.resolve(Z(t,[y,h],{node:s&&s.node,scale:r,opacity:s&&s.opacity}))}async function Oe(e,s){const a=e.type==="mesh-3d",t=e.symbolLayers,r=A(s),n=s&&s.maxSize?w(s.maxSize):null,l=r||L,p=[];let y=0,h=0,d=!1;for(let f=0;f<t.length;f++){const c=t.getItemAt(f),u=[];if(a&&c.type!=="fill")continue;const k=E.fill[0];switch(c.type){case"fill":{const o=z(c),m=Math.min(l,n||D);y=Math.max(y,m),h=Math.max(h,m),d=!0;let b=i(c,0);const v="pattern"in c&&c.pattern,g=C(c);!a&&M(v)&&v.type==="style"&&v.style!=="solid"&&g&&(b=await Le(v,g)),u.push({shape:k,fill:b,stroke:o});break}case"line":{const o=W(c,0);if(S(o))break;const m={stroke:o,shape:k};y=Math.max(y,L),h=Math.max(h,L),u.push(m);break}case"extrude":{const o=I({join:"round",width:1},W(c,-.4)),m=i(c,0),b=i(c,-.2),v=Math.min(l,n||D),g=de(v);o.width=1,u.push({shape:g[0],fill:b,stroke:o}),u.push({shape:g[1],fill:b,stroke:o}),u.push({shape:g[2],fill:m,stroke:o});const x=L,j=.7*L+.5*v;y=Math.max(y,x),h=Math.max(h,j);break}case"water":{const o=C(c),m=R(o),b=R(o,2),v=R(o,3),g=ge();d=!0,u.push({shape:g[0],fill:m}),u.push({shape:g[1],fill:b}),u.push({shape:g[2],fill:v});const x=Math.min(l,n||D);y=Math.max(y,x),h=Math.max(h,x);break}}p.push(u)}return Promise.resolve(Z(p,[y,h],{node:s&&s.node,scale:d,opacity:s&&s.opacity}))}function Ee(e,s){if(e.symbolLayers.length===0)return Promise.reject(new V("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return $e(e,s);case"line-3d":return Pe(e,s);case"polygon-3d":case"mesh-3d":return Oe(e,s)}return Promise.reject(new V("symbolPreview: swatchInfo3D","symbol not supported."))}export{Le as getPatternDescriptor,A as getSizeFromOptions,i as getSymbolLayerFill,Ee as previewSymbol3D};