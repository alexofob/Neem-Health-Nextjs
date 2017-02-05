'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('/Users/alex/Labs/Nextjs/patient/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

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
var HomePage = function HomePage() {
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
    _react2.default.createElement(_style2.default, {
      styleId: 3901103530,
      css: 'section[data-jsx="3901103530"] {background-image: linear-gradient(-90deg, #F7FDFB, #7BB2B7);}.separator[data-jsx="3901103530"] {opacity: 0.38;width: 70%;margin: 0 auto;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJnQixBQUNELGdDQUNxRCw0REFDN0QsQ0FDVyxtQ0FDSSxjQUNILFdBQ0ksZUFDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lUGFnZS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ZWQgbW9kdWxlc1xuaW1wb3J0IEhvbWVOYXZiYXIgZnJvbSAnLi9ob21lTmF2YmFyJztcbmltcG9ydCBJbnRyb0hlYWRlciBmcm9tICcuL2ludHJvSGVhZGVyJztcbmltcG9ydCBEcnVnU2VhcmNoIGZyb20gJy4vZHJ1Z1NlYXJjaCc7XG5pbXBvcnQgRmVhdHVyZWRQaGFybWFjaWVzIGZyb20gJy4vZmVhdHVyZWRQaGFybWFjaWVzJztcbmltcG9ydCBIb3dJdFdvcmtzIGZyb20gJy4vaG93SXRXb3Jrcyc7XG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJy4vY2FsbFRvQWN0aW9uJztcblxuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8bWFpbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8SG9tZU5hdmJhciAvPlxuICAgICAgICA8SW50cm9IZWFkZXIgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxEcnVnU2VhcmNoIC8+XG4gICAgICA8RmVhdHVyZWRQaGFybWFjaWVzIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjxociAvPjwvZGl2PlxuICAgICAgPEhvd0l0V29ya3MgLz5cbiAgICAgIDxDYWxsVG9BY3Rpb24gLz5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgwqkgTmVlbSBIZWFsdGhcbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjRjdGREZCLCAjN0JCMkI3KTtcbiAgICAgIH1cbiAgICAgIC5zZXBhcmF0b3Ige1xuICAgICAgICBvcGFjaXR5OiAwLjM4O1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdfQ== */\n/*@ sourceURL=components/homePage/index.js */'
    })
  );
};

exports.default = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFOQTtBQVNBLElBQU1BLFdBQVcsU0FBWEEsUUFBVztBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUVBREY7QUFFRTtBQUZGLE9BREY7QUFLRSwrREFMRjtBQU1FLHVFQU5GO0FBT0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQUE7QUFBMkI7QUFBQTtBQUFBO0FBQTNCLE9BUEY7QUFRRSwrREFSRjtBQVNFO0FBVEYsS0FERjtBQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRGU7QUFBQSxDQUFqQjs7a0JBZ0NlQSxRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGV4L0xhYnMvTmV4dGpzL3BhdGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRlZCBtb2R1bGVzXG5pbXBvcnQgSG9tZU5hdmJhciBmcm9tICcuL2hvbWVOYXZiYXInO1xuaW1wb3J0IEludHJvSGVhZGVyIGZyb20gJy4vaW50cm9IZWFkZXInO1xuaW1wb3J0IERydWdTZWFyY2ggZnJvbSAnLi9kcnVnU2VhcmNoJztcbmltcG9ydCBGZWF0dXJlZFBoYXJtYWNpZXMgZnJvbSAnLi9mZWF0dXJlZFBoYXJtYWNpZXMnO1xuaW1wb3J0IEhvd0l0V29ya3MgZnJvbSAnLi9ob3dJdFdvcmtzJztcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnLi9jYWxsVG9BY3Rpb24nO1xuXG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxtYWluPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxIb21lTmF2YmFyIC8+XG4gICAgICAgIDxJbnRyb0hlYWRlciAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPERydWdTZWFyY2ggLz5cbiAgICAgIDxGZWF0dXJlZFBoYXJtYWNpZXMgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PGhyIC8+PC9kaXY+XG4gICAgICA8SG93SXRXb3JrcyAvPlxuICAgICAgPENhbGxUb0FjdGlvbiAvPlxuICAgIDwvbWFpbj5cblxuICAgIDxmb290ZXI+XG4gICAgICDCqSBOZWVtIEhlYWx0aFxuICAgIDwvZm9vdGVyPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNGN0ZERkIsICM3QkIyQjcpO1xuICAgICAgfVxuICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgIG9wYWNpdHk6IDAuMzg7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl19