'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./CountDown.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 倒计时组件
 * 传入字段
 * 1、time={number} 倒计时时间 默认60
 * 2、onClick={function} 点击组件事件
 * 3、text={string} 默认显示文字
 */
var CountDown = function (_React$Component) {
  _inherits(CountDown, _React$Component);

  function CountDown(props) {
    _classCallCheck(this, CountDown);

    var _this = _possibleConstructorReturn(this, (CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call(this, props));

    _this.state = {
      localTime: ''
    };
    return _this;
  }

  _createClass(CountDown, [{
    key: 'btnFunc',
    value: function btnFunc() {
      // 点击事件
      var _props = this.props,
          time = _props.time,
          text = _props.text,
          onClick = _props.onClick;

      if (this.state.localTime !== '' && this.state.localTime !== text) {
        return false;
      }
      this.setState({ localTime: time || 60 }); // 倒计时默认参数
      this.countDown();
      onClick();
    }
  }, {
    key: 'countDown',
    value: function countDown() {
      var _this2 = this;

      // 倒计时事件
      var text = this.props.text;

      var timer = setInterval(function () {
        var copyTime = parseInt(_this2.state.localTime, 10) - 1;
        if (copyTime < 1) {
          _this2.setState({ localTime: text || '' });
          clearInterval(timer);
        } else {
          _this2.setState({ localTime: copyTime });
        }
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          className = _props2.className,
          text = _props2.text,
          onClick = _props2.onClick;

      return _react2.default.createElement(
        'div',
        {
          className: 'hi-count-root ' + (className ? [className] : '') + ' ' + (this.state.localTime !== '' && this.state.localTime !== text ? 'hi-count-fault' : ''),
          onClick: function onClick() {
            return _this3.btnFunc();
          },
          'aria-hidden': true
        },
        this.state.localTime || text || '请输入显示字段text'
      );
    }
  }]);

  return CountDown;
}(_react2.default.Component);

exports.default = CountDown;