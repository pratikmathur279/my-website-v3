"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[88],{

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

/***/ 1088:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homepage)
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(6952);
// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(1552);
// EXTERNAL MODULE: ../node_modules/framer-motion/dist/es/utils/use-in-view.mjs + 1 modules
var use_in_view = __webpack_require__(7396);
// EXTERNAL MODULE: ../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 229 modules
var proxy = __webpack_require__(6204);
// EXTERNAL MODULE: ../node_modules/react-type-animation/dist/esm/index.es.js
var index_es = __webpack_require__(4512);
// EXTERNAL MODULE: ./src/components/common/reactIcons.js
var reactIcons = __webpack_require__(56);
;// CONCATENATED MODULE: ./src/components/homepage/hexagons.js


var Hexagons = function Hexagons(props) {
  var buildList = function buildList(hex) {
    return /*#__PURE__*/React.createElement("div", {
      key: hex.id,
      className: "AlignHexagon"
    }, /*#__PURE__*/React.createElement("div", {
      className: "Hexagon"
    }, /*#__PURE__*/React.createElement("div", {
      className: "Icons"
    }, /*#__PURE__*/React.createElement(ReactIcons, {
      key: hex.id,
      icon: hex.name,
      size: 60
    }))), /*#__PURE__*/React.createElement("h3", null, hex.title), /*#__PURE__*/React.createElement("p", null, hex.desc));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "HexagonsContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hexagons-wrapper"
  }, props.hexagons.map(buildList)));
};
/* harmony default export */ const hexagons = ((/* unused pure expression or super */ null && (Hexagons)));
// EXTERNAL MODULE: ./src/components/layout/footerImage.js
var footerImage = __webpack_require__(5048);
;// CONCATENATED MODULE: ./src/components/homepage/filler.js

var filler_Filler = function Filler(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "Filler",
    style: {
      width: "".concat(props.skill.percentage, "% ")
    }
  }, /*#__PURE__*/React.createElement("span", {
    value: props.skill.name
  }));
};
/* harmony default export */ const filler = ((/* unused pure expression or super */ null && (filler_Filler)));
;// CONCATENATED MODULE: ./src/components/homepage/skillsBar.js


