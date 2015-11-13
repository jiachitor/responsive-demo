(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };

  var Event = {
    CLOSE: 'close' + EVENT_KEY,
    CLOSED: 'closed' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    IN: 'in'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = (function () {
    function Alert(element) {
      _classCallCheck(this, Alert);

      this._element = element;
    }

    // getters

    _createClass(Alert, [{
      key: 'close',

      // public

      value: function close(element) {
        element = element || this._element;

        var rootElement = this._getRootElement(element);
        var customEvent = this._triggerCloseEvent(rootElement);

        if (customEvent.isDefaultPrevented()) {
          return;
        }

        this._removeElement(rootElement);
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }

      // private

    }, {
      key: '_getRootElement',
      value: function _getRootElement(element) {
        var selector = _util2.default.getSelectorFromElement(element);
        var parent = false;

        if (selector) {
          parent = $(selector)[0];
        }

        if (!parent) {
          parent = $(element).closest('.' + ClassName.ALERT)[0];
        }

        return parent;
      }
    }, {
      key: '_triggerCloseEvent',
      value: function _triggerCloseEvent(element) {
        var closeEvent = $.Event(Event.CLOSE);

        $(element).trigger(closeEvent);
        return closeEvent;
      }
    }, {
      key: '_removeElement',
      value: function _removeElement(element) {
        $(element).removeClass(ClassName.IN);

        if (!_util2.default.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
          this._destroyElement(element);
          return;
        }

        $(element).one(_util2.default.TRANSITION_END, $.proxy(this._destroyElement, this, element)).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: '_destroyElement',
      value: function _destroyElement(element) {
        $(element).detach().trigger(Event.CLOSED).remove();
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Alert(this);
            $element.data(DATA_KEY, data);
          }

          if (config === 'close') {
            data[config](this);
          }
        });
      }
    }, {
      key: '_handleDismiss',
      value: function _handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }

          alertInstance.close(this);
        };
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  })();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
})(jQuery);

exports.default = Alert;

},{"./util":11}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'button';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };

  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = (function () {
    function Button(element) {
      _classCallCheck(this, Button);

      this._element = element;
    }

    // getters

    _createClass(Button, [{
      key: 'toggle',

      // public

      value: function toggle() {
        var triggerChangeEvent = true;
        var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

        if (rootElement) {
          var input = $(this._element).find(Selector.INPUT)[0];

          if (input) {
            if (input.type === 'radio') {
              if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

                if (activeElement) {
                  $(activeElement).removeClass(ClassName.ACTIVE);
                }
              }
            }

            if (triggerChangeEvent) {
              input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
              $(this._element).trigger('change');
            }
          }
        } else {
          this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName.ACTIVE);
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new Button(this);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggle') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  })();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();

    var button = event.target;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector.BUTTON)[0];
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface;
  $.fn[NAME].Constructor = Button;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
})(jQuery);

exports.default = Button;

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'carousel';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };

  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };

  var Direction = {
    NEXT: 'next',
    PREVIOUS: 'prev'
  };

  var Event = {
    SLIDE: 'slide' + EVENT_KEY,
    SLID: 'slid' + EVENT_KEY,
    KEYDOWN: 'keydown' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'right',
    LEFT: 'left',
    ITEM: 'carousel-item'
  };

  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.next, .prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = (function () {
    function Carousel(element, config) {
      _classCallCheck(this, Carousel);

      this._items = null;
      this._interval = null;
      this._activeElement = null;

      this._isPaused = false;
      this._isSliding = false;

      this._config = this._getConfig(config);
      this._element = $(element)[0];
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    }

    // getters

    _createClass(Carousel, [{
      key: 'next',

      // public

      value: function next() {
        if (!this._isSliding) {
          this._slide(Direction.NEXT);
        }
      }
    }, {
      key: 'prev',
      value: function prev() {
        if (!this._isSliding) {
          this._slide(Direction.PREVIOUS);
        }
      }
    }, {
      key: 'pause',
      value: function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if ($(this._element).find(Selector.NEXT_PREV)[0] && _util2.default.supportsTransitionEnd()) {
          _util2.default.triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      }
    }, {
      key: 'cycle',
      value: function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config.interval && !this._isPaused) {
          this._interval = setInterval($.proxy(this.next, this), this._config.interval);
        }
      }
    }, {
      key: 'to',
      value: function to(index) {
        var _this = this;

        this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          $(this._element).one(Event.SLID, function () {
            return _this.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var direction = index > activeIndex ? Direction.NEXT : Direction.PREVIOUS;

        this._slide(direction, this._items[index]);
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $(this._element).off(EVENT_KEY);
        $.removeData(this._element, DATA_KEY);

        this._items = null;
        this._config = null;
        this._element = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        _util2.default.typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_addEventListeners',
      value: function _addEventListeners() {
        if (this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN, $.proxy(this._keydown, this));
        }

        if (this._config.pause === 'hover' && !('ontouchstart' in document.documentElement)) {
          $(this._element).on(Event.MOUSEENTER, $.proxy(this.pause, this)).on(Event.MOUSELEAVE, $.proxy(this.cycle, this));
        }
      }
    }, {
      key: '_keydown',
      value: function _keydown(event) {
        event.preventDefault();

        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        switch (event.which) {
          case 37:
            this.prev();break;
          case 39:
            this.next();break;
          default:
            return;
        }
      }
    }, {
      key: '_getItemIndex',
      value: function _getItemIndex(element) {
        this._items = $.makeArray($(element).parent().find(Selector.ITEM));
        return this._items.indexOf(element);
      }
    }, {
      key: '_getItemByDirection',
      value: function _getItemByDirection(direction, activeElement) {
        var isNextDirection = direction === Direction.NEXT;
        var isPrevDirection = direction === Direction.PREVIOUS;
        var activeIndex = this._getItemIndex(activeElement);
        var lastItemIndex = this._items.length - 1;
        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

        if (isGoingToWrap && !this._config.wrap) {
          return activeElement;
        }

        var delta = direction === Direction.PREVIOUS ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this._items.length;

        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
      }
    }, {
      key: '_triggerSlideEvent',
      value: function _triggerSlideEvent(relatedTarget, directionalClassname) {
        var slideEvent = $.Event(Event.SLIDE, {
          relatedTarget: relatedTarget,
          direction: directionalClassname
        });

        $(this._element).trigger(slideEvent);

        return slideEvent;
      }
    }, {
      key: '_setActiveIndicatorElement',
      value: function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

          if (nextIndicator) {
            $(nextIndicator).addClass(ClassName.ACTIVE);
          }
        }
      }
    }, {
      key: '_slide',
      value: function _slide(direction, element) {
        var _this2 = this;

        var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

        var isCycling = Boolean(this._interval);

        var directionalClassName = direction === Direction.NEXT ? ClassName.LEFT : ClassName.RIGHT;

        if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
          this._isSliding = false;
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, directionalClassName);
        if (slideEvent.isDefaultPrevented()) {
          return;
        }

        if (!activeElement || !nextElement) {
          // some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        var slidEvent = $.Event(Event.SLID, {
          relatedTarget: nextElement,
          direction: directionalClassName
        });

        if (_util2.default.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {

          $(nextElement).addClass(direction);

          _util2.default.reflow(nextElement);

          $(activeElement).addClass(directionalClassName);
          $(nextElement).addClass(directionalClassName);

          $(activeElement).one(_util2.default.TRANSITION_END, function () {
            $(nextElement).removeClass(directionalClassName).removeClass(direction);

            $(nextElement).addClass(ClassName.ACTIVE);

            $(activeElement).removeClass(ClassName.ACTIVE).removeClass(direction).removeClass(directionalClassName);

            _this2._isSliding = false;

            setTimeout(function () {
              return $(_this2._element).trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          $(activeElement).removeClass(ClassName.ACTIVE);
          $(nextElement).addClass(ClassName.ACTIVE);

          this._isSliding = false;
          $(this._element).trigger(slidEvent);
        }

        if (isCycling) {
          this.cycle();
        }
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, Default, $(this).data());

          if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
            $.extend(_config, config);
          }

          var action = typeof config === 'string' ? config : _config.slide;

          if (!data) {
            data = new Carousel(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'number') {
            data.to(config);
          } else if (action) {
            data[action]();
          } else if (_config.interval) {
            data.pause();
            data.cycle();
          }
        });
      }
    }, {
      key: '_dataApiClickHandler',
      value: function _dataApiClickHandler(event) {
        var selector = _util2.default.getSelectorFromElement(this);

        if (!selector) {
          return;
        }

        var target = $(selector)[0];

        if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
          return;
        }

        var config = $.extend({}, $(target).data(), $(this).data());
        var slideIndex = this.getAttribute('data-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel._jQueryInterface.call($(target), config);

        if (slideIndex) {
          $(target).data(DATA_KEY).to(slideIndex);
        }

        event.preventDefault();
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  })();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_RIDE).each(function () {
      var $carousel = $(this);
      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Carousel._jQueryInterface;
  $.fn[NAME].Constructor = Carousel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
})(jQuery);

exports.default = Carousel;

},{"./util":11}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    toggle: true,
    parent: ''
  };

  var DefaultType = {
    toggle: 'boolean',
    parent: 'string'
  };

  var Event = {
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    IN: 'in',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };

  var Selector = {
    ACTIVES: '.panel > .in, .panel > .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = (function () {
    function Collapse(element, config) {
      _classCallCheck(this, Collapse);

      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    // getters

    _createClass(Collapse, [{
      key: 'toggle',

      // public

      value: function toggle() {
        if ($(this._element).hasClass(ClassName.IN)) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: 'show',
      value: function show() {
        var _this = this;

        if (this._isTransitioning || $(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var actives = undefined;
        var activesData = undefined;

        if (this._parent) {
          actives = $.makeArray($(Selector.ACTIVES));
          if (!actives.length) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $(actives).data(DATA_KEY);
          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $.Event(Event.SHOW);
        $(this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Collapse._jQueryInterface.call($(actives), 'hide');
          if (!activesData) {
            $(actives).data(DATA_KEY, null);
          }
        }

        var dimension = this._getDimension();

        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

        this._element.style[dimension] = 0;
        this._element.setAttribute('aria-expanded', true);

        if (this._triggerArray.length) {
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.IN);

          _this._element.style[dimension] = '';

          _this.setTransitioning(false);

          $(_this._element).trigger(Event.SHOWN);
        };

        if (!_util2.default.supportsTransitionEnd()) {
          complete();
          return;
        }

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = 'scroll' + capitalizedDimension;

        $(this._element).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

        this._element.style[dimension] = this._element[scrollSize] + 'px';
      }
    }, {
      key: 'hide',
      value: function hide() {
        var _this2 = this;

        if (this._isTransitioning || !$(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var startEvent = $.Event(Event.HIDE);
        $(this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();
        var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

        this._element.style[dimension] = this._element[offsetDimension] + 'px';

        _util2.default.reflow(this._element);

        $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.IN);

        this._element.setAttribute('aria-expanded', false);

        if (this._triggerArray.length) {
          $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this2.setTransitioning(false);
          $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };

        this._element.style[dimension] = 0;

        if (!_util2.default.supportsTransitionEnd()) {
          complete();
          return;
        }

        $(this._element).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: 'setTransitioning',
      value: function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);

        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        config.toggle = Boolean(config.toggle); // coerce string values
        _util2.default.typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_getDimension',
      value: function _getDimension() {
        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      }
    }, {
      key: '_getParent',
      value: function _getParent() {
        var _this3 = this;

        var parent = $(this._config.parent)[0];
        var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

        $(parent).find(selector).each(function (i, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });

        return parent;
      }
    }, {
      key: '_addAriaAndCollapsedClass',
      value: function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $(element).hasClass(ClassName.IN);
          element.setAttribute('aria-expanded', isOpen);

          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      }

      // static

    }], [{
      key: '_getTargetFromElement',
      value: function _getTargetFromElement(element) {
        var selector = _util2.default.getSelectorFromElement(element);
        return selector ? $(selector)[0] : null;
      }
    }, {
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);
          var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Collapse(this, _config);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  })();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    var target = Collapse._getTargetFromElement(this);
    var data = $(target).data(DATA_KEY);
    var config = data ? 'toggle' : $(this).data();

    Collapse._jQueryInterface.call($(target), config);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
})(jQuery);

exports.default = Collapse;

},{"./util":11}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'dropdown';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    BACKDROP: 'dropdown-backdrop',
    DISABLED: 'disabled',
    OPEN: 'open'
  };

  var Selector = {
    BACKDROP: '.dropdown-backdrop',
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    ROLE_MENU: '[role="menu"]',
    ROLE_LISTBOX: '[role="listbox"]',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, ' + '[role="listbox"] li:not(.disabled) a'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = (function () {
    function Dropdown(element) {
      _classCallCheck(this, Dropdown);

      this._element = element;

      this._addEventListeners();
    }

    // getters

    _createClass(Dropdown, [{
      key: 'toggle',

      // public

      value: function toggle() {
        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
          return false;
        }

        var parent = Dropdown._getParentFromElement(this);
        var isActive = $(parent).hasClass(ClassName.OPEN);

        Dropdown._clearMenus();

        if (isActive) {
          return false;
        }

        if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {

          // if mobile we use a backdrop because click events don't delegate
          var dropdown = document.createElement('div');
          dropdown.className = ClassName.BACKDROP;
          $(dropdown).insertBefore(this);
          $(dropdown).on('click', Dropdown._clearMenus);
        }

        var relatedTarget = { relatedTarget: this };
        var showEvent = $.Event(Event.SHOW, relatedTarget);

        $(parent).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return false;
        }

        this.focus();
        this.setAttribute('aria-expanded', 'true');

        $(parent).toggleClass(ClassName.OPEN);
        $(parent).trigger($.Event(Event.SHOWN, relatedTarget));

        return false;
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(this._element).off(EVENT_KEY);
        this._element = null;
      }

      // private

    }, {
      key: '_addEventListeners',
      value: function _addEventListeners() {
        $(this._element).on(Event.CLICK, this.toggle);
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            $(this).data(DATA_KEY, data = new Dropdown(this));
          }

          if (typeof config === 'string') {
            data[config].call(this);
          }
        });
      }
    }, {
      key: '_clearMenus',
      value: function _clearMenus(event) {
        if (event && event.which === 3) {
          return;
        }

        var backdrop = $(Selector.BACKDROP)[0];
        if (backdrop) {
          backdrop.parentNode.removeChild(backdrop);
        }

        var toggles = $.makeArray($(Selector.DATA_TOGGLE));

        for (var i = 0; i < toggles.length; i++) {
          var parent = Dropdown._getParentFromElement(toggles[i]);
          var relatedTarget = { relatedTarget: toggles[i] };

          if (!$(parent).hasClass(ClassName.OPEN)) {
            continue;
          }

          if (event && event.type === 'click' && /input|textarea/i.test(event.target.tagName) && $.contains(parent, event.target)) {
            continue;
          }

          var hideEvent = $.Event(Event.HIDE, relatedTarget);
          $(parent).trigger(hideEvent);
          if (hideEvent.isDefaultPrevented()) {
            continue;
          }

          toggles[i].setAttribute('aria-expanded', 'false');

          $(parent).removeClass(ClassName.OPEN).trigger($.Event(Event.HIDDEN, relatedTarget));
        }
      }
    }, {
      key: '_getParentFromElement',
      value: function _getParentFromElement(element) {
        var parent = undefined;
        var selector = _util2.default.getSelectorFromElement(element);

        if (selector) {
          parent = $(selector)[0];
        }

        return parent || element.parentNode;
      }
    }, {
      key: '_dataApiKeydownHandler',
      value: function _dataApiKeydownHandler(event) {
        if (!/(38|40|27|32)/.test(event.which) || /input|textarea/i.test(event.target.tagName)) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this);
        var isActive = $(parent).hasClass(ClassName.OPEN);

        if (!isActive && event.which !== 27 || isActive && event.which === 27) {

          if (event.which === 27) {
            var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
            $(toggle).trigger('focus');
          }

          $(this).trigger('click');
          return;
        }

        var items = $.makeArray($(Selector.VISIBLE_ITEMS));

        items = items.filter(function (item) {
          return item.offsetWidth || item.offsetHeight;
        });

        if (!items.length) {
          return;
        }

        var index = items.indexOf(event.target);

        if (event.which === 38 && index > 0) {
          // up
          index--;
        }

        if (event.which === 40 && index < items.length - 1) {
          // down
          index++;
        }

        if (! ~index) {
          index = 0;
        }

        items[index].focus();
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Dropdown;
  })();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
})(jQuery);

