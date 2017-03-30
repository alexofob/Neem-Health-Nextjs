'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _react3 = require('/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js');

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
    validateLogin: { node: _react2.default.createElement(_validateLogin2.default, { onSubmit: props.login }), title: 'Enter your code to log in' }
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
      css: 'section[data-jsx="1281695402"] {background-image: linear-gradient(-90deg, #F7FDFB, #7BB2B7);}.separator[data-jsx="1281695402"] {opacity: 0.38;width: 70%;margin: 0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRrQixBQUNELGdDQUNxRCw0REFDN0QsQ0FDVyxtQ0FDSSxjQUNILFdBQ0ksZUFDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lUGFnZS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9uZWVtLWhlYWx0aCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIGltcG9ydGVkIG1vZHVsZXNcbmltcG9ydCBIb21lTmF2YmFyIGZyb20gJy4vaG9tZU5hdmJhcic7XG5pbXBvcnQgSW50cm9IZWFkZXIgZnJvbSAnLi9pbnRyb0hlYWRlcic7XG5pbXBvcnQgRHJ1Z1NlYXJjaCBmcm9tICcuL2RydWdTZWFyY2gnO1xuaW1wb3J0IEZlYXR1cmVkUGhhcm1hY2llcyBmcm9tICcuL2ZlYXR1cmVkUGhhcm1hY2llcyc7XG5pbXBvcnQgSG93SXRXb3JrcyBmcm9tICcuL2hvd0l0V29ya3MnO1xuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICcuL2NhbGxUb0FjdGlvbic7XG5pbXBvcnQgUHdkTGVzc0xvZ2luIGZyb20gJy4uL2FjY291bnQvcHdkbGVzc0xvZ2luJztcbmltcG9ydCBWYWxpZGF0ZUxvZ2luIGZyb20gJy4uL2FjY291bnQvdmFsaWRhdGVMb2dpbic7XG5cbmltcG9ydCB7IGNsb3NlRGlhbG9nIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBzZW5kVmFsaWRhdGlvbk1haWwsIGxvZ2luIH0gZnJvbSAnLi4vYWNjb3VudC9hY3Rpb25zJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBkaWFsb2dDb250ZW50OiB7XG4gICAgd2lkdGg6ICc5MCUnLFxuICAgIG1heFdpZHRoOiA0MjAsXG4gIH0sXG59O1xuXG5cbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRpYWxvZ0NvbnRlbnQgPSB7XG4gICAgbG9naW46IHsgbm9kZTogPFB3ZExlc3NMb2dpbiBvblN1Ym1pdD17cHJvcHMuc2VuZFZhbGlkYXRpb25NYWlsfSAvPiwgdGl0bGU6ICdMb2cgSW4nIH0sXG4gICAgdmFsaWRhdGVMb2dpbjogeyBub2RlOiA8VmFsaWRhdGVMb2dpbiBvblN1Ym1pdD17cHJvcHMubG9naW59IC8+LCB0aXRsZTogJ0VudGVyIHlvdXIgY29kZSB0byBsb2cgaW4nIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8SG9tZU5hdmJhciAvPlxuICAgICAgICAgIDxJbnRyb0hlYWRlciAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxEcnVnU2VhcmNoIC8+XG4gICAgICAgIDxGZWF0dXJlZFBoYXJtYWNpZXMgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48aHIgLz48L2Rpdj5cbiAgICAgICAgPEhvd0l0V29ya3MgLz5cbiAgICAgICAgPENhbGxUb0FjdGlvbiAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICDCqSBOZWVtIEhlYWx0aFxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgdGl0bGU9e2RpYWxvZ0NvbnRlbnRbcHJvcHMuZGlhbG9nQ29udGVudF0udGl0bGV9XG4gICAgICAgIG1vZGFsPXtmYWxzZX1cbiAgICAgICAgb3Blbj17cHJvcHMuZGlhbG9nT3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3Byb3BzLmNsb3NlRGlhbG9nfVxuICAgICAgICBjb250ZW50U3R5bGU9e3N0eWxlcy5kaWFsb2dDb250ZW50fVxuICAgICAgICBhdXRvU2Nyb2xsQm9keUNvbnRlbnRcbiAgICAgID5cbiAgICAgICAge2RpYWxvZ0NvbnRlbnRbcHJvcHMuZGlhbG9nQ29udGVudF0ubm9kZX1cbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNGN0ZERkIsICM3QkIyQjcpO1xuICAgICAgICB9XG4gICAgICAgIC5zZXBhcmF0b3Ige1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ib21lUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGRpYWxvZ09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGRpYWxvZ0NvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2VuZFZhbGlkYXRpb25NYWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbG9zZURpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IChcbiAge1xuICAgIGNsb3NlRGlhbG9nOiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChjbG9zZURpYWxvZygpKTtcbiAgICB9LFxuICAgIHNlbmRWYWxpZGF0aW9uTWFpbDogKGVtYWlsKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZW5kVmFsaWRhdGlvbk1haWwoZW1haWwpKTtcbiAgICB9LFxuICAgIGxvZ2luOiAodmFsdWVzKSA9PiB7XG4gICAgICBkaXNwYXRjaChsb2dpbih2YWx1ZXMpKTtcbiAgICB9LFxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWVQYWdlKTtcbiJdfQ== */\n/*@ sourceURL=components/homePage/index.js */'
    })
  );
};

HomePage.propTypes = {
  dialogOpen: _react3.PropTypes.bool.isRequired,
  dialogContent: _react3.PropTypes.string.isRequired,
  sendValidationMail: _react3.PropTypes.func.isRequired,
  closeDialog: _react3.PropTypes.func.isRequired,
  login: _react3.PropTypes.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeDialog: function closeDialog() {
      dispatch((0, _actions.closeDialog)());
    },
    sendValidationMail: function sendValidationMail(email) {
      dispatch((0, _actions2.sendValidationMail)(email));
    },
    login: function login(values) {
      dispatch((0, _actions2.login)(values));
    }
  };
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
}, mapDispatchToProps)(HomePage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZGlhbG9nQ29udGVudCIsIndpZHRoIiwibWF4V2lkdGgiLCJIb21lUGFnZSIsInByb3BzIiwibG9naW4iLCJub2RlIiwic2VuZFZhbGlkYXRpb25NYWlsIiwidGl0bGUiLCJ2YWxpZGF0ZUxvZ2luIiwiZGlhbG9nT3BlbiIsImNsb3NlRGlhbG9nIiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJlbWFpbCIsInZhbHVlcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBWEE7QUFhQSxJQUFNQSxTQUFTO0FBQ2JDLGlCQUFlO0FBQ2JDLFdBQU8sS0FETTtBQUViQyxjQUFVO0FBRkc7QUFERixDQUFmOztBQVFBLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsTUFBTUosZ0JBQWdCO0FBQ3BCSyxXQUFPLEVBQUVDLE1BQU0sd0RBQWMsVUFBVUYsTUFBTUcsa0JBQTlCLEdBQVIsRUFBOERDLE9BQU8sUUFBckUsRUFEYTtBQUVwQkMsbUJBQWUsRUFBRUgsTUFBTSx5REFBZSxVQUFVRixNQUFNQyxLQUEvQixHQUFSLEVBQWtERyxPQUFPLDJCQUF6RDtBQUZLLEdBQXRCO0FBSUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpRUFERjtBQUVFO0FBRkYsT0FERjtBQUtFLCtEQUxGO0FBTUUsdUVBTkY7QUFPRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFBQTtBQUEyQjtBQUFBO0FBQUE7QUFBM0IsT0FQRjtBQVFFLCtEQVJGO0FBU0U7QUFURixLQURGO0FBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FiRjtBQWlCRTtBQUFBO0FBQUE7QUFDRSxlQUFPUixjQUFjSSxNQUFNSixhQUFwQixFQUFtQ1EsS0FENUM7QUFFRSxlQUFPLEtBRlQ7QUFHRSxjQUFNSixNQUFNTSxVQUhkO0FBSUUsd0JBQWdCTixNQUFNTyxXQUp4QjtBQUtFLHNCQUFjWixPQUFPQyxhQUx2QjtBQU1FO0FBTkY7QUFRR0Esb0JBQWNJLE1BQU1KLGFBQXBCLEVBQW1DTTtBQVJ0QyxLQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FERjtBQTBDRCxDQS9DRDs7QUFpREFILFNBQVNTLFNBQVQsR0FBcUI7QUFDbkJGLGNBQVksa0JBQVVHLElBQVYsQ0FBZUMsVUFEUjtBQUVuQmQsaUJBQWUsa0JBQVVlLE1BQVYsQ0FBaUJELFVBRmI7QUFHbkJQLHNCQUFvQixrQkFBVVMsSUFBVixDQUFlRixVQUhoQjtBQUluQkgsZUFBYSxrQkFBVUssSUFBVixDQUFlRixVQUpUO0FBS25CVCxTQUFPLGtCQUFVVyxJQUFWLENBQWVGO0FBTEgsQ0FBckI7O0FBU0EsSUFBTUcscUJBQXFCLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUN6QjtBQUNFTixpQkFBYSx1QkFBTTtBQUNqQk8sZUFBUywyQkFBVDtBQUNELEtBSEg7QUFJRVgsd0JBQW9CLDRCQUFDWSxLQUFELEVBQVc7QUFDN0JELGVBQVMsa0NBQW1CQyxLQUFuQixDQUFUO0FBQ0QsS0FOSDtBQU9FZCxXQUFPLGVBQUNlLE1BQUQsRUFBWTtBQUNqQkYsZUFBUyxxQkFBTUUsTUFBTixDQUFUO0FBQ0Q7QUFUSCxHQUR5QjtBQUFBLENBQTNCOztrQkFjZSx5QkFBUTtBQUFBLFNBQVNDLEtBQVQ7QUFBQSxDQUFSLEVBQXdCSixrQkFBeEIsRUFBNENkLFFBQTVDLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXgvTGFicy9OZXh0anMvbmVlbS1oZWFsdGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbG9nIGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZyc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG4vLyBpbXBvcnRlZCBtb2R1bGVzXG5pbXBvcnQgSG9tZU5hdmJhciBmcm9tICcuL2hvbWVOYXZiYXInO1xuaW1wb3J0IEludHJvSGVhZGVyIGZyb20gJy4vaW50cm9IZWFkZXInO1xuaW1wb3J0IERydWdTZWFyY2ggZnJvbSAnLi9kcnVnU2VhcmNoJztcbmltcG9ydCBGZWF0dXJlZFBoYXJtYWNpZXMgZnJvbSAnLi9mZWF0dXJlZFBoYXJtYWNpZXMnO1xuaW1wb3J0IEhvd0l0V29ya3MgZnJvbSAnLi9ob3dJdFdvcmtzJztcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnLi9jYWxsVG9BY3Rpb24nO1xuaW1wb3J0IFB3ZExlc3NMb2dpbiBmcm9tICcuLi9hY2NvdW50L3B3ZGxlc3NMb2dpbic7XG5pbXBvcnQgVmFsaWRhdGVMb2dpbiBmcm9tICcuLi9hY2NvdW50L3ZhbGlkYXRlTG9naW4nO1xuXG5pbXBvcnQgeyBjbG9zZURpYWxvZyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2VuZFZhbGlkYXRpb25NYWlsLCBsb2dpbiB9IGZyb20gJy4uL2FjY291bnQvYWN0aW9ucyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZGlhbG9nQ29udGVudDoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBtYXhXaWR0aDogNDIwLFxuICB9LFxufTtcblxuXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkaWFsb2dDb250ZW50ID0ge1xuICAgIGxvZ2luOiB7IG5vZGU6IDxQd2RMZXNzTG9naW4gb25TdWJtaXQ9e3Byb3BzLnNlbmRWYWxpZGF0aW9uTWFpbH0gLz4sIHRpdGxlOiAnTG9nIEluJyB9LFxuICAgIHZhbGlkYXRlTG9naW46IHsgbm9kZTogPFZhbGlkYXRlTG9naW4gb25TdWJtaXQ9e3Byb3BzLmxvZ2lufSAvPiwgdGl0bGU6ICdFbnRlciB5b3VyIGNvZGUgdG8gbG9nIGluJyB9LFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPEhvbWVOYXZiYXIgLz5cbiAgICAgICAgICA8SW50cm9IZWFkZXIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8RHJ1Z1NlYXJjaCAvPlxuICAgICAgICA8RmVhdHVyZWRQaGFybWFjaWVzIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PGhyIC8+PC9kaXY+XG4gICAgICAgIDxIb3dJdFdvcmtzIC8+XG4gICAgICAgIDxDYWxsVG9BY3Rpb24gLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgwqkgTmVlbSBIZWFsdGhcbiAgICAgIDwvZm9vdGVyPlxuXG4gICAgICA8RGlhbG9nXG4gICAgICAgIHRpdGxlPXtkaWFsb2dDb250ZW50W3Byb3BzLmRpYWxvZ0NvbnRlbnRdLnRpdGxlfVxuICAgICAgICBtb2RhbD17ZmFsc2V9XG4gICAgICAgIG9wZW49e3Byb3BzLmRpYWxvZ09wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtwcm9wcy5jbG9zZURpYWxvZ31cbiAgICAgICAgY29udGVudFN0eWxlPXtzdHlsZXMuZGlhbG9nQ29udGVudH1cbiAgICAgICAgYXV0b1Njcm9sbEJvZHlDb250ZW50XG4gICAgICA+XG4gICAgICAgIHtkaWFsb2dDb250ZW50W3Byb3BzLmRpYWxvZ0NvbnRlbnRdLm5vZGV9XG4gICAgICA8L0RpYWxvZz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjRjdGREZCLCAjN0JCMkI3KTtcbiAgICAgICAgfVxuICAgICAgICAuc2VwYXJhdG9yIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM4O1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSG9tZVBhZ2UucHJvcFR5cGVzID0ge1xuICBkaWFsb2dPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBkaWFsb2dDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlbmRWYWxpZGF0aW9uTWFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xvc2VEaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvZ2luOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoXG4gIHtcbiAgICBjbG9zZURpYWxvZzogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goY2xvc2VEaWFsb2coKSk7XG4gICAgfSxcbiAgICBzZW5kVmFsaWRhdGlvbk1haWw6IChlbWFpbCkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2VuZFZhbGlkYXRpb25NYWlsKGVtYWlsKSk7XG4gICAgfSxcbiAgICBsb2dpbjogKHZhbHVlcykgPT4ge1xuICAgICAgZGlzcGF0Y2gobG9naW4odmFsdWVzKSk7XG4gICAgfSxcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSwgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lUGFnZSk7XG4iXX0=