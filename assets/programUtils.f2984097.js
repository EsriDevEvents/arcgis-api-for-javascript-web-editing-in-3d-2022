function $(f){let n="";for(const o in f){const e=f[o];if(typeof e=="boolean")e&&(n+=`#define ${o}
`);else if(typeof e=="number")n+=`#define ${o} ${e.toFixed()}
`;else if(typeof e=="object"){const t=e.options;let i=0;for(const s in t)n+=`#define ${t[s]} ${(i++).toFixed()}
`;n+=`#define ${o} ${t[e.value]}
`}}return n}export{$ as e};