exports.default = Dropdown;

},{"./util":11}],6:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'modal';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };

  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    RESIZE: 'resize' + EVENT_KEY,
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in'
  };

  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = (function () {
    function Modal(element, config) {
      _classCallCheck(this, Modal);

      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    }

    // getters

    _createClass(Modal, [{
      key: 'toggle',

      // public

      value: function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: 'show',
      value: function show(relatedTarget) {
        var _this = this;

        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: relatedTarget
        });

        $(this._element).trigger(showEvent);

        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = true;

        this._checkScrollbar();
        this._setScrollbar();

        $(document.body).addClass(ClassName.OPEN);

        this._setEscapeEvent();
        this._setResizeEvent();

        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));

        $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
          $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
            if ($(event.target).is(_this._element)) {
              that._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
      }
    }, {
      key: 'hide',
      value: function hide(event) {
        if (event) {
          event.preventDefault();
        }

        var hideEvent = $.Event(Event.HIDE);

        $(this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = false;

        this._setEscapeEvent();
        this._setResizeEvent();

        $(document).off(Event.FOCUSIN);

        $(this._element).removeClass(ClassName.IN);

        $(this._element).off(Event.CLICK_DISMISS);
        $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

        if (_util2.default.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {

          $(this._element).one(_util2.default.TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          this._hideModal();
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);

        $(window).off(EVENT_KEY);
        $(document).off(EVENT_KEY);
        $(this._element).off(EVENT_KEY);
        $(this._backdrop).off(EVENT_KEY);

        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._originalBodyPadding = null;
        this._scrollbarWidth = null;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        _util2.default.typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_showElement',
      value: function _showElement(relatedTarget) {
        var _this2 = this;

        var transition = _util2.default.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // don't move modals dom position
          document.body.appendChild(this._element);
        }

        this._element.style.display = 'block';
        this._element.scrollTop = 0;

        if (transition) {
          _util2.default.reflow(this._element);
        }

        $(this._element).addClass(ClassName.IN);

        if (this._config.focus) {
          this._enforceFocus();
        }

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          if (_this2._config.focus) {
            _this2._element.focus();
          }
          $(_this2._element).trigger(shownEvent);
        };

        if (transition) {
          $(this._dialog).one(_util2.default.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          transitionComplete();
        }
      }
    }, {
      key: '_enforceFocus',
      value: function _enforceFocus() {
        var _this3 = this;

        $(document).off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          if (_this3._element !== event.target && !$(_this3._element).has(event.target).length) {
            _this3._element.focus();
          }
        });
      }
    }, {
      key: '_setEscapeEvent',
      value: function _setEscapeEvent() {
        var _this4 = this;

        if (this._isShown && this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === 27) {
              _this4.hide();
            }
          });
        } else if (!this._isShown) {
          $(this._element).off(Event.KEYDOWN_DISMISS);
        }
      }
    }, {
      key: '_setResizeEvent',
      value: function _setResizeEvent() {
        if (this._isShown) {
          $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this));
        } else {
          $(window).off(Event.RESIZE);
        }
      }
    }, {
      key: '_hideModal',
      value: function _hideModal() {
        var _this5 = this;

        this._element.style.display = 'none';
        this._showBackdrop(function () {
          $(document.body).removeClass(ClassName.OPEN);
          _this5._resetAdjustments();
          _this5._resetScrollbar();
          $(_this5._element).trigger(Event.HIDDEN);
        });
      }
    }, {
      key: '_removeBackdrop',
      value: function _removeBackdrop() {
        if (this._backdrop) {
          $(this._backdrop).remove();
          this._backdrop = null;
        }
      }
    }, {
      key: '_showBackdrop',
      value: function _showBackdrop(callback) {
        var _this6 = this;

        var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

        if (this._isShown && this._config.backdrop) {
          var doAnimate = _util2.default.supportsTransitionEnd() && animate;

          this._backdrop = document.createElement('div');
          this._backdrop.className = ClassName.BACKDROP;

          if (animate) {
            $(this._backdrop).addClass(animate);
          }

          $(this._backdrop).appendTo(document.body);

          $(this._element).on(Event.CLICK_DISMISS, function (event) {
            if (_this6._ignoreBackdropClick) {
              _this6._ignoreBackdropClick = false;
              return;
            }
            if (event.target !== event.currentTarget) {
              return;
            }
            if (_this6._config.backdrop === 'static') {
              _this6._element.focus();
            } else {
              _this6.hide();
            }
          });

          if (doAnimate) {
            _util2.default.reflow(this._backdrop);
          }

          $(this._backdrop).addClass(ClassName.IN);

          if (!callback) {
            return;
          }

          if (!doAnimate) {
            callback();
            return;
          }

          $(this._backdrop).one(_util2.default.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else if (!this._isShown && this._backdrop) {
          $(this._backdrop).removeClass(ClassName.IN);

          var callbackRemove = function callbackRemove() {
            _this6._removeBackdrop();
            if (callback) {
              callback();
            }
          };

          if (_util2.default.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
            $(this._backdrop).one(_util2.default.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      }

      // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // todo (fat): these should probably be refactored out of modal.js
      // ----------------------------------------------------------------------

    }, {
      key: '_handleUpdate',
      value: function _handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: '_adjustDialog',
      value: function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + 'px';
        }

        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + 'px~';
        }
      }
    }, {
      key: '_resetAdjustments',
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      }
    }, {
      key: '_checkScrollbar',
      value: function _checkScrollbar() {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
          // workaround for missing window.innerWidth in IE8
          var documentElementRect = document.documentElement.getBoundingClientRect();
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        this._isBodyOverflowing = document.body.clientWidth < fullWindowWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      }
    }, {
      key: '_setScrollbar',
      value: function _setScrollbar() {
        var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0, 10);

        this._originalBodyPadding = document.body.style.paddingRight || '';

        if (this._isBodyOverflowing) {
          document.body.style.paddingRight = bodyPadding + (this._scrollbarWidth + 'px');
        }
      }
    }, {
      key: '_resetScrollbar',
      value: function _resetScrollbar() {
        document.body.style.paddingRight = this._originalBodyPadding;
      }
    }, {
      key: '_getScrollbarWidth',
      value: function _getScrollbarWidth() {
        // thx d.walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          if (!data) {
            data = new Modal(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  })();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this7 = this;

    var target = undefined;
    var selector = _util2.default.getSelectorFromElement(this);

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this7).is(':visible')) {
          _this7.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
})(jQuery);

exports.default = Modal;

},{"./util":11}],7:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('./tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'popover';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = $.extend({}, _tooltip2.default.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
  });

  var DefaultType = $.extend({}, _tooltip2.default.DefaultType, {
    content: '(string|function)'
  });

  var ClassName = {
    FADE: 'fade',
    IN: 'in'
  };

  var Selector = {
    TITLE: '.popover-title',
    CONTENT: '.popover-content',
    ARROW: '.popover-arrow'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = (function (_Tooltip) {
    _inherits(Popover, _Tooltip);

    function Popover() {
      _classCallCheck(this, Popover);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Popover).apply(this, arguments));
    }

    _createClass(Popover, [{
      key: 'isWithContent',

      // overrides

      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: 'getTipElement',
      value: function getTipElement() {
        return this.tip = this.tip || $(this.config.template)[0];
      }
    }, {
      key: 'setContent',
      value: function setContent() {
        var tip = this.getTipElement();
        var title = this.getTitle();
        var content = this._getContent();
        var titleElement = $(tip).find(Selector.TITLE)[0];

        if (titleElement) {
          titleElement[this.config.html ? 'innerHTML' : 'innerText'] = title;
        }

        // we use append for html objects to maintain js events
        $(tip).find(Selector.CONTENT).children().detach().end()[this.config.html ? typeof content === 'string' ? 'html' : 'append' : 'text'](content);

        $(tip).removeClass(ClassName.FADE).removeClass(ClassName.IN);

        this.cleanupTether();
      }

      // private

    }, {
      key: '_getContent',
      value: function _getContent() {
        return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

          if (!data && /destroy|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Popover(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',

      // getters

      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Popover;
  })(_tooltip2.default);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Popover._jQueryInterface;
  $.fn[NAME].Constructor = Popover;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
})(jQuery);

exports.default = Popover;

},{"./tooltip":10}],8:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollspy';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };

  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };

  var Event = {
    ACTIVATE: 'activate' + EVENT_KEY,
    SCROLL: 'scroll' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    NAV_LINK: 'nav-link',
    NAV: 'nav',
    ACTIVE: 'active'
  };

  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    LIST_ITEM: '.list-item',
    LI: 'li',
    LI_DROPDOWN: 'li.dropdown',
    NAV_LINKS: '.nav-link',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };

  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = (function () {
    function ScrollSpy(element, config) {
      _classCallCheck(this, ScrollSpy);

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;

      $(this._scrollElement).on(Event.SCROLL, $.proxy(this._process, this));

      this.refresh();
      this._process();
    }

    // getters

    _createClass(ScrollSpy, [{
      key: 'refresh',

      // public

      value: function refresh() {
        var _this = this;

        var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

        var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

        this._offsets = [];
        this._targets = [];

        this._scrollHeight = this._getScrollHeight();

        var targets = $.makeArray($(this._selector));

        targets.map(function (element) {
          var target = undefined;
          var targetSelector = _util2.default.getSelectorFromElement(element);

          if (targetSelector) {
            target = $(targetSelector)[0];
          }

          if (target && (target.offsetWidth || target.offsetHeight)) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this._offsets.push(item[0]);
          _this._targets.push(item[1]);
        });
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(this._scrollElement).off(EVENT_KEY);

        this._element = null;
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);

        if (typeof config.target !== 'string') {
          var id = $(config.target).attr('id');
          if (!id) {
            id = _util2.default.getUID(NAME);
            $(config.target).attr('id', id);
          }
          config.target = '#' + id;
        }

        _util2.default.typeCheckConfig(NAME, config, DefaultType);

        return config;
      }
    }, {
      key: '_getScrollTop',
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop;
      }
    }, {
      key: '_getScrollHeight',
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: '_process',
      value: function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;
        var scrollHeight = this._getScrollHeight();
        var maxScroll = this._config.offset + scrollHeight - this._scrollElement.offsetHeight;

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }
        }

        if (this._activeTarget && scrollTop < this._offsets[0]) {
          this._activeTarget = null;
          this._clear();
          return;
        }

        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      }
    }, {
      key: '_activate',
      value: function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = this._selector.split(',');
        queries = queries.map(function (selector) {
          return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
        });

        var $link = $(queries.join(','));

        if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
          $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          $link.addClass(ClassName.ACTIVE);
        } else {
          // todo (fat) this is kinda sus…
          // recursively add actives to tested nav-links
          $link.parents(Selector.LI).find(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
        }

        $(this._scrollElement).trigger(Event.ACTIVATE, {
          relatedTarget: target
        });
      }
    }, {
      key: '_clear',
      value: function _clear() {
        $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config || null;

          if (!data) {
            data = new ScrollSpy(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return ScrollSpy;
  })();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $.makeArray($(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $(scrollSpys[i]);
      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollSpy._jQueryInterface;
  $.fn[NAME].Constructor = ScrollSpy;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
})(jQuery);

exports.default = ScrollSpy;

},{"./util":11}],9:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tab';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    FADE: 'fade',
    IN: 'in'
  };

  var Selector = {
    A: 'a',
    LI: 'li',
    DROPDOWN: '.dropdown',
    UL: 'ul:not(.dropdown-menu)',
    FADE_CHILD: '> .nav-item .fade, > .fade',
    ACTIVE: '.active',
    ACTIVE_CHILD: '> .nav-item > .active, > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = (function () {
    function Tab(element) {
      _classCallCheck(this, Tab);

      this._element = element;
    }

    // getters

    _createClass(Tab, [{
      key: 'show',

      // public

      value: function show() {
        var _this = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE)) {
          return;
        }

        var target = undefined;
        var previous = undefined;
        var ulElement = $(this._element).closest(Selector.UL)[0];
        var selector = _util2.default.getSelectorFromElement(this._element);

        if (ulElement) {
          previous = $.makeArray($(ulElement).find(Selector.ACTIVE));
          previous = previous[previous.length - 1];
        }

        var hideEvent = $.Event(Event.HIDE, {
          relatedTarget: this._element
        });

        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: previous
        });

        if (previous) {
          $(previous).trigger(hideEvent);
        }

        $(this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }

        if (selector) {
          target = $(selector)[0];
        }

        this._activate(this._element, ulElement);

        var complete = function complete() {
          var hiddenEvent = $.Event(Event.HIDDEN, {
            relatedTarget: _this._element
          });

          var shownEvent = $.Event(Event.SHOWN, {
            relatedTarget: previous
          });

          $(previous).trigger(hiddenEvent);
          $(_this._element).trigger(shownEvent);
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeClass(this._element, DATA_KEY);
        this._element = null;
      }

      // private

    }, {
      key: '_activate',
      value: function _activate(element, container, callback) {
        var active = $(container).find(Selector.ACTIVE_CHILD)[0];
        var isTransitioning = callback && _util2.default.supportsTransitionEnd() && (active && $(active).hasClass(ClassName.FADE) || Boolean($(container).find(Selector.FADE_CHILD)[0]));

        var complete = $.proxy(this._transitionComplete, this, element, active, isTransitioning, callback);

        if (active && isTransitioning) {
          $(active).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          complete();
        }

        if (active) {
          $(active).removeClass(ClassName.IN);
        }
      }
    }, {
      key: '_transitionComplete',
      value: function _transitionComplete(element, active, isTransitioning, callback) {
        if (active) {
          $(active).removeClass(ClassName.ACTIVE);

          var dropdownChild = $(active).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

          if (dropdownChild) {
            $(dropdownChild).removeClass(ClassName.ACTIVE);
          }

          active.setAttribute('aria-expanded', false);
        }

        $(element).addClass(ClassName.ACTIVE);
        element.setAttribute('aria-expanded', true);

        if (isTransitioning) {
          _util2.default.reflow(element);
          $(element).addClass(ClassName.IN);
        } else {
          $(element).removeClass(ClassName.FADE);
        }

        if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

          var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
          if (dropdownElement) {
            $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);

          if (!data) {
            data = data = new Tab(this);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Tab;
  })();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    Tab._jQueryInterface.call($(this), 'show');
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
})(jQuery);

