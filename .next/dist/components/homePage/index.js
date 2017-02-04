'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('/Users/alex/Labs/Nextjs/patient/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _viewStore = require('../../store/viewStore');

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// imported modules
var HomePage = function HomePage(_ref) {
  var store = _ref.store;
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
        _react2.default.createElement(_homeNavbar2.default, {
          store: store
        }),
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
    _react2.default.createElement(_style2.default, {
      styleId: 3901103530,
      css: 'section[data-jsx="3901103530"] {background-image: linear-gradient(-90deg, #F7FDFB, #7BB2B7);}.separator[data-jsx="3901103530"] {opacity: 0.38;width: 70%;margin: 0 auto;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNnQixBQUNELGdDQUNxRCw0REFDN0QsQ0FDVyxtQ0FDSSxjQUNILFdBQ0ksZUFDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lUGFnZS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcbmltcG9ydCB7IFZpZXdTdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3ZpZXdTdG9yZSc7XG5cbi8vIGltcG9ydGVkIG1vZHVsZXNcbmltcG9ydCBIb21lTmF2YmFyIGZyb20gJy4vaG9tZU5hdmJhcic7XG5pbXBvcnQgSW50cm9IZWFkZXIgZnJvbSAnLi9pbnRyb0hlYWRlcic7XG5pbXBvcnQgRHJ1Z1NlYXJjaCBmcm9tICcuL2RydWdTZWFyY2gnO1xuaW1wb3J0IEZlYXR1cmVkUGhhcm1hY2llcyBmcm9tICcuL2ZlYXR1cmVkUGhhcm1hY2llcyc7XG5pbXBvcnQgSG93SXRXb3JrcyBmcm9tICcuL2hvd0l0V29ya3MnO1xuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICcuL2NhbGxUb0FjdGlvbic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHN0b3JlOiBWaWV3U3RvcmUsXG59XG5cbmNvbnN0IEhvbWVQYWdlID0gKHsgc3RvcmUgfTogUHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8bWFpbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8SG9tZU5hdmJhclxuICAgICAgICAgIHN0b3JlPXtzdG9yZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEludHJvSGVhZGVyIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8RHJ1Z1NlYXJjaCAvPlxuICAgICAgPEZlYXR1cmVkUGhhcm1hY2llcyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48aHIgLz48L2Rpdj5cbiAgICAgIDxIb3dJdFdvcmtzIC8+XG4gICAgICA8Q2FsbFRvQWN0aW9uIC8+XG4gICAgPC9tYWluPlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIMKpIE5lZW0gSGVhbHRoXG4gICAgPC9mb290ZXI+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywgI0Y3RkRGQiwgIzdCQjJCNyk7XG4gICAgICB9XG4gICAgICAuc2VwYXJhdG9yIHtcbiAgICAgICAgb3BhY2l0eTogMC4zODtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoWydzdG9yZSddLCBIb21lUGFnZSk7XG4iXX0= */\n/*@ sourceURL=components/homePage/index.js */'
    })
  );
};

exports.default = (0, _mobxReact.observer)(['store'], HomePage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQU5BO0FBWUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUNFLGlCQUFPQTtBQURULFVBREY7QUFJRTtBQUpGLE9BREY7QUFPRSwrREFQRjtBQVFFLHVFQVJGO0FBU0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQUE7QUFBMkI7QUFBQTtBQUFBO0FBQTNCLE9BVEY7QUFVRSwrREFWRjtBQVdFO0FBWEYsS0FERjtBQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRGU7QUFBQSxDQUFqQjs7a0JBa0NlLHlCQUFTLENBQUMsT0FBRCxDQUFULEVBQW9CRCxRQUFwQixDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL3BhdGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuaW1wb3J0IHsgVmlld1N0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmUvdmlld1N0b3JlJztcblxuLy8gaW1wb3J0ZWQgbW9kdWxlc1xuaW1wb3J0IEhvbWVOYXZiYXIgZnJvbSAnLi9ob21lTmF2YmFyJztcbmltcG9ydCBJbnRyb0hlYWRlciBmcm9tICcuL2ludHJvSGVhZGVyJztcbmltcG9ydCBEcnVnU2VhcmNoIGZyb20gJy4vZHJ1Z1NlYXJjaCc7XG5pbXBvcnQgRmVhdHVyZWRQaGFybWFjaWVzIGZyb20gJy4vZmVhdHVyZWRQaGFybWFjaWVzJztcbmltcG9ydCBIb3dJdFdvcmtzIGZyb20gJy4vaG93SXRXb3Jrcyc7XG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJy4vY2FsbFRvQWN0aW9uJztcblxudHlwZSBQcm9wcyA9IHtcbiAgc3RvcmU6IFZpZXdTdG9yZSxcbn1cblxuY29uc3QgSG9tZVBhZ2UgPSAoeyBzdG9yZSB9OiBQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxtYWluPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxIb21lTmF2YmFyXG4gICAgICAgICAgc3RvcmU9e3N0b3JlfVxuICAgICAgICAvPlxuICAgICAgICA8SW50cm9IZWFkZXIgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxEcnVnU2VhcmNoIC8+XG4gICAgICA8RmVhdHVyZWRQaGFybWFjaWVzIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjxociAvPjwvZGl2PlxuICAgICAgPEhvd0l0V29ya3MgLz5cbiAgICAgIDxDYWxsVG9BY3Rpb24gLz5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgwqkgTmVlbSBIZWFsdGhcbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjRjdGREZCLCAjN0JCMkI3KTtcbiAgICAgIH1cbiAgICAgIC5zZXBhcmF0b3Ige1xuICAgICAgICBvcGFjaXR5OiAwLjM4O1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihbJ3N0b3JlJ10sIEhvbWVQYWdlKTtcbiJdfQ==