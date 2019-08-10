"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

describe('<SelectBoxControl />', function () {
  afterEach(_react2.cleanup);
  it('should render the controls', function () {
    var props = {
      sendToRight: function sendToRight() {},
      sendToLeft: function sendToLeft() {}
    };

    var _render = (0, _react2.render)(_react["default"].createElement(_["default"], props)),
        container = _render.container,
        getAllByText = _render.getAllByText;

    var buttons = container.querySelectorAll('input');
    expect(buttons).toHaveLength(2);
    expect(getAllByText('<<')).toHaveLength(1);
    expect(getAllByText('>>')).toHaveLength(1);
  });
  it('should disabled buttons according props', function () {
    var props = {
      sendToLeft: function sendToLeft() {},
      sendToLeftDisabled: false,
      sendToRight: function sendToRight() {},
      sendToRightDisabled: true
    };

    var _render2 = (0, _react2.render)(_react["default"].createElement(_["default"], props)),
        container = _render2.container;

    var _container$querySelec = container.querySelectorAll('input'),
        _container$querySelec2 = _slicedToArray(_container$querySelec, 2),
        sendToLeftButton = _container$querySelec2[0],
        sendToRightButton = _container$querySelec2[1];

    expect(sendToLeftButton.disabled).toBeFalsy();
    expect(sendToRightButton.disabled).toBeTruthy();
  });
  it('should call sendToLeft and sendToRight methods on click', function () {
    var props = {
      sendToLeft: jest.fn(),
      sendToRight: jest.fn()
    };

    var _render3 = (0, _react2.render)(_react["default"].createElement(_["default"], props)),
        container = _render3.container;

    var _container$querySelec3 = container.querySelectorAll('input'),
        _container$querySelec4 = _slicedToArray(_container$querySelec3, 2),
        sendToLeftButton = _container$querySelec4[0],
        sendToRightButton = _container$querySelec4[1];

    _react2.fireEvent.click(sendToLeftButton);

    expect(props.sendToLeft).toBeCalledTimes(1);

    _react2.fireEvent.click(sendToRightButton);

    expect(props.sendToRight).toBeCalledTimes(1);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlbGVjdEJveENvbnRyb2wvU2VsZWN0Qm94Q29udHJvbC50ZXN0LmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiYWZ0ZXJFYWNoIiwiY2xlYW51cCIsIml0IiwicHJvcHMiLCJzZW5kVG9SaWdodCIsInNlbmRUb0xlZnQiLCJjb250YWluZXIiLCJnZXRBbGxCeVRleHQiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImV4cGVjdCIsInRvSGF2ZUxlbmd0aCIsInNlbmRUb0xlZnREaXNhYmxlZCIsInNlbmRUb1JpZ2h0RGlzYWJsZWQiLCJzZW5kVG9MZWZ0QnV0dG9uIiwic2VuZFRvUmlnaHRCdXR0b24iLCJkaXNhYmxlZCIsInRvQmVGYWxzeSIsInRvQmVUcnV0aHkiLCJqZXN0IiwiZm4iLCJmaXJlRXZlbnQiLCJjbGljayIsInRvQmVDYWxsZWRUaW1lcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUFBLFFBQVEsQ0FBQyxzQkFBRCxFQUF5QixZQUFNO0FBQ3JDQyxFQUFBQSxTQUFTLENBQUNDLGVBQUQsQ0FBVDtBQUVBQyxFQUFBQSxFQUFFLENBQUMsNEJBQUQsRUFBK0IsWUFBTTtBQUNyQyxRQUFNQyxLQUFLLEdBQUc7QUFDWkMsTUFBQUEsV0FBVyxFQUFFLHVCQUFNLENBQUUsQ0FEVDtBQUVaQyxNQUFBQSxVQUFVLEVBQUUsc0JBQU0sQ0FBRTtBQUZSLEtBQWQ7O0FBRHFDLGtCQU1ELG9CQUFPLGdDQUFDLFlBQUQsRUFBc0JGLEtBQXRCLENBQVAsQ0FOQztBQUFBLFFBTTdCRyxTQU42QixXQU03QkEsU0FONkI7QUFBQSxRQU1sQkMsWUFOa0IsV0FNbEJBLFlBTmtCOztBQU9yQyxRQUFNQyxPQUFPLEdBQUdGLFNBQVMsQ0FBQ0csZ0JBQVYsQ0FBMkIsT0FBM0IsQ0FBaEI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDRixPQUFELENBQU4sQ0FBZ0JHLFlBQWhCLENBQTZCLENBQTdCO0FBQ0FELElBQUFBLE1BQU0sQ0FBQ0gsWUFBWSxDQUFDLElBQUQsQ0FBYixDQUFOLENBQTJCSSxZQUEzQixDQUF3QyxDQUF4QztBQUNBRCxJQUFBQSxNQUFNLENBQUNILFlBQVksQ0FBQyxJQUFELENBQWIsQ0FBTixDQUEyQkksWUFBM0IsQ0FBd0MsQ0FBeEM7QUFDRCxHQVhDLENBQUY7QUFhQVQsRUFBQUEsRUFBRSxDQUFDLHlDQUFELEVBQTRDLFlBQU07QUFDbEQsUUFBTUMsS0FBSyxHQUFHO0FBQ1pFLE1BQUFBLFVBQVUsRUFBRSxzQkFBTSxDQUFFLENBRFI7QUFFWk8sTUFBQUEsa0JBQWtCLEVBQUUsS0FGUjtBQUdaUixNQUFBQSxXQUFXLEVBQUUsdUJBQU0sQ0FBRSxDQUhUO0FBSVpTLE1BQUFBLG1CQUFtQixFQUFFO0FBSlQsS0FBZDs7QUFEa0QsbUJBUTVCLG9CQUFPLGdDQUFDLFlBQUQsRUFBc0JWLEtBQXRCLENBQVAsQ0FSNEI7QUFBQSxRQVExQ0csU0FSMEMsWUFRMUNBLFNBUjBDOztBQUFBLGdDQVNKQSxTQUFTLENBQUNHLGdCQUFWLENBQTJCLE9BQTNCLENBVEk7QUFBQTtBQUFBLFFBUzNDSyxnQkFUMkM7QUFBQSxRQVN6QkMsaUJBVHlCOztBQVdsREwsSUFBQUEsTUFBTSxDQUFDSSxnQkFBZ0IsQ0FBQ0UsUUFBbEIsQ0FBTixDQUFrQ0MsU0FBbEM7QUFDQVAsSUFBQUEsTUFBTSxDQUFDSyxpQkFBaUIsQ0FBQ0MsUUFBbkIsQ0FBTixDQUFtQ0UsVUFBbkM7QUFDRCxHQWJDLENBQUY7QUFlQWhCLEVBQUFBLEVBQUUsQ0FBQyx5REFBRCxFQUE0RCxZQUFNO0FBQ2xFLFFBQU1DLEtBQUssR0FBRztBQUNaRSxNQUFBQSxVQUFVLEVBQUVjLElBQUksQ0FBQ0MsRUFBTCxFQURBO0FBRVpoQixNQUFBQSxXQUFXLEVBQUVlLElBQUksQ0FBQ0MsRUFBTDtBQUZELEtBQWQ7O0FBRGtFLG1CQU01QyxvQkFBTyxnQ0FBQyxZQUFELEVBQXNCakIsS0FBdEIsQ0FBUCxDQU40QztBQUFBLFFBTTFERyxTQU4wRCxZQU0xREEsU0FOMEQ7O0FBQUEsaUNBT3BCQSxTQUFTLENBQUNHLGdCQUFWLENBQTJCLE9BQTNCLENBUG9CO0FBQUE7QUFBQSxRQU8zREssZ0JBUDJEO0FBQUEsUUFPekNDLGlCQVB5Qzs7QUFTbEVNLHNCQUFVQyxLQUFWLENBQWdCUixnQkFBaEI7O0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ1AsS0FBSyxDQUFDRSxVQUFQLENBQU4sQ0FBeUJrQixlQUF6QixDQUF5QyxDQUF6Qzs7QUFFQUYsc0JBQVVDLEtBQVYsQ0FBZ0JQLGlCQUFoQjs7QUFDQUwsSUFBQUEsTUFBTSxDQUFDUCxLQUFLLENBQUNDLFdBQVAsQ0FBTixDQUEwQm1CLGVBQTFCLENBQTBDLENBQTFDO0FBQ0QsR0FkQyxDQUFGO0FBZUQsQ0E5Q08sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciwgZmlyZUV2ZW50LCBjbGVhbnVwIH0gZnJvbSAnQHRlc3RpbmctbGlicmFyeS9yZWFjdCdcblxuaW1wb3J0IFNlbGVjdEJveENvbnRyb2wgZnJvbSAnLi8nXG5cbmRlc2NyaWJlKCc8U2VsZWN0Qm94Q29udHJvbCAvPicsICgpID0+IHtcbiAgYWZ0ZXJFYWNoKGNsZWFudXApXG5cbiAgaXQoJ3Nob3VsZCByZW5kZXIgdGhlIGNvbnRyb2xzJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgc2VuZFRvUmlnaHQ6ICgpID0+IHt9LFxuICAgICAgc2VuZFRvTGVmdDogKCkgPT4ge31cbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZ2V0QWxsQnlUZXh0IH0gPSByZW5kZXIoPFNlbGVjdEJveENvbnRyb2wgey4uLnByb3BzfSAvPilcbiAgICBjb25zdCBidXR0b25zID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylcbiAgICBleHBlY3QoYnV0dG9ucykudG9IYXZlTGVuZ3RoKDIpXG4gICAgZXhwZWN0KGdldEFsbEJ5VGV4dCgnPDwnKSkudG9IYXZlTGVuZ3RoKDEpXG4gICAgZXhwZWN0KGdldEFsbEJ5VGV4dCgnPj4nKSkudG9IYXZlTGVuZ3RoKDEpXG4gIH0pXG5cbiAgaXQoJ3Nob3VsZCBkaXNhYmxlZCBidXR0b25zIGFjY29yZGluZyBwcm9wcycsICgpID0+IHtcbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIHNlbmRUb0xlZnQ6ICgpID0+IHt9LFxuICAgICAgc2VuZFRvTGVmdERpc2FibGVkOiBmYWxzZSxcbiAgICAgIHNlbmRUb1JpZ2h0OiAoKSA9PiB7fSxcbiAgICAgIHNlbmRUb1JpZ2h0RGlzYWJsZWQ6IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxTZWxlY3RCb3hDb250cm9sIHsuLi5wcm9wc30gLz4pXG4gICAgY29uc3QgW3NlbmRUb0xlZnRCdXR0b24sIHNlbmRUb1JpZ2h0QnV0dG9uXSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXG5cbiAgICBleHBlY3Qoc2VuZFRvTGVmdEJ1dHRvbi5kaXNhYmxlZCkudG9CZUZhbHN5KClcbiAgICBleHBlY3Qoc2VuZFRvUmlnaHRCdXR0b24uZGlzYWJsZWQpLnRvQmVUcnV0aHkoKVxuICB9KVxuXG4gIGl0KCdzaG91bGQgY2FsbCBzZW5kVG9MZWZ0IGFuZCBzZW5kVG9SaWdodCBtZXRob2RzIG9uIGNsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgc2VuZFRvTGVmdDogamVzdC5mbigpLFxuICAgICAgc2VuZFRvUmlnaHQ6IGplc3QuZm4oKVxuICAgIH1cblxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSByZW5kZXIoPFNlbGVjdEJveENvbnRyb2wgey4uLnByb3BzfSAvPilcbiAgICBjb25zdCBbc2VuZFRvTGVmdEJ1dHRvbiwgc2VuZFRvUmlnaHRCdXR0b25dID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylcblxuICAgIGZpcmVFdmVudC5jbGljayhzZW5kVG9MZWZ0QnV0dG9uKVxuICAgIGV4cGVjdChwcm9wcy5zZW5kVG9MZWZ0KS50b0JlQ2FsbGVkVGltZXMoMSlcblxuICAgIGZpcmVFdmVudC5jbGljayhzZW5kVG9SaWdodEJ1dHRvbilcbiAgICBleHBlY3QocHJvcHMuc2VuZFRvUmlnaHQpLnRvQmVDYWxsZWRUaW1lcygxKVxuICB9KVxufSlcbiJdfQ==