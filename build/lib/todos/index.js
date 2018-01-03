'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todos = function (_Component) {
  _inherits(Todos, _Component);

  function Todos() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Todos);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Todos.__proto__ || Object.getPrototypeOf(Todos)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      todos: []
    }, _this.localAddTodo = function (v) {
      var todos = _this.state.todos;

      var text = _this.DOMInput.value;
      if (v.key === 'Enter' && text && !todos.some(function (item) {
        return item.text === text;
      })) {
        var newTodos = new (Function.prototype.bind.apply(Array, [null].concat(_toConsumableArray(todos))))();
        newTodos.unshift({
          text: text,
          hasCompleted: false
        });
        _this.setState({ todos: newTodos });
        _this.DOMInput.value = '';
      }
    }, _this.localAddTodoClick = function () {
      var todos = _this.state.todos;

      var text = _this.DOMInput.value;
      var newTodos = new (Function.prototype.bind.apply(Array, [null].concat(_toConsumableArray(todos))))();
      newTodos.unshift({
        text: text,
        hasCompleted: false
      });
      _this.setState({ todos: newTodos });
      _this.DOMInput.value = '';
    }, _this.handleComplete = function (key) {
      var newTodos = new (Function.prototype.bind.apply(Array, [null].concat(_toConsumableArray(_this.state.todos))))();
      newTodos[key].hasCompleted = !newTodos[key].hasCompleted;
      _this.setState({ todos: newTodos });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Todos, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var todos = this.state.todos;

      return _react2.default.createElement(
        'div',
        { className: 'todo-root' },
        _react2.default.createElement(
          'div',
          { className: 'todo-root-title' },
          _react2.default.createElement(
            'h1',
            null,
            'Todos'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-box' },
          _react2.default.createElement('input', {
            ref: function ref(e) {
              _this2.DOMInput = e;
            },
            type: 'text',
            onKeyUp: this.localAddTodo
          })
        ),
        _react2.default.createElement(
          'ul',
          null,
          todos.map(function (item, key) {
            return _react2.default.createElement(
              'li',
              {
                key: item.text,
                'aria-hidden': true,
                className: item.hasCompleted ? 'active' : '',
                onClick: _this2.handleComplete.bind(_this2, key)
              },
              item.text
            );
          })
        )
      );
    }
  }]);

  return Todos;
}(_react.Component);

exports.default = Todos;