(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=window,F=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),et=new WeakMap;let $t=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&et.set(e,t))}return t}toString(){return this.cssText}};const yt=r=>new $t(typeof r=="string"?r:r+"",void 0,tt),Et=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new $t(e,r,tt)},bt=(r,t)=>{F?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=k.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},it=F?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return yt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const I=window,st=I.trustedTypes,St=st?st.emptyScript:"",rt=I.reactiveElementPolyfillSupport,Z={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ft=(r,t)=>t!==r&&(t==t||r==r),V={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:ft},J="finalized";let S=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=V){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||V}static finalize(){if(this.hasOwnProperty(J))return!1;this[J]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(it(s))}else t!==void 0&&e.push(it(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return bt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=V){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Z).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=s.getPropertyOptions(o),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:Z;this._$El=o,this[o]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ft)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};S[J]=!0,S.elementProperties=new Map,S.elementStyles=[],S.shadowRootOptions={mode:"open"},rt==null||rt({ReactiveElement:S}),((z=I.reactiveElementVersions)!==null&&z!==void 0?z:I.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y;const j=window,T=j.trustedTypes,ot=T?T.createPolicy("lit-html",{createHTML:r=>r}):void 0,Q="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,gt="?"+v,Ct=`<${gt}>`,y=document,B=()=>y.createComment(""),x=r=>r===null||typeof r!="object"&&typeof r!="function",vt=Array.isArray,Tt=r=>vt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",G=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,lt=/>/g,m=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),at=/'/g,ht=/"/g,_t=/^(?:script|style|textarea|title)$/i,wt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),b=wt(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ct=new WeakMap,A=y.createTreeWalker(y,129,null,!1);function mt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}const Pt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=M;for(let h=0;h<e;h++){const l=r[h];let a,c,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===M?c[1]==="!--"?n=nt:c[1]!==void 0?n=lt:c[2]!==void 0?(_t.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=m):c[3]!==void 0&&(n=m):n===m?c[0]===">"?(n=s??M,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,a=c[1],n=c[3]===void 0?m:c[3]==='"'?ht:at):n===ht||n===at?n=m:n===nt||n===lt?n=M:(n=m,s=void 0);const f=n===m&&r[h+1].startsWith("/>")?" ":"";o+=n===M?l+Ct:d>=0?(i.push(a),l.slice(0,d)+Q+l.slice(d)+v+f):l+v+(d===-2?(i.push(void 0),h):f)}return[mt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class R{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const h=t.length-1,l=this.parts,[a,c]=Pt(t,e);if(this.el=R.createElement(a,i),A.currentNode=this.el.content,e===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(s=A.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const p of s.getAttributeNames())if(p.endsWith(Q)||p.startsWith(v)){const f=c[n++];if(d.push(p),f!==void 0){const At=s.getAttribute(f.toLowerCase()+Q).split(v),L=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:L[2],strings:At,ctor:L[1]==="."?Ot:L[1]==="?"?xt:L[1]==="@"?Rt:D})}else l.push({type:6,index:o})}for(const p of d)s.removeAttribute(p)}if(_t.test(s.tagName)){const d=s.textContent.split(v),p=d.length-1;if(p>0){s.textContent=T?T.emptyScript:"";for(let f=0;f<p;f++)s.append(d[f],B()),A.nextNode(),l.push({type:2,index:++o});s.append(d[p],B())}}}else if(s.nodeType===8)if(s.data===gt)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(v,d+1))!==-1;)l.push({type:7,index:o}),d+=v.length-1}o++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function w(r,t,e=r,i){var s,o,n,h;if(t===E)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,i)),i!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=w(r,l._$AS(r,t.values),l,i)),t}class Mt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(i,!0);A.currentNode=o;let n=A.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new U(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Nt(n,this,t)),this._$AV.push(c),a=s[++l]}h!==(a==null?void 0:a.index)&&(n=A.nextNode(),h++)}return A.currentNode=y,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Tt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.$(y.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=R.createElement(mt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const n=new Mt(o,this),h=n.u(this.options);n.v(i),this.$(h),this._$AH=n}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new R(t)),e}T(t){vt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new U(this.k(B()),this.k(B()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class D{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=w(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const h=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=w(this,h[i+l],e,l),a===E&&(a=this._$AH[l]),n||(n=!x(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const Bt=T?T.emptyScript:"";class xt extends D{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Bt):this.element.removeAttribute(this.name)}}class Rt extends D{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=w(this,t,e,0))!==null&&i!==void 0?i:u)===E)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const dt=j.litHtmlPolyfillSupport;dt==null||dt(R,U),((Y=j.litHtmlVersions)!==null&&Y!==void 0?Y:j.litHtmlVersions=[]).push("2.7.5");const Ut=(r,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new U(t.insertBefore(B(),h),h,void 0,e??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q,W;class O extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}}O.finalized=!0,O._$litElement$=!0,(q=globalThis.litElementHydrateSupport)===null||q===void 0||q.call(globalThis,{LitElement:O});const ut=globalThis.litElementPolyfillSupport;ut==null||ut({LitElement:O});((W=globalThis.litElementVersions)!==null&&W!==void 0?W:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=r=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(r,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(n){customElements.define(e,n)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}},kt=(r,t,e)=>{t.constructor.createProperty(e,r)};function H(r){return(t,e)=>e!==void 0?kt(r,t,e):Lt(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function It(r){return H({...r,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;((K=window.HTMLSlotElement)===null||K===void 0?void 0:K.prototype.assignedElements)!=null;var $=(r=>(r[r.EMPTY_EMPTY=0]="EMPTY_EMPTY",r[r.EMPTY_TARGET=1]="EMPTY_TARGET",r[r.TARGET_EMPTY=2]="TARGET_EMPTY",r[r.TARGET_TARGET=3]="TARGET_TARGET",r[r.TARGET_BOMB=4]="TARGET_BOMB",r[r.BOMB_TARGET=5]="BOMB_TARGET",r[r.EMPTY_BOMB=6]="EMPTY_BOMB",r[r.BOMB_EMPTY=7]="BOMB_EMPTY",r[r.BOMB_BOMB=8]="BOMB_BOMB",r))($||{});class N{constructor(t){this.field=t}getPrimaryValue(){const t=$[this.field],[e]=t.split("_");return e.toLocaleLowerCase()}getPrimaryEmoji(){return N.getEmoji(this.getPrimaryValue())}getSecondaryValue(){const t=$[this.field],[,e]=t.split("_");return e.toLocaleLowerCase()}getSecondaryEmoji(){return N.getEmoji(this.getSecondaryValue())}getType(){return this.field}static getEmoji(t){switch(t){case"empty":return"&#x26AA;";case"target":return"&#9989;";case"bomb":return"&#x1F4A3;";default:return"-"}}}const g=class g{constructor(t=g.getGeneratedList()){this.list=t}getField(t=0,e){if(e!==void 0){const i=t*e;if(i>=this.list.length)throw new Error("No grid field for position");return this.list[i]}return this.list[t]}getAllFields(){return[...this.list]}getAllFieldsAsList(){return this.list.reduce((t,e)=>t.concat([e.getType()]),[])}getAllFieldsAsString(){return this.list.reduce((t,e)=>t+e.getType(),"")}getCode(){const t=BigInt(this.getAllFieldsAsString());console.log("decimal",t);const e=t.toString(36);return console.log("base36String",e),e}static setFieldOnRandomPosition(t,e){const i=t.reduce((n,h,l)=>h===void 0?n.concat([l]):n,[]),s=i[g.getRandomNumber(i.length-1)],o=[...t];return o[s]=new N(e),o}static getGeneratedList(){let t=new Array(25).fill(void 0);return g.frequencyMapping.forEach(e=>{for(let i=0;i<e[1];i++)t=g.setFieldOnRandomPosition(t,e[0])}),t}static getValuesFromCode(t){let i=g.convertBaseStringToBigInt(t).toString();for(;i.length<25;)i=`0${i}`;const s=[];for(let o=0;o<i.length;o++)s.push(new N(parseInt(i[o],10)));return s}static getRandomNumber(t=10){return Math.round(Math.random()*t)}static convertBaseStringToBigInt(t,e=36){return Array.from(t).reduce((i,s)=>i*BigInt(e)+BigInt(parseInt(s,e)),0n)}};g.frequencyMapping=[[$.EMPTY_EMPTY,7],[$.EMPTY_TARGET,5],[$.TARGET_EMPTY,5],[$.TARGET_TARGET,3],[$.TARGET_BOMB,1],[$.BOMB_TARGET,1],[$.EMPTY_BOMB,1],[$.BOMB_EMPTY,1],[$.BOMB_BOMB,1]];let C=g;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Dt=r=>(...t)=>({_$litDirective$:r,values:t});class zt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class X extends zt{constructor(t){if(super(t),this.et=u,t.type!==jt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this.ft=void 0,this.et=t;if(t===E)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}X.directiveName="unsafeHTML",X.resultType=1;const pt=Dt(X);var Vt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,P=(r,t,e,i)=>{for(var s=i>1?void 0:i?Yt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Vt(t,e,s),s};let _=class extends O{constructor(){super(),this.gameCode="",this.count=0,this.show=!1,this.site="A",this.grid=new C(this.gameCode!==""?C.getValuesFromCode(this.gameCode):void 0)}render(){return b`
            <slot></slot>
            <label for="code">Code</label>
            <input name="code" id="code" .value=${this.gameCode} @input=${this._onCodeChange} />
            <label for="site">Seite</label>
            <select name="site" id="site" .value=${this.site} @input=${this._onSiteSelect}>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
            <button type="submit" @click=${this._onClick}>Anzeigen</button>
            ${this.show?b`
                      ${this.site==="A"?b`
                                <div class="grid">
                                    ${this.grid.getAllFields().map(r=>b`<span>${pt(r.getPrimaryEmoji())}</span>`)}
                                </div>
                            `:b`
                                <div class="grid">
                                    ${this.grid.getAllFields().map(r=>b`<span>${pt(r.getSecondaryEmoji())}</span>`)}
                                </div>
                            `}
                  `:""}
            <pre>Card Code: ${this.grid.getCode()}</pre>
        `}_onClick(){this.gameCode!==""&&(this.grid=new C(C.getValuesFromCode(this.gameCode))),this.show=!0}_onCodeChange(r){var t;console.log("event",r),this.gameCode=((t=r.target)==null?void 0:t.value)??""}_onSiteSelect(r){var t;console.log("event",r),this.site=((t=r.target)==null?void 0:t.value)??""}};_.styles=Et`
        :host {
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
        }

        .logo {
            height: 6em;
            padding: 1.5em;
            will-change: filter;
            transition: filter 300ms;
        }
        .logo:hover {
            filter: drop-shadow(0 0 2em #646cffaa);
        }
        .logo.lit:hover {
            filter: drop-shadow(0 0 2em #325cffaa);
        }

        .card {
            padding: 2em;
        }

        .read-the-docs {
            color: #888;
        }

        ::slotted(h1) {
            font-size: 3.2em;
            line-height: 1.1;
        }

        a {
            font-weight: 500;
            color: #646cff;
            text-decoration: inherit;
        }
        a:hover {
            color: #535bf2;
        }

        button {
            border-radius: 8px;
            border: 1px solid transparent;
            padding: 0.6em 1.2em;
            font-size: 1em;
            font-weight: 500;
            font-family: inherit;
            background-color: #1a1a1a;
            cursor: pointer;
            transition: border-color 0.25s;
        }
        button:hover {
            border-color: #646cff;
        }
        button:focus,
        button:focus-visible {
            outline: 4px auto -webkit-focus-ring-color;
        }

        @media (prefers-color-scheme: light) {
            a:hover {
                color: #747bff;
            }
            button {
                background-color: #f9f9f9;
            }
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            border: 2px solid black;
            border-radius: 25px;
            margin-bottom: 2rem;
        }

        .grid > * {
            aspect-ratio: 1/1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;P([H({attribute:!0})],_.prototype,"gameCode",2);P([H({type:Number})],_.prototype,"count",2);P([It()],_.prototype,"grid",2);P([H({type:Boolean})],_.prototype,"show",2);P([H()],_.prototype,"site",2);_=P([Ht("duet-game-grid")],_);
