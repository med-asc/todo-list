/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/asset/style/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/asset/style/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-blue-l: rgb(23 195 178);\n    --color-white: rgb(254 249 239);\n    --color-yellow: rgb(255 203 119);\n    --color-blue: rgb(34 124 157);\n    --color-red: rgb(254 109 115);\n    --text-blue: rgb(19 68 86);\n    --text-black: rgb(13 12 12);\n    --text-white: rgb(255 255 255);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nlabel, \ninput {\n    display: block;\n}\n\nlabel {\n    margin-bottom: 8px;\n}\n\ntextarea {\n    padding: 8px;\n    font-family: inherit;\n}\n\ninput[type=text],\ninput[type=date] {\n    padding: 8px;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\ninput.lg-check {\n    width : 16px;\n    height : 16px;\n}\n\nbody {\n    background-color: var(--color-white);\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-rows: 60px 1fr;\n}\n\n.header {\n    color: var(--text-white);\n    background-color: var(--color-blue);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 24px;\n    box-shadow: 4px 4px 13px 1px rgb(0 0 0 / 20%);\n}\n\n.nav-start {\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    height: 100%;\n}\n\n.project {\n    list-style: none;\n    display: flex;\n}\n\n.project a {\n    padding: 1.3rem;\n    color: var(--text-white);\n    text-decoration: none;\n    display: block;\n}\n\n.project a:hover {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.project .active {\n    background-color: var(--color-white);\n}\n\n.project .active a {\n    color: var(--text-blue);\n}\n\n.logo {\n    display: flex;\n    gap: 8px;\n}\n\n.user {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.user a {\n    color: var(--text-white);\n    text-decoration: none;\n}\n\n.user img {\n    height: 50px;\n}\n\n.btn {\n    padding: 0.6rem;\n    border: none;\n    cursor: pointer;\n    border-radius: 6px;\n    font-weight: 600;\n    background: var(--color-yellow);\n}\n\n.btn:hover {\n    background-color: rgb(252, 211, 144);\n}\n\n.btn-project {\n    background-color: var(--color-blue-l);\n    color: var(--text-black);\n}\n\n.btn-project:hover {\n    background-color: rgb(33, 218, 200);\n}\n\nmain {\n    margin-top: 24px;\n    display: grid;\n    justify-items: center;\n}\n\n.container {\n    padding: 24px;\n    background-color: var(--text-white);\n    min-width: 650px;\n}\n\n.container h2 {\n    color: var(--color-blue);\n}\n\n.container form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.pageHeader-heading {\n    margin-bottom: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.page-body {\n    margin-top: 24px;\n}\n\n.row-item {\n    cursor: pointer;\n    padding: 8px 0;\n    border-bottom: 1px solid var(--color-blue);\n}\n\n.row-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.row-title {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.row-details {\n    margin-top: 8px;\n    margin-left: 24px;\n    display: flex;\n    gap: 24px;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.row-details > p {\n    white-space: pre-line;\n}\n\n.row-details .btn {\n    flex-shrink: 0;\n}\n\n.priority {\n    padding: 8px;\n    border-radius: 20px;\n    font-size: 0.7rem;\n}\n\n.priority-high {\n    background-color: var(--color-red);\n    color: var(--text-black);\n}\n\n.priority-medium {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.priority-low {\n    background-color: var(--color-blue);\n    color: var(--text-black);\n}\n\n.due-date {\n    font-size: 0.7rem;\n}\n\n.checkbox-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.checkbox-item label {\n    margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/asset/style/style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,+BAA+B;IAC/B,gCAAgC;IAChC,6BAA6B;IAC7B,6BAA6B;IAC7B,0BAA0B;IAC1B,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,yCAAyC;IACzC,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,mCAAmC;IACnC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,6CAA6C;AACjD;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;IAClC,wBAAwB;AAC5B;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;IACnC,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[":root {\n    --color-blue-l: rgb(23 195 178);\n    --color-white: rgb(254 249 239);\n    --color-yellow: rgb(255 203 119);\n    --color-blue: rgb(34 124 157);\n    --color-red: rgb(254 109 115);\n    --text-blue: rgb(19 68 86);\n    --text-black: rgb(13 12 12);\n    --text-white: rgb(255 255 255);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nlabel, \ninput {\n    display: block;\n}\n\nlabel {\n    margin-bottom: 8px;\n}\n\ntextarea {\n    padding: 8px;\n    font-family: inherit;\n}\n\ninput[type=text],\ninput[type=date] {\n    padding: 8px;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\ninput.lg-check {\n    width : 16px;\n    height : 16px;\n}\n\nbody {\n    background-color: var(--color-white);\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-rows: 60px 1fr;\n}\n\n.header {\n    color: var(--text-white);\n    background-color: var(--color-blue);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 24px;\n    box-shadow: 4px 4px 13px 1px rgb(0 0 0 / 20%);\n}\n\n.nav-start {\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    height: 100%;\n}\n\n.project {\n    list-style: none;\n    display: flex;\n}\n\n.project a {\n    padding: 1.3rem;\n    color: var(--text-white);\n    text-decoration: none;\n    display: block;\n}\n\n.project a:hover {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.project .active {\n    background-color: var(--color-white);\n}\n\n.project .active a {\n    color: var(--text-blue);\n}\n\n.logo {\n    display: flex;\n    gap: 8px;\n}\n\n.user {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.user a {\n    color: var(--text-white);\n    text-decoration: none;\n}\n\n.user img {\n    height: 50px;\n}\n\n.btn {\n    padding: 0.6rem;\n    border: none;\n    cursor: pointer;\n    border-radius: 6px;\n    font-weight: 600;\n    background: var(--color-yellow);\n}\n\n.btn:hover {\n    background-color: rgb(252, 211, 144);\n}\n\n.btn-project {\n    background-color: var(--color-blue-l);\n    color: var(--text-black);\n}\n\n.btn-project:hover {\n    background-color: rgb(33, 218, 200);\n}\n\nmain {\n    margin-top: 24px;\n    display: grid;\n    justify-items: center;\n}\n\n.container {\n    padding: 24px;\n    background-color: var(--text-white);\n    min-width: 650px;\n}\n\n.container h2 {\n    color: var(--color-blue);\n}\n\n.container form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.pageHeader-heading {\n    margin-bottom: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.page-body {\n    margin-top: 24px;\n}\n\n.row-item {\n    cursor: pointer;\n    padding: 8px 0;\n    border-bottom: 1px solid var(--color-blue);\n}\n\n.row-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.row-title {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.row-details {\n    margin-top: 8px;\n    margin-left: 24px;\n    display: flex;\n    gap: 24px;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.row-details > p {\n    white-space: pre-line;\n}\n\n.row-details .btn {\n    flex-shrink: 0;\n}\n\n.priority {\n    padding: 8px;\n    border-radius: 20px;\n    font-size: 0.7rem;\n}\n\n.priority-high {\n    background-color: var(--color-red);\n    color: var(--text-black);\n}\n\n.priority-medium {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.priority-low {\n    background-color: var(--color-blue);\n    color: var(--text-black);\n}\n\n.due-date {\n    font-size: 0.7rem;\n}\n\n.checkbox-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.checkbox-item label {\n    margin-bottom: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/asset/style/style.css":
/*!***********************************!*\
  !*** ./src/asset/style/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/asset/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/htmlGen.js":
/*!********************************!*\
  !*** ./src/modules/htmlGen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHtml": () => (/* binding */ createHtml)
/* harmony export */ });
// {
//  type: div
//  class: class1 class2
//  id: id
//  attr: [[property1, value1], [property2, value2]]
//  text: 'teeeext'
// }

function createHtml(arr) {
    let element = document.createElement(arr.type);
    if (arr.class) arr.class.split(' ').forEach((c) => element.classList.add(c));
    if (arr.text) element.textContent = arr.text;
    if (arr.attr) arr.attr.forEach((row) => element.setAttribute(row[0], row[1]));
    return element;
}



/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    list = [];

    constructor(title) {
        this._title = title;
        this._id = idCounter();
    }

    addToList(obj) {
        this.list.push(obj);
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }
    
    get list() {
        return this.list;
    }
}

let id = 0;
function idCounter() {
    ++id
    return id; 
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
    constructor(title, description, date = false, priority = 'low') {
        this._id = idCounter();
        this._title = title;
        this._description = description;
        this._date = date;
        this._priority = priority;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }
}

let id = 0;
function idCounter() {
    ++id
    return id; 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/modules/uiLoad.js":
/*!*******************************!*\
  !*** ./src/modules/uiLoad.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _htmlGen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlGen */ "./src/modules/htmlGen.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");




// Creates elements that are required for the page
const uiLoad = {
    projectList: [],
    init: function() {
        this.cacheDoom();
        this.showNav();
    },
    cacheDoom: function() {
        this.pageHeader = document.querySelector('.nav-start');
        this.pageBody = document.querySelector('#mainContent .container');
    },
    showNav: function() {
        let ul = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'ul', class: 'project'});
        let nav = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'nav'});
        let btn = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'button', class: 'btn btn-project', text: 'Add project'});

        nav.appendChild(ul);
        this.pageHeader.appendChild(nav);
        this.pageHeader.appendChild(btn);

        this.showFormEvent();
    },
    showFormEvent: function() {
        let btn = document.querySelector('.btn-project');
        btn.addEventListener('click', () => {
            this.showForm();
            this.removeActive();
        });
    },
    showForm: function(obj = false) {
        let formText = {}
        if (obj) {
            formText.h2 = `Edit ${obj.title}`;
            formText.label = 'Title';
            formText.input = obj.title;
            formText.btn = 'Update';
        } else {
            formText.h2 = 'Add new Project';
            formText.label = 'Title';
            formText.input = '';
            formText.btn = 'Add';
        }

        this.pageBody.innerHTML = '';
        // Create div header
        let divHead = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'pageHeader-heading'});
        let h2Head = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'h2', text: formText.h2});
        divHead.appendChild(h2Head);
        this.pageBody.appendChild(divHead);

        // form
        let form = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'form', attr: [['action', '']]});
        let formDiv = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div'});
        let label = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'projectTitle']], text: formText.label });
        let input = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'text'], ['name', 'projectTitle'], ['id', 'projectTitle'],['value', formText.input]]});
        let subBtn = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'button', text: formText.btn, class: 'btn', attr: [['id', 'submitProject']]})
        formDiv.appendChild(label);
        formDiv.appendChild(input);
        form.appendChild(formDiv);
        form.appendChild(subBtn);
        this.pageBody.appendChild(form);

        (obj) ? this.submitFormEdit(obj) : this.submitFormNew();
    },
    submitFormNew: function() {
        let subBtn = document.querySelector('#submitProject');
        subBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.create(document.querySelector('#projectTitle').value);
        });
    },
    submitFormEdit: function(obj) {
        let subBtn = document.querySelector('#submitProject');
        subBtn.addEventListener('click', (e) => {
            e.preventDefault();
            obj.title = document.querySelector('#projectTitle').value;
            this.refreshProject();
            this.setActive(obj);
            this.showPage(obj);
        });
    },
    create: function(title) {
        let newProject = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](title);
        this.projectList.push(newProject);
        this.showProject(newProject);
    },
    showProject: function(obj) {
        let navUl = document.querySelector('.project');
        let li = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'li', attr: [['data-id', obj.id]], class: 'nav-item'});
        let a = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'a', attr: [['href', '#']], text: obj.title});
        li.appendChild(a);
        navUl.appendChild(li);

        this.navigationEvent();
    },
    refreshProject: function() {
        let navUl = document.querySelector('.project');
        navUl.innerHTML = '';
        for (let i = 0; i < this.projectList.length; i++) {
            let li = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'li', attr: [['data-id', this.projectList[i].id]], class: 'nav-item'});
            let a = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'a', attr: [['href', '#']], text: this.projectList[i].title});
            li.appendChild(a);
            navUl.appendChild(li);
        }
        
        this.navigationEvent();
    },
    navigationEvent: function() {
        let navItems = document.querySelectorAll('.project li');
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                let obj = this.getProjectByID(link.getAttribute('data-id'));
                this.setActive(obj);
                this.showPage(obj);
            });
        });
    },
    setActive: function(obj) {
        let currentActive = document.querySelector('.active');
        if (currentActive) this.removeActive();

        let target = document.querySelector(`.project li[data-id="${obj.id}"]`);
        target.classList.add('active');
    },
    removeActive: function() {
        let currentActive = document.querySelector('.active');
        currentActive.classList.remove('active');
    },
    getProjectByID(projectId) {
        if (typeof projectId === 'string') projectId = parseInt(projectId);
        let idx = this.projectList.findIndex(project => project.id === projectId);
        return this.projectList[idx];
    },
    getTodoByID(todoId, obj) {
        if (typeof todoId === 'string') todoId = parseInt(todoId);
        let idx = obj.list.findIndex(todo => todo.id === todoId);
        return obj.list[idx];
    },
    showPage: function(obj) {
        this.pageBody.innerHTML = '';
        // Create div header
        let divHead = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'pageHeader-heading'});
        let h2Head = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'h2', text: obj.title});
        let projectEdit = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'button', class: 'btn', text: 'Edit project', attr: [['id', 'editProject']]});
        divHead.appendChild(h2Head);
        divHead.appendChild(projectEdit);
        this.pageBody.appendChild(divHead);

        let btnAdd = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'button', class: 'btn', text: 'Add Todo', attr: [['id', 'addTodo']]});
        this.pageBody.appendChild(btnAdd);

        let divBody = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'page-body'});
        
        obj.list.forEach((item) => {
            let divTodo = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'row-item', attr: [['data-id', item.id]]});
            let divHead = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'row-heading'});
            let divTitle = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'row-title'})
            let check = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'checkbox']], class: 'lg-check'});
            let title = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'p', text: item.title});
            let priority = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'span', text: item.priority, class: `priority priority-${item.priority}`});
            let dueDate = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'span', text: item.date, class: 'due-date'});
            divTitle.appendChild(check);
            divTitle.appendChild(title);
            divTitle.appendChild(priority);
    
            divHead.appendChild(divTitle);
            divHead.appendChild(dueDate);
            divTodo.appendChild(divHead);
            divBody.appendChild(divTodo);
        })
        
        this.pageBody.appendChild(divBody);

        this.pageEvent(obj);

    },
    pageEvent: function(obj){
        let editProject = document.querySelector('#editProject');
        editProject.addEventListener('click', () => {
            this.showForm(obj);
        });
        
        let addTodo = document.querySelector('#addTodo');
        addTodo.addEventListener('click', () => {
            this.showFormTodo();

        });

        let showTodo = document.querySelectorAll('.row-item');
        showTodo.forEach((item) => {
            item.addEventListener('click', () => {
                this.showTodoDetails(item, obj.id);
            });
        });
    },
    showFormTodo: function(obj = false) {
        let formText = {}
        if (obj) {
            formText.h2 = `Edit ${obj.title}`;
            formText.label = 'Title';
            formText.input = obj.title;
            formText.label2 = 'Description';
            formText.desc = obj.description;
            formText.label3 = 'Due date';
            formText.date = obj.date;
            formText.label4 = 'Priority';
            formText.prio = obj.priority;
            formText.btn = 'Update';
        } else {
            formText.h2 = 'Create new Todo';
            formText.label = 'Title';
            formText.input = '';
            formText.label2 = 'Description';
            formText.desc = '';
            formText.label3 = 'Due date';
            formText.date = '';
            formText.label4 = 'Priority';
            formText.prio = '';
            formText.btn = 'Add';
        }

        this.pageBody.innerHTML = '';
        // Create div header
        let divHead = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'pageHeader-heading'});
        let h2Head = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'h2', text: formText.h2});
        divHead.appendChild(h2Head);
        this.pageBody.appendChild(divHead);

        // form
        let form = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'form', attr: [['action', '']]});

        let formDiv = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div'});
        let label = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'todoTitle']], text: formText.label });
        let input = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'text'], ['name', 'todoTitle'], ['id', 'todoTitle'],['value', formText.input]]});

        formDiv.appendChild(label);
        formDiv.appendChild(input);
        form.appendChild(formDiv);
        
        let formDiv2 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div'});
        let label2 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'todoDesc']], text: formText.label2 });
        let input2 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'textarea', text: formText.desc ,attr: [['name', 'desc'], ['id', 'todoDesc'], ['cols', '92'], ['rows', '10']]});
        
        formDiv2.appendChild(label2);
        formDiv2.appendChild(input2);
        form.appendChild(formDiv2);

        let formDiv3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div'});
        let label3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'todoDate']], text: formText.label3 });
        let input3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'date'], ['name', 'todoDate'], ['id', 'todoDate'], ['value', formText.date]]});

        formDiv3.appendChild(label3);
        formDiv3.appendChild(input3);
        form.appendChild(formDiv3);

        let formDiv4 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div'});
        let label4 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'todoPriority']], text: formText.label4});
        formDiv4.appendChild(label4);

        let formDivCheck1 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'checkbox-item'});
        let inputLow = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'radio'], ['id', 'lowPrio'], ['name', 'priority'], ['value', 'low']]});
        let labelLow = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'lowPrio']], text: 'Low priority'});
        if (obj.priority === 'low') inputLow.setAttribute('checked', 'checked');

        formDivCheck1.appendChild(inputLow);
        formDivCheck1.appendChild(labelLow);
        formDiv4.appendChild(formDivCheck1);

        let formDivCheck2 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'checkbox-item'});
        let inputMed = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'radio'], ['id', 'medPrio'], ['name', 'priority'], ['value', 'medium']]});
        let labelMed = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'medPrio']], text: 'Medium priority'});
        if (obj.priority === 'medium') inputMed.setAttribute('checked', 'checked');

        formDivCheck2.appendChild(inputMed);
        formDivCheck2.appendChild(labelMed);
        formDiv4.appendChild(formDivCheck2);

        let formDivCheck3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'checkbox-item'});
        let inputHigh = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'radio'], ['id', 'highPrio'], ['name', 'priority'], ['value', 'high']]});
        let labelHigh = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'highPrio']], text: 'High priority'});
        if (obj.priority === 'high') inputHigh.setAttribute('checked', 'checked');

        formDivCheck3.appendChild(inputHigh);
        formDivCheck3.appendChild(labelHigh);
        formDiv4.appendChild(formDivCheck3);

        form.appendChild(formDiv4);

        let subBtn = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'button', text: formText.btn, class: 'btn', attr: [['id', 'submitTodo']]})
        form.appendChild(subBtn);
        this.pageBody.appendChild(form);

        (obj) ? this.submitTodoFormEdit(obj) : this.submitTodoFormNew();
        
    },
    submitTodoFormNew: function() {
        let subBtn = document.querySelector('#submitTodo');
        subBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let title = document.querySelector('#todoTitle').value;
            let description = document.querySelector('#todoDesc').value;
            let date = document.querySelector('#todoDate').value;
            let priority = document.querySelector('input[name="priority"]:checked').value;

            this.createTodo(title, description, date, priority);
        });
    },
    submitTodoFormEdit: function(obj) {
        let subBtn = document.querySelector('#submitTodo');
        subBtn.addEventListener('click', (e) => {
            e.preventDefault();

            obj.title = document.querySelector('#todoTitle').value;
            obj.description = document.querySelector('#todoDesc').value;
            obj.date = document.querySelector('#todoDate').value;
            obj.priority = document.querySelector('input[name="priority"]:checked').value;

            let projectId = document.querySelector('.active').getAttribute('data-id');
            let projectObj = this.getProjectByID(projectId);
            this.showPage(projectObj);
        });
    },
    createTodo: function(title, description, date, priority) {
        let newTodo = new _todo__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, date, priority);

        let projectId = document.querySelector('.active').getAttribute('data-id');
        let projectObj = this.getProjectByID(projectId);

        projectObj.addToList(newTodo);
        this.showPage(projectObj);
    },
    showTodoDetails: function(item, projectId) {
        let id = item.getAttribute('data-id');
        let projectObj = this.getProjectByID(projectId);
        let todoObj = this.getTodoByID(id, projectObj);

        let divInfo = document.querySelector('.row-details');
        if (divInfo) divInfo.remove();

        let div = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'row-details'});
        let desc = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'p', text: todoObj.description});
        let btn = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'button', text: 'Edit Todo', class: 'btn btn-todo'});
        div.appendChild(desc);
        div.appendChild(btn);
        item.appendChild(div);

        this.editTodoEvent(projectObj, todoObj);
    },
    editTodoEvent: function(project, todo) {
        let btn = document.querySelector('.btn-todo');
        if (btn) {
            btn.addEventListener('click', () => {
                this.showFormTodo(todo);
            });
        }
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiLoad);

/***/ }),

/***/ "./src/asset/img/user.png":
/*!********************************!*\
  !*** ./src/asset/img/user.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70f1daec2afc1220c689.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asset_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/style/style.css */ "./src/asset/style/style.css");
/* harmony import */ var _asset_img_user_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/img/user.png */ "./src/asset/img/user.png");
/* harmony import */ var _modules_uiLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/uiLoad */ "./src/modules/uiLoad.js");




// Add the user avatar image to our existing user-div.
const avatarElement = document.querySelector('.user');
const myIcon = new Image();
myIcon.src = _asset_img_user_png__WEBPACK_IMPORTED_MODULE_1__;
avatarElement.appendChild(myIcon);

// Add html elements to page when load
// - nav    | Nav that holds the projects
// - button | Add new project
_modules_uiLoad__WEBPACK_IMPORTED_MODULE_2__["default"].init();

// Add one new project and set it to active
_modules_uiLoad__WEBPACK_IMPORTED_MODULE_2__["default"].create('First project');
let newProject = _modules_uiLoad__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectByID(1);
_modules_uiLoad__WEBPACK_IMPORTED_MODULE_2__["default"].setActive(newProject);
_modules_uiLoad__WEBPACK_IMPORTED_MODULE_2__["default"].showPage(newProject);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNhO0FBQ1I7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0RBQVU7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNERBQVc7O0FBRVg7QUFDQSw4REFBYTtBQUNiLGlCQUFpQixzRUFBcUI7QUFDdEMsaUVBQWdCO0FBQ2hCLGdFQUFlLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXQvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0L3N0eWxlL3N0eWxlLmNzcz82ODlkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaHRtbEdlbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWlMb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItYmx1ZS1sOiByZ2IoMjMgMTk1IDE3OCk7XFxuICAgIC0tY29sb3Itd2hpdGU6IHJnYigyNTQgMjQ5IDIzOSk7XFxuICAgIC0tY29sb3IteWVsbG93OiByZ2IoMjU1IDIwMyAxMTkpO1xcbiAgICAtLWNvbG9yLWJsdWU6IHJnYigzNCAxMjQgMTU3KTtcXG4gICAgLS1jb2xvci1yZWQ6IHJnYigyNTQgMTA5IDExNSk7XFxuICAgIC0tdGV4dC1ibHVlOiByZ2IoMTkgNjggODYpO1xcbiAgICAtLXRleHQtYmxhY2s6IHJnYigxMyAxMiAxMik7XFxuICAgIC0tdGV4dC13aGl0ZTogcmdiKDI1NSAyNTUgMjU1KTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxubGFiZWwsIFxcbmlucHV0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dC5sZy1jaGVjayB7XFxuICAgIHdpZHRoIDogMTZweDtcXG4gICAgaGVpZ2h0IDogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjRweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxM3B4IDFweCByZ2IoMCAwIDAgLyAyMCUpO1xcbn1cXG5cXG4ubmF2LXN0YXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QgYSB7XFxuICAgIHBhZGRpbmc6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJvamVjdCBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJvamVjdCAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4ucHJvamVjdCAuYWN0aXZlIGEge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibHVlKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnVzZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnVzZXIgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udXNlciBpbWcge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXllbGxvdyk7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMTEsIDE0NCk7XFxufVxcblxcbi5idG4tcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUtbCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLmJ0bi1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAyMTgsIDIwMCk7XFxufVxcblxcbm1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgbWluLXdpZHRoOiA2NTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciBoMiB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG59XFxuXFxuLmNvbnRhaW5lciBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4ucGFnZUhlYWRlci1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGFnZS1ib2R5IHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLnJvdy1pdGVtIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA4cHggMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJsdWUpO1xcbn1cXG5cXG4ucm93LWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3ctdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdy1kZXRhaWxzIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucm93LWRldGFpbHMgPiBwIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbn1cXG5cXG4ucm93LWRldGFpbHMgLmJ0biB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4uY2hlY2tib3gtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtaXRlbSBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldC9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jb2xvci1ibHVlLWw6IHJnYigyMyAxOTUgMTc4KTtcXG4gICAgLS1jb2xvci13aGl0ZTogcmdiKDI1NCAyNDkgMjM5KTtcXG4gICAgLS1jb2xvci15ZWxsb3c6IHJnYigyNTUgMjAzIDExOSk7XFxuICAgIC0tY29sb3ItYmx1ZTogcmdiKDM0IDEyNCAxNTcpO1xcbiAgICAtLWNvbG9yLXJlZDogcmdiKDI1NCAxMDkgMTE1KTtcXG4gICAgLS10ZXh0LWJsdWU6IHJnYigxOSA2OCA4Nik7XFxuICAgIC0tdGV4dC1ibGFjazogcmdiKDEzIDEyIDEyKTtcXG4gICAgLS10ZXh0LXdoaXRlOiByZ2IoMjU1IDI1NSAyNTUpO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5sYWJlbCwgXFxuaW5wdXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxubGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0LmxnLWNoZWNrIHtcXG4gICAgd2lkdGggOiAxNnB4O1xcbiAgICBoZWlnaHQgOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDEzcHggMXB4IHJnYigwIDAgMCAvIDIwJSk7XFxufVxcblxcbi5uYXYtc3RhcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdCBhIHtcXG4gICAgcGFkZGluZzogMS4zcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wcm9qZWN0IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5wcm9qZWN0IC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5wcm9qZWN0IC5hY3RpdmUgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4udXNlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udXNlciBhIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi51c2VyIGltZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IteWVsbG93KTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIxMSwgMTQ0KTtcXG59XFxuXFxuLmJ0bi1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZS1sKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4uYnRuLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDIxOCwgMjAwKTtcXG59XFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICBtaW4td2lkdGg6IDY1MHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIGgyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbn1cXG5cXG4uY29udGFpbmVyIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi5wYWdlSGVhZGVyLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wYWdlLWJvZHkge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4ucm93LWl0ZW0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDhweCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi5yb3ctaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdy10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93LWRldGFpbHMge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yb3ctZGV0YWlscyA+IHAge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxufVxcblxcbi5yb3ctZGV0YWlscyAuYnRuIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5jaGVja2JveC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1pdGVtIGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyB7XG4vLyAgdHlwZTogZGl2XG4vLyAgY2xhc3M6IGNsYXNzMSBjbGFzczJcbi8vICBpZDogaWRcbi8vICBhdHRyOiBbW3Byb3BlcnR5MSwgdmFsdWUxXSwgW3Byb3BlcnR5MiwgdmFsdWUyXV1cbi8vICB0ZXh0OiAndGVlZWV4dCdcbi8vIH1cblxuZnVuY3Rpb24gY3JlYXRlSHRtbChhcnIpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJyLnR5cGUpO1xuICAgIGlmIChhcnIuY2xhc3MpIGFyci5jbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGMpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgaWYgKGFyci50ZXh0KSBlbGVtZW50LnRleHRDb250ZW50ID0gYXJyLnRleHQ7XG4gICAgaWYgKGFyci5hdHRyKSBhcnIuYXR0ci5mb3JFYWNoKChyb3cpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKHJvd1swXSwgcm93WzFdKSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlSHRtbFxufSIsImNsYXNzIFByb2plY3Qge1xuICAgIGxpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2lkID0gaWRDb3VudGVyKCk7XG4gICAgfVxuXG4gICAgYWRkVG9MaXN0KG9iaikge1xuICAgICAgICB0aGlzLmxpc3QucHVzaChvYmopO1xuICAgIH1cblxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdDtcbiAgICB9XG59XG5cbmxldCBpZCA9IDA7XG5mdW5jdGlvbiBpZENvdW50ZXIoKSB7XG4gICAgKytpZFxuICAgIHJldHVybiBpZDsgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUgPSBmYWxzZSwgcHJpb3JpdHkgPSAnbG93Jykge1xuICAgICAgICB0aGlzLl9pZCA9IGlkQ291bnRlcigpO1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGU7XG4gICAgfVxuXG4gICAgc2V0IGRhdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICAgIH1cbn1cblxubGV0IGlkID0gMDtcbmZ1bmN0aW9uIGlkQ291bnRlcigpIHtcbiAgICArK2lkXG4gICAgcmV0dXJuIGlkOyBcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiLCJpbXBvcnQgeyBjcmVhdGVIdG1sIH0gZnJvbSBcIi4vaHRtbEdlblwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG4vLyBDcmVhdGVzIGVsZW1lbnRzIHRoYXQgYXJlIHJlcXVpcmVkIGZvciB0aGUgcGFnZVxuY29uc3QgdWlMb2FkID0ge1xuICAgIHByb2plY3RMaXN0OiBbXSxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jYWNoZURvb20oKTtcbiAgICAgICAgdGhpcy5zaG93TmF2KCk7XG4gICAgfSxcbiAgICBjYWNoZURvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBhZ2VIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXN0YXJ0Jyk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbkNvbnRlbnQgLmNvbnRhaW5lcicpO1xuICAgIH0sXG4gICAgc2hvd05hdjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB1bCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICd1bCcsIGNsYXNzOiAncHJvamVjdCd9KTtcbiAgICAgICAgbGV0IG5hdiA9IGNyZWF0ZUh0bWwoe3R5cGU6ICduYXYnfSk7XG4gICAgICAgIGxldCBidG4gPSBjcmVhdGVIdG1sKHt0eXBlOiAnYnV0dG9uJywgY2xhc3M6ICdidG4gYnRuLXByb2plY3QnLCB0ZXh0OiAnQWRkIHByb2plY3QnfSk7XG5cbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgdGhpcy5wYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgICAgIHRoaXMucGFnZUhlYWRlci5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgICAgIHRoaXMuc2hvd0Zvcm1FdmVudCgpO1xuICAgIH0sXG4gICAgc2hvd0Zvcm1FdmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXByb2plY3QnKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93Rm9ybSgpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBY3RpdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzaG93Rm9ybTogZnVuY3Rpb24ob2JqID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGZvcm1UZXh0ID0ge31cbiAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgZm9ybVRleHQuaDIgPSBgRWRpdCAke29iai50aXRsZX1gO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWwgPSAnVGl0bGUnO1xuICAgICAgICAgICAgZm9ybVRleHQuaW5wdXQgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICBmb3JtVGV4dC5idG4gPSAnVXBkYXRlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1UZXh0LmgyID0gJ0FkZCBuZXcgUHJvamVjdCc7XG4gICAgICAgICAgICBmb3JtVGV4dC5sYWJlbCA9ICdUaXRsZSc7XG4gICAgICAgICAgICBmb3JtVGV4dC5pbnB1dCA9ICcnO1xuICAgICAgICAgICAgZm9ybVRleHQuYnRuID0gJ0FkZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhZ2VCb2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAvLyBDcmVhdGUgZGl2IGhlYWRlclxuICAgICAgICBsZXQgZGl2SGVhZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ3BhZ2VIZWFkZXItaGVhZGluZyd9KTtcbiAgICAgICAgbGV0IGgySGVhZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdoMicsIHRleHQ6IGZvcm1UZXh0LmgyfSk7XG4gICAgICAgIGRpdkhlYWQuYXBwZW5kQ2hpbGQoaDJIZWFkKTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChkaXZIZWFkKTtcblxuICAgICAgICAvLyBmb3JtXG4gICAgICAgIGxldCBmb3JtID0gY3JlYXRlSHRtbCh7dHlwZTogJ2Zvcm0nLCBhdHRyOiBbWydhY3Rpb24nLCAnJ11dfSk7XG4gICAgICAgIGxldCBmb3JtRGl2ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2Rpdid9KTtcbiAgICAgICAgbGV0IGxhYmVsID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3Byb2plY3RUaXRsZSddXSwgdGV4dDogZm9ybVRleHQubGFiZWwgfSk7XG4gICAgICAgIGxldCBpbnB1dCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAndGV4dCddLCBbJ25hbWUnLCAncHJvamVjdFRpdGxlJ10sIFsnaWQnLCAncHJvamVjdFRpdGxlJ10sWyd2YWx1ZScsIGZvcm1UZXh0LmlucHV0XV19KTtcbiAgICAgICAgbGV0IHN1YkJ0biA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdidXR0b24nLCB0ZXh0OiBmb3JtVGV4dC5idG4sIGNsYXNzOiAnYnRuJywgYXR0cjogW1snaWQnLCAnc3VibWl0UHJvamVjdCddXX0pXG4gICAgICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJCdG4pO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIChvYmopID8gdGhpcy5zdWJtaXRGb3JtRWRpdChvYmopIDogdGhpcy5zdWJtaXRGb3JtTmV3KCk7XG4gICAgfSxcbiAgICBzdWJtaXRGb3JtTmV3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Jyk7XG4gICAgICAgIHN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJykudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHN1Ym1pdEZvcm1FZGl0OiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgbGV0IHN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Jyk7XG4gICAgICAgIHN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvYmoudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJykudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hQcm9qZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShvYmopO1xuICAgICAgICAgICAgdGhpcy5zaG93UGFnZShvYmopO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24odGl0bGUpIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgdGhpcy5zaG93UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICB9LFxuICAgIHNob3dQcm9qZWN0OiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgbGV0IG5hdlVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgICAgICAgbGV0IGxpID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xpJywgYXR0cjogW1snZGF0YS1pZCcsIG9iai5pZF1dLCBjbGFzczogJ25hdi1pdGVtJ30pO1xuICAgICAgICBsZXQgYSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdhJywgYXR0cjogW1snaHJlZicsICcjJ11dLCB0ZXh0OiBvYmoudGl0bGV9KTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgIG5hdlVsLmFwcGVuZENoaWxkKGxpKTtcblxuICAgICAgICB0aGlzLm5hdmlnYXRpb25FdmVudCgpO1xuICAgIH0sXG4gICAgcmVmcmVzaFByb2plY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbmF2VWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgICAgICBuYXZVbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGkgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGknLCBhdHRyOiBbWydkYXRhLWlkJywgdGhpcy5wcm9qZWN0TGlzdFtpXS5pZF1dLCBjbGFzczogJ25hdi1pdGVtJ30pO1xuICAgICAgICAgICAgbGV0IGEgPSBjcmVhdGVIdG1sKHt0eXBlOiAnYScsIGF0dHI6IFtbJ2hyZWYnLCAnIyddXSwgdGV4dDogdGhpcy5wcm9qZWN0TGlzdFtpXS50aXRsZX0pO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgICBuYXZVbC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkV2ZW50KCk7XG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCBsaScpO1xuICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gdGhpcy5nZXRQcm9qZWN0QnlJRChsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShvYmopO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2Uob2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNldEFjdGl2ZTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGxldCBjdXJyZW50QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICBpZiAoY3VycmVudEFjdGl2ZSkgdGhpcy5yZW1vdmVBY3RpdmUoKTtcblxuICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QgbGlbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXWApO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSxcbiAgICByZW1vdmVBY3RpdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY3VycmVudEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgY3VycmVudEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9LFxuICAgIGdldFByb2plY3RCeUlEKHByb2plY3RJZCkge1xuICAgICAgICBpZiAodHlwZW9mIHByb2plY3RJZCA9PT0gJ3N0cmluZycpIHByb2plY3RJZCA9IHBhcnNlSW50KHByb2plY3RJZCk7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLnByb2plY3RMaXN0LmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RMaXN0W2lkeF07XG4gICAgfSxcbiAgICBnZXRUb2RvQnlJRCh0b2RvSWQsIG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIHRvZG9JZCA9PT0gJ3N0cmluZycpIHRvZG9JZCA9IHBhcnNlSW50KHRvZG9JZCk7XG4gICAgICAgIGxldCBpZHggPSBvYmoubGlzdC5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICByZXR1cm4gb2JqLmxpc3RbaWR4XTtcbiAgICB9LFxuICAgIHNob3dQYWdlOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gQ3JlYXRlIGRpdiBoZWFkZXJcbiAgICAgICAgbGV0IGRpdkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdwYWdlSGVhZGVyLWhlYWRpbmcnfSk7XG4gICAgICAgIGxldCBoMkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaDInLCB0ZXh0OiBvYmoudGl0bGV9KTtcbiAgICAgICAgbGV0IHByb2plY3RFZGl0ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2J1dHRvbicsIGNsYXNzOiAnYnRuJywgdGV4dDogJ0VkaXQgcHJvamVjdCcsIGF0dHI6IFtbJ2lkJywgJ2VkaXRQcm9qZWN0J11dfSk7XG4gICAgICAgIGRpdkhlYWQuYXBwZW5kQ2hpbGQoaDJIZWFkKTtcbiAgICAgICAgZGl2SGVhZC5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdCk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQoZGl2SGVhZCk7XG5cbiAgICAgICAgbGV0IGJ0bkFkZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdidXR0b24nLCBjbGFzczogJ2J0bicsIHRleHQ6ICdBZGQgVG9kbycsIGF0dHI6IFtbJ2lkJywgJ2FkZFRvZG8nXV19KTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChidG5BZGQpO1xuXG4gICAgICAgIGxldCBkaXZCb2R5ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncGFnZS1ib2R5J30pO1xuICAgICAgICBcbiAgICAgICAgb2JqLmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpdlRvZG8gPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdyb3ctaXRlbScsIGF0dHI6IFtbJ2RhdGEtaWQnLCBpdGVtLmlkXV19KTtcbiAgICAgICAgICAgIGxldCBkaXZIZWFkID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncm93LWhlYWRpbmcnfSk7XG4gICAgICAgICAgICBsZXQgZGl2VGl0bGUgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdyb3ctdGl0bGUnfSlcbiAgICAgICAgICAgIGxldCBjaGVjayA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAnY2hlY2tib3gnXV0sIGNsYXNzOiAnbGctY2hlY2snfSk7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBjcmVhdGVIdG1sKHt0eXBlOiAncCcsIHRleHQ6IGl0ZW0udGl0bGV9KTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdzcGFuJywgdGV4dDogaXRlbS5wcmlvcml0eSwgY2xhc3M6IGBwcmlvcml0eSBwcmlvcml0eS0ke2l0ZW0ucHJpb3JpdHl9YH0pO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBjcmVhdGVIdG1sKHt0eXBlOiAnc3BhbicsIHRleHQ6IGl0ZW0uZGF0ZSwgY2xhc3M6ICdkdWUtZGF0ZSd9KTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBcbiAgICAgICAgICAgIGRpdkhlYWQuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgICAgICAgZGl2SGVhZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgIGRpdlRvZG8uYXBwZW5kQ2hpbGQoZGl2SGVhZCk7XG4gICAgICAgICAgICBkaXZCb2R5LmFwcGVuZENoaWxkKGRpdlRvZG8pO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChkaXZCb2R5KTtcblxuICAgICAgICB0aGlzLnBhZ2VFdmVudChvYmopO1xuXG4gICAgfSxcbiAgICBwYWdlRXZlbnQ6IGZ1bmN0aW9uKG9iail7XG4gICAgICAgIGxldCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0UHJvamVjdCcpO1xuICAgICAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Zvcm0ob2JqKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvJyk7XG4gICAgICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dGb3JtVG9kbygpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzaG93VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3ctaXRlbScpO1xuICAgICAgICBzaG93VG9kby5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvZG9EZXRhaWxzKGl0ZW0sIG9iai5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzaG93Rm9ybVRvZG86IGZ1bmN0aW9uKG9iaiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBmb3JtVGV4dCA9IHt9XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIGZvcm1UZXh0LmgyID0gYEVkaXQgJHtvYmoudGl0bGV9YDtcbiAgICAgICAgICAgIGZvcm1UZXh0LmxhYmVsID0gJ1RpdGxlJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmlucHV0ID0gb2JqLnRpdGxlO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWwyID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmRlc2MgPSBvYmouZGVzY3JpcHRpb247XG4gICAgICAgICAgICBmb3JtVGV4dC5sYWJlbDMgPSAnRHVlIGRhdGUnO1xuICAgICAgICAgICAgZm9ybVRleHQuZGF0ZSA9IG9iai5kYXRlO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWw0ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgICAgIGZvcm1UZXh0LnByaW8gPSBvYmoucHJpb3JpdHk7XG4gICAgICAgICAgICBmb3JtVGV4dC5idG4gPSAnVXBkYXRlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1UZXh0LmgyID0gJ0NyZWF0ZSBuZXcgVG9kbyc7XG4gICAgICAgICAgICBmb3JtVGV4dC5sYWJlbCA9ICdUaXRsZSc7XG4gICAgICAgICAgICBmb3JtVGV4dC5pbnB1dCA9ICcnO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWwyID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmRlc2MgPSAnJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmxhYmVsMyA9ICdEdWUgZGF0ZSc7XG4gICAgICAgICAgICBmb3JtVGV4dC5kYXRlID0gJyc7XG4gICAgICAgICAgICBmb3JtVGV4dC5sYWJlbDQgPSAnUHJpb3JpdHknO1xuICAgICAgICAgICAgZm9ybVRleHQucHJpbyA9ICcnO1xuICAgICAgICAgICAgZm9ybVRleHQuYnRuID0gJ0FkZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhZ2VCb2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAvLyBDcmVhdGUgZGl2IGhlYWRlclxuICAgICAgICBsZXQgZGl2SGVhZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ3BhZ2VIZWFkZXItaGVhZGluZyd9KTtcbiAgICAgICAgbGV0IGgySGVhZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdoMicsIHRleHQ6IGZvcm1UZXh0LmgyfSk7XG4gICAgICAgIGRpdkhlYWQuYXBwZW5kQ2hpbGQoaDJIZWFkKTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChkaXZIZWFkKTtcblxuICAgICAgICAvLyBmb3JtXG4gICAgICAgIGxldCBmb3JtID0gY3JlYXRlSHRtbCh7dHlwZTogJ2Zvcm0nLCBhdHRyOiBbWydhY3Rpb24nLCAnJ11dfSk7XG5cbiAgICAgICAgbGV0IGZvcm1EaXYgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2J30pO1xuICAgICAgICBsZXQgbGFiZWwgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAndG9kb1RpdGxlJ11dLCB0ZXh0OiBmb3JtVGV4dC5sYWJlbCB9KTtcbiAgICAgICAgbGV0IGlucHV0ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2lucHV0JywgYXR0cjogW1sndHlwZScsICd0ZXh0J10sIFsnbmFtZScsICd0b2RvVGl0bGUnXSwgWydpZCcsICd0b2RvVGl0bGUnXSxbJ3ZhbHVlJywgZm9ybVRleHQuaW5wdXRdXX0pO1xuXG4gICAgICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgICAgICAgXG4gICAgICAgIGxldCBmb3JtRGl2MiA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnfSk7XG4gICAgICAgIGxldCBsYWJlbDIgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAndG9kb0Rlc2MnXV0sIHRleHQ6IGZvcm1UZXh0LmxhYmVsMiB9KTtcbiAgICAgICAgbGV0IGlucHV0MiA9IGNyZWF0ZUh0bWwoe3R5cGU6ICd0ZXh0YXJlYScsIHRleHQ6IGZvcm1UZXh0LmRlc2MgLGF0dHI6IFtbJ25hbWUnLCAnZGVzYyddLCBbJ2lkJywgJ3RvZG9EZXNjJ10sIFsnY29scycsICc5MiddLCBbJ3Jvd3MnLCAnMTAnXV19KTtcbiAgICAgICAgXG4gICAgICAgIGZvcm1EaXYyLmFwcGVuZENoaWxkKGxhYmVsMik7XG4gICAgICAgIGZvcm1EaXYyLmFwcGVuZENoaWxkKGlucHV0Mik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdjIpO1xuXG4gICAgICAgIGxldCBmb3JtRGl2MyA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnfSk7XG4gICAgICAgIGxldCBsYWJlbDMgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAndG9kb0RhdGUnXV0sIHRleHQ6IGZvcm1UZXh0LmxhYmVsMyB9KTtcbiAgICAgICAgbGV0IGlucHV0MyA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAnZGF0ZSddLCBbJ25hbWUnLCAndG9kb0RhdGUnXSwgWydpZCcsICd0b2RvRGF0ZSddLCBbJ3ZhbHVlJywgZm9ybVRleHQuZGF0ZV1dfSk7XG5cbiAgICAgICAgZm9ybURpdjMuYXBwZW5kQ2hpbGQobGFiZWwzKTtcbiAgICAgICAgZm9ybURpdjMuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2Myk7XG5cbiAgICAgICAgbGV0IGZvcm1EaXY0ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2Rpdid9KTtcbiAgICAgICAgbGV0IGxhYmVsNCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdsYWJlbCcsIGF0dHI6IFtbJ2ZvcicsICd0b2RvUHJpb3JpdHknXV0sIHRleHQ6IGZvcm1UZXh0LmxhYmVsNH0pO1xuICAgICAgICBmb3JtRGl2NC5hcHBlbmRDaGlsZChsYWJlbDQpO1xuXG4gICAgICAgIGxldCBmb3JtRGl2Q2hlY2sxID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAnY2hlY2tib3gtaXRlbSd9KTtcbiAgICAgICAgbGV0IGlucHV0TG93ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2lucHV0JywgYXR0cjogW1sndHlwZScsICdyYWRpbyddLCBbJ2lkJywgJ2xvd1ByaW8nXSwgWyduYW1lJywgJ3ByaW9yaXR5J10sIFsndmFsdWUnLCAnbG93J11dfSk7XG4gICAgICAgIGxldCBsYWJlbExvdyA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdsYWJlbCcsIGF0dHI6IFtbJ2ZvcicsICdsb3dQcmlvJ11dLCB0ZXh0OiAnTG93IHByaW9yaXR5J30pO1xuICAgICAgICBpZiAob2JqLnByaW9yaXR5ID09PSAnbG93JykgaW5wdXRMb3cuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcblxuICAgICAgICBmb3JtRGl2Q2hlY2sxLmFwcGVuZENoaWxkKGlucHV0TG93KTtcbiAgICAgICAgZm9ybURpdkNoZWNrMS5hcHBlbmRDaGlsZChsYWJlbExvdyk7XG4gICAgICAgIGZvcm1EaXY0LmFwcGVuZENoaWxkKGZvcm1EaXZDaGVjazEpO1xuXG4gICAgICAgIGxldCBmb3JtRGl2Q2hlY2syID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAnY2hlY2tib3gtaXRlbSd9KTtcbiAgICAgICAgbGV0IGlucHV0TWVkID0gY3JlYXRlSHRtbCh7dHlwZTogJ2lucHV0JywgYXR0cjogW1sndHlwZScsICdyYWRpbyddLCBbJ2lkJywgJ21lZFByaW8nXSwgWyduYW1lJywgJ3ByaW9yaXR5J10sIFsndmFsdWUnLCAnbWVkaXVtJ11dfSk7XG4gICAgICAgIGxldCBsYWJlbE1lZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdsYWJlbCcsIGF0dHI6IFtbJ2ZvcicsICdtZWRQcmlvJ11dLCB0ZXh0OiAnTWVkaXVtIHByaW9yaXR5J30pO1xuICAgICAgICBpZiAob2JqLnByaW9yaXR5ID09PSAnbWVkaXVtJykgaW5wdXRNZWQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcblxuICAgICAgICBmb3JtRGl2Q2hlY2syLmFwcGVuZENoaWxkKGlucHV0TWVkKTtcbiAgICAgICAgZm9ybURpdkNoZWNrMi5hcHBlbmRDaGlsZChsYWJlbE1lZCk7XG4gICAgICAgIGZvcm1EaXY0LmFwcGVuZENoaWxkKGZvcm1EaXZDaGVjazIpO1xuXG4gICAgICAgIGxldCBmb3JtRGl2Q2hlY2szID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAnY2hlY2tib3gtaXRlbSd9KTtcbiAgICAgICAgbGV0IGlucHV0SGlnaCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAncmFkaW8nXSwgWydpZCcsICdoaWdoUHJpbyddLCBbJ25hbWUnLCAncHJpb3JpdHknXSwgWyd2YWx1ZScsICdoaWdoJ11dfSk7XG4gICAgICAgIGxldCBsYWJlbEhpZ2ggPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAnaGlnaFByaW8nXV0sIHRleHQ6ICdIaWdoIHByaW9yaXR5J30pO1xuICAgICAgICBpZiAob2JqLnByaW9yaXR5ID09PSAnaGlnaCcpIGlucHV0SGlnaC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuXG4gICAgICAgIGZvcm1EaXZDaGVjazMuYXBwZW5kQ2hpbGQoaW5wdXRIaWdoKTtcbiAgICAgICAgZm9ybURpdkNoZWNrMy5hcHBlbmRDaGlsZChsYWJlbEhpZ2gpO1xuICAgICAgICBmb3JtRGl2NC5hcHBlbmRDaGlsZChmb3JtRGl2Q2hlY2szKTtcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1EaXY0KTtcblxuICAgICAgICBsZXQgc3ViQnRuID0gY3JlYXRlSHRtbCh7dHlwZTogJ2J1dHRvbicsIHRleHQ6IGZvcm1UZXh0LmJ0biwgY2xhc3M6ICdidG4nLCBhdHRyOiBbWydpZCcsICdzdWJtaXRUb2RvJ11dfSlcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJCdG4pO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIChvYmopID8gdGhpcy5zdWJtaXRUb2RvRm9ybUVkaXQob2JqKSA6IHRoaXMuc3VibWl0VG9kb0Zvcm1OZXcoKTtcbiAgICAgICAgXG4gICAgfSxcbiAgICBzdWJtaXRUb2RvRm9ybU5ldzogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0VG9kbycpO1xuICAgICAgICBzdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1RpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0Rlc2MnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9EYXRlJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc3VibWl0VG9kb0Zvcm1FZGl0OiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgbGV0IHN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRUb2RvJyk7XG4gICAgICAgIHN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG9iai50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvVGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIG9iai5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvRGVzYycpLnZhbHVlO1xuICAgICAgICAgICAgb2JqLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0RhdGUnKS52YWx1ZTtcbiAgICAgICAgICAgIG9iai5wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdE9iaiA9IHRoaXMuZ2V0UHJvamVjdEJ5SUQocHJvamVjdElkKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UocHJvamVjdE9iaik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY3JlYXRlVG9kbzogZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGxldCBwcm9qZWN0T2JqID0gdGhpcy5nZXRQcm9qZWN0QnlJRChwcm9qZWN0SWQpO1xuXG4gICAgICAgIHByb2plY3RPYmouYWRkVG9MaXN0KG5ld1RvZG8pO1xuICAgICAgICB0aGlzLnNob3dQYWdlKHByb2plY3RPYmopO1xuICAgIH0sXG4gICAgc2hvd1RvZG9EZXRhaWxzOiBmdW5jdGlvbihpdGVtLCBwcm9qZWN0SWQpIHtcbiAgICAgICAgbGV0IGlkID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgbGV0IHByb2plY3RPYmogPSB0aGlzLmdldFByb2plY3RCeUlEKHByb2plY3RJZCk7XG4gICAgICAgIGxldCB0b2RvT2JqID0gdGhpcy5nZXRUb2RvQnlJRChpZCwgcHJvamVjdE9iaik7XG5cbiAgICAgICAgbGV0IGRpdkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm93LWRldGFpbHMnKTtcbiAgICAgICAgaWYgKGRpdkluZm8pIGRpdkluZm8ucmVtb3ZlKCk7XG5cbiAgICAgICAgbGV0IGRpdiA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ3Jvdy1kZXRhaWxzJ30pO1xuICAgICAgICBsZXQgZGVzYyA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdwJywgdGV4dDogdG9kb09iai5kZXNjcmlwdGlvbn0pO1xuICAgICAgICBsZXQgYnRuID0gY3JlYXRlSHRtbCh7dHlwZTogJ2J1dHRvbicsIHRleHQ6ICdFZGl0IFRvZG8nLCBjbGFzczogJ2J0biBidG4tdG9kbyd9KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIHRoaXMuZWRpdFRvZG9FdmVudChwcm9qZWN0T2JqLCB0b2RvT2JqKTtcbiAgICB9LFxuICAgIGVkaXRUb2RvRXZlbnQ6IGZ1bmN0aW9uKHByb2plY3QsIHRvZG8pIHtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdG9kbycpO1xuICAgICAgICBpZiAoYnRuKSB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Rm9ybVRvZG8odG9kbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB1aUxvYWQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hc3NldC9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IFVzZXJBdmF0YXIgZnJvbSAnLi9hc3NldC9pbWcvdXNlci5wbmcnO1xuaW1wb3J0IHVpTG9hZCBmcm9tICcuL21vZHVsZXMvdWlMb2FkJztcblxuLy8gQWRkIHRoZSB1c2VyIGF2YXRhciBpbWFnZSB0byBvdXIgZXhpc3RpbmcgdXNlci1kaXYuXG5jb25zdCBhdmF0YXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKTtcbmNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xubXlJY29uLnNyYyA9IFVzZXJBdmF0YXI7XG5hdmF0YXJFbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XG5cbi8vIEFkZCBodG1sIGVsZW1lbnRzIHRvIHBhZ2Ugd2hlbiBsb2FkXG4vLyAtIG5hdiAgICB8IE5hdiB0aGF0IGhvbGRzIHRoZSBwcm9qZWN0c1xuLy8gLSBidXR0b24gfCBBZGQgbmV3IHByb2plY3RcbnVpTG9hZC5pbml0KCk7XG5cbi8vIEFkZCBvbmUgbmV3IHByb2plY3QgYW5kIHNldCBpdCB0byBhY3RpdmVcbnVpTG9hZC5jcmVhdGUoJ0ZpcnN0IHByb2plY3QnKTtcbmxldCBuZXdQcm9qZWN0ID0gdWlMb2FkLmdldFByb2plY3RCeUlEKDEpO1xudWlMb2FkLnNldEFjdGl2ZShuZXdQcm9qZWN0KTtcbnVpTG9hZC5zaG93UGFnZShuZXdQcm9qZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=