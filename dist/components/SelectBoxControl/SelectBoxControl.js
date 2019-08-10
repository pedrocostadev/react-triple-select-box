"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./SelectBoxControl.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TO_RIGHT_ARROWS = ">>";
var TO_LEFT_ARROWS = "<<";

var SelectBoxControl = function SelectBoxControl(_ref) {
  var styles = _ref.styles,
      sendToLeft = _ref.sendToLeft,
      sendToLeftDisabled = _ref.sendToLeftDisabled,
      sendToRight = _ref.sendToRight,
      sendToRightDisabled = _ref.sendToRightDisabled;
  return _react["default"].createElement("section", {
    style: styles === null || styles === void 0 ? void 0 : styles.container,
    className: "select-box-control-container"
  }, _react["default"].createElement("input", {
    className: "select-box-control-button",
    style: styles === null || styles === void 0 ? void 0 : styles.button,
    onClick: sendToLeft,
    type: "button",
    value: TO_LEFT_ARROWS,
    disabled: sendToLeftDisabled
  }), _react["default"].createElement("input", {
    style: styles === null || styles === void 0 ? void 0 : styles.button,
    className: "select-box-control-button",
    onClick: sendToRight,
    type: "button",
    value: TO_RIGHT_ARROWS,
    disabled: sendToRightDisabled
  }));
};

SelectBoxControl.propTypes = {
  styles: _propTypes["default"].object,
  sendToLeft: _propTypes["default"].func.isRequired,
  sendToLeftDisabled: _propTypes["default"].bool,
  sendToRight: _propTypes["default"].func.isRequired,
  sendToRightDisabled: _propTypes["default"].bool
};
var _default = SelectBoxControl;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlbGVjdEJveENvbnRyb2wvU2VsZWN0Qm94Q29udHJvbC5qcyJdLCJuYW1lcyI6WyJUT19SSUdIVF9BUlJPV1MiLCJUT19MRUZUX0FSUk9XUyIsIlNlbGVjdEJveENvbnRyb2wiLCJzdHlsZXMiLCJzZW5kVG9MZWZ0Iiwic2VuZFRvTGVmdERpc2FibGVkIiwic2VuZFRvUmlnaHQiLCJzZW5kVG9SaWdodERpc2FibGVkIiwiY29udGFpbmVyIiwiYnV0dG9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsSUFBeEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsSUFBdkI7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFtRjtBQUFBLE1BQWhGQyxNQUFnRixRQUFoRkEsTUFBZ0Y7QUFBQSxNQUF4RUMsVUFBd0UsUUFBeEVBLFVBQXdFO0FBQUEsTUFBNURDLGtCQUE0RCxRQUE1REEsa0JBQTREO0FBQUEsTUFBeENDLFdBQXdDLFFBQXhDQSxXQUF3QztBQUFBLE1BQTNCQyxtQkFBMkIsUUFBM0JBLG1CQUEyQjtBQUMzRyxTQUNDO0FBQVMsSUFBQSxLQUFLLEVBQUVKLE1BQUYsYUFBRUEsTUFBRix1QkFBRUEsTUFBTSxDQUFFSyxTQUF4QjtBQUFtQyxJQUFBLFNBQVMsRUFBQztBQUE3QyxLQUNDO0FBQ0MsSUFBQSxTQUFTLEVBQUMsMkJBRFg7QUFFTyxJQUFBLEtBQUssRUFBRUwsTUFBRixhQUFFQSxNQUFGLHVCQUFFQSxNQUFNLENBQUVNLE1BRnRCO0FBR0MsSUFBQSxPQUFPLEVBQUVMLFVBSFY7QUFJQyxJQUFBLElBQUksRUFBQyxRQUpOO0FBS0MsSUFBQSxLQUFLLEVBQUVILGNBTFI7QUFNQyxJQUFBLFFBQVEsRUFBRUk7QUFOWCxJQURELEVBU0M7QUFDTyxJQUFBLEtBQUssRUFBRUYsTUFBRixhQUFFQSxNQUFGLHVCQUFFQSxNQUFNLENBQUVNLE1BRHRCO0FBRUMsSUFBQSxTQUFTLEVBQUMsMkJBRlg7QUFHQyxJQUFBLE9BQU8sRUFBRUgsV0FIVjtBQUlDLElBQUEsSUFBSSxFQUFDLFFBSk47QUFLQyxJQUFBLEtBQUssRUFBRU4sZUFMUjtBQU1DLElBQUEsUUFBUSxFQUFFTztBQU5YLElBVEQsQ0FERDtBQW9CQSxDQXJCRDs7QUF1QkFMLGdCQUFnQixDQUFDUSxTQUFqQixHQUE2QjtBQUMzQlAsRUFBQUEsTUFBTSxFQUFFUSxzQkFBVUMsTUFEUztBQUUzQlIsRUFBQUEsVUFBVSxFQUFFTyxzQkFBVUUsSUFBVixDQUFlQyxVQUZBO0FBRzNCVCxFQUFBQSxrQkFBa0IsRUFBRU0sc0JBQVVJLElBSEg7QUFJM0JULEVBQUFBLFdBQVcsRUFBRUssc0JBQVVFLElBQVYsQ0FBZUMsVUFKRDtBQUszQlAsRUFBQUEsbUJBQW1CLEVBQUVJLHNCQUFVSTtBQUxKLENBQTdCO2VBUWViLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9TZWxlY3RCb3hDb250cm9sLmNzcydcblxuY29uc3QgVE9fUklHSFRfQVJST1dTID0gXCI+PlwiXG5jb25zdCBUT19MRUZUX0FSUk9XUyA9IFwiPDxcIlxuXG5jb25zdCBTZWxlY3RCb3hDb250cm9sID0gKHsgc3R5bGVzLCBzZW5kVG9MZWZ0LCBzZW5kVG9MZWZ0RGlzYWJsZWQsIHNlbmRUb1JpZ2h0LCBzZW5kVG9SaWdodERpc2FibGVkICB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gc3R5bGU9e3N0eWxlcz8uY29udGFpbmVyfSBjbGFzc05hbWU9XCJzZWxlY3QtYm94LWNvbnRyb2wtY29udGFpbmVyXCI+XG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0Y2xhc3NOYW1lPVwic2VsZWN0LWJveC1jb250cm9sLWJ1dHRvblwiXG4gICAgICAgIFx0XHRzdHlsZT17c3R5bGVzPy5idXR0b259XG5cdFx0XHRcdG9uQ2xpY2s9e3NlbmRUb0xlZnR9XG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHR2YWx1ZT17VE9fTEVGVF9BUlJPV1N9XG5cdFx0XHRcdGRpc2FibGVkPXtzZW5kVG9MZWZ0RGlzYWJsZWR9XG5cdFx0XHQvPlxuXHRcdFx0PGlucHV0XG4gICAgICAgIFx0XHRzdHlsZT17c3R5bGVzPy5idXR0b259XG5cdFx0XHRcdGNsYXNzTmFtZT1cInNlbGVjdC1ib3gtY29udHJvbC1idXR0b25cIlxuXHRcdFx0XHRvbkNsaWNrPXtzZW5kVG9SaWdodH1cblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdHZhbHVlPXtUT19SSUdIVF9BUlJPV1N9XG5cdFx0XHRcdGRpc2FibGVkPXtzZW5kVG9SaWdodERpc2FibGVkfVxuXHRcdFx0Lz5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cblNlbGVjdEJveENvbnRyb2wucHJvcFR5cGVzID0ge1xuICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNlbmRUb0xlZnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbmRUb0xlZnREaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNlbmRUb1JpZ2h0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZW5kVG9SaWdodERpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RCb3hDb250cm9sIl19