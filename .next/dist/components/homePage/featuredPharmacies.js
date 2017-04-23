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
      css: ".featured-pharmacies[data-jsx=\"2660637152\"] {padding: 4% 10%;}h2[data-jsx=\"2660637152\"] {font-weight: normal;text-align: center;}.container[data-jsx=\"2660637152\"] {padding: 10px 30px;}h3[data-jsx=\"2660637152\"] {background: #009688;color: #fff;font-size: 36px;line-height: 100px;margin: 10px;padding: 2%;position: relative;text-align: center;}"
    })
  );
};

exports.default = FeaturedPharmacies;