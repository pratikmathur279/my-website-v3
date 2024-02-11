"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[832],{

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

/***/ 832:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6952);
/* harmony import */ var _common_reactIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);


var AboutPage = function AboutPage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "about-page-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "My Passions & Personality")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-mouse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mouse"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "About me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "description-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I am a web developer, currently working at Total Mortgage Services, LLC. My journey as a developer started at the age of 13, where I was introduced to the concepts of web development such as HTML and CSS. After that, I got my Bachelors and Master\u2019s degree in Computer Science. This has helped me widen my range of knowledge and gather experiences in the field of Web Development.", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Constantly seeking to improve my skillset, I thrive on learning new web technologies in my spare time through online resources such as udemy.com and coursera.org, as well as diving head-first into new and unfamiliar projects."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " ", "In my spare time, you\u2019ll find me playing video games, playing soccer and learning new programming languages."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "description backstory"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Back Story"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "description-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " ", "I knew what I wanted to do by the age of 13. The short version is that I loved playing video games growing up and always had an interest to know how they were made. So, a small idea turned into me wanting to make my own video game. And after a few friends helping to fill up notebooks with thoughts, ideas, and drawings we quickly realized that we needed a website. Obviously, this was before the internet was filled with this type of knowledge readily available at your fingertips (YouTube, Facebook, and even MySpace weren't a thing yet). So, I was able to teach myself the basics and build something."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Fast-forwarding, after graduating college with an Bachelors degree in Computer Science and Masters degree in Computer Science, I made my way into multiple jobs. First starting out with a couple of internships as a Software Developer, I gained professional and industry experience. This was the start of many core understandings and played a key role in my thought process when thinking about design as a whole, especially when it comes to the system design and development. After that, working my way into the development industry was a path that I created for myself based on one question that I still find myself asking, how does it work? This was the one question that started the passion I call my career."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "After years in the industry, and having gone through multiple opportunities, some good, and some bad, I am in the process of widening my range of knowledge and improving my skillset in Software Development. So, here I am years later still doing the same thing, and still loving it."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "technical-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Technical Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "description-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "A full-stack software engineer with over 4 years of experience."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end codebases."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "My current toolset includes React, Redux, Angular, Vue.js, JavaScript & TypeScript (Node.js as well), PHP Laravel, Kubernetes, Docker and all the other various frameworks, libraries and technologies related to them.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "front-end-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_reactIcons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
    id: "CustomTag",
    size: "24",
    icon: "BsDisplay"
  }), "FRONT-END WEB DEVELOPMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I specialize in applications written in both React and Angular."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "My current experience and skills in front-end includes:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "TypeScript/JavaScript development: bootstraping, refactoring, improving the structure, reliability, build setup;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "full integration of front-end development using tools like Webpack with features like automatic code reload, code minifications, multiple environments support, CI/CD, Storybook components library, automated testing of accessibility, server-side render and visual snapshots"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "sense of system design and UX,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "huge experience in almost all of the JS ecosystems, by having used in the past many libraries like Next.js, React, Redux, Redux-Observable, RxJS, Angular, Ionic Framework, Backbone, jQuery, Lodash/Underscore and many else."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "backend-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_reactIcons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
    id: "CustomTag",
    size: "24",
    icon: "FaCode"
  }), "BACKEND WEB DEVELOPMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "In back-end development, my current stack involves PHP Laravel, Java, NodeJS and Ruby on Rails."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Nearly every app I have launched in the past had the back-end done also by me. In order to improve the development speed, performance and reliability, I have changed languages and frameworks already multiple times, from PHP, Ruby to Elixir and Node.js; configured servers using just the shell, then Apache and wampp, and now Docker and Kubernetes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "splitting the back-end into separate domains and microservices,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "cooperation with APIs, remote data synchronizations, cloud servers, asynchronous workers,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "using different types of databases (like PostgreSQL, MySQL, Elasticsearch, Redis)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "dividing the servers into different machine nodes / docker containers; database sharding; load balancing,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "refactoring existing applications, by improving code readibility, separating concerns into separate functions/classes/modules, taking the business logic out from your request/response layer into separate modules (DDD), and moving the app architecture into an event-based one")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

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

/***/ })

}]);
//# sourceMappingURL=832.myapp.js.map