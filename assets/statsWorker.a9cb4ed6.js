import{gI as T,k as y,pg as x,ph as w,pi as V,pj as F,pk as I,pl as E,pm as P,pn as h,po as g,pp as D}from"./vendor.1dc52be5.js";let f=null;async function v(e,a){if(!a)return[];const r=e.field,i=e.valueExpression,n=e.normalizationType,l=e.normalizationField,s=e.normalizationTotal,t=[],o=e.viewInfoParams;let u=null,d=null;if(i){if(!f){const{arcadeUtils:m}=await T();f=m}u=f.createFunction(i),d=o&&f.getViewInfo({viewingMode:o.viewingMode,scale:o.scale,spatialReference:new y(o.spatialReference)})}return a.forEach(m=>{const c=m.attributes;let p;if(i){const z=f.createExecContext(m,d);p=f.executeFunction(u,z)}else c&&(p=c[r]);if(n&&isFinite(p)){const z=c&&parseFloat(c[l]);p=x(p,n,z,s)}t.push(p)}),t}async function M(e){const{attribute:a,features:r}=e,{normalizationType:i,normalizationField:n,minValue:l,maxValue:s,fieldType:t}=a,o=await v({field:a.field,valueExpression:a.valueExpression,normalizationType:i,normalizationField:n,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams},r),u=w({normalizationType:i,normalizationField:n,minValue:l,maxValue:s}),d={value:.5,fieldType:t},m=t==="esriFieldTypeString"?V({values:o,supportsNullCount:u,percentileParams:d}):F({values:o,minValue:l,maxValue:s,useSampleStdDev:!i,supportsNullCount:u,percentileParams:d});return I(m,t==="esriFieldTypeDate")}async function b(e){const{attribute:a,features:r}=e,i=await v({field:a.field,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams},r),n=E(i);return P(n,a.domain,a.returnAllCodedValues)}async function S(e){const{attribute:a,features:r}=e,{field:i,normalizationType:n,normalizationField:l,normalizationTotal:s,classificationMethod:t}=a,o=await v({field:i,valueExpression:a.valueExpression,normalizationType:n,normalizationField:l,normalizationTotal:s,viewInfoParams:a.viewInfoParams},r),u=h(o,{field:i,normalizationType:n,normalizationField:l,normalizationTotal:s,classificationMethod:t,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return g(u,t)}async function $(e){const{attribute:a,features:r}=e,{field:i,normalizationType:n,normalizationField:l,normalizationTotal:s,classificationMethod:t}=a,o=await v({field:i,valueExpression:a.valueExpression,normalizationType:n,normalizationField:l,normalizationTotal:s,viewInfoParams:a.viewInfoParams},r);return D(o,{field:i,normalizationType:n,normalizationField:l,normalizationTotal:s,classificationMethod:t,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}export{S as classBreaks,$ as histogram,M as summaryStatistics,b as uniqueValues};