"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[208],{

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

/***/ 1208:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projectsPage)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(4799);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(6952);
// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(1552);
;// CONCATENATED MODULE: ./src/components/projects/project.js

var Project = function Project(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "project-selector"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "project-name"
  }, props.selected.title), /*#__PURE__*/react.createElement("p", {
    className: "project-description"
  }, props.selected.description), /*#__PURE__*/react.createElement("div", {
    className: "project-preview"
  }, /*#__PURE__*/react.createElement("img", {
    src: "https://pratikmathur-website.s3.amazonaws.com/projects/" + props.selected.file_name,
    alt: props.selected.name
  })), props.selected.technologies && /*#__PURE__*/react.createElement("div", {
    className: "technology-wrapper"
  }, /*#__PURE__*/react.createElement("h3", null, "Technology Stack:"), /*#__PURE__*/react.createElement("div", {
    className: "wrapper"
  }, props.selected.technologies.map(function (t, i) {
    return /*#__PURE__*/react.createElement("p", {
      key: i
    }, t);
  }))), /*#__PURE__*/react.createElement("div", {
    className: "links-wrapper"
  }, /*#__PURE__*/react.createElement("h3", null, "Links:"), props.selected.live_instance && props.selected.live_instance !== "" && /*#__PURE__*/react.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react.createElement("p", null, "Live Demo", /*#__PURE__*/react.createElement("span", null, "View the live demo of the app")), /*#__PURE__*/react.createElement("a", {
    href: props.selected.live_instance,
    target: "_blank"
  }, "View Demo")), props.selected.github && props.selected.github !== "" && /*#__PURE__*/react.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react.createElement("p", null, "GitHub Repository", /*#__PURE__*/react.createElement("span", null, "View the code repository on GitHub")), /*#__PURE__*/react.createElement("a", {
    href: props.selected.github,
    target: "_blank"
  }, "View Repository"))));
};
/* harmony default export */ const project = (Project);
;// CONCATENATED MODULE: ./src/components/projects/projectInformation.js

var ProjectInformation = function ProjectInformation(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ProjectInformation"
  }, /*#__PURE__*/React.createElement("img", {
    id: props.selected.index,
    src: ".https://pratikmathur-website.s3.amazonaws.com/projects/" + props.selected.url,
    alt: props.selected.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "projectBody"
  }, /*#__PURE__*/React.createElement("h2", null, props.selected.name), /*#__PURE__*/React.createElement("p", null, props.selected.description), props.selected.github ? /*#__PURE__*/React.createElement("p", null, "To view the source code,", " ", /*#__PURE__*/React.createElement("a", {
    href: props.selected.github,
    target: "_blank"
  }, "click here")) : "", props.selected.live_instance ? /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: props.selected.live_instance,
    target: "_blank"
  }, "Click here"), " ", "to play the game!") : ""));
};
/* harmony default export */ const projectInformation = ((/* unused pure expression or super */ null && (ProjectInformation)));
// EXTERNAL MODULE: ../node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(2112);
;// CONCATENATED MODULE: ./src/components/projects/projectRow.js



var ProjectRow = function ProjectRow(props) {
  var buildRow = function buildRow(project, index) {
    var isSelected = project.id === props.selected.id;
    var className = isSelected ? "project-preview active" : "project-preview";
    return /*#__PURE__*/react.createElement(dist/* Link */.cH, {
      className: className,
      key: index
      // onClick={() => props.selectProject(project)}
      ,
      to: "/projects/".concat(project.slug)
    }, /*#__PURE__*/react.createElement("h3", {
      className: "project-name"
    }, project.title), /*#__PURE__*/react.createElement("div", {
      className: "preview-box"
    }, /*#__PURE__*/react.createElement("img", {
      src: "https://pratikmathur-website.s3.amazonaws.com/projects/" + project.file_name,
      alt: project.name
    })));
  };
  var hasSelected = function hasSelected() {
    if ("id" in props.selected) {
      var isExist = _.find(props.projects, function (p) {
        return p.id === props.selected.id;
      });
      if (isExist) return true;
    }
    return false;
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "projects-row"
  }, props.projects.map(buildRow), hasSelected() && /*#__PURE__*/react.createElement(project, {
    selected: props.selected,
    selectProject: props.selectProject
  }));
};
/* harmony default export */ const projectRow = (ProjectRow);
;// CONCATENATED MODULE: ./src/components/projects/projectsPage.js








var ProjectsPage = function ProjectsPage(props) {
  var dispatch = (0,es/* useDispatch */.OY)();
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.c)(_useState, 2),
    showProject = _useState2[0],
    setShowProject = _useState2[1];
  var _useState3 = (0,react.useState)({}),
    _useState4 = (0,slicedToArray/* default */.c)(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = (0,slicedToArray/* default */.c)(_useState5, 2),
    projectRows = _useState6[0],
    setProjectRows = _useState6[1];
  var _useSelector = (0,es/* useSelector */.w1)(function (state) {
      return state.GlobalReducer;
    }),
    projects = _useSelector.projects;
  var allProjectsRef = react.useRef();
  (0,react.useEffect)(function () {
    var split = [];
    if (window.innerWidth < 900) {
      split = createRows(projects, 1);
    } else if (window.innerWidth > 900 && window.innerWidth < 1200) {
      split = createRows(projects, 2);
    } else {
      split = createRows(projects, 3);
    }
    setProjectRows(split);
  }, [projects]);
  function createRows(orignal, length) {
    var arr = [];
    var original = _.clone(orignal);
    while (original.length > 0) {
      var split = original.splice(0, length);
      arr.push(split);
    }
    return arr;
  }
  var selectProject = function selectProject(project) {
    if ("id" in selected) {
      if (selected.id === project.id) {
        setSelected({});
        return;
      }
    }
    setSelected(project);
  };
  var buildRow = function buildRow(row, index) {
    return /*#__PURE__*/react.createElement(projectRow, {
      projects: row,
      key: index,
      selected: selected,
      selectProject: selectProject
    });
  };
  var scrollToAllProjects = function scrollToAllProjects() {
    allProjectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
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
  }, "Projects"), /*#__PURE__*/react.createElement("div", {
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
    className: "container"
  }, projectRows.map(buildRow)));
};
/* harmony default export */ const projectsPage = (ProjectsPage);

/***/ })

}]);
//# sourceMappingURL=208.myapp.js.map