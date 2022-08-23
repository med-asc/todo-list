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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-blue-l: rgb(23 195 178);\n    --color-white: rgb(254 249 239);\n    --color-yellow: rgb(255 203 119);\n    --color-blue: rgb(34 124 157);\n    --color-red: rgb(254 109 115);\n    --text-blue: rgb(19 68 86);\n    --text-black: rgb(13 12 12);\n    --text-white: rgb(255 255 255);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nlabel, \ninput {\n    display: block;\n}\n\nlabel {\n    margin-bottom: 8px;\n}\n\ntextarea {\n    padding: 8px;\n    font-family: inherit;\n}\n\ninput[type=text],\ninput[type=date] {\n    padding: 8px;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\ninput.lg-check {\n    width : 16px;\n    height : 16px;\n}\n\nbody {\n    background-color: var(--color-white);\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-rows: 60px 1fr;\n}\n\n.header {\n    color: var(--text-white);\n    background-color: var(--color-blue);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 24px;\n    padding: 0 24px;\n    box-shadow: 4px 4px 13px 1px rgb(0 0 0 / 20%);\n}\n\n.nav-start {\n    flex: auto;\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    height: 100%;\n}\n\n.project {\n    list-style: none;\n    display: flex;\n}\n\n.project a {\n    padding: 1.3rem;\n    color: var(--text-white);\n    text-decoration: none;\n    display: block;\n}\n\n.project a:hover {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.project .active {\n    background-color: var(--color-white);\n}\n\n.project .active a {\n    color: var(--text-blue);\n}\n\n.logo {\n    display: flex;\n    gap: 8px;\n}\n\n.user {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.user a {\n    color: var(--text-white);\n    text-decoration: none;\n}\n\n.user img {\n    height: 50px;\n}\n\n.btn {\n    padding: 0.6rem;\n    border: none;\n    cursor: pointer;\n    border-radius: 6px;\n    font-weight: 600;\n    background: var(--color-yellow);\n}\n\n.btn-red {\n    background-color: var(--color-red);\n}\n\n.btn:hover {\n    background-color: rgb(252, 211, 144);\n}\n\n.btn-red:hover {\n    background-color: rgb(250, 90, 96);\n}\n\n.btn-project {\n    background-color: var(--color-blue-l);\n    color: var(--text-black);\n}\n\n.btn-project:hover {\n    background-color: rgb(33, 218, 200);\n}\n\nmain {\n    margin-top: 24px;\n    display: grid;\n    justify-items: center;\n}\n\n.container {\n    padding: 24px;\n    background-color: var(--text-white);\n    min-width: 650px;\n}\n\n.container h2 {\n    color: var(--color-blue);\n}\n\n.container form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.pageHeader-heading {\n    margin-bottom: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.page-body {\n    margin-top: 24px;\n}\n\n.row-item {\n    cursor: pointer;\n    padding: 8px 0;\n    border-bottom: 1px solid var(--color-blue);\n}\n\n.row-done {\n    text-decoration: line-through;\n}\n\n.row-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.row-title {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.row-details {\n    margin-top: 8px;\n    margin-left: 24px;\n    display: flex;\n    gap: 24px;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.row-details > p {\n    white-space: pre-line;\n}\n\n.row-details .btn {\n    flex-shrink: 0;\n}\n\n.priority {\n    padding: 8px;\n    border-radius: 20px;\n    font-size: 0.7rem;\n}\n\n.priority-high {\n    background-color: var(--color-red);\n    color: var(--text-black);\n}\n\n.priority-medium {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.priority-low {\n    background-color: var(--color-blue);\n    color: var(--text-black);\n}\n\n.due-date {\n    font-size: 0.7rem;\n}\n\n.checkbox-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.checkbox-item label {\n    margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/asset/style/style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,+BAA+B;IAC/B,gCAAgC;IAChC,6BAA6B;IAC7B,6BAA6B;IAC7B,0BAA0B;IAC1B,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,yCAAyC;IACzC,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,mCAAmC;IACnC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,6CAA6C;AACjD;;AAEA;IACI,UAAU;IACV,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,0CAA0C;AAC9C;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;IAClC,wBAAwB;AAC5B;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;IACnC,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[":root {\n    --color-blue-l: rgb(23 195 178);\n    --color-white: rgb(254 249 239);\n    --color-yellow: rgb(255 203 119);\n    --color-blue: rgb(34 124 157);\n    --color-red: rgb(254 109 115);\n    --text-blue: rgb(19 68 86);\n    --text-black: rgb(13 12 12);\n    --text-white: rgb(255 255 255);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nlabel, \ninput {\n    display: block;\n}\n\nlabel {\n    margin-bottom: 8px;\n}\n\ntextarea {\n    padding: 8px;\n    font-family: inherit;\n}\n\ninput[type=text],\ninput[type=date] {\n    padding: 8px;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\ninput.lg-check {\n    width : 16px;\n    height : 16px;\n}\n\nbody {\n    background-color: var(--color-white);\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-rows: 60px 1fr;\n}\n\n.header {\n    color: var(--text-white);\n    background-color: var(--color-blue);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 24px;\n    padding: 0 24px;\n    box-shadow: 4px 4px 13px 1px rgb(0 0 0 / 20%);\n}\n\n.nav-start {\n    flex: auto;\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    height: 100%;\n}\n\n.project {\n    list-style: none;\n    display: flex;\n}\n\n.project a {\n    padding: 1.3rem;\n    color: var(--text-white);\n    text-decoration: none;\n    display: block;\n}\n\n.project a:hover {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.project .active {\n    background-color: var(--color-white);\n}\n\n.project .active a {\n    color: var(--text-blue);\n}\n\n.logo {\n    display: flex;\n    gap: 8px;\n}\n\n.user {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.user a {\n    color: var(--text-white);\n    text-decoration: none;\n}\n\n.user img {\n    height: 50px;\n}\n\n.btn {\n    padding: 0.6rem;\n    border: none;\n    cursor: pointer;\n    border-radius: 6px;\n    font-weight: 600;\n    background: var(--color-yellow);\n}\n\n.btn-red {\n    background-color: var(--color-red);\n}\n\n.btn:hover {\n    background-color: rgb(252, 211, 144);\n}\n\n.btn-red:hover {\n    background-color: rgb(250, 90, 96);\n}\n\n.btn-project {\n    background-color: var(--color-blue-l);\n    color: var(--text-black);\n}\n\n.btn-project:hover {\n    background-color: rgb(33, 218, 200);\n}\n\nmain {\n    margin-top: 24px;\n    display: grid;\n    justify-items: center;\n}\n\n.container {\n    padding: 24px;\n    background-color: var(--text-white);\n    min-width: 650px;\n}\n\n.container h2 {\n    color: var(--color-blue);\n}\n\n.container form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.pageHeader-heading {\n    margin-bottom: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.page-body {\n    margin-top: 24px;\n}\n\n.row-item {\n    cursor: pointer;\n    padding: 8px 0;\n    border-bottom: 1px solid var(--color-blue);\n}\n\n.row-done {\n    text-decoration: line-through;\n}\n\n.row-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.row-title {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.row-details {\n    margin-top: 8px;\n    margin-left: 24px;\n    display: flex;\n    gap: 24px;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.row-details > p {\n    white-space: pre-line;\n}\n\n.row-details .btn {\n    flex-shrink: 0;\n}\n\n.priority {\n    padding: 8px;\n    border-radius: 20px;\n    font-size: 0.7rem;\n}\n\n.priority-high {\n    background-color: var(--color-red);\n    color: var(--text-black);\n}\n\n.priority-medium {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.priority-low {\n    background-color: var(--color-blue);\n    color: var(--text-black);\n}\n\n.due-date {\n    font-size: 0.7rem;\n}\n\n.checkbox-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.checkbox-item label {\n    margin-bottom: 0;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// {
//  type: div
//  class: class1 class2
//  id: id
//  attr: [[property1, value1], [property2, value2]]
//  text: 'teeeext'
// }

function createHtml(arr) {
  const element = document.createElement(arr.type);
  if (arr.class) arr.class.split(' ').forEach((c) => element.classList.add(c));
  if (arr.text) element.textContent = arr.text;
  if (arr.attr) arr.attr.forEach((row) => element.setAttribute(row[0], row[1]));
  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHtml);


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
let id = 0;
function idCounter() {
  id += 1;
  return id;
}

class Project {
  todoList = [];

  constructor(title) {
    this.ProjectTitle = title;
    this.ProjectId = idCounter();
  }

  addToList(obj) {
    this.todoList.push(obj);
  }

  removeFromList(todoId) {
    const idx = this.todoList.findIndex((todo) => todo.id === todoId);
    this.todoList.splice(idx, 1);
  }

  get id() {
    return this.ProjectId;
  }

  set id(value) {
    this.ProjectId = value;
  }

  get title() {
    return this.ProjectTitle;
  }

  set title(value) {
    this.ProjectTitle = value;
  }

  get list() {
    return this.todoList;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/modules/renderHtml.js":
/*!***********************************!*\
  !*** ./src/modules/renderHtml.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "renderProjectForm": () => (/* binding */ renderProjectForm),
/* harmony export */   "renderProjectPage": () => (/* binding */ renderProjectPage),
/* harmony export */   "renderTodoDetails": () => (/* binding */ renderTodoDetails),
/* harmony export */   "renderTodoForm": () => (/* binding */ renderTodoForm)
/* harmony export */ });
/* harmony import */ var _htmlGen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlGen */ "./src/modules/htmlGen.js");

// || Head
// Navigation (Project)
function renderNav(element, projectList) {
  const parent = element;
  parent.innerHTML = '';
  const ul = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'ul',
    class: 'project',
  });

  projectList.forEach((row) => {
    const li = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'li',
      attr: [['data-id', row.id]],
      class: 'nav-item',
    });
    const a = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'a',
      attr: [['href', '#']],
      text: row.title,
    });
    li.appendChild(a);
    ul.appendChild(li);
  });

  const nav = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({ type: 'nav' });
  const btn = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'button',
    class: 'btn btn-project',
    text: 'Add project',
  });

  nav.appendChild(ul);
  parent.appendChild(nav);
  parent.appendChild(btn);
}

// || Body
// Project form
function renderProjectForm(element, obj) {
  const parent = element;
  parent.innerHTML = '';

  const formText = {};
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

  // Create div header
  const divHead = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    class: 'pageHeader-heading',
  });
  const h2Head = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'h2',
    text: formText.h2,
  });
  divHead.appendChild(h2Head);
  parent.appendChild(divHead);

  // Form
  const form = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'form',
    attr: [['action', '']],
  });
  const formDiv = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({ type: 'div' });
  const label = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'label',
    attr: [['for', 'projectTitle']],
    text: formText.label,
  });
  const input = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'input',
    attr: [
      ['type', 'text'],
      ['name', 'projectTitle'],
      ['id', 'projectTitle'],
      ['value', formText.input],
    ],
  });
  const btn = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'button',
    text: formText.btn,
    class: 'btn',
    attr: [['id', 'submitProject']],
  });

  formDiv.appendChild(label);
  formDiv.appendChild(input);
  form.appendChild(formDiv);
  form.appendChild(btn);
  parent.appendChild(form);
}

// Todo form
function renderTodoForm(element, obj) {
  const parent = element;
  parent.innerHTML = '';

  const formText = {};
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

  parent.innerHTML = '';
  // Create div header
  const divHead = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    class: 'pageHeader-heading',
  });
  const h2Head = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'h2',
    text: formText.h2,
  });
  divHead.appendChild(h2Head);
  parent.appendChild(divHead);

  // form
  const form = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'form',
    attr: [['action', '']],
  });

  const formDiv = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({ type: 'div' });
  const label = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'label',
    attr: [['for', 'todoTitle']],
    text: formText.label,
  });
  const input = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'input',
    attr: [
      ['type', 'text'],
      ['name', 'todoTitle'],
      ['id', 'todoTitle'],
      ['value', formText.input],
    ],
  });

  formDiv.appendChild(label);
  formDiv.appendChild(input);
  form.appendChild(formDiv);

  const formDiv2 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({ type: 'div' });
  const label2 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'label',
    attr: [['for', 'todoDesc']],
    text: formText.label2,
  });
  const input2 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'textarea',
    text: formText.desc,
    attr: [
      ['name', 'desc'],
      ['id', 'todoDesc'],
      ['cols', '92'],
      ['rows', '10'],
    ],
  });

  formDiv2.appendChild(label2);
  formDiv2.appendChild(input2);
  form.appendChild(formDiv2);

  const formDiv3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({ type: 'div' });
  const label3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'label',
    attr: [['for', 'todoDate']],
    text: formText.label3,
  });
  const input3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'input',
    attr: [
      ['type', 'date'],
      ['name', 'todoDate'],
      ['id', 'todoDate'],
      ['value', formText.date],
    ],
  });

  formDiv3.appendChild(label3);
  formDiv3.appendChild(input3);
  form.appendChild(formDiv3);

  const formDiv4 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({ type: 'div' });
  const label4 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'label',
    attr: [['for', 'todoPriority']],
    text: formText.label4,
  });
  formDiv4.appendChild(label4);

  const formDivCheck1 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    class: 'checkbox-item',
  });
  const inputLow = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'input',
    attr: [
      ['type', 'radio'],
      ['id', 'lowPrio'],
      ['name', 'priority'],
      ['value', 'low'],
    ],
  });
  const labelLow = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'label',
    attr: [['for', 'lowPrio']],
    text: 'Low priority',
  });
  if (obj.priority === 'low') inputLow.setAttribute('checked', 'checked');

  formDivCheck1.appendChild(inputLow);
  formDivCheck1.appendChild(labelLow);
  formDiv4.appendChild(formDivCheck1);

  const formDivCheck2 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    class: 'checkbox-item',
  });
  const inputMed = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'input',
    attr: [
      ['type', 'radio'],
      ['id', 'medPrio'],
      ['name', 'priority'],
      ['value', 'medium'],
    ],
  });
  const labelMed = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'label',
    attr: [['for', 'medPrio']],
    text: 'Medium priority',
  });
  if (obj.priority === 'medium') inputMed.setAttribute('checked', 'checked');

  formDivCheck2.appendChild(inputMed);
  formDivCheck2.appendChild(labelMed);
  formDiv4.appendChild(formDivCheck2);

  const formDivCheck3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    class: 'checkbox-item',
  });
  const inputHigh = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'input',
    attr: [
      ['type', 'radio'],
      ['id', 'highPrio'],
      ['name', 'priority'],
      ['value', 'high'],
    ],
  });
  const labelHigh = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'label',
    attr: [['for', 'highPrio']],
    text: 'High priority',
  });
  if (obj.priority === 'high') inputHigh.setAttribute('checked', 'checked');

  formDivCheck3.appendChild(inputHigh);
  formDivCheck3.appendChild(labelHigh);
  formDiv4.appendChild(formDivCheck3);

  form.appendChild(formDiv4);

  const subBtn = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'button',
    text: formText.btn,
    class: 'btn',
    attr: [['id', 'submitTodo']],
  });
  form.appendChild(subBtn);
  if (obj) {
    const delBtn = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'button',
      text: 'Delete',
      class: 'btn btn-red',
      attr: [['id', 'deleteTodo']],
    });
    form.appendChild(delBtn);
  }
  parent.appendChild(form);
}

// Project / Todo page
function renderProjectPage(element, obj) {
  const parent = element;
  parent.innerHTML = '';

  // Create div header
  const divHead = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    class: 'pageHeader-heading',
  });
  const h2Head = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'h2',
    text: obj.title,
  });
  const projectEdit = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'button',
    class: 'btn',
    text: 'Edit project',
    attr: [['id', 'editProject']],
  });

  divHead.appendChild(h2Head);
  divHead.appendChild(projectEdit);
  parent.appendChild(divHead);

  const btnAdd = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'button',
    class: 'btn',
    text: 'Add Todo',
    attr: [['id', 'addTodo']],
  });
  parent.appendChild(btnAdd);

  const divBody = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    class: 'page-body',
  });

  const sortedTodo = obj.list.sort((last) => (last.done === true ? 1 : -1));

  sortedTodo.forEach((item) => {
    let divTodo = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'div',
      class: 'row-item',
      attr: [['data-id', item.id]],
    });

    if (item.done) {
      divTodo = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: 'div',
        class: 'row-item row-done',
        attr: [['data-id', item.id]],
      });
    }

    const itemHead = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'div',
      class: 'row-heading',
    });
    const divTitle = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'div',
      class: 'row-title',
    });

    let check = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'input',
      attr: [
        ['type', 'checkbox'],
        ['id', item.id],
      ],
      class: 'lg-check',
    });

    if (item.done) {
      check = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: 'input',
        attr: [
          ['type', 'checkbox'],
          ['id', item.id],
          ['checked', 'checked'],
        ],
        class: 'lg-check',
      });
    }

    const title = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'p',
      text: item.title,
    });
    const priority = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'span',
      text: item.priority,
      class: `priority priority-${item.priority}`,
    });
    const dueDate = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'span',
      text: item.date,
      class: 'due-date',
    });

    divTitle.appendChild(check);
    divTitle.appendChild(title);
    divTitle.appendChild(priority);

    itemHead.appendChild(divTitle);
    itemHead.appendChild(dueDate);
    divTodo.appendChild(itemHead);
    divBody.appendChild(divTodo);
  });

  parent.appendChild(divBody);
}

// Todo description
function renderTodoDetails(element, obj) {
  const parent = element;

  const div = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'div',
    class: 'row-details',
  });
  const desc = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'p',
    text: obj.description,
  });
  const btn = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'button',
    text: 'Edit Todo',
    class: 'btn btn-todo',
  });
  div.appendChild(desc);
  div.appendChild(btn);
  parent.appendChild(div);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNav);



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
let id = 0;
function idCounter() {
  id += 1;
  return id;
}

class Todo {
  constructor(title, description, date = false, priority = 'low') {
    this.todoId = idCounter();
    this.todoTitle = title;
    this.todoDescription = description;
    this.todoDate = date;
    this.todoPriority = priority;
    this.todoDone = false;
  }

  get id() {
    return this.todoId;
  }

  set id(value) {
    this.todoId = value;
  }

  get title() {
    return this.todoTitle;
  }

  set title(value) {
    this.todoTitle = value;
  }

  get description() {
    return this.todoDescription;
  }

  set description(value) {
    this.todoDescription = value;
  }

  get date() {
    return this.todoDate;
  }

  set date(value) {
    this.todoDate = value;
  }

  get priority() {
    return this.todoPriority;
  }

  set priority(value) {
    this.todoPriority = value;
  }

  get done() {
    return this.todoDone;
  }

  set done(bool) {
    this.todoDone = bool;
  }
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _renderHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderHtml */ "./src/modules/renderHtml.js");
/* eslint-disable no-param-reassign */




// Creates elements that are required for the page
const uiLoad = {
  projectList: [],
  init() {
    this.cacheDoom();
    this.showNav();
  },
  cacheDoom() {
    this.pageHeader = document.querySelector('.nav-start');
    this.pageBody = document.querySelector('#mainContent .container');
  },
  showNav() {
    (0,_renderHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(this.pageHeader, this.projectList);
    this.navEvent();
  },
  navEvent() {
    const btn = document.querySelector('.btn-project');
    btn.addEventListener('click', () => {
      this.showForm();
      this.removeActive();
    });

    const navItems = document.querySelectorAll('.project li');
    navItems.forEach((link) => {
      link.addEventListener('click', () => {
        const obj = this.getProjectByID(link.getAttribute('data-id'));
        this.setActive(obj);
        this.showPage(obj);
      });
    });
  },
  showForm(obj = false) {
    (0,_renderHtml__WEBPACK_IMPORTED_MODULE_2__.renderProjectForm)(this.pageBody, obj);

    if (obj) {
      this.submitFormEdit(obj);
    } else {
      this.submitFormNew();
    }
  },
  submitFormNew() {
    const subBtn = document.querySelector('#submitProject');
    subBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.create(document.querySelector('#projectTitle').value);
    });
  },
  submitFormEdit(obj) {
    const subBtn = document.querySelector('#submitProject');
    subBtn.addEventListener('click', (e) => {
      e.preventDefault();
      obj.title = document.querySelector('#projectTitle').value;
      this.showNav();
      this.setActive(obj);
      this.showPage(obj);
    });
  },
  create(title) {
    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](title);
    this.projectList.push(newProject);
    this.showNav();
  },
  setActive(obj) {
    const currentActive = document.querySelector('.active');
    if (currentActive) this.removeActive();

    const target = document.querySelector(`.project li[data-id="${obj.id}"]`);
    target.classList.add('active');
  },
  removeActive() {
    const currentActive = document.querySelector('.active');
    currentActive.classList.remove('active');
  },
  getProjectByID(projectId) {
    if (typeof projectId === 'string') projectId = parseInt(projectId, 10);
    const idx = this.projectList.findIndex(
      (project) => project.id === projectId,
    );
    return this.projectList[idx];
  },
  getTodoByID(todoId, obj) {
    if (typeof todoId === 'string') todoId = parseInt(todoId, 10);
    const idx = obj.list.findIndex((todo) => todo.id === todoId);
    return obj.list[idx];
  },
  showPage(obj) {
    (0,_renderHtml__WEBPACK_IMPORTED_MODULE_2__.renderProjectPage)(this.pageBody, obj);

    this.pageEvent(obj);
  },
  pageEvent(obj) {
    const editProject = document.querySelector('#editProject');
    editProject.addEventListener('click', () => {
      this.showForm(obj);
    });

    const addTodo = document.querySelector('#addTodo');
    addTodo.addEventListener('click', () => {
      this.showFormTodo();
    });

    const showTodo = document.querySelectorAll('.row-item');
    showTodo.forEach((item) => {
      item.addEventListener('click', () => {
        this.showTodoDetails(item, obj.id);
      });
    });

    const checkbox = document.querySelectorAll('.lg-check');
    checkbox.forEach((box) => {
      box.addEventListener('change', () => {
        const todoObj = this.getTodoByID(box.getAttribute('id'), obj);
        if (box.checked) {
          todoObj.done = true;
        } else {
          todoObj.done = false;
        }
        this.showPage(obj);
      });
    });
  },
  showFormTodo(obj = false) {
    (0,_renderHtml__WEBPACK_IMPORTED_MODULE_2__.renderTodoForm)(this.pageBody, obj);

    if (obj) {
      this.submitTodoFormEdit(obj);
    } else {
      this.submitTodoFormNew();
    }
  },
  submitTodoFormNew() {
    const subBtn = document.querySelector('#submitTodo');
    subBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const title = document.querySelector('#todoTitle').value;
      const description = document.querySelector('#todoDesc').value;
      const date = document.querySelector('#todoDate').value;
      const priority = document.querySelector(
        'input[name="priority"]:checked',
      ).value;

      this.createTodo(title, description, date, priority);
    });
  },
  submitTodoFormEdit(obj) {
    const subBtn = document.querySelector('#submitTodo');
    const delBtn = document.querySelector('#deleteTodo');

    delBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = document
        .querySelector('.active')
        .getAttribute('data-id');
      const projectObj = this.getProjectByID(projectId);
      projectObj.removeFromList(obj.id);
      this.showPage(projectObj);
    });

    subBtn.addEventListener('click', (e) => {
      e.preventDefault();

      obj.title = document.querySelector('#todoTitle').value;
      obj.description = document.querySelector('#todoDesc').value;
      obj.date = document.querySelector('#todoDate').value;
      obj.priority = document.querySelector(
        'input[name="priority"]:checked',
      ).value;

      const projectId = document
        .querySelector('.active')
        .getAttribute('data-id');
      const projectObj = this.getProjectByID(projectId);
      this.showPage(projectObj);
    });
  },
  createTodo(title, description, date, priority) {
    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, date, priority);

    const projectId = document.querySelector('.active').getAttribute('data-id');
    const projectObj = this.getProjectByID(projectId);

    projectObj.addToList(newTodo);
    this.showPage(projectObj);
  },
  showTodoDetails(item, projectId) {
    const id = item.getAttribute('data-id');
    const projectObj = this.getProjectByID(projectId);
    const todoObj = this.getTodoByID(id, projectObj);

    const divInfo = document.querySelector('.row-details');
    if (divInfo) divInfo.remove();

    (0,_renderHtml__WEBPACK_IMPORTED_MODULE_2__.renderTodoDetails)(item, todoObj);

    this.editTodoEvent(projectObj, todoObj);
  },
  editTodoEvent(project, todo) {
    const btn = document.querySelector('.btn-todo');
    if (btn) {
      btn.addEventListener('click', () => {
        this.showFormTodo(todo);
      });
    }
  },
};

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
const newProject = _modules_uiLoad__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectByID(1);
_modules_uiLoad__WEBPACK_IMPORTED_MODULE_2__["default"].setActive(newProject);
_modules_uiLoad__WEBPACK_IMPORTED_MODULE_2__["default"].showPage(newProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNBaUM7QUFDYTtBQUNSOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxhQUFhLGdEQUFVO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUFXOztBQUVYO0FBQ0EsOERBQWE7QUFDYixtQkFBbUIsc0VBQXFCO0FBQ3hDLGlFQUFnQjtBQUNoQixnRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldC9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXQvc3R5bGUvc3R5bGUuY3NzPzY4OWQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9odG1sR2VuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVySHRtbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpTG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWNvbG9yLWJsdWUtbDogcmdiKDIzIDE5NSAxNzgpO1xcbiAgICAtLWNvbG9yLXdoaXRlOiByZ2IoMjU0IDI0OSAyMzkpO1xcbiAgICAtLWNvbG9yLXllbGxvdzogcmdiKDI1NSAyMDMgMTE5KTtcXG4gICAgLS1jb2xvci1ibHVlOiByZ2IoMzQgMTI0IDE1Nyk7XFxuICAgIC0tY29sb3ItcmVkOiByZ2IoMjU0IDEwOSAxMTUpO1xcbiAgICAtLXRleHQtYmx1ZTogcmdiKDE5IDY4IDg2KTtcXG4gICAgLS10ZXh0LWJsYWNrOiByZ2IoMTMgMTIgMTIpO1xcbiAgICAtLXRleHQtd2hpdGU6IHJnYigyNTUgMjU1IDI1NSk7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmxhYmVsLCBcXG5pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuaW5wdXQubGctY2hlY2sge1xcbiAgICB3aWR0aCA6IDE2cHg7XFxuICAgIGhlaWdodCA6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDAgMjRweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxM3B4IDFweCByZ2IoMCAwIDAgLyAyMCUpO1xcbn1cXG5cXG4ubmF2LXN0YXJ0IHtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QgYSB7XFxuICAgIHBhZGRpbmc6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJvamVjdCBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJvamVjdCAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4ucHJvamVjdCAuYWN0aXZlIGEge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibHVlKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnVzZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnVzZXIgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udXNlciBpbWcge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXllbGxvdyk7XFxufVxcblxcbi5idG4tcmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIxMSwgMTQ0KTtcXG59XFxuXFxuLmJ0bi1yZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCA5MCwgOTYpO1xcbn1cXG5cXG4uYnRuLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlLWwpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5idG4tcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMjE4LCAyMDApO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIG1pbi13aWR0aDogNjUwcHg7XFxufVxcblxcbi5jb250YWluZXIgaDIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi5jb250YWluZXIgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnBhZ2VIZWFkZXItaGVhZGluZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBhZ2UtYm9keSB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi5yb3ctaXRlbSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ibHVlKTtcXG59XFxuXFxuLnJvdy1kb25lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5yb3ctaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdy10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93LWRldGFpbHMge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yb3ctZGV0YWlscyA+IHAge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxufVxcblxcbi5yb3ctZGV0YWlscyAuYnRuIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5jaGVja2JveC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1pdGVtIGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0L3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtJQUNmLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItYmx1ZS1sOiByZ2IoMjMgMTk1IDE3OCk7XFxuICAgIC0tY29sb3Itd2hpdGU6IHJnYigyNTQgMjQ5IDIzOSk7XFxuICAgIC0tY29sb3IteWVsbG93OiByZ2IoMjU1IDIwMyAxMTkpO1xcbiAgICAtLWNvbG9yLWJsdWU6IHJnYigzNCAxMjQgMTU3KTtcXG4gICAgLS1jb2xvci1yZWQ6IHJnYigyNTQgMTA5IDExNSk7XFxuICAgIC0tdGV4dC1ibHVlOiByZ2IoMTkgNjggODYpO1xcbiAgICAtLXRleHQtYmxhY2s6IHJnYigxMyAxMiAxMik7XFxuICAgIC0tdGV4dC13aGl0ZTogcmdiKDI1NSAyNTUgMjU1KTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxubGFiZWwsIFxcbmlucHV0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dC5sZy1jaGVjayB7XFxuICAgIHdpZHRoIDogMTZweDtcXG4gICAgaGVpZ2h0IDogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjRweDtcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDEzcHggMXB4IHJnYigwIDAgMCAvIDIwJSk7XFxufVxcblxcbi5uYXYtc3RhcnQge1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdCBhIHtcXG4gICAgcGFkZGluZzogMS4zcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wcm9qZWN0IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5wcm9qZWN0IC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5wcm9qZWN0IC5hY3RpdmUgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4udXNlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udXNlciBhIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi51c2VyIGltZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IteWVsbG93KTtcXG59XFxuXFxuLmJ0bi1yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjExLCAxNDQpO1xcbn1cXG5cXG4uYnRuLXJlZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDkwLCA5Nik7XFxufVxcblxcbi5idG4tcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUtbCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLmJ0bi1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAyMTgsIDIwMCk7XFxufVxcblxcbm1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgbWluLXdpZHRoOiA2NTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciBoMiB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG59XFxuXFxuLmNvbnRhaW5lciBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4ucGFnZUhlYWRlci1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGFnZS1ib2R5IHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLnJvdy1pdGVtIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA4cHggMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJsdWUpO1xcbn1cXG5cXG4ucm93LWRvbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnJvdy1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3ctZGV0YWlscyB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnJvdy1kZXRhaWxzID4gcCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLnJvdy1kZXRhaWxzIC5idG4ge1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLmNoZWNrYm94LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWl0ZW0gbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHtcbi8vICB0eXBlOiBkaXZcbi8vICBjbGFzczogY2xhc3MxIGNsYXNzMlxuLy8gIGlkOiBpZFxuLy8gIGF0dHI6IFtbcHJvcGVydHkxLCB2YWx1ZTFdLCBbcHJvcGVydHkyLCB2YWx1ZTJdXVxuLy8gIHRleHQ6ICd0ZWVlZXh0J1xuLy8gfVxuXG5mdW5jdGlvbiBjcmVhdGVIdG1sKGFycikge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcnIudHlwZSk7XG4gIGlmIChhcnIuY2xhc3MpIGFyci5jbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGMpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjKSk7XG4gIGlmIChhcnIudGV4dCkgZWxlbWVudC50ZXh0Q29udGVudCA9IGFyci50ZXh0O1xuICBpZiAoYXJyLmF0dHIpIGFyci5hdHRyLmZvckVhY2goKHJvdykgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUocm93WzBdLCByb3dbMV0pKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUh0bWw7XG4iLCJsZXQgaWQgPSAwO1xuZnVuY3Rpb24gaWRDb3VudGVyKCkge1xuICBpZCArPSAxO1xuICByZXR1cm4gaWQ7XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICB0b2RvTGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy5Qcm9qZWN0VGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLlByb2plY3RJZCA9IGlkQ291bnRlcigpO1xuICB9XG5cbiAgYWRkVG9MaXN0KG9iaikge1xuICAgIHRoaXMudG9kb0xpc3QucHVzaChvYmopO1xuICB9XG5cbiAgcmVtb3ZlRnJvbUxpc3QodG9kb0lkKSB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy50b2RvTGlzdC5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG4gICAgdGhpcy50b2RvTGlzdC5zcGxpY2UoaWR4LCAxKTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5Qcm9qZWN0SWQ7XG4gIH1cblxuICBzZXQgaWQodmFsdWUpIHtcbiAgICB0aGlzLlByb2plY3RJZCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLlByb2plY3RUaXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuUHJvamVjdFRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy50b2RvTGlzdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiaW1wb3J0IGNyZWF0ZUh0bWwgZnJvbSAnLi9odG1sR2VuJztcbi8vIHx8IEhlYWRcbi8vIE5hdmlnYXRpb24gKFByb2plY3QpXG5mdW5jdGlvbiByZW5kZXJOYXYoZWxlbWVudCwgcHJvamVjdExpc3QpIHtcbiAgY29uc3QgcGFyZW50ID0gZWxlbWVudDtcbiAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICBjb25zdCB1bCA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICd1bCcsXG4gICAgY2xhc3M6ICdwcm9qZWN0JyxcbiAgfSk7XG5cbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgY29uc3QgbGkgPSBjcmVhdGVIdG1sKHtcbiAgICAgIHR5cGU6ICdsaScsXG4gICAgICBhdHRyOiBbWydkYXRhLWlkJywgcm93LmlkXV0sXG4gICAgICBjbGFzczogJ25hdi1pdGVtJyxcbiAgICB9KTtcbiAgICBjb25zdCBhID0gY3JlYXRlSHRtbCh7XG4gICAgICB0eXBlOiAnYScsXG4gICAgICBhdHRyOiBbWydocmVmJywgJyMnXV0sXG4gICAgICB0ZXh0OiByb3cudGl0bGUsXG4gICAgfSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcblxuICBjb25zdCBuYXYgPSBjcmVhdGVIdG1sKHsgdHlwZTogJ25hdicgfSk7XG4gIGNvbnN0IGJ0biA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIGNsYXNzOiAnYnRuIGJ0bi1wcm9qZWN0JyxcbiAgICB0ZXh0OiAnQWRkIHByb2plY3QnLFxuICB9KTtcblxuICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGJ0bik7XG59XG5cbi8vIHx8IEJvZHlcbi8vIFByb2plY3QgZm9ybVxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEZvcm0oZWxlbWVudCwgb2JqKSB7XG4gIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQ7XG4gIHBhcmVudC5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBmb3JtVGV4dCA9IHt9O1xuICBpZiAob2JqKSB7XG4gICAgZm9ybVRleHQuaDIgPSBgRWRpdCAke29iai50aXRsZX1gO1xuICAgIGZvcm1UZXh0LmxhYmVsID0gJ1RpdGxlJztcbiAgICBmb3JtVGV4dC5pbnB1dCA9IG9iai50aXRsZTtcbiAgICBmb3JtVGV4dC5idG4gPSAnVXBkYXRlJztcbiAgfSBlbHNlIHtcbiAgICBmb3JtVGV4dC5oMiA9ICdBZGQgbmV3IFByb2plY3QnO1xuICAgIGZvcm1UZXh0LmxhYmVsID0gJ1RpdGxlJztcbiAgICBmb3JtVGV4dC5pbnB1dCA9ICcnO1xuICAgIGZvcm1UZXh0LmJ0biA9ICdBZGQnO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGRpdiBoZWFkZXJcbiAgY29uc3QgZGl2SGVhZCA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIGNsYXNzOiAncGFnZUhlYWRlci1oZWFkaW5nJyxcbiAgfSk7XG4gIGNvbnN0IGgySGVhZCA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdoMicsXG4gICAgdGV4dDogZm9ybVRleHQuaDIsXG4gIH0pO1xuICBkaXZIZWFkLmFwcGVuZENoaWxkKGgySGVhZCk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChkaXZIZWFkKTtcblxuICAvLyBGb3JtXG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVIdG1sKHtcbiAgICB0eXBlOiAnZm9ybScsXG4gICAgYXR0cjogW1snYWN0aW9uJywgJyddXSxcbiAgfSk7XG4gIGNvbnN0IGZvcm1EaXYgPSBjcmVhdGVIdG1sKHsgdHlwZTogJ2RpdicgfSk7XG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlSHRtbCh7XG4gICAgdHlwZTogJ2xhYmVsJyxcbiAgICBhdHRyOiBbWydmb3InLCAncHJvamVjdFRpdGxlJ11dLFxuICAgIHRleHQ6IGZvcm1UZXh0LmxhYmVsLFxuICB9KTtcbiAgY29uc3QgaW5wdXQgPSBjcmVhdGVIdG1sKHtcbiAgICB0eXBlOiAnaW5wdXQnLFxuICAgIGF0dHI6IFtcbiAgICAgIFsndHlwZScsICd0ZXh0J10sXG4gICAgICBbJ25hbWUnLCAncHJvamVjdFRpdGxlJ10sXG4gICAgICBbJ2lkJywgJ3Byb2plY3RUaXRsZSddLFxuICAgICAgWyd2YWx1ZScsIGZvcm1UZXh0LmlucHV0XSxcbiAgICBdLFxuICB9KTtcbiAgY29uc3QgYnRuID0gY3JlYXRlSHRtbCh7XG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgdGV4dDogZm9ybVRleHQuYnRuLFxuICAgIGNsYXNzOiAnYnRuJyxcbiAgICBhdHRyOiBbWydpZCcsICdzdWJtaXRQcm9qZWN0J11dLFxuICB9KTtcblxuICBmb3JtRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgZm9ybURpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG4vLyBUb2RvIGZvcm1cbmZ1bmN0aW9uIHJlbmRlclRvZG9Gb3JtKGVsZW1lbnQsIG9iaikge1xuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50O1xuICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgZm9ybVRleHQgPSB7fTtcbiAgaWYgKG9iaikge1xuICAgIGZvcm1UZXh0LmgyID0gYEVkaXQgJHtvYmoudGl0bGV9YDtcbiAgICBmb3JtVGV4dC5sYWJlbCA9ICdUaXRsZSc7XG4gICAgZm9ybVRleHQuaW5wdXQgPSBvYmoudGl0bGU7XG4gICAgZm9ybVRleHQubGFiZWwyID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBmb3JtVGV4dC5kZXNjID0gb2JqLmRlc2NyaXB0aW9uO1xuICAgIGZvcm1UZXh0LmxhYmVsMyA9ICdEdWUgZGF0ZSc7XG4gICAgZm9ybVRleHQuZGF0ZSA9IG9iai5kYXRlO1xuICAgIGZvcm1UZXh0LmxhYmVsNCA9ICdQcmlvcml0eSc7XG4gICAgZm9ybVRleHQucHJpbyA9IG9iai5wcmlvcml0eTtcbiAgICBmb3JtVGV4dC5idG4gPSAnVXBkYXRlJztcbiAgfSBlbHNlIHtcbiAgICBmb3JtVGV4dC5oMiA9ICdDcmVhdGUgbmV3IFRvZG8nO1xuICAgIGZvcm1UZXh0LmxhYmVsID0gJ1RpdGxlJztcbiAgICBmb3JtVGV4dC5pbnB1dCA9ICcnO1xuICAgIGZvcm1UZXh0LmxhYmVsMiA9ICdEZXNjcmlwdGlvbic7XG4gICAgZm9ybVRleHQuZGVzYyA9ICcnO1xuICAgIGZvcm1UZXh0LmxhYmVsMyA9ICdEdWUgZGF0ZSc7XG4gICAgZm9ybVRleHQuZGF0ZSA9ICcnO1xuICAgIGZvcm1UZXh0LmxhYmVsNCA9ICdQcmlvcml0eSc7XG4gICAgZm9ybVRleHQucHJpbyA9ICcnO1xuICAgIGZvcm1UZXh0LmJ0biA9ICdBZGQnO1xuICB9XG5cbiAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAvLyBDcmVhdGUgZGl2IGhlYWRlclxuICBjb25zdCBkaXZIZWFkID0gY3JlYXRlSHRtbCh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3M6ICdwYWdlSGVhZGVyLWhlYWRpbmcnLFxuICB9KTtcbiAgY29uc3QgaDJIZWFkID0gY3JlYXRlSHRtbCh7XG4gICAgdHlwZTogJ2gyJyxcbiAgICB0ZXh0OiBmb3JtVGV4dC5oMixcbiAgfSk7XG4gIGRpdkhlYWQuYXBwZW5kQ2hpbGQoaDJIZWFkKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGRpdkhlYWQpO1xuXG4gIC8vIGZvcm1cbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdmb3JtJyxcbiAgICBhdHRyOiBbWydhY3Rpb24nLCAnJ11dLFxuICB9KTtcblxuICBjb25zdCBmb3JtRGl2ID0gY3JlYXRlSHRtbCh7IHR5cGU6ICdkaXYnIH0pO1xuICBjb25zdCBsYWJlbCA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdsYWJlbCcsXG4gICAgYXR0cjogW1snZm9yJywgJ3RvZG9UaXRsZSddXSxcbiAgICB0ZXh0OiBmb3JtVGV4dC5sYWJlbCxcbiAgfSk7XG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlSHRtbCh7XG4gICAgdHlwZTogJ2lucHV0JyxcbiAgICBhdHRyOiBbXG4gICAgICBbJ3R5cGUnLCAndGV4dCddLFxuICAgICAgWyduYW1lJywgJ3RvZG9UaXRsZSddLFxuICAgICAgWydpZCcsICd0b2RvVGl0bGUnXSxcbiAgICAgIFsndmFsdWUnLCBmb3JtVGV4dC5pbnB1dF0sXG4gICAgXSxcbiAgfSk7XG5cbiAgZm9ybURpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuXG4gIGNvbnN0IGZvcm1EaXYyID0gY3JlYXRlSHRtbCh7IHR5cGU6ICdkaXYnIH0pO1xuICBjb25zdCBsYWJlbDIgPSBjcmVhdGVIdG1sKHtcbiAgICB0eXBlOiAnbGFiZWwnLFxuICAgIGF0dHI6IFtbJ2ZvcicsICd0b2RvRGVzYyddXSxcbiAgICB0ZXh0OiBmb3JtVGV4dC5sYWJlbDIsXG4gIH0pO1xuICBjb25zdCBpbnB1dDIgPSBjcmVhdGVIdG1sKHtcbiAgICB0eXBlOiAndGV4dGFyZWEnLFxuICAgIHRleHQ6IGZvcm1UZXh0LmRlc2MsXG4gICAgYXR0cjogW1xuICAgICAgWyduYW1lJywgJ2Rlc2MnXSxcbiAgICAgIFsnaWQnLCAndG9kb0Rlc2MnXSxcbiAgICAgIFsnY29scycsICc5MiddLFxuICAgICAgWydyb3dzJywgJzEwJ10sXG4gICAgXSxcbiAgfSk7XG5cbiAgZm9ybURpdjIuYXBwZW5kQ2hpbGQobGFiZWwyKTtcbiAgZm9ybURpdjIuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2Mik7XG5cbiAgY29uc3QgZm9ybURpdjMgPSBjcmVhdGVIdG1sKHsgdHlwZTogJ2RpdicgfSk7XG4gIGNvbnN0IGxhYmVsMyA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdsYWJlbCcsXG4gICAgYXR0cjogW1snZm9yJywgJ3RvZG9EYXRlJ11dLFxuICAgIHRleHQ6IGZvcm1UZXh0LmxhYmVsMyxcbiAgfSk7XG4gIGNvbnN0IGlucHV0MyA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgYXR0cjogW1xuICAgICAgWyd0eXBlJywgJ2RhdGUnXSxcbiAgICAgIFsnbmFtZScsICd0b2RvRGF0ZSddLFxuICAgICAgWydpZCcsICd0b2RvRGF0ZSddLFxuICAgICAgWyd2YWx1ZScsIGZvcm1UZXh0LmRhdGVdLFxuICAgIF0sXG4gIH0pO1xuXG4gIGZvcm1EaXYzLmFwcGVuZENoaWxkKGxhYmVsMyk7XG4gIGZvcm1EaXYzLmFwcGVuZENoaWxkKGlucHV0Myk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdjMpO1xuXG4gIGNvbnN0IGZvcm1EaXY0ID0gY3JlYXRlSHRtbCh7IHR5cGU6ICdkaXYnIH0pO1xuICBjb25zdCBsYWJlbDQgPSBjcmVhdGVIdG1sKHtcbiAgICB0eXBlOiAnbGFiZWwnLFxuICAgIGF0dHI6IFtbJ2ZvcicsICd0b2RvUHJpb3JpdHknXV0sXG4gICAgdGV4dDogZm9ybVRleHQubGFiZWw0LFxuICB9KTtcbiAgZm9ybURpdjQuYXBwZW5kQ2hpbGQobGFiZWw0KTtcblxuICBjb25zdCBmb3JtRGl2Q2hlY2sxID0gY3JlYXRlSHRtbCh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3M6ICdjaGVja2JveC1pdGVtJyxcbiAgfSk7XG4gIGNvbnN0IGlucHV0TG93ID0gY3JlYXRlSHRtbCh7XG4gICAgdHlwZTogJ2lucHV0JyxcbiAgICBhdHRyOiBbXG4gICAgICBbJ3R5cGUnLCAncmFkaW8nXSxcbiAgICAgIFsnaWQnLCAnbG93UHJpbyddLFxuICAgICAgWyduYW1lJywgJ3ByaW9yaXR5J10sXG4gICAgICBbJ3ZhbHVlJywgJ2xvdyddLFxuICAgIF0sXG4gIH0pO1xuICBjb25zdCBsYWJlbExvdyA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdsYWJlbCcsXG4gICAgYXR0cjogW1snZm9yJywgJ2xvd1ByaW8nXV0sXG4gICAgdGV4dDogJ0xvdyBwcmlvcml0eScsXG4gIH0pO1xuICBpZiAob2JqLnByaW9yaXR5ID09PSAnbG93JykgaW5wdXRMb3cuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcblxuICBmb3JtRGl2Q2hlY2sxLmFwcGVuZENoaWxkKGlucHV0TG93KTtcbiAgZm9ybURpdkNoZWNrMS5hcHBlbmRDaGlsZChsYWJlbExvdyk7XG4gIGZvcm1EaXY0LmFwcGVuZENoaWxkKGZvcm1EaXZDaGVjazEpO1xuXG4gIGNvbnN0IGZvcm1EaXZDaGVjazIgPSBjcmVhdGVIdG1sKHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICBjbGFzczogJ2NoZWNrYm94LWl0ZW0nLFxuICB9KTtcbiAgY29uc3QgaW5wdXRNZWQgPSBjcmVhdGVIdG1sKHtcbiAgICB0eXBlOiAnaW5wdXQnLFxuICAgIGF0dHI6IFtcbiAgICAgIFsndHlwZScsICdyYWRpbyddLFxuICAgICAgWydpZCcsICdtZWRQcmlvJ10sXG4gICAgICBbJ25hbWUnLCAncHJpb3JpdHknXSxcbiAgICAgIFsndmFsdWUnLCAnbWVkaXVtJ10sXG4gICAgXSxcbiAgfSk7XG4gIGNvbnN0IGxhYmVsTWVkID0gY3JlYXRlSHRtbCh7XG4gICAgdHlwZTogJ2xhYmVsJyxcbiAgICBhdHRyOiBbWydmb3InLCAnbWVkUHJpbyddXSxcbiAgICB0ZXh0OiAnTWVkaXVtIHByaW9yaXR5JyxcbiAgfSk7XG4gIGlmIChvYmoucHJpb3JpdHkgPT09ICdtZWRpdW0nKSBpbnB1dE1lZC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuXG4gIGZvcm1EaXZDaGVjazIuYXBwZW5kQ2hpbGQoaW5wdXRNZWQpO1xuICBmb3JtRGl2Q2hlY2syLmFwcGVuZENoaWxkKGxhYmVsTWVkKTtcbiAgZm9ybURpdjQuYXBwZW5kQ2hpbGQoZm9ybURpdkNoZWNrMik7XG5cbiAgY29uc3QgZm9ybURpdkNoZWNrMyA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIGNsYXNzOiAnY2hlY2tib3gtaXRlbScsXG4gIH0pO1xuICBjb25zdCBpbnB1dEhpZ2ggPSBjcmVhdGVIdG1sKHtcbiAgICB0eXBlOiAnaW5wdXQnLFxuICAgIGF0dHI6IFtcbiAgICAgIFsndHlwZScsICdyYWRpbyddLFxuICAgICAgWydpZCcsICdoaWdoUHJpbyddLFxuICAgICAgWyduYW1lJywgJ3ByaW9yaXR5J10sXG4gICAgICBbJ3ZhbHVlJywgJ2hpZ2gnXSxcbiAgICBdLFxuICB9KTtcbiAgY29uc3QgbGFiZWxIaWdoID0gY3JlYXRlSHRtbCh7XG4gICAgdHlwZTogJ2xhYmVsJyxcbiAgICBhdHRyOiBbWydmb3InLCAnaGlnaFByaW8nXV0sXG4gICAgdGV4dDogJ0hpZ2ggcHJpb3JpdHknLFxuICB9KTtcbiAgaWYgKG9iai5wcmlvcml0eSA9PT0gJ2hpZ2gnKSBpbnB1dEhpZ2guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcblxuICBmb3JtRGl2Q2hlY2szLmFwcGVuZENoaWxkKGlucHV0SGlnaCk7XG4gIGZvcm1EaXZDaGVjazMuYXBwZW5kQ2hpbGQobGFiZWxIaWdoKTtcbiAgZm9ybURpdjQuYXBwZW5kQ2hpbGQoZm9ybURpdkNoZWNrMyk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2NCk7XG5cbiAgY29uc3Qgc3ViQnRuID0gY3JlYXRlSHRtbCh7XG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgdGV4dDogZm9ybVRleHQuYnRuLFxuICAgIGNsYXNzOiAnYnRuJyxcbiAgICBhdHRyOiBbWydpZCcsICdzdWJtaXRUb2RvJ11dLFxuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJCdG4pO1xuICBpZiAob2JqKSB7XG4gICAgY29uc3QgZGVsQnRuID0gY3JlYXRlSHRtbCh7XG4gICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIHRleHQ6ICdEZWxldGUnLFxuICAgICAgY2xhc3M6ICdidG4gYnRuLXJlZCcsXG4gICAgICBhdHRyOiBbWydpZCcsICdkZWxldGVUb2RvJ11dLFxuICAgIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgfVxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG59XG5cbi8vIFByb2plY3QgLyBUb2RvIHBhZ2VcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RQYWdlKGVsZW1lbnQsIG9iaikge1xuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50O1xuICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgLy8gQ3JlYXRlIGRpdiBoZWFkZXJcbiAgY29uc3QgZGl2SGVhZCA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIGNsYXNzOiAncGFnZUhlYWRlci1oZWFkaW5nJyxcbiAgfSk7XG4gIGNvbnN0IGgySGVhZCA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdoMicsXG4gICAgdGV4dDogb2JqLnRpdGxlLFxuICB9KTtcbiAgY29uc3QgcHJvamVjdEVkaXQgPSBjcmVhdGVIdG1sKHtcbiAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICBjbGFzczogJ2J0bicsXG4gICAgdGV4dDogJ0VkaXQgcHJvamVjdCcsXG4gICAgYXR0cjogW1snaWQnLCAnZWRpdFByb2plY3QnXV0sXG4gIH0pO1xuXG4gIGRpdkhlYWQuYXBwZW5kQ2hpbGQoaDJIZWFkKTtcbiAgZGl2SGVhZC5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdCk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChkaXZIZWFkKTtcblxuICBjb25zdCBidG5BZGQgPSBjcmVhdGVIdG1sKHtcbiAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICBjbGFzczogJ2J0bicsXG4gICAgdGV4dDogJ0FkZCBUb2RvJyxcbiAgICBhdHRyOiBbWydpZCcsICdhZGRUb2RvJ11dLFxuICB9KTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGJ0bkFkZCk7XG5cbiAgY29uc3QgZGl2Qm9keSA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIGNsYXNzOiAncGFnZS1ib2R5JyxcbiAgfSk7XG5cbiAgY29uc3Qgc29ydGVkVG9kbyA9IG9iai5saXN0LnNvcnQoKGxhc3QpID0+IChsYXN0LmRvbmUgPT09IHRydWUgPyAxIDogLTEpKTtcblxuICBzb3J0ZWRUb2RvLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBsZXQgZGl2VG9kbyA9IGNyZWF0ZUh0bWwoe1xuICAgICAgdHlwZTogJ2RpdicsXG4gICAgICBjbGFzczogJ3Jvdy1pdGVtJyxcbiAgICAgIGF0dHI6IFtbJ2RhdGEtaWQnLCBpdGVtLmlkXV0sXG4gICAgfSk7XG5cbiAgICBpZiAoaXRlbS5kb25lKSB7XG4gICAgICBkaXZUb2RvID0gY3JlYXRlSHRtbCh7XG4gICAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgICBjbGFzczogJ3Jvdy1pdGVtIHJvdy1kb25lJyxcbiAgICAgICAgYXR0cjogW1snZGF0YS1pZCcsIGl0ZW0uaWRdXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1IZWFkID0gY3JlYXRlSHRtbCh7XG4gICAgICB0eXBlOiAnZGl2JyxcbiAgICAgIGNsYXNzOiAncm93LWhlYWRpbmcnLFxuICAgIH0pO1xuICAgIGNvbnN0IGRpdlRpdGxlID0gY3JlYXRlSHRtbCh7XG4gICAgICB0eXBlOiAnZGl2JyxcbiAgICAgIGNsYXNzOiAncm93LXRpdGxlJyxcbiAgICB9KTtcblxuICAgIGxldCBjaGVjayA9IGNyZWF0ZUh0bWwoe1xuICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgIGF0dHI6IFtcbiAgICAgICAgWyd0eXBlJywgJ2NoZWNrYm94J10sXG4gICAgICAgIFsnaWQnLCBpdGVtLmlkXSxcbiAgICAgIF0sXG4gICAgICBjbGFzczogJ2xnLWNoZWNrJyxcbiAgICB9KTtcblxuICAgIGlmIChpdGVtLmRvbmUpIHtcbiAgICAgIGNoZWNrID0gY3JlYXRlSHRtbCh7XG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIGF0dHI6IFtcbiAgICAgICAgICBbJ3R5cGUnLCAnY2hlY2tib3gnXSxcbiAgICAgICAgICBbJ2lkJywgaXRlbS5pZF0sXG4gICAgICAgICAgWydjaGVja2VkJywgJ2NoZWNrZWQnXSxcbiAgICAgICAgXSxcbiAgICAgICAgY2xhc3M6ICdsZy1jaGVjaycsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWwoe1xuICAgICAgdHlwZTogJ3AnLFxuICAgICAgdGV4dDogaXRlbS50aXRsZSxcbiAgICB9KTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZUh0bWwoe1xuICAgICAgdHlwZTogJ3NwYW4nLFxuICAgICAgdGV4dDogaXRlbS5wcmlvcml0eSxcbiAgICAgIGNsYXNzOiBgcHJpb3JpdHkgcHJpb3JpdHktJHtpdGVtLnByaW9yaXR5fWAsXG4gICAgfSk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGNyZWF0ZUh0bWwoe1xuICAgICAgdHlwZTogJ3NwYW4nLFxuICAgICAgdGV4dDogaXRlbS5kYXRlLFxuICAgICAgY2xhc3M6ICdkdWUtZGF0ZScsXG4gICAgfSk7XG5cbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgZGl2VGl0bGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIGl0ZW1IZWFkLmFwcGVuZENoaWxkKGRpdlRpdGxlKTtcbiAgICBpdGVtSGVhZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBkaXZUb2RvLmFwcGVuZENoaWxkKGl0ZW1IZWFkKTtcbiAgICBkaXZCb2R5LmFwcGVuZENoaWxkKGRpdlRvZG8pO1xuICB9KTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2Qm9keSk7XG59XG5cbi8vIFRvZG8gZGVzY3JpcHRpb25cbmZ1bmN0aW9uIHJlbmRlclRvZG9EZXRhaWxzKGVsZW1lbnQsIG9iaikge1xuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50O1xuXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdkaXYnLFxuICAgIGNsYXNzOiAncm93LWRldGFpbHMnLFxuICB9KTtcbiAgY29uc3QgZGVzYyA9IGNyZWF0ZUh0bWwoe1xuICAgIHR5cGU6ICdwJyxcbiAgICB0ZXh0OiBvYmouZGVzY3JpcHRpb24sXG4gIH0pO1xuICBjb25zdCBidG4gPSBjcmVhdGVIdG1sKHtcbiAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICB0ZXh0OiAnRWRpdCBUb2RvJyxcbiAgICBjbGFzczogJ2J0biBidG4tdG9kbycsXG4gIH0pO1xuICBkaXYuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTmF2O1xuZXhwb3J0IHtcbiAgcmVuZGVyUHJvamVjdEZvcm0sXG4gIHJlbmRlclRvZG9Gb3JtLFxuICByZW5kZXJQcm9qZWN0UGFnZSxcbiAgcmVuZGVyVG9kb0RldGFpbHMsXG59O1xuIiwibGV0IGlkID0gMDtcbmZ1bmN0aW9uIGlkQ291bnRlcigpIHtcbiAgaWQgKz0gMTtcbiAgcmV0dXJuIGlkO1xufVxuXG5jbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlID0gZmFsc2UsIHByaW9yaXR5ID0gJ2xvdycpIHtcbiAgICB0aGlzLnRvZG9JZCA9IGlkQ291bnRlcigpO1xuICAgIHRoaXMudG9kb1RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50b2RvRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRvZG9EYXRlID0gZGF0ZTtcbiAgICB0aGlzLnRvZG9Qcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMudG9kb0RvbmUgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy50b2RvSWQ7XG4gIH1cblxuICBzZXQgaWQodmFsdWUpIHtcbiAgICB0aGlzLnRvZG9JZCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRvZG9UaXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMudG9kb1RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy50b2RvRGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnRvZG9EYXRlO1xuICB9XG5cbiAgc2V0IGRhdGUodmFsdWUpIHtcbiAgICB0aGlzLnRvZG9EYXRlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb1ByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy50b2RvUHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkb25lKCkge1xuICAgIHJldHVybiB0aGlzLnRvZG9Eb25lO1xuICB9XG5cbiAgc2V0IGRvbmUoYm9vbCkge1xuICAgIHRoaXMudG9kb0RvbmUgPSBib29sO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgcmVuZGVyTmF2LCB7XG4gIHJlbmRlclByb2plY3RGb3JtLFxuICByZW5kZXJUb2RvRm9ybSxcbiAgcmVuZGVyUHJvamVjdFBhZ2UsXG4gIHJlbmRlclRvZG9EZXRhaWxzLFxufSBmcm9tICcuL3JlbmRlckh0bWwnO1xuXG4vLyBDcmVhdGVzIGVsZW1lbnRzIHRoYXQgYXJlIHJlcXVpcmVkIGZvciB0aGUgcGFnZVxuY29uc3QgdWlMb2FkID0ge1xuICBwcm9qZWN0TGlzdDogW10sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jYWNoZURvb20oKTtcbiAgICB0aGlzLnNob3dOYXYoKTtcbiAgfSxcbiAgY2FjaGVEb29tKCkge1xuICAgIHRoaXMucGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtc3RhcnQnKTtcbiAgICB0aGlzLnBhZ2VCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Db250ZW50IC5jb250YWluZXInKTtcbiAgfSxcbiAgc2hvd05hdigpIHtcbiAgICByZW5kZXJOYXYodGhpcy5wYWdlSGVhZGVyLCB0aGlzLnByb2plY3RMaXN0KTtcbiAgICB0aGlzLm5hdkV2ZW50KCk7XG4gIH0sXG4gIG5hdkV2ZW50KCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcHJvamVjdCcpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0Zvcm0oKTtcbiAgICAgIHRoaXMucmVtb3ZlQWN0aXZlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0IGxpJyk7XG4gICAgbmF2SXRlbXMuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5nZXRQcm9qZWN0QnlJRChsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUob2JqKTtcbiAgICAgICAgdGhpcy5zaG93UGFnZShvYmopO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHNob3dGb3JtKG9iaiA9IGZhbHNlKSB7XG4gICAgcmVuZGVyUHJvamVjdEZvcm0odGhpcy5wYWdlQm9keSwgb2JqKTtcblxuICAgIGlmIChvYmopIHtcbiAgICAgIHRoaXMuc3VibWl0Rm9ybUVkaXQob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJtaXRGb3JtTmV3KCk7XG4gICAgfVxuICB9LFxuICBzdWJtaXRGb3JtTmV3KCkge1xuICAgIGNvbnN0IHN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Jyk7XG4gICAgc3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUnKS52YWx1ZSk7XG4gICAgfSk7XG4gIH0sXG4gIHN1Ym1pdEZvcm1FZGl0KG9iaikge1xuICAgIGNvbnN0IHN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Jyk7XG4gICAgc3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9iai50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUnKS52YWx1ZTtcbiAgICAgIHRoaXMuc2hvd05hdigpO1xuICAgICAgdGhpcy5zZXRBY3RpdmUob2JqKTtcbiAgICAgIHRoaXMuc2hvd1BhZ2Uob2JqKTtcbiAgICB9KTtcbiAgfSxcbiAgY3JlYXRlKHRpdGxlKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgdGhpcy5zaG93TmF2KCk7XG4gIH0sXG4gIHNldEFjdGl2ZShvYmopIHtcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgIGlmIChjdXJyZW50QWN0aXZlKSB0aGlzLnJlbW92ZUFjdGl2ZSgpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QgbGlbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXWApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSxcbiAgcmVtb3ZlQWN0aXZlKCkge1xuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgY3VycmVudEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSxcbiAgZ2V0UHJvamVjdEJ5SUQocHJvamVjdElkKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9qZWN0SWQgPT09ICdzdHJpbmcnKSBwcm9qZWN0SWQgPSBwYXJzZUludChwcm9qZWN0SWQsIDEwKTtcbiAgICBjb25zdCBpZHggPSB0aGlzLnByb2plY3RMaXN0LmZpbmRJbmRleChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdFtpZHhdO1xuICB9LFxuICBnZXRUb2RvQnlJRCh0b2RvSWQsIG9iaikge1xuICAgIGlmICh0eXBlb2YgdG9kb0lkID09PSAnc3RyaW5nJykgdG9kb0lkID0gcGFyc2VJbnQodG9kb0lkLCAxMCk7XG4gICAgY29uc3QgaWR4ID0gb2JqLmxpc3QuZmluZEluZGV4KCh0b2RvKSA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgIHJldHVybiBvYmoubGlzdFtpZHhdO1xuICB9LFxuICBzaG93UGFnZShvYmopIHtcbiAgICByZW5kZXJQcm9qZWN0UGFnZSh0aGlzLnBhZ2VCb2R5LCBvYmopO1xuXG4gICAgdGhpcy5wYWdlRXZlbnQob2JqKTtcbiAgfSxcbiAgcGFnZUV2ZW50KG9iaikge1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRQcm9qZWN0Jyk7XG4gICAgZWRpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dGb3JtKG9iaik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvZG8nKTtcbiAgICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93Rm9ybVRvZG8oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNob3dUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdy1pdGVtJyk7XG4gICAgc2hvd1RvZG8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93VG9kb0RldGFpbHMoaXRlbSwgb2JqLmlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGctY2hlY2snKTtcbiAgICBjaGVja2JveC5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9PYmogPSB0aGlzLmdldFRvZG9CeUlEKGJveC5nZXRBdHRyaWJ1dGUoJ2lkJyksIG9iaik7XG4gICAgICAgIGlmIChib3guY2hlY2tlZCkge1xuICAgICAgICAgIHRvZG9PYmouZG9uZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9kb09iai5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93UGFnZShvYmopO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHNob3dGb3JtVG9kbyhvYmogPSBmYWxzZSkge1xuICAgIHJlbmRlclRvZG9Gb3JtKHRoaXMucGFnZUJvZHksIG9iaik7XG5cbiAgICBpZiAob2JqKSB7XG4gICAgICB0aGlzLnN1Ym1pdFRvZG9Gb3JtRWRpdChvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1Ym1pdFRvZG9Gb3JtTmV3KCk7XG4gICAgfVxuICB9LFxuICBzdWJtaXRUb2RvRm9ybU5ldygpIHtcbiAgICBjb25zdCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0VG9kbycpO1xuICAgIHN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9UaXRsZScpLnZhbHVlO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0Rlc2MnKS52YWx1ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0RhdGUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJyxcbiAgICAgICkudmFsdWU7XG5cbiAgICAgIHRoaXMuY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcbiAgICB9KTtcbiAgfSxcbiAgc3VibWl0VG9kb0Zvcm1FZGl0KG9iaikge1xuICAgIGNvbnN0IHN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRUb2RvJyk7XG4gICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbGV0ZVRvZG8nKTtcblxuICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXG4gICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIGNvbnN0IHByb2plY3RPYmogPSB0aGlzLmdldFByb2plY3RCeUlEKHByb2plY3RJZCk7XG4gICAgICBwcm9qZWN0T2JqLnJlbW92ZUZyb21MaXN0KG9iai5pZCk7XG4gICAgICB0aGlzLnNob3dQYWdlKHByb2plY3RPYmopO1xuICAgIH0pO1xuXG4gICAgc3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgb2JqLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9UaXRsZScpLnZhbHVlO1xuICAgICAgb2JqLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9EZXNjJykudmFsdWU7XG4gICAgICBvYmouZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvRGF0ZScpLnZhbHVlO1xuICAgICAgb2JqLnByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJyxcbiAgICAgICkudmFsdWU7XG5cbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcbiAgICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgY29uc3QgcHJvamVjdE9iaiA9IHRoaXMuZ2V0UHJvamVjdEJ5SUQocHJvamVjdElkKTtcbiAgICAgIHRoaXMuc2hvd1BhZ2UocHJvamVjdE9iaik7XG4gICAgfSk7XG4gIH0sXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcblxuICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBjb25zdCBwcm9qZWN0T2JqID0gdGhpcy5nZXRQcm9qZWN0QnlJRChwcm9qZWN0SWQpO1xuXG4gICAgcHJvamVjdE9iai5hZGRUb0xpc3QobmV3VG9kbyk7XG4gICAgdGhpcy5zaG93UGFnZShwcm9qZWN0T2JqKTtcbiAgfSxcbiAgc2hvd1RvZG9EZXRhaWxzKGl0ZW0sIHByb2plY3RJZCkge1xuICAgIGNvbnN0IGlkID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBjb25zdCBwcm9qZWN0T2JqID0gdGhpcy5nZXRQcm9qZWN0QnlJRChwcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRvZG9PYmogPSB0aGlzLmdldFRvZG9CeUlEKGlkLCBwcm9qZWN0T2JqKTtcblxuICAgIGNvbnN0IGRpdkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm93LWRldGFpbHMnKTtcbiAgICBpZiAoZGl2SW5mbykgZGl2SW5mby5yZW1vdmUoKTtcblxuICAgIHJlbmRlclRvZG9EZXRhaWxzKGl0ZW0sIHRvZG9PYmopO1xuXG4gICAgdGhpcy5lZGl0VG9kb0V2ZW50KHByb2plY3RPYmosIHRvZG9PYmopO1xuICB9LFxuICBlZGl0VG9kb0V2ZW50KHByb2plY3QsIHRvZG8pIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRvZG8nKTtcbiAgICBpZiAoYnRuKSB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2hvd0Zvcm1Ub2RvKHRvZG8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdWlMb2FkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hc3NldC9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IFVzZXJBdmF0YXIgZnJvbSAnLi9hc3NldC9pbWcvdXNlci5wbmcnO1xuaW1wb3J0IHVpTG9hZCBmcm9tICcuL21vZHVsZXMvdWlMb2FkJztcblxuLy8gQWRkIHRoZSB1c2VyIGF2YXRhciBpbWFnZSB0byBvdXIgZXhpc3RpbmcgdXNlci1kaXYuXG5jb25zdCBhdmF0YXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKTtcbmNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xubXlJY29uLnNyYyA9IFVzZXJBdmF0YXI7XG5hdmF0YXJFbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XG5cbi8vIEFkZCBodG1sIGVsZW1lbnRzIHRvIHBhZ2Ugd2hlbiBsb2FkXG4vLyAtIG5hdiAgICB8IE5hdiB0aGF0IGhvbGRzIHRoZSBwcm9qZWN0c1xuLy8gLSBidXR0b24gfCBBZGQgbmV3IHByb2plY3RcbnVpTG9hZC5pbml0KCk7XG5cbi8vIEFkZCBvbmUgbmV3IHByb2plY3QgYW5kIHNldCBpdCB0byBhY3RpdmVcbnVpTG9hZC5jcmVhdGUoJ0ZpcnN0IHByb2plY3QnKTtcbmNvbnN0IG5ld1Byb2plY3QgPSB1aUxvYWQuZ2V0UHJvamVjdEJ5SUQoMSk7XG51aUxvYWQuc2V0QWN0aXZlKG5ld1Byb2plY3QpO1xudWlMb2FkLnNob3dQYWdlKG5ld1Byb2plY3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9