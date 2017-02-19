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

var HomeNavBar = (0, _mobxReact.inject)('viewStore')((0, _mobxReact.observer)(function (_ref) {
  var viewStore = _ref.viewStore;
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
      onLeftIconButtonTouchTap: viewStore.openDrawer
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
        open: viewStore.drawerOpen,
        onRequestChange: viewStore.closeDrawer
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZU5hdmJhci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJicmFuZCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJjdXJzb3IiLCJIb21lTmF2QmFyIiwidmlld1N0b3JlIiwiY29sb3IiLCJvcGVuRHJhd2VyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyT3BlbiIsImNsb3NlRHJhd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7OztBQU9BLElBQU1BLFNBQVM7QUFDYkMsU0FBTztBQUNMQyxjQUFVLEVBREw7QUFFTEMsZ0JBQVksR0FGUDtBQUdMQyxtQkFBZSxDQUhWO0FBSUxDLFlBQVE7QUFKSDtBQURNLENBQWY7O0FBU0EsSUFBTUMsYUFBYSx1QkFBTyxXQUFQLEVBQW9CLHlCQUFTO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FDOUM7QUFBQTtBQUFBO0FBQ0U7QUFDRSxhQUNFO0FBQUE7QUFBQTtBQUNFLDRDQUFZUCxPQUFPQyxLQUFuQixJQUEwQk8sT0FBTyxPQUFqQztBQURGO0FBQUE7QUFBQSxPQUZKO0FBT0UsaUJBQVUsYUFQWjtBQVFFLGdDQUEwQkQsVUFBVUU7QUFDcEM7QUFURixNQURGO0FBYUU7QUFBQTtBQUFBLFFBQVMsV0FBVSxjQUFuQixFQUFrQyxPQUFPLEVBQUVDLGlCQUFpQixTQUFuQixFQUF6QztBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFNLE1BQUssR0FBWDtBQUNFO0FBQ0Usa0JBQUssYUFEUDtBQUVFLDhDQUFZVixPQUFPQyxLQUFuQixJQUEwQk8sT0FBTyxPQUFqQztBQUZGO0FBREY7QUFERixPQURGO0FBU0U7QUFBQTtBQUFBLFVBQWMsZUFBZDtBQUNFO0FBQUE7QUFBQSxZQUFNLE1BQUssV0FBWDtBQUF1QixnRUFBWSxPQUFNLGdCQUFsQjtBQUF2QixTQURGO0FBRUUsOERBQVksT0FBTSxRQUFsQixHQUZGO0FBR0UsOERBQVksT0FBTSxTQUFsQixFQUE0QixlQUE1QjtBQUhGO0FBVEYsS0FiRjtBQTZCRTtBQUFBO0FBQUE7QUFDRSxnQkFBUSxLQURWO0FBRUUsZUFBTyxHQUZUO0FBR0UsY0FBTUQsVUFBVUksVUFIbEI7QUFJRSx5QkFBaUJKLFVBQVVLO0FBSjdCO0FBTUU7QUFDRSxlQUNFO0FBQUE7QUFBQTtBQUNFLDhDQUFZWixPQUFPQyxLQUFuQixJQUEwQk8sT0FBTyxPQUFqQztBQURGO0FBQUE7QUFBQSxTQUZKO0FBT0UsNEJBQW9CO0FBUHRCLFFBTkY7QUFlRTtBQWZGO0FBN0JGLEdBRDhDO0FBQUEsQ0FBVCxDQUFwQixDQUFuQjs7a0JBa0RlRixVIiwiZmlsZSI6ImhvbWVOYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXgvTGFicy9OZXh0anMvcGF0aWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJztcbmltcG9ydCB7IFRvb2xiYXIsIFRvb2xiYXJHcm91cCwgVG9vbGJhclRpdGxlIH0gZnJvbSAnbWF0ZXJpYWwtdWkvVG9vbGJhcic7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRHJhd2VyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvcHJlZmV0Y2gnO1xuXG5pbXBvcnQgeyBWaWV3U3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZS92aWV3U3RvcmUnO1xuXG5pbXBvcnQgTW9iaWxlUHViTmF2IGZyb20gJy4vbW9iaWxlUHViTmF2JztcblxuXG50eXBlIFByb3BzID0ge1xuICB2aWV3U3RvcmU6IFZpZXdTdG9yZSxcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBicmFuZDoge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGV0dGVyU3BhY2luZzogMixcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgfSxcbn07XG5cbmNvbnN0IEhvbWVOYXZCYXIgPSBpbmplY3QoJ3ZpZXdTdG9yZScpKG9ic2VydmVyKCh7IHZpZXdTdG9yZSB9OiBQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxBcHBCYXJcbiAgICAgIHRpdGxlPXtcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMuYnJhbmQsIGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgID5cbiAgICAgICAgICBOZWVtIEhlYWx0aFxuICAgICAgICA8L3NwYW4+fVxuICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLW9ubHlcIlxuICAgICAgb25MZWZ0SWNvbkJ1dHRvblRvdWNoVGFwPXt2aWV3U3RvcmUub3BlbkRyYXdlcn1cbiAgICAgIC8vIHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCB0b3A6IDAgfX1cbiAgICAvPlxuXG4gICAgPFRvb2xiYXIgY2xhc3NOYW1lPVwiZGVza3RvcC1vbmx5XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcgfX0+XG4gICAgICA8VG9vbGJhckdyb3VwID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8VG9vbGJhclRpdGxlXG4gICAgICAgICAgICB0ZXh0PVwiTmVlbSBIZWFsdGhcIlxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGVzLmJyYW5kLCBjb2xvcjogJ2JsYWNrJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvVG9vbGJhckdyb3VwPlxuICAgICAgPFRvb2xiYXJHcm91cCBsYXN0Q2hpbGQ+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcGhhcm1hY3lcIj48RmxhdEJ1dHRvbiBsYWJlbD1cIkZvciBQaGFybWFjaWVzXCIgLz48L0xpbms+XG4gICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiTG9nIEluXCIgLz5cbiAgICAgICAgPEZsYXRCdXR0b24gbGFiZWw9XCJTaWduIFVwXCIgc2Vjb25kYXJ5IC8+XG4gICAgICA8L1Rvb2xiYXJHcm91cD5cbiAgICA8L1Rvb2xiYXI+XG5cbiAgICA8RHJhd2VyXG4gICAgICBkb2NrZWQ9e2ZhbHNlfVxuICAgICAgd2lkdGg9ezI1MH1cbiAgICAgIG9wZW49e3ZpZXdTdG9yZS5kcmF3ZXJPcGVufVxuICAgICAgb25SZXF1ZXN0Q2hhbmdlPXt2aWV3U3RvcmUuY2xvc2VEcmF3ZXJ9XG4gICAgPlxuICAgICAgPEFwcEJhclxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlcy5icmFuZCwgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZWVtIEhlYWx0aFxuICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgIHNob3dNZW51SWNvbkJ1dHRvbj17ZmFsc2V9XG4gICAgICAvPlxuICAgICAgPE1vYmlsZVB1Yk5hdiAvPlxuICAgIDwvRHJhd2VyPlxuICA8L2Rpdj5cbikpKTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZU5hdkJhcjtcbiJdfQ==