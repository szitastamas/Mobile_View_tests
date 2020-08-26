var Lailo =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/typeit/dist/typeit.es.min.js":
/*!***************************************************!*\
  !*** ./node_modules/typeit/dist/typeit.es.min.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
  * TypeIt - The most versatile animated typing utility on the planet.
  * Author: Alex MacArthur <alex@macarthur.me> (https://macarthur.me)
  * Version: v7.0.4
  * License: GPL-2.0
  * URL: https://typeitjs.com
  */
var e={strings:[],speed:100,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,lifeLike:!0,breakLines:!0,startDelay:250,startDelete:!1,nextStringDelay:750,loop:!1,loopDelay:750,html:!0,waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},t=e=>e.map(e=>(void 0===e[1]&&e.push(null),void 0===e[2]&&e.push({}),e)),n=(e,t)=>Object.assign({},e,t),r=e=>Array.isArray(e),i=(e,t)=>(e[2]=n(e[2],t)||t,e),o=(e,t)=>r(e[0])?e.map(e=>i(e,t)):i(e,t),a=(e,t,n,i)=>{i=i||!1,n=n||{};var a=!r(e),u=e.length;return(e=a?new Array(e).fill(0):e).map((e,r)=>{if(a)return t;var c=[t,e,n];return i&&(0===r&&(c=o(c,{isFirst:!0})),r+1===u&&(c=o(c,{isLast:!0}))),c})};function u(e){this.insert=function(e,t){i.splice(e,0,t)},this.add=function(e,u,c){return e=r(e)?e:[e,null],c=c||!1,u=u||1,r(e[0])||(e=a(u,e)),e=t(e).map(e=>(e[2]=n(e[2],{id:o}),o++,e)),i=c?e.concat(i):i.concat(e),this},this.set=function(e,t){i[e]=t},this.reset=function(){i=i.map(e=>(e[2].executed=!1,e))},this.getItems=function(){return(i=t(i)).filter(e=>!e[2].executed)},this.setMeta=function(e,t){var r=i.findIndex(t=>t[2].id===e);i[r][2]=n(i[r][2],t)};var i=[],o=0;this.add(e)}var c=e=>Array.from(e),s=e=>{var t=[];return t.concat.apply(t,e)},l=e=>{var t=document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body},f=(e,t,n)=>{t=t||null,n=void 0!==n&&n;var r=c(e.childNodes).map(e=>{return 3===(t=e).nodeType||"BR"===t.tagName?e:f(e);var t});return r=s(r),t&&(r=r.filter(e=>!t.contains(e))),n?r.reverse():r},d=e=>"BODY"===e.tagName,h=(e,t)=>{t=t||null;var n=e instanceof HTMLElement;return{node:t,isTopLevelText:(!t||d(t.parentNode))&&!n,isHTMLElement:n,content:e}};function v(e){var t,n=l(e);return t=f(n).map(e=>e.nodeValue?c(e.nodeValue).map(t=>h(t,e)):h(e)),s(t)}function p(e,t){return(t=void 0===t||t)?v(e):c(e).map(e=>h(e))}var m=e=>document.createElement(e),y=(e,t)=>{var n=m("style");n.id=t||"",n.appendChild(document.createTextNode(e)),document.head.appendChild(n)},g=e=>(r(e)||(e=[e/2,e/2]),{before:e[0],after:e[1],total:e[0]+e[1]}),b=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));var N=e=>["textarea","input"].indexOf(e.tagName.toLowerCase())>-1,S=(e,t)=>{var n=t.querySelectorAll("*");return[t].concat(c(n).reverse()).find(t=>t.cloneNode().outerHTML===e.outerHTML)},T=(e,t,n,r)=>{n=n||null;var i=t.isHTMLElement,o=i?t.content:document.createTextNode(t.content);if(N(e))e.value="".concat(e.value).concat(t.content);else{if(!t.isTopLevelText&&!i){var a=t.node.parentNode,u=S(a.cloneNode(),e);if(((e,t)=>{if(!e)return!1;var n=e.nextSibling;return!n||n.isEqualNode(t)})(u,n))e=u;else if((o=a.cloneNode()).innerText=t.content,!d(a.parentNode)){for(var c=a.parentNode,s=c.cloneNode(),l=S(s,e);!l&&!d(c);)s.innerHTML=o.outerHTML,o=s,s=c.parentNode.cloneNode(),c=c.parentNode,l=S(s,e);e=l||e}}var h=f(e,n,!0)[r-1],v=h?h.parentNode:e;v.insertBefore(o,v.contains(n)?n:null)}},L=e=>{var t;return null==e||null===(t=e.parentNode)||void 0===t?void 0:t.removeChild(e)};var M=(e,t,n)=>{var r,i="string"==typeof e,o=!1,a=-1*e;return i&&(a=(r="END"===e.toUpperCase())?-1:1,o=r?t+a>0:t+a<n.length),{isString:i,numberOfSteps:a,canKeepMoving:o}},x=e=>{var t,n=["font","lineHeight","color"],r=m("SPAN"),i=(t=e,window.getComputedStyle(t,null));for(var o in i)n.indexOf(o)>-1&&i[o]&&(r.style[o]=i[o]);return r.style.cssText};function w(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function D(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(e){return Promise.reject(e)}}}function H(){}function E(e,t){if(!t)return e&&e.then?e.then(H):Promise.resolve()}function C(e,t){var n=e();return n&&n.then?n.then(t):t(n)}function A(e,t,n){if(!e.s){if(n instanceof k){if(!n.s)return void(n.o=A.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(A.bind(null,e,t),A.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var k=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,i=this.s;if(i){var o=1&i?t:n;if(o){try{A(r,1,o(this.v))}catch(e){A(r,2,e)}return r}return this}return this.o=function(e){try{var i=e.v;1&e.s?A(r,1,t?t(i):i):n?A(r,1,n(i)):A(r,2,i)}catch(e){A(r,2,e)}},r},e}();function O(e,t){return e&&e.then?e.then(t):t(e)}/* harmony default export */ __webpack_exports__["default"] = (function(t,i){var o=this;i=i||{};var s=(e,t,n)=>(e=r(e[0])?e:[e],oe.add(e,t),(e=>{var t=(e=e||{}).delay;t&&oe.add([V,t])})(n),this),d=e=>[[F,e="object"==typeof e?e:{},{force:!0}],[F,ee,{force:!0}]],S=()=>J?c(G.value):f(G,ae,!0),P=(e,t)=>{t=t||1;var n=ee.nextStringDelay;oe.insert(e,[V,n.before]),oe.insert(e+t+1,[V,n.after])},z=D((function(){if(ae){var e="[data-typeit-id='".concat(ie,"'] .ti-cursor");y("@keyframes blink-".concat(ie," { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } ").concat(e," { animation: blink-").concat(ie," ").concat(ee.cursorSpeed/1e3,"s infinite; } ").concat(e,".with-delay { animation-delay: 500ms; } ").concat(e,".disabled { animation: none; }"),ie),G.appendChild(ae);var t="loaded"===document.fonts.status;return w(t||document.fonts.ready,(function(e){var t=ae.getBoundingClientRect().width/2;ae.style.margin="0 -".concat(t+2,"px 0 -").concat(t-2,"px")}),t)}})),B=e=>{ae&&(ae.classList.toggle("disabled",e),ae.classList.toggle("with-delay",!e))},I=D((function(e,t){return X.push(setTimeout(e,t)),w()})),R=D((function(e){var t=Z;return w(t&&j(Z),(function(t){return oe.reset(),oe.set(0,[V,e.before]),E(Q(!0))}),!t)})),q=D((function(){_.started=!0;var e,t=oe.getItems();return O(function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return O(function(e,t,n){var r,i,o=-1;return function a(u){try{for(;++o<e.length&&(!n||!n());)if((u=t(o))&&u.then){if(!((c=u)instanceof k&&1&c.s))return void u.then(a,i||(i=A.bind(null,r=new k,2)));u=u.v}r?A(r,1,u):r=u}catch(e){A(r||(r=new k),2,e)}var c}(),r}(t,(function(n){if(_.frozen||_.destroyed)throw"";var r,i,a,u,c=t[n],s=c[2];return e=[c,o],s.freezeCursor&&B(!0),r=ee.speed,i=ee.deleteSpeed,a=ee.lifeLike,u=(i=null!==i?i:r/3)/2,W=a?[b(r,r/2),b(i,u)]:[r,i],C((function(){var t;if(null==s?void 0:s.isFirst)return E((t=ee).beforeString.apply(t,e))}),(function(){var t;return w((t=ee).beforeStep.apply(t,e),(function(){return w(c[0].call(o,c[1],s),(function(){return C((function(){var t,n;if(null===(t=c[2])||void 0===t?void 0:t.isLast)return E((n=ee).afterString.apply(n,e))}),(function(){var t;return w((t=ee).afterStep.apply(t,e),(function(){oe.setMeta(s.id,{executed:!0}),B(!1)}))}))}))}))}))}),(function(){return!1})),(function(t){var n;return _.completed=!0,w((n=ee).afterComplete.apply(n,e),(function(){if(!ee.loop)throw"";var e=ee.loopDelay;I((function(){return w(R(e),(function(){q()}))}),e.after)}))}))}),H),(function(e){return o}))})),V=e=>new Promise(t=>{I(()=>t(),e||0)}),j=e=>{var t=S(),n=M(e,Z,t);return Z+=n.numberOfSteps,new Promise(e=>{I(D((function(){return((e,t,n,r)=>{if(n){var i=r,o=t[(i=i>t.length?t.length:i)-1];(e=o?o.parentNode:e).insertBefore(n,o||null)}})(G,S(),ae,Z),C((function(){if(n.isString&&n.canKeepMoving)return E(j(n.numberOfSteps>0?"START":"END"))}),(function(){return e()}))})),W[0])})},U=e=>new Promise(t=>{I(()=>(T(G,e,ae,Z),t()),W[0])}),F=D((function(e){ee=n(ee,e)})),K=D((function(){J?G.value="":S().forEach(e=>{L(e)})})),Q=e=>(e=!0===e,new Promise(t=>{I(D((function(){var n=!1,r=S();return r.length&&(J?G.value=G.value.slice(0,-1):L(r[Z])),c(G.querySelectorAll("*")).forEach(e=>{if(!e.innerHTML&&"BR"!==e.tagName){for(var t=e;1===t.parentNode.childNodes.length&&t.parentNode.childNodes[0].isEqualNode(t);)t=t.parentNode;L(t)}}),C((function(){if(e&&r.length-1>0)return w(Q(!0),(function(){return n=!0,t()}))}),(function(e){return n?e:t()}))})),W[1])}));this.break=function(e){return s([U,h(m("BR"))],1,e)},this.delete=function(e,t){var n=d(t);return s([n[0]].concat([].concat(Array(Math.abs(e)||1)).fill().map(()=>[Q,!e,$]),[n[1]]),1,t)},this.empty=function(){return s(K,1,arguments)},this.exec=function(e,t){var n=d(t);return s([n[0],[e,null],n[1]],1,t)},this.move=function(e,t){var n=M(e,Z,S()),r=d(t),i=n.isString?e:Math.sign(e);return s([r[0]].concat([].concat(Array(Math.abs(e)||1)).fill().map(()=>[j,i,$]),[r[1]]),1,t)},this.options=function(e){return s([F,e],1,e)},this.pause=function(e,t){return s([V,e],1,t)},this.type=function(e,t){var n=d(t),r=p(e,ee.html),i=[n[0]].concat(a(r,U,$,!0),[n[1]]);return s(i,1,t)},this.is=function(e){return _[e]},this.destroy=function(e){e=void 0===e||e,X.forEach(e=>{clearTimeout(e)}),X=[],e&&L(ae),_.destroyed=!0},this.freeze=function(){_.frozen=!0},this.unfreeze=function(){_.frozen=!1,q()},this.reset=function(){for(var e in!this.is("destroyed")&&this.destroy(),oe.reset(),Z=0,_)_[e]=!1;return J?G.value="":G.innerHTML="",this},this.go=function(){return _.started?this:(z(),ee.waitUntilVisible?(((e,t)=>{new IntersectionObserver((n,r)=>{n.forEach(n=>{n.isIntersecting&&(t(),r.unobserve(e))})},{threshold:1}).observe(e)})(G,q.bind(this)),this):(q(),this))},this.getQueue=function(){return oe},this.getOptions=function(){return ee},this.getElement=function(){return G};var Y,G="string"==typeof(Y=t)?document.querySelector(Y):Y,J=N(G),W=[],X=[],Z=0,$={freezeCursor:!0},_={started:!1,completed:!1,frozen:!1,destroyed:!1},ee=n(e,i);ee=n(ee,{html:!J&&ee.html,nextStringDelay:g(ee.nextStringDelay),loopDelay:g(ee.loopDelay)});var te,ne,re,ie=Math.random().toString().substring(2,9),oe=new u([V,ee.startDelay]);G.setAttribute("data-typeit-id",ie),y("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}[data-typeit-id]"),ee.strings=(re=ee.strings,te=r(re)?re:[re],(ne=(e=>e.innerHTML.replace(/<\!--.*?-->/g,"").trim())(G))?(G.innerHTML="",ee.startDelete?(v(ne).forEach(e=>{T(G,e,ae,Z)}),oe.add([Q,!0]),P(1),te):[ne.trim()].concat(te)):te);var ae=(()=>{if(J||!ee.cursor)return null;var e=m("span");return e.innerHTML=l(ee.cursorChar).innerHTML,e.className="ti-cursor",e.style.cssText="display:inline;".concat(x(G)),e})();ee.strings.length&&(()=>{var e=ee.strings.filter(e=>!!e);e.forEach((t,n)=>{var r=p(t,ee.html);oe.add(a(r,U,$,!0));var i=oe.getItems().length;if(n+1!==e.length){if(ee.breakLines){var o=h(m("BR"));return oe.add([U,o,$]),void P(i)}oe.add(a(r,Q,$)),P(i,t.length)}})})()});


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _models_LailoStandAlone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/LailoStandAlone */ "./src/models/LailoStandAlone.ts");
/* harmony import */ var _models_LailoTinyWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/LailoTinyWidget */ "./src/models/LailoTinyWidget.ts");
/* harmony import */ var _models_LailoHalfScreenWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/LailoHalfScreenWidget */ "./src/models/LailoHalfScreenWidget.ts");



const setDefaultTypeIt = (language) => {
    switch (language) {
        case "de-DE":
            return ["z.B. Wer bist du?", "z.B. Was kannst du für mich tun?", "Frag mich einfach!"];
        default:
            return ["e.g. Who are you?", "e.g. What can you do for me?", "Just ask me!"];
    }
};
const init = ({ botSecret, widgetType = "tinyWidget", mainContainerId = "lailo-smart-character", cameraAdjustment = "medium", language = "en-US", typeItStringArray, }) => {
    if (!typeItStringArray)
        typeItStringArray = setDefaultTypeIt(language);
    switch (widgetType) {
        case "standAlone":
            return new Promise((resolve, reject) => {
                try {
                    cameraAdjustment = "longshot";
                    const lailo = new _models_LailoStandAlone__WEBPACK_IMPORTED_MODULE_0__["LailoStandAlone"](botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray);
                    resolve(lailo.initialize());
                }
                catch (error) {
                    reject(error);
                }
            });
        case "tinyWidget":
            return new Promise((resolve, reject) => {
                try {
                    cameraAdjustment = "medium";
                    const lailo = new _models_LailoTinyWidget__WEBPACK_IMPORTED_MODULE_1__["LailoTinyWidget"](botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray);
                    resolve(lailo.initialize());
                }
                catch (error) {
                    reject(error);
                }
            });
        case "halfScreenWidget":
            return new Promise((resolve, reject) => {
                try {
                    cameraAdjustment = "medium";
                    const lailo = new _models_LailoHalfScreenWidget__WEBPACK_IMPORTED_MODULE_2__["default"](botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray);
                    resolve(lailo.initialize());
                }
                catch (error) {
                    reject(error);
                }
            });
        default:
            return new Promise((resolve, reject) => reject({
                msg: "Unable to create Lailo. Please double check the inserted widget-type, the default container id and your bot secret!",
            }));
    }
};


/***/ }),

/***/ "./src/models/LailoBase.ts":
/*!*********************************!*\
  !*** ./src/models/LailoBase.ts ***!
  \*********************************/
/*! exports provided: LailoBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LailoBase", function() { return LailoBase; });
/* harmony import */ var typeit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeit */ "./node_modules/typeit/dist/typeit.es.min.js");

