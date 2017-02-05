'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _prefetch = require('/Users/alex/Labs/Nextjs/patient/node_modules/next/dist/lib/prefetch.js');

var _prefetch2 = _interopRequireDefault(_prefetch);

var _viewStore = require('../../store/viewStore');

var _mobilePubNav = require('./mobilePubNav');

var _mobilePubNav2 = _interopRequireDefault(_mobilePubNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  brand: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: 2,
    cursor: 'pointer'
  }
};

var HomeNavBar = (0, _mobxReact.inject)('store')((0, _mobxReact.observer)(function (_ref) {
  var store = _ref.store;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AppBar2.default, {
      title: _react2.default.createElement(
        'span',
        {
          style: (0, _extends3.default)({}, styles.brand, { color: 'white' })
        },
        'Neem Health'
      ),
      className: 'mobile-only',
      onLeftIconButtonTouchTap: store.openDrawer
      // style={{ position: 'fixed', top: 0 }}
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
          _react2.default.createElement(_Toolbar.ToolbarTitle, {
            text: 'Neem Health',
            style: (0, _extends3.default)({}, styles.brand, { color: 'black' })
          })
        )
      ),
      _react2.default.createElement(
        _Toolbar.ToolbarGroup,
        { lastChild: true },
        _react2.default.createElement(
          _prefetch2.default,
          { href: '/pharmacy' },
          _react2.default.createElement(_FlatButton2.default, { label: 'For Pharmacies' })
        ),
        _react2.default.createElement(_FlatButton2.default, { label: 'Log In' }),
        _react2.default.createElement(_FlatButton2.default, { label: 'Sign Up', secondary: true })
      )
    ),
    _react2.default.createElement(
      _Drawer2.default,
      {
        docked: false,
        width: 250,
        open: store.drawerOpen,
        onRequestChange: store.closeDrawer
      },
      _react2.default.createElement(_AppBar2.default, {
        title: _react2.default.createElement(
          'span',
          {
            style: (0, _extends3.default)({}, styles.brand, { color: 'white' })
          },
          'Neem Health'
        ),
        showMenuIconButton: false
      }),
      _react2.default.createElement(_mobilePubNav2.default, null)
    )
  );
}));

