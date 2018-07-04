/*!
 * react-triple-select-box v0.3.7
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactTripleSelectBox"] = factory(require("react"));
	else
		root["ReactTripleSelectBox"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TripleSelectBox_jsx__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TripleSelectBox", function() { return __WEBPACK_IMPORTED_MODULE_0__TripleSelectBox_jsx__["TripleSelectBox"]; });


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TripleSelectBox_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TripleSelectBox_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TripleSelectBox_css__);
throw new Error("Cannot find module \"./Untitled-1\"");
/* unused harmony export default */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/macbook/git/react-triple-select-box/src/TripleSelectBox.jsx';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var DEFAULT_LINES_NUM = 8;

var TripleSelectBox = function (_Component) {
	_inherits(TripleSelectBox, _Component);

	function TripleSelectBox(props) {
		_classCallCheck(this, TripleSelectBox);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.state = {
			rightSelectedValues: [],
			leftSelectedValues: [],
			nonSelectedValues: []
		};
		_this._onClickUnSelectFromLeft = _this._onClickUnSelectFromLeft.bind(_this);
		_this._onClickUnSelectFromRight = _this._onClickUnSelectFromRight.bind(_this);
		_this._onClickSelectToRight = _this._onClickSelectToRight.bind(_this);
		_this._onClickSelectToLeft = _this._onClickSelectToLeft.bind(_this);
		return _this;
	}

	TripleSelectBox.prototype._excludeValues = function _excludeValues() {
		var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var valuesToExclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var compareFn = this.props.compareFn;

		if (compareFn instanceof Function) {
			return values.filter(function (value) {
				return !valuesToExclude.some(function (valueToExclude) {
					return compareFn(valueToExclude, value);
				});
			});
		}
		return values.filter(function (value) {
			return !valuesToExclude.some(function (exclude) {
				return exclude == value;
			});
		});
	};

	TripleSelectBox.prototype._addValues = function _addValues() {
		var arrayToAdd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var valuesToAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

		return arrayToAdd.concat(valuesToAdd);
	};

	TripleSelectBox.prototype._unSelectNode = function _unSelectNode(id) {
		var selectBoxChilds = document.getElementById(id).childNodes;
		selectBoxChilds.forEach(function (node) {
			if (node.selected) {
				node.selected = false;
				return;
			}
		});
	};

	TripleSelectBox.prototype._onClickSelectToRight = function _onClickSelectToRight() {
		var _props = this.props,
		    id = _props.id,
		    onChange = _props.onChange;

		var clickedCodesForSelection = this.state.nonSelectedValues;

		var _props2 = this.props,
		    centerValues = _props2.centerValues,
		    rightValues = _props2.rightValues;
		var leftValues = this.props.leftValues;


		centerValues = this._excludeValues(centerValues, clickedCodesForSelection);
		rightValues = this._addValues(rightValues, clickedCodesForSelection);

		onChange(leftValues, centerValues, rightValues);

		this.setState({ nonSelectedValues: [] });
		this._unSelectNode(id + '-center-select-values-box');
	};

	TripleSelectBox.prototype._onClickSelectToLeft = function _onClickSelectToLeft() {
		var _props3 = this.props,
		    id = _props3.id,
		    onChange = _props3.onChange;

		var clickedCodesForSelection = this.state.nonSelectedValues;

		var _props4 = this.props,
		    leftValues = _props4.leftValues,
		    centerValues = _props4.centerValues;
		var rightValues = this.props.rightValues;


		centerValues = this._excludeValues(centerValues, clickedCodesForSelection);
		leftValues = this._addValues(leftValues, clickedCodesForSelection);

		onChange(leftValues, centerValues, rightValues);

		this.setState({ nonSelectedValues: [] });
		this._unSelectNode(id + '-center-select-values-box');
	};

	TripleSelectBox.prototype._onClickUnSelectFromLeft = function _onClickUnSelectFromLeft() {
		var _props5 = this.props,
		    id = _props5.id,
		    onChange = _props5.onChange;

		var clickedCodesForUnSelection = this.state.leftSelectedValues;
		var rightValues = this.props.rightValues;
		var _props6 = this.props,
		    leftValues = _props6.leftValues,
		    centerValues = _props6.centerValues;


		leftValues = this._excludeValues(leftValues, clickedCodesForUnSelection);
		centerValues = this._addValues(centerValues, clickedCodesForUnSelection);

		onChange(leftValues, centerValues, rightValues);

		this.setState({ leftSelectedValues: [] });
		this._unSelectNode(id + '-left-select-values-box');
	};

	TripleSelectBox.prototype._onClickUnSelectFromRight = function _onClickUnSelectFromRight() {
		var _props7 = this.props,
		    id = _props7.id,
		    onChange = _props7.onChange;

		var clickedCodesForUnSelection = this.state.rightSelectedValues;
		var leftValues = this.props.leftValues;
		var _props8 = this.props,
		    rightValues = _props8.rightValues,
		    centerValues = _props8.centerValues;


		rightValues = this._excludeValues(rightValues, clickedCodesForUnSelection);
		centerValues = this._addValues(centerValues, clickedCodesForUnSelection);

		onChange(leftValues, centerValues, rightValues);

		this.setState({ rightSelectedValues: [] });
		this._unSelectNode(id + '-right-select-values-box');
	};

	TripleSelectBox.prototype._renderLeftPanel = function _renderLeftPanel() {
		var _this2 = this;

		var _props9 = this.props,
		    id = _props9.id,
		    titleLeftBox = _props9.titleLeftBox;
		var leftValues = this.props.leftValues;


		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ style: { display: 'inline-block', textAlign: 'center' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 112
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'label',
				{
					className: 'label-style',
					style: _extends({}, this.props.labelStyle),
					__source: {
						fileName: _jsxFileName,
						lineNumber: 113
					},
					__self: this
				},
				titleLeftBox
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'select',
				{
					id: id + '-left-select-values-box',
					onChange: function onChange(ev) {
						leftValues = Array.apply(null, ev.target.options).filter(function (option) {
							return option.selected;
						}).map(function (o) {
							return o.value;
						});
						_this2.setState({ leftSelectedValues: leftValues });
					},
					className: 'box-style',
					style: _extends({}, this.props.boxStyle),
					size: this.props.numberOfLines || DEFAULT_LINES_NUM,
					multiple: true,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 119
					},
					__self: this
				},
				leftValues.map(function (value) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'option',
						{ key: value, className: 'select-box-option', style: { fontSize: '14px', fontWeight: 600 }, value: value, __source: {
								fileName: _jsxFileName,
								lineNumber: 131
							},
							__self: _this2
						},
						value
					);
				})
			)
		);
	};

	TripleSelectBox.prototype._renderRightPanel = function _renderRightPanel() {
		var _this3 = this;

		var _props10 = this.props,
		    id = _props10.id,
		    titleRightBox = _props10.titleRightBox;
		var rightValues = this.props.rightValues;


		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ style: { display: 'inline-block', textAlign: 'center' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 142
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'label',
				{
					className: 'label-style',
					style: _extends({}, this.props.labelStyle),
					__source: {
						fileName: _jsxFileName,
						lineNumber: 143
					},
					__self: this
				},
				titleRightBox
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'select',
				{
					id: id + '-right-select-values-box',
					onChange: function onChange(ev) {
						rightValues = Array.apply(null, ev.target.options).filter(function (option) {
							return option.selected;
						}).map(function (o) {
							return o.value;
						});
						_this3.setState({ rightSelectedValues: rightValues });
					},
					className: 'box-style',
					style: _extends({}, this.props.boxStyle),
					size: this.props.numberOfLines || DEFAULT_LINES_NUM,
					multiple: true,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 149
					},
					__self: this
				},
				rightValues.map(function (value) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'option',
						{ key: value, className: 'select-box-option', style: { fontSize: '14px', fontWeight: 600 }, value: value, __source: {
								fileName: _jsxFileName,
								lineNumber: 161
							},
							__self: _this3
						},
						value
					);
				})
			)
		);
	};

	TripleSelectBox.prototype._renderCenterPanel = function _renderCenterPanel() {
		var _this4 = this;

		var _props11 = this.props,
		    id = _props11.id,
		    titleNonselectedBox = _props11.titleNonselectedBox;
		var centerValues = this.props.centerValues;


		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ style: { display: 'inline-block', textAlign: 'center' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 172
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'label',
				{
					className: 'label-style',
					style: _extends({}, this.props.labelStyle),
					__source: {
						fileName: _jsxFileName,
						lineNumber: 173
					},
					__self: this
				},
				titleNonselectedBox
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'select',
				{
					id: id + '-center-select-values-box',
					onChange: function onChange(ev) {
						centerValues = Array.apply(null, ev.target.options).filter(function (option) {
							return option.selected;
						}).map(function (o) {
							return o.value;
						});
						_this4.setState({ nonSelectedValues: centerValues });
					},
					className: 'box-style',
					style: _extends({}, this.props.boxStyle),
					size: this.props.numberOfLines || DEFAULT_LINES_NUM,
					multiple: true,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 179
					},
					__self: this
				},
				centerValues.map(function (value) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'option',
						{ key: value, className: 'select-box-option', style: { fontSize: '14px', fontWeight: 600 }, value: value, __source: {
								fileName: _jsxFileName,
								lineNumber: 191
							},
							__self: _this4
						},
						value
					);
				})
			)
		);
	};

	TripleSelectBox.prototype._renderLeftButtons = function _renderLeftButtons() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ style: { display: 'inline-block', bottom: '60px', position: 'relative' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 199
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
				id: 'btnRight',
				type: 'button',
				className: 'input-style btn-arrows',
				value: '>>',
				onClick: this._onClickUnSelectFromLeft,
				disabled: !this.state.leftSelectedValues.length,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 200
				},
				__self: this
			}),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
				id: 'btnLeft',
				type: 'button',
				className: 'input-style btn-arrows',
				value: '<<',
				onClick: this._onClickSelectToLeft,
				disabled: !this.state.nonSelectedValues.length,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 208
				},
				__self: this
			})
		);
	};

	TripleSelectBox.prototype._renderRightButtons = function _renderRightButtons() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ style: { display: 'inline-block', bottom: '60px', position: 'relative' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 222
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
				id: 'btnRight',
				type: 'button',
				className: 'input-style btn-arrows',
				style: _extends({}, this.props.inputStyle),
				value: '>>',
				onClick: this._onClickSelectToRight,
				disabled: !this.state.nonSelectedValues.length,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 223
				},
				__self: this
			}),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
				id: 'btnLeft',
				type: 'button',
				className: 'input-style btn-arrows',
				style: _extends({}, this.props.inputStyle),
				value: '<<',
				onClick: this._onClickUnSelectFromRight,
				disabled: !this.state.rightSelectedValues.length,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 232
				},
				__self: this
			})
		);
	};

	TripleSelectBox.prototype.render = function render() {
		var id = this.props.id;

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ id: id, style: { display: 'inline-block', padding: '10px', margin: 'auto' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 248
				},
				__self: this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Untitled_1___default.a, { test: '1', __source: {
					fileName: _jsxFileName,
					lineNumber: 249
				},
				__self: this
			}),
			this._renderLeftPanel(),
			this._renderLeftButtons(),
			this._renderCenterPanel(),
			this._renderRightButtons(),
			this._renderRightPanel()
		);
	};

	return TripleSelectBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);




TripleSelectBox.propTypes = {
	id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	numberOfLines: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	boxStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
	labelStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
	inputStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
	rightValues: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
	leftValues: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
	centerValues: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
	titleRightBox: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	titleLeftBox: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	titleNonselectedBox: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	compareFn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(0);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(4);

var ReactPropTypesSecret = __webpack_require__(0);
var checkPropTypes = __webpack_require__(5);

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(6)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});