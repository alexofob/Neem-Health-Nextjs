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

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = require('material-ui/styles/colors');

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
      title = _ref$title === undefined ? 'Neem Health' : _ref$title,
      userAgent = _ref.userAgent;
  return _react2.default.createElement(
    _MuiThemeProvider2.default,
    {
      muiTheme: (0, _getMuiTheme2.default)({
        userAgent: userAgent,
        palette: {
          primary1Color: _colors.teal500,
          primary2Color: _colors.teal700,
          accent1Color: _colors.deepOrangeA200,
          pickerHeaderColor: _colors.teal500
        },
        appBar: {
          height: 56
        }
      })
    },
    _react2.default.createElement(
      'div',
      {
        'data-jsx': 564549989
      },
      _react2.default.createElement(
        _head2.default,
        null,
        _react2.default.createElement(
          'title',
          {
            'data-jsx': 564549989
          },
          title
        ),
        _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 564549989
        }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width maximum-scale=1.0, minimum-scale=1.0, user-scalable=no', 'data-jsx': 564549989
        }),
        _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500\' rel=\'stylesheet', 'data-jsx': 564549989
        }),
        _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css', 'data-jsx': 564549989
        }),
        _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css', 'data-jsx': 564549989
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
        styleId: 564549989,
        css: '\n          .slick-next::before, .slick-prev::before {\n          color: teal;\n          }\n          * {\n            margin: 0;\n            box-sizing: border-box;\n          }\n          body {\n            margin: 0;\n            font-family: Roboto, sans-serif;\n            background-color: \'white\';\n          }\n          a {\n            color: #004D40;\n            text-decoration: none;\n          }\n          a:hover {\n            text-decoration: underline;\n          }\n          body {\n            font-size: 15px;\n            line-height: 24px;\n          }\n          footer {\n            height: 50px;\n            line-height: 50px;\n            text-align: center;\n          }\n          .desktop-only {\n            display: block;\n          }\n\n          .mobile-only {\n            display: none !important;\n\n          }\n\n          @media(max-width:767px) {\n            .desktop-only {\n              display: none !important;\n            }\n\n            .mobile-only {\n              display: flex !important;\n            }\n          }\n        '
      })
    )
  );
}));

// imported modules
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwQmFzaWMuanMiXSwibmFtZXMiOlsic3RvcmUiLCJjaGlsZHJlbiIsInRpdGxlIiwidXNlckFnZW50IiwicGFsZXR0ZSIsInByaW1hcnkxQ29sb3IiLCJwcmltYXJ5MkNvbG9yIiwiYWNjZW50MUNvbG9yIiwicGlja2VySGVhZGVyQ29sb3IiLCJhcHBCYXIiLCJoZWlnaHQiLCJzbmFja2Jhck9wZW4iLCJzbmFja2Jhck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUVBOztBQUlBOzs7O2tCQVVlLHVCQUFPLE9BQVAsRUFBZ0IseUJBQVM7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSx3QkFBb0JDLEtBQXBCO0FBQUEsTUFBb0JBLEtBQXBCLDhCQUE0QixhQUE1QjtBQUFBLE1BQTJDQyxTQUEzQyxRQUEyQ0EsU0FBM0M7QUFBQSxTQUN0QztBQUFBO0FBQUE7QUFDRSxnQkFBVSwyQkFBWTtBQUNwQkEsNEJBRG9CO0FBRXBCQyxpQkFBUztBQUNQQyx3Q0FETztBQUVQQyx3Q0FGTztBQUdQQyw4Q0FITztBQUlQQztBQUpPLFNBRlc7QUFRcEJDLGdCQUFRO0FBQ05DLGtCQUFRO0FBREY7QUFSWSxPQUFaO0FBRFo7QUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRUjtBQUFSLFNBREY7QUFFRSxnREFBTSxTQUFRLE9BQWQ7QUFBQSxVQUZGO0FBR0UsZ0RBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsOEZBQTlCO0FBQUEsVUFIRjtBQUlFLGdEQUFNLE1BQUssK0VBQVg7QUFBQSxVQUpGO0FBS0UsZ0RBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssVUFBNUIsRUFBdUMsTUFBSywyRUFBNUM7QUFBQSxVQUxGO0FBTUUsZ0RBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssVUFBNUIsRUFBdUMsTUFBSyxpRkFBNUM7QUFBQTtBQU5GLE9BREY7QUFTRTtBQUNFLGNBQU1GLE1BQU1XLFlBRGQ7QUFFRSxpQkFBU1gsTUFBTVksZUFGakI7QUFHRSwwQkFBa0I7QUFIcEIsUUFURjtBQWNHWCxjQWRIO0FBZUUsc0VBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkYsR0FEc0M7QUFBQSxDQUFULENBQWhCLEM7O0FBWmYiLCJmaWxlIjoiYXBwQmFzaWMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXgvTGFicy9OZXh0anMvcGF0aWVudCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCB0eXBlIHsgRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCB7IHRlYWw1MDAsIHRlYWw3MDAsIGRlZXBPcmFuZ2VBMjAwIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9ycyc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnbWF0ZXJpYWwtdWkvU25hY2tiYXInO1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuXG5pbXBvcnQgRGV2VG9vbHMgZnJvbSAnbW9ieC1yZWFjdC1kZXZ0b29scyc7XG5cbmltcG9ydCB7IFZpZXdTdG9yZSB9IGZyb20gJy4uL3N0b3JlL3ZpZXdTdG9yZSc7XG5cbi8vIGltcG9ydGVkIG1vZHVsZXNcblxuaW1wb3J0ICcuLi9jb25maWcvdGFwX2V2ZW50cyc7XG5cblxudHlwZSBQcm9wcyA9IHtcbiAgc3RvcmU6IFZpZXdTdG9yZSxcbiAgY2hpbGRyZW4/OiBFbGVtZW50PGFueT4sXG4gIHRpdGxlOiBzdHJpbmcsXG4gIHVzZXJBZ2VudDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdCgnc3RvcmUnKShvYnNlcnZlcigoeyBzdG9yZSwgY2hpbGRyZW4sIHRpdGxlID0gJ05lZW0gSGVhbHRoJywgdXNlckFnZW50IH06IFByb3BzKSA9PiAoXG4gIDxNdWlUaGVtZVByb3ZpZGVyXG4gICAgbXVpVGhlbWU9e2dldE11aVRoZW1lKHtcbiAgICAgIHVzZXJBZ2VudCxcbiAgICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeTFDb2xvcjogdGVhbDUwMCxcbiAgICAgICAgcHJpbWFyeTJDb2xvcjogdGVhbDcwMCxcbiAgICAgICAgYWNjZW50MUNvbG9yOiBkZWVwT3JhbmdlQTIwMCxcbiAgICAgICAgcGlja2VySGVhZGVyQ29sb3I6IHRlYWw1MDAsXG4gICAgICB9LFxuICAgICAgYXBwQmFyOiB7XG4gICAgICAgIGhlaWdodDogNTYsXG4gICAgICB9LFxuICAgIH1cbiAgICApfVxuICA+XG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoIG1heGltdW0tc2NhbGU9MS4wLCBtaW5pbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ub1wiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwJyByZWw9J3N0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFNuYWNrYmFyXG4gICAgICAgIG9wZW49e3N0b3JlLnNuYWNrYmFyT3Blbn1cbiAgICAgICAgbWVzc2FnZT17c3RvcmUuc25hY2tiYXJNZXNzYWdlfVxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs1MDAwfVxuICAgICAgLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxEZXZUb29scyAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuc2xpY2stbmV4dDo6YmVmb3JlLCAuc2xpY2stcHJldjo6YmVmb3JlIHtcbiAgICAgICAgICBjb2xvcjogdGVhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAnd2hpdGUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA0RDQwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZXNrdG9wLW9ubHkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vYmlsZS1vbmx5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAgICAgICAgIC5kZXNrdG9wLW9ubHkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGUtb25seSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuKSkpO1xuIl19