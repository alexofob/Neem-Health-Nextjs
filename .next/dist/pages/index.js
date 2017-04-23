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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImxvZ2luRmFpbGVkIiwibm90aWZ5VXNlciIsIm9wZW5EaWFsb2ciLCJjb25zb2xlIiwibG9nIiwidXNlckFnZW50IiwicGFsZXR0ZSIsInByaW1hcnkxQ29sb3IiLCJwcmltYXJ5MkNvbG9yIiwiYWNjZW50MUNvbG9yIiwicGlja2VySGVhZGVyQ29sb3IiLCJhcHBCYXIiLCJoZWlnaHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJyZXEiLCJxdWVyeSIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJtZXNzYWdlIiwiZGlzcGF0Y2giLCJjb250ZW50IiwidXBkYXRlVXNlciIsInVzZXIiLCJjbG9zZURpYWxvZyIsIm9wdGlvbnMiLCJmZXRjaFBvbGljeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBUkE7QUFkQTs7SUF3Qk1BLEk7Ozs7Ozs7Ozs7d0NBZ0JnQjtBQUNsQixVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsV0FBZixFQUE0QjtBQUMxQiwrQ0FBYSxDQUNYLEtBQUtELEtBQUwsQ0FBV0UsVUFBWCxDQUFzQixpQ0FBdEIsQ0FEVyxFQUVYLEtBQUtGLEtBQUwsQ0FBV0csVUFBWCxDQUFzQixPQUF0QixDQUZXLENBQWI7QUFJQUMsZ0JBQVFDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0Usb0JBQVUsMkJBQVk7QUFDcEJDLHVCQUFXLEtBQUtOLEtBQUwsQ0FBV00sU0FERjtBQUVwQkMscUJBQVM7QUFDUEMsNENBRE87QUFFUEMsNENBRk87QUFHUEMsa0RBSE87QUFJUEM7QUFKTyxhQUZXO0FBUXBCQyxvQkFBUTtBQUNOQyxzQkFBUTtBQURGO0FBUlksV0FBWjtBQURaO0FBY0U7QUFBQTtBQUFBLFlBQUssT0FBTSxvQ0FBWCxFQUFnRCxzQkFBaEQ7QUFDRSw4REFBVSxpQkFBaUIsS0FBS2IsS0FBTCxDQUFXYyxlQUF0QztBQURGO0FBZEYsT0FERjtBQW9CRDs7Ozs7WUE5QzhCQyxHLFNBQUFBLEc7WUFBS0MsSyxTQUFBQSxLOzs7OztpREFDM0I7QUFDTGYsK0JBQWFlLFFBQVFBLE1BQU1mLFdBQWQsR0FBNEIsS0FEcEM7QUFFTEssNkJBQVdTLE1BQU1BLElBQUlFLE9BQUosQ0FBWSxZQUFaLENBQU4sR0FBa0NDLFVBQVVaO0FBRmxELGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZMUCxJLENBUUdvQixTLEdBQVk7QUFDakJiLGFBQVcsa0JBQVVjLE1BREo7QUFFakJuQixlQUFhLGtCQUFVb0IsSUFGTjtBQUdqQmxCLGNBQVksa0JBQVVtQixJQUFWLENBQWVDLFVBSFY7QUFJakJyQixjQUFZLGtCQUFVb0IsSUFBVixDQUFlQyxVQUpWO0FBS2pCVCxtQkFBaUIsa0JBQVVPLElBQVYsQ0FBZUU7QUFMZixDOzs7QUEwQ3JCLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsU0FBYTtBQUN0Q3RCLGdCQUFZLG9CQUFDdUIsT0FBRCxFQUFhO0FBQ3ZCQyxlQUFTLDBCQUFXRCxPQUFYLENBQVQ7QUFDRCxLQUhxQztBQUl0Q3RCLGdCQUFZLG9CQUFDd0IsT0FBRCxFQUFhO0FBQ3ZCRCxlQUFTLDBCQUFXQyxPQUFYLENBQVQ7QUFDRCxLQU5xQztBQU90Q0MsZ0JBQVksb0JBQUNDLElBQUQsRUFBVTtBQUNwQkgsZUFBUyx5QkFBV0csSUFBWCxDQUFUO0FBQ0QsS0FUcUM7QUFVdENDLGlCQUFhLHFCQUFDSCxPQUFELEVBQWE7QUFDeEJELGVBQVMsMkJBQVlDLE9BQVosQ0FBVDtBQUNEO0FBWnFDLEdBQWI7QUFBQSxDQUEzQjs7a0JBZWUsd0JBQ2IseUJBQVEsSUFBUixFQUFjSCxrQkFBZCxFQUNFLDhDQUFtQixFQUFFTyxTQUFTLEVBQUVDLGFBQWEsY0FBZixFQUFYLEVBQW5CLEVBQ0UsMEJBQVcsa0NBQW1CakMsSUFBbkIsQ0FBWCxDQURGLENBREYsQ0FEYSxDIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL25lZW0taGVhbHRoIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIG5hdmlnYXRvciAqL1xuXG5pbXBvcnQgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJztcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xuaW1wb3J0IHsgdGVhbDUwMCwgdGVhbDcwMCwgZGVlcE9yYW5nZUEyMDAgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiYXRjaEFjdGlvbnMgfSBmcm9tICdyZWR1eC1iYXRjaGVkLWFjdGlvbnMnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9hcG9sbG8vd2l0aERhdGEnO1xuaW1wb3J0IHdpdGhTaWduVXAgZnJvbSAnLi4vaG9jcy93aXRoU2lnblVwJztcbmltcG9ydCB3aXRoTXVsdGlUYWJMb2dvdXQgZnJvbSAnLi4vaG9jcy93aXRoTXVsdGlUYWJMb2dvdXQnO1xuXG4vLyBpbXBvcnRlZCBjb21wb25lbnRzXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwQmFzaWMnO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZVBhZ2UnO1xuXG5pbXBvcnQgeyB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9hY2NvdW50L2FjdGlvbnMnO1xuaW1wb3J0IHsgbm90aWZ5VXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXBwQmFzaWMvYWN0aW9ucyc7XG5pbXBvcnQgeyBvcGVuRGlhbG9nLCBjbG9zZURpYWxvZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvYWN0aW9ucyc7XG5cbmltcG9ydCB7IHVzZXJRdWVyeSB9IGZyb20gJy4uL2NvbXBvbmVudHMvYWNjb3VudC9ncmFwaHFsJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHF1ZXJ5IH0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9naW5GYWlsZWQ6IHF1ZXJ5ID8gcXVlcnkubG9naW5GYWlsZWQgOiBmYWxzZSxcbiAgICAgIHVzZXJBZ2VudDogcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdXNlckFnZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxvZ2luRmFpbGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcGVuRGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG5vdGlmeVVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmxvZ2luRmFpbGVkKSB7XG4gICAgICBiYXRjaEFjdGlvbnMoW1xuICAgICAgICB0aGlzLnByb3BzLm5vdGlmeVVzZXIoJ0xvZ2luIEZhaWxlZCwgUGxlYXNlIHRyeSBhZ2Fpbi4nKSxcbiAgICAgICAgdGhpcy5wcm9wcy5vcGVuRGlhbG9nKCdsb2dpbicpLFxuICAgICAgXSk7XG4gICAgICBjb25zb2xlLmxvZygnaW5zaWRlIGhvbWUgY29tcG9uZW50IGRpZCBtb3VudCcpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXJcbiAgICAgICAgbXVpVGhlbWU9e2dldE11aVRoZW1lKHtcbiAgICAgICAgICB1c2VyQWdlbnQ6IHRoaXMucHJvcHMudXNlckFnZW50LFxuICAgICAgICAgIHBhbGV0dGU6IHtcbiAgICAgICAgICAgIHByaW1hcnkxQ29sb3I6IHRlYWw1MDAsXG4gICAgICAgICAgICBwcmltYXJ5MkNvbG9yOiB0ZWFsNzAwLFxuICAgICAgICAgICAgYWNjZW50MUNvbG9yOiBkZWVwT3JhbmdlQTIwMCxcbiAgICAgICAgICAgIHBpY2tlckhlYWRlckNvbG9yOiB0ZWFsNTAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXBwQmFyOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDU2LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8QXBwIHRpdGxlPVwiTmVlbSBIZWFsdGggLSBZb3VyIG9ubGluZSBQaGFybWFjeVwiIGNhcm91c2VsUmVxdWlyZWQ+XG4gICAgICAgICAgPEhvbWVQYWdlIGlzQXV0aGVudGljYXRlZD17dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IC8+XG4gICAgICAgIDwvQXBwPlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgbm90aWZ5VXNlcjogKG1lc3NhZ2UpID0+IHtcbiAgICBkaXNwYXRjaChub3RpZnlVc2VyKG1lc3NhZ2UpKTtcbiAgfSxcbiAgb3BlbkRpYWxvZzogKGNvbnRlbnQpID0+IHtcbiAgICBkaXNwYXRjaChvcGVuRGlhbG9nKGNvbnRlbnQpKTtcbiAgfSxcbiAgdXBkYXRlVXNlcjogKHVzZXIpID0+IHtcbiAgICBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIpKTtcbiAgfSxcbiAgY2xvc2VEaWFsb2c6IChjb250ZW50KSA9PiB7XG4gICAgZGlzcGF0Y2goY2xvc2VEaWFsb2coY29udGVudCkpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKFxuICBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoXG4gICAgZ3JhcGhxbCh1c2VyUXVlcnksIHsgb3B0aW9uczogeyBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScgfSB9KShcbiAgICAgIHdpdGhTaWduVXAod2l0aE11bHRpVGFiTG9nb3V0KEhvbWUpKSxcbiAgICApLFxuICApLFxuKTtcbiJdfQ==