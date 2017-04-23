'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _arrowForward = require('react-icons/lib/md/arrow-forward');

var _arrowForward2 = _interopRequireDefault(_arrowForward);

var _localPharmacy = require('react-icons/lib/md/local-pharmacy');

var _localPharmacy2 = _interopRequireDefault(_localPharmacy);

var _search = require('react-icons/lib/md/search');

var _search2 = _interopRequireDefault(_search);

var _prefetch = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/next/dist/lib/prefetch.js');

var _prefetch2 = _interopRequireDefault(_prefetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MobilePubNav = function MobilePubNav(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_MenuItem2.default, {
      primaryText: 'Log in',
      leftIcon: _react2.default.createElement(_arrowForward2.default, null),
      onTouchTap: props.openLoginDialog
    }),
    _react2.default.createElement(_MenuItem2.default, {
      primaryText: 'Search for your Drug',
      leftIcon: _react2.default.createElement(_search2.default, null),
      onTouchTap: props.closeDrawer
    }),
    _react2.default.createElement(
      _prefetch2.default,
      { href: '/pharmacy' },
      _react2.default.createElement(
        'a',
        null,
        _react2.default.createElement(_MenuItem2.default, {
          primaryText: 'For Pharmacies',
          leftIcon: _react2.default.createElement(_localPharmacy2.default, null),
          onTouchTap: props.closeDrawer
        })
      )
    )
  );
};

MobilePubNav.propTypes = {
  closeDrawer: _react3.PropTypes.func.isRequired,
  openLoginDialog: _react3.PropTypes.func.isRequired
};

exports.default = MobilePubNav;