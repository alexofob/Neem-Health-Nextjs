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

var _viewStore = require('../store/viewStore');

var _viewStore2 = _interopRequireDefault(_viewStore);

var _appBasic = require('../components/appBasic');

var _appBasic2 = _interopRequireDefault(_appBasic);

var _homePage = require('../components/homePage');

var _homePage2 = _interopRequireDefault(_homePage);

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
        { store: _viewStore2.default },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbInVzZXJBZ2VudCIsInByb3BzIiwicGFsZXR0ZSIsInByaW1hcnkxQ29sb3IiLCJwcmltYXJ5MkNvbG9yIiwiYWNjZW50MUNvbG9yIiwicGlja2VySGVhZGVyQ29sb3IiLCJhcHBCYXIiLCJoZWlnaHQiLCJyZXEiLCJoZWFkZXJzIiwibmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7QUFGQTtBQUlBLHFCQUFVLElBQVY7QUFoQkE7Ozs7Ozs7Ozs7Ozs2QkFnQ1c7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFVLDBCQUFWO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usc0JBQVUsMkJBQVk7QUFDcEJBLHlCQUFXLEtBQUtDLEtBQUwsQ0FBV0QsU0FERjtBQUVwQkUsdUJBQVM7QUFDUEMsOENBRE87QUFFUEMsOENBRk87QUFHUEMsb0RBSE87QUFJUEM7QUFKTyxlQUZXO0FBUXBCQyxzQkFBUTtBQUNOQyx3QkFBUTtBQURGO0FBUlksYUFBWjtBQURaO0FBZUU7QUFBQTtBQUFBO0FBQ0UscUJBQU07QUFEUjtBQUdFO0FBSEY7QUFmRjtBQURGLE9BREY7QUF5QkQ7Ozs7O1lBbEM4QkMsRyxTQUFBQSxHOzs7OztpREFDdEJBLE1BQ0gsRUFBRVQsV0FBV1MsSUFBSUMsT0FBSixDQUFZLFlBQVosQ0FBYixFQURHLEdBRUgsRUFBRVYsV0FBV1csVUFBVVgsU0FBdkIsRSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qIGdsb2JhbCBuYXZpZ2F0b3IgKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcbmltcG9ydCB7IHVzZVN0cmljdCB9IGZyb20gJ21vYngnO1xuXG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCB7IHRlYWw1MDAsIHRlYWw3MDAsIGRlZXBPcmFuZ2VBMjAwIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9ycyc7XG5cbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS92aWV3U3RvcmUnO1xuXG4vLyBpbXBvcnRlZCBjb21wb25lbnRzXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwQmFzaWMnO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZVBhZ2UnO1xuXG51c2VTdHJpY3QodHJ1ZSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHVzZXJBZ2VudDogc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIHJldHVybiByZXFcbiAgICAgID8geyB1c2VyQWdlbnQ6IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gfVxuICAgICAgOiB7IHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCB9O1xuICB9XG5cbiAgcHJvcHM6IFByb3BzO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyXG4gICAgICAgICAgbXVpVGhlbWU9e2dldE11aVRoZW1lKHtcbiAgICAgICAgICAgIHVzZXJBZ2VudDogdGhpcy5wcm9wcy51c2VyQWdlbnQsXG4gICAgICAgICAgICBwYWxldHRlOiB7XG4gICAgICAgICAgICAgIHByaW1hcnkxQ29sb3I6IHRlYWw1MDAsXG4gICAgICAgICAgICAgIHByaW1hcnkyQ29sb3I6IHRlYWw3MDAsXG4gICAgICAgICAgICAgIGFjY2VudDFDb2xvcjogZGVlcE9yYW5nZUEyMDAsXG4gICAgICAgICAgICAgIHBpY2tlckhlYWRlckNvbG9yOiB0ZWFsNTAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFwcEJhcjoge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU2LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBcHBcbiAgICAgICAgICAgIHRpdGxlPVwiTmVlbSBIZWFsdGggLSBZb3VyIG9ubGluZSBQaGFybWFjeVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhvbWVQYWdlIC8+XG4gICAgICAgICAgPC9BcHA+XG4gICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19