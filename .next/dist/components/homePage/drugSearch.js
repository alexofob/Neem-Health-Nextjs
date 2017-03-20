'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _style = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _reduxFormMaterialUi = require('redux-form-material-ui');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _search = require('react-icons/lib/fa/search');

var _search2 = _interopRequireDefault(_search);

var _fileTextO = require('react-icons/lib/fa/file-text-o');

var _fileTextO2 = _interopRequireDefault(_fileTextO);

var _reduxForm = require('redux-form');

var _validators = require('../../utils/validators');

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
          _react2.default.createElement(_reduxForm.Field, {
            name: 'drug',
            id: 'drug',
            component: _reduxFormMaterialUi.TextField,
            type: 'text',
            floatingLabelText: 'What Drug?',
            style: style.space,
            validate: [_validators.required]
          }),
          _react2.default.createElement(_reduxForm.Field, {
            name: 'location',
            id: 'location',
            component: _reduxFormMaterialUi.TextField,
            type: 'text',
            floatingLabelText: 'Where?',
            style: style.space,
            validate: [_validators.required]
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
      css: '.drug-search[data-jsx="2300201533"] {background-color: #f5f5f5;padding: 2%;}.centered-container[data-jsx="2300201533"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;}.spacing[data-jsx="2300201533"] {padding: 1% 0;}.separator[data-jsx="2300201533"] {width: 100%;border-bottom: 1px solid #60636a;text-align: center;height: 18px;margin-bottom: 15px;}.separator[data-jsx="2300201533"] span[data-jsx="2300201533"] {line-height: 15px;padding: 0 10px;background: #f5f5f5;display: inline-block;margin-top: 10px;color: #60636a;}.separator-spacing[data-jsx="2300201533"] {padding: 2% 30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvZHJ1Z1NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RWdCLEFBQ0kscUNBQ2MsMEJBQ2QsWUFDYixDQUNvQiw0Q0FDTCxtQ0FDUyxrRkFDSCxvQkFDckIsQ0FDUyxpQ0FDTSxjQUNmLENBQ1csbUNBQ0UsWUFDcUIsaUNBQ2QsbUJBQ04sYUFDTyxvQkFDckIsQ0FDZ0IsK0RBQ0csa0JBQ0YsZ0JBQ0ksb0JBQ0Usc0JBQ0wsaUJBQ0YsZUFDaEIsQ0FDbUIsMkNBQ0YsZ0JBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZVBhZ2UvZHJ1Z1NlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9uZWVtLWhlYWx0aCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXBlciBmcm9tICdtYXRlcmlhbC11aS9QYXBlcic7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICdyZWR1eC1mb3JtLW1hdGVyaWFsLXVpJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBGYVNlYXJjaCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvc2VhcmNoJztcbmltcG9ydCBGYUZpbGVUZXh0TyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvZmlsZS10ZXh0LW8nO1xuaW1wb3J0IHsgcmVkdXhGb3JtLCBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRvcnMnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgc3BhY2U6IHtcbiAgICBtYXJnaW46IDEyLFxuICB9LFxufTtcblxuY29uc3QgRHJ1Z1NlYXJjaCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkcnVnLXNlYXJjaFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2t0b3Atb25seSBzcGFjaW5nXCI+XG4gICAgICAgIDxQYXBlciB6RGVwdGg9ezF9PlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgbmFtZT1cImRydWdcIlxuICAgICAgICAgICAgaWQ9XCJkcnVnXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZpZWxkfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJXaGF0IERydWc/XCJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5zcGFjZX1cbiAgICAgICAgICAgIHZhbGlkYXRlPXtbcmVxdWlyZWRdfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxuICAgICAgICAgICAgaWQ9XCJsb2NhdGlvblwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGaWVsZH1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiV2hlcmU/XCJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5zcGFjZX1cbiAgICAgICAgICAgIHZhbGlkYXRlPXtbcmVxdWlyZWRdfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2hcIiBzZWNvbmRhcnlcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5zcGFjZX1cbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgICAgaWNvbj17PEZhU2VhcmNoIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW9ubHkgXCI+XG4gICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBmb3IgRHJ1Z1wiIHNlY29uZGFyeVxuICAgICAgICAgIHN0eWxlPXtzdHlsZS5zcGFjZX1cbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgICBpY29uPXs8RmFTZWFyY2ggLz59XG4gICAgICAgICAgbGFiZWxTdHlsZT17c3R5bGUuc3BhY2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yLXNwYWNpbmdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PHNwYW4+b3I8L3NwYW4+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkLWNvbnRhaW5lciBkZXNrdG9wLW9ubHlcIj5cbiAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgbGFiZWw9XCJSZXF1ZXN0IGRydWdzIHdpdGggcHJlc2NyaXB0aW9uXCIgcHJpbWFyeVxuICAgICAgICBzdHlsZT17eyAuLi5zdHlsZS5zcGFjZSB9fVxuICAgICAgICBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCJcbiAgICAgICAgaWNvbj17PEZhRmlsZVRleHRPIC8+fVxuICAgICAgICBsYWJlbFN0eWxlPXtzdHlsZS5zcGFjZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkLWNvbnRhaW5lciBtb2JpbGUtb25seVwiPlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBsYWJlbD1cIlJlcXVlc3Qgd2l0aCBwcmVzY3JpcHRpb25cIiBwcmltYXJ5XG4gICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLnNwYWNlLCBtaW5XaWR0aDogMjUwIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRydWctc2VhcmNoIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICB9XG4gICAgICAuY2VudGVyZWQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5zcGFjaW5nIHtcbiAgICAgICAgcGFkZGluZzogMSUgMDtcbiAgICAgIH1cbiAgICAgIC5zZXBhcmF0b3Ige1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MDYzNmE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgfVxuICAgICAgLnNlcGFyYXRvciBzcGFuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTsgLyogQ29sb3Igb2YgdGhlIGVsZW1lbnQgYmVsb3cgKi9cbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBjb2xvcjogIzYwNjM2YTtcbiAgICAgIH1cbiAgICAgIC5zZXBhcmF0b3Itc3BhY2luZyB7XG4gICAgICAgIHBhZGRpbmc6IDIlIDMwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuLy8gRGVjb3JhdGUgd2l0aCByZWR1eC1mb3JtXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xuICBmb3JtOiAnc2VhcmNoRm9ybScsXG59KShEcnVnU2VhcmNoKTtcbiJdfQ== */\n/*@ sourceURL=components/homePage/drugSearch.js */'
    })
  );
};

