'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _mobxReact = require('mobx-react');

var _mobx = require('mobx');

var _viewStore = require('../store/viewStore');

var _viewStore2 = _interopRequireDefault(_viewStore);

var _appBasic = require('../components/appBasic');

var _appBasic2 = _interopRequireDefault(_appBasic);

var _homePage = require('../components/homePage');

var _homePage2 = _interopRequireDefault(_homePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// imported components

/* global navigator */

(0, _mobx.useStrict)(true);

var _default = function (_Component) {
  (0, _inherits3.default)(_default, _Component);

  function _default() {
    (0, _classCallCheck3.default)(this, _default);
    return (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).apply(this, arguments));
  }

  (0, _createClass3.default)(_default, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _mobxReact.Provider,
        { store: _viewStore2.default },
        _react2.default.createElement(
          _appBasic2.default,
          {
            userAgent: this.props.userAgent,
            title: 'Neem Health - Your online Pharmacy'
          },
          _react2.default.createElement(_homePage2.default, null)
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', req ? { userAgent: req.headers['user-agent'] } : { userAgent: navigator.userAgent });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return _default;
}(_react3.Component);

exports.default = _default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbInByb3BzIiwidXNlckFnZW50IiwicmVxIiwiaGVhZGVycyIsIm5hdmlnYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7QUFGQTs7QUFUQTs7QUFhQSxxQkFBVSxJQUFWOzs7Ozs7Ozs7Ozs7NkJBZ0JXO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBVSwwQkFBVjtBQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFXLEtBQUtBLEtBQUwsQ0FBV0MsU0FEeEI7QUFFRSxtQkFBTTtBQUZSO0FBSUU7QUFKRjtBQURGLE9BREY7QUFVRDs7Ozs7WUFuQjhCQyxHLFNBQUFBLEc7Ozs7O2lEQUN0QkEsTUFDSCxFQUFFRCxXQUFXQyxJQUFJQyxPQUFKLENBQVksWUFBWixDQUFiLEVBREcsR0FFSCxFQUFFRixXQUFXRyxVQUFVSCxTQUF2QixFIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL3BhdGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyogZ2xvYmFsIG5hdmlnYXRvciAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RyaWN0IH0gZnJvbSAnbW9ieCc7XG5cblxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL3ZpZXdTdG9yZSc7XG5cbi8vIGltcG9ydGVkIGNvbXBvbmVudHNcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9hcHBCYXNpYyc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lUGFnZSc7XG5cbnVzZVN0cmljdCh0cnVlKTtcblxudHlwZSBQcm9wcyA9IHtcbiAgdXNlckFnZW50OiBzdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XG4gICAgcmV0dXJuIHJlcVxuICAgICAgPyB7IHVzZXJBZ2VudDogcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSB9XG4gICAgICA6IHsgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50IH07XG4gIH1cblxuICBwcm9wczogUHJvcHM7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPEFwcFxuICAgICAgICAgIHVzZXJBZ2VudD17dGhpcy5wcm9wcy51c2VyQWdlbnR9XG4gICAgICAgICAgdGl0bGU9XCJOZWVtIEhlYWx0aCAtIFlvdXIgb25saW5lIFBoYXJtYWN5XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxIb21lUGFnZSAvPlxuICAgICAgICA8L0FwcD5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19