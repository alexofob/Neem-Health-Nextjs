'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _search = require('react-icons/lib/md/search');

var _search2 = _interopRequireDefault(_search);

var _addShoppingCart = require('react-icons/lib/md/add-shopping-cart');

var _addShoppingCart2 = _interopRequireDefault(_addShoppingCart);

var _notifications = require('react-icons/lib/md/notifications');

var _notifications2 = _interopRequireDefault(_notifications);

var _fileTextO = require('react-icons/lib/fa/file-text-o');

var _fileTextO2 = _interopRequireDefault(_fileTextO);

var _gx = require('gx');

var _gx2 = _interopRequireDefault(_gx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HowItWorks = function HowItWorks() {
  return _react2.default.createElement(
    'div',
    { className: 'how-it-works', 'data-jsx': 2003045162
    },
    _react2.default.createElement(
      'h2',
      {
        'data-jsx': 2003045162
      },
      'How does it work?'
    ),
    _react2.default.createElement(
      _gx2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: 'message', 'data-jsx': 2003045162
        },
        _react2.default.createElement(
          'span',
          { className: 'icon', 'data-jsx': 2003045162
          },
          _react2.default.createElement(_search2.default, null)
        ),
        _react2.default.createElement(
          'h3',
          {
            'data-jsx': 2003045162
          },
          'Find'
        ),
        _react2.default.createElement(
          'p',
          {
            'data-jsx': 2003045162
          },
          'Search for your drug and get a list of pharmacies near you which have stock of your drug.'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'message', 'data-jsx': 2003045162
        },
        _react2.default.createElement(
          'span',
          { className: 'icon', 'data-jsx': 2003045162
          },
          _react2.default.createElement(_addShoppingCart2.default, null)
        ),
        _react2.default.createElement(
          'h3',
          {
            'data-jsx': 2003045162
          },
          'Buy'
        ),
        _react2.default.createElement(
          'p',
          {
            'data-jsx': 2003045162
          },
          'Walk into the pharmacy and by your drug.'
        )
      )
    ),
    _react2.default.createElement(
      _gx2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: 'message', 'data-jsx': 2003045162
        },
        _react2.default.createElement(
          'span',
          { className: 'icon', 'data-jsx': 2003045162
          },
          _react2.default.createElement(_notifications2.default, null)
        ),
        _react2.default.createElement(
          'h3',
          {
            'data-jsx': 2003045162
          },
          'Get Notified'
        ),
        _react2.default.createElement(
          'p',
          {
            'data-jsx': 2003045162
          },
          'If your drug is not immediately available, you can sign up and make request for your drug and you will be notified when your drug is available.'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'message', 'data-jsx': 2003045162
        },
        _react2.default.createElement(
          'span',
          { className: 'icon', 'data-jsx': 2003045162
          },
          _react2.default.createElement(_fileTextO2.default, null)
        ),
        _react2.default.createElement(
          'h3',
          {
            'data-jsx': 2003045162
          },
          'Prescription'
        ),
        _react2.default.createElement(
          'span',
          { className: 'message-text', 'data-jsx': 2003045162
          },
          _react2.default.createElement(
            'p',
            {
              'data-jsx': 2003045162
            },
            'If you have your Prescription from the doctor, you can scan and post it. You will be notified of the pharmacies near you who can supply your drugs.'
          )
        )
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 2003045162,
      css: '.how-it-works[data-jsx="2003045162"]{padding: 4% 10%;}h2[data-jsx="2003045162"] {font-weight: normal;text-align: center;}.message[data-jsx="2003045162"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;padding: 8% 5%;height: 200px;}.icon[data-jsx="2003045162"] {font-size: 48px;opacity: 0.54;}p[data-jsx="2003045162"] {text-align: center;opacity: 0.54;font-size: 85%;max-width: 320px;}h3[data-jsx="2003045162"] {padding: 4% 0 2% 0;}'
    })
  );
};

exports.default = HowItWorks;