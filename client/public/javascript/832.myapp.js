"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[832],{

/***/ 4799:
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
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(8652);
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || (0,unsupportedIterableToArray/* default */.c)(arr, i) || _nonIterableRest();
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2112);



var AboutPage = function AboutPage(props) {
  var yearsExp = new Date().getFullYear() - 2018;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "about-page-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "My Passions & ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Personality")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-mouse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mouse"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "page-content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "About me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I\u2019m a full-stack software developer passionate about creating innovative digital products. My journey into programming began at the age of 13, building web pages with HTML and CSS. Over the years, that spark evolved into a deep commitment to continuous learning and crafting impactful solutions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "With a Bachelor\u2019s and Master\u2019s degree in Computer Science, I\u2019ve built a strong technical foundation and a versatile skill set. For over ", yearsExp, " years, I\u2019ve thrived in remote, collaborative environments, working on diverse projects for businesses and consumers alike. Each experience\u2014whether a success or a challenge\u2014has sharpened my abilities and broadened my perspective on software development."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I\u2019m a lifelong learner who eagerly embraces new challenges. In my free time, I explore cutting-edge web technologies and tackle unfamiliar projects through platforms like Udemy and Coursera."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "When I\u2019m not coding, I enjoy playing soccer, diving into video games, or experimenting with new programming languages just for fun."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I\u2019m always open to new opportunities that align with my skills and passion for growth. If you\u2019re looking for a developer who can deliver impactful solutions while continuously evolving, feel free to reach out\u2014I\u2019d love to connect!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .cH, {
    to: "/contact",
    className: "btn primary"
  }, "Contact Me"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Back Story")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I knew what I wanted to do by the age of 13. The short version is that I loved playing video games growing up and always had an interest to know how they were made. So, a small idea turned into me wanting to make my own video game. And after a few friends helping to fill up notebooks with thoughts, ideas, and drawings we quickly realized that we needed a website. Obviously, this was before the internet was filled with this type of knowledge readily available at your fingertips (YouTube, Facebook, and even MySpace weren't a thing yet). So, I was able to teach myself the basics and build something."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Fast-forwarding, after graduating college with an Bachelors degree in Computer Science and Masters degree in Computer Science, I made my way into multiple jobs. First starting out with a couple of internships as a Software Developer, I gained professional and industry experience. This was the start of many core understandings and played a key role in my thought process when thinking about design as a whole, especially when it comes to the system design and development. After that, working my way into the development industry was a path that I created for myself based on one question that I still find myself asking, how does it work? This was the one question that started the passion I call my career."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "After years in the industry, and having gone through multiple opportunities, some good, and some bad, I am in the process of widening my range of knowledge and improving my skillset in Software Development. So, here I am years later still doing the same thing, and still loving it."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Technical Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "A full-stack software engineer with over ", yearsExp, " years of experience."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end codebases."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "My current toolset includes React, Redux, Angular, Vue.js, JavaScript & TypeScript (Node.js as well), PHP Laravel, Kubernetes, Docker and all the other various frameworks, libraries and technologies related to them.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content front-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_reactIcons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
    id: "CustomTag",
    size: "24",
    icon: "BsDisplay"
  }), "FRONT-END WEB DEVELOPMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I specialize in applications written in both React and Angular."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "My current experience and skills in front-end includes:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "TypeScript/JavaScript development:"), " bootstraping, refactoring, improving the structure, reliability, build setup;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Full integration of front-end development using tools like Webpack with features like automatic code reload, code minifications, multiple environments support, CI/CD, Storybook components library, automated testing of accessibility, server-side render and visual snapshots"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Sense of system design and UX,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Huge experience in almost all of the JS ecosystems, by having used in the past many libraries like Next.js, React, Redux, Redux-Observable, RxJS, Angular, Ionic Framework, Backbone, jQuery, Lodash/Underscore and many else."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content backend-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_reactIcons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
    id: "CustomTag",
    size: "24",
    icon: "FaCode"
  }), "BACKEND WEB DEVELOPMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "In back-end development, my current stack involves PHP Laravel, Java, NodeJS and Ruby on Rails."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Nearly every app I have launched in the past had the back-end done also by me. In order to improve the development speed, performance and reliability, I have changed languages and frameworks already multiple times, from PHP, Ruby to Elixir and Node.js; configured servers using just the shell, then Apache and wampp, and now Docker and Kubernetes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Splitting the back-end into separate domains and microservices,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Cooperation with APIs, remote data synchronizations, cloud servers, asynchronous workers,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Using different types of databases (like PostgreSQL, MySQL, Elasticsearch, Redis, NoSQL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Dividing the servers into different machine nodes / docker containers; database sharding; load balancing,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Refactoring existing applications, by improving code readibility, separating concerns into separate functions/classes/modules, taking the business logic out from your request/response layer into separate modules (DDD), and moving the app architecture into an event-based one")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ }),

/***/ 56:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4799);
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