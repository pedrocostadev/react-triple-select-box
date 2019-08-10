"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./TripleSelectBox.css");

var _SelectBox = _interopRequireDefault(require("../../components/SelectBox"));

var _SelectBoxControl = _interopRequireDefault(require("../../components/SelectBoxControl"));

var _state = require("../../state");

var _selectors = require("../../selectors");

var _useUpdate = require("./useUpdate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TripleSelectBox = function TripleSelectBox(props) {
  var _props$styles, _props$titles, _props$numberOfLines, _props$styles2, _props$styles3, _props$titles2, _props$numberOfLines2, _props$styles4, _props$styles5, _props$titles3, _props$numberOfLines3, _props$styles6;

  var _useReducer = (0, _react.useReducer)(_state.reducer, props, _state.initializer),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var setLeftOptionsSelection = function setLeftOptionsSelection(valuesToSelect) {
    return dispatch({
      type: _state.ACTIONS.SELECT_LEFT_VALUES,
      valuesToSelect: valuesToSelect
    });
  };

  var setCenterOptionsSelection = function setCenterOptionsSelection(valuesToSelect) {
    return dispatch({
      type: _state.ACTIONS.SELECT_CENTER_VALUES,
      valuesToSelect: valuesToSelect
    });
  };

  var setRightOptionsSelection = function setRightOptionsSelection(valuesToSelect) {
    return dispatch({
      type: _state.ACTIONS.SELECT_RIGHT_VALUES,
      valuesToSelect: valuesToSelect
    });
  };

  var onChange = function onChange(ACTION_ID) {
    return function () {
      dispatch({
        type: ACTION_ID
      });
    };
  };

  var leftToCenter = onChange(_state.ACTIONS.LEFT_TO_CENTER);
  var centerToLeft = onChange(_state.ACTIONS.CENTER_TO_LEFT);
  var rightToCenter = onChange(_state.ACTIONS.RIGTH_TO_CENTER);
  var centerToRight = onChange(_state.ACTIONS.CENTER_TO_RIGHT);
  (0, _useUpdate.useUpdate)({
    deps: [(0, _selectors.getOptions)(state.options)],
    onUpdate: function onUpdate() {
      return props.onChange((0, _selectors.getOptions)(state.options));
    }
  });
  return _react["default"].createElement("section", {
    style: (_props$styles = props.styles) === null || _props$styles === void 0 ? void 0 : _props$styles.container,
    className: "container"
  }, _react["default"].createElement(_SelectBox["default"], {
    title: (_props$titles = props.titles) === null || _props$titles === void 0 ? void 0 : _props$titles.left,
    numberOfLines: (_props$numberOfLines = props.numberOfLines) === null || _props$numberOfLines === void 0 ? void 0 : _props$numberOfLines.left,
    styles: (_props$styles2 = props.styles) === null || _props$styles2 === void 0 ? void 0 : _props$styles2.box,
    onSelect: setLeftOptionsSelection,
    options: state.options.left
  }), _react["default"].createElement(_SelectBoxControl["default"], {
    styles: (_props$styles3 = props.styles) === null || _props$styles3 === void 0 ? void 0 : _props$styles3.boxController,
    sendToLeft: centerToLeft,
    sendToLeftDisabled: state.options.center.every(function (_ref) {
      var selected = _ref.selected;
      return !selected;
    }),
    sendToRight: leftToCenter,
    sendToRightDisabled: state.options.left.every(function (_ref2) {
      var selected = _ref2.selected;
      return !selected;
    })
  }), _react["default"].createElement(_SelectBox["default"], {
    title: (_props$titles2 = props.titles) === null || _props$titles2 === void 0 ? void 0 : _props$titles2.center,
    numberOfLines: (_props$numberOfLines2 = props.numberOfLines) === null || _props$numberOfLines2 === void 0 ? void 0 : _props$numberOfLines2.center,
    styles: (_props$styles4 = props.styles) === null || _props$styles4 === void 0 ? void 0 : _props$styles4.box,
    onSelect: setCenterOptionsSelection,
    options: state.options.center
  }), _react["default"].createElement(_SelectBoxControl["default"], {
    styles: (_props$styles5 = props.styles) === null || _props$styles5 === void 0 ? void 0 : _props$styles5.boxController,
    sendToLeft: rightToCenter,
    sendToLeftDisabled: state.options.right.every(function (_ref3) {
      var selected = _ref3.selected;
      return !selected;
    }),
    sendToRight: centerToRight,
    sendToRightDisabled: state.options.center.every(function (_ref4) {
      var selected = _ref4.selected;
      return !selected;
    })
  }), _react["default"].createElement(_SelectBox["default"], {
    title: (_props$titles3 = props.titles) === null || _props$titles3 === void 0 ? void 0 : _props$titles3.right,
    numberOfLines: (_props$numberOfLines3 = props.numberOfLines) === null || _props$numberOfLines3 === void 0 ? void 0 : _props$numberOfLines3.right,
    styles: (_props$styles6 = props.styles) === null || _props$styles6 === void 0 ? void 0 : _props$styles6.box,
    onSelect: setRightOptionsSelection,
    options: state.options.right
  }));
};

