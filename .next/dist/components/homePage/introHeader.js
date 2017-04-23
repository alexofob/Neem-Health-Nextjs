"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("/Users/alex/Labs/Nextjs/neem-health/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("/Users/alex/Labs/Nextjs/neem-health/node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IntroHeader = function IntroHeader() {
  return _react2.default.createElement(
    "div",
    { className: "introHeader", "data-jsx": 4264820768
    },
    _react2.default.createElement(
      "section",
      { role: "contentinfo", className: "main-message-wrapper", "data-jsx": 4264820768
      },
      _react2.default.createElement(
        "h1",
        { className: "main-message", "data-jsx": 4264820768
        },
        "Your Online Pharmacy"
      ),
      _react2.default.createElement(
        "p",
        { className: "sub-message", "data-jsx": 4264820768
        },
        "Get your drugs without the hassle."
      )
    ),
    _react2.default.createElement(
      "section",
      { role: "img", "data-jsx": 4264820768
      },
      _react2.default.createElement("img", {
        alt: "Main Message",
        src: "../../static/pharmacy.jpg",
        className: "message-image",
        "data-jsx": 4264820768
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 4264820768,
      css: "h1[data-jsx=\"4264820768\"] {font-size: 250%;}p[data-jsx=\"4264820768\"] {font-size: 150%;font-weight: 400;padding-top: 3%      }.introHeader[data-jsx=\"4264820768\"] {display:-webkit-flex; display:flex;-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;flex-wrap: wrap;justify-content: space-around;padding: 4% 0      }.main-message-wrapper[data-jsx=\"4264820768\"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;justify-content: center;padding: 0 12px;}@media (max-width: 847px) {h1[data-jsx=\"4264820768\"] {font-size: 200%;}p[data-jsx=\"4264820768\"] {font-size: 120%;}.message-image[data-jsx=\"4264820768\"] {height: 270px;width: 360px;}}@media (max-width: 767px) {h1[data-jsx=\"4264820768\"] {font-size: 180%;}.message-image[data-jsx=\"4264820768\"] {height: 240px;width: 320px;}.main-message-wrapper[data-jsx=\"4264820768\"] {height: 150px;padding: 0 12px;}}@media (max-width: 400px) {p[data-jsx=\"4264820768\"] {padding-top: 3%;font-size: 100%;}.main-message-wrapper[data-jsx=\"4264820768\"] {height: 120px;padding: 0 12px;}.message-image[data-jsx=\"4264820768\"] {height: 150px;width: 200px;}}"
    })
  );
};

exports.default = IntroHeader;