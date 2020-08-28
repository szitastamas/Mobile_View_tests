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
                return error;
            }
        case "halfScreenWidget":
            try {
                const lailo = new _models_LailoHalfScreenWidget__WEBPACK_IMPORTED_MODULE_2__["default"](botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray);
                return lailo.initialize();
            }
            catch (error) {
                return error;
            }
        case "standAlone":
            try {
                cameraAdjustment = "longshot";
                const lailo = new _models_LailoStandAlone__WEBPACK_IMPORTED_MODULE_0__["LailoStandAlone"](botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray);
                return lailo.initialize();
            }
            catch (error) {
                return error;
            }
        default:
            throw new Error("Lailo could not be initialized. Please double check your initialization object.");
    }
};
// export const init = ({
//   botSecret,
//   widgetType = "tinyWidget",
//   mainContainerId = "lailo-smart-character",
//   cameraAdjustment = "medium",
//   language = "en-US",
//   typeItStringArray,
// }: IInitObject): Promise<object> => {
//   if (!typeItStringArray) typeItStringArray = setDefaultTypeIt(language);
//   switch (widgetType) {
//     case "standAlone":
//       return new Promise((resolve, reject) => {
//         try {
//           cameraAdjustment = "longshot";
//           const lailo = new LailoStandAlone(botSecret, mainContainerId, cameraAdjustment, language, widgetType, typeItStringArray!);
//           resolve(lailo.initialize());
//         } catch (error) {
//           reject(error);
//         }
//       });
//     case "tinyWidget":
//       return new Promise((resolve, reject) => {
//         try {
//           cameraAdjustment = "medium";
//           const lailo = new LailoTinyWidget(
//             botSecret,
//             mainContainerId,
//             cameraAdjustment,
//             language,
//             widgetType,
//             typeItStringArray!
//           );
//           resolve(lailo.initialize());
//         } catch (error) {
//           reject(error);
//         }
//       });
//     case "halfScreenWidget":
//       return new Promise((resolve, reject) => {
//         try {
//           cameraAdjustment = "medium";
//           const lailo = new LailoHalfScreenWidget(
//             botSecret,
//             mainContainerId,
//             cameraAdjustment,
//             language,
//             widgetType,
//             typeItStringArray!
//           );
//           resolve(lailo.initialize());
//         } catch (error) {
//           reject(error);
//         }
//       });
//     default:
//       return new Promise((resolve, reject) =>
//         reject({
//           msg:
//             "Unable to create Lailo. Please double check the inserted widget-type, the default container id and your bot secret!",
//         })
//       );
//   }
// };


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
            const cdnScriptSource = (_a = Array.from(document.querySelectorAll("script")).find(scriptElement => scriptElement.src.includes("lailo/smart-character"))) === null || _a === void 0 ? void 0 : _a.src;
            if (!cdnScriptSource)
                return;
            const urlFragments = cdnScriptSource.split("/");
            urlFragments[urlFragments.length - 1] = `${widgetType}.css`;
            return urlFragments.join("/");
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
        this.hideUserInputContainerBtn = document.getElementById('lailo-widget-toggle-button');
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
     * Don't forget to call super().addEventListeners though =)
     */
    addEventListeners() {
        this.micBtn.addEventListener("click", () => this.onListenButtonClick());
        this.userInput.addEventListener("keypress", (e) => this.onEnterPressed(e));
        this.hideUserInputContainerBtn.addEventListener('click', () => this.toggleBotIntegrationContainer());
    }
    /**
     * Toggling the "container-show" class on the botIntegrationContainer.
     */
    toggleBotIntegrationContainer() {
        this.botIntegrationContainer.classList.toggle('container-show');
    }
    ;
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
     * Calls the character's "listen" function.
     * Hides the microphone icon and displays a loading spinner until the listening state is initialized.
     */
    onListenButtonClick() {
        this.micIcon.classList.add("hidden");
        this.loader.classList.remove("hidden");
        window.character.listen();
    }
    ;
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
            if (this.botIntegrationContainer.classList.contains("container-show")) {
                this.cameraAdjustment = "medium";
            }
            else {
                this.cameraAdjustment = "longshot";
            }
            window.character.adjustCamera(this.cameraAdjustment);
            setTimeout(() => {
                this.characterContainer.classList.remove("hide");
            }, 450);
        };
        // Keep it an arrow function (instance method)
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
       * Checks the validity of the inserted text and calls the character's send method with the user's input
       */
        this.onSendButtonClick = () => {
            const userInputValue = this.userInput.value;
            if (userInputValue != '' && userInputValue.replace(/\s/g, '').length > 0) {
                window.character.send(userInputValue);
            }
        };
        /**
         * Dynamically displays either the send button (if there is a user input) or the microphone button
         */
        this.changeInputButtonOnUserInput = () => {
            if (this.userInput.value.length > 0) {
                this.micBtn.style.zIndex = '-1';
                this.sendTextButton.style.zIndex = '5000';
            }
            else {
                this.micBtn.style.zIndex = '5000';
                this.sendTextButton.style.zIndex = '-1';
            }
        };
        this.clearUserQuestionField = () => {
            this.canvasUserQuestion.textContent = "";
        };
        this.defaultSizeParams = {
            height: 900,
            width: 750
        };
        // Base template and dependencies will be injected by running the base class's constructor.
        this.sendTextButton = document.getElementById("lailo-send-text-button");
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
        this.sendTextButton.addEventListener("click", () => this.onSendButtonClick());
        this.canvasMicBtn.addEventListener("click", () => this.onListenButtonClicked());
        this.userInput.addEventListener('input', () => this.changeInputButtonOnUserInput());
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
                        this.renderParagraphsFromAnswer({ text: 'Keine Frage gestellt...' });
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
var code = "<div id=\"lailo-widget-container\" class=\"before-init\">\r\n  <div id=\"ask-me-container\">\r\n    <button id=\"lailo-widget-toggle-button\" class=\"bot-control-element\"><i id=\"hide-icon\" class=\"fas fa-arrow-left\"></i></button>\r\n    <span id=\"ask-me-container-title\"></span>\r\n  </div>\r\n  <div id=\"lailo-user-input-container\">\r\n    <h5 id=\"lailo-user-input-container-title\"></h5>\r\n    <div id=\"lailo-character-canvas\"></div>\r\n    <div class=\"lailo-control-group\">\r\n      <input type=\"text\" id=\"lailo-user-input\" />\r\n      <button id=\"lailo-microphone-button\" class=\"bot-control-element\">\r\n        <i class=\"fas fa-microphone\" id=\"lailo-microphone-icon\"></i>\r\n        <div id=\"loading\">\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n        </div>\r\n      </button>\r\n    </div>\r\n    <div id=\"lailo-answer-text-field\"></div>\r\n    <p id=\"lailo-example-questions\" data-typeit-id=\"example-questions\"></p>\r\n  </div>\r\n</div>";
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
var code = "<div id=\"lailo-widget-container\" class=\"before-init\">\r\n  <div id=\"ask-me-container\">\r\n    <button id=\"lailo-widget-toggle-button\" class=\"bot-control-element\"><i id=\"hide-icon\" class=\"fas fa-arrow-left\"></i></button>\r\n    <span id=\"ask-me-container-title\"></span>\r\n  </div>\r\n  <div id=\"lailo-character-canvas\"></div>\r\n  <div id=\"lailo-user-input-container\">\r\n    <h5 id=\"lailo-user-input-container-title\"></h5>\r\n    <div class=\"lailo-control-group\">\r\n      <input type=\"text\" id=\"lailo-user-input\" />\r\n      <button id=\"lailo-microphone-button\" class=\"bot-control-element\">\r\n        <i class=\"fas fa-microphone\" id=\"lailo-microphone-icon\"></i>\r\n        <div id=\"loading\" class=\"hidden\">\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n        </div>\r\n      </div>\r\n    </button>\r\n    <p id=\"lailo-example-questions\" data-typeit-id=\"example-questions\"></p>\r\n    <div id=\"lailo-answer-text-field\"></div>\r\n  </div>\r\n</div>";
// Exports
module.exports = code;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MYWlsby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MYWlsby8uL25vZGVfbW9kdWxlcy90eXBlaXQvZGlzdC90eXBlaXQuZXMubWluLmpzIiwid2VicGFjazovL0xhaWxvLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9MYWlsby8uL3NyYy9tb2RlbHMvTGFpbG9CYXNlLnRzIiwid2VicGFjazovL0xhaWxvLy4vc3JjL21vZGVscy9MYWlsb0hhbGZTY3JlZW5XaWRnZXQudHMiLCJ3ZWJwYWNrOi8vTGFpbG8vLi9zcmMvbW9kZWxzL0xhaWxvU3RhbmRBbG9uZS50cyIsIndlYnBhY2s6Ly9MYWlsby8uL3NyYy9tb2RlbHMvTGFpbG9UaW55V2lkZ2V0LnRzIiwid2VicGFjazovL0xhaWxvLy4vc3JjL3RlbXBsYXRlcy9oYWxmU2NyZWVuV2lkZ2V0VGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly9MYWlsby8uL3NyYy90ZW1wbGF0ZXMvc3RhbmRBbG9uZVRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vTGFpbG8vLi9zcmMvdGVtcGxhdGVzL3RpbnlXaWRnZXRUZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdPQUFnTyxtQkFBbUIsa0JBQWtCLGlCQUFpQixzQkFBc0Isb0VBQW9FLCtCQUErQixrSEFBa0gsZ0JBQWdCLHVCQUF1QiwrQ0FBK0MsY0FBYyxjQUFjLDBCQUEwQixXQUFXLG9CQUFvQixVQUFVLE1BQU0sR0FBRyxjQUFjLDBCQUEwQixnQkFBZ0IsMEJBQTBCLHdGQUF3RixLQUFLLDJDQUEyQyx3QkFBd0IsT0FBTyx1QkFBdUIsaUNBQWlDLDBCQUEwQix5Q0FBeUMsNEJBQTRCLGtDQUFrQyxzQkFBc0IsYUFBYSxZQUFZLDZCQUE2QixTQUFTLDJCQUEyQixPQUFPLHFEQUFxRCxpQ0FBaUMsYUFBYSwwQkFBMEIsOEJBQThCLG1EQUFtRCxNQUFNLEVBQUUsaUVBQWlFLG1DQUFtQyxVQUFVLCtCQUErQixPQUFPLDRFQUE0RSxjQUFjLGFBQWEsMEVBQTBFLGdCQUFnQiwrQ0FBK0MsNkNBQTZDLGlCQUFpQixrRkFBa0YsNEJBQTRCLHVDQUF1QyxxREFBcUQsNEVBQTRFLDhCQUE4QixnRkFBZ0YsZUFBZSxVQUFVLHVFQUF1RSxxREFBcUQsS0FBSywwQkFBMEIsNkNBQTZDLFlBQVksZUFBZSxvQkFBb0IsMkJBQTJCLFdBQVcsZ0VBQWdFLGdEQUFnRCxVQUFVLGdGQUFnRixRQUFRLHdDQUF3Qyx3Q0FBd0MsT0FBTyxNQUFNLDZFQUE2RSxnQkFBZ0IsdUNBQXVDLHVFQUF1RSw0Q0FBNEMsT0FBTywwRkFBMEYsd0RBQXdELHdCQUF3QixrQkFBa0Isb0VBQW9FLGNBQWMsa0JBQWtCLGlCQUFpQixtQkFBbUIsc0JBQXNCLElBQUksd0NBQXdDLFNBQVMsMkJBQTJCLGNBQWMsZ0JBQWdCLG1EQUFtRCxnQkFBZ0IsVUFBVSxnQ0FBZ0Msa0JBQWtCLFNBQVMsbUJBQW1CLDBDQUEwQyxtQkFBbUIsbUVBQW1FLFlBQVksVUFBVSxTQUFTLGlCQUFpQixjQUFjLHNDQUFzQyxxQkFBcUIsTUFBTSxjQUFjLE1BQU0sSUFBSSxpQkFBaUIsU0FBUyxTQUFTLFNBQVMsWUFBWSwwQkFBMEIsSUFBSSxVQUFVLDZDQUE2QyxTQUFTLFVBQVUsR0FBRyxHQUFHLEdBQUcsZ0JBQWdCLGdDQUErQyw2RUFBYyxXQUFXLFFBQVEsaURBQWlELGNBQWMsUUFBUSxpQkFBaUIsNkNBQTZDLEVBQUUsU0FBUyxTQUFTLFNBQVMsMkNBQTJDLE9BQU8seUJBQXlCLHVEQUF1RCxpQkFBaUIsT0FBTyxxREFBcUQsbUNBQW1DLEtBQUssV0FBVyxNQUFNLFdBQVcsTUFBTSxXQUFXLEVBQUUsZ0JBQWdCLDBFQUEwRSxFQUFFLDJCQUEyQix3QkFBd0IsRUFBRSx5QkFBeUIsaUJBQWlCLEVBQUUseUJBQXlCLHVDQUF1Qyw4Q0FBOEMseUNBQXlDLDREQUE0RCxNQUFNLFNBQVMsNkVBQTZFLG9CQUFvQixtQ0FBbUMsb0JBQW9CLFFBQVEsOEJBQThCLGtEQUFrRCxNQUFNLG1CQUFtQixhQUFhLHNCQUFzQix1QkFBdUIsSUFBSSxVQUFVLFNBQVMsWUFBWSxvQ0FBb0MsYUFBYSx5QkFBeUIsYUFBYSxxQkFBcUIsSUFBSSxLQUFLLHlCQUF5QixzQkFBc0IsbUZBQW1GLE1BQU0sZUFBZSxTQUFTLG9CQUFvQixNQUFNLEtBQUssZ0JBQWdCLGlDQUFpQywwQkFBMEIsZ0pBQWdKLE1BQU0scUVBQXFFLGNBQWMsTUFBTSxrREFBa0QseUNBQXlDLHFCQUFxQixRQUFRLHVGQUF1RixjQUFjLE1BQU0saURBQWlELGlCQUFpQixZQUFZLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGNBQWMsU0FBUyxnQkFBZ0IsTUFBTSxvRUFBb0Usb0JBQW9CLG1CQUFtQixjQUFjLDBCQUEwQixJQUFJLEdBQUcsV0FBVyxHQUFHLEdBQUcsa0JBQWtCLFNBQVMsR0FBRyx3QkFBd0IsZ0JBQWdCLFFBQVEscUJBQXFCLDBDQUEwQyxnQkFBZ0IsbUJBQW1CLE1BQU0seUNBQXlDLDhDQUE4Qyw0QkFBNEIsNEVBQTRFLGNBQWMsV0FBVyxHQUFHLFNBQVMsRUFBRSxzQkFBc0IsOEJBQThCLG1CQUFtQixXQUFXLG1CQUFtQiw2QkFBNkIsS0FBSyxFQUFFLGtDQUFrQyxnQkFBZ0IsZUFBZSxnR0FBZ0csbUNBQW1DLFlBQVksOEVBQThFLGdCQUFnQixNQUFNLGdCQUFnQiw4Q0FBOEMsZ0JBQWdCLEdBQUcsZUFBZSxlQUFlLEdBQUcsU0FBUyxHQUFHLHVCQUF1Qiw2QkFBNkIsMkJBQTJCLFdBQVcsOEZBQThGLHVCQUF1Qix3QkFBd0IseUJBQXlCLFdBQVcsbUNBQW1DLHlCQUF5QixvREFBb0QsNkZBQTZGLDBCQUEwQixvQkFBb0IsMEJBQTBCLG9CQUFvQix5QkFBeUIsOERBQThELGdCQUFnQixxQkFBcUIsWUFBWSwwQkFBMEIsOEJBQThCLGdCQUFnQiwrQkFBK0Isd0JBQXdCLFlBQVksMEJBQTBCLGdCQUFnQix1QkFBdUIsMkVBQTJFLHdDQUF3QyxvQkFBb0IseURBQXlELGlDQUFpQyxjQUFjLHVDQUF1QyxFQUFFLEVBQUUsWUFBWSxhQUFhLG9DQUFvQywwQkFBMEIsVUFBVSw0QkFBNEIsVUFBVSw0QkFBNEIsVUFBVSxrRkFBa0YsZ0JBQWdCLElBQUksK0NBQStDLFdBQVcsU0FBUyxpRkFBaUYsRUFBRSxvRkFBb0YsZ0VBQWdFLGFBQWEsdUJBQXVCLFVBQVUscUJBQXFCLDJLQUEySyxZQUFZLHNEQUFzRCxhQUFhLDZCQUE2QixnQkFBZ0Isc0dBQXNHLGlCQUFpQixJQUFJLHlCQUF5QixnQ0FBZ0Msa0JBQWtCLG1CQUFtQixvQkFBb0IsMkJBQTJCLG1CQUFtQixrQkFBa0IsaUJBQWlCLGlDQUFpQyxnQ0FBZ0MsRUFBRSxJQUFJOzs7Ozs7Ozs7Ozs7O0FDUGovVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ0E7QUFDUTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZUFBZSx1SkFBdUo7QUFDN0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1RUFBZTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxRUFBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1RUFBZTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQUE7QUFBQTtBQUE0QjtBQUNyQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckMsYUFBYTtBQUNiO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckMsYUFBYTtBQUNiO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckMsYUFBYTtBQUNiO0FBQ0EsdUNBQXVDLEVBQUU7QUFDekMsYUFBYTtBQUNiO0FBQ0Esc0NBQXNDLEVBQUU7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxXQUFXO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOENBQU0sS0FBSyx3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6VEE7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFDOEI7QUFDbEYsb0NBQW9DLGdFQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLCtFQUF3QjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ2Usb0ZBQXFCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQ3JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDOEI7QUFDL0QsOEJBQThCLG9EQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLHlFQUFrQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EseURBQXlELGtDQUFrQztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25OQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQzhCO0FBQy9ELDhCQUE4QixvREFBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSx5RUFBa0I7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxrQ0FBa0M7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7QUNoSkE7QUFDQTtBQUNBO0FBQ0Esc0I7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0Esc0I7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0Esc0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0XCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsIi8qKlxuICAqIFR5cGVJdCAtIFRoZSBtb3N0IHZlcnNhdGlsZSBhbmltYXRlZCB0eXBpbmcgdXRpbGl0eSBvbiB0aGUgcGxhbmV0LlxuICAqIEF1dGhvcjogQWxleCBNYWNBcnRodXIgPGFsZXhAbWFjYXJ0aHVyLm1lPiAoaHR0cHM6Ly9tYWNhcnRodXIubWUpXG4gICogVmVyc2lvbjogdjcuMC40XG4gICogTGljZW5zZTogR1BMLTIuMFxuICAqIFVSTDogaHR0cHM6Ly90eXBlaXRqcy5jb21cbiAgKi9cbnZhciBlPXtzdHJpbmdzOltdLHNwZWVkOjEwMCxjdXJzb3I6ITAsY3Vyc29yQ2hhcjpcInxcIixjdXJzb3JTcGVlZDoxZTMsZGVsZXRlU3BlZWQ6bnVsbCxsaWZlTGlrZTohMCxicmVha0xpbmVzOiEwLHN0YXJ0RGVsYXk6MjUwLHN0YXJ0RGVsZXRlOiExLG5leHRTdHJpbmdEZWxheTo3NTAsbG9vcDohMSxsb29wRGVsYXk6NzUwLGh0bWw6ITAsd2FpdFVudGlsVmlzaWJsZTohMSxiZWZvcmVTdHJpbmc6KCk9Pnt9LGFmdGVyU3RyaW5nOigpPT57fSxiZWZvcmVTdGVwOigpPT57fSxhZnRlclN0ZXA6KCk9Pnt9LGFmdGVyQ29tcGxldGU6KCk9Pnt9fSx0PWU9PmUubWFwKGU9Pih2b2lkIDA9PT1lWzFdJiZlLnB1c2gobnVsbCksdm9pZCAwPT09ZVsyXSYmZS5wdXNoKHt9KSxlKSksbj0oZSx0KT0+T2JqZWN0LmFzc2lnbih7fSxlLHQpLHI9ZT0+QXJyYXkuaXNBcnJheShlKSxpPShlLHQpPT4oZVsyXT1uKGVbMl0sdCl8fHQsZSksbz0oZSx0KT0+cihlWzBdKT9lLm1hcChlPT5pKGUsdCkpOmkoZSx0KSxhPShlLHQsbixpKT0+e2k9aXx8ITEsbj1ufHx7fTt2YXIgYT0hcihlKSx1PWUubGVuZ3RoO3JldHVybihlPWE/bmV3IEFycmF5KGUpLmZpbGwoMCk6ZSkubWFwKChlLHIpPT57aWYoYSlyZXR1cm4gdDt2YXIgYz1bdCxlLG5dO3JldHVybiBpJiYoMD09PXImJihjPW8oYyx7aXNGaXJzdDohMH0pKSxyKzE9PT11JiYoYz1vKGMse2lzTGFzdDohMH0pKSksY30pfTtmdW5jdGlvbiB1KGUpe3RoaXMuaW5zZXJ0PWZ1bmN0aW9uKGUsdCl7aS5zcGxpY2UoZSwwLHQpfSx0aGlzLmFkZD1mdW5jdGlvbihlLHUsYyl7cmV0dXJuIGU9cihlKT9lOltlLG51bGxdLGM9Y3x8ITEsdT11fHwxLHIoZVswXSl8fChlPWEodSxlKSksZT10KGUpLm1hcChlPT4oZVsyXT1uKGVbMl0se2lkOm99KSxvKyssZSkpLGk9Yz9lLmNvbmNhdChpKTppLmNvbmNhdChlKSx0aGlzfSx0aGlzLnNldD1mdW5jdGlvbihlLHQpe2lbZV09dH0sdGhpcy5yZXNldD1mdW5jdGlvbigpe2k9aS5tYXAoZT0+KGVbMl0uZXhlY3V0ZWQ9ITEsZSkpfSx0aGlzLmdldEl0ZW1zPWZ1bmN0aW9uKCl7cmV0dXJuKGk9dChpKSkuZmlsdGVyKGU9PiFlWzJdLmV4ZWN1dGVkKX0sdGhpcy5zZXRNZXRhPWZ1bmN0aW9uKGUsdCl7dmFyIHI9aS5maW5kSW5kZXgodD0+dFsyXS5pZD09PWUpO2lbcl1bMl09bihpW3JdWzJdLHQpfTt2YXIgaT1bXSxvPTA7dGhpcy5hZGQoZSl9dmFyIGM9ZT0+QXJyYXkuZnJvbShlKSxzPWU9Pnt2YXIgdD1bXTtyZXR1cm4gdC5jb25jYXQuYXBwbHkodCxlKX0sbD1lPT57dmFyIHQ9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpO3JldHVybiB0LmJvZHkuaW5uZXJIVE1MPWUsdC5ib2R5fSxmPShlLHQsbik9Pnt0PXR8fG51bGwsbj12b2lkIDAhPT1uJiZuO3ZhciByPWMoZS5jaGlsZE5vZGVzKS5tYXAoZT0+e3JldHVybiAzPT09KHQ9ZSkubm9kZVR5cGV8fFwiQlJcIj09PXQudGFnTmFtZT9lOmYoZSk7dmFyIHR9KTtyZXR1cm4gcj1zKHIpLHQmJihyPXIuZmlsdGVyKGU9PiF0LmNvbnRhaW5zKGUpKSksbj9yLnJldmVyc2UoKTpyfSxkPWU9PlwiQk9EWVwiPT09ZS50YWdOYW1lLGg9KGUsdCk9Pnt0PXR8fG51bGw7dmFyIG49ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O3JldHVybntub2RlOnQsaXNUb3BMZXZlbFRleHQ6KCF0fHxkKHQucGFyZW50Tm9kZSkpJiYhbixpc0hUTUxFbGVtZW50Om4sY29udGVudDplfX07ZnVuY3Rpb24gdihlKXt2YXIgdCxuPWwoZSk7cmV0dXJuIHQ9ZihuKS5tYXAoZT0+ZS5ub2RlVmFsdWU/YyhlLm5vZGVWYWx1ZSkubWFwKHQ9PmgodCxlKSk6aChlKSkscyh0KX1mdW5jdGlvbiBwKGUsdCl7cmV0dXJuKHQ9dm9pZCAwPT09dHx8dCk/dihlKTpjKGUpLm1hcChlPT5oKGUpKX12YXIgbT1lPT5kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpLHk9KGUsdCk9Pnt2YXIgbj1tKFwic3R5bGVcIik7bi5pZD10fHxcIlwiLG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZSkpLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobil9LGc9ZT0+KHIoZSl8fChlPVtlLzIsZS8yXSkse2JlZm9yZTplWzBdLGFmdGVyOmVbMV0sdG90YWw6ZVswXStlWzFdfSksYj0oZSx0KT0+TWF0aC5hYnMoTWF0aC5yYW5kb20oKSooZSt0LShlLXQpKSsoZS10KSk7dmFyIE49ZT0+W1widGV4dGFyZWFcIixcImlucHV0XCJdLmluZGV4T2YoZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpPi0xLFM9KGUsdCk9Pnt2YXIgbj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO3JldHVyblt0XS5jb25jYXQoYyhuKS5yZXZlcnNlKCkpLmZpbmQodD0+dC5jbG9uZU5vZGUoKS5vdXRlckhUTUw9PT1lLm91dGVySFRNTCl9LFQ9KGUsdCxuLHIpPT57bj1ufHxudWxsO3ZhciBpPXQuaXNIVE1MRWxlbWVudCxvPWk/dC5jb250ZW50OmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQuY29udGVudCk7aWYoTihlKSllLnZhbHVlPVwiXCIuY29uY2F0KGUudmFsdWUpLmNvbmNhdCh0LmNvbnRlbnQpO2Vsc2V7aWYoIXQuaXNUb3BMZXZlbFRleHQmJiFpKXt2YXIgYT10Lm5vZGUucGFyZW50Tm9kZSx1PVMoYS5jbG9uZU5vZGUoKSxlKTtpZigoKGUsdCk9PntpZighZSlyZXR1cm4hMTt2YXIgbj1lLm5leHRTaWJsaW5nO3JldHVybiFufHxuLmlzRXF1YWxOb2RlKHQpfSkodSxuKSllPXU7ZWxzZSBpZigobz1hLmNsb25lTm9kZSgpKS5pbm5lclRleHQ9dC5jb250ZW50LCFkKGEucGFyZW50Tm9kZSkpe2Zvcih2YXIgYz1hLnBhcmVudE5vZGUscz1jLmNsb25lTm9kZSgpLGw9UyhzLGUpOyFsJiYhZChjKTspcy5pbm5lckhUTUw9by5vdXRlckhUTUwsbz1zLHM9Yy5wYXJlbnROb2RlLmNsb25lTm9kZSgpLGM9Yy5wYXJlbnROb2RlLGw9UyhzLGUpO2U9bHx8ZX19dmFyIGg9ZihlLG4sITApW3ItMV0sdj1oP2gucGFyZW50Tm9kZTplO3YuaW5zZXJ0QmVmb3JlKG8sdi5jb250YWlucyhuKT9uOm51bGwpfX0sTD1lPT57dmFyIHQ7cmV0dXJuIG51bGw9PWV8fG51bGw9PT0odD1lLnBhcmVudE5vZGUpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LnJlbW92ZUNoaWxkKGUpfTt2YXIgTT0oZSx0LG4pPT57dmFyIHIsaT1cInN0cmluZ1wiPT10eXBlb2YgZSxvPSExLGE9LTEqZTtyZXR1cm4gaSYmKGE9KHI9XCJFTkRcIj09PWUudG9VcHBlckNhc2UoKSk/LTE6MSxvPXI/dCthPjA6dCthPG4ubGVuZ3RoKSx7aXNTdHJpbmc6aSxudW1iZXJPZlN0ZXBzOmEsY2FuS2VlcE1vdmluZzpvfX0seD1lPT57dmFyIHQsbj1bXCJmb250XCIsXCJsaW5lSGVpZ2h0XCIsXCJjb2xvclwiXSxyPW0oXCJTUEFOXCIpLGk9KHQ9ZSx3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpKTtmb3IodmFyIG8gaW4gaSluLmluZGV4T2Yobyk+LTEmJmlbb10mJihyLnN0eWxlW29dPWlbb10pO3JldHVybiByLnN0eWxlLmNzc1RleHR9O2Z1bmN0aW9uIHcoZSx0LG4pe3JldHVybiBuP3Q/dChlKTplOihlJiZlLnRoZW58fChlPVByb21pc2UucmVzb2x2ZShlKSksdD9lLnRoZW4odCk6ZSl9ZnVuY3Rpb24gRChlKXtyZXR1cm4gZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sbj0wO248YXJndW1lbnRzLmxlbmd0aDtuKyspdFtuXT1hcmd1bWVudHNbbl07dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUoZS5hcHBseSh0aGlzLHQpKX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fX1mdW5jdGlvbiBIKCl7fWZ1bmN0aW9uIEUoZSx0KXtpZighdClyZXR1cm4gZSYmZS50aGVuP2UudGhlbihIKTpQcm9taXNlLnJlc29sdmUoKX1mdW5jdGlvbiBDKGUsdCl7dmFyIG49ZSgpO3JldHVybiBuJiZuLnRoZW4/bi50aGVuKHQpOnQobil9ZnVuY3Rpb24gQShlLHQsbil7aWYoIWUucyl7aWYobiBpbnN0YW5jZW9mIGspe2lmKCFuLnMpcmV0dXJuIHZvaWQobi5vPUEuYmluZChudWxsLGUsdCkpOzEmdCYmKHQ9bi5zKSxuPW4udn1pZihuJiZuLnRoZW4pcmV0dXJuIHZvaWQgbi50aGVuKEEuYmluZChudWxsLGUsdCksQS5iaW5kKG51bGwsZSwyKSk7ZS5zPXQsZS52PW47dmFyIHI9ZS5vO3ImJnIoZSl9fXZhciBrPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe31yZXR1cm4gZS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbih0LG4pe3ZhciByPW5ldyBlLGk9dGhpcy5zO2lmKGkpe3ZhciBvPTEmaT90Om47aWYobyl7dHJ5e0EociwxLG8odGhpcy52KSl9Y2F0Y2goZSl7QShyLDIsZSl9cmV0dXJuIHJ9cmV0dXJuIHRoaXN9cmV0dXJuIHRoaXMubz1mdW5jdGlvbihlKXt0cnl7dmFyIGk9ZS52OzEmZS5zP0EociwxLHQ/dChpKTppKTpuP0EociwxLG4oaSkpOkEociwyLGkpfWNhdGNoKGUpe0EociwyLGUpfX0scn0sZX0oKTtmdW5jdGlvbiBPKGUsdCl7cmV0dXJuIGUmJmUudGhlbj9lLnRoZW4odCk6dChlKX1leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0LGkpe3ZhciBvPXRoaXM7aT1pfHx7fTt2YXIgcz0oZSx0LG4pPT4oZT1yKGVbMF0pP2U6W2VdLG9lLmFkZChlLHQpLChlPT57dmFyIHQ9KGU9ZXx8e30pLmRlbGF5O3QmJm9lLmFkZChbVix0XSl9KShuKSx0aGlzKSxkPWU9PltbRixlPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e30se2ZvcmNlOiEwfV0sW0YsZWUse2ZvcmNlOiEwfV1dLFM9KCk9Pko/YyhHLnZhbHVlKTpmKEcsYWUsITApLFA9KGUsdCk9Pnt0PXR8fDE7dmFyIG49ZWUubmV4dFN0cmluZ0RlbGF5O29lLmluc2VydChlLFtWLG4uYmVmb3JlXSksb2UuaW5zZXJ0KGUrdCsxLFtWLG4uYWZ0ZXJdKX0sej1EKChmdW5jdGlvbigpe2lmKGFlKXt2YXIgZT1cIltkYXRhLXR5cGVpdC1pZD0nXCIuY29uY2F0KGllLFwiJ10gLnRpLWN1cnNvclwiKTt5KFwiQGtleWZyYW1lcyBibGluay1cIi5jb25jYXQoaWUsXCIgeyAwJSB7b3BhY2l0eTogMH0gNDklIHtvcGFjaXR5OiAwfSA1MCUge29wYWNpdHk6IDF9IH0gXCIpLmNvbmNhdChlLFwiIHsgYW5pbWF0aW9uOiBibGluay1cIikuY29uY2F0KGllLFwiIFwiKS5jb25jYXQoZWUuY3Vyc29yU3BlZWQvMWUzLFwicyBpbmZpbml0ZTsgfSBcIikuY29uY2F0KGUsXCIud2l0aC1kZWxheSB7IGFuaW1hdGlvbi1kZWxheTogNTAwbXM7IH0gXCIpLmNvbmNhdChlLFwiLmRpc2FibGVkIHsgYW5pbWF0aW9uOiBub25lOyB9XCIpLGllKSxHLmFwcGVuZENoaWxkKGFlKTt2YXIgdD1cImxvYWRlZFwiPT09ZG9jdW1lbnQuZm9udHMuc3RhdHVzO3JldHVybiB3KHR8fGRvY3VtZW50LmZvbnRzLnJlYWR5LChmdW5jdGlvbihlKXt2YXIgdD1hZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aC8yO2FlLnN0eWxlLm1hcmdpbj1cIjAgLVwiLmNvbmNhdCh0KzIsXCJweCAwIC1cIikuY29uY2F0KHQtMixcInB4XCIpfSksdCl9fSkpLEI9ZT0+e2FlJiYoYWUuY2xhc3NMaXN0LnRvZ2dsZShcImRpc2FibGVkXCIsZSksYWUuY2xhc3NMaXN0LnRvZ2dsZShcIndpdGgtZGVsYXlcIiwhZSkpfSxJPUQoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIFgucHVzaChzZXRUaW1lb3V0KGUsdCkpLHcoKX0pKSxSPUQoKGZ1bmN0aW9uKGUpe3ZhciB0PVo7cmV0dXJuIHcodCYmaihaKSwoZnVuY3Rpb24odCl7cmV0dXJuIG9lLnJlc2V0KCksb2Uuc2V0KDAsW1YsZS5iZWZvcmVdKSxFKFEoITApKX0pLCF0KX0pKSxxPUQoKGZ1bmN0aW9uKCl7Xy5zdGFydGVkPSEwO3ZhciBlLHQ9b2UuZ2V0SXRlbXMoKTtyZXR1cm4gTyhmdW5jdGlvbihlLHQpe3RyeXt2YXIgbj1lKCl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9cmV0dXJuIG4mJm4udGhlbj9uLnRoZW4odm9pZCAwLHQpOm59KChmdW5jdGlvbigpe3JldHVybiBPKGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89LTE7cmV0dXJuIGZ1bmN0aW9uIGEodSl7dHJ5e2Zvcig7KytvPGUubGVuZ3RoJiYoIW58fCFuKCkpOylpZigodT10KG8pKSYmdS50aGVuKXtpZighKChjPXUpaW5zdGFuY2VvZiBrJiYxJmMucykpcmV0dXJuIHZvaWQgdS50aGVuKGEsaXx8KGk9QS5iaW5kKG51bGwscj1uZXcgaywyKSkpO3U9dS52fXI/QShyLDEsdSk6cj11fWNhdGNoKGUpe0Eocnx8KHI9bmV3IGspLDIsZSl9dmFyIGN9KCkscn0odCwoZnVuY3Rpb24obil7aWYoXy5mcm96ZW58fF8uZGVzdHJveWVkKXRocm93XCJcIjt2YXIgcixpLGEsdSxjPXRbbl0scz1jWzJdO3JldHVybiBlPVtjLG9dLHMuZnJlZXplQ3Vyc29yJiZCKCEwKSxyPWVlLnNwZWVkLGk9ZWUuZGVsZXRlU3BlZWQsYT1lZS5saWZlTGlrZSx1PShpPW51bGwhPT1pP2k6ci8zKS8yLFc9YT9bYihyLHIvMiksYihpLHUpXTpbcixpXSxDKChmdW5jdGlvbigpe3ZhciB0O2lmKG51bGw9PXM/dm9pZCAwOnMuaXNGaXJzdClyZXR1cm4gRSgodD1lZSkuYmVmb3JlU3RyaW5nLmFwcGx5KHQsZSkpfSksKGZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIHcoKHQ9ZWUpLmJlZm9yZVN0ZXAuYXBwbHkodCxlKSwoZnVuY3Rpb24oKXtyZXR1cm4gdyhjWzBdLmNhbGwobyxjWzFdLHMpLChmdW5jdGlvbigpe3JldHVybiBDKChmdW5jdGlvbigpe3ZhciB0LG47aWYobnVsbD09PSh0PWNbMl0pfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmlzTGFzdClyZXR1cm4gRSgobj1lZSkuYWZ0ZXJTdHJpbmcuYXBwbHkobixlKSl9KSwoZnVuY3Rpb24oKXt2YXIgdDtyZXR1cm4gdygodD1lZSkuYWZ0ZXJTdGVwLmFwcGx5KHQsZSksKGZ1bmN0aW9uKCl7b2Uuc2V0TWV0YShzLmlkLHtleGVjdXRlZDohMH0pLEIoITEpfSkpfSkpfSkpfSkpfSkpfSksKGZ1bmN0aW9uKCl7cmV0dXJuITF9KSksKGZ1bmN0aW9uKHQpe3ZhciBuO3JldHVybiBfLmNvbXBsZXRlZD0hMCx3KChuPWVlKS5hZnRlckNvbXBsZXRlLmFwcGx5KG4sZSksKGZ1bmN0aW9uKCl7aWYoIWVlLmxvb3ApdGhyb3dcIlwiO3ZhciBlPWVlLmxvb3BEZWxheTtJKChmdW5jdGlvbigpe3JldHVybiB3KFIoZSksKGZ1bmN0aW9uKCl7cSgpfSkpfSksZS5hZnRlcil9KSl9KSl9KSxIKSwoZnVuY3Rpb24oZSl7cmV0dXJuIG99KSl9KSksVj1lPT5uZXcgUHJvbWlzZSh0PT57SSgoKT0+dCgpLGV8fDApfSksaj1lPT57dmFyIHQ9UygpLG49TShlLFosdCk7cmV0dXJuIForPW4ubnVtYmVyT2ZTdGVwcyxuZXcgUHJvbWlzZShlPT57SShEKChmdW5jdGlvbigpe3JldHVybigoZSx0LG4scik9PntpZihuKXt2YXIgaT1yLG89dFsoaT1pPnQubGVuZ3RoP3QubGVuZ3RoOmkpLTFdOyhlPW8/by5wYXJlbnROb2RlOmUpLmluc2VydEJlZm9yZShuLG98fG51bGwpfX0pKEcsUygpLGFlLFopLEMoKGZ1bmN0aW9uKCl7aWYobi5pc1N0cmluZyYmbi5jYW5LZWVwTW92aW5nKXJldHVybiBFKGoobi5udW1iZXJPZlN0ZXBzPjA/XCJTVEFSVFwiOlwiRU5EXCIpKX0pLChmdW5jdGlvbigpe3JldHVybiBlKCl9KSl9KSksV1swXSl9KX0sVT1lPT5uZXcgUHJvbWlzZSh0PT57SSgoKT0+KFQoRyxlLGFlLFopLHQoKSksV1swXSl9KSxGPUQoKGZ1bmN0aW9uKGUpe2VlPW4oZWUsZSl9KSksSz1EKChmdW5jdGlvbigpe0o/Ry52YWx1ZT1cIlwiOlMoKS5mb3JFYWNoKGU9PntMKGUpfSl9KSksUT1lPT4oZT0hMD09PWUsbmV3IFByb21pc2UodD0+e0koRCgoZnVuY3Rpb24oKXt2YXIgbj0hMSxyPVMoKTtyZXR1cm4gci5sZW5ndGgmJihKP0cudmFsdWU9Ry52YWx1ZS5zbGljZSgwLC0xKTpMKHJbWl0pKSxjKEcucXVlcnlTZWxlY3RvckFsbChcIipcIikpLmZvckVhY2goZT0+e2lmKCFlLmlubmVySFRNTCYmXCJCUlwiIT09ZS50YWdOYW1lKXtmb3IodmFyIHQ9ZTsxPT09dC5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoJiZ0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS5pc0VxdWFsTm9kZSh0KTspdD10LnBhcmVudE5vZGU7TCh0KX19KSxDKChmdW5jdGlvbigpe2lmKGUmJnIubGVuZ3RoLTE+MClyZXR1cm4gdyhRKCEwKSwoZnVuY3Rpb24oKXtyZXR1cm4gbj0hMCx0KCl9KSl9KSwoZnVuY3Rpb24oZSl7cmV0dXJuIG4/ZTp0KCl9KSl9KSksV1sxXSl9KSk7dGhpcy5icmVhaz1mdW5jdGlvbihlKXtyZXR1cm4gcyhbVSxoKG0oXCJCUlwiKSldLDEsZSl9LHRoaXMuZGVsZXRlPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZCh0KTtyZXR1cm4gcyhbblswXV0uY29uY2F0KFtdLmNvbmNhdChBcnJheShNYXRoLmFicyhlKXx8MSkpLmZpbGwoKS5tYXAoKCk9PltRLCFlLCRdKSxbblsxXV0pLDEsdCl9LHRoaXMuZW1wdHk9ZnVuY3Rpb24oKXtyZXR1cm4gcyhLLDEsYXJndW1lbnRzKX0sdGhpcy5leGVjPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZCh0KTtyZXR1cm4gcyhbblswXSxbZSxudWxsXSxuWzFdXSwxLHQpfSx0aGlzLm1vdmU9ZnVuY3Rpb24oZSx0KXt2YXIgbj1NKGUsWixTKCkpLHI9ZCh0KSxpPW4uaXNTdHJpbmc/ZTpNYXRoLnNpZ24oZSk7cmV0dXJuIHMoW3JbMF1dLmNvbmNhdChbXS5jb25jYXQoQXJyYXkoTWF0aC5hYnMoZSl8fDEpKS5maWxsKCkubWFwKCgpPT5baixpLCRdKSxbclsxXV0pLDEsdCl9LHRoaXMub3B0aW9ucz1mdW5jdGlvbihlKXtyZXR1cm4gcyhbRixlXSwxLGUpfSx0aGlzLnBhdXNlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHMoW1YsZV0sMSx0KX0sdGhpcy50eXBlPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZCh0KSxyPXAoZSxlZS5odG1sKSxpPVtuWzBdXS5jb25jYXQoYShyLFUsJCwhMCksW25bMV1dKTtyZXR1cm4gcyhpLDEsdCl9LHRoaXMuaXM9ZnVuY3Rpb24oZSl7cmV0dXJuIF9bZV19LHRoaXMuZGVzdHJveT1mdW5jdGlvbihlKXtlPXZvaWQgMD09PWV8fGUsWC5mb3JFYWNoKGU9PntjbGVhclRpbWVvdXQoZSl9KSxYPVtdLGUmJkwoYWUpLF8uZGVzdHJveWVkPSEwfSx0aGlzLmZyZWV6ZT1mdW5jdGlvbigpe18uZnJvemVuPSEwfSx0aGlzLnVuZnJlZXplPWZ1bmN0aW9uKCl7Xy5mcm96ZW49ITEscSgpfSx0aGlzLnJlc2V0PWZ1bmN0aW9uKCl7Zm9yKHZhciBlIGluIXRoaXMuaXMoXCJkZXN0cm95ZWRcIikmJnRoaXMuZGVzdHJveSgpLG9lLnJlc2V0KCksWj0wLF8pX1tlXT0hMTtyZXR1cm4gSj9HLnZhbHVlPVwiXCI6Ry5pbm5lckhUTUw9XCJcIix0aGlzfSx0aGlzLmdvPWZ1bmN0aW9uKCl7cmV0dXJuIF8uc3RhcnRlZD90aGlzOih6KCksZWUud2FpdFVudGlsVmlzaWJsZT8oKChlLHQpPT57bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChuLHIpPT57bi5mb3JFYWNoKG49PntuLmlzSW50ZXJzZWN0aW5nJiYodCgpLHIudW5vYnNlcnZlKGUpKX0pfSx7dGhyZXNob2xkOjF9KS5vYnNlcnZlKGUpfSkoRyxxLmJpbmQodGhpcykpLHRoaXMpOihxKCksdGhpcykpfSx0aGlzLmdldFF1ZXVlPWZ1bmN0aW9uKCl7cmV0dXJuIG9lfSx0aGlzLmdldE9wdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gZWV9LHRoaXMuZ2V0RWxlbWVudD1mdW5jdGlvbigpe3JldHVybiBHfTt2YXIgWSxHPVwic3RyaW5nXCI9PXR5cGVvZihZPXQpP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoWSk6WSxKPU4oRyksVz1bXSxYPVtdLFo9MCwkPXtmcmVlemVDdXJzb3I6ITB9LF89e3N0YXJ0ZWQ6ITEsY29tcGxldGVkOiExLGZyb3plbjohMSxkZXN0cm95ZWQ6ITF9LGVlPW4oZSxpKTtlZT1uKGVlLHtodG1sOiFKJiZlZS5odG1sLG5leHRTdHJpbmdEZWxheTpnKGVlLm5leHRTdHJpbmdEZWxheSksbG9vcERlbGF5OmcoZWUubG9vcERlbGF5KX0pO3ZhciB0ZSxuZSxyZSxpZT1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIsOSksb2U9bmV3IHUoW1YsZWUuc3RhcnREZWxheV0pO0cuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlaXQtaWRcIixpZSkseShcIltkYXRhLXR5cGVpdC1pZF06YmVmb3JlIHtjb250ZW50OiAnLic7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDA7IHZpc2liaWxpdHk6IGhpZGRlbjt9W2RhdGEtdHlwZWl0LWlkXVwiKSxlZS5zdHJpbmdzPShyZT1lZS5zdHJpbmdzLHRlPXIocmUpP3JlOltyZV0sKG5lPShlPT5lLmlubmVySFRNTC5yZXBsYWNlKC88XFwhLS0uKj8tLT4vZyxcIlwiKS50cmltKCkpKEcpKT8oRy5pbm5lckhUTUw9XCJcIixlZS5zdGFydERlbGV0ZT8odihuZSkuZm9yRWFjaChlPT57VChHLGUsYWUsWil9KSxvZS5hZGQoW1EsITBdKSxQKDEpLHRlKTpbbmUudHJpbSgpXS5jb25jYXQodGUpKTp0ZSk7dmFyIGFlPSgoKT0+e2lmKEp8fCFlZS5jdXJzb3IpcmV0dXJuIG51bGw7dmFyIGU9bShcInNwYW5cIik7cmV0dXJuIGUuaW5uZXJIVE1MPWwoZWUuY3Vyc29yQ2hhcikuaW5uZXJIVE1MLGUuY2xhc3NOYW1lPVwidGktY3Vyc29yXCIsZS5zdHlsZS5jc3NUZXh0PVwiZGlzcGxheTppbmxpbmU7XCIuY29uY2F0KHgoRykpLGV9KSgpO2VlLnN0cmluZ3MubGVuZ3RoJiYoKCk9Pnt2YXIgZT1lZS5zdHJpbmdzLmZpbHRlcihlPT4hIWUpO2UuZm9yRWFjaCgodCxuKT0+e3ZhciByPXAodCxlZS5odG1sKTtvZS5hZGQoYShyLFUsJCwhMCkpO3ZhciBpPW9lLmdldEl0ZW1zKCkubGVuZ3RoO2lmKG4rMSE9PWUubGVuZ3RoKXtpZihlZS5icmVha0xpbmVzKXt2YXIgbz1oKG0oXCJCUlwiKSk7cmV0dXJuIG9lLmFkZChbVSxvLCRdKSx2b2lkIFAoaSl9b2UuYWRkKGEocixRLCQpKSxQKGksdC5sZW5ndGgpfX0pfSkoKX1cbiIsImltcG9ydCB7IExhaWxvU3RhbmRBbG9uZSB9IGZyb20gXCIuL21vZGVscy9MYWlsb1N0YW5kQWxvbmVcIjtcclxuaW1wb3J0IHsgTGFpbG9UaW55V2lkZ2V0IH0gZnJvbSBcIi4vbW9kZWxzL0xhaWxvVGlueVdpZGdldFwiO1xyXG5pbXBvcnQgTGFpbG9IYWxmU2NyZWVuV2lkZ2V0IGZyb20gXCIuL21vZGVscy9MYWlsb0hhbGZTY3JlZW5XaWRnZXRcIjtcclxuY29uc3Qgc2V0RGVmYXVsdFR5cGVJdCA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xyXG4gICAgICAgIGNhc2UgXCJkZS1ERVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiei5CLiBXZXIgYmlzdCBkdT9cIiwgXCJ6LkIuIFdhcyBrYW5uc3QgZHUgZsO8ciBtaWNoIHR1bj9cIiwgXCJGcmFnIG1pY2ggZWluZmFjaCFcIl07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFtcImUuZy4gV2hvIGFyZSB5b3U/XCIsIFwiZS5nLiBXaGF0IGNhbiB5b3UgZG8gZm9yIG1lP1wiLCBcIkp1c3QgYXNrIG1lIVwiXTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGluaXQgPSAoeyBib3RTZWNyZXQsIHdpZGdldFR5cGUgPSBcInRpbnlXaWRnZXRcIiwgbWFpbkNvbnRhaW5lcklkID0gXCJsYWlsby1zbWFydC1jaGFyYWN0ZXJcIiwgY2FtZXJhQWRqdXN0bWVudCA9IFwibWVkaXVtXCIsIGxhbmd1YWdlID0gXCJlbi1VU1wiLCB0eXBlSXRTdHJpbmdBcnJheSwgfSkgPT4ge1xyXG4gICAgaWYgKCF0eXBlSXRTdHJpbmdBcnJheSlcclxuICAgICAgICB0eXBlSXRTdHJpbmdBcnJheSA9IHNldERlZmF1bHRUeXBlSXQobGFuZ3VhZ2UpO1xyXG4gICAgc3dpdGNoICh3aWRnZXRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcInRpbnlXaWRnZXRcIjpcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhaWxvID0gbmV3IExhaWxvVGlueVdpZGdldChib3RTZWNyZXQsIG1haW5Db250YWluZXJJZCwgY2FtZXJhQWRqdXN0bWVudCwgbGFuZ3VhZ2UsIHdpZGdldFR5cGUsIHR5cGVJdFN0cmluZ0FycmF5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsYWlsby5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiaGFsZlNjcmVlbldpZGdldFwiOlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFpbG8gPSBuZXcgTGFpbG9IYWxmU2NyZWVuV2lkZ2V0KGJvdFNlY3JldCwgbWFpbkNvbnRhaW5lcklkLCBjYW1lcmFBZGp1c3RtZW50LCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhaWxvLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJzdGFuZEFsb25lXCI6XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFBZGp1c3RtZW50ID0gXCJsb25nc2hvdFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFpbG8gPSBuZXcgTGFpbG9TdGFuZEFsb25lKGJvdFNlY3JldCwgbWFpbkNvbnRhaW5lcklkLCBjYW1lcmFBZGp1c3RtZW50LCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhaWxvLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxhaWxvIGNvdWxkIG5vdCBiZSBpbml0aWFsaXplZC4gUGxlYXNlIGRvdWJsZSBjaGVjayB5b3VyIGluaXRpYWxpemF0aW9uIG9iamVjdC5cIik7XHJcbiAgICB9XHJcbn07XHJcbi8vIGV4cG9ydCBjb25zdCBpbml0ID0gKHtcclxuLy8gICBib3RTZWNyZXQsXHJcbi8vICAgd2lkZ2V0VHlwZSA9IFwidGlueVdpZGdldFwiLFxyXG4vLyAgIG1haW5Db250YWluZXJJZCA9IFwibGFpbG8tc21hcnQtY2hhcmFjdGVyXCIsXHJcbi8vICAgY2FtZXJhQWRqdXN0bWVudCA9IFwibWVkaXVtXCIsXHJcbi8vICAgbGFuZ3VhZ2UgPSBcImVuLVVTXCIsXHJcbi8vICAgdHlwZUl0U3RyaW5nQXJyYXksXHJcbi8vIH06IElJbml0T2JqZWN0KTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcclxuLy8gICBpZiAoIXR5cGVJdFN0cmluZ0FycmF5KSB0eXBlSXRTdHJpbmdBcnJheSA9IHNldERlZmF1bHRUeXBlSXQobGFuZ3VhZ2UpO1xyXG4vLyAgIHN3aXRjaCAod2lkZ2V0VHlwZSkge1xyXG4vLyAgICAgY2FzZSBcInN0YW5kQWxvbmVcIjpcclxuLy8gICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuLy8gICAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICAgY2FtZXJhQWRqdXN0bWVudCA9IFwibG9uZ3Nob3RcIjtcclxuLy8gICAgICAgICAgIGNvbnN0IGxhaWxvID0gbmV3IExhaWxvU3RhbmRBbG9uZShib3RTZWNyZXQsIG1haW5Db250YWluZXJJZCwgY2FtZXJhQWRqdXN0bWVudCwgbGFuZ3VhZ2UsIHdpZGdldFR5cGUsIHR5cGVJdFN0cmluZ0FycmF5ISk7XHJcbi8vICAgICAgICAgICByZXNvbHZlKGxhaWxvLmluaXRpYWxpemUoKSk7XHJcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIGNhc2UgXCJ0aW55V2lkZ2V0XCI6XHJcbi8vICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbi8vICAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgIGNhbWVyYUFkanVzdG1lbnQgPSBcIm1lZGl1bVwiO1xyXG4vLyAgICAgICAgICAgY29uc3QgbGFpbG8gPSBuZXcgTGFpbG9UaW55V2lkZ2V0KFxyXG4vLyAgICAgICAgICAgICBib3RTZWNyZXQsXHJcbi8vICAgICAgICAgICAgIG1haW5Db250YWluZXJJZCxcclxuLy8gICAgICAgICAgICAgY2FtZXJhQWRqdXN0bWVudCxcclxuLy8gICAgICAgICAgICAgbGFuZ3VhZ2UsXHJcbi8vICAgICAgICAgICAgIHdpZGdldFR5cGUsXHJcbi8vICAgICAgICAgICAgIHR5cGVJdFN0cmluZ0FycmF5IVxyXG4vLyAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgIHJlc29sdmUobGFpbG8uaW5pdGlhbGl6ZSgpKTtcclxuLy8gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgY2FzZSBcImhhbGZTY3JlZW5XaWRnZXRcIjpcclxuLy8gICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuLy8gICAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICAgY2FtZXJhQWRqdXN0bWVudCA9IFwibWVkaXVtXCI7XHJcbi8vICAgICAgICAgICBjb25zdCBsYWlsbyA9IG5ldyBMYWlsb0hhbGZTY3JlZW5XaWRnZXQoXHJcbi8vICAgICAgICAgICAgIGJvdFNlY3JldCxcclxuLy8gICAgICAgICAgICAgbWFpbkNvbnRhaW5lcklkLFxyXG4vLyAgICAgICAgICAgICBjYW1lcmFBZGp1c3RtZW50LFxyXG4vLyAgICAgICAgICAgICBsYW5ndWFnZSxcclxuLy8gICAgICAgICAgICAgd2lkZ2V0VHlwZSxcclxuLy8gICAgICAgICAgICAgdHlwZUl0U3RyaW5nQXJyYXkhXHJcbi8vICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgcmVzb2x2ZShsYWlsby5pbml0aWFsaXplKCkpO1xyXG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSk7XHJcbi8vICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cclxuLy8gICAgICAgICByZWplY3Qoe1xyXG4vLyAgICAgICAgICAgbXNnOlxyXG4vLyAgICAgICAgICAgICBcIlVuYWJsZSB0byBjcmVhdGUgTGFpbG8uIFBsZWFzZSBkb3VibGUgY2hlY2sgdGhlIGluc2VydGVkIHdpZGdldC10eXBlLCB0aGUgZGVmYXVsdCBjb250YWluZXIgaWQgYW5kIHlvdXIgYm90IHNlY3JldCFcIixcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICApO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuIiwiaW1wb3J0IFR5cGVJdCBmcm9tICd0eXBlaXQnO1xyXG5leHBvcnQgY2xhc3MgTGFpbG9CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGJvdFNlY3JldCwgbWFpbkNvbnRhaW5lcklkLCBjYW1lcmFBZGp1c3RtZW50LCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpIHtcclxuICAgICAgICB0aGlzLmJvdFNlY3JldCA9IGJvdFNlY3JldDtcclxuICAgICAgICB0aGlzLm1haW5Db250YWluZXJJZCA9IG1haW5Db250YWluZXJJZDtcclxuICAgICAgICB0aGlzLmNhbWVyYUFkanVzdG1lbnQgPSBjYW1lcmFBZGp1c3RtZW50O1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgICAgICB0aGlzLndpZGdldFR5cGUgPSB3aWRnZXRUeXBlO1xyXG4gICAgICAgIHRoaXMudHlwZUl0U3RyaW5nQXJyYXkgPSB0eXBlSXRTdHJpbmdBcnJheTtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZUNvbGxlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIFwiZGUtREVcIjoge1xyXG4gICAgICAgICAgICAgICAgQ29tbXVuaWNhdGlvblNlcnZlckluaXRGYWlsZWQ6IFwiTGVpZGVyIGthbm4gaWNoIGRpciBhdWYgR3J1bmQgdGVjaG5pc2NoZXIgUHJvYmxlbWUgZ2VyYWRlIG5pY2h0IHdlaXRlcmhlbGZlbi4gQml0dGUgc3RlbGxlIHNpY2hlciwgZGFzcyBkdSBtaXQgZGVtIEludGVybmV0IHZlcmJ1bmRlbiBiaXN0LiBTb2xsdGUgZGllcyBkZXIgRmFsbCBzZWluLCB2ZXJzdWNoZSBlcyBiaXR0ZSBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIE5vQ29tbXVuaWNhdGlvblNlcnZlckNvbm5lY3Rpb246IFwiTGVpZGVyIGthbm4gaWNoIGRpciBhdWYgR3J1bmQgdGVjaG5pc2NoZXIgUHJvYmxlbWUgZ2VyYWRlIG5pY2h0IHdlaXRlcmhlbGZlbi4gQml0dGUgc3RlbGxlIHNpY2hlciwgZGFzcyBkdSBtaXQgZGVtIEludGVybmV0IHZlcmJ1bmRlbiBiaXN0LiBTb2xsdGUgZGllcyBkZXIgRmFsbCBzZWluLCB2ZXJzdWNoZSBlcyBiaXR0ZSBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIFJlZnJlc2hDb21tdW5pY2F0aW9uU2VydmVyVG9rZW5GYWlsZWQ6IFwiTGVpZGVyIGthbm4gaWNoIGRpciBhdWYgR3J1bmQgdGVjaG5pc2NoZXIgUHJvYmxlbWUgZ2VyYWRlIG5pY2h0IHdlaXRlcmhlbGZlbi4gQml0dGUgc3RlbGxlIHNpY2hlciwgZGFzcyBkdSBtaXQgZGVtIEludGVybmV0IHZlcmJ1bmRlbiBiaXN0LiBTb2xsdGUgZGllcyBkZXIgRmFsbCBzZWluLCB2ZXJzdWNoZSBlcyBiaXR0ZSBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIENvbW11bmljYXRpb25TZXJ2ZXJDb25uZWN0aW9uQ2xvc2VkOiBcIkxlaWRlciBrYW5uIGljaCBkaXIgYXVmIEdydW5kIHRlY2huaXNjaGVyIFByb2JsZW1lIGdlcmFkZSBuaWNodCB3ZWl0ZXJoZWxmZW4uIEJpdHRlIHN0ZWxsZSBzaWNoZXIsIGRhc3MgZHUgbWl0IGRlbSBJbnRlcm5ldCB2ZXJidW5kZW4gYmlzdC4gU29sbHRlIGRpZXMgZGVyIEZhbGwgc2VpbiwgdmVyc3VjaGUgZXMgYml0dGUgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBEaXJlY3RMaW5lVG9rZW5GYWlsZWQ6IFwiTGVpZGVyIGthbm4gaWNoIGRpciBhdWYgR3J1bmQgdGVjaG5pc2NoZXIgUHJvYmxlbWUgZ2VyYWRlIG5pY2h0IHdlaXRlcmhlbGZlbi4gQml0dGUgc3RlbGxlIHNpY2hlciwgZGFzcyBkdSBtaXQgZGVtIEludGVybmV0IHZlcmJ1bmRlbiBiaXN0LiBTb2xsdGUgZGllcyBkZXIgRmFsbCBzZWluLCB2ZXJzdWNoZSBlcyBiaXR0ZSBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIFJlZnJlc2hEaXJlY3RMaW5lVG9rZW5GYWlsZWQ6IFwiTGVpZGVyIGthbm4gaWNoIGRpciBhdWYgR3J1bmQgdGVjaG5pc2NoZXIgUHJvYmxlbWUgZ2VyYWRlIG5pY2h0IHdlaXRlcmhlbGZlbi4gQml0dGUgc3RlbGxlIHNpY2hlciwgZGFzcyBkdSBtaXQgZGVtIEludGVybmV0IHZlcmJ1bmRlbiBiaXN0LiBTb2xsdGUgZGllcyBkZXIgRmFsbCBzZWluLCB2ZXJzdWNoZSBlcyBiaXR0ZSBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIERpcmVjdExpbmVLZWVwQWxpdmVGYWlsZWQ6IFwiTGVpZGVyIGthbm4gaWNoIGRpciBhdWYgR3J1bmQgdGVjaG5pc2NoZXIgUHJvYmxlbWUgZ2VyYWRlIG5pY2h0IHdlaXRlcmhlbGZlbi4gQml0dGUgc3RlbGxlIHNpY2hlciwgZGFzcyBkdSBtaXQgZGVtIEludGVybmV0IHZlcmJ1bmRlbiBiaXN0LiBTb2xsdGUgZGllcyBkZXIgRmFsbCBzZWluLCB2ZXJzdWNoZSBlcyBiaXR0ZSBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIExvd0JhbmR3aWR0aDogXCJMZWlkZXIgaGFzdCBkdSBnZXJhZGUgZWluZSBzZWhyIHNjaGxlY2h0ZSBJbnRlcm5ldHZlcmJpbmR1bmcuIERhaGVyIGvDtm5uZW4gZWluaWdlIG1laW5lciBGdW5rdGlvbmVuIHN0YXJrIGVpbmdlc2NocsOkbmt0IHNlaW4uIEJpdHRlIHZlcnN1Y2hlIGVzIGRvY2ggc3DDpHRlciBlcm5ldXQsIHdlbm4gZGVpbmUgSW50ZXJuZXR2ZXJiaW5kdW5nIHdpZWRlciBiZXNzZXIgaXN0LlwiLFxyXG4gICAgICAgICAgICAgICAgQm90Q29tbXVuaWNhdGlvbkZhaWxlZDogXCJMZWlkZXIga2FubiBpY2ggZGlyIGF1ZiBHcnVuZCB0ZWNobmlzY2hlciBQcm9ibGVtZSBnZXJhZGUgbmljaHQgd2VpdGVyaGVsZmVuLiBCaXR0ZSBzdGVsbGUgc2ljaGVyLCBkYXNzIGR1IG1pdCBkZW0gSW50ZXJuZXQgdmVyYnVuZGVuIGJpc3QuIFNvbGx0ZSBkaWVzIGRlciBGYWxsIHNlaW4sIHZlcnN1Y2hlIGVzIGJpdHRlIHNww6R0ZXIgZXJuZXV0LlwiLFxyXG4gICAgICAgICAgICAgICAgSW52YWxpZENhbWVyYUFkanVzdG1lbnQ6IFwiTGVpZGVyIGhhYmUgaWNoIGdlcmFkZSB0ZWNobmlzY2hlIFByb2JsZW1lLiBCaXR0ZSB2ZXJzdWNoZSBlcyBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIEludmFsaWRDYW52YXNTaXplOiBcIkxlaWRlciBoYWJlIGljaCBnZXJhZGUgdGVjaG5pc2NoZSBQcm9ibGVtZS4gQml0dGUgdmVyc3VjaGUgZXMgc3DDpHRlciBlcm5ldXQuXCIsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlVG9Cb3RFbXB0eTogXCJPaCwgZXMgc2NoZWludCwgYWxzIGjDpHR0ZXN0IGR1IG1pciBuaWNodHMgbWl0Z2V0ZWlsdC4gQml0dGUgc2FnZSBvZGVyIHNjaHJlaWJlIG1pciBldHdhcywgZGFtaXQgaWNoIGRpciB3ZWl0ZXJoZWxmZW4ga2Fubi5cIixcclxuICAgICAgICAgICAgICAgIEludmFsaWRBY3Rpb246IFwiTGVpZGVyIGhhYmUgaWNoIGdlcmFkZSB0ZWNobmlzY2hlIFByb2JsZW1lLiBCaXR0ZSB2ZXJzdWNoZSBlcyBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIE1pY3JvcGhvbmVBY2Nlc3NEZW5pZWQ6IFwiTGVpZGVyIGthbm4gaWNoIGFrdHVlbGwgbmljaHQgYXVmIGRlaW4gTWlrcm9mb24genVncmVpZmVuLiBCaXR0ZSBzdGVsbGUgaW4gZGVpbmVuIEJyb3dzZXJlaW5zdGVsbHVuZ2VuIHNpY2hlciwgZGFzcyBpY2ggYXVmIGRlaW4gTWlrcm9mb24genVncmVpZmVuIGthbm4uXCIsXHJcbiAgICAgICAgICAgICAgICBNaWNyb3Bob25lTm90Rm91bmQ6IFwiTGVpZGVyIHNjaGVpbnQgZXMgc28sIGFscyBow6R0dGVzdCBkdSBrZWluIE1pa3JvZm9uLiBCaXR0ZSBzY2hsaWXDn2UgZWluIE1pa3JvZm9uIGFuIHVuZCB2ZXJzdWNoZSBlcyBhbnNjaGxpZcOfZW5kIGVybmV1dC5cIixcclxuICAgICAgICAgICAgICAgIE5vR2V0VXNlck1lZGlhQWNjZXNzOiBcIkxlaWRlciBrYW5uIGljaCBuaWNodCBhdWYgZGVpbiBNaWtyb2ZvbiB6dWdyZWlmZW4uIEJpdHRlIHN0ZWxsZSBzaWNoZXIsIGRhc3MgZHUgw7xiZXIgZWluIE1pa3JvZm9uIHZlcmbDvGdzdCB1bmQgZGllc2VzIGbDvHIgZGVuIFp1Z3JpZmYgZHVyY2ggZGVpbmVuIEJyb3dzZXIgZnJlaWdlZ2ViZW4gaXN0LlwiLFxyXG4gICAgICAgICAgICAgICAgV2ViR0xOb3RTdXBwb3J0ZWQ6IFwiTGVpZGVyIHdpcmQgV2ViR2wgdm9uIGRlaW5lbSBCcm93c2VyIG5pY2h0IHVudGVyc3TDvHR6dC4gQml0dGUgdmVyc3VjaGUgZXMgbWl0IGVpbmVtIGFuZGVyZW4gQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgTm9BdHRhY2htZW50c0luQWN0aXZpdHk6IFwiTGVpZGVyIGhhYmUgaWNoIGdlcmFkZSB0ZWNobmlzY2hlIFByb2JsZW1lLiBCaXR0ZSB2ZXJzdWNoZSBlcyBzcMOkdGVyIGVybmV1dC5cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJlbi1VU1wiOiB7XHJcbiAgICAgICAgICAgICAgICBDb21tdW5pY2F0aW9uU2VydmVySW5pdEZhaWxlZDogXCJVbmZvcnR1bmF0ZWx5IEkgY2FuJ3QgaGVscCB5b3UgcmlnaHQgbm93IGR1ZSB0byB0ZWNobmljYWwgcHJvYmxlbXMuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3UgYXJlIGNvbm5lY3RlZCB0byB0aGUgaW50ZXJuZXQuIElmIHRoaXMgaXMgdGhlIGNhc2UsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICBOb0NvbW11bmljYXRpb25TZXJ2ZXJDb25uZWN0aW9uOiBcIlVuZm9ydHVuYXRlbHkgSSBjYW4ndCBoZWxwIHlvdSByaWdodCBub3cgZHVlIHRvIHRlY2huaWNhbCBwcm9ibGVtcy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgY29ubmVjdGVkIHRvIHRoZSBpbnRlcm5ldC4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcclxuICAgICAgICAgICAgICAgIFJlZnJlc2hDb21tdW5pY2F0aW9uU2VydmVyVG9rZW5GYWlsZWQ6IFwiVW5mb3J0dW5hdGVseSBJIGNhbid0IGhlbHAgeW91IHJpZ2h0IG5vdyBkdWUgdG8gdGVjaG5pY2FsIHByb2JsZW1zLiBQbGVhc2UgbWFrZSBzdXJlIHRoYXQgeW91IGFyZSBjb25uZWN0ZWQgdG8gdGhlIGludGVybmV0LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgICAgICAgICAgQ29tbXVuaWNhdGlvblNlcnZlckNvbm5lY3Rpb25DbG9zZWQ6IFwiVW5mb3J0dW5hdGVseSBJIGNhbid0IGhlbHAgeW91IHJpZ2h0IG5vdyBkdWUgdG8gdGVjaG5pY2FsIHByb2JsZW1zLiBQbGVhc2UgbWFrZSBzdXJlIHRoYXQgeW91IGFyZSBjb25uZWN0ZWQgdG8gdGhlIGludGVybmV0LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgICAgICAgICAgRGlyZWN0TGluZVRva2VuRmFpbGVkOiBcIlVuZm9ydHVuYXRlbHkgSSBjYW4ndCBoZWxwIHlvdSByaWdodCBub3cgZHVlIHRvIHRlY2huaWNhbCBwcm9ibGVtcy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgY29ubmVjdGVkIHRvIHRoZSBpbnRlcm5ldC4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcclxuICAgICAgICAgICAgICAgIFJlZnJlc2hEaXJlY3RMaW5lVG9rZW5GYWlsZWQ6IFwiQm90IG9mZmxpbmVcIixcclxuICAgICAgICAgICAgICAgIERpcmVjdExpbmVLZWVwQWxpdmVGYWlsZWQ6IFwiVW5mb3J0dW5hdGVseSBJIGNhbid0IGhlbHAgeW91IHJpZ2h0IG5vdyBkdWUgdG8gdGVjaG5pY2FsIHByb2JsZW1zLiBQbGVhc2UgbWFrZSBzdXJlIHRoYXQgeW91IGFyZSBjb25uZWN0ZWQgdG8gdGhlIGludGVybmV0LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgICAgICAgICAgTG93QmFuZHdpZHRoOiBcIkJvdGggY29uZGl0aW9ucyBpbmRpY2F0ZSBhIGJhZCBpbnRlcm5ldCBjb25uZWN0aW9uIGFuZCBpdOKAmXMgaGlnaGx5IHJlY29tbWVuZGVkIHRvIGRpc2FibGUgU3BlZWNoLXRvLVRleHQuXCIsXHJcbiAgICAgICAgICAgICAgICBCb3RDb21tdW5pY2F0aW9uRmFpbGVkOiBcIlRoZSBEaXJlY3RMaW5lIGNvbW11bmljYXRpb24gdG8gdGhlIGJvdCBzZXJ2aWNlIGZhaWxlZC4gVGhpcyBtaWdodCBpbmRpY2F0ZSB0aGF0IHRoZSBib3QgaXMgb2ZmbGluZSwgb3IgYW4gQXp1cmUgcmVzb3VyY2UgaXMgbm90IHdvcmtpbmcgcHJvcGVybHksIGJ1dCBpdOKAmXMgbW9yZSBsaWtlbHkgdGhhdCB0aGUgaW50ZXJuZXQgY29ubmVjdGlvbiBpcyBicm9rZW4uXCIsXHJcbiAgICAgICAgICAgICAgICBJbnZhbGlkQ2FtZXJhQWRqdXN0bWVudDogXCJVbmZvcnR1bmF0ZWx5LCBJJ20gaGF2aW5nIHRlY2huaWNhbCBwcm9ibGVtcyByaWdodCBub3cuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICBJbnZhbGlkQ2FudmFzU2l6ZTogXCJVbmZvcnR1bmF0ZWx5LCBJJ20gaGF2aW5nIHRlY2huaWNhbCBwcm9ibGVtcyByaWdodCBub3cuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlVG9Cb3RFbXB0eTogXCJPaCwgaXQgc2VlbXMgeW91IGhhdmVuJ3QgdG9sZCBtZSBhbnl0aGluZy4gUGxlYXNlIHRlbGwgbWUgb3Igd3JpdGUgc29tZXRoaW5nIHNvIEkgY2FuIGhlbHAgeW91LlwiLFxyXG4gICAgICAgICAgICAgICAgSW52YWxpZEFjdGlvbjogXCJVbmZvcnR1bmF0ZWx5LCBJJ20gaGF2aW5nIHRlY2huaWNhbCBwcm9ibGVtcyByaWdodCBub3cuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICBNaWNyb3Bob25lQWNjZXNzRGVuaWVkOiBcIlVuZm9ydHVuYXRlbHkgSSBjYW5ub3QgYWNjZXNzIHlvdXIgbWljcm9waG9uZSBhdCB0aGUgbW9tZW50LiBQbGVhc2UgbWFrZSBzdXJlIGluIHlvdXIgYnJvd3NlciBzZXR0aW5ncyB0aGF0IEkgY2FuIGFjY2VzcyB5b3VyIG1pY3JvcGhvbmUuXCIsXHJcbiAgICAgICAgICAgICAgICBNaWNyb3Bob25lTm90Rm91bmQ6IFwiVW5mb3J0dW5hdGVseSwgaXQgYXBwZWFycyB0aGF0IHlvdSBkbyBub3QgaGF2ZSBhIG1pY3JvcGhvbmUuIFBsZWFzZSBjb25uZWN0IGEgbWljcm9waG9uZSBhbmQgdHJ5IGFnYWluIGFmdGVyd2FyZHMuXCIsXHJcbiAgICAgICAgICAgICAgICBOb0dldFVzZXJNZWRpYUFjY2VzczogXCJVbmZvcnR1bmF0ZWx5LCBJIGNhbid0IGFjY2VzcyB5b3VyIG1pY3JvcGhvbmUuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3UgaGF2ZSBhIG1pY3JvcGhvbmUgYW5kIHRoYXQgaXQgaXMgZW5hYmxlZCBmb3IgYWNjZXNzIGJ5IHlvdXIgYnJvd3Nlci5cIixcclxuICAgICAgICAgICAgICAgIFdlYkdMTm90U3VwcG9ydGVkOiBcIlVuZm9ydHVuYXRlbHkgV2ViR2wgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXIuIFBsZWFzZSB0cnkgYW5vdGhlciBicm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBOb0F0dGFjaG1lbnRzSW5BY3Rpdml0eTogXCJVbmZvcnR1bmF0ZWx5LCBJJ20gaGF2aW5nIHRlY2huaWNhbCBwcm9ibGVtcyByaWdodCBub3cuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBNdXN0IGJlIG92ZXJyaWRlbiBpbiBkZXJpdmVkIGNsYXNzZXMgaWYgbmVlZGVkLlxyXG4gICAgICAgIC8vIFRoaXMgYXNzb2NpYXRpdmUgYXJyYXkgd2lsbCBjb250YWluIHRoZSB0ZXh0IGNvbnRlbnRzIGZvciB0aGUgY2hhcmFjdGVyJ3MgaHRtbCB0ZW1wbGF0ZS5cclxuICAgICAgICB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIFwiZGUtREVcIjoge1xyXG4gICAgICAgICAgICAgICAgdXNlcklucHV0Q29udGFpbmVyVGl0bGU6IFwiV2llIGthbm4gaWNoIElobmVuIGhlbGZlbj9cIixcclxuICAgICAgICAgICAgICAgIGFza01lQ29udGFpbmVyVGl0bGU6IFtcIkZyYWcgbWljaCFcIiwgXCJEYW5rZVwiXSxcclxuICAgICAgICAgICAgICAgIHVzZXJJbnB1dFBsYWNlaG9sZGVyOiBbXCJOYWNocmljaHQgc2VuZGVuLi4uXCIsIFwiSWNoIGjDtnJlIHp1Li4uXCJdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImVuLVVTXCI6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJbnB1dENvbnRhaW5lclRpdGxlOiBcIldoYXQgY2FuIEkgaGVscCB5b3Ugd2l0aD9cIixcclxuICAgICAgICAgICAgICAgIGFza01lQ29udGFpbmVyVGl0bGU6IFtcIkFzayBtZSFcIiwgXCJUaGFuayB5b3VcIl0sXHJcbiAgICAgICAgICAgICAgICB1c2VySW5wdXRQbGFjZWhvbGRlcjogW1wiU2VuZCBhIG1lc3NhZ2UuLi5cIiwgXCJJIGFtIGxpc3RlbmluZy4uLlwiXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJodS1IVVwiOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySW5wdXRDb250YWluZXJUaXRsZTogXCJNaWJlbiBzZWfDrXRoZXRlaz9cIixcclxuICAgICAgICAgICAgICAgIGFza01lQ29udGFpbmVyVGl0bGU6IFtcIkvDqXJkZXp6ZW4hXCIsIFwiS8O2c3rDtm7Dtm1cIl0sXHJcbiAgICAgICAgICAgICAgICB1c2VySW5wdXRQbGFjZWhvbGRlcjogW1wiw5x6ZW5ldCBrw7xsZMOpc2UuLi5cIiwgXCJIYWxsZ2F0b20uLi5cIl0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBFdmVyeSB2ZXJzaW9uIG9mIExhaWxvIG5lZWRzIGEgY3VzdG9taXplZCBib3RTdGF0ZUNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIG11c3QgYmUgb3ZlcnJpZGVuIGluIGRlcml2ZWQgY2xhc3Nlcy5cclxuICAgICAgICB0aGlzLmJvdFN0YXRlQ29sbGVjdGlvbiA9IHtcclxuICAgICAgICAgICAgYmVmb3JlQm90SW5pdGlhbGl6ZWQ6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6ICgpID0+IHsgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaWRsZToge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlTdGF0ZTogKCkgPT4geyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaXN0ZW5pbmc6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6ICgpID0+IHsgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5zd2VyaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoZGF0YSkgPT4geyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlTdGF0ZTogKGVycikgPT4geyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRmlsdGVycyBvdXQgdGhlIENETiBzY3JpcHQgdGFnIGZyb20gdGhlIERPTSBhbmQgcmVwbGFjZXMgdGhlIEphdmFTY3JpcHQgdmlhIHRoZSBtYXRjaGluZyBDU1MuXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgbWFrZXMgaXQgcG9zc2libGUgdG8gbWlncmF0ZSBDRE5zIHdpdGhvdXQgaGF2aW5nIHRvIHRvdWNoIHRoaXMgY29kZS5cclxuICAgICAgICAgKiBAcGFyYW0gd2lkZ2V0VHlwZSB0eXBlIG9mIHRoZSB3aWRnZXQgYXMgc3RyaW5nXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jcmVhdGVDU1NTb3VyY2UgPSAod2lkZ2V0VHlwZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIGNvbnN0IGNkblNjcmlwdFNvdXJjZSA9IChfYSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFwiKSkuZmluZChzY3JpcHRFbGVtZW50ID0+IHNjcmlwdEVsZW1lbnQuc3JjLmluY2x1ZGVzKFwibGFpbG8vc21hcnQtY2hhcmFjdGVyXCIpKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNyYztcclxuICAgICAgICAgICAgaWYgKCFjZG5TY3JpcHRTb3VyY2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHVybEZyYWdtZW50cyA9IGNkblNjcmlwdFNvdXJjZS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgIHVybEZyYWdtZW50c1t1cmxGcmFnbWVudHMubGVuZ3RoIC0gMV0gPSBgJHt3aWRnZXRUeXBlfS5jc3NgO1xyXG4gICAgICAgICAgICByZXR1cm4gdXJsRnJhZ21lbnRzLmpvaW4oXCIvXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZUNvZGUgPVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb24pLmZpbmQoKGtleSkgPT4ga2V5ID09PSB0aGlzLmxhbmd1YWdlKSB8fCAvLyBMb29raW5nIGZvciB0aGUga2V5IGluIHRoZSBhc3NvY2lhdGl2ZSBhcnJheSB0byB1c2UgaXQgZm9yIGZpbHRlcmluZyBsYXRlciBvblxyXG4gICAgICAgICAgICAgICAgXCJlbi1VU1wiOyAvLyBPciB1c2luZyB0aGUgZW5nbGlzaCBvbmVzIGFzIGEgZmFsbGJhY2tcclxuICAgICAgICB0aGlzLmluamVjdERlcGVuZGVuY2llcygpO1xyXG4gICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIGFyZSB0aGUgYmFyZSBtaW5pbXVtIGZvciB0aGUgc2ltcGxlc3Qgd2lkZ2V0IChza2VsZXRvbikgdG8gZnVuY3Rpb24uXHJcbiAgICAgICAgLy8gVGhleSB3aWxsIGJlIGluamVjdGVkIGluIHRoZSBvdmVycmlkZW4gbWV0aG9kIGluIExhaWxvU2tlbGV0b25cclxuICAgICAgICB0aGlzLm1pY0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tbWljcm9waG9uZS1idXR0b25cIik7XHJcbiAgICAgICAgdGhpcy5taWNJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWlsby1taWNyb3Bob25lLWljb25cIik7XHJcbiAgICAgICAgdGhpcy5ib3RJbnRlZ3JhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8td2lkZ2V0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tY2hhcmFjdGVyLWNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1wiKTtcclxuICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tdXNlci1pbnB1dFwiKTtcclxuICAgICAgICB0aGlzLmhpZGVVc2VySW5wdXRDb250YWluZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFpbG8td2lkZ2V0LXRvZ2dsZS1idXR0b24nKTtcclxuICAgICAgICB0aGlzLnVzZXJJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tdXNlci1pbnB1dC1jb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXRDb250YWluZXJUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tdXNlci1pbnB1dC1jb250YWluZXItdGl0bGVcIik7XHJcbiAgICAgICAgdGhpcy5ib3RPdXRwdXRUZXh0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFpbG8tYW5zd2VyLXRleHQtZmllbGQnKTtcclxuICAgICAgICB0aGlzLnR5cGVJdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYWlsby1leGFtcGxlLXF1ZXN0aW9ucycpO1xyXG4gICAgICAgIHRoaXMuaW5pdFR5cGVJdCgpO1xyXG4gICAgICAgIC8vIEVuZCBvZiBjb25zdHJ1Y3RvclxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmplY3RzIGFsbCB0aGUgZGVwZW5kZW5jaWVzIGluIHRoZSBiYXNlIGNsYXNzZXMncyBjb25zdHJ1Y3Rvci5cclxuICAgICAqIFRoZSBjaGFyYWN0ZXIncyBIVE1MIFRlbXBsYXRlLCBpdHMgQ1NTIFRlbXBsYXRlIGFuZCBGb250IEF3ZXNvbWUgd2lsbCBiZSBhZGRlZCB0byB0aGUgRE9NLlxyXG4gICAgICogRXZlcnkgdmVyc2lvbiBvZiB0aGUgY2hhcmFjdGVyIG5lZWRzIHRoZXNlIGRlcGVuZGVuY2llcyB0byBvcGVyYXRlIHByb3Blcmx5LlxyXG4gICAgICovXHJcbiAgICBpbmplY3REZXBlbmRlbmNpZXMoKSB7XHJcbiAgICAgICAgdGhpcy5pbmplY3RIdG1sVGVtcGxhdGUoKTtcclxuICAgICAgICB0aGlzLmluamVjdENzc1RlbXBsYXRlKHRoaXMud2lkZ2V0VHlwZSk7XHJcbiAgICAgICAgdGhpcy5pbmplY3RGb250QXdlc29tZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEeW5hbWljYWxseSBpbmplY3RzIHRoZSBsaW5rIHRhZyBvZiB0aGUgY2hhcmFjdGVyJ3MgQ1NTIGludG8gdGhlIGhlYWQuXHJcbiAgICAgKiBAcGFyYW0gd2lkZ2V0VHlwZSBUeXBlIG9mIHRoZSBjaGFyYWN0ZXIuIFwic3RhbmRBbG9uZVwiIHwgXCJ0aW55V2lkZ2V0XCIgfCBcImhhbGZTY3JlZW5XaWRnZXRcIlxyXG4gICAgICovXHJcbiAgICBpbmplY3RDc3NUZW1wbGF0ZSh3aWRnZXRUeXBlKSB7XHJcbiAgICAgICAgY29uc3QgbGFpbG9TdHlsZVNoZWV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWlsby1zdHlsZXNoZWV0XCIpO1xyXG4gICAgICAgIGlmIChsYWlsb1N0eWxlU2hlZXQpIHtcclxuICAgICAgICAgICAgbGFpbG9TdHlsZVNoZWV0LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjc3NTb3VyY2UgPSB0aGlzLmNyZWF0ZUNTU1NvdXJjZSh3aWRnZXRUeXBlKTtcclxuICAgICAgICBjb25zdCBmaXJzdExpbmtUYWdJbkhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZCBsaW5rXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IENoYW5nZSBIUkVGIHRvIENETidzIHVybCBpbiBwcm9kdWN0aW9uXHJcbiAgICAgICAgY29uc3QgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XHJcbiAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcclxuICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgYGxhaWxvLXN0eWxlc2hlZXRgKTtcclxuICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgLi8ke3dpZGdldFR5cGV9LmNzc2ApO1xyXG4gICAgICAgIC8vIGNzcy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGNzc1NvdXJjZSEpO1xyXG4gICAgICAgIHRoaXMuaGVhZC5pbnNlcnRCZWZvcmUoY3NzLCBmaXJzdExpbmtUYWdJbkhlYWQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmplY3RzIHRoZSBGb250IEF3ZXNvbWUgQ0ROIHRvIHRoZSBkb2N1bWVudCdzIGhlYWQuIEZvbnQgQXdlc29tZSBpcyBvbmUgb2YgdGhlIGNoYXJhY3RlcidzIGRlcGVuZGVuY2llcyBhbmQgd2lsbCBiZSBkeW5hbWljYWxseSBpbmplY3RlZCBpbnRvIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIGluamVjdEZvbnRBd2Vzb21lKCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0TGlua1RhZ0luSGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkIGxpbmtcIik7XHJcbiAgICAgICAgY29uc3QgZm9udEF3ZXNvbWVDc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICAgICAgICBmb250QXdlc29tZUNzcy5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xyXG4gICAgICAgIGZvbnRBd2Vzb21lQ3NzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTQuMC9jc3MvYWxsLmNzc1wiKTtcclxuICAgICAgICBmb250QXdlc29tZUNzcy5zZXRBdHRyaWJ1dGUoXCJpbnRlZ3JpdHlcIiwgXCJzaGEzODQtSHpMZUJ1aG9OUHZTbDVLWW5qeDBCVCtXQjBRRUVxTHByTytOQmtrazVnYmM2N0ZUYUw3WElHYTJ3MUwwWGJnY1wiKTtcclxuICAgICAgICBmb250QXdlc29tZUNzcy5zZXRBdHRyaWJ1dGUoXCJjcm9zc29yaWdpblwiLCBcImFub255bW91c1wiKTtcclxuICAgICAgICB0aGlzLmhlYWQuaW5zZXJ0QmVmb3JlKGZvbnRBd2Vzb21lQ3NzLCBmaXJzdExpbmtUYWdJbkhlYWQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgYSBUeXBlSXQgb2JqZWN0IHVzaW5nIHRoZSB0eXBlSXRTdHJpbmdBcnJheVxyXG4gICAgICovXHJcbiAgICBpbml0VHlwZUl0KCkge1xyXG4gICAgICAgIG5ldyBUeXBlSXQoYCMke3RoaXMudHlwZUl0Q29udGFpbmVyLmlkfWAsIHtcclxuICAgICAgICAgICAgc3RyaW5nczogdGhpcy50eXBlSXRTdHJpbmdBcnJheSxcclxuICAgICAgICAgICAgbGlmZUxpa2U6IHRydWUsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIHdhaXRVbnRpbFZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGJyZWFrTGluZXM6IGZhbHNlXHJcbiAgICAgICAgfSkuZ28oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIGVhY2ggaHRtbCBlbGVtZW50IHRoYXQgaGFkIGJlZW4gZGVjbGFyZWQgaW4gdGhlIGh0bWxUZXh0Q29udGVudENvbGxlY3Rpb24gb2JqZWN0LlxyXG4gICAgICogVGhpcyBtZXRob2QgbXVzdCBiZSBvdmVycmlkZGVuIGFuZCBhZGp1c3RlZCB0byB0aGUgZGVyaXZlZCBjbGFzcydzIGh0bWwgdGVtcGxhdGUgc3RydWN0dXJlLlxyXG4gICAgICovXHJcbiAgICBzZXRIdG1sVGV4dENvbnRlbnRzKCkge1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0Q29udGFpbmVyVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdLnVzZXJJbnB1dENvbnRhaW5lclRpdGxlO1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5odG1sVGV4dENvbnRlbnRDb2xsZWN0aW9uW3RoaXMubGFuZ3VhZ2VDb2RlXS51c2VySW5wdXRQbGFjZWhvbGRlclswXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRXZlcnkgdmVyc2lvbiBvZiBMYWlsbyBuZWVkcyBjdXN0b21pemVkIGV2ZW50IGxpc3RlbmVycy5cclxuICAgICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgb3ZlcnJpZGRlbiBhbmQgYWRqdXN0ZWQgdG8gdGhlIGRlcml2ZWQgY2xhc3MncyBodG1sIHRlbXBsYXRlIHN0cnVjdHVyZS5cclxuICAgICAqIERvbid0IGZvcmdldCB0byBjYWxsIHN1cGVyKCkuYWRkRXZlbnRMaXN0ZW5lcnMgdGhvdWdoID0pXHJcbiAgICAgKi9cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMubWljQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLm9uTGlzdGVuQnV0dG9uQ2xpY2soKSk7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB0aGlzLm9uRW50ZXJQcmVzc2VkKGUpKTtcclxuICAgICAgICB0aGlzLmhpZGVVc2VySW5wdXRDb250YWluZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZUJvdEludGVncmF0aW9uQ29udGFpbmVyKCkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGluZyB0aGUgXCJjb250YWluZXItc2hvd1wiIGNsYXNzIG9uIHRoZSBib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgdG9nZ2xlQm90SW50ZWdyYXRpb25Db250YWluZXIoKSB7XHJcbiAgICAgICAgdGhpcy5ib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb250YWluZXItc2hvdycpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBtb2RlbCdzIHN0YXRlIGFjY29yZGluZyB0byBzdGFnZXMgb2YgdXNlciBpbnRlcmFjdGlvbi5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBcImJlZm9yZUJvdEluaXRpYWxpemVkXCIgfCBcImlkbGVcIiB8IFwibGlzdGVuaW5nXCIgfCBcImFuc3dlcmluZ1wiIHwgXCJlcnJvclwiXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBJQm90UmVzcG9uc2Ugb2JqZWN0IHdoaWNoIHdpbGwgYmUgdXNlZCBpbiBcImFuc3dlcmluZ1wiIGFuZCBcImVycm9yXCIgc3RhdGVzXHJcbiAgICAgKi9cclxuICAgIHNldEJvdFN0YXRlKHN0YXRlLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVBY3Rpb24gPSB0aGlzLmJvdFN0YXRlQ29sbGVjdGlvbltzdGF0ZV07XHJcbiAgICAgICAgc3RhdGVBY3Rpb24uYXBwbHlTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGluZyB0aGUgdXNlciBpbnB1dCdzIHZhbHVlIHRvIG5vdGhpbmcgKHJlc2V0dGluZyB0aGUgZmllbGQpXHJcbiAgICAgKi9cclxuICAgIGNsZWFyVXNlcklucHV0RmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQudmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIC8qKlNldHRpbmcgdGhlIHZhbHVlIG9mIHRoZSB1c2VyIGlucHV0LiBJdCB3aWxsIGJlIGltcG9ydGFudCBpZiB0aGUgdXNlciB1c2VkIHRoZSBtaWNyb3Bob25lIHRvIGNvbW11bmljYXRlIHdpdGggdGhlIGNoYXJhY3RlciB0byBzaG93IHdoYXQgdGhlIGNoYXJhY3RlciB1bmRlcnN0b29kLlxyXG4gICAgICovXHJcbiAgICBzZXRVc2VySW5wdXRDb250ZW50KHRleHQpIHtcclxuICAgICAgICB0aGlzLnVzZXJJbnB1dC52YWx1ZSA9IHRleHQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBzaW1wbGUgSFRNTCBwYXJhZ3JhcGggZWxlbWVudCB3aGljaCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBib3RPdXRwdXRUZXh0RmllbGQgaW4gdGhlIGRlcml2ZWQgY2xhc3Nlcy5cclxuICAgICAqIEBwYXJhbSB0ZXh0IFRleHQgY29udGVudCBvZiB0aGUgcGFyYWdyYXBoXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVBhcmFncmFwaCh0ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIEhUTUwgYW5jaG9yIGVsZW1lbnQgd2hpY2ggd2lsbCBiZSBkaXNwbGF5ZWQgYXMgYSBidXR0b24gdG8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gYSBuZXcgdGFiLlxyXG4gICAgICogQHBhcmFtIHRhcmdldCBUaGUgaHJlZiBhdHRyaWJ1dGUgb2YgdGhlIGFuY2hvciB0YWdcclxuICAgICAqIEBwYXJhbSBjYXB0aW9uIFRleHQgY29udGVudCBvZiB0aGUgYW5jaG9yIHRhZ1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVBbmNob3IodGFyZ2V0LCBjYXB0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB0YXJnZXQpO1xyXG4gICAgICAgIGEuY2xhc3NOYW1lID0gXCJsYWlsby1saW5rXCI7XHJcbiAgICAgICAgYS50ZXh0Q29udGVudCA9IGNhcHRpb247XHJcbiAgICAgICAgYS50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgICAgIGEucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENoZWNraW5nIGlmIHRoZSB1c2VyIHByZXNzZWQgRW50ZXIgd2hpbGUgZm9jdXNpbmcgdGhlIHVzZXIgaW5wdXQuIFRoZSBpbnB1dCB2YWx1ZSB3aWxsIGJlIGNoZWNrZWQgdG8gZmlsdGVyIG91dCBpZiBhbiBpbnB1dCBjb25zdGlzdCBvZiBvbmx5IHdoaXRlIHNwYWNlc1xyXG4gICAgICogVGhlIGNoYXJhY3RlcidzIFwic2VuZFwiIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBpbnB1dCB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBlIFRoZSBldmVudCBvYmplY3RcclxuICAgICAqL1xyXG4gICAgb25FbnRlclByZXNzZWQoZSkge1xyXG4gICAgICAgIGlmIChlLndoaWNoID09IDEzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbnB1dFZhbHVlID0gdGhpcy51c2VySW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh1c2VySW5wdXRWYWx1ZSAhPSBcIlwiICYmIHVzZXJJbnB1dFZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLnNlbmQodXNlcklucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VzIHRoZSBhc3NvY2lhdGl2ZSBhcnJheSBvZiBlcnJvciBtZXNzYWdlcyBhY2NvcmRpbmcgdG8gdGhlIGNob3NlbiBsYW5ndWFnZSB0byBmaW5kIHRoZSBtYXRjaGluZyBlcnJvciBtZXNzYWdlIHRvIGFuIGVycm9yIGNvZGUuXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDb2RlIEtleSBvZiB0aGUgZXJyb3Igb2JqZWN0IHdoaWNoIHdpbGwgYmUgc2VudCBieSB0aGUgc2VydmVyIGlmIHNvbWV0aGluZyBnb2VzIHdyb25nXHJcbiAgICAgKi9cclxuICAgIGZpbmRFcnJvck1lc3NhZ2UoZXJyb3JDb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlQ29sbGVjdGlvblt0aGlzLmxhbmd1YWdlQ29kZV1bZXJyb3JDb2RlXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbHMgdGhlIGNoYXJhY3RlcidzIFwibGlzdGVuXCIgZnVuY3Rpb24uXHJcbiAgICAgKiBIaWRlcyB0aGUgbWljcm9waG9uZSBpY29uIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgc3Bpbm5lciB1bnRpbCB0aGUgbGlzdGVuaW5nIHN0YXRlIGlzIGluaXRpYWxpemVkLlxyXG4gICAgICovXHJcbiAgICBvbkxpc3RlbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMubWljSWNvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgd2luZG93LmNoYXJhY3Rlci5saXN0ZW4oKTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNoYXJhY3RlcidzIHJlc3BvbnNlIHdpbGwgYmUgZXZhbHVhdGVkLiBJbiBjYXNlIG9mIGFuIElFcnJvckJvdFJlc3BvbnNlIHRoZSBcImhhbmRsZUJvdE91dHB1dElmRXJyb3JcIiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgYW5kIHRoaXMgbWV0aG9kIHdpbGwgYmUgdGVybWluYXRlZC5cclxuICAgICAqIE90aGVyd2lzZSB0aGUgSVN1Y2Nlc3NmdWxCb3RSZXBvbnNlIG9iamVjdCB3aWxsIGJlIGV2YWx1YXRlZCBhbmQgdGhlIHRleHQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGJvdCBhbnN3ZXIgY29udGFpbmVyLlxyXG4gICAgICogSWYgdGhlIFJlcG9uc2Ugb2JqZWN0IGNvbnRhaW5zIGFuIFwiYWN0aW9uc1wiIGFycmF5IG9mIG9iamVjdHMsIHRoYXQgYXJyYXkgd2lsbCBiZSBmaWx0ZXJlZCBvdXQgZm9yIGEgJ3VybFJlZGlyZWN0JyB0eXBlIHRvIHVzZSB0aGUgdXJsIGFuZCBjYXB0aW9uIHRvIGNyZWF0ZSBhIHJlZGlyZWN0aW5nIGFuY2hvciB0YWdcclxuICAgICAqIEBwYXJhbSBkYXRhIElCb3RSZXNwb25zZSBvYmplY3Qgd2hpY2ggY2FuIGJlIGFuIElTdWNjZXNzZnVsQm90UmVzcG9uc2Ugb3IgYW4gSUVycm9yQm90UmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSByZXNwb25zZVN0YXR1cyBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIlxyXG4gICAgICovXHJcbiAgICByZW5kZXJQYXJhZ3JhcGhzRnJvbUFuc3dlcihkYXRhLCByZXNwb25zZVN0YXR1cyA9ICdzdWNjZXNzJykge1xyXG4gICAgICAgIHRoaXMuYm90T3V0cHV0VGV4dEZpZWxkLnN0eWxlLmNvbG9yID0gJ2dyZXknO1xyXG4gICAgICAgIHRoaXMuYm90T3V0cHV0VGV4dEZpZWxkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIC8vIEhhbmRsaW5nIGVycm9yc1xyXG4gICAgICAgIGlmIChyZXNwb25zZVN0YXR1cyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUJvdE91dHB1dElmRXJyb3IoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSGFuZGxpbmcgc3VjY2Vzc2Z1bCByZXNwb25zZXNcclxuICAgICAgICBjb25zdCB7IHRleHQsIGFjdGlvbnMgfSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IHBhcmFncmFwaHMgPSBbXTtcclxuICAgICAgICBwYXJhZ3JhcGhzLnB1c2godGhpcy5jcmVhdGVQYXJhZ3JhcGgodGV4dCkpO1xyXG4gICAgICAgIC8vIEhhbmRsaW5nIHRoZSBhY3Rpb25zIGlmIHRoZXJlIGFyZSBhbnlcclxuICAgICAgICBpZiAoYWN0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCB1cmxBY3Rpb25zID0gYWN0aW9ucy5maWx0ZXIoKGFjdGlvbikgPT4gYWN0aW9uLnR5cGUgPT09ICd1cmxSZWRpcmVjdCcpO1xyXG4gICAgICAgICAgICB1cmxBY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IHRoaXMuY3JlYXRlQW5jaG9yKGFjdGlvbi51cmwsIGFjdGlvbi5jYXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIHBhcmFncmFwaHMucHVzaChhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFncmFwaHMuZm9yRWFjaCgocCkgPT4gdGhpcy5ib3RPdXRwdXRUZXh0RmllbGQucHJlcGVuZChwKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEEgc2ltcGxlIHJlZCBwYXJhZ3JhcGggd2lsbCBiZSBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgYm90T3V0cHV0VGV4dEZpZWxkLlxyXG4gICAgICogQHBhcmFtIGVycm9yIElFcnJvckJvdFJlc3BvbnNlIG9iamVjdCB3aGljaCBjb250YWlucyBhbiBlcnJvckNvZGUgcHJvcGVydHkuXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZUJvdE91dHB1dElmRXJyb3IoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLmJvdE91dHB1dFRleHRGaWVsZC5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLmNyZWF0ZVBhcmFncmFwaCh0aGlzLmZpbmRFcnJvck1lc3NhZ2UoZXJyb3IuZXJyb3JDb2RlKSk7XHJcbiAgICAgICAgdGhpcy5ib3RPdXRwdXRUZXh0RmllbGQuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTGFpbG9UaW55V2lkZ2V0IH0gZnJvbSBcIi4vTGFpbG9UaW55V2lkZ2V0XCI7XHJcbmltcG9ydCBoYWxmU2NyZWVuV2lkZ2V0VGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGVzL2hhbGZTY3JlZW5XaWRnZXRUZW1wbGF0ZS5odG1sJztcclxuY2xhc3MgTGFpbG9IYWxmU2NyZWVuV2lkZ2V0IGV4dGVuZHMgTGFpbG9UaW55V2lkZ2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKGJvdFNlY3JldCwgbWFpbkNvbnRhaW5lcklkLCBjYW1lcmFBZGp1c3RtZW50LCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpIHtcclxuICAgICAgICBzdXBlcihib3RTZWNyZXQsIG1haW5Db250YWluZXJJZCwgY2FtZXJhQWRqdXN0bWVudCwgbGFuZ3VhZ2UsIHdpZGdldFR5cGUsIHR5cGVJdFN0cmluZ0FycmF5KTtcclxuICAgICAgICB0aGlzLmJvdFNlY3JldCA9IGJvdFNlY3JldDtcclxuICAgICAgICB0aGlzLm1haW5Db250YWluZXJJZCA9IG1haW5Db250YWluZXJJZDtcclxuICAgICAgICB0aGlzLmNhbWVyYUFkanVzdG1lbnQgPSBjYW1lcmFBZGp1c3RtZW50O1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgICAgICB0aGlzLndpZGdldFR5cGUgPSB3aWRnZXRUeXBlO1xyXG4gICAgICAgIHRoaXMudHlwZUl0U3RyaW5nQXJyYXkgPSB0eXBlSXRTdHJpbmdBcnJheTtcclxuICAgIH1cclxuICAgIGluamVjdEh0bWxUZW1wbGF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1haW5Db250YWluZXJJZCkuaW5uZXJIVE1MID0gaGFsZlNjcmVlbldpZGdldFRlbXBsYXRlLnRyaW0oKTtcclxuICAgIH1cclxuICAgIHJlc2l6ZUJvdElmVXNlcklucHV0SGlkZGVuKCkge1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDg2OCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRhaW5lci1zaG93JykpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIucmVzaXplKDY4MCwgOTMwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIucmVzaXplKDIwMCwgMzU1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93LmNoYXJhY3Rlci5yZXNpemUoMzAwLCA0NTUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYWlsb0hhbGZTY3JlZW5XaWRnZXQ7XHJcbiIsImltcG9ydCB7IExhaWxvQmFzZSB9IGZyb20gXCIuL0xhaWxvQmFzZVwiO1xyXG5pbXBvcnQgc3RhbmRBbG9uZVRlbXBsYXRlIGZyb20gXCIuLi90ZW1wbGF0ZXMvc3RhbmRBbG9uZVRlbXBsYXRlLmh0bWxcIjtcclxuZXhwb3J0IGNsYXNzIExhaWxvU3RhbmRBbG9uZSBleHRlbmRzIExhaWxvQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib3RTZWNyZXQsIG1haW5Db250YWluZXIsIGNhbWVyYUFkanVzdG1lbnQgPSBcImxvbmdzaG90XCIsIGxhbmd1YWdlLCB3aWRnZXRUeXBlLCB0eXBlSXRTdHJpbmdBcnJheSkge1xyXG4gICAgICAgIHN1cGVyKGJvdFNlY3JldCwgbWFpbkNvbnRhaW5lciwgY2FtZXJhQWRqdXN0bWVudCwgbGFuZ3VhZ2UsIHdpZGdldFR5cGUsIHR5cGVJdFN0cmluZ0FycmF5KTtcclxuICAgICAgICB0aGlzLmJvdFNlY3JldCA9IGJvdFNlY3JldDtcclxuICAgICAgICB0aGlzLm1haW5Db250YWluZXIgPSBtYWluQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQWRqdXN0bWVudCA9IGNhbWVyYUFkanVzdG1lbnQ7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0VHlwZSA9IHdpZGdldFR5cGU7XHJcbiAgICAgICAgdGhpcy50eXBlSXRTdHJpbmdBcnJheSA9IHR5cGVJdFN0cmluZ0FycmF5O1xyXG4gICAgICAgIHRoaXMudG9nZ2xlSW5wdXRQYW5lbEljb25zID0ge1xyXG4gICAgICAgICAgICBcImNsb3NlZFwiOiBcImZhcyBmYS1wZW5cIixcclxuICAgICAgICAgICAgXCJvcGVuXCI6IFwiZmFzIGZhLXRpbWVzXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhhbmRsZXMgdGhlIGNoYXJhY3RlcidzIHNpemUgYW5kIGNhbWVyYSBhZGp1c3RtZW50IGRlcGVuZGluZyBvbiB0aGUgaW5wdXQgcGFuZWwgc3RhdGUuXHJcbiAgICAgICAgICogQWxzbyBkeW5hbWljYWxseSBjaGFuZ2VzIHRoZSBpY29uJ3Mgb2YgdGhlIGhpZGUtdXNlci1pbnB1dC1jb250YWluZXItYnV0dG9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5oYW5kbGVVc2VySW5wdXRQYW5lbFN0YXRlQ2hhbmdlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODY5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUF2YXRhclZpZXdPbklucHV0UGFuZWxPcGVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuYm90SW50ZWdyYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29udGFpbmVyLXNob3dcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVVzZXJJbnB1dENvbnRhaW5lckJ0bi5xdWVyeVNlbGVjdG9yKFwiI2xhaWxvLXRvZ2dsZS1pbnB1dC1wYW5lbC1pY29uXCIpLmNsYXNzTmFtZSA9IHRoaXMudG9nZ2xlSW5wdXRQYW5lbEljb25zW1wib3BlblwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVVzZXJJbnB1dENvbnRhaW5lckJ0bi5xdWVyeVNlbGVjdG9yKFwiI2xhaWxvLXRvZ2dsZS1pbnB1dC1wYW5lbC1pY29uXCIpLmNsYXNzTmFtZSA9IHRoaXMudG9nZ2xlSW5wdXRQYW5lbEljb25zW1wiY2xvc2VkXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXNpemVzIHRoZSBhdmF0YXIgZGVwZW5kaW5nIG9uIHRoZSB1c2VyIGlucHV0IHBhbmVsJ3Mgc3RhdGUuXHJcbiAgICAgICAgICogSWYgY2xvc2VkLCB0aGUgY2hhcmFjdGVyIGlzIGluIGxvbmdzaG90IG1vZGUgYW5kIGZpbGxzIHRoZSBzY3JlZW5cclxuICAgICAgICAgKiBJZiBvcGVuLCB0aGUgY2hhcmFjdGVyIGlzIGluIG1lZGl1bSBtb2RlIGFuZCB3aWxsIGJlIHNocnVuayBkb3duXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VBdmF0YXJWaWV3T25JbnB1dFBhbmVsT3BlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdEludGVncmF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImNvbnRhaW5lci1zaG93XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUFkanVzdG1lbnQgPSBcIm1lZGl1bVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBZGp1c3RtZW50ID0gXCJsb25nc2hvdFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIuYWRqdXN0Q2FtZXJhKHRoaXMuY2FtZXJhQWRqdXN0bWVudCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH0sIDQ1MCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBLZWVwIGl0IGFuIGFycm93IGZ1bmN0aW9uIChpbnN0YW5jZSBtZXRob2QpXHJcbiAgICAgICAgLy8gQWRkcyBvciByZW1vdmVzIHRoZSBcInNob3dcIiBjbGFzcyBvbiB0aGUgdXNlcklucHV0XHJcbiAgICAgICAgdGhpcy50b2dnbGVVc2VySW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAvLyBVbmNvbW1lbnQgaWYgeW91IHdhbnQgYXV0b2ZvY3VzIG9uIHRoZSB1c2VyIGlucHV0IGlmIHRoZSBwYW5lbCBpcyBvcGVuLiBIb3dldmVyLCBpdCBkb2VzIG5vdCBmZWVsIGdvb2QgZnJvbSBVWCBwZXJzcGVjdGl2ZSBvbiBtb2JpbGVzIGFuZCB0YWJsZXRzLlxyXG4gICAgICAgICAgICAvLyBpZih0aGlzLnVzZXJJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKXtcclxuICAgICAgICAgICAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXNlcklucHV0LmZvY3VzKCksNDAwKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXRzIHRoZSBjYW52YXMgY29udHJvbCBncm91cCdzIHVzZXItcXVlc3Rpb24gZmllbGQgdG8gdGhlIGFza2VkIHF1ZXN0aW9uIC8gc3RhdGVtZW50XHJcbiAgICAgICAgICogQHBhcmFtIHRleHQgVGhlIHVzZXIgaW5wdXQgZnJvbSB0YWxraW5nIG9yIHNlbmRpbmcgYSBtZXNzYWdlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5zZXRDYW52YXNVc2VyUXVlc3Rpb25UZXh0Q29udGVudCA9ICh0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzVXNlclF1ZXN0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgKiBDaGVja3MgdGhlIHZhbGlkaXR5IG9mIHRoZSBpbnNlcnRlZCB0ZXh0IGFuZCBjYWxscyB0aGUgY2hhcmFjdGVyJ3Mgc2VuZCBtZXRob2Qgd2l0aCB0aGUgdXNlcidzIGlucHV0XHJcbiAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub25TZW5kQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbnB1dFZhbHVlID0gdGhpcy51c2VySW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh1c2VySW5wdXRWYWx1ZSAhPSAnJyAmJiB1c2VySW5wdXRWYWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jaGFyYWN0ZXIuc2VuZCh1c2VySW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIER5bmFtaWNhbGx5IGRpc3BsYXlzIGVpdGhlciB0aGUgc2VuZCBidXR0b24gKGlmIHRoZXJlIGlzIGEgdXNlciBpbnB1dCkgb3IgdGhlIG1pY3JvcGhvbmUgYnV0dG9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dEJ1dHRvbk9uVXNlcklucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VySW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taWNCdG4uc3R5bGUuekluZGV4ID0gJy0xJztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFRleHRCdXR0b24uc3R5bGUuekluZGV4ID0gJzUwMDAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taWNCdG4uc3R5bGUuekluZGV4ID0gJzUwMDAnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kVGV4dEJ1dHRvbi5zdHlsZS56SW5kZXggPSAnLTEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNsZWFyVXNlclF1ZXN0aW9uRmllbGQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzVXNlclF1ZXN0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNpemVQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAwLFxyXG4gICAgICAgICAgICB3aWR0aDogNzUwXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBCYXNlIHRlbXBsYXRlIGFuZCBkZXBlbmRlbmNpZXMgd2lsbCBiZSBpbmplY3RlZCBieSBydW5uaW5nIHRoZSBiYXNlIGNsYXNzJ3MgY29uc3RydWN0b3IuXHJcbiAgICAgICAgdGhpcy5zZW5kVGV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tc2VuZC10ZXh0LWJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLmNhbnZhc01pY0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFpbG8tY2FudmFzLW1pY3JvcGhvbmUtYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzVXNlclF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWlsby1jYW52YXMtdXNlci1xdWVzdGlvblwiKTtcclxuICAgICAgICB0aGlzLmNhbnZhc0xvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhaWxvLWNhbnZhcy1sb2FkaW5nXCIpO1xyXG4gICAgICAgIC8vIEFwcGx5IHN0YXRlIGlzIGEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHRoZSBjaGFuZ2VzIG9mIGRpZmZlcmVudCBib3Qgc3RhdGVzIGJ5IGR5bmFtaWNhbGx5IGFkZGluZyBhbmQgcmVtb3ZpbmcgY3NzIGNsYXNzZXMuXHJcbiAgICAgICAgdGhpcy5ib3RTdGF0ZUNvbGxlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIGJlZm9yZUJvdEluaXRpYWxpemVkOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taWNCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNNaWNCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNMb2FkaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpZGxlOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdiZWZvcmUtaW5pdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzTG9hZGluZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RlbmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzTWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzTWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzTWljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RlbmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNMb2FkaW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdLnVzZXJJbnB1dFBsYWNlaG9sZGVyWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJVc2VyUXVlc3Rpb25GaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJVc2VySW5wdXRGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlSW5wdXRCdXR0b25PblVzZXJJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlzdGVuaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0xvYWRpbmcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0ljb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QuYWRkKCdsaXN0ZW5pbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc01pY0J0bi5jbGFzc0xpc3QuYWRkKCdsaXN0ZW5pbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuaHRtbFRleHRDb250ZW50Q29sbGVjdGlvblt0aGlzLmxhbmd1YWdlQ29kZV0udXNlcklucHV0UGxhY2Vob2xkZXJbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNVc2VyUXVlc3Rpb24udGV4dENvbnRlbnQgPSB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdLnVzZXJJbnB1dFBsYWNlaG9sZGVyWzFdO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5zd2VyaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0LmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYXJhZ3JhcGhzRnJvbUFuc3dlcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYXJhZ3JhcGhzRnJvbUFuc3dlcihlcnIsICdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90U3RhdGVDb2xsZWN0aW9uWydpZGxlJ10uYXBwbHlTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0SHRtbFRleHRDb250ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICAgIGluamVjdEh0bWxUZW1wbGF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1haW5Db250YWluZXJJZCkuaW5uZXJIVE1MID0gc3RhbmRBbG9uZVRlbXBsYXRlLnRyaW0oKTtcclxuICAgIH1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5zZW5kVGV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5vblNlbmRCdXR0b25DbGljaygpKTtcclxuICAgICAgICB0aGlzLmNhbnZhc01pY0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5vbkxpc3RlbkJ1dHRvbkNsaWNrZWQoKSk7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB0aGlzLmNoYW5nZUlucHV0QnV0dG9uT25Vc2VySW5wdXQoKSk7XHJcbiAgICAgICAgdGhpcy5oaWRlVXNlcklucHV0Q29udGFpbmVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmhhbmRsZVVzZXJJbnB1dFBhbmVsU3RhdGVDaGFuZ2VzKCkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBjYW52YXMgbWljcm9waG9uZSBidXR0b24gYW5kIGFsc28gY2FsbHMgdGhlIGJhc2UgY2xhc3NlcyBvbkxpc3RlbkJ1dHRvbkNsaWNrIGluc3RhbmNlIG1ldGhvZFxyXG4gICAgICovXHJcbiAgICBvbkxpc3RlbkJ1dHRvbkNsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNMb2FkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzTWljQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRoaXMub25MaXN0ZW5CdXR0b25DbGljaygpO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgb25Jbml0aWFsaXNlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoXCJpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcy5kZWZhdWx0U2l6ZVBhcmFtcztcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvdy5jaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uUXVlc3Rpb25Bc2tlZDogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBubyBhbnN3ZXIgd2FzIGFza2VkICh2aWEgbWljcm9waG9uZSkgYW4gZW1wdHkgb2JqZWN0IHdpbGwgYmUgcmVjZWl2ZWQgd2l0aCBhYnNvbHV0ZWx5IG5vIGtleXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYXJhZ3JhcGhzRnJvbUFuc3dlcih7IHRleHQ6ICdLZWluZSBGcmFnZSBnZXN0ZWxsdC4uLicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FudmFzVXNlclF1ZXN0aW9uVGV4dENvbnRlbnQoXCIuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoJ2lkbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXJJbnB1dENvbnRlbnQoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENhbnZhc1VzZXJRdWVzdGlvblRleHRDb250ZW50KGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25BbnN3ZXJlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoXCJpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQW5zd2VyOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoXCJhbnN3ZXJpbmdcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoXCJlcnJvclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uTGlzdGVuaW5nOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZShcImxpc3RlbmluZ1wiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIHRoaXMuY2hhcmFjdGVyQ29udGFpbmVyLCB0aGlzLmJvdFNlY3JldCwgdGhpcy5sYW5ndWFnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTGFpbG9CYXNlIH0gZnJvbSAnLi9MYWlsb0Jhc2UnO1xyXG5pbXBvcnQgdGlueVdpZGdldFRlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlcy90aW55V2lkZ2V0VGVtcGxhdGUuaHRtbCc7XHJcbmV4cG9ydCBjbGFzcyBMYWlsb1RpbnlXaWRnZXQgZXh0ZW5kcyBMYWlsb0Jhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoYm90U2VjcmV0LCBtYWluQ29udGFpbmVySWQsIGNhbWVyYUFkanVzdG1lbnQsIGxhbmd1YWdlLCB3aWRnZXRUeXBlLCB0eXBlSXRTdHJpbmdBcnJheSkge1xyXG4gICAgICAgIHN1cGVyKGJvdFNlY3JldCwgbWFpbkNvbnRhaW5lcklkLCBjYW1lcmFBZGp1c3RtZW50LCBsYW5ndWFnZSwgd2lkZ2V0VHlwZSwgdHlwZUl0U3RyaW5nQXJyYXkpO1xyXG4gICAgICAgIHRoaXMuYm90U2VjcmV0ID0gYm90U2VjcmV0O1xyXG4gICAgICAgIHRoaXMubWFpbkNvbnRhaW5lcklkID0gbWFpbkNvbnRhaW5lcklkO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQWRqdXN0bWVudCA9IGNhbWVyYUFkanVzdG1lbnQ7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0VHlwZSA9IHdpZGdldFR5cGU7XHJcbiAgICAgICAgdGhpcy50eXBlSXRTdHJpbmdBcnJheSA9IHR5cGVJdFN0cmluZ0FycmF5O1xyXG4gICAgICAgIC8vIEJhc2UgdGVtcGxhdGUgYW5kIGRlcGVuZGVuY2llcyB3aWxsIGJlIGluamVjdGVkIGJ5IHJ1bm5pbmcgdGhlIGJhc2UgY2xhc3MncyBjb25zdHJ1Y3Rvci5cclxuICAgICAgICAvLyBUaGUgb3ZlcnJpZGVuIGluamVjdEh0bWxUZW1wbGF0ZSgpIHRha2VzIGNhcmUgb2YgdGhlIGh0bWwgc3RydWN0dXJlIHRoYXQgaXMgbmVlZGVkIGJ5IHRoaXMgcGFydGljdWxhciB3aWRnZXQuXHJcbiAgICAgICAgdGhpcy5hc2tNZUNvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fzay1tZS1jb250YWluZXItdGl0bGUnKTtcclxuICAgICAgICB0aGlzLmJvdFN0YXRlQ29sbGVjdGlvbiA9IHtcclxuICAgICAgICAgICAgYmVmb3JlQm90SW5pdGlhbGl6ZWQ6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVVc2VySW5wdXRDb250YWluZXJCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taWNCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpZGxlOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdiZWZvcmUtaW5pdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVVzZXJJbnB1dENvbnRhaW5lckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0ZW5pbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWljSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdLnVzZXJJbnB1dFBsYWNlaG9sZGVyWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJVc2VySW5wdXRGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlzdGVuaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVN0YXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0ljb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pY0J0bi5jbGFzc0xpc3QuYWRkKCdsaXN0ZW5pbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuaHRtbFRleHRDb250ZW50Q29sbGVjdGlvblt0aGlzLmxhbmd1YWdlQ29kZV0udXNlcklucHV0UGxhY2Vob2xkZXJbMV07XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbnN3ZXJpbmc6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taWNCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclBhcmFncmFwaHNGcm9tQW5zd2VyKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5U3RhdGU6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclBhcmFncmFwaHNGcm9tQW5zd2VyKGVyciwgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3RTdGF0ZUNvbGxlY3Rpb25bJ2lkbGUnXS5hcHBseVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRIdG1sVGV4dENvbnRlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmplY3RpbmcgdGhlIHdpZGdldCdzIHRlbXBsYXRlXHJcbiAgICAgKi9cclxuICAgIGluamVjdEh0bWxUZW1wbGF0ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1haW5Db250YWluZXJJZCkuaW5uZXJIVE1MID0gdGlueVdpZGdldFRlbXBsYXRlLnRyaW0oKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGluZyB0aGUgdGl0bGUgb2YgdGhlIGFzayBtZSBjb250YWluZXIsIHRoZSB1c2VyIGlucHV0IGNvbnRhaW5lciBhbmQgdGhlIHBsYWNlaG9sZGVyIG9mIHRoZSB1c2VyIGlucHV0XHJcbiAgICAgKiBUaGUgY2hvc2VuIGxhbmd1YWdlIChvciBFbmdsaXNoIGFzIGZhbGxiYWNrKSB3aWxsIGJlIHVzZWQgdG8gZmlsdGVyIG91dCB0aGUgbWF0Y2hpbmcgdGV4dGNvbnRlbnRzIGZyb20gdGhlIGh0bWxUZXh0Q29udGVudENvbGxlY3Rpb24gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHNldEh0bWxUZXh0Q29udGVudHMoKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0SHRtbFRleHRDb250ZW50cygpO1xyXG4gICAgICAgIHRoaXMuc2V0QXNrTWVDb250YWluZXJUaXRsZSgpO1xyXG4gICAgfVxyXG4gICAgc2V0QXNrTWVDb250YWluZXJUaXRsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5ib3RJbnRlZ3JhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJjb250YWluZXItc2hvd1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFza01lQ29udGFpbmVyVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdLmFza01lQ29udGFpbmVyVGl0bGVbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFza01lQ29udGFpbmVyVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmh0bWxUZXh0Q29udGVudENvbGxlY3Rpb25bdGhpcy5sYW5ndWFnZUNvZGVdLmFza01lQ29udGFpbmVyVGl0bGVbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxscyB0aGUgYmFzZSBjbGFzc2VzIHByb3RvdHlwZSBtZXRob2QuIENvbnZlcnRlZCBpbnRvIGFuIGluc3RhbmNlIG1ldGhvZCBpbiB0aGUgZGVyaXZlZCBjbGFzcyB0byBlbnN1cmUgdGhlIHJpZ2h0IGNvbnRleHQgb2YgXCJ0aGlzXCJcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlQm90SW50ZWdyYXRpb25Db250YWluZXIoKSB7XHJcbiAgICAgICAgc3VwZXIudG9nZ2xlQm90SW50ZWdyYXRpb25Db250YWluZXIoKTtcclxuICAgICAgICB0aGlzLnNldEFza01lQ29udGFpbmVyVGl0bGUoKTtcclxuICAgICAgICB0aGlzLnJlc2l6ZUJvdElmVXNlcklucHV0SGlkZGVuKCk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJlc2l6aW5nIHRoZSBjaGFyYWN0ZXIgaWYgdGhlIGJvdEludGVncmF0aW9uQ29udGFpbmVyIGRvZXMgbm90IGhhdmUgdGhlIFwiY29udGFpbmVyLXNob3dcIiBjbGFzcy5cclxuICAgICAqIFRoaXMgcHJldmVudHMgdGhlIHdlaXJkIHRyYW5zaXRpb24gd2hlbiB0aGUgY2hhcmFjdGVyIGdldHMgcmVzaXplZCBhbmQgcmVsb2NhdGVkLiBBbmQgaXQganVzdCBsb29rcyBjb29sIGlmIGhlIGZhZGVzIG91dC0gYW5kIGluIDopXHJcbiAgICAgKi9cclxuICAgIHJlc2l6ZUJvdElmVXNlcklucHV0SGlkZGVuKCkge1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmJvdEludGVncmF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY29udGFpbmVyLXNob3cnKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLnJlc2l6ZSg0NTAsIDY4NSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLnJlc2l6ZSgyMDAsIDM1NSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICB9LCA0MDApO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgb25Jbml0aWFsaXNlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoJ2lkbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2hhcmFjdGVyLmFkanVzdENhbWVyYSh0aGlzLmNhbWVyYUFkanVzdG1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzaXplQm90SWZVc2VySW5wdXRIaWRkZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvdy5jaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uUXVlc3Rpb25Bc2tlZDogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBubyBhbnN3ZXIgd2FzIGFza2VkICh2aWEgbWljcm9waG9uZSkgYW4gZW1wdHkgb2JqZWN0IHdpbGwgYmUgcmVjZWl2ZWQgd2l0aCBhYnNvbHV0ZWx5IG5vIGtleXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYXJhZ3JhcGhzRnJvbUFuc3dlcih7IHRleHQ6ICdLZWluZSBGcmFnZSBnZXN0ZWxsdC4uLicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoJ2lkbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXJJbnB1dENvbnRlbnQoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkFuc3dlcmVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCb3RTdGF0ZSgnaWRsZScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQW5zd2VyOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoJ2Fuc3dlcmluZycsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJvdFN0YXRlKCdlcnJvcicsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkxpc3RlbmluZzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm90U3RhdGUoJ2xpc3RlbmluZycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwgdGhpcy5jaGFyYWN0ZXJDb250YWluZXIsIHRoaXMuYm90U2VjcmV0LCB0aGlzLmxhbmd1YWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGlkPVxcXCJsYWlsby13aWRnZXQtY29udGFpbmVyXFxcIiBjbGFzcz1cXFwiYmVmb3JlLWluaXRcXFwiPlxcclxcbiAgPGRpdiBpZD1cXFwiYXNrLW1lLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImxhaWxvLXdpZGdldC10b2dnbGUtYnV0dG9uXFxcIiBjbGFzcz1cXFwiYm90LWNvbnRyb2wtZWxlbWVudFxcXCI+PGkgaWQ9XFxcImhpZGUtaWNvblxcXCIgY2xhc3M9XFxcImZhcyBmYS1hcnJvdy1sZWZ0XFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgIDxzcGFuIGlkPVxcXCJhc2stbWUtY29udGFpbmVyLXRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgaWQ9XFxcImxhaWxvLXVzZXItaW5wdXQtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGg1IGlkPVxcXCJsYWlsby11c2VyLWlucHV0LWNvbnRhaW5lci10aXRsZVxcXCI+PC9oNT5cXHJcXG4gICAgPGRpdiBpZD1cXFwibGFpbG8tY2hhcmFjdGVyLWNhbnZhc1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImxhaWxvLWNvbnRyb2wtZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwibGFpbG8tdXNlci1pbnB1dFxcXCIgLz5cXHJcXG4gICAgICA8YnV0dG9uIGlkPVxcXCJsYWlsby1taWNyb3Bob25lLWJ1dHRvblxcXCIgY2xhc3M9XFxcImJvdC1jb250cm9sLWVsZW1lbnRcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1taWNyb3Bob25lXFxcIiBpZD1cXFwibGFpbG8tbWljcm9waG9uZS1pY29uXFxcIj48L2k+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJsb2FkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBpZD1cXFwibGFpbG8tYW5zd2VyLXRleHQtZmllbGRcXFwiPjwvZGl2PlxcclxcbiAgICA8cCBpZD1cXFwibGFpbG8tZXhhbXBsZS1xdWVzdGlvbnNcXFwiIGRhdGEtdHlwZWl0LWlkPVxcXCJleGFtcGxlLXF1ZXN0aW9uc1xcXCI+PC9wPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBpZD1cXFwibGFpbG8td2lkZ2V0LWNvbnRhaW5lclxcXCIgY2xhc3M9XFxcImJlZm9yZS1pbml0XFxcIj5cXHJcXG4gIDxidXR0b24gaWQ9XFxcImxhaWxvLXdpZGdldC10b2dnbGUtYnV0dG9uXFxcIiBjbGFzcz1cXFwiYm90LWNvbnRyb2wtZWxlbWVudFxcXCI+XFxyXFxuICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtcGVuXFxcIiBpZD1cXFwibGFpbG8tdG9nZ2xlLWlucHV0LXBhbmVsLWljb25cXFwiPjwvaT5cXHJcXG4gIDwvYnV0dG9uPlxcclxcbiAgPGRpdiBpZD1cXFwibGFpbG8tY2hhcmFjdGVyLWNhbnZhc1xcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImxhaWxvLWNhbnZhcy1jb250cm9sLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8ZGl2IGlkPVxcXCJsYWlsby1jYW52YXMtbG9hZGluZ1xcXCIgY2xhc3M9XFxcImhpZGRlblxcXCI+XFxyXFxuICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgPGRpdj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgaWQ9XFxcImxhaWxvLWNhbnZhcy11c2VyLXF1ZXN0aW9uXFxcIj5XaGF0IGNhbiB5b3UgZG8gZm9yIG1lLCBoYWxsbyBoYWxsbyBoYWxsbyBoYWxsbyBoYWxsbz88L2Rpdj5cXHJcXG4gICAgICA8YnV0dG9uIGlkPVxcXCJsYWlsby1jYW52YXMtbWljcm9waG9uZS1idXR0b25cXFwiIGNsYXNzPVxcXCJib3QtY29udHJvbC1lbGVtZW50XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtbWljcm9waG9uZVxcXCIgaWQ9XFxcImxhaWxvLWNhbnZhcy1taWNyb3Bob25lLWljb25cXFwiPjwvaT5cXHJcXG4gICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgaWQ9XFxcImxhaWxvLXVzZXItaW5wdXQtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGg1IGlkPVxcXCJsYWlsby11c2VyLWlucHV0LWNvbnRhaW5lci10aXRsZVxcXCI+PC9oNT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibGFpbG8tY29udHJvbC1ncm91cFxcXCI+XFxyXFxuICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJsYWlsby11c2VyLWlucHV0XFxcIiAvPlxcclxcbiAgICAgIDxidXR0b24gaWQ9XFxcImxhaWxvLW1pY3JvcGhvbmUtYnV0dG9uXFxcIiBjbGFzcz1cXFwiYm90LWNvbnRyb2wtZWxlbWVudFxcXCI+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLW1pY3JvcGhvbmVcXFwiIGlkPVxcXCJsYWlsby1taWNyb3Bob25lLWljb25cXFwiPjwvaT5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImxvYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPGJ1dHRvbiBpZD1cXFwibGFpbG8tc2VuZC10ZXh0LWJ1dHRvblxcXCIgY2xhc3M9XFxcImJvdC1jb250cm9sLWVsZW1lbnRcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhciBmYS1wYXBlci1wbGFuZVxcXCIgaWQ9XFxcImxhaWxvLXNlbmQtdGV4dC1pY29uXFxcIj48L2k+XFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8cCBpZD1cXFwibGFpbG8tZXhhbXBsZS1xdWVzdGlvbnNcXFwiIGRhdGEtdHlwZWl0LWlkPVxcXCJleGFtcGxlLXF1ZXN0aW9uc1xcXCI+PC9wPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJsYWlsby1hbnN3ZXItdGV4dC1maWVsZFxcXCI+PC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGlkPVxcXCJsYWlsby13aWRnZXQtY29udGFpbmVyXFxcIiBjbGFzcz1cXFwiYmVmb3JlLWluaXRcXFwiPlxcclxcbiAgPGRpdiBpZD1cXFwiYXNrLW1lLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxidXR0b24gaWQ9XFxcImxhaWxvLXdpZGdldC10b2dnbGUtYnV0dG9uXFxcIiBjbGFzcz1cXFwiYm90LWNvbnRyb2wtZWxlbWVudFxcXCI+PGkgaWQ9XFxcImhpZGUtaWNvblxcXCIgY2xhc3M9XFxcImZhcyBmYS1hcnJvdy1sZWZ0XFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgIDxzcGFuIGlkPVxcXCJhc2stbWUtY29udGFpbmVyLXRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgaWQ9XFxcImxhaWxvLWNoYXJhY3Rlci1jYW52YXNcXFwiPjwvZGl2PlxcclxcbiAgPGRpdiBpZD1cXFwibGFpbG8tdXNlci1pbnB1dC1jb250YWluZXJcXFwiPlxcclxcbiAgICA8aDUgaWQ9XFxcImxhaWxvLXVzZXItaW5wdXQtY29udGFpbmVyLXRpdGxlXFxcIj48L2g1PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsYWlsby1jb250cm9sLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImxhaWxvLXVzZXItaW5wdXRcXFwiIC8+XFxyXFxuICAgICAgPGJ1dHRvbiBpZD1cXFwibGFpbG8tbWljcm9waG9uZS1idXR0b25cXFwiIGNsYXNzPVxcXCJib3QtY29udHJvbC1lbGVtZW50XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtbWljcm9waG9uZVxcXCIgaWQ9XFxcImxhaWxvLW1pY3JvcGhvbmUtaWNvblxcXCI+PC9pPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImhpZGRlblxcXCI+XFxyXFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICAgIDxwIGlkPVxcXCJsYWlsby1leGFtcGxlLXF1ZXN0aW9uc1xcXCIgZGF0YS10eXBlaXQtaWQ9XFxcImV4YW1wbGUtcXVlc3Rpb25zXFxcIj48L3A+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImxhaWxvLWFuc3dlci10ZXh0LWZpZWxkXFxcIj48L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyJdLCJzb3VyY2VSb290IjoiIn0=