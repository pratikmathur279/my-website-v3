"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[208],{

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

/***/ 1208:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projectsPage)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(5932);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(6952);
// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(1552);
// EXTERNAL MODULE: ./src/actions/website.js
var website = __webpack_require__(2044);
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
    src: "/images/projects/" + props.selected.file_name,
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
    src: "./images/projects/" + props.selected.url,
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
;// CONCATENATED MODULE: ./src/components/projects/projectRow.js


var ProjectRow = function ProjectRow(props) {
  console.log(props);
  var buildRow = function buildRow(project, index) {
    var isSelected = project.id === props.selected.id;
    var className = isSelected ? "project-preview active" : "project-preview";
    return /*#__PURE__*/react.createElement("div", {
      className: className,
      key: index,
      onClick: function onClick() {
        return props.selectProject(project);
      }
    }, /*#__PURE__*/react.createElement("h3", {
      className: "project-name"
    }, project.title), /*#__PURE__*/react.createElement("div", {
      className: "preview-box"
    }, /*#__PURE__*/react.createElement("img", {
      src: "/images/projects/" + project.file_name,
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
  (0,react.useEffect)(function () {
    dispatch((0,website/* getProjects */.UT)());
  }, []);
  (0,react.useEffect)(function () {
    console.log(projects);
    var split = [];
    if (window.innerWidth < 900) {
      split = createRows(projects, 1);
    } else if (window.innerWidth > 900 && window.innerWidth < 1200) {
      split = createRows(projects, 2);
    } else {
      split = createRows(projects, 3);
    }
    console.log(split);
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
  function openModalHandler(id) {
    if (showProject) {
      document.getElementsByTagName("body")[0].classList.remove("no-scroll");
      setShowProject(function (prev) {
        return !prev;
      });
    } else {
      var project = _.find(projects, function (p) {
        return p.id == id;
      });
      if (project) {
        setShowProject(true);
        setSelected(project);
        document.getElementsByTagName("body")[0].classList.add("no-scroll");
      }
    }
  }
  var selectProject = function selectProject(project) {
    console.log(project);
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
  return /*#__PURE__*/react.createElement("div", {
    className: "projects-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hero-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hero-container"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "ProjectsHeader"
  }, "Projects")), /*#__PURE__*/react.createElement("div", {
    className: "hero-mouse"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mouse"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, projectRows.map(buildRow)));
};
/* harmony default export */ const projectsPage = (ProjectsPage);

/***/ })

}]);
//# sourceMappingURL=208.myapp.js.map