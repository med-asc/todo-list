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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-blue-l: rgb(23 195 178);\n    --color-white: rgb(254 249 239);\n    --color-yellow: rgb(255 203 119);\n    --color-blue: rgb(34 124 157);\n    --color-red: rgb(254 109 115);\n    --text-blue: rgb(19 68 86);\n    --text-black: rgb(13 12 12);\n    --text-white: rgb(255 255 255);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nlabel, \ninput {\n    display: block;\n}\n\nlabel {\n    margin-bottom: 8px;\n}\n\ntextarea {\n    padding: 8px;\n    font-family: inherit;\n}\n\ninput[type=text],\ninput[type=date] {\n    padding: 8px;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\ninput.lg-check {\n    width : 16px;\n    height : 16px;\n}\n\nbody {\n    background-color: var(--color-white);\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-rows: 60px 1fr;\n}\n\n.header {\n    color: var(--text-white);\n    background-color: var(--color-blue);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 24px;\n    box-shadow: 4px 4px 13px 1px rgb(0 0 0 / 20%);\n}\n\n.nav-start {\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    height: 100%;\n}\n\n.project {\n    list-style: none;\n    display: flex;\n}\n\n.project a {\n    padding: 1.3rem;\n    color: var(--text-white);\n    text-decoration: none;\n    display: block;\n}\n\n.project a:hover {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.project .active {\n    background-color: var(--color-white);\n}\n\n.project .active a {\n    color: var(--text-blue);\n}\n\n.logo {\n    display: flex;\n    gap: 8px;\n}\n\n.user {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.user a {\n    color: var(--text-white);\n    text-decoration: none;\n}\n\n.user img {\n    height: 50px;\n}\n\n.btn {\n    padding: 0.6rem;\n    border: none;\n    cursor: pointer;\n    border-radius: 6px;\n    font-weight: 600;\n    background: var(--color-yellow);\n}\n\n.btn:hover {\n    background-color: rgb(252, 211, 144);\n}\n\n.btn-project {\n    background-color: var(--color-blue-l);\n    color: var(--text-black);\n}\n\n.btn-project:hover {\n    background-color: rgb(33, 218, 200);\n}\n\nmain {\n    margin-top: 24px;\n    display: grid;\n    justify-items: center;\n}\n\n.container {\n    padding: 24px;\n    background-color: var(--text-white);\n    min-width: 650px;\n}\n\n.container h2 {\n    color: var(--color-blue);\n}\n\n.container form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.pageHeader-heading {\n    margin-bottom: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.page-body {\n    margin-top: 24px;\n}\n\n.row-item {\n    cursor: pointer;\n    padding: 8px 0;\n    border-bottom: 1px solid var(--color-blue);\n}\n\n.row-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.row-title {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.row-details {\n    margin-top: 8px;\n    margin-left: 24px;\n}\n\n.priority {\n    padding: 8px;\n    border-radius: 20px;\n    font-size: 0.7rem;\n}\n\n.priority-high {\n    background-color: var(--color-red);\n    color: var(--text-black);\n}\n\n.priority-medium {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.priority-low {\n    background-color: var(--color-blue);\n    color: var(--text-black);\n}\n\n.due-date {\n    font-size: 0.7rem;\n}\n\n.checkbox-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.checkbox-item label {\n    margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/asset/style/style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,+BAA+B;IAC/B,gCAAgC;IAChC,6BAA6B;IAC7B,6BAA6B;IAC7B,0BAA0B;IAC1B,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,yCAAyC;IACzC,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,mCAAmC;IACnC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,6CAA6C;AACjD;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;IAClC,wBAAwB;AAC5B;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;IACnC,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[":root {\n    --color-blue-l: rgb(23 195 178);\n    --color-white: rgb(254 249 239);\n    --color-yellow: rgb(255 203 119);\n    --color-blue: rgb(34 124 157);\n    --color-red: rgb(254 109 115);\n    --text-blue: rgb(19 68 86);\n    --text-black: rgb(13 12 12);\n    --text-white: rgb(255 255 255);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nlabel, \ninput {\n    display: block;\n}\n\nlabel {\n    margin-bottom: 8px;\n}\n\ntextarea {\n    padding: 8px;\n    font-family: inherit;\n}\n\ninput[type=text],\ninput[type=date] {\n    padding: 8px;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\ninput.lg-check {\n    width : 16px;\n    height : 16px;\n}\n\nbody {\n    background-color: var(--color-white);\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-rows: 60px 1fr;\n}\n\n.header {\n    color: var(--text-white);\n    background-color: var(--color-blue);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 24px;\n    box-shadow: 4px 4px 13px 1px rgb(0 0 0 / 20%);\n}\n\n.nav-start {\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    height: 100%;\n}\n\n.project {\n    list-style: none;\n    display: flex;\n}\n\n.project a {\n    padding: 1.3rem;\n    color: var(--text-white);\n    text-decoration: none;\n    display: block;\n}\n\n.project a:hover {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.project .active {\n    background-color: var(--color-white);\n}\n\n.project .active a {\n    color: var(--text-blue);\n}\n\n.logo {\n    display: flex;\n    gap: 8px;\n}\n\n.user {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.user a {\n    color: var(--text-white);\n    text-decoration: none;\n}\n\n.user img {\n    height: 50px;\n}\n\n.btn {\n    padding: 0.6rem;\n    border: none;\n    cursor: pointer;\n    border-radius: 6px;\n    font-weight: 600;\n    background: var(--color-yellow);\n}\n\n.btn:hover {\n    background-color: rgb(252, 211, 144);\n}\n\n.btn-project {\n    background-color: var(--color-blue-l);\n    color: var(--text-black);\n}\n\n.btn-project:hover {\n    background-color: rgb(33, 218, 200);\n}\n\nmain {\n    margin-top: 24px;\n    display: grid;\n    justify-items: center;\n}\n\n.container {\n    padding: 24px;\n    background-color: var(--text-white);\n    min-width: 650px;\n}\n\n.container h2 {\n    color: var(--color-blue);\n}\n\n.container form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.pageHeader-heading {\n    margin-bottom: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.page-body {\n    margin-top: 24px;\n}\n\n.row-item {\n    cursor: pointer;\n    padding: 8px 0;\n    border-bottom: 1px solid var(--color-blue);\n}\n\n.row-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.row-title {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.row-details {\n    margin-top: 8px;\n    margin-left: 24px;\n}\n\n.priority {\n    padding: 8px;\n    border-radius: 20px;\n    font-size: 0.7rem;\n}\n\n.priority-high {\n    background-color: var(--color-red);\n    color: var(--text-black);\n}\n\n.priority-medium {\n    background-color: var(--color-yellow);\n    color: var(--text-black);\n}\n\n.priority-low {\n    background-color: var(--color-blue);\n    color: var(--text-black);\n}\n\n.due-date {\n    font-size: 0.7rem;\n}\n\n.checkbox-item {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.checkbox-item label {\n    margin-bottom: 0;\n}"],"sourceRoot":""}]);
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

    get description() {
        return this._description;
    }

    get date() {
        return this._date;
    }

    get priority() {
        return this._priority;
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
        formText.h2 = 'Create new Todo';
        formText.label = 'Title';
        formText.input = '';
        formText.label2 = 'Description';
        formText.label3 = 'Due date';
        formText.label4 = 'Priority';
        formText.btn = 'Add';

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
        let input2 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'textarea', attr: [['name', 'desc'], ['id', 'todoDesc'], ['cols', '92'], ['rows', '10']]});
        
        formDiv2.appendChild(label2);
        formDiv2.appendChild(input2);
        form.appendChild(formDiv2);

        let formDiv3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div'});
        let label3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'todoDate']], text: formText.label3 });
        let input3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'date'], ['name', 'todoDate'], ['id', 'todoDate']]});

        formDiv3.appendChild(label3);
        formDiv3.appendChild(input3);
        form.appendChild(formDiv3);

        let formDiv4 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div'});
        let label4 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'todoPriority']], text: formText.label4});
        formDiv4.appendChild(label4);

        let formDivCheck1 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'checkbox-item'});
        let inputLow = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'radio'], ['id', 'lowPrio'], ['name', 'priority'], ['value', 'low']]});
        let labelLow = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'lowPrio']], text: 'Low priority'});

        formDivCheck1.appendChild(inputLow);
        formDivCheck1.appendChild(labelLow);
        formDiv4.appendChild(formDivCheck1);

        let formDivCheck2 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'checkbox-item'});
        let inputMed = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'radio'], ['id', 'medPrio'], ['name', 'priority'], ['value', 'medium']]});
        let labelMed = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'medPrio']], text: 'Medium priority'});

        formDivCheck2.appendChild(inputMed);
        formDivCheck2.appendChild(labelMed);
        formDiv4.appendChild(formDivCheck2);

        let formDivCheck3 = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'div', class: 'checkbox-item'});
        let inputHigh = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'input', attr: [['type', 'radio'], ['id', 'highPrio'], ['name', 'priority'], ['value', 'high']]});
        let labelHigh = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'label', attr: [['for', 'highPrio']], text: 'High priority'});

        formDivCheck3.appendChild(inputHigh);
        formDivCheck3.appendChild(labelHigh);
        formDiv4.appendChild(formDivCheck3);

        form.appendChild(formDiv4);

        let subBtn = (0,_htmlGen__WEBPACK_IMPORTED_MODULE_0__.createHtml)({type: 'button', text: formText.btn, class: 'btn', attr: [['id', 'submitTodo']]})
        form.appendChild(subBtn);
        this.pageBody.appendChild(form);

        this.submitTodoFormNew();
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
        div.appendChild(desc);
        item.appendChild(div);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLDZDQUFJOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isb0RBQVUsRUFBRSxrQ0FBa0M7QUFDaEUsbUJBQW1CLG9EQUFVLEVBQUUscUNBQXFDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O1VDN1RyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBaUM7QUFDYTtBQUNSOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxhQUFhLGdEQUFVO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUFXOztBQUVYO0FBQ0EsOERBQWE7QUFDYixpQkFBaUIsc0VBQXFCO0FBQ3RDLGlFQUFnQjtBQUNoQixnRUFBZSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0L3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldC9zdHlsZS9zdHlsZS5jc3M/Njg5ZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2h0bWxHZW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpTG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWNvbG9yLWJsdWUtbDogcmdiKDIzIDE5NSAxNzgpO1xcbiAgICAtLWNvbG9yLXdoaXRlOiByZ2IoMjU0IDI0OSAyMzkpO1xcbiAgICAtLWNvbG9yLXllbGxvdzogcmdiKDI1NSAyMDMgMTE5KTtcXG4gICAgLS1jb2xvci1ibHVlOiByZ2IoMzQgMTI0IDE1Nyk7XFxuICAgIC0tY29sb3ItcmVkOiByZ2IoMjU0IDEwOSAxMTUpO1xcbiAgICAtLXRleHQtYmx1ZTogcmdiKDE5IDY4IDg2KTtcXG4gICAgLS10ZXh0LWJsYWNrOiByZ2IoMTMgMTIgMTIpO1xcbiAgICAtLXRleHQtd2hpdGU6IHJnYigyNTUgMjU1IDI1NSk7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmxhYmVsLCBcXG5pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuaW5wdXQubGctY2hlY2sge1xcbiAgICB3aWR0aCA6IDE2cHg7XFxuICAgIGhlaWdodCA6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDI0cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTNweCAxcHggcmdiKDAgMCAwIC8gMjAlKTtcXG59XFxuXFxuLm5hdi1zdGFydCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0IGEge1xcbiAgICBwYWRkaW5nOiAxLjNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByb2plY3QgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLnByb2plY3QgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG59XFxuXFxuLnByb2plY3QgLmFjdGl2ZSBhIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmx1ZSk7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi51c2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi51c2VyIGEge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnVzZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjExLCAxNDQpO1xcbn1cXG5cXG4uYnRuLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlLWwpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5idG4tcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMjE4LCAyMDApO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIG1pbi13aWR0aDogNjUwcHg7XFxufVxcblxcbi5jb250YWluZXIgaDIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi5jb250YWluZXIgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnBhZ2VIZWFkZXItaGVhZGluZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBhZ2UtYm9keSB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi5yb3ctaXRlbSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ibHVlKTtcXG59XFxuXFxuLnJvdy1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3ctZGV0YWlscyB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5jaGVja2JveC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1pdGVtIGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0L3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jb2xvci1ibHVlLWw6IHJnYigyMyAxOTUgMTc4KTtcXG4gICAgLS1jb2xvci13aGl0ZTogcmdiKDI1NCAyNDkgMjM5KTtcXG4gICAgLS1jb2xvci15ZWxsb3c6IHJnYigyNTUgMjAzIDExOSk7XFxuICAgIC0tY29sb3ItYmx1ZTogcmdiKDM0IDEyNCAxNTcpO1xcbiAgICAtLWNvbG9yLXJlZDogcmdiKDI1NCAxMDkgMTE1KTtcXG4gICAgLS10ZXh0LWJsdWU6IHJnYigxOSA2OCA4Nik7XFxuICAgIC0tdGV4dC1ibGFjazogcmdiKDEzIDEyIDEyKTtcXG4gICAgLS10ZXh0LXdoaXRlOiByZ2IoMjU1IDI1NSAyNTUpO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5sYWJlbCwgXFxuaW5wdXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxubGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0LmxnLWNoZWNrIHtcXG4gICAgd2lkdGggOiAxNnB4O1xcbiAgICBoZWlnaHQgOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDEzcHggMXB4IHJnYigwIDAgMCAvIDIwJSk7XFxufVxcblxcbi5uYXYtc3RhcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdCBhIHtcXG4gICAgcGFkZGluZzogMS4zcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wcm9qZWN0IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5wcm9qZWN0IC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5wcm9qZWN0IC5hY3RpdmUgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4udXNlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udXNlciBhIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi51c2VyIGltZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IteWVsbG93KTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIxMSwgMTQ0KTtcXG59XFxuXFxuLmJ0bi1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZS1sKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xcbn1cXG5cXG4uYnRuLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDIxOCwgMjAwKTtcXG59XFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcbiAgICBtaW4td2lkdGg6IDY1MHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIGgyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbn1cXG5cXG4uY29udGFpbmVyIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi5wYWdlSGVhZGVyLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wYWdlLWJvZHkge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4ucm93LWl0ZW0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDhweCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi5yb3ctaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdy10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93LWRldGFpbHMge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4uY2hlY2tib3gtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtaXRlbSBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8ge1xuLy8gIHR5cGU6IGRpdlxuLy8gIGNsYXNzOiBjbGFzczEgY2xhc3MyXG4vLyAgaWQ6IGlkXG4vLyAgYXR0cjogW1twcm9wZXJ0eTEsIHZhbHVlMV0sIFtwcm9wZXJ0eTIsIHZhbHVlMl1dXG4vLyAgdGV4dDogJ3RlZWVleHQnXG4vLyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUh0bWwoYXJyKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyci50eXBlKTtcbiAgICBpZiAoYXJyLmNsYXNzKSBhcnIuY2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIGlmIChhcnIudGV4dCkgZWxlbWVudC50ZXh0Q29udGVudCA9IGFyci50ZXh0O1xuICAgIGlmIChhcnIuYXR0cikgYXJyLmF0dHIuZm9yRWFjaCgocm93KSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShyb3dbMF0sIHJvd1sxXSkpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUh0bWxcbn0iLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBsaXN0ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl9pZCA9IGlkQ291bnRlcigpO1xuICAgIH1cblxuICAgIGFkZFRvTGlzdChvYmopIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2gob2JqKTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGxpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Q7XG4gICAgfVxufVxuXG5sZXQgaWQgPSAwO1xuZnVuY3Rpb24gaWRDb3VudGVyKCkge1xuICAgICsraWRcbiAgICByZXR1cm4gaWQ7IFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlID0gZmFsc2UsIHByaW9yaXR5ID0gJ2xvdycpIHtcbiAgICAgICAgdGhpcy5faWQgPSBpZENvdW50ZXIoKTtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cbn1cblxubGV0IGlkID0gMDtcbmZ1bmN0aW9uIGlkQ291bnRlcigpIHtcbiAgICArK2lkXG4gICAgcmV0dXJuIGlkOyBcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiLCJpbXBvcnQgeyBjcmVhdGVIdG1sIH0gZnJvbSBcIi4vaHRtbEdlblwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG4vLyBDcmVhdGVzIGVsZW1lbnRzIHRoYXQgYXJlIHJlcXVpcmVkIGZvciB0aGUgcGFnZVxuY29uc3QgdWlMb2FkID0ge1xuICAgIHByb2plY3RMaXN0OiBbXSxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jYWNoZURvb20oKTtcbiAgICAgICAgdGhpcy5zaG93TmF2KCk7XG4gICAgfSxcbiAgICBjYWNoZURvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBhZ2VIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXN0YXJ0Jyk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbkNvbnRlbnQgLmNvbnRhaW5lcicpO1xuICAgIH0sXG4gICAgc2hvd05hdjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB1bCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICd1bCcsIGNsYXNzOiAncHJvamVjdCd9KTtcbiAgICAgICAgbGV0IG5hdiA9IGNyZWF0ZUh0bWwoe3R5cGU6ICduYXYnfSk7XG4gICAgICAgIGxldCBidG4gPSBjcmVhdGVIdG1sKHt0eXBlOiAnYnV0dG9uJywgY2xhc3M6ICdidG4gYnRuLXByb2plY3QnLCB0ZXh0OiAnQWRkIHByb2plY3QnfSk7XG5cbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgdGhpcy5wYWdlSGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgICAgIHRoaXMucGFnZUhlYWRlci5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgICAgIHRoaXMuc2hvd0Zvcm1FdmVudCgpO1xuICAgIH0sXG4gICAgc2hvd0Zvcm1FdmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXByb2plY3QnKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93Rm9ybSgpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBY3RpdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzaG93Rm9ybTogZnVuY3Rpb24ob2JqID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGZvcm1UZXh0ID0ge31cbiAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgZm9ybVRleHQuaDIgPSBgRWRpdCAke29iai50aXRsZX1gO1xuICAgICAgICAgICAgZm9ybVRleHQubGFiZWwgPSAnVGl0bGUnO1xuICAgICAgICAgICAgZm9ybVRleHQuaW5wdXQgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICBmb3JtVGV4dC5idG4gPSAnVXBkYXRlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1UZXh0LmgyID0gJ0FkZCBuZXcgUHJvamVjdCc7XG4gICAgICAgICAgICBmb3JtVGV4dC5sYWJlbCA9ICdUaXRsZSc7XG4gICAgICAgICAgICBmb3JtVGV4dC5pbnB1dCA9ICcnO1xuICAgICAgICAgICAgZm9ybVRleHQuYnRuID0gJ0FkZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhZ2VCb2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAvLyBDcmVhdGUgZGl2IGhlYWRlclxuICAgICAgICBsZXQgZGl2SGVhZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ3BhZ2VIZWFkZXItaGVhZGluZyd9KTtcbiAgICAgICAgbGV0IGgySGVhZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdoMicsIHRleHQ6IGZvcm1UZXh0LmgyfSk7XG4gICAgICAgIGRpdkhlYWQuYXBwZW5kQ2hpbGQoaDJIZWFkKTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChkaXZIZWFkKTtcblxuICAgICAgICAvLyBmb3JtXG4gICAgICAgIGxldCBmb3JtID0gY3JlYXRlSHRtbCh7dHlwZTogJ2Zvcm0nLCBhdHRyOiBbWydhY3Rpb24nLCAnJ11dfSk7XG4gICAgICAgIGxldCBmb3JtRGl2ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2Rpdid9KTtcbiAgICAgICAgbGV0IGxhYmVsID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3Byb2plY3RUaXRsZSddXSwgdGV4dDogZm9ybVRleHQubGFiZWwgfSk7XG4gICAgICAgIGxldCBpbnB1dCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAndGV4dCddLCBbJ25hbWUnLCAncHJvamVjdFRpdGxlJ10sIFsnaWQnLCAncHJvamVjdFRpdGxlJ10sWyd2YWx1ZScsIGZvcm1UZXh0LmlucHV0XV19KTtcbiAgICAgICAgbGV0IHN1YkJ0biA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdidXR0b24nLCB0ZXh0OiBmb3JtVGV4dC5idG4sIGNsYXNzOiAnYnRuJywgYXR0cjogW1snaWQnLCAnc3VibWl0UHJvamVjdCddXX0pXG4gICAgICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJCdG4pO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIChvYmopID8gdGhpcy5zdWJtaXRGb3JtRWRpdChvYmopIDogdGhpcy5zdWJtaXRGb3JtTmV3KCk7XG4gICAgfSxcbiAgICBzdWJtaXRGb3JtTmV3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Jyk7XG4gICAgICAgIHN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJykudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHN1Ym1pdEZvcm1FZGl0OiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgbGV0IHN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Jyk7XG4gICAgICAgIHN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvYmoudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJykudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hQcm9qZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShvYmopO1xuICAgICAgICAgICAgdGhpcy5zaG93UGFnZShvYmopO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24odGl0bGUpIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgdGhpcy5zaG93UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICB9LFxuICAgIHNob3dQcm9qZWN0OiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgbGV0IG5hdlVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgICAgICAgbGV0IGxpID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xpJywgYXR0cjogW1snZGF0YS1pZCcsIG9iai5pZF1dLCBjbGFzczogJ25hdi1pdGVtJ30pO1xuICAgICAgICBsZXQgYSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdhJywgYXR0cjogW1snaHJlZicsICcjJ11dLCB0ZXh0OiBvYmoudGl0bGV9KTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgIG5hdlVsLmFwcGVuZENoaWxkKGxpKTtcblxuICAgICAgICB0aGlzLm5hdmlnYXRpb25FdmVudCgpO1xuICAgIH0sXG4gICAgcmVmcmVzaFByb2plY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbmF2VWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgICAgICBuYXZVbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGkgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGknLCBhdHRyOiBbWydkYXRhLWlkJywgdGhpcy5wcm9qZWN0TGlzdFtpXS5pZF1dLCBjbGFzczogJ25hdi1pdGVtJ30pO1xuICAgICAgICAgICAgbGV0IGEgPSBjcmVhdGVIdG1sKHt0eXBlOiAnYScsIGF0dHI6IFtbJ2hyZWYnLCAnIyddXSwgdGV4dDogdGhpcy5wcm9qZWN0TGlzdFtpXS50aXRsZX0pO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgICBuYXZVbC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkV2ZW50KCk7XG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCBsaScpO1xuICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gdGhpcy5nZXRQcm9qZWN0QnlJRChsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShvYmopO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2Uob2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNldEFjdGl2ZTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGxldCBjdXJyZW50QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICBpZiAoY3VycmVudEFjdGl2ZSkgdGhpcy5yZW1vdmVBY3RpdmUoKTtcblxuICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QgbGlbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXWApO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSxcbiAgICByZW1vdmVBY3RpdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY3VycmVudEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgY3VycmVudEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9LFxuICAgIGdldFByb2plY3RCeUlEKHByb2plY3RJZCkge1xuICAgICAgICBpZiAodHlwZW9mIHByb2plY3RJZCA9PT0gJ3N0cmluZycpIHByb2plY3RJZCA9IHBhcnNlSW50KHByb2plY3RJZCk7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLnByb2plY3RMaXN0LmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RMaXN0W2lkeF07XG4gICAgfSxcbiAgICBnZXRUb2RvQnlJRCh0b2RvSWQsIG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIHRvZG9JZCA9PT0gJ3N0cmluZycpIHRvZG9JZCA9IHBhcnNlSW50KHRvZG9JZCk7XG4gICAgICAgIGxldCBpZHggPSBvYmoubGlzdC5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICByZXR1cm4gb2JqLmxpc3RbaWR4XTtcbiAgICB9LFxuICAgIHNob3dQYWdlOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gQ3JlYXRlIGRpdiBoZWFkZXJcbiAgICAgICAgbGV0IGRpdkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdwYWdlSGVhZGVyLWhlYWRpbmcnfSk7XG4gICAgICAgIGxldCBoMkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaDInLCB0ZXh0OiBvYmoudGl0bGV9KTtcbiAgICAgICAgbGV0IHByb2plY3RFZGl0ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2J1dHRvbicsIGNsYXNzOiAnYnRuJywgdGV4dDogJ0VkaXQgcHJvamVjdCcsIGF0dHI6IFtbJ2lkJywgJ2VkaXRQcm9qZWN0J11dfSk7XG4gICAgICAgIGRpdkhlYWQuYXBwZW5kQ2hpbGQoaDJIZWFkKTtcbiAgICAgICAgZGl2SGVhZC5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdCk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQoZGl2SGVhZCk7XG5cbiAgICAgICAgbGV0IGJ0bkFkZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdidXR0b24nLCBjbGFzczogJ2J0bicsIHRleHQ6ICdBZGQgVG9kbycsIGF0dHI6IFtbJ2lkJywgJ2FkZFRvZG8nXV19KTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChidG5BZGQpO1xuXG4gICAgICAgIGxldCBkaXZCb2R5ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncGFnZS1ib2R5J30pO1xuICAgICAgICBcbiAgICAgICAgb2JqLmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpdlRvZG8gPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdyb3ctaXRlbScsIGF0dHI6IFtbJ2RhdGEtaWQnLCBpdGVtLmlkXV19KTtcbiAgICAgICAgICAgIGxldCBkaXZIZWFkID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncm93LWhlYWRpbmcnfSk7XG4gICAgICAgICAgICBsZXQgZGl2VGl0bGUgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdyb3ctdGl0bGUnfSlcbiAgICAgICAgICAgIGxldCBjaGVjayA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAnY2hlY2tib3gnXV0sIGNsYXNzOiAnbGctY2hlY2snfSk7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBjcmVhdGVIdG1sKHt0eXBlOiAncCcsIHRleHQ6IGl0ZW0udGl0bGV9KTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdzcGFuJywgdGV4dDogaXRlbS5wcmlvcml0eSwgY2xhc3M6IGBwcmlvcml0eSBwcmlvcml0eS0ke2l0ZW0ucHJpb3JpdHl9YH0pO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBjcmVhdGVIdG1sKHt0eXBlOiAnc3BhbicsIHRleHQ6IGl0ZW0uZGF0ZSwgY2xhc3M6ICdkdWUtZGF0ZSd9KTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBcbiAgICAgICAgICAgIGRpdkhlYWQuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgICAgICAgZGl2SGVhZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgIGRpdlRvZG8uYXBwZW5kQ2hpbGQoZGl2SGVhZCk7XG4gICAgICAgICAgICBkaXZCb2R5LmFwcGVuZENoaWxkKGRpdlRvZG8pO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZChkaXZCb2R5KTtcblxuICAgICAgICB0aGlzLnBhZ2VFdmVudChvYmopO1xuXG4gICAgfSxcbiAgICBwYWdlRXZlbnQ6IGZ1bmN0aW9uKG9iail7XG4gICAgICAgIGxldCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0UHJvamVjdCcpO1xuICAgICAgICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Zvcm0ob2JqKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvJyk7XG4gICAgICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dGb3JtVG9kbygpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzaG93VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3ctaXRlbScpO1xuICAgICAgICBzaG93VG9kby5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvZG9EZXRhaWxzKGl0ZW0sIG9iai5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzaG93Rm9ybVRvZG86IGZ1bmN0aW9uKG9iaiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBmb3JtVGV4dCA9IHt9XG4gICAgICAgIGZvcm1UZXh0LmgyID0gJ0NyZWF0ZSBuZXcgVG9kbyc7XG4gICAgICAgIGZvcm1UZXh0LmxhYmVsID0gJ1RpdGxlJztcbiAgICAgICAgZm9ybVRleHQuaW5wdXQgPSAnJztcbiAgICAgICAgZm9ybVRleHQubGFiZWwyID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgZm9ybVRleHQubGFiZWwzID0gJ0R1ZSBkYXRlJztcbiAgICAgICAgZm9ybVRleHQubGFiZWw0ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgZm9ybVRleHQuYnRuID0gJ0FkZCc7XG5cbiAgICAgICAgdGhpcy5wYWdlQm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gQ3JlYXRlIGRpdiBoZWFkZXJcbiAgICAgICAgbGV0IGRpdkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdwYWdlSGVhZGVyLWhlYWRpbmcnfSk7XG4gICAgICAgIGxldCBoMkhlYWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaDInLCB0ZXh0OiBmb3JtVGV4dC5oMn0pO1xuICAgICAgICBkaXZIZWFkLmFwcGVuZENoaWxkKGgySGVhZCk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQoZGl2SGVhZCk7XG5cbiAgICAgICAgLy8gZm9ybVxuICAgICAgICBsZXQgZm9ybSA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdmb3JtJywgYXR0cjogW1snYWN0aW9uJywgJyddXX0pO1xuXG4gICAgICAgIGxldCBmb3JtRGl2ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2Rpdid9KTtcbiAgICAgICAgbGV0IGxhYmVsID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3RvZG9UaXRsZSddXSwgdGV4dDogZm9ybVRleHQubGFiZWwgfSk7XG4gICAgICAgIGxldCBpbnB1dCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAndGV4dCddLCBbJ25hbWUnLCAndG9kb1RpdGxlJ10sIFsnaWQnLCAndG9kb1RpdGxlJ10sWyd2YWx1ZScsIGZvcm1UZXh0LmlucHV0XV19KTtcblxuICAgICAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZm9ybURpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybURpdjIgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2J30pO1xuICAgICAgICBsZXQgbGFiZWwyID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3RvZG9EZXNjJ11dLCB0ZXh0OiBmb3JtVGV4dC5sYWJlbDIgfSk7XG4gICAgICAgIGxldCBpbnB1dDIgPSBjcmVhdGVIdG1sKHt0eXBlOiAndGV4dGFyZWEnLCBhdHRyOiBbWyduYW1lJywgJ2Rlc2MnXSwgWydpZCcsICd0b2RvRGVzYyddLCBbJ2NvbHMnLCAnOTInXSwgWydyb3dzJywgJzEwJ11dfSk7XG4gICAgICAgIFxuICAgICAgICBmb3JtRGl2Mi5hcHBlbmRDaGlsZChsYWJlbDIpO1xuICAgICAgICBmb3JtRGl2Mi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1EaXYyKTtcblxuICAgICAgICBsZXQgZm9ybURpdjMgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2J30pO1xuICAgICAgICBsZXQgbGFiZWwzID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3RvZG9EYXRlJ11dLCB0ZXh0OiBmb3JtVGV4dC5sYWJlbDMgfSk7XG4gICAgICAgIGxldCBpbnB1dDMgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaW5wdXQnLCBhdHRyOiBbWyd0eXBlJywgJ2RhdGUnXSwgWyduYW1lJywgJ3RvZG9EYXRlJ10sIFsnaWQnLCAndG9kb0RhdGUnXV19KTtcblxuICAgICAgICBmb3JtRGl2My5hcHBlbmRDaGlsZChsYWJlbDMpO1xuICAgICAgICBmb3JtRGl2My5hcHBlbmRDaGlsZChpbnB1dDMpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1EaXYzKTtcblxuICAgICAgICBsZXQgZm9ybURpdjQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2J30pO1xuICAgICAgICBsZXQgbGFiZWw0ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ3RvZG9Qcmlvcml0eSddXSwgdGV4dDogZm9ybVRleHQubGFiZWw0fSk7XG4gICAgICAgIGZvcm1EaXY0LmFwcGVuZENoaWxkKGxhYmVsNCk7XG5cbiAgICAgICAgbGV0IGZvcm1EaXZDaGVjazEgPSBjcmVhdGVIdG1sKHt0eXBlOiAnZGl2JywgY2xhc3M6ICdjaGVja2JveC1pdGVtJ30pO1xuICAgICAgICBsZXQgaW5wdXRMb3cgPSBjcmVhdGVIdG1sKHt0eXBlOiAnaW5wdXQnLCBhdHRyOiBbWyd0eXBlJywgJ3JhZGlvJ10sIFsnaWQnLCAnbG93UHJpbyddLCBbJ25hbWUnLCAncHJpb3JpdHknXSwgWyd2YWx1ZScsICdsb3cnXV19KTtcbiAgICAgICAgbGV0IGxhYmVsTG93ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2xhYmVsJywgYXR0cjogW1snZm9yJywgJ2xvd1ByaW8nXV0sIHRleHQ6ICdMb3cgcHJpb3JpdHknfSk7XG5cbiAgICAgICAgZm9ybURpdkNoZWNrMS5hcHBlbmRDaGlsZChpbnB1dExvdyk7XG4gICAgICAgIGZvcm1EaXZDaGVjazEuYXBwZW5kQ2hpbGQobGFiZWxMb3cpO1xuICAgICAgICBmb3JtRGl2NC5hcHBlbmRDaGlsZChmb3JtRGl2Q2hlY2sxKTtcblxuICAgICAgICBsZXQgZm9ybURpdkNoZWNrMiA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdkaXYnLCBjbGFzczogJ2NoZWNrYm94LWl0ZW0nfSk7XG4gICAgICAgIGxldCBpbnB1dE1lZCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAncmFkaW8nXSwgWydpZCcsICdtZWRQcmlvJ10sIFsnbmFtZScsICdwcmlvcml0eSddLCBbJ3ZhbHVlJywgJ21lZGl1bSddXX0pO1xuICAgICAgICBsZXQgbGFiZWxNZWQgPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAnbWVkUHJpbyddXSwgdGV4dDogJ01lZGl1bSBwcmlvcml0eSd9KTtcblxuICAgICAgICBmb3JtRGl2Q2hlY2syLmFwcGVuZENoaWxkKGlucHV0TWVkKTtcbiAgICAgICAgZm9ybURpdkNoZWNrMi5hcHBlbmRDaGlsZChsYWJlbE1lZCk7XG4gICAgICAgIGZvcm1EaXY0LmFwcGVuZENoaWxkKGZvcm1EaXZDaGVjazIpO1xuXG4gICAgICAgIGxldCBmb3JtRGl2Q2hlY2szID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAnY2hlY2tib3gtaXRlbSd9KTtcbiAgICAgICAgbGV0IGlucHV0SGlnaCA9IGNyZWF0ZUh0bWwoe3R5cGU6ICdpbnB1dCcsIGF0dHI6IFtbJ3R5cGUnLCAncmFkaW8nXSwgWydpZCcsICdoaWdoUHJpbyddLCBbJ25hbWUnLCAncHJpb3JpdHknXSwgWyd2YWx1ZScsICdoaWdoJ11dfSk7XG4gICAgICAgIGxldCBsYWJlbEhpZ2ggPSBjcmVhdGVIdG1sKHt0eXBlOiAnbGFiZWwnLCBhdHRyOiBbWydmb3InLCAnaGlnaFByaW8nXV0sIHRleHQ6ICdIaWdoIHByaW9yaXR5J30pO1xuXG4gICAgICAgIGZvcm1EaXZDaGVjazMuYXBwZW5kQ2hpbGQoaW5wdXRIaWdoKTtcbiAgICAgICAgZm9ybURpdkNoZWNrMy5hcHBlbmRDaGlsZChsYWJlbEhpZ2gpO1xuICAgICAgICBmb3JtRGl2NC5hcHBlbmRDaGlsZChmb3JtRGl2Q2hlY2szKTtcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1EaXY0KTtcblxuICAgICAgICBsZXQgc3ViQnRuID0gY3JlYXRlSHRtbCh7dHlwZTogJ2J1dHRvbicsIHRleHQ6IGZvcm1UZXh0LmJ0biwgY2xhc3M6ICdidG4nLCBhdHRyOiBbWydpZCcsICdzdWJtaXRUb2RvJ11dfSlcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJCdG4pO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIHRoaXMuc3VibWl0VG9kb0Zvcm1OZXcoKTtcbiAgICB9LFxuICAgIHN1Ym1pdFRvZG9Gb3JtTmV3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRUb2RvJyk7XG4gICAgICAgIHN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvVGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvRGVzYycpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0RhdGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjcmVhdGVUb2RvOiBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG5cbiAgICAgICAgbGV0IHByb2plY3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgbGV0IHByb2plY3RPYmogPSB0aGlzLmdldFByb2plY3RCeUlEKHByb2plY3RJZCk7XG5cbiAgICAgICAgcHJvamVjdE9iai5hZGRUb0xpc3QobmV3VG9kbyk7XG4gICAgICAgIHRoaXMuc2hvd1BhZ2UocHJvamVjdE9iaik7XG4gICAgfSxcbiAgICBzaG93VG9kb0RldGFpbHM6IGZ1bmN0aW9uKGl0ZW0sIHByb2plY3RJZCkge1xuICAgICAgICBsZXQgaWQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICBsZXQgcHJvamVjdE9iaiA9IHRoaXMuZ2V0UHJvamVjdEJ5SUQocHJvamVjdElkKTtcbiAgICAgICAgbGV0IHRvZG9PYmogPSB0aGlzLmdldFRvZG9CeUlEKGlkLCBwcm9qZWN0T2JqKTtcblxuICAgICAgICBsZXQgZGl2SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3ctZGV0YWlscycpO1xuICAgICAgICBpZiAoZGl2SW5mbykgZGl2SW5mby5yZW1vdmUoKTtcblxuICAgICAgICBsZXQgZGl2ID0gY3JlYXRlSHRtbCh7dHlwZTogJ2RpdicsIGNsYXNzOiAncm93LWRldGFpbHMnfSk7XG4gICAgICAgIGxldCBkZXNjID0gY3JlYXRlSHRtbCh7dHlwZTogJ3AnLCB0ZXh0OiB0b2RvT2JqLmRlc2NyaXB0aW9ufSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB1aUxvYWQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hc3NldC9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IFVzZXJBdmF0YXIgZnJvbSAnLi9hc3NldC9pbWcvdXNlci5wbmcnO1xuaW1wb3J0IHVpTG9hZCBmcm9tICcuL21vZHVsZXMvdWlMb2FkJztcblxuLy8gQWRkIHRoZSB1c2VyIGF2YXRhciBpbWFnZSB0byBvdXIgZXhpc3RpbmcgdXNlci1kaXYuXG5jb25zdCBhdmF0YXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKTtcbmNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xubXlJY29uLnNyYyA9IFVzZXJBdmF0YXI7XG5hdmF0YXJFbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XG5cbi8vIEFkZCBodG1sIGVsZW1lbnRzIHRvIHBhZ2Ugd2hlbiBsb2FkXG4vLyAtIG5hdiAgICB8IE5hdiB0aGF0IGhvbGRzIHRoZSBwcm9qZWN0c1xuLy8gLSBidXR0b24gfCBBZGQgbmV3IHByb2plY3RcbnVpTG9hZC5pbml0KCk7XG5cbi8vIEFkZCBvbmUgbmV3IHByb2plY3QgYW5kIHNldCBpdCB0byBhY3RpdmVcbnVpTG9hZC5jcmVhdGUoJ0ZpcnN0IHByb2plY3QnKTtcbmxldCBuZXdQcm9qZWN0ID0gdWlMb2FkLmdldFByb2plY3RCeUlEKDEpO1xudWlMb2FkLnNldEFjdGl2ZShuZXdQcm9qZWN0KTtcbnVpTG9hZC5zaG93UGFnZShuZXdQcm9qZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=