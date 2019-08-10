"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializer = void 0;

var _helpers = require("./helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initializer = function initializer(_ref) {
  var options = _ref.options;
  return {
    options: {
      left: options.left.map(function (value) {
        return _objectSpread({
          selected: (0, _helpers.isObject)(value) && value.selected
        }, (0, _helpers.isObject)(value) ? value : {
          value: value
        });
      }),
      center: options.center.map(function (value) {
        return _objectSpread({
          selected: (0, _helpers.isObject)(value) && value.selected
        }, (0, _helpers.isObject)(value) ? value : {
          value: value
        });
      }),
      right: options.right.map(function (value) {
        return _objectSpread({
          selected: (0, _helpers.isObject)(value) && value.selected
        }, (0, _helpers.isObject)(value) ? value : {
          value: value
        });
      })
    }
  };
};

exports.initializer = initializer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS9pbml0aWFsaXplcnMuanMiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZXIiLCJvcHRpb25zIiwibGVmdCIsIm1hcCIsInZhbHVlIiwic2VsZWN0ZWQiLCJjZW50ZXIiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBa0I7QUFDekNBLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxJQUFJLEVBQUVELE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxHQUFiLENBQWlCLFVBQUFDLEtBQUs7QUFBQTtBQUN4QkMsVUFBQUEsUUFBUSxFQUFFLHVCQUFTRCxLQUFULEtBQW1CQSxLQUFLLENBQUNDO0FBRFgsV0FFcEIsdUJBQVNELEtBQVQsSUFBa0JBLEtBQWxCLEdBQTBCO0FBQUVBLFVBQUFBLEtBQUssRUFBTEE7QUFBRixTQUZOO0FBQUEsT0FBdEIsQ0FEQztBQUtQRSxNQUFBQSxNQUFNLEVBQUVMLE9BQU8sQ0FBQ0ssTUFBUixDQUFlSCxHQUFmLENBQW1CLFVBQUFDLEtBQUs7QUFBQTtBQUM5QkMsVUFBQUEsUUFBUSxFQUFFLHVCQUFTRCxLQUFULEtBQW1CQSxLQUFLLENBQUNDO0FBREwsV0FFMUIsdUJBQVNELEtBQVQsSUFBa0JBLEtBQWxCLEdBQTBCO0FBQUVBLFVBQUFBLEtBQUssRUFBTEE7QUFBRixTQUZBO0FBQUEsT0FBeEIsQ0FMRDtBQVNQRyxNQUFBQSxLQUFLLEVBQUVOLE9BQU8sQ0FBQ00sS0FBUixDQUFjSixHQUFkLENBQWtCLFVBQUFDLEtBQUs7QUFBQTtBQUM1QkMsVUFBQUEsUUFBUSxFQUFFLHVCQUFTRCxLQUFULEtBQW1CQSxLQUFLLENBQUNDO0FBRFAsV0FFeEIsdUJBQVNELEtBQVQsSUFBa0JBLEtBQWxCLEdBQTBCO0FBQUVBLFVBQUFBLEtBQUssRUFBTEE7QUFBRixTQUZGO0FBQUEsT0FBdkI7QUFUQTtBQURnQyxHQUFsQjtBQUFBLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL2hlbHBlcnMnXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplciA9ICh7IG9wdGlvbnMgfSkgPT4gKHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBsZWZ0OiBvcHRpb25zLmxlZnQubWFwKHZhbHVlID0+ICh7XG4gICAgICAgICAgc2VsZWN0ZWQ6IGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5zZWxlY3RlZCxcbiAgICAgICAgICAuLi4oaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiB7IHZhbHVlIH0pXG4gICAgICB9KSksXG4gICAgICBjZW50ZXI6IG9wdGlvbnMuY2VudGVyLm1hcCh2YWx1ZSA9PiAoe1xuICAgICAgICBzZWxlY3RlZDogaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLnNlbGVjdGVkLFxuICAgICAgICAuLi4oaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiB7IHZhbHVlIH0pXG4gICAgICB9KSksXG4gICAgICByaWdodDogb3B0aW9ucy5yaWdodC5tYXAodmFsdWUgPT4gKHtcbiAgICAgICAgc2VsZWN0ZWQ6IGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5zZWxlY3RlZCxcbiAgICAgICAgLi4uKGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogeyB2YWx1ZSB9KVxuICAgICAgfSkpLFxuICAgIH1cbn0pXG4gXG4iXX0=