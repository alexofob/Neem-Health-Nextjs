'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _style = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _prefetch = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/next/dist/lib/prefetch.js');

var _prefetch2 = _interopRequireDefault(_prefetch);

var _reactRedux = require('react-redux');

var _reduxBatchedActions = require('redux-batched-actions');

var _reactApollo = require('react-apollo');

var _accountCircle = require('react-icons/lib/md/account-circle');

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _mobilePubNav = require('./mobilePubNav');

var _mobilePubNav2 = _interopRequireDefault(_mobilePubNav);

var _mobileAuthNav = require('./mobileAuthNav');

var _mobileAuthNav2 = _interopRequireDefault(_mobileAuthNav);

var _profileNav = require('./profileNav');

var _profileNav2 = _interopRequireDefault(_profileNav);

var _actions = require('../actions');

var _graphql = require('../../components/account/graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  brand: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: 2,
    cursor: 'pointer'
  },
  mdPerson: {
    marginLeft: 30,
    marginRight: 30
  }
};

var HomeNavBar = function HomeNavBar(props) {
  return _react2.default.createElement(
    'div',
    {
      'data-jsx': 719601408
    },
    _react2.default.createElement(_AppBar2.default, {
      title: _react2.default.createElement(
        'span',
        { style: (0, _extends3.default)({}, styles.brand, { color: 'white' }), 'data-jsx': 719601408
        },
        'Neem Health'
      ),
      className: 'mobile-only',
      onLeftIconButtonTouchTap: props.openDrawer
      // style={{ position: 'fixed', top: 0 }}
      , iconElementRight: props.isAuthenticated && props.data.user && _react2.default.createElement('img', { src: props.data.user.picture, alt: 'profile', className: 'profile-container', 'data-jsx': 719601408
      })
    }),
    _react2.default.createElement(
      _Toolbar.Toolbar,
      { className: 'desktop-only', style: { backgroundColor: 'inherit' } },
      _react2.default.createElement(
        _Toolbar.ToolbarGroup,
        null,
        _react2.default.createElement(
          _prefetch2.default,
          { href: '/' },
          _react2.default.createElement(
            'a',
            {
              'data-jsx': 719601408
            },
            _react2.default.createElement(_Toolbar.ToolbarTitle, { text: 'Neem Health', style: (0, _extends3.default)({}, styles.brand, { color: 'black' }) })
          )
        )
      ),
      _react2.default.createElement(
        _Toolbar.ToolbarGroup,
        { lastChild: true },
        _react2.default.createElement(
          _prefetch2.default,
          { href: '/pharmacy' },
          _react2.default.createElement(
            'a',
            {
              'data-jsx': 719601408
            },
            _react2.default.createElement(_FlatButton2.default, { label: 'For Pharmacies' })
          )
        ),
        props.isAuthenticated ? props.data.loading ? _react2.default.createElement(_accountCircle2.default, { style: styles.mdPerson }) : props.data.error ? _react2.default.createElement(_FlatButton2.default, { label: 'Log In', onTouchTap: props.openLoginDialog }) : props.data.user ? _react2.default.createElement(_profileNav2.default, { picture: props.data.user.picture, logoutTo: '' }) : _react2.default.createElement(_FlatButton2.default, {
          label: 'Sign Up',
          secondary: true,
          onTouchTap: props.openCreateUserDialog
        }) : _react2.default.createElement(_FlatButton2.default, { label: 'Log In', onTouchTap: props.openLoginDialog })
      )
    ),
    _react2.default.createElement(
      _Drawer2.default,
      { docked: false, width: 250, open: props.drawerOpen, onRequestChange: props.closeDrawer },
      _react2.default.createElement(_AppBar2.default, {
        title: _react2.default.createElement(
          'span',
          { style: (0, _extends3.default)({}, styles.brand, { color: 'white' }), 'data-jsx': 719601408
          },
          'Neem Health'
        ),
        showMenuIconButton: false
      }),
      props.isAuthenticated && props.data.user ? _react2.default.createElement(_mobileAuthNav2.default, { closeDrawer: props.closeDrawer, logoutTo: '' }) : _react2.default.createElement(_mobilePubNav2.default, { closeDrawer: props.closeDrawer, openLoginDialog: props.openLoginDialog })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 719601408,
      css: '.profile-container[data-jsx="719601408"] {position: relative;border: 1px solid white;border-radius: 50%;height: 30px;padding: 1px;width: 30px;margin: 10px 20px 0 20px;}'
    })
  );
};

HomeNavBar.propTypes = {
  drawerOpen: _react3.PropTypes.bool.isRequired,
  openDrawer: _react3.PropTypes.func.isRequired,
  closeDrawer: _react3.PropTypes.func.isRequired,
  openLoginDialog: _react3.PropTypes.func.isRequired,
  data: _react3.PropTypes.object.isRequired,
  isAuthenticated: _react3.PropTypes.bool.isRequired,
  openCreateUserDialog: _react3.PropTypes.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeDrawer: function closeDrawer() {
      dispatch((0, _actions.closeDrawer)());
    },
    openDrawer: function openDrawer() {
      dispatch((0, _actions.openDrawer)());
    },
    openLoginDialog: function openLoginDialog() {
      dispatch((0, _reduxBatchedActions.batchActions)([(0, _actions.closeDrawer)(), (0, _actions.openDialog)('login')]));
    },
    openCreateUserDialog: function openCreateUserDialog() {
      dispatch((0, _actions.openDialog)('createUser'));
    }
  };
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
}, mapDispatchToProps)((0, _reactApollo.graphql)(_graphql.userQuery)(HomeNavBar));