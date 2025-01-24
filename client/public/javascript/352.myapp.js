"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[352],{

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

/***/ }),

/***/ 7352:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ resumePage)
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(6952);
// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(1552);
// EXTERNAL MODULE: ../node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(2112);
// EXTERNAL MODULE: ./src/components/common/reactIcons.js
var reactIcons = __webpack_require__(56);
;// CONCATENATED MODULE: ./src/components/resume/experience.js

var Experience = function Experience(props) {
  var client = props.data.client;
  var buildRow = function buildRow(responsibility) {
    return /*#__PURE__*/react.createElement("li", null, responsibility);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, props.data.position), /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h4", null, props.data.name, ",", " ", /*#__PURE__*/react.createElement("span", null, props.data.from, " - ", props.data.to))), client && client != "" && /*#__PURE__*/react.createElement("h4", null, "Client: ", client), /*#__PURE__*/react.createElement("ul", {
    className: "responsibilities"
  }, props.data.responsibilities.map(buildRow)));
};
/* harmony default export */ const experience = (Experience);
;// CONCATENATED MODULE: ./src/components/resume/workExperience.js


var WorkExperience = function WorkExperience(props) {
  var buildColumns = function buildColumns(col, i) {
    return /*#__PURE__*/react.createElement("div", {
      className: "tech-col",
      key: i,
      id: "tech-col-" + i
    }, col);
  };
  var buildExperiences = function buildExperiences(exp) {
    return /*#__PURE__*/react.createElement("div", {
      key: exp.id,
      className: "content"
    }, /*#__PURE__*/react.createElement(experience, {
      data: exp
    }));
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "Section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react.createElement("h2", null, "Technologies")), /*#__PURE__*/react.createElement("div", {
    className: "content-row TechnologyRow"
  }, props.technology.map(buildColumns))), /*#__PURE__*/react.createElement("div", {
    className: "Section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react.createElement("h2", null, "Work Experience")), /*#__PURE__*/react.createElement("div", {
    className: "content-row"
  }, props.experience.map(buildExperiences))));
};
/* harmony default export */ const workExperience = (WorkExperience);
;// CONCATENATED MODULE: ./src/components/resume/resumePage.js






var ResumePage = function ResumePage(props) {
  var dispatch = (0,es/* useDispatch */.OY)();
  var _useSelector = (0,es/* useSelector */.w1)(function (state) {
      return state.GlobalReducer;
    }),
    experience = _useSelector.experience,
    technology = _useSelector.technology;
  return /*#__PURE__*/react.createElement("div", {
    className: "work-experience-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hero-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hero-container"
  }, /*#__PURE__*/react.createElement("h3", null, "Dig a little deeper."), /*#__PURE__*/react.createElement("div", {
    className: "download"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://pratikmathur-assets.s3.amazonaws.com/PratikMathur-Resume.pdf",
    target: "_blank",
    className: "button"
  }, /*#__PURE__*/react.createElement("span", null, "Download Resume", " ", /*#__PURE__*/react.createElement(reactIcons/* default */.c, {
    id: "CustomTag",
    size: "24",
    icon: "BsArrowRight"
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "hero-mouse"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mouse"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "page-content-wrapper"
  }, /*#__PURE__*/react.createElement(workExperience, {
    experience: experience,
    technology: technology
  }), /*#__PURE__*/react.createElement("div", {
    className: "latest-projects-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react.createElement("h2", null, "Latest Work")), /*#__PURE__*/react.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "latest-projects"
  }, /*#__PURE__*/react.createElement("h3", null, "Interested to see what I\u2019ve been up to?"), /*#__PURE__*/react.createElement(dist/* Link */.cH, {
    exact: true,
    to: "/projects"
  }, "View Projects")))))));
};
/* harmony default export */ const resumePage = (ResumePage);

/***/ })

}]);
//# sourceMappingURL=352.myapp.js.map