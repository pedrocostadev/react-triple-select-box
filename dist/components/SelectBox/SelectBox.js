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
      options = _ref.options,
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
  }, options.map(function (_ref2) {
    var value = _ref2.value,
        selected = _ref2.selected,
        label = _ref2.label;
    return _react["default"].createElement("option", {
      className: "select-box-option".concat(selected ? ' select-box-option-selected' : ''),
      style: styles === null || styles === void 0 ? void 0 : styles.selectOption,
      key: value,
      value: value
    }, label ? label : value);
  })));
};

SelectBox.propTypes = {
  title: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
    label: _propTypes["default"].string,
    selected: _propTypes["default"].bool
  })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlbGVjdEJveC9TZWxlY3RCb3guanMiXSwibmFtZXMiOlsiREVGQVVMVF9ST1dTX05VTUJFUiIsIlNlbGVjdEJveCIsInRpdGxlIiwib3B0aW9ucyIsIm51bWJlck9mTGluZXMiLCJvblNlbGVjdCIsInN0eWxlcyIsImNvbnRhaW5lciIsImxhYmVsIiwic2VsZWN0IiwiZXYiLCJtYXAiLCJ2YWx1ZSIsInNlbGVjdGVkIiwic2VsZWN0T3B0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXlPZiIsInNoYXBlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxFQUE1Qjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLE9BQVYsUUFBVUEsT0FBVjtBQUFBLE1BQW1CQyxhQUFuQixRQUFtQkEsYUFBbkI7QUFBQSxNQUFrQ0MsUUFBbEMsUUFBa0NBLFFBQWxDO0FBQUEsTUFBNENDLE1BQTVDLFFBQTRDQSxNQUE1QztBQUFBLFNBQ2hCO0FBQVMsSUFBQSxLQUFLLEVBQUVBLE1BQUYsYUFBRUEsTUFBRix1QkFBRUEsTUFBTSxDQUFFQyxTQUF4QjtBQUFtQyxJQUFBLFNBQVMsRUFBQztBQUE3QyxLQUNDO0FBQU8sSUFBQSxTQUFTLEVBQUMsa0JBQWpCO0FBQW9DLElBQUEsS0FBSyxFQUFFRCxNQUFGLGFBQUVBLE1BQUYsdUJBQUVBLE1BQU0sQ0FBRUU7QUFBbkQsS0FBMkROLEtBQTNELENBREQsRUFFQztBQUNDLElBQUEsU0FBUyxFQUFDLFlBRFg7QUFFQyxJQUFBLEtBQUssRUFBRUksTUFBRixhQUFFQSxNQUFGLHVCQUFFQSxNQUFNLENBQUVHLE1BRmhCO0FBR0MsSUFBQSxRQUFRLEVBQUUsa0JBQUFDLEVBQUU7QUFBQSxhQUFJTCxRQUFRLENBQUMsNkJBQWVLLEVBQWYsQ0FBRCxDQUFaO0FBQUEsS0FIYjtBQUlDLElBQUEsSUFBSSxFQUFFTixhQUpQO0FBS0MsSUFBQSxRQUFRO0FBTFQsS0FPRUQsT0FBTyxDQUFDUSxHQUFSLENBQVk7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxRQUFVQyxRQUFWLFNBQVVBLFFBQVY7QUFBQSxRQUFvQkwsS0FBcEIsU0FBb0JBLEtBQXBCO0FBQUEsV0FDWjtBQUNDLE1BQUEsU0FBUyw2QkFBc0JLLFFBQVEsR0FBRyw2QkFBSCxHQUFtQyxFQUFqRSxDQURWO0FBRUMsTUFBQSxLQUFLLEVBQUVQLE1BQUYsYUFBRUEsTUFBRix1QkFBRUEsTUFBTSxDQUFFUSxZQUZoQjtBQUdDLE1BQUEsR0FBRyxFQUFFRixLQUhOO0FBSUMsTUFBQSxLQUFLLEVBQUVBO0FBSlIsT0FNRUosS0FBSyxHQUFHQSxLQUFILEdBQVdJLEtBTmxCLENBRFk7QUFBQSxHQUFaLENBUEYsQ0FGRCxDQURnQjtBQUFBLENBQWxCOztBQXdCQVgsU0FBUyxDQUFDYyxTQUFWLEdBQXNCO0FBQ3JCYixFQUFBQSxLQUFLLEVBQUVjLHNCQUFVQyxNQURJO0FBRXJCZCxFQUFBQSxPQUFPLEVBQUVhLHNCQUFVRSxPQUFWLENBQ1JGLHNCQUFVRyxLQUFWLENBQWdCO0FBQ2ZQLElBQUFBLEtBQUssRUFBRUksc0JBQVVJLFNBQVYsQ0FBb0IsQ0FBRUosc0JBQVVLLE1BQVosRUFBb0JMLHNCQUFVQyxNQUE5QixDQUFwQixFQUE0REssVUFEcEQ7QUFFZmQsSUFBQUEsS0FBSyxFQUFFUSxzQkFBVUMsTUFGRjtBQUdmSixJQUFBQSxRQUFRLEVBQUVHLHNCQUFVTztBQUhMLEdBQWhCLENBRFEsQ0FGWTtBQVNyQm5CLEVBQUFBLGFBQWEsRUFBRVksc0JBQVVLLE1BVEo7QUFVckJoQixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVUSxJQUFWLENBQWVGLFVBVko7QUFXckJoQixFQUFBQSxNQUFNLEVBQUVVLHNCQUFVUztBQVhHLENBQXRCO0FBY0F4QixTQUFTLENBQUN5QixZQUFWLEdBQXlCO0FBQ3hCeEIsRUFBQUEsS0FBSyxFQUFFLEVBRGlCO0FBRXhCRSxFQUFBQSxhQUFhLEVBQUVKO0FBRlMsQ0FBekI7ZUFLZUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBwYXJzZVNlbGVjdGlvbiB9IGZyb20gJy4vaGVscGVycydcbmltcG9ydCAnLi9TZWxlY3RCb3guY3NzJ1xuXG5jb25zdCBERUZBVUxUX1JPV1NfTlVNQkVSID0gMTBcblxuY29uc3QgU2VsZWN0Qm94ID0gKHsgdGl0bGUsIG9wdGlvbnMsIG51bWJlck9mTGluZXMsIG9uU2VsZWN0LCBzdHlsZXMgfSkgPT4gKFxuXHRcdDxzZWN0aW9uIHN0eWxlPXtzdHlsZXM/LmNvbnRhaW5lcn0gY2xhc3NOYW1lPVwic2VsZWN0LWJveC1jb250YWluZXJcIiA+XG5cdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic2VsZWN0LWJveC1sYWJlbFwiIHN0eWxlPXtzdHlsZXM/LmxhYmVsfT57dGl0bGV9PC9sYWJlbD5cblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPVwic2VsZWN0LWJveFwiXG5cdFx0XHRcdHN0eWxlPXtzdHlsZXM/LnNlbGVjdH1cblx0XHRcdFx0b25DaGFuZ2U9e2V2ID0+IG9uU2VsZWN0KHBhcnNlU2VsZWN0aW9uKGV2KSl9XG5cdFx0XHRcdHNpemU9e251bWJlck9mTGluZXN9XG5cdFx0XHRcdG11bHRpcGxlXG5cdFx0XHQ+XG5cdFx0XHRcdHtvcHRpb25zLm1hcCgoeyB2YWx1ZSwgc2VsZWN0ZWQsIGxhYmVsIH0pID0+IChcblx0XHRcdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BzZWxlY3QtYm94LW9wdGlvbiR7c2VsZWN0ZWQgPyAnIHNlbGVjdC1ib3gtb3B0aW9uLXNlbGVjdGVkJyA6ICcnIH1gfVxuXHRcdFx0XHRcdFx0c3R5bGU9e3N0eWxlcz8uc2VsZWN0T3B0aW9ufVxuXHRcdFx0XHRcdFx0a2V5PXt2YWx1ZX1cblx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7bGFiZWwgPyBsYWJlbCA6IHZhbHVlfVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvc2VsZWN0PlxuXHRcdDwvc2VjdGlvbj5cblx0KVxuXG5TZWxlY3RCb3gucHJvcFR5cGVzID0ge1xuXHR0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcblx0b3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG5cdFx0UHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZyBdKS5pc1JlcXVpcmVkLFxuXHRcdFx0bGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0XHRzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2xcblx0XHR9KVxuXHQpLFxuXHRudW1iZXJPZkxpbmVzOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0c3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cblNlbGVjdEJveC5kZWZhdWx0UHJvcHMgPSB7XG5cdHRpdGxlOiAnJyxcblx0bnVtYmVyT2ZMaW5lczogREVGQVVMVF9ST1dTX05VTUJFUixcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Qm94Il19