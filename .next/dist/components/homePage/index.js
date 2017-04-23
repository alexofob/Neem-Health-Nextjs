'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _react3 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _reactRedux = require('react-redux');

var _homeNavbar = require('./homeNavbar');

var _homeNavbar2 = _interopRequireDefault(_homeNavbar);

var _introHeader = require('./introHeader');

var _introHeader2 = _interopRequireDefault(_introHeader);

var _drugSearch = require('./drugSearch');

var _drugSearch2 = _interopRequireDefault(_drugSearch);

var _featuredPharmacies = require('./featuredPharmacies');

var _featuredPharmacies2 = _interopRequireDefault(_featuredPharmacies);

var _howItWorks = require('./howItWorks');

var _howItWorks2 = _interopRequireDefault(_howItWorks);

var _callToAction = require('./callToAction');

var _callToAction2 = _interopRequireDefault(_callToAction);

var _pwdlessLogin = require('../account/pwdlessLogin');

var _pwdlessLogin2 = _interopRequireDefault(_pwdlessLogin);

var _validateLogin = require('../account/validateLogin');

var _validateLogin2 = _interopRequireDefault(_validateLogin);

var _createUser = require('../account/createUser');

var _createUser2 = _interopRequireDefault(_createUser);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// imported modules
var styles = {
  dialogContent: {
    width: '90%',
    maxWidth: 420
  }
};

var HomePage = function HomePage(props) {
  var dialogContent = {
    login: { node: _react2.default.createElement(_pwdlessLogin2.default, null), title: 'Log In' },
    validateLogin: {
      node: _react2.default.createElement(_validateLogin2.default, null),
      title: 'Enter your code to log in'
    },
    createUser: { node: _react2.default.createElement(_createUser2.default, null), title: 'Sign Up' }
  };
  return _react2.default.createElement(
    'div',
    {
      'data-jsx': 1281695402
    },
    _react2.default.createElement(
      'main',
      {
        'data-jsx': 1281695402
      },
      _react2.default.createElement(
        'section',
        {
          'data-jsx': 1281695402
        },
        _react2.default.createElement(_homeNavbar2.default, { isAuthenticated: props.isAuthenticated }),
        _react2.default.createElement(_introHeader2.default, null)
      ),
      _react2.default.createElement(_drugSearch2.default, null),
      _react2.default.createElement(_featuredPharmacies2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'separator', 'data-jsx': 1281695402
        },
        _react2.default.createElement('hr', {
          'data-jsx': 1281695402
        })
      ),
      _react2.default.createElement(_howItWorks2.default, null),
      _react2.default.createElement(_callToAction2.default, { isAuthenticated: props.isAuthenticated })
    ),
    _react2.default.createElement(
      'footer',
      {
        'data-jsx': 1281695402
      },
      '\xA9 Neem Health'
    ),
    _react2.default.createElement(
      _Dialog2.default,
      {
        title: dialogContent[props.dialogContent].title,
        modal: false,
        open: props.dialogOpen,
        onRequestClose: props.closeDialog,
        contentStyle: styles.dialogContent,
        autoScrollBodyContent: true
      },
      dialogContent[props.dialogContent].node
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 1281695402,
      css: 'section[data-jsx="1281695402"] {background-image: linear-gradient(-90deg, #F7FDFB, #7BB2B7);}.separator[data-jsx="1281695402"] {opacity: 0.38;width: 70%;margin: 0 auto;}'
    })
  );
};

HomePage.propTypes = {
  dialogOpen: _react3.PropTypes.bool.isRequired,
  dialogContent: _react3.PropTypes.string.isRequired,
  closeDialog: _react3.PropTypes.func.isRequired,
  isAuthenticated: _react3.PropTypes.bool.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    dialogOpen: state.dialog.open,
    dialogContent: state.dialog.content
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeDialog: function closeDialog() {
      dispatch((0, _actions.closeDialog)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomePage);