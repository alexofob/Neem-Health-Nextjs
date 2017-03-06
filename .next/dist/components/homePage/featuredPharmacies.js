"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("/Users/alex/Labs/Nextjs/patient/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactSlick = require("react-slick");

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeaturedPharmacies = function FeaturedPharmacies() {
  var settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 641,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return _react2.default.createElement(
    "div",
    { className: "featured-pharmacies", "data-jsx": 2660637152
    },
    _react2.default.createElement(
      "h2",
      {
        "data-jsx": 2660637152
      },
      "Featured Pharmacies"
    ),
    _react2.default.createElement(
      "div",
      { className: "container", "data-jsx": 2660637152
      },
      _react2.default.createElement(
        _reactSlick2.default,
        settings,
        _react2.default.createElement(
          "div",
          {
            "data-jsx": 2660637152
          },
          _react2.default.createElement(
            "h3",
            {
              "data-jsx": 2660637152
            },
            "1"
          )
        ),
        _react2.default.createElement(
          "div",
          {
            "data-jsx": 2660637152
          },
          _react2.default.createElement(
            "h3",
            {
              "data-jsx": 2660637152
            },
            "2"
          )
        ),
        _react2.default.createElement(
          "div",
          {
            "data-jsx": 2660637152
          },
          _react2.default.createElement(
            "h3",
            {
              "data-jsx": 2660637152
            },
            "3"
          )
        ),
        _react2.default.createElement(
          "div",
          {
            "data-jsx": 2660637152
          },
          _react2.default.createElement(
            "h3",
            {
              "data-jsx": 2660637152
            },
            "4"
          )
        ),
        _react2.default.createElement(
          "div",
          {
            "data-jsx": 2660637152
          },
          _react2.default.createElement(
            "h3",
            {
              "data-jsx": 2660637152
            },
            "5"
          )
        ),
        _react2.default.createElement(
          "div",
          {
            "data-jsx": 2660637152
          },
          _react2.default.createElement(
            "h3",
            {
              "data-jsx": 2660637152
            },
            "6"
          )
        ),
        _react2.default.createElement(
          "div",
          {
            "data-jsx": 2660637152
          },
          _react2.default.createElement(
            "h3",
            {
              "data-jsx": 2660637152
            },
            "7"
          )
        ),
        _react2.default.createElement(
          "div",
          {
            "data-jsx": 2660637152
          },
          _react2.default.createElement(
            "h3",
            {
              "data-jsx": 2660637152
            },
            "8"
          )
        ),
        _react2.default.createElement(
          "div",
          {
            "data-jsx": 2660637152
          },
          _react2.default.createElement(
            "h3",
            {
              "data-jsx": 2660637152
            },
            "9"
          )
        )
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 2660637152,
      css: ".featured-pharmacies[data-jsx=\"2660637152\"] {padding: 4% 10%;}h2[data-jsx=\"2660637152\"] {font-weight: normal;text-align: center;}.container[data-jsx=\"2660637152\"] {padding: 10px 30px;}h3[data-jsx=\"2660637152\"] {background: #009688;color: #fff;font-size: 36px;line-height: 100px;margin: 10px;padding: 2%;position: relative;text-align: center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvZmVhdHVyZWRQaGFybWFjaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDa0IsQUFDWSw2Q0FDSixnQkFDakIsQ0FDRywyQkFDa0Isb0JBQ0QsbUJBQ3BCLENBQ1csbUNBQ1MsbUJBQ3BCLENBQ0csMkJBQ2tCLG9CQUNSLFlBQ0ksZ0JBQ0csbUJBQ04sYUFDRCxZQUNPLG1CQUNBLG1CQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL2hvbWVQYWdlL2ZlYXR1cmVkUGhhcm1hY2llcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5cblxuY29uc3QgRmVhdHVyZWRQaGFybWFjaWVzID0gKCkgPT4ge1xuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBzd2lwZVRvU2xpZGU6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSwge1xuICAgICAgYnJlYWtwb2ludDogNjQxLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIH0sXG4gICAgfSwge1xuICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIH0sXG4gICAgfV0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZC1waGFybWFjaWVzXCI+XG4gICAgICA8aDI+RmVhdHVyZWQgUGhhcm1hY2llczwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gPlxuICAgICAgICAgIDxkaXY+PGgzPjE8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjI8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjM8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjQ8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjU8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjY8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjc8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjg8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjk8L2gzPjwvZGl2PlxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZmVhdHVyZWQtcGhhcm1hY2llcyB7XG4gICAgICAgICAgcGFkZGluZzogNCUgMTAlO1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDk2ODg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZFBoYXJtYWNpZXM7XG4iXX0= */\n/*@ sourceURL=components/homePage/featuredPharmacies.js */"
    })
  );
};

exports.default = FeaturedPharmacies;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvZmVhdHVyZWRQaGFybWFjaWVzLmpzIl0sIm5hbWVzIjpbIkZlYXR1cmVkUGhhcm1hY2llcyIsInNldHRpbmdzIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInN3aXBlVG9TbGlkZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaW5maW5pdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUdBLElBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsTUFBTUMsV0FBVztBQUNmQyxXQUFPLEdBRFE7QUFFZkMsa0JBQWMsQ0FGQztBQUdmQyxvQkFBZ0IsQ0FIRDtBQUlmQyxrQkFBYyxJQUpDO0FBS2ZDLGdCQUFZLENBQUM7QUFDWEMsa0JBQVksSUFERDtBQUVYTixnQkFBVTtBQUNSRSxzQkFBYyxDQUROO0FBRVJDLHdCQUFnQixDQUZSO0FBR1JJLGtCQUFVO0FBSEY7QUFGQyxLQUFELEVBT1Q7QUFDREQsa0JBQVksR0FEWDtBQUVETixnQkFBVTtBQUNSRSxzQkFBYyxDQUROO0FBRVJDLHdCQUFnQjtBQUZSO0FBRlQsS0FQUyxFQWFUO0FBQ0RHLGtCQUFZLEdBRFg7QUFFRE4sZ0JBQVU7QUFDUkUsc0JBQWMsQ0FETjtBQUVSQyx3QkFBZ0I7QUFGUjtBQUZULEtBYlM7QUFMRyxHQUFqQjtBQTBCQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUscUJBQWY7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFBQTtBQUNFO0FBQUE7QUFBWUgsZ0JBQVo7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTCxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUwsU0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMLFNBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTCxTQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUwsU0FMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMLFNBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTCxTQVBGO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUwsU0FSRjtBQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBVEY7QUFERixLQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURGO0FBeUNELENBcEVEOztrQkFzRWVELGtCIiwiZmlsZSI6ImZlYXR1cmVkUGhhcm1hY2llcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5cblxuY29uc3QgRmVhdHVyZWRQaGFybWFjaWVzID0gKCkgPT4ge1xuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBzd2lwZVRvU2xpZGU6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSwge1xuICAgICAgYnJlYWtwb2ludDogNjQxLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIH0sXG4gICAgfSwge1xuICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIH0sXG4gICAgfV0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZC1waGFybWFjaWVzXCI+XG4gICAgICA8aDI+RmVhdHVyZWQgUGhhcm1hY2llczwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gPlxuICAgICAgICAgIDxkaXY+PGgzPjE8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjI8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjM8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjQ8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjU8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjY8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjc8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjg8L2gzPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGgzPjk8L2gzPjwvZGl2PlxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZmVhdHVyZWQtcGhhcm1hY2llcyB7XG4gICAgICAgICAgcGFkZGluZzogNCUgMTAlO1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDk2ODg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZFBoYXJtYWNpZXM7XG4iXX0=