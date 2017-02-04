'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _style = require('/Users/alex/Labs/Nextjs/patient/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _search = require('react-icons/lib/fa/search');

var _search2 = _interopRequireDefault(_search);

var _fileTextO = require('react-icons/lib/fa/file-text-o');

var _fileTextO2 = _interopRequireDefault(_fileTextO);

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
          _react2.default.createElement(_TextField2.default, {
            floatingLabelText: 'What Drug?',
            style: style.space
          }),
          _react2.default.createElement(_TextField2.default, {
            floatingLabelText: 'Where?',
            style: style.space
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
      css: '.drug-search[data-jsx="2300201533"] {background-color: #f5f5f5;padding: 2%;}.centered-container[data-jsx="2300201533"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;}.spacing[data-jsx="2300201533"] {padding: 1% 0;}.separator[data-jsx="2300201533"] {width: 100%;border-bottom: 1px solid #60636a;text-align: center;height: 18px;margin-bottom: 15px;}.separator[data-jsx="2300201533"] span[data-jsx="2300201533"] {line-height: 15px;padding: 0 10px;background: #f5f5f5;display: inline-block;margin-top: 10px;color: #60636a;}.separator-spacing[data-jsx="2300201533"] {padding: 2% 30%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvZHJ1Z1NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRWdCLEFBQ0kscUNBQ2MsMEJBQ2QsWUFDYixDQUNvQiw0Q0FDTCxtQ0FDUyxrRkFDSCxvQkFDckIsQ0FDUyxpQ0FDTSxjQUNmLENBQ1csbUNBQ0UsWUFDcUIsaUNBQ2QsbUJBQ04sYUFDTyxvQkFDckIsQ0FDZ0IsK0RBQ0csa0JBQ0YsZ0JBQ0ksb0JBQ0Usc0JBQ0wsaUJBQ0YsZUFDaEIsQ0FDbUIsMkNBQ0YsZ0JBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZVBhZ2UvZHJ1Z1NlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBGYVNlYXJjaCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvc2VhcmNoJztcbmltcG9ydCBGYUZpbGVUZXh0TyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvZmlsZS10ZXh0LW8nO1xuXG5cbmNvbnN0IHN0eWxlID0ge1xuICBzcGFjZToge1xuICAgIG1hcmdpbjogMTIsXG4gIH0sXG59O1xuXG5jb25zdCBEcnVnU2VhcmNoID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImRydWctc2VhcmNoXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVza3RvcC1vbmx5IHNwYWNpbmdcIj5cbiAgICAgICAgPFBhcGVyIHpEZXB0aD17MX0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJXaGF0IERydWc/XCJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5zcGFjZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiV2hlcmU/XCJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5zcGFjZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCIgc2Vjb25kYXJ5XG4gICAgICAgICAgICBzdHlsZT17c3R5bGUuc3BhY2V9XG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICAgIGljb249ezxGYVNlYXJjaCAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1vbmx5IFwiPlxuICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgbGFiZWw9XCJTZWFyY2ggZm9yIERydWdcIiBzZWNvbmRhcnlcbiAgICAgICAgICBzdHlsZT17c3R5bGUuc3BhY2V9XG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgaWNvbj17PEZhU2VhcmNoIC8+fVxuICAgICAgICAgIGxhYmVsU3R5bGU9e3N0eWxlLnNwYWNlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvci1zcGFjaW5nXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjxzcGFuPm9yPC9zcGFuPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZC1jb250YWluZXIgZGVza3RvcC1vbmx5XCI+XG4gICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgIGxhYmVsPVwiUmVxdWVzdCBkcnVncyB3aXRoIHByZXNjcmlwdGlvblwiIHByaW1hcnlcbiAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGUuc3BhY2UgfX1cbiAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgIGljb249ezxGYUZpbGVUZXh0TyAvPn1cbiAgICAgICAgbGFiZWxTdHlsZT17c3R5bGUuc3BhY2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZC1jb250YWluZXIgbW9iaWxlLW9ubHlcIj5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgbGFiZWw9XCJSZXF1ZXN0IHdpdGggcHJlc2NyaXB0aW9uXCIgcHJpbWFyeVxuICAgICAgICBzdHlsZT17eyAuLi5zdHlsZS5zcGFjZSwgbWluV2lkdGg6IDI1MCB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kcnVnLXNlYXJjaCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgfVxuICAgICAgLmNlbnRlcmVkLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuc3BhY2luZyB7XG4gICAgICAgIHBhZGRpbmc6IDElIDA7XG4gICAgICB9XG4gICAgICAuc2VwYXJhdG9yIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjA2MzZhO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cbiAgICAgIC5zZXBhcmF0b3Igc3BhbiB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7IC8qIENvbG9yIG9mIHRoZSBlbGVtZW50IGJlbG93ICovXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgY29sb3I6ICM2MDYzNmE7XG4gICAgICB9XG4gICAgICAuc2VwYXJhdG9yLXNwYWNpbmcge1xuICAgICAgICBwYWRkaW5nOiAyJSAzMCU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERydWdTZWFyY2g7XG4iXX0= */\n/*@ sourceURL=components/homePage/drugSearch.js */'
    })
  );
};

exports.default = DrugSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvZHJ1Z1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJzdHlsZSIsInNwYWNlIiwibWFyZ2luIiwiRHJ1Z1NlYXJjaCIsIm1pbldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNQSxRQUFRO0FBQ1pDLFNBQU87QUFDTEMsWUFBUTtBQURIO0FBREssQ0FBZDs7QUFNQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxTQUNqQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGFBQWY7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsb0JBQWY7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsc0JBQWY7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFPLFFBQVEsQ0FBZjtBQUNFO0FBQ0UsK0JBQWtCLFlBRHBCO0FBRUUsbUJBQU9ILE1BQU1DO0FBRmYsWUFERjtBQUtFO0FBQ0UsK0JBQWtCLFFBRHBCO0FBRUUsbUJBQU9ELE1BQU1DO0FBRmYsWUFMRjtBQVNFO0FBQ0UsbUJBQU0sUUFEUixFQUNpQixlQURqQjtBQUVFLG1CQUFPRCxNQUFNQyxLQUZmO0FBR0UsMkJBQWMsUUFIaEI7QUFJRSxrQkFBTTtBQUpSO0FBVEY7QUFERixPQURGO0FBbUJFO0FBQUE7QUFBQSxVQUFLLFdBQVUsY0FBZjtBQUFBO0FBQ0U7QUFDRSxpQkFBTSxpQkFEUixFQUMwQixlQUQxQjtBQUVFLGlCQUFPRCxNQUFNQyxLQUZmO0FBR0UseUJBQWMsUUFIaEI7QUFJRSxnQkFBTSxxREFKUjtBQUtFLHNCQUFZRCxNQUFNQztBQUxwQjtBQURGO0FBbkJGLEtBREY7QUErQkU7QUFBQTtBQUFBLFFBQUssV0FBVSxtQkFBZjtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQUE7QUFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0I7QUFERixLQS9CRjtBQW1DRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGlDQUFmO0FBQUE7QUFDRTtBQUNFLGVBQU0saUNBRFIsRUFDMEMsYUFEMUM7QUFFRSwwQ0FBWUQsTUFBTUMsS0FBbEIsQ0FGRjtBQUdFLHVCQUFjLFFBSGhCO0FBSUUsY0FBTSx3REFKUjtBQUtFLG9CQUFZRCxNQUFNQztBQUxwQjtBQURGLEtBbkNGO0FBNkNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsZ0NBQWY7QUFBQTtBQUNFO0FBQ0UsZUFBTSwyQkFEUixFQUNvQyxhQURwQztBQUVFLDBDQUFZRCxNQUFNQyxLQUFsQixJQUF5QkcsVUFBVSxHQUFuQztBQUZGO0FBREYsS0E3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRGlCO0FBQUEsQ0FBbkI7O2tCQXdGZUQsVSIsImZpbGUiOiJkcnVnU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL3BhdGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFwZXIgZnJvbSAnbWF0ZXJpYWwtdWkvUGFwZXInO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IEZhU2VhcmNoIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9zZWFyY2gnO1xuaW1wb3J0IEZhRmlsZVRleHRPIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9maWxlLXRleHQtbyc7XG5cblxuY29uc3Qgc3R5bGUgPSB7XG4gIHNwYWNlOiB7XG4gICAgbWFyZ2luOiAxMixcbiAgfSxcbn07XG5cbmNvbnN0IERydWdTZWFyY2ggPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZHJ1Zy1zZWFyY2hcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNrdG9wLW9ubHkgc3BhY2luZ1wiPlxuICAgICAgICA8UGFwZXIgekRlcHRoPXsxfT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIldoYXQgRHJ1Zz9cIlxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlLnNwYWNlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJXaGVyZT9cIlxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlLnNwYWNlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2hcIiBzZWNvbmRhcnlcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5zcGFjZX1cbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgICAgaWNvbj17PEZhU2VhcmNoIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW9ubHkgXCI+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBmb3IgRHJ1Z1wiIHNlY29uZGFyeVxuICAgICAgICAgIHN0eWxlPXtzdHlsZS5zcGFjZX1cbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBpY29uPXs8RmFTZWFyY2ggLz59XG4gICAgICAgICAgbGFiZWxTdHlsZT17c3R5bGUuc3BhY2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yLXNwYWNpbmdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PHNwYW4+b3I8L3NwYW4+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkLWNvbnRhaW5lciBkZXNrdG9wLW9ubHlcIj5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgbGFiZWw9XCJSZXF1ZXN0IGRydWdzIHdpdGggcHJlc2NyaXB0aW9uXCIgcHJpbWFyeVxuICAgICAgICBzdHlsZT17eyAuLi5zdHlsZS5zcGFjZSB9fVxuICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgaWNvbj17PEZhRmlsZVRleHRPIC8+fVxuICAgICAgICBsYWJlbFN0eWxlPXtzdHlsZS5zcGFjZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkLWNvbnRhaW5lciBtb2JpbGUtb25seVwiPlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBsYWJlbD1cIlJlcXVlc3Qgd2l0aCBwcmVzY3JpcHRpb25cIiBwcmltYXJ5XG4gICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLnNwYWNlLCBtaW5XaWR0aDogMjUwIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRydWctc2VhcmNoIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICB9XG4gICAgICAuY2VudGVyZWQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5zcGFjaW5nIHtcbiAgICAgICAgcGFkZGluZzogMSUgMDtcbiAgICAgIH1cbiAgICAgIC5zZXBhcmF0b3Ige1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MDYzNmE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgfVxuICAgICAgLnNlcGFyYXRvciBzcGFuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTsgLyogQ29sb3Igb2YgdGhlIGVsZW1lbnQgYmVsb3cgKi9cbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBjb2xvcjogIzYwNjM2YTtcbiAgICAgIH1cbiAgICAgIC5zZXBhcmF0b3Itc3BhY2luZyB7XG4gICAgICAgIHBhZGRpbmc6IDIlIDMwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRHJ1Z1NlYXJjaDtcbiJdfQ==