'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZU5hdmJhci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJicmFuZCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJjdXJzb3IiLCJIb21lTmF2QmFyIiwiY29sb3IiLCJwcm9wcyIsIm9wZW5EcmF3ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3ZXJPcGVuIiwiY2xvc2VEcmF3ZXIiLCJwcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVM7QUFDYkMsU0FBTztBQUNMQyxjQUFVLEVBREw7QUFFTEMsZ0JBQVksR0FGUDtBQUdMQyxtQkFBZSxDQUhWO0FBSUxDLFlBQVE7QUFKSDtBQURNLENBQWY7O0FBU0EsSUFBTUMsYUFBYSxTQUFiQSxVQUFhO0FBQUEsU0FDakI7QUFBQTtBQUFBO0FBQ0U7QUFDRSxhQUNFO0FBQUE7QUFBQTtBQUNFLDRDQUFZTixPQUFPQyxLQUFuQixJQUEwQk0sT0FBTyxPQUFqQztBQURGO0FBQUE7QUFBQSxPQUZKO0FBT0UsaUJBQVUsYUFQWjtBQVFFLGdDQUEwQkMsTUFBTUM7QUFDaEM7QUFURixNQURGO0FBYUU7QUFBQTtBQUFBLFFBQVMsV0FBVSxjQUFuQixFQUFrQyxPQUFPLEVBQUVDLGlCQUFpQixTQUFuQixFQUF6QztBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFNLE1BQUssR0FBWDtBQUFlO0FBQUE7QUFBQTtBQUNiO0FBQ0Usb0JBQUssYUFEUDtBQUVFLGdEQUFZVixPQUFPQyxLQUFuQixJQUEwQk0sT0FBTyxPQUFqQztBQUZGO0FBRGE7QUFBZjtBQURGLE9BREY7QUFTRTtBQUFBO0FBQUEsVUFBYyxlQUFkO0FBQ0U7QUFBQTtBQUFBLFlBQU0sTUFBSyxXQUFYO0FBQXVCO0FBQUE7QUFBQTtBQUFHLGtFQUFZLE9BQU0sZ0JBQWxCO0FBQUg7QUFBdkIsU0FERjtBQUVFLDhEQUFZLE9BQU0sUUFBbEIsR0FGRjtBQUdFLDhEQUFZLE9BQU0sU0FBbEIsRUFBNEIsZUFBNUI7QUFIRjtBQVRGLEtBYkY7QUE2QkU7QUFBQTtBQUFBO0FBQ0UsZ0JBQVEsS0FEVjtBQUVFLGVBQU8sR0FGVDtBQUdFLGNBQU1DLE1BQU1HLFVBSGQ7QUFJRSx5QkFBaUJILE1BQU1JO0FBSnpCO0FBTUU7QUFDRSxlQUNFO0FBQUE7QUFBQTtBQUNFLDhDQUFZWixPQUFPQyxLQUFuQixJQUEwQk0sT0FBTyxPQUFqQztBQURGO0FBQUE7QUFBQSxTQUZKO0FBT0UsNEJBQW9CO0FBUHRCLFFBTkY7QUFlRSw4REFBYyxhQUFhQyxNQUFNSSxXQUFqQztBQWZGO0FBN0JGLEdBRGlCO0FBQUEsQ0FBbkI7O0FBa0RBTixXQUFXTyxTQUFYLEdBQXVCO0FBQ3JCRixjQUFZLGtCQUFVRyxJQUFWLENBQWVDLFVBRE47QUFFckJOLGNBQVksa0JBQVVPLElBQVYsQ0FBZUQsVUFGTjtBQUdyQkgsZUFBYSxrQkFBVUksSUFBVixDQUFlRDtBQUhQLENBQXZCOztBQU9BLElBQU1FLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsU0FDekI7QUFDRUwsaUJBQWEsdUJBQU07QUFDakJNLGVBQVMsMkJBQVQ7QUFDRCxLQUhIO0FBSUVULGdCQUFZLHNCQUFNO0FBQ2hCUyxlQUFTLDBCQUFUO0FBQ0Q7QUFOSCxHQUR5QjtBQUFBLENBQTNCOztrQkFXZSx5QkFBUTtBQUFBLFNBQVNDLEtBQVQ7QUFBQSxDQUFSLEVBQXdCRixrQkFBeEIsRUFBNENYLFVBQTVDLEMiLCJmaWxlIjoiaG9tZU5hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9uZWVtLWhlYWx0aCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJztcbmltcG9ydCB7IFRvb2xiYXIsIFRvb2xiYXJHcm91cCwgVG9vbGJhclRpdGxlIH0gZnJvbSAnbWF0ZXJpYWwtdWkvVG9vbGJhcic7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRHJhd2VyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvcHJlZmV0Y2gnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IE1vYmlsZVB1Yk5hdiBmcm9tICcuL21vYmlsZVB1Yk5hdic7XG5pbXBvcnQgeyBjbG9zZURyYXdlciwgb3BlbkRyYXdlciB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJyYW5kOiB7XG4gICAgZm9udFNpemU6IDI0LFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAyLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICB9LFxufTtcblxuY29uc3QgSG9tZU5hdkJhciA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8QXBwQmFyXG4gICAgICB0aXRsZT17XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGVzLmJyYW5kLCBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgTmVlbSBIZWFsdGhcbiAgICAgICAgPC9zcGFuPn1cbiAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZS1vbmx5XCJcbiAgICAgIG9uTGVmdEljb25CdXR0b25Ub3VjaFRhcD17cHJvcHMub3BlbkRyYXdlcn1cbiAgICAgIC8vIHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCB0b3A6IDAgfX1cbiAgICAvPlxuXG4gICAgPFRvb2xiYXIgY2xhc3NOYW1lPVwiZGVza3RvcC1vbmx5XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcgfX0+XG4gICAgICA8VG9vbGJhckdyb3VwID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5cbiAgICAgICAgICA8VG9vbGJhclRpdGxlXG4gICAgICAgICAgICB0ZXh0PVwiTmVlbSBIZWFsdGhcIlxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGVzLmJyYW5kLCBjb2xvcjogJ2JsYWNrJyB9fVxuICAgICAgICAgIC8+PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1Rvb2xiYXJHcm91cD5cbiAgICAgIDxUb29sYmFyR3JvdXAgbGFzdENoaWxkPlxuICAgICAgICA8TGluayBocmVmPVwiL3BoYXJtYWN5XCI+PGE+PEZsYXRCdXR0b24gbGFiZWw9XCJGb3IgUGhhcm1hY2llc1wiIC8+PC9hPjwvTGluaz5cbiAgICAgICAgPEZsYXRCdXR0b24gbGFiZWw9XCJMb2cgSW5cIiAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIlNpZ24gVXBcIiBzZWNvbmRhcnkgLz5cbiAgICAgIDwvVG9vbGJhckdyb3VwPlxuICAgIDwvVG9vbGJhcj5cblxuICAgIDxEcmF3ZXJcbiAgICAgIGRvY2tlZD17ZmFsc2V9XG4gICAgICB3aWR0aD17MjUwfVxuICAgICAgb3Blbj17cHJvcHMuZHJhd2VyT3Blbn1cbiAgICAgIG9uUmVxdWVzdENoYW5nZT17cHJvcHMuY2xvc2VEcmF3ZXJ9XG4gICAgPlxuICAgICAgPEFwcEJhclxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlcy5icmFuZCwgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZWVtIEhlYWx0aFxuICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgIHNob3dNZW51SWNvbkJ1dHRvbj17ZmFsc2V9XG4gICAgICAvPlxuICAgICAgPE1vYmlsZVB1Yk5hdiBjbG9zZURyYXdlcj17cHJvcHMuY2xvc2VEcmF3ZXJ9IC8+XG4gICAgPC9EcmF3ZXI+XG4gIDwvZGl2PlxuKTtcblxuSG9tZU5hdkJhci5wcm9wVHlwZXMgPSB7XG4gIGRyYXdlck9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9wZW5EcmF3ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsb3NlRHJhd2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoXG4gIHtcbiAgICBjbG9zZURyYXdlcjogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goY2xvc2VEcmF3ZXIoKSk7XG4gICAgfSxcbiAgICBvcGVuRHJhd2VyOiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChvcGVuRHJhd2VyKCkpO1xuICAgIH0sXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZU5hdkJhcik7XG4iXX0=