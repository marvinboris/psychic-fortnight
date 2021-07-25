(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Frontend_Services_Passport_index_js"],{

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

/***/ "./resources/js/src/containers/Frontend/Services/Passport/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Services/Passport/index.js ***!
  \*************************************************************************/
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
/* harmony import */ var _Passport_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Passport.css */ "./resources/js/src/containers/Frontend/Services/Passport/Passport.css");
/* harmony import */ var _assets_images_green_passport_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/images/green-passport@2x.png */ "./resources/js/src/assets/images/green-passport@2x.png");
/* harmony import */ var _assets_images_red_passport_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/images/red-passport@2x.png */ "./resources/js/src/assets/images/red-passport@2x.png");
/* harmony import */ var _assets_images_brown_passport_2x_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/images/brown-passport@2x.png */ "./resources/js/src/assets/images/brown-passport@2x.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Passport = /*#__PURE__*/function (_Component) {
  _inherits(Passport, _Component);

  var _super = _createSuper(Passport);

  function Passport() {
    var _this;

    _classCallCheck(this, Passport);

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

  _createClass(Passport, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeTab = this.state.activeTab;
      var pdBefsUp = ["Le Président de la République ;", "Le Premier Président de la Cour Suprême", "Les anciens Premiers Ministres", "Le Président du Sénat ;", "Le Président du Conseil Constitutionnel", "Les anciens Ministres des Relations Extérieures", "Le Président de l’Assemblée Nationale ;", "Le Procureur Général près la Cour Suprême", "Les Membres du Bureau du Sénat", "Le Premier Ministre ;", "Les anciens Chefs d’Etat", "Les Membres du Bureau de l’Assemblée Nationale", "Le Président du Conseil Economique et Social", "Les Membres du Gouvernement et assimilés pendant la durée de leurs fonctions", "Les Présidents des Conseils Régionaux"];
      var pdBefsDown = ["Les Membres du Conseil Constitutionnel", "Les responsables non diplomates, en service  au Ministère des Relations Extérieures ayant  au moins rang de Directeur", "Les Camerounais occupant dans les  organisations internationales à caractère  universel et régional, les fonctions de  Secrétaires Généraux, Secrétaires Généraux  Adjoints et Directeurs", "Les responsables en service à la Présidence de la République ayant au moins rang d’Attaché", "Toute autre personnalité agréée par le Président de la République", "Les responsables dans les Services du Premier Ministre ayant au moins rang d’Attaché", "Les Camerounais occupant dans les organisations sous régionales, les fonctions de Secrétaires Généraux et de Secrétaires Généraux Adjoints", "Les Officiers Généraux durant leur période d’activité", "Les Conseillers, Secrétaires et Attachés d’Ambassade relevant de la Chancellerie", "Les fonctionnaires du cadre des Diplomates"];
      var pdOtherBefsUp = ["du Président de la République ;", "Du Président du Conseil Economique et Social", "Des anciens Chefs d’Etat", "Le Président du Sénat ;", "Du Premier Président de la Cour Suprême", "Des Camerounais occupant dans les organisations internationales à caractère universel et régional, les fonctions de Secrétaires Généraux, Secrétaires Généraux Adjoints et Directeurs;", "Le Président de l’Assemblée Nationale ;", "Du Président du Conseil Constitutionnel", "Du Premier Ministre", "Du Procureur Général près la Cour Suprême", "Des Camerounais occupant dans les organisations sous régionales, les fonctions de Secrétaires Généraux et Secrétaires Généraux Adjoints;", "Des fonctionnaires du cadre des Diplomates ;", "des Conseillers, Secrétaires et Attachés d’Ambassade relevant de la Chancellerie."];
      var pdOtherBefsDown = ["De ceux possédant la dignité d’Ambassadeur;", "Des fonctionnaires du cadre des Diplomates."];
      var psBefs = ["les fonctionnaires civils et militaires ou les agents de l’Etat attachés aux Missions Diplomatiques et aux Postes Consulaires Camerounais, ainsi que leurs conjoints et enfants mineurs non émancipés;", "les Conseillers Economiques, Culturels et Financiers auprès des Missions Diplomatiques et leurs Adjoints, ainsi que leurs conjoints et enfants mineurs non émancipés ;", "les Secrétaires Généraux des départements ministériels ;", "les fonctionnaires du cadre des Attachés des Affaires Etrangères ;", "les titulaires d’une mission gouvernementale à l’étranger, conférée par le Président de la République ;", "les Courriers Diplomatiques ;", "les Attachés de Défense et les Attachés de Défense Adjoints ;", "les Conseillers Militaires et les Attachés  Spécialisés Terre, Air, Mer et Gendarmerie ;", "toute autre personnalité agréée par le  Président de la République."];
      var psOtherBefs = ["les fonctionnaires civils et militaires, ainsi que les agents de l’Etat voyageant pour des raisons de service ;", "les parlementaires, à l’exception des membres des bureaux du Sénat et de l’Assemblée Nationale qui ont droit aux passeports diplomatiques ;", "les responsables des établissements et entreprises à caractère public, ainsi que leurs collaborateurs, jusqu’au rang de Chef de Service ;", "les Camerounais occupant dans les organisations internationales à caractère universel et régional, les fonctions de Directeurs-Adjoints jusqu’au rang de Chef de Service, ainsi que leurs conjoints et enfants mineurs non émancipés", "les Camerounais occupant dans les organisations sous régionales, les fonctions de Directeurs jusqu’au rang de Chef de Service, ainsi que leurs conjoints et enfants mineurs non émancipés."];
      var pdBefsUpContent = pdBefsUp.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "col-xl-4 col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
            children: item
          })
        }, item + Math.random());
      });
      var pdBefsDownContent = pdBefsDown.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "col-xl-4 col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
            children: item
          })
        }, item + Math.random());
      });
      var pdOtherBefsUpContent = pdOtherBefsUp.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "col-xl-4 col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
            children: item
          })
        }, item + Math.random());
      });
      var pdOtherBefsDownContent = pdOtherBefsDown.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "col-xl-4 col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
            children: item
          })
        }, item + Math.random());
      });
      var psBefsContent = psBefs.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
            children: item
          })
        }, item + Math.random());
      });
      var psOtherBefsContent = psOtherBefs.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "col-xl-4 col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
            children: item
          })
        }, item + Math.random());
      });
      var navItems = [{
        id: '1',
        name: "Passeport Biométrique Ordinaire",
        color: 'green',
        content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "container-xxl",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "row mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "col-md-8 col-xxl-9 text-secondary",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "pr-2 pr-md-3 bg-white",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "text-darkgreen rounded-8 bg-darkgreen-10 text-40 text-700 p-2 p-md-3 p-xxl-4",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                            className: "px-1 px-md-2 px-xxl-3",
                            children: '1#'
                          })
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "text-darkgreen text-700 text-25 text-md-30 text-xxl-35",
                          children: "Passeport Ordinaire"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "text-darkgreen text-300 text-16 text-md-20 text-xxl-25",
                          children: "Pièces à fournir par type de demande"
                        })]
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "pt-3 pt-md-4 pt-xxl-5",
                    children: ["Le passeport ordinaire est un document de voyage d\xE9livr\xE9 par la D\xE9l\xE9gation G\xE9n\xE9rale \xE0 la S\xFBret\xE9 Nationale (DGSN) disponible pour tous les citoyens camerounais  sur leur demande. Pour proc\xE9der \xE0 une demande de passeport ordinaire, le demandeur doit au pr\xE9alable faire un pr\xE9-enr\xF4lement sur le site Web ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                      className: "text-blue text-500",
                      children: "https://www.passcam.cm"
                    }), ". Une fois le processus de pr\xE9-enr\xF4lement termin\xE9, une fiche d\u2019information est cr\xE9\xE9e. Celle-ci devra \xEAtre utilis\xE9e lors de la proc\xE9dure d\u2019enr\xF4lement dans le centre choisi."]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "col-md-3 col-xxl-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "px-3 px-md-4 px-xxl-5",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                      className: "img-fluid",
                      src: _assets_images_green_passport_2x_png__WEBPACK_IMPORTED_MODULE_5__.default,
                      alt: "Exemple de passeport vert"
                    })
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "container-xxl d-flex align-items-center border-bottom",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-700 text-23 text-md-28 text-xxl-33",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4",
                    children: "01."
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3",
                  children: ["Citoyen r\xE9sidant au Cameroun", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "text-300 text-darkblue ml-2 ml-md-3 ml-xxl-4",
                    children: "(Premi\xE8re Demande)"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "bg-blue pl-3 pl-md-4 pl-xxl-5",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "d-flex align-items-stretch justify-content-between container-xxl",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white",
                    children: "Demandeur mineur de moins de 15 ans"
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
                        children: "Le r\xE9c\xE9piss\xE9 imprim\xE9 durant la phase de pr\xE9-enr\xF4lement ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Une photocopie certifi\xE9e conforme de l\u2019acte de naissance ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Un justificatif de la profession de l\u2019enfant, s\u2019il y a lieu ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Une autorisation parentale de l\u2019un des parents, ou du tuteur l\xE9gal ou d\u2019un d\xE9tenteur d\u2019une procuration d\xFBment l\xE9galis\xE9e ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Une photocopie certifi\xE9e conforme de la CNI de l\u2019un des parents, du tuteur l\xE9gal ou du d\xE9tenteur d\u2019une procuration pouvant agir en lieu et place des parents."
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "text-15 text-md-17 text-xxl-20 d-flex align-items-stretch",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        className: "mr-2 mr-md-3 mr-xxl-4 rounded-6 btn btn-orange text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 py-2 py-md-3 py-xxl-4 d-flex align-items-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                          className: "fad fa-cloud-download text-darkblue mr-2 mr-md-3"
                        }), "T\xE9l\xE9charger le fichier"]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center",
                        children: "Enr\xF4ler"
                      })]
                    })]
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "mt-3 mt-md-4 mt-xxl-5 pt-3 pt-md-4 pt-xxl-5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "container-xxl d-flex align-items-center border-bottom",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-700 text-23 text-md-28 text-xxl-33",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4",
                    children: "02."
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3",
                  children: ["Citoyen r\xE9sidant \xE0 l\u2019\xE9tranger", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "text-300 text-darkblue ml-2 ml-md-3 ml-xxl-4",
                    children: "(Premi\xE8re Demande)"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "bg-blue pl-3 pl-md-4 pl-xxl-5",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "d-flex align-items-stretch justify-content-between container-xxl",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white",
                    children: "Demandeur mineur de moins de 15 ans"
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
                        children: "Demandeur mineur \xE2g\xE9 de 15 \xE0 21 ans :"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                        children: "Demandeurs mineurs \xE9mancip\xE9s"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                        children: "Demandeur \xE2g\xE9 de plus de 21 ans"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                        children: "Femmes mari\xE9es de plus de 21 ans"
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
                        children: "Le r\xE9c\xE9piss\xE9 imprim\xE9 durant la phase de pr\xE9-enr\xF4lement ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Une photocopie certifi\xE9e conforme de l\u2019acte de naissance ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Un justificatif de la profession de l\u2019enfant, s\u2019il y a lieu ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Une autorisation parentale de l\u2019un des parents, ou du tuteur l\xE9gal ou d\u2019un d\xE9tenteur d\u2019une procuration d\xFBment l\xE9galis\xE9e ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Une photocopie certifi\xE9e conforme de la CNI de l\u2019un des parents, du tuteur l\xE9gal ou du d\xE9tenteur d\u2019une procuration pouvant agir en lieu et place des parents."
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "text-15 text-md-17 text-xxl-20 d-flex align-items-stretch",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        className: "mr-2 mr-md-3 mr-xxl-4 rounded-6 btn btn-orange text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 py-2 py-md-3 py-xxl-4 d-flex align-items-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                          className: "fad fa-cloud-download text-darkblue mr-2 mr-md-3"
                        }), "T\xE9l\xE9charger le fichier"]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center",
                        children: "Enr\xF4ler"
                      })]
                    })]
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "container-xxl",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "pr-2 pr-md-3 bg-white",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "text-darkgreen rounded-8 bg-darkgreen-10 text-40 text-700 p-2 p-md-3 p-xxl-4",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "px-1 px-md-2 px-xxl-3",
                          children: '2#'
                        })
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "text-darkgreen text-700 text-25 text-md-30 text-xxl-35",
                        children: "Renouvellement de passeport ordinaire selon les cas"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "text-darkgreen text-300 text-16 text-md-20 text-xxl-25",
                        children: "Pièces à fournir"
                      })]
                    })]
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "bg-blue pl-3 pl-md-4 pl-xxl-5",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "d-flex align-items-stretch justify-content-between container-xxl",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white",
                    children: "D\xE9t\xE9rioration, P\xE9remption, Passeport plein"
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
                        children: "Perte, Vol"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                        children: "Changement de filiation"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                        children: "Changement de nom"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                        children: "Correction"
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
                        children: "Le r\xE9c\xE9piss\xE9 imprim\xE9 durant la phase de pr\xE9-enr\xF4lement ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Une photocopie certifi\xE9e conforme de l\u2019acte de naissance ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Un justificatif de la profession de l\u2019enfant, s\u2019il y a lieu ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Une autorisation parentale de l\u2019un des parents, ou du tuteur l\xE9gal ou d\u2019un d\xE9tenteur d\u2019une procuration d\xFBment l\xE9galis\xE9e ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "Une photocopie certifi\xE9e conforme de la CNI de l\u2019un des parents, du tuteur l\xE9gal ou du d\xE9tenteur d\u2019une procuration pouvant agir en lieu et place des parents."
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "text-15 text-md-17 text-xxl-20 d-flex align-items-stretch",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        className: "mr-2 mr-md-3 mr-xxl-4 rounded-6 btn btn-orange text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 py-2 py-md-3 py-xxl-4 d-flex align-items-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                          className: "fad fa-cloud-download text-darkblue mr-2 mr-md-3"
                        }), "T\xE9l\xE9charger le fichier"]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center",
                        children: "Enr\xF4ler"
                      })]
                    })]
                  })
                })
              })]
            })]
          })]
        })
      }, {
        id: '2',
        name: "Passeport Biométrique Diplomatique",
        color: 'red',
        content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "container-xxl",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "row justify-content-between mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "col-md-8 col-xxl-9 text-secondary",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "pr-2 pr-md-3 bg-white",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                            className: "px-1 px-md-2 px-xxl-3",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                              className: "fad fa-passport"
                            })
                          })
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "text-blue text-700 text-25 text-md-30 text-xxl-35",
                          children: "Passeport Diplomatique"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "text-blue text-300 text-16 text-md-20 text-xxl-25",
                          children: "Composition du dossier"
                        })]
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "pt-3 pt-md-4 pt-xxl-5",
                    children: "Le passeport diplomatique est d\xE9livr\xE9 par le Ministre des Relations Ext\xE9rieures, \xE0 la demande des diplomates de carri\xE8re ou de l\u2019autorit\xE9 comp\xE9tente, le cas \xE9ch\xE9ant"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "col-md-3 col-xxl-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "px-3 px-md-4 px-xxl-5",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                      className: "img-fluid",
                      src: _assets_images_red_passport_2x_png__WEBPACK_IMPORTED_MODULE_6__.default,
                      alt: "Exemple de passeport diplomatique"
                    })
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "p-3 p-md-4 p-xxl-5 bg-soft",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "container-xxl",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "une photocopie certifi\xE9e conforme de l\u2019acte de naissance ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "une photocopie certifi\xE9e conforme de la carte nationale d\u2019identit\xE9 ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "une photocopie de l\u2019acte de nomination ou du d\xE9cret d\u2019int\xE9gration ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "une photocopie certifi\xE9e conforme de l\u2019acte de mariage, le cas \xE9ch\xE9ant ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "une photocopie certifi\xE9e conforme de l\u2019acte de naissance de l\u2019enfant mineur."
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                        className: "text-700",
                        children: "NB :"
                      }), " La d\xE9livrance du passeport diplomatique est gratuite"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "text-15 text-md-17 text-xxl-20 d-flex align-items-stretch",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        className: "mr-2 mr-md-3 mr-xxl-4 rounded-6 btn btn-orange text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 py-2 py-md-3 py-xxl-4 d-flex align-items-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                          className: "fad fa-cloud-download text-darkblue mr-2 mr-md-3"
                        }), "T\xE9l\xE9charger le fichier"]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center",
                        children: "Enr\xF4ler"
                      })]
                    })]
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Police_Block__WEBPACK_IMPORTED_MODULE_3__.default, {
            color: "transparent",
            title: "B\xE9n\xE9ficiaires",
            subtitle: "Le passeport diplomatique est accord\xE9, pour leurs d\xE9placements \xE0 l\u2019\xE9tranger, aux personnalit\xE9s ci-apr\xE8s d\xE9sign\xE9es:",
            fluid: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "p-3 p-md-4 p-xxl-5 bg-soft row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "container-xxl",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5 row",
                      children: pdBefsUpContent
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "row",
                      children: pdBefsDownContent
                    })]
                  })
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Police_Block__WEBPACK_IMPORTED_MODULE_3__.default, {
            color: "transparent",
            title: "Autres B\xE9n\xE9ficiaires",
            subtitle: "Ont \xE9galement droit au passeport diplomatique, les conjoints et enfants mineurs non \xE9mancip\xE9s :",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "container-xxl",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5 row",
                  children: pdOtherBefsUpContent
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "rounded-15 bg-black-10 p-3 p-md-4 p-xxl-5 text-secondary text-500 text-center",
                    children: "Les passeports diplomatiques des personnels rejoignant leur administration d\u2019origine ou admis \xE0 faire valoir leurs droits \xE0 la retraite, ainsi que ceux de leurs conjoints et enfants mineurs, sont restitu\xE9s au Minist\xE8re des Relations Ext\xE9rieures \xE0 l\u2019exception:"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "row",
                  children: pdOtherBefsDownContent
                })]
              })
            })
          })]
        })
      }, {
        id: '3',
        name: "Passport Biométrique De Service",
        color: 'brown',
        content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "container-xxl",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "row justify-content-between mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "col-md-8 col-xxl-9 text-secondary",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "pr-2 pr-md-3 bg-white",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                            className: "px-1 px-md-2 px-xxl-3",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                              className: "fad fa-passport"
                            })
                          })
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "text-blue text-700 text-25 text-md-30 text-xxl-35",
                          children: "Passport de Service"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "text-blue text-300 text-16 text-md-20 text-xxl-25",
                          children: "Composition du dossier"
                        })]
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "pt-3 pt-md-4 pt-xxl-5",
                    children: "Le passeport de service est d\xE9livr\xE9 \xE0 tout ressortissant camerounais qui, n\u2019ayant pas droit \xE0 un passeport diplomatique, est charg\xE9 d\u2019une mission permanente \xE0 l\u2019\xE9tranger, ou est appel\xE9 de par ses fonctions, \xE0 effectuer fr\xE9quemment des missions \xE0 l\u2019\xE9tranger pour le compte du Gouvernement. Il est d\xE9livr\xE9 par le D\xE9l\xE9gu\xE9 G\xE9n\xE9ral \xE0 la S\xFBret\xE9 Nationale, \xE0 la demande de l\u2019autorit\xE9 comp\xE9tente."
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "col-md-3 col-xxl-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "px-3 px-md-4 px-xxl-5",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                      className: "img-fluid",
                      src: _assets_images_brown_passport_2x_png__WEBPACK_IMPORTED_MODULE_7__.default,
                      alt: "Exemple de passeport de service"
                    })
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "p-3 p-md-4 p-xxl-5 bg-soft",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "container-xxl",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "une photocopie certifi\xE9e conforme de l\u2019acte de naissance ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "une photocopie certifi\xE9e conforme de la carte nationale d\u2019identit\xE9 ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "une photocopie de l\u2019ordre de mission ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "une photocopie de l\u2019acte de nomination ou d\u2019affectation ;"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Li, {
                        children: "une photocopie certifi\xE9e conforme de l\u2019acte de mariage pour la femme mari\xE9e."
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                        className: "text-700",
                        children: "NB :"
                      }), " La d\xE9livrance du passeport de service est gratuite"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "text-15 text-md-17 text-xxl-20 d-flex align-items-stretch",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        className: "mr-2 mr-md-3 mr-xxl-4 rounded-6 btn btn-orange text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 py-2 py-md-3 py-xxl-4 d-flex align-items-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                          className: "fad fa-cloud-download text-darkblue mr-2 mr-md-3"
                        }), "T\xE9l\xE9charger le fichier"]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center",
                        children: "Enr\xF4ler"
                      })]
                    })]
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Police_Block__WEBPACK_IMPORTED_MODULE_3__.default, {
            color: "transparent",
            title: "B\xE9n\xE9ficiaires",
            subtitle: "Le passeport diplomatique est accord\xE9, pour leurs d\xE9placements \xE0 l\u2019\xE9tranger, aux personnalit\xE9s ci-apr\xE8s d\xE9sign\xE9es:",
            fluid: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "p-3 p-md-4 p-xxl-5 bg-soft row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "container-xxl",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "row",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "col-xxl-8 col-xl-9 col-lg-10 col-md-11",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "row",
                          children: psBefsContent
                        })
                      })
                    })
                  })
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Police_Block__WEBPACK_IMPORTED_MODULE_3__.default, {
            color: "transparent",
            title: "Autres B\xE9n\xE9ficiaires",
            subtitle: "Ont \xE9galement droit \xE0 un passeport de service, pour leurs d\xE9placements \xE0 l\u2019\xE9tranger, pendant la dur\xE9e de leur mission:",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "container-xxl",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "row",
                  children: psOtherBefsContent
                })
              })
            })
          })]
        })
      }];
      var navItemsContent = navItems.map(function (navItem) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__.default, {
            className: "py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 " + navItem.color + " " + (activeTab === navItem.id ? "active" : ""),
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
        className: "Passport",
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

  return Passport;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router__WEBPACK_IMPORTED_MODULE_15__.withRouter)(Passport));

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Services/Passport/Passport.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Services/Passport/Passport.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Frontend .Passport .nav-link {\r\n    color: var(--border);\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    transition: all 0.25s;\r\n}\r\n\r\n.Frontend .Passport .nav-link .icon {\r\n    opacity: 0;\r\n    margin-right: 0;\r\n    width: 0;\r\n    transition: all 0.25s;\r\n}\r\n\r\n.Frontend .Passport .nav-link.active {\r\n    background-color: var(--blue);\r\n    color: white;\r\n}\r\n\r\n.Frontend .Passport .nav-link.green.active {\r\n    background-color: var(--darkgreen);\r\n}\r\n\r\n.Frontend .Passport .nav-link.red.active {\r\n    background-color: var(--scarlet);\r\n}\r\n\r\n.Frontend .Passport .nav-link.brown.active {\r\n    background-color: var(--brown);\r\n}\r\n\r\n.Frontend .Passport .nav-link.active .icon {\r\n    opacity: 1;\r\n    margin-right: 0.5rem;\r\n    width: auto;\r\n}\r\n\r\n@media (min-width: 800px) {\r\n    .Frontend .Passport .nav-link.active .icon {\r\n        margin-right: 1rem;\r\n    }\r\n}\r\n\r\n@media (min-width: 1900px) {\r\n    .Frontend .Passport .nav-link.active .icon {\r\n        margin-right: 2rem;\r\n    }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/images/brown-passport@2x.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/brown-passport@2x.png ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/brown-passport@2x.png?4663d34135082f3a2dc1488403568059");

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

/***/ "./resources/js/src/assets/images/green-passport@2x.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/green-passport@2x.png ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/green-passport@2x.png?d7d012cc0e76fc21c8211aaa230405ba");

/***/ }),

/***/ "./resources/js/src/assets/images/red-passport@2x.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/red-passport@2x.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/red-passport@2x.png?e09dc8761029be7600b62672cd2213bf");

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

/***/ "./resources/js/src/containers/Frontend/Services/Passport/Passport.css":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Services/Passport/Passport.css ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Passport_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Passport.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Services/Passport/Passport.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Passport_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Passport_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);