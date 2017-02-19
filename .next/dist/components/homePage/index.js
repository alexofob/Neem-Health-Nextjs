'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('/Users/alex/Labs/Nextjs/patient/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _mobxReact = require('mobx-react');

var _homeNavbar = require('./homeNavbar');

var _homeNavbar2 = _interopRequireDefault(_homeNavbar);

var _introHeader = require('./introHeader');

var _introHeader2 = _interopRequireDefault(_introHeader);

var _drugSearch = require('./drugSearch');

var _drugSearch2 = _interopRequireDefault(_drugSearch);

var _featuredPharmacies = require('./featuredPharmacies');

var _featuredPharmacies2 = _interopRequireDefault(_featuredPharmacies);

var _howItWorks = require('./howItWorks');

var _howItWorks2 = _interopRequireDefault(_howItWorks);

var _callToAction = require('./callToAction');

var _callToAction2 = _interopRequireDefault(_callToAction);

var _pwdlessLogin = require('../account/pwdlessLogin');

var _pwdlessLogin2 = _interopRequireDefault(_pwdlessLogin);

var _viewStore = require('../../store/viewStore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// imported modules
var styles = {
  dialogContent: {
    width: '90%',
    maxWidth: 420
  }
};

var dialogContent = {
  login: { node: _react2.default.createElement(_pwdlessLogin2.default, null), title: "Let's get started." }
};

var HomePage = function HomePage(_ref) {
  var viewStore = _ref.viewStore;
  return _react2.default.createElement(
    'div',
    {
      'data-jsx': 3901103530
    },
    _react2.default.createElement(
      'main',
      {
        'data-jsx': 3901103530
      },
      _react2.default.createElement(
        'section',
        {
          'data-jsx': 3901103530
        },
        _react2.default.createElement(_homeNavbar2.default, null),
        _react2.default.createElement(_introHeader2.default, null)
      ),
      _react2.default.createElement(_drugSearch2.default, null),
      _react2.default.createElement(_featuredPharmacies2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'separator', 'data-jsx': 3901103530
        },
        _react2.default.createElement('hr', {
          'data-jsx': 3901103530
        })
      ),
      _react2.default.createElement(_howItWorks2.default, null),
      _react2.default.createElement(_callToAction2.default, null)
    ),
    _react2.default.createElement(
      'footer',
      {
        'data-jsx': 3901103530
      },
      '\xA9 Neem Health'
    ),
    _react2.default.createElement(
      _Dialog2.default,
      {
        title: 'Let\'s get started.',
        modal: false,
        open: viewStore.dialogOpen,
        onRequestClose: viewStore.closeDialog,
        contentStyle: styles.dialogContent,
        autoScrollBodyContent: true
      },
      dialogContent[viewStore.dialogContent].node
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 3901103530,
      css: 'section[data-jsx="3901103530"] {background-image: linear-gradient(-90deg, #F7FDFB, #7BB2B7);}.separator[data-jsx="3901103530"] {opacity: 0.38;width: 70%;margin: 0 auto;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERnQixBQUNELGdDQUNxRCw0REFDN0QsQ0FDVyxtQ0FDSSxjQUNILFdBQ0ksZUFDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lUGFnZS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuXG4vLyBpbXBvcnRlZCBtb2R1bGVzXG5pbXBvcnQgSG9tZU5hdmJhciBmcm9tICcuL2hvbWVOYXZiYXInO1xuaW1wb3J0IEludHJvSGVhZGVyIGZyb20gJy4vaW50cm9IZWFkZXInO1xuaW1wb3J0IERydWdTZWFyY2ggZnJvbSAnLi9kcnVnU2VhcmNoJztcbmltcG9ydCBGZWF0dXJlZFBoYXJtYWNpZXMgZnJvbSAnLi9mZWF0dXJlZFBoYXJtYWNpZXMnO1xuaW1wb3J0IEhvd0l0V29ya3MgZnJvbSAnLi9ob3dJdFdvcmtzJztcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnLi9jYWxsVG9BY3Rpb24nO1xuaW1wb3J0IFB3ZExlc3NMb2dpbiBmcm9tICcuLi9hY2NvdW50L3B3ZGxlc3NMb2dpbic7XG5cbmltcG9ydCB7IFZpZXdTdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3ZpZXdTdG9yZSc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZGlhbG9nQ29udGVudDoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBtYXhXaWR0aDogNDIwLFxuICB9LFxufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgdmlld1N0b3JlOiBWaWV3U3RvcmUsXG59XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSB7XG4gIGxvZ2luOiB7IG5vZGU6IDxQd2RMZXNzTG9naW4gLz4sIHRpdGxlOiBcIkxldCdzIGdldCBzdGFydGVkLlwiIH0sXG59O1xuXG5jb25zdCBIb21lUGFnZSA9ICh7IHZpZXdTdG9yZSB9OiBQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxtYWluPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxIb21lTmF2YmFyIC8+XG4gICAgICAgIDxJbnRyb0hlYWRlciAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPERydWdTZWFyY2ggLz5cbiAgICAgIDxGZWF0dXJlZFBoYXJtYWNpZXMgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PGhyIC8+PC9kaXY+XG4gICAgICA8SG93SXRXb3JrcyAvPlxuICAgICAgPENhbGxUb0FjdGlvbiAvPlxuICAgIDwvbWFpbj5cblxuICAgIDxmb290ZXI+XG4gICAgICDCqSBOZWVtIEhlYWx0aFxuICAgIDwvZm9vdGVyPlxuXG4gICAgPERpYWxvZ1xuICAgICAgdGl0bGU9XCJMZXQncyBnZXQgc3RhcnRlZC5cIlxuICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgb3Blbj17dmlld1N0b3JlLmRpYWxvZ09wZW59XG4gICAgICBvblJlcXVlc3RDbG9zZT17dmlld1N0b3JlLmNsb3NlRGlhbG9nfVxuICAgICAgY29udGVudFN0eWxlPXtzdHlsZXMuZGlhbG9nQ29udGVudH1cbiAgICAgIGF1dG9TY3JvbGxCb2R5Q29udGVudFxuICAgID5cbiAgICAgIHtkaWFsb2dDb250ZW50W3ZpZXdTdG9yZS5kaWFsb2dDb250ZW50XS5ub2RlfVxuICAgIDwvRGlhbG9nPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNGN0ZERkIsICM3QkIyQjcpO1xuICAgICAgfVxuICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgIG9wYWNpdHk6IDAuMzg7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICA8L2Rpdj5cbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0KCd2aWV3U3RvcmUnKShvYnNlcnZlcihIb21lUGFnZSkpO1xuIl19 */\n/*@ sourceURL=components/homePage/index.js */'
    })
  );
};

