(()=>{var Ie=Object.create;var te=Object.defineProperty;var $e=Object.getOwnPropertyDescriptor;var Be=Object.getOwnPropertyNames;var We=Object.getPrototypeOf,je=Object.prototype.hasOwnProperty;var Ve=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var qe=(e,r,n,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Be(r))!je.call(e,i)&&i!==n&&te(e,i,{get:()=>r[i],enumerable:!(s=$e(r,i))||s.enumerable});return e};var Ge=(e,r,n)=>(n=e!=null?Ie(We(e)):{},qe(r||!e||!e.__esModule?te(n,"default",{value:e,enumerable:!0}):n,e));var Re=Ve((re,He)=>{(function(e,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof re<"u")r(He);else{var n={exports:{}};r(n),e.browser=n.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:re,function(e){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",n=s=>{let i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(l,A=void 0){super(A),this.createItem=l}get(l){return this.has(l)||this.set(l,this.createItem(l)),super.get(l)}}let g=_=>_&&typeof _=="object"&&typeof _.then=="function",u=(_,l)=>(...A)=>{s.runtime.lastError?_.reject(new Error(s.runtime.lastError.message)):l.singleCallbackArg||A.length<=1&&l.singleCallbackArg!==!1?_.resolve(A[0]):_.resolve(A)},f=_=>_==1?"argument":"arguments",b=(_,l)=>function(h,...x){if(x.length<l.minArgs)throw new Error(`Expected at least ${l.minArgs} ${f(l.minArgs)} for ${_}(), got ${x.length}`);if(x.length>l.maxArgs)throw new Error(`Expected at most ${l.maxArgs} ${f(l.maxArgs)} for ${_}(), got ${x.length}`);return new Promise((w,P)=>{if(l.fallbackToNoCallback)try{h[_](...x,u({resolve:w,reject:P},l))}catch(p){console.warn(`${_} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,p),h[_](...x),l.fallbackToNoCallback=!1,l.noCallback=!0,w()}else l.noCallback?(h[_](...x),w()):h[_](...x,u({resolve:w,reject:P},l))})},t=(_,l,A)=>new Proxy(l,{apply(h,x,w){return A.call(x,_,...w)}}),v=Function.call.bind(Object.prototype.hasOwnProperty),c=(_,l={},A={})=>{let h=Object.create(null),x={has(P,p){return p in _||p in h},get(P,p,M){if(p in h)return h[p];if(!(p in _))return;let E=_[p];if(typeof E=="function")if(typeof l[p]=="function")E=t(_,_[p],l[p]);else if(v(A,p)){let D=b(p,A[p]);E=t(_,_[p],D)}else E=E.bind(_);else if(typeof E=="object"&&E!==null&&(v(l,p)||v(A,p)))E=c(E,l[p],A[p]);else if(v(A,"*"))E=c(E,l[p],A["*"]);else return Object.defineProperty(h,p,{configurable:!0,enumerable:!0,get(){return _[p]},set(D){_[p]=D}}),E;return h[p]=E,E},set(P,p,M,E){return p in h?h[p]=M:_[p]=M,!0},defineProperty(P,p,M){return Reflect.defineProperty(h,p,M)},deleteProperty(P,p){return Reflect.deleteProperty(h,p)}},w=Object.create(_);return new Proxy(w,x)},a=_=>({addListener(l,A,...h){l.addListener(_.get(A),...h)},hasListener(l,A){return l.hasListener(_.get(A))},removeListener(l,A){l.removeListener(_.get(A))}}),d=new o(_=>typeof _!="function"?_:function(A){let h=c(A,{},{getContent:{minArgs:0,maxArgs:0}});_(h)}),F=new o(_=>typeof _!="function"?_:function(A,h,x){let w=!1,P,p=new Promise(U=>{P=function(N){w=!0,U(N)}}),M;try{M=_(A,h,P)}catch(U){M=Promise.reject(U)}let E=M!==!0&&g(M);if(M!==!0&&!E&&!w)return!1;let D=U=>{U.then(N=>{x(N)},N=>{let J;N&&(N instanceof Error||typeof N.message=="string")?J=N.message:J="An unexpected error occurred",x({__mozWebExtensionPolyfillReject__:!0,message:J})}).catch(N=>{console.error("Failed to send onMessage rejected reply",N)})};return D(E?M:p),!0}),y=({reject:_,resolve:l},A)=>{s.runtime.lastError?s.runtime.lastError.message===r?l():_(new Error(s.runtime.lastError.message)):A&&A.__mozWebExtensionPolyfillReject__?_(new Error(A.message)):l(A)},C=(_,l,A,...h)=>{if(h.length<l.minArgs)throw new Error(`Expected at least ${l.minArgs} ${f(l.minArgs)} for ${_}(), got ${h.length}`);if(h.length>l.maxArgs)throw new Error(`Expected at most ${l.maxArgs} ${f(l.maxArgs)} for ${_}(), got ${h.length}`);return new Promise((x,w)=>{let P=y.bind(null,{resolve:x,reject:w});h.push(P),A.sendMessage(...h)})},T={devtools:{network:{onRequestFinished:a(d)}},runtime:{onMessage:a(F),onMessageExternal:a(F),sendMessage:C.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:C.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},H={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":H},services:{"*":H},websites:{"*":H}},c(s,T,i)};e.exports=n(chrome)}else e.exports=globalThis.browser})});var q,m,le,ze,L,se,Ze,W={},ge=[],Ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function R(e,r){for(var n in r)e[n]=r[n];return e}function me(e){var r=e.parentNode;r&&r.removeChild(e)}function Je(e,r,n){var s,i,o,g={};for(o in r)o=="key"?s=r[o]:o=="ref"?i=r[o]:g[o]=r[o];if(arguments.length>2&&(g.children=arguments.length>3?q.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)g[o]===void 0&&(g[o]=e.defaultProps[o]);return $(e,g,s,i,null)}function $(e,r,n,s,i){var o={type:e,props:r,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++le};return i==null&&m.vnode!=null&&m.vnode(o),o}function I(e){return e.children}function B(e,r){this.props=e,this.context=r}function O(e,r){if(r==null)return e.__?O(e.__,e.__.__k.indexOf(e)+1):null;for(var n;r<e.__k.length;r++)if((n=e.__k[r])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?O(e):null}function ce(e){var r,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,r=0;r<e.__k.length;r++)if((n=e.__k[r])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ce(e)}}function oe(e){(!e.__d&&(e.__d=!0)&&L.push(e)&&!j.__r++||se!==m.debounceRendering)&&((se=m.debounceRendering)||setTimeout)(j)}function j(){for(var e;j.__r=L.length;)e=L.sort(function(r,n){return r.__v.__b-n.__v.__b}),L=[],e.some(function(r){var n,s,i,o,g,u;r.__d&&(g=(o=(n=r).__v).__e,(u=n.__P)&&(s=[],(i=R({},o)).__v=o.__v+1,Q(u,o,i,n.__n,u.ownerSVGElement!==void 0,o.__h!=null?[g]:null,s,g??O(o),o.__h),de(s,o),o.__e!=g&&ce(o)))})}function ue(e,r,n,s,i,o,g,u,f,b){var t,v,c,a,d,F,y,C=s&&s.__k||ge,T=C.length;for(n.__k=[],t=0;t<r.length;t++)if((a=n.__k[t]=(a=r[t])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?$(null,a,null,null,a):Array.isArray(a)?$(I,{children:a},null,null,null):a.__b>0?$(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(c=C[t])===null||c&&a.key==c.key&&a.type===c.type)C[t]=void 0;else for(v=0;v<T;v++){if((c=C[v])&&a.key==c.key&&a.type===c.type){C[v]=void 0;break}c=null}Q(e,a,c=c||W,i,o,g,u,f,b),d=a.__e,(v=a.ref)&&c.ref!=v&&(y||(y=[]),c.ref&&y.push(c.ref,null,a),y.push(v,a.__c||d,a)),d!=null?(F==null&&(F=d),typeof a.type=="function"&&a.__k===c.__k?a.__d=f=fe(a,f,e):f=Ae(e,a,c,C,d,f),typeof n.type=="function"&&(n.__d=f)):f&&c.__e==f&&f.parentNode!=e&&(f=O(c))}for(n.__e=F,t=T;t--;)C[t]!=null&&he(C[t],C[t]);if(y)for(t=0;t<y.length;t++)pe(y[t],y[++t],y[++t])}function fe(e,r,n){for(var s,i=e.__k,o=0;i&&o<i.length;o++)(s=i[o])&&(s.__=e,r=typeof s.type=="function"?fe(s,r,n):Ae(n,s,s,i,s.__e,r));return r}function Ae(e,r,n,s,i,o){var g,u,f;if(r.__d!==void 0)g=r.__d,r.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),g=null;else{for(u=o,f=0;(u=u.nextSibling)&&f<s.length;f+=1)if(u==i)break e;e.insertBefore(i,o),g=o}return g!==void 0?g:i.nextSibling}function Qe(e,r,n,s,i){var o;for(o in n)o==="children"||o==="key"||o in r||V(e,o,null,n[o],s);for(o in r)i&&typeof r[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===r[o]||V(e,o,r[o],n[o],s)}function ie(e,r,n){r[0]==="-"?e.setProperty(r,n):e[r]=n==null?"":typeof n!="number"||Ke.test(r)?n:n+"px"}function V(e,r,n,s,i){var o;e:if(r==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(r in s)n&&r in n||ie(e.style,r,"");if(n)for(r in n)s&&n[r]===s[r]||ie(e.style,r,n[r])}else if(r[0]==="o"&&r[1]==="n")o=r!==(r=r.replace(/Capture$/,"")),r=r.toLowerCase()in e?r.toLowerCase().slice(2):r.slice(2),e.l||(e.l={}),e.l[r+o]=n,n?s||e.addEventListener(r,o?ae:_e,o):e.removeEventListener(r,o?ae:_e,o);else if(r!=="dangerouslySetInnerHTML"){if(i)r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!=="href"&&r!=="list"&&r!=="form"&&r!=="tabIndex"&&r!=="download"&&r in e)try{e[r]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&r.indexOf("-")==-1?e.removeAttribute(r):e.setAttribute(r,n))}}function _e(e){this.l[e.type+!1](m.event?m.event(e):e)}function ae(e){this.l[e.type+!0](m.event?m.event(e):e)}function Q(e,r,n,s,i,o,g,u,f){var b,t,v,c,a,d,F,y,C,T,H,_,l,A,h,x=r.type;if(r.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,u=r.__e=n.__e,r.__h=null,o=[u]),(b=m.__b)&&b(r);try{e:if(typeof x=="function"){if(y=r.props,C=(b=x.contextType)&&s[b.__c],T=b?C?C.props.value:b.__:s,n.__c?F=(t=r.__c=n.__c).__=t.__E:("prototype"in x&&x.prototype.render?r.__c=t=new x(y,T):(r.__c=t=new B(y,T),t.constructor=x,t.render=Ye),C&&C.sub(t),t.props=y,t.state||(t.state={}),t.context=T,t.__n=s,v=t.__d=!0,t.__h=[],t._sb=[]),t.__s==null&&(t.__s=t.state),x.getDerivedStateFromProps!=null&&(t.__s==t.state&&(t.__s=R({},t.__s)),R(t.__s,x.getDerivedStateFromProps(y,t.__s))),c=t.props,a=t.state,v)x.getDerivedStateFromProps==null&&t.componentWillMount!=null&&t.componentWillMount(),t.componentDidMount!=null&&t.__h.push(t.componentDidMount);else{if(x.getDerivedStateFromProps==null&&y!==c&&t.componentWillReceiveProps!=null&&t.componentWillReceiveProps(y,T),!t.__e&&t.shouldComponentUpdate!=null&&t.shouldComponentUpdate(y,t.__s,T)===!1||r.__v===n.__v){for(t.props=y,t.state=t.__s,r.__v!==n.__v&&(t.__d=!1),t.__v=r,r.__e=n.__e,r.__k=n.__k,r.__k.forEach(function(w){w&&(w.__=r)}),H=0;H<t._sb.length;H++)t.__h.push(t._sb[H]);t._sb=[],t.__h.length&&g.push(t);break e}t.componentWillUpdate!=null&&t.componentWillUpdate(y,t.__s,T),t.componentDidUpdate!=null&&t.__h.push(function(){t.componentDidUpdate(c,a,d)})}if(t.context=T,t.props=y,t.__v=r,t.__P=e,_=m.__r,l=0,"prototype"in x&&x.prototype.render){for(t.state=t.__s,t.__d=!1,_&&_(r),b=t.render(t.props,t.state,t.context),A=0;A<t._sb.length;A++)t.__h.push(t._sb[A]);t._sb=[]}else do t.__d=!1,_&&_(r),b=t.render(t.props,t.state,t.context),t.state=t.__s;while(t.__d&&++l<25);t.state=t.__s,t.getChildContext!=null&&(s=R(R({},s),t.getChildContext())),v||t.getSnapshotBeforeUpdate==null||(d=t.getSnapshotBeforeUpdate(c,a)),h=b!=null&&b.type===I&&b.key==null?b.props.children:b,ue(e,Array.isArray(h)?h:[h],r,n,s,i,o,g,u,f),t.base=r.__e,r.__h=null,t.__h.length&&g.push(t),F&&(t.__E=t.__=null),t.__e=!1}else o==null&&r.__v===n.__v?(r.__k=n.__k,r.__e=n.__e):r.__e=Xe(n.__e,r,n,s,i,o,g,f);(b=m.diffed)&&b(r)}catch(w){r.__v=null,(f||o!=null)&&(r.__e=u,r.__h=!!f,o[o.indexOf(u)]=null),m.__e(w,r,n)}}function de(e,r){m.__c&&m.__c(r,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(s){s.call(n)})}catch(s){m.__e(s,n.__v)}})}function Xe(e,r,n,s,i,o,g,u){var f,b,t,v=n.props,c=r.props,a=r.type,d=0;if(a==="svg"&&(i=!0),o!=null){for(;d<o.length;d++)if((f=o[d])&&"setAttribute"in f==!!a&&(a?f.localName===a:f.nodeType===3)){e=f,o[d]=null;break}}if(e==null){if(a===null)return document.createTextNode(c);e=i?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,c.is&&c),o=null,u=!1}if(a===null)v===c||u&&e.data===c||(e.data=c);else{if(o=o&&q.call(e.childNodes),b=(v=n.props||W).dangerouslySetInnerHTML,t=c.dangerouslySetInnerHTML,!u){if(o!=null)for(v={},d=0;d<e.attributes.length;d++)v[e.attributes[d].name]=e.attributes[d].value;(t||b)&&(t&&(b&&t.__html==b.__html||t.__html===e.innerHTML)||(e.innerHTML=t&&t.__html||""))}if(Qe(e,c,v,i,u),t)r.__k=[];else if(d=r.props.children,ue(e,Array.isArray(d)?d:[d],r,n,s,i&&a!=="foreignObject",o,g,o?o[0]:n.__k&&O(n,0),u),o!=null)for(d=o.length;d--;)o[d]!=null&&me(o[d]);u||("value"in c&&(d=c.value)!==void 0&&(d!==e.value||a==="progress"&&!d||a==="option"&&d!==v.value)&&V(e,"value",d,v.value,!1),"checked"in c&&(d=c.checked)!==void 0&&d!==e.checked&&V(e,"checked",d,v.checked,!1))}return e}function pe(e,r,n){try{typeof e=="function"?e(r):e.current=r}catch(s){m.__e(s,n)}}function he(e,r,n){var s,i;if(m.unmount&&m.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||pe(s,null,r)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(o){m.__e(o,r)}s.base=s.__P=null,e.__c=void 0}if(s=e.__k)for(i=0;i<s.length;i++)s[i]&&he(s[i],r,n||typeof e.type!="function");n||e.__e==null||me(e.__e),e.__=e.__e=e.__d=void 0}function Ye(e,r,n){return this.constructor(e,n)}function xe(e,r,n){var s,i,o;m.__&&m.__(e,r),i=(s=typeof n=="function")?null:n&&n.__k||r.__k,o=[],Q(r,e=(!s&&n||r).__k=Je(I,null,[e]),i||W,W,r.ownerSVGElement!==void 0,!s&&n?[n]:i?null:r.firstChild?q.call(r.childNodes):null,o,!s&&n?n:i?i.__e:r.firstChild,s),de(o,e)}q=ge.slice,m={__e:function(e,r,n,s){for(var i,o,g;r=r.__;)if((i=r.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),g=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,s||{}),g=i.__d),g)return i.__E=i}catch(u){e=u}throw e}},le=0,ze=function(e){return e!=null&&e.constructor===void 0},B.prototype.setState=function(e,r){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=R({},this.state),typeof e=="function"&&(e=e(R({},n),this.props)),e&&R(n,e),e!=null&&this.__v&&(r&&this._sb.push(r),oe(this))},B.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),oe(this))},B.prototype.render=I,L=[],j.__r=0,Ze=0;var K,k,X,ve,Z=0,Te=[],G=[],be=m.__b,ye=m.__r,ke=m.diffed,Ce=m.__c,we=m.unmount;function ee(e,r){m.__h&&m.__h(k,e,Z||r),Z=0;var n=k.__H||(k.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:G}),n.__[e]}function Se(e){return Z=1,er(Fe,e)}function er(e,r,n){var s=ee(K++,2);if(s.t=e,!s.__c&&(s.__=[n?n(r):Fe(void 0,r),function(o){var g=s.__N?s.__N[0]:s.__[0],u=s.t(g,o);g!==u&&(s.__N=[u,s.__[1]],s.__c.setState({}))}],s.__c=k,!k.u)){k.u=!0;var i=k.shouldComponentUpdate;k.shouldComponentUpdate=function(o,g,u){if(!s.__c.__H)return!0;var f=s.__c.__H.__.filter(function(t){return t.__c});if(f.every(function(t){return!t.__N}))return!i||i.call(this,o,g,u);var b=!1;return f.forEach(function(t){if(t.__N){var v=t.__[0];t.__=t.__N,t.__N=void 0,v!==t.__[0]&&(b=!0)}}),!(!b&&s.__c.props===o)&&(!i||i.call(this,o,g,u))}}return s.__N||s.__}function Pe(e,r){var n=ee(K++,3);!m.__s&&Ne(n.__H,r)&&(n.__=e,n.i=r,k.__H.__h.push(n))}function rr(e,r){var n=ee(K++,7);return Ne(n.__H,r)?(n.__V=e(),n.i=r,n.__h=e,n.__V):n.__}function Me(e,r){return Z=8,rr(function(){return e},r)}function nr(){for(var e;e=Te.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(z),e.__H.__h.forEach(Y),e.__H.__h=[]}catch(r){e.__H.__h=[],m.__e(r,e.__v)}}m.__b=function(e){k=null,be&&be(e)},m.__r=function(e){ye&&ye(e),K=0;var r=(k=e.__c).__H;r&&(X===k?(r.__h=[],k.__h=[],r.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=G,n.__N=n.i=void 0})):(r.__h.forEach(z),r.__h.forEach(Y),r.__h=[])),X=k},m.diffed=function(e){ke&&ke(e);var r=e.__c;r&&r.__H&&(r.__H.__h.length&&(Te.push(r)!==1&&ve===m.requestAnimationFrame||((ve=m.requestAnimationFrame)||tr)(nr)),r.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==G&&(n.__=n.__V),n.i=void 0,n.__V=G})),X=k=null},m.__c=function(e,r){r.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(s){return!s.__||Y(s)})}catch(s){r.some(function(i){i.__h&&(i.__h=[])}),r=[],m.__e(s,n.__v)}}),Ce&&Ce(e,r)},m.unmount=function(e){we&&we(e);var r,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(s){try{z(s)}catch(i){r=i}}),n.__H=void 0,r&&m.__e(r,n.__v))};var Ee=typeof requestAnimationFrame=="function";function tr(e){var r,n=function(){clearTimeout(s),Ee&&cancelAnimationFrame(r),setTimeout(e)},s=setTimeout(n,100);Ee&&(r=requestAnimationFrame(n))}function z(e){var r=k,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),k=r}function Y(e){var r=k;e.__c=e.__(),k=r}function Ne(e,r){return!e||e.length!==r.length||r.some(function(n,s){return n!==e[s]})}function Fe(e,r){return typeof r=="function"?r(e):r}var ne=Ge(Re()),De={enabled:"Enabled",disabled:"Disabled"};async function Ue(){return ne.default.storage.local.get(["triggerMode"])}async function Le(e){return ne.default.storage.local.set(e)}var sr=0;function S(e,r,n,s,i){var o,g,u={};for(g in r)g=="ref"?o=r[g]:u[g]=r[g];var f={type:e,props:u,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--sr,__source:i,__self:s};if(typeof e=="function"&&(o=e.defaultProps))for(g in o)u[g]===void 0&&(u[g]=o[g]);return m.vnode&&m.vnode(f),f}function or(){let[e,r]=Se();Pe(()=>{Ue().then(s=>{r(s.triggerMode||"enabled")})},[]);let n=Me(s=>{let i=s.target.value;r(i),Le({triggerMode:i})},[]);return S("div",{className:"container",children:[S("form",{children:S("fieldset",{onChange:n,children:[S("legend",{children:"Stellar AI Mode"}),Object.entries(De).map(([s,i])=>S("label",{htmlFor:s,children:[S("input",{type:"radio",id:s,name:"triggerMode",value:s,checked:e===s}),i]},s))]})}),S("div",{className:"footer",children:[S("p",{children:"Stellar AI is a tool that uses Artificial Intelligence to help you get summaries of articles you read and searches you do on the web."}),S("p",{children:"Developed and maintained by Ahmed Allam. For any inquiries, email me at ahmedeallam@aucegypt.edu."})]})]})}var Oe=or;xe(S(Oe,{}),document.getElementById("app"));})();
