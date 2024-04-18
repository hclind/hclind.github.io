var Qe=Object.defineProperty;var et=(t,e,n)=>e in t?Qe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var pe=(t,e,n)=>(et(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function N(){}function tt(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Ze(t){return t()}function ye(){return Object.create(null)}function H(t){t.forEach(Ze)}function ke(t){return typeof t=="function"}function le(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ie;function q(t,e){return t===e?!0:(ie||(ie=document.createElement("a")),ie.href=e,t===ie.href)}function lt(t){return Object.keys(t).length===0}function rt(t,e,n,l){if(t){const r=Je(t,e,n,l);return t[0](r)}}function Je(t,e,n,l){return t[1]&&l?tt(n.ctx.slice(),t[1](l(e))):n.ctx}function ot(t,e,n,l){if(t[2]&&l){const r=t[2](l(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],o=Math.max(e.dirty.length,r.length);for(let i=0;i<o;i+=1)c[i]=e.dirty[i]|r[i];return c}return e.dirty|r}return e.dirty}function ct(t,e,n,l,r,c){if(r){const o=Je(e,n,l,c);t.p(o,r)}}function it(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function st(t){return t&&ke(t.destroy)?t.destroy:N}const ut=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function C(t,e){t.appendChild(e)}function P(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function W(){return T(" ")}function Ke(){return T("")}function B(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function ft(t){return function(e){return e.preventDefault(),t.call(this,e)}}function z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function at(t){return Array.from(t.childNodes)}function Y(t,e){e=""+e,t.data!==e&&(t.data=e)}function _(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function dt(t,e,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:l})}let ne;function F(t){ne=t}function ve(){if(!ne)throw new Error("Function called outside component initialization");return ne}function ht(t){ve().$$.on_mount.push(t)}function Ve(){const t=ve();return(e,n,{cancelable:l=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=dt(e,n,{cancelable:l});return r.slice().forEach(o=>{o.call(t,c)}),!c.defaultPrevented}return!0}}const V=[],ze=[];let G=[];const Ee=[],_t=Promise.resolve();let ge=!1;function pt(){ge||(ge=!0,_t.then(we))}function be(t){G.push(t)}const me=new Set;let K=0;function we(){if(K!==0)return;const t=ne;do{try{for(;K<V.length;){const e=V[K];K++,F(e),mt(e.$$)}}catch(e){throw V.length=0,K=0,e}for(F(null),V.length=0,K=0;ze.length;)ze.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];me.has(n)||(me.add(n),n())}G.length=0}while(V.length);for(;Ee.length;)Ee.pop()();ge=!1,me.clear(),F(t)}function mt(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(be)}}function gt(t){const e=[],n=[];G.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),G=e}const fe=new Set;let Z;function Q(){Z={r:0,c:[],p:Z}}function ee(){Z.r||H(Z.c),Z=Z.p}function S(t,e){t&&t.i&&(fe.delete(t),t.i(e))}function A(t,e,n,l){if(t&&t.o){if(fe.has(t))return;fe.add(t),Z.c.push(()=>{fe.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function I(t,e){const n=e.token={};function l(r,c,o,i){if(e.token!==n)return;e.resolved=i;let s=e.ctx;o!==void 0&&(s=s.slice(),s[o]=i);const u=r&&(e.current=r)(s);let a=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==c&&f&&(Q(),A(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),ee())}):e.block.d(1),u.c(),S(u,1),u.m(e.mount(),e.anchor),a=!0),e.block=u,e.blocks&&(e.blocks[c]=u),a&&we()}if(nt(t)){const r=ve();if(t.then(c=>{F(r),l(e.then,1,e.value,c),F(null)},c=>{if(F(r),l(e.catch,2,e.error,c),F(null),!e.hasCatch)throw c}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}}function re(t,e,n){const l=e.slice(),{resolved:r}=t;t.current===t.then&&(l[t.value]=r),t.current===t.catch&&(l[t.error]=r),t.block.p(l,n)}function M(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function de(t){t&&t.c()}function oe(t,e,n){const{fragment:l,after_update:r}=t.$$;l&&l.m(e,n),be(()=>{const c=t.$$.on_mount.map(Ze).filter(ke);t.$$.on_destroy?t.$$.on_destroy.push(...c):H(c),t.$$.on_mount=[]}),r.forEach(be)}function ce(t,e){const n=t.$$;n.fragment!==null&&(gt(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(V.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function he(t,e,n,l,r,c,o=null,i=[-1]){const s=ne;F(t);const u=t.$$={fragment:null,ctx:[],props:c,update:N,not_equal:r,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:ye(),dirty:i,skip_bound:!1,root:e.target||s.$$.root};o&&o(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,d,...h)=>{const p=h.length?h[0]:d;return u.ctx&&r(u.ctx[f],u.ctx[f]=p)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](p),a&&bt(t,f)),d}):[],u.update(),a=!0,H(u.before_update),u.fragment=l?l(u.ctx):!1,e.target){if(e.hydrate){const f=at(e.target);u.fragment&&u.fragment.l(f),f.forEach(j)}else u.fragment&&u.fragment.c();e.intro&&S(t.$$.fragment),oe(t,e.target,e.anchor),we()}F(s)}class _e{constructor(){pe(this,"$$");pe(this,"$$set")}$destroy(){ce(this,1),this.$destroy=N}$on(e,n){if(!ke(n))return N;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const kt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(kt);const{document:se}=ut;function $e(t,e,n){const l=t.slice();return l[22]=e[n],l[24]=n,l}function Ce(t){let e,n,l;function r(...c){return t[17](t[24],...c)}return{c(){e=E("div"),_(e,"height","16px"),_(e,"width","16px"),_(e,"border-radius","50%"),_(e,"background",t[24]==t[5]?"#666":"#ddd"),_(e,"margin","8px"),_(e,"margin-top","2px")},m(c,o){P(c,e,o),n||(l=B(e,"click",r),n=!0)},p(c,o){t=c,o&32&&_(e,"background",t[24]==t[5]?"#666":"#ddd")},d(c){c&&j(e),n=!1,l()}}}function vt(t){let e,n,l,r,c,o,i,s;const u=t[14].default,a=rt(u,t,t[13],null);let f=M(t[8]),d=[];for(let h=0;h<f.length;h+=1)d[h]=Ce($e(t,f,h));return{c(){e=E("div"),n=E("div"),a&&a.c(),l=W(),r=E("div");for(let h=0;h<d.length;h+=1)d[h].c();c=W(),z(n,"class","pages svelte-1w3jac1"),_(n,"width",t[1]*t[2]+"px"),_(n,"left",t[6].x+"px"),_(n,"transition-duration",t[4]+"ms"),_(n,"cursor",t[7]),z(e,"class","contain svelte-1w3jac1"),_(e,"height",t[3]-32+"px"),_(e,"--pagew",t[2]+"px"),_(r,"display","flex"),_(r,"justify-content","center"),_(r,"background","none"),_(r,"margin","0")},m(h,p){P(h,e,p),C(e,n),a&&a.m(n,null),P(h,l,p),P(h,r,p);for(let v=0;v<d.length;v+=1)d[v]&&d[v].m(r,null);P(h,c,p),o=!0,i||(s=[B(n,"mousedown",t[9]),B(n,"mousemove",ft(t[11])),B(n,"touchstart",t[15]),B(n,"touchmove",t[16]),st(t[12].call(null,e)),B(se.body,"mouseup",t[10]),B(se.body,"mousemove",t[11]),B(se.body,"touchend",t[18]),B(se.body,"touchmove",t[19])],i=!0)},p(h,[p]){if(a&&a.p&&(!o||p&8192)&&ct(a,u,h,h[13],o?ot(u,h[13],p,null):it(h[13]),null),(!o||p&6)&&_(n,"width",h[1]*h[2]+"px"),(!o||p&64)&&_(n,"left",h[6].x+"px"),(!o||p&16)&&_(n,"transition-duration",h[4]+"ms"),(!o||p&128)&&_(n,"cursor",h[7]),(!o||p&8)&&_(e,"height",h[3]-32+"px"),(!o||p&4)&&_(e,"--pagew",h[2]+"px"),p&289){f=M(h[8]);let v;for(v=0;v<f.length;v+=1){const g=$e(h,f,v);d[v]?d[v].p(g,p):(d[v]=Ce(g),d[v].c(),d[v].m(r,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=f.length}},i(h){o||(S(a,h),o=!0)},o(h){A(a,h),o=!1},d(h){h&&(j(e),j(l),j(r),j(c)),a&&a.d(h),x(d,h),i=!1,H(s)}}}function wt(t,e,n){let{$$slots:l={},$$scope:r}=e;const c=Ve();let o=10,i=100,s=200,u=0,a=0,f={x:0,y:0,md:!1,minx:-100,ox:0},d={x:0,y:0,dir:1},h="grab",p=[];function v($,X=500){$<0||$>=o||(c("onChange",$),n(4,u=X),n(6,d.x=-$*i,d),n(5,a=$),setTimeout(()=>{n(4,u=0)},1e3),n(7,h="grab"))}function g($){f.x=$.screenX,f.ox=$.screenX,f.md=!0,n(7,h="grabbing")}function k($){if(!f.md)return;f.md=!1;let X={idx:0,d:1e3};for(let D=0;D<o;D++){let te=Math.abs(d.x+D*i+d.dir*i/3);X.d>te&&(X.d=te,X.idx=D)}v(X.idx)}function w($){f.md&&(n(6,d.dir=$.screenX>f.ox?1:-1,d),n(6,d.x+=$.screenX-f.x,d),d.x>0&&n(6,d.x=0,d),d.x<f.minx&&n(6,d.x=f.minx,d),f.x=$.screenX)}function b($){var X,D,te;n(1,o=((X=$.firstElementChild)==null?void 0:X.children.length)||0),n(3,s=((D=$.parentElement)==null?void 0:D.clientHeight)||document.documentElement.clientHeight),n(2,i=((te=$.parentElement)==null?void 0:te.clientWidth)||window.innerWidth),f.minx=-i*(o-1),n(8,p=Array(o).fill(0)),setTimeout(v,1e3,0)}const R=$=>{$.touches.length==1&&g($.touches[0])},O=$=>{$.touches.length==1&&w($.touches[0])},y=($,X)=>{v($)},L=$=>{k($.touches[0])},m=$=>{w($.touches[0])};return t.$$set=$=>{"$$scope"in $&&n(13,r=$.$$scope)},[v,o,i,s,u,a,d,h,p,g,k,w,b,r,l,R,O,y,L,m]}class yt extends _e{constructor(e){super(),he(this,e,wt,vt,le,{toPage:0})}get toPage(){return this.$$.ctx[0]}}function je(t,e,n){const l=t.slice();return l[5]=e[n],l[7]=n,l}function Pe(t){let e,n,l;function r(...c){return t[4](t[7],...c)}return{c(){e=E("div"),z(e,"class","face face"+(t[7]+1)+" svelte-13gc35v"),z(e,"tabindex","-1"),_(e,"background-image","url("+t[5].url+")")},m(c,o){P(c,e,o),n||(l=B(e,"click",r),n=!0)},p(c,o){t=c,o&1&&_(e,"background-image","url("+t[5].url+")")},d(c){c&&j(e),n=!1,l()}}}function zt(t){let e,n,l,r,c=M(t[0].faces),o=[];for(let i=0;i<c.length;i+=1)o[i]=Pe(je(t,c,i));return{c(){e=E("div"),n=E("div");for(let i=0;i<o.length;i+=1)o[i].c();z(n,"class","inner svelte-13gc35v"),_(n,"--innr",t[0].inR+"deg"),z(e,"class","cube svelte-13gc35v"),_(e,"z-index",t[0].zidx),_(e,"--bkX",(t[0].x??0)+"px"),_(e,"--bkY",(t[0].y??0)+"px"),_(e,"--bkZ",(t[0].z??0)+"px"),_(e,"--rox",t[2].x+"deg"),_(e,"--roy",t[2].y+"deg"),_(e,"--roz",t[2].z+"deg")},m(i,s){P(i,e,s),C(e,n);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(n,null);l||(r=B(e,"keydown",t[3]),l=!0)},p(i,[s]){if(s&3){c=M(i[0].faces);let u;for(u=0;u<c.length;u+=1){const a=je(i,c,u);o[u]?o[u].p(a,s):(o[u]=Pe(a),o[u].c(),o[u].m(n,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=c.length}s&1&&_(n,"--innr",i[0].inR+"deg"),s&1&&_(e,"z-index",i[0].zidx),s&1&&_(e,"--bkX",(i[0].x??0)+"px"),s&1&&_(e,"--bkY",(i[0].y??0)+"px"),s&1&&_(e,"--bkZ",(i[0].z??0)+"px")},i:N,o:N,d(i){i&&j(e),x(o,i),l=!1,r()}}}function Et(t,e,n){const l=Ve();let r={x:-20,y:-45,z:0},{bk:c={name:"test001",faces:[]}}=e;function o(s){s.keyCode===8&&l("delete",c)}const i=(s,u)=>{l("newbrick",{bk:c,f:s})};return t.$$set=s=>{"bk"in s&&n(0,c=s.bk)},[c,l,r,o,i]}class $t extends _e{constructor(e){super(),he(this,e,Et,zt,le,{bk:0})}}function Ne(t,e="./brick_faces"){return typeof t=="string"?{name:t,url:`${e}/${t}.png`}:t}function Oe(t){return t.map(e=>{let n=e;return e.imgs?(n.faces=e.imgs.map(l=>Ne(l)),n.imgs=null):n.faces=n.faces.map(l=>Ne(l)),n})}function Le(t,e,n){const l=t.slice();return l[22]=e[n],l[24]=n,l}function We(t){let e,n;return e=new $t({props:{bk:t[22]}}),{c(){de(e.$$.fragment)},m(l,r){oe(e,l,r),n=!0},p(l,r){const c={};r&2&&(c.bk=l[22]),e.$set(c)},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){ce(e,l)}}}function Se(t){let e,n,l=M(t[1]),r=[];for(let o=0;o<l.length;o+=1)r[o]=We(Le(t,l,o));const c=o=>A(r[o],1,1,()=>{r[o]=null});return{c(){e=E("div");for(let o=0;o<r.length;o+=1)r[o].c();z(e,"class","camera svelte-xosk8y"),_(e,"--size",t[5]+"px"),_(e,"--bgsize",t[0]+"px"),_(e,"--rx",t[6]+"deg"),_(e,"--ry",t[3]+"deg"),_(e,"--rz",jt+"deg")},m(o,i){P(o,e,i);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,null);n=!0},p(o,i){if(i&2){l=M(o[1]);let s;for(s=0;s<l.length;s+=1){const u=Le(o,l,s);r[s]?(r[s].p(u,i),S(r[s],1)):(r[s]=We(u),r[s].c(),S(r[s],1),r[s].m(e,null))}for(Q(),s=l.length;s<r.length;s+=1)c(s);ee()}(!n||i&1)&&_(e,"--bgsize",o[0]+"px"),(!n||i&8)&&_(e,"--ry",o[3]+"deg")},i(o){if(!n){for(let i=0;i<l.length;i+=1)S(r[i]);n=!0}},o(o){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)A(r[i]);n=!1},d(o){o&&j(e),x(r,o)}}}function Ct(t){let e,n=t[2],l,r,c,o,i,s,u,a,f,d,h,p,v,g=t[1].length+"",k,w,b,R,O=Se(t);return{c(){e=E("div"),O.c(),l=W(),r=E("div"),c=E("button"),c.textContent="⤵",o=W(),i=E("button"),i.textContent="⤴",s=W(),u=E("button"),u.textContent="▶",a=W(),f=E("button"),f.textContent="＝",d=W(),h=E("button"),h.textContent="⬛",p=W(),v=E("div"),k=T(g),z(c,"class","svelte-xosk8y"),z(i,"class","svelte-xosk8y"),z(u,"class","svelte-xosk8y"),z(f,"class","svelte-xosk8y"),z(h,"class","svelte-xosk8y"),_(r,"position","absolute"),_(r,"top","0px"),_(r,"left","10px"),_(r,"height","30px"),_(r,"width","240px"),_(r,"margin","10px"),_(v,"position","absolute"),_(v,"top","15px"),_(v,"right","20px"),_(e,"position","relative"),_(e,"width",t[0]+"px"),_(e,"overflow","scroll")},m(y,L){P(y,e,L),O.m(e,null),C(e,l),C(e,r),C(r,c),C(r,o),C(r,i),C(r,s),C(r,u),C(r,a),C(r,f),C(r,d),C(r,h),C(e,p),C(e,v),C(v,k),w=!0,b||(R=[B(c,"click",t[12]),B(i,"click",t[13]),B(u,"click",t[14]),B(f,"click",t[15]),B(h,"click",t[16])],b=!0)},p(y,[L]){L&4&&le(n,n=y[2])?(Q(),A(O,1,1,N),ee(),O=Se(y),O.c(),S(O,1),O.m(e,l)):O.p(y,L),(!w||L&2)&&g!==(g=y[1].length+"")&&Y(k,g),(!w||L&1)&&_(e,"width",y[0]+"px")},i(y){w||(S(O),w=!0)},o(y){A(O),w=!1},d(y){y&&j(e),O.d(y),b=!1,H(R)}}}let ue=16,jt=0;function Pt(t,e,n){let{bgsize:l=window.innerWidth*.96}=e,{asm:r="test002.json"}=e,c=[],o=l/ue,i=0,s=-20,u=295,a,f=[],d={id:3,ft:[m=>100*m.k-10*m.i+m.j,m=>100*m.k+10*(ue-m.i)-m.j,m=>100*m.k+10*m.i-m.j,m=>100*m.k+10*m.i+m.j]};function h(m){for(;u<0;)n(3,u+=360);n(3,u%=360);let $=Math.floor(u/90);$!==d.id&&(d.id=$,c.forEach(X=>{X.o&&(X.zidx=d.ft[$](X.o))}),n(2,i++,i))}let p={step:0,conti:!1};function v(){a&&clearTimeout(a),p.step==0&&(f=c,n(1,c=[])),f.length>0&&p.conti?(n(1,c=[...c,...f.splice(0,1)]),a=setTimeout(v,500,n(4,++p.step,p))):n(4,p.conti=!0,p)}function g(){n(4,p.conti=!1,p),setTimeout(()=>{n(4,p.step=0,p),n(1,c=[...c,...f])},1e3)}function k(){n(4,p.conti=!1,p)}function w(m){let{i:$,j:X,k:D}=m.o||{i:0,j:0,k:0};return{...m,x:(ue/2*1+$-.5)*o,y:(ue/2*1-D-.5)*o,z:X*o}}ht(()=>{r.endsWith(".json")?fetch(r).then(m=>m.json()).then(m=>{n(1,c=Oe(m)),n(1,c=c.map(w))}):(n(1,c=Oe(JSON.parse(r))),n(1,c=c.map(w)))});const b=m=>{n(3,u-=15),h()},R=m=>{n(3,u+=15),h()},O=m=>{n(4,p.conti=!0,p),v()},y=m=>k(),L=m=>g();return t.$$set=m=>{"bgsize"in m&&n(0,l=m.bgsize),"asm"in m&&n(11,r=m.asm)},[l,c,i,u,p,o,s,h,v,g,k,r,b,R,O,y,L]}class Ge extends _e{constructor(e){super(),he(this,e,Pt,Ct,le,{bgsize:0,asm:11})}}function Be(t,e,n){const l=t.slice();return l[17]=e[n],l}function Me(t,e,n){const l=t.slice();return l[12]=e[n],l}function Ae(t,e,n){const l=t.slice();return l[20]=e[n],l}function Re(t,e,n){const l=t.slice();return l[12]=e[n],l}function Te(t,e,n){const l=t.slice();return l[17]=e[n],l}function Xe(t,e,n){const l=t.slice();return l[20]=e[n],l}function Ue(t,e,n){const l=t.slice();return l[8]=e[n],l}function Nt(t){let e,n=t[2].name+"",l,r,c,o,i,s,u,a,f,d,h,p,v,g=M(t[2].pngs),k=[];for(let y=0;y<g.length;y+=1)k[y]=qe(Ae(t,g,y));let w=M(t[2].asm),b=[];for(let y=0;y<w.length;y+=1)b[y]=xe(Me(t,w,y));const R=y=>A(b[y],1,1,()=>{b[y]=null});let O={ctx:t,current:null,token:null,hasCatch:!1,pending:Rt,then:At,catch:Mt,value:16};return I(p=J(t[2]),O),{c(){e=E("h3"),l=T(n),r=W(),c=E("div"),o=E("div");for(let y=0;y<k.length;y+=1)k[y].c();i=W(),s=E("div"),u=E("video"),a=E("source"),d=W();for(let y=0;y<b.length;y+=1)b[y].c();h=W(),O.block.c(),_(e,"margin","5px 60px 5px 60px"),z(a,"type","video/mp4"),q(a.src,f=U+"/"+t[2].name+"/"+t[2].mp4)||z(a,"src",f),z(u,"height","auto"),u.controls=!0,_(u,"width","100%"),_(u,"height","100%"),_(s,"width","100%"),z(o,"class","prod_detail_landscape svelte-6grdft"),_(c,"display","flex"),_(c,"max-width","90vw"),_(c,"margin","auto")},m(y,L){P(y,e,L),C(e,l),P(y,r,L),P(y,c,L),C(c,o);for(let m=0;m<k.length;m+=1)k[m]&&k[m].m(o,null);C(o,i),C(o,s),C(s,u),C(u,a),C(o,d);for(let m=0;m<b.length;m+=1)b[m]&&b[m].m(o,null);C(c,h),O.block.m(c,O.anchor=null),O.mount=()=>c,O.anchor=null,v=!0},p(y,L){if(t=y,(!v||L&4)&&n!==(n=t[2].name+"")&&Y(l,n),L&4){g=M(t[2].pngs);let m;for(m=0;m<g.length;m+=1){const $=Ae(t,g,m);k[m]?k[m].p($,L):(k[m]=qe($),k[m].c(),k[m].m(o,i))}for(;m<k.length;m+=1)k[m].d(1);k.length=g.length}if((!v||L&4&&!q(a.src,f=U+"/"+t[2].name+"/"+t[2].mp4))&&z(a,"src",f),L&4){w=M(t[2].asm);let m;for(m=0;m<w.length;m+=1){const $=Me(t,w,m);b[m]?(b[m].p($,L),S(b[m],1)):(b[m]=xe($),b[m].c(),S(b[m],1),b[m].m(o,null))}for(Q(),m=w.length;m<b.length;m+=1)R(m);ee()}O.ctx=t,L&4&&p!==(p=J(t[2]))&&I(p,O)||re(O,t,L)},i(y){if(!v){for(let L=0;L<w.length;L+=1)S(b[L]);v=!0}},o(y){b=b.filter(Boolean);for(let L=0;L<b.length;L+=1)A(b[L]);v=!1},d(y){y&&(j(e),j(r),j(c)),x(k,y),x(b,y),O.block.d(),O.token=null,O=null}}}function Ot(t){let e,n=t[2].name+"",l,r,c,o,i,s,u,a,f;o=new yt({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}});let d={ctx:t,current:null,token:null,hasCatch:!1,pending:qt,then:Ut,catch:Xt,value:16};I(s=J(t[2]),d);let h=M(t[2].asm),p=[];for(let g=0;g<h.length;g+=1)p[g]=He(Re(t,h,g));const v=g=>A(p[g],1,1,()=>{p[g]=null});return{c(){e=E("p"),l=T(n),r=W(),c=E("div"),de(o.$$.fragment),i=W(),d.block.c(),u=W();for(let g=0;g<p.length;g+=1)p[g].c();a=Ke(),z(c,"class","prod_detail svelte-6grdft")},m(g,k){P(g,e,k),C(e,l),P(g,r,k),P(g,c,k),oe(o,c,null),P(g,i,k),d.block.m(g,d.anchor=k),d.mount=()=>u.parentNode,d.anchor=u,P(g,u,k);for(let w=0;w<p.length;w+=1)p[w]&&p[w].m(g,k);P(g,a,k),f=!0},p(g,k){t=g,(!f||k&4)&&n!==(n=t[2].name+"")&&Y(l,n);const w={};if(k&536870916&&(w.$$scope={dirty:k,ctx:t}),o.$set(w),d.ctx=t,k&4&&s!==(s=J(t[2]))&&I(s,d)||re(d,t,k),k&4){h=M(t[2].asm);let b;for(b=0;b<h.length;b+=1){const R=Re(t,h,b);p[b]?(p[b].p(R,k),S(p[b],1)):(p[b]=He(R),p[b].c(),S(p[b],1),p[b].m(a.parentNode,a))}for(Q(),b=h.length;b<p.length;b+=1)v(b);ee()}},i(g){if(!f){S(o.$$.fragment,g);for(let k=0;k<h.length;k+=1)S(p[k]);f=!0}},o(g){A(o.$$.fragment,g),p=p.filter(Boolean);for(let k=0;k<p.length;k+=1)A(p[k]);f=!1},d(g){g&&(j(e),j(r),j(c),j(i),j(u),j(a)),ce(o),d.block.d(g),d.token=null,d=null,x(p,g)}}}function Lt(t){let e,n=M(t[0]),l=[];for(let r=0;r<n.length;r+=1)l[r]=Ye(Ue(t,n,r));return{c(){e=E("div");for(let r=0;r<l.length;r+=1)l[r].c();_(e,"display","flex"),_(e,"flex-wrap","wrap"),_(e,"width","98vw"),_(e,"margin","2vw"),_(e,"justify-content","center")},m(r,c){P(r,e,c);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p(r,c){if(c&1){n=M(r[0]);let o;for(o=0;o<n.length;o+=1){const i=Ue(r,n,o);l[o]?l[o].p(i,c):(l[o]=Ye(i),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},i:N,o:N,d(r){r&&j(e),x(l,r)}}}function qe(t){let e,n,l;return{c(){e=E("img"),q(e.src,n=U+"/"+t[2].name+"/"+t[20])||z(e,"src",n),z(e,"alt",l=t[20]),z(e,"class","svelte-6grdft")},m(r,c){P(r,e,c)},p(r,c){c&4&&!q(e.src,n=U+"/"+r[2].name+"/"+r[20])&&z(e,"src",n),c&4&&l!==(l=r[20])&&z(e,"alt",l)},d(r){r&&j(e)}}}function Wt(t){return{c:N,m:N,p:N,i:N,o:N,d:N}}function St(t){let e,n,l=t[12].split(".")[0]+"",r,c,o,i;return o=new Ge({props:{asm:t[15],bgsize:Math.min(window.innerWidth*.67,600)}}),{c(){e=E("p"),n=T("ex:"),r=T(l),c=W(),de(o.$$.fragment)},m(s,u){P(s,e,u),C(e,n),C(e,r),P(s,c,u),oe(o,s,u),i=!0},p(s,u){(!i||u&4)&&l!==(l=s[12].split(".")[0]+"")&&Y(r,l);const a={};u&4&&(a.asm=s[15]),o.$set(a)},i(s){i||(S(o.$$.fragment,s),i=!0)},o(s){A(o.$$.fragment,s),i=!1},d(s){s&&(j(e),j(c)),ce(o,s)}}}function Bt(t){let e;return{c(){e=T("fetch ...")},m(n,l){P(n,e,l)},p:N,i:N,o:N,d(n){n&&j(e)}}}function xe(t){let e,n,l,r,c={ctx:t,current:null,token:null,hasCatch:!1,pending:Bt,then:St,catch:Wt,value:15,blocks:[,,,]};return I(n=ae(t[2],t[12]),c),{c(){e=E("div"),c.block.c(),l=W(),_(e,"width","100%"),_(e,"margin","5px")},m(o,i){P(o,e,i),c.block.m(e,c.anchor=null),c.mount=()=>e,c.anchor=l,C(e,l),r=!0},p(o,i){t=o,c.ctx=t,i&4&&n!==(n=ae(t[2],t[12]))&&I(n,c)||re(c,t,i)},i(o){r||(S(c.block),r=!0)},o(o){for(let i=0;i<3;i+=1){const s=c.blocks[i];A(s)}r=!1},d(o){o&&j(e),c.block.d(),c.token=null,c=null}}}function Mt(t){return{c:N,m:N,p:N,d:N}}function At(t){let e,n=M(t[16].split(`
`)),l=[];for(let r=0;r<n.length;r+=1)l[r]=Ie(Be(t,n,r));return{c(){e=E("div");for(let r=0;r<l.length;r+=1)l[r].c();z(e,"class","desc_landscape svelte-6grdft")},m(r,c){P(r,e,c);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p(r,c){if(c&4){n=M(r[16].split(`
`));let o;for(o=0;o<n.length;o+=1){const i=Be(r,n,o);l[o]?l[o].p(i,c):(l[o]=Ie(i),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(r){r&&j(e),x(l,r)}}}function Ie(t){let e,n=t[17]+"",l;return{c(){e=E("p"),l=T(n),z(e,"class","svelte-6grdft")},m(r,c){P(r,e,c),C(e,l)},p(r,c){c&4&&n!==(n=r[17]+"")&&Y(l,n)},d(r){r&&j(e)}}}function Rt(t){let e;return{c(){e=T("fetch ...")},m(n,l){P(n,e,l)},p:N,d(n){n&&j(e)}}}function De(t){let e,n,l,r;return{c(){e=E("div"),n=E("img"),q(n.src,l=U+"/"+t[2].name+"/"+t[20])||z(n,"src",l),z(n,"alt",r=t[20]),z(n,"class","svelte-6grdft"),_(e,"place-items","center")},m(c,o){P(c,e,o),C(e,n)},p(c,o){o&4&&!q(n.src,l=U+"/"+c[2].name+"/"+c[20])&&z(n,"src",l),o&4&&r!==(r=c[20])&&z(n,"alt",r)},d(c){c&&j(e)}}}function Tt(t){let e,n,l,r,c,o=M(t[2].pngs),i=[];for(let s=0;s<o.length;s+=1)i[s]=De(Xe(t,o,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=W(),n=E("div"),l=E("video"),r=E("source"),z(r,"type","video/mp4"),q(r.src,c=U+"/"+t[2].name+"/"+t[2].mp4)||z(r,"src",c),z(l,"height","auto"),l.controls=!0,_(l,"width","100%"),_(l,"height","100%"),_(n,"place-items","center")},m(s,u){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(s,u);P(s,e,u),P(s,n,u),C(n,l),C(l,r)},p(s,u){if(u&4){o=M(s[2].pngs);let a;for(a=0;a<o.length;a+=1){const f=Xe(s,o,a);i[a]?i[a].p(f,u):(i[a]=De(f),i[a].c(),i[a].m(e.parentNode,e))}for(;a<i.length;a+=1)i[a].d(1);i.length=o.length}u&4&&!q(r.src,c=U+"/"+s[2].name+"/"+s[2].mp4)&&z(r,"src",c)},d(s){s&&(j(e),j(n)),x(i,s)}}}function Xt(t){return{c:N,m:N,p:N,d:N}}function Ut(t){let e,n=M(t[16].split(`
`)),l=[];for(let r=0;r<n.length;r+=1)l[r]=Fe(Te(t,n,r));return{c(){e=E("div");for(let r=0;r<l.length;r+=1)l[r].c();z(e,"class","desc svelte-6grdft")},m(r,c){P(r,e,c);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p(r,c){if(c&4){n=M(r[16].split(`
`));let o;for(o=0;o<n.length;o+=1){const i=Te(r,n,o);l[o]?l[o].p(i,c):(l[o]=Fe(i),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(r){r&&j(e),x(l,r)}}}function Fe(t){let e,n=t[17]+"",l;return{c(){e=E("p"),l=T(n),z(e,"class","svelte-6grdft")},m(r,c){P(r,e,c),C(e,l)},p(r,c){c&4&&n!==(n=r[17]+"")&&Y(l,n)},d(r){r&&j(e)}}}function qt(t){let e;return{c(){e=T("fetch ...")},m(n,l){P(n,e,l)},p:N,d(n){n&&j(e)}}}function xt(t){return{c:N,m:N,p:N,i:N,o:N,d:N}}function It(t){let e,n,l=t[12].split(".")[0]+"",r,c,o,i;return o=new Ge({props:{bgsize:window.innerWidth*.96-20,asm:t[15]}}),{c(){e=E("p"),n=T("ex: "),r=T(l),c=W(),de(o.$$.fragment)},m(s,u){P(s,e,u),C(e,n),C(e,r),P(s,c,u),oe(o,s,u),i=!0},p(s,u){(!i||u&4)&&l!==(l=s[12].split(".")[0]+"")&&Y(r,l);const a={};u&4&&(a.asm=s[15]),o.$set(a)},i(s){i||(S(o.$$.fragment,s),i=!0)},o(s){A(o.$$.fragment,s),i=!1},d(s){s&&(j(e),j(c)),ce(o,s)}}}function Dt(t){let e;return{c(){e=T("fetch ...")},m(n,l){P(n,e,l)},p:N,i:N,o:N,d(n){n&&j(e)}}}function He(t){let e,n,l,r,c={ctx:t,current:null,token:null,hasCatch:!1,pending:Dt,then:It,catch:xt,value:15,blocks:[,,,]};return I(n=ae(t[2],t[12]),c),{c(){e=E("div"),c.block.c(),l=W(),_(e,"margin","10px")},m(o,i){P(o,e,i),c.block.m(e,c.anchor=null),c.mount=()=>e,c.anchor=l,C(e,l),r=!0},p(o,i){t=o,c.ctx=t,i&4&&n!==(n=ae(t[2],t[12]))&&I(n,c)||re(c,t,i)},i(o){r||(S(c.block),r=!0)},o(o){for(let i=0;i<3;i+=1){const s=c.blocks[i];A(s)}r=!1},d(o){o&&j(e),c.block.d(),c.token=null,c=null}}}function Ft(t){return{c:N,m:N,p:N,d:N}}function Ht(t){let e=t[11].split(`
`)[0]+"",n;return{c(){n=T(e)},m(l,r){P(l,n,r)},p(l,r){r&1&&e!==(e=l[11].split(`
`)[0]+"")&&Y(n,e)},d(l){l&&j(n)}}}function Yt(t){let e;return{c(){e=T("fetch ...")},m(n,l){P(n,e,l)},p:N,d(n){n&&j(e)}}}function Ye(t){let e,n,l,r,c,o,i,s,u;function a(...d){return t[7](t[8],...d)}let f={ctx:t,current:null,token:null,hasCatch:!1,pending:Yt,then:Ht,catch:Ft,value:11};return I(o=J(t[8]),f),{c(){e=E("div"),n=E("img"),c=W(),f.block.c(),i=W(),q(n.src,l=U+"/"+t[8].name+"/"+t[8].pngs[0])||z(n,"src",l),z(n,"alt",r=t[8].pngs[0]),z(n,"class","svelte-6grdft"),z(e,"class","prod svelte-6grdft")},m(d,h){P(d,e,h),C(e,n),C(e,c),f.block.m(e,f.anchor=null),f.mount=()=>e,f.anchor=i,C(e,i),s||(u=B(n,"click",a),s=!0)},p(d,h){t=d,h&1&&!q(n.src,l=U+"/"+t[8].name+"/"+t[8].pngs[0])&&z(n,"src",l),h&1&&r!==(r=t[8].pngs[0])&&z(n,"alt",r),f.ctx=t,h&1&&o!==(o=J(t[8]))&&I(o,f)||re(f,t,h)},d(d){d&&j(e),f.block.d(),f.token=null,f=null,s=!1,u()}}}function Zt(t){let e,n,l,r,c,o,i,s,u,a,f,d,h,p;const v=[Lt,Ot,Nt],g=[];function k(w,b){return w[2]?w[1]==="portrait"?1:2:0}return u=k(t),a=g[u]=v[u](t),{c(){e=E("div"),n=E("div"),n.textContent="🏠",l=W(),r=E("img"),o=W(),i=E("div"),i.textContent="🛍️",s=W(),a.c(),f=Ke(),z(n,"class","svelte-6grdft"),q(r.src,c="./logo.avif")||z(r,"src",c),z(r,"alt","logo"),z(r,"class","svelte-6grdft"),z(i,"class","svelte-6grdft"),z(e,"class","title svelte-6grdft")},m(w,b){P(w,e,b),C(e,n),C(e,l),C(e,r),C(e,o),C(e,i),P(w,s,b),g[u].m(w,b),P(w,f,b),d=!0,h||(p=[B(n,"click",t[4]),B(r,"click",t[5]),B(i,"click",t[6])],h=!0)},p(w,[b]){let R=u;u=k(w),u===R?g[u].p(w,b):(Q(),A(g[R],1,1,()=>{g[R]=null}),ee(),a=g[u],a?a.p(w,b):(a=g[u]=v[u](w),a.c()),S(a,1),a.m(f.parentNode,f))},i(w){d||(S(a),d=!0)},o(w){A(a),d=!1},d(w){w&&(j(e),j(s),j(f)),g[u].d(w),h=!1,H(p)}}}let U="./prods";async function J(t){return fetch(`${U}/${t.name}/${t.txt}`).then(e=>e.text())}async function ae(t,e){return fetch(`${U}/${t.name}/${e}`).then(n=>n.text())}function Jt(t,e,n){let l=[],r="portrait",c=null,o="https://shop.coffreedom.io/";return window.innerHeight<window.innerWidth&&(r="landscape"),fetch(`${U}/prods.ls`).then(f=>f.text()).then(f=>f.split(`

`).map(d=>d.split(`
`).filter(h=>h!==""))).then(async f=>{f.forEach(v=>{let g=v[0].split("/:")[0],k=v.filter(O=>O.endsWith(".json")),w=v.filter(O=>O.endsWith(".png")),b=v.filter(O=>O.endsWith(".mov"))[0],R=v.filter(O=>O.endsWith(".txt"))[0];v.shift(),n(0,l=[...l,{name:g,pngs:w,mp4:b,txt:R,asm:k}])});const d=new URLSearchParams(window.location.search);let p=Object.fromEntries(d.entries()).prod||"";if(p){n(2,c=l.filter(g=>g.name===p)[0]);let v=await J(c);n(3,o+=`products/${v.split(`
`)[0]}`)}}),[l,r,c,o,f=>{window.location.href="https://coffreedom.io"},f=>{window.location.href=window.location.href.split("?")[0]},f=>{window.location.href=o},(f,d)=>{window.location.href=`${window.location.href.split("?")[0]}?prod=${f.name}`}]}class Kt extends _e{constructor(e){super(),he(this,e,Jt,Zt,le,{})}}new Kt({target:document.getElementById("app")});
