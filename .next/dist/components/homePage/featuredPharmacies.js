"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("/Users/alex/Labs/Nextjs/neem-health/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js");

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
      css: ".featured-pharmacies[data-jsx=\"2660637152\"] {padding: 4% 10%;}h2[data-jsx=\"2660637152\"] {font-weight: normal;text-align: center;}.container[data-jsx=\"2660637152\"] {padding: 10px 30px;}h3[data-jsx=\"2660637152\"] {background: #009688;color: #fff;font-size: 36px;line-height: 100px;margin: 10px;padding: 2%;position: relative;text-align: center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvZmVhdHVyZWRQaGFybWFjaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDa0IsQUFDWSw2Q0FDSixnQkFDakIsQ0FDRywyQkFDa0Isb0JBQ0QsbUJBQ3BCLENBQ1csbUNBQ1MsbUJBQ3BCLENBQ0csMkJBQ2tCLG9CQUNSLFlBQ0ksZ0JBQ0csbUJBQ04sYUFDRCxZQUNPLG1CQUNBLG1CQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL2hvbWVQYWdlL2ZlYXR1cmVkUGhhcm1hY2llcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9uZWVtLWhlYWx0aCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xuXG5cbmNvbnN0IEZlYXR1cmVkUGhhcm1hY2llcyA9ICgpID0+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICB9LFxuICAgIH0sIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDY0MSxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICB9LFxuICAgIH0sIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICB9LFxuICAgIH1dLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWQtcGhhcm1hY2llc1wiPlxuICAgICAgPGgyPkZlYXR1cmVkIFBoYXJtYWNpZXM8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9ID5cbiAgICAgICAgICA8ZGl2PjxoMz4xPC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz4yPC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz4zPC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz40PC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz41PC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz42PC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz43PC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz44PC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz45PC9oMz48L2Rpdj5cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZlYXR1cmVkLXBoYXJtYWNpZXMge1xuICAgICAgICAgIHBhZGRpbmc6IDQlIDEwJTtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5Njg4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRQaGFybWFjaWVzO1xuIl19 */\n/*@ sourceURL=components/homePage/featuredPharmacies.js */"
    })
  );
};

exports.default = FeaturedPharmacies;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvZmVhdHVyZWRQaGFybWFjaWVzLmpzIl0sIm5hbWVzIjpbIkZlYXR1cmVkUGhhcm1hY2llcyIsInNldHRpbmdzIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInN3aXBlVG9TbGlkZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaW5maW5pdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUdBLElBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsTUFBTUMsV0FBVztBQUNmQyxXQUFPLEdBRFE7QUFFZkMsa0JBQWMsQ0FGQztBQUdmQyxvQkFBZ0IsQ0FIRDtBQUlmQyxrQkFBYyxJQUpDO0FBS2ZDLGdCQUFZLENBQUM7QUFDWEMsa0JBQVksSUFERDtBQUVYTixnQkFBVTtBQUNSRSxzQkFBYyxDQUROO0FBRVJDLHdCQUFnQixDQUZSO0FBR1JJLGtCQUFVO0FBSEY7QUFGQyxLQUFELEVBT1Q7QUFDREQsa0JBQVksR0FEWDtBQUVETixnQkFBVTtBQUNSRSxzQkFBYyxDQUROO0FBRVJDLHdCQUFnQjtBQUZSO0FBRlQsS0FQUyxFQWFUO0FBQ0RHLGtCQUFZLEdBRFg7QUFFRE4sZ0JBQVU7QUFDUkUsc0JBQWMsQ0FETjtBQUVSQyx3QkFBZ0I7QUFGUjtBQUZULEtBYlM7QUFMRyxHQUFqQjtBQTBCQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUscUJBQWY7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFBQTtBQUNFO0FBQUE7QUFBWUgsZ0JBQVo7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTCxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUwsU0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMLFNBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTCxTQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUwsU0FMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMLFNBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTCxTQVBGO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUwsU0FSRjtBQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBVEY7QUFERixLQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURGO0FBeUNELENBcEVEOztrQkFzRWVELGtCIiwiZmlsZSI6ImZlYXR1cmVkUGhhcm1hY2llcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9uZWVtLWhlYWx0aCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xuXG5cbmNvbnN0IEZlYXR1cmVkUGhhcm1hY2llcyA9ICgpID0+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICB9LFxuICAgIH0sIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDY0MSxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICB9LFxuICAgIH0sIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICB9LFxuICAgIH1dLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWQtcGhhcm1hY2llc1wiPlxuICAgICAgPGgyPkZlYXR1cmVkIFBoYXJtYWNpZXM8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9ID5cbiAgICAgICAgICA8ZGl2PjxoMz4xPC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz4yPC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz4zPC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz40PC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz41PC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz42PC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz43PC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz44PC9oMz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxoMz45PC9oMz48L2Rpdj5cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZlYXR1cmVkLXBoYXJtYWNpZXMge1xuICAgICAgICAgIHBhZGRpbmc6IDQlIDEwJTtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5Njg4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRQaGFybWFjaWVzO1xuIl19