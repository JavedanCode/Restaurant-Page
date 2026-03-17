/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.png */ \"./src/img/background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  margin: 0;\r\n\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n\r\n  min-height: 100vh;\r\n\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n\r\n  font-family: \"Playfair Display\", serif;\r\n}\r\n\r\nbody::before {\r\n  content: \"\";\r\n  position: fixed;\r\n  inset: 0;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  z-index: 0;\r\n}\r\n\r\n#content {\r\n  min-height: 400px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  padding-top: 40px;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\nnav {\r\n  margin-top: 10px;\r\n}\r\n\r\n.nav-link {\r\n  position: relative;\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 20px;\r\n  margin: 0 20px;\r\n  transition:\r\n    transform 0.2s ease,\r\n    color 0.2s ease;\r\n}\r\n\r\n.nav-link:hover {\r\n  transform: translateY(-3px);\r\n  color: #fff;\r\n\r\n  text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.nav-link::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -6px;\r\n  width: 0%;\r\n  height: 2px;\r\n  background-color: white;\r\n  transition: width 0.3s ease;\r\n}\r\n\r\n.nav-link:hover::after {\r\n  width: 100%;\r\n}\r\n\r\n.nav-link.active::after {\r\n  width: 100%;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n#content {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  padding: 30px 20px;\r\n}\r\n\r\n.main {\r\n  background: rgba(34, 32, 32, 0.75);\r\n  border-radius: 12px;\r\n  padding: 20px;\r\n  margin: 20px;\r\n\r\n  backdrop-filter: blur(10px);\r\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.main-home,\r\n.main-about {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  align-self: center;\r\n  color: whitesmoke;\r\n  max-width: 50%;\r\n  text-align: center;\r\n}\r\n\r\n.main-menu {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 15px;\r\n  width: 100%;\r\n  max-width: 900px;\r\n}\r\n\r\n.food-card {\r\n  background: rgba(40, 38, 38, 0.75);\r\n  border-radius: 12px;\r\n  padding: 16px;\r\n  color: white;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n\r\n  transition: all 0.25s ease;\r\n  cursor: pointer;\r\n\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.food-card:hover {\r\n  transform: translateY(-8px) scale(1.03);\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\r\n  background: rgba(70, 65, 65, 0.95);\r\n}\r\n\r\n.food-img {\r\n  width: 120px;\r\n  height: 120px;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n  margin-bottom: 10px;\r\n\r\n  transition: transform 0.3s ease;\r\n\r\n  box-shadow: 0 0 20px rgba(255, 200, 100, 0.2); /* ADD */\r\n}\r\n\r\n.food-card:hover .food-img {\r\n  transform: scale(1.1) rotate(2deg);\r\n}\r\n\r\n.food-name {\r\n  margin: 8px 0 4px;\r\n  font-size: 20px;\r\n  font-family: \"Playfair Display\", serif;\r\n}\r\n\r\n.food-description {\r\n  font-size: 14px;\r\n  opacity: 0.85;\r\n}\r\n\r\n.food-ingredients {\r\n  font-size: 13px;\r\n  opacity: 0.6;\r\n  font-style: italic;\r\n  margin-top: 6px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  background: rgba(20, 18, 18, 0.85);\r\n  backdrop-filter: blur(8px);\r\n\r\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);\r\n\r\n  color: white;\r\n  padding: 20px 0;\r\n\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 100;\r\n}\r\n\r\n.footer {\r\n  background-color: #1a1717e3;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 10px;\r\n  color: rgb(255, 249, 249);\r\n  box-shadow: 0px -12px 16px rgba(0, 0, 0, 0.397);\r\n}\r\n.title {\r\n  font-family: \"Allura\", cursive;\r\n  font-size: clamp(48px, 8vw, 100px);\r\n  margin: 10px 0;\r\n\r\n  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.footer p {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n}\r\n\r\n.footer a {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n}\r\n\r\n.github-logo {\r\n  width: 24px;\r\n  height: 24px;\r\n  transition: transform 0.3s ease-in-out;\r\n  filter: invert(1) brightness(1.2);\r\n}\r\n\r\n.github-logo:hover {\r\n  transform: rotate(360deg);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: rgb(255, 255, 255);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restauraunt-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restauraunt-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restauraunt-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restauraunt-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restauraunt-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restauraunt-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restauraunt-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restauraunt-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restauraunt-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restauraunt-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restauraunt-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/food/ash.png"
/*!**************************!*\
  !*** ./src/food/ash.png ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a71ccead0453c856426a.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/food/ash.png?\n}");

/***/ },

/***/ "./src/food/dolme.png"
/*!****************************!*\
  !*** ./src/food/dolme.png ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"dac9096d45ff85cdfc29.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/food/dolme.png?\n}");

/***/ },

/***/ "./src/food/ghorme-sabzi.png"
/*!***********************************!*\
  !*** ./src/food/ghorme-sabzi.png ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"85e153092d6a741829d2.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/food/ghorme-sabzi.png?\n}");

/***/ },

/***/ "./src/food/kabab.png"
/*!****************************!*\
  !*** ./src/food/kabab.png ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"593f64bd58812e16cfc3.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/food/kabab.png?\n}");

/***/ },

/***/ "./src/food/kalle.png"
/*!****************************!*\
  !*** ./src/food/kalle.png ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"abe077296cd007f8dede.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/food/kalle.png?\n}");

/***/ },

/***/ "./src/food/pizza.png"
/*!****************************!*\
  !*** ./src/food/pizza.png ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8fd0c62a45b7a45a31f1.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/food/pizza.png?\n}");

/***/ },

/***/ "./src/food/shishlik.png"
/*!*******************************!*\
  !*** ./src/food/shishlik.png ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"fa434f1e6506a81e66ee.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/food/shishlik.png?\n}");

/***/ },

/***/ "./src/food/sosis.png"
/*!****************************!*\
  !*** ./src/food/sosis.png ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5a0df3d2fbbb79c52c84.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/food/sosis.png?\n}");

/***/ },

/***/ "./src/food/special.png"
/*!******************************!*\
  !*** ./src/food/special.png ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"64faa9090fca346d4351.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/food/special.png?\n}");

/***/ },

/***/ "./src/food/tahchin.png"
/*!******************************!*\
  !*** ./src/food/tahchin.png ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3f78011859b1727572d4.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/food/tahchin.png?\n}");

/***/ },

/***/ "./src/img/background.png"
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"15da463f720ca3698420.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/img/background.png?\n}");

/***/ },

/***/ "./src/img/icon.png"
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ed90aa7b0203b2371271.png\";\n\n//# sourceURL=webpack://restauraunt-page/./src/img/icon.png?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  const container = document.createElement(\"div\");\r\n  container.classList.add(\"main\", \"main-about\");\r\n\r\n  container.innerHTML = `\r\n    <p>About Us</p>\r\n    <p>\r\n      We’re all about good food, bold flavors, and Iranian hospitality.\r\n    </p>\r\n    <p>\r\n      Whether you're here for nostalgia or trying Persian food for the first time, we’ve got you.\r\n    </p>\r\n    <p>Contact us: 123 456 78 90</p>\r\n  `;\r\n\r\n  content.appendChild(container);\r\n}\r\n\n\n//# sourceURL=webpack://restauraunt-page/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  const container = document.createElement(\"div\");\r\n  container.classList.add(\"main\", \"main-home\");\r\n\r\n  container.innerHTML = `\r\n    <p>The ultimate Iranian food experience</p>\r\n    <p>Iranian hospitality since 2002</p>\r\n    <p>History:</p>\r\n    <p>\r\n      Founded in 2002, our restaurant began as a small family kitchen built on recipes passed down through generations.\r\n    </p>\r\n    <p>\r\n      Inspired by the rich flavors of Persian cuisine, we take pride in every dish.\r\n    </p>\r\n    <p>Order online or pay us a visit!</p>\r\n  `;\r\n\r\n  content.appendChild(container);\r\n}\r\n\n\n//# sourceURL=webpack://restauraunt-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _img_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/icon.png */ \"./src/img/icon.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst link = document.createElement(\"link\");\r\nlink.rel = \"icon\";\r\nlink.type = \"image/png\";\r\nlink.href = _img_icon_png__WEBPACK_IMPORTED_MODULE_4__;\r\n\r\ndocument.head.appendChild(link);\r\n\r\nconst links = document.querySelectorAll(\".nav-link\");\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n\r\nlinks.forEach((link) => {\r\n  link.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    const page = link.dataset.page;\r\n\r\n    if (page === \"home\") (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n    if (page === \"menu\") (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\r\n    if (page === \"about\") (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.loadAbout)();\r\n\r\n    links.forEach((l) => l.classList.remove(\"active\"));\r\n    link.classList.add(\"active\");\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://restauraunt-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _food_ghorme_sabzi_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food/ghorme-sabzi.png */ \"./src/food/ghorme-sabzi.png\");\n/* harmony import */ var _food_dolme_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food/dolme.png */ \"./src/food/dolme.png\");\n/* harmony import */ var _food_kabab_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food/kabab.png */ \"./src/food/kabab.png\");\n/* harmony import */ var _food_shishlik_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food/shishlik.png */ \"./src/food/shishlik.png\");\n/* harmony import */ var _food_sosis_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food/sosis.png */ \"./src/food/sosis.png\");\n/* harmony import */ var _food_ash_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food/ash.png */ \"./src/food/ash.png\");\n/* harmony import */ var _food_tahchin_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food/tahchin.png */ \"./src/food/tahchin.png\");\n/* harmony import */ var _food_kalle_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./food/kalle.png */ \"./src/food/kalle.png\");\n/* harmony import */ var _food_pizza_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./food/pizza.png */ \"./src/food/pizza.png\");\n/* harmony import */ var _food_special_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./food/special.png */ \"./src/food/special.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadMenu() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  const container = document.createElement(\"div\");\r\n  container.classList.add(\"main\", \"main-menu\");\r\n\r\n  const foods = [\r\n    {\r\n      name: \"Ghorme Sabzi\",\r\n      img: _food_ghorme_sabzi_png__WEBPACK_IMPORTED_MODULE_0__,\r\n      desc: \"A rich herb stew with deep earthy flavors.\",\r\n      ing: \"Parsley, cilantro, fenugreek, beef, dried lime\",\r\n    },\r\n    {\r\n      name: \"Dolme\",\r\n      img: _food_dolme_png__WEBPACK_IMPORTED_MODULE_1__,\r\n      desc: \"Stuffed grape leaves with herbs and rice.\",\r\n      ing: \"Grape leaves, rice, herbs, meat\",\r\n    },\r\n    {\r\n      name: \"Kabab\",\r\n      img: _food_kabab_png__WEBPACK_IMPORTED_MODULE_2__,\r\n      desc: \"Juicy grilled ground meat skewers.\",\r\n      ing: \"Beef, onion, saffron, tomato\",\r\n    },\r\n    {\r\n      name: \"Shishlik\",\r\n      img: _food_shishlik_png__WEBPACK_IMPORTED_MODULE_3__,\r\n      desc: \"Tender grilled lamb ribs.\",\r\n      ing: \"Lamb, yogurt, saffron, garlic\",\r\n    },\r\n    {\r\n      name: \"Sosis Bandari\",\r\n      img: _food_sosis_png__WEBPACK_IMPORTED_MODULE_4__,\r\n      desc: \"Spicy sausage with onions and peppers.\",\r\n      ing: \"Sausage, onion, chili, tomato paste\",\r\n    },\r\n    {\r\n      name: \"Ash Reshte\",\r\n      img: _food_ash_png__WEBPACK_IMPORTED_MODULE_5__,\r\n      desc: \"Hearty herb and noodle soup.\",\r\n      ing: \"Beans, herbs, noodles, kashk\",\r\n    },\r\n    {\r\n      name: \"Tahchin\",\r\n      img: _food_tahchin_png__WEBPACK_IMPORTED_MODULE_6__,\r\n      desc: \"Crispy saffron rice cake with chicken.\",\r\n      ing: \"Rice, yogurt, saffron, chicken\",\r\n    },\r\n    {\r\n      name: \"Kalle Pache\",\r\n      img: _food_kalle_png__WEBPACK_IMPORTED_MODULE_7__,\r\n      desc: \"Traditional slow-cooked sheep dish.\",\r\n      ing: \"Sheep head, garlic, spices\",\r\n    },\r\n    {\r\n      name: \"Pizza Irani\",\r\n      img: _food_pizza_png__WEBPACK_IMPORTED_MODULE_8__,\r\n      desc: \"Persian-style loaded pizza.\",\r\n      ing: \"Cheese, sausage, mushrooms, ketchup\",\r\n    },\r\n    {\r\n      name: \"Soleimani Special\",\r\n      img: _food_special_png__WEBPACK_IMPORTED_MODULE_9__,\r\n      desc: \"Crispy Persian kotlet.\",\r\n      ing: \"Beef, potato, onion, spices\",\r\n    },\r\n  ];\r\n\r\n  foods.forEach((food) => {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"food-card\");\r\n\r\n    card.innerHTML = `\r\n      <img src=\"${food.img}\" class=\"food-img\" alt=\"${food.name}\" />\r\n      <h2 class=\"food-name\">${food.name}</h2>\r\n      <p class=\"food-description\">${food.desc}</p>\r\n      <p class=\"food-ingredients\">${food.ing}</p>\r\n    `;\r\n\r\n    container.appendChild(card);\r\n  });\r\n\r\n  content.appendChild(container);\r\n}\r\n\n\n//# sourceURL=webpack://restauraunt-page/./src/menu.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 		__webpack_require__.p = "/Restaurant-Page/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;