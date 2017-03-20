'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

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

// imported components

/* global navigator */

var Home = function (_Component) {
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
            title: 'Neem Health - Your online Pharmacy',
            carouselRequired: true
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
}(_react3.Component);

Home.propTypes = {
  userAgent: _react3.PropTypes.string.isRequired
};
exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(Home);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VyQWdlbnQiLCJwcm9wcyIsInBhbGV0dGUiLCJwcmltYXJ5MUNvbG9yIiwicHJpbWFyeTJDb2xvciIsImFjY2VudDFDb2xvciIsInBpY2tlckhlYWRlckNvbG9yIiwiYXBwQmFyIiwiaGVpZ2h0IiwicmVxIiwiaGVhZGVycyIsIm5hdmlnYXRvciIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7QUFGQTs7QUFWQTs7SUFlTUEsSTs7Ozs7Ozs7Ozs2QkFZSztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0Usb0JBQVUsMkJBQVk7QUFDcEJDLHVCQUFXLEtBQUtDLEtBQUwsQ0FBV0QsU0FERjtBQUVwQkUscUJBQVM7QUFDUEMsNENBRE87QUFFUEMsNENBRk87QUFHUEMsa0RBSE87QUFJUEM7QUFKTyxhQUZXO0FBUXBCQyxvQkFBUTtBQUNOQyxzQkFBUTtBQURGO0FBUlksV0FBWjtBQURaO0FBZUU7QUFBQTtBQUFBO0FBQ0UsbUJBQU0sb0NBRFI7QUFFRTtBQUZGO0FBSUU7QUFKRjtBQWZGLE9BREY7QUF3QkQ7Ozs7O1lBbkM4QkMsRyxTQUFBQSxHOzs7OztpREFDdEJBLE1BQ0gsRUFBRVQsV0FBV1MsSUFBSUMsT0FBSixDQUFZLFlBQVosQ0FBYixFQURHLEdBRUgsRUFBRVYsV0FBV1csVUFBVVgsU0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMRkQsSSxDQVFHYSxTLEdBQVk7QUFDakJaLGFBQVcsa0JBQVVhLE1BQVYsQ0FBaUJDO0FBRFgsQztrQkFnQ04saURBQXFCZixJQUFyQixDIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL25lZW0taGVhbHRoIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBnbG9iYWwgbmF2aWdhdG9yICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgeyB0ZWFsNTAwLCB0ZWFsNzAwLCBkZWVwT3JhbmdlQTIwMCB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9jb2xvcnMnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5pbXBvcnQgaW5pdFN0b3JlIGZyb20gJy4uL3N0b3JlJztcblxuLy8gaW1wb3J0ZWQgY29tcG9uZW50c1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL2FwcEJhc2ljJztcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVQYWdlJztcblxuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICByZXR1cm4gcmVxXG4gICAgICA/IHsgdXNlckFnZW50OiByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIH1cbiAgICAgIDogeyB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdXNlckFnZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyXG4gICAgICAgIG11aVRoZW1lPXtnZXRNdWlUaGVtZSh7XG4gICAgICAgICAgdXNlckFnZW50OiB0aGlzLnByb3BzLnVzZXJBZ2VudCxcbiAgICAgICAgICBwYWxldHRlOiB7XG4gICAgICAgICAgICBwcmltYXJ5MUNvbG9yOiB0ZWFsNTAwLFxuICAgICAgICAgICAgcHJpbWFyeTJDb2xvcjogdGVhbDcwMCxcbiAgICAgICAgICAgIGFjY2VudDFDb2xvcjogZGVlcE9yYW5nZUEyMDAsXG4gICAgICAgICAgICBwaWNrZXJIZWFkZXJDb2xvcjogdGVhbDUwMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFwcEJhcjoge1xuICAgICAgICAgICAgaGVpZ2h0OiA1NixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8QXBwXG4gICAgICAgICAgdGl0bGU9XCJOZWVtIEhlYWx0aCAtIFlvdXIgb25saW5lIFBoYXJtYWN5XCJcbiAgICAgICAgICBjYXJvdXNlbFJlcXVpcmVkXG4gICAgICAgID5cbiAgICAgICAgICA8SG9tZVBhZ2UgLz5cbiAgICAgICAgPC9BcHA+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKShIb21lKTtcbiJdfQ==