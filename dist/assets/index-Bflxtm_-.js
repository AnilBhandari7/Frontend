function H_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function V_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n0={exports:{}},Mc={},i0={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),W_=Symbol.for("react.portal"),G_=Symbol.for("react.fragment"),j_=Symbol.for("react.strict_mode"),X_=Symbol.for("react.profiler"),$_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),Y_=Symbol.for("react.forward_ref"),K_=Symbol.for("react.suspense"),Z_=Symbol.for("react.memo"),J_=Symbol.for("react.lazy"),mp=Symbol.iterator;function Q_(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var r0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,o0={};function co(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||r0}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a0(){}a0.prototype=co.prototype;function Gf(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||r0}var jf=Gf.prototype=new a0;jf.constructor=Gf;s0(jf,co.prototype);jf.isPureReactComponent=!0;var gp=Array.isArray,l0=Object.prototype.hasOwnProperty,Xf={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function u0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l0.call(e,i)&&!c0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Sa,type:t,key:s,ref:o,props:r,_owner:Xf.current}}function ey(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $f(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function ty(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function Kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ty(""+t.key):e.toString(36)}function El(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sa:case W_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Kc(o,0):i,gp(r)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),El(r,e,n,"",function(c){return c})):r!=null&&($f(r)&&(r=ey(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Kc(s,a);o+=El(s,e,n,l,r)}else if(l=Q_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Kc(s,a++),o+=El(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oa(t,e,n){if(t==null)return t;var i=[],r=0;return El(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ny(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},Ml={transition:null},iy={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:Xf};function d0(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Oa,forEach:function(t,e,n){Oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oa(t,function(){e++}),e},toArray:function(t){return Oa(t,function(e){return e})||[]},only:function(t){if(!$f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=co;Ke.Fragment=G_;Ke.Profiler=X_;Ke.PureComponent=Gf;Ke.StrictMode=j_;Ke.Suspense=K_;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;Ke.act=d0;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=s0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)l0.call(e,l)&&!c0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Sa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:q_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$_,_context:t},t.Consumer=t};Ke.createElement=u0;Ke.createFactory=function(t){var e=u0.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:Y_,render:t}};Ke.isValidElement=$f;Ke.lazy=function(t){return{$$typeof:J_,_payload:{_status:-1,_result:t},_init:ny}};Ke.memo=function(t,e){return{$$typeof:Z_,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=Ml.transition;Ml.transition={};try{t()}finally{Ml.transition=e}};Ke.unstable_act=d0;Ke.useCallback=function(t,e){return ln.current.useCallback(t,e)};Ke.useContext=function(t){return ln.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return ln.current.useEffect(t,e)};Ke.useId=function(){return ln.current.useId()};Ke.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return ln.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};Ke.useRef=function(t){return ln.current.useRef(t)};Ke.useState=function(t){return ln.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return ln.current.useTransition()};Ke.version="18.3.1";i0.exports=Ke;var X=i0.exports;const f0=V_(X),ry=H_({__proto__:null,default:f0},[X]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy=X,oy=Symbol.for("react.element"),ay=Symbol.for("react.fragment"),ly=Object.prototype.hasOwnProperty,cy=sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uy={key:!0,ref:!0,__self:!0,__source:!0};function h0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ly.call(e,i)&&!uy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:oy,type:t,key:s,ref:o,props:r,_owner:cy.current}}Mc.Fragment=ay;Mc.jsx=h0;Mc.jsxs=h0;n0.exports=Mc;var _=n0.exports,od={},p0={exports:{}},In={},m0={exports:{}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,K){var J=I.length;I.push(K);e:for(;0<J;){var te=J-1>>>1,Me=I[te];if(0<r(Me,K))I[te]=K,I[J]=Me,J=te;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var K=I[0],J=I.pop();if(J!==K){I[0]=J;e:for(var te=0,Me=I.length,Ve=Me>>>1;te<Ve;){var Y=2*(te+1)-1,se=I[Y],ne=Y+1,ue=I[ne];if(0>r(se,J))ne<Me&&0>r(ue,se)?(I[te]=ue,I[ne]=J,te=ne):(I[te]=se,I[Y]=J,te=Y);else if(ne<Me&&0>r(ue,J))I[te]=ue,I[ne]=J,te=ne;else break e}}return K}function r(I,K){var J=I.sortIndex-K.sortIndex;return J!==0?J:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,m=!1,x=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=I)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function E(I){if(y=!1,v(I),!x)if(n(l)!==null)x=!0,z(R);else{var K=n(c);K!==null&&$(E,K.startTime-I)}}function R(I,K){x=!1,y&&(y=!1,f(L),L=-1),m=!0;var J=h;try{for(v(K),d=n(l);d!==null&&(!(d.expirationTime>K)||I&&!C());){var te=d.callback;if(typeof te=="function"){d.callback=null,h=d.priorityLevel;var Me=te(d.expirationTime<=K);K=t.unstable_now(),typeof Me=="function"?d.callback=Me:d===n(l)&&i(l),v(K)}else i(l);d=n(l)}if(d!==null)var Ve=!0;else{var Y=n(c);Y!==null&&$(E,Y.startTime-K),Ve=!1}return Ve}finally{d=null,h=J,m=!1}}var b=!1,A=null,L=-1,w=5,S=-1;function C(){return!(t.unstable_now()-S<w)}function V(){if(A!==null){var I=t.unstable_now();S=I;var K=!0;try{K=A(!0,I)}finally{K?F():(b=!1,A=null)}}else b=!1}var F;if(typeof g=="function")F=function(){g(V)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,q=H.port2;H.port1.onmessage=V,F=function(){q.postMessage(null)}}else F=function(){p(V,0)};function z(I){A=I,b||(b=!0,F())}function $(I,K){L=p(function(){I(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,z(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var J=h;h=K;try{return I()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=h;h=I;try{return K()}finally{h=J}},t.unstable_scheduleCallback=function(I,K,J){var te=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?te+J:te):J=te,I){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=J+Me,I={id:u++,callback:K,priorityLevel:I,startTime:J,expirationTime:Me,sortIndex:-1},J>te?(I.sortIndex=J,e(c,I),n(l)===null&&I===n(c)&&(y?(f(L),L=-1):y=!0,$(E,J-te))):(I.sortIndex=Me,e(l,I),x||m||(x=!0,z(R))),I},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(I){var K=h;return function(){var J=h;h=K;try{return I.apply(this,arguments)}finally{h=J}}}})(g0);m0.exports=g0;var dy=m0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=X,Dn=dy;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v0=new Set,ea={};function os(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(ea[t]=e,t=0;t<e.length;t++)v0.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=Object.prototype.hasOwnProperty,hy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xp={},_p={};function py(t){return ad.call(_p,t)?!0:ad.call(xp,t)?!1:hy.test(t)?_p[t]=!0:(xp[t]=!0,!1)}function my(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gy(t,e,n,i){if(e===null||typeof e>"u"||my(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var qf=/[\-:]([a-z])/g;function Yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qf,Yf);$t[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qf,Yf);$t[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qf,Yf);$t[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kf(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gy(e,n,r,i)&&(n=null),i||r===null?py(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),Zf=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),Jf=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),Qf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),y0=Symbol.for("react.offscreen"),yp=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Zc;function Bo(t){if(Zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zc=e&&e[1]||""}return`
`+Zc+t}var Jc=!1;function Qc(t,e){if(!t||Jc)return"";Jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bo(t):""}function vy(t){switch(t.tag){case 5:return Bo(t.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return t=Qc(t.type,!1),t;case 11:return t=Qc(t.type.render,!1),t;case 1:return t=Qc(t.type,!0),t;default:return""}}function dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cs:return"Fragment";case Rs:return"Portal";case ld:return"Profiler";case Zf:return"StrictMode";case cd:return"Suspense";case ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _0:return(t.displayName||"Context")+".Consumer";case x0:return(t._context.displayName||"Context")+".Provider";case Jf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qf:return e=t.displayName||null,e!==null?e:dd(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return dd(t(e))}catch{}}return null}function xy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(e);case 8:return e===Zf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function S0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _y(t){var e=S0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ka(t){t._valueTracker||(t._valueTracker=_y(t))}function E0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=S0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fd(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function M0(t,e){e=e.checked,e!=null&&Kf(t,"checked",e,!1)}function hd(t,e){M0(t,e);var n=vr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&pd(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ep(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pd(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zo=Array.isArray;function Hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(zo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function w0(t,e){var n=vr(e.value),i=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function T0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?T0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,b0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yy=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){yy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function A0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function R0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=A0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Sy=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(t,e){if(e){if(Sy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _d=null;function eh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yd=null,Vs=null,Ws=null;function Tp(t){if(t=wa(t)){if(typeof yd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Rc(e),yd(t.stateNode,t.type,e))}}function C0(t){Vs?Ws?Ws.push(t):Ws=[t]:Vs=t}function P0(){if(Vs){var t=Vs,e=Ws;if(Ws=Vs=null,Tp(t),e)for(t=0;t<e.length;t++)Tp(e[t])}}function L0(t,e){return t(e)}function D0(){}var eu=!1;function I0(t,e,n){if(eu)return t(e,n);eu=!0;try{return L0(t,e,n)}finally{eu=!1,(Vs!==null||Ws!==null)&&(D0(),P0())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var i=Rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Sd=!1;if(Ii)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Sd=!1}function Ey(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Xo=!1,Gl=null,jl=!1,Ed=null,My={onError:function(t){Xo=!0,Gl=t}};function wy(t,e,n,i,r,s,o,a,l){Xo=!1,Gl=null,Ey.apply(My,arguments)}function Ty(t,e,n,i,r,s,o,a,l){if(wy.apply(this,arguments),Xo){if(Xo){var c=Gl;Xo=!1,Gl=null}else throw Error(oe(198));jl||(jl=!0,Ed=c)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function N0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bp(t){if(as(t)!==t)throw Error(oe(188))}function by(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return bp(r),t;if(s===i)return bp(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function U0(t){return t=by(t),t!==null?O0(t):null}function O0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O0(t);if(e!==null)return e;t=t.sibling}return null}var F0=Dn.unstable_scheduleCallback,Ap=Dn.unstable_cancelCallback,Ay=Dn.unstable_shouldYield,Ry=Dn.unstable_requestPaint,Pt=Dn.unstable_now,Cy=Dn.unstable_getCurrentPriorityLevel,th=Dn.unstable_ImmediatePriority,k0=Dn.unstable_UserBlockingPriority,Xl=Dn.unstable_NormalPriority,Py=Dn.unstable_LowPriority,B0=Dn.unstable_IdlePriority,wc=null,mi=null;function Ly(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(wc,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:Ny,Dy=Math.log,Iy=Math.LN2;function Ny(t){return t>>>=0,t===0?32:31-(Dy(t)/Iy|0)|0}var za=64,Ha=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ho(a):(s&=o,s!==0&&(i=Ho(s)))}else o=n&~r,o!==0?i=Ho(o):s!==0&&(i=Ho(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function Uy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-si(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Uy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Md(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function z0(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function Fy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function nh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function H0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var V0,ih,W0,G0,j0,wd=!1,Va=[],or=null,ar=null,lr=null,ia=new Map,ra=new Map,Ji=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rp(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function To(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wa(e),e!==null&&ih(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function By(t,e,n,i,r){switch(e){case"focusin":return or=To(or,t,e,n,i,r),!0;case"dragenter":return ar=To(ar,t,e,n,i,r),!0;case"mouseover":return lr=To(lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ia.set(s,To(ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ra.set(s,To(ra.get(s)||null,t,e,n,i,r)),!0}return!1}function X0(t){var e=Hr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=N0(n),e!==null){t.blockedOn=e,j0(t.priority,function(){W0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_d=i,n.target.dispatchEvent(i),_d=null}else return e=wa(n),e!==null&&ih(e),t.blockedOn=n,!1;e.shift()}return!0}function Cp(t,e,n){wl(t)&&n.delete(e)}function zy(){wd=!1,or!==null&&wl(or)&&(or=null),ar!==null&&wl(ar)&&(ar=null),lr!==null&&wl(lr)&&(lr=null),ia.forEach(Cp),ra.forEach(Cp)}function bo(t,e){t.blockedOn===e&&(t.blockedOn=null,wd||(wd=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,zy)))}function sa(t){function e(r){return bo(r,t)}if(0<Va.length){bo(Va[0],t);for(var n=1;n<Va.length;n++){var i=Va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&bo(or,t),ar!==null&&bo(ar,t),lr!==null&&bo(lr,t),ia.forEach(e),ra.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)X0(n),n.blockedOn===null&&Ji.shift()}var Gs=Bi.ReactCurrentBatchConfig,ql=!0;function Hy(t,e,n,i){var r=ct,s=Gs.transition;Gs.transition=null;try{ct=1,rh(t,e,n,i)}finally{ct=r,Gs.transition=s}}function Vy(t,e,n,i){var r=ct,s=Gs.transition;Gs.transition=null;try{ct=4,rh(t,e,n,i)}finally{ct=r,Gs.transition=s}}function rh(t,e,n,i){if(ql){var r=Td(t,e,n,i);if(r===null)du(t,e,i,Yl,n),Rp(t,i);else if(By(r,t,e,n,i))i.stopPropagation();else if(Rp(t,i),e&4&&-1<ky.indexOf(t)){for(;r!==null;){var s=wa(r);if(s!==null&&V0(s),s=Td(t,e,n,i),s===null&&du(t,e,i,Yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else du(t,e,i,null,n)}}var Yl=null;function Td(t,e,n,i){if(Yl=null,t=eh(i),t=Hr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=N0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function $0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cy()){case th:return 1;case k0:return 4;case Xl:case Py:return 16;case B0:return 536870912;default:return 16}default:return 16}}var tr=null,sh=null,Tl=null;function q0(){if(Tl)return Tl;var t,e=sh,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Tl=r.slice(t,1<i?1-i:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function Pp(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:Pp,this.isPropagationStopped=Pp,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oh=Nn(uo),Ma=wt({},uo,{view:0,detail:0}),Wy=Nn(Ma),nu,iu,Ao,Tc=wt({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ah,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(nu=t.screenX-Ao.screenX,iu=t.screenY-Ao.screenY):iu=nu=0,Ao=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:iu}}),Lp=Nn(Tc),Gy=wt({},Tc,{dataTransfer:0}),jy=Nn(Gy),Xy=wt({},Ma,{relatedTarget:0}),ru=Nn(Xy),$y=wt({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),qy=Nn($y),Yy=wt({},uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ky=Nn(Yy),Zy=wt({},uo,{data:0}),Dp=Nn(Zy),Jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eS[t])?!!e[t]:!1}function ah(){return tS}var nS=wt({},Ma,{key:function(t){if(t.key){var e=Jy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ah,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iS=Nn(nS),rS=wt({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=Nn(rS),sS=wt({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ah}),oS=Nn(sS),aS=wt({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),lS=Nn(aS),cS=wt({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uS=Nn(cS),dS=[9,13,27,32],lh=Ii&&"CompositionEvent"in window,$o=null;Ii&&"documentMode"in document&&($o=document.documentMode);var fS=Ii&&"TextEvent"in window&&!$o,Y0=Ii&&(!lh||$o&&8<$o&&11>=$o),Np=" ",Up=!1;function K0(t,e){switch(t){case"keyup":return dS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function hS(t,e){switch(t){case"compositionend":return Z0(e);case"keypress":return e.which!==32?null:(Up=!0,Np);case"textInput":return t=e.data,t===Np&&Up?null:t;default:return null}}function pS(t,e){if(Ps)return t==="compositionend"||!lh&&K0(t,e)?(t=q0(),Tl=sh=tr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y0&&e.locale!=="ko"?null:e.data;default:return null}}var mS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mS[t.type]:e==="textarea"}function J0(t,e,n,i){C0(i),e=Kl(e,"onChange"),0<e.length&&(n=new oh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qo=null,oa=null;function gS(t){cv(t,0)}function bc(t){var e=Is(t);if(E0(e))return t}function vS(t,e){if(t==="change")return e}var Q0=!1;if(Ii){var su;if(Ii){var ou="oninput"in document;if(!ou){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),ou=typeof Fp.oninput=="function"}su=ou}else su=!1;Q0=su&&(!document.documentMode||9<document.documentMode)}function kp(){qo&&(qo.detachEvent("onpropertychange",ev),oa=qo=null)}function ev(t){if(t.propertyName==="value"&&bc(oa)){var e=[];J0(e,oa,t,eh(t)),I0(gS,e)}}function xS(t,e,n){t==="focusin"?(kp(),qo=e,oa=n,qo.attachEvent("onpropertychange",ev)):t==="focusout"&&kp()}function _S(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bc(oa)}function yS(t,e){if(t==="click")return bc(e)}function SS(t,e){if(t==="input"||t==="change")return bc(e)}function ES(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:ES;function aa(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ad.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,e){var n=Bp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nv(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MS(t){var e=nv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tv(n.ownerDocument.documentElement,n)){if(i!==null&&ch(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=zp(n,s);var o=zp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wS=Ii&&"documentMode"in document&&11>=document.documentMode,Ls=null,bd=null,Yo=null,Ad=!1;function Hp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ad||Ls==null||Ls!==Wl(i)||(i=Ls,"selectionStart"in i&&ch(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yo&&aa(Yo,i)||(Yo=i,i=Kl(bd,"onSelect"),0<i.length&&(e=new oh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ls)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},au={},iv={};Ii&&(iv=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Ac(t){if(au[t])return au[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iv)return au[t]=e[n];return t}var rv=Ac("animationend"),sv=Ac("animationiteration"),ov=Ac("animationstart"),av=Ac("transitionend"),lv=new Map,Vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){lv.set(t,e),os(e,[t])}for(var lu=0;lu<Vp.length;lu++){var cu=Vp[lu],TS=cu.toLowerCase(),bS=cu[0].toUpperCase()+cu.slice(1);Er(TS,"on"+bS)}Er(rv,"onAnimationEnd");Er(sv,"onAnimationIteration");Er(ov,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(av,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ty(i,e,void 0,t),t.currentTarget=null}function cv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Wp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Wp(r,a,c),s=l}}}if(jl)throw t=Ed,jl=!1,Ed=null,t}function mt(t,e){var n=e[Dd];n===void 0&&(n=e[Dd]=new Set);var i=t+"__bubble";n.has(i)||(uv(e,t,2,!1),n.add(i))}function uu(t,e,n){var i=0;e&&(i|=4),uv(n,t,i,e)}var ja="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[ja]){t[ja]=!0,v0.forEach(function(n){n!=="selectionchange"&&(AS.has(n)||uu(n,!1,t),uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ja]||(e[ja]=!0,uu("selectionchange",!1,e))}}function uv(t,e,n,i){switch($0(e)){case 1:var r=Hy;break;case 4:r=Vy;break;default:r=rh}n=r.bind(null,e,n,t),r=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function du(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}I0(function(){var c=s,u=eh(n),d=[];e:{var h=lv.get(t);if(h!==void 0){var m=oh,x=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":m=iS;break;case"focusin":x="focus",m=ru;break;case"focusout":x="blur",m=ru;break;case"beforeblur":case"afterblur":m=ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=oS;break;case rv:case sv:case ov:m=qy;break;case av:m=lS;break;case"scroll":m=Wy;break;case"wheel":m=uS;break;case"copy":case"cut":case"paste":m=Ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ip}var y=(e&4)!==0,p=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,v;g!==null;){v=g;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,f!==null&&(E=na(g,f),E!=null&&y.push(ca(g,E,v)))),p)break;g=g.return}0<y.length&&(h=new m(h,x,null,n,u),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==_d&&(x=n.relatedTarget||n.fromElement)&&(Hr(x)||x[Ni]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Hr(x):null,x!==null&&(p=as(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(y=Lp,E="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ip,E="onPointerLeave",f="onPointerEnter",g="pointer"),p=m==null?h:Is(m),v=x==null?h:Is(x),h=new y(E,g+"leave",m,n,u),h.target=p,h.relatedTarget=v,E=null,Hr(u)===c&&(y=new y(f,g+"enter",x,n,u),y.target=v,y.relatedTarget=p,E=y),p=E,m&&x)t:{for(y=m,f=x,g=0,v=y;v;v=cs(v))g++;for(v=0,E=f;E;E=cs(E))v++;for(;0<g-v;)y=cs(y),g--;for(;0<v-g;)f=cs(f),v--;for(;g--;){if(y===f||f!==null&&y===f.alternate)break t;y=cs(y),f=cs(f)}y=null}else y=null;m!==null&&Gp(d,h,m,y,!1),x!==null&&p!==null&&Gp(d,p,x,y,!0)}}e:{if(h=c?Is(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=vS;else if(Op(h))if(Q0)R=SS;else{R=_S;var b=xS}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=yS);if(R&&(R=R(t,c))){J0(d,R,n,u);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&pd(h,"number",h.value)}switch(b=c?Is(c):window,t){case"focusin":(Op(b)||b.contentEditable==="true")&&(Ls=b,bd=c,Yo=null);break;case"focusout":Yo=bd=Ls=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Hp(d,n,u);break;case"selectionchange":if(wS)break;case"keydown":case"keyup":Hp(d,n,u)}var A;if(lh)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ps?K0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Y0&&n.locale!=="ko"&&(Ps||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ps&&(A=q0()):(tr=u,sh="value"in tr?tr.value:tr.textContent,Ps=!0)),b=Kl(c,L),0<b.length&&(L=new Dp(L,t,null,n,u),d.push({event:L,listeners:b}),A?L.data=A:(A=Z0(n),A!==null&&(L.data=A)))),(A=fS?hS(t,n):pS(t,n))&&(c=Kl(c,"onBeforeInput"),0<c.length&&(u=new Dp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}cv(d,e)})}function ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=na(t,n),s!=null&&i.unshift(ca(t,s,r)),s=na(t,e),s!=null&&i.push(ca(t,s,r))),t=t.return}return i}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=na(n,s),l!=null&&o.unshift(ca(n,l,a))):r||(l=na(n,s),l!=null&&o.push(ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var RS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function jp(t){return(typeof t=="string"?t:""+t).replace(RS,`
`).replace(CS,"")}function Xa(t,e,n){if(e=jp(e),jp(t)!==e&&n)throw Error(oe(425))}function Zl(){}var Rd=null,Cd=null;function Pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ld=typeof setTimeout=="function"?setTimeout:void 0,PS=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(t){return Xp.resolve(null).then(t).catch(DS)}:Ld;function DS(t){setTimeout(function(){throw t})}function fu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sa(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $p(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),hi="__reactFiber$"+fo,ua="__reactProps$"+fo,Ni="__reactContainer$"+fo,Dd="__reactEvents$"+fo,IS="__reactListeners$"+fo,NS="__reactHandles$"+fo;function Hr(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$p(t);t!==null;){if(n=t[hi])return n;t=$p(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[hi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Rc(t){return t[ua]||null}var Id=[],Ns=-1;function Mr(t){return{current:t}}function xt(t){0>Ns||(t.current=Id[Ns],Id[Ns]=null,Ns--)}function ft(t,e){Ns++,Id[Ns]=t.current,t.current=e}var xr={},nn=Mr(xr),xn=Mr(!1),Kr=xr;function Zs(t,e){var n=t.type.contextTypes;if(!n)return xr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function Jl(){xt(xn),xt(nn)}function qp(t,e,n){if(nn.current!==xr)throw Error(oe(168));ft(nn,e),ft(xn,n)}function dv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,xy(t)||"Unknown",r));return wt({},n,i)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,Kr=nn.current,ft(nn,t),ft(xn,xn.current),!0}function Yp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=dv(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,xt(xn),xt(nn),ft(nn,t)):xt(xn),ft(xn,n)}var bi=null,Cc=!1,hu=!1;function fv(t){bi===null?bi=[t]:bi.push(t)}function US(t){Cc=!0,fv(t)}function wr(){if(!hu&&bi!==null){hu=!0;var t=0,e=ct;try{var n=bi;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,Cc=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),F0(th,wr),r}finally{ct=e,hu=!1}}return null}var Us=[],Os=0,ec=null,tc=0,Fn=[],kn=0,Zr=null,Ri=1,Ci="";function Ur(t,e){Us[Os++]=tc,Us[Os++]=ec,ec=t,tc=e}function hv(t,e,n){Fn[kn++]=Ri,Fn[kn++]=Ci,Fn[kn++]=Zr,Zr=t;var i=Ri;t=Ci;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ri=1<<32-si(e)+r|n<<r|i,Ci=s+t}else Ri=1<<s|n<<r|i,Ci=t}function uh(t){t.return!==null&&(Ur(t,1),hv(t,1,0))}function dh(t){for(;t===ec;)ec=Us[--Os],Us[Os]=null,tc=Us[--Os],Us[Os]=null;for(;t===Zr;)Zr=Fn[--kn],Fn[kn]=null,Ci=Fn[--kn],Fn[kn]=null,Ri=Fn[--kn],Fn[kn]=null}var Pn=null,Cn=null,_t=!1,ni=null;function pv(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Ri,overflow:Ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Cn=null,!0):!1;default:return!1}}function Nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ud(t){if(_t){var e=Cn;if(e){var n=e;if(!Kp(t,e)){if(Nd(t))throw Error(oe(418));e=cr(n.nextSibling);var i=Pn;e&&Kp(t,e)?pv(i,n):(t.flags=t.flags&-4097|2,_t=!1,Pn=t)}}else{if(Nd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,_t=!1,Pn=t}}}function Zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function $a(t){if(t!==Pn)return!1;if(!_t)return Zp(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pd(t.type,t.memoizedProps)),e&&(e=Cn)){if(Nd(t))throw mv(),Error(oe(418));for(;e;)pv(t,e),e=cr(e.nextSibling)}if(Zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Pn?cr(t.stateNode.nextSibling):null;return!0}function mv(){for(var t=Cn;t;)t=cr(t.nextSibling)}function Js(){Cn=Pn=null,_t=!1}function fh(t){ni===null?ni=[t]:ni.push(t)}var OS=Bi.ReactCurrentBatchConfig;function Ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function qa(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jp(t){var e=t._init;return e(t._payload)}function gv(t){function e(f,g){if(t){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=hr(f,g),f.index=0,f.sibling=null,f}function s(f,g,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,v,E){return g===null||g.tag!==6?(g=yu(v,f.mode,E),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,E){var R=v.type;return R===Cs?u(f,g,v.props.children,E,v.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ki&&Jp(R)===g.type)?(E=r(g,v.props),E.ref=Ro(f,g,v),E.return=f,E):(E=Il(v.type,v.key,v.props,null,f.mode,E),E.ref=Ro(f,g,v),E.return=f,E)}function c(f,g,v,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Su(v,f.mode,E),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function u(f,g,v,E,R){return g===null||g.tag!==7?(g=qr(v,f.mode,E,R),g.return=f,g):(g=r(g,v),g.return=f,g)}function d(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=yu(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fa:return v=Il(g.type,g.key,g.props,null,f.mode,v),v.ref=Ro(f,null,g),v.return=f,v;case Rs:return g=Su(g,f.mode,v),g.return=f,g;case Ki:var E=g._init;return d(f,E(g._payload),v)}if(zo(g)||Mo(g))return g=qr(g,f.mode,v,null),g.return=f,g;qa(f,g)}return null}function h(f,g,v,E){var R=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(f,g,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fa:return v.key===R?l(f,g,v,E):null;case Rs:return v.key===R?c(f,g,v,E):null;case Ki:return R=v._init,h(f,g,R(v._payload),E)}if(zo(v)||Mo(v))return R!==null?null:u(f,g,v,E,null);qa(f,v)}return null}function m(f,g,v,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(v)||null,a(g,f,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Fa:return f=f.get(E.key===null?v:E.key)||null,l(g,f,E,R);case Rs:return f=f.get(E.key===null?v:E.key)||null,c(g,f,E,R);case Ki:var b=E._init;return m(f,g,v,b(E._payload),R)}if(zo(E)||Mo(E))return f=f.get(v)||null,u(g,f,E,R,null);qa(g,E)}return null}function x(f,g,v,E){for(var R=null,b=null,A=g,L=g=0,w=null;A!==null&&L<v.length;L++){A.index>L?(w=A,A=null):w=A.sibling;var S=h(f,A,v[L],E);if(S===null){A===null&&(A=w);break}t&&A&&S.alternate===null&&e(f,A),g=s(S,g,L),b===null?R=S:b.sibling=S,b=S,A=w}if(L===v.length)return n(f,A),_t&&Ur(f,L),R;if(A===null){for(;L<v.length;L++)A=d(f,v[L],E),A!==null&&(g=s(A,g,L),b===null?R=A:b.sibling=A,b=A);return _t&&Ur(f,L),R}for(A=i(f,A);L<v.length;L++)w=m(A,f,L,v[L],E),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?L:w.key),g=s(w,g,L),b===null?R=w:b.sibling=w,b=w);return t&&A.forEach(function(C){return e(f,C)}),_t&&Ur(f,L),R}function y(f,g,v,E){var R=Mo(v);if(typeof R!="function")throw Error(oe(150));if(v=R.call(v),v==null)throw Error(oe(151));for(var b=R=null,A=g,L=g=0,w=null,S=v.next();A!==null&&!S.done;L++,S=v.next()){A.index>L?(w=A,A=null):w=A.sibling;var C=h(f,A,S.value,E);if(C===null){A===null&&(A=w);break}t&&A&&C.alternate===null&&e(f,A),g=s(C,g,L),b===null?R=C:b.sibling=C,b=C,A=w}if(S.done)return n(f,A),_t&&Ur(f,L),R;if(A===null){for(;!S.done;L++,S=v.next())S=d(f,S.value,E),S!==null&&(g=s(S,g,L),b===null?R=S:b.sibling=S,b=S);return _t&&Ur(f,L),R}for(A=i(f,A);!S.done;L++,S=v.next())S=m(A,f,L,S.value,E),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?L:S.key),g=s(S,g,L),b===null?R=S:b.sibling=S,b=S);return t&&A.forEach(function(V){return e(f,V)}),_t&&Ur(f,L),R}function p(f,g,v,E){if(typeof v=="object"&&v!==null&&v.type===Cs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Fa:e:{for(var R=v.key,b=g;b!==null;){if(b.key===R){if(R=v.type,R===Cs){if(b.tag===7){n(f,b.sibling),g=r(b,v.props.children),g.return=f,f=g;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ki&&Jp(R)===b.type){n(f,b.sibling),g=r(b,v.props),g.ref=Ro(f,b,v),g.return=f,f=g;break e}n(f,b);break}else e(f,b);b=b.sibling}v.type===Cs?(g=qr(v.props.children,f.mode,E,v.key),g.return=f,f=g):(E=Il(v.type,v.key,v.props,null,f.mode,E),E.ref=Ro(f,g,v),E.return=f,f=E)}return o(f);case Rs:e:{for(b=v.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=Su(v,f.mode,E),g.return=f,f=g}return o(f);case Ki:return b=v._init,p(f,g,b(v._payload),E)}if(zo(v))return x(f,g,v,E);if(Mo(v))return y(f,g,v,E);qa(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,v),g.return=f,f=g):(n(f,g),g=yu(v,f.mode,E),g.return=f,f=g),o(f)):n(f,g)}return p}var Qs=gv(!0),vv=gv(!1),nc=Mr(null),ic=null,Fs=null,hh=null;function ph(){hh=Fs=ic=null}function mh(t){var e=nc.current;xt(nc),t._currentValue=e}function Od(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){ic=t,hh=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(hh!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(ic===null)throw Error(oe(308));Fs=t,ic.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Vr=null;function gh(t){Vr===null?Vr=[t]:Vr.push(t)}function xv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function vh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,gh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nh(t,n)}}function Qp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rc(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(h=e,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){d=x.call(m,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(m,d,h):x,h==null)break e;d=wt({},d,h);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=d}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Ta={},gi=Mr(Ta),da=Mr(Ta),fa=Mr(Ta);function Wr(t){if(t===Ta)throw Error(oe(174));return t}function xh(t,e){switch(ft(fa,e),ft(da,t),ft(gi,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gd(e,t)}xt(gi),ft(gi,e)}function eo(){xt(gi),xt(da),xt(fa)}function yv(t){Wr(fa.current);var e=Wr(gi.current),n=gd(e,t.type);e!==n&&(ft(da,t),ft(gi,n))}function _h(t){da.current===t&&(xt(gi),xt(da))}var yt=Mr(0);function sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pu=[];function yh(){for(var t=0;t<pu.length;t++)pu[t]._workInProgressVersionPrimary=null;pu.length=0}var Rl=Bi.ReactCurrentDispatcher,mu=Bi.ReactCurrentBatchConfig,Jr=0,Et=null,Ot=null,Ht=null,oc=!1,Ko=!1,ha=0,FS=0;function qt(){throw Error(oe(321))}function Sh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Eh(t,e,n,i,r,s){if(Jr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?HS:VS,t=n(i,r),Ko){s=0;do{if(Ko=!1,ha=0,25<=s)throw Error(oe(301));s+=1,Ht=Ot=null,e.updateQueue=null,Rl.current=WS,t=n(i,r)}while(Ko)}if(Rl.current=ac,e=Ot!==null&&Ot.next!==null,Jr=0,Ht=Ot=Et=null,oc=!1,e)throw Error(oe(300));return t}function Mh(){var t=ha!==0;return ha=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Et.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Wn(){if(Ot===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Ht===null?Et.memoizedState:Ht.next;if(e!==null)Ht=e,Ot=t;else{if(t===null)throw Error(oe(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Ht===null?Et.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function pa(t,e){return typeof e=="function"?e(t):e}function gu(t){var e=Wn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Jr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Et.lanes|=u,Qr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vu(t){var e=Wn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sv(){}function Ev(t,e){var n=Et,i=Wn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,wh(Tv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,ma(9,wv.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(oe(349));Jr&30||Mv(n,e,r)}return r}function Mv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wv(t,e,n,i){e.value=n,e.getSnapshot=i,bv(e)&&Av(t)}function Tv(t,e,n){return n(function(){bv(e)&&Av(t)})}function bv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function Av(t){var e=Ui(t,1);e!==null&&oi(e,t,1,-1)}function tm(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=zS.bind(null,Et,t),[e.memoizedState,t]}function ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Rv(){return Wn().memoizedState}function Cl(t,e,n,i){var r=ui();Et.flags|=t,r.memoizedState=ma(1|e,n,void 0,i===void 0?null:i)}function Pc(t,e,n,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Sh(i,o.deps)){r.memoizedState=ma(e,n,s,i);return}}Et.flags|=t,r.memoizedState=ma(1|e,n,s,i)}function nm(t,e){return Cl(8390656,8,t,e)}function wh(t,e){return Pc(2048,8,t,e)}function Cv(t,e){return Pc(4,2,t,e)}function Pv(t,e){return Pc(4,4,t,e)}function Lv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dv(t,e,n){return n=n!=null?n.concat([t]):null,Pc(4,4,Lv.bind(null,e,t),n)}function Th(){}function Iv(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Nv(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Uv(t,e,n){return Jr&21?(ai(n,e)||(n=z0(),Et.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function kS(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=mu.transition;mu.transition={};try{t(!1),e()}finally{ct=n,mu.transition=i}}function Ov(){return Wn().memoizedState}function BS(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Fv(t))kv(e,n);else if(n=xv(t,e,n,i),n!==null){var r=an();oi(n,t,i,r),Bv(n,e,i)}}function zS(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fv(t))kv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,gh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=xv(t,e,r,i),n!==null&&(r=an(),oi(n,t,i,r),Bv(n,e,i))}}function Fv(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function kv(t,e){Ko=oc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nh(t,n)}}var ac={readContext:Vn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},HS={readContext:Vn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:nm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,Lv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=BS.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:tm,useDebugValue:Th,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=tm(!1),e=t[0];return t=kS.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=ui();if(_t){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Vt===null)throw Error(oe(349));Jr&30||Mv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,nm(Tv.bind(null,i,s,t),[t]),i.flags|=2048,ma(9,wv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ui(),e=Vt.identifierPrefix;if(_t){var n=Ci,i=Ri;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VS={readContext:Vn,useCallback:Iv,useContext:Vn,useEffect:wh,useImperativeHandle:Dv,useInsertionEffect:Cv,useLayoutEffect:Pv,useMemo:Nv,useReducer:gu,useRef:Rv,useState:function(){return gu(pa)},useDebugValue:Th,useDeferredValue:function(t){var e=Wn();return Uv(e,Ot.memoizedState,t)},useTransition:function(){var t=gu(pa)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Ev,useId:Ov,unstable_isNewReconciler:!1},WS={readContext:Vn,useCallback:Iv,useContext:Vn,useEffect:wh,useImperativeHandle:Dv,useInsertionEffect:Cv,useLayoutEffect:Pv,useMemo:Nv,useReducer:vu,useRef:Rv,useState:function(){return vu(pa)},useDebugValue:Th,useDeferredValue:function(t){var e=Wn();return Ot===null?e.memoizedState=t:Uv(e,Ot.memoizedState,t)},useTransition:function(){var t=vu(pa)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Ev,useId:Ov,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=fr(t),s=Di(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(oi(e,t,r,i),Al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=fr(t),s=Di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(oi(e,t,r,i),Al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=fr(t),r=Di(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(oi(e,t,i,n),Al(e,t,i))}};function im(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,i)||!aa(r,s):!0}function zv(t,e,n){var i=!1,r=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=_n(e)?Kr:nn.current,i=e.contextTypes,s=(i=i!=null)?Zs(t,r):xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function rm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function kd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=_n(e)?Kr:nn.current,r.context=Zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),rc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function to(t,e){try{var n="",i=e;do n+=vy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function xu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GS=typeof WeakMap=="function"?WeakMap:Map;function Hv(t,e,n){n=Di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){cc||(cc=!0,Yd=i),Bd(t,e)},n}function Vv(t,e,n){n=Di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bd(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new GS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=r1.bind(null,t,e,n),e.then(t,t))}function om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function am(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Di(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var jS=Bi.ReactCurrentOwner,gn=!1;function sn(t,e,n,i){e.child=t===null?vv(e,null,n,i):Qs(e,t.child,n,i)}function lm(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=Eh(t,e,n,i,s,r),n=Mh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(_t&&n&&uh(e),e.flags|=1,sn(t,e,i,r),e.child)}function cm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ih(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wv(t,e,s,i,r)):(t=Il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,i)&&t.ref===e.ref)return Oi(t,e,r)}return e.flags|=1,t=hr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Wv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(aa(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Oi(t,e,r)}return zd(t,e,n,i,r)}function Gv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Bs,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Bs,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Bs,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Bs,Rn),Rn|=i;return sn(t,e,r,n),e.child}function jv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zd(t,e,n,i,r){var s=_n(n)?Kr:nn.current;return s=Zs(e,s),js(e,r),n=Eh(t,e,n,i,s,r),i=Mh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(_t&&i&&uh(e),e.flags|=1,sn(t,e,n,r),e.child)}function um(t,e,n,i,r){if(_n(n)){var s=!0;Ql(e)}else s=!1;if(js(e,r),e.stateNode===null)Pl(t,e),zv(e,n,i),kd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=_n(n)?Kr:nn.current,c=Zs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&rm(e,o,i,c),Zi=!1;var h=e.memoizedState;o.state=h,rc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||xn.current||Zi?(typeof u=="function"&&(Fd(e,n,u,i),l=e.memoizedState),(a=Zi||im(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,_v(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=_n(n)?Kr:nn.current,l=Zs(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&rm(e,o,i,l),Zi=!1,h=e.memoizedState,o.state=h,rc(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||xn.current||Zi?(typeof m=="function"&&(Fd(e,n,m,i),x=e.memoizedState),(c=Zi||im(e,n,c,i,h,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Hd(t,e,n,i,s,r)}function Hd(t,e,n,i,r,s){jv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Yp(e,n,!1),Oi(t,e,s);i=e.stateNode,jS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&Yp(e,n,!0),e.child}function Xv(t){var e=t.stateNode;e.pendingContext?qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qp(t,e.context,!1),xh(t,e.containerInfo)}function dm(t,e,n,i,r){return Js(),fh(r),e.flags|=256,sn(t,e,n,i),e.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Wd(t){return{baseLanes:t,cachePool:null,transitions:null}}function $v(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(yt,r&1),t===null)return Ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nc(o,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wd(n),e.memoizedState=Vd,t):bh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return XS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=hr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Wd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vd,i}return s=t.child,t=s.sibling,i=hr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bh(t,e){return e=Nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ya(t,e,n,i){return i!==null&&fh(i),Qs(e,t.child,null,n),t=bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=xu(Error(oe(422))),Ya(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Nc({mode:"visible",children:i.children},r,0,null),s=qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Wd(o),e.memoizedState=Vd,s);if(!(e.mode&1))return Ya(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=xu(s,i,void 0),Ya(t,e,o,i)}if(a=(o&t.childLanes)!==0,gn||a){if(i=Vt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),oi(i,t,r,-1))}return Dh(),i=xu(Error(oe(421))),Ya(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=s1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=cr(r.nextSibling),Pn=e,_t=!0,ni=null,t!==null&&(Fn[kn++]=Ri,Fn[kn++]=Ci,Fn[kn++]=Zr,Ri=t.id,Ci=t.overflow,Zr=e),e=bh(e,i.children),e.flags|=4096,e)}function fm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Od(t.return,e,n)}function _u(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function qv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fm(t,n,e);else if(t.tag===19)fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&sc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_u(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&sc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_u(e,!0,n,null,s);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $S(t,e,n){switch(e.tag){case 3:Xv(e),Js();break;case 5:yv(e);break;case 1:_n(e.type)&&Ql(e);break;case 4:xh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(nc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?$v(t,e,n):(ft(yt,yt.current&1),t=Oi(t,e,n),t!==null?t.sibling:null);ft(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Gv(t,e,n)}return Oi(t,e,n)}var Yv,Gd,Kv,Zv;Yv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gd=function(){};Kv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Wr(gi.current);var s=null;switch(n){case"input":r=fd(t,r),i=fd(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=md(t,r),i=md(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Zl)}vd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Zv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Co(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qS(t,e,n){var i=e.pendingProps;switch(dh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return _n(e.type)&&Jl(),Yt(e),null;case 3:return i=e.stateNode,eo(),xt(xn),xt(nn),yh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Jd(ni),ni=null))),Gd(t,e),Yt(e),null;case 5:_h(e);var r=Wr(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)Kv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Yt(e),null}if(t=Wr(gi.current),$a(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[ua]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)mt(Vo[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Sp(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Mp(i,s),mt("invalid",i)}vd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":ka(i),Ep(i,s,!0);break;case"textarea":ka(i),wp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=T0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[hi]=e,t[ua]=i,Yv(t,e,!1,!1),e.stateNode=t;e:{switch(o=xd(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vo.length;r++)mt(Vo[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":Sp(t,i),r=fd(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Mp(t,i),r=md(t,i),mt("invalid",t);break;default:r=i}vd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?R0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&b0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(t,l):typeof l=="number"&&ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Kf(t,s,l,o))}switch(n){case"input":ka(t),Ep(t,i,!1);break;case"textarea":ka(t),wp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+vr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Zv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Wr(fa.current),Wr(gi.current),$a(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return Yt(e),null;case 13:if(xt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Cn!==null&&e.mode&1&&!(e.flags&128))mv(),Js(),e.flags|=98560,s=!1;else if(s=$a(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[hi]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else ni!==null&&(Jd(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Ft===0&&(Ft=3):Dh())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return eo(),Gd(t,e),t===null&&la(e.stateNode.containerInfo),Yt(e),null;case 10:return mh(e.type._context),Yt(e),null;case 17:return _n(e.type)&&Jl(),Yt(e),null;case 19:if(xt(yt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Co(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sc(t),o!==null){for(e.flags|=128,Co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>no&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304)}else{if(!i)if(t=sc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return Yt(e),null}else 2*Pt()-s.renderingStartTime>no&&n!==1073741824&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=yt.current,ft(yt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return Lh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function YS(t,e){switch(dh(e),e.tag){case 1:return _n(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return eo(),xt(xn),xt(nn),yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _h(e),null;case 13:if(xt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(yt),null;case 4:return eo(),null;case 10:return mh(e.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var Ka=!1,Qt=!1,KS=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function jd(t,e,n){try{n()}catch(i){At(t,e,i)}}var hm=!1;function ZS(t,e){if(Rd=ql,t=nv(),ch(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cd={focusedElem:t,selectionRange:n},ql=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,p=x.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:ei(e.type,y),p);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(E){At(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return x=hm,hm=!1,x}function Zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jd(e,n,s)}r=r.next}while(r!==i)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jv(t){var e=t.alternate;e!==null&&(t.alternate=null,Jv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[ua],delete e[Dd],delete e[IS],delete e[NS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qv(t){return t.tag===5||t.tag===3||t.tag===4}function pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(i!==4&&(t=t.child,t!==null))for($d(t,e,n),t=t.sibling;t!==null;)$d(t,e,n),t=t.sibling}function qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}var Gt=null,ti=!1;function Wi(t,e,n){for(n=n.child;n!==null;)ex(t,e,n),n=n.sibling}function ex(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(wc,n)}catch{}switch(n.tag){case 5:Qt||ks(n,e);case 6:var i=Gt,r=ti;Gt=null,Wi(t,e,n),Gt=i,ti=r,Gt!==null&&(ti?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(ti?(t=Gt,n=n.stateNode,t.nodeType===8?fu(t.parentNode,n):t.nodeType===1&&fu(t,n),sa(t)):fu(Gt,n.stateNode));break;case 4:i=Gt,r=ti,Gt=n.stateNode.containerInfo,ti=!0,Wi(t,e,n),Gt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jd(n,e,o),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!Qt&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Wi(t,e,n),Qt=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KS),e.forEach(function(i){var r=o1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,ti=!1;break e;case 3:Gt=a.stateNode.containerInfo,ti=!0;break e;case 4:Gt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Gt===null)throw Error(oe(160));ex(s,o,r),Gt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tx(e,t),e=e.sibling}function tx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),ci(t),i&4){try{Zo(3,t,t.return),Dc(3,t)}catch(y){At(t,t.return,y)}try{Zo(5,t,t.return)}catch(y){At(t,t.return,y)}}break;case 1:qn(e,t),ci(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(qn(e,t),ci(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{ta(r,"")}catch(y){At(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&M0(r,s),xd(a,o);var c=xd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?R0(r,d):u==="dangerouslySetInnerHTML"?b0(r,d):u==="children"?ta(r,d):Kf(r,u,d,c)}switch(a){case"input":hd(r,s);break;case"textarea":w0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Hs(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Hs(r,!!s.multiple,s.defaultValue,!0):Hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ua]=s}catch(y){At(t,t.return,y)}}break;case 6:if(qn(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){At(t,t.return,y)}}break;case 3:if(qn(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(y){At(t,t.return,y)}break;case 4:qn(e,t),ci(t);break;case 13:qn(e,t),ci(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ch=Pt())),i&4&&mm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||u,qn(e,t),Qt=c):qn(e,t),ci(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(d=Ee=u;Ee!==null;){switch(h=Ee,m=h.child,h.tag){case 0:case 11:case 14:case 15:Zo(4,h,h.return);break;case 1:ks(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){At(i,n,y)}}break;case 5:ks(h,h.return);break;case 22:if(h.memoizedState!==null){vm(d);continue}}m!==null?(m.return=h,Ee=m):vm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=A0("display",o))}catch(y){At(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){At(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qn(e,t),ci(t),i&4&&mm(t);break;case 21:break;default:qn(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qv(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ta(r,""),i.flags&=-33);var s=pm(t);qd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pm(t);$d(t,a,o);break;default:throw Error(oe(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JS(t,e,n){Ee=t,nx(t)}function nx(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ka;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=Ka;var c=Qt;if(Ka=o,(Qt=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?xm(r):l!==null?(l.return=o,Ee=l):xm(r);for(;s!==null;)Ee=s,nx(s),s=s.sibling;Ee=r,Ka=a,Qt=c}gm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):gm(t)}}function gm(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&em(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}em(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Qt||e.flags&512&&Xd(e)}catch(h){At(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function vm(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function xm(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Xd(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{Xd(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var QS=Math.ceil,lc=Bi.ReactCurrentDispatcher,Ah=Bi.ReactCurrentOwner,Hn=Bi.ReactCurrentBatchConfig,it=0,Vt=null,Ut=null,Xt=0,Rn=0,Bs=Mr(0),Ft=0,ga=null,Qr=0,Ic=0,Rh=0,Jo=null,fn=null,Ch=0,no=1/0,Ti=null,cc=!1,Yd=null,dr=null,Za=!1,nr=null,uc=0,Qo=0,Kd=null,Ll=-1,Dl=0;function an(){return it&6?Pt():Ll!==-1?Ll:Ll=Pt()}function fr(t){return t.mode&1?it&2&&Xt!==0?Xt&-Xt:OS.transition!==null?(Dl===0&&(Dl=z0()),Dl):(t=ct,t!==0||(t=window.event,t=t===void 0?16:$0(t.type)),t):1}function oi(t,e,n,i){if(50<Qo)throw Qo=0,Kd=null,Error(oe(185));Ea(t,n,i),(!(it&2)||t!==Vt)&&(t===Vt&&(!(it&2)&&(Ic|=n),Ft===4&&Qi(t,Xt)),yn(t,i),n===1&&it===0&&!(e.mode&1)&&(no=Pt()+500,Cc&&wr()))}function yn(t,e){var n=t.callbackNode;Oy(t,e);var i=$l(t,t===Vt?Xt:0);if(i===0)n!==null&&Ap(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ap(n),e===1)t.tag===0?US(_m.bind(null,t)):fv(_m.bind(null,t)),LS(function(){!(it&6)&&wr()}),n=null;else{switch(H0(i)){case 1:n=th;break;case 4:n=k0;break;case 16:n=Xl;break;case 536870912:n=B0;break;default:n=Xl}n=ux(n,ix.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ix(t,e){if(Ll=-1,Dl=0,it&6)throw Error(oe(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var i=$l(t,t===Vt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dc(t,i);else{e=i;var r=it;it|=2;var s=sx();(Vt!==t||Xt!==e)&&(Ti=null,no=Pt()+500,$r(t,e));do try{n1();break}catch(a){rx(t,a)}while(!0);ph(),lc.current=s,it=r,Ut!==null?e=0:(Vt=null,Xt=0,e=Ft)}if(e!==0){if(e===2&&(r=Md(t),r!==0&&(i=r,e=Zd(t,r))),e===1)throw n=ga,$r(t,0),Qi(t,i),yn(t,Pt()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!e1(r)&&(e=dc(t,i),e===2&&(s=Md(t),s!==0&&(i=s,e=Zd(t,s))),e===1))throw n=ga,$r(t,0),Qi(t,i),yn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Or(t,fn,Ti);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=Ch+500-Pt(),10<e)){if($l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ld(Or.bind(null,t,fn,Ti),e);break}Or(t,fn,Ti);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*QS(i/1960))-i,10<i){t.timeoutHandle=Ld(Or.bind(null,t,fn,Ti),i);break}Or(t,fn,Ti);break;case 5:Or(t,fn,Ti);break;default:throw Error(oe(329))}}}return yn(t,Pt()),t.callbackNode===n?ix.bind(null,t):null}function Zd(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=dc(t,e),t!==2&&(e=fn,fn=n,e!==null&&Jd(e)),t}function Jd(t){fn===null?fn=t:fn.push.apply(fn,t)}function e1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~Rh,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function _m(t){if(it&6)throw Error(oe(327));Xs();var e=$l(t,0);if(!(e&1))return yn(t,Pt()),null;var n=dc(t,e);if(t.tag!==0&&n===2){var i=Md(t);i!==0&&(e=i,n=Zd(t,i))}if(n===1)throw n=ga,$r(t,0),Qi(t,e),yn(t,Pt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,fn,Ti),yn(t,Pt()),null}function Ph(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(no=Pt()+500,Cc&&wr())}}function es(t){nr!==null&&nr.tag===0&&!(it&6)&&Xs();var e=it;it|=1;var n=Hn.transition,i=ct;try{if(Hn.transition=null,ct=1,t)return t()}finally{ct=i,Hn.transition=n,it=e,!(it&6)&&wr()}}function Lh(){Rn=Bs.current,xt(Bs)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PS(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(dh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:eo(),xt(xn),xt(nn),yh();break;case 5:_h(i);break;case 4:eo();break;case 13:xt(yt);break;case 19:xt(yt);break;case 10:mh(i.type._context);break;case 22:case 23:Lh()}n=n.return}if(Vt=t,Ut=t=hr(t.current,null),Xt=Rn=e,Ft=0,ga=null,Rh=Ic=Qr=0,fn=Jo=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function rx(t,e){do{var n=Ut;try{if(ph(),Rl.current=ac,oc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}oc=!1}if(Jr=0,Ht=Ot=Et=null,Ko=!1,ha=0,Ah.current=null,n===null||n.return===null){Ft=1,ga=e,Ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=om(o);if(m!==null){m.flags&=-257,am(m,o,a,s,e),m.mode&1&&sm(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){sm(s,c,e),Dh();break e}l=Error(oe(426))}}else if(_t&&a.mode&1){var p=om(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),am(p,o,a,s,e),fh(to(l,a));break e}}s=l=to(l,a),Ft!==4&&(Ft=2),Jo===null?Jo=[s]:Jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Hv(s,l,e);Qp(s,f);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dr===null||!dr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Vv(s,a,e);Qp(s,E);break e}}s=s.return}while(s!==null)}ax(n)}catch(R){e=R,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function sx(){var t=lc.current;return lc.current=ac,t===null?ac:t}function Dh(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Vt===null||!(Qr&268435455)&&!(Ic&268435455)||Qi(Vt,Xt)}function dc(t,e){var n=it;it|=2;var i=sx();(Vt!==t||Xt!==e)&&(Ti=null,$r(t,e));do try{t1();break}catch(r){rx(t,r)}while(!0);if(ph(),it=n,lc.current=i,Ut!==null)throw Error(oe(261));return Vt=null,Xt=0,Ft}function t1(){for(;Ut!==null;)ox(Ut)}function n1(){for(;Ut!==null&&!Ay();)ox(Ut)}function ox(t){var e=cx(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?ax(t):Ut=e,Ah.current=null}function ax(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YS(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Ut=null;return}}else if(n=qS(n,e,Rn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Ft===0&&(Ft=5)}function Or(t,e,n){var i=ct,r=Hn.transition;try{Hn.transition=null,ct=1,i1(t,e,n,i)}finally{Hn.transition=r,ct=i}return null}function i1(t,e,n,i){do Xs();while(nr!==null);if(it&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Fy(t,s),t===Vt&&(Ut=Vt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,ux(Xl,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=ct;ct=1;var a=it;it|=4,Ah.current=null,ZS(t,n),tx(n,t),MS(Cd),ql=!!Rd,Cd=Rd=null,t.current=n,JS(n),Ry(),it=a,ct=o,Hn.transition=s}else t.current=n;if(Za&&(Za=!1,nr=t,uc=r),s=t.pendingLanes,s===0&&(dr=null),Ly(n.stateNode),yn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(cc)throw cc=!1,t=Yd,Yd=null,t;return uc&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===Kd?Qo++:(Qo=0,Kd=t):Qo=0,wr(),null}function Xs(){if(nr!==null){var t=H0(uc),e=Hn.transition,n=ct;try{if(Hn.transition=null,ct=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,uc=0,it&6)throw Error(oe(331));var r=it;for(it|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:Zo(8,u,s)}var d=u.child;if(d!==null)d.return=u,Ee=d;else for(;Ee!==null;){u=Ee;var h=u.sibling,m=u.return;if(Jv(u),u===c){Ee=null;break}if(h!==null){h.return=m,Ee=h;break}Ee=m}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){o=Ee;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ee=v;else e:for(o=g;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dc(9,a)}}catch(R){At(a,a.return,R)}if(a===o){Ee=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Ee=E;break e}Ee=a.return}}if(it=r,wr(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(wc,t)}catch{}i=!0}return i}finally{ct=n,Hn.transition=e}}return!1}function ym(t,e,n){e=to(n,e),e=Hv(t,e,1),t=ur(t,e,1),e=an(),t!==null&&(Ea(t,1,e),yn(t,e))}function At(t,e,n){if(t.tag===3)ym(t,t,n);else for(;e!==null;){if(e.tag===3){ym(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=to(n,t),t=Vv(e,t,1),e=ur(e,t,1),t=an(),e!==null&&(Ea(e,1,t),yn(e,t));break}}e=e.return}}function r1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Xt&n)===n&&(Ft===4||Ft===3&&(Xt&130023424)===Xt&&500>Pt()-Ch?$r(t,0):Rh|=n),yn(t,e)}function lx(t,e){e===0&&(t.mode&1?(e=Ha,Ha<<=1,!(Ha&130023424)&&(Ha=4194304)):e=1);var n=an();t=Ui(t,e),t!==null&&(Ea(t,e,n),yn(t,n))}function s1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lx(t,n)}function o1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),lx(t,n)}var cx;cx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,$S(t,e,n);gn=!!(t.flags&131072)}else gn=!1,_t&&e.flags&1048576&&hv(e,tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pl(t,e),t=e.pendingProps;var r=Zs(e,nn.current);js(e,n),r=Eh(null,e,i,t,r,n);var s=Mh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,Ql(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vh(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,kd(e,i,t,n),e=Hd(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&uh(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=l1(i),t=ei(i,t),r){case 0:e=zd(null,e,i,t,n);break e;case 1:e=um(null,e,i,t,n);break e;case 11:e=lm(null,e,i,t,n);break e;case 14:e=cm(null,e,i,ei(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),zd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),um(t,e,i,r,n);case 3:e:{if(Xv(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_v(t,e),rc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=to(Error(oe(423)),e),e=dm(t,e,i,n,r);break e}else if(i!==r){r=to(Error(oe(424)),e),e=dm(t,e,i,n,r);break e}else for(Cn=cr(e.stateNode.containerInfo.firstChild),Pn=e,_t=!0,ni=null,n=vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),i===r){e=Oi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return yv(e),t===null&&Ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Pd(i,r)?o=null:s!==null&&Pd(i,s)&&(e.flags|=32),jv(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&Ud(e),null;case 13:return $v(t,e,n);case 4:return xh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),lm(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(nc,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!xn.current){e=Oi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Od(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Od(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=Vn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),cm(t,e,i,r,n);case 15:return Wv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Pl(t,e),e.tag=1,_n(i)?(t=!0,Ql(e)):t=!1,js(e,n),zv(e,i,r),kd(e,i,r,n),Hd(null,e,i,!0,t,n);case 19:return qv(t,e,n);case 22:return Gv(t,e,n)}throw Error(oe(156,e.tag))};function ux(t,e){return F0(t,e)}function a1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new a1(t,e,n,i)}function Ih(t){return t=t.prototype,!(!t||!t.isReactComponent)}function l1(t){if(typeof t=="function")return Ih(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jf)return 11;if(t===Qf)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Il(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ih(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cs:return qr(n.children,r,s,e);case Zf:o=8,r|=8;break;case ld:return t=Bn(12,n,e,r|2),t.elementType=ld,t.lanes=s,t;case cd:return t=Bn(13,n,e,r),t.elementType=cd,t.lanes=s,t;case ud:return t=Bn(19,n,e,r),t.elementType=ud,t.lanes=s,t;case y0:return Nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x0:o=10;break e;case _0:o=9;break e;case Jf:o=11;break e;case Qf:o=14;break e;case Ki:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Nc(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=y0,t.lanes=n,t.stateNode={isHidden:!1},t}function yu(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Su(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function c1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tu(0),this.expirationTimes=tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nh(t,e,n,i,r,s,o,a,l){return t=new c1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vh(s),t}function u1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dx(t){if(!t)return xr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(_n(n))return dv(t,n,e)}return e}function fx(t,e,n,i,r,s,o,a,l){return t=Nh(n,i,!0,t,r,s,o,a,l),t.context=dx(null),n=t.current,i=an(),r=fr(n),s=Di(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,Ea(t,r,i),yn(t,i),t}function Uc(t,e,n,i){var r=e.current,s=an(),o=fr(r);return n=dx(n),e.context===null?e.context=n:e.pendingContext=n,e=Di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,o),t!==null&&(oi(t,r,o,s),Al(t,r,o)),o}function fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uh(t,e){Sm(t,e),(t=t.alternate)&&Sm(t,e)}function d1(){return null}var hx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Oh(t){this._internalRoot=t}Oc.prototype.render=Oh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Uc(t,e,null,null)};Oc.prototype.unmount=Oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){Uc(null,t,null,null)}),e[Ni]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=G0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&X0(t)}};function Fh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Em(){}function f1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=fc(o);s.call(c)}}var o=fx(e,i,t,0,null,!1,!1,"",Em);return t._reactRootContainer=o,t[Ni]=o.current,la(t.nodeType===8?t.parentNode:t),es(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=fc(l);a.call(c)}}var l=Nh(t,0,!1,null,null,!1,!1,"",Em);return t._reactRootContainer=l,t[Ni]=l.current,la(t.nodeType===8?t.parentNode:t),es(function(){Uc(e,l,n,i)}),l}function kc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=fc(o);a.call(l)}}Uc(e,o,t,r)}else o=f1(n,e,t,r,i);return fc(o)}V0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(nh(e,n|1),yn(e,Pt()),!(it&6)&&(no=Pt()+500,wr()))}break;case 13:es(function(){var i=Ui(t,1);if(i!==null){var r=an();oi(i,t,1,r)}}),Uh(t,1)}};ih=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=an();oi(e,t,134217728,n)}Uh(t,134217728)}};W0=function(t){if(t.tag===13){var e=fr(t),n=Ui(t,e);if(n!==null){var i=an();oi(n,t,e,i)}Uh(t,e)}};G0=function(){return ct};j0=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};yd=function(t,e,n){switch(e){case"input":if(hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rc(i);if(!r)throw Error(oe(90));E0(i),hd(i,r)}}}break;case"textarea":w0(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};L0=Ph;D0=es;var h1={usingClientEntryPoint:!1,Events:[wa,Is,Rc,C0,P0,Ph]},Po={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p1={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=U0(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||d1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{wc=Ja.inject(p1),mi=Ja}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h1;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fh(e))throw Error(oe(200));return u1(t,e,null,n)};In.createRoot=function(t,e){if(!Fh(t))throw Error(oe(299));var n=!1,i="",r=hx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nh(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,la(t.nodeType===8?t.parentNode:t),new Oh(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=U0(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return es(t)};In.hydrate=function(t,e,n){if(!Fc(e))throw Error(oe(200));return kc(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!Fh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=hx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fx(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,la(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Oc(e)};In.render=function(t,e,n){if(!Fc(e))throw Error(oe(200));return kc(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(oe(40));return t._reactRootContainer?(es(function(){kc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};In.unstable_batchedUpdates=Ph;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return kc(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(px)}catch(t){console.error(t)}}px(),p0.exports=In;var m1=p0.exports,Mm=m1;od.createRoot=Mm.createRoot,od.hydrateRoot=Mm.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},va.apply(null,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const wm="popstate";function g1(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Qd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:hc(r)}return x1(e,n,null,t)}function Lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function v1(){return Math.random().toString(36).substr(2,8)}function Tm(t,e){return{usr:t.state,key:t.key,idx:e}}function Qd(t,e,n,i){return n===void 0&&(n=null),va({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ho(e):e,{state:n,key:e&&e.key||i||v1()})}function hc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ho(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function x1(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=ir.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(va({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=ir.Pop;let p=u(),f=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:f})}function h(p,f){a=ir.Push;let g=Qd(y.location,p,f);c=u()+1;let v=Tm(g,c),E=y.createHref(g);try{o.pushState(v,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function m(p,f){a=ir.Replace;let g=Qd(y.location,p,f);c=u();let v=Tm(g,c),E=y.createHref(g);o.replaceState(v,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function x(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:hc(p);return g=g.replace(/ $/,"%20"),Lt(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(wm,d),l=p,()=>{r.removeEventListener(wm,d),l=null}},createHref(p){return e(r,p)},createURL:x,encodeLocation(p){let f=x(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:m,go(p){return o.go(p)}};return y}var bm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(bm||(bm={}));function _1(t,e,n){return n===void 0&&(n="/"),y1(t,e,n)}function y1(t,e,n,i){let r=typeof e=="string"?ho(e):e,s=kh(r.pathname||"/",n);if(s==null)return null;let o=gx(t);S1(o);let a=null,l=I1(s);for(let c=0;a==null&&c<o.length;++c)a=P1(o[c],l);return a}function gx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Lt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=pr([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Lt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),gx(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:R1(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of vx(s.path))r(s,o,l)}),e}function vx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=vx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function S1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:C1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const E1=/^:[\w-]+$/,M1=3,w1=2,T1=1,b1=10,A1=-2,Am=t=>t==="*";function R1(t,e){let n=t.split("/"),i=n.length;return n.some(Am)&&(i+=A1),e&&(i+=w1),n.filter(r=>!Am(r)).reduce((r,s)=>r+(E1.test(s)?M1:s===""?T1:b1),i)}function C1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function P1(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=L1({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:pr([s,d.pathname]),pathnameBase:O1(pr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=pr([s,d.pathnameBase]))}return o}function L1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=D1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,d)=>{let{paramName:h,isOptional:m}=u;if(h==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const x=a[d];return m&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function D1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function I1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function kh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function N1(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ho(t):t,s;return n?(n=xx(n),n.startsWith("/")?s=Rm(n.substring(1),"/"):s=Rm(n,e)):s=e,{pathname:s,search:F1(i),hash:k1(r)}}function Rm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Eu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function U1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Bh(t,e){let n=U1(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function zh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ho(t):(r=va({},t),Lt(!r.pathname||!r.pathname.includes("?"),Eu("?","pathname","search",r)),Lt(!r.pathname||!r.pathname.includes("#"),Eu("#","pathname","hash",r)),Lt(!r.search||!r.search.includes("#"),Eu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=N1(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const xx=t=>t.replace(/\/\/+/g,"/"),pr=t=>xx(t.join("/")),O1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),F1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,k1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function B1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const _x=["post","put","patch","delete"];new Set(_x);const z1=["get",..._x];new Set(z1);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xa.apply(null,arguments)}const Hh=X.createContext(null),H1=X.createContext(null),Tr=X.createContext(null),Bc=X.createContext(null),zi=X.createContext({outlet:null,matches:[],isDataRoute:!1}),yx=X.createContext(null);function V1(t,e){let{relative:n}=e===void 0?{}:e;po()||Lt(!1);let{basename:i,navigator:r}=X.useContext(Tr),{hash:s,pathname:o,search:a}=Ex(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:pr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function po(){return X.useContext(Bc)!=null}function mo(){return po()||Lt(!1),X.useContext(Bc).location}function Sx(t){X.useContext(Tr).static||X.useLayoutEffect(t)}function li(){let{isDataRoute:t}=X.useContext(zi);return t?nE():W1()}function W1(){po()||Lt(!1);let t=X.useContext(Hh),{basename:e,future:n,navigator:i}=X.useContext(Tr),{matches:r}=X.useContext(zi),{pathname:s}=mo(),o=JSON.stringify(Bh(r,n.v7_relativeSplatPath)),a=X.useRef(!1);return Sx(()=>{a.current=!0}),X.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let d=zh(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:pr([e,d.pathname])),(u.replace?i.replace:i.push)(d,u.state,u)},[e,i,o,s,t])}function G1(){let{matches:t}=X.useContext(zi),e=t[t.length-1];return e?e.params:{}}function Ex(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=X.useContext(Tr),{matches:r}=X.useContext(zi),{pathname:s}=mo(),o=JSON.stringify(Bh(r,i.v7_relativeSplatPath));return X.useMemo(()=>zh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function j1(t,e){return X1(t,e)}function X1(t,e,n,i){po()||Lt(!1);let{navigator:r}=X.useContext(Tr),{matches:s}=X.useContext(zi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=mo(),u;if(e){var d;let p=typeof e=="string"?ho(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||Lt(!1),u=p}else u=c;let h=u.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let x=_1(t,{pathname:m}),y=Z1(x&&x.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:pr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:pr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?X.createElement(Bc.Provider,{value:{location:xa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ir.Pop}},y):y}function $1(){let t=tE(),e=B1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),n?X.createElement("pre",{style:r},n):null,null)}const q1=X.createElement($1,null);class Y1 extends X.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?X.createElement(zi.Provider,{value:this.props.routeContext},X.createElement(yx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function K1(t){let{routeContext:e,match:n,children:i}=t,r=X.useContext(Hh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),X.createElement(zi.Provider,{value:e},i)}function Z1(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||Lt(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:m}=n,x=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||x){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,h)=>{let m,x=!1,y=null,p=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||q1,l&&(c<0&&h===0?(iE("route-fallback"),x=!0,p=null):c===h&&(x=!0,p=d.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,h+1)),g=()=>{let v;return m?v=y:x?v=p:d.route.Component?v=X.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=u,X.createElement(K1,{match:d,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?X.createElement(Y1,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var Mx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Mx||{}),wx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(wx||{});function J1(t){let e=X.useContext(Hh);return e||Lt(!1),e}function Q1(t){let e=X.useContext(H1);return e||Lt(!1),e}function eE(t){let e=X.useContext(zi);return e||Lt(!1),e}function Tx(t){let e=eE(),n=e.matches[e.matches.length-1];return n.route.id||Lt(!1),n.route.id}function tE(){var t;let e=X.useContext(yx),n=Q1(),i=Tx();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function nE(){let{router:t}=J1(Mx.UseNavigateStable),e=Tx(wx.UseNavigateStable),n=X.useRef(!1);return Sx(()=>{n.current=!0}),X.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,xa({fromRouteId:e},s)))},[t,e])}const Cm={};function iE(t,e,n){Cm[t]||(Cm[t]=!0)}function rE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Pm(t){let{to:e,replace:n,state:i,relative:r}=t;po()||Lt(!1);let{future:s,static:o}=X.useContext(Tr),{matches:a}=X.useContext(zi),{pathname:l}=mo(),c=li(),u=zh(e,Bh(a,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(u);return X.useEffect(()=>c(JSON.parse(d),{replace:n,state:i,relative:r}),[c,d,r,n,i]),null}function Qn(t){Lt(!1)}function sE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ir.Pop,navigator:s,static:o=!1,future:a}=t;po()&&Lt(!1);let l=e.replace(/^\/*/,"/"),c=X.useMemo(()=>({basename:l,navigator:s,static:o,future:xa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=ho(i));let{pathname:u="/",search:d="",hash:h="",state:m=null,key:x="default"}=i,y=X.useMemo(()=>{let p=kh(u,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:x},navigationType:r}},[l,u,d,h,m,x,r]);return y==null?null:X.createElement(Tr.Provider,{value:c},X.createElement(Bc.Provider,{children:n,value:y}))}function oE(t){let{children:e,location:n}=t;return j1(ef(e),n)}new Promise(()=>{});function ef(t,e){e===void 0&&(e=[]);let n=[];return X.Children.forEach(t,(i,r)=>{if(!X.isValidElement(i))return;let s=[...e,r];if(i.type===X.Fragment){n.push.apply(n,ef(i.props.children,s));return}i.type!==Qn&&Lt(!1),!i.props.index||!i.props.children||Lt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=ef(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tf(){return tf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tf.apply(null,arguments)}function aE(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function lE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function cE(t,e){return t.button===0&&(!e||e==="_self")&&!lE(t)}const uE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dE="6";try{window.__reactRouterVersion=dE}catch{}const fE="startTransition",Lm=ry[fE];function hE(t){let{basename:e,children:n,future:i,window:r}=t,s=X.useRef();s.current==null&&(s.current=g1({window:r,v5Compat:!0}));let o=s.current,[a,l]=X.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=X.useCallback(d=>{c&&Lm?Lm(()=>l(d)):l(d)},[l,c]);return X.useLayoutEffect(()=>o.listen(u),[o,u]),X.useEffect(()=>rE(i),[i]),X.createElement(sE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const pE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rr=X.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:d}=e,h=aE(e,uE),{basename:m}=X.useContext(Tr),x,y=!1;if(typeof c=="string"&&mE.test(c)&&(x=c,pE))try{let v=new URL(window.location.href),E=c.startsWith("//")?new URL(v.protocol+c):new URL(c),R=kh(E.pathname,m);E.origin===v.origin&&R!=null?c=R+E.search+E.hash:y=!0}catch{}let p=V1(c,{relative:r}),f=gE(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:d});function g(v){i&&i(v),v.defaultPrevented||f(v)}return X.createElement("a",tf({},h,{href:x||p,onClick:y||s?i:g,ref:n,target:l}))});var Dm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Dm||(Dm={}));var Im;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Im||(Im={}));function gE(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=li(),c=mo(),u=Ex(t,{relative:o});return X.useCallback(d=>{if(cE(d,n)){d.preventDefault();let h=i!==void 0?i:hc(c)===hc(u);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,i,r,n,t,s,o,a])}const bx=X.createContext(null);function vE({children:t}){const[e,n]=X.useState(()=>{try{return JSON.parse(localStorage.getItem("user"))}catch{return null}}),[i,r]=X.useState(()=>localStorage.getItem("token")),s=X.useCallback((a,l)=>{n(a),r(l),localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("token",l)},[]),o=X.useCallback(()=>{n(null),r(null),localStorage.clear()},[]);return _.jsx(bx.Provider,{value:{user:e,token:i,login:s,logout:o},children:t})}const go=()=>X.useContext(bx);class xE extends X.Component{constructor(e){super(e),this.state={hasError:!1,error:null,info:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("[ErrorBoundary]",e,n),this.setState({info:n})}render(){if(!this.state.hasError)return this.props.children;const{error:e,info:n}=this.state;return _.jsx("div",{style:{minHeight:"100vh",background:"#0f0f13",color:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center",padding:"48px 24px",fontFamily:"system-ui, sans-serif"},children:_.jsxs("div",{style:{maxWidth:"680px",width:"100%",background:"#1a1a22",border:"1px solid rgba(239,68,68,0.30)",borderRadius:"12px",padding:"40px 36px"},children:[_.jsx("div",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.14em",color:"#ef4444",textTransform:"uppercase",marginBottom:"14px"},children:"Render Error"}),_.jsx("h2",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px",color:"#f0f0f0"},children:"Something went wrong"}),_.jsx("p",{style:{fontSize:"15px",color:"#9aa0b0",marginBottom:"24px",lineHeight:1.55},children:(e==null?void 0:e.message)||"An unexpected error occurred."}),(n==null?void 0:n.componentStack)&&_.jsxs("details",{style:{marginBottom:"28px"},children:[_.jsx("summary",{style:{cursor:"pointer",fontSize:"12px",fontWeight:600,color:"#5a6070",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:"8px",userSelect:"none"},children:"Component stack"}),_.jsx("pre",{style:{fontSize:"11px",color:"#5a6070",lineHeight:1.6,overflowX:"auto",whiteSpace:"pre-wrap",background:"#23232e",borderRadius:"6px",padding:"12px 14px",marginTop:"8px",border:"1px solid rgba(255,255,255,0.07)"},children:n.componentStack})]}),_.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"12px 28px",fontSize:"15px",fontWeight:700,background:"#f5c518",color:"#0f0f13",border:"none",borderRadius:"6px",cursor:"pointer"},children:"Reload Page"})]})})}}function _E(){const t={page:{background:"var(--bg-primary)",color:"var(--text-primary)",minHeight:"100vh",display:"flex",flexDirection:"column"},nav:{background:"var(--bg-panel)",borderBottom:"1px solid var(--border-subtle)",height:"60px",flexShrink:0},navLogo:{fontSize:"18px",fontWeight:700,letterSpacing:"0.04em"},navAmt:{color:"var(--accent-safety)"},navBtns:{display:"flex",gap:"10px",alignItems:"center"},main:{flex:1,display:"flex",flexDirection:"column"},hero:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"80px var(--pg-pad) 60px",textAlign:"center",background:"linear-gradient(180deg, rgba(245,197,24,0.04) 0%, transparent 60%)",borderBottom:"1px solid var(--border-subtle)"},eyebrow:{fontSize:"12px",fontWeight:700,letterSpacing:"0.18em",color:"var(--accent-safety)",textTransform:"uppercase",marginBottom:"20px"},h1:{fontSize:"clamp(38px,5vw,64px)",fontWeight:800,lineHeight:1.08,marginBottom:"8px"},h1sub:{fontSize:"clamp(38px,5vw,64px)",fontWeight:800,lineHeight:1.08,color:"var(--accent-safety)",marginBottom:"24px"},desc:{fontSize:"18px",color:"var(--text-secondary)",maxWidth:"600px",lineHeight:1.65,marginBottom:"40px"},ctaRow:{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"},howTitle:{fontSize:"13px",fontWeight:700,letterSpacing:"0.16em",color:"var(--text-muted)",textTransform:"uppercase",textAlign:"center",marginBottom:"40px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px"},fCard:{background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"28px 24px"},fIcon:{width:"40px",height:"40px",marginBottom:"16px",color:"var(--accent-safety)"},fTitle:{fontSize:"17px",fontWeight:700,marginBottom:"10px"},fBody:{fontSize:"14px",color:"var(--text-secondary)",lineHeight:1.6},footer:{borderTop:"1px solid var(--border-subtle)",flexShrink:0},footInner:{maxWidth:"var(--pg-max)",margin:"0 auto",padding:"20px var(--pg-pad)",color:"var(--text-muted)",fontSize:"13px",textAlign:"center"}},e=[{title:"Enter the Scene",body:"Move through a first-person 3D warehouse using WASD and mouse-look. The environment is drawn from a real incident — every object placed deliberately.",icon:_.jsxs("svg",{style:t.fIcon,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[_.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),_.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})},{title:"Investigate Evidence",body:"Click objects in the scene to examine them. Three real clues link back to the incident — four decoys test whether you can read the scene, not just click everything.",icon:_.jsxs("svg",{style:t.fIcon,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[_.jsx("circle",{cx:"11",cy:"11",r:"8"}),_.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})},{title:"Trace the Root Cause",body:'Answer five sequential "Why?" questions to go beyond surface symptoms. The chain ends at the systemic cause — not the worker, not the puddle.',icon:_.jsx("svg",{style:t.fIcon,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:_.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}];return _.jsxs("div",{style:t.page,children:[_.jsx("nav",{style:t.nav,children:_.jsxs("div",{className:"pg-nav-inner",children:[_.jsxs("div",{style:t.navLogo,children:["Safety",_.jsx("span",{style:t.navAmt,children:" Detective"})]}),_.jsxs("div",{style:t.navBtns,children:[_.jsx(rr,{to:"/login",className:"btn-secondary",style:{padding:"8px 18px",fontSize:"14px"},children:"Log In"}),_.jsx(rr,{to:"/signup",className:"btn-primary",style:{padding:"8px 18px",fontSize:"14px"},children:"Sign Up"})]})]})}),_.jsxs("main",{style:t.main,children:[_.jsxs("section",{style:t.hero,children:[_.jsx("div",{style:t.eyebrow,children:"Safety Training Simulation"}),_.jsx("h1",{style:t.h1,children:"Investigate."}),_.jsx("div",{style:t.h1sub,children:"Find the root cause."}),_.jsx("p",{style:t.desc,children:"Walk a first-person 3D warehouse, uncover evidence from a real workplace slip incident, and use the 5 Whys to trace what actually caused it — not just what's on the surface."}),_.jsxs("div",{style:t.ctaRow,children:[_.jsx(rr,{to:"/signup",className:"btn-primary",style:{padding:"14px 36px",fontSize:"16px"},children:"Get Started"}),_.jsx(rr,{to:"/login",className:"btn-secondary",style:{padding:"13px 28px",fontSize:"15px"},children:"Log In"})]})]}),_.jsxs("section",{className:"pg-body",children:[_.jsx("div",{style:t.howTitle,children:"How it works"}),_.jsx("div",{style:t.grid,children:e.map(({title:n,body:i,icon:r})=>_.jsxs("div",{style:t.fCard,children:[r,_.jsx("h3",{style:t.fTitle,children:n}),_.jsx("p",{style:t.fBody,children:i})]},n))})]})]}),_.jsx("footer",{style:t.footer,children:_.jsx("div",{style:t.footInner,children:"© 2026 Safety Detective"})})]})}function Ax(t,e){return function(){return t.apply(e,arguments)}}const{toString:yE}=Object.prototype,{getPrototypeOf:io}=Object,{iterator:ba,toStringTag:Rx}=Symbol,pc=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),_a=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),pc(n,e))return!0;n=io(n)}return!1},SE=(t,e)=>t!=null&&_a(t,e)?t[e]:void 0,Vh=(t=>e=>{const n=yE.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),jn=t=>(t=t.toLowerCase(),e=>Vh(e)===t),zc=t=>e=>typeof e===t,{isArray:ts}=Array,ns=zc("undefined");function vo(t){return t!==null&&!ns(t)&&t.constructor!==null&&!ns(t.constructor)&&Sn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Cx=jn("ArrayBuffer");function EE(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Cx(t.buffer),e}const ME=zc("string"),Sn=zc("function"),Px=zc("number"),xo=t=>t!==null&&typeof t=="object",wE=t=>t===!0||t===!1,Nl=t=>{if(!xo(t))return!1;const e=io(t);return(e===null||e===Object.prototype||io(e)===null)&&!_a(t,Rx)&&!_a(t,ba)},TE=t=>{if(!xo(t)||vo(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},bE=jn("Date"),AE=jn("File"),RE=t=>!!(t&&typeof t.uri<"u"),CE=t=>t&&typeof t.getParts<"u",PE=jn("Blob"),LE=jn("FileList"),DE=jn("Set"),IE=t=>xo(t)&&Sn(t.pipe);function NE(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Nm=NE(),Um=typeof Nm.FormData<"u"?Nm.FormData:void 0,UE=t=>{if(!t)return!1;if(Um&&t instanceof Um)return!0;const e=io(t);if(!e||e===Object.prototype||!Sn(t.append))return!1;const n=Vh(t);return n==="formdata"||n==="object"&&Sn(t.toString)&&t.toString()==="[object FormData]"},OE=jn("URLSearchParams"),[FE,kE,BE,zE]=["ReadableStream","Request","Response","Headers"].map(jn),HE=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Aa(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),ts(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(vo(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function Lx(t,e){if(vo(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Dx=t=>!ns(t)&&t!==Gr;function nf(...t){const{caseless:e,skipUndefined:n}=Dx(this)&&this||{},i={},r=(s,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&Lx(i,o)||o,l=pc(i,a)?i[a]:void 0;Nl(l)&&Nl(s)?i[a]=nf(l,s):Nl(s)?i[a]=nf({},s):ts(s)?i[a]=s.slice():(!n||!ns(s))&&(i[a]=s)};for(let s=0,o=t.length;s<o;s++){const a=t[s];if(!a||vo(a)||(Aa(a,r),typeof a!="object"||ts(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];QE.call(a,u)&&r(a[u],u)}}return i}const VE=(t,e,n,{allOwnKeys:i}={})=>(Aa(e,(r,s)=>{n&&Sn(r)?Object.defineProperty(t,s,{__proto__:null,value:Ax(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),WE=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),GE=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},jE=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&io(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},XE=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},$E=t=>{if(!t)return null;if(ts(t))return t;let e=t.length;if(!Px(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},qE=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&io(Uint8Array)),YE=(t,e)=>{const i=(t&&t[ba]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},KE=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},ZE=jn("HTMLFormElement"),JE=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:QE}=Object.prototype,eM=jn("RegExp"),Ix=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Aa(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},tM=t=>{Ix(t,(e,n)=>{if(Sn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(Sn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},nM=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return ts(t)?i(t):i(String(t).split(e)),n},iM=()=>{},rM=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function sM(t){return!!(t&&Sn(t.append)&&t[Rx]==="FormData"&&t[ba])}const oM=t=>{const e=new WeakSet,n=i=>{if(xo(i)){if(e.has(i))return;if(vo(i))return i;if(!("toJSON"in i)){e.add(i);let r;if(DE(i)){r=[];for(const s of i){const o=n(s);!ns(o)&&r.push(o)}}else r=ts(i)?[]:{},Aa(i,(s,o)=>{const a=n(s);!ns(a)&&(r[o]=a)});return e.delete(i),r}}return i};return n(t)},aM=jn("AsyncFunction"),lM=t=>t&&(xo(t)||Sn(t))&&Sn(t.then)&&Sn(t.catch),Nx=((t,e)=>t?setImmediate:e?((n,i)=>(Gr.addEventListener("message",({source:r,data:s})=>{r===Gr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Gr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Sn(Gr.postMessage)),cM=typeof queueMicrotask<"u"?queueMicrotask.bind(Gr):typeof process<"u"&&process.nextTick||Nx,Ux=t=>t!=null&&Sn(t[ba]),uM=t=>t!=null&&_a(t,ba)&&Ux(t),N={isArray:ts,isArrayBuffer:Cx,isBuffer:vo,isFormData:UE,isArrayBufferView:EE,isString:ME,isNumber:Px,isBoolean:wE,isObject:xo,isPlainObject:Nl,isEmptyObject:TE,isReadableStream:FE,isRequest:kE,isResponse:BE,isHeaders:zE,isUndefined:ns,isDate:bE,isFile:AE,isReactNativeBlob:RE,isReactNative:CE,isBlob:PE,isRegExp:eM,isFunction:Sn,isStream:IE,isURLSearchParams:OE,isTypedArray:qE,isFileList:LE,forEach:Aa,merge:nf,extend:VE,trim:HE,stripBOM:WE,inherits:GE,toFlatObject:jE,kindOf:Vh,kindOfTest:jn,endsWith:XE,toArray:$E,forEachEntry:YE,matchAll:KE,isHTMLForm:ZE,hasOwnProperty:pc,hasOwnProp:pc,hasOwnInPrototypeChain:_a,getSafeProp:SE,reduceDescriptors:Ix,freezeMethods:tM,toObjectSet:nM,toCamelCase:JE,noop:iM,toFiniteNumber:rM,findKey:Lx,global:Gr,isContextDefined:Dx,isSpecCompliantForm:sM,toJSONObject:oM,isAsyncFn:aM,isThenable:lM,setImmediate:Nx,asap:cM,isIterable:Ux,isSafeIterable:uM},dM=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fM=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim();const a=N.hasOwnProp(e,n);!n||a&&N.hasOwnProp(dM,n)||(n==="set-cookie"?a?e[n].push(i):e[n]=[i]:e[n]=a?e[n]+", "+i:i)}),e};function hM(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const pM=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),mM=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Wh(t,e){return N.isArray(t)?t.map(n=>Wh(n,e)):hM(String(t).replace(e,""))}const gM=t=>Wh(t,pM),vM=t=>Wh(t,mM);function Ox(t){const e=Object.create(null);return N.forEach(t.toJSON(),(n,i)=>{e[i]=vM(n)}),e}const Om=Symbol("internals");function Lo(t){return t&&String(t).trim().toLowerCase()}function Ul(t){return t===!1||t==null?t:N.isArray(t)?t.map(Ul):gM(String(t))}function xM(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const _M=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Mu(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function yM(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let i=1;i<e;i++){const r=t.charCodeAt(i);if(r===34||r===92&&(i+=1,i>=e))return t;n+=t[i]}return n}function SM(t){const e=Object.create(null),n=String(t);let i=0,r=!1,s=!1;function o(a){const l=Mu(n.slice(i,a)),c=l.indexOf("=");if(c<1)return;const u=Mu(l.slice(0,c));if(!_M.test(u))return;const d=u.toLowerCase();if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=Mu(l.slice(c+1));e[d]=yM(h)}for(let a=0;a<n.length;a++){const l=n.charCodeAt(a);r?s?s=!1:l===92?s=!0:l===34&&(r=!1):l===34?r=!0:(l===44||l===59)&&(o(a),i=a+1)}return o(n.length),e}const EM=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function wu(t,e,n,i,r){if(N.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!N.isString(e)){if(N.isString(i))return e.indexOf(i)!==-1;if(N.isRegExp(i))return i.test(e)}}function MM(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function wM(t,e){const n=N.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let en=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=Lo(l);if(!u)return;const d=N.findKey(r,u);(!d||r[d]===void 0||c===!0||c===void 0&&r[d]!==!1)&&(r[d||l]=Ul(a))}const o=(a,l)=>N.forEach(a,(c,u)=>s(c,u,l));if(N.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(N.isString(e)&&(e=e.trim())&&!EM(e))o(fM(e),n);else if(N.isObject(e)&&N.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!N.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],N.hasOwnProp(a,c)?(l=a[c],a[c]=N.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=Lo(e),e){const i=N.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return xM(r);if(N.isFunction(n))return n.call(this,r,i);if(N.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Lo(e),e){const i=N.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||wu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=Lo(o),o){const a=N.findKey(i,o);a&&(!n||wu(i,i[a],a,n))&&(delete i[a],r=!0)}}return N.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||wu(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return N.forEach(this,(r,s)=>{const o=N.findKey(i,s);if(o){n[o]=Ul(r),delete n[s];return}const a=e?MM(s):String(s).trim();a!==s&&delete n[s],n[a]=Ul(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return N.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&N.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return N.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return SM(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Om]=this[Om]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Lo(o);i[a]||(wM(r,o),i[a]=!0)}return N.isArray(e)?e.forEach(s):s(e),this}};en.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(en.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});N.freezeMethods(en);const mc="[REDACTED ****]";function TM(t){if(N.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(N.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function bM(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||N.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof en&&(s=s.toJSON()),i.push(s);let o;if(N.isArray(s))o=[],s.forEach((a,l)=>{const c=r(a);N.isUndefined(c)||(o[l]=c)});else{if(!N.isPlainObject(s)&&TM(s))return i.pop(),s;o=Object.create(null);for(const[a,l]of Object.entries(s)){const c=n.has(a.toLowerCase())?mc:r(l);N.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return r(t)}function Fm(t){try{return String(t)}catch{return""}}function AM(t){return t.errors.map(n=>{try{return n&&n.message?Fm(n.message):Fm(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}let ge=class Fx extends Error{static from(e,n,i,r,s,o){let a=e.message;!a&&N.isArray(e.errors)&&e.errors.length&&(a=AM(e));const l=new Fx(a,n||e.code,i,r,s);return Object.defineProperty(l,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),l.name=e.name,e.status!=null&&l.status==null&&(l.status=e.status),o&&Object.assign(l,o),l}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&N.hasOwnProp(e,"redact")?e.redact:void 0,i=N.isArray(n)&&n.length>0?bM(e,n):N.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};ge.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ge.ERR_BAD_OPTION="ERR_BAD_OPTION";ge.ECONNABORTED="ECONNABORTED";ge.ETIMEDOUT="ETIMEDOUT";ge.ECONNREFUSED="ECONNREFUSED";ge.ERR_NETWORK="ERR_NETWORK";ge.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ge.ERR_DEPRECATED="ERR_DEPRECATED";ge.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ge.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ge.ERR_CANCELED="ERR_CANCELED";ge.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ge.ERR_INVALID_URL="ERR_INVALID_URL";ge.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const RM=null,kx=100;function rf(t){return N.isPlainObject(t)||N.isArray(t)}function Bx(t){return N.endsWith(t,"[]")?t.slice(0,-2):t}function Tu(t,e,n){return t?t.concat(e).map(function(r,s){return r=Bx(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function CM(t){return N.isArray(t)&&!t.some(rf)}const PM=N.toFlatObject(N,{},null,function(e){return/^is[A-Z]/.test(e)});function Hc(t,e,n){if(!N.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,v){return!N.isUndefined(v[g])});const i=n.metaTokens,r=n.visitor||x,s=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?kx:n.maxDepth,c=a&&N.isSpecCompliantForm(e),u=[];if(!N.isFunction(r))throw new TypeError("visitor must be a function");function d(f){if(f===null)return"";if(N.isDate(f))return f.toISOString();if(N.isBoolean(f))return f.toString();if(!c&&N.isBlob(f))throw new ge("Blob is not supported. Use a Buffer instead.");if(N.isArrayBuffer(f)||N.isTypedArray(f)){if(c&&typeof a=="function")return new a([f]);throw new ge("Blob is not supported. Use a Buffer instead.",ge.ERR_NOT_SUPPORT)}return f}function h(f){if(f>l)throw new ge("Object is too deeply nested ("+f+" levels). Max depth: "+l,ge.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(f,g){if(l===1/0)return JSON.stringify(f);const v=[];return JSON.stringify(f,function(R,b){if(!N.isObject(b))return b;for(;v.length&&v[v.length-1]!==this;)v.pop();return v.push(b),h(g+v.length-1),b})}function x(f,g,v){let E=f;if(N.isReactNative(e)&&N.isReactNativeBlob(f))return e.append(Tu(v,g,s),d(f)),!1;if(f&&!v&&typeof f=="object"){if(N.endsWith(g,"{}"))g=i?g:g.slice(0,-2),f=m(f,1);else if(N.isArray(f)&&CM(f)||(N.isFileList(f)||N.endsWith(g,"[]"))&&(E=N.toArray(f)))return g=Bx(g),E.forEach(function(b,A){!(N.isUndefined(b)||b===null)&&e.append(o===!0?Tu([g],A,s):o===null?g:g+"[]",d(b))}),!1}return rf(f)?!0:(e.append(Tu(v,g,s),d(f)),!1)}const y=Object.assign(PM,{defaultVisitor:x,convertValue:d,isVisitable:rf});function p(f,g,v=0){if(!N.isUndefined(f)){if(h(v),u.indexOf(f)!==-1)throw new Error("Circular reference detected in "+g.join("."));u.push(f),N.forEach(f,function(R,b){(!(N.isUndefined(R)||R===null)&&r.call(e,R,N.isString(b)?b.trim():b,g,y))===!0&&p(R,g?g.concat(b):[b],v+1)}),u.pop()}}if(!N.isObject(t))throw new TypeError("data must be an object");return p(t),e}function km(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Gh(t,e){this._pairs=[],t&&Hc(t,this,e)}const zx=Gh.prototype;zx.append=function(e,n){this._pairs.push([e,n])};zx.toString=function(e){const n=e?i=>e.call(this,i,km):km;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function LM(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Hx(t,e,n){if(!e)return t;t=t||"";const i=N.isFunction(n)?{serialize:n}:n,r=N.getSafeProp(i,"encode")||LM,s=N.getSafeProp(i,"serialize");let o;if(s?o=s(e,i):o=N.isURLSearchParams(e)?e.toString():new Gh(e,i).toString(r),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Bm{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){N.forEach(this.handlers,function(i){i!==null&&e(i)})}}const jh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},DM=typeof URLSearchParams<"u"?URLSearchParams:Gh,IM=typeof FormData<"u"?FormData:null,NM=typeof Blob<"u"?Blob:null,UM={isBrowser:!0,classes:{URLSearchParams:DM,FormData:IM,Blob:NM},protocols:["http","https","file","blob","url","data"]},Xh=typeof window<"u"&&typeof document<"u",sf=typeof navigator=="object"&&navigator||void 0,OM=Xh&&(!sf||["ReactNative","NativeScript","NS"].indexOf(sf.product)<0),FM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kM=Xh&&window.location.href||"http://localhost",BM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xh,hasStandardBrowserEnv:OM,hasStandardBrowserWebWorkerEnv:FM,navigator:sf,origin:kM},Symbol.toStringTag,{value:"Module"})),jt={...BM,...UM};function zM(t,e){return Hc(t,new jt.classes.URLSearchParams,{visitor:function(n,i,r,s){return jt.isNode&&N.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const zm=kx;function Vx(t){if(t>zm)throw new ge("FormData field is too deeply nested ("+t+" levels). Max depth: "+zm,ge.ERR_FORM_DATA_DEPTH_EXCEEDED)}function HM(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=n.exec(t))!==null;)Vx(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function VM(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Wx(t){function e(n,i,r,s){Vx(s);let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&N.isArray(r)?r.length:o,l?(N.hasOwnProp(r,o)?r[o]=N.isArray(r[o])?r[o].concat(i):[r[o],i]:r[o]=i,!a):((!N.hasOwnProp(r,o)||!N.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&N.isArray(r[o])&&(r[o]=VM(r[o])),!a)}if(N.isFormData(t)&&N.isFunction(t.entries)){const n={};return N.forEachEntry(t,(i,r)=>{e(HM(i),r,n,0)}),n}return null}const us=(t,e)=>t!=null&&N.hasOwnProp(t,e)?t[e]:void 0;function WM(t,e,n){if(N.isString(t))try{return(e||JSON.parse)(t),N.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Ra={transitional:jh,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=N.isObject(e);if(s&&N.isHTMLForm(e)&&(e=new FormData(e)),N.isFormData(e))return r?JSON.stringify(Wx(e)):e;if(N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e)||N.isReadableStream(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){const l=us(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return zM(e,l).toString();if((a=N.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=us(this,"env"),u=c&&c.FormData;return Hc(a?{"files[]":e}:e,u&&new u,l)}}return s||r?(n.setContentType("application/json",!1),WM(e)):e}],transformResponse:[function(e){const n=us(this,"transitional")||Ra.transitional,i=n&&n.forcedJSONParsing,r=us(this,"responseType"),s=r==="json";if(N.isResponse(e)||N.isReadableStream(e))return e;if(e&&N.isString(e)&&(i&&!r||s)){const a=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,us(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?ge.from(l,ge.ERR_BAD_RESPONSE,this,null,us(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch","query"],t=>{Ra.headers[t]={}});function bu(t,e){const n=this||Ra,i=e||n,r=en.from(i.headers);let s=i.data;return N.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Gx(t){return!!(t&&t.__CANCEL__)}let Ca=class extends ge{constructor(e,n,i){super(e??"canceled",ge.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function jx(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new ge("Request failed with status code "+n.status,n.status>=400&&n.status<500?ge.ERR_BAD_REQUEST:ge.ERR_BAD_RESPONSE,n.config,n.request,n))}function GM(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function jM(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let d=s,h=0;for(;d!==r;)h+=n[d++],d=d%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const m=u&&c-u;return m?Math.round(h*1e3/m):void 0}}function XM(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const u=Date.now(),d=u-n;d>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-d)))},()=>r&&o(r)]}const gc=(t,e,n=3)=>{let i=0;const r=jM(50,250);return XM(s=>{if(!s||typeof s.loaded!="number")return;const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=Math.max(0,a!=null?Math.min(o,a):o),c=Math.max(0,l-i),u=r(c);i=Math.max(i,l);const d={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},Hm=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Vm=(t,e=N.asap)=>(...n)=>e(()=>t(...n)),$M=jt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,jt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(jt.origin),jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent)):()=>!0,qM=jt.hasStandardBrowserEnv?{write(t,e,n,i,r,s,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];N.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),N.isString(i)&&a.push(`path=${i}`),N.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),N.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),r=i.indexOf("=");if(r!==-1&&i.slice(0,r)===t)try{return decodeURIComponent(i.slice(r+1))}catch{return i.slice(r+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function YM(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function KM(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const ZM=/^https?:(?!\/\/)/i,JM=/[\t\n\r]/g;function QM(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function ew(t){return QM(t).replace(JM,"")}function tw(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,i="")=>`${n}${i}${mc}`)}function nw(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${mc}@`),n=e.indexOf("#"),r=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${mc}`);return n===-1?r:`${r}#${tw(e.slice(n+1))}`}function Wm(t,e){if(typeof t=="string"){const n=ew(t);if(ZM.test(n))throw new ge(`Invalid URL ${JSON.stringify(nw(n))}: missing "//" after protocol`,ge.ERR_INVALID_URL,e)}}function Xx(t,e,n,i){Wm(e,i);let r=!YM(e);return t&&(r||n===!1)?(Wm(t,i),KM(t,e)):e}const Gm=t=>t instanceof en?{...t}:t,iw=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>Object.getOwnPropertyDescriptor(t,e).enumerable)):Object.keys(t);function is(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,d,h,m){return N.isPlainObject(u)&&N.isPlainObject(d)?N.merge.call({caseless:m},u,d):N.isPlainObject(d)?N.merge({},d):N.isArray(d)?d.slice():d}function r(u,d,h,m){if(N.isUndefined(d)){if(!N.isUndefined(u))return i(void 0,u,h,m)}else return i(u,d,h,m)}function s(u,d){if(!N.isUndefined(d))return i(void 0,d)}function o(u,d){if(N.isUndefined(d)){if(!N.isUndefined(u))return i(void 0,u)}else return i(void 0,d)}function a(u){const d=N.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!N.isUndefined(d))if(N.isPlainObject(d)){if(N.hasOwnProp(d,u))return d[u]}else return;const h=N.hasOwnProp(t,"transitional")?t.transitional:void 0;if(N.isPlainObject(h)&&N.hasOwnProp(h,u))return h[u]}function l(u,d,h){if(N.hasOwnProp(e,h))return i(u,d);if(N.hasOwnProp(t,h))return i(void 0,u)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,d,h)=>r(Gm(u),Gm(d),h,!0)};return N.forEach(iw({...t,...e}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=N.hasOwnProp(c,d)?c[d]:r,m=N.hasOwnProp(t,d)?t[d]:void 0,x=N.hasOwnProp(e,d)?e[d]:void 0,y=h(m,x,d);N.isUndefined(y)&&h!==l||(n[d]=y)}),N.hasOwnProp(e,"validateStatus")&&N.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(N.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const rw=["content-type","content-length"];function sw(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{rw.includes(i.toLowerCase())&&t.set(i,r)})}const ow=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function $x(t){const e=is({},t),n=h=>N.hasOwnProp(e,h)?e[h]:void 0,i=n("data");let r=n("withXSRFToken");const s=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),d=n("url");if(e.headers=a=en.from(a),e.url=Hx(Xx(c,d,u,e),n("params"),n("paramsSerializer")),l){const h=N.getSafeProp(l,"username")||"",m=N.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(h+":"+(m?ow(m):"")))}catch(x){throw ge.from(x,ge.ERR_BAD_OPTION_VALUE,t)}}if(N.isFormData(i)&&(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv||N.isReactNative(i)?a.setContentType(void 0):N.isFunction(i.getHeaders)&&sw(a,i.getHeaders(),n("formDataHeaderPolicy"))),jt.hasStandardBrowserEnv&&(N.isFunction(r)&&(r=r(e)),r===!0||r==null&&$M(e.url))){const m=s&&o&&qM.read(o);m&&a.set(s,m)}return e}const aw=typeof XMLHttpRequest<"u",lw=aw&&function(t){return new Promise(function(n,i){const r=$x(t);let s=r.data;const o=en.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,d,h,m,x;function y(){m&&m(),x&&x(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function f(){if(!p)return;const v=en.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),R={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:v,config:t,request:p};jx(function(A){n(A),y()},function(A){i(A),y()},R),p=null}"onloadend"in p?p.onloadend=f:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(f)},p.onabort=function(){p&&(i(new ge("Request aborted",ge.ECONNABORTED,t,p)),y(),p=null)},p.onerror=function(E){const R=E&&E.message?E.message:"Network Error",b=new ge(R,ge.ERR_NETWORK,t,p);b.event=E||null,i(b),y(),p=null},p.ontimeout=function(){let E=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const R=r.transitional||jh;r.timeoutErrorMessage&&(E=r.timeoutErrorMessage),i(new ge(E,R.clarifyTimeoutError?ge.ETIMEDOUT:ge.ECONNABORTED,t,p)),y(),p=null},s===void 0&&o.setContentType(null),"setRequestHeader"in p&&N.forEach(Ox(o),function(E,R){p.setRequestHeader(R,E)}),N.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),a&&a!=="json"&&(p.responseType=r.responseType),c&&([h,x]=gc(c,!0),p.addEventListener("progress",h)),l&&p.upload&&([d,m]=gc(l),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(u=v=>{p&&(i(!v||v.type?new Ca(null,t,p):v),p.abort(),y(),p=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const g=GM(r.url);if(g&&!jt.protocols.includes(g)){i(new ge("Unsupported protocol "+g+":",ge.ERR_BAD_REQUEST,t)),y();return}p.send(s||null)})},cw=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const r=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof ge?c:new Ca(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{s=null,r(new ge(`timeout of ${e}ms exceeded`,ge.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>{if(!i){if(l.aborted){r.call(l);return}l.addEventListener("abort",r,{once:!0})}});const{signal:a}=n;return a.unsubscribe=()=>N.asap(o),a},uw=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},dw=async function*(t,e){for await(const n of fw(t))yield*uw(n,e)},fw=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},jm=(t,e,n,i)=>{const r=dw(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let d=u.byteLength;if(n){let h=s+=d;n(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},Xm=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,qx=(t,e,n)=>e+2<n&&Xm(t.charCodeAt(e+1))&&Xm(t.charCodeAt(e+2)),$m=t=>t<=57?t-48:(t&223)-55,hw=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,pw=t=>t===9||t===10||t===12||t===13||t===32,mw=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},gw=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},vw=t=>{const e=t.length;let n=0,i=0,r=!1;for(let s=0;s<e;s++){let o=t.charCodeAt(s);if(o===37&&qx(t,s,e)&&(o=$m(t.charCodeAt(s+1))*16+$m(t.charCodeAt(s+2)),s+=2),!pw(o)){if(o===61){i++;continue}if(!hw(o)||i>0){r=!0;continue}n++}}return r||i>2||i>0&&(n+i)%4!==0||n%4===1?gw(t):mw(n)},xw=(t,e)=>{if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const n=t.indexOf(",");if(n<0)return 0;const i=t.slice(5,n),r=t.slice(n+1);if(/;base64/i.test(i))return e(r);let o=0;for(let a=0,l=r.length;a<l;a++){const c=r.charCodeAt(a);if(c===37&&qx(r,a,l))o+=1,a+=2;else if(c<128)o+=1;else if(c<2048)o+=2;else if(c>=55296&&c<=56319&&a+1<l){const u=r.charCodeAt(a+1);u>=56320&&u<=57343?(o+=4,a++):o+=3}else o+=3}return o};function _w(t){const e=typeof t=="string"?t.indexOf("#"):-1;return xw(e===-1?t:t.slice(0,e),vw)}const $h="1.19.0",qm=64*1024,{isFunction:Qa}=N,yw=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Ym=t=>{if(!N.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Km=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Sw=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},Ew=t=>{const e=N.global!==void 0&&N.global!==null?N.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=N.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:r,Request:s,Response:o}=t,a=r?Qa(r):typeof fetch=="function",l=Qa(s),c=Qa(o);if(!a)return!1;const u=a&&Qa(n),d=a&&(typeof i=="function"?(f=>g=>f.encode(g))(new i):async f=>new Uint8Array(await new s(f).arrayBuffer())),h=l&&u&&Km(()=>{let f=!1;const g=new s(jt.origin,{body:new n,method:"POST",get duplex(){return f=!0,"half"}}),v=g.headers.has("Content-Type");return g.body!=null&&g.body.cancel(),f&&!v}),m=c&&u&&Km(()=>N.isReadableStream(new o("").body)),x={stream:m&&(f=>f.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!x[f]&&(x[f]=(g,v)=>{let E=g&&g[f];if(E)return E.call(g);throw new ge(`Response type '${f}' is not supported`,ge.ERR_NOT_SUPPORT,v)})});const y=async f=>{if(f==null)return 0;if(N.isBlob(f))return f.size;if(N.isSpecCompliantForm(f))return(await new s(jt.origin,{method:"POST",body:f}).arrayBuffer()).byteLength;if(N.isArrayBufferView(f)||N.isArrayBuffer(f))return f.byteLength;if(N.isURLSearchParams(f)&&(f=f+""),N.isString(f))return(await d(f)).byteLength},p=async(f,g)=>{const v=N.toFiniteNumber(f.getContentLength());return v??y(g)};return async f=>{let{url:g,method:v,data:E,signal:R,cancelToken:b,timeout:A,onDownloadProgress:L,onUploadProgress:w,responseType:S,headers:C,withCredentials:V="same-origin",fetchOptions:F,maxContentLength:H,maxBodyLength:q}=$x(f);const z=N.isNumber(H)&&H>-1,$=N.isNumber(q)&&q>-1,I=ne=>N.hasOwnProp(f,ne)?f[ne]:void 0;let K=r||fetch;S=S?(S+"").toLowerCase():"text";let J=cw([R,b&&b.toAbortSignal()],A),te=null;const Me=J&&J.unsubscribe&&(()=>{J.unsubscribe()});let Ve,Y=null;const se=()=>new ge("Request body larger than maxBodyLength limit",ge.ERR_BAD_REQUEST,f,te);try{let ne;const ue=I("auth");if(ue){const re=N.getSafeProp(ue,"username")||"",Ze=N.getSafeProp(ue,"password")||"";ne={username:re,password:Ze}}if(Sw(g)){const re=new URL(g,jt.origin);if(!ne&&(re.username||re.password)){const Ze=Ym(re.username),Ce=Ym(re.password);ne={username:Ze,password:Ce}}(re.username||re.password)&&(re.username="",re.password="",g=re.href)}if(ne&&(C.delete("authorization"),C.set("Authorization","Basic "+btoa(yw((ne.username||"")+":"+(ne.password||""))))),z&&typeof g=="string"&&g.startsWith("data:")&&_w(g)>H)throw new ge("maxContentLength size of "+H+" exceeded",ge.ERR_BAD_RESPONSE,f,te);if($&&v!=="get"&&v!=="head"){const re=await y(E);if(typeof re=="number"&&isFinite(re)&&(Ve=re,re>q))throw se()}const De=$&&(N.isReadableStream(E)||N.isStream(E)),He=(re,Ze,Ce)=>jm(re,qm,Pe=>{if($&&Pe>q)throw Y=se();Ze&&Ze(Pe)},Ce);if(h&&v!=="get"&&v!=="head"&&(w||De)){if(Ve=Ve??await p(C,E),Ve!==0||De){let re=new s(g,{method:"POST",body:E,duplex:"half"}),Ze;if(N.isFormData(E)&&(Ze=re.headers.get("content-type"))&&C.setContentType(Ze),re.body){const[Ce,Pe]=w&&Hm(Ve,gc(Vm(w)))||[];E=He(re.body,Ce,Pe)}}}else if(De&&!l&&u&&v!=="get"&&v!=="head")E=He(E);else if(De&&l&&!h&&v!=="get"&&v!=="head")throw new ge("Stream request bodies are not supported by the current fetch implementation",ge.ERR_NOT_SUPPORT,f,te);N.isString(V)||(V=V?"include":"omit");const Ge=l&&"credentials"in s.prototype;if(N.isFormData(E)){const re=C.getContentType();re&&/^multipart\/form-data/i.test(re)&&!/boundary=/i.test(re)&&C.delete("content-type")}C.set("User-Agent","axios/"+$h,!1);const ut={...F,signal:J,method:v.toUpperCase(),headers:Ox(C.normalize()),body:E,duplex:"half",credentials:Ge?V:void 0};te=l&&new s(g,ut);let D=await(l?K(te,F):K(g,ut));const pt=en.from(D.headers);if(z){const re=N.toFiniteNumber(pt.getContentLength());if(re!=null&&re>H)throw new ge("maxContentLength size of "+H+" exceeded",ge.ERR_BAD_RESPONSE,f,te)}const qe=m&&(S==="stream"||S==="response");if(m&&D.body&&(L||z||qe&&Me)){const re={};["status","statusText","headers"].forEach(W=>{re[W]=D[W]});const Ze=N.toFiniteNumber(pt.getContentLength()),[Ce,Pe]=L&&Hm(Ze,gc(Vm(L),!0))||[];let P=0;const M=W=>{if(z&&(P=W,P>H))throw new ge("maxContentLength size of "+H+" exceeded",ge.ERR_BAD_RESPONSE,f,te);Ce&&Ce(W)};D=new o(jm(D.body,qm,M,()=>{Pe&&Pe(),Me&&Me()}),re)}S=S||"text";let je=await x[N.findKey(x,S)||"text"](D,f);if(z&&!m&&!qe){let re;if(je!=null&&(typeof je.byteLength=="number"?re=je.byteLength:typeof je.size=="number"?re=je.size:typeof je=="string"&&(re=typeof i=="function"?new i().encode(je).byteLength:je.length)),typeof re=="number"&&re>H)throw new ge("maxContentLength size of "+H+" exceeded",ge.ERR_BAD_RESPONSE,f,te)}return!qe&&Me&&Me(),await new Promise((re,Ze)=>{jx(re,Ze,{data:je,headers:en.from(D.headers),status:D.status,statusText:D.statusText,config:f,request:te})})}catch(ne){if(Me&&Me(),J&&J.aborted&&J.reason instanceof ge){const ue=J.reason;throw ue.config=f,te&&(ue.request=te),ne!==ue&&Object.defineProperty(ue,"cause",{__proto__:null,value:ne,writable:!0,enumerable:!1,configurable:!0}),ue}if(Y)throw te&&!Y.request&&(Y.request=te),Y;if(ne instanceof ge)throw te&&!ne.request&&(ne.request=te),ne;if(ne&&ne.name==="TypeError"&&/Load failed|fetch/i.test(ne.message)){const ue=new ge("Network Error",ge.ERR_NETWORK,f,te,ne&&ne.response);throw Object.defineProperty(ue,"cause",{__proto__:null,value:ne.cause||ne,writable:!0,enumerable:!1,configurable:!0}),ue}throw ge.from(ne,ne&&ne.code,f,te,ne&&ne.response)}}},Mw=new Map,Yx=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let o=s.length,a=o,l,c,u=Mw;for(;a--;)l=s[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:Ew(e)),u=c;return c};Yx();const qh={http:RM,xhr:lw,fetch:{get:Yx}};N.forEach(qh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Zm=t=>`- ${t}`,ww=t=>N.isFunction(t)||t===null||t===!1;function Tw(t,e){t=N.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let a;if(r=i,!ww(i)&&(r=qh[(a=String(i)).toLowerCase()],r===void 0))throw new ge(`Unknown adapter '${a}'`);if(r&&(N.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Zm).join(`
`):" "+Zm(o[0]):"as no adapter specified";throw new ge("There is no suitable adapter to dispatch the request "+a,ge.ERR_NOT_SUPPORT)}return r}const Kx={getAdapter:Tw,adapters:qh};function Au(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ca(null,t)}function Ru(t){return Au(t),t.headers=en.from(t.headers),t.data=bu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Kx.getAdapter(t.adapter||Ra.adapter,t)(t).then(function(i){Au(t),t.response=i;try{i.data=bu.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=en.from(i.headers),i},function(i){if(!Gx(i)&&(Au(t),i&&i.response)){t.response=i.response;try{i.response.data=bu.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=en.from(i.response.headers)}return Promise.reject(i)})}const Vc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Vc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Jm={};Vc.transitional=function(e,n,i){function r(s,o){return"[Axios v"+$h+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new ge(r(o," has been removed"+(n?" in "+n:"")),ge.ERR_DEPRECATED);return n&&!Jm[o]&&(Jm[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Vc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function bw(t,e,n){if(typeof t!="object"||t===null)throw new ge("options must be an object",ge.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ge("option "+s+" must be "+l,ge.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ge("Unknown option "+s,ge.ERR_BAD_OPTION)}}const Ol={assertOptions:bw,validators:Vc},Kt=Ol.validators;let Yr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Bm,response:new Bm}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=(()=>{if(!r.stack)return"";const o=r.stack.indexOf(`
`);return o===-1?"":r.stack.slice(o+1)})();try{if(!i.stack)i.stack=s;else if(s){const o=s.indexOf(`
`),a=o===-1?-1:s.indexOf(`
`,o+1),l=a===-1?"":s.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+s)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=is(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Ol.assertOptions(i,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean),legacyInterceptorReqResOrdering:Kt.transitional(Kt.boolean),advertiseZstdAcceptEncoding:Kt.transitional(Kt.boolean),validateStatusUndefinedResolves:Kt.transitional(Kt.boolean)},!1),r!=null&&(N.isFunction(r)?n.paramsSerializer={serialize:r}:Ol.assertOptions(r,{encode:Kt.function,serialize:Kt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ol.assertOptions(n,{baseUrl:Kt.spelling("baseURL"),withXsrfToken:Kt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&N.merge(s.common,s[n.method]);s&&N.forEach(["delete","get","head","post","put","patch","query","common"],x=>{delete s[x]}),n.headers=en.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){if(typeof y.runWhen=="function"&&y.runWhen(n)===!1)return;l=l&&y.synchronous;const p=n.transitional||jh;p&&p.legacyInterceptorReqResOrdering?a.unshift(y.fulfilled,y.rejected):a.push(y.fulfilled,y.rejected)});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let u,d=0,h;if(!l){const x=[Ru.bind(this),void 0];for(x.unshift(...a),x.push(...c),h=x.length,u=Promise.resolve(n);d<h;)u=u.then(x[d++],x[d++]);return u}h=a.length;let m=n;for(;d<h;){const x=a[d++],y=a[d++];try{m=x?x(m):m}catch(p){if(!y){u=Promise.reject(p);break}try{const f=y.call(this,p);N.isThenable(f)&&(u=Promise.resolve(f).then(()=>Ru.call(this,m)))}catch(f){u=Promise.reject(f)}break}}if(!u)try{u=Ru.call(this,m)}catch(x){u=Promise.reject(x)}for(d=0,h=c.length;d<h;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=is(this.defaults,e);const n=Xx(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Hx(n,e.params,e.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(e){Yr.prototype[e]=function(n,i){return this.request(is(i||{},{method:e,url:n,data:i&&N.hasOwnProp(i,"data")?i.data:void 0}))}});N.forEach(["post","put","patch","query"],function(e){function n(i){return function(s,o,a){return this.request(is(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Yr.prototype[e]=n(),e!=="query"&&(Yr.prototype[e+"Form"]=n(!0))});let Aw=class Zx{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Ca(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Zx(function(r){e=r}),cancel:e}}};function Rw(t){return function(n){return t.apply(null,n)}}function Cw(t){return N.isObject(t)&&t.isAxiosError===!0}const of={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(of).forEach(([t,e])=>{of[e]=t});function Jx(t){const e=new Yr(t),n=Ax(Yr.prototype.request,e);return N.extend(n,Yr.prototype,e,{allOwnKeys:!0}),N.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Jx(is(t,r))},n}const Dt=Jx(Ra);Dt.Axios=Yr;Dt.CanceledError=Ca;Dt.CancelToken=Aw;Dt.isCancel=Gx;Dt.VERSION=$h;Dt.toFormData=Hc;Dt.AxiosError=ge;Dt.Cancel=Dt.CanceledError;Dt.all=function(e){return Promise.all(e)};Dt.spread=Rw;Dt.isAxiosError=Cw;Dt.mergeConfig=is;Dt.AxiosHeaders=en;Dt.formToJSON=t=>Wx(N.isHTMLForm(t)?new FormData(t):t);Dt.getAdapter=Kx.getAdapter;Dt.HttpStatusCode=of;Dt.default=Dt;const{Axios:SP,AxiosError:EP,CanceledError:MP,isCancel:wP,CancelToken:TP,VERSION:bP,all:AP,Cancel:RP,isAxiosError:CP,spread:PP,toFormData:LP,AxiosHeaders:DP,HttpStatusCode:IP,formToJSON:NP,getAdapter:UP,mergeConfig:OP,create:FP}=Dt,mn=Dt.create({baseURL:"https://safety-detective-backend.onrender.com/api"});mn.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t});mn.interceptors.response.use(t=>t,t=>{var e,n;if(((e=t.response)==null?void 0:e.status)===401){const i=((n=t.config)==null?void 0:n.url)||"";i.includes("/auth/login")||i.includes("/auth/signup")||(localStorage.clear(),window.location.href="/login")}return Promise.reject(t)});const Pw=()=>_.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[_.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),_.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),Lw=()=>_.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[_.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),_.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),_.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]});function Dw({value:t,onChange:e,show:n,onToggle:i}){return _.jsxs("div",{style:{position:"relative"},children:[_.jsx("input",{className:"form-input",type:n?"text":"password",placeholder:"Password",value:t,onChange:e,required:!0,autoComplete:"current-password",style:{paddingRight:"44px"}}),_.jsx("button",{type:"button",onClick:i,tabIndex:-1,"aria-label":n?"Hide password":"Show password",style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",padding:"4px",display:"flex",alignItems:"center",lineHeight:0},children:n?_.jsx(Pw,{}):_.jsx(Lw,{})})]})}function Iw(){const[t,e]=X.useState(""),[n,i]=X.useState(""),[r,s]=X.useState(!1),[o,a]=X.useState(""),{login:l}=go(),c=li(),u=async d=>{var h,m;d.preventDefault(),a("");try{const x=await mn.post("/auth/login",{email:t,password:n});l(x.data.user,x.data.token),x.data.user.role==="admin"?c("/admin"):c("/dashboard")}catch(x){a(((m=(h=x.response)==null?void 0:h.data)==null?void 0:m.error)||"Login failed. Please try again.")}};return _.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-primary)",display:"flex",flexDirection:"column"},children:[_.jsx("nav",{style:{background:"var(--bg-panel)",borderBottom:"1px solid var(--border-subtle)",height:"60px",flexShrink:0},children:_.jsxs("div",{className:"pg-nav-inner",children:[_.jsxs("div",{style:{fontSize:"16px",fontWeight:700,letterSpacing:"0.04em"},children:["Safety",_.jsx("span",{style:{color:"var(--accent-safety)"},children:" Detective"})]}),_.jsx("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:_.jsx(rr,{to:"/signup",className:"btn-primary",style:{padding:"8px 18px",fontSize:"14px"},children:"Sign Up"})})]})}),_.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"48px var(--pg-pad)"},children:_.jsxs("div",{style:{width:"100%",maxWidth:"420px"},children:[_.jsx("h1",{style:{fontSize:"28px",fontWeight:800,marginBottom:"8px"},children:"Welcome back"}),_.jsx("p",{style:{fontSize:"15px",color:"var(--text-secondary)",marginBottom:"32px"},children:"Log in to continue your safety training."}),o&&_.jsx("div",{style:{color:"var(--accent-danger)",fontSize:"14px",padding:"11px 14px",marginBottom:"16px",background:"rgba(239,68,68,0.10)",borderRadius:"6px",border:"1px solid rgba(239,68,68,0.28)"},children:o}),_.jsxs("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[_.jsx("input",{className:"form-input",type:"email",placeholder:"Email address",value:t,onChange:d=>e(d.target.value),required:!0,autoComplete:"email"}),_.jsx(Dw,{value:n,onChange:d=>i(d.target.value),show:r,onToggle:()=>s(d=>!d)}),_.jsx("button",{type:"submit",className:"btn-primary",style:{marginTop:"4px",padding:"13px",fontSize:"16px",width:"100%"},children:"Log In"})]}),_.jsxs("p",{style:{marginTop:"24px",fontSize:"14px",color:"var(--text-secondary)",textAlign:"center"},children:["Don't have an account?"," ",_.jsx(rr,{to:"/signup",style:{color:"var(--accent-safety)",textDecoration:"underline"},children:"Sign up"})]})]})})]})}const Nw=()=>_.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[_.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),_.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),Uw=()=>_.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[_.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),_.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),_.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),Ow=/^\d{7,15}$/;function Qm({name:t,placeholder:e,show:n,onToggle:i,value:r,onChange:s}){return _.jsxs("div",{style:{position:"relative"},children:[_.jsx("input",{className:"form-input",name:t,type:n?"text":"password",placeholder:e,value:r,required:!0,autoComplete:"new-password",onChange:s,style:{paddingRight:"44px"}}),_.jsx("button",{type:"button",onClick:i,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",padding:"4px",display:"flex",alignItems:"center",lineHeight:0},tabIndex:-1,"aria-label":n?"Hide password":"Show password",children:n?_.jsx(Nw,{}):_.jsx(Uw,{})})]})}function Fw(){const[t,e]=X.useState({name:"",email:"",phone:"",password:"",confirmPassword:""}),[n,i]=X.useState(""),[r,s]=X.useState(!1),[o,a]=X.useState(!1),{login:l}=go(),c=li(),u=h=>{const{name:m,value:x}=h.target;e(y=>({...y,[m]:x}))},d=async h=>{var x,y;h.preventDefault(),i("");const m=t.phone.replace(/\D/g,"");if(t.phone!==m)return i("Phone number must contain digits only");if(!Ow.test(m))return i("Phone number must be 7–15 digits");if(t.password!==t.confirmPassword)return i("Passwords do not match");if(t.password.length<6)return i("Password must be at least 6 characters");try{const p=await mn.post("/auth/signup",{...t,phone:m});l(p.data.user,p.data.token),c("/dashboard")}catch(p){i(((y=(x=p.response)==null?void 0:x.data)==null?void 0:y.error)||"Signup failed. Please try again.")}};return _.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-primary)",display:"flex",flexDirection:"column"},children:[_.jsx("nav",{style:{background:"var(--bg-panel)",borderBottom:"1px solid var(--border-subtle)",height:"60px",flexShrink:0},children:_.jsxs("div",{className:"pg-nav-inner",children:[_.jsxs("div",{style:{fontSize:"16px",fontWeight:700,letterSpacing:"0.04em"},children:["Safety",_.jsx("span",{style:{color:"var(--accent-safety)"},children:" Detective"})]}),_.jsx("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:_.jsx(rr,{to:"/login",className:"btn-secondary",style:{padding:"8px 18px",fontSize:"14px"},children:"Log In"})})]})}),_.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"48px var(--pg-pad)"},children:_.jsxs("div",{style:{width:"100%",maxWidth:"420px"},children:[_.jsx("h1",{style:{fontSize:"28px",fontWeight:800,marginBottom:"8px"},children:"Create account"}),_.jsx("p",{style:{fontSize:"15px",color:"var(--text-secondary)",marginBottom:"32px"},children:"Join Safety Detective and start your training."}),n&&_.jsx("div",{style:{color:"var(--accent-danger)",fontSize:"14px",padding:"11px 14px",marginBottom:"16px",background:"rgba(239,68,68,0.10)",borderRadius:"6px",border:"1px solid rgba(239,68,68,0.28)"},children:n}),_.jsxs("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:"12px"},children:[_.jsx("input",{className:"form-input",name:"name",type:"text",placeholder:"Full name",required:!0,autoComplete:"name",onChange:u}),_.jsx("input",{className:"form-input",name:"email",type:"email",placeholder:"Email address",required:!0,autoComplete:"email",onChange:u}),_.jsx("input",{className:"form-input",name:"phone",type:"tel",placeholder:"Phone number",required:!0,autoComplete:"tel",onChange:u}),_.jsx(Qm,{name:"password",placeholder:"Password (min. 6 characters)",show:r,onToggle:()=>s(h=>!h),value:t.password,onChange:u}),_.jsx(Qm,{name:"confirmPassword",placeholder:"Confirm password",show:o,onToggle:()=>a(h=>!h),value:t.confirmPassword,onChange:u}),_.jsx("button",{type:"submit",className:"btn-primary",style:{marginTop:"4px",padding:"13px",fontSize:"16px",width:"100%"},children:"Sign Up"})]}),_.jsxs("p",{style:{marginTop:"24px",fontSize:"14px",color:"var(--text-secondary)",textAlign:"center"},children:["Already have an account?"," ",_.jsx(rr,{to:"/login",style:{color:"var(--accent-safety)",textDecoration:"underline"},children:"Log in"})]})]})})]})}function kw(){const{user:t,logout:e}=go(),[n,i]=X.useState(null),r=li();X.useEffect(()=>{mn.get("/employee/history").then(d=>i(d.data)).catch(console.error)},[]);const o=((n==null?void 0:n.attempts)||[]).filter(d=>d.status==="completed");o.length>0&&Math.max(...o.map(d=>d.score));const a=o.some(d=>d.passed),c=o.length===0?{label:"Not started",color:"var(--text-muted)",cls:null}:a?{label:"Passed",color:"var(--accent-success)",cls:"badge-pass"}:{label:"In progress",color:"var(--accent-warning)",cls:null},u=[{id:"001",seq:1,eyebrow:"Case File #001",title:"Warehouse Slip Incident",description:"A worker slips near the loading dock. Investigate the scene, find the evidence, and trace the root cause using the 5 Whys.",tags:["3D Investigation","5 Whys","Workplace Safety"],locked:!1}];return _.jsxs("div",{style:{background:"var(--bg-primary)",minHeight:"100vh",color:"var(--text-primary)"},children:[_.jsx("nav",{style:{background:"var(--bg-panel)",borderBottom:"1px solid var(--border-subtle)",height:"60px"},children:_.jsxs("div",{className:"pg-nav-inner",children:[_.jsxs("div",{style:{fontSize:"16px",fontWeight:700,letterSpacing:"0.04em"},children:["Safety",_.jsx("span",{style:{color:"var(--accent-safety)"},children:" Detective"})]}),_.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",fontSize:"14px",color:"var(--text-secondary)"},children:[_.jsx("span",{children:t==null?void 0:t.name}),_.jsx("button",{onClick:()=>{e(),r("/")},className:"btn-secondary",style:{padding:"7px 16px",fontSize:"13px"},children:"Log Out"})]})]})}),_.jsxs("div",{className:"pg-body",children:[_.jsx("div",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.14em",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"6px"},children:"Employee Dashboard"}),_.jsxs("h1",{style:{fontSize:"28px",fontWeight:700,marginBottom:"40px"},children:["Welcome back, ",t==null?void 0:t.name]}),_.jsx("div",{style:{fontSize:"13px",fontWeight:700,letterSpacing:"0.10em",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"16px"},children:"Your Cases"}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:u.map(d=>{const h=d.locked;return _.jsxs("div",{onClick:()=>!h&&r(`/dashboard/case/${d.id}`),style:{background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"28px 32px",cursor:h?"not-allowed":"pointer",opacity:h?.5:1,display:"flex",justifyContent:"space-between",alignItems:"center",gap:"24px",flexWrap:"wrap",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:m=>{h||(m.currentTarget.style.borderColor="var(--border-strong)")},onMouseLeave:m=>{m.currentTarget.style.borderColor="var(--border-subtle)"},children:[_.jsxs("div",{style:{flex:1,minWidth:0},children:[_.jsx("div",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.14em",color:"var(--accent-safety)",textTransform:"uppercase",marginBottom:"6px"},children:h?"🔒 Locked":d.eyebrow}),_.jsx("div",{style:{fontSize:"20px",fontWeight:700,marginBottom:"6px"},children:d.title}),_.jsx("p",{style:{fontSize:"14px",color:"var(--text-secondary)",lineHeight:1.55,marginBottom:"14px",maxWidth:"560px"},children:d.description}),_.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:d.tags.map(m=>_.jsx("span",{style:{background:"var(--bg-elevated)",color:"var(--text-secondary)",border:"1px solid var(--border-subtle)",padding:"3px 10px",borderRadius:"999px",fontSize:"12px",fontWeight:500},children:m},m))})]}),_.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"8px",flexShrink:0},children:[c.cls?_.jsx("span",{className:c.cls,children:c.label}):_.jsx("span",{style:{fontSize:"12px",fontWeight:700,letterSpacing:"0.08em",color:c.color,textTransform:"uppercase"},children:c.label}),!h&&_.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"var(--text-muted)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:_.jsx("polyline",{points:"9 18 15 12 9 6"})})]})]},d.id)})})]})]})}function Bw(){const{user:t,logout:e}=go(),{id:n}=G1(),i=li(),[r,s]=X.useState(null),[o,a]=X.useState(!0);X.useEffect(()=>{mn.get("/employee/history").then(g=>{s(g.data),a(!1)}).catch(g=>{console.error(g),a(!1)})},[]);const c=((r==null?void 0:r.attempts)||[]).filter(g=>g.status==="completed"),u=c.length>0?Math.max(...c.map(g=>g.score)):null,d=c.some(g=>g.passed),h=c.length>0,m=g=>g?new Date(g).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"—",x=g=>!g&&g!==0?"—":`${Math.floor(g/60)}m ${g%60}s`,y=g=>g>=60?"var(--accent-success)":"var(--accent-danger)",p={eyebrow:"Case File #001",title:"Warehouse Slip Incident",description:"A worker slips near the loading dock. Investigate the scene, find the evidence, and trace the root cause using the 5 Whys.",tags:["3D Investigation","5 Whys","Workplace Safety"]},f={nav:{background:"var(--bg-panel)",borderBottom:"1px solid var(--border-subtle)",height:"60px"},sectionH:{fontSize:"13px",fontWeight:700,letterSpacing:"0.10em",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"16px"},statRow:{display:"flex",gap:"16px",marginBottom:"40px",flexWrap:"wrap"},statCard:{flex:1,minWidth:"160px",background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"24px",textAlign:"center"},statLbl:{fontSize:"11px",fontWeight:700,letterSpacing:"0.12em",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"12px"},statBig:{fontSize:"48px",fontWeight:800,lineHeight:1},statSub:{fontSize:"13px",color:"var(--text-muted)",marginTop:"8px"},tableCard:{background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderRadius:"10px",overflow:"hidden"},thead:{background:"var(--bg-elevated)",borderBottom:"1px solid var(--border-subtle)"},th:{padding:"14px 18px",fontWeight:600,fontSize:"12px",letterSpacing:"0.08em",color:"var(--text-muted)",textTransform:"uppercase",textAlign:"left"},td:{padding:"14px 18px",fontSize:"14px",color:"var(--text-secondary)",borderBottom:"1px solid var(--border-subtle)"},tdBold:{padding:"14px 18px",fontSize:"14px",fontWeight:700,color:"var(--text-primary)",borderBottom:"1px solid var(--border-subtle)"},empty:{background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"48px",textAlign:"center",color:"var(--text-muted)"},tag:{background:"var(--bg-elevated)",color:"var(--text-secondary)",border:"1px solid var(--border-subtle)",padding:"3px 10px",borderRadius:"999px",fontSize:"12px",fontWeight:500}};return _.jsxs("div",{style:{background:"var(--bg-primary)",minHeight:"100vh",color:"var(--text-primary)"},children:[_.jsx("nav",{style:f.nav,children:_.jsxs("div",{className:"pg-nav-inner",children:[_.jsxs("div",{style:{fontSize:"16px",fontWeight:700,letterSpacing:"0.04em"},children:["Safety",_.jsx("span",{style:{color:"var(--accent-safety)"},children:" Detective"})]}),_.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[_.jsx("span",{style:{fontSize:"14px",color:"var(--text-secondary)"},children:t==null?void 0:t.name}),_.jsx("button",{onClick:()=>i("/dashboard"),className:"btn-secondary",style:{padding:"7px 16px",fontSize:"13px"},children:"← Dashboard"})]})]})}),_.jsxs("div",{className:"pg-body",children:[_.jsxs("div",{style:{marginBottom:"36px"},children:[_.jsx("div",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.14em",color:"var(--accent-safety)",textTransform:"uppercase",marginBottom:"8px"},children:p.eyebrow}),_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"20px"},children:[_.jsxs("div",{children:[_.jsx("h1",{style:{fontSize:"28px",fontWeight:800,marginBottom:"8px"},children:p.title}),_.jsx("p",{style:{fontSize:"15px",color:"var(--text-secondary)",maxWidth:"560px",lineHeight:1.55,marginBottom:"14px"},children:p.description}),_.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:p.tags.map(g=>_.jsx("span",{style:f.tag,children:g},g))})]}),_.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"12px",flexShrink:0},children:[h&&_.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"4px"},children:[_.jsx("span",{className:d?"badge-pass":"badge-fail",children:d?"Passed":"Failed"}),u!==null&&_.jsxs("div",{style:{fontSize:"13px",color:"var(--text-muted)"},children:["Best: ",u,"/100"]})]}),_.jsx("button",{onClick:()=>i("/game/intro"),className:"btn-primary",style:{padding:"12px 24px"},children:h?"Replay Investigation":"Start Investigation"})]})]})]}),_.jsx("div",{style:f.sectionH,children:"Progress"}),_.jsxs("div",{style:f.statRow,children:[_.jsxs("div",{style:f.statCard,children:[_.jsx("div",{style:f.statLbl,children:"Best Score"}),_.jsx("div",{style:{...f.statBig,color:u===null?"var(--text-muted)":y(u)},children:u!==null?u:"—"}),u!==null&&_.jsx("div",{style:{marginTop:"10px"},children:_.jsx("span",{className:u>=60?"badge-pass":"badge-fail",children:u>=60?"Passed":"Failed"})})]}),_.jsxs("div",{style:f.statCard,children:[_.jsx("div",{style:f.statLbl,children:"Total Attempts"}),_.jsx("div",{style:{...f.statBig,color:"var(--text-primary)"},children:c.length}),_.jsx("div",{style:f.statSub,children:"completed investigations"})]}),_.jsxs("div",{style:f.statCard,children:[_.jsx("div",{style:f.statLbl,children:"Training Status"}),_.jsx("div",{style:{fontSize:"22px",fontWeight:700,marginTop:"8px"},children:c.length===0?_.jsx("span",{style:{color:"var(--text-muted)"},children:"Not started"}):d?_.jsx("span",{style:{color:"var(--accent-success)"},children:"✓ Complete"}):_.jsx("span",{style:{color:"var(--accent-warning)"},children:"In progress"})})]})]}),_.jsx("div",{style:f.sectionH,children:"Attempt History"}),o?_.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading…"}):c.length>0?_.jsx("div",{style:f.tableCard,children:_.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[_.jsx("thead",{children:_.jsx("tr",{style:f.thead,children:["Date","Score","Status","Time Taken"].map(g=>_.jsx("th",{style:f.th,children:g},g))})}),_.jsx("tbody",{children:c.map((g,v)=>_.jsxs("tr",{children:[_.jsx("td",{style:f.td,children:m(g.createdAt||g.startedAt)}),_.jsxs("td",{style:{...f.tdBold,color:y(g.score)},children:[g.score,"/100"]}),_.jsxs("td",{style:f.td,children:[_.jsx("span",{className:g.passed?"badge-pass":"badge-fail",children:g.passed?"Pass":"Fail"}),g.timedOut&&_.jsx("span",{style:{fontSize:"12px",color:"var(--text-muted)",marginLeft:"8px"},children:"timed out"})]}),_.jsx("td",{style:f.td,children:x(g.timeTakenSeconds)})]},v))})]})}):_.jsxs("div",{style:f.empty,children:[_.jsx("div",{style:{fontSize:"32px",marginBottom:"12px"},children:"🔍"}),_.jsx("p",{children:"No attempts yet. Ready to investigate?"})]})]})]})}function zw(){const t=li(),e={page:{background:"var(--bg-primary)",minHeight:"100vh",color:"var(--text-primary)",display:"flex",flexDirection:"column"},nav:{background:"var(--bg-panel)",borderBottom:"1px solid var(--border-subtle)",height:"60px",flexShrink:0},navLogo:{fontSize:"16px",fontWeight:700,letterSpacing:"0.04em"},navAmt:{color:"var(--accent-safety)"},card:{background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"40px"},eyebrow:{fontSize:"11px",fontWeight:700,letterSpacing:"0.18em",color:"var(--accent-safety)",textTransform:"uppercase",marginBottom:"12px"},h1:{fontSize:"36px",fontWeight:800,marginBottom:"24px",lineHeight:1.1},briefP:{fontSize:"17px",lineHeight:1.65,color:"var(--text-secondary)",marginBottom:"16px"},paramsBox:{background:"var(--bg-elevated)",border:"1px solid var(--border-subtle)",borderRadius:"8px",padding:"24px",marginBottom:"36px"},paramsH:{fontSize:"12px",fontWeight:700,letterSpacing:"0.12em",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"16px"},paramList:{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"10px"},paramLi:{fontSize:"15px",color:"var(--text-primary)",display:"flex",gap:"10px"},paramKey:{color:"var(--text-muted)",minWidth:"130px",fontSize:"14px"},paramVal:{fontWeight:600},btnRow:{display:"flex",gap:"14px",flexWrap:"wrap"}};return _.jsxs("div",{style:e.page,children:[_.jsx("nav",{style:e.nav,children:_.jsxs("div",{className:"pg-nav-inner",children:[_.jsxs("div",{style:e.navLogo,children:["Safety",_.jsx("span",{style:e.navAmt,children:" Detective"})]}),_.jsx("button",{onClick:()=>t("/dashboard/case/001"),className:"btn-secondary",style:{padding:"7px 16px",fontSize:"13px"},children:"← Back"})]})}),_.jsx("div",{className:"pg-body-narrow",children:_.jsxs("div",{style:e.card,children:[_.jsx("div",{style:e.eyebrow,children:"Case File #001"}),_.jsx("h1",{style:e.h1,children:"Warehouse Slip Incident"}),_.jsx("p",{style:e.briefP,children:"A warehouse employee slipped near the loading dock this morning. No serious injury — but it could have been."}),_.jsx("p",{style:{...e.briefP,marginBottom:"32px"},children:"Investigate the scene, find out what really happened, and figure out the root cause — not just what's sitting on the surface."}),_.jsxs("div",{style:e.paramsBox,children:[_.jsx("div",{style:e.paramsH,children:"Investigation Parameters"}),_.jsxs("ul",{style:e.paramList,children:[_.jsxs("li",{style:e.paramLi,children:[_.jsx("span",{style:e.paramKey,children:"Clues to find"}),_.jsx("span",{style:e.paramVal,children:"3"})]}),_.jsxs("li",{style:e.paramLi,children:[_.jsx("span",{style:e.paramKey,children:"Time limit"}),_.jsx("span",{style:e.paramVal,children:"3 minutes"})]}),_.jsxs("li",{style:e.paramLi,children:[_.jsx("span",{style:e.paramKey,children:"Pass threshold"}),_.jsx("span",{style:e.paramVal,children:"60 / 100 points"})]}),_.jsxs("li",{style:e.paramLi,children:[_.jsx("span",{style:e.paramKey,children:"Speed bonus"}),_.jsx("span",{style:e.paramVal,children:"+10 pts if under 2 minutes"})]})]})]}),_.jsxs("div",{style:e.btnRow,children:[_.jsx("button",{onClick:()=>t("/game/play"),className:"btn-primary",style:{padding:"14px 32px",fontSize:"17px"},children:"Enter Investigation"}),_.jsx("button",{onClick:()=>t("/game/help"),className:"btn-secondary",style:{padding:"14px 28px",fontSize:"16px"},children:"How to Play"})]})]})})]})}function Hw(){const t=li(),e={page:{background:"var(--bg-primary)",minHeight:"100vh",color:"var(--text-primary)",display:"flex",flexDirection:"column"},nav:{background:"var(--bg-panel)",borderBottom:"1px solid var(--border-subtle)",height:"60px",flexShrink:0},navLogo:{fontSize:"16px",fontWeight:700,letterSpacing:"0.04em"},navAmt:{color:"var(--accent-safety)"},card:{background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"40px"},h1:{fontSize:"28px",fontWeight:800,marginBottom:"32px"},steps:{display:"flex",flexDirection:"column",gap:"28px"},step:{display:"flex",gap:"18px"},num:{flexShrink:0,width:"32px",height:"32px",borderRadius:"50%",background:"var(--bg-elevated)",border:"1px solid var(--border-strong)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:700,color:"var(--accent-safety)"},stepB:{flex:1},stepH:{fontSize:"16px",fontWeight:700,marginBottom:"8px"},stepP:{fontSize:"15px",color:"var(--text-secondary)",lineHeight:1.6},kbd:{background:"var(--bg-elevated)",border:"1px solid var(--border-strong)",borderRadius:"4px",padding:"1px 6px",fontSize:"13px",fontWeight:600,color:"var(--text-primary)"},rule:{border:"none",borderTop:"1px solid var(--border-subtle)",margin:"32px 0"},pass:{background:"var(--bg-elevated)",border:"1px solid var(--border-subtle)",borderRadius:"8px",padding:"16px 20px",display:"flex",gap:"12px",alignItems:"center"},passLbl:{fontSize:"13px",fontWeight:700,letterSpacing:"0.08em",color:"var(--text-muted)",textTransform:"uppercase"},passVal:{fontSize:"18px",fontWeight:700,color:"var(--accent-safety)"},btnRow:{marginTop:"36px"}},n=[{title:"Explore",body:_.jsxs(_.Fragment,{children:["Walk through the 3D warehouse using ",_.jsx("span",{style:e.kbd,children:"W"})," ",_.jsx("span",{style:e.kbd,children:"A"})," ",_.jsx("span",{style:e.kbd,children:"S"})," ",_.jsx("span",{style:e.kbd,children:"D"})," keys to move. Click the scene to lock your cursor, then move the mouse to look around."]})},{title:"Investigate",body:"Click objects in the scene to investigate them. Real clues give +10 points; decoys cost −10 points on your first click (re-clicking the same decoy has no further penalty)."},{title:"Answer the 5 Whys",body:'After finding all 3 clues, answer five sequential "Why?" questions to trace the root cause. Points per correct answer: Why 1 +5, Why 2 +5, Why 3 +10, Why 4 +10. Wrong answers cost −10 each.'},{title:"Identify Root Cause",body:"Identify the correct root cause on the fifth Why for +30 points."},{title:"Speed Bonus",body:"Finish in under 2 minutes for a +10 speed bonus."}];return _.jsxs("div",{style:e.page,children:[_.jsx("nav",{style:e.nav,children:_.jsxs("div",{className:"pg-nav-inner",children:[_.jsxs("div",{style:e.navLogo,children:["Safety",_.jsx("span",{style:e.navAmt,children:" Detective"})]}),_.jsx("button",{onClick:()=>t("/game/intro"),className:"btn-secondary",style:{padding:"7px 16px",fontSize:"13px"},children:"← Back to Case File"})]})}),_.jsx("div",{className:"pg-body-narrow",children:_.jsxs("div",{style:e.card,children:[_.jsx("h1",{style:e.h1,children:"How to Play"}),_.jsx("div",{style:e.steps,children:n.map(({title:i,body:r},s)=>_.jsxs("div",{style:e.step,children:[_.jsx("div",{style:e.num,children:s+1}),_.jsxs("div",{style:e.stepB,children:[_.jsx("div",{style:e.stepH,children:i}),_.jsx("div",{style:e.stepP,children:r})]})]},i))}),_.jsx("hr",{style:e.rule}),_.jsx("div",{style:e.pass,children:_.jsxs("div",{children:[_.jsx("div",{style:e.passLbl,children:"Pass Threshold"}),_.jsx("div",{style:e.passVal,children:"60 / 100 points"})]})}),_.jsx("div",{style:e.btnRow,children:_.jsx("button",{onClick:()=>t("/game/intro"),className:"btn-primary",style:{padding:"12px 28px"},children:"Back to Case File"})})]})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="166",Vw=0,eg=1,Ww=2,Qx=1,Gw=2,wi=3,Fi=0,En=1,Ai=2,mr=0,$s=1,af=2,tg=3,ng=4,jw=5,Br=100,Xw=101,$w=102,qw=103,Yw=104,Kw=200,Zw=201,Jw=202,Qw=203,lf=204,cf=205,eT=206,tT=207,nT=208,iT=209,rT=210,sT=211,oT=212,aT=213,lT=214,cT=0,uT=1,dT=2,vc=3,fT=4,hT=5,pT=6,mT=7,Kh=0,gT=1,vT=2,gr=0,xT=1,_T=2,yT=3,ST=4,ET=5,MT=6,wT=7,e_=300,ro=301,so=302,uf=303,df=304,Wc=306,ff=1e3,jr=1001,hf=1002,zn=1003,TT=1004,el=1005,ii=1006,Cu=1007,Xr=1008,ki=1009,t_=1010,n_=1011,ya=1012,Zh=1013,rs=1014,Pi=1015,Pa=1016,Jh=1017,Qh=1018,oo=1020,i_=35902,r_=1021,s_=1022,ri=1023,o_=1024,a_=1025,qs=1026,ao=1027,l_=1028,ep=1029,c_=1030,tp=1031,np=1033,Fl=33776,kl=33777,Bl=33778,zl=33779,pf=35840,mf=35841,gf=35842,vf=35843,xf=36196,_f=37492,yf=37496,Sf=37808,Ef=37809,Mf=37810,wf=37811,Tf=37812,bf=37813,Af=37814,Rf=37815,Cf=37816,Pf=37817,Lf=37818,Df=37819,If=37820,Nf=37821,Hl=36492,Uf=36494,Of=36495,u_=36283,Ff=36284,kf=36285,Bf=36286,bT=3200,AT=3201,d_=0,RT=1,er="",di="srgb",br="srgb-linear",ip="display-p3",Gc="display-p3-linear",xc="linear",gt="srgb",_c="rec709",yc="p3",ds=7680,ig=519,CT=512,PT=513,LT=514,f_=515,DT=516,IT=517,NT=518,UT=519,rg=35044,sg="300 es",Li=2e3,Sc=2001;class _o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pu=Math.PI/180,zf=180/Math.PI;function La(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function hn(t,e,n){return Math.max(e,Math.min(n,t))}function OT(t,e){return(t%e+e)%e}function Lu(t,e,n){return(1-n)*t+n*e}function Do(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],x=i[8],y=r[0],p=r[3],f=r[6],g=r[1],v=r[4],E=r[7],R=r[2],b=r[5],A=r[8];return s[0]=o*y+a*g+l*R,s[3]=o*p+a*v+l*b,s[6]=o*f+a*E+l*A,s[1]=c*y+u*g+d*R,s[4]=c*p+u*v+d*b,s[7]=c*f+u*E+d*A,s[2]=h*y+m*g+x*R,s[5]=h*p+m*v+x*b,s[8]=h*f+m*E+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,m=c*s-o*l,x=n*d+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Du.makeScale(e,n)),this}rotate(e){return this.premultiply(Du.makeRotation(-e)),this}translate(e,n){return this.premultiply(Du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Du=new $e;function h_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ec(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function FT(){const t=Ec("canvas");return t.style.display="block",t}const og={};function p_(t){t in og||(og[t]=!0,console.warn(t))}function kT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ag=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lg=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tl={[br]:{transfer:xc,primaries:_c,toReference:t=>t,fromReference:t=>t},[di]:{transfer:gt,primaries:_c,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Gc]:{transfer:xc,primaries:yc,toReference:t=>t.applyMatrix3(lg),fromReference:t=>t.applyMatrix3(ag)},[ip]:{transfer:gt,primaries:yc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(lg),fromReference:t=>t.applyMatrix3(ag).convertLinearToSRGB()}},BT=new Set([br,Gc]),lt={enabled:!0,_workingColorSpace:br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!BT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=tl[e].toReference,r=tl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return tl[t].primaries},getTransfer:function(t){return t===er?xc:tl[t].transfer}};function Ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Iu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fs;class zT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=Ec("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ec("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ys(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ys(n[i]/255)*255):n[i]=Ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HT=0;class m_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=La(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nu(r[o].image)):s.push(Nu(r[o]))}else s=Nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VT=0;class Mn extends _o{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,i=jr,r=jr,s=ii,o=Xr,a=ri,l=ki,c=Mn.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=La(),this.name="",this.source=new m_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ff:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ff:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=e_;Mn.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,n=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],x=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(m+1)/2,R=(f+1)/2,b=(u+h)/4,A=(d+y)/4,L=(x+p)/4;return v>E&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=A/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=b/r,s=L/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=L/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(d-y)/g,this.z=(h-u)/g,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WT extends _o{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new m_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends WT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class g_ extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GT extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Da{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=y;return}if(d!==y||l!==h||c!==m||u!==x){let p=1-a;const f=l*h+c*m+u*x+d*y,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),b=Math.atan2(R,f*g);p=Math.sin(p*b)/R,a=Math.sin(a*b)/R}const E=a*g;if(l=l*p+h*E,c=c*p+m*E,u=u*p+x*E,d=d*p+y*E,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+u*d+l*m-c*h,e[n+1]=l*x+u*h+c*d-a*m,e[n+2]=c*x+u*m+a*h-l*d,e[n+3]=u*x-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d-h*m*x;break;case"YXZ":this._x=h*u*d+c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d+h*m*x;break;case"ZXY":this._x=h*u*d-c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d-h*m*x;break;case"ZYX":this._x=h*u*d-c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d+h*m*x;break;case"YZX":this._x=h*u*d+c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d-h*m*x;break;case"XZY":this._x=h*u*d-c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new B,cg=new Da;class _r{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nl.copy(i.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),il.subVectors(this.max,Io),hs.subVectors(e.a,Io),ps.subVectors(e.b,Io),ms.subVectors(e.c,Io),Gi.subVectors(ps,hs),ji.subVectors(ms,ps),Ar.subVectors(hs,ms);let n=[0,-Gi.z,Gi.y,0,-ji.z,ji.y,0,-Ar.z,Ar.y,Gi.z,0,-Gi.x,ji.z,0,-ji.x,Ar.z,0,-Ar.x,-Gi.y,Gi.x,0,-ji.y,ji.x,0,-Ar.y,Ar.x,0];return!Ou(n,hs,ps,ms,il)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,hs,ps,ms,il))?!1:(rl.crossVectors(Gi,ji),n=[rl.x,rl.y,rl.z],Ou(n,hs,ps,ms,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new B,new B,new B,new B,new B,new B,new B,new B],Yn=new B,nl=new _r,hs=new B,ps=new B,ms=new B,Gi=new B,ji=new B,Ar=new B,Io=new B,il=new B,rl=new B,Rr=new B;function Ou(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Rr.fromArray(t,s);const a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=e.dot(Rr),c=n.dot(Rr),u=i.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jT=new _r,No=new B,Fu=new B;class rp{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(No,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Fu)),this.expandByPoint(No.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new B,ku=new B,sl=new B,Xi=new B,Bu=new B,ol=new B,zu=new B;class v_{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ku.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(ku);const s=e.distanceTo(n)*.5,o=-this.direction.dot(sl),a=Xi.dot(this.direction),l=-Xi.dot(sl),c=Xi.lengthSq(),u=Math.abs(1-o*o);let d,h,m,x;if(u>0)if(d=o*l-a,h=o*a-l,x=s*u,d>=0)if(h>=-x)if(h<=x){const y=1/u;d*=y,h*=y,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ku).addScaledVector(sl,h),m}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){Bu.subVectors(n,e),ol.subVectors(i,e),zu.crossVectors(Bu,ol);let o=this.direction.dot(zu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(ol.crossVectors(Xi,ol));if(l<0)return null;const c=a*this.direction.dot(Bu.cross(Xi));if(c<0||l+c>o)return null;const u=-a*Xi.dot(zu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,o,a,l,c,u,d,h,m,x,y,p){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,m,x,y,p)}set(e,n,i,r,s,o,a,l,c,u,d,h,m,x,y,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=x,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*d,x=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=m+x*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,x=c*u,y=c*d;n[0]=h+y*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=m*a-x,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,x=c*u,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,x=a*u,y=a*d;n[0]=l*u,n[4]=x*c-m,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=y-h*d,n[8]=x*d+m,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*d+x,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,m=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+y,n[5]=o*u,n[9]=m*d-x,n[2]=x*d-m,n[6]=a*u,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XT,e,$T)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),$i.crossVectors(i,bn),$i.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),$i.crossVectors(i,bn)),$i.normalize(),al.crossVectors(bn,$i),r[0]=$i.x,r[4]=al.x,r[8]=bn.x,r[1]=$i.y,r[5]=al.y,r[9]=bn.y,r[2]=$i.z,r[6]=al.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],x=i[2],y=i[6],p=i[10],f=i[14],g=i[3],v=i[7],E=i[11],R=i[15],b=r[0],A=r[4],L=r[8],w=r[12],S=r[1],C=r[5],V=r[9],F=r[13],H=r[2],q=r[6],z=r[10],$=r[14],I=r[3],K=r[7],J=r[11],te=r[15];return s[0]=o*b+a*S+l*H+c*I,s[4]=o*A+a*C+l*q+c*K,s[8]=o*L+a*V+l*z+c*J,s[12]=o*w+a*F+l*$+c*te,s[1]=u*b+d*S+h*H+m*I,s[5]=u*A+d*C+h*q+m*K,s[9]=u*L+d*V+h*z+m*J,s[13]=u*w+d*F+h*$+m*te,s[2]=x*b+y*S+p*H+f*I,s[6]=x*A+y*C+p*q+f*K,s[10]=x*L+y*V+p*z+f*J,s[14]=x*w+y*F+p*$+f*te,s[3]=g*b+v*S+E*H+R*I,s[7]=g*A+v*C+E*q+R*K,s[11]=g*L+v*V+E*z+R*J,s[15]=g*w+v*F+E*$+R*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],x=e[3],y=e[7],p=e[11],f=e[15];return x*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+y*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],x=e[12],y=e[13],p=e[14],f=e[15],g=d*p*c-y*h*c+y*l*m-a*p*m-d*l*f+a*h*f,v=x*h*c-u*p*c-x*l*m+o*p*m+u*l*f-o*h*f,E=u*y*c-x*d*c+x*a*m-o*y*m-u*a*f+o*d*f,R=x*d*l-u*y*l-x*a*h+o*y*h+u*a*p-o*d*p,b=n*g+i*v+r*E+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=g*A,e[1]=(y*h*s-d*p*s-y*r*m+i*p*m+d*r*f-i*h*f)*A,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*f+i*l*f)*A,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*A,e[4]=v*A,e[5]=(u*p*s-x*h*s+x*r*m-n*p*m-u*r*f+n*h*f)*A,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*f-n*l*f)*A,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*m+n*l*m)*A,e[8]=E*A,e[9]=(x*d*s-u*y*s-x*i*m+n*y*m+u*i*f-n*d*f)*A,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*f+n*a*f)*A,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*m-n*a*m)*A,e[12]=R*A,e[13]=(u*y*r-x*d*r+x*i*h-n*y*h-u*i*p+n*d*p)*A,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*p-n*a*p)*A,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,m=s*u,x=s*d,y=o*u,p=o*d,f=a*d,g=l*c,v=l*u,E=l*d,R=i.x,b=i.y,A=i.z;return r[0]=(1-(y+f))*R,r[1]=(m+E)*R,r[2]=(x-v)*R,r[3]=0,r[4]=(m-E)*b,r[5]=(1-(h+f))*b,r[6]=(p+g)*b,r[7]=0,r[8]=(x+v)*A,r[9]=(p-g)*A,r[10]=(1-(h+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=gs.set(r[0],r[1],r[2]).length();const o=gs.set(r[4],r[5],r[6]).length(),a=gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);const c=1/s,u=1/o,d=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,n.setFromRotationMatrix(Kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Li){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(a===Li)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Sc)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Li){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,m=(i+r)*u;let x,y;if(a===Li)x=(o+s)*d,y=-2*d;else if(a===Sc)x=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const gs=new B,Kn=new Mt,XT=new B(0,0,0),$T=new B(1,1,1),$i=new B,al=new B,bn=new B,ug=new Mt,dg=new Da;class Gn{constructor(e=0,n=0,i=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-hn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ug,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dg.setFromEuler(this),this.setFromQuaternion(dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qT=0;const fg=new B,vs=new Da,Si=new Mt,ll=new B,Uo=new B,YT=new B,KT=new Da,hg=new B(1,0,0),pg=new B(0,1,0),mg=new B(0,0,1),gg={type:"added"},ZT={type:"removed"},xs={type:"childadded",child:null},Hu={type:"childremoved",child:null};class tn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new B,n=new Gn,i=new Da,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new $e}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(hg,e)}rotateY(e){return this.rotateOnAxis(pg,e)}rotateZ(e){return this.rotateOnAxis(mg,e)}translateOnAxis(e,n){return fg.copy(e).applyQuaternion(this.quaternion),this.position.add(fg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hg,e)}translateY(e){return this.translateOnAxis(pg,e)}translateZ(e){return this.translateOnAxis(mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ll.copy(e):ll.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Uo,ll,this.up):Si.lookAt(ll,Uo,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(Si),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gg),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ZT),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gg),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,YT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,KT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new B(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new B,Ei=new B,Vu=new B,Mi=new B,_s=new B,ys=new B,vg=new B,Wu=new B,Gu=new B,ju=new B;class pi{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),Ei.subVectors(i,n),Vu.subVectors(e,n);const o=Zn.dot(Zn),a=Zn.dot(Ei),l=Zn.dot(Vu),c=Ei.dot(Ei),u=Ei.dot(Vu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Ei.subVectors(e,n),Zn.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Zn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return pi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),ys.subVectors(s,i),Wu.subVectors(e,i);const l=_s.dot(Wu),c=ys.dot(Wu);if(l<=0&&c<=0)return n.copy(i);Gu.subVectors(e,r);const u=_s.dot(Gu),d=ys.dot(Gu);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(_s,o);ju.subVectors(e,s);const m=_s.dot(ju),x=ys.dot(ju);if(x>=0&&m<=x)return n.copy(s);const y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(ys,a);const p=u*x-m*d;if(p<=0&&d-u>=0&&m-x>=0)return vg.subVectors(s,r),a=(d-u)/(d-u+(m-x)),n.copy(r).addScaledVector(vg,a);const f=1/(p+y+h);return o=y*f,a=h*f,n.copy(i).addScaledVector(_s,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Xu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=OT(e,1),n=hn(n,0,1),i=hn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Xu(o,s,e+1/3),this.g=Xu(o,s,e),this.b=Xu(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,n=di){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=di){const i=x_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=Iu(e.r),this.g=Iu(e.g),this.b=Iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return lt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(hn(Jt.r*255,0,255))*65536+Math.round(hn(Jt.g*255,0,255))*256+Math.round(hn(Jt.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=di){lt.fromWorkingColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==di?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(cl);const i=Lu(qi.h,cl.h,n),r=Lu(qi.s,cl.s,n),s=Lu(qi.l,cl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new nt;nt.NAMES=x_;let JT=0;class Ia extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=La(),this.name="",this.type="Material",this.blending=$s,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=cf,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lf&&(i.blendSrc=this.blendSrc),this.blendDst!==cf&&(i.blendDst=this.blendDst),this.blendEquation!==Br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class op extends Ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new B,ul=new tt;class vi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return p_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Do(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Do(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Do(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Do(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Do(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rg&&(e.usage=this.usage),e}}class __ extends vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class y_ extends vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ln extends vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let QT=0;const On=new Mt,$u=new tn,Ss=new B,An=new _r,Oo=new _r,zt=new B;class Hi extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h_(e)?y_:__)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(An.min,Oo.min),An.expandByPoint(zt),zt.addVectors(An.max,Oo.max),An.expandByPoint(zt)):(An.expandByPoint(Oo.min),An.expandByPoint(Oo.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),zt.add(Ss)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new B,l[L]=new B;const c=new B,u=new B,d=new B,h=new tt,m=new tt,x=new tt,y=new B,p=new B;function f(L,w,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,L),m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,S),u.sub(c),d.sub(c),m.sub(h),x.sub(h);const C=1/(m.x*x.y-x.x*m.y);isFinite(C)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(C),a[L].add(y),a[w].add(y),a[S].add(y),l[L].add(p),l[w].add(p),l[S].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,w=g.length;L<w;++L){const S=g[L],C=S.start,V=S.count;for(let F=C,H=C+V;F<H;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new B,E=new B,R=new B,b=new B;function A(L){R.fromBufferAttribute(r,L),b.copy(R);const w=a[L];v.copy(w),v.sub(R.multiplyScalar(R.dot(w))).normalize(),E.crossVectors(b,w);const C=E.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,C)}for(let L=0,w=g.length;L<w;++L){const S=g[L],C=S.start,V=S.count;for(let F=C,H=C+V;F<H;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*u;for(let f=0;f<u;f++)h[x++]=c[m++]}return new vi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xg=new Mt,Cr=new v_,dl=new rp,_g=new B,Es=new B,Ms=new B,ws=new B,qu=new B,fl=new B,hl=new tt,pl=new tt,ml=new tt,yg=new B,Sg=new B,Eg=new B,gl=new B,vl=new B;class et extends tn{constructor(e=new Hi,n=new op){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(qu.fromBufferAttribute(d,e),o?fl.addScaledVector(qu,u):fl.addScaledVector(qu.sub(n),u))}n.add(fl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(dl.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(dl,_g)===null||Cr.origin.distanceToSquared(_g)>(e.far-e.near)**2))&&(xg.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(xg),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const p=h[x],f=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,R=v;E<R;E+=3){const b=a.getX(E),A=a.getX(E+1),L=a.getX(E+2);r=xl(this,f,e,i,c,u,d,b,A,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=x,f=y;p<f;p+=3){const g=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);r=xl(this,o,e,i,c,u,d,g,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const p=h[x],f=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,R=v;E<R;E+=3){const b=E,A=E+1,L=E+2;r=xl(this,f,e,i,c,u,d,b,A,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=x,f=y;p<f;p+=3){const g=p,v=p+1,E=p+2;r=xl(this,o,e,i,c,u,d,g,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function eb(t,e,n,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fi,a),l===null)return null;vl.copy(a),vl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(vl);return c<n.near||c>n.far?null:{distance:c,point:vl.clone(),object:t}}function xl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Es),t.getVertexPosition(l,Ms),t.getVertexPosition(c,ws);const u=eb(t,e,n,i,Es,Ms,ws,gl);if(u){r&&(hl.fromBufferAttribute(r,a),pl.fromBufferAttribute(r,l),ml.fromBufferAttribute(r,c),u.uv=pi.getInterpolation(gl,Es,Ms,ws,hl,pl,ml,new tt)),s&&(hl.fromBufferAttribute(s,a),pl.fromBufferAttribute(s,l),ml.fromBufferAttribute(s,c),u.uv1=pi.getInterpolation(gl,Es,Ms,ws,hl,pl,ml,new tt)),o&&(yg.fromBufferAttribute(o,a),Sg.fromBufferAttribute(o,l),Eg.fromBufferAttribute(o,c),u.normal=pi.getInterpolation(gl,Es,Ms,ws,yg,Sg,Eg,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};pi.getNormal(Es,Ms,ws,d.normal),u.face=d}return u}class on extends Hi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(d,2));function x(y,p,f,g,v,E,R,b,A,L,w){const S=E/A,C=R/L,V=E/2,F=R/2,H=b/2,q=A+1,z=L+1;let $=0,I=0;const K=new B;for(let J=0;J<z;J++){const te=J*C-F;for(let Me=0;Me<q;Me++){const Ve=Me*S-V;K[y]=Ve*g,K[p]=te*v,K[f]=H,c.push(K.x,K.y,K.z),K[y]=0,K[p]=0,K[f]=b>0?1:-1,u.push(K.x,K.y,K.z),d.push(Me/A),d.push(1-J/L),$+=1}}for(let J=0;J<L;J++)for(let te=0;te<A;te++){const Me=h+te+q*J,Ve=h+te+q*(J+1),Y=h+(te+1)+q*(J+1),se=h+(te+1)+q*J;l.push(Me,Ve,se),l.push(Ve,Y,se),I+=6}a.addGroup(m,I,w),m+=I,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=lo(t[n]);for(const r in i)e[r]=i[r]}return e}function tb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function S_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const nb={clone:lo,merge:rn};var ib=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ib,this.fragmentShader=rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=tb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class E_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new B,Mg=new tt,wg=new tt;class pn extends E_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(Pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,Mg,wg),n.subVectors(wg,Mg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ts=-90,bs=1;class sb extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Ts,bs,e,n);r.layers=this.layers,this.add(r);const s=new pn(Ts,bs,e,n);s.layers=this.layers,this.add(s);const o=new pn(Ts,bs,e,n);o.layers=this.layers,this.add(o);const a=new pn(Ts,bs,e,n);a.layers=this.layers,this.add(a);const l=new pn(Ts,bs,e,n);l.layers=this.layers,this.add(l);const c=new pn(Ts,bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class M_ extends Mn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ro,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ob extends ss{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new M_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new on(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:mr});s.uniforms.tEquirect.value=n;const o=new et(r,s),a=n.minFilter;return n.minFilter===Xr&&(n.minFilter=ii),new sb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Yu=new B,ab=new B,lb=new $e;class Fr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yu.subVectors(i,n).cross(ab.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lb.getNormalMatrix(e),r=this.coplanarPoint(Yu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new rp,_l=new B;class ap{constructor(e=new Fr,n=new Fr,i=new Fr,r=new Fr,s=new Fr,o=new Fr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],x=r[9],y=r[10],p=r[11],f=r[12],g=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,p-m,E-f).normalize(),i[1].setComponents(l+s,h+c,p+m,E+f).normalize(),i[2].setComponents(l+o,h+u,p+x,E+g).normalize(),i[3].setComponents(l-o,h-u,p-x,E-g).normalize(),i[4].setComponents(l-a,h-d,p-y,E-v).normalize(),n===Li)i[5].setComponents(l+a,h+d,p+y,E+v).normalize();else if(n===Sc)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_l.x=r.normal.x>0?e.max.x:e.min.x,_l.y=r.normal.y>0?e.max.y:e.min.y,_l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function w_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function cb(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let m=0,x=h.length;m<x;m++){const y=h[m];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Sr extends Hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,m=[],x=[],y=[],p=[];for(let f=0;f<u;f++){const g=f*h-o;for(let v=0;v<c;v++){const E=v*d-s;x.push(E,-g,0),y.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const v=g+c*f,E=g+c*(f+1),R=g+1+c*(f+1),b=g+1+c*f;m.push(v,E,b),m.push(E,R,b)}this.setIndex(m),this.setAttribute("position",new Ln(x,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.widthSegments,e.heightSegments)}}var ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,db=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_b=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ib=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Vb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_A=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$A=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,v2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,H2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:ub,alphahash_pars_fragment:db,alphamap_fragment:fb,alphamap_pars_fragment:hb,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:vb,batching_pars_vertex:xb,batching_vertex:_b,begin_vertex:yb,beginnormal_vertex:Sb,bsdfs:Eb,iridescence_fragment:Mb,bumpmap_pars_fragment:wb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Ab,clipping_planes_vertex:Rb,color_fragment:Cb,color_pars_fragment:Pb,color_pars_vertex:Lb,color_vertex:Db,common:Ib,cube_uv_reflection_fragment:Nb,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Ob,displacementmap_vertex:Fb,emissivemap_fragment:kb,emissivemap_pars_fragment:Bb,colorspace_fragment:zb,colorspace_pars_fragment:Hb,envmap_fragment:Vb,envmap_common_pars_fragment:Wb,envmap_pars_fragment:Gb,envmap_pars_vertex:jb,envmap_physical_pars_fragment:nA,envmap_vertex:Xb,fog_vertex:$b,fog_pars_vertex:qb,fog_fragment:Yb,fog_pars_fragment:Kb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Jb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:eA,lights_pars_begin:tA,lights_toon_fragment:iA,lights_toon_pars_fragment:rA,lights_phong_fragment:sA,lights_phong_pars_fragment:oA,lights_physical_fragment:aA,lights_physical_pars_fragment:lA,lights_fragment_begin:cA,lights_fragment_maps:uA,lights_fragment_end:dA,logdepthbuf_fragment:fA,logdepthbuf_pars_fragment:hA,logdepthbuf_pars_vertex:pA,logdepthbuf_vertex:mA,map_fragment:gA,map_pars_fragment:vA,map_particle_fragment:xA,map_particle_pars_fragment:_A,metalnessmap_fragment:yA,metalnessmap_pars_fragment:SA,morphinstance_vertex:EA,morphcolor_vertex:MA,morphnormal_vertex:wA,morphtarget_pars_vertex:TA,morphtarget_vertex:bA,normal_fragment_begin:AA,normal_fragment_maps:RA,normal_pars_fragment:CA,normal_pars_vertex:PA,normal_vertex:LA,normalmap_pars_fragment:DA,clearcoat_normal_fragment_begin:IA,clearcoat_normal_fragment_maps:NA,clearcoat_pars_fragment:UA,iridescence_pars_fragment:OA,opaque_fragment:FA,packing:kA,premultiplied_alpha_fragment:BA,project_vertex:zA,dithering_fragment:HA,dithering_pars_fragment:VA,roughnessmap_fragment:WA,roughnessmap_pars_fragment:GA,shadowmap_pars_fragment:jA,shadowmap_pars_vertex:XA,shadowmap_vertex:$A,shadowmask_pars_fragment:qA,skinbase_vertex:YA,skinning_pars_vertex:KA,skinning_vertex:ZA,skinnormal_vertex:JA,specularmap_fragment:QA,specularmap_pars_fragment:e2,tonemapping_fragment:t2,tonemapping_pars_fragment:n2,transmission_fragment:i2,transmission_pars_fragment:r2,uv_pars_fragment:s2,uv_pars_vertex:o2,uv_vertex:a2,worldpos_vertex:l2,background_vert:c2,background_frag:u2,backgroundCube_vert:d2,backgroundCube_frag:f2,cube_vert:h2,cube_frag:p2,depth_vert:m2,depth_frag:g2,distanceRGBA_vert:v2,distanceRGBA_frag:x2,equirect_vert:_2,equirect_frag:y2,linedashed_vert:S2,linedashed_frag:E2,meshbasic_vert:M2,meshbasic_frag:w2,meshlambert_vert:T2,meshlambert_frag:b2,meshmatcap_vert:A2,meshmatcap_frag:R2,meshnormal_vert:C2,meshnormal_frag:P2,meshphong_vert:L2,meshphong_frag:D2,meshphysical_vert:I2,meshphysical_frag:N2,meshtoon_vert:U2,meshtoon_frag:O2,points_vert:F2,points_frag:k2,shadow_vert:B2,shadow_frag:z2,sprite_vert:H2,sprite_frag:V2},me={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},fi={basic:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:rn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:rn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new nt(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:rn([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:rn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:rn([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:rn([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:rn([me.common,me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:rn([me.lights,me.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};fi.physical={uniforms:rn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const yl={r:0,b:0,g:0},Lr=new Gn,W2=new Mt;function G2(t,e,n,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function x(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const E=x(g);E===null?f(a,l):E&&E.isColor&&(f(E,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,v){const E=x(v);E&&(E.isCubeTexture||E.mapping===Wc)?(u===void 0&&(u=new et(new on(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:lo(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Lr.copy(v.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(W2.makeRotationFromEuler(Lr)),u.material.toneMapped=lt.getTransfer(E.colorSpace)!==gt,(d!==E||h!==E.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new et(new Sr(2,2),new yr({name:"BackgroundMaterial",uniforms:lo(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(E.colorSpace)!==gt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,v){g.getRGB(yl,S_(t)),i.buffers.color.setClear(yl.r,yl.g,yl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(a,l)},render:y,addToRenderList:p}}function j2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,C,V,F,H){let q=!1;const z=d(F,V,C);s!==z&&(s=z,c(s.object)),q=m(S,F,V,H),q&&x(S,F,V,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(S,C,V,F),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,C,V){const F=V.wireframe===!0;let H=i[S.id];H===void 0&&(H={},i[S.id]=H);let q=H[C.id];q===void 0&&(q={},H[C.id]=q);let z=q[F];return z===void 0&&(z=h(l()),q[F]=z),z}function h(S){const C=[],V=[],F=[];for(let H=0;H<n;H++)C[H]=0,V[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:F,object:S,attributes:{},index:null}}function m(S,C,V,F){const H=s.attributes,q=C.attributes;let z=0;const $=V.getAttributes();for(const I in $)if($[I].location>=0){const J=H[I];let te=q[I];if(te===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),J===void 0||J.attribute!==te||te&&J.data!==te.data)return!0;z++}return s.attributesNum!==z||s.index!==F}function x(S,C,V,F){const H={},q=C.attributes;let z=0;const $=V.getAttributes();for(const I in $)if($[I].location>=0){let J=q[I];J===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const te={};te.attribute=J,J&&J.data&&(te.data=J.data),H[I]=te,z++}s.attributes=H,s.attributesNum=z,s.index=F}function y(){const S=s.newAttributes;for(let C=0,V=S.length;C<V;C++)S[C]=0}function p(S){f(S,0)}function f(S,C){const V=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;V[S]=1,F[S]===0&&(t.enableVertexAttribArray(S),F[S]=1),H[S]!==C&&(t.vertexAttribDivisor(S,C),H[S]=C)}function g(){const S=s.newAttributes,C=s.enabledAttributes;for(let V=0,F=C.length;V<F;V++)C[V]!==S[V]&&(t.disableVertexAttribArray(V),C[V]=0)}function v(S,C,V,F,H,q,z){z===!0?t.vertexAttribIPointer(S,C,V,H,q):t.vertexAttribPointer(S,C,V,F,H,q)}function E(S,C,V,F){y();const H=F.attributes,q=V.getAttributes(),z=C.defaultAttributeValues;for(const $ in q){const I=q[$];if(I.location>=0){let K=H[$];if(K===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const J=K.normalized,te=K.itemSize,Me=e.get(K);if(Me===void 0)continue;const Ve=Me.buffer,Y=Me.type,se=Me.bytesPerElement,ne=Y===t.INT||Y===t.UNSIGNED_INT||K.gpuType===Zh;if(K.isInterleavedBufferAttribute){const ue=K.data,De=ue.stride,He=K.offset;if(ue.isInstancedInterleavedBuffer){for(let Ge=0;Ge<I.locationSize;Ge++)f(I.location+Ge,ue.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ge=0;Ge<I.locationSize;Ge++)p(I.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let Ge=0;Ge<I.locationSize;Ge++)v(I.location+Ge,te/I.locationSize,Y,J,De*se,(He+te/I.locationSize*Ge)*se,ne)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<I.locationSize;ue++)f(I.location+ue,K.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<I.locationSize;ue++)p(I.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let ue=0;ue<I.locationSize;ue++)v(I.location+ue,te/I.locationSize,Y,J,te*se,te/I.locationSize*ue*se,ne)}}else if(z!==void 0){const J=z[$];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(I.location,J);break;case 3:t.vertexAttrib3fv(I.location,J);break;case 4:t.vertexAttrib4fv(I.location,J);break;default:t.vertexAttrib1fv(I.location,J)}}}}g()}function R(){L();for(const S in i){const C=i[S];for(const V in C){const F=C[V];for(const H in F)u(F[H].object),delete F[H];delete C[V]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const V in C){const F=C[V];for(const H in F)u(F[H].object),delete F[H];delete C[V]}delete i[S.id]}function A(S){for(const C in i){const V=i[C];if(V[S.id]===void 0)continue;const F=V[S.id];for(const H in F)u(F[H].object),delete F[H];delete V[S.id]}}function L(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:p,disableUnusedAttributes:g}}function X2(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let x=0;x<d;x++)m+=u[x];n.update(m,i,1)}function l(c,u,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],u[x],h[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let x=0;for(let y=0;y<d;y++)x+=u[y];for(let y=0;y<h.length;y++)n.update(x,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==ri&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ki&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Pi&&!A)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:E,maxSamples:R}}function q2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Fr,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){const x=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const g=s?0:i,v=g*4;let E=f.clippingState||null;l.value=E,E=u(x,h,v,m);for(let R=0;R!==v;++R)E[R]=n[R];f.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,x){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,x!==!0||p===null){const f=m+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,E=m;v!==y;++v,E+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Y2(t){let e=new WeakMap;function n(o,a){return a===uf?o.mapping=ro:a===df&&(o.mapping=so),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uf||a===df)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ob(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class T_ extends E_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,Tg=[.125,.215,.35,.446,.526,.582],zr=20,Ku=new T_,bg=new nt;let Zu=null,Ju=0,Qu=0,ed=!1;const kr=(1+Math.sqrt(5))/2,As=1/kr,Ag=[new B(-kr,As,0),new B(kr,As,0),new B(-As,0,kr),new B(As,0,kr),new B(0,kr,-As),new B(0,kr,As),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Zu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,Ju,Qu),this._renderer.xr.enabled=ed,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Pa,format:ri,colorSpace:br,depthBuffer:!1},r=Cg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K2(s)),this._blurMaterial=Z2(s,e,n)}return r}_compileMaterial(e){const n=new et(this._lodPlanes[0],e);this._renderer.compile(n,Ku)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(bg),u.toneMapping=gr,u.autoClear=!1;const m=new op({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),x=new et(new on,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(bg),y=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Sl(r,g*v,f>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ro||e.mapping===so;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ku)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ag[(r-s-1)%Ag.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new et(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zr-1),y=s/x,p=isFinite(s)?1+Math.floor(u*y):zr;p>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zr}`);const f=[];let g=0;for(let A=0;A<zr;++A){const L=A/y,w=Math.exp(-L*L/2);f.push(w),A===0?g+=w:A<p&&(g+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const E=this._sizeLods[r],R=3*E*(r>v-zs?r-v+zs:0),b=4*(this._cubeSize-E);Sl(n,R,b,3*E,2*E),l.setRenderTarget(n),l.render(d,Ku)}}function K2(t){const e=[],n=[],i=[];let r=t;const s=t-zs+1+Tg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-zs?l=Tg[o-t+zs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,x=6,y=3,p=2,f=1,g=new Float32Array(y*x*m),v=new Float32Array(p*x*m),E=new Float32Array(f*x*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,L=b>2?0:-1,w=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];g.set(w,y*x*b),v.set(h,p*x*b);const S=[b,b,b,b,b,b];E.set(S,f*x*b)}const R=new Hi;R.setAttribute("position",new vi(g,y)),R.setAttribute("uv",new vi(v,p)),R.setAttribute("faceIndex",new vi(E,f)),e.push(R),r>zs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cg(t,e,n){const i=new ss(t,e,n);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Z2(t,e,n){const i=new Float32Array(zr),r=new B(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Pg(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Lg(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function lp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uf||l===df,u=l===ro||l===so;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Rg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Rg(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Q2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&p_("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function eR(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const y=h.morphAttributes[x];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const y=m[x];for(let p=0,f=y.length;p<f;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,x=d.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let v=0,E=g.length;v<E;v+=3){const R=g[v+0],b=g[v+1],A=g[v+2];h.push(R,b,b,A,A,R)}}else if(x!==void 0){const g=x.array;y=x.version;for(let v=0,E=g.length/3-1;v<E;v+=3){const R=v+0,b=v+1,A=v+2;h.push(R,b,b,A,A,R)}}else return;const p=new(h_(h)?y_:__)(h,1);p.version=y;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function tR(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,x){x!==0&&(t.drawElementsInstanced(i,m,s,h*o,x),n.update(m,i,x))}function u(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,x);let p=0;for(let f=0;f<x;f++)p+=m[f];n.update(p,i,1)}function d(h,m,x,y){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/o,m[f],y[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,y,0,x);let f=0;for(let g=0;g<x;g++)f+=m[g];for(let g=0;g<y.length;g++)n.update(f,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function nR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function iR(t,e,n){const i=new WeakMap,r=new vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let E=0;x===!0&&(E=1),y===!0&&(E=2),p===!0&&(E=3);let R=a.attributes.position.count*E,b=1;R>e.maxTextureSize&&(b=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*b*4*d),L=new g_(A,R,b,d);L.type=Pi,L.needsUpdate=!0;const w=E*4;for(let C=0;C<d;C++){const V=f[C],F=g[C],H=v[C],q=R*b*4*C;for(let z=0;z<V.count;z++){const $=z*w;x===!0&&(r.fromBufferAttribute(V,z),A[q+$+0]=r.x,A[q+$+1]=r.y,A[q+$+2]=r.z,A[q+$+3]=0),y===!0&&(r.fromBufferAttribute(F,z),A[q+$+4]=r.x,A[q+$+5]=r.y,A[q+$+6]=r.z,A[q+$+7]=0),p===!0&&(r.fromBufferAttribute(H,z),A[q+$+8]=r.x,A[q+$+9]=r.y,A[q+$+10]=r.z,A[q+$+11]=H.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new tt(R,b)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const y=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function rR(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class b_ extends Mn{constructor(e,n,i,r,s,o,a,l,c,u=qs){if(u!==qs&&u!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===qs&&(i=rs),i===void 0&&u===ao&&(i=oo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const A_=new Mn,Dg=new b_(1,1),R_=new g_,C_=new GT,P_=new M_,Ig=[],Ng=[],Ug=new Float32Array(16),Og=new Float32Array(9),Fg=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ig[r];if(s===void 0&&(s=new Float32Array(r),Ig[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jc(t,e){let n=Ng[e];n===void 0&&(n=new Int32Array(e),Ng[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function aR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function lR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function cR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Fg.set(i),t.uniformMatrix2fv(this.addr,!1,Fg),Bt(n,i)}}function uR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Og.set(i),t.uniformMatrix3fv(this.addr,!1,Og),Bt(n,i)}}function dR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Ug.set(i),t.uniformMatrix4fv(this.addr,!1,Ug),Bt(n,i)}}function fR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function pR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function mR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function gR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function xR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function _R(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function yR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Dg.compareFunction=f_,s=Dg):s=A_,n.setTexture2D(e||s,r)}function SR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||C_,r)}function ER(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||P_,r)}function MR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||R_,r)}function wR(t){switch(t){case 5126:return sR;case 35664:return oR;case 35665:return aR;case 35666:return lR;case 35674:return cR;case 35675:return uR;case 35676:return dR;case 5124:case 35670:return fR;case 35667:case 35671:return hR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return gR;case 36294:return vR;case 36295:return xR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return ER;case 36289:case 36303:case 36311:case 36292:return MR}}function TR(t,e){t.uniform1fv(this.addr,e)}function bR(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function AR(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function RR(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function CR(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function PR(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LR(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DR(t,e){t.uniform1iv(this.addr,e)}function IR(t,e){t.uniform2iv(this.addr,e)}function NR(t,e){t.uniform3iv(this.addr,e)}function UR(t,e){t.uniform4iv(this.addr,e)}function OR(t,e){t.uniform1uiv(this.addr,e)}function FR(t,e){t.uniform2uiv(this.addr,e)}function kR(t,e){t.uniform3uiv(this.addr,e)}function BR(t,e){t.uniform4uiv(this.addr,e)}function zR(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||A_,s[o])}function HR(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||C_,s[o])}function VR(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||P_,s[o])}function WR(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||R_,s[o])}function GR(t){switch(t){case 5126:return TR;case 35664:return bR;case 35665:return AR;case 35666:return RR;case 35674:return CR;case 35675:return PR;case 35676:return LR;case 5124:case 35670:return DR;case 35667:case 35671:return IR;case 35668:case 35672:return NR;case 35669:case 35673:return UR;case 5125:return OR;case 36294:return FR;case 36295:return kR;case 36296:return BR;case 35678:case 36198:case 36298:case 36306:case 35682:return zR;case 35679:case 36299:case 36307:return HR;case 35680:case 36300:case 36308:case 36293:return VR;case 36289:case 36303:case 36311:case 36292:return WR}}class jR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wR(n.type)}}class XR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GR(n.type)}}class $R{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const td=/(\w+)(\])?(\[|\.)?/g;function kg(t,e){t.seq.push(e),t.map[e.id]=e}function qR(t,e,n){const i=t.name,r=i.length;for(td.lastIndex=0;;){const s=td.exec(i),o=td.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kg(n,c===void 0?new jR(a,t,e):new XR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new $R(a),kg(n,d)),n=d}}}class Vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);qR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Bg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const YR=37297;let KR=0;function ZR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function JR(t){const e=lt.getPrimaries(lt.workingColorSpace),n=lt.getPrimaries(t);let i;switch(e===n?i="":e===yc&&n===_c?i="LinearDisplayP3ToLinearSRGB":e===_c&&n===yc&&(i="LinearSRGBToLinearDisplayP3"),t){case br:case Gc:return[i,"LinearTransferOETF"];case di:case ip:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function zg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ZR(t.getShaderSource(e),o)}else return r}function QR(t,e){const n=JR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function eC(t,e){let n;switch(e){case xT:n="Linear";break;case _T:n="Reinhard";break;case yT:n="OptimizedCineon";break;case ST:n="ACESFilmic";break;case MT:n="AgX";break;case wT:n="Neutral";break;case ET:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function tC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function nC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function iC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Wo(t){return t!==""}function Hg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(t){return t.replace(rC,oC)}const sC=new Map;function oC(t,e){let n=Xe[e];if(n===void 0){const i=sC.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hf(n)}const aC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(t){return t.replace(aC,lC)}function lC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Qx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Gw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function uC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function fC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Kh:e="ENVMAP_BLENDING_MULTIPLY";break;case gT:e="ENVMAP_BLENDING_MIX";break;case vT:e="ENVMAP_BLENDING_ADD";break}return e}function hC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function pC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=cC(n),c=uC(n),u=dC(n),d=fC(n),h=hC(n),m=tC(n),x=nC(s),y=r.createProgram();let p,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Wo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Wo).join(`
`),f.length>0&&(f+=`
`)):(p=[Gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),f=[Gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==gr?eC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,QR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Hf(o),o=Hg(o,n),o=Vg(o,n),a=Hf(a),a=Hg(a,n),a=Vg(a,n),o=Wg(o),a=Wg(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=g+p+o,E=g+f+a,R=Bg(r,r.VERTEX_SHADER,v),b=Bg(r,r.FRAGMENT_SHADER,E);r.attachShader(y,R),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(C){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(y).trim(),F=r.getShaderInfoLog(R).trim(),H=r.getShaderInfoLog(b).trim();let q=!0,z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,b);else{const $=zg(r,R,"vertex"),I=zg(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+$+`
`+I)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||H==="")&&(z=!1);z&&(C.diagnostics={runnable:q,programLog:V,vertexShader:{log:F,prefix:p},fragmentShader:{log:H,prefix:f}})}r.deleteShader(R),r.deleteShader(b),L=new Vl(r,y),w=iC(r,y)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,YR)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KR++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=b,this}let mC=0;class gC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vC(e),n.set(e,i)),i}}class vC{constructor(e){this.id=mC++,this.code=e,this.usedTimes=0}}function xC(t,e,n,i,r,s,o){const a=new sp,l=new gC,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,S,C,V,F){const H=V.fog,q=F.geometry,z=w.isMeshStandardMaterial?V.environment:null,$=(w.isMeshStandardMaterial?n:e).get(w.envMap||z),I=$&&$.mapping===Wc?$.image.height:null,K=x[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const J=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,te=J!==void 0?J.length:0;let Me=0;q.morphAttributes.position!==void 0&&(Me=1),q.morphAttributes.normal!==void 0&&(Me=2),q.morphAttributes.color!==void 0&&(Me=3);let Ve,Y,se,ne;if(K){const Le=fi[K];Ve=Le.vertexShader,Y=Le.fragmentShader}else Ve=w.vertexShader,Y=w.fragmentShader,l.update(w),se=l.getVertexShaderID(w),ne=l.getFragmentShaderID(w);const ue=t.getRenderTarget(),De=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,Ge=!!w.map,ut=!!w.matcap,D=!!$,pt=!!w.aoMap,qe=!!w.lightMap,je=!!w.bumpMap,re=!!w.normalMap,Ze=!!w.displacementMap,Ce=!!w.emissiveMap,Pe=!!w.metalnessMap,P=!!w.roughnessMap,M=w.anisotropy>0,W=w.clearcoat>0,ie=w.dispersion>0,ae=w.iridescence>0,Q=w.sheen>0,be=w.transmission>0,fe=M&&!!w.anisotropyMap,ve=W&&!!w.clearcoatMap,ke=W&&!!w.clearcoatNormalMap,ce=W&&!!w.clearcoatRoughnessMap,_e=ae&&!!w.iridescenceMap,Ye=ae&&!!w.iridescenceThicknessMap,Ue=Q&&!!w.sheenColorMap,ye=Q&&!!w.sheenRoughnessMap,Be=!!w.specularMap,We=!!w.specularColorMap,dt=!!w.specularIntensityMap,U=be&&!!w.transmissionMap,de=be&&!!w.thicknessMap,Z=!!w.gradientMap,ee=!!w.alphaMap,pe=w.alphaTest>0,Ie=!!w.alphaHash,Je=!!w.extensions;let le=gr;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(le=t.toneMapping);const Ae={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:Ve,fragmentShader:Y,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:He,batchingColor:He&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:br,alphaToCoverage:!!w.alphaToCoverage,map:Ge,matcap:ut,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:I,aoMap:pt,lightMap:qe,bumpMap:je,normalMap:re,displacementMap:h&&Ze,emissiveMap:Ce,normalMapObjectSpace:re&&w.normalMapType===RT,normalMapTangentSpace:re&&w.normalMapType===d_,metalnessMap:Pe,roughnessMap:P,anisotropy:M,anisotropyMap:fe,clearcoat:W,clearcoatMap:ve,clearcoatNormalMap:ke,clearcoatRoughnessMap:ce,dispersion:ie,iridescence:ae,iridescenceMap:_e,iridescenceThicknessMap:Ye,sheen:Q,sheenColorMap:Ue,sheenRoughnessMap:ye,specularMap:Be,specularColorMap:We,specularIntensityMap:dt,transmission:be,transmissionMap:U,thicknessMap:de,gradientMap:Z,opaque:w.transparent===!1&&w.blending===$s&&w.alphaToCoverage===!1,alphaMap:ee,alphaTest:pe,alphaHash:Ie,combine:w.combine,mapUv:Ge&&y(w.map.channel),aoMapUv:pt&&y(w.aoMap.channel),lightMapUv:qe&&y(w.lightMap.channel),bumpMapUv:je&&y(w.bumpMap.channel),normalMapUv:re&&y(w.normalMap.channel),displacementMapUv:Ze&&y(w.displacementMap.channel),emissiveMapUv:Ce&&y(w.emissiveMap.channel),metalnessMapUv:Pe&&y(w.metalnessMap.channel),roughnessMapUv:P&&y(w.roughnessMap.channel),anisotropyMapUv:fe&&y(w.anisotropyMap.channel),clearcoatMapUv:ve&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:ke&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:ye&&y(w.sheenRoughnessMap.channel),specularMapUv:Be&&y(w.specularMap.channel),specularColorMapUv:We&&y(w.specularColorMap.channel),specularIntensityMapUv:dt&&y(w.specularIntensityMap.channel),transmissionMapUv:U&&y(w.transmissionMap.channel),thicknessMapUv:de&&y(w.thicknessMap.channel),alphaMapUv:ee&&y(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(re||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(Ge||ee),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&lt.getTransfer(w.map.colorSpace)===gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ai,flipSided:w.side===En,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Je&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&w.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function f(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)S.push(C),S.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(g(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function E(w){const S=x[w.type];let C;if(S){const V=fi[S];C=nb.clone(V.uniforms)}else C=w.uniforms;return C}function R(w,S){let C;for(let V=0,F=u.length;V<F;V++){const H=u[V];if(H.cacheKey===S){C=H,++C.usedTimes;break}}return C===void 0&&(C=new pC(t,S,w,s),u.push(C)),C}function b(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:R,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:L}}function _C(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function yC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function jg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,x,y,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:x,renderOrder:d.renderOrder,z:y,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=y,f.group=p),e++,f}function a(d,h,m,x,y,p){const f=o(d,h,m,x,y,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,x,y,p){const f=o(d,h,m,x,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||yC),i.length>1&&i.sort(h||jg),r.length>1&&r.sort(h||jg)}function u(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function SC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Xg,t.set(i,[o])):r>=s.length?(o=new Xg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function EC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new nt};break;case"SpotLight":n={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function MC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let wC=0;function TC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function bC(t){const e=new EC,n=MC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new Mt,o=new Mt;function a(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,x=0,y=0,p=0,f=0,g=0,v=0,E=0,R=0,b=0,A=0;c.sort(TC);for(let w=0,S=c.length;w<S;w++){const C=c[w],V=C.color,F=C.intensity,H=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=V.r*F,d+=V.g*F,h+=V.b*F;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],F);A++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,I=n.get(C);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=C.shadow.matrix,g++}i.directional[m]=z,m++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(V).multiplyScalar(F),z.distance=H,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[y]=z;const $=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,$.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[y]=$.matrix,C.castShadow){const I=n.get(C);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=q,E++}y++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(V).multiplyScalar(F),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=z,p++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const $=C.shadow,I=n.get(C);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,I.shadowCameraNear=$.camera.near,I.shadowCameraFar=$.camera.far,i.pointShadow[x]=I,i.pointShadowMap[x]=q,i.pointShadowMatrix[x]=C.shadow.matrix,v++}i.point[x]=z,x++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(F),z.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[f]=z,f++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==m||L.pointLength!==x||L.spotLength!==y||L.rectAreaLength!==p||L.hemiLength!==f||L.numDirectionalShadows!==g||L.numPointShadows!==v||L.numSpotShadows!==E||L.numSpotMaps!==R||L.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=p,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,L.directionalLength=m,L.pointLength=x,L.spotLength=y,L.rectAreaLength=p,L.hemiLength=f,L.numDirectionalShadows=g,L.numPointShadows=v,L.numSpotShadows=E,L.numSpotMaps=R,L.numLightProbes=A,i.version=wC++)}function l(c,u){let d=0,h=0,m=0,x=0,y=0;const p=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const v=c[f];if(v.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(v.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function $g(t){const e=new bC(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new $g(t),e.set(r,[a])):s>=o.length?(a=new $g(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class RC extends Ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CC extends Ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DC(t,e,n){let i=new ap;const r=new tt,s=new tt,o=new vt,a=new RC({depthPacking:AT}),l=new CC,c={},u=n.maxTextureSize,d={[Fi]:En,[En]:Fi,[Ai]:Ai},h=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:PC,fragmentShader:LC}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Hi;x.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new et(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qx;let f=this.type;this.render=function(b,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),V=t.state;V.setBlending(mr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=f!==wi&&this.type===wi,H=f===wi&&this.type!==wi;for(let q=0,z=b.length;q<z;q++){const $=b[q],I=$.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const K=I.getFrameExtents();if(r.multiply(K),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,I.mapSize.y=s.y)),I.map===null||F===!0||H===!0){const te=this.type!==wi?{minFilter:zn,magFilter:zn}:{};I.map!==null&&I.map.dispose(),I.map=new ss(r.x,r.y,te),I.map.texture.name=$.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const J=I.getViewportCount();for(let te=0;te<J;te++){const Me=I.getViewport(te);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),V.viewport(o),I.updateMatrices($,te),i=I.getFrustum(),E(A,L,I.camera,$,this.type)}I.isPointLightShadow!==!0&&this.type===wi&&g(I,L),I.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(w,S,C)};function g(b,A){const L=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ss(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,L,h,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,L,m,y,null)}function v(b,A,L,w){let S=null;const C=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)S=C;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=S.uuid,F=A.uuid;let H=c[V];H===void 0&&(H={},c[V]=H);let q=H[F];q===void 0&&(q=S.clone(),H[F]=q,A.addEventListener("dispose",R)),S=q}if(S.visible=A.visible,S.wireframe=A.wireframe,w===wi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=t.properties.get(S);V.light=L}return S}function E(b,A,L,w,S){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===wi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const F=e.update(b),H=b.material;if(Array.isArray(H)){const q=F.groups;for(let z=0,$=q.length;z<$;z++){const I=q[z],K=H[I.materialIndex];if(K&&K.visible){const J=v(b,K,w,S);b.onBeforeShadow(t,b,A,L,F,J,I),t.renderBufferDirect(L,null,F,J,b,I),b.onAfterShadow(t,b,A,L,F,J,I)}}}else if(H.visible){const q=v(b,H,w,S);b.onBeforeShadow(t,b,A,L,F,q,null),t.renderBufferDirect(L,null,F,q,b,null),b.onAfterShadow(t,b,A,L,F,q,null)}}const V=b.children;for(let F=0,H=V.length;F<H;F++)E(V[F],A,L,w,S)}function R(b){b.target.removeEventListener("dispose",R);for(const L in c){const w=c[L],S=b.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function IC(t){function e(){let U=!1;const de=new vt;let Z=null;const ee=new vt(0,0,0,0);return{setMask:function(pe){Z!==pe&&!U&&(t.colorMask(pe,pe,pe,pe),Z=pe)},setLocked:function(pe){U=pe},setClear:function(pe,Ie,Je,le,Ae){Ae===!0&&(pe*=le,Ie*=le,Je*=le),de.set(pe,Ie,Je,le),ee.equals(de)===!1&&(t.clearColor(pe,Ie,Je,le),ee.copy(de))},reset:function(){U=!1,Z=null,ee.set(-1,0,0,0)}}}function n(){let U=!1,de=null,Z=null,ee=null;return{setTest:function(pe){pe?ne(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(pe){de!==pe&&!U&&(t.depthMask(pe),de=pe)},setFunc:function(pe){if(Z!==pe){switch(pe){case cT:t.depthFunc(t.NEVER);break;case uT:t.depthFunc(t.ALWAYS);break;case dT:t.depthFunc(t.LESS);break;case vc:t.depthFunc(t.LEQUAL);break;case fT:t.depthFunc(t.EQUAL);break;case hT:t.depthFunc(t.GEQUAL);break;case pT:t.depthFunc(t.GREATER);break;case mT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=pe}},setLocked:function(pe){U=pe},setClear:function(pe){ee!==pe&&(t.clearDepth(pe),ee=pe)},reset:function(){U=!1,de=null,Z=null,ee=null}}}function i(){let U=!1,de=null,Z=null,ee=null,pe=null,Ie=null,Je=null,le=null,Ae=null;return{setTest:function(Le){U||(Le?ne(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Le){de!==Le&&!U&&(t.stencilMask(Le),de=Le)},setFunc:function(Le,Rt,Ct){(Z!==Le||ee!==Rt||pe!==Ct)&&(t.stencilFunc(Le,Rt,Ct),Z=Le,ee=Rt,pe=Ct)},setOp:function(Le,Rt,Ct){(Ie!==Le||Je!==Rt||le!==Ct)&&(t.stencilOp(Le,Rt,Ct),Ie=Le,Je=Rt,le=Ct)},setLocked:function(Le){U=Le},setClear:function(Le){Ae!==Le&&(t.clearStencil(Le),Ae=Le)},reset:function(){U=!1,de=null,Z=null,ee=null,pe=null,Ie=null,Je=null,le=null,Ae=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],m=null,x=!1,y=null,p=null,f=null,g=null,v=null,E=null,R=null,b=new nt(0,0,0),A=0,L=!1,w=null,S=null,C=null,V=null,F=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),q=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=z>=2);let I=null,K={};const J=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),Me=new vt().fromArray(J),Ve=new vt().fromArray(te);function Y(U,de,Z,ee){const pe=new Uint8Array(4),Ie=t.createTexture();t.bindTexture(U,Ie),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<Z;Je++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(de+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return Ie}const se={};se[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(t.DEPTH_TEST),s.setFunc(vc),je(!1),re(eg),ne(t.CULL_FACE),pt(mr);function ne(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function ue(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function De(U,de){return u[U]!==de?(t.bindFramebuffer(U,de),u[U]=de,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function He(U,de){let Z=h,ee=!1;if(U){Z=d.get(de),Z===void 0&&(Z=[],d.set(de,Z));const pe=U.textures;if(Z.length!==pe.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Ie=0,Je=pe.length;Ie<Je;Ie++)Z[Ie]=t.COLOR_ATTACHMENT0+Ie;Z.length=pe.length,ee=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,ee=!0);ee&&t.drawBuffers(Z)}function Ge(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const ut={[Br]:t.FUNC_ADD,[Xw]:t.FUNC_SUBTRACT,[$w]:t.FUNC_REVERSE_SUBTRACT};ut[qw]=t.MIN,ut[Yw]=t.MAX;const D={[Kw]:t.ZERO,[Zw]:t.ONE,[Jw]:t.SRC_COLOR,[lf]:t.SRC_ALPHA,[rT]:t.SRC_ALPHA_SATURATE,[nT]:t.DST_COLOR,[eT]:t.DST_ALPHA,[Qw]:t.ONE_MINUS_SRC_COLOR,[cf]:t.ONE_MINUS_SRC_ALPHA,[iT]:t.ONE_MINUS_DST_COLOR,[tT]:t.ONE_MINUS_DST_ALPHA,[sT]:t.CONSTANT_COLOR,[oT]:t.ONE_MINUS_CONSTANT_COLOR,[aT]:t.CONSTANT_ALPHA,[lT]:t.ONE_MINUS_CONSTANT_ALPHA};function pt(U,de,Z,ee,pe,Ie,Je,le,Ae,Le){if(U===mr){x===!0&&(ue(t.BLEND),x=!1);return}if(x===!1&&(ne(t.BLEND),x=!0),U!==jw){if(U!==y||Le!==L){if((p!==Br||v!==Br)&&(t.blendEquation(t.FUNC_ADD),p=Br,v=Br),Le)switch(U){case $s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case af:t.blendFunc(t.ONE,t.ONE);break;case tg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ng:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case $s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case af:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case tg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ng:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,g=null,E=null,R=null,b.set(0,0,0),A=0,y=U,L=Le}return}pe=pe||de,Ie=Ie||Z,Je=Je||ee,(de!==p||pe!==v)&&(t.blendEquationSeparate(ut[de],ut[pe]),p=de,v=pe),(Z!==f||ee!==g||Ie!==E||Je!==R)&&(t.blendFuncSeparate(D[Z],D[ee],D[Ie],D[Je]),f=Z,g=ee,E=Ie,R=Je),(le.equals(b)===!1||Ae!==A)&&(t.blendColor(le.r,le.g,le.b,Ae),b.copy(le),A=Ae),y=U,L=!1}function qe(U,de){U.side===Ai?ue(t.CULL_FACE):ne(t.CULL_FACE);let Z=U.side===En;de&&(Z=!Z),je(Z),U.blending===$s&&U.transparent===!1?pt(mr):pt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ee=U.stencilWrite;o.setTest(ee),ee&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function re(U){U!==Vw?(ne(t.CULL_FACE),U!==S&&(U===eg?t.cullFace(t.BACK):U===Ww?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),S=U}function Ze(U){U!==C&&(q&&t.lineWidth(U),C=U)}function Ce(U,de,Z){U?(ne(t.POLYGON_OFFSET_FILL),(V!==de||F!==Z)&&(t.polygonOffset(de,Z),V=de,F=Z)):ue(t.POLYGON_OFFSET_FILL)}function Pe(U){U?ne(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function P(U){U===void 0&&(U=t.TEXTURE0+H-1),I!==U&&(t.activeTexture(U),I=U)}function M(U,de,Z){Z===void 0&&(I===null?Z=t.TEXTURE0+H-1:Z=I);let ee=K[Z];ee===void 0&&(ee={type:void 0,texture:void 0},K[Z]=ee),(ee.type!==U||ee.texture!==de)&&(I!==Z&&(t.activeTexture(Z),I=Z),t.bindTexture(U,de||se[U]),ee.type=U,ee.texture=de)}function W(){const U=K[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(U){Me.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Me.copy(U))}function ye(U){Ve.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function Be(U,de){let Z=l.get(de);Z===void 0&&(Z=new WeakMap,l.set(de,Z));let ee=Z.get(U);ee===void 0&&(ee=t.getUniformBlockIndex(de,U.name),Z.set(U,ee))}function We(U,de){const ee=l.get(de).get(U);a.get(de)!==ee&&(t.uniformBlockBinding(de,ee,U.__bindingPointIndex),a.set(de,ee))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,K={},u={},d=new WeakMap,h=[],m=null,x=!1,y=null,p=null,f=null,g=null,v=null,E=null,R=null,b=new nt(0,0,0),A=0,L=!1,w=null,S=null,C=null,V=null,F=null,Me.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ne,disable:ue,bindFramebuffer:De,drawBuffers:He,useProgram:Ge,setBlending:pt,setMaterial:qe,setFlipSided:je,setCullFace:re,setLineWidth:Ze,setPolygonOffset:Ce,setScissorTest:Pe,activeTexture:P,bindTexture:M,unbindTexture:W,compressedTexImage2D:ie,compressedTexImage3D:ae,texImage2D:_e,texImage3D:Ye,updateUBOMapping:Be,uniformBlockBinding:We,texStorage2D:ke,texStorage3D:ce,texSubImage2D:Q,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ue,viewport:ye,reset:dt}}function qg(t,e,n,i){const r=NC(i);switch(n){case r_:return t*e;case o_:return t*e;case a_:return t*e*2;case l_:return t*e/r.components*r.byteLength;case ep:return t*e/r.components*r.byteLength;case c_:return t*e*2/r.components*r.byteLength;case tp:return t*e*2/r.components*r.byteLength;case s_:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case np:return t*e*4/r.components*r.byteLength;case Fl:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bl:case zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mf:case vf:return Math.max(t,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(t,8)*Math.max(e,8)/2;case xf:case _f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case wf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Af:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Cf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case If:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Uf:case Of:return Math.ceil(t/4)*Math.ceil(e/4)*16;case u_:case Ff:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kf:case Bf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function NC(t){switch(t){case ki:case t_:return{byteLength:1,components:1};case ya:case n_:case Pa:return{byteLength:2,components:1};case Jh:case Qh:return{byteLength:2,components:4};case rs:case Zh:case Pi:return{byteLength:4,components:1};case i_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function UC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,M){return m?new OffscreenCanvas(P,M):Ec("canvas")}function y(P,M,W){let ie=1;const ae=Pe(P);if((ae.width>W||ae.height>W)&&(ie=W/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(ie*ae.width),be=Math.floor(ie*ae.height);d===void 0&&(d=x(Q,be));const fe=M?x(Q,be):d;return fe.width=Q,fe.height=be,fe.getContext("2d").drawImage(P,0,0,Q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Q+"x"+be+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==zn&&P.minFilter!==ii}function f(P){t.generateMipmap(P)}function g(P,M,W,ie,ae=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=M;if(M===t.RED&&(W===t.FLOAT&&(Q=t.R32F),W===t.HALF_FLOAT&&(Q=t.R16F),W===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.R8UI),W===t.UNSIGNED_SHORT&&(Q=t.R16UI),W===t.UNSIGNED_INT&&(Q=t.R32UI),W===t.BYTE&&(Q=t.R8I),W===t.SHORT&&(Q=t.R16I),W===t.INT&&(Q=t.R32I)),M===t.RG&&(W===t.FLOAT&&(Q=t.RG32F),W===t.HALF_FLOAT&&(Q=t.RG16F),W===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RG8UI),W===t.UNSIGNED_SHORT&&(Q=t.RG16UI),W===t.UNSIGNED_INT&&(Q=t.RG32UI),W===t.BYTE&&(Q=t.RG8I),W===t.SHORT&&(Q=t.RG16I),W===t.INT&&(Q=t.RG32I)),M===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),M===t.RGBA){const be=ae?xc:lt.getTransfer(ie);W===t.FLOAT&&(Q=t.RGBA32F),W===t.HALF_FLOAT&&(Q=t.RGBA16F),W===t.UNSIGNED_BYTE&&(Q=be===gt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(P,M){let W;return P?M===null||M===rs||M===oo?W=t.DEPTH24_STENCIL8:M===Pi?W=t.DEPTH32F_STENCIL8:M===ya&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===rs||M===oo?W=t.DEPTH_COMPONENT24:M===Pi?W=t.DEPTH_COMPONENT32F:M===ya&&(W=t.DEPTH_COMPONENT16),W}function E(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==zn&&P.minFilter!==ii?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){const M=P.target;M.removeEventListener("dispose",R),A(M),M.isVideoTexture&&u.delete(M)}function b(P){const M=P.target;M.removeEventListener("dispose",b),w(M)}function A(P){const M=i.get(P);if(M.__webglInit===void 0)return;const W=P.source,ie=h.get(W);if(ie){const ae=ie[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&L(P),Object.keys(ie).length===0&&h.delete(W)}i.remove(P)}function L(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const W=P.source,ie=h.get(W);delete ie[M.__cacheKey],o.memory.textures--}function w(P){const M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let ae=0;ae<M.__webglFramebuffer[ie].length;ae++)t.deleteFramebuffer(M.__webglFramebuffer[ie][ae]);else t.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[ie]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=P.textures;for(let ie=0,ae=W.length;ie<ae;ie++){const Q=i.get(W[ie]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(W[ie])}i.remove(P)}let S=0;function C(){S=0}function V(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function F(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function H(P,M){const W=i.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(W,P,M);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function q(P,M){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Ve(W,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function z(P,M){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Ve(W,P,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function $(P,M){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Y(W,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const I={[ff]:t.REPEAT,[jr]:t.CLAMP_TO_EDGE,[hf]:t.MIRRORED_REPEAT},K={[zn]:t.NEAREST,[TT]:t.NEAREST_MIPMAP_NEAREST,[el]:t.NEAREST_MIPMAP_LINEAR,[ii]:t.LINEAR,[Cu]:t.LINEAR_MIPMAP_NEAREST,[Xr]:t.LINEAR_MIPMAP_LINEAR},J={[CT]:t.NEVER,[UT]:t.ALWAYS,[PT]:t.LESS,[f_]:t.LEQUAL,[LT]:t.EQUAL,[NT]:t.GEQUAL,[DT]:t.GREATER,[IT]:t.NOTEQUAL};function te(P,M){if(M.type===Pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ii||M.magFilter===Cu||M.magFilter===el||M.magFilter===Xr||M.minFilter===ii||M.minFilter===Cu||M.minFilter===el||M.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,I[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zn||M.minFilter!==el&&M.minFilter!==Xr||M.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Me(P,M){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));const ie=M.source;let ae=h.get(ie);ae===void 0&&(ae={},h.set(ie,ae));const Q=F(M);if(Q!==P.__cacheKey){ae[Q]===void 0&&(ae[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ae[Q].usedTimes++;const be=ae[P.__cacheKey];be!==void 0&&(ae[P.__cacheKey].usedTimes--,be.usedTimes===0&&L(M)),P.__cacheKey=Q,P.__webglTexture=ae[Q].texture}return W}function Ve(P,M,W){let ie=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=t.TEXTURE_3D);const ae=Me(P,M),Q=M.source;n.bindTexture(ie,P.__webglTexture,t.TEXTURE0+W);const be=i.get(Q);if(Q.version!==be.__version||ae===!0){n.activeTexture(t.TEXTURE0+W);const fe=lt.getPrimaries(lt.workingColorSpace),ve=M.colorSpace===er?null:lt.getPrimaries(M.colorSpace),ke=M.colorSpace===er||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ce=y(M.image,!1,r.maxTextureSize);ce=Ce(M,ce);const _e=s.convert(M.format,M.colorSpace),Ye=s.convert(M.type);let Ue=g(M.internalFormat,_e,Ye,M.colorSpace,M.isVideoTexture);te(ie,M);let ye;const Be=M.mipmaps,We=M.isVideoTexture!==!0,dt=be.__version===void 0||ae===!0,U=Q.dataReady,de=E(M,ce);if(M.isDepthTexture)Ue=v(M.format===ao,M.type),dt&&(We?n.texStorage2D(t.TEXTURE_2D,1,Ue,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Ue,ce.width,ce.height,0,_e,Ye,null));else if(M.isDataTexture)if(Be.length>0){We&&dt&&n.texStorage2D(t.TEXTURE_2D,de,Ue,Be[0].width,Be[0].height);for(let Z=0,ee=Be.length;Z<ee;Z++)ye=Be[Z],We?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,_e,Ye,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Ue,ye.width,ye.height,0,_e,Ye,ye.data);M.generateMipmaps=!1}else We?(dt&&n.texStorage2D(t.TEXTURE_2D,de,Ue,ce.width,ce.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,_e,Ye,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,ce.width,ce.height,0,_e,Ye,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Ue,Be[0].width,Be[0].height,ce.depth);for(let Z=0,ee=Be.length;Z<ee;Z++)if(ye=Be[Z],M.format!==ri)if(_e!==null)if(We){if(U)if(M.layerUpdates.size>0){const pe=qg(ye.width,ye.height,M.format,M.type);for(const Ie of M.layerUpdates){const Je=ye.data.subarray(Ie*pe/ye.data.BYTES_PER_ELEMENT,(Ie+1)*pe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,Ie,ye.width,ye.height,1,_e,Je,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,ce.depth,_e,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Ue,ye.width,ye.height,ce.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,ce.depth,_e,Ye,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Ue,ye.width,ye.height,ce.depth,0,_e,Ye,ye.data)}else{We&&dt&&n.texStorage2D(t.TEXTURE_2D,de,Ue,Be[0].width,Be[0].height);for(let Z=0,ee=Be.length;Z<ee;Z++)ye=Be[Z],M.format!==ri?_e!==null?We?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,_e,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,_e,Ye,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Ue,ye.width,ye.height,0,_e,Ye,ye.data)}else if(M.isDataArrayTexture)if(We){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Ue,ce.width,ce.height,ce.depth),U)if(M.layerUpdates.size>0){const Z=qg(ce.width,ce.height,M.format,M.type);for(const ee of M.layerUpdates){const pe=ce.data.subarray(ee*Z/ce.data.BYTES_PER_ELEMENT,(ee+1)*Z/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,ce.width,ce.height,1,_e,Ye,pe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,Ye,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,ce.width,ce.height,ce.depth,0,_e,Ye,ce.data);else if(M.isData3DTexture)We?(dt&&n.texStorage3D(t.TEXTURE_3D,de,Ue,ce.width,ce.height,ce.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,Ye,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,ce.width,ce.height,ce.depth,0,_e,Ye,ce.data);else if(M.isFramebufferTexture){if(dt)if(We)n.texStorage2D(t.TEXTURE_2D,de,Ue,ce.width,ce.height);else{let Z=ce.width,ee=ce.height;for(let pe=0;pe<de;pe++)n.texImage2D(t.TEXTURE_2D,pe,Ue,Z,ee,0,_e,Ye,null),Z>>=1,ee>>=1}}else if(Be.length>0){if(We&&dt){const Z=Pe(Be[0]);n.texStorage2D(t.TEXTURE_2D,de,Ue,Z.width,Z.height)}for(let Z=0,ee=Be.length;Z<ee;Z++)ye=Be[Z],We?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,_e,Ye,ye):n.texImage2D(t.TEXTURE_2D,Z,Ue,_e,Ye,ye);M.generateMipmaps=!1}else if(We){if(dt){const Z=Pe(ce);n.texStorage2D(t.TEXTURE_2D,de,Ue,Z.width,Z.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Ye,ce)}else n.texImage2D(t.TEXTURE_2D,0,Ue,_e,Ye,ce);p(M)&&f(ie),be.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Y(P,M,W){if(M.image.length!==6)return;const ie=Me(P,M),ae=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+W);const Q=i.get(ae);if(ae.version!==Q.__version||ie===!0){n.activeTexture(t.TEXTURE0+W);const be=lt.getPrimaries(lt.workingColorSpace),fe=M.colorSpace===er?null:lt.getPrimaries(M.colorSpace),ve=M.colorSpace===er||be===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ke=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let ee=0;ee<6;ee++)!ke&&!ce?_e[ee]=y(M.image[ee],!0,r.maxCubemapSize):_e[ee]=ce?M.image[ee].image:M.image[ee],_e[ee]=Ce(M,_e[ee]);const Ye=_e[0],Ue=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),Be=g(M.internalFormat,Ue,ye,M.colorSpace),We=M.isVideoTexture!==!0,dt=Q.__version===void 0||ie===!0,U=ae.dataReady;let de=E(M,Ye);te(t.TEXTURE_CUBE_MAP,M);let Z;if(ke){We&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Be,Ye.width,Ye.height);for(let ee=0;ee<6;ee++){Z=_e[ee].mipmaps;for(let pe=0;pe<Z.length;pe++){const Ie=Z[pe];M.format!==ri?Ue!==null?We?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,Ie.width,Ie.height,Ue,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Be,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,Ie.width,Ie.height,Ue,ye,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Be,Ie.width,Ie.height,0,Ue,ye,Ie.data)}}}else{if(Z=M.mipmaps,We&&dt){Z.length>0&&de++;const ee=Pe(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Be,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ce){We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e[ee].width,_e[ee].height,Ue,ye,_e[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,_e[ee].width,_e[ee].height,0,Ue,ye,_e[ee].data);for(let pe=0;pe<Z.length;pe++){const Je=Z[pe].image[ee].image;We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Je.width,Je.height,Ue,ye,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Be,Je.width,Je.height,0,Ue,ye,Je.data)}}else{We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ue,ye,_e[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,Ue,ye,_e[ee]);for(let pe=0;pe<Z.length;pe++){const Ie=Z[pe];We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Ue,ye,Ie.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Be,Ue,ye,Ie.image[ee])}}}p(M)&&f(t.TEXTURE_CUBE_MAP),Q.__version=ae.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function se(P,M,W,ie,ae,Q){const be=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),ve=g(W.internalFormat,be,fe,W.colorSpace);if(!i.get(M).__hasExternalTextures){const ce=Math.max(1,M.width>>Q),_e=Math.max(1,M.height>>Q);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,Q,ve,ce,_e,M.depth,0,be,fe,null):n.texImage2D(ae,Q,ve,ce,_e,0,be,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),re(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ae,i.get(W).__webglTexture,0,je(M)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ae,i.get(W).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(P,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const ie=M.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,Q=v(M.stencilBuffer,ae),be=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=je(M);re(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,Q,M.width,M.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,P)}else{const ie=M.textures;for(let ae=0;ae<ie.length;ae++){const Q=ie[ae],be=s.convert(Q.format,Q.colorSpace),fe=s.convert(Q.type),ve=g(Q.internalFormat,be,fe,Q.colorSpace),ke=je(M);W&&re(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,ve,M.width,M.height):re(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const ie=i.get(M.depthTexture).__webglTexture,ae=je(M);if(M.depthTexture.format===qs)re(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(M.depthTexture.format===ao)re(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function De(P){const M=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,P)}else if(W){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=t.createRenderbuffer(),ne(M.__webglDepthbuffer[ie],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ne(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(P,M,W){const ie=i.get(P);M!==void 0&&se(ie.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&De(P)}function Ge(P){const M=P.texture,W=i.get(P),ie=i.get(M);P.addEventListener("dispose",b);const ae=P.textures,Q=P.isWebGLCubeRenderTarget===!0,be=ae.length>1;if(be||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=M.version,o.memory.textures++),Q){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let ve=0;ve<M.mipmaps.length;ve++)W.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else W.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)W.__webglFramebuffer[fe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(be)for(let fe=0,ve=ae.length;fe<ve;fe++){const ke=i.get(ae[fe]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&re(P)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){const ve=ae[fe];W.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[fe]);const ke=s.convert(ve.format,ve.colorSpace),ce=s.convert(ve.type),_e=g(ve.internalFormat,ke,ce,ve.colorSpace,P.isXRRenderTarget===!0),Ye=je(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,_e,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,W.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(W.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),te(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)se(W.__webglFramebuffer[fe][ve],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else se(W.__webglFramebuffer[fe],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let fe=0,ve=ae.length;fe<ve;fe++){const ke=ae[fe],ce=i.get(ke);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),te(t.TEXTURE_2D,ke),se(W.__webglFramebuffer,P,ke,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),p(ke)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ie.__webglTexture),te(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)se(W.__webglFramebuffer[ve],P,M,t.COLOR_ATTACHMENT0,fe,ve);else se(W.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,fe,0);p(M)&&f(fe),n.unbindTexture()}P.depthBuffer&&De(P)}function ut(P){const M=P.textures;for(let W=0,ie=M.length;W<ie;W++){const ae=M[W];if(p(ae)){const Q=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(ae).__webglTexture;n.bindTexture(Q,be),f(Q),n.unbindTexture()}}}const D=[],pt=[];function qe(P){if(P.samples>0){if(re(P)===!1){const M=P.textures,W=P.width,ie=P.height;let ae=t.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(P),fe=M.length>1;if(fe)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const ke=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,W,ie,0,0,W,ie,ae,t.NEAREST),l===!0&&(D.length=0,pt.length=0,D.push(t.COLOR_ATTACHMENT0+ve),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(Q),pt.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,pt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const ke=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function je(P){return Math.min(r.maxSamples,P.samples)}function re(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ze(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function Ce(P,M){const W=P.colorSpace,ie=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==br&&W!==er&&(lt.getTransfer(W)===gt?(ie!==ri||ae!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function Pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=C,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=He,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=se,this.useMultisampledRTT=re}function OC(t,e){function n(i,r=er){let s;const o=lt.getTransfer(r);if(i===ki)return t.UNSIGNED_BYTE;if(i===Jh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===i_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===t_)return t.BYTE;if(i===n_)return t.SHORT;if(i===ya)return t.UNSIGNED_SHORT;if(i===Zh)return t.INT;if(i===rs)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===Pa)return t.HALF_FLOAT;if(i===r_)return t.ALPHA;if(i===s_)return t.RGB;if(i===ri)return t.RGBA;if(i===o_)return t.LUMINANCE;if(i===a_)return t.LUMINANCE_ALPHA;if(i===qs)return t.DEPTH_COMPONENT;if(i===ao)return t.DEPTH_STENCIL;if(i===l_)return t.RED;if(i===ep)return t.RED_INTEGER;if(i===c_)return t.RG;if(i===tp)return t.RG_INTEGER;if(i===np)return t.RGBA_INTEGER;if(i===Fl||i===kl||i===Bl||i===zl)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pf||i===mf||i===gf||i===vf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xf||i===_f||i===yf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xf||i===_f)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sf||i===Ef||i===Mf||i===wf||i===Tf||i===bf||i===Af||i===Rf||i===Cf||i===Pf||i===Lf||i===Df||i===If||i===Nf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ef)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Af)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Df)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===If)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hl||i===Uf||i===Of)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hl)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Of)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===u_||i===Ff||i===kf||i===Bf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ff)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class FC extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ht extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kC={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),f=this._getHandJoint(c,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const BC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Mn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yr({vertexShader:BC,fragmentShader:zC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new et(new Sr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VC extends _o{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,x=null;const y=new HC,p=n.getContextAttributes();let f=null,g=null;const v=[],E=[],R=new tt;let b=null;const A=new pn;A.layers.enable(1),A.viewport=new vt;const L=new pn;L.layers.enable(2),L.viewport=new vt;const w=[A,L],S=new FC;S.layers.enable(1),S.layers.enable(2);let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=v[Y];return se===void 0&&(se=new nd,v[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=v[Y];return se===void 0&&(se=new nd,v[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=v[Y];return se===void 0&&(se=new nd,v[Y]=se),se.getHandSpace()};function F(Y){const se=E.indexOf(Y.inputSource);if(se===-1)return;const ne=v[se];ne!==void 0&&(ne.update(Y.inputSource,Y.frame,c||o),ne.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",q);for(let Y=0;Y<v.length;Y++){const se=E[Y];se!==null&&(E[Y]=null,v[Y].disconnect(se))}C=null,V=null,y.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,g=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",H),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new ss(m.framebufferWidth,m.framebufferHeight,{format:ri,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,ne=null,ue=null;p.depth&&(ue=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=p.stencil?ao:qs,ne=p.stencil?oo:rs);const De={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new ss(h.textureWidth,h.textureHeight,{format:ri,type:ki,depthTexture:new b_(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(Y){for(let se=0;se<Y.removed.length;se++){const ne=Y.removed[se],ue=E.indexOf(ne);ue>=0&&(E[ue]=null,v[ue].disconnect(ne))}for(let se=0;se<Y.added.length;se++){const ne=Y.added[se];let ue=E.indexOf(ne);if(ue===-1){for(let He=0;He<v.length;He++)if(He>=E.length){E.push(ne),ue=He;break}else if(E[He]===null){E[He]=ne,ue=He;break}if(ue===-1)break}const De=v[ue];De&&De.connect(ne)}}const z=new B,$=new B;function I(Y,se,ne){z.setFromMatrixPosition(se.matrixWorld),$.setFromMatrixPosition(ne.matrixWorld);const ue=z.distanceTo($),De=se.projectionMatrix.elements,He=ne.projectionMatrix.elements,Ge=De[14]/(De[10]-1),ut=De[14]/(De[10]+1),D=(De[9]+1)/De[5],pt=(De[9]-1)/De[5],qe=(De[8]-1)/De[0],je=(He[8]+1)/He[0],re=Ge*qe,Ze=Ge*je,Ce=ue/(-qe+je),Pe=Ce*-qe;se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pe),Y.translateZ(Ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const P=Ge+Ce,M=ut+Ce,W=re-Pe,ie=Ze+(ue-Pe),ae=D*ut/M*P,Q=pt*ut/M*P;Y.projectionMatrix.makePerspective(W,ie,ae,Q,P,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function K(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;y.texture!==null&&(Y.near=y.depthNear,Y.far=y.depthFar),S.near=L.near=A.near=Y.near,S.far=L.far=A.far=Y.far,(C!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,V=S.far,A.near=C,A.far=V,L.near=C,L.far=V,A.updateProjectionMatrix(),L.updateProjectionMatrix(),Y.updateProjectionMatrix());const se=Y.parent,ne=S.cameras;K(S,se);for(let ue=0;ue<ne.length;ue++)K(ne[ue],se);ne.length===2?I(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),J(Y,S,se)};function J(Y,se,ne){ne===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(ne.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=zf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let te=null;function Me(Y,se){if(u=se.getViewerPose(c||o),x=se,u!==null){const ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ue=!1;ne.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let He=0;He<ne.length;He++){const Ge=ne[He];let ut=null;if(m!==null)ut=m.getViewport(Ge);else{const pt=d.getViewSubImage(h,Ge);ut=pt.viewport,He===0&&(e.setRenderTargetTextures(g,pt.colorTexture,h.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(g))}let D=w[He];D===void 0&&(D=new pn,D.layers.enable(He),D.viewport=new vt,w[He]=D),D.matrix.fromArray(Ge.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Ge.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ut.x,ut.y,ut.width,ut.height),He===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(D)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const He=d.getDepthInformation(ne[0]);He&&He.isValid&&He.texture&&y.init(e,He,r.renderState)}}for(let ne=0;ne<v.length;ne++){const ue=E[ne],De=v[ne];ue!==null&&De!==void 0&&De.update(ue,se,c||o)}te&&te(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),x=null}const Ve=new w_;Ve.setAnimationLoop(Me),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}}const Dr=new Gn,WC=new Mt;function GC(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,S_(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,g,v,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),x(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),y(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,g,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===En&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===En&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const g=e.get(f),v=g.envMap,E=g.envMapRotation;v&&(p.envMap.value=v,Dr.copy(E),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),p.envMapRotation.value.setFromMatrix4(WC.makeRotationFromEuler(Dr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,g,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=v*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,g){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const g=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const E=v.program;i.uniformBlockBinding(g,E)}function c(g,v){let E=r[g.id];E===void 0&&(x(g),E=u(g),r[g.id]=E,g.addEventListener("dispose",p));const R=v.program;i.updateUBOMapping(g,R);const b=e.render.frame;s[g.id]!==b&&(h(g),s[g.id]=b)}function u(g){const v=d();g.__bindingPointIndex=v;const E=t.createBuffer(),R=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],E=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,A=E.length;b<A;b++){const L=Array.isArray(E[b])?E[b]:[E[b]];for(let w=0,S=L.length;w<S;w++){const C=L[w];if(m(C,b,w,R)===!0){const V=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let q=0;q<F.length;q++){const z=F[q],$=y(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,V+H,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,E,R){const b=g.value,A=v+"_"+E;if(R[A]===void 0)return typeof b=="number"||typeof b=="boolean"?R[A]=b:R[A]=b.clone(),!0;{const L=R[A];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return R[A]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function x(g){const v=g.uniforms;let E=0;const R=16;for(let A=0,L=v.length;A<L;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,C=w.length;S<C;S++){const V=w[S],F=Array.isArray(V.value)?V.value:[V.value];for(let H=0,q=F.length;H<q;H++){const z=F[H],$=y(z),I=E%R;I!==0&&R-I<$.boundary&&(E+=R-I),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=$.storage}}}const b=E%R;return b>0&&(E+=R-b),g.__size=E,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class L_{constructor(e={}){const{canvas:n=FT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,p=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=gr,this.toneMappingExposure=1;const v=this;let E=!1,R=0,b=0,A=null,L=-1,w=null;const S=new vt,C=new vt;let V=null;const F=new nt(0);let H=0,q=n.width,z=n.height,$=1,I=null,K=null;const J=new vt(0,0,q,z),te=new vt(0,0,q,z);let Me=!1;const Ve=new ap;let Y=!1,se=!1;const ne=new Mt,ue=new B,De=new vt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function ut(){return A===null?$:1}let D=i;function pt(T,O){return n.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yh}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",ee,!1),n.addEventListener("webglcontextcreationerror",pe,!1),D===null){const O="webgl2";if(D=pt(O,T),D===null)throw pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let qe,je,re,Ze,Ce,Pe,P,M,W,ie,ae,Q,be,fe,ve,ke,ce,_e,Ye,Ue,ye,Be,We,dt;function U(){qe=new Q2(D),qe.init(),Be=new OC(D,qe),je=new $2(D,qe,e,Be),re=new IC(D),Ze=new nR(D),Ce=new _C,Pe=new UC(D,qe,re,Ce,je,Be,Ze),P=new Y2(v),M=new J2(v),W=new cb(D),We=new j2(D,W),ie=new eR(D,W,Ze,We),ae=new rR(D,ie,W,Ze),Ye=new iR(D,je,Pe),ke=new q2(Ce),Q=new xC(v,P,M,qe,je,We,ke),be=new GC(v,Ce),fe=new SC,ve=new AC(qe),_e=new G2(v,P,M,re,ae,h,l),ce=new DC(v,ae,je),dt=new jC(D,Ze,je,re),Ue=new X2(D,qe,Ze),ye=new tR(D,qe,Ze),Ze.programs=Q.programs,v.capabilities=je,v.extensions=qe,v.properties=Ce,v.renderLists=fe,v.shadowMap=ce,v.state=re,v.info=Ze}U();const de=new VC(v,D);this.xr=de,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=qe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=qe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(q,z,!1))},this.getSize=function(T){return T.set(q,z)},this.setSize=function(T,O,G=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,z=O,n.width=Math.floor(T*$),n.height=Math.floor(O*$),G===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(q*$,z*$).floor()},this.setDrawingBufferSize=function(T,O,G){q=T,z=O,$=G,n.width=Math.floor(T*G),n.height=Math.floor(O*G),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,O,G,j){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,O,G,j),re.viewport(S.copy(J).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,O,G,j){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,O,G,j),re.scissor(C.copy(te).multiplyScalar($).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){re.setScissorTest(Me=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(T=!0,O=!0,G=!0){let j=0;if(T){let k=!1;if(A!==null){const he=A.texture.format;k=he===np||he===tp||he===ep}if(k){const he=A.texture.type,xe=he===ki||he===rs||he===ya||he===oo||he===Jh||he===Qh,we=_e.getClearColor(),Te=_e.getClearAlpha(),Oe=we.r,ze=we.g,Ne=we.b;xe?(m[0]=Oe,m[1]=ze,m[2]=Ne,m[3]=Te,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Oe,x[1]=ze,x[2]=Ne,x[3]=Te,D.clearBufferiv(D.COLOR,0,x))}else j|=D.COLOR_BUFFER_BIT}O&&(j|=D.DEPTH_BUFFER_BIT),G&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",ee,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),fe.dispose(),ve.dispose(),Ce.dispose(),P.dispose(),M.dispose(),ae.dispose(),We.dispose(),dt.dispose(),Q.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ct),de.removeEventListener("sessionend",un),Xn.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=Ze.autoReset,O=ce.enabled,G=ce.autoUpdate,j=ce.needsUpdate,k=ce.type;U(),Ze.autoReset=T,ce.enabled=O,ce.autoUpdate=G,ce.needsUpdate=j,ce.type=k}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ie(T){const O=T.target;O.removeEventListener("dispose",Ie),Je(O)}function Je(T){le(T),Ce.remove(T)}function le(T){const O=Ce.get(T).programs;O!==void 0&&(O.forEach(function(G){Q.releaseProgram(G)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,G,j,k,he){O===null&&(O=He);const xe=k.isMesh&&k.matrixWorld.determinant()<0,we=F_(T,O,G,j,k);re.setMaterial(j,xe);let Te=G.index,Oe=1;if(j.wireframe===!0){if(Te=ie.getWireframeAttribute(G),Te===void 0)return;Oe=2}const ze=G.drawRange,Ne=G.attributes.position;let st=ze.start*Oe,Tt=(ze.start+ze.count)*Oe;he!==null&&(st=Math.max(st,he.start*Oe),Tt=Math.min(Tt,(he.start+he.count)*Oe)),Te!==null?(st=Math.max(st,0),Tt=Math.min(Tt,Te.count)):Ne!=null&&(st=Math.max(st,0),Tt=Math.min(Tt,Ne.count));const bt=Tt-st;if(bt<0||bt===1/0)return;We.setup(k,j,we,G,Te);let wn,ot=Ue;if(Te!==null&&(wn=W.get(Te),ot=ye,ot.setIndex(wn)),k.isMesh)j.wireframe===!0?(re.setLineWidth(j.wireframeLinewidth*ut()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(k.isLine){let Re=j.linewidth;Re===void 0&&(Re=1),re.setLineWidth(Re*ut()),k.isLineSegments?ot.setMode(D.LINES):k.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else k.isPoints?ot.setMode(D.POINTS):k.isSprite&&ot.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ot.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Re=k._multiDrawStarts,Wt=k._multiDrawCounts,at=k._multiDrawCount,$n=Te?W.get(Te).bytesPerElement:1,ls=Ce.get(j).currentProgram.getUniforms();for(let Tn=0;Tn<at;Tn++)ls.setValue(D,"_gl_DrawID",Tn),ot.render(Re[Tn]/$n,Wt[Tn])}else if(k.isInstancedMesh)ot.renderInstances(st,bt,k.count);else if(G.isInstancedBufferGeometry){const Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Wt=Math.min(G.instanceCount,Re);ot.renderInstances(st,bt,Wt)}else ot.render(st,bt)};function Ae(T,O,G){T.transparent===!0&&T.side===Ai&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,Ua(T,O,G),T.side=Fi,T.needsUpdate=!0,Ua(T,O,G),T.side=Ai):Ua(T,O,G)}this.compile=function(T,O,G=null){G===null&&(G=T),p=ve.get(G),p.init(O),g.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==G&&T.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const j=new Set;return T.traverse(function(k){const he=k.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const we=he[xe];Ae(we,G,k),j.add(we)}else Ae(he,G,k),j.add(he)}),g.pop(),p=null,j},this.compileAsync=function(T,O,G=null){const j=this.compile(T,O,G);return new Promise(k=>{function he(){if(j.forEach(function(xe){Ce.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){k(T);return}setTimeout(he,10)}qe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Le=null;function Rt(T){Le&&Le(T)}function Ct(){Xn.stop()}function un(){Xn.start()}const Xn=new w_;Xn.setAnimationLoop(Rt),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(T){Le=T,de.setAnimationLoop(T),T===null?Xn.stop():Xn.start()},de.addEventListener("sessionstart",Ct),de.addEventListener("sessionend",un),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(O),O=de.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,A),p=ve.get(T,g.length),p.init(O),g.push(p),ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ve.setFromProjectionMatrix(ne),se=this.localClippingEnabled,Y=ke.init(this.clippingPlanes,se),y=fe.get(T,f.length),y.init(),f.push(y),de.enabled===!0&&de.isPresenting===!0){const he=v.xr.getDepthSensingMesh();he!==null&&xi(he,O,-1/0,v.sortObjects)}xi(T,O,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(I,K),Ge=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Ge&&_e.addToRenderList(y,T),this.info.render.frame++,Y===!0&&ke.beginShadows();const G=p.state.shadowsArray;ce.render(G,T,O),Y===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=y.opaque,k=y.transmissive;if(p.setupLights(),O.isArrayCamera){const he=O.cameras;if(k.length>0)for(let xe=0,we=he.length;xe<we;xe++){const Te=he[xe];Eo(j,k,T,Te)}Ge&&_e.render(T);for(let xe=0,we=he.length;xe<we;xe++){const Te=he[xe];So(y,T,Te,Te.viewport)}}else k.length>0&&Eo(j,k,T,O),Ge&&_e.render(T),So(y,T,O);A!==null&&(Pe.updateMultisampleRenderTarget(A),Pe.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,O),We.resetDefaultState(),L=-1,w=null,g.pop(),g.length>0?(p=g[g.length-1],Y===!0&&ke.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function xi(T,O,G,j){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){j&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ne);const xe=ae.update(T),we=T.material;we.visible&&y.push(T,xe,we,G,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){const xe=ae.update(T),we=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),De.copy(xe.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(ne)),Array.isArray(we)){const Te=xe.groups;for(let Oe=0,ze=Te.length;Oe<ze;Oe++){const Ne=Te[Oe],st=we[Ne.materialIndex];st&&st.visible&&y.push(T,xe,st,G,De.z,Ne)}}else we.visible&&y.push(T,xe,we,G,De.z,null)}}const he=T.children;for(let xe=0,we=he.length;xe<we;xe++)xi(he[xe],O,G,j)}function So(T,O,G,j){const k=T.opaque,he=T.transmissive,xe=T.transparent;p.setupLightsView(G),Y===!0&&ke.setGlobalState(v.clippingPlanes,G),j&&re.viewport(S.copy(j)),k.length>0&&Na(k,O,G),he.length>0&&Na(he,O,G),xe.length>0&&Na(xe,O,G),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Eo(T,O,G,j){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ss(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Pa:ki,minFilter:Xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const he=p.state.transmissionRenderTarget[j.id],xe=j.viewport||S;he.setSize(xe.z,xe.w);const we=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(F),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),Ge?_e.render(G):v.clear();const Te=v.toneMapping;v.toneMapping=gr;const Oe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Y===!0&&ke.setGlobalState(v.clippingPlanes,j),Na(T,G,j),Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he),qe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ne=0,st=O.length;Ne<st;Ne++){const Tt=O[Ne],bt=Tt.object,wn=Tt.geometry,ot=Tt.material,Re=Tt.group;if(ot.side===Ai&&bt.layers.test(j.layers)){const Wt=ot.side;ot.side=En,ot.needsUpdate=!0,dp(bt,G,j,wn,ot,Re),ot.side=Wt,ot.needsUpdate=!0,ze=!0}}ze===!0&&(Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he))}v.setRenderTarget(we),v.setClearColor(F,H),Oe!==void 0&&(j.viewport=Oe),v.toneMapping=Te}function Na(T,O,G){const j=O.isScene===!0?O.overrideMaterial:null;for(let k=0,he=T.length;k<he;k++){const xe=T[k],we=xe.object,Te=xe.geometry,Oe=j===null?xe.material:j,ze=xe.group;we.layers.test(G.layers)&&dp(we,O,G,Te,Oe,ze)}}function dp(T,O,G,j,k,he){T.onBeforeRender(v,O,G,j,k,he),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.transparent===!0&&k.side===Ai&&k.forceSinglePass===!1?(k.side=En,k.needsUpdate=!0,v.renderBufferDirect(G,O,j,k,T,he),k.side=Fi,k.needsUpdate=!0,v.renderBufferDirect(G,O,j,k,T,he),k.side=Ai):v.renderBufferDirect(G,O,j,k,T,he),T.onAfterRender(v,O,G,j,k,he)}function Ua(T,O,G){O.isScene!==!0&&(O=He);const j=Ce.get(T),k=p.state.lights,he=p.state.shadowsArray,xe=k.state.version,we=Q.getParameters(T,k.state,he,O,G),Te=Q.getProgramCacheKey(we);let Oe=j.programs;j.environment=T.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(T.isMeshStandardMaterial?M:P).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",Ie),Oe=new Map,j.programs=Oe);let ze=Oe.get(Te);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===xe)return hp(T,we),ze}else we.uniforms=Q.getUniforms(T),T.onBeforeCompile(we,v),ze=Q.acquireProgram(we,Te),Oe.set(Te,ze),j.uniforms=we.uniforms;const Ne=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=ke.uniform),hp(T,we),j.needsLights=B_(T),j.lightsStateVersion=xe,j.needsLights&&(Ne.ambientLightColor.value=k.state.ambient,Ne.lightProbe.value=k.state.probe,Ne.directionalLights.value=k.state.directional,Ne.directionalLightShadows.value=k.state.directionalShadow,Ne.spotLights.value=k.state.spot,Ne.spotLightShadows.value=k.state.spotShadow,Ne.rectAreaLights.value=k.state.rectArea,Ne.ltc_1.value=k.state.rectAreaLTC1,Ne.ltc_2.value=k.state.rectAreaLTC2,Ne.pointLights.value=k.state.point,Ne.pointLightShadows.value=k.state.pointShadow,Ne.hemisphereLights.value=k.state.hemi,Ne.directionalShadowMap.value=k.state.directionalShadowMap,Ne.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ne.spotShadowMap.value=k.state.spotShadowMap,Ne.spotLightMatrix.value=k.state.spotLightMatrix,Ne.spotLightMap.value=k.state.spotLightMap,Ne.pointShadowMap.value=k.state.pointShadowMap,Ne.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function fp(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Vl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function hp(T,O){const G=Ce.get(T);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function F_(T,O,G,j,k){O.isScene!==!0&&(O=He),Pe.resetTextureUnits();const he=O.fog,xe=j.isMeshStandardMaterial?O.environment:null,we=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:br,Te=(j.isMeshStandardMaterial?M:P).get(j.envMap||xe),Oe=j.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ne=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,Tt=!!G.morphAttributes.color;let bt=gr;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(bt=v.toneMapping);const wn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ot=wn!==void 0?wn.length:0,Re=Ce.get(j),Wt=p.state.lights;if(Y===!0&&(se===!0||T!==w)){const Un=T===w&&j.id===L;ke.setState(j,T,Un)}let at=!1;j.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Wt.state.version||Re.outputColorSpace!==we||k.isBatchedMesh&&Re.batching===!1||!k.isBatchedMesh&&Re.batching===!0||k.isBatchedMesh&&Re.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Re.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Re.instancing===!1||!k.isInstancedMesh&&Re.instancing===!0||k.isSkinnedMesh&&Re.skinning===!1||!k.isSkinnedMesh&&Re.skinning===!0||k.isInstancedMesh&&Re.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Re.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Re.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Re.instancingMorph===!1&&k.morphTexture!==null||Re.envMap!==Te||j.fog===!0&&Re.fog!==he||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ke.numPlanes||Re.numIntersection!==ke.numIntersection)||Re.vertexAlphas!==Oe||Re.vertexTangents!==ze||Re.morphTargets!==Ne||Re.morphNormals!==st||Re.morphColors!==Tt||Re.toneMapping!==bt||Re.morphTargetsCount!==ot)&&(at=!0):(at=!0,Re.__version=j.version);let $n=Re.currentProgram;at===!0&&($n=Ua(j,O,k));let ls=!1,Tn=!1,$c=!1;const It=$n.getUniforms(),Vi=Re.uniforms;if(re.useProgram($n.program)&&(ls=!0,Tn=!0,$c=!0),j.id!==L&&(L=j.id,Tn=!0),ls||w!==T){It.setValue(D,"projectionMatrix",T.projectionMatrix),It.setValue(D,"viewMatrix",T.matrixWorldInverse);const Un=It.map.cameraPosition;Un!==void 0&&Un.setValue(D,ue.setFromMatrixPosition(T.matrixWorld)),je.logarithmicDepthBuffer&&It.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&It.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Tn=!0,$c=!0)}if(k.isSkinnedMesh){It.setOptional(D,k,"bindMatrix"),It.setOptional(D,k,"bindMatrixInverse");const Un=k.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),It.setValue(D,"boneTexture",Un.boneTexture,Pe))}k.isBatchedMesh&&(It.setOptional(D,k,"batchingTexture"),It.setValue(D,"batchingTexture",k._matricesTexture,Pe),It.setOptional(D,k,"batchingIdTexture"),It.setValue(D,"batchingIdTexture",k._indirectTexture,Pe),It.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&It.setValue(D,"batchingColorTexture",k._colorsTexture,Pe));const qc=G.morphAttributes;if((qc.position!==void 0||qc.normal!==void 0||qc.color!==void 0)&&Ye.update(k,G,$n),(Tn||Re.receiveShadow!==k.receiveShadow)&&(Re.receiveShadow=k.receiveShadow,It.setValue(D,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Vi.envMap.value=Te,Vi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(Vi.envMapIntensity.value=O.environmentIntensity),Tn&&(It.setValue(D,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&k_(Vi,$c),he&&j.fog===!0&&be.refreshFogUniforms(Vi,he),be.refreshMaterialUniforms(Vi,j,$,z,p.state.transmissionRenderTarget[T.id]),Vl.upload(D,fp(Re),Vi,Pe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Vl.upload(D,fp(Re),Vi,Pe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&It.setValue(D,"center",k.center),It.setValue(D,"modelViewMatrix",k.modelViewMatrix),It.setValue(D,"normalMatrix",k.normalMatrix),It.setValue(D,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Un=j.uniformsGroups;for(let Yc=0,z_=Un.length;Yc<z_;Yc++){const pp=Un[Yc];dt.update(pp,$n),dt.bind(pp,$n)}}return $n}function k_(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function B_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,O,G){Ce.get(T.texture).__webglTexture=O,Ce.get(T.depthTexture).__webglTexture=G;const j=Ce.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=G===void 0,j.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const G=Ce.get(T);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,G=0){A=T,R=O,b=G;let j=!0,k=null,he=!1,xe=!1;if(T){const Te=Ce.get(T);Te.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(D.FRAMEBUFFER,null),j=!1):Te.__webglFramebuffer===void 0?Pe.setupRenderTarget(T):Te.__hasExternalTextures&&Pe.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);const ze=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?k=ze[O][G]:k=ze[O],he=!0):T.samples>0&&Pe.useMultisampledRTT(T)===!1?k=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?k=ze[G]:k=ze,S.copy(T.viewport),C.copy(T.scissor),V=T.scissorTest}else S.copy(J).multiplyScalar($).floor(),C.copy(te).multiplyScalar($).floor(),V=Me;if(re.bindFramebuffer(D.FRAMEBUFFER,k)&&j&&re.drawBuffers(T,k),re.viewport(S),re.scissor(C),re.setScissorTest(V),he){const Te=Ce.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Te.__webglTexture,G)}else if(xe){const Te=Ce.get(T.texture),Oe=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,G||0,Oe)}L=-1},this.readRenderTargetPixels=function(T,O,G,j,k,he,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){re.bindFramebuffer(D.FRAMEBUFFER,we);try{const Te=T.texture,Oe=Te.format,ze=Te.type;if(!je.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-j&&G>=0&&G<=T.height-k&&D.readPixels(O,G,j,k,Be.convert(Oe),Be.convert(ze),he)}finally{const Te=A!==null?Ce.get(A).__webglFramebuffer:null;re.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(T,O,G,j,k,he,xe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){re.bindFramebuffer(D.FRAMEBUFFER,we);try{const Te=T.texture,Oe=Te.format,ze=Te.type;if(!je.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-j&&G>=0&&G<=T.height-k){const Ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(O,G,j,k,Be.convert(Oe),Be.convert(ze),0),D.flush();const st=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await kT(D,st,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he)}finally{D.deleteBuffer(Ne),D.deleteSync(st)}return he}}finally{const Te=A!==null?Ce.get(A).__webglFramebuffer:null;re.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,O=null,G=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-G),k=Math.floor(T.image.width*j),he=Math.floor(T.image.height*j),xe=O!==null?O.x:0,we=O!==null?O.y:0;Pe.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,xe,we,k,he),re.unbindTexture()},this.copyTextureToTexture=function(T,O,G=null,j=null,k=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],O=arguments[2],k=arguments[3]||0,G=null);let he,xe,we,Te,Oe,ze;G!==null?(he=G.max.x-G.min.x,xe=G.max.y-G.min.y,we=G.min.x,Te=G.min.y):(he=T.image.width,xe=T.image.height,we=0,Te=0),j!==null?(Oe=j.x,ze=j.y):(Oe=0,ze=0);const Ne=Be.convert(O.format),st=Be.convert(O.type);Pe.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Tt=D.getParameter(D.UNPACK_ROW_LENGTH),bt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),wn=D.getParameter(D.UNPACK_SKIP_PIXELS),ot=D.getParameter(D.UNPACK_SKIP_ROWS),Re=D.getParameter(D.UNPACK_SKIP_IMAGES),Wt=T.isCompressedTexture?T.mipmaps[k]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Oe,ze,he,xe,Ne,st,Wt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Oe,ze,Wt.width,Wt.height,Ne,Wt.data):D.texSubImage2D(D.TEXTURE_2D,k,Oe,ze,he,xe,Ne,st,Wt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,wn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),k===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),re.unbindTexture()},this.copyTextureToTexture3D=function(T,O,G=null,j=null,k=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,j=arguments[1]||null,T=arguments[2],O=arguments[3],k=arguments[4]||0);let he,xe,we,Te,Oe,ze,Ne,st,Tt;const bt=T.isCompressedTexture?T.mipmaps[k]:T.image;G!==null?(he=G.max.x-G.min.x,xe=G.max.y-G.min.y,we=G.max.z-G.min.z,Te=G.min.x,Oe=G.min.y,ze=G.min.z):(he=bt.width,xe=bt.height,we=bt.depth,Te=0,Oe=0,ze=0),j!==null?(Ne=j.x,st=j.y,Tt=j.z):(Ne=0,st=0,Tt=0);const wn=Be.convert(O.format),ot=Be.convert(O.type);let Re;if(O.isData3DTexture)Pe.setTexture3D(O,0),Re=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Pe.setTexture2DArray(O,0),Re=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Wt=D.getParameter(D.UNPACK_ROW_LENGTH),at=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$n=D.getParameter(D.UNPACK_SKIP_PIXELS),ls=D.getParameter(D.UNPACK_SKIP_ROWS),Tn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Re,k,Ne,st,Tt,he,xe,we,wn,ot,bt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,k,Ne,st,Tt,he,xe,we,wn,bt.data):D.texSubImage3D(Re,k,Ne,st,Tt,he,xe,we,wn,ot,bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$n),D.pixelStorei(D.UNPACK_SKIP_ROWS,ls),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tn),k===0&&O.generateMipmaps&&D.generateMipmap(Re),re.unbindTexture()},this.initRenderTarget=function(T){Ce.get(T).__webglFramebuffer===void 0&&Pe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Pe.setTextureCube(T,0):T.isData3DTexture?Pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Pe.setTexture2DArray(T,0):Pe.setTexture2D(T,0),re.unbindTexture()},this.resetState=function(){R=0,b=0,A=null,re.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ip?"display-p3":"srgb",n.unpackColorSpace=lt.workingColorSpace===Gc?"display-p3":"srgb"}}class Xc{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=n,this.far=i}clone(){return new Xc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class D_ extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class vn extends Hi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],m=[];let x=0;const y=[],p=i/2;let f=0;g(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Ln(d,3)),this.setAttribute("normal",new Ln(h,3)),this.setAttribute("uv",new Ln(m,2));function g(){const E=new B,R=new B;let b=0;const A=(n-e)/i;for(let L=0;L<=s;L++){const w=[],S=L/s,C=S*(n-e)+e;for(let V=0;V<=r;V++){const F=V/r,H=F*l+a,q=Math.sin(H),z=Math.cos(H);R.x=C*q,R.y=-S*i+p,R.z=C*z,d.push(R.x,R.y,R.z),E.set(q,A,z).normalize(),h.push(E.x,E.y,E.z),m.push(F,1-S),w.push(x++)}y.push(w)}for(let L=0;L<r;L++)for(let w=0;w<s;w++){const S=y[w][L],C=y[w+1][L],V=y[w+1][L+1],F=y[w][L+1];u.push(S,C,F),u.push(C,V,F),b+=6}c.addGroup(f,b,0),f+=b}function v(E){const R=x,b=new tt,A=new B;let L=0;const w=E===!0?e:n,S=E===!0?1:-1;for(let V=1;V<=r;V++)d.push(0,p*S,0),h.push(0,S,0),m.push(.5,.5),x++;const C=x;for(let V=0;V<=r;V++){const H=V/r*l+a,q=Math.cos(H),z=Math.sin(H);A.x=w*z,A.y=p*S,A.z=w*q,d.push(A.x,A.y,A.z),h.push(0,S,0),b.x=q*.5+.5,b.y=z*.5*S+.5,m.push(b.x,b.y),x++}for(let V=0;V<r;V++){const F=R+V,H=C+V;E===!0?u.push(H,H+1,F):u.push(H+1,H,F),L+=3}c.addGroup(f,L,E===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cp extends Hi{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new B,d=new B,h=new B;for(let m=0;m<=i;m++)for(let x=0;x<=r;x++){const y=x/r*s,p=m/i*Math.PI*2;d.x=(e+n*Math.cos(p))*Math.cos(y),d.y=(e+n*Math.cos(p))*Math.sin(y),d.z=n*Math.sin(p),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(x/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){const y=(r+1)*m+x-1,p=(r+1)*(m-1)+x-1,f=(r+1)*(m-1)+x,g=(r+1)*m+x;o.push(y,p,g),o.push(p,f,g)}this.setIndex(o),this.setAttribute("position",new Ln(a,3)),this.setAttribute("normal",new Ln(l,3)),this.setAttribute("uv",new Ln(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class St extends Ia{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d_,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class up extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const id=new Mt,Yg=new B,Kg=new B;class I_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ap,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Yg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yg),Kg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Kg),n.updateMatrixWorld(),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zg=new Mt,Fo=new B,rd=new B;class XC extends I_{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Fo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fo),rd.copy(i.position),rd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(rd),i.updateMatrixWorld(),r.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Zg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zg)}}class Vf extends up{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new XC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $C extends I_{constructor(){super(new T_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class N_ extends up{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new $C}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class U_ extends up{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class O_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Jg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Jg(){return(typeof performance>"u"?Date:performance).now()}const Qg=new Mt;class qC{constructor(e,n,i=0,r=1/0){this.ray=new v_(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Qg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qg),this}intersectObject(e,n=!0,i=[]){return Wf(e,this,i,n),i.sort(e0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Wf(e[r],this,i,n);return i.sort(e0),i}}function e0(t,e){return t.distance-e.distance}function Wf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Wf(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);const Qe={floor:9075306,wall:7037528,ceiling:4867392,shelf:6048306,box:9137991,boxAlt:8019002,pillar:7364688,ramp:7364688,sky:1710638,puddle:5935018,skin:13931882,trouser:3820122,boot:2762784,vest:16098851,helmet:16106776,shirt:13684944};function rt(t,e,n,i,r=0,s=0,o=0){const a=new et(new on(t,e,n),new St({color:i}));return a.position.set(r,s,o),a.castShadow=!0,a.receiveShadow=!0,a}function t0(t,e,n,i,r,s=0,o=0,a=0){const l=new et(new vn(t,e,n,i),new St({color:r}));return l.position.set(s,o,a),l}function YC(){const t=new ht,e=new ht;e.position.y=1.02,e.add(rt(.38,.5,.24,Qe.shirt)),e.add(rt(.38,.5,.02,Qe.vest,0,0,.13)),e.add(rt(.05,.5,.24,Qe.vest,-.165,0,0)),e.add(rt(.05,.5,.24,Qe.vest,.165,0,0)),e.add(rt(.38,.05,.26,15786048,0,.1,0)),t.add(e);const n=new ht;n.position.y=1.44,n.add(rt(.3,.28,.26,Qe.skin)),n.add(t0(.22,.22,.04,8,Qe.helmet,0,.16,0)),n.add(t0(.14,.21,.14,8,Qe.helmet,0,.26,0)),t.add(n);const i=c=>{const u=new ht;return u.position.set(c*.28,1.22,0),u.add(rt(.11,.3,.12,Qe.vest,0,-.15,0)),u.add(rt(.1,.27,.1,Qe.skin,0,-.43,0)),u},r=i(-1),s=i(1);t.add(r,s);const o=c=>{const u=new ht;return u.position.set(c*.11,.8,0),u.add(rt(.16,.36,.16,Qe.trouser,0,-.18,0)),u.add(rt(.14,.32,.14,Qe.trouser,0,-.52,0)),u.add(rt(.16,.12,.24,Qe.boot,0,-.72,.04)),u},a=o(-1),l=o(1);return t.add(a,l),{root:t,torso:e,head:n,leftArm:r,rightArm:s,leftLeg:a,rightLeg:l}}function KC(t){const e=new et(new Sr(22,18),new St({color:Qe.floor}));e.rotation.x=-Math.PI/2,e.position.set(0,0,-1),e.receiveShadow=!0,t.add(e);const n=new et(new on(22,6,.2),new St({color:Qe.wall}));n.position.set(0,3,-10),t.add(n);const i=new et(new on(.2,6,18),new St({color:Qe.wall}));i.position.set(-11,3,-1),t.add(i);const r=new et(new Sr(22,18),new St({color:Qe.ceiling}));r.rotation.x=Math.PI/2,r.position.set(0,5.5,-1),t.add(r),t.add(rt(5,.3,4,Qe.ramp,7.5,.15,4)),t.add(rt(.25,3.5,.25,Qe.pillar,5,1.75,7.9)),t.add(rt(.25,3.5,.25,Qe.pillar,10,1.75,7.9)),t.add(rt(5.25,.25,.25,Qe.pillar,7.5,3.5,7.9)),t.add(rt(.3,5.5,.3,Qe.pillar,0,2.75,-6));const s=(L,w)=>{const S=new ht;S.add(rt(.1,4,.1,Qe.shelf,-.85,2,0)),S.add(rt(.1,4,.1,Qe.shelf,.85,2,0));for(const C of[.45,1.35,2.3,3.25])S.add(rt(1.8,.07,.85,Qe.shelf,0,C,0));S.add(rt(.78,.55,.72,Qe.box,0,.72,0)),S.add(rt(.78,.55,.72,Qe.boxAlt,0,1.63,0)),S.position.set(L,0,w),t.add(S)};s(-8,-3),s(-8,-7),t.add(rt(.85,.68,.85,Qe.box,6.5,.34,2.5)),t.add(rt(.85,.68,.85,Qe.boxAlt,6.5,1.02,2.5)),t.add(rt(.85,.68,.85,Qe.box,6.5,1.7,2.5));const o=new ht;o.add(rt(.1,4.2,.1,Qe.shelf,-.9,2.1,0)),o.add(rt(.1,4.2,.1,Qe.shelf,.9,2.1,0));for(const L of[.5,1.4,2.4,3.4])o.add(rt(2,.07,.85,Qe.shelf,0,L,0));o.position.set(2,0,-1),t.add(o);const a=new et(new vn(.62,.7,.03,14),new St({color:Qe.puddle,transparent:!0,opacity:.82}));a.position.set(0,.015,-1),t.add(a);const l=new ht;l.add(rt(.7,.8,.65,8028272)),l.add(rt(.74,.05,.69,5923416,0,.425,0)),l.add(rt(.28,.3,.06,4870216,.1,-.05,.32));const c=new et(new vn(.014,.022,.28,5),new St({color:5929610,transparent:!0,opacity:.9}));c.position.set(.12,-.26,.35),l.add(c),l.position.set(2,.9,-1),l.rotation.y=.3,t.add(l);const u=2.12,d=-.68,h=.9-.4,m=new et(new vn(.016,.026,h,6),new St({color:5929610,transparent:!0,opacity:.88}));m.position.set(u,h/2+.015,d),t.add(m);const x=u,y=d,p=.7,f=-1,g=Math.sqrt((p-x)**2+(f-y)**2),v=Math.atan2(f-y,p-x),E=(x+p)/2,R=(y+f)/2,b=new et(new vn(.022,.032,g,6),new St({color:5929610,transparent:!0,opacity:.72}));b.rotation.z=Math.PI/2,b.rotation.y=-v,b.position.set(E,.016,R),t.add(b);const A=new ht;A.add(rt(1.8,.1,1.2,Qe.pillar,0,.05,0)),A.position.set(-4,0,2),t.add(A)}function ZC({onComplete:t}){const e=X.useRef(null),n=X.useRef(!1);return X.useEffect(()=>{const i=e.current;if(!i)return;const r=window.innerWidth,s=window.innerHeight,o=new L_({antialias:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(r,s),o.shadowMap.enabled=!0,i.appendChild(o.domElement);const a=new D_;a.background=new nt(Qe.sky),a.fog=new Xc(Qe.sky,18,35),a.add(new U_(16777215,.7));const l=new N_(16776168,1.1);l.position.set(4,10,6),l.castShadow=!0,a.add(l);const c=new Vf(16769184,.8,22);c.position.set(8,3,5),a.add(c);const u=new Vf(15266047,.6,18);u.position.set(0,5,0),a.add(u),KC(a);const{root:d,leftLeg:h,rightLeg:m,leftArm:x,rightArm:y}=YC();d.position.set(-5,0,-1),d.rotation.y=-Math.PI/2,a.add(d);const p=new pn(52,r/s,.1,40);p.position.set(-7,2.8,5.5),p.lookAt(1,.8,-.5);const f=document.createElement("div");Object.assign(f.style,{position:"absolute",inset:"0",background:"#000",opacity:"0",pointerEvents:"none",transition:"opacity 0.8s ease-in",zIndex:"10"}),i.appendChild(f);const g=2.2,v=1.2,E=3.6,R=4.5,b=5,A=-5+b,L=new O_;let w=0,S="walk",C=!1,V;const F=()=>{V=requestAnimationFrame(F);const q=Math.min(L.getDelta(),.05);if(w+=q,S==="walk"){const z=Math.min(w/g,1);d.position.x=-5+z*b;const $=Math.sin(w*9)*.6;h.rotation.x=$,m.rotation.x=-$,x.rotation.x=-$*.45,y.rotation.x=$*.45,z>=1&&(S="slip",h.rotation.x=.5,m.rotation.x=-.25,x.rotation.x=-1.1,y.rotation.x=-.8)}if(S==="slip"){const z=Math.min((w-g)/v,1),$=z*z;d.rotation.z=$*(Math.PI/2+.08),d.position.y=$*.12,d.position.x=A+$*.35,z>=1&&(S="done")}w>=E&&!C&&(C=!0,f.style.opacity="1"),w>=R&&!n.current&&(n.current=!0,t()),o.render(a,p)};o.render(a,p),F();const H=()=>{const q=window.innerWidth,z=window.innerHeight;p.aspect=q/z,p.updateProjectionMatrix(),o.setSize(q,z)};return window.addEventListener("resize",H),()=>{cancelAnimationFrame(V),window.removeEventListener("resize",H),o.dispose(),i.contains(o.domElement)&&i.removeChild(o.domElement),i.contains(f)&&i.removeChild(f)}},[]),_.jsx("div",{ref:e,style:{position:"fixed",inset:0,zIndex:999,width:"100vw",height:"100vh",overflow:"hidden"}})}function JC({briefing:t,onBegin:e}){return _.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:500,backdropFilter:"blur(4px)"},children:_.jsxs("div",{style:{background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderRadius:"14px",padding:"44px 52px",maxWidth:"620px",width:"90%",boxShadow:"0 24px 80px rgba(0,0,0,0.8)"},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"24px"},children:[_.jsx("div",{style:{background:"var(--accent-safety)",color:"#0f0f13",padding:"4px 12px",borderRadius:"4px",fontSize:"11px",fontWeight:700,letterSpacing:"0.12em"},children:"CASE FILE #001"}),_.jsx("span",{style:{color:"var(--text-muted)",fontSize:"13px"},children:"Warehouse Slip Incident"})]}),_.jsx("h2",{style:{fontSize:"22px",fontWeight:700,marginBottom:"16px",color:"var(--text-primary)"},children:"Incident Briefing"}),_.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.7,fontSize:"16px",marginBottom:"28px"},children:t}),_.jsxs("div",{style:{background:"var(--bg-elevated)",border:"1px solid var(--border-subtle)",borderRadius:"8px",padding:"18px 22px",marginBottom:"32px"},children:[_.jsx("div",{style:{fontSize:"11px",fontWeight:700,color:"var(--text-muted)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"14px"},children:"Objectives"}),["Find the 3 pieces of physical evidence","Answer the 5 Whys chain to trace the root cause","Finish in under 3 minutes (under 2 minutes for speed bonus)"].map((n,i)=>_.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px",marginBottom:i<2?"10px":0,fontSize:"14px",color:"var(--text-secondary)"},children:[_.jsx("span",{style:{color:"var(--accent-safety)",fontWeight:700,flexShrink:0,marginTop:"1px"},children:"→"}),n]},i))]}),_.jsx("button",{onClick:e,className:"btn-primary",style:{width:"100%",padding:"15px",fontSize:"16px"},children:"Begin Investigation"}),_.jsx("p",{style:{marginTop:"14px",fontSize:"12px",color:"var(--text-muted)",textAlign:"center"},children:"Timer starts when you click Begin"})]})})}const Se={floor:9075306,wall:7037528,ceiling:4867392,shelf:6048306,box:9137991,boxAlt:8019002,pallet:10518624,pillar:7364688,ramp:7364688,sky:1710638,puddle:5935018,container:8028272,containerDent:4870216,containerDrip:5929610,clipboard:13154458,clipPaper:15788760,clipMetal:8947848,extBody:9060416,extNozzle:5908520,extBracket:5592405,glove:11567200,signBody:13940800,signStripe:1842204,signLeg:8947848};function Fe(t,e,n,i,r=0,s=0,o=0,a=0){const l=new et(new on(t,e,n),new St({color:i}));return l.position.set(r,s,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}function Go(t,e,n,i,r,s=0,o=0,a=0){const l=new et(new vn(t,e,n,i),new St({color:r}));return l.position.set(s,o,a),l.castShadow=!0,l}function Ir(t,e,n){const i=new ht;i.add(Fe(.1,4.2,.1,Se.shelf,-.9,2.1,0)),i.add(Fe(.1,4.2,.1,Se.shelf,.9,2.1,0));for(const r of[.5,1.4,2.4,3.4])i.add(Fe(2,.07,.85,Se.shelf,0,r,0));return i.position.set(e,0,n),t.add(i),i}function QC(t,e,n,i=3){const r=new ht;for(let s=0;s<i;s++)r.add(Fe(.88,.68,.88,s%2===0?Se.box:Se.boxAlt,0,.34+s*.7,0));return r.position.set(e,0,n),t.add(r),r}function eP(t,e,n){const i=new ht;i.add(Fe(1.8,.1,1.2,Se.pallet,0,.05,0));for(const r of[-.45,0,.45])i.add(Fe(1.8,.06,.12,Se.pallet,0,.18,r));return i.position.set(e,0,n),t.add(i),i}function tP(t,e,n){const i=new ht;for(const[r,s]of[[-.22,-.16],[.22,-.16],[-.22,.16],[.22,.16]])i.add(Fe(.055,.55,.055,Se.pillar,r,.275,s));return i.add(Fe(.62,.05,.46,Se.pallet,0,.575,0)),i.position.set(e,0,n),t.add(i),i}function nP(t){const e=new ht;e.name=t;const n=new et(new vn(.65,.72,.03,14),new St({color:Se.puddle,transparent:!0,opacity:.82}));return n.name=t,e.add(n),e}function iP(t){const e=new ht;e.name=t;const n=Fe(.7,.8,.65,Se.container);n.name=t;const i=Fe(.74,.05,.69,5923416,0,.425,0);i.name=t;const r=Fe(.28,.3,.06,Se.containerDent,.1,-.05,.32);r.name=t;const s=new et(new vn(.014,.022,.28,5),new St({color:Se.containerDrip,transparent:!0,opacity:.9}));s.name=t,s.position.set(.12,-.26,.35);const o=new et(new vn(.009,.016,.18,5),new St({color:Se.containerDrip,transparent:!0,opacity:.7}));return o.name=t,o.position.set(.13,-.46,.36),e.add(n,i,r,s,o),e}function rP(t){const e=new ht;e.name=t;const n=Fe(.3,.44,.025,Se.clipboard);n.name=t;const i=Fe(.23,.34,.005,Se.clipPaper,0,-.02,.016);i.name=t;const r=Fe(.2,.048,.038,Se.clipMetal,0,.22,.005);r.name=t;const s=new et(new vn(.03,.03,.16,6),new St({color:Se.clipMetal}));s.name=t,s.rotation.z=Math.PI/2,s.position.set(0,.248,.01);const o=Fe(.025,.055,.065,Se.clipMetal,0,.278,-.02);o.name=t;for(let a=0;a<5;a++){const l=Fe(.18,.007,.004,10066304,0,.09-a*.07,.021);l.name=t,e.add(l)}return e.add(n,i,r,s,o),e}function sP(t){const e=new ht;e.name=t;const n=Go(.1,.11,.58,10,Se.extBody);n.name=t;const i=Go(.055,.1,.12,10,Se.extBody,0,.35,0);i.name=t;const r=Go(.025,.025,.18,6,Se.extNozzle,0,.46,0);r.name=t;const s=Go(.04,.04,.02,8,3355443,.12,.15,0);s.name=t,s.rotation.z=Math.PI/2;const o=new et(new cp(.13,.016,6,12,Math.PI*.9),new St({color:2236962}));o.name=t,o.rotation.x=Math.PI/2,o.position.set(.13,.05,0);const a=Fe(.28,.06,.06,Se.extBracket,0,0,-.12);a.name=t;const l=Fe(.05,.22,.06,Se.extBracket,-.12,.08,-.12);l.name=t;const c=Fe(.05,.22,.06,Se.extBracket,.12,.08,-.12);return c.name=t,e.add(n,i,r,s,o,a,l,c),e}function oP(t){const e=new ht;e.name=t;const n=(i,r)=>{const s=new ht,o=Fe(.2,.1,.26,Se.glove);o.name=t;for(let l=0;l<4;l++){const c=Fe(.042,.12,.1,Se.glove,-.072+l*.05,.01,.19);c.name=t,s.add(c)}const a=Fe(.09,.1,.13,Se.glove,.13,.01,.07);return a.name=t,a.rotation.y=-.75,s.add(o,a),s.rotation.y=r,s.position.x=i,s};return e.add(n(-.18,.2)),e.add(n(.18,-.2)),e}function aP(t){const e=new ht;e.name=t;const n=[0,Math.PI*2/3,Math.PI*4/3];for(const u of n){const d=Fe(.06,.06,.55,Se.signLeg,Math.sin(u)*.22,.03,Math.cos(u)*.22,u);d.name=t,e.add(d)}const i=Go(.025,.025,1.35,7,Se.signLeg,0,.735,0);i.name=t;const r=Fe(.54,.72,.04,Se.signBody,0,1.43,0);r.name=t;const s=Fe(.54,.08,.045,Se.signStripe,0,1.52,0);s.name=t;const o=Fe(.54,.08,.045,Se.signStripe,0,1.34,0);o.name=t;const a=Fe(.06,.06,.045,1710592,0,1.2,0);a.name=t;const l=Fe(.06,.24,.045,1710592,0,1.44,0);l.name=t;const c=Fe(.08,.08,.06,Se.signLeg,0,1.1,0);return c.name=t,e.add(i,r,s,o,a,l,c),e}function lP(t){const e=new ht;e.name=t;const n=Fe(.88,.68,.88,Se.box);n.name=t;const i=Fe(.88,.68,.88,Se.boxAlt,.55,0,0);return i.name=t,e.add(n,i),e}const sr=.45;function Jn(t,e,n=.1,i=.1){const r=new _r().setFromObject(e);r.min.x-=n+sr,r.max.x+=n+sr,r.min.z-=i+sr,r.max.z+=i+sr,t.push(r)}function sd(t,e,n){for(const i of t)if(e>i.min.x&&e<i.max.x&&n>i.min.z&&n<i.max.z)return!0;return!1}function cP({onHotspotClick:t,onReady:e}){const n=X.useRef(null),i=X.useRef(t),r=X.useRef(e);return X.useEffect(()=>{i.current=t},[t]),X.useEffect(()=>{r.current=e},[e]),X.useEffect(()=>{const s=n.current;if(!s)return;const o=window.innerWidth,a=window.innerHeight,l=new L_({antialias:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(o,a),l.shadowMap.enabled=!0,s.appendChild(l.domElement);const c=new D_;c.background=new nt(Se.sky),c.fog=new Xc(Se.sky,20,48);const u=new pn(75,o/a,.1,60);u.position.set(0,1.7,-15),c.add(new U_(16777215,.55));const d=new N_(16777215,.85);d.position.set(5,10,5),d.castShadow=!0,c.add(d);for(const le of[5,-3,-11,-19]){const Ae=new Vf(16771264,.55,18);Ae.position.set(0,4.6,le),c.add(Ae)}const h=[],m=new et(new Sr(28,44),new St({color:Se.floor}));m.rotation.x=-Math.PI/2,m.position.set(0,0,-6),m.receiveShadow=!0,c.add(m);const x=new et(new Sr(28,44),new St({color:Se.ceiling}));x.rotation.x=Math.PI/2,x.position.set(0,5,-6),c.add(x);const y=new St({color:Se.wall}),p=new et(new on(28,5,.25),y);p.position.set(0,2.5,16),c.add(p),Jn(h,p,0,0);const f=new et(new on(28,5,.25),y);f.position.set(0,2.5,-28),c.add(f),Jn(h,f,0,0);const g=new et(new on(.25,5,44),y);g.position.set(-14,2.5,-6),c.add(g),Jn(h,g,0,0);const v=new et(new on(.25,5,44),y);v.position.set(14,2.5,-6),c.add(v),Jn(h,v,0,0);const E=Fe(6,.3,3.5,Se.ramp,0,.15,14.5);c.add(E);const R=Fe(.25,3.2,.25,Se.pillar,-3.2,1.6,15.6),b=Fe(.25,3.2,.25,Se.pillar,3.2,1.6,15.6),A=Fe(6.6,.25,.25,Se.pillar,0,3.3,15.6);c.add(R,b,A);for(const le of[4,-4,-12,-20]){const Ae=Fe(.3,5,.3,Se.pillar,-2,2.5,le),Le=Fe(.3,5,.3,Se.pillar,2,2.5,le);c.add(Ae,Le),Jn(h,Ae,.05,.05),Jn(h,Le,.05,.05)}const L=new ht,w=new et(new on(4.2,2.9,3.2),new St({color:5919304}));w.position.y=1.45,L.add(w),L.add(Fe(4.4,.18,3.4,4866616,0,2.95,0)),L.add(Fe(.72,2.1,.06,3813416,-.5,1.05,1.62)),L.add(Fe(.85,.52,.06,8040640,.85,1.9,1.62)),L.position.set(9.5,0,5.5),c.add(L);{const le=new _r().setFromObject(L);le.min.x-=sr,le.max.x+=sr,le.min.z-=sr,le.max.z+=sr,h.push(le)}for(const le of[2,-2,-6,-10,-14,-18])Ir(c,-10,le),Ir(c,-8,le);{const le=Fe(4,4.5,22,Se.shelf,-9,2.25,-8);Jn(h,le,0,0)}for(const le of[0,-4,-8,-12,-16,-20])Ir(c,7,le),Ir(c,9,le);{const le=Fe(4,4.5,22,Se.shelf,8,2.25,-10);Jn(h,le,0,0)}for(const le of[-6,-10,-14])Ir(c,-4.5,le),Ir(c,4.5,le);{const le=Fe(2,4.5,10,Se.shelf,-4.5,2.25,-10),Ae=Fe(2,4.5,10,Se.shelf,4.5,2.25,-10);Jn(h,le,0,0),Jn(h,Ae,0,0)}const S=[[-9.2,0],[-9.2,-4],[-9.2,-8],[-9.2,-12],[-9.2,-16],[8.2,2],[8.2,-2],[8.2,-6],[8.2,-10],[8.2,-14],[-4.5,-7],[-4.5,-11],[4.5,-7],[4.5,-11],[3,-2],[-3,-3],[5,8],[-5,7]];for(const[le,Ae]of S){const Le=QC(c,le,Ae,2+Math.floor((Math.abs(le*Ae)*7+13)%3));Jn(h,Le,0,0)}const C=(le,Ae,Le,Rt)=>{c.add(Fe(.72,.55,.62,Rt,le,Ae+.275,Le))},V=[2,-2,-6,-10,-14,-18],F=[.5,1.4,2.4,3.4];for(const le of V)C(-10,F[0],le,Se.box),C(-10,F[1],le,Se.boxAlt),C(-8,F[0],le,Se.boxAlt),C(-8,F[2],le,Se.box);const H=[0,-4,-8,-12,-16,-20];for(const le of H)C(7,F[0],le,Se.box),C(7,F[2],le,Se.boxAlt),C(9,F[1],le,Se.box),C(9,F[3],le,Se.boxAlt);for(const le of[-6,-10,-14])C(-4.5,F[0],le,Se.boxAlt),C(-4.5,F[1],le,Se.box),C(4.5,F[0],le,Se.box),C(4.5,F[2],le,Se.boxAlt);for(const[le,Ae]of[[-9,4],[8.5,4],[3,10],[-3,10],[0,-2]])eP(c,le,Ae);const q=[];function z(le,Ae,Le,Rt,Ct=0){le.position.set(Ae,Le,Rt),le.rotation.y=Ct,c.add(le),le.traverse(un=>{un.isMesh&&un.name&&q.push(un)})}const $=2,I=7,K=0,J=7;Ir(c,$,I);const te=.9,Me=$+.12,Ve=I+.33,Y=te-.4,se=new et(new vn(.016,.026,Y,6),new St({color:Se.containerDrip,transparent:!0,opacity:.88}));se.position.set(Me,Y/2+.015,Ve),c.add(se);const ne=Me,ue=Ve,De=K+.2,He=J,Ge=(ne+De)/2,ut=(ue+He)/2,D=Math.sqrt((De-ne)**2+(He-ue)**2),pt=Math.atan2(He-ue,De-ne),qe=new et(new vn(.022,.032,D,6),new St({color:Se.containerDrip,transparent:!0,opacity:.72}));qe.rotation.z=Math.PI/2,qe.rotation.y=-pt,qe.position.set(Ge,.016,ut),c.add(qe),z(nP("wet-patch"),K,.015,J),z(iP("cracked-container"),$,te,I,.3);const je=Fe(.06,2.4,.06,Se.pillar,-13.7,1.2,-8);c.add(je),z(rP("hazard-log"),-13.6575,1.52,-8,Math.PI/2);const re=Fe(.5,.9,.05,4867136,13.88,1.2,5);c.add(re),z(sP("fire-extinguisher"),13.6,1.2,5,Math.PI/2),z(lP("overhanging-boxes"),-3,2.08,-3,0),tP(c,5,-8),z(oP("safety-gloves"),5,.65,-8,.3),z(aP("wet-floor-sign"),-4,0,-18,.2),sd(h,u.position.x,u.position.z)&&console.warn(`[WarehouseScene] SPAWN BLOCKED at (${u.position.x}, ${u.position.z}). Player will be stuck from frame one. Move the spawn or fix the collider.`),c.updateMatrixWorld(!0);const Ze=new Set(["wet-floor-sign","hazard-log","safety-gloves"]),Ce=new op({color:16768256,transparent:!0,opacity:0,depthWrite:!1,blending:af,side:Fi}),Pe=[];function P(le,Ae){const Le=new _r().setFromObject(le),Rt=new B,Ct=new B;Le.getSize(Rt),Le.getCenter(Ct),Ae&&console.log(`[Glow] ${Ae} center:`,Ct.x.toFixed(3),Ct.y.toFixed(3),Ct.z.toFixed(3));const un=new et(new on(Rt.x*1.04+.04,Rt.y*1.04+.04,Rt.z*1.04+.04),Ce.clone());un.position.copy(Ct),un.renderOrder=1,c.add(un),Pe.push(un)}const M=new Set;for(const le of q){let Ae=le;for(;Ae.parent&&Ae.parent!==c;)Ae=Ae.parent;M.has(Ae)||(M.add(Ae),Ze.has(Ae.name)?Ae.traverse(Le=>{Le.isMesh&&Le.name===Ae.name&&P(Le,Ae.name)}):P(Ae,null))}const W={"wet-patch":"Spilled liquid","cracked-container":"Container","hazard-log":"Report board","fire-extinguisher":"Fire extinguisher","overhanging-boxes":"Stacked boxes","safety-gloves":"Safety gloves","wet-floor-sign":"Wet floor sign"},ie=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <line x1="12" y1="2"  x2="12" y2="22" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="2"  y1="12" x2="22" y2="12" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
      <filter id="s"><feDropShadow dx="0" dy="0" stdDeviation="1" flood-color="black" flood-opacity="0.8"/></filter>
    </svg>`,ae=`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
      <!-- Palm block -->
      <rect x="7" y="11" width="12" height="11" rx="2" fill="white"/>
      <!-- Four fingers -->
      <rect x="7"  y="4" width="2.5" height="9" rx="1.2" fill="white"/>
      <rect x="10.5" y="2" width="2.5" height="11" rx="1.2" fill="white"/>
      <rect x="14" y="2" width="2.5" height="11" rx="1.2" fill="white"/>
      <rect x="17.5" y="4" width="2.5" height="9" rx="1.2" fill="white"/>
      <!-- Thumb -->
      <rect x="3" y="12" width="5" height="2.5" rx="1.2" fill="white" transform="rotate(-15 3 12)"/>
    </svg>`,Q=document.createElement("div");Object.assign(Q.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none",userSelect:"none",filter:"drop-shadow(0 0 2px rgba(0,0,0,0.9))",zIndex:"20",lineHeight:"0"}),Q.innerHTML=ie,s.style.position="relative",s.appendChild(Q);const be=document.createElement("div");Object.assign(be.style,{position:"absolute",top:"calc(50% + 20px)",left:"50%",transform:"translateX(-50%)",color:"#d0d0d0",fontSize:"13px",fontFamily:"sans-serif",fontWeight:"500",letterSpacing:"0.04em",pointerEvents:"none",userSelect:"none",textShadow:"0 1px 4px rgba(0,0,0,0.95)",background:"rgba(0,0,0,0.45)",padding:"2px 8px",borderRadius:"4px",display:"none",zIndex:"20"}),s.appendChild(be);const fe={},ve=new Gn(0,0,0,"YXZ");let ke=!1;const ce=new qC,_e=new tt(0,0);let Ye=null;const Ue=le=>{fe[le.code]=!0},ye=le=>{fe[le.code]=!1},Be=le=>{if(!ke)return;const Ae=.002;ve.y-=le.movementX*Ae,ve.x-=le.movementY*Ae,ve.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,ve.x)),u.quaternion.setFromEuler(ve)},We=()=>{ke=document.pointerLockElement===l.domElement,ke||(Q.innerHTML=ie,be.style.display="none",Ye=null)},dt=()=>{if(!ke){l.domElement.requestPointerLock();return}ce.setFromCamera(_e,u);const le=ce.intersectObjects(q,!1);if(le.length>0&&le[0].distance<6){const Ae=le[0].object.name;Ae&&i.current(Ae)}};l.domElement.addEventListener("click",dt),document.addEventListener("pointerlockchange",We),document.addEventListener("mousemove",Be),document.addEventListener("keydown",Ue),document.addEventListener("keyup",ye);const U=()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",U);const de=5,Z=new B,ee=new O_;let pe,Ie=0;const Je=()=>{pe=requestAnimationFrame(Je);const le=ee.getDelta();if(Ie+=le,ke){const Le=fe.KeyW||fe.ArrowUp?1:0,Rt=fe.KeyS||fe.ArrowDown?1:0,Ct=fe.KeyA||fe.ArrowLeft?1:0,un=fe.KeyD||fe.ArrowRight?1:0;if(Le||Rt||Ct||un){Z.set(un-Ct,0,Rt-Le).normalize().multiplyScalar(de*le),Z.applyEuler(new Gn(0,ve.y,0,"YXZ"));const So=u.position.x+Z.x,Eo=u.position.z+Z.z;sd(h,So,u.position.z)||(u.position.x=So),sd(h,u.position.x,Eo)||(u.position.z=Eo)}ce.setFromCamera(_e,u);const Xn=ce.intersectObjects(q,!1),xi=Xn.length>0&&Xn[0].distance<6?Xn[0].object.name:null;xi!==Ye&&(Ye=xi,xi?(Q.innerHTML=ae,be.textContent=W[xi]||xi,be.style.display="block"):(Q.innerHTML=ie,be.style.display="none"))}const Ae=.04+.06*(.5+.5*Math.sin(Ie/4.5*Math.PI*2));for(const Le of Pe)Le.material.opacity=Ae;l.render(c,u)};return Je(),r.current&&r.current(),()=>{cancelAnimationFrame(pe),document.exitPointerLock(),l.domElement.removeEventListener("click",dt),document.removeEventListener("pointerlockchange",We),document.removeEventListener("mousemove",Be),document.removeEventListener("keydown",Ue),document.removeEventListener("keyup",ye),window.removeEventListener("resize",U),s.contains(Q)&&s.removeChild(Q),s.contains(be)&&s.removeChild(be),l.dispose(),s.contains(l.domElement)&&s.removeChild(l.domElement)}},[]),_.jsx("div",{ref:n,style:{width:"100%",height:"100vh",cursor:"none",background:"#1a1a2e"}})}function uP({question:t,totalSteps:e=5,onSubmit:n,lastResult:i}){const[r,s]=X.useState(null),[o,a]=X.useState(!1);if(!t)return null;const l=t.order===e,c=async()=>{!r||o||(a(!0),await n(r),s(null),a(!1))};return _.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(5,5,8,0.92)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:300,backdropFilter:"blur(6px)"},children:_.jsxs("div",{style:{background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderRadius:"16px",padding:"40px 48px",maxWidth:"660px",width:"94%",boxShadow:"0 32px 100px rgba(0,0,0,0.85)"},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[_.jsx("div",{style:{display:"flex",gap:"5px",alignItems:"center"},children:Array.from({length:e}).map((u,d)=>{const h=d<t.order-1,m=d===t.order-1;return _.jsx("div",{style:{width:m?"22px":"8px",height:"8px",borderRadius:"999px",background:h?"var(--accent-success)":m?"var(--accent-safety)":"var(--bg-elevated)",border:m?"none":`1px solid ${h?"transparent":"var(--border-strong)"}`,transition:"width 0.2s, background 0.2s"}},d)})}),_.jsx("span",{style:{fontSize:"12px",fontWeight:700,letterSpacing:"0.14em",color:"var(--text-muted)",textTransform:"uppercase"},children:l?"Root Cause":`Step ${t.order} of ${e}`})]}),_.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",background:"var(--bg-elevated)",border:"1px solid var(--border-subtle)",borderRadius:"999px",padding:"3px 10px"},children:l?`+${t.points} pts`:`+${t.points} / −10`})]}),_.jsx("div",{style:{display:"flex",gap:"3px",marginBottom:"28px"},children:Array.from({length:e}).map((u,d)=>_.jsx("div",{style:{flex:1,height:"2px",borderRadius:"1px",background:d<t.order-1?"var(--accent-success)":d===t.order-1?"var(--accent-safety)":"var(--border-subtle)",transition:"background 0.25s"}},d))}),i&&_.jsxs("div",{style:{padding:"12px 16px",borderRadius:"8px",marginBottom:"20px",background:i.correct?"rgba(74,222,128,0.09)":"rgba(239,68,68,0.09)",border:`1px solid ${i.correct?"rgba(74,222,128,0.28)":"rgba(239,68,68,0.28)"}`,color:i.correct?"var(--accent-success)":"var(--accent-danger)",fontSize:"14px",fontWeight:600,display:"flex",alignItems:"center",gap:"8px"},children:[_.jsx("span",{style:{fontSize:"16px"},children:i.correct?"✓":"✗"}),_.jsx("span",{children:i.correct?`Correct — +${i.pointDelta} pts. Keep digging.`:`Incorrect — ${i.pointDelta} pts. Let's keep going.`})]}),_.jsx("h2",{style:{fontSize:"20px",fontWeight:700,color:"var(--text-primary)",marginBottom:"24px",lineHeight:1.45},children:t.question}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"28px"},children:t.options.map((u,d)=>{const h=r===u.id,m=String.fromCharCode(65+d);return _.jsxs("button",{onClick:()=>!o&&s(u.id),disabled:o,style:{display:"flex",alignItems:"flex-start",gap:"14px",padding:"16px 18px",border:`1px solid ${h?"var(--accent-safety)":"var(--border-subtle)"}`,borderRadius:"10px",cursor:o?"default":"pointer",background:h?"rgba(245,197,24,0.09)":"var(--bg-elevated)",transition:"border-color 0.12s, background 0.12s",textAlign:"left",width:"100%",outline:"none",fontFamily:"inherit"},children:[_.jsx("div",{style:{flexShrink:0,width:"26px",height:"26px",borderRadius:"6px",background:h?"var(--accent-safety)":"var(--bg-primary)",border:`1px solid ${h?"var(--accent-safety)":"var(--border-strong)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:800,color:h?"#0f0f13":"var(--text-muted)",transition:"background 0.12s, color 0.12s"},children:m}),_.jsx("span",{style:{color:"var(--text-primary)",fontSize:"15px",lineHeight:1.5,paddingTop:"2px"},children:u.text})]},u.id)})}),_.jsx("button",{onClick:c,disabled:!r||o,className:"btn-primary",style:{width:"100%",padding:"15px",fontSize:"16px",opacity:!r||o?.38:1,transition:"opacity 0.15s",letterSpacing:"0.02em"},children:o?"Submitting…":l?"Submit Root Cause":"Submit Answer"})]})})}function dP(){const[t,e]=X.useState(null),[n,i]=X.useState(null),[r,s]=X.useState(0),[o,a]=X.useState(0),[l,c]=X.useState(180),[u,d]=X.useState(!1),[h,m]=X.useState(null),[x,y]=X.useState(1),[p,f]=X.useState(!1),[g,v]=X.useState(null),E=X.useRef(!1),[R,b]=X.useState(!0),[A,L]=X.useState(null);X.useEffect(()=>{async function z(){var $,I;try{const J=(await mn.get("/game/incident")).data;i(J);const te=await mn.post("/game/start",{incidentId:J._id});e(te.data.attemptId)}catch(K){console.error("Failed to start game",K),L(((I=($=K.response)==null?void 0:$.data)==null?void 0:I.error)||K.message||"Failed to load the investigation")}finally{b(!1)}}z()},[]),X.useEffect(()=>{if(!u||l<=0)return;const z=setInterval(()=>c($=>Math.max(0,$-1)),1e3);return()=>clearInterval(z)},[u,l]);const w=X.useCallback(()=>d(!0),[]),S=X.useCallback(()=>d(!1),[]),C=X.useCallback(async z=>{if(t)try{const I=(await mn.post("/game/clue-click",{attemptId:t,hotspotId:z})).data;a(I.score),m({message:I.feedback,isPositive:I.pointDelta>0,pointDelta:I.pointDelta,isDecoy:!!I.isDecoy,alreadyFound:!!I.alreadyFound}),I.found&&!I.alreadyFound&&s(K=>K+1)}catch($){console.error("Hotspot click error:",$)}},[t]),V=X.useCallback(async z=>{if(t)try{const I=(await mn.post("/game/submit-why",{attemptId:t,whyOrder:x,optionId:z})).data;return a(I.score),v({correct:I.correct,pointDelta:I.pointDelta}),I.isFinal?(f(!0),S()):y(K=>K+1),I}catch($){console.error("submitWhyStep error:",$)}},[t,x,S]),F=X.useCallback(async(z,$=!1)=>{if(!t||E.current)return null;E.current=!0,S();try{return(await mn.post("/game/finish",{attemptId:t,timeTakenSeconds:z,timedOut:$})).data}catch(I){return console.error("finishGame error:",I),null}},[t,S]),H=X.useCallback(()=>m(null),[]),q=n!=null&&n.whyChain&&n.whyChain.find(z=>z.order===x)||null;return{attemptId:t,incident:n,cluesFound:r,runningScore:o,timeLeft:l,timerActive:u,feedback:h,clearFeedback:H,whyStep:x,whyDone:p,lastResult:g,currentWhyQuestion:q,startTimer:w,stopTimer:S,handleHotspotClick:C,submitWhyStep:V,finishGame:F,finishCalledRef:E,initLoading:R,initError:A}}function fP(){const t=li(),[e,n]=X.useState("cutscene"),i=X.useRef(null),r=X.useRef(!1),{incident:s,cluesFound:o,runningScore:a,timeLeft:l,timerActive:c,feedback:u,clearFeedback:d,whyDone:h,lastResult:m,currentWhyQuestion:x,startTimer:y,stopTimer:p,handleHotspotClick:f,submitWhyStep:g,finishGame:v,finishCalledRef:E,initError:R}=dP(),b=X.useCallback(()=>n("briefing"),[]),A=X.useCallback(()=>{n("exploring"),y()},[y]);X.useEffect(()=>{if(o>=3&&e==="exploring"&&!r.current){r.current=!0,n("clue-complete");try{document.exitPointerLock()}catch{}}},[o,e]),X.useEffect(()=>{if(e==="clue-complete"){const H=setTimeout(()=>n("why-chain"),2e3);return()=>clearTimeout(H)}},[e]),X.useEffect(()=>{l===0&&c&&!E.current&&(p(),v(180,!0).then(H=>{H&&t("/game/result",{state:{result:H}})}))},[l,c,E,p,v,t]),X.useEffect(()=>{if(h&&e==="why-chain"&&!E.current){const H=180-l;setTimeout(()=>{v(H,!1).then(q=>{q&&t("/game/result",{state:{result:q}})})},1800)}},[h,e,l,E,v,t]),X.useEffect(()=>(u&&(clearTimeout(i.current),i.current=setTimeout(d,3500)),()=>clearTimeout(i.current)),[u,d]);const L=X.useCallback(H=>{e!=="exploring"&&e!=="why-chain"||f(H)},[e,f]),w=H=>`${Math.floor(H/60)}:${String(H%60).padStart(2,"0")}`,S=l<=30,C=!S&&l<=60,F=(H=>H?H.alreadyFound?{label:"ALREADY LOGGED",labelColor:"var(--text-muted)",accent:"var(--border-strong)",delta:null}:H.isDecoy?{label:"IRRELEVANT EVIDENCE",labelColor:"var(--accent-danger)",accent:"rgba(239,68,68,0.25)",delta:H.pointDelta!==0?`${H.pointDelta}`:null}:{label:"EVIDENCE LOGGED",labelColor:"var(--accent-success)",accent:"rgba(74,222,128,0.20)",delta:H.pointDelta!==void 0?`+${H.pointDelta}`:null}:null)(u);return _.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh",background:"#0f0f13",overflow:"hidden"},children:[e==="cutscene"&&_.jsx(ZC,{onComplete:b}),e==="briefing"&&(s?_.jsx(JC,{briefing:s.briefing,onBegin:A}):R?_.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-primary)",zIndex:300},children:_.jsxs("div",{style:{maxWidth:"420px",width:"90%",textAlign:"center",background:"var(--bg-panel)",border:"1px solid rgba(239,68,68,0.30)",borderRadius:"12px",padding:"40px 32px"},children:[_.jsx("div",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.14em",color:"var(--accent-danger)",textTransform:"uppercase",marginBottom:"14px"},children:"Load Error"}),_.jsx("p",{style:{fontSize:"15px",color:"var(--text-secondary)",marginBottom:"28px",lineHeight:1.5},children:R}),_.jsx("button",{className:"btn-primary",onClick:()=>window.location.reload(),style:{padding:"12px 32px",fontSize:"15px"},children:"Retry"})]})}):_.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-primary)",zIndex:300},children:_.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"16px",letterSpacing:"0.04em"},children:"Loading investigation…"})})),(e==="exploring"||e==="clue-complete"||e==="why-chain"||e==="finished")&&_.jsx(cP,{onHotspotClick:L,onReady:()=>{}}),(e==="exploring"||e==="clue-complete"||e==="why-chain")&&_.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:"14px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:50,background:"linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, transparent 100%)",pointerEvents:"none"},children:[_.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",background:S?"rgba(239,68,68,0.18)":C?"rgba(249,115,22,0.15)":"rgba(255,255,255,0.08)",border:`1px solid ${S?"rgba(239,68,68,0.55)":C?"rgba(249,115,22,0.45)":"rgba(255,255,255,0.15)"}`,padding:"6px 14px",borderRadius:"999px",fontSize:"14px",fontWeight:700,color:S?"var(--accent-danger)":C?"var(--accent-warning)":"var(--text-primary)",backdropFilter:"blur(4px)"},children:[_.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[_.jsx("circle",{cx:"12",cy:"12",r:"10"}),_.jsx("polyline",{points:"12 6 12 12 16 14"})]}),w(l)]}),_.jsxs("div",{style:{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",padding:"6px 14px",borderRadius:"999px",fontSize:"14px",fontWeight:600,color:"var(--text-primary)",backdropFilter:"blur(4px)"},children:[a," pts"]})]}),_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",background:o>=3?"rgba(74,222,128,0.15)":"rgba(255,255,255,0.08)",border:`1px solid ${o>=3?"rgba(74,222,128,0.40)":"rgba(255,255,255,0.15)"}`,padding:"6px 14px",borderRadius:"999px",fontSize:"14px",fontWeight:600,color:o>=3?"var(--accent-success)":"var(--text-primary)",backdropFilter:"blur(4px)"},children:[_.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[_.jsx("circle",{cx:"11",cy:"11",r:"8"}),_.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),"Evidence ",o," / 3"]})]}),e==="exploring"&&!!c&&_.jsx("div",{style:{position:"absolute",bottom:20,left:"50%",transform:"translateX(-50%)",color:"rgba(255,255,255,0.38)",fontSize:"12px",pointerEvents:"none",zIndex:50,letterSpacing:"0.04em",textShadow:"0 1px 4px rgba(0,0,0,0.8)"},children:"Click to lock cursor · WASD to move · Mouse to look · Click objects to investigate"}),u&&F&&_.jsxs("div",{style:{position:"absolute",bottom:"72px",left:"50%",transform:"translateX(-50%)",width:"min(420px, 90vw)",background:"rgba(15,15,19,0.94)",border:`1px solid ${F.accent}`,borderRadius:"10px",padding:"16px 20px",zIndex:200,pointerEvents:"none",backdropFilter:"blur(12px)",boxShadow:"0 8px 32px rgba(0,0,0,0.6)"},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[_.jsx("div",{style:{fontSize:"10px",fontWeight:700,letterSpacing:"0.14em",color:F.labelColor,textTransform:"uppercase"},children:F.label}),F.delta&&_.jsxs("div",{style:{fontSize:"14px",fontWeight:800,color:u.isPositive?"var(--accent-success)":"var(--accent-danger)"},children:[F.delta," pts"]})]}),_.jsx("div",{style:{fontSize:"14px",color:"var(--text-secondary)",lineHeight:1.55},children:u.message})]}),e==="clue-complete"&&_.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.65)",zIndex:150,pointerEvents:"none"},children:_.jsxs("div",{style:{background:"rgba(15,15,19,0.92)",border:"1px solid rgba(74,222,128,0.30)",borderRadius:"12px",padding:"32px 48px",textAlign:"center",backdropFilter:"blur(16px)",boxShadow:"0 12px 48px rgba(0,0,0,0.7)"},children:[_.jsx("div",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.18em",color:"var(--accent-success)",textTransform:"uppercase",marginBottom:"14px"},children:"All Evidence Logged"}),_.jsxs("div",{style:{fontSize:"20px",fontWeight:700,color:"var(--text-primary)",lineHeight:1.4},children:["All clues found — preparing",_.jsx("br",{}),"your questions…"]})]})}),e==="why-chain"&&!h&&x&&_.jsx(uP,{question:x,totalSteps:5,onSubmit:g,lastResult:m})]})}const ko=[{indent:0,text:"Slip on wet floor",isRoot:!1},{indent:1,text:"Floor was wet from a leaking container",isRoot:!1},{indent:2,text:"Leak was never reported",isRoot:!1},{indent:3,text:"Staff didn’t know how to report a hazard",isRoot:!1},{indent:4,text:"Safety training wasn’t effectively delivered or reinforced",isRoot:!0}];function hP(){var u;const t=mo(),e=li(),n=(u=t.state)==null?void 0:u.result,[i,r]=X.useState(0);if(X.useEffect(()=>{if(!n)return;let d=0;const h=()=>{d+=1,r(d),d<ko.length&&setTimeout(h,350)},m=setTimeout(h,600);return()=>clearTimeout(m)},[n]),!n)return _.jsx("div",{style:{minHeight:"100vh",background:"var(--bg-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-primary)"},children:_.jsxs("div",{style:{textAlign:"center"},children:[_.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"20px"},children:"No results found."}),_.jsx("button",{onClick:()=>e("/dashboard"),className:"btn-primary",children:"Back to Dashboard"})]})});const s=n.passed,o=Math.floor((n.timeTakenSeconds||0)/60),a=(n.timeTakenSeconds||0)%60,l=`${o}:${String(a).padStart(2,"0")}`,c=n.timeTakenSeconds<120&&!n.timedOut;return _.jsxs(_.Fragment,{children:[_.jsx("style",{children:`
        @keyframes chainReveal {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}),_.jsx("div",{style:{minHeight:"100vh",background:"var(--bg-primary)",color:"var(--text-primary)"},children:_.jsxs("div",{className:"pg-body-narrow",style:{display:"flex",flexDirection:"column",gap:"24px"},children:[_.jsxs("div",{style:{background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderRadius:"16px",padding:"48px 48px 36px",textAlign:"center"},children:[_.jsx("div",{style:{display:"inline-block",padding:"7px 24px",borderRadius:"999px",fontWeight:700,fontSize:"12px",letterSpacing:"0.12em",textTransform:"uppercase",background:s?"rgba(74,222,128,0.12)":"rgba(239,68,68,0.12)",color:s?"var(--accent-success)":"var(--accent-danger)",border:`1px solid ${s?"rgba(74,222,128,0.32)":"rgba(239,68,68,0.32)"}`,marginBottom:"24px"},children:s?"✓  Investigation Passed":"✗  Investigation Failed"}),_.jsx("div",{style:{fontSize:"96px",fontWeight:800,lineHeight:1,color:s?"var(--accent-safety)":"var(--accent-danger)",letterSpacing:"-0.02em"},children:n.score}),_.jsx("div",{style:{color:"var(--text-muted)",fontSize:"15px",marginTop:"8px"},children:"out of 100  ·  pass threshold 60"}),_.jsxs("div",{style:{marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"center",gap:"14px",fontSize:"14px",color:"var(--text-muted)",flexWrap:"wrap"},children:[_.jsxs("span",{children:["Time: ",l]}),c&&_.jsx("span",{style:{color:"var(--accent-success)",fontWeight:600,background:"rgba(74,222,128,0.10)",border:"1px solid rgba(74,222,128,0.25)",borderRadius:"999px",padding:"2px 10px",fontSize:"13px"},children:"⚡ Speed bonus +10"}),n.timedOut&&_.jsx("span",{style:{color:"var(--accent-warning)",background:"rgba(249,115,22,0.10)",border:"1px solid rgba(249,115,22,0.28)",borderRadius:"999px",padding:"2px 10px",fontSize:"13px"},children:"⚠ Time expired"})]})]}),_.jsxs("div",{style:{background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderRadius:"16px",padding:"36px 44px"},children:[_.jsx("div",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--accent-safety)",marginBottom:"28px"},children:"The Real Causal Chain"}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0"},children:ko.map((d,h)=>{const m=h<i;return _.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0",opacity:m?1:0,animation:m?"chainReveal 0.30s ease both":"none",paddingLeft:`${d.indent*22}px`,marginBottom:(h<ko.length-1,"0")},children:[_.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginRight:"12px",flexShrink:0},children:[h>0&&_.jsx("div",{style:{width:"1px",height:"20px",background:d.isRoot?"var(--accent-safety)":"var(--border-strong)",marginBottom:"2px"}}),_.jsx("div",{style:{width:d.isRoot?"10px":"8px",height:d.isRoot?"10px":"8px",borderRadius:"50%",background:d.isRoot?"var(--accent-safety)":"var(--border-strong)",flexShrink:0,marginTop:h===0?"8px":"0"}}),h<ko.length-1&&_.jsx("div",{style:{width:"1px",flex:1,minHeight:"20px",background:"var(--border-strong)",marginTop:"2px"}})]}),_.jsx("div",{style:{paddingTop:h===0?"4px":"0",paddingBottom:"20px",flex:1},children:d.isRoot?_.jsxs("div",{style:{display:"inline-block",background:"rgba(245,197,24,0.10)",border:"1px solid rgba(245,197,24,0.32)",borderRadius:"8px",padding:"10px 16px"},children:[_.jsx("div",{style:{fontSize:"10px",fontWeight:800,letterSpacing:"0.16em",color:"var(--accent-safety)",textTransform:"uppercase",marginBottom:"5px"},children:"Root Cause"}),_.jsx("div",{style:{color:"var(--accent-safety)",fontWeight:700,fontSize:"15px",lineHeight:1.45},children:d.text})]}):_.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"15px",lineHeight:1.5,paddingTop:"2px"},children:d.text})})]},h)})}),n.feedback&&i>=ko.length&&_.jsx("div",{style:{marginTop:"8px",paddingTop:"20px",borderTop:"1px solid var(--border-subtle)",color:"var(--text-secondary)",fontSize:"14px",lineHeight:1.7,animation:"chainReveal 0.35s ease both"},children:n.feedback})]}),_.jsxs("div",{style:{display:"flex",gap:"14px",justifyContent:"center",paddingBottom:"32px"},children:[_.jsx("button",{onClick:()=>e("/dashboard/case/001"),className:"btn-primary",style:{padding:"13px 32px",fontSize:"16px"},children:"Return to Dashboard"}),_.jsx("button",{onClick:()=>e("/game/intro"),className:"btn-secondary",style:{padding:"12px 24px",fontSize:"15px"},children:"Try Again"})]})]})})]})}function pP(){const[t,e]=X.useState([]),[n,i]=X.useState(!0);X.useEffect(()=>{mn.get("/admin/results").then(l=>{const c=l.data.sort((u,d)=>{const h=u.name.localeCompare(d.name);return h!==0?h:(u.incidentTitle||"").localeCompare(d.incidentTitle||"")});e(c),i(!1)}).catch(l=>{console.error(l),i(!1)})},[]);const r={padding:"13px 18px",fontSize:"11px",fontWeight:700,letterSpacing:"0.10em",textTransform:"uppercase",color:"var(--text-muted)",background:"var(--bg-elevated)",borderBottom:"1px solid var(--border-subtle)",textAlign:"left"},s={padding:"15px 18px",fontSize:"14px",color:"var(--text-secondary)",borderBottom:"1px solid var(--border-subtle)",verticalAlign:"middle"},o={...s,fontWeight:700,color:"var(--text-primary)"},a=({name:l})=>{const c=l?l.split(" ").map(u=>u[0]).join("").slice(0,2).toUpperCase():"?";return _.jsx("div",{style:{width:"34px",height:"34px",borderRadius:"50%",flexShrink:0,background:"rgba(245,197,24,0.15)",border:"1px solid rgba(245,197,24,0.28)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:800,color:"var(--accent-safety)"},children:c})};return n?_.jsx("div",{style:{padding:"40px",textAlign:"center",color:"var(--text-muted)",fontSize:"14px"},children:"Loading…"}):t.length===0?_.jsx("div",{style:{padding:"48px",textAlign:"center",color:"var(--text-muted)"},children:"No employees found."}):_.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left"},children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{style:r,children:"Employee"}),_.jsx("th",{style:r,children:"Case"}),_.jsx("th",{style:r,children:"Attempts"}),_.jsx("th",{style:r,children:"Best Score"}),_.jsx("th",{style:r,children:"Status"}),_.jsx("th",{style:r,children:"Last Attempt"})]})}),_.jsx("tbody",{children:t.map((l,c)=>{const u=l.attempts>0,d=u?l.passed?"var(--accent-success)":"var(--accent-danger)":"var(--text-muted)";return _.jsxs("tr",{children:[_.jsx("td",{style:{...s,padding:"14px 18px"},children:_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[_.jsx(a,{name:l.name}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)",fontSize:"14px",marginBottom:"2px"},children:l.name}),_.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:l.email})]})]})}),_.jsx("td",{style:s,children:_.jsx("span",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)"},children:l.incidentTitle||"—"})}),_.jsx("td",{style:s,children:u?l.attempts:"—"}),_.jsx("td",{style:{...o,color:d},children:u?`${l.bestScore}`:"—"}),_.jsx("td",{style:s,children:u?_.jsx("span",{className:l.passed?"badge-pass":"badge-fail",children:l.passed?"Passed":"Failed"}):_.jsx("span",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.08em",color:"var(--text-muted)",textTransform:"uppercase"},children:"Not started"})}),_.jsx("td",{style:s,children:l.lastAttempt?new Date(l.lastAttempt).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"—"})]},`${l.userId}-${l.incidentId}`)})})]})}function mP(){const[t,e]=X.useState([]),[n,i]=X.useState(!0),[r,s]=X.useState(null),o=X.useCallback(()=>{mn.get("/admin/employees").then(d=>{e(d.data),i(!1)}).catch(d=>{console.error(d),i(!1)})},[]);X.useEffect(()=>{o()},[o]);const a=async d=>{var m,x;if(window.confirm(`Delete "${d.name}" (${d.email})?

This will permanently remove the account and ALL their attempt records. Their email and phone will be free to re-register immediately.

This cannot be undone.`)){s(d._id);try{await mn.delete(`/admin/employees/${d._id}`),e(y=>y.filter(p=>p._id!==d._id))}catch(y){alert(((x=(m=y.response)==null?void 0:m.data)==null?void 0:x.error)||"Delete failed — please try again.")}finally{s(null)}}},l={padding:"13px 18px",fontSize:"11px",fontWeight:700,letterSpacing:"0.10em",textTransform:"uppercase",color:"var(--text-muted)",background:"var(--bg-elevated)",borderBottom:"1px solid var(--border-subtle)",textAlign:"left"},c={padding:"15px 18px",fontSize:"14px",color:"var(--text-secondary)",borderBottom:"1px solid var(--border-subtle)"},u=({name:d})=>{const h=d?d.split(" ").map(m=>m[0]).join("").slice(0,2).toUpperCase():"?";return _.jsx("div",{style:{width:"34px",height:"34px",borderRadius:"50%",flexShrink:0,background:"rgba(245,197,24,0.12)",border:"1px solid rgba(245,197,24,0.25)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:800,color:"var(--accent-safety)"},children:h})};return n?_.jsx("div",{style:{padding:"40px",textAlign:"center",color:"var(--text-muted)",fontSize:"14px"},children:"Loading…"}):t.length===0?_.jsx("div",{style:{padding:"48px",textAlign:"center",color:"var(--text-muted)"},children:"No employees registered yet."}):_.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left"},children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{style:l,children:"Employee"}),_.jsx("th",{style:l,children:"Phone"}),_.jsx("th",{style:l,children:"Role"}),_.jsx("th",{style:l,children:"Joined"}),_.jsx("th",{style:l,children:"Actions"})]})}),_.jsx("tbody",{children:t.map(d=>{const h=r===d._id;return _.jsxs("tr",{children:[_.jsx("td",{style:{...c,padding:"14px 18px"},children:_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[_.jsx(u,{name:d.name}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)",fontSize:"14px",marginBottom:"2px"},children:d.name}),_.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:d.email})]})]})}),_.jsx("td",{style:c,children:d.phone||"—"}),_.jsx("td",{style:c,children:_.jsx("span",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-muted)"},children:d.role})}),_.jsx("td",{style:c,children:new Date(d.createdAt).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}),_.jsx("td",{style:c,children:_.jsx("button",{onClick:()=>a(d),disabled:h,style:{padding:"6px 14px",fontSize:"12px",fontWeight:700,letterSpacing:"0.04em",color:h?"var(--text-muted)":"var(--accent-danger)",background:"transparent",border:`1px solid ${h?"var(--border-subtle)":"rgba(239,68,68,0.40)"}`,borderRadius:"6px",cursor:h?"not-allowed":"pointer",opacity:h?.5:1,transition:"background 0.15s, color 0.15s, border-color 0.15s",fontFamily:"inherit"},onMouseEnter:m=>{h||(m.currentTarget.style.background="rgba(239,68,68,0.12)",m.currentTarget.style.borderColor="var(--accent-danger)")},onMouseLeave:m=>{m.currentTarget.style.background="transparent",m.currentTarget.style.borderColor="rgba(239,68,68,0.40)"},children:h?"Deleting…":"Delete"})})]},d._id)})})]})}function gP(){const[t,e]=X.useState("results"),{logout:n,user:i}=go(),r=li(),s=[{id:"results",label:"Employee Results"},{id:"list",label:"Employee List"}];return _.jsxs("div",{style:{background:"var(--bg-primary)",minHeight:"100vh",color:"var(--text-primary)"},children:[_.jsx("nav",{style:{background:"var(--bg-panel)",borderBottom:"1px solid var(--border-subtle)",height:"60px"},children:_.jsxs("div",{className:"pg-nav-inner",children:[_.jsxs("div",{style:{fontSize:"16px",fontWeight:700,letterSpacing:"0.04em"},children:["Safety",_.jsx("span",{style:{color:"var(--accent-safety)"},children:" Detective"}),_.jsx("span",{style:{marginLeft:"12px",fontSize:"11px",fontWeight:700,letterSpacing:"0.14em",color:"var(--text-muted)",textTransform:"uppercase"},children:"Admin"})]}),_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[_.jsx("span",{style:{fontSize:"14px",color:"var(--text-secondary)"},children:i==null?void 0:i.name}),_.jsx("button",{onClick:()=>{n(),r("/")},className:"btn-secondary",style:{padding:"7px 16px",fontSize:"13px"},children:"Log Out"})]})]})}),_.jsxs("div",{className:"pg-body",children:[_.jsxs("div",{style:{marginBottom:"36px"},children:[_.jsx("div",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.14em",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"6px"},children:"Admin Dashboard"}),_.jsxs("h1",{style:{fontSize:"26px",fontWeight:700},children:["Welcome, ",i==null?void 0:i.name]})]}),_.jsx("div",{style:{display:"flex",gap:"2px",borderBottom:"1px solid var(--border-subtle)",marginBottom:"0"},children:s.map(o=>{const a=t===o.id;return _.jsx("button",{onClick:()=>e(o.id),style:{background:"none",border:"none",cursor:"pointer",padding:"12px 20px",fontSize:"14px",fontWeight:a?700:500,color:a?"var(--text-primary)":"var(--text-muted)",borderBottom:a?"2px solid var(--accent-safety)":"2px solid transparent",marginBottom:"-1px",transition:"color 0.15s",fontFamily:"inherit",letterSpacing:a?"0.01em":"0"},children:o.label},o.id)})}),_.jsx("div",{style:{background:"var(--bg-panel)",border:"1px solid var(--border-subtle)",borderTop:"none",borderRadius:"0 0 12px 12px",overflow:"hidden"},children:t==="results"?_.jsx(pP,{}):_.jsx(mP,{})})]})]})}function Nr({role:t,children:e}){const{user:n}=go();return n?t&&n.role!==t?_.jsx(Pm,{to:"/",replace:!0}):e:_.jsx(Pm,{to:"/login",replace:!0})}function vP(){return _.jsx(vE,{children:_.jsx(hE,{children:_.jsx(xE,{children:_.jsxs(oE,{children:[_.jsx(Qn,{path:"/",element:_.jsx(_E,{})}),_.jsx(Qn,{path:"/login",element:_.jsx(Iw,{})}),_.jsx(Qn,{path:"/signup",element:_.jsx(Fw,{})}),_.jsx(Qn,{path:"/dashboard",element:_.jsx(Nr,{role:"employee",children:_.jsx(kw,{})})}),_.jsx(Qn,{path:"/dashboard/case/:id",element:_.jsx(Nr,{role:"employee",children:_.jsx(Bw,{})})}),_.jsx(Qn,{path:"/game/intro",element:_.jsx(Nr,{role:"employee",children:_.jsx(zw,{})})}),_.jsx(Qn,{path:"/game/help",element:_.jsx(Nr,{role:"employee",children:_.jsx(Hw,{})})}),_.jsx(Qn,{path:"/game/play",element:_.jsx(Nr,{role:"employee",children:_.jsx(fP,{})})}),_.jsx(Qn,{path:"/game/result",element:_.jsx(Nr,{role:"employee",children:_.jsx(hP,{})})}),_.jsx(Qn,{path:"/admin",element:_.jsx(Nr,{role:"admin",children:_.jsx(gP,{})})})]})})})})}od.createRoot(document.getElementById("root")).render(_.jsx(f0.StrictMode,{children:_.jsx(vP,{})}));
