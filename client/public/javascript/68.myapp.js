"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[68],{

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

/***/ 3068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ header)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(5932);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(6952);
// EXTERNAL MODULE: ../node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(2112);
;// CONCATENATED MODULE: ./src/components/layout/navigationItem.js


var NavigationItem = function NavigationItem(props) {
  return /*#__PURE__*/react.createElement("li", {
    className: "NavigationItem"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.Af, {
    exact: true,
    to: props.to,
    className: "NavLink"
  }, " ", props.children));
};
/* harmony default export */ const navigationItem = (NavigationItem);
;// CONCATENATED MODULE: ./src/components/layout/navigationItems.js



var NavigationItems = function NavigationItems(props) {
  return /*#__PURE__*/react.createElement("ul", {
    className: "NavigationItems"
  }, /*#__PURE__*/react.createElement(navigationItem, {
    to: "/"
  }, "Portfolio"), /*#__PURE__*/react.createElement(navigationItem, {
    to: "/about"
  }, "About"), /*#__PURE__*/react.createElement(navigationItem, {
    to: "/resume"
  }, "Resume"), /*#__PURE__*/react.createElement(navigationItem, {
    to: "/projects"
  }, "Projects"), /*#__PURE__*/react.createElement(navigationItem, {
    to: "/blog"
  }, "Blog"), /*#__PURE__*/react.createElement(navigationItem, {
    to: "/contact"
  }, "Contact"));
};
/* harmony default export */ const navigationItems = (NavigationItems);
;// CONCATENATED MODULE: ./src/components/layout/header.js





var Header = function Header(props) {
  var _useState = (0,react.useState)(""),
    _useState2 = (0,slicedToArray/* default */.c)(_useState, 2),
    navScrolled = _useState2[0],
    setNavScrolled = _useState2[1];
  (0,react.useEffect)(function () {
    window.addEventListener("scroll", function () {
      var scrolled = window.scrollY < 20 ? "" : "scrolled";
      setNavScrolled(scrolled);
    }, true);
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "header-wrapper " + navScrolled
  }, /*#__PURE__*/react.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "logo-wrapper"
  }, /*#__PURE__*/react.createElement(dist/* Link */.cH, {
    to: "/",
    className: "my-logo"
  }, /*#__PURE__*/react.createElement("img", {
    alt: "Pratik Mathur Logo",
    src: "/images/logos/pm_logo.png"
  }))), /*#__PURE__*/react.createElement("nav", {
    className: "DesktopOnly"
  }, /*#__PURE__*/react.createElement(navigationItems, null))));
};
/* harmony default export */ const header = (Header);

/***/ })

}]);
//# sourceMappingURL=68.myapp.js.map