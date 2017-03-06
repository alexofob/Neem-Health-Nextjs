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

var _react3 = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _reactRedux = require('react-redux');

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

var _validateLogin = require('../account/validateLogin');

var _validateLogin2 = _interopRequireDefault(_validateLogin);

var _actions = require('../actions');

var _actions2 = require('../account/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// imported modules
var styles = {
  dialogContent: {
    width: '90%',
    maxWidth: 420
  }
};

var HomePage = function HomePage(props) {
  var dialogContent = {
    login: { node: _react2.default.createElement(_pwdlessLogin2.default, { onSubmit: props.sendValidationMail }), title: 'Log In' },
    validateLogin: { node: _react2.default.createElement(_validateLogin2.default, null), title: 'Enter your code to log in' }
  };
  return _react2.default.createElement(
    'div',
    {
      'data-jsx': 1281695402
    },
    _react2.default.createElement(
      'main',
      {
        'data-jsx': 1281695402
      },
      _react2.default.createElement(
        'section',
        {
          'data-jsx': 1281695402
        },
        _react2.default.createElement(_homeNavbar2.default, null),
        _react2.default.createElement(_introHeader2.default, null)
      ),
      _react2.default.createElement(_drugSearch2.default, null),
      _react2.default.createElement(_featuredPharmacies2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'separator', 'data-jsx': 1281695402
        },
        _react2.default.createElement('hr', {
          'data-jsx': 1281695402
        })
      ),
      _react2.default.createElement(_howItWorks2.default, null),
      _react2.default.createElement(_callToAction2.default, null)
    ),
    _react2.default.createElement(
      'footer',
      {
        'data-jsx': 1281695402
      },
      '\xA9 Neem Health'
    ),
    _react2.default.createElement(
      _Dialog2.default,
      {
        title: dialogContent[props.dialogContent].title,
        modal: false,
        open: props.dialogOpen,
        onRequestClose: props.closeDialog,
        contentStyle: styles.dialogContent,
        autoScrollBodyContent: true
      },
      dialogContent[props.dialogContent].node
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 1281695402,
      css: 'section[data-jsx="1281695402"] {background-image: linear-gradient(-90deg, #F7FDFB, #7BB2B7);}.separator[data-jsx="1281695402"] {opacity: 0.38;width: 70%;margin: 0 auto;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRrQixBQUNELGdDQUNxRCw0REFDN0QsQ0FDVyxtQ0FDSSxjQUNILFdBQ0ksZUFDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lUGFnZS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gaW1wb3J0ZWQgbW9kdWxlc1xuaW1wb3J0IEhvbWVOYXZiYXIgZnJvbSAnLi9ob21lTmF2YmFyJztcbmltcG9ydCBJbnRyb0hlYWRlciBmcm9tICcuL2ludHJvSGVhZGVyJztcbmltcG9ydCBEcnVnU2VhcmNoIGZyb20gJy4vZHJ1Z1NlYXJjaCc7XG5pbXBvcnQgRmVhdHVyZWRQaGFybWFjaWVzIGZyb20gJy4vZmVhdHVyZWRQaGFybWFjaWVzJztcbmltcG9ydCBIb3dJdFdvcmtzIGZyb20gJy4vaG93SXRXb3Jrcyc7XG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJy4vY2FsbFRvQWN0aW9uJztcbmltcG9ydCBQd2RMZXNzTG9naW4gZnJvbSAnLi4vYWNjb3VudC9wd2RsZXNzTG9naW4nO1xuaW1wb3J0IFZhbGlkYXRlTG9naW4gZnJvbSAnLi4vYWNjb3VudC92YWxpZGF0ZUxvZ2luJztcblxuaW1wb3J0IHsgY2xvc2VEaWFsb2cgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IHNlbmRWYWxpZGF0aW9uTWFpbCB9IGZyb20gJy4uL2FjY291bnQvYWN0aW9ucyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZGlhbG9nQ29udGVudDoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBtYXhXaWR0aDogNDIwLFxuICB9LFxufTtcblxuXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkaWFsb2dDb250ZW50ID0ge1xuICAgIGxvZ2luOiB7IG5vZGU6IDxQd2RMZXNzTG9naW4gb25TdWJtaXQ9e3Byb3BzLnNlbmRWYWxpZGF0aW9uTWFpbH0gLz4sIHRpdGxlOiAnTG9nIEluJyB9LFxuICAgIHZhbGlkYXRlTG9naW46IHsgbm9kZTogPFZhbGlkYXRlTG9naW4gLz4sIHRpdGxlOiAnRW50ZXIgeW91ciBjb2RlIHRvIGxvZyBpbicgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxIb21lTmF2YmFyIC8+XG4gICAgICAgICAgPEludHJvSGVhZGVyIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPERydWdTZWFyY2ggLz5cbiAgICAgICAgPEZlYXR1cmVkUGhhcm1hY2llcyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjxociAvPjwvZGl2PlxuICAgICAgICA8SG93SXRXb3JrcyAvPlxuICAgICAgICA8Q2FsbFRvQWN0aW9uIC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIMKpIE5lZW0gSGVhbHRoXG4gICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPERpYWxvZ1xuICAgICAgICB0aXRsZT17ZGlhbG9nQ29udGVudFtwcm9wcy5kaWFsb2dDb250ZW50XS50aXRsZX1cbiAgICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgICBvcGVuPXtwcm9wcy5kaWFsb2dPcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17cHJvcHMuY2xvc2VEaWFsb2d9XG4gICAgICAgIGNvbnRlbnRTdHlsZT17c3R5bGVzLmRpYWxvZ0NvbnRlbnR9XG4gICAgICAgIGF1dG9TY3JvbGxCb2R5Q29udGVudFxuICAgICAgPlxuICAgICAgICB7ZGlhbG9nQ29udGVudFtwcm9wcy5kaWFsb2dDb250ZW50XS5ub2RlfVxuICAgICAgPC9EaWFsb2c+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywgI0Y3RkRGQiwgIzdCQjJCNyk7XG4gICAgICAgIH1cbiAgICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgICAgb3BhY2l0eTogMC4zODtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhvbWVQYWdlLnByb3BUeXBlcyA9IHtcbiAgZGlhbG9nT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZGlhbG9nQ29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZW5kVmFsaWRhdGlvbk1haWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsb3NlRGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoXG4gIHtcbiAgICBjbG9zZURpYWxvZzogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goY2xvc2VEaWFsb2coKSk7XG4gICAgfSxcbiAgICBzZW5kVmFsaWRhdGlvbk1haWw6IChlbWFpbCkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2VuZFZhbGlkYXRpb25NYWlsKGVtYWlsKSk7XG4gICAgfSxcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSwgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lUGFnZSk7XG4iXX0= */\n/*@ sourceURL=components/homePage/index.js */'
    })
  );
};

HomePage.propTypes = {
  dialogOpen: _react3.PropTypes.bool.isRequired,
  dialogContent: _react3.PropTypes.string.isRequired,
  sendValidationMail: _react3.PropTypes.func.isRequired,
  closeDialog: _react3.PropTypes.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeDialog: function closeDialog() {
      dispatch((0, _actions.closeDialog)());
    },
    sendValidationMail: function sendValidationMail(email) {
      dispatch((0, _actions2.sendValidationMail)(email));
    }
  };
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
}, mapDispatchToProps)(HomePage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZGlhbG9nQ29udGVudCIsIndpZHRoIiwibWF4V2lkdGgiLCJIb21lUGFnZSIsInByb3BzIiwibG9naW4iLCJub2RlIiwic2VuZFZhbGlkYXRpb25NYWlsIiwidGl0bGUiLCJ2YWxpZGF0ZUxvZ2luIiwiZGlhbG9nT3BlbiIsImNsb3NlRGlhbG9nIiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJlbWFpbCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBWEE7QUFhQSxJQUFNQSxTQUFTO0FBQ2JDLGlCQUFlO0FBQ2JDLFdBQU8sS0FETTtBQUViQyxjQUFVO0FBRkc7QUFERixDQUFmOztBQVFBLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsTUFBTUosZ0JBQWdCO0FBQ3BCSyxXQUFPLEVBQUVDLE1BQU0sd0RBQWMsVUFBVUYsTUFBTUcsa0JBQTlCLEdBQVIsRUFBOERDLE9BQU8sUUFBckUsRUFEYTtBQUVwQkMsbUJBQWUsRUFBRUgsTUFBTSw0REFBUixFQUEyQkUsT0FBTywyQkFBbEM7QUFGSyxHQUF0QjtBQUlBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUVBREY7QUFFRTtBQUZGLE9BREY7QUFLRSwrREFMRjtBQU1FLHVFQU5GO0FBT0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQUE7QUFBMkI7QUFBQTtBQUFBO0FBQTNCLE9BUEY7QUFRRSwrREFSRjtBQVNFO0FBVEYsS0FERjtBQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYkY7QUFpQkU7QUFBQTtBQUFBO0FBQ0UsZUFBT1IsY0FBY0ksTUFBTUosYUFBcEIsRUFBbUNRLEtBRDVDO0FBRUUsZUFBTyxLQUZUO0FBR0UsY0FBTUosTUFBTU0sVUFIZDtBQUlFLHdCQUFnQk4sTUFBTU8sV0FKeEI7QUFLRSxzQkFBY1osT0FBT0MsYUFMdkI7QUFNRTtBQU5GO0FBUUdBLG9CQUFjSSxNQUFNSixhQUFwQixFQUFtQ007QUFSdEMsS0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBREY7QUEwQ0QsQ0EvQ0Q7O0FBaURBSCxTQUFTUyxTQUFULEdBQXFCO0FBQ25CRixjQUFZLGtCQUFVRyxJQUFWLENBQWVDLFVBRFI7QUFFbkJkLGlCQUFlLGtCQUFVZSxNQUFWLENBQWlCRCxVQUZiO0FBR25CUCxzQkFBb0Isa0JBQVVTLElBQVYsQ0FBZUYsVUFIaEI7QUFJbkJILGVBQWEsa0JBQVVLLElBQVYsQ0FBZUY7QUFKVCxDQUFyQjs7QUFRQSxJQUFNRyxxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLFNBQ3pCO0FBQ0VOLGlCQUFhLHVCQUFNO0FBQ2pCTyxlQUFTLDJCQUFUO0FBQ0QsS0FISDtBQUlFWCx3QkFBb0IsNEJBQUNZLEtBQUQsRUFBVztBQUM3QkQsZUFBUyxrQ0FBbUJDLEtBQW5CLENBQVQ7QUFDRDtBQU5ILEdBRHlCO0FBQUEsQ0FBM0I7O2tCQVdlLHlCQUFRO0FBQUEsU0FBU0MsS0FBVDtBQUFBLENBQVIsRUFBd0JILGtCQUF4QixFQUE0Q2QsUUFBNUMsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gaW1wb3J0ZWQgbW9kdWxlc1xuaW1wb3J0IEhvbWVOYXZiYXIgZnJvbSAnLi9ob21lTmF2YmFyJztcbmltcG9ydCBJbnRyb0hlYWRlciBmcm9tICcuL2ludHJvSGVhZGVyJztcbmltcG9ydCBEcnVnU2VhcmNoIGZyb20gJy4vZHJ1Z1NlYXJjaCc7XG5pbXBvcnQgRmVhdHVyZWRQaGFybWFjaWVzIGZyb20gJy4vZmVhdHVyZWRQaGFybWFjaWVzJztcbmltcG9ydCBIb3dJdFdvcmtzIGZyb20gJy4vaG93SXRXb3Jrcyc7XG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJy4vY2FsbFRvQWN0aW9uJztcbmltcG9ydCBQd2RMZXNzTG9naW4gZnJvbSAnLi4vYWNjb3VudC9wd2RsZXNzTG9naW4nO1xuaW1wb3J0IFZhbGlkYXRlTG9naW4gZnJvbSAnLi4vYWNjb3VudC92YWxpZGF0ZUxvZ2luJztcblxuaW1wb3J0IHsgY2xvc2VEaWFsb2cgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IHNlbmRWYWxpZGF0aW9uTWFpbCB9IGZyb20gJy4uL2FjY291bnQvYWN0aW9ucyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZGlhbG9nQ29udGVudDoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBtYXhXaWR0aDogNDIwLFxuICB9LFxufTtcblxuXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkaWFsb2dDb250ZW50ID0ge1xuICAgIGxvZ2luOiB7IG5vZGU6IDxQd2RMZXNzTG9naW4gb25TdWJtaXQ9e3Byb3BzLnNlbmRWYWxpZGF0aW9uTWFpbH0gLz4sIHRpdGxlOiAnTG9nIEluJyB9LFxuICAgIHZhbGlkYXRlTG9naW46IHsgbm9kZTogPFZhbGlkYXRlTG9naW4gLz4sIHRpdGxlOiAnRW50ZXIgeW91ciBjb2RlIHRvIGxvZyBpbicgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxIb21lTmF2YmFyIC8+XG4gICAgICAgICAgPEludHJvSGVhZGVyIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPERydWdTZWFyY2ggLz5cbiAgICAgICAgPEZlYXR1cmVkUGhhcm1hY2llcyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjxociAvPjwvZGl2PlxuICAgICAgICA8SG93SXRXb3JrcyAvPlxuICAgICAgICA8Q2FsbFRvQWN0aW9uIC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIMKpIE5lZW0gSGVhbHRoXG4gICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPERpYWxvZ1xuICAgICAgICB0aXRsZT17ZGlhbG9nQ29udGVudFtwcm9wcy5kaWFsb2dDb250ZW50XS50aXRsZX1cbiAgICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgICBvcGVuPXtwcm9wcy5kaWFsb2dPcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17cHJvcHMuY2xvc2VEaWFsb2d9XG4gICAgICAgIGNvbnRlbnRTdHlsZT17c3R5bGVzLmRpYWxvZ0NvbnRlbnR9XG4gICAgICAgIGF1dG9TY3JvbGxCb2R5Q29udGVudFxuICAgICAgPlxuICAgICAgICB7ZGlhbG9nQ29udGVudFtwcm9wcy5kaWFsb2dDb250ZW50XS5ub2RlfVxuICAgICAgPC9EaWFsb2c+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywgI0Y3RkRGQiwgIzdCQjJCNyk7XG4gICAgICAgIH1cbiAgICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgICAgb3BhY2l0eTogMC4zODtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhvbWVQYWdlLnByb3BUeXBlcyA9IHtcbiAgZGlhbG9nT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZGlhbG9nQ29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZW5kVmFsaWRhdGlvbk1haWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsb3NlRGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoXG4gIHtcbiAgICBjbG9zZURpYWxvZzogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goY2xvc2VEaWFsb2coKSk7XG4gICAgfSxcbiAgICBzZW5kVmFsaWRhdGlvbk1haWw6IChlbWFpbCkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2VuZFZhbGlkYXRpb25NYWlsKGVtYWlsKSk7XG4gICAgfSxcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSwgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lUGFnZSk7XG4iXX0=