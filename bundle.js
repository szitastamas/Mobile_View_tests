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
        case "tinyWidget":
            try {
                const lailo = new _models_LailoTinyWidget__WEBPACK_IMPORTED_MODULE_1__["LailoTinyWidget"](botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray);
                return lailo.initialize();
            }
            catch (error) {
                throw error;
            }
        case "halfScreenWidget":
            try {
                const lailo = new _models_LailoHalfScreenWidget__WEBPACK_IMPORTED_MODULE_2__["default"](botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray);
                return lailo.initialize();
            }
            catch (error) {
                throw error;
            }
        case "standAlone":
            try {
                cameraAdjustment = "longshot";
                const lailo = new _models_LailoStandAlone__WEBPACK_IMPORTED_MODULE_0__["LailoStandAlone"](botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray);
                return lailo.initialize();
            }
            catch (error) {
                throw error;
            }
        default:
            throw new Error("Lailo could not be initialized. Please double check your initialization object.");
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
         * Filters out the CDN script tag from the DOM and replaces the JavaScript via the matching CSS.
         * This method makes it possible to migrate CDNs without having to touch this code.
         * @param widgetType type of the widget as string
         */
        this.createCSSSource = (widgetType) => {
            var _a;
            const cdnScriptSource = (_a = Array.from(document.querySelectorAll("script")).find((scriptElement) => scriptElement.src.includes("lailo/smart-character"))) === null || _a === void 0 ? void 0 : _a.src;
            if (!cdnScriptSource)
                return;
            const urlFragments = cdnScriptSource.split("/");
            urlFragments[urlFragments.length - 1] = `${widgetType}.css`;
            return urlFragments.join("/");
        };
        /**
         * Dynamically displays either the send button (if there is a user input) or the microphone button
         */
        this.changeInputButtonOnUserInput = () => {
            if (this.userInput.value.length > 0) {
                this.micBtn.style.zIndex = "-1";
                this.sendTextButton.style.zIndex = "5000";
            }
            else {
                this.micBtn.style.zIndex = "5000";
                this.sendTextButton.style.zIndex = "-1";
            }
        };
        this.head = document.querySelector("head");
        // Looking for the key in html text content collection to use it for filtering the error messages
        // and setting the textcontent of some HTML Elements later on
        // English will be used as fallback
        this.languageCode =
            Object.keys(this.htmlTextContentCollection).find((key) => key === this.language) ||
                "en-US";
        this.injectDependencies();
        // These elements are the bare minimum for the simplest widget (skeleton) to function.
        // They will be injected in the overriden method in LailoSkeleton
        this.micBtn = document.getElementById("lailo-microphone-button");
        this.micIcon = document.getElementById("lailo-microphone-icon");
        this.sendTextButton = document.getElementById("lailo-send-text-button");
        this.botIntegrationContainer = document.getElementById("lailo-widget-container");
        this.characterContainer = document.getElementById("lailo-character-canvas");
        this.loader = document.getElementById("loading");
        this.userInput = document.getElementById("lailo-user-input");
        this.hideUserInputContainerBtn = document.getElementById("lailo-widget-toggle-button");
        this.userInputContainer = document.getElementById("lailo-user-input-container");
        this.userInputContainerTitle = document.getElementById("lailo-user-input-container-title");
        this.botOutputTextField = document.getElementById("lailo-answer-text-field");
        this.typeItContainer = document.getElementById("lailo-example-questions");
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
        if (lailoStyleSheet) {
            lailoStyleSheet.remove();
        }
        const cssSource = this.createCSSSource(widgetType);
        const firstLinkTagInHead = document.querySelector("head link");
        // TODO: Change HREF to CDN's url in production
        const css = document.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("type", "text/css");
        css.setAttribute("id", `lailo-stylesheet`);
        css.setAttribute("href", `./${widgetType}.css`);
        // css.setAttribute("href", cssSource!);
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
            breakLines: false,
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
     * Don't forget to call super().addEventListeners though =)
     */
    addEventListeners() {
        this.micBtn.addEventListener("click", () => this.onListenButtonClick());
        this.sendTextButton.addEventListener("click", () => this.onSendButtonClick());
        this.userInput.addEventListener("input", () => this.changeInputButtonOnUserInput());
        this.userInput.addEventListener("keypress", (e) => this.onEnterPressed(e));
        this.hideUserInputContainerBtn.addEventListener("click", () => this.toggleBotIntegrationContainer());
    }
    /**
     * Toggling the "container-show" class on the botIntegrationContainer.
     */
    toggleBotIntegrationContainer() {
        this.botIntegrationContainer.classList.toggle("container-show");
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
     * Sets the user input's value to nothing (resetting the field)
     */
    clearUserInputField() {
        this.userInput.value = "";
    }
    /**Sets the value of the user input. It will be important if the user used the microphone to communicate with the character to show what the character understood.
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
     * Calls the onSendButtonClick method.
     * @param e The event object
     */
    onEnterPressed(e) {
        if (e.which == 13) {
            this.onSendButtonClick();
        }
    }
    /**
     * Checks the validity of the inserted text and calls the character's send method with the user's input
     */
    onSendButtonClick() {
        const userInputValue = this.userInput.value;
        if (userInputValue != "" && userInputValue.replace(/\s/g, "").length > 0) {
            window.character.send(userInputValue);
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
     * Calls the character's "listen" function.
     * Hides the microphone icon and displays a loading spinner until the listening state is initialized.
     */
    onListenButtonClick() {
        this.micIcon.classList.add("hidden");
        this.loader.classList.remove("hidden");
        window.character.listen();
    }
    /**
     * The character's response will be evaluated. In case of an IErrorBotResponse the "handleBotOutputIfError" method will be called and this method will be terminated.
     * Otherwise the ISuccessfulBotReponse object will be evaluated and the text will be displayed in the bot answer container.
     * If the Reponse object contains an "actions" array of objects, that array will be filtered out for a 'urlRedirect' type to use the url and caption to create a redirecting anchor tag
     * @param data IBotResponse object which can be an ISuccessfulBotResponse or an IErrorBotResponse
     * @param responseStatus "success" | "error"
     */
    renderParagraphsFromAnswer(data, responseStatus = "success") {
        this.botOutputTextField.style.color = "grey";
        this.botOutputTextField.innerHTML = "";
        // Handling errors
        if (responseStatus === "error") {
            this.handleBotOutputIfError(data);
            return;
        }
        // Handling successful responses
        const { text, actions } = data;
        let paragraphs = [];
        paragraphs.push(this.createParagraph(text));
        // Handling the actions if there are any
        if (actions) {
            const urlActions = actions.filter((action) => action.type === "urlRedirect");
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
        this.botOutputTextField.style.color = "red";
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
    /**
     * Resizes the character depending on the bot intgration container's state (shown/hidden)
     * Resizing will defer depending on the device's width
     */
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
        this.toggleInputPanelIcons = {
            "closed": "fas fa-pen",
            "open": "fas fa-times"
        };
        /**
         * Handles the character's size and camera adjustment depending on the input panel state.
         * Also dynamically changes the icon's of the hide-user-input-container-button
         */
        this.handleUserInputPanelStateChanges = () => {
            if (window.innerWidth < 869) {
                this.changeAvatarViewOnInputPanelOpen();
            }
            if (this.botIntegrationContainer.classList.contains("container-show")) {
                this.hideUserInputContainerBtn.querySelector("#lailo-toggle-input-panel-icon").className = this.toggleInputPanelIcons["open"];
            }
            else {
                this.hideUserInputContainerBtn.querySelector("#lailo-toggle-input-panel-icon").className = this.toggleInputPanelIcons["closed"];
            }
        };
        /**
         * Resizes the avatar depending on the user input panel's state.
         * If closed, the character is in longshot mode and fills the screen
         * If open, the character is in medium mode and will be shrunk down
         */
        this.changeAvatarViewOnInputPanelOpen = () => {
            this.characterContainer.classList.add("hide");
            const { width, height } = this.defaultSizeParams;
            if (this.botIntegrationContainer.classList.contains("container-show")) {
                this.cameraAdjustment = "american";
            }
            else {
                this.cameraAdjustment = "longshot";
            }
            window.character.adjustCamera(this.cameraAdjustment);
            window.character.resize(width, height);
            setTimeout(() => {
                this.characterContainer.classList.remove("hide");
            }, 450);
        };
        // Keep it an arrow function (instance method) to keep the class's context for "this"
        // Adds or removes the "show" class on the userInput
        this.toggleUserInput = () => {
            this.userInputContainer.classList.toggle("show");
            // Uncomment if you want autofocus on the user input if the panel is open. However, it does not feel good from UX perspective on mobiles and tablets.
            // if(this.userInputContainer.classList.contains("show")){
            //   setTimeout(() => this.userInput.focus(),400)
            // }
        };
        /**
         * Sets the canvas control group's user-question field to the asked question / statement
         * @param text The user input from talking or sending a message
         */
        this.setCanvasUserQuestionTextContent = (text) => {
            this.canvasUserQuestion.textContent = text;
        };
        /**
         * Clears the user question field in the canvas control group
         */
        this.clearUserQuestionField = () => {
            this.canvasUserQuestion.textContent = "";
        };
        // Setting the default size depending on the device's width
        this.defaultSizeParams = {
            height: window.innerWidth > 800 ? 750 : 300,
            width: window.innerWidth > 800 ? 900 : 550
        };
        // Base template and dependencies will be injected by running the base class's constructor.
        this.canvasMicBtn = document.getElementById("lailo-canvas-microphone-button");
        this.canvasUserQuestion = document.getElementById("lailo-canvas-user-question");
        this.canvasLoading = document.getElementById("lailo-canvas-loading");
        // Apply state is a function that handles the changes of different bot states by dynamically adding and removing css classes.
        this.botStateCollection = {
            beforeBotInitialized: {
                applyState: () => {
                    this.micBtn.classList.add('hidden');
                    this.canvasMicBtn.classList.add('hidden');
                    this.loader.classList.remove('hidden');
                    this.canvasLoading.classList.remove("hidden");
                },
            },
            idle: {
                applyState: () => {
                    this.botIntegrationContainer.classList.remove('before-init');
                    this.loader.classList.add('hidden');
                    this.canvasLoading.classList.add("hidden");
                    this.micBtn.classList.remove('hidden');
                    this.micBtn.classList.remove('active');
                    this.micBtn.classList.remove('listening');
                    this.canvasMicBtn.classList.remove('hidden');
                    this.canvasMicBtn.classList.remove('active');
                    this.canvasMicBtn.classList.remove('listening');
                    this.loader.classList.add("hidden");
                    this.canvasLoading.classList.add('hidden');
                    this.micIcon.classList.remove("hidden");
                    this.userInput.classList.remove('deactivated');
                    this.userInput.placeholder = this.htmlTextContentCollection[this.languageCode].userInputPlaceholder[0];
                    this.clearUserQuestionField();
                    this.clearUserInputField();
                    this.changeInputButtonOnUserInput();
                },
            },
            listening: {
                applyState: () => {
                    this.loader.classList.add("hidden");
                    this.canvasLoading.classList.add("hidden");
                    this.micIcon.classList.remove("hidden");
                    this.micBtn.classList.add('listening');
                    this.canvasMicBtn.classList.add('listening');
                    this.userInput.placeholder = this.htmlTextContentCollection[this.languageCode].userInputPlaceholder[1];
                    this.canvasUserQuestion.textContent = this.htmlTextContentCollection[this.languageCode].userInputPlaceholder[1];
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
        this.canvasMicBtn.addEventListener("click", () => this.onListenButtonClicked());
        this.hideUserInputContainerBtn.addEventListener("click", () => this.handleUserInputPanelStateChanges());
    }
    /**
     * Handles the canvas microphone button and also calls the base classes onListenButtonClick instance method
     */
    onListenButtonClicked() {
        this.canvasLoading.classList.remove('hidden');
        this.canvasMicBtn.classList.add('hidden');
        this.onListenButtonClick();
    }
    initialize() {
        return new Promise((resolve, reject) => {
            window.character.init({
                onInitialised: () => {
                    this.setBotState("idle");
                    const { height, width } = this.defaultSizeParams;
                    window.character.resize(width, height);
                    resolve(window.character);
                },
                onQuestionAsked: (data) => {
                    // If no answer was asked (via microphone) an empty object will be received with absolutely no keys
                    if (Object.keys(data).length == 0) {
                        this.renderParagraphsFromAnswer({ text: '...' });
                        this.setCanvasUserQuestionTextContent("...");
                        this.setBotState('idle');
                        return;
                    }
                    this.setUserInputContent(data.toString());
                    this.setCanvasUserQuestionTextContent(data.toString());
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
        // Base template and dependencies will be injected by running the base class's constructor.
        // The overriden injectHtmlTemplate() takes care of the html structure that is needed by this particular widget.
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
                    this.changeInputButtonOnUserInput();
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
     * Setting the title of the ask me container, the user input container and the placeholder of the user input
     * The chosen language (or English as fallback) will be used to filter out the matching textcontents from the htmlTextContentCollection object
     */
    setHtmlTextContents() {
        super.setHtmlTextContents();
        this.setAskMeContainerTitle();
    }
    /**
     * Dynamically changes the ask me container's title depending on the bot integration container's state (shown/hidden)
     */
    setAskMeContainerTitle() {
        if (this.botIntegrationContainer.classList.contains("container-show")) {
            this.askMeContainerTitle.textContent = this.htmlTextContentCollection[this.languageCode].askMeContainerTitle[1];
        }
        else {
            this.askMeContainerTitle.textContent = this.htmlTextContentCollection[this.languageCode].askMeContainerTitle[0];
        }
    }
    /**
     * Calls the base classes prototype method. Converted into an instance method in the derived class to ensure the right context of "this"
     */
    toggleBotIntegrationContainer() {
        super.toggleBotIntegrationContainer();
        this.setAskMeContainerTitle();
        this.resizeBotIfUserInputHidden();
    }
    ;
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
var code = "<div id=\"lailo-widget-container\" class=\"before-init\">\r\n  <div id=\"ask-me-container\">\r\n    <button id=\"lailo-widget-toggle-button\" class=\"bot-control-element\"><i id=\"hide-icon\" class=\"fas fa-arrow-left\"></i></button>\r\n    <span id=\"ask-me-container-title\"></span>\r\n  </div>\r\n  <div id=\"lailo-user-input-container\">\r\n    <h5 id=\"lailo-user-input-container-title\"></h5>\r\n    <div id=\"lailo-character-canvas\"></div>\r\n    <div class=\"lailo-control-group\">\r\n      <input type=\"text\" id=\"lailo-user-input\" />\r\n      <button id=\"lailo-microphone-button\" class=\"bot-control-element\">\r\n        <i class=\"fas fa-microphone\" id=\"lailo-microphone-icon\"></i>\r\n        <div id=\"loading\">\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n        </div>\r\n      </button>\r\n      <button id=\"lailo-send-text-button\" class=\"bot-control-element\">\r\n        <i class=\"far fa-paper-plane\" id=\"lailo-send-text-icon\"></i>\r\n      </button>\r\n    </div>\r\n    <div id=\"lailo-answer-text-field\"></div>\r\n    <p id=\"lailo-example-questions\" data-typeit-id=\"example-questions\"></p>\r\n  </div>\r\n</div>";
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
var code = "<div id=\"lailo-widget-container\" class=\"before-init\">\r\n  <button id=\"lailo-widget-toggle-button\" class=\"bot-control-element\">\r\n    <i class=\"fas fa-pen\" id=\"lailo-toggle-input-panel-icon\"></i>\r\n  </button>\r\n  <div id=\"lailo-character-canvas\">\r\n    <div id=\"lailo-canvas-control-group\">\r\n      <div id=\"lailo-canvas-loading\" class=\"hidden\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n      </div>\r\n      <div id=\"lailo-canvas-user-question\">What can you do for me, hallo hallo hallo hallo hallo?</div>\r\n      <button id=\"lailo-canvas-microphone-button\" class=\"bot-control-element\">\r\n        <i class=\"fas fa-microphone\" id=\"lailo-canvas-microphone-icon\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div id=\"lailo-user-input-container\">\r\n    <h5 id=\"lailo-user-input-container-title\"></h5>\r\n    <div class=\"lailo-control-group\">\r\n      <input type=\"text\" id=\"lailo-user-input\" />\r\n      <button id=\"lailo-microphone-button\" class=\"bot-control-element\">\r\n        <i class=\"fas fa-microphone\" id=\"lailo-microphone-icon\"></i>\r\n        <div id=\"loading\">\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n        </div>\r\n      </button>\r\n      <button id=\"lailo-send-text-button\" class=\"bot-control-element\">\r\n        <i class=\"far fa-paper-plane\" id=\"lailo-send-text-icon\"></i>\r\n      </button>\r\n    </div>\r\n    <p id=\"lailo-example-questions\" data-typeit-id=\"example-questions\"></p>\r\n    <div id=\"lailo-answer-text-field\"></div>\r\n  </div>\r\n</div>\r\n";
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
var code = "<div id=\"lailo-widget-container\" class=\"before-init\">\r\n  <div id=\"ask-me-container\">\r\n    <button id=\"lailo-widget-toggle-button\" class=\"bot-control-element\"><i id=\"hide-icon\" class=\"fas fa-arrow-left\"></i></button>\r\n    <span id=\"ask-me-container-title\"></span>\r\n  </div>\r\n  <div id=\"lailo-character-canvas\"></div>\r\n  <div id=\"lailo-user-input-container\">\r\n    <h5 id=\"lailo-user-input-container-title\"></h5>\r\n    <div class=\"lailo-control-group\">\r\n      <input type=\"text\" id=\"lailo-user-input\" />\r\n      <button id=\"lailo-microphone-button\" class=\"bot-control-element\">\r\n        <i class=\"fas fa-microphone\" id=\"lailo-microphone-icon\"></i>\r\n        <div id=\"loading\" class=\"hidden\">\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n        </div>\r\n      </button>\r\n      <button id=\"lailo-send-text-button\" class=\"bot-control-element\">\r\n        <i class=\"far fa-paper-plane\" id=\"lailo-send-text-icon\"></i>\r\n      </button>\r\n    </div>\r\n    <p id=\"lailo-example-questions\" data-typeit-id=\"example-questions\"></p>\r\n    <div id=\"lailo-answer-text-field\"></div>\r\n  </div>\r\n</div>";
// Exports
module.exports = code;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MYWlsby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MYWlsby8uL25vZGVfbW9kdWxlcy90eXBlaXQvZGlzdC90eXBlaXQuZXMubWluLmpzIiwid2VicGFjazovL0xhaWxvLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9MYWlsby8uL3NyYy9tb2RlbHMvTGFpbG9CYXNlLnRzIiwid2VicGFjazovL0xhaWxvLy4vc3JjL21vZGVscy9MYWlsb0hhbGZTY3JlZW5XaWRnZXQudHMiLCJ3ZWJwYWNrOi8vTGFpbG8vLi9zcmMvbW9kZWxzL0xhaWxvU3RhbmRBbG9uZS50cyIsIndlYnBhY2s6Ly9MYWlsby8uL3NyYy9tb2RlbHMvTGFpbG9UaW55V2lkZ2V0LnRzIiwid2VicGFjazovL0xhaWxvLy4vc3JjL3RlbXBsYXRlcy9oYWxmU2NyZWVuV2lkZ2V0VGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly9MYWlsby8uL3NyYy90ZW1wbGF0ZXMvc3RhbmRBbG9uZVRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vTGFpbG8vLi9zcmMvdGVtcGxhdGVzL3RpbnlXaWRnZXRUZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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QVc7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFdBQVc7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUFNLEtBQUssd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BKQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3RcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiLyoqXG4gICogVHlwZUl0IC0gVGhlIG1vc3QgdmVyc2F0aWxlIGFuaW1hdGVkIHR5cGluZyB1dGlsaXR5IG9uIHRoZSBwbGFuZXQuXG4gICogQXV0aG9yOiBBbGV4IE1hY0FydGh1ciA8YWxleEBtYWNhcnRodXIubWU+IChodHRwczovL21hY2FydGh1ci5tZSlcbiAgKiBWZXJzaW9uOiB2Ny4wLjRcbiAgKiBMaWNlbnNlOiBHUEwtMi4wXG4gICogVVJMOiBodHRwczovL3R5cGVpdGpzLmNvbVxuICAqL1xudmFyIGU9e3N0cmluZ3M6W10sc3BlZWQ6MTAwLGN1cnNvcjohMCxjdXJzb3JDaGFyOlwifFwiLGN1cnNvclNwZWVkOjFlMyxkZWxldGVTcGVlZDpudWxsLGxpZmVMaWtlOiEwLGJyZWFrTGluZXM6ITAsc3RhcnREZWxheToyNTAsc3RhcnREZWxldGU6ITEsbmV4dFN0cmluZ0RlbGF5Ojc1MCxsb29wOiExLGxvb3BEZWxheTo3NTAsaHRtbDohMCx3YWl0VW50aWxWaXNpYmxlOiExLGJlZm9yZVN0cmluZzooKT0+e30sYWZ0ZXJTdHJpbmc6KCk9Pnt9LGJlZm9yZVN0ZXA6KCk9Pnt9LGFmdGVyU3RlcDooKT0+e30sYWZ0ZXJDb21wbGV0ZTooKT0+e319LHQ9ZT0+ZS5tYXAoZT0+KHZvaWQgMD09PWVbMV0mJmUucHVzaChudWxsKSx2b2lkIDA9PT1lWzJdJiZlLnB1c2goe30pLGUpKSxuPShlLHQpPT5PYmplY3QuYXNzaWduKHt9LGUsdCkscj1lPT5BcnJheS5pc0FycmF5KGUpLGk9KGUsdCk9PihlWzJdPW4oZVsyXSx0KXx8dCxlKSxvPShlLHQpPT5yKGVbMF0pP2UubWFwKGU9PmkoZSx0KSk6aShlLHQpLGE9KGUsdCxuLGkpPT57aT1pfHwhMSxuPW58fHt9O3ZhciBhPSFyKGUpLHU9ZS5sZW5ndGg7cmV0dXJuKGU9YT9uZXcgQXJyYXkoZSkuZmlsbCgwKTplKS5tYXAoKGUscik9PntpZihhKXJldHVybiB0O3ZhciBjPVt0LGUsbl07cmV0dXJuIGkmJigwPT09ciYmKGM9byhjLHtpc0ZpcnN0OiEwfSkpLHIrMT09PXUmJihjPW8oYyx7aXNMYXN0OiEwfSkpKSxjfSl9O2Z1bmN0aW9uIHUoZSl7dGhpcy5pbnNlcnQ9ZnVuY3Rpb24oZSx0KXtpLnNwbGljZShlLDAsdCl9LHRoaXMuYWRkPWZ1bmN0aW9uKGUsdSxjKXtyZXR1cm4gZT1yKGUpP2U6W2UsbnVsbF0sYz1jfHwhMSx1PXV8fDEscihlWzBdKXx8KGU9YSh1LGUpKSxlPXQoZSkubWFwKGU9PihlWzJdPW4oZVsyXSx7aWQ6b30pLG8rKyxlKSksaT1jP2UuY29uY2F0KGkpOmkuY29uY2F0KGUpLHRoaXN9LHRoaXMuc2V0PWZ1bmN0aW9uKGUsdCl7aVtlXT10fSx0aGlzLnJlc2V0PWZ1bmN0aW9uKCl7aT1pLm1hcChlPT4oZVsyXS5leGVjdXRlZD0hMSxlKSl9LHRoaXMuZ2V0SXRlbXM9ZnVuY3Rpb24oKXtyZXR1cm4oaT10KGkpKS5maWx0ZXIoZT0+IWVbMl0uZXhlY3V0ZWQpfSx0aGlzLnNldE1ldGE9ZnVuY3Rpb24oZSx0KXt2YXIgcj1pLmZpbmRJbmRleCh0PT50WzJdLmlkPT09ZSk7aVtyXVsyXT1uKGlbcl1bMl0sdCl9O3ZhciBpPVtdLG89MDt0aGlzLmFkZChlKX12YXIgYz1lPT5BcnJheS5mcm9tKGUpLHM9ZT0+e3ZhciB0PVtdO3JldHVybiB0LmNvbmNhdC5hcHBseSh0LGUpfSxsPWU9Pnt2YXIgdD1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIik7cmV0dXJuIHQuYm9keS5pbm5lckhUTUw9ZSx0LmJvZHl9LGY9KGUsdCxuKT0+e3Q9dHx8bnVsbCxuPXZvaWQgMCE9PW4mJm47dmFyIHI9YyhlLmNoaWxkTm9kZXMpLm1hcChlPT57cmV0dXJuIDM9PT0odD1lKS5ub2RlVHlwZXx8XCJCUlwiPT09dC50YWdOYW1lP2U6ZihlKTt2YXIgdH0pO3JldHVybiByPXMociksdCYmKHI9ci5maWx0ZXIoZT0+IXQuY29udGFpbnMoZSkpKSxuP3IucmV2ZXJzZSgpOnJ9LGQ9ZT0+XCJCT0RZXCI9PT1lLnRhZ05hbWUsaD0oZSx0KT0+e3Q9dHx8bnVsbDt2YXIgbj1lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7cmV0dXJue25vZGU6dCxpc1RvcExldmVsVGV4dDooIXR8fGQodC5wYXJlbnROb2RlKSkmJiFuLGlzSFRNTEVsZW1lbnQ6bixjb250ZW50OmV9fTtmdW5jdGlvbiB2KGUpe3ZhciB0LG49bChlKTtyZXR1cm4gdD1mKG4pLm1hcChlPT5lLm5vZGVWYWx1ZT9jKGUubm9kZVZhbHVlKS5tYXAodD0+aCh0LGUpKTpoKGUpKSxzKHQpfWZ1bmN0aW9uIHAoZSx0KXtyZXR1cm4odD12b2lkIDA9PT10fHx0KT92KGUpOmMoZSkubWFwKGU9PmgoZSkpfXZhciBtPWU9PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSkseT0oZSx0KT0+e3ZhciBuPW0oXCJzdHlsZVwiKTtuLmlkPXR8fFwiXCIsbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKSksZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChuKX0sZz1lPT4ocihlKXx8KGU9W2UvMixlLzJdKSx7YmVmb3JlOmVbMF0sYWZ0ZXI6ZVsxXSx0b3RhbDplWzBdK2VbMV19KSxiPShlLHQpPT5NYXRoLmFicyhNYXRoLnJhbmRvbSgpKihlK3QtKGUtdCkpKyhlLXQpKTt2YXIgTj1lPT5bXCJ0ZXh0YXJlYVwiLFwiaW5wdXRcIl0uaW5kZXhPZihlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk+LTEsUz0oZSx0KT0+e3ZhciBuPXQucXVlcnlTZWxlY3RvckFsbChcIipcIik7cmV0dXJuW3RdLmNvbmNhdChjKG4pLnJldmVyc2UoKSkuZmluZCh0PT50LmNsb25lTm9kZSgpLm91dGVySFRNTD09PWUub3V0ZXJIVE1MKX0sVD0oZSx0LG4scik9PntuPW58fG51bGw7dmFyIGk9dC5pc0hUTUxFbGVtZW50LG89aT90LmNvbnRlbnQ6ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodC5jb250ZW50KTtpZihOKGUpKWUudmFsdWU9XCJcIi5jb25jYXQoZS52YWx1ZSkuY29uY2F0KHQuY29udGVudCk7ZWxzZXtpZighdC5pc1RvcExldmVsVGV4dCYmIWkpe3ZhciBhPXQubm9kZS5wYXJlbnROb2RlLHU9UyhhLmNsb25lTm9kZSgpLGUpO2lmKCgoZSx0KT0+e2lmKCFlKXJldHVybiExO3ZhciBuPWUubmV4dFNpYmxpbmc7cmV0dXJuIW58fG4uaXNFcXVhbE5vZGUodCl9KSh1LG4pKWU9dTtlbHNlIGlmKChvPWEuY2xvbmVOb2RlKCkpLmlubmVyVGV4dD10LmNvbnRlbnQsIWQoYS5wYXJlbnROb2RlKSl7Zm9yKHZhciBjPWEucGFyZW50Tm9kZSxzPWMuY2xvbmVOb2RlKCksbD1TKHMsZSk7IWwmJiFkKGMpOylzLmlubmVySFRNTD1vLm91dGVySFRNTCxvPXMscz1jLnBhcmVudE5vZGUuY2xvbmVOb2RlKCksYz1jLnBhcmVudE5vZGUsbD1TKHMsZSk7ZT1sfHxlfX12YXIgaD1mKGUsbiwhMClbci0xXSx2PWg/aC5wYXJlbnROb2RlOmU7di5pbnNlcnRCZWZvcmUobyx2LmNvbnRhaW5zKG4pP246bnVsbCl9fSxMPWU9Pnt2YXIgdDtyZXR1cm4gbnVsbD09ZXx8bnVsbD09PSh0PWUucGFyZW50Tm9kZSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQucmVtb3ZlQ2hpbGQoZSl9O3ZhciBNPShlLHQsbik9Pnt2YXIgcixpPVwic3RyaW5nXCI9PXR5cGVvZiBlLG89ITEsYT0tMSplO3JldHVybiBpJiYoYT0ocj1cIkVORFwiPT09ZS50b1VwcGVyQ2FzZSgpKT8tMToxLG89cj90K2E+MDp0K2E8bi5sZW5ndGgpLHtpc1N0cmluZzppLG51bWJlck9mU3RlcHM6YSxjYW5LZWVwTW92aW5nOm99fSx4PWU9Pnt2YXIgdCxuPVtcImZvbnRcIixcImxpbmVIZWlnaHRcIixcImNvbG9yXCJdLHI9bShcIlNQQU5cIiksaT0odD1lLHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCkpO2Zvcih2YXIgbyBpbiBpKW4uaW5kZXhPZihvKT4tMSYmaVtvXSYmKHIuc3R5bGVbb109aVtvXSk7cmV0dXJuIHIuc3R5bGUuY3NzVGV4dH07ZnVuY3Rpb24gdyhlLHQsbil7cmV0dXJuIG4/dD90KGUpOmU6KGUmJmUudGhlbnx8KGU9UHJvbWlzZS5yZXNvbHZlKGUpKSx0P2UudGhlbih0KTplKX1mdW5jdGlvbiBEKGUpe3JldHVybiBmdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxuPTA7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W25dPWFyZ3VtZW50c1tuXTt0cnl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShlLmFwcGx5KHRoaXMsdCkpfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19fWZ1bmN0aW9uIEgoKXt9ZnVuY3Rpb24gRShlLHQpe2lmKCF0KXJldHVybiBlJiZlLnRoZW4/ZS50aGVuKEgpOlByb21pc2UucmVzb2x2ZSgpfWZ1bmN0aW9uIEMoZSx0KXt2YXIgbj1lKCk7cmV0dXJuIG4mJm4udGhlbj9uLnRoZW4odCk6dChuKX1mdW5jdGlvbiBBKGUsdCxuKXtpZighZS5zKXtpZihuIGluc3RhbmNlb2Ygayl7aWYoIW4ucylyZXR1cm4gdm9pZChuLm89QS5iaW5kKG51bGwsZSx0KSk7MSZ0JiYodD1uLnMpLG49bi52fWlmKG4mJm4udGhlbilyZXR1cm4gdm9pZCBuLnRoZW4oQS5iaW5kKG51bGwsZSx0KSxBLmJpbmQobnVsbCxlLDIpKTtlLnM9dCxlLnY9bjt2YXIgcj1lLm87ciYmcihlKX19dmFyIGs9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7fXJldHVybiBlLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKHQsbil7dmFyIHI9bmV3IGUsaT10aGlzLnM7aWYoaSl7dmFyIG89MSZpP3Q6bjtpZihvKXt0cnl7QShyLDEsbyh0aGlzLnYpKX1jYXRjaChlKXtBKHIsMixlKX1yZXR1cm4gcn1yZXR1cm4gdGhpc31yZXR1cm4gdGhpcy5vPWZ1bmN0aW9uKGUpe3RyeXt2YXIgaT1lLnY7MSZlLnM/QShyLDEsdD90KGkpOmkpOm4/QShyLDEsbihpKSk6QShyLDIsaSl9Y2F0Y2goZSl7QShyLDIsZSl9fSxyfSxlfSgpO2Z1bmN0aW9uIE8oZSx0KXtyZXR1cm4gZSYmZS50aGVuP2UudGhlbih0KTp0KGUpfWV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHQsaSl7dmFyIG89dGhpcztpPWl8fHt9O3ZhciBzPShlLHQsbik9PihlPXIoZVswXSk/ZTpbZV0sb2UuYWRkKGUsdCksKGU9Pnt2YXIgdD0oZT1lfHx7fSkuZGVsYXk7dCYmb2UuYWRkKFtWLHRdKX0pKG4pLHRoaXMpLGQ9ZT0+W1tGLGU9XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fSx7Zm9yY2U6ITB9XSxbRixlZSx7Zm9yY2U6ITB9XV0sUz0oKT0+Sj9jKEcudmFsdWUpOmYoRyxhZSwhMCksUD0oZSx0KT0+e3Q9dHx8MTt2YXIgbj1lZS5uZXh0U3RyaW5nRGVsYXk7b2UuaW5zZXJ0KGUsW1Ysbi5iZWZvcmVdKSxvZS5pbnNlcnQoZSt0KzEsW1Ysbi5hZnRlcl0pfSx6PUQoKGZ1bmN0aW9uKCl7aWYoYWUpe3ZhciBlPVwiW2RhdGEtdHlwZWl0LWlkPSdcIi5jb25jYXQoaWUsXCInXSAudGktY3Vyc29yXCIpO3koXCJAa2V5ZnJhbWVzIGJsaW5rLVwiLmNvbmNhdChpZSxcIiB7IDAlIHtvcGFjaXR5OiAwfSA0OSUge29wYWNpdHk6IDB9IDUwJSB7b3BhY2l0eTogMX0gfSBcIikuY29uY2F0KGUsXCIgeyBhbmltYXRpb246IGJsaW5rLVwiKS5jb25jYXQoaWUsXCIgXCIpLmNvbmNhdChlZS5jdXJzb3JTcGVlZC8xZTMsXCJzIGluZmluaXRlOyB9IFwiKS5jb25jYXQoZSxcIi53aXRoLWRlbGF5IHsgYW5pbWF0aW9uLWRlbGF5OiA1MDBtczsgfSBcIikuY29uY2F0KGUsXCIuZGlzYWJsZWQgeyBhbmltYXRpb246IG5vbmU7IH1cIiksaWUpLEcuYXBwZW5kQ2hpbGQoYWUpO3ZhciB0PVwibG9hZGVkXCI9PT1kb2N1bWVudC5mb250cy5zdGF0dXM7cmV0dXJuIHcodHx8ZG9jdW1lbnQuZm9udHMucmVhZHksKGZ1bmN0aW9uKGUpe3ZhciB0PWFlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLzI7YWUuc3R5bGUubWFyZ2luPVwiMCAtXCIuY29uY2F0KHQrMixcInB4IDAgLVwiKS5jb25jYXQodC0yLFwicHhcIil9KSx0KX19KSksQj1lPT57YWUmJihhZS5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZWRcIixlKSxhZS5jbGFzc0xpc3QudG9nZ2xlKFwid2l0aC1kZWxheVwiLCFlKSl9LEk9RCgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gWC5wdXNoKHNldFRpbWVvdXQoZSx0KSksdygpfSkpLFI9RCgoZnVuY3Rpb24oZSl7dmFyIHQ9WjtyZXR1cm4gdyh0JiZqKFopLChmdW5jdGlvbih0KXtyZXR1cm4gb2UucmVzZXQoKSxvZS5zZXQoMCxbVixlLmJlZm9yZV0pLEUoUSghMCkpfSksIXQpfSkpLHE9RCgoZnVuY3Rpb24oKXtfLnN0YXJ0ZWQ9ITA7dmFyIGUsdD1vZS5nZXRJdGVtcygpO3JldHVybiBPKGZ1bmN0aW9uKGUsdCl7dHJ5e3ZhciBuPWUoKX1jYXRjaChlKXtyZXR1cm4gdChlKX1yZXR1cm4gbiYmbi50aGVuP24udGhlbih2b2lkIDAsdCk6bn0oKGZ1bmN0aW9uKCl7cmV0dXJuIE8oZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz0tMTtyZXR1cm4gZnVuY3Rpb24gYSh1KXt0cnl7Zm9yKDsrK288ZS5sZW5ndGgmJighbnx8IW4oKSk7KWlmKCh1PXQobykpJiZ1LnRoZW4pe2lmKCEoKGM9dSlpbnN0YW5jZW9mIGsmJjEmYy5zKSlyZXR1cm4gdm9pZCB1LnRoZW4oYSxpfHwoaT1BLmJpbmQobnVsbCxyPW5ldyBrLDIpKSk7dT11LnZ9cj9BKHIsMSx1KTpyPXV9Y2F0Y2goZSl7QShyfHwocj1uZXcgayksMixlKX12YXIgY30oKSxyfSh0LChmdW5jdGlvbihuKXtpZihfLmZyb3plbnx8Xy5kZXN0cm95ZWQpdGhyb3dcIlwiO3ZhciByLGksYSx1LGM9dFtuXSxzPWNbMl07cmV0dXJuIGU9W2Msb10scy5mcmVlemVDdXJzb3ImJkIoITApLHI9ZWUuc3BlZWQsaT1lZS5kZWxldGVTcGVlZCxhPWVlLmxpZmVMaWtlLHU9KGk9bnVsbCE9PWk/aTpyLzMpLzIsVz1hP1tiKHIsci8yKSxiKGksdSldOltyLGldLEMoKGZ1bmN0aW9uKCl7dmFyIHQ7aWYobnVsbD09cz92b2lkIDA6cy5pc0ZpcnN0KXJldHVybiBFKCh0PWVlKS5iZWZvcmVTdHJpbmcuYXBwbHkodCxlKSl9KSwoZnVuY3Rpb24oKXt2YXIgdDtyZXR1cm4gdygodD1lZSkuYmVmb3JlU3RlcC5hcHBseSh0LGUpLChmdW5jdGlvbigpe3JldHVybiB3KGNbMF0uY2FsbChvLGNbMV0scyksKGZ1bmN0aW9uKCl7cmV0dXJuIEMoKGZ1bmN0aW9uKCl7dmFyIHQsbjtpZihudWxsPT09KHQ9Y1syXSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuaXNMYXN0KXJldHVybiBFKChuPWVlKS5hZnRlclN0cmluZy5hcHBseShuLGUpKX0pLChmdW5jdGlvbigpe3ZhciB0O3JldHVybiB3KCh0PWVlKS5hZnRlclN0ZXAuYXBwbHkodCxlKSwoZnVuY3Rpb24oKXtvZS5zZXRNZXRhKHMuaWQse2V4ZWN1dGVkOiEwfSksQighMSl9KSl9KSl9KSl9KSl9KSl9KSwoZnVuY3Rpb24oKXtyZXR1cm4hMX0pKSwoZnVuY3Rpb24odCl7dmFyIG47cmV0dXJuIF8uY29tcGxldGVkPSEwLHcoKG49ZWUpLmFmdGVyQ29tcGxldGUuYXBwbHkobixlKSwoZnVuY3Rpb24oKXtpZighZWUubG9vcCl0aHJvd1wiXCI7dmFyIGU9ZWUubG9vcERlbGF5O0koKGZ1bmN0aW9uKCl7cmV0dXJuIHcoUihlKSwoZnVuY3Rpb24oKXtxKCl9KSl9KSxlLmFmdGVyKX0pKX0pKX0pLEgpLChmdW5jdGlvbihlKXtyZXR1cm4gb30pKX0pKSxWPWU9Pm5ldyBQcm9taXNlKHQ9PntJKCgpPT50KCksZXx8MCl9KSxqPWU9Pnt2YXIgdD1TKCksbj1NKGUsWix0KTtyZXR1cm4gWis9bi5udW1iZXJPZlN0ZXBzLG5ldyBQcm9taXNlKGU9PntJKEQoKGZ1bmN0aW9uKCl7cmV0dXJuKChlLHQsbixyKT0+e2lmKG4pe3ZhciBpPXIsbz10WyhpPWk+dC5sZW5ndGg/dC5sZW5ndGg6aSktMV07KGU9bz9vLnBhcmVudE5vZGU6ZSkuaW5zZXJ0QmVmb3JlKG4sb3x8bnVsbCl9fSkoRyxTKCksYWUsWiksQygoZnVuY3Rpb24oKXtpZihuLmlzU3RyaW5nJiZuLmNhbktlZXBNb3ZpbmcpcmV0dXJuIEUoaihuLm51bWJlck9mU3RlcHM+MD9cIlNUQVJUXCI6XCJFTkRcIikpfSksKGZ1bmN0aW9uKCl7cmV0dXJuIGUoKX0pKX0pKSxXWzBdKX0pfSxVPWU9Pm5ldyBQcm9taXNlKHQ9PntJKCgpPT4oVChHLGUsYWUsWiksdCgpKSxXWzBdKX0pLEY9RCgoZnVuY3Rpb24oZSl7ZWU9bihlZSxlKX0pKSxLPUQoKGZ1bmN0aW9uKCl7Sj9HLnZhbHVlPVwiXCI6UygpLmZvckVhY2goZT0+e0woZSl9KX0pKSxRPWU9PihlPSEwPT09ZSxuZXcgUHJvbWlzZSh0PT57SShEKChmdW5jdGlvbigpe3ZhciBuPSExLHI9UygpO3JldHVybiByLmxlbmd0aCYmKEo/Ry52YWx1ZT1HLnZhbHVlLnNsaWNlKDAsLTEpOkwocltaXSkpLGMoRy5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSkuZm9yRWFjaChlPT57aWYoIWUuaW5uZXJIVE1MJiZcIkJSXCIhPT1lLnRhZ05hbWUpe2Zvcih2YXIgdD1lOzE9PT10LnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGgmJnQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmlzRXF1YWxOb2RlKHQpOyl0PXQucGFyZW50Tm9kZTtMKHQpfX0pLEMoKGZ1bmN0aW9uKCl7aWYoZSYmci5sZW5ndGgtMT4wKXJldHVybiB3KFEoITApLChmdW5jdGlvbigpe3JldHVybiBuPSEwLHQoKX0pKX0pLChmdW5jdGlvbihlKXtyZXR1cm4gbj9lOnQoKX0pKX0pKSxXWzFdKX0pKTt0aGlzLmJyZWFrPWZ1bmN0aW9uKGUpe3JldHVybiBzKFtVLGgobShcIkJSXCIpKV0sMSxlKX0sdGhpcy5kZWxldGU9ZnVuY3Rpb24oZSx0KXt2YXIgbj1kKHQpO3JldHVybiBzKFtuWzBdXS5jb25jYXQoW10uY29uY2F0KEFycmF5KE1hdGguYWJzKGUpfHwxKSkuZmlsbCgpLm1hcCgoKT0+W1EsIWUsJF0pLFtuWzFdXSksMSx0KX0sdGhpcy5lbXB0eT1mdW5jdGlvbigpe3JldHVybiBzKEssMSxhcmd1bWVudHMpfSx0aGlzLmV4ZWM9ZnVuY3Rpb24oZSx0KXt2YXIgbj1kKHQpO3JldHVybiBzKFtuWzBdLFtlLG51bGxdLG5bMV1dLDEsdCl9LHRoaXMubW92ZT1mdW5jdGlvbihlLHQpe3ZhciBuPU0oZSxaLFMoKSkscj1kKHQpLGk9bi5pc1N0cmluZz9lOk1hdGguc2lnbihlKTtyZXR1cm4gcyhbclswXV0uY29uY2F0KFtdLmNvbmNhdChBcnJheShNYXRoLmFicyhlKXx8MSkpLmZpbGwoKS5tYXAoKCk9PltqLGksJF0pLFtyWzFdXSksMSx0KX0sdGhpcy5vcHRpb25zPWZ1bmN0aW9uKGUpe3JldHVybiBzKFtGLGVdLDEsZSl9LHRoaXMucGF1c2U9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gcyhbVixlXSwxLHQpfSx0aGlzLnR5cGU9ZnVuY3Rpb24oZSx0KXt2YXIgbj1kKHQpLHI9cChlLGVlLmh0bWwpLGk9W25bMF1dLmNvbmNhdChhKHIsVSwkLCEwKSxbblsxXV0pO3JldHVybiBzKGksMSx0KX0sdGhpcy5pcz1mdW5jdGlvbihlKXtyZXR1cm4gX1tlXX0sdGhpcy5kZXN0cm95PWZ1bmN0aW9uKGUpe2U9dm9pZCAwPT09ZXx8ZSxYLmZvckVhY2goZT0+e2NsZWFyVGltZW91dChlKX0pLFg9W10sZSYmTChhZSksXy5kZXN0cm95ZWQ9ITB9LHRoaXMuZnJlZXplPWZ1bmN0aW9uKCl7Xy5mcm96ZW49ITB9LHRoaXMudW5mcmVlemU9ZnVuY3Rpb24oKXtfLmZyb3plbj0hMSxxKCl9LHRoaXMucmVzZXQ9ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4hdGhpcy5pcyhcImRlc3Ryb3llZFwiKSYmdGhpcy5kZXN0cm95KCksb2UucmVzZXQoKSxaPTAsXylfW2VdPSExO3JldHVybiBKP0cudmFsdWU9XCJcIjpHLmlubmVySFRNTD1cIlwiLHRoaXN9LHRoaXMuZ289ZnVuY3Rpb24oKXtyZXR1cm4gXy5zdGFydGVkP3RoaXM6KHooKSxlZS53YWl0VW50aWxWaXNpYmxlPygoKGUsdCk9PntuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKG4scik9PntuLmZvckVhY2gobj0+e24uaXNJbnRlcnNlY3RpbmcmJih0KCksci51bm9ic2VydmUoZSkpfSl9LHt0aHJlc2hvbGQ6MX0pLm9ic2VydmUoZSl9KShHLHEuYmluZCh0aGlzKSksdGhpcyk6KHEoKSx0aGlzKSl9LHRoaXMuZ2V0UXVldWU9ZnVuY3Rpb24oKXtyZXR1cm4gb2V9LHRoaXMuZ2V0T3B0aW9ucz1mdW5jdGlvbigpe3JldHVybiBlZX0sdGhpcy5nZXRFbGVtZW50PWZ1bmN0aW9uKCl7cmV0dXJuIEd9O3ZhciBZLEc9XCJzdHJpbmdcIj09dHlwZW9mKFk9dCk/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihZKTpZLEo9TihHKSxXPVtdLFg9W10sWj0wLCQ9e2ZyZWV6ZUN1cnNvcjohMH0sXz17c3RhcnRlZDohMSxjb21wbGV0ZWQ6ITEsZnJvemVuOiExLGRlc3Ryb3llZDohMX0sZWU9bihlLGkpO2VlPW4oZWUse2h0bWw6IUomJmVlLmh0bWwsbmV4dFN0cmluZ0RlbGF5OmcoZWUubmV4dFN0cmluZ0RlbGF5KSxsb29wRGVsYXk6ZyhlZS5sb29wRGVsYXkpfSk7dmFyIHRlLG5lLHJlLGllPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMiw5KSxvZT1uZXcgdShbVixlZS5zdGFydERlbGF5XSk7Ry5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVpdC1pZFwiLGllKSx5KFwiW2RhdGEtdHlwZWl0LWlkXTpiZWZvcmUge2NvbnRlbnQ6ICcuJzsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMDsgdmlzaWJpbGl0eTogaGlkZGVuO31bZGF0YS10eXBlaXQtaWRdXCIpLGVlLnN0cmluZ3M9KHJlPWVlLnN0cmluZ3MsdGU9cihyZSk/cmU6W3JlXSwobmU9KGU9PmUuaW5uZXJIVE1MLnJlcGxhY2UoLzxcXCEtLS4qPy0tPi9nLFwiXCIpLnRyaW0oKSkoRykpPyhHLmlubmVySFRNTD1cIlwiLGVlLnN0YXJ0RGVsZXRlPyh2KG5lKS5mb3JFYWNoKGU9PntUKEcsZSxhZSxaKX0pLG9lLmFkZChbUSwhMF0pLFAoMSksdGUpOltuZS50cmltKCldLmNvbmNhdCh0ZSkpOnRlKTt2YXIgYWU9KCgpPT57aWYoSnx8IWVlLmN1cnNvcilyZXR1cm4gbnVsbDt2YXIgZT1tKFwic3BhblwiKTtyZXR1cm4gZS5pbm5lckhUTUw9bChlZS5jdXJzb3JDaGFyKS5pbm5lckhUTUwsZS5jbGFzc05hbWU9XCJ0aS1jdXJzb3JcIixlLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZTtcIi5jb25jYXQoeChHKSksZX0pKCk7ZWUuc3RyaW5ncy5sZW5ndGgmJigoKT0+e3ZhciBlPWVlLnN0cmluZ3MuZmlsdGVyKGU9PiEhZSk7ZS5mb3JFYWNoKCh0LG4pPT57dmFyIHI9cCh0LGVlLmh0bWwpO29lLmFkZChhKHIsVSwkLCEwKSk7dmFyIGk9b2UuZ2V0SXRlbXMoKS5sZW5ndGg7aWYobisxIT09ZS5sZW5ndGgpe2lmKGVlLmJyZWFrTGluZXMpe3ZhciBvPWgobShcIkJSXCIpKTtyZXR1cm4gb2UuYWRkKFtVLG8sJF0pLHZvaWQgUChpKX1vZS5hZGQoYShyLFEsJCkpLFAoaSx0Lmxlbmd0aCl9fSl9KSgpfVxuIiwiaW1wb3J0IHsgTGFpbG9TdGFuZEFsb25lIH0gZnJvbSBcIi4vbW9kZWxzL0xhaWxvU3RhbmRBbG9uZVwiO1xyXG5pbXBvcnQgeyBMYWlsb1RpbnlXaWRnZXQgfSBmcm9tIFwiLi9tb2RlbHMvTGFpbG9UaW55V2lkZ2V0XCI7XHJcbmltcG9ydCBMYWlsb0hhbGZTY3JlZW5XaWRnZXQgZnJvbSBcIi4vbW9kZWxzL0xhaWxvSGFsZlNjcmVlbldpZGdldFwiO1xyXG5jb25zdCBzZXREZWZhdWx0VHlwZUl0ID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XHJcbiAgICAgICAgY2FzZSBcImRlLURFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBbXCJ6LkIuIFdlciBiaXN0IGR1P1wiLCBcInouQi4gV2FzIGthbm5zdCBkdSBmw7xyIG1pY2ggdHVuP1wiLCBcIkZyYWcgbWljaCBlaW5mYWNoIVwiXTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiZS5nLiBXaG8gYXJlIHlvdT9cIiwgXCJlLmcuIFdoYXQgY2FuIHlvdSBkbyBmb3IgbWU/XCIsIFwiSnVzdCBhc2sgbWUhXCJdO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgaW5pdCA9ICh7IGJvdFNlY3JldCwgd2lkZ2V0VHlwZSA9IFwidGlueVdpZGdldFwiLCBtYWluQ29udGFpbmVySWQgPSBcImxhaWxvLXNtYXJ0LWNoYXJhY3RlclwiLCBjYW1lcmFBZGp1c3RtZW50ID0gXCJtZWRpdW1cIiwgbGFuZ3VhZ2UgPSBcImVuLVVTXCIsIHR5cGVJdFN0cmluZ0FycmF5LCB9KSA9PiB7XHJcbiAgICBpZiAoIXR5cGVJdFN0cmluZ0FycmF5KVxyXG4gICAgICAgIHR5cGVJdFN0cmluZ0FycmF5ID0gc2V0RGVmYXVsdFR5cGVJdChsYW5ndWFnZSk7XHJcbiAgICBzd2l0Y2ggKHdpZGdldFR5cGUpIHtcclxuICAgICAgICBjYXNlIFwidGlueVdpZGdldFwiOlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFpbG8gPSBuZXcgTGFpbG9UaW55V2lkZ2V0KGJvdFNlY3JldCwgbWFpbkNvbnRhaW5lcklkLCBjYW1lcmFBZGp1c3RtZW50LCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhaWxvLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImhhbGZTY3JlZW5XaWRnZXRcIjpcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhaWxvID0gbmV3IExhaWxvSGFsZlNjcmVlbldpZGdldChib3RTZWNyZXQsIG1haW5Db250YWluZXJJZCwgY2FtZXJhQWRqdXN0bWVudCwgbGFuZ3VhZ2UsIHdpZGdldFR5cGUsIHR5cGVJdFN0cmluZ0FycmF5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsYWlsby5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJzdGFuZEFsb25lXCI6XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFBZGp1c3RtZW50ID0gXCJsb25nc2hvdFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFpbG8gPSBuZXcgTGFpbG9TdGFuZEFsb25lKGJvdFNlY3JldCwgbWFpbkNvbnRhaW5lcklkLCBjYW1lcmFBZGp1c3RtZW50LCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhaWxvLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGFpbG8gY291bGQgbm90IGJlIGluaXRpYWxpemVkLiBQbGVhc2UgZG91YmxlIGNoZWNrIHlvdXIgaW5pdGlhbGl6YXRpb24gb2JqZWN0LlwiKTtcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IFR5cGVJdCBmcm9tIFwidHlwZWl0XCI7XHJcbmV4cG9ydCBjbGFzcyBMYWlsb0Jhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoYm90U2VjcmV0LCBtYWluQ29udGFpbmVySWQsIGNhbWVyYUFkanVzdG1lbnQsIGxhbmd1YWdlLCB3aWRnZXRUeXBlLCB0eXBlSXRTdHJpbmdBcnJheSkge1xyXG4gICAgICAgIHRoaXMuYm90U2VjcmV0ID0gYm90U2VjcmV0O1xyXG4gICAgICAgIHRoaXMubWFpbkNvbnRhaW5lcklkID0gbWFpbkNvbnRhaW5lcklkO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQWRqdXN0bWVudCA9IGNhbWVyYUFkanVzdG1lbnQ7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0VHlwZSA9IHdpZGdldFR5cGU7XHJcbiAgICAgICAgdGhpcy50eXBlSXRTdHJpbmdBcnJheSA9IHR5cGVJdFN0cmluZ0FycmF5O1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlQ29sbGVjdGlvbiA9IHtcclxuICAgICAgICAgICAgXCJkZS1ERVwiOiB7XHJcbiAgICAgICAgICAgICAgICBDb21tdW5pY2F0aW9uU2VydmVySW5pdEZhaWxlZDogXCJMZWlkZXIga2FubiBpY2ggZGlyIGF1ZiBHcnVuZCB0ZWNobmlzY2hlciBQcm9ibGVtZSBnZXJhZGUgbmljaHQgd2VpdGVyaGVsZmVuLiBCaXR0ZSBzdGVsbGUgc2ljaGVyLCBkYXNzIGR1IG1pdCBkZW0gSW50ZXJuZXQgdmVyYnVuZGVuIGJpc3QuIFNvbGx0ZSBkaWVzIGRlciBGYWxsIHNlaW4sIHZlcnN1Y2hlIGVzIGJpdHRlIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgTm9Db21tdW5pY2F0aW9uU2VydmVyQ29ubmVjdGlvbjogXCJMZWlkZXIga2FubiBpY2ggZGlyIGF1ZiBHcnVuZCB0ZWNobmlzY2hlciBQcm9ibGVtZSBnZXJhZGUgbmljaHQgd2VpdGVyaGVsZmVuLiBCaXR0ZSBzdGVsbGUgc2ljaGVyLCBkYXNzIGR1IG1pdCBkZW0gSW50ZXJuZXQgdmVyYnVuZGVuIGJpc3QuIFNvbGx0ZSBkaWVzIGRlciBGYWxsIHNlaW4sIHZlcnN1Y2hlIGVzIGJpdHRlIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgUmVmcmVzaENvbW11bmljYXRpb25TZXJ2ZXJUb2tlbkZhaWxlZDogXCJMZWlkZXIga2FubiBpY2ggZGlyIGF1ZiBHcnVuZCB0ZWNobmlzY2hlciBQcm9ibGVtZSBnZXJhZGUgbmljaHQgd2VpdGVyaGVsZmVuLiBCaXR0ZSBzdGVsbGUgc2ljaGVyLCBkYXNzIGR1IG1pdCBkZW0gSW50ZXJuZXQgdmVyYnVuZGVuIGJpc3QuIFNvbGx0ZSBkaWVzIGRlciBGYWxsIHNlaW4sIHZlcnN1Y2hlIGVzIGJpdHRlIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgQ29tbXVuaWNhdGlvblNlcnZlckNvbm5lY3Rpb25DbG9zZWQ6IFwiTGVpZGVyIGthbm4gaWNoIGRpciBhdWYgR3J1bmQgdGVjaG5pc2NoZXIgUHJvYmxlbWUgZ2VyYWRlIG5pY2h0IHdlaXRlcmhlbGZlbi4gQml0dGUgc3RlbGxlIHNpY2hlciwgZGFzcyBkdSBtaXQgZGVtIEludGVybmV0IHZlcmJ1bmRlbiBiaXN0LiBTb2xsdGUgZGllcyBkZXIgRmFsbCBzZWluLCB2ZXJzdWNoZSBlcyBiaXR0ZSBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIERpcmVjdExpbmVUb2tlbkZhaWxlZDogXCJMZWlkZXIga2FubiBpY2ggZGlyIGF1ZiBHcnVuZCB0ZWNobmlzY2hlciBQcm9ibGVtZSBnZXJhZGUgbmljaHQgd2VpdGVyaGVsZmVuLiBCaXR0ZSBzdGVsbGUgc2ljaGVyLCBkYXNzIGR1IG1pdCBkZW0gSW50ZXJuZXQgdmVyYnVuZGVuIGJpc3QuIFNvbGx0ZSBkaWVzIGRlciBGYWxsIHNlaW4sIHZlcnN1Y2hlIGVzIGJpdHRlIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgUmVmcmVzaERpcmVjdExpbmVUb2tlbkZhaWxlZDogXCJMZWlkZXIga2FubiBpY2ggZGlyIGF1ZiBHcnVuZCB0ZWNobmlzY2hlciBQcm9ibGVtZSBnZXJhZGUgbmljaHQgd2VpdGVyaGVsZmVuLiBCaXR0ZSBzdGVsbGUgc2ljaGVyLCBkYXNzIGR1IG1pdCBkZW0gSW50ZXJuZXQgdmVyYnVuZGVuIGJpc3QuIFNvbGx0ZSBkaWVzIGRlciBGYWxsIHNlaW4sIHZlcnN1Y2hlIGVzIGJpdHRlIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgRGlyZWN0TGluZUtlZXBBbGl2ZUZhaWxlZDogXCJMZWlkZXIga2FubiBpY2ggZGlyIGF1ZiBHcnVuZCB0ZWNobmlzY2hlciBQcm9ibGVtZSBnZXJhZGUgbmljaHQgd2VpdGVyaGVsZmVuLiBCaXR0ZSBzdGVsbGUgc2ljaGVyLCBkYXNzIGR1IG1pdCBkZW0gSW50ZXJuZXQgdmVyYnVuZGVuIGJpc3QuIFNvbGx0ZSBkaWVzIGRlciBGYWxsIHNlaW4sIHZlcnN1Y2hlIGVzIGJpdHRlIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgTG93QmFuZHdpZHRoOiBcIkxlaWRlciBoYXN0IGR1IGdlcmFkZSBlaW5lIHNlaHIgc2NobGVjaHRlIEludGVybmV0dmVyYmluZHVuZy4gRGFoZXIga8O2bm5lbiBlaW5pZ2UgbWVpbmVyIEZ1bmt0aW9uZW4gc3RhcmsgZWluZ2VzY2hyw6Rua3Qgc2Vpbi4gQml0dGUgdmVyc3VjaGUgZXMgZG9jaCBzcMOkdGVyIGVybmV1dCwgd2VubiBkZWluZSBJbnRlcm5ldHZlcmJpbmR1bmcgd2llZGVyIGJlc3NlciBpc3QuXCIsXHJcbiAgICAgICAgICAgICAgICBCb3RDb21tdW5pY2F0aW9uRmFpbGVkOiBcIkxlaWRlciBrYW5uIGljaCBkaXIgYXVmIEdydW5kIHRlY2huaXNjaGVyIFByb2JsZW1lIGdlcmFkZSBuaWNodCB3ZWl0ZXJoZWxmZW4uIEJpdHRlIHN0ZWxsZSBzaWNoZXIsIGRhc3MgZHUgbWl0IGRlbSBJbnRlcm5ldCB2ZXJidW5kZW4gYmlzdC4gU29sbHRlIGRpZXMgZGVyIEZhbGwgc2VpbiwgdmVyc3VjaGUgZXMgYml0dGUgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBJbnZhbGlkQ2FtZXJhQWRqdXN0bWVudDogXCJMZWlkZXIgaGFiZSBpY2ggZ2VyYWRlIHRlY2huaXNjaGUgUHJvYmxlbWUuIEJpdHRlIHZlcnN1Y2hlIGVzIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgSW52YWxpZENhbnZhc1NpemU6IFwiTGVpZGVyIGhhYmUgaWNoIGdlcmFkZSB0ZWNobmlzY2hlIFByb2JsZW1lLiBCaXR0ZSB2ZXJzdWNoZSBlcyBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VUb0JvdEVtcHR5OiBcIk9oLCBlcyBzY2hlaW50LCBhbHMgaMOkdHRlc3QgZHUgbWlyIG5pY2h0cyBtaXRnZXRlaWx0LiBCaXR0ZSBzYWdlIG9kZXIgc2NocmVpYmUgbWlyIGV0d2FzLCBkYW1pdCBpY2ggZGlyIHdlaXRlcmhlbGZlbiBrYW5uLlwiLFxyXG4gICAgICAgICAgICAgICAgSW52YWxpZEFjdGlvbjogXCJMZWlkZXIgaGFiZSBpY2ggZ2VyYWRlIHRlY2huaXNjaGUgUHJvYmxlbWUuIEJpdHRlIHZlcnN1Y2hlIGVzIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgTWljcm9waG9uZUFjY2Vzc0RlbmllZDogXCJMZWlkZXIga2FubiBpY2ggYWt0dWVsbCBuaWNodCBhdWYgZGVpbiBNaWtyb2ZvbiB6dWdyZWlmZW4uIEJpdHRlIHN0ZWxsZSBpbiBkZWluZW4gQnJvd3NlcmVpbnN0ZWxsdW5nZW4gc2ljaGVyLCBkYXNzIGljaCBhdWYgZGVpbiBNaWtyb2ZvbiB6dWdyZWlmZW4ga2Fubi5cIixcclxuICAgICAgICAgICAgICAgIE1pY3JvcGhvbmVOb3RGb3VuZDogXCJMZWlkZXIgc2NoZWludCBlcyBzbywgYWxzIGjDpHR0ZXN0IGR1IGtlaW4gTWlrcm9mb24uIEJpdHRlIHNjaGxpZcOfZSBlaW4gTWlrcm9mb24gYW4gdW5kIHZlcnN1Y2hlIGVzIGFuc2NobGllw59lbmQgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgTm9HZXRVc2VyTWVkaWFBY2Nlc3M6IFwiTGVpZGVyIGthbm4gaWNoIG5pY2h0IGF1ZiBkZWluIE1pa3JvZm9uIHp1Z3JlaWZlbi4gQml0dGUgc3RlbGxlIHNpY2hlciwgZGFzcyBkdSDDvGJlciBlaW4gTWlrcm9mb24gdmVyZsO8Z3N0IHVuZCBkaWVzZXMgZsO8ciBkZW4gWnVncmlmZiBkdXJjaCBkZWluZW4gQnJvd3NlciBmcmVpZ2VnZWJlbiBpc3QuXCIsXHJcbiAgICAgICAgICAgICAgICBXZWJHTE5vdFN1cHBvcnRlZDogXCJMZWlkZXIgd2lyZCBXZWJHbCB2b24gZGVpbmVtIEJyb3dzZXIgbmljaHQgdW50ZXJzdMO8dHp0LiBCaXR0ZSB2ZXJzdWNoZSBlcyBtaXQgZWluZW0gYW5kZXJlbiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBOb0F0dGFjaG1lbnRzSW5BY3Rpdml0eTogXCJMZWlkZXIgaGFiZSBpY2ggZ2VyYWRlIHRlY2huaXNjaGUgUHJvYmxlbWUuIEJpdHRlIHZlcnN1Y2hlIGVzIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImVuLVVTXCI6IHtcclxuICAgICAgICAgICAgICAgIENvbW11bmljYXRpb25TZXJ2ZXJJbml0RmFpbGVkOiBcIlVuZm9ydHVuYXRlbHkgSSBjYW4ndCBoZWxwIHlvdSByaWdodCBub3cgZHVlIHRvIHRlY2huaWNhbCBwcm9ibGVtcy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgY29ubmVjdGVkIHRvIHRoZSBpbnRlcm5ldC4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcclxuICAgICAgICAgICAgICAgIE5vQ29tbXVuaWNhdGlvblNlcnZlckNvbm5lY3Rpb246IFwiVW5mb3J0dW5hdGVseSBJIGNhbid0IGhlbHAgeW91IHJpZ2h0IG5vdyBkdWUgdG8gdGVjaG5pY2FsIHByb2JsZW1zLiBQbGVhc2UgbWFrZSBzdXJlIHRoYXQgeW91IGFyZSBjb25uZWN0ZWQgdG8gdGhlIGludGVybmV0LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgICAgICAgICAgUmVmcmVzaENvbW11bmljYXRpb25TZXJ2ZXJUb2tlbkZhaWxlZDogXCJVbmZvcnR1bmF0ZWx5IEkgY2FuJ3QgaGVscCB5b3UgcmlnaHQgbm93IGR1ZSB0byB0ZWNobmljYWwgcHJvYmxlbXMuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3UgYXJlIGNvbm5lY3RlZCB0byB0aGUgaW50ZXJuZXQuIElmIHRoaXMgaXMgdGhlIGNhc2UsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICBDb21tdW5pY2F0aW9uU2VydmVyQ29ubmVjdGlvbkNsb3NlZDogXCJVbmZvcnR1bmF0ZWx5IEkgY2FuJ3QgaGVscCB5b3UgcmlnaHQgbm93IGR1ZSB0byB0ZWNobmljYWwgcHJvYmxlbXMuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3UgYXJlIGNvbm5lY3RlZCB0byB0aGUgaW50ZXJuZXQuIElmIHRoaXMgaXMgdGhlIGNhc2UsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICBEaXJlY3RMaW5lVG9rZW5GYWlsZWQ6IFwiVW5mb3J0dW5hdGVseSBJIGNhbid0IGhlbHAgeW91IHJpZ2h0IG5vdyBkdWUgdG8gdGVjaG5pY2FsIHByb2JsZW1zLiBQbGVhc2UgbWFrZSBzdXJlIHRoYXQgeW91IGFyZSBjb25uZWN0ZWQgdG8gdGhlIGludGVybmV0LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgICAgICAgICAgUmVmcmVzaERpcmVjdExpbmVUb2tlbkZhaWxlZDogXCJCb3Qgb2ZmbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgRGlyZWN0TGluZUtlZXBBbGl2ZUZhaWxlZDogXCJVbmZvcnR1bmF0ZWx5IEkgY2FuJ3QgaGVscCB5b3UgcmlnaHQgbm93IGR1ZSB0byB0ZWNobmljYWwgcHJvYmxlbXMuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3UgYXJlIGNvbm5lY3RlZCB0byB0aGUgaW50ZXJuZXQuIElmIHRoaXMgaXMgdGhlIGNhc2UsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICBMb3dCYW5kd2lkdGg6IFwiQm90aCBjb25kaXRpb25zIGluZGljYXRlIGEgYmFkIGludGVybmV0IGNvbm5lY3Rpb24gYW5kIGl04oCZcyBoaWdobHkgcmVjb21tZW5kZWQgdG8gZGlzYWJsZSBTcGVlY2gtdG8tVGV4dC5cIixcclxuICAgICAgICAgICAgICAgIEJvdENvbW11bmljYXRpb25GYWlsZWQ6IFwiVGhlIERpcmVjdExpbmUgY29tbXVuaWNhdGlvbiB0byB0aGUgYm90IHNlcnZpY2UgZmFpbGVkLiBUaGlzIG1pZ2h0IGluZGljYXRlIHRoYXQgdGhlIGJvdCBpcyBvZmZsaW5lLCBvciBhbiBBenVyZSByZXNvdXJjZSBpcyBub3Qgd29ya2luZyBwcm9wZXJseSwgYnV0IGl04oCZcyBtb3JlIGxpa2VseSB0aGF0IHRoZSBpbnRlcm5ldCBjb25uZWN0aW9uIGlzIGJyb2tlbi5cIixcclxuICAgICAgICAgICAgICAgIEludmFsaWRDYW1lcmFBZGp1c3RtZW50OiBcIlVuZm9ydHVuYXRlbHksIEknbSBoYXZpbmcgdGVjaG5pY2FsIHByb2JsZW1zIHJpZ2h0IG5vdy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcclxuICAgICAgICAgICAgICAgIEludmFsaWRDYW52YXNTaXplOiBcIlVuZm9ydHVuYXRlbHksIEknbSBoYXZpbmcgdGVjaG5pY2FsIHByb2JsZW1zIHJpZ2h0IG5vdy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VUb0JvdEVtcHR5OiBcIk9oLCBpdCBzZWVtcyB5b3UgaGF2ZW4ndCB0b2xkIG1lIGFueXRoaW5nLiBQbGVhc2UgdGVsbCBtZSBvciB3cml0ZSBzb21ldGhpbmcgc28gSSBjYW4gaGVscCB5b3UuXCIsXHJcbiAgICAgICAgICAgICAgICBJbnZhbGlkQWN0aW9uOiBcIlVuZm9ydHVuYXRlbHksIEknbSBoYXZpbmcgdGVjaG5pY2FsIHByb2JsZW1zIHJpZ2h0IG5vdy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcclxuICAgICAgICAgICAgICAgIE1pY3JvcGhvbmVBY2Nlc3NEZW5pZWQ6IFwiVW5mb3J0dW5hdGVseSBJIGNhbm5vdCBhY2Nlc3MgeW91ciBtaWNyb3Bob25lIGF0IHRoZSBtb21lbnQuIFBsZWFzZSBtYWtlIHN1cmUgaW4geW91ciBicm93c2VyIHNldHRpbmdzIHRoYXQgSSBjYW4gYWNjZXNzIHlvdXIgbWljcm9waG9uZS5cIixcclxuICAgICAgICAgICAgICAgIE1pY3JvcGhvbmVOb3RGb3VuZDogXCJVbmZvcnR1bmF0ZWx5LCBpdCBhcHBlYXJzIHRoYXQgeW91IGRvIG5vdCBoYXZlIGEgbWljcm9waG9uZS4gUGxlYXNlIGNvbm5lY3QgYSBtaWNyb3Bob25lIGFuZCB0cnkgYWdhaW4gYWZ0ZXJ3YXJkcy5cIixcclxuICAgICAgICAgICAgICAgIE5vR2V0VXNlck1lZGlhQWNjZXNzOiBcIlVuZm9ydHVuYXRlbHksIEkgY2FuJ3QgYWNjZXNzIHlvdXIgbWljcm9waG9uZS4gUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdSBoYXZlIGEgbWljcm9waG9uZSBhbmQgdGhhdCBpdCBpcyBlbmFibGVkIGZvciBhY2Nlc3MgYnkgeW91ciBicm93c2VyLlwiLFxyXG4gICAgICAgICAgICAgICAgV2ViR0xOb3RTdXBwb3J0ZWQ6IFwiVW5mb3J0dW5hdGVseSBXZWJHbCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3Nlci4gUGxlYXNlIHRyeSBhbm90aGVyIGJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIE5vQXR0YWNobWVudHNJbkFjdGl2aXR5OiBcIlVuZm9ydHVuYXRlbHksIEknbSBoYXZpbmcgdGVjaG5pY2FsIHByb2JsZW1zIHJpZ2h0IG5vdy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIE11c3QgYmUgb3ZlcnJpZGVuIGluIGRlcml2ZWQgY2xhc3NlcyBpZiBuZWVkZWQuXHJcbiAgICAgICAgLy8gVGhpcyBhc3NvY2lhdGl2ZSBhcnJheSB3aWxsIGNvbnRhaW4gdGhlIHRleHQgY29udGVudHMgZm9yIHRoZSBjaGFyYWN0ZXIncyBodG1sIHRlbXBsYXRlLlxyXG4gICAgICAgIHRoaXMuaHRtbFRleHRDb250ZW50Q29sbGVjdGlvbiA9IHtcclxuICAgICAgICAgICAgXCJkZS1ERVwiOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySW5wdXRDb250YWluZXJUaXRsZTogXCJXaWUga2FubiBpY2ggSWhuZW4gaGVsZmVuP1wiLFxyXG4gICAgICAgICAgICAgICAgYXNrTWVDb250YWluZXJUaXRsZTogW1wiRnJhZyBtaWNoIVwiLCBcIkRhbmtlXCJdLFxyXG4gICAgICAgICAgICAgICAgdXNlcklucHV0UGxhY2Vob2xkZXI6IFtcIk5hY2hyaWNodCBzZW5kZW4uLi5cIiwgXCJJY2ggaMO2cmUgenUuLi5cIl0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZW4tVVNcIjoge1xyXG4gICAgICAgICAgICAgICAgdXNlcklucHV0Q29udGFpbmVyVGl0bGU6IFwiV2hhdCBjYW4gSSBoZWxwIHlvdSB3aXRoP1wiLFxyXG4gICAgICAgICAgICAgICAgYXNrTWVDb250YWluZXJUaXRsZTogW1wiQXNrIG1lIVwiLCBcIlRoYW5rIHlvdVwiXSxcclxuICAgICAgICAgICAgICAgIHVzZXJJbnB1dFBsYWNlaG9sZGVyOiBbXCJTZW5kIGEgbWVzc2FnZS4uLlwiLCBcIkkgYW0gbGlzdGVuaW5nLi4uXCJdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImh1LUhVXCI6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJbnB1dENvbnRhaW5lclRpdGxlOiBcIk1pYmVuIHNlZ8OtdGhldGVrP1wiLFxyXG4gICAgICAgICAgICAgICAgYXNrTWVDb250YWluZXJUaXRsZTogW1wiS8OpcmRlenplbiFcIiwgXCJLw7ZzesO2bsO2bVwiXSxcclxuICAgICAgICAgICAgICAgIHVzZXJJbnB1dFBsYWNlaG9sZGVyOiBbXCLDnHplbmV0IGvDvGxkw6lzZS4uLlwiLCBcIkhhbGxnYXRvbS4uLlwiXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEV2ZXJ5IHZlcnNpb24gb2YgTGFpbG8gbmVlZHMgYSBjdXN0b21pemVkIGJvdFN0YXRlQ29sbGVjdGlvbi4gVGhpcyBtZXRob2QgbXVzdCBiZSBvdmVycmlkZW4gaW4gZGVyaXZlZCBjbGFzc2VzLlxyXG4gICAgICAgIHRoaXMuYm90U3RhdGVDb2xsZWN0aW9uID0ge1xyXG4gICAgICAgICAgICBiZWZvcmVCb3RJbml0aWFsaXplZDoge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlTdGF0ZTogKCkgPT4geyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpZGxlOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7IH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpc3RlbmluZzoge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlTdGF0ZTogKCkgPT4geyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbnN3ZXJpbmc6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6IChkYXRhKSA9PiB7IH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoZXJyKSA9PiB7IH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGaWx0ZXJzIG91dCB0aGUgQ0ROIHNjcmlwdCB0YWcgZnJvbSB0aGUgRE9NIGFuZCByZXBsYWNlcyB0aGUgSmF2YVNjcmlwdCB2aWEgdGhlIG1hdGNoaW5nIENTUy5cclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBtYWtlcyBpdCBwb3NzaWJsZSB0byBtaWdyYXRlIENETnMgd2l0aG91dCBoYXZpbmcgdG8gdG91Y2ggdGhpcyBjb2RlLlxyXG4gICAgICAgICAqIEBwYXJhbSB3aWRnZXRUeXBlIHR5cGUgb2YgdGhlIHdpZGdldCBhcyBzdHJpbmdcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNyZWF0ZUNTU1NvdXJjZSA9ICh3aWRnZXRUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgY29uc3QgY2RuU2NyaXB0U291cmNlID0gKF9hID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2NyaXB0XCIpKS5maW5kKChzY3JpcHRFbGVtZW50KSA9PiBzY3JpcHRFbGVtZW50LnNyYy5pbmNsdWRlcyhcImxhaWxvL3NtYXJ0LWNoYXJhY3RlclwiKSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zcmM7XHJcbiAgICAgICAgICAgIGlmICghY2RuU2NyaXB0U291cmNlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCB1cmxGcmFnbWVudHMgPSBjZG5TY3JpcHRTb3VyY2Uuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgICAgICB1cmxGcmFnbWVudHNbdXJsRnJhZ21lbnRzLmxlbmd0aCAtIDFdID0gYCR7d2lkZ2V0VHlwZX0uY3NzYDtcclxuICAgICAgICAgICAgcmV0dXJuIHVybEZyYWdtZW50cy5qb2luKFwiL1wiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIER5bmFtaWNhbGx5IGRpc3BsYXlzIGVpdGhlciB0aGUgc2VuZCBidXR0b24gKGlmIHRoZXJlIGlzIGEgdXNlciBpbnB1dCkgb3IgdGhlIG1pY3JvcGhvbmUgYnV0dG9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dEJ1dHRvbk9uVXNlcklucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VySW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taWNCdG4uc3R5bGUuekluZGV4ID0gXCItMVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kVGV4dEJ1dHRvbi5zdHlsZS56SW5kZXggPSBcIjUwMDBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLnN0eWxlLnpJbmRleCA9IFwiNTAwMFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kVGV4dEJ1dHRvbi5zdHlsZS56SW5kZXggPSBcIi0xXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xyXG4gICAgICAgIC8vIExvb2tpbmcgZm9yIHRoZSBrZXkgaW4gaHRtbCB0ZXh0IGNvbnRlbnQgY29sbGVjdGlvbiB0byB1c2UgaXQgZm9yIGZpbHRlcmluZyB0aGUgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAvLyBhbmQgc2V0dGluZyB0aGUgdGV4dGNvbnRlbnQgb2Ygc29tZSBIVE1MIEVsZW1lbnRzIGxhdGVyIG9uXHJcbiAgICAgICAgLy8gRW5nbGlzaCB3aWxsIGJlIHVzZWQgYXMgZmFsbGJhY2tcclxuICAgICAgICB0aGlzLmxhbmd1YWdlQ29kZSA9XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaHRtbFRleHRDb250ZW50Q29sbGVjdGlvbikuZmluZCgoa2V5KSA9PiBrZXkgPT09IHRoaXMubGFuZ3VhZ2UpIHx8XHJcbiAgICAgICAgICAgICAgICBcImVuLVVTXCI7XHJcbiAgICAgICAgdGhpcy5pbmplY3REZXBlbmRlbmNpZXMoKTtcclxuICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBhcmUgdGhlIGJhcmUgbWluaW11bSBmb3IgdGhlIHNpbXBsZXN0IHdpZGdldCAoc2tlbGV0b24pIHRvIGZ1bmN0aW9uLlxyXG4gICAgICAgIC8vIFRoZXkgd2lsbCBiZSBpbmplY3RlZCBpbiB0aGUgb3ZlcnJpZGVuIG1ldGhvZCBpbiBMYWlsb1NrZWxldG9uXHJcbiAgICAgICAgdGhpcy5taWNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLW1pY3JvcGhvbmUtYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMubWljSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tbWljcm9waG9uZS1pY29uXCIpO1xyXG4gICAgICAgIHRoaXMuc2VuZFRleHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLXNlbmQtdGV4dC1idXR0b25cIik7XHJcbiAgICAgICAgdGhpcy5ib3RJbnRlZ3JhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8td2lkZ2V0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tY2hhcmFjdGVyLWNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1wiKTtcclxuICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tdXNlci1pbnB1dFwiKTtcclxuICAgICAgICB0aGlzLmhpZGVVc2VySW5wdXRDb250YWluZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLXdpZGdldC10b2dnbGUtYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWlsby11c2VyLWlucHV0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLnVzZXJJbnB1dENvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWlsby11c2VyLWlucHV0LWNvbnRhaW5lci10aXRsZVwiKTtcclxuICAgICAgICB0aGlzLmJvdE91dHB1dFRleHRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tYW5zd2VyLXRleHQtZmllbGRcIik7XHJcbiAgICAgICAgdGhpcy50eXBlSXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLWV4YW1wbGUtcXVlc3Rpb25zXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdFR5cGVJdCgpO1xyXG4gICAgICAgIC8vIEVuZCBvZiBjb25zdHJ1Y3RvclxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmplY3RzIGFsbCB0aGUgZGVwZW5kZW5jaWVzIGluIHRoZSBiYXNlIGNsYXNzZXMncyBjb25zdHJ1Y3Rvci5cclxuICAgICAqIFRoZSBjaGFyYWN0ZXIncyBIVE1MIFRlbXBsYXRlLCBpdHMgQ1NTIFRlbXBsYXRlIGFuZCBGb250IEF3ZXNvbWUgd2lsbCBiZSBhZGRlZCB0byB0aGUgRE9NLlxyXG4gICAgICogRXZlcnkgdmVyc2lvbiBvZiB0aGUgY2hhcmFjdGVyIG5lZWRzIHRoZXNlIGRlcGVuZGVuY2llcyB0byBvcGVyYXRlIHByb3Blcmx5LlxyXG4gICAgICovXHJcbiAgICBpbmplY3REZXBlbmRlbmNpZXMoKSB7XHJcbiAgICAgICAgdGhpcy5pbmplY3RIdG1sVGVtcGxhdGUoKTtcclxuICAgICAgICB0aGlzLmluamVjdENzc1RlbXBsYXRlKHRoaXMud2lkZ2V0VHlwZSk7XHJcbiAgICAgICAgdGhpcy5pbmplY3RGb250QXdlc29tZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEeW5hbWljYWxseSBpbmplY3RzIHRoZSBsaW5rIHRhZyBvZiB0aGUgY2hhcmFjdGVyJ3MgQ1NTIGludG8gdGhlIGhlYWQuXHJcbiAgICAgKiBAcGFyYW0gd2lkZ2V0VHlwZSBUeXBlIG9mIHRoZSBjaGFyYWN0ZXIuIFwic3RhbmRBbG9uZVwiIHwgXCJ0aW55V2lkZ2V0XCIgfCBcImhhbGZTY3JlZW5XaWRnZXRcIlxyXG4gICAgICovXHJcbiAgICBpbmplY3RDc3NUZW1wbGF0ZSh3aWRnZXRUeXBlKSB7XHJcbiAgICAgICAgY29uc3QgbGFpbG9TdHlsZVNoZWV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWlsby1zdHlsZXNoZWV0XCIpO1xyXG4gICAgICAgIGlmIChsYWlsb1N0eWxlU2hlZXQpIHtcclxuICAgICAgICAgICAgbGFpbG9TdHlsZVNoZWV0LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjc3NTb3VyY2UgPSB0aGlzLmNyZWF0ZUNTU1NvdXJjZSh3aWRnZXRUeXBlKTtcclxuICAgICAgICBjb25zdCBmaXJzdExpbmtUYWdJbkhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZCBsaW5rXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IENoYW5nZSBIUkVGIHRvIENETidzIHVybCBpbiBwcm9kdWN0aW9uXHJcbiAgICAgICAgY29uc3QgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XHJcbiAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcclxuICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgYGxhaWxvLXN0eWxlc2hlZXRgKTtcclxuICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgLi9kaXN0LyR7d2lkZ2V0VHlwZX0uY3NzYCk7XHJcbiAgICAgICAgLy8gY3NzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgY3NzU291cmNlISk7XHJcbiAgICAgICAgdGhpcy5oZWFkLmluc2VydEJlZm9yZShjc3MsIGZpcnN0TGlua1RhZ0luSGVhZCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluamVjdHMgdGhlIEZvbnQgQXdlc29tZSBDRE4gdG8gdGhlIGRvY3VtZW50J3MgaGVhZC4gRm9udCBBd2Vzb21lIGlzIG9uZSBvZiB0aGUgY2hhcmFjdGVyJ3MgZGVwZW5kZW5jaWVzIGFuZCB3aWxsIGJlIGR5bmFtaWNhbGx5IGluamVjdGVkIGludG8gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgaW5qZWN0Rm9udEF3ZXNvbWUoKSB7XHJcbiAgICAgICAgY29uc3QgZmlyc3RMaW5rVGFnSW5IZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWQgbGlua1wiKTtcclxuICAgICAgICBjb25zdCBmb250QXdlc29tZUNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG4gICAgICAgIGZvbnRBd2Vzb21lQ3NzLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XHJcbiAgICAgICAgZm9udEF3ZXNvbWVDc3Muc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xNC4wL2Nzcy9hbGwuY3NzXCIpO1xyXG4gICAgICAgIGZvbnRBd2Vzb21lQ3NzLnNldEF0dHJpYnV0ZShcImludGVncml0eVwiLCBcInNoYTM4NC1IekxlQnVob05QdlNsNUtZbmp4MEJUK1dCMFFFRXFMcHJPK05Ca2trNWdiYzY3RlRhTDdYSUdhMncxTDBYYmdjXCIpO1xyXG4gICAgICAgIGZvbnRBd2Vzb21lQ3NzLnNldEF0dHJpYnV0ZShcImNyb3Nzb3JpZ2luXCIsIFwiYW5vbnltb3VzXCIpO1xyXG4gICAgICAgIHRoaXMuaGVhZC5pbnNlcnRCZWZvcmUoZm9udEF3ZXNvbWVDc3MsIGZpcnN0TGlua1RhZ0luSGVhZCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyBhIFR5cGVJdCBvYmplY3QgdXNpbmcgdGhlIHR5cGVJdFN0cmluZ0FycmF5XHJcbiAgICAgKi9cclxuICAgIGluaXRUeXBlSXQoKSB7XHJcbiAgICAgICAgbmV3IFR5cGVJdChgIyR7dGhpcy50eXBlSXRDb250YWluZXIuaWR9YCwge1xyXG4gICAgICAgICAgICBzdHJpbmdzOiB0aGlzLnR5cGVJdFN0cmluZ0FycmF5LFxyXG4gICAgICAgICAgICBsaWZlTGlrZTogdHJ1ZSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgd2FpdFVudGlsVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgYnJlYWtMaW5lczogZmFsc2UsXHJcbiAgICAgICAgfSkuZ28oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIGVhY2ggaHRtbCBlbGVtZW50IHRoYXQgaGFkIGJlZW4gZGVjbGFyZWQgaW4gdGhlIGh0bWxUZXh0Q29udGVudENvbGxlY3Rpb24gb2JqZWN0LlxyXG4gICAgICogVGhpcyBtZXRob2QgbXVzdCBiZSBvdmVycmlkZGVuIGFuZCBhZGp1c3RlZCB0byB0aGUgZGVyaXZlZCBjbGFzcydzIGh0bWwgdGVtcGxhdGUgc3RydWN0dXJlLlxyXG4gICAgICovXHJcbiAgICBzZXRIdG1sVGV4dENvbnRlbnRzKCkge1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0Q29udGFpbmVyVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdLnVzZXJJbnB1dENvbnRhaW5lclRpdGxlO1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5odG1sVGV4dENvbnRlbnRDb2xsZWN0aW9uW3RoaXMubGFuZ3VhZ2VDb2RlXS51c2VySW5wdXRQbGFjZWhvbGRlclswXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRXZlcnkgdmVyc2lvbiBvZiBMYWlsbyBuZWVkcyBjdXN0b21pemVkIGV2ZW50IGxpc3RlbmVycy5cclxuICAgICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgb3ZlcnJpZGRlbiBhbmQgYWRqdXN0ZWQgdG8gdGhlIGRlcml2ZWQgY2xhc3MncyBodG1sIHRlbXBsYXRlIHN0cnVjdHVyZS5cclxuICAgICAqIERvbid0IGZvcmdldCB0byBjYWxsIHN1cGVyKCkuYWRkRXZlbnRMaXN0ZW5lcnMgdGhvdWdoID0pXHJcbiAgICAgKi9cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMubWljQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLm9uTGlzdGVuQnV0dG9uQ2xpY2soKSk7XHJcbiAgICAgICAgdGhpcy5zZW5kVGV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5vblNlbmRCdXR0b25DbGljaygpKTtcclxuICAgICAgICB0aGlzLnVzZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4gdGhpcy5jaGFuZ2VJbnB1dEJ1dHRvbk9uVXNlcklucHV0KCkpO1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4gdGhpcy5vbkVudGVyUHJlc3NlZChlKSk7XHJcbiAgICAgICAgdGhpcy5oaWRlVXNlcklucHV0Q29udGFpbmVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnRvZ2dsZUJvdEludGVncmF0aW9uQ29udGFpbmVyKCkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGluZyB0aGUgXCJjb250YWluZXItc2hvd1wiIGNsYXNzIG9uIHRoZSBib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgdG9nZ2xlQm90SW50ZWdyYXRpb25Db250YWluZXIoKSB7XHJcbiAgICAgICAgdGhpcy5ib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY29udGFpbmVyLXNob3dcIik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIG1vZGVsJ3Mgc3RhdGUgYWNjb3JkaW5nIHRvIHN0YWdlcyBvZiB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHN0YXRlIFwiYmVmb3JlQm90SW5pdGlhbGl6ZWRcIiB8IFwiaWRsZVwiIHwgXCJsaXN0ZW5pbmdcIiB8IFwiYW5zd2VyaW5nXCIgfCBcImVycm9yXCJcclxuICAgICAqIEBwYXJhbSBkYXRhIElCb3RSZXNwb25zZSBvYmplY3Qgd2hpY2ggd2lsbCBiZSB1c2VkIGluIFwiYW5zd2VyaW5nXCIgYW5kIFwiZXJyb3JcIiBzdGF0ZXNcclxuICAgICAqL1xyXG4gICAgc2V0Qm90U3RhdGUoc3RhdGUsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBzdGF0ZUFjdGlvbiA9IHRoaXMuYm90U3RhdGVDb2xsZWN0aW9uW3N0YXRlXTtcclxuICAgICAgICBzdGF0ZUFjdGlvbi5hcHBseVN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB1c2VyIGlucHV0J3MgdmFsdWUgdG8gbm90aGluZyAocmVzZXR0aW5nIHRoZSBmaWVsZClcclxuICAgICAqL1xyXG4gICAgY2xlYXJVc2VySW5wdXRGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLnVzZXJJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICAvKipTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgdXNlciBpbnB1dC4gSXQgd2lsbCBiZSBpbXBvcnRhbnQgaWYgdGhlIHVzZXIgdXNlZCB0aGUgbWljcm9waG9uZSB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBjaGFyYWN0ZXIgdG8gc2hvdyB3aGF0IHRoZSBjaGFyYWN0ZXIgdW5kZXJzdG9vZC5cclxuICAgICAqL1xyXG4gICAgc2V0VXNlcklucHV0Q29udGVudCh0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQudmFsdWUgPSB0ZXh0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgc2ltcGxlIEhUTUwgcGFyYWdyYXBoIGVsZW1lbnQgd2hpY2ggd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgYm90T3V0cHV0VGV4dEZpZWxkIGluIHRoZSBkZXJpdmVkIGNsYXNzZXMuXHJcbiAgICAgKiBAcGFyYW0gdGV4dCBUZXh0IGNvbnRlbnQgb2YgdGhlIHBhcmFncmFwaFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVQYXJhZ3JhcGgodGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBIVE1MIGFuY2hvciBlbGVtZW50IHdoaWNoIHdpbGwgYmUgZGlzcGxheWVkIGFzIGEgYnV0dG9uIHRvIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGEgbmV3IHRhYi5cclxuICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIGhyZWYgYXR0cmlidXRlIG9mIHRoZSBhbmNob3IgdGFnXHJcbiAgICAgKiBAcGFyYW0gY2FwdGlvbiBUZXh0IGNvbnRlbnQgb2YgdGhlIGFuY2hvciB0YWdcclxuICAgICAqL1xyXG4gICAgY3JlYXRlQW5jaG9yKHRhcmdldCwgY2FwdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdGFyZ2V0KTtcclxuICAgICAgICBhLmNsYXNzTmFtZSA9IFwibGFpbG8tbGlua1wiO1xyXG4gICAgICAgIGEudGV4dENvbnRlbnQgPSBjYXB0aW9uO1xyXG4gICAgICAgIGEudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgICAgICBhLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxscyB0aGUgb25TZW5kQnV0dG9uQ2xpY2sgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIGUgVGhlIGV2ZW50IG9iamVjdFxyXG4gICAgICovXHJcbiAgICBvbkVudGVyUHJlc3NlZChlKSB7XHJcbiAgICAgICAgaWYgKGUud2hpY2ggPT0gMTMpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNlbmRCdXR0b25DbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiB0aGUgaW5zZXJ0ZWQgdGV4dCBhbmQgY2FsbHMgdGhlIGNoYXJhY3RlcidzIHNlbmQgbWV0aG9kIHdpdGggdGhlIHVzZXIncyBpbnB1dFxyXG4gICAgICovXHJcbiAgICBvblNlbmRCdXR0b25DbGljaygpIHtcclxuICAgICAgICBjb25zdCB1c2VySW5wdXRWYWx1ZSA9IHRoaXMudXNlcklucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmICh1c2VySW5wdXRWYWx1ZSAhPSBcIlwiICYmIHVzZXJJbnB1dFZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIuc2VuZCh1c2VySW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VzIHRoZSBhc3NvY2lhdGl2ZSBhcnJheSBvZiBlcnJvciBtZXNzYWdlcyBhY2NvcmRpbmcgdG8gdGhlIGNob3NlbiBsYW5ndWFnZSB0byBmaW5kIHRoZSBtYXRjaGluZyBlcnJvciBtZXNzYWdlIHRvIGFuIGVycm9yIGNvZGUuXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDb2RlIEtleSBvZiB0aGUgZXJyb3Igb2JqZWN0IHdoaWNoIHdpbGwgYmUgc2VudCBieSB0aGUgc2VydmVyIGlmIHNvbWV0aGluZyBnb2VzIHdyb25nXHJcbiAgICAgKi9cclxuICAgIGZpbmRFcnJvck1lc3NhZ2UoZXJyb3JDb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlQ29sbGVjdGlvblt0aGlzLmxhbmd1YWdlQ29kZV1bZXJyb3JDb2RlXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbHMgdGhlIGNoYXJhY3RlcidzIFwibGlzdGVuXCIgZnVuY3Rpb24uXHJcbiAgICAgKiBIaWRlcyB0aGUgbWljcm9waG9uZSBpY29uIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgc3Bpbm5lciB1bnRpbCB0aGUgbGlzdGVuaW5nIHN0YXRlIGlzIGluaXRpYWxpemVkLlxyXG4gICAgICovXHJcbiAgICBvbkxpc3RlbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMubWljSWNvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgd2luZG93LmNoYXJhY3Rlci5saXN0ZW4oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNoYXJhY3RlcidzIHJlc3BvbnNlIHdpbGwgYmUgZXZhbHVhdGVkLiBJbiBjYXNlIG9mIGFuIElFcnJvckJvdFJlc3BvbnNlIHRoZSBcImhhbmRsZUJvdE91dHB1dElmRXJyb3JcIiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgYW5kIHRoaXMgbWV0aG9kIHdpbGwgYmUgdGVybWluYXRlZC5cclxuICAgICAqIE90aGVyd2lzZSB0aGUgSVN1Y2Nlc3NmdWxCb3RSZXBvbnNlIG9iamVjdCB3aWxsIGJlIGV2YWx1YXRlZCBhbmQgdGhlIHRleHQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGJvdCBhbnN3ZXIgY29udGFpbmVyLlxyXG4gICAgICogSWYgdGhlIFJlcG9uc2Ugb2JqZWN0IGNvbnRhaW5zIGFuIFwiYWN0aW9uc1wiIGFycmF5IG9mIG9iamVjdHMsIHRoYXQgYXJyYXkgd2lsbCBiZSBmaWx0ZXJlZCBvdXQgZm9yIGEgJ3VybFJlZGlyZWN0JyB0eXBlIHRvIHVzZSB0aGUgdXJsIGFuZCBjYXB0aW9uIHRvIGNyZWF0ZSBhIHJlZGlyZWN0aW5nIGFuY2hvciB0YWdcclxuICAgICAqIEBwYXJhbSBkYXRhIElCb3RSZXNwb25zZSBvYmplY3Qgd2hpY2ggY2FuIGJlIGFuIElTdWNjZXNzZnVsQm90UmVzcG9uc2Ugb3IgYW4gSUVycm9yQm90UmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSByZXNwb25zZVN0YXR1cyBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIlxyXG4gICAgICovXHJcbiAgICByZW5kZXJQYXJhZ3JhcGhzRnJvbUFuc3dlcihkYXRhLCByZXNwb25zZVN0YXR1cyA9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgdGhpcy5ib3RPdXRwdXRUZXh0RmllbGQuc3R5bGUuY29sb3IgPSBcImdyZXlcIjtcclxuICAgICAgICB0aGlzLmJvdE91dHB1dFRleHRGaWVsZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIC8vIEhhbmRsaW5nIGVycm9yc1xyXG4gICAgICAgIGlmIChyZXNwb25zZVN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQm90T3V0cHV0SWZFcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBIYW5kbGluZyBzdWNjZXNzZnVsIHJlc3BvbnNlc1xyXG4gICAgICAgIGNvbnN0IHsgdGV4dCwgYWN0aW9ucyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgcGFyYWdyYXBocyA9IFtdO1xyXG4gICAgICAgIHBhcmFncmFwaHMucHVzaCh0aGlzLmNyZWF0ZVBhcmFncmFwaCh0ZXh0KSk7XHJcbiAgICAgICAgLy8gSGFuZGxpbmcgdGhlIGFjdGlvbnMgaWYgdGhlcmUgYXJlIGFueVxyXG4gICAgICAgIGlmIChhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybEFjdGlvbnMgPSBhY3Rpb25zLmZpbHRlcigoYWN0aW9uKSA9PiBhY3Rpb24udHlwZSA9PT0gXCJ1cmxSZWRpcmVjdFwiKTtcclxuICAgICAgICAgICAgdXJsQWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLmNyZWF0ZUFuY2hvcihhY3Rpb24udXJsLCBhY3Rpb24uY2FwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhzLnB1c2goYSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhZ3JhcGhzLmZvckVhY2goKHApID0+IHRoaXMuYm90T3V0cHV0VGV4dEZpZWxkLnByZXBlbmQocCkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBIHNpbXBsZSByZWQgcGFyYWdyYXBoIHdpbGwgYmUgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGJvdE91dHB1dFRleHRGaWVsZC5cclxuICAgICAqIEBwYXJhbSBlcnJvciBJRXJyb3JCb3RSZXNwb25zZSBvYmplY3Qgd2hpY2ggY29udGFpbnMgYW4gZXJyb3JDb2RlIHByb3BlcnR5LlxyXG4gICAgICovXHJcbiAgICBoYW5kbGVCb3RPdXRwdXRJZkVycm9yKGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5ib3RPdXRwdXRUZXh0RmllbGQuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLmNyZWF0ZVBhcmFncmFwaCh0aGlzLmZpbmRFcnJvck1lc3NhZ2UoZXJyb3IuZXJyb3JDb2RlKSk7XHJcbiAgICAgICAgdGhpcy5ib3RPdXRwdXRUZXh0RmllbGQuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTGFpbG9UaW55V2lkZ2V0IH0gZnJvbSBcIi4vTGFpbG9UaW55V2lkZ2V0XCI7XHJcbmltcG9ydCBoYWxmU2NyZWVuV2lkZ2V0VGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGVzL2hhbGZTY3JlZW5XaWRnZXRUZW1wbGF0ZS5odG1sJztcclxuY2xhc3MgTGFpbG9IYWxmU2NyZWVuV2lkZ2V0IGV4dGVuZHMgTGFpbG9UaW55V2lkZ2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKGJvdFNlY3JldCwgbWFpbkNvbnRhaW5lcklkLCBjYW1lcmFBZGp1c3RtZW50LCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpIHtcclxuICAgICAgICBzdXBlcihib3RTZWNyZXQsIG1haW5Db250YWluZXJJZCwgY2FtZXJhQWRqdXN0bWVudCwgbGFuZ3VhZ2UsIHdpZGdldFR5cGUsIHR5cGVJdFN0cmluZ0FycmF5KTtcclxuICAgICAgICB0aGlzLmJvdFNlY3JldCA9IGJvdFNlY3JldDtcclxuICAgICAgICB0aGlzLm1haW5Db250YWluZXJJZCA9IG1haW5Db250YWluZXJJZDtcclxuICAgICAgICB0aGlzLmNhbWVyYUFkanVzdG1lbnQgPSBjYW1lcmFBZGp1c3RtZW50O1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgICAgICB0aGlzLndpZGdldFR5cGUgPSB3aWRnZXRUeXBlO1xyXG4gICAgICAgIHRoaXMudHlwZUl0U3RyaW5nQXJyYXkgPSB0eXBlSXRTdHJpbmdBcnJheTtcclxuICAgIH1cclxuICAgIGluamVjdEh0bWxUZW1wbGF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1haW5Db250YWluZXJJZCkuaW5uZXJIVE1MID0gaGFsZlNjcmVlbldpZGdldFRlbXBsYXRlLnRyaW0oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzaXplcyB0aGUgY2hhcmFjdGVyIGRlcGVuZGluZyBvbiB0aGUgYm90IGludGdyYXRpb24gY29udGFpbmVyJ3Mgc3RhdGUgKHNob3duL2hpZGRlbilcclxuICAgICAqIFJlc2l6aW5nIHdpbGwgZGVmZXIgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2UncyB3aWR0aFxyXG4gICAgICovXHJcbiAgICByZXNpemVCb3RJZlVzZXJJbnB1dEhpZGRlbigpIHtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA4NjgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm90SW50ZWdyYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250YWluZXItc2hvdycpKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLnJlc2l6ZSg2ODAsIDkzMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLnJlc2l6ZSgyMDAsIDM1NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIucmVzaXplKDMwMCwgNDU1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIH0sIDQwMCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGFpbG9IYWxmU2NyZWVuV2lkZ2V0O1xyXG4iLCJpbXBvcnQgeyBMYWlsb0Jhc2UgfSBmcm9tIFwiLi9MYWlsb0Jhc2VcIjtcclxuaW1wb3J0IHN0YW5kQWxvbmVUZW1wbGF0ZSBmcm9tIFwiLi4vdGVtcGxhdGVzL3N0YW5kQWxvbmVUZW1wbGF0ZS5odG1sXCI7XHJcbmV4cG9ydCBjbGFzcyBMYWlsb1N0YW5kQWxvbmUgZXh0ZW5kcyBMYWlsb0Jhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoYm90U2VjcmV0LCBtYWluQ29udGFpbmVyLCBjYW1lcmFBZGp1c3RtZW50ID0gXCJsb25nc2hvdFwiLCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpIHtcclxuICAgICAgICBzdXBlcihib3RTZWNyZXQsIG1haW5Db250YWluZXIsIGNhbWVyYUFkanVzdG1lbnQsIGxhbmd1YWdlLCB3aWRnZXRUeXBlLCB0eXBlSXRTdHJpbmdBcnJheSk7XHJcbiAgICAgICAgdGhpcy5ib3RTZWNyZXQgPSBib3RTZWNyZXQ7XHJcbiAgICAgICAgdGhpcy5tYWluQ29udGFpbmVyID0gbWFpbkNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmNhbWVyYUFkanVzdG1lbnQgPSBjYW1lcmFBZGp1c3RtZW50O1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgICAgICB0aGlzLndpZGdldFR5cGUgPSB3aWRnZXRUeXBlO1xyXG4gICAgICAgIHRoaXMudHlwZUl0U3RyaW5nQXJyYXkgPSB0eXBlSXRTdHJpbmdBcnJheTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUlucHV0UGFuZWxJY29ucyA9IHtcclxuICAgICAgICAgICAgXCJjbG9zZWRcIjogXCJmYXMgZmEtcGVuXCIsXHJcbiAgICAgICAgICAgIFwib3BlblwiOiBcImZhcyBmYS10aW1lc1wiXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIYW5kbGVzIHRoZSBjaGFyYWN0ZXIncyBzaXplIGFuZCBjYW1lcmEgYWRqdXN0bWVudCBkZXBlbmRpbmcgb24gdGhlIGlucHV0IHBhbmVsIHN0YXRlLlxyXG4gICAgICAgICAqIEFsc28gZHluYW1pY2FsbHkgY2hhbmdlcyB0aGUgaWNvbidzIG9mIHRoZSBoaWRlLXVzZXItaW5wdXQtY29udGFpbmVyLWJ1dHRvblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVXNlcklucHV0UGFuZWxTdGF0ZUNoYW5nZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDg2OSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBdmF0YXJWaWV3T25JbnB1dFBhbmVsT3BlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdEludGVncmF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImNvbnRhaW5lci1zaG93XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVVc2VySW5wdXRDb250YWluZXJCdG4ucXVlcnlTZWxlY3RvcihcIiNsYWlsby10b2dnbGUtaW5wdXQtcGFuZWwtaWNvblwiKS5jbGFzc05hbWUgPSB0aGlzLnRvZ2dsZUlucHV0UGFuZWxJY29uc1tcIm9wZW5cIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVVc2VySW5wdXRDb250YWluZXJCdG4ucXVlcnlTZWxlY3RvcihcIiNsYWlsby10b2dnbGUtaW5wdXQtcGFuZWwtaWNvblwiKS5jbGFzc05hbWUgPSB0aGlzLnRvZ2dsZUlucHV0UGFuZWxJY29uc1tcImNsb3NlZFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVzaXplcyB0aGUgYXZhdGFyIGRlcGVuZGluZyBvbiB0aGUgdXNlciBpbnB1dCBwYW5lbCdzIHN0YXRlLlxyXG4gICAgICAgICAqIElmIGNsb3NlZCwgdGhlIGNoYXJhY3RlciBpcyBpbiBsb25nc2hvdCBtb2RlIGFuZCBmaWxscyB0aGUgc2NyZWVuXHJcbiAgICAgICAgICogSWYgb3BlbiwgdGhlIGNoYXJhY3RlciBpcyBpbiBtZWRpdW0gbW9kZSBhbmQgd2lsbCBiZSBzaHJ1bmsgZG93blxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQXZhdGFyVmlld09uSW5wdXRQYW5lbE9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuZGVmYXVsdFNpemVQYXJhbXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdEludGVncmF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImNvbnRhaW5lci1zaG93XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUFkanVzdG1lbnQgPSBcImFtZXJpY2FuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUFkanVzdG1lbnQgPSBcImxvbmdzaG90XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmNoYXJhY3Rlci5hZGp1c3RDYW1lcmEodGhpcy5jYW1lcmFBZGp1c3RtZW50KTtcclxuICAgICAgICAgICAgd2luZG93LmNoYXJhY3Rlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH0sIDQ1MCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBLZWVwIGl0IGFuIGFycm93IGZ1bmN0aW9uIChpbnN0YW5jZSBtZXRob2QpIHRvIGtlZXAgdGhlIGNsYXNzJ3MgY29udGV4dCBmb3IgXCJ0aGlzXCJcclxuICAgICAgICAvLyBBZGRzIG9yIHJlbW92ZXMgdGhlIFwic2hvd1wiIGNsYXNzIG9uIHRoZSB1c2VySW5wdXRcclxuICAgICAgICB0aGlzLnRvZ2dsZVVzZXJJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2VySW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgICAgICAgICAgIC8vIFVuY29tbWVudCBpZiB5b3Ugd2FudCBhdXRvZm9jdXMgb24gdGhlIHVzZXIgaW5wdXQgaWYgdGhlIHBhbmVsIGlzIG9wZW4uIEhvd2V2ZXIsIGl0IGRvZXMgbm90IGZlZWwgZ29vZCBmcm9tIFVYIHBlcnNwZWN0aXZlIG9uIG1vYmlsZXMgYW5kIHRhYmxldHMuXHJcbiAgICAgICAgICAgIC8vIGlmKHRoaXMudXNlcklucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcInNob3dcIikpe1xyXG4gICAgICAgICAgICAvLyAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51c2VySW5wdXQuZm9jdXMoKSw0MDApXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldHMgdGhlIGNhbnZhcyBjb250cm9sIGdyb3VwJ3MgdXNlci1xdWVzdGlvbiBmaWVsZCB0byB0aGUgYXNrZWQgcXVlc3Rpb24gLyBzdGF0ZW1lbnRcclxuICAgICAgICAgKiBAcGFyYW0gdGV4dCBUaGUgdXNlciBpbnB1dCBmcm9tIHRhbGtpbmcgb3Igc2VuZGluZyBhIG1lc3NhZ2VcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnNldENhbnZhc1VzZXJRdWVzdGlvblRleHRDb250ZW50ID0gKHRleHQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNVc2VyUXVlc3Rpb24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2xlYXJzIHRoZSB1c2VyIHF1ZXN0aW9uIGZpZWxkIGluIHRoZSBjYW52YXMgY29udHJvbCBncm91cFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY2xlYXJVc2VyUXVlc3Rpb25GaWVsZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNVc2VyUXVlc3Rpb24udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgZGVmYXVsdCBzaXplIGRlcGVuZGluZyBvbiB0aGUgZGV2aWNlJ3Mgd2lkdGhcclxuICAgICAgICB0aGlzLmRlZmF1bHRTaXplUGFyYW1zID0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoID4gODAwID8gNzUwIDogMzAwLFxyXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggPiA4MDAgPyA5MDAgOiA1NTBcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEJhc2UgdGVtcGxhdGUgYW5kIGRlcGVuZGVuY2llcyB3aWxsIGJlIGluamVjdGVkIGJ5IHJ1bm5pbmcgdGhlIGJhc2UgY2xhc3MncyBjb25zdHJ1Y3Rvci5cclxuICAgICAgICB0aGlzLmNhbnZhc01pY0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tY2FudmFzLW1pY3JvcGhvbmUtYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzVXNlclF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWlsby1jYW52YXMtdXNlci1xdWVzdGlvblwiKTtcclxuICAgICAgICB0aGlzLmNhbnZhc0xvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLWNhbnZhcy1sb2FkaW5nXCIpO1xyXG4gICAgICAgIC8vIEFwcGx5IHN0YXRlIGlzIGEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHRoZSBjaGFuZ2VzIG9mIGRpZmZlcmVudCBib3Qgc3RhdGVzIGJ5IGR5bmFtaWNhbGx5IGFkZGluZyBhbmQgcmVtb3ZpbmcgY3NzIGNsYXNzZXMuXHJcbiAgICAgICAgdGhpcy5ib3RTdGF0ZUNvbGxlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIGJlZm9yZUJvdEluaXRpYWxpemVkOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taWNCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNNaWNCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNMb2FkaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpZGxlOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdiZWZvcmUtaW5pdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzTG9hZGluZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RlbmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzTWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzTWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzTWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RlbmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNMb2FkaW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdLnVzZXJJbnB1dFBsYWNlaG9sZGVyWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJVc2VyUXVlc3Rpb25GaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJVc2VySW5wdXRGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlSW5wdXRCdXR0b25PblVzZXJJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlzdGVuaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0xvYWRpbmcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0ljb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QuYWRkKCdsaXN0ZW5pbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc01pY0J0bi5jbGFzc0xpc3QuYWRkKCdsaXN0ZW5pbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuaHRtbFRleHRDb250ZW50Q29sbGVjdGlvblt0aGlzLmxhbmd1YWdlQ29kZV0udXNlcklucHV0UGxhY2Vob2xkZXJbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNVc2VyUXVlc3Rpb24udGV4dENvbnRlbnQgPSB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdLnVzZXJJbnB1dFBsYWNlaG9sZGVyWzFdO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5zd2VyaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0LmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYXJhZ3JhcGhzRnJvbUFuc3dlcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYXJhZ3JhcGhzRnJvbUFuc3dlcihlcnIsICdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90U3RhdGVDb2xsZWN0aW9uWydpZGxlJ10uYXBwbHlTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0SHRtbFRleHRDb250ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICAgIGluamVjdEh0bWxUZW1wbGF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1haW5Db250YWluZXJJZCkuaW5uZXJIVE1MID0gc3RhbmRBbG9uZVRlbXBsYXRlLnRyaW0oKTtcclxuICAgIH1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNNaWNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMub25MaXN0ZW5CdXR0b25DbGlja2VkKCkpO1xyXG4gICAgICAgIHRoaXMuaGlkZVVzZXJJbnB1dENvbnRhaW5lckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5oYW5kbGVVc2VySW5wdXRQYW5lbFN0YXRlQ2hhbmdlcygpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0aGUgY2FudmFzIG1pY3JvcGhvbmUgYnV0dG9uIGFuZCBhbHNvIGNhbGxzIHRoZSBiYXNlIGNsYXNzZXMgb25MaXN0ZW5CdXR0b25DbGljayBpbnN0YW5jZSBtZXRob2RcclxuICAgICAqL1xyXG4gICAgb25MaXN0ZW5CdXR0b25DbGlja2VkKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzTG9hZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB0aGlzLmNhbnZhc01pY0J0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB0aGlzLm9uTGlzdGVuQnV0dG9uQ2xpY2soKTtcclxuICAgIH1cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmNoYXJhY3Rlci5pbml0KHtcclxuICAgICAgICAgICAgICAgIG9uSW5pdGlhbGlzZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJvdFN0YXRlKFwiaWRsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IHRoaXMuZGVmYXVsdFNpemVQYXJhbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNoYXJhY3Rlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh3aW5kb3cuY2hhcmFjdGVyKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblF1ZXN0aW9uQXNrZWQ6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm8gYW5zd2VyIHdhcyBhc2tlZCAodmlhIG1pY3JvcGhvbmUpIGFuIGVtcHR5IG9iamVjdCB3aWxsIGJlIHJlY2VpdmVkIHdpdGggYWJzb2x1dGVseSBubyBrZXlzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFyYWdyYXBoc0Zyb21BbnN3ZXIoeyB0ZXh0OiAnLi4uJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNVc2VyUXVlc3Rpb25UZXh0Q29udGVudChcIi4uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZSgnaWRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VXNlcklucHV0Q29udGVudChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FudmFzVXNlclF1ZXN0aW9uVGV4dENvbnRlbnQoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkFuc3dlcmVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZShcImlkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25BbnN3ZXI6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZShcImFuc3dlcmluZ1wiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZShcImVycm9yXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25MaXN0ZW5pbmc6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJvdFN0YXRlKFwibGlzdGVuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwgdGhpcy5jaGFyYWN0ZXJDb250YWluZXIsIHRoaXMuYm90U2VjcmV0LCB0aGlzLmxhbmd1YWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBMYWlsb0Jhc2UgfSBmcm9tICcuL0xhaWxvQmFzZSc7XHJcbmltcG9ydCB0aW55V2lkZ2V0VGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGVzL3RpbnlXaWRnZXRUZW1wbGF0ZS5odG1sJztcclxuZXhwb3J0IGNsYXNzIExhaWxvVGlueVdpZGdldCBleHRlbmRzIExhaWxvQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib3RTZWNyZXQsIG1haW5Db250YWluZXJJZCwgY2FtZXJhQWRqdXN0bWVudCwgbGFuZ3VhZ2UsIHdpZGdldFR5cGUsIHR5cGVJdFN0cmluZ0FycmF5KSB7XHJcbiAgICAgICAgc3VwZXIoYm90U2VjcmV0LCBtYWluQ29udGFpbmVySWQsIGNhbWVyYUFkanVzdG1lbnQsIGxhbmd1YWdlLCB3aWRnZXRUeXBlLCB0eXBlSXRTdHJpbmdBcnJheSk7XHJcbiAgICAgICAgdGhpcy5ib3RTZWNyZXQgPSBib3RTZWNyZXQ7XHJcbiAgICAgICAgdGhpcy5tYWluQ29udGFpbmVySWQgPSBtYWluQ29udGFpbmVySWQ7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFBZGp1c3RtZW50ID0gY2FtZXJhQWRqdXN0bWVudDtcclxuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgdGhpcy53aWRnZXRUeXBlID0gd2lkZ2V0VHlwZTtcclxuICAgICAgICB0aGlzLnR5cGVJdFN0cmluZ0FycmF5ID0gdHlwZUl0U3RyaW5nQXJyYXk7XHJcbiAgICAgICAgLy8gQmFzZSB0ZW1wbGF0ZSBhbmQgZGVwZW5kZW5jaWVzIHdpbGwgYmUgaW5qZWN0ZWQgYnkgcnVubmluZyB0aGUgYmFzZSBjbGFzcydzIGNvbnN0cnVjdG9yLlxyXG4gICAgICAgIC8vIFRoZSBvdmVycmlkZW4gaW5qZWN0SHRtbFRlbXBsYXRlKCkgdGFrZXMgY2FyZSBvZiB0aGUgaHRtbCBzdHJ1Y3R1cmUgdGhhdCBpcyBuZWVkZWQgYnkgdGhpcyBwYXJ0aWN1bGFyIHdpZGdldC5cclxuICAgICAgICB0aGlzLmFza01lQ29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXNrLW1lLWNvbnRhaW5lci10aXRsZScpO1xyXG4gICAgICAgIHRoaXMuYm90U3RhdGVDb2xsZWN0aW9uID0ge1xyXG4gICAgICAgICAgICBiZWZvcmVCb3RJbml0aWFsaXplZDoge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlTdGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVVzZXJJbnB1dENvbnRhaW5lckJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlkbGU6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdEludGVncmF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JlZm9yZS1pbml0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlVXNlcklucHV0Q29udGFpbmVyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RlbmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taWNJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmF0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuaHRtbFRleHRDb250ZW50Q29sbGVjdGlvblt0aGlzLmxhbmd1YWdlQ29kZV0udXNlcklucHV0UGxhY2Vob2xkZXJbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclVzZXJJbnB1dEZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dEJ1dHRvbk9uVXNlcklucHV0KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaXN0ZW5pbmc6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5hZGQoJ2xpc3RlbmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5odG1sVGV4dENvbnRlbnRDb2xsZWN0aW9uW3RoaXMubGFuZ3VhZ2VDb2RlXS51c2VySW5wdXRQbGFjZWhvbGRlclsxXTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFuc3dlcmluZzoge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlTdGF0ZTogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFyYWdyYXBoc0Zyb21BbnN3ZXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlTdGF0ZTogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFyYWdyYXBoc0Zyb21BbnN3ZXIoZXJyLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdFN0YXRlQ29sbGVjdGlvblsnaWRsZSddLmFwcGx5U3RhdGUodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldEh0bWxUZXh0Q29udGVudHMoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluamVjdGluZyB0aGUgd2lkZ2V0J3MgdGVtcGxhdGVcclxuICAgICAqL1xyXG4gICAgaW5qZWN0SHRtbFRlbXBsYXRlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubWFpbkNvbnRhaW5lcklkKS5pbm5lckhUTUwgPSB0aW55V2lkZ2V0VGVtcGxhdGUudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXR0aW5nIHRoZSB0aXRsZSBvZiB0aGUgYXNrIG1lIGNvbnRhaW5lciwgdGhlIHVzZXIgaW5wdXQgY29udGFpbmVyIGFuZCB0aGUgcGxhY2Vob2xkZXIgb2YgdGhlIHVzZXIgaW5wdXRcclxuICAgICAqIFRoZSBjaG9zZW4gbGFuZ3VhZ2UgKG9yIEVuZ2xpc2ggYXMgZmFsbGJhY2spIHdpbGwgYmUgdXNlZCB0byBmaWx0ZXIgb3V0IHRoZSBtYXRjaGluZyB0ZXh0Y29udGVudHMgZnJvbSB0aGUgaHRtbFRleHRDb250ZW50Q29sbGVjdGlvbiBvYmplY3RcclxuICAgICAqL1xyXG4gICAgc2V0SHRtbFRleHRDb250ZW50cygpIHtcclxuICAgICAgICBzdXBlci5zZXRIdG1sVGV4dENvbnRlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRBc2tNZUNvbnRhaW5lclRpdGxlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIER5bmFtaWNhbGx5IGNoYW5nZXMgdGhlIGFzayBtZSBjb250YWluZXIncyB0aXRsZSBkZXBlbmRpbmcgb24gdGhlIGJvdCBpbnRlZ3JhdGlvbiBjb250YWluZXIncyBzdGF0ZSAoc2hvd24vaGlkZGVuKVxyXG4gICAgICovXHJcbiAgICBzZXRBc2tNZUNvbnRhaW5lclRpdGxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJvdEludGVncmF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImNvbnRhaW5lci1zaG93XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXNrTWVDb250YWluZXJUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuaHRtbFRleHRDb250ZW50Q29sbGVjdGlvblt0aGlzLmxhbmd1YWdlQ29kZV0uYXNrTWVDb250YWluZXJUaXRsZVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXNrTWVDb250YWluZXJUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuaHRtbFRleHRDb250ZW50Q29sbGVjdGlvblt0aGlzLmxhbmd1YWdlQ29kZV0uYXNrTWVDb250YWluZXJUaXRsZVswXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGxzIHRoZSBiYXNlIGNsYXNzZXMgcHJvdG90eXBlIG1ldGhvZC4gQ29udmVydGVkIGludG8gYW4gaW5zdGFuY2UgbWV0aG9kIGluIHRoZSBkZXJpdmVkIGNsYXNzIHRvIGVuc3VyZSB0aGUgcmlnaHQgY29udGV4dCBvZiBcInRoaXNcIlxyXG4gICAgICovXHJcbiAgICB0b2dnbGVCb3RJbnRlZ3JhdGlvbkNvbnRhaW5lcigpIHtcclxuICAgICAgICBzdXBlci50b2dnbGVCb3RJbnRlZ3JhdGlvbkNvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMuc2V0QXNrTWVDb250YWluZXJUaXRsZSgpO1xyXG4gICAgICAgIHRoaXMucmVzaXplQm90SWZVc2VySW5wdXRIaWRkZW4oKTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmVzaXppbmcgdGhlIGNoYXJhY3RlciBpZiB0aGUgYm90SW50ZWdyYXRpb25Db250YWluZXIgZG9lcyBub3QgaGF2ZSB0aGUgXCJjb250YWluZXItc2hvd1wiIGNsYXNzLlxyXG4gICAgICogVGhpcyBwcmV2ZW50cyB0aGUgd2VpcmQgdHJhbnNpdGlvbiB3aGVuIHRoZSBjaGFyYWN0ZXIgZ2V0cyByZXNpemVkIGFuZCByZWxvY2F0ZWQuIEFuZCBpdCBqdXN0IGxvb2tzIGNvb2wgaWYgaGUgZmFkZXMgb3V0LSBhbmQgaW4gOilcclxuICAgICAqL1xyXG4gICAgcmVzaXplQm90SWZVc2VySW5wdXRIaWRkZW4oKSB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuYm90SW50ZWdyYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250YWluZXItc2hvdycpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIucmVzaXplKDQ1MCwgNjg1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIucmVzaXplKDIwMCwgMzU1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIH0sIDQwMCk7XHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICBvbkluaXRpYWxpc2VkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZSgnaWRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIuYWRqdXN0Q2FtZXJhKHRoaXMuY2FtZXJhQWRqdXN0bWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVCb3RJZlVzZXJJbnB1dEhpZGRlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUod2luZG93LmNoYXJhY3Rlcik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25RdWVzdGlvbkFza2VkOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vIGFuc3dlciB3YXMgYXNrZWQgKHZpYSBtaWNyb3Bob25lKSBhbiBlbXB0eSBvYmplY3Qgd2lsbCBiZSByZWNlaXZlZCB3aXRoIGFic29sdXRlbHkgbm8ga2V5c1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclBhcmFncmFwaHNGcm9tQW5zd2VyKHsgdGV4dDogJ0tlaW5lIEZyYWdlIGdlc3RlbGx0Li4uJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZSgnaWRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VXNlcklucHV0Q29udGVudChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQW5zd2VyZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJvdFN0YXRlKCdpZGxlJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25BbnN3ZXI6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZSgnYW5zd2VyaW5nJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoJ2Vycm9yJywgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uTGlzdGVuaW5nOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZSgnbGlzdGVuaW5nJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LCB0aGlzLmNoYXJhY3RlckNvbnRhaW5lciwgdGhpcy5ib3RTZWNyZXQsIHRoaXMubGFuZ3VhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgaWQ9XFxcImxhaWxvLXdpZGdldC1jb250YWluZXJcXFwiIGNsYXNzPVxcXCJiZWZvcmUtaW5pdFxcXCI+XFxyXFxuICA8ZGl2IGlkPVxcXCJhc2stbWUtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibGFpbG8td2lkZ2V0LXRvZ2dsZS1idXR0b25cXFwiIGNsYXNzPVxcXCJib3QtY29udHJvbC1lbGVtZW50XFxcIj48aSBpZD1cXFwiaGlkZS1pY29uXFxcIiBjbGFzcz1cXFwiZmFzIGZhLWFycm93LWxlZnRcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgPHNwYW4gaWQ9XFxcImFzay1tZS1jb250YWluZXItdGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBpZD1cXFwibGFpbG8tdXNlci1pbnB1dC1jb250YWluZXJcXFwiPlxcclxcbiAgICA8aDUgaWQ9XFxcImxhaWxvLXVzZXItaW5wdXQtY29udGFpbmVyLXRpdGxlXFxcIj48L2g1PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJsYWlsby1jaGFyYWN0ZXItY2FudmFzXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibGFpbG8tY29udHJvbC1ncm91cFxcXCI+XFxyXFxuICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJsYWlsby11c2VyLWlucHV0XFxcIiAvPlxcclxcbiAgICAgIDxidXR0b24gaWQ9XFxcImxhaWxvLW1pY3JvcGhvbmUtYnV0dG9uXFxcIiBjbGFzcz1cXFwiYm90LWNvbnRyb2wtZWxlbWVudFxcXCI+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLW1pY3JvcGhvbmVcXFwiIGlkPVxcXCJsYWlsby1taWNyb3Bob25lLWljb25cXFwiPjwvaT5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImxvYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPGJ1dHRvbiBpZD1cXFwibGFpbG8tc2VuZC10ZXh0LWJ1dHRvblxcXCIgY2xhc3M9XFxcImJvdC1jb250cm9sLWVsZW1lbnRcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhciBmYS1wYXBlci1wbGFuZVxcXCIgaWQ9XFxcImxhaWxvLXNlbmQtdGV4dC1pY29uXFxcIj48L2k+XFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJsYWlsby1hbnN3ZXItdGV4dC1maWVsZFxcXCI+PC9kaXY+XFxyXFxuICAgIDxwIGlkPVxcXCJsYWlsby1leGFtcGxlLXF1ZXN0aW9uc1xcXCIgZGF0YS10eXBlaXQtaWQ9XFxcImV4YW1wbGUtcXVlc3Rpb25zXFxcIj48L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGlkPVxcXCJsYWlsby13aWRnZXQtY29udGFpbmVyXFxcIiBjbGFzcz1cXFwiYmVmb3JlLWluaXRcXFwiPlxcclxcbiAgPGJ1dHRvbiBpZD1cXFwibGFpbG8td2lkZ2V0LXRvZ2dsZS1idXR0b25cXFwiIGNsYXNzPVxcXCJib3QtY29udHJvbC1lbGVtZW50XFxcIj5cXHJcXG4gICAgPGkgY2xhc3M9XFxcImZhcyBmYS1wZW5cXFwiIGlkPVxcXCJsYWlsby10b2dnbGUtaW5wdXQtcGFuZWwtaWNvblxcXCI+PC9pPlxcclxcbiAgPC9idXR0b24+XFxyXFxuICA8ZGl2IGlkPVxcXCJsYWlsby1jaGFyYWN0ZXItY2FudmFzXFxcIj5cXHJcXG4gICAgPGRpdiBpZD1cXFwibGFpbG8tY2FudmFzLWNvbnRyb2wtZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxkaXYgaWQ9XFxcImxhaWxvLWNhbnZhcy1sb2FkaW5nXFxcIiBjbGFzcz1cXFwiaGlkZGVuXFxcIj5cXHJcXG4gICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBpZD1cXFwibGFpbG8tY2FudmFzLXVzZXItcXVlc3Rpb25cXFwiPldoYXQgY2FuIHlvdSBkbyBmb3IgbWUsIGhhbGxvIGhhbGxvIGhhbGxvIGhhbGxvIGhhbGxvPzwvZGl2PlxcclxcbiAgICAgIDxidXR0b24gaWQ9XFxcImxhaWxvLWNhbnZhcy1taWNyb3Bob25lLWJ1dHRvblxcXCIgY2xhc3M9XFxcImJvdC1jb250cm9sLWVsZW1lbnRcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1taWNyb3Bob25lXFxcIiBpZD1cXFwibGFpbG8tY2FudmFzLW1pY3JvcGhvbmUtaWNvblxcXCI+PC9pPlxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBpZD1cXFwibGFpbG8tdXNlci1pbnB1dC1jb250YWluZXJcXFwiPlxcclxcbiAgICA8aDUgaWQ9XFxcImxhaWxvLXVzZXItaW5wdXQtY29udGFpbmVyLXRpdGxlXFxcIj48L2g1PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsYWlsby1jb250cm9sLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImxhaWxvLXVzZXItaW5wdXRcXFwiIC8+XFxyXFxuICAgICAgPGJ1dHRvbiBpZD1cXFwibGFpbG8tbWljcm9waG9uZS1idXR0b25cXFwiIGNsYXNzPVxcXCJib3QtY29udHJvbC1lbGVtZW50XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtbWljcm9waG9uZVxcXCIgaWQ9XFxcImxhaWxvLW1pY3JvcGhvbmUtaWNvblxcXCI+PC9pPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwibG9hZGluZ1xcXCI+XFxyXFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8YnV0dG9uIGlkPVxcXCJsYWlsby1zZW5kLXRleHQtYnV0dG9uXFxcIiBjbGFzcz1cXFwiYm90LWNvbnRyb2wtZWxlbWVudFxcXCI+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmFyIGZhLXBhcGVyLXBsYW5lXFxcIiBpZD1cXFwibGFpbG8tc2VuZC10ZXh0LWljb25cXFwiPjwvaT5cXHJcXG4gICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxwIGlkPVxcXCJsYWlsby1leGFtcGxlLXF1ZXN0aW9uc1xcXCIgZGF0YS10eXBlaXQtaWQ9XFxcImV4YW1wbGUtcXVlc3Rpb25zXFxcIj48L3A+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImxhaWxvLWFuc3dlci10ZXh0LWZpZWxkXFxcIj48L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgaWQ9XFxcImxhaWxvLXdpZGdldC1jb250YWluZXJcXFwiIGNsYXNzPVxcXCJiZWZvcmUtaW5pdFxcXCI+XFxyXFxuICA8ZGl2IGlkPVxcXCJhc2stbWUtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBpZD1cXFwibGFpbG8td2lkZ2V0LXRvZ2dsZS1idXR0b25cXFwiIGNsYXNzPVxcXCJib3QtY29udHJvbC1lbGVtZW50XFxcIj48aSBpZD1cXFwiaGlkZS1pY29uXFxcIiBjbGFzcz1cXFwiZmFzIGZhLWFycm93LWxlZnRcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgPHNwYW4gaWQ9XFxcImFzay1tZS1jb250YWluZXItdGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBpZD1cXFwibGFpbG8tY2hhcmFjdGVyLWNhbnZhc1xcXCI+PC9kaXY+XFxyXFxuICA8ZGl2IGlkPVxcXCJsYWlsby11c2VyLWlucHV0LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxoNSBpZD1cXFwibGFpbG8tdXNlci1pbnB1dC1jb250YWluZXItdGl0bGVcXFwiPjwvaDU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImxhaWxvLWNvbnRyb2wtZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwibGFpbG8tdXNlci1pbnB1dFxcXCIgLz5cXHJcXG4gICAgICA8YnV0dG9uIGlkPVxcXCJsYWlsby1taWNyb3Bob25lLWJ1dHRvblxcXCIgY2xhc3M9XFxcImJvdC1jb250cm9sLWVsZW1lbnRcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1taWNyb3Bob25lXFxcIiBpZD1cXFwibGFpbG8tbWljcm9waG9uZS1pY29uXFxcIj48L2k+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiaGlkZGVuXFxcIj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDxidXR0b24gaWQ9XFxcImxhaWxvLXNlbmQtdGV4dC1idXR0b25cXFwiIGNsYXNzPVxcXCJib3QtY29udHJvbC1lbGVtZW50XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYXIgZmEtcGFwZXItcGxhbmVcXFwiIGlkPVxcXCJsYWlsby1zZW5kLXRleHQtaWNvblxcXCI+PC9pPlxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHAgaWQ9XFxcImxhaWxvLWV4YW1wbGUtcXVlc3Rpb25zXFxcIiBkYXRhLXR5cGVpdC1pZD1cXFwiZXhhbXBsZS1xdWVzdGlvbnNcXFwiPjwvcD5cXHJcXG4gICAgPGRpdiBpZD1cXFwibGFpbG8tYW5zd2VyLXRleHQtZmllbGRcXFwiPjwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7Il0sInNvdXJjZVJvb3QiOiIifQ==