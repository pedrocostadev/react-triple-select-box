"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializer = initializer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function initializer(_ref) {
  var initialValues = _ref.initialValues,
      initialSelections = _ref.initialSelections;
  return {
    values: _objectSpread({}, initialValues),
    selections: _objectSpread({
      left: [],
      center: [],
      right: []
    }, initialSelections)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS9pbml0aWFsaXplcnMuanMiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZXIiLCJpbml0aWFsVmFsdWVzIiwiaW5pdGlhbFNlbGVjdGlvbnMiLCJ2YWx1ZXMiLCJzZWxlY3Rpb25zIiwibGVmdCIsImNlbnRlciIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sU0FBU0EsV0FBVCxPQUE0RDtBQUFBLE1BQXBDQyxhQUFvQyxRQUFwQ0EsYUFBb0M7QUFBQSxNQUFyQkMsaUJBQXFCLFFBQXJCQSxpQkFBcUI7QUFDakUsU0FBTztBQUNMQyxJQUFBQSxNQUFNLG9CQUNERixhQURDLENBREQ7QUFJTEcsSUFBQUEsVUFBVTtBQUNSQyxNQUFBQSxJQUFJLEVBQUUsRUFERTtBQUVSQyxNQUFBQSxNQUFNLEVBQUUsRUFGQTtBQUdSQyxNQUFBQSxLQUFLLEVBQUU7QUFIQyxPQUlMTCxpQkFKSztBQUpMLEdBQVA7QUFXRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplciAoeyBpbml0aWFsVmFsdWVzLCBpbml0aWFsU2VsZWN0aW9ucyB9KSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWVzOiB7XG4gICAgICAuLi5pbml0aWFsVmFsdWVzXG4gICAgfSxcbiAgICBzZWxlY3Rpb25zOiB7XG4gICAgICBsZWZ0OiBbXSxcbiAgICAgIGNlbnRlcjogW10sXG4gICAgICByaWdodDogW10sXG4gICAgICAuLi5pbml0aWFsU2VsZWN0aW9uc1xuICAgIH1cbiAgfVxufVxuIl19