// Decorate with redux-form
exports.default = (0, _reduxForm.reduxForm)({
  form: 'searchForm'
})(DrugSearch);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvZHJ1Z1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJzdHlsZSIsInNwYWNlIiwibWFyZ2luIiwiRHJ1Z1NlYXJjaCIsIm1pbldpZHRoIiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUVBLElBQU1BLFFBQVE7QUFDWkMsU0FBTztBQUNMQyxZQUFRO0FBREg7QUFESyxDQUFkOztBQU1BLElBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQ2pCO0FBQUE7QUFBQSxNQUFLLFdBQVUsYUFBZjtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxvQkFBZjtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxzQkFBZjtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU8sUUFBUSxDQUFmO0FBQ0U7QUFDRSxrQkFBSyxNQURQO0FBRUUsZ0JBQUcsTUFGTDtBQUdFLHFEQUhGO0FBSUUsa0JBQUssTUFKUDtBQUtFLCtCQUFrQixZQUxwQjtBQU1FLG1CQUFPSCxNQUFNQyxLQU5mO0FBT0Usc0JBQVU7QUFQWixZQURGO0FBVUU7QUFDRSxrQkFBSyxVQURQO0FBRUUsZ0JBQUcsVUFGTDtBQUdFLHFEQUhGO0FBSUUsa0JBQUssTUFKUDtBQUtFLCtCQUFrQixRQUxwQjtBQU1FLG1CQUFPRCxNQUFNQyxLQU5mO0FBT0Usc0JBQVU7QUFQWixZQVZGO0FBbUJFO0FBQ0UsbUJBQU0sUUFEUixFQUNpQixlQURqQjtBQUVFLG1CQUFPRCxNQUFNQyxLQUZmO0FBR0UsMkJBQWMsUUFIaEI7QUFJRSxrQkFBTTtBQUpSO0FBbkJGO0FBREYsT0FERjtBQTZCRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFBQTtBQUNFO0FBQ0UsaUJBQU0saUJBRFIsRUFDMEIsZUFEMUI7QUFFRSxpQkFBT0QsTUFBTUMsS0FGZjtBQUdFLHlCQUFjLFFBSGhCO0FBSUUsZ0JBQU0scURBSlI7QUFLRSxzQkFBWUQsTUFBTUM7QUFMcEI7QUFERjtBQTdCRixLQURGO0FBeUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsbUJBQWY7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUFBO0FBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNCO0FBREYsS0F6Q0Y7QUE2Q0U7QUFBQTtBQUFBLFFBQUssV0FBVSxpQ0FBZjtBQUFBO0FBQ0U7QUFDRSxlQUFNLGlDQURSLEVBQzBDLGFBRDFDO0FBRUUsMENBQVlELE1BQU1DLEtBQWxCLENBRkY7QUFHRSx1QkFBYyxRQUhoQjtBQUlFLGNBQU0sd0RBSlI7QUFLRSxvQkFBWUQsTUFBTUM7QUFMcEI7QUFERixLQTdDRjtBQXVERTtBQUFBO0FBQUEsUUFBSyxXQUFVLGdDQUFmO0FBQUE7QUFDRTtBQUNFLGVBQU0sMkJBRFIsRUFDb0MsYUFEcEM7QUFFRSwwQ0FBWUQsTUFBTUMsS0FBbEIsSUFBeUJHLFVBQVUsR0FBbkM7QUFGRjtBQURGLEtBdkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURpQjtBQUFBLENBQW5COztBQWtHQTtrQkFDZSwwQkFBVTtBQUN2QkMsUUFBTTtBQURpQixDQUFWLEVBRVpGLFVBRlksQyIsImZpbGUiOiJkcnVnU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL25lZW0taGVhbHRoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0tbWF0ZXJpYWwtdWknO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IEZhU2VhcmNoIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9zZWFyY2gnO1xuaW1wb3J0IEZhRmlsZVRleHRPIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9maWxlLXRleHQtbyc7XG5pbXBvcnQgeyByZWR1eEZvcm0sIEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdmFsaWRhdG9ycyc7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBzcGFjZToge1xuICAgIG1hcmdpbjogMTIsXG4gIH0sXG59O1xuXG5jb25zdCBEcnVnU2VhcmNoID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImRydWctc2VhcmNoXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVza3RvcC1vbmx5IHNwYWNpbmdcIj5cbiAgICAgICAgPFBhcGVyIHpEZXB0aD17MX0+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBuYW1lPVwiZHJ1Z1wiXG4gICAgICAgICAgICBpZD1cImRydWdcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0RmllbGR9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIldoYXQgRHJ1Zz9cIlxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlLnNwYWNlfVxuICAgICAgICAgICAgdmFsaWRhdGU9e1tyZXF1aXJlZF19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXG4gICAgICAgICAgICBpZD1cImxvY2F0aW9uXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZpZWxkfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJXaGVyZT9cIlxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlLnNwYWNlfVxuICAgICAgICAgICAgdmFsaWRhdGU9e1tyZXF1aXJlZF19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgICBsYWJlbD1cIlNlYXJjaFwiIHNlY29uZGFyeVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlLnNwYWNlfVxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgICBpY29uPXs8RmFTZWFyY2ggLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtb25seSBcIj5cbiAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIGZvciBEcnVnXCIgc2Vjb25kYXJ5XG4gICAgICAgICAgc3R5bGU9e3N0eWxlLnNwYWNlfVxuICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgIGljb249ezxGYVNlYXJjaCAvPn1cbiAgICAgICAgICBsYWJlbFN0eWxlPXtzdHlsZS5zcGFjZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3Itc3BhY2luZ1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48c3Bhbj5vcjwvc3Bhbj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWQtY29udGFpbmVyIGRlc2t0b3Atb25seVwiPlxuICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICBsYWJlbD1cIlJlcXVlc3QgZHJ1Z3Mgd2l0aCBwcmVzY3JpcHRpb25cIiBwcmltYXJ5XG4gICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLnNwYWNlIH19XG4gICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICBpY29uPXs8RmFGaWxlVGV4dE8gLz59XG4gICAgICAgIGxhYmVsU3R5bGU9e3N0eWxlLnNwYWNlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWQtY29udGFpbmVyIG1vYmlsZS1vbmx5XCI+XG4gICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgIGxhYmVsPVwiUmVxdWVzdCB3aXRoIHByZXNjcmlwdGlvblwiIHByaW1hcnlcbiAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGUuc3BhY2UsIG1pbldpZHRoOiAyNTAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZHJ1Zy1zZWFyY2gge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgIH1cbiAgICAgIC5jZW50ZXJlZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnNwYWNpbmcge1xuICAgICAgICBwYWRkaW5nOiAxJSAwO1xuICAgICAgfVxuICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYwNjM2YTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICB9XG4gICAgICAuc2VwYXJhdG9yIHNwYW4ge1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyAvKiBDb2xvciBvZiB0aGUgZWxlbWVudCBiZWxvdyAqL1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjNjA2MzZhO1xuICAgICAgfVxuICAgICAgLnNlcGFyYXRvci1zcGFjaW5nIHtcbiAgICAgICAgcGFkZGluZzogMiUgMzAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG4vLyBEZWNvcmF0ZSB3aXRoIHJlZHV4LWZvcm1cbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdzZWFyY2hGb3JtJyxcbn0pKERydWdTZWFyY2gpO1xuIl19