/*!
 * react-triple-select-box v0.0.2
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
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TripleSelectBox_jsx__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TripleSelectBox", function() { return __WEBPACK_IMPORTED_MODULE_0__TripleSelectBox_jsx__["TripleSelectBox"]; });


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TripleSelectBox_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TripleSelectBox_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__TripleSelectBox_css__);
/* unused harmony export default */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\repos\\react-triple-select-box\\src\\TripleSelectBox.jsx';

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


    centerValues = centerValues.filter(function (value) {
      return clickedCodesForSelection.indexOf(value) === -1;
    });
    rightValues = rightValues.concat(clickedCodesForSelection);

    onChange(leftValues, centerValues, rightValues);

    this.setState({ nonSelectedValues: [] });
    this._unSelectNode(id + '-center-select-values-box');
  };

  TripleSelectBox.prototype._onClickSelectToLeft = function _onClickSelectToLeft() {
    console.log('_onClickSelectToLeft_onClickSelectToLeft_onClickSelectToLeft');
    var _props3 = this.props,
        id = _props3.id,
        onChange = _props3.onChange;

    var clickedCodesForSelection = this.state.nonSelectedValues;

    var _props4 = this.props,
        leftValues = _props4.leftValues,
        centerValues = _props4.centerValues;
    var rightValues = this.props.rightValues;


    centerValues = centerValues.filter(function (value) {
      return clickedCodesForSelection.indexOf(value) === -1;
    });
    leftValues = leftValues.concat(clickedCodesForSelection);

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


    leftValues = leftValues.filter(function (value) {
      return clickedCodesForUnSelection.indexOf(parseInt(value, 10)) === -1;
    });
    centerValues = centerValues.concat(clickedCodesForUnSelection);

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


    rightValues = rightValues.filter(function (value) {
      return clickedCodesForUnSelection.indexOf(parseInt(value, 10)) === -1;
    });
    centerValues = centerValues.concat(clickedCodesForUnSelection);

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
      { style: { display: 'inline-block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'label',
        {
          className: 'labelStyle',
          style: _extends({}, this.props.labelStyle),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
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
            _this2.setState({ leftSelectedValues: leftValues.map(function (code) {
                return parseInt(code, 10);
              }) });
          },
          className: 'boxStyle',
          style: _extends({}, this.props.boxStyle),
          size: this.props.numberOfLines || DEFAULT_LINES_NUM,
          multiple: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        },
        leftValues.map(function (value, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { key: i, style: { fontSize: '14px', fontWeight: 600 }, value: value, __source: {
                fileName: _jsxFileName,
                lineNumber: 117
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
      { style: { display: 'inline-block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'label',
        {
          className: 'labelStyle',
          style: _extends({}, this.props.labelStyle),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
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
            _this3.setState({ rightSelectedValues: rightValues.map(function (code) {
                return parseInt(code, 10);
              }) });
          },
          className: 'boxStyle',
          style: _extends({}, this.props.boxStyle),
          size: this.props.numberOfLines || DEFAULT_LINES_NUM,
          multiple: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        },
        rightValues.map(function (value, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { key: i, style: { fontSize: '14px', fontWeight: 600 }, value: value, __source: {
                fileName: _jsxFileName,
                lineNumber: 147
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
      { style: { display: 'inline-block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'label',
        {
          className: 'labelStyle',
          style: _extends({}, this.props.labelStyle),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
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
            _this4.setState({ nonSelectedValues: centerValues.map(function (code) {
                return parseInt(code, 10);
              }) });
          },
          className: 'boxStyle',
          style: _extends({}, this.props.boxStyle),
          size: this.props.numberOfLines || DEFAULT_LINES_NUM,
          multiple: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        },
        centerValues.map(function (value, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { key: i, style: { fontSize: '14px', fontWeight: 600 }, value: value, __source: {
                fileName: _jsxFileName,
                lineNumber: 177
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
          lineNumber: 185
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
        id: 'btnRight',
        type: 'button',
        className: 'inputStyle',
        value: '>>',
        onClick: this._onClickUnSelectFromLeft,
        disabled: !this.state.leftSelectedValues.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
        id: 'btnLeft',
        type: 'button',
        className: 'inputStyle',
        value: '<<',
        onClick: this._onClickSelectToLeft,
        disabled: !this.state.nonSelectedValues.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
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
          lineNumber: 208
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
        id: 'btnRight',
        type: 'button',
        className: 'inputStyle',
        style: _extends({}, this.props.inputStyle),
        value: '>>',
        onClick: this._onClickSelectToRight,
        disabled: !this.state.nonSelectedValues.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
        id: 'btnLeft',
        type: 'button',
        className: 'inputStyle',
        style: _extends({}, this.props.inputStyle),
        value: '<<',
        onClick: this._onClickUnSelectFromRight,
        disabled: !this.state.rightSelectedValues.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      })
    );
  };

  TripleSelectBox.prototype.render = function render() {
    var id = this.props.id;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: id, style: { display: 'inline-block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      },
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
  id: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
  numberOfLines: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  boxStyle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  labelStyle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  inputStyle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  rightValues: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
  leftValues: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
  centerValues: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired,
  titleRightBox: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
  titleLeftBox: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
  titleNonselectedBox: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
  onChange: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});