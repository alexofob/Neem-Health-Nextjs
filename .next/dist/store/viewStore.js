'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewStore = undefined;

var _defineProperty = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = require('/Users/alex/Labs/Nextjs/patient/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;

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

  _initDefineProp(this, 'dialogOpen', _descriptor4, this);

  _initDefineProp(this, 'dialogContent', _descriptor5, this);

  _initDefineProp(this, 'notifyUser', _descriptor6, this);

  _initDefineProp(this, 'openDrawer', _descriptor7, this);

  _initDefineProp(this, 'closeDrawer', _descriptor8, this);

  _initDefineProp(this, 'openDialog', _descriptor9, this);

  _initDefineProp(this, 'closeDialog', _descriptor10, this);

  _initDefineProp(this, 'showLoginDialog', _descriptor11, this);

  _initDefineProp(this, 'showValidateLoginDialog', _descriptor12, this);
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
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'dialogOpen', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'dialogContent', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 'login';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'notifyUser', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (message) {
      _this.snackbarMessage = message;
      _this.snackbarOpen = true;
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'openDrawer', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      return _this2.drawerOpen = true;
    };
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'closeDrawer', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      return _this3.drawerOpen = false;
    };
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'openDialog', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      return _this4.dialogOpen = true;
    };
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'closeDialog', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function () {
      return _this5.dialogOpen = false;
    };
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'showLoginDialog', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function () {
      return _this6.dialogContent = 'login';
    };
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'showValidateLoginDialog', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function () {
      return _this7.dialogContent = 'validateLogin';
    };
  }
})), _class);


var viewStore = new ViewStore();

exports.default = viewStore;
exports.ViewStore = ViewStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlL3ZpZXdTdG9yZS5qcyJdLCJuYW1lcyI6WyJWaWV3U3RvcmUiLCJtZXNzYWdlIiwic25hY2tiYXJNZXNzYWdlIiwic25hY2tiYXJPcGVuIiwiZHJhd2VyT3BlbiIsImRpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50Iiwidmlld1N0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQUVnQyxLOzs7OztXQUNFLEc7Ozs7O1dBQ0osSzs7Ozs7V0FDQSxLOzs7OztXQUNFLE87Ozs7Ozs7V0FHZixVQUFDQyxPQUFELEVBQXFCO0FBQ3hDLFlBQUtDLGVBQUwsR0FBdUJELE9BQXZCO0FBQ0EsWUFBS0UsWUFBTCxHQUFvQixJQUFwQjtBQUNELEs7Ozs7Ozs7V0FFb0I7QUFBQSxhQUFPLE9BQUtDLFVBQUwsR0FBa0IsSUFBekI7QUFBQSxLOzs7Ozs7O1dBRUM7QUFBQSxhQUFPLE9BQUtBLFVBQUwsR0FBa0IsS0FBekI7QUFBQSxLOzs7Ozs7O1dBRUQ7QUFBQSxhQUFPLE9BQUtDLFVBQUwsR0FBa0IsSUFBekI7QUFBQSxLOzs7Ozs7O1dBRUM7QUFBQSxhQUFPLE9BQUtBLFVBQUwsR0FBa0IsS0FBekI7QUFBQSxLOzs7Ozs7O1dBRUk7QUFBQSxhQUFPLE9BQUtDLGFBQUwsR0FBcUIsT0FBNUI7QUFBQSxLOzs7Ozs7O1dBRVE7QUFBQSxhQUFPLE9BQUtBLGFBQUwsR0FBcUIsZUFBNUI7QUFBQSxLOzs7OztBQUdwQyxJQUFNQyxZQUFZLElBQUlQLFNBQUosRUFBbEI7O2tCQUVlTyxTO1FBRU5QLFMsR0FBQUEsUyIsImZpbGUiOiJ2aWV3U3RvcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZXgvTGFicy9OZXh0anMvcGF0aWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9ic2VydmFibGUsIGFjdGlvbiB9IGZyb20gJ21vYngnO1xuXG5jbGFzcyBWaWV3U3RvcmUge1xuXG4gIEBvYnNlcnZhYmxlIHNuYWNrYmFyT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBAb2JzZXJ2YWJsZSBzbmFja2Jhck1lc3NhZ2U6IHN0cmluZyA9ICcgJztcbiAgQG9ic2VydmFibGUgZHJhd2VyT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBAb2JzZXJ2YWJsZSBkaWFsb2dPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBvYnNlcnZhYmxlIGRpYWxvZ0NvbnRlbnQ6IHN0cmluZyA9ICdsb2dpbic7XG5cblxuICBAYWN0aW9uIG5vdGlmeVVzZXIgPSAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5zbmFja2Jhck1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc25hY2tiYXJPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIEBhY3Rpb24gb3BlbkRyYXdlciA9ICgpID0+ICh0aGlzLmRyYXdlck9wZW4gPSB0cnVlKTtcblxuICBAYWN0aW9uIGNsb3NlRHJhd2VyID0gKCkgPT4gKHRoaXMuZHJhd2VyT3BlbiA9IGZhbHNlKTtcblxuICBAYWN0aW9uIG9wZW5EaWFsb2cgPSAoKSA9PiAodGhpcy5kaWFsb2dPcGVuID0gdHJ1ZSk7XG5cbiAgQGFjdGlvbiBjbG9zZURpYWxvZyA9ICgpID0+ICh0aGlzLmRpYWxvZ09wZW4gPSBmYWxzZSk7XG5cbiAgQGFjdGlvbiBzaG93TG9naW5EaWFsb2cgPSAoKSA9PiAodGhpcy5kaWFsb2dDb250ZW50ID0gJ2xvZ2luJyk7XG5cbiAgQGFjdGlvbiBzaG93VmFsaWRhdGVMb2dpbkRpYWxvZyA9ICgpID0+ICh0aGlzLmRpYWxvZ0NvbnRlbnQgPSAndmFsaWRhdGVMb2dpbicpO1xufVxuXG5jb25zdCB2aWV3U3RvcmUgPSBuZXcgVmlld1N0b3JlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXdTdG9yZTtcblxuZXhwb3J0IHsgVmlld1N0b3JlIH07XG4iXX0=