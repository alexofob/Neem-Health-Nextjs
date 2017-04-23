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

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _reduxFormMaterialUi = require('redux-form-material-ui');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _search = require('react-icons/lib/fa/search');

var _search2 = _interopRequireDefault(_search);

var _fileTextO = require('react-icons/lib/fa/file-text-o');

var _fileTextO2 = _interopRequireDefault(_fileTextO);

var _reduxForm = require('redux-form');

var _validators = require('../../utils/validators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  space: {
    margin: 12
  }
};

var DrugSearch = function DrugSearch() {
  return _react2.default.createElement(
    'div',
    { className: 'drug-search', 'data-jsx': 2300201533
    },
    _react2.default.createElement(
      'div',
      { className: 'centered-container', 'data-jsx': 2300201533
      },
      _react2.default.createElement(
        'div',
        { className: 'desktop-only spacing', 'data-jsx': 2300201533
        },
        _react2.default.createElement(
          _Paper2.default,
          { zDepth: 1 },
          _react2.default.createElement(_reduxForm.Field, {
            name: 'drug',
            id: 'drug',
            component: _reduxFormMaterialUi.TextField,
            type: 'text',
            floatingLabelText: 'What Drug?',
            style: style.space,
            validate: [_validators.required]
          }),
          _react2.default.createElement(_reduxForm.Field, {
            name: 'location',
            id: 'location',
            component: _reduxFormMaterialUi.TextField,
            type: 'text',
            floatingLabelText: 'Where?',
            style: style.space,
            validate: [_validators.required]
          }),
          _react2.default.createElement(_RaisedButton2.default, {
            label: 'Search', secondary: true,
            style: style.space,
            labelPosition: 'before',
            icon: _react2.default.createElement(_search2.default, null)
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'mobile-only ', 'data-jsx': 2300201533
        },
        _react2.default.createElement(_RaisedButton2.default, {
          label: 'Search for Drug', secondary: true,
          style: style.space,
          labelPosition: 'before',
          icon: _react2.default.createElement(_search2.default, null),
          labelStyle: style.space
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'separator-spacing', 'data-jsx': 2300201533
      },
      _react2.default.createElement(
        'div',
        { className: 'separator', 'data-jsx': 2300201533
        },
        _react2.default.createElement(
          'span',
          {
            'data-jsx': 2300201533
          },
          'or'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'centered-container desktop-only', 'data-jsx': 2300201533
      },
      _react2.default.createElement(_RaisedButton2.default, {
        label: 'Request drugs with prescription', primary: true,
        style: (0, _extends3.default)({}, style.space),
        labelPosition: 'before',
        icon: _react2.default.createElement(_fileTextO2.default, null),
        labelStyle: style.space
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'centered-container mobile-only', 'data-jsx': 2300201533
      },
      _react2.default.createElement(_RaisedButton2.default, {
        label: 'Request with prescription', primary: true,
        style: (0, _extends3.default)({}, style.space, { minWidth: 250 })
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 2300201533,
      css: '.drug-search[data-jsx="2300201533"] {background-color: #f5f5f5;padding: 2%;}.centered-container[data-jsx="2300201533"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;}.spacing[data-jsx="2300201533"] {padding: 1% 0;}.separator[data-jsx="2300201533"] {width: 100%;border-bottom: 1px solid #60636a;text-align: center;height: 18px;margin-bottom: 15px;}.separator[data-jsx="2300201533"] span[data-jsx="2300201533"] {line-height: 15px;padding: 0 10px;background: #f5f5f5;display: inline-block;margin-top: 10px;color: #60636a;}.separator-spacing[data-jsx="2300201533"] {padding: 2% 30%;}'
    })
  );
};

// Decorate with redux-form
exports.default = (0, _reduxForm.reduxForm)({
  form: 'searchForm'
})(DrugSearch);