"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[436],{

/***/ 1436:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projectDetails)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(4799);
// EXTERNAL MODULE: ../node_modules/lodash/lodash.js
var lodash = __webpack_require__(7168);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(6952);
// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(1552);
// EXTERNAL MODULE: ../node_modules/react-router/dist/index.js
var dist = __webpack_require__(2060);
// EXTERNAL MODULE: ../node_modules/html-react-parser/esm/index.mjs
var esm = __webpack_require__(6040);
// EXTERNAL MODULE: ../node_modules/react-image-gallery/build/image-gallery.js
var image_gallery = __webpack_require__(6460);
// EXTERNAL MODULE: ../node_modules/react-image-gallery/styles/css/image-gallery.css
var css_image_gallery = __webpack_require__(5164);
;// CONCATENATED MODULE: ./src/components/common/gallery.js




var Gallery = function Gallery(props) {
  var _useState = (0,react.useState)([]),
    _useState2 = (0,slicedToArray/* default */.c)(_useState, 2),
    photos = _useState2[0],
    setPhotos = _useState2[1];
  console.log(props);
  (0,react.useEffect)(function () {
    var photo_list = [];
    if (props.photos) {
      props.photos.forEach(function (p, i) {
        photo_list.push({
          original: p,
          thumbnail: p,
          loading: "lazy"
        });
      });
    }
    setPhotos(photo_list);
  }, [props.photos]);
  if (photos.length > 0) {
    return /*#__PURE__*/react.createElement("div", {
      className: "container property-gallery-wrapper"
    }, /*#__PURE__*/react.createElement("h3", null, "Project Gallery"), /*#__PURE__*/react.createElement("div", {
      id: "gallery"
    }, /*#__PURE__*/react.createElement(image_gallery["default"], {
      items: photos,
      lazyload: true,
      slideInterval: 10000,
      autoPlay: true
    })));
  } else return null;
};
/* harmony default export */ const gallery = (Gallery);
;// CONCATENATED MODULE: ./src/components/projectDetails/projectDetails.js







var ProjectDetails = function ProjectDetails(props) {
  var _useState = (0,react.useState)(null),
    _useState2 = (0,slicedToArray/* default */.c)(_useState, 2),
    project = _useState2[0],
    setProject = _useState2[1];
  var _useParams = (0,dist/* useParams */.W4)(),
    slug = _useParams.slug;
  var _useSelector = (0,es/* useSelector */.w1)(function (state) {
      return state.GlobalReducer;
    }),
    projects = _useSelector.projects;
  (0,react.useEffect)(function () {
    var project = lodash.find(projects, function (p) {
      return p.slug === slug;
    });
    if (project) {
      setProject(project);
    }
  }, [slug, projects]);
  if (project) {
    return /*#__PURE__*/react.createElement("div", {
      className: "project-details-wrapper"
    }, /*#__PURE__*/react.createElement("div", {
      className: "hero-wrapper"
    }, /*#__PURE__*/react.createElement("div", {
      className: "hero-container"
    }, /*#__PURE__*/react.createElement("h1", null, project.title), project.subtitle && /*#__PURE__*/react.createElement("h4", null, project.subtitle), project.page_description && /*#__PURE__*/react.createElement("p", null, project.page_description), project.live_instance && project.live_instance !== "" && /*#__PURE__*/react.createElement("a", {
      href: project.live_instance,
      target: "_blank",
      className: "btn primary"
    }, "Live Demo")), /*#__PURE__*/react.createElement("div", {
      className: "hero-mouse"
    }, /*#__PURE__*/react.createElement("div", {
      className: "mouse"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "project-details-container"
    }, /*#__PURE__*/react.createElement("figure", null, /*#__PURE__*/react.createElement("img", {
      src: project.project_filename,
      alt: project.name
    })), /*#__PURE__*/react.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react.createElement("div", {
      className: "container"
    }, /*#__PURE__*/react.createElement("h3", null, "Project Overview"), /*#__PURE__*/react.createElement("div", {
      className: "description"
    }, (0,esm/* default */.cp)(project.description))), project.gallery && project.gallery.length > 0 && /*#__PURE__*/react.createElement(gallery, {
      photos: project.gallery
    }), project.technologies && /*#__PURE__*/react.createElement("div", {
      className: "technology-wrapper container"
    }, /*#__PURE__*/react.createElement("h3", null, "Technology"), /*#__PURE__*/react.createElement("div", {
      className: "wrapper"
    }, project.technologies.map(function (t, i) {
      return /*#__PURE__*/react.createElement("p", {
        key: i
      }, t);
    }))), /*#__PURE__*/react.createElement("div", {
      className: "links-wrapper container"
    }, /*#__PURE__*/react.createElement("h3", null, "Links"), /*#__PURE__*/react.createElement("div", {
      className: "wrapper"
    }, project.live_instance && project.live_instance !== "" && /*#__PURE__*/react.createElement("a", {
      href: project.live_instance,
      target: "_blank",
      className: "btn primary"
    }, "Live Demo"), project.github && project.github !== "" && /*#__PURE__*/react.createElement("a", {
      href: project.github,
      target: "_blank",
      className: "btn transparent"
    }, "View Source Code"))))));
  }
};
/* harmony default export */ const projectDetails = (ProjectDetails);

/***/ })

}]);
//# sourceMappingURL=436.myapp.js.map