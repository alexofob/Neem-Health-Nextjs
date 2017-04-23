'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactRedux = require('react-redux');

var _index = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _reduxBatchedActions = require('redux-batched-actions');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  space: {
    marginTop: 24
  }
};

var CallToAction = function CallToAction(props) {
  return _react2.default.createElement(
    'div',
    { className: 'call-to-action', 'data-jsx': 841191441
    },
    _react2.default.createElement(
      'h1',
      {
        'data-jsx': 841191441
      },
      'Ready to put your pharmacy online?'
    ),
    _react2.default.createElement(
      'div',
      { className: 'button', 'data-jsx': 841191441
      },
      _react2.default.createElement(_RaisedButton2.default, {
        label: 'Get Started',
        secondary: true,
        style: style.space,
        onTouchTap: props.isAuthenticated ? function () {
          return _index2.default.push('/getStarted');
        } : props.openLoginDialog('getStarted')
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 841191441,
      css: '.call-to-action[data-jsx="841191441"] {background-color: teal;padding: 6% 10%;display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;}h1[data-jsx="841191441"] {color: white;text-align: center;}@media (max-width: 640px) {h1[data-jsx="841191441"] {font-size: 150%;font-weight: normal;}}'
    })
  );
};

CallToAction.propTypes = {
  openLoginDialog: _react3.PropTypes.func.isRequired,
  isAuthenticated: _react3.PropTypes.bool.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    openLoginDialog: function openLoginDialog(page) {
      return function () {
        dispatch((0, _reduxBatchedActions.batchActions)([(0, _actions.openLoginDialog)(), (0, _actions.storeRestrictedPage)(page)]));
      };
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CallToAction);