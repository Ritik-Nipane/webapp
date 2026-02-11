var yt=Object.defineProperty;var Fe=e=>{throw TypeError(e)};var xt=(e,t,s)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>xt(e,typeof t!="symbol"?t+"":t,s),De=(e,t,s)=>t.has(e)||Fe("Cannot "+s);var a=(e,t,s)=>(De(e,t,"read from private field"),s?s.call(e):t.get(e)),v=(e,t,s)=>t.has(e)?Fe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,i)=>(De(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),m=(e,t,s)=>(De(e,t,"access private method"),s);var Le=(e,t,s,i)=>({set _(n){f(e,t,n,s)},get _(){return a(e,t,i)}});var ze=(e,t,s)=>(i,n)=>{let r=-1;return o(0);async function o(l){if(l<=r)throw new Error("next() called multiple times");r=l;let h,c=!1,d;if(e[l]?(d=e[l][0][0],i.req.routeIndex=l):d=l===e.length&&n||void 0,d)try{h=await d(i,()=>o(l+1))}catch(u){if(u instanceof Error&&t)i.error=u,h=await t(u,i),c=!0;else throw u}else i.finalized===!1&&s&&(h=await s(i));return h&&(i.finalized===!1||c)&&(i.res=h),i}},wt=Symbol(),bt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:i=!1}=t,r=(e instanceof it?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?Et(e,{all:s,dot:i}):{}};async function Et(e,t){const s=await e.formData();return s?jt(s,t):{}}function jt(e,t){const s=Object.create(null);return e.forEach((i,n)=>{t.all||n.endsWith("[]")?Rt(s,n,i):s[n]=i}),t.dot&&Object.entries(s).forEach(([i,n])=>{i.includes(".")&&(Ot(s,i,n),delete s[i])}),s}var Rt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Ot=(e,t,s)=>{let i=e;const n=t.split(".");n.forEach((r,o)=>{o===n.length-1?i[r]=s:((!i[r]||typeof i[r]!="object"||Array.isArray(i[r])||i[r]instanceof File)&&(i[r]=Object.create(null)),i=i[r])})},Ye=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},St=e=>{const{groups:t,path:s}=kt(e),i=Ye(s);return Pt(i,t)},kt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,i)=>{const n=`@${i}`;return t.push([n,s]),n}),{groups:t,path:e}},Pt=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[i]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(i)){e[n]=e[n].replace(i,t[s][1]);break}}return e},Re={},At=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const i=`${e}#${t}`;return Re[i]||(s[2]?Re[i]=t&&t[0]!==":"&&t[0]!=="*"?[i,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Re[i]=[e,s[1],!0]),Re[i]}return null},$e=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Ct=e=>$e(e,decodeURI),Ze=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let i=s;for(;i<t.length;i++){const n=t.charCodeAt(i);if(n===37){const r=t.indexOf("?",i),o=t.indexOf("#",i),l=r===-1?o===-1?void 0:o:o===-1?r:Math.min(r,o),h=t.slice(s,l);return Ct(h.includes("%25")?h.replace(/%25/g,"%2525"):h)}else if(n===63||n===35)break}return t.slice(s,i)},Tt=e=>{const t=Ze(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},se=(e,t,...s)=>(s.length&&(t=se(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),et=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let i="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))i+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&i===""?s.push("/"):s.push(i);const r=n.replace("?","");i+="/"+r,s.push(i)}else i+="/"+n}),s.filter((n,r,o)=>o.indexOf(n)===r)},_e=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?$e(e,st):e):e,tt=(e,t,s)=>{let i;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const l=e.charCodeAt(o+t.length+1);if(l===61){const h=o+t.length+2,c=e.indexOf("&",h);return _e(e.slice(h,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";o=e.indexOf(`&${t}`,o+1)}if(i=/[%+]/.test(e),!i)return}const n={};i??(i=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const o=e.indexOf("&",r+1);let l=e.indexOf("=",r);l>o&&o!==-1&&(l=-1);let h=e.slice(r+1,l===-1?o===-1?void 0:o:l);if(i&&(h=_e(h)),r=o,h==="")continue;let c;l===-1?c="":(c=e.slice(l+1,o===-1?void 0:o),i&&(c=_e(c))),s?(n[h]&&Array.isArray(n[h])||(n[h]=[]),n[h].push(c)):n[h]??(n[h]=c)}return t?n[t]:n},Dt=tt,_t=(e,t)=>tt(e,t,!0),st=decodeURIComponent,Be=e=>$e(e,st),re,k,H,nt,rt,Ne,z,Ge,it=(Ge=class{constructor(e,t="/",s=[[]]){v(this,H);p(this,"raw");v(this,re);v(this,k);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});v(this,z,e=>{const{bodyCache:t,raw:s}=this,i=t[e];if(i)return i;const n=Object.keys(t)[0];return n?t[n].then(r=>(n==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,k,s),f(this,re,{})}param(e){return e?m(this,H,nt).call(this,e):m(this,H,rt).call(this)}query(e){return Dt(this.url,e)}queries(e){return _t(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,i)=>{t[i]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await bt(this,e))}json(){return a(this,z).call(this,"text").then(e=>JSON.parse(e))}text(){return a(this,z).call(this,"text")}arrayBuffer(){return a(this,z).call(this,"arrayBuffer")}blob(){return a(this,z).call(this,"blob")}formData(){return a(this,z).call(this,"formData")}addValidatedData(e,t){a(this,re)[e]=t}valid(e){return a(this,re)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[wt](){return a(this,k)}get matchedRoutes(){return a(this,k)[0].map(([[,e]])=>e)}get routePath(){return a(this,k)[0].map(([[,e]])=>e)[this.routeIndex].path}},re=new WeakMap,k=new WeakMap,H=new WeakSet,nt=function(e){const t=a(this,k)[0][this.routeIndex][1][e],s=m(this,H,Ne).call(this,t);return s&&/\%/.test(s)?Be(s):s},rt=function(){const e={},t=Object.keys(a(this,k)[0][this.routeIndex][1]);for(const s of t){const i=m(this,H,Ne).call(this,a(this,k)[0][this.routeIndex][1][s]);i!==void 0&&(e[s]=/\%/.test(i)?Be(i):i)}return e},Ne=function(e){return a(this,k)[1]?a(this,k)[1][e]:e},z=new WeakMap,Ge),It={Stringify:1},at=async(e,t,s,i,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(n?n[0]+=e:n=[e],Promise.all(r.map(l=>l({phase:t,buffer:n,context:i}))).then(l=>Promise.all(l.filter(Boolean).map(h=>at(h,t,!1,i,n))).then(()=>n[0]))):Promise.resolve(e)},Nt="text/plain; charset=UTF-8",Ie=(e,t)=>({"Content-Type":e,...t}),me,ge,I,ae,N,S,ye,oe,ce,J,xe,we,B,ie,Ke,$t=(Ke=class{constructor(e,t){v(this,B);v(this,me);v(this,ge);p(this,"env",{});v(this,I);p(this,"finalized",!1);p(this,"error");v(this,ae);v(this,N);v(this,S);v(this,ye);v(this,oe);v(this,ce);v(this,J);v(this,xe);v(this,we);p(this,"render",(...e)=>(a(this,oe)??f(this,oe,t=>this.html(t)),a(this,oe).call(this,...e)));p(this,"setLayout",e=>f(this,ye,e));p(this,"getLayout",()=>a(this,ye));p(this,"setRenderer",e=>{f(this,oe,e)});p(this,"header",(e,t,s)=>{this.finalized&&f(this,S,new Response(a(this,S).body,a(this,S)));const i=a(this,S)?a(this,S).headers:a(this,J)??f(this,J,new Headers);t===void 0?i.delete(e):s!=null&&s.append?i.append(e,t):i.set(e,t)});p(this,"status",e=>{f(this,ae,e)});p(this,"set",(e,t)=>{a(this,I)??f(this,I,new Map),a(this,I).set(e,t)});p(this,"get",e=>a(this,I)?a(this,I).get(e):void 0);p(this,"newResponse",(...e)=>m(this,B,ie).call(this,...e));p(this,"body",(e,t,s)=>m(this,B,ie).call(this,e,t,s));p(this,"text",(e,t,s)=>!a(this,J)&&!a(this,ae)&&!t&&!s&&!this.finalized?new Response(e):m(this,B,ie).call(this,e,t,Ie(Nt,s)));p(this,"json",(e,t,s)=>m(this,B,ie).call(this,JSON.stringify(e),t,Ie("application/json",s)));p(this,"html",(e,t,s)=>{const i=n=>m(this,B,ie).call(this,n,t,Ie("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,It.Stringify,!1,{}).then(i):i(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(a(this,ce)??f(this,ce,()=>new Response),a(this,ce).call(this,this)));f(this,me,e),t&&(f(this,N,t.executionCtx),this.env=t.env,f(this,ce,t.notFoundHandler),f(this,we,t.path),f(this,xe,t.matchResult))}get req(){return a(this,ge)??f(this,ge,new it(a(this,me),a(this,we),a(this,xe))),a(this,ge)}get event(){if(a(this,N)&&"respondWith"in a(this,N))return a(this,N);throw Error("This context has no FetchEvent")}get executionCtx(){if(a(this,N))return a(this,N);throw Error("This context has no ExecutionContext")}get res(){return a(this,S)||f(this,S,new Response(null,{headers:a(this,J)??f(this,J,new Headers)}))}set res(e){if(a(this,S)&&e){e=new Response(e.body,e);for(const[t,s]of a(this,S).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const i=a(this,S).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of i)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}f(this,S,e),this.finalized=!0}get var(){return a(this,I)?Object.fromEntries(a(this,I)):{}}},me=new WeakMap,ge=new WeakMap,I=new WeakMap,ae=new WeakMap,N=new WeakMap,S=new WeakMap,ye=new WeakMap,oe=new WeakMap,ce=new WeakMap,J=new WeakMap,xe=new WeakMap,we=new WeakMap,B=new WeakSet,ie=function(e,t,s){const i=a(this,S)?new Headers(a(this,S).headers):a(this,J)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,l]of r)o.toLowerCase()==="set-cookie"?i.append(o,l):i.set(o,l)}if(s)for(const[r,o]of Object.entries(s))if(typeof o=="string")i.set(r,o);else{i.delete(r);for(const l of o)i.append(r,l)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??a(this,ae);return new Response(e,{status:n,headers:i})},Ke),w="ALL",Mt="all",Ht=["get","post","put","delete","options","patch"],ot="Can not add a route since the matcher is already built.",ct=class extends Error{},Ft="__COMPOSED_HANDLER",Lt=e=>e.text("404 Not Found",404),Ue=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},P,b,lt,A,K,Oe,Se,le,zt=(le=class{constructor(t={}){v(this,b);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");v(this,P,"/");p(this,"routes",[]);v(this,A,Lt);p(this,"errorHandler",Ue);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(f(this,A,t),this));p(this,"fetch",(t,...s)=>m(this,b,Se).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,i,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,i,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${se("/",t)}`,s),i,n)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(m(this,b,Se).call(this,t.request,t,void 0,t.request.method))})});[...Ht,Mt].forEach(r=>{this[r]=(o,...l)=>(typeof o=="string"?f(this,P,o):m(this,b,K).call(this,r,a(this,P),o),l.forEach(h=>{m(this,b,K).call(this,r,a(this,P),h)}),this)}),this.on=(r,o,...l)=>{for(const h of[o].flat()){f(this,P,h);for(const c of[r].flat())l.map(d=>{m(this,b,K).call(this,c.toUpperCase(),a(this,P),d)})}return this},this.use=(r,...o)=>(typeof r=="string"?f(this,P,r):(f(this,P,"*"),o.unshift(r)),o.forEach(l=>{m(this,b,K).call(this,w,a(this,P),l)}),this);const{strict:i,...n}=t;Object.assign(this,n),this.getPath=i??!0?t.getPath??Ze:Tt}route(t,s){const i=this.basePath(t);return s.routes.map(n=>{var o;let r;s.errorHandler===Ue?r=n.handler:(r=async(l,h)=>(await ze([],s.errorHandler)(l,()=>n.handler(l,h))).res,r[Ft]=n.handler),m(o=i,b,K).call(o,n.method,n.path,r)}),this}basePath(t){const s=m(this,b,lt).call(this);return s._basePath=se(this._basePath,t),s}mount(t,s,i){let n,r;i&&(typeof i=="function"?r=i:(r=i.optionHandler,i.replaceRequest===!1?n=h=>h:n=i.replaceRequest));const o=r?h=>{const c=r(h);return Array.isArray(c)?c:[c]}:h=>{let c;try{c=h.executionCtx}catch{}return[h.env,c]};n||(n=(()=>{const h=se(this._basePath,t),c=h==="/"?0:h.length;return d=>{const u=new URL(d.url);return u.pathname=u.pathname.slice(c)||"/",new Request(u,d)}})());const l=async(h,c)=>{const d=await s(n(h.req.raw),...o(h));if(d)return d;await c()};return m(this,b,K).call(this,w,se(t,"*"),l),this}},P=new WeakMap,b=new WeakSet,lt=function(){const t=new le({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,A,a(this,A)),t.routes=this.routes,t},A=new WeakMap,K=function(t,s,i){t=t.toUpperCase(),s=se(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:i};this.router.add(t,s,[i,n]),this.routes.push(n)},Oe=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Se=function(t,s,i,n){if(n==="HEAD")return(async()=>new Response(null,await m(this,b,Se).call(this,t,s,i,"GET")))();const r=this.getPath(t,{env:i}),o=this.router.match(n,r),l=new $t(t,{path:r,matchResult:o,env:i,executionCtx:s,notFoundHandler:a(this,A)});if(o[0].length===1){let c;try{c=o[0][0][0][0](l,async()=>{l.res=await a(this,A).call(this,l)})}catch(d){return m(this,b,Oe).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:a(this,A).call(this,l))).catch(d=>m(this,b,Oe).call(this,d,l)):c??a(this,A).call(this,l)}const h=ze(o[0],this.errorHandler,a(this,A));return(async()=>{try{const c=await h(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return m(this,b,Oe).call(this,c,l)}})()},le),ht=[];function Bt(e,t){const s=this.buildAllMatchers(),i=((n,r)=>{const o=s[n]||s[w],l=o[2][r];if(l)return l;const h=r.match(o[0]);if(!h)return[[],ht];const c=h.indexOf("",1);return[o[1][c],h]});return this.match=i,i(e,t)}var Pe="[^/]+",pe=".*",ve="(?:|/.*)",ne=Symbol(),Ut=new Set(".\\+*[^]$()");function qt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===pe||e===ve?1:t===pe||t===ve?-1:e===Pe?1:t===Pe?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Q,X,C,ee,Wt=(ee=class{constructor(){v(this,Q);v(this,X);v(this,C,Object.create(null))}insert(t,s,i,n,r){if(t.length===0){if(a(this,Q)!==void 0)throw ne;if(r)return;f(this,Q,s);return}const[o,...l]=t,h=o==="*"?l.length===0?["","",pe]:["","",Pe]:o==="/*"?["","",ve]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(h){const d=h[1];let u=h[2]||Pe;if(d&&h[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ne;if(c=a(this,C)[u],!c){if(Object.keys(a(this,C)).some(y=>y!==pe&&y!==ve))throw ne;if(r)return;c=a(this,C)[u]=new ee,d!==""&&f(c,X,n.varIndex++)}!r&&d!==""&&i.push([d,a(c,X)])}else if(c=a(this,C)[o],!c){if(Object.keys(a(this,C)).some(d=>d.length>1&&d!==pe&&d!==ve))throw ne;if(r)return;c=a(this,C)[o]=new ee}c.insert(l,s,i,n,r)}buildRegExpStr(){const s=Object.keys(a(this,C)).sort(qt).map(i=>{const n=a(this,C)[i];return(typeof a(n,X)=="number"?`(${i})@${a(n,X)}`:Ut.has(i)?`\\${i}`:i)+n.buildRegExpStr()});return typeof a(this,Q)=="number"&&s.unshift(`#${a(this,Q)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Q=new WeakMap,X=new WeakMap,C=new WeakMap,ee),Ae,be,Ve,Gt=(Ve=class{constructor(){v(this,Ae,{varIndex:0});v(this,be,new Wt)}insert(e,t,s){const i=[],n=[];for(let o=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,h=>{const c=`@\\${o}`;return n[o]=[c,h],o++,l=!0,c}),!l)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=n.length-1;o>=0;o--){const[l]=n[o];for(let h=r.length-1;h>=0;h--)if(r[h].indexOf(l)!==-1){r[h]=r[h].replace(l,n[o][1]);break}}return a(this,be).insert(r,t,i,a(this,Ae),s),i}buildRegExp(){let e=a(this,be).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],i=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,r,o)=>r!==void 0?(s[++t]=Number(r),"$()"):(o!==void 0&&(i[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,i]}},Ae=new WeakMap,be=new WeakMap,Ve),Kt=[/^$/,[],Object.create(null)],ke=Object.create(null);function dt(e){return ke[e]??(ke[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Vt(){ke=Object.create(null)}function Jt(e){var c;const t=new Gt,s=[];if(e.length===0)return Kt;const i=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,u],[y,x])=>d?1:y?-1:u.length-x.length),n=Object.create(null);for(let d=0,u=-1,y=i.length;d<y;d++){const[x,E,T]=i[d];x?n[E]=[T.map(([j])=>[j,Object.create(null)]),ht]:u++;let g;try{g=t.insert(E,u,x)}catch(j){throw j===ne?new ct(E):j}x||(s[u]=T.map(([j,F])=>{const Ee=Object.create(null);for(F-=1;F>=0;F--){const[je,D]=g[F];Ee[je]=D}return[j,Ee]}))}const[r,o,l]=t.buildRegExp();for(let d=0,u=s.length;d<u;d++)for(let y=0,x=s[d].length;y<x;y++){const E=(c=s[d][y])==null?void 0:c[1];if(!E)continue;const T=Object.keys(E);for(let g=0,j=T.length;g<j;g++)E[T[g]]=l[E[T[g]]]}const h=[];for(const d in o)h[d]=s[o[d]];return[r,h,n]}function te(e,t){if(e){for(const s of Object.keys(e).sort((i,n)=>n.length-i.length))if(dt(s).test(t))return[...e[s]]}}var U,q,Ce,ut,Je,Qt=(Je=class{constructor(){v(this,Ce);p(this,"name","RegExpRouter");v(this,U);v(this,q);p(this,"match",Bt);f(this,U,{[w]:Object.create(null)}),f(this,q,{[w]:Object.create(null)})}add(e,t,s){var l;const i=a(this,U),n=a(this,q);if(!i||!n)throw new Error(ot);i[e]||[i,n].forEach(h=>{h[e]=Object.create(null),Object.keys(h[w]).forEach(c=>{h[e][c]=[...h[w][c]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const h=dt(t);e===w?Object.keys(i).forEach(c=>{var d;(d=i[c])[t]||(d[t]=te(i[c],t)||te(i[w],t)||[])}):(l=i[e])[t]||(l[t]=te(i[e],t)||te(i[w],t)||[]),Object.keys(i).forEach(c=>{(e===w||e===c)&&Object.keys(i[c]).forEach(d=>{h.test(d)&&i[c][d].push([s,r])})}),Object.keys(n).forEach(c=>{(e===w||e===c)&&Object.keys(n[c]).forEach(d=>h.test(d)&&n[c][d].push([s,r]))});return}const o=et(t)||[t];for(let h=0,c=o.length;h<c;h++){const d=o[h];Object.keys(n).forEach(u=>{var y;(e===w||e===u)&&((y=n[u])[d]||(y[d]=[...te(i[u],d)||te(i[w],d)||[]]),n[u][d].push([s,r-c+h+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(a(this,q)).concat(Object.keys(a(this,U))).forEach(t=>{e[t]||(e[t]=m(this,Ce,ut).call(this,t))}),f(this,U,f(this,q,void 0)),Vt(),e}},U=new WeakMap,q=new WeakMap,Ce=new WeakSet,ut=function(e){const t=[];let s=e===w;return[a(this,U),a(this,q)].forEach(i=>{const n=i[e]?Object.keys(i[e]).map(r=>[r,i[e][r]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==w&&t.push(...Object.keys(i[w]).map(r=>[r,i[w][r]]))}),s?Jt(t):null},Je),W,$,Qe,Xt=(Qe=class{constructor(e){p(this,"name","SmartRouter");v(this,W,[]);v(this,$,[]);f(this,W,e.routers)}add(e,t,s){if(!a(this,$))throw new Error(ot);a(this,$).push([e,t,s])}match(e,t){if(!a(this,$))throw new Error("Fatal error");const s=a(this,W),i=a(this,$),n=s.length;let r=0,o;for(;r<n;r++){const l=s[r];try{for(let h=0,c=i.length;h<c;h++)l.add(...i[h]);o=l.match(e,t)}catch(h){if(h instanceof ct)continue;throw h}this.match=l.match.bind(l),f(this,W,[l]),f(this,$,void 0);break}if(r===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(a(this,$)||a(this,W).length!==1)throw new Error("No active router has been determined yet.");return a(this,W)[0]}},W=new WeakMap,$=new WeakMap,Qe),fe=Object.create(null),G,O,Y,he,R,M,V,de,Yt=(de=class{constructor(t,s,i){v(this,M);v(this,G);v(this,O);v(this,Y);v(this,he,0);v(this,R,fe);if(f(this,O,i||Object.create(null)),f(this,G,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},f(this,G,[n])}f(this,Y,[])}insert(t,s,i){f(this,he,++Le(this,he)._);let n=this;const r=St(s),o=[];for(let l=0,h=r.length;l<h;l++){const c=r[l],d=r[l+1],u=At(c,d),y=Array.isArray(u)?u[0]:c;if(y in a(n,O)){n=a(n,O)[y],u&&o.push(u[1]);continue}a(n,O)[y]=new de,u&&(a(n,Y).push(u),o.push(u[1])),n=a(n,O)[y]}return a(n,G).push({[t]:{handler:i,possibleKeys:o.filter((l,h,c)=>c.indexOf(l)===h),score:a(this,he)}}),n}search(t,s){var h;const i=[];f(this,R,fe);let r=[this];const o=Ye(s),l=[];for(let c=0,d=o.length;c<d;c++){const u=o[c],y=c===d-1,x=[];for(let E=0,T=r.length;E<T;E++){const g=r[E],j=a(g,O)[u];j&&(f(j,R,a(g,R)),y?(a(j,O)["*"]&&i.push(...m(this,M,V).call(this,a(j,O)["*"],t,a(g,R))),i.push(...m(this,M,V).call(this,j,t,a(g,R)))):x.push(j));for(let F=0,Ee=a(g,Y).length;F<Ee;F++){const je=a(g,Y)[F],D=a(g,R)===fe?{}:{...a(g,R)};if(je==="*"){const L=a(g,O)["*"];L&&(i.push(...m(this,M,V).call(this,L,t,a(g,R))),f(L,R,D),x.push(L));continue}const[mt,He,ue]=je;if(!u&&!(ue instanceof RegExp))continue;const _=a(g,O)[mt],gt=o.slice(c).join("/");if(ue instanceof RegExp){const L=ue.exec(gt);if(L){if(D[He]=L[0],i.push(...m(this,M,V).call(this,_,t,a(g,R),D)),Object.keys(a(_,O)).length){f(_,R,D);const Te=((h=L[0].match(/\//))==null?void 0:h.length)??0;(l[Te]||(l[Te]=[])).push(_)}continue}}(ue===!0||ue.test(u))&&(D[He]=u,y?(i.push(...m(this,M,V).call(this,_,t,D,a(g,R))),a(_,O)["*"]&&i.push(...m(this,M,V).call(this,a(_,O)["*"],t,D,a(g,R)))):(f(_,R,D),x.push(_)))}}r=x.concat(l.shift()??[])}return i.length>1&&i.sort((c,d)=>c.score-d.score),[i.map(({handler:c,params:d})=>[c,d])]}},G=new WeakMap,O=new WeakMap,Y=new WeakMap,he=new WeakMap,R=new WeakMap,M=new WeakSet,V=function(t,s,i,n){const r=[];for(let o=0,l=a(t,G).length;o<l;o++){const h=a(t,G)[o],c=h[s]||h[w],d={};if(c!==void 0&&(c.params=Object.create(null),r.push(c),i!==fe||n&&n!==fe))for(let u=0,y=c.possibleKeys.length;u<y;u++){const x=c.possibleKeys[u],E=d[c.score];c.params[x]=n!=null&&n[x]&&!E?n[x]:i[x]??(n==null?void 0:n[x]),d[c.score]=!0}}return r},de),Z,Xe,Zt=(Xe=class{constructor(){p(this,"name","TrieRouter");v(this,Z);f(this,Z,new Yt)}add(e,t,s){const i=et(t);if(i){for(let n=0,r=i.length;n<r;n++)a(this,Z).insert(e,i[n],s);return}a(this,Z).insert(e,t,s)}match(e,t){return a(this,Z).search(e,t)}},Z=new WeakMap,Xe),ft=class extends zt{constructor(e={}){super(e),this.router=e.router??new Xt({routers:[new Qt,new Zt]})}},es=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,qe=(e,t=ss)=>{const s=/\.([a-zA-Z0-9]+?)$/,i=e.match(s);if(!i)return;let n=t[i[1]];return n&&n.startsWith("text")&&(n+="; charset=utf-8"),n},ts={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},ss=ts,is=(...e)=>{let t=e.filter(n=>n!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=t.split("/"),i=[];for(const n of s)n===".."&&i.length>0&&i.at(-1)!==".."?i.pop():n!=="."&&i.push(n);return i.join("/")||"."},pt={br:".br",zstd:".zst",gzip:".gz"},ns=Object.keys(pt),rs="index.html",as=e=>{const t=e.root??"./",s=e.path,i=e.join??is;return async(n,r)=>{var d,u,y,x;if(n.finalized)return r();let o;if(e.path)o=e.path;else try{if(o=decodeURIComponent(n.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(o))throw new Error}catch{return await((d=e.onNotFound)==null?void 0:d.call(e,n.req.path,n)),r()}let l=i(t,!s&&e.rewriteRequestPath?e.rewriteRequestPath(o):o);e.isDir&&await e.isDir(l)&&(l=i(l,rs));const h=e.getContent;let c=await h(l,n);if(c instanceof Response)return n.newResponse(c.body,c);if(c){const E=e.mimes&&qe(l,e.mimes)||qe(l);if(n.header("Content-Type",E||"application/octet-stream"),e.precompressed&&(!E||es.test(E))){const T=new Set((u=n.req.header("Accept-Encoding"))==null?void 0:u.split(",").map(g=>g.trim()));for(const g of ns){if(!T.has(g))continue;const j=await h(l+pt[g],n);if(j){c=j,n.header("Content-Encoding",g),n.header("Vary","Accept-Encoding",{append:!0});break}}}return await((y=e.onFound)==null?void 0:y.call(e,l,n)),n.body(c)}await((x=e.onNotFound)==null?void 0:x.call(e,l,n)),await r()}},os=async(e,t)=>{let s;t&&t.manifest?typeof t.manifest=="string"?s=JSON.parse(t.manifest):s=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let i;t&&t.namespace?i=t.namespace:i=__STATIC_CONTENT;const n=s[e];if(!n)return null;const r=await i.get(n,{type:"stream"});return r||null},cs=e=>async function(s,i){return as({...e,getContent:async r=>os(r,{manifest:e.manifest,namespace:e.namespace?e.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,i)},ls=e=>cs(e);const Me=new ft;Me.use("/static/*",ls({root:"./public"}));Me.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio - Data Analyst</title>
        <meta name="description" content="Data Analyst | Dashboard Builder | Insight Creator">
        <link rel="stylesheet" href="/static/style.css">
    </head>
    <body>
        <!-- Navigation -->
        <nav class="nav">
            <div class="nav-container">
                <div class="nav-logo">DA</div>
                <div class="nav-links">
                    <a href="#about" class="nav-link">About</a>
                    <a href="#projects" class="nav-link">Projects</a>
                    <a href="#skills" class="nav-link">Skills</a>
                    <a href="#experience" class="nav-link">Experience</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </div>
                <div class="nav-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero" id="home">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">
                        <span class="hero-line">I turn</span>
                        <span class="hero-line hero-highlight">data</span>
                        <span class="hero-line">into decisions.</span>
                    </h1>
                    <p class="hero-subtitle">
                        <span class="hero-role">Data Analyst</span>
                        <span class="hero-divider">|</span>
                        <span class="hero-role">Dashboard Builder</span>
                        <span class="hero-divider">|</span>
                        <span class="hero-role">Insight Creator</span>
                    </p>
                </div>
                <div class="hero-cta">
                    <a href="#projects" class="btn btn-primary">View Work</a>
                    <a href="#contact" class="btn btn-secondary">Get in Touch</a>
                </div>
            </div>
            <div class="scroll-indicator">
                <span>Scroll</span>
                <div class="scroll-line"></div>
            </div>
        </section>

        <!-- About Section -->
        <section class="section about" id="about">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">01</span>
                    <h2 class="section-title">About</h2>
                </div>
                <div class="about-content">
                    <div class="about-text">
                        <h3 class="about-heading">What I Do</h3>
                        <p class="about-description">
                            I transform complex datasets into actionable insights that drive business decisions. 
                            Specializing in dashboard development, statistical analysis, and data storytelling.
                        </p>
                        <div class="divider"></div>
                        <h3 class="about-heading">How I Think</h3>
                        <p class="about-description">
                            Every data point tells a story. I bridge the gap between raw numbers and strategic clarity,
                            turning confusion into confidence for stakeholders.
                        </p>
                        <div class="divider"></div>
                        <h3 class="about-heading">Problem I Solve</h3>
                        <p class="about-description">
                            Making data accessible. Breaking down silos. Empowering teams with real-time insights
                            that eliminate guesswork and accelerate growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="section projects" id="projects">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">02</span>
                    <h2 class="section-title">Featured Projects</h2>
                </div>
                <div class="projects-grid" id="projectsGrid">
                    <!-- Projects will be dynamically inserted here -->
                </div>
            </div>
        </section>

        <!-- Project Modal -->
        <div class="modal" id="projectModal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-body" id="modalBody">
                    <!-- Project details will be inserted here -->
                </div>
            </div>
        </div>

        <!-- Skills Section -->
        <section class="section skills" id="skills">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">03</span>
                    <h2 class="section-title">Skills & Tools</h2>
                </div>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3 class="skill-category-title">Analytics</h3>
                        <div class="skill-list">
                            <div class="skill-item">Statistical Analysis</div>
                            <div class="skill-item">Predictive Modeling</div>
                            <div class="skill-item">A/B Testing</div>
                            <div class="skill-item">Data Mining</div>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3 class="skill-category-title">Tools</h3>
                        <div class="skill-list">
                            <div class="skill-item">Python</div>
                            <div class="skill-item">R</div>
                            <div class="skill-item">Tableau</div>
                            <div class="skill-item">Power BI</div>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3 class="skill-category-title">Databases</h3>
                        <div class="skill-list">
                            <div class="skill-item">SQL</div>
                            <div class="skill-item">PostgreSQL</div>
                            <div class="skill-item">MongoDB</div>
                            <div class="skill-item">BigQuery</div>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3 class="skill-category-title">Visualization</h3>
                        <div class="skill-list">
                            <div class="skill-item">D3.js</div>
                            <div class="skill-item">Plotly</div>
                            <div class="skill-item">Matplotlib</div>
                            <div class="skill-item">ggplot2</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section class="section experience" id="experience">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">04</span>
                    <h2 class="section-title">Impact & Experience</h2>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">Senior Data Analyst</h3>
                            <span class="timeline-company">Tech Company</span>
                            <span class="timeline-period">2022 - Present</span>
                            <ul class="timeline-achievements">
                                <li>Reduced data processing time by <span class="metric">45%</span> through optimized ETL pipelines</li>
                                <li>Built executive dashboards serving <span class="metric">200+</span> stakeholders daily</li>
                                <li>Increased revenue attribution accuracy by <span class="metric">30%</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">Data Analyst</h3>
                            <span class="timeline-company">Growth Startup</span>
                            <span class="timeline-period">2020 - 2022</span>
                            <ul class="timeline-achievements">
                                <li>Implemented automated reporting saving <span class="metric">20hrs</span>/week</li>
                                <li>Identified opportunities leading to <span class="metric">$2M+</span> in new revenue</li>
                                <li>Created predictive models with <span class="metric">85%</span> accuracy</li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">Junior Analyst</h3>
                            <span class="timeline-company">Consulting Firm</span>
                            <span class="timeline-period">2019 - 2020</span>
                            <ul class="timeline-achievements">
                                <li>Analyzed datasets with <span class="metric">10M+</span> records</li>
                                <li>Delivered <span class="metric">50+</span> client presentations</li>
                                <li>Improved data quality by <span class="metric">60%</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="section contact" id="contact">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">05</span>
                    <h2 class="section-title">Get In Touch</h2>
                </div>
                <div class="contact-content">
                    <p class="contact-text">
                        Let's discuss how data can drive your next decision.
                    </p>
                    <div class="contact-links">
                        <a href="mailto:analyst@example.com" class="contact-link">
                            <span class="contact-icon">📧</span>
                            <span>analyst@example.com</span>
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" class="contact-link">
                            <span class="contact-icon">💼</span>
                            <span>LinkedIn</span>
                        </a>
                        <a href="/static/resume.pdf" download class="contact-link">
                            <span class="contact-icon">📄</span>
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <p class="footer-text">
                    Built with precision. Designed for impact.
                </p>
                <p class="footer-copyright">
                    © 2024 Data Analyst Portfolio
                </p>
            </div>
        </footer>

        <!-- Custom Cursor -->
        <div class="cursor"></div>
        <div class="cursor-follower"></div>

        <script src="/static/script.js"><\/script>
    </body>
    </html>
  `));const We=new ft,hs=Object.assign({"/src/index.tsx":Me});let vt=!1;for(const[,e]of Object.entries(hs))e&&(We.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),We.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),vt=!0);if(!vt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{We as default};
