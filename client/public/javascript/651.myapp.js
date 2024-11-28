"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[651],{

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

/***/ 1651:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contactPage)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(4799);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(6952);
// EXTERNAL MODULE: ../node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js
var react_google_recaptcha_v3_esm = __webpack_require__(1052);
;// CONCATENATED MODULE: ./src/components/contact/contactForm.js


var ContactForm = function ContactForm(props) {
  var YourReCaptchaComponent = function YourReCaptchaComponent() {
    var _useGoogleReCaptcha = (0,react_google_recaptcha_v3_esm/* useGoogleReCaptcha */.UF)(),
      executeRecaptcha = _useGoogleReCaptcha.executeRecaptcha;
    var token = executeRecaptcha("contact_page");
    return null;
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "ContactForm"
  }, /*#__PURE__*/react.createElement("div", {
    className: "contact-left-container"
  }, /*#__PURE__*/react.createElement("h2", null, "Let's talk."), /*#__PURE__*/react.createElement("h3", null, "Have a question or want to work together? Fill in the form below and I'll get back to you as soon as possible."), /*#__PURE__*/react.createElement("a", {
    href: "mailto:hello@pratikmathur.com",
    className: "email"
  }, "hello@pratikmathur.com"), /*#__PURE__*/react.createElement("a", {
    href: "tel:7039815938"
  }, "703-981-5938"), /*#__PURE__*/react.createElement("div", {
    className: "map-container"
  }, /*#__PURE__*/react.createElement("iframe", {
    src: "https://www.google.com/maps/d/embed?mid=1DQ1fZit-lxoXEQrhlvkOApGVm-0&hl=en&ehbc=2E312F"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "contact-right-container"
  }, /*#__PURE__*/react.createElement("h3", null, "Have a question or want to work together? Fill in the form below and I'll get back to you as soon as possible."), props.emailSent ? /*#__PURE__*/react.createElement("p", {
    className: "EmailSent"
  }, " Email sent!") : "", /*#__PURE__*/react.createElement("div", {
    className: "Form"
  }, /*#__PURE__*/react.createElement("input", {
    errors: props.errors,
    onChange: props.onChange,
    id: "name",
    name: "name",
    placeholder: "Enter your full name",
    value: props.formData.name
  }), /*#__PURE__*/react.createElement("input", {
    errors: props.errors,
    onChange: props.onChange,
    id: "email",
    name: "email",
    placeholder: "Enter your email address",
    value: props.formData.email
  }), /*#__PURE__*/react.createElement("input", {
    errors: props.errors,
    onChange: props.onChange,
    id: "subject",
    name: "subject",
    placeholder: "Please enter a subject",
    value: props.formData.subject
  }), /*#__PURE__*/react.createElement("textarea", {
    errors: props.errors,
    onChange: props.onChange,
    name: "message",
    placeholder: "Enter message",
    value: props.formData.message
  }), /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: props.onClick
  }, "Send!"))));
};
/* harmony default export */ const contactForm = (ContactForm);
;// CONCATENATED MODULE: ./src/components/contact/contactPage.js




var ContactPage = function ContactPage(props) {
  var _useState = (0,react.useState)({}),
    _useState2 = (0,slicedToArray/* default */.c)(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  return /*#__PURE__*/react.createElement("div", {
    className: "contact-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hero-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hero-container"
  }, /*#__PURE__*/react.createElement("h3", null, "Connect with me today.")), /*#__PURE__*/react.createElement("div", {
    className: "hero-mouse"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mouse"
  }))), /*#__PURE__*/react.createElement(contactForm, {
    formData: formData
  }));
};
/* harmony default export */ const contactPage = (ContactPage);

/***/ })

}]);
//# sourceMappingURL=651.myapp.js.map