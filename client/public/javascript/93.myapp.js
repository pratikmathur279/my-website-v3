"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[93],{

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

/***/ 6093:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5932);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6952);


var BlogPage = function BlogPage(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      url: "https://hackernoon.com/9-javascript-design-patters-you-will-love",
      header: "9 JavaScript Design Patterns You Will Love",
      description: "",
      image: "KmNf0Wo4w4avMoWS6xST2YLQABu2-xh9304q.jpg"
    }, {
      url: "https://hackernoon.com/how-to-buy-bitcoin-anonymously-the-most-secure-ways",
      header: "How to Buy Bitcoin Anonymously: The Most Secure Ways",
      description: "",
      image: "wexjcdgw1fNEWcbWaI66m8Cri743-bsf2exe.jpg"
    }, {
      url: "https://hackernoon.com/testing-evolution-and-web-applications-its-about-survival-of-the-fittest",
      header: "Testing, Evolution, and Web Applications: It’s About Survival of the Fittest",
      description: "",
      image: "hQ098u52DzPm2Y4UITQcQXtLRAk2-ubb3g93.jpg"
    }, {
      url: "https://hackernoon.com/choosing-between-prototyping-vs-mvps-in-software-development",
      header: "Choosing Between Prototyping vs MVPs in Software Development",
      description: "",
      image: "aj3xbFpstic3cuoNnxwYiHpBNyj2-n692nzd.jpg"
    }, {
      url: "https://luminousmen.com/post/what-are-the-best-engineering-principles",
      header: "What Are The Best Software Engineering Principles?",
      description: "",
      image: "what-are-the-best-engineering-principles-6.jpg"
    }, {
      url: "https://hackernoon.com/how-to-develop-a-bug-triage-process-efficiently",
      header: "How to Develop a Bug Triage Process Efficiently",
      description: "",
      image: "D7iB4iTOHyaFEVCL0l1uPlKRMsS2-yv93gmq.jpg"
    }, {
      url: "https://dzone.com/articles/chatgpt-vs-gpt3-the-ultimate-comparison-features",
      header: "ChatGPT vs. GPT3: The Ultimate Comparison",
      description: "",
      image: "eb23d82c26b9e4f0c728dc93463c5798.webp"
    }, {
      url: "https://dkb.io/post/google-search-is-dying",
      header: "Google Search Is Dying",
      description: "",
      image: "7f5b7f499973f5947d6f40ae09e18d30.webp"
    }, {
      url: "https://dev.to/render/git-organized-a-better-git-flow-56go",
      header: "Git Organized: A Better Git Flow",
      description: "",
      image: "427yh9kull5oycojetde.webp"
    }, {
      url: "https://devdojo.com/abhiraj/10-github-repos-you-cannot-miss-out-on",
      header: "10 GitHub repos you cannot miss out on",
      description: "",
      image: "541c4c594c69987ed3c05ff7f9edce95.webp"
    }]),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c)(_useState, 2),
    blogs = _useState2[0],
    setBlogs = _useState2[1];
  var buildBlogs = function buildBlogs(b) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "blog"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: b.url,
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "/images/blogs/".concat(b.image)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, b.header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, b.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "read-more"
    }, "Read more")));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "blog-builder-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "My Insights")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-mouse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mouse"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "blogs-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "blogs-container"
  }, blogs.map(buildBlogs))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPage);

/***/ })

}]);
//# sourceMappingURL=93.myapp.js.map