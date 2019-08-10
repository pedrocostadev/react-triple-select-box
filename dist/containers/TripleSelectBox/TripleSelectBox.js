"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SelectBox = _interopRequireDefault(require("../../components/SelectBox"));

var _SelectBoxControl = _interopRequireDefault(require("../../components/SelectBoxControl"));

var _state = require("../../state");

require("./TripleSelectBox.css");

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

  var setLeftValuesSelection = function setLeftValuesSelection(valuesToSelect) {
    return dispatch({
      type: _state.ACTIONS.SELECT_LEFT_VALUES,
      valuesToSelect: valuesToSelect
    });
  };

  var setCenterValuesSelection = function setCenterValuesSelection(valuesToSelect) {
    return dispatch({
      type: _state.ACTIONS.SELECT_CENTER_VALUES,
      valuesToSelect: valuesToSelect
    });
  };

  var setRightValuesSelection = function setRightValuesSelection(valuesToSelect) {
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
  var isInitialMount = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    props.onChange(state.values);
  }, [state.values]);
  return _react["default"].createElement("section", {
    style: (_props$styles = props.styles) === null || _props$styles === void 0 ? void 0 : _props$styles.container,
    className: "container"
  }, _react["default"].createElement(_SelectBox["default"], {
    title: (_props$titles = props.titles) === null || _props$titles === void 0 ? void 0 : _props$titles.left,
    numberOfLines: (_props$numberOfLines = props.numberOfLines) === null || _props$numberOfLines === void 0 ? void 0 : _props$numberOfLines.left,
    styles: (_props$styles2 = props.styles) === null || _props$styles2 === void 0 ? void 0 : _props$styles2.box,
    onSelect: setLeftValuesSelection,
    values: state.values.left
  }), _react["default"].createElement(_SelectBoxControl["default"], {
    styles: (_props$styles3 = props.styles) === null || _props$styles3 === void 0 ? void 0 : _props$styles3.boxController,
    sendToLeft: centerToLeft,
    sendToLeftDisabled: state.selections.center.length === 0,
    sendToRight: leftToCenter,
    sendToRightDisabled: state.selections.left.length === 0
  }), _react["default"].createElement(_SelectBox["default"], {
    title: (_props$titles2 = props.titles) === null || _props$titles2 === void 0 ? void 0 : _props$titles2.center,
    numberOfLines: (_props$numberOfLines2 = props.numberOfLines) === null || _props$numberOfLines2 === void 0 ? void 0 : _props$numberOfLines2.center,
    styles: (_props$styles4 = props.styles) === null || _props$styles4 === void 0 ? void 0 : _props$styles4.box,
    onSelect: setCenterValuesSelection,
    values: state.values.center
  }), _react["default"].createElement(_SelectBoxControl["default"], {
    styles: (_props$styles5 = props.styles) === null || _props$styles5 === void 0 ? void 0 : _props$styles5.boxController,
    sendToLeft: rightToCenter,
    sendToLeftDisabled: state.selections.right.length === 0,
    sendToRight: centerToRight,
    sendToRightDisabled: state.selections.center.length === 0
  }), _react["default"].createElement(_SelectBox["default"], {
    title: (_props$titles3 = props.titles) === null || _props$titles3 === void 0 ? void 0 : _props$titles3.right,
    numberOfLines: (_props$numberOfLines3 = props.numberOfLines) === null || _props$numberOfLines3 === void 0 ? void 0 : _props$numberOfLines3.right,
    styles: (_props$styles6 = props.styles) === null || _props$styles6 === void 0 ? void 0 : _props$styles6.box,
    onSelect: setRightValuesSelection,
    values: state.values.right
  }));
};

