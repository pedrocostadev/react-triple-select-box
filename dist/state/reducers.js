"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = reducer;

var _actions = require("./actions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, action) {
  var values = state.values,
      selections = state.selections;

  switch (action.type) {
    case _actions.ACTIONS.LEFT_TO_CENTER:
      {
        var newLeftValues = values.left.filter(function (value) {
          return !selections.left.includes(value);
        });
        var newCenterValues = values.center.concat(selections.left);
        return {
          values: _objectSpread({}, values, {
            left: newLeftValues,
            center: newCenterValues
          }),
          selections: _objectSpread({}, selections, {
            left: []
          })
        };
      }

    case _actions.ACTIONS.CENTER_TO_LEFT:
      {
        var _newCenterValues = values.center.filter(function (value) {
          return !selections.center.includes(value);
        });

        var _newLeftValues = values.left.concat(selections.center);

        return {
          values: _objectSpread({}, values, {
            left: _newLeftValues,
            center: _newCenterValues
          }),
          selections: _objectSpread({}, selections, {
            center: []
          })
        };
      }

    case _actions.ACTIONS.RIGTH_TO_CENTER:
      {
        var newRightValues = values.right.filter(function (value) {
          return !selections.right.includes(value);
        });

        var _newCenterValues2 = values.center.concat(selections.right);

        return {
          values: _objectSpread({}, values, {
            right: newRightValues,
            center: _newCenterValues2
          }),
          selections: _objectSpread({}, selections, {
            right: []
          })
        };
      }

    case _actions.ACTIONS.CENTER_TO_RIGHT:
      {
        var _newCenterValues3 = values.center.filter(function (value) {
          return !selections.center.includes(value);
        });

        var _newRightValues = values.right.concat(selections.center);

        return {
          values: _objectSpread({}, values, {
            right: _newRightValues,
            center: _newCenterValues3
          }),
          selections: _objectSpread({}, selections, {
            center: []
          })
        };
      }

    case _actions.ACTIONS.SELECT_LEFT_VALUES:
      {
        return {
          values: values,
          selections: _objectSpread({}, selections, {
            left: action.valuesToSelect
          })
        };
      }

    case _actions.ACTIONS.SELECT_CENTER_VALUES:
      {
        return {
          values: values,
          selections: _objectSpread({}, selections, {
            center: action.valuesToSelect
          })
        };
      }

    case _actions.ACTIONS.SELECT_RIGHT_VALUES:
      {
        return {
          values: values,
          selections: _objectSpread({}, selections, {
            right: action.valuesToSelect
          })
        };
      }

    default:
      return state;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS9yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ2YWx1ZXMiLCJzZWxlY3Rpb25zIiwidHlwZSIsIkFDVElPTlMiLCJMRUZUX1RPX0NFTlRFUiIsIm5ld0xlZnRWYWx1ZXMiLCJsZWZ0IiwiZmlsdGVyIiwidmFsdWUiLCJpbmNsdWRlcyIsIm5ld0NlbnRlclZhbHVlcyIsImNlbnRlciIsImNvbmNhdCIsIkNFTlRFUl9UT19MRUZUIiwiUklHVEhfVE9fQ0VOVEVSIiwibmV3UmlnaHRWYWx1ZXMiLCJyaWdodCIsIkNFTlRFUl9UT19SSUdIVCIsIlNFTEVDVF9MRUZUX1ZBTFVFUyIsInZhbHVlc1RvU2VsZWN0IiwiU0VMRUNUX0NFTlRFUl9WQUxVRVMiLCJTRUxFQ1RfUklHSFRfVkFMVUVTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRU8sU0FBU0EsT0FBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQUEsTUFDOUJDLE1BRDhCLEdBQ1BGLEtBRE8sQ0FDOUJFLE1BRDhCO0FBQUEsTUFDdEJDLFVBRHNCLEdBQ1BILEtBRE8sQ0FDdEJHLFVBRHNCOztBQUd0QyxVQUFRRixNQUFNLENBQUNHLElBQWY7QUFDRSxTQUFLQyxpQkFBUUMsY0FBYjtBQUE2QjtBQUMzQixZQUFNQyxhQUFhLEdBQUdMLE1BQU0sQ0FBQ00sSUFBUCxDQUFZQyxNQUFaLENBQW1CLFVBQUNDLEtBQUQ7QUFBQSxpQkFBVyxDQUFDUCxVQUFVLENBQUNLLElBQVgsQ0FBZ0JHLFFBQWhCLENBQXlCRCxLQUF6QixDQUFaO0FBQUEsU0FBbkIsQ0FBdEI7QUFDQSxZQUFNRSxlQUFlLEdBQUdWLE1BQU0sQ0FBQ1csTUFBUCxDQUFjQyxNQUFkLENBQXFCWCxVQUFVLENBQUNLLElBQWhDLENBQXhCO0FBQ0EsZUFBTztBQUNMTixVQUFBQSxNQUFNLG9CQUNEQSxNQURDO0FBRUpNLFlBQUFBLElBQUks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RUxDLFVBQUFBLFVBQVUsb0JBQ0xBLFVBREs7QUFFUmUsWUFBQUEsS0FBSyxFQUFFakIsTUFBTSxDQUFDb0I7QUFGTjtBQUZMLFNBQVA7QUFPRDs7QUFDRDtBQUNFLGFBQU9yQixLQUFQO0FBekZKO0FBMkZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUNUSU9OUyB9IGZyb20gJy4vYWN0aW9ucydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3QgeyB2YWx1ZXMsIHNlbGVjdGlvbnMgfSA9IHN0YXRlXG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUNUSU9OUy5MRUZUX1RPX0NFTlRFUjoge1xuICAgICAgY29uc3QgbmV3TGVmdFZhbHVlcyA9IHZhbHVlcy5sZWZ0LmZpbHRlcigodmFsdWUpID0+ICFzZWxlY3Rpb25zLmxlZnQuaW5jbHVkZXModmFsdWUpKVxuICAgICAgY29uc3QgbmV3Q2VudGVyVmFsdWVzID0gdmFsdWVzLmNlbnRlci5jb25jYXQoc2VsZWN0aW9ucy5sZWZ0KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgIGxlZnQ6IG5ld0xlZnRWYWx1ZXMsXG4gICAgICAgICAgY2VudGVyOiBuZXdDZW50ZXJWYWx1ZXNcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0aW9uczoge1xuICAgICAgICAgIC4uLnNlbGVjdGlvbnMsXG4gICAgICAgICAgbGVmdDogW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlIEFDVElPTlMuQ0VOVEVSX1RPX0xFRlQ6IHtcbiAgICAgIGNvbnN0IG5ld0NlbnRlclZhbHVlcyA9IHZhbHVlcy5jZW50ZXIuZmlsdGVyKCh2YWx1ZSkgPT4gIXNlbGVjdGlvbnMuY2VudGVyLmluY2x1ZGVzKHZhbHVlKSlcbiAgICAgIGNvbnN0IG5ld0xlZnRWYWx1ZXMgPSB2YWx1ZXMubGVmdC5jb25jYXQoc2VsZWN0aW9ucy5jZW50ZXIpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgbGVmdDogbmV3TGVmdFZhbHVlcyxcbiAgICAgICAgICBjZW50ZXI6IG5ld0NlbnRlclZhbHVlc1xuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Rpb25zOiB7XG4gICAgICAgICAgLi4uc2VsZWN0aW9ucyxcbiAgICAgICAgICBjZW50ZXI6IFtdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSBBQ1RJT05TLlJJR1RIX1RPX0NFTlRFUjoge1xuICAgICAgY29uc3QgbmV3UmlnaHRWYWx1ZXMgPSB2YWx1ZXMucmlnaHQuZmlsdGVyKCh2YWx1ZSkgPT4gIXNlbGVjdGlvbnMucmlnaHQuaW5jbHVkZXModmFsdWUpKVxuICAgICAgY29uc3QgbmV3Q2VudGVyVmFsdWVzID0gdmFsdWVzLmNlbnRlci5jb25jYXQoc2VsZWN0aW9ucy5yaWdodClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICByaWdodDogbmV3UmlnaHRWYWx1ZXMsXG4gICAgICAgICAgY2VudGVyOiBuZXdDZW50ZXJWYWx1ZXNcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0aW9uczoge1xuICAgICAgICAgIC4uLnNlbGVjdGlvbnMsXG4gICAgICAgICAgcmlnaHQ6IFtdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSBBQ1RJT05TLkNFTlRFUl9UT19SSUdIVDoge1xuICAgICAgY29uc3QgbmV3Q2VudGVyVmFsdWVzID0gdmFsdWVzLmNlbnRlci5maWx0ZXIoKHZhbHVlKSA9PiAhc2VsZWN0aW9ucy5jZW50ZXIuaW5jbHVkZXModmFsdWUpKVxuICAgICAgY29uc3QgbmV3UmlnaHRWYWx1ZXMgPSB2YWx1ZXMucmlnaHQuY29uY2F0KHNlbGVjdGlvbnMuY2VudGVyKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgIHJpZ2h0OiBuZXdSaWdodFZhbHVlcyxcbiAgICAgICAgICBjZW50ZXI6IG5ld0NlbnRlclZhbHVlc1xuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Rpb25zOiB7XG4gICAgICAgICAgLi4uc2VsZWN0aW9ucyxcbiAgICAgICAgICBjZW50ZXI6IFtdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSBBQ1RJT05TLlNFTEVDVF9MRUZUX1ZBTFVFUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWVzLFxuICAgICAgICBzZWxlY3Rpb25zOiB7XG4gICAgICAgICAgLi4uc2VsZWN0aW9ucyxcbiAgICAgICAgICBsZWZ0OiBhY3Rpb24udmFsdWVzVG9TZWxlY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlIEFDVElPTlMuU0VMRUNUX0NFTlRFUl9WQUxVRVM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgc2VsZWN0aW9uczoge1xuICAgICAgICAgIC4uLnNlbGVjdGlvbnMsXG4gICAgICAgICAgY2VudGVyOiBhY3Rpb24udmFsdWVzVG9TZWxlY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlIEFDVElPTlMuU0VMRUNUX1JJR0hUX1ZBTFVFUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWVzLFxuICAgICAgICBzZWxlY3Rpb25zOiB7XG4gICAgICAgICAgLi4uc2VsZWN0aW9ucyxcbiAgICAgICAgICByaWdodDogYWN0aW9uLnZhbHVlc1RvU2VsZWN0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG4iXX0=