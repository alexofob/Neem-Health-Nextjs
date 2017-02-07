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

exports.default = (0, _mobxReact.inject)('store')((0, _mobxReact.observer)(function (_ref) {
  var store = _ref.store,
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
      open: store.snackbarOpen,
      message: store.snackbarMessage,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwQmFzaWMuanMiXSwibmFtZXMiOlsic3RvcmUiLCJjaGlsZHJlbiIsInRpdGxlIiwic25hY2tiYXJPcGVuIiwic25hY2tiYXJNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUVBOztBQUlBOzs7O2tCQVNlLHVCQUFPLE9BQVAsRUFBZ0IseUJBQVM7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSx3QkFBb0JDLEtBQXBCO0FBQUEsTUFBb0JBLEtBQXBCLDhCQUE0QixhQUE1QjtBQUFBLFNBQ3RDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFBO0FBQVIsT0FERjtBQUVFLDhDQUFNLFNBQVEsT0FBZDtBQUFBLFFBRkY7QUFHRSw4Q0FBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSw4RkFBOUI7QUFBQSxRQUhGO0FBSUUsOENBQU0sTUFBSywrRUFBWDtBQUFBLFFBSkY7QUFLRSw4Q0FBTSxLQUFJLFlBQVYsRUFBdUIsTUFBSyxVQUE1QixFQUF1QyxNQUFLLDJFQUE1QztBQUFBLFFBTEY7QUFNRSw4Q0FBTSxLQUFJLFlBQVYsRUFBdUIsTUFBSyxVQUE1QixFQUF1QyxNQUFLLGlGQUE1QztBQUFBO0FBTkYsS0FERjtBQVNFO0FBQ0UsWUFBTUYsTUFBTUcsWUFEZDtBQUVFLGVBQVNILE1BQU1JLGVBRmpCO0FBR0Usd0JBQWtCO0FBSHBCLE1BVEY7QUFjR0gsWUFkSDtBQWVFLG9FQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURzQztBQUFBLENBQVQsQ0FBaEIsQzs7QUFYZiIsImZpbGUiOiJhcHBCYXNpYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IHR5cGUgeyBFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBTbmFja2JhciBmcm9tICdtYXRlcmlhbC11aS9TbmFja2Jhcic7XG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5cbmltcG9ydCBEZXZUb29scyBmcm9tICdtb2J4LXJlYWN0LWRldnRvb2xzJztcblxuaW1wb3J0IHsgVmlld1N0b3JlIH0gZnJvbSAnLi4vc3RvcmUvdmlld1N0b3JlJztcblxuLy8gaW1wb3J0ZWQgbW9kdWxlc1xuXG5pbXBvcnQgJy4uL2NvbmZpZy90YXBfZXZlbnRzJztcblxuXG50eXBlIFByb3BzID0ge1xuICBzdG9yZTogVmlld1N0b3JlLFxuICBjaGlsZHJlbj86IEVsZW1lbnQ8YW55PixcbiAgdGl0bGU6IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0KCdzdG9yZScpKG9ic2VydmVyKCh7IHN0b3JlLCBjaGlsZHJlbiwgdGl0bGUgPSAnTmVlbSBIZWFsdGgnIH06IFByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGggbWF4aW11bS1zY2FsZT0xLjAsIG1pbmltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vXCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwJyByZWw9J3N0eWxlc2hlZXRcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxTbmFja2JhclxuICAgICAgb3Blbj17c3RvcmUuc25hY2tiYXJPcGVufVxuICAgICAgbWVzc2FnZT17c3RvcmUuc25hY2tiYXJNZXNzYWdlfVxuICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NTAwMH1cbiAgICAvPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8RGV2VG9vbHMgLz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuc2xpY2stbmV4dDo6YmVmb3JlLCAuc2xpY2stcHJldjo6YmVmb3JlIHtcbiAgICAgICAgY29sb3I6IHRlYWw7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJ3doaXRlJztcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogIzAwNEQ0MDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlcltocmVmPVwiL1wiXSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2t0b3Atb25seSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLW9ubHkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xuICAgICAgICAgIC5kZXNrdG9wLW9ubHkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb2JpbGUtb25seSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG4pKSk7XG4iXX0=