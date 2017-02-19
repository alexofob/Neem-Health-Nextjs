'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('/Users/alex/Labs/Nextjs/patient/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/alex/Labs/Nextjs/patient/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _mobxReact = require('mobx-react');

var _mobxReactDevtools = require('mobx-react-devtools');

var _mobxReactDevtools2 = _interopRequireDefault(_mobxReactDevtools);

var _viewStore = require('../store/viewStore');

require('../config/tap_events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _mobxReact.inject)('viewStore')((0, _mobxReact.observer)(function (_ref) {
  var viewStore = _ref.viewStore,
      children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'Neem Health' : _ref$title;
  return _react2.default.createElement(
    'div',
    {
      'data-jsx': 1723387151
    },
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement(
        'title',
        {
          'data-jsx': 1723387151
        },
        title
      ),
      _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 1723387151
      }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width maximum-scale=1.0, minimum-scale=1.0, user-scalable=no', 'data-jsx': 1723387151
      }),
      _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500\' rel=\'stylesheet', 'data-jsx': 1723387151
      }),
      _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css', 'data-jsx': 1723387151
      }),
      _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css', 'data-jsx': 1723387151
      })
    ),
    _react2.default.createElement(_Snackbar2.default, {
      open: viewStore.snackbarOpen,
      message: viewStore.snackbarMessage,
      autoHideDuration: 5000
    }),
    children,
    _react2.default.createElement(_mobxReactDevtools2.default, null),
    _react2.default.createElement(_style2.default, {
      styleId: 1723387151,
      css: '\n        .slick-next::before, .slick-prev::before {\n        color: teal;\n        }\n        * {\n          margin: 0;\n          box-sizing: border-box;\n        }\n        body {\n          margin: 0;\n          font-family: Roboto, sans-serif;\n          background-color: \'white\';\n        }\n        a {\n          color: #004D40;\n          text-decoration: none;\n        }\n        a:hover {\n          font-weight: bold;\n        }\n        a:hover[href="/"] {\n          text-decoration: none;\n        }\n        body {\n          font-size: 15px;\n          line-height: 24px;\n        }\n        footer {\n          height: 50px;\n          line-height: 50px;\n          text-align: center;\n        }\n        .desktop-only {\n          display: block;\n        }\n\n        .mobile-only {\n          display: none !important;\n\n        }\n\n        @media(max-width:767px) {\n          .desktop-only {\n            display: none !important;\n          }\n\n          .mobile-only {\n            display: flex !important;\n          }\n        }\n      '
    })
  );
}));

// imported modules
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwQmFzaWMuanMiXSwibmFtZXMiOlsidmlld1N0b3JlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsInNuYWNrYmFyT3BlbiIsInNuYWNrYmFyTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFFQTs7QUFJQTs7OztrQkFTZSx1QkFBTyxXQUFQLEVBQW9CLHlCQUFTO0FBQUEsTUFBR0EsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBY0MsUUFBZCxRQUFjQSxRQUFkO0FBQUEsd0JBQXdCQyxLQUF4QjtBQUFBLE1BQXdCQSxLQUF4Qiw4QkFBZ0MsYUFBaEM7QUFBQSxTQUMxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRQTtBQUFSLE9BREY7QUFFRSw4Q0FBTSxTQUFRLE9BQWQ7QUFBQSxRQUZGO0FBR0UsOENBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsOEZBQTlCO0FBQUEsUUFIRjtBQUlFLDhDQUFNLE1BQUssK0VBQVg7QUFBQSxRQUpGO0FBS0UsOENBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssVUFBNUIsRUFBdUMsTUFBSywyRUFBNUM7QUFBQSxRQUxGO0FBTUUsOENBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssVUFBNUIsRUFBdUMsTUFBSyxpRkFBNUM7QUFBQTtBQU5GLEtBREY7QUFTRTtBQUNFLFlBQU1GLFVBQVVHLFlBRGxCO0FBRUUsZUFBU0gsVUFBVUksZUFGckI7QUFHRSx3QkFBa0I7QUFIcEIsTUFURjtBQWNHSCxZQWRIO0FBZUUsb0VBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRDBDO0FBQUEsQ0FBVCxDQUFwQixDOztBQVhmIiwiZmlsZSI6ImFwcEJhc2ljLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL3BhdGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgdHlwZSB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ21hdGVyaWFsLXVpL1NuYWNrYmFyJztcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcblxuaW1wb3J0IERldlRvb2xzIGZyb20gJ21vYngtcmVhY3QtZGV2dG9vbHMnO1xuXG5pbXBvcnQgeyBWaWV3U3RvcmUgfSBmcm9tICcuLi9zdG9yZS92aWV3U3RvcmUnO1xuXG4vLyBpbXBvcnRlZCBtb2R1bGVzXG5cbmltcG9ydCAnLi4vY29uZmlnL3RhcF9ldmVudHMnO1xuXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHZpZXdTdG9yZTogVmlld1N0b3JlLFxuICBjaGlsZHJlbj86IEVsZW1lbnQ8YW55PixcbiAgdGl0bGU6IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0KCd2aWV3U3RvcmUnKShvYnNlcnZlcigoeyB2aWV3U3RvcmUsIGNoaWxkcmVuLCB0aXRsZSA9ICdOZWVtIEhlYWx0aCcgfTogUHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCBtYXhpbXVtLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAnIHJlbD0nc3R5bGVzaGVldFwiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPFNuYWNrYmFyXG4gICAgICBvcGVuPXt2aWV3U3RvcmUuc25hY2tiYXJPcGVufVxuICAgICAgbWVzc2FnZT17dmlld1N0b3JlLnNuYWNrYmFyTWVzc2FnZX1cbiAgICAgIGF1dG9IaWRlRHVyYXRpb249ezUwMDB9XG4gICAgLz5cbiAgICB7Y2hpbGRyZW59XG4gICAgPERldlRvb2xzIC8+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLnNsaWNrLW5leHQ6OmJlZm9yZSwgLnNsaWNrLXByZXY6OmJlZm9yZSB7XG4gICAgICAgIGNvbG9yOiB0ZWFsO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICd3aGl0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMDRENDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXJbaHJlZj1cIi9cIl0ge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kZXNrdG9wLW9ubHkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1vbmx5IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAgICAgICAuZGVza3RvcC1vbmx5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9iaWxlLW9ubHkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cblxuKSkpO1xuIl19