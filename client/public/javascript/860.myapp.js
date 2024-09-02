"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[860],{

/***/ 7240:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4799);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6952);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1552);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2060);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6040);






var ProjectDetails = function ProjectDetails(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .c)(_useState, 2),
    project = _useState2[0],
    setProject = _useState2[1];
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .useParams */ .W4)(),
    slug = _useParams.slug;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .w1)(function (state) {
      return state.GlobalReducer;
    }),
    projects = _useSelector.projects;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var project = lodash__WEBPACK_IMPORTED_MODULE_0__.find(projects, function (p) {
      return p.slug === slug;
    });
    if (project) {
      setProject(project);
    }
  }, [slug, projects]);
  if (project) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "project-details-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "hero-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "hero-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", null, project.name), project.page_description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, project.page_description), project.live_instance && project.live_instance !== "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: project.live_instance,
      target: "_blank",
      className: "btn secondary"
    }, "Live Demo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "hero-mouse"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mouse"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "project-details-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("figure", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
      src: "https://pratikmathur-website.s3.amazonaws.com/projects/".concat(project.file_name),
      alt: project.name
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Project Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "description"
    }, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .cp)(project.description))), project.technologies && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "technology-wrapper container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", null, "Technology Stack:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "wrapper"
    }, project.technologies.map(function (t, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
        key: i
      }, t);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "links-wrapper container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", null, "Links:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "wrapper"
    }, project.live_instance && project.live_instance !== "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: project.live_instance,
      target: "_blank",
      className: "btn secondary"
    }, "Live Demo"), project.github && project.github !== "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: project.github,
      target: "_blank",
      className: "btn transparent"
    }, "View Source Code"))))));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDetails);

/***/ })

}]);
//# sourceMappingURL=860.myapp.js.map