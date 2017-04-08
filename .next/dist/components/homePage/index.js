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

var _createUser = require('../account/createUser');

var _createUser2 = _interopRequireDefault(_createUser);

var _actions = require('../actions');

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
    login: { node: _react2.default.createElement(_pwdlessLogin2.default, null), title: 'Log In' },
    validateLogin: {
      node: _react2.default.createElement(_validateLogin2.default, null),
      title: 'Enter your code to log in'
    },
    createUser: { node: _react2.default.createElement(_createUser2.default, null), title: 'Sign Up' }
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
        _react2.default.createElement(_homeNavbar2.default, { isAuthenticated: props.isAuthenticated }),
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
      _react2.default.createElement(_callToAction2.default, { isAuthenticated: props.isAuthenticated })
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
      css: 'section[data-jsx="1281695402"] {background-image: linear-gradient(-90deg, #F7FDFB, #7BB2B7);}.separator[data-jsx="1281695402"] {opacity: 0.38;width: 70%;margin: 0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VVLEFBQ08sZ0NBQ3FELDREQUM3RCxDQUNXLG1DQUNJLGNBQ0gsV0FDSSxlQUNoQiIsImZpbGUiOiJjb21wb25lbnRzL2hvbWVQYWdlL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL25lZW0taGVhbHRoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gaW1wb3J0ZWQgbW9kdWxlc1xuaW1wb3J0IEhvbWVOYXZiYXIgZnJvbSAnLi9ob21lTmF2YmFyJztcbmltcG9ydCBJbnRyb0hlYWRlciBmcm9tICcuL2ludHJvSGVhZGVyJztcbmltcG9ydCBEcnVnU2VhcmNoIGZyb20gJy4vZHJ1Z1NlYXJjaCc7XG5pbXBvcnQgRmVhdHVyZWRQaGFybWFjaWVzIGZyb20gJy4vZmVhdHVyZWRQaGFybWFjaWVzJztcbmltcG9ydCBIb3dJdFdvcmtzIGZyb20gJy4vaG93SXRXb3Jrcyc7XG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJy4vY2FsbFRvQWN0aW9uJztcbmltcG9ydCBQd2RMZXNzTG9naW4gZnJvbSAnLi4vYWNjb3VudC9wd2RsZXNzTG9naW4nO1xuaW1wb3J0IFZhbGlkYXRlTG9naW4gZnJvbSAnLi4vYWNjb3VudC92YWxpZGF0ZUxvZ2luJztcbmltcG9ydCBDcmVhdGVVc2VyIGZyb20gJy4uL2FjY291bnQvY3JlYXRlVXNlcic7XG5cbmltcG9ydCB7IGNsb3NlRGlhbG9nIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZGlhbG9nQ29udGVudDoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBtYXhXaWR0aDogNDIwLFxuICB9LFxufTtcblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlhbG9nQ29udGVudCA9IHtcbiAgICBsb2dpbjogeyBub2RlOiA8UHdkTGVzc0xvZ2luIC8+LCB0aXRsZTogJ0xvZyBJbicgfSxcbiAgICB2YWxpZGF0ZUxvZ2luOiB7XG4gICAgICBub2RlOiA8VmFsaWRhdGVMb2dpbiAvPixcbiAgICAgIHRpdGxlOiAnRW50ZXIgeW91ciBjb2RlIHRvIGxvZyBpbicsXG4gICAgfSxcbiAgICBjcmVhdGVVc2VyOiB7IG5vZGU6IDxDcmVhdGVVc2VyIC8+LCB0aXRsZTogJ1NpZ24gVXAnIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8SG9tZU5hdmJhciBpc0F1dGhlbnRpY2F0ZWQ9e3Byb3BzLmlzQXV0aGVudGljYXRlZH0gLz5cbiAgICAgICAgICA8SW50cm9IZWFkZXIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8RHJ1Z1NlYXJjaCAvPlxuICAgICAgICA8RmVhdHVyZWRQaGFybWFjaWVzIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PGhyIC8+PC9kaXY+XG4gICAgICAgIDxIb3dJdFdvcmtzIC8+XG4gICAgICAgIDxDYWxsVG9BY3Rpb24gaXNBdXRoZW50aWNhdGVkPXtwcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIMKpIE5lZW0gSGVhbHRoXG4gICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPERpYWxvZ1xuICAgICAgICB0aXRsZT17ZGlhbG9nQ29udGVudFtwcm9wcy5kaWFsb2dDb250ZW50XS50aXRsZX1cbiAgICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgICBvcGVuPXtwcm9wcy5kaWFsb2dPcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17cHJvcHMuY2xvc2VEaWFsb2d9XG4gICAgICAgIGNvbnRlbnRTdHlsZT17c3R5bGVzLmRpYWxvZ0NvbnRlbnR9XG4gICAgICAgIGF1dG9TY3JvbGxCb2R5Q29udGVudFxuICAgICAgPlxuICAgICAgICB7ZGlhbG9nQ29udGVudFtwcm9wcy5kaWFsb2dDb250ZW50XS5ub2RlfVxuICAgICAgPC9EaWFsb2c+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcbiAgICAgICAgICBgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNGN0ZERkIsICM3QkIyQjcpO1xuICAgICAgICB9XG4gICAgICAgIC5zZXBhcmF0b3Ige1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYFxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ib21lUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGRpYWxvZ09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGRpYWxvZ0NvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xvc2VEaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGRpYWxvZ09wZW46IHN0YXRlLmRpYWxvZy5vcGVuLFxuICBkaWFsb2dDb250ZW50OiBzdGF0ZS5kaWFsb2cuY29udGVudCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBjbG9zZURpYWxvZzogKCkgPT4ge1xuICAgIGRpc3BhdGNoKGNsb3NlRGlhbG9nKCkpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWVQYWdlKTtcbiJdfQ== */\n/*@ sourceURL=components/homePage/index.js */'
    })
  );
};

HomePage.propTypes = {
  dialogOpen: _react3.PropTypes.bool.isRequired,
  dialogContent: _react3.PropTypes.string.isRequired,
  closeDialog: _react3.PropTypes.func.isRequired,
  isAuthenticated: _react3.PropTypes.bool.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    dialogOpen: state.dialog.open,
    dialogContent: state.dialog.content
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeDialog: function closeDialog() {
      dispatch((0, _actions.closeDialog)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomePage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZGlhbG9nQ29udGVudCIsIndpZHRoIiwibWF4V2lkdGgiLCJIb21lUGFnZSIsInByb3BzIiwibG9naW4iLCJub2RlIiwidGl0bGUiLCJ2YWxpZGF0ZUxvZ2luIiwiY3JlYXRlVXNlciIsImlzQXV0aGVudGljYXRlZCIsImRpYWxvZ09wZW4iLCJjbG9zZURpYWxvZyIsInByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGlhbG9nIiwib3BlbiIsImNvbnRlbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBWEE7QUFhQSxJQUFNQSxTQUFTO0FBQ2JDLGlCQUFlO0FBQ2JDLFdBQU8sS0FETTtBQUViQyxjQUFVO0FBRkc7QUFERixDQUFmOztBQU9BLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsTUFBTUosZ0JBQWdCO0FBQ3BCSyxXQUFPLEVBQUVDLE1BQU0sMkRBQVIsRUFBMEJDLE9BQU8sUUFBakMsRUFEYTtBQUVwQkMsbUJBQWU7QUFDYkYsWUFBTSw0REFETztBQUViQyxhQUFPO0FBRk0sS0FGSztBQU1wQkUsZ0JBQVksRUFBRUgsTUFBTSx5REFBUixFQUF3QkMsT0FBTyxTQUEvQjtBQU5RLEdBQXRCO0FBUUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSw4REFBWSxpQkFBaUJILE1BQU1NLGVBQW5DLEdBREY7QUFFRTtBQUZGLE9BREY7QUFLRSwrREFMRjtBQU1FLHVFQU5GO0FBT0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQUE7QUFBMkI7QUFBQTtBQUFBO0FBQTNCLE9BUEY7QUFRRSwrREFSRjtBQVNFLDhEQUFjLGlCQUFpQk4sTUFBTU0sZUFBckM7QUFURixLQURGO0FBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FiRjtBQWlCRTtBQUFBO0FBQUE7QUFDRSxlQUFPVixjQUFjSSxNQUFNSixhQUFwQixFQUFtQ08sS0FENUM7QUFFRSxlQUFPLEtBRlQ7QUFHRSxjQUFNSCxNQUFNTyxVQUhkO0FBSUUsd0JBQWdCUCxNQUFNUSxXQUp4QjtBQUtFLHNCQUFjYixPQUFPQyxhQUx2QjtBQU1FO0FBTkY7QUFRR0Esb0JBQWNJLE1BQU1KLGFBQXBCLEVBQW1DTTtBQVJ0QyxLQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FERjtBQThDRCxDQXZERDs7QUF5REFILFNBQVNVLFNBQVQsR0FBcUI7QUFDbkJGLGNBQVksa0JBQVVHLElBQVYsQ0FBZUMsVUFEUjtBQUVuQmYsaUJBQWUsa0JBQVVnQixNQUFWLENBQWlCRCxVQUZiO0FBR25CSCxlQUFhLGtCQUFVSyxJQUFWLENBQWVGLFVBSFQ7QUFJbkJMLG1CQUFpQixrQkFBVUksSUFBVixDQUFlQztBQUpiLENBQXJCOztBQU9BLElBQU1HLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxTQUFVO0FBQ2hDUCxnQkFBWVEsTUFBTUMsTUFBTixDQUFhQyxJQURPO0FBRWhDckIsbUJBQWVtQixNQUFNQyxNQUFOLENBQWFFO0FBRkksR0FBVjtBQUFBLENBQXhCOztBQUtBLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsU0FBYTtBQUN0Q1gsaUJBQWEsdUJBQU07QUFDakJZLGVBQVMsMkJBQVQ7QUFDRDtBQUhxQyxHQUFiO0FBQUEsQ0FBM0I7O2tCQU1lLHlCQUFRTixlQUFSLEVBQXlCSyxrQkFBekIsRUFBNkNwQixRQUE3QyxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL25lZW0taGVhbHRoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gaW1wb3J0ZWQgbW9kdWxlc1xuaW1wb3J0IEhvbWVOYXZiYXIgZnJvbSAnLi9ob21lTmF2YmFyJztcbmltcG9ydCBJbnRyb0hlYWRlciBmcm9tICcuL2ludHJvSGVhZGVyJztcbmltcG9ydCBEcnVnU2VhcmNoIGZyb20gJy4vZHJ1Z1NlYXJjaCc7XG5pbXBvcnQgRmVhdHVyZWRQaGFybWFjaWVzIGZyb20gJy4vZmVhdHVyZWRQaGFybWFjaWVzJztcbmltcG9ydCBIb3dJdFdvcmtzIGZyb20gJy4vaG93SXRXb3Jrcyc7XG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJy4vY2FsbFRvQWN0aW9uJztcbmltcG9ydCBQd2RMZXNzTG9naW4gZnJvbSAnLi4vYWNjb3VudC9wd2RsZXNzTG9naW4nO1xuaW1wb3J0IFZhbGlkYXRlTG9naW4gZnJvbSAnLi4vYWNjb3VudC92YWxpZGF0ZUxvZ2luJztcbmltcG9ydCBDcmVhdGVVc2VyIGZyb20gJy4uL2FjY291bnQvY3JlYXRlVXNlcic7XG5cbmltcG9ydCB7IGNsb3NlRGlhbG9nIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZGlhbG9nQ29udGVudDoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBtYXhXaWR0aDogNDIwLFxuICB9LFxufTtcblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlhbG9nQ29udGVudCA9IHtcbiAgICBsb2dpbjogeyBub2RlOiA8UHdkTGVzc0xvZ2luIC8+LCB0aXRsZTogJ0xvZyBJbicgfSxcbiAgICB2YWxpZGF0ZUxvZ2luOiB7XG4gICAgICBub2RlOiA8VmFsaWRhdGVMb2dpbiAvPixcbiAgICAgIHRpdGxlOiAnRW50ZXIgeW91ciBjb2RlIHRvIGxvZyBpbicsXG4gICAgfSxcbiAgICBjcmVhdGVVc2VyOiB7IG5vZGU6IDxDcmVhdGVVc2VyIC8+LCB0aXRsZTogJ1NpZ24gVXAnIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8SG9tZU5hdmJhciBpc0F1dGhlbnRpY2F0ZWQ9e3Byb3BzLmlzQXV0aGVudGljYXRlZH0gLz5cbiAgICAgICAgICA8SW50cm9IZWFkZXIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8RHJ1Z1NlYXJjaCAvPlxuICAgICAgICA8RmVhdHVyZWRQaGFybWFjaWVzIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PGhyIC8+PC9kaXY+XG4gICAgICAgIDxIb3dJdFdvcmtzIC8+XG4gICAgICAgIDxDYWxsVG9BY3Rpb24gaXNBdXRoZW50aWNhdGVkPXtwcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIMKpIE5lZW0gSGVhbHRoXG4gICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPERpYWxvZ1xuICAgICAgICB0aXRsZT17ZGlhbG9nQ29udGVudFtwcm9wcy5kaWFsb2dDb250ZW50XS50aXRsZX1cbiAgICAgICAgbW9kYWw9e2ZhbHNlfVxuICAgICAgICBvcGVuPXtwcm9wcy5kaWFsb2dPcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17cHJvcHMuY2xvc2VEaWFsb2d9XG4gICAgICAgIGNvbnRlbnRTdHlsZT17c3R5bGVzLmRpYWxvZ0NvbnRlbnR9XG4gICAgICAgIGF1dG9TY3JvbGxCb2R5Q29udGVudFxuICAgICAgPlxuICAgICAgICB7ZGlhbG9nQ29udGVudFtwcm9wcy5kaWFsb2dDb250ZW50XS5ub2RlfVxuICAgICAgPC9EaWFsb2c+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcbiAgICAgICAgICBgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNGN0ZERkIsICM3QkIyQjcpO1xuICAgICAgICB9XG4gICAgICAgIC5zZXBhcmF0b3Ige1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYFxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ib21lUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGRpYWxvZ09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGRpYWxvZ0NvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xvc2VEaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGRpYWxvZ09wZW46IHN0YXRlLmRpYWxvZy5vcGVuLFxuICBkaWFsb2dDb250ZW50OiBzdGF0ZS5kaWFsb2cuY29udGVudCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBjbG9zZURpYWxvZzogKCkgPT4ge1xuICAgIGRpc3BhdGNoKGNsb3NlRGlhbG9nKCkpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWVQYWdlKTtcbiJdfQ==