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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-blue-l: rgb(23 195 178);\n    --color-white: rgb(254 249 239);\n    --color-yellow: rgb(255 203 119);\n    --color-blue: rgb(34 124 157);\n    --color-red: rgb(254 109 115);\n    --text-blue: rgb(19 68 86);\n    --text-black: rgb(13 12 12);\n    --text-white: rgb(255 255 255);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nlabel, \ninput {\n    display: block;\n}\n\nlabel {\n    margin-bottom: 8px;\n}\n\ntextarea {\n    padding: 8px;\n    font-family: inherit;\n}\n\ninput[type=text],\ninput[type=date] {\n    padding: 8px;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\ninput.lg-check {\n    width : 16px;\n    height : 16px;\n}\n\nbody {\n    background-color: var(--color-white);\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-rows: 60px 1fr;\n}\n\n.header {\n    color: var(--text-white);\n    background-color: var(--color-blue);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 24px;\n    box-shadow: 4px 4px 13px 1px rgb(0 0 0 / 20%);\n}\n\n.nav-start {\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    height: 100%;\n}\n\n.project {\n    list-style: none;\n    display: flex;\n}\n\n.project a {\n    padding: 1.3rem;\n    color: var(--text-white);\n    text-decoration: none;\n    display: block;\n}\n\n.project a:hover {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.project .active {\n    background-color: var(--color-white);\n}\n\n.project .active a {\n    color: var(--text-blue);\n}\n\n.logo {\n    display: flex;\n    gap: 8px;\n}\n\n.user {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.user a {\n    color: var(--text-white);\n    text-decoration: none;\n}\n\n.user img {\n    height: 50px;\n}\n\n.btn {\n    padding: 0.6rem;\n    border: none;\n    cursor: pointer;\n    border-radius: 6px;\n    font-weight: 600;\n    background: var(--color-yellow);\n}\n\n.btn-red {\n    background-color: var(--color-red);\n}\n\n.btn:hover {\n    background-color: rgb(252, 211, 144);\n}\n\n.btn-red:hover {\n    background-color: rgb(250, 90, 96);\n}\n\n.btn-project {\n    background-color: var(--color-blue-l);\n    color: var(--text-black);\n}\n\n.btn-project:hover {\n    background-color: rgb(33, 218, 200);\n}\n\nmain {\n    margin-top: 24px;\n    display: grid;\n    justify-items: center;\n}\n\n.container {\n    padding: 24px;\n    background-color: var(--text-white);\n    min-width: 650px;\n}\n\n.container h2 {\n    color: var(--color-blue);\n}\n\n.container form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.pageHeader-heading {\n    margin-bottom: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.page-body {\n    margin-top: 24px;\n}\n\n.row-item {\n    cursor: pointer;\n    padding: 8px 0;\n    border-bottom: 1px solid var(--color-blue);\n}\n\n.row-done {\n    text-decoration: line-through;\n}\n\n.row-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.row-title {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.row-details {\n    margin-top: 8px;\n    margin-left: 24px;\n    display: flex;\n    gap: 24px;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.row-details > p {\n    white-space: pre-line;\n}\n\n.row-details .btn {\n    flex-shrink: 0;\n}\n\n.priority {\n    padding: 8px;\n    border-radius: 20px;\n    font-size: 0.7rem;\n}\n\n.priority-high {\n    background-color: var(--color-red);\n    color: var(--text-black);\n}\n\n.priority-medium {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.priority-low {\n    background-color: var(--color-blue);\n    color: var(--text-black);\n}\n\n.due-date {\n    font-size: 0.7rem;\n}\n\n.checkbox-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.checkbox-item label {\n    margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/asset/style/style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,+BAA+B;IAC/B,gCAAgC;IAChC,6BAA6B;IAC7B,6BAA6B;IAC7B,0BAA0B;IAC1B,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,yCAAyC;IACzC,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,mCAAmC;IACnC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,6CAA6C;AACjD;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,0CAA0C;AAC9C;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;IAClC,wBAAwB;AAC5B;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;IACnC,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[":root {\n    --color-blue-l: rgb(23 195 178);\n    --color-white: rgb(254 249 239);\n    --color-yellow: rgb(255 203 119);\n    --color-blue: rgb(34 124 157);\n    --color-red: rgb(254 109 115);\n    --text-blue: rgb(19 68 86);\n    --text-black: rgb(13 12 12);\n    --text-white: rgb(255 255 255);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nlabel, \ninput {\n    display: block;\n}\n\nlabel {\n    margin-bottom: 8px;\n}\n\ntextarea {\n    padding: 8px;\n    font-family: inherit;\n}\n\ninput[type=text],\ninput[type=date] {\n    padding: 8px;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\ninput.lg-check {\n    width : 16px;\n    height : 16px;\n}\n\nbody {\n    background-color: var(--color-white);\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-rows: 60px 1fr;\n}\n\n.header {\n    color: var(--text-white);\n    background-color: var(--color-blue);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 24px;\n    box-shadow: 4px 4px 13px 1px rgb(0 0 0 / 20%);\n}\n\n.nav-start {\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    height: 100%;\n}\n\n.project {\n    list-style: none;\n    display: flex;\n}\n\n.project a {\n    padding: 1.3rem;\n    color: var(--text-white);\n    text-decoration: none;\n    display: block;\n}\n\n.project a:hover {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.project .active {\n    background-color: var(--color-white);\n}\n\n.project .active a {\n    color: var(--text-blue);\n}\n\n.logo {\n    display: flex;\n    gap: 8px;\n}\n\n.user {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.user a {\n    color: var(--text-white);\n    text-decoration: none;\n}\n\n.user img {\n    height: 50px;\n}\n\n.btn {\n    padding: 0.6rem;\n    border: none;\n    cursor: pointer;\n    border-radius: 6px;\n    font-weight: 600;\n    background: var(--color-yellow);\n}\n\n.btn-red {\n    background-color: var(--color-red);\n}\n\n.btn:hover {\n    background-color: rgb(252, 211, 144);\n}\n\n.btn-red:hover {\n    background-color: rgb(250, 90, 96);\n}\n\n.btn-project {\n    background-color: var(--color-blue-l);\n    color: var(--text-black);\n}\n\n.btn-project:hover {\n    background-color: rgb(33, 218, 200);\n}\n\nmain {\n    margin-top: 24px;\n    display: grid;\n    justify-items: center;\n}\n\n.container {\n    padding: 24px;\n    background-color: var(--text-white);\n    min-width: 650px;\n}\n\n.container h2 {\n    color: var(--color-blue);\n}\n\n.container form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.pageHeader-heading {\n    margin-bottom: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.page-body {\n    margin-top: 24px;\n}\n\n.row-item {\n    cursor: pointer;\n    padding: 8px 0;\n    border-bottom: 1px solid var(--color-blue);\n}\n\n.row-done {\n    text-decoration: line-through;\n}\n\n.row-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.row-title {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.row-details {\n    margin-top: 8px;\n    margin-left: 24px;\n    display: flex;\n    gap: 24px;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.row-details > p {\n    white-space: pre-line;\n}\n\n.row-details .btn {\n    flex-shrink: 0;\n}\n\n.priority {\n    padding: 8px;\n    border-radius: 20px;\n    font-size: 0.7rem;\n}\n\n.priority-high {\n    background-color: var(--color-red);\n    color: var(--text-black);\n}\n\n.priority-medium {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.priority-low {\n    background-color: var(--color-blue);\n    color: var(--text-black);\n}\n\n.due-date {\n    font-size: 0.7rem;\n}\n\n.checkbox-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.checkbox-item label {\n    margin-bottom: 0;\n}"],"sourceRoot":""}]);
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

    removeFromList(todoId) {
        let idx = this.list.findIndex(todo => todo.id === todoId);
        this.list.splice(idx, 1);
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
        if (obj) {
            let delBtn = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'button', text: 'Delete', class: 'btn btn-red', attr: [['id', 'deleteTodo']]})
            form.appendChild(delBtn);
        }
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
        let delBtn = document.querySelector('#deleteTodo');

        delBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let projectId = document.querySelector('.active').getAttribute('data-id');
            let projectObj = this.getProjectByID(projectId);
            projectObj.removeFromList(obj.id);
            this.showPage(projectObj);
        });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEMsaUVBQWdCO0FBQ2hCLGdFQUFlLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXQvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0L3N0eWxlL3N0eWxlLmNzcz82ODlkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaHRtbEdlbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWlMb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItYmx1ZS1sOiByZ2IoMjMgMTk1IDE3OCk7XFxuICAgIC0tY29sb3Itd2hpdGU6IHJnYigyNTQgMjQ5IDIzOSk7XFxuICAgIC0tY29sb3IteWVsbG93OiByZ2IoMjU1IDIwMyAxMTkpO1xcbiAgICAtLWNvbG9yLWJsdWU6IHJnYigzNCAxMjQgMTU3KTtcXG4gICAgLS1jb2xvci1yZWQ6IHJnYigyNTQgMTA5IDExNSk7XFxuICAgIC0tdGV4dC1ibHVlOiByZ2IoMTkgNjggODYpO1xcbiAgICAtLXRleHQtYmxhY2s6IHJnYigxMyAxMiAxMik7XFxuICAgIC0tdGV4dC13aGl0ZTogcmdiKDI1NSAyNTUgMjU1KTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxubGFiZWwsIFxcbmlucHV0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dC5sZy1jaGVjayB7XFxuICAgIHdpZHRoIDogMTZweDtcXG4gICAgaGVpZ2h0IDogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjRweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxM3B4IDFweCByZ2IoMCAwIDAgLyAyMCUpO1xcbn1cXG5cXG4ubmF2LXN0YXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QgYSB7XFxuICAgIHBhZGRpbmc6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJvamVjdCBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJvamVjdCAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4ucHJvamVjdCAuYWN0aXZlIGEge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibHVlKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnVzZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnVzZXIgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udXNlciBpbWcge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXllbGxvdyk7XFxufVxcblxcbi5idG4tcmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIxMSwgMTQ0KTtcXG59XFxuXFxuLmJ0bi1yZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCA5MCwgOTYpO1xcbn1cXG5cXG4uYnRuLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlLWwpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5idG4tcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMjE4LCAyMDApO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIG1pbi13aWR0aDogNjUwcHg7XFxufVxcblxcbi5jb250YWluZXIgaDIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi5jb250YWluZXIgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnBhZ2VIZWFkZXItaGVhZGluZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBhZ2UtYm9keSB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi5yb3ctaXRlbSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ibHVlKTtcXG59XFxuXFxuLnJvdy1kb25lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5yb3ctaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdy10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93LWRldGFpbHMge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yb3ctZGV0YWlscyA+IHAge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxufVxcblxcbi5yb3ctZGV0YWlscyAuYnRuIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5jaGVja2JveC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1pdGVtIGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0L3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qiw2QkFB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biAgICAtLWNvbG9yLWJsdWUtbDogcmdiKDIzIDE5NSAxNzgpO1xcbiAgICAtLWNvbG9yLXdoaXRlOiByZ2IoMjU0IDI0OSAyMzkpO1xcbiAgICAtLWNvbG9yLXllbGxvdzogcmdiKDI1NSAyMDMgMTE5KTtcXG4gICAgLS1jb2xvci1ibHVlOiByZ2IoMzQgMTI0IDE1Nyk7XFxuICAgIC0tY29sb3ItcmVkOiByZ2IoMjU0IDEwOSAxMTUpO1xcbiAgICAtLXRleHQtYmx1ZTogcmdiKDE5IDY4IDg2KTtcXG4gICAgLS10ZXh0LWJsYWNrOiByZ2IoMTMgMTIgMTIpO1xcbiAgICAtLXRleHQtd2hpdGU6IHJnYigyNTUgMjU1IDI1NSk7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmxhYmVsLCBcXG5pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuaW5wdXQubGctY2hlY2sge1xcbiAgICB3aWR0aCA6IDE2cHg7XFxuICAgIGhlaWdodCA6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDI0cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTNweCAxcHggcmdiKDAgMCAwIC8gMjAlKTtcXG59XFxuXFxuLm5hdi1zdGFydCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0IGEge1xcbiAgICBwYWRkaW5nOiAxLjNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByb2plY3QgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLnByb2plY3QgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG59XFxuXFxuLnByb2plY3QgLmFjdGl2ZSBhIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmx1ZSk7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi51c2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi51c2VyIGEge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnVzZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xcbn1cXG5cXG4uYnRuLXJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMTEsIDE0NCk7XFxufVxcblxcbi5idG4tcmVkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgOTAsIDk2KTtcXG59XFxuXFxuLmJ0bi1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZS1sKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4uYnRuLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDIxOCwgMjAwKTtcXG59XFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICBtaW4td2lkdGg6IDY1MHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIGgyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbn1cXG5cXG4uY29udGFpbmVyIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi5wYWdlSGVhZGVyLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wYWdlLWJvZHkge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4ucm93LWl0ZW0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDhweCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi5yb3ctZG9uZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4ucm93LWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3ctdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdy1kZXRhaWxzIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucm93LWRldGFpbHMgPiBwIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbn1cXG5cXG4ucm93LWRldGFpbHMgLmJ0biB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4uY2hlY2tib3gtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtaXRlbSBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8ge1xuLy8gIHR5cGU6IGRpdlxuLy8gIGNsYXNzOiBjbGFzczEgY2xhc3MyXG4vLyAgaWQ6IGlkXG4vLyAgYXR0cjogW1twcm9wZXJ0eTEsIHZhbHVlMV0sIFtwcm9wZXJ0eTIsIHZhbHVlMl1dXG4vLyAgdGV4dDogJ3RlZWVleHQnXG4vLyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUh0bWwoYXJyKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyci50eXBlKTtcbiAgICBpZiAoYXJyLmNsYXNzKSBhcnIuY2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGlmIChhcnIudGV4dCkgZWxlbWVudC50ZXh0Q29udGVudCA9IGFyci50ZXh0O1xuICAgIGlmIChhcnIuYXR0cikgYXJyLmF0dHIuZm9yRWFjaCgocm93KSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShyb3dbMF0sIHJvd1sxXSkpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUh0bWxcbn0iLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBsaXN0ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl9pZCA9IGlkQ291bnRlcigpO1xuICAgIH1cblxuICAgIGFkZFRvTGlzdChvYmopIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2gob2JqKTtcbiAgICB9XG5cbiAgICByZW1vdmVGcm9tTGlzdCh0b2RvSWQpIHtcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMubGlzdC5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIGdldCBsaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0O1xuICAgIH1cbn1cblxubGV0IGlkID0gMDtcbmZ1bmN0aW9uIGlkQ291bnRlcigpIHtcbiAgICArK2lkXG4gICAgcmV0dXJuIGlkOyBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSA9IGZhbHNlLCBwcmlvcml0eSA9ICdsb3cnKSB7XG4gICAgICAgIHRoaXMuX2lkID0gaWRDb3VudGVyKCk7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLl9kb25lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICAgIH1cblxuICAgIHNldCBkYXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2RhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbmU7XG4gICAgfVxuXG4gICAgc2V0IGRvbmUoYm9vbCkge1xuICAgICAgICB0aGlzLl9kb25lID0gYm9vbDtcbiAgICB9XG59XG5cbmxldCBpZCA9IDA7XG5mdW5jdGlvbiBpZENvdW50ZXIoKSB7XG4gICAgKytpZFxuICAgIHJldHVybiBpZDsgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiaW1wb3J0IHsgY3JlYXRlSHRtbCB9IGZyb20gXCIuL2h0bWxHZW5cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcblxuLy8gQ3JlYXRlcyBlbGVtZW50cyB0aGF0IGFyZSByZXF1aXJlZCBmb3IgdGhlIHBhZ2VcbmNvbnN0IHVpTG9hZCA9IHtcbiAgICBwcm9qZWN0TGlzdDogW10sXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2FjaGVEb29tKCk7XG4gICAgICAgIHRoaXMuc2hvd05hdigpO1xuICAgIH0sXG4gICAgY2FjaGVEb29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1zdGFydCcpO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Db250ZW50IC5jb250YWluZXInKTtcbiAgICB9LFxuICAgIHNob3dOYXY6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdWwgPSBjcmVhdGVIdG1sKHt0eXBlOiAndWwnLCBjbGFzczogJ3Byb2plY3QnfSk7XG4gICAgICAgIGxldCBuYXYgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbmF2J30pO1xuICAgICAgICBsZXQgYnRuID0gY3JlYXRlSHRtbCh7dHlwZTogJ2J1dHRvbicsIGNsYXNzOiAnYnRuIGJ0bi1wcm9qZWN0JywgdGV4dDogJ0FkZCBwcm9qZWN0J30pO1xuXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIHRoaXMucGFnZUhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICAgICAgICB0aGlzLnBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgICAgICB0aGlzLnNob3dGb3JtRXZlbnQoKTtcbiAgICB9LFxuICAgIHNob3dGb3JtRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wcm9qZWN0Jyk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Zvcm0oKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWN0aXZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvd0Zvcm06IGZ1bmN0aW9uKG9iaiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBmb3JtVGV4dCA9IHt9XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIGZvcm1UZXh0LmgyID0gYEVkaXQgJHtvYmoudGl0bGV9YDtcbiAgICAgICAgICAgIGZvcm1UZXh0LmxhYmVsID0gJ1RpdGxlJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmlucHV0ID0gb2JqLnRpdGxlO1xuICAgICAgICAgICAgZm9ybVRleHQuYnRuID0gJ1VwZGF0ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtVGV4dC5oMiA9ICdBZGQgbmV3IFByb2plY3QnO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWwgPSAnVGl0bGUnO1xuICAgICAgICAgICAgZm9ybVRleHQuaW5wdXQgPSAnJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmJ0biA9ICdBZGQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYWdlQm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gQ3JlYXRlIGRpdiBoZWFkZXJcbiAgICAgICAgbGV0IGRpdkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdwYWdlSGVhZGVyLWhlYWRpbmcnfSk7XG4gICAgICAgIGxldCBoMkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaDInLCB0ZXh0OiBmb3JtVGV4dC5oMn0pO1xuICAgICAgICBkaXZIZWFkLmFwcGVuZENoaWxkKGgySGVhZCk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQoZGl2SGVhZCk7XG5cbiAgICAgICAgLy8gZm9ybVxuICAgICAgICBsZXQgZm9ybSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdmb3JtJywgYXR0cjogW1snYWN0aW9uJywgJyddXX0pO1xuICAgICAgICBsZXQgZm9ybURpdiA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnfSk7XG4gICAgICAgIGxldCBsYWJlbCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdsYWJlbCcsIGF0dHI6IFtbJ2ZvcicsICdwcm9qZWN0VGl0bGUnXV0sIHRleHQ6IGZvcm1UZXh0LmxhYmVsIH0pO1xuICAgICAgICBsZXQgaW5wdXQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaW5wdXQnLCBhdHRyOiBbWyd0eXBlJywgJ3RleHQnXSwgWyduYW1lJywgJ3Byb2plY3RUaXRsZSddLCBbJ2lkJywgJ3Byb2plY3RUaXRsZSddLFsndmFsdWUnLCBmb3JtVGV4dC5pbnB1dF1dfSk7XG4gICAgICAgIGxldCBzdWJCdG4gPSBjcmVhdGVIdG1sKHt0eXBlOiAnYnV0dG9uJywgdGV4dDogZm9ybVRleHQuYnRuLCBjbGFzczogJ2J0bicsIGF0dHI6IFtbJ2lkJywgJ3N1Ym1pdFByb2plY3QnXV19KVxuICAgICAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZm9ybURpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3ViQnRuKTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICAob2JqKSA/IHRoaXMuc3VibWl0Rm9ybUVkaXQob2JqKSA6IHRoaXMuc3VibWl0Rm9ybU5ldygpO1xuICAgIH0sXG4gICAgc3VibWl0Rm9ybU5ldzogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdCcpO1xuICAgICAgICBzdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzdWJtaXRGb3JtRWRpdDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGxldCBzdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdCcpO1xuICAgICAgICBzdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgb2JqLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoUHJvamVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUob2JqKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2Uob2JqKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgfSxcbiAgICBzaG93UHJvamVjdDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGxldCBuYXZVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgICAgIGxldCBsaSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdsaScsIGF0dHI6IFtbJ2RhdGEtaWQnLCBvYmouaWRdXSwgY2xhc3M6ICduYXYtaXRlbSd9KTtcbiAgICAgICAgbGV0IGEgPSBjcmVhdGVIdG1sKHt0eXBlOiAnYScsIGF0dHI6IFtbJ2hyZWYnLCAnIyddXSwgdGV4dDogb2JqLnRpdGxlfSk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICBuYXZVbC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uRXZlbnQoKTtcbiAgICB9LFxuICAgIHJlZnJlc2hQcm9qZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG5hdlVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgICAgICAgbmF2VWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xpJywgYXR0cjogW1snZGF0YS1pZCcsIHRoaXMucHJvamVjdExpc3RbaV0uaWRdXSwgY2xhc3M6ICduYXYtaXRlbSd9KTtcbiAgICAgICAgICAgIGxldCBhID0gY3JlYXRlSHRtbCh7dHlwZTogJ2EnLCBhdHRyOiBbWydocmVmJywgJyMnXV0sIHRleHQ6IHRoaXMucHJvamVjdExpc3RbaV0udGl0bGV9KTtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgICAgbmF2VWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hdmlnYXRpb25FdmVudCgpO1xuICAgIH0sXG4gICAgbmF2aWdhdGlvbkV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QgbGknKTtcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHRoaXMuZ2V0UHJvamVjdEJ5SUQobGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUob2JqKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlKG9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBsZXQgY3VycmVudEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmUpIHRoaXMucmVtb3ZlQWN0aXZlKCk7XG5cbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0IGxpW2RhdGEtaWQ9XCIke29iai5pZH1cIl1gKTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0sXG4gICAgcmVtb3ZlQWN0aXZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgIGN1cnJlbnRBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSxcbiAgICBnZXRQcm9qZWN0QnlJRChwcm9qZWN0SWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9qZWN0SWQgPT09ICdzdHJpbmcnKSBwcm9qZWN0SWQgPSBwYXJzZUludChwcm9qZWN0SWQpO1xuICAgICAgICBsZXQgaWR4ID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdFtpZHhdO1xuICAgIH0sXG4gICAgZ2V0VG9kb0J5SUQodG9kb0lkLCBvYmopIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2RvSWQgPT09ICdzdHJpbmcnKSB0b2RvSWQgPSBwYXJzZUludCh0b2RvSWQpO1xuICAgICAgICBsZXQgaWR4ID0gb2JqLmxpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcbiAgICAgICAgcmV0dXJuIG9iai5saXN0W2lkeF07XG4gICAgfSxcbiAgICBzaG93UGFnZTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIC8vIENyZWF0ZSBkaXYgaGVhZGVyXG4gICAgICAgIGxldCBkaXZIZWFkID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncGFnZUhlYWRlci1oZWFkaW5nJ30pO1xuICAgICAgICBsZXQgaDJIZWFkID0gY3JlYXRlSHRtbCh7dHlwZTogJ2gyJywgdGV4dDogb2JqLnRpdGxlfSk7XG4gICAgICAgIGxldCBwcm9qZWN0RWRpdCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdidXR0b24nLCBjbGFzczogJ2J0bicsIHRleHQ6ICdFZGl0IHByb2plY3QnLCBhdHRyOiBbWydpZCcsICdlZGl0UHJvamVjdCddXX0pO1xuICAgICAgICBkaXZIZWFkLmFwcGVuZENoaWxkKGgySGVhZCk7XG4gICAgICAgIGRpdkhlYWQuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXQpO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LmFwcGVuZENoaWxkKGRpdkhlYWQpO1xuXG4gICAgICAgIGxldCBidG5BZGQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnYnV0dG9uJywgY2xhc3M6ICdidG4nLCB0ZXh0OiAnQWRkIFRvZG8nLCBhdHRyOiBbWydpZCcsICdhZGRUb2RvJ11dfSk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQoYnRuQWRkKTtcblxuICAgICAgICBsZXQgZGl2Qm9keSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ3BhZ2UtYm9keSd9KTtcbiAgICAgICAgXG4gICAgICAgIG9iai5saXN0ID0gb2JqLmxpc3Quc29ydCgobGFzdCwgbmV4dCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3QuZG9uZSA9PT0gdHJ1ZSA/IDEgOiAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iai5saXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBkaXZUb2RvID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncm93LWl0ZW0nLCBhdHRyOiBbWydkYXRhLWlkJywgaXRlbS5pZF1dfSk7XG4gICAgICAgICAgICBpZiAoaXRlbS5kb25lKSBkaXZUb2RvID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncm93LWl0ZW0gcm93LWRvbmUnLCBhdHRyOiBbWydkYXRhLWlkJywgaXRlbS5pZF1dfSk7XG4gICAgICAgICAgICBsZXQgZGl2SGVhZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ3Jvdy1oZWFkaW5nJ30pO1xuICAgICAgICAgICAgbGV0IGRpdlRpdGxlID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncm93LXRpdGxlJ30pXG5cbiAgICAgICAgICAgIGxldCBjaGVjayA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAnY2hlY2tib3gnXSwgWydpZCcsIGl0ZW0uaWRdXSwgY2xhc3M6ICdsZy1jaGVjayd9KTtcbiAgICAgICAgICAgIGlmIChpdGVtLmRvbmUpIGNoZWNrID0gY3JlYXRlSHRtbCh7dHlwZTogJ2lucHV0JywgYXR0cjogW1sndHlwZScsICdjaGVja2JveCddLCBbJ2lkJywgaXRlbS5pZF0sIFsnY2hlY2tlZCcsICdjaGVja2VkJ11dLCBjbGFzczogJ2xnLWNoZWNrJ30pO1xuXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBjcmVhdGVIdG1sKHt0eXBlOiAncCcsIHRleHQ6IGl0ZW0udGl0bGV9KTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdzcGFuJywgdGV4dDogaXRlbS5wcmlvcml0eSwgY2xhc3M6IGBwcmlvcml0eSBwcmlvcml0eS0ke2l0ZW0ucHJpb3JpdHl9YH0pO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBjcmVhdGVIdG1sKHt0eXBlOiAnc3BhbicsIHRleHQ6IGl0ZW0uZGF0ZSwgY2xhc3M6ICdkdWUtZGF0ZSd9KTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBcbiAgICAgICAgICAgIGRpdkhlYWQuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgICAgICAgZGl2SGVhZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgIGRpdlRvZG8uYXBwZW5kQ2hpbGQoZGl2SGVhZCk7XG4gICAgICAgICAgICBkaXZCb2R5LmFwcGVuZENoaWxkKGRpdlRvZG8pO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChkaXZCb2R5KTtcblxuICAgICAgICB0aGlzLnBhZ2VFdmVudChvYmopO1xuXG4gICAgfSxcbiAgICBwYWdlRXZlbnQ6IGZ1bmN0aW9uKG9iail7XG4gICAgICAgIGxldCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0UHJvamVjdCcpO1xuICAgICAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Zvcm0ob2JqKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvJyk7XG4gICAgICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dGb3JtVG9kbygpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzaG93VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3ctaXRlbScpO1xuICAgICAgICBzaG93VG9kby5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvZG9EZXRhaWxzKGl0ZW0sIG9iai5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxnLWNoZWNrJyk7XG4gICAgICAgIGNoZWNrYm94LmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb09iaiA9IHRoaXMuZ2V0VG9kb0J5SUQoYm94LmdldEF0dHJpYnV0ZSgnaWQnKSwgb2JqKTtcbiAgICAgICAgICAgICAgICBpZiAoYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb09iai5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2RvT2JqLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZShvYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvd0Zvcm1Ub2RvOiBmdW5jdGlvbihvYmogPSBmYWxzZSkge1xuICAgICAgICBsZXQgZm9ybVRleHQgPSB7fVxuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICBmb3JtVGV4dC5oMiA9IGBFZGl0ICR7b2JqLnRpdGxlfWA7XG4gICAgICAgICAgICBmb3JtVGV4dC5sYWJlbCA9ICdUaXRsZSc7XG4gICAgICAgICAgICBmb3JtVGV4dC5pbnB1dCA9IG9iai50aXRsZTtcbiAgICAgICAgICAgIGZvcm1UZXh0LmxhYmVsMiA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtVGV4dC5kZXNjID0gb2JqLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWwzID0gJ0R1ZSBkYXRlJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgICAgIGZvcm1UZXh0LmxhYmVsNCA9ICdQcmlvcml0eSc7XG4gICAgICAgICAgICBmb3JtVGV4dC5wcmlvID0gb2JqLnByaW9yaXR5O1xuICAgICAgICAgICAgZm9ybVRleHQuYnRuID0gJ1VwZGF0ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtVGV4dC5oMiA9ICdDcmVhdGUgbmV3IFRvZG8nO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWwgPSAnVGl0bGUnO1xuICAgICAgICAgICAgZm9ybVRleHQuaW5wdXQgPSAnJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmxhYmVsMiA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtVGV4dC5kZXNjID0gJyc7XG4gICAgICAgICAgICBmb3JtVGV4dC5sYWJlbDMgPSAnRHVlIGRhdGUnO1xuICAgICAgICAgICAgZm9ybVRleHQuZGF0ZSA9ICcnO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWw0ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgICAgIGZvcm1UZXh0LnByaW8gPSAnJztcbiAgICAgICAgICAgIGZvcm1UZXh0LmJ0biA9ICdBZGQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYWdlQm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gQ3JlYXRlIGRpdiBoZWFkZXJcbiAgICAgICAgbGV0IGRpdkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdwYWdlSGVhZGVyLWhlYWRpbmcnfSk7XG4gICAgICAgIGxldCBoMkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaDInLCB0ZXh0OiBmb3JtVGV4dC5oMn0pO1xuICAgICAgICBkaXZIZWFkLmFwcGVuZENoaWxkKGgySGVhZCk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQoZGl2SGVhZCk7XG5cbiAgICAgICAgLy8gZm9ybVxuICAgICAgICBsZXQgZm9ybSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdmb3JtJywgYXR0cjogW1snYWN0aW9uJywgJyddXX0pO1xuXG4gICAgICAgIGxldCBmb3JtRGl2ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2Rpdid9KTtcbiAgICAgICAgbGV0IGxhYmVsID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3RvZG9UaXRsZSddXSwgdGV4dDogZm9ybVRleHQubGFiZWwgfSk7XG4gICAgICAgIGxldCBpbnB1dCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAndGV4dCddLCBbJ25hbWUnLCAndG9kb1RpdGxlJ10sIFsnaWQnLCAndG9kb1RpdGxlJ10sWyd2YWx1ZScsIGZvcm1UZXh0LmlucHV0XV19KTtcblxuICAgICAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZm9ybURpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybURpdjIgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2J30pO1xuICAgICAgICBsZXQgbGFiZWwyID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3RvZG9EZXNjJ11dLCB0ZXh0OiBmb3JtVGV4dC5sYWJlbDIgfSk7XG4gICAgICAgIGxldCBpbnB1dDIgPSBjcmVhdGVIdG1sKHt0eXBlOiAndGV4dGFyZWEnLCB0ZXh0OiBmb3JtVGV4dC5kZXNjICxhdHRyOiBbWyduYW1lJywgJ2Rlc2MnXSwgWydpZCcsICd0b2RvRGVzYyddLCBbJ2NvbHMnLCAnOTInXSwgWydyb3dzJywgJzEwJ11dfSk7XG4gICAgICAgIFxuICAgICAgICBmb3JtRGl2Mi5hcHBlbmRDaGlsZChsYWJlbDIpO1xuICAgICAgICBmb3JtRGl2Mi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1EaXYyKTtcblxuICAgICAgICBsZXQgZm9ybURpdjMgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2J30pO1xuICAgICAgICBsZXQgbGFiZWwzID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3RvZG9EYXRlJ11dLCB0ZXh0OiBmb3JtVGV4dC5sYWJlbDMgfSk7XG4gICAgICAgIGxldCBpbnB1dDMgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaW5wdXQnLCBhdHRyOiBbWyd0eXBlJywgJ2RhdGUnXSwgWyduYW1lJywgJ3RvZG9EYXRlJ10sIFsnaWQnLCAndG9kb0RhdGUnXSwgWyd2YWx1ZScsIGZvcm1UZXh0LmRhdGVdXX0pO1xuXG4gICAgICAgIGZvcm1EaXYzLmFwcGVuZENoaWxkKGxhYmVsMyk7XG4gICAgICAgIGZvcm1EaXYzLmFwcGVuZENoaWxkKGlucHV0Myk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdjMpO1xuXG4gICAgICAgIGxldCBmb3JtRGl2NCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnfSk7XG4gICAgICAgIGxldCBsYWJlbDQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAndG9kb1ByaW9yaXR5J11dLCB0ZXh0OiBmb3JtVGV4dC5sYWJlbDR9KTtcbiAgICAgICAgZm9ybURpdjQuYXBwZW5kQ2hpbGQobGFiZWw0KTtcblxuICAgICAgICBsZXQgZm9ybURpdkNoZWNrMSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ2NoZWNrYm94LWl0ZW0nfSk7XG4gICAgICAgIGxldCBpbnB1dExvdyA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAncmFkaW8nXSwgWydpZCcsICdsb3dQcmlvJ10sIFsnbmFtZScsICdwcmlvcml0eSddLCBbJ3ZhbHVlJywgJ2xvdyddXX0pO1xuICAgICAgICBsZXQgbGFiZWxMb3cgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAnbG93UHJpbyddXSwgdGV4dDogJ0xvdyBwcmlvcml0eSd9KTtcbiAgICAgICAgaWYgKG9iai5wcmlvcml0eSA9PT0gJ2xvdycpIGlucHV0TG93LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG5cbiAgICAgICAgZm9ybURpdkNoZWNrMS5hcHBlbmRDaGlsZChpbnB1dExvdyk7XG4gICAgICAgIGZvcm1EaXZDaGVjazEuYXBwZW5kQ2hpbGQobGFiZWxMb3cpO1xuICAgICAgICBmb3JtRGl2NC5hcHBlbmRDaGlsZChmb3JtRGl2Q2hlY2sxKTtcblxuICAgICAgICBsZXQgZm9ybURpdkNoZWNrMiA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ2NoZWNrYm94LWl0ZW0nfSk7XG4gICAgICAgIGxldCBpbnB1dE1lZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAncmFkaW8nXSwgWydpZCcsICdtZWRQcmlvJ10sIFsnbmFtZScsICdwcmlvcml0eSddLCBbJ3ZhbHVlJywgJ21lZGl1bSddXX0pO1xuICAgICAgICBsZXQgbGFiZWxNZWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAnbWVkUHJpbyddXSwgdGV4dDogJ01lZGl1bSBwcmlvcml0eSd9KTtcbiAgICAgICAgaWYgKG9iai5wcmlvcml0eSA9PT0gJ21lZGl1bScpIGlucHV0TWVkLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG5cbiAgICAgICAgZm9ybURpdkNoZWNrMi5hcHBlbmRDaGlsZChpbnB1dE1lZCk7XG4gICAgICAgIGZvcm1EaXZDaGVjazIuYXBwZW5kQ2hpbGQobGFiZWxNZWQpO1xuICAgICAgICBmb3JtRGl2NC5hcHBlbmRDaGlsZChmb3JtRGl2Q2hlY2syKTtcblxuICAgICAgICBsZXQgZm9ybURpdkNoZWNrMyA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ2NoZWNrYm94LWl0ZW0nfSk7XG4gICAgICAgIGxldCBpbnB1dEhpZ2ggPSBjcmVhdGVIdG1sKHt0eXBlOiAnaW5wdXQnLCBhdHRyOiBbWyd0eXBlJywgJ3JhZGlvJ10sIFsnaWQnLCAnaGlnaFByaW8nXSwgWyduYW1lJywgJ3ByaW9yaXR5J10sIFsndmFsdWUnLCAnaGlnaCddXX0pO1xuICAgICAgICBsZXQgbGFiZWxIaWdoID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ2hpZ2hQcmlvJ11dLCB0ZXh0OiAnSGlnaCBwcmlvcml0eSd9KTtcbiAgICAgICAgaWYgKG9iai5wcmlvcml0eSA9PT0gJ2hpZ2gnKSBpbnB1dEhpZ2guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcblxuICAgICAgICBmb3JtRGl2Q2hlY2szLmFwcGVuZENoaWxkKGlucHV0SGlnaCk7XG4gICAgICAgIGZvcm1EaXZDaGVjazMuYXBwZW5kQ2hpbGQobGFiZWxIaWdoKTtcbiAgICAgICAgZm9ybURpdjQuYXBwZW5kQ2hpbGQoZm9ybURpdkNoZWNrMyk7XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2NCk7XG5cbiAgICAgICAgbGV0IHN1YkJ0biA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdidXR0b24nLCB0ZXh0OiBmb3JtVGV4dC5idG4sIGNsYXNzOiAnYnRuJywgYXR0cjogW1snaWQnLCAnc3VibWl0VG9kbyddXX0pXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3ViQnRuKTtcbiAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgbGV0IGRlbEJ0biA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdidXR0b24nLCB0ZXh0OiAnRGVsZXRlJywgY2xhc3M6ICdidG4gYnRuLXJlZCcsIGF0dHI6IFtbJ2lkJywgJ2RlbGV0ZVRvZG8nXV19KVxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgKG9iaikgPyB0aGlzLnN1Ym1pdFRvZG9Gb3JtRWRpdChvYmopIDogdGhpcy5zdWJtaXRUb2RvRm9ybU5ldygpO1xuICAgICAgICBcbiAgICB9LFxuICAgIHN1Ym1pdFRvZG9Gb3JtTmV3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRUb2RvJyk7XG4gICAgICAgIHN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvVGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvRGVzYycpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0RhdGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzdWJtaXRUb2RvRm9ybUVkaXQ6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBsZXQgc3ViQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdFRvZG8nKTtcbiAgICAgICAgbGV0IGRlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGVUb2RvJyk7XG5cbiAgICAgICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdE9iaiA9IHRoaXMuZ2V0UHJvamVjdEJ5SUQocHJvamVjdElkKTtcbiAgICAgICAgICAgIHByb2plY3RPYmoucmVtb3ZlRnJvbUxpc3Qob2JqLmlkKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UocHJvamVjdE9iaik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG9iai50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvVGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIG9iai5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvRGVzYycpLnZhbHVlO1xuICAgICAgICAgICAgb2JqLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0RhdGUnKS52YWx1ZTtcbiAgICAgICAgICAgIG9iai5wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdE9iaiA9IHRoaXMuZ2V0UHJvamVjdEJ5SUQocHJvamVjdElkKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UocHJvamVjdE9iaik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY3JlYXRlVG9kbzogZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGxldCBwcm9qZWN0T2JqID0gdGhpcy5nZXRQcm9qZWN0QnlJRChwcm9qZWN0SWQpO1xuXG4gICAgICAgIHByb2plY3RPYmouYWRkVG9MaXN0KG5ld1RvZG8pO1xuICAgICAgICB0aGlzLnNob3dQYWdlKHByb2plY3RPYmopO1xuICAgIH0sXG4gICAgc2hvd1RvZG9EZXRhaWxzOiBmdW5jdGlvbihpdGVtLCBwcm9qZWN0SWQpIHtcbiAgICAgICAgbGV0IGlkID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgbGV0IHByb2plY3RPYmogPSB0aGlzLmdldFByb2plY3RCeUlEKHByb2plY3RJZCk7XG4gICAgICAgIGxldCB0b2RvT2JqID0gdGhpcy5nZXRUb2RvQnlJRChpZCwgcHJvamVjdE9iaik7XG5cbiAgICAgICAgbGV0IGRpdkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm93LWRldGFpbHMnKTtcbiAgICAgICAgaWYgKGRpdkluZm8pIGRpdkluZm8ucmVtb3ZlKCk7XG5cbiAgICAgICAgbGV0IGRpdiA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ3Jvdy1kZXRhaWxzJ30pO1xuICAgICAgICBsZXQgZGVzYyA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdwJywgdGV4dDogdG9kb09iai5kZXNjcmlwdGlvbn0pO1xuICAgICAgICBsZXQgYnRuID0gY3JlYXRlSHRtbCh7dHlwZTogJ2J1dHRvbicsIHRleHQ6ICdFZGl0IFRvZG8nLCBjbGFzczogJ2J0biBidG4tdG9kbyd9KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIHRoaXMuZWRpdFRvZG9FdmVudChwcm9qZWN0T2JqLCB0b2RvT2JqKTtcbiAgICB9LFxuICAgIGVkaXRUb2RvRXZlbnQ6IGZ1bmN0aW9uKHByb2plY3QsIHRvZG8pIHtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdG9kbycpO1xuICAgICAgICBpZiAoYnRuKSB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Rm9ybVRvZG8odG9kbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB1aUxvYWQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hc3NldC9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IFVzZXJBdmF0YXIgZnJvbSAnLi9hc3NldC9pbWcvdXNlci5wbmcnO1xuaW1wb3J0IHVpTG9hZCBmcm9tICcuL21vZHVsZXMvdWlMb2FkJztcblxuLy8gQWRkIHRoZSB1c2VyIGF2YXRhciBpbWFnZSB0byBvdXIgZXhpc3RpbmcgdXNlci1kaXYuXG5jb25zdCBhdmF0YXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKTtcbmNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xubXlJY29uLnNyYyA9IFVzZXJBdmF0YXI7XG5hdmF0YXJFbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XG5cbi8vIEFkZCBodG1sIGVsZW1lbnRzIHRvIHBhZ2Ugd2hlbiBsb2FkXG4vLyAtIG5hdiAgICB8IE5hdiB0aGF0IGhvbGRzIHRoZSBwcm9qZWN0c1xuLy8gLSBidXR0b24gfCBBZGQgbmV3IHByb2plY3RcbnVpTG9hZC5pbml0KCk7XG5cbi8vIEFkZCBvbmUgbmV3IHByb2plY3QgYW5kIHNldCBpdCB0byBhY3RpdmVcbnVpTG9hZC5jcmVhdGUoJ0ZpcnN0IHByb2plY3QnKTtcbmxldCBuZXdQcm9qZWN0ID0gdWlMb2FkLmdldFByb2plY3RCeUlEKDEpO1xudWlMb2FkLnNldEFjdGl2ZShuZXdQcm9qZWN0KTtcbnVpTG9hZC5zaG93UGFnZShuZXdQcm9qZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=