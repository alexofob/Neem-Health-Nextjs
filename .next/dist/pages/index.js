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

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = require('material-ui/styles/colors');

var _store = require('../store');

var stores = _interopRequireWildcard(_store);

var _appBasic = require('../components/appBasic');

var _appBasic2 = _interopRequireDefault(_appBasic);

var _homePage = require('../components/homePage');

var _homePage2 = _interopRequireDefault(_homePage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// imported components
(0, _mobx.useStrict)(true);
/* global navigator */

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
        stores,
        _react2.default.createElement(
          _MuiThemeProvider2.default,
          {
            muiTheme: (0, _getMuiTheme2.default)({
              userAgent: this.props.userAgent,
              palette: {
                primary1Color: _colors.teal500,
                primary2Color: _colors.teal700,
                accent1Color: _colors.deepOrangeA200,
                pickerHeaderColor: _colors.teal500
              },
              appBar: {
                height: 56
              }
            })
          },
          _react2.default.createElement(
            _appBasic2.default,
            {
              title: 'Neem Health - Your online Pharmacy'
            },
            _react2.default.createElement(_homePage2.default, null)
          )
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbInN0b3JlcyIsInVzZXJBZ2VudCIsInByb3BzIiwicGFsZXR0ZSIsInByaW1hcnkxQ29sb3IiLCJwcmltYXJ5MkNvbG9yIiwiYWNjZW50MUNvbG9yIiwicGlja2VySGVhZGVyQ29sb3IiLCJhcHBCYXIiLCJoZWlnaHQiLCJyZXEiLCJoZWFkZXJzIiwibmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0lBQVlBLE07O0FBR1o7Ozs7QUFDQTs7Ozs7Ozs7QUFGQTtBQUlBLHFCQUFVLElBQVY7QUFoQkE7Ozs7Ozs7Ozs7Ozs2QkFnQ1c7QUFDUCxhQUNFO0FBQUE7QUFBY0EsY0FBZDtBQUNFO0FBQUE7QUFBQTtBQUNFLHNCQUFVLDJCQUFZO0FBQ3BCQyx5QkFBVyxLQUFLQyxLQUFMLENBQVdELFNBREY7QUFFcEJFLHVCQUFTO0FBQ1BDLDhDQURPO0FBRVBDLDhDQUZPO0FBR1BDLG9EQUhPO0FBSVBDO0FBSk8sZUFGVztBQVFwQkMsc0JBQVE7QUFDTkMsd0JBQVE7QUFERjtBQVJZLGFBQVo7QUFEWjtBQWVFO0FBQUE7QUFBQTtBQUNFLHFCQUFNO0FBRFI7QUFHRTtBQUhGO0FBZkY7QUFERixPQURGO0FBeUJEOzs7OztZQWxDOEJDLEcsU0FBQUEsRzs7Ozs7aURBQ3RCQSxNQUNILEVBQUVULFdBQVdTLElBQUlDLE9BQUosQ0FBWSxZQUFaLENBQWIsRUFERyxHQUVILEVBQUVWLFdBQVdXLFVBQVVYLFNBQXZCLEUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXgvTGFicy9OZXh0anMvcGF0aWVudCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiBnbG9iYWwgbmF2aWdhdG9yICovXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgeyB1c2VTdHJpY3QgfSBmcm9tICdtb2J4JztcblxuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgeyB0ZWFsNTAwLCB0ZWFsNzAwLCBkZWVwT3JhbmdlQTIwMCB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9jb2xvcnMnO1xuXG5pbXBvcnQgKiBhcyBzdG9yZXMgZnJvbSAnLi4vc3RvcmUnO1xuXG4vLyBpbXBvcnRlZCBjb21wb25lbnRzXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwQmFzaWMnO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZVBhZ2UnO1xuXG51c2VTdHJpY3QodHJ1ZSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHVzZXJBZ2VudDogc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIHJldHVybiByZXFcbiAgICAgID8geyB1c2VyQWdlbnQ6IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gfVxuICAgICAgOiB7IHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCB9O1xuICB9XG5cbiAgcHJvcHM6IFByb3BzO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyIHsuLi5zdG9yZXN9PlxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlclxuICAgICAgICAgIG11aVRoZW1lPXtnZXRNdWlUaGVtZSh7XG4gICAgICAgICAgICB1c2VyQWdlbnQ6IHRoaXMucHJvcHMudXNlckFnZW50LFxuICAgICAgICAgICAgcGFsZXR0ZToge1xuICAgICAgICAgICAgICBwcmltYXJ5MUNvbG9yOiB0ZWFsNTAwLFxuICAgICAgICAgICAgICBwcmltYXJ5MkNvbG9yOiB0ZWFsNzAwLFxuICAgICAgICAgICAgICBhY2NlbnQxQ29sb3I6IGRlZXBPcmFuZ2VBMjAwLFxuICAgICAgICAgICAgICBwaWNrZXJIZWFkZXJDb2xvcjogdGVhbDUwMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcHBCYXI6IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1NixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICA8QXBwXG4gICAgICAgICAgICB0aXRsZT1cIk5lZW0gSGVhbHRoIC0gWW91ciBvbmxpbmUgUGhhcm1hY3lcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIb21lUGFnZSAvPlxuICAgICAgICAgIDwvQXBwPlxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==