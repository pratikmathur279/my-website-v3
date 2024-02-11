"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[500],{

/***/ 5932:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ _slicedToArray)
});

;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ 56:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5932);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6952);


var ReactIcons = function ReactIcons(_ref) {
  var icon = _ref.icon,
    background = _ref.background,
    size = _ref.size,
    color = _ref.color;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c)(_useState, 2),
    iconModule = _useState2[0],
    setIconModule = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var module;
    var name = icon;
    var el = name.substr(0, 2).toLowerCase();
    switch (el) {
      case "fa":
        module = __webpack_require__.e(/* import() */ 240).then(__webpack_require__.bind(__webpack_require__, 3240));
        break;
      case "md":
        module = __webpack_require__.e(/* import() */ 480).then(__webpack_require__.bind(__webpack_require__, 7480));
        break;
      case "io":
        module = __webpack_require__.e(/* import() */ 792).then(__webpack_require__.bind(__webpack_require__, 4792));
        break;
      case "ti":
        module = __webpack_require__.e(/* import() */ 636).then(__webpack_require__.bind(__webpack_require__, 7636));
        break;
      case "go":
        module = __webpack_require__.e(/* import() */ 720).then(__webpack_require__.bind(__webpack_require__, 1720));
        break;
      case "fi":
        module = __webpack_require__.e(/* import() */ 80).then(__webpack_require__.bind(__webpack_require__, 2080));
        break;
      case "gi":
        module = __webpack_require__.e(/* import() */ 188).then(__webpack_require__.bind(__webpack_require__, 7188));
        break;
      case "wi":
        module = __webpack_require__.e(/* import() */ 511).then(__webpack_require__.bind(__webpack_require__, 4511));
        break;
      case "di":
        module = __webpack_require__.e(/* import() */ 892).then(__webpack_require__.bind(__webpack_require__, 2892));
        break;
      case "ai":
        module = __webpack_require__.e(/* import() */ 668).then(__webpack_require__.bind(__webpack_require__, 3668));
        break;
      case "bs":
        module = __webpack_require__.e(/* import() */ 856).then(__webpack_require__.bind(__webpack_require__, 7856));
        break;
      case "fc":
        module = __webpack_require__.e(/* import() */ 316).then(__webpack_require__.bind(__webpack_require__, 316));
        break;
      case "gr":
        module = __webpack_require__.e(/* import() */ 160).then(__webpack_require__.bind(__webpack_require__, 8160));
        break;
      case "ri":
        module = __webpack_require__.e(/* import() */ 184).then(__webpack_require__.bind(__webpack_require__, 2184));
        break;
      case "bi":
        module = __webpack_require__.e(/* import() */ 184).then(__webpack_require__.bind(__webpack_require__, 2184));
        break;
      case "hi":
        module = __webpack_require__.e(/* import() */ 184).then(__webpack_require__.bind(__webpack_require__, 2184));
        break;
      case "im":
        module = __webpack_require__.e(/* import() */ 184).then(__webpack_require__.bind(__webpack_require__, 2184));
        break;
      case "io5":
        module = __webpack_require__.e(/* import() */ 184).then(__webpack_require__.bind(__webpack_require__, 2184));
        break;
      case "si":
        module = __webpack_require__.e(/* import() */ 184).then(__webpack_require__.bind(__webpack_require__, 2184));
        break;
      case "vsc":
        module = __webpack_require__.e(/* import() */ 184).then(__webpack_require__.bind(__webpack_require__, 2184));
        break;
      case "cg":
        module = __webpack_require__.e(/* import() */ 184).then(__webpack_require__.bind(__webpack_require__, 2184));
        break;
      case "sl":
        module = __webpack_require__.e(/* import() */ 971).then(__webpack_require__.bind(__webpack_require__, 352));
        break;
    }
    module.then(function (icons) {
      setIconModule(icons);
    });
  }, [icon]);
  if (iconModule) {
    var CustomTag = iconModule[icon];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CustomTag, {
      id: "CustomTag",
      size: size,
      color: color
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactIcons);

/***/ }),

/***/ 5500:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homepage)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(5932);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(6952);
// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(1552);
;// CONCATENATED MODULE: ../node_modules/react-type-animation/dist/esm/index.es.js
function i(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function u(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}c((n=n.apply(e,t||[])).next())}))}function u(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function c(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function s(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function f(e,t,r,n,o){for(var a=[],f=5;f<arguments.length;f++)a[f-5]=arguments[f];return i(this,void 0,void 0,(function(){var i,f,h,y,v,b;return u(this,(function(u){switch(u.label){case 0:u.trys.push([0,12,13,14]),i=c(a),f=i.next(),u.label=1;case 1:if(f.done)return[3,11];switch(h=f.value,typeof h){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,d(e,t,h,r,n,o)];case 3:return u.sent(),[3,10];case 4:return[4,p(h)];case 5:return u.sent(),[3,10];case 6:return[4,h.apply(void 0,s([e,t,r,n,o],l(a),!1))];case 7:return u.sent(),[3,10];case 8:return[4,h];case 9:u.sent(),u.label=10;case 10:return f=i.next(),[3,1];case 11:return[3,14];case 12:return y=u.sent(),v={error:y},[3,14];case 13:try{f&&!f.done&&(b=i.return)&&b.call(i)}finally{if(v)throw v.error}return[7];case 14:return[2]}}))}))}function d(e,t,r,n,o,a){return i(this,void 0,void 0,(function(){var i,c;return u(this,(function(u){switch(u.label){case 0:return i=e.textContent||"",c=function(e,t){var r=l(t).slice(0);return s(s([],l(e),!1),[NaN],!1).findIndex((function(e,t){return r[t]!==e}))}(i,r),[4,h(e,s(s([],l(v(i,t,c)),!1),l(y(r,t,c)),!1),n,o,a)];case 1:return u.sent(),[2]}}))}))}function p(e){return i(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function h(e,t,r,n,o){return i(this,void 0,void 0,(function(){var a,i,s,f,d,h,y,v,b,m,w,g,x;return u(this,(function(S){switch(S.label){case 0:if(a=t,o){for(i=0,s=1;s<t.length;s++)if(f=l([t[s-1],t[s]],2),d=f[0],(h=f[1]).length>d.length||""===h){i=s;break}a=t.slice(i,t.length)}S.label=1;case 1:S.trys.push([1,6,7,8]),y=c(function(e){var t,r,n,o,a,i,l;return u(this,(function(s){switch(s.label){case 0:t=function(e){return u(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){var r=t.textContent||"";return""===e||r.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}}))},s.label=1;case 1:s.trys.push([1,6,7,8]),r=c(e),n=r.next(),s.label=2;case 2:return n.done?[3,5]:(o=n.value,[5,t(o)]);case 3:s.sent(),s.label=4;case 4:return n=r.next(),[3,2];case 5:return[3,8];case 6:return a=s.sent(),i={error:a},[3,8];case 7:try{n&&!n.done&&(l=r.return)&&l.call(r)}finally{if(i)throw i.error}return[7];case 8:return[2]}}))}(a)),v=y.next(),S.label=2;case 2:return v.done?[3,5]:(b=v.value,m="WRITING"===b.opCode(e)?r+r*(Math.random()-.5):n+n*(Math.random()-.5),b.op(e),[4,p(m)]);case 3:S.sent(),S.label=4;case 4:return v=y.next(),[3,2];case 5:return[3,8];case 6:return w=S.sent(),g={error:w},[3,8];case 7:try{v&&!v.done&&(x=y.return)&&x.call(y)}finally{if(g)throw g.error}return[7];case 8:return[2]}}))}))}function y(e,t,r){var n,o;return void 0===r&&(r=0),u(this,(function(a){switch(a.label){case 0:n=t(e),o=n.length,a.label=1;case 1:return r<o?[4,n.slice(0,++r).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}}))}function v(e,t,r){var n,o;return void 0===r&&(r=0),u(this,(function(a){switch(a.label){case 0:n=t(e),o=n.length,a.label=1;case 1:return o>r?[4,n.slice(0,--o).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}}))}var b="index-module_type__E-SaG";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var m=(0,react.memo)((0,react.forwardRef)((function(o,a){var i=o.sequence,u=o.repeat,c=o.className,d=o.speed,p=void 0===d?40:d,h=o.deletionSpeed,y=o.omitDeletionAnimation,v=void 0!==y&&y,m=o.preRenderFirstString,w=void 0!==m&&m,g=o.wrapper,x=void 0===g?"span":g,S=o.splitter,E=void 0===S?function(e){return s([],l(e),!1)}:S,_=o.cursor,k=void 0===_||_,O=o.style,T=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(o,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),A=T["aria-label"],C=T["aria-hidden"],N=T.role;h||(h=p);var P=new Array(2).fill(40);[p,h].forEach((function(e,t){switch(typeof e){case"number":P[t]=Math.abs(e-100);break;case"object":var r=e.type,n=e.value;if("number"!=typeof n)break;if("keyStrokeDelayInMs"===r)P[t]=n}}));var j,I,G,D,M,R,q=P[0],F=P[1],B=function(e,r){void 0===r&&(r=null);var o=(0,react.useRef)(r);return (0,react.useEffect)((function(){e&&("function"==typeof e?e(o.current):e.current=o.current)}),[e]),o}(a),Q=b;j=c?"".concat(k?Q+" ":"").concat(c):k?Q:"",I=(0,react.useRef)((function(){var e,t=i;u===1/0?e=f:"number"==typeof u&&(t=Array(1+u).fill(i).flat());var r=e?s(s([],l(t),!1),[e],!1):s([],l(t),!1);return f.apply(void 0,s([B.current,E,q,F,v],l(r),!1)),function(){B.current}})),G=(0,react.useRef)(),D=(0,react.useRef)(!1),M=(0,react.useRef)(!1),R=l((0,react.useState)(0),2)[1],D.current&&(M.current=!0),(0,react.useEffect)((function(){return D.current||(G.current=I.current(),D.current=!0),R((function(e){return e+1})),function(){M.current&&G.current&&G.current()}}),[]);var W=x,L=w?i.find((function(e){return"string"==typeof e}))||"":null;return react.createElement(W,{"aria-hidden":C,"aria-label":A,role:N,style:O,className:j,children:A?react.createElement("span",{"aria-hidden":"true",ref:B,children:L}):L,ref:A?void 0:B})})),(function(e,t){return!0}));

// EXTERNAL MODULE: ./src/components/common/reactIcons.js
var reactIcons = __webpack_require__(56);
;// CONCATENATED MODULE: ./src/components/homepage/hexagons.js


var Hexagons = function Hexagons(props) {
  var buildList = function buildList(hex) {
    return /*#__PURE__*/react.createElement("div", {
      key: hex.id,
      className: "AlignHexagon"
    }, /*#__PURE__*/react.createElement("div", {
      className: "Hexagon"
    }, /*#__PURE__*/react.createElement("div", {
      className: "Icons"
    }, /*#__PURE__*/react.createElement(reactIcons/* default */.c, {
      key: hex.id,
      icon: hex.name,
      size: 60
    }))), /*#__PURE__*/react.createElement("h3", null, hex.title), /*#__PURE__*/react.createElement("p", null, hex.desc));
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "HexagonsContainer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hexagons-wrapper"
  }, props.hexagons.map(buildList)));
};
/* harmony default export */ const homepage_hexagons = (Hexagons);
// EXTERNAL MODULE: ./src/actions/website.js
var website = __webpack_require__(2044);
;// CONCATENATED MODULE: ./src/components/homepage/filler.js

var Filler = function Filler(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "Filler",
    style: {
      width: "".concat(props.skill.percentage, "% ")
    }
  }, /*#__PURE__*/react.createElement("span", {
    value: props.skill.name
  }), /*#__PURE__*/react.createElement("span", {
    value: props.skill.percentage
  }));
};
/* harmony default export */ const filler = (Filler);
;// CONCATENATED MODULE: ./src/components/homepage/skillsBar.js


var SkillsBar = function SkillsBar(props) {
  var buildSkillsBar = function buildSkillsBar(skill) {
    return /*#__PURE__*/react.createElement("div", {
      key: skill.index,
      className: "SkillsBar"
    }, /*#__PURE__*/react.createElement(filler, {
      skill: skill
    }));
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "SkillsBarContainer"
  }, props.skills.map(buildSkillsBar));
};
/* harmony default export */ const skillsBar = (SkillsBar);
;// CONCATENATED MODULE: ./src/components/homepage/homepage.js







var Homepage = function Homepage(props) {
  var dispatch = (0,es/* useDispatch */.OY)();
  var _useSelector = (0,es/* useSelector */.w1)(function (state) {
      return state.GlobalReducer;
    }),
    skills = _useSelector.skills;
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.c)(_useState, 2),
    isFlipped = _useState2[0],
    setIsFlipped = _useState2[1];
  var _useState3 = (0,react.useState)([{
      id: 0,
      name: "IoIosSpeedometer",
      title: "Fast",
      desc: "Fast load times and lag free interaction"
    }, {
      id: 1,
      name: "FaLaptop",
      title: "Responsive",
      desc: "My layouts will work on any device."
    }, {
      id: 2,
      name: "AiOutlineBulb",
      title: "Intuitive",
      desc: "Strong preference for easy to use, intuitive UX/UI."
    }, {
      id: 3,
      name: "FaRocket",
      title: "Dynamic",
      desc: "I love making dynamic websites"
    }]),
    _useState4 = (0,slicedToArray/* default */.c)(_useState3, 2),
    hexagons = _useState4[0],
    setHexagons = _useState4[1];
  (0,react.useEffect)(function () {
    dispatch((0,website/* getSkills */.Bw)());
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "Homepage"
  }, /*#__PURE__*/react.createElement("div", {
    className: "HomepageContainer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "homepage-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "content-wrapper"
  }, /*#__PURE__*/react.createElement("h4", null, "Hello!"), /*#__PURE__*/react.createElement("h1", null, "Pratik Mathur"), /*#__PURE__*/react.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/react.createElement("div", {
    className: "static-text"
  }, "I'm a"), /*#__PURE__*/react.createElement(m, {
    sequence: ["Developer.", 1500, "Designer.", 1500, "Gamer.", 1500, "Freelancer.", 1500],
    speed: 30,
    wrapper: "span",
    repeat: Infinity
  })), /*#__PURE__*/react.createElement("div", {
    className: "description"
  }, /*#__PURE__*/react.createElement("p", null, "I\u2019m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. I have a passion for creating intuitive, dynamic and cross-platform user experiences.")))), /*#__PURE__*/react.createElement("div", {
    className: "my-image"
  }, /*#__PURE__*/react.createElement("img", {
    src: "/images/photo.jpg",
    alt: "My Image"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "hero-mouse"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mouse"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "descriptionContainer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "descriptionWrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "descriptionImage"
  }, /*#__PURE__*/react.createElement("img", {
    alt: "Web Dev",
    src: "/images/backgrounds/Web-Dev.jpg"
  })), /*#__PURE__*/react.createElement("div", {
    className: "description"
  }, /*#__PURE__*/react.createElement("h1", null, "My passion and focus is web development"), /*#__PURE__*/react.createElement("p", null, "I'm passionate about web development and bringing ideas to life. My primary focus is to build robust web applications and software applications by building a great user experience. If you want to learn more about me, pick up the phone and give me a call (or email).")))), /*#__PURE__*/react.createElement(homepage_hexagons, {
    hexagons: hexagons
  }), /*#__PURE__*/react.createElement("div", {
    className: "intro-skills-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "IntroContainer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Description"
  }, /*#__PURE__*/react.createElement("p", null, "Since beginning my journey as a software developer over 6 years ago, I've done remote work for a few startups, and collaborated with talented people to create digital products for both business and consumer use."), /*#__PURE__*/react.createElement("p", null, "After years in the industry, and having gone through multiple opportunities, some good, and some bad, I am in the process of widening my range of knowledge and improving my skillset in Software Development. So, here I am years later still doing the same thing, and still loving it."))), /*#__PURE__*/react.createElement("div", {
    className: "SkillsContainer"
  }, /*#__PURE__*/react.createElement(skillsBar, {
    skills: skills
  }))));
};
/* harmony default export */ const homepage = (Homepage);

/***/ })

}]);
//# sourceMappingURL=500.myapp.js.map