exports.default = Tab;

},{"./util":11}],10:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tooltip';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tether';

  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: '0 0',
    constraints: []
  };

  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: 'string',
    constraints: 'array'
  };

  var AttachmentMap = {
    TOP: 'bottom center',
    RIGHT: 'middle left',
    BOTTOM: 'top center',
    LEFT: 'middle right'
  };

  var HoverState = {
    IN: 'in',
    OUT: 'out'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY
  };

  var ClassName = {
    FADE: 'fade',
    IN: 'in'
  };

  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner'
  };

  var TetherClass = {
    element: false,
    enabled: false
  };

  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = (function () {
    function Tooltip(element, config) {
      _classCallCheck(this, Tooltip);

      // private
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._tether = null;

      // protected
      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    }

    // getters

    _createClass(Tooltip, [{
      key: 'enable',

      // public

      value: function enable() {
        this._isEnabled = true;
      }
    }, {
      key: 'disable',
      value: function disable() {
        this._isEnabled = false;
      }
    }, {
      key: 'toggleEnabled',
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: 'toggle',
      value: function toggle(event) {
        if (event) {
          var dataKey = this.constructor.DATA_KEY;
          var context = $(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $(event.currentTarget).data(dataKey, context);
          }

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {

          if ($(this.getTipElement()).hasClass(ClassName.IN)) {
            this._leave(null, this);
            return;
          }

          this._enter(null, this);
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        clearTimeout(this._timeout);

        this.cleanupTether();

        $.removeData(this.element, this.constructor.DATA_KEY);

        $(this.element).off(this.constructor.EVENT_KEY);

        if (this.tip) {
          $(this.tip).remove();
        }

        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;
        this._tether = null;

        this.element = null;
        this.config = null;
        this.tip = null;
      }
    }, {
      key: 'show',
      value: function show() {
        var _this = this;

        var showEvent = $.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          $(this.element).trigger(showEvent);

          var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

          if (showEvent.isDefaultPrevented() || !isInTheDom) {
            return;
          }

          var tip = this.getTipElement();
          var tipId = _util2.default.getUID(this.constructor.NAME);

          tip.setAttribute('id', tipId);
          this.element.setAttribute('aria-describedby', tipId);

          this.setContent();

          if (this.config.animation) {
            $(tip).addClass(ClassName.FADE);
          }

          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

          var attachment = this._getAttachment(placement);

          $(tip).data(this.constructor.DATA_KEY, this).appendTo(document.body);

          $(this.element).trigger(this.constructor.Event.INSERTED);

          this._tether = new Tether({
            attachment: attachment,
            element: tip,
            target: this.element,
            classes: TetherClass,
            classPrefix: CLASS_PREFIX,
            offset: this.config.offset,
            constraints: this.config.constraints
          });

          _util2.default.reflow(tip);
          this._tether.position();

          $(tip).addClass(ClassName.IN);

          var complete = function complete() {
            var prevHoverState = _this._hoverState;
            _this._hoverState = null;

            $(_this.element).trigger(_this.constructor.Event.SHOWN);

            if (prevHoverState === HoverState.OUT) {
              _this._leave(null, _this);
            }
          };

          if (_util2.default.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
            $(this.tip).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
            return;
          }

          complete();
        }
      }
    }, {
      key: 'hide',
      value: function hide(callback) {
        var _this2 = this;

        var tip = this.getTipElement();
        var hideEvent = $.Event(this.constructor.Event.HIDE);
        var complete = function complete() {
          if (_this2._hoverState !== HoverState.IN && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }

          _this2.element.removeAttribute('aria-describedby');
          $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
          _this2.cleanupTether();

          if (callback) {
            callback();
          }
        };

        $(this.element).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        $(tip).removeClass(ClassName.IN);

        if (_util2.default.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

          $(tip).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          complete();
        }

        this._hoverState = '';
      }

      // protected

    }, {
      key: 'isWithContent',
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: 'getTipElement',
      value: function getTipElement() {
        return this.tip = this.tip || $(this.config.template)[0];
      }
    }, {
      key: 'setContent',
      value: function setContent() {
        var tip = this.getTipElement();
        var title = this.getTitle();
        var method = this.config.html ? 'innerHTML' : 'innerText';

        $(tip).find(Selector.TOOLTIP_INNER)[0][method] = title;

        $(tip).removeClass(ClassName.FADE).removeClass(ClassName.IN);

        this.cleanupTether();
      }
    }, {
      key: 'getTitle',
      value: function getTitle() {
        var title = this.element.getAttribute('data-original-title');

        if (!title) {
          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
        }

        return title;
      }
    }, {
      key: 'cleanupTether',
      value: function cleanupTether() {
        if (this._tether) {
          this._tether.destroy();

          // clean up after tether's junk classes
          // remove after they fix issue
          // (https://github.com/HubSpot/tether/issues/36)
          $(this.element).removeClass(this._removeTetherClasses);
          $(this.tip).removeClass(this._removeTetherClasses);
        }
      }

      // private

    }, {
      key: '_getAttachment',
      value: function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      }
    }, {
      key: '_setListeners',
      value: function _setListeners() {
        var _this3 = this;

        var triggers = this.config.trigger.split(' ');

        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, $.proxy(_this3.toggle, _this3));
          } else if (trigger !== Trigger.MANUAL) {
            var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
            var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;

            $(_this3.element).on(eventIn, _this3.config.selector, $.proxy(_this3._enter, _this3)).on(eventOut, _this3.config.selector, $.proxy(_this3._leave, _this3));
          }
        });

        if (this.config.selector) {
          this.config = $.extend({}, this.config, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      }
    }, {
      key: '_removeTetherClasses',
      value: function _removeTetherClasses(i, css) {
        return ((css.baseVal || css).match(new RegExp('(^|\\s)' + CLASS_PREFIX + '-\\S+', 'g')) || []).join(' ');
      }
    }, {
      key: '_fixTitle',
      value: function _fixTitle() {
        var titleType = _typeof(this.element.getAttribute('data-original-title'));
        if (this.element.getAttribute('title') || titleType !== 'string') {
          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
          this.element.setAttribute('title', '');
        }
      }
    }, {
      key: '_enter',
      value: function _enter(event, context) {
        var dataKey = this.constructor.DATA_KEY;

        context = context || $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
        }

        if ($(context.getTipElement()).hasClass(ClassName.IN) || context._hoverState === HoverState.IN) {
          context._hoverState = HoverState.IN;
          return;
        }

        clearTimeout(context._timeout);

        context._hoverState = HoverState.IN;

        if (!context.config.delay || !context.config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.IN) {
            context.show();
          }
        }, context.config.delay.show);
      }
    }, {
      key: '_leave',
      value: function _leave(event, context) {
        var dataKey = this.constructor.DATA_KEY;

        context = context || $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);

        context._hoverState = HoverState.OUT;

        if (!context.config.delay || !context.config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.OUT) {
            context.hide();
          }
        }, context.config.delay.hide);
      }
    }, {
      key: '_isWithActiveTrigger',
      value: function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

        if (config.delay && typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        _util2.default.typeCheckConfig(NAME, config, this.constructor.DefaultType);

        return config;
      }
    }, {
      key: '_getDelegateConfig',
      value: function _getDelegateConfig() {
        var config = {};

        if (this.config) {
          for (var key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }

        return config;
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

          if (!data && /destroy|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Tooltip(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Tooltip;
  })();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tooltip._jQueryInterface;
  $.fn[NAME].Constructor = Tooltip;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
})(jQuery);

exports.default = Tooltip;

},{"./util":11}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var transition = false;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments);
        }
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return { end: TransitionEndEvent[name] };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID: function getUID(prefix) {
      do {
        prefix += ~ ~(Math.random() * 1000000);
      } while (document.getElementById(prefix));
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector) {
        selector = element.getAttribute('href') || '';
        selector = /^#[a-z]/i.test(selector) ? selector : null;
      }

      return selector;
    },
    reflow: function reflow(element) {
      new Function('bs', 'return bs')(element.offsetHeight);
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = undefined;

          if (value && isElement(value)) {
            valueType = 'element';
          } else {
            valueType = toType(value);
          }

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }
        }
      }
    }
  };

  setTransitionEndSupport();

  return Util;
})(jQuery);

