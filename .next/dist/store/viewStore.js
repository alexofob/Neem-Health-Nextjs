'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewStore = undefined;

var _defineProperty = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _mobx = require('mobx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  (0, _defineProperty2.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ViewStore = (_class = function ViewStore() {
  (0, _classCallCheck3.default)(this, ViewStore);

  _initDefineProp(this, 'snackbarOpen', _descriptor, this);

  _initDefineProp(this, 'snackbarMessage', _descriptor2, this);

  _initDefineProp(this, 'drawerOpen', _descriptor3, this);

  _initDefineProp(this, 'notifyUser', _descriptor4, this);

  _initDefineProp(this, 'openDrawer', _descriptor5, this);

  _initDefineProp(this, 'closeDrawer', _descriptor6, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'snackbarOpen', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'snackbarMessage', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return ' ';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'drawerOpen', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'notifyUser', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (message) {
      _this.snackbarMessage = message;
      _this.snackbarOpen = true;
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'openDrawer', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      return _this2.drawerOpen = true;
    };
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'closeDrawer', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      return _this3.drawerOpen = false;
    };
  }
})), _class);


var viewStore = new ViewStore();

exports.default = viewStore;
exports.ViewStore = ViewStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlL3ZpZXdTdG9yZS5qcyJdLCJuYW1lcyI6WyJWaWV3U3RvcmUiLCJtZXNzYWdlIiwic25hY2tiYXJNZXNzYWdlIiwic25hY2tiYXJPcGVuIiwiZHJhd2VyT3BlbiIsInZpZXdTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FFZ0MsSzs7Ozs7V0FDRSxHOzs7OztXQUNKLEs7Ozs7Ozs7V0FHYixVQUFDQyxPQUFELEVBQXFCO0FBQ3hDLFlBQUtDLGVBQUwsR0FBdUJELE9BQXZCO0FBQ0EsWUFBS0UsWUFBTCxHQUFvQixJQUFwQjtBQUNELEs7Ozs7Ozs7V0FFb0I7QUFBQSxhQUFPLE9BQUtDLFVBQUwsR0FBa0IsSUFBekI7QUFBQSxLOzs7Ozs7O1dBRUM7QUFBQSxhQUFPLE9BQUtBLFVBQUwsR0FBa0IsS0FBekI7QUFBQSxLOzs7OztBQUd4QixJQUFNQyxZQUFZLElBQUlMLFNBQUosRUFBbEI7O2tCQUVlSyxTO1FBRU5MLFMsR0FBQUEsUyIsImZpbGUiOiJ2aWV3U3RvcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXgvTGFicy9OZXh0anMvcGF0aWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9ic2VydmFibGUsIGFjdGlvbiB9IGZyb20gJ21vYngnO1xuXG5jbGFzcyBWaWV3U3RvcmUge1xuXG4gIEBvYnNlcnZhYmxlIHNuYWNrYmFyT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBAb2JzZXJ2YWJsZSBzbmFja2Jhck1lc3NhZ2U6IHN0cmluZyA9ICcgJztcbiAgQG9ic2VydmFibGUgZHJhd2VyT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgQGFjdGlvbiBub3RpZnlVc2VyID0gKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuc25hY2tiYXJNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnNuYWNrYmFyT3BlbiA9IHRydWU7XG4gIH1cblxuICBAYWN0aW9uIG9wZW5EcmF3ZXIgPSAoKSA9PiAodGhpcy5kcmF3ZXJPcGVuID0gdHJ1ZSk7XG5cbiAgQGFjdGlvbiBjbG9zZURyYXdlciA9ICgpID0+ICh0aGlzLmRyYXdlck9wZW4gPSBmYWxzZSk7XG59XG5cbmNvbnN0IHZpZXdTdG9yZSA9IG5ldyBWaWV3U3RvcmUoKTtcblxuZXhwb3J0IGRlZmF1bHQgdmlld1N0b3JlO1xuXG5leHBvcnQgeyBWaWV3U3RvcmUgfTtcbiJdfQ==