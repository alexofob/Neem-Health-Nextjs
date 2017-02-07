"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("/Users/alex/Labs/Nextjs/patient/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("/Users/alex/Labs/Nextjs/patient/node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IntroHeader = function IntroHeader() {
  return _react2.default.createElement(
    "div",
    { className: "introHeader", "data-jsx": 2857397151
    },
    _react2.default.createElement(
      "section",
      { role: "contentinfo", className: "main-message-wrapper", "data-jsx": 2857397151
      },
      _react2.default.createElement(
        "h1",
        { className: "main-message", "data-jsx": 2857397151
        },
        "Your Online Pharmacy"
      ),
      _react2.default.createElement(
        "p",
        { className: "sub-message", "data-jsx": 2857397151
        },
        "Get your drugs without the hassle."
      )
    ),
    _react2.default.createElement(
      "section",
      { role: "img", "data-jsx": 2857397151
      },
      _react2.default.createElement("img", {
        alt: "Main Message",
        src: "../../static/pharmacy.jpg",
        className: "message-image",
        "data-jsx": 2857397151
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 2857397151,
      css: "h1[data-jsx=\"2857397151\"] {font-size: 250%;}p[data-jsx=\"2857397151\"] {font-size: 150%;font-weight: 400;padding-top: 3%      }.introHeader[data-jsx=\"2857397151\"] {display:-webkit-flex; display:flex;-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;flex-wrap: wrap;justify-content: space-around;padding: 4% 0      }.main-message-wrapper[data-jsx=\"2857397151\"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;justify-content: center;padding: 0 12px;}@media (max-width: 847px) {h1[data-jsx=\"2857397151\"] {font-size: 200%;}p[data-jsx=\"2857397151\"] {font-size: 120%;}.message-image[data-jsx=\"2857397151\"] {height: 270px;width: 360px;}}@media (max-width: 767px) {h1[data-jsx=\"2857397151\"] {font-size: 180%;}.message-image[data-jsx=\"2857397151\"] {height: 240px;width: 320px;}.main-message-wrapper[data-jsx=\"2857397151\"] {height: 150px;padding: 0 12px;}}@media (max-width: 400px) {p[data-jsx=\"2857397151\"] {padding-top: 3%        }.main-message-wrapper[data-jsx=\"2857397151\"] {height: 120px;padding: 0 12px;}.message-image[data-jsx=\"2857397151\"] {height: 150px;width: 200px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW50cm9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWdCLEFBQ04sMkJBQ2MsZ0JBQ2pCLENBRUUsMEJBQ2UsZ0JBQ0MsaUJBRWxCLHNCQUVhLHFDQUNFLG1DQUNFLDZEQUNjLDhCQUUvQixvQkFFc0IsOENBQ1AsbUNBQ1Msa0ZBQ0gsb0JBQ0ksd0JBQ1IsZ0JBQ2pCLENBRTBCLDJCQUNyQiwyQkFDYyxnQkFDakIsQ0FFRSwwQkFDZSxnQkFDakIsQ0FFZSx1Q0FDQSxjQUNELGFBQ2QsQ0FDRixDQUUwQiwyQkFFckIsMkJBQ2MsZ0JBQ2pCLENBRWUsdUNBQ0EsY0FDRCxhQUNkLENBRXNCLDhDQUNQLGNBQ0UsZ0JBQ2pCLENBQ0YsQ0FFMEIsMkJBRXRCLDBCQUVGLHdCQUVzQiw4Q0FDUCxjQUNFLGdCQUNqQixDQUVlLHVDQUNBLGNBQ0QsYUFDZCxDQUNGIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZVBhZ2UvaW50cm9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXgvTGFicy9OZXh0anMvcGF0aWVudCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEludHJvSGVhZGVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImludHJvSGVhZGVyXCI+XG4gICAgPHNlY3Rpb24gcm9sZT1cImNvbnRlbnRpbmZvXCIgY2xhc3NOYW1lPVwibWFpbi1tZXNzYWdlLXdyYXBwZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYWluLW1lc3NhZ2VcIj5Zb3VyIE9ubGluZSBQaGFybWFjeTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJzdWItbWVzc2FnZVwiPkdldCB5b3VyIGRydWdzIHdpdGhvdXQgdGhlIGhhc3NsZS48L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gcm9sZT1cImltZ1wiID5cbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiTWFpbiBNZXNzYWdlXCJcbiAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL3BoYXJtYWN5LmpwZ1wiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2UtaW1hZ2VcIlxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDMlXG4gICAgICB9XG5cbiAgICAgIC5pbnRyb0hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIHBhZGRpbmc6IDQlIDBcbiAgICAgIH1cblxuICAgICAgLm1haW4tbWVzc2FnZS13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0N3B4KSB7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEyMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubWVzc2FnZS1pbWFnZSB7XG4gICAgICAgICAgaGVpZ2h0OiAyNzBweDtcbiAgICAgICAgICB3aWR0aDogMzYwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTgwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlLWltYWdlIHtcbiAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLW1lc3NhZ2Utd3JhcHBlciB7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMlXG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi1tZXNzYWdlLXdyYXBwZXIge1xuICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UtaW1hZ2Uge1xuICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW50cm9IZWFkZXI7XG4iXX0= */\n/*@ sourceURL=components/homePage/introHeader.js */"
    })
  );
};

exports.default = IntroHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UvaW50cm9IZWFkZXIuanMiXSwibmFtZXMiOlsiSW50cm9IZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWM7QUFBQSxTQUNsQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGFBQWY7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFTLE1BQUssYUFBZCxFQUE0QixXQUFVLHNCQUF0QztBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxjQUFkO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBRyxXQUFVLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFGRixLQURGO0FBTUU7QUFBQTtBQUFBLFFBQVMsTUFBSyxLQUFkO0FBQUE7QUFDRTtBQUNFLGFBQUksY0FETjtBQUVFLGFBQUksMkJBRk47QUFHRSxtQkFBVSxlQUhaO0FBQUE7QUFBQTtBQURGLEtBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRGtCO0FBQUEsQ0FBcEI7O2tCQThGZUEsVyIsImZpbGUiOiJpbnRyb0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxleC9MYWJzL05leHRqcy9wYXRpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSW50cm9IZWFkZXIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9IZWFkZXJcIj5cbiAgICA8c2VjdGlvbiByb2xlPVwiY29udGVudGluZm9cIiBjbGFzc05hbWU9XCJtYWluLW1lc3NhZ2Utd3JhcHBlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW4tbWVzc2FnZVwiPllvdXIgT25saW5lIFBoYXJtYWN5PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1tZXNzYWdlXCI+R2V0IHlvdXIgZHJ1Z3Mgd2l0aG91dCB0aGUgaGFzc2xlLjwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiByb2xlPVwiaW1nXCIgPlxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9XCJNYWluIE1lc3NhZ2VcIlxuICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvcGhhcm1hY3kuanBnXCJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZS1pbWFnZVwiXG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyNTAlO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMyVcbiAgICAgIH1cblxuICAgICAgLmludHJvSGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgcGFkZGluZzogNCUgMFxuICAgICAgfVxuXG4gICAgICAubWFpbi1tZXNzYWdlLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODQ3cHgpIHtcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlLWltYWdlIHtcbiAgICAgICAgICBoZWlnaHQ6IDI3MHB4O1xuICAgICAgICAgIHdpZHRoOiAzNjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxODAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UtaW1hZ2Uge1xuICAgICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tbWVzc2FnZS13cmFwcGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMyVcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLW1lc3NhZ2Utd3JhcHBlciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWVzc2FnZS1pbWFnZSB7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbnRyb0hlYWRlcjtcbiJdfQ==