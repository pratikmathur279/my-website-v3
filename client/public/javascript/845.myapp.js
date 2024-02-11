"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[845],{

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

/***/ 845:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ footer)
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(6952);
// EXTERNAL MODULE: ./src/components/common/reactIcons.js
var reactIcons = __webpack_require__(56);
;// CONCATENATED MODULE: ./src/components/layout/footerImage.js


var footerImage = function footerImage(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "footerImage"
  }, /*#__PURE__*/react.createElement("a", {
    href: props.url,
    target: props.target
  }, /*#__PURE__*/react.createElement(reactIcons/* default */.c, {
    id: "CustomTag",
    size: props.size,
    color: props.color,
    icon: props.icon,
    background: "#fff"
  })));
};
/* harmony default export */ const layout_footerImage = (footerImage);
;// CONCATENATED MODULE: ./src/components/layout/footer.js


var Footer = function Footer(props) {
  var year = new Date().getFullYear();
  return /*#__PURE__*/react.createElement("div", {
    className: "Footer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "FooterDiv"
  }, /*#__PURE__*/react.createElement("div", {
    className: "FooterContainer"
  }, /*#__PURE__*/react.createElement(layout_footerImage, {
    icon: "AiFillLinkedin",
    size: "32",
    color: "white",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/in/pratik-mathur/",
    target: "_blank"
  }), /*#__PURE__*/react.createElement(layout_footerImage, {
    icon: "AiFillGithub",
    size: "32",
    color: "white",
    alt: "Github",
    url: "https://github.com/pratikmathur279",
    target: "_blank"
  }), /*#__PURE__*/react.createElement(layout_footerImage, {
    icon: "AiOutlineInstagram",
    size: "32",
    color: "white",
    alt: "Instagram",
    url: "https://www.instagram.com/pratikmathur279/",
    target: "_blank"
  }), /*#__PURE__*/react.createElement(layout_footerImage, {
    icon: "AiOutlineMail",
    size: "32",
    color: "white",
    alt: "E-Mail",
    url: "mailto:pratikmathur279@gmail.com"
  }), /*#__PURE__*/react.createElement(layout_footerImage, {
    icon: "FaWhatsapp",
    size: "32",
    color: "white",
    alt: "E-Mail",
    url: "https://wa.me/7039815938",
    target: "_blank"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "FooterDiv"
  }, /*#__PURE__*/react.createElement("p", null, "\xA9", year, " Pratik Mathur. All rights reserved.")));
};
/* harmony default export */ const footer = (Footer);

/***/ })

}]);
//# sourceMappingURL=845.myapp.js.map