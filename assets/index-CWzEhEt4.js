(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=i(s);fetch(s.href,u)}})();var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ac={exports:{}},Qi={};var Kh;function Ky(){if(Kh)return Qi;Kh=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(o,s,u){var d=null;if(u!==void 0&&(d=""+u),s.key!==void 0&&(d=""+s.key),"key"in s){u={};for(var f in s)f!=="key"&&(u[f]=s[f])}else u=s;return s=u.ref,{$$typeof:t,type:o,key:d,ref:s!==void 0?s:null,props:u}}return Qi.Fragment=r,Qi.jsx=i,Qi.jsxs=i,Qi}var Jh;function Jy(){return Jh||(Jh=1,Ac.exports=Ky()),Ac.exports}var fe=Jy(),Ec={exports:{}},Re={};var Wh;function Wy(){if(Wh)return Re;Wh=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function b(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,N={};function _(A,M,T){this.props=A,this.context=M,this.refs=N,this.updater=T||C}_.prototype.isReactComponent={},_.prototype.setState=function(A,M){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,M,"setState")},_.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function z(){}z.prototype=_.prototype;function O(A,M,T){this.props=A,this.context=M,this.refs=N,this.updater=T||C}var U=O.prototype=new z;U.constructor=O,k(U,_.prototype),U.isPureReactComponent=!0;var R=Array.isArray;function B(){}var q={H:null,A:null,T:null,S:null},ae=Object.prototype.hasOwnProperty;function G(A,M,T){var ne=T.ref;return{$$typeof:t,type:A,key:M,ref:ne!==void 0?ne:null,props:T}}function te(A,M){return G(A.type,M,A.props)}function ue(A){return typeof A=="object"&&A!==null&&A.$$typeof===t}function j(A){var M={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(T){return M[T]})}var J=/\/+/g;function S(A,M){return typeof A=="object"&&A!==null&&A.key!=null?j(""+A.key):M.toString(36)}function H(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(B,B):(A.status="pending",A.then(function(M){A.status==="pending"&&(A.status="fulfilled",A.value=M)},function(M){A.status==="pending"&&(A.status="rejected",A.reason=M)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function F(A,M,T,ne,oe){var _e=typeof A;(_e==="undefined"||_e==="boolean")&&(A=null);var $e=!1;if(A===null)$e=!0;else switch(_e){case"bigint":case"string":case"number":$e=!0;break;case"object":switch(A.$$typeof){case t:case r:$e=!0;break;case v:return $e=A._init,F($e(A._payload),M,T,ne,oe)}}if($e)return oe=oe(A),$e=ne===""?"."+S(A,0):ne,R(oe)?(T="",$e!=null&&(T=$e.replace(J,"$&/")+"/"),F(oe,M,T,"",function(Ke){return Ke})):oe!=null&&(ue(oe)&&(oe=te(oe,T+(oe.key==null||A&&A.key===oe.key?"":(""+oe.key).replace(J,"$&/")+"/")+$e)),M.push(oe)),1;$e=0;var Ne=ne===""?".":ne+":";if(R(A))for(var Te=0;Te<A.length;Te++)ne=A[Te],_e=Ne+S(ne,Te),$e+=F(ne,M,T,_e,oe);else if(Te=b(A),typeof Te=="function")for(A=Te.call(A),Te=0;!(ne=A.next()).done;)ne=ne.value,_e=Ne+S(ne,Te++),$e+=F(ne,M,T,_e,oe);else if(_e==="object"){if(typeof A.then=="function")return F(H(A),M,T,ne,oe);throw M=String(A),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return $e}function Y(A,M,T){if(A==null)return A;var ne=[],oe=0;return F(A,ne,"","",function(_e){return M.call(T,_e,oe++)}),ne}function be(A){if(A._status===-1){var M=A._result;M=M(),M.then(function(T){(A._status===0||A._status===-1)&&(A._status=1,A._result=T)},function(T){(A._status===0||A._status===-1)&&(A._status=2,A._result=T)}),A._status===-1&&(A._status=0,A._result=M)}if(A._status===1)return A._result.default;throw A._result}var le=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},$={map:Y,forEach:function(A,M,T){Y(A,function(){M.apply(this,arguments)},T)},count:function(A){var M=0;return Y(A,function(){M++}),M},toArray:function(A){return Y(A,function(M){return M})||[]},only:function(A){if(!ue(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return Re.Activity=g,Re.Children=$,Re.Component=_,Re.Fragment=i,Re.Profiler=s,Re.PureComponent=O,Re.StrictMode=o,Re.Suspense=m,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,Re.__COMPILER_RUNTIME={__proto__:null,c:function(A){return q.H.useMemoCache(A)}},Re.cache=function(A){return function(){return A.apply(null,arguments)}},Re.cacheSignal=function(){return null},Re.cloneElement=function(A,M,T){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var ne=k({},A.props),oe=A.key;if(M!=null)for(_e in M.key!==void 0&&(oe=""+M.key),M)!ae.call(M,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&M.ref===void 0||(ne[_e]=M[_e]);var _e=arguments.length-2;if(_e===1)ne.children=T;else if(1<_e){for(var $e=Array(_e),Ne=0;Ne<_e;Ne++)$e[Ne]=arguments[Ne+2];ne.children=$e}return G(A.type,oe,ne)},Re.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},Re.createElement=function(A,M,T){var ne,oe={},_e=null;if(M!=null)for(ne in M.key!==void 0&&(_e=""+M.key),M)ae.call(M,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(oe[ne]=M[ne]);var $e=arguments.length-2;if($e===1)oe.children=T;else if(1<$e){for(var Ne=Array($e),Te=0;Te<$e;Te++)Ne[Te]=arguments[Te+2];oe.children=Ne}if(A&&A.defaultProps)for(ne in $e=A.defaultProps,$e)oe[ne]===void 0&&(oe[ne]=$e[ne]);return G(A,_e,oe)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(A){return{$$typeof:f,render:A}},Re.isValidElement=ue,Re.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:be}},Re.memo=function(A,M){return{$$typeof:h,type:A,compare:M===void 0?null:M}},Re.startTransition=function(A){var M=q.T,T={};q.T=T;try{var ne=A(),oe=q.S;oe!==null&&oe(T,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(B,le)}catch(_e){le(_e)}finally{M!==null&&T.types!==null&&(M.types=T.types),q.T=M}},Re.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},Re.use=function(A){return q.H.use(A)},Re.useActionState=function(A,M,T){return q.H.useActionState(A,M,T)},Re.useCallback=function(A,M){return q.H.useCallback(A,M)},Re.useContext=function(A){return q.H.useContext(A)},Re.useDebugValue=function(){},Re.useDeferredValue=function(A,M){return q.H.useDeferredValue(A,M)},Re.useEffect=function(A,M){return q.H.useEffect(A,M)},Re.useEffectEvent=function(A){return q.H.useEffectEvent(A)},Re.useId=function(){return q.H.useId()},Re.useImperativeHandle=function(A,M,T){return q.H.useImperativeHandle(A,M,T)},Re.useInsertionEffect=function(A,M){return q.H.useInsertionEffect(A,M)},Re.useLayoutEffect=function(A,M){return q.H.useLayoutEffect(A,M)},Re.useMemo=function(A,M){return q.H.useMemo(A,M)},Re.useOptimistic=function(A,M){return q.H.useOptimistic(A,M)},Re.useReducer=function(A,M,T){return q.H.useReducer(A,M,T)},Re.useRef=function(A){return q.H.useRef(A)},Re.useState=function(A){return q.H.useState(A)},Re.useSyncExternalStore=function(A,M,T){return q.H.useSyncExternalStore(A,M,T)},Re.useTransition=function(){return q.H.useTransition()},Re.version="19.2.4",Re}var eg;function Ed(){return eg||(eg=1,Ec.exports=Wy()),Ec.exports}var Ae=Ed();const Rn=bl(Ae);var Nc={exports:{}},Ki={},Tc={exports:{}},zc={};var tg;function e2(){return tg||(tg=1,(function(t){function r(F,Y){var be=F.length;F.push(Y);e:for(;0<be;){var le=be-1>>>1,$=F[le];if(0<s($,Y))F[le]=Y,F[be]=$,be=le;else break e}}function i(F){return F.length===0?null:F[0]}function o(F){if(F.length===0)return null;var Y=F[0],be=F.pop();if(be!==Y){F[0]=be;e:for(var le=0,$=F.length,A=$>>>1;le<A;){var M=2*(le+1)-1,T=F[M],ne=M+1,oe=F[ne];if(0>s(T,be))ne<$&&0>s(oe,T)?(F[le]=oe,F[ne]=be,le=ne):(F[le]=T,F[M]=be,le=M);else if(ne<$&&0>s(oe,be))F[le]=oe,F[ne]=be,le=ne;else break e}}return Y}function s(F,Y){var be=F.sortIndex-Y.sortIndex;return be!==0?be:F.id-Y.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();t.unstable_now=function(){return d.now()-f}}var m=[],h=[],v=1,g=null,x=3,b=!1,C=!1,k=!1,N=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var Y=i(h);Y!==null;){if(Y.callback===null)o(h);else if(Y.startTime<=F)o(h),Y.sortIndex=Y.expirationTime,r(m,Y);else break;Y=i(h)}}function R(F){if(k=!1,U(F),!C)if(i(m)!==null)C=!0,B||(B=!0,j());else{var Y=i(h);Y!==null&&H(R,Y.startTime-F)}}var B=!1,q=-1,ae=5,G=-1;function te(){return N?!0:!(t.unstable_now()-G<ae)}function ue(){if(N=!1,B){var F=t.unstable_now();G=F;var Y=!0;try{e:{C=!1,k&&(k=!1,z(q),q=-1),b=!0;var be=x;try{t:{for(U(F),g=i(m);g!==null&&!(g.expirationTime>F&&te());){var le=g.callback;if(typeof le=="function"){g.callback=null,x=g.priorityLevel;var $=le(g.expirationTime<=F);if(F=t.unstable_now(),typeof $=="function"){g.callback=$,U(F),Y=!0;break t}g===i(m)&&o(m),U(F)}else o(m);g=i(m)}if(g!==null)Y=!0;else{var A=i(h);A!==null&&H(R,A.startTime-F),Y=!1}}break e}finally{g=null,x=be,b=!1}Y=void 0}}finally{Y?j():B=!1}}}var j;if(typeof O=="function")j=function(){O(ue)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,S=J.port2;J.port1.onmessage=ue,j=function(){S.postMessage(null)}}else j=function(){_(ue,0)};function H(F,Y){q=_(function(){F(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_next=function(F){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var be=x;x=Y;try{return F()}finally{x=be}},t.unstable_requestPaint=function(){N=!0},t.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var be=x;x=F;try{return Y()}finally{x=be}},t.unstable_scheduleCallback=function(F,Y,be){var le=t.unstable_now();switch(typeof be=="object"&&be!==null?(be=be.delay,be=typeof be=="number"&&0<be?le+be:le):be=le,F){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=be+$,F={id:v++,callback:Y,priorityLevel:F,startTime:be,expirationTime:$,sortIndex:-1},be>le?(F.sortIndex=be,r(h,F),i(m)===null&&F===i(h)&&(k?(z(q),q=-1):k=!0,H(R,be-le))):(F.sortIndex=$,r(m,F),C||b||(C=!0,B||(B=!0,j()))),F},t.unstable_shouldYield=te,t.unstable_wrapCallback=function(F){var Y=x;return function(){var be=x;x=Y;try{return F.apply(this,arguments)}finally{x=be}}}})(zc)),zc}var ng;function t2(){return ng||(ng=1,Tc.exports=e2()),Tc.exports}var Oc={exports:{}},Rt={};var ag;function n2(){if(ag)return Rt;ag=1;var t=Ed();function r(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(m,h,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:m,containerInfo:h,implementation:v}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Rt.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return u(m,h,null,v)},Rt.flushSync=function(m){var h=d.T,v=o.p;try{if(d.T=null,o.p=2,m)return m()}finally{d.T=h,o.p=v,o.d.f()}},Rt.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(m,h))},Rt.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},Rt.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,g=f(v,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?o.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:b}):v==="script"&&o.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Rt.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=f(h.as,h.crossOrigin);o.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(m)},Rt.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,g=f(v,h.crossOrigin);o.d.L(m,v,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Rt.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=f(h.as,h.crossOrigin);o.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(m)},Rt.requestFormReset=function(m){o.d.r(m)},Rt.unstable_batchedUpdates=function(m,h){return m(h)},Rt.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},Rt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rt.version="19.2.4",Rt}var rg;function a2(){if(rg)return Oc.exports;rg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),Oc.exports=n2(),Oc.exports}var ig;function r2(){if(ig)return Ki;ig=1;var t=t2(),r=Ed(),i=a2();function o(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function f(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(o(188))}function h(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(o(188));return n!==e?null:e}for(var a=e,l=n;;){var c=a.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){a=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===a)return m(c),e;if(p===l)return m(c),n;p=p.sibling}throw Error(o(188))}if(a.return!==l.return)a=c,l=p;else{for(var y=!1,E=c.child;E;){if(E===a){y=!0,a=c,l=p;break}if(E===l){y=!0,l=c,a=p;break}E=E.sibling}if(!y){for(E=p.child;E;){if(E===a){y=!0,a=p,l=c;break}if(E===l){y=!0,l=p,a=c;break}E=E.sibling}if(!y)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function S(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case _:return"Profiler";case N:return"StrictMode";case R:return"Suspense";case B:return"SuspenseList";case G:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case O:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return n=e.displayName||null,n!==null?n:S(e.type)||"Memo";case ae:n=e._payload,e=e._init;try{return S(e(n))}catch{}}return null}var H=Array.isArray,F=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be={pending:!1,data:null,method:null,action:null},le=[],$=-1;function A(e){return{current:e}}function M(e){0>$||(e.current=le[$],le[$]=null,$--)}function T(e,n){$++,le[$]=e.current,e.current=n}var ne=A(null),oe=A(null),_e=A(null),$e=A(null);function Ne(e,n){switch(T(_e,n),T(oe,e),T(ne,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?xh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=xh(n),e=wh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(ne),T(ne,e)}function Te(){M(ne),M(oe),M(_e)}function Ke(e){e.memoizedState!==null&&T($e,e);var n=ne.current,a=wh(n,e.type);n!==a&&(T(oe,e),T(ne,a))}function Je(e){oe.current===e&&(M(ne),M(oe)),$e.current===e&&(M($e),Gi._currentValue=be)}var Mt,Dt;function w(e){if(Mt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",Dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+e+Dt}var ce=!1;function ie(e,n){if(!e||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(re){var ee=re}Reflect.construct(e,[],pe)}else{try{pe.call()}catch(re){ee=re}e.call(pe.prototype)}}else{try{throw Error()}catch(re){ee=re}(pe=e())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(re){if(re&&ee&&typeof re.stack=="string")return[re.stack,ee.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),y=p[0],E=p[1];if(y&&E){var I=y.split(`
`),K=E.split(`
`);for(c=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;c<K.length&&!K[c].includes("DetermineComponentFrameRoot");)c++;if(l===I.length||c===K.length)for(l=I.length-1,c=K.length-1;1<=l&&0<=c&&I[l]!==K[c];)c--;for(;1<=l&&0<=c;l--,c--)if(I[l]!==K[c]){if(l!==1||c!==1)do if(l--,c--,0>c||I[l]!==K[c]){var se=`
`+I[l].replace(" at new "," at ");return e.displayName&&se.includes("<anonymous>")&&(se=se.replace("<anonymous>",e.displayName)),se}while(1<=l&&0<=c);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?w(a):""}function L(e,n){switch(e.tag){case 26:case 27:case 5:return w(e.type);case 16:return w("Lazy");case 13:return e.child!==n&&n!==null?w("Suspense Fallback"):w("Suspense");case 19:return w("SuspenseList");case 0:case 15:return ie(e.type,!1);case 11:return ie(e.type.render,!1);case 1:return ie(e.type,!0);case 31:return w("Activity");default:return""}}function D(e){try{var n="",a=null;do n+=L(e,a),a=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var V=Object.prototype.hasOwnProperty,me=t.unstable_scheduleCallback,ge=t.unstable_cancelCallback,W=t.unstable_shouldYield,ye=t.unstable_requestPaint,Se=t.unstable_now,we=t.unstable_getCurrentPriorityLevel,Z=t.unstable_ImmediatePriority,he=t.unstable_UserBlockingPriority,ke=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ye=t.unstable_IdlePriority,ft=t.log,Bt=t.unstable_setDisableYieldValue,He=null,pt=null;function Ct(e){if(typeof ft=="function"&&Bt(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(He,e)}catch{}}var Fe=Math.clz32?Math.clz32:ps,wn=Math.log,Qt=Math.LN2;function ps(e){return e>>>=0,e===0?32:31-(wn(e)/Qt|0)|0}var lr=256,La=262144,En=4194304;function un(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _l(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var c=0,p=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~p,l!==0?c=un(l):(y&=E,y!==0?c=un(y):a||(a=E&~e,a!==0&&(c=un(a))))):(E=l&~p,E!==0?c=un(E):y!==0?c=un(y):a||(a=l&~e,a!==0&&(c=un(a)))),c===0?0:n!==0&&n!==c&&(n&p)===0&&(p=c&-c,a=n&-n,p>=a||p===32&&(a&4194048)!==0)?n:c}function ii(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function B1(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(){var e=En;return En<<=1,(En&62914560)===0&&(En=4194304),e}function ms(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function li(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function U1(e,n,a,l,c,p){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,I=e.expirationTimes,K=e.hiddenUpdates;for(a=y&~a;0<a;){var se=31-Fe(a),pe=1<<se;E[se]=0,I[se]=-1;var ee=K[se];if(ee!==null)for(K[se]=null,se=0;se<ee.length;se++){var re=ee[se];re!==null&&(re.lane&=-536870913)}a&=~pe}l!==0&&tf(e,l,0),p!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=p&~(y&~n))}function tf(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Fe(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function nf(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-Fe(a),c=1<<l;c&n|e[l]&n&&(e[l]|=n),a&=~c}}function af(e,n){var a=n&-n;return a=(a&42)!==0?1:hs(a),(a&(e.suspendedLanes|n))!==0?0:a}function hs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rf(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Ph(e.type))}function lf(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var oa=Math.random().toString(36).slice(2),Nt="__reactFiber$"+oa,It="__reactProps$"+oa,or="__reactContainer$"+oa,bs="__reactEvents$"+oa,I1="__reactListeners$"+oa,H1="__reactHandles$"+oa,of="__reactResources$"+oa,oi="__reactMarker$"+oa;function vs(e){delete e[Nt],delete e[It],delete e[bs],delete e[I1],delete e[H1]}function sr(e){var n=e[Nt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[or]||a[Nt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Nh(e);e!==null;){if(a=e[Nt])return a;e=Nh(e)}return n}e=a,a=e.parentNode}return null}function ur(e){if(e=e[Nt]||e[or]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function si(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(o(33))}function cr(e){var n=e[of];return n||(n=e[of]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function At(e){e[oi]=!0}var sf=new Set,uf={};function Ba(e,n){dr(e,n),dr(e+"Capture",n)}function dr(e,n){for(uf[e]=n,e=0;e<n.length;e++)sf.add(n[e])}var F1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cf={},df={};function q1(e){return V.call(df,e)?!0:V.call(cf,e)?!1:F1.test(e)?df[e]=!0:(cf[e]=!0,!1)}function Cl(e,n,a){if(q1(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Al(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Bn(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function cn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function P1(e,n,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var c=l.get,p=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,p.call(this,y)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ys(e){if(!e._valueTracker){var n=ff(e)?"checked":"value";e._valueTracker=P1(e,n,""+e[n])}}function pf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=ff(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function El(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Y1=/[\n"\\]/g;function dn(e){return e.replace(Y1,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xs(e,n,a,l,c,p,y,E){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+cn(n)):e.value!==""+cn(n)&&(e.value=""+cn(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?ws(e,y,cn(n)):a!=null?ws(e,y,cn(a)):l!=null&&e.removeAttribute("value"),c==null&&p!=null&&(e.defaultChecked=!!p),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+cn(E):e.removeAttribute("name")}function mf(e,n,a,l,c,p,y,E){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),n!=null||a!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){ys(e);return}a=a!=null?""+cn(a):"",n=n!=null?""+cn(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),ys(e)}function ws(e,n,a){n==="number"&&El(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fr(e,n,a,l){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&l&&(e[a].defaultSelected=!0)}else{for(a=""+cn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function hf(e,n,a){if(n!=null&&(n=""+cn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+cn(a):""}function gf(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(o(92));if(H(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=cn(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ys(e)}function pr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var G1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bf(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||G1.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function vf(e,n,a){if(n!=null&&typeof n!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var c in n)l=n[c],n.hasOwnProperty(c)&&a[c]!==l&&bf(e,c,l)}else for(var p in n)n.hasOwnProperty(p)&&bf(e,p,n[p])}function ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),X1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(e){return X1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Un(){}var Ss=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mr=null,hr=null;function yf(e){var n=ur(e);if(n&&(e=n.stateNode)){var a=e[It]||null;e:switch(e=n.stateNode,n.type){case"input":if(xs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var c=l[It]||null;if(!c)throw Error(o(90));xs(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&pf(l)}break e;case"textarea":hf(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&fr(e,!!a.multiple,n,!1)}}}var Cs=!1;function xf(e,n,a){if(Cs)return e(n,a);Cs=!0;try{var l=e(n);return l}finally{if(Cs=!1,(mr!==null||hr!==null)&&(go(),mr&&(n=mr,e=hr,hr=mr=null,yf(n),e)))for(n=0;n<e.length;n++)yf(e[n])}}function ui(e,n){var a=e.stateNode;if(a===null)return null;var l=a[It]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,n,typeof a));return a}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),As=!1;if(In)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){As=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{As=!1}var sa=null,Es=null,Tl=null;function wf(){if(Tl)return Tl;var e,n=Es,a=n.length,l,c="value"in sa?sa.value:sa.textContent,p=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(l=1;l<=y&&n[a-l]===c[p-l];l++);return Tl=c.slice(e,1<l?1-l:void 0)}function zl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ol(){return!0}function kf(){return!1}function Ht(e){function n(a,l,c,p,y){this._reactName=a,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(p):p[E]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ol:kf,this.isPropagationStopped=kf,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Ht(Ua),di=g({},Ua,{view:0,detail:0}),Z1=Ht(di),Ns,Ts,fi,jl=g({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(Ns=e.screenX-fi.screenX,Ts=e.screenY-fi.screenY):Ts=Ns=0,fi=e),Ns)},movementY:function(e){return"movementY"in e?e.movementY:Ts}}),Sf=Ht(jl),Q1=g({},jl,{dataTransfer:0}),K1=Ht(Q1),J1=g({},di,{relatedTarget:0}),zs=Ht(J1),W1=g({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),ev=Ht(W1),tv=g({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nv=Ht(tv),av=g({},Ua,{data:0}),_f=Ht(av),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ov(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=lv[e])?!!n[e]:!1}function Os(){return ov}var sv=g({},di,{key:function(e){if(e.key){var n=rv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=zl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?zl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uv=Ht(sv),cv=g({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=Ht(cv),dv=g({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),fv=Ht(dv),pv=g({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=Ht(pv),hv=g({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gv=Ht(hv),bv=g({},Ua,{newState:0,oldState:0}),vv=Ht(bv),yv=[9,13,27,32],$s=In&&"CompositionEvent"in window,pi=null;In&&"documentMode"in document&&(pi=document.documentMode);var xv=In&&"TextEvent"in window&&!pi,Af=In&&(!$s||pi&&8<pi&&11>=pi),Ef=" ",Nf=!1;function Tf(e,n){switch(e){case"keyup":return yv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function wv(e,n){switch(e){case"compositionend":return zf(n);case"keypress":return n.which!==32?null:(Nf=!0,Ef);case"textInput":return e=n.data,e===Ef&&Nf?null:e;default:return null}}function kv(e,n){if(gr)return e==="compositionend"||!$s&&Tf(e,n)?(e=wf(),Tl=Es=sa=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Af&&n.locale!=="ko"?null:n.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sv[e.type]:n==="textarea"}function $f(e,n,a,l){mr?hr?hr.push(l):hr=[l]:mr=l,n=So(n,"onChange"),0<n.length&&(a=new $l("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var mi=null,hi=null;function _v(e){mh(e,0)}function Ml(e){var n=si(e);if(pf(n))return e}function jf(e,n){if(e==="change")return n}var Mf=!1;if(In){var js;if(In){var Ms="oninput"in document;if(!Ms){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),Ms=typeof Df.oninput=="function"}js=Ms}else js=!1;Mf=js&&(!document.documentMode||9<document.documentMode)}function Rf(){mi&&(mi.detachEvent("onpropertychange",Lf),hi=mi=null)}function Lf(e){if(e.propertyName==="value"&&Ml(hi)){var n=[];$f(n,hi,e,_s(e)),xf(_v,n)}}function Cv(e,n,a){e==="focusin"?(Rf(),mi=n,hi=a,mi.attachEvent("onpropertychange",Lf)):e==="focusout"&&Rf()}function Av(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(hi)}function Ev(e,n){if(e==="click")return Ml(n)}function Nv(e,n){if(e==="input"||e==="change")return Ml(n)}function Tv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kt=typeof Object.is=="function"?Object.is:Tv;function gi(e,n){if(Kt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var c=a[l];if(!V.call(n,c)||!Kt(e[c],n[c]))return!1}return!0}function Bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uf(e,n){var a=Bf(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bf(a)}}function If(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?If(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=El(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=El(e.document)}return n}function Ds(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var zv=In&&"documentMode"in document&&11>=document.documentMode,br=null,Rs=null,bi=null,Ls=!1;function Ff(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ls||br==null||br!==El(l)||(l=br,"selectionStart"in l&&Ds(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bi&&gi(bi,l)||(bi=l,l=So(Rs,"onSelect"),0<l.length&&(n=new $l("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=br)))}function Ia(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var vr={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},Bs={},qf={};In&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function Ha(e){if(Bs[e])return Bs[e];if(!vr[e])return e;var n=vr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qf)return Bs[e]=n[a];return e}var Pf=Ha("animationend"),Yf=Ha("animationiteration"),Gf=Ha("animationstart"),Ov=Ha("transitionrun"),$v=Ha("transitionstart"),jv=Ha("transitioncancel"),Vf=Ha("transitionend"),Xf=new Map,Us="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Us.push("scrollEnd");function kn(e,n){Xf.set(e,n),Ba(n,[e])}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fn=[],yr=0,Is=0;function Rl(){for(var e=yr,n=Is=yr=0;n<e;){var a=fn[n];fn[n++]=null;var l=fn[n];fn[n++]=null;var c=fn[n];fn[n++]=null;var p=fn[n];if(fn[n++]=null,l!==null&&c!==null){var y=l.pending;y===null?c.next=c:(c.next=y.next,y.next=c),l.pending=c}p!==0&&Zf(a,c,p)}}function Ll(e,n,a,l){fn[yr++]=e,fn[yr++]=n,fn[yr++]=a,fn[yr++]=l,Is|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Hs(e,n,a,l){return Ll(e,n,a,l),Bl(e)}function Fa(e,n){return Ll(e,null,null,n),Bl(e)}function Zf(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var c=!1,p=e.return;p!==null;)p.childLanes|=a,l=p.alternate,l!==null&&(l.childLanes|=a),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(c=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,c&&n!==null&&(c=31-Fe(a),e=p.hiddenUpdates,l=e[c],l===null?e[c]=[n]:l.push(n),n.lane=a|536870912),p):null}function Bl(e){if(50<Ui)throw Ui=0,Qu=null,Error(o(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var xr={};function Mv(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,n,a,l){return new Mv(e,n,a,l)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hn(e,n){var a=e.alternate;return a===null?(a=Jt(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qf(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ul(e,n,a,l,c,p){var y=0;if(l=e,typeof e=="function")Fs(e)&&(y=1);else if(typeof e=="string")y=Uy(e,a,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case G:return e=Jt(31,a,n,c),e.elementType=G,e.lanes=p,e;case k:return qa(a.children,c,p,n);case N:y=8,c|=24;break;case _:return e=Jt(12,a,n,c|2),e.elementType=_,e.lanes=p,e;case R:return e=Jt(13,a,n,c),e.elementType=R,e.lanes=p,e;case B:return e=Jt(19,a,n,c),e.elementType=B,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:y=10;break e;case z:y=9;break e;case U:y=11;break e;case q:y=14;break e;case ae:y=16,l=null;break e}y=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return n=Jt(y,a,n,c),n.elementType=e,n.type=l,n.lanes=p,n}function qa(e,n,a,l){return e=Jt(7,e,l,n),e.lanes=a,e}function qs(e,n,a){return e=Jt(6,e,null,n),e.lanes=a,e}function Kf(e){var n=Jt(18,null,null,0);return n.stateNode=e,n}function Ps(e,n,a){return n=Jt(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Jf=new WeakMap;function pn(e,n){if(typeof e=="object"&&e!==null){var a=Jf.get(e);return a!==void 0?a:(n={value:e,source:n,stack:D(n)},Jf.set(e,n),n)}return{value:e,source:n,stack:D(n)}}var wr=[],kr=0,Il=null,vi=0,mn=[],hn=0,ua=null,Nn=1,Tn="";function Fn(e,n){wr[kr++]=vi,wr[kr++]=Il,Il=e,vi=n}function Wf(e,n,a){mn[hn++]=Nn,mn[hn++]=Tn,mn[hn++]=ua,ua=e;var l=Nn;e=Tn;var c=32-Fe(l)-1;l&=~(1<<c),a+=1;var p=32-Fe(n)+c;if(30<p){var y=c-c%5;p=(l&(1<<y)-1).toString(32),l>>=y,c-=y,Nn=1<<32-Fe(n)+c|a<<c|l,Tn=p+e}else Nn=1<<p|a<<c|l,Tn=e}function Ys(e){e.return!==null&&(Fn(e,1),Wf(e,1,0))}function Gs(e){for(;e===Il;)Il=wr[--kr],wr[kr]=null,vi=wr[--kr],wr[kr]=null;for(;e===ua;)ua=mn[--hn],mn[hn]=null,Tn=mn[--hn],mn[hn]=null,Nn=mn[--hn],mn[hn]=null}function ep(e,n){mn[hn++]=Nn,mn[hn++]=Tn,mn[hn++]=ua,Nn=n.id,Tn=n.overflow,ua=e}var Tt=null,ut=null,Xe=!1,ca=null,gn=!1,Vs=Error(o(519));function da(e){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yi(pn(n,e)),Vs}function tp(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[Nt]=e,n[It]=l,a){case"dialog":Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":case"embed":Pe("load",n);break;case"video":case"audio":for(a=0;a<Hi.length;a++)Pe(Hi[a],n);break;case"source":Pe("error",n);break;case"img":case"image":case"link":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"input":Pe("invalid",n),mf(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Pe("invalid",n);break;case"textarea":Pe("invalid",n),gf(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||vh(n.textContent,a)?(l.popover!=null&&(Pe("beforetoggle",n),Pe("toggle",n)),l.onScroll!=null&&Pe("scroll",n),l.onScrollEnd!=null&&Pe("scrollend",n),l.onClick!=null&&(n.onclick=Un),n=!0):n=!1,n||da(e,!0)}function np(e){for(Tt=e.return;Tt;)switch(Tt.tag){case 5:case 31:case 13:gn=!1;return;case 27:case 3:gn=!0;return;default:Tt=Tt.return}}function Sr(e){if(e!==Tt)return!1;if(!Xe)return np(e),Xe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||dc(e.type,e.memoizedProps)),a=!a),a&&ut&&da(e),np(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ut=Eh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ut=Eh(e)}else n===27?(n=ut,Ca(e.type)?(e=gc,gc=null,ut=e):ut=n):ut=Tt?vn(e.stateNode.nextSibling):null;return!0}function Pa(){ut=Tt=null,Xe=!1}function Xs(){var e=ca;return e!==null&&(Yt===null?Yt=e:Yt.push.apply(Yt,e),ca=null),e}function yi(e){ca===null?ca=[e]:ca.push(e)}var Zs=A(null),Ya=null,qn=null;function fa(e,n,a){T(Zs,n._currentValue),n._currentValue=a}function Pn(e){e._currentValue=Zs.current,M(Zs)}function Qs(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function Ks(e,n,a,l){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var p=c.dependencies;if(p!==null){var y=c.child;p=p.firstContext;e:for(;p!==null;){var E=p;p=c;for(var I=0;I<n.length;I++)if(E.context===n[I]){p.lanes|=a,E=p.alternate,E!==null&&(E.lanes|=a),Qs(p.return,a,e),l||(y=null);break e}p=E.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(o(341));y.lanes|=a,p=y.alternate,p!==null&&(p.lanes|=a),Qs(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function _r(e,n,a,l){e=null;for(var c=n,p=!1;c!==null;){if(!p){if((c.flags&524288)!==0)p=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(o(387));if(y=y.memoizedProps,y!==null){var E=c.type;Kt(c.pendingProps.value,y.value)||(e!==null?e.push(E):e=[E])}}else if(c===$e.current){if(y=c.alternate,y===null)throw Error(o(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Gi):e=[Gi])}c=c.return}e!==null&&Ks(n,e,a,l),n.flags|=262144}function Hl(e){for(e=e.firstContext;e!==null;){if(!Kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Ya=e,qn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zt(e){return ap(Ya,e)}function Fl(e,n){return Ya===null&&Ga(e),ap(e,n)}function ap(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qn===null){if(e===null)throw Error(o(308));qn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else qn=qn.next=n;return a}var Dv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Rv=t.unstable_scheduleCallback,Lv=t.unstable_NormalPriority,yt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Js(){return{controller:new Dv,data:new Map,refCount:0}}function xi(e){e.refCount--,e.refCount===0&&Rv(Lv,function(){e.controller.abort()})}var wi=null,Ws=0,Cr=0,Ar=null;function Bv(e,n){if(wi===null){var a=wi=[];Ws=0,Cr=nc(),Ar={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ws++,n.then(rp,rp),n}function rp(){if(--Ws===0&&wi!==null){Ar!==null&&(Ar.status="fulfilled");var e=wi;wi=null,Cr=0,Ar=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Uv(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(l.status="rejected",l.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),l}var ip=F.S;F.S=function(e,n){Fm=Se(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Bv(e,n),ip!==null&&ip(e,n)};var Va=A(null);function eu(){var e=Va.current;return e!==null?e:lt.pooledCache}function ql(e,n){n===null?T(Va,Va.current):T(Va,n.pool)}function lp(){var e=eu();return e===null?null:{parent:yt._currentValue,pool:e}}var Er=Error(o(460)),tu=Error(o(474)),Pl=Error(o(542)),Yl={then:function(){}};function op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Un,Un),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cp(e),e;default:if(typeof n.status=="string")n.then(Un,Un);else{if(e=lt,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=l}},function(l){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cp(e),e}throw Za=n,Er}}function Xa(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Za=a,Er):a}}var Za=null;function up(){if(Za===null)throw Error(o(459));var e=Za;return Za=null,e}function cp(e){if(e===Er||e===Pl)throw Error(o(483))}var Nr=null,ki=0;function Gl(e){var n=ki;return ki+=1,Nr===null&&(Nr=[]),sp(Nr,e,n)}function Si(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Vl(e,n){throw n.$$typeof===x?Error(o(525)):(e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function dp(e){function n(X,P){if(e){var Q=X.deletions;Q===null?(X.deletions=[P],X.flags|=16):Q.push(P)}}function a(X,P){if(!e)return null;for(;P!==null;)n(X,P),P=P.sibling;return null}function l(X){for(var P=new Map;X!==null;)X.key!==null?P.set(X.key,X):P.set(X.index,X),X=X.sibling;return P}function c(X,P){return X=Hn(X,P),X.index=0,X.sibling=null,X}function p(X,P,Q){return X.index=Q,e?(Q=X.alternate,Q!==null?(Q=Q.index,Q<P?(X.flags|=67108866,P):Q):(X.flags|=67108866,P)):(X.flags|=1048576,P)}function y(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function E(X,P,Q,de){return P===null||P.tag!==6?(P=qs(Q,X.mode,de),P.return=X,P):(P=c(P,Q),P.return=X,P)}function I(X,P,Q,de){var ze=Q.type;return ze===k?se(X,P,Q.props.children,de,Q.key):P!==null&&(P.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===ae&&Xa(ze)===P.type)?(P=c(P,Q.props),Si(P,Q),P.return=X,P):(P=Ul(Q.type,Q.key,Q.props,null,X.mode,de),Si(P,Q),P.return=X,P)}function K(X,P,Q,de){return P===null||P.tag!==4||P.stateNode.containerInfo!==Q.containerInfo||P.stateNode.implementation!==Q.implementation?(P=Ps(Q,X.mode,de),P.return=X,P):(P=c(P,Q.children||[]),P.return=X,P)}function se(X,P,Q,de,ze){return P===null||P.tag!==7?(P=qa(Q,X.mode,de,ze),P.return=X,P):(P=c(P,Q),P.return=X,P)}function pe(X,P,Q){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=qs(""+P,X.mode,Q),P.return=X,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case b:return Q=Ul(P.type,P.key,P.props,null,X.mode,Q),Si(Q,P),Q.return=X,Q;case C:return P=Ps(P,X.mode,Q),P.return=X,P;case ae:return P=Xa(P),pe(X,P,Q)}if(H(P)||j(P))return P=qa(P,X.mode,Q,null),P.return=X,P;if(typeof P.then=="function")return pe(X,Gl(P),Q);if(P.$$typeof===O)return pe(X,Fl(X,P),Q);Vl(X,P)}return null}function ee(X,P,Q,de){var ze=P!==null?P.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ze!==null?null:E(X,P,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case b:return Q.key===ze?I(X,P,Q,de):null;case C:return Q.key===ze?K(X,P,Q,de):null;case ae:return Q=Xa(Q),ee(X,P,Q,de)}if(H(Q)||j(Q))return ze!==null?null:se(X,P,Q,de,null);if(typeof Q.then=="function")return ee(X,P,Gl(Q),de);if(Q.$$typeof===O)return ee(X,P,Fl(X,Q),de);Vl(X,Q)}return null}function re(X,P,Q,de,ze){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return X=X.get(Q)||null,E(P,X,""+de,ze);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case b:return X=X.get(de.key===null?Q:de.key)||null,I(P,X,de,ze);case C:return X=X.get(de.key===null?Q:de.key)||null,K(P,X,de,ze);case ae:return de=Xa(de),re(X,P,Q,de,ze)}if(H(de)||j(de))return X=X.get(Q)||null,se(P,X,de,ze,null);if(typeof de.then=="function")return re(X,P,Q,Gl(de),ze);if(de.$$typeof===O)return re(X,P,Q,Fl(P,de),ze);Vl(P,de)}return null}function Ce(X,P,Q,de){for(var ze=null,Ze=null,Ee=P,Ue=P=0,Ve=null;Ee!==null&&Ue<Q.length;Ue++){Ee.index>Ue?(Ve=Ee,Ee=null):Ve=Ee.sibling;var Qe=ee(X,Ee,Q[Ue],de);if(Qe===null){Ee===null&&(Ee=Ve);break}e&&Ee&&Qe.alternate===null&&n(X,Ee),P=p(Qe,P,Ue),Ze===null?ze=Qe:Ze.sibling=Qe,Ze=Qe,Ee=Ve}if(Ue===Q.length)return a(X,Ee),Xe&&Fn(X,Ue),ze;if(Ee===null){for(;Ue<Q.length;Ue++)Ee=pe(X,Q[Ue],de),Ee!==null&&(P=p(Ee,P,Ue),Ze===null?ze=Ee:Ze.sibling=Ee,Ze=Ee);return Xe&&Fn(X,Ue),ze}for(Ee=l(Ee);Ue<Q.length;Ue++)Ve=re(Ee,X,Ue,Q[Ue],de),Ve!==null&&(e&&Ve.alternate!==null&&Ee.delete(Ve.key===null?Ue:Ve.key),P=p(Ve,P,Ue),Ze===null?ze=Ve:Ze.sibling=Ve,Ze=Ve);return e&&Ee.forEach(function(za){return n(X,za)}),Xe&&Fn(X,Ue),ze}function je(X,P,Q,de){if(Q==null)throw Error(o(151));for(var ze=null,Ze=null,Ee=P,Ue=P=0,Ve=null,Qe=Q.next();Ee!==null&&!Qe.done;Ue++,Qe=Q.next()){Ee.index>Ue?(Ve=Ee,Ee=null):Ve=Ee.sibling;var za=ee(X,Ee,Qe.value,de);if(za===null){Ee===null&&(Ee=Ve);break}e&&Ee&&za.alternate===null&&n(X,Ee),P=p(za,P,Ue),Ze===null?ze=za:Ze.sibling=za,Ze=za,Ee=Ve}if(Qe.done)return a(X,Ee),Xe&&Fn(X,Ue),ze;if(Ee===null){for(;!Qe.done;Ue++,Qe=Q.next())Qe=pe(X,Qe.value,de),Qe!==null&&(P=p(Qe,P,Ue),Ze===null?ze=Qe:Ze.sibling=Qe,Ze=Qe);return Xe&&Fn(X,Ue),ze}for(Ee=l(Ee);!Qe.done;Ue++,Qe=Q.next())Qe=re(Ee,X,Ue,Qe.value,de),Qe!==null&&(e&&Qe.alternate!==null&&Ee.delete(Qe.key===null?Ue:Qe.key),P=p(Qe,P,Ue),Ze===null?ze=Qe:Ze.sibling=Qe,Ze=Qe);return e&&Ee.forEach(function(Qy){return n(X,Qy)}),Xe&&Fn(X,Ue),ze}function it(X,P,Q,de){if(typeof Q=="object"&&Q!==null&&Q.type===k&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case b:e:{for(var ze=Q.key;P!==null;){if(P.key===ze){if(ze=Q.type,ze===k){if(P.tag===7){a(X,P.sibling),de=c(P,Q.props.children),de.return=X,X=de;break e}}else if(P.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===ae&&Xa(ze)===P.type){a(X,P.sibling),de=c(P,Q.props),Si(de,Q),de.return=X,X=de;break e}a(X,P);break}else n(X,P);P=P.sibling}Q.type===k?(de=qa(Q.props.children,X.mode,de,Q.key),de.return=X,X=de):(de=Ul(Q.type,Q.key,Q.props,null,X.mode,de),Si(de,Q),de.return=X,X=de)}return y(X);case C:e:{for(ze=Q.key;P!==null;){if(P.key===ze)if(P.tag===4&&P.stateNode.containerInfo===Q.containerInfo&&P.stateNode.implementation===Q.implementation){a(X,P.sibling),de=c(P,Q.children||[]),de.return=X,X=de;break e}else{a(X,P);break}else n(X,P);P=P.sibling}de=Ps(Q,X.mode,de),de.return=X,X=de}return y(X);case ae:return Q=Xa(Q),it(X,P,Q,de)}if(H(Q))return Ce(X,P,Q,de);if(j(Q)){if(ze=j(Q),typeof ze!="function")throw Error(o(150));return Q=ze.call(Q),je(X,P,Q,de)}if(typeof Q.then=="function")return it(X,P,Gl(Q),de);if(Q.$$typeof===O)return it(X,P,Fl(X,Q),de);Vl(X,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,P!==null&&P.tag===6?(a(X,P.sibling),de=c(P,Q),de.return=X,X=de):(a(X,P),de=qs(Q,X.mode,de),de.return=X,X=de),y(X)):a(X,P)}return function(X,P,Q,de){try{ki=0;var ze=it(X,P,Q,de);return Nr=null,ze}catch(Ee){if(Ee===Er||Ee===Pl)throw Ee;var Ze=Jt(29,Ee,null,X.mode);return Ze.lanes=de,Ze.return=X,Ze}}}var Qa=dp(!0),fp=dp(!1),pa=!1;function nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function au(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(We&2)!==0){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,n=Bl(e),Zf(e,null,a),n}return Ll(e,l,n,a),Bl(e)}function _i(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,nf(e,a)}}function ru(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var c=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};p===null?c=p=y:p=p.next=y,a=a.next}while(a!==null);p===null?c=p=n:p=p.next=n}else c=p=n;a={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var iu=!1;function Ci(){if(iu){var e=Ar;if(e!==null)throw e}}function Ai(e,n,a,l){iu=!1;var c=e.updateQueue;pa=!1;var p=c.firstBaseUpdate,y=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var I=E,K=I.next;I.next=null,y===null?p=K:y.next=K,y=I;var se=e.alternate;se!==null&&(se=se.updateQueue,E=se.lastBaseUpdate,E!==y&&(E===null?se.firstBaseUpdate=K:E.next=K,se.lastBaseUpdate=I))}if(p!==null){var pe=c.baseState;y=0,se=K=I=null,E=p;do{var ee=E.lane&-536870913,re=ee!==E.lane;if(re?(Ge&ee)===ee:(l&ee)===ee){ee!==0&&ee===Cr&&(iu=!0),se!==null&&(se=se.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Ce=e,je=E;ee=n;var it=a;switch(je.tag){case 1:if(Ce=je.payload,typeof Ce=="function"){pe=Ce.call(it,pe,ee);break e}pe=Ce;break e;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=je.payload,ee=typeof Ce=="function"?Ce.call(it,pe,ee):Ce,ee==null)break e;pe=g({},pe,ee);break e;case 2:pa=!0}}ee=E.callback,ee!==null&&(e.flags|=64,re&&(e.flags|=8192),re=c.callbacks,re===null?c.callbacks=[ee]:re.push(ee))}else re={lane:ee,tag:E.tag,payload:E.payload,callback:E.callback,next:null},se===null?(K=se=re,I=pe):se=se.next=re,y|=ee;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;re=E,E=re.next,re.next=null,c.lastBaseUpdate=re,c.shared.pending=null}}while(!0);se===null&&(I=pe),c.baseState=I,c.firstBaseUpdate=K,c.lastBaseUpdate=se,p===null&&(c.shared.lanes=0),xa|=y,e.lanes=y,e.memoizedState=pe}}function pp(e,n){if(typeof e!="function")throw Error(o(191,e));e.call(n)}function mp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)pp(a[e],n)}var Tr=A(null),Xl=A(0);function hp(e,n){e=Wn,T(Xl,e),T(Tr,n),Wn=e|n.baseLanes}function lu(){T(Xl,Wn),T(Tr,Tr.current)}function ou(){Wn=Xl.current,M(Tr),M(Xl)}var Wt=A(null),bn=null;function ga(e){var n=e.alternate;T(bt,bt.current&1),T(Wt,e),bn===null&&(n===null||Tr.current!==null||n.memoizedState!==null)&&(bn=e)}function su(e){T(bt,bt.current),T(Wt,e),bn===null&&(bn=e)}function gp(e){e.tag===22?(T(bt,bt.current),T(Wt,e),bn===null&&(bn=e)):ba()}function ba(){T(bt,bt.current),T(Wt,Wt.current)}function en(e){M(Wt),bn===e&&(bn=null),M(bt)}var bt=A(0);function Zl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mc(a)||hc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yn=0,Be=null,at=null,xt=null,Ql=!1,zr=!1,Ka=!1,Kl=0,Ei=0,Or=null,Iv=0;function ht(){throw Error(o(321))}function uu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kt(e[a],n[a]))return!1;return!0}function cu(e,n,a,l,c,p){return Yn=p,Be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?Wp:Cu,Ka=!1,p=a(l,c),Ka=!1,zr&&(p=vp(n,a,l,c)),bp(e),p}function bp(e){F.H=zi;var n=at!==null&&at.next!==null;if(Yn=0,xt=at=Be=null,Ql=!1,Ei=0,Or=null,n)throw Error(o(300));e===null||wt||(e=e.dependencies,e!==null&&Hl(e)&&(wt=!0))}function vp(e,n,a,l){Be=e;var c=0;do{if(zr&&(Or=null),Ei=0,zr=!1,25<=c)throw Error(o(301));if(c+=1,xt=at=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}F.H=em,p=n(a,l)}while(zr);return p}function Hv(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Ni(n):n,e=e.useState()[0],(at!==null?at.memoizedState:null)!==e&&(Be.flags|=1024),n}function du(){var e=Kl!==0;return Kl=0,e}function fu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function pu(e){if(Ql){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ql=!1}Yn=0,xt=at=Be=null,zr=!1,Ei=Kl=0,Or=null}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?Be.memoizedState=xt=e:xt=xt.next=e,xt}function vt(){if(at===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=at.next;var n=xt===null?Be.memoizedState:xt.next;if(n!==null)xt=n,at=e;else{if(e===null)throw Be.alternate===null?Error(o(467)):Error(o(310));at=e,e={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},xt===null?Be.memoizedState=xt=e:xt=xt.next=e}return xt}function Jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ni(e){var n=Ei;return Ei+=1,Or===null&&(Or=[]),e=sp(Or,e,n),n=Be,(xt===null?n.memoizedState:xt.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Wp:Cu),e}function Wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ni(e);if(e.$$typeof===O)return zt(e)}throw Error(o(438,String(e)))}function mu(e){var n=null,a=Be.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=Be.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Jl(),Be.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=te;return n.index++,a}function Gn(e,n){return typeof n=="function"?n(e):n}function eo(e){var n=vt();return hu(n,at,e)}function hu(e,n,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var c=e.baseQueue,p=l.pending;if(p!==null){if(c!==null){var y=c.next;c.next=p.next,p.next=y}n.baseQueue=c=p,l.pending=null}if(p=e.baseState,c===null)e.memoizedState=p;else{n=c.next;var E=y=null,I=null,K=n,se=!1;do{var pe=K.lane&-536870913;if(pe!==K.lane?(Ge&pe)===pe:(Yn&pe)===pe){var ee=K.revertLane;if(ee===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),pe===Cr&&(se=!0);else if((Yn&ee)===ee){K=K.next,ee===Cr&&(se=!0);continue}else pe={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},I===null?(E=I=pe,y=p):I=I.next=pe,Be.lanes|=ee,xa|=ee;pe=K.action,Ka&&a(p,pe),p=K.hasEagerState?K.eagerState:a(p,pe)}else ee={lane:pe,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},I===null?(E=I=ee,y=p):I=I.next=ee,Be.lanes|=pe,xa|=pe;K=K.next}while(K!==null&&K!==n);if(I===null?y=p:I.next=E,!Kt(p,e.memoizedState)&&(wt=!0,se&&(a=Ar,a!==null)))throw a;e.memoizedState=p,e.baseState=y,e.baseQueue=I,l.lastRenderedState=p}return c===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function gu(e){var n=vt(),a=n.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,c=a.pending,p=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do p=e(p,y.action),y=y.next;while(y!==c);Kt(p,n.memoizedState)||(wt=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),a.lastRenderedState=p}return[p,l]}function yp(e,n,a){var l=Be,c=vt(),p=Xe;if(p){if(a===void 0)throw Error(o(407));a=a()}else a=n();var y=!Kt((at||c).memoizedState,a);if(y&&(c.memoizedState=a,wt=!0),c=c.queue,yu(kp.bind(null,l,c,e),[e]),c.getSnapshot!==n||y||xt!==null&&xt.memoizedState.tag&1){if(l.flags|=2048,$r(9,{destroy:void 0},wp.bind(null,l,c,a,n),null),lt===null)throw Error(o(349));p||(Yn&127)!==0||xp(l,n,a)}return a}function xp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Be.updateQueue,n===null?(n=Jl(),Be.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wp(e,n,a,l){n.value=a,n.getSnapshot=l,Sp(n)&&_p(e)}function kp(e,n,a){return a(function(){Sp(n)&&_p(e)})}function Sp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kt(e,a)}catch{return!0}}function _p(e){var n=Fa(e,2);n!==null&&Gt(n,e,2)}function bu(e){var n=Ut();if(typeof e=="function"){var a=e;if(e=a(),Ka){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},n}function Cp(e,n,a,l){return e.baseState=a,hu(e,at,typeof l=="function"?l:Gn)}function Fv(e,n,a,l,c){if(ao(e))throw Error(o(485));if(e=n.action,e!==null){var p={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){p.listeners.push(y)}};F.T!==null?a(!0):p.isTransition=!1,l(p),a=n.pending,a===null?(p.next=n.pending=p,Ap(n,p)):(p.next=a.next,n.pending=a.next=p)}}function Ap(e,n){var a=n.action,l=n.payload,c=e.state;if(n.isTransition){var p=F.T,y={};F.T=y;try{var E=a(c,l),I=F.S;I!==null&&I(y,E),Ep(e,n,E)}catch(K){vu(e,n,K)}finally{p!==null&&y.types!==null&&(p.types=y.types),F.T=p}}else try{p=a(c,l),Ep(e,n,p)}catch(K){vu(e,n,K)}}function Ep(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Np(e,n,l)},function(l){return vu(e,n,l)}):Np(e,n,a)}function Np(e,n,a){n.status="fulfilled",n.value=a,Tp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ap(e,a)))}function vu(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,Tp(n),n=n.next;while(n!==l)}e.action=null}function Tp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function zp(e,n){return n}function Op(e,n){if(Xe){var a=lt.formState;if(a!==null){e:{var l=Be;if(Xe){if(ut){t:{for(var c=ut,p=gn;c.nodeType!==8;){if(!p){c=null;break t}if(c=vn(c.nextSibling),c===null){c=null;break t}}p=c.data,c=p==="F!"||p==="F"?c:null}if(c){ut=vn(c.nextSibling),l=c.data==="F!";break e}}da(l)}l=!1}l&&(n=a[0])}}return a=Ut(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zp,lastRenderedState:n},a.queue=l,a=Qp.bind(null,Be,l),l.dispatch=a,l=bu(!1),p=_u.bind(null,Be,!1,l.queue),l=Ut(),c={state:n,dispatch:null,action:e,pending:null},l.queue=c,a=Fv.bind(null,Be,c,p,a),c.dispatch=a,l.memoizedState=e,[n,a,!1]}function $p(e){var n=vt();return jp(n,at,e)}function jp(e,n,a){if(n=hu(e,n,zp)[0],e=eo(Gn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ni(n)}catch(y){throw y===Er?Pl:y}else l=n;n=vt();var c=n.queue,p=c.dispatch;return a!==n.memoizedState&&(Be.flags|=2048,$r(9,{destroy:void 0},qv.bind(null,c,a),null)),[l,p,e]}function qv(e,n){e.action=n}function Mp(e){var n=vt(),a=at;if(a!==null)return jp(n,a,e);vt(),n=n.memoizedState,a=vt();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function $r(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=Be.updateQueue,n===null&&(n=Jl(),Be.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function Dp(){return vt().memoizedState}function to(e,n,a,l){var c=Ut();Be.flags|=e,c.memoizedState=$r(1|n,{destroy:void 0},a,l===void 0?null:l)}function no(e,n,a,l){var c=vt();l=l===void 0?null:l;var p=c.memoizedState.inst;at!==null&&l!==null&&uu(l,at.memoizedState.deps)?c.memoizedState=$r(n,p,a,l):(Be.flags|=e,c.memoizedState=$r(1|n,p,a,l))}function Rp(e,n){to(8390656,8,e,n)}function yu(e,n){no(2048,8,e,n)}function Pv(e){Be.flags|=4;var n=Be.updateQueue;if(n===null)n=Jl(),Be.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Lp(e){var n=vt().memoizedState;return Pv({ref:n,nextImpl:e}),function(){if((We&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function Bp(e,n){return no(4,2,e,n)}function Up(e,n){return no(4,4,e,n)}function Ip(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hp(e,n,a){a=a!=null?a.concat([e]):null,no(4,4,Ip.bind(null,n,e),a)}function xu(){}function Fp(e,n){var a=vt();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&uu(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function qp(e,n){var a=vt();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&uu(n,l[1]))return l[0];if(l=e(),Ka){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[l,n],l}function wu(e,n,a){return a===void 0||(Yn&1073741824)!==0&&(Ge&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Pm(),Be.lanes|=e,xa|=e,a)}function Pp(e,n,a,l){return Kt(a,n)?a:Tr.current!==null?(e=wu(e,a,l),Kt(e,n)||(wt=!0),e):(Yn&42)===0||(Yn&1073741824)!==0&&(Ge&261930)===0?(wt=!0,e.memoizedState=a):(e=Pm(),Be.lanes|=e,xa|=e,n)}function Yp(e,n,a,l,c){var p=Y.p;Y.p=p!==0&&8>p?p:8;var y=F.T,E={};F.T=E,_u(e,!1,n,a);try{var I=c(),K=F.S;if(K!==null&&K(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var se=Uv(I,l);Ti(e,n,se,an(e))}else Ti(e,n,l,an(e))}catch(pe){Ti(e,n,{then:function(){},status:"rejected",reason:pe},an())}finally{Y.p=p,y!==null&&E.types!==null&&(y.types=E.types),F.T=y}}function Yv(){}function ku(e,n,a,l){if(e.tag!==5)throw Error(o(476));var c=Gp(e).queue;Yp(e,c,n,be,a===null?Yv:function(){return Vp(e),a(l)})}function Gp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:be,baseState:be,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:be},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Vp(e){var n=Gp(e);n.next===null&&(n=e.alternate.memoizedState),Ti(e,n.next.queue,{},an())}function Su(){return zt(Gi)}function Xp(){return vt().memoizedState}function Zp(){return vt().memoizedState}function Gv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=an();e=ma(a);var l=ha(n,e,a);l!==null&&(Gt(l,n,a),_i(l,n,a)),n={cache:Js()},e.payload=n;return}n=n.return}}function Vv(e,n,a){var l=an();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ao(e)?Kp(n,a):(a=Hs(e,n,a,l),a!==null&&(Gt(a,e,l),Jp(a,n,l)))}function Qp(e,n,a){var l=an();Ti(e,n,a,l)}function Ti(e,n,a,l){var c={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ao(e))Kp(n,c);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var y=n.lastRenderedState,E=p(y,a);if(c.hasEagerState=!0,c.eagerState=E,Kt(E,y))return Ll(e,n,c,0),lt===null&&Rl(),!1}catch{}if(a=Hs(e,n,c,l),a!==null)return Gt(a,e,l),Jp(a,n,l),!0}return!1}function _u(e,n,a,l){if(l={lane:2,revertLane:nc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ao(e)){if(n)throw Error(o(479))}else n=Hs(e,a,l,2),n!==null&&Gt(n,e,2)}function ao(e){var n=e.alternate;return e===Be||n!==null&&n===Be}function Kp(e,n){zr=Ql=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Jp(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,nf(e,a)}}var zi={readContext:zt,use:Wl,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht};zi.useEffectEvent=ht;var Wp={readContext:zt,use:Wl,useCallback:function(e,n){return Ut().memoizedState=[e,n===void 0?null:n],e},useContext:zt,useEffect:Rp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,to(4194308,4,Ip.bind(null,n,e),a)},useLayoutEffect:function(e,n){return to(4194308,4,e,n)},useInsertionEffect:function(e,n){to(4,2,e,n)},useMemo:function(e,n){var a=Ut();n=n===void 0?null:n;var l=e();if(Ka){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=Ut();if(a!==void 0){var c=a(n);if(Ka){Ct(!0);try{a(n)}finally{Ct(!1)}}}else c=n;return l.memoizedState=l.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},l.queue=e,e=e.dispatch=Vv.bind(null,Be,e),[l.memoizedState,e]},useRef:function(e){var n=Ut();return e={current:e},n.memoizedState=e},useState:function(e){e=bu(e);var n=e.queue,a=Qp.bind(null,Be,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:xu,useDeferredValue:function(e,n){var a=Ut();return wu(a,e,n)},useTransition:function(){var e=bu(!1);return e=Yp.bind(null,Be,e.queue,!0,!1),Ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=Be,c=Ut();if(Xe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=n(),lt===null)throw Error(o(349));(Ge&127)!==0||xp(l,n,a)}c.memoizedState=a;var p={value:a,getSnapshot:n};return c.queue=p,Rp(kp.bind(null,l,p,e),[e]),l.flags|=2048,$r(9,{destroy:void 0},wp.bind(null,l,p,a,n),null),a},useId:function(){var e=Ut(),n=lt.identifierPrefix;if(Xe){var a=Tn,l=Nn;a=(l&~(1<<32-Fe(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Kl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Iv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Su,useFormState:Op,useActionState:Op,useOptimistic:function(e){var n=Ut();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=_u.bind(null,Be,!0,a),a.dispatch=n,[e,n]},useMemoCache:mu,useCacheRefresh:function(){return Ut().memoizedState=Gv.bind(null,Be)},useEffectEvent:function(e){var n=Ut(),a={impl:e};return n.memoizedState=a,function(){if((We&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Cu={readContext:zt,use:Wl,useCallback:Fp,useContext:zt,useEffect:yu,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:Up,useMemo:qp,useReducer:eo,useRef:Dp,useState:function(){return eo(Gn)},useDebugValue:xu,useDeferredValue:function(e,n){var a=vt();return Pp(a,at.memoizedState,e,n)},useTransition:function(){var e=eo(Gn)[0],n=vt().memoizedState;return[typeof e=="boolean"?e:Ni(e),n]},useSyncExternalStore:yp,useId:Xp,useHostTransitionStatus:Su,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=vt();return Cp(a,at,e,n)},useMemoCache:mu,useCacheRefresh:Zp};Cu.useEffectEvent=Lp;var em={readContext:zt,use:Wl,useCallback:Fp,useContext:zt,useEffect:yu,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:Up,useMemo:qp,useReducer:gu,useRef:Dp,useState:function(){return gu(Gn)},useDebugValue:xu,useDeferredValue:function(e,n){var a=vt();return at===null?wu(a,e,n):Pp(a,at.memoizedState,e,n)},useTransition:function(){var e=gu(Gn)[0],n=vt().memoizedState;return[typeof e=="boolean"?e:Ni(e),n]},useSyncExternalStore:yp,useId:Xp,useHostTransitionStatus:Su,useFormState:Mp,useActionState:Mp,useOptimistic:function(e,n){var a=vt();return at!==null?Cp(a,at,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mu,useCacheRefresh:Zp};em.useEffectEvent=Lp;function Au(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Eu={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=an(),c=ma(l);c.payload=n,a!=null&&(c.callback=a),n=ha(e,c,l),n!==null&&(Gt(n,e,l),_i(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=an(),c=ma(l);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ha(e,c,l),n!==null&&(Gt(n,e,l),_i(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=an(),l=ma(a);l.tag=2,n!=null&&(l.callback=n),n=ha(e,l,a),n!==null&&(Gt(n,e,a),_i(n,e,a))}};function tm(e,n,a,l,c,p,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,y):n.prototype&&n.prototype.isPureReactComponent?!gi(a,l)||!gi(c,p):!0}function nm(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&Eu.enqueueReplaceState(n,n.state,null)}function Ja(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function am(e){Dl(e)}function rm(e){console.error(e)}function im(e){Dl(e)}function ro(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function lm(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Nu(e,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){ro(e,n)},a}function om(e){return e=ma(e),e.tag=3,e}function sm(e,n,a,l){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var p=l.value;e.payload=function(){return c(p)},e.callback=function(){lm(n,a,l)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){lm(n,a,l),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function Xv(e,n,a,l,c){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&_r(n,a,c,!0),a=Wt.current,a!==null){switch(a.tag){case 31:case 13:return bn===null?bo():a.alternate===null&&gt===0&&(gt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,l===Yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Wu(e,l,c)),!1;case 22:return a.flags|=65536,l===Yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Wu(e,l,c)),!1}throw Error(o(435,a.tag))}return Wu(e,l,c),bo(),!1}if(Xe)return n=Wt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,l!==Vs&&(e=Error(o(422),{cause:l}),yi(pn(e,a)))):(l!==Vs&&(n=Error(o(423),{cause:l}),yi(pn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,l=pn(l,a),c=Nu(e.stateNode,l,c),ru(e,c),gt!==4&&(gt=2)),!1;var p=Error(o(520),{cause:l});if(p=pn(p,a),Bi===null?Bi=[p]:Bi.push(p),gt!==4&&(gt=2),n===null)return!0;l=pn(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Nu(a.stateNode,l,e),ru(a,e),!1;case 1:if(n=a.type,p=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(wa===null||!wa.has(p))))return a.flags|=65536,c&=-c,a.lanes|=c,c=om(c),sm(c,e,a,l),ru(a,c),!1}a=a.return}while(a!==null);return!1}var Tu=Error(o(461)),wt=!1;function Ot(e,n,a,l){n.child=e===null?fp(n,null,a,l):Qa(n,e.child,a,l)}function um(e,n,a,l,c){a=a.render;var p=n.ref;if("ref"in l){var y={};for(var E in l)E!=="ref"&&(y[E]=l[E])}else y=l;return Ga(n),l=cu(e,n,a,y,p,c),E=du(),e!==null&&!wt?(fu(e,n,c),Vn(e,n,c)):(Xe&&E&&Ys(n),n.flags|=1,Ot(e,n,l,c),n.child)}function cm(e,n,a,l,c){if(e===null){var p=a.type;return typeof p=="function"&&!Fs(p)&&p.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=p,dm(e,n,p,l,c)):(e=Ul(a.type,null,l,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,!Lu(e,c)){var y=p.memoizedProps;if(a=a.compare,a=a!==null?a:gi,a(y,l)&&e.ref===n.ref)return Vn(e,n,c)}return n.flags|=1,e=Hn(p,l),e.ref=n.ref,e.return=n,n.child=e}function dm(e,n,a,l,c){if(e!==null){var p=e.memoizedProps;if(gi(p,l)&&e.ref===n.ref)if(wt=!1,n.pendingProps=l=p,Lu(e,c))(e.flags&131072)!==0&&(wt=!0);else return n.lanes=e.lanes,Vn(e,n,c)}return zu(e,n,a,l,c)}function fm(e,n,a,l){var c=l.children,p=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|a:a,e!==null){for(l=n.child=e.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;l=c&~p}else l=0,n.child=null;return pm(e,n,p,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ql(n,p!==null?p.cachePool:null),p!==null?hp(n,p):lu(),gp(n);else return l=n.lanes=536870912,pm(e,n,p!==null?p.baseLanes|a:a,a,l)}else p!==null?(ql(n,p.cachePool),hp(n,p),ba(),n.memoizedState=null):(e!==null&&ql(n,null),lu(),ba());return Ot(e,n,c,a),n.child}function Oi(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function pm(e,n,a,l,c){var p=eu();return p=p===null?null:{parent:yt._currentValue,pool:p},n.memoizedState={baseLanes:a,cachePool:p},e!==null&&ql(n,null),lu(),gp(n),e!==null&&_r(e,n,l,!0),n.childLanes=c,null}function io(e,n){return n=oo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function mm(e,n,a){return Qa(n,e.child,null,a),e=io(n,n.pendingProps),e.flags|=2,en(n),n.memoizedState=null,e}function Zv(e,n,a){var l=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Xe){if(l.mode==="hidden")return e=io(n,l),n.lanes=536870912,Oi(null,e);if(su(n),(e=ut)?(e=Ah(e,gn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Nn,overflow:Tn}:null,retryLane:536870912,hydrationErrors:null},a=Kf(e),a.return=n,n.child=a,Tt=n,ut=null)):e=null,e===null)throw da(n);return n.lanes=536870912,null}return io(n,l)}var p=e.memoizedState;if(p!==null){var y=p.dehydrated;if(su(n),c)if(n.flags&256)n.flags&=-257,n=mm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(o(558));else if(wt||_r(e,n,a,!1),c=(a&e.childLanes)!==0,wt||c){if(l=lt,l!==null&&(y=af(l,a),y!==0&&y!==p.retryLane))throw p.retryLane=y,Fa(e,y),Gt(l,e,y),Tu;bo(),n=mm(e,n,a)}else e=p.treeContext,ut=vn(y.nextSibling),Tt=n,Xe=!0,ca=null,gn=!1,e!==null&&ep(n,e),n=io(n,l),n.flags|=4096;return n}return e=Hn(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function lo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function zu(e,n,a,l,c){return Ga(n),a=cu(e,n,a,l,void 0,c),l=du(),e!==null&&!wt?(fu(e,n,c),Vn(e,n,c)):(Xe&&l&&Ys(n),n.flags|=1,Ot(e,n,a,c),n.child)}function hm(e,n,a,l,c,p){return Ga(n),n.updateQueue=null,a=vp(n,l,a,c),bp(e),l=du(),e!==null&&!wt?(fu(e,n,p),Vn(e,n,p)):(Xe&&l&&Ys(n),n.flags|=1,Ot(e,n,a,p),n.child)}function gm(e,n,a,l,c){if(Ga(n),n.stateNode===null){var p=xr,y=a.contextType;typeof y=="object"&&y!==null&&(p=zt(y)),p=new a(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Eu,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},nu(n),y=a.contextType,p.context=typeof y=="object"&&y!==null?zt(y):xr,p.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Au(n,a,y,l),p.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(y=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),y!==p.state&&Eu.enqueueReplaceState(p,p.state,null),Ai(n,l,p,c),Ci(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){p=n.stateNode;var E=n.memoizedProps,I=Ja(a,E);p.props=I;var K=p.context,se=a.contextType;y=xr,typeof se=="object"&&se!==null&&(y=zt(se));var pe=a.getDerivedStateFromProps;se=typeof pe=="function"||typeof p.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,se||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E||K!==y)&&nm(n,p,l,y),pa=!1;var ee=n.memoizedState;p.state=ee,Ai(n,l,p,c),Ci(),K=n.memoizedState,E||ee!==K||pa?(typeof pe=="function"&&(Au(n,a,pe,l),K=n.memoizedState),(I=pa||tm(n,a,I,l,ee,K,y))?(se||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=K),p.props=l,p.state=K,p.context=y,l=I):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,au(e,n),y=n.memoizedProps,se=Ja(a,y),p.props=se,pe=n.pendingProps,ee=p.context,K=a.contextType,I=xr,typeof K=="object"&&K!==null&&(I=zt(K)),E=a.getDerivedStateFromProps,(K=typeof E=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==pe||ee!==I)&&nm(n,p,l,I),pa=!1,ee=n.memoizedState,p.state=ee,Ai(n,l,p,c),Ci();var re=n.memoizedState;y!==pe||ee!==re||pa||e!==null&&e.dependencies!==null&&Hl(e.dependencies)?(typeof E=="function"&&(Au(n,a,E,l),re=n.memoizedState),(se=pa||tm(n,a,se,l,ee,re,I)||e!==null&&e.dependencies!==null&&Hl(e.dependencies))?(K||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,re,I),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,re,I)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=re),p.props=l,p.state=re,p.context=I,l=se):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),l=!1)}return p=l,lo(e,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,e!==null&&l?(n.child=Qa(n,e.child,null,c),n.child=Qa(n,null,a,c)):Ot(e,n,a,c),n.memoizedState=p.state,e=n.child):e=Vn(e,n,c),e}function bm(e,n,a,l){return Pa(),n.flags|=256,Ot(e,n,a,l),n.child}var Ou={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $u(e){return{baseLanes:e,cachePool:lp()}}function ju(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=nn),e}function vm(e,n,a){var l=n.pendingProps,c=!1,p=(n.flags&128)!==0,y;if((y=p)||(y=e!==null&&e.memoizedState===null?!1:(bt.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Xe){if(c?ga(n):ba(),(e=ut)?(e=Ah(e,gn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Nn,overflow:Tn}:null,retryLane:536870912,hydrationErrors:null},a=Kf(e),a.return=n,n.child=a,Tt=n,ut=null)):e=null,e===null)throw da(n);return hc(e)?n.lanes=32:n.lanes=536870912,null}var E=l.children;return l=l.fallback,c?(ba(),c=n.mode,E=oo({mode:"hidden",children:E},c),l=qa(l,c,a,null),E.return=n,l.return=n,E.sibling=l,n.child=E,l=n.child,l.memoizedState=$u(a),l.childLanes=ju(e,y,a),n.memoizedState=Ou,Oi(null,l)):(ga(n),Mu(n,E))}var I=e.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(p)n.flags&256?(ga(n),n.flags&=-257,n=Du(e,n,a)):n.memoizedState!==null?(ba(),n.child=e.child,n.flags|=128,n=null):(ba(),E=l.fallback,c=n.mode,l=oo({mode:"visible",children:l.children},c),E=qa(E,c,a,null),E.flags|=2,l.return=n,E.return=n,l.sibling=E,n.child=l,Qa(n,e.child,null,a),l=n.child,l.memoizedState=$u(a),l.childLanes=ju(e,y,a),n.memoizedState=Ou,n=Oi(null,l));else if(ga(n),hc(E)){if(y=E.nextSibling&&E.nextSibling.dataset,y)var K=y.dgst;y=K,l=Error(o(419)),l.stack="",l.digest=y,yi({value:l,source:null,stack:null}),n=Du(e,n,a)}else if(wt||_r(e,n,a,!1),y=(a&e.childLanes)!==0,wt||y){if(y=lt,y!==null&&(l=af(y,a),l!==0&&l!==I.retryLane))throw I.retryLane=l,Fa(e,l),Gt(y,e,l),Tu;mc(E)||bo(),n=Du(e,n,a)}else mc(E)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,ut=vn(E.nextSibling),Tt=n,Xe=!0,ca=null,gn=!1,e!==null&&ep(n,e),n=Mu(n,l.children),n.flags|=4096);return n}return c?(ba(),E=l.fallback,c=n.mode,I=e.child,K=I.sibling,l=Hn(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,K!==null?E=Hn(K,E):(E=qa(E,c,a,null),E.flags|=2),E.return=n,l.return=n,l.sibling=E,n.child=l,Oi(null,l),l=n.child,E=e.child.memoizedState,E===null?E=$u(a):(c=E.cachePool,c!==null?(I=yt._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=lp(),E={baseLanes:E.baseLanes|a,cachePool:c}),l.memoizedState=E,l.childLanes=ju(e,y,a),n.memoizedState=Ou,Oi(e.child,l)):(ga(n),a=e.child,e=a.sibling,a=Hn(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Mu(e,n){return n=oo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function oo(e,n){return e=Jt(22,e,null,n),e.lanes=0,e}function Du(e,n,a){return Qa(n,e.child,null,a),e=Mu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ym(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Qs(e.return,n,a)}function Ru(e,n,a,l,c,p){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:c,treeForkCount:p}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=a,y.tailMode=c,y.treeForkCount=p)}function xm(e,n,a){var l=n.pendingProps,c=l.revealOrder,p=l.tail;l=l.children;var y=bt.current,E=(y&2)!==0;if(E?(y=y&1|2,n.flags|=128):y&=1,T(bt,y),Ot(e,n,l,a),l=Xe?vi:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ym(e,a,n);else if(e.tag===19)ym(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Zl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ru(n,!1,c,a,p,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Zl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Ru(n,!0,a,null,p,l);break;case"together":Ru(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Vn(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(_r(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,a=Hn(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hn(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Hl(e)))}function Qv(e,n,a){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),fa(n,yt,e.memoizedState.cache),Pa();break;case 27:case 5:Ke(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,su(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?vm(e,n,a):(ga(n),e=Vn(e,n,a),e!==null?e.sibling:null);ga(n);break;case 19:var c=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(_r(e,n,a,!1),l=(a&n.childLanes)!==0),c){if(l)return xm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),T(bt,bt.current),l)break;return null;case 22:return n.lanes=0,fm(e,n,a,n.pendingProps);case 24:fa(n,yt,e.memoizedState.cache)}return Vn(e,n,a)}function wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)wt=!0;else{if(!Lu(e,a)&&(n.flags&128)===0)return wt=!1,Qv(e,n,a);wt=(e.flags&131072)!==0}else wt=!1,Xe&&(n.flags&1048576)!==0&&Wf(n,vi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=Xa(n.elementType),n.type=e,typeof e=="function")Fs(e)?(l=Ja(e,l),n.tag=1,n=gm(null,n,e,l,a)):(n.tag=0,n=zu(null,n,e,l,a));else{if(e!=null){var c=e.$$typeof;if(c===U){n.tag=11,n=um(null,n,e,l,a);break e}else if(c===q){n.tag=14,n=cm(null,n,e,l,a);break e}}throw n=S(e)||e,Error(o(306,n,""))}}return n;case 0:return zu(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,c=Ja(l,n.pendingProps),gm(e,n,l,c,a);case 3:e:{if(Ne(n,n.stateNode.containerInfo),e===null)throw Error(o(387));l=n.pendingProps;var p=n.memoizedState;c=p.element,au(e,n),Ai(n,l,null,a);var y=n.memoizedState;if(l=y.cache,fa(n,yt,l),l!==p.cache&&Ks(n,[yt],a,!0),Ci(),l=y.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=bm(e,n,l,a);break e}else if(l!==c){c=pn(Error(o(424)),n),yi(c),n=bm(e,n,l,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ut=vn(e.firstChild),Tt=n,Xe=!0,ca=null,gn=!0,a=fp(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Pa(),l===c){n=Vn(e,n,a);break e}Ot(e,n,l,a)}n=n.child}return n;case 26:return lo(e,n),e===null?(a=$h(n.type,null,n.pendingProps,null))?n.memoizedState=a:Xe||(a=n.type,e=n.pendingProps,l=_o(_e.current).createElement(a),l[Nt]=n,l[It]=e,$t(l,a,e),At(l),n.stateNode=l):n.memoizedState=$h(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ke(n),e===null&&Xe&&(l=n.stateNode=Th(n.type,n.pendingProps,_e.current),Tt=n,gn=!0,c=ut,Ca(n.type)?(gc=c,ut=vn(l.firstChild)):ut=c),Ot(e,n,n.pendingProps.children,a),lo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Xe&&((c=l=ut)&&(l=Ay(l,n.type,n.pendingProps,gn),l!==null?(n.stateNode=l,Tt=n,ut=vn(l.firstChild),gn=!1,c=!0):c=!1),c||da(n)),Ke(n),c=n.type,p=n.pendingProps,y=e!==null?e.memoizedProps:null,l=p.children,dc(c,p)?l=null:y!==null&&dc(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=cu(e,n,Hv,null,null,a),Gi._currentValue=c),lo(e,n),Ot(e,n,l,a),n.child;case 6:return e===null&&Xe&&((e=a=ut)&&(a=Ey(a,n.pendingProps,gn),a!==null?(n.stateNode=a,Tt=n,ut=null,e=!0):e=!1),e||da(n)),null;case 13:return vm(e,n,a);case 4:return Ne(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Qa(n,null,l,a):Ot(e,n,l,a),n.child;case 11:return um(e,n,n.type,n.pendingProps,a);case 7:return Ot(e,n,n.pendingProps,a),n.child;case 8:return Ot(e,n,n.pendingProps.children,a),n.child;case 12:return Ot(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,fa(n,n.type,l.value),Ot(e,n,l.children,a),n.child;case 9:return c=n.type._context,l=n.pendingProps.children,Ga(n),c=zt(c),l=l(c),n.flags|=1,Ot(e,n,l,a),n.child;case 14:return cm(e,n,n.type,n.pendingProps,a);case 15:return dm(e,n,n.type,n.pendingProps,a);case 19:return xm(e,n,a);case 31:return Zv(e,n,a);case 22:return fm(e,n,a,n.pendingProps);case 24:return Ga(n),l=zt(yt),e===null?(c=eu(),c===null&&(c=lt,p=Js(),c.pooledCache=p,p.refCount++,p!==null&&(c.pooledCacheLanes|=a),c=p),n.memoizedState={parent:l,cache:c},nu(n),fa(n,yt,c)):((e.lanes&a)!==0&&(au(e,n),Ai(n,null,null,a),Ci()),c=e.memoizedState,p=n.memoizedState,c.parent!==l?(c={parent:l,cache:l},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,yt,l)):(l=p.cache,fa(n,yt,l),l!==c.cache&&Ks(n,[yt],a,!0))),Ot(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function Xn(e){e.flags|=4}function Bu(e,n,a,l,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Xm())e.flags|=8192;else throw Za=Yl,tu}else e.flags&=-16777217}function km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lh(n))if(Xm())e.flags|=8192;else throw Za=Yl,tu}function so(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ef():536870912,e.lanes|=n,Rr|=n)}function $i(e,n){if(!Xe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ct(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function Kv(e,n,a){var l=n.pendingProps;switch(Gs(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(n),null;case 1:return ct(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Pn(yt),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Sr(n)?Xn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xs())),ct(n),null;case 26:var c=n.type,p=n.memoizedState;return e===null?(Xn(n),p!==null?(ct(n),km(n,p)):(ct(n),Bu(n,c,null,l,a))):p?p!==e.memoizedState?(Xn(n),ct(n),km(n,p)):(ct(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&Xn(n),ct(n),Bu(n,c,e,l,a)),null;case 27:if(Je(n),a=_e.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Xn(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return ct(n),null}e=ne.current,Sr(n)?tp(n):(e=Th(c,l,a),n.stateNode=e,Xn(n))}return ct(n),null;case 5:if(Je(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Xn(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return ct(n),null}if(p=ne.current,Sr(n))tp(n);else{var y=_o(_e.current);switch(p){case 1:p=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:p=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":p=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":p=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":p=y.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?y.createElement(c,{is:l.is}):y.createElement(c)}}p[Nt]=n,p[It]=l;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)p.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=p;e:switch($t(p,c,l),c){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Xn(n)}}return ct(n),Bu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Xn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(o(166));if(e=_e.current,Sr(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,c=Tt,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}e[Nt]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||vh(e.nodeValue,a)),e||da(n,!0)}else e=_o(e).createTextNode(l),e[Nt]=n,n.stateNode=e}return ct(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(l=Sr(n),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Nt]=n}else Pa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ct(n),e=!1}else a=Xs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(en(n),n):(en(n),null);if((n.flags&128)!==0)throw Error(o(558))}return ct(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Sr(n),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[Nt]=n}else Pa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ct(n),c=!1}else c=Xs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(en(n),n):(en(n),null)}return en(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=n.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==c&&(l.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),so(n,n.updateQueue),ct(n),null);case 4:return Te(),e===null&&lc(n.stateNode.containerInfo),ct(n),null;case 10:return Pn(n.type),ct(n),null;case 19:if(M(bt),l=n.memoizedState,l===null)return ct(n),null;if(c=(n.flags&128)!==0,p=l.rendering,p===null)if(c)$i(l,!1);else{if(gt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(p=Zl(e),p!==null){for(n.flags|=128,$i(l,!1),e=p.updateQueue,n.updateQueue=e,so(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Qf(a,e),a=a.sibling;return T(bt,bt.current&1|2),Xe&&Fn(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&Se()>mo&&(n.flags|=128,c=!0,$i(l,!1),n.lanes=4194304)}else{if(!c)if(e=Zl(p),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,so(n,e),$i(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Xe)return ct(n),null}else 2*Se()-l.renderingStartTime>mo&&a!==536870912&&(n.flags|=128,c=!0,$i(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(e=l.last,e!==null?e.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Se(),e.sibling=null,a=bt.current,T(bt,c?a&1|2:a&1),Xe&&Fn(n,l.treeForkCount),e):(ct(n),null);case 22:case 23:return en(n),ou(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(ct(n),n.subtreeFlags&6&&(n.flags|=8192)):ct(n),a=n.updateQueue,a!==null&&so(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&M(Va),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Pn(yt),ct(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function Jv(e,n){switch(Gs(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Pn(yt),Te(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(en(n),n.alternate===null)throw Error(o(340));Pa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(en(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Pa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return M(bt),null;case 4:return Te(),null;case 10:return Pn(n.type),null;case 22:case 23:return en(n),ou(),e!==null&&M(Va),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Pn(yt),null;case 25:return null;default:return null}}function Sm(e,n){switch(Gs(n),n.tag){case 3:Pn(yt),Te();break;case 26:case 27:case 5:Je(n);break;case 4:Te();break;case 31:n.memoizedState!==null&&en(n);break;case 13:en(n);break;case 19:M(bt);break;case 10:Pn(n.type);break;case 22:case 23:en(n),ou(),e!==null&&M(Va);break;case 24:Pn(yt)}}function ji(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&e)===e){l=void 0;var p=a.create,y=a.inst;l=p(),y.destroy=l}a=a.next}while(a!==c)}}catch(E){nt(n,n.return,E)}}function va(e,n,a){try{var l=n.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var p=c.next;l=p;do{if((l.tag&e)===e){var y=l.inst,E=y.destroy;if(E!==void 0){y.destroy=void 0,c=n;var I=a,K=E;try{K()}catch(se){nt(c,I,se)}}}l=l.next}while(l!==p)}}catch(se){nt(n,n.return,se)}}function _m(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{mp(n,a)}catch(l){nt(e,e.return,l)}}}function Cm(e,n,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){nt(e,n,l)}}function Mi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(c){nt(e,n,c)}}function zn(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(c){nt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){nt(e,n,c)}else a.current=null}function Am(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(c){nt(e,e.return,c)}}function Uu(e,n,a){try{var l=e.stateNode;xy(l,e.type,a,n),l[It]=n}catch(c){nt(e,e.return,c)}}function Em(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Em(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Un));else if(l!==4&&(l===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Hu(e,n,a),e=e.sibling;e!==null;)Hu(e,n,a),e=e.sibling}function uo(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(uo(e,n,a),e=e.sibling;e!==null;)uo(e,n,a),e=e.sibling}function Nm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);$t(n,l,a),n[Nt]=e,n[It]=a}catch(p){nt(e,e.return,p)}}var Zn=!1,kt=!1,Fu=!1,Tm=typeof WeakSet=="function"?WeakSet:Set,Et=null;function Wv(e,n){if(e=e.containerInfo,uc=Oo,e=Hf(e),Ds(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var y=0,E=-1,I=-1,K=0,se=0,pe=e,ee=null;t:for(;;){for(var re;pe!==a||c!==0&&pe.nodeType!==3||(E=y+c),pe!==p||l!==0&&pe.nodeType!==3||(I=y+l),pe.nodeType===3&&(y+=pe.nodeValue.length),(re=pe.firstChild)!==null;)ee=pe,pe=re;for(;;){if(pe===e)break t;if(ee===a&&++K===c&&(E=y),ee===p&&++se===l&&(I=y),(re=pe.nextSibling)!==null)break;pe=ee,ee=pe.parentNode}pe=re}a=E===-1||I===-1?null:{start:E,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(cc={focusedElem:e,selectionRange:a},Oo=!1,Et=n;Et!==null;)if(n=Et,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Et=e;else for(;Et!==null;){switch(n=Et,p=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,a=n,c=p.memoizedProps,p=p.memoizedState,l=a.stateNode;try{var Ce=Ja(a.type,c);e=l.getSnapshotBeforeUpdate(Ce,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(je){nt(a,a.return,je)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)pc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=n.sibling,e!==null){e.return=n.return,Et=e;break}Et=n.return}}function zm(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Kn(e,a),l&4&&ji(5,a);break;case 1:if(Kn(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){nt(a,a.return,y)}else{var c=Ja(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){nt(a,a.return,y)}}l&64&&_m(a),l&512&&Mi(a,a.return);break;case 3:if(Kn(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mp(e,n)}catch(y){nt(a,a.return,y)}}break;case 27:n===null&&l&4&&Nm(a);case 26:case 5:Kn(e,a),n===null&&l&4&&Am(a),l&512&&Mi(a,a.return);break;case 12:Kn(e,a);break;case 31:Kn(e,a),l&4&&jm(e,a);break;case 13:Kn(e,a),l&4&&Mm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sy.bind(null,a),Ny(e,a))));break;case 22:if(l=a.memoizedState!==null||Zn,!l){n=n!==null&&n.memoizedState!==null||kt,c=Zn;var p=kt;Zn=l,(kt=n)&&!p?Jn(e,a,(a.subtreeFlags&8772)!==0):Kn(e,a),Zn=c,kt=p}break;case 30:break;default:Kn(e,a)}}function Om(e){var n=e.alternate;n!==null&&(e.alternate=null,Om(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&vs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var mt=null,Ft=!1;function Qn(e,n,a){for(a=a.child;a!==null;)$m(e,n,a),a=a.sibling}function $m(e,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(He,a)}catch{}switch(a.tag){case 26:kt||zn(a,n),Qn(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:kt||zn(a,n);var l=mt,c=Ft;Ca(a.type)&&(mt=a.stateNode,Ft=!1),Qn(e,n,a),qi(a.stateNode),mt=l,Ft=c;break;case 5:kt||zn(a,n);case 6:if(l=mt,c=Ft,mt=null,Qn(e,n,a),mt=l,Ft=c,mt!==null)if(Ft)try{(mt.nodeType===9?mt.body:mt.nodeName==="HTML"?mt.ownerDocument.body:mt).removeChild(a.stateNode)}catch(p){nt(a,n,p)}else try{mt.removeChild(a.stateNode)}catch(p){nt(a,n,p)}break;case 18:mt!==null&&(Ft?(e=mt,_h(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Pr(e)):_h(mt,a.stateNode));break;case 4:l=mt,c=Ft,mt=a.stateNode.containerInfo,Ft=!0,Qn(e,n,a),mt=l,Ft=c;break;case 0:case 11:case 14:case 15:va(2,a,n),kt||va(4,a,n),Qn(e,n,a);break;case 1:kt||(zn(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Cm(a,n,l)),Qn(e,n,a);break;case 21:Qn(e,n,a);break;case 22:kt=(l=kt)||a.memoizedState!==null,Qn(e,n,a),kt=l;break;default:Qn(e,n,a)}}function jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pr(e)}catch(a){nt(n,n.return,a)}}}function Mm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pr(e)}catch(a){nt(n,n.return,a)}}function ey(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Tm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Tm),n;default:throw Error(o(435,e.tag))}}function co(e,n){var a=ey(e);n.forEach(function(l){if(!a.has(l)){a.add(l);var c=uy.bind(null,e,l);l.then(c,c)}})}function qt(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var c=a[l],p=e,y=n,E=y;e:for(;E!==null;){switch(E.tag){case 27:if(Ca(E.type)){mt=E.stateNode,Ft=!1;break e}break;case 5:mt=E.stateNode,Ft=!1;break e;case 3:case 4:mt=E.stateNode.containerInfo,Ft=!0;break e}E=E.return}if(mt===null)throw Error(o(160));$m(p,y,c),mt=null,Ft=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Dm(n,e),n=n.sibling}var Sn=null;function Dm(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qt(n,e),Pt(e),l&4&&(va(3,e,e.return),ji(3,e),va(5,e,e.return));break;case 1:qt(n,e),Pt(e),l&512&&(kt||a===null||zn(a,a.return)),l&64&&Zn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var c=Sn;if(qt(n,e),Pt(e),l&512&&(kt||a===null||zn(a,a.return)),l&4){var p=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":p=c.getElementsByTagName("title")[0],(!p||p[oi]||p[Nt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=c.createElement(l),c.head.insertBefore(p,c.querySelector("head > title"))),$t(p,l,a),p[Nt]=e,At(p),l=p;break e;case"link":var y=Dh("link","href",c).get(l+(a.href||""));if(y){for(var E=0;E<y.length;E++)if(p=y[E],p.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&p.getAttribute("rel")===(a.rel==null?null:a.rel)&&p.getAttribute("title")===(a.title==null?null:a.title)&&p.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(E,1);break t}}p=c.createElement(l),$t(p,l,a),c.head.appendChild(p);break;case"meta":if(y=Dh("meta","content",c).get(l+(a.content||""))){for(E=0;E<y.length;E++)if(p=y[E],p.getAttribute("content")===(a.content==null?null:""+a.content)&&p.getAttribute("name")===(a.name==null?null:a.name)&&p.getAttribute("property")===(a.property==null?null:a.property)&&p.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&p.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(E,1);break t}}p=c.createElement(l),$t(p,l,a),c.head.appendChild(p);break;default:throw Error(o(468,l))}p[Nt]=e,At(p),l=p}e.stateNode=l}else Rh(c,e.type,e.stateNode);else e.stateNode=Mh(c,l,e.memoizedProps);else p!==l?(p===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):p.count--,l===null?Rh(c,e.type,e.stateNode):Mh(c,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Uu(e,e.memoizedProps,a.memoizedProps)}break;case 27:qt(n,e),Pt(e),l&512&&(kt||a===null||zn(a,a.return)),a!==null&&l&4&&Uu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qt(n,e),Pt(e),l&512&&(kt||a===null||zn(a,a.return)),e.flags&32){c=e.stateNode;try{pr(c,"")}catch(Ce){nt(e,e.return,Ce)}}l&4&&e.stateNode!=null&&(c=e.memoizedProps,Uu(e,c,a!==null?a.memoizedProps:c)),l&1024&&(Fu=!0);break;case 6:if(qt(n,e),Pt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Ce){nt(e,e.return,Ce)}}break;case 3:if(Eo=null,c=Sn,Sn=Co(n.containerInfo),qt(n,e),Sn=c,Pt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Pr(n.containerInfo)}catch(Ce){nt(e,e.return,Ce)}Fu&&(Fu=!1,Rm(e));break;case 4:l=Sn,Sn=Co(e.stateNode.containerInfo),qt(n,e),Pt(e),Sn=l;break;case 12:qt(n,e),Pt(e);break;case 31:qt(n,e),Pt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,co(e,l)));break;case 13:qt(n,e),Pt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(po=Se()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,co(e,l)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,K=Zn,se=kt;if(Zn=K||c,kt=se||I,qt(n,e),kt=se,Zn=K,Pt(e),l&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Zn||kt||Wa(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(p=I.stateNode,c)y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{E=I.stateNode;var pe=I.memoizedProps.style,ee=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;E.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Ce){nt(I,I.return,Ce)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Ce){nt(I,I.return,Ce)}}}else if(n.tag===18){if(a===null){I=n;try{var re=I.stateNode;c?Ch(re,!0):Ch(I.stateNode,!1)}catch(Ce){nt(I,I.return,Ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,co(e,a))));break;case 19:qt(n,e),Pt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,co(e,l)));break;case 30:break;case 21:break;default:qt(n,e),Pt(e)}}function Pt(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(Em(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var c=a.stateNode,p=Iu(e);uo(e,p,c);break;case 5:var y=a.stateNode;a.flags&32&&(pr(y,""),a.flags&=-33);var E=Iu(e);uo(e,E,y);break;case 3:case 4:var I=a.stateNode.containerInfo,K=Iu(e);Hu(e,K,I);break;default:throw Error(o(161))}}catch(se){nt(e,e.return,se)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Rm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Rm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Kn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zm(e,n.alternate,n),n=n.sibling}function Wa(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),Wa(n);break;case 1:zn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cm(n,n.return,a),Wa(n);break;case 27:qi(n.stateNode);case 26:case 5:zn(n,n.return),Wa(n);break;case 22:n.memoizedState===null&&Wa(n);break;case 30:Wa(n);break;default:Wa(n)}e=e.sibling}}function Jn(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,c=e,p=n,y=p.flags;switch(p.tag){case 0:case 11:case 15:Jn(c,p,a),ji(4,p);break;case 1:if(Jn(c,p,a),l=p,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(K){nt(l,l.return,K)}if(l=p,c=l.updateQueue,c!==null){var E=l.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)pp(I[c],E)}catch(K){nt(l,l.return,K)}}a&&y&64&&_m(p),Mi(p,p.return);break;case 27:Nm(p);case 26:case 5:Jn(c,p,a),a&&l===null&&y&4&&Am(p),Mi(p,p.return);break;case 12:Jn(c,p,a);break;case 31:Jn(c,p,a),a&&y&4&&jm(c,p);break;case 13:Jn(c,p,a),a&&y&4&&Mm(c,p);break;case 22:p.memoizedState===null&&Jn(c,p,a),Mi(p,p.return);break;case 30:break;default:Jn(c,p,a)}n=n.sibling}}function qu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&xi(a))}function Pu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xi(e))}function _n(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lm(e,n,a,l),n=n.sibling}function Lm(e,n,a,l){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_n(e,n,a,l),c&2048&&ji(9,n);break;case 1:_n(e,n,a,l);break;case 3:_n(e,n,a,l),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xi(e)));break;case 12:if(c&2048){_n(e,n,a,l),e=n.stateNode;try{var p=n.memoizedProps,y=p.id,E=p.onPostCommit;typeof E=="function"&&E(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){nt(n,n.return,I)}}else _n(e,n,a,l);break;case 31:_n(e,n,a,l);break;case 13:_n(e,n,a,l);break;case 23:break;case 22:p=n.stateNode,y=n.alternate,n.memoizedState!==null?p._visibility&2?_n(e,n,a,l):Di(e,n):p._visibility&2?_n(e,n,a,l):(p._visibility|=2,jr(e,n,a,l,(n.subtreeFlags&10256)!==0||!1)),c&2048&&qu(y,n);break;case 24:_n(e,n,a,l),c&2048&&Pu(n.alternate,n);break;default:_n(e,n,a,l)}}function jr(e,n,a,l,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=e,y=n,E=a,I=l,K=y.flags;switch(y.tag){case 0:case 11:case 15:jr(p,y,E,I,c),ji(8,y);break;case 23:break;case 22:var se=y.stateNode;y.memoizedState!==null?se._visibility&2?jr(p,y,E,I,c):Di(p,y):(se._visibility|=2,jr(p,y,E,I,c)),c&&K&2048&&qu(y.alternate,y);break;case 24:jr(p,y,E,I,c),c&&K&2048&&Pu(y.alternate,y);break;default:jr(p,y,E,I,c)}n=n.sibling}}function Di(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,c=l.flags;switch(l.tag){case 22:Di(a,l),c&2048&&qu(l.alternate,l);break;case 24:Di(a,l),c&2048&&Pu(l.alternate,l);break;default:Di(a,l)}n=n.sibling}}var Ri=8192;function Mr(e,n,a){if(e.subtreeFlags&Ri)for(e=e.child;e!==null;)Bm(e,n,a),e=e.sibling}function Bm(e,n,a){switch(e.tag){case 26:Mr(e,n,a),e.flags&Ri&&e.memoizedState!==null&&Iy(a,Sn,e.memoizedState,e.memoizedProps);break;case 5:Mr(e,n,a);break;case 3:case 4:var l=Sn;Sn=Co(e.stateNode.containerInfo),Mr(e,n,a),Sn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ri,Ri=16777216,Mr(e,n,a),Ri=l):Mr(e,n,a));break;default:Mr(e,n,a)}}function Um(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Li(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Et=l,Hm(l,e)}Um(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Im(e),e=e.sibling}function Im(e){switch(e.tag){case 0:case 11:case 15:Li(e),e.flags&2048&&va(9,e,e.return);break;case 3:Li(e);break;case 12:Li(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,fo(e)):Li(e);break;default:Li(e)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Et=l,Hm(l,e)}Um(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),fo(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,fo(n));break;default:fo(n)}e=e.sibling}}function Hm(e,n){for(;Et!==null;){var a=Et;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:xi(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Et=l;else e:for(a=e;Et!==null;){l=Et;var c=l.sibling,p=l.return;if(Om(l),l===a){Et=null;break e}if(c!==null){c.return=p,Et=c;break e}Et=p}}}var ty={getCacheForType:function(e){var n=zt(yt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return zt(yt).controller.signal}},ny=typeof WeakMap=="function"?WeakMap:Map,We=0,lt=null,qe=null,Ge=0,tt=0,tn=null,ya=!1,Dr=!1,Yu=!1,Wn=0,gt=0,xa=0,er=0,Gu=0,nn=0,Rr=0,Bi=null,Yt=null,Vu=!1,po=0,Fm=0,mo=1/0,ho=null,wa=null,_t=0,ka=null,Lr=null,ea=0,Xu=0,Zu=null,qm=null,Ui=0,Qu=null;function an(){return(We&2)!==0&&Ge!==0?Ge&-Ge:F.T!==null?nc():rf()}function Pm(){if(nn===0)if((Ge&536870912)===0||Xe){var e=La;La<<=1,(La&3932160)===0&&(La=262144),nn=e}else nn=536870912;return e=Wt.current,e!==null&&(e.flags|=32),nn}function Gt(e,n,a){(e===lt&&(tt===2||tt===9)||e.cancelPendingCommit!==null)&&(Br(e,0),Sa(e,Ge,nn,!1)),li(e,a),((We&2)===0||e!==lt)&&(e===lt&&((We&2)===0&&(er|=a),gt===4&&Sa(e,Ge,nn,!1)),On(e))}function Ym(e,n,a){if((We&6)!==0)throw Error(o(327));var l=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ii(e,n),c=l?iy(e,n):Ju(e,n,!0),p=l;do{if(c===0){Dr&&!l&&Sa(e,n,0,!1);break}else{if(a=e.current.alternate,p&&!ay(a)){c=Ju(e,n,!1),p=!1;continue}if(c===2){if(p=n,e.errorRecoveryDisabledLanes&p)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var E=e;c=Bi;var I=E.current.memoizedState.isDehydrated;if(I&&(Br(E,y).flags|=256),y=Ju(E,y,!1),y!==2){if(Yu&&!I){E.errorRecoveryDisabledLanes|=p,er|=p,c=4;break e}p=Yt,Yt=c,p!==null&&(Yt===null?Yt=p:Yt.push.apply(Yt,p))}c=y}if(p=!1,c!==2)continue}}if(c===1){Br(e,0),Sa(e,n,0,!0);break}e:{switch(l=e,p=c,p){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Sa(l,n,nn,!ya);break e;case 2:Yt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(c=po+300-Se(),10<c)){if(Sa(l,n,nn,!ya),_l(l,0,!0)!==0)break e;ea=n,l.timeoutHandle=kh(Gm.bind(null,l,a,Yt,ho,Vu,n,nn,er,Rr,ya,p,"Throttled",-0,0),c);break e}Gm(l,a,Yt,ho,Vu,n,nn,er,Rr,ya,p,null,-0,0)}}break}while(!0);On(e)}function Gm(e,n,a,l,c,p,y,E,I,K,se,pe,ee,re){if(e.timeoutHandle=-1,pe=n.subtreeFlags,pe&8192||(pe&16785408)===16785408){pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Un},Bm(n,p,pe);var Ce=(p&62914560)===p?po-Se():(p&4194048)===p?Fm-Se():0;if(Ce=Hy(pe,Ce),Ce!==null){ea=p,e.cancelPendingCommit=Ce(eh.bind(null,e,n,p,a,l,c,y,E,I,se,pe,null,ee,re)),Sa(e,p,y,!K);return}}eh(e,n,p,a,l,c,y,E,I)}function ay(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var c=a[l],p=c.getSnapshot;c=c.value;try{if(!Kt(p(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sa(e,n,a,l){n&=~Gu,n&=~er,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var c=n;0<c;){var p=31-Fe(c),y=1<<p;l[p]=-1,c&=~y}a!==0&&tf(e,a,n)}function go(){return(We&6)===0?(Ii(0),!1):!0}function Ku(){if(qe!==null){if(tt===0)var e=qe.return;else e=qe,qn=Ya=null,pu(e),Nr=null,ki=0,e=qe;for(;e!==null;)Sm(e.alternate,e),e=e.return;qe=null}}function Br(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Sy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Ku(),lt=e,qe=a=Hn(e.current,null),Ge=n,tt=0,tn=null,ya=!1,Dr=ii(e,n),Yu=!1,Rr=nn=Gu=er=xa=gt=0,Yt=Bi=null,Vu=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var c=31-Fe(l),p=1<<c;n|=e[c],l&=~p}return Wn=n,Rl(),a}function Vm(e,n){Be=null,F.H=zi,n===Er||n===Pl?(n=up(),tt=3):n===tu?(n=up(),tt=4):tt=n===Tu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,tn=n,qe===null&&(gt=1,ro(e,pn(n,e.current)))}function Xm(){var e=Wt.current;return e===null?!0:(Ge&4194048)===Ge?bn===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?e===bn:!1}function Zm(){var e=F.H;return F.H=zi,e===null?zi:e}function Qm(){var e=F.A;return F.A=ty,e}function bo(){gt=4,ya||(Ge&4194048)!==Ge&&Wt.current!==null||(Dr=!0),(xa&134217727)===0&&(er&134217727)===0||lt===null||Sa(lt,Ge,nn,!1)}function Ju(e,n,a){var l=We;We|=2;var c=Zm(),p=Qm();(lt!==e||Ge!==n)&&(ho=null,Br(e,n)),n=!1;var y=gt;e:do try{if(tt!==0&&qe!==null){var E=qe,I=tn;switch(tt){case 8:Ku(),y=6;break e;case 3:case 2:case 9:case 6:Wt.current===null&&(n=!0);var K=tt;if(tt=0,tn=null,Ur(e,E,I,K),a&&Dr){y=0;break e}break;default:K=tt,tt=0,tn=null,Ur(e,E,I,K)}}ry(),y=gt;break}catch(se){Vm(e,se)}while(!0);return n&&e.shellSuspendCounter++,qn=Ya=null,We=l,F.H=c,F.A=p,qe===null&&(lt=null,Ge=0,Rl()),y}function ry(){for(;qe!==null;)Km(qe)}function iy(e,n){var a=We;We|=2;var l=Zm(),c=Qm();lt!==e||Ge!==n?(ho=null,mo=Se()+500,Br(e,n)):Dr=ii(e,n);e:do try{if(tt!==0&&qe!==null){n=qe;var p=tn;t:switch(tt){case 1:tt=0,tn=null,Ur(e,n,p,1);break;case 2:case 9:if(op(p)){tt=0,tn=null,Jm(n);break}n=function(){tt!==2&&tt!==9||lt!==e||(tt=7),On(e)},p.then(n,n);break e;case 3:tt=7;break e;case 4:tt=5;break e;case 7:op(p)?(tt=0,tn=null,Jm(n)):(tt=0,tn=null,Ur(e,n,p,7));break;case 5:var y=null;switch(qe.tag){case 26:y=qe.memoizedState;case 5:case 27:var E=qe;if(y?Lh(y):E.stateNode.complete){tt=0,tn=null;var I=E.sibling;if(I!==null)qe=I;else{var K=E.return;K!==null?(qe=K,vo(K)):qe=null}break t}}tt=0,tn=null,Ur(e,n,p,5);break;case 6:tt=0,tn=null,Ur(e,n,p,6);break;case 8:Ku(),gt=6;break e;default:throw Error(o(462))}}ly();break}catch(se){Vm(e,se)}while(!0);return qn=Ya=null,F.H=l,F.A=c,We=a,qe!==null?0:(lt=null,Ge=0,Rl(),gt)}function ly(){for(;qe!==null&&!W();)Km(qe)}function Km(e){var n=wm(e.alternate,e,Wn);e.memoizedProps=e.pendingProps,n===null?vo(e):qe=n}function Jm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=hm(a,n,n.pendingProps,n.type,void 0,Ge);break;case 11:n=hm(a,n,n.pendingProps,n.type.render,n.ref,Ge);break;case 5:pu(n);default:Sm(a,n),n=qe=Qf(n,Wn),n=wm(a,n,Wn)}e.memoizedProps=e.pendingProps,n===null?vo(e):qe=n}function Ur(e,n,a,l){qn=Ya=null,pu(n),Nr=null,ki=0;var c=n.return;try{if(Xv(e,c,n,a,Ge)){gt=1,ro(e,pn(a,e.current)),qe=null;return}}catch(p){if(c!==null)throw qe=c,p;gt=1,ro(e,pn(a,e.current)),qe=null;return}n.flags&32768?(Xe||l===1?e=!0:Dr||(Ge&536870912)!==0?e=!1:(ya=e=!0,(l===2||l===9||l===3||l===6)&&(l=Wt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Wm(n,e)):vo(n)}function vo(e){var n=e;do{if((n.flags&32768)!==0){Wm(n,ya);return}e=n.return;var a=Kv(n.alternate,n,Wn);if(a!==null){qe=a;return}if(n=n.sibling,n!==null){qe=n;return}qe=n=e}while(n!==null);gt===0&&(gt=5)}function Wm(e,n){do{var a=Jv(e.alternate,e);if(a!==null){a.flags&=32767,qe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){qe=e;return}qe=e=a}while(e!==null);gt=6,qe=null}function eh(e,n,a,l,c,p,y,E,I){e.cancelPendingCommit=null;do yo();while(_t!==0);if((We&6)!==0)throw Error(o(327));if(n!==null){if(n===e.current)throw Error(o(177));if(p=n.lanes|n.childLanes,p|=Is,U1(e,a,p,y,E,I),e===lt&&(qe=lt=null,Ge=0),Lr=n,ka=e,ea=a,Xu=p,Zu=c,qm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cy(ke,function(){return ih(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,c=Y.p,Y.p=2,y=We,We|=4;try{Wv(e,n,a)}finally{We=y,Y.p=c,F.T=l}}_t=1,th(),nh(),ah()}}function th(){if(_t===1){_t=0;var e=ka,n=Lr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=Y.p;Y.p=2;var c=We;We|=4;try{Dm(n,e);var p=cc,y=Hf(e.containerInfo),E=p.focusedElem,I=p.selectionRange;if(y!==E&&E&&E.ownerDocument&&If(E.ownerDocument.documentElement,E)){if(I!==null&&Ds(E)){var K=I.start,se=I.end;if(se===void 0&&(se=K),"selectionStart"in E)E.selectionStart=K,E.selectionEnd=Math.min(se,E.value.length);else{var pe=E.ownerDocument||document,ee=pe&&pe.defaultView||window;if(ee.getSelection){var re=ee.getSelection(),Ce=E.textContent.length,je=Math.min(I.start,Ce),it=I.end===void 0?je:Math.min(I.end,Ce);!re.extend&&je>it&&(y=it,it=je,je=y);var X=Uf(E,je),P=Uf(E,it);if(X&&P&&(re.rangeCount!==1||re.anchorNode!==X.node||re.anchorOffset!==X.offset||re.focusNode!==P.node||re.focusOffset!==P.offset)){var Q=pe.createRange();Q.setStart(X.node,X.offset),re.removeAllRanges(),je>it?(re.addRange(Q),re.extend(P.node,P.offset)):(Q.setEnd(P.node,P.offset),re.addRange(Q))}}}}for(pe=[],re=E;re=re.parentNode;)re.nodeType===1&&pe.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pe.length;E++){var de=pe[E];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}Oo=!!uc,cc=uc=null}finally{We=c,Y.p=l,F.T=a}}e.current=n,_t=2}}function nh(){if(_t===2){_t=0;var e=ka,n=Lr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=Y.p;Y.p=2;var c=We;We|=4;try{zm(e,n.alternate,n)}finally{We=c,Y.p=l,F.T=a}}_t=3}}function ah(){if(_t===4||_t===3){_t=0,ye();var e=ka,n=Lr,a=ea,l=qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_t=5:(_t=0,Lr=ka=null,rh(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(wa=null),gs(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(He,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=F.T,c=Y.p,Y.p=2,F.T=null;try{for(var p=e.onRecoverableError,y=0;y<l.length;y++){var E=l[y];p(E.value,{componentStack:E.stack})}}finally{F.T=n,Y.p=c}}(ea&3)!==0&&yo(),On(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Qu?Ui++:(Ui=0,Qu=e):Ui=0,Ii(0)}}function rh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,xi(n)))}function yo(){return th(),nh(),ah(),ih()}function ih(){if(_t!==5)return!1;var e=ka,n=Xu;Xu=0;var a=gs(ea),l=F.T,c=Y.p;try{Y.p=32>a?32:a,F.T=null,a=Zu,Zu=null;var p=ka,y=ea;if(_t=0,Lr=ka=null,ea=0,(We&6)!==0)throw Error(o(331));var E=We;if(We|=4,Im(p.current),Lm(p,p.current,y,a),We=E,Ii(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(He,p)}catch{}return!0}finally{Y.p=c,F.T=l,rh(e,n)}}function lh(e,n,a){n=pn(a,n),n=Nu(e.stateNode,n,2),e=ha(e,n,2),e!==null&&(li(e,2),On(e))}function nt(e,n,a){if(e.tag===3)lh(e,e,a);else for(;n!==null;){if(n.tag===3){lh(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))){e=pn(a,e),a=om(2),l=ha(n,a,2),l!==null&&(sm(a,l,n,e),li(l,2),On(l));break}}n=n.return}}function Wu(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ny;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(a)||(Yu=!0,c.add(a),e=oy.bind(null,e,n,a),n.then(e,e))}function oy(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,lt===e&&(Ge&a)===a&&(gt===4||gt===3&&(Ge&62914560)===Ge&&300>Se()-po?(We&2)===0&&Br(e,0):Gu|=a,Rr===Ge&&(Rr=0)),On(e)}function oh(e,n){n===0&&(n=ef()),e=Fa(e,n),e!==null&&(li(e,n),On(e))}function sy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),oh(e,a)}function uy(e,n){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(n),oh(e,a)}function cy(e,n){return me(e,n)}var xo=null,Ir=null,ec=!1,wo=!1,tc=!1,_a=0;function On(e){e!==Ir&&e.next===null&&(Ir===null?xo=Ir=e:Ir=Ir.next=e),wo=!0,ec||(ec=!0,fy())}function Ii(e,n){if(!tc&&wo){tc=!0;do for(var a=!1,l=xo;l!==null;){if(e!==0){var c=l.pendingLanes;if(c===0)var p=0;else{var y=l.suspendedLanes,E=l.pingedLanes;p=(1<<31-Fe(42|e)+1)-1,p&=c&~(y&~E),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(a=!0,dh(l,p))}else p=Ge,p=_l(l,l===lt?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||ii(l,p)||(a=!0,dh(l,p));l=l.next}while(a);tc=!1}}function dy(){sh()}function sh(){wo=ec=!1;var e=0;_a!==0&&ky()&&(e=_a);for(var n=Se(),a=null,l=xo;l!==null;){var c=l.next,p=uh(l,n);p===0?(l.next=null,a===null?xo=c:a.next=c,c===null&&(Ir=a)):(a=l,(e!==0||(p&3)!==0)&&(wo=!0)),l=c}_t!==0&&_t!==5||Ii(e),_a!==0&&(_a=0)}function uh(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var y=31-Fe(p),E=1<<y,I=c[y];I===-1?((E&a)===0||(E&l)!==0)&&(c[y]=B1(E,n)):I<=n&&(e.expiredLanes|=E),p&=~E}if(n=lt,a=Ge,a=_l(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(tt===2||tt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ge(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ii(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&ge(l),gs(a)){case 2:case 8:a=he;break;case 32:a=ke;break;case 268435456:a=Ye;break;default:a=ke}return l=ch.bind(null,e),a=me(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&ge(l),e.callbackPriority=2,e.callbackNode=null,2}function ch(e,n){if(_t!==0&&_t!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(yo()&&e.callbackNode!==a)return null;var l=Ge;return l=_l(e,e===lt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ym(e,l,n),uh(e,Se()),e.callbackNode!=null&&e.callbackNode===a?ch.bind(null,e):null)}function dh(e,n){if(yo())return null;Ym(e,n,!0)}function fy(){_y(function(){(We&6)!==0?me(Z,dy):sh()})}function nc(){if(_a===0){var e=Cr;e===0&&(e=lr,lr<<=1,(lr&261888)===0&&(lr=256)),_a=e}return _a}function fh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Nl(""+e)}function ph(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function py(e,n,a,l,c){if(n==="submit"&&a&&a.stateNode===c){var p=fh((c[It]||null).action),y=l.submitter;y&&(n=(n=y[It]||null)?fh(n.formAction):y.getAttribute("formAction"),n!==null&&(p=n,y=null));var E=new $l("action","action",null,l,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(_a!==0){var I=y?ph(c,y):new FormData(c);ku(a,{pending:!0,data:I,method:c.method,action:p},null,I)}}else typeof p=="function"&&(E.preventDefault(),I=y?ph(c,y):new FormData(c),ku(a,{pending:!0,data:I,method:c.method,action:p},p,I))},currentTarget:c}]})}}for(var ac=0;ac<Us.length;ac++){var rc=Us[ac],my=rc.toLowerCase(),hy=rc[0].toUpperCase()+rc.slice(1);kn(my,"on"+hy)}kn(Pf,"onAnimationEnd"),kn(Yf,"onAnimationIteration"),kn(Gf,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(Ov,"onTransitionRun"),kn($v,"onTransitionStart"),kn(jv,"onTransitionCancel"),kn(Vf,"onTransitionEnd"),dr("onMouseEnter",["mouseout","mouseover"]),dr("onMouseLeave",["mouseout","mouseover"]),dr("onPointerEnter",["pointerout","pointerover"]),dr("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hi));function mh(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],c=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var y=l.length-1;0<=y;y--){var E=l[y],I=E.instance,K=E.currentTarget;if(E=E.listener,I!==p&&c.isPropagationStopped())break e;p=E,c.currentTarget=K;try{p(c)}catch(se){Dl(se)}c.currentTarget=null,p=I}else for(y=0;y<l.length;y++){if(E=l[y],I=E.instance,K=E.currentTarget,E=E.listener,I!==p&&c.isPropagationStopped())break e;p=E,c.currentTarget=K;try{p(c)}catch(se){Dl(se)}c.currentTarget=null,p=I}}}}function Pe(e,n){var a=n[bs];a===void 0&&(a=n[bs]=new Set);var l=e+"__bubble";a.has(l)||(hh(n,e,2,!1),a.add(l))}function ic(e,n,a){var l=0;n&&(l|=4),hh(a,e,l,n)}var ko="_reactListening"+Math.random().toString(36).slice(2);function lc(e){if(!e[ko]){e[ko]=!0,sf.forEach(function(a){a!=="selectionchange"&&(gy.has(a)||ic(a,!1,e),ic(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ko]||(n[ko]=!0,ic("selectionchange",!1,n))}}function hh(e,n,a,l){switch(Ph(n)){case 2:var c=Py;break;case 8:c=Yy;break;default:c=wc}a=c.bind(null,n,a,e),c=void 0,!As||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function oc(e,n,a,l,c){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var E=l.stateNode.containerInfo;if(E===c)break;if(y===4)for(y=l.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;E!==null;){if(y=sr(E),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){l=p=y;continue e}E=E.parentNode}}l=l.return}xf(function(){var K=p,se=_s(a),pe=[];e:{var ee=Xf.get(e);if(ee!==void 0){var re=$l,Ce=e;switch(e){case"keypress":if(zl(a)===0)break e;case"keydown":case"keyup":re=uv;break;case"focusin":Ce="focus",re=zs;break;case"focusout":Ce="blur",re=zs;break;case"beforeblur":case"afterblur":re=zs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=fv;break;case Pf:case Yf:case Gf:re=ev;break;case Vf:re=mv;break;case"scroll":case"scrollend":re=Z1;break;case"wheel":re=gv;break;case"copy":case"cut":case"paste":re=nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=Cf;break;case"toggle":case"beforetoggle":re=vv}var je=(n&4)!==0,it=!je&&(e==="scroll"||e==="scrollend"),X=je?ee!==null?ee+"Capture":null:ee;je=[];for(var P=K,Q;P!==null;){var de=P;if(Q=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Q===null||X===null||(de=ui(P,X),de!=null&&je.push(Fi(P,de,Q))),it)break;P=P.return}0<je.length&&(ee=new re(ee,Ce,null,a,se),pe.push({event:ee,listeners:je}))}}if((n&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",re=e==="mouseout"||e==="pointerout",ee&&a!==Ss&&(Ce=a.relatedTarget||a.fromElement)&&(sr(Ce)||Ce[or]))break e;if((re||ee)&&(ee=se.window===se?se:(ee=se.ownerDocument)?ee.defaultView||ee.parentWindow:window,re?(Ce=a.relatedTarget||a.toElement,re=K,Ce=Ce?sr(Ce):null,Ce!==null&&(it=u(Ce),je=Ce.tag,Ce!==it||je!==5&&je!==27&&je!==6)&&(Ce=null)):(re=null,Ce=K),re!==Ce)){if(je=Sf,de="onMouseLeave",X="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(je=Cf,de="onPointerLeave",X="onPointerEnter",P="pointer"),it=re==null?ee:si(re),Q=Ce==null?ee:si(Ce),ee=new je(de,P+"leave",re,a,se),ee.target=it,ee.relatedTarget=Q,de=null,sr(se)===K&&(je=new je(X,P+"enter",Ce,a,se),je.target=Q,je.relatedTarget=it,de=je),it=de,re&&Ce)t:{for(je=by,X=re,P=Ce,Q=0,de=X;de;de=je(de))Q++;de=0;for(var ze=P;ze;ze=je(ze))de++;for(;0<Q-de;)X=je(X),Q--;for(;0<de-Q;)P=je(P),de--;for(;Q--;){if(X===P||P!==null&&X===P.alternate){je=X;break t}X=je(X),P=je(P)}je=null}else je=null;re!==null&&gh(pe,ee,re,je,!1),Ce!==null&&it!==null&&gh(pe,it,Ce,je,!0)}}e:{if(ee=K?si(K):window,re=ee.nodeName&&ee.nodeName.toLowerCase(),re==="select"||re==="input"&&ee.type==="file")var Ze=jf;else if(Of(ee))if(Mf)Ze=Nv;else{Ze=Av;var Ee=Cv}else re=ee.nodeName,!re||re.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?K&&ks(K.elementType)&&(Ze=jf):Ze=Ev;if(Ze&&(Ze=Ze(e,K))){$f(pe,Ze,a,se);break e}Ee&&Ee(e,ee,K),e==="focusout"&&K&&ee.type==="number"&&K.memoizedProps.value!=null&&ws(ee,"number",ee.value)}switch(Ee=K?si(K):window,e){case"focusin":(Of(Ee)||Ee.contentEditable==="true")&&(br=Ee,Rs=K,bi=null);break;case"focusout":bi=Rs=br=null;break;case"mousedown":Ls=!0;break;case"contextmenu":case"mouseup":case"dragend":Ls=!1,Ff(pe,a,se);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Ff(pe,a,se)}var Ue;if($s)e:{switch(e){case"compositionstart":var Ve="onCompositionStart";break e;case"compositionend":Ve="onCompositionEnd";break e;case"compositionupdate":Ve="onCompositionUpdate";break e}Ve=void 0}else gr?Tf(e,a)&&(Ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ve="onCompositionStart");Ve&&(Af&&a.locale!=="ko"&&(gr||Ve!=="onCompositionStart"?Ve==="onCompositionEnd"&&gr&&(Ue=wf()):(sa=se,Es="value"in sa?sa.value:sa.textContent,gr=!0)),Ee=So(K,Ve),0<Ee.length&&(Ve=new _f(Ve,e,null,a,se),pe.push({event:Ve,listeners:Ee}),Ue?Ve.data=Ue:(Ue=zf(a),Ue!==null&&(Ve.data=Ue)))),(Ue=xv?wv(e,a):kv(e,a))&&(Ve=So(K,"onBeforeInput"),0<Ve.length&&(Ee=new _f("onBeforeInput","beforeinput",null,a,se),pe.push({event:Ee,listeners:Ve}),Ee.data=Ue)),py(pe,e,K,a,se)}mh(pe,n)})}function Fi(e,n,a){return{instance:e,listener:n,currentTarget:a}}function So(e,n){for(var a=n+"Capture",l=[];e!==null;){var c=e,p=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||p===null||(c=ui(e,a),c!=null&&l.unshift(Fi(e,c,p)),c=ui(e,n),c!=null&&l.push(Fi(e,c,p))),e.tag===3)return l;e=e.return}return[]}function by(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gh(e,n,a,l,c){for(var p=n._reactName,y=[];a!==null&&a!==l;){var E=a,I=E.alternate,K=E.stateNode;if(E=E.tag,I!==null&&I===l)break;E!==5&&E!==26&&E!==27||K===null||(I=K,c?(K=ui(a,p),K!=null&&y.unshift(Fi(a,K,I))):c||(K=ui(a,p),K!=null&&y.push(Fi(a,K,I)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var vy=/\r\n?/g,yy=/\u0000|\uFFFD/g;function bh(e){return(typeof e=="string"?e:""+e).replace(vy,`
`).replace(yy,"")}function vh(e,n){return n=bh(n),bh(e)===n}function rt(e,n,a,l,c,p){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||pr(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&pr(e,""+l);break;case"className":Al(e,"class",l);break;case"tabIndex":Al(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Al(e,a,l);break;case"style":vf(e,l,p);break;case"data":if(n!=="object"){Al(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Nl(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(a==="formAction"?(n!=="input"&&rt(e,n,"name",c.name,c,null),rt(e,n,"formEncType",c.formEncType,c,null),rt(e,n,"formMethod",c.formMethod,c,null),rt(e,n,"formTarget",c.formTarget,c,null)):(rt(e,n,"encType",c.encType,c,null),rt(e,n,"method",c.method,c,null),rt(e,n,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Nl(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Un);break;case"onScroll":l!=null&&Pe("scroll",e);break;case"onScrollEnd":l!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Nl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),Cl(e,"popover",l);break;case"xlinkActuate":Bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Bn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Bn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Bn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Bn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Cl(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=V1.get(a)||a,Cl(e,a,l))}}function sc(e,n,a,l,c,p){switch(a){case"style":vf(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?pr(e,l):(typeof l=="number"||typeof l=="bigint")&&pr(e,""+l);break;case"onScroll":l!=null&&Pe("scroll",e);break;case"onScrollEnd":l!=null&&Pe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Un);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),p=e[It]||null,p=p!=null?p[a]:null,typeof p=="function"&&e.removeEventListener(n,p,c),typeof l=="function")){typeof p!="function"&&p!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,c);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Cl(e,a,l)}}}function $t(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var l=!1,c=!1,p;for(p in a)if(a.hasOwnProperty(p)){var y=a[p];if(y!=null)switch(p){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:rt(e,n,p,y,a,null)}}c&&rt(e,n,"srcSet",a.srcSet,a,null),l&&rt(e,n,"src",a.src,a,null);return;case"input":Pe("invalid",e);var E=p=y=c=null,I=null,K=null;for(l in a)if(a.hasOwnProperty(l)){var se=a[l];if(se!=null)switch(l){case"name":c=se;break;case"type":y=se;break;case"checked":I=se;break;case"defaultChecked":K=se;break;case"value":p=se;break;case"defaultValue":E=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(o(137,n));break;default:rt(e,n,l,se,a,null)}}mf(e,p,E,I,K,y,c,!1);return;case"select":Pe("invalid",e),l=y=p=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":p=E;break;case"defaultValue":y=E;break;case"multiple":l=E;default:rt(e,n,c,E,a,null)}n=p,a=y,e.multiple=!!l,n!=null?fr(e,!!l,n,!1):a!=null&&fr(e,!!l,a,!0);return;case"textarea":Pe("invalid",e),p=c=l=null;for(y in a)if(a.hasOwnProperty(y)&&(E=a[y],E!=null))switch(y){case"value":l=E;break;case"defaultValue":c=E;break;case"children":p=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(91));break;default:rt(e,n,y,E,a,null)}gf(e,l,c,p);return;case"option":for(I in a)a.hasOwnProperty(I)&&(l=a[I],l!=null)&&(I==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":rt(e,n,I,l,a,null));return;case"dialog":Pe("beforetoggle",e),Pe("toggle",e),Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(l=0;l<Hi.length;l++)Pe(Hi[l],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(l=a[K],l!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:rt(e,n,K,l,a,null)}return;default:if(ks(n)){for(se in a)a.hasOwnProperty(se)&&(l=a[se],l!==void 0&&sc(e,n,se,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&rt(e,n,E,l,a,null))}function xy(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,p=null,y=null,E=null,I=null,K=null,se=null;for(re in a){var pe=a[re];if(a.hasOwnProperty(re)&&pe!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":I=pe;default:l.hasOwnProperty(re)||rt(e,n,re,null,l,pe)}}for(var ee in l){var re=l[ee];if(pe=a[ee],l.hasOwnProperty(ee)&&(re!=null||pe!=null))switch(ee){case"type":p=re;break;case"name":c=re;break;case"checked":K=re;break;case"defaultChecked":se=re;break;case"value":y=re;break;case"defaultValue":E=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(o(137,n));break;default:re!==pe&&rt(e,n,ee,re,l,pe)}}xs(e,y,E,I,K,se,p,c);return;case"select":re=y=E=ee=null;for(p in a)if(I=a[p],a.hasOwnProperty(p)&&I!=null)switch(p){case"value":break;case"multiple":re=I;default:l.hasOwnProperty(p)||rt(e,n,p,null,l,I)}for(c in l)if(p=l[c],I=a[c],l.hasOwnProperty(c)&&(p!=null||I!=null))switch(c){case"value":ee=p;break;case"defaultValue":E=p;break;case"multiple":y=p;default:p!==I&&rt(e,n,c,p,l,I)}n=E,a=y,l=re,ee!=null?fr(e,!!a,ee,!1):!!l!=!!a&&(n!=null?fr(e,!!a,n,!0):fr(e,!!a,a?[]:"",!1));return;case"textarea":re=ee=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:rt(e,n,E,null,l,c)}for(y in l)if(c=l[y],p=a[y],l.hasOwnProperty(y)&&(c!=null||p!=null))switch(y){case"value":ee=c;break;case"defaultValue":re=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==p&&rt(e,n,y,c,l,p)}hf(e,ee,re);return;case"option":for(var Ce in a)ee=a[Ce],a.hasOwnProperty(Ce)&&ee!=null&&!l.hasOwnProperty(Ce)&&(Ce==="selected"?e.selected=!1:rt(e,n,Ce,null,l,ee));for(I in l)ee=l[I],re=a[I],l.hasOwnProperty(I)&&ee!==re&&(ee!=null||re!=null)&&(I==="selected"?e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":rt(e,n,I,ee,l,re));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var je in a)ee=a[je],a.hasOwnProperty(je)&&ee!=null&&!l.hasOwnProperty(je)&&rt(e,n,je,null,l,ee);for(K in l)if(ee=l[K],re=a[K],l.hasOwnProperty(K)&&ee!==re&&(ee!=null||re!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(o(137,n));break;default:rt(e,n,K,ee,l,re)}return;default:if(ks(n)){for(var it in a)ee=a[it],a.hasOwnProperty(it)&&ee!==void 0&&!l.hasOwnProperty(it)&&sc(e,n,it,void 0,l,ee);for(se in l)ee=l[se],re=a[se],!l.hasOwnProperty(se)||ee===re||ee===void 0&&re===void 0||sc(e,n,se,ee,l,re);return}}for(var X in a)ee=a[X],a.hasOwnProperty(X)&&ee!=null&&!l.hasOwnProperty(X)&&rt(e,n,X,null,l,ee);for(pe in l)ee=l[pe],re=a[pe],!l.hasOwnProperty(pe)||ee===re||ee==null&&re==null||rt(e,n,pe,ee,l,re)}function yh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var c=a[l],p=c.transferSize,y=c.initiatorType,E=c.duration;if(p&&E&&yh(y)){for(y=0,E=c.responseEnd,l+=1;l<a.length;l++){var I=a[l],K=I.startTime;if(K>E)break;var se=I.transferSize,pe=I.initiatorType;se&&yh(pe)&&(I=I.responseEnd,y+=se*(I<E?1:(E-K)/(I-K)))}if(--l,n+=8*(p+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uc=null,cc=null;function _o(e){return e.nodeType===9?e:e.ownerDocument}function xh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function dc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fc=null;function ky(){var e=window.event;return e&&e.type==="popstate"?e===fc?!1:(fc=e,!0):(fc=null,!1)}var kh=typeof setTimeout=="function"?setTimeout:void 0,Sy=typeof clearTimeout=="function"?clearTimeout:void 0,Sh=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof Sh<"u"?function(e){return Sh.resolve(null).then(e).catch(Cy)}:kh;function Cy(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function _h(e,n){var a=n,l=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(c),Pr(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")qi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,qi(a);for(var p=a.firstChild;p;){var y=p.nextSibling,E=p.nodeName;p[oi]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&p.rel.toLowerCase()==="stylesheet"||a.removeChild(p),p=y}}else a==="body"&&qi(e.ownerDocument.body);a=c}while(a);Pr(n)}function Ch(e,n){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function pc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pc(a),vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ay(e,n,a,l){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[oi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var p=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=vn(e.nextSibling),e===null)break}return null}function Ey(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vn(e.nextSibling),e===null))return null;return e}function Ah(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vn(e.nextSibling),e===null))return null;return e}function mc(e){return e.data==="$?"||e.data==="$~"}function hc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ny(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var gc=null;function Eh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return vn(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Nh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Th(e,n,a){switch(n=_o(a),e){case"html":if(e=n.documentElement,!e)throw Error(o(452));return e;case"head":if(e=n.head,!e)throw Error(o(453));return e;case"body":if(e=n.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function qi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);vs(e)}var yn=new Map,zh=new Set;function Co(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=Y.d;Y.d={f:Ty,r:zy,D:Oy,C:$y,L:jy,m:My,X:Ry,S:Dy,M:Ly};function Ty(){var e=ta.f(),n=go();return e||n}function zy(e){var n=ur(e);n!==null&&n.tag===5&&n.type==="form"?Vp(n):ta.r(e)}var Hr=typeof document>"u"?null:document;function Oh(e,n,a){var l=Hr;if(l&&typeof n=="string"&&n){var c=dn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),zh.has(c)||(zh.add(c),e={rel:e,crossOrigin:a,href:n},l.querySelector(c)===null&&(n=l.createElement("link"),$t(n,"link",e),At(n),l.head.appendChild(n)))}}function Oy(e){ta.D(e),Oh("dns-prefetch",e,null)}function $y(e,n){ta.C(e,n),Oh("preconnect",e,n)}function jy(e,n,a){ta.L(e,n,a);var l=Hr;if(l&&e&&n){var c='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+dn(a.imageSizes)+'"]')):c+='[href="'+dn(e)+'"]';var p=c;switch(n){case"style":p=Fr(e);break;case"script":p=qr(e)}yn.has(p)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),yn.set(p,e),l.querySelector(c)!==null||n==="style"&&l.querySelector(Pi(p))||n==="script"&&l.querySelector(Yi(p))||(n=l.createElement("link"),$t(n,"link",e),At(n),l.head.appendChild(n)))}}function My(e,n){ta.m(e,n);var a=Hr;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+dn(l)+'"][href="'+dn(e)+'"]',p=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=qr(e)}if(!yn.has(p)&&(e=g({rel:"modulepreload",href:e},n),yn.set(p,e),a.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yi(p)))return}l=a.createElement("link"),$t(l,"link",e),At(l),a.head.appendChild(l)}}}function Dy(e,n,a){ta.S(e,n,a);var l=Hr;if(l&&e){var c=cr(l).hoistableStyles,p=Fr(e);n=n||"default";var y=c.get(p);if(!y){var E={loading:0,preload:null};if(y=l.querySelector(Pi(p)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=yn.get(p))&&bc(e,a);var I=y=l.createElement("link");At(I),$t(I,"link",e),I._p=new Promise(function(K,se){I.onload=K,I.onerror=se}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ao(y,n,l)}y={type:"stylesheet",instance:y,count:1,state:E},c.set(p,y)}}}function Ry(e,n){ta.X(e,n);var a=Hr;if(a&&e){var l=cr(a).hoistableScripts,c=qr(e),p=l.get(c);p||(p=a.querySelector(Yi(c)),p||(e=g({src:e,async:!0},n),(n=yn.get(c))&&vc(e,n),p=a.createElement("script"),At(p),$t(p,"link",e),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(c,p))}}function Ly(e,n){ta.M(e,n);var a=Hr;if(a&&e){var l=cr(a).hoistableScripts,c=qr(e),p=l.get(c);p||(p=a.querySelector(Yi(c)),p||(e=g({src:e,async:!0,type:"module"},n),(n=yn.get(c))&&vc(e,n),p=a.createElement("script"),At(p),$t(p,"link",e),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(c,p))}}function $h(e,n,a,l){var c=(c=_e.current)?Co(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Fr(a.href),a=cr(c).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Fr(a.href);var p=cr(c).hoistableStyles,y=p.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,y),(p=c.querySelector(Pi(e)))&&!p._p&&(y.instance=p,y.state.loading=5),yn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yn.set(e,a),p||By(c,e,a,y.state))),n&&l===null)throw Error(o(528,""));return y}if(n&&l!==null)throw Error(o(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qr(a),a=cr(c).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Fr(e){return'href="'+dn(e)+'"'}function Pi(e){return'link[rel="stylesheet"]['+e+"]"}function jh(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function By(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),$t(n,"link",a),At(n),e.head.appendChild(n))}function qr(e){return'[src="'+dn(e)+'"]'}function Yi(e){return"script[async]"+e}function Mh(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+dn(a.href)+'"]');if(l)return n.instance=l,At(l),l;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),At(l),$t(l,"style",c),Ao(l,a.precedence,e),n.instance=l;case"stylesheet":c=Fr(a.href);var p=e.querySelector(Pi(c));if(p)return n.state.loading|=4,n.instance=p,At(p),p;l=jh(a),(c=yn.get(c))&&bc(l,c),p=(e.ownerDocument||e).createElement("link"),At(p);var y=p;return y._p=new Promise(function(E,I){y.onload=E,y.onerror=I}),$t(p,"link",l),n.state.loading|=4,Ao(p,a.precedence,e),n.instance=p;case"script":return p=qr(a.src),(c=e.querySelector(Yi(p)))?(n.instance=c,At(c),c):(l=a,(c=yn.get(p))&&(l=g({},a),vc(l,c)),e=e.ownerDocument||e,c=e.createElement("script"),At(c),$t(c,"link",l),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Ao(l,a.precedence,e));return n.instance}function Ao(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,p=c,y=0;y<l.length;y++){var E=l[y];if(E.dataset.precedence===n)p=E;else if(p!==c)break}p?p.parentNode.insertBefore(e,p.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function bc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function vc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Eo=null;function Dh(e,n,a){if(Eo===null){var l=new Map,c=Eo=new Map;c.set(a,l)}else c=Eo,l=c.get(a),l||(l=new Map,c.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var p=a[c];if(!(p[oi]||p[Nt]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var y=p.getAttribute(n)||"";y=e+y;var E=l.get(y);E?E.push(p):l.set(y,[p])}}return l}function Rh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Uy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Lh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Iy(e,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Fr(l.href),p=n.querySelector(Pi(c));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=No.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=p,At(p);return}p=n.ownerDocument||n,l=jh(l),(c=yn.get(c))&&bc(l,c),p=p.createElement("link"),At(p);var y=p;y._p=new Promise(function(E,I){y.onload=E,y.onerror=I}),$t(p,"link",l),a.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=No.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var yc=0;function Hy(e,n){return e.stylesheets&&e.count===0&&zo(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&zo(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+n);0<e.imgBytes&&yc===0&&(yc=62500*wy());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&zo(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>yc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(c)}}:null}function No(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var To=null;function zo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,To=new Map,n.forEach(Fy,e),To=null,No.call(e))}function Fy(e,n){if(!(n.state.loading&4)){var a=To.get(e);if(a)var l=a.get(null);else{a=new Map,To.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<c.length;p++){var y=c[p];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),l=y)}l&&a.set(null,l)}c=n.instance,y=c.getAttribute("data-precedence"),p=a.get(y)||l,p===l&&a.set(null,c),a.set(y,c),this.count++,l=No.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),p?p.parentNode.insertBefore(c,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Gi={$$typeof:O,Provider:null,Consumer:null,_currentValue:be,_currentValue2:be,_threadCount:0};function qy(e,n,a,l,c,p,y,E,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ms(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ms(0),this.hiddenUpdates=ms(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=p,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Bh(e,n,a,l,c,p,y,E,I,K,se,pe){return e=new qy(e,n,a,y,I,K,se,pe,E),n=1,p===!0&&(n|=24),p=Jt(3,null,null,n),e.current=p,p.stateNode=e,n=Js(),n.refCount++,e.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:a,cache:n},nu(p),e}function Uh(e){return e?(e=xr,e):xr}function Ih(e,n,a,l,c,p){c=Uh(c),l.context===null?l.context=c:l.pendingContext=c,l=ma(n),l.payload={element:a},p=p===void 0?null:p,p!==null&&(l.callback=p),a=ha(e,l,n),a!==null&&(Gt(a,e,n),_i(a,e,n))}function Hh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function xc(e,n){Hh(e,n),(e=e.alternate)&&Hh(e,n)}function Fh(e){if(e.tag===13||e.tag===31){var n=Fa(e,67108864);n!==null&&Gt(n,e,67108864),xc(e,67108864)}}function qh(e){if(e.tag===13||e.tag===31){var n=an();n=hs(n);var a=Fa(e,n);a!==null&&Gt(a,e,n),xc(e,n)}}var Oo=!0;function Py(e,n,a,l){var c=F.T;F.T=null;var p=Y.p;try{Y.p=2,wc(e,n,a,l)}finally{Y.p=p,F.T=c}}function Yy(e,n,a,l){var c=F.T;F.T=null;var p=Y.p;try{Y.p=8,wc(e,n,a,l)}finally{Y.p=p,F.T=c}}function wc(e,n,a,l){if(Oo){var c=kc(l);if(c===null)oc(e,n,l,$o,a),Yh(e,l);else if(Vy(c,e,n,a,l))l.stopPropagation();else if(Yh(e,l),n&4&&-1<Gy.indexOf(e)){for(;c!==null;){var p=ur(c);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var y=un(p.pendingLanes);if(y!==0){var E=p;for(E.pendingLanes|=2,E.entangledLanes|=2;y;){var I=1<<31-Fe(y);E.entanglements[1]|=I,y&=~I}On(p),(We&6)===0&&(mo=Se()+500,Ii(0))}}break;case 31:case 13:E=Fa(p,2),E!==null&&Gt(E,p,2),go(),xc(p,2)}if(p=kc(l),p===null&&oc(e,n,l,$o,a),p===c)break;c=p}c!==null&&l.stopPropagation()}else oc(e,n,l,null,a)}}function kc(e){return e=_s(e),Sc(e)}var $o=null;function Sc(e){if($o=null,e=sr(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $o=e,null}function Ph(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(we()){case Z:return 2;case he:return 8;case ke:case Me:return 32;case Ye:return 268435456;default:return 32}default:return 32}}var _c=!1,Aa=null,Ea=null,Na=null,Vi=new Map,Xi=new Map,Ta=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yh(e,n){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Vi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xi.delete(n.pointerId)}}function Zi(e,n,a,l,c,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},n!==null&&(n=ur(n),n!==null&&Fh(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Vy(e,n,a,l,c){switch(n){case"focusin":return Aa=Zi(Aa,e,n,a,l,c),!0;case"dragenter":return Ea=Zi(Ea,e,n,a,l,c),!0;case"mouseover":return Na=Zi(Na,e,n,a,l,c),!0;case"pointerover":var p=c.pointerId;return Vi.set(p,Zi(Vi.get(p)||null,e,n,a,l,c)),!0;case"gotpointercapture":return p=c.pointerId,Xi.set(p,Zi(Xi.get(p)||null,e,n,a,l,c)),!0}return!1}function Gh(e){var n=sr(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,lf(e.priority,function(){qh(a)});return}}else if(n===31){if(n=f(a),n!==null){e.blockedOn=n,lf(e.priority,function(){qh(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=kc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ss=l,a.target.dispatchEvent(l),Ss=null}else return n=ur(a),n!==null&&Fh(n),e.blockedOn=a,!1;n.shift()}return!0}function Vh(e,n,a){jo(e)&&a.delete(n)}function Xy(){_c=!1,Aa!==null&&jo(Aa)&&(Aa=null),Ea!==null&&jo(Ea)&&(Ea=null),Na!==null&&jo(Na)&&(Na=null),Vi.forEach(Vh),Xi.forEach(Vh)}function Mo(e,n){e.blockedOn===n&&(e.blockedOn=null,_c||(_c=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Xy)))}var Do=null;function Xh(e){Do!==e&&(Do=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Do===e&&(Do=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],c=e[n+2];if(typeof l!="function"){if(Sc(l||a)===null)continue;break}var p=ur(a);p!==null&&(e.splice(n,3),n-=3,ku(p,{pending:!0,data:c,method:a.method,action:l},l,c))}}))}function Pr(e){function n(I){return Mo(I,e)}Aa!==null&&Mo(Aa,e),Ea!==null&&Mo(Ea,e),Na!==null&&Mo(Na,e),Vi.forEach(n),Xi.forEach(n);for(var a=0;a<Ta.length;a++){var l=Ta[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Gh(a),a.blockedOn===null&&Ta.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var c=a[l],p=a[l+1],y=c[It]||null;if(typeof p=="function")y||Xh(a);else if(y){var E=null;if(p&&p.hasAttribute("formAction")){if(c=p,y=p[It]||null)E=y.formAction;else if(Sc(c)!==null)continue}else E=y.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),Xh(a)}}}function Zh(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Cc(e){this._internalRoot=e}Ro.prototype.render=Cc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));var a=n.current,l=an();Ih(a,l,e,n,null,null)},Ro.prototype.unmount=Cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ih(e.current,2,null,e,null,null),go(),n[or]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var n=rf();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ta.length&&n!==0&&n<Ta[a].priority;a++);Ta.splice(a,0,e),a===0&&Gh(e)}};var Qh=r.version;if(Qh!=="19.2.4")throw Error(o(527,Qh,"19.2.4"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=h(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Zy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{He=Lo.inject(Zy),pt=Lo}catch{}}return Ki.createRoot=function(e,n){if(!s(e))throw Error(o(299));var a=!1,l="",c=am,p=rm,y=im;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Bh(e,1,!1,null,null,a,l,null,c,p,y,Zh),e[or]=n.current,lc(e),new Cc(n)},Ki.hydrateRoot=function(e,n,a){if(!s(e))throw Error(o(299));var l=!1,c="",p=am,y=rm,E=im,I=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(p=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Bh(e,1,!0,n,a??null,l,c,I,p,y,E,Zh),n.context=Uh(null),a=n.current,l=an(),l=hs(l),c=ma(l),c.callback=null,ha(a,c,l),a=l,n.current.lanes=a,li(n,a),On(n),e[or]=n.current,lc(e),new Ro(n)},Ki.version="19.2.4",Ki}var lg;function i2(){if(lg)return Nc.exports;lg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),Nc.exports=r2(),Nc.exports}var l2=i2();const o2=bl(l2),s2="modulepreload",u2=function(t,r){return new URL(t,r).href},og={},c2=function(r,i,o){let s=Promise.resolve();if(i&&i.length>0){let h=function(v){return Promise.all(v.map(g=>Promise.resolve(g).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};const d=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");s=h(i.map(v=>{if(v=u2(v,o),v in og)return;og[v]=!0;const g=v.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(o)for(let C=d.length-1;C>=0;C--){const k=d[C];if(k.href===v&&(!g||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${x}`))return;const b=document.createElement("link");if(b.rel=g?"stylesheet":s2,g||(b.as="script"),b.crossOrigin="",b.href=v,m&&b.setAttribute("nonce",m),document.head.appendChild(b),g)return new Promise((C,k)=>{b.addEventListener("load",C),b.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${v}`)))})}))}function u(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return s.then(d=>{for(const f of d||[])f.status==="rejected"&&u(f.reason);return r().catch(u)})};function nd(t,r){(r==null||r>t.length)&&(r=t.length);for(var i=0,o=Array(r);i<r;i++)o[i]=t[i];return o}function d2(t){if(Array.isArray(t))return t}function f2(t){if(Array.isArray(t))return nd(t)}function p2(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function m2(t,r){for(var i=0;i<r.length;i++){var o=r[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Ub(o.key),o)}}function h2(t,r,i){return r&&m2(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Xo(t,r){var i=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=Nd(t))||r){i&&(t=i);var o=0,s=function(){};return{s,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(m){throw m},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u,d=!0,f=!1;return{s:function(){i=i.call(t)},n:function(){var m=i.next();return d=m.done,m},e:function(m){f=!0,u=m},f:function(){try{d||i.return==null||i.return()}finally{if(f)throw u}}}}function Le(t,r,i){return(r=Ub(r))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function g2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function b2(t,r){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var o,s,u,d,f=[],m=!0,h=!1;try{if(u=(i=i.call(t)).next,r===0){if(Object(i)!==i)return;m=!1}else for(;!(m=(o=u.call(i)).done)&&(f.push(o.value),f.length!==r);m=!0);}catch(v){h=!0,s=v}finally{try{if(!m&&i.return!=null&&(d=i.return(),Object(d)!==d))return}finally{if(h)throw s}}return f}}function v2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sg(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,o)}return i}function xe(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?sg(Object(i),!0).forEach(function(o){Le(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):sg(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function rs(t,r){return d2(t)||b2(t,r)||Nd(t,r)||v2()}function An(t){return f2(t)||g2(t)||Nd(t)||y2()}function x2(t,r){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Ub(t){var r=x2(t,"string");return typeof r=="symbol"?r:r+""}function Jo(t){"@babel/helpers - typeof";return Jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Jo(t)}function Nd(t,r){if(t){if(typeof t=="string")return nd(t,r);var i={}.toString.call(t).slice(8,-1);return i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set"?Array.from(t):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?nd(t,r):void 0}}var ug=function(){},Td={},Ib={},Hb=null,Fb={mark:ug,measure:ug};try{typeof window<"u"&&(Td=window),typeof document<"u"&&(Ib=document),typeof MutationObserver<"u"&&(Hb=MutationObserver),typeof performance<"u"&&(Fb=performance)}catch{}var w2=Td.navigator||{},cg=w2.userAgent,dg=cg===void 0?"":cg,ja=Td,dt=Ib,fg=Hb,Uo=Fb;ja.document;var la=!!dt.documentElement&&!!dt.head&&typeof dt.addEventListener=="function"&&typeof dt.createElement=="function",qb=~dg.indexOf("MSIE")||~dg.indexOf("Trident/"),$c,k2=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,S2=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Pb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},_2={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Yb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],jt="classic",vl="duotone",Gb="sharp",Vb="sharp-duotone",Xb="chisel",Zb="etch",Qb="graphite",Kb="jelly",Jb="jelly-duo",Wb="jelly-fill",e0="notdog",t0="notdog-duo",n0="slab",a0="slab-press",r0="thumbprint",i0="utility",l0="utility-duo",o0="utility-fill",s0="whiteboard",C2="Classic",A2="Duotone",E2="Sharp",N2="Sharp Duotone",T2="Chisel",z2="Etch",O2="Graphite",$2="Jelly",j2="Jelly Duo",M2="Jelly Fill",D2="Notdog",R2="Notdog Duo",L2="Slab",B2="Slab Press",U2="Thumbprint",I2="Utility",H2="Utility Duo",F2="Utility Fill",q2="Whiteboard",u0=[jt,vl,Gb,Vb,Xb,Zb,Qb,Kb,Jb,Wb,e0,t0,n0,a0,r0,i0,l0,o0,s0];$c={},Le(Le(Le(Le(Le(Le(Le(Le(Le(Le($c,jt,C2),vl,A2),Gb,E2),Vb,N2),Xb,T2),Zb,z2),Qb,O2),Kb,$2),Jb,j2),Wb,M2),Le(Le(Le(Le(Le(Le(Le(Le(Le($c,e0,D2),t0,R2),n0,L2),a0,B2),r0,U2),i0,I2),l0,H2),o0,F2),s0,q2);var P2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Y2={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},G2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),V2={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},c0=["fak","fa-kit","fakd","fa-kit-duotone"],pg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},X2=["kit"],Z2="kit",Q2="kit-duotone",K2="Kit",J2="Kit Duotone";Le(Le({},Z2,K2),Q2,J2);var W2={kit:{"fa-kit":"fak"}},ex={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},tx={kit:{fak:"fa-kit"}},mg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},jc,Io={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],ax="classic",rx="duotone",ix="sharp",lx="sharp-duotone",ox="chisel",sx="etch",ux="graphite",cx="jelly",dx="jelly-duo",fx="jelly-fill",px="notdog",mx="notdog-duo",hx="slab",gx="slab-press",bx="thumbprint",vx="utility",yx="utility-duo",xx="utility-fill",wx="whiteboard",kx="Classic",Sx="Duotone",_x="Sharp",Cx="Sharp Duotone",Ax="Chisel",Ex="Etch",Nx="Graphite",Tx="Jelly",zx="Jelly Duo",Ox="Jelly Fill",$x="Notdog",jx="Notdog Duo",Mx="Slab",Dx="Slab Press",Rx="Thumbprint",Lx="Utility",Bx="Utility Duo",Ux="Utility Fill",Ix="Whiteboard";jc={},Le(Le(Le(Le(Le(Le(Le(Le(Le(Le(jc,ax,kx),rx,Sx),ix,_x),lx,Cx),ox,Ax),sx,Ex),ux,Nx),cx,Tx),dx,zx),fx,Ox),Le(Le(Le(Le(Le(Le(Le(Le(Le(jc,px,$x),mx,jx),hx,Mx),gx,Dx),bx,Rx),vx,Lx),yx,Bx),xx,Ux),wx,Ix);var Hx="kit",Fx="kit-duotone",qx="Kit",Px="Kit Duotone";Le(Le({},Hx,qx),Fx,Px);var Yx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Gx={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},ad={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Vx=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],d0=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(nx,Vx),Xx=["solid","regular","light","thin","duotone","brands","semibold"],f0=[1,2,3,4,5,6,7,8,9,10],Zx=f0.concat([11,12,13,14,15,16,17,18,19,20]),Qx=["aw","fw","pull-left","pull-right"],Kx=[].concat(An(Object.keys(Gx)),Xx,Qx,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Io.GROUP,Io.SWAP_OPACITY,Io.PRIMARY,Io.SECONDARY]).concat(f0.map(function(t){return"".concat(t,"x")})).concat(Zx.map(function(t){return"w-".concat(t)})),Jx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ra="___FONT_AWESOME___",rd=16,p0="fa",m0="svg-inline--fa",ar="data-fa-i2svg",id="data-fa-pseudo-element",Wx="data-fa-pseudo-element-pending",zd="data-prefix",Od="data-icon",hg="fontawesome-i2svg",e5="async",t5=["HTML","HEAD","STYLE","SCRIPT"],h0=["::before","::after",":before",":after"],g0=(function(){try{return!0}catch{return!1}})();function yl(t){return new Proxy(t,{get:function(i,o){return o in i?i[o]:i[jt]}})}var b0=xe({},Pb);b0[jt]=xe(xe(xe(xe({},{"fa-duotone":"duotone"}),Pb[jt]),pg.kit),pg["kit-duotone"]);var n5=yl(b0),ld=xe({},V2);ld[jt]=xe(xe(xe(xe({},{duotone:"fad"}),ld[jt]),mg.kit),mg["kit-duotone"]);var gg=yl(ld),od=xe({},ad);od[jt]=xe(xe({},od[jt]),tx.kit);var $d=yl(od),sd=xe({},Yx);sd[jt]=xe(xe({},sd[jt]),W2.kit);yl(sd);var a5=k2,v0="fa-layers-text",r5=S2,i5=xe({},P2);yl(i5);var l5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mc=_2,o5=[].concat(An(X2),An(Kx)),ol=ja.FontAwesomeConfig||{};function s5(t){var r=dt.querySelector("script["+t+"]");if(r)return r.getAttribute(t)}function u5(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(dt&&typeof dt.querySelector=="function"){var c5=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];c5.forEach(function(t){var r=rs(t,2),i=r[0],o=r[1],s=u5(s5(i));s!=null&&(ol[o]=s)})}var y0={styleDefault:"solid",familyDefault:jt,cssPrefix:p0,replacementClass:m0,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ol.familyPrefix&&(ol.cssPrefix=ol.familyPrefix);var ei=xe(xe({},y0),ol);ei.autoReplaceSvg||(ei.observeMutations=!1);var Oe={};Object.keys(y0).forEach(function(t){Object.defineProperty(Oe,t,{enumerable:!0,set:function(i){ei[t]=i,sl.forEach(function(o){return o(Oe)})},get:function(){return ei[t]}})});Object.defineProperty(Oe,"familyPrefix",{enumerable:!0,set:function(r){ei.cssPrefix=r,sl.forEach(function(i){return i(Oe)})},get:function(){return ei.cssPrefix}});ja.FontAwesomeConfig=Oe;var sl=[];function d5(t){return sl.push(t),function(){sl.splice(sl.indexOf(t),1)}}var Yr=rd,Dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function f5(t){if(!(!t||!la)){var r=dt.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=t;for(var i=dt.head.childNodes,o=null,s=i.length-1;s>-1;s--){var u=i[s],d=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(d)>-1&&(o=u)}return dt.head.insertBefore(r,o),t}}var p5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bg(){for(var t=12,r="";t-- >0;)r+=p5[Math.random()*62|0];return r}function ni(t){for(var r=[],i=(t||[]).length>>>0;i--;)r[i]=t[i];return r}function jd(t){return t.classList?ni(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(r){return r})}function x0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m5(t){return Object.keys(t||{}).reduce(function(r,i){return r+"".concat(i,'="').concat(x0(t[i]),'" ')},"").trim()}function is(t){return Object.keys(t||{}).reduce(function(r,i){return r+"".concat(i,": ").concat(t[i].trim(),";")},"")}function Md(t){return t.size!==Dn.size||t.x!==Dn.x||t.y!==Dn.y||t.rotate!==Dn.rotate||t.flipX||t.flipY}function h5(t){var r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},u="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(u," ").concat(d," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")};return{outer:s,inner:m,path:h}}function g5(t){var r=t.transform,i=t.width,o=i===void 0?rd:i,s=t.height,u=s===void 0?rd:s,d="";return qb?d+="translate(".concat(r.x/Yr-o/2,"em, ").concat(r.y/Yr-u/2,"em) "):d+="translate(calc(-50% + ".concat(r.x/Yr,"em), calc(-50% + ").concat(r.y/Yr,"em)) "),d+="scale(".concat(r.size/Yr*(r.flipX?-1:1),", ").concat(r.size/Yr*(r.flipY?-1:1),") "),d+="rotate(".concat(r.rotate,"deg) "),d}var b5=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function w0(){var t=p0,r=m0,i=Oe.cssPrefix,o=Oe.replacementClass,s=b5;if(i!==t||o!==r){var u=new RegExp("\\.".concat(t,"\\-"),"g"),d=new RegExp("\\--".concat(t,"\\-"),"g"),f=new RegExp("\\.".concat(r),"g");s=s.replace(u,".".concat(i,"-")).replace(d,"--".concat(i,"-")).replace(f,".".concat(o))}return s}var vg=!1;function Dc(){Oe.autoAddCss&&!vg&&(f5(w0()),vg=!0)}var v5={mixout:function(){return{dom:{css:w0,insertCss:Dc}}},hooks:function(){return{beforeDOMElementCreation:function(){Dc()},beforeI2svg:function(){Dc()}}}},ia=ja||{};ia[ra]||(ia[ra]={});ia[ra].styles||(ia[ra].styles={});ia[ra].hooks||(ia[ra].hooks={});ia[ra].shims||(ia[ra].shims=[]);var Cn=ia[ra],k0=[],S0=function(){dt.removeEventListener("DOMContentLoaded",S0),Wo=1,k0.map(function(r){return r()})},Wo=!1;la&&(Wo=(dt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(dt.readyState),Wo||dt.addEventListener("DOMContentLoaded",S0));function y5(t){la&&(Wo?setTimeout(t,0):k0.push(t))}function xl(t){var r=t.tag,i=t.attributes,o=i===void 0?{}:i,s=t.children,u=s===void 0?[]:s;return typeof t=="string"?x0(t):"<".concat(r," ").concat(m5(o),">").concat(u.map(xl).join(""),"</").concat(r,">")}function yg(t,r,i){if(t&&t[r]&&t[r][i])return{prefix:r,iconName:i,icon:t[r][i]}}var Rc=function(r,i,o,s){var u=Object.keys(r),d=u.length,f=i,m,h,v;for(o===void 0?(m=1,v=r[u[0]]):(m=0,v=o);m<d;m++)h=u[m],v=f(v,r[h],h,r);return v};function _0(t){return An(t).length!==1?null:t.codePointAt(0).toString(16)}function xg(t){return Object.keys(t).reduce(function(r,i){var o=t[i],s=!!o.icon;return s?r[o.iconName]=o.icon:r[i]=o,r},{})}function ud(t,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=i.skipHooks,s=o===void 0?!1:o,u=xg(r);typeof Cn.hooks.addPack=="function"&&!s?Cn.hooks.addPack(t,xg(r)):Cn.styles[t]=xe(xe({},Cn.styles[t]||{}),u),t==="fas"&&ud("fa",r)}var ml=Cn.styles,x5=Cn.shims,C0=Object.keys($d),w5=C0.reduce(function(t,r){return t[r]=Object.keys($d[r]),t},{}),Dd=null,A0={},E0={},N0={},T0={},z0={};function k5(t){return~o5.indexOf(t)}function S5(t,r){var i=r.split("-"),o=i[0],s=i.slice(1).join("-");return o===t&&s!==""&&!k5(s)?s:null}var O0=function(){var r=function(u){return Rc(ml,function(d,f,m){return d[m]=Rc(f,u,{}),d},{})};A0=r(function(s,u,d){if(u[3]&&(s[u[3]]=d),u[2]){var f=u[2].filter(function(m){return typeof m=="number"});f.forEach(function(m){s[m.toString(16)]=d})}return s}),E0=r(function(s,u,d){if(s[d]=d,u[2]){var f=u[2].filter(function(m){return typeof m=="string"});f.forEach(function(m){s[m]=d})}return s}),z0=r(function(s,u,d){var f=u[2];return s[d]=d,f.forEach(function(m){s[m]=d}),s});var i="far"in ml||Oe.autoFetchSvg,o=Rc(x5,function(s,u){var d=u[0],f=u[1],m=u[2];return f==="far"&&!i&&(f="fas"),typeof d=="string"&&(s.names[d]={prefix:f,iconName:m}),typeof d=="number"&&(s.unicodes[d.toString(16)]={prefix:f,iconName:m}),s},{names:{},unicodes:{}});N0=o.names,T0=o.unicodes,Dd=ls(Oe.styleDefault,{family:Oe.familyDefault})};d5(function(t){Dd=ls(t.styleDefault,{family:Oe.familyDefault})});O0();function Rd(t,r){return(A0[t]||{})[r]}function _5(t,r){return(E0[t]||{})[r]}function tr(t,r){return(z0[t]||{})[r]}function $0(t){return N0[t]||{prefix:null,iconName:null}}function C5(t){var r=T0[t],i=Rd("fas",t);return r||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function Ma(){return Dd}var j0=function(){return{prefix:null,iconName:null,rest:[]}};function A5(t){var r=jt,i=C0.reduce(function(o,s){return o[s]="".concat(Oe.cssPrefix,"-").concat(s),o},{});return u0.forEach(function(o){(t.includes(i[o])||t.some(function(s){return w5[o].includes(s)}))&&(r=o)}),r}function ls(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.family,o=i===void 0?jt:i,s=n5[o][t];if(o===vl&&!t)return"fad";var u=gg[o][t]||gg[o][s],d=t in Cn.styles?t:null,f=u||d||null;return f}function E5(t){var r=[],i=null;return t.forEach(function(o){var s=S5(Oe.cssPrefix,o);s?i=s:o&&r.push(o)}),{iconName:i,rest:r}}function wg(t){return t.sort().filter(function(r,i,o){return o.indexOf(r)===i})}var kg=d0.concat(c0);function os(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.skipLookups,o=i===void 0?!1:i,s=null,u=wg(t.filter(function(b){return kg.includes(b)})),d=wg(t.filter(function(b){return!kg.includes(b)})),f=u.filter(function(b){return s=b,!Yb.includes(b)}),m=rs(f,1),h=m[0],v=h===void 0?null:h,g=A5(u),x=xe(xe({},E5(d)),{},{prefix:ls(v,{family:g})});return xe(xe(xe({},x),O5({values:t,family:g,styles:ml,config:Oe,canonical:x,givenPrefix:s})),N5(o,s,x))}function N5(t,r,i){var o=i.prefix,s=i.iconName;if(t||!o||!s)return{prefix:o,iconName:s};var u=r==="fa"?$0(s):{},d=tr(o,s);return s=u.iconName||d||s,o=u.prefix||o,o==="far"&&!ml.far&&ml.fas&&!Oe.autoFetchSvg&&(o="fas"),{prefix:o,iconName:s}}var T5=u0.filter(function(t){return t!==jt||t!==vl}),z5=Object.keys(ad).filter(function(t){return t!==jt}).map(function(t){return Object.keys(ad[t])}).flat();function O5(t){var r=t.values,i=t.family,o=t.canonical,s=t.givenPrefix,u=s===void 0?"":s,d=t.styles,f=d===void 0?{}:d,m=t.config,h=m===void 0?{}:m,v=i===vl,g=r.includes("fa-duotone")||r.includes("fad"),x=h.familyDefault==="duotone",b=o.prefix==="fad"||o.prefix==="fa-duotone";if(!v&&(g||x||b)&&(o.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(o.prefix="fab"),!o.prefix&&T5.includes(i)){var C=Object.keys(f).find(function(N){return z5.includes(N)});if(C||h.autoFetchSvg){var k=G2.get(i).defaultShortPrefixId;o.prefix=k,o.iconName=tr(o.prefix,o.iconName)||o.iconName}}return(o.prefix==="fa"||u==="fa")&&(o.prefix=Ma()||"fas"),o}var $5=(function(){function t(){p2(this,t),this.definitions={}}return h2(t,[{key:"add",value:function(){for(var i=this,o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];var d=s.reduce(this._pullDefinitions,{});Object.keys(d).forEach(function(f){i.definitions[f]=xe(xe({},i.definitions[f]||{}),d[f]),ud(f,d[f]);var m=$d[jt][f];m&&ud(m,d[f]),O0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,o){var s=o.prefix&&o.iconName&&o.icon?{0:o}:o;return Object.keys(s).map(function(u){var d=s[u],f=d.prefix,m=d.iconName,h=d.icon,v=h[2];i[f]||(i[f]={}),v.length>0&&v.forEach(function(g){typeof g=="string"&&(i[f][g]=h)}),i[f][m]=h}),i}}])})(),Sg=[],Zr={},Kr={},j5=Object.keys(Kr);function M5(t,r){var i=r.mixoutsTo;return Sg=t,Zr={},Object.keys(Kr).forEach(function(o){j5.indexOf(o)===-1&&delete Kr[o]}),Sg.forEach(function(o){var s=o.mixout?o.mixout():{};if(Object.keys(s).forEach(function(d){typeof s[d]=="function"&&(i[d]=s[d]),Jo(s[d])==="object"&&Object.keys(s[d]).forEach(function(f){i[d]||(i[d]={}),i[d][f]=s[d][f]})}),o.hooks){var u=o.hooks();Object.keys(u).forEach(function(d){Zr[d]||(Zr[d]=[]),Zr[d].push(u[d])})}o.provides&&o.provides(Kr)}),i}function cd(t,r){for(var i=arguments.length,o=new Array(i>2?i-2:0),s=2;s<i;s++)o[s-2]=arguments[s];var u=Zr[t]||[];return u.forEach(function(d){r=d.apply(null,[r].concat(o))}),r}function rr(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var s=Zr[t]||[];s.forEach(function(u){u.apply(null,i)})}function Da(){var t=arguments[0],r=Array.prototype.slice.call(arguments,1);return Kr[t]?Kr[t].apply(null,r):void 0}function dd(t){t.prefix==="fa"&&(t.prefix="fas");var r=t.iconName,i=t.prefix||Ma();if(r)return r=tr(i,r)||r,yg(M0.definitions,i,r)||yg(Cn.styles,i,r)}var M0=new $5,D5=function(){Oe.autoReplaceSvg=!1,Oe.observeMutations=!1,rr("noAuto")},R5={i2svg:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return la?(rr("beforeI2svg",r),Da("pseudoElements2svg",r),Da("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=r.autoReplaceSvgRoot;Oe.autoReplaceSvg===!1&&(Oe.autoReplaceSvg=!0),Oe.observeMutations=!0,y5(function(){B5({autoReplaceSvgRoot:i}),rr("watch",r)})}},L5={icon:function(r){if(r===null)return null;if(Jo(r)==="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:tr(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){var i=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],o=ls(r[0]);return{prefix:o,iconName:tr(o,i)||i}}if(typeof r=="string"&&(r.indexOf("".concat(Oe.cssPrefix,"-"))>-1||r.match(a5))){var s=os(r.split(" "),{skipLookups:!0});return{prefix:s.prefix||Ma(),iconName:tr(s.prefix,s.iconName)||s.iconName}}if(typeof r=="string"){var u=Ma();return{prefix:u,iconName:tr(u,r)||r}}}},sn={noAuto:D5,config:Oe,dom:R5,parse:L5,library:M0,findIconDefinition:dd,toHtml:xl},B5=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=r.autoReplaceSvgRoot,o=i===void 0?dt:i;(Object.keys(Cn.styles).length>0||Oe.autoFetchSvg)&&la&&Oe.autoReplaceSvg&&sn.dom.i2svg({node:o})};function ss(t,r){return Object.defineProperty(t,"abstract",{get:r}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(o){return xl(o)})}}),Object.defineProperty(t,"node",{get:function(){if(la){var o=dt.createElement("div");return o.innerHTML=t.html,o.children}}}),t}function U5(t){var r=t.children,i=t.main,o=t.mask,s=t.attributes,u=t.styles,d=t.transform;if(Md(d)&&i.found&&!o.found){var f=i.width,m=i.height,h={x:f/m/2,y:.5};s.style=is(xe(xe({},u),{},{"transform-origin":"".concat(h.x+d.x/16,"em ").concat(h.y+d.y/16,"em")}))}return[{tag:"svg",attributes:s,children:r}]}function I5(t){var r=t.prefix,i=t.iconName,o=t.children,s=t.attributes,u=t.symbol,d=u===!0?"".concat(r,"-").concat(Oe.cssPrefix,"-").concat(i):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:xe(xe({},s),{},{id:d}),children:o}]}]}function H5(t){var r=["aria-label","aria-labelledby","title","role"];return r.some(function(i){return i in t})}function Ld(t){var r=t.icons,i=r.main,o=r.mask,s=t.prefix,u=t.iconName,d=t.transform,f=t.symbol,m=t.maskId,h=t.extra,v=t.watchable,g=v===void 0?!1:v,x=o.found?o:i,b=x.width,C=x.height,k=[Oe.replacementClass,u?"".concat(Oe.cssPrefix,"-").concat(u):""].filter(function(R){return h.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(h.classes).join(" "),N={children:[],attributes:xe(xe({},h.attributes),{},{"data-prefix":s,"data-icon":u,class:k,role:h.attributes.role||"img",viewBox:"0 0 ".concat(b," ").concat(C)})};!H5(h.attributes)&&!h.attributes["aria-hidden"]&&(N.attributes["aria-hidden"]="true"),g&&(N.attributes[ar]="");var _=xe(xe({},N),{},{prefix:s,iconName:u,main:i,mask:o,maskId:m,transform:d,symbol:f,styles:xe({},h.styles)}),z=o.found&&i.found?Da("generateAbstractMask",_)||{children:[],attributes:{}}:Da("generateAbstractIcon",_)||{children:[],attributes:{}},O=z.children,U=z.attributes;return _.children=O,_.attributes=U,f?I5(_):U5(_)}function _g(t){var r=t.content,i=t.width,o=t.height,s=t.transform,u=t.extra,d=t.watchable,f=d===void 0?!1:d,m=xe(xe({},u.attributes),{},{class:u.classes.join(" ")});f&&(m[ar]="");var h=xe({},u.styles);Md(s)&&(h.transform=g5({transform:s,width:i,height:o}),h["-webkit-transform"]=h.transform);var v=is(h);v.length>0&&(m.style=v);var g=[];return g.push({tag:"span",attributes:m,children:[r]}),g}function F5(t){var r=t.content,i=t.extra,o=xe(xe({},i.attributes),{},{class:i.classes.join(" ")}),s=is(i.styles);s.length>0&&(o.style=s);var u=[];return u.push({tag:"span",attributes:o,children:[r]}),u}var Lc=Cn.styles;function fd(t){var r=t[0],i=t[1],o=t.slice(4),s=rs(o,1),u=s[0],d=null;return Array.isArray(u)?d={tag:"g",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(Mc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(Mc.SECONDARY),fill:"currentColor",d:u[0]}},{tag:"path",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(Mc.PRIMARY),fill:"currentColor",d:u[1]}}]}:d={tag:"path",attributes:{fill:"currentColor",d:u}},{found:!0,width:r,height:i,icon:d}}var q5={found:!1,width:512,height:512};function P5(t,r){!g0&&!Oe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(r,'" is missing.'))}function pd(t,r){var i=r;return r==="fa"&&Oe.styleDefault!==null&&(r=Ma()),new Promise(function(o,s){if(i==="fa"){var u=$0(t)||{};t=u.iconName||t,r=u.prefix||r}if(t&&r&&Lc[r]&&Lc[r][t]){var d=Lc[r][t];return o(fd(d))}P5(t,r),o(xe(xe({},q5),{},{icon:Oe.showMissingIcons&&t?Da("missingIconAbstract")||{}:{}}))})}var Cg=function(){},md=Oe.measurePerformance&&Uo&&Uo.mark&&Uo.measure?Uo:{mark:Cg,measure:Cg},al='FA "7.2.0"',Y5=function(r){return md.mark("".concat(al," ").concat(r," begins")),function(){return D0(r)}},D0=function(r){md.mark("".concat(al," ").concat(r," ends")),md.measure("".concat(al," ").concat(r),"".concat(al," ").concat(r," begins"),"".concat(al," ").concat(r," ends"))},Bd={begin:Y5,end:D0},Zo=function(){};function Ag(t){var r=t.getAttribute?t.getAttribute(ar):null;return typeof r=="string"}function G5(t){var r=t.getAttribute?t.getAttribute(zd):null,i=t.getAttribute?t.getAttribute(Od):null;return r&&i}function V5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Oe.replacementClass)}function X5(){if(Oe.autoReplaceSvg===!0)return Qo.replace;var t=Qo[Oe.autoReplaceSvg];return t||Qo.replace}function Z5(t){return dt.createElementNS("http://www.w3.org/2000/svg",t)}function Q5(t){return dt.createElement(t)}function R0(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.ceFn,o=i===void 0?t.tag==="svg"?Z5:Q5:i;if(typeof t=="string")return dt.createTextNode(t);var s=o(t.tag);Object.keys(t.attributes||[]).forEach(function(d){s.setAttribute(d,t.attributes[d])});var u=t.children||[];return u.forEach(function(d){s.appendChild(R0(d,{ceFn:o}))}),s}function K5(t){var r=" ".concat(t.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var Qo={replace:function(r){var i=r[0];if(i.parentNode)if(r[1].forEach(function(s){i.parentNode.insertBefore(R0(s),i)}),i.getAttribute(ar)===null&&Oe.keepOriginalSource){var o=dt.createComment(K5(i));i.parentNode.replaceChild(o,i)}else i.remove()},nest:function(r){var i=r[0],o=r[1];if(~jd(i).indexOf(Oe.replacementClass))return Qo.replace(r);var s=new RegExp("".concat(Oe.cssPrefix,"-.*"));if(delete o[0].attributes.id,o[0].attributes.class){var u=o[0].attributes.class.split(" ").reduce(function(f,m){return m===Oe.replacementClass||m.match(s)?f.toSvg.push(m):f.toNode.push(m),f},{toNode:[],toSvg:[]});o[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",u.toNode.join(" "))}var d=o.map(function(f){return xl(f)}).join(`
`);i.setAttribute(ar,""),i.innerHTML=d}};function Eg(t){t()}function L0(t,r){var i=typeof r=="function"?r:Zo;if(t.length===0)i();else{var o=Eg;Oe.mutateApproach===e5&&(o=ja.requestAnimationFrame||Eg),o(function(){var s=X5(),u=Bd.begin("mutate");t.map(s),u(),i()})}}var Ud=!1;function B0(){Ud=!0}function hd(){Ud=!1}var es=null;function Ng(t){if(fg&&Oe.observeMutations){var r=t.treeCallback,i=r===void 0?Zo:r,o=t.nodeCallback,s=o===void 0?Zo:o,u=t.pseudoElementsCallback,d=u===void 0?Zo:u,f=t.observeMutationsRoot,m=f===void 0?dt:f;es=new fg(function(h){if(!Ud){var v=Ma();ni(h).forEach(function(g){if(g.type==="childList"&&g.addedNodes.length>0&&!Ag(g.addedNodes[0])&&(Oe.searchPseudoElements&&d(g.target),i(g.target)),g.type==="attributes"&&g.target.parentNode&&Oe.searchPseudoElements&&d([g.target],!0),g.type==="attributes"&&Ag(g.target)&&~l5.indexOf(g.attributeName))if(g.attributeName==="class"&&G5(g.target)){var x=os(jd(g.target)),b=x.prefix,C=x.iconName;g.target.setAttribute(zd,b||v),C&&g.target.setAttribute(Od,C)}else V5(g.target)&&s(g.target)})}}),la&&es.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function J5(){es&&es.disconnect()}function W5(t){var r=t.getAttribute("style"),i=[];return r&&(i=r.split(";").reduce(function(o,s){var u=s.split(":"),d=u[0],f=u.slice(1);return d&&f.length>0&&(o[d]=f.join(":").trim()),o},{})),i}function ew(t){var r=t.getAttribute("data-prefix"),i=t.getAttribute("data-icon"),o=t.innerText!==void 0?t.innerText.trim():"",s=os(jd(t));return s.prefix||(s.prefix=Ma()),r&&i&&(s.prefix=r,s.iconName=i),s.iconName&&s.prefix||(s.prefix&&o.length>0&&(s.iconName=_5(s.prefix,t.innerText)||Rd(s.prefix,_0(t.innerText))),!s.iconName&&Oe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function tw(t){var r=ni(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{});return r}function nw(){return{iconName:null,prefix:null,transform:Dn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tg(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=ew(t),o=i.iconName,s=i.prefix,u=i.rest,d=tw(t),f=cd("parseNodeAttributes",{},t),m=r.styleParser?W5(t):[];return xe({iconName:o,prefix:s,transform:Dn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:m,attributes:d}},f)}var aw=Cn.styles;function U0(t){var r=Oe.autoReplaceSvg==="nest"?Tg(t,{styleParser:!1}):Tg(t);return~r.extra.classes.indexOf(v0)?Da("generateLayersText",t,r):Da("generateSvgReplacementMutation",t,r)}function rw(){return[].concat(An(c0),An(d0))}function zg(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!la)return Promise.resolve();var i=dt.documentElement.classList,o=function(g){return i.add("".concat(hg,"-").concat(g))},s=function(g){return i.remove("".concat(hg,"-").concat(g))},u=Oe.autoFetchSvg?rw():Yb.concat(Object.keys(aw));u.includes("fa")||u.push("fa");var d=[".".concat(v0,":not([").concat(ar,"])")].concat(u.map(function(v){return".".concat(v,":not([").concat(ar,"])")})).join(", ");if(d.length===0)return Promise.resolve();var f=[];try{f=ni(t.querySelectorAll(d))}catch{}if(f.length>0)o("pending"),s("complete");else return Promise.resolve();var m=Bd.begin("onTree"),h=f.reduce(function(v,g){try{var x=U0(g);x&&v.push(x)}catch(b){g0||b.name==="MissingIcon"&&console.error(b)}return v},[]);return new Promise(function(v,g){Promise.all(h).then(function(x){L0(x,function(){o("active"),o("complete"),s("pending"),typeof r=="function"&&r(),m(),v()})}).catch(function(x){m(),g(x)})})}function iw(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;U0(t).then(function(i){i&&L0([i],r)})}function lw(t){return function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=(r||{}).icon?r:dd(r||{}),s=i.mask;return s&&(s=(s||{}).icon?s:dd(s||{})),t(o,xe(xe({},i),{},{mask:s}))}}var ow=function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=i.transform,s=o===void 0?Dn:o,u=i.symbol,d=u===void 0?!1:u,f=i.mask,m=f===void 0?null:f,h=i.maskId,v=h===void 0?null:h,g=i.classes,x=g===void 0?[]:g,b=i.attributes,C=b===void 0?{}:b,k=i.styles,N=k===void 0?{}:k;if(r){var _=r.prefix,z=r.iconName,O=r.icon;return ss(xe({type:"icon"},r),function(){return rr("beforeDOMElementCreation",{iconDefinition:r,params:i}),Ld({icons:{main:fd(O),mask:m?fd(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:z,transform:xe(xe({},Dn),s),symbol:d,maskId:v,extra:{attributes:C,styles:N,classes:x}})})}},sw={mixout:function(){return{icon:lw(ow)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=zg,i.nodeCallback=iw,i}}},provides:function(r){r.i2svg=function(i){var o=i.node,s=o===void 0?dt:o,u=i.callback,d=u===void 0?function(){}:u;return zg(s,d)},r.generateSvgReplacementMutation=function(i,o){var s=o.iconName,u=o.prefix,d=o.transform,f=o.symbol,m=o.mask,h=o.maskId,v=o.extra;return new Promise(function(g,x){Promise.all([pd(s,u),m.iconName?pd(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var C=rs(b,2),k=C[0],N=C[1];g([i,Ld({icons:{main:k,mask:N},prefix:u,iconName:s,transform:d,symbol:f,maskId:h,extra:v,watchable:!0})])}).catch(x)})},r.generateAbstractIcon=function(i){var o=i.children,s=i.attributes,u=i.main,d=i.transform,f=i.styles,m=is(f);m.length>0&&(s.style=m);var h;return Md(d)&&(h=Da("generateAbstractTransformGrouping",{main:u,transform:d,containerWidth:u.width,iconWidth:u.width})),o.push(h||u.icon),{children:o,attributes:s}}}},uw={mixout:function(){return{layer:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=o.classes,u=s===void 0?[]:s;return ss({type:"layer"},function(){rr("beforeDOMElementCreation",{assembler:i,params:o});var d=[];return i(function(f){Array.isArray(f)?f.map(function(m){d=d.concat(m.abstract)}):d=d.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(Oe.cssPrefix,"-layers")].concat(An(u)).join(" ")},children:d}]})}}}},cw={mixout:function(){return{counter:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};o.title;var s=o.classes,u=s===void 0?[]:s,d=o.attributes,f=d===void 0?{}:d,m=o.styles,h=m===void 0?{}:m;return ss({type:"counter",content:i},function(){return rr("beforeDOMElementCreation",{content:i,params:o}),F5({content:i.toString(),extra:{attributes:f,styles:h,classes:["".concat(Oe.cssPrefix,"-layers-counter")].concat(An(u))}})})}}}},dw={mixout:function(){return{text:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=o.transform,u=s===void 0?Dn:s,d=o.classes,f=d===void 0?[]:d,m=o.attributes,h=m===void 0?{}:m,v=o.styles,g=v===void 0?{}:v;return ss({type:"text",content:i},function(){return rr("beforeDOMElementCreation",{content:i,params:o}),_g({content:i,transform:xe(xe({},Dn),u),extra:{attributes:h,styles:g,classes:["".concat(Oe.cssPrefix,"-layers-text")].concat(An(f))}})})}}},provides:function(r){r.generateLayersText=function(i,o){var s=o.transform,u=o.extra,d=null,f=null;if(qb){var m=parseInt(getComputedStyle(i).fontSize,10),h=i.getBoundingClientRect();d=h.width/m,f=h.height/m}return Promise.resolve([i,_g({content:i.innerHTML,width:d,height:f,transform:s,extra:u,watchable:!0})])}}},I0=new RegExp('"',"ug"),Og=[1105920,1112319],$g=xe(xe(xe(xe({},{FontAwesome:{normal:"fas",400:"fas"}}),Y2),Jx),ex),gd=Object.keys($g).reduce(function(t,r){return t[r.toLowerCase()]=$g[r],t},{}),fw=Object.keys(gd).reduce(function(t,r){var i=gd[r];return t[r]=i[900]||An(Object.entries(i))[0][1],t},{});function pw(t){var r=t.replace(I0,"");return _0(An(r)[0]||"")}function mw(t){var r=t.getPropertyValue("font-feature-settings").includes("ss01"),i=t.getPropertyValue("content"),o=i.replace(I0,""),s=o.codePointAt(0),u=s>=Og[0]&&s<=Og[1],d=o.length===2?o[0]===o[1]:!1;return u||d||r}function hw(t,r){var i=t.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(r),s=isNaN(o)?"normal":o;return(gd[i]||{})[s]||fw[i]}function jg(t,r){var i="".concat(Wx).concat(r.replace(":","-"));return new Promise(function(o,s){if(t.getAttribute(i)!==null)return o();var u=ni(t.children),d=u.filter(function(B){return B.getAttribute(id)===r})[0],f=ja.getComputedStyle(t,r),m=f.getPropertyValue("font-family"),h=m.match(r5),v=f.getPropertyValue("font-weight"),g=f.getPropertyValue("content");if(d&&!h)return t.removeChild(d),o();if(h&&g!=="none"&&g!==""){var x=f.getPropertyValue("content"),b=hw(m,v),C=pw(x),k=h[0].startsWith("FontAwesome"),N=mw(f),_=Rd(b,C),z=_;if(k){var O=C5(C);O.iconName&&O.prefix&&(_=O.iconName,b=O.prefix)}if(_&&!N&&(!d||d.getAttribute(zd)!==b||d.getAttribute(Od)!==z)){t.setAttribute(i,z),d&&t.removeChild(d);var U=nw(),R=U.extra;R.attributes[id]=r,pd(_,b).then(function(B){var q=Ld(xe(xe({},U),{},{icons:{main:B,mask:j0()},prefix:b,iconName:z,extra:R,watchable:!0})),ae=dt.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?t.insertBefore(ae,t.firstChild):t.appendChild(ae),ae.outerHTML=q.map(function(G){return xl(G)}).join(`
`),t.removeAttribute(i),o()}).catch(s)}else o()}else o()})}function gw(t){return Promise.all([jg(t,"::before"),jg(t,"::after")])}function bw(t){return t.parentNode!==document.head&&!~t5.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(id)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var vw=function(r){return!!r&&h0.some(function(i){return r.includes(i)})},yw=function(r){if(!r)return[];var i=new Set,o=r.split(/,(?![^()]*\))/).map(function(m){return m.trim()});o=o.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(h){return h.trim()})});var s=Xo(o),u;try{for(s.s();!(u=s.n()).done;){var d=u.value;if(vw(d)){var f=h0.reduce(function(m,h){return m.replace(h,"")},d);f!==""&&f!=="*"&&i.add(f)}}}catch(m){s.e(m)}finally{s.f()}return i};function Mg(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(la){var i;if(r)i=t;else if(Oe.searchPseudoElementsFullScan)i=t.querySelectorAll("*");else{var o=new Set,s=Xo(document.styleSheets),u;try{for(s.s();!(u=s.n()).done;){var d=u.value;try{var f=Xo(d.cssRules),m;try{for(f.s();!(m=f.n()).done;){var h=m.value,v=yw(h.selectorText),g=Xo(v),x;try{for(g.s();!(x=g.n()).done;){var b=x.value;o.add(b)}}catch(k){g.e(k)}finally{g.f()}}}catch(k){f.e(k)}finally{f.f()}}catch(k){Oe.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(d.href," (").concat(k.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(k){s.e(k)}finally{s.f()}if(!o.size)return;var C=Array.from(o).join(", ");try{i=t.querySelectorAll(C)}catch{}}return new Promise(function(k,N){var _=ni(i).filter(bw).map(gw),z=Bd.begin("searchPseudoElements");B0(),Promise.all(_).then(function(){z(),hd(),k()}).catch(function(){z(),hd(),N()})})}}var xw={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=Mg,i}}},provides:function(r){r.pseudoElements2svg=function(i){var o=i.node,s=o===void 0?dt:o;Oe.searchPseudoElements&&Mg(s)}}},Dg=!1,ww={mixout:function(){return{dom:{unwatch:function(){B0(),Dg=!0}}}},hooks:function(){return{bootstrap:function(){Ng(cd("mutationObserverCallbacks",{}))},noAuto:function(){J5()},watch:function(i){var o=i.observeMutationsRoot;Dg?hd():Ng(cd("mutationObserverCallbacks",{observeMutationsRoot:o}))}}}},Rg=function(r){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce(function(o,s){var u=s.toLowerCase().split("-"),d=u[0],f=u.slice(1).join("-");if(d&&f==="h")return o.flipX=!0,o;if(d&&f==="v")return o.flipY=!0,o;if(f=parseFloat(f),isNaN(f))return o;switch(d){case"grow":o.size=o.size+f;break;case"shrink":o.size=o.size-f;break;case"left":o.x=o.x-f;break;case"right":o.x=o.x+f;break;case"up":o.y=o.y-f;break;case"down":o.y=o.y+f;break;case"rotate":o.rotate=o.rotate+f;break}return o},i)},kw={mixout:function(){return{parse:{transform:function(i){return Rg(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,o){var s=o.getAttribute("data-fa-transform");return s&&(i.transform=Rg(s)),i}}},provides:function(r){r.generateAbstractTransformGrouping=function(i){var o=i.main,s=i.transform,u=i.containerWidth,d=i.iconWidth,f={transform:"translate(".concat(u/2," 256)")},m="translate(".concat(s.x*32,", ").concat(s.y*32,") "),h="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),v="rotate(".concat(s.rotate," 0 0)"),g={transform:"".concat(m," ").concat(h," ").concat(v)},x={transform:"translate(".concat(d/2*-1," -256)")},b={outer:f,inner:g,path:x};return{tag:"g",attributes:xe({},b.outer),children:[{tag:"g",attributes:xe({},b.inner),children:[{tag:o.icon.tag,children:o.icon.children,attributes:xe(xe({},o.icon.attributes),b.path)}]}]}}}},Bc={x:0,y:0,width:"100%",height:"100%"};function Lg(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||r)&&(t.attributes.fill="black"),t}function Sw(t){return t.tag==="g"?t.children:[t]}var _w={hooks:function(){return{parseNodeAttributes:function(i,o){var s=o.getAttribute("data-fa-mask"),u=s?os(s.split(" ").map(function(d){return d.trim()})):j0();return u.prefix||(u.prefix=Ma()),i.mask=u,i.maskId=o.getAttribute("data-fa-mask-id"),i}}},provides:function(r){r.generateAbstractMask=function(i){var o=i.children,s=i.attributes,u=i.main,d=i.mask,f=i.maskId,m=i.transform,h=u.width,v=u.icon,g=d.width,x=d.icon,b=h5({transform:m,containerWidth:g,iconWidth:h}),C={tag:"rect",attributes:xe(xe({},Bc),{},{fill:"white"})},k=v.children?{children:v.children.map(Lg)}:{},N={tag:"g",attributes:xe({},b.inner),children:[Lg(xe({tag:v.tag,attributes:xe(xe({},v.attributes),b.path)},k))]},_={tag:"g",attributes:xe({},b.outer),children:[N]},z="mask-".concat(f||bg()),O="clip-".concat(f||bg()),U={tag:"mask",attributes:xe(xe({},Bc),{},{id:z,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,_]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Sw(x)},U]};return o.push(R,{tag:"rect",attributes:xe({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(z,")")},Bc)}),{children:o,attributes:s}}}},Cw={provides:function(r){var i=!1;ja.matchMedia&&(i=ja.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){var o=[],s={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};o.push({tag:"path",attributes:xe(xe({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var d=xe(xe({},u),{},{attributeName:"opacity"}),f={tag:"circle",attributes:xe(xe({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||f.children.push({tag:"animate",attributes:xe(xe({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:xe(xe({},d),{},{values:"1;0;1;1;0;1;"})}),o.push(f),o.push({tag:"path",attributes:xe(xe({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:xe(xe({},d),{},{values:"1;0;0;0;0;1;"})}]}),i||o.push({tag:"path",attributes:xe(xe({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:xe(xe({},d),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:o}}}},Aw={hooks:function(){return{parseNodeAttributes:function(i,o){var s=o.getAttribute("data-fa-symbol"),u=s===null?!1:s===""?!0:s;return i.symbol=u,i}}}},Ew=[v5,sw,uw,cw,dw,xw,ww,kw,_w,Cw,Aw];M5(Ew,{mixoutsTo:sn});sn.noAuto;var ti=sn.config;sn.library;sn.dom;var H0=sn.parse;sn.findIconDefinition;sn.toHtml;var Nw=sn.icon;sn.layer;sn.text;sn.counter;function Tw(t){return t=t-0,t===t}function F0(t){return Tw(t)?t:(t=t.replace(/[_-]+(.)?/g,(r,i)=>i?i.toUpperCase():""),t.charAt(0).toLowerCase()+t.slice(1))}var zw=(t,r)=>Rn.createElement("stop",{key:`${r}-${t.offset}`,offset:t.offset,stopColor:t.color,...t.opacity!==void 0&&{stopOpacity:t.opacity}});function Ow(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Gr=new Map,$w=1e3;function jw(t){if(Gr.has(t))return Gr.get(t);const r={};let i=0;const o=t.length;for(;i<o;){const s=t.indexOf(";",i),u=s===-1?o:s,d=t.slice(i,u).trim();if(d){const f=d.indexOf(":");if(f>0){const m=d.slice(0,f).trim(),h=d.slice(f+1).trim();if(m&&h){const v=F0(m);r[v.startsWith("webkit")?Ow(v):v]=h}}}i=u+1}if(Gr.size===$w){const s=Gr.keys().next().value;s&&Gr.delete(s)}return Gr.set(t,r),r}function q0(t,r,i={}){if(typeof r=="string")return r;const o=(r.children||[]).map(g=>{let x=g;return("fill"in i||i.gradientFill)&&g.tag==="path"&&"fill"in g.attributes&&(x={...g,attributes:{...g.attributes,fill:void 0}}),q0(t,x)}),s=r.attributes||{},u={};for(const[g,x]of Object.entries(s))switch(!0){case g==="class":{u.className=x;break}case g==="style":{u.style=jw(String(x));break}case g.startsWith("aria-"):case g.startsWith("data-"):{u[g.toLowerCase()]=x;break}default:u[F0(g)]=x}const{style:d,role:f,"aria-label":m,gradientFill:h,...v}=i;if(d&&(u.style=u.style?{...u.style,...d}:d),f&&(u.role=f),m&&(u["aria-label"]=m,u["aria-hidden"]="false"),h){u.fill=`url(#${h.id})`;const{type:g,stops:x=[],...b}=h;o.unshift(t(g==="linear"?"linearGradient":"radialGradient",{...b,id:h.id},x.map(zw)))}return t(r.tag,{...u,...v},...o)}var Mw=q0.bind(null,Rn.createElement),Bg=(t,r)=>{const i=Ae.useId();return t||(r?i:void 0)},Dw=class{constructor(t="react-fontawesome"){this.enabled=!1;let r=!1;try{r=typeof process<"u"&&!1}catch{}this.scope=t,this.enabled=r}log(...t){this.enabled&&console.log(`[${this.scope}]`,...t)}warn(...t){this.enabled&&console.warn(`[${this.scope}]`,...t)}error(...t){this.enabled&&console.error(`[${this.scope}]`,...t)}},Rw="searchPseudoElementsFullScan"in ti&&typeof ti.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",Lw=Number.parseInt(Rw)>=7,Bw=()=>Lw,ul="fa",na={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Uw={left:"fa-pull-left",right:"fa-pull-right"},Iw={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Hw={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},aa={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Fw(t){const r=ti.cssPrefix||ti.familyPrefix||ul;return r===ul?t:t.replace(new RegExp(String.raw`(?<=^|\s)${ul}-`,"g"),`${r}-`)}function qw(t){const{beat:r,fade:i,beatFade:o,bounce:s,shake:u,spin:d,spinPulse:f,spinReverse:m,pulse:h,fixedWidth:v,inverse:g,border:x,flip:b,size:C,rotation:k,pull:N,swapOpacity:_,rotateBy:z,widthAuto:O,className:U}=t,R=[];return U&&R.push(...U.split(" ")),r&&R.push(na.beat),i&&R.push(na.fade),o&&R.push(na.beatFade),s&&R.push(na.bounce),u&&R.push(na.shake),d&&R.push(na.spin),m&&R.push(na.spinReverse),f&&R.push(na.spinPulse),h&&R.push(na.pulse),v&&R.push(aa.fixedWidth),g&&R.push(aa.inverse),x&&R.push(aa.border),b===!0&&R.push(aa.flip),(b==="horizontal"||b==="both")&&R.push(aa.flipHorizontal),(b==="vertical"||b==="both")&&R.push(aa.flipVertical),C!=null&&R.push(Hw[C]),k!=null&&k!==0&&R.push(Iw[k]),N!=null&&R.push(Uw[N]),_&&R.push(aa.swapOpacity),Bw()?(z&&R.push(aa.rotateBy),O&&R.push(aa.widthAuto),(ti.cssPrefix||ti.familyPrefix||ul)===ul?R:R.map(Fw)):R}var Pw=t=>typeof t=="object"&&"icon"in t&&!!t.icon;function Ug(t){if(t)return Pw(t)?t:H0.icon(t)}function Yw(t){return Object.keys(t)}var Ig=new Dw("FontAwesomeIcon"),P0={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Gw=new Set(Object.keys(P0)),Y0=Rn.forwardRef((t,r)=>{const i={...P0,...t},{icon:o,mask:s,symbol:u,title:d,titleId:f,maskId:m,transform:h}=i,v=Bg(m,!!s),g=Bg(f,!!d),x=Ug(o);if(!x)return Ig.error("Icon lookup is undefined",o),null;const b=qw(i),C=typeof h=="string"?H0.transform(h):h,k=Ug(s),N=Nw(x,{...b.length>0&&{classes:b},...C&&{transform:C},...k&&{mask:k},symbol:u,title:d,titleId:g,maskId:v});if(!N)return Ig.error("Could not find icon",x),null;const{abstract:_}=N,z={ref:r};for(const O of Yw(i))Gw.has(O)||(z[O]=i[O]);return Mw(_[0],z)});Y0.displayName="FontAwesomeIcon";const Vw={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Xw={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};function Hg(t,r){(r==null||r>t.length)&&(r=t.length);for(var i=0,o=Array(r);i<r;i++)o[i]=t[i];return o}function Zw(t){if(Array.isArray(t))return t}function Qw(t,r,i){return(r=ak(r))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function Kw(t,r){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var o,s,u,d,f=[],m=!0,h=!1;try{if(u=(i=i.call(t)).next,r!==0)for(;!(m=(o=u.call(i)).done)&&(f.push(o.value),f.length!==r);m=!0);}catch(v){h=!0,s=v}finally{try{if(!m&&i.return!=null&&(d=i.return(),Object(d)!==d))return}finally{if(h)throw s}}return f}}function Jw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fg(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,o)}return i}function qg(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?Fg(Object(i),!0).forEach(function(o){Qw(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Fg(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function Ww(t,r){if(t==null)return{};var i,o,s=ek(t,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(o=0;o<u.length;o++)i=u[o],r.indexOf(i)===-1&&{}.propertyIsEnumerable.call(t,i)&&(s[i]=t[i])}return s}function ek(t,r){if(t==null)return{};var i={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(r.indexOf(o)!==-1)continue;i[o]=t[o]}return i}function tk(t,r){return Zw(t)||Kw(t,r)||rk(t,r)||Jw()}function nk(t,r){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function ak(t){var r=nk(t,"string");return typeof r=="symbol"?r:r+""}function rk(t,r){if(t){if(typeof t=="string")return Hg(t,r);var i={}.toString.call(t).slice(8,-1);return i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set"?Array.from(t):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Hg(t,r):void 0}}function ik(t,r,i){return r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function Pg(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,o)}return i}function Yg(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?Pg(Object(i),!0).forEach(function(o){ik(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Pg(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function lk(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return function(o){return r.reduceRight(function(s,u){return u(s)},o)}}function rl(t){return function r(){for(var i=this,o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return s.length>=t.length?t.apply(this,s):function(){for(var d=arguments.length,f=new Array(d),m=0;m<d;m++)f[m]=arguments[m];return r.apply(i,[].concat(s,f))}}}function ts(t){return{}.toString.call(t).includes("Object")}function ok(t){return!Object.keys(t).length}function hl(t){return typeof t=="function"}function sk(t,r){return Object.prototype.hasOwnProperty.call(t,r)}function uk(t,r){return ts(r)||$a("changeType"),Object.keys(r).some(function(i){return!sk(t,i)})&&$a("changeField"),r}function ck(t){hl(t)||$a("selectorType")}function dk(t){hl(t)||ts(t)||$a("handlerType"),ts(t)&&Object.values(t).some(function(r){return!hl(r)})&&$a("handlersType")}function fk(t){t||$a("initialIsRequired"),ts(t)||$a("initialType"),ok(t)&&$a("initialContent")}function pk(t,r){throw new Error(t[r]||t.default)}var mk={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},$a=rl(pk)(mk),Ho={changes:uk,selector:ck,handler:dk,initial:fk};function hk(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ho.initial(t),Ho.handler(r);var i={current:t},o=rl(vk)(i,r),s=rl(bk)(i),u=rl(Ho.changes)(t),d=rl(gk)(i);function f(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(v){return v};return Ho.selector(h),h(i.current)}function m(h){lk(o,s,u,d)(h)}return[f,m]}function gk(t,r){return hl(r)?r(t.current):r}function bk(t,r){return t.current=Yg(Yg({},t.current),r),r}function vk(t,r,i){return hl(r)?r(t.current):Object.keys(i).forEach(function(o){var s;return(s=r[o])===null||s===void 0?void 0:s.call(r,t.current[o])}),i}var yk={create:hk},xk={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function wk(t){return function r(){for(var i=this,o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return s.length>=t.length?t.apply(this,s):function(){for(var d=arguments.length,f=new Array(d),m=0;m<d;m++)f[m]=arguments[m];return r.apply(i,[].concat(s,f))}}}function kk(t){return{}.toString.call(t).includes("Object")}function Sk(t){return t||Gg("configIsRequired"),kk(t)||Gg("configType"),t.urls?(_k(),{paths:{vs:t.urls.monacoBase}}):t}function _k(){console.warn(G0.deprecation)}function Ck(t,r){throw new Error(t[r]||t.default)}var G0={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Gg=wk(Ck)(G0),Ak={config:Sk},Ek=function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return function(s){return i.reduceRight(function(u,d){return d(u)},s)}};function V0(t,r){return Object.keys(r).forEach(function(i){r[i]instanceof Object&&t[i]&&Object.assign(r[i],V0(t[i],r[i]))}),qg(qg({},t),r)}var Nk={type:"cancelation",msg:"operation is manually canceled"};function Uc(t){var r=!1,i=new Promise(function(o,s){t.then(function(u){return r?s(Nk):o(u)}),t.catch(s)});return i.cancel=function(){return r=!0},i}var Tk=["monaco"],zk=yk.create({config:xk,isInitialized:!1,resolve:null,reject:null,monaco:null}),X0=tk(zk,2),wl=X0[0],us=X0[1];function Ok(t){var r=Ak.config(t),i=r.monaco,o=Ww(r,Tk);us(function(s){return{config:V0(s.config,o),monaco:i}})}function $k(){var t=wl(function(r){var i=r.monaco,o=r.isInitialized,s=r.resolve;return{monaco:i,isInitialized:o,resolve:s}});if(!t.isInitialized){if(us({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),Uc(Ic);if(window.monaco&&window.monaco.editor)return Z0(window.monaco),t.resolve(window.monaco),Uc(Ic);Ek(jk,Dk)(Rk)}return Uc(Ic)}function jk(t){return document.body.appendChild(t)}function Mk(t){var r=document.createElement("script");return t&&(r.src=t),r}function Dk(t){var r=wl(function(o){var s=o.config,u=o.reject;return{config:s,reject:u}}),i=Mk("".concat(r.config.paths.vs,"/loader.js"));return i.onload=function(){return t()},i.onerror=r.reject,i}function Rk(){var t=wl(function(i){var o=i.config,s=i.resolve,u=i.reject;return{config:o,resolve:s,reject:u}}),r=window.require;r.config(t.config),r(["vs/editor/editor.main"],function(i){var o=i.m||i;Z0(o),t.resolve(o)},function(i){t.reject(i)})}function Z0(t){wl().monaco||us({monaco:t})}function Lk(){return wl(function(t){var r=t.monaco;return r})}var Ic=new Promise(function(t,r){return us({resolve:t,reject:r})}),Q0={config:Ok,init:$k,__getMonacoInstance:Lk},Bk={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Hc=Bk,Uk={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Ik=Uk;function Hk({children:t}){return Rn.createElement("div",{style:Ik.container},t)}var Fk=Hk,qk=Fk;function Pk({width:t,height:r,isEditorReady:i,loading:o,_ref:s,className:u,wrapperProps:d}){return Rn.createElement("section",{style:{...Hc.wrapper,width:t,height:r},...d},!i&&Rn.createElement(qk,null,o),Rn.createElement("div",{ref:s,style:{...Hc.fullWidth,...!i&&Hc.hide},className:u}))}var Yk=Pk,K0=Ae.memo(Yk);function Gk(t){Ae.useEffect(t,[])}var J0=Gk;function Vk(t,r,i=!0){let o=Ae.useRef(!0);Ae.useEffect(o.current||!i?()=>{o.current=!1}:t,r)}var ln=Vk;function cl(){}function Qr(t,r,i,o){return Xk(t,o)||Zk(t,r,i,o)}function Xk(t,r){return t.editor.getModel(W0(t,r))}function Zk(t,r,i,o){return t.editor.createModel(r,i,o?W0(t,o):void 0)}function W0(t,r){return t.Uri.parse(r)}function Qk({original:t,modified:r,language:i,originalLanguage:o,modifiedLanguage:s,originalModelPath:u,modifiedModelPath:d,keepCurrentOriginalModel:f=!1,keepCurrentModifiedModel:m=!1,theme:h="light",loading:v="Loading...",options:g={},height:x="100%",width:b="100%",className:C,wrapperProps:k={},beforeMount:N=cl,onMount:_=cl}){let[z,O]=Ae.useState(!1),[U,R]=Ae.useState(!0),B=Ae.useRef(null),q=Ae.useRef(null),ae=Ae.useRef(null),G=Ae.useRef(_),te=Ae.useRef(N),ue=Ae.useRef(!1);J0(()=>{let H=Q0.init();return H.then(F=>(q.current=F)&&R(!1)).catch(F=>F?.type!=="cancelation"&&console.error("Monaco initialization: error:",F)),()=>B.current?S():H.cancel()}),ln(()=>{if(B.current&&q.current){let H=B.current.getOriginalEditor(),F=Qr(q.current,t||"",o||i||"text",u||"");F!==H.getModel()&&H.setModel(F)}},[u],z),ln(()=>{if(B.current&&q.current){let H=B.current.getModifiedEditor(),F=Qr(q.current,r||"",s||i||"text",d||"");F!==H.getModel()&&H.setModel(F)}},[d],z),ln(()=>{let H=B.current.getModifiedEditor();H.getOption(q.current.editor.EditorOption.readOnly)?H.setValue(r||""):r!==H.getValue()&&(H.executeEdits("",[{range:H.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),H.pushUndoStop())},[r],z),ln(()=>{B.current?.getModel()?.original.setValue(t||"")},[t],z),ln(()=>{let{original:H,modified:F}=B.current.getModel();q.current.editor.setModelLanguage(H,o||i||"text"),q.current.editor.setModelLanguage(F,s||i||"text")},[i,o,s],z),ln(()=>{q.current?.editor.setTheme(h)},[h],z),ln(()=>{B.current?.updateOptions(g)},[g],z);let j=Ae.useCallback(()=>{if(!q.current)return;te.current(q.current);let H=Qr(q.current,t||"",o||i||"text",u||""),F=Qr(q.current,r||"",s||i||"text",d||"");B.current?.setModel({original:H,modified:F})},[i,r,s,t,o,u,d]),J=Ae.useCallback(()=>{!ue.current&&ae.current&&(B.current=q.current.editor.createDiffEditor(ae.current,{automaticLayout:!0,...g}),j(),q.current?.editor.setTheme(h),O(!0),ue.current=!0)},[g,h,j]);Ae.useEffect(()=>{z&&G.current(B.current,q.current)},[z]),Ae.useEffect(()=>{!U&&!z&&J()},[U,z,J]);function S(){let H=B.current?.getModel();f||H?.original?.dispose(),m||H?.modified?.dispose(),B.current?.dispose()}return Rn.createElement(K0,{width:b,height:x,isEditorReady:z,loading:v,_ref:ae,className:C,wrapperProps:k})}var Kk=Qk;Ae.memo(Kk);function Jk(t){let r=Ae.useRef();return Ae.useEffect(()=>{r.current=t},[t]),r.current}var Wk=Jk,Fo=new Map;function eS({defaultValue:t,defaultLanguage:r,defaultPath:i,value:o,language:s,path:u,theme:d="light",line:f,loading:m="Loading...",options:h={},overrideServices:v={},saveViewState:g=!0,keepCurrentModel:x=!1,width:b="100%",height:C="100%",className:k,wrapperProps:N={},beforeMount:_=cl,onMount:z=cl,onChange:O,onValidate:U=cl}){let[R,B]=Ae.useState(!1),[q,ae]=Ae.useState(!0),G=Ae.useRef(null),te=Ae.useRef(null),ue=Ae.useRef(null),j=Ae.useRef(z),J=Ae.useRef(_),S=Ae.useRef(),H=Ae.useRef(o),F=Wk(u),Y=Ae.useRef(!1),be=Ae.useRef(!1);J0(()=>{let A=Q0.init();return A.then(M=>(G.current=M)&&ae(!1)).catch(M=>M?.type!=="cancelation"&&console.error("Monaco initialization: error:",M)),()=>te.current?$():A.cancel()}),ln(()=>{let A=Qr(G.current,t||o||"",r||s||"",u||i||"");A!==te.current?.getModel()&&(g&&Fo.set(F,te.current?.saveViewState()),te.current?.setModel(A),g&&te.current?.restoreViewState(Fo.get(u)))},[u],R),ln(()=>{te.current?.updateOptions(h)},[h],R),ln(()=>{!te.current||o===void 0||(te.current.getOption(G.current.editor.EditorOption.readOnly)?te.current.setValue(o):o!==te.current.getValue()&&(be.current=!0,te.current.executeEdits("",[{range:te.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),te.current.pushUndoStop(),be.current=!1))},[o],R),ln(()=>{let A=te.current?.getModel();A&&s&&G.current?.editor.setModelLanguage(A,s)},[s],R),ln(()=>{f!==void 0&&te.current?.revealLine(f)},[f],R),ln(()=>{G.current?.editor.setTheme(d)},[d],R);let le=Ae.useCallback(()=>{if(!(!ue.current||!G.current)&&!Y.current){J.current(G.current);let A=u||i,M=Qr(G.current,o||t||"",r||s||"",A||"");te.current=G.current?.editor.create(ue.current,{model:M,automaticLayout:!0,...h},v),g&&te.current.restoreViewState(Fo.get(A)),G.current.editor.setTheme(d),f!==void 0&&te.current.revealLine(f),B(!0),Y.current=!0}},[t,r,i,o,s,u,h,v,g,d,f]);Ae.useEffect(()=>{R&&j.current(te.current,G.current)},[R]),Ae.useEffect(()=>{!q&&!R&&le()},[q,R,le]),H.current=o,Ae.useEffect(()=>{R&&O&&(S.current?.dispose(),S.current=te.current?.onDidChangeModelContent(A=>{be.current||O(te.current.getValue(),A)}))},[R,O]),Ae.useEffect(()=>{if(R){let A=G.current.editor.onDidChangeMarkers(M=>{let T=te.current.getModel()?.uri;if(T&&M.find(ne=>ne.path===T.path)){let ne=G.current.editor.getModelMarkers({resource:T});U?.(ne)}});return()=>{A?.dispose()}}return()=>{}},[R,U]);function $(){S.current?.dispose(),x?g&&Fo.set(u,te.current.saveViewState()):te.current.getModel()?.dispose(),te.current.dispose()}return Rn.createElement(K0,{width:b,height:C,isEditorReady:R,loading:m,_ref:ue,className:k,wrapperProps:N})}var tS=eS,nS=Ae.memo(tS),aS=nS;function qo(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Fc={exports:{}};var Vg;function rS(){return Vg||(Vg=1,(function(t,r){(function(i){t.exports=i()})(function(){return(function i(o,s,u){function d(h,v){if(!s[h]){if(!o[h]){var g=typeof qo=="function"&&qo;if(!v&&g)return g(h,!0);if(f)return f(h,!0);var x=new Error("Cannot find module '"+h+"'");throw x.code="MODULE_NOT_FOUND",x}var b=s[h]={exports:{}};o[h][0].call(b.exports,function(C){var k=o[h][1][C];return d(k||C)},b,b.exports,i,o,s,u)}return s[h].exports}for(var f=typeof qo=="function"&&qo,m=0;m<u.length;m++)d(u[m]);return d})({1:[function(i,o,s){var u=i("./utils"),d=i("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(m){for(var h,v,g,x,b,C,k,N=[],_=0,z=m.length,O=z,U=u.getTypeOf(m)!=="string";_<m.length;)O=z-_,g=U?(h=m[_++],v=_<z?m[_++]:0,_<z?m[_++]:0):(h=m.charCodeAt(_++),v=_<z?m.charCodeAt(_++):0,_<z?m.charCodeAt(_++):0),x=h>>2,b=(3&h)<<4|v>>4,C=1<O?(15&v)<<2|g>>6:64,k=2<O?63&g:64,N.push(f.charAt(x)+f.charAt(b)+f.charAt(C)+f.charAt(k));return N.join("")},s.decode=function(m){var h,v,g,x,b,C,k=0,N=0,_="data:";if(m.substr(0,_.length)===_)throw new Error("Invalid base64 input, it looks like a data url.");var z,O=3*(m=m.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(m.charAt(m.length-1)===f.charAt(64)&&O--,m.charAt(m.length-2)===f.charAt(64)&&O--,O%1!=0)throw new Error("Invalid base64 input, bad content length.");for(z=d.uint8array?new Uint8Array(0|O):new Array(0|O);k<m.length;)h=f.indexOf(m.charAt(k++))<<2|(x=f.indexOf(m.charAt(k++)))>>4,v=(15&x)<<4|(b=f.indexOf(m.charAt(k++)))>>2,g=(3&b)<<6|(C=f.indexOf(m.charAt(k++))),z[N++]=h,b!==64&&(z[N++]=v),C!==64&&(z[N++]=g);return z}},{"./support":30,"./utils":32}],2:[function(i,o,s){var u=i("./external"),d=i("./stream/DataWorker"),f=i("./stream/Crc32Probe"),m=i("./stream/DataLengthProbe");function h(v,g,x,b,C){this.compressedSize=v,this.uncompressedSize=g,this.crc32=x,this.compression=b,this.compressedContent=C}h.prototype={getContentWorker:function(){var v=new d(u.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new m("data_length")),g=this;return v.on("end",function(){if(this.streamInfo.data_length!==g.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),v},getCompressedWorker:function(){return new d(u.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(v,g,x){return v.pipe(new f).pipe(new m("uncompressedSize")).pipe(g.compressWorker(x)).pipe(new m("compressedSize")).withStreamInfo("compression",g)},o.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,o,s){var u=i("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new u("STORE compression")},uncompressWorker:function(){return new u("STORE decompression")}},s.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,o,s){var u=i("./utils"),d=(function(){for(var f,m=[],h=0;h<256;h++){f=h;for(var v=0;v<8;v++)f=1&f?3988292384^f>>>1:f>>>1;m[h]=f}return m})();o.exports=function(f,m){return f!==void 0&&f.length?u.getTypeOf(f)!=="string"?(function(h,v,g,x){var b=d,C=x+g;h^=-1;for(var k=x;k<C;k++)h=h>>>8^b[255&(h^v[k])];return-1^h})(0|m,f,f.length,0):(function(h,v,g,x){var b=d,C=x+g;h^=-1;for(var k=x;k<C;k++)h=h>>>8^b[255&(h^v.charCodeAt(k))];return-1^h})(0|m,f,f.length,0):0}},{"./utils":32}],5:[function(i,o,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(i,o,s){var u=null;u=typeof Promise<"u"?Promise:i("lie"),o.exports={Promise:u}},{lie:37}],7:[function(i,o,s){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",d=i("pako"),f=i("./utils"),m=i("./stream/GenericWorker"),h=u?"uint8array":"array";function v(g,x){m.call(this,"FlateWorker/"+g),this._pako=null,this._pakoAction=g,this._pakoOptions=x,this.meta={}}s.magic="\b\0",f.inherits(v,m),v.prototype.processChunk=function(g){this.meta=g.meta,this._pako===null&&this._createPako(),this._pako.push(f.transformTo(h,g.data),!1)},v.prototype.flush=function(){m.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},v.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this._pako=null},v.prototype._createPako=function(){this._pako=new d[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var g=this;this._pako.onData=function(x){g.push({data:x,meta:g.meta})}},s.compressWorker=function(g){return new v("Deflate",g)},s.uncompressWorker=function(){return new v("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,o,s){function u(b,C){var k,N="";for(k=0;k<C;k++)N+=String.fromCharCode(255&b),b>>>=8;return N}function d(b,C,k,N,_,z){var O,U,R=b.file,B=b.compression,q=z!==h.utf8encode,ae=f.transformTo("string",z(R.name)),G=f.transformTo("string",h.utf8encode(R.name)),te=R.comment,ue=f.transformTo("string",z(te)),j=f.transformTo("string",h.utf8encode(te)),J=G.length!==R.name.length,S=j.length!==te.length,H="",F="",Y="",be=R.dir,le=R.date,$={crc32:0,compressedSize:0,uncompressedSize:0};C&&!k||($.crc32=b.crc32,$.compressedSize=b.compressedSize,$.uncompressedSize=b.uncompressedSize);var A=0;C&&(A|=8),q||!J&&!S||(A|=2048);var M=0,T=0;be&&(M|=16),_==="UNIX"?(T=798,M|=(function(oe,_e){var $e=oe;return oe||($e=_e?16893:33204),(65535&$e)<<16})(R.unixPermissions,be)):(T=20,M|=(function(oe){return 63&(oe||0)})(R.dosPermissions)),O=le.getUTCHours(),O<<=6,O|=le.getUTCMinutes(),O<<=5,O|=le.getUTCSeconds()/2,U=le.getUTCFullYear()-1980,U<<=4,U|=le.getUTCMonth()+1,U<<=5,U|=le.getUTCDate(),J&&(F=u(1,1)+u(v(ae),4)+G,H+="up"+u(F.length,2)+F),S&&(Y=u(1,1)+u(v(ue),4)+j,H+="uc"+u(Y.length,2)+Y);var ne="";return ne+=`
\0`,ne+=u(A,2),ne+=B.magic,ne+=u(O,2),ne+=u(U,2),ne+=u($.crc32,4),ne+=u($.compressedSize,4),ne+=u($.uncompressedSize,4),ne+=u(ae.length,2),ne+=u(H.length,2),{fileRecord:g.LOCAL_FILE_HEADER+ne+ae+H,dirRecord:g.CENTRAL_FILE_HEADER+u(T,2)+ne+u(ue.length,2)+"\0\0\0\0"+u(M,4)+u(N,4)+ae+H+ue}}var f=i("../utils"),m=i("../stream/GenericWorker"),h=i("../utf8"),v=i("../crc32"),g=i("../signature");function x(b,C,k,N){m.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=C,this.zipPlatform=k,this.encodeFileName=N,this.streamFiles=b,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}f.inherits(x,m),x.prototype.push=function(b){var C=b.meta.percent||0,k=this.entriesCount,N=this._sources.length;this.accumulate?this.contentBuffer.push(b):(this.bytesWritten+=b.data.length,m.prototype.push.call(this,{data:b.data,meta:{currentFile:this.currentFile,percent:k?(C+100*(k-N-1))/k:100}}))},x.prototype.openedSource=function(b){this.currentSourceOffset=this.bytesWritten,this.currentFile=b.file.name;var C=this.streamFiles&&!b.file.dir;if(C){var k=d(b,C,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:k.fileRecord,meta:{percent:0}})}else this.accumulate=!0},x.prototype.closedSource=function(b){this.accumulate=!1;var C=this.streamFiles&&!b.file.dir,k=d(b,C,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(k.dirRecord),C)this.push({data:(function(N){return g.DATA_DESCRIPTOR+u(N.crc32,4)+u(N.compressedSize,4)+u(N.uncompressedSize,4)})(b),meta:{percent:100}});else for(this.push({data:k.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},x.prototype.flush=function(){for(var b=this.bytesWritten,C=0;C<this.dirRecords.length;C++)this.push({data:this.dirRecords[C],meta:{percent:100}});var k=this.bytesWritten-b,N=(function(_,z,O,U,R){var B=f.transformTo("string",R(U));return g.CENTRAL_DIRECTORY_END+"\0\0\0\0"+u(_,2)+u(_,2)+u(z,4)+u(O,4)+u(B.length,2)+B})(this.dirRecords.length,k,b,this.zipComment,this.encodeFileName);this.push({data:N,meta:{percent:100}})},x.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},x.prototype.registerPrevious=function(b){this._sources.push(b);var C=this;return b.on("data",function(k){C.processChunk(k)}),b.on("end",function(){C.closedSource(C.previous.streamInfo),C._sources.length?C.prepareNextSource():C.end()}),b.on("error",function(k){C.error(k)}),this},x.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},x.prototype.error=function(b){var C=this._sources;if(!m.prototype.error.call(this,b))return!1;for(var k=0;k<C.length;k++)try{C[k].error(b)}catch{}return!0},x.prototype.lock=function(){m.prototype.lock.call(this);for(var b=this._sources,C=0;C<b.length;C++)b[C].lock()},o.exports=x},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,o,s){var u=i("../compressions"),d=i("./ZipFileWorker");s.generateWorker=function(f,m,h){var v=new d(m.streamFiles,h,m.platform,m.encodeFileName),g=0;try{f.forEach(function(x,b){g++;var C=(function(z,O){var U=z||O,R=u[U];if(!R)throw new Error(U+" is not a valid compression method !");return R})(b.options.compression,m.compression),k=b.options.compressionOptions||m.compressionOptions||{},N=b.dir,_=b.date;b._compressWorker(C,k).withStreamInfo("file",{name:x,dir:N,date:_,comment:b.comment||"",unixPermissions:b.unixPermissions,dosPermissions:b.dosPermissions}).pipe(v)}),v.entriesCount=g}catch(x){v.error(x)}return v}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,o,s){function u(){if(!(this instanceof u))return new u;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var d=new u;for(var f in this)typeof this[f]!="function"&&(d[f]=this[f]);return d}}(u.prototype=i("./object")).loadAsync=i("./load"),u.support=i("./support"),u.defaults=i("./defaults"),u.version="3.10.1",u.loadAsync=function(d,f){return new u().loadAsync(d,f)},u.external=i("./external"),o.exports=u},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,o,s){var u=i("./utils"),d=i("./external"),f=i("./utf8"),m=i("./zipEntries"),h=i("./stream/Crc32Probe"),v=i("./nodejsUtils");function g(x){return new d.Promise(function(b,C){var k=x.decompressed.getContentWorker().pipe(new h);k.on("error",function(N){C(N)}).on("end",function(){k.streamInfo.crc32!==x.decompressed.crc32?C(new Error("Corrupted zip : CRC32 mismatch")):b()}).resume()})}o.exports=function(x,b){var C=this;return b=u.extend(b||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:f.utf8decode}),v.isNode&&v.isStream(x)?d.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",x,!0,b.optimizedBinaryString,b.base64).then(function(k){var N=new m(b);return N.load(k),N}).then(function(k){var N=[d.Promise.resolve(k)],_=k.files;if(b.checkCRC32)for(var z=0;z<_.length;z++)N.push(g(_[z]));return d.Promise.all(N)}).then(function(k){for(var N=k.shift(),_=N.files,z=0;z<_.length;z++){var O=_[z],U=O.fileNameStr,R=u.resolve(O.fileNameStr);C.file(R,O.decompressed,{binary:!0,optimizedBinaryString:!0,date:O.date,dir:O.dir,comment:O.fileCommentStr.length?O.fileCommentStr:null,unixPermissions:O.unixPermissions,dosPermissions:O.dosPermissions,createFolders:b.createFolders}),O.dir||(C.file(R).unsafeOriginalName=U)}return N.zipComment.length&&(C.comment=N.zipComment),C})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,o,s){var u=i("../utils"),d=i("../stream/GenericWorker");function f(m,h){d.call(this,"Nodejs stream input adapter for "+m),this._upstreamEnded=!1,this._bindStream(h)}u.inherits(f,d),f.prototype._bindStream=function(m){var h=this;(this._stream=m).pause(),m.on("data",function(v){h.push({data:v,meta:{percent:0}})}).on("error",function(v){h.isPaused?this.generatedError=v:h.error(v)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},f.prototype.pause=function(){return!!d.prototype.pause.call(this)&&(this._stream.pause(),!0)},f.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},o.exports=f},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,o,s){var u=i("readable-stream").Readable;function d(f,m,h){u.call(this,m),this._helper=f;var v=this;f.on("data",function(g,x){v.push(g)||v._helper.pause(),h&&h(x)}).on("error",function(g){v.emit("error",g)}).on("end",function(){v.push(null)})}i("../utils").inherits(d,u),d.prototype._read=function(){this._helper.resume()},o.exports=d},{"../utils":32,"readable-stream":16}],14:[function(i,o,s){o.exports={isNode:typeof Buffer<"u",newBufferFrom:function(u,d){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(u,d);if(typeof u=="number")throw new Error('The "data" argument must not be a number');return new Buffer(u,d)},allocBuffer:function(u){if(Buffer.alloc)return Buffer.alloc(u);var d=new Buffer(u);return d.fill(0),d},isBuffer:function(u){return Buffer.isBuffer(u)},isStream:function(u){return u&&typeof u.on=="function"&&typeof u.pause=="function"&&typeof u.resume=="function"}}},{}],15:[function(i,o,s){function u(R,B,q){var ae,G=f.getTypeOf(B),te=f.extend(q||{},v);te.date=te.date||new Date,te.compression!==null&&(te.compression=te.compression.toUpperCase()),typeof te.unixPermissions=="string"&&(te.unixPermissions=parseInt(te.unixPermissions,8)),te.unixPermissions&&16384&te.unixPermissions&&(te.dir=!0),te.dosPermissions&&16&te.dosPermissions&&(te.dir=!0),te.dir&&(R=_(R)),te.createFolders&&(ae=N(R))&&z.call(this,ae,!0);var ue=G==="string"&&te.binary===!1&&te.base64===!1;q&&q.binary!==void 0||(te.binary=!ue),(B instanceof g&&B.uncompressedSize===0||te.dir||!B||B.length===0)&&(te.base64=!1,te.binary=!0,B="",te.compression="STORE",G="string");var j=null;j=B instanceof g||B instanceof m?B:C.isNode&&C.isStream(B)?new k(R,B):f.prepareContent(R,B,te.binary,te.optimizedBinaryString,te.base64);var J=new x(R,j,te);this.files[R]=J}var d=i("./utf8"),f=i("./utils"),m=i("./stream/GenericWorker"),h=i("./stream/StreamHelper"),v=i("./defaults"),g=i("./compressedObject"),x=i("./zipObject"),b=i("./generate"),C=i("./nodejsUtils"),k=i("./nodejs/NodejsStreamInputAdapter"),N=function(R){R.slice(-1)==="/"&&(R=R.substring(0,R.length-1));var B=R.lastIndexOf("/");return 0<B?R.substring(0,B):""},_=function(R){return R.slice(-1)!=="/"&&(R+="/"),R},z=function(R,B){return B=B!==void 0?B:v.createFolders,R=_(R),this.files[R]||u.call(this,R,null,{dir:!0,createFolders:B}),this.files[R]};function O(R){return Object.prototype.toString.call(R)==="[object RegExp]"}var U={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(R){var B,q,ae;for(B in this.files)ae=this.files[B],(q=B.slice(this.root.length,B.length))&&B.slice(0,this.root.length)===this.root&&R(q,ae)},filter:function(R){var B=[];return this.forEach(function(q,ae){R(q,ae)&&B.push(ae)}),B},file:function(R,B,q){if(arguments.length!==1)return R=this.root+R,u.call(this,R,B,q),this;if(O(R)){var ae=R;return this.filter(function(te,ue){return!ue.dir&&ae.test(te)})}var G=this.files[this.root+R];return G&&!G.dir?G:null},folder:function(R){if(!R)return this;if(O(R))return this.filter(function(G,te){return te.dir&&R.test(G)});var B=this.root+R,q=z.call(this,B),ae=this.clone();return ae.root=q.name,ae},remove:function(R){R=this.root+R;var B=this.files[R];if(B||(R.slice(-1)!=="/"&&(R+="/"),B=this.files[R]),B&&!B.dir)delete this.files[R];else for(var q=this.filter(function(G,te){return te.name.slice(0,R.length)===R}),ae=0;ae<q.length;ae++)delete this.files[q[ae].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(R){var B,q={};try{if((q=f.extend(R||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:d.utf8encode})).type=q.type.toLowerCase(),q.compression=q.compression.toUpperCase(),q.type==="binarystring"&&(q.type="string"),!q.type)throw new Error("No output type specified.");f.checkSupport(q.type),q.platform!=="darwin"&&q.platform!=="freebsd"&&q.platform!=="linux"&&q.platform!=="sunos"||(q.platform="UNIX"),q.platform==="win32"&&(q.platform="DOS");var ae=q.comment||this.comment||"";B=b.generateWorker(this,q,ae)}catch(G){(B=new m("error")).error(G)}return new h(B,q.type||"string",q.mimeType)},generateAsync:function(R,B){return this.generateInternalStream(R).accumulate(B)},generateNodeStream:function(R,B){return(R=R||{}).type||(R.type="nodebuffer"),this.generateInternalStream(R).toNodejsStream(B)}};o.exports=U},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,o,s){o.exports=i("stream")},{stream:void 0}],17:[function(i,o,s){var u=i("./DataReader");function d(f){u.call(this,f);for(var m=0;m<this.data.length;m++)f[m]=255&f[m]}i("../utils").inherits(d,u),d.prototype.byteAt=function(f){return this.data[this.zero+f]},d.prototype.lastIndexOfSignature=function(f){for(var m=f.charCodeAt(0),h=f.charCodeAt(1),v=f.charCodeAt(2),g=f.charCodeAt(3),x=this.length-4;0<=x;--x)if(this.data[x]===m&&this.data[x+1]===h&&this.data[x+2]===v&&this.data[x+3]===g)return x-this.zero;return-1},d.prototype.readAndCheckSignature=function(f){var m=f.charCodeAt(0),h=f.charCodeAt(1),v=f.charCodeAt(2),g=f.charCodeAt(3),x=this.readData(4);return m===x[0]&&h===x[1]&&v===x[2]&&g===x[3]},d.prototype.readData=function(f){if(this.checkOffset(f),f===0)return[];var m=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,m},o.exports=d},{"../utils":32,"./DataReader":18}],18:[function(i,o,s){var u=i("../utils");function d(f){this.data=f,this.length=f.length,this.index=0,this.zero=0}d.prototype={checkOffset:function(f){this.checkIndex(this.index+f)},checkIndex:function(f){if(this.length<this.zero+f||f<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+f+"). Corrupted zip ?")},setIndex:function(f){this.checkIndex(f),this.index=f},skip:function(f){this.setIndex(this.index+f)},byteAt:function(){},readInt:function(f){var m,h=0;for(this.checkOffset(f),m=this.index+f-1;m>=this.index;m--)h=(h<<8)+this.byteAt(m);return this.index+=f,h},readString:function(f){return u.transformTo("string",this.readData(f))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var f=this.readInt(4);return new Date(Date.UTC(1980+(f>>25&127),(f>>21&15)-1,f>>16&31,f>>11&31,f>>5&63,(31&f)<<1))}},o.exports=d},{"../utils":32}],19:[function(i,o,s){var u=i("./Uint8ArrayReader");function d(f){u.call(this,f)}i("../utils").inherits(d,u),d.prototype.readData=function(f){this.checkOffset(f);var m=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,m},o.exports=d},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,o,s){var u=i("./DataReader");function d(f){u.call(this,f)}i("../utils").inherits(d,u),d.prototype.byteAt=function(f){return this.data.charCodeAt(this.zero+f)},d.prototype.lastIndexOfSignature=function(f){return this.data.lastIndexOf(f)-this.zero},d.prototype.readAndCheckSignature=function(f){return f===this.readData(4)},d.prototype.readData=function(f){this.checkOffset(f);var m=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,m},o.exports=d},{"../utils":32,"./DataReader":18}],21:[function(i,o,s){var u=i("./ArrayReader");function d(f){u.call(this,f)}i("../utils").inherits(d,u),d.prototype.readData=function(f){if(this.checkOffset(f),f===0)return new Uint8Array(0);var m=this.data.subarray(this.zero+this.index,this.zero+this.index+f);return this.index+=f,m},o.exports=d},{"../utils":32,"./ArrayReader":17}],22:[function(i,o,s){var u=i("../utils"),d=i("../support"),f=i("./ArrayReader"),m=i("./StringReader"),h=i("./NodeBufferReader"),v=i("./Uint8ArrayReader");o.exports=function(g){var x=u.getTypeOf(g);return u.checkSupport(x),x!=="string"||d.uint8array?x==="nodebuffer"?new h(g):d.uint8array?new v(u.transformTo("uint8array",g)):new f(u.transformTo("array",g)):new m(g)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,o,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,o,s){var u=i("./GenericWorker"),d=i("../utils");function f(m){u.call(this,"ConvertWorker to "+m),this.destType=m}d.inherits(f,u),f.prototype.processChunk=function(m){this.push({data:d.transformTo(this.destType,m.data),meta:m.meta})},o.exports=f},{"../utils":32,"./GenericWorker":28}],25:[function(i,o,s){var u=i("./GenericWorker"),d=i("../crc32");function f(){u.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(f,u),f.prototype.processChunk=function(m){this.streamInfo.crc32=d(m.data,this.streamInfo.crc32||0),this.push(m)},o.exports=f},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,o,s){var u=i("../utils"),d=i("./GenericWorker");function f(m){d.call(this,"DataLengthProbe for "+m),this.propName=m,this.withStreamInfo(m,0)}u.inherits(f,d),f.prototype.processChunk=function(m){if(m){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+m.data.length}d.prototype.processChunk.call(this,m)},o.exports=f},{"../utils":32,"./GenericWorker":28}],27:[function(i,o,s){var u=i("../utils"),d=i("./GenericWorker");function f(m){d.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,m.then(function(v){h.dataIsReady=!0,h.data=v,h.max=v&&v.length||0,h.type=u.getTypeOf(v),h.isPaused||h._tickAndRepeat()},function(v){h.error(v)})}u.inherits(f,d),f.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this.data=null},f.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,u.delay(this._tickAndRepeat,[],this)),!0)},f.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(u.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},f.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var m=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":m=this.data.substring(this.index,h);break;case"uint8array":m=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":m=this.data.slice(this.index,h)}return this.index=h,this.push({data:m,meta:{percent:this.max?this.index/this.max*100:0}})},o.exports=f},{"../utils":32,"./GenericWorker":28}],28:[function(i,o,s){function u(d){this.name=d||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}u.prototype={push:function(d){this.emit("data",d)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(d){this.emit("error",d)}return!0},error:function(d){return!this.isFinished&&(this.isPaused?this.generatedError=d:(this.isFinished=!0,this.emit("error",d),this.previous&&this.previous.error(d),this.cleanUp()),!0)},on:function(d,f){return this._listeners[d].push(f),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(d,f){if(this._listeners[d])for(var m=0;m<this._listeners[d].length;m++)this._listeners[d][m].call(this,f)},pipe:function(d){return d.registerPrevious(this)},registerPrevious:function(d){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=d.streamInfo,this.mergeStreamInfo(),this.previous=d;var f=this;return d.on("data",function(m){f.processChunk(m)}),d.on("end",function(){f.end()}),d.on("error",function(m){f.error(m)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var d=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),d=!0),this.previous&&this.previous.resume(),!d},flush:function(){},processChunk:function(d){this.push(d)},withStreamInfo:function(d,f){return this.extraStreamInfo[d]=f,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var d in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,d)&&(this.streamInfo[d]=this.extraStreamInfo[d])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var d="Worker "+this.name;return this.previous?this.previous+" -> "+d:d}},o.exports=u},{}],29:[function(i,o,s){var u=i("../utils"),d=i("./ConvertWorker"),f=i("./GenericWorker"),m=i("../base64"),h=i("../support"),v=i("../external"),g=null;if(h.nodestream)try{g=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function x(C,k){return new v.Promise(function(N,_){var z=[],O=C._internalType,U=C._outputType,R=C._mimeType;C.on("data",function(B,q){z.push(B),k&&k(q)}).on("error",function(B){z=[],_(B)}).on("end",function(){try{var B=(function(q,ae,G){switch(q){case"blob":return u.newBlob(u.transformTo("arraybuffer",ae),G);case"base64":return m.encode(ae);default:return u.transformTo(q,ae)}})(U,(function(q,ae){var G,te=0,ue=null,j=0;for(G=0;G<ae.length;G++)j+=ae[G].length;switch(q){case"string":return ae.join("");case"array":return Array.prototype.concat.apply([],ae);case"uint8array":for(ue=new Uint8Array(j),G=0;G<ae.length;G++)ue.set(ae[G],te),te+=ae[G].length;return ue;case"nodebuffer":return Buffer.concat(ae);default:throw new Error("concat : unsupported type '"+q+"'")}})(O,z),R);N(B)}catch(q){_(q)}z=[]}).resume()})}function b(C,k,N){var _=k;switch(k){case"blob":case"arraybuffer":_="uint8array";break;case"base64":_="string"}try{this._internalType=_,this._outputType=k,this._mimeType=N,u.checkSupport(_),this._worker=C.pipe(new d(_)),C.lock()}catch(z){this._worker=new f("error"),this._worker.error(z)}}b.prototype={accumulate:function(C){return x(this,C)},on:function(C,k){var N=this;return C==="data"?this._worker.on(C,function(_){k.call(N,_.data,_.meta)}):this._worker.on(C,function(){u.delay(k,arguments,N)}),this},resume:function(){return u.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(C){if(u.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new g(this,{objectMode:this._outputType!=="nodebuffer"},C)}},o.exports=b},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,o,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var u=new ArrayBuffer(0);try{s.blob=new Blob([u],{type:"application/zip"}).size===0}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);d.append(u),s.blob=d.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!i("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(i,o,s){for(var u=i("./utils"),d=i("./support"),f=i("./nodejsUtils"),m=i("./stream/GenericWorker"),h=new Array(256),v=0;v<256;v++)h[v]=252<=v?6:248<=v?5:240<=v?4:224<=v?3:192<=v?2:1;h[254]=h[254]=1;function g(){m.call(this,"utf-8 decode"),this.leftOver=null}function x(){m.call(this,"utf-8 encode")}s.utf8encode=function(b){return d.nodebuffer?f.newBufferFrom(b,"utf-8"):(function(C){var k,N,_,z,O,U=C.length,R=0;for(z=0;z<U;z++)(64512&(N=C.charCodeAt(z)))==55296&&z+1<U&&(64512&(_=C.charCodeAt(z+1)))==56320&&(N=65536+(N-55296<<10)+(_-56320),z++),R+=N<128?1:N<2048?2:N<65536?3:4;for(k=d.uint8array?new Uint8Array(R):new Array(R),z=O=0;O<R;z++)(64512&(N=C.charCodeAt(z)))==55296&&z+1<U&&(64512&(_=C.charCodeAt(z+1)))==56320&&(N=65536+(N-55296<<10)+(_-56320),z++),N<128?k[O++]=N:(N<2048?k[O++]=192|N>>>6:(N<65536?k[O++]=224|N>>>12:(k[O++]=240|N>>>18,k[O++]=128|N>>>12&63),k[O++]=128|N>>>6&63),k[O++]=128|63&N);return k})(b)},s.utf8decode=function(b){return d.nodebuffer?u.transformTo("nodebuffer",b).toString("utf-8"):(function(C){var k,N,_,z,O=C.length,U=new Array(2*O);for(k=N=0;k<O;)if((_=C[k++])<128)U[N++]=_;else if(4<(z=h[_]))U[N++]=65533,k+=z-1;else{for(_&=z===2?31:z===3?15:7;1<z&&k<O;)_=_<<6|63&C[k++],z--;1<z?U[N++]=65533:_<65536?U[N++]=_:(_-=65536,U[N++]=55296|_>>10&1023,U[N++]=56320|1023&_)}return U.length!==N&&(U.subarray?U=U.subarray(0,N):U.length=N),u.applyFromCharCode(U)})(b=u.transformTo(d.uint8array?"uint8array":"array",b))},u.inherits(g,m),g.prototype.processChunk=function(b){var C=u.transformTo(d.uint8array?"uint8array":"array",b.data);if(this.leftOver&&this.leftOver.length){if(d.uint8array){var k=C;(C=new Uint8Array(k.length+this.leftOver.length)).set(this.leftOver,0),C.set(k,this.leftOver.length)}else C=this.leftOver.concat(C);this.leftOver=null}var N=(function(z,O){var U;for((O=O||z.length)>z.length&&(O=z.length),U=O-1;0<=U&&(192&z[U])==128;)U--;return U<0||U===0?O:U+h[z[U]]>O?U:O})(C),_=C;N!==C.length&&(d.uint8array?(_=C.subarray(0,N),this.leftOver=C.subarray(N,C.length)):(_=C.slice(0,N),this.leftOver=C.slice(N,C.length))),this.push({data:s.utf8decode(_),meta:b.meta})},g.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=g,u.inherits(x,m),x.prototype.processChunk=function(b){this.push({data:s.utf8encode(b.data),meta:b.meta})},s.Utf8EncodeWorker=x},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,o,s){var u=i("./support"),d=i("./base64"),f=i("./nodejsUtils"),m=i("./external");function h(k){return k}function v(k,N){for(var _=0;_<k.length;++_)N[_]=255&k.charCodeAt(_);return N}i("setimmediate"),s.newBlob=function(k,N){s.checkSupport("blob");try{return new Blob([k],{type:N})}catch{try{var _=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return _.append(k),_.getBlob(N)}catch{throw new Error("Bug : can't construct the Blob.")}}};var g={stringifyByChunk:function(k,N,_){var z=[],O=0,U=k.length;if(U<=_)return String.fromCharCode.apply(null,k);for(;O<U;)N==="array"||N==="nodebuffer"?z.push(String.fromCharCode.apply(null,k.slice(O,Math.min(O+_,U)))):z.push(String.fromCharCode.apply(null,k.subarray(O,Math.min(O+_,U)))),O+=_;return z.join("")},stringifyByChar:function(k){for(var N="",_=0;_<k.length;_++)N+=String.fromCharCode(k[_]);return N},applyCanBeUsed:{uint8array:(function(){try{return u.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return u.nodebuffer&&String.fromCharCode.apply(null,f.allocBuffer(1)).length===1}catch{return!1}})()}};function x(k){var N=65536,_=s.getTypeOf(k),z=!0;if(_==="uint8array"?z=g.applyCanBeUsed.uint8array:_==="nodebuffer"&&(z=g.applyCanBeUsed.nodebuffer),z)for(;1<N;)try{return g.stringifyByChunk(k,_,N)}catch{N=Math.floor(N/2)}return g.stringifyByChar(k)}function b(k,N){for(var _=0;_<k.length;_++)N[_]=k[_];return N}s.applyFromCharCode=x;var C={};C.string={string:h,array:function(k){return v(k,new Array(k.length))},arraybuffer:function(k){return C.string.uint8array(k).buffer},uint8array:function(k){return v(k,new Uint8Array(k.length))},nodebuffer:function(k){return v(k,f.allocBuffer(k.length))}},C.array={string:x,array:h,arraybuffer:function(k){return new Uint8Array(k).buffer},uint8array:function(k){return new Uint8Array(k)},nodebuffer:function(k){return f.newBufferFrom(k)}},C.arraybuffer={string:function(k){return x(new Uint8Array(k))},array:function(k){return b(new Uint8Array(k),new Array(k.byteLength))},arraybuffer:h,uint8array:function(k){return new Uint8Array(k)},nodebuffer:function(k){return f.newBufferFrom(new Uint8Array(k))}},C.uint8array={string:x,array:function(k){return b(k,new Array(k.length))},arraybuffer:function(k){return k.buffer},uint8array:h,nodebuffer:function(k){return f.newBufferFrom(k)}},C.nodebuffer={string:x,array:function(k){return b(k,new Array(k.length))},arraybuffer:function(k){return C.nodebuffer.uint8array(k).buffer},uint8array:function(k){return b(k,new Uint8Array(k.length))},nodebuffer:h},s.transformTo=function(k,N){if(N=N||"",!k)return N;s.checkSupport(k);var _=s.getTypeOf(N);return C[_][k](N)},s.resolve=function(k){for(var N=k.split("/"),_=[],z=0;z<N.length;z++){var O=N[z];O==="."||O===""&&z!==0&&z!==N.length-1||(O===".."?_.pop():_.push(O))}return _.join("/")},s.getTypeOf=function(k){return typeof k=="string"?"string":Object.prototype.toString.call(k)==="[object Array]"?"array":u.nodebuffer&&f.isBuffer(k)?"nodebuffer":u.uint8array&&k instanceof Uint8Array?"uint8array":u.arraybuffer&&k instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(k){if(!u[k.toLowerCase()])throw new Error(k+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(k){var N,_,z="";for(_=0;_<(k||"").length;_++)z+="\\x"+((N=k.charCodeAt(_))<16?"0":"")+N.toString(16).toUpperCase();return z},s.delay=function(k,N,_){setImmediate(function(){k.apply(_||null,N||[])})},s.inherits=function(k,N){function _(){}_.prototype=N.prototype,k.prototype=new _},s.extend=function(){var k,N,_={};for(k=0;k<arguments.length;k++)for(N in arguments[k])Object.prototype.hasOwnProperty.call(arguments[k],N)&&_[N]===void 0&&(_[N]=arguments[k][N]);return _},s.prepareContent=function(k,N,_,z,O){return m.Promise.resolve(N).then(function(U){return u.blob&&(U instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(U))!==-1)&&typeof FileReader<"u"?new m.Promise(function(R,B){var q=new FileReader;q.onload=function(ae){R(ae.target.result)},q.onerror=function(ae){B(ae.target.error)},q.readAsArrayBuffer(U)}):U}).then(function(U){var R=s.getTypeOf(U);return R?(R==="arraybuffer"?U=s.transformTo("uint8array",U):R==="string"&&(O?U=d.decode(U):_&&z!==!0&&(U=(function(B){return v(B,u.uint8array?new Uint8Array(B.length):new Array(B.length))})(U))),U):m.Promise.reject(new Error("Can't read the data of '"+k+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,o,s){var u=i("./reader/readerFor"),d=i("./utils"),f=i("./signature"),m=i("./zipEntry"),h=i("./support");function v(g){this.files=[],this.loadOptions=g}v.prototype={checkSignature:function(g){if(!this.reader.readAndCheckSignature(g)){this.reader.index-=4;var x=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+d.pretty(x)+", expected "+d.pretty(g)+")")}},isSignature:function(g,x){var b=this.reader.index;this.reader.setIndex(g);var C=this.reader.readString(4)===x;return this.reader.setIndex(b),C},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var g=this.reader.readData(this.zipCommentLength),x=h.uint8array?"uint8array":"array",b=d.transformTo(x,g);this.zipComment=this.loadOptions.decodeFileName(b)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var g,x,b,C=this.zip64EndOfCentralSize-44;0<C;)g=this.reader.readInt(2),x=this.reader.readInt(4),b=this.reader.readData(x),this.zip64ExtensibleData[g]={id:g,length:x,value:b}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var g,x;for(g=0;g<this.files.length;g++)x=this.files[g],this.reader.setIndex(x.localHeaderOffset),this.checkSignature(f.LOCAL_FILE_HEADER),x.readLocalPart(this.reader),x.handleUTF8(),x.processAttributes()},readCentralDir:function(){var g;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(f.CENTRAL_FILE_HEADER);)(g=new m({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(g);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var g=this.reader.lastIndexOfSignature(f.CENTRAL_DIRECTORY_END);if(g<0)throw this.isSignature(0,f.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(g);var x=g;if(this.checkSignature(f.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===d.MAX_VALUE_16BITS||this.diskWithCentralDirStart===d.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===d.MAX_VALUE_16BITS||this.centralDirRecords===d.MAX_VALUE_16BITS||this.centralDirSize===d.MAX_VALUE_32BITS||this.centralDirOffset===d.MAX_VALUE_32BITS){if(this.zip64=!0,(g=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(g),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,f.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var b=this.centralDirOffset+this.centralDirSize;this.zip64&&(b+=20,b+=12+this.zip64EndOfCentralSize);var C=x-b;if(0<C)this.isSignature(x,f.CENTRAL_FILE_HEADER)||(this.reader.zero=C);else if(C<0)throw new Error("Corrupted zip: missing "+Math.abs(C)+" bytes.")},prepareReader:function(g){this.reader=u(g)},load:function(g){this.prepareReader(g),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},o.exports=v},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,o,s){var u=i("./reader/readerFor"),d=i("./utils"),f=i("./compressedObject"),m=i("./crc32"),h=i("./utf8"),v=i("./compressions"),g=i("./support");function x(b,C){this.options=b,this.loadOptions=C}x.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(b){var C,k;if(b.skip(22),this.fileNameLength=b.readInt(2),k=b.readInt(2),this.fileName=b.readData(this.fileNameLength),b.skip(k),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((C=(function(N){for(var _ in v)if(Object.prototype.hasOwnProperty.call(v,_)&&v[_].magic===N)return v[_];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+d.pretty(this.compressionMethod)+" unknown (inner file : "+d.transformTo("string",this.fileName)+")");this.decompressed=new f(this.compressedSize,this.uncompressedSize,this.crc32,C,b.readData(this.compressedSize))},readCentralPart:function(b){this.versionMadeBy=b.readInt(2),b.skip(2),this.bitFlag=b.readInt(2),this.compressionMethod=b.readString(2),this.date=b.readDate(),this.crc32=b.readInt(4),this.compressedSize=b.readInt(4),this.uncompressedSize=b.readInt(4);var C=b.readInt(2);if(this.extraFieldsLength=b.readInt(2),this.fileCommentLength=b.readInt(2),this.diskNumberStart=b.readInt(2),this.internalFileAttributes=b.readInt(2),this.externalFileAttributes=b.readInt(4),this.localHeaderOffset=b.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");b.skip(C),this.readExtraFields(b),this.parseZIP64ExtraField(b),this.fileComment=b.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var b=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),b==0&&(this.dosPermissions=63&this.externalFileAttributes),b==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var b=u(this.extraFields[1].value);this.uncompressedSize===d.MAX_VALUE_32BITS&&(this.uncompressedSize=b.readInt(8)),this.compressedSize===d.MAX_VALUE_32BITS&&(this.compressedSize=b.readInt(8)),this.localHeaderOffset===d.MAX_VALUE_32BITS&&(this.localHeaderOffset=b.readInt(8)),this.diskNumberStart===d.MAX_VALUE_32BITS&&(this.diskNumberStart=b.readInt(4))}},readExtraFields:function(b){var C,k,N,_=b.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});b.index+4<_;)C=b.readInt(2),k=b.readInt(2),N=b.readData(k),this.extraFields[C]={id:C,length:k,value:N};b.setIndex(_)},handleUTF8:function(){var b=g.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var C=this.findExtraFieldUnicodePath();if(C!==null)this.fileNameStr=C;else{var k=d.transformTo(b,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(k)}var N=this.findExtraFieldUnicodeComment();if(N!==null)this.fileCommentStr=N;else{var _=d.transformTo(b,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(_)}}},findExtraFieldUnicodePath:function(){var b=this.extraFields[28789];if(b){var C=u(b.value);return C.readInt(1)!==1||m(this.fileName)!==C.readInt(4)?null:h.utf8decode(C.readData(b.length-5))}return null},findExtraFieldUnicodeComment:function(){var b=this.extraFields[25461];if(b){var C=u(b.value);return C.readInt(1)!==1||m(this.fileComment)!==C.readInt(4)?null:h.utf8decode(C.readData(b.length-5))}return null}},o.exports=x},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,o,s){function u(C,k,N){this.name=C,this.dir=N.dir,this.date=N.date,this.comment=N.comment,this.unixPermissions=N.unixPermissions,this.dosPermissions=N.dosPermissions,this._data=k,this._dataBinary=N.binary,this.options={compression:N.compression,compressionOptions:N.compressionOptions}}var d=i("./stream/StreamHelper"),f=i("./stream/DataWorker"),m=i("./utf8"),h=i("./compressedObject"),v=i("./stream/GenericWorker");u.prototype={internalStream:function(C){var k=null,N="string";try{if(!C)throw new Error("No output type specified.");var _=(N=C.toLowerCase())==="string"||N==="text";N!=="binarystring"&&N!=="text"||(N="string"),k=this._decompressWorker();var z=!this._dataBinary;z&&!_&&(k=k.pipe(new m.Utf8EncodeWorker)),!z&&_&&(k=k.pipe(new m.Utf8DecodeWorker))}catch(O){(k=new v("error")).error(O)}return new d(k,N,"")},async:function(C,k){return this.internalStream(C).accumulate(k)},nodeStream:function(C,k){return this.internalStream(C||"nodebuffer").toNodejsStream(k)},_compressWorker:function(C,k){if(this._data instanceof h&&this._data.compression.magic===C.magic)return this._data.getCompressedWorker();var N=this._decompressWorker();return this._dataBinary||(N=N.pipe(new m.Utf8EncodeWorker)),h.createWorkerFrom(N,C,k)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof v?this._data:new f(this._data)}};for(var g=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],x=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},b=0;b<g.length;b++)u.prototype[g[b]]=x;o.exports=u},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,o,s){(function(u){var d,f,m=u.MutationObserver||u.WebKitMutationObserver;if(m){var h=0,v=new m(C),g=u.document.createTextNode("");v.observe(g,{characterData:!0}),d=function(){g.data=h=++h%2}}else if(u.setImmediate||u.MessageChannel===void 0)d="document"in u&&"onreadystatechange"in u.document.createElement("script")?function(){var k=u.document.createElement("script");k.onreadystatechange=function(){C(),k.onreadystatechange=null,k.parentNode.removeChild(k),k=null},u.document.documentElement.appendChild(k)}:function(){setTimeout(C,0)};else{var x=new u.MessageChannel;x.port1.onmessage=C,d=function(){x.port2.postMessage(0)}}var b=[];function C(){var k,N;f=!0;for(var _=b.length;_;){for(N=b,b=[],k=-1;++k<_;)N[k]();_=b.length}f=!1}o.exports=function(k){b.push(k)!==1||f||d()}}).call(this,typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,o,s){var u=i("immediate");function d(){}var f={},m=["REJECTED"],h=["FULFILLED"],v=["PENDING"];function g(_){if(typeof _!="function")throw new TypeError("resolver must be a function");this.state=v,this.queue=[],this.outcome=void 0,_!==d&&k(this,_)}function x(_,z,O){this.promise=_,typeof z=="function"&&(this.onFulfilled=z,this.callFulfilled=this.otherCallFulfilled),typeof O=="function"&&(this.onRejected=O,this.callRejected=this.otherCallRejected)}function b(_,z,O){u(function(){var U;try{U=z(O)}catch(R){return f.reject(_,R)}U===_?f.reject(_,new TypeError("Cannot resolve promise with itself")):f.resolve(_,U)})}function C(_){var z=_&&_.then;if(_&&(typeof _=="object"||typeof _=="function")&&typeof z=="function")return function(){z.apply(_,arguments)}}function k(_,z){var O=!1;function U(q){O||(O=!0,f.reject(_,q))}function R(q){O||(O=!0,f.resolve(_,q))}var B=N(function(){z(R,U)});B.status==="error"&&U(B.value)}function N(_,z){var O={};try{O.value=_(z),O.status="success"}catch(U){O.status="error",O.value=U}return O}(o.exports=g).prototype.finally=function(_){if(typeof _!="function")return this;var z=this.constructor;return this.then(function(O){return z.resolve(_()).then(function(){return O})},function(O){return z.resolve(_()).then(function(){throw O})})},g.prototype.catch=function(_){return this.then(null,_)},g.prototype.then=function(_,z){if(typeof _!="function"&&this.state===h||typeof z!="function"&&this.state===m)return this;var O=new this.constructor(d);return this.state!==v?b(O,this.state===h?_:z,this.outcome):this.queue.push(new x(O,_,z)),O},x.prototype.callFulfilled=function(_){f.resolve(this.promise,_)},x.prototype.otherCallFulfilled=function(_){b(this.promise,this.onFulfilled,_)},x.prototype.callRejected=function(_){f.reject(this.promise,_)},x.prototype.otherCallRejected=function(_){b(this.promise,this.onRejected,_)},f.resolve=function(_,z){var O=N(C,z);if(O.status==="error")return f.reject(_,O.value);var U=O.value;if(U)k(_,U);else{_.state=h,_.outcome=z;for(var R=-1,B=_.queue.length;++R<B;)_.queue[R].callFulfilled(z)}return _},f.reject=function(_,z){_.state=m,_.outcome=z;for(var O=-1,U=_.queue.length;++O<U;)_.queue[O].callRejected(z);return _},g.resolve=function(_){return _ instanceof this?_:f.resolve(new this(d),_)},g.reject=function(_){var z=new this(d);return f.reject(z,_)},g.all=function(_){var z=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var O=_.length,U=!1;if(!O)return this.resolve([]);for(var R=new Array(O),B=0,q=-1,ae=new this(d);++q<O;)G(_[q],q);return ae;function G(te,ue){z.resolve(te).then(function(j){R[ue]=j,++B!==O||U||(U=!0,f.resolve(ae,R))},function(j){U||(U=!0,f.reject(ae,j))})}},g.race=function(_){var z=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var O=_.length,U=!1;if(!O)return this.resolve([]);for(var R=-1,B=new this(d);++R<O;)q=_[R],z.resolve(q).then(function(ae){U||(U=!0,f.resolve(B,ae))},function(ae){U||(U=!0,f.reject(B,ae))});var q;return B}},{immediate:36}],38:[function(i,o,s){var u={};(0,i("./lib/utils/common").assign)(u,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),o.exports=u},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,o,s){var u=i("./zlib/deflate"),d=i("./utils/common"),f=i("./utils/strings"),m=i("./zlib/messages"),h=i("./zlib/zstream"),v=Object.prototype.toString,g=0,x=-1,b=0,C=8;function k(_){if(!(this instanceof k))return new k(_);this.options=d.assign({level:x,method:C,chunkSize:16384,windowBits:15,memLevel:8,strategy:b,to:""},_||{});var z=this.options;z.raw&&0<z.windowBits?z.windowBits=-z.windowBits:z.gzip&&0<z.windowBits&&z.windowBits<16&&(z.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var O=u.deflateInit2(this.strm,z.level,z.method,z.windowBits,z.memLevel,z.strategy);if(O!==g)throw new Error(m[O]);if(z.header&&u.deflateSetHeader(this.strm,z.header),z.dictionary){var U;if(U=typeof z.dictionary=="string"?f.string2buf(z.dictionary):v.call(z.dictionary)==="[object ArrayBuffer]"?new Uint8Array(z.dictionary):z.dictionary,(O=u.deflateSetDictionary(this.strm,U))!==g)throw new Error(m[O]);this._dict_set=!0}}function N(_,z){var O=new k(z);if(O.push(_,!0),O.err)throw O.msg||m[O.err];return O.result}k.prototype.push=function(_,z){var O,U,R=this.strm,B=this.options.chunkSize;if(this.ended)return!1;U=z===~~z?z:z===!0?4:0,typeof _=="string"?R.input=f.string2buf(_):v.call(_)==="[object ArrayBuffer]"?R.input=new Uint8Array(_):R.input=_,R.next_in=0,R.avail_in=R.input.length;do{if(R.avail_out===0&&(R.output=new d.Buf8(B),R.next_out=0,R.avail_out=B),(O=u.deflate(R,U))!==1&&O!==g)return this.onEnd(O),!(this.ended=!0);R.avail_out!==0&&(R.avail_in!==0||U!==4&&U!==2)||(this.options.to==="string"?this.onData(f.buf2binstring(d.shrinkBuf(R.output,R.next_out))):this.onData(d.shrinkBuf(R.output,R.next_out)))}while((0<R.avail_in||R.avail_out===0)&&O!==1);return U===4?(O=u.deflateEnd(this.strm),this.onEnd(O),this.ended=!0,O===g):U!==2||(this.onEnd(g),!(R.avail_out=0))},k.prototype.onData=function(_){this.chunks.push(_)},k.prototype.onEnd=function(_){_===g&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},s.Deflate=k,s.deflate=N,s.deflateRaw=function(_,z){return(z=z||{}).raw=!0,N(_,z)},s.gzip=function(_,z){return(z=z||{}).gzip=!0,N(_,z)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,o,s){var u=i("./zlib/inflate"),d=i("./utils/common"),f=i("./utils/strings"),m=i("./zlib/constants"),h=i("./zlib/messages"),v=i("./zlib/zstream"),g=i("./zlib/gzheader"),x=Object.prototype.toString;function b(k){if(!(this instanceof b))return new b(k);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},k||{});var N=this.options;N.raw&&0<=N.windowBits&&N.windowBits<16&&(N.windowBits=-N.windowBits,N.windowBits===0&&(N.windowBits=-15)),!(0<=N.windowBits&&N.windowBits<16)||k&&k.windowBits||(N.windowBits+=32),15<N.windowBits&&N.windowBits<48&&(15&N.windowBits)==0&&(N.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new v,this.strm.avail_out=0;var _=u.inflateInit2(this.strm,N.windowBits);if(_!==m.Z_OK)throw new Error(h[_]);this.header=new g,u.inflateGetHeader(this.strm,this.header)}function C(k,N){var _=new b(N);if(_.push(k,!0),_.err)throw _.msg||h[_.err];return _.result}b.prototype.push=function(k,N){var _,z,O,U,R,B,q=this.strm,ae=this.options.chunkSize,G=this.options.dictionary,te=!1;if(this.ended)return!1;z=N===~~N?N:N===!0?m.Z_FINISH:m.Z_NO_FLUSH,typeof k=="string"?q.input=f.binstring2buf(k):x.call(k)==="[object ArrayBuffer]"?q.input=new Uint8Array(k):q.input=k,q.next_in=0,q.avail_in=q.input.length;do{if(q.avail_out===0&&(q.output=new d.Buf8(ae),q.next_out=0,q.avail_out=ae),(_=u.inflate(q,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&G&&(B=typeof G=="string"?f.string2buf(G):x.call(G)==="[object ArrayBuffer]"?new Uint8Array(G):G,_=u.inflateSetDictionary(this.strm,B)),_===m.Z_BUF_ERROR&&te===!0&&(_=m.Z_OK,te=!1),_!==m.Z_STREAM_END&&_!==m.Z_OK)return this.onEnd(_),!(this.ended=!0);q.next_out&&(q.avail_out!==0&&_!==m.Z_STREAM_END&&(q.avail_in!==0||z!==m.Z_FINISH&&z!==m.Z_SYNC_FLUSH)||(this.options.to==="string"?(O=f.utf8border(q.output,q.next_out),U=q.next_out-O,R=f.buf2string(q.output,O),q.next_out=U,q.avail_out=ae-U,U&&d.arraySet(q.output,q.output,O,U,0),this.onData(R)):this.onData(d.shrinkBuf(q.output,q.next_out)))),q.avail_in===0&&q.avail_out===0&&(te=!0)}while((0<q.avail_in||q.avail_out===0)&&_!==m.Z_STREAM_END);return _===m.Z_STREAM_END&&(z=m.Z_FINISH),z===m.Z_FINISH?(_=u.inflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===m.Z_OK):z!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(q.avail_out=0))},b.prototype.onData=function(k){this.chunks.push(k)},b.prototype.onEnd=function(k){k===m.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=k,this.msg=this.strm.msg},s.Inflate=b,s.inflate=C,s.inflateRaw=function(k,N){return(N=N||{}).raw=!0,C(k,N)},s.ungzip=C},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,o,s){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(m){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var v=h.shift();if(v){if(typeof v!="object")throw new TypeError(v+"must be non-object");for(var g in v)v.hasOwnProperty(g)&&(m[g]=v[g])}}return m},s.shrinkBuf=function(m,h){return m.length===h?m:m.subarray?m.subarray(0,h):(m.length=h,m)};var d={arraySet:function(m,h,v,g,x){if(h.subarray&&m.subarray)m.set(h.subarray(v,v+g),x);else for(var b=0;b<g;b++)m[x+b]=h[v+b]},flattenChunks:function(m){var h,v,g,x,b,C;for(h=g=0,v=m.length;h<v;h++)g+=m[h].length;for(C=new Uint8Array(g),h=x=0,v=m.length;h<v;h++)b=m[h],C.set(b,x),x+=b.length;return C}},f={arraySet:function(m,h,v,g,x){for(var b=0;b<g;b++)m[x+b]=h[v+b]},flattenChunks:function(m){return[].concat.apply([],m)}};s.setTyped=function(m){m?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,d)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,f))},s.setTyped(u)},{}],42:[function(i,o,s){var u=i("./common"),d=!0,f=!0;try{String.fromCharCode.apply(null,[0])}catch{d=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{f=!1}for(var m=new u.Buf8(256),h=0;h<256;h++)m[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function v(g,x){if(x<65537&&(g.subarray&&f||!g.subarray&&d))return String.fromCharCode.apply(null,u.shrinkBuf(g,x));for(var b="",C=0;C<x;C++)b+=String.fromCharCode(g[C]);return b}m[254]=m[254]=1,s.string2buf=function(g){var x,b,C,k,N,_=g.length,z=0;for(k=0;k<_;k++)(64512&(b=g.charCodeAt(k)))==55296&&k+1<_&&(64512&(C=g.charCodeAt(k+1)))==56320&&(b=65536+(b-55296<<10)+(C-56320),k++),z+=b<128?1:b<2048?2:b<65536?3:4;for(x=new u.Buf8(z),k=N=0;N<z;k++)(64512&(b=g.charCodeAt(k)))==55296&&k+1<_&&(64512&(C=g.charCodeAt(k+1)))==56320&&(b=65536+(b-55296<<10)+(C-56320),k++),b<128?x[N++]=b:(b<2048?x[N++]=192|b>>>6:(b<65536?x[N++]=224|b>>>12:(x[N++]=240|b>>>18,x[N++]=128|b>>>12&63),x[N++]=128|b>>>6&63),x[N++]=128|63&b);return x},s.buf2binstring=function(g){return v(g,g.length)},s.binstring2buf=function(g){for(var x=new u.Buf8(g.length),b=0,C=x.length;b<C;b++)x[b]=g.charCodeAt(b);return x},s.buf2string=function(g,x){var b,C,k,N,_=x||g.length,z=new Array(2*_);for(b=C=0;b<_;)if((k=g[b++])<128)z[C++]=k;else if(4<(N=m[k]))z[C++]=65533,b+=N-1;else{for(k&=N===2?31:N===3?15:7;1<N&&b<_;)k=k<<6|63&g[b++],N--;1<N?z[C++]=65533:k<65536?z[C++]=k:(k-=65536,z[C++]=55296|k>>10&1023,z[C++]=56320|1023&k)}return v(z,C)},s.utf8border=function(g,x){var b;for((x=x||g.length)>g.length&&(x=g.length),b=x-1;0<=b&&(192&g[b])==128;)b--;return b<0||b===0?x:b+m[g[b]]>x?b:x}},{"./common":41}],43:[function(i,o,s){o.exports=function(u,d,f,m){for(var h=65535&u|0,v=u>>>16&65535|0,g=0;f!==0;){for(f-=g=2e3<f?2e3:f;v=v+(h=h+d[m++]|0)|0,--g;);h%=65521,v%=65521}return h|v<<16|0}},{}],44:[function(i,o,s){o.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,o,s){var u=(function(){for(var d,f=[],m=0;m<256;m++){d=m;for(var h=0;h<8;h++)d=1&d?3988292384^d>>>1:d>>>1;f[m]=d}return f})();o.exports=function(d,f,m,h){var v=u,g=h+m;d^=-1;for(var x=h;x<g;x++)d=d>>>8^v[255&(d^f[x])];return-1^d}},{}],46:[function(i,o,s){var u,d=i("../utils/common"),f=i("./trees"),m=i("./adler32"),h=i("./crc32"),v=i("./messages"),g=0,x=4,b=0,C=-2,k=-1,N=4,_=2,z=8,O=9,U=286,R=30,B=19,q=2*U+1,ae=15,G=3,te=258,ue=te+G+1,j=42,J=113,S=1,H=2,F=3,Y=4;function be(w,ce){return w.msg=v[ce],ce}function le(w){return(w<<1)-(4<w?9:0)}function $(w){for(var ce=w.length;0<=--ce;)w[ce]=0}function A(w){var ce=w.state,ie=ce.pending;ie>w.avail_out&&(ie=w.avail_out),ie!==0&&(d.arraySet(w.output,ce.pending_buf,ce.pending_out,ie,w.next_out),w.next_out+=ie,ce.pending_out+=ie,w.total_out+=ie,w.avail_out-=ie,ce.pending-=ie,ce.pending===0&&(ce.pending_out=0))}function M(w,ce){f._tr_flush_block(w,0<=w.block_start?w.block_start:-1,w.strstart-w.block_start,ce),w.block_start=w.strstart,A(w.strm)}function T(w,ce){w.pending_buf[w.pending++]=ce}function ne(w,ce){w.pending_buf[w.pending++]=ce>>>8&255,w.pending_buf[w.pending++]=255&ce}function oe(w,ce){var ie,L,D=w.max_chain_length,V=w.strstart,me=w.prev_length,ge=w.nice_match,W=w.strstart>w.w_size-ue?w.strstart-(w.w_size-ue):0,ye=w.window,Se=w.w_mask,we=w.prev,Z=w.strstart+te,he=ye[V+me-1],ke=ye[V+me];w.prev_length>=w.good_match&&(D>>=2),ge>w.lookahead&&(ge=w.lookahead);do if(ye[(ie=ce)+me]===ke&&ye[ie+me-1]===he&&ye[ie]===ye[V]&&ye[++ie]===ye[V+1]){V+=2,ie++;do;while(ye[++V]===ye[++ie]&&ye[++V]===ye[++ie]&&ye[++V]===ye[++ie]&&ye[++V]===ye[++ie]&&ye[++V]===ye[++ie]&&ye[++V]===ye[++ie]&&ye[++V]===ye[++ie]&&ye[++V]===ye[++ie]&&V<Z);if(L=te-(Z-V),V=Z-te,me<L){if(w.match_start=ce,ge<=(me=L))break;he=ye[V+me-1],ke=ye[V+me]}}while((ce=we[ce&Se])>W&&--D!=0);return me<=w.lookahead?me:w.lookahead}function _e(w){var ce,ie,L,D,V,me,ge,W,ye,Se,we=w.w_size;do{if(D=w.window_size-w.lookahead-w.strstart,w.strstart>=we+(we-ue)){for(d.arraySet(w.window,w.window,we,we,0),w.match_start-=we,w.strstart-=we,w.block_start-=we,ce=ie=w.hash_size;L=w.head[--ce],w.head[ce]=we<=L?L-we:0,--ie;);for(ce=ie=we;L=w.prev[--ce],w.prev[ce]=we<=L?L-we:0,--ie;);D+=we}if(w.strm.avail_in===0)break;if(me=w.strm,ge=w.window,W=w.strstart+w.lookahead,ye=D,Se=void 0,Se=me.avail_in,ye<Se&&(Se=ye),ie=Se===0?0:(me.avail_in-=Se,d.arraySet(ge,me.input,me.next_in,Se,W),me.state.wrap===1?me.adler=m(me.adler,ge,Se,W):me.state.wrap===2&&(me.adler=h(me.adler,ge,Se,W)),me.next_in+=Se,me.total_in+=Se,Se),w.lookahead+=ie,w.lookahead+w.insert>=G)for(V=w.strstart-w.insert,w.ins_h=w.window[V],w.ins_h=(w.ins_h<<w.hash_shift^w.window[V+1])&w.hash_mask;w.insert&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[V+G-1])&w.hash_mask,w.prev[V&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=V,V++,w.insert--,!(w.lookahead+w.insert<G)););}while(w.lookahead<ue&&w.strm.avail_in!==0)}function $e(w,ce){for(var ie,L;;){if(w.lookahead<ue){if(_e(w),w.lookahead<ue&&ce===g)return S;if(w.lookahead===0)break}if(ie=0,w.lookahead>=G&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,ie=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),ie!==0&&w.strstart-ie<=w.w_size-ue&&(w.match_length=oe(w,ie)),w.match_length>=G)if(L=f._tr_tally(w,w.strstart-w.match_start,w.match_length-G),w.lookahead-=w.match_length,w.match_length<=w.max_lazy_match&&w.lookahead>=G){for(w.match_length--;w.strstart++,w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,ie=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart,--w.match_length!=0;);w.strstart++}else w.strstart+=w.match_length,w.match_length=0,w.ins_h=w.window[w.strstart],w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+1])&w.hash_mask;else L=f._tr_tally(w,0,w.window[w.strstart]),w.lookahead--,w.strstart++;if(L&&(M(w,!1),w.strm.avail_out===0))return S}return w.insert=w.strstart<G-1?w.strstart:G-1,ce===x?(M(w,!0),w.strm.avail_out===0?F:Y):w.last_lit&&(M(w,!1),w.strm.avail_out===0)?S:H}function Ne(w,ce){for(var ie,L,D;;){if(w.lookahead<ue){if(_e(w),w.lookahead<ue&&ce===g)return S;if(w.lookahead===0)break}if(ie=0,w.lookahead>=G&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,ie=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),w.prev_length=w.match_length,w.prev_match=w.match_start,w.match_length=G-1,ie!==0&&w.prev_length<w.max_lazy_match&&w.strstart-ie<=w.w_size-ue&&(w.match_length=oe(w,ie),w.match_length<=5&&(w.strategy===1||w.match_length===G&&4096<w.strstart-w.match_start)&&(w.match_length=G-1)),w.prev_length>=G&&w.match_length<=w.prev_length){for(D=w.strstart+w.lookahead-G,L=f._tr_tally(w,w.strstart-1-w.prev_match,w.prev_length-G),w.lookahead-=w.prev_length-1,w.prev_length-=2;++w.strstart<=D&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,ie=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),--w.prev_length!=0;);if(w.match_available=0,w.match_length=G-1,w.strstart++,L&&(M(w,!1),w.strm.avail_out===0))return S}else if(w.match_available){if((L=f._tr_tally(w,0,w.window[w.strstart-1]))&&M(w,!1),w.strstart++,w.lookahead--,w.strm.avail_out===0)return S}else w.match_available=1,w.strstart++,w.lookahead--}return w.match_available&&(L=f._tr_tally(w,0,w.window[w.strstart-1]),w.match_available=0),w.insert=w.strstart<G-1?w.strstart:G-1,ce===x?(M(w,!0),w.strm.avail_out===0?F:Y):w.last_lit&&(M(w,!1),w.strm.avail_out===0)?S:H}function Te(w,ce,ie,L,D){this.good_length=w,this.max_lazy=ce,this.nice_length=ie,this.max_chain=L,this.func=D}function Ke(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=z,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new d.Buf16(2*q),this.dyn_dtree=new d.Buf16(2*(2*R+1)),this.bl_tree=new d.Buf16(2*(2*B+1)),$(this.dyn_ltree),$(this.dyn_dtree),$(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new d.Buf16(ae+1),this.heap=new d.Buf16(2*U+1),$(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new d.Buf16(2*U+1),$(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Je(w){var ce;return w&&w.state?(w.total_in=w.total_out=0,w.data_type=_,(ce=w.state).pending=0,ce.pending_out=0,ce.wrap<0&&(ce.wrap=-ce.wrap),ce.status=ce.wrap?j:J,w.adler=ce.wrap===2?0:1,ce.last_flush=g,f._tr_init(ce),b):be(w,C)}function Mt(w){var ce=Je(w);return ce===b&&(function(ie){ie.window_size=2*ie.w_size,$(ie.head),ie.max_lazy_match=u[ie.level].max_lazy,ie.good_match=u[ie.level].good_length,ie.nice_match=u[ie.level].nice_length,ie.max_chain_length=u[ie.level].max_chain,ie.strstart=0,ie.block_start=0,ie.lookahead=0,ie.insert=0,ie.match_length=ie.prev_length=G-1,ie.match_available=0,ie.ins_h=0})(w.state),ce}function Dt(w,ce,ie,L,D,V){if(!w)return C;var me=1;if(ce===k&&(ce=6),L<0?(me=0,L=-L):15<L&&(me=2,L-=16),D<1||O<D||ie!==z||L<8||15<L||ce<0||9<ce||V<0||N<V)return be(w,C);L===8&&(L=9);var ge=new Ke;return(w.state=ge).strm=w,ge.wrap=me,ge.gzhead=null,ge.w_bits=L,ge.w_size=1<<ge.w_bits,ge.w_mask=ge.w_size-1,ge.hash_bits=D+7,ge.hash_size=1<<ge.hash_bits,ge.hash_mask=ge.hash_size-1,ge.hash_shift=~~((ge.hash_bits+G-1)/G),ge.window=new d.Buf8(2*ge.w_size),ge.head=new d.Buf16(ge.hash_size),ge.prev=new d.Buf16(ge.w_size),ge.lit_bufsize=1<<D+6,ge.pending_buf_size=4*ge.lit_bufsize,ge.pending_buf=new d.Buf8(ge.pending_buf_size),ge.d_buf=1*ge.lit_bufsize,ge.l_buf=3*ge.lit_bufsize,ge.level=ce,ge.strategy=V,ge.method=ie,Mt(w)}u=[new Te(0,0,0,0,function(w,ce){var ie=65535;for(ie>w.pending_buf_size-5&&(ie=w.pending_buf_size-5);;){if(w.lookahead<=1){if(_e(w),w.lookahead===0&&ce===g)return S;if(w.lookahead===0)break}w.strstart+=w.lookahead,w.lookahead=0;var L=w.block_start+ie;if((w.strstart===0||w.strstart>=L)&&(w.lookahead=w.strstart-L,w.strstart=L,M(w,!1),w.strm.avail_out===0)||w.strstart-w.block_start>=w.w_size-ue&&(M(w,!1),w.strm.avail_out===0))return S}return w.insert=0,ce===x?(M(w,!0),w.strm.avail_out===0?F:Y):(w.strstart>w.block_start&&(M(w,!1),w.strm.avail_out),S)}),new Te(4,4,8,4,$e),new Te(4,5,16,8,$e),new Te(4,6,32,32,$e),new Te(4,4,16,16,Ne),new Te(8,16,32,32,Ne),new Te(8,16,128,128,Ne),new Te(8,32,128,256,Ne),new Te(32,128,258,1024,Ne),new Te(32,258,258,4096,Ne)],s.deflateInit=function(w,ce){return Dt(w,ce,z,15,8,0)},s.deflateInit2=Dt,s.deflateReset=Mt,s.deflateResetKeep=Je,s.deflateSetHeader=function(w,ce){return w&&w.state?w.state.wrap!==2?C:(w.state.gzhead=ce,b):C},s.deflate=function(w,ce){var ie,L,D,V;if(!w||!w.state||5<ce||ce<0)return w?be(w,C):C;if(L=w.state,!w.output||!w.input&&w.avail_in!==0||L.status===666&&ce!==x)return be(w,w.avail_out===0?-5:C);if(L.strm=w,ie=L.last_flush,L.last_flush=ce,L.status===j)if(L.wrap===2)w.adler=0,T(L,31),T(L,139),T(L,8),L.gzhead?(T(L,(L.gzhead.text?1:0)+(L.gzhead.hcrc?2:0)+(L.gzhead.extra?4:0)+(L.gzhead.name?8:0)+(L.gzhead.comment?16:0)),T(L,255&L.gzhead.time),T(L,L.gzhead.time>>8&255),T(L,L.gzhead.time>>16&255),T(L,L.gzhead.time>>24&255),T(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),T(L,255&L.gzhead.os),L.gzhead.extra&&L.gzhead.extra.length&&(T(L,255&L.gzhead.extra.length),T(L,L.gzhead.extra.length>>8&255)),L.gzhead.hcrc&&(w.adler=h(w.adler,L.pending_buf,L.pending,0)),L.gzindex=0,L.status=69):(T(L,0),T(L,0),T(L,0),T(L,0),T(L,0),T(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),T(L,3),L.status=J);else{var me=z+(L.w_bits-8<<4)<<8;me|=(2<=L.strategy||L.level<2?0:L.level<6?1:L.level===6?2:3)<<6,L.strstart!==0&&(me|=32),me+=31-me%31,L.status=J,ne(L,me),L.strstart!==0&&(ne(L,w.adler>>>16),ne(L,65535&w.adler)),w.adler=1}if(L.status===69)if(L.gzhead.extra){for(D=L.pending;L.gzindex<(65535&L.gzhead.extra.length)&&(L.pending!==L.pending_buf_size||(L.gzhead.hcrc&&L.pending>D&&(w.adler=h(w.adler,L.pending_buf,L.pending-D,D)),A(w),D=L.pending,L.pending!==L.pending_buf_size));)T(L,255&L.gzhead.extra[L.gzindex]),L.gzindex++;L.gzhead.hcrc&&L.pending>D&&(w.adler=h(w.adler,L.pending_buf,L.pending-D,D)),L.gzindex===L.gzhead.extra.length&&(L.gzindex=0,L.status=73)}else L.status=73;if(L.status===73)if(L.gzhead.name){D=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>D&&(w.adler=h(w.adler,L.pending_buf,L.pending-D,D)),A(w),D=L.pending,L.pending===L.pending_buf_size)){V=1;break}V=L.gzindex<L.gzhead.name.length?255&L.gzhead.name.charCodeAt(L.gzindex++):0,T(L,V)}while(V!==0);L.gzhead.hcrc&&L.pending>D&&(w.adler=h(w.adler,L.pending_buf,L.pending-D,D)),V===0&&(L.gzindex=0,L.status=91)}else L.status=91;if(L.status===91)if(L.gzhead.comment){D=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>D&&(w.adler=h(w.adler,L.pending_buf,L.pending-D,D)),A(w),D=L.pending,L.pending===L.pending_buf_size)){V=1;break}V=L.gzindex<L.gzhead.comment.length?255&L.gzhead.comment.charCodeAt(L.gzindex++):0,T(L,V)}while(V!==0);L.gzhead.hcrc&&L.pending>D&&(w.adler=h(w.adler,L.pending_buf,L.pending-D,D)),V===0&&(L.status=103)}else L.status=103;if(L.status===103&&(L.gzhead.hcrc?(L.pending+2>L.pending_buf_size&&A(w),L.pending+2<=L.pending_buf_size&&(T(L,255&w.adler),T(L,w.adler>>8&255),w.adler=0,L.status=J)):L.status=J),L.pending!==0){if(A(w),w.avail_out===0)return L.last_flush=-1,b}else if(w.avail_in===0&&le(ce)<=le(ie)&&ce!==x)return be(w,-5);if(L.status===666&&w.avail_in!==0)return be(w,-5);if(w.avail_in!==0||L.lookahead!==0||ce!==g&&L.status!==666){var ge=L.strategy===2?(function(W,ye){for(var Se;;){if(W.lookahead===0&&(_e(W),W.lookahead===0)){if(ye===g)return S;break}if(W.match_length=0,Se=f._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++,Se&&(M(W,!1),W.strm.avail_out===0))return S}return W.insert=0,ye===x?(M(W,!0),W.strm.avail_out===0?F:Y):W.last_lit&&(M(W,!1),W.strm.avail_out===0)?S:H})(L,ce):L.strategy===3?(function(W,ye){for(var Se,we,Z,he,ke=W.window;;){if(W.lookahead<=te){if(_e(W),W.lookahead<=te&&ye===g)return S;if(W.lookahead===0)break}if(W.match_length=0,W.lookahead>=G&&0<W.strstart&&(we=ke[Z=W.strstart-1])===ke[++Z]&&we===ke[++Z]&&we===ke[++Z]){he=W.strstart+te;do;while(we===ke[++Z]&&we===ke[++Z]&&we===ke[++Z]&&we===ke[++Z]&&we===ke[++Z]&&we===ke[++Z]&&we===ke[++Z]&&we===ke[++Z]&&Z<he);W.match_length=te-(he-Z),W.match_length>W.lookahead&&(W.match_length=W.lookahead)}if(W.match_length>=G?(Se=f._tr_tally(W,1,W.match_length-G),W.lookahead-=W.match_length,W.strstart+=W.match_length,W.match_length=0):(Se=f._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++),Se&&(M(W,!1),W.strm.avail_out===0))return S}return W.insert=0,ye===x?(M(W,!0),W.strm.avail_out===0?F:Y):W.last_lit&&(M(W,!1),W.strm.avail_out===0)?S:H})(L,ce):u[L.level].func(L,ce);if(ge!==F&&ge!==Y||(L.status=666),ge===S||ge===F)return w.avail_out===0&&(L.last_flush=-1),b;if(ge===H&&(ce===1?f._tr_align(L):ce!==5&&(f._tr_stored_block(L,0,0,!1),ce===3&&($(L.head),L.lookahead===0&&(L.strstart=0,L.block_start=0,L.insert=0))),A(w),w.avail_out===0))return L.last_flush=-1,b}return ce!==x?b:L.wrap<=0?1:(L.wrap===2?(T(L,255&w.adler),T(L,w.adler>>8&255),T(L,w.adler>>16&255),T(L,w.adler>>24&255),T(L,255&w.total_in),T(L,w.total_in>>8&255),T(L,w.total_in>>16&255),T(L,w.total_in>>24&255)):(ne(L,w.adler>>>16),ne(L,65535&w.adler)),A(w),0<L.wrap&&(L.wrap=-L.wrap),L.pending!==0?b:1)},s.deflateEnd=function(w){var ce;return w&&w.state?(ce=w.state.status)!==j&&ce!==69&&ce!==73&&ce!==91&&ce!==103&&ce!==J&&ce!==666?be(w,C):(w.state=null,ce===J?be(w,-3):b):C},s.deflateSetDictionary=function(w,ce){var ie,L,D,V,me,ge,W,ye,Se=ce.length;if(!w||!w.state||(V=(ie=w.state).wrap)===2||V===1&&ie.status!==j||ie.lookahead)return C;for(V===1&&(w.adler=m(w.adler,ce,Se,0)),ie.wrap=0,Se>=ie.w_size&&(V===0&&($(ie.head),ie.strstart=0,ie.block_start=0,ie.insert=0),ye=new d.Buf8(ie.w_size),d.arraySet(ye,ce,Se-ie.w_size,ie.w_size,0),ce=ye,Se=ie.w_size),me=w.avail_in,ge=w.next_in,W=w.input,w.avail_in=Se,w.next_in=0,w.input=ce,_e(ie);ie.lookahead>=G;){for(L=ie.strstart,D=ie.lookahead-(G-1);ie.ins_h=(ie.ins_h<<ie.hash_shift^ie.window[L+G-1])&ie.hash_mask,ie.prev[L&ie.w_mask]=ie.head[ie.ins_h],ie.head[ie.ins_h]=L,L++,--D;);ie.strstart=L,ie.lookahead=G-1,_e(ie)}return ie.strstart+=ie.lookahead,ie.block_start=ie.strstart,ie.insert=ie.lookahead,ie.lookahead=0,ie.match_length=ie.prev_length=G-1,ie.match_available=0,w.next_in=ge,w.input=W,w.avail_in=me,ie.wrap=V,b},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,o,s){o.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,o,s){o.exports=function(u,d){var f,m,h,v,g,x,b,C,k,N,_,z,O,U,R,B,q,ae,G,te,ue,j,J,S,H;f=u.state,m=u.next_in,S=u.input,h=m+(u.avail_in-5),v=u.next_out,H=u.output,g=v-(d-u.avail_out),x=v+(u.avail_out-257),b=f.dmax,C=f.wsize,k=f.whave,N=f.wnext,_=f.window,z=f.hold,O=f.bits,U=f.lencode,R=f.distcode,B=(1<<f.lenbits)-1,q=(1<<f.distbits)-1;e:do{O<15&&(z+=S[m++]<<O,O+=8,z+=S[m++]<<O,O+=8),ae=U[z&B];t:for(;;){if(z>>>=G=ae>>>24,O-=G,(G=ae>>>16&255)===0)H[v++]=65535&ae;else{if(!(16&G)){if((64&G)==0){ae=U[(65535&ae)+(z&(1<<G)-1)];continue t}if(32&G){f.mode=12;break e}u.msg="invalid literal/length code",f.mode=30;break e}te=65535&ae,(G&=15)&&(O<G&&(z+=S[m++]<<O,O+=8),te+=z&(1<<G)-1,z>>>=G,O-=G),O<15&&(z+=S[m++]<<O,O+=8,z+=S[m++]<<O,O+=8),ae=R[z&q];n:for(;;){if(z>>>=G=ae>>>24,O-=G,!(16&(G=ae>>>16&255))){if((64&G)==0){ae=R[(65535&ae)+(z&(1<<G)-1)];continue n}u.msg="invalid distance code",f.mode=30;break e}if(ue=65535&ae,O<(G&=15)&&(z+=S[m++]<<O,(O+=8)<G&&(z+=S[m++]<<O,O+=8)),b<(ue+=z&(1<<G)-1)){u.msg="invalid distance too far back",f.mode=30;break e}if(z>>>=G,O-=G,(G=v-g)<ue){if(k<(G=ue-G)&&f.sane){u.msg="invalid distance too far back",f.mode=30;break e}if(J=_,(j=0)===N){if(j+=C-G,G<te){for(te-=G;H[v++]=_[j++],--G;);j=v-ue,J=H}}else if(N<G){if(j+=C+N-G,(G-=N)<te){for(te-=G;H[v++]=_[j++],--G;);if(j=0,N<te){for(te-=G=N;H[v++]=_[j++],--G;);j=v-ue,J=H}}}else if(j+=N-G,G<te){for(te-=G;H[v++]=_[j++],--G;);j=v-ue,J=H}for(;2<te;)H[v++]=J[j++],H[v++]=J[j++],H[v++]=J[j++],te-=3;te&&(H[v++]=J[j++],1<te&&(H[v++]=J[j++]))}else{for(j=v-ue;H[v++]=H[j++],H[v++]=H[j++],H[v++]=H[j++],2<(te-=3););te&&(H[v++]=H[j++],1<te&&(H[v++]=H[j++]))}break}}break}}while(m<h&&v<x);m-=te=O>>3,z&=(1<<(O-=te<<3))-1,u.next_in=m,u.next_out=v,u.avail_in=m<h?h-m+5:5-(m-h),u.avail_out=v<x?x-v+257:257-(v-x),f.hold=z,f.bits=O}},{}],49:[function(i,o,s){var u=i("../utils/common"),d=i("./adler32"),f=i("./crc32"),m=i("./inffast"),h=i("./inftrees"),v=1,g=2,x=0,b=-2,C=1,k=852,N=592;function _(j){return(j>>>24&255)+(j>>>8&65280)+((65280&j)<<8)+((255&j)<<24)}function z(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new u.Buf16(320),this.work=new u.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function O(j){var J;return j&&j.state?(J=j.state,j.total_in=j.total_out=J.total=0,j.msg="",J.wrap&&(j.adler=1&J.wrap),J.mode=C,J.last=0,J.havedict=0,J.dmax=32768,J.head=null,J.hold=0,J.bits=0,J.lencode=J.lendyn=new u.Buf32(k),J.distcode=J.distdyn=new u.Buf32(N),J.sane=1,J.back=-1,x):b}function U(j){var J;return j&&j.state?((J=j.state).wsize=0,J.whave=0,J.wnext=0,O(j)):b}function R(j,J){var S,H;return j&&j.state?(H=j.state,J<0?(S=0,J=-J):(S=1+(J>>4),J<48&&(J&=15)),J&&(J<8||15<J)?b:(H.window!==null&&H.wbits!==J&&(H.window=null),H.wrap=S,H.wbits=J,U(j))):b}function B(j,J){var S,H;return j?(H=new z,(j.state=H).window=null,(S=R(j,J))!==x&&(j.state=null),S):b}var q,ae,G=!0;function te(j){if(G){var J;for(q=new u.Buf32(512),ae=new u.Buf32(32),J=0;J<144;)j.lens[J++]=8;for(;J<256;)j.lens[J++]=9;for(;J<280;)j.lens[J++]=7;for(;J<288;)j.lens[J++]=8;for(h(v,j.lens,0,288,q,0,j.work,{bits:9}),J=0;J<32;)j.lens[J++]=5;h(g,j.lens,0,32,ae,0,j.work,{bits:5}),G=!1}j.lencode=q,j.lenbits=9,j.distcode=ae,j.distbits=5}function ue(j,J,S,H){var F,Y=j.state;return Y.window===null&&(Y.wsize=1<<Y.wbits,Y.wnext=0,Y.whave=0,Y.window=new u.Buf8(Y.wsize)),H>=Y.wsize?(u.arraySet(Y.window,J,S-Y.wsize,Y.wsize,0),Y.wnext=0,Y.whave=Y.wsize):(H<(F=Y.wsize-Y.wnext)&&(F=H),u.arraySet(Y.window,J,S-H,F,Y.wnext),(H-=F)?(u.arraySet(Y.window,J,S-H,H,0),Y.wnext=H,Y.whave=Y.wsize):(Y.wnext+=F,Y.wnext===Y.wsize&&(Y.wnext=0),Y.whave<Y.wsize&&(Y.whave+=F))),0}s.inflateReset=U,s.inflateReset2=R,s.inflateResetKeep=O,s.inflateInit=function(j){return B(j,15)},s.inflateInit2=B,s.inflate=function(j,J){var S,H,F,Y,be,le,$,A,M,T,ne,oe,_e,$e,Ne,Te,Ke,Je,Mt,Dt,w,ce,ie,L,D=0,V=new u.Buf8(4),me=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!j||!j.state||!j.output||!j.input&&j.avail_in!==0)return b;(S=j.state).mode===12&&(S.mode=13),be=j.next_out,F=j.output,$=j.avail_out,Y=j.next_in,H=j.input,le=j.avail_in,A=S.hold,M=S.bits,T=le,ne=$,ce=x;e:for(;;)switch(S.mode){case C:if(S.wrap===0){S.mode=13;break}for(;M<16;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}if(2&S.wrap&&A===35615){V[S.check=0]=255&A,V[1]=A>>>8&255,S.check=f(S.check,V,2,0),M=A=0,S.mode=2;break}if(S.flags=0,S.head&&(S.head.done=!1),!(1&S.wrap)||(((255&A)<<8)+(A>>8))%31){j.msg="incorrect header check",S.mode=30;break}if((15&A)!=8){j.msg="unknown compression method",S.mode=30;break}if(M-=4,w=8+(15&(A>>>=4)),S.wbits===0)S.wbits=w;else if(w>S.wbits){j.msg="invalid window size",S.mode=30;break}S.dmax=1<<w,j.adler=S.check=1,S.mode=512&A?10:12,M=A=0;break;case 2:for(;M<16;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}if(S.flags=A,(255&S.flags)!=8){j.msg="unknown compression method",S.mode=30;break}if(57344&S.flags){j.msg="unknown header flags set",S.mode=30;break}S.head&&(S.head.text=A>>8&1),512&S.flags&&(V[0]=255&A,V[1]=A>>>8&255,S.check=f(S.check,V,2,0)),M=A=0,S.mode=3;case 3:for(;M<32;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}S.head&&(S.head.time=A),512&S.flags&&(V[0]=255&A,V[1]=A>>>8&255,V[2]=A>>>16&255,V[3]=A>>>24&255,S.check=f(S.check,V,4,0)),M=A=0,S.mode=4;case 4:for(;M<16;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}S.head&&(S.head.xflags=255&A,S.head.os=A>>8),512&S.flags&&(V[0]=255&A,V[1]=A>>>8&255,S.check=f(S.check,V,2,0)),M=A=0,S.mode=5;case 5:if(1024&S.flags){for(;M<16;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}S.length=A,S.head&&(S.head.extra_len=A),512&S.flags&&(V[0]=255&A,V[1]=A>>>8&255,S.check=f(S.check,V,2,0)),M=A=0}else S.head&&(S.head.extra=null);S.mode=6;case 6:if(1024&S.flags&&(le<(oe=S.length)&&(oe=le),oe&&(S.head&&(w=S.head.extra_len-S.length,S.head.extra||(S.head.extra=new Array(S.head.extra_len)),u.arraySet(S.head.extra,H,Y,oe,w)),512&S.flags&&(S.check=f(S.check,H,oe,Y)),le-=oe,Y+=oe,S.length-=oe),S.length))break e;S.length=0,S.mode=7;case 7:if(2048&S.flags){if(le===0)break e;for(oe=0;w=H[Y+oe++],S.head&&w&&S.length<65536&&(S.head.name+=String.fromCharCode(w)),w&&oe<le;);if(512&S.flags&&(S.check=f(S.check,H,oe,Y)),le-=oe,Y+=oe,w)break e}else S.head&&(S.head.name=null);S.length=0,S.mode=8;case 8:if(4096&S.flags){if(le===0)break e;for(oe=0;w=H[Y+oe++],S.head&&w&&S.length<65536&&(S.head.comment+=String.fromCharCode(w)),w&&oe<le;);if(512&S.flags&&(S.check=f(S.check,H,oe,Y)),le-=oe,Y+=oe,w)break e}else S.head&&(S.head.comment=null);S.mode=9;case 9:if(512&S.flags){for(;M<16;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}if(A!==(65535&S.check)){j.msg="header crc mismatch",S.mode=30;break}M=A=0}S.head&&(S.head.hcrc=S.flags>>9&1,S.head.done=!0),j.adler=S.check=0,S.mode=12;break;case 10:for(;M<32;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}j.adler=S.check=_(A),M=A=0,S.mode=11;case 11:if(S.havedict===0)return j.next_out=be,j.avail_out=$,j.next_in=Y,j.avail_in=le,S.hold=A,S.bits=M,2;j.adler=S.check=1,S.mode=12;case 12:if(J===5||J===6)break e;case 13:if(S.last){A>>>=7&M,M-=7&M,S.mode=27;break}for(;M<3;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}switch(S.last=1&A,M-=1,3&(A>>>=1)){case 0:S.mode=14;break;case 1:if(te(S),S.mode=20,J!==6)break;A>>>=2,M-=2;break e;case 2:S.mode=17;break;case 3:j.msg="invalid block type",S.mode=30}A>>>=2,M-=2;break;case 14:for(A>>>=7&M,M-=7&M;M<32;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}if((65535&A)!=(A>>>16^65535)){j.msg="invalid stored block lengths",S.mode=30;break}if(S.length=65535&A,M=A=0,S.mode=15,J===6)break e;case 15:S.mode=16;case 16:if(oe=S.length){if(le<oe&&(oe=le),$<oe&&(oe=$),oe===0)break e;u.arraySet(F,H,Y,oe,be),le-=oe,Y+=oe,$-=oe,be+=oe,S.length-=oe;break}S.mode=12;break;case 17:for(;M<14;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}if(S.nlen=257+(31&A),A>>>=5,M-=5,S.ndist=1+(31&A),A>>>=5,M-=5,S.ncode=4+(15&A),A>>>=4,M-=4,286<S.nlen||30<S.ndist){j.msg="too many length or distance symbols",S.mode=30;break}S.have=0,S.mode=18;case 18:for(;S.have<S.ncode;){for(;M<3;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}S.lens[me[S.have++]]=7&A,A>>>=3,M-=3}for(;S.have<19;)S.lens[me[S.have++]]=0;if(S.lencode=S.lendyn,S.lenbits=7,ie={bits:S.lenbits},ce=h(0,S.lens,0,19,S.lencode,0,S.work,ie),S.lenbits=ie.bits,ce){j.msg="invalid code lengths set",S.mode=30;break}S.have=0,S.mode=19;case 19:for(;S.have<S.nlen+S.ndist;){for(;Te=(D=S.lencode[A&(1<<S.lenbits)-1])>>>16&255,Ke=65535&D,!((Ne=D>>>24)<=M);){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}if(Ke<16)A>>>=Ne,M-=Ne,S.lens[S.have++]=Ke;else{if(Ke===16){for(L=Ne+2;M<L;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}if(A>>>=Ne,M-=Ne,S.have===0){j.msg="invalid bit length repeat",S.mode=30;break}w=S.lens[S.have-1],oe=3+(3&A),A>>>=2,M-=2}else if(Ke===17){for(L=Ne+3;M<L;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}M-=Ne,w=0,oe=3+(7&(A>>>=Ne)),A>>>=3,M-=3}else{for(L=Ne+7;M<L;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}M-=Ne,w=0,oe=11+(127&(A>>>=Ne)),A>>>=7,M-=7}if(S.have+oe>S.nlen+S.ndist){j.msg="invalid bit length repeat",S.mode=30;break}for(;oe--;)S.lens[S.have++]=w}}if(S.mode===30)break;if(S.lens[256]===0){j.msg="invalid code -- missing end-of-block",S.mode=30;break}if(S.lenbits=9,ie={bits:S.lenbits},ce=h(v,S.lens,0,S.nlen,S.lencode,0,S.work,ie),S.lenbits=ie.bits,ce){j.msg="invalid literal/lengths set",S.mode=30;break}if(S.distbits=6,S.distcode=S.distdyn,ie={bits:S.distbits},ce=h(g,S.lens,S.nlen,S.ndist,S.distcode,0,S.work,ie),S.distbits=ie.bits,ce){j.msg="invalid distances set",S.mode=30;break}if(S.mode=20,J===6)break e;case 20:S.mode=21;case 21:if(6<=le&&258<=$){j.next_out=be,j.avail_out=$,j.next_in=Y,j.avail_in=le,S.hold=A,S.bits=M,m(j,ne),be=j.next_out,F=j.output,$=j.avail_out,Y=j.next_in,H=j.input,le=j.avail_in,A=S.hold,M=S.bits,S.mode===12&&(S.back=-1);break}for(S.back=0;Te=(D=S.lencode[A&(1<<S.lenbits)-1])>>>16&255,Ke=65535&D,!((Ne=D>>>24)<=M);){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}if(Te&&(240&Te)==0){for(Je=Ne,Mt=Te,Dt=Ke;Te=(D=S.lencode[Dt+((A&(1<<Je+Mt)-1)>>Je)])>>>16&255,Ke=65535&D,!(Je+(Ne=D>>>24)<=M);){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}A>>>=Je,M-=Je,S.back+=Je}if(A>>>=Ne,M-=Ne,S.back+=Ne,S.length=Ke,Te===0){S.mode=26;break}if(32&Te){S.back=-1,S.mode=12;break}if(64&Te){j.msg="invalid literal/length code",S.mode=30;break}S.extra=15&Te,S.mode=22;case 22:if(S.extra){for(L=S.extra;M<L;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}S.length+=A&(1<<S.extra)-1,A>>>=S.extra,M-=S.extra,S.back+=S.extra}S.was=S.length,S.mode=23;case 23:for(;Te=(D=S.distcode[A&(1<<S.distbits)-1])>>>16&255,Ke=65535&D,!((Ne=D>>>24)<=M);){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}if((240&Te)==0){for(Je=Ne,Mt=Te,Dt=Ke;Te=(D=S.distcode[Dt+((A&(1<<Je+Mt)-1)>>Je)])>>>16&255,Ke=65535&D,!(Je+(Ne=D>>>24)<=M);){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}A>>>=Je,M-=Je,S.back+=Je}if(A>>>=Ne,M-=Ne,S.back+=Ne,64&Te){j.msg="invalid distance code",S.mode=30;break}S.offset=Ke,S.extra=15&Te,S.mode=24;case 24:if(S.extra){for(L=S.extra;M<L;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}S.offset+=A&(1<<S.extra)-1,A>>>=S.extra,M-=S.extra,S.back+=S.extra}if(S.offset>S.dmax){j.msg="invalid distance too far back",S.mode=30;break}S.mode=25;case 25:if($===0)break e;if(oe=ne-$,S.offset>oe){if((oe=S.offset-oe)>S.whave&&S.sane){j.msg="invalid distance too far back",S.mode=30;break}_e=oe>S.wnext?(oe-=S.wnext,S.wsize-oe):S.wnext-oe,oe>S.length&&(oe=S.length),$e=S.window}else $e=F,_e=be-S.offset,oe=S.length;for($<oe&&(oe=$),$-=oe,S.length-=oe;F[be++]=$e[_e++],--oe;);S.length===0&&(S.mode=21);break;case 26:if($===0)break e;F[be++]=S.length,$--,S.mode=21;break;case 27:if(S.wrap){for(;M<32;){if(le===0)break e;le--,A|=H[Y++]<<M,M+=8}if(ne-=$,j.total_out+=ne,S.total+=ne,ne&&(j.adler=S.check=S.flags?f(S.check,F,ne,be-ne):d(S.check,F,ne,be-ne)),ne=$,(S.flags?A:_(A))!==S.check){j.msg="incorrect data check",S.mode=30;break}M=A=0}S.mode=28;case 28:if(S.wrap&&S.flags){for(;M<32;){if(le===0)break e;le--,A+=H[Y++]<<M,M+=8}if(A!==(4294967295&S.total)){j.msg="incorrect length check",S.mode=30;break}M=A=0}S.mode=29;case 29:ce=1;break e;case 30:ce=-3;break e;case 31:return-4;default:return b}return j.next_out=be,j.avail_out=$,j.next_in=Y,j.avail_in=le,S.hold=A,S.bits=M,(S.wsize||ne!==j.avail_out&&S.mode<30&&(S.mode<27||J!==4))&&ue(j,j.output,j.next_out,ne-j.avail_out)?(S.mode=31,-4):(T-=j.avail_in,ne-=j.avail_out,j.total_in+=T,j.total_out+=ne,S.total+=ne,S.wrap&&ne&&(j.adler=S.check=S.flags?f(S.check,F,ne,j.next_out-ne):d(S.check,F,ne,j.next_out-ne)),j.data_type=S.bits+(S.last?64:0)+(S.mode===12?128:0)+(S.mode===20||S.mode===15?256:0),(T==0&&ne===0||J===4)&&ce===x&&(ce=-5),ce)},s.inflateEnd=function(j){if(!j||!j.state)return b;var J=j.state;return J.window&&(J.window=null),j.state=null,x},s.inflateGetHeader=function(j,J){var S;return j&&j.state?(2&(S=j.state).wrap)==0?b:((S.head=J).done=!1,x):b},s.inflateSetDictionary=function(j,J){var S,H=J.length;return j&&j.state?(S=j.state).wrap!==0&&S.mode!==11?b:S.mode===11&&d(1,J,H,0)!==S.check?-3:ue(j,J,H,H)?(S.mode=31,-4):(S.havedict=1,x):b},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,o,s){var u=i("../utils/common"),d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];o.exports=function(v,g,x,b,C,k,N,_){var z,O,U,R,B,q,ae,G,te,ue=_.bits,j=0,J=0,S=0,H=0,F=0,Y=0,be=0,le=0,$=0,A=0,M=null,T=0,ne=new u.Buf16(16),oe=new u.Buf16(16),_e=null,$e=0;for(j=0;j<=15;j++)ne[j]=0;for(J=0;J<b;J++)ne[g[x+J]]++;for(F=ue,H=15;1<=H&&ne[H]===0;H--);if(H<F&&(F=H),H===0)return C[k++]=20971520,C[k++]=20971520,_.bits=1,0;for(S=1;S<H&&ne[S]===0;S++);for(F<S&&(F=S),j=le=1;j<=15;j++)if(le<<=1,(le-=ne[j])<0)return-1;if(0<le&&(v===0||H!==1))return-1;for(oe[1]=0,j=1;j<15;j++)oe[j+1]=oe[j]+ne[j];for(J=0;J<b;J++)g[x+J]!==0&&(N[oe[g[x+J]]++]=J);if(q=v===0?(M=_e=N,19):v===1?(M=d,T-=257,_e=f,$e-=257,256):(M=m,_e=h,-1),j=S,B=k,be=J=A=0,U=-1,R=($=1<<(Y=F))-1,v===1&&852<$||v===2&&592<$)return 1;for(;;){for(ae=j-be,te=N[J]<q?(G=0,N[J]):N[J]>q?(G=_e[$e+N[J]],M[T+N[J]]):(G=96,0),z=1<<j-be,S=O=1<<Y;C[B+(A>>be)+(O-=z)]=ae<<24|G<<16|te|0,O!==0;);for(z=1<<j-1;A&z;)z>>=1;if(z!==0?(A&=z-1,A+=z):A=0,J++,--ne[j]==0){if(j===H)break;j=g[x+N[J]]}if(F<j&&(A&R)!==U){for(be===0&&(be=F),B+=S,le=1<<(Y=j-be);Y+be<H&&!((le-=ne[Y+be])<=0);)Y++,le<<=1;if($+=1<<Y,v===1&&852<$||v===2&&592<$)return 1;C[U=A&R]=F<<24|Y<<16|B-k|0}}return A!==0&&(C[B+A]=j-be<<24|64<<16|0),_.bits=F,0}},{"../utils/common":41}],51:[function(i,o,s){o.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,o,s){var u=i("../utils/common"),d=0,f=1;function m(D){for(var V=D.length;0<=--V;)D[V]=0}var h=0,v=29,g=256,x=g+1+v,b=30,C=19,k=2*x+1,N=15,_=16,z=7,O=256,U=16,R=17,B=18,q=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ae=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],te=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ue=new Array(2*(x+2));m(ue);var j=new Array(2*b);m(j);var J=new Array(512);m(J);var S=new Array(256);m(S);var H=new Array(v);m(H);var F,Y,be,le=new Array(b);function $(D,V,me,ge,W){this.static_tree=D,this.extra_bits=V,this.extra_base=me,this.elems=ge,this.max_length=W,this.has_stree=D&&D.length}function A(D,V){this.dyn_tree=D,this.max_code=0,this.stat_desc=V}function M(D){return D<256?J[D]:J[256+(D>>>7)]}function T(D,V){D.pending_buf[D.pending++]=255&V,D.pending_buf[D.pending++]=V>>>8&255}function ne(D,V,me){D.bi_valid>_-me?(D.bi_buf|=V<<D.bi_valid&65535,T(D,D.bi_buf),D.bi_buf=V>>_-D.bi_valid,D.bi_valid+=me-_):(D.bi_buf|=V<<D.bi_valid&65535,D.bi_valid+=me)}function oe(D,V,me){ne(D,me[2*V],me[2*V+1])}function _e(D,V){for(var me=0;me|=1&D,D>>>=1,me<<=1,0<--V;);return me>>>1}function $e(D,V,me){var ge,W,ye=new Array(N+1),Se=0;for(ge=1;ge<=N;ge++)ye[ge]=Se=Se+me[ge-1]<<1;for(W=0;W<=V;W++){var we=D[2*W+1];we!==0&&(D[2*W]=_e(ye[we]++,we))}}function Ne(D){var V;for(V=0;V<x;V++)D.dyn_ltree[2*V]=0;for(V=0;V<b;V++)D.dyn_dtree[2*V]=0;for(V=0;V<C;V++)D.bl_tree[2*V]=0;D.dyn_ltree[2*O]=1,D.opt_len=D.static_len=0,D.last_lit=D.matches=0}function Te(D){8<D.bi_valid?T(D,D.bi_buf):0<D.bi_valid&&(D.pending_buf[D.pending++]=D.bi_buf),D.bi_buf=0,D.bi_valid=0}function Ke(D,V,me,ge){var W=2*V,ye=2*me;return D[W]<D[ye]||D[W]===D[ye]&&ge[V]<=ge[me]}function Je(D,V,me){for(var ge=D.heap[me],W=me<<1;W<=D.heap_len&&(W<D.heap_len&&Ke(V,D.heap[W+1],D.heap[W],D.depth)&&W++,!Ke(V,ge,D.heap[W],D.depth));)D.heap[me]=D.heap[W],me=W,W<<=1;D.heap[me]=ge}function Mt(D,V,me){var ge,W,ye,Se,we=0;if(D.last_lit!==0)for(;ge=D.pending_buf[D.d_buf+2*we]<<8|D.pending_buf[D.d_buf+2*we+1],W=D.pending_buf[D.l_buf+we],we++,ge===0?oe(D,W,V):(oe(D,(ye=S[W])+g+1,V),(Se=q[ye])!==0&&ne(D,W-=H[ye],Se),oe(D,ye=M(--ge),me),(Se=ae[ye])!==0&&ne(D,ge-=le[ye],Se)),we<D.last_lit;);oe(D,O,V)}function Dt(D,V){var me,ge,W,ye=V.dyn_tree,Se=V.stat_desc.static_tree,we=V.stat_desc.has_stree,Z=V.stat_desc.elems,he=-1;for(D.heap_len=0,D.heap_max=k,me=0;me<Z;me++)ye[2*me]!==0?(D.heap[++D.heap_len]=he=me,D.depth[me]=0):ye[2*me+1]=0;for(;D.heap_len<2;)ye[2*(W=D.heap[++D.heap_len]=he<2?++he:0)]=1,D.depth[W]=0,D.opt_len--,we&&(D.static_len-=Se[2*W+1]);for(V.max_code=he,me=D.heap_len>>1;1<=me;me--)Je(D,ye,me);for(W=Z;me=D.heap[1],D.heap[1]=D.heap[D.heap_len--],Je(D,ye,1),ge=D.heap[1],D.heap[--D.heap_max]=me,D.heap[--D.heap_max]=ge,ye[2*W]=ye[2*me]+ye[2*ge],D.depth[W]=(D.depth[me]>=D.depth[ge]?D.depth[me]:D.depth[ge])+1,ye[2*me+1]=ye[2*ge+1]=W,D.heap[1]=W++,Je(D,ye,1),2<=D.heap_len;);D.heap[--D.heap_max]=D.heap[1],(function(ke,Me){var Ye,ft,Bt,He,pt,Ct,Fe=Me.dyn_tree,wn=Me.max_code,Qt=Me.stat_desc.static_tree,ps=Me.stat_desc.has_stree,lr=Me.stat_desc.extra_bits,La=Me.stat_desc.extra_base,En=Me.stat_desc.max_length,un=0;for(He=0;He<=N;He++)ke.bl_count[He]=0;for(Fe[2*ke.heap[ke.heap_max]+1]=0,Ye=ke.heap_max+1;Ye<k;Ye++)En<(He=Fe[2*Fe[2*(ft=ke.heap[Ye])+1]+1]+1)&&(He=En,un++),Fe[2*ft+1]=He,wn<ft||(ke.bl_count[He]++,pt=0,La<=ft&&(pt=lr[ft-La]),Ct=Fe[2*ft],ke.opt_len+=Ct*(He+pt),ps&&(ke.static_len+=Ct*(Qt[2*ft+1]+pt)));if(un!==0){do{for(He=En-1;ke.bl_count[He]===0;)He--;ke.bl_count[He]--,ke.bl_count[He+1]+=2,ke.bl_count[En]--,un-=2}while(0<un);for(He=En;He!==0;He--)for(ft=ke.bl_count[He];ft!==0;)wn<(Bt=ke.heap[--Ye])||(Fe[2*Bt+1]!==He&&(ke.opt_len+=(He-Fe[2*Bt+1])*Fe[2*Bt],Fe[2*Bt+1]=He),ft--)}})(D,V),$e(ye,he,D.bl_count)}function w(D,V,me){var ge,W,ye=-1,Se=V[1],we=0,Z=7,he=4;for(Se===0&&(Z=138,he=3),V[2*(me+1)+1]=65535,ge=0;ge<=me;ge++)W=Se,Se=V[2*(ge+1)+1],++we<Z&&W===Se||(we<he?D.bl_tree[2*W]+=we:W!==0?(W!==ye&&D.bl_tree[2*W]++,D.bl_tree[2*U]++):we<=10?D.bl_tree[2*R]++:D.bl_tree[2*B]++,ye=W,he=(we=0)===Se?(Z=138,3):W===Se?(Z=6,3):(Z=7,4))}function ce(D,V,me){var ge,W,ye=-1,Se=V[1],we=0,Z=7,he=4;for(Se===0&&(Z=138,he=3),ge=0;ge<=me;ge++)if(W=Se,Se=V[2*(ge+1)+1],!(++we<Z&&W===Se)){if(we<he)for(;oe(D,W,D.bl_tree),--we!=0;);else W!==0?(W!==ye&&(oe(D,W,D.bl_tree),we--),oe(D,U,D.bl_tree),ne(D,we-3,2)):we<=10?(oe(D,R,D.bl_tree),ne(D,we-3,3)):(oe(D,B,D.bl_tree),ne(D,we-11,7));ye=W,he=(we=0)===Se?(Z=138,3):W===Se?(Z=6,3):(Z=7,4)}}m(le);var ie=!1;function L(D,V,me,ge){ne(D,(h<<1)+(ge?1:0),3),(function(W,ye,Se,we){Te(W),T(W,Se),T(W,~Se),u.arraySet(W.pending_buf,W.window,ye,Se,W.pending),W.pending+=Se})(D,V,me)}s._tr_init=function(D){ie||((function(){var V,me,ge,W,ye,Se=new Array(N+1);for(W=ge=0;W<v-1;W++)for(H[W]=ge,V=0;V<1<<q[W];V++)S[ge++]=W;for(S[ge-1]=W,W=ye=0;W<16;W++)for(le[W]=ye,V=0;V<1<<ae[W];V++)J[ye++]=W;for(ye>>=7;W<b;W++)for(le[W]=ye<<7,V=0;V<1<<ae[W]-7;V++)J[256+ye++]=W;for(me=0;me<=N;me++)Se[me]=0;for(V=0;V<=143;)ue[2*V+1]=8,V++,Se[8]++;for(;V<=255;)ue[2*V+1]=9,V++,Se[9]++;for(;V<=279;)ue[2*V+1]=7,V++,Se[7]++;for(;V<=287;)ue[2*V+1]=8,V++,Se[8]++;for($e(ue,x+1,Se),V=0;V<b;V++)j[2*V+1]=5,j[2*V]=_e(V,5);F=new $(ue,q,g+1,x,N),Y=new $(j,ae,0,b,N),be=new $(new Array(0),G,0,C,z)})(),ie=!0),D.l_desc=new A(D.dyn_ltree,F),D.d_desc=new A(D.dyn_dtree,Y),D.bl_desc=new A(D.bl_tree,be),D.bi_buf=0,D.bi_valid=0,Ne(D)},s._tr_stored_block=L,s._tr_flush_block=function(D,V,me,ge){var W,ye,Se=0;0<D.level?(D.strm.data_type===2&&(D.strm.data_type=(function(we){var Z,he=4093624447;for(Z=0;Z<=31;Z++,he>>>=1)if(1&he&&we.dyn_ltree[2*Z]!==0)return d;if(we.dyn_ltree[18]!==0||we.dyn_ltree[20]!==0||we.dyn_ltree[26]!==0)return f;for(Z=32;Z<g;Z++)if(we.dyn_ltree[2*Z]!==0)return f;return d})(D)),Dt(D,D.l_desc),Dt(D,D.d_desc),Se=(function(we){var Z;for(w(we,we.dyn_ltree,we.l_desc.max_code),w(we,we.dyn_dtree,we.d_desc.max_code),Dt(we,we.bl_desc),Z=C-1;3<=Z&&we.bl_tree[2*te[Z]+1]===0;Z--);return we.opt_len+=3*(Z+1)+5+5+4,Z})(D),W=D.opt_len+3+7>>>3,(ye=D.static_len+3+7>>>3)<=W&&(W=ye)):W=ye=me+5,me+4<=W&&V!==-1?L(D,V,me,ge):D.strategy===4||ye===W?(ne(D,2+(ge?1:0),3),Mt(D,ue,j)):(ne(D,4+(ge?1:0),3),(function(we,Z,he,ke){var Me;for(ne(we,Z-257,5),ne(we,he-1,5),ne(we,ke-4,4),Me=0;Me<ke;Me++)ne(we,we.bl_tree[2*te[Me]+1],3);ce(we,we.dyn_ltree,Z-1),ce(we,we.dyn_dtree,he-1)})(D,D.l_desc.max_code+1,D.d_desc.max_code+1,Se+1),Mt(D,D.dyn_ltree,D.dyn_dtree)),Ne(D),ge&&Te(D)},s._tr_tally=function(D,V,me){return D.pending_buf[D.d_buf+2*D.last_lit]=V>>>8&255,D.pending_buf[D.d_buf+2*D.last_lit+1]=255&V,D.pending_buf[D.l_buf+D.last_lit]=255&me,D.last_lit++,V===0?D.dyn_ltree[2*me]++:(D.matches++,V--,D.dyn_ltree[2*(S[me]+g+1)]++,D.dyn_dtree[2*M(V)]++),D.last_lit===D.lit_bufsize-1},s._tr_align=function(D){ne(D,2,3),oe(D,O,ue),(function(V){V.bi_valid===16?(T(V,V.bi_buf),V.bi_buf=0,V.bi_valid=0):8<=V.bi_valid&&(V.pending_buf[V.pending++]=255&V.bi_buf,V.bi_buf>>=8,V.bi_valid-=8)})(D)}},{"../utils/common":41}],53:[function(i,o,s){o.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,o,s){(function(u){(function(d,f){if(!d.setImmediate){var m,h,v,g,x=1,b={},C=!1,k=d.document,N=Object.getPrototypeOf&&Object.getPrototypeOf(d);N=N&&N.setTimeout?N:d,m={}.toString.call(d.process)==="[object process]"?function(U){process.nextTick(function(){z(U)})}:(function(){if(d.postMessage&&!d.importScripts){var U=!0,R=d.onmessage;return d.onmessage=function(){U=!1},d.postMessage("","*"),d.onmessage=R,U}})()?(g="setImmediate$"+Math.random()+"$",d.addEventListener?d.addEventListener("message",O,!1):d.attachEvent("onmessage",O),function(U){d.postMessage(g+U,"*")}):d.MessageChannel?((v=new MessageChannel).port1.onmessage=function(U){z(U.data)},function(U){v.port2.postMessage(U)}):k&&"onreadystatechange"in k.createElement("script")?(h=k.documentElement,function(U){var R=k.createElement("script");R.onreadystatechange=function(){z(U),R.onreadystatechange=null,h.removeChild(R),R=null},h.appendChild(R)}):function(U){setTimeout(z,0,U)},N.setImmediate=function(U){typeof U!="function"&&(U=new Function(""+U));for(var R=new Array(arguments.length-1),B=0;B<R.length;B++)R[B]=arguments[B+1];var q={callback:U,args:R};return b[x]=q,m(x),x++},N.clearImmediate=_}function _(U){delete b[U]}function z(U){if(C)setTimeout(z,0,U);else{var R=b[U];if(R){C=!0;try{(function(B){var q=B.callback,ae=B.args;switch(ae.length){case 0:q();break;case 1:q(ae[0]);break;case 2:q(ae[0],ae[1]);break;case 3:q(ae[0],ae[1],ae[2]);break;default:q.apply(f,ae)}})(R)}finally{_(U),C=!1}}}}function O(U){U.source===d&&typeof U.data=="string"&&U.data.indexOf(g)===0&&z(+U.data.slice(g.length))}})(typeof self>"u"?u===void 0?this:u:self)}).call(this,typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Fc)),Fc.exports}var iS=rS();const lS=bl(iS);function oS(t,r){const i={};return(t[t.length-1]===""?[...t,""]:t).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const sS=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,uS=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,cS={};function Xg(t,r){return(cS.jsx?uS:sS).test(t)}const dS=/[ \t\n\f\r]/g;function fS(t){return typeof t=="object"?t.type==="text"?Zg(t.value):!1:Zg(t)}function Zg(t){return t.replace(dS,"")===""}class kl{constructor(r,i,o){this.normal=i,this.property=r,o&&(this.space=o)}}kl.prototype.normal={};kl.prototype.property={};kl.prototype.space=void 0;function e1(t,r){const i={},o={};for(const s of t)Object.assign(i,s.property),Object.assign(o,s.normal);return new kl(i,o,r)}function bd(t){return t.toLowerCase()}class Zt{constructor(r,i){this.attribute=i,this.property=r}}Zt.prototype.attribute="";Zt.prototype.booleanish=!1;Zt.prototype.boolean=!1;Zt.prototype.commaOrSpaceSeparated=!1;Zt.prototype.commaSeparated=!1;Zt.prototype.defined=!1;Zt.prototype.mustUseProperty=!1;Zt.prototype.number=!1;Zt.prototype.overloadedBoolean=!1;Zt.prototype.property="";Zt.prototype.spaceSeparated=!1;Zt.prototype.space=void 0;let pS=0;const Ie=ir(),St=ir(),vd=ir(),ve=ir(),ot=ir(),Jr=ir(),rn=ir();function ir(){return 2**++pS}const yd=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ie,booleanish:St,commaOrSpaceSeparated:rn,commaSeparated:Jr,number:ve,overloadedBoolean:vd,spaceSeparated:ot},Symbol.toStringTag,{value:"Module"})),qc=Object.keys(yd);class Id extends Zt{constructor(r,i,o,s){let u=-1;if(super(r,i),Qg(this,"space",s),typeof o=="number")for(;++u<qc.length;){const d=qc[u];Qg(this,qc[u],(o&yd[d])===yd[d])}}}Id.prototype.defined=!0;function Qg(t,r,i){i&&(t[r]=i)}function ai(t){const r={},i={};for(const[o,s]of Object.entries(t.properties)){const u=new Id(o,t.transform(t.attributes||{},o),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(o)&&(u.mustUseProperty=!0),r[o]=u,i[bd(o)]=o,i[bd(u.attribute)]=o}return new kl(r,i,t.space)}const t1=ai({properties:{ariaActiveDescendant:null,ariaAtomic:St,ariaAutoComplete:null,ariaBusy:St,ariaChecked:St,ariaColCount:ve,ariaColIndex:ve,ariaColSpan:ve,ariaControls:ot,ariaCurrent:null,ariaDescribedBy:ot,ariaDetails:null,ariaDisabled:St,ariaDropEffect:ot,ariaErrorMessage:null,ariaExpanded:St,ariaFlowTo:ot,ariaGrabbed:St,ariaHasPopup:null,ariaHidden:St,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ot,ariaLevel:ve,ariaLive:null,ariaModal:St,ariaMultiLine:St,ariaMultiSelectable:St,ariaOrientation:null,ariaOwns:ot,ariaPlaceholder:null,ariaPosInSet:ve,ariaPressed:St,ariaReadOnly:St,ariaRelevant:null,ariaRequired:St,ariaRoleDescription:ot,ariaRowCount:ve,ariaRowIndex:ve,ariaRowSpan:ve,ariaSelected:St,ariaSetSize:ve,ariaSort:null,ariaValueMax:ve,ariaValueMin:ve,ariaValueNow:ve,ariaValueText:null,role:null},transform(t,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function n1(t,r){return r in t?t[r]:r}function a1(t,r){return n1(t,r.toLowerCase())}const mS=ai({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Jr,acceptCharset:ot,accessKey:ot,action:null,allow:null,allowFullScreen:Ie,allowPaymentRequest:Ie,allowUserMedia:Ie,alt:null,as:null,async:Ie,autoCapitalize:null,autoComplete:ot,autoFocus:Ie,autoPlay:Ie,blocking:ot,capture:null,charSet:null,checked:Ie,cite:null,className:ot,cols:ve,colSpan:null,content:null,contentEditable:St,controls:Ie,controlsList:ot,coords:ve|Jr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ie,defer:Ie,dir:null,dirName:null,disabled:Ie,download:vd,draggable:St,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ie,formTarget:null,headers:ot,height:ve,hidden:vd,high:ve,href:null,hrefLang:null,htmlFor:ot,httpEquiv:ot,id:null,imageSizes:null,imageSrcSet:null,inert:Ie,inputMode:null,integrity:null,is:null,isMap:Ie,itemId:null,itemProp:ot,itemRef:ot,itemScope:Ie,itemType:ot,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ie,low:ve,manifest:null,max:null,maxLength:ve,media:null,method:null,min:null,minLength:ve,multiple:Ie,muted:Ie,name:null,nonce:null,noModule:Ie,noValidate:Ie,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ie,optimum:ve,pattern:null,ping:ot,placeholder:null,playsInline:Ie,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ie,referrerPolicy:null,rel:ot,required:Ie,reversed:Ie,rows:ve,rowSpan:ve,sandbox:ot,scope:null,scoped:Ie,seamless:Ie,selected:Ie,shadowRootClonable:Ie,shadowRootDelegatesFocus:Ie,shadowRootMode:null,shape:null,size:ve,sizes:null,slot:null,span:ve,spellCheck:St,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ve,step:null,style:null,tabIndex:ve,target:null,title:null,translate:null,type:null,typeMustMatch:Ie,useMap:null,value:St,width:ve,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ot,axis:null,background:null,bgColor:null,border:ve,borderColor:null,bottomMargin:ve,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ie,declare:Ie,event:null,face:null,frame:null,frameBorder:null,hSpace:ve,leftMargin:ve,link:null,longDesc:null,lowSrc:null,marginHeight:ve,marginWidth:ve,noResize:Ie,noHref:Ie,noShade:Ie,noWrap:Ie,object:null,profile:null,prompt:null,rev:null,rightMargin:ve,rules:null,scheme:null,scrolling:St,standby:null,summary:null,text:null,topMargin:ve,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ve,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ie,disableRemotePlayback:Ie,prefix:null,property:null,results:ve,security:null,unselectable:null},space:"html",transform:a1}),hS=ai({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:rn,accentHeight:ve,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ve,amplitude:ve,arabicForm:null,ascent:ve,attributeName:null,attributeType:null,azimuth:ve,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ve,by:null,calcMode:null,capHeight:ve,className:ot,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ve,diffuseConstant:ve,direction:null,display:null,dur:null,divisor:ve,dominantBaseline:null,download:Ie,dx:null,dy:null,edgeMode:null,editable:null,elevation:ve,enableBackground:null,end:null,event:null,exponent:ve,externalResourcesRequired:null,fill:null,fillOpacity:ve,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Jr,g2:Jr,glyphName:Jr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ve,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ve,horizOriginX:ve,horizOriginY:ve,id:null,ideographic:ve,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ve,k:ve,k1:ve,k2:ve,k3:ve,k4:ve,kernelMatrix:rn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ve,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ve,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ve,overlineThickness:ve,paintOrder:null,panose1:null,path:null,pathLength:ve,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ot,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ve,pointsAtY:ve,pointsAtZ:ve,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:rn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:rn,rev:rn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:rn,requiredFeatures:rn,requiredFonts:rn,requiredFormats:rn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ve,specularExponent:ve,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ve,strikethroughThickness:ve,string:null,stroke:null,strokeDashArray:rn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ve,strokeOpacity:ve,strokeWidth:null,style:null,surfaceScale:ve,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:rn,tabIndex:ve,tableValues:null,target:null,targetX:ve,targetY:ve,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:rn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ve,underlineThickness:ve,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ve,values:null,vAlphabetic:ve,vMathematical:ve,vectorEffect:null,vHanging:ve,vIdeographic:ve,version:null,vertAdvY:ve,vertOriginX:ve,vertOriginY:ve,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ve,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:n1}),r1=ai({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,r){return"xlink:"+r.slice(5).toLowerCase()}}),i1=ai({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:a1}),l1=ai({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,r){return"xml:"+r.slice(3).toLowerCase()}}),gS={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},bS=/[A-Z]/g,Kg=/-[a-z]/g,vS=/^data[-\w.:]+$/i;function yS(t,r){const i=bd(r);let o=r,s=Zt;if(i in t.normal)return t.property[t.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&vS.test(r)){if(r.charAt(4)==="-"){const u=r.slice(5).replace(Kg,wS);o="data"+u.charAt(0).toUpperCase()+u.slice(1)}else{const u=r.slice(4);if(!Kg.test(u)){let d=u.replace(bS,xS);d.charAt(0)!=="-"&&(d="-"+d),r="data"+d}}s=Id}return new s(o,r)}function xS(t){return"-"+t.toLowerCase()}function wS(t){return t.charAt(1).toUpperCase()}const kS=e1([t1,mS,r1,i1,l1],"html"),Hd=e1([t1,hS,r1,i1,l1],"svg");function SS(t){return t.join(" ").trim()}var Vr={},Pc,Jg;function _S(){if(Jg)return Pc;Jg=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,d=/^[;\s]*/,f=/^\s+|\s+$/g,m=`
`,h="/",v="*",g="",x="comment",b="declaration";function C(N,_){if(typeof N!="string")throw new TypeError("First argument must be a string");if(!N)return[];_=_||{};var z=1,O=1;function U(S){var H=S.match(r);H&&(z+=H.length);var F=S.lastIndexOf(m);O=~F?S.length-F:O+S.length}function R(){var S={line:z,column:O};return function(H){return H.position=new B(S),G(),H}}function B(S){this.start=S,this.end={line:z,column:O},this.source=_.source}B.prototype.content=N;function q(S){var H=new Error(_.source+":"+z+":"+O+": "+S);if(H.reason=S,H.filename=_.source,H.line=z,H.column=O,H.source=N,!_.silent)throw H}function ae(S){var H=S.exec(N);if(H){var F=H[0];return U(F),N=N.slice(F.length),H}}function G(){ae(i)}function te(S){var H;for(S=S||[];H=ue();)H!==!1&&S.push(H);return S}function ue(){var S=R();if(!(h!=N.charAt(0)||v!=N.charAt(1))){for(var H=2;g!=N.charAt(H)&&(v!=N.charAt(H)||h!=N.charAt(H+1));)++H;if(H+=2,g===N.charAt(H-1))return q("End of comment missing");var F=N.slice(2,H-2);return O+=2,U(F),N=N.slice(H),O+=2,S({type:x,comment:F})}}function j(){var S=R(),H=ae(o);if(H){if(ue(),!ae(s))return q("property missing ':'");var F=ae(u),Y=S({type:b,property:k(H[0].replace(t,g)),value:F?k(F[0].replace(t,g)):g});return ae(d),Y}}function J(){var S=[];te(S);for(var H;H=j();)H!==!1&&(S.push(H),te(S));return S}return G(),J()}function k(N){return N?N.replace(f,g):g}return Pc=C,Pc}var Wg;function CS(){if(Wg)return Vr;Wg=1;var t=Vr&&Vr.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Vr,"__esModule",{value:!0}),Vr.default=i;const r=t(_S());function i(o,s){let u=null;if(!o||typeof o!="string")return u;const d=(0,r.default)(o),f=typeof s=="function";return d.forEach(m=>{if(m.type!=="declaration")return;const{property:h,value:v}=m;f?s(h,v,m):v&&(u=u||{},u[h]=v)}),u}return Vr}var Ji={},eb;function AS(){if(eb)return Ji;eb=1,Object.defineProperty(Ji,"__esModule",{value:!0}),Ji.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,i=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,u=function(h){return!h||i.test(h)||t.test(h)},d=function(h,v){return v.toUpperCase()},f=function(h,v){return"".concat(v,"-")},m=function(h,v){return v===void 0&&(v={}),u(h)?h:(h=h.toLowerCase(),v.reactCompat?h=h.replace(s,f):h=h.replace(o,f),h.replace(r,d))};return Ji.camelCase=m,Ji}var Wi,tb;function ES(){if(tb)return Wi;tb=1;var t=Wi&&Wi.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},r=t(CS()),i=AS();function o(s,u){var d={};return!s||typeof s!="string"||(0,r.default)(s,function(f,m){f&&m&&(d[(0,i.camelCase)(f,u)]=m)}),d}return o.default=o,Wi=o,Wi}var NS=ES();const TS=bl(NS),o1=s1("end"),Fd=s1("start");function s1(t){return r;function r(i){const o=i&&i.position&&i.position[t]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function zS(t){const r=Fd(t),i=o1(t);if(r&&i)return{start:r,end:i}}function dl(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?nb(t.position):"start"in t||"end"in t?nb(t):"line"in t||"column"in t?xd(t):""}function xd(t){return ab(t&&t.line)+":"+ab(t&&t.column)}function nb(t){return xd(t&&t.start)+"-"+xd(t&&t.end)}function ab(t){return t&&typeof t=="number"?t:1}class Lt extends Error{constructor(r,i,o){super(),typeof i=="string"&&(o=i,i=void 0);let s="",u={},d=!1;if(i&&("line"in i&&"column"in i?u={place:i}:"start"in i&&"end"in i?u={place:i}:"type"in i?u={ancestors:[i],place:i.position}:u={...i}),typeof r=="string"?s=r:!u.cause&&r&&(d=!0,s=r.message,u.cause=r),!u.ruleId&&!u.source&&typeof o=="string"){const m=o.indexOf(":");m===-1?u.ruleId=o:(u.source=o.slice(0,m),u.ruleId=o.slice(m+1))}if(!u.place&&u.ancestors&&u.ancestors){const m=u.ancestors[u.ancestors.length-1];m&&(u.place=m.position)}const f=u.place&&"start"in u.place?u.place.start:u.place;this.ancestors=u.ancestors||void 0,this.cause=u.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=f?f.line:void 0,this.name=dl(u.place)||"1:1",this.place=u.place||void 0,this.reason=this.message,this.ruleId=u.ruleId||void 0,this.source=u.source||void 0,this.stack=d&&u.cause&&typeof u.cause.stack=="string"?u.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Lt.prototype.file="";Lt.prototype.name="";Lt.prototype.reason="";Lt.prototype.message="";Lt.prototype.stack="";Lt.prototype.column=void 0;Lt.prototype.line=void 0;Lt.prototype.ancestors=void 0;Lt.prototype.cause=void 0;Lt.prototype.fatal=void 0;Lt.prototype.place=void 0;Lt.prototype.ruleId=void 0;Lt.prototype.source=void 0;const qd={}.hasOwnProperty,OS=new Map,$S=/[A-Z]/g,jS=new Set(["table","tbody","thead","tfoot","tr"]),MS=new Set(["td","th"]),u1="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function DS(t,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=r.filePath||void 0;let o;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=qS(i,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=FS(i,r.jsx,r.jsxs)}const s={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:o,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?Hd:kS,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},u=c1(s,t,void 0);return u&&typeof u!="string"?u:s.create(t,s.Fragment,{children:u||void 0},void 0)}function c1(t,r,i){if(r.type==="element")return RS(t,r,i);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return LS(t,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return US(t,r,i);if(r.type==="mdxjsEsm")return BS(t,r);if(r.type==="root")return IS(t,r,i);if(r.type==="text")return HS(t,r)}function RS(t,r,i){const o=t.schema;let s=o;r.tagName.toLowerCase()==="svg"&&o.space==="html"&&(s=Hd,t.schema=s),t.ancestors.push(r);const u=f1(t,r.tagName,!1),d=PS(t,r);let f=Yd(t,r);return jS.has(r.tagName)&&(f=f.filter(function(m){return typeof m=="string"?!fS(m):!0})),d1(t,d,u,r),Pd(d,f),t.ancestors.pop(),t.schema=o,t.create(r,u,d,i)}function LS(t,r){if(r.data&&r.data.estree&&t.evaluater){const o=r.data.estree.body[0];return o.type,t.evaluater.evaluateExpression(o.expression)}gl(t,r.position)}function BS(t,r){if(r.data&&r.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(r.data.estree);gl(t,r.position)}function US(t,r,i){const o=t.schema;let s=o;r.name==="svg"&&o.space==="html"&&(s=Hd,t.schema=s),t.ancestors.push(r);const u=r.name===null?t.Fragment:f1(t,r.name,!0),d=YS(t,r),f=Yd(t,r);return d1(t,d,u,r),Pd(d,f),t.ancestors.pop(),t.schema=o,t.create(r,u,d,i)}function IS(t,r,i){const o={};return Pd(o,Yd(t,r)),t.create(r,t.Fragment,o,i)}function HS(t,r){return r.value}function d1(t,r,i,o){typeof i!="string"&&i!==t.Fragment&&t.passNode&&(r.node=o)}function Pd(t,r){if(r.length>0){const i=r.length>1?r:r[0];i&&(t.children=i)}}function FS(t,r,i){return o;function o(s,u,d,f){const h=Array.isArray(d.children)?i:r;return f?h(u,d,f):h(u,d)}}function qS(t,r){return i;function i(o,s,u,d){const f=Array.isArray(u.children),m=Fd(o);return r(s,u,d,f,{columnNumber:m?m.column-1:void 0,fileName:t,lineNumber:m?m.line:void 0},void 0)}}function PS(t,r){const i={};let o,s;for(s in r.properties)if(s!=="children"&&qd.call(r.properties,s)){const u=GS(t,s,r.properties[s]);if(u){const[d,f]=u;t.tableCellAlignToStyle&&d==="align"&&typeof f=="string"&&MS.has(r.tagName)?o=f:i[d]=f}}if(o){const u=i.style||(i.style={});u[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return i}function YS(t,r){const i={};for(const o of r.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&t.evaluater){const u=o.data.estree.body[0];u.type;const d=u.expression;d.type;const f=d.properties[0];f.type,Object.assign(i,t.evaluater.evaluateExpression(f.argument))}else gl(t,r.position);else{const s=o.name;let u;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&t.evaluater){const f=o.value.data.estree.body[0];f.type,u=t.evaluater.evaluateExpression(f.expression)}else gl(t,r.position);else u=o.value===null?!0:o.value;i[s]=u}return i}function Yd(t,r){const i=[];let o=-1;const s=t.passKeys?new Map:OS;for(;++o<r.children.length;){const u=r.children[o];let d;if(t.passKeys){const m=u.type==="element"?u.tagName:u.type==="mdxJsxFlowElement"||u.type==="mdxJsxTextElement"?u.name:void 0;if(m){const h=s.get(m)||0;d=m+"-"+h,s.set(m,h+1)}}const f=c1(t,u,d);f!==void 0&&i.push(f)}return i}function GS(t,r,i){const o=yS(t.schema,r);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=o.commaSeparated?oS(i):SS(i)),o.property==="style"){let s=typeof i=="object"?i:VS(t,String(i));return t.stylePropertyNameCase==="css"&&(s=XS(s)),["style",s]}return[t.elementAttributeNameCase==="react"&&o.space?gS[o.property]||o.property:o.attribute,i]}}function VS(t,r){try{return TS(r,{reactCompat:!0})}catch(i){if(t.ignoreInvalidStyle)return{};const o=i,s=new Lt("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=u1+"#cannot-parse-style-attribute",s}}function f1(t,r,i){let o;if(!i)o={type:"Literal",value:r};else if(r.includes(".")){const s=r.split(".");let u=-1,d;for(;++u<s.length;){const f=Xg(s[u])?{type:"Identifier",name:s[u]}:{type:"Literal",value:s[u]};d=d?{type:"MemberExpression",object:d,property:f,computed:!!(u&&f.type==="Literal"),optional:!1}:f}o=d}else o=Xg(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(o.type==="Literal"){const s=o.value;return qd.call(t.components,s)?t.components[s]:s}if(t.evaluater)return t.evaluater.evaluateExpression(o);gl(t)}function gl(t,r){const i=new Lt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=t.filePath||void 0,i.url=u1+"#cannot-handle-mdx-estrees-without-createevaluater",i}function XS(t){const r={};let i;for(i in t)qd.call(t,i)&&(r[ZS(i)]=t[i]);return r}function ZS(t){let r=t.replace($S,QS);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function QS(t){return"-"+t.toLowerCase()}const Yc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},KS={};function JS(t,r){const i=KS,o=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,s=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return p1(t,o,s)}function p1(t,r,i){if(WS(t)){if("value"in t)return t.type==="html"&&!i?"":t.value;if(r&&"alt"in t&&t.alt)return t.alt;if("children"in t)return rb(t.children,r,i)}return Array.isArray(t)?rb(t,r,i):""}function rb(t,r,i){const o=[];let s=-1;for(;++s<t.length;)o[s]=p1(t[s],r,i);return o.join("")}function WS(t){return!!(t&&typeof t=="object")}const ib=document.createElement("i");function Gd(t){const r="&"+t+";";ib.innerHTML=r;const i=ib.textContent;return i.charCodeAt(i.length-1)===59&&t!=="semi"||i===r?!1:i}function Ln(t,r,i,o){const s=t.length;let u=0,d;if(r<0?r=-r>s?0:s+r:r=r>s?s:r,i=i>0?i:0,o.length<1e4)d=Array.from(o),d.unshift(r,i),t.splice(...d);else for(i&&t.splice(r,i);u<o.length;)d=o.slice(u,u+1e4),d.unshift(r,0),t.splice(...d),u+=1e4,r+=1e4}function xn(t,r){return t.length>0?(Ln(t,t.length,0,r),t):r}const lb={}.hasOwnProperty;function e4(t){const r={};let i=-1;for(;++i<t.length;)t4(r,t[i]);return r}function t4(t,r){let i;for(i in r){const s=(lb.call(t,i)?t[i]:void 0)||(t[i]={}),u=r[i];let d;if(u)for(d in u){lb.call(s,d)||(s[d]=[]);const f=u[d];n4(s[d],Array.isArray(f)?f:f?[f]:[])}}}function n4(t,r){let i=-1;const o=[];for(;++i<r.length;)(r[i].add==="after"?t:o).push(r[i]);Ln(t,0,0,o)}function m1(t,r){const i=Number.parseInt(t,r);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}function Wr(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Mn=Ra(/[A-Za-z]/),on=Ra(/[\dA-Za-z]/),a4=Ra(/[#-'*+\--9=?A-Z^-~]/);function wd(t){return t!==null&&(t<32||t===127)}const kd=Ra(/\d/),r4=Ra(/[\dA-Fa-f]/),i4=Ra(/[!-/:-@[-`{-~]/);function De(t){return t!==null&&t<-2}function Xt(t){return t!==null&&(t<0||t===32)}function et(t){return t===-2||t===-1||t===32}const l4=Ra(new RegExp("\\p{P}|\\p{S}","u")),o4=Ra(/\s/);function Ra(t){return r;function r(i){return i!==null&&i>-1&&t.test(String.fromCharCode(i))}}function ri(t){const r=[];let i=-1,o=0,s=0;for(;++i<t.length;){const u=t.charCodeAt(i);let d="";if(u===37&&on(t.charCodeAt(i+1))&&on(t.charCodeAt(i+2)))s=2;else if(u<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u))||(d=String.fromCharCode(u));else if(u>55295&&u<57344){const f=t.charCodeAt(i+1);u<56320&&f>56319&&f<57344?(d=String.fromCharCode(u,f),s=1):d="�"}else d=String.fromCharCode(u);d&&(r.push(t.slice(o,i),encodeURIComponent(d)),o=i+s+1,d=""),s&&(i+=s,s=0)}return r.join("")+t.slice(o)}function st(t,r,i,o){const s=o?o-1:Number.POSITIVE_INFINITY;let u=0;return d;function d(m){return et(m)?(t.enter(i),f(m)):r(m)}function f(m){return et(m)&&u++<s?(t.consume(m),f):(t.exit(i),r(m))}}const s4={tokenize:u4};function u4(t){const r=t.attempt(this.parser.constructs.contentInitial,o,s);let i;return r;function o(f){if(f===null){t.consume(f);return}return t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),st(t,r,"linePrefix")}function s(f){return t.enter("paragraph"),u(f)}function u(f){const m=t.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=m),i=m,d(f)}function d(f){if(f===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(f);return}return De(f)?(t.consume(f),t.exit("chunkText"),u):(t.consume(f),d)}}const c4={tokenize:d4},ob={tokenize:f4};function d4(t){const r=this,i=[];let o=0,s,u,d;return f;function f(O){if(o<i.length){const U=i[o];return r.containerState=U[1],t.attempt(U[0].continuation,m,h)(O)}return h(O)}function m(O){if(o++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,s&&z();const U=r.events.length;let R=U,B;for(;R--;)if(r.events[R][0]==="exit"&&r.events[R][1].type==="chunkFlow"){B=r.events[R][1].end;break}_(o);let q=U;for(;q<r.events.length;)r.events[q][1].end={...B},q++;return Ln(r.events,R+1,0,r.events.slice(U)),r.events.length=q,h(O)}return f(O)}function h(O){if(o===i.length){if(!s)return x(O);if(s.currentConstruct&&s.currentConstruct.concrete)return C(O);r.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return r.containerState={},t.check(ob,v,g)(O)}function v(O){return s&&z(),_(o),x(O)}function g(O){return r.parser.lazy[r.now().line]=o!==i.length,d=r.now().offset,C(O)}function x(O){return r.containerState={},t.attempt(ob,b,C)(O)}function b(O){return o++,i.push([r.currentConstruct,r.containerState]),x(O)}function C(O){if(O===null){s&&z(),_(0),t.consume(O);return}return s=s||r.parser.flow(r.now()),t.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:u}),k(O)}function k(O){if(O===null){N(t.exit("chunkFlow"),!0),_(0),t.consume(O);return}return De(O)?(t.consume(O),N(t.exit("chunkFlow")),o=0,r.interrupt=void 0,f):(t.consume(O),k)}function N(O,U){const R=r.sliceStream(O);if(U&&R.push(null),O.previous=u,u&&(u.next=O),u=O,s.defineSkip(O.start),s.write(R),r.parser.lazy[O.start.line]){let B=s.events.length;for(;B--;)if(s.events[B][1].start.offset<d&&(!s.events[B][1].end||s.events[B][1].end.offset>d))return;const q=r.events.length;let ae=q,G,te;for(;ae--;)if(r.events[ae][0]==="exit"&&r.events[ae][1].type==="chunkFlow"){if(G){te=r.events[ae][1].end;break}G=!0}for(_(o),B=q;B<r.events.length;)r.events[B][1].end={...te},B++;Ln(r.events,ae+1,0,r.events.slice(q)),r.events.length=B}}function _(O){let U=i.length;for(;U-- >O;){const R=i[U];r.containerState=R[1],R[0].exit.call(r,t)}i.length=O}function z(){s.write([null]),u=void 0,s=void 0,r.containerState._closeFlow=void 0}}function f4(t,r,i){return st(t,t.attempt(this.parser.constructs.document,r,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function sb(t){if(t===null||Xt(t)||o4(t))return 1;if(l4(t))return 2}function Vd(t,r,i){const o=[];let s=-1;for(;++s<t.length;){const u=t[s].resolveAll;u&&!o.includes(u)&&(r=u(r,i),o.push(u))}return r}const Sd={name:"attention",resolveAll:p4,tokenize:m4};function p4(t,r){let i=-1,o,s,u,d,f,m,h,v;for(;++i<t.length;)if(t[i][0]==="enter"&&t[i][1].type==="attentionSequence"&&t[i][1]._close){for(o=i;o--;)if(t[o][0]==="exit"&&t[o][1].type==="attentionSequence"&&t[o][1]._open&&r.sliceSerialize(t[o][1]).charCodeAt(0)===r.sliceSerialize(t[i][1]).charCodeAt(0)){if((t[o][1]._close||t[i][1]._open)&&(t[i][1].end.offset-t[i][1].start.offset)%3&&!((t[o][1].end.offset-t[o][1].start.offset+t[i][1].end.offset-t[i][1].start.offset)%3))continue;m=t[o][1].end.offset-t[o][1].start.offset>1&&t[i][1].end.offset-t[i][1].start.offset>1?2:1;const g={...t[o][1].end},x={...t[i][1].start};ub(g,-m),ub(x,m),d={type:m>1?"strongSequence":"emphasisSequence",start:g,end:{...t[o][1].end}},f={type:m>1?"strongSequence":"emphasisSequence",start:{...t[i][1].start},end:x},u={type:m>1?"strongText":"emphasisText",start:{...t[o][1].end},end:{...t[i][1].start}},s={type:m>1?"strong":"emphasis",start:{...d.start},end:{...f.end}},t[o][1].end={...d.start},t[i][1].start={...f.end},h=[],t[o][1].end.offset-t[o][1].start.offset&&(h=xn(h,[["enter",t[o][1],r],["exit",t[o][1],r]])),h=xn(h,[["enter",s,r],["enter",d,r],["exit",d,r],["enter",u,r]]),h=xn(h,Vd(r.parser.constructs.insideSpan.null,t.slice(o+1,i),r)),h=xn(h,[["exit",u,r],["enter",f,r],["exit",f,r],["exit",s,r]]),t[i][1].end.offset-t[i][1].start.offset?(v=2,h=xn(h,[["enter",t[i][1],r],["exit",t[i][1],r]])):v=0,Ln(t,o-1,i-o+3,h),i=o+h.length-v-2;break}}for(i=-1;++i<t.length;)t[i][1].type==="attentionSequence"&&(t[i][1].type="data");return t}function m4(t,r){const i=this.parser.constructs.attentionMarkers.null,o=this.previous,s=sb(o);let u;return d;function d(m){return u=m,t.enter("attentionSequence"),f(m)}function f(m){if(m===u)return t.consume(m),f;const h=t.exit("attentionSequence"),v=sb(m),g=!v||v===2&&s||i.includes(m),x=!s||s===2&&v||i.includes(o);return h._open=!!(u===42?g:g&&(s||!x)),h._close=!!(u===42?x:x&&(v||!g)),r(m)}}function ub(t,r){t.column+=r,t.offset+=r,t._bufferIndex+=r}const h4={name:"autolink",tokenize:g4};function g4(t,r,i){let o=0;return s;function s(b){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),u}function u(b){return Mn(b)?(t.consume(b),d):b===64?i(b):h(b)}function d(b){return b===43||b===45||b===46||on(b)?(o=1,f(b)):h(b)}function f(b){return b===58?(t.consume(b),o=0,m):(b===43||b===45||b===46||on(b))&&o++<32?(t.consume(b),f):(o=0,h(b))}function m(b){return b===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.exit("autolink"),r):b===null||b===32||b===60||wd(b)?i(b):(t.consume(b),m)}function h(b){return b===64?(t.consume(b),v):a4(b)?(t.consume(b),h):i(b)}function v(b){return on(b)?g(b):i(b)}function g(b){return b===46?(t.consume(b),o=0,v):b===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.exit("autolink"),r):x(b)}function x(b){if((b===45||on(b))&&o++<63){const C=b===45?x:g;return t.consume(b),C}return i(b)}}const cs={partial:!0,tokenize:b4};function b4(t,r,i){return o;function o(u){return et(u)?st(t,s,"linePrefix")(u):s(u)}function s(u){return u===null||De(u)?r(u):i(u)}}const h1={continuation:{tokenize:y4},exit:x4,name:"blockQuote",tokenize:v4};function v4(t,r,i){const o=this;return s;function s(d){if(d===62){const f=o.containerState;return f.open||(t.enter("blockQuote",{_container:!0}),f.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(d),t.exit("blockQuoteMarker"),u}return i(d)}function u(d){return et(d)?(t.enter("blockQuotePrefixWhitespace"),t.consume(d),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),r):(t.exit("blockQuotePrefix"),r(d))}}function y4(t,r,i){const o=this;return s;function s(d){return et(d)?st(t,u,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):u(d)}function u(d){return t.attempt(h1,r,i)(d)}}function x4(t){t.exit("blockQuote")}const g1={name:"characterEscape",tokenize:w4};function w4(t,r,i){return o;function o(u){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(u),t.exit("escapeMarker"),s}function s(u){return i4(u)?(t.enter("characterEscapeValue"),t.consume(u),t.exit("characterEscapeValue"),t.exit("characterEscape"),r):i(u)}}const b1={name:"characterReference",tokenize:k4};function k4(t,r,i){const o=this;let s=0,u,d;return f;function f(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),m}function m(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),h):(t.enter("characterReferenceValue"),u=31,d=on,v(g))}function h(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),u=6,d=r4,v):(t.enter("characterReferenceValue"),u=7,d=kd,v(g))}function v(g){if(g===59&&s){const x=t.exit("characterReferenceValue");return d===on&&!Gd(o.sliceSerialize(x))?i(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),r)}return d(g)&&s++<u?(t.consume(g),v):i(g)}}const cb={partial:!0,tokenize:_4},db={concrete:!0,name:"codeFenced",tokenize:S4};function S4(t,r,i){const o=this,s={partial:!0,tokenize:R};let u=0,d=0,f;return m;function m(B){return h(B)}function h(B){const q=o.events[o.events.length-1];return u=q&&q[1].type==="linePrefix"?q[2].sliceSerialize(q[1],!0).length:0,f=B,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),v(B)}function v(B){return B===f?(d++,t.consume(B),v):d<3?i(B):(t.exit("codeFencedFenceSequence"),et(B)?st(t,g,"whitespace")(B):g(B))}function g(B){return B===null||De(B)?(t.exit("codeFencedFence"),o.interrupt?r(B):t.check(cb,k,U)(B)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),x(B))}function x(B){return B===null||De(B)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(B)):et(B)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),st(t,b,"whitespace")(B)):B===96&&B===f?i(B):(t.consume(B),x)}function b(B){return B===null||De(B)?g(B):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),C(B))}function C(B){return B===null||De(B)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(B)):B===96&&B===f?i(B):(t.consume(B),C)}function k(B){return t.attempt(s,U,N)(B)}function N(B){return t.enter("lineEnding"),t.consume(B),t.exit("lineEnding"),_}function _(B){return u>0&&et(B)?st(t,z,"linePrefix",u+1)(B):z(B)}function z(B){return B===null||De(B)?t.check(cb,k,U)(B):(t.enter("codeFlowValue"),O(B))}function O(B){return B===null||De(B)?(t.exit("codeFlowValue"),z(B)):(t.consume(B),O)}function U(B){return t.exit("codeFenced"),r(B)}function R(B,q,ae){let G=0;return te;function te(H){return B.enter("lineEnding"),B.consume(H),B.exit("lineEnding"),ue}function ue(H){return B.enter("codeFencedFence"),et(H)?st(B,j,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):j(H)}function j(H){return H===f?(B.enter("codeFencedFenceSequence"),J(H)):ae(H)}function J(H){return H===f?(G++,B.consume(H),J):G>=d?(B.exit("codeFencedFenceSequence"),et(H)?st(B,S,"whitespace")(H):S(H)):ae(H)}function S(H){return H===null||De(H)?(B.exit("codeFencedFence"),q(H)):ae(H)}}}function _4(t,r,i){const o=this;return s;function s(d){return d===null?i(d):(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),u)}function u(d){return o.parser.lazy[o.now().line]?i(d):r(d)}}const Gc={name:"codeIndented",tokenize:A4},C4={partial:!0,tokenize:E4};function A4(t,r,i){const o=this;return s;function s(h){return t.enter("codeIndented"),st(t,u,"linePrefix",5)(h)}function u(h){const v=o.events[o.events.length-1];return v&&v[1].type==="linePrefix"&&v[2].sliceSerialize(v[1],!0).length>=4?d(h):i(h)}function d(h){return h===null?m(h):De(h)?t.attempt(C4,d,m)(h):(t.enter("codeFlowValue"),f(h))}function f(h){return h===null||De(h)?(t.exit("codeFlowValue"),d(h)):(t.consume(h),f)}function m(h){return t.exit("codeIndented"),r(h)}}function E4(t,r,i){const o=this;return s;function s(d){return o.parser.lazy[o.now().line]?i(d):De(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),s):st(t,u,"linePrefix",5)(d)}function u(d){const f=o.events[o.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?r(d):De(d)?s(d):i(d)}}const N4={name:"codeText",previous:z4,resolve:T4,tokenize:O4};function T4(t){let r=t.length-4,i=3,o,s;if((t[i][1].type==="lineEnding"||t[i][1].type==="space")&&(t[r][1].type==="lineEnding"||t[r][1].type==="space")){for(o=i;++o<r;)if(t[o][1].type==="codeTextData"){t[i][1].type="codeTextPadding",t[r][1].type="codeTextPadding",i+=2,r-=2;break}}for(o=i-1,r++;++o<=r;)s===void 0?o!==r&&t[o][1].type!=="lineEnding"&&(s=o):(o===r||t[o][1].type==="lineEnding")&&(t[s][1].type="codeTextData",o!==s+2&&(t[s][1].end=t[o-1][1].end,t.splice(s+2,o-s-2),r-=o-s-2,o=s+2),s=void 0);return t}function z4(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function O4(t,r,i){let o=0,s,u;return d;function d(g){return t.enter("codeText"),t.enter("codeTextSequence"),f(g)}function f(g){return g===96?(t.consume(g),o++,f):(t.exit("codeTextSequence"),m(g))}function m(g){return g===null?i(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),m):g===96?(u=t.enter("codeTextSequence"),s=0,v(g)):De(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),m):(t.enter("codeTextData"),h(g))}function h(g){return g===null||g===32||g===96||De(g)?(t.exit("codeTextData"),m(g)):(t.consume(g),h)}function v(g){return g===96?(t.consume(g),s++,v):s===o?(t.exit("codeTextSequence"),t.exit("codeText"),r(g)):(u.type="codeTextData",h(g))}}class $4{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,i){const o=i??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(r,o):r>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(r,i,o){const s=i||0;this.setCursor(Math.trunc(r));const u=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return o&&el(this.left,o),u.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),el(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),el(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const i=this.left.splice(r,Number.POSITIVE_INFINITY);el(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);el(this.left,i.reverse())}}}function el(t,r){let i=0;if(r.length<1e4)t.push(...r);else for(;i<r.length;)t.push(...r.slice(i,i+1e4)),i+=1e4}function v1(t){const r={};let i=-1,o,s,u,d,f,m,h;const v=new $4(t);for(;++i<v.length;){for(;i in r;)i=r[i];if(o=v.get(i),i&&o[1].type==="chunkFlow"&&v.get(i-1)[1].type==="listItemPrefix"&&(m=o[1]._tokenizer.events,u=0,u<m.length&&m[u][1].type==="lineEndingBlank"&&(u+=2),u<m.length&&m[u][1].type==="content"))for(;++u<m.length&&m[u][1].type!=="content";)m[u][1].type==="chunkText"&&(m[u][1]._isInFirstContentOfListItem=!0,u++);if(o[0]==="enter")o[1].contentType&&(Object.assign(r,j4(v,i)),i=r[i],h=!0);else if(o[1]._container){for(u=i,s=void 0;u--;)if(d=v.get(u),d[1].type==="lineEnding"||d[1].type==="lineEndingBlank")d[0]==="enter"&&(s&&(v.get(s)[1].type="lineEndingBlank"),d[1].type="lineEnding",s=u);else if(!(d[1].type==="linePrefix"||d[1].type==="listItemIndent"))break;s&&(o[1].end={...v.get(s)[1].start},f=v.slice(s,i),f.unshift(o),v.splice(s,i-s+1,f))}}return Ln(t,0,Number.POSITIVE_INFINITY,v.slice(0)),!h}function j4(t,r){const i=t.get(r)[1],o=t.get(r)[2];let s=r-1;const u=[];let d=i._tokenizer;d||(d=o.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(d._contentTypeTextTrailing=!0));const f=d.events,m=[],h={};let v,g,x=-1,b=i,C=0,k=0;const N=[k];for(;b;){for(;t.get(++s)[1]!==b;);u.push(s),b._tokenizer||(v=o.sliceStream(b),b.next||v.push(null),g&&d.defineSkip(b.start),b._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=!0),d.write(v),b._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=void 0)),g=b,b=b.next}for(b=i;++x<f.length;)f[x][0]==="exit"&&f[x-1][0]==="enter"&&f[x][1].type===f[x-1][1].type&&f[x][1].start.line!==f[x][1].end.line&&(k=x+1,N.push(k),b._tokenizer=void 0,b.previous=void 0,b=b.next);for(d.events=[],b?(b._tokenizer=void 0,b.previous=void 0):N.pop(),x=N.length;x--;){const _=f.slice(N[x],N[x+1]),z=u.pop();m.push([z,z+_.length-1]),t.splice(z,2,_)}for(m.reverse(),x=-1;++x<m.length;)h[C+m[x][0]]=C+m[x][1],C+=m[x][1]-m[x][0]-1;return h}const M4={resolve:R4,tokenize:L4},D4={partial:!0,tokenize:B4};function R4(t){return v1(t),t}function L4(t,r){let i;return o;function o(f){return t.enter("content"),i=t.enter("chunkContent",{contentType:"content"}),s(f)}function s(f){return f===null?u(f):De(f)?t.check(D4,d,u)(f):(t.consume(f),s)}function u(f){return t.exit("chunkContent"),t.exit("content"),r(f)}function d(f){return t.consume(f),t.exit("chunkContent"),i.next=t.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,s}}function B4(t,r,i){const o=this;return s;function s(d){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),st(t,u,"linePrefix")}function u(d){if(d===null||De(d))return i(d);const f=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?r(d):t.interrupt(o.parser.constructs.flow,i,r)(d)}}function y1(t,r,i,o,s,u,d,f,m){const h=m||Number.POSITIVE_INFINITY;let v=0;return g;function g(_){return _===60?(t.enter(o),t.enter(s),t.enter(u),t.consume(_),t.exit(u),x):_===null||_===32||_===41||wd(_)?i(_):(t.enter(o),t.enter(d),t.enter(f),t.enter("chunkString",{contentType:"string"}),k(_))}function x(_){return _===62?(t.enter(u),t.consume(_),t.exit(u),t.exit(s),t.exit(o),r):(t.enter(f),t.enter("chunkString",{contentType:"string"}),b(_))}function b(_){return _===62?(t.exit("chunkString"),t.exit(f),x(_)):_===null||_===60||De(_)?i(_):(t.consume(_),_===92?C:b)}function C(_){return _===60||_===62||_===92?(t.consume(_),b):b(_)}function k(_){return!v&&(_===null||_===41||Xt(_))?(t.exit("chunkString"),t.exit(f),t.exit(d),t.exit(o),r(_)):v<h&&_===40?(t.consume(_),v++,k):_===41?(t.consume(_),v--,k):_===null||_===32||_===40||wd(_)?i(_):(t.consume(_),_===92?N:k)}function N(_){return _===40||_===41||_===92?(t.consume(_),k):k(_)}}function x1(t,r,i,o,s,u){const d=this;let f=0,m;return h;function h(b){return t.enter(o),t.enter(s),t.consume(b),t.exit(s),t.enter(u),v}function v(b){return f>999||b===null||b===91||b===93&&!m||b===94&&!f&&"_hiddenFootnoteSupport"in d.parser.constructs?i(b):b===93?(t.exit(u),t.enter(s),t.consume(b),t.exit(s),t.exit(o),r):De(b)?(t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),v):(t.enter("chunkString",{contentType:"string"}),g(b))}function g(b){return b===null||b===91||b===93||De(b)||f++>999?(t.exit("chunkString"),v(b)):(t.consume(b),m||(m=!et(b)),b===92?x:g)}function x(b){return b===91||b===92||b===93?(t.consume(b),f++,g):g(b)}}function w1(t,r,i,o,s,u){let d;return f;function f(x){return x===34||x===39||x===40?(t.enter(o),t.enter(s),t.consume(x),t.exit(s),d=x===40?41:x,m):i(x)}function m(x){return x===d?(t.enter(s),t.consume(x),t.exit(s),t.exit(o),r):(t.enter(u),h(x))}function h(x){return x===d?(t.exit(u),m(d)):x===null?i(x):De(x)?(t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),st(t,h,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),v(x))}function v(x){return x===d||x===null||De(x)?(t.exit("chunkString"),h(x)):(t.consume(x),x===92?g:v)}function g(x){return x===d||x===92?(t.consume(x),v):v(x)}}function fl(t,r){let i;return o;function o(s){return De(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),i=!0,o):et(s)?st(t,o,i?"linePrefix":"lineSuffix")(s):r(s)}}const U4={name:"definition",tokenize:H4},I4={partial:!0,tokenize:F4};function H4(t,r,i){const o=this;let s;return u;function u(b){return t.enter("definition"),d(b)}function d(b){return x1.call(o,t,f,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(b)}function f(b){return s=Wr(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),b===58?(t.enter("definitionMarker"),t.consume(b),t.exit("definitionMarker"),m):i(b)}function m(b){return Xt(b)?fl(t,h)(b):h(b)}function h(b){return y1(t,v,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(b)}function v(b){return t.attempt(I4,g,g)(b)}function g(b){return et(b)?st(t,x,"whitespace")(b):x(b)}function x(b){return b===null||De(b)?(t.exit("definition"),o.parser.defined.push(s),r(b)):i(b)}}function F4(t,r,i){return o;function o(f){return Xt(f)?fl(t,s)(f):i(f)}function s(f){return w1(t,u,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function u(f){return et(f)?st(t,d,"whitespace")(f):d(f)}function d(f){return f===null||De(f)?r(f):i(f)}}const q4={name:"hardBreakEscape",tokenize:P4};function P4(t,r,i){return o;function o(u){return t.enter("hardBreakEscape"),t.consume(u),s}function s(u){return De(u)?(t.exit("hardBreakEscape"),r(u)):i(u)}}const Y4={name:"headingAtx",resolve:G4,tokenize:V4};function G4(t,r){let i=t.length-2,o=3,s,u;return t[o][1].type==="whitespace"&&(o+=2),i-2>o&&t[i][1].type==="whitespace"&&(i-=2),t[i][1].type==="atxHeadingSequence"&&(o===i-1||i-4>o&&t[i-2][1].type==="whitespace")&&(i-=o+1===i?2:4),i>o&&(s={type:"atxHeadingText",start:t[o][1].start,end:t[i][1].end},u={type:"chunkText",start:t[o][1].start,end:t[i][1].end,contentType:"text"},Ln(t,o,i-o+1,[["enter",s,r],["enter",u,r],["exit",u,r],["exit",s,r]])),t}function V4(t,r,i){let o=0;return s;function s(v){return t.enter("atxHeading"),u(v)}function u(v){return t.enter("atxHeadingSequence"),d(v)}function d(v){return v===35&&o++<6?(t.consume(v),d):v===null||Xt(v)?(t.exit("atxHeadingSequence"),f(v)):i(v)}function f(v){return v===35?(t.enter("atxHeadingSequence"),m(v)):v===null||De(v)?(t.exit("atxHeading"),r(v)):et(v)?st(t,f,"whitespace")(v):(t.enter("atxHeadingText"),h(v))}function m(v){return v===35?(t.consume(v),m):(t.exit("atxHeadingSequence"),f(v))}function h(v){return v===null||v===35||Xt(v)?(t.exit("atxHeadingText"),f(v)):(t.consume(v),h)}}const X4=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],fb=["pre","script","style","textarea"],Z4={concrete:!0,name:"htmlFlow",resolveTo:J4,tokenize:W4},Q4={partial:!0,tokenize:t8},K4={partial:!0,tokenize:e8};function J4(t){let r=t.length;for(;r--&&!(t[r][0]==="enter"&&t[r][1].type==="htmlFlow"););return r>1&&t[r-2][1].type==="linePrefix"&&(t[r][1].start=t[r-2][1].start,t[r+1][1].start=t[r-2][1].start,t.splice(r-2,2)),t}function W4(t,r,i){const o=this;let s,u,d,f,m;return h;function h(T){return v(T)}function v(T){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(T),g}function g(T){return T===33?(t.consume(T),x):T===47?(t.consume(T),u=!0,k):T===63?(t.consume(T),s=3,o.interrupt?r:$):Mn(T)?(t.consume(T),d=String.fromCharCode(T),N):i(T)}function x(T){return T===45?(t.consume(T),s=2,b):T===91?(t.consume(T),s=5,f=0,C):Mn(T)?(t.consume(T),s=4,o.interrupt?r:$):i(T)}function b(T){return T===45?(t.consume(T),o.interrupt?r:$):i(T)}function C(T){const ne="CDATA[";return T===ne.charCodeAt(f++)?(t.consume(T),f===ne.length?o.interrupt?r:j:C):i(T)}function k(T){return Mn(T)?(t.consume(T),d=String.fromCharCode(T),N):i(T)}function N(T){if(T===null||T===47||T===62||Xt(T)){const ne=T===47,oe=d.toLowerCase();return!ne&&!u&&fb.includes(oe)?(s=1,o.interrupt?r(T):j(T)):X4.includes(d.toLowerCase())?(s=6,ne?(t.consume(T),_):o.interrupt?r(T):j(T)):(s=7,o.interrupt&&!o.parser.lazy[o.now().line]?i(T):u?z(T):O(T))}return T===45||on(T)?(t.consume(T),d+=String.fromCharCode(T),N):i(T)}function _(T){return T===62?(t.consume(T),o.interrupt?r:j):i(T)}function z(T){return et(T)?(t.consume(T),z):te(T)}function O(T){return T===47?(t.consume(T),te):T===58||T===95||Mn(T)?(t.consume(T),U):et(T)?(t.consume(T),O):te(T)}function U(T){return T===45||T===46||T===58||T===95||on(T)?(t.consume(T),U):R(T)}function R(T){return T===61?(t.consume(T),B):et(T)?(t.consume(T),R):O(T)}function B(T){return T===null||T===60||T===61||T===62||T===96?i(T):T===34||T===39?(t.consume(T),m=T,q):et(T)?(t.consume(T),B):ae(T)}function q(T){return T===m?(t.consume(T),m=null,G):T===null||De(T)?i(T):(t.consume(T),q)}function ae(T){return T===null||T===34||T===39||T===47||T===60||T===61||T===62||T===96||Xt(T)?R(T):(t.consume(T),ae)}function G(T){return T===47||T===62||et(T)?O(T):i(T)}function te(T){return T===62?(t.consume(T),ue):i(T)}function ue(T){return T===null||De(T)?j(T):et(T)?(t.consume(T),ue):i(T)}function j(T){return T===45&&s===2?(t.consume(T),F):T===60&&s===1?(t.consume(T),Y):T===62&&s===4?(t.consume(T),A):T===63&&s===3?(t.consume(T),$):T===93&&s===5?(t.consume(T),le):De(T)&&(s===6||s===7)?(t.exit("htmlFlowData"),t.check(Q4,M,J)(T)):T===null||De(T)?(t.exit("htmlFlowData"),J(T)):(t.consume(T),j)}function J(T){return t.check(K4,S,M)(T)}function S(T){return t.enter("lineEnding"),t.consume(T),t.exit("lineEnding"),H}function H(T){return T===null||De(T)?J(T):(t.enter("htmlFlowData"),j(T))}function F(T){return T===45?(t.consume(T),$):j(T)}function Y(T){return T===47?(t.consume(T),d="",be):j(T)}function be(T){if(T===62){const ne=d.toLowerCase();return fb.includes(ne)?(t.consume(T),A):j(T)}return Mn(T)&&d.length<8?(t.consume(T),d+=String.fromCharCode(T),be):j(T)}function le(T){return T===93?(t.consume(T),$):j(T)}function $(T){return T===62?(t.consume(T),A):T===45&&s===2?(t.consume(T),$):j(T)}function A(T){return T===null||De(T)?(t.exit("htmlFlowData"),M(T)):(t.consume(T),A)}function M(T){return t.exit("htmlFlow"),r(T)}}function e8(t,r,i){const o=this;return s;function s(d){return De(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),u):i(d)}function u(d){return o.parser.lazy[o.now().line]?i(d):r(d)}}function t8(t,r,i){return o;function o(s){return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),t.attempt(cs,r,i)}}const n8={name:"htmlText",tokenize:a8};function a8(t,r,i){const o=this;let s,u,d;return f;function f($){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume($),m}function m($){return $===33?(t.consume($),h):$===47?(t.consume($),R):$===63?(t.consume($),O):Mn($)?(t.consume($),ae):i($)}function h($){return $===45?(t.consume($),v):$===91?(t.consume($),u=0,C):Mn($)?(t.consume($),z):i($)}function v($){return $===45?(t.consume($),b):i($)}function g($){return $===null?i($):$===45?(t.consume($),x):De($)?(d=g,Y($)):(t.consume($),g)}function x($){return $===45?(t.consume($),b):g($)}function b($){return $===62?F($):$===45?x($):g($)}function C($){const A="CDATA[";return $===A.charCodeAt(u++)?(t.consume($),u===A.length?k:C):i($)}function k($){return $===null?i($):$===93?(t.consume($),N):De($)?(d=k,Y($)):(t.consume($),k)}function N($){return $===93?(t.consume($),_):k($)}function _($){return $===62?F($):$===93?(t.consume($),_):k($)}function z($){return $===null||$===62?F($):De($)?(d=z,Y($)):(t.consume($),z)}function O($){return $===null?i($):$===63?(t.consume($),U):De($)?(d=O,Y($)):(t.consume($),O)}function U($){return $===62?F($):O($)}function R($){return Mn($)?(t.consume($),B):i($)}function B($){return $===45||on($)?(t.consume($),B):q($)}function q($){return De($)?(d=q,Y($)):et($)?(t.consume($),q):F($)}function ae($){return $===45||on($)?(t.consume($),ae):$===47||$===62||Xt($)?G($):i($)}function G($){return $===47?(t.consume($),F):$===58||$===95||Mn($)?(t.consume($),te):De($)?(d=G,Y($)):et($)?(t.consume($),G):F($)}function te($){return $===45||$===46||$===58||$===95||on($)?(t.consume($),te):ue($)}function ue($){return $===61?(t.consume($),j):De($)?(d=ue,Y($)):et($)?(t.consume($),ue):G($)}function j($){return $===null||$===60||$===61||$===62||$===96?i($):$===34||$===39?(t.consume($),s=$,J):De($)?(d=j,Y($)):et($)?(t.consume($),j):(t.consume($),S)}function J($){return $===s?(t.consume($),s=void 0,H):$===null?i($):De($)?(d=J,Y($)):(t.consume($),J)}function S($){return $===null||$===34||$===39||$===60||$===61||$===96?i($):$===47||$===62||Xt($)?G($):(t.consume($),S)}function H($){return $===47||$===62||Xt($)?G($):i($)}function F($){return $===62?(t.consume($),t.exit("htmlTextData"),t.exit("htmlText"),r):i($)}function Y($){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume($),t.exit("lineEnding"),be}function be($){return et($)?st(t,le,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)($):le($)}function le($){return t.enter("htmlTextData"),d($)}}const Xd={name:"labelEnd",resolveAll:o8,resolveTo:s8,tokenize:u8},r8={tokenize:c8},i8={tokenize:d8},l8={tokenize:f8};function o8(t){let r=-1;const i=[];for(;++r<t.length;){const o=t[r][1];if(i.push(t[r]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const s=o.type==="labelImage"?4:2;o.type="data",r+=s}}return t.length!==i.length&&Ln(t,0,t.length,i),t}function s8(t,r){let i=t.length,o=0,s,u,d,f;for(;i--;)if(s=t[i][1],u){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;t[i][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(d){if(t[i][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(u=i,s.type!=="labelLink")){o=2;break}}else s.type==="labelEnd"&&(d=i);const m={type:t[u][1].type==="labelLink"?"link":"image",start:{...t[u][1].start},end:{...t[t.length-1][1].end}},h={type:"label",start:{...t[u][1].start},end:{...t[d][1].end}},v={type:"labelText",start:{...t[u+o+2][1].end},end:{...t[d-2][1].start}};return f=[["enter",m,r],["enter",h,r]],f=xn(f,t.slice(u+1,u+o+3)),f=xn(f,[["enter",v,r]]),f=xn(f,Vd(r.parser.constructs.insideSpan.null,t.slice(u+o+4,d-3),r)),f=xn(f,[["exit",v,r],t[d-2],t[d-1],["exit",h,r]]),f=xn(f,t.slice(d+1)),f=xn(f,[["exit",m,r]]),Ln(t,u,t.length,f),t}function u8(t,r,i){const o=this;let s=o.events.length,u,d;for(;s--;)if((o.events[s][1].type==="labelImage"||o.events[s][1].type==="labelLink")&&!o.events[s][1]._balanced){u=o.events[s][1];break}return f;function f(x){return u?u._inactive?g(x):(d=o.parser.defined.includes(Wr(o.sliceSerialize({start:u.end,end:o.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(x),t.exit("labelMarker"),t.exit("labelEnd"),m):i(x)}function m(x){return x===40?t.attempt(r8,v,d?v:g)(x):x===91?t.attempt(i8,v,d?h:g)(x):d?v(x):g(x)}function h(x){return t.attempt(l8,v,g)(x)}function v(x){return r(x)}function g(x){return u._balanced=!0,i(x)}}function c8(t,r,i){return o;function o(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),s}function s(g){return Xt(g)?fl(t,u)(g):u(g)}function u(g){return g===41?v(g):y1(t,d,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function d(g){return Xt(g)?fl(t,m)(g):v(g)}function f(g){return i(g)}function m(g){return g===34||g===39||g===40?w1(t,h,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):v(g)}function h(g){return Xt(g)?fl(t,v)(g):v(g)}function v(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),r):i(g)}}function d8(t,r,i){const o=this;return s;function s(f){return x1.call(o,t,u,d,"reference","referenceMarker","referenceString")(f)}function u(f){return o.parser.defined.includes(Wr(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?r(f):i(f)}function d(f){return i(f)}}function f8(t,r,i){return o;function o(u){return t.enter("reference"),t.enter("referenceMarker"),t.consume(u),t.exit("referenceMarker"),s}function s(u){return u===93?(t.enter("referenceMarker"),t.consume(u),t.exit("referenceMarker"),t.exit("reference"),r):i(u)}}const p8={name:"labelStartImage",resolveAll:Xd.resolveAll,tokenize:m8};function m8(t,r,i){const o=this;return s;function s(f){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(f),t.exit("labelImageMarker"),u}function u(f){return f===91?(t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelImage"),d):i(f)}function d(f){return f===94&&"_hiddenFootnoteSupport"in o.parser.constructs?i(f):r(f)}}const h8={name:"labelStartLink",resolveAll:Xd.resolveAll,tokenize:g8};function g8(t,r,i){const o=this;return s;function s(d){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(d),t.exit("labelMarker"),t.exit("labelLink"),u}function u(d){return d===94&&"_hiddenFootnoteSupport"in o.parser.constructs?i(d):r(d)}}const Vc={name:"lineEnding",tokenize:b8};function b8(t,r){return i;function i(o){return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),st(t,r,"linePrefix")}}const Ko={name:"thematicBreak",tokenize:v8};function v8(t,r,i){let o=0,s;return u;function u(h){return t.enter("thematicBreak"),d(h)}function d(h){return s=h,f(h)}function f(h){return h===s?(t.enter("thematicBreakSequence"),m(h)):o>=3&&(h===null||De(h))?(t.exit("thematicBreak"),r(h)):i(h)}function m(h){return h===s?(t.consume(h),o++,m):(t.exit("thematicBreakSequence"),et(h)?st(t,f,"whitespace")(h):f(h))}}const Vt={continuation:{tokenize:k8},exit:_8,name:"list",tokenize:w8},y8={partial:!0,tokenize:C8},x8={partial:!0,tokenize:S8};function w8(t,r,i){const o=this,s=o.events[o.events.length-1];let u=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,d=0;return f;function f(b){const C=o.containerState.type||(b===42||b===43||b===45?"listUnordered":"listOrdered");if(C==="listUnordered"?!o.containerState.marker||b===o.containerState.marker:kd(b)){if(o.containerState.type||(o.containerState.type=C,t.enter(C,{_container:!0})),C==="listUnordered")return t.enter("listItemPrefix"),b===42||b===45?t.check(Ko,i,h)(b):h(b);if(!o.interrupt||b===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),m(b)}return i(b)}function m(b){return kd(b)&&++d<10?(t.consume(b),m):(!o.interrupt||d<2)&&(o.containerState.marker?b===o.containerState.marker:b===41||b===46)?(t.exit("listItemValue"),h(b)):i(b)}function h(b){return t.enter("listItemMarker"),t.consume(b),t.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||b,t.check(cs,o.interrupt?i:v,t.attempt(y8,x,g))}function v(b){return o.containerState.initialBlankLine=!0,u++,x(b)}function g(b){return et(b)?(t.enter("listItemPrefixWhitespace"),t.consume(b),t.exit("listItemPrefixWhitespace"),x):i(b)}function x(b){return o.containerState.size=u+o.sliceSerialize(t.exit("listItemPrefix"),!0).length,r(b)}}function k8(t,r,i){const o=this;return o.containerState._closeFlow=void 0,t.check(cs,s,u);function s(f){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,st(t,r,"listItemIndent",o.containerState.size+1)(f)}function u(f){return o.containerState.furtherBlankLines||!et(f)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,d(f)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,t.attempt(x8,r,d)(f))}function d(f){return o.containerState._closeFlow=!0,o.interrupt=void 0,st(t,t.attempt(Vt,r,i),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function S8(t,r,i){const o=this;return st(t,s,"listItemIndent",o.containerState.size+1);function s(u){const d=o.events[o.events.length-1];return d&&d[1].type==="listItemIndent"&&d[2].sliceSerialize(d[1],!0).length===o.containerState.size?r(u):i(u)}}function _8(t){t.exit(this.containerState.type)}function C8(t,r,i){const o=this;return st(t,s,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(u){const d=o.events[o.events.length-1];return!et(u)&&d&&d[1].type==="listItemPrefixWhitespace"?r(u):i(u)}}const pb={name:"setextUnderline",resolveTo:A8,tokenize:E8};function A8(t,r){let i=t.length,o,s,u;for(;i--;)if(t[i][0]==="enter"){if(t[i][1].type==="content"){o=i;break}t[i][1].type==="paragraph"&&(s=i)}else t[i][1].type==="content"&&t.splice(i,1),!u&&t[i][1].type==="definition"&&(u=i);const d={type:"setextHeading",start:{...t[o][1].start},end:{...t[t.length-1][1].end}};return t[s][1].type="setextHeadingText",u?(t.splice(s,0,["enter",d,r]),t.splice(u+1,0,["exit",t[o][1],r]),t[o][1].end={...t[u][1].end}):t[o][1]=d,t.push(["exit",d,r]),t}function E8(t,r,i){const o=this;let s;return u;function u(h){let v=o.events.length,g;for(;v--;)if(o.events[v][1].type!=="lineEnding"&&o.events[v][1].type!=="linePrefix"&&o.events[v][1].type!=="content"){g=o.events[v][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||g)?(t.enter("setextHeadingLine"),s=h,d(h)):i(h)}function d(h){return t.enter("setextHeadingLineSequence"),f(h)}function f(h){return h===s?(t.consume(h),f):(t.exit("setextHeadingLineSequence"),et(h)?st(t,m,"lineSuffix")(h):m(h))}function m(h){return h===null||De(h)?(t.exit("setextHeadingLine"),r(h)):i(h)}}const N8={tokenize:T8};function T8(t){const r=this,i=t.attempt(cs,o,t.attempt(this.parser.constructs.flowInitial,s,st(t,t.attempt(this.parser.constructs.flow,s,t.attempt(M4,s)),"linePrefix")));return i;function o(u){if(u===null){t.consume(u);return}return t.enter("lineEndingBlank"),t.consume(u),t.exit("lineEndingBlank"),r.currentConstruct=void 0,i}function s(u){if(u===null){t.consume(u);return}return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),r.currentConstruct=void 0,i}}const z8={resolveAll:S1()},O8=k1("string"),$8=k1("text");function k1(t){return{resolveAll:S1(t==="text"?j8:void 0),tokenize:r};function r(i){const o=this,s=this.parser.constructs[t],u=i.attempt(s,d,f);return d;function d(v){return h(v)?u(v):f(v)}function f(v){if(v===null){i.consume(v);return}return i.enter("data"),i.consume(v),m}function m(v){return h(v)?(i.exit("data"),u(v)):(i.consume(v),m)}function h(v){if(v===null)return!0;const g=s[v];let x=-1;if(g)for(;++x<g.length;){const b=g[x];if(!b.previous||b.previous.call(o,o.previous))return!0}return!1}}}function S1(t){return r;function r(i,o){let s=-1,u;for(;++s<=i.length;)u===void 0?i[s]&&i[s][1].type==="data"&&(u=s,s++):(!i[s]||i[s][1].type!=="data")&&(s!==u+2&&(i[u][1].end=i[s-1][1].end,i.splice(u+2,s-u-2),s=u+2),u=void 0);return t?t(i,o):i}}function j8(t,r){let i=0;for(;++i<=t.length;)if((i===t.length||t[i][1].type==="lineEnding")&&t[i-1][1].type==="data"){const o=t[i-1][1],s=r.sliceStream(o);let u=s.length,d=-1,f=0,m;for(;u--;){const h=s[u];if(typeof h=="string"){for(d=h.length;h.charCodeAt(d-1)===32;)f++,d--;if(d)break;d=-1}else if(h===-2)m=!0,f++;else if(h!==-1){u++;break}}if(r._contentTypeTextTrailing&&i===t.length&&(f=0),f){const h={type:i===t.length||m||f<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:u?d:o.start._bufferIndex+d,_index:o.start._index+u,line:o.end.line,column:o.end.column-f,offset:o.end.offset-f},end:{...o.end}};o.end={...h.start},o.start.offset===o.end.offset?Object.assign(o,h):(t.splice(i,0,["enter",h,r],["exit",h,r]),i+=2)}i++}return t}const M8={42:Vt,43:Vt,45:Vt,48:Vt,49:Vt,50:Vt,51:Vt,52:Vt,53:Vt,54:Vt,55:Vt,56:Vt,57:Vt,62:h1},D8={91:U4},R8={[-2]:Gc,[-1]:Gc,32:Gc},L8={35:Y4,42:Ko,45:[pb,Ko],60:Z4,61:pb,95:Ko,96:db,126:db},B8={38:b1,92:g1},U8={[-5]:Vc,[-4]:Vc,[-3]:Vc,33:p8,38:b1,42:Sd,60:[h4,n8],91:h8,92:[q4,g1],93:Xd,95:Sd,96:N4},I8={null:[Sd,z8]},H8={null:[42,95]},F8={null:[]},q8=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:H8,contentInitial:D8,disable:F8,document:M8,flow:L8,flowInitial:R8,insideSpan:I8,string:B8,text:U8},Symbol.toStringTag,{value:"Module"}));function P8(t,r,i){let o={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const s={},u=[];let d=[],f=[];const m={attempt:q(R),check:q(B),consume:z,enter:O,exit:U,interrupt:q(B,{interrupt:!0})},h={code:null,containerState:{},defineSkip:k,events:[],now:C,parser:t,previous:null,sliceSerialize:x,sliceStream:b,write:g};let v=r.tokenize.call(h,m);return r.resolveAll&&u.push(r),h;function g(ue){return d=xn(d,ue),N(),d[d.length-1]!==null?[]:(ae(r,0),h.events=Vd(u,h.events,h),h.events)}function x(ue,j){return G8(b(ue),j)}function b(ue){return Y8(d,ue)}function C(){const{_bufferIndex:ue,_index:j,line:J,column:S,offset:H}=o;return{_bufferIndex:ue,_index:j,line:J,column:S,offset:H}}function k(ue){s[ue.line]=ue.column,te()}function N(){let ue;for(;o._index<d.length;){const j=d[o._index];if(typeof j=="string")for(ue=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===ue&&o._bufferIndex<j.length;)_(j.charCodeAt(o._bufferIndex));else _(j)}}function _(ue){v=v(ue)}function z(ue){De(ue)?(o.line++,o.column=1,o.offset+=ue===-3?2:1,te()):ue!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===d[o._index].length&&(o._bufferIndex=-1,o._index++)),h.previous=ue}function O(ue,j){const J=j||{};return J.type=ue,J.start=C(),h.events.push(["enter",J,h]),f.push(J),J}function U(ue){const j=f.pop();return j.end=C(),h.events.push(["exit",j,h]),j}function R(ue,j){ae(ue,j.from)}function B(ue,j){j.restore()}function q(ue,j){return J;function J(S,H,F){let Y,be,le,$;return Array.isArray(S)?M(S):"tokenize"in S?M([S]):A(S);function A(_e){return $e;function $e(Ne){const Te=Ne!==null&&_e[Ne],Ke=Ne!==null&&_e.null,Je=[...Array.isArray(Te)?Te:Te?[Te]:[],...Array.isArray(Ke)?Ke:Ke?[Ke]:[]];return M(Je)(Ne)}}function M(_e){return Y=_e,be=0,_e.length===0?F:T(_e[be])}function T(_e){return $e;function $e(Ne){return $=G(),le=_e,_e.partial||(h.currentConstruct=_e),_e.name&&h.parser.constructs.disable.null.includes(_e.name)?oe():_e.tokenize.call(j?Object.assign(Object.create(h),j):h,m,ne,oe)(Ne)}}function ne(_e){return ue(le,$),H}function oe(_e){return $.restore(),++be<Y.length?T(Y[be]):F}}}function ae(ue,j){ue.resolveAll&&!u.includes(ue)&&u.push(ue),ue.resolve&&Ln(h.events,j,h.events.length-j,ue.resolve(h.events.slice(j),h)),ue.resolveTo&&(h.events=ue.resolveTo(h.events,h))}function G(){const ue=C(),j=h.previous,J=h.currentConstruct,S=h.events.length,H=Array.from(f);return{from:S,restore:F};function F(){o=ue,h.previous=j,h.currentConstruct=J,h.events.length=S,f=H,te()}}function te(){o.line in s&&o.column<2&&(o.column=s[o.line],o.offset+=s[o.line]-1)}}function Y8(t,r){const i=r.start._index,o=r.start._bufferIndex,s=r.end._index,u=r.end._bufferIndex;let d;if(i===s)d=[t[i].slice(o,u)];else{if(d=t.slice(i,s),o>-1){const f=d[0];typeof f=="string"?d[0]=f.slice(o):d.shift()}u>0&&d.push(t[s].slice(0,u))}return d}function G8(t,r){let i=-1;const o=[];let s;for(;++i<t.length;){const u=t[i];let d;if(typeof u=="string")d=u;else switch(u){case-5:{d="\r";break}case-4:{d=`
`;break}case-3:{d=`\r
`;break}case-2:{d=r?" ":"	";break}case-1:{if(!r&&s)continue;d=" ";break}default:d=String.fromCharCode(u)}s=u===-2,o.push(d)}return o.join("")}function V8(t){const o={constructs:e4([q8,...(t||{}).extensions||[]]),content:s(s4),defined:[],document:s(c4),flow:s(N8),lazy:{},string:s(O8),text:s($8)};return o;function s(u){return d;function d(f){return P8(o,u,f)}}}function X8(t){for(;!v1(t););return t}const mb=/[\0\t\n\r]/g;function Z8(){let t=1,r="",i=!0,o;return s;function s(u,d,f){const m=[];let h,v,g,x,b;for(u=r+(typeof u=="string"?u.toString():new TextDecoder(d||void 0).decode(u)),g=0,r="",i&&(u.charCodeAt(0)===65279&&g++,i=void 0);g<u.length;){if(mb.lastIndex=g,h=mb.exec(u),x=h&&h.index!==void 0?h.index:u.length,b=u.charCodeAt(x),!h){r=u.slice(g);break}if(b===10&&g===x&&o)m.push(-3),o=void 0;else switch(o&&(m.push(-5),o=void 0),g<x&&(m.push(u.slice(g,x)),t+=x-g),b){case 0:{m.push(65533),t++;break}case 9:{for(v=Math.ceil(t/4)*4,m.push(-2);t++<v;)m.push(-1);break}case 10:{m.push(-4),t=1;break}default:o=!0,t=1}g=x+1}return f&&(o&&m.push(-5),r&&m.push(r),m.push(null)),m}}const Q8=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function K8(t){return t.replace(Q8,J8)}function J8(t,r,i){if(r)return r;if(i.charCodeAt(0)===35){const s=i.charCodeAt(1),u=s===120||s===88;return m1(i.slice(u?2:1),u?16:10)}return Gd(i)||t}const _1={}.hasOwnProperty;function W8(t,r,i){return r&&typeof r=="object"&&(i=r,r=void 0),e3(i)(X8(V8(i).document().write(Z8()(t,r,!0))))}function e3(t){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:u(V),autolinkProtocol:G,autolinkEmail:G,atxHeading:u(ce),blockQuote:u(Ke),characterEscape:G,characterReference:G,codeFenced:u(Je),codeFencedFenceInfo:d,codeFencedFenceMeta:d,codeIndented:u(Je,d),codeText:u(Mt,d),codeTextData:G,data:G,codeFlowValue:G,definition:u(Dt),definitionDestinationString:d,definitionLabelString:d,definitionTitleString:d,emphasis:u(w),hardBreakEscape:u(ie),hardBreakTrailing:u(ie),htmlFlow:u(L,d),htmlFlowData:G,htmlText:u(L,d),htmlTextData:G,image:u(D),label:d,link:u(V),listItem:u(ge),listItemValue:x,listOrdered:u(me,g),listUnordered:u(me),paragraph:u(W),reference:T,referenceString:d,resourceDestinationString:d,resourceTitleString:d,setextHeading:u(ce),strong:u(ye),thematicBreak:u(we)},exit:{atxHeading:m(),atxHeadingSequence:R,autolink:m(),autolinkEmail:Te,autolinkProtocol:Ne,blockQuote:m(),characterEscapeValue:te,characterReferenceMarkerHexadecimal:oe,characterReferenceMarkerNumeric:oe,characterReferenceValue:_e,characterReference:$e,codeFenced:m(N),codeFencedFence:k,codeFencedFenceInfo:b,codeFencedFenceMeta:C,codeFlowValue:te,codeIndented:m(_),codeText:m(H),codeTextData:te,data:te,definition:m(),definitionDestinationString:U,definitionLabelString:z,definitionTitleString:O,emphasis:m(),hardBreakEscape:m(j),hardBreakTrailing:m(j),htmlFlow:m(J),htmlFlowData:te,htmlText:m(S),htmlTextData:te,image:m(Y),label:le,labelText:be,lineEnding:ue,link:m(F),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:ne,resourceDestinationString:$,resourceTitleString:A,resource:M,setextHeading:m(ae),setextHeadingLineSequence:q,setextHeadingText:B,strong:m(),thematicBreak:m()}};C1(r,(t||{}).mdastExtensions||[]);const i={};return o;function o(Z){let he={type:"root",children:[]};const ke={stack:[he],tokenStack:[],config:r,enter:f,exit:h,buffer:d,resume:v,data:i},Me=[];let Ye=-1;for(;++Ye<Z.length;)if(Z[Ye][1].type==="listOrdered"||Z[Ye][1].type==="listUnordered")if(Z[Ye][0]==="enter")Me.push(Ye);else{const ft=Me.pop();Ye=s(Z,ft,Ye)}for(Ye=-1;++Ye<Z.length;){const ft=r[Z[Ye][0]];_1.call(ft,Z[Ye][1].type)&&ft[Z[Ye][1].type].call(Object.assign({sliceSerialize:Z[Ye][2].sliceSerialize},ke),Z[Ye][1])}if(ke.tokenStack.length>0){const ft=ke.tokenStack[ke.tokenStack.length-1];(ft[1]||hb).call(ke,void 0,ft[0])}for(he.position={start:Oa(Z.length>0?Z[0][1].start:{line:1,column:1,offset:0}),end:Oa(Z.length>0?Z[Z.length-2][1].end:{line:1,column:1,offset:0})},Ye=-1;++Ye<r.transforms.length;)he=r.transforms[Ye](he)||he;return he}function s(Z,he,ke){let Me=he-1,Ye=-1,ft=!1,Bt,He,pt,Ct;for(;++Me<=ke;){const Fe=Z[Me];switch(Fe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Fe[0]==="enter"?Ye++:Ye--,Ct=void 0;break}case"lineEndingBlank":{Fe[0]==="enter"&&(Bt&&!Ct&&!Ye&&!pt&&(pt=Me),Ct=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ct=void 0}if(!Ye&&Fe[0]==="enter"&&Fe[1].type==="listItemPrefix"||Ye===-1&&Fe[0]==="exit"&&(Fe[1].type==="listUnordered"||Fe[1].type==="listOrdered")){if(Bt){let wn=Me;for(He=void 0;wn--;){const Qt=Z[wn];if(Qt[1].type==="lineEnding"||Qt[1].type==="lineEndingBlank"){if(Qt[0]==="exit")continue;He&&(Z[He][1].type="lineEndingBlank",ft=!0),Qt[1].type="lineEnding",He=wn}else if(!(Qt[1].type==="linePrefix"||Qt[1].type==="blockQuotePrefix"||Qt[1].type==="blockQuotePrefixWhitespace"||Qt[1].type==="blockQuoteMarker"||Qt[1].type==="listItemIndent"))break}pt&&(!He||pt<He)&&(Bt._spread=!0),Bt.end=Object.assign({},He?Z[He][1].start:Fe[1].end),Z.splice(He||Me,0,["exit",Bt,Fe[2]]),Me++,ke++}if(Fe[1].type==="listItemPrefix"){const wn={type:"listItem",_spread:!1,start:Object.assign({},Fe[1].start),end:void 0};Bt=wn,Z.splice(Me,0,["enter",wn,Fe[2]]),Me++,ke++,pt=void 0,Ct=!0}}}return Z[he][1]._spread=ft,ke}function u(Z,he){return ke;function ke(Me){f.call(this,Z(Me),Me),he&&he.call(this,Me)}}function d(){this.stack.push({type:"fragment",children:[]})}function f(Z,he,ke){this.stack[this.stack.length-1].children.push(Z),this.stack.push(Z),this.tokenStack.push([he,ke||void 0]),Z.position={start:Oa(he.start),end:void 0}}function m(Z){return he;function he(ke){Z&&Z.call(this,ke),h.call(this,ke)}}function h(Z,he){const ke=this.stack.pop(),Me=this.tokenStack.pop();if(Me)Me[0].type!==Z.type&&(he?he.call(this,Z,Me[0]):(Me[1]||hb).call(this,Z,Me[0]));else throw new Error("Cannot close `"+Z.type+"` ("+dl({start:Z.start,end:Z.end})+"): it’s not open");ke.position.end=Oa(Z.end)}function v(){return JS(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function x(Z){if(this.data.expectingFirstListItemValue){const he=this.stack[this.stack.length-2];he.start=Number.parseInt(this.sliceSerialize(Z),10),this.data.expectingFirstListItemValue=void 0}}function b(){const Z=this.resume(),he=this.stack[this.stack.length-1];he.lang=Z}function C(){const Z=this.resume(),he=this.stack[this.stack.length-1];he.meta=Z}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function N(){const Z=this.resume(),he=this.stack[this.stack.length-1];he.value=Z.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function _(){const Z=this.resume(),he=this.stack[this.stack.length-1];he.value=Z.replace(/(\r?\n|\r)$/g,"")}function z(Z){const he=this.resume(),ke=this.stack[this.stack.length-1];ke.label=he,ke.identifier=Wr(this.sliceSerialize(Z)).toLowerCase()}function O(){const Z=this.resume(),he=this.stack[this.stack.length-1];he.title=Z}function U(){const Z=this.resume(),he=this.stack[this.stack.length-1];he.url=Z}function R(Z){const he=this.stack[this.stack.length-1];if(!he.depth){const ke=this.sliceSerialize(Z).length;he.depth=ke}}function B(){this.data.setextHeadingSlurpLineEnding=!0}function q(Z){const he=this.stack[this.stack.length-1];he.depth=this.sliceSerialize(Z).codePointAt(0)===61?1:2}function ae(){this.data.setextHeadingSlurpLineEnding=void 0}function G(Z){const ke=this.stack[this.stack.length-1].children;let Me=ke[ke.length-1];(!Me||Me.type!=="text")&&(Me=Se(),Me.position={start:Oa(Z.start),end:void 0},ke.push(Me)),this.stack.push(Me)}function te(Z){const he=this.stack.pop();he.value+=this.sliceSerialize(Z),he.position.end=Oa(Z.end)}function ue(Z){const he=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ke=he.children[he.children.length-1];ke.position.end=Oa(Z.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(he.type)&&(G.call(this,Z),te.call(this,Z))}function j(){this.data.atHardBreak=!0}function J(){const Z=this.resume(),he=this.stack[this.stack.length-1];he.value=Z}function S(){const Z=this.resume(),he=this.stack[this.stack.length-1];he.value=Z}function H(){const Z=this.resume(),he=this.stack[this.stack.length-1];he.value=Z}function F(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const he=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=he,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function Y(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const he=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=he,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function be(Z){const he=this.sliceSerialize(Z),ke=this.stack[this.stack.length-2];ke.label=K8(he),ke.identifier=Wr(he).toLowerCase()}function le(){const Z=this.stack[this.stack.length-1],he=this.resume(),ke=this.stack[this.stack.length-1];if(this.data.inReference=!0,ke.type==="link"){const Me=Z.children;ke.children=Me}else ke.alt=he}function $(){const Z=this.resume(),he=this.stack[this.stack.length-1];he.url=Z}function A(){const Z=this.resume(),he=this.stack[this.stack.length-1];he.title=Z}function M(){this.data.inReference=void 0}function T(){this.data.referenceType="collapsed"}function ne(Z){const he=this.resume(),ke=this.stack[this.stack.length-1];ke.label=he,ke.identifier=Wr(this.sliceSerialize(Z)).toLowerCase(),this.data.referenceType="full"}function oe(Z){this.data.characterReferenceType=Z.type}function _e(Z){const he=this.sliceSerialize(Z),ke=this.data.characterReferenceType;let Me;ke?(Me=m1(he,ke==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Me=Gd(he);const Ye=this.stack[this.stack.length-1];Ye.value+=Me}function $e(Z){const he=this.stack.pop();he.position.end=Oa(Z.end)}function Ne(Z){te.call(this,Z);const he=this.stack[this.stack.length-1];he.url=this.sliceSerialize(Z)}function Te(Z){te.call(this,Z);const he=this.stack[this.stack.length-1];he.url="mailto:"+this.sliceSerialize(Z)}function Ke(){return{type:"blockquote",children:[]}}function Je(){return{type:"code",lang:null,meta:null,value:""}}function Mt(){return{type:"inlineCode",value:""}}function Dt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function w(){return{type:"emphasis",children:[]}}function ce(){return{type:"heading",depth:0,children:[]}}function ie(){return{type:"break"}}function L(){return{type:"html",value:""}}function D(){return{type:"image",title:null,url:"",alt:null}}function V(){return{type:"link",title:null,url:"",children:[]}}function me(Z){return{type:"list",ordered:Z.type==="listOrdered",start:null,spread:Z._spread,children:[]}}function ge(Z){return{type:"listItem",spread:Z._spread,checked:null,children:[]}}function W(){return{type:"paragraph",children:[]}}function ye(){return{type:"strong",children:[]}}function Se(){return{type:"text",value:""}}function we(){return{type:"thematicBreak"}}}function Oa(t){return{line:t.line,column:t.column,offset:t.offset}}function C1(t,r){let i=-1;for(;++i<r.length;){const o=r[i];Array.isArray(o)?C1(t,o):t3(t,o)}}function t3(t,r){let i;for(i in r)if(_1.call(r,i))switch(i){case"canContainEols":{const o=r[i];o&&t[i].push(...o);break}case"transforms":{const o=r[i];o&&t[i].push(...o);break}case"enter":case"exit":{const o=r[i];o&&Object.assign(t[i],o);break}}}function hb(t,r){throw t?new Error("Cannot close `"+t.type+"` ("+dl({start:t.start,end:t.end})+"): a different token (`"+r.type+"`, "+dl({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+dl({start:r.start,end:r.end})+") is still open")}function n3(t){const r=this;r.parser=i;function i(o){return W8(o,{...r.data("settings"),...t,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function a3(t,r){const i={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(r),!0)};return t.patch(r,i),t.applyData(r,i)}function r3(t,r){const i={type:"element",tagName:"br",properties:{},children:[]};return t.patch(r,i),[t.applyData(r,i),{type:"text",value:`
`}]}function i3(t,r){const i=r.value?r.value+`
`:"",o={},s=r.lang?r.lang.split(/\s+/):[];s.length>0&&(o.className=["language-"+s[0]]);let u={type:"element",tagName:"code",properties:o,children:[{type:"text",value:i}]};return r.meta&&(u.data={meta:r.meta}),t.patch(r,u),u=t.applyData(r,u),u={type:"element",tagName:"pre",properties:{},children:[u]},t.patch(r,u),u}function l3(t,r){const i={type:"element",tagName:"del",properties:{},children:t.all(r)};return t.patch(r,i),t.applyData(r,i)}function o3(t,r){const i={type:"element",tagName:"em",properties:{},children:t.all(r)};return t.patch(r,i),t.applyData(r,i)}function s3(t,r){const i=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",o=String(r.identifier).toUpperCase(),s=ri(o.toLowerCase()),u=t.footnoteOrder.indexOf(o);let d,f=t.footnoteCounts.get(o);f===void 0?(f=0,t.footnoteOrder.push(o),d=t.footnoteOrder.length):d=u+1,f+=1,t.footnoteCounts.set(o,f);const m={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+s,id:i+"fnref-"+s+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(d)}]};t.patch(r,m);const h={type:"element",tagName:"sup",properties:{},children:[m]};return t.patch(r,h),t.applyData(r,h)}function u3(t,r){const i={type:"element",tagName:"h"+r.depth,properties:{},children:t.all(r)};return t.patch(r,i),t.applyData(r,i)}function c3(t,r){if(t.options.allowDangerousHtml){const i={type:"raw",value:r.value};return t.patch(r,i),t.applyData(r,i)}}function A1(t,r){const i=r.referenceType;let o="]";if(i==="collapsed"?o+="[]":i==="full"&&(o+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+o}];const s=t.all(r),u=s[0];u&&u.type==="text"?u.value="["+u.value:s.unshift({type:"text",value:"["});const d=s[s.length-1];return d&&d.type==="text"?d.value+=o:s.push({type:"text",value:o}),s}function d3(t,r){const i=String(r.identifier).toUpperCase(),o=t.definitionById.get(i);if(!o)return A1(t,r);const s={src:ri(o.url||""),alt:r.alt};o.title!==null&&o.title!==void 0&&(s.title=o.title);const u={type:"element",tagName:"img",properties:s,children:[]};return t.patch(r,u),t.applyData(r,u)}function f3(t,r){const i={src:ri(r.url)};r.alt!==null&&r.alt!==void 0&&(i.alt=r.alt),r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return t.patch(r,o),t.applyData(r,o)}function p3(t,r){const i={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};t.patch(r,i);const o={type:"element",tagName:"code",properties:{},children:[i]};return t.patch(r,o),t.applyData(r,o)}function m3(t,r){const i=String(r.identifier).toUpperCase(),o=t.definitionById.get(i);if(!o)return A1(t,r);const s={href:ri(o.url||"")};o.title!==null&&o.title!==void 0&&(s.title=o.title);const u={type:"element",tagName:"a",properties:s,children:t.all(r)};return t.patch(r,u),t.applyData(r,u)}function h3(t,r){const i={href:ri(r.url)};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:t.all(r)};return t.patch(r,o),t.applyData(r,o)}function g3(t,r,i){const o=t.all(r),s=i?b3(i):E1(r),u={},d=[];if(typeof r.checked=="boolean"){const v=o[0];let g;v&&v.type==="element"&&v.tagName==="p"?g=v:(g={type:"element",tagName:"p",properties:{},children:[]},o.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),u.className=["task-list-item"]}let f=-1;for(;++f<o.length;){const v=o[f];(s||f!==0||v.type!=="element"||v.tagName!=="p")&&d.push({type:"text",value:`
`}),v.type==="element"&&v.tagName==="p"&&!s?d.push(...v.children):d.push(v)}const m=o[o.length-1];m&&(s||m.type!=="element"||m.tagName!=="p")&&d.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:u,children:d};return t.patch(r,h),t.applyData(r,h)}function b3(t){let r=!1;if(t.type==="list"){r=t.spread||!1;const i=t.children;let o=-1;for(;!r&&++o<i.length;)r=E1(i[o])}return r}function E1(t){const r=t.spread;return r??t.children.length>1}function v3(t,r){const i={},o=t.all(r);let s=-1;for(typeof r.start=="number"&&r.start!==1&&(i.start=r.start);++s<o.length;){const d=o[s];if(d.type==="element"&&d.tagName==="li"&&d.properties&&Array.isArray(d.properties.className)&&d.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const u={type:"element",tagName:r.ordered?"ol":"ul",properties:i,children:t.wrap(o,!0)};return t.patch(r,u),t.applyData(r,u)}function y3(t,r){const i={type:"element",tagName:"p",properties:{},children:t.all(r)};return t.patch(r,i),t.applyData(r,i)}function x3(t,r){const i={type:"root",children:t.wrap(t.all(r))};return t.patch(r,i),t.applyData(r,i)}function w3(t,r){const i={type:"element",tagName:"strong",properties:{},children:t.all(r)};return t.patch(r,i),t.applyData(r,i)}function k3(t,r){const i=t.all(r),o=i.shift(),s=[];if(o){const d={type:"element",tagName:"thead",properties:{},children:t.wrap([o],!0)};t.patch(r.children[0],d),s.push(d)}if(i.length>0){const d={type:"element",tagName:"tbody",properties:{},children:t.wrap(i,!0)},f=Fd(r.children[1]),m=o1(r.children[r.children.length-1]);f&&m&&(d.position={start:f,end:m}),s.push(d)}const u={type:"element",tagName:"table",properties:{},children:t.wrap(s,!0)};return t.patch(r,u),t.applyData(r,u)}function S3(t,r,i){const o=i?i.children:void 0,u=(o?o.indexOf(r):1)===0?"th":"td",d=i&&i.type==="table"?i.align:void 0,f=d?d.length:r.children.length;let m=-1;const h=[];for(;++m<f;){const g=r.children[m],x={},b=d?d[m]:void 0;b&&(x.align=b);let C={type:"element",tagName:u,properties:x,children:[]};g&&(C.children=t.all(g),t.patch(g,C),C=t.applyData(g,C)),h.push(C)}const v={type:"element",tagName:"tr",properties:{},children:t.wrap(h,!0)};return t.patch(r,v),t.applyData(r,v)}function _3(t,r){const i={type:"element",tagName:"td",properties:{},children:t.all(r)};return t.patch(r,i),t.applyData(r,i)}const gb=9,bb=32;function C3(t){const r=String(t),i=/\r?\n|\r/g;let o=i.exec(r),s=0;const u=[];for(;o;)u.push(vb(r.slice(s,o.index),s>0,!0),o[0]),s=o.index+o[0].length,o=i.exec(r);return u.push(vb(r.slice(s),s>0,!1)),u.join("")}function vb(t,r,i){let o=0,s=t.length;if(r){let u=t.codePointAt(o);for(;u===gb||u===bb;)o++,u=t.codePointAt(o)}if(i){let u=t.codePointAt(s-1);for(;u===gb||u===bb;)s--,u=t.codePointAt(s-1)}return s>o?t.slice(o,s):""}function A3(t,r){const i={type:"text",value:C3(String(r.value))};return t.patch(r,i),t.applyData(r,i)}function E3(t,r){const i={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(r,i),t.applyData(r,i)}const N3={blockquote:a3,break:r3,code:i3,delete:l3,emphasis:o3,footnoteReference:s3,heading:u3,html:c3,imageReference:d3,image:f3,inlineCode:p3,linkReference:m3,link:h3,listItem:g3,list:v3,paragraph:y3,root:x3,strong:w3,table:k3,tableCell:_3,tableRow:S3,text:A3,thematicBreak:E3,toml:Po,yaml:Po,definition:Po,footnoteDefinition:Po};function Po(){}const N1=-1,ds=0,pl=1,ns=2,Zd=3,Qd=4,Kd=5,Jd=6,T1=7,z1=8,yb=typeof self=="object"?self:globalThis,T3=(t,r)=>{const i=(s,u)=>(t.set(u,s),s),o=s=>{if(t.has(s))return t.get(s);const[u,d]=r[s];switch(u){case ds:case N1:return i(d,s);case pl:{const f=i([],s);for(const m of d)f.push(o(m));return f}case ns:{const f=i({},s);for(const[m,h]of d)f[o(m)]=o(h);return f}case Zd:return i(new Date(d),s);case Qd:{const{source:f,flags:m}=d;return i(new RegExp(f,m),s)}case Kd:{const f=i(new Map,s);for(const[m,h]of d)f.set(o(m),o(h));return f}case Jd:{const f=i(new Set,s);for(const m of d)f.add(o(m));return f}case T1:{const{name:f,message:m}=d;return i(new yb[f](m),s)}case z1:return i(BigInt(d),s);case"BigInt":return i(Object(BigInt(d)),s);case"ArrayBuffer":return i(new Uint8Array(d).buffer,d);case"DataView":{const{buffer:f}=new Uint8Array(d);return i(new DataView(f),d)}}return i(new yb[u](d),s)};return o},xb=t=>T3(new Map,t)(0),Xr="",{toString:z3}={},{keys:O3}=Object,tl=t=>{const r=typeof t;if(r!=="object"||!t)return[ds,r];const i=z3.call(t).slice(8,-1);switch(i){case"Array":return[pl,Xr];case"Object":return[ns,Xr];case"Date":return[Zd,Xr];case"RegExp":return[Qd,Xr];case"Map":return[Kd,Xr];case"Set":return[Jd,Xr];case"DataView":return[pl,i]}return i.includes("Array")?[pl,i]:i.includes("Error")?[T1,i]:[ns,i]},Yo=([t,r])=>t===ds&&(r==="function"||r==="symbol"),$3=(t,r,i,o)=>{const s=(d,f)=>{const m=o.push(d)-1;return i.set(f,m),m},u=d=>{if(i.has(d))return i.get(d);let[f,m]=tl(d);switch(f){case ds:{let v=d;switch(m){case"bigint":f=z1,v=d.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+m);v=null;break;case"undefined":return s([N1],d)}return s([f,v],d)}case pl:{if(m){let x=d;return m==="DataView"?x=new Uint8Array(d.buffer):m==="ArrayBuffer"&&(x=new Uint8Array(d)),s([m,[...x]],d)}const v=[],g=s([f,v],d);for(const x of d)v.push(u(x));return g}case ns:{if(m)switch(m){case"BigInt":return s([m,d.toString()],d);case"Boolean":case"Number":case"String":return s([m,d.valueOf()],d)}if(r&&"toJSON"in d)return u(d.toJSON());const v=[],g=s([f,v],d);for(const x of O3(d))(t||!Yo(tl(d[x])))&&v.push([u(x),u(d[x])]);return g}case Zd:return s([f,d.toISOString()],d);case Qd:{const{source:v,flags:g}=d;return s([f,{source:v,flags:g}],d)}case Kd:{const v=[],g=s([f,v],d);for(const[x,b]of d)(t||!(Yo(tl(x))||Yo(tl(b))))&&v.push([u(x),u(b)]);return g}case Jd:{const v=[],g=s([f,v],d);for(const x of d)(t||!Yo(tl(x)))&&v.push(u(x));return g}}const{message:h}=d;return s([f,{name:m,message:h}],d)};return u},wb=(t,{json:r,lossy:i}={})=>{const o=[];return $3(!(r||i),!!r,new Map,o)(t),o},as=typeof structuredClone=="function"?(t,r)=>r&&("json"in r||"lossy"in r)?xb(wb(t,r)):structuredClone(t):(t,r)=>xb(wb(t,r));function j3(t,r){const i=[{type:"text",value:"↩"}];return r>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),i}function M3(t,r){return"Back to reference "+(t+1)+(r>1?"-"+r:"")}function D3(t){const r=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=t.options.footnoteBackContent||j3,o=t.options.footnoteBackLabel||M3,s=t.options.footnoteLabel||"Footnotes",u=t.options.footnoteLabelTagName||"h2",d=t.options.footnoteLabelProperties||{className:["sr-only"]},f=[];let m=-1;for(;++m<t.footnoteOrder.length;){const h=t.footnoteById.get(t.footnoteOrder[m]);if(!h)continue;const v=t.all(h),g=String(h.identifier).toUpperCase(),x=ri(g.toLowerCase());let b=0;const C=[],k=t.footnoteCounts.get(g);for(;k!==void 0&&++b<=k;){C.length>0&&C.push({type:"text",value:" "});let z=typeof i=="string"?i:i(m,b);typeof z=="string"&&(z={type:"text",value:z}),C.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+x+(b>1?"-"+b:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(m,b),className:["data-footnote-backref"]},children:Array.isArray(z)?z:[z]})}const N=v[v.length-1];if(N&&N.type==="element"&&N.tagName==="p"){const z=N.children[N.children.length-1];z&&z.type==="text"?z.value+=" ":N.children.push({type:"text",value:" "}),N.children.push(...C)}else v.push(...C);const _={type:"element",tagName:"li",properties:{id:r+"fn-"+x},children:t.wrap(v,!0)};t.patch(h,_),f.push(_)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:u,properties:{...as(d),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(f,!0)},{type:"text",value:`
`}]}}const O1=(function(t){if(t==null)return U3;if(typeof t=="function")return fs(t);if(typeof t=="object")return Array.isArray(t)?R3(t):L3(t);if(typeof t=="string")return B3(t);throw new Error("Expected function, string, or object as test")});function R3(t){const r=[];let i=-1;for(;++i<t.length;)r[i]=O1(t[i]);return fs(o);function o(...s){let u=-1;for(;++u<r.length;)if(r[u].apply(this,s))return!0;return!1}}function L3(t){const r=t;return fs(i);function i(o){const s=o;let u;for(u in t)if(s[u]!==r[u])return!1;return!0}}function B3(t){return fs(r);function r(i){return i&&i.type===t}}function fs(t){return r;function r(i,o,s){return!!(I3(i)&&t.call(this,i,typeof o=="number"?o:void 0,s||void 0))}}function U3(){return!0}function I3(t){return t!==null&&typeof t=="object"&&"type"in t}const $1=[],H3=!0,kb=!1,F3="skip";function q3(t,r,i,o){let s;typeof r=="function"&&typeof i!="function"?(o=i,i=r):s=r;const u=O1(s),d=o?-1:1;f(t,void 0,[])();function f(m,h,v){const g=m&&typeof m=="object"?m:{};if(typeof g.type=="string"){const b=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(x,"name",{value:"node ("+(m.type+(b?"<"+b+">":""))+")"})}return x;function x(){let b=$1,C,k,N;if((!r||u(m,h,v[v.length-1]||void 0))&&(b=P3(i(m,v)),b[0]===kb))return b;if("children"in m&&m.children){const _=m;if(_.children&&b[0]!==F3)for(k=(o?_.children.length:-1)+d,N=v.concat(_);k>-1&&k<_.children.length;){const z=_.children[k];if(C=f(z,k,N)(),C[0]===kb)return C;k=typeof C[1]=="number"?C[1]:k+d}}return b}}}function P3(t){return Array.isArray(t)?t:typeof t=="number"?[H3,t]:t==null?$1:[t]}function j1(t,r,i,o){let s,u,d;typeof r=="function"&&typeof i!="function"?(u=void 0,d=r,s=i):(u=r,d=i,s=o),q3(t,u,f,s);function f(m,h){const v=h[h.length-1],g=v?v.children.indexOf(m):void 0;return d(m,g,v)}}const _d={}.hasOwnProperty,Y3={};function G3(t,r){const i=r||Y3,o=new Map,s=new Map,u=new Map,d={...N3,...i.handlers},f={all:h,applyData:X3,definitionById:o,footnoteById:s,footnoteCounts:u,footnoteOrder:[],handlers:d,one:m,options:i,patch:V3,wrap:Q3};return j1(t,function(v){if(v.type==="definition"||v.type==="footnoteDefinition"){const g=v.type==="definition"?o:s,x=String(v.identifier).toUpperCase();g.has(x)||g.set(x,v)}}),f;function m(v,g){const x=v.type,b=f.handlers[x];if(_d.call(f.handlers,x)&&b)return b(f,v,g);if(f.options.passThrough&&f.options.passThrough.includes(x)){if("children"in v){const{children:k,...N}=v,_=as(N);return _.children=f.all(v),_}return as(v)}return(f.options.unknownHandler||Z3)(f,v,g)}function h(v){const g=[];if("children"in v){const x=v.children;let b=-1;for(;++b<x.length;){const C=f.one(x[b],v);if(C){if(b&&x[b-1].type==="break"&&(!Array.isArray(C)&&C.type==="text"&&(C.value=Sb(C.value)),!Array.isArray(C)&&C.type==="element")){const k=C.children[0];k&&k.type==="text"&&(k.value=Sb(k.value))}Array.isArray(C)?g.push(...C):g.push(C)}}}return g}}function V3(t,r){t.position&&(r.position=zS(t))}function X3(t,r){let i=r;if(t&&t.data){const o=t.data.hName,s=t.data.hChildren,u=t.data.hProperties;if(typeof o=="string")if(i.type==="element")i.tagName=o;else{const d="children"in i?i.children:[i];i={type:"element",tagName:o,properties:{},children:d}}i.type==="element"&&u&&Object.assign(i.properties,as(u)),"children"in i&&i.children&&s!==null&&s!==void 0&&(i.children=s)}return i}function Z3(t,r){const i=r.data||{},o="value"in r&&!(_d.call(i,"hProperties")||_d.call(i,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:t.all(r)};return t.patch(r,o),t.applyData(r,o)}function Q3(t,r){const i=[];let o=-1;for(r&&i.push({type:"text",value:`
`});++o<t.length;)o&&i.push({type:"text",value:`
`}),i.push(t[o]);return r&&t.length>0&&i.push({type:"text",value:`
`}),i}function Sb(t){let r=0,i=t.charCodeAt(r);for(;i===9||i===32;)r++,i=t.charCodeAt(r);return t.slice(r)}function _b(t,r){const i=G3(t,r),o=i.one(t,void 0),s=D3(i),u=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return s&&u.children.push({type:"text",value:`
`},s),u}function K3(t,r){return t&&"run"in t?async function(i,o){const s=_b(i,{file:o,...r});await t.run(s,o)}:function(i,o){return _b(i,{file:o,...t||r})}}function Cb(t){if(t)throw t}var Xc,Ab;function J3(){if(Ab)return Xc;Ab=1;var t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=function(h){return typeof Array.isArray=="function"?Array.isArray(h):r.call(h)==="[object Array]"},u=function(h){if(!h||r.call(h)!=="[object Object]")return!1;var v=t.call(h,"constructor"),g=h.constructor&&h.constructor.prototype&&t.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!v&&!g)return!1;var x;for(x in h);return typeof x>"u"||t.call(h,x)},d=function(h,v){i&&v.name==="__proto__"?i(h,v.name,{enumerable:!0,configurable:!0,value:v.newValue,writable:!0}):h[v.name]=v.newValue},f=function(h,v){if(v==="__proto__")if(t.call(h,v)){if(o)return o(h,v).value}else return;return h[v]};return Xc=function m(){var h,v,g,x,b,C,k=arguments[0],N=1,_=arguments.length,z=!1;for(typeof k=="boolean"&&(z=k,k=arguments[1]||{},N=2),(k==null||typeof k!="object"&&typeof k!="function")&&(k={});N<_;++N)if(h=arguments[N],h!=null)for(v in h)g=f(k,v),x=f(h,v),k!==x&&(z&&x&&(u(x)||(b=s(x)))?(b?(b=!1,C=g&&s(g)?g:[]):C=g&&u(g)?g:{},d(k,{name:v,newValue:m(z,C,x)})):typeof x<"u"&&d(k,{name:v,newValue:x}));return k},Xc}var W3=J3();const Zc=bl(W3);function Cd(t){if(typeof t!="object"||t===null)return!1;const r=Object.getPrototypeOf(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function e6(){const t=[],r={run:i,use:o};return r;function i(...s){let u=-1;const d=s.pop();if(typeof d!="function")throw new TypeError("Expected function as last argument, not "+d);f(null,...s);function f(m,...h){const v=t[++u];let g=-1;if(m){d(m);return}for(;++g<s.length;)(h[g]===null||h[g]===void 0)&&(h[g]=s[g]);s=h,v?t6(v,f)(...h):d(null,...h)}}function o(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return t.push(s),r}}function t6(t,r){let i;return o;function o(...d){const f=t.length>d.length;let m;f&&d.push(s);try{m=t.apply(this,d)}catch(h){const v=h;if(f&&i)throw v;return s(v)}f||(m&&m.then&&typeof m.then=="function"?m.then(u,s):m instanceof Error?s(m):u(m))}function s(d,...f){i||(i=!0,r(d,...f))}function u(d){s(null,d)}}const jn={basename:n6,dirname:a6,extname:r6,join:i6,sep:"/"};function n6(t,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Sl(t);let i=0,o=-1,s=t.length,u;if(r===void 0||r.length===0||r.length>t.length){for(;s--;)if(t.codePointAt(s)===47){if(u){i=s+1;break}}else o<0&&(u=!0,o=s+1);return o<0?"":t.slice(i,o)}if(r===t)return"";let d=-1,f=r.length-1;for(;s--;)if(t.codePointAt(s)===47){if(u){i=s+1;break}}else d<0&&(u=!0,d=s+1),f>-1&&(t.codePointAt(s)===r.codePointAt(f--)?f<0&&(o=s):(f=-1,o=d));return i===o?o=d:o<0&&(o=t.length),t.slice(i,o)}function a6(t){if(Sl(t),t.length===0)return".";let r=-1,i=t.length,o;for(;--i;)if(t.codePointAt(i)===47){if(o){r=i;break}}else o||(o=!0);return r<0?t.codePointAt(0)===47?"/":".":r===1&&t.codePointAt(0)===47?"//":t.slice(0,r)}function r6(t){Sl(t);let r=t.length,i=-1,o=0,s=-1,u=0,d;for(;r--;){const f=t.codePointAt(r);if(f===47){if(d){o=r+1;break}continue}i<0&&(d=!0,i=r+1),f===46?s<0?s=r:u!==1&&(u=1):s>-1&&(u=-1)}return s<0||i<0||u===0||u===1&&s===i-1&&s===o+1?"":t.slice(s,i)}function i6(...t){let r=-1,i;for(;++r<t.length;)Sl(t[r]),t[r]&&(i=i===void 0?t[r]:i+"/"+t[r]);return i===void 0?".":l6(i)}function l6(t){Sl(t);const r=t.codePointAt(0)===47;let i=o6(t,!r);return i.length===0&&!r&&(i="."),i.length>0&&t.codePointAt(t.length-1)===47&&(i+="/"),r?"/"+i:i}function o6(t,r){let i="",o=0,s=-1,u=0,d=-1,f,m;for(;++d<=t.length;){if(d<t.length)f=t.codePointAt(d);else{if(f===47)break;f=47}if(f===47){if(!(s===d-1||u===1))if(s!==d-1&&u===2){if(i.length<2||o!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(m=i.lastIndexOf("/"),m!==i.length-1){m<0?(i="",o=0):(i=i.slice(0,m),o=i.length-1-i.lastIndexOf("/")),s=d,u=0;continue}}else if(i.length>0){i="",o=0,s=d,u=0;continue}}r&&(i=i.length>0?i+"/..":"..",o=2)}else i.length>0?i+="/"+t.slice(s+1,d):i=t.slice(s+1,d),o=d-s-1;s=d,u=0}else f===46&&u>-1?u++:u=-1}return i}function Sl(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const s6={cwd:u6};function u6(){return"/"}function Ad(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function c6(t){if(typeof t=="string")t=new URL(t);else if(!Ad(t)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(t.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return d6(t)}function d6(t){if(t.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const r=t.pathname;let i=-1;for(;++i<r.length;)if(r.codePointAt(i)===37&&r.codePointAt(i+1)===50){const o=r.codePointAt(i+2);if(o===70||o===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(r)}const Qc=["history","path","basename","stem","extname","dirname"];class M1{constructor(r){let i;r?Ad(r)?i={path:r}:typeof r=="string"||f6(r)?i={value:r}:i=r:i={},this.cwd="cwd"in i?"":s6.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<Qc.length;){const u=Qc[o];u in i&&i[u]!==void 0&&i[u]!==null&&(this[u]=u==="history"?[...i[u]]:i[u])}let s;for(s in i)Qc.includes(s)||(this[s]=i[s])}get basename(){return typeof this.path=="string"?jn.basename(this.path):void 0}set basename(r){Jc(r,"basename"),Kc(r,"basename"),this.path=jn.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?jn.dirname(this.path):void 0}set dirname(r){Eb(this.basename,"dirname"),this.path=jn.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?jn.extname(this.path):void 0}set extname(r){if(Kc(r,"extname"),Eb(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=jn.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){Ad(r)&&(r=c6(r)),Jc(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?jn.basename(this.path,this.extname):void 0}set stem(r){Jc(r,"stem"),Kc(r,"stem"),this.path=jn.join(this.dirname||"",r+(this.extname||""))}fail(r,i,o){const s=this.message(r,i,o);throw s.fatal=!0,s}info(r,i,o){const s=this.message(r,i,o);return s.fatal=void 0,s}message(r,i,o){const s=new Lt(r,i,o);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function Kc(t,r){if(t&&t.includes(jn.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+jn.sep+"`")}function Jc(t,r){if(!t)throw new Error("`"+r+"` cannot be empty")}function Eb(t,r){if(!t)throw new Error("Setting `"+r+"` requires `path` to be set too")}function f6(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const p6=(function(t){const o=this.constructor.prototype,s=o[t],u=function(){return s.apply(u,arguments)};return Object.setPrototypeOf(u,o),u}),m6={}.hasOwnProperty;class Wd extends p6{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=e6()}copy(){const r=new Wd;let i=-1;for(;++i<this.attachers.length;){const o=this.attachers[i];r.use(...o)}return r.data(Zc(!0,{},this.namespace)),r}data(r,i){return typeof r=="string"?arguments.length===2?(td("data",this.frozen),this.namespace[r]=i,this):m6.call(this.namespace,r)&&this.namespace[r]||void 0:r?(td("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const s=i.call(r,...o);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const i=Go(r),o=this.parser||this.Parser;return Wc("parse",o),o(String(i),i)}process(r,i){const o=this;return this.freeze(),Wc("process",this.parser||this.Parser),ed("process",this.compiler||this.Compiler),i?s(void 0,i):new Promise(s);function s(u,d){const f=Go(r),m=o.parse(f);o.run(m,f,function(v,g,x){if(v||!g||!x)return h(v);const b=g,C=o.stringify(b,x);b6(C)?x.value=C:x.result=C,h(v,x)});function h(v,g){v||!g?d(v):u?u(g):i(void 0,g)}}}processSync(r){let i=!1,o;return this.freeze(),Wc("processSync",this.parser||this.Parser),ed("processSync",this.compiler||this.Compiler),this.process(r,s),Tb("processSync","process",i),o;function s(u,d){i=!0,Cb(u),o=d}}run(r,i,o){Nb(r),this.freeze();const s=this.transformers;return!o&&typeof i=="function"&&(o=i,i=void 0),o?u(void 0,o):new Promise(u);function u(d,f){const m=Go(i);s.run(r,m,h);function h(v,g,x){const b=g||r;v?f(v):d?d(b):o(void 0,b,x)}}}runSync(r,i){let o=!1,s;return this.run(r,i,u),Tb("runSync","run",o),s;function u(d,f){Cb(d),s=f,o=!0}}stringify(r,i){this.freeze();const o=Go(i),s=this.compiler||this.Compiler;return ed("stringify",s),Nb(r),s(r,o)}use(r,...i){const o=this.attachers,s=this.namespace;if(td("use",this.frozen),r!=null)if(typeof r=="function")m(r,i);else if(typeof r=="object")Array.isArray(r)?f(r):d(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function u(h){if(typeof h=="function")m(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[v,...g]=h;m(v,g)}else d(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function d(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(h.plugins),h.settings&&(s.settings=Zc(!0,s.settings,h.settings))}function f(h){let v=-1;if(h!=null)if(Array.isArray(h))for(;++v<h.length;){const g=h[v];u(g)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function m(h,v){let g=-1,x=-1;for(;++g<o.length;)if(o[g][0]===h){x=g;break}if(x===-1)o.push([h,...v]);else if(v.length>0){let[b,...C]=v;const k=o[x][1];Cd(k)&&Cd(b)&&(b=Zc(!0,k,b)),o[x]=[h,b,...C]}}}}const h6=new Wd().freeze();function Wc(t,r){if(typeof r!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function ed(t,r){if(typeof r!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function td(t,r){if(r)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Nb(t){if(!Cd(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function Tb(t,r,i){if(!i)throw new Error("`"+t+"` finished async. Use `"+r+"` instead")}function Go(t){return g6(t)?t:new M1(t)}function g6(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function b6(t){return typeof t=="string"||v6(t)}function v6(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const y6="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",zb=[],Ob={allowDangerousHtml:!0},x6=/^(https?|ircs?|mailto|xmpp)$/i,w6=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function k6(t){const r=S6(t),i=_6(t);return C6(r.runSync(r.parse(i),i),t)}function S6(t){const r=t.rehypePlugins||zb,i=t.remarkPlugins||zb,o=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...Ob}:Ob;return h6().use(n3).use(i).use(K3,o).use(r)}function _6(t){const r=t.children||"",i=new M1;return typeof r=="string"&&(i.value=r),i}function C6(t,r){const i=r.allowedElements,o=r.allowElement,s=r.components,u=r.disallowedElements,d=r.skipHtml,f=r.unwrapDisallowed,m=r.urlTransform||A6;for(const v of w6)Object.hasOwn(r,v.from)&&(""+v.from+(v.to?"use `"+v.to+"` instead":"remove it")+y6+v.id,void 0);return r.className&&(t={type:"element",tagName:"div",properties:{className:r.className},children:t.type==="root"?t.children:[t]}),j1(t,h),DS(t,{Fragment:fe.Fragment,components:s,ignoreInvalidStyle:!0,jsx:fe.jsx,jsxs:fe.jsxs,passKeys:!0,passNode:!0});function h(v,g,x){if(v.type==="raw"&&x&&typeof g=="number")return d?x.children.splice(g,1):x.children[g]={type:"text",value:v.value},g;if(v.type==="element"){let b;for(b in Yc)if(Object.hasOwn(Yc,b)&&Object.hasOwn(v.properties,b)){const C=v.properties[b],k=Yc[b];(k===null||k.includes(v.tagName))&&(v.properties[b]=m(String(C||""),b,v))}}if(v.type==="element"){let b=i?!i.includes(v.tagName):u?u.includes(v.tagName):!1;if(!b&&o&&typeof g=="number"&&(b=!o(v,g,x)),b&&x&&typeof g=="number")return f&&v.children?x.children.splice(g,1,...v.children):x.children.splice(g,1),g}}}function A6(t){const r=t.indexOf(":"),i=t.indexOf("?"),o=t.indexOf("#"),s=t.indexOf("/");return r===-1||s!==-1&&r>s||i!==-1&&r>i||o!==-1&&r>o||x6.test(t.slice(0,r))?t:""}const nr={name:"HeroCard",html:`<section className="hero-card">
  <p className="eyebrow">Fresh drop</p>
  <h1>Build UI from HTML, CSS, and JS.</h1>
  <p className="body">
    JammyJams converts your markup into a live React component you can keep refining.
  </p>
  <button className="cta" onClick={() => setIsOpen((open) => !open)}>
    {isOpen ? 'Hide details' : 'Show details'}
  </button>
  {isOpen && (
    <div className="panel">
      <strong>Live state works too.</strong>
      <span>The JavaScript editor can power interactions and derived UI.</span>
    </div>
  )}
</section>`,css:`.hero-card {
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  color: #f5f0e8;
  background:
    radial-gradient(circle at top left, rgba(255, 196, 109, 0.35), transparent 32%),
    linear-gradient(160deg, #1d3557, #0b132b 60%, #111827);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(3, 7, 18, 0.45);
}

.eyebrow {
  margin: 0;
  color: #ffd166;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero-card h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 0.95;
}

.body {
  margin: 0;
  max-width: 34rem;
  color: rgba(245, 240, 232, 0.78);
  line-height: 1.6;
}

.cta {
  width: fit-content;
  padding: 0.85rem 1.2rem;
  border: 0;
  border-radius: 999px;
  color: #111827;
  background: #ffd166;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.panel {
  display: grid;
  gap: 0.35rem;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
}`,js:"const [isOpen, setIsOpen] = useState(false);"},E6=[{id:"hero-card",name:"Hero Card",description:"Marketing card with a reveal panel and CTA.",html:nr.html,css:nr.css,js:nr.js},{id:"pricing-card",name:"Pricing Card",description:"Tiered pricing card with feature list and highlighted plan.",html:`<section className="pricing-card">
  <p className="pricing-badge">Popular</p>
  <h2>Studio Plan</h2>
  <p className="price">$24<span>/mo</span></p>
  <ul className="feature-list">
    <li>Unlimited projects</li>
    <li>Shared team library</li>
    <li>Advanced exports</li>
  </ul>
  <button className="pricing-cta" onClick={() => setSelected((value) => !value)}>
    {selected ? 'Selected' : 'Choose plan'}
  </button>
</section>`,css:`.pricing-card {
  display: grid;
  gap: 1rem;
  width: min(100%, 360px);
  padding: 1.5rem;
  border-radius: 24px;
  color: #f8fafc;
  background: linear-gradient(180deg, #0f172a, #1e293b);
  border: 1px solid rgba(148, 163, 184, 0.24);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.45);
}

.pricing-badge {
  margin: 0;
  width: fit-content;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  color: #111827;
  background: #f59e0b;
  font-size: 0.8rem;
  font-weight: 700;
}

.pricing-card h2,
.price {
  margin: 0;
}

.price {
  font-size: 2.8rem;
  font-weight: 700;
}

.price span {
  font-size: 1rem;
  color: rgba(226, 232, 240, 0.82);
}

.feature-list {
  display: grid;
  gap: 0.65rem;
  margin: 0;
  padding-left: 1.1rem;
  color: rgba(226, 232, 240, 0.82);
}

.pricing-cta {
  padding: 0.85rem 1rem;
  border: 0;
  border-radius: 14px;
  color: #111827;
  background: #f8fafc;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}`,js:"const [selected, setSelected] = useState(false);"},{id:"faq-accordion",name:"FAQ Accordion",description:"Single-open accordion for product or support FAQs.",html:`<section className="faq-card">
  <h2>Frequently asked questions</h2>
  {items.map((item, index) => (
    <button
      key={item.question}
      className={\`faq-item \${openIndex === index ? 'open' : ''}\`}
      onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
    >
      <div className="faq-question">
        <strong>{item.question}</strong>
        <span>{openIndex === index ? '−' : '+'}</span>
      </div>
      {openIndex === index && <p>{item.answer}</p>}
    </button>
  ))}
</section>`,css:`.faq-card {
  display: grid;
  gap: 0.9rem;
  width: min(100%, 720px);
  padding: 1.5rem;
  border-radius: 24px;
  background: #fff7ed;
  color: #431407;
}

.faq-card h2 {
  margin: 0 0 0.5rem;
}

.faq-item {
  display: grid;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 1.1rem;
  border: 1px solid rgba(194, 65, 12, 0.14);
  border-radius: 18px;
  text-align: left;
  background: rgba(255, 255, 255, 0.75);
  color: inherit;
  font: inherit;
  cursor: pointer;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.faq-item p {
  margin: 0;
  color: rgba(67, 20, 7, 0.9);
}

.faq-item.open {
  background: white;
  box-shadow: 0 16px 30px rgba(194, 65, 12, 0.08);
}`,js:`const items = [
  { question: 'Can I export this component?', answer: 'Yes. Use the player zip export to download a runnable React preview project.' },
  { question: 'Can I add hooks?', answer: 'Yes. The JavaScript panel supports React hooks and event handlers.' },
  { question: 'Can I style everything?', answer: 'Yes. The CSS panel is injected directly into the generated component output.' },
];
const [openIndex, setOpenIndex] = useState(0);`},{id:"stats-panel",name:"Stats Panel",description:"Dashboard summary with key metrics and trend badges.",html:`<section className="stats-panel">
  <header className="stats-header">
    <div>
      <p className="stats-label">Monthly performance</p>
      <h2>Growth snapshot</h2>
    </div>
    <button className="ghost-pill" onClick={() => setShowDelta((value) => !value)}>
      {showDelta ? 'Hide delta' : 'Show delta'}
    </button>
  </header>
  <div className="stats-grid">
    {stats.map((stat) => (
      <article key={stat.label} className="stat-card">
        <span>{stat.label}</span>
        <strong>{stat.value}</strong>
        {showDelta && <em>{stat.delta}</em>}
      </article>
    ))}
  </div>
</section>`,css:`.stats-panel {
  display: grid;
  gap: 1rem;
  width: min(100%, 760px);
  padding: 1.5rem;
  border-radius: 24px;
  color: #eff6ff;
  background: linear-gradient(145deg, #0f172a, #172554);
}

.stats-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: start;
}

.stats-label {
  margin: 0 0 0.35rem;
  color: #93c5fd;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.stats-header h2 {
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.9rem;
}

.stat-card {
  display: grid;
  gap: 0.35rem;
  padding: 1rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
}

.stat-card span,
.stat-card em {
  color: rgba(219, 234, 254, 0.88);
}

.stat-card strong {
  font-size: 1.8rem;
}

.ghost-pill {
  padding: 0.7rem 0.95rem;
  border: 0;
  border-radius: 999px;
  color: #0f172a;
  background: #bfdbfe;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}`,js:`const stats = [
  { label: 'Revenue', value: '$48K', delta: '+12.4%' },
  { label: 'Users', value: '18.2K', delta: '+8.1%' },
  { label: 'Conversion', value: '4.8%', delta: '+1.2%' },
];
const [showDelta, setShowDelta] = useState(true);`},{id:"testimonial-spotlight",name:"Testimonial Spotlight",description:"Quote card with rotating testimonials and author details.",html:`<section className="testimonial-card">
  <p className="testimonial-kicker">Customer story</p>
  <blockquote>“{testimonials[index].quote}”</blockquote>
  <div className="testimonial-author">
    <strong>{testimonials[index].name}</strong>
    <span>{testimonials[index].role}</span>
  </div>
  <button className="testimonial-button" onClick={() => setIndex((value) => (value + 1) % testimonials.length)}>
    Next testimonial
  </button>
</section>`,css:`.testimonial-card {
  display: grid;
  gap: 1rem;
  width: min(100%, 540px);
  padding: 1.75rem;
  border-radius: 24px;
  color: #1f2937;
  background: linear-gradient(180deg, #fef3c7, #ffffff);
}

.testimonial-kicker {
  margin: 0;
  color: #b45309;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.testimonial-card blockquote {
  margin: 0;
  font-size: 1.55rem;
  line-height: 1.35;
}

.testimonial-author {
  display: grid;
  gap: 0.2rem;
}

.testimonial-author span {
  color: rgba(31, 41, 55, 0.82);
}

.testimonial-button {
  width: fit-content;
  padding: 0.8rem 1rem;
  border: 0;
  border-radius: 14px;
  color: white;
  background: #111827;
  font: inherit;
  cursor: pointer;
}`,js:`const testimonials = [
  { name: 'Maya Chen', role: 'Product Lead at Northstar', quote: 'JammyJams cut our prototyping time in half and made handoff easier.' },
  { name: 'Jordan Pike', role: 'Design Engineer at Alley', quote: 'We could iterate on structure and polish without rebuilding components from scratch.' },
  { name: 'Rae Collins', role: 'Founder at Summerline', quote: 'The export flow made it easy to move from idea to a working React demo.' },
];
const [index, setIndex] = useState(0);`},{id:"signup-form",name:"Signup Form",description:"Email capture form with lightweight submit feedback.",html:`<form className="signup-form" onSubmit={handleSubmit}>
  <p className="form-kicker">Stay in the loop</p>
  <h2>Product updates, no spam.</h2>
  <div className="form-row">
    <input
      className="email-input"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      placeholder="you@example.com"
    />
    <button className="submit-button" type="submit">Join</button>
  </div>
  {message && <p className="form-message">{message}</p>}
</form>`,css:`.signup-form {
  display: grid;
  gap: 1rem;
  width: min(100%, 620px);
  padding: 1.5rem;
  border-radius: 24px;
  color: #f8fafc;
  background: linear-gradient(135deg, #111827, #1f2937);
}

.form-kicker,
.form-message {
  margin: 0;
}

.form-kicker {
  color: #34d399;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.signup-form h2 {
  margin: 0;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.email-input {
  flex: 1 1 260px;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.08);
}

.submit-button {
  padding: 0.9rem 1.1rem;
  border: 0;
  border-radius: 14px;
  color: #111827;
  background: #34d399;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.form-message {
  color: rgba(226, 232, 240, 0.82);
}`,js:`const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

function handleSubmit(event) {
  event.preventDefault();
  setMessage(email ? \`Thanks, \${email} is on the list.\` : 'Please enter an email address.');
}`},{id:"feature-grid",name:"Feature Grid",description:"Three-column feature section with icon badges and descriptions.",html:`<section className="feature-grid">
  <header className="feature-grid-header">
    <p className="section-kicker">Why teams choose JammyJams</p>
    <h2>Build faster with reusable component patterns.</h2>
  </header>
  <div className="feature-grid-cards">
    {features.map((feature) => (
      <article key={feature.title} className="feature-card">
        <span className="feature-icon">{feature.icon}</span>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </article>
    ))}
  </div>
</section>`,css:`.feature-grid {
  display: grid;
  gap: 1.25rem;
  width: min(100%, 960px);
  color: #e2e8f0;
}

.feature-grid-header {
  display: grid;
  gap: 0.5rem;
}

.section-kicker {
  margin: 0;
  color: #38bdf8;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.feature-grid-header h2,
.feature-card h3,
.feature-card p {
  margin: 0;
}

.feature-grid-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.feature-card {
  display: grid;
  gap: 0.7rem;
  padding: 1.2rem;
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.16);
}

.feature-card p {
  color: rgba(226, 232, 240, 0.84);
  line-height: 1.6;
}

.feature-icon {
  display: inline-grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 14px;
  background: rgba(56, 189, 248, 0.16);
}`,js:`const features = [
  { icon: '⚡', title: 'Live iteration', description: 'Change structure, styling, and behavior from one editing surface.' },
  { icon: '🧩', title: 'Reusable output', description: 'Generate React components that can be exported into a separate player app.' },
  { icon: '🎛', title: 'Template-driven', description: 'Start from proven component patterns instead of blank screens.' },
];`},{id:"navbar",name:"Navigation Bar",description:"Responsive navigation with a mobile menu toggle.",html:`<header className="nav-shell">
  <div className="nav-brand">JammyJams</div>
  <button className="nav-toggle" onClick={() => setIsMenuOpen((value) => !value)}>
    {isMenuOpen ? 'Close' : 'Menu'}
  </button>
  <nav className={\`nav-links \${isMenuOpen ? 'open' : ''}\`}>
    {links.map((link) => (
      <a key={link.label} href={link.href}>{link.label}</a>
    ))}
  </nav>
</header>`,css:`.nav-shell {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: min(100%, 980px);
  padding: 1rem 1.2rem;
  border-radius: 22px;
  color: #f8fafc;
  background: rgba(15, 23, 42, 0.92);
}

.nav-brand {
  font-weight: 700;
  letter-spacing: 0.04em;
}

.nav-toggle {
  padding: 0.65rem 0.9rem;
  border: 0;
  border-radius: 12px;
  color: #111827;
  background: #f8fafc;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-links a {
  color: rgba(248, 250, 252, 0.92);
  text-decoration: none;
}

@media (max-width: 640px) {
  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    padding-top: 0.5rem;
  }

  .nav-links.open {
    display: flex;
  }
}`,js:`const links = [
  { label: 'Features', href: '#' },
  { label: 'Templates', href: '#' },
  { label: 'Docs', href: '#' },
];
const [isMenuOpen, setIsMenuOpen] = useState(false);`},{id:"modal-dialog",name:"Modal Dialog",description:"Centered modal overlay with open and close actions.",html:`<section className="modal-demo">
  <button className="open-modal" onClick={() => setIsModalOpen(true)}>Open modal</button>
  {isModalOpen && (
    <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <p className="modal-kicker">Team invite</p>
        <h2>Share your workspace</h2>
        <p>Invite collaborators to review, edit, and export the component together.</p>
        <div className="modal-actions">
          <button className="secondary-action" onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button className="primary-action" onClick={() => setIsModalOpen(false)}>Send invite</button>
        </div>
      </div>
    </div>
  )}
</section>`,css:`.modal-demo {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 360px;
}

.open-modal,
.primary-action,
.secondary-action {
  border: 0;
  font: inherit;
  cursor: pointer;
}

.open-modal,
.primary-action {
  padding: 0.85rem 1rem;
  border-radius: 14px;
  color: #111827;
  background: #fbbf24;
  font-weight: 700;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.55);
  border-radius: 24px;
}

.modal-card {
  display: grid;
  gap: 1rem;
  width: min(100%, 440px);
  padding: 1.5rem;
  border-radius: 24px;
  color: #f8fafc;
  background: #0f172a;
}

.modal-kicker,
.modal-card h2,
.modal-card p {
  margin: 0;
}

.modal-kicker {
  color: #fbbf24;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.secondary-action {
  padding: 0.85rem 1rem;
  border-radius: 14px;
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.08);
}`,js:"const [isModalOpen, setIsModalOpen] = useState(false);"},{id:"profile-card",name:"Profile Card",description:"Compact profile panel with skills and follow interaction.",html:`<article className="profile-card">
  <div className="profile-top">
    <div className="avatar">AL</div>
    <div>
      <h2>Avery Lane</h2>
      <p>Frontend Engineer</p>
    </div>
  </div>
  <p className="profile-bio">
    Builds polished interfaces, design systems, and reusable component workflows.
  </p>
  <div className="skill-list">
    {skills.map((skill) => (
      <span key={skill}>{skill}</span>
    ))}
  </div>
  <button className="follow-button" onClick={() => setFollowing((value) => !value)}>
    {following ? 'Following' : 'Follow'}
  </button>
</article>`,css:`.profile-card {
  display: grid;
  gap: 1rem;
  width: min(100%, 360px);
  padding: 1.4rem;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #e2e8f0);
}

.profile-top {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.avatar {
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  color: white;
  background: #2563eb;
  font-weight: 700;
}

.profile-card h2,
.profile-card p {
  margin: 0;
}

.profile-bio {
  color: rgba(15, 23, 42, 0.74);
  line-height: 1.6;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-list span {
  padding: 0.4rem 0.65rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.1);
  font-size: 0.85rem;
}

.follow-button {
  width: fit-content;
  padding: 0.8rem 1rem;
  border: 0;
  border-radius: 14px;
  color: white;
  background: #0f172a;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}`,js:`const skills = ['React', 'Design Systems', 'Accessibility'];
const [following, setFollowing] = useState(false);`},{id:"notification-banner",name:"Notification Banner",description:"Dismissible announcement banner for app updates and alerts.",html:`<section className="banner-wrap">
  {visible && (
    <div className="banner-card">
      <div>
        <p className="banner-kicker">Product update</p>
        <strong>Component templates now support interactive examples.</strong>
      </div>
      <div className="banner-actions">
        <button className="banner-link">Read more</button>
        <button className="banner-dismiss" onClick={() => setVisible(false)}>Dismiss</button>
      </div>
    </div>
  )}
  {!visible && (
    <button className="banner-reset" onClick={() => setVisible(true)}>
      Show banner again
    </button>
  )}
</section>`,css:`.banner-wrap {
  display: grid;
  gap: 1rem;
  width: min(100%, 860px);
}

.banner-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.2rem;
  border-radius: 20px;
  color: #082f49;
  background: #e0f2fe;
}

.banner-kicker {
  margin: 0 0 0.25rem;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.banner-actions {
  display: flex;
  gap: 0.75rem;
}

.banner-link,
.banner-dismiss,
.banner-reset {
  border: 0;
  font: inherit;
  cursor: pointer;
}

.banner-link {
  color: #0369a1;
  background: transparent;
}

.banner-dismiss,
.banner-reset {
  padding: 0.75rem 0.95rem;
  border-radius: 12px;
  color: white;
  background: #0369a1;
}`,js:"const [visible, setVisible] = useState(true);"}],N6="useEffect, useMemo, useRef, useState",D1={useEffect:Ae.useEffect,useMemo:Ae.useMemo,useState:Ae.useState},Vo=[{id:"components",title:"Components and JSX",summary:"How React components are structured and how JSX maps UI to functions.",markdown:`## What a component is

A React component is usually a function that receives props and returns JSX.

## Why JSX matters

JSX looks like HTML, but it compiles into JavaScript. That means you can mix structure and dynamic values:

\`\`\`jsx
function Hero({ title }) {
  return <h1>{title}</h1>;
}
\`\`\`

## Practical rules

- Keep components focused on one job.
- Split large UI blocks into smaller components when reuse or readability starts to suffer.
- Return a single parent element, a fragment, or an array.
- Use \`className\`, \`htmlFor\`, and camelCase event names like \`onClick\`.
`},{id:"props",title:"Props and Data Flow",summary:"How data enters a component and how to keep components reusable.",markdown:`## Props are inputs

Props let one component render different content without duplicating markup.

\`\`\`jsx
function PricingCard({ title, price, features }) {
  return (
    <section>
      <h2>{title}</h2>
      <strong>{price}</strong>
      <ul>
        {features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
    </section>
  );
}
\`\`\`

## Data flow

React data flow is usually top-down:

- Parent components pass data into children.
- Children notify parents through callbacks like \`onSave\`.
- Prefer explicit prop names over generic \`data\` objects when possible.
`},{id:"state",title:"State and Re-renders",summary:"What belongs in state and how updates affect rendering.",markdown:`## When state is appropriate

State is for values that change over time and should trigger a re-render.

Examples:

- open and closed panels
- selected tabs
- loading state
- form input values

## Good state shape

\`\`\`jsx
const [isOpen, setIsOpen] = useState(false);
\`\`\`

Use the updater form when the next value depends on the previous one:

\`\`\`jsx
setCount((count) => count + 1);
\`\`\`

Avoid storing values you can derive from other state or props.
`},{id:"events",title:"Events and User Interaction",summary:"How to wire click handlers, inputs, and interaction logic.",markdown:`## Event handlers

React uses camelCase event props:

- \`onClick\`
- \`onChange\`
- \`onSubmit\`

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\`

## Guidance

- Pass a function, not the result of a function call.
- Prefer state-driven interaction instead of querying the DOM manually.
- Extract large handlers into named functions when JSX gets noisy.
`},{id:"conditional-rendering",title:"Conditional Rendering",summary:"How to show and hide parts of the UI cleanly.",markdown:`## Common patterns

Use boolean checks for optional sections:

\`\`\`jsx
{isOpen && <Panel />}
\`\`\`

Use ternaries for mutually exclusive branches:

\`\`\`jsx
{loading ? <Spinner /> : <Results />}
\`\`\`

## Keep it readable

- Avoid deeply nested ternaries.
- Move complex conditions into helper variables.
- Prefer meaningful states like \`status === "success"\` over vague flag combinations.
`},{id:"lists",title:"Lists and Keys",summary:"How to render collections without unstable UI behavior.",markdown:`## Rendering lists

\`\`\`jsx
{items.map((item) => (
  <li key={item.id}>{item.label}</li>
))}
\`\`\`

## Why keys matter

Keys help React match items between renders. Use stable identifiers such as:

- database IDs
- slugs
- persistent names

Avoid array indexes when the list can be reordered or filtered.
`},{id:"effects",title:"Effects and Side Effects",summary:"When useEffect is needed and when it is not.",markdown:`## What effects are for

\`useEffect\` is for synchronizing with systems outside React:

- timers
- event listeners
- subscriptions
- fetch calls

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log('tick');
  }, 1000);

  return () => clearInterval(id);
}, []);
\`\`\`

## What effects are not for

Do not use effects to compute values that can be calculated during render.
`},{id:"composition",title:"Composition Patterns",summary:"How to build larger UIs from smaller pieces.",markdown:`## Composition over inheritance

React works best when larger screens are assembled from smaller pieces.

\`\`\`jsx
function Page() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureGrid />
      <Footer />
    </>
  );
}
\`\`\`

## Practical advice

- Extract repeated UI patterns into components.
- Avoid abstracting too early.
- Separate layout concerns from interaction-heavy pieces when possible.
`},{id:"styling",title:"Styling and CSS Strategy",summary:"How to structure CSS so components stay readable and portable.",markdown:`## Component-friendly CSS

Prefer semantic class names:

- \`hero-card\`
- \`panel-title\`
- \`cta\`

## Strong defaults

- Use grid and flexbox intentionally.
- Prefer \`gap\` over scattered margins for layout spacing.
- Keep CSS close to the component structure.
- Avoid deep global selectors unless they are deliberate.

\`\`\`css
.hero-card {
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
}
\`\`\`
`}];function T6(t){const r=t.replace(/[^a-zA-Z0-9_$]/g,"");return(/^[A-Za-z_$]/.test(r)?r:`Component${r}`)||"GeneratedComponent"}function R1(t){const r=t.toLowerCase();return/(chart|graph|table|ledger|sparkline|analytics|report|metrics plot|data)/.test(r)?"Data":/(pagination|tabs?|nav|navigation|pager|segmented)/.test(r)?"Navigation":/(button|cta|toggle|switch|slider|keypad|toolbar|selector|dropdown|chip|controls?)/.test(r)?"Actions":/(input|signup|login|search|form|command)/.test(r)?"Forms":/(spinner|loader|progress|status|alert|notification|toast|ring)/.test(r)?"Feedback":/(footer)/.test(r)?"Footers":/(hero|feature|pricing|testimonial|team|timeline|stats|metric|faq|banner)/.test(r)?"Sections":/(modal|profile|card|panel|dock|grid|layout|wall|board)/.test(r)?"Layouts":"Components"}function z6({name:t,html:r,js:i,styleId:o}){return`
function ${t}() {
  ${i}

  return (
    <>
      <style>{\`${o?`.${o} { display: contents; }
`:""}\`}</style>
      <div className="${o}">
        ${r}
      </div>
    </>
  );
}

render(<${t} />);
`}function O6(t,r){function i(u){return u.split(",").map(d=>{const f=d.trim();return f&&`.${r} ${f}`}).join(", ")}function o(u,d){let f=0;for(let m=d;m<u.length;m+=1)if(u[m]==="{")f+=1;else if(u[m]==="}"&&(f-=1,f===0))return m;return u.length-1}function s(u){let d="",f=0;for(;f<u.length;){const m=u.indexOf("{",f);if(m===-1){d+=u.slice(f);break}const h=u.slice(f,m),v=o(u,m),g=u.slice(m+1,v),x=h.trim();x.startsWith("@media")||x.startsWith("@supports")?d+=`${h}{${s(g)}}`:x.startsWith("@keyframes")?d+=`${h}{${g}}`:d+=`${i(h)} {${g}}`,f=v+1}return d}return s(t)}function $6(t,r){const i=O6(t.css,r);return`
function TemplateCardPreview() {
  ${t.js}

  return (
    <>
      <style>{\`${i.replace(/`/g,"\\`")}\`}</style>
      <div className="${r}">
        ${t.html}
      </div>
    </>
  );
}

render(<TemplateCardPreview />);
`}function j6({name:t,html:r,css:i,js:o,inlineStyles:s}){const u=T6(t),d=`${u}.css`,f=`import React, { ${N6} } from 'react';
${s?"":`import './${d}';
`}

export default function ${u}() {
  ${o}

  return (
    ${s?`<>
      <style>{\`${i.replace(/`/g,"\\`")}\`}</style>
      ${r}
    </>`:r}
  );
}
`;return{componentName:u,source:f,cssFileName:d,cssSource:i}}function M6({componentName:t,source:r,cssFileName:i,cssSource:o,inlineStyles:s}){const u={name:`${t.toLowerCase()}-player`,private:!0,version:"1.0.0",type:"module",scripts:{player:"vite",build:"vite build"},dependencies:{react:"^19.1.1","react-dom":"^19.1.1"},devDependencies:{"@vitejs/plugin-react":"^5.0.0",vite:"^7.1.3"}};return{"package.json":`${JSON.stringify(u,null,2)}
`,"index.html":`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${t} Player</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"><\/script>
  </body>
</html>
`,"vite.config.js":`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
`,"src/main.jsx":`import React from 'react'
import ReactDOM from 'react-dom/client'
import ${t} from './${t}.jsx'
import './player.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="player-shell">
      <${t} />
    </div>
  </React.StrictMode>,
)
`,[`src/${t}.jsx`]:`${r}
`,...s?{}:{[`src/${i}`]:`${o}
`},"src/player.css":`.player-shell {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at top, rgba(245, 158, 11, 0.18), transparent 28%),
    linear-gradient(180deg, #09111d, #101826 42%, #171f2d);
  font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
}
`,"README.md":`# ${t} player

## Run locally

1. npm install
2. npm run player
`}}const L1=[{id:"amber",name:"Amber",bg:"#1f2937",surface:"#111827",text:"#f8fafc",muted:"rgba(248,250,252,0.82)",accent:"#f59e0b"},{id:"ocean",name:"Ocean",bg:"#082f49",surface:"#0f172a",text:"#ecfeff",muted:"rgba(236,254,255,0.84)",accent:"#22d3ee"},{id:"mint",name:"Mint",bg:"#052e2b",surface:"#0f3d3a",text:"#ecfdf5",muted:"rgba(236,253,245,0.84)",accent:"#34d399"},{id:"rose",name:"Rose",bg:"#4c0519",surface:"#881337",text:"#fff1f2",muted:"rgba(255,241,242,0.84)",accent:"#fb7185"},{id:"violet",name:"Violet",bg:"#2e1065",surface:"#4c1d95",text:"#f5f3ff",muted:"rgba(245,243,255,0.82)",accent:"#a78bfa"},{id:"slate",name:"Slate",bg:"#0f172a",surface:"#1e293b",text:"#e2e8f0",muted:"rgba(226,232,240,0.82)",accent:"#94a3b8"},{id:"sunset",name:"Sunset",bg:"#7c2d12",surface:"#c2410c",text:"#fff7ed",muted:"rgba(255,247,237,0.86)",accent:"#fdba74"},{id:"forest",name:"Forest",bg:"#14532d",surface:"#166534",text:"#f0fdf4",muted:"rgba(240,253,244,0.84)",accent:"#86efac"},{id:"indigo",name:"Indigo",bg:"#1e1b4b",surface:"#312e81",text:"#eef2ff",muted:"rgba(238,242,255,0.83)",accent:"#818cf8"},{id:"sand",name:"Sand",bg:"#fafaf9",surface:"#ffffff",text:"#292524",muted:"rgba(41,37,36,0.8)",accent:"#ea580c"}],D6=[{id:"hero-banner",name:"Hero Banner",description:"Wide marketing banner with a headline and supporting copy.",preview:"hero",style:"Core UI",build:(t,r)=>({html:`<section className="hero-banner-template">
  <p className="kicker">${t.name} launch</p>
  <h1>Ship polished React UI faster.</h1>
  <p className="copy">Template set ${r+1} combines structure, interaction, and style into a reusable starting point.</p>
  <button className="cta" onClick={() => setExpanded((value) => !value)}>{expanded ? 'Hide details' : 'See details'}</button>
  {expanded && <div className="detail-card">Use this banner for launches, product pages, and feature reveals.</div>}
</section>`,css:`.hero-banner-template {
  display: grid;
  gap: 1rem;
  padding: 1.6rem;
  border-radius: 24px;
  color: ${t.text};
  background: linear-gradient(145deg, ${t.bg}, ${t.surface});
}
.hero-banner-template .kicker { margin: 0; color: ${t.accent}; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
.hero-banner-template h1, .hero-banner-template .copy { margin: 0; }
.hero-banner-template .copy { color: ${t.muted}; line-height: 1.6; }
.hero-banner-template .cta { width: fit-content; padding: 0.85rem 1rem; border: 0; border-radius: 999px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }
.hero-banner-template .detail-card { padding: 1rem; border-radius: 18px; background: rgba(255,255,255,0.08); }`,js:"const [expanded, setExpanded] = useState(false);"})},{id:"metric-card",name:"Metric Card",description:"Compact dashboard metric with trend toggle.",preview:"stats",style:"Core UI",build:(t,r)=>({html:`<section className="metric-template">
  <p className="metric-label">Quarter ${r+1}</p>
  <strong>${["32K","48K","12.4%","9.8K"][r%4]}</strong>
  <span className="metric-caption">{showTrend ? 'Trending up 12% vs last period' : 'Trend hidden'}</span>
  <button className="metric-button" onClick={() => setShowTrend((value) => !value)}>{showTrend ? 'Hide trend' : 'Show trend'}</button>
</section>`,css:`.metric-template { display: grid; gap: 0.7rem; width: min(100%, 320px); padding: 1.4rem; border-radius: 22px; color: ${t.text}; background: linear-gradient(180deg, ${t.surface}, ${t.bg}); }
.metric-label, .metric-caption { margin: 0; color: ${t.muted}; }
.metric-template strong { font-size: 2.4rem; }
.metric-button { width: fit-content; padding: 0.75rem 0.95rem; border: 0; border-radius: 14px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }`,js:"const [showTrend, setShowTrend] = useState(true);"})},{id:"feature-stack",name:"Feature Stack",description:"List of product features with icon markers.",preview:"list",style:"Core UI",build:t=>({html:`<section className="feature-stack-template">
  <h2>Everything your team needs</h2>
  {items.map((item) => (
    <article key={item.title} className="feature-row">
      <span className="feature-mark">{item.icon}</span>
      <div>
        <strong>{item.title}</strong>
        <p>{item.description}</p>
      </div>
    </article>
  ))}
</section>`,css:`.feature-stack-template { display: grid; gap: 0.9rem; width: min(100%, 620px); padding: 1.5rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.feature-stack-template h2, .feature-row p { margin: 0; }
.feature-row { display: grid; grid-template-columns: auto 1fr; gap: 0.8rem; padding: 0.95rem; border-radius: 18px; background: color-mix(in srgb, ${t.bg} 82%, white 18%); }
.feature-mark { display: grid; place-items: center; width: 2rem; height: 2rem; border-radius: 12px; color: ${t.bg}; background: ${t.accent}; }
.feature-row p { color: ${t.muted}; margin-top: 0.25rem; }`,js:`const items = [
  { icon: 'A', title: 'Fast export', description: 'Ship preview-ready component files in seconds.' },
  { icon: 'B', title: 'Editable code', description: 'Adjust structure, styles, and interactions in one place.' },
  { icon: 'C', title: 'Template-driven', description: 'Start from a polished UI pattern instead of a blank canvas.' },
];`})},{id:"cta-strip",name:"CTA Strip",description:"Horizontal call-to-action band with button.",preview:"banner",style:"Core UI",build:t=>({html:`<section className="cta-strip-template">
  <div>
    <p className="strip-kicker">Ready to build</p>
    <h2>Start with a production-shaped component template.</h2>
  </div>
  <button className="strip-button" onClick={() => setClicked((value) => !value)}>{clicked ? 'Added' : 'Get started'}</button>
</section>`,css:`.cta-strip-template { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; width: min(100%, 860px); padding: 1.3rem 1.5rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(120deg, ${t.bg}, ${t.surface}); }
.cta-strip-template h2, .strip-kicker { margin: 0; }
.strip-kicker { color: ${t.accent}; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.35rem; }
.strip-button { padding: 0.9rem 1rem; border: 0; border-radius: 14px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }`,js:"const [clicked, setClicked] = useState(false);"})},{id:"testimonial-card",name:"Testimonial Card",description:"Customer quote panel with rotator.",preview:"quote",style:"Core UI",build:t=>({html:`<section className="testimonial-template">
  <blockquote>“{quotes[index].quote}”</blockquote>
  <div className="testimonial-meta">
    <strong>{quotes[index].name}</strong>
    <span>{quotes[index].role}</span>
  </div>
  <button className="quote-button" onClick={() => setIndex((value) => (value + 1) % quotes.length)}>Next</button>
</section>`,css:`.testimonial-template { display: grid; gap: 1rem; width: min(100%, 520px); padding: 1.5rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, ${t.surface}, ${t.bg}); }
.testimonial-template blockquote, .testimonial-meta span { margin: 0; }
.testimonial-template blockquote { font-size: 1.45rem; line-height: 1.4; }
.testimonial-meta { display: grid; gap: 0.2rem; }
.testimonial-meta span { color: ${t.muted}; }
.quote-button { width: fit-content; padding: 0.8rem 1rem; border: 0; border-radius: 14px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }`,js:`const quotes = [
  { name: 'Avery Cole', role: 'Design Lead', quote: 'The template library gave us a head start on every new concept.' },
  { name: 'Sam Ortega', role: 'Frontend Engineer', quote: 'We moved from rough HTML to a React-ready component in minutes.' },
  { name: 'Lina Park', role: 'Founder', quote: 'The export flow made it easy to demo ideas without rebuilding them.' },
];
const [index, setIndex] = useState(0);`})},{id:"pricing-column",name:"Pricing Column",description:"Focused pricing block with features and action.",preview:"pricing",style:"Core UI",build:t=>({html:`<section className="pricing-column-template">
  <p className="pricing-tier">Pro plan</p>
  <h2>$29<span>/month</span></h2>
  <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
  <button className="price-button" onClick={() => setChosen((value) => !value)}>{chosen ? 'Selected' : 'Choose plan'}</button>
</section>`,css:`.pricing-column-template { display: grid; gap: 1rem; width: min(100%, 340px); padding: 1.5rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; border: 1px solid color-mix(in srgb, ${t.accent} 20%, transparent); }
.pricing-tier, .pricing-column-template ul { margin: 0; color: ${t.muted}; }
.pricing-column-template h2 { margin: 0; font-size: 2.6rem; }
.pricing-column-template h2 span { font-size: 1rem; color: ${t.muted}; }
.pricing-column-template ul { display: grid; gap: 0.55rem; padding-left: 1.1rem; }
.price-button { padding: 0.85rem 1rem; border: 0; border-radius: 14px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }`,js:`const features = ['Unlimited exports', 'Shared component drafts', 'Priority previews'];
const [chosen, setChosen] = useState(false);`})},{id:"faq-stack",name:"FAQ Stack",description:"Simple FAQ accordion stack.",preview:"faq",style:"Core UI",build:t=>({html:`<section className="faq-stack-template">
  <h2>Common questions</h2>
  {questions.map((item, index) => (
    <button key={item.q} className="faq-stack-item" onClick={() => setOpen((value) => value === index ? -1 : index)}>
      <div className="faq-stack-question"><strong>{item.q}</strong><span>{open === index ? '−' : '+'}</span></div>
      {open === index && <p>{item.a}</p>}
    </button>
  ))}
</section>`,css:`.faq-stack-template { display: grid; gap: 0.8rem; width: min(100%, 720px); padding: 1.5rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.faq-stack-template h2, .faq-stack-item p { margin: 0; }
.faq-stack-item { display: grid; gap: 0.7rem; width: 100%; padding: 1rem; border: 0; border-radius: 18px; color: inherit; text-align: left; background: color-mix(in srgb, ${t.bg} 85%, white 15%); font: inherit; cursor: pointer; }
.faq-stack-question { display: flex; justify-content: space-between; gap: 1rem; }
.faq-stack-item p { color: ${t.muted}; }`,js:`const questions = [
  { q: 'Can I export the component?', a: 'Yes, export a React player zip or copy the generated source.' },
  { q: 'Can I edit interactions?', a: 'Yes, the JavaScript panel is part of the template workflow.' },
  { q: 'Can I replace the styling?', a: 'Yes, every template populates editable CSS.' },
];
const [open, setOpen] = useState(0);`})},{id:"team-card",name:"Team Card",description:"Profile spotlight with tags and follow action.",preview:"profile",style:"Core UI",build:(t,r)=>({html:`<article className="team-card-template">
  <div className="avatar">${["AL","JP","MK","RS"][r%4]}</div>
  <h2>${["Avery Lane","Jordan Pike","Mina Khan","Rae Stone"][r%4]}</h2>
  <p className="role">${["Frontend Engineer","Design Lead","Product Designer","UI Architect"][r%4]}</p>
  <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
  <button className="follow-action" onClick={() => setFollowing((value) => !value)}>{following ? 'Following' : 'Follow'}</button>
</article>`,css:`.team-card-template { display: grid; gap: 0.85rem; width: min(100%, 340px); padding: 1.4rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, ${t.surface}, ${t.bg}); }
.avatar { display: grid; place-items: center; width: 3rem; height: 3rem; border-radius: 50%; color: ${t.bg}; background: ${t.accent}; font-weight: 700; }
.team-card-template h2, .team-card-template p { margin: 0; }
.role { color: ${t.muted}; }
.tag-row { display: flex; flex-wrap: wrap; gap: 0.45rem; }
.tag-row span { padding: 0.35rem 0.6rem; border-radius: 999px; background: rgba(255,255,255,0.1); font-size: 0.82rem; }
.follow-action { width: fit-content; padding: 0.8rem 1rem; border: 0; border-radius: 14px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }`,js:`const tags = ['React', 'Systems', 'UX'];
const [following, setFollowing] = useState(false);`})},{id:"signup-panel",name:"Signup Panel",description:"Lead capture panel with a compact form.",preview:"form",style:"Core UI",build:t=>({html:`<form className="signup-panel-template" onSubmit={handleSubmit}>
  <h2>Get updates</h2>
  <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
  <button type="submit">Join list</button>
  {message && <p>{message}</p>}
</form>`,css:`.signup-panel-template { display: grid; gap: 0.85rem; width: min(100%, 420px); padding: 1.4rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.signup-panel-template h2, .signup-panel-template p { margin: 0; }
.signup-panel-template input { padding: 0.9rem 1rem; border: 1px solid rgba(255,255,255,0.14); border-radius: 14px; color: ${t.text}; background: rgba(255,255,255,0.08); }
.signup-panel-template button { padding: 0.85rem 1rem; border: 0; border-radius: 14px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }
.signup-panel-template p { color: ${t.muted}; }`,js:`const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
function handleSubmit(event) {
  event.preventDefault();
  setMessage(email ? \`Added \${email} to the list.\` : 'Please enter an email.');
}`})},{id:"tab-switcher",name:"Tab Switcher",description:"Two-tab content switcher with pane content.",preview:"tabs",style:"Core UI",build:t=>({html:`<section className="tab-switcher-template">
  <div className="tab-row">
    {tabs.map((tab) => (
      <button key={tab.id} className={activeTab === tab.id ? 'active' : ''} onClick={() => setActiveTab(tab.id)}>
        {tab.label}
      </button>
    ))}
  </div>
  <article className="tab-panel">{tabs.find((tab) => tab.id === activeTab)?.content}</article>
</section>`,css:`.tab-switcher-template { display: grid; gap: 1rem; width: min(100%, 620px); padding: 1.3rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.tab-row { display: flex; flex-wrap: wrap; gap: 0.6rem; }
.tab-row button { padding: 0.75rem 0.95rem; border: 0; border-radius: 12px; color: ${t.text}; background: rgba(255,255,255,0.08); font: inherit; cursor: pointer; }
.tab-row button.active { color: ${t.bg}; background: ${t.accent}; font-weight: 700; }
.tab-panel { padding: 1rem; border-radius: 18px; color: ${t.muted}; background: color-mix(in srgb, ${t.bg} 85%, white 15%); }`,js:`const tabs = [
  { id: 'overview', label: 'Overview', content: 'Use tabs to swap between related content without changing pages.' },
  { id: 'usage', label: 'Usage', content: 'This pattern works well for settings, documentation, and data views.' },
];
const [activeTab, setActiveTab] = useState('overview');`})},{id:"timeline-block",name:"Timeline Block",description:"Simple timeline for roadmap or onboarding flows.",preview:"timeline",style:"Core UI",build:t=>({html:`<section className="timeline-template">
  <h2>Launch steps</h2>
  {steps.map((step, index) => (
    <article key={step.title} className="timeline-item">
      <div className="timeline-dot">{index + 1}</div>
      <div>
        <strong>{step.title}</strong>
        <p>{step.copy}</p>
      </div>
    </article>
  ))}
</section>`,css:`.timeline-template { display: grid; gap: 0.9rem; width: min(100%, 720px); padding: 1.5rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, ${t.surface}, ${t.bg}); }
.timeline-template h2, .timeline-item p { margin: 0; }
.timeline-item { display: grid; grid-template-columns: auto 1fr; gap: 0.8rem; align-items: start; }
.timeline-dot { display: grid; place-items: center; width: 2rem; height: 2rem; border-radius: 50%; color: ${t.bg}; background: ${t.accent}; font-weight: 700; }
.timeline-item p { color: ${t.muted}; margin-top: 0.25rem; }`,js:`const steps = [
  { title: 'Choose a template', copy: 'Start from a proven component pattern.' },
  { title: 'Adjust the code', copy: 'Refine structure, styles, and interactions.' },
  { title: 'Export the result', copy: 'Copy the source or download a player zip.' },
];`})},{id:"button-showcase",name:"Button Showcase",description:"Custom action buttons with stateful variants.",preview:"buttons",style:"Core UI",build:t=>({html:`<section className="button-showcase-template">
  <h2>Custom buttons</h2>
  <div className="button-row">
    <button className="primary-button" onClick={() => setPressed('primary')}>Primary</button>
    <button className="secondary-button" onClick={() => setPressed('secondary')}>Secondary</button>
    <button className="ghost-button-alt" onClick={() => setPressed('ghost')}>Ghost</button>
  </div>
  <p className="button-status">Last pressed: {pressed}</p>
</section>`,css:`.button-showcase-template { display: grid; gap: 1rem; width: min(100%, 640px); padding: 1.4rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, ${t.surface}, ${t.bg}); }
.button-showcase-template h2, .button-status { margin: 0; }
.button-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.primary-button, .secondary-button, .ghost-button-alt { padding: 0.85rem 1rem; border-radius: 14px; border: 0; font: inherit; font-weight: 700; cursor: pointer; }
.primary-button { color: ${t.bg}; background: ${t.accent}; }
.secondary-button { color: ${t.text}; background: rgba(255,255,255,0.12); }
.ghost-button-alt { color: ${t.accent}; background: transparent; box-shadow: inset 0 0 0 1px ${t.accent}; }
.button-status { color: ${t.muted}; }`,js:"const [pressed, setPressed] = useState('none');"})},{id:"input-field-set",name:"Input Field Set",description:"Custom text inputs with validation-style feedback.",preview:"form",style:"Core UI",build:t=>({html:`<section className="input-set-template">
  <label>
    <span>Project name</span>
    <input value={projectName} onChange={(event) => setProjectName(event.target.value)} placeholder="JammyJams UI Kit" />
  </label>
  <label>
    <span>Team email</span>
    <input value={teamEmail} onChange={(event) => setTeamEmail(event.target.value)} placeholder="team@example.com" />
  </label>
  <p className="input-note">{teamEmail.includes('@') ? 'Looks good.' : 'Enter a valid email to continue.'}</p>
</section>`,css:`.input-set-template { display: grid; gap: 0.9rem; width: min(100%, 520px); padding: 1.4rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.input-set-template label { display: grid; gap: 0.4rem; }
.input-set-template span { color: ${t.muted}; font-size: 0.88rem; font-weight: 600; }
.input-set-template input { padding: 0.9rem 1rem; border-radius: 14px; border: 1px solid rgba(255,255,255,0.14); color: ${t.text}; background: color-mix(in srgb, ${t.bg} 84%, white 16%); }
.input-note { margin: 0; color: ${t.accent}; }`,js:`const [projectName, setProjectName] = useState('');
const [teamEmail, setTeamEmail] = useState('');`})},{id:"spinner-loader",name:"Spinner Loader",description:"Custom loading spinner with status text.",preview:"status",style:"Core UI",build:t=>({html:`<section className="spinner-template">
  <div className={\`spinner-ring \${paused ? 'paused' : ''}\`} />
  <p>{paused ? 'Paused' : 'Syncing component preview...'}</p>
  <button className="spinner-toggle" onClick={() => setPaused((value) => !value)}>{paused ? 'Resume' : 'Pause'}</button>
</section>`,css:`.spinner-template { display: grid; gap: 1rem; justify-items: center; width: min(100%, 320px); padding: 1.5rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.spinner-ring { width: 64px; height: 64px; border-radius: 50%; border: 6px solid rgba(255,255,255,0.12); border-top-color: ${t.accent}; animation: spin-preview 0.9s linear infinite; }
.spinner-ring.paused { animation-play-state: paused; }
.spinner-template p { margin: 0; color: ${t.muted}; }
.spinner-toggle { padding: 0.75rem 0.95rem; border: 0; border-radius: 14px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }
@keyframes spin-preview { to { transform: rotate(360deg); } }`,js:"const [paused, setPaused] = useState(false);"})},{id:"progress-bar",name:"Progress Bar",description:"Animated progress meter with increment controls.",preview:"status",style:"Core UI",build:t=>({html:`<section className="progress-template">
  <div className="progress-header">
    <strong>Export progress</strong>
    <span>{progress}%</span>
  </div>
  <div className="progress-track">
    <div className="progress-fill" style={{ width: \`\${progress}%\` }} />
  </div>
  <div className="progress-actions">
    <button onClick={() => setProgress((value) => Math.max(0, value - 10))}>-10</button>
    <button onClick={() => setProgress((value) => Math.min(100, value + 10))}>+10</button>
  </div>
</section>`,css:`.progress-template { display: grid; gap: 1rem; width: min(100%, 520px); padding: 1.4rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, ${t.surface}, ${t.bg}); }
.progress-header, .progress-actions { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.progress-track { height: 16px; border-radius: 999px; background: rgba(255,255,255,0.12); overflow: hidden; }
.progress-fill { height: 100%; border-radius: inherit; background: linear-gradient(90deg, ${t.accent}, color-mix(in srgb, ${t.accent} 55%, white 45%)); transition: width 180ms ease; }
.progress-actions button { padding: 0.7rem 0.9rem; border: 0; border-radius: 12px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }`,js:"const [progress, setProgress] = useState(60);"})},{id:"footer-section",name:"Footer Section",description:"Structured footer with links and newsletter area.",preview:"footer",style:"Core UI",build:t=>({html:`<footer className="footer-template">
  <div>
    <strong>JammyJams</strong>
    <p>Build and export React-ready UI faster.</p>
  </div>
  <nav className="footer-links">
    {links.map((link) => <a key={link} href="#">{link}</a>)}
  </nav>
  <button className="footer-action" onClick={() => setExpanded((value) => !value)}>{expanded ? 'Hide note' : 'Show note'}</button>
  {expanded && <small>Use this footer for docs, products, or marketing sites.</small>}
</footer>`,css:`.footer-template { display: grid; gap: 1rem; width: min(100%, 900px); padding: 1.4rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.footer-template p, .footer-template small { margin: 0; color: ${t.muted}; }
.footer-links { display: flex; flex-wrap: wrap; gap: 0.9rem; }
.footer-links a { color: ${t.text}; text-decoration: none; }
.footer-action { width: fit-content; padding: 0.8rem 1rem; border: 0; border-radius: 14px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }`,js:`const links = ['Product', 'Templates', 'Docs', 'Support'];
const [expanded, setExpanded] = useState(false);`})},{id:"badge-cluster",name:"Badge Cluster",description:"Set of custom badges and pill labels.",preview:"badges",style:"Core UI",build:t=>({html:`<section className="badge-template">
  <h2>Status badges</h2>
  <div className="badge-row">
    {badges.map((badge) => (
      <button key={badge} className={selected === badge ? 'active' : ''} onClick={() => setSelected(badge)}>
        {badge}
      </button>
    ))}
  </div>
  <p>Selected badge: {selected}</p>
</section>`,css:`.badge-template { display: grid; gap: 1rem; width: min(100%, 560px); padding: 1.4rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.badge-template h2, .badge-template p { margin: 0; }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.6rem; }
.badge-row button { padding: 0.45rem 0.75rem; border: 0; border-radius: 999px; color: ${t.text}; background: rgba(255,255,255,0.1); font: inherit; cursor: pointer; }
.badge-row button.active { color: ${t.bg}; background: ${t.accent}; font-weight: 700; }
.badge-template p { color: ${t.muted}; }`,js:`const badges = ['Beta', 'Stable', 'Internal', 'Deprecated'];
const [selected, setSelected] = useState('Beta');`})},{id:"alert-banner",name:"Alert Banner",description:"Dismissible inline alert with action buttons.",preview:"banner",style:"Core UI",build:t=>({html:`<section className="alert-template">
  {visible ? (
    <div className="alert-card">
      <div>
        <strong>Heads up</strong>
        <p>Component preview dependencies were updated successfully.</p>
      </div>
      <div className="alert-actions">
        <button className="alert-link">Details</button>
        <button className="alert-dismiss" onClick={() => setVisible(false)}>Dismiss</button>
      </div>
    </div>
  ) : (
    <button className="alert-reset" onClick={() => setVisible(true)}>Restore alert</button>
  )}
</section>`,css:`.alert-template { display: grid; gap: 1rem; width: min(100%, 780px); }
.alert-card { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 20px; color: ${t.text}; background: linear-gradient(135deg, ${t.surface}, ${t.bg}); }
.alert-card p { margin: 0.25rem 0 0; color: ${t.muted}; }
.alert-actions { display: flex; gap: 0.75rem; }
.alert-link, .alert-dismiss, .alert-reset { border: 0; font: inherit; cursor: pointer; }
.alert-link { color: ${t.accent}; background: transparent; }
.alert-dismiss, .alert-reset { padding: 0.75rem 0.9rem; border-radius: 12px; color: ${t.bg}; background: ${t.accent}; font-weight: 700; }`,js:"const [visible, setVisible] = useState(true);"})},{id:"dropdown-selector",name:"Dropdown Selector",description:"Styled select menu with value display.",preview:"form",style:"Core UI",build:t=>({html:`<section className="dropdown-template">
  <label>
    <span>Component category</span>
    <select value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  </label>
  <p>Current selection: {selectedOption}</p>
</section>`,css:`.dropdown-template { display: grid; gap: 0.85rem; width: min(100%, 420px); padding: 1.4rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.dropdown-template label { display: grid; gap: 0.45rem; }
.dropdown-template span, .dropdown-template p { color: ${t.muted}; }
.dropdown-template p { margin: 0; }
.dropdown-template select { padding: 0.9rem 1rem; border-radius: 14px; border: 1px solid rgba(255,255,255,0.14); color: ${t.text}; background: color-mix(in srgb, ${t.bg} 84%, white 16%); }`,js:`const options = ['Buttons', 'Forms', 'Status', 'Navigation'];
const [selectedOption, setSelectedOption] = useState(options[0]);`})},{id:"search-bar",name:"Search Bar",description:"Search input with filtered result list.",preview:"list",style:"Core UI",build:t=>({html:`<section className="search-template">
  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search UI patterns" />
  <div className="search-results">
    {results.filter((item) => item.toLowerCase().includes(query.toLowerCase())).map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>
</section>`,css:`.search-template { display: grid; gap: 0.85rem; width: min(100%, 560px); padding: 1.3rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, ${t.surface}, ${t.bg}); }
.search-template input { padding: 0.95rem 1rem; border-radius: 14px; border: 1px solid rgba(255,255,255,0.14); color: ${t.text}; background: rgba(255,255,255,0.08); }
.search-results { display: flex; flex-wrap: wrap; gap: 0.55rem; }
.search-results span { padding: 0.4rem 0.65rem; border-radius: 999px; color: ${t.bg}; background: ${t.accent}; font-size: 0.85rem; }`,js:`const results = ['Button Group', 'Input Field', 'Modal Dialog', 'Progress Bar', 'Footer Links'];
const [query, setQuery] = useState('');`})},{id:"pagination-row",name:"Pagination Row",description:"Page navigation control with next and previous actions.",preview:"controls",style:"Core UI",build:t=>({html:`<section className="pagination-template">
  <button onClick={() => setPage((value) => Math.max(1, value - 1))}>Previous</button>
  <div className="page-pills">
    {[1, 2, 3, 4, 5].map((item) => (
      <button key={item} className={page === item ? 'active' : ''} onClick={() => setPage(item)}>{item}</button>
    ))}
  </div>
  <button onClick={() => setPage((value) => Math.min(5, value + 1))}>Next</button>
</section>`,css:`.pagination-template { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; width: min(100%, 560px); padding: 1.2rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.pagination-template > button, .page-pills button { padding: 0.75rem 0.9rem; border: 0; border-radius: 12px; color: ${t.text}; background: rgba(255,255,255,0.08); font: inherit; cursor: pointer; }
.page-pills { display: flex; gap: 0.5rem; }
.page-pills button.active { color: ${t.bg}; background: ${t.accent}; font-weight: 700; }`,js:"const [page, setPage] = useState(2);"})},{id:"glass-command-bar",name:"Glass Command Bar",description:"Glass-morphic action bar with soft blur and layered controls.",preview:"controls",style:"Glassmorphic",build:t=>({html:`<section className="glass-command-template">
  <div className="glass-copy">
    <p className="glass-kicker">Quick actions</p>
    <strong>Launch a new component flow</strong>
  </div>
  <div className="glass-actions">
    <button onClick={() => setMode('preview')} className={mode === 'preview' ? 'active' : ''}>Preview</button>
    <button onClick={() => setMode('edit')} className={mode === 'edit' ? 'active' : ''}>Edit</button>
    <button onClick={() => setMode('export')} className={mode === 'export' ? 'active' : ''}>Export</button>
  </div>
</section>`,css:`.glass-command-template {
  position: relative;
  display: grid;
  gap: 1rem;
  overflow: hidden;
  width: min(100%, 760px);
  padding: 1.3rem;
  border-radius: 30px;
  color: ${t.text};
  background:
    radial-gradient(circle at top left, color-mix(in srgb, ${t.accent} 28%, transparent) 0%, transparent 34%),
    linear-gradient(145deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08));
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.26),
    0 24px 60px rgba(15, 23, 42, 0.22);
  backdrop-filter: blur(24px) saturate(140%);
}

.glass-command-template::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 85% 20%, rgba(255,255,255,0.18), transparent 18%),
    linear-gradient(180deg, rgba(255,255,255,0.12), transparent 48%);
  pointer-events: none;
}

.glass-copy {
  position: relative;
  display: grid;
  gap: 0.25rem;
}

.glass-kicker {
  margin: 0;
  color: ${t.accent};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.glass-actions {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.glass-actions button {
  padding: 0.85rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 18px;
  color: ${t.text};
  background: linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.24);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(18px);
}

.glass-actions button.active {
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 82%, white 18%), ${t.accent});
}`,js:"const [mode, setMode] = useState('preview');"})},{id:"neumorphic-controls",name:"Neumorphic Controls",description:"Soft raised controls with inset/raised depth changes.",preview:"controls",style:"Neumorphic",build:t=>({html:`<section className="neumorphic-template">
  <h2>Neumorphic controls</h2>
  <div className="neu-row">
    <button className={pressed ? 'pressed' : ''} onClick={() => setPressed((value) => !value)}>
      {pressed ? 'Pressed' : 'Press me'}
    </button>
    <div className="neu-chip">{pressed ? 'Active' : 'Idle'}</div>
  </div>
</section>`,css:`.neumorphic-template {
  --neu-base: color-mix(in srgb, ${t.surface} 10%, #e9eef4 90%);
  --neu-shadow-dark: color-mix(in srgb, ${t.bg} 10%, #b1bcc9 90%);
  --neu-shadow-light: rgba(255, 255, 255, 0.68);
  --neu-text: color-mix(in srgb, ${t.bg} 42%, #49566a 58%);
  display: grid;
  gap: 1rem;
  width: min(100%, 520px);
  padding: 1.6rem;
  border-radius: 30px;
  color: var(--neu-text);
  background: var(--neu-base);
  box-shadow:
    14px 14px 28px var(--neu-shadow-dark),
    -12px -12px 24px var(--neu-shadow-light);
}

.neumorphic-template h2 {
  margin: 0;
  text-shadow: 0 1px 0 rgba(255,255,255,0.35);
}

.neu-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.neu-row button,
.neu-chip {
  padding: 0.95rem 1.15rem;
  border: 0;
  border-radius: 18px;
  color: var(--neu-text);
  background: var(--neu-base);
  box-shadow:
    7px 7px 14px var(--neu-shadow-dark),
    -7px -7px 14px var(--neu-shadow-light);
  font: inherit;
  text-shadow: 0 1px 0 rgba(255,255,255,0.28);
}

.neu-row button {
  cursor: pointer;
  font-weight: 700;
}

.neu-row button.pressed {
  box-shadow:
    inset 4px 4px 10px var(--neu-shadow-dark),
    inset -4px -4px 10px var(--neu-shadow-light);
}

.neu-chip {
  color: ${t.accent};
}`,js:"const [pressed, setPressed] = useState(false);"})},{id:"skeuo-control-panel",name:"Skeuomorphic Control Panel",description:"Glossy controls with heavy depth and tactile buttons.",preview:"controls",style:"Skeuomorphic",build:t=>({html:`<section className="skeuo-template">
  <div className="skeuo-display">{power ? 'System online' : 'System offline'}</div>
  <div className="skeuo-actions">
    <button className={power ? 'on' : ''} onClick={() => setPower((value) => !value)}>
      {power ? 'Power on' : 'Power off'}
    </button>
    <button onClick={() => setMode((value) => (value === 'auto' ? 'manual' : 'auto'))}>
      {mode}
    </button>
  </div>
</section>`,css:`.skeuo-template {
  display: grid;
  gap: 1rem;
  width: min(100%, 520px);
  padding: 1.4rem;
  border-radius: 26px;
  color: ${t.text};
  background:
    repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 6px, rgba(0,0,0,0.02) 6px 12px),
    linear-gradient(180deg, color-mix(in srgb, ${t.surface} 72%, white 28%), color-mix(in srgb, ${t.bg} 82%, black 18%));
  border: 1px solid color-mix(in srgb, ${t.accent} 22%, transparent);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.35),
    inset 0 -3px 6px rgba(0,0,0,0.18),
    0 18px 45px rgba(15, 23, 42, 0.28);
}

.skeuo-display {
  padding: 1rem;
  border-radius: 18px;
  color: ${t.text};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04));
  box-shadow: inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -10px 18px rgba(0,0,0,0.2);
}

.skeuo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.skeuo-actions button {
  padding: 0.9rem 1.05rem;
  border: 0;
  border-radius: 16px;
  color: ${t.text};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 72%, white 28%), color-mix(in srgb, ${t.bg} 76%, black 24%));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.28),
    inset 0 -2px 6px rgba(0,0,0,0.16),
    0 8px 16px rgba(15,23,42,0.24);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.skeuo-actions button.on {
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 72%, white 28%), ${t.accent});
}`,js:`const [power, setPower] = useState(false);
const [mode, setMode] = useState('auto');`})},{id:"flat-toolbar",name:"Flat Toolbar",description:"Clean flat-design action toolbar with bold color blocking.",preview:"banner",style:"Flat",build:t=>({html:`<section className="flat-toolbar-template">
  <div className="flat-copy">
    <strong>Flat design actions</strong>
    <p>Simple surfaces, strong hierarchy, no depth effects.</p>
  </div>
  <div className="flat-actions">
    {actions.map((action) => (
      <button key={action} className={selected === action ? 'active' : ''} onClick={() => setSelected(action)}>
        {action}
      </button>
    ))}
  </div>
</section>`,css:`.flat-toolbar-template {
  display: grid;
  gap: 1rem;
  width: min(100%, 760px);
  padding: 1.25rem;
  border-radius: 18px;
  color: ${t.text};
  background: ${t.surface};
  box-shadow: inset 0 0 0 1px color-mix(in srgb, ${t.bg} 10%, transparent);
}

.flat-copy strong,
.flat-copy p {
  margin: 0;
}

.flat-copy p {
  margin-top: 0.3rem;
  color: ${t.muted};
  max-width: 42ch;
}

.flat-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.flat-actions button {
  min-height: 2.9rem;
  padding: 0.85rem 1rem;
  border: 0;
  border-radius: 12px;
  color: ${t.text};
  background: color-mix(in srgb, ${t.bg} 78%, white 22%);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: background 160ms ease;
}

.flat-actions button.active {
  color: ${t.bg};
  background: ${t.accent};
}`,js:`const actions = ['Create', 'Duplicate', 'Export'];
const [selected, setSelected] = useState('Create');`})},{id:"animated-orbit-loader",name:"Animated Orbit Loader",description:"Layered animated loader with orbital motion.",preview:"status",style:"Animated",build:t=>({html:`<section className="orbit-loader-template">
  <div className={\`orbit-shell \${running ? '' : 'paused'}\`}>
    <div className="orbit orbit-a" />
    <div className="orbit orbit-b" />
    <div className="orbit-core" />
  </div>
  <p>{running ? 'Generating preview assets…' : 'Animation paused'}</p>
  <button onClick={() => setRunning((value) => !value)}>{running ? 'Pause' : 'Play'}</button>
</section>`,css:`.orbit-loader-template {
  display: grid;
  gap: 1rem;
  justify-items: center;
  width: min(100%, 360px);
  padding: 1.5rem;
  border-radius: 26px;
  color: ${t.text};
  background: linear-gradient(180deg, ${t.surface}, ${t.bg});
}

.orbit-shell {
  position: relative;
  width: 96px;
  height: 96px;
}

.orbit {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid transparent;
  animation: orbit-spin 1.2s linear infinite;
}

.orbit-a {
  border-top-color: ${t.accent};
  border-right-color: color-mix(in srgb, ${t.accent} 60%, white 40%);
}

.orbit-b {
  inset: 12px;
  border-bottom-color: color-mix(in srgb, ${t.accent} 70%, white 30%);
  border-left-color: color-mix(in srgb, ${t.accent} 40%, white 60%);
  animation-direction: reverse;
  animation-duration: 1.8s;
}

.orbit-shell.paused .orbit {
  animation-play-state: paused;
}

.orbit-core {
  position: absolute;
  inset: 32px;
  border-radius: 50%;
  background: ${t.accent};
  box-shadow: 0 0 28px color-mix(in srgb, ${t.accent} 65%, transparent);
}

.orbit-loader-template p {
  margin: 0;
  color: ${t.muted};
}

.orbit-loader-template button {
  padding: 0.8rem 1rem;
  border: 0;
  border-radius: 14px;
  color: ${t.bg};
  background: ${t.accent};
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

@keyframes orbit-spin {
  to { transform: rotate(360deg); }
}`,js:"const [running, setRunning] = useState(true);"})},{id:"soft-progress-ring",name:"Soft Progress Ring",description:"Circular progress indicator with animated ring styling.",preview:"status",style:"Animated",build:t=>({html:`<section className="progress-ring-template">
  <div
    className={\`ring \${running ? 'running' : 'paused'}\`}
    style={{
      background: \`conic-gradient(\${paletteAccent} \${progress * 3.6}deg, rgba(255,255,255,0.12) 0deg)\`,
    }}
  >
    <div className="ring-inner">{progress}%</div>
  </div>
  <div className="ring-actions">
    <button onClick={() => setRunning((value) => !value)}>{running ? 'Pause' : 'Play'}</button>
    <button onClick={() => setProgress((value) => Math.max(0, value - 5))}>-5</button>
    <button onClick={() => setProgress((value) => Math.min(100, value + 5))}>+5</button>
  </div>
</section>`,css:`.progress-ring-template {
  display: grid;
  gap: 1rem;
  justify-items: center;
  width: min(100%, 360px);
  padding: 1.5rem;
  border-radius: 26px;
  color: ${t.text};
  background: ${t.surface};
}

.ring {
  position: relative;
  display: grid;
  place-items: center;
  width: 120px;
  height: 120px;
  padding: 12px;
  border-radius: 50%;
  box-shadow: 0 14px 28px rgba(15,23,42,0.2);
  transition: background 180ms ease, transform 180ms ease;
}

.ring.running {
  animation: ring-breathe 2.2s ease-in-out infinite;
}

.ring::after {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.22);
  opacity: 0.75;
}

.ring.paused {
  animation-play-state: paused;
}

.ring-inner {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: ${t.text};
  background: color-mix(in srgb, ${t.bg} 82%, white 18%);
  font-size: 1.35rem;
  font-weight: 700;
}

.ring-actions {
  display: flex;
  gap: 0.75rem;
}

.ring-actions button {
  padding: 0.75rem 0.95rem;
  border: 0;
  border-radius: 12px;
  color: ${t.bg};
  background: ${t.accent};
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

@keyframes ring-breathe {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 14px 28px rgba(15,23,42,0.16);
  }

  50% {
    transform: scale(1.04);
    box-shadow: 0 18px 34px rgba(15,23,42,0.24);
  }
}`,js:`const paletteAccent = '${t.accent}';
const [progress, setProgress] = useState(72);
const [running, setRunning] = useState(true);

useEffect(() => {
  if (!running) return undefined;

  const intervalId = window.setInterval(() => {
    setProgress((value) => (value >= 100 ? 0 : value + 1));
  }, 90);

  return () => window.clearInterval(intervalId);
}, [running]);`})},{id:"segmented-control",name:"Segmented Control",description:"Rounded segmented control for switching compact modes.",preview:"controls",style:"Core UI",build:t=>({html:`<section className="segmented-template">
  <div className="segmented-shell">
    {segments.map((segment) => (
      <button key={segment} className={active === segment ? 'active' : ''} onClick={() => setActive(segment)}>
        {segment}
      </button>
    ))}
  </div>
  <p>Active mode: {active}</p>
</section>`,css:`.segmented-template {
  display: grid;
  gap: 0.85rem;
  width: min(100%, 460px);
  padding: 1.3rem;
  border-radius: 24px;
  color: ${t.text};
  background: linear-gradient(180deg, ${t.surface}, ${t.bg});
}

.segmented-shell {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0.35rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
}

.segmented-shell button {
  padding: 0.7rem 0.95rem;
  border: 0;
  border-radius: 999px;
  color: ${t.text};
  background: transparent;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.segmented-shell button.active {
  color: ${t.bg};
  background: ${t.accent};
}

.segmented-template p {
  margin: 0;
  color: ${t.muted};
}`,js:`const segments = ['Design', 'Build', 'Export'];
const [active, setActive] = useState('Build');`})},{id:"mini-footer-links",name:"Mini Footer Links",description:"Alternative footer style with centered links and status note.",preview:"footer",style:"Core UI",build:t=>({html:`<footer className="mini-footer-template">
  <strong>JammyJams Studio</strong>
  <div className="mini-footer-links">
    {links.map((link) => <a key={link} href="#">{link}</a>)}
  </div>
  <button className="mini-footer-toggle" onClick={() => setStatusVisible((value) => !value)}>
    {statusVisible ? 'Hide status' : 'Show status'}
  </button>
  {statusVisible && <small>All systems are ready for export.</small>}
</footer>`,css:`.mini-footer-template {
  display: grid;
  justify-items: center;
  gap: 0.9rem;
  width: min(100%, 760px);
  padding: 1.4rem;
  border-radius: 22px;
  color: ${t.text};
  background: ${t.surface};
  text-align: center;
}

.mini-footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
}

.mini-footer-links a {
  color: ${t.text};
  text-decoration: none;
}

.mini-footer-toggle {
  padding: 0.75rem 0.95rem;
  border: 0;
  border-radius: 14px;
  color: ${t.bg};
  background: ${t.accent};
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.mini-footer-template small {
  color: ${t.muted};
}`,js:`const links = ['About', 'Templates', 'Resources', 'Status'];
const [statusVisible, setStatusVisible] = useState(true);`})},{id:"glass-login-card",name:"Glass Login Card",description:"Glass-morphic credential card with frosted controls.",preview:"form",style:"Glassmorphic",build:t=>({html:`<section className="glass-login-template">
  <h2>Welcome back</h2>
  <label>
    <span>Email</span>
    <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
  </label>
  <label>
    <span>Password</span>
    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" />
  </label>
  <button onClick={() => setSubmitted(true)}>Continue</button>
  {submitted && <p>Signed in as {email || 'guest'}.</p>}
</section>`,css:`.glass-login-template {
  position: relative;
  display: grid;
  gap: 0.95rem;
  overflow: hidden;
  width: min(100%, 430px);
  padding: 1.45rem;
  border-radius: 30px;
  color: ${t.text};
  background:
    radial-gradient(circle at top right, color-mix(in srgb, ${t.accent} 24%, transparent), transparent 32%),
    linear-gradient(150deg, rgba(255,255,255,0.2), rgba(255,255,255,0.06));
  border: 1px solid rgba(255,255,255,0.22);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.24),
    0 24px 55px rgba(15,23,42,0.2);
  backdrop-filter: blur(22px) saturate(145%);
}

.glass-login-template::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.1), transparent 38%);
  pointer-events: none;
}

.glass-login-template h2,
.glass-login-template p {
  position: relative;
  margin: 0;
}

.glass-login-template label {
  position: relative;
  display: grid;
  gap: 0.35rem;
}

.glass-login-template span {
  color: ${t.muted};
  font-size: 0.85rem;
  font-weight: 600;
}

.glass-login-template input {
  padding: 0.95rem 1rem;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 18px;
  color: ${t.text};
  background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
}

.glass-login-template button {
  position: relative;
  padding: 0.88rem 1rem;
  border: 0;
  border-radius: 18px;
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 84%, white 16%), ${t.accent});
  box-shadow: 0 14px 24px color-mix(in srgb, ${t.accent} 24%, transparent);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}`,js:`const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(false);`})},{id:"glass-stats-card",name:"Glass Stats Card",description:"Layered frosted metric card with accent chips.",preview:"stats",style:"Glassmorphic",build:t=>({html:`<section className="glass-stats-template">
  <div className="glass-stats-head">
    <div>
      <p>Velocity</p>
      <strong>{stats[active].value}</strong>
    </div>
    <span>{stats[active].delta}</span>
  </div>
  <div className="glass-stats-tabs">
    {stats.map((stat, index) => (
      <button key={stat.label} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
        {stat.label}
      </button>
    ))}
  </div>
</section>`,css:`.glass-stats-template {
  position: relative;
  display: grid;
  gap: 1rem;
  overflow: hidden;
  width: min(100%, 470px);
  padding: 1.4rem;
  border-radius: 30px;
  color: ${t.text};
  background:
    radial-gradient(circle at top left, color-mix(in srgb, ${t.accent} 24%, transparent), transparent 30%),
    linear-gradient(150deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
  border: 1px solid rgba(255,255,255,0.22);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.24),
    0 24px 55px rgba(15,23,42,0.2);
  backdrop-filter: blur(22px) saturate(145%);
}

.glass-stats-template::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.1), transparent 44%);
  pointer-events: none;
}

.glass-stats-head {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
}

.glass-stats-head p,
.glass-stats-head strong {
  margin: 0;
}

.glass-stats-head p {
  color: ${t.muted};
}

.glass-stats-head strong {
  font-size: 2.4rem;
}

.glass-stats-head span {
  padding: 0.42rem 0.7rem;
  border-radius: 999px;
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 84%, white 16%), ${t.accent});
  font-size: 0.82rem;
  font-weight: 700;
}

.glass-stats-tabs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.glass-stats-tabs button {
  padding: 0.72rem 0.92rem;
  border: 1px solid rgba(255,255,255,0.16);
  border-radius: 14px;
  color: ${t.text};
  background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
  font: inherit;
  cursor: pointer;
}

.glass-stats-tabs button.active {
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 84%, white 16%), ${t.accent});
}`,js:`const stats = [
  { label: 'Builds', value: '142', delta: '+12%' },
  { label: 'Exports', value: '61', delta: '+6%' },
  { label: 'Drafts', value: '18', delta: '+3%' },
];
const [active, setActive] = useState(0);`})},{id:"glass-upload-panel",name:"Glass Upload Panel",description:"Modern frosted upload panel with layered surfaces and restrained highlights.",preview:"form",style:"Glassmorphic",build:t=>({html:`<section className="glass-upload-template">
  <div className="glass-upload-head">
    <strong>Drop component files</strong>
    <span>{dragging ? 'Ready to receive' : 'Idle'}</span>
  </div>
  <button className={dragging ? 'dragging' : ''} onClick={() => setDragging((value) => !value)}>
    {dragging ? 'Release to import' : 'Drag HTML, CSS, or JS here'}
  </button>
  <small>Supports layered assets and quick draft imports.</small>
</section>`,css:`.glass-upload-template {
  position: relative;
  display: grid;
  gap: 1rem;
  overflow: hidden;
  width: min(100%, 500px);
  padding: 1.45rem;
  border-radius: 30px;
  color: ${t.text};
  background:
    radial-gradient(circle at top right, color-mix(in srgb, ${t.accent} 22%, transparent), transparent 28%),
    linear-gradient(150deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.24),
    0 22px 52px rgba(15,23,42,0.2);
  backdrop-filter: blur(22px) saturate(145%);
}

.glass-upload-head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: start;
}

.glass-upload-head span,
.glass-upload-template small {
  color: ${t.muted};
}

.glass-upload-template button {
  min-height: 170px;
  padding: 1.2rem;
  border: 1px dashed rgba(255,255,255,0.26);
  border-radius: 24px;
  color: ${t.text};
  background: linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.glass-upload-template button.dragging {
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 82%, white 18%), ${t.accent});
}`,js:"const [dragging, setDragging] = useState(false);"})},{id:"glass-player-dock",name:"Glass Player Dock",description:"Frosted media-style control dock with layered glass pills.",preview:"controls",style:"Glassmorphic",build:t=>({html:`<section className="glass-dock-template">
  <div className="dock-meta">
    <strong>Preview session</strong>
    <p>{playing ? 'Streaming live component preview' : 'Paused preview session'}</p>
  </div>
  <div className="dock-controls">
    <button onClick={() => setFrame((value) => Math.max(1, value - 1))}>◀</button>
    <button className="accent" onClick={() => setPlaying((value) => !value)}>{playing ? '❚❚' : '▶'}</button>
    <button onClick={() => setFrame((value) => value + 1)}>▶</button>
  </div>
  <small>Frame {frame}</small>
</section>`,css:`.glass-dock-template {
  position: relative;
  display: grid;
  gap: 1rem;
  overflow: hidden;
  width: min(100%, 520px);
  padding: 1.4rem;
  border-radius: 30px;
  color: ${t.text};
  background:
    radial-gradient(circle at top left, color-mix(in srgb, ${t.accent} 22%, transparent), transparent 30%),
    linear-gradient(150deg, rgba(255,255,255,0.2), rgba(255,255,255,0.06));
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.22),
    0 22px 52px rgba(15,23,42,0.2);
  backdrop-filter: blur(22px) saturate(145%);
}

.dock-meta p,
.glass-dock-template small {
  margin: 0.3rem 0 0;
  color: ${t.muted};
}

.dock-controls {
  display: inline-flex;
  gap: 0.7rem;
}

.dock-controls button {
  width: 3.3rem;
  height: 3.3rem;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 50%;
  color: ${t.text};
  background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.dock-controls button.accent {
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 82%, white 18%), ${t.accent});
}`,js:`const [playing, setPlaying] = useState(true);
const [frame, setFrame] = useState(12);`})},{id:"neumorphic-slider-card",name:"Neumorphic Slider Card",description:"Soft-depth control card with a tactile range slider.",preview:"controls",style:"Neumorphic",build:t=>({html:`<section className="neumorphic-slider-template">
  <h2>Depth control</h2>
  <div className="slider-value">{depth}%</div>
  <input type="range" min="0" max="100" value={depth} onChange={(event) => setDepth(event.target.value)} />
</section>`,css:`.neumorphic-slider-template {
  --neu-base: color-mix(in srgb, ${t.surface} 10%, #e9eef4 90%);
  --neu-shadow-dark: color-mix(in srgb, ${t.bg} 10%, #b1bcc9 90%);
  --neu-shadow-light: rgba(255,255,255,0.68);
  --neu-text: color-mix(in srgb, ${t.bg} 42%, #49566a 58%);
  display: grid;
  gap: 1rem;
  width: min(100%, 420px);
  padding: 1.5rem;
  border-radius: 30px;
  color: var(--neu-text);
  background: var(--neu-base);
  box-shadow:
    14px 14px 28px var(--neu-shadow-dark),
    -12px -12px 24px var(--neu-shadow-light);
}

.neumorphic-slider-template h2,
.slider-value {
  margin: 0;
  text-shadow: 0 1px 0 rgba(255,255,255,0.3);
}

.slider-value {
  display: inline-grid;
  place-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  color: ${t.accent};
  background: var(--neu-base);
  box-shadow:
    inset 4px 4px 10px var(--neu-shadow-dark),
    inset -4px -4px 10px var(--neu-shadow-light);
  font-size: 1.1rem;
  font-weight: 700;
}

.neumorphic-slider-template input {
  width: 100%;
  accent-color: ${t.accent};
}`,js:"const [depth, setDepth] = useState(58);"})},{id:"neumorphic-keypad",name:"Neumorphic Keypad",description:"Soft calculator-style button pad with tactile pressed states.",preview:"controls",style:"Neumorphic",build:t=>({html:`<section className="neumorphic-keypad-template">
  <div className="keypad-display">{lastKey}</div>
  <div className="keypad-grid">
    {keys.map((key) => (
      <button key={key} className={lastKey === key ? 'pressed' : ''} onClick={() => setLastKey(key)}>
        {key}
      </button>
    ))}
  </div>
</section>`,css:`.neumorphic-keypad-template {
  --neu-base: color-mix(in srgb, ${t.surface} 10%, #e9eef4 90%);
  --neu-shadow-dark: color-mix(in srgb, ${t.bg} 10%, #b1bcc9 90%);
  --neu-shadow-light: rgba(255,255,255,0.68);
  --neu-text: color-mix(in srgb, ${t.bg} 42%, #49566a 58%);
  display: grid;
  gap: 1rem;
  width: min(100%, 360px);
  padding: 1.4rem;
  border-radius: 30px;
  color: var(--neu-text);
  background: var(--neu-base);
  box-shadow:
    14px 14px 28px var(--neu-shadow-dark),
    -12px -12px 24px var(--neu-shadow-light);
}

.keypad-display {
  padding: 1rem;
  border-radius: 18px;
  background: var(--neu-base);
  box-shadow:
    inset 4px 4px 10px var(--neu-shadow-dark),
    inset -4px -4px 10px var(--neu-shadow-light);
  font-size: 1.2rem;
  font-weight: 700;
  text-shadow: 0 1px 0 rgba(255,255,255,0.32);
}

.keypad-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.keypad-grid button {
  padding: 0.9rem;
  border: 0;
  border-radius: 18px;
  color: var(--neu-text);
  background: var(--neu-base);
  box-shadow:
    7px 7px 14px var(--neu-shadow-dark),
    -7px -7px 14px var(--neu-shadow-light);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  text-shadow: 0 1px 0 rgba(255,255,255,0.28);
}

.keypad-grid button.pressed {
  color: ${t.accent};
  box-shadow:
    inset 4px 4px 10px var(--neu-shadow-dark),
    inset -4px -4px 10px var(--neu-shadow-light);
}`,js:`const keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
const [lastKey, setLastKey] = useState('7');`})},{id:"neumorphic-auth-form",name:"Neumorphic Auth Form",description:"Soft UI sign-in form with recessed fields, clear labels, and stronger contrast.",preview:"form",style:"Neumorphic",build:t=>({html:`<form className="neumorphic-auth-template" onSubmit={handleSubmit}>
  <h2>Studio access</h2>
  <label>
    <span>Email</span>
    <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="builder@jammyjams.dev" />
  </label>
  <label>
    <span>Password</span>
    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" />
  </label>
  <button type="submit">Sign in</button>
  {message && <p>{message}</p>}
</form>`,css:`.neumorphic-auth-template {
  --neu-base: color-mix(in srgb, ${t.surface} 10%, #e9eef4 90%);
  --neu-shadow-dark: color-mix(in srgb, ${t.bg} 10%, #b1bcc9 90%);
  --neu-shadow-light: rgba(255,255,255,0.68);
  --neu-text: color-mix(in srgb, ${t.bg} 48%, #445061 52%);
  display: grid;
  gap: 0.95rem;
  width: min(100%, 430px);
  padding: 1.5rem;
  border-radius: 30px;
  color: var(--neu-text);
  background: var(--neu-base);
  box-shadow:
    14px 14px 28px var(--neu-shadow-dark),
    -12px -12px 24px var(--neu-shadow-light);
}

.neumorphic-auth-template h2,
.neumorphic-auth-template p {
  margin: 0;
  text-shadow: 0 1px 0 rgba(255,255,255,0.3);
}

.neumorphic-auth-template label {
  display: grid;
  gap: 0.45rem;
}

.neumorphic-auth-template span {
  font-size: 0.84rem;
  font-weight: 700;
  color: color-mix(in srgb, var(--neu-text) 86%, white 14%);
}

.neumorphic-auth-template input {
  padding: 0.95rem 1rem;
  border: 0;
  border-radius: 18px;
  color: var(--neu-text);
  background: var(--neu-base);
  box-shadow:
    inset 6px 6px 12px var(--neu-shadow-dark),
    inset -6px -6px 12px var(--neu-shadow-light);
  font: inherit;
}

.neumorphic-auth-template button {
  padding: 0.9rem 1rem;
  border: 0;
  border-radius: 18px;
  color: ${t.accent};
  background: var(--neu-base);
  box-shadow:
    8px 8px 16px var(--neu-shadow-dark),
    -8px -8px 16px var(--neu-shadow-light);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  text-shadow: 0 1px 0 rgba(255,255,255,0.26);
}`,js:`const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');
function handleSubmit(event) {
  event.preventDefault();
  setMessage(email && password ? 'Signed in. Surface depth looks good.' : 'Enter both fields to continue.');
}`})},{id:"neumorphic-search-shelf",name:"Neumorphic Search Shelf",description:"Recessed search shelf with soft results chips and clearer tactile depth.",preview:"form",style:"Neumorphic",build:t=>({html:`<section className="neumorphic-search-template">
  <div className="neu-search-field">
    <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search template names" />
  </div>
  <div className="neu-search-results">
    {results.filter((item) => item.toLowerCase().includes(query.toLowerCase())).map((item) => (
      <button key={item} onClick={() => setQuery(item)}>{item}</button>
    ))}
  </div>
</section>`,css:`.neumorphic-search-template {
  --neu-base: color-mix(in srgb, ${t.surface} 10%, #e9eef4 90%);
  --neu-shadow-dark: color-mix(in srgb, ${t.bg} 10%, #b1bcc9 90%);
  --neu-shadow-light: rgba(255,255,255,0.68);
  --neu-text: color-mix(in srgb, ${t.bg} 48%, #445061 52%);
  display: grid;
  gap: 1rem;
  width: min(100%, 560px);
  padding: 1.4rem;
  border-radius: 30px;
  color: var(--neu-text);
  background: var(--neu-base);
  box-shadow:
    14px 14px 28px var(--neu-shadow-dark),
    -12px -12px 24px var(--neu-shadow-light);
}

.neu-search-field {
  padding: 0.2rem;
  border-radius: 20px;
  box-shadow:
    inset 6px 6px 12px var(--neu-shadow-dark),
    inset -6px -6px 12px var(--neu-shadow-light);
}

.neu-search-field input {
  width: 100%;
  padding: 0.95rem 1rem;
  border: 0;
  border-radius: 18px;
  color: var(--neu-text);
  background: transparent;
  font: inherit;
}

.neu-search-results {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.neu-search-results button {
  padding: 0.72rem 0.9rem;
  border: 0;
  border-radius: 999px;
  color: var(--neu-text);
  background: var(--neu-base);
  box-shadow:
    7px 7px 14px var(--neu-shadow-dark),
    -7px -7px 14px var(--neu-shadow-light);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}`,js:`const results = ['Hero Banner', 'Glass Login Card', 'FAQ Stack', 'Modal Dialog'];
const [query, setQuery] = useState('');`})},{id:"skeuo-media-controls",name:"Skeuomorphic Media Controls",description:"Tactile transport controls with glossy hardware styling.",preview:"controls",style:"Skeuomorphic",build:t=>({html:`<section className="skeuo-media-template">
  <div className="media-screen">{playing ? 'Now playing' : 'Paused'}</div>
  <div className="media-buttons">
    <button onClick={() => setTrack((value) => Math.max(1, value - 1))}>◀◀</button>
    <button className={playing ? 'accent' : ''} onClick={() => setPlaying((value) => !value)}>
      {playing ? '■' : '▶'}
    </button>
    <button onClick={() => setTrack((value) => value + 1)}>▶▶</button>
  </div>
  <small>Track {track}</small>
</section>`,css:`.skeuo-media-template {
  display: grid;
  gap: 1rem;
  width: min(100%, 440px);
  padding: 1.35rem;
  border-radius: 28px;
  color: ${t.text};
  background:
    repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 6px, rgba(0,0,0,0.02) 6px 12px),
    linear-gradient(180deg, color-mix(in srgb, ${t.surface} 72%, white 28%), color-mix(in srgb, ${t.bg} 84%, black 16%));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.34),
    inset 0 -3px 6px rgba(0,0,0,0.18),
    0 18px 45px rgba(15,23,42,0.28);
}

.media-screen {
  padding: 1rem;
  border-radius: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03));
  box-shadow:
    inset 0 2px 4px rgba(255,255,255,0.18),
    inset 0 -10px 18px rgba(0,0,0,0.24);
}

.media-buttons {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
}

.media-buttons button {
  width: 3.6rem;
  height: 3.6rem;
  border: 0;
  border-radius: 50%;
  color: ${t.text};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 76%, white 24%), color-mix(in srgb, ${t.bg} 80%, black 20%));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.3),
    inset 0 -2px 6px rgba(0,0,0,0.16),
    0 8px 14px rgba(15,23,42,0.22);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.media-buttons button.accent {
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 78%, white 22%), ${t.accent});
}

.skeuo-media-template small {
  color: ${t.muted};
}`,js:`const [playing, setPlaying] = useState(false);
const [track, setTrack] = useState(2);`})},{id:"skeuo-toggle-switch",name:"Skeuomorphic Toggle Switch",description:"Realistic toggle with raised track and glossy knob.",preview:"controls",style:"Skeuomorphic",build:t=>({html:`<section className="skeuo-switch-template">
  <div className="switch-copy">
    <strong>Hardware toggle</strong>
    <p>{enabled ? 'System enabled' : 'System disabled'}</p>
  </div>
  <button className={enabled ? 'enabled' : ''} onClick={() => setEnabled((value) => !value)}>
    <span className="switch-knob" />
  </button>
</section>`,css:`.skeuo-switch-template {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: min(100%, 520px);
  padding: 1.35rem;
  border-radius: 26px;
  color: ${t.text};
  background:
    repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 6px, rgba(0,0,0,0.02) 6px 12px),
    linear-gradient(180deg, color-mix(in srgb, ${t.surface} 70%, white 30%), ${t.bg});
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.35),
    inset 0 -3px 6px rgba(0,0,0,0.16),
    0 18px 45px rgba(15,23,42,0.28);
}

.switch-copy p {
  margin: 0.25rem 0 0;
  color: ${t.muted};
}

.skeuo-switch-template > button {
  position: relative;
  width: 5.6rem;
  height: 3rem;
  padding: 0.25rem;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 72%, white 28%), color-mix(in srgb, ${t.bg} 76%, black 24%));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.28),
    inset 0 -2px 6px rgba(0,0,0,0.18),
    0 8px 16px rgba(15,23,42,0.24);
  cursor: pointer;
}

.switch-knob {
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.55));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.55), 0 4px 10px rgba(15,23,42,0.2);
  transform: translateX(0);
  transition: transform 160ms ease;
}

.skeuo-switch-template > button.enabled {
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 72%, white 28%), ${t.accent});
}

.skeuo-switch-template > button.enabled .switch-knob {
  transform: translateX(2.6rem);
}`,js:"const [enabled, setEnabled] = useState(false);"})},{id:"skeuo-radio-deck",name:"Skeuomorphic Radio Deck",description:"Brushed-metal station deck with a realistic dial and physical preset buttons.",preview:"controls",style:"Skeuomorphic",build:t=>({html:`<section className="skeuo-radio-template">
  <div className="radio-dial">{station}</div>
  <div className="radio-presets">
    {stations.map((item) => (
      <button key={item} className={station === item ? 'active' : ''} onClick={() => setStation(item)}>
        {item}
      </button>
    ))}
  </div>
</section>`,css:`.skeuo-radio-template {
  display: grid;
  gap: 1rem;
  width: min(100%, 460px);
  padding: 1.35rem;
  border-radius: 28px;
  color: ${t.text};
  background:
    repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 6px, rgba(0,0,0,0.02) 6px 12px),
    linear-gradient(180deg, color-mix(in srgb, ${t.surface} 72%, white 28%), color-mix(in srgb, ${t.bg} 82%, black 18%));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.34),
    inset 0 -3px 6px rgba(0,0,0,0.18),
    0 18px 45px rgba(15,23,42,0.28);
}

.radio-dial {
  display: grid;
  place-items: center;
  width: 8rem;
  height: 8rem;
  margin: 0 auto;
  border-radius: 50%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 78%, white 22%), color-mix(in srgb, ${t.bg} 82%, black 18%));
  box-shadow:
    inset 0 2px 4px rgba(255,255,255,0.24),
    inset 0 -12px 22px rgba(0,0,0,0.24),
    0 12px 18px rgba(15,23,42,0.22);
}

.radio-presets {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.7rem;
}

.radio-presets button {
  padding: 0.85rem 0.8rem;
  border: 0;
  border-radius: 14px;
  color: ${t.text};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 78%, white 22%), color-mix(in srgb, ${t.bg} 82%, black 18%));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.24),
    inset 0 -2px 5px rgba(0,0,0,0.16),
    0 6px 12px rgba(15,23,42,0.2);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.radio-presets button.active {
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 78%, white 22%), ${t.accent});
}`,js:`const stations = ['87.9', '94.7', '101.2'];
const [station, setStation] = useState('94.7');`})},{id:"skeuo-search-tray",name:"Skeuomorphic Search Tray",description:"Inset search tray with metallic shell and physically pressable action key.",preview:"form",style:"Skeuomorphic",build:t=>({html:`<section className="skeuo-search-template">
  <label>
    <span>Command search</span>
    <div className="skeuo-search-field">
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find components and patterns" />
      <button onClick={() => setSubmitted(query || 'Searching...')}>Go</button>
    </div>
  </label>
  <small>{submitted}</small>
</section>`,css:`.skeuo-search-template {
  display: grid;
  gap: 0.9rem;
  width: min(100%, 560px);
  padding: 1.35rem;
  border-radius: 28px;
  color: ${t.text};
  background:
    repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 6px, rgba(0,0,0,0.02) 6px 12px),
    linear-gradient(180deg, color-mix(in srgb, ${t.surface} 72%, white 28%), color-mix(in srgb, ${t.bg} 82%, black 18%));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.34),
    inset 0 -3px 6px rgba(0,0,0,0.18),
    0 18px 45px rgba(15,23,42,0.28);
}

.skeuo-search-template span {
  display: block;
  margin-bottom: 0.45rem;
  color: ${t.muted};
  font-size: 0.84rem;
  font-weight: 700;
}

.skeuo-search-field {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.7rem;
  padding: 0.35rem;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.06));
  box-shadow:
    inset 0 2px 4px rgba(255,255,255,0.16),
    inset 0 -8px 14px rgba(0,0,0,0.2);
}

.skeuo-search-field input {
  padding: 0.9rem 1rem;
  border: 0;
  border-radius: 14px;
  color: ${t.text};
  background: rgba(0,0,0,0.12);
  font: inherit;
}

.skeuo-search-field button {
  padding: 0.9rem 1rem;
  border: 0;
  border-radius: 14px;
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 78%, white 22%), ${t.accent});
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.24),
    inset 0 -2px 5px rgba(0,0,0,0.16),
    0 6px 12px rgba(15,23,42,0.2);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.skeuo-search-template small {
  color: ${t.muted};
}`,js:`const [query, setQuery] = useState('');
const [submitted, setSubmitted] = useState('Search ready');`})},{id:"flat-settings-list",name:"Flat Settings List",description:"Crisp flat settings rows with active state emphasis.",preview:"list",style:"Flat",build:t=>({html:`<section className="flat-settings-template">
  {settings.map((item) => (
    <button key={item} className={selected === item ? 'active' : ''} onClick={() => setSelected(item)}>
      <strong>{item}</strong>
      <span>{selected === item ? 'Active' : 'Select'}</span>
    </button>
  ))}
</section>`,css:`.flat-settings-template {
  display: grid;
  gap: 0.75rem;
  width: min(100%, 620px);
  padding: 1.15rem;
  border-radius: 18px;
  color: ${t.text};
  background: ${t.surface};
  box-shadow: inset 0 0 0 1px color-mix(in srgb, ${t.bg} 10%, transparent);
}

.flat-settings-template button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  min-height: 3.1rem;
  padding: 1rem 1.05rem;
  border: 0;
  border-radius: 12px;
  color: ${t.text};
  background: color-mix(in srgb, ${t.bg} 86%, white 14%);
  font: inherit;
  cursor: pointer;
}

.flat-settings-template button.active {
  color: ${t.bg};
  background: ${t.accent};
}

.flat-settings-template span {
  font-size: 0.82rem;
  font-weight: 700;
}`,js:`const settings = ['Autosave', 'Team sharing', 'Version history'];
const [selected, setSelected] = useState('Autosave');`})},{id:"flat-input-toolbar",name:"Flat Input Toolbar",description:"Flat search and action toolbar for dashboards and apps.",preview:"form",style:"Flat",build:t=>({html:`<section className="flat-input-toolbar-template">
  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search components" />
  <button onClick={() => setQuery('')}>Clear</button>
  <button className="accent">Create</button>
</section>`,css:`.flat-input-toolbar-template {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: min(100%, 720px);
  padding: 1.05rem;
  border-radius: 16px;
  color: ${t.text};
  background: ${t.surface};
  box-shadow: inset 0 0 0 1px color-mix(in srgb, ${t.bg} 10%, transparent);
}

.flat-input-toolbar-template input {
  flex: 1 1 260px;
  min-height: 3rem;
  padding: 0.92rem 1rem;
  border: 1px solid color-mix(in srgb, ${t.bg} 20%, transparent);
  border-radius: 12px;
  color: ${t.text};
  background: white;
}

.flat-input-toolbar-template button {
  min-height: 3rem;
  padding: 0.92rem 1rem;
  border: 0;
  border-radius: 12px;
  color: ${t.text};
  background: color-mix(in srgb, ${t.bg} 86%, white 14%);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.flat-input-toolbar-template button.accent {
  color: ${t.bg};
  background: ${t.accent};
}`,js:"const [query, setQuery] = useState('');"})},{id:"flat-button-row",name:"Flat Button Row",description:"Minimal action row with flat fills and clean emphasis states.",preview:"buttons",style:"Flat",category:"Actions",build:t=>({html:`<section className="flat-button-row-template">
  {actions.map((action) => (
    <button key={action} className={selected === action ? 'active' : ''} onClick={() => setSelected(action)}>
      {action}
    </button>
  ))}
</section>`,css:`.flat-button-row-template {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: min(100%, 620px);
  padding: 0.95rem;
  border-radius: 16px;
  color: ${t.text};
  background: ${t.surface};
  box-shadow: inset 0 0 0 1px color-mix(in srgb, ${t.bg} 10%, transparent);
}

.flat-button-row-template button {
  min-height: 3rem;
  padding: 0.9rem 1rem;
  border: 0;
  border-radius: 12px;
  color: ${t.text};
  background: color-mix(in srgb, ${t.bg} 86%, white 14%);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.flat-button-row-template button.active {
  color: ${t.bg};
  background: ${t.accent};
}`,js:`const actions = ['Save', 'Preview', 'Export', 'Share'];
const [selected, setSelected] = useState('Preview');`})},{id:"flat-field-stack",name:"Flat Field Stack",description:"Clean stacked fields with flat surfaces and simple validation feedback.",preview:"form",style:"Flat",category:"Forms",build:t=>({html:`<section className="flat-field-template">
  <label>
    <span>Component title</span>
    <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="MarketingHero" />
  </label>
  <label>
    <span>Owner email</span>
    <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="team@example.com" />
  </label>
  <p>{email.includes('@') ? 'Ready to invite collaborators.' : 'Enter a valid email to continue.'}</p>
</section>`,css:`.flat-field-template {
  display: grid;
  gap: 0.85rem;
  width: min(100%, 460px);
  padding: 1.05rem;
  border-radius: 18px;
  color: ${t.text};
  background: ${t.surface};
  box-shadow: inset 0 0 0 1px color-mix(in srgb, ${t.bg} 10%, transparent);
}

.flat-field-template label {
  display: grid;
  gap: 0.45rem;
}

.flat-field-template span {
  font-size: 0.84rem;
  font-weight: 700;
  color: ${t.muted};
}

.flat-field-template input {
  min-height: 3rem;
  padding: 0.94rem 1rem;
  border: 1px solid color-mix(in srgb, ${t.bg} 20%, transparent);
  border-radius: 12px;
  color: ${t.text};
  background: white;
  font: inherit;
}

.flat-field-template p {
  margin: 0;
  color: ${t.accent};
}`,js:`const [title, setTitle] = useState('');
const [email, setEmail] = useState('');`})},{id:"flat-progress-strip",name:"Flat Progress Strip",description:"Straightforward flat progress strip with compact controls and crisp fill.",preview:"status",style:"Flat",category:"Feedback",build:t=>({html:`<section className="flat-progress-template">
  <div className="flat-progress-head">
    <strong>Publish progress</strong>
    <span>{progress}%</span>
  </div>
  <div className="flat-progress-track">
    <div className="flat-progress-fill" style={{ width: \`\${progress}%\` }} />
  </div>
  <div className="flat-progress-actions">
    <button onClick={() => setProgress((value) => Math.max(0, value - 10))}>Back</button>
    <button className="accent" onClick={() => setProgress((value) => Math.min(100, value + 10))}>Advance</button>
  </div>
</section>`,css:`.flat-progress-template {
  display: grid;
  gap: 0.9rem;
  width: min(100%, 520px);
  padding: 1.05rem;
  border-radius: 18px;
  color: ${t.text};
  background: ${t.surface};
  box-shadow: inset 0 0 0 1px color-mix(in srgb, ${t.bg} 10%, transparent);
}

.flat-progress-head,
.flat-progress-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.flat-progress-track {
  height: 0.95rem;
  border-radius: 999px;
  background: color-mix(in srgb, ${t.bg} 12%, white 88%);
  overflow: hidden;
}

.flat-progress-fill {
  height: 100%;
  background: ${t.accent};
  transition: width 180ms ease;
}

.flat-progress-actions button {
  min-height: 2.9rem;
  padding: 0.78rem 0.95rem;
  border: 0;
  border-radius: 12px;
  color: ${t.text};
  background: color-mix(in srgb, ${t.bg} 86%, white 14%);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.flat-progress-actions button.accent {
  color: ${t.bg};
  background: ${t.accent};
}`,js:"const [progress, setProgress] = useState(40);"})},{id:"animated-pulse-button",name:"Animated Pulse Button",description:"Call-to-action button with pulse animation and hover energy.",preview:"buttons",style:"Animated",build:t=>({html:`<section className="pulse-button-template">
  <button className={armed ? 'armed' : ''} onClick={() => setArmed((value) => !value)}>
    {armed ? 'Ready to launch' : 'Arm launch'}
  </button>
</section>`,css:`.pulse-button-template {
  display: grid;
  place-items: center;
  width: min(100%, 360px);
  padding: 1.4rem;
  border-radius: 24px;
  background: linear-gradient(180deg, ${t.surface}, ${t.bg});
}

.pulse-button-template button {
  padding: 1rem 1.25rem;
  border: 0;
  border-radius: 999px;
  color: ${t.bg};
  background: ${t.accent};
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 0 0 color-mix(in srgb, ${t.accent} 55%, transparent);
  animation: pulse-button 1.6s ease-out infinite;
}

.pulse-button-template button.armed {
  animation-duration: 1s;
}

@keyframes pulse-button {
  0% { transform: scale(1); box-shadow: 0 0 0 0 color-mix(in srgb, ${t.accent} 50%, transparent); }
  70% { transform: scale(1.03); box-shadow: 0 0 0 18px transparent; }
  100% { transform: scale(1); box-shadow: 0 0 0 0 transparent; }
}`,js:"const [armed, setArmed] = useState(false);"})},{id:"animated-tab-indicator",name:"Animated Tab Indicator",description:"Tabs with a sliding active state and animated transitions.",preview:"tabs",style:"Animated",build:t=>({html:`<section className="animated-tabs-template">
  <div className="animated-tab-row">
    {tabs.map((tab) => (
      <button key={tab.id} className={active === tab.id ? 'active' : ''} onClick={() => setActive(tab.id)}>
        {tab.label}
      </button>
    ))}
  </div>
  <article className="animated-tab-panel">{tabs.find((tab) => tab.id === active)?.content}</article>
</section>`,css:`.animated-tabs-template {
  display: grid;
  gap: 1rem;
  width: min(100%, 620px);
  padding: 1.3rem;
  border-radius: 24px;
  color: ${t.text};
  background: ${t.surface};
}

.animated-tab-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.animated-tab-row button {
  position: relative;
  padding: 0.75rem 0.95rem;
  border: 0;
  border-radius: 14px;
  color: ${t.text};
  background: rgba(255,255,255,0.08);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease;
}

.animated-tab-row button.active {
  color: ${t.bg};
  background: ${t.accent};
  transform: translateY(-2px);
}

.animated-tab-panel {
  padding: 1rem;
  border-radius: 18px;
  color: ${t.muted};
  background: color-mix(in srgb, ${t.bg} 85%, white 15%);
  animation: panel-in 180ms ease;
}

@keyframes panel-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}`,js:`const tabs = [
  { id: 'preview', label: 'Preview', content: 'See the component with its current structure and interactions.' },
  { id: 'styles', label: 'Styles', content: 'Inspect color, spacing, and the chosen visual language.' },
  { id: 'export', label: 'Export', content: 'Copy source or generate a player-ready bundle.' },
];
const [active, setActive] = useState('preview');`})},{id:"animated-notification-stack",name:"Animated Notification Stack",description:"Sliding toast-style notification card.",preview:"banner",style:"Animated",build:t=>({html:`<section className="animated-toast-template">
  <button className="toast-trigger" onClick={() => setVisible((value) => !value)}>
    {visible ? 'Hide toast' : 'Show toast'}
  </button>
  <div className={\`toast-card \${visible ? 'visible' : ''}\`}>
    <strong>Export complete</strong>
    <p>Your component bundle is ready to download.</p>
  </div>
</section>`,css:`.animated-toast-template {
  display: grid;
  gap: 1rem;
  width: min(100%, 520px);
  padding: 1.3rem;
  border-radius: 24px;
  color: ${t.text};
  background: linear-gradient(180deg, ${t.surface}, ${t.bg});
}

.toast-trigger {
  width: fit-content;
  padding: 0.8rem 1rem;
  border: 0;
  border-radius: 14px;
  color: ${t.bg};
  background: ${t.accent};
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.toast-card {
  display: grid;
  gap: 0.35rem;
  padding: 1rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.1);
  transform: translateY(14px);
  opacity: 0;
  transition: transform 180ms ease, opacity 180ms ease;
}

.toast-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.toast-card p {
  margin: 0;
  color: ${t.muted};
}`,js:"const [visible, setVisible] = useState(true);"})},{id:"animated-step-progress",name:"Animated Step Progress",description:"Stepper UI with animated active progress states.",preview:"timeline",style:"Animated",build:t=>({html:`<section className="step-progress-template">
  <div className="step-row">
    {steps.map((step, index) => (
      <button key={step} className={current >= index ? 'active' : ''} onClick={() => setCurrent(index)}>
        <span>{index + 1}</span>
        <strong>{step}</strong>
      </button>
    ))}
  </div>
</section>`,css:`.step-progress-template {
  display: grid;
  gap: 1rem;
  width: min(100%, 760px);
  padding: 1.3rem;
  border-radius: 24px;
  color: ${t.text};
  background: ${t.surface};
}

.step-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.75rem;
}

.step-row button {
  display: grid;
  justify-items: start;
  gap: 0.45rem;
  padding: 1rem;
  border: 0;
  border-radius: 18px;
  color: ${t.text};
  background: rgba(255,255,255,0.08);
  font: inherit;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease;
}

.step-row button span {
  display: inline-grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${t.bg};
  background: rgba(255,255,255,0.22);
  font-weight: 700;
}

.step-row button.active {
  color: ${t.bg};
  background: ${t.accent};
  transform: translateY(-3px);
}

.step-row button.active span {
  background: rgba(255,255,255,0.85);
}`,js:`const steps = ['Select', 'Edit', 'Preview', 'Export'];
const [current, setCurrent] = useState(1);`})},{id:"animated-accordion-panel",name:"Animated Accordion Panel",description:"Accordion with smooth content reveal and compact trigger motion.",preview:"faq",style:"Animated",build:t=>({html:`<section className="animated-accordion-template">
  {items.map((item, index) => (
    <button key={item.title} className={open === index ? 'active' : ''} onClick={() => setOpen((value) => value === index ? -1 : index)}>
      <div className="accordion-head">
        <strong>{item.title}</strong>
        <span>{open === index ? '−' : '+'}</span>
      </div>
      <div className={\`accordion-body \${open === index ? 'open' : ''}\`}>
        <p>{item.copy}</p>
      </div>
    </button>
  ))}
</section>`,css:`.animated-accordion-template {
  display: grid;
  gap: 0.75rem;
  width: min(100%, 620px);
  padding: 1.25rem;
  border-radius: 24px;
  color: ${t.text};
  background: linear-gradient(180deg, ${t.surface}, ${t.bg});
}

.animated-accordion-template > button {
  display: grid;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 18px;
  color: inherit;
  text-align: left;
  background: rgba(255,255,255,0.08);
  font: inherit;
  cursor: pointer;
}

.accordion-head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}

.accordion-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 180ms ease;
}

.accordion-body.open {
  grid-template-rows: 1fr;
}

.accordion-body p {
  overflow: hidden;
  margin: 0;
  color: ${t.muted};
}`,js:`const items = [
  { title: 'Live editing', copy: 'Animate reveals when explaining what changes with each panel.' },
  { title: 'Template previews', copy: 'Use motion to connect one state to the next instead of hard swaps.' },
  { title: 'Export flow', copy: 'Small reveal animations make process steps easier to follow.' },
];
const [open, setOpen] = useState(0);`})},{id:"animated-pill-nav",name:"Animated Pill Nav",description:"Segmented pill navigation with sliding active emphasis and soft transitions.",preview:"tabs",style:"Animated",build:t=>({html:`<section className="animated-pill-nav-template">
  <div className="pill-nav-row">
    {items.map((item) => (
      <button key={item} className={active === item ? 'active' : ''} onClick={() => setActive(item)}>
        {item}
      </button>
    ))}
  </div>
  <p>{active} panel selected.</p>
</section>`,css:`.animated-pill-nav-template {
  display: grid;
  gap: 0.9rem;
  width: min(100%, 560px);
  padding: 1.2rem;
  border-radius: 24px;
  color: ${t.text};
  background: ${t.surface};
}

.pill-nav-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.pill-nav-row button {
  padding: 0.78rem 0.95rem;
  border: 0;
  border-radius: 999px;
  color: ${t.text};
  background: rgba(255,255,255,0.08);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease;
}

.pill-nav-row button.active {
  color: ${t.bg};
  background: ${t.accent};
  transform: translateY(-2px);
}

.animated-pill-nav-template p {
  margin: 0;
  color: ${t.muted};
}`,js:`const items = ['Design', 'Code', 'Preview', 'Export'];
const [active, setActive] = useState('Code');`})},{id:"animated-signal-bars",name:"Animated Signal Bars",description:"Status bars with looping motion for loaders, dashboards, and music visualizers.",preview:"status",style:"Animated",build:t=>({html:`<section className="animated-bars-template">
  <div className={running ? 'bars running' : 'bars'}>
    {bars.map((bar) => <span key={bar} style={{ animationDelay: \`\${bar * 120}ms\` }} />)}
  </div>
  <button onClick={() => setRunning((value) => !value)}>{running ? 'Pause' : 'Resume'}</button>
</section>`,css:`.animated-bars-template {
  display: grid;
  justify-items: center;
  gap: 1rem;
  width: min(100%, 360px);
  padding: 1.35rem;
  border-radius: 24px;
  color: ${t.text};
  background: linear-gradient(180deg, ${t.surface}, ${t.bg});
}

.bars {
  display: flex;
  align-items: end;
  gap: 0.35rem;
  height: 82px;
}

.bars span {
  width: 0.75rem;
  height: 24px;
  border-radius: 999px;
  background: ${t.accent};
}

.bars.running span {
  animation: signal-bars 900ms ease-in-out infinite;
}

.animated-bars-template button {
  padding: 0.78rem 0.95rem;
  border: 0;
  border-radius: 14px;
  color: ${t.bg};
  background: ${t.accent};
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

@keyframes signal-bars {
  0%, 100% { height: 24px; opacity: 0.7; }
  50% { height: 76px; opacity: 1; }
}`,js:`const bars = [0, 1, 2, 3, 4];
const [running, setRunning] = useState(true);`})},{id:"animated-flip-counter",name:"Animated Flip Counter",description:"Counter card with animated state changes for stats and scoreboards.",preview:"stats",style:"Animated",build:t=>({html:`<section className="animated-counter-template">
  <div className="counter-value" key={count}>{count}</div>
  <div className="counter-actions">
    <button onClick={() => setCount((value) => Math.max(0, value - 1))}>−1</button>
    <button onClick={() => setCount((value) => value + 1)}>+1</button>
  </div>
</section>`,css:`.animated-counter-template {
  display: grid;
  gap: 1rem;
  justify-items: center;
  width: min(100%, 320px);
  padding: 1.35rem;
  border-radius: 24px;
  color: ${t.text};
  background: ${t.surface};
}

.counter-value {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 110px;
  border-radius: 18px;
  color: ${t.bg};
  background: ${t.accent};
  font-size: 3rem;
  font-weight: 800;
  animation: flip-in 220ms ease;
}

.counter-actions {
  display: flex;
  gap: 0.7rem;
}

.counter-actions button {
  padding: 0.78rem 0.95rem;
  border: 0;
  border-radius: 14px;
  color: ${t.text};
  background: rgba(255,255,255,0.08);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

@keyframes flip-in {
  from { transform: rotateX(-90deg); opacity: 0; }
  to { transform: rotateX(0deg); opacity: 1; }
}`,js:"const [count, setCount] = useState(18);"})},{id:"clay-action-buttons",name:"Clay Action Buttons",description:"Rounded claymorphism button set with raised and pressed states.",preview:"buttons",style:"Neumorphic",build:t=>({html:`<section className="clay-buttons-template">
  <h2>Clay action set</h2>
  <div className="clay-button-row">
    {actions.map((action) => (
      <button
        key={action}
        className={activeAction === action ? 'pressed' : ''}
        onClick={() => setActiveAction(action)}
      >
        {action}
      </button>
    ))}
  </div>
  <p>Selected: {activeAction}</p>
</section>`,css:`.clay-buttons-template {
  --clay-base: color-mix(in srgb, ${t.accent} 22%, #f7b98f 78%);
  --clay-shadow-dark: color-mix(in srgb, ${t.bg} 16%, rgba(123, 72, 36, 0.34) 84%);
  --clay-shadow-light: rgba(255,255,255,0.56);
  display: grid;
  gap: 1rem;
  width: min(100%, 620px);
  padding: 1.5rem;
  border-radius: 32px;
  color: #4c2817;
  background: linear-gradient(180deg, color-mix(in srgb, var(--clay-base) 92%, white 8%), var(--clay-base));
  box-shadow:
    18px 18px 32px rgba(124, 74, 44, 0.18),
    -10px -10px 24px rgba(255,255,255,0.42),
    inset 0 2px 0 rgba(255,255,255,0.32);
}

.clay-buttons-template h2,
.clay-buttons-template p {
  margin: 0;
}

.clay-button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.clay-button-row button {
  padding: 0.95rem 1.15rem;
  border: 0;
  border-radius: 22px;
  color: #4c2817;
  background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03)), var(--clay-base);
  box-shadow:
    10px 10px 18px rgba(124, 74, 44, 0.18),
    -6px -6px 14px rgba(255,255,255,0.4),
    inset 0 1px 0 rgba(255,255,255,0.3);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.clay-button-row button:hover {
  transform: translateY(-2px);
}

.clay-button-row button.pressed {
  color: white;
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 74%, white 26%), ${t.accent});
  box-shadow:
    inset 6px 6px 14px rgba(124, 74, 44, 0.18),
    inset -6px -6px 12px rgba(255,255,255,0.2);
}

.clay-buttons-template p {
  color: rgba(76,40,23,0.76);
  font-weight: 600;
}`,js:`const actions = ['Publish', 'Duplicate', 'Archive'];
const [activeAction, setActiveAction] = useState('Publish');`})},{id:"clay-input-panel",name:"Clay Input Panel",description:"Pillowy claymorphism form fields with clear focus and submit feedback.",preview:"form",style:"Neumorphic",build:t=>({html:`<form className="clay-input-template" onSubmit={handleSubmit}>
  <h2>Join the early access list</h2>
  <label>
    <span>Name</span>
    <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Rae Stone" />
  </label>
  <label>
    <span>Email</span>
    <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="rae@example.com" />
  </label>
  <button type="submit">Request invite</button>
  {message && <p>{message}</p>}
</form>`,css:`.clay-input-template {
  --clay-base: color-mix(in srgb, ${t.accent} 18%, #ffd6b8 82%);
  display: grid;
  gap: 0.95rem;
  width: min(100%, 430px);
  padding: 1.5rem;
  border-radius: 34px;
  color: #4a2616;
  background: linear-gradient(180deg, color-mix(in srgb, var(--clay-base) 92%, white 8%), var(--clay-base));
  box-shadow:
    18px 18px 32px rgba(124, 74, 44, 0.16),
    -10px -10px 24px rgba(255,255,255,0.42),
    inset 0 2px 0 rgba(255,255,255,0.34);
}

.clay-input-template h2,
.clay-input-template p {
  margin: 0;
}

.clay-input-template label {
  display: grid;
  gap: 0.45rem;
}

.clay-input-template span {
  font-size: 0.84rem;
  font-weight: 700;
  color: rgba(74,38,22,0.74);
}

.clay-input-template input {
  padding: 0.95rem 1rem;
  border: 0;
  border-radius: 18px;
  color: #4a2616;
  background: rgba(255,255,255,0.28);
  box-shadow:
    inset 6px 6px 12px rgba(124, 74, 44, 0.12),
    inset -6px -6px 12px rgba(255,255,255,0.42);
}

.clay-input-template button {
  padding: 0.9rem 1rem;
  border: 0;
  border-radius: 20px;
  color: white;
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 76%, white 24%), ${t.accent});
  box-shadow:
    10px 10px 18px rgba(124, 74, 44, 0.16),
    -6px -6px 14px rgba(255,255,255,0.34),
    inset 0 1px 0 rgba(255,255,255,0.24);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.clay-input-template p {
  color: rgba(74,38,22,0.78);
}`,js:`const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
function handleSubmit(event) {
  event.preventDefault();
  setMessage(name && email ? \`Invite requested for \${name}.\` : 'Fill out both fields to continue.');
}`})},{id:"clay-progress-pod",name:"Clay Progress Pod",description:"Soft progress pod with rounded fill and tactile controls.",preview:"status",style:"Neumorphic",build:t=>({html:`<section className="clay-progress-template">
  <div className="clay-progress-header">
    <strong>Upload progress</strong>
    <span>{progress}%</span>
  </div>
  <div className="clay-progress-track">
    <div className="clay-progress-fill" style={{ width: \`\${progress}%\` }} />
  </div>
  <div className="clay-progress-actions">
    <button onClick={() => setProgress((value) => Math.max(10, value - 15))}>Back</button>
    <button className="accent" onClick={() => setProgress((value) => Math.min(100, value + 15))}>Advance</button>
  </div>
</section>`,css:`.clay-progress-template {
  --clay-base: color-mix(in srgb, ${t.accent} 18%, #ffd8bf 82%);
  display: grid;
  gap: 1rem;
  width: min(100%, 520px);
  padding: 1.5rem;
  border-radius: 34px;
  color: #4a2616;
  background: linear-gradient(180deg, color-mix(in srgb, var(--clay-base) 92%, white 8%), var(--clay-base));
  box-shadow:
    18px 18px 32px rgba(124, 74, 44, 0.16),
    -10px -10px 24px rgba(255,255,255,0.42),
    inset 0 2px 0 rgba(255,255,255,0.34);
}

.clay-progress-header,
.clay-progress-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.clay-progress-track {
  height: 1.1rem;
  padding: 0.18rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.25);
  box-shadow:
    inset 6px 6px 12px rgba(124, 74, 44, 0.12),
    inset -6px -6px 12px rgba(255,255,255,0.42);
}

.clay-progress-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, color-mix(in srgb, ${t.accent} 68%, white 32%), ${t.accent});
  box-shadow: 0 4px 10px color-mix(in srgb, ${t.accent} 30%, transparent);
  transition: width 180ms ease;
}

.clay-progress-actions button {
  padding: 0.82rem 0.95rem;
  border: 0;
  border-radius: 18px;
  color: #4a2616;
  background: rgba(255,255,255,0.26);
  box-shadow:
    10px 10px 18px rgba(124, 74, 44, 0.14),
    -6px -6px 14px rgba(255,255,255,0.34),
    inset 0 1px 0 rgba(255,255,255,0.24);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.clay-progress-actions button.accent {
  color: white;
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 76%, white 24%), ${t.accent});
}`,js:"const [progress, setProgress] = useState(55);"})},{id:"clay-toggle-dock",name:"Clay Toggle Dock",description:"Rounded claymorphism toggles that feel like tactile hardware controls.",preview:"controls",style:"Neumorphic",build:t=>({html:`<section className="clay-toggle-template">
  <header>
    <h2>System toggles</h2>
    <p>Switch individual modules on and off.</p>
  </header>
  <div className="clay-toggle-list">
    {items.map((item) => (
      <button
        key={item}
        className={enabled[item] ? 'enabled' : ''}
        onClick={() => setEnabled((current) => ({ ...current, [item]: !current[item] }))}
      >
        <span>{item}</span>
        <strong>{enabled[item] ? 'On' : 'Off'}</strong>
      </button>
    ))}
  </div>
</section>`,css:`.clay-toggle-template {
  --clay-base: color-mix(in srgb, ${t.accent} 16%, #ffd9c2 84%);
  display: grid;
  gap: 1rem;
  width: min(100%, 560px);
  padding: 1.5rem;
  border-radius: 34px;
  color: #4a2616;
  background: linear-gradient(180deg, color-mix(in srgb, var(--clay-base) 92%, white 8%), var(--clay-base));
  box-shadow:
    18px 18px 32px rgba(124, 74, 44, 0.16),
    -10px -10px 24px rgba(255,255,255,0.42),
    inset 0 2px 0 rgba(255,255,255,0.34);
}

.clay-toggle-template h2,
.clay-toggle-template p {
  margin: 0;
}

.clay-toggle-template p {
  color: rgba(74,38,22,0.72);
}

.clay-toggle-list {
  display: grid;
  gap: 0.8rem;
}

.clay-toggle-list button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.95rem 1rem;
  border: 0;
  border-radius: 22px;
  color: #4a2616;
  background: rgba(255,255,255,0.26);
  box-shadow:
    10px 10px 18px rgba(124, 74, 44, 0.14),
    -6px -6px 14px rgba(255,255,255,0.34),
    inset 0 1px 0 rgba(255,255,255,0.24);
  font: inherit;
  cursor: pointer;
}

.clay-toggle-list button strong {
  padding: 0.32rem 0.65rem;
  border-radius: 999px;
  font-size: 0.82rem;
}

.clay-toggle-list button.enabled {
  box-shadow:
    inset 6px 6px 12px rgba(124, 74, 44, 0.14),
    inset -6px -6px 12px rgba(255,255,255,0.26);
}

.clay-toggle-list button.enabled strong {
  color: white;
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 76%, white 24%), ${t.accent});
}`,js:`const items = ['Preview sync', 'Autosave', 'Team comments'];
const [enabled, setEnabled] = useState({
  'Preview sync': true,
  Autosave: false,
  'Team comments': true,
});`})},{id:"clay-footer-bar",name:"Clay Footer Bar",description:"Rounded footer bar with clay buttons and raised link chips.",preview:"banner",style:"Neumorphic",build:t=>({html:`<footer className="clay-footer-template">
  <div>
    <strong>JammyJams Studio</strong>
    <p>Build, preview, and export tactile UI fast.</p>
  </div>
  <nav className="clay-footer-links">
    {links.map((link) => (
      <a key={link} href="#" onClick={(event) => event.preventDefault()}>{link}</a>
    ))}
  </nav>
  <button onClick={() => setSubscribed((value) => !value)}>
    {subscribed ? 'Subscribed' : 'Join updates'}
  </button>
</footer>`,css:`.clay-footer-template {
  --clay-base: color-mix(in srgb, ${t.accent} 16%, #ffd7c0 84%);
  display: grid;
  gap: 1rem;
  width: min(100%, 840px);
  padding: 1.5rem;
  border-radius: 36px;
  color: #4a2616;
  background: linear-gradient(180deg, color-mix(in srgb, var(--clay-base) 92%, white 8%), var(--clay-base));
  box-shadow:
    18px 18px 32px rgba(124, 74, 44, 0.16),
    -10px -10px 24px rgba(255,255,255,0.42),
    inset 0 2px 0 rgba(255,255,255,0.34);
}

.clay-footer-template p {
  margin: 0.3rem 0 0;
  color: rgba(74,38,22,0.72);
}

.clay-footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.clay-footer-links a {
  padding: 0.55rem 0.85rem;
  border-radius: 16px;
  color: #4a2616;
  text-decoration: none;
  background: rgba(255,255,255,0.26);
  box-shadow:
    8px 8px 16px rgba(124, 74, 44, 0.14),
    -5px -5px 12px rgba(255,255,255,0.34),
    inset 0 1px 0 rgba(255,255,255,0.24);
  font-weight: 600;
}

.clay-footer-template button {
  width: fit-content;
  padding: 0.88rem 1.05rem;
  border: 0;
  border-radius: 20px;
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 76%, white 24%), ${t.accent});
  box-shadow:
    10px 10px 18px rgba(124, 74, 44, 0.16),
    -6px -6px 14px rgba(255,255,255,0.34),
    inset 0 1px 0 rgba(255,255,255,0.24);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}`,js:`const links = ['Overview', 'Library', 'Guides', 'Status'];
const [subscribed, setSubscribed] = useState(false);`})},{id:"dot-pagination",name:"Dot Pagination",description:"Minimal pagination control with animated dots instead of numbers.",preview:"controls",style:"Core UI",category:"Navigation",build:t=>({html:`<nav className="dot-pagination-template" aria-label="Preview pages">
  <button className="pager-arrow" onClick={() => setPage((value) => Math.max(0, value - 1))}>Previous</button>
  <div className="dot-row">
    {pages.map((label, index) => (
      <button
        key={label}
        className={page === index ? 'active' : ''}
        onClick={() => setPage(index)}
        aria-label={\`Go to \${label}\`}
      />
    ))}
  </div>
  <button className="pager-arrow" onClick={() => setPage((value) => Math.min(pages.length - 1, value + 1))}>Next</button>
</nav>`,css:`.dot-pagination-template {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.85rem;
  width: min(100%, 520px);
  padding: 1.25rem;
  border-radius: 24px;
  color: ${t.text};
  background: linear-gradient(180deg, ${t.surface}, ${t.bg});
}

.pager-arrow {
  padding: 0.75rem 0.95rem;
  border: 0;
  border-radius: 999px;
  color: ${t.bg};
  background: ${t.accent};
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.dot-row {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.dot-row button {
  width: 0.82rem;
  height: 0.82rem;
  border: 0;
  border-radius: 50%;
  background: rgba(255,255,255,0.22);
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease;
}

.dot-row button.active {
  width: 2.2rem;
  border-radius: 999px;
  background: ${t.accent};
}`,js:`const pages = ['Overview', 'Usage', 'Export', 'Share'];
const [page, setPage] = useState(1);`})},{id:"glass-dot-pagination",name:"Glass Dot Pagination",description:"Frosted dot navigation inspired by glass carousel indicators.",preview:"controls",style:"Glassmorphic",category:"Navigation",build:t=>({html:`<nav className="glass-dots-template" aria-label="Gallery slides">
  <div className="glass-dots-shell">
    {slides.map((slide, index) => (
      <button
        key={slide}
        className={active === index ? 'active' : ''}
        onClick={() => setActive(index)}
        aria-label={slide}
      />
    ))}
  </div>
  <p>{slides[active]}</p>
</nav>`,css:`.glass-dots-template {
  display: grid;
  justify-items: center;
  gap: 0.9rem;
  width: min(100%, 360px);
  padding: 1.35rem;
  border-radius: 28px;
  color: ${t.text};
  background: linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.05));
  border: 1px solid rgba(255,255,255,0.18);
  backdrop-filter: blur(18px);
}

.glass-dots-shell {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 0.8rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
}

.glass-dots-shell button {
  width: 0.9rem;
  height: 0.9rem;
  border: 1px solid rgba(255,255,255,0.22);
  border-radius: 50%;
  background: rgba(255,255,255,0.18);
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease;
}

.glass-dots-shell button.active {
  transform: scale(1.18);
  background: ${t.accent};
}

.glass-dots-template p {
  margin: 0;
  color: ${t.muted};
}`,js:`const slides = ['Hero', 'Metrics', 'Team', 'Export'];
const [active, setActive] = useState(0);`})},{id:"neumorphic-dot-pagination",name:"Neumorphic Dot Pagination",description:"Soft pagination dots with raised pills and inset active state.",preview:"controls",style:"Neumorphic",category:"Navigation",build:t=>({html:`<nav className="neumorphic-dots-template" aria-label="Steps">
  {steps.map((step, index) => (
    <button key={step} className={current === index ? 'active' : ''} onClick={() => setCurrent(index)}>
      <span />
      <strong>{step}</strong>
    </button>
  ))}
</nav>`,css:`.neumorphic-dots-template {
  --neu-base: color-mix(in srgb, ${t.surface} 10%, #e9eef4 90%);
  --neu-shadow-dark: color-mix(in srgb, ${t.bg} 10%, #b1bcc9 90%);
  --neu-shadow-light: rgba(255,255,255,0.68);
  --neu-text: color-mix(in srgb, ${t.bg} 42%, #49566a 58%);
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  width: min(100%, 640px);
  padding: 1.35rem;
  border-radius: 30px;
  color: var(--neu-text);
  background: var(--neu-base);
  box-shadow:
    14px 14px 28px var(--neu-shadow-dark),
    -12px -12px 24px var(--neu-shadow-light);
}

.neumorphic-dots-template button {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.8rem 0.95rem;
  border: 0;
  border-radius: 999px;
  color: var(--neu-text);
  background: var(--neu-base);
  box-shadow:
    7px 7px 14px var(--neu-shadow-dark),
    -7px -7px 14px var(--neu-shadow-light);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  text-shadow: 0 1px 0 rgba(255,255,255,0.28);
}

.neumorphic-dots-template button span {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: rgba(73,86,106,0.22);
}

.neumorphic-dots-template button.active {
  color: ${t.accent};
  box-shadow:
    inset 4px 4px 10px var(--neu-shadow-dark),
    inset -4px -4px 10px var(--neu-shadow-light);
}

.neumorphic-dots-template button.active span {
  background: ${t.accent};
}`,js:`const steps = ['Intro', 'Compose', 'Preview', 'Ship'];
const [current, setCurrent] = useState(1);`})},{id:"skeuo-pager-dial",name:"Skeuomorphic Pager Dial",description:"Glossy round page buttons that feel like physical hardware controls.",preview:"controls",style:"Skeuomorphic",category:"Navigation",build:t=>({html:`<nav className="skeuo-pager-template" aria-label="Page dial">
  {pages.map((pageNumber) => (
    <button key={pageNumber} className={current === pageNumber ? 'active' : ''} onClick={() => setCurrent(pageNumber)}>
      {pageNumber}
    </button>
  ))}
</nav>`,css:`.skeuo-pager-template {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  width: min(100%, 520px);
  padding: 1.35rem;
  border-radius: 26px;
  color: ${t.text};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 70%, white 30%), ${t.bg});
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.35), 0 18px 45px rgba(15,23,42,0.28);
}

.skeuo-pager-template button {
  width: 3.1rem;
  height: 3.1rem;
  border: 0;
  border-radius: 50%;
  color: ${t.text};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 72%, white 28%), color-mix(in srgb, ${t.bg} 76%, black 24%));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.28), 0 8px 16px rgba(15,23,42,0.24);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.skeuo-pager-template button.active {
  color: ${t.bg};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 72%, white 28%), ${t.accent});
}`,js:`const pages = [1, 2, 3, 4, 5];
const [current, setCurrent] = useState(3);`})},{id:"neubrutal-pagination",name:"Neubrutal Pagination",description:"High-contrast pagination with bold borders and chunky shadow offsets.",preview:"controls",style:"Neubrutalism",category:"Navigation",build:t=>({html:`<nav className="neubrutal-pagination-template" aria-label="Results pages">
  <button onClick={() => setPage((value) => Math.max(1, value - 1))}>Prev</button>
  {pages.map((item) => (
    <button key={item} className={page === item ? 'active' : ''} onClick={() => setPage(item)}>
      {item}
    </button>
  ))}
  <button onClick={() => setPage((value) => Math.min(pages.length, value + 1))}>Next</button>
</nav>`,css:`.neubrutal-pagination-template {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: min(100%, 640px);
  padding: 1.2rem;
  border: 3px solid #111827;
  border-radius: 20px;
  color: #111827;
  background: color-mix(in srgb, ${t.accent} 28%, #fef3c7 72%);
  box-shadow: 8px 8px 0 #111827;
}

.neubrutal-pagination-template button {
  padding: 0.8rem 0.95rem;
  border: 3px solid #111827;
  border-radius: 16px;
  color: #111827;
  background: white;
  box-shadow: 4px 4px 0 #111827;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
}

.neubrutal-pagination-template button.active {
  background: ${t.accent};
}`,js:`const pages = [1, 2, 3, 4, 5];
const [page, setPage] = useState(2);`})},{id:"neubrutal-button-strip",name:"Neubrutal Button Strip",description:"Bold action buttons with loud contrast and offset shadows.",preview:"buttons",style:"Neubrutalism",category:"Actions",build:t=>({html:`<section className="neubrutal-buttons-template">
  <h2>Action strip</h2>
  <div className="neubrutal-button-row">
    {actions.map((action) => (
      <button key={action} className={selected === action ? 'active' : ''} onClick={() => setSelected(action)}>
        {action}
      </button>
    ))}
  </div>
  <p>Current action: {selected}</p>
</section>`,css:`.neubrutal-buttons-template {
  display: grid;
  gap: 1rem;
  width: min(100%, 620px);
  padding: 1.3rem;
  border: 3px solid #111827;
  border-radius: 22px;
  color: #111827;
  background: color-mix(in srgb, ${t.accent} 24%, #fefce8 76%);
  box-shadow: 10px 10px 0 #111827;
}

.neubrutal-buttons-template h2,
.neubrutal-buttons-template p {
  margin: 0;
}

.neubrutal-button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.neubrutal-button-row button {
  padding: 0.9rem 1rem;
  border: 3px solid #111827;
  border-radius: 16px;
  color: #111827;
  background: white;
  box-shadow: 5px 5px 0 #111827;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
}

.neubrutal-button-row button.active {
  background: ${t.accent};
}`,js:`const actions = ['Create', 'Duplicate', 'Publish'];
const [selected, setSelected] = useState('Create');`})},{id:"neubrutal-input-stack",name:"Neubrutal Input Stack",description:"Chunky text fields with bold borders and loud submit feedback.",preview:"form",style:"Neubrutalism",category:"Forms",build:t=>({html:`<section className="neubrutal-input-template">
  <label>
    <span>Component name</span>
    <input value={componentName} onChange={(event) => setComponentName(event.target.value)} placeholder="HeroBanner" />
  </label>
  <label>
    <span>Project owner</span>
    <input value={owner} onChange={(event) => setOwner(event.target.value)} placeholder="Avery Cole" />
  </label>
  <button onClick={() => setStatus(componentName ? \`Saved \${componentName}\` : 'Add a name first')}>Save draft</button>
  <p>{status}</p>
</section>`,css:`.neubrutal-input-template {
  display: grid;
  gap: 0.9rem;
  width: min(100%, 460px);
  padding: 1.15rem;
  border: 3px solid #111827;
  border-radius: 22px;
  color: #111827;
  background: color-mix(in srgb, ${t.accent} 24%, #fefce8 76%);
  box-shadow: 10px 10px 0 #111827;
}

.neubrutal-input-template label {
  display: grid;
  gap: 0.45rem;
}

.neubrutal-input-template span {
  font-size: 0.84rem;
  font-weight: 800;
}

.neubrutal-input-template input {
  padding: 0.92rem 1rem;
  border: 3px solid #111827;
  border-radius: 16px;
  color: #111827;
  background: white;
  box-shadow: 4px 4px 0 #111827;
  font: inherit;
}

.neubrutal-input-template button {
  padding: 0.88rem 1rem;
  border: 3px solid #111827;
  border-radius: 16px;
  color: #111827;
  background: ${t.accent};
  box-shadow: 5px 5px 0 #111827;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
}

.neubrutal-input-template p {
  margin: 0;
  font-weight: 700;
}`,js:`const [componentName, setComponentName] = useState('');
const [owner, setOwner] = useState('');
const [status, setStatus] = useState('Ready to save');`})},{id:"neubrutal-progress-meter",name:"Neubrutal Progress Meter",description:"Blocky progress meter with hard edges and thick offset shadows.",preview:"status",style:"Neubrutalism",category:"Feedback",build:t=>({html:`<section className="neubrutal-progress-template">
  <div className="neubrutal-progress-head">
    <strong>Export queue</strong>
    <span>{progress}%</span>
  </div>
  <div className="neubrutal-progress-track">
    <div className="neubrutal-progress-fill" style={{ width: \`\${progress}%\` }} />
  </div>
  <div className="neubrutal-progress-actions">
    <button onClick={() => setProgress((value) => Math.max(0, value - 15))}>Back</button>
    <button onClick={() => setProgress((value) => Math.min(100, value + 15))}>Push</button>
  </div>
</section>`,css:`.neubrutal-progress-template {
  display: grid;
  gap: 0.9rem;
  width: min(100%, 520px);
  padding: 1.15rem;
  border: 3px solid #111827;
  border-radius: 22px;
  color: #111827;
  background: color-mix(in srgb, ${t.accent} 22%, #fff7ed 78%);
  box-shadow: 10px 10px 0 #111827;
}

.neubrutal-progress-head,
.neubrutal-progress-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.neubrutal-progress-track {
  height: 1.1rem;
  border: 3px solid #111827;
  border-radius: 14px;
  background: white;
  overflow: hidden;
}

.neubrutal-progress-fill {
  height: 100%;
  background: ${t.accent};
  transition: width 180ms ease;
}

.neubrutal-progress-actions button {
  padding: 0.78rem 0.95rem;
  border: 3px solid #111827;
  border-radius: 16px;
  color: #111827;
  background: white;
  box-shadow: 4px 4px 0 #111827;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
}`,js:"const [progress, setProgress] = useState(55);"})},{id:"neubrutal-round-actions",name:"Neubrutal Round Actions",description:"Round neubrutal action buttons with loud color and punchy shadows.",preview:"buttons",style:"Neubrutalism",category:"Actions",build:t=>({html:`<section className="neubrutal-round-template">
  {actions.map((action) => (
    <button key={action} className={selected === action ? 'active' : ''} onClick={() => setSelected(action)}>
      {action.slice(0, 1)}
    </button>
  ))}
  <p>{selected}</p>
</section>`,css:`.neubrutal-round-template {
  display: grid;
  justify-items: center;
  gap: 0.9rem;
  width: min(100%, 420px);
  padding: 1.2rem;
  border: 3px solid #111827;
  border-radius: 22px;
  color: #111827;
  background: color-mix(in srgb, ${t.accent} 24%, #fefce8 76%);
  box-shadow: 10px 10px 0 #111827;
}

.neubrutal-round-template button {
  width: 4rem;
  height: 4rem;
  margin: 0 0.35rem;
  border: 3px solid #111827;
  border-radius: 50%;
  color: #111827;
  background: white;
  box-shadow: 5px 5px 0 #111827;
  font: inherit;
  font-weight: 900;
  cursor: pointer;
}

.neubrutal-round-template button.active {
  background: ${t.accent};
}

.neubrutal-round-template p {
  margin: 0;
  font-weight: 800;
}`,js:`const actions = ['Build', 'Edit', 'Ship'];
const [selected, setSelected] = useState('Build');`})},{id:"bento-metrics-grid",name:"Bento Metrics Grid",description:"Asymmetrical bento dashboard tiles with clear visual hierarchy.",preview:"stats",style:"Bento",category:"Layouts",build:t=>({html:`<section className="bento-metrics-template">
  <article className="bento-card hero">
    <p>Weekly exports</p>
    <strong>{stats[0].value}</strong>
    <span>{stats[0].copy}</span>
  </article>
  {stats.slice(1).map((stat) => (
    <article key={stat.label} className="bento-card">
      <p>{stat.label}</p>
      <strong>{stat.value}</strong>
      <span>{stat.copy}</span>
    </article>
  ))}
</section>`,css:`.bento-metrics-template {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  width: min(100%, 760px);
}

.bento-card {
  display: grid;
  gap: 0.45rem;
  min-height: 140px;
  padding: 1.15rem;
  border-radius: 24px;
  color: ${t.text};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 88%, white 12%), ${t.bg});
}

.bento-card.hero {
  grid-column: span 2;
  min-height: 180px;
}

.bento-card p,
.bento-card strong,
.bento-card span {
  margin: 0;
}

.bento-card p,
.bento-card span {
  color: ${t.muted};
}

.bento-card strong {
  font-size: 2rem;
}

@media (max-width: 640px) {
  .bento-metrics-template {
    grid-template-columns: 1fr;
  }

  .bento-card.hero {
    grid-column: auto;
  }
}`,js:`const stats = [
  { label: 'Exports', value: '184', copy: '12% above last week' },
  { label: 'Previews', value: '2.4K', copy: 'Realtime sessions' },
  { label: 'Teams', value: '36', copy: 'Shared workspaces' },
  { label: 'Bundles', value: '94', copy: 'Player zips created' },
];`})},{id:"bento-feature-wall",name:"Bento Feature Wall",description:"Modular feature cards with varied card sizes and consistent spacing.",preview:"layout",style:"Bento",category:"Sections",build:t=>({html:`<section className="bento-wall-template">
  <article className="wall-card main">
    <p>Design system</p>
    <h2>Ship a polished library faster.</h2>
  </article>
  {cards.map((card) => (
    <article key={card.title} className={\`wall-card \${card.size}\`}>
      <strong>{card.title}</strong>
      <span>{card.copy}</span>
    </article>
  ))}
</section>`,css:`.bento-wall-template {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;
  width: min(100%, 900px);
}

.wall-card {
  display: grid;
  align-content: space-between;
  gap: 0.65rem;
  min-height: 150px;
  padding: 1.15rem;
  border-radius: 24px;
  color: ${t.text};
  background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 88%, white 12%), ${t.bg});
}

.wall-card.main {
  grid-column: span 2;
  grid-row: span 2;
}

.wall-card.wide {
  grid-column: span 2;
}

.wall-card p,
.wall-card h2,
.wall-card strong,
.wall-card span {
  margin: 0;
}

.wall-card p,
.wall-card span {
  color: ${t.muted};
}

@media (max-width: 700px) {
  .bento-wall-template {
    grid-template-columns: 1fr;
  }

  .wall-card.main,
  .wall-card.wide {
    grid-column: auto;
    grid-row: auto;
  }
}`,js:`const cards = [
  { title: 'Template previews', copy: 'Live previews with scoped styles.', size: 'wide' },
  { title: 'Markdown wiki', copy: 'Detailed React help built into the app.', size: '' },
  { title: 'Zip export', copy: 'Player-ready Vite project in one click.', size: '' },
  { title: 'Theme switch', copy: 'Light and dark modes for the full workspace.', size: 'wide' },
];`})},{id:"terminal-command-panel",name:"Terminal Command Panel",description:"Monospace command UI with prompt styling and activity log rows.",preview:"form",style:"Terminal",category:"Forms",build:t=>({html:`<section className="terminal-command-template">
  <header>
    <strong>jammyjams://workspace</strong>
    <span>{logs.length} entries</span>
  </header>
  <form className="terminal-form" onSubmit={handleSubmit}>
    <label>$</label>
    <input value={command} onChange={(event) => setCommand(event.target.value)} placeholder="generate component --template hero-card" />
  </form>
  <div className="terminal-log">
    {logs.map((item) => <p key={item}>{item}</p>)}
  </div>
</section>`,css:`.terminal-command-template {
  --terminal-accent: ${t.accent};
  --terminal-ink: color-mix(in srgb, ${t.text} 86%, white 14%);
  --terminal-bg: color-mix(in srgb, ${t.bg} 88%, #020617 12%);
  display: grid;
  gap: 0.9rem;
  width: min(100%, 760px);
  padding: 1.2rem;
  border-radius: 18px;
  color: var(--terminal-ink);
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--terminal-accent) 18%, transparent), transparent 28%),
    var(--terminal-bg);
  border: 1px solid color-mix(in srgb, var(--terminal-accent) 36%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--terminal-accent) 12%, transparent), 0 20px 40px rgba(0,0,0,0.28);
  font-family: "IBM Plex Mono", "SFMono-Regular", monospace;
}

.terminal-command-template header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: color-mix(in srgb, var(--terminal-ink) 72%, transparent);
}

.terminal-form {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.7rem;
  align-items: center;
  padding: 0.85rem 0.95rem;
  border-radius: 12px;
  background: color-mix(in srgb, var(--terminal-accent) 8%, transparent);
}

.terminal-form label {
  color: var(--terminal-accent);
  font-weight: 700;
}

.terminal-form input {
  border: 0;
  color: color-mix(in srgb, var(--terminal-ink) 92%, white 8%);
  background: transparent;
  font: inherit;
}

.terminal-log {
  display: grid;
  gap: 0.45rem;
}

.terminal-log p {
  margin: 0;
  color: color-mix(in srgb, var(--terminal-ink) 82%, transparent);
}`,js:`const [command, setCommand] = useState('');
const [logs, setLogs] = useState([
  'preview ready',
  'template library indexed',
  'watching editor changes',
]);
function handleSubmit(event) {
  event.preventDefault();
  if (!command.trim()) return;
  setLogs((current) => [\`$ \${command}\`, ...current].slice(0, 4));
  setCommand('');
}`})},{id:"terminal-status-board",name:"Terminal Status Board",description:"Retro status monitor with blinking indicator rows and dense data blocks.",preview:"status",style:"Terminal",category:"Feedback",build:t=>({html:`<section className="terminal-status-template">
  <div className="terminal-status-head">
    <strong>system monitor</strong>
    <button onClick={() => setBlinking((value) => !value)}>{blinking ? 'Pause blink' : 'Resume blink'}</button>
  </div>
  <div className="terminal-status-grid">
    {items.map((item) => (
      <article key={item.label}>
        <span className={blinking ? 'status-light blinking' : 'status-light'} />
        <div>
          <strong>{item.label}</strong>
          <p>{item.value}</p>
        </div>
      </article>
    ))}
  </div>
</section>`,css:`.terminal-status-template {
  --terminal-accent: ${t.accent};
  --terminal-ink: color-mix(in srgb, ${t.text} 86%, white 14%);
  --terminal-bg: color-mix(in srgb, ${t.bg} 90%, #020617 10%);
  display: grid;
  gap: 0.95rem;
  width: min(100%, 680px);
  padding: 1.2rem;
  border-radius: 18px;
  color: var(--terminal-ink);
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--terminal-accent) 14%, transparent), transparent 28%),
    var(--terminal-bg);
  border: 1px solid color-mix(in srgb, var(--terminal-accent) 28%, transparent);
  font-family: "IBM Plex Mono", "SFMono-Regular", monospace;
}

.terminal-status-head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}

.terminal-status-head button {
  padding: 0.7rem 0.9rem;
  border: 1px solid color-mix(in srgb, var(--terminal-accent) 28%, transparent);
  border-radius: 10px;
  color: var(--terminal-ink);
  background: color-mix(in srgb, var(--terminal-accent) 8%, transparent);
  font: inherit;
  cursor: pointer;
}

.terminal-status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}

.terminal-status-grid article {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.7rem;
  padding: 0.9rem;
  border-radius: 12px;
  background: color-mix(in srgb, var(--terminal-accent) 6%, transparent);
}

.status-light {
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.2rem;
  border-radius: 50%;
  background: var(--terminal-accent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--terminal-accent) 45%, transparent);
}

.status-light.blinking {
  animation: terminal-blink 1s steps(2, jump-none) infinite;
}

.terminal-status-grid p,
.terminal-status-grid strong {
  margin: 0;
}

.terminal-status-grid p {
  color: color-mix(in srgb, var(--terminal-ink) 70%, transparent);
}

@keyframes terminal-blink {
  50% { opacity: 0.3; }
}`,js:`const items = [
  { label: 'Preview', value: 'stable' },
  { label: 'Exports', value: 'queued 03' },
  { label: 'Theme', value: 'synced' },
  { label: 'Templates', value: '284 loaded' },
];
const [blinking, setBlinking] = useState(true);`})},{id:"material-dot-pagination",name:"Material Dot Pagination",description:"Material-inspired animated page dots with compact controlled state.",preview:"controls",style:"Material",category:"Navigation",build:t=>({html:`<nav className="material-dots-template" aria-label="Page positions">
  {pages.map((pageLabel, index) => (
    <button key={pageLabel} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
      <span />
    </button>
  ))}
</nav>`,css:`.material-dots-template {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 0.85rem;
  border-radius: 999px;
  background: color-mix(in srgb, ${t.surface} 92%, white 8%);
  box-shadow: 0 8px 18px rgba(15,23,42,0.12);
}

.material-dots-template button {
  display: grid;
  place-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}

.material-dots-template button span {
  width: 0.52rem;
  height: 0.52rem;
  border-radius: 50%;
  background: rgba(15,23,42,0.28);
  transition: transform 180ms ease, background 180ms ease;
}

.material-dots-template button.active span {
  transform: scale(1.7);
  background: ${t.accent};
}`,js:`const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
const [active, setActive] = useState(0);`})},{id:"material-chip-filter",name:"Material Chip Filter",description:"Filter chip row with soft elevation and clear selected state.",preview:"controls",style:"Material",category:"Actions",build:t=>({html:`<section className="material-chip-template">
  {chips.map((chip) => (
    <button key={chip} className={selected === chip ? 'active' : ''} onClick={() => setSelected(chip)}>
      {chip}
    </button>
  ))}
</section>`,css:`.material-chip-template {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  width: min(100%, 620px);
  padding: 0.7rem;
}

.material-chip-template button {
  padding: 0.72rem 0.95rem;
  border: 0;
  border-radius: 999px;
  color: ${t.text};
  background: color-mix(in srgb, ${t.surface} 92%, white 8%);
  box-shadow: 0 4px 12px rgba(15,23,42,0.12);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.material-chip-template button.active {
  color: ${t.bg};
  background: ${t.accent};
}`,js:`const chips = ['All', 'Buttons', 'Forms', 'Layouts', 'Exports'];
const [selected, setSelected] = useState('All');`})},{id:"material-filled-actions",name:"Material Filled Actions",description:"Material-style filled and tonal buttons with compact elevation cues.",preview:"buttons",style:"Material",category:"Actions",build:t=>({html:`<section className="material-actions-template">
  <button className={selected === 'primary' ? 'active filled' : 'filled'} onClick={() => setSelected('primary')}>Primary</button>
  <button className={selected === 'tonal' ? 'active tonal' : 'tonal'} onClick={() => setSelected('tonal')}>Tonal</button>
  <button className={selected === 'outlined' ? 'active outlined' : 'outlined'} onClick={() => setSelected('outlined')}>Outlined</button>
</section>`,css:`.material-actions-template {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: min(100%, 520px);
  padding: 0.8rem;
}

.material-actions-template button {
  padding: 0.82rem 1rem;
  border: 0;
  border-radius: 999px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 160ms ease, transform 160ms ease;
}

.material-actions-template button.filled {
  color: ${t.bg};
  background: ${t.accent};
  box-shadow: 0 4px 12px rgba(15,23,42,0.14);
}

.material-actions-template button.tonal {
  color: #0f172a;
  background: color-mix(in srgb, ${t.accent} 18%, white 82%);
  box-shadow: 0 4px 12px rgba(15,23,42,0.08);
}

.material-actions-template button.outlined {
  color: #0f172a;
  background: transparent;
  box-shadow: inset 0 0 0 1px color-mix(in srgb, ${t.bg} 18%, transparent);
}

.material-actions-template button.active {
  transform: translateY(-1px);
}`,js:"const [selected, setSelected] = useState('primary');"})},{id:"material-text-field-stack",name:"Material Text Field Stack",description:"Material-inspired field stack with filled inputs and helper copy.",preview:"form",style:"Material",category:"Forms",build:t=>({html:`<section className="material-field-template">
  <label>
    <span>Component label</span>
    <input value={label} onChange={(event) => setLabel(event.target.value)} placeholder="FeatureGrid" />
  </label>
  <label>
    <span>Description</span>
    <input value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Reusable marketing section" />
  </label>
  <small>{label ? 'Ready for export' : 'Give the component a clear name.'}</small>
</section>`,css:`.material-field-template {
  display: grid;
  gap: 0.85rem;
  width: min(100%, 500px);
  padding: 0.85rem;
}

.material-field-template label {
  display: grid;
  gap: 0.35rem;
}

.material-field-template span,
.material-field-template small {
  color: #334155;
  font-size: 0.84rem;
  font-weight: 600;
}

.material-field-template input {
  padding: 1rem 0.95rem;
  border: 0;
  border-bottom: 2px solid color-mix(in srgb, ${t.bg} 12%, transparent);
  border-radius: 16px 16px 4px 4px;
  color: #0f172a;
  background: color-mix(in srgb, ${t.surface} 92%, white 8%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
  font: inherit;
}`,js:`const [label, setLabel] = useState('');
const [description, setDescription] = useState('');`})},{id:"material-linear-progress",name:"Material Linear Progress",description:"Material-style linear progress bar with clean track and surface actions.",preview:"status",style:"Material",category:"Feedback",build:t=>({html:`<section className="material-progress-template">
  <div className="material-progress-head">
    <strong>Build progress</strong>
    <span>{progress}%</span>
  </div>
  <div className="material-progress-track">
    <div className="material-progress-fill" style={{ width: \`\${progress}%\` }} />
  </div>
  <div className="material-progress-actions">
    <button onClick={() => setProgress((value) => Math.max(0, value - 10))}>Back</button>
    <button className="accent" onClick={() => setProgress((value) => Math.min(100, value + 10))}>Next</button>
  </div>
</section>`,css:`.material-progress-template {
  display: grid;
  gap: 0.9rem;
  width: min(100%, 520px);
  padding: 0.9rem;
}

.material-progress-head,
.material-progress-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.material-progress-track {
  height: 0.8rem;
  border-radius: 999px;
  background: color-mix(in srgb, ${t.surface} 90%, white 10%);
  overflow: hidden;
}

.material-progress-fill {
  height: 100%;
  border-radius: inherit;
  background: ${t.accent};
  transition: width 180ms ease;
}

.material-progress-actions button {
  padding: 0.72rem 0.92rem;
  border: 0;
  border-radius: 999px;
  color: ${t.text};
  background: color-mix(in srgb, ${t.surface} 92%, white 8%);
  box-shadow: 0 4px 10px rgba(15,23,42,0.08);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.material-progress-actions button.accent {
  color: ${t.bg};
  background: ${t.accent};
}`,js:"const [progress, setProgress] = useState(62);"})},{id:"core-trend-chart",name:"Core Trend Chart",description:"Clean analytics card with bar chart and summary stats.",preview:"stats",style:"Core UI",category:"Data",build:t=>({html:`<section className="core-chart-template">
  <header>
    <div>
      <p>Weekly traffic</p>
      <strong>{bars[active].value}</strong>
    </div>
    <button onClick={() => setActive((value) => (value + 1) % bars.length)}>Next day</button>
  </header>
  <div className="core-chart-bars">
    {bars.map((bar, index) => (
      <button key={bar.label} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
        <em>{bar.value}</em>
        <span style={{ height: \`\${bar.height}%\` }} />
        <small>{bar.label}</small>
      </button>
    ))}
  </div>
</section>`,css:`.core-chart-template { display: grid; gap: 1rem; width: min(100%, 640px); padding: 1.35rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, ${t.surface}, ${t.bg}); }
.core-chart-template header { display: flex; justify-content: space-between; gap: 1rem; align-items: start; }
.core-chart-template p, .core-chart-template strong { margin: 0; }
.core-chart-template p { color: ${t.muted}; }
.core-chart-template button { border: 0; font: inherit; cursor: pointer; }
.core-chart-template header button { padding: 0.75rem 0.95rem; border-radius: 14px; color: ${t.bg}; background: ${t.accent}; font-weight: 700; }
.core-chart-bars { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.75rem; align-items: stretch; min-height: 240px; }
.core-chart-bars button { display: grid; grid-template-rows: auto 1fr auto; gap: 0.45rem; justify-items: center; align-items: end; width: 100%; height: 100%; padding: 0; color: ${t.muted}; background: transparent; text-align: center; }
.core-chart-bars em { font-style: normal; font-size: 0.78rem; font-weight: 700; }
.core-chart-bars span { display: block; align-self: end; width: 100%; max-width: 56px; min-height: 14px; border-radius: 18px 18px 8px 8px; background: rgba(255,255,255,0.16); }
.core-chart-bars button.active { color: ${t.text}; }
.core-chart-bars button.active span { background: ${t.accent}; }`,js:`const bars = [
  { label: 'Mon', value: '18.4K', height: 54 },
  { label: 'Tue', value: '22.1K', height: 72 },
  { label: 'Wed', value: '19.8K', height: 63 },
  { label: 'Thu', value: '24.5K', height: 84 },
  { label: 'Fri', value: '21.3K', height: 68 },
];
const [active, setActive] = useState(3);`})},{id:"core-data-table",name:"Core Data Table",description:"Structured results table for projects, metrics, and recent exports.",preview:"list",style:"Core UI",category:"Data",build:t=>({html:`<section className="core-table-template">
  <header>
    <strong>Recent exports</strong>
    <span>{rows.length} rows</span>
  </header>
  <div className="core-table-grid">
    <div className="core-table-head"><span>Name</span><span>Status</span><span>Owner</span></div>
    {rows.map((row) => (
      <button key={row.name} className={selected === row.name ? 'active' : ''} onClick={() => setSelected(row.name)}>
        <span>{row.name}</span><span>{row.status}</span><span>{row.owner}</span>
      </button>
    ))}
  </div>
</section>`,css:`.core-table-template { display: grid; gap: 0.85rem; width: min(100%, 720px); padding: 1.25rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.core-table-template header { display: flex; justify-content: space-between; gap: 1rem; color: ${t.muted}; }
.core-table-grid { display: grid; gap: 0.55rem; }
.core-table-head, .core-table-grid button { display: grid; grid-template-columns: 1.4fr 0.9fr 1fr; gap: 0.75rem; align-items: center; }
.core-table-head { padding: 0 0.3rem; color: ${t.muted}; font-size: 0.82rem; font-weight: 700; }
.core-table-grid button { padding: 0.9rem 1rem; border: 0; border-radius: 16px; color: ${t.text}; background: color-mix(in srgb, ${t.bg} 84%, white 16%); font: inherit; text-align: left; cursor: pointer; }
.core-table-grid button.active { color: ${t.bg}; background: ${t.accent}; }`,js:`const rows = [
  { name: 'HeroBanner', status: 'Ready', owner: 'Avery' },
  { name: 'GlassLogin', status: 'Draft', owner: 'Jordan' },
  { name: 'StatsBoard', status: 'Review', owner: 'Mina' },
];
const [selected, setSelected] = useState('HeroBanner');`})},{id:"glass-analytics-chart",name:"Glass Analytics Chart",description:"Frosted analytics card with translucent bars and trend chip.",preview:"stats",style:"Glassmorphic",category:"Data",build:t=>({html:`<section className="glass-chart-template">
  <header>
    <div><p>Realtime signups</p><strong>{bars[focus].value}</strong></div>
    <span>{bars[focus].delta}</span>
  </header>
  <div className="glass-chart-bars">
    {bars.map((bar, index) => (
      <button key={bar.label} className={focus === index ? 'active' : ''} onClick={() => setFocus(index)}>
        <em>{bar.value}</em>
        <span style={{ height: \`\${bar.height}%\` }} />
        <small>{bar.label}</small>
      </button>
    ))}
  </div>
</section>`,css:`.glass-chart-template { display: grid; gap: 1rem; width: min(100%, 640px); padding: 1.35rem; border-radius: 30px; color: ${t.text}; background: linear-gradient(150deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06)); border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(20px) saturate(145%); }
.glass-chart-template header { display: flex; justify-content: space-between; gap: 1rem; align-items: start; }
.glass-chart-template p, .glass-chart-template strong { margin: 0; }
.glass-chart-template p, .glass-chart-template small { color: ${t.muted}; }
.glass-chart-template header span { padding: 0.4rem 0.65rem; border-radius: 999px; color: ${t.bg}; background: ${t.accent}; font-size: 0.82rem; font-weight: 700; }
.glass-chart-bars { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.75rem; align-items: stretch; min-height: 240px; }
.glass-chart-bars button { display: grid; grid-template-rows: auto 1fr auto; gap: 0.45rem; justify-items: center; align-items: end; width: 100%; height: 100%; padding: 0; border: 0; color: inherit; background: transparent; font: inherit; cursor: pointer; text-align: center; }
.glass-chart-bars em { font-style: normal; font-size: 0.78rem; font-weight: 700; color: ${t.text}; }
.glass-chart-bars span { display: block; align-self: end; width: 100%; max-width: 56px; min-height: 14px; border-radius: 18px 18px 8px 8px; background: rgba(255,255,255,0.18); box-shadow: inset 0 1px 0 rgba(255,255,255,0.18); }
.glass-chart-bars button.active span { background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 82%, white 18%), ${t.accent}); }`,js:`const bars = [
  { label: '8AM', value: '182', delta: '+8%', height: 42 },
  { label: '10AM', value: '204', delta: '+11%', height: 58 },
  { label: '12PM', value: '260', delta: '+19%', height: 82 },
  { label: '2PM', value: '241', delta: '+14%', height: 74 },
  { label: '4PM', value: '228', delta: '+9%', height: 68 },
];
const [focus, setFocus] = useState(2);`})},{id:"glass-data-table",name:"Glass Data Table",description:"Translucent results table with frosted rows and compact state chips.",preview:"list",style:"Glassmorphic",category:"Data",build:t=>({html:`<section className="glass-table-template">
  <header><strong>Team workspace</strong><small>{rows.length} active items</small></header>
  <div className="glass-table-head"><span>Name</span><span>Stage</span><span>Lead</span></div>
  {rows.map((row) => (
    <button key={row.name} className={selected === row.name ? 'active' : ''} onClick={() => setSelected(row.name)}>
      <span>{row.name}</span><span>{row.stage}</span><span>{row.lead}</span>
    </button>
  ))}
</section>`,css:`.glass-table-template { display: grid; gap: 0.6rem; width: min(100%, 720px); padding: 1.25rem; border-radius: 30px; color: ${t.text}; background: linear-gradient(150deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06)); border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(20px) saturate(145%); }
.glass-table-template header { display: flex; justify-content: space-between; gap: 1rem; }
.glass-table-template small, .glass-table-head { color: ${t.muted}; }
.glass-table-head, .glass-table-template button { display: grid; grid-template-columns: 1.3fr 0.9fr 1fr; gap: 0.75rem; align-items: center; }
.glass-table-head { padding: 0 0.3rem; font-size: 0.82rem; font-weight: 700; }
.glass-table-template button { padding: 0.9rem 1rem; border: 1px solid rgba(255,255,255,0.14); border-radius: 16px; color: inherit; background: rgba(255,255,255,0.08); font: inherit; text-align: left; cursor: pointer; }
.glass-table-template button.active { color: ${t.bg}; background: ${t.accent}; }`,js:`const rows = [
  { name: 'HeroHero', stage: 'Review', lead: 'Rae' },
  { name: 'TableKit', stage: 'Live', lead: 'Mina' },
  { name: 'GlassStack', stage: 'Draft', lead: 'Avery' },
];
const [selected, setSelected] = useState('TableKit');`})},{id:"neumorphic-bar-chart",name:"Neumorphic Bar Chart",description:"Soft-depth chart card with raised bars and inset chart bed.",preview:"stats",style:"Neumorphic",category:"Data",build:t=>({html:`<section className="neu-chart-template">
  <header>
    <strong>{bars[active].label}</strong>
    <span>{bars[active].value}</span>
  </header>
  <div className="neu-chart-bed">
    {bars.map((bar, index) => (
      <button key={bar.label} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
        <em>{bar.value}</em>
        <span style={{ height: \`\${bar.height}%\` }} />
        <small>{bar.label}</small>
      </button>
    ))}
  </div>
</section>`,css:`.neu-chart-template { --neu-base: color-mix(in srgb, ${t.surface} 10%, #e9eef4 90%); --neu-shadow-dark: color-mix(in srgb, ${t.bg} 10%, #b1bcc9 90%); --neu-shadow-light: rgba(255,255,255,0.68); --neu-text: color-mix(in srgb, ${t.bg} 48%, #445061 52%); display: grid; gap: 1rem; width: min(100%, 620px); padding: 1.35rem; border-radius: 30px; color: var(--neu-text); background: var(--neu-base); box-shadow: 14px 14px 28px var(--neu-shadow-dark), -12px -12px 24px var(--neu-shadow-light); }
.neu-chart-template header { display: flex; justify-content: space-between; gap: 1rem; align-items: center; }
.neu-chart-template header span { font-weight: 700; color: ${t.accent}; }
.neu-chart-bed { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.75rem; align-items: stretch; min-height: 240px; padding: 1rem; border-radius: 20px; box-shadow: inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light); }
.neu-chart-bed button { display: grid; grid-template-rows: auto 1fr auto; gap: 0.45rem; justify-items: center; align-items: end; width: 100%; height: 100%; padding: 0; border: 0; color: var(--neu-text); background: transparent; font: inherit; cursor: pointer; text-align: center; }
.neu-chart-bed em { font-style: normal; font-size: 0.78rem; font-weight: 700; }
.neu-chart-bed span { display: block; align-self: end; width: 100%; max-width: 54px; min-height: 14px; border-radius: 18px 18px 8px 8px; background: var(--neu-base); box-shadow: 7px 7px 14px var(--neu-shadow-dark), -7px -7px 14px var(--neu-shadow-light); }
.neu-chart-bed button.active { color: ${t.accent}; }
.neu-chart-bed button.active span { box-shadow: inset 4px 4px 10px var(--neu-shadow-dark), inset -4px -4px 10px var(--neu-shadow-light); }`,js:`const bars = [
  { label: 'Q1', value: '12.4K', height: 52 },
  { label: 'Q2', value: '18.2K', height: 68 },
  { label: 'Q3', value: '16.7K', height: 61 },
  { label: 'Q4', value: '24.1K', height: 84 },
  { label: 'Q5', value: '20.6K', height: 74 },
];
const [active, setActive] = useState(3);`})},{id:"neumorphic-data-table",name:"Neumorphic Data Table",description:"Soft table shell with recessed rows and active highlight.",preview:"list",style:"Neumorphic",category:"Data",build:t=>({html:`<section className="neu-table-template">
  <div className="neu-table-head"><span>Item</span><span>State</span><span>Owner</span></div>
  {rows.map((row) => (
    <button key={row.item} className={selected === row.item ? 'active' : ''} onClick={() => setSelected(row.item)}>
      <span>{row.item}</span><span>{row.state}</span><span>{row.owner}</span>
    </button>
  ))}
</section>`,css:`.neu-table-template { --neu-base: color-mix(in srgb, ${t.surface} 10%, #e9eef4 90%); --neu-shadow-dark: color-mix(in srgb, ${t.bg} 10%, #b1bcc9 90%); --neu-shadow-light: rgba(255,255,255,0.68); --neu-text: color-mix(in srgb, ${t.bg} 48%, #445061 52%); display: grid; gap: 0.65rem; width: min(100%, 720px); padding: 1.25rem; border-radius: 30px; color: var(--neu-text); background: var(--neu-base); box-shadow: 14px 14px 28px var(--neu-shadow-dark), -12px -12px 24px var(--neu-shadow-light); }
.neu-table-head, .neu-table-template button { display: grid; grid-template-columns: 1.3fr 0.9fr 1fr; gap: 0.75rem; align-items: center; }
.neu-table-head { padding: 0 0.35rem; font-size: 0.82rem; font-weight: 700; }
.neu-table-template button { padding: 0.92rem 1rem; border: 0; border-radius: 18px; color: var(--neu-text); background: var(--neu-base); box-shadow: 7px 7px 14px var(--neu-shadow-dark), -7px -7px 14px var(--neu-shadow-light); font: inherit; text-align: left; cursor: pointer; }
.neu-table-template button.active { color: ${t.accent}; box-shadow: inset 4px 4px 10px var(--neu-shadow-dark), inset -4px -4px 10px var(--neu-shadow-light); }`,js:`const rows = [
  { item: 'HeroCard', state: 'Ready', owner: 'Avery' },
  { item: 'TableShell', state: 'Draft', owner: 'Jordan' },
  { item: 'ChartKit', state: 'Review', owner: 'Mina' },
];
const [selected, setSelected] = useState('ChartKit');`})},{id:"skeuo-meter-chart",name:"Skeuomorphic Meter Chart",description:"Physical meter-style chart with metal bars and tactile value display.",preview:"stats",style:"Skeuomorphic",category:"Data",build:t=>({html:`<section className="skeuo-chart-template">
  <div className="skeuo-meter-readout">{bars[current].value}</div>
  <div className="skeuo-meter-bars">
    {bars.map((bar, index) => (
      <button key={bar.label} className={current === index ? 'active' : ''} onClick={() => setCurrent(index)}>
        <em>{bar.value}</em>
        <span style={{ height: \`\${bar.height}%\` }} />
        <small>{bar.label}</small>
      </button>
    ))}
  </div>
</section>`,css:`.skeuo-chart-template { display: grid; gap: 1rem; width: min(100%, 640px); padding: 1.3rem; border-radius: 28px; color: ${t.text}; background: repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 6px, rgba(0,0,0,0.02) 6px 12px), linear-gradient(180deg, color-mix(in srgb, ${t.surface} 72%, white 28%), color-mix(in srgb, ${t.bg} 82%, black 18%)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -3px 6px rgba(0,0,0,0.18), 0 18px 45px rgba(15,23,42,0.28); }
.skeuo-meter-readout { padding: 1rem; border-radius: 18px; letter-spacing: 0.08em; text-transform: uppercase; background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03)); box-shadow: inset 0 2px 4px rgba(255,255,255,0.18), inset 0 -10px 18px rgba(0,0,0,0.24); }
.skeuo-meter-bars { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.75rem; align-items: stretch; min-height: 230px; }
.skeuo-meter-bars button { display: grid; grid-template-rows: auto 1fr auto; gap: 0.45rem; justify-items: center; align-items: end; width: 100%; height: 100%; padding: 0; border: 0; color: ${t.text}; background: transparent; font: inherit; cursor: pointer; text-align: center; }
.skeuo-meter-bars em { font-style: normal; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; }
.skeuo-meter-bars span { display: block; align-self: end; width: 100%; max-width: 56px; min-height: 14px; border-radius: 18px 18px 8px 8px; background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 78%, white 22%), color-mix(in srgb, ${t.bg} 82%, black 18%)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.24), inset 0 -2px 5px rgba(0,0,0,0.16), 0 6px 12px rgba(15,23,42,0.2); }
.skeuo-meter-bars button.active span { background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 78%, white 22%), ${t.accent}); }`,js:`const bars = [
  { label: 'CPU', value: '62%', height: 62 },
  { label: 'RAM', value: '78%', height: 78 },
  { label: 'NET', value: '54%', height: 54 },
  { label: 'GPU', value: '86%', height: 86 },
];
const [current, setCurrent] = useState(3);`})},{id:"skeuo-ledger-table",name:"Skeuomorphic Ledger Table",description:"Ledger-style data table with tactile rows and instrument-panel polish.",preview:"list",style:"Skeuomorphic",category:"Data",build:t=>({html:`<section className="skeuo-table-template">
  <div className="skeuo-table-head"><span>Name</span><span>Status</span><span>Lead</span></div>
  {rows.map((row) => (
    <button key={row.name} className={selected === row.name ? 'active' : ''} onClick={() => setSelected(row.name)}>
      <span>{row.name}</span><span>{row.status}</span><span>{row.lead}</span>
    </button>
  ))}
</section>`,css:`.skeuo-table-template { display: grid; gap: 0.65rem; width: min(100%, 720px); padding: 1.25rem; border-radius: 28px; color: ${t.text}; background: repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 6px, rgba(0,0,0,0.02) 6px 12px), linear-gradient(180deg, color-mix(in srgb, ${t.surface} 72%, white 28%), color-mix(in srgb, ${t.bg} 82%, black 18%)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -3px 6px rgba(0,0,0,0.18), 0 18px 45px rgba(15,23,42,0.28); }
.skeuo-table-head, .skeuo-table-template button { display: grid; grid-template-columns: 1.3fr 0.9fr 1fr; gap: 0.75rem; align-items: center; }
.skeuo-table-head { padding: 0 0.3rem; color: ${t.muted}; font-size: 0.82rem; font-weight: 700; }
.skeuo-table-template button { padding: 0.92rem 1rem; border: 0; border-radius: 16px; color: ${t.text}; background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 78%, white 22%), color-mix(in srgb, ${t.bg} 82%, black 18%)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.24), inset 0 -2px 5px rgba(0,0,0,0.16), 0 6px 12px rgba(15,23,42,0.2); font: inherit; text-align: left; cursor: pointer; }
.skeuo-table-template button.active { color: ${t.bg}; background: linear-gradient(180deg, color-mix(in srgb, ${t.accent} 78%, white 22%), ${t.accent}); }`,js:`const rows = [
  { name: 'AnalyticsDeck', status: 'Live', lead: 'Rae' },
  { name: 'RadioTable', status: 'Review', lead: 'Avery' },
  { name: 'PanelGraph', status: 'Draft', lead: 'Mina' },
];
const [selected, setSelected] = useState('AnalyticsDeck');`})},{id:"flat-bar-chart",name:"Flat Bar Chart",description:"Flat 2.0 chart with high contrast bars, spacing, and clear labels.",preview:"stats",style:"Flat",category:"Data",build:t=>({html:`<section className="flat-chart-template">
  <header><strong>Campaign reach</strong><span>{bars[active].value}</span></header>
  <div className="flat-chart-bars">
    {bars.map((bar, index) => (
      <button key={bar.label} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
        <em>{bar.value}</em>
        <span style={{ height: \`\${bar.height}%\` }} />
        <small>{bar.label}</small>
      </button>
    ))}
  </div>
</section>`,css:`.flat-chart-template { display: grid; gap: 0.9rem; width: min(100%, 620px); padding: 1.1rem; border-radius: 18px; color: ${t.text}; background: ${t.surface}; box-shadow: inset 0 0 0 1px color-mix(in srgb, ${t.bg} 10%, transparent); }
.flat-chart-template header { display: flex; justify-content: space-between; gap: 1rem; }
.flat-chart-bars { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.75rem; align-items: stretch; min-height: 240px; }
.flat-chart-bars button { display: grid; grid-template-rows: auto 1fr auto; gap: 0.45rem; justify-items: center; align-items: end; width: 100%; height: 100%; padding: 0; border: 0; color: ${t.muted}; background: transparent; font: inherit; cursor: pointer; text-align: center; }
.flat-chart-bars em { font-style: normal; font-size: 0.78rem; font-weight: 700; color: ${t.text}; }
.flat-chart-bars span { display: block; align-self: end; width: 100%; max-width: 56px; min-height: 14px; border-radius: 14px 14px 6px 6px; background: color-mix(in srgb, ${t.bg} 18%, white 82%); }
.flat-chart-bars button.active { color: ${t.text}; }
.flat-chart-bars button.active span { background: ${t.accent}; }`,js:`const bars = [
  { label: 'Mon', value: '12K', height: 44 },
  { label: 'Tue', value: '18K', height: 66 },
  { label: 'Wed', value: '15K', height: 55 },
  { label: 'Thu', value: '22K', height: 84 },
  { label: 'Fri', value: '17K', height: 63 },
];
const [active, setActive] = useState(3);`})},{id:"flat-data-table",name:"Flat Data Table",description:"Clear data table with strong hierarchy and simple flat row states.",preview:"list",style:"Flat",category:"Data",build:t=>({html:`<section className="flat-table-template">
  <div className="flat-table-head"><span>Template</span><span>Status</span><span>Owner</span></div>
  {rows.map((row) => (
    <button key={row.template} className={selected === row.template ? 'active' : ''} onClick={() => setSelected(row.template)}>
      <span>{row.template}</span><span>{row.status}</span><span>{row.owner}</span>
    </button>
  ))}
</section>`,css:`.flat-table-template { display: grid; gap: 0.6rem; width: min(100%, 720px); padding: 1.1rem; border-radius: 18px; color: ${t.text}; background: ${t.surface}; box-shadow: inset 0 0 0 1px color-mix(in srgb, ${t.bg} 10%, transparent); }
.flat-table-head, .flat-table-template button { display: grid; grid-template-columns: 1.3fr 0.9fr 1fr; gap: 0.75rem; align-items: center; }
.flat-table-head { padding: 0 0.3rem; color: ${t.muted}; font-size: 0.82rem; font-weight: 700; }
.flat-table-template button { min-height: 3rem; padding: 0.9rem 1rem; border: 0; border-radius: 12px; color: ${t.text}; background: color-mix(in srgb, ${t.bg} 86%, white 14%); font: inherit; text-align: left; cursor: pointer; }
.flat-table-template button.active { color: ${t.bg}; background: ${t.accent}; }`,js:`const rows = [
  { template: 'FlatChart', status: 'Ready', owner: 'Avery' },
  { template: 'FlatTable', status: 'Draft', owner: 'Jordan' },
  { template: 'FlatBoard', status: 'Review', owner: 'Mina' },
];
const [selected, setSelected] = useState('FlatChart');`})},{id:"animated-line-graph",name:"Animated Line Graph",description:"Motion-driven line graph with animated plot reveal and point focus.",preview:"stats",style:"Animated",category:"Data",build:t=>({html:`<section className="animated-graph-template" ref={setChartNode}>
  <header>
    <div>
      <p>Weekly throughput</p>
      <strong>{formatValue(animatedPoints[active].rawValue)}</strong>
    </div>
    <span>{points[active].label}</span>
  </header>
  <svg viewBox="0 0 320 180" className="graph-shell">
    <defs>
      <linearGradient id="graph-accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={points[0].color} />
        <stop offset="100%" stopColor={points[points.length - 1].color} />
      </linearGradient>
    </defs>
    <polyline className="graph-line" points={linePoints} style={{ strokeDashoffset: 760 - (760 * progress) }} />
    {animatedPoints.map((point, index) => (
      <circle
        key={point.label}
        cx={point.x}
        cy={point.y}
        r={active === index ? 7 : 5}
        fill={point.color}
        style={{ opacity: progress, transform: \`scale(\${0.72 + (0.28 * progress)})\` }}
      />
    ))}
  </svg>
  <div className="graph-points">
    {animatedPoints.map((point, index) => (
      <button key={point.label} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
        <span>{point.label}</span>
        <strong>{formatValue(point.rawValue)}</strong>
      </button>
    ))}
  </div>
</section>`,css:`.animated-graph-template { display: grid; gap: 1rem; width: min(100%, 620px); padding: 1.25rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, ${t.surface}, ${t.bg}); }
.animated-graph-template header { display: flex; justify-content: space-between; gap: 1rem; align-items: start; }
.animated-graph-template p, .animated-graph-template strong { margin: 0; }
.animated-graph-template p { color: ${t.muted}; }
.animated-graph-template header > span { padding: 0.42rem 0.7rem; border-radius: 999px; color: ${t.bg}; background: ${t.accent}; font-size: 0.82rem; font-weight: 700; }
.graph-shell { width: 100%; height: 180px; overflow: visible; }
.graph-line { fill: none; stroke: url(#graph-accent); stroke-width: 10; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 760; }
.graph-shell circle { transform-origin: center; transition: opacity 140ms linear; }
.graph-points { display: flex; flex-wrap: wrap; gap: 0.55rem; }
.graph-points button { display: grid; gap: 0.12rem; padding: 0.72rem 0.9rem; border: 0; border-radius: 16px; color: ${t.text}; background: rgba(255,255,255,0.08); font: inherit; cursor: pointer; text-align: left; }
.graph-points button span { color: ${t.muted}; font-size: 0.82rem; }
.graph-points button strong { font-size: 0.98rem; }
.graph-points button.active { color: ${t.bg}; background: ${t.accent}; }
.graph-points button.active span { color: inherit; }`,js:`const points = [
  { label: 'Mon', value: 11200, x: 10, y: 145, color: '${t.accent}' },
  { label: 'Tue', value: 14800, x: 80, y: 92, color: 'color-mix(in srgb, ${t.accent} 82%, white 18%)' },
  { label: 'Wed', value: 13900, x: 150, y: 108, color: 'color-mix(in srgb, ${t.surface} 70%, ${t.accent} 30%)' },
  { label: 'Thu', value: 19400, x: 230, y: 42, color: '${t.accent}' },
  { label: 'Fri', value: 16800, x: 310, y: 68, color: 'color-mix(in srgb, ${t.text} 24%, ${t.accent} 76%)' },
];
const baselineY = 160;
const [active, setActive] = useState(3);
const [chartNode, setChartNode] = useState(null);
const [entered, setEntered] = useState(false);
const [progress, setProgress] = useState(0);

useEffect(() => {
  if (!chartNode || entered) {
    return undefined;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setEntered(true);
        observer.disconnect();
      }
    },
    { threshold: 0.55, rootMargin: '0px 0px -12% 0px' }
  );

  observer.observe(chartNode);

  return () => observer.disconnect();
}, [chartNode, entered]);

useEffect(() => {
  if (!entered) {
    return undefined;
  }

  let frameId = 0;
  let startTime = 0;
  const duration = 720;

  function tick(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    const nextProgress = Math.min((timestamp - startTime) / duration, 1);
    setProgress(nextProgress);

    if (nextProgress < 1) {
      frameId = window.requestAnimationFrame(tick);
    }
  }

  frameId = window.requestAnimationFrame(tick);
  return () => window.cancelAnimationFrame(frameId);
}, [entered]);

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function formatValue(value) {
  return \`\${(value / 1000).toFixed(1)}K\`;
}

const animatedPoints = points.map((point) => ({
  ...point,
  y: lerp(baselineY, point.y, progress),
  rawValue: Math.round(lerp(0, point.value, progress)),
}));

const linePoints = animatedPoints.map((point) => \`\${point.x},\${point.y}\`).join(' ');`})},{id:"animated-table-reveal",name:"Animated Table Reveal",description:"Data table with reveal-on-select emphasis and compact motion feedback.",preview:"list",style:"Animated",category:"Data",build:t=>({html:`<section className="animated-table-template">
  <div className="animated-table-head"><span>Report</span><span>State</span><span>Owner</span></div>
  {rows.map((row) => (
    <button key={row.report} className={selected === row.report ? 'active' : ''} onClick={() => setSelected(row.report)}>
      <span>{row.report}</span><span>{row.state}</span><span>{row.owner}</span>
    </button>
  ))}
</section>`,css:`.animated-table-template { display: grid; gap: 0.6rem; width: min(100%, 720px); padding: 1.2rem; border-radius: 24px; color: ${t.text}; background: ${t.surface}; }
.animated-table-head, .animated-table-template button { display: grid; grid-template-columns: 1.3fr 0.9fr 1fr; gap: 0.75rem; align-items: center; }
.animated-table-head { padding: 0 0.3rem; color: ${t.muted}; font-size: 0.82rem; font-weight: 700; }
.animated-table-template button { padding: 0.92rem 1rem; border: 0; border-radius: 16px; color: ${t.text}; background: rgba(255,255,255,0.08); font: inherit; text-align: left; cursor: pointer; transition: transform 160ms ease, background 160ms ease; }
.animated-table-template button.active { color: ${t.bg}; background: ${t.accent}; transform: translateY(-2px); }`,js:`const rows = [
  { report: 'Weekly Reach', state: 'Fresh', owner: 'Avery' },
  { report: 'Export Queue', state: 'Queued', owner: 'Jordan' },
  { report: 'UI Trends', state: 'Ready', owner: 'Mina' },
];
const [selected, setSelected] = useState('UI Trends');`})},{id:"neubrutal-bar-chart",name:"Neubrutal Bar Chart",description:"Chunky chart with hard edges and loud contrast.",preview:"stats",style:"Neubrutalism",category:"Data",build:t=>({html:`<section className="neubrutal-chart-template">
  <strong>{bars[focus].label} · {bars[focus].value}</strong>
  <div className="neubrutal-chart-bars">
    {bars.map((bar, index) => (
      <button key={bar.label} className={focus === index ? 'active' : ''} onClick={() => setFocus(index)}>
        <em>{bar.value}</em>
        <span style={{ height: \`\${bar.height}%\` }} />
        <small>{bar.label}</small>
      </button>
    ))}
  </div>
</section>`,css:`.neubrutal-chart-template { display: grid; gap: 1rem; width: min(100%, 620px); padding: 1.2rem; border: 3px solid #111827; border-radius: 22px; color: #111827; background: color-mix(in srgb, ${t.accent} 24%, #fefce8 76%); box-shadow: 10px 10px 0 #111827; }
.neubrutal-chart-bars { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.75rem; align-items: stretch; min-height: 240px; }
.neubrutal-chart-bars button { display: grid; grid-template-rows: auto 1fr auto; gap: 0.45rem; justify-items: center; align-items: end; width: 100%; height: 100%; padding: 0; border: 0; color: #111827; background: transparent; font: inherit; cursor: pointer; text-align: center; }
.neubrutal-chart-bars button:focus { outline: none; }
.neubrutal-chart-bars button:focus-visible span { outline: 3px solid #111827; outline-offset: 4px; }
.neubrutal-chart-bars em { font-style: normal; font-size: 0.78rem; font-weight: 800; }
.neubrutal-chart-bars span { display: block; align-self: end; width: 100%; max-width: 56px; min-height: 14px; border: 3px solid #111827; border-radius: 16px 16px 6px 6px; background: white; box-shadow: 4px 4px 0 #111827; }
.neubrutal-chart-bars button.active span { background: ${t.accent}; }`,js:`const bars = [
  { label: 'Mon', value: '8K', height: 34 },
  { label: 'Tue', value: '14K', height: 56 },
  { label: 'Wed', value: '17K', height: 66 },
  { label: 'Thu', value: '21K', height: 82 },
  { label: 'Fri', value: '16K', height: 60 },
];
const [focus, setFocus] = useState(3);`})},{id:"neubrutal-data-table",name:"Neubrutal Data Table",description:"Bold table layout with heavy borders and playful contrast.",preview:"list",style:"Neubrutalism",category:"Data",build:t=>({html:`<section className="neubrutal-table-template">
  <div className="neubrutal-table-head"><span>Item</span><span>State</span><span>Owner</span></div>
  {rows.map((row) => (
    <button key={row.item} className={selected === row.item ? 'active' : ''} onClick={() => setSelected(row.item)}>
      <span>{row.item}</span><span>{row.state}</span><span>{row.owner}</span>
    </button>
  ))}
</section>`,css:`.neubrutal-table-template { display: grid; gap: 0.6rem; width: min(100%, 720px); padding: 1.15rem; border: 3px solid #111827; border-radius: 22px; color: #111827; background: color-mix(in srgb, ${t.accent} 22%, #fff7ed 78%); box-shadow: 10px 10px 0 #111827; }
.neubrutal-table-head, .neubrutal-table-template button { display: grid; grid-template-columns: 1.3fr 0.9fr 1fr; gap: 0.75rem; align-items: center; }
.neubrutal-table-head { padding: 0 0.3rem; font-size: 0.82rem; font-weight: 800; }
.neubrutal-table-template button { padding: 0.9rem 1rem; border: 3px solid #111827; border-radius: 16px; color: #111827; background: white; box-shadow: 4px 4px 0 #111827; font: inherit; text-align: left; cursor: pointer; }
.neubrutal-table-template button.active { background: ${t.accent}; }`,js:`const rows = [
  { item: 'BrutalChart', state: 'Ready', owner: 'Avery' },
  { item: 'LoudTable', state: 'Draft', owner: 'Jordan' },
  { item: 'PunchList', state: 'Ship', owner: 'Mina' },
];
const [selected, setSelected] = useState('PunchList');`})},{id:"bento-insights-board",name:"Bento Insights Board",description:"Bento-style data dashboard with chart tile and metric cards.",preview:"layout",style:"Bento",category:"Data",build:t=>({html:`<section className="bento-data-template">
  <article className="bento-data-card hero">
    <strong>Trend graph</strong>
    <svg viewBox="0 0 280 120"><polyline points="10,92 70,56 130,68 190,30 250,48" /></svg>
  </article>
  {cards.map((card) => (
    <article key={card.label} className="bento-data-card">
      <p>{card.label}</p>
      <strong>{card.value}</strong>
      <span>{card.copy}</span>
    </article>
  ))}
</section>`,css:`.bento-data-template { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; width: min(100%, 840px); }
.bento-data-card { display: grid; gap: 0.45rem; min-height: 150px; padding: 1.1rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 88%, white 12%), ${t.bg}); }
.bento-data-card.hero { grid-column: span 2; }
.bento-data-card svg { width: 100%; height: 120px; fill: none; stroke: ${t.accent}; stroke-width: 10; stroke-linecap: round; stroke-linejoin: round; }
.bento-data-card p, .bento-data-card strong, .bento-data-card span { margin: 0; }
.bento-data-card span, .bento-data-card p { color: ${t.muted}; }`,js:`const cards = [
  { label: 'Exports', value: '184', copy: 'Weekly total' },
  { label: 'Shares', value: '52', copy: 'Team handoffs' },
  { label: 'Reviews', value: '16', copy: 'Pending approvals' },
];`})},{id:"bento-table-cluster",name:"Bento Table Cluster",description:"Asymmetrical data layout with table rows embedded in a card wall.",preview:"layout",style:"Bento",category:"Data",build:t=>({html:`<section className="bento-table-template">
  <article className="cluster-main">
    <strong>Queue</strong>
    {rows.map((row) => <p key={row.name}>{row.name} · {row.status}</p>)}
  </article>
  <article className="cluster-side"><strong>Owner</strong><p>{rows[0].owner}</p></article>
  <article className="cluster-side"><strong>ETA</strong><p>18 mins</p></article>
</section>`,css:`.bento-table-template { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 0.9rem; width: min(100%, 840px); }
.cluster-main, .cluster-side { display: grid; gap: 0.55rem; min-height: 150px; padding: 1.1rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 88%, white 12%), ${t.bg}); }
.cluster-main p, .cluster-side p, .cluster-main strong, .cluster-side strong { margin: 0; }
.cluster-main p, .cluster-side p { color: ${t.muted}; }`,js:`const rows = [
  { name: 'HeroChart', status: 'Ready', owner: 'Avery' },
  { name: 'TeamTable', status: 'Draft', owner: 'Jordan' },
  { name: 'GraphDock', status: 'Review', owner: 'Mina' },
];`})},{id:"terminal-metrics-plot",name:"Terminal Metrics Plot",description:"Monospace metrics plot with palette-driven signal bars.",preview:"status",style:"Terminal",category:"Data",build:t=>({html:`<section className="terminal-plot-template">
  <header><strong>metrics.plot</strong><span>{bars[active].label} · {bars[active].value}</span></header>
  <div className="terminal-plot-bars">
    {bars.map((bar, index) => (
      <button key={bar.label} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
        <em>{bar.value}</em>
        <span style={{ height: \`\${bar.height}%\` }} />
        <small>{bar.label}</small>
      </button>
    ))}
  </div>
</section>`,css:`.terminal-plot-template { --terminal-accent: ${t.accent}; --terminal-ink: color-mix(in srgb, ${t.text} 86%, white 14%); --terminal-bg: color-mix(in srgb, ${t.bg} 90%, #020617 10%); display: grid; gap: 0.9rem; width: min(100%, 640px); padding: 1.2rem; border-radius: 18px; color: var(--terminal-ink); background: radial-gradient(circle at top right, color-mix(in srgb, var(--terminal-accent) 18%, transparent), transparent 28%), var(--terminal-bg); border: 1px solid color-mix(in srgb, var(--terminal-accent) 28%, transparent); font-family: "IBM Plex Mono", "SFMono-Regular", monospace; }
.terminal-plot-template header { display: flex; justify-content: space-between; gap: 1rem; color: color-mix(in srgb, var(--terminal-ink) 74%, transparent); }
.terminal-plot-bars { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.7rem; align-items: stretch; min-height: 240px; }
.terminal-plot-bars button { display: grid; grid-template-rows: auto 1fr auto; gap: 0.45rem; justify-items: center; align-items: end; width: 100%; height: 100%; padding: 0; border: 0; color: var(--terminal-ink); background: transparent; font: inherit; cursor: pointer; text-align: center; }
.terminal-plot-bars em { font-style: normal; font-size: 0.78rem; font-weight: 700; color: var(--terminal-ink); }
.terminal-plot-bars span { display: block; align-self: end; width: 100%; max-width: 54px; min-height: 14px; border-radius: 10px 10px 4px 4px; background: color-mix(in srgb, var(--terminal-accent) 22%, transparent); }
.terminal-plot-bars button.active span { background: var(--terminal-accent); }`,js:`const bars = [
  { label: '00', value: '31 req', height: 32 },
  { label: '06', value: '58 req', height: 58 },
  { label: '12', value: '84 req', height: 84 },
  { label: '18', value: '66 req', height: 66 },
  { label: '24', value: '48 req', height: 48 },
];
const [active, setActive] = useState(2);`})},{id:"terminal-log-table",name:"Terminal Log Table",description:"Console-style data table with palette-specific ink and accent.",preview:"list",style:"Terminal",category:"Data",build:t=>({html:`<section className="terminal-table-template">
  <div className="terminal-table-head"><span>File</span><span>State</span><span>User</span></div>
  {rows.map((row) => (
    <button key={row.file} className={selected === row.file ? 'active' : ''} onClick={() => setSelected(row.file)}>
      <span>{row.file}</span><span>{row.state}</span><span>{row.user}</span>
    </button>
  ))}
</section>`,css:`.terminal-table-template { --terminal-accent: ${t.accent}; --terminal-ink: color-mix(in srgb, ${t.text} 86%, white 14%); --terminal-bg: color-mix(in srgb, ${t.bg} 90%, #020617 10%); display: grid; gap: 0.6rem; width: min(100%, 720px); padding: 1.15rem; border-radius: 18px; color: var(--terminal-ink); background: radial-gradient(circle at top left, color-mix(in srgb, var(--terminal-accent) 14%, transparent), transparent 28%), var(--terminal-bg); border: 1px solid color-mix(in srgb, var(--terminal-accent) 28%, transparent); font-family: "IBM Plex Mono", "SFMono-Regular", monospace; }
.terminal-table-head, .terminal-table-template button { display: grid; grid-template-columns: 1.3fr 0.9fr 1fr; gap: 0.75rem; align-items: center; }
.terminal-table-head { padding: 0 0.3rem; color: color-mix(in srgb, var(--terminal-ink) 74%, transparent); font-size: 0.82rem; font-weight: 700; }
.terminal-table-template button { padding: 0.9rem 1rem; border: 0; border-radius: 12px; color: var(--terminal-ink); background: color-mix(in srgb, var(--terminal-accent) 7%, transparent); font: inherit; text-align: left; cursor: pointer; }
.terminal-table-template button.active { color: #020617; background: var(--terminal-accent); }`,js:`const rows = [
  { file: 'graph.jsx', state: 'ready', user: 'avery' },
  { file: 'table.css', state: 'draft', user: 'jordan' },
  { file: 'chart.js', state: 'live', user: 'mina' },
];
const [selected, setSelected] = useState('chart.js');`})},{id:"material-sparkline-card",name:"Material Sparkline Card",description:"Material-style analytics card with sparkline and compact summary.",preview:"stats",style:"Material",category:"Data",build:t=>({html:`<section className="material-chart-template">
  <div className="material-chart-head">
    <div><p>Session growth</p><strong>{points[focus].value}</strong></div>
    <button onClick={() => setFocus((value) => (value + 1) % points.length)}>Next</button>
  </div>
  <svg viewBox="0 0 320 140"><polyline points={linePoints} /></svg>
  <div className="material-chart-points">
    {points.map((point, index) => (
      <button key={point.label} className={focus === index ? 'active' : ''} onClick={() => setFocus(index)}>
        <span>{point.label}</span>
        <strong>{point.value}</strong>
      </button>
    ))}
  </div>
</section>`,css:`.material-chart-template { display: grid; gap: 0.95rem; width: min(100%, 620px); padding: 1rem; border-radius: 24px; color: ${t.text}; background: color-mix(in srgb, ${t.surface} 92%, white 8%); box-shadow: 0 8px 18px rgba(15,23,42,0.12); }
.material-chart-head { display: flex; justify-content: space-between; gap: 1rem; align-items: start; }
.material-chart-head p, .material-chart-head strong { margin: 0; }
.material-chart-head p { color: ${t.muted}; }
.material-chart-head button { padding: 0.72rem 0.92rem; border: 0; border-radius: 999px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }
.material-chart-template svg { width: 100%; height: 140px; fill: none; stroke: ${t.accent}; stroke-width: 10; stroke-linecap: round; stroke-linejoin: round; }
.material-chart-points { display: flex; flex-wrap: wrap; gap: 0.55rem; }
.material-chart-points button { display: grid; gap: 0.12rem; padding: 0.75rem 0.9rem; border: 0; border-radius: 16px; color: #0f172a; background: white; box-shadow: 0 4px 10px rgba(15,23,42,0.08); font: inherit; text-align: left; cursor: pointer; }
.material-chart-points button span { color: #475569; font-size: 0.82rem; }
.material-chart-points button.active { color: ${t.bg}; background: ${t.accent}; }
.material-chart-points button.active span { color: inherit; }`,js:`const points = [
  { label: 'Mon', value: '12.4K' },
  { label: 'Tue', value: '15.2K' },
  { label: 'Wed', value: '17.8K' },
  { label: 'Thu', value: '19.1K' },
  { label: 'Fri', value: '18.2K' },
];
const linePoints = '10,112 80,88 150,64 220,40 310,52';
const [focus, setFocus] = useState(3);`})},{id:"material-data-table",name:"Material Data Table",description:"Material-inspired data table with soft rows and clear selection state.",preview:"list",style:"Material",category:"Data",build:t=>({html:`<section className="material-table-template">
  <div className="material-table-head"><span>Name</span><span>State</span><span>Lead</span></div>
  {rows.map((row) => (
    <button key={row.name} className={selected === row.name ? 'active' : ''} onClick={() => setSelected(row.name)}>
      <span>{row.name}</span><span>{row.state}</span><span>{row.lead}</span>
    </button>
  ))}
</section>`,css:`.material-table-template { display: grid; gap: 0.6rem; width: min(100%, 720px); padding: 0.95rem; border-radius: 24px; color: ${t.text}; background: color-mix(in srgb, ${t.surface} 92%, white 8%); box-shadow: 0 8px 18px rgba(15,23,42,0.12); }
.material-table-head, .material-table-template button { display: grid; grid-template-columns: 1.3fr 0.9fr 1fr; gap: 0.75rem; align-items: center; }
.material-table-head { padding: 0 0.3rem; color: ${t.id==="sand"?"#475569":"#f8fafc"}; font-size: 0.82rem; font-weight: 700; }
.material-table-template button { padding: 0.9rem 1rem; border: 0; border-radius: 16px; color: ${t.text}; background: white; box-shadow: 0 4px 10px rgba(15,23,42,0.08); font: inherit; text-align: left; cursor: pointer; }
.material-table-template button.active { color: ${t.bg}; background: ${t.accent}; }`,js:`const rows = [
  { name: 'SparklineCard', state: 'Ready', lead: 'Avery' },
  { name: 'TableStack', state: 'Draft', lead: 'Jordan' },
  { name: 'MetricBoard', state: 'Review', lead: 'Mina' },
];
const [selected, setSelected] = useState('SparklineCard');`})},{id:"neumorphic-utility-card",name:"Neumorphic Utility Card",description:"Soft utility card with status, summary copy, and a tactile saved state.",preview:"core",style:"Neumorphic",category:"Components",build:t=>({html:`<article className="neu-utility-card">
  <div className="neu-utility-top">
    <div className="neu-utility-orb" />
    <button onClick={() => setSaved((value) => !value)}>{saved ? 'Saved' : 'Save'}</button>
  </div>
  <div>
    <p>Workspace utility</p>
    <strong>Build queue helper</strong>
  </div>
  <span>{saved ? 'Pinned to your workspace' : 'Tap to pin this component'}</span>
</article>`,css:`.neu-utility-card { --neu-base: color-mix(in srgb, ${t.surface} 10%, #e9eef4 90%); --neu-shadow-dark: color-mix(in srgb, ${t.bg} 10%, #b1bcc9 90%); --neu-shadow-light: rgba(255,255,255,0.68); --neu-text: color-mix(in srgb, ${t.bg} 48%, #445061 52%); display: grid; gap: 1rem; width: min(100%, 360px); padding: 1.3rem; border-radius: 28px; color: var(--neu-text); background: var(--neu-base); box-shadow: 14px 14px 28px var(--neu-shadow-dark), -12px -12px 24px var(--neu-shadow-light); }
.neu-utility-top { display: flex; justify-content: space-between; gap: 1rem; align-items: center; }
.neu-utility-orb { width: 3rem; height: 3rem; border-radius: 50%; background: linear-gradient(135deg, color-mix(in srgb, ${t.accent} 76%, white 24%), ${t.accent}); box-shadow: 8px 8px 16px var(--neu-shadow-dark), -8px -8px 16px var(--neu-shadow-light); }
.neu-utility-card button { padding: 0.72rem 0.95rem; border: 0; border-radius: 999px; color: ${t.accent}; background: var(--neu-base); box-shadow: inset 4px 4px 10px var(--neu-shadow-dark), inset -4px -4px 10px var(--neu-shadow-light); font: inherit; font-weight: 700; cursor: pointer; }
.neu-utility-card p, .neu-utility-card strong, .neu-utility-card span { margin: 0; }
.neu-utility-card p, .neu-utility-card span { color: color-mix(in srgb, var(--neu-text) 74%, white 26%); }`,js:"const [saved, setSaved] = useState(true);"})},{id:"skeuo-device-card",name:"Skeuomorphic Device Card",description:"Physical device-style card with glossy display and hardware toggle.",preview:"core",style:"Skeuomorphic",category:"Components",build:t=>({html:`<article className="skeuo-device-card">
  <div className="skeuo-device-screen">
    <p>Signal</p>
    <strong>{armed ? 'ARMED' : 'IDLE'}</strong>
  </div>
  <div className="skeuo-device-meta">
    <div>
      <span>Panel module</span>
      <strong>Console relay</strong>
    </div>
    <button onClick={() => setArmed((value) => !value)}>{armed ? 'Disarm' : 'Arm'}</button>
  </div>
</article>`,css:`.skeuo-device-card { display: grid; gap: 1rem; width: min(100%, 360px); padding: 1.2rem; border-radius: 28px; color: ${t.text}; background: repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 6px, rgba(0,0,0,0.02) 6px 12px), linear-gradient(180deg, color-mix(in srgb, ${t.surface} 72%, white 28%), color-mix(in srgb, ${t.bg} 82%, black 18%)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -3px 6px rgba(0,0,0,0.18), 0 18px 45px rgba(15,23,42,0.28); }
.skeuo-device-screen { display: grid; gap: 0.35rem; padding: 1rem; border-radius: 20px; color: color-mix(in srgb, ${t.accent} 78%, white 22%); background: linear-gradient(180deg, rgba(7,12,20,0.95), rgba(17,24,39,0.9)); box-shadow: inset 0 2px 4px rgba(255,255,255,0.12), inset 0 -10px 18px rgba(0,0,0,0.42); }
.skeuo-device-screen p, .skeuo-device-screen strong, .skeuo-device-meta span, .skeuo-device-meta strong { margin: 0; }
.skeuo-device-meta { display: flex; justify-content: space-between; gap: 1rem; align-items: center; }
.skeuo-device-meta span { display: block; color: ${t.muted}; font-size: 0.82rem; }
.skeuo-device-card button { padding: 0.75rem 0.95rem; border: 0; border-radius: 14px; color: ${t.text}; background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 78%, white 22%), color-mix(in srgb, ${t.bg} 82%, black 18%)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -2px 5px rgba(0,0,0,0.16), 0 6px 12px rgba(15,23,42,0.2); font: inherit; font-weight: 700; cursor: pointer; }`,js:"const [armed, setArmed] = useState(true);"})},{id:"skeuo-status-lamp",name:"Skeuomorphic Status Lamp",description:"Physical indicator card with a lit lamp and hardware-style status toggle.",preview:"status",style:"Skeuomorphic",category:"Feedback",build:t=>({html:`<article className="skeuo-lamp-card">
  <div className={\`skeuo-lamp \${online ? 'online' : ''}\`} />
  <div>
    <p>System status</p>
    <strong>{online ? 'Online and synced' : 'Standby mode'}</strong>
  </div>
  <button onClick={() => setOnline((value) => !value)}>{online ? 'Disable' : 'Enable'}</button>
</article>`,css:`.skeuo-lamp-card { display: grid; gap: 1rem; width: min(100%, 340px); padding: 1.2rem; border-radius: 24px; color: ${t.text}; background: repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 6px, rgba(0,0,0,0.02) 6px 12px), linear-gradient(180deg, color-mix(in srgb, ${t.surface} 72%, white 28%), color-mix(in srgb, ${t.bg} 82%, black 18%)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -3px 6px rgba(0,0,0,0.18), 0 18px 45px rgba(15,23,42,0.28); }
.skeuo-lamp { width: 4.25rem; height: 4.25rem; border-radius: 50%; background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.38), rgba(255,255,255,0.04) 38%, rgba(0,0,0,0.24) 76%), linear-gradient(180deg, #374151, #111827); box-shadow: inset 0 2px 4px rgba(255,255,255,0.16), inset 0 -12px 18px rgba(0,0,0,0.4); }
.skeuo-lamp.online { background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.52), color-mix(in srgb, ${t.accent} 78%, white 22%) 34%, color-mix(in srgb, ${t.accent} 82%, black 18%) 76%); box-shadow: 0 0 0 6px rgba(255,255,255,0.05), 0 0 28px color-mix(in srgb, ${t.accent} 46%, transparent), inset 0 2px 4px rgba(255,255,255,0.26), inset 0 -12px 18px rgba(0,0,0,0.22); }
.skeuo-lamp-card p, .skeuo-lamp-card strong { margin: 0; }
.skeuo-lamp-card p { color: ${t.muted}; }
.skeuo-lamp-card button { width: fit-content; padding: 0.75rem 0.95rem; border: 0; border-radius: 14px; color: ${t.text}; background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 78%, white 22%), color-mix(in srgb, ${t.bg} 82%, black 18%)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -2px 5px rgba(0,0,0,0.16), 0 6px 12px rgba(15,23,42,0.2); font: inherit; font-weight: 700; cursor: pointer; }`,js:"const [online, setOnline] = useState(true);"})},{id:"neubrutal-sticker-card",name:"Neubrutal Sticker Card",description:"Chunky component card with loud borders, sticker badge, and toggle state.",preview:"core",style:"Neubrutalism",category:"Components",build:t=>({html:`<article className="neubrutal-sticker-card">
  <span className="badge">{featured ? 'Hot' : 'New'}</span>
  <strong>Launch Module</strong>
  <p>Rigid, noisy component chrome for dashboards and promo cards.</p>
  <button onClick={() => setFeatured((value) => !value)}>{featured ? 'Unfeature' : 'Feature'}</button>
</article>`,css:`.neubrutal-sticker-card { display: grid; gap: 0.85rem; width: min(100%, 340px); padding: 1.1rem; border: 3px solid #111827; border-radius: 24px; color: #111827; background: color-mix(in srgb, ${t.accent} 24%, #fff7ed 76%); box-shadow: 10px 10px 0 #111827; }
.neubrutal-sticker-card .badge { width: fit-content; padding: 0.38rem 0.65rem; border: 3px solid #111827; border-radius: 999px; background: white; box-shadow: 4px 4px 0 #111827; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; }
.neubrutal-sticker-card strong, .neubrutal-sticker-card p { margin: 0; }
.neubrutal-sticker-card p { color: rgba(17,24,39,0.84); }
.neubrutal-sticker-card button { width: fit-content; padding: 0.78rem 1rem; border: 3px solid #111827; border-radius: 16px; color: #111827; background: white; box-shadow: 4px 4px 0 #111827; font: inherit; font-weight: 800; cursor: pointer; }`,js:"const [featured, setFeatured] = useState(true);"})},{id:"bento-profile-tile",name:"Bento Profile Tile",description:"Bento component tile with avatar block, key details, and open state.",preview:"layout",style:"Bento",category:"Components",build:t=>({html:`<article className="bento-profile-tile">
  <div className="bento-avatar">{expanded ? 'JJ' : 'UI'}</div>
  <div className="bento-profile-copy">
    <p>Product designer</p>
    <strong>Jamie Jams</strong>
    <span>{expanded ? 'Shipping palettes, previews, and docs' : 'Open for details'}</span>
  </div>
  <button onClick={() => setExpanded((value) => !value)}>{expanded ? 'Collapse' : 'Expand'}</button>
</article>`,css:`.bento-profile-tile { display: grid; grid-template-columns: auto 1fr auto; gap: 0.9rem; align-items: center; width: min(100%, 560px); padding: 1rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 88%, white 12%), ${t.bg}); }
.bento-avatar { display: grid; place-items: center; width: 4rem; height: 4rem; border-radius: 20px; color: ${t.bg}; background: ${t.accent}; font-weight: 800; font-size: 1rem; }
.bento-profile-copy p, .bento-profile-copy strong, .bento-profile-copy span { margin: 0; }
.bento-profile-copy p, .bento-profile-copy span { color: ${t.muted}; }
.bento-profile-tile button { padding: 0.72rem 0.95rem; border: 0; border-radius: 16px; color: ${t.text}; background: color-mix(in srgb, ${t.surface} 92%, white 8%); font: inherit; font-weight: 700; cursor: pointer; }
@media (max-width: 640px) { .bento-profile-tile { grid-template-columns: 1fr; justify-items: start; } }`,js:"const [expanded, setExpanded] = useState(true);"})},{id:"bento-action-cluster",name:"Bento Action Cluster",description:"Dashboard-style action tile with primary and secondary controls.",preview:"core",style:"Bento",category:"Actions",build:t=>({html:`<section className="bento-action-cluster">
  <div>
    <p>Quick actions</p>
    <strong>{actions[active].title}</strong>
  </div>
  <div className="bento-action-grid">
    {actions.map((action, index) => (
      <button key={action.title} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
        <span>{action.label}</span>
        <strong>{action.title}</strong>
      </button>
    ))}
  </div>
</section>`,css:`.bento-action-cluster { display: grid; gap: 0.9rem; width: min(100%, 620px); padding: 1rem; border-radius: 24px; color: ${t.text}; background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 88%, white 12%), ${t.bg}); }
.bento-action-cluster p, .bento-action-cluster strong { margin: 0; }
.bento-action-cluster p { color: ${t.muted}; }
.bento-action-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
.bento-action-grid button { display: grid; gap: 0.2rem; min-height: 5rem; padding: 0.9rem; border: 0; border-radius: 20px; color: ${t.text}; background: color-mix(in srgb, ${t.surface} 92%, white 8%); font: inherit; text-align: left; cursor: pointer; }
.bento-action-grid button span { color: ${t.muted}; font-size: 0.82rem; }
.bento-action-grid button.active { color: ${t.bg}; background: ${t.accent}; }
.bento-action-grid button.active span { color: inherit; }
@media (max-width: 640px) { .bento-action-grid { grid-template-columns: 1fr; } }`,js:`const actions = [
  { label: 'Cmd', title: 'Open exports' },
  { label: 'Ctrl', title: 'Share preview' },
  { label: 'Alt', title: 'Duplicate card' },
  { label: 'Tab', title: 'Jump to wiki' },
];
const [active, setActive] = useState(0);`})},{id:"bento-status-stack",name:"Bento Status Stack",description:"Stacked feedback cards with dismissible status emphasis.",preview:"status",style:"Bento",category:"Feedback",build:t=>({html:`<section className="bento-status-stack">
  {items.map((item) => (
    <button key={item.title} className={active === item.title ? 'active' : ''} onClick={() => setActive(item.title)}>
      <strong>{item.title}</strong>
      <span>{item.copy}</span>
    </button>
  ))}
</section>`,css:`.bento-status-stack { display: grid; gap: 0.75rem; width: min(100%, 520px); }
.bento-status-stack button { display: grid; gap: 0.2rem; padding: 1rem; border: 0; border-radius: 22px; color: ${t.text}; background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 88%, white 12%), ${t.bg}); font: inherit; text-align: left; cursor: pointer; }
.bento-status-stack button span { color: ${t.muted}; }
.bento-status-stack button.active { color: ${t.bg}; background: ${t.accent}; }
.bento-status-stack button.active span { color: inherit; }`,js:`const items = [
  { title: 'Export complete', copy: 'Your React player zip is ready to share.' },
  { title: 'Preview updated', copy: 'Component code re-rendered successfully.' },
  { title: 'Docs synced', copy: 'Wiki content was refreshed from the latest draft.' },
];
const [active, setActive] = useState('Export complete');`})},{id:"bento-tab-rail",name:"Bento Tab Rail",description:"Tile-like navigation strip for dashboard sections and builder views.",preview:"core",style:"Bento",category:"Navigation",build:t=>({html:`<nav className="bento-tab-rail">
  {tabs.map((tab) => (
    <button key={tab} className={active === tab ? 'active' : ''} onClick={() => setActive(tab)}>
      {tab}
    </button>
  ))}
</nav>`,css:`.bento-tab-rail { display: flex; flex-wrap: wrap; gap: 0.75rem; width: min(100%, 620px); }
.bento-tab-rail button { padding: 0.9rem 1rem; border: 0; border-radius: 18px; color: ${t.text}; background: linear-gradient(180deg, color-mix(in srgb, ${t.surface} 88%, white 12%), ${t.bg}); font: inherit; font-weight: 700; cursor: pointer; }
.bento-tab-rail button.active { color: ${t.bg}; background: ${t.accent}; }`,js:`const tabs = ['Overview', 'Templates', 'Exports', 'Settings'];
const [active, setActive] = useState('Templates');`})},{id:"terminal-module-card",name:"Terminal Module Card",description:"Console-inspired component card for process modules and runtime status.",preview:"status",style:"Terminal",category:"Components",build:t=>({html:`<article className="terminal-module-card">
  <header><strong>module://jammy/export</strong><span>{running ? 'running' : 'paused'}</span></header>
  <p>Runtime helper for previews, generated output, and export tasks.</p>
  <button onClick={() => setRunning((value) => !value)}>{running ? 'pause' : 'resume'}</button>
</article>`,css:`.terminal-module-card { --terminal-accent: ${t.accent}; --terminal-ink: color-mix(in srgb, ${t.text} 86%, white 14%); --terminal-bg: color-mix(in srgb, ${t.bg} 90%, #020617 10%); display: grid; gap: 0.85rem; width: min(100%, 420px); padding: 1.05rem; border-radius: 18px; color: var(--terminal-ink); background: radial-gradient(circle at top right, color-mix(in srgb, var(--terminal-accent) 16%, transparent), transparent 28%), var(--terminal-bg); border: 1px solid color-mix(in srgb, var(--terminal-accent) 28%, transparent); font-family: "IBM Plex Mono", "SFMono-Regular", monospace; }
.terminal-module-card header { display: flex; justify-content: space-between; gap: 1rem; color: color-mix(in srgb, var(--terminal-ink) 78%, transparent); }
.terminal-module-card p { margin: 0; color: var(--terminal-ink); }
.terminal-module-card button { width: fit-content; padding: 0.72rem 0.9rem; border: 0; border-radius: 12px; color: #020617; background: var(--terminal-accent); font: inherit; font-weight: 700; cursor: pointer; }`,js:"const [running, setRunning] = useState(true);"})},{id:"terminal-action-row",name:"Terminal Action Row",description:"Monospace command actions for runtime operations and quick tooling.",preview:"core",style:"Terminal",category:"Actions",build:t=>({html:`<section className="terminal-action-row">
  {commands.map((command) => (
    <button key={command} className={active === command ? 'active' : ''} onClick={() => setActive(command)}>
      {command}
    </button>
  ))}
</section>`,css:`.terminal-action-row { --terminal-accent: ${t.accent}; --terminal-ink: color-mix(in srgb, ${t.text} 86%, white 14%); --terminal-bg: color-mix(in srgb, ${t.bg} 90%, #020617 10%); display: flex; flex-wrap: wrap; gap: 0.75rem; width: min(100%, 640px); }
.terminal-action-row button { padding: 0.78rem 0.92rem; border: 1px solid color-mix(in srgb, var(--terminal-accent) 24%, transparent); border-radius: 12px; color: var(--terminal-ink); background: var(--terminal-bg); font: inherit; font-family: "IBM Plex Mono", "SFMono-Regular", monospace; cursor: pointer; }
.terminal-action-row button.active { color: #020617; background: var(--terminal-accent); }`,js:`const commands = ['run preview', 'export zip', 'toggle theme', 'open wiki'];
const [active, setActive] = useState('run preview');`})},{id:"terminal-alert-feed",name:"Terminal Alert Feed",description:"Stacked console alerts with palette-driven severity emphasis.",preview:"status",style:"Terminal",category:"Feedback",build:t=>({html:`<section className="terminal-alert-feed">
  {alerts.map((alert) => (
    <button key={alert.title} className={selected === alert.title ? 'active' : ''} onClick={() => setSelected(alert.title)}>
      <strong>{alert.title}</strong>
      <span>{alert.copy}</span>
    </button>
  ))}
</section>`,css:`.terminal-alert-feed { --terminal-accent: ${t.accent}; --terminal-ink: color-mix(in srgb, ${t.text} 86%, white 14%); --terminal-bg: color-mix(in srgb, ${t.bg} 90%, #020617 10%); display: grid; gap: 0.7rem; width: min(100%, 520px); }
.terminal-alert-feed button { display: grid; gap: 0.2rem; padding: 0.95rem 1rem; border: 1px solid color-mix(in srgb, var(--terminal-accent) 22%, transparent); border-radius: 14px; color: var(--terminal-ink); background: var(--terminal-bg); font: inherit; font-family: "IBM Plex Mono", "SFMono-Regular", monospace; text-align: left; cursor: pointer; }
.terminal-alert-feed button span { color: color-mix(in srgb, var(--terminal-ink) 74%, transparent); }
.terminal-alert-feed button.active { color: #020617; background: var(--terminal-accent); }
.terminal-alert-feed button.active span { color: #020617; }`,js:`const alerts = [
  { title: 'WARN export_queue', copy: '2 builds waiting for player packaging.' },
  { title: 'INFO preview_sync', copy: 'Rendered output refreshed with latest JSX.' },
  { title: 'OK docs_cache', copy: 'Wiki markdown loaded from local bundle.' },
];
const [selected, setSelected] = useState('INFO preview_sync');`})},{id:"terminal-route-tabs",name:"Terminal Route Tabs",description:"Console-styled route tabs for switching between builder tools.",preview:"core",style:"Terminal",category:"Navigation",build:t=>({html:`<nav className="terminal-route-tabs">
  {tabs.map((tab) => (
    <button key={tab} className={active === tab ? 'active' : ''} onClick={() => setActive(tab)}>
      {tab}
    </button>
  ))}
</nav>`,css:`.terminal-route-tabs { --terminal-accent: ${t.accent}; --terminal-ink: color-mix(in srgb, ${t.text} 86%, white 14%); --terminal-bg: color-mix(in srgb, ${t.bg} 90%, #020617 10%); display: flex; flex-wrap: wrap; gap: 0.75rem; width: min(100%, 640px); }
.terminal-route-tabs button { padding: 0.78rem 0.92rem; border: 1px solid color-mix(in srgb, var(--terminal-accent) 24%, transparent); border-radius: 12px; color: var(--terminal-ink); background: var(--terminal-bg); font: inherit; font-family: "IBM Plex Mono", "SFMono-Regular", monospace; cursor: pointer; }
.terminal-route-tabs button.active { color: #020617; background: var(--terminal-accent); }`,js:`const tabs = ['builder', 'library', 'wiki', 'export'];
const [active, setActive] = useState('library');`})},{id:"material-feature-card",name:"Material Feature Card",description:"Elevated feature component with supportive copy and quick action.",preview:"core",style:"Material",category:"Components",build:t=>({html:`<article className="material-feature-card">
  <div className="material-feature-icon">J</div>
  <div>
    <p>Jammy helper</p>
    <strong>Component launch card</strong>
    <span>{enabled ? 'Live previews are enabled' : 'Tap to enable previews'}</span>
  </div>
  <button onClick={() => setEnabled((value) => !value)}>{enabled ? 'Disable' : 'Enable'}</button>
</article>`,css:`.material-feature-card { display: grid; grid-template-columns: auto 1fr auto; gap: 0.9rem; align-items: center; width: min(100%, 620px); padding: 1rem; border-radius: 24px; color: ${t.text}; background: color-mix(in srgb, ${t.surface} 92%, white 8%); box-shadow: 0 8px 18px rgba(15,23,42,0.12); }
.material-feature-icon { display: grid; place-items: center; width: 3.3rem; height: 3.3rem; border-radius: 18px; color: ${t.bg}; background: ${t.accent}; font-weight: 800; }
.material-feature-card p, .material-feature-card strong, .material-feature-card span { display: block; margin: 0; }
.material-feature-card p, .material-feature-card span { color: ${t.muted}; }
.material-feature-card button { padding: 0.72rem 0.92rem; border: 0; border-radius: 999px; color: ${t.bg}; background: ${t.accent}; font: inherit; font-weight: 700; cursor: pointer; }
@media (max-width: 640px) { .material-feature-card { grid-template-columns: 1fr; justify-items: start; } }`,js:"const [enabled, setEnabled] = useState(true);"})},{id:"flat-step-navigation",name:"Flat Step Navigation",description:"Flat 2.0 navigation for linear flows, setup steps, and checklists.",preview:"core",style:"Flat",category:"Navigation",build:t=>({html:`<nav className="flat-step-navigation">
  {steps.map((step, index) => (
    <button key={step} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
      <span>{index + 1}</span>
      <strong>{step}</strong>
    </button>
  ))}
</nav>`,css:`.flat-step-navigation { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.75rem; width: min(100%, 720px); }
.flat-step-navigation button { display: grid; gap: 0.35rem; justify-items: start; padding: 0.95rem 1rem; border: 0; border-radius: 16px; color: ${t.text}; background: ${t.surface}; box-shadow: inset 0 0 0 1px color-mix(in srgb, ${t.bg} 10%, transparent); font: inherit; cursor: pointer; }
.flat-step-navigation button span { display: grid; place-items: center; width: 1.8rem; height: 1.8rem; border-radius: 999px; color: ${t.muted}; background: color-mix(in srgb, ${t.bg} 12%, white 88%); font-size: 0.82rem; font-weight: 700; }
.flat-step-navigation button.active { color: ${t.bg}; background: ${t.accent}; }
.flat-step-navigation button.active span { color: inherit; background: rgba(255,255,255,0.2); }
@media (max-width: 720px) { .flat-step-navigation { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .flat-step-navigation { grid-template-columns: 1fr; } }`,js:`const steps = ['Choose', 'Edit', 'Preview', 'Export'];
const [active, setActive] = useState(2);`})},...R6()];function R6(){return[{key:"core",style:"Core UI",pieName:"Core Pie Chart",ringName:"Core Ring Chart",pieLabel:"Component mix",ringLabel:"Export split",pieDescription:"Clean pie chart with visible segment legend and summary values.",ringDescription:"Clean ring chart with donut center and interactive segment breakdown.",buildCss:(r,i)=>$n({root:i,shell:`padding: 1.25rem; border-radius: 24px; color: ${r.text}; background: linear-gradient(180deg, ${r.surface}, ${r.bg});`,headerCopy:`color: ${r.muted};`,headerBadge:`padding: 0.42rem 0.68rem; border-radius: 999px; color: ${r.bg}; background: ${r.accent}; font-size: 0.82rem; font-weight: 700;`,chart:"box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), 0 16px 30px rgba(15,23,42,0.16);",hole:`background: ${r.surface}; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12);`,center:`color: ${r.text}; background: color-mix(in srgb, ${r.surface} 88%, white 12%); box-shadow: 0 10px 24px rgba(15,23,42,0.16);`,legendButton:`border-radius: 16px; color: ${r.text}; background: color-mix(in srgb, ${r.bg} 84%, white 16%);`,legendLabel:`color: ${r.muted};`,legendValue:`color: ${r.text};`,legendActive:`color: ${r.bg}; background: ${r.accent};`})},{key:"glass",style:"Glassmorphic",pieName:"Glass Pie Chart",ringName:"Glass Ring Chart",pieLabel:"Realtime mix",ringLabel:"Session split",pieDescription:"Frosted pie chart with translucent legend cards and visible data shares.",ringDescription:"Glassmorphic ring chart with donut center, segment values, and frosted controls.",buildCss:(r,i)=>$n({root:i,shell:`padding: 1.3rem; border-radius: 30px; color: ${r.text}; background: linear-gradient(150deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06)); border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(20px) saturate(145%);`,headerCopy:`color: ${r.muted};`,headerBadge:`padding: 0.42rem 0.7rem; border-radius: 999px; color: ${r.bg}; background: ${r.accent}; font-size: 0.82rem; font-weight: 700;`,chart:"box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 18px 40px rgba(15,23,42,0.18); border: 1px solid rgba(255,255,255,0.14);",hole:"background: rgba(255,255,255,0.12); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.16);",center:`color: ${r.text}; background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.16); box-shadow: 0 14px 30px rgba(15,23,42,0.16);`,legendButton:`border-radius: 18px; color: ${r.text}; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); backdrop-filter: blur(12px);`,legendLabel:`color: ${r.muted};`,legendValue:`color: ${r.text};`,legendActive:`color: ${r.bg}; background: ${r.accent}; border-color: transparent;`})},{key:"neu",style:"Neumorphic",pieName:"Neumorphic Pie Chart",ringName:"Neumorphic Ring Chart",pieLabel:"Usage balance",ringLabel:"Soft UI split",pieDescription:"Neumorphic pie chart with embossed legend rows and readable soft-depth labels.",ringDescription:"Neumorphic ring chart with inset donut well and tactile segment selection.",buildCss:(r,i)=>$n({root:i,shell:`--neu-base: color-mix(in srgb, ${r.surface} 10%, #e9eef4 90%); --neu-shadow-dark: color-mix(in srgb, ${r.bg} 10%, #b1bcc9 90%); --neu-shadow-light: rgba(255,255,255,0.68); --neu-text: color-mix(in srgb, ${r.bg} 48%, #445061 52%); padding: 1.3rem; border-radius: 30px; color: var(--neu-text); background: var(--neu-base); box-shadow: 14px 14px 28px var(--neu-shadow-dark), -12px -12px 24px var(--neu-shadow-light);`,headerCopy:"color: color-mix(in srgb, var(--neu-text) 70%, white 30%);",headerBadge:`padding: 0.4rem 0.68rem; border-radius: 999px; color: ${r.accent}; background: var(--neu-base); box-shadow: inset 4px 4px 10px var(--neu-shadow-dark), inset -4px -4px 10px var(--neu-shadow-light); font-size: 0.82rem; font-weight: 700;`,chart:"box-shadow: 12px 12px 24px var(--neu-shadow-dark), -10px -10px 22px var(--neu-shadow-light);",hole:"background: var(--neu-base); box-shadow: inset 6px 6px 14px var(--neu-shadow-dark), inset -6px -6px 14px var(--neu-shadow-light);",center:"color: var(--neu-text); background: var(--neu-base); box-shadow: 8px 8px 16px var(--neu-shadow-dark), -8px -8px 16px var(--neu-shadow-light);",legendButton:"border-radius: 18px; color: var(--neu-text); background: var(--neu-base); box-shadow: 8px 8px 16px var(--neu-shadow-dark), -8px -8px 16px var(--neu-shadow-light);",legendLabel:"color: color-mix(in srgb, var(--neu-text) 74%, white 26%);",legendValue:"color: var(--neu-text);",legendActive:`color: ${r.accent}; box-shadow: inset 5px 5px 12px var(--neu-shadow-dark), inset -5px -5px 12px var(--neu-shadow-light);`})},{key:"skeuo",style:"Skeuomorphic",pieName:"Skeuomorphic Pie Chart",ringName:"Skeuomorphic Ring Chart",pieLabel:"Instrument mix",ringLabel:"Panel share",pieDescription:"Skeuomorphic pie chart with glossy physical surfaces and readable segment totals.",ringDescription:"Skeuomorphic ring chart with dial-like depth and hardware-inspired legend buttons.",buildCss:(r,i)=>$n({root:i,shell:`padding: 1.3rem; border-radius: 28px; color: ${r.text}; background: repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 6px, rgba(0,0,0,0.02) 6px 12px), linear-gradient(180deg, color-mix(in srgb, ${r.surface} 72%, white 28%), color-mix(in srgb, ${r.bg} 82%, black 18%)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -3px 6px rgba(0,0,0,0.18), 0 18px 45px rgba(15,23,42,0.28);`,headerCopy:`color: ${r.muted};`,headerBadge:`padding: 0.42rem 0.7rem; border-radius: 999px; color: ${r.text}; background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04)); box-shadow: inset 0 2px 4px rgba(255,255,255,0.16), inset 0 -8px 16px rgba(0,0,0,0.24); font-size: 0.82rem; font-weight: 700;`,chart:"box-shadow: inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -4px 8px rgba(0,0,0,0.2), 0 12px 24px rgba(15,23,42,0.24);",hole:`background: linear-gradient(180deg, color-mix(in srgb, ${r.surface} 78%, white 22%), color-mix(in srgb, ${r.bg} 82%, black 18%)); box-shadow: inset 0 2px 4px rgba(255,255,255,0.18), inset 0 -10px 18px rgba(0,0,0,0.22);`,center:`color: ${r.text}; background: linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04)); box-shadow: inset 0 2px 4px rgba(255,255,255,0.18), inset 0 -8px 16px rgba(0,0,0,0.22), 0 8px 14px rgba(15,23,42,0.18);`,legendButton:`border-radius: 16px; color: ${r.text}; background: linear-gradient(180deg, color-mix(in srgb, ${r.surface} 78%, white 22%), color-mix(in srgb, ${r.bg} 82%, black 18%)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -2px 5px rgba(0,0,0,0.16), 0 6px 12px rgba(15,23,42,0.2);`,legendLabel:`color: ${r.muted};`,legendValue:`color: ${r.text};`,legendActive:`color: ${r.bg}; background: linear-gradient(180deg, color-mix(in srgb, ${r.accent} 78%, white 22%), ${r.accent});`})},{key:"flat",style:"Flat",pieName:"Flat Pie Chart",ringName:"Flat Ring Chart",pieLabel:"Content mix",ringLabel:"Quota split",pieDescription:"Flat 2.0 pie chart with simple legend hierarchy and explicit values.",ringDescription:"Flat ring chart with clean donut center, restrained colors, and clear percentages.",buildCss:(r,i)=>$n({root:i,shell:`padding: 1.1rem; border-radius: 18px; color: ${r.text}; background: ${r.surface}; box-shadow: inset 0 0 0 1px color-mix(in srgb, ${r.bg} 10%, transparent);`,headerCopy:`color: ${r.muted};`,headerBadge:`padding: 0.4rem 0.68rem; border-radius: 999px; color: ${r.bg}; background: ${r.accent}; font-size: 0.82rem; font-weight: 700;`,chart:`box-shadow: inset 0 0 0 1px color-mix(in srgb, ${r.bg} 10%, transparent);`,hole:`background: ${r.surface}; box-shadow: inset 0 0 0 1px color-mix(in srgb, ${r.bg} 12%, transparent);`,center:`color: ${r.text}; background: white; box-shadow: inset 0 0 0 1px color-mix(in srgb, ${r.bg} 10%, transparent);`,legendButton:`border-radius: 14px; color: ${r.text}; background: color-mix(in srgb, ${r.bg} 86%, white 14%);`,legendLabel:`color: ${r.muted};`,legendValue:`color: ${r.text};`,legendActive:`color: ${r.bg}; background: ${r.accent};`})},{key:"animated",style:"Animated",pieName:"Animated Pie Chart",ringName:"Animated Ring Chart",pieLabel:"Motion mix",ringLabel:"Live split",pieDescription:"Animated pie chart with segment reveal, hover energy, and readable values.",ringDescription:"Animated ring chart with rotating reveal and active segment feedback.",buildCss:(r,i)=>$n({root:i,shell:`padding: 1.25rem; border-radius: 24px; color: ${r.text}; background: linear-gradient(180deg, ${r.surface}, ${r.bg});`,headerCopy:`color: ${r.muted};`,headerBadge:`padding: 0.42rem 0.7rem; border-radius: 999px; color: ${r.bg}; background: ${r.accent}; font-size: 0.82rem; font-weight: 700;`,chart:"box-shadow: 0 16px 30px rgba(15,23,42,0.2);",hole:`background: color-mix(in srgb, ${r.surface} 88%, white 12%); box-shadow: 0 8px 18px rgba(15,23,42,0.14);`,center:`color: ${r.text}; background: rgba(255,255,255,0.12); box-shadow: 0 10px 22px rgba(15,23,42,0.18); backdrop-filter: blur(12px);`,legendButton:`border-radius: 16px; color: ${r.text}; background: rgba(255,255,255,0.08); transition: transform 180ms ease, background 180ms ease;`,legendLabel:`color: ${r.muted};`,legendValue:`color: ${r.text};`,legendActive:`color: ${r.bg}; background: ${r.accent}; transform: translateY(-2px);`})},{key:"neubrutal",style:"Neubrutalism",pieName:"Neubrutal Pie Chart",ringName:"Neubrutal Ring Chart",pieLabel:"Loud mix",ringLabel:"Brutal split",pieDescription:"Neo-brutalist pie chart with hard borders, punchy color blocks, and visible data.",ringDescription:"Neo-brutalist ring chart with chunky donut center and heavy-button legend.",buildCss:(r,i)=>$n({root:i,shell:`padding: 1.15rem; border: 3px solid #111827; border-radius: 22px; color: #111827; background: color-mix(in srgb, ${r.accent} 24%, #fff7ed 76%); box-shadow: 10px 10px 0 #111827;`,headerCopy:"color: #111827;",headerBadge:"padding: 0.4rem 0.68rem; border: 3px solid #111827; border-radius: 999px; color: #111827; background: white; box-shadow: 4px 4px 0 #111827; font-size: 0.82rem; font-weight: 800;",chart:"border: 3px solid #111827; box-shadow: 8px 8px 0 #111827;",hole:"background: white; border: 3px solid #111827;",center:"color: #111827; background: white; border: 3px solid #111827; box-shadow: 4px 4px 0 #111827;",legendButton:"border: 3px solid #111827; border-radius: 16px; color: #111827; background: white; box-shadow: 4px 4px 0 #111827;",legendLabel:"color: #111827;",legendValue:"color: #111827;",legendActive:`background: ${r.accent}; transform: translate(2px, 2px); box-shadow: 2px 2px 0 #111827;`})},{key:"bento",style:"Bento",pieName:"Bento Pie Board",ringName:"Bento Ring Board",pieLabel:"Insight mix",ringLabel:"Board split",pieDescription:"Bento-style pie card with supporting legend tiles and visible segment totals.",ringDescription:"Bento ring board with dashboard framing and interactive data slices.",buildCss:(r,i)=>$n({root:i,shell:`padding: 1.15rem; border-radius: 24px; color: ${r.text}; background: linear-gradient(180deg, color-mix(in srgb, ${r.surface} 88%, white 12%), ${r.bg});`,headerCopy:`color: ${r.muted};`,headerBadge:`padding: 0.42rem 0.7rem; border-radius: 999px; color: ${r.bg}; background: ${r.accent}; font-size: 0.82rem; font-weight: 700;`,body:"grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);",chart:"box-shadow: 0 18px 34px rgba(15,23,42,0.16);",hole:`background: color-mix(in srgb, ${r.surface} 90%, white 10%);`,center:`color: ${r.text}; background: color-mix(in srgb, ${r.surface} 90%, white 10%); box-shadow: 0 12px 22px rgba(15,23,42,0.12);`,legendButton:`border-radius: 18px; color: ${r.text}; background: color-mix(in srgb, ${r.surface} 92%, white 8%); min-height: 4rem;`,legendLabel:`color: ${r.muted};`,legendValue:`color: ${r.text};`,legendActive:`color: ${r.bg}; background: ${r.accent};`})},{key:"terminal",style:"Terminal",pieName:"Terminal Pie Chart",ringName:"Terminal Ring Chart",pieLabel:"node_mix",ringLabel:"proc_split",pieDescription:"Terminal-style pie chart with palette-driven segments and console legend readouts.",ringDescription:"Terminal ring chart with monospace controls and visible share percentages.",buildCss:(r,i)=>$n({root:i,shell:`--terminal-accent: ${r.accent}; --terminal-ink: color-mix(in srgb, ${r.text} 86%, white 14%); --terminal-bg: color-mix(in srgb, ${r.bg} 90%, #020617 10%); padding: 1.2rem; border-radius: 18px; color: var(--terminal-ink); background: radial-gradient(circle at top right, color-mix(in srgb, var(--terminal-accent) 18%, transparent), transparent 28%), var(--terminal-bg); border: 1px solid color-mix(in srgb, var(--terminal-accent) 28%, transparent); font-family: "IBM Plex Mono", "SFMono-Regular", monospace;`,headerCopy:"color: color-mix(in srgb, var(--terminal-ink) 74%, transparent);",headerBadge:"padding: 0.4rem 0.68rem; border-radius: 999px; color: #020617; background: var(--terminal-accent); font-size: 0.82rem; font-weight: 700;",chart:"box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--terminal-accent) 18%, transparent), 0 14px 28px rgba(2,6,23,0.34);",hole:"background: var(--terminal-bg); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--terminal-accent) 18%, transparent);",center:"color: var(--terminal-ink); background: color-mix(in srgb, var(--terminal-accent) 7%, transparent); border: 1px solid color-mix(in srgb, var(--terminal-accent) 18%, transparent);",legendButton:"border-radius: 12px; color: var(--terminal-ink); background: color-mix(in srgb, var(--terminal-accent) 7%, transparent);",legendLabel:"color: color-mix(in srgb, var(--terminal-ink) 74%, transparent);",legendValue:"color: var(--terminal-ink);",legendActive:"color: #020617; background: var(--terminal-accent);"})},{key:"material",style:"Material",pieName:"Material Pie Chart",ringName:"Material Ring Chart",pieLabel:"Usage overview",ringLabel:"Completion overview",pieDescription:"Material-style pie chart with elevated legend chips and clear totals.",ringDescription:"Material ring chart with card elevation, donut center, and selectable slices.",buildCss:(r,i)=>$n({root:i,shell:`padding: 1rem; border-radius: 24px; color: ${r.text}; background: color-mix(in srgb, ${r.surface} 92%, white 8%); box-shadow: 0 8px 18px rgba(15,23,42,0.12);`,headerCopy:`color: ${r.muted};`,headerBadge:`padding: 0.42rem 0.7rem; border-radius: 999px; color: ${r.bg}; background: ${r.accent}; font-size: 0.82rem; font-weight: 700;`,chart:"box-shadow: 0 12px 26px rgba(15,23,42,0.14);",hole:"background: white; box-shadow: 0 4px 12px rgba(15,23,42,0.08);",center:"color: #0f172a; background: white; box-shadow: 0 6px 14px rgba(15,23,42,0.1);",legendButton:"border-radius: 16px; color: #0f172a; background: white; box-shadow: 0 4px 10px rgba(15,23,42,0.08);",legendLabel:"color: #475569;",legendValue:"color: #0f172a;",legendActive:`color: ${r.bg}; background: ${r.accent};`})}].flatMap(r=>[$b(r,"pie"),$b(r,"ring")])}function $b(t,r){const i=`${t.key}-${r}-chart`;return{id:i,name:r==="pie"?t.pieName:t.ringName,description:r==="pie"?t.pieDescription:t.ringDescription,preview:"stats",style:t.style,category:"Data",build:o=>({html:L6(i,r,r==="pie"?t.pieLabel:t.ringLabel),css:t.buildCss(o,i,r),js:B6(o,r)})}}function L6(t,r,i){const o=r==="ring"?`
      <div className="${t}__hole" />`:"";return`<section className="${t}" ref={setChartNode}>
  <header>
    <div>
      <p>${i}</p>
      <strong>{activeSegment.label}</strong>
    </div>
    <span>{animatedPercent}%</span>
  </header>
  <div className="${t}__body">
    <div
      className="${t}__chart ${t}__chart--${r}"
      style={{ background: chartFill, opacity: 0.35 + (0.65 * progress), transform: \`scale(\${0.86 + (0.14 * progress)})\` }}
    >
      ${o}
      <div className="${t}__center">
        <strong>{animatedValue}%</strong>
        <span>{activeSegment.label}</span>
      </div>
    </div>
    <div className="${t}__legend">
      {segments.map((segment, index) => (
        <button key={segment.label} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
          <i style={{ background: segment.color }} />
          <span>{segment.label}</span>
          <strong>{Math.round(segment.value * progress)}%</strong>
        </button>
      ))}
    </div>
  </div>
</section>`}function B6(t,r){const i=r==="pie"?[["Buttons",36],["Forms",24],["Layouts",22],["Exports",18]]:[["Builder",42],["Preview",26],["Export",18],["Docs",14]];return`const segments = [
  { label: '${i[0][0]}', value: ${i[0][1]}, color: '${t.accent}' },
  { label: '${i[1][0]}', value: ${i[1][1]}, color: 'color-mix(in srgb, ${t.accent} 78%, white 22%)' },
  { label: '${i[2][0]}', value: ${i[2][1]}, color: 'color-mix(in srgb, ${t.surface} 74%, white 26%)' },
  { label: '${i[3][0]}', value: ${i[3][1]}, color: 'color-mix(in srgb, ${t.text} 22%, ${t.bg} 78%)' },
];
const total = segments.reduce((sum, segment) => sum + segment.value, 0);
const [active, setActive] = useState(0);
const [chartNode, setChartNode] = useState(null);
const [entered, setEntered] = useState(false);
const [progress, setProgress] = useState(0);

useEffect(() => {
  if (!chartNode || entered) {
    return undefined;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setEntered(true);
        observer.disconnect();
      }
    },
    { threshold: 0.55, rootMargin: '0px 0px -12% 0px' }
  );

  observer.observe(chartNode);

  return () => observer.disconnect();
}, [chartNode, entered]);

useEffect(() => {
  if (!entered) {
    return undefined;
  }

  let frameId = 0;
  let startTime = 0;
  const duration = 760;

  function tick(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    const nextProgress = Math.min((timestamp - startTime) / duration, 1);
    setProgress(nextProgress);

    if (nextProgress < 1) {
      frameId = window.requestAnimationFrame(tick);
    }
  }

  frameId = window.requestAnimationFrame(tick);
  return () => window.cancelAnimationFrame(frameId);
}, [entered]);

const activeSegment = segments[active];
const animatedValue = Math.round(activeSegment.value * progress);
const animatedPercent = Math.round(((activeSegment.value / total) * 100) * progress);
const scaledTotal = progress * 100;
let offset = 0;
const fills = segments.map((segment) => {
  const ratio = (segment.value / total) * scaledTotal;
  const start = offset;
  offset += ratio;
  return segment.color + ' ' + start + '% ' + offset + '%';
});
fills.push('rgba(148, 163, 184, 0.14) ' + offset + '% 100%');
const chartFill = 'conic-gradient(' + fills.join(', ') + ')';
`}function $n({root:t,shell:r,headerCopy:i,headerBadge:o,chart:s,hole:u,center:d,legendButton:f,legendLabel:m,legendValue:h,legendActive:v,body:g="",extra:x=""}){return`.${t} { display: grid; gap: 1rem; width: min(100%, 760px); ${r} }
.${t} header { display: flex; justify-content: space-between; gap: 1rem; align-items: start; }
.${t} header p, .${t} header strong { margin: 0; }
.${t} header p { ${i} }
.${t} header > span { ${o} }
.${t}__body { display: grid; grid-template-columns: minmax(180px, 220px) minmax(0, 1fr); gap: 1rem; align-items: center; min-width: 0; padding-right: 0.35rem; ${g} }
.${t}__chart { position: relative; width: min(100%, 220px); aspect-ratio: 1; justify-self: center; border-radius: 50%; overflow: hidden; ${s} }
.${t}__chart--pie .${t}__center { position: absolute; inset: 30%; display: grid; place-content: center; text-align: center; border-radius: 50%; z-index: 2; ${d} }
.${t}__chart--ring .${t}__hole { position: absolute; inset: 24%; border-radius: 50%; z-index: 1; ${u} }
.${t}__chart--ring .${t}__center { position: absolute; inset: 30%; display: grid; place-content: center; text-align: center; border-radius: 50%; z-index: 2; ${d} }
.${t}__center strong, .${t}__center span { display: block; }
.${t}__center strong { margin: 0; font-size: 1.15rem; }
.${t}__center span { font-size: 0.8rem; }
.${t}__legend { display: grid; gap: 0.6rem; min-width: 0; padding-right: 0.25rem; }
.${t}__legend button { display: grid; grid-template-columns: auto minmax(0, 1fr) minmax(3.75rem, auto); gap: 0.7rem; align-items: center; width: 100%; min-width: 0; padding: 0.85rem 0.95rem; border: 0; text-align: left; font: inherit; cursor: pointer; ${f} }
.${t}__legend button i { display: block; width: 0.85rem; height: 0.85rem; border-radius: 999px; }
.${t}__legend button span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; ${m} }
.${t}__legend button strong { justify-self: end; white-space: nowrap; font-variant-numeric: tabular-nums; ${h} }
.${t}__legend button.active { ${v} }
.${t}__legend button.active span, .${t}__legend button.active strong { color: inherit; }
@media (max-width: 720px) { .${t}__body { grid-template-columns: 1fr; } .${t}__legend button { grid-template-columns: auto minmax(0, 1fr) auto; } }
${x}`}function U6(t,r,i){const o=t.build(r,i);return{id:`${t.id}-${r.id}`,name:`${r.name} ${t.name}`,description:`${t.description} ${r.name} palette.`,category:t.category??R1(t.name),visualStyle:t.style??"Core UI",previewTone:r,previewKind:t.preview,html:o.html,css:o.css,js:o.js}}const I6=D6.flatMap(t=>L1.map((r,i)=>U6(t,r,i))),il=[...E6.map(t=>({...t,category:R1(t.name),visualStyle:"Core UI",previewTone:L1[0],previewKind:"core"})),...I6],jb="jammyjams-theme",Mb="jammyjams-inline-styles";function Db(t){try{return window.localStorage.getItem(t)}catch{return null}}function Rb(t,r){try{window.localStorage.setItem(t,r)}catch{}}function H6(t,r){const i=URL.createObjectURL(t),o=document.createElement("a");o.href=i,o.download=r,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(i)}function Lb(){return window.location.hash==="#/wiki"?"wiki":window.location.hash==="#/library"?"library":"builder"}function ll(t){if(t==="wiki"){window.location.hash="/wiki";return}if(t==="library"){window.location.hash="/library";return}window.location.hash="/"}function Bb({title:t,subtitle:r,children:i,actions:o}){return fe.jsxs("section",{className:"panel-shell",children:[fe.jsxs("header",{className:"panel-header",children:[fe.jsxs("div",{children:[fe.jsx("p",{className:"panel-kicker",children:t}),fe.jsx("h2",{children:r})]}),o]}),i]})}function nl({label:t,value:r,onChange:i,language:o,readOnly:s=!1,height:u=260,path:d}){function f(m,h){h.editor.remeasureFonts(),m.layout(),document.fonts?.ready&&document.fonts.ready.then(()=>{h.editor.remeasureFonts(),m.layout()})}return fe.jsxs("div",{className:"field",children:[fe.jsx("span",{children:t}),fe.jsx("div",{className:"monaco-shell",children:fe.jsx(aS,{path:d,height:u,language:o,value:r??"",onMount:f,onChange:m=>{s||i(m??"")},theme:"vs-dark",options:{automaticLayout:!0,readOnly:s,domReadOnly:s,minimap:{enabled:!1},fontSize:14,lineHeight:22,lineNumbers:"on",glyphMargin:!1,folding:!0,lineDecorationsWidth:12,lineNumbersMinChars:3,scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"same",padding:{top:14,bottom:14},tabSize:2,fontFamily:'Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontLigatures:!1,letterSpacing:0,renderLineHighlight:"all",overviewRulerBorder:!1,selectionHighlight:!0,roundedSelection:!1,cursorSmoothCaretAnimation:"off"}})})]})}function F6({editorState:t,setEditorState:r,liveModules:i}){const{name:o,html:s,css:u,js:d,inlineStyles:f}=t,[m,h]=Ae.useState(""),[v,g]=Ae.useState("idle"),x=Ae.useId().replace(/:/g,""),b=Ae.useMemo(()=>j6({name:o,html:s,css:u,js:d,inlineStyles:f}),[o,s,u,d,f]),C=Ae.useMemo(()=>z6({name:b.componentName,html:s,js:d,styleId:x}),[b.componentName,s,d,x]);Ae.useEffect(()=>{if(!m)return;const U=window.setTimeout(()=>h(""),1800);return()=>window.clearTimeout(U)},[m]),Ae.useEffect(()=>{const U=document.createElement("style");return U.dataset.preview=x,U.textContent=`.${x} { display: contents; }
${u}`,document.head.appendChild(U),()=>{U.remove()}},[u,x]);async function k(U,R){await navigator.clipboard.writeText(R),h(U)}async function N(){try{g("building");const U=new lS,R=M6({...b,inlineStyles:f});Object.entries(R).forEach(([q,ae])=>{U.file(q,ae)});const B=await U.generateAsync({type:"blob"});H6(B,`${b.componentName}-player.zip`),g("done"),window.setTimeout(()=>g("idle"),1800)}catch(U){console.error(U),g("error")}}const _=i?.LiveProvider,z=i?.LivePreview,O=i?.LiveError;return fe.jsxs(fe.Fragment,{children:[fe.jsxs("section",{className:"hero",children:[fe.jsxs("div",{children:[fe.jsx("p",{className:"eyebrow",children:"JammyJams"}),fe.jsx("h3",{children:"Turn HTML, CSS, and JS into live React components."})]}),fe.jsx("p",{className:"hero-copy",children:"Author JSX, styles, and interaction logic on the left. JammyJams renders the component on the right and can export a complete React player zip with everything needed for `npm install` and `npm run player`."})]}),fe.jsxs("div",{className:"workspace",children:[fe.jsxs(Bb,{title:"Builder",subtitle:"Author the component",actions:fe.jsx("button",{className:"ghost-button",onClick:N,disabled:v==="building",children:v==="building"?"Building zip...":v==="done"?"Zip downloaded":v==="error"?"Retry zip export":"Export React player zip"}),children:[fe.jsxs("div",{className:"template-shell library-cta",children:[fe.jsxs("div",{children:[fe.jsx("strong",{children:"Template library"}),fe.jsxs("p",{className:"template-description",children:["Browse ",il.length," templates with preview cards, then open one directly in the builder."]})]}),fe.jsx("button",{className:"ghost-button",onClick:()=>ll("library"),children:"Open library"})]}),fe.jsxs("label",{className:"field",children:[fe.jsx("span",{children:"Component name"}),fe.jsx("input",{value:o,onChange:U=>r(R=>({...R,name:U.target.value})),placeholder:"HeroCard"})]}),fe.jsxs("label",{className:"toggle-row",children:[fe.jsx("span",{children:"Inline styles in exported component"}),fe.jsxs("button",{type:"button",className:`ios-toggle${f?" active":""}`,onClick:()=>r(U=>({...U,inlineStyles:!U.inlineStyles})),"aria-pressed":f,children:[fe.jsx("span",{className:"ios-toggle-track",children:fe.jsx("span",{className:"ios-toggle-knob"})}),fe.jsx("span",{className:"ios-toggle-label",children:f?"On":"Off"})]})]}),fe.jsx(nl,{label:"HTML / JSX",value:s,onChange:U=>r(R=>({...R,html:U})),language:"javascript",path:"component.jsx",height:280}),fe.jsx(nl,{label:"CSS",value:u,onChange:U=>r(R=>({...R,css:U})),language:"css",path:"component.css",height:300}),fe.jsx(nl,{label:"JavaScript hooks / logic",value:d,onChange:U=>r(R=>({...R,js:U})),language:"javascript",path:"component.logic.js",height:220})]}),fe.jsxs(Bb,{title:"Preview",subtitle:"Rendered output",actions:fe.jsx("button",{className:"ghost-button",onClick:()=>k("component",b.source),children:m==="component"?"Copied component":"Copy component"}),children:[fe.jsx("div",{className:"preview-card",children:_?fe.jsxs(_,{code:C,scope:D1,noInline:!0,children:[fe.jsx("div",{className:"preview-stage",children:fe.jsx(z,{})}),fe.jsx(O,{className:"error-box"})]}):fe.jsx("div",{className:"preview-stage preview-placeholder",children:"Loading live preview tools..."})}),fe.jsxs("div",{className:"export-shell",children:[fe.jsxs("div",{className:"player-actions",children:[fe.jsx("strong",{children:"Exported React component"}),fe.jsx("button",{className:"ghost-button",onClick:()=>k("zip",`npm install
npm run player`),children:m==="zip"?"Copied run steps":"Copy run steps"})]}),fe.jsx(nl,{label:`${b.componentName}.jsx`,value:b.source,language:"javascript",path:`${b.componentName}.jsx`,readOnly:!0,height:380}),!f&&fe.jsx(nl,{label:b.cssFileName,value:b.cssSource,language:"css",path:b.cssFileName,readOnly:!0,height:280}),fe.jsx("p",{className:"export-note",children:"Zip export includes `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/player.css`, the generated component file, and a separate CSS file when inline styles are off."})]})]})]})]})}function q6({template:t,liveModules:r}){const i=Ae.useMemo(()=>`template-scope-${t.id.replace(/[^a-zA-Z0-9_-]/g,"")}`,[t.id]),o=Ae.useMemo(()=>$6(t,i),[t,i]),[s,u]=Ae.useState(null),[d,f]=Ae.useState(!1),m=r?.LiveProvider,h=r?.LivePreview,v=r?.LiveError;return Ae.useEffect(()=>{if(!s||d)return;const g=new IntersectionObserver(([x])=>{x.isIntersecting&&(f(!0),g.disconnect())},{rootMargin:"180px 0px",threshold:.2});return g.observe(s),()=>g.disconnect()},[s,d]),fe.jsx("div",{className:"template-preview-live",ref:u,children:m&&d?fe.jsxs(m,{code:o,scope:D1,noInline:!0,children:[fe.jsx("div",{className:"template-preview-canvas",children:fe.jsx(h,{})}),fe.jsx(v,{className:"template-preview-error"})]}):fe.jsx("div",{className:"template-preview-canvas preview-placeholder",children:"Loading preview…"})})}function P6({onOpenTemplate:t,liveModules:r}){const[i,o]=Ae.useState(""),[s,u]=Ae.useState("All"),[d,f]=Ae.useState("All styles"),m=["All",...new Set(il.map(g=>g.category??"Core"))],h=["All styles",...new Set(il.map(g=>g.visualStyle??"Core UI"))],v=il.filter(g=>{const x=s==="All"||(g.category??"Core")===s,b=d==="All styles"||(g.visualStyle??"Core UI")===d,C=`${g.name} ${g.description} ${g.category??""}`.toLowerCase();return x&&b&&C.includes(i.toLowerCase())});return fe.jsxs("section",{className:"library-page",children:[fe.jsxs("header",{className:"library-header",children:[fe.jsxs("div",{children:[fe.jsx("p",{className:"eyebrow",children:"Template Library"}),fe.jsxs("h1",{children:[il.length," component templates"]})]}),fe.jsx("p",{className:"hero-copy",children:"Browse the library, inspect quick previews, and open any template directly into the editor."})]}),fe.jsxs("div",{className:"library-toolbar",children:[fe.jsxs("div",{className:"library-toolbar-top",children:[fe.jsx("input",{className:"library-search",value:i,onChange:g=>o(g.target.value),placeholder:"Search templates"}),fe.jsx("select",{className:"template-select style-select",value:d,onChange:g=>f(g.target.value),children:h.map(g=>fe.jsx("option",{value:g,children:g},g))})]}),fe.jsx("div",{className:"library-filters",children:m.map(g=>fe.jsx("button",{className:`nav-button${s===g?" active":""}`,onClick:()=>u(g),children:g},g))})]}),fe.jsx("div",{className:"library-grid",children:v.map(g=>fe.jsxs("article",{className:"library-card",children:[fe.jsx(q6,{template:g,liveModules:r}),fe.jsxs("div",{className:"library-card-body",children:[fe.jsx("p",{className:"panel-kicker",children:g.category??"Core"}),fe.jsx("h2",{children:g.name}),fe.jsx("p",{className:"template-style-tag",children:g.visualStyle??"Core UI"}),fe.jsx("p",{children:g.description})]}),fe.jsx("button",{className:"ghost-button",onClick:()=>t(g),children:"Open"})]},g.id))})]})}function Y6(){const[t,r]=Ae.useState(Vo[0].id),i=Vo.find(o=>o.id===t)??Vo[0];return fe.jsxs("section",{className:"wiki-page",children:[fe.jsxs("header",{className:"wiki-page-header",children:[fe.jsxs("div",{children:[fe.jsx("p",{className:"eyebrow",children:"JammyJams Wiki"}),fe.jsx("h1",{children:"React component fundamentals"})]}),fe.jsx("p",{className:"hero-copy",children:"This reference is written for people building components inside JammyJams. Choose a topic on the left and read the full explanation on the right."})]}),fe.jsxs("div",{className:"wiki-layout",children:[fe.jsxs("aside",{className:"wiki-sidebar",children:[fe.jsx("p",{className:"panel-kicker",children:"Topics"}),fe.jsx("div",{className:"wiki-topic-list",children:Vo.map(o=>fe.jsxs("button",{className:`wiki-topic-button${o.id===i.id?" active":""}`,onClick:()=>r(o.id),children:[fe.jsx("strong",{children:o.title}),fe.jsx("span",{children:o.summary})]},o.id))})]}),fe.jsxs("article",{className:"wiki-viewer",children:[fe.jsxs("header",{className:"wiki-viewer-header",children:[fe.jsx("p",{className:"panel-kicker",children:"Topic"}),fe.jsx("h2",{children:i.title}),fe.jsx("p",{children:i.summary})]}),fe.jsx("div",{className:"wiki-viewer-body markdown-body",children:fe.jsx(k6,{children:i.markdown})})]})]})]})}function G6(){const[t,r]=Ae.useState(Lb),[i,o]=Ae.useState(()=>Db(jb)==="light"?"light":"dark"),[s,u]=Ae.useState(null),[d,f]=Ae.useState(()=>({name:nr.name,html:nr.html,css:nr.css,js:nr.js,inlineStyles:Db(Mb)!=="false"}));Ae.useEffect(()=>{function h(){r(Lb())}return window.addEventListener("hashchange",h),()=>window.removeEventListener("hashchange",h)},[]),Ae.useEffect(()=>{document.documentElement.dataset.theme=i,Rb(jb,i)},[i]),Ae.useEffect(()=>{Rb(Mb,String(d.inlineStyles))},[d.inlineStyles]),Ae.useEffect(()=>{let h=!1;return c2(()=>import("./index-CAdkE_xd.js"),[],import.meta.url).then(v=>{h||u(v)}),()=>{h=!0}},[]);function m(h){f(v=>({...v,name:h.name.replace(/\s+/g,""),html:h.html,css:h.css,js:h.js})),ll("builder"),r("builder")}return fe.jsxs("main",{className:"app-shell",children:[fe.jsxs("nav",{className:"top-nav",children:[fe.jsxs("div",{className:"top-nav-links",children:[fe.jsx("button",{className:`nav-button${t==="builder"?" active":""}`,onClick:()=>ll("builder"),children:"Builder"}),fe.jsx("button",{className:`nav-button${t==="wiki"?" active":""}`,onClick:()=>ll("wiki"),children:"React Wiki"}),fe.jsx("button",{className:`nav-button${t==="library"?" active":""}`,onClick:()=>ll("library"),children:"Template Library"})]}),fe.jsx("button",{className:`ios-toggle theme-toggle icon-only${i==="light"?" active":""}`,onClick:()=>o(h=>h==="dark"?"light":"dark"),"aria-pressed":i==="light","aria-label":i==="dark"?"Switch to light mode":"Switch to dark mode",title:i==="dark"?"Switch to light mode":"Switch to dark mode",children:fe.jsx("span",{className:"ios-toggle-track",children:fe.jsx("span",{className:"ios-toggle-knob",children:fe.jsx(Y0,{icon:i==="dark"?Xw:Vw})})})})]}),t==="wiki"?fe.jsx(Y6,{}):t==="library"?fe.jsx(P6,{onOpenTemplate:m,liveModules:s}):fe.jsx(F6,{editorState:d,setEditorState:f,liveModules:s})]})}o2.createRoot(document.getElementById("root")).render(fe.jsx(Rn.StrictMode,{children:fe.jsx(G6,{})}));export{Rn as R,fe as j,Ae as r};