class LailoBase {
    constructor(botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray) {
        this.botSecret = botSecret;
        this.mainContainerId = mainContainerId;
        this.cameraAdjustment = cameraAdjustment;
        this.language = language;
        this.widgetType = widgetType;
        this.typeItStringArray = typeItStringArray;
        this.errorMessageCollection = {
            "de-DE": {
                CommunicationServerInitFailed: "Leider kann ich dir auf Grund technischer Probleme gerade nicht weiterhelfen. Bitte stelle sicher, dass du mit dem Internet verbunden bist. Sollte dies der Fall sein, versuche es bitte später erneut.",
                NoCommunicationServerConnection: "Leider kann ich dir auf Grund technischer Probleme gerade nicht weiterhelfen. Bitte stelle sicher, dass du mit dem Internet verbunden bist. Sollte dies der Fall sein, versuche es bitte später erneut.",
                RefreshCommunicationServerTokenFailed: "Leider kann ich dir auf Grund technischer Probleme gerade nicht weiterhelfen. Bitte stelle sicher, dass du mit dem Internet verbunden bist. Sollte dies der Fall sein, versuche es bitte später erneut.",
                CommunicationServerConnectionClosed: "Leider kann ich dir auf Grund technischer Probleme gerade nicht weiterhelfen. Bitte stelle sicher, dass du mit dem Internet verbunden bist. Sollte dies der Fall sein, versuche es bitte später erneut.",
                DirectLineTokenFailed: "Leider kann ich dir auf Grund technischer Probleme gerade nicht weiterhelfen. Bitte stelle sicher, dass du mit dem Internet verbunden bist. Sollte dies der Fall sein, versuche es bitte später erneut.",
                RefreshDirectLineTokenFailed: "Leider kann ich dir auf Grund technischer Probleme gerade nicht weiterhelfen. Bitte stelle sicher, dass du mit dem Internet verbunden bist. Sollte dies der Fall sein, versuche es bitte später erneut.",
                DirectLineKeepAliveFailed: "Leider kann ich dir auf Grund technischer Probleme gerade nicht weiterhelfen. Bitte stelle sicher, dass du mit dem Internet verbunden bist. Sollte dies der Fall sein, versuche es bitte später erneut.",
                LowBandwidth: "Leider hast du gerade eine sehr schlechte Internetverbindung. Daher können einige meiner Funktionen stark eingeschränkt sein. Bitte versuche es doch später erneut, wenn deine Internetverbindung wieder besser ist.",
                BotCommunicationFailed: "Leider kann ich dir auf Grund technischer Probleme gerade nicht weiterhelfen. Bitte stelle sicher, dass du mit dem Internet verbunden bist. Sollte dies der Fall sein, versuche es bitte später erneut.",
                InvalidCameraAdjustment: "Leider habe ich gerade technische Probleme. Bitte versuche es später erneut.",
                InvalidCanvasSize: "Leider habe ich gerade technische Probleme. Bitte versuche es später erneut.",
                MessageToBotEmpty: "Oh, es scheint, als hättest du mir nichts mitgeteilt. Bitte sage oder schreibe mir etwas, damit ich dir weiterhelfen kann.",
                InvalidAction: "Leider habe ich gerade technische Probleme. Bitte versuche es später erneut.",
                MicrophoneAccessDenied: "Leider kann ich aktuell nicht auf dein Mikrofon zugreifen. Bitte stelle in deinen Browsereinstellungen sicher, dass ich auf dein Mikrofon zugreifen kann.",
                MicrophoneNotFound: "Leider scheint es so, als hättest du kein Mikrofon. Bitte schließe ein Mikrofon an und versuche es anschließend erneut.",
                NoGetUserMediaAccess: "Leider kann ich nicht auf dein Mikrofon zugreifen. Bitte stelle sicher, dass du über ein Mikrofon verfügst und dieses für den Zugriff durch deinen Browser freigegeben ist.",
                WebGLNotSupported: "Leider wird WebGl von deinem Browser nicht unterstützt. Bitte versuche es mit einem anderen Browser",
                NoAttachmentsInActivity: "Leider habe ich gerade technische Probleme. Bitte versuche es später erneut.",
            },
            "en-US": {
                CommunicationServerInitFailed: "Unfortunately I can't help you right now due to technical problems. Please make sure that you are connected to the internet. If this is the case, please try again later.",
                NoCommunicationServerConnection: "Unfortunately I can't help you right now due to technical problems. Please make sure that you are connected to the internet. If this is the case, please try again later.",
                RefreshCommunicationServerTokenFailed: "Unfortunately I can't help you right now due to technical problems. Please make sure that you are connected to the internet. If this is the case, please try again later.",
                CommunicationServerConnectionClosed: "Unfortunately I can't help you right now due to technical problems. Please make sure that you are connected to the internet. If this is the case, please try again later.",
                DirectLineTokenFailed: "Unfortunately I can't help you right now due to technical problems. Please make sure that you are connected to the internet. If this is the case, please try again later.",
                RefreshDirectLineTokenFailed: "Bot offline",
                DirectLineKeepAliveFailed: "Unfortunately I can't help you right now due to technical problems. Please make sure that you are connected to the internet. If this is the case, please try again later.",
                LowBandwidth: "Both conditions indicate a bad internet connection and it’s highly recommended to disable Speech-to-Text.",
                BotCommunicationFailed: "The DirectLine communication to the bot service failed. This might indicate that the bot is offline, or an Azure resource is not working properly, but it’s more likely that the internet connection is broken.",
                InvalidCameraAdjustment: "Unfortunately, I'm having technical problems right now. Please try again later.",
                InvalidCanvasSize: "Unfortunately, I'm having technical problems right now. Please try again later.",
                MessageToBotEmpty: "Oh, it seems you haven't told me anything. Please tell me or write something so I can help you.",
                InvalidAction: "Unfortunately, I'm having technical problems right now. Please try again later.",
                MicrophoneAccessDenied: "Unfortunately I cannot access your microphone at the moment. Please make sure in your browser settings that I can access your microphone.",
                MicrophoneNotFound: "Unfortunately, it appears that you do not have a microphone. Please connect a microphone and try again afterwards.",
                NoGetUserMediaAccess: "Unfortunately, I can't access your microphone. Please make sure that you have a microphone and that it is enabled for access by your browser.",
                WebGLNotSupported: "Unfortunately WebGl is not supported by your browser. Please try another browser",
                NoAttachmentsInActivity: "Unfortunately, I'm having technical problems right now. Please try again later.",
            },
        };
        // Must be overriden in derived classes if needed.
        // This associative array will contain the text contents for the character's html template.
        this.htmlTextContentCollection = {
            "de-DE": {
                userInputContainerTitle: "Wie kann ich Ihnen helfen?",
                askMeContainerTitle: ["Frag mich!", "Danke"],
                userInputPlaceholder: ["Nachricht senden...", "Ich höre zu..."],
            },
            "en-US": {
                userInputContainerTitle: "What can I help you with?",
                askMeContainerTitle: ["Ask me!", "Thank you"],
                userInputPlaceholder: ["Send a message...", "I am listening..."],
            },
            "hu-HU": {
                userInputContainerTitle: "Miben segíthetek?",
                askMeContainerTitle: ["Kérdezzen!", "Köszönöm"],
                userInputPlaceholder: ["Üzenet küldése...", "Hallgatom..."],
            },
        };
        // Every version of Lailo needs a customized botStateCollection. This method must be overriden in derived classes.
        this.botStateCollection = {
            beforeBotInitialized: {
                applyState: () => { },
            },
            idle: {
                applyState: () => { },
            },
            listening: {
                applyState: () => { },
            },
            answering: {
                applyState: (data) => { },
            },
            error: {
                applyState: (err) => { },
            },
        };
        /**
         * Calls the character's "listen" function.
         * Hides the microphone icon and displays a loading spinner until the listening state is initialized.
         */
        this.onListenButtonClick = () => {
            this.loader.classList.remove("hidden");
            this.micIcon.classList.add("hidden");
            window.character.listen();
        };
        this.head = document.querySelector("head");
        this.languageCode =
            Object.keys(this.htmlTextContentCollection).find((key) => key === this.language) || // Looking for the key in the associative array to use it for filtering later on
                "en-US"; // Or using the english ones as a fallback
        this.injectDependencies();
        // These elements are the bare minimum for the simplest widget (skeleton) to function.
        // They will be injected in the overriden method in LailoSkeleton
        this.micBtn = document.getElementById("lailo-microphone-button");
        this.micIcon = document.getElementById("lailo-microphone-icon");
        this.botIntegrationContainer = document.getElementById("lailo-widget-container");
        this.characterContainer = document.getElementById("lailo-character-canvas");
        this.loader = document.getElementById("loading");
        this.userInput = document.getElementById("lailo-user-input");
        this.userInputContainer = document.getElementById("lailo-user-input-container");
        this.userInputContainerTitle = document.getElementById("lailo-user-input-container-title");
        this.botOutputTextField = document.getElementById('lailo-answer-text-field');
        this.typeItContainer = document.getElementById('lailo-example-questions');
        this.initTypeIt();
        // End of constructor
    }
    /**
     * Injects all the dependencies in the base classes's constructor.
     * The character's HTML Template, its CSS Template and Font Awesome will be added to the DOM.
     * Every version of the character needs these dependencies to operate properly.
     */
    injectDependencies() {
        this.injectHtmlTemplate();
        this.injectCssTemplate(this.widgetType);
        this.injectFontAwesome();
    }
    /**
     * Dynamically injects the link tag of the character's CSS into the head.
     * @param widgetType Type of the character. "standAlone" | "tinyWidget" | "halfScreenWidget"
     */
    injectCssTemplate(widgetType) {
        const lailoStyleSheet = document.getElementById("lailo-stylesheet");
        const firstLinkTagInHead = document.querySelector("head link");
        if (lailoStyleSheet) {
            lailoStyleSheet.remove();
        }
        // TODO: Change HREF to CDN's url in production
        const css = document.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("type", "text/css");
        css.setAttribute("id", `lailo-stylesheet`);
        css.setAttribute("href", `./dist/${widgetType}.css`);
        this.head.insertBefore(css, firstLinkTagInHead);
    }
    /**
     * Injects the Font Awesome CDN to the document's head. Font Awesome is one of the character's dependencies and will be dynamically injected into the DOM.
     */
    injectFontAwesome() {
        const firstLinkTagInHead = document.querySelector("head link");
        const fontAwesomeCss = document.createElement("link");
        fontAwesomeCss.setAttribute("rel", "stylesheet");
        fontAwesomeCss.setAttribute("href", "https://use.fontawesome.com/releases/v5.14.0/css/all.css");
        fontAwesomeCss.setAttribute("integrity", "sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc");
        fontAwesomeCss.setAttribute("crossorigin", "anonymous");
        this.head.insertBefore(fontAwesomeCss, firstLinkTagInHead);
    }
    /**
     * Initializing a TypeIt object using the typeItStringArray
     */
    initTypeIt() {
        new typeit__WEBPACK_IMPORTED_MODULE_0__["default"](`#${this.typeItContainer.id}`, {
            strings: this.typeItStringArray,
            lifeLike: true,
            loop: true,
            waitUntilVisible: true,
            breakLines: false
        }).go();
    }
    /**
     * Sets the text content of each html element that had been declared in the htmlTextContentCollection object.
     * This method must be overridden and adjusted to the derived class's html template structure.
     */
    setHtmlTextContents() {
        this.userInputContainerTitle.textContent = this.htmlTextContentCollection[this.languageCode].userInputContainerTitle;
        this.userInput.placeholder = this.htmlTextContentCollection[this.languageCode].userInputPlaceholder[0];
    }
    /**
     * Every version of Lailo needs customized event listeners.
     * This method must be overridden and adjusted to the derived class's html template structure.
     */
    addEventListeners() {
        this.micBtn.addEventListener("click", this.onListenButtonClick);
        this.userInput.addEventListener("keypress", (e) => this.onEnterPressed(e));
    }
    /**
     * Sets the model's state according to stages of user interaction.
     * @param state "beforeBotInitialized" | "idle" | "listening" | "answering" | "error"
     * @param data IBotResponse object which will be used in "answering" and "error" states
     */
    setBotState(state, data) {
        const stateAction = this.botStateCollection[state];
        stateAction.applyState(data);
    }
    /**
     * Setting the user input's value to nothing (resetting the field)
     */
    clearUserInputField() {
        this.userInput.value = '';
    }
    /**Setting the value of the user input. It will be important if the user used the microphone to communicate with the character to show what the character understood.
     */
    setUserInputContent(text) {
        this.userInput.value = text;
    }
    /**
     * Creates a simple HTML paragraph element which will be appended to the botOutputTextField in the derived classes.
     * @param text Text content of the paragraph
     */
    createParagraph(text) {
        const p = document.createElement("p");
        p.textContent = text;
        return p;
    }
    /**
     * Creates an HTML anchor element which will be displayed as a button to redirect the user to a new tab.
     * @param target The href attribute of the anchor tag
     * @param caption Text content of the anchor tag
     */
    createAnchor(target, caption) {
        const a = document.createElement("a");
        a.setAttribute("href", target);
        a.className = "lailo-link";
        a.textContent = caption;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        return a;
    }
    /**
     * Checking if the user pressed Enter while focusing the user input. The input value will be checked to filter out if an input constist of only white spaces
     * The character's "send" method will be called with the input value.
     * @param e The event object
     */
    onEnterPressed(e) {
        if (e.which == 13) {
            const userInputValue = this.userInput.value;
            if (userInputValue != "" && userInputValue.replace(/\s/g, "").length > 0) {
                window.character.send(userInputValue);
            }
        }
    }
    /**
     * Uses the associative array of error messages according to the chosen language to find the matching error message to an error code.
     * @param errorCode Key of the error object which will be sent by the server if something goes wrong
     */
    findErrorMessage(errorCode) {
        return this.errorMessageCollection[this.languageCode][errorCode];
    }
    /**
     * The character's response will be evaluated. In case of an IErrorBotResponse the "handleBotOutputIfError" method will be called and this method will be terminated.
     * Otherwise the ISuccessfulBotReponse object will be evaluated and the text will be displayed in the bot answer container.
     * If the Reponse object contains an "actions" array of objects, that array will be filtered out for a 'urlRedirect' type to use the url and caption to create a redirecting anchor tag
     * @param data IBotResponse object which can be an ISuccessfulBotResponse or an IErrorBotResponse
     * @param responseStatus "success" | "error"
     */
    renderParagraphsFromAnswer(data, responseStatus = 'success') {
        this.botOutputTextField.style.color = 'grey';
        this.botOutputTextField.innerHTML = '';
        // Handling errors
        if (responseStatus === 'error') {
            this.handleBotOutputIfError(data);
            return;
        }
        // Handling successful responses
        const { text, actions } = data;
        let paragraphs = [];
        paragraphs.push(this.createParagraph(text));
        // Handling the actions if there are any
        if (actions) {
            const urlActions = actions.filter((action) => action.type === 'urlRedirect');
            urlActions.forEach((action) => {
                const a = this.createAnchor(action.url, action.caption);
                paragraphs.push(a);
            });
        }
        paragraphs.forEach((p) => this.botOutputTextField.prepend(p));
    }
    /**
     * A simple red paragraph will be created and appended to the botOutputTextField.
     * @param error IErrorBotResponse object which contains an errorCode property.
     */
    handleBotOutputIfError(error) {
        this.botOutputTextField.style.color = 'red';
        const p = this.createParagraph(this.findErrorMessage(error.errorCode));
        this.botOutputTextField.appendChild(p);
    }
}


/***/ }),

/***/ "./src/models/LailoHalfScreenWidget.ts":
/*!*********************************************!*\
  !*** ./src/models/LailoHalfScreenWidget.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LailoTinyWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LailoTinyWidget */ "./src/models/LailoTinyWidget.ts");
/* harmony import */ var _templates_halfScreenWidgetTemplate_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/halfScreenWidgetTemplate.html */ "./src/templates/halfScreenWidgetTemplate.html");
/* harmony import */ var _templates_halfScreenWidgetTemplate_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_halfScreenWidgetTemplate_html__WEBPACK_IMPORTED_MODULE_1__);


class LailoHalfScreenWidget extends _LailoTinyWidget__WEBPACK_IMPORTED_MODULE_0__["LailoTinyWidget"] {
    constructor(botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray) {
        super(botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray);
        this.botSecret = botSecret;
        this.mainContainerId = mainContainerId;
        this.cameraAdjustment = cameraAdjustment;
        this.language = language;
        this.widgetType = widgetType;
        this.typeItStringArray = typeItStringArray;
    }
    injectHtmlTemplate() {
        document.getElementById(this.mainContainerId).innerHTML = _templates_halfScreenWidgetTemplate_html__WEBPACK_IMPORTED_MODULE_1___default.a.trim();
    }
    resizeBotIfUserInputHidden() {
        this.characterContainer.classList.add("hide");
        if (window.innerWidth > 868) {
            if (this.botIntegrationContainer.classList.contains('container-show')) {
                window.character.resize(680, 930);
            }
            else {
                window.character.resize(200, 355);
            }
        }
        else {
            window.character.resize(300, 455);
        }
        setTimeout(() => {
            this.characterContainer.classList.remove("hide");
        }, 400);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (LailoHalfScreenWidget);


/***/ }),

/***/ "./src/models/LailoStandAlone.ts":
/*!***************************************!*\
  !*** ./src/models/LailoStandAlone.ts ***!
  \***************************************/
/*! exports provided: LailoStandAlone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LailoStandAlone", function() { return LailoStandAlone; });
/* harmony import */ var _LailoBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LailoBase */ "./src/models/LailoBase.ts");
/* harmony import */ var _templates_standAloneTemplate_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/standAloneTemplate.html */ "./src/templates/standAloneTemplate.html");
/* harmony import */ var _templates_standAloneTemplate_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_standAloneTemplate_html__WEBPACK_IMPORTED_MODULE_1__);


class LailoStandAlone extends _LailoBase__WEBPACK_IMPORTED_MODULE_0__["LailoBase"] {
    constructor(botSecret, mainContainer, cameraAdjustment = "longshot", language, widgetType, typeItStringArray) {
        super(botSecret, mainContainer, cameraAdjustment, language, widgetType, typeItStringArray);
        this.botSecret = botSecret;
        this.mainContainer = mainContainer;
        this.cameraAdjustment = cameraAdjustment;
        this.language = language;
        this.widgetType = widgetType;
        this.typeItStringArray = typeItStringArray;
        // Keep it an arrow function
        // Adds or removes the "show" class on the userInput
        this.toggleUserInput = () => {
            this.userInputContainer.classList.toggle("show");
            if (this.userInputContainer.classList.contains("show")) {
                setTimeout(() => this.userInput.focus(), 400);
            }
        };
        // Base template and dependencies will be injected by running the base class's constructor.
        this.textInputButton = document.getElementById("lailo-text-input-button");
        // Apply state is a function that handles the changes of different bot states by dynamically adding and removing css classes.
        this.botStateCollection = {
            beforeBotInitialized: {
                applyState: () => {
                    this.micBtn.classList.add('hidden');
                    this.loader.classList.remove('hidden');
                },
            },
            idle: {
                applyState: () => {
                    this.botIntegrationContainer.classList.remove('before-init');
                    this.loader.classList.add('hidden');
                    this.micBtn.classList.remove('hidden');
                    this.micBtn.classList.remove('active');
                    this.micBtn.classList.remove('listening');
                    this.loader.classList.add("hidden");
                    this.micIcon.classList.remove("hidden");
                    this.userInput.classList.remove('deactivated');
                    this.userInput.placeholder = this.htmlTextContentCollection[this.languageCode].userInputPlaceholder[0];
                    this.clearUserInputField();
                },
            },
            listening: {
                applyState: () => {
                    this.loader.classList.add("hidden");
                    this.micIcon.classList.remove("hidden");
                    this.micBtn.classList.add('listening');
                    this.userInput.placeholder = this.htmlTextContentCollection[this.languageCode].userInputPlaceholder[1];
                },
            },
            answering: {
                applyState: (data) => {
                    this.micBtn.classList.add('active');
                    this.userInput.classList.add('deactivated');
                    this.renderParagraphsFromAnswer(data);
                },
            },
            error: {
                applyState: (err) => {
                    this.renderParagraphsFromAnswer(err, 'error');
                    this.botStateCollection['idle'].applyState(undefined);
                },
            },
        };
        this.setHtmlTextContents();
        this.addEventListeners();
    }
    injectHtmlTemplate() {
        document.getElementById(this.mainContainerId).innerHTML = _templates_standAloneTemplate_html__WEBPACK_IMPORTED_MODULE_1___default.a.trim();
    }
    addEventListeners() {
        super.addEventListeners();
        this.textInputButton.addEventListener("click", this.toggleUserInput);
    }
    initialize() {
        return new Promise((resolve, reject) => {
            window.character.init({
                onInitialised: () => {
                    this.setBotState("idle");
                    window.character.resize(900, 750);
                    resolve(window.character);
                },
                onQuestionAsked: (data) => {
                    // If no answer was asked (via microphone) an empty object will be received with absolutely no keys
                    if (Object.keys(data).length == 0) {
                        this.renderParagraphsFromAnswer({ text: 'Keine Frage gestellt...' });
                        this.setBotState('idle');
                        return;
                    }
                    this.setUserInputContent(data.toString());
                },
                onAnswered: () => {
                    this.setBotState("idle");
                },
                onAnswer: (data) => {
                    this.setBotState("answering", data);
                },
                onError: (err) => {
                    this.setBotState("error", err);
                    reject(err);
                },
                onListening: () => {
                    this.setBotState("listening");
                },
            }, this.characterContainer, this.botSecret, this.language);
        });
    }
}


