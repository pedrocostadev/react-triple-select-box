"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

require("./SelectBox.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_ROWS_NUMBER = 10;

var SelectBox = function SelectBox(_ref) {
  var title = _ref.title,
      values = _ref.values,
      numberOfLines = _ref.numberOfLines,
      onSelect = _ref.onSelect,
      styles = _ref.styles;
  return _react["default"].createElement("section", {
    style: styles === null || styles === void 0 ? void 0 : styles.container,
    className: "select-box-container"
  }, _react["default"].createElement("label", {
    className: "select-box-label",
    style: styles === null || styles === void 0 ? void 0 : styles.label
  }, title), _react["default"].createElement("select", {
    className: "select-box",
    style: styles === null || styles === void 0 ? void 0 : styles.select,
    onChange: function onChange(ev) {
      return onSelect((0, _helpers.parseSelection)(ev));
    },
    size: numberOfLines,
    multiple: true
  }, values.map(function (value) {
    return _react["default"].createElement("option", {
      className: "select-box-option",
      style: styles === null || styles === void 0 ? void 0 : styles.selectOption,
      key: value,
      value: value
    }, value);
  })));
};

SelectBox.propTypes = {
  title: _propTypes["default"].string,
  values: _propTypes["default"].array.isRequired,
  numberOfLines: _propTypes["default"].number,
  onSelect: _propTypes["default"].func.isRequired,
  styles: _propTypes["default"].object
};
SelectBox.defaultProps = {
  title: '',
  numberOfLines: DEFAULT_ROWS_NUMBER
};
var _default = SelectBox;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlbGVjdEJveC9TZWxlY3RCb3guanMiXSwibmFtZXMiOlsiREVGQVVMVF9ST1dTX05VTUJFUiIsIlNlbGVjdEJveCIsInRpdGxlIiwidmFsdWVzIiwibnVtYmVyT2ZMaW5lcyIsIm9uU2VsZWN0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibGFiZWwiLCJzZWxlY3QiLCJldiIsIm1hcCIsInZhbHVlIiwic2VsZWN0T3B0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsRUFBNUI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBd0Q7QUFBQSxNQUFyREMsS0FBcUQsUUFBckRBLEtBQXFEO0FBQUEsTUFBOUNDLE1BQThDLFFBQTlDQSxNQUE4QztBQUFBLE1BQXRDQyxhQUFzQyxRQUF0Q0EsYUFBc0M7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ3pFLFNBQ0M7QUFBUyxJQUFBLEtBQUssRUFBRUEsTUFBRixhQUFFQSxNQUFGLHVCQUFFQSxNQUFNLENBQUVDLFNBQXhCO0FBQW1DLElBQUEsU0FBUyxFQUFDO0FBQTdDLEtBQ0M7QUFBTyxJQUFBLFNBQVMsRUFBQyxrQkFBakI7QUFBb0MsSUFBQSxLQUFLLEVBQUVELE1BQUYsYUFBRUEsTUFBRix1QkFBRUEsTUFBTSxDQUFFRTtBQUFuRCxLQUEyRE4sS0FBM0QsQ0FERCxFQUVDO0FBQ0MsSUFBQSxTQUFTLEVBQUMsWUFEWDtBQUVDLElBQUEsS0FBSyxFQUFFSSxNQUFGLGFBQUVBLE1BQUYsdUJBQUVBLE1BQU0sQ0FBRUcsTUFGaEI7QUFHQyxJQUFBLFFBQVEsRUFBRSxrQkFBQUMsRUFBRTtBQUFBLGFBQUlMLFFBQVEsQ0FBQyw2QkFBZUssRUFBZixDQUFELENBQVo7QUFBQSxLQUhiO0FBSUMsSUFBQSxJQUFJLEVBQUVOLGFBSlA7QUFLQyxJQUFBLFFBQVE7QUFMVCxLQU9FRCxNQUFNLENBQUNRLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsV0FDWDtBQUNDLE1BQUEsU0FBUyxFQUFDLG1CQURYO0FBRUMsTUFBQSxLQUFLLEVBQUVOLE1BQUYsYUFBRUEsTUFBRix1QkFBRUEsTUFBTSxDQUFFTyxZQUZoQjtBQUdDLE1BQUEsR0FBRyxFQUFFRCxLQUhOO0FBSUMsTUFBQSxLQUFLLEVBQUVBO0FBSlIsT0FNRUEsS0FORixDQURXO0FBQUEsR0FBWCxDQVBGLENBRkQsQ0FERDtBQXVCQSxDQXhCRDs7QUEwQkFYLFNBQVMsQ0FBQ2EsU0FBVixHQUFzQjtBQUNyQlosRUFBQUEsS0FBSyxFQUFFYSxzQkFBVUMsTUFESTtBQUVyQmIsRUFBQUEsTUFBTSxFQUFFWSxzQkFBVUUsS0FBVixDQUFnQkMsVUFGSDtBQUdyQmQsRUFBQUEsYUFBYSxFQUFFVyxzQkFBVUksTUFISjtBQUlyQmQsRUFBQUEsUUFBUSxFQUFFVSxzQkFBVUssSUFBVixDQUFlRixVQUpKO0FBS3JCWixFQUFBQSxNQUFNLEVBQUVTLHNCQUFVTTtBQUxHLENBQXRCO0FBUUFwQixTQUFTLENBQUNxQixZQUFWLEdBQXlCO0FBQ3hCcEIsRUFBQUEsS0FBSyxFQUFFLEVBRGlCO0FBRXhCRSxFQUFBQSxhQUFhLEVBQUVKO0FBRlMsQ0FBekI7ZUFLZUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBwYXJzZVNlbGVjdGlvbiB9IGZyb20gJy4vaGVscGVycydcbmltcG9ydCAnLi9TZWxlY3RCb3guY3NzJ1xuXG5jb25zdCBERUZBVUxUX1JPV1NfTlVNQkVSID0gMTBcblxuY29uc3QgU2VsZWN0Qm94ID0gKHsgdGl0bGUsIHZhbHVlcywgbnVtYmVyT2ZMaW5lcywgb25TZWxlY3QsIHN0eWxlcyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gc3R5bGU9e3N0eWxlcz8uY29udGFpbmVyfSBjbGFzc05hbWU9XCJzZWxlY3QtYm94LWNvbnRhaW5lclwiID5cblx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzZWxlY3QtYm94LWxhYmVsXCIgc3R5bGU9e3N0eWxlcz8ubGFiZWx9Pnt0aXRsZX08L2xhYmVsPlxuXHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRjbGFzc05hbWU9XCJzZWxlY3QtYm94XCJcblx0XHRcdFx0c3R5bGU9e3N0eWxlcz8uc2VsZWN0fVxuXHRcdFx0XHRvbkNoYW5nZT17ZXYgPT4gb25TZWxlY3QocGFyc2VTZWxlY3Rpb24oZXYpKX1cblx0XHRcdFx0c2l6ZT17bnVtYmVyT2ZMaW5lc31cblx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdD5cblx0XHRcdFx0e3ZhbHVlcy5tYXAoKHZhbHVlKSA9PiAoXG5cdFx0XHRcdFx0PG9wdGlvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2VsZWN0LWJveC1vcHRpb25cIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3N0eWxlcz8uc2VsZWN0T3B0aW9ufVxuXHRcdFx0XHRcdFx0a2V5PXt2YWx1ZX1cblx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7dmFsdWV9XG5cdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcblxuU2VsZWN0Qm94LnByb3BUeXBlcyA9IHtcblx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHZhbHVlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cdG51bWJlck9mTGluZXM6IFByb3BUeXBlcy5udW1iZXIsXG5cdG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRzdHlsZXM6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuU2VsZWN0Qm94LmRlZmF1bHRQcm9wcyA9IHtcblx0dGl0bGU6ICcnLFxuXHRudW1iZXJPZkxpbmVzOiBERUZBVUxUX1JPV1NfTlVNQkVSLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RCb3giXX0=