TripleSelectBox.propTypes = {
  initialValues: _propTypes["default"].shape({
    left: _propTypes["default"].array.isRequired,
    center: _propTypes["default"].array.isRequired,
    right: _propTypes["default"].array.isRequired
  }).isRequired,
  initialSelections: _propTypes["default"].shape({
    left: _propTypes["default"].array.isRequired,
    center: _propTypes["default"].array.isRequired,
    right: _propTypes["default"].array.isRequired
  }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250YWluZXJzL1RyaXBsZVNlbGVjdEJveC9UcmlwbGVTZWxlY3RCb3guanMiXSwibmFtZXMiOlsiVHJpcGxlU2VsZWN0Qm94IiwicHJvcHMiLCJyZWR1Y2VyIiwiaW5pdGlhbGl6ZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwic2V0TGVmdFZhbHVlc1NlbGVjdGlvbiIsInZhbHVlc1RvU2VsZWN0IiwidHlwZSIsIkFDVElPTlMiLCJTRUxFQ1RfTEVGVF9WQUxVRVMiLCJzZXRDZW50ZXJWYWx1ZXNTZWxlY3Rpb24iLCJTRUxFQ1RfQ0VOVEVSX1ZBTFVFUyIsInNldFJpZ2h0VmFsdWVzU2VsZWN0aW9uIiwiU0VMRUNUX1JJR0hUX1ZBTFVFUyIsIm9uQ2hhbmdlIiwiQUNUSU9OX0lEIiwibGVmdFRvQ2VudGVyIiwiTEVGVF9UT19DRU5URVIiLCJjZW50ZXJUb0xlZnQiLCJDRU5URVJfVE9fTEVGVCIsInJpZ2h0VG9DZW50ZXIiLCJSSUdUSF9UT19DRU5URVIiLCJjZW50ZXJUb1JpZ2h0IiwiQ0VOVEVSX1RPX1JJR0hUIiwiaXNJbml0aWFsTW91bnQiLCJjdXJyZW50IiwidmFsdWVzIiwic3R5bGVzIiwiY29udGFpbmVyIiwidGl0bGVzIiwibGVmdCIsIm51bWJlck9mTGluZXMiLCJib3giLCJib3hDb250cm9sbGVyIiwic2VsZWN0aW9ucyIsImNlbnRlciIsImxlbmd0aCIsInJpZ2h0IiwicHJvcFR5cGVzIiwiaW5pdGlhbFZhbHVlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiaW5pdGlhbFNlbGVjdGlvbnMiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3QiLCJsYWJlbCIsInNlbGVjdCIsInNlbGVjdE9wdGlvbiIsImJ1dHRvbiIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcs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QUFBLEtBQUssRUFBRVIsc0JBQVVPLE1BREE7QUFFakJuQixNQUFBQSxTQUFTLEVBQUVZLHNCQUFVTyxNQUZKO0FBR2pCRSxNQUFBQSxNQUFNLEVBQUVULHNCQUFVTyxNQUhEO0FBSWpCRyxNQUFBQSxZQUFZLEVBQUVWLHNCQUFVTztBQUpQLEtBQWhCLENBRmU7QUFRcEJkLElBQUFBLGFBQWEsRUFBRU8sc0JBQVVDLEtBQVYsQ0FBZ0I7QUFDM0JiLE1BQUFBLFNBQVMsRUFBRVksc0JBQVVPLE1BRE07QUFFM0JJLE1BQUFBLE1BQU0sRUFBRVgsc0JBQVVPO0FBRlMsS0FBaEI7QUFSSyxHQUFoQixDQXJCZ0I7QUFrQ3hCakMsRUFBQUEsUUFBUSxFQUFFMEIsc0JBQVVZLElBQVYsQ0FBZVQ7QUFsQ0QsQ0FBNUI7ZUFxQ2U1QyxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0Qm94JztcbmltcG9ydCBTZWxlY3RCb3hDb250cm9sIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0Qm94Q29udHJvbCc7XG5pbXBvcnQgeyBBQ1RJT05TLCByZWR1Y2VyLCBpbml0aWFsaXplciB9IGZyb20gJy4uLy4uL3N0YXRlJ1xuaW1wb3J0ICcuL1RyaXBsZVNlbGVjdEJveC5jc3MnXG5cbmNvbnN0IFRyaXBsZVNlbGVjdEJveCA9IHByb3BzID0+IHtcblxuICAgIGNvbnN0IFsgc3RhdGUsIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHByb3BzLCBpbml0aWFsaXplcilcblxuICAgIGNvbnN0IHNldExlZnRWYWx1ZXNTZWxlY3Rpb24gPSB2YWx1ZXNUb1NlbGVjdCA9PiBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTlMuU0VMRUNUX0xFRlRfVkFMVUVTLCB2YWx1ZXNUb1NlbGVjdCB9KVxuICAgIGNvbnN0IHNldENlbnRlclZhbHVlc1NlbGVjdGlvbiA9IHZhbHVlc1RvU2VsZWN0ID0+IGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OUy5TRUxFQ1RfQ0VOVEVSX1ZBTFVFUywgdmFsdWVzVG9TZWxlY3QgfSlcbiAgICBjb25zdCBzZXRSaWdodFZhbHVlc1NlbGVjdGlvbiA9IHZhbHVlc1RvU2VsZWN0ID0+IGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OUy5TRUxFQ1RfUklHSFRfVkFMVUVTLCB2YWx1ZXNUb1NlbGVjdCB9KVxuXG4gICAgY29uc3Qgb25DaGFuZ2UgPSBBQ1RJT05fSUQgPT4gKCkgPT4geyBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTl9JRCB9KSB9XG5cbiAgICBjb25zdCBsZWZ0VG9DZW50ZXIgPSBvbkNoYW5nZShBQ1RJT05TLkxFRlRfVE9fQ0VOVEVSKVxuICAgIGNvbnN0IGNlbnRlclRvTGVmdCA9IG9uQ2hhbmdlKEFDVElPTlMuQ0VOVEVSX1RPX0xFRlQpXG4gICAgY29uc3QgcmlnaHRUb0NlbnRlciA9IG9uQ2hhbmdlKEFDVElPTlMuUklHVEhfVE9fQ0VOVEVSKVxuICAgIGNvbnN0IGNlbnRlclRvUmlnaHQgPSBvbkNoYW5nZShBQ1RJT05TLkNFTlRFUl9UT19SSUdIVClcblxuICAgIGNvbnN0IGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNJbml0aWFsTW91bnQuY3VycmVudCkge1xuICAgICAgICAgICAgaXNJbml0aWFsTW91bnQuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBwcm9wcy5vbkNoYW5nZShzdGF0ZS52YWx1ZXMpXG4gICAgfSwgWyBzdGF0ZS52YWx1ZXMgXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIHN0eWxlPXtwcm9wcy5zdHlsZXM/LmNvbnRhaW5lcn0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8U2VsZWN0Qm94XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlcz8ubGVmdH1cbiAgICAgICAgICAgICAgICBudW1iZXJPZkxpbmVzPXtwcm9wcy5udW1iZXJPZkxpbmVzPy5sZWZ0fVxuICAgICAgICAgICAgICAgIHN0eWxlcz17cHJvcHMuc3R5bGVzPy5ib3h9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NldExlZnRWYWx1ZXNTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgdmFsdWVzPXtzdGF0ZS52YWx1ZXMubGVmdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2VsZWN0Qm94Q29udHJvbFxuICAgICAgICAgICAgICAgIHN0eWxlcz17cHJvcHMuc3R5bGVzPy5ib3hDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgIHNlbmRUb0xlZnQ9e2NlbnRlclRvTGVmdH1cbiAgICAgICAgICAgICAgICBzZW5kVG9MZWZ0RGlzYWJsZWQ9e3N0YXRlLnNlbGVjdGlvbnMuY2VudGVyLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgICBzZW5kVG9SaWdodD17bGVmdFRvQ2VudGVyfVxuICAgICAgICAgICAgICAgIHNlbmRUb1JpZ2h0RGlzYWJsZWQ9e3N0YXRlLnNlbGVjdGlvbnMubGVmdC5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNlbGVjdEJveFxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZXM/LmNlbnRlcn1cbiAgICAgICAgICAgICAgICBudW1iZXJPZkxpbmVzPXtwcm9wcy5udW1iZXJPZkxpbmVzPy5jZW50ZXJ9XG4gICAgICAgICAgICAgICAgc3R5bGVzPXtwcm9wcy5zdHlsZXM/LmJveH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17c2V0Q2VudGVyVmFsdWVzU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIHZhbHVlcz17c3RhdGUudmFsdWVzLmNlbnRlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2VsZWN0Qm94Q29udHJvbFxuICAgICAgICAgICAgICAgIHN0eWxlcz17cHJvcHMuc3R5bGVzPy5ib3hDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgIHNlbmRUb0xlZnQ9e3JpZ2h0VG9DZW50ZXJ9XG4gICAgICAgICAgICAgICAgc2VuZFRvTGVmdERpc2FibGVkPXtzdGF0ZS5zZWxlY3Rpb25zLnJpZ2h0Lmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgICBzZW5kVG9SaWdodD17Y2VudGVyVG9SaWdodH1cbiAgICAgICAgICAgICAgICBzZW5kVG9SaWdodERpc2FibGVkPXtzdGF0ZS5zZWxlY3Rpb25zLmNlbnRlci5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNlbGVjdEJveFxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZXM/LnJpZ2h0fVxuICAgICAgICAgICAgICAgIG51bWJlck9mTGluZXM9e3Byb3BzLm51bWJlck9mTGluZXM/LnJpZ2h0fVxuICAgICAgICAgICAgICAgIHN0eWxlcz17cHJvcHMuc3R5bGVzPy5ib3h9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NldFJpZ2h0VmFsdWVzU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIHZhbHVlcz17c3RhdGUudmFsdWVzLnJpZ2h0fVxuICAgICAgICAgICAgLz5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuVHJpcGxlU2VsZWN0Qm94LnByb3BUeXBlcyA9IHtcbiAgICBpbml0aWFsVmFsdWVzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsZWZ0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgICAgY2VudGVyOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgICAgcmlnaHQ6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBpbml0aWFsU2VsZWN0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGVmdDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICAgIGNlbnRlcjogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICAgIHJpZ2h0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICAgIH0pLFxuICAgIHRpdGxlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGVmdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY2VudGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHQgICAgcmlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gICAgbnVtYmVyT2ZMaW5lczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGVmdDpcdFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGNlbnRlcjogUHJvcFR5cGVzLm51bWJlcixcblx0ICAgIHJpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIH0pLFxuICAgIHN0eWxlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgY29udGFpbmVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBib3g6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBsYWJlbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIHNlbGVjdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbjogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9KSxcbiAgICAgICAgYm94Q29udHJvbGxlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIGJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9KVxuICAgIH0pLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBsZVNlbGVjdEJveCJdfQ==