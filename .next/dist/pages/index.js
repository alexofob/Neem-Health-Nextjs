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

var _reactRedux = require('react-redux');

var _reduxBatchedActions = require('redux-batched-actions');

var _reactApollo = require('react-apollo');

var _withData = require('../apollo/withData');

var _withData2 = _interopRequireDefault(_withData);

var _withSignUp = require('../hocs/withSignUp');

var _withSignUp2 = _interopRequireDefault(_withSignUp);

var _withMultiTabLogout = require('../hocs/withMultiTabLogout');

var _withMultiTabLogout2 = _interopRequireDefault(_withMultiTabLogout);

var _appBasic = require('../components/appBasic');

var _appBasic2 = _interopRequireDefault(_appBasic);

var _homePage = require('../components/homePage');

var _homePage2 = _interopRequireDefault(_homePage);

var _actions = require('../components/account/actions');

var _actions2 = require('../components/appBasic/actions');

var _actions3 = require('../components/actions');

var _graphql = require('../components/account/graphql');

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
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.loginFailed) {
        (0, _reduxBatchedActions.batchActions)([this.props.notifyUser('Login Failed, Please try again.'), this.props.openDialog('login')]);
        console.log('inside home component did mount');
      }
    }
  }, {
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
          { title: 'Neem Health - Your online Pharmacy', carouselRequired: true },
          _react2.default.createElement(_homePage2.default, { isAuthenticated: this.props.isAuthenticated })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req,
            query = _ref2.query;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', {
                  loginFailed: query ? query.loginFailed : false,
                  userAgent: req ? req.headers['user-agent'] : navigator.userAgent
                });

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
  userAgent: _react3.PropTypes.string,
  loginFailed: _react3.PropTypes.bool,
  openDialog: _react3.PropTypes.func.isRequired,
  notifyUser: _react3.PropTypes.func.isRequired,
  isAuthenticated: _react3.PropTypes.bool.isRequired
};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    notifyUser: function notifyUser(message) {
      dispatch((0, _actions2.notifyUser)(message));
    },
    openDialog: function openDialog(content) {
      dispatch((0, _actions3.openDialog)(content));
    },
    updateUser: function updateUser(user) {
      dispatch((0, _actions.updateUser)(user));
    },
    closeDialog: function closeDialog(content) {
      dispatch((0, _actions3.closeDialog)(content));
    }
  };
};

exports.default = (0, _withData2.default)((0, _reactRedux.connect)(null, mapDispatchToProps)((0, _reactApollo.graphql)(_graphql.userQuery, { options: { fetchPolicy: 'network-only' } })((0, _withSignUp2.default)((0, _withMultiTabLogout2.default)(Home)))));