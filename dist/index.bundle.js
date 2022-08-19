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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-blue-l: rgb(23 195 178);\n    --color-white: rgb(254 249 239);\n    --color-yellow: rgb(255 203 119);\n    --color-blue: rgb(34 124 157);\n    --color-red: rgb(254 109 115);\n    --text-blue: rgb(19 68 86);\n    --text-black: rgb(13 12 12);\n    --text-white: rgb(255 255 255);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nlabel, \ninput {\n    display: block;\n}\n\nlabel {\n    margin-bottom: 8px;\n}\n\ntextarea {\n    padding: 8px;\n    font-family: inherit;\n}\n\ninput[type=text],\ninput[type=date] {\n    padding: 8px;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\ninput.lg-check {\n    width : 16px;\n    height : 16px;\n}\n\nbody {\n    background-color: var(--color-white);\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-rows: 60px 1fr;\n}\n\n.header {\n    color: var(--text-white);\n    background-color: var(--color-blue);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 24px;\n    box-shadow: 4px 4px 13px 1px rgb(0 0 0 / 20%);\n}\n\n.nav-start {\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    height: 100%;\n}\n\n.project {\n    list-style: none;\n    display: flex;\n}\n\n.project a {\n    padding: 1.3rem;\n    color: var(--text-white);\n    text-decoration: none;\n    display: block;\n}\n\n.project a:hover {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.project .active {\n    background-color: var(--color-white);\n}\n\n.project .active a {\n    color: var(--text-blue);\n}\n\n.logo {\n    display: flex;\n    gap: 8px;\n}\n\n.user {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.user a {\n    color: var(--text-white);\n    text-decoration: none;\n}\n\n.user img {\n    height: 50px;\n}\n\n.btn {\n    padding: 0.6rem;\n    border: none;\n    cursor: pointer;\n    border-radius: 6px;\n    font-weight: 600;\n    background: var(--color-yellow);\n}\n\n.btn:hover {\n    background-color: rgb(252, 211, 144);\n}\n\n.btn-project {\n    background-color: var(--color-blue-l);\n    color: var(--text-black);\n}\n\n.btn-project:hover {\n    background-color: rgb(33, 218, 200);\n}\n\nmain {\n    margin-top: 24px;\n    display: grid;\n    justify-items: center;\n}\n\n.container {\n    padding: 24px;\n    background-color: var(--text-white);\n    min-width: 650px;\n}\n\n.container h2 {\n    color: var(--color-blue);\n}\n\n.container form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.pageHeader-heading {\n    margin-bottom: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.page-body {\n    margin-top: 24px;\n}\n\n.row-item {\n    cursor: pointer;\n    padding: 8px 0;\n    border-bottom: 1px solid var(--color-blue);\n}\n\n.row-done {\n    text-decoration: line-through;\n}\n\n.row-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.row-title {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.row-details {\n    margin-top: 8px;\n    margin-left: 24px;\n    display: flex;\n    gap: 24px;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.row-details > p {\n    white-space: pre-line;\n}\n\n.row-details .btn {\n    flex-shrink: 0;\n}\n\n.priority {\n    padding: 8px;\n    border-radius: 20px;\n    font-size: 0.7rem;\n}\n\n.priority-high {\n    background-color: var(--color-red);\n    color: var(--text-black);\n}\n\n.priority-medium {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.priority-low {\n    background-color: var(--color-blue);\n    color: var(--text-black);\n}\n\n.due-date {\n    font-size: 0.7rem;\n}\n\n.checkbox-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.checkbox-item label {\n    margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/asset/style/style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,+BAA+B;IAC/B,gCAAgC;IAChC,6BAA6B;IAC7B,6BAA6B;IAC7B,0BAA0B;IAC1B,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,yCAAyC;IACzC,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,mCAAmC;IACnC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,6CAA6C;AACjD;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,0CAA0C;AAC9C;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;IAClC,wBAAwB;AAC5B;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;IACnC,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[":root {\n    --color-blue-l: rgb(23 195 178);\n    --color-white: rgb(254 249 239);\n    --color-yellow: rgb(255 203 119);\n    --color-blue: rgb(34 124 157);\n    --color-red: rgb(254 109 115);\n    --text-blue: rgb(19 68 86);\n    --text-black: rgb(13 12 12);\n    --text-white: rgb(255 255 255);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nlabel, \ninput {\n    display: block;\n}\n\nlabel {\n    margin-bottom: 8px;\n}\n\ntextarea {\n    padding: 8px;\n    font-family: inherit;\n}\n\ninput[type=text],\ninput[type=date] {\n    padding: 8px;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\ninput.lg-check {\n    width : 16px;\n    height : 16px;\n}\n\nbody {\n    background-color: var(--color-white);\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-rows: 60px 1fr;\n}\n\n.header {\n    color: var(--text-white);\n    background-color: var(--color-blue);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 24px;\n    box-shadow: 4px 4px 13px 1px rgb(0 0 0 / 20%);\n}\n\n.nav-start {\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    height: 100%;\n}\n\n.project {\n    list-style: none;\n    display: flex;\n}\n\n.project a {\n    padding: 1.3rem;\n    color: var(--text-white);\n    text-decoration: none;\n    display: block;\n}\n\n.project a:hover {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.project .active {\n    background-color: var(--color-white);\n}\n\n.project .active a {\n    color: var(--text-blue);\n}\n\n.logo {\n    display: flex;\n    gap: 8px;\n}\n\n.user {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.user a {\n    color: var(--text-white);\n    text-decoration: none;\n}\n\n.user img {\n    height: 50px;\n}\n\n.btn {\n    padding: 0.6rem;\n    border: none;\n    cursor: pointer;\n    border-radius: 6px;\n    font-weight: 600;\n    background: var(--color-yellow);\n}\n\n.btn:hover {\n    background-color: rgb(252, 211, 144);\n}\n\n.btn-project {\n    background-color: var(--color-blue-l);\n    color: var(--text-black);\n}\n\n.btn-project:hover {\n    background-color: rgb(33, 218, 200);\n}\n\nmain {\n    margin-top: 24px;\n    display: grid;\n    justify-items: center;\n}\n\n.container {\n    padding: 24px;\n    background-color: var(--text-white);\n    min-width: 650px;\n}\n\n.container h2 {\n    color: var(--color-blue);\n}\n\n.container form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.pageHeader-heading {\n    margin-bottom: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.page-body {\n    margin-top: 24px;\n}\n\n.row-item {\n    cursor: pointer;\n    padding: 8px 0;\n    border-bottom: 1px solid var(--color-blue);\n}\n\n.row-done {\n    text-decoration: line-through;\n}\n\n.row-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.row-title {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.row-details {\n    margin-top: 8px;\n    margin-left: 24px;\n    display: flex;\n    gap: 24px;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.row-details > p {\n    white-space: pre-line;\n}\n\n.row-details .btn {\n    flex-shrink: 0;\n}\n\n.priority {\n    padding: 8px;\n    border-radius: 20px;\n    font-size: 0.7rem;\n}\n\n.priority-high {\n    background-color: var(--color-red);\n    color: var(--text-black);\n}\n\n.priority-medium {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.priority-low {\n    background-color: var(--color-blue);\n    color: var(--text-black);\n}\n\n.due-date {\n    font-size: 0.7rem;\n}\n\n.checkbox-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.checkbox-item label {\n    margin-bottom: 0;\n}"],"sourceRoot":""}]);
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
        this._done = false;
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

    get done() {
        return this._done;
    }

    set done(bool) {
        this._done = bool;
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
        
        obj.list = obj.list.sort((last, next) => {
            return last.done === true ? 1 : -1;
        });
        obj.list.forEach((item) => {
            let divTodo = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'row-item', attr: [['data-id', item.id]]});
            if (item.done) divTodo = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'row-item row-done', attr: [['data-id', item.id]]});
            let divHead = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'row-heading'});
            let divTitle = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'row-title'})

            let check = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'checkbox'], ['id', item.id]], class: 'lg-check'});
            if (item.done) check = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'checkbox'], ['id', item.id], ['checked', 'checked']], class: 'lg-check'});

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

        let checkbox = document.querySelectorAll('.lg-check');
        checkbox.forEach((box) => {
            box.addEventListener('change', () => {
                let todoObj = this.getTodoByID(box.getAttribute('id'), obj);
                if (box.checked) {
                    todoObj.done = true;
                } else {
                    todoObj.done = false;
                }
                this.showPage(obj);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7VUNoWXJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNhO0FBQ1I7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0RBQVU7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNERBQVc7O0FBRVg7QUFDQSw4REFBYTtBQUNiLGlCQUFpQixzRUFBcUI7QUFDdEMsaUVBQWdCO0FBQ2hCLGdFQUFlLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXQvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0L3N0eWxlL3N0eWxlLmNzcz82ODlkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaHRtbEdlbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWlMb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItYmx1ZS1sOiByZ2IoMjMgMTk1IDE3OCk7XFxuICAgIC0tY29sb3Itd2hpdGU6IHJnYigyNTQgMjQ5IDIzOSk7XFxuICAgIC0tY29sb3IteWVsbG93OiByZ2IoMjU1IDIwMyAxMTkpO1xcbiAgICAtLWNvbG9yLWJsdWU6IHJnYigzNCAxMjQgMTU3KTtcXG4gICAgLS1jb2xvci1yZWQ6IHJnYigyNTQgMTA5IDExNSk7XFxuICAgIC0tdGV4dC1ibHVlOiByZ2IoMTkgNjggODYpO1xcbiAgICAtLXRleHQtYmxhY2s6IHJnYigxMyAxMiAxMik7XFxuICAgIC0tdGV4dC13aGl0ZTogcmdiKDI1NSAyNTUgMjU1KTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxubGFiZWwsIFxcbmlucHV0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dC5sZy1jaGVjayB7XFxuICAgIHdpZHRoIDogMTZweDtcXG4gICAgaGVpZ2h0IDogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjRweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxM3B4IDFweCByZ2IoMCAwIDAgLyAyMCUpO1xcbn1cXG5cXG4ubmF2LXN0YXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QgYSB7XFxuICAgIHBhZGRpbmc6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJvamVjdCBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJvamVjdCAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4ucHJvamVjdCAuYWN0aXZlIGEge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibHVlKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnVzZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnVzZXIgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udXNlciBpbWcge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXllbGxvdyk7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMTEsIDE0NCk7XFxufVxcblxcbi5idG4tcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUtbCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLmJ0bi1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAyMTgsIDIwMCk7XFxufVxcblxcbm1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgbWluLXdpZHRoOiA2NTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciBoMiB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG59XFxuXFxuLmNvbnRhaW5lciBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4ucGFnZUhlYWRlci1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGFnZS1ib2R5IHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLnJvdy1pdGVtIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA4cHggMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJsdWUpO1xcbn1cXG5cXG4ucm93LWRvbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnJvdy1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3ctZGV0YWlscyB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnJvdy1kZXRhaWxzID4gcCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLnJvdy1kZXRhaWxzIC5idG4ge1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLmNoZWNrYm94LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWl0ZW0gbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXQvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItYmx1ZS1sOiByZ2IoMjMgMTk1IDE3OCk7XFxuICAgIC0tY29sb3Itd2hpdGU6IHJnYigyNTQgMjQ5IDIzOSk7XFxuICAgIC0tY29sb3IteWVsbG93OiByZ2IoMjU1IDIwMyAxMTkpO1xcbiAgICAtLWNvbG9yLWJsdWU6IHJnYigzNCAxMjQgMTU3KTtcXG4gICAgLS1jb2xvci1yZWQ6IHJnYigyNTQgMTA5IDExNSk7XFxuICAgIC0tdGV4dC1ibHVlOiByZ2IoMTkgNjggODYpO1xcbiAgICAtLXRleHQtYmxhY2s6IHJnYigxMyAxMiAxMik7XFxuICAgIC0tdGV4dC13aGl0ZTogcmdiKDI1NSAyNTUgMjU1KTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxubGFiZWwsIFxcbmlucHV0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dC5sZy1jaGVjayB7XFxuICAgIHdpZHRoIDogMTZweDtcXG4gICAgaGVpZ2h0IDogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjRweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxM3B4IDFweCByZ2IoMCAwIDAgLyAyMCUpO1xcbn1cXG5cXG4ubmF2LXN0YXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QgYSB7XFxuICAgIHBhZGRpbmc6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJvamVjdCBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJvamVjdCAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4ucHJvamVjdCAuYWN0aXZlIGEge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibHVlKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnVzZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnVzZXIgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udXNlciBpbWcge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXllbGxvdyk7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMTEsIDE0NCk7XFxufVxcblxcbi5idG4tcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUtbCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLmJ0bi1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAyMTgsIDIwMCk7XFxufVxcblxcbm1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgbWluLXdpZHRoOiA2NTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciBoMiB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG59XFxuXFxuLmNvbnRhaW5lciBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4ucGFnZUhlYWRlci1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGFnZS1ib2R5IHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLnJvdy1pdGVtIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA4cHggMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJsdWUpO1xcbn1cXG5cXG4ucm93LWRvbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnJvdy1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3ctZGV0YWlscyB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnJvdy1kZXRhaWxzID4gcCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLnJvdy1kZXRhaWxzIC5idG4ge1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLmNoZWNrYm94LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWl0ZW0gbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHtcbi8vICB0eXBlOiBkaXZcbi8vICBjbGFzczogY2xhc3MxIGNsYXNzMlxuLy8gIGlkOiBpZFxuLy8gIGF0dHI6IFtbcHJvcGVydHkxLCB2YWx1ZTFdLCBbcHJvcGVydHkyLCB2YWx1ZTJdXVxuLy8gIHRleHQ6ICd0ZWVlZXh0J1xuLy8gfVxuXG5mdW5jdGlvbiBjcmVhdGVIdG1sKGFycikge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcnIudHlwZSk7XG4gICAgaWYgKGFyci5jbGFzcykgYXJyLmNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoYykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgICBpZiAoYXJyLnRleHQpIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhcnIudGV4dDtcbiAgICBpZiAoYXJyLmF0dHIpIGFyci5hdHRyLmZvckVhY2goKHJvdykgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUocm93WzBdLCByb3dbMV0pKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVIdG1sXG59IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgbGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5faWQgPSBpZENvdW50ZXIoKTtcbiAgICB9XG5cbiAgICBhZGRUb0xpc3Qob2JqKSB7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKG9iaik7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIGdldCBsaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0O1xuICAgIH1cbn1cblxubGV0IGlkID0gMDtcbmZ1bmN0aW9uIGlkQ291bnRlcigpIHtcbiAgICArK2lkXG4gICAgcmV0dXJuIGlkOyBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSA9IGZhbHNlLCBwcmlvcml0eSA9ICdsb3cnKSB7XG4gICAgICAgIHRoaXMuX2lkID0gaWRDb3VudGVyKCk7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLl9kb25lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICAgIH1cblxuICAgIHNldCBkYXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2RhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbmU7XG4gICAgfVxuXG4gICAgc2V0IGRvbmUoYm9vbCkge1xuICAgICAgICB0aGlzLl9kb25lID0gYm9vbDtcbiAgICB9XG59XG5cbmxldCBpZCA9IDA7XG5mdW5jdGlvbiBpZENvdW50ZXIoKSB7XG4gICAgKytpZFxuICAgIHJldHVybiBpZDsgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiaW1wb3J0IHsgY3JlYXRlSHRtbCB9IGZyb20gXCIuL2h0bWxHZW5cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcblxuLy8gQ3JlYXRlcyBlbGVtZW50cyB0aGF0IGFyZSByZXF1aXJlZCBmb3IgdGhlIHBhZ2VcbmNvbnN0IHVpTG9hZCA9IHtcbiAgICBwcm9qZWN0TGlzdDogW10sXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2FjaGVEb29tKCk7XG4gICAgICAgIHRoaXMuc2hvd05hdigpO1xuICAgIH0sXG4gICAgY2FjaGVEb29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1zdGFydCcpO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Db250ZW50IC5jb250YWluZXInKTtcbiAgICB9LFxuICAgIHNob3dOYXY6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdWwgPSBjcmVhdGVIdG1sKHt0eXBlOiAndWwnLCBjbGFzczogJ3Byb2plY3QnfSk7XG4gICAgICAgIGxldCBuYXYgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbmF2J30pO1xuICAgICAgICBsZXQgYnRuID0gY3JlYXRlSHRtbCh7dHlwZTogJ2J1dHRvbicsIGNsYXNzOiAnYnRuIGJ0bi1wcm9qZWN0JywgdGV4dDogJ0FkZCBwcm9qZWN0J30pO1xuXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIHRoaXMucGFnZUhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICAgICAgICB0aGlzLnBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgICAgICB0aGlzLnNob3dGb3JtRXZlbnQoKTtcbiAgICB9LFxuICAgIHNob3dGb3JtRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wcm9qZWN0Jyk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Zvcm0oKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWN0aXZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvd0Zvcm06IGZ1bmN0aW9uKG9iaiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBmb3JtVGV4dCA9IHt9XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIGZvcm1UZXh0LmgyID0gYEVkaXQgJHtvYmoudGl0bGV9YDtcbiAgICAgICAgICAgIGZvcm1UZXh0LmxhYmVsID0gJ1RpdGxlJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmlucHV0ID0gb2JqLnRpdGxlO1xuICAgICAgICAgICAgZm9ybVRleHQuYnRuID0gJ1VwZGF0ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtVGV4dC5oMiA9ICdBZGQgbmV3IFByb2plY3QnO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWwgPSAnVGl0bGUnO1xuICAgICAgICAgICAgZm9ybVRleHQuaW5wdXQgPSAnJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmJ0biA9ICdBZGQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYWdlQm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gQ3JlYXRlIGRpdiBoZWFkZXJcbiAgICAgICAgbGV0IGRpdkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdwYWdlSGVhZGVyLWhlYWRpbmcnfSk7XG4gICAgICAgIGxldCBoMkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaDInLCB0ZXh0OiBmb3JtVGV4dC5oMn0pO1xuICAgICAgICBkaXZIZWFkLmFwcGVuZENoaWxkKGgySGVhZCk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQoZGl2SGVhZCk7XG5cbiAgICAgICAgLy8gZm9ybVxuICAgICAgICBsZXQgZm9ybSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdmb3JtJywgYXR0cjogW1snYWN0aW9uJywgJyddXX0pO1xuICAgICAgICBsZXQgZm9ybURpdiA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnfSk7XG4gICAgICAgIGxldCBsYWJlbCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdsYWJlbCcsIGF0dHI6IFtbJ2ZvcicsICdwcm9qZWN0VGl0bGUnXV0sIHRleHQ6IGZvcm1UZXh0LmxhYmVsIH0pO1xuICAgICAgICBsZXQgaW5wdXQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaW5wdXQnLCBhdHRyOiBbWyd0eXBlJywgJ3RleHQnXSwgWyduYW1lJywgJ3Byb2plY3RUaXRsZSddLCBbJ2lkJywgJ3Byb2plY3RUaXRsZSddLFsndmFsdWUnLCBmb3JtVGV4dC5pbnB1dF1dfSk7XG4gICAgICAgIGxldCBzdWJCdG4gPSBjcmVhdGVIdG1sKHt0eXBlOiAnYnV0dG9uJywgdGV4dDogZm9ybVRleHQuYnRuLCBjbGFzczogJ2J0bicsIGF0dHI6IFtbJ2lkJywgJ3N1Ym1pdFByb2plY3QnXV19KVxuICAgICAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZm9ybURpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3ViQnRuKTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICAob2JqKSA/IHRoaXMuc3VibWl0Rm9ybUVkaXQob2JqKSA6IHRoaXMuc3VibWl0Rm9ybU5ldygpO1xuICAgIH0sXG4gICAgc3VibWl0Rm9ybU5ldzogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdCcpO1xuICAgICAgICBzdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzdWJtaXRGb3JtRWRpdDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGxldCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdCcpO1xuICAgICAgICBzdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgb2JqLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoUHJvamVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUob2JqKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2Uob2JqKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgfSxcbiAgICBzaG93UHJvamVjdDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGxldCBuYXZVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgICAgIGxldCBsaSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdsaScsIGF0dHI6IFtbJ2RhdGEtaWQnLCBvYmouaWRdXSwgY2xhc3M6ICduYXYtaXRlbSd9KTtcbiAgICAgICAgbGV0IGEgPSBjcmVhdGVIdG1sKHt0eXBlOiAnYScsIGF0dHI6IFtbJ2hyZWYnLCAnIyddXSwgdGV4dDogb2JqLnRpdGxlfSk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICBuYXZVbC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uRXZlbnQoKTtcbiAgICB9LFxuICAgIHJlZnJlc2hQcm9qZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG5hdlVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgICAgICAgbmF2VWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xpJywgYXR0cjogW1snZGF0YS1pZCcsIHRoaXMucHJvamVjdExpc3RbaV0uaWRdXSwgY2xhc3M6ICduYXYtaXRlbSd9KTtcbiAgICAgICAgICAgIGxldCBhID0gY3JlYXRlSHRtbCh7dHlwZTogJ2EnLCBhdHRyOiBbWydocmVmJywgJyMnXV0sIHRleHQ6IHRoaXMucHJvamVjdExpc3RbaV0udGl0bGV9KTtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgICAgbmF2VWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hdmlnYXRpb25FdmVudCgpO1xuICAgIH0sXG4gICAgbmF2aWdhdGlvbkV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QgbGknKTtcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHRoaXMuZ2V0UHJvamVjdEJ5SUQobGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUob2JqKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlKG9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBsZXQgY3VycmVudEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmUpIHRoaXMucmVtb3ZlQWN0aXZlKCk7XG5cbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0IGxpW2RhdGEtaWQ9XCIke29iai5pZH1cIl1gKTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0sXG4gICAgcmVtb3ZlQWN0aXZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgIGN1cnJlbnRBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSxcbiAgICBnZXRQcm9qZWN0QnlJRChwcm9qZWN0SWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9qZWN0SWQgPT09ICdzdHJpbmcnKSBwcm9qZWN0SWQgPSBwYXJzZUludChwcm9qZWN0SWQpO1xuICAgICAgICBsZXQgaWR4ID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdFtpZHhdO1xuICAgIH0sXG4gICAgZ2V0VG9kb0J5SUQodG9kb0lkLCBvYmopIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2RvSWQgPT09ICdzdHJpbmcnKSB0b2RvSWQgPSBwYXJzZUludCh0b2RvSWQpO1xuICAgICAgICBsZXQgaWR4ID0gb2JqLmxpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcbiAgICAgICAgcmV0dXJuIG9iai5saXN0W2lkeF07XG4gICAgfSxcbiAgICBzaG93UGFnZTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIC8vIENyZWF0ZSBkaXYgaGVhZGVyXG4gICAgICAgIGxldCBkaXZIZWFkID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncGFnZUhlYWRlci1oZWFkaW5nJ30pO1xuICAgICAgICBsZXQgaDJIZWFkID0gY3JlYXRlSHRtbCh7dHlwZTogJ2gyJywgdGV4dDogb2JqLnRpdGxlfSk7XG4gICAgICAgIGxldCBwcm9qZWN0RWRpdCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdidXR0b24nLCBjbGFzczogJ2J0bicsIHRleHQ6ICdFZGl0IHByb2plY3QnLCBhdHRyOiBbWydpZCcsICdlZGl0UHJvamVjdCddXX0pO1xuICAgICAgICBkaXZIZWFkLmFwcGVuZENoaWxkKGgySGVhZCk7XG4gICAgICAgIGRpdkhlYWQuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXQpO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LmFwcGVuZENoaWxkKGRpdkhlYWQpO1xuXG4gICAgICAgIGxldCBidG5BZGQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnYnV0dG9uJywgY2xhc3M6ICdidG4nLCB0ZXh0OiAnQWRkIFRvZG8nLCBhdHRyOiBbWydpZCcsICdhZGRUb2RvJ11dfSk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQoYnRuQWRkKTtcblxuICAgICAgICBsZXQgZGl2Qm9keSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ3BhZ2UtYm9keSd9KTtcbiAgICAgICAgXG4gICAgICAgIG9iai5saXN0ID0gb2JqLmxpc3Quc29ydCgobGFzdCwgbmV4dCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3QuZG9uZSA9PT0gdHJ1ZSA/IDEgOiAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iai5saXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBkaXZUb2RvID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncm93LWl0ZW0nLCBhdHRyOiBbWydkYXRhLWlkJywgaXRlbS5pZF1dfSk7XG4gICAgICAgICAgICBpZiAoaXRlbS5kb25lKSBkaXZUb2RvID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncm93LWl0ZW0gcm93LWRvbmUnLCBhdHRyOiBbWydkYXRhLWlkJywgaXRlbS5pZF1dfSk7XG4gICAgICAgICAgICBsZXQgZGl2SGVhZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ3Jvdy1oZWFkaW5nJ30pO1xuICAgICAgICAgICAgbGV0IGRpdlRpdGxlID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncm93LXRpdGxlJ30pXG5cbiAgICAgICAgICAgIGxldCBjaGVjayA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAnY2hlY2tib3gnXSwgWydpZCcsIGl0ZW0uaWRdXSwgY2xhc3M6ICdsZy1jaGVjayd9KTtcbiAgICAgICAgICAgIGlmIChpdGVtLmRvbmUpIGNoZWNrID0gY3JlYXRlSHRtbCh7dHlwZTogJ2lucHV0JywgYXR0cjogW1sndHlwZScsICdjaGVja2JveCddLCBbJ2lkJywgaXRlbS5pZF0sIFsnY2hlY2tlZCcsICdjaGVja2VkJ11dLCBjbGFzczogJ2xnLWNoZWNrJ30pO1xuXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBjcmVhdGVIdG1sKHt0eXBlOiAncCcsIHRleHQ6IGl0ZW0udGl0bGV9KTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdzcGFuJywgdGV4dDogaXRlbS5wcmlvcml0eSwgY2xhc3M6IGBwcmlvcml0eSBwcmlvcml0eS0ke2l0ZW0ucHJpb3JpdHl9YH0pO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBjcmVhdGVIdG1sKHt0eXBlOiAnc3BhbicsIHRleHQ6IGl0ZW0uZGF0ZSwgY2xhc3M6ICdkdWUtZGF0ZSd9KTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBcbiAgICAgICAgICAgIGRpdkhlYWQuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgICAgICAgZGl2SGVhZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgIGRpdlRvZG8uYXBwZW5kQ2hpbGQoZGl2SGVhZCk7XG4gICAgICAgICAgICBkaXZCb2R5LmFwcGVuZENoaWxkKGRpdlRvZG8pO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChkaXZCb2R5KTtcblxuICAgICAgICB0aGlzLnBhZ2VFdmVudChvYmopO1xuXG4gICAgfSxcbiAgICBwYWdlRXZlbnQ6IGZ1bmN0aW9uKG9iail7XG4gICAgICAgIGxldCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0UHJvamVjdCcpO1xuICAgICAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Zvcm0ob2JqKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvJyk7XG4gICAgICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dGb3JtVG9kbygpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzaG93VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3ctaXRlbScpO1xuICAgICAgICBzaG93VG9kby5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvZG9EZXRhaWxzKGl0ZW0sIG9iai5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxnLWNoZWNrJyk7XG4gICAgICAgIGNoZWNrYm94LmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb09iaiA9IHRoaXMuZ2V0VG9kb0J5SUQoYm94LmdldEF0dHJpYnV0ZSgnaWQnKSwgb2JqKTtcbiAgICAgICAgICAgICAgICBpZiAoYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb09iai5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2RvT2JqLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZShvYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvd0Zvcm1Ub2RvOiBmdW5jdGlvbihvYmogPSBmYWxzZSkge1xuICAgICAgICBsZXQgZm9ybVRleHQgPSB7fVxuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICBmb3JtVGV4dC5oMiA9IGBFZGl0ICR7b2JqLnRpdGxlfWA7XG4gICAgICAgICAgICBmb3JtVGV4dC5sYWJlbCA9ICdUaXRsZSc7XG4gICAgICAgICAgICBmb3JtVGV4dC5pbnB1dCA9IG9iai50aXRsZTtcbiAgICAgICAgICAgIGZvcm1UZXh0LmxhYmVsMiA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtVGV4dC5kZXNjID0gb2JqLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWwzID0gJ0R1ZSBkYXRlJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgICAgIGZvcm1UZXh0LmxhYmVsNCA9ICdQcmlvcml0eSc7XG4gICAgICAgICAgICBmb3JtVGV4dC5wcmlvID0gb2JqLnByaW9yaXR5O1xuICAgICAgICAgICAgZm9ybVRleHQuYnRuID0gJ1VwZGF0ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtVGV4dC5oMiA9ICdDcmVhdGUgbmV3IFRvZG8nO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWwgPSAnVGl0bGUnO1xuICAgICAgICAgICAgZm9ybVRleHQuaW5wdXQgPSAnJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmxhYmVsMiA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtVGV4dC5kZXNjID0gJyc7XG4gICAgICAgICAgICBmb3JtVGV4dC5sYWJlbDMgPSAnRHVlIGRhdGUnO1xuICAgICAgICAgICAgZm9ybVRleHQuZGF0ZSA9ICcnO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWw0ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgICAgIGZvcm1UZXh0LnByaW8gPSAnJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmJ0biA9ICdBZGQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYWdlQm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gQ3JlYXRlIGRpdiBoZWFkZXJcbiAgICAgICAgbGV0IGRpdkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdwYWdlSGVhZGVyLWhlYWRpbmcnfSk7XG4gICAgICAgIGxldCBoMkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaDInLCB0ZXh0OiBmb3JtVGV4dC5oMn0pO1xuICAgICAgICBkaXZIZWFkLmFwcGVuZENoaWxkKGgySGVhZCk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQoZGl2SGVhZCk7XG5cbiAgICAgICAgLy8gZm9ybVxuICAgICAgICBsZXQgZm9ybSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdmb3JtJywgYXR0cjogW1snYWN0aW9uJywgJyddXX0pO1xuXG4gICAgICAgIGxldCBmb3JtRGl2ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2Rpdid9KTtcbiAgICAgICAgbGV0IGxhYmVsID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3RvZG9UaXRsZSddXSwgdGV4dDogZm9ybVRleHQubGFiZWwgfSk7XG4gICAgICAgIGxldCBpbnB1dCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAndGV4dCddLCBbJ25hbWUnLCAndG9kb1RpdGxlJ10sIFsnaWQnLCAndG9kb1RpdGxlJ10sWyd2YWx1ZScsIGZvcm1UZXh0LmlucHV0XV19KTtcblxuICAgICAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZm9ybURpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybURpdjIgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2J30pO1xuICAgICAgICBsZXQgbGFiZWwyID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3RvZG9EZXNjJ11dLCB0ZXh0OiBmb3JtVGV4dC5sYWJlbDIgfSk7XG4gICAgICAgIGxldCBpbnB1dDIgPSBjcmVhdGVIdG1sKHt0eXBlOiAndGV4dGFyZWEnLCB0ZXh0OiBmb3JtVGV4dC5kZXNjICxhdHRyOiBbWyduYW1lJywgJ2Rlc2MnXSwgWydpZCcsICd0b2RvRGVzYyddLCBbJ2NvbHMnLCAnOTInXSwgWydyb3dzJywgJzEwJ11dfSk7XG4gICAgICAgIFxuICAgICAgICBmb3JtRGl2Mi5hcHBlbmRDaGlsZChsYWJlbDIpO1xuICAgICAgICBmb3JtRGl2Mi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1EaXYyKTtcblxuICAgICAgICBsZXQgZm9ybURpdjMgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2J30pO1xuICAgICAgICBsZXQgbGFiZWwzID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3RvZG9EYXRlJ11dLCB0ZXh0OiBmb3JtVGV4dC5sYWJlbDMgfSk7XG4gICAgICAgIGxldCBpbnB1dDMgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaW5wdXQnLCBhdHRyOiBbWyd0eXBlJywgJ2RhdGUnXSwgWyduYW1lJywgJ3RvZG9EYXRlJ10sIFsnaWQnLCAndG9kb0RhdGUnXSwgWyd2YWx1ZScsIGZvcm1UZXh0LmRhdGVdXX0pO1xuXG4gICAgICAgIGZvcm1EaXYzLmFwcGVuZENoaWxkKGxhYmVsMyk7XG4gICAgICAgIGZvcm1EaXYzLmFwcGVuZENoaWxkKGlucHV0Myk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdjMpO1xuXG4gICAgICAgIGxldCBmb3JtRGl2NCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnfSk7XG4gICAgICAgIGxldCBsYWJlbDQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAndG9kb1ByaW9yaXR5J11dLCB0ZXh0OiBmb3JtVGV4dC5sYWJlbDR9KTtcbiAgICAgICAgZm9ybURpdjQuYXBwZW5kQ2hpbGQobGFiZWw0KTtcblxuICAgICAgICBsZXQgZm9ybURpdkNoZWNrMSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ2NoZWNrYm94LWl0ZW0nfSk7XG4gICAgICAgIGxldCBpbnB1dExvdyA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAncmFkaW8nXSwgWydpZCcsICdsb3dQcmlvJ10sIFsnbmFtZScsICdwcmlvcml0eSddLCBbJ3ZhbHVlJywgJ2xvdyddXX0pO1xuICAgICAgICBsZXQgbGFiZWxMb3cgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAnbG93UHJpbyddXSwgdGV4dDogJ0xvdyBwcmlvcml0eSd9KTtcbiAgICAgICAgaWYgKG9iai5wcmlvcml0eSA9PT0gJ2xvdycpIGlucHV0TG93LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG5cbiAgICAgICAgZm9ybURpdkNoZWNrMS5hcHBlbmRDaGlsZChpbnB1dExvdyk7XG4gICAgICAgIGZvcm1EaXZDaGVjazEuYXBwZW5kQ2hpbGQobGFiZWxMb3cpO1xuICAgICAgICBmb3JtRGl2NC5hcHBlbmRDaGlsZChmb3JtRGl2Q2hlY2sxKTtcblxuICAgICAgICBsZXQgZm9ybURpdkNoZWNrMiA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ2NoZWNrYm94LWl0ZW0nfSk7XG4gICAgICAgIGxldCBpbnB1dE1lZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAncmFkaW8nXSwgWydpZCcsICdtZWRQcmlvJ10sIFsnbmFtZScsICdwcmlvcml0eSddLCBbJ3ZhbHVlJywgJ21lZGl1bSddXX0pO1xuICAgICAgICBsZXQgbGFiZWxNZWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAnbWVkUHJpbyddXSwgdGV4dDogJ01lZGl1bSBwcmlvcml0eSd9KTtcbiAgICAgICAgaWYgKG9iai5wcmlvcml0eSA9PT0gJ21lZGl1bScpIGlucHV0TWVkLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG5cbiAgICAgICAgZm9ybURpdkNoZWNrMi5hcHBlbmRDaGlsZChpbnB1dE1lZCk7XG4gICAgICAgIGZvcm1EaXZDaGVjazIuYXBwZW5kQ2hpbGQobGFiZWxNZWQpO1xuICAgICAgICBmb3JtRGl2NC5hcHBlbmRDaGlsZChmb3JtRGl2Q2hlY2syKTtcblxuICAgICAgICBsZXQgZm9ybURpdkNoZWNrMyA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ2NoZWNrYm94LWl0ZW0nfSk7XG4gICAgICAgIGxldCBpbnB1dEhpZ2ggPSBjcmVhdGVIdG1sKHt0eXBlOiAnaW5wdXQnLCBhdHRyOiBbWyd0eXBlJywgJ3JhZGlvJ10sIFsnaWQnLCAnaGlnaFByaW8nXSwgWyduYW1lJywgJ3ByaW9yaXR5J10sIFsndmFsdWUnLCAnaGlnaCddXX0pO1xuICAgICAgICBsZXQgbGFiZWxIaWdoID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ2hpZ2hQcmlvJ11dLCB0ZXh0OiAnSGlnaCBwcmlvcml0eSd9KTtcbiAgICAgICAgaWYgKG9iai5wcmlvcml0eSA9PT0gJ2hpZ2gnKSBpbnB1dEhpZ2guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcblxuICAgICAgICBmb3JtRGl2Q2hlY2szLmFwcGVuZENoaWxkKGlucHV0SGlnaCk7XG4gICAgICAgIGZvcm1EaXZDaGVjazMuYXBwZW5kQ2hpbGQobGFiZWxIaWdoKTtcbiAgICAgICAgZm9ybURpdjQuYXBwZW5kQ2hpbGQoZm9ybURpdkNoZWNrMyk7XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2NCk7XG5cbiAgICAgICAgbGV0IHN1YkJ0biA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdidXR0b24nLCB0ZXh0OiBmb3JtVGV4dC5idG4sIGNsYXNzOiAnYnRuJywgYXR0cjogW1snaWQnLCAnc3VibWl0VG9kbyddXX0pXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3ViQnRuKTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICAob2JqKSA/IHRoaXMuc3VibWl0VG9kb0Zvcm1FZGl0KG9iaikgOiB0aGlzLnN1Ym1pdFRvZG9Gb3JtTmV3KCk7XG4gICAgICAgIFxuICAgIH0sXG4gICAgc3VibWl0VG9kb0Zvcm1OZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3ViQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdFRvZG8nKTtcbiAgICAgICAgc3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9UaXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9EZXNjJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvRGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHN1Ym1pdFRvZG9Gb3JtRWRpdDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGxldCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0VG9kbycpO1xuICAgICAgICBzdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBvYmoudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1RpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBvYmouZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0Rlc2MnKS52YWx1ZTtcbiAgICAgICAgICAgIG9iai5kYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9EYXRlJykudmFsdWU7XG4gICAgICAgICAgICBvYmoucHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgbGV0IHByb2plY3RPYmogPSB0aGlzLmdldFByb2plY3RCeUlEKHByb2plY3RJZCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQYWdlKHByb2plY3RPYmopO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNyZWF0ZVRvZG86IGZ1bmN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcblxuICAgICAgICBsZXQgcHJvamVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICBsZXQgcHJvamVjdE9iaiA9IHRoaXMuZ2V0UHJvamVjdEJ5SUQocHJvamVjdElkKTtcblxuICAgICAgICBwcm9qZWN0T2JqLmFkZFRvTGlzdChuZXdUb2RvKTtcbiAgICAgICAgdGhpcy5zaG93UGFnZShwcm9qZWN0T2JqKTtcbiAgICB9LFxuICAgIHNob3dUb2RvRGV0YWlsczogZnVuY3Rpb24oaXRlbSwgcHJvamVjdElkKSB7XG4gICAgICAgIGxldCBpZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGxldCBwcm9qZWN0T2JqID0gdGhpcy5nZXRQcm9qZWN0QnlJRChwcm9qZWN0SWQpO1xuICAgICAgICBsZXQgdG9kb09iaiA9IHRoaXMuZ2V0VG9kb0J5SUQoaWQsIHByb2plY3RPYmopO1xuXG4gICAgICAgIGxldCBkaXZJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdy1kZXRhaWxzJyk7XG4gICAgICAgIGlmIChkaXZJbmZvKSBkaXZJbmZvLnJlbW92ZSgpO1xuXG4gICAgICAgIGxldCBkaXYgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdyb3ctZGV0YWlscyd9KTtcbiAgICAgICAgbGV0IGRlc2MgPSBjcmVhdGVIdG1sKHt0eXBlOiAncCcsIHRleHQ6IHRvZG9PYmouZGVzY3JpcHRpb259KTtcbiAgICAgICAgbGV0IGJ0biA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdidXR0b24nLCB0ZXh0OiAnRWRpdCBUb2RvJywgY2xhc3M6ICdidG4gYnRuLXRvZG8nfSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICB0aGlzLmVkaXRUb2RvRXZlbnQocHJvamVjdE9iaiwgdG9kb09iaik7XG4gICAgfSxcbiAgICBlZGl0VG9kb0V2ZW50OiBmdW5jdGlvbihwcm9qZWN0LCB0b2RvKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRvZG8nKTtcbiAgICAgICAgaWYgKGJ0bikge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Zvcm1Ub2RvKHRvZG8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgdWlMb2FkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYXNzZXQvc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBVc2VyQXZhdGFyIGZyb20gJy4vYXNzZXQvaW1nL3VzZXIucG5nJztcbmltcG9ydCB1aUxvYWQgZnJvbSAnLi9tb2R1bGVzL3VpTG9hZCc7XG5cbi8vIEFkZCB0aGUgdXNlciBhdmF0YXIgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIHVzZXItZGl2LlxuY29uc3QgYXZhdGFyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyJyk7XG5jb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbm15SWNvbi5zcmMgPSBVc2VyQXZhdGFyO1xuYXZhdGFyRWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuXG4vLyBBZGQgaHRtbCBlbGVtZW50cyB0byBwYWdlIHdoZW4gbG9hZFxuLy8gLSBuYXYgICAgfCBOYXYgdGhhdCBob2xkcyB0aGUgcHJvamVjdHNcbi8vIC0gYnV0dG9uIHwgQWRkIG5ldyBwcm9qZWN0XG51aUxvYWQuaW5pdCgpO1xuXG4vLyBBZGQgb25lIG5ldyBwcm9qZWN0IGFuZCBzZXQgaXQgdG8gYWN0aXZlXG51aUxvYWQuY3JlYXRlKCdGaXJzdCBwcm9qZWN0Jyk7XG5sZXQgbmV3UHJvamVjdCA9IHVpTG9hZC5nZXRQcm9qZWN0QnlJRCgxKTtcbnVpTG9hZC5zZXRBY3RpdmUobmV3UHJvamVjdCk7XG51aUxvYWQuc2hvd1BhZ2UobmV3UHJvamVjdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9