var SkillsBar = function SkillsBar(props) {
  var buildSkillsBar = function buildSkillsBar(skill) {
    return /*#__PURE__*/React.createElement("div", {
      key: skill.index,
      className: "SkillsBar"
    }, /*#__PURE__*/React.createElement(Filler, {
      skill: skill
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "SkillsBarContainer"
  }, props.skills.map(buildSkillsBar));
};
/* harmony default export */ const skillsBar = ((/* unused pure expression or super */ null && (SkillsBar)));
// EXTERNAL MODULE: ../node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(2112);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(4799);
;// CONCATENATED MODULE: ./src/components/myExpertise/my-expertise.js


var MyExpertise = function MyExpertise() {
  var _useState = (0,react.useState)([{
      title: "Web Design & Development",
      description: "Custom websites blending function and aesthetics with cutting-edge technology for unique online experiences. "
    }, {
      title: "System Optimization",
      description: "Revamping existing systems, improving efficiency and reducing costs through innovative code solutions. "
    }, {
      title: "Mobile App Development",
      description: "Mobile apps tailored for engaging, user-friendly experiences that meet modern digital demands."
    }, {
      title: "Enterprise Solutions",
      description: "Enterprise-level software that scales with business needs, providing reliability and performance. "
    }, {
      title: "SEO Boost",
      description: "Comprehensive SEO services to enhance digital presence and improve website rankings effectively."
    }, {
      title: "AI Integration",
      description: "Leveraging AI for personalized tech solutions, improving user interaction and predictive capabilities."
    }]),
    _useState2 = (0,slicedToArray/* default */.c)(_useState, 2),
    expertise = _useState2[0],
    setExpertise = _useState2[1];
  return /*#__PURE__*/react.createElement("div", {
    className: "flex-container-lg "
  }, /*#__PURE__*/react.createElement("div", {
    className: "my-expertise-wrapper"
  }, /*#__PURE__*/react.createElement("h1", null, "My Expertise"), /*#__PURE__*/react.createElement("div", {
    className: "my-expertise-container"
  }, expertise.map(function (item, index) {
    return /*#__PURE__*/react.createElement("div", {
      key: index,
      className: "item"
    }, /*#__PURE__*/react.createElement("p", {
      className: "index"
    }, (index + 1).toString().padStart(2, "0")), /*#__PURE__*/react.createElement("h3", null, item.title), /*#__PURE__*/react.createElement("p", null, item.description));
  }))));
};
/* harmony default export */ const my_expertise = (MyExpertise);
// EXTERNAL MODULE: ../node_modules/react-lazy-load-image-component/build/index.js
var build = __webpack_require__(5112);
// EXTERNAL MODULE: ../node_modules/react-lazy-load-image-component/src/effects/blur.css
var effects_blur = __webpack_require__(6680);
;// CONCATENATED MODULE: ./src/components/common/lazyloadImg.js



var LazyLoadImg = function LazyLoadImg(props) {
  var _props$alt;
  return /*#__PURE__*/react.createElement(build.LazyLoadImage, {
    alt: (_props$alt = props.alt) !== null && _props$alt !== void 0 ? _props$alt : props.id,
    className: props.className,
    src: props.src,
    effect: "blur",
    threshold: 0
  });
};
/* harmony default export */ const lazyloadImg = (LazyLoadImg);
;// CONCATENATED MODULE: ./src/components/homepage/homepage.js











var Homepage = function Homepage(props) {
  var dispatch = (0,es/* useDispatch */.OY)();
  var _useSelector = (0,es/* useSelector */.w1)(function (state) {
      return state.GlobalReducer;
    }),
    skills = _useSelector.skills,
    experience = _useSelector.experience,
    education = _useSelector.education;

  // Animation Variants
  var slideUp = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  // In-view logic
  var headingRef = (0,react.useRef)(null);
  var isInView = (0,use_in_view/* useInView */.c)(headingRef, {
    once: true
  });
  var buildExperiences = function buildExperiences(exp) {
    var fromYear = new Date(exp.from).getFullYear();
    return /*#__PURE__*/react.createElement("div", {
      key: exp.id,
      className: "experience"
    }, /*#__PURE__*/react.createElement("div", {
      className: "sphere"
    }, /*#__PURE__*/react.createElement("p", null, fromYear)), /*#__PURE__*/react.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react.createElement("h4", null, exp.name), /*#__PURE__*/react.createElement("p", null, exp.description)));
  };
  var buildEducation = function buildEducation(edu) {
    var fromYear = new Date(edu.from).getFullYear();
    return /*#__PURE__*/react.createElement("div", {
      key: edu.id,
      className: "experience"
    }, /*#__PURE__*/react.createElement("div", {
      className: "sphere"
    }, /*#__PURE__*/react.createElement("p", null, fromYear)), /*#__PURE__*/react.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react.createElement("h4", null, edu.institution), /*#__PURE__*/react.createElement("p", null, edu.course)));
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "homepage-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "HomepageContainer hero-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "homepage-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "content-wrapper"
  }, /*#__PURE__*/react.createElement("h4", null, "Hello! My name is"), /*#__PURE__*/react.createElement("h1", null, "Pratik Mathur"), /*#__PURE__*/react.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/react.createElement("div", {
    className: "static-text"
  }, "I'm a"), /*#__PURE__*/react.createElement(index_es/* TypeAnimation */.U, {
    sequence: ["Developer.", 1500, "Technophile.", 1500, "Gamer.", 1500, "Freelancer.", 1500, "AI Enthusiast.", 1500],
    speed: 30,
    wrapper: "span",
    repeat: Infinity
  })), /*#__PURE__*/react.createElement("div", {
    className: "description"
  }, /*#__PURE__*/react.createElement("p", null, "I\u2019m a software engineer specializing in building and designing exceptional digital experiences. I have a passion for creating intuitive, dynamic and cross-platform user experiences.")))), /*#__PURE__*/react.createElement("div", {
    className: "my-image"
  }, /*#__PURE__*/react.createElement("img", {
    src: "https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/pratik_mathur.JPG",
    alt: "My P"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "social-icons-wrapper"
  }, /*#__PURE__*/react.createElement(footerImage/* default */.c, {
    icon: "AiFillLinkedin",
    size: "32",
    color: "white",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/in/pratik-mathur/",
    target: "_blank"
  }), /*#__PURE__*/react.createElement(footerImage/* default */.c, {
    icon: "AiFillGithub",
    size: "32",
    color: "white",
    alt: "Github",
    url: "https://github.com/pratikmathur279",
    target: "_blank"
  }), /*#__PURE__*/react.createElement(footerImage/* default */.c, {
    icon: "AiOutlineInstagram",
    size: "32",
    color: "white",
    alt: "Instagram",
    url: "https://www.instagram.com/pratikmathur279/",
    target: "_blank"
  }), /*#__PURE__*/react.createElement(footerImage/* default */.c, {
    icon: "AiOutlineMail",
    size: "32",
    color: "white",
    alt: "E-Mail",
    url: "mailto:hello@pratikmathur.com"
  }), /*#__PURE__*/react.createElement(footerImage/* default */.c, {
    icon: "FaWhatsapp",
    size: "32",
    color: "white",
    alt: "E-Mail",
    url: "https://wa.me/7039815938",
    target: "_blank"
  })), /*#__PURE__*/react.createElement("div", {
    className: "hero-mouse"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mouse"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "flex-container-lg description-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "descriptionWrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "descriptionImage"
  }, /*#__PURE__*/react.createElement(lazyloadImg, {
    src: "https://pratikmathur-website.s3.us-east-1.amazonaws.com/assets/AdobeStock_432968278_750x483.png",
    alt: "Web Development technologies map"
  })), /*#__PURE__*/react.createElement("div", {
    className: "description"
  }, /*#__PURE__*/react.createElement("h1", null, "My passion and focus is web development"), /*#__PURE__*/react.createElement("p", null, "I'm a passionate software developer driven by turning ideas into reality. I focus on crafting robust web applications and software that prioritizes a fantastic user experience. In my work, I take great pride in:"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("b", null, "Bringing ideas to life:"), " I love collaborating and transforming concepts into user-friendly applications."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("b", null, "Building robust applications:"), " I strive to create reliable and secure software that can stand the test of time."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("b", null, "Exceptional user experience (UX):"), " At the heart of everything I do is a focus on making applications intuitive and enjoyable to use.")), /*#__PURE__*/react.createElement("p", null, "Want to learn more about how I can help you achieve your development goals?", " ", /*#__PURE__*/react.createElement(dist/* Link */.cH, {
    to: "/contact"
  }, "Don't hesitate to reach out!"))))), /*#__PURE__*/react.createElement(my_expertise, null), /*#__PURE__*/react.createElement("div", {
    className: "experience-education-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex-container-lg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "experience-wrapper"
  }, /*#__PURE__*/react.createElement(proxy/* motion */.q.h1, {
    ref: headingRef,
    variants: slideUp,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    transition: {
      duration: 0.8
    }
  }, "Experiences"), /*#__PURE__*/react.createElement(proxy/* motion */.q.div, {
    className: "wrapper",
    variants: slideUp,
    animate: isInView ? "visible" : "hidden",
    transition: {
      duration: 0.8
    }
  }, experience.map(buildExperiences))), /*#__PURE__*/react.createElement("div", {
    className: "experience-wrapper"
  }, /*#__PURE__*/react.createElement(proxy/* motion */.q.h2, {
    ref: headingRef,
    variants: slideUp,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    transition: {
      duration: 0.8
    }
  }, "Education"), /*#__PURE__*/react.createElement(proxy/* motion */.q.div, {
    className: "wrapper",
    variants: slideUp,
    animate: isInView ? "visible" : "hidden",
    transition: {
      duration: 0.8
    }
  }, education.map(buildEducation))))));
};
/* harmony default export */ const homepage = (Homepage);

/***/ }),

/***/ 5048:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6952);
/* harmony import */ var _common_reactIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);


var FooterImage = function FooterImage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footerImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: props.url,
    target: props.target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_reactIcons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
    id: "CustomTag",
    size: props.size,
    color: props.color,
    icon: props.icon,
    background: "#fff"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterImage);

/***/ })

}]);
//# sourceMappingURL=88.myapp.js.map