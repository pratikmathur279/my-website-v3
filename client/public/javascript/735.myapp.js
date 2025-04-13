"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[735],{

/***/ 6735:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projectsPage)
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(6952);
// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(1552);
// EXTERNAL MODULE: ../node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(2112);
// EXTERNAL MODULE: ../node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(3696);
;// CONCATENATED MODULE: ./src/components/projects/projectCard.js



var ProjectCard = function ProjectCard(props) {
  var _props$project;
  console.log(props);
  return /*#__PURE__*/react.createElement("div", {
    className: "project-card",
    to: "/projects/".concat(props.project.slug),
    key: props.key
  }, /*#__PURE__*/react.createElement("div", {
    className: "preview-box"
  }, /*#__PURE__*/react.createElement("img", {
    src: props.project.project_filename,
    alt: props.project.name
  })), /*#__PURE__*/react.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "project-name"
  }, props.project.name), /*#__PURE__*/react.createElement("p", null, props.project.page_description), (props === null || props === void 0 || (_props$project = props.project) === null || _props$project === void 0 ? void 0 : _props$project.technologies) && /*#__PURE__*/react.createElement("div", {
    className: "technology-wrapper"
  }, props.project.technologies.map(function (t, i) {
    return /*#__PURE__*/react.createElement("p", {
      key: i
    }, t);
  })), /*#__PURE__*/react.createElement(dist/* Link */.cH, {
    className: "btn primary",
    to: "/projects/".concat(props.project.slug)
  }, /*#__PURE__*/react.createElement(index_esm/* IoOpenOutline */.i_H, null), /*#__PURE__*/react.createElement("span", null, "View Project"))));
};
/* harmony default export */ const projectCard = (ProjectCard);
;// CONCATENATED MODULE: ./src/components/projects/projectsPage.js





var ProjectsPage = function ProjectsPage(props) {
  var dispatch = (0,es/* useDispatch */.OY)();
  var _useSelector = (0,es/* useSelector */.w1)(function (state) {
      return state.GlobalReducer;
    }),
    projects = _useSelector.projects;
  var allProjectsRef = react.useRef();
  (0,react.useEffect)(function () {
    console.log(projects);
  }, [projects]);
  var scrollToAllProjects = function scrollToAllProjects() {
    allProjectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  var buildRow = function buildRow(project, index) {
    if ("active" in project && project.active === false) return null;
    return /*#__PURE__*/react.createElement(projectCard, {
      key: index,
      project: project,
      index: index
    });
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "projects-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hero-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hero-container"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "ProjectsHeader"
  }, "My Projects"), /*#__PURE__*/react.createElement("div", {
    className: "download"
  }, /*#__PURE__*/react.createElement("a", {
    onClick: function onClick() {
      return scrollToAllProjects();
    }
  }, /*#__PURE__*/react.createElement("span", null, "View All")))), /*#__PURE__*/react.createElement("div", {
    className: "hero-mouse"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mouse"
  }))), /*#__PURE__*/react.createElement("div", {
    ref: allProjectsRef,
    id: "allProjects",
    className: "projects-row"
  }, projects.map(buildRow)));
};
/* harmony default export */ const projectsPage = (ProjectsPage);

/***/ })

}]);
//# sourceMappingURL=735.myapp.js.map