exports.default = HomeNavBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZU5hdmJhci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJicmFuZCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJjdXJzb3IiLCJIb21lTmF2QmFyIiwic3RvcmUiLCJjb2xvciIsIm9wZW5EcmF3ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3ZXJPcGVuIiwiY2xvc2VEcmF3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFFQTs7Ozs7O0FBT0EsSUFBTUEsU0FBUztBQUNiQyxTQUFPO0FBQ0xDLGNBQVUsRUFETDtBQUVMQyxnQkFBWSxHQUZQO0FBR0xDLG1CQUFlLENBSFY7QUFJTEMsWUFBUTtBQUpIO0FBRE0sQ0FBZjs7QUFTQSxJQUFNQyxhQUFhLHVCQUFPLE9BQVAsRUFBZ0IseUJBQVM7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUMxQztBQUFBO0FBQUE7QUFDRTtBQUNFLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNENBQVlQLE9BQU9DLEtBQW5CLElBQTBCTyxPQUFPLE9BQWpDO0FBREY7QUFBQTtBQUFBLE9BRko7QUFPRSxpQkFBVSxhQVBaO0FBUUUsZ0NBQTBCRCxNQUFNRTtBQUNoQztBQVRGLE1BREY7QUFhRTtBQUFBO0FBQUEsUUFBUyxXQUFVLGNBQW5CLEVBQWtDLE9BQU8sRUFBRUMsaUJBQWlCLFNBQW5CLEVBQXpDO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sTUFBSyxHQUFYO0FBQ0U7QUFDRSxrQkFBSyxhQURQO0FBRUUsOENBQVlWLE9BQU9DLEtBQW5CLElBQTBCTyxPQUFPLE9BQWpDO0FBRkY7QUFERjtBQURGLE9BREY7QUFTRTtBQUFBO0FBQUEsVUFBYyxlQUFkO0FBQ0U7QUFBQTtBQUFBLFlBQU0sTUFBSyxXQUFYO0FBQXVCLGdFQUFZLE9BQU0sZ0JBQWxCO0FBQXZCLFNBREY7QUFFRSw4REFBWSxPQUFNLFFBQWxCLEdBRkY7QUFHRSw4REFBWSxPQUFNLFNBQWxCLEVBQTRCLGVBQTVCO0FBSEY7QUFURixLQWJGO0FBNkJFO0FBQUE7QUFBQTtBQUNFLGdCQUFRLEtBRFY7QUFFRSxlQUFPLEdBRlQ7QUFHRSxjQUFNRCxNQUFNSSxVQUhkO0FBSUUseUJBQWlCSixNQUFNSztBQUp6QjtBQU1FO0FBQ0UsZUFDRTtBQUFBO0FBQUE7QUFDRSw4Q0FBWVosT0FBT0MsS0FBbkIsSUFBMEJPLE9BQU8sT0FBakM7QUFERjtBQUFBO0FBQUEsU0FGSjtBQU9FLDRCQUFvQjtBQVB0QixRQU5GO0FBZUU7QUFmRjtBQTdCRixHQUQwQztBQUFBLENBQVQsQ0FBaEIsQ0FBbkI7O2tCQWtEZUYsVSIsImZpbGUiOiJob21lTmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL3BhdGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ21hdGVyaWFsLXVpL0FwcEJhcic7XG5pbXBvcnQgeyBUb29sYmFyLCBUb29sYmFyR3JvdXAsIFRvb2xiYXJUaXRsZSB9IGZyb20gJ21hdGVyaWFsLXVpL1Rvb2xiYXInO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ21hdGVyaWFsLXVpL0RyYXdlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L3ByZWZldGNoJztcblxuaW1wb3J0IHsgVmlld1N0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmUvdmlld1N0b3JlJztcblxuaW1wb3J0IE1vYmlsZVB1Yk5hdiBmcm9tICcuL21vYmlsZVB1Yk5hdic7XG5cblxudHlwZSBQcm9wcyA9IHtcbiAgc3RvcmU6IFZpZXdTdG9yZSxcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBicmFuZDoge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMixcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgfSxcbn07XG5cbmNvbnN0IEhvbWVOYXZCYXIgPSBpbmplY3QoJ3N0b3JlJykob2JzZXJ2ZXIoKHsgc3RvcmUgfTogUHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8QXBwQmFyXG4gICAgICB0aXRsZT17XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGVzLmJyYW5kLCBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgTmVlbSBIZWFsdGhcbiAgICAgICAgPC9zcGFuPn1cbiAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZS1vbmx5XCJcbiAgICAgIG9uTGVmdEljb25CdXR0b25Ub3VjaFRhcD17c3RvcmUub3BlbkRyYXdlcn1cbiAgICAgIC8vIHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCB0b3A6IDAgfX1cbiAgICAvPlxuXG4gICAgPFRvb2xiYXIgY2xhc3NOYW1lPVwiZGVza3RvcC1vbmx5XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcgfX0+XG4gICAgICA8VG9vbGJhckdyb3VwID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8VG9vbGJhclRpdGxlXG4gICAgICAgICAgICB0ZXh0PVwiTmVlbSBIZWFsdGhcIlxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGVzLmJyYW5kLCBjb2xvcjogJ2JsYWNrJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvVG9vbGJhckdyb3VwPlxuICAgICAgPFRvb2xiYXJHcm91cCBsYXN0Q2hpbGQ+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcGhhcm1hY3lcIj48RmxhdEJ1dHRvbiBsYWJlbD1cIkZvciBQaGFybWFjaWVzXCIgLz48L0xpbms+XG4gICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiTG9nIEluXCIgLz5cbiAgICAgICAgPEZsYXRCdXR0b24gbGFiZWw9XCJTaWduIFVwXCIgc2Vjb25kYXJ5IC8+XG4gICAgICA8L1Rvb2xiYXJHcm91cD5cbiAgICA8L1Rvb2xiYXI+XG5cbiAgICA8RHJhd2VyXG4gICAgICBkb2NrZWQ9e2ZhbHNlfVxuICAgICAgd2lkdGg9ezI1MH1cbiAgICAgIG9wZW49e3N0b3JlLmRyYXdlck9wZW59XG4gICAgICBvblJlcXVlc3RDaGFuZ2U9e3N0b3JlLmNsb3NlRHJhd2VyfVxuICAgID5cbiAgICAgIDxBcHBCYXJcbiAgICAgICAgdGl0bGU9e1xuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMuYnJhbmQsIGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmVlbSBIZWFsdGhcbiAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICBzaG93TWVudUljb25CdXR0b249e2ZhbHNlfVxuICAgICAgLz5cbiAgICAgIDxNb2JpbGVQdWJOYXYgLz5cbiAgICA8L0RyYXdlcj5cbiAgPC9kaXY+XG4pKSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVOYXZCYXI7XG4iXX0=