exports.default = (0, _mobxReact.inject)('viewStore')((0, _mobxReact.observer)(HomePage));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZGlhbG9nQ29udGVudCIsIndpZHRoIiwibWF4V2lkdGgiLCJsb2dpbiIsIm5vZGUiLCJ0aXRsZSIsIkhvbWVQYWdlIiwidmlld1N0b3JlIiwiZGlhbG9nT3BlbiIsImNsb3NlRGlhbG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQVRBO0FBV0EsSUFBTUEsU0FBUztBQUNiQyxpQkFBZTtBQUNiQyxXQUFPLEtBRE07QUFFYkMsY0FBVTtBQUZHO0FBREYsQ0FBZjs7QUFXQSxJQUFNRixnQkFBZ0I7QUFDcEJHLFNBQU8sRUFBRUMsTUFBTSwyREFBUixFQUEwQkMsT0FBTyxvQkFBakM7QUFEYSxDQUF0Qjs7QUFJQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlFQURGO0FBRUU7QUFGRixPQURGO0FBS0UsK0RBTEY7QUFNRSx1RUFORjtBQU9FO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUFBO0FBQTJCO0FBQUE7QUFBQTtBQUEzQixPQVBGO0FBUUUsK0RBUkY7QUFTRTtBQVRGLEtBREY7QUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWJGO0FBaUJFO0FBQUE7QUFBQTtBQUNFLGVBQU0scUJBRFI7QUFFRSxlQUFPLEtBRlQ7QUFHRSxjQUFNQSxVQUFVQyxVQUhsQjtBQUlFLHdCQUFnQkQsVUFBVUUsV0FKNUI7QUFLRSxzQkFBY1YsT0FBT0MsYUFMdkI7QUFNRTtBQU5GO0FBUUdBLG9CQUFjTyxVQUFVUCxhQUF4QixFQUF1Q0k7QUFSMUMsS0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRGU7QUFBQSxDQUFqQjs7a0JBNENlLHVCQUFPLFdBQVAsRUFBb0IseUJBQVNFLFFBQVQsQ0FBcEIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuXG4vLyBpbXBvcnRlZCBtb2R1bGVzXG5pbXBvcnQgSG9tZU5hdmJhciBmcm9tICcuL2hvbWVOYXZiYXInO1xuaW1wb3J0IEludHJvSGVhZGVyIGZyb20gJy4vaW50cm9IZWFkZXInO1xuaW1wb3J0IERydWdTZWFyY2ggZnJvbSAnLi9kcnVnU2VhcmNoJztcbmltcG9ydCBGZWF0dXJlZFBoYXJtYWNpZXMgZnJvbSAnLi9mZWF0dXJlZFBoYXJtYWNpZXMnO1xuaW1wb3J0IEhvd0l0V29ya3MgZnJvbSAnLi9ob3dJdFdvcmtzJztcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnLi9jYWxsVG9BY3Rpb24nO1xuaW1wb3J0IFB3ZExlc3NMb2dpbiBmcm9tICcuLi9hY2NvdW50L3B3ZGxlc3NMb2dpbic7XG5cbmltcG9ydCB7IFZpZXdTdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3ZpZXdTdG9yZSc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZGlhbG9nQ29udGVudDoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBtYXhXaWR0aDogNDIwLFxuICB9LFxufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgdmlld1N0b3JlOiBWaWV3U3RvcmUsXG59XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSB7XG4gIGxvZ2luOiB7IG5vZGU6IDxQd2RMZXNzTG9naW4gLz4sIHRpdGxlOiBcIkxldCdzIGdldCBzdGFydGVkLlwiIH0sXG59O1xuXG5jb25zdCBIb21lUGFnZSA9ICh7IHZpZXdTdG9yZSB9OiBQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxtYWluPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxIb21lTmF2YmFyIC8+XG4gICAgICAgIDxJbnRyb0hlYWRlciAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPERydWdTZWFyY2ggLz5cbiAgICAgIDxGZWF0dXJlZFBoYXJtYWNpZXMgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PGhyIC8+PC9kaXY+XG4gICAgICA8SG93SXRXb3JrcyAvPlxuICAgICAgPENhbGxUb0FjdGlvbiAvPlxuICAgIDwvbWFpbj5cblxuICAgIDxmb290ZXI+XG4gICAgICDCqSBOZWVtIEhlYWx0aFxuICAgIDwvZm9vdGVyPlxuXG4gICAgPERpYWxvZ1xuICAgICAgdGl0bGU9XCJMZXQncyBnZXQgc3RhcnRlZC5cIlxuICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgb3Blbj17dmlld1N0b3JlLmRpYWxvZ09wZW59XG4gICAgICBvblJlcXVlc3RDbG9zZT17dmlld1N0b3JlLmNsb3NlRGlhbG9nfVxuICAgICAgY29udGVudFN0eWxlPXtzdHlsZXMuZGlhbG9nQ29udGVudH1cbiAgICAgIGF1dG9TY3JvbGxCb2R5Q29udGVudFxuICAgID5cbiAgICAgIHtkaWFsb2dDb250ZW50W3ZpZXdTdG9yZS5kaWFsb2dDb250ZW50XS5ub2RlfVxuICAgIDwvRGlhbG9nPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNGN0ZERkIsICM3QkIyQjcpO1xuICAgICAgfVxuICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgIG9wYWNpdHk6IDAuMzg7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICA8L2Rpdj5cbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0KCd2aWV3U3RvcmUnKShvYnNlcnZlcihIb21lUGFnZSkpO1xuIl19