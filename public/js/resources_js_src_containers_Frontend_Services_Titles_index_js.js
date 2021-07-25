(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Frontend_Services_Titles_index_js"],{

/***/ "./resources/js/src/components/UI/Chevrons/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/UI/Chevrons/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Chevrons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chevrons.css */ "./resources/js/src/components/UI/Chevrons/Chevrons.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var intervalLeft;
var intervalRight;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var id = _ref.id;

  var goToLeft = function goToLeft() {
    return document.getElementById(id).scrollLeft -= 10;
  };

  var goToRight = function goToRight() {
    return document.getElementById(id).scrollLeft += 10;
  };

  var activateLeft = function activateLeft() {
    intervalLeft = setInterval(goToLeft, 20);
  };

  var activateRight = function activateRight() {
    intervalRight = setInterval(goToRight, 20);
  };

  var deactivateLeft = function deactivateLeft() {
    if (intervalLeft) clearInterval(intervalLeft);
  };

  var deactivateRight = function deactivateRight() {
    if (intervalRight) clearInterval(intervalRight);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "UI Chevrons text-15 text-md-17 text-xxl-19 text-blue px-2 px-md-3 px-xxl-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "pr-2 pr-md-3 pr-xxl-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
        className: "fad fa-chevron-double-left",
        onMouseDown: activateLeft,
        onMouseUp: deactivateLeft,
        onMouseLeave: deactivateLeft,
        onTouchStart: activateLeft,
        onTouchEnd: deactivateLeft
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
        className: "fad fa-chevron-double-right",
        onMouseDown: activateRight,
        onMouseUp: deactivateRight,
        onMouseLeave: deactivateRight,
        onTouchStart: activateRight,
        onTouchEnd: deactivateRight
      })
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/components/UI/Police/Block/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/UI/Police/Block/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var _assets_images_white_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/images/white-bg.png */ "./resources/js/src/assets/images/white-bg.png");
/* harmony import */ var _assets_images_gray_bg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/gray-bg.png */ "./resources/js/src/assets/images/gray-bg.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      children = _ref.children,
      full = _ref.full,
      left = _ref.left,
      fluid = _ref.fluid,
      title = _ref.title,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'white' : _ref$color,
      subtitle = _ref.subtitle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "text-14 text-md-15 text-xxl-16 text-secondary text-justify " + (full ? "" : "py-3 py-md-4 py-xxl-5"),
    style: (0,_shared_utility__WEBPACK_IMPORTED_MODULE_1__.updateObject)(style, {
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: 'url("' + {
        white: _assets_images_white_bg_png__WEBPACK_IMPORTED_MODULE_2__.default,
        soft: _assets_images_gray_bg_png__WEBPACK_IMPORTED_MODULE_3__.default
      }[color] + '")'
    }),
    children: full ? children : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "container-" + (fluid ? "fluid" : "xxl") + " py-3 py-md-4 py-xxl-5",
      children: [left ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "text-center text-md-left mb-3 mb-md-4 mb-xxl-5 pb-3 pb-md-4 pb-xxl-5 pl-md-4 pl-xxl-5 ml-md-4 ml-xxl-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "text-700 text-nightblue text-21 text-md-28 text-xxl-35",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "text-300 text-secondary text-16 text-md-20 text-xxl-25",
          children: subtitle
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "text-center mb-3 mb-md-4 mb-xxl-5 pb-3 pb-md-4 pb-xxl-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-700 text-blue",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "text-16 text-md-25 text-xxl-35",
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "d-flex justify-content-center align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "bg-border",
                style: {
                  height: .5,
                  width: 40
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "px-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "rounded-circle border border-blue",
                style: {
                  height: 8,
                  width: 8
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "bg-border",
                style: {
                  height: .5,
                  width: 40
                }
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "text-secondary row justify-content-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "col-md-10 text-16 text-md-20 text-xxl-25 col-lg-8",
            children: subtitle
          })
        })]
      }), children]
    })
  });
});

/***/ }),

/***/ "./resources/js/src/components/UI/Police/Fees/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/UI/Police/Fees/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Fees_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fees.css */ "./resources/js/src/components/UI/Police/Fees/Fees.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var amount = _ref.amount,
      description = _ref.description;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "UI Fees col pb-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "rounded-15 p-2 block",
      children: [amount > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "d-flex align-items-center px-1 px-md-2 px-xxl-3 pt-2 pt-md-3 pt-xxl-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "text-24 text-md-28 text-xxl-32 text-700 text-montserrat pr-1",
          children: amount
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "text-15 text-md-18 text-xxl-21",
          children: "XAF"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "text-24 text-md-28 text-xxl-32 text-700 text-montserrat px-1 px-md-2 px-xxl-3 pt-2 pt-md-3 pt-xxl-4",
        children: "GRATUIT"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mt-1 mt-md-2 mt-xxl-3 mb-2 mb-md-3 mb-xxl-4 position-relative",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "position-absolute ml-1 ml-md-2 ml-xxl-3 rounded-pill"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "text-16 text-md-17 text-xxl-18 px-1 px-md-2 px-xxl-3 pt-1 pb-2 pb-md-3 pb-xxl-4",
        children: description
      })]
    })
  });
});

/***/ }),

/***/ "./resources/js/src/components/UI/Police/Title/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/UI/Police/Title/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "bg-blue py-3 py-md-4 py-xxl-5",
    style: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "container py-3 py-md-4 py-xxl-5 my-2 my-md-3 my-xxl-4 text-30 text-md-35 text-xxl-40 text-700 text-white text-center",
      children: [children, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "d-flex justify-content-center align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "bg-white",
            style: {
              height: .5,
              width: 40
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "px-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "rounded-circle bg-white",
            style: {
              height: 8,
              width: 8
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "bg-white",
            style: {
              height: .5,
              width: 40
            }
          })
        })]
      })]
    })
  });
});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Services/Titles/index.js":
/*!***********************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Services/Titles/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Input.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavLink.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/TabPane.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Nav.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/TabContent.js");
/* harmony import */ var _components_UI_Chevrons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/UI/Chevrons */ "./resources/js/src/components/UI/Chevrons/index.js");
/* harmony import */ var _components_UI_Police_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/UI/Police/Title */ "./resources/js/src/components/UI/Police/Title/index.js");
/* harmony import */ var _components_UI_Police_Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/UI/Police/Block */ "./resources/js/src/components/UI/Police/Block/index.js");
/* harmony import */ var _components_UI_Police_Fees__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/UI/Police/Fees */ "./resources/js/src/components/UI/Police/Fees/index.js");
/* harmony import */ var _Titles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Titles.css */ "./resources/js/src/containers/Frontend/Services/Titles/Titles.css");
/* harmony import */ var _assets_images_CNI_1536x1039_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/images/CNI-1536x1039@2x.png */ "./resources/js/src/assets/images/CNI-1536x1039@2x.png");
/* harmony import */ var _assets_images_SEJOUR_1536x1039_2x_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/images/SEJOUR-1536x1039@2x.png */ "./resources/js/src/assets/images/SEJOUR-1536x1039@2x.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var Li = function Li(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "d-flex",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
        className: "fad fa-badge-check text-darkgreen mr-3 text-15 text-md-20 text-xxl-25"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      children: children
    })]
  });
};

var Titles = /*#__PURE__*/function (_Component) {
  _inherits(Titles, _Component);

  var _super = _createSuper(Titles);

  function Titles() {
    var _this;

    _classCallCheck(this, Titles);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeTab: '1'
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function (tab) {
      return _this.setState({
        activeTab: tab
      });
    });

    return _this;
  }

  _createClass(Titles, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeTab = this.state.activeTab;
      var csFees = [{
        amount: 30000,
        description: "Etudiants, \xE9l\xE8ves ou \n                enfants mineurs ;"
      }, {
        amount: 120000,
        description: "Pour les Africains\n                Majeurs"
      }, {
        amount: 200000,
        description: "Pour les \n                Fran\xE7ais "
      }, {
        amount: 250000,
        description: "Pour les autres \n                Nationalit\xE9s "
      }, {
        amount: 0,
        description: "Pour les assimil\xE9s \n                aux membres du \n                corps diplomatiques"
      }];
      var cresFees = [{
        amount: 60000,
        description: "Pour les religieux et \n                conjoints l\xE9gitimes \n                de camerounais"
      }, {
        amount: 250000,
        description: "Pour les Africains\n                Majeurs"
      }, {
        amount: 500000,
        description: "Pour les \n                Fran\xE7ais "
      }, {
        amount: 700000,
        description: "Pour les autres \n                Nationalit\xE9s "
      }, {
        amount: 0,
        description: "Pour les assimil\xE9s \n                aux membres du \n                corps diplomatiques"
      }];
      var csFeesContent = csFees.map(function (fees) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Police_Fees__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, fees), Math.random() + JSON.stringify(fees));
      });
      var cresFeesContent = cresFees.map(function (fees) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Police_Fees__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, fees), Math.random() + JSON.stringify(fees));
      });
      var navItems = [{
        id: '1',
        name: "Carte Nationale D’Identité",
        content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "container-xxl",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "d-flex align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "pr-2 pr-md-3 bg-white",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "px-1 px-md-2 px-xxl-3",
                    children: '1#'
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-blue text-700 text-25 text-md-30 text-xxl-35",
                  children: "Carte Nationale D’Identité"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-black text-300 text-16 text-md-20 text-xxl-25",
                  children: "Composition du dossier"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "row mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "col-md-8 col-xxl-9 pt-3 pt-md-4 pt-xxl-5 text-secondary",
                children: ["D\u2019apr\xE8s l\u2019article 5 du d\xE9cret N\xB02016/375 du 04 ao\xFBt 2016 fixant les caract\xE9ristiques et les modalit\xE9s d\u2019\xE9tablissement et de d\xE9livrance de la Carte Nationale d\u2019Identit\xE9, la possession et la d\xE9tention de la Carte Nationale d\u2019Identit\xE9 sont obligatoires pour tout citoyen \xE2g\xE9 de 18 ans r\xE9volus, sur toute l\u2019\xE9tendue du territoire national.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), "Son titulaire est tenu de la pr\xE9senter \xE0 toutes r\xE9quisitions des agents habilit\xE9s. Sa validit\xE9 est de ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
                  className: "text-blue text-700",
                  children: "10 ans"
                }), "."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-md-4 col-xxl-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                  className: "img-fluid",
                  src: _assets_images_CNI_1536x1039_2x_png__WEBPACK_IMPORTED_MODULE_6__.default,
                  alt: "Exemple de CNI"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "container-xxl d-flex align-items-center border-bottom",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-23 text-md-28 text-xxl-33",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                    className: "fad fa-passport"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3",
                children: "Composition du dossier"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "bg-blue pl-3 pl-md-4 pl-xxl-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "d-flex align-items-stretch justify-content-between container-xxl",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white",
                  children: "En cas de premi\xE8re demande"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
                    type: "select",
                    name: "option",
                    style: {
                      maxWidth: 450
                    },
                    className: "h-100 border-0 bg-darkblue text-secondary text-16 text-md-20 text-xxl-25 px-3 px-md-4 px-xxl-5",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                      children: "S\xE9lectionez une option"
                    })
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "p-3 p-md-4 p-xxl-5 bg-soft",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "container-xxl",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "Un certificat de nationalit\xE9 ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "une copie certifi\xE9e conforme d\u2019acte de naissance ou une copie certifi\xE9e conforme d\u2019un extrait d\u2019acte de naissance ou une copie certifi\xE9e conforme d\u2019un jugement suppl\xE9tif d\u2019acte de naissance ou un livret familial sign\xE9 des autorit\xE9s comp\xE9tentes ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "l\u2019ancienne carte nationale d\u2019identit\xE9, le cas \xE9ch\xE9ant ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "une copie d\u2019acte de mariage, pour les femmes mari\xE9es ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "une pi\xE8ce justificative de la profession, s\u2019il y a lieu ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "un certificat de nationalit\xE9 sign\xE9 du Pr\xE9sident du Tribunal de Premi\xE8re Instance."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "d-flex align-items-stretch text-15 text-md-17 text-xxl-20",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "mr-2 mr-md-3 mr-xxl-4 bg-orange rounded-6 px-3 px-md-4 px-xxl-5 py-1 py-md-2 text-300 text-montserrat",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "text-black",
                        children: "Frais"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        className: "text-white",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                          className: "text-700 text-28 text-md-34 text-xxl-40",
                          children: "2800"
                        }), " FCFA"]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center",
                      children: "Commencer"
                    })]
                  })]
                })
              })
            })]
          })]
        })
      }, {
        id: '2',
        name: "Carte de Séjour",
        content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "container-xxl",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "d-flex align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "pr-2 pr-md-3 bg-white",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "px-1 px-md-2 px-xxl-3",
                    children: '2#'
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-blue text-700 text-25 text-md-30 text-xxl-35",
                  children: "Carte de Séjour"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-black text-300 text-16 text-md-20 text-xxl-25",
                  children: "Composition du dossier"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "row mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "col-md-8 col-xxl-9 pt-3 pt-md-4 pt-xxl-5 text-secondary",
                children: ["D\u2019apr\xE8s l\u2019article 32 du d\xE9cret N\xB02016/373 du 04 ao\xFBt 2016 modifiant et compl\xE9tant certaines dispositions du d\xE9cret N\xB02007/255 du 04 septembre 2007 fixant les modalit\xE9s d\u2019application de la loi N\xB097/012 du 10  janvier 1997 relative aux conditions d\u2019entr\xE9e , de s\xE9jour et de sortie des \xE9trangers, la carte de s\xE9jour est un document d\u2019identification d\xE9livr\xE9 \xE0 l\u2019\xE9tranger admis r\xE9guli\xE8rement en s\xE9jour au Cameroun. Sa validit\xE9 est de ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "text-700 text-blue",
                  children: "deux ans"
                }), "."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-md-4 col-xxl-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                  className: "img-fluid",
                  src: _assets_images_SEJOUR_1536x1039_2x_png__WEBPACK_IMPORTED_MODULE_7__.default,
                  alt: "Exemple de Carte de S\xE9jour"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "container-xxl d-flex align-items-center border-bottom",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-23 text-md-28 text-xxl-33",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                    className: "fad fa-passport"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3",
                children: "Composition du dossier"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "bg-blue pl-3 pl-md-4 pl-xxl-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "d-flex align-items-stretch justify-content-center container-xxl",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white",
                  children: "Sa d\xE9livrance est subordonn\xE9e \xE0 la production par l\u2019\xE9tranger des pi\xE8ces suivantes:"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "p-3 p-md-4 p-xxl-5 bg-soft",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "container-xxl",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "Une photocopie certifi\xE9e conforme datant de moins de trois (03) mois du passeport en cours de validit\xE9, rev\xEAtu du visa long s\xE9jour ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "un certificat de domicile, d\xE9livr\xE9 par l\u2019autorit\xE9 administrative ou le Commissaire de Police territorialement comp\xE9tent, rev\xEAtu du visa pr\xE9alable et obligatoire du Chef de quartier ou de village ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "un extrait de Casier Judiciaire Sp\xE9cial ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "un certificat d\u2019imposition ou d\u2019un re\xE7u d\u2019acquittement de l\u2019imp\xF4t lib\xE9ratoire, ou encore d\u2019une photocopie conforme du titre de patente valable pour l\u2019exercice budg\xE9taire en cours ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "une pi\xE8ce justificative de la profession, s\u2019il y a lieu ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "le paiement du droit de timbre fix\xE9 par la loi des finances ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "les justificatifs du s\xE9jour."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "text-15 text-md-17 text-xxl-20",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "text-secondary text-22 text-md-26 text-xxl-30 mb-2 mb-md-3 mb-xxl-4",
                      children: "Frais :"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "row",
                      children: csFeesContent
                    })]
                  })]
                })
              })
            })]
          })]
        })
      }, {
        id: '3',
        name: "Carte de Résident",
        content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "container-xxl",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "d-flex align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "pr-2 pr-md-3 bg-white",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "px-1 px-md-2 px-xxl-3",
                    children: '3#'
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-blue text-700 text-25 text-md-30 text-xxl-35",
                  children: "Carte de Résident"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-black text-300 text-16 text-md-20 text-xxl-25",
                  children: "Composition du dossier"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "row mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-md-8 col-xxl-9 pt-3 pt-md-4 pt-xxl-5 text-secondary",
                children: "D\u2019apr\xE8s les dispositions N\xB02016/373 du 04 ao\xFBt 2016 modifiant et compl\xE9tant certaines dispositions du d\xE9cret N\xB02007/255 du 04 septembre 2007 fixant les modalit\xE9s d\u2019application de la loi N\xB097/012 du 10  janvier 1997 relative aux conditions d\u2019entr\xE9e , de s\xE9jour et de sortie des \xE9trangers, la carte de r\xE9sident est un document d\u2019identification d\xE9livr\xE9e \xE0 l\u2019\xE9tranger admis comme r\xE9sident au Cameroun. Sa validit\xE9 est de 10 ans."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-md-4 col-xxl-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                  className: "img-fluid",
                  src: _assets_images_SEJOUR_1536x1039_2x_png__WEBPACK_IMPORTED_MODULE_7__.default,
                  alt: "Exemple de Carte de R\xE9sident"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "container-xxl d-flex align-items-center border-bottom",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-23 text-md-28 text-xxl-33",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                    className: "fad fa-passport"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3",
                children: "Composition du dossier"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "bg-blue pl-3 pl-md-4 pl-xxl-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "d-flex align-items-stretch justify-content-between container-xxl",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white",
                  children: "Pour l\u2019\xE9tranger en s\xE9jour ou admis comme R\xE9sident :"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
                    type: "select",
                    name: "option",
                    style: {
                      maxWidth: 450
                    },
                    className: "h-100 border-0 bg-darkblue text-secondary text-16 text-md-20 text-xxl-25 px-3 px-md-4 px-xxl-5",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                      children: "S\xE9lectionez une option"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                      children: "Pour les membres des congr\xE9gations religieuses non soumis \xE0 l\u2019imposition"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                      children: "Pour le conjoint d\u2019une personne de nationalit\xE9 camerounaise"
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "p-3 p-md-4 p-xxl-5 bg-soft",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "container-xxl",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "D\u2019une carte de s\xE9jour renouvel\xE9e pour la troisi\xE8me fois ou d\u2019une carte de r\xE9sident, au moins un (01) mois avant l\u2019\xE9ch\xE9ance de sa validit\xE9 ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "d\u2019un certificat de domicile, d\xE9livr\xE9 par l\u2019autorit\xE9 administrative ou le Commissaire de Police territorialement comp\xE9tent, rev\xEAtu du visa pr\xE9alable et obligatoire du Chef de quartier ou de village ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "d\u2019un extrait de Casier Judiciaire Sp\xE9cial  ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "d\u2019une photocopie certifi\xE9e conforme du passeport en cours de validit\xE9 datant de moins de (03) mois, v\xEAtu du visa long s\xE9jour ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "du paiement du droit de timbre fix\xE9 par la loi des finances ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "d\u2019un certificat d\u2019imposition ou d\u2019un re\xE7u d\u2019acquittement de l\u2019imp\xF4t lib\xE9ratoire, ou encore, d\u2019une photocopie conforme du titre de patente valable pour l\u2019exercice budg\xE9taire en cours."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "text-15 text-md-17 text-xxl-20",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "text-secondary text-22 text-md-26 text-xxl-30 mb-2 mb-md-3 mb-xxl-4",
                      children: "Frais :"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "row",
                      children: cresFeesContent
                    })]
                  })]
                })
              })
            })]
          })]
        })
      }, {
        id: '4',
        name: "Carte de Refugié",
        content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "container-xxl",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "d-flex align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "pr-2 pr-md-3 bg-white",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "px-1 px-md-2 px-xxl-3",
                    children: '4#'
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-blue text-700 text-25 text-md-30 text-xxl-35",
                  children: "Carte de Refugié"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-black text-300 text-16 text-md-20 text-xxl-25",
                  children: "Composition du dossier"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "row mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "col-md-8 col-xxl-9 pt-3 pt-md-4 pt-xxl-5 text-secondary",
                children: ["D\u2019apr\xE8s l\u2019article 32 du d\xE9cret N\xB02016/373 du 04 ao\xFBt 2016 modifiant et compl\xE9tant certaines dispositions du d\xE9cret N\xB02007/255 du 04 septembre 2007 fixant les modalit\xE9s d\u2019application de la loi N\xB097/012 du 10  janvier 1997 relative aux conditions d\u2019entr\xE9e , de s\xE9jour et de sortie des \xE9trangers, la carte de s\xE9jour est un document d\u2019identification d\xE9livr\xE9 \xE0 l\u2019\xE9tranger admis r\xE9guli\xE8rement en s\xE9jour au Cameroun. Sa validit\xE9 est de ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "text-700 text-blue",
                  children: "deux ans"
                }), "."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-md-4 col-xxl-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                  className: "img-fluid",
                  src: _assets_images_SEJOUR_1536x1039_2x_png__WEBPACK_IMPORTED_MODULE_7__.default,
                  alt: "Exemple de Carte de S\xE9jour"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "container-xxl d-flex align-items-center border-bottom",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-23 text-md-28 text-xxl-33",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                    className: "fad fa-passport"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3",
                children: "Composition du dossier"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "bg-blue pl-3 pl-md-4 pl-xxl-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "d-flex align-items-stretch justify-content-center container-xxl",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white",
                  children: "La d\xE9livrance de la carte de r\xE9fugi\xE9 est subordonn\xE9e \xE0 la production par l\u2019\xE9tranger, des pi\xE8ces suivantes :"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "p-3 p-md-4 p-xxl-5 bg-soft",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "container-xxl",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "La carte d\u2019identification, d\xE9livr\xE9e par le Haut-Commissariat des Nations Unies pour les r\xE9fugi\xE9s ;"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "une attestation de r\xE9fugi\xE9s d\xE9livr\xE9e par le Ministre des Relations Ext\xE9rieures."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                      children: "Le renouvellement de la carte de r\xE9fugi\xE9 est subordonn\xE9 \xE0 la production, par l\u2019\xE9tranger, des pi\xE8ces suivantes :"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "ml-3 ml-md-4 ml-xxl-5",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "l\u2019ancienne attestation de r\xE9fugi\xE9, un (01) mois au moins avant l\u2019\xE9ch\xE9ance de sa validit\xE9 ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "l\u2019ancienne carte de r\xE9fugi\xE9, un (01) mois au moins avant l\u2019\xE9ch\xE9ance de sa validit\xE9."
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "text-15 text-md-17 text-xxl-20",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "text-secondary text-22 text-md-26 text-xxl-30 mb-2 mb-md-3 mb-xxl-4",
                      children: "Frais :"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "text-16 text-md-17 text-xxl-18 text-blue py-3 py-md-4 py-xxl-5 px-2 px-md-3 px-xxl-4 bg-blue-10 rounded-15 d-inline-block",
                      children: "La d\xE9livrance et le renouvellement de la Carte de R\xE9fugi\xE9 sont exon\xE9r\xE9s de droits de timbre."
                    })]
                  })]
                })
              })
            })]
          })]
        })
      }];
      var navItemsContent = navItems.map(function (navItem) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__.default, {
            className: "py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 " + (activeTab === navItem.id ? "active" : ""),
            onClick: function onClick() {
              _this2.toggle(navItem.id);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "text-truncate text-500 text-14 text-md-17 text-xxl-20",
              children: navItem.name
            })
          })
        }, navItem.id);
      });
      var tabPanesContent = navItems.map(function (navItem) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__.default, {
          tabId: navItem.id,
          children: navItem.content
        }, navItem.id + Math.random());
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "Titles",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Police_Title__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: "Titres identitaires"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Police_Block__WEBPACK_IMPORTED_MODULE_3__.default, {
          color: "transparent",
          title: "Solliciter un titre identitaire",
          subtitle: "Veuillez choisir un titre identitaire afin de poursuivre",
          fluid: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "col-12 bg-soft",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "container-xxl d-flex align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  id: "verification",
                  className: "scrollbar-hidden flex-fill",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
                    tabs: true,
                    className: "border-0 flex-nowrap",
                    children: navItemsContent
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Chevrons__WEBPACK_IMPORTED_MODULE_1__.default, {
                  id: "verification"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_14__.default, {
              className: "col-12 p-0",
              activeTab: activeTab,
              children: tabPanesContent
            })]
          })
        })]
      });
    }
  }]);

  return Titles;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router__WEBPACK_IMPORTED_MODULE_15__.withRouter)(Titles));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Chevrons/Chevrons.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Chevrons/Chevrons.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".scrollbar-hidden {\r\n    scrollbar-width: 0;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow: auto;\r\n}\r\n\r\n.scrollbar-hidden::-webkit-scrollbar {\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.scrollbar-hidden::-webkit-scrollbar-thumb {\r\n    border-radius: 0;\r\n}\r\n\r\n.UI.Chevrons {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.UI.Chevrons i {\r\n    cursor: pointer;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Police/Fees/Fees.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Police/Fees/Fees.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".UI.Fees .block {\r\n    background-color: var(--border-10);\r\n    color: var(--border);\r\n    height: 100%;\r\n    transition: all 0.25s;\r\n}\r\n\r\n.UI.Fees .block:hover {\r\n    background-color: var(--lightblue-10);\r\n    color: var(--blue);\r\n}\r\n\r\n.UI.Fees .block .position-relative {\r\n    background-color: var(--border);\r\n    height: 0.5px;\r\n    transition: all 0.25s;\r\n}\r\n\r\n.UI.Fees .block:hover .position-relative {\r\n    background-color: var(--blue);\r\n}\r\n\r\n.UI.Fees .block .position-absolute {\r\n    background-color: var(--border);\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: 0;\r\n    height: 6px;\r\n    transition: all 0.25s;\r\n}\r\n\r\n.UI.Fees .block:hover .position-absolute {\r\n    background-color: var(--blue);\r\n    width: 52px;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Services/Titles/Titles.css":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Services/Titles/Titles.css ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Frontend .Titles .nav-link {\r\n    color: var(--border);\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    transition: all 0.25s;\r\n}\r\n\r\n.Frontend .Titles .nav-link .icon {\r\n    opacity: 0;\r\n    margin-right: 0;\r\n    width: 0;\r\n    transition: all 0.25s;\r\n}\r\n\r\n.Frontend .Titles .nav-link.active {\r\n    background-color: var(--blue);\r\n    color: white;\r\n}\r\n\r\n.Frontend .Titles .nav-link.active .icon {\r\n    opacity: 1;\r\n    margin-right: 0.5rem;\r\n    width: auto;\r\n}\r\n\r\n@media (min-width: 800px) {\r\n    .Frontend .Titles .nav-link.active .icon {\r\n        margin-right: 1rem;\r\n    }\r\n}\r\n\r\n@media (min-width: 1900px) {\r\n    .Frontend .Titles .nav-link.active .icon {\r\n        margin-right: 2rem;\r\n    }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/images/CNI-1536x1039@2x.png":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/CNI-1536x1039@2x.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/CNI-1536x1039@2x.png?5a685be7ebc8d3ea39a49fce7c71a4a9");

/***/ }),

/***/ "./resources/js/src/assets/images/SEJOUR-1536x1039@2x.png":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/SEJOUR-1536x1039@2x.png ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/SEJOUR-1536x1039@2x.png?48936d17334464d311f41cb8a6e39a35");

/***/ }),

/***/ "./resources/js/src/assets/images/gray-bg.png":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/gray-bg.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/gray-bg.png?9abfdfcebcc36b6ad5c6303b6fc45465");

/***/ }),

/***/ "./resources/js/src/assets/images/white-bg.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/white-bg.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/white-bg.png?401401932722f558a46672bf4b138f2a");

/***/ }),

/***/ "./node_modules/reactstrap/es/NavLink.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/NavLink.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");








var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_7__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)]),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  href: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().any)
};
var defaultProps = {
  tag: 'a'
};

var NavLink = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__.default)(NavLink, _React$Component);

  function NavLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  var _proto = NavLink.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        active = _this$props.active,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_this$props, ["className", "cssModule", "active", "tag", "innerRef"]);

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, 'nav-link', {
      disabled: attributes.disabled,
      active: active
    }), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  };

  return NavLink;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ }),

/***/ "./node_modules/reactstrap/es/TabContent.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/TabContent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabContext */ "./node_modules/reactstrap/es/TabContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");







var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'div'
};

var TabContent = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(TabContent, _Component);

  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  };

  function TabContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag;
    var attributes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.omit)(this.props, Object.keys(propTypes));
    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()('tab-content', className), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_6__.TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
      className: classes
    })));
  };

  return TabContent;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabContent);
TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/reactstrap/es/TabContext.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/TabContext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContext": () => (/* binding */ TabContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

var TabContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ "./node_modules/reactstrap/es/TabPane.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/TabPane.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabPane)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabContext */ "./node_modules/reactstrap/es/TabContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");







var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  tabId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
};
var defaultProps = {
  tag: 'div'
};
function TabPane(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "cssModule", "tabId", "tag"]);

  var getClasses = function getClasses(activeTabId) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()('tab-pane', className, {
      active: tabId === activeTabId
    }), cssModule);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_6__.TabContext.Consumer, null, function (_ref) {
    var activeTabId = _ref.activeTabId;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
      className: getClasses(activeTabId)
    }));
  });
}
TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

/***/ }),

/***/ "./resources/js/src/components/UI/Chevrons/Chevrons.css":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/UI/Chevrons/Chevrons.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Chevrons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Chevrons.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Chevrons/Chevrons.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Chevrons_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Chevrons_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/src/components/UI/Police/Fees/Fees.css":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/UI/Police/Fees/Fees.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Fees_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Fees.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Police/Fees/Fees.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Fees_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Fees_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Services/Titles/Titles.css":
/*!*************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Services/Titles/Titles.css ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Titles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Titles.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Services/Titles/Titles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Titles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Titles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);