exports.default = Util;

},{}],12:[function(require,module,exports){
"use strict";

require('./bootstrap/alert.js');

require('./bootstrap/button.js');

require('./bootstrap/carousel.js');

require('./bootstrap/collapse.js');

require('./bootstrap/dropdown.js');

require('./bootstrap/modal.js');

require('./bootstrap/popover.js');

require('./bootstrap/scrollspy.js');

require('./bootstrap/tab.js');

require('./bootstrap/tooltip.js');

require('./bootstrap/util.js');

},{"./bootstrap/alert.js":1,"./bootstrap/button.js":2,"./bootstrap/carousel.js":3,"./bootstrap/collapse.js":4,"./bootstrap/dropdown.js":5,"./bootstrap/modal.js":6,"./bootstrap/popover.js":7,"./bootstrap/scrollspy.js":8,"./bootstrap/tab.js":9,"./bootstrap/tooltip.js":10,"./bootstrap/util.js":11}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGRlbW8tZXM2XFxzdGF0aWNzXFxjb25jYXRcXGJvb3RzdHJhcFxcYWxlcnQuanMiLCJzcmNcXGRlbW8tZXM2XFxzdGF0aWNzXFxjb25jYXRcXGJvb3RzdHJhcFxcYnV0dG9uLmpzIiwic3JjXFxkZW1vLWVzNlxcc3RhdGljc1xcY29uY2F0XFxib290c3RyYXBcXGNhcm91c2VsLmpzIiwic3JjXFxkZW1vLWVzNlxcc3RhdGljc1xcY29uY2F0XFxib290c3RyYXBcXGNvbGxhcHNlLmpzIiwic3JjXFxkZW1vLWVzNlxcc3RhdGljc1xcY29uY2F0XFxib290c3RyYXBcXGRyb3Bkb3duLmpzIiwic3JjXFxkZW1vLWVzNlxcc3RhdGljc1xcY29uY2F0XFxib290c3RyYXBcXG1vZGFsLmpzIiwic3JjXFxkZW1vLWVzNlxcc3RhdGljc1xcY29uY2F0XFxib290c3RyYXBcXHBvcG92ZXIuanMiLCJzcmNcXGRlbW8tZXM2XFxzdGF0aWNzXFxjb25jYXRcXGJvb3RzdHJhcFxcc2Nyb2xsc3B5LmpzIiwic3JjXFxkZW1vLWVzNlxcc3RhdGljc1xcY29uY2F0XFxib290c3RyYXBcXHRhYi5qcyIsInNyY1xcZGVtby1lczZcXHN0YXRpY3NcXGNvbmNhdFxcYm9vdHN0cmFwXFx0b29sdGlwLmpzIiwic3JjXFxkZW1vLWVzNlxcc3RhdGljc1xcY29uY2F0XFxib290c3RyYXBcXHV0aWwuanMiLCJzcmNcXGRlbW8tZXM2XFxzdGF0aWNzXFxjb25jYXRcXGNvbmNhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVUEsSUFBTSxLQUFLLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBSzs7Ozs7Ozs7QUFTcEIsTUFBTSxJQUFJLEdBQWtCLE9BQU8sQ0FBQTtBQUNuQyxNQUFNLE9BQU8sR0FBZSxPQUFPLENBQUE7QUFDbkMsTUFBTSxRQUFRLEdBQWMs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QUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDOUMsa0JBQU0sSUFBSSxLQUFLLENBQ2IsQUFBRyxhQUFhLENBQUMsV0FBVyxFQUFFLHdCQUNuQixRQUFRLHlCQUFvQixTQUFTLFFBQUksNEJBQzlCLGFBQWEsUUFBSSxDQUFDLENBQUE7V0FDM0M7U0FDRjtPQUNGO0tBQ0Y7R0FDRixDQUFBOztBQUVELHlCQUF1QixFQUFFLENBQUE7O0FBRXpCLFNBQU8sSUFBSSxDQUFBO0NBRVosQ0FBQSxDQUFFLE1BQU0sQ0FBQyxDQUFBOztrQkFFSyxJQUFJOzs7QUMvSm5CLFlBQVksQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjApOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgQWxlcnQgPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2FsZXJ0J1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuMC4wJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmFsZXJ0J1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSAxNTBcblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBESVNNSVNTIDogJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIENMT1NFICAgICAgICAgIDogYGNsb3NlJHtFVkVOVF9LRVl9YCxcbiAgICBDTE9TRUQgICAgICAgICA6IGBjbG9zZWQke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIEFMRVJUIDogJ2FsZXJ0JyxcbiAgICBGQURFICA6ICdmYWRlJyxcbiAgICBJTiAgICA6ICdpbidcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBBbGVydCB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIH1cblxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT05cbiAgICB9XG5cblxuICAgIC8vIHB1YmxpY1xuXG4gICAgY2xvc2UoZWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudFxuXG4gICAgICBsZXQgcm9vdEVsZW1lbnQgPSB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KVxuICAgICAgbGV0IGN1c3RvbUV2ZW50ID0gdGhpcy5fdHJpZ2dlckNsb3NlRXZlbnQocm9vdEVsZW1lbnQpXG5cbiAgICAgIGlmIChjdXN0b21FdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVtb3ZlRWxlbWVudChyb290RWxlbWVudClcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRSb290RWxlbWVudChlbGVtZW50KSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICAgIGxldCBwYXJlbnQgICA9IGZhbHNlXG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSAkKHNlbGVjdG9yKVswXVxuICAgICAgfVxuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICBwYXJlbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoYC4ke0NsYXNzTmFtZS5BTEVSVH1gKVswXVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50XG4gICAgfVxuXG4gICAgX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICAgIGxldCBjbG9zZUV2ZW50ID0gJC5FdmVudChFdmVudC5DTE9TRSlcblxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGNsb3NlRXZlbnQpXG4gICAgICByZXR1cm4gY2xvc2VFdmVudFxuICAgIH1cblxuICAgIF9yZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLklOKVxuXG4gICAgICBpZiAoIVV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgfHxcbiAgICAgICAgICAhJChlbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgICQoZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAkLnByb3h5KHRoaXMuX2Rlc3Ryb3lFbGVtZW50LCB0aGlzLCBlbGVtZW50KSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgfVxuXG4gICAgX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudClcbiAgICAgICAgLmRldGFjaCgpXG4gICAgICAgIC50cmlnZ2VyKEV2ZW50LkNMT1NFRClcbiAgICAgICAgLnJlbW92ZSgpXG4gICAgfVxuXG5cbiAgICAvLyBzdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgICAgbGV0IGRhdGEgICAgID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpXG4gICAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgX2hhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cblxuICAgICAgICBhbGVydEluc3RhbmNlLmNsb3NlKHRoaXMpXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKFxuICAgIEV2ZW50LkNMSUNLX0RBVEFfQVBJLFxuICAgIFNlbGVjdG9yLkRJU01JU1MsXG4gICAgQWxlcnQuX2hhbmRsZURpc21pc3MobmV3IEFsZXJ0KCkpXG4gIClcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQWxlcnRcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBBbGVydFxuXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMCk6IGJ1dHRvbi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgQnV0dG9uID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdidXR0b24nXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYnV0dG9uJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIEFDVElWRSA6ICdhY3RpdmUnLFxuICAgIEJVVFRPTiA6ICdidG4nLFxuICAgIEZPQ1VTICA6ICdmb2N1cydcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIERBVEFfVE9HR0xFX0NBUlJPVCA6ICdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJyxcbiAgICBEQVRBX1RPR0dMRSAgICAgICAgOiAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScsXG4gICAgSU5QVVQgICAgICAgICAgICAgIDogJ2lucHV0JyxcbiAgICBBQ1RJVkUgICAgICAgICAgICAgOiAnLmFjdGl2ZScsXG4gICAgQlVUVE9OICAgICAgICAgICAgIDogJy5idG4nXG4gIH1cblxuICBjb25zdCBFdmVudCA9IHtcbiAgICBDTElDS19EQVRBX0FQSSAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgICBGT0NVU19CTFVSX0RBVEFfQVBJIDogYGZvY3VzJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYGJsdXIke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgQnV0dG9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBsZXQgdHJpZ2dlckNoYW5nZUV2ZW50ID0gdHJ1ZVxuICAgICAgbGV0IHJvb3RFbGVtZW50ICAgICAgICA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChcbiAgICAgICAgU2VsZWN0b3IuREFUQV9UT0dHTEVcbiAgICAgIClbMF1cblxuICAgICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICAgIGxldCBpbnB1dCA9ICQodGhpcy5fZWxlbWVudCkuZmluZChTZWxlY3Rvci5JTlBVVClbMF1cblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgaWYgKGlucHV0LmNoZWNrZWQgJiZcbiAgICAgICAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuQUNUSVZFKSkge1xuICAgICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgYWN0aXZlRWxlbWVudCA9ICQocm9vdEVsZW1lbnQpLmZpbmQoU2VsZWN0b3IuQUNUSVZFKVswXVxuXG4gICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9ICEkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoJ2NoYW5nZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJyxcbiAgICAgICAgICAhJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuQUNUSVZFKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgfVxuXG5cbiAgICAvLyBzdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkKGRvY3VtZW50KVxuICAgIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEVfQ0FSUk9ULCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldFxuXG4gICAgICBpZiAoISQoYnV0dG9uKS5oYXNDbGFzcyhDbGFzc05hbWUuQlVUVE9OKSkge1xuICAgICAgICBidXR0b24gPSAkKGJ1dHRvbikuY2xvc2VzdChTZWxlY3Rvci5CVVRUT04pXG4gICAgICB9XG5cbiAgICAgIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChidXR0b24pLCAndG9nZ2xlJylcbiAgICB9KVxuICAgIC5vbihFdmVudC5GT0NVU19CTFVSX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRV9DQVJST1QsIChldmVudCkgPT4ge1xuICAgICAgbGV0IGJ1dHRvbiA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNlbGVjdG9yLkJVVFRPTilbMF1cbiAgICAgICQoYnV0dG9uKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuRk9DVVMsIC9eZm9jdXMoaW4pPyQvLnRlc3QoZXZlbnQudHlwZSkpXG4gICAgfSlcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEJ1dHRvblxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBCdXR0b25cblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMCk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBDYXJvdXNlbCA9ICgoJCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnY2Fyb3VzZWwnXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuY2Fyb3VzZWwnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cbiAgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDYwMFxuXG4gIGNvbnN0IERlZmF1bHQgPSB7XG4gICAgaW50ZXJ2YWwgOiA1MDAwLFxuICAgIGtleWJvYXJkIDogdHJ1ZSxcbiAgICBzbGlkZSAgICA6IGZhbHNlLFxuICAgIHBhdXNlICAgIDogJ2hvdmVyJyxcbiAgICB3cmFwICAgICA6IHRydWVcbiAgfVxuXG4gIGNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAgIGludGVydmFsIDogJyhudW1iZXJ8Ym9vbGVhbiknLFxuICAgIGtleWJvYXJkIDogJ2Jvb2xlYW4nLFxuICAgIHNsaWRlICAgIDogJyhib29sZWFufHN0cmluZyknLFxuICAgIHBhdXNlICAgIDogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHdyYXAgICAgIDogJ2Jvb2xlYW4nXG4gIH1cblxuICBjb25zdCBEaXJlY3Rpb24gPSB7XG4gICAgTkVYVCAgICAgOiAnbmV4dCcsXG4gICAgUFJFVklPVVMgOiAncHJldidcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIFNMSURFICAgICAgICAgIDogYHNsaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBTTElEICAgICAgICAgICA6IGBzbGlkJHtFVkVOVF9LRVl9YCxcbiAgICBLRVlET1dOICAgICAgICA6IGBrZXlkb3duJHtFVkVOVF9LRVl9YCxcbiAgICBNT1VTRUVOVEVSICAgICA6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgICBNT1VTRUxFQVZFICAgICA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YCxcbiAgICBMT0FEX0RBVEFfQVBJICA6IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBDQVJPVVNFTCA6ICdjYXJvdXNlbCcsXG4gICAgQUNUSVZFICAgOiAnYWN0aXZlJyxcbiAgICBTTElERSAgICA6ICdzbGlkZScsXG4gICAgUklHSFQgICAgOiAncmlnaHQnLFxuICAgIExFRlQgICAgIDogJ2xlZnQnLFxuICAgIElURU0gICAgIDogJ2Nhcm91c2VsLWl0ZW0nXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBBQ1RJVkUgICAgICA6ICcuYWN0aXZlJyxcbiAgICBBQ1RJVkVfSVRFTSA6ICcuYWN0aXZlLmNhcm91c2VsLWl0ZW0nLFxuICAgIElURU0gICAgICAgIDogJy5jYXJvdXNlbC1pdGVtJyxcbiAgICBORVhUX1BSRVYgICA6ICcubmV4dCwgLnByZXYnLFxuICAgIElORElDQVRPUlMgIDogJy5jYXJvdXNlbC1pbmRpY2F0b3JzJyxcbiAgICBEQVRBX1NMSURFICA6ICdbZGF0YS1zbGlkZV0sIFtkYXRhLXNsaWRlLXRvXScsXG4gICAgREFUQV9SSURFICAgOiAnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJ1xuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNsYXNzIENhcm91c2VsIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5faXRlbXMgICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pbnRlcnZhbCAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgICAgID0gbnVsbFxuXG4gICAgICB0aGlzLl9pc1BhdXNlZCAgICAgICAgICA9IGZhbHNlXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgICAgICAgICA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgID0gJChlbGVtZW50KVswXVxuICAgICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmZpbmQoU2VsZWN0b3IuSU5ESUNBVE9SUylbMF1cblxuICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT05cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICBuZXh0KCkge1xuICAgICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgdGhpcy5fc2xpZGUoRGlyZWN0aW9uLk5FWFQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIHRoaXMuX3NsaWRlKERpcmVjdGlvbi5QUkVWSU9VUylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZShldmVudCkge1xuICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuZmluZChTZWxlY3Rvci5ORVhUX1BSRVYpWzBdICYmXG4gICAgICAgIFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgICAgICB0aGlzLmN5Y2xlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG5cbiAgICBjeWNsZShldmVudCkge1xuICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAkLnByb3h5KHRoaXMubmV4dCwgdGhpcyksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG8oaW5kZXgpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmZpbmQoU2VsZWN0b3IuQUNUSVZFX0lURU0pWzBdXG5cbiAgICAgIGxldCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9hY3RpdmVFbGVtZW50KVxuXG4gICAgICBpZiAoaW5kZXggPiAodGhpcy5faXRlbXMubGVuZ3RoIC0gMSkgfHwgaW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub25lKEV2ZW50LlNMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgICB0aGlzLnBhdXNlKClcbiAgICAgICAgdGhpcy5jeWNsZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgZGlyZWN0aW9uID0gaW5kZXggPiBhY3RpdmVJbmRleCA/XG4gICAgICAgIERpcmVjdGlvbi5ORVhUIDpcbiAgICAgICAgRGlyZWN0aW9uLlBSRVZJT1VTXG5cbiAgICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiwgdGhpcy5faXRlbXNbaW5kZXhdKVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICAgIHRoaXMuX2l0ZW1zICAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2ludGVydmFsICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5faXNQYXVzZWQgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgICAgID0gbnVsbFxuICAgICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBudWxsXG4gICAgfVxuXG5cbiAgICAvLyBwcml2YXRlXG5cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gJC5leHRlbmQoe30sIERlZmF1bHQsIGNvbmZpZylcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgICAgLm9uKEV2ZW50LktFWURPV04sICQucHJveHkodGhpcy5fa2V5ZG93biwgdGhpcykpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicgJiZcbiAgICAgICAgISgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgICAub24oRXZlbnQuTU9VU0VFTlRFUiwgJC5wcm94eSh0aGlzLnBhdXNlLCB0aGlzKSlcbiAgICAgICAgICAub24oRXZlbnQuTU9VU0VMRUFWRSwgJC5wcm94eSh0aGlzLmN5Y2xlLCB0aGlzKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfa2V5ZG93bihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgY2FzZSAzNzogdGhpcy5wcmV2KCk7IGJyZWFrXG4gICAgICAgIGNhc2UgMzk6IHRoaXMubmV4dCgpOyBicmVha1xuICAgICAgICBkZWZhdWx0OiByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gJC5tYWtlQXJyYXkoJChlbGVtZW50KS5wYXJlbnQoKS5maW5kKFNlbGVjdG9yLklURU0pKVxuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudClcbiAgICB9XG5cbiAgICBfZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudCkge1xuICAgICAgbGV0IGlzTmV4dERpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFRcbiAgICAgIGxldCBpc1ByZXZEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWSU9VU1xuICAgICAgbGV0IGFjdGl2ZUluZGV4ICAgICA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgICAgbGV0IGxhc3RJdGVtSW5kZXggICA9ICh0aGlzLl9pdGVtcy5sZW5ndGggLSAxKVxuICAgICAgbGV0IGlzR29pbmdUb1dyYXAgICA9IChpc1ByZXZEaXJlY3Rpb24gJiYgYWN0aXZlSW5kZXggPT09IDApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzTmV4dERpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gbGFzdEl0ZW1JbmRleClcblxuICAgICAgaWYgKGlzR29pbmdUb1dyYXAgJiYgIXRoaXMuX2NvbmZpZy53cmFwKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50XG4gICAgICB9XG5cbiAgICAgIGxldCBkZWx0YSAgICAgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWSU9VUyA/IC0xIDogMVxuICAgICAgbGV0IGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aFxuXG4gICAgICByZXR1cm4gaXRlbUluZGV4ID09PSAtMSA/XG4gICAgICAgIHRoaXMuX2l0ZW1zW3RoaXMuX2l0ZW1zLmxlbmd0aCAtIDFdIDogdGhpcy5faXRlbXNbaXRlbUluZGV4XVxuICAgIH1cblxuXG4gICAgX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGRpcmVjdGlvbmFsQ2xhc3NuYW1lKSB7XG4gICAgICBsZXQgc2xpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0xJREUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldCxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25hbENsYXNzbmFtZVxuICAgICAgfSlcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRlRXZlbnQpXG5cbiAgICAgIHJldHVybiBzbGlkZUV2ZW50XG4gICAgfVxuXG4gICAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICAgICQodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG4gICAgICAgICAgLmZpbmQoU2VsZWN0b3IuQUNUSVZFKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuXG4gICAgICAgIGxldCBuZXh0SW5kaWNhdG9yID0gdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQuY2hpbGRyZW5bXG4gICAgICAgICAgdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpXG4gICAgICAgIF1cblxuICAgICAgICBpZiAobmV4dEluZGljYXRvcikge1xuICAgICAgICAgICQobmV4dEluZGljYXRvcikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIF9zbGlkZShkaXJlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgIGxldCBhY3RpdmVFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5maW5kKFNlbGVjdG9yLkFDVElWRV9JVEVNKVswXVxuICAgICAgbGV0IG5leHRFbGVtZW50ICAgPSBlbGVtZW50IHx8IGFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgdGhpcy5fZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudClcblxuICAgICAgbGV0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG5cbiAgICAgIGxldCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFQgP1xuICAgICAgICBDbGFzc05hbWUuTEVGVCA6XG4gICAgICAgIENsYXNzTmFtZS5SSUdIVFxuXG4gICAgICBpZiAobmV4dEVsZW1lbnQgJiYgJChuZXh0RWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSkpIHtcbiAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzbGlkZUV2ZW50ID0gdGhpcy5fdHJpZ2dlclNsaWRlRXZlbnQobmV4dEVsZW1lbnQsIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgICAgaWYgKHNsaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgICAgLy8gc29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnQpXG5cbiAgICAgIGxldCBzbGlkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNMSUQsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uYWxDbGFzc05hbWVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNMSURFKSkge1xuXG4gICAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbilcblxuICAgICAgICBVdGlsLnJlZmxvdyhuZXh0RWxlbWVudClcblxuICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICAkKG5leHRFbGVtZW50KVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhkaXJlY3Rpb24pXG5cbiAgICAgICAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgICAgICAgICQoYWN0aXZlRWxlbWVudClcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhkaXJlY3Rpb24pXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KSwgMClcblxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcblxuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICAgIHRoaXMuY3ljbGUoKVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSAgICAgID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBsZXQgX2NvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAkLmV4dGVuZChfY29uZmlnLCBjb25maWcpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWN0aW9uID0gdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBjb25maWcgOiBfY29uZmlnLnNsaWRlXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGRhdGEudG8oY29uZmlnKVxuXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgZGF0YVthY3Rpb25dKClcblxuICAgICAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwpIHtcbiAgICAgICAgICBkYXRhLnBhdXNlKClcbiAgICAgICAgICBkYXRhLmN5Y2xlKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RhdGFBcGlDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGxldCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuXG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0ID0gJChzZWxlY3RvcilbMF1cblxuICAgICAgaWYgKCF0YXJnZXQgfHwgISQodGFyZ2V0KS5oYXNDbGFzcyhDbGFzc05hbWUuQ0FST1VTRUwpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgY29uZmlnICAgICA9ICQuZXh0ZW5kKHt9LCAkKHRhcmdldCkuZGF0YSgpLCAkKHRoaXMpLmRhdGEoKSlcbiAgICAgIGxldCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtdG8nKVxuXG4gICAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgICBjb25maWcuaW50ZXJ2YWwgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcpXG5cbiAgICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAgICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKS50byhzbGlkZUluZGV4KVxuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1NMSURFLCBDYXJvdXNlbC5fZGF0YUFwaUNsaWNrSGFuZGxlcilcblxuICAkKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICAgICQoU2VsZWN0b3IuREFUQV9SSURFKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCAkY2Fyb3VzZWwgPSAkKHRoaXMpXG4gICAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJGNhcm91c2VsLCAkY2Fyb3VzZWwuZGF0YSgpKVxuICAgIH0pXG4gIH0pXG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENhcm91c2VsXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gQ2Fyb3VzZWxcblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IENvbGxhcHNlID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdjb2xsYXBzZSdcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjAuMCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5jb2xsYXBzZSdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuICBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gNjAwXG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICB0b2dnbGUgOiB0cnVlLFxuICAgIHBhcmVudCA6ICcnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICB0b2dnbGUgOiAnYm9vbGVhbicsXG4gICAgcGFyZW50IDogJ3N0cmluZydcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIFNIT1cgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICAgIFNIT1dOICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBISURFICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIElOICAgICAgICAgOiAnaW4nLFxuICAgIENPTExBUFNFICAgOiAnY29sbGFwc2UnLFxuICAgIENPTExBUFNJTkcgOiAnY29sbGFwc2luZycsXG4gICAgQ09MTEFQU0VEICA6ICdjb2xsYXBzZWQnXG4gIH1cblxuICBjb25zdCBEaW1lbnNpb24gPSB7XG4gICAgV0lEVEggIDogJ3dpZHRoJyxcbiAgICBIRUlHSFQgOiAnaGVpZ2h0J1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgQUNUSVZFUyAgICAgOiAnLnBhbmVsID4gLmluLCAucGFuZWwgPiAuY29sbGFwc2luZycsXG4gICAgREFUQV9UT0dHTEUgOiAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgQ29sbGFwc2Uge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgdGhpcy5fZWxlbWVudCAgICAgICAgID0gZWxlbWVudFxuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9ICQubWFrZUFycmF5KCQoXG4gICAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIyR7ZWxlbWVudC5pZH1cIl0sYCArXG4gICAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXRhcmdldD1cIiMke2VsZW1lbnQuaWR9XCJdYFxuICAgICAgKSlcblxuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbFxuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT05cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuSU4pKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3coKVxuICAgICAgfVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLklOKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGFjdGl2ZXNcbiAgICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgIGFjdGl2ZXMgPSAkLm1ha2VBcnJheSgkKFNlbGVjdG9yLkFDVElWRVMpKVxuICAgICAgICBpZiAoIWFjdGl2ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgYWN0aXZlcyA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBhY3RpdmVzRGF0YSA9ICQoYWN0aXZlcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVylcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGFjdGl2ZXMpLCAnaGlkZScpXG4gICAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgICAkKGFjdGl2ZXMpLmRhdGEoREFUQV9LRVksIG51bGwpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICAgIGxldCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LlNIT1dOKVxuICAgICAgfVxuXG4gICAgICBpZiAoIVV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICAgIGxldCBzY3JvbGxTaXplICAgICAgICAgICA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgICAhJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuSU4pKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBkaW1lbnNpb24gICAgICAgPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuICAgICAgbGV0IG9mZnNldERpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gRGltZW5zaW9uLldJRFRIID9cbiAgICAgICAgJ29mZnNldFdpZHRoJyA6ICdvZmZzZXRIZWlnaHQnXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbb2Zmc2V0RGltZW5zaW9uXX1weGBcblxuICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG5cbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgICBsZXQgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAgIC50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgICBpZiAoIVV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICB9XG5cbiAgICBzZXRUcmFuc2l0aW9uaW5nKGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nXG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fcGFyZW50ICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fZWxlbWVudCAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gbnVsbFxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbFxuICAgIH1cblxuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBjb25maWcpXG4gICAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKSAvLyBjb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG5cbiAgICBfZ2V0RGltZW5zaW9uKCkge1xuICAgICAgbGV0IGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhEaW1lbnNpb24uV0lEVEgpXG4gICAgICByZXR1cm4gaGFzV2lkdGggPyBEaW1lbnNpb24uV0lEVEggOiBEaW1lbnNpb24uSEVJR0hUXG4gICAgfVxuXG4gICAgX2dldFBhcmVudCgpIHtcbiAgICAgIGxldCBwYXJlbnQgICA9ICQodGhpcy5fY29uZmlnLnBhcmVudClbMF1cbiAgICAgIGxldCBzZWxlY3RvciA9XG4gICAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXBhcmVudD1cIiR7dGhpcy5fY29uZmlnLnBhcmVudH1cIl1gXG5cbiAgICAgICQocGFyZW50KS5maW5kKHNlbGVjdG9yKS5lYWNoKChpLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhcbiAgICAgICAgICBDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCksXG4gICAgICAgICAgW2VsZW1lbnRdXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBwYXJlbnRcbiAgICB9XG5cbiAgICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLklOKVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcblxuICAgICAgICBpZiAodHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICQodHJpZ2dlckFycmF5KVxuICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQsICFpc09wZW4pXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGxldCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgICAgcmV0dXJuIHNlbGVjdG9yID8gJChzZWxlY3RvcilbMF0gOiBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0ICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICAgIGxldCBkYXRhICAgID0gJHRoaXMuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgbGV0IF9jb25maWcgPSAkLmV4dGVuZChcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBEZWZhdWx0LFxuICAgICAgICAgICR0aGlzLmRhdGEoKSxcbiAgICAgICAgICB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcbiAgICAgICAgKVxuXG4gICAgICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IENvbGxhcHNlKHRoaXMsIF9jb25maWcpXG4gICAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IHRhcmdldCA9IENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudCh0aGlzKVxuICAgIGxldCBkYXRhICAgPSAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSlcbiAgICBsZXQgY29uZmlnID0gZGF0YSA/ICd0b2dnbGUnIDogJCh0aGlzKS5kYXRhKClcblxuICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZylcbiAgfSlcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29sbGFwc2VcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBDb2xsYXBzZVxuXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjApOiBkcm9wZG93bi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgRHJvcGRvd24gPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2Ryb3Bkb3duJ1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuMC4wJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmRyb3Bkb3duJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICDCoCAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gICAgSElEREVOICDCoCAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XICAgIMKgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgIMKgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0sgICDCoCAgICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICAgIEtFWURPV05fREFUQV9BUEkgOiBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBCQUNLRFJPUCA6ICdkcm9wZG93bi1iYWNrZHJvcCcsXG4gICAgRElTQUJMRUQgOiAnZGlzYWJsZWQnLFxuICAgIE9QRU4gICAgIDogJ29wZW4nXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBCQUNLRFJPUCAgICAgIDogJy5kcm9wZG93bi1iYWNrZHJvcCcsXG4gICAgREFUQV9UT0dHTEUgICA6ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsXG4gICAgRk9STV9DSElMRCAgICA6ICcuZHJvcGRvd24gZm9ybScsXG4gICAgUk9MRV9NRU5VICAgICA6ICdbcm9sZT1cIm1lbnVcIl0nLFxuICAgIFJPTEVfTElTVEJPWCAgOiAnW3JvbGU9XCJsaXN0Ym94XCJdJyxcbiAgICBOQVZCQVJfTkFWICAgIDogJy5uYXZiYXItbmF2JyxcbiAgICBWSVNJQkxFX0lURU1TIDogJ1tyb2xlPVwibWVudVwiXSBsaTpub3QoLmRpc2FibGVkKSBhLCAnXG4gICAgICAgICAgICAgICAgICArICdbcm9sZT1cImxpc3Rib3hcIl0gbGk6bm90KC5kaXNhYmxlZCkgYSdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBEcm9wZG93biB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGxldCBwYXJlbnQgICA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzKVxuICAgICAgbGV0IGlzQWN0aXZlID0gJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5PUEVOKVxuXG4gICAgICBEcm9wZG93bi5fY2xlYXJNZW51cygpXG5cbiAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAgKCEkKHBhcmVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZCQVJfTkFWKS5sZW5ndGgpKSB7XG5cbiAgICAgICAgLy8gaWYgbW9iaWxlIHdlIHVzZSBhIGJhY2tkcm9wIGJlY2F1c2UgY2xpY2sgZXZlbnRzIGRvbid0IGRlbGVnYXRlXG4gICAgICAgIGxldCBkcm9wZG93biAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTmFtZSA9IENsYXNzTmFtZS5CQUNLRFJPUFxuICAgICAgICAkKGRyb3Bkb3duKS5pbnNlcnRCZWZvcmUodGhpcylcbiAgICAgICAgJChkcm9wZG93bikub24oJ2NsaWNrJywgRHJvcGRvd24uX2NsZWFyTWVudXMpXG4gICAgICB9XG5cbiAgICAgIGxldCByZWxhdGVkVGFyZ2V0ID0geyByZWxhdGVkVGFyZ2V0IDogdGhpcyB9XG4gICAgICBsZXQgc2hvd0V2ZW50ICAgICA9ICQuRXZlbnQoRXZlbnQuU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgICAgJChwYXJlbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZvY3VzKClcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuXG4gICAgICAkKHBhcmVudCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAkKHBhcmVudCkudHJpZ2dlcigkLkV2ZW50KEV2ZW50LlNIT1dOLCByZWxhdGVkVGFyZ2V0KSlcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgfVxuXG5cbiAgICAvLyBwcml2YXRlXG5cbiAgICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LkNMSUNLLCB0aGlzLnRvZ2dsZSlcbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgKGRhdGEgPSBuZXcgRHJvcGRvd24odGhpcykpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddLmNhbGwodGhpcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC53aGljaCA9PT0gMykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGJhY2tkcm9wID0gJChTZWxlY3Rvci5CQUNLRFJPUClbMF1cbiAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJhY2tkcm9wKVxuICAgICAgfVxuXG4gICAgICBsZXQgdG9nZ2xlcyA9ICQubWFrZUFycmF5KCQoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZ2dsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHBhcmVudCAgICAgICAgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodG9nZ2xlc1tpXSlcbiAgICAgICAgbGV0IHJlbGF0ZWRUYXJnZXQgPSB7IHJlbGF0ZWRUYXJnZXQgOiB0b2dnbGVzW2ldIH1cblxuICAgICAgICBpZiAoISQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuT1BFTikpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgICAgICAgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSAmJlxuICAgICAgICAgICAoJC5jb250YWlucyhwYXJlbnQsIGV2ZW50LnRhcmdldCkpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG5cbiAgICAgICAgJChwYXJlbnQpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKVxuICAgICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGxldCBwYXJlbnRcbiAgICAgIGxldCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcGFyZW50ID0gJChzZWxlY3RvcilbMF1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgICAgaWYgKCEvKDM4fDQwfDI3fDMyKS8udGVzdChldmVudC53aGljaCkgfHxcbiAgICAgICAgIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBwYXJlbnQgICA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzKVxuICAgICAgbGV0IGlzQWN0aXZlID0gJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5PUEVOKVxuXG4gICAgICBpZiAoKCFpc0FjdGl2ZSAmJiBldmVudC53aGljaCAhPT0gMjcpIHx8XG4gICAgICAgICAgIChpc0FjdGl2ZSAmJiBldmVudC53aGljaCA9PT0gMjcpKSB7XG5cbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAyNykge1xuICAgICAgICAgIGxldCB0b2dnbGUgPSAkKHBhcmVudCkuZmluZChTZWxlY3Rvci5EQVRBX1RPR0dMRSlbMF1cbiAgICAgICAgICAkKHRvZ2dsZSkudHJpZ2dlcignZm9jdXMnKVxuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbGljaycpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgaXRlbXMgPSAkLm1ha2VBcnJheSgkKFNlbGVjdG9yLlZJU0lCTEVfSVRFTVMpKVxuXG4gICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5vZmZzZXRXaWR0aCB8fCBpdGVtLm9mZnNldEhlaWdodFxuICAgICAgfSlcblxuICAgICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuXG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM4ICYmIGluZGV4ID4gMCkgeyAvLyB1cFxuICAgICAgICBpbmRleC0tXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gNDAgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7IC8vIGRvd25cbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuXG4gICAgICBpZiAoIX5pbmRleCkge1xuICAgICAgICBpbmRleCA9IDBcbiAgICAgIH1cblxuICAgICAgaXRlbXNbaW5kZXhdLmZvY3VzKClcbiAgICB9XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJChkb2N1bWVudClcbiAgICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsICBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAgIC5vbihFdmVudC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3Rvci5ST0xFX01FTlUsICAgIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gICAgLm9uKEV2ZW50LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yLlJPTEVfTElTVEJPWCwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLl9jbGVhck1lbnVzKVxuICAgIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIERyb3Bkb3duLnByb3RvdHlwZS50b2dnbGUpXG4gICAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5GT1JNX0NISUxELCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH0pXG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gRHJvcGRvd25cblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1vZGFsID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgICAgICA9ICdtb2RhbCdcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgICAgICA9ICc0LjAuMCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICAgICAgICA9ICdicy5tb2RhbCdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgICAgICAgID0gJC5mbltOQU1FXVxuICBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OICAgICAgICAgID0gMzAwXG4gIGNvbnN0IEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04gPSAxNTBcblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGJhY2tkcm9wIDogdHJ1ZSxcbiAgICBrZXlib2FyZCA6IHRydWUsXG4gICAgZm9jdXMgICAgOiB0cnVlLFxuICAgIHNob3cgICAgIDogdHJ1ZVxuICB9XG5cbiAgY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gICAgYmFja2Ryb3AgOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAga2V5Ym9hcmQgOiAnYm9vbGVhbicsXG4gICAgZm9jdXMgICAgOiAnYm9vbGVhbicsXG4gICAgc2hvdyAgICAgOiAnYm9vbGVhbidcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIEhJREUgICDCoCAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gwqAgICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XICAgwqAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gICAgU0hPV04gIMKgICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBGT0NVU0lOICAgICAgICAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgICBSRVNJWkUgICAgICAgICAgICA6IGByZXNpemUke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RJU01JU1MgICAgIDogYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICAgIEtFWURPV05fRElTTUlTUyAgIDogYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VVUF9ESVNNSVNTICAgOiBgbW91c2V1cC5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgICBNT1VTRURPV05fRElTTUlTUyA6IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgU0NST0xMQkFSX01FQVNVUkVSIDogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgICBCQUNLRFJPUCAgICAgICAgICAgOiAnbW9kYWwtYmFja2Ryb3AnLFxuICAgIE9QRU4gICAgICAgICAgICAgICA6ICdtb2RhbC1vcGVuJyxcbiAgICBGQURFICAgICAgICAgICAgICAgOiAnZmFkZScsXG4gICAgSU4gICAgICAgICAgICAgICAgIDogJ2luJ1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgRElBTE9HICAgICAgICAgICAgIDogJy5tb2RhbC1kaWFsb2cnLFxuICAgIERBVEFfVE9HR0xFICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gICAgREFUQV9ESVNNSVNTICAgICAgIDogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gICAgRklYRURfQ09OVEVOVCAgICAgIDogJy5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkJ1xuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNsYXNzIE1vZGFsIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gZWxlbWVudFxuICAgICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9ICQoZWxlbWVudCkuZmluZChTZWxlY3Rvci5ESUFMT0cpWzBdXG4gICAgICB0aGlzLl9iYWNrZHJvcCAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5faXNTaG93biAgICAgICAgICAgICA9IGZhbHNlXG4gICAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gZmFsc2VcbiAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IDBcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoICAgICAgPSAwXG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0XG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuXG4gICAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICBsZXQgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWVcblxuICAgICAgdGhpcy5fY2hlY2tTY3JvbGxiYXIoKVxuICAgICAgdGhpcy5fc2V0U2Nyb2xsYmFyKClcblxuICAgICAgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhDbGFzc05hbWUuT1BFTilcblxuICAgICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKFxuICAgICAgICBFdmVudC5DTElDS19ESVNNSVNTLFxuICAgICAgICBTZWxlY3Rvci5EQVRBX0RJU01JU1MsXG4gICAgICAgICQucHJveHkodGhpcy5oaWRlLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICAkKHRoaXMuX2RpYWxvZykub24oRXZlbnQuTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRXZlbnQuTU9VU0VVUF9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGF0Ll9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcChcbiAgICAgICAgJC5wcm94eSh0aGlzLl9zaG93RWxlbWVudCwgdGhpcywgcmVsYXRlZFRhcmdldClcbiAgICAgIClcbiAgICB9XG5cbiAgICBoaWRlKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBsZXQgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcblxuICAgICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuRk9DVVNJTilcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LkNMSUNLX0RJU01JU1MpXG4gICAgICAkKHRoaXMuX2RpYWxvZykub2ZmKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJlxuICAgICAgICAgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSkge1xuXG4gICAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICQucHJveHkodGhpcy5faGlkZU1vZGFsLCB0aGlzKSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hpZGVNb2RhbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgICAgJCh3aW5kb3cpLm9mZihFVkVOVF9LRVkpXG4gICAgICAkKGRvY3VtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkub2ZmKEVWRU5UX0tFWSlcblxuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fYmFja2Ryb3AgICAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2lzU2hvd24gICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gbnVsbFxuICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IG51bGxcbiAgICAgIHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBudWxsXG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gbnVsbFxuICAgIH1cblxuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBjb25maWcpXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuICAgIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICBsZXQgdHJhbnNpdGlvbiA9IFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiZcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcblxuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSkge1xuICAgICAgICAvLyBkb24ndCBtb3ZlIG1vZGFscyBkb20gcG9zaXRpb25cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICAgIH1cblxuICAgICAgbGV0IHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG5cbiAgICAgIGxldCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudClcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgJCh0aGlzLl9kaWFsb2cpXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCB0cmFuc2l0aW9uQ29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgICAkKGRvY3VtZW50KVxuICAgICAgICAub2ZmKEV2ZW50LkZPQ1VTSU4pIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgICAub24oRXZlbnQuRk9DVVNJTiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgICghJCh0aGlzLl9lbGVtZW50KS5oYXMoZXZlbnQudGFyZ2V0KS5sZW5ndGgpKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuS0VZRE9XTl9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDI3KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5LRVlET1dOX0RJU01JU1MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgJC5wcm94eSh0aGlzLl9oYW5kbGVVcGRhdGUsIHRoaXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2hpZGVNb2RhbCgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTilcbiAgICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsYmFyKClcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgICAgaWYgKHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICAgIGxldCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkgP1xuICAgICAgICBDbGFzc05hbWUuRkFERSA6ICcnXG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICBsZXQgZG9BbmltYXRlID0gVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiBhbmltYXRlXG5cbiAgICAgICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDbGFzc05hbWUuQkFDS0RST1BcblxuICAgICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKGFuaW1hdGUpXG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0tfRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChkb0FuaW1hdGUpIHtcbiAgICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKENsYXNzTmFtZS5JTilcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRvQW5pbWF0ZSkge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFjaylcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTilcblxuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgICAgbGV0IGNhbGxiYWNrUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKClcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJlxuICAgICAgICAgICAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpKSB7XG4gICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2tSZW1vdmUpXG4gICAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgICAvLyB0b2RvIChmYXQpOiB0aGVzZSBzaG91bGQgcHJvYmFibHkgYmUgcmVmYWN0b3JlZCBvdXQgb2YgbW9kYWwuanNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBfaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgICB9XG5cbiAgICBfYWRqdXN0RGlhbG9nKCkge1xuICAgICAgbGV0IGlzTW9kYWxPdmVyZmxvd2luZyA9XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgICBpZiAoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHh+YFxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gICAgfVxuXG4gICAgX2NoZWNrU2Nyb2xsYmFyKCkge1xuICAgICAgbGV0IGZ1bGxXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICBpZiAoIWZ1bGxXaW5kb3dXaWR0aCkgeyAvLyB3b3JrYXJvdW5kIGZvciBtaXNzaW5nIHdpbmRvdy5pbm5lcldpZHRoIGluIElFOFxuICAgICAgICBsZXQgZG9jdW1lbnRFbGVtZW50UmVjdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBmdWxsV2luZG93V2lkdGggPVxuICAgICAgICAgIGRvY3VtZW50RWxlbWVudFJlY3QucmlnaHQgLSBNYXRoLmFicyhkb2N1bWVudEVsZW1lbnRSZWN0LmxlZnQpXG4gICAgICB9XG4gICAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBmdWxsV2luZG93V2lkdGhcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICAgIH1cblxuICAgIF9zZXRTY3JvbGxiYXIoKSB7XG4gICAgICBsZXQgYm9keVBhZGRpbmcgPSBwYXJzZUludChcbiAgICAgICAgJChTZWxlY3Rvci5GSVhFRF9DT05URU5UKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLFxuICAgICAgICAxMFxuICAgICAgKVxuXG4gICAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgfHwgJydcblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID1cbiAgICAgICAgICBib2R5UGFkZGluZyArIGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZXNldFNjcm9sbGJhcigpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZ1xuICAgIH1cblxuICAgIF9nZXRTY3JvbGxiYXJXaWR0aCgpIHsgLy8gdGh4IGQud2Fsc2hcbiAgICAgIGxldCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENsYXNzTmFtZS5TQ1JPTExCQVJfTUVBU1VSRVJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KVxuICAgICAgbGV0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdilcbiAgICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aFxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgbGV0IF9jb25maWcgPSAkLmV4dGVuZChcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBNb2RhbC5EZWZhdWx0LFxuICAgICAgICAgICQodGhpcykuZGF0YSgpLFxuICAgICAgICAgIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuICAgICAgICApXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBNb2RhbCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuXG4gICAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5zaG93KSB7XG4gICAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHRhcmdldFxuICAgIGxldCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXVxuICAgIH1cblxuICAgIGxldCBjb25maWcgPSAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSkgP1xuICAgICAgJ3RvZ2dsZScgOiAkLmV4dGVuZCh7fSwgJCh0YXJnZXQpLmRhdGEoKSwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICBpZiAodGhpcy50YWdOYW1lID09PSAnQScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBsZXQgJHRhcmdldCA9ICQodGFyZ2V0KS5vbmUoRXZlbnQuU0hPVywgKHNob3dFdmVudCkgPT4ge1xuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAkdGFyZ2V0Lm9uZShFdmVudC5ISURERU4sICgpID0+IHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgTW9kYWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnLCB0aGlzKVxuICB9KVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBNb2RhbFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIE1vZGFsXG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsImltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMCk6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFBvcG92ZXIgPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ3BvcG92ZXInXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMucG9wb3ZlcidcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRGVmYXVsdCA9ICQuZXh0ZW5kKHt9LCBUb29sdGlwLkRlZmF1bHQsIHtcbiAgICBwbGFjZW1lbnQgOiAncmlnaHQnLFxuICAgIHRyaWdnZXIgICA6ICdjbGljaycsXG4gICAgY29udGVudCAgIDogJycsXG4gICAgdGVtcGxhdGUgIDogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nXG4gICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+J1xuICAgICAgICAgICAgICArICc8aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCI+PC9oMz4nXG4gICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnRcIj48L2Rpdj48L2Rpdj4nXG4gIH0pXG5cbiAgY29uc3QgRGVmYXVsdFR5cGUgPSAkLmV4dGVuZCh7fSwgVG9vbHRpcC5EZWZhdWx0VHlwZSwge1xuICAgIGNvbnRlbnQgOiAnKHN0cmluZ3xmdW5jdGlvbiknXG4gIH0pXG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIEZBREUgOiAnZmFkZScsXG4gICAgSU4gIDogJ2luJ1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgVElUTEUgICA6ICcucG9wb3Zlci10aXRsZScsXG4gICAgQ09OVEVOVCA6ICcucG9wb3Zlci1jb250ZW50JyxcbiAgICBBUlJPVyAgIDogJy5wb3BvdmVyLWFycm93J1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gICAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBJTlNFUlRFRCAgIDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgICBGT0NVU0lOICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICAgIEZPQ1VTT1VUICAgOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICAgIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VMRUFWRSA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcblxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT05cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICAgIHJldHVybiBEQVRBX0tFWVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgICByZXR1cm4gRXZlbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICAgIHJldHVybiBFVkVOVF9LRVlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gICAgfVxuXG5cbiAgICAvLyBvdmVycmlkZXNcblxuICAgIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIH1cblxuICAgIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gKHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF0pXG4gICAgfVxuXG4gICAgc2V0Q29udGVudCgpIHtcbiAgICAgIGxldCB0aXAgICAgICAgICAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgICAgbGV0IHRpdGxlICAgICAgICA9IHRoaXMuZ2V0VGl0bGUoKVxuICAgICAgbGV0IGNvbnRlbnQgICAgICA9IHRoaXMuX2dldENvbnRlbnQoKVxuICAgICAgbGV0IHRpdGxlRWxlbWVudCA9ICQodGlwKS5maW5kKFNlbGVjdG9yLlRJVExFKVswXVxuXG4gICAgICBpZiAodGl0bGVFbGVtZW50KSB7XG4gICAgICAgIHRpdGxlRWxlbWVudFtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5odG1sID8gJ2lubmVySFRNTCcgOiAnaW5uZXJUZXh0J1xuICAgICAgICBdID0gdGl0bGVcbiAgICAgIH1cblxuICAgICAgLy8gd2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuICAgICAgJCh0aXApLmZpbmQoU2VsZWN0b3IuQ09OVEVOVCkuY2hpbGRyZW4oKS5kZXRhY2goKS5lbmQoKVtcbiAgICAgICAgdGhpcy5jb25maWcuaHRtbCA/XG4gICAgICAgICAgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyA/ICdodG1sJyA6ICdhcHBlbmQnKSA6ICd0ZXh0J1xuICAgICAgXShjb250ZW50KVxuXG4gICAgICAkKHRpcClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLklOKVxuXG4gICAgICB0aGlzLmNsZWFudXBUZXRoZXIoKVxuICAgIH1cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpXG4gICAgICAgIHx8ICh0eXBlb2YgdGhpcy5jb25maWcuY29udGVudCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbnRlbnQuY2FsbCh0aGlzLmVsZW1lbnQpIDpcbiAgICAgICAgICAgICAgdGhpcy5jb25maWcuY29udGVudClcbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgbGV0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgICBpZiAoIWRhdGEgJiYgL2Rlc3Ryb3l8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFBvcG92ZXIodGhpcywgX2NvbmZpZylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFBvcG92ZXJcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIFBvcG92ZXJcblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjApOiBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFNjcm9sbFNweSA9ICgoJCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdzY3JvbGxzcHknXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjAuMCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnNjcm9sbHNweSdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgREFUQV9BUElfS0VZICAgICAgID0gJy5kYXRhLWFwaSdcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG4gIGNvbnN0IERlZmF1bHQgPSB7XG4gICAgb2Zmc2V0IDogMTAsXG4gICAgbWV0aG9kIDogJ2F1dG8nLFxuICAgIHRhcmdldCA6ICcnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICBvZmZzZXQgOiAnbnVtYmVyJyxcbiAgICBtZXRob2QgOiAnc3RyaW5nJyxcbiAgICB0YXJnZXQgOiAnKHN0cmluZ3xlbGVtZW50KSdcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIEFDVElWQVRFICAgICAgOiBgYWN0aXZhdGUke0VWRU5UX0tFWX1gLFxuICAgIFNDUk9MTCAgICAgICAgOiBgc2Nyb2xsJHtFVkVOVF9LRVl9YCxcbiAgICBMT0FEX0RBVEFfQVBJIDogYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgRFJPUERPV05fSVRFTSA6ICdkcm9wZG93bi1pdGVtJyxcbiAgICBEUk9QRE9XTl9NRU5VIDogJ2Ryb3Bkb3duLW1lbnUnLFxuICAgIE5BVl9MSU5LICAgICAgOiAnbmF2LWxpbmsnLFxuICAgIE5BViAgICAgICAgICAgOiAnbmF2JyxcbiAgICBBQ1RJVkUgICAgICAgIDogJ2FjdGl2ZSdcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIERBVEFfU1BZICAgICAgICA6ICdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nLFxuICAgIEFDVElWRSAgICAgICAgICA6ICcuYWN0aXZlJyxcbiAgICBMSVNUX0lURU0gICAgICAgOiAnLmxpc3QtaXRlbScsXG4gICAgTEkgICAgICAgICAgICAgIDogJ2xpJyxcbiAgICBMSV9EUk9QRE9XTiAgICAgOiAnbGkuZHJvcGRvd24nLFxuICAgIE5BVl9MSU5LUyAgICAgICA6ICcubmF2LWxpbmsnLFxuICAgIERST1BET1dOICAgICAgICA6ICcuZHJvcGRvd24nLFxuICAgIERST1BET1dOX0lURU1TICA6ICcuZHJvcGRvd24taXRlbScsXG4gICAgRFJPUERPV05fVE9HR0xFIDogJy5kcm9wZG93bi10b2dnbGUnXG4gIH1cblxuICBjb25zdCBPZmZzZXRNZXRob2QgPSB7XG4gICAgT0ZGU0VUICAgOiAnb2Zmc2V0JyxcbiAgICBQT1NJVElPTiA6ICdwb3NpdGlvbidcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBTY3JvbGxTcHkge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgID0gZWxlbWVudFxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogZWxlbWVudFxuICAgICAgdGhpcy5fY29uZmlnICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgICB0aGlzLl9zZWxlY3RvciAgICAgID0gYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTZWxlY3Rvci5OQVZfTElOS1N9LGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NlbGVjdG9yLkRST1BET1dOX0lURU1TfWBcbiAgICAgIHRoaXMuX29mZnNldHMgICAgICAgPSBbXVxuICAgICAgdGhpcy5fdGFyZ2V0cyAgICAgICA9IFtdXG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgID0gbnVsbFxuICAgICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IDBcblxuICAgICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS5vbihFdmVudC5TQ1JPTEwsICQucHJveHkodGhpcy5fcHJvY2VzcywgdGhpcykpXG5cbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICB0aGlzLl9wcm9jZXNzKClcbiAgICB9XG5cblxuICAgIC8vIGdldHRlcnNcblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRcbiAgICB9XG5cblxuICAgIC8vIHB1YmxpY1xuXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgIGxldCBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCAhPT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3cgP1xuICAgICAgICBPZmZzZXRNZXRob2QuUE9TSVRJT04gOiBPZmZzZXRNZXRob2QuT0ZGU0VUXG5cbiAgICAgIGxldCBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bycgP1xuICAgICAgICBhdXRvTWV0aG9kIDogdGhpcy5fY29uZmlnLm1ldGhvZFxuXG4gICAgICBsZXQgb2Zmc2V0QmFzZSA9IG9mZnNldE1ldGhvZCA9PT0gT2Zmc2V0TWV0aG9kLlBPU0lUSU9OID9cbiAgICAgICAgdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOiAwXG5cbiAgICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG5cbiAgICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG5cbiAgICAgIGxldCB0YXJnZXRzID0gJC5tYWtlQXJyYXkoJCh0aGlzLl9zZWxlY3RvcikpXG5cbiAgICAgIHRhcmdldHNcbiAgICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldCB0YXJnZXRcbiAgICAgICAgICBsZXQgdGFyZ2V0U2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgICAgICAgIGlmICh0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgICAgICAgdGFyZ2V0ID0gJCh0YXJnZXRTZWxlY3RvcilbMF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGFyZ2V0ICYmICh0YXJnZXQub2Zmc2V0V2lkdGggfHwgdGFyZ2V0Lm9mZnNldEhlaWdodCkpIHtcbiAgICAgICAgICAgIC8vIHRvZG8gKGZhdCk6IHJlbW92ZSBza2V0Y2ggcmVsaWFuY2Ugb24galF1ZXJ5IHBvc2l0aW9uL29mZnNldFxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgJCh0YXJnZXQpW29mZnNldE1ldGhvZF0oKS50b3AgKyBvZmZzZXRCYXNlLFxuICAgICAgICAgICAgICB0YXJnZXRTZWxlY3RvclxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgID0+IGl0ZW0pXG4gICAgICAgIC5zb3J0KChhLCBiKSAgICA9PiBhWzBdIC0gYlswXSlcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICB0aGlzLl9vZmZzZXRzLnB1c2goaXRlbVswXSlcbiAgICAgICAgICB0aGlzLl90YXJnZXRzLnB1c2goaXRlbVsxXSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGxcbiAgICAgIHRoaXMuX2NvbmZpZyAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9zZWxlY3RvciAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fb2Zmc2V0cyAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3RhcmdldHMgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgID0gbnVsbFxuICAgICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCBpZCA9ICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnKVxuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgaWQgPSBVdGlsLmdldFVJRChOQU1FKVxuICAgICAgICAgICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnLCBpZClcbiAgICAgICAgfVxuICAgICAgICBjb25maWcudGFyZ2V0ID0gYCMke2lkfWBcbiAgICAgIH1cblxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcblxuICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuICAgIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID9cbiAgICAgICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFkgOiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFRvcFxuICAgIH1cblxuICAgIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgTWF0aC5tYXgoXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgICApXG4gICAgfVxuXG4gICAgX3Byb2Nlc3MoKSB7XG4gICAgICBsZXQgc2Nyb2xsVG9wICAgID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgICBsZXQgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICAgIGxldCBtYXhTY3JvbGwgICAgPSB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgICAgICsgc2Nyb2xsSGVpZ2h0XG4gICAgICAgIC0gdGhpcy5fc2Nyb2xsRWxlbWVudC5vZmZzZXRIZWlnaHRcblxuICAgICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV1cblxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzWzBdKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgICAgdGhpcy5fY2xlYXIoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX29mZnNldHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGxldCBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXVxuICAgICAgICAgICAgJiYgc2Nyb2xsVG9wID49IHRoaXMuX29mZnNldHNbaV1cbiAgICAgICAgICAgICYmICh0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pXG5cbiAgICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgICB0aGlzLl9jbGVhcigpXG5cbiAgICAgIGxldCBxdWVyaWVzID0gdGhpcy5fc2VsZWN0b3Iuc3BsaXQoJywnKVxuICAgICAgcXVlcmllcyAgICAgPSBxdWVyaWVzLm1hcCgoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke3NlbGVjdG9yfVtkYXRhLXRhcmdldD1cIiR7dGFyZ2V0fVwiXSxgICtcbiAgICAgICAgICAgICAgIGAke3NlbGVjdG9yfVtocmVmPVwiJHt0YXJnZXR9XCJdYFxuICAgICAgfSlcblxuICAgICAgbGV0ICRsaW5rID0gJChxdWVyaWVzLmpvaW4oJywnKSlcblxuICAgICAgaWYgKCRsaW5rLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgICAkbGluay5jbG9zZXN0KFNlbGVjdG9yLkRST1BET1dOKS5maW5kKFNlbGVjdG9yLkRST1BET1dOX1RPR0dMRSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgJGxpbmsuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRvZG8gKGZhdCkgdGhpcyBpcyBraW5kYSBzdXPigKZcbiAgICAgICAgLy8gcmVjdXJzaXZlbHkgYWRkIGFjdGl2ZXMgdG8gdGVzdGVkIG5hdi1saW5rc1xuICAgICAgICAkbGluay5wYXJlbnRzKFNlbGVjdG9yLkxJKS5maW5kKFNlbGVjdG9yLk5BVl9MSU5LUykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS50cmlnZ2VyKEV2ZW50LkFDVElWQVRFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBfY2xlYXIoKSB7XG4gICAgICAkKHRoaXMuX3NlbGVjdG9yKS5maWx0ZXIoU2VsZWN0b3IuQUNUSVZFKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgbGV0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgfHwgbnVsbFxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgU2Nyb2xsU3B5KHRoaXMsIF9jb25maWcpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICAgIGxldCBzY3JvbGxTcHlzID0gJC5tYWtlQXJyYXkoJChTZWxlY3Rvci5EQVRBX1NQWSkpXG5cbiAgICBmb3IgKGxldCBpID0gc2Nyb2xsU3B5cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGxldCAkc3B5ID0gJChzY3JvbGxTcHlzW2ldKVxuICAgICAgU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkc3B5LCAkc3B5LmRhdGEoKSlcbiAgICB9XG4gIH0pXG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBTY3JvbGxTcHlcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gU2Nyb2xsU3B5XG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjApOiB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFRhYiA9ICgoJCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAndGFiJ1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuMC4wJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLnRhYidcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuICBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gICAgSElEREVOICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgRFJPUERPV05fTUVOVSA6ICdkcm9wZG93bi1tZW51JyxcbiAgICBBQ1RJVkUgICAgICAgIDogJ2FjdGl2ZScsXG4gICAgRkFERSAgICAgICAgICA6ICdmYWRlJyxcbiAgICBJTiAgICAgICAgICAgIDogJ2luJ1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgQSAgICAgICAgICAgICAgICAgICAgIDogJ2EnLFxuICAgIExJICAgICAgICAgICAgICAgICAgICA6ICdsaScsXG4gICAgRFJPUERPV04gICAgICAgICAgICAgIDogJy5kcm9wZG93bicsXG4gICAgVUwgICAgICAgICAgICAgICAgICAgIDogJ3VsOm5vdCguZHJvcGRvd24tbWVudSknLFxuICAgIEZBREVfQ0hJTEQgICAgICAgICAgICA6ICc+IC5uYXYtaXRlbSAuZmFkZSwgPiAuZmFkZScsXG4gICAgQUNUSVZFICAgICAgICAgICAgICAgIDogJy5hY3RpdmUnLFxuICAgIEFDVElWRV9DSElMRCAgICAgICAgICA6ICc+IC5uYXYtaXRlbSA+IC5hY3RpdmUsID4gLmFjdGl2ZScsXG4gICAgREFUQV9UT0dHTEUgICAgICAgICAgIDogJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtdG9nZ2xlPVwicGlsbFwiXScsXG4gICAgRFJPUERPV05fVE9HR0xFICAgICAgIDogJy5kcm9wZG93bi10b2dnbGUnLFxuICAgIERST1BET1dOX0FDVElWRV9DSElMRCA6ICc+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgVGFiIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAmJlxuICAgICAgICAgKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpICYmXG4gICAgICAgICAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuQUNUSVZFKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXRcbiAgICAgIGxldCBwcmV2aW91c1xuICAgICAgbGV0IHVsRWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChTZWxlY3Rvci5VTClbMF1cbiAgICAgIGxldCBzZWxlY3RvciAgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHVsRWxlbWVudCkge1xuICAgICAgICBwcmV2aW91cyA9ICQubWFrZUFycmF5KCQodWxFbGVtZW50KS5maW5kKFNlbGVjdG9yLkFDVElWRSkpXG4gICAgICAgIHByZXZpb3VzID0gcHJldmlvdXNbcHJldmlvdXMubGVuZ3RoIC0gMV1cbiAgICAgIH1cblxuICAgICAgbGV0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KVxuXG4gICAgICBsZXQgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KVxuXG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHxcbiAgICAgICAgIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgdGFyZ2V0ID0gJChzZWxlY3RvcilbMF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWN0aXZhdGUoXG4gICAgICAgIHRoaXMuX2VsZW1lbnQsXG4gICAgICAgIHVsRWxlbWVudFxuICAgICAgKVxuXG4gICAgICBsZXQgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBoaWRkZW5FdmVudCA9ICQuRXZlbnQoRXZlbnQuSElEREVOLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzaG93bkV2ZW50ICA9ICQuRXZlbnQoRXZlbnQuU0hPV04sIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgICB9KVxuXG4gICAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZGVuRXZlbnQpXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9hY3RpdmF0ZShlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgICBsZXQgYWN0aXZlICAgICAgICAgID0gJChjb250YWluZXIpLmZpbmQoU2VsZWN0b3IuQUNUSVZFX0NISUxEKVswXVxuICAgICAgbGV0IGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrXG4gICAgICAgICYmIFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKClcbiAgICAgICAgJiYgKChhY3RpdmUgJiYgJChhY3RpdmUpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSlcbiAgICAgICAgICAgfHwgQm9vbGVhbigkKGNvbnRhaW5lcikuZmluZChTZWxlY3Rvci5GQURFX0NISUxEKVswXSkpXG5cbiAgICAgIGxldCBjb21wbGV0ZSA9ICQucHJveHkoXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db21wbGV0ZSxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgYWN0aXZlLFxuICAgICAgICBpc1RyYW5zaXRpb25pbmcsXG4gICAgICAgIGNhbGxiYWNrXG4gICAgICApXG5cbiAgICAgIGlmIChhY3RpdmUgJiYgaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgICQoYWN0aXZlKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAkKGFjdGl2ZSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLklOKVxuICAgICAgfVxuICAgIH1cblxuICAgIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBpc1RyYW5zaXRpb25pbmcsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuXG4gICAgICAgIGxldCBkcm9wZG93bkNoaWxkID0gJChhY3RpdmUpLmZpbmQoXG4gICAgICAgICAgU2VsZWN0b3IuRFJPUERPV05fQUNUSVZFX0NISUxEXG4gICAgICAgIClbMF1cblxuICAgICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICAgICQoZHJvcGRvd25DaGlsZCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgIH1cblxuICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgICBpZiAoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIFV0aWwucmVmbG93KGVsZW1lbnQpXG4gICAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLklOKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJlxuICAgICAgICAgKCQoZWxlbWVudC5wYXJlbnROb2RlKS5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUERPV05fTUVOVSkpKSB7XG5cbiAgICAgICAgbGV0IGRyb3Bkb3duRWxlbWVudCA9ICQoZWxlbWVudCkuY2xvc2VzdChTZWxlY3Rvci5EUk9QRE9XTilbMF1cbiAgICAgICAgaWYgKGRyb3Bkb3duRWxlbWVudCkge1xuICAgICAgICAgICQoZHJvcGRvd25FbGVtZW50KS5maW5kKFNlbGVjdG9yLkRST1BET1dOX1RPR0dMRSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgICBsZXQgZGF0YSAgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBkYXRhID0gbmV3IFRhYih0aGlzKVxuICAgICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkKGRvY3VtZW50KVxuICAgIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdzaG93JylcbiAgfSlcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gVGFiLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRhYlxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gVGFiLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBUYWJcblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMCk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFRvb2x0aXAgPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ3Rvb2x0aXAnXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMudG9vbHRpcCdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSAxNTBcbiAgY29uc3QgQ0xBU1NfUFJFRklYICAgICAgICA9ICdicy10ZXRoZXInXG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBhbmltYXRpb24gICA6IHRydWUsXG4gICAgdGVtcGxhdGUgICAgOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPidcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PidcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgdHJpZ2dlciAgICAgOiAnaG92ZXIgZm9jdXMnLFxuICAgIHRpdGxlICAgICAgIDogJycsXG4gICAgZGVsYXkgICAgICAgOiAwLFxuICAgIGh0bWwgICAgICAgIDogZmFsc2UsXG4gICAgc2VsZWN0b3IgICAgOiBmYWxzZSxcbiAgICBwbGFjZW1lbnQgICA6ICd0b3AnLFxuICAgIG9mZnNldCAgICAgIDogJzAgMCcsXG4gICAgY29uc3RyYWludHMgOiBbXVxuICB9XG5cbiAgY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gICAgYW5pbWF0aW9uICAgOiAnYm9vbGVhbicsXG4gICAgdGVtcGxhdGUgICAgOiAnc3RyaW5nJyxcbiAgICB0aXRsZSAgICAgICA6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgdHJpZ2dlciAgICAgOiAnc3RyaW5nJyxcbiAgICBkZWxheSAgICAgICA6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGh0bWwgICAgICAgIDogJ2Jvb2xlYW4nLFxuICAgIHNlbGVjdG9yICAgIDogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHBsYWNlbWVudCAgIDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBvZmZzZXQgICAgICA6ICdzdHJpbmcnLFxuICAgIGNvbnN0cmFpbnRzIDogJ2FycmF5J1xuICB9XG5cbiAgY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgICBUT1AgICAgOiAnYm90dG9tIGNlbnRlcicsXG4gICAgUklHSFQgIDogJ21pZGRsZSBsZWZ0JyxcbiAgICBCT1RUT00gOiAndG9wIGNlbnRlcicsXG4gICAgTEVGVCAgIDogJ21pZGRsZSByaWdodCdcbiAgfVxuXG4gIGNvbnN0IEhvdmVyU3RhdGUgPSB7XG4gICAgSU4gIDogJ2luJyxcbiAgICBPVVQgOiAnb3V0J1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gICAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBJTlNFUlRFRCAgIDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgICBGT0NVU0lOICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICAgIEZPQ1VTT1VUICAgOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICAgIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VMRUFWRSA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIEZBREUgOiAnZmFkZScsXG4gICAgSU4gICA6ICdpbidcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIFRPT0xUSVAgICAgICAgOiAnLnRvb2x0aXAnLFxuICAgIFRPT0xUSVBfSU5ORVIgOiAnLnRvb2x0aXAtaW5uZXInXG4gIH1cblxuICBjb25zdCBUZXRoZXJDbGFzcyA9IHtcbiAgICBlbGVtZW50IDogZmFsc2UsXG4gICAgZW5hYmxlZCA6IGZhbHNlXG4gIH1cblxuICBjb25zdCBUcmlnZ2VyID0ge1xuICAgIEhPVkVSICA6ICdob3ZlcicsXG4gICAgRk9DVVMgIDogJ2ZvY3VzJyxcbiAgICBDTElDSyAgOiAnY2xpY2snLFxuICAgIE1BTlVBTCA6ICdtYW51YWwnXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgVG9vbHRpcCB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcblxuICAgICAgLy8gcHJpdmF0ZVxuICAgICAgdGhpcy5faXNFbmFibGVkICAgICAgPSB0cnVlXG4gICAgICB0aGlzLl90aW1lb3V0ICAgICAgICA9IDBcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgID0gJydcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgID0ge31cbiAgICAgIHRoaXMuX3RldGhlciAgICAgICAgID0gbnVsbFxuXG4gICAgICAvLyBwcm90ZWN0ZWRcbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICAgIHRoaXMuY29uZmlnICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgICB0aGlzLnRpcCAgICAgPSBudWxsXG5cbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpXG5cbiAgICB9XG5cblxuICAgIC8vIGdldHRlcnNcblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgICByZXR1cm4gREFUQV9LRVlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgICAgcmV0dXJuIEV2ZW50XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgICByZXR1cm4gRVZFTlRfS0VZXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICBlbmFibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgICB9XG5cbiAgICB0b2dnbGUoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBsZXQgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICAgICAgbGV0IGNvbnRleHQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgICAgIClcbiAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLklOKSkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgICAgdGhpcy5jbGVhbnVwVGV0aGVyKClcblxuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLm9mZih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcblxuICAgICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAgICQodGhpcy50aXApLnJlbW92ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzRW5hYmxlZCAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fdGltZW91dCAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgID0gbnVsbFxuICAgICAgdGhpcy5fdGV0aGVyICAgICAgICAgPSBudWxsXG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGxcbiAgICAgIHRoaXMuY29uZmlnICA9IG51bGxcbiAgICAgIHRoaXMudGlwICAgICA9IG51bGxcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgbGV0IHNob3dFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKVxuXG4gICAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgICBsZXQgaXNJblRoZURvbSA9ICQuY29udGFpbnMoXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgIHRoaXMuZWxlbWVudFxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRpcCAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICAgICAgbGV0IHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKVxuXG4gICAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgICAgICB0aGlzLnNldENvbnRlbnQoKVxuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGxhY2VtZW50ICA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIHRoaXMuY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5lbGVtZW50KSA6XG4gICAgICAgICAgdGhpcy5jb25maWcucGxhY2VtZW50XG5cbiAgICAgICAgbGV0IGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudClcblxuICAgICAgICAkKHRpcClcbiAgICAgICAgICAuZGF0YSh0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuICAgICAgICAgIC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpXG5cbiAgICAgICAgdGhpcy5fdGV0aGVyID0gbmV3IFRldGhlcih7XG4gICAgICAgICAgYXR0YWNobWVudCxcbiAgICAgICAgICBlbGVtZW50ICAgICA6IHRpcCxcbiAgICAgICAgICB0YXJnZXQgICAgICA6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICBjbGFzc2VzICAgICA6IFRldGhlckNsYXNzLFxuICAgICAgICAgIGNsYXNzUHJlZml4IDogQ0xBU1NfUFJFRklYLFxuICAgICAgICAgIG9mZnNldCAgICAgIDogdGhpcy5jb25maWcub2Zmc2V0LFxuICAgICAgICAgIGNvbnN0cmFpbnRzIDogdGhpcy5jb25maWcuY29uc3RyYWludHNcbiAgICAgICAgfSlcblxuICAgICAgICBVdGlsLnJlZmxvdyh0aXApXG4gICAgICAgIHRoaXMuX3RldGhlci5wb3NpdGlvbigpXG5cbiAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5JTilcblxuICAgICAgICBsZXQgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgbGV0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuICAgICAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICA9IG51bGxcblxuICAgICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pXG5cbiAgICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICAgICQodGhpcy50aXApXG4gICAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRvb2x0aXAuX1RSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShjYWxsYmFjaykge1xuICAgICAgbGV0IHRpcCAgICAgICA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgICBsZXQgaGlkZUV2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpXG4gICAgICBsZXQgY29tcGxldGUgID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faG92ZXJTdGF0ZSAhPT0gSG92ZXJTdGF0ZS5JTiAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTilcbiAgICAgICAgdGhpcy5jbGVhbnVwVGV0aGVyKClcblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLklOKVxuXG4gICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJlxuICAgICAgICAgKCQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkpIHtcblxuICAgICAgICAkKHRpcClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICAgIH1cblxuXG4gICAgLy8gcHJvdGVjdGVkXG5cbiAgICBpc1dpdGhDb250ZW50KCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRUaXRsZSgpKVxuICAgIH1cblxuICAgIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gKHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF0pXG4gICAgfVxuXG4gICAgc2V0Q29udGVudCgpIHtcbiAgICAgIGxldCB0aXAgICAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgICAgbGV0IHRpdGxlICA9IHRoaXMuZ2V0VGl0bGUoKVxuICAgICAgbGV0IG1ldGhvZCA9IHRoaXMuY29uZmlnLmh0bWwgPyAnaW5uZXJIVE1MJyA6ICdpbm5lclRleHQnXG5cbiAgICAgICQodGlwKS5maW5kKFNlbGVjdG9yLlRPT0xUSVBfSU5ORVIpWzBdW21ldGhvZF0gPSB0aXRsZVxuXG4gICAgICAkKHRpcClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLklOKVxuXG4gICAgICB0aGlzLmNsZWFudXBUZXRoZXIoKVxuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgbGV0IHRpdGxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpXG5cbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KSA6XG4gICAgICAgICAgdGhpcy5jb25maWcudGl0bGVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpdGxlXG4gICAgfVxuXG4gICAgY2xlYW51cFRldGhlcigpIHtcbiAgICAgIGlmICh0aGlzLl90ZXRoZXIpIHtcbiAgICAgICAgdGhpcy5fdGV0aGVyLmRlc3Ryb3koKVxuXG4gICAgICAgIC8vIGNsZWFuIHVwIGFmdGVyIHRldGhlcidzIGp1bmsgY2xhc3Nlc1xuICAgICAgICAvLyByZW1vdmUgYWZ0ZXIgdGhleSBmaXggaXNzdWVcbiAgICAgICAgLy8gKGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3RldGhlci9pc3N1ZXMvMzYpXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyh0aGlzLl9yZW1vdmVUZXRoZXJDbGFzc2VzKVxuICAgICAgICAkKHRoaXMudGlwKS5yZW1vdmVDbGFzcyh0aGlzLl9yZW1vdmVUZXRoZXJDbGFzc2VzKVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgICB9XG5cbiAgICBfc2V0TGlzdGVuZXJzKCkge1xuICAgICAgbGV0IHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAkKHRoaXMuZWxlbWVudCkub24oXG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLFxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgICAkLnByb3h5KHRoaXMudG9nZ2xlLCB0aGlzKVxuICAgICAgICAgIClcblxuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRyaWdnZXIuTUFOVUFMKSB7XG4gICAgICAgICAgbGV0IGV2ZW50SW4gID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVIgOlxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgICAgbGV0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOlxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU09VVFxuXG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpXG4gICAgICAgICAgICAub24oXG4gICAgICAgICAgICAgIGV2ZW50SW4sXG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgICAgICAkLnByb3h5KHRoaXMuX2VudGVyLCB0aGlzKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm9uKFxuICAgICAgICAgICAgICBldmVudE91dCxcbiAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgICAgICQucHJveHkodGhpcy5fbGVhdmUsIHRoaXMpXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmNvbmZpZywge1xuICAgICAgICAgIHRyaWdnZXIgIDogJ21hbnVhbCcsXG4gICAgICAgICAgc2VsZWN0b3IgOiAnJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZml4VGl0bGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZW1vdmVUZXRoZXJDbGFzc2VzKGksIGNzcykge1xuICAgICAgcmV0dXJuICgoY3NzLmJhc2VWYWwgfHwgY3NzKS5tYXRjaChcbiAgICAgICAgbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9LVxcXFxTK2AsICdnJykpIHx8IFtdXG4gICAgICApLmpvaW4oJyAnKVxuICAgIH1cblxuICAgIF9maXhUaXRsZSgpIHtcbiAgICAgIGxldCB0aXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpXG4gICAgICBpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fFxuICAgICAgICAgKHRpdGxlVHlwZSAhPT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgJydcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKVxuICAgICAgfVxuICAgIH1cblxuICAgIF9lbnRlcihldmVudCwgY29udGV4dCkge1xuICAgICAgbGV0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG5cbiAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgICApXG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUlxuICAgICAgICBdID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJChjb250ZXh0LmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLklOKSB8fFxuICAgICAgICAgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuSU4pKSB7XG4gICAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLklOXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuSU5cblxuICAgICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgICBjb250ZXh0LnNob3coKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5JTikge1xuICAgICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpXG4gICAgfVxuXG4gICAgX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBsZXQgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcblxuICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICAgIClcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUlxuICAgICAgICBdID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLk9VVFxuXG4gICAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpXG4gICAgfVxuXG4gICAgX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgICBmb3IgKGxldCB0cmlnZ2VyIGluIHRoaXMuX2FjdGl2ZVRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZChcbiAgICAgICAge30sXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmRhdGEoKSxcbiAgICAgICAgY29uZmlnXG4gICAgICApXG5cbiAgICAgIGlmIChjb25maWcuZGVsYXkgJiYgdHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3cgOiBjb25maWcuZGVsYXksXG4gICAgICAgICAgaGlkZSA6IGNvbmZpZy5kZWxheVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgICBOQU1FLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuICAgIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICAgIGxldCBjb25maWcgPSB7fVxuXG4gICAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLmNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuY29uZmlnW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSAgID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBsZXQgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID9cbiAgICAgICAgICBjb25maWcgOiBudWxsXG5cbiAgICAgICAgaWYgKCFkYXRhICYmIC9kZXN0cm95fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvb2x0aXBcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIFRvb2x0aXBcblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMCk6IHV0aWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFV0aWwgPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogUHJpdmF0ZSBUcmFuc2l0aW9uRW5kIEhlbHBlcnNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGxldCB0cmFuc2l0aW9uID0gZmFsc2VcblxuICBjb25zdCBUcmFuc2l0aW9uRW5kRXZlbnQgPSB7XG4gICAgV2Via2l0VHJhbnNpdGlvbiA6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uICAgIDogJ3RyYW5zaXRpb25lbmQnLFxuICAgIE9UcmFuc2l0aW9uICAgICAgOiAnb1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQnLFxuICAgIHRyYW5zaXRpb24gICAgICAgOiAndHJhbnNpdGlvbmVuZCdcbiAgfVxuXG4gIC8vIHNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbiAgZnVuY3Rpb24gdG9UeXBlKG9iaikge1xuICAgIHJldHVybiAoe30pLnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpBLVpdKykvKVsxXS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmluZFR5cGU6IHRyYW5zaXRpb24uZW5kLFxuICAgICAgZGVsZWdhdGVUeXBlOiB0cmFuc2l0aW9uLmVuZCxcbiAgICAgIGhhbmRsZShldmVudCkge1xuICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMpKSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmRUZXN0KCkge1xuICAgIGlmICh3aW5kb3cuUVVuaXQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jvb3RzdHJhcCcpXG5cbiAgICBmb3IgKGxldCBuYW1lIGluIFRyYW5zaXRpb25FbmRFdmVudCkge1xuICAgICAgaWYgKGVsLnN0eWxlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHsgZW5kOiBUcmFuc2l0aW9uRW5kRXZlbnRbbmFtZV0gfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEVtdWxhdG9yKGR1cmF0aW9uKSB7XG4gICAgbGV0IGNhbGxlZCA9IGZhbHNlXG5cbiAgICAkKHRoaXMpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgICBjYWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzKVxuICAgICAgfVxuICAgIH0sIGR1cmF0aW9uKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCkge1xuICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uRW5kVGVzdCgpXG5cbiAgICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZEVtdWxhdG9yXG5cbiAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSkge1xuICAgICAgJC5ldmVudC5zcGVjaWFsW1V0aWwuVFJBTlNJVElPTl9FTkRdID0gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpXG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogUHVibGljIFV0aWwgQXBpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGxldCBVdGlsID0ge1xuXG4gICAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuXG4gICAgZ2V0VUlEKHByZWZpeCkge1xuICAgICAgZG8ge1xuICAgICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApXG4gICAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuICAgICAgcmV0dXJuIHByZWZpeFxuICAgIH0sXG5cbiAgICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG5cbiAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnXG4gICAgICAgIHNlbGVjdG9yID0gL14jW2Etel0vaS50ZXN0KHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZWN0b3JcbiAgICB9LFxuXG4gICAgcmVmbG93KGVsZW1lbnQpIHtcbiAgICAgIG5ldyBGdW5jdGlvbignYnMnLCAncmV0dXJuIGJzJykoZWxlbWVudC5vZmZzZXRIZWlnaHQpXG4gICAgfSxcblxuICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcih0cmFuc2l0aW9uLmVuZClcbiAgICB9LFxuXG4gICAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odHJhbnNpdGlvbilcbiAgICB9LFxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIGNvbmZpZ1R5cGVzKSB7XG4gICAgICAgIGlmIChjb25maWdUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBsZXQgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XVxuICAgICAgICAgIGxldCB2YWx1ZSAgICAgICAgID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgICAgIGxldCB2YWx1ZVR5cGVcblxuICAgICAgICAgIGlmICh2YWx1ZSAmJiBpc0VsZW1lbnQodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSAnZWxlbWVudCdcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gdG9UeXBlKHZhbHVlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogYCArXG4gICAgICAgICAgICAgIGBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBgICtcbiAgICAgICAgICAgICAgYGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKVxuXG4gIHJldHVybiBVdGlsXG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgVXRpbFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCAnLi9ib290c3RyYXAvYWxlcnQuanMnIFxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwL2J1dHRvbi5qcycgXHJcbmltcG9ydCAnLi9ib290c3RyYXAvY2Fyb3VzZWwuanMnIFxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwL2NvbGxhcHNlLmpzJyBcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcC9kcm9wZG93bi5qcycgXHJcbmltcG9ydCAnLi9ib290c3RyYXAvbW9kYWwuanMnIFxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwL3BvcG92ZXIuanMnIFxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwL3Njcm9sbHNweS5qcycgXHJcbmltcG9ydCAnLi9ib290c3RyYXAvdGFiLmpzJyBcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcC90b29sdGlwLmpzJyBcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcC91dGlsLmpzJyBcclxuXHJcblxyXG4iXX0=