var Option = _propTypes["default"].shape({
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  label: _propTypes["default"].string,
  selected: _propTypes["default"].bool
});

TripleSelectBox.propTypes = {
  options: _propTypes["default"].shape({
    left: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, Option])),
    center: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, Option])),
    right: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, Option]))
  }).isRequired,
  titles: _propTypes["default"].shape({
    left: _propTypes["default"].string,
    center: _propTypes["default"].string,
    right: _propTypes["default"].string
  }),
  numberOfLines: _propTypes["default"].shape({
    left: _propTypes["default"].number,
    center: _propTypes["default"].number,
    right: _propTypes["default"].number
  }),
  styles: _propTypes["default"].shape({
    container: _propTypes["default"].object,
    box: _propTypes["default"].shape({
      label: _propTypes["default"].object,
      container: _propTypes["default"].object,
      select: _propTypes["default"].object,
      selectOption: _propTypes["default"].object
    }),
    boxController: _propTypes["default"].shape({
      container: _propTypes["default"].object,
      button: _propTypes["default"].object
    })
  }),
  onChange: _propTypes["default"].func.isRequired
};
var _default = TripleSelectBox;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250YWluZXJzL1RyaXBsZVNlbGVjdEJveC9UcmlwbGVTZWxlY3RCb3guanMiXSwibmFtZXMiOlsiVHJpcGxlU2VsZWN0Qm94IiwicHJvcHMiLCJyZWR1Y2VyIiwiaW5pdGlhbGl6ZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwic2V0TGVmdE9wdGlvbnNTZWxlY3Rpb24iLCJ2YWx1ZXNUb1NlbGVjdCIsInR5cGUiLCJBQ1RJT05TIiwiU0VMRUNUX0xFRlRfVkFMVUVTIiwic2V0Q2VudGVyT3B0aW9uc1NlbGVjdGlvbiIsIlNFTEVDVF9DRU5URVJfVkFMVUVTIiwic2V0UmlnaHRPcHRpb25zU2VsZWN0aW9uIiwiU0VMRUNUX1JJR0hUX1ZBTFVFUyIsIm9uQ2hhbmdlIiwiQUNUSU9OX0lEIiwibGVmdFRvQ2VudGVyIiwiTEVGVF9UT19DRU5URVIiLCJjZW50ZXJUb0xlZnQiLCJDRU5URVJfVE9fTEVGVCIsInJpZ2h0VG9DZW50ZXIiLCJSSUdUSF9UT19DRU5URVIiLCJjZW50ZXJUb1JpZ2h0IiwiQ0VOVEVSX1RPX1JJR0hUIiwiZGVwcyIsIm9wdGlvbnMiLCJvblVwZGF0ZSIsInN0eWxlcyIsImNvbnRhaW5lciIsInRpdGxlcyIsImxlZnQiLCJudW1iZXJPZkxpbmVzIiwiYm94IiwiYm94Q29udHJvbGxlciIsImNlbnRlciIsImV2ZXJ5Iiwic2VsZWN0ZWQiLCJyaWdodCIsIk9wdGlvbiIsIlByb3BUeXBlcyIsInNoYXBlIiwidmFsdWUiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibGFiZWwiLCJib29sIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsInNlbGVjdCIsInNlbGVjdE9wdGlvbiIsImJ1dHRvbiIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxlQUFl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QmhCLEVBQUFBLE1BQU0sRUFBRVUsc0JBQVVDLEtBQVYsQ0FBZ0I7QUFDcEJWLElBQUFBLElBQUksRUFBRVMsc0JBQVVLLE1BREk7QUFFcEJWLElBQUFBLE1BQU0sRUFBRUssc0JBQVVLLE1BRkU7QUFHdkJQLElBQUFBLEtBQUssRUFBRUUsc0JBQVVLO0FBSE0sR0FBaEIsQ0FOZ0I7QUFXeEJiLEVBQUFBLGFBQWEsRUFBRVEsc0JBQVVDLEtBQVYsQ0FBZ0I7QUFDM0JWLElBQUFBLElBQUksRUFBRVMsc0JBQVVJLE1BRFc7QUFFM0JULElBQUFBLE1BQU0sRUFBRUssc0JBQVVJLE1BRlM7QUFHOUJOLElBQUFBLEtBQUssRUFBRUUsc0JBQVVJO0FBSGEsR0FBaEIsQ0FYUztBQWdCeEJoQixFQUFBQSxNQUFNLEVBQUVZLHNCQUFVQyxLQUFWLENBQWdCO0FBQ3BCWixJQUFBQSxTQUFTLEVBQUVXLHNCQUFVVyxNQUREO0FBRXBCbEIsSUFBQUEsR0FBRyxFQUFFTyxzQkFBVUMsS0FBVixDQUFnQjtBQUNqQk0sTUFBQUEsS0FBSyxFQUFFUCxzQkFBVVcsTUFEQTtBQUVqQnRCLE1BQUFBLFNBQVMsRUFBRVcsc0JBQVVXLE1BRko7QUFHakJDLE1BQUFBLE1BQU0sRUFBRVosc0JBQVVXLE1BSEQ7QUFJakJFLE1BQUFBLFlBQVksRUFBRWIsc0JBQVVXO0FBSlAsS0FBaEIsQ0FGZTtBQVFwQmpCLElBQUFBLGFBQWEsRUFBRU0sc0JBQVVDLEtBQVYsQ0FBZ0I7QUFDM0JaLE1BQUFBLFNBQVMsRUFBRVcsc0JBQVVXLE1BRE07QUFFM0JHLE1BQUFBLE1BQU0sRUFBRWQsc0JBQVVXO0FBRlMsS0FBaEI7QUFSSyxHQUFoQixDQWhCZ0I7QUE2QnhCcEMsRUFBQUEsUUFBUSxFQUFFeUIsc0JBQVVlLElBQVYsQ0FBZVQ7QUE3QkQsQ0FBNUI7ZUFnQ2U5QyxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0ICcuL1RyaXBsZVNlbGVjdEJveC5jc3MnXG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0Qm94JztcbmltcG9ydCBTZWxlY3RCb3hDb250cm9sIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0Qm94Q29udHJvbCc7XG5pbXBvcnQgeyBBQ1RJT05TLCByZWR1Y2VyLCBpbml0aWFsaXplciB9IGZyb20gJy4uLy4uL3N0YXRlJ1xuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycydcbmltcG9ydCB7IHVzZVVwZGF0ZSB9IGZyb20gJy4vdXNlVXBkYXRlJ1xuXG5cbmNvbnN0IFRyaXBsZVNlbGVjdEJveCA9IHByb3BzID0+IHtcblxuICAgIGNvbnN0IFsgc3RhdGUsIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHByb3BzLCBpbml0aWFsaXplcilcblxuICAgIGNvbnN0IHNldExlZnRPcHRpb25zU2VsZWN0aW9uID0gdmFsdWVzVG9TZWxlY3QgPT4gZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT05TLlNFTEVDVF9MRUZUX1ZBTFVFUywgdmFsdWVzVG9TZWxlY3QgfSlcbiAgICBjb25zdCBzZXRDZW50ZXJPcHRpb25zU2VsZWN0aW9uID0gdmFsdWVzVG9TZWxlY3QgPT4gZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT05TLlNFTEVDVF9DRU5URVJfVkFMVUVTLCB2YWx1ZXNUb1NlbGVjdCB9KVxuICAgIGNvbnN0IHNldFJpZ2h0T3B0aW9uc1NlbGVjdGlvbiA9IHZhbHVlc1RvU2VsZWN0ID0+IGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OUy5TRUxFQ1RfUklHSFRfVkFMVUVTLCB2YWx1ZXNUb1NlbGVjdCB9KVxuXG4gICAgY29uc3Qgb25DaGFuZ2UgPSBBQ1RJT05fSUQgPT4gKCkgPT4geyAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT05fSUQgfSkgfVxuXG4gICAgY29uc3QgbGVmdFRvQ2VudGVyID0gb25DaGFuZ2UoQUNUSU9OUy5MRUZUX1RPX0NFTlRFUilcbiAgICBjb25zdCBjZW50ZXJUb0xlZnQgPSBvbkNoYW5nZShBQ1RJT05TLkNFTlRFUl9UT19MRUZUKVxuICAgIGNvbnN0IHJpZ2h0VG9DZW50ZXIgPSBvbkNoYW5nZShBQ1RJT05TLlJJR1RIX1RPX0NFTlRFUilcbiAgICBjb25zdCBjZW50ZXJUb1JpZ2h0ID0gb25DaGFuZ2UoQUNUSU9OUy5DRU5URVJfVE9fUklHSFQpXG5cbiAgICB1c2VVcGRhdGUoe1xuICAgICAgICBkZXBzOiBbIGdldE9wdGlvbnMoc3RhdGUub3B0aW9ucykgXSxcbiAgICAgICAgb25VcGRhdGU6ICgpID0+IHByb3BzLm9uQ2hhbmdlKGdldE9wdGlvbnMoc3RhdGUub3B0aW9ucykpXG4gICAgfSlcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIHN0eWxlPXtwcm9wcy5zdHlsZXM/LmNvbnRhaW5lcn0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8U2VsZWN0Qm94XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlcz8ubGVmdH1cbiAgICAgICAgICAgICAgICBudW1iZXJPZkxpbmVzPXtwcm9wcy5udW1iZXJPZkxpbmVzPy5sZWZ0fVxuICAgICAgICAgICAgICAgIHN0eWxlcz17cHJvcHMuc3R5bGVzPy5ib3h9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NldExlZnRPcHRpb25zU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXRlLm9wdGlvbnMubGVmdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2VsZWN0Qm94Q29udHJvbFxuICAgICAgICAgICAgICAgIHN0eWxlcz17cHJvcHMuc3R5bGVzPy5ib3hDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgIHNlbmRUb0xlZnQ9e2NlbnRlclRvTGVmdH1cbiAgICAgICAgICAgICAgICBzZW5kVG9MZWZ0RGlzYWJsZWQ9e3N0YXRlLm9wdGlvbnMuY2VudGVyLmV2ZXJ5KCh7IHNlbGVjdGVkIH0pID0+ICFzZWxlY3RlZCl9XG4gICAgICAgICAgICAgICAgc2VuZFRvUmlnaHQ9e2xlZnRUb0NlbnRlcn1cbiAgICAgICAgICAgICAgICBzZW5kVG9SaWdodERpc2FibGVkPXtzdGF0ZS5vcHRpb25zLmxlZnQuZXZlcnkoKHsgc2VsZWN0ZWQgfSkgPT4gIXNlbGVjdGVkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2VsZWN0Qm94XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlcz8uY2VudGVyfVxuICAgICAgICAgICAgICAgIG51bWJlck9mTGluZXM9e3Byb3BzLm51bWJlck9mTGluZXM/LmNlbnRlcn1cbiAgICAgICAgICAgICAgICBzdHlsZXM9e3Byb3BzLnN0eWxlcz8uYm94fVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZXRDZW50ZXJPcHRpb25zU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXRlLm9wdGlvbnMuY2VudGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTZWxlY3RCb3hDb250cm9sXG4gICAgICAgICAgICAgICAgc3R5bGVzPXtwcm9wcy5zdHlsZXM/LmJveENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgc2VuZFRvTGVmdD17cmlnaHRUb0NlbnRlcn1cbiAgICAgICAgICAgICAgICBzZW5kVG9MZWZ0RGlzYWJsZWQ9e3N0YXRlLm9wdGlvbnMucmlnaHQuZXZlcnkoKHsgc2VsZWN0ZWQgfSkgPT4gIXNlbGVjdGVkKX1cbiAgICAgICAgICAgICAgICBzZW5kVG9SaWdodD17Y2VudGVyVG9SaWdodH1cbiAgICAgICAgICAgICAgICBzZW5kVG9SaWdodERpc2FibGVkPXtzdGF0ZS5vcHRpb25zLmNlbnRlci5ldmVyeSgoeyBzZWxlY3RlZCB9KSA9PiAhc2VsZWN0ZWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTZWxlY3RCb3hcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGVzPy5yaWdodH1cbiAgICAgICAgICAgICAgICBudW1iZXJPZkxpbmVzPXtwcm9wcy5udW1iZXJPZkxpbmVzPy5yaWdodH1cbiAgICAgICAgICAgICAgICBzdHlsZXM9e3Byb3BzLnN0eWxlcz8uYm94fVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZXRSaWdodE9wdGlvbnNTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17c3RhdGUub3B0aW9ucy5yaWdodH1cbiAgICAgICAgICAgIC8+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmNvbnN0IE9wdGlvbiA9IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nIF0pLmlzUmVxdWlyZWQsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sXG59KVxuXG5UcmlwbGVTZWxlY3RCb3gucHJvcFR5cGVzID0ge1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxlZnQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nLCBPcHRpb24gXSkpLFxuICAgICAgICBjZW50ZXI6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nLCBPcHRpb24gXSkpLFxuICAgICAgICByaWdodDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmcsIE9wdGlvbiBdKSlcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIHRpdGxlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGVmdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY2VudGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHQgICAgcmlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gICAgbnVtYmVyT2ZMaW5lczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGVmdDpcdFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGNlbnRlcjogUHJvcFR5cGVzLm51bWJlcixcblx0ICAgIHJpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIH0pLFxuICAgIHN0eWxlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgY29udGFpbmVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBib3g6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBsYWJlbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIHNlbGVjdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbjogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9KSxcbiAgICAgICAgYm94Q29udHJvbGxlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIGJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9KVxuICAgIH0pLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBsZVNlbGVjdEJveCJdfQ==