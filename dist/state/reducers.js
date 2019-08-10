"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = reducer;

var _actions = require("./actions");

var _selectors = require("../selectors/");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, action) {
  var options = state.options;

  switch (action.type) {
    case _actions.ACTIONS.LEFT_TO_CENTER:
      {
        var newLeftValues = (0, _selectors.getUnselected)(options.left);
        var newCenterValues = options.center.concat((0, _selectors.getSelected)(options.left));
        return {
          options: _objectSpread({}, options, {
            left: newLeftValues,
            center: newCenterValues
          })
        };
      }

    case _actions.ACTIONS.CENTER_TO_LEFT:
      {
        var _newCenterValues = (0, _selectors.getUnselected)(options.center);

        var _newLeftValues = options.left.concat((0, _selectors.getSelected)(options.center));

        return {
          options: _objectSpread({}, options, {
            left: _newLeftValues,
            center: _newCenterValues
          })
        };
      }

    case _actions.ACTIONS.RIGTH_TO_CENTER:
      {
        var newRightValues = (0, _selectors.getUnselected)(options.right);

        var _newCenterValues2 = options.center.concat((0, _selectors.getSelected)(options.right));

        return {
          options: _objectSpread({}, options, {
            right: newRightValues,
            center: _newCenterValues2
          })
        };
      }

    case _actions.ACTIONS.CENTER_TO_RIGHT:
      {
        var _newCenterValues3 = (0, _selectors.getUnselected)(options.center);

        var _newRightValues = options.right.concat((0, _selectors.getSelected)(options.center));

        return {
          options: _objectSpread({}, options, {
            right: _newRightValues,
            center: _newCenterValues3
          })
        };
      }

    case _actions.ACTIONS.SELECT_LEFT_VALUES:
      {
        return {
          options: _objectSpread({}, options, {
            left: options.left.map(function (_ref) {
              var value = _ref.value;
              return {
                value: value,
                selected: action.valuesToSelect.includes(value)
              };
            })
          })
        };
      }

    case _actions.ACTIONS.SELECT_CENTER_VALUES:
      {
        return {
          options: _objectSpread({}, options, {
            center: options.center.map(function (_ref2) {
              var value = _ref2.value;
              return {
                value: value,
                selected: action.valuesToSelect.includes(value)
              };
            })
          })
        };
      }

    case _actions.ACTIONS.SELECT_RIGHT_VALUES:
      {
        return {
          options: _objectSpread({}, options, {
            right: options.right.map(function (_ref3) {
              var value = _ref3.value;
              return {
                value: value,
                selected: action.valuesToSelect.includes(value)
              };
            })
          })
        };
      }

    default:
      return state;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS9yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJvcHRpb25zIiwidHlwZSIsIkFDVElPTlMiLCJMRUZUX1RPX0NFTlRFUiIsIm5ld0xlZnRWYWx1ZXMiLCJsZWZ0IiwibmV3Q2VudGVyVmFsdWVzIiwiY2VudGVyIiwiY29uY2F0IiwiQ0VOVEVSX1RPX0xFRlQiLCJSSUdUSF9UT19DRU5URVIiLCJuZXdSaWdodFZhbHVlcyIsInJpZ2h0IiwiQ0VOVEVSX1RPX1JJR0hUIiwiU0VMRUNUX0xFRlRfVkFMVUVTIiwibWFwIiwidmFsdWUiLCJzZWxlY3RlZCIsInZhbHVlc1RvU2VsZWN0IiwiaW5jbHVkZXMiLCJTRUxFQ1RfQ0VOVEVSX1ZBTFVFUyIsIlNFTEVDVF9SSUdIVF9WQUxVRVMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFTyxTQUFTQSxPQUFULENBQWtCQyxLQUFsQixFQUF5QkMsTUFBekIsRUFBaUM7QUFBQSxNQUM5QkMsT0FEOEIsR0FDbEJGLEtBRGtCLENBQzlCRSxPQUQ4Qjs7QUFHdEMsVUFBUUQsTUFBTSxDQUFDRSxJQUFmO0FBQ0UsU0FBS0MsaUJBQVFDLGNBQWI7QUFBNkI7QUFDM0IsWUFBTUMsYUFBYSxHQUFHLDhCQUFjSixPQUFPLENBQUNLLElBQXRCLENBQXRCO0FBQ0EsWUFBTUMsZUFBZSxHQUFHTixPQUFPLENBQUNPLE1BQVIsQ0FBZUMsTUFBZixDQUFzQiw0QkFBWVIsT0FBTyxDQUFDSyxJQUFwQixDQUF0QixDQUF4QjtBQUNBLGVBQU87QUFDTEwsVUFBQUEsT0FBTyxvQkFDRkEsT0FERTtBQUVMSyxZQUFBQSxJQUFJLEVBQUVELGFBRkQ7QUFHTEcsWUFBQUEsTUFBTSxFQUFFRDtBQUhIO0FBREYsU0FBUDtBQU9EOztBQUNELFNBQUtKLGlCQUFRTyxjQUFiO0FBQTZCO0FBQzNCLFlBQU1ILGdCQUFlLEdBQUcsOEJBQWNOLE9BQU8sQ0FB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aW9ucydcbmltcG9ydCB7IGdldFNlbGVjdGVkLCBnZXRVbnNlbGVjdGVkIH0gZnJvbSAnLi4vc2VsZWN0b3JzLydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3QgeyBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFDVElPTlMuTEVGVF9UT19DRU5URVI6IHtcbiAgICAgIGNvbnN0IG5ld0xlZnRWYWx1ZXMgPSBnZXRVbnNlbGVjdGVkKG9wdGlvbnMubGVmdClcbiAgICAgIGNvbnN0IG5ld0NlbnRlclZhbHVlcyA9IG9wdGlvbnMuY2VudGVyLmNvbmNhdChnZXRTZWxlY3RlZChvcHRpb25zLmxlZnQpKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgbGVmdDogbmV3TGVmdFZhbHVlcyxcbiAgICAgICAgICBjZW50ZXI6IG5ld0NlbnRlclZhbHVlc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgQUNUSU9OUy5DRU5URVJfVE9fTEVGVDoge1xuICAgICAgY29uc3QgbmV3Q2VudGVyVmFsdWVzID0gZ2V0VW5zZWxlY3RlZChvcHRpb25zLmNlbnRlcilcbiAgICAgIGNvbnN0IG5ld0xlZnRWYWx1ZXMgPSBvcHRpb25zLmxlZnQuY29uY2F0KGdldFNlbGVjdGVkKG9wdGlvbnMuY2VudGVyKSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIGxlZnQ6IG5ld0xlZnRWYWx1ZXMsXG4gICAgICAgICAgY2VudGVyOiBuZXdDZW50ZXJWYWx1ZXNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlIEFDVElPTlMuUklHVEhfVE9fQ0VOVEVSOiB7XG4gICAgICBjb25zdCBuZXdSaWdodFZhbHVlcyA9IGdldFVuc2VsZWN0ZWQob3B0aW9ucy5yaWdodClcbiAgICAgIGNvbnN0IG5ld0NlbnRlclZhbHVlcyA9IG9wdGlvbnMuY2VudGVyLmNvbmNhdChnZXRTZWxlY3RlZChvcHRpb25zLnJpZ2h0KSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIHJpZ2h0OiBuZXdSaWdodFZhbHVlcyxcbiAgICAgICAgICBjZW50ZXI6IG5ld0NlbnRlclZhbHVlc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgQUNUSU9OUy5DRU5URVJfVE9fUklHSFQ6IHtcbiAgICAgIGNvbnN0IG5ld0NlbnRlclZhbHVlcyA9IGdldFVuc2VsZWN0ZWQob3B0aW9ucy5jZW50ZXIpXG4gICAgICBjb25zdCBuZXdSaWdodFZhbHVlcyA9IG9wdGlvbnMucmlnaHQuY29uY2F0KGdldFNlbGVjdGVkKG9wdGlvbnMuY2VudGVyKSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIHJpZ2h0OiBuZXdSaWdodFZhbHVlcyxcbiAgICAgICAgICBjZW50ZXI6IG5ld0NlbnRlclZhbHVlc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgQUNUSU9OUy5TRUxFQ1RfTEVGVF9WQUxVRVM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIGxlZnQ6IG9wdGlvbnMubGVmdC5tYXAoKHsgdmFsdWUgfSkgPT4gKHsgdmFsdWUsIHNlbGVjdGVkOiBhY3Rpb24udmFsdWVzVG9TZWxlY3QuaW5jbHVkZXModmFsdWUpIH0pKSBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlIEFDVElPTlMuU0VMRUNUX0NFTlRFUl9WQUxVRVM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIGNlbnRlcjogb3B0aW9ucy5jZW50ZXIubWFwKCh7IHZhbHVlIH0pID0+ICh7IHZhbHVlLCBzZWxlY3RlZDogYWN0aW9uLnZhbHVlc1RvU2VsZWN0LmluY2x1ZGVzKHZhbHVlKSB9KSkgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSBBQ1RJT05TLlNFTEVDVF9SSUdIVF9WQUxVRVM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIHJpZ2h0OiBvcHRpb25zLnJpZ2h0Lm1hcCgoeyB2YWx1ZSB9KSA9PiAoeyB2YWx1ZSwgc2VsZWN0ZWQ6IGFjdGlvbi52YWx1ZXNUb1NlbGVjdC5pbmNsdWRlcyh2YWx1ZSkgfSkpIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuIl19