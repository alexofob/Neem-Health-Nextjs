'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _class, _temp;
/* global navigator */

// imported components


var _react = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = require('material-ui/styles/colors');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _appBasic = require('../components/appBasic');

var _appBasic2 = _interopRequireDefault(_appBasic);

var _homePage = require('../components/homePage');

var _homePage2 = _interopRequireDefault(_homePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
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
  return Home;
}(_react3.Component), _class.propTypes = {
  userAgent: _react3.PropTypes.string.isRequired
}, _temp);
exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(Home);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VyQWdlbnQiLCJwcm9wcyIsInBhbGV0dGUiLCJwcmltYXJ5MUNvbG9yIiwicHJpbWFyeTJDb2xvciIsImFjY2VudDFDb2xvciIsInBpY2tlckhlYWRlckNvbG9yIiwiYXBwQmFyIiwiaGVpZ2h0IiwicmVxIiwiaGVhZGVycyIsIm5hdmlnYXRvciIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBVUE7Ozs7Ozs7QUFSQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7OztJQUdNQSxJOzs7Ozs7Ozs7OzZCQVlLO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSxvQkFBVSwyQkFBWTtBQUNwQkMsdUJBQVcsS0FBS0MsS0FBTCxDQUFXRCxTQURGO0FBRXBCRSxxQkFBUztBQUNQQyw0Q0FETztBQUVQQyw0Q0FGTztBQUdQQyxrREFITztBQUlQQztBQUpPLGFBRlc7QUFRcEJDLG9CQUFRO0FBQ05DLHNCQUFRO0FBREY7QUFSWSxXQUFaO0FBRFo7QUFlRTtBQUFBO0FBQUE7QUFDRSxtQkFBTTtBQURSO0FBR0U7QUFIRjtBQWZGLE9BREY7QUF1QkQ7Ozs7O1lBbEM4QkMsRyxTQUFBQSxHOzs7OztpREFDdEJBLE1BQ0gsRUFBRVQsV0FBV1MsSUFBSUMsT0FBSixDQUFZLFlBQVosQ0FBYixFQURHLEdBRUgsRUFBRVYsV0FBV1csVUFBVVgsU0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdDWSxTLEdBQVk7QUFDakJaLGFBQVcsa0JBQVVhLE1BQVYsQ0FBaUJDO0FBRFgsQztrQkErQk4saURBQXFCZixJQUFyQixDIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL3BhdGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIGdsb2JhbCBuYXZpZ2F0b3IgKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCB7IHRlYWw1MDAsIHRlYWw3MDAsIGRlZXBPcmFuZ2VBMjAwIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9ycyc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5cbmltcG9ydCBpbml0U3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuXG4vLyBpbXBvcnRlZCBjb21wb25lbnRzXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwQmFzaWMnO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZVBhZ2UnO1xuXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIHJldHVybiByZXFcbiAgICAgID8geyB1c2VyQWdlbnQ6IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gfVxuICAgICAgOiB7IHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCB9O1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB1c2VyQWdlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXJcbiAgICAgICAgbXVpVGhlbWU9e2dldE11aVRoZW1lKHtcbiAgICAgICAgICB1c2VyQWdlbnQ6IHRoaXMucHJvcHMudXNlckFnZW50LFxuICAgICAgICAgIHBhbGV0dGU6IHtcbiAgICAgICAgICAgIHByaW1hcnkxQ29sb3I6IHRlYWw1MDAsXG4gICAgICAgICAgICBwcmltYXJ5MkNvbG9yOiB0ZWFsNzAwLFxuICAgICAgICAgICAgYWNjZW50MUNvbG9yOiBkZWVwT3JhbmdlQTIwMCxcbiAgICAgICAgICAgIHBpY2tlckhlYWRlckNvbG9yOiB0ZWFsNTAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXBwQmFyOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDU2LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxBcHBcbiAgICAgICAgICB0aXRsZT1cIk5lZW0gSGVhbHRoIC0gWW91ciBvbmxpbmUgUGhhcm1hY3lcIlxuICAgICAgICA+XG4gICAgICAgICAgPEhvbWVQYWdlIC8+XG4gICAgICAgIDwvQXBwPlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoSG9tZSk7XG4iXX0=