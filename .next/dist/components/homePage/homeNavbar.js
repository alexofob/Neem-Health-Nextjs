'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _prefetch = require('/Users/alex/Labs/Nextjs/patient/node_modules/next/dist/lib/prefetch.js');

var _prefetch2 = _interopRequireDefault(_prefetch);

var _reactRedux = require('react-redux');

var _mobilePubNav = require('./mobilePubNav');

var _mobilePubNav2 = _interopRequireDefault(_mobilePubNav);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  brand: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: 2,
    cursor: 'pointer'
  }
};

var HomeNavBar = function HomeNavBar(props) {
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
      onLeftIconButtonTouchTap: props.openDrawer
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
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement(_Toolbar.ToolbarTitle, {
              text: 'Neem Health',
              style: (0, _extends3.default)({}, styles.brand, { color: 'black' })
            })
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
            null,
            _react2.default.createElement(_FlatButton2.default, { label: 'For Pharmacies' })
          )
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
        open: props.drawerOpen,
        onRequestChange: props.closeDrawer
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
      _react2.default.createElement(_mobilePubNav2.default, { closeDrawer: props.closeDrawer })
    )
  );
};

HomeNavBar.propTypes = {
  drawerOpen: _react3.PropTypes.bool.isRequired,
  openDrawer: _react3.PropTypes.func.isRequired,
  closeDrawer: _react3.PropTypes.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeDrawer: function closeDrawer() {
      dispatch((0, _actions.closeDrawer)());
    },
    openDrawer: function openDrawer() {
      dispatch((0, _actions.openDrawer)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
}, mapDispatchToProps)(HomeNavBar);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZU5hdmJhci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJicmFuZCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJjdXJzb3IiLCJIb21lTmF2QmFyIiwiY29sb3IiLCJwcm9wcyIsIm9wZW5EcmF3ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3ZXJPcGVuIiwiY2xvc2VEcmF3ZXIiLCJwcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVM7QUFDYkMsU0FBTztBQUNMQyxjQUFVLEVBREw7QUFFTEMsZ0JBQVksR0FGUDtBQUdMQyxtQkFBZSxDQUhWO0FBSUxDLFlBQVE7QUFKSDtBQURNLENBQWY7O0FBU0EsSUFBTUMsYUFBYSxTQUFiQSxVQUFhO0FBQUEsU0FDakI7QUFBQTtBQUFBO0FBQ0U7QUFDRSxhQUNFO0FBQUE7QUFBQTtBQUNFLDRDQUFZTixPQUFPQyxLQUFuQixJQUEwQk0sT0FBTyxPQUFqQztBQURGO0FBQUE7QUFBQSxPQUZKO0FBT0UsaUJBQVUsYUFQWjtBQVFFLGdDQUEwQkMsTUFBTUM7QUFDaEM7QUFURixNQURGO0FBYUU7QUFBQTtBQUFBLFFBQVMsV0FBVSxjQUFuQixFQUFrQyxPQUFPLEVBQUVDLGlCQUFpQixTQUFuQixFQUF6QztBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFNLE1BQUssR0FBWDtBQUFlO0FBQUE7QUFBQTtBQUNiO0FBQ0Usb0JBQUssYUFEUDtBQUVFLGdEQUFZVixPQUFPQyxLQUFuQixJQUEwQk0sT0FBTyxPQUFqQztBQUZGO0FBRGE7QUFBZjtBQURGLE9BREY7QUFTRTtBQUFBO0FBQUEsVUFBYyxlQUFkO0FBQ0U7QUFBQTtBQUFBLFlBQU0sTUFBSyxXQUFYO0FBQXVCO0FBQUE7QUFBQTtBQUFHLGtFQUFZLE9BQU0sZ0JBQWxCO0FBQUg7QUFBdkIsU0FERjtBQUVFLDhEQUFZLE9BQU0sUUFBbEIsR0FGRjtBQUdFLDhEQUFZLE9BQU0sU0FBbEIsRUFBNEIsZUFBNUI7QUFIRjtBQVRGLEtBYkY7QUE2QkU7QUFBQTtBQUFBO0FBQ0UsZ0JBQVEsS0FEVjtBQUVFLGVBQU8sR0FGVDtBQUdFLGNBQU1DLE1BQU1HLFVBSGQ7QUFJRSx5QkFBaUJILE1BQU1JO0FBSnpCO0FBTUU7QUFDRSxlQUNFO0FBQUE7QUFBQTtBQUNFLDhDQUFZWixPQUFPQyxLQUFuQixJQUEwQk0sT0FBTyxPQUFqQztBQURGO0FBQUE7QUFBQSxTQUZKO0FBT0UsNEJBQW9CO0FBUHRCLFFBTkY7QUFlRSw4REFBYyxhQUFhQyxNQUFNSSxXQUFqQztBQWZGO0FBN0JGLEdBRGlCO0FBQUEsQ0FBbkI7O0FBa0RBTixXQUFXTyxTQUFYLEdBQXVCO0FBQ3JCRixjQUFZLGtCQUFVRyxJQUFWLENBQWVDLFVBRE47QUFFckJOLGNBQVksa0JBQVVPLElBQVYsQ0FBZUQsVUFGTjtBQUdyQkgsZUFBYSxrQkFBVUksSUFBVixDQUFlRDtBQUhQLENBQXZCOztBQU9BLElBQU1FLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsU0FDekI7QUFDRUwsaUJBQWEsdUJBQU07QUFDakJNLGVBQVMsMkJBQVQ7QUFDRCxLQUhIO0FBSUVULGdCQUFZLHNCQUFNO0FBQ2hCUyxlQUFTLDBCQUFUO0FBQ0Q7QUFOSCxHQUR5QjtBQUFBLENBQTNCOztrQkFXZSx5QkFBUTtBQUFBLFNBQVNDLEtBQVQ7QUFBQSxDQUFSLEVBQXdCRixrQkFBeEIsRUFBNENYLFVBQTVDLEMiLCJmaWxlIjoiaG9tZU5hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdtYXRlcmlhbC11aS9BcHBCYXInO1xuaW1wb3J0IHsgVG9vbGJhciwgVG9vbGJhckdyb3VwLCBUb29sYmFyVGl0bGUgfSBmcm9tICdtYXRlcmlhbC11aS9Ub29sYmFyJztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuaW1wb3J0IERyYXdlciBmcm9tICdtYXRlcmlhbC11aS9EcmF3ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9wcmVmZXRjaCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgTW9iaWxlUHViTmF2IGZyb20gJy4vbW9iaWxlUHViTmF2JztcbmltcG9ydCB7IGNsb3NlRHJhd2VyLCBvcGVuRHJhd2VyIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYnJhbmQ6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGxldHRlclNwYWNpbmc6IDIsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gIH0sXG59O1xuXG5jb25zdCBIb21lTmF2QmFyID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxBcHBCYXJcbiAgICAgIHRpdGxlPXtcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMuYnJhbmQsIGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgID5cbiAgICAgICAgICBOZWVtIEhlYWx0aFxuICAgICAgICA8L3NwYW4+fVxuICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLW9ubHlcIlxuICAgICAgb25MZWZ0SWNvbkJ1dHRvblRvdWNoVGFwPXtwcm9wcy5vcGVuRHJhd2VyfVxuICAgICAgLy8gc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIHRvcDogMCB9fVxuICAgIC8+XG5cbiAgICA8VG9vbGJhciBjbGFzc05hbWU9XCJkZXNrdG9wLW9ubHlcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyB9fT5cbiAgICAgIDxUb29sYmFyR3JvdXAgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPlxuICAgICAgICAgIDxUb29sYmFyVGl0bGVcbiAgICAgICAgICAgIHRleHQ9XCJOZWVtIEhlYWx0aFwiXG4gICAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZXMuYnJhbmQsIGNvbG9yOiAnYmxhY2snIH19XG4gICAgICAgICAgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvVG9vbGJhckdyb3VwPlxuICAgICAgPFRvb2xiYXJHcm91cCBsYXN0Q2hpbGQ+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcGhhcm1hY3lcIj48YT48RmxhdEJ1dHRvbiBsYWJlbD1cIkZvciBQaGFybWFjaWVzXCIgLz48L2E+PC9MaW5rPlxuICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIkxvZyBJblwiIC8+XG4gICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiU2lnbiBVcFwiIHNlY29uZGFyeSAvPlxuICAgICAgPC9Ub29sYmFyR3JvdXA+XG4gICAgPC9Ub29sYmFyPlxuXG4gICAgPERyYXdlclxuICAgICAgZG9ja2VkPXtmYWxzZX1cbiAgICAgIHdpZHRoPXsyNTB9XG4gICAgICBvcGVuPXtwcm9wcy5kcmF3ZXJPcGVufVxuICAgICAgb25SZXF1ZXN0Q2hhbmdlPXtwcm9wcy5jbG9zZURyYXdlcn1cbiAgICA+XG4gICAgICA8QXBwQmFyXG4gICAgICAgIHRpdGxlPXtcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGVzLmJyYW5kLCBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5lZW0gSGVhbHRoXG4gICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgc2hvd01lbnVJY29uQnV0dG9uPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgICA8TW9iaWxlUHViTmF2IGNsb3NlRHJhd2VyPXtwcm9wcy5jbG9zZURyYXdlcn0gLz5cbiAgICA8L0RyYXdlcj5cbiAgPC9kaXY+XG4pO1xuXG5Ib21lTmF2QmFyLnByb3BUeXBlcyA9IHtcbiAgZHJhd2VyT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb3BlbkRyYXdlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xvc2VEcmF3ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IChcbiAge1xuICAgIGNsb3NlRHJhd2VyOiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChjbG9zZURyYXdlcigpKTtcbiAgICB9LFxuICAgIG9wZW5EcmF3ZXI6ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKG9wZW5EcmF3ZXIoKSk7XG4gICAgfSxcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSwgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lTmF2QmFyKTtcbiJdfQ==