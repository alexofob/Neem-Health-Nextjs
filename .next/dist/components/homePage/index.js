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
      css: 'section[data-jsx="1281695402"] {background-image: linear-gradient(-90deg, #F7FDFB, #7BB2B7);}.separator[data-jsx="1281695402"] {opacity: 0.38;width: 70%;margin: 0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRrQixBQUNELGdDQUNxRCw0REFDN0QsQ0FDVyxtQ0FDSSxjQUNILFdBQ0ksZUFDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lUGFnZS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9uZWVtLWhlYWx0aCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIGltcG9ydGVkIG1vZHVsZXNcbmltcG9ydCBIb21lTmF2YmFyIGZyb20gJy4vaG9tZU5hdmJhcic7XG5pbXBvcnQgSW50cm9IZWFkZXIgZnJvbSAnLi9pbnRyb0hlYWRlcic7XG5pbXBvcnQgRHJ1Z1NlYXJjaCBmcm9tICcuL2RydWdTZWFyY2gnO1xuaW1wb3J0IEZlYXR1cmVkUGhhcm1hY2llcyBmcm9tICcuL2ZlYXR1cmVkUGhhcm1hY2llcyc7XG5pbXBvcnQgSG93SXRXb3JrcyBmcm9tICcuL2hvd0l0V29ya3MnO1xuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICcuL2NhbGxUb0FjdGlvbic7XG5pbXBvcnQgUHdkTGVzc0xvZ2luIGZyb20gJy4uL2FjY291bnQvcHdkbGVzc0xvZ2luJztcbmltcG9ydCBWYWxpZGF0ZUxvZ2luIGZyb20gJy4uL2FjY291bnQvdmFsaWRhdGVMb2dpbic7XG5cbmltcG9ydCB7IGNsb3NlRGlhbG9nIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBzZW5kVmFsaWRhdGlvbk1haWwgfSBmcm9tICcuLi9hY2NvdW50L2FjdGlvbnMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGRpYWxvZ0NvbnRlbnQ6IHtcbiAgICB3aWR0aDogJzkwJScsXG4gICAgbWF4V2lkdGg6IDQyMCxcbiAgfSxcbn07XG5cblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlhbG9nQ29udGVudCA9IHtcbiAgICBsb2dpbjogeyBub2RlOiA8UHdkTGVzc0xvZ2luIG9uU3VibWl0PXtwcm9wcy5zZW5kVmFsaWRhdGlvbk1haWx9IC8+LCB0aXRsZTogJ0xvZyBJbicgfSxcbiAgICB2YWxpZGF0ZUxvZ2luOiB7IG5vZGU6IDxWYWxpZGF0ZUxvZ2luIC8+LCB0aXRsZTogJ0VudGVyIHlvdXIgY29kZSB0byBsb2cgaW4nIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8SG9tZU5hdmJhciAvPlxuICAgICAgICAgIDxJbnRyb0hlYWRlciAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxEcnVnU2VhcmNoIC8+XG4gICAgICAgIDxGZWF0dXJlZFBoYXJtYWNpZXMgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48aHIgLz48L2Rpdj5cbiAgICAgICAgPEhvd0l0V29ya3MgLz5cbiAgICAgICAgPENhbGxUb0FjdGlvbiAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICDCqSBOZWVtIEhlYWx0aFxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgdGl0bGU9e2RpYWxvZ0NvbnRlbnRbcHJvcHMuZGlhbG9nQ29udGVudF0udGl0bGV9XG4gICAgICAgIG1vZGFsPXtmYWxzZX1cbiAgICAgICAgb3Blbj17cHJvcHMuZGlhbG9nT3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3Byb3BzLmNsb3NlRGlhbG9nfVxuICAgICAgICBjb250ZW50U3R5bGU9e3N0eWxlcy5kaWFsb2dDb250ZW50fVxuICAgICAgICBhdXRvU2Nyb2xsQm9keUNvbnRlbnRcbiAgICAgID5cbiAgICAgICAge2RpYWxvZ0NvbnRlbnRbcHJvcHMuZGlhbG9nQ29udGVudF0ubm9kZX1cbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNGN0ZERkIsICM3QkIyQjcpO1xuICAgICAgICB9XG4gICAgICAgIC5zZXBhcmF0b3Ige1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ib21lUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGRpYWxvZ09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGRpYWxvZ0NvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2VuZFZhbGlkYXRpb25NYWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbG9zZURpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKFxuICB7XG4gICAgY2xvc2VEaWFsb2c6ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsb3NlRGlhbG9nKCkpO1xuICAgIH0sXG4gICAgc2VuZFZhbGlkYXRpb25NYWlsOiAoZW1haWwpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNlbmRWYWxpZGF0aW9uTWFpbChlbWFpbCkpO1xuICAgIH0sXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZVBhZ2UpO1xuIl19 */\n/*@ sourceURL=components/homePage/index.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZGlhbG9nQ29udGVudCIsIndpZHRoIiwibWF4V2lkdGgiLCJIb21lUGFnZSIsInByb3BzIiwibG9naW4iLCJub2RlIiwic2VuZFZhbGlkYXRpb25NYWlsIiwidGl0bGUiLCJ2YWxpZGF0ZUxvZ2luIiwiZGlhbG9nT3BlbiIsImNsb3NlRGlhbG9nIiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJlbWFpbCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBWEE7QUFhQSxJQUFNQSxTQUFTO0FBQ2JDLGlCQUFlO0FBQ2JDLFdBQU8sS0FETTtBQUViQyxjQUFVO0FBRkc7QUFERixDQUFmOztBQVFBLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsTUFBTUosZ0JBQWdCO0FBQ3BCSyxXQUFPLEVBQUVDLE1BQU0sd0RBQWMsVUFBVUYsTUFBTUcsa0JBQTlCLEdBQVIsRUFBOERDLE9BQU8sUUFBckUsRUFEYTtBQUVwQkMsbUJBQWUsRUFBRUgsTUFBTSw0REFBUixFQUEyQkUsT0FBTywyQkFBbEM7QUFGSyxHQUF0QjtBQUlBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUVBREY7QUFFRTtBQUZGLE9BREY7QUFLRSwrREFMRjtBQU1FLHVFQU5GO0FBT0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQUE7QUFBMkI7QUFBQTtBQUFBO0FBQTNCLE9BUEY7QUFRRSwrREFSRjtBQVNFO0FBVEYsS0FERjtBQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYkY7QUFpQkU7QUFBQTtBQUFBO0FBQ0UsZUFBT1IsY0FBY0ksTUFBTUosYUFBcEIsRUFBbUNRLEtBRDVDO0FBRUUsZUFBTyxLQUZUO0FBR0UsY0FBTUosTUFBTU0sVUFIZDtBQUlFLHdCQUFnQk4sTUFBTU8sV0FKeEI7QUFLRSxzQkFBY1osT0FBT0MsYUFMdkI7QUFNRTtBQU5GO0FBUUdBLG9CQUFjSSxNQUFNSixhQUFwQixFQUFtQ007QUFSdEMsS0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBREY7QUEwQ0QsQ0EvQ0Q7O0FBaURBSCxTQUFTUyxTQUFULEdBQXFCO0FBQ25CRixjQUFZLGtCQUFVRyxJQUFWLENBQWVDLFVBRFI7QUFFbkJkLGlCQUFlLGtCQUFVZSxNQUFWLENBQWlCRCxVQUZiO0FBR25CUCxzQkFBb0Isa0JBQVVTLElBQVYsQ0FBZUYsVUFIaEI7QUFJbkJILGVBQWEsa0JBQVVLLElBQVYsQ0FBZUY7QUFKVCxDQUFyQjs7QUFRQSxJQUFNRyxxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLFNBQ3pCO0FBQ0VOLGlCQUFhLHVCQUFNO0FBQ2pCTyxlQUFTLDJCQUFUO0FBQ0QsS0FISDtBQUlFWCx3QkFBb0IsNEJBQUNZLEtBQUQsRUFBVztBQUM3QkQsZUFBUyxrQ0FBbUJDLEtBQW5CLENBQVQ7QUFDRDtBQU5ILEdBRHlCO0FBQUEsQ0FBM0I7O2tCQVdlLHlCQUFRO0FBQUEsU0FBU0MsS0FBVDtBQUFBLENBQVIsRUFBd0JILGtCQUF4QixFQUE0Q2QsUUFBNUMsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9uZWVtLWhlYWx0aCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIGltcG9ydGVkIG1vZHVsZXNcbmltcG9ydCBIb21lTmF2YmFyIGZyb20gJy4vaG9tZU5hdmJhcic7XG5pbXBvcnQgSW50cm9IZWFkZXIgZnJvbSAnLi9pbnRyb0hlYWRlcic7XG5pbXBvcnQgRHJ1Z1NlYXJjaCBmcm9tICcuL2RydWdTZWFyY2gnO1xuaW1wb3J0IEZlYXR1cmVkUGhhcm1hY2llcyBmcm9tICcuL2ZlYXR1cmVkUGhhcm1hY2llcyc7XG5pbXBvcnQgSG93SXRXb3JrcyBmcm9tICcuL2hvd0l0V29ya3MnO1xuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICcuL2NhbGxUb0FjdGlvbic7XG5pbXBvcnQgUHdkTGVzc0xvZ2luIGZyb20gJy4uL2FjY291bnQvcHdkbGVzc0xvZ2luJztcbmltcG9ydCBWYWxpZGF0ZUxvZ2luIGZyb20gJy4uL2FjY291bnQvdmFsaWRhdGVMb2dpbic7XG5cbmltcG9ydCB7IGNsb3NlRGlhbG9nIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBzZW5kVmFsaWRhdGlvbk1haWwgfSBmcm9tICcuLi9hY2NvdW50L2FjdGlvbnMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGRpYWxvZ0NvbnRlbnQ6IHtcbiAgICB3aWR0aDogJzkwJScsXG4gICAgbWF4V2lkdGg6IDQyMCxcbiAgfSxcbn07XG5cblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlhbG9nQ29udGVudCA9IHtcbiAgICBsb2dpbjogeyBub2RlOiA8UHdkTGVzc0xvZ2luIG9uU3VibWl0PXtwcm9wcy5zZW5kVmFsaWRhdGlvbk1haWx9IC8+LCB0aXRsZTogJ0xvZyBJbicgfSxcbiAgICB2YWxpZGF0ZUxvZ2luOiB7IG5vZGU6IDxWYWxpZGF0ZUxvZ2luIC8+LCB0aXRsZTogJ0VudGVyIHlvdXIgY29kZSB0byBsb2cgaW4nIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8SG9tZU5hdmJhciAvPlxuICAgICAgICAgIDxJbnRyb0hlYWRlciAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxEcnVnU2VhcmNoIC8+XG4gICAgICAgIDxGZWF0dXJlZFBoYXJtYWNpZXMgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48aHIgLz48L2Rpdj5cbiAgICAgICAgPEhvd0l0V29ya3MgLz5cbiAgICAgICAgPENhbGxUb0FjdGlvbiAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICDCqSBOZWVtIEhlYWx0aFxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgdGl0bGU9e2RpYWxvZ0NvbnRlbnRbcHJvcHMuZGlhbG9nQ29udGVudF0udGl0bGV9XG4gICAgICAgIG1vZGFsPXtmYWxzZX1cbiAgICAgICAgb3Blbj17cHJvcHMuZGlhbG9nT3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3Byb3BzLmNsb3NlRGlhbG9nfVxuICAgICAgICBjb250ZW50U3R5bGU9e3N0eWxlcy5kaWFsb2dDb250ZW50fVxuICAgICAgICBhdXRvU2Nyb2xsQm9keUNvbnRlbnRcbiAgICAgID5cbiAgICAgICAge2RpYWxvZ0NvbnRlbnRbcHJvcHMuZGlhbG9nQ29udGVudF0ubm9kZX1cbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNGN0ZERkIsICM3QkIyQjcpO1xuICAgICAgICB9XG4gICAgICAgIC5zZXBhcmF0b3Ige1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ib21lUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGRpYWxvZ09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGRpYWxvZ0NvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2VuZFZhbGlkYXRpb25NYWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbG9zZURpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKFxuICB7XG4gICAgY2xvc2VEaWFsb2c6ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsb3NlRGlhbG9nKCkpO1xuICAgIH0sXG4gICAgc2VuZFZhbGlkYXRpb25NYWlsOiAoZW1haWwpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNlbmRWYWxpZGF0aW9uTWFpbChlbWFpbCkpO1xuICAgIH0sXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZVBhZ2UpO1xuIl19