'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('/Users/alex/Labs/Nextjs/patient/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _mobxReact = require('mobx-react');

var _viewStore = require('../../store/viewStore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  space: {
    marginTop: 24
  }
};

var CallToAction = function CallToAction(_ref) {
  var viewStore = _ref.viewStore;
  return _react2.default.createElement(
    'div',
    { className: 'call-to-action', 'data-jsx': 841191441
    },
    _react2.default.createElement(
      'h1',
      {
        'data-jsx': 841191441
      },
      'Ready to put your pharmacy online?'
    ),
    _react2.default.createElement(
      'div',
      { className: 'button', 'data-jsx': 841191441
      },
      _react2.default.createElement(_RaisedButton2.default, {
        label: 'Get Started', secondary: true,
        style: style.space,
        onTouchTap: viewStore.openDialog
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 841191441,
      css: '.call-to-action[data-jsx="841191441"] {background-color: teal;padding: 6% 10%;display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;}h1[data-jsx="841191441"] {color: white;text-align: center;}@media (max-width: 640px) {h1[data-jsx="841191441"] {font-size: 150%;font-weight: normal;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvY2FsbFRvQWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCZ0IsQUFDTyx1Q0FDUSx1QkFDUCxnQkFDRixtQ0FDUyxrRkFDSCxvQkFDckIsQ0FDRywwQkFDVyxhQUNNLG1CQUNwQixDQUMwQiwyQkFFckIsMEJBQ2MsZ0JBQ0ksb0JBQ3JCLENBRUYiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lUGFnZS9jYWxsVG9BY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXgvTGFicy9OZXh0anMvcGF0aWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcblxuaW1wb3J0IHsgVmlld1N0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmUvdmlld1N0b3JlJztcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHNwYWNlOiB7XG4gICAgbWFyZ2luVG9wOiAyNCxcbiAgfSxcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHZpZXdTdG9yZTogVmlld1N0b3JlLFxufVxuXG5cbmNvbnN0IENhbGxUb0FjdGlvbiA9ICh7IHZpZXdTdG9yZSB9OiBQcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhbGwtdG8tYWN0aW9uXCI+XG4gICAgPGgxPlJlYWR5IHRvIHB1dCB5b3VyIHBoYXJtYWN5IG9ubGluZT88L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgIGxhYmVsPVwiR2V0IFN0YXJ0ZWRcIiBzZWNvbmRhcnlcbiAgICAgICAgc3R5bGU9e3N0eWxlLnNwYWNlfVxuICAgICAgICBvblRvdWNoVGFwPXt2aWV3U3RvcmUub3BlbkRpYWxvZ31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgICAgICAgcGFkZGluZzogNiUgMTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDE1MCU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdCgndmlld1N0b3JlJykob2JzZXJ2ZXIoQ2FsbFRvQWN0aW9uKSk7XG4iXX0= */\n/*@ sourceURL=components/homePage/callToAction.js */'
    })
  );
};

exports.default = (0, _mobxReact.inject)('viewStore')((0, _mobxReact.observer)(CallToAction));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvY2FsbFRvQWN0aW9uLmpzIl0sIm5hbWVzIjpbInN0eWxlIiwic3BhY2UiLCJtYXJnaW5Ub3AiLCJDYWxsVG9BY3Rpb24iLCJ2aWV3U3RvcmUiLCJvcGVuRGlhbG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSxRQUFRO0FBQ1pDLFNBQU87QUFDTEMsZUFBVztBQUROO0FBREssQ0FBZDs7QUFXQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxTQUNuQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGdCQUFmO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSxRQUFmO0FBQUE7QUFDRTtBQUNFLGVBQU0sYUFEUixFQUNzQixlQUR0QjtBQUVFLGVBQU9KLE1BQU1DLEtBRmY7QUFHRSxvQkFBWUcsVUFBVUM7QUFIeEI7QUFERixLQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURtQjtBQUFBLENBQXJCOztrQkFrQ2UsdUJBQU8sV0FBUCxFQUFvQix5QkFBU0YsWUFBVCxDQUFwQixDIiwiZmlsZSI6ImNhbGxUb0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuXG5pbXBvcnQgeyBWaWV3U3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZS92aWV3U3RvcmUnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgc3BhY2U6IHtcbiAgICBtYXJnaW5Ub3A6IDI0LFxuICB9LFxufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgdmlld1N0b3JlOiBWaWV3U3RvcmUsXG59XG5cblxuY29uc3QgQ2FsbFRvQWN0aW9uID0gKHsgdmlld1N0b3JlIH06IFByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FsbC10by1hY3Rpb25cIj5cbiAgICA8aDE+UmVhZHkgdG8gcHV0IHlvdXIgcGhhcm1hY3kgb25saW5lPzwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgbGFiZWw9XCJHZXQgU3RhcnRlZFwiIHNlY29uZGFyeVxuICAgICAgICBzdHlsZT17c3R5bGUuc3BhY2V9XG4gICAgICAgIG9uVG91Y2hUYXA9e3ZpZXdTdG9yZS5vcGVuRGlhbG9nfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2FsbC10by1hY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICAgICAgICBwYWRkaW5nOiA2JSAxMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0KCd2aWV3U3RvcmUnKShvYnNlcnZlcihDYWxsVG9BY3Rpb24pKTtcbiJdfQ==