/***/ }),

/***/ "./src/models/LailoTinyWidget.ts":
/*!***************************************!*\
  !*** ./src/models/LailoTinyWidget.ts ***!
  \***************************************/
/*! exports provided: LailoTinyWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LailoTinyWidget", function() { return LailoTinyWidget; });
/* harmony import */ var _LailoBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LailoBase */ "./src/models/LailoBase.ts");
/* harmony import */ var _templates_tinyWidgetTemplate_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/tinyWidgetTemplate.html */ "./src/templates/tinyWidgetTemplate.html");
/* harmony import */ var _templates_tinyWidgetTemplate_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_tinyWidgetTemplate_html__WEBPACK_IMPORTED_MODULE_1__);


class LailoTinyWidget extends _LailoBase__WEBPACK_IMPORTED_MODULE_0__["LailoBase"] {
    constructor(botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray) {
        super(botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray);
        this.botSecret = botSecret;
        this.mainContainerId = mainContainerId;
        this.cameraAdjustment = cameraAdjustment;
        this.language = language;
        this.widgetType = widgetType;
        this.typeItStringArray = typeItStringArray;
        /**
         * Toggling the "container-show" class on the botIntegrationContainer.
         * Keep it as an arrow function.
         */
        this.toggleBotIntegrationContainer = () => {
            this.botIntegrationContainer.classList.toggle('container-show');
            this.setAskMeContainerTitle();
            this.resizeBotIfUserInputHidden();
        };
        // Base template and dependencies will be injected by running the base class's constructor.
        // The overriden injectHtmlTemplate() takes care of the html structure that is needed by this particular widget.
        this.hideUserInputContainerBtn = document.getElementById('lailo-widget-toggle-button');
        this.askMeContainerTitle = document.getElementById('ask-me-container-title');
        this.botStateCollection = {
            beforeBotInitialized: {
                applyState: () => {
                    this.hideUserInputContainerBtn.classList.add('hidden');
                    this.micBtn.classList.add('hidden');
                    this.loader.classList.remove('hidden');
                },
            },
            idle: {
                applyState: () => {
                    this.botIntegrationContainer.classList.remove('before-init');
                    this.hideUserInputContainerBtn.classList.remove('hidden');
                    this.loader.classList.add('hidden');
                    this.micBtn.classList.remove('hidden');
                    this.micBtn.classList.remove('active');
                    this.micBtn.classList.remove('listening');
                    this.loader.classList.add("hidden");
                    this.micIcon.classList.remove("hidden");
                    this.userInput.classList.remove('deactivated');
                    this.userInput.placeholder = this.htmlTextContentCollection[this.languageCode].userInputPlaceholder[0];
                    this.clearUserInputField();
                },
            },
            listening: {
                applyState: () => {
                    this.loader.classList.add("hidden");
                    this.micIcon.classList.remove("hidden");
                    this.micBtn.classList.add('listening');
                    this.userInput.placeholder = this.htmlTextContentCollection[this.languageCode].userInputPlaceholder[1];
                },
            },
            answering: {
                applyState: (data) => {
                    this.micBtn.classList.add('active');
                    this.userInput.classList.add('deactivated');
                    this.renderParagraphsFromAnswer(data);
                },
            },
            error: {
                applyState: (err) => {
                    this.renderParagraphsFromAnswer(err, 'error');
                    this.botStateCollection['idle'].applyState(undefined);
                },
            },
        };
        this.setHtmlTextContents();
        this.addEventListeners();
    }
    /**
     * Injecting the widget's template
     */
    injectHtmlTemplate() {
        document.getElementById(this.mainContainerId).innerHTML = _templates_tinyWidgetTemplate_html__WEBPACK_IMPORTED_MODULE_1___default.a.trim();
    }
    /**
     * Listening for a microphone button click, an Enter key press in the user input field and a click on the hide user input container button
     */
    addEventListeners() {
        super.addEventListeners();
        this.hideUserInputContainerBtn.addEventListener('click', this.toggleBotIntegrationContainer);
    }
    /**
     * Setting the title of the ask me container, the user input container and the placeholder of the user input
     * The chosen language (or English as fallback) will be used to filter out the matching textcontents from the htmlTextContentCollection object
     */
    setHtmlTextContents() {
        super.setHtmlTextContents();
        this.setAskMeContainerTitle();
    }
    setAskMeContainerTitle() {
        if (this.botIntegrationContainer.classList.contains("container-show")) {
            this.askMeContainerTitle.textContent = this.htmlTextContentCollection[this.languageCode].askMeContainerTitle[1];
        }
        else {
            this.askMeContainerTitle.textContent = this.htmlTextContentCollection[this.languageCode].askMeContainerTitle[0];
        }
    }
    // Uncomment if you wnat to implement a send button
    // private onSendButtonClick = (): void => {
    // 	const userInputValue = this.userInput.value;
    // 	if (userInputValue != '' && userInputValue.replace(/\s/g, '').length > 0) {
    // 		window.character.send(userInputValue);
    // 	}
    // };
    /**
     * Resizing the character if the botIntegrationContainer does not have the "container-show" class.
     * This prevents the weird transition when the character gets resized and relocated. And it just looks cool if he fades out- and in :)
     */
    resizeBotIfUserInputHidden() {
        this.characterContainer.classList.add("hide");
        if (this.botIntegrationContainer.classList.contains('container-show')) {
            window.character.resize(450, 685);
        }
        else {
            window.character.resize(200, 355);
        }
        setTimeout(() => {
            this.characterContainer.classList.remove("hide");
        }, 400);
    }
    initialize() {
        return new Promise((resolve, reject) => {
            window.character.init({
                onInitialised: () => {
                    this.setBotState('idle');
                    window.character.adjustCamera(this.cameraAdjustment);
                    this.resizeBotIfUserInputHidden();
                    resolve(window.character);
                },
                onQuestionAsked: (data) => {
                    // If no answer was asked (via microphone) an empty object will be received with absolutely no keys
                    if (Object.keys(data).length == 0) {
                        this.renderParagraphsFromAnswer({ text: 'Keine Frage gestellt...' });
                        this.setBotState('idle');
                        return;
                    }
                    this.setUserInputContent(data.toString());
                },
                onAnswered: () => {
                    this.setBotState('idle');
                },
                onAnswer: (data) => {
                    this.setBotState('answering', data);
                },
                onError: (err) => {
                    this.setBotState('error', err);
                    console.log(err);
                    reject(err);
                },
                onListening: () => {
                    this.setBotState('listening');
                },
            }, this.characterContainer, this.botSecret, this.language);
        });
    }
}


/***/ }),

/***/ "./src/templates/halfScreenWidgetTemplate.html":
/*!*****************************************************!*\
  !*** ./src/templates/halfScreenWidgetTemplate.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"lailo-widget-container\" class=\"before-init\">\r\n  <div id=\"ask-me-container\">\r\n    <button id=\"lailo-widget-toggle-button\" class=\"bot-control-element\"><i id=\"hide-icon\" class=\"fas fa-arrow-left\"></i></button>\r\n    <span id=\"ask-me-container-title\"></span>\r\n  </div>\r\n  <div id=\"lailo-user-input-container\">\r\n    <h5 id=\"lailo-user-input-container-title\"></h5>\r\n    <div id=\"lailo-character-canvas\"></div>\r\n    <div class=\"lailo-control-group\">\r\n      <input type=\"text\" id=\"lailo-user-input\" />\r\n      <div id=\"loading\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n      </div>\r\n      <button id=\"lailo-microphone-button\" class=\"bot-control-element\">\r\n        <i class=\"fas fa-microphone\" id=\"lailo-microphone-icon\"></i>\r\n      </button>\r\n    </div>\r\n    <div id=\"lailo-answer-text-field\"></div>\r\n    <p id=\"lailo-example-questions\" data-typeit-id=\"example-questions\"></p>\r\n  </div>\r\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/templates/standAloneTemplate.html":
/*!***********************************************!*\
  !*** ./src/templates/standAloneTemplate.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"lailo-widget-container\" class=\"before-init\">\r\n  <div id=\"lailo-character-canvas\"></div>\r\n  <div id=\"lailo-user-input-container\">\r\n    <h5 id=\"lailo-user-input-container-title\"></h5>\r\n    <div class=\"lailo-control-group\">\r\n      <input type=\"text\" id=\"lailo-user-input\" />\r\n      <div id=\"loading\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n      </div>\r\n      <button id=\"lailo-text-input-button\" class=\"bot-control-element\">\r\n        <i class=\"fas fa-pen\" id=\"lailo-text-input-icon\"></i>\r\n      </button>\r\n      <button id=\"lailo-microphone-button\" class=\"bot-control-element\">\r\n        <i class=\"fas fa-microphone\" id=\"lailo-microphone-icon\"></i>\r\n      </button>\r\n    </div>\r\n    <p id=\"lailo-example-questions\" data-typeit-id=\"example-questions\"></p>\r\n    <div id=\"lailo-answer-text-field\"></div>\r\n  </div>\r\n</div>\r\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/templates/tinyWidgetTemplate.html":
/*!***********************************************!*\
  !*** ./src/templates/tinyWidgetTemplate.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"lailo-widget-container\" class=\"before-init\">\r\n  <div id=\"ask-me-container\">\r\n    <button id=\"lailo-widget-toggle-button\" class=\"bot-control-element\"><i id=\"hide-icon\" class=\"fas fa-arrow-left\"></i></button>\r\n    <span id=\"ask-me-container-title\"></span>\r\n  </div>\r\n  <div id=\"lailo-character-canvas\"></div>\r\n  <div id=\"lailo-user-input-container\">\r\n    <h5 id=\"lailo-user-input-container-title\"></h5>\r\n    <div class=\"lailo-control-group\">\r\n      <input type=\"text\" id=\"lailo-user-input\" />\r\n      <button id=\"lailo-microphone-button\" class=\"bot-control-element\">\r\n        <i class=\"fas fa-microphone\" id=\"lailo-microphone-icon\"></i>\r\n        <div id=\"loading\" class=\"hidden\">\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n        </div>\r\n      </div>\r\n    </button>\r\n    <p id=\"lailo-example-questions\" data-typeit-id=\"example-questions\"></p>\r\n    <div id=\"lailo-answer-text-field\"></div>\r\n  </div>\r\n</div>";
// Exports
module.exports = code;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MYWlsby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MYWlsby8uL25vZGVfbW9kdWxlcy90eXBlaXQvZGlzdC90eXBlaXQuZXMubWluLmpzIiwid2VicGFjazovL0xhaWxvLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9MYWlsby8uL3NyYy9tb2RlbHMvTGFpbG9CYXNlLnRzIiwid2VicGFjazovL0xhaWxvLy4vc3JjL21vZGVscy9MYWlsb0hhbGZTY3JlZW5XaWRnZXQudHMiLCJ3ZWJwYWNrOi8vTGFpbG8vLi9zcmMvbW9kZWxzL0xhaWxvU3RhbmRBbG9uZS50cyIsIndlYnBhY2s6Ly9MYWlsby8uL3NyYy9tb2RlbHMvTGFpbG9UaW55V2lkZ2V0LnRzIiwid2VicGFjazovL0xhaWxvLy4vc3JjL3RlbXBsYXRlcy9oYWxmU2NyZWVuV2lkZ2V0VGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly9MYWlsby8uL3NyYy90ZW1wbGF0ZXMvc3RhbmRBbG9uZVRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vTGFpbG8vLi9zcmMvdGVtcGxhdGVzL3RpbnlXaWRnZXRUZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZUFBZSx1SkFBdUo7QUFDN0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsdUVBQWU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx1RUFBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFFQUFxQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUE0QjtBQUNyQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckMsYUFBYTtBQUNiO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckMsYUFBYTtBQUNiO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckMsYUFBYTtBQUNiO0FBQ0EsdUNBQXVDLEVBQUU7QUFDekMsYUFBYTtBQUNiO0FBQ0Esc0NBQXNDLEVBQUU7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsV0FBVztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUFNLEtBQUssd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsa0NBQWtDO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLHNCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCIvKipcbiAgKiBUeXBlSXQgLSBUaGUgbW9zdCB2ZXJzYXRpbGUgYW5pbWF0ZWQgdHlwaW5nIHV0aWxpdHkgb24gdGhlIHBsYW5ldC5cbiAgKiBBdXRob3I6IEFsZXggTWFjQXJ0aHVyIDxhbGV4QG1hY2FydGh1ci5tZT4gKGh0dHBzOi8vbWFjYXJ0aHVyLm1lKVxuICAqIFZlcnNpb246IHY3LjAuNFxuICAqIExpY2Vuc2U6IEdQTC0yLjBcbiAgKiBVUkw6IGh0dHBzOi8vdHlwZWl0anMuY29tXG4gICovXG52YXIgZT17c3RyaW5nczpbXSxzcGVlZDoxMDAsY3Vyc29yOiEwLGN1cnNvckNoYXI6XCJ8XCIsY3Vyc29yU3BlZWQ6MWUzLGRlbGV0ZVNwZWVkOm51bGwsbGlmZUxpa2U6ITAsYnJlYWtMaW5lczohMCxzdGFydERlbGF5OjI1MCxzdGFydERlbGV0ZTohMSxuZXh0U3RyaW5nRGVsYXk6NzUwLGxvb3A6ITEsbG9vcERlbGF5Ojc1MCxodG1sOiEwLHdhaXRVbnRpbFZpc2libGU6ITEsYmVmb3JlU3RyaW5nOigpPT57fSxhZnRlclN0cmluZzooKT0+e30sYmVmb3JlU3RlcDooKT0+e30sYWZ0ZXJTdGVwOigpPT57fSxhZnRlckNvbXBsZXRlOigpPT57fX0sdD1lPT5lLm1hcChlPT4odm9pZCAwPT09ZVsxXSYmZS5wdXNoKG51bGwpLHZvaWQgMD09PWVbMl0mJmUucHVzaCh7fSksZSkpLG49KGUsdCk9Pk9iamVjdC5hc3NpZ24oe30sZSx0KSxyPWU9PkFycmF5LmlzQXJyYXkoZSksaT0oZSx0KT0+KGVbMl09bihlWzJdLHQpfHx0LGUpLG89KGUsdCk9PnIoZVswXSk/ZS5tYXAoZT0+aShlLHQpKTppKGUsdCksYT0oZSx0LG4saSk9PntpPWl8fCExLG49bnx8e307dmFyIGE9IXIoZSksdT1lLmxlbmd0aDtyZXR1cm4oZT1hP25ldyBBcnJheShlKS5maWxsKDApOmUpLm1hcCgoZSxyKT0+e2lmKGEpcmV0dXJuIHQ7dmFyIGM9W3QsZSxuXTtyZXR1cm4gaSYmKDA9PT1yJiYoYz1vKGMse2lzRmlyc3Q6ITB9KSkscisxPT09dSYmKGM9byhjLHtpc0xhc3Q6ITB9KSkpLGN9KX07ZnVuY3Rpb24gdShlKXt0aGlzLmluc2VydD1mdW5jdGlvbihlLHQpe2kuc3BsaWNlKGUsMCx0KX0sdGhpcy5hZGQ9ZnVuY3Rpb24oZSx1LGMpe3JldHVybiBlPXIoZSk/ZTpbZSxudWxsXSxjPWN8fCExLHU9dXx8MSxyKGVbMF0pfHwoZT1hKHUsZSkpLGU9dChlKS5tYXAoZT0+KGVbMl09bihlWzJdLHtpZDpvfSksbysrLGUpKSxpPWM/ZS5jb25jYXQoaSk6aS5jb25jYXQoZSksdGhpc30sdGhpcy5zZXQ9ZnVuY3Rpb24oZSx0KXtpW2VdPXR9LHRoaXMucmVzZXQ9ZnVuY3Rpb24oKXtpPWkubWFwKGU9PihlWzJdLmV4ZWN1dGVkPSExLGUpKX0sdGhpcy5nZXRJdGVtcz1mdW5jdGlvbigpe3JldHVybihpPXQoaSkpLmZpbHRlcihlPT4hZVsyXS5leGVjdXRlZCl9LHRoaXMuc2V0TWV0YT1mdW5jdGlvbihlLHQpe3ZhciByPWkuZmluZEluZGV4KHQ9PnRbMl0uaWQ9PT1lKTtpW3JdWzJdPW4oaVtyXVsyXSx0KX07dmFyIGk9W10sbz0wO3RoaXMuYWRkKGUpfXZhciBjPWU9PkFycmF5LmZyb20oZSkscz1lPT57dmFyIHQ9W107cmV0dXJuIHQuY29uY2F0LmFwcGx5KHQsZSl9LGw9ZT0+e3ZhciB0PWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKTtyZXR1cm4gdC5ib2R5LmlubmVySFRNTD1lLHQuYm9keX0sZj0oZSx0LG4pPT57dD10fHxudWxsLG49dm9pZCAwIT09biYmbjt2YXIgcj1jKGUuY2hpbGROb2RlcykubWFwKGU9PntyZXR1cm4gMz09PSh0PWUpLm5vZGVUeXBlfHxcIkJSXCI9PT10LnRhZ05hbWU/ZTpmKGUpO3ZhciB0fSk7cmV0dXJuIHI9cyhyKSx0JiYocj1yLmZpbHRlcihlPT4hdC5jb250YWlucyhlKSkpLG4/ci5yZXZlcnNlKCk6cn0sZD1lPT5cIkJPRFlcIj09PWUudGFnTmFtZSxoPShlLHQpPT57dD10fHxudWxsO3ZhciBuPWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtyZXR1cm57bm9kZTp0LGlzVG9wTGV2ZWxUZXh0OighdHx8ZCh0LnBhcmVudE5vZGUpKSYmIW4saXNIVE1MRWxlbWVudDpuLGNvbnRlbnQ6ZX19O2Z1bmN0aW9uIHYoZSl7dmFyIHQsbj1sKGUpO3JldHVybiB0PWYobikubWFwKGU9PmUubm9kZVZhbHVlP2MoZS5ub2RlVmFsdWUpLm1hcCh0PT5oKHQsZSkpOmgoZSkpLHModCl9ZnVuY3Rpb24gcChlLHQpe3JldHVybih0PXZvaWQgMD09PXR8fHQpP3YoZSk6YyhlKS5tYXAoZT0+aChlKSl9dmFyIG09ZT0+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKSx5PShlLHQpPT57dmFyIG49bShcInN0eWxlXCIpO24uaWQ9dHx8XCJcIixuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUpKSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG4pfSxnPWU9PihyKGUpfHwoZT1bZS8yLGUvMl0pLHtiZWZvcmU6ZVswXSxhZnRlcjplWzFdLHRvdGFsOmVbMF0rZVsxXX0pLGI9KGUsdCk9Pk1hdGguYWJzKE1hdGgucmFuZG9tKCkqKGUrdC0oZS10KSkrKGUtdCkpO3ZhciBOPWU9PltcInRleHRhcmVhXCIsXCJpbnB1dFwiXS5pbmRleE9mKGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKT4tMSxTPShlLHQpPT57dmFyIG49dC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKTtyZXR1cm5bdF0uY29uY2F0KGMobikucmV2ZXJzZSgpKS5maW5kKHQ9PnQuY2xvbmVOb2RlKCkub3V0ZXJIVE1MPT09ZS5vdXRlckhUTUwpfSxUPShlLHQsbixyKT0+e249bnx8bnVsbDt2YXIgaT10LmlzSFRNTEVsZW1lbnQsbz1pP3QuY29udGVudDpkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0LmNvbnRlbnQpO2lmKE4oZSkpZS52YWx1ZT1cIlwiLmNvbmNhdChlLnZhbHVlKS5jb25jYXQodC5jb250ZW50KTtlbHNle2lmKCF0LmlzVG9wTGV2ZWxUZXh0JiYhaSl7dmFyIGE9dC5ub2RlLnBhcmVudE5vZGUsdT1TKGEuY2xvbmVOb2RlKCksZSk7aWYoKChlLHQpPT57aWYoIWUpcmV0dXJuITE7dmFyIG49ZS5uZXh0U2libGluZztyZXR1cm4hbnx8bi5pc0VxdWFsTm9kZSh0KX0pKHUsbikpZT11O2Vsc2UgaWYoKG89YS5jbG9uZU5vZGUoKSkuaW5uZXJUZXh0PXQuY29udGVudCwhZChhLnBhcmVudE5vZGUpKXtmb3IodmFyIGM9YS5wYXJlbnROb2RlLHM9Yy5jbG9uZU5vZGUoKSxsPVMocyxlKTshbCYmIWQoYyk7KXMuaW5uZXJIVE1MPW8ub3V0ZXJIVE1MLG89cyxzPWMucGFyZW50Tm9kZS5jbG9uZU5vZGUoKSxjPWMucGFyZW50Tm9kZSxsPVMocyxlKTtlPWx8fGV9fXZhciBoPWYoZSxuLCEwKVtyLTFdLHY9aD9oLnBhcmVudE5vZGU6ZTt2Lmluc2VydEJlZm9yZShvLHYuY29udGFpbnMobik/bjpudWxsKX19LEw9ZT0+e3ZhciB0O3JldHVybiBudWxsPT1lfHxudWxsPT09KHQ9ZS5wYXJlbnROb2RlKXx8dm9pZCAwPT09dD92b2lkIDA6dC5yZW1vdmVDaGlsZChlKX07dmFyIE09KGUsdCxuKT0+e3ZhciByLGk9XCJzdHJpbmdcIj09dHlwZW9mIGUsbz0hMSxhPS0xKmU7cmV0dXJuIGkmJihhPShyPVwiRU5EXCI9PT1lLnRvVXBwZXJDYXNlKCkpPy0xOjEsbz1yP3QrYT4wOnQrYTxuLmxlbmd0aCkse2lzU3RyaW5nOmksbnVtYmVyT2ZTdGVwczphLGNhbktlZXBNb3Zpbmc6b319LHg9ZT0+e3ZhciB0LG49W1wiZm9udFwiLFwibGluZUhlaWdodFwiLFwiY29sb3JcIl0scj1tKFwiU1BBTlwiKSxpPSh0PWUsd2luZG93LmdldENvbXB1dGVkU3R5bGUodCxudWxsKSk7Zm9yKHZhciBvIGluIGkpbi5pbmRleE9mKG8pPi0xJiZpW29dJiYoci5zdHlsZVtvXT1pW29dKTtyZXR1cm4gci5zdHlsZS5jc3NUZXh0fTtmdW5jdGlvbiB3KGUsdCxuKXtyZXR1cm4gbj90P3QoZSk6ZTooZSYmZS50aGVufHwoZT1Qcm9taXNlLnJlc29sdmUoZSkpLHQ/ZS50aGVuKHQpOmUpfWZ1bmN0aW9uIEQoZSl7cmV0dXJuIGZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLG49MDtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXRbbl09YXJndW1lbnRzW25dO3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUuYXBwbHkodGhpcyx0KSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX19ZnVuY3Rpb24gSCgpe31mdW5jdGlvbiBFKGUsdCl7aWYoIXQpcmV0dXJuIGUmJmUudGhlbj9lLnRoZW4oSCk6UHJvbWlzZS5yZXNvbHZlKCl9ZnVuY3Rpb24gQyhlLHQpe3ZhciBuPWUoKTtyZXR1cm4gbiYmbi50aGVuP24udGhlbih0KTp0KG4pfWZ1bmN0aW9uIEEoZSx0LG4pe2lmKCFlLnMpe2lmKG4gaW5zdGFuY2VvZiBrKXtpZighbi5zKXJldHVybiB2b2lkKG4ubz1BLmJpbmQobnVsbCxlLHQpKTsxJnQmJih0PW4ucyksbj1uLnZ9aWYobiYmbi50aGVuKXJldHVybiB2b2lkIG4udGhlbihBLmJpbmQobnVsbCxlLHQpLEEuYmluZChudWxsLGUsMikpO2Uucz10LGUudj1uO3ZhciByPWUubztyJiZyKGUpfX12YXIgaz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9cmV0dXJuIGUucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24odCxuKXt2YXIgcj1uZXcgZSxpPXRoaXMucztpZihpKXt2YXIgbz0xJmk/dDpuO2lmKG8pe3RyeXtBKHIsMSxvKHRoaXMudikpfWNhdGNoKGUpe0EociwyLGUpfXJldHVybiByfXJldHVybiB0aGlzfXJldHVybiB0aGlzLm89ZnVuY3Rpb24oZSl7dHJ5e3ZhciBpPWUudjsxJmUucz9BKHIsMSx0P3QoaSk6aSk6bj9BKHIsMSxuKGkpKTpBKHIsMixpKX1jYXRjaChlKXtBKHIsMixlKX19LHJ9LGV9KCk7ZnVuY3Rpb24gTyhlLHQpe3JldHVybiBlJiZlLnRoZW4/ZS50aGVuKHQpOnQoZSl9ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odCxpKXt2YXIgbz10aGlzO2k9aXx8e307dmFyIHM9KGUsdCxuKT0+KGU9cihlWzBdKT9lOltlXSxvZS5hZGQoZSx0KSwoZT0+e3ZhciB0PShlPWV8fHt9KS5kZWxheTt0JiZvZS5hZGQoW1YsdF0pfSkobiksdGhpcyksZD1lPT5bW0YsZT1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9LHtmb3JjZTohMH1dLFtGLGVlLHtmb3JjZTohMH1dXSxTPSgpPT5KP2MoRy52YWx1ZSk6ZihHLGFlLCEwKSxQPShlLHQpPT57dD10fHwxO3ZhciBuPWVlLm5leHRTdHJpbmdEZWxheTtvZS5pbnNlcnQoZSxbVixuLmJlZm9yZV0pLG9lLmluc2VydChlK3QrMSxbVixuLmFmdGVyXSl9LHo9RCgoZnVuY3Rpb24oKXtpZihhZSl7dmFyIGU9XCJbZGF0YS10eXBlaXQtaWQ9J1wiLmNvbmNhdChpZSxcIiddIC50aS1jdXJzb3JcIik7eShcIkBrZXlmcmFtZXMgYmxpbmstXCIuY29uY2F0KGllLFwiIHsgMCUge29wYWNpdHk6IDB9IDQ5JSB7b3BhY2l0eTogMH0gNTAlIHtvcGFjaXR5OiAxfSB9IFwiKS5jb25jYXQoZSxcIiB7IGFuaW1hdGlvbjogYmxpbmstXCIpLmNvbmNhdChpZSxcIiBcIikuY29uY2F0KGVlLmN1cnNvclNwZWVkLzFlMyxcInMgaW5maW5pdGU7IH0gXCIpLmNvbmNhdChlLFwiLndpdGgtZGVsYXkgeyBhbmltYXRpb24tZGVsYXk6IDUwMG1zOyB9IFwiKS5jb25jYXQoZSxcIi5kaXNhYmxlZCB7IGFuaW1hdGlvbjogbm9uZTsgfVwiKSxpZSksRy5hcHBlbmRDaGlsZChhZSk7dmFyIHQ9XCJsb2FkZWRcIj09PWRvY3VtZW50LmZvbnRzLnN0YXR1cztyZXR1cm4gdyh0fHxkb2N1bWVudC5mb250cy5yZWFkeSwoZnVuY3Rpb24oZSl7dmFyIHQ9YWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgvMjthZS5zdHlsZS5tYXJnaW49XCIwIC1cIi5jb25jYXQodCsyLFwicHggMCAtXCIpLmNvbmNhdCh0LTIsXCJweFwiKX0pLHQpfX0pKSxCPWU9PnthZSYmKGFlLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNhYmxlZFwiLGUpLGFlLmNsYXNzTGlzdC50b2dnbGUoXCJ3aXRoLWRlbGF5XCIsIWUpKX0sST1EKChmdW5jdGlvbihlLHQpe3JldHVybiBYLnB1c2goc2V0VGltZW91dChlLHQpKSx3KCl9KSksUj1EKChmdW5jdGlvbihlKXt2YXIgdD1aO3JldHVybiB3KHQmJmooWiksKGZ1bmN0aW9uKHQpe3JldHVybiBvZS5yZXNldCgpLG9lLnNldCgwLFtWLGUuYmVmb3JlXSksRShRKCEwKSl9KSwhdCl9KSkscT1EKChmdW5jdGlvbigpe18uc3RhcnRlZD0hMDt2YXIgZSx0PW9lLmdldEl0ZW1zKCk7cmV0dXJuIE8oZnVuY3Rpb24oZSx0KXt0cnl7dmFyIG49ZSgpfWNhdGNoKGUpe3JldHVybiB0KGUpfXJldHVybiBuJiZuLnRoZW4/bi50aGVuKHZvaWQgMCx0KTpufSgoZnVuY3Rpb24oKXtyZXR1cm4gTyhmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPS0xO3JldHVybiBmdW5jdGlvbiBhKHUpe3RyeXtmb3IoOysrbzxlLmxlbmd0aCYmKCFufHwhbigpKTspaWYoKHU9dChvKSkmJnUudGhlbil7aWYoISgoYz11KWluc3RhbmNlb2YgayYmMSZjLnMpKXJldHVybiB2b2lkIHUudGhlbihhLGl8fChpPUEuYmluZChudWxsLHI9bmV3IGssMikpKTt1PXUudn1yP0EociwxLHUpOnI9dX1jYXRjaChlKXtBKHJ8fChyPW5ldyBrKSwyLGUpfXZhciBjfSgpLHJ9KHQsKGZ1bmN0aW9uKG4pe2lmKF8uZnJvemVufHxfLmRlc3Ryb3llZCl0aHJvd1wiXCI7dmFyIHIsaSxhLHUsYz10W25dLHM9Y1syXTtyZXR1cm4gZT1bYyxvXSxzLmZyZWV6ZUN1cnNvciYmQighMCkscj1lZS5zcGVlZCxpPWVlLmRlbGV0ZVNwZWVkLGE9ZWUubGlmZUxpa2UsdT0oaT1udWxsIT09aT9pOnIvMykvMixXPWE/W2IocixyLzIpLGIoaSx1KV06W3IsaV0sQygoZnVuY3Rpb24oKXt2YXIgdDtpZihudWxsPT1zP3ZvaWQgMDpzLmlzRmlyc3QpcmV0dXJuIEUoKHQ9ZWUpLmJlZm9yZVN0cmluZy5hcHBseSh0LGUpKX0pLChmdW5jdGlvbigpe3ZhciB0O3JldHVybiB3KCh0PWVlKS5iZWZvcmVTdGVwLmFwcGx5KHQsZSksKGZ1bmN0aW9uKCl7cmV0dXJuIHcoY1swXS5jYWxsKG8sY1sxXSxzKSwoZnVuY3Rpb24oKXtyZXR1cm4gQygoZnVuY3Rpb24oKXt2YXIgdCxuO2lmKG51bGw9PT0odD1jWzJdKXx8dm9pZCAwPT09dD92b2lkIDA6dC5pc0xhc3QpcmV0dXJuIEUoKG49ZWUpLmFmdGVyU3RyaW5nLmFwcGx5KG4sZSkpfSksKGZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIHcoKHQ9ZWUpLmFmdGVyU3RlcC5hcHBseSh0LGUpLChmdW5jdGlvbigpe29lLnNldE1ldGEocy5pZCx7ZXhlY3V0ZWQ6ITB9KSxCKCExKX0pKX0pKX0pKX0pKX0pKX0pLChmdW5jdGlvbigpe3JldHVybiExfSkpLChmdW5jdGlvbih0KXt2YXIgbjtyZXR1cm4gXy5jb21wbGV0ZWQ9ITAsdygobj1lZSkuYWZ0ZXJDb21wbGV0ZS5hcHBseShuLGUpLChmdW5jdGlvbigpe2lmKCFlZS5sb29wKXRocm93XCJcIjt2YXIgZT1lZS5sb29wRGVsYXk7SSgoZnVuY3Rpb24oKXtyZXR1cm4gdyhSKGUpLChmdW5jdGlvbigpe3EoKX0pKX0pLGUuYWZ0ZXIpfSkpfSkpfSksSCksKGZ1bmN0aW9uKGUpe3JldHVybiBvfSkpfSkpLFY9ZT0+bmV3IFByb21pc2UodD0+e0koKCk9PnQoKSxlfHwwKX0pLGo9ZT0+e3ZhciB0PVMoKSxuPU0oZSxaLHQpO3JldHVybiBaKz1uLm51bWJlck9mU3RlcHMsbmV3IFByb21pc2UoZT0+e0koRCgoZnVuY3Rpb24oKXtyZXR1cm4oKGUsdCxuLHIpPT57aWYobil7dmFyIGk9cixvPXRbKGk9aT50Lmxlbmd0aD90Lmxlbmd0aDppKS0xXTsoZT1vP28ucGFyZW50Tm9kZTplKS5pbnNlcnRCZWZvcmUobixvfHxudWxsKX19KShHLFMoKSxhZSxaKSxDKChmdW5jdGlvbigpe2lmKG4uaXNTdHJpbmcmJm4uY2FuS2VlcE1vdmluZylyZXR1cm4gRShqKG4ubnVtYmVyT2ZTdGVwcz4wP1wiU1RBUlRcIjpcIkVORFwiKSl9KSwoZnVuY3Rpb24oKXtyZXR1cm4gZSgpfSkpfSkpLFdbMF0pfSl9LFU9ZT0+bmV3IFByb21pc2UodD0+e0koKCk9PihUKEcsZSxhZSxaKSx0KCkpLFdbMF0pfSksRj1EKChmdW5jdGlvbihlKXtlZT1uKGVlLGUpfSkpLEs9RCgoZnVuY3Rpb24oKXtKP0cudmFsdWU9XCJcIjpTKCkuZm9yRWFjaChlPT57TChlKX0pfSkpLFE9ZT0+KGU9ITA9PT1lLG5ldyBQcm9taXNlKHQ9PntJKEQoKGZ1bmN0aW9uKCl7dmFyIG49ITEscj1TKCk7cmV0dXJuIHIubGVuZ3RoJiYoSj9HLnZhbHVlPUcudmFsdWUuc2xpY2UoMCwtMSk6TChyW1pdKSksYyhHLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKS5mb3JFYWNoKGU9PntpZighZS5pbm5lckhUTUwmJlwiQlJcIiE9PWUudGFnTmFtZSl7Zm9yKHZhciB0PWU7MT09PXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCYmdC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uaXNFcXVhbE5vZGUodCk7KXQ9dC5wYXJlbnROb2RlO0wodCl9fSksQygoZnVuY3Rpb24oKXtpZihlJiZyLmxlbmd0aC0xPjApcmV0dXJuIHcoUSghMCksKGZ1bmN0aW9uKCl7cmV0dXJuIG49ITAsdCgpfSkpfSksKGZ1bmN0aW9uKGUpe3JldHVybiBuP2U6dCgpfSkpfSkpLFdbMV0pfSkpO3RoaXMuYnJlYWs9ZnVuY3Rpb24oZSl7cmV0dXJuIHMoW1UsaChtKFwiQlJcIikpXSwxLGUpfSx0aGlzLmRlbGV0ZT1mdW5jdGlvbihlLHQpe3ZhciBuPWQodCk7cmV0dXJuIHMoW25bMF1dLmNvbmNhdChbXS5jb25jYXQoQXJyYXkoTWF0aC5hYnMoZSl8fDEpKS5maWxsKCkubWFwKCgpPT5bUSwhZSwkXSksW25bMV1dKSwxLHQpfSx0aGlzLmVtcHR5PWZ1bmN0aW9uKCl7cmV0dXJuIHMoSywxLGFyZ3VtZW50cyl9LHRoaXMuZXhlYz1mdW5jdGlvbihlLHQpe3ZhciBuPWQodCk7cmV0dXJuIHMoW25bMF0sW2UsbnVsbF0sblsxXV0sMSx0KX0sdGhpcy5tb3ZlPWZ1bmN0aW9uKGUsdCl7dmFyIG49TShlLFosUygpKSxyPWQodCksaT1uLmlzU3RyaW5nP2U6TWF0aC5zaWduKGUpO3JldHVybiBzKFtyWzBdXS5jb25jYXQoW10uY29uY2F0KEFycmF5KE1hdGguYWJzKGUpfHwxKSkuZmlsbCgpLm1hcCgoKT0+W2osaSwkXSksW3JbMV1dKSwxLHQpfSx0aGlzLm9wdGlvbnM9ZnVuY3Rpb24oZSl7cmV0dXJuIHMoW0YsZV0sMSxlKX0sdGhpcy5wYXVzZT1mdW5jdGlvbihlLHQpe3JldHVybiBzKFtWLGVdLDEsdCl9LHRoaXMudHlwZT1mdW5jdGlvbihlLHQpe3ZhciBuPWQodCkscj1wKGUsZWUuaHRtbCksaT1bblswXV0uY29uY2F0KGEocixVLCQsITApLFtuWzFdXSk7cmV0dXJuIHMoaSwxLHQpfSx0aGlzLmlzPWZ1bmN0aW9uKGUpe3JldHVybiBfW2VdfSx0aGlzLmRlc3Ryb3k9ZnVuY3Rpb24oZSl7ZT12b2lkIDA9PT1lfHxlLFguZm9yRWFjaChlPT57Y2xlYXJUaW1lb3V0KGUpfSksWD1bXSxlJiZMKGFlKSxfLmRlc3Ryb3llZD0hMH0sdGhpcy5mcmVlemU9ZnVuY3Rpb24oKXtfLmZyb3plbj0hMH0sdGhpcy51bmZyZWV6ZT1mdW5jdGlvbigpe18uZnJvemVuPSExLHEoKX0sdGhpcy5yZXNldD1mdW5jdGlvbigpe2Zvcih2YXIgZSBpbiF0aGlzLmlzKFwiZGVzdHJveWVkXCIpJiZ0aGlzLmRlc3Ryb3koKSxvZS5yZXNldCgpLFo9MCxfKV9bZV09ITE7cmV0dXJuIEo/Ry52YWx1ZT1cIlwiOkcuaW5uZXJIVE1MPVwiXCIsdGhpc30sdGhpcy5nbz1mdW5jdGlvbigpe3JldHVybiBfLnN0YXJ0ZWQ/dGhpczooeigpLGVlLndhaXRVbnRpbFZpc2libGU/KCgoZSx0KT0+e25ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigobixyKT0+e24uZm9yRWFjaChuPT57bi5pc0ludGVyc2VjdGluZyYmKHQoKSxyLnVub2JzZXJ2ZShlKSl9KX0se3RocmVzaG9sZDoxfSkub2JzZXJ2ZShlKX0pKEcscS5iaW5kKHRoaXMpKSx0aGlzKToocSgpLHRoaXMpKX0sdGhpcy5nZXRRdWV1ZT1mdW5jdGlvbigpe3JldHVybiBvZX0sdGhpcy5nZXRPcHRpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIGVlfSx0aGlzLmdldEVsZW1lbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gR307dmFyIFksRz1cInN0cmluZ1wiPT10eXBlb2YoWT10KT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFkpOlksSj1OKEcpLFc9W10sWD1bXSxaPTAsJD17ZnJlZXplQ3Vyc29yOiEwfSxfPXtzdGFydGVkOiExLGNvbXBsZXRlZDohMSxmcm96ZW46ITEsZGVzdHJveWVkOiExfSxlZT1uKGUsaSk7ZWU9bihlZSx7aHRtbDohSiYmZWUuaHRtbCxuZXh0U3RyaW5nRGVsYXk6ZyhlZS5uZXh0U3RyaW5nRGVsYXkpLGxvb3BEZWxheTpnKGVlLmxvb3BEZWxheSl9KTt2YXIgdGUsbmUscmUsaWU9TWF0aC5yYW5kb20oKS50b1N0cmluZygpLnN1YnN0cmluZygyLDkpLG9lPW5ldyB1KFtWLGVlLnN0YXJ0RGVsYXldKTtHLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZWl0LWlkXCIsaWUpLHkoXCJbZGF0YS10eXBlaXQtaWRdOmJlZm9yZSB7Y29udGVudDogJy4nOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAwOyB2aXNpYmlsaXR5OiBoaWRkZW47fVtkYXRhLXR5cGVpdC1pZF1cIiksZWUuc3RyaW5ncz0ocmU9ZWUuc3RyaW5ncyx0ZT1yKHJlKT9yZTpbcmVdLChuZT0oZT0+ZS5pbm5lckhUTUwucmVwbGFjZSgvPFxcIS0tLio/LS0+L2csXCJcIikudHJpbSgpKShHKSk/KEcuaW5uZXJIVE1MPVwiXCIsZWUuc3RhcnREZWxldGU/KHYobmUpLmZvckVhY2goZT0+e1QoRyxlLGFlLFopfSksb2UuYWRkKFtRLCEwXSksUCgxKSx0ZSk6W25lLnRyaW0oKV0uY29uY2F0KHRlKSk6dGUpO3ZhciBhZT0oKCk9PntpZihKfHwhZWUuY3Vyc29yKXJldHVybiBudWxsO3ZhciBlPW0oXCJzcGFuXCIpO3JldHVybiBlLmlubmVySFRNTD1sKGVlLmN1cnNvckNoYXIpLmlubmVySFRNTCxlLmNsYXNzTmFtZT1cInRpLWN1cnNvclwiLGUuc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lO1wiLmNvbmNhdCh4KEcpKSxlfSkoKTtlZS5zdHJpbmdzLmxlbmd0aCYmKCgpPT57dmFyIGU9ZWUuc3RyaW5ncy5maWx0ZXIoZT0+ISFlKTtlLmZvckVhY2goKHQsbik9Pnt2YXIgcj1wKHQsZWUuaHRtbCk7b2UuYWRkKGEocixVLCQsITApKTt2YXIgaT1vZS5nZXRJdGVtcygpLmxlbmd0aDtpZihuKzEhPT1lLmxlbmd0aCl7aWYoZWUuYnJlYWtMaW5lcyl7dmFyIG89aChtKFwiQlJcIikpO3JldHVybiBvZS5hZGQoW1UsbywkXSksdm9pZCBQKGkpfW9lLmFkZChhKHIsUSwkKSksUChpLHQubGVuZ3RoKX19KX0pKCl9XG4iLCJpbXBvcnQgeyBMYWlsb1N0YW5kQWxvbmUgfSBmcm9tIFwiLi9tb2RlbHMvTGFpbG9TdGFuZEFsb25lXCI7XHJcbmltcG9ydCB7IExhaWxvVGlueVdpZGdldCB9IGZyb20gXCIuL21vZGVscy9MYWlsb1RpbnlXaWRnZXRcIjtcclxuaW1wb3J0IExhaWxvSGFsZlNjcmVlbldpZGdldCBmcm9tIFwiLi9tb2RlbHMvTGFpbG9IYWxmU2NyZWVuV2lkZ2V0XCI7XHJcbmNvbnN0IHNldERlZmF1bHRUeXBlSXQgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcclxuICAgICAgICBjYXNlIFwiZGUtREVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFtcInouQi4gV2VyIGJpc3QgZHU/XCIsIFwiei5CLiBXYXMga2FubnN0IGR1IGbDvHIgbWljaCB0dW4/XCIsIFwiRnJhZyBtaWNoIGVpbmZhY2ghXCJdO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBbXCJlLmcuIFdobyBhcmUgeW91P1wiLCBcImUuZy4gV2hhdCBjYW4geW91IGRvIGZvciBtZT9cIiwgXCJKdXN0IGFzayBtZSFcIl07XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBpbml0ID0gKHsgYm90U2VjcmV0LCB3aWRnZXRUeXBlID0gXCJ0aW55V2lkZ2V0XCIsIG1haW5Db250YWluZXJJZCA9IFwibGFpbG8tc21hcnQtY2hhcmFjdGVyXCIsIGNhbWVyYUFkanVzdG1lbnQgPSBcIm1lZGl1bVwiLCBsYW5ndWFnZSA9IFwiZW4tVVNcIiwgdHlwZUl0U3RyaW5nQXJyYXksIH0pID0+IHtcclxuICAgIGlmICghdHlwZUl0U3RyaW5nQXJyYXkpXHJcbiAgICAgICAgdHlwZUl0U3RyaW5nQXJyYXkgPSBzZXREZWZhdWx0VHlwZUl0KGxhbmd1YWdlKTtcclxuICAgIHN3aXRjaCAod2lkZ2V0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJzdGFuZEFsb25lXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYUFkanVzdG1lbnQgPSBcImxvbmdzaG90XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFpbG8gPSBuZXcgTGFpbG9TdGFuZEFsb25lKGJvdFNlY3JldCwgbWFpbkNvbnRhaW5lcklkLCBjYW1lcmFBZGp1c3RtZW50LCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobGFpbG8uaW5pdGlhbGl6ZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJ0aW55V2lkZ2V0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYUFkanVzdG1lbnQgPSBcIm1lZGl1bVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhaWxvID0gbmV3IExhaWxvVGlueVdpZGdldChib3RTZWNyZXQsIG1haW5Db250YWluZXJJZCwgY2FtZXJhQWRqdXN0bWVudCwgbGFuZ3VhZ2UsIHdpZGdldFR5cGUsIHR5cGVJdFN0cmluZ0FycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGxhaWxvLmluaXRpYWxpemUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIFwiaGFsZlNjcmVlbldpZGdldFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmFBZGp1c3RtZW50ID0gXCJtZWRpdW1cIjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWlsbyA9IG5ldyBMYWlsb0hhbGZTY3JlZW5XaWRnZXQoYm90U2VjcmV0LCBtYWluQ29udGFpbmVySWQsIGNhbWVyYUFkanVzdG1lbnQsIGxhbmd1YWdlLCB3aWRnZXRUeXBlLCB0eXBlSXRTdHJpbmdBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShsYWlsby5pbml0aWFsaXplKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICBtc2c6IFwiVW5hYmxlIHRvIGNyZWF0ZSBMYWlsby4gUGxlYXNlIGRvdWJsZSBjaGVjayB0aGUgaW5zZXJ0ZWQgd2lkZ2V0LXR5cGUsIHRoZSBkZWZhdWx0IGNvbnRhaW5lciBpZCBhbmQgeW91ciBib3Qgc2VjcmV0IVwiLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBUeXBlSXQgZnJvbSAndHlwZWl0JztcclxuZXhwb3J0IGNsYXNzIExhaWxvQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib3RTZWNyZXQsIG1haW5Db250YWluZXJJZCwgY2FtZXJhQWRqdXN0bWVudCwgbGFuZ3VhZ2UsIHdpZGdldFR5cGUsIHR5cGVJdFN0cmluZ0FycmF5KSB7XHJcbiAgICAgICAgdGhpcy5ib3RTZWNyZXQgPSBib3RTZWNyZXQ7XHJcbiAgICAgICAgdGhpcy5tYWluQ29udGFpbmVySWQgPSBtYWluQ29udGFpbmVySWQ7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFBZGp1c3RtZW50ID0gY2FtZXJhQWRqdXN0bWVudDtcclxuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgdGhpcy53aWRnZXRUeXBlID0gd2lkZ2V0VHlwZTtcclxuICAgICAgICB0aGlzLnR5cGVJdFN0cmluZ0FycmF5ID0gdHlwZUl0U3RyaW5nQXJyYXk7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VDb2xsZWN0aW9uID0ge1xyXG4gICAgICAgICAgICBcImRlLURFXCI6IHtcclxuICAgICAgICAgICAgICAgIENvbW11bmljYXRpb25TZXJ2ZXJJbml0RmFpbGVkOiBcIkxlaWRlciBrYW5uIGljaCBkaXIgYXVmIEdydW5kIHRlY2huaXNjaGVyIFByb2JsZW1lIGdlcmFkZSBuaWNodCB3ZWl0ZXJoZWxmZW4uIEJpdHRlIHN0ZWxsZSBzaWNoZXIsIGRhc3MgZHUgbWl0IGRlbSBJbnRlcm5ldCB2ZXJidW5kZW4gYmlzdC4gU29sbHRlIGRpZXMgZGVyIEZhbGwgc2VpbiwgdmVyc3VjaGUgZXMgYml0dGUgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBOb0NvbW11bmljYXRpb25TZXJ2ZXJDb25uZWN0aW9uOiBcIkxlaWRlciBrYW5uIGljaCBkaXIgYXVmIEdydW5kIHRlY2huaXNjaGVyIFByb2JsZW1lIGdlcmFkZSBuaWNodCB3ZWl0ZXJoZWxmZW4uIEJpdHRlIHN0ZWxsZSBzaWNoZXIsIGRhc3MgZHUgbWl0IGRlbSBJbnRlcm5ldCB2ZXJidW5kZW4gYmlzdC4gU29sbHRlIGRpZXMgZGVyIEZhbGwgc2VpbiwgdmVyc3VjaGUgZXMgYml0dGUgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBSZWZyZXNoQ29tbXVuaWNhdGlvblNlcnZlclRva2VuRmFpbGVkOiBcIkxlaWRlciBrYW5uIGljaCBkaXIgYXVmIEdydW5kIHRlY2huaXNjaGVyIFByb2JsZW1lIGdlcmFkZSBuaWNodCB3ZWl0ZXJoZWxmZW4uIEJpdHRlIHN0ZWxsZSBzaWNoZXIsIGRhc3MgZHUgbWl0IGRlbSBJbnRlcm5ldCB2ZXJidW5kZW4gYmlzdC4gU29sbHRlIGRpZXMgZGVyIEZhbGwgc2VpbiwgdmVyc3VjaGUgZXMgYml0dGUgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBDb21tdW5pY2F0aW9uU2VydmVyQ29ubmVjdGlvbkNsb3NlZDogXCJMZWlkZXIga2FubiBpY2ggZGlyIGF1ZiBHcnVuZCB0ZWNobmlzY2hlciBQcm9ibGVtZSBnZXJhZGUgbmljaHQgd2VpdGVyaGVsZmVuLiBCaXR0ZSBzdGVsbGUgc2ljaGVyLCBkYXNzIGR1IG1pdCBkZW0gSW50ZXJuZXQgdmVyYnVuZGVuIGJpc3QuIFNvbGx0ZSBkaWVzIGRlciBGYWxsIHNlaW4sIHZlcnN1Y2hlIGVzIGJpdHRlIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgRGlyZWN0TGluZVRva2VuRmFpbGVkOiBcIkxlaWRlciBrYW5uIGljaCBkaXIgYXVmIEdydW5kIHRlY2huaXNjaGVyIFByb2JsZW1lIGdlcmFkZSBuaWNodCB3ZWl0ZXJoZWxmZW4uIEJpdHRlIHN0ZWxsZSBzaWNoZXIsIGRhc3MgZHUgbWl0IGRlbSBJbnRlcm5ldCB2ZXJidW5kZW4gYmlzdC4gU29sbHRlIGRpZXMgZGVyIEZhbGwgc2VpbiwgdmVyc3VjaGUgZXMgYml0dGUgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBSZWZyZXNoRGlyZWN0TGluZVRva2VuRmFpbGVkOiBcIkxlaWRlciBrYW5uIGljaCBkaXIgYXVmIEdydW5kIHRlY2huaXNjaGVyIFByb2JsZW1lIGdlcmFkZSBuaWNodCB3ZWl0ZXJoZWxmZW4uIEJpdHRlIHN0ZWxsZSBzaWNoZXIsIGRhc3MgZHUgbWl0IGRlbSBJbnRlcm5ldCB2ZXJidW5kZW4gYmlzdC4gU29sbHRlIGRpZXMgZGVyIEZhbGwgc2VpbiwgdmVyc3VjaGUgZXMgYml0dGUgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBEaXJlY3RMaW5lS2VlcEFsaXZlRmFpbGVkOiBcIkxlaWRlciBrYW5uIGljaCBkaXIgYXVmIEdydW5kIHRlY2huaXNjaGVyIFByb2JsZW1lIGdlcmFkZSBuaWNodCB3ZWl0ZXJoZWxmZW4uIEJpdHRlIHN0ZWxsZSBzaWNoZXIsIGRhc3MgZHUgbWl0IGRlbSBJbnRlcm5ldCB2ZXJidW5kZW4gYmlzdC4gU29sbHRlIGRpZXMgZGVyIEZhbGwgc2VpbiwgdmVyc3VjaGUgZXMgYml0dGUgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBMb3dCYW5kd2lkdGg6IFwiTGVpZGVyIGhhc3QgZHUgZ2VyYWRlIGVpbmUgc2VociBzY2hsZWNodGUgSW50ZXJuZXR2ZXJiaW5kdW5nLiBEYWhlciBrw7ZubmVuIGVpbmlnZSBtZWluZXIgRnVua3Rpb25lbiBzdGFyayBlaW5nZXNjaHLDpG5rdCBzZWluLiBCaXR0ZSB2ZXJzdWNoZSBlcyBkb2NoIHNww6R0ZXIgZXJuZXV0LCB3ZW5uIGRlaW5lIEludGVybmV0dmVyYmluZHVuZyB3aWVkZXIgYmVzc2VyIGlzdC5cIixcclxuICAgICAgICAgICAgICAgIEJvdENvbW11bmljYXRpb25GYWlsZWQ6IFwiTGVpZGVyIGthbm4gaWNoIGRpciBhdWYgR3J1bmQgdGVjaG5pc2NoZXIgUHJvYmxlbWUgZ2VyYWRlIG5pY2h0IHdlaXRlcmhlbGZlbi4gQml0dGUgc3RlbGxlIHNpY2hlciwgZGFzcyBkdSBtaXQgZGVtIEludGVybmV0IHZlcmJ1bmRlbiBiaXN0LiBTb2xsdGUgZGllcyBkZXIgRmFsbCBzZWluLCB2ZXJzdWNoZSBlcyBiaXR0ZSBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIEludmFsaWRDYW1lcmFBZGp1c3RtZW50OiBcIkxlaWRlciBoYWJlIGljaCBnZXJhZGUgdGVjaG5pc2NoZSBQcm9ibGVtZS4gQml0dGUgdmVyc3VjaGUgZXMgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBJbnZhbGlkQ2FudmFzU2l6ZTogXCJMZWlkZXIgaGFiZSBpY2ggZ2VyYWRlIHRlY2huaXNjaGUgUHJvYmxlbWUuIEJpdHRlIHZlcnN1Y2hlIGVzIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZVRvQm90RW1wdHk6IFwiT2gsIGVzIHNjaGVpbnQsIGFscyBow6R0dGVzdCBkdSBtaXIgbmljaHRzIG1pdGdldGVpbHQuIEJpdHRlIHNhZ2Ugb2RlciBzY2hyZWliZSBtaXIgZXR3YXMsIGRhbWl0IGljaCBkaXIgd2VpdGVyaGVsZmVuIGthbm4uXCIsXHJcbiAgICAgICAgICAgICAgICBJbnZhbGlkQWN0aW9uOiBcIkxlaWRlciBoYWJlIGljaCBnZXJhZGUgdGVjaG5pc2NoZSBQcm9ibGVtZS4gQml0dGUgdmVyc3VjaGUgZXMgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBNaWNyb3Bob25lQWNjZXNzRGVuaWVkOiBcIkxlaWRlciBrYW5uIGljaCBha3R1ZWxsIG5pY2h0IGF1ZiBkZWluIE1pa3JvZm9uIHp1Z3JlaWZlbi4gQml0dGUgc3RlbGxlIGluIGRlaW5lbiBCcm93c2VyZWluc3RlbGx1bmdlbiBzaWNoZXIsIGRhc3MgaWNoIGF1ZiBkZWluIE1pa3JvZm9uIHp1Z3JlaWZlbiBrYW5uLlwiLFxyXG4gICAgICAgICAgICAgICAgTWljcm9waG9uZU5vdEZvdW5kOiBcIkxlaWRlciBzY2hlaW50IGVzIHNvLCBhbHMgaMOkdHRlc3QgZHUga2VpbiBNaWtyb2Zvbi4gQml0dGUgc2NobGllw59lIGVpbiBNaWtyb2ZvbiBhbiB1bmQgdmVyc3VjaGUgZXMgYW5zY2hsaWXDn2VuZCBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBOb0dldFVzZXJNZWRpYUFjY2VzczogXCJMZWlkZXIga2FubiBpY2ggbmljaHQgYXVmIGRlaW4gTWlrcm9mb24genVncmVpZmVuLiBCaXR0ZSBzdGVsbGUgc2ljaGVyLCBkYXNzIGR1IMO8YmVyIGVpbiBNaWtyb2ZvbiB2ZXJmw7xnc3QgdW5kIGRpZXNlcyBmw7xyIGRlbiBadWdyaWZmIGR1cmNoIGRlaW5lbiBCcm93c2VyIGZyZWlnZWdlYmVuIGlzdC5cIixcclxuICAgICAgICAgICAgICAgIFdlYkdMTm90U3VwcG9ydGVkOiBcIkxlaWRlciB3aXJkIFdlYkdsIHZvbiBkZWluZW0gQnJvd3NlciBuaWNodCB1bnRlcnN0w7x0enQuIEJpdHRlIHZlcnN1Y2hlIGVzIG1pdCBlaW5lbSBhbmRlcmVuIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIE5vQXR0YWNobWVudHNJbkFjdGl2aXR5OiBcIkxlaWRlciBoYWJlIGljaCBnZXJhZGUgdGVjaG5pc2NoZSBQcm9ibGVtZS4gQml0dGUgdmVyc3VjaGUgZXMgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZW4tVVNcIjoge1xyXG4gICAgICAgICAgICAgICAgQ29tbXVuaWNhdGlvblNlcnZlckluaXRGYWlsZWQ6IFwiVW5mb3J0dW5hdGVseSBJIGNhbid0IGhlbHAgeW91IHJpZ2h0IG5vdyBkdWUgdG8gdGVjaG5pY2FsIHByb2JsZW1zLiBQbGVhc2UgbWFrZSBzdXJlIHRoYXQgeW91IGFyZSBjb25uZWN0ZWQgdG8gdGhlIGludGVybmV0LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgICAgICAgICAgTm9Db21tdW5pY2F0aW9uU2VydmVyQ29ubmVjdGlvbjogXCJVbmZvcnR1bmF0ZWx5IEkgY2FuJ3QgaGVscCB5b3UgcmlnaHQgbm93IGR1ZSB0byB0ZWNobmljYWwgcHJvYmxlbXMuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3UgYXJlIGNvbm5lY3RlZCB0byB0aGUgaW50ZXJuZXQuIElmIHRoaXMgaXMgdGhlIGNhc2UsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICBSZWZyZXNoQ29tbXVuaWNhdGlvblNlcnZlclRva2VuRmFpbGVkOiBcIlVuZm9ydHVuYXRlbHkgSSBjYW4ndCBoZWxwIHlvdSByaWdodCBub3cgZHVlIHRvIHRlY2huaWNhbCBwcm9ibGVtcy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgY29ubmVjdGVkIHRvIHRoZSBpbnRlcm5ldC4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcclxuICAgICAgICAgICAgICAgIENvbW11bmljYXRpb25TZXJ2ZXJDb25uZWN0aW9uQ2xvc2VkOiBcIlVuZm9ydHVuYXRlbHkgSSBjYW4ndCBoZWxwIHlvdSByaWdodCBub3cgZHVlIHRvIHRlY2huaWNhbCBwcm9ibGVtcy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgY29ubmVjdGVkIHRvIHRoZSBpbnRlcm5ldC4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcclxuICAgICAgICAgICAgICAgIERpcmVjdExpbmVUb2tlbkZhaWxlZDogXCJVbmZvcnR1bmF0ZWx5IEkgY2FuJ3QgaGVscCB5b3UgcmlnaHQgbm93IGR1ZSB0byB0ZWNobmljYWwgcHJvYmxlbXMuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3UgYXJlIGNvbm5lY3RlZCB0byB0aGUgaW50ZXJuZXQuIElmIHRoaXMgaXMgdGhlIGNhc2UsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICBSZWZyZXNoRGlyZWN0TGluZVRva2VuRmFpbGVkOiBcIkJvdCBvZmZsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBEaXJlY3RMaW5lS2VlcEFsaXZlRmFpbGVkOiBcIlVuZm9ydHVuYXRlbHkgSSBjYW4ndCBoZWxwIHlvdSByaWdodCBub3cgZHVlIHRvIHRlY2huaWNhbCBwcm9ibGVtcy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgY29ubmVjdGVkIHRvIHRoZSBpbnRlcm5ldC4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcclxuICAgICAgICAgICAgICAgIExvd0JhbmR3aWR0aDogXCJCb3RoIGNvbmRpdGlvbnMgaW5kaWNhdGUgYSBiYWQgaW50ZXJuZXQgY29ubmVjdGlvbiBhbmQgaXTigJlzIGhpZ2hseSByZWNvbW1lbmRlZCB0byBkaXNhYmxlIFNwZWVjaC10by1UZXh0LlwiLFxyXG4gICAgICAgICAgICAgICAgQm90Q29tbXVuaWNhdGlvbkZhaWxlZDogXCJUaGUgRGlyZWN0TGluZSBjb21tdW5pY2F0aW9uIHRvIHRoZSBib3Qgc2VydmljZSBmYWlsZWQuIFRoaXMgbWlnaHQgaW5kaWNhdGUgdGhhdCB0aGUgYm90IGlzIG9mZmxpbmUsIG9yIGFuIEF6dXJlIHJlc291cmNlIGlzIG5vdCB3b3JraW5nIHByb3Blcmx5LCBidXQgaXTigJlzIG1vcmUgbGlrZWx5IHRoYXQgdGhlIGludGVybmV0IGNvbm5lY3Rpb24gaXMgYnJva2VuLlwiLFxyXG4gICAgICAgICAgICAgICAgSW52YWxpZENhbWVyYUFkanVzdG1lbnQ6IFwiVW5mb3J0dW5hdGVseSwgSSdtIGhhdmluZyB0ZWNobmljYWwgcHJvYmxlbXMgcmlnaHQgbm93LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgICAgICAgICAgSW52YWxpZENhbnZhc1NpemU6IFwiVW5mb3J0dW5hdGVseSwgSSdtIGhhdmluZyB0ZWNobmljYWwgcHJvYmxlbXMgcmlnaHQgbm93LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZVRvQm90RW1wdHk6IFwiT2gsIGl0IHNlZW1zIHlvdSBoYXZlbid0IHRvbGQgbWUgYW55dGhpbmcuIFBsZWFzZSB0ZWxsIG1lIG9yIHdyaXRlIHNvbWV0aGluZyBzbyBJIGNhbiBoZWxwIHlvdS5cIixcclxuICAgICAgICAgICAgICAgIEludmFsaWRBY3Rpb246IFwiVW5mb3J0dW5hdGVseSwgSSdtIGhhdmluZyB0ZWNobmljYWwgcHJvYmxlbXMgcmlnaHQgbm93LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgICAgICAgICAgTWljcm9waG9uZUFjY2Vzc0RlbmllZDogXCJVbmZvcnR1bmF0ZWx5IEkgY2Fubm90IGFjY2VzcyB5b3VyIG1pY3JvcGhvbmUgYXQgdGhlIG1vbWVudC4gUGxlYXNlIG1ha2Ugc3VyZSBpbiB5b3VyIGJyb3dzZXIgc2V0dGluZ3MgdGhhdCBJIGNhbiBhY2Nlc3MgeW91ciBtaWNyb3Bob25lLlwiLFxyXG4gICAgICAgICAgICAgICAgTWljcm9waG9uZU5vdEZvdW5kOiBcIlVuZm9ydHVuYXRlbHksIGl0IGFwcGVhcnMgdGhhdCB5b3UgZG8gbm90IGhhdmUgYSBtaWNyb3Bob25lLiBQbGVhc2UgY29ubmVjdCBhIG1pY3JvcGhvbmUgYW5kIHRyeSBhZ2FpbiBhZnRlcndhcmRzLlwiLFxyXG4gICAgICAgICAgICAgICAgTm9HZXRVc2VyTWVkaWFBY2Nlc3M6IFwiVW5mb3J0dW5hdGVseSwgSSBjYW4ndCBhY2Nlc3MgeW91ciBtaWNyb3Bob25lLiBQbGVhc2UgbWFrZSBzdXJlIHRoYXQgeW91IGhhdmUgYSBtaWNyb3Bob25lIGFuZCB0aGF0IGl0IGlzIGVuYWJsZWQgZm9yIGFjY2VzcyBieSB5b3VyIGJyb3dzZXIuXCIsXHJcbiAgICAgICAgICAgICAgICBXZWJHTE5vdFN1cHBvcnRlZDogXCJVbmZvcnR1bmF0ZWx5IFdlYkdsIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLiBQbGVhc2UgdHJ5IGFub3RoZXIgYnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgTm9BdHRhY2htZW50c0luQWN0aXZpdHk6IFwiVW5mb3J0dW5hdGVseSwgSSdtIGhhdmluZyB0ZWNobmljYWwgcHJvYmxlbXMgcmlnaHQgbm93LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gTXVzdCBiZSBvdmVycmlkZW4gaW4gZGVyaXZlZCBjbGFzc2VzIGlmIG5lZWRlZC5cclxuICAgICAgICAvLyBUaGlzIGFzc29jaWF0aXZlIGFycmF5IHdpbGwgY29udGFpbiB0aGUgdGV4dCBjb250ZW50cyBmb3IgdGhlIGNoYXJhY3RlcidzIGh0bWwgdGVtcGxhdGUuXHJcbiAgICAgICAgdGhpcy5odG1sVGV4dENvbnRlbnRDb2xsZWN0aW9uID0ge1xyXG4gICAgICAgICAgICBcImRlLURFXCI6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJbnB1dENvbnRhaW5lclRpdGxlOiBcIldpZSBrYW5uIGljaCBJaG5lbiBoZWxmZW4/XCIsXHJcbiAgICAgICAgICAgICAgICBhc2tNZUNvbnRhaW5lclRpdGxlOiBbXCJGcmFnIG1pY2ghXCIsIFwiRGFua2VcIl0sXHJcbiAgICAgICAgICAgICAgICB1c2VySW5wdXRQbGFjZWhvbGRlcjogW1wiTmFjaHJpY2h0IHNlbmRlbi4uLlwiLCBcIkljaCBow7ZyZSB6dS4uLlwiXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJlbi1VU1wiOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySW5wdXRDb250YWluZXJUaXRsZTogXCJXaGF0IGNhbiBJIGhlbHAgeW91IHdpdGg/XCIsXHJcbiAgICAgICAgICAgICAgICBhc2tNZUNvbnRhaW5lclRpdGxlOiBbXCJBc2sgbWUhXCIsIFwiVGhhbmsgeW91XCJdLFxyXG4gICAgICAgICAgICAgICAgdXNlcklucHV0UGxhY2Vob2xkZXI6IFtcIlNlbmQgYSBtZXNzYWdlLi4uXCIsIFwiSSBhbSBsaXN0ZW5pbmcuLi5cIl0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaHUtSFVcIjoge1xyXG4gICAgICAgICAgICAgICAgdXNlcklucHV0Q29udGFpbmVyVGl0bGU6IFwiTWliZW4gc2Vnw610aGV0ZWs/XCIsXHJcbiAgICAgICAgICAgICAgICBhc2tNZUNvbnRhaW5lclRpdGxlOiBbXCJLw6lyZGV6emVuIVwiLCBcIkvDtnN6w7Zuw7ZtXCJdLFxyXG4gICAgICAgICAgICAgICAgdXNlcklucHV0UGxhY2Vob2xkZXI6IFtcIsOcemVuZXQga8O8bGTDqXNlLi4uXCIsIFwiSGFsbGdhdG9tLi4uXCJdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gRXZlcnkgdmVyc2lvbiBvZiBMYWlsbyBuZWVkcyBhIGN1c3RvbWl6ZWQgYm90U3RhdGVDb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBtdXN0IGJlIG92ZXJyaWRlbiBpbiBkZXJpdmVkIGNsYXNzZXMuXHJcbiAgICAgICAgdGhpcy5ib3RTdGF0ZUNvbGxlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIGJlZm9yZUJvdEluaXRpYWxpemVkOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7IH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlkbGU6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6ICgpID0+IHsgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlzdGVuaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7IH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFuc3dlcmluZzoge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlTdGF0ZTogKGRhdGEpID0+IHsgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6IChlcnIpID0+IHsgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGxzIHRoZSBjaGFyYWN0ZXIncyBcImxpc3RlblwiIGZ1bmN0aW9uLlxyXG4gICAgICAgICAqIEhpZGVzIHRoZSBtaWNyb3Bob25lIGljb24gYW5kIGRpc3BsYXlzIGEgbG9hZGluZyBzcGlubmVyIHVudGlsIHRoZSBsaXN0ZW5pbmcgc3RhdGUgaXMgaW5pdGlhbGl6ZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vbkxpc3RlbkJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm1pY0ljb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgd2luZG93LmNoYXJhY3Rlci5saXN0ZW4oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VDb2RlID1cclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5odG1sVGV4dENvbnRlbnRDb2xsZWN0aW9uKS5maW5kKChrZXkpID0+IGtleSA9PT0gdGhpcy5sYW5ndWFnZSkgfHwgLy8gTG9va2luZyBmb3IgdGhlIGtleSBpbiB0aGUgYXNzb2NpYXRpdmUgYXJyYXkgdG8gdXNlIGl0IGZvciBmaWx0ZXJpbmcgbGF0ZXIgb25cclxuICAgICAgICAgICAgICAgIFwiZW4tVVNcIjsgLy8gT3IgdXNpbmcgdGhlIGVuZ2xpc2ggb25lcyBhcyBhIGZhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5pbmplY3REZXBlbmRlbmNpZXMoKTtcclxuICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBhcmUgdGhlIGJhcmUgbWluaW11bSBmb3IgdGhlIHNpbXBsZXN0IHdpZGdldCAoc2tlbGV0b24pIHRvIGZ1bmN0aW9uLlxyXG4gICAgICAgIC8vIFRoZXkgd2lsbCBiZSBpbmplY3RlZCBpbiB0aGUgb3ZlcnJpZGVuIG1ldGhvZCBpbiBMYWlsb1NrZWxldG9uXHJcbiAgICAgICAgdGhpcy5taWNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLW1pY3JvcGhvbmUtYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMubWljSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tbWljcm9waG9uZS1pY29uXCIpO1xyXG4gICAgICAgIHRoaXMuYm90SW50ZWdyYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLXdpZGdldC1jb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLWNoYXJhY3Rlci1jYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdcIik7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLXVzZXItaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLXVzZXItaW5wdXQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0Q29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLXVzZXItaW5wdXQtY29udGFpbmVyLXRpdGxlXCIpO1xyXG4gICAgICAgIHRoaXMuYm90T3V0cHV0VGV4dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhaWxvLWFuc3dlci10ZXh0LWZpZWxkJyk7XHJcbiAgICAgICAgdGhpcy50eXBlSXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFpbG8tZXhhbXBsZS1xdWVzdGlvbnMnKTtcclxuICAgICAgICB0aGlzLmluaXRUeXBlSXQoKTtcclxuICAgICAgICAvLyBFbmQgb2YgY29uc3RydWN0b3JcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW5qZWN0cyBhbGwgdGhlIGRlcGVuZGVuY2llcyBpbiB0aGUgYmFzZSBjbGFzc2VzJ3MgY29uc3RydWN0b3IuXHJcbiAgICAgKiBUaGUgY2hhcmFjdGVyJ3MgSFRNTCBUZW1wbGF0ZSwgaXRzIENTUyBUZW1wbGF0ZSBhbmQgRm9udCBBd2Vzb21lIHdpbGwgYmUgYWRkZWQgdG8gdGhlIERPTS5cclxuICAgICAqIEV2ZXJ5IHZlcnNpb24gb2YgdGhlIGNoYXJhY3RlciBuZWVkcyB0aGVzZSBkZXBlbmRlbmNpZXMgdG8gb3BlcmF0ZSBwcm9wZXJseS5cclxuICAgICAqL1xyXG4gICAgaW5qZWN0RGVwZW5kZW5jaWVzKCkge1xyXG4gICAgICAgIHRoaXMuaW5qZWN0SHRtbFRlbXBsYXRlKCk7XHJcbiAgICAgICAgdGhpcy5pbmplY3RDc3NUZW1wbGF0ZSh0aGlzLndpZGdldFR5cGUpO1xyXG4gICAgICAgIHRoaXMuaW5qZWN0Rm9udEF3ZXNvbWUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRHluYW1pY2FsbHkgaW5qZWN0cyB0aGUgbGluayB0YWcgb2YgdGhlIGNoYXJhY3RlcidzIENTUyBpbnRvIHRoZSBoZWFkLlxyXG4gICAgICogQHBhcmFtIHdpZGdldFR5cGUgVHlwZSBvZiB0aGUgY2hhcmFjdGVyLiBcInN0YW5kQWxvbmVcIiB8IFwidGlueVdpZGdldFwiIHwgXCJoYWxmU2NyZWVuV2lkZ2V0XCJcclxuICAgICAqL1xyXG4gICAgaW5qZWN0Q3NzVGVtcGxhdGUod2lkZ2V0VHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGxhaWxvU3R5bGVTaGVldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tc3R5bGVzaGVldFwiKTtcclxuICAgICAgICBjb25zdCBmaXJzdExpbmtUYWdJbkhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZCBsaW5rXCIpO1xyXG4gICAgICAgIGlmIChsYWlsb1N0eWxlU2hlZXQpIHtcclxuICAgICAgICAgICAgbGFpbG9TdHlsZVNoZWV0LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUT0RPOiBDaGFuZ2UgSFJFRiB0byBDRE4ncyB1cmwgaW4gcHJvZHVjdGlvblxyXG4gICAgICAgIGNvbnN0IGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG4gICAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xyXG4gICAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9jc3NcIik7XHJcbiAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcImlkXCIsIGBsYWlsby1zdHlsZXNoZWV0YCk7XHJcbiAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYC4vZGlzdC8ke3dpZGdldFR5cGV9LmNzc2ApO1xyXG4gICAgICAgIHRoaXMuaGVhZC5pbnNlcnRCZWZvcmUoY3NzLCBmaXJzdExpbmtUYWdJbkhlYWQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmplY3RzIHRoZSBGb250IEF3ZXNvbWUgQ0ROIHRvIHRoZSBkb2N1bWVudCdzIGhlYWQuIEZvbnQgQXdlc29tZSBpcyBvbmUgb2YgdGhlIGNoYXJhY3RlcidzIGRlcGVuZGVuY2llcyBhbmQgd2lsbCBiZSBkeW5hbWljYWxseSBpbmplY3RlZCBpbnRvIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIGluamVjdEZvbnRBd2Vzb21lKCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0TGlua1RhZ0luSGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkIGxpbmtcIik7XHJcbiAgICAgICAgY29uc3QgZm9udEF3ZXNvbWVDc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICAgICAgICBmb250QXdlc29tZUNzcy5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xyXG4gICAgICAgIGZvbnRBd2Vzb21lQ3NzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTQuMC9jc3MvYWxsLmNzc1wiKTtcclxuICAgICAgICBmb250QXdlc29tZUNzcy5zZXRBdHRyaWJ1dGUoXCJpbnRlZ3JpdHlcIiwgXCJzaGEzODQtSHpMZUJ1aG9OUHZTbDVLWW5qeDBCVCtXQjBRRUVxTHByTytOQmtrazVnYmM2N0ZUYUw3WElHYTJ3MUwwWGJnY1wiKTtcclxuICAgICAgICBmb250QXdlc29tZUNzcy5zZXRBdHRyaWJ1dGUoXCJjcm9zc29yaWdpblwiLCBcImFub255bW91c1wiKTtcclxuICAgICAgICB0aGlzLmhlYWQuaW5zZXJ0QmVmb3JlKGZvbnRBd2Vzb21lQ3NzLCBmaXJzdExpbmtUYWdJbkhlYWQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgYSBUeXBlSXQgb2JqZWN0IHVzaW5nIHRoZSB0eXBlSXRTdHJpbmdBcnJheVxyXG4gICAgICovXHJcbiAgICBpbml0VHlwZUl0KCkge1xyXG4gICAgICAgIG5ldyBUeXBlSXQoYCMke3RoaXMudHlwZUl0Q29udGFpbmVyLmlkfWAsIHtcclxuICAgICAgICAgICAgc3RyaW5nczogdGhpcy50eXBlSXRTdHJpbmdBcnJheSxcclxuICAgICAgICAgICAgbGlmZUxpa2U6IHRydWUsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIHdhaXRVbnRpbFZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGJyZWFrTGluZXM6IGZhbHNlXHJcbiAgICAgICAgfSkuZ28oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIGVhY2ggaHRtbCBlbGVtZW50IHRoYXQgaGFkIGJlZW4gZGVjbGFyZWQgaW4gdGhlIGh0bWxUZXh0Q29udGVudENvbGxlY3Rpb24gb2JqZWN0LlxyXG4gICAgICogVGhpcyBtZXRob2QgbXVzdCBiZSBvdmVycmlkZGVuIGFuZCBhZGp1c3RlZCB0byB0aGUgZGVyaXZlZCBjbGFzcydzIGh0bWwgdGVtcGxhdGUgc3RydWN0dXJlLlxyXG4gICAgICovXHJcbiAgICBzZXRIdG1sVGV4dENvbnRlbnRzKCkge1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0Q29udGFpbmVyVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdLnVzZXJJbnB1dENvbnRhaW5lclRpdGxlO1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5odG1sVGV4dENvbnRlbnRDb2xsZWN0aW9uW3RoaXMubGFuZ3VhZ2VDb2RlXS51c2VySW5wdXRQbGFjZWhvbGRlclswXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRXZlcnkgdmVyc2lvbiBvZiBMYWlsbyBuZWVkcyBjdXN0b21pemVkIGV2ZW50IGxpc3RlbmVycy5cclxuICAgICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgb3ZlcnJpZGRlbiBhbmQgYWRqdXN0ZWQgdG8gdGhlIGRlcml2ZWQgY2xhc3MncyBodG1sIHRlbXBsYXRlIHN0cnVjdHVyZS5cclxuICAgICAqL1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5taWNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25MaXN0ZW5CdXR0b25DbGljayk7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB0aGlzLm9uRW50ZXJQcmVzc2VkKGUpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgbW9kZWwncyBzdGF0ZSBhY2NvcmRpbmcgdG8gc3RhZ2VzIG9mIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgXCJiZWZvcmVCb3RJbml0aWFsaXplZFwiIHwgXCJpZGxlXCIgfCBcImxpc3RlbmluZ1wiIHwgXCJhbnN3ZXJpbmdcIiB8IFwiZXJyb3JcIlxyXG4gICAgICogQHBhcmFtIGRhdGEgSUJvdFJlc3BvbnNlIG9iamVjdCB3aGljaCB3aWxsIGJlIHVzZWQgaW4gXCJhbnN3ZXJpbmdcIiBhbmQgXCJlcnJvclwiIHN0YXRlc1xyXG4gICAgICovXHJcbiAgICBzZXRCb3RTdGF0ZShzdGF0ZSwgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlQWN0aW9uID0gdGhpcy5ib3RTdGF0ZUNvbGxlY3Rpb25bc3RhdGVdO1xyXG4gICAgICAgIHN0YXRlQWN0aW9uLmFwcGx5U3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHRpbmcgdGhlIHVzZXIgaW5wdXQncyB2YWx1ZSB0byBub3RoaW5nIChyZXNldHRpbmcgdGhlIGZpZWxkKVxyXG4gICAgICovXHJcbiAgICBjbGVhclVzZXJJbnB1dEZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgICAvKipTZXR0aW5nIHRoZSB2YWx1ZSBvZiB0aGUgdXNlciBpbnB1dC4gSXQgd2lsbCBiZSBpbXBvcnRhbnQgaWYgdGhlIHVzZXIgdXNlZCB0aGUgbWljcm9waG9uZSB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBjaGFyYWN0ZXIgdG8gc2hvdyB3aGF0IHRoZSBjaGFyYWN0ZXIgdW5kZXJzdG9vZC5cclxuICAgICAqL1xyXG4gICAgc2V0VXNlcklucHV0Q29udGVudCh0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQudmFsdWUgPSB0ZXh0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgc2ltcGxlIEhUTUwgcGFyYWdyYXBoIGVsZW1lbnQgd2hpY2ggd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgYm90T3V0cHV0VGV4dEZpZWxkIGluIHRoZSBkZXJpdmVkIGNsYXNzZXMuXHJcbiAgICAgKiBAcGFyYW0gdGV4dCBUZXh0IGNvbnRlbnQgb2YgdGhlIHBhcmFncmFwaFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVQYXJhZ3JhcGgodGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBIVE1MIGFuY2hvciBlbGVtZW50IHdoaWNoIHdpbGwgYmUgZGlzcGxheWVkIGFzIGEgYnV0dG9uIHRvIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGEgbmV3IHRhYi5cclxuICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIGhyZWYgYXR0cmlidXRlIG9mIHRoZSBhbmNob3IgdGFnXHJcbiAgICAgKiBAcGFyYW0gY2FwdGlvbiBUZXh0IGNvbnRlbnQgb2YgdGhlIGFuY2hvciB0YWdcclxuICAgICAqL1xyXG4gICAgY3JlYXRlQW5jaG9yKHRhcmdldCwgY2FwdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdGFyZ2V0KTtcclxuICAgICAgICBhLmNsYXNzTmFtZSA9IFwibGFpbG8tbGlua1wiO1xyXG4gICAgICAgIGEudGV4dENvbnRlbnQgPSBjYXB0aW9uO1xyXG4gICAgICAgIGEudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgICAgICBhLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja2luZyBpZiB0aGUgdXNlciBwcmVzc2VkIEVudGVyIHdoaWxlIGZvY3VzaW5nIHRoZSB1c2VyIGlucHV0LiBUaGUgaW5wdXQgdmFsdWUgd2lsbCBiZSBjaGVja2VkIHRvIGZpbHRlciBvdXQgaWYgYW4gaW5wdXQgY29uc3Rpc3Qgb2Ygb25seSB3aGl0ZSBzcGFjZXNcclxuICAgICAqIFRoZSBjaGFyYWN0ZXIncyBcInNlbmRcIiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgaW5wdXQgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gZSBUaGUgZXZlbnQgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIG9uRW50ZXJQcmVzc2VkKGUpIHtcclxuICAgICAgICBpZiAoZS53aGljaCA9PSAxMykge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VySW5wdXRWYWx1ZSA9IHRoaXMudXNlcklucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodXNlcklucHV0VmFsdWUgIT0gXCJcIiAmJiB1c2VySW5wdXRWYWx1ZS5yZXBsYWNlKC9cXHMvZywgXCJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNoYXJhY3Rlci5zZW5kKHVzZXJJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXNlcyB0aGUgYXNzb2NpYXRpdmUgYXJyYXkgb2YgZXJyb3IgbWVzc2FnZXMgYWNjb3JkaW5nIHRvIHRoZSBjaG9zZW4gbGFuZ3VhZ2UgdG8gZmluZCB0aGUgbWF0Y2hpbmcgZXJyb3IgbWVzc2FnZSB0byBhbiBlcnJvciBjb2RlLlxyXG4gICAgICogQHBhcmFtIGVycm9yQ29kZSBLZXkgb2YgdGhlIGVycm9yIG9iamVjdCB3aGljaCB3aWxsIGJlIHNlbnQgYnkgdGhlIHNlcnZlciBpZiBzb21ldGhpbmcgZ29lcyB3cm9uZ1xyXG4gICAgICovXHJcbiAgICBmaW5kRXJyb3JNZXNzYWdlKGVycm9yQ29kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZUNvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdW2Vycm9yQ29kZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjaGFyYWN0ZXIncyByZXNwb25zZSB3aWxsIGJlIGV2YWx1YXRlZC4gSW4gY2FzZSBvZiBhbiBJRXJyb3JCb3RSZXNwb25zZSB0aGUgXCJoYW5kbGVCb3RPdXRwdXRJZkVycm9yXCIgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFuZCB0aGlzIG1ldGhvZCB3aWxsIGJlIHRlcm1pbmF0ZWQuXHJcbiAgICAgKiBPdGhlcndpc2UgdGhlIElTdWNjZXNzZnVsQm90UmVwb25zZSBvYmplY3Qgd2lsbCBiZSBldmFsdWF0ZWQgYW5kIHRoZSB0ZXh0IHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBib3QgYW5zd2VyIGNvbnRhaW5lci5cclxuICAgICAqIElmIHRoZSBSZXBvbnNlIG9iamVjdCBjb250YWlucyBhbiBcImFjdGlvbnNcIiBhcnJheSBvZiBvYmplY3RzLCB0aGF0IGFycmF5IHdpbGwgYmUgZmlsdGVyZWQgb3V0IGZvciBhICd1cmxSZWRpcmVjdCcgdHlwZSB0byB1c2UgdGhlIHVybCBhbmQgY2FwdGlvbiB0byBjcmVhdGUgYSByZWRpcmVjdGluZyBhbmNob3IgdGFnXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBJQm90UmVzcG9uc2Ugb2JqZWN0IHdoaWNoIGNhbiBiZSBhbiBJU3VjY2Vzc2Z1bEJvdFJlc3BvbnNlIG9yIGFuIElFcnJvckJvdFJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VTdGF0dXMgXCJzdWNjZXNzXCIgfCBcImVycm9yXCJcclxuICAgICAqL1xyXG4gICAgcmVuZGVyUGFyYWdyYXBoc0Zyb21BbnN3ZXIoZGF0YSwgcmVzcG9uc2VTdGF0dXMgPSAnc3VjY2VzcycpIHtcclxuICAgICAgICB0aGlzLmJvdE91dHB1dFRleHRGaWVsZC5zdHlsZS5jb2xvciA9ICdncmV5JztcclxuICAgICAgICB0aGlzLmJvdE91dHB1dFRleHRGaWVsZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAvLyBIYW5kbGluZyBlcnJvcnNcclxuICAgICAgICBpZiAocmVzcG9uc2VTdGF0dXMgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVCb3RPdXRwdXRJZkVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEhhbmRsaW5nIHN1Y2Nlc3NmdWwgcmVzcG9uc2VzXHJcbiAgICAgICAgY29uc3QgeyB0ZXh0LCBhY3Rpb25zIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBwYXJhZ3JhcGhzID0gW107XHJcbiAgICAgICAgcGFyYWdyYXBocy5wdXNoKHRoaXMuY3JlYXRlUGFyYWdyYXBoKHRleHQpKTtcclxuICAgICAgICAvLyBIYW5kbGluZyB0aGUgYWN0aW9ucyBpZiB0aGVyZSBhcmUgYW55XHJcbiAgICAgICAgaWYgKGFjdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgdXJsQWN0aW9ucyA9IGFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IGFjdGlvbi50eXBlID09PSAndXJsUmVkaXJlY3QnKTtcclxuICAgICAgICAgICAgdXJsQWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLmNyZWF0ZUFuY2hvcihhY3Rpb24udXJsLCBhY3Rpb24uY2FwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhzLnB1c2goYSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhZ3JhcGhzLmZvckVhY2goKHApID0+IHRoaXMuYm90T3V0cHV0VGV4dEZpZWxkLnByZXBlbmQocCkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBIHNpbXBsZSByZWQgcGFyYWdyYXBoIHdpbGwgYmUgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGJvdE91dHB1dFRleHRGaWVsZC5cclxuICAgICAqIEBwYXJhbSBlcnJvciBJRXJyb3JCb3RSZXNwb25zZSBvYmplY3Qgd2hpY2ggY29udGFpbnMgYW4gZXJyb3JDb2RlIHByb3BlcnR5LlxyXG4gICAgICovXHJcbiAgICBoYW5kbGVCb3RPdXRwdXRJZkVycm9yKGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5ib3RPdXRwdXRUZXh0RmllbGQuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgICBjb25zdCBwID0gdGhpcy5jcmVhdGVQYXJhZ3JhcGgodGhpcy5maW5kRXJyb3JNZXNzYWdlKGVycm9yLmVycm9yQ29kZSkpO1xyXG4gICAgICAgIHRoaXMuYm90T3V0cHV0VGV4dEZpZWxkLmFwcGVuZENoaWxkKHApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IExhaWxvVGlueVdpZGdldCB9IGZyb20gXCIuL0xhaWxvVGlueVdpZGdldFwiO1xyXG5pbXBvcnQgaGFsZlNjcmVlbldpZGdldFRlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlcy9oYWxmU2NyZWVuV2lkZ2V0VGVtcGxhdGUuaHRtbCc7XHJcbmNsYXNzIExhaWxvSGFsZlNjcmVlbldpZGdldCBleHRlbmRzIExhaWxvVGlueVdpZGdldCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib3RTZWNyZXQsIG1haW5Db250YWluZXJJZCwgY2FtZXJhQWRqdXN0bWVudCwgbGFuZ3VhZ2UsIHdpZGdldFR5cGUsIHR5cGVJdFN0cmluZ0FycmF5KSB7XHJcbiAgICAgICAgc3VwZXIoYm90U2VjcmV0LCBtYWluQ29udGFpbmVySWQsIGNhbWVyYUFkanVzdG1lbnQsIGxhbmd1YWdlLCB3aWRnZXRUeXBlLCB0eXBlSXRTdHJpbmdBcnJheSk7XHJcbiAgICAgICAgdGhpcy5ib3RTZWNyZXQgPSBib3RTZWNyZXQ7XHJcbiAgICAgICAgdGhpcy5tYWluQ29udGFpbmVySWQgPSBtYWluQ29udGFpbmVySWQ7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFBZGp1c3RtZW50ID0gY2FtZXJhQWRqdXN0bWVudDtcclxuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgdGhpcy53aWRnZXRUeXBlID0gd2lkZ2V0VHlwZTtcclxuICAgICAgICB0aGlzLnR5cGVJdFN0cmluZ0FycmF5ID0gdHlwZUl0U3RyaW5nQXJyYXk7XHJcbiAgICB9XHJcbiAgICBpbmplY3RIdG1sVGVtcGxhdGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tYWluQ29udGFpbmVySWQpLmlubmVySFRNTCA9IGhhbGZTY3JlZW5XaWRnZXRUZW1wbGF0ZS50cmltKCk7XHJcbiAgICB9XHJcbiAgICByZXNpemVCb3RJZlVzZXJJbnB1dEhpZGRlbigpIHtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA4NjgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm90SW50ZWdyYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250YWluZXItc2hvdycpKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLnJlc2l6ZSg2ODAsIDkzMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLnJlc2l6ZSgyMDAsIDM1NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIucmVzaXplKDMwMCwgNDU1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIH0sIDQwMCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGFpbG9IYWxmU2NyZWVuV2lkZ2V0O1xyXG4iLCJpbXBvcnQgeyBMYWlsb0Jhc2UgfSBmcm9tIFwiLi9MYWlsb0Jhc2VcIjtcclxuaW1wb3J0IHN0YW5kQWxvbmVUZW1wbGF0ZSBmcm9tIFwiLi4vdGVtcGxhdGVzL3N0YW5kQWxvbmVUZW1wbGF0ZS5odG1sXCI7XHJcbmV4cG9ydCBjbGFzcyBMYWlsb1N0YW5kQWxvbmUgZXh0ZW5kcyBMYWlsb0Jhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoYm90U2VjcmV0LCBtYWluQ29udGFpbmVyLCBjYW1lcmFBZGp1c3RtZW50ID0gXCJsb25nc2hvdFwiLCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpIHtcclxuICAgICAgICBzdXBlcihib3RTZWNyZXQsIG1haW5Db250YWluZXIsIGNhbWVyYUFkanVzdG1lbnQsIGxhbmd1YWdlLCB3aWRnZXRUeXBlLCB0eXBlSXRTdHJpbmdBcnJheSk7XHJcbiAgICAgICAgdGhpcy5ib3RTZWNyZXQgPSBib3RTZWNyZXQ7XHJcbiAgICAgICAgdGhpcy5tYWluQ29udGFpbmVyID0gbWFpbkNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmNhbWVyYUFkanVzdG1lbnQgPSBjYW1lcmFBZGp1c3RtZW50O1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgICAgICB0aGlzLndpZGdldFR5cGUgPSB3aWRnZXRUeXBlO1xyXG4gICAgICAgIHRoaXMudHlwZUl0U3RyaW5nQXJyYXkgPSB0eXBlSXRTdHJpbmdBcnJheTtcclxuICAgICAgICAvLyBLZWVwIGl0IGFuIGFycm93IGZ1bmN0aW9uXHJcbiAgICAgICAgLy8gQWRkcyBvciByZW1vdmVzIHRoZSBcInNob3dcIiBjbGFzcyBvbiB0aGUgdXNlcklucHV0XHJcbiAgICAgICAgdGhpcy50b2dnbGVVc2VySW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VySW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVzZXJJbnB1dC5mb2N1cygpLCA0MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBCYXNlIHRlbXBsYXRlIGFuZCBkZXBlbmRlbmNpZXMgd2lsbCBiZSBpbmplY3RlZCBieSBydW5uaW5nIHRoZSBiYXNlIGNsYXNzJ3MgY29uc3RydWN0b3IuXHJcbiAgICAgICAgdGhpcy50ZXh0SW5wdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLXRleHQtaW5wdXQtYnV0dG9uXCIpO1xyXG4gICAgICAgIC8vIEFwcGx5IHN0YXRlIGlzIGEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHRoZSBjaGFuZ2VzIG9mIGRpZmZlcmVudCBib3Qgc3RhdGVzIGJ5IGR5bmFtaWNhbGx5IGFkZGluZyBhbmQgcmVtb3ZpbmcgY3NzIGNsYXNzZXMuXHJcbiAgICAgICAgdGhpcy5ib3RTdGF0ZUNvbGxlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIGJlZm9yZUJvdEluaXRpYWxpemVkOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taWNCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpZGxlOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdiZWZvcmUtaW5pdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RlbmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taWNJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmF0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuaHRtbFRleHRDb250ZW50Q29sbGVjdGlvblt0aGlzLmxhbmd1YWdlQ29kZV0udXNlcklucHV0UGxhY2Vob2xkZXJbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclVzZXJJbnB1dEZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaXN0ZW5pbmc6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5hZGQoJ2xpc3RlbmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5odG1sVGV4dENvbnRlbnRDb2xsZWN0aW9uW3RoaXMubGFuZ3VhZ2VDb2RlXS51c2VySW5wdXRQbGFjZWhvbGRlclsxXTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFuc3dlcmluZzoge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlTdGF0ZTogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFyYWdyYXBoc0Zyb21BbnN3ZXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlTdGF0ZTogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFyYWdyYXBoc0Zyb21BbnN3ZXIoZXJyLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdFN0YXRlQ29sbGVjdGlvblsnaWRsZSddLmFwcGx5U3RhdGUodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldEh0bWxUZXh0Q29udGVudHMoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICBpbmplY3RIdG1sVGVtcGxhdGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tYWluQ29udGFpbmVySWQpLmlubmVySFRNTCA9IHN0YW5kQWxvbmVUZW1wbGF0ZS50cmltKCk7XHJcbiAgICB9XHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICBzdXBlci5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMudGV4dElucHV0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZVVzZXJJbnB1dCk7XHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICBvbkluaXRpYWxpc2VkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZShcImlkbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNoYXJhY3Rlci5yZXNpemUoOTAwLCA3NTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUod2luZG93LmNoYXJhY3Rlcik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25RdWVzdGlvbkFza2VkOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vIGFuc3dlciB3YXMgYXNrZWQgKHZpYSBtaWNyb3Bob25lKSBhbiBlbXB0eSBvYmplY3Qgd2lsbCBiZSByZWNlaXZlZCB3aXRoIGFic29sdXRlbHkgbm8ga2V5c1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclBhcmFncmFwaHNGcm9tQW5zd2VyKHsgdGV4dDogJ0tlaW5lIEZyYWdlIGdlc3RlbGx0Li4uJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZSgnaWRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VXNlcklucHV0Q29udGVudChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQW5zd2VyZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJvdFN0YXRlKFwiaWRsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkFuc3dlcjogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJvdFN0YXRlKFwiYW5zd2VyaW5nXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJvdFN0YXRlKFwiZXJyb3JcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkxpc3RlbmluZzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoXCJsaXN0ZW5pbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LCB0aGlzLmNoYXJhY3RlckNvbnRhaW5lciwgdGhpcy5ib3RTZWNyZXQsIHRoaXMubGFuZ3VhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IExhaWxvQmFzZSB9IGZyb20gJy4vTGFpbG9CYXNlJztcclxuaW1wb3J0IHRpbnlXaWRnZXRUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZXMvdGlueVdpZGdldFRlbXBsYXRlLmh0bWwnO1xyXG5leHBvcnQgY2xhc3MgTGFpbG9UaW55V2lkZ2V0IGV4dGVuZHMgTGFpbG9CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGJvdFNlY3JldCwgbWFpbkNvbnRhaW5lcklkLCBjYW1lcmFBZGp1c3RtZW50LCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpIHtcclxuICAgICAgICBzdXBlcihib3RTZWNyZXQsIG1haW5Db250YWluZXJJZCwgY2FtZXJhQWRqdXN0bWVudCwgbGFuZ3VhZ2UsIHdpZGdldFR5cGUsIHR5cGVJdFN0cmluZ0FycmF5KTtcclxuICAgICAgICB0aGlzLmJvdFNlY3JldCA9IGJvdFNlY3JldDtcclxuICAgICAgICB0aGlzLm1haW5Db250YWluZXJJZCA9IG1haW5Db250YWluZXJJZDtcclxuICAgICAgICB0aGlzLmNhbWVyYUFkanVzdG1lbnQgPSBjYW1lcmFBZGp1c3RtZW50O1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgICAgICB0aGlzLndpZGdldFR5cGUgPSB3aWRnZXRUeXBlO1xyXG4gICAgICAgIHRoaXMudHlwZUl0U3RyaW5nQXJyYXkgPSB0eXBlSXRTdHJpbmdBcnJheTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUb2dnbGluZyB0aGUgXCJjb250YWluZXItc2hvd1wiIGNsYXNzIG9uIHRoZSBib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5cclxuICAgICAgICAgKiBLZWVwIGl0IGFzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQm90SW50ZWdyYXRpb25Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm90SW50ZWdyYXRpb25Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFpbmVyLXNob3cnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBc2tNZUNvbnRhaW5lclRpdGxlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplQm90SWZVc2VySW5wdXRIaWRkZW4oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEJhc2UgdGVtcGxhdGUgYW5kIGRlcGVuZGVuY2llcyB3aWxsIGJlIGluamVjdGVkIGJ5IHJ1bm5pbmcgdGhlIGJhc2UgY2xhc3MncyBjb25zdHJ1Y3Rvci5cclxuICAgICAgICAvLyBUaGUgb3ZlcnJpZGVuIGluamVjdEh0bWxUZW1wbGF0ZSgpIHRha2VzIGNhcmUgb2YgdGhlIGh0bWwgc3RydWN0dXJlIHRoYXQgaXMgbmVlZGVkIGJ5IHRoaXMgcGFydGljdWxhciB3aWRnZXQuXHJcbiAgICAgICAgdGhpcy5oaWRlVXNlcklucHV0Q29udGFpbmVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhaWxvLXdpZGdldC10b2dnbGUtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5hc2tNZUNvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fzay1tZS1jb250YWluZXItdGl0bGUnKTtcclxuICAgICAgICB0aGlzLmJvdFN0YXRlQ29sbGVjdGlvbiA9IHtcclxuICAgICAgICAgICAgYmVmb3JlQm90SW5pdGlhbGl6ZWQ6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVVc2VySW5wdXRDb250YWluZXJCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taWNCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpZGxlOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdiZWZvcmUtaW5pdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVVzZXJJbnB1dENvbnRhaW5lckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0ZW5pbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdLnVzZXJJbnB1dFBsYWNlaG9sZGVyWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJVc2VySW5wdXRGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlzdGVuaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0ljb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QuYWRkKCdsaXN0ZW5pbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuaHRtbFRleHRDb250ZW50Q29sbGVjdGlvblt0aGlzLmxhbmd1YWdlQ29kZV0udXNlcklucHV0UGxhY2Vob2xkZXJbMV07XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbnN3ZXJpbmc6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taWNCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclBhcmFncmFwaHNGcm9tQW5zd2VyKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclBhcmFncmFwaHNGcm9tQW5zd2VyKGVyciwgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3RTdGF0ZUNvbGxlY3Rpb25bJ2lkbGUnXS5hcHBseVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRIdG1sVGV4dENvbnRlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmplY3RpbmcgdGhlIHdpZGdldCdzIHRlbXBsYXRlXHJcbiAgICAgKi9cclxuICAgIGluamVjdEh0bWxUZW1wbGF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1haW5Db250YWluZXJJZCkuaW5uZXJIVE1MID0gdGlueVdpZGdldFRlbXBsYXRlLnRyaW0oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuaW5nIGZvciBhIG1pY3JvcGhvbmUgYnV0dG9uIGNsaWNrLCBhbiBFbnRlciBrZXkgcHJlc3MgaW4gdGhlIHVzZXIgaW5wdXQgZmllbGQgYW5kIGEgY2xpY2sgb24gdGhlIGhpZGUgdXNlciBpbnB1dCBjb250YWluZXIgYnV0dG9uXHJcbiAgICAgKi9cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlVXNlcklucHV0Q29udGFpbmVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVCb3RJbnRlZ3JhdGlvbkNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHRpbmcgdGhlIHRpdGxlIG9mIHRoZSBhc2sgbWUgY29udGFpbmVyLCB0aGUgdXNlciBpbnB1dCBjb250YWluZXIgYW5kIHRoZSBwbGFjZWhvbGRlciBvZiB0aGUgdXNlciBpbnB1dFxyXG4gICAgICogVGhlIGNob3NlbiBsYW5ndWFnZSAob3IgRW5nbGlzaCBhcyBmYWxsYmFjaykgd2lsbCBiZSB1c2VkIHRvIGZpbHRlciBvdXQgdGhlIG1hdGNoaW5nIHRleHRjb250ZW50cyBmcm9tIHRoZSBodG1sVGV4dENvbnRlbnRDb2xsZWN0aW9uIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBzZXRIdG1sVGV4dENvbnRlbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLnNldEh0bWxUZXh0Q29udGVudHMoKTtcclxuICAgICAgICB0aGlzLnNldEFza01lQ29udGFpbmVyVGl0bGUoKTtcclxuICAgIH1cclxuICAgIHNldEFza01lQ29udGFpbmVyVGl0bGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYm90SW50ZWdyYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29udGFpbmVyLXNob3dcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5hc2tNZUNvbnRhaW5lclRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5odG1sVGV4dENvbnRlbnRDb2xsZWN0aW9uW3RoaXMubGFuZ3VhZ2VDb2RlXS5hc2tNZUNvbnRhaW5lclRpdGxlWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hc2tNZUNvbnRhaW5lclRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5odG1sVGV4dENvbnRlbnRDb2xsZWN0aW9uW3RoaXMubGFuZ3VhZ2VDb2RlXS5hc2tNZUNvbnRhaW5lclRpdGxlWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFVuY29tbWVudCBpZiB5b3Ugd25hdCB0byBpbXBsZW1lbnQgYSBzZW5kIGJ1dHRvblxyXG4gICAgLy8gcHJpdmF0ZSBvblNlbmRCdXR0b25DbGljayA9ICgpOiB2b2lkID0+IHtcclxuICAgIC8vIFx0Y29uc3QgdXNlcklucHV0VmFsdWUgPSB0aGlzLnVzZXJJbnB1dC52YWx1ZTtcclxuICAgIC8vIFx0aWYgKHVzZXJJbnB1dFZhbHVlICE9ICcnICYmIHVzZXJJbnB1dFZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gXHRcdHdpbmRvdy5jaGFyYWN0ZXIuc2VuZCh1c2VySW5wdXRWYWx1ZSk7XHJcbiAgICAvLyBcdH1cclxuICAgIC8vIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlc2l6aW5nIHRoZSBjaGFyYWN0ZXIgaWYgdGhlIGJvdEludGVncmF0aW9uQ29udGFpbmVyIGRvZXMgbm90IGhhdmUgdGhlIFwiY29udGFpbmVyLXNob3dcIiBjbGFzcy5cclxuICAgICAqIFRoaXMgcHJldmVudHMgdGhlIHdlaXJkIHRyYW5zaXRpb24gd2hlbiB0aGUgY2hhcmFjdGVyIGdldHMgcmVzaXplZCBhbmQgcmVsb2NhdGVkLiBBbmQgaXQganVzdCBsb29rcyBjb29sIGlmIGhlIGZhZGVzIG91dC0gYW5kIGluIDopXHJcbiAgICAgKi9cclxuICAgIHJlc2l6ZUJvdElmVXNlcklucHV0SGlkZGVuKCkge1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmJvdEludGVncmF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY29udGFpbmVyLXNob3cnKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLnJlc2l6ZSg0NTAsIDY4NSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLnJlc2l6ZSgyMDAsIDM1NSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICB9LCA0MDApO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgb25Jbml0aWFsaXNlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoJ2lkbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLmFkanVzdENhbWVyYSh0aGlzLmNhbWVyYUFkanVzdG1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzaXplQm90SWZVc2VySW5wdXRIaWRkZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvdy5jaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uUXVlc3Rpb25Bc2tlZDogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBubyBhbnN3ZXIgd2FzIGFza2VkICh2aWEgbWljcm9waG9uZSkgYW4gZW1wdHkgb2JqZWN0IHdpbGwgYmUgcmVjZWl2ZWQgd2l0aCBhYnNvbHV0ZWx5IG5vIGtleXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYXJhZ3JhcGhzRnJvbUFuc3dlcih7IHRleHQ6ICdLZWluZSBGcmFnZSBnZXN0ZWxsdC4uLicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoJ2lkbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXJJbnB1dENvbnRlbnQoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkFuc3dlcmVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZSgnaWRsZScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQW5zd2VyOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoJ2Fuc3dlcmluZycsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJvdFN0YXRlKCdlcnJvcicsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkxpc3RlbmluZzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoJ2xpc3RlbmluZycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwgdGhpcy5jaGFyYWN0ZXJDb250YWluZXIsIHRoaXMuYm90U2VjcmV0LCB0aGlzLmxhbmd1YWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGlkPVxcXCJsYWlsby13aWRnZXQtY29udGFpbmVyXFxcIiBjbGFzcz1cXFwiYmVmb3JlLWluaXRcXFwiPlxcclxcbiAgPGRpdiBpZD1cXFwiYXNrLW1lLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImxhaWxvLXdpZGdldC10b2dnbGUtYnV0dG9uXFxcIiBjbGFzcz1cXFwiYm90LWNvbnRyb2wtZWxlbWVudFxcXCI+PGkgaWQ9XFxcImhpZGUtaWNvblxcXCIgY2xhc3M9XFxcImZhcyBmYS1hcnJvdy1sZWZ0XFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgIDxzcGFuIGlkPVxcXCJhc2stbWUtY29udGFpbmVyLXRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgaWQ9XFxcImxhaWxvLXVzZXItaW5wdXQtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGg1IGlkPVxcXCJsYWlsby11c2VyLWlucHV0LWNvbnRhaW5lci10aXRsZVxcXCI+PC9oNT5cXHJcXG4gICAgPGRpdiBpZD1cXFwibGFpbG8tY2hhcmFjdGVyLWNhbnZhc1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImxhaWxvLWNvbnRyb2wtZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwibGFpbG8tdXNlci1pbnB1dFxcXCIgLz5cXHJcXG4gICAgICA8ZGl2IGlkPVxcXCJsb2FkaW5nXFxcIj5cXHJcXG4gICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGJ1dHRvbiBpZD1cXFwibGFpbG8tbWljcm9waG9uZS1idXR0b25cXFwiIGNsYXNzPVxcXCJib3QtY29udHJvbC1lbGVtZW50XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtbWljcm9waG9uZVxcXCIgaWQ9XFxcImxhaWxvLW1pY3JvcGhvbmUtaWNvblxcXCI+PC9pPlxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBpZD1cXFwibGFpbG8tYW5zd2VyLXRleHQtZmllbGRcXFwiPjwvZGl2PlxcclxcbiAgICA8cCBpZD1cXFwibGFpbG8tZXhhbXBsZS1xdWVzdGlvbnNcXFwiIGRhdGEtdHlwZWl0LWlkPVxcXCJleGFtcGxlLXF1ZXN0aW9uc1xcXCI+PC9wPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBpZD1cXFwibGFpbG8td2lkZ2V0LWNvbnRhaW5lclxcXCIgY2xhc3M9XFxcImJlZm9yZS1pbml0XFxcIj5cXHJcXG4gIDxkaXYgaWQ9XFxcImxhaWxvLWNoYXJhY3Rlci1jYW52YXNcXFwiPjwvZGl2PlxcclxcbiAgPGRpdiBpZD1cXFwibGFpbG8tdXNlci1pbnB1dC1jb250YWluZXJcXFwiPlxcclxcbiAgICA8aDUgaWQ9XFxcImxhaWxvLXVzZXItaW5wdXQtY29udGFpbmVyLXRpdGxlXFxcIj48L2g1PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsYWlsby1jb250cm9sLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImxhaWxvLXVzZXItaW5wdXRcXFwiIC8+XFxyXFxuICAgICAgPGRpdiBpZD1cXFwibG9hZGluZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxidXR0b24gaWQ9XFxcImxhaWxvLXRleHQtaW5wdXQtYnV0dG9uXFxcIiBjbGFzcz1cXFwiYm90LWNvbnRyb2wtZWxlbWVudFxcXCI+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLXBlblxcXCIgaWQ9XFxcImxhaWxvLXRleHQtaW5wdXQtaWNvblxcXCI+PC9pPlxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDxidXR0b24gaWQ9XFxcImxhaWxvLW1pY3JvcGhvbmUtYnV0dG9uXFxcIiBjbGFzcz1cXFwiYm90LWNvbnRyb2wtZWxlbWVudFxcXCI+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLW1pY3JvcGhvbmVcXFwiIGlkPVxcXCJsYWlsby1taWNyb3Bob25lLWljb25cXFwiPjwvaT5cXHJcXG4gICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxwIGlkPVxcXCJsYWlsby1leGFtcGxlLXF1ZXN0aW9uc1xcXCIgZGF0YS10eXBlaXQtaWQ9XFxcImV4YW1wbGUtcXVlc3Rpb25zXFxcIj48L3A+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImxhaWxvLWFuc3dlci10ZXh0LWZpZWxkXFxcIj48L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgaWQ9XFxcImxhaWxvLXdpZGdldC1jb250YWluZXJcXFwiIGNsYXNzPVxcXCJiZWZvcmUtaW5pdFxcXCI+XFxyXFxuICA8ZGl2IGlkPVxcXCJhc2stbWUtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibGFpbG8td2lkZ2V0LXRvZ2dsZS1idXR0b25cXFwiIGNsYXNzPVxcXCJib3QtY29udHJvbC1lbGVtZW50XFxcIj48aSBpZD1cXFwiaGlkZS1pY29uXFxcIiBjbGFzcz1cXFwiZmFzIGZhLWFycm93LWxlZnRcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgPHNwYW4gaWQ9XFxcImFzay1tZS1jb250YWluZXItdGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBpZD1cXFwibGFpbG8tY2hhcmFjdGVyLWNhbnZhc1xcXCI+PC9kaXY+XFxyXFxuICA8ZGl2IGlkPVxcXCJsYWlsby11c2VyLWlucHV0LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxoNSBpZD1cXFwibGFpbG8tdXNlci1pbnB1dC1jb250YWluZXItdGl0bGVcXFwiPjwvaDU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImxhaWxvLWNvbnRyb2wtZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwibGFpbG8tdXNlci1pbnB1dFxcXCIgLz5cXHJcXG4gICAgICA8YnV0dG9uIGlkPVxcXCJsYWlsby1taWNyb3Bob25lLWJ1dHRvblxcXCIgY2xhc3M9XFxcImJvdC1jb250cm9sLWVsZW1lbnRcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1taWNyb3Bob25lXFxcIiBpZD1cXFwibGFpbG8tbWljcm9waG9uZS1pY29uXFxcIj48L2k+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiaGlkZGVuXFxcIj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gICAgPHAgaWQ9XFxcImxhaWxvLWV4YW1wbGUtcXVlc3Rpb25zXFxcIiBkYXRhLXR5cGVpdC1pZD1cXFwiZXhhbXBsZS1xdWVzdGlvbnNcXFwiPjwvcD5cXHJcXG4gICAgPGRpdiBpZD1cXFwibGFpbG8tYW5zd2VyLXRleHQtZmllbGRcXFwiPjwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7Il0sInNvdXJjZVJvb3QiOiIifQ==