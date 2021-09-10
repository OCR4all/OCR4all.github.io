/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 56:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ pagesComponents)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const pagesComponents = {
  // path: /about.html
  "v-22a39d25": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-22a39d25 */ 99).then(__webpack_require__.bind(__webpack_require__, 190))),
  // path: /activities.html
  "v-87e9e61a": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-87e9e61a */ 928).then(__webpack_require__.bind(__webpack_require__, 191))),
  // path: /
  "v-8daa1a0e": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-8daa1a0e */ 509).then(__webpack_require__.bind(__webpack_require__, 838))),
  // path: /software_download.html
  "v-320bd2f2": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-320bd2f2 */ 536).then(__webpack_require__.bind(__webpack_require__, 417))),
  // path: /en/about.html
  "v-64f82839": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-64f82839 */ 682).then(__webpack_require__.bind(__webpack_require__, 69))),
  // path: /en/activities.html
  "v-21f64e5f": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-21f64e5f */ 670).then(__webpack_require__.bind(__webpack_require__, 20))),
  // path: /en/
  "v-2d0a870d": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-2d0a870d */ 835).then(__webpack_require__.bind(__webpack_require__, 392))),
  // path: /en/software_download.html
  "v-5d246006": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-5d246006 */ 239).then(__webpack_require__.bind(__webpack_require__, 529))),
  // path: /404.html
  "v-3706649a": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-3706649a */ 88).then(__webpack_require__.bind(__webpack_require__, 881))),
}


/***/ }),

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "createVueApp": () => (/* binding */ createVueApp)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(615);
// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(736);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/index.js
var lib = __webpack_require__(621);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(745);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-30.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue?vue&type=script&setup=true&lang=ts



/* harmony default export */ const Badgevue_type_script_setup_true_lang_ts = ((0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${(0,server_renderer_.ssrRenderAttrs)((0,external_vue_.mergeProps)({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      (0,server_renderer_.ssrRenderSlot)(_ctx.$slots, "default", {}, () => {
        _push(`${(0,server_renderer_.ssrInterpolate)(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue



/* harmony default export */ const Badge = (Badgevue_type_script_setup_true_lang_ts);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroup.js

/* harmony default export */ const CodeGroup = ((0,external_vue_.defineComponent)({
    name: 'CodeGroup',
    setup(_, { slots }) {
        // index of current active item
        const activeIndex = (0,external_vue_.ref)(-1);
        // refs of the tab buttons
        const tabRefs = (0,external_vue_.ref)([]);
        if (false) {}
        // activate next tab
        const activateNext = (i = activeIndex.value) => {
            if (i < tabRefs.value.length - 1) {
                activeIndex.value = i + 1;
            }
            else {
                activeIndex.value = 0;
            }
            tabRefs.value[activeIndex.value].focus();
        };
        // activate previous tab
        const activatePrev = (i = activeIndex.value) => {
            if (i > 0) {
                activeIndex.value = i - 1;
            }
            else {
                activeIndex.value = tabRefs.value.length - 1;
            }
            tabRefs.value[activeIndex.value].focus();
        };
        // handle keyboard event
        const keyboardHandler = (event, i) => {
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault();
                activeIndex.value = i;
            }
            else if (event.key === 'ArrowRight') {
                event.preventDefault();
                activateNext(i);
            }
            else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                activatePrev(i);
            }
        };
        return () => {
            // NOTICE: here we put the `slots.default()` inside the render function to make
            // the slots reactive, otherwise the slot content won't be changed once the
            // `setup()` function of current component is called
            var _a;
            // get children code-group-item
            const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || [])
                .filter((vnode) => vnode.type.name === 'CodeGroupItem')
                .map((vnode) => {
                if (vnode.props === null) {
                    vnode.props = {};
                }
                return vnode;
            });
            // do not render anything if there is no code-group-item
            if (items.length === 0) {
                return null;
            }
            if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
                // if `activeIndex` is invalid
                // find the index of the code-group-item with `active` props
                activeIndex.value = items.findIndex((vnode) => vnode.props.active === '' || vnode.props.active === true);
                // if there is no `active` props on code-group-item, set the first item active
                if (activeIndex.value === -1) {
                    activeIndex.value = 0;
                }
            }
            else {
                // set the active item
                items.forEach((vnode, i) => {
                    vnode.props.active = i === activeIndex.value;
                });
            }
            return (0,external_vue_.h)('div', { class: 'code-group' }, [
                (0,external_vue_.h)('div', { class: 'code-group__nav' }, (0,external_vue_.h)('ul', { class: 'code-group__ul' }, items.map((vnode, i) => {
                    const isActive = i === activeIndex.value;
                    return (0,external_vue_.h)('li', { class: 'code-group__li' }, (0,external_vue_.h)('button', {
                        ref: (element) => {
                            if (element) {
                                tabRefs.value[i] = element;
                            }
                        },
                        class: {
                            'code-group__nav-tab': true,
                            'code-group__nav-tab-active': isActive,
                        },
                        ariaPressed: isActive,
                        ariaExpanded: isActive,
                        onClick: () => (activeIndex.value = i),
                        onKeydown: (e) => keyboardHandler(e, i),
                    }, vnode.props.title));
                }))),
                items,
            ]);
        };
    },
}));

;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-30.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue?vue&type=script&setup=true&lang=ts




const __default__ = (0,external_vue_.defineComponent)({
  name: "CodeGroupItem"
});
function setup(__props) {
  return (_ctx, _push, _parent, _attrs) => {
    _push(`<div${(0,server_renderer_.ssrRenderAttrs)((0,external_vue_.mergeProps)({
      class: ["code-group-item", { "code-group-item__active": __props.active }],
      "aria-selected": __props.active
    }, _attrs))}>`);
    (0,server_renderer_.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div>`);
  };
}
/* harmony default export */ const CodeGroupItemvue_type_script_setup_true_lang_ts = ((0,external_vue_.defineComponent)({
  ...__default__,
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue



/* harmony default export */ const CodeGroupItem = (CodeGroupItemvue_type_script_setup_true_lang_ts);
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/index.js + 9 modules
var composables = __webpack_require__(14);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-30.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue?vue&type=script&setup=true&lang=ts





/* harmony default export */ const OutboundLinkvue_type_script_setup_true_lang_ts = ((0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
    return (_ctx, _push, _parent, _attrs) => {
      _push((0,server_renderer_.ssrRenderComponent)((0,external_vue_.unref)(lib/* OutboundLink */.MS), _attrs, {
        default: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>${(0,server_renderer_.ssrInterpolate)((0,external_vue_.unref)(themeLocale).openInNewWindow)}</span>`);
          } else {
            return [
              (0,external_vue_.createVNode)("span", { class: "sr-only" }, (0,external_vue_.toDisplayString)((0,external_vue_.unref)(themeLocale).openInNewWindow), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue



/* harmony default export */ const OutboundLink = (OutboundLinkvue_type_script_setup_true_lang_ts);
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/lib/client/styles/index.scss
var styles = __webpack_require__(500);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/clientAppEnhance.js








/* harmony default export */ const clientAppEnhance = ((0,lib/* defineClientAppEnhance */.vW)(({ app, router }) => {
    app.component('Badge', Badge);
    app.component('CodeGroup', CodeGroup);
    app.component('CodeGroupItem', CodeGroupItem);
    // unregister the built-in `<OutboundLink>` to avoid warning
    delete app._context.components.OutboundLink;
    // override the built-in `<OutboundLink>`
    app.component('OutboundLink', OutboundLink);
    // compat with @vuepress/plugin-docsearch and @vuepress/plugin-search
    app.component('NavbarSearch', () => {
        const SearchComponent = app.component('Docsearch') || app.component('SearchBox');
        if (SearchComponent) {
            return (0,external_vue_.h)(SearchComponent);
        }
        return null;
    });
    // handle scrollBehavior with transition
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
        await (0,composables/* useScrollPromise */.P$)().wait();
        return scrollBehavior(...args);
    };
}));

;// CONCATENATED MODULE: ./node_modules/medium-zoom/dist/medium-zoom.esm.js
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var isSupported = function isSupported(node) {
  return node.tagName === 'IMG';
};

/* eslint-disable-next-line no-prototype-builtins */
var isNodeList = function isNodeList(selector) {
  return NodeList.prototype.isPrototypeOf(selector);
};

var isNode = function isNode(selector) {
  return selector && selector.nodeType === 1;
};

var isSvg = function isSvg(image) {
  var source = image.currentSrc || image.src;
  return source.substr(-4).toLowerCase() === '.svg';
};

var getImagesFromSelector = function getImagesFromSelector(selector) {
  try {
    if (Array.isArray(selector)) {
      return selector.filter(isSupported);
    }

    if (isNodeList(selector)) {
      // Do not use spread operator or Array.from() for IE support
      return [].slice.call(selector).filter(isSupported);
    }

    if (isNode(selector)) {
      return [selector].filter(isSupported);
    }

    if (typeof selector === 'string') {
      // Do not use spread operator or Array.from() for IE support
      return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);
    }

    return [];
  } catch (err) {
    throw new TypeError('The provided selector is invalid.\n' + 'Expects a CSS selector, a Node element, a NodeList or an array.\n' + 'See: https://github.com/francoischalifour/medium-zoom');
  }
};

var createOverlay = function createOverlay(background) {
  var overlay = document.createElement('div');
  overlay.classList.add('medium-zoom-overlay');
  overlay.style.background = background;

  return overlay;
};

var cloneTarget = function cloneTarget(template) {
  var _template$getBounding = template.getBoundingClientRect(),
      top = _template$getBounding.top,
      left = _template$getBounding.left,
      width = _template$getBounding.width,
      height = _template$getBounding.height;

  var clone = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

  clone.removeAttribute('id');
  clone.style.position = 'absolute';
  clone.style.top = top + scrollTop + 'px';
  clone.style.left = left + scrollLeft + 'px';
  clone.style.width = width + 'px';
  clone.style.height = height + 'px';
  clone.style.transform = '';

  return clone;
};

var createCustomEvent = function createCustomEvent(type, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: undefined
  }, params);

  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(type, eventParams);
  }

  var customEvent = document.createEvent('CustomEvent');
  customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);

  return customEvent;
};

var mediumZoom = function mediumZoom(selector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /**
   * Ensure the compatibility with IE11 if no Promise polyfill are used.
   */
  var Promise = window.Promise || function Promise(fn) {
    function noop() {}
    fn(noop, noop);
  };

  var _handleClick = function _handleClick(event) {
    var target = event.target;


    if (target === overlay) {
      close();
      return;
    }

    if (images.indexOf(target) === -1) {
      return;
    }

    toggle({ target: target });
  };

  var _handleScroll = function _handleScroll() {
    if (isAnimating || !active.original) {
      return;
    }

    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) {
      setTimeout(close, 150);
    }
  };

  var _handleKeyUp = function _handleKeyUp(event) {
    var key = event.key || event.keyCode;

    // Close if escape key is pressed
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      close();
    }
  };

  var update = function update() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var newOptions = options;

    if (options.background) {
      overlay.style.background = options.background;
    }

    if (options.container && options.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions.container, options.container);
    }

    if (options.template) {
      var template = isNode(options.template) ? options.template : document.querySelector(options.template);

      newOptions.template = template;
    }

    zoomOptions = _extends({}, zoomOptions, newOptions);

    images.forEach(function (image) {
      image.dispatchEvent(createCustomEvent('medium-zoom:update', {
        detail: { zoom: zoom }
      }));
    });

    return zoom;
  };

  var clone = function clone() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return mediumZoom(_extends({}, zoomOptions, options));
  };

  var attach = function attach() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }

    var newImages = selectors.reduce(function (imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);

    newImages.filter(function (newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function (newImage) {
      images.push(newImage);
      newImage.classList.add('medium-zoom-image');
    });

    eventListeners.forEach(function (_ref) {
      var type = _ref.type,
          listener = _ref.listener,
          options = _ref.options;

      newImages.forEach(function (image) {
        image.addEventListener(type, listener, options);
      });
    });

    return zoom;
  };

  var detach = function detach() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }

    if (active.zoomed) {
      close();
    }

    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function (imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;

    imagesToDetach.forEach(function (image) {
      image.classList.remove('medium-zoom-image');
      image.dispatchEvent(createCustomEvent('medium-zoom:detach', {
        detail: { zoom: zoom }
      }));
    });

    images = images.filter(function (image) {
      return imagesToDetach.indexOf(image) === -1;
    });

    return zoom;
  };

  var on = function on(type, listener) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    images.forEach(function (image) {
      image.addEventListener('medium-zoom:' + type, listener, options);
    });

    eventListeners.push({ type: 'medium-zoom:' + type, listener: listener, options: options });

    return zoom;
  };

  var off = function off(type, listener) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    images.forEach(function (image) {
      image.removeEventListener('medium-zoom:' + type, listener, options);
    });

    eventListeners = eventListeners.filter(function (eventListener) {
      return !(eventListener.type === 'medium-zoom:' + type && eventListener.listener.toString() === listener.toString());
    });

    return zoom;
  };

  var open = function open() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        target = _ref2.target;

    var _animate = function _animate() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;

      if (zoomOptions.container) {
        if (zoomOptions.container instanceof Object) {
          // The container is given as an object with properties like width, height, left, top
          container = _extends({}, container, zoomOptions.container);

          // We need to adjust custom options like container.right or container.bottom
          viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;
        } else {
          // The container is given as an element
          var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);

          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(),
              _width = _zoomContainer$getBou.width,
              _height = _zoomContainer$getBou.height,
              _left = _zoomContainer$getBou.left,
              _top = _zoomContainer$getBou.top;

          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }

      viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;

      var zoomTarget = active.zoomedHd || active.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;

      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(),
          top = _zoomTarget$getBoundi.top,
          left = _zoomTarget$getBoundi.left,
          width = _zoomTarget$getBoundi.width,
          height = _zoomTarget$getBoundi.height;

      var scaleX = Math.min(naturalWidth, viewportWidth) / width;
      var scaleY = Math.min(naturalHeight, viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;
      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;
      var transform = 'scale(' + scale + ') translate3d(' + translateX + 'px, ' + translateY + 'px, 0)';

      active.zoomed.style.transform = transform;

      if (active.zoomedHd) {
        active.zoomedHd.style.transform = transform;
      }
    };

    return new Promise(function (resolve) {
      if (target && images.indexOf(target) === -1) {
        resolve(zoom);
        return;
      }

      var _handleOpenEnd = function _handleOpenEnd() {
        isAnimating = false;
        active.zoomed.removeEventListener('transitionend', _handleOpenEnd);
        active.original.dispatchEvent(createCustomEvent('medium-zoom:opened', {
          detail: { zoom: zoom }
        }));

        resolve(zoom);
      };

      if (active.zoomed) {
        resolve(zoom);
        return;
      }

      if (target) {
        // The zoom was triggered manually via a click
        active.original = target;
      } else if (images.length > 0) {
var _images = images;
        active.original = _images[0];
      } else {
        resolve(zoom);
        return;
      }

      active.original.dispatchEvent(createCustomEvent('medium-zoom:open', {
        detail: { zoom: zoom }
      }));

      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active.zoomed = cloneTarget(active.original);

      document.body.appendChild(overlay);

      if (zoomOptions.template) {
        var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);
        active.template = document.createElement('div');
        active.template.appendChild(template.content.cloneNode(true));

        document.body.appendChild(active.template);
      }

      document.body.appendChild(active.zoomed);

      window.requestAnimationFrame(function () {
        document.body.classList.add('medium-zoom--opened');
      });

      active.original.classList.add('medium-zoom-image--hidden');
      active.zoomed.classList.add('medium-zoom-image--opened');

      active.zoomed.addEventListener('click', close);
      active.zoomed.addEventListener('transitionend', _handleOpenEnd);

      if (active.original.getAttribute('data-zoom-src')) {
        active.zoomedHd = active.zoomed.cloneNode();

        // Reset the `scrset` property or the HD image won't load.
        active.zoomedHd.removeAttribute('srcset');
        active.zoomedHd.removeAttribute('sizes');

        active.zoomedHd.src = active.zoomed.getAttribute('data-zoom-src');

        active.zoomedHd.onerror = function () {
          clearInterval(getZoomTargetSize);
          console.warn('Unable to reach the zoom image target ' + active.zoomedHd.src);
          active.zoomedHd = null;
          _animate();
        };

        // We need to access the natural size of the full HD
        // target as fast as possible to compute the animation.
        var getZoomTargetSize = setInterval(function () {
          if ( active.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active.zoomedHd.classList.add('medium-zoom-image--opened');
            active.zoomedHd.addEventListener('click', close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active.original.hasAttribute('srcset')) {
        // If an image has a `srcset` attribuet, we don't know the dimensions of the
        // zoomed (HD) image (like when `data-zoom-src` is specified).
        // Therefore the approach is quite similar.
        active.zoomedHd = active.zoomed.cloneNode();

        // Resetting the sizes attribute tells the browser to load the
        // image best fitting the current viewport size, respecting the `srcset`.
        active.zoomedHd.removeAttribute('sizes');

        // In Firefox, the `loading` attribute needs to be set to `eager` (default
        // value) for the load event to be fired.
        active.zoomedHd.removeAttribute('loading');

        // Wait for the load event of the hd image. This will fire if the image
        // is already cached.
        var loadEventListener = active.zoomedHd.addEventListener('load', function () {
          active.zoomedHd.removeEventListener('load', loadEventListener);
          active.zoomedHd.classList.add('medium-zoom-image--opened');
          active.zoomedHd.addEventListener('click', close);
          document.body.appendChild(active.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };

  var close = function close() {
    return new Promise(function (resolve) {
      if (isAnimating || !active.original) {
        resolve(zoom);
        return;
      }

      var _handleCloseEnd = function _handleCloseEnd() {
        active.original.classList.remove('medium-zoom-image--hidden');
        document.body.removeChild(active.zoomed);
        if (active.zoomedHd) {
          document.body.removeChild(active.zoomedHd);
        }
        document.body.removeChild(overlay);
        active.zoomed.classList.remove('medium-zoom-image--opened');
        if (active.template) {
          document.body.removeChild(active.template);
        }

        isAnimating = false;
        active.zoomed.removeEventListener('transitionend', _handleCloseEnd);

        active.original.dispatchEvent(createCustomEvent('medium-zoom:closed', {
          detail: { zoom: zoom }
        }));

        active.original = null;
        active.zoomed = null;
        active.zoomedHd = null;
        active.template = null;

        resolve(zoom);
      };

      isAnimating = true;
      document.body.classList.remove('medium-zoom--opened');
      active.zoomed.style.transform = '';

      if (active.zoomedHd) {
        active.zoomedHd.style.transform = '';
      }

      // Fade out the template so it's not too abrupt
      if (active.template) {
        active.template.style.transition = 'opacity 150ms';
        active.template.style.opacity = 0;
      }

      active.original.dispatchEvent(createCustomEvent('medium-zoom:close', {
        detail: { zoom: zoom }
      }));

      active.zoomed.addEventListener('transitionend', _handleCloseEnd);
    });
  };

  var toggle = function toggle() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        target = _ref3.target;

    if (active.original) {
      return close();
    }

    return open({ target: target });
  };

  var getOptions = function getOptions() {
    return zoomOptions;
  };

  var getImages = function getImages() {
    return images;
  };

  var getZoomedImage = function getZoomedImage() {
    return active.original;
  };

  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions = options;
  var active = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null

    // If the selector is omitted, it's replaced by the options
  };if (Object.prototype.toString.call(selector) === '[object Object]') {
    zoomOptions = selector;
  } else if (selector || typeof selector === 'string' // to process empty string as a selector
  ) {
      attach(selector);
    }

  // Apply the default option values
  zoomOptions = _extends({
    margin: 0,
    background: '#fff',
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions);

  var overlay = createOverlay(zoomOptions.background);

  document.addEventListener('click', _handleClick);
  document.addEventListener('keyup', _handleKeyUp);
  document.addEventListener('scroll', _handleScroll);
  window.addEventListener('resize', close);

  var zoom = {
    open: open,
    close: close,
    toggle: toggle,
    update: update,
    clone: clone,
    attach: attach,
    detach: detach,
    on: on,
    off: off,
    getOptions: getOptions,
    getImages: getImages,
    getZoomedImage: getZoomedImage
  };

  return zoom;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css);

/* harmony default export */ const medium_zoom_esm = (mediumZoom);

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-medium-zoom/lib/client/composables/useMediumZoom.js

const mediumZoomSymbol = Symbol('mediumZoom');
/**
 * Inject medium zoom instance
 */
const useMediumZoom = () => {
    const zoom = inject(mediumZoomSymbol);
    if (!zoom) {
        throw new Error('useMediumZoom() is called without provider.');
    }
    return zoom;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-medium-zoom/lib/client/composables/index.js


// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-medium-zoom/lib/client/styles/vars.css
var vars = __webpack_require__(757);
// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-medium-zoom/lib/client/styles/medium-zoom.css
var medium_zoom = __webpack_require__(837);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-medium-zoom/lib/client/clientAppEnhance.js





const selector = ".theme-default-content > img, .theme-default-content :not(a) > img";
const zoomOptions = {};
const delay = 400;
/* harmony default export */ const client_clientAppEnhance = ((0,lib/* defineClientAppEnhance */.vW)(({ app, router }) => {
    if (true)
        return;
    // create zoom instance and provide it
    const zoom = medium_zoom_esm(zoomOptions);
    zoom.refresh = (sel = selector) => {
        zoom.detach();
        zoom.attach(sel);
    };
    app.provide(mediumZoomSymbol, zoom);
    router.afterEach(() => {
        setTimeout(() => zoom.refresh(), delay);
    });
}));

// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/index.js + 3 modules
var client_composables = __webpack_require__(958);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/clientAppEnhance.js



/* harmony default export */ const lib_client_clientAppEnhance = ((0,lib/* defineClientAppEnhance */.vW)(({ app }) => {
    // provide theme data & theme locale data
    const themeData = (0,client_composables/* useThemeData */.BV)();
    const routeLocale = app._context.provides[lib/* routeLocaleSymbol */.C3];
    const themeLocaleData = (0,external_vue_.computed)(() => (0,client_composables/* resolveThemeLocaleData */.g$)(themeData.value, routeLocale.value));
    app.provide(client_composables/* themeLocaleDataSymbol */.ZS, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
        $theme: {
            get() {
                return themeData.value;
            },
        },
        $themeLocale: {
            get() {
                return themeLocaleData.value;
            },
        },
    });
}));

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/clientAppEnhances.js




const clientAppEnhances = [
  clientAppEnhance,
  client_clientAppEnhance,
  lib_client_clientAppEnhance,
]

;// CONCATENATED MODULE: ./node_modules/ts-debounce/dist/src/index.esm.js
function r(r,e,n){var i,t,o;void 0===e&&(e=50),void 0===n&&(n={});var a=null!=(i=n.isImmediate)&&i,u=null!=(t=n.callback)&&t,c=n.maxWait,v=Date.now(),l=[];function f(){if(void 0!==c){var r=Date.now()-v;if(r+e>=c)return c-r}return e}var d=function(){var e=[].slice.call(arguments),n=this;return new Promise(function(i,t){var c=a&&void 0===o;if(void 0!==o&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,v=Date.now(),!a){var i=r.apply(n,e);u&&u(i),l.forEach(function(r){return(0,r.resolve)(i)}),l=[]}},f()),c){var d=r.apply(n,e);return u&&u(d),i(d)}l.push({resolve:i,reject:t})})};return d.cancel=function(r){void 0!==o&&clearTimeout(o),l.forEach(function(e){return(0,e.reject)(r)}),l=[]},d}
//# sourceMappingURL=index.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-back-to-top/lib/client/utils/getScrollTop.js
const getScrollTop = () => window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-back-to-top/lib/client/utils/scrollToTop.js
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-back-to-top/lib/client/styles/vars.css
var styles_vars = __webpack_require__(612);
// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-back-to-top/lib/client/styles/back-to-top.css
var back_to_top = __webpack_require__(714);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-back-to-top/lib/client/components/BackToTop.js





const BackToTop = (0,external_vue_.defineComponent)({
    name: 'BackToTop',
    setup() {
        const scrollTop = (0,external_vue_.ref)(0);
        const show = (0,external_vue_.computed)(() => scrollTop.value > 300);
        (0,external_vue_.onMounted)(() => {
            scrollTop.value = getScrollTop();
            window.addEventListener('scroll', r(() => {
                scrollTop.value = getScrollTop();
            }, 100));
        });
        const backToTopEl = (0,external_vue_.h)('div', { class: 'back-to-top', onClick: scrollToTop });
        return () => (0,external_vue_.h)(external_vue_.Transition, {
            name: 'back-to-top',
        }, {
            default: () => (show.value ? backToTopEl : null),
        });
    },
});
/* harmony default export */ const components_BackToTop = (BackToTop);

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/clientAppRootComponents.js


const clientAppRootComponents = [
  components_BackToTop,
]

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/clientAppSetup.js


/* harmony default export */ const clientAppSetup = ((0,lib/* defineClientAppSetup */.F2)(() => {
    (0,composables/* setupDarkMode */.OX)();
    (0,composables/* setupSidebarItems */.fR)();
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-active-header-links/lib/client/composables/useActiveHeaderLinks.js




const useActiveHeaderLinks = ({ headerLinkSelector, headerAnchorSelector, delay, offset = 5, }) => {
    const router = (0,external_vue_router_.useRouter)();
    const page = (0,lib/* usePageData */.Vi)();
    const setActiveRouteHash = () => {
        var _a, _b, _c, _d;
        // get all header links
        const headerLinks = Array.from(document.querySelectorAll(headerLinkSelector));
        // get all header anchors
        const headerAnchors = Array.from(document.querySelectorAll(headerAnchorSelector));
        // filter anchors that do not have corresponding links
        const existedHeaderAnchors = headerAnchors.filter((anchor) => headerLinks.some((link) => link.hash === anchor.hash));
        // get current scrollTop
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        // get current scrollBottom
        const scrollBottom = window.innerHeight + scrollTop;
        // get the total scroll length of current page
        const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        // check if we have reached page bottom
        // notice the `scrollBottom` might not be exactly equal to `scrollHeight`, so we add offset here
        const isAtPageBottom = Math.abs(scrollHeight - scrollBottom) < offset;
        for (let i = 0; i < existedHeaderAnchors.length; i++) {
            const anchor = existedHeaderAnchors[i];
            const nextAnchor = existedHeaderAnchors[i + 1];
            // if this is the first anchor and now it's on the top of the page
            const isTheFirstAnchorActive = i === 0 && scrollTop === 0;
            // notice the `scrollTop` might not be exactly equal to `offsetTop` after clicking the anchor
            // so we add offset
            // if has scrolled past this anchor
            const hasPassedCurrentAnchor = scrollTop >= ((_b = (_a = anchor.parentElement) === null || _a === void 0 ? void 0 : _a.offsetTop) !== null && _b !== void 0 ? _b : 0) - offset;
            // if has not scrolled past next anchor
            const hasNotPassedNextAnchor = !nextAnchor ||
                scrollTop < ((_d = (_c = nextAnchor.parentElement) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0) - offset;
            // if this anchor is the active anchor
            const isActive = isTheFirstAnchorActive ||
                (hasPassedCurrentAnchor && hasNotPassedNextAnchor);
            // continue to find the active anchor
            if (!isActive)
                continue;
            const routeHash = decodeURIComponent(router.currentRoute.value.hash);
            const anchorHash = decodeURIComponent(anchor.hash);
            // if the active anchor hash is current route hash, do nothing
            if (routeHash === anchorHash)
                return;
            // check if anchor is at the bottom of the page to keep hash consistent
            if (isAtPageBottom) {
                for (let j = i + 1; j < existedHeaderAnchors.length; j++) {
                    // if current route hash is below the active hash, do nothing
                    if (routeHash === decodeURIComponent(existedHeaderAnchors[j].hash)) {
                        return;
                    }
                }
            }
            // replace current route hash with the active anchor hash
            replaceWithoutScrollBehavior(router, {
                hash: anchorHash,
                force: true,
            });
            return;
        }
    };
    const onScroll = r(() => setActiveRouteHash(), delay);
    (0,external_vue_.onMounted)(() => {
        onScroll();
        window.addEventListener('scroll', onScroll);
    });
    (0,external_vue_.onBeforeUnmount)(() => {
        window.removeEventListener('scroll', onScroll);
    });
    (0,external_vue_.watch)(() => page.value.path, onScroll);
};
/**
 * Call `router.replace()` and do not trigger `scrollBehavior`
 */
const replaceWithoutScrollBehavior = async (router, ...args) => {
    // temporarily disable `scrollBehavior`
    // restore it after navigation
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = undefined;
    await router
        .replace(...args)
        .finally(() => (router.options.scrollBehavior = scrollBehavior));
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-active-header-links/lib/client/composables/index.js


;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-active-header-links/lib/client/clientAppSetup.js


const headerLinkSelector = "a.sidebar-item";
const headerAnchorSelector = ".header-anchor";
const clientAppSetup_delay = 200;
const offset = 5;
/* harmony default export */ const client_clientAppSetup = ((0,lib/* defineClientAppSetup */.F2)(() => {
    if (true)
        return;
    useActiveHeaderLinks({
        headerLinkSelector,
        headerAnchorSelector,
        delay: clientAppSetup_delay,
        offset,
    });
}));

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(865);
// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-nprogress/lib/client/styles/vars.css
var client_styles_vars = __webpack_require__(135);
// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-nprogress/lib/client/styles/nprogress.css
var styles_nprogress = __webpack_require__(359);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-nprogress/lib/client/composables/useNprogress.js





const useNprogress = () => {
    (0,external_vue_.onMounted)(() => {
        // get vue-router instance
        const router = (0,external_vue_router_.useRouter)();
        // record which pages have been loaded
        const loadedPages = new Set();
        // add path of current page as initial value
        loadedPages.add(router.currentRoute.value.path);
        // set nprogress config
        nprogress.configure({ showSpinner: false });
        // show progress bar before navigation
        router.beforeEach((to) => {
            if (!loadedPages.has(to.path)) {
                nprogress.start();
            }
        });
        // hide progress bar after navigation
        router.afterEach((to) => {
            loadedPages.add(to.path);
            nprogress.done();
        });
    });
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-nprogress/lib/client/composables/index.js


;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-nprogress/lib/client/clientAppSetup.js


/* harmony default export */ const lib_client_clientAppSetup = ((0,lib/* defineClientAppSetup */.F2)(() => {
    useNprogress();
}));

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/clientAppSetups.js




const clientAppSetups = [
  clientAppSetup,
  client_clientAppSetup,
  lib_client_clientAppSetup,
]

// EXTERNAL MODULE: ./docs/.vuepress/.temp/internal/pagesComponents.js
var pagesComponents = __webpack_require__(56);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/Vuepress.js + 1 modules
var Vuepress = __webpack_require__(663);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/pagesRoutes.js


const routeItems = [
  ["v-22a39d25","/about.html","Über OCR4all",["/about","/about.md"]],
  ["v-87e9e61a","/activities.html","Aktivitäten",["/activities","/activities.md"]],
  ["v-8daa1a0e","/","Home",["/index.html","/README.md"]],
  ["v-320bd2f2","/software_download.html","Software und Download",["/software_download","/software_download.md"]],
  ["v-64f82839","/en/about.html","About",["/en/about","/en/about.md"]],
  ["v-21f64e5f","/en/activities.html","Activities",["/en/activities","/en/activities.md"]],
  ["v-2d0a870d","/en/","Home",["/en/index.html","/en/README.md"]],
  ["v-5d246006","/en/software_download.html","Software and Download",["/en/software_download","/en/software_download.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress/* Vuepress */.Y,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress/* Vuepress */.Y,
    }
  ]
)

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/injections/index.js + 12 modules
var injections = __webpack_require__(34);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/index.js + 3 modules
var components = __webpack_require__(704);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/utils/index.js + 3 modules
var utils = __webpack_require__(447);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/app.js











/**
 * - use `createApp` in dev mode
 * - use `createSSRApp` in build mode
 */
const appCreator =  false ? 0 : external_vue_.createSSRApp;
/**
 * - use `createWebHistory` in dev mode and build mode client bundle
 * - use `createMemoryHistory` in build mode server bundle
 */
const historyCreator =  true ? external_vue_router_.createMemoryHistory : 0;
const createVueApp = async () => {
    // create vue app
    const app = appCreator({
        name: 'VuepressApp',
        setup() {
            // auto update head
            (0,injections/* useUpdateHead */.l1)();
            // invoke all clientAppSetups
            for (const clientAppSetup of clientAppSetups) {
                clientAppSetup();
            }
            return () => [
                (0,external_vue_.h)(external_vue_router_.RouterView),
                ...clientAppRootComponents.map((comp) => (0,external_vue_.h)(comp)),
            ];
        },
    });
    // create vue-router
    const router = (0,external_vue_router_.createRouter)({
        // TODO: it might be an issue of vue-router that have to remove the ending slash
        history: historyCreator((0,esm/* removeEndingSlash */.U1)(injections/* siteData.value.base */.HM.value.base)),
        routes: pagesRoutes,
        scrollBehavior: (to, from, savedPosition) => {
            if (savedPosition)
                return savedPosition;
            if (to.hash)
                return { el: to.hash };
            return { top: 0 };
        },
    });
    router.beforeResolve(async (to, from) => {
        var _a;
        if (to.path !== from.path || from === external_vue_router_.START_LOCATION) {
            // ensure page data and page component have been loaded
            ;
            [injections/* pageData.value */.Xp.value] = await Promise.all([
                (0,injections/* resolvePageData */.C4)(to.name),
                (_a = pagesComponents/* pagesComponents */.b[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader(),
            ]);
        }
    });
    // create global computed
    const routeLocale = (0,external_vue_.computed)(() => (0,injections/* resolveRouteLocale */.S)(injections/* siteData.value.locales */.HM.value.locales, router.currentRoute.value.path));
    const siteLocaleData = (0,external_vue_.computed)(() => (0,injections/* resolveSiteLocaleData */.kY)(injections/* siteData.value */.HM.value, routeLocale.value));
    const pageFrontmatter = (0,external_vue_.computed)(() => (0,injections/* resolvePageFrontmatter */.hN)(injections/* pageData.value */.Xp.value));
    const pageHeadTitle = (0,external_vue_.computed)(() => (0,injections/* resolvePageHeadTitle */.lp)(injections/* pageData.value */.Xp.value, siteLocaleData.value));
    const pageHead = (0,external_vue_.computed)(() => (0,injections/* resolvePageHead */.nl)(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
    const pageLang = (0,external_vue_.computed)(() => (0,injections/* resolvePageLang */.Vo)(injections/* pageData.value */.Xp.value));
    // provide global computed
    app.provide(injections/* routeLocaleSymbol */.C3, routeLocale);
    app.provide(injections/* siteLocaleDataSymbol */.AE, siteLocaleData);
    app.provide(injections/* pageFrontmatterSymbol */.PY, pageFrontmatter);
    app.provide(injections/* pageHeadTitleSymbol */.et, pageHeadTitle);
    app.provide(injections/* pageHeadSymbol */.VV, pageHead);
    app.provide(injections/* pageLangSymbol */.b5, pageLang);
    // provide global data & helpers
    Object.defineProperties(app.config.globalProperties, {
        $routeLocale: { get: () => routeLocale.value },
        $site: { get: () => injections/* siteData.value */.HM.value },
        $siteLocale: { get: () => siteLocaleData.value },
        $page: { get: () => injections/* pageData.value */.Xp.value },
        $frontmatter: { get: () => pageFrontmatter.value },
        $lang: { get: () => pageLang.value },
        $headTitle: { get: () => pageHeadTitle.value },
        $withBase: { get: () => utils/* withBase */.pJ },
    });
    // register built-in components
    /* eslint-disable vue/match-component-file-name */
    app.component('ClientOnly', components/* ClientOnly */.qx);
    app.component('Content', components/* Content */.VY);
    app.component('OutboundLink', components/* OutboundLink */.MS);
    /* eslint-enable vue/match-component-file-name */
    // invoke all clientAppEnhances
    for (const clientAppEnhance of clientAppEnhances) {
        await clientAppEnhance({ app, router, siteData: injections/* siteData */.HM });
    }
    // vue-router will start to initialize once it is installed
    // via `app.use()`, but users might make some modifications
    // to router in `clientAppEnhance`, so we install it after
    // that. This can also avoid the `scrollBehavior` issue on
    // initial navigation.
    app.use(router);
    return {
        app,
        router,
    };
};
// mount app in client bundle
if (false) {}


/***/ }),

/***/ 663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ Vuepress)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(736);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/layoutComponents.js


const layoutComponents = {
  "404": (0,external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() */ 612).then(__webpack_require__.bind(__webpack_require__, 698))),
  "Layout": (0,external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() */ 563).then(__webpack_require__.bind(__webpack_require__, 563))),
}

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/injections/index.js + 12 modules
var injections = __webpack_require__(34);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/Vuepress.js




/**
 * Global Layout
 */
const Vuepress = (0,external_vue_.defineComponent)({
    name: 'Vuepress',
    setup() {
        const page = (0,injections/* usePageData */.Vi)();
        // resolve layout component
        const layoutComponent = (0,external_vue_.computed)(() => {
            // resolve layout name of current page
            let layoutName;
            if (page.value.path) {
                // if current page exists
                // use layout from frontmatter
                const frontmatterLayout = page.value.frontmatter.layout;
                if ((0,esm/* isString */.HD)(frontmatterLayout)) {
                    layoutName = frontmatterLayout;
                }
                else {
                    // fallback to default layout
                    layoutName = 'Layout';
                }
            }
            else {
                // if current page does not exist
                // use 404 layout
                layoutName = '404';
            }
            // use theme layout or fallback to custom layout
            return layoutComponents[layoutName] || (0,external_vue_.resolveComponent)(layoutName, false);
        });
        return () => (0,external_vue_.h)(layoutComponent.value);
    },
});


/***/ }),

/***/ 704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qx": () => (/* reexport */ ClientOnly),
  "VY": () => (/* reexport */ Content),
  "MS": () => (/* reexport */ OutboundLink_OutboundLink)
});

// UNUSED EXPORTS: Vuepress

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/ClientOnly.js

const ClientOnly = (0,external_vue_.defineComponent)({
    setup(_, ctx) {
        const isMounted = (0,external_vue_.ref)(false);
        (0,external_vue_.onMounted)(() => {
            isMounted.value = true;
        });
        return () => { var _a, _b; return (isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null); };
    },
});

// EXTERNAL MODULE: ./docs/.vuepress/.temp/internal/pagesComponents.js
var pagesComponents = __webpack_require__(56);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/injections/index.js + 12 modules
var injections = __webpack_require__(34);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/Content.js



/**
 * Markdown rendered content
 */
const Content = (props) => {
    let key;
    // use the page key from props directly
    if (props.pageKey) {
        key = props.pageKey;
    }
    else {
        // get current page key from page data
        const page = (0,injections/* usePageData */.Vi)();
        key = page.value.key;
    }
    const component = pagesComponents/* pagesComponents */.b[key];
    // use page component
    if (component) {
        return (0,external_vue_.h)(component);
    }
    // fallback
    return (0,external_vue_.h)('div',  false
        ? 0
        : '404 Not Found');
};
Content.displayName = 'Content';
Content.props = {
    pageKey: {
        type: String,
        required: false,
    },
};

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/OutboundLink.css
var OutboundLink = __webpack_require__(53);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/OutboundLink.js


const svg = (0,external_vue_.h)('svg', {
    class: 'icon outbound',
    xmlns: 'http://www.w3.org/2000/svg',
    ariaHidden: 'true',
    focusable: 'false',
    x: '0px',
    y: '0px',
    viewBox: '0 0 100 100',
    width: '15',
    height: '15',
}, [
    (0,external_vue_.h)('path', {
        fill: 'currentColor',
        d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
    }),
    (0,external_vue_.h)('polygon', {
        fill: 'currentColor',
        points: '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
    }),
]);
const OutboundLink_OutboundLink = (_, { slots }) => { var _a; return (0,external_vue_.h)('span', [svg, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]); };
OutboundLink_OutboundLink.displayName = 'OutboundLink';

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/Vuepress.js + 1 modules
var Vuepress = __webpack_require__(663);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/index.js






/***/ }),

/***/ 621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MS": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.MS),
/* harmony export */   "C3": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.C3),
/* harmony export */   "Vi": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.Vi),
/* harmony export */   "I2": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.I2),
/* harmony export */   "I": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   "WF": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.WF),
/* harmony export */   "I5": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.I5),
/* harmony export */   "vW": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.vW),
/* harmony export */   "F2": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.F2),
/* harmony export */   "pJ": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.pJ)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(704);
/* harmony import */ var _injections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(447);







/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Xp": () => (/* reexport */ pageData),
  "PY": () => (/* reexport */ pageFrontmatterSymbol),
  "VV": () => (/* reexport */ pageHeadSymbol),
  "et": () => (/* reexport */ pageHeadTitleSymbol),
  "b5": () => (/* reexport */ pageLangSymbol),
  "C4": () => (/* reexport */ resolvePageData),
  "hN": () => (/* reexport */ resolvePageFrontmatter),
  "nl": () => (/* reexport */ resolvePageHead),
  "lp": () => (/* reexport */ resolvePageHeadTitle),
  "Vo": () => (/* reexport */ resolvePageLang),
  "S": () => (/* reexport */ resolveRouteLocale),
  "kY": () => (/* reexport */ resolveSiteLocaleData),
  "C3": () => (/* reexport */ routeLocaleSymbol),
  "HM": () => (/* reexport */ siteData_siteData),
  "AE": () => (/* reexport */ siteLocaleDataSymbol),
  "Vi": () => (/* reexport */ usePageData),
  "I2": () => (/* reexport */ usePageFrontmatter),
  "I": () => (/* reexport */ useRouteLocale),
  "WF": () => (/* reexport */ useSiteData),
  "I5": () => (/* reexport */ useSiteLocaleData),
  "l1": () => (/* reexport */ useUpdateHead)
});

// UNUSED EXPORTS: createHeadTag, pagesData, queryHeadTag, usePageHead, usePageHeadTitle, usePageLang, usePagesData

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/pagesData.js
const pagesData = {
  // path: /about.html
  "v-22a39d25": () => __webpack_require__.e(/* import() | v-22a39d25 */ 99).then(__webpack_require__.bind(__webpack_require__, 562)).then(({ data }) => data),
  // path: /activities.html
  "v-87e9e61a": () => __webpack_require__.e(/* import() | v-87e9e61a */ 928).then(__webpack_require__.bind(__webpack_require__, 608)).then(({ data }) => data),
  // path: /
  "v-8daa1a0e": () => __webpack_require__.e(/* import() | v-8daa1a0e */ 509).then(__webpack_require__.bind(__webpack_require__, 464)).then(({ data }) => data),
  // path: /software_download.html
  "v-320bd2f2": () => __webpack_require__.e(/* import() | v-320bd2f2 */ 536).then(__webpack_require__.bind(__webpack_require__, 908)).then(({ data }) => data),
  // path: /en/about.html
  "v-64f82839": () => __webpack_require__.e(/* import() | v-64f82839 */ 682).then(__webpack_require__.bind(__webpack_require__, 405)).then(({ data }) => data),
  // path: /en/activities.html
  "v-21f64e5f": () => __webpack_require__.e(/* import() | v-21f64e5f */ 670).then(__webpack_require__.bind(__webpack_require__, 982)).then(({ data }) => data),
  // path: /en/
  "v-2d0a870d": () => __webpack_require__.e(/* import() | v-2d0a870d */ 835).then(__webpack_require__.bind(__webpack_require__, 308)).then(({ data }) => data),
  // path: /en/software_download.html
  "v-5d246006": () => __webpack_require__.e(/* import() | v-5d246006 */ 239).then(__webpack_require__.bind(__webpack_require__, 810)).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => __webpack_require__.e(/* import() | v-3706649a */ 88).then(__webpack_require__.bind(__webpack_require__, 801)).then(({ data }) => data),
}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pagesData.js


const pagesData_pagesData = (0,external_vue_.ref)(pagesData);
const usePagesData = () => {
    return pagesData_pagesData;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageData.js


const pageDataEmpty = (0,external_vue_.readonly)({
    key: '',
    path: '',
    title: '',
    lang: '',
    frontmatter: {},
    excerpt: '',
    headers: [],
});
const pageData = (0,external_vue_.ref)(pageDataEmpty);
const usePageData = () => {
    return pageData;
};
const resolvePageData = async (pageKey) => {
    const pageDataResolver = pagesData_pagesData.value[pageKey];
    if (!pageDataResolver) {
        return pageDataEmpty;
    }
    const pageData = await pageDataResolver();
    return pageData !== null && pageData !== void 0 ? pageData : pageDataEmpty;
};
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageFrontmatter.js

const pageFrontmatterSymbol = Symbol( false ? 0 : '');
const usePageFrontmatter = () => {
    const pageFrontmatter = (0,external_vue_.inject)(pageFrontmatterSymbol);
    if (!pageFrontmatter) {
        throw new Error('usePageFrontmatter() is called without provider.');
    }
    return pageFrontmatter;
};
const resolvePageFrontmatter = (pageData) => pageData.frontmatter;

// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(736);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageHead.js


const pageHeadSymbol = Symbol( false ? 0 : '');
const usePageHead = () => {
    const pageHead = (0,external_vue_.inject)(pageHeadSymbol);
    if (!pageHead) {
        throw new Error('usePageHead() is called without provider.');
    }
    return pageHead;
};
/**
 * Merge the head config in frontmatter and site locale
 *
 * Frontmatter should take priority over site locale
 */
const resolvePageHead = (headTitle, frontmatter, siteLocale) => {
    const description = (0,esm/* isString */.HD)(frontmatter.description)
        ? frontmatter.description
        : siteLocale.description;
    const head = [
        ...((0,esm/* isArray */.kJ)(frontmatter.head) ? frontmatter.head : []),
        ...siteLocale.head,
        ['title', {}, headTitle],
        ['meta', { name: 'description', content: description }],
    ];
    return (0,esm/* dedupeHead */.H7)(head);
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageHeadTitle.js

const pageHeadTitleSymbol = Symbol( false ? 0 : '');
const usePageHeadTitle = () => {
    const pageHeadTitle = inject(pageHeadTitleSymbol);
    if (!pageHeadTitle) {
        throw new Error('usePageHeadTitle() is called without provider.');
    }
    return pageHeadTitle;
};
/**
 * Title to displayed in `<head>` tag
 */
const resolvePageHeadTitle = (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`;

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageLang.js

const pageLangSymbol = Symbol( false ? 0 : '');
const usePageLang = () => {
    const pageLang = (0,external_vue_.inject)(pageLangSymbol);
    if (!pageLang) {
        throw new Error('usePageLang() is called without provider.');
    }
    return pageLang;
};
/**
 * Resolve language of current page
 *
 * It's mainly used for the `lang` attribute of `<html>` tag,
 * which should not be empty
 */
const resolvePageLang = (pageData) => pageData.lang || 'en';

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/routeLocale.js


const routeLocaleSymbol = Symbol( false ? 0 : '');
const useRouteLocale = () => {
    const routeLocale = (0,external_vue_.inject)(routeLocaleSymbol);
    if (!routeLocale) {
        throw new Error('useRouteLocale() is called without provider.');
    }
    return routeLocale;
};
/**
 * Resolve locale path of the route path
 */
const resolveRouteLocale = (locales, routePath) => (0,esm/* resolveLocalePath */.gb)(locales, routePath);

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/siteData.js
const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [],
  "locales": {
    "/": {
      "lang": "de-GER",
      "title": "OCR4all",
      "description": "OCR4all Dokumentation"
    },
    "/en/": {
      "lang": "en-US",
      "title": "OCR4all",
      "description": "OCR4all documentation"
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/siteData.js


const siteData_siteData = (0,external_vue_.ref)(siteData);
const useSiteData = () => siteData_siteData;
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/siteLocaleData.js

const siteLocaleDataSymbol = Symbol( false ? 0 : '');
const useSiteLocaleData = () => {
    const siteLocaleData = (0,external_vue_.inject)(siteLocaleDataSymbol);
    if (!siteLocaleData) {
        throw new Error('useSiteLocaleData() is called without provider.');
    }
    return siteLocaleData;
};
/**
 * Merge the locales fields to the root fields
 * according to the route path
 */
const resolveSiteLocaleData = (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale],
});

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(615);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/updateHead.js





/**
 * Query the matched head tag of head config
 */
const queryHeadTag = ([tagName, attrs, content = '',]) => {
    const attrsSelector = Object.entries(attrs).map(([key, value]) => {
        if ((0,esm/* isString */.HD)(value)) {
            return `[${key}="${value}"]`;
        }
        if (value === true) {
            return `[${key}]`;
        }
        return '';
    });
    const selector = `head > ${tagName}${attrsSelector}`;
    const tags = Array.from(document.querySelectorAll(selector));
    const matchedTag = tags.find((item) => item.innerText === content);
    return matchedTag || null;
};
/**
 * Create head tag from head config
 */
const createHeadTag = ([tagName, attrs, content,]) => {
    if (!(0,esm/* isString */.HD)(tagName)) {
        return null;
    }
    // create element
    const tag = document.createElement(tagName);
    // set attributes
    if ((0,esm/* isPlainObject */.PO)(attrs)) {
        Object.entries(attrs).forEach(([key, value]) => {
            if ((0,esm/* isString */.HD)(value)) {
                tag.setAttribute(key, value);
            }
            else if (value === true) {
                tag.setAttribute(key, '');
            }
        });
    }
    // set content
    if ((0,esm/* isString */.HD)(content)) {
        tag.appendChild(document.createTextNode(content));
    }
    return tag;
};
/**
 * Auto update head
 *
 * This composable function should be used only once in the root app
 */
const useUpdateHead = () => {
    const route = (0,external_vue_router_.useRoute)();
    const head = usePageHead();
    const lang = usePageLang();
    // ssr-only, extract page meta info to ssrContext
    if (true) {
        const ssrContext = (0,external_vue_.useSSRContext)();
        if (ssrContext) {
            ssrContext.head = head.value;
            ssrContext.lang = lang.value;
        }
        return;
    }
    const headTags = (0,external_vue_.ref)([]);
    // load current head tags from DOM
    const loadHead = () => {
        head.value.forEach((item) => {
            const tag = queryHeadTag(item);
            if (tag) {
                headTags.value.push(tag);
            }
        });
    };
    // update html lang attribute and head tags to DOM
    const updateHead = () => {
        document.documentElement.lang = lang.value;
        headTags.value.forEach((item) => {
            if (item.parentNode === document.head) {
                document.head.removeChild(item);
            }
        });
        headTags.value.splice(0, headTags.value.length);
        head.value.forEach((item) => {
            const tag = createHeadTag(item);
            if (tag !== null) {
                document.head.appendChild(tag);
                headTags.value.push(tag);
            }
        });
    };
    (0,external_vue_.onMounted)(() => {
        loadHead();
        updateHead();
        // only update head on route change
        (0,external_vue_.watch)(() => route.path, () => updateHead());
    });
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/index.js












/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vW": () => (/* reexport */ defineClientAppEnhance),
  "F2": () => (/* reexport */ defineClientAppSetup),
  "pJ": () => (/* reexport */ withBase)
});

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/defineClientAppEnhance.js
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/defineClientAppSetup.js
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;

// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(736);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/injections/index.js + 12 modules
var injections = __webpack_require__(34);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/withBase.js


/**
 * Prefix url with site base
 */
const withBase = (url) => {
    if ((0,esm/* isLinkHttp */.ak)(url))
        return url;
    const base = (0,injections/* useSiteData */.WF)().value.base;
    return `${base}${(0,esm/* removeLeadingSlash */.FY)(url)}`;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/index.js





/***/ }),

/***/ 958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g$": () => (/* reexport */ resolveThemeLocaleData),
  "ZS": () => (/* reexport */ themeLocaleDataSymbol),
  "BV": () => (/* reexport */ useThemeData),
  "X6": () => (/* reexport */ useThemeLocaleData)
});

// UNUSED EXPORTS: themeData

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/themeData.js
const themeData = {
  "locales": {
    "/": {
      "selectLanguageName": "Deutsch"
    },
    "/en/": {
      "selectLanguageName": "English"
    }
  },
  "logo": "http://ocr4all.org/images/logo.jpg",
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/useThemeData.js


const useThemeData_themeData = (0,external_vue_.ref)(themeData);
const useThemeData = () => useThemeData_themeData;
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/useThemeLocaleData.js

const themeLocaleDataSymbol = Symbol( false ? 0 : '');
const useThemeLocaleData = () => {
    const themeLocaleData = (0,external_vue_.inject)(themeLocaleDataSymbol);
    if (!themeLocaleData) {
        throw new Error('useThemeLocaleData() is called without provider.');
    }
    return themeLocaleData;
};
/**
 * Merge the locales fields to the root fields
 * according to the route path
 */
const resolveThemeLocaleData = (theme, routeLocale) => {
    var _a;
    return ({
        ...theme,
        ...(_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale],
    });
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/index.js




/***/ }),

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H7": () => (/* reexport */ dedupeHead),
  "kJ": () => (/* reexport */ shared_namespaceObject.isArray),
  "mf": () => (/* reexport */ shared_namespaceObject.isFunction),
  "ak": () => (/* reexport */ isLinkHttp),
  "B2": () => (/* reexport */ isLinkMailto),
  "R5": () => (/* reexport */ isLinkTel),
  "PO": () => (/* reexport */ isPlainObject),
  "HD": () => (/* reexport */ shared_namespaceObject.isString),
  "U1": () => (/* reexport */ removeEndingSlash),
  "FY": () => (/* reexport */ removeLeadingSlash),
  "gb": () => (/* reexport */ resolveLocalePath)
});

// UNUSED EXPORTS: ensureEndingSlash, ensureLeadingSlash, formatDateString, htmlEscape, htmlUnescape, isLinkExternal, isPromise, normalizePackageName, resolveHeadIdentifier, resolveRoutePathFromUrl

;// CONCATENATED MODULE: external "@vue/shared"
const shared_namespaceObject = require("@vue/shared");
;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/resolveHeadIdentifier.js
/**
 * Resolve identifier of a tag, to avoid duplicated tags in `<head>`
 */
const resolveHeadIdentifier = ([tag, attrs, content,]) => {
    // avoid duplicated `<meta>` with same `name`
    if (tag === 'meta' && attrs.name) {
        return `${tag}.${attrs.name}`;
    }
    // there should be only one `<title>` or `<base>`
    if (['title', 'base'].includes(tag)) {
        return tag;
    }
    // avoid duplicated `<template>` with same `id`
    if (tag === 'template' && attrs.id) {
        return `${tag}.${attrs.id}`;
    }
    return JSON.stringify([tag, attrs, content]);
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/dedupeHead.js

/**
 * Dedupe head config with identifier
 *
 * Items that appear earlier have higher priority
 */
const dedupeHead = (head) => {
    const identifierSet = new Set();
    const result = [];
    head.forEach((item) => {
        const identifier = resolveHeadIdentifier(item);
        if (!identifierSet.has(identifier)) {
            identifierSet.add(identifier);
            result.push(item);
        }
    });
    return result;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/htmlEscape.js
const htmlEscapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
};
const htmlEscapeRegexp = /[&<>'"]/g;
/**
 * Escape html chars
 */
const htmlEscape = (str) => str.replace(htmlEscapeRegexp, (char) => htmlEscapeMap[char]);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/htmlUnescape.js
const htmlUnescapeMap = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
};
const htmlUnescapeRegexp = /&(amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
/**
 * Unescape html chars
 */
const htmlUnescape = (str) => str.replace(htmlUnescapeRegexp, (char) => htmlUnescapeMap[char]);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isLinkHttp.js
/**
 * Determine a link is http link or not
 *
 * - http://github.com
 * - https://github.com
 * - //github.com
 */
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isLinkMailto.js
/**
 * Determine a link is a mailto: address or not
 */
const isLinkMailto = (link) => /^mailto:/.test(link);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isLinkTel.js
/**
 * Determine a link is a tel: address or not
 */
const isLinkTel = (link) => /^tel:/.test(link);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isPlainObject.js
/**
 * Check if a value is plain object, with generic type support
 */
const isPlainObject = (val) => Object.prototype.toString.call(val) === '[object Object]';

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/removeEndingSlash.js
/**
 * Remove ending slash / from a string
 */
const removeEndingSlash = (str) => str.replace(/\/$/, '');

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/removeLeadingSlash.js
/**
 * Remove leading slash / from a string
 */
const removeLeadingSlash = (str) => str.replace(/^\//, '');

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/resolveLocalePath.js
/**
 * Resolve the matched locale path of route path
 */
const resolveLocalePath = (locales, routePath) => {
    const localePaths = Object.keys(locales).sort((a, b) => {
        const levelDelta = b.split('/').length - a.split('/').length;
        if (levelDelta !== 0) {
            return levelDelta;
        }
        return b.length - a.length;
    });
    for (const localePath of localePaths) {
        if (routePath.startsWith(localePath)) {
            return localePath;
        }
    }
    return '/';
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/index.js



















;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js




/***/ }),

/***/ 14:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OX": () => (/* reexport */ setupDarkMode),
  "fR": () => (/* reexport */ setupSidebarItems),
  "vs": () => (/* reexport */ useDarkMode),
  "sC": () => (/* reexport */ useNavLink),
  "P$": () => (/* reexport */ useScrollPromise),
  "VU": () => (/* reexport */ useSidebarItems),
  "X6": () => (/* reexport */ useThemeLocaleData)
});

// UNUSED EXPORTS: darkModeSymbol, headerToSidebarItem, headersToSidebarItemChildren, resolveArraySidebarItems, resolveAutoSidebarItems, resolveMultiSidebarItems, resolveSidebarItems, sidebarItemsSymbol, updateHtmlDarkClass, useResolveRouteWithRedirect, useThemeData

// EXTERNAL MODULE: ./node_modules/vue-demi/lib/index.cjs
var lib = __webpack_require__(236);
;// CONCATENATED MODULE: ./node_modules/@vueuse/shared/index.esm.js


/**
 * `AND` conditions for refs.
 *
 * @see https://vueuse.org/and
 */
function and(...args) {
    return computed(() => args.every(i => unref(i)));
}

/**
 * Two-way refs synchronization.
 *
 * @param a
 * @param b
 */
function biSyncRef(a, b) {
    const flush = 'sync';
    const stop1 = watch(a, (newValue) => {
        b.value = newValue;
    }, {
        flush,
        immediate: true,
    });
    const stop2 = watch(b, (newValue) => {
        a.value = newValue;
    }, {
        flush,
        immediate: true,
    });
    return () => {
        stop1();
        stop2();
    };
}

/**
 * Explicitly define the deps of computed.
 *
 * @param source
 * @param fn
 */
function controlledComputed(source, fn) {
    let v = undefined;
    let track;
    let trigger;
    const dirty = ref(true);
    watch(source, () => {
        dirty.value = true;
        trigger();
    }, { flush: 'sync' });
    return customRef((_track, _trigger) => {
        track = _track;
        trigger = _trigger;
        return {
            get() {
                if (dirty.value) {
                    v = fn();
                    dirty.value = false;
                }
                track();
                return v;
            },
            set() { },
        };
    });
}

function __onlyVue3(name = 'this function') {
    if (isVue3)
        return;
    throw new Error(`[VueUse] ${name} is only works on Vue 3.`);
}

// implementation
function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
    __onlyVue3();
    for (const [key, value] of Object.entries(extend)) {
        if (key === 'value')
            continue;
        if (isRef(value) && unwrap) {
            Object.defineProperty(ref, key, {
                get() {
                    return value.value;
                },
                set(v) {
                    value.value = v;
                },
                enumerable,
            });
        }
        else {
            Object.defineProperty(ref, key, { value, enumerable });
        }
    }
    return ref;
}

/**
 * Explicitly define the deps of computed.
 *
 * @param source
 * @param fn
 */
function controlledRef(initial, options = {}) {
    let source = initial;
    let track;
    let trigger;
    const ref = customRef((_track, _trigger) => {
        track = _track;
        trigger = _trigger;
        return {
            get() {
                return get();
            },
            set(v) {
                set(v);
            },
        };
    });
    function get(tracking = true) {
        if (tracking)
            track();
        return source;
    }
    function set(value, triggering = true) {
        var _a, _b;
        if (value === source)
            return;
        const old = source;
        if (((_a = options.onBeforeChange) === null || _a === void 0 ? void 0 : _a.call(options, value, old)) === false)
            return; // dismissed
        source = value;
        (_b = options.onChanged) === null || _b === void 0 ? void 0 : _b.call(options, value, old);
        if (triggering)
            trigger();
    }
    /**
     * Get the value without tracked in the reactivity system
     */
    const untrackedGet = () => get(false);
    /**
     * Set the value without triggering the reactivity system
     */
    const silentSet = (v) => set(v, false);
    /**
     * Get the value without tracked in the reactivity system.
     *
     * Alias for `untrackedGet()`
     */
    const peek = () => get(false);
    /**
     * Set the value without triggering the reactivity system
     *
     * Alias for `silentSet(v)`
     */
    const lay = (v) => set(v, false);
    return extendRef(ref, {
        get,
        set,
        untrackedGet,
        silentSet,
        peek,
        lay,
    }, { enumerable: true });
}

/**
 * The source code for this function was inspired by vue-apollo's `useEventHook` util
 * https://github.com/vuejs/vue-apollo/blob/v4/packages/vue-apollo-composable/src/util/useEventHook.ts
 */
/**
 * Utility for creating event hooks
 *
 * @see https://vueuse.org/createEventHook
 */
function index_esm_createEventHook() {
    const fns = [];
    const off = (fn) => {
        const index = fns.indexOf(fn);
        if (index !== -1)
            fns.splice(index, 1);
    };
    const on = (fn) => {
        fns.push(fn);
        return {
            off: () => off(fn),
        };
    };
    const trigger = (param) => {
        fns.forEach(fn => fn(param));
    };
    return {
        on,
        off,
        trigger,
    };
}

/**
 * Keep states in the global scope to be reusable across Vue instances.
 *
 * @see https://vueuse.org/createGlobalState
 * @param stateFactory A factory function to create the state
 */
function createGlobalState(stateFactory) {
    let initialized = false;
    let state;
    const scope = effectScope(true);
    return () => {
        if (!initialized) {
            state = scope.run(stateFactory);
            initialized = true;
        }
        return state;
    };
}

/**
 * Make a composable function usable with multiple Vue instances.
 *
 * @see https://vueuse.org/createSharedComposable
 */
function createSharedComposable(composable) {
    let subscribers = 0;
    let state;
    let scope;
    const dispose = () => {
        subscribers -= 1;
        if (scope && subscribers <= 0) {
            scope.stop();
            state = undefined;
            scope = undefined;
        }
    };
    return ((...args) => {
        subscribers += 1;
        if (!state) {
            scope = effectScope(true);
            state = scope.run(() => composable(...args));
        }
        onScopeDispose(dispose);
        return state;
    });
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const isClient = typeof window !== 'undefined';
const isDef = (val) => typeof val !== 'undefined';
const assert = (condition, ...infos) => {
    // eslint-disable-next-line no-console
    if (!condition)
        console.warn(...infos);
};
const index_esm_toString = Object.prototype.toString;
const isBoolean = (val) => typeof val === 'boolean';
const index_esm_isFunction = (val) => typeof val === 'function';
const index_esm_isNumber = (val) => typeof val === 'number';
const index_esm_isString = (val) => typeof val === 'string';
const index_esm_isObject = (val) => index_esm_toString.call(val) === '[object Object]';
const isWindow = (val) => typeof window !== 'undefined' && index_esm_toString.call(val) === '[object Window]';
const now = () => Date.now();
const index_esm_timestamp = () => +Date.now();
const index_esm_clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const index_esm_noop = () => { };
const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * @internal
 */
function index_esm_createFilterWrapper(filter, fn) {
    function wrapper(...args) {
        filter(() => fn.apply(this, args), { fn, thisArg: this, args });
    }
    return wrapper;
}
const index_esm_bypassFilter = (invoke) => {
    return invoke();
};
/**
 * Create an EventFilter that debounce the events
 *
 * @param ms
 */
function debounceFilter(ms) {
    let timer;
    const filter = (invoke) => {
        const duration = unref(ms);
        if (timer)
            clearTimeout(timer);
        if (duration <= 0)
            return invoke();
        timer = setTimeout(invoke, duration);
    };
    return filter;
}
/**
 * Create an EventFilter that throttle the events
 *
 * @param ms
 * @param [trailing=true]
 */
function index_esm_throttleFilter(ms, trailing = true) {
    let lastExec = 0;
    let timer;
    const clear = () => {
        if (timer) {
            clearTimeout(timer);
            timer = undefined;
        }
    };
    const filter = (invoke) => {
        const duration = unref(ms);
        const elapsed = Date.now() - lastExec;
        clear();
        if (duration <= 0) {
            lastExec = Date.now();
            return invoke();
        }
        if (elapsed > duration) {
            lastExec = Date.now();
            invoke();
        }
        else if (trailing) {
            timer = setTimeout(() => {
                clear();
                invoke();
            }, duration);
        }
    };
    return filter;
}
/**
 * EventFilter that gives extra controls to pause and resume the filter
 *
 * @param extendFilter  Extra filter to apply when the PauseableFilter is active, default to none
 *
 */
function index_esm_pausableFilter(extendFilter = index_esm_bypassFilter) {
    const isActive = ref(true);
    function pause() {
        isActive.value = false;
    }
    function resume() {
        isActive.value = true;
    }
    const eventFilter = (...args) => {
        if (isActive.value)
            extendFilter(...args);
    };
    return { isActive, pause, resume, eventFilter };
}

function index_esm_promiseTimeout(ms, throwOnTimeout = false, reason = 'Timeout') {
    return new Promise((resolve, reject) => {
        if (throwOnTimeout)
            setTimeout(() => reject(reason), ms);
        else
            setTimeout(resolve, ms);
    });
}
function index_esm_identity(arg) {
    return arg;
}
/**
 * Create singleton promise function
 *
 * @example
 * ```
 * const promise = createSingletonPromise(async () => { ... })
 *
 * await promise()
 * await promise() // all of them will be bind to a single promise instance
 * await promise() // and be resolved together
 * ```
 */
function index_esm_createSingletonPromise(fn) {
    let _promise;
    function wrapper() {
        if (!_promise)
            _promise = fn();
        return _promise;
    }
    wrapper.reset = async () => {
        const _prev = _promise;
        _promise = undefined;
        if (_prev)
            await _prev;
    };
    return wrapper;
}
function invoke(fn) {
    return fn();
}
function index_esm_containsProp(obj, ...props) {
    return props.some(k => k in obj);
}
function index_esm_increaseWithUnit(target, delta) {
    var _a;
    if (typeof target === 'number')
        return target + delta;
    const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) === null || _a === void 0 ? void 0 : _a[0]) || '';
    const unit = target.slice(value.length);
    const result = (parseFloat(value) + delta);
    if (Number.isNaN(result))
        return target;
    return result + unit;
}

// implementation
function watchWithFilter(source, cb, options = {}) {
    const { eventFilter = index_esm_bypassFilter } = options, watchOptions = __rest(options, ["eventFilter"]);
    return (0,lib.watch)(source, index_esm_createFilterWrapper(eventFilter, cb), watchOptions);
}

// implementation
function debouncedWatch(source, cb, options = {}) {
    const { debounce = 0 } = options, watchOptions = __rest(options, ["debounce"]);
    return watchWithFilter(source, cb, Object.assign(Object.assign({}, watchOptions), { eventFilter: debounceFilter(debounce) }));
}

function get(obj, key) {
    if (key == null)
        return unref(obj);
    return unref(obj)[key];
}

function index_esm_ignorableWatch(source, cb, options = {}) {
    const { eventFilter = index_esm_bypassFilter } = options, watchOptions = __rest(options, ["eventFilter"]);
    const filteredCb = index_esm_createFilterWrapper(eventFilter, cb);
    let ignoreUpdates;
    let ignorePrevAsyncUpdates;
    let stop;
    if (watchOptions.flush === 'sync') {
        const ignore = ref(false);
        // no op for flush: sync
        ignorePrevAsyncUpdates = () => { };
        ignoreUpdates = (updater) => {
            // Call the updater function and count how many sync updates are performed,
            // then add them to the ignore count
            ignore.value = true;
            updater();
            ignore.value = false;
        };
        stop = watch(source, (...args) => {
            if (!ignore.value)
                filteredCb(...args);
        }, watchOptions);
    }
    else {
        // flush 'pre' and 'post'
        const disposables = [];
        // counters for how many following changes to be ignored
        // ignoreCounter is incremented before there is a history operation
        // affecting the source ref value (undo, redo, revert).
        // syncCounter is incremented in sync with every change to the
        // source ref value. This let us know how many times the ref
        // was modified and support chained sync operations. If there
        // are more sync triggers than the ignore count, the we now
        // there are modifications in the source ref value that we
        // need to commit
        const ignoreCounter = ref(0);
        const syncCounter = ref(0);
        ignorePrevAsyncUpdates = () => {
            ignoreCounter.value = syncCounter.value;
        };
        // Sync watch to count modifications to the source
        disposables.push(watch(source, () => {
            syncCounter.value++;
        }, Object.assign(Object.assign({}, watchOptions), { flush: 'sync' })));
        ignoreUpdates = (updater) => {
            // Call the updater function and count how many sync updates are performed,
            // then add them to the ignore count
            const syncCounterPrev = syncCounter.value;
            updater();
            ignoreCounter.value += syncCounter.value - syncCounterPrev;
        };
        disposables.push(watch(source, (...args) => {
            // If a history operation was performed (ignoreCounter > 0) and there are
            // no other changes to the source ref value afterwards, then ignore this commit
            const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
            ignoreCounter.value = 0;
            syncCounter.value = 0;
            if (ignore)
                return;
            filteredCb(...args);
        }, watchOptions));
        stop = () => {
            disposables.forEach(fn => fn());
        };
    }
    return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

function makeDestructurable(obj, arr) {
    if (typeof Symbol !== 'undefined') {
        const clone = Object.assign({}, obj);
        Object.defineProperty(clone, Symbol.iterator, {
            enumerable: false,
            value() {
                let index = 0;
                return {
                    next: () => ({
                        value: arr[index++],
                        done: index > arr.length,
                    }),
                };
            },
        });
        return clone;
    }
    else {
        return Object.assign([...arr], obj);
    }
}

/**
 * `NOT` conditions for refs.
 *
 * @see https://vueuse.org/not
 */
function not(v) {
    return computed(() => !unref(v));
}

/**
 * `OR` conditions for refs.
 *
 * @see https://vueuse.org/or
 */
function or(...args) {
    return computed(() => args.some(i => unref(i)));
}

// implementation
function index_esm_pausableWatch(source, cb, options = {}) {
    const { eventFilter: filter } = options, watchOptions = __rest(options, ["eventFilter"]);
    const { eventFilter, pause, resume, isActive } = index_esm_pausableFilter(filter);
    const stop = watchWithFilter(source, cb, Object.assign(Object.assign({}, watchOptions), { eventFilter }));
    return { stop, pause, resume, isActive };
}

/**
 * Converts plain function into a reactive function.
 * The converted function accepts refs as it's arguments
 * and returns a ComputedRef, with proper typing.
 *
 * @param fn - Source function
 */
function reactify(fn) {
    return function (...args) {
        return computed(() => fn.apply(this, args.map(i => unref(i))));
    };
}

function reactifyObject(obj, optionsOrKeys = {}) {
    let keys = [];
    if (Array.isArray(optionsOrKeys)) {
        keys = optionsOrKeys;
    }
    else {
        const { includeOwnProperties = true } = optionsOrKeys;
        keys.push(...Object.keys(obj));
        if (includeOwnProperties)
            keys.push(...Object.getOwnPropertyNames(obj));
    }
    return Object.fromEntries(keys
        .map((key) => {
        const value = obj[key];
        return [
            key,
            typeof value === 'function'
                ? reactify(value.bind(obj))
                : value,
        ];
    }));
}

/**
 * Reactively pick fields from a reactive object
 *
 * @see https://vueuse.js.org/reactivePick
 */
function reactivePick(obj, ...keys) {
    return reactive(Object.fromEntries(keys.map(k => [k, toRef(obj, k)])));
}

/**
 *  Shorthand for `ref.value = x`
 */
function set(...args) {
    if (args.length === 2) {
        const [ref, value] = args;
        ref.value = value;
    }
    if (args.length === 3) {
        if (isVue2) {
            // use @vue/composition-api's set API
            __webpack_require__(236).set(...args);
        }
        else {
            const [target, key, value] = args;
            target[key] = value;
        }
    }
}

/**
 * Keep target ref(s) in sync with the source ref
 *
 * @param source source ref
 * @param targets
 */
function syncRef(source, targets, { flush = 'sync', deep = false, immediate = true, } = {}) {
    if (!Array.isArray(targets))
        targets = [targets];
    return watch(source, (newValue) => {
        targets.forEach(target => target.value = newValue);
    }, {
        flush,
        deep,
        immediate,
    });
}

// implementation
function throttledWatch(source, cb, options = {}) {
    const { throttle = 0 } = options, watchOptions = __rest(options, ["throttle"]);
    return watchWithFilter(source, cb, Object.assign(Object.assign({}, watchOptions), { eventFilter: index_esm_throttleFilter(throttle) }));
}

/**
 * Converts ref to reactive.
 *
 * @see https://vueuse.org/toReactive
 * @param objectRef A ref of object
 */
function toReactive(objectRef) {
    if (!isRef(objectRef))
        return reactive(objectRef);
    const proxy = new Proxy({}, {
        get(_, p, receiver) {
            return Reflect.get(objectRef.value, p, receiver);
        },
        set(_, p, value) {
            objectRef.value[p] = value;
            return true;
        },
        deleteProperty(_, p) {
            return Reflect.deleteProperty(objectRef.value, p);
        },
        has(_, p) {
            return Reflect.has(objectRef.value, p);
        },
        ownKeys() {
            return Object.keys(objectRef.value);
        },
        getOwnPropertyDescriptor() {
            return {
                enumerable: true,
                configurable: true,
            };
        },
    });
    return reactive(proxy);
}

/**
 * Extended `toRefs` that also accepts refs of an object.
 *
 * @see https://vueuse.org/toRefs
 * @param objectRef A ref or normal object or array.
 */
function toRefs(objectRef) {
    if (!isRef(objectRef))
        return toRefs$1(objectRef);
    const result = Array.isArray(objectRef.value)
        ? new Array(objectRef.value.length)
        : {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in objectRef.value) {
        result[key] = customRef(() => ({
            get() {
                return objectRef.value[key];
            },
            set(v) {
                objectRef.value[key] = v;
            },
        }));
    }
    return result;
}

/**
 * Call onMounted() if it's inside a component lifecycle, if not, run just call the function
 *
 * @param fn
 * @param sync if set to false, it will run in the nextTick() of Vue
 */
function index_esm_tryOnMounted(fn, sync = true) {
    if (getCurrentInstance())
        onMounted(fn);
    else if (sync)
        fn();
    else
        nextTick(fn);
}

/**
 * Call onScopeDispose() if it's inside a component lifecycle, if not, run just call the function
 *
 * @param fn
 */
function index_esm_tryOnScopeDispose(fn) {
    if ((0,lib.getCurrentScope)()) {
        (0,lib.onScopeDispose)(fn);
        return true;
    }
    return false;
}

/**
 * Call onUnmounted() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 */
function index_esm_tryOnUnmounted(fn) {
    if (getCurrentInstance())
        onUnmounted(fn);
}

function until(r) {
    let isNot = false;
    function toMatch(condition, { flush = 'sync', deep = false, timeout, throwOnTimeout } = {}) {
        let stop = null;
        const watcher = new Promise((resolve) => {
            stop = watch(r, (v) => {
                if (condition(v) === !isNot) {
                    stop === null || stop === void 0 ? void 0 : stop();
                    resolve();
                }
            }, {
                flush,
                deep,
                immediate: true,
            });
        });
        const promises = [watcher];
        if (timeout) {
            promises.push(index_esm_promiseTimeout(timeout, throwOnTimeout).finally(() => {
                stop === null || stop === void 0 ? void 0 : stop();
            }));
        }
        return Promise.race(promises);
    }
    function toBe(value, options) {
        return toMatch(v => v === unref(value), options);
    }
    function toBeTruthy(options) {
        return toMatch(v => Boolean(v), options);
    }
    function toBeNull(options) {
        return toBe(null, options);
    }
    function toBeUndefined(options) {
        return toBe(undefined, options);
    }
    function toBeNaN(options) {
        return toMatch(Number.isNaN, options);
    }
    function toContains(value, options) {
        return toMatch((v) => {
            const array = Array.from(v);
            return array.includes(value) || array.includes(unref(value));
        }, options);
    }
    function changed(options) {
        return changedTimes(1, options);
    }
    function changedTimes(n = 1, options) {
        let count = -1; // skip the immediate check
        return toMatch(() => {
            count += 1;
            return count >= n;
        }, options);
    }
    if (Array.isArray(unref(r))) {
        const instance = {
            toMatch,
            toContains,
            changed,
            changedTimes,
            get not() {
                isNot = !isNot;
                return this;
            },
        };
        return instance;
    }
    else {
        const instance = {
            toMatch,
            toBe,
            toBeTruthy,
            toBeNull,
            toBeNaN,
            toBeUndefined,
            changed,
            changedTimes,
            get not() {
                isNot = !isNot;
                return this;
            },
        };
        return instance;
    }
}

/**
 * Basic counter with utility functions.
 *
 * @see https://vueuse.org/useCounter
 * @param [initialValue=0]
 */
function useCounter(initialValue = 0) {
    const count = ref(initialValue);
    const inc = (delta = 1) => (count.value += delta);
    const dec = (delta = 1) => (count.value -= delta);
    const get = () => count.value;
    const set = (val) => (count.value = val);
    const reset = (val = initialValue) => {
        initialValue = val;
        return set(val);
    };
    return { count, inc, dec, get, set, reset };
}

/**
 * Debounce execution of a function.
 *
 * @param  fn          A function to be executed after delay milliseconds debounced.
 * @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 *
 * @return A new, debounce, function.
 */
function useDebounceFn(fn, ms = 200) {
    return index_esm_createFilterWrapper(debounceFilter(ms), fn);
}

function useDebounce(value, ms = 200) {
    if (ms <= 0)
        return value;
    const debounced = ref(value.value);
    const updater = useDebounceFn(() => {
        debounced.value = value.value;
    }, ms);
    watch(value, () => updater());
    return debounced;
}

/**
 * Wrapper for `setInterval` with controls
 *
 * @param cb
 * @param interval
 * @param options
 */
function index_esm_useIntervalFn(cb, interval = 1000, options = {}) {
    const { immediate = true, immediateCallback = false, } = options;
    let timer = null;
    const isActive = ref(false);
    function clean() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }
    function pause() {
        isActive.value = false;
        clean();
    }
    function resume() {
        if (interval <= 0)
            return;
        isActive.value = true;
        if (immediateCallback)
            cb();
        clean();
        timer = setInterval(cb, interval);
    }
    if (immediate && isClient)
        resume();
    index_esm_tryOnScopeDispose(pause);
    return {
        isActive,
        pause,
        resume,
    };
}

function useInterval(interval = 1000, options = {}) {
    const { controls: exposeControls = false, immediate = true, } = options;
    const counter = ref(0);
    const controls = index_esm_useIntervalFn(() => counter.value += 1, interval, { immediate });
    if (exposeControls) {
        return Object.assign({ counter }, controls);
    }
    else {
        return counter;
    }
}

function useLastChanged(source, options = {}) {
    var _a;
    const ms = ref((_a = options.initialValue) !== null && _a !== void 0 ? _a : null);
    watch(source, () => ms.value = index_esm_timestamp(), options);
    return ms;
}

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param   fn             A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param   ms             A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 *
 * @return  A new, throttled, function.
 */
function useThrottleFn(fn, ms = 200, trailing = true) {
    return index_esm_createFilterWrapper(index_esm_throttleFilter(ms, trailing), fn);
}

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  delay  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 */
function useThrottle(value, delay = 200) {
    if (delay <= 0)
        return value;
    const throttled = ref(value.value);
    const updater = useThrottleFn(() => {
        throttled.value = value.value;
    }, delay);
    watch(value, () => updater());
    return throttled;
}

/**
 * Wrapper for `setTimeout` with controls.
 *
 * @param cb
 * @param interval
 * @param immediate
 */
function index_esm_useTimeoutFn(cb, interval, options = {}) {
    const { immediate = true, } = options;
    const isPending = ref(false);
    let timer = null;
    function clear() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
    function stop() {
        isPending.value = false;
        clear();
    }
    function start(...args) {
        clear();
        isPending.value = true;
        timer = setTimeout(() => {
            isPending.value = false;
            timer = null;
            // eslint-disable-next-line node/no-callback-literal
            cb(...args);
        }, unref(interval));
    }
    if (immediate) {
        isPending.value = true;
        if (isClient)
            start();
    }
    index_esm_tryOnScopeDispose(stop);
    return {
        isPending,
        start,
        stop,
    };
}

function useTimeout(interval = 1000, options = {}) {
    const { controls: exposeControls = false, } = options;
    const controls = index_esm_useTimeoutFn(index_esm_noop, interval, options);
    const ready = computed(() => !controls.isPending.value);
    if (exposeControls) {
        return Object.assign({ ready }, controls);
    }
    else {
        return ready;
    }
}

function useToggle(initialValue = false) {
    if (isRef(initialValue)) {
        return (value) => {
            initialValue.value = typeof value === 'boolean'
                ? value
                : !initialValue.value;
        };
    }
    else {
        const boolean = ref(initialValue);
        const toggle = (value) => {
            boolean.value = typeof value === 'boolean'
                ? value
                : !boolean.value;
        };
        return [boolean, toggle];
    }
}

/**
 * Shorthand for watching value to be truthy
 *
 * @see https://vueuse.js.org/whenever
 */
function whenever(source, cb, options) {
    return watch(source, (v, ov, onInvalidate) => { if (v)
        cb(v, ov, onInvalidate); }, options);
}



;// CONCATENATED MODULE: ./node_modules/@vueuse/core/index.esm.js




/**
 * Create an asynchronous computed dependency.
 *
 * @see https://vueuse.org/asyncComputed
 * @param evaluationCallback     The promise-returning callback which generates the computed value
 * @param initialState           The initial state, used until the first evaluation finishes
 * @param optionsOrRef           Additional options or a ref passed to receive the updates of the async evaluation
 */
function asyncComputed(evaluationCallback, initialState, optionsOrRef) {
    let options;
    if (isRef(optionsOrRef)) {
        options = {
            evaluating: optionsOrRef,
        };
    }
    else {
        options = optionsOrRef || {};
    }
    const { lazy = false, evaluating = undefined, } = options;
    const started = ref(!lazy);
    const current = ref(initialState);
    let counter = 0;
    watchEffect(async (onInvalidate) => {
        if (!started.value)
            return;
        counter++;
        const counterAtBeginning = counter;
        let hasFinished = false;
        try {
            // Defer initial setting of `evaluating` ref
            // to avoid having it as a dependency
            if (evaluating) {
                Promise.resolve().then(() => {
                    evaluating.value = true;
                });
            }
            const result = await evaluationCallback((cancelCallback) => {
                onInvalidate(() => {
                    if (evaluating)
                        evaluating.value = false;
                    if (!hasFinished)
                        cancelCallback();
                });
            });
            if (counterAtBeginning === counter)
                current.value = result;
        }
        finally {
            if (evaluating)
                evaluating.value = false;
            hasFinished = true;
        }
    });
    if (lazy) {
        return computed(() => {
            started.value = true;
            return current.value;
        });
    }
    else {
        return current;
    }
}

/**
 * Create a ref which will be reset to the default value after some time.
 *
 * @see https://vueuse.org/autoResetRef
 * @param defaultValue The value which will be set.
 * @param afterMs      A zero-or-greater delay in milliseconds.
 */
function autoResetRef(defaultValue, afterMs = 10000) {
    return customRef((track, trigger) => {
        let value = defaultValue;
        let timer;
        const resetAfter = () => setTimeout(() => {
            value = defaultValue;
            trigger();
        }, unref(afterMs));
        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                value = newValue;
                trigger();
                clearTimeout(timer);
                timer = resetAfter();
            },
        };
    });
}

function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
    let source = inject(key);
    if (defaultSource)
        source = inject(key, defaultSource);
    if (treatDefaultAsFactory)
        source = inject(key, defaultSource, treatDefaultAsFactory);
    if (typeof options === 'function') {
        return computed(ctx => options(source, ctx));
    }
    else {
        return computed({
            get: ctx => options.get(source, ctx),
            set: options.set,
        });
    }
}

/**
 * Get the dom element of a ref of element or Vue component instance
 *
 * @param elRef
 */
function unrefElement(elRef) {
    var _a, _b;
    const plain = unref(elRef);
    return (_b = (_a = plain) === null || _a === void 0 ? void 0 : _a.$el) !== null && _b !== void 0 ? _b : plain;
}

const defaultWindow =  isClient ? window : undefined;
const defaultDocument =  isClient ? window.document : undefined;
const defaultNavigator =  isClient ? window.navigator : undefined;

function useEventListener(...args) {
    let target;
    let event;
    let listener;
    let options;
    if (index_esm_isString(args[0])) {
        [event, listener, options] = args;
        target = defaultWindow;
    }
    else {
        [target, event, listener, options] = args;
    }
    if (!target)
        return index_esm_noop;
    let cleanup = index_esm_noop;
    const stopWatch = (0,lib.watch)(() => (0,lib.unref)(target), (el) => {
        cleanup();
        if (!el)
            return;
        el.addEventListener(event, listener, options);
        cleanup = () => {
            el.removeEventListener(event, listener, options);
            cleanup = index_esm_noop;
        };
    }, { immediate: true, flush: 'post' });
    const stop = () => {
        stopWatch();
        cleanup();
    };
    index_esm_tryOnScopeDispose(stop);
    return stop;
}

/**
 * Listen for clicks outside of an element.
 *
 * @see https://vueuse.org/onClickOutside
 * @param target
 * @param handler
 * @param options
 */
function onClickOutside(target, handler, options = {}) {
    const { window = defaultWindow, event = 'pointerdown' } = options;
    if (!window)
        return;
    const listener = (event) => {
        const el = unrefElement(target);
        if (!el)
            return;
        if (el === event.target || event.composedPath().includes(el))
            return;
        handler(event);
    };
    return useEventListener(window, event, listener, { passive: true });
}

const createKeyPredicate = (keyFilter) => typeof keyFilter === 'function'
    ? keyFilter
    : typeof keyFilter === 'string'
        ? (event) => event.key === keyFilter
        : keyFilter
            ? () => true
            : () => false;
/**
 * Listen for keyboard keys being stroked.
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
function onKeyStroke(key, handler, options = {}) {
    const { target = defaultWindow, eventName = 'keydown', passive = false } = options;
    const predicate = createKeyPredicate(key);
    const listener = (e) => {
        if (predicate(e))
            handler(e);
    };
    return useEventListener(target, eventName, listener, passive);
}
/**
 * Listen to the keydown event of the given key.
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
function onKeyDown(key, handler, options = {}) {
    return onKeyStroke(key, handler, Object.assign(Object.assign({}, options), { eventName: 'keydown' }));
}
/**
 * Listen to the keypress event of the given key.
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
function onKeyPressed(key, handler, options = {}) {
    return onKeyStroke(key, handler, Object.assign(Object.assign({}, options), { eventName: 'keypress' }));
}
/**
 * Listen to the keyup event of the given key.
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
function onKeyUp(key, handler, options = {}) {
    return onKeyStroke(key, handler, Object.assign(Object.assign({}, options), { eventName: 'keyup' }));
}

/* this implementation is original ported from https://github.com/streamich/react-use by Vadim Dalecky */
const isFocusedElementEditable = () => {
    const { activeElement, body } = document;
    if (!activeElement)
        return false;
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body)
        return false;
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
const isTypedCharValid = ({ keyCode, metaKey, ctrlKey, altKey, }) => {
    if (metaKey || ctrlKey || altKey)
        return false;
    // 0...9
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105))
        return true;
    // a...z
    if (keyCode >= 65 && keyCode <= 90)
        return true;
    // All other keys.
    return false;
};
/**
 * Fires when users start typing on non-editable elements.
 *
 * @see https://vueuse.org/onStartTyping
 * @param callback
 * @param options
 */
function onStartTyping(callback, options = {}) {
    const { document = defaultDocument } = options;
    const keydown = (event) => {
        !isFocusedElementEditable()
            && isTypedCharValid(event)
            && callback(event);
    };
    if (document)
        useEventListener(document, 'keydown', keydown, { passive: true });
}

/**
 * Shorthand for binding ref to template element.
 *
 * @see https://vueuse.org/templateRef
 * @param key
 * @param initialValue
 */
function templateRef(key, initialValue = null) {
    const instance = getCurrentInstance();
    let _trigger = () => { };
    const element = customRef((track, trigger) => {
        _trigger = trigger;
        return {
            get() {
                var _a, _b;
                track();
                return (_b = (_a = instance === null || instance === void 0 ? void 0 : instance.proxy) === null || _a === void 0 ? void 0 : _a.$refs[key]) !== null && _b !== void 0 ? _b : initialValue;
            },
            set() { },
        };
    });
    onMounted(_trigger);
    onUpdated(_trigger);
    return element;
}

/**
 * Reactive `document.activeElement`
 *
 * @see https://vueuse.org/useActiveElement
 * @param options
 */
function useActiveElement(options = {}) {
    const { window = defaultWindow } = options;
    const counter = ref(0);
    if (window) {
        useEventListener(window, 'blur', () => counter.value += 1, true);
        useEventListener(window, 'focus', () => counter.value += 1, true);
    }
    return computed(() => {
        // eslint-disable-next-line no-unused-expressions
        counter.value;
        return window === null || window === void 0 ? void 0 : window.document.activeElement;
    });
}

/**
 * Reactive async state. Will not block your setup function and will triggers changes once
 * the promise is ready.
 *
 * @see https://vueuse.org/useAsyncState
 * @param promise         The promise / async function to be resolved
 * @param initialState    The initial state, used until the first evaluation finishes
 * @param options
 */
function useAsyncState(promise, initialState, options = {}) {
    const { immediate = true, delay = 0, onError = noop, resetOnExecute = true, } = options;
    const state = shallowRef(initialState);
    const isReady = ref(false);
    const error = ref(undefined);
    async function execute(delay = 0) {
        if (resetOnExecute)
            state.value = initialState;
        error.value = undefined;
        isReady.value = false;
        if (delay > 0)
            await promiseTimeout(delay);
        const _promise = typeof promise === 'function'
            ? promise()
            : promise;
        try {
            const data = await _promise;
            // @ts-ignore
            state.value = data;
            isReady.value = true;
        }
        catch (e) {
            error.value = e;
            onError(e);
        }
    }
    if (immediate)
        execute(delay);
    return {
        state,
        isReady,
        error,
        execute,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive Battery Status API.
 *
 * @see https://vueuse.org/useBattery
 * @param options
 */
function useBattery({ navigator = defaultNavigator } = {}) {
    const events = ['chargingchange', 'chargingtimechange', 'dischargingtimechange', 'levelchange'];
    const isSupported = navigator && 'getBattery' in navigator;
    const charging = ref(false);
    const chargingTime = ref(0);
    const dischargingTime = ref(0);
    const level = ref(1);
    let battery;
    function updateBatteryInfo() {
        charging.value = this.charging;
        chargingTime.value = this.chargingTime || 0;
        dischargingTime.value = this.dischargingTime || 0;
        level.value = this.level;
    }
    if (isSupported) {
        navigator
            .getBattery()
            .then((_battery) => {
            battery = _battery;
            updateBatteryInfo.call(battery);
            for (const event of events)
                useEventListener(battery, event, updateBatteryInfo, { passive: true });
        });
    }
    return {
        isSupported,
        charging,
        chargingTime,
        dischargingTime,
        level,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive Media Query.
 *
 * @see https://vueuse.org/useMediaQuery
 * @param query
 * @param options
 */
function useMediaQuery(query, options = {}) {
    const { window = defaultWindow } = options;
    if (!window)
        return (0,lib.ref)(false);
    const mediaQuery = window.matchMedia(query);
    const matches = (0,lib.ref)(mediaQuery.matches);
    const handler = (event) => {
        matches.value = event.matches;
    };
    if ('addEventListener' in mediaQuery)
        mediaQuery.addEventListener('change', handler);
    else
        mediaQuery.addListener(handler);
    index_esm_tryOnScopeDispose(() => {
        if ('removeEventListener' in mediaQuery)
            mediaQuery.removeEventListener('change', handler);
        else
            mediaQuery.removeListener(handler);
    });
    return matches;
}

/**
 * Breakpoints from Tailwind V2
 *
 * @see https://tailwindcss.com/docs/breakpoints
 */
const breakpointsTailwind = {
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1536,
};
/**
 * Breakpoints from Bootstrap V5
 *
 * @see https://getbootstrap.com/docs/5.0/layout/breakpoints
 */
const breakpointsBootstrapV5 = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
};
/**
 * Breakpoints from Vuetify V2
 *
 * @see https://vuetifyjs.com/en/features/breakpoints
 */
const breakpointsVuetify = {
    xs: 600,
    sm: 960,
    md: 1264,
    lg: 1904,
};
/**
 * Breakpoints from Ant Design
 *
 * @see https://ant.design/components/layout/#breakpoint-width
 */
const breakpointsAntDesign = {
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
};
/**
 * Sematic Breakpoints
 */
const breakpointsSematic = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop4K: 2560,
};

/**
 * Reactively viewport breakpoints
 *
 * @see https://vueuse.org/useBreakpoints
 * @param options
 */
function useBreakpoints(breakpoints, options = {}) {
    function getValue(k, delta) {
        let v = breakpoints[k];
        if (delta != null)
            v = increaseWithUnit(v, delta);
        if (typeof v === 'number')
            v = `${v}px`;
        return v;
    }
    const { window = defaultWindow } = options;
    function match(query) {
        if (!window)
            return false;
        return window.matchMedia(query).matches;
    }
    return {
        greater(k) {
            return useMediaQuery(`(min-width: ${getValue(k)})`, options);
        },
        smaller(k) {
            return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
        },
        between(a, b) {
            return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
        },
        isGreater(k) {
            return match(`(min-width: ${getValue(k)})`);
        },
        isSmaller(k) {
            return match(`(max-width: ${getValue(k, -0.1)})`);
        },
        isInBetween(a, b) {
            return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
        },
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive browser location.
 *
 * @see https://vueuse.org/useBrowserLocation
 * @param options
 */
function useBrowserLocation({ window = defaultWindow } = {}) {
    const buildState = (trigger) => {
        const { state, length } = (window === null || window === void 0 ? void 0 : window.history) || {};
        const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window === null || window === void 0 ? void 0 : window.location) || {};
        return {
            trigger,
            state,
            length,
            hash,
            host,
            hostname,
            href,
            origin,
            pathname,
            port,
            protocol,
            search,
        };
    };
    const state = ref(buildState('load'));
    if (window) {
        useEventListener(window, 'popstate', () => state.value = buildState('popstate'), { passive: true });
        useEventListener(window, 'hashchange', () => state.value = buildState('hashchange'), { passive: true });
    }
    return state;
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
function useClipboard(options = {}) {
    const { navigator = defaultNavigator, read = true, source, copiedDuring = 1500, } = options;
    const events = ['copy', 'cut'];
    const isSupported = Boolean(navigator && 'clipboard' in navigator);
    const text = ref('');
    const copied = ref(false);
    const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
    function updateText() {
        // @ts-expect-error untyped API
        navigator.clipboard.readText().then((value) => {
            text.value = value;
        });
    }
    if (isSupported && read) {
        for (const event of events)
            useEventListener(event, updateText);
    }
    async function copy(value = unref(source)) {
        if (isSupported && value != null) {
            // @ts-expect-error untyped API
            await navigator.clipboard.writeText(value);
            text.value = value;
            copied.value = true;
            timeout.start();
        }
    }
    return {
        isSupported,
        text: text,
        copied: copied,
        copy,
    };
}

/**
 * Manipulate CSS variables.
 *
 * @see https://vueuse.org/useCssVar
 * @param prop
 * @param el
 * @param options
 */
function useCssVar(prop, target, { window = defaultWindow } = {}) {
    const variable = ref('');
    const elRef = computed(() => { var _a; return unrefElement(target) || ((_a = window === null || window === void 0 ? void 0 : window.document) === null || _a === void 0 ? void 0 : _a.documentElement); });
    watch(elRef, (el) => {
        if (el && window)
            variable.value = window.getComputedStyle(el).getPropertyValue(prop);
    }, { immediate: true });
    watch(variable, (val) => {
        var _a;
        if ((_a = elRef.value) === null || _a === void 0 ? void 0 : _a.style)
            elRef.value.style.setProperty(prop, val);
    });
    return variable;
}

const StorageSerializers = {
    boolean: {
        read: (v) => v === 'true',
        write: (v) => String(v),
    },
    object: {
        read: (v) => JSON.parse(v),
        write: (v) => JSON.stringify(v),
    },
    number: {
        read: (v) => Number.parseFloat(v),
        write: (v) => String(v),
    },
    any: {
        read: (v) => v,
        write: (v) => String(v),
    },
    string: {
        read: (v) => v,
        write: (v) => String(v),
    },
};
/**
 * Reactive LocalStorage/SessionStorage.
 *
 * @see https://vueuse.org/useStorage
 * @param key
 * @param defaultValue
 * @param storage
 * @param options
 */
function useStorage(key, defaultValue, storage = defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage, options = {}) {
    var _a;
    const { flush = 'pre', deep = true, listenToStorageChanges = true, window = defaultWindow, eventFilter, onError = (e) => {
        console.error(e);
    }, } = options;
    const type = defaultValue == null
        ? 'any'
        : typeof defaultValue === 'boolean'
            ? 'boolean'
            : typeof defaultValue === 'string'
                ? 'string'
                : typeof defaultValue === 'object'
                    ? 'object'
                    : Array.isArray(defaultValue)
                        ? 'object'
                        : !Number.isNaN(defaultValue)
                            ? 'number'
                            : 'any';
    const data = (0,lib.ref)(defaultValue);
    const serializer = (_a = options.serializer) !== null && _a !== void 0 ? _a : StorageSerializers[type];
    function read(event) {
        if (!storage || (event && event.key !== key))
            return;
        try {
            const rawValue = event ? event.newValue : storage.getItem(key);
            if (rawValue == null) {
                data.value = defaultValue;
                if (defaultValue !== null)
                    storage.setItem(key, serializer.write(defaultValue));
            }
            else {
                data.value = serializer.read(rawValue);
            }
        }
        catch (e) {
            onError(e);
        }
    }
    read();
    if (window && listenToStorageChanges)
        useEventListener(window, 'storage', read);
    watchWithFilter(data, () => {
        if (!storage) // SSR
            return;
        try {
            if (data.value == null)
                storage.removeItem(key);
            else
                storage.setItem(key, serializer.write(data.value));
        }
        catch (e) {
            onError(e);
        }
    }, {
        flush,
        deep,
        eventFilter,
    });
    return data;
}

/**
 * Reactive dark theme preference.
 *
 * @see https://vueuse.org/usePreferredDark
 * @param [options]
 */
function usePreferredDark(options) {
    return useMediaQuery('(prefers-color-scheme: dark)', options);
}

/**
 * Reactive dark mode with auto data persistence.
 *
 * @see https://vueuse.org/useDark
 * @param options
 */
function useDark(options = {}) {
    const { selector = 'html', attribute = 'class', valueDark = 'dark', valueLight = '', window = defaultWindow, storage = defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage, storageKey = 'vueuse-color-scheme', listenToStorageChanges = true, } = options;
    const preferredDark = usePreferredDark({ window });
    const store = storageKey == null
        ? ref('auto')
        : useStorage(storageKey, 'auto', storage, { window, listenToStorageChanges });
    const isDark = computed({
        get() {
            return store.value === 'auto'
                ? preferredDark.value
                : store.value === 'dark';
        },
        set(v) {
            if (v === preferredDark.value)
                store.value = 'auto';
            else
                store.value = v ? 'dark' : 'light';
        },
    });
    const onChanged = options.onChanged || ((v) => {
        const el = window === null || window === void 0 ? void 0 : window.document.querySelector(selector);
        if (attribute === 'class') {
            el === null || el === void 0 ? void 0 : el.classList.toggle(valueDark, v);
            if (valueLight)
                el === null || el === void 0 ? void 0 : el.classList.toggle(valueLight, !v);
        }
        else {
            el === null || el === void 0 ? void 0 : el.setAttribute(attribute, v ? valueDark : valueLight);
        }
    });
    watch(isDark, onChanged, { flush: 'post' });
    tryOnMounted(() => onChanged(isDark.value));
    return isDark;
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive DeviceMotionEvent.
 *
 * @see https://vueuse.org/useDeviceMotion
 * @param options
 */
function useDeviceMotion(options = {}) {
    const { window = defaultWindow, eventFilter = bypassFilter, } = options;
    const acceleration = ref({ x: null, y: null, z: null });
    const rotationRate = ref({ alpha: null, beta: null, gamma: null });
    const interval = ref(0);
    const accelerationIncludingGravity = ref({
        x: null,
        y: null,
        z: null,
    });
    if (window) {
        const onDeviceMotion = createFilterWrapper(eventFilter, (event) => {
            acceleration.value = event.acceleration;
            accelerationIncludingGravity.value = event.accelerationIncludingGravity;
            rotationRate.value = event.rotationRate;
            interval.value = event.interval;
        });
        useEventListener(window, 'devicemotion', onDeviceMotion);
    }
    return {
        acceleration,
        accelerationIncludingGravity,
        rotationRate,
        interval,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive DeviceOrientationEvent.
 *
 * @see https://vueuse.org/useDeviceOrientation
 * @param options
 */
function useDeviceOrientation(options = {}) {
    const { window = defaultWindow } = options;
    const isSupported = Boolean(window && 'DeviceOrientationEvent' in window);
    const isAbsolute = ref(false);
    const alpha = ref(null);
    const beta = ref(null);
    const gamma = ref(null);
    if (window && isSupported) {
        useEventListener(window, 'deviceorientation', (event) => {
            isAbsolute.value = event.absolute;
            alpha.value = event.alpha;
            beta.value = event.beta;
            gamma.value = event.gamma;
        });
    }
    return {
        isSupported,
        isAbsolute,
        alpha,
        beta,
        gamma,
    };
}

// device pixel ratio statistics from https://www.mydevice.io/
const DEVICE_PIXEL_RATIO_SCALES = (/* unused pure expression or super */ null && ([
    1,
    1.325,
    1.4,
    1.5,
    1.8,
    2,
    2.4,
    2.5,
    2.75,
    3,
    3.5,
    4,
]));
/**
 * Reactively track `window.devicePixelRatio`.
 *
 * @see https://vueuse.org/useDevicePixelRatio
 * @param options
 */
function useDevicePixelRatio({ window = defaultWindow, } = {}) {
    if (!window) {
        return {
            pixelRatio: ref(1),
        };
    }
    const pixelRatio = ref(window.devicePixelRatio);
    const handleDevicePixelRatio = () => {
        pixelRatio.value = window.devicePixelRatio;
    };
    useEventListener(window, 'resize', handleDevicePixelRatio, { passive: true });
    DEVICE_PIXEL_RATIO_SCALES.forEach((dppx) => {
        // listen mql events in both sides
        const mqlMin = useMediaQuery(`screen and (min-resolution: ${dppx}dppx)`);
        const mqlMax = useMediaQuery(`screen and (max-resolution: ${dppx}dppx)`);
        watch([mqlMin, mqlMax], handleDevicePixelRatio);
    });
    return { pixelRatio };
}

function usePermission(permissionDesc, options = {}) {
    const { controls = false, navigator = defaultNavigator, } = options;
    const isSupported = Boolean(navigator && 'permissions' in navigator);
    let permissionStatus;
    const desc = typeof permissionDesc === 'string'
        ? { name: permissionDesc }
        : permissionDesc;
    const state = ref();
    const onChange = () => {
        if (permissionStatus)
            state.value = permissionStatus.state;
    };
    const query = createSingletonPromise(async () => {
        if (!isSupported)
            return;
        if (!permissionStatus) {
            try {
                permissionStatus = await navigator.permissions.query(desc);
                useEventListener(permissionStatus, 'change', onChange);
                onChange();
            }
            catch (_a) {
                state.value = 'prompt';
            }
        }
        return permissionStatus;
    });
    query();
    if (controls) {
        return {
            state: state,
            isSupported,
            query,
        };
    }
    else {
        return state;
    }
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive `enumerateDevices` listing avaliable input/output devices
 *
 * @see https://vueuse.org/useDevicesList
 * @param options
 */
function useDevicesList(options = {}) {
    const { navigator = defaultNavigator, requestPermissions = false, onUpdated, } = options;
    const devices = ref([]);
    const videoInputs = computed(() => devices.value.filter(i => i.kind === 'videoinput'));
    const audioInputs = computed(() => devices.value.filter(i => i.kind === 'audioinput'));
    const audioOutputs = computed(() => devices.value.filter(i => i.kind === 'audiooutput'));
    let isSupported = false;
    const permissionGranted = ref(false);
    async function update() {
        if (!isSupported)
            return;
        devices.value = await navigator.mediaDevices.enumerateDevices();
        onUpdated === null || onUpdated === void 0 ? void 0 : onUpdated(devices.value);
    }
    async function ensurePermissions() {
        if (!isSupported)
            return false;
        if (permissionGranted.value)
            return true;
        const { state, query } = usePermission('camera', { controls: true });
        await query();
        if (state.value !== 'granted') {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
            stream.getTracks().forEach(t => t.stop());
            update();
            permissionGranted.value = true;
        }
        else {
            permissionGranted.value = true;
        }
        return permissionGranted.value;
    }
    if (navigator) {
        isSupported = Boolean(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
        if (isSupported) {
            if (requestPermissions)
                ensurePermissions();
            useEventListener(navigator.mediaDevices, 'devicechange', update);
            update();
        }
    }
    return {
        devices,
        ensurePermissions,
        permissionGranted,
        videoInputs,
        audioInputs,
        audioOutputs,
        isSupported,
    };
}

/**
 * Reactively track `document.visibilityState`.
 *
 * @see https://vueuse.org/useDocumentVisibility
 * @param options
 */
function useDocumentVisibility({ document = defaultDocument } = {}) {
    if (!document)
        return ref('visible');
    const visibility = ref(document.visibilityState);
    useEventListener(document, 'visibilitychange', () => {
        visibility.value = document.visibilityState;
    });
    return visibility;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function index_esm_rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/**
 * Reports changes to the dimensions of an Element's content or the border-box
 *
 * @see https://vueuse.org/useResizeObserver
 * @param target
 * @param callback
 * @param options
 */
function useResizeObserver(target, callback, options = {}) {
    const { window = defaultWindow } = options, observerOptions = index_esm_rest(options, ["window"]);
    let observer;
    const isSupported = window && 'ResizeObserver' in window;
    const cleanup = () => {
        if (observer) {
            observer.disconnect();
            observer = undefined;
        }
    };
    const stopWatch = watch(() => unrefElement(target), (el) => {
        cleanup();
        if (isSupported && window && el) {
            // @ts-expect-error missing type
            observer = new window.ResizeObserver(callback);
            observer.observe(el, observerOptions);
        }
    }, { immediate: true, flush: 'post' });
    const stop = () => {
        cleanup();
        stopWatch();
    };
    tryOnScopeDispose(stop);
    return {
        isSupported,
        stop,
    };
}

/**
 * Reactive size of an HTML element.
 *
 * @see https://vueuse.org/useElementSize
 * @param target
 * @param callback
 * @param options
 */
function useElementBounding(target, options = {}) {
    const height = ref(0);
    const bottom = ref(0);
    const left = ref(0);
    const right = ref(0);
    const top = ref(0);
    const width = ref(0);
    const x = ref(0);
    const y = ref(0);
    useResizeObserver(target, ([entry]) => {
        height.value = entry.contentRect.height;
        bottom.value = entry.contentRect.bottom;
        left.value = entry.contentRect.left;
        right.value = entry.contentRect.right;
        top.value = entry.contentRect.top;
        width.value = entry.contentRect.width;
        x.value = entry.contentRect.x;
        y.value = entry.contentRect.y;
    }, options);
    return {
        x,
        y,
        top,
        right,
        bottom,
        left,
        width,
        height,
    };
}

/**
 * Reactive size of an HTML element.
 *
 * @see https://vueuse.org/useElementSize
 * @param target
 * @param callback
 * @param options
 */
function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
    const width = ref(initialSize.width);
    const height = ref(initialSize.height);
    useResizeObserver(target, ([entry]) => {
        width.value = entry.contentRect.width;
        height.value = entry.contentRect.height;
    }, options);
    return {
        width,
        height,
    };
}

/**
 * Tracks the visibility of an element within the viewport.
 *
 * @see https://vueuse.org/useElementVisibility
 * @param element
 * @param options
 */
function useElementVisibility(element, { window = defaultWindow, scrollTarget } = {}) {
    const elementIsVisible = ref(false);
    const testBounding = () => {
        if (!window)
            return;
        const document = window.document;
        if (!element.value) {
            elementIsVisible.value = false;
        }
        else {
            const rect = element.value.getBoundingClientRect();
            elementIsVisible.value = (rect.top <= (window.innerHeight || document.documentElement.clientHeight)
                && rect.left <= (window.innerWidth || document.documentElement.clientWidth)
                && rect.bottom >= 0
                && rect.right >= 0);
        }
    };
    tryOnMounted(testBounding);
    if (window)
        tryOnMounted(() => useEventListener((scrollTarget === null || scrollTarget === void 0 ? void 0 : scrollTarget.value) || window, 'scroll', testBounding, { capture: false, passive: true }));
    return elementIsVisible;
}

const events = new Map();

function useEventBus(key) {
    const scope = getCurrentScope();
    function on(listener) {
        const listeners = events.get(key) || [];
        listeners.push(listener);
        events.set(key, listeners);
        const _off = () => off(listener);
        // auto unsubscribe when scope get disposed
        scope === null || scope === void 0 ? void 0 : scope.cleanups.push(_off);
        return _off;
    }
    function off(listener) {
        const listeners = events.get(key);
        if (!listeners)
            return;
        const index = listeners.indexOf(listener);
        if (index > -1)
            listeners.splice(index, 1);
        if (!listeners.length)
            events.delete(key);
    }
    function reset() {
        events.delete(key);
    }
    function emit(event) {
        var _a;
        (_a = events.get(key)) === null || _a === void 0 ? void 0 : _a.forEach(v => v(event));
    }
    return { on, off, emit, reset };
}

/**
 * Reactive wrapper for EventSource.
 *
 * @see https://vueuse.org/useEventSource
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource EventSource
 * @param url
 * @param events
 */
function useEventSource(url, events = []) {
    const event = ref(null);
    const data = ref(null);
    const status = ref('CONNECTING');
    const eventSource = ref(null);
    const error = ref(null);
    const close = () => {
        if (eventSource.value) {
            eventSource.value.close();
            eventSource.value = null;
            status.value = 'CLOSED';
        }
    };
    const es = new EventSource(url);
    eventSource.value = es;
    es.onopen = () => {
        status.value = 'OPEN';
        error.value = null;
    };
    es.onerror = (e) => {
        status.value = 'CLOSED';
        error.value = e;
    };
    es.onmessage = (e) => {
        event.value = null;
        data.value = e.data;
    };
    for (const event_name of events) {
        useEventListener(es, event_name, (e) => {
            event.value = event_name;
            data.value = e.data || null;
        });
    }
    tryOnScopeDispose(() => {
        close();
    });
    return {
        eventSource,
        event,
        data,
        status,
        error,
        close,
    };
}

/**
 * Reactive favicon.
 *
 * @see https://vueuse.org/useFavicon
 * @param newIcon
 * @param options
 */
function useFavicon(newIcon = null, options = {}) {
    const { baseUrl = '', rel = 'icon', document = defaultDocument, } = options;
    const favicon = isRef(newIcon)
        ? newIcon
        : ref(newIcon);
    const applyIcon = (icon) => {
        document === null || document === void 0 ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`).forEach(el => el.href = `${baseUrl}${icon}`);
    };
    watch(favicon, (i, o) => {
        if (isString(i) && i !== o)
            applyIcon(i);
    }, { immediate: true });
    return favicon;
}

const payloadMapping = {
    json: 'application/json',
    text: 'text/plain',
    formData: 'multipart/form-data',
};
/**
 * !!!IMPORTANT!!!
 *
 * If you update the UseFetchOptions interface, be sure to update this object
 * to include the new options
 */
function isFetchOptions(obj) {
    return containsProp(obj, 'immediate', 'refetch', 'beforeFetch', 'afterFetch');
}
function headersToObject(headers) {
    if (headers instanceof Headers)
        return Object.fromEntries([...headers.entries()]);
    return headers;
}
function createFetch(config = {}) {
    const _options = config.options || {};
    const _fetchOptions = config.fetchOptions || {};
    function useFactoryFetch(url, ...args) {
        const computedUrl = computed(() => config.baseUrl
            ? joinPaths(unref(config.baseUrl), unref(url))
            : unref(url));
        let options = _options;
        let fetchOptions = _fetchOptions;
        // Merge properties into a single object
        if (args.length > 0) {
            if (isFetchOptions(args[0])) {
                options = Object.assign(Object.assign({}, options), args[0]);
            }
            else {
                fetchOptions = Object.assign(Object.assign(Object.assign({}, fetchOptions), args[0]), { headers: Object.assign(Object.assign({}, (headersToObject(fetchOptions.headers) || {})), (headersToObject(args[0].headers) || {})) });
            }
        }
        if (args.length > 1 && isFetchOptions(args[1]))
            options = Object.assign(Object.assign({}, options), args[1]);
        return useFetch(computedUrl, fetchOptions, options);
    }
    return useFactoryFetch;
}
function useFetch(url, ...args) {
    const supportsAbort = typeof AbortController === 'function';
    let fetchOptions = {};
    let options = { immediate: true, refetch: false };
    const config = {
        method: 'get',
        type: 'text',
        payload: undefined,
    };
    if (args.length > 0) {
        if (isFetchOptions(args[0]))
            options = Object.assign(Object.assign({}, options), args[0]);
        else
            fetchOptions = args[0];
    }
    if (args.length > 1) {
        if (isFetchOptions(args[1]))
            options = Object.assign(Object.assign({}, options), args[1]);
    }
    const { fetch = defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.fetch, } = options;
    // Event Hooks
    const responseEvent = createEventHook();
    const errorEvent = createEventHook();
    const finallyEvent = createEventHook();
    const isFinished = ref(false);
    const isFetching = ref(false);
    const aborted = ref(false);
    const statusCode = ref(null);
    const response = shallowRef(null);
    const error = ref(null);
    const data = shallowRef(null);
    const canAbort = computed(() => supportsAbort && isFetching.value);
    let controller;
    const abort = () => {
        if (supportsAbort && controller)
            controller.abort();
    };
    const loading = (isLoading) => {
        isFetching.value = isLoading;
        isFinished.value = !isLoading;
    };
    const execute = async (throwOnFailed = false) => {
        var _a;
        loading(true);
        error.value = null;
        statusCode.value = null;
        aborted.value = false;
        controller = undefined;
        if (supportsAbort) {
            controller = new AbortController();
            controller.signal.onabort = () => aborted.value = true;
            fetchOptions = Object.assign(Object.assign({}, fetchOptions), { signal: controller.signal });
        }
        const defaultFetchOptions = {
            method: config.method,
            headers: {},
        };
        if (config.payload) {
            const headers = headersToObject(defaultFetchOptions.headers);
            if (config.payloadType)
                headers['Content-Type'] = (_a = payloadMapping[config.payloadType]) !== null && _a !== void 0 ? _a : config.payloadType;
            defaultFetchOptions.body = config.payloadType === 'json' ? JSON.stringify(config.payload) : config.payload;
        }
        let isCanceled = false;
        const context = { url: unref(url), options: fetchOptions, cancel: () => { isCanceled = true; } };
        if (options.beforeFetch)
            Object.assign(context, await options.beforeFetch(context));
        if (isCanceled || !fetch) {
            loading(false);
            return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
            var _a;
            fetch(context.url, Object.assign(Object.assign(Object.assign({}, defaultFetchOptions), context.options), { headers: Object.assign(Object.assign({}, headersToObject(defaultFetchOptions.headers)), headersToObject((_a = context.options) === null || _a === void 0 ? void 0 : _a.headers)) }))
                .then(async (fetchResponse) => {
                response.value = fetchResponse;
                statusCode.value = fetchResponse.status;
                let responseData = await fetchResponse[config.type]();
                if (options.afterFetch)
                    ({ data: responseData } = await options.afterFetch({ data: responseData, response: fetchResponse }));
                data.value = responseData;
                // see: https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
                if (!fetchResponse.ok)
                    throw new Error(fetchResponse.statusText);
                responseEvent.trigger(fetchResponse);
                resolve(fetchResponse);
            })
                .catch((fetchError) => {
                error.value = fetchError.message || fetchError.name;
                errorEvent.trigger(fetchError);
                if (throwOnFailed)
                    reject(fetchError);
                else
                    resolve(undefined);
            })
                .finally(() => {
                loading(false);
                finallyEvent.trigger(null);
            });
        });
    };
    watch(() => [
        unref(url),
        unref(options.refetch),
    ], () => unref(options.refetch) && execute(), { deep: true });
    const shell = {
        isFinished,
        statusCode,
        response,
        error,
        data,
        isFetching,
        canAbort,
        aborted,
        abort,
        execute,
        onFetchResponse: responseEvent.on,
        onFetchError: errorEvent.on,
        onFetchFinally: finallyEvent.on,
        // method
        get: setMethod('get'),
        put: setMethod('put'),
        post: setMethod('post'),
        delete: setMethod('delete'),
        // type
        json: setType('json'),
        text: setType('text'),
        blob: setType('blob'),
        arrayBuffer: setType('arrayBuffer'),
        formData: setType('formData'),
    };
    function setMethod(method) {
        return (payload, payloadType) => {
            if (!isFetching.value) {
                config.method = method;
                config.payload = payload;
                config.payloadType = payloadType;
                // Set the payload to json type only if it's not provided and a literal object is provided
                // The only case we can deduce the content type and `fetch` can't
                if (!payloadType && payload && Object.getPrototypeOf(payload) === Object.prototype)
                    config.payloadType = 'json';
                return shell;
            }
            return undefined;
        };
    }
    function setType(type) {
        return () => {
            if (!isFetching.value) {
                config.type = type;
                return shell;
            }
            return undefined;
        };
    }
    if (options.immediate)
        setTimeout(execute, 0);
    return shell;
}
function joinPaths(start, end) {
    if (!start.endsWith('/') && !end.startsWith('/'))
        return `${start}/${end}`;
    return `${start}${end}`;
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
// from: https://github.com/sindresorhus/screenfull.js/blob/master/src/screenfull.js
const functionsMap = (/* unused pure expression or super */ null && ([
    [
        'requestFullscreen',
        'exitFullscreen',
        'fullscreenElement',
        'fullscreenEnabled',
        'fullscreenchange',
        'fullscreenerror',
    ],
    // New WebKit
    [
        'webkitRequestFullscreen',
        'webkitExitFullscreen',
        'webkitFullscreenElement',
        'webkitFullscreenEnabled',
        'webkitfullscreenchange',
        'webkitfullscreenerror',
    ],
    // Old WebKit
    [
        'webkitRequestFullScreen',
        'webkitCancelFullScreen',
        'webkitCurrentFullScreenElement',
        'webkitCancelFullScreen',
        'webkitfullscreenchange',
        'webkitfullscreenerror',
    ],
    [
        'mozRequestFullScreen',
        'mozCancelFullScreen',
        'mozFullScreenElement',
        'mozFullScreenEnabled',
        'mozfullscreenchange',
        'mozfullscreenerror',
    ],
    [
        'msRequestFullscreen',
        'msExitFullscreen',
        'msFullscreenElement',
        'msFullscreenEnabled',
        'MSFullscreenChange',
        'MSFullscreenError',
    ],
]));
/**
 * Reactive Fullscreen API.
 *
 * @see https://vueuse.org/useFullscreen
 * @param target
 * @param options
 */
function useFullscreen(target, options = {}) {
    const { document = defaultDocument } = options;
    const targetRef = ref(target || (document === null || document === void 0 ? void 0 : document.querySelector('html')));
    const isFullscreen = ref(false);
    let isSupported = false;
    let map = functionsMap[0];
    if (!document) {
        isSupported = false;
    }
    else {
        for (const m of functionsMap) {
            if (m[1] in document) {
                map = m;
                isSupported = true;
                break;
            }
        }
    }
    const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
    async function exit() {
        if (!isSupported)
            return;
        if (document === null || document === void 0 ? void 0 : document[ELEMENT])
            await document[EXIT]();
        isFullscreen.value = false;
    }
    async function enter() {
        if (!isSupported)
            return;
        await exit();
        if (targetRef.value) {
            await targetRef.value[REQUEST]();
            isFullscreen.value = true;
        }
    }
    async function toggle() {
        if (isFullscreen.value)
            await exit();
        else
            await enter();
    }
    if (document) {
        useEventListener(document, EVENT, () => {
            isFullscreen.value = !!(document === null || document === void 0 ? void 0 : document[ELEMENT]);
        }, false);
    }
    return {
        isSupported,
        isFullscreen,
        enter,
        exit,
        toggle,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive Geolocation API.
 *
 * @see https://vueuse.org/useGeolocation
 * @param options
 */
function useGeolocation(options = {}) {
    const { enableHighAccuracy = true, maximumAge = 30000, timeout = 27000, navigator = defaultNavigator, } = options;
    const isSupported = navigator && 'geolocation' in navigator;
    const locatedAt = ref(null);
    const error = ref(null);
    const coords = ref({
        accuracy: 0,
        latitude: 0,
        longitude: 0,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
    });
    function updatePosition(position) {
        locatedAt.value = position.timestamp;
        coords.value = position.coords;
        error.value = null;
    }
    let watcher;
    if (isSupported) {
        watcher = navigator.geolocation.watchPosition(updatePosition, err => error.value = err, {
            enableHighAccuracy,
            maximumAge,
            timeout,
        });
    }
    tryOnScopeDispose(() => {
        if (watcher && navigator)
            navigator.geolocation.clearWatch(watcher);
    });
    return {
        isSupported,
        coords,
        locatedAt,
        error,
    };
}

const defaultEvents = (/* unused pure expression or super */ null && (['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel']));
const oneMinute = 60000;
/**
 * Tracks whether the user is being inactive.
 *
 * @see https://vueuse.org/useIdle
 * @param timeout default to 1 minute
 * @param options IdleOptions
 */
function useIdle(timeout = oneMinute, options = {}) {
    const { initialState = false, listenForVisibilityChange = true, events = defaultEvents, window = defaultWindow, eventFilter = throttleFilter(50), } = options;
    const idle = ref(initialState);
    const lastActive = ref(timestamp());
    let timer;
    const onEvent = createFilterWrapper(eventFilter, () => {
        idle.value = false;
        lastActive.value = timestamp();
        clearTimeout(timer);
        timer = setTimeout(() => idle.value = true, timeout);
    });
    if (window) {
        const document = window.document;
        for (const event of events)
            useEventListener(window, event, onEvent, { passive: true });
        if (listenForVisibilityChange) {
            useEventListener(document, 'visibilitychange', () => {
                if (!document.hidden)
                    onEvent();
            });
        }
    }
    timer = setTimeout(() => idle.value = true, timeout);
    return { idle, lastActive };
}

/**
 * Detects that a target element's visibility.
 *
 * @see https://vueuse.org/useIntersectionObserver
 * @param target
 * @param callback
 * @param options
 */
function useIntersectionObserver(target, callback, options = {}) {
    const { root, rootMargin = '0px', threshold = 0.1, window = defaultWindow, } = options;
    const isSupported = window && 'IntersectionObserver' in window;
    let cleanup = noop;
    const stopWatch = isSupported
        ? watch(() => ({
            el: unrefElement(target),
            root: unrefElement(root),
        }), ({ el, root }) => {
            cleanup();
            if (!el)
                return;
            // @ts-expect-error missing type
            const observer = new window.IntersectionObserver(callback, {
                root,
                rootMargin,
                threshold,
            });
            observer.observe(el);
            cleanup = () => {
                observer.disconnect();
                cleanup = noop;
            };
        }, { immediate: true, flush: 'post' })
        : noop;
    const stop = () => {
        cleanup();
        stopWatch();
    };
    tryOnScopeDispose(stop);
    return {
        isSupported,
        stop,
    };
}

/**
 * Reactive LocalStorage.
 *
 * @see https://vueuse.org/useLocalStorage
 * @param key
 * @param defaultValue
 * @param options
 */
function useLocalStorage(key, defaultValue, options = {}) {
    const { window = defaultWindow } = options;
    return useStorage(key, defaultValue, window === null || window === void 0 ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
    ctrl: 'control',
    command: 'meta',
    cmd: 'meta',
    option: 'alt',
    up: 'arrowup',
    down: 'arrowdown',
    left: 'arrowleft',
    right: 'arrowright',
};

function useMagicKeys(options = {}) {
    const { reactive: useReactive = false, target = defaultWindow, aliasMap = DefaultMagicKeysAliasMap, passive = true, onEventFired = noop, } = options;
    const current = reactive(new Set());
    const obj = { toJSON() { return {}; }, current };
    const refs = useReactive ? reactive(obj) : obj;
    function updateRefs(e, value) {
        const key = e.key.toLowerCase();
        const code = e.code.toLowerCase();
        const values = [code, key];
        // current set
        if (value)
            current.add(e.code);
        else
            current.delete(e.code);
        for (const key of values) {
            if (key in refs) {
                if (useReactive)
                    refs[key] = value;
                else
                    refs[key].value = value;
            }
        }
    }
    if (target) {
        useEventListener(target, 'keydown', (e) => {
            updateRefs(e, true);
            return onEventFired(e);
        }, { passive });
        useEventListener(target, 'keyup', (e) => {
            updateRefs(e, false);
            return onEventFired(e);
        }, { passive });
    }
    const proxy = new Proxy(refs, {
        get(target, prop, rec) {
            if (typeof prop !== 'string')
                return Reflect.get(target, prop, rec);
            prop = prop.toLowerCase();
            // alias
            if (prop in aliasMap)
                prop = aliasMap[prop];
            // create new tracking
            if (!(prop in refs)) {
                if (/[+_-]/.test(prop)) {
                    const keys = prop.split(/[+_-]/g).map(i => i.trim());
                    refs[prop] = computed(() => keys.every(key => unref(proxy[key])));
                }
                else {
                    refs[prop] = ref(false);
                }
            }
            const r = Reflect.get(target, prop, rec);
            return useReactive ? unref(r) : r;
        },
    });
    return proxy;
}

const fnClone = (v) => JSON.parse(JSON.stringify(v));
const fnBypass = (v) => v;
const fnSetSource = (source, value) => source.value = value;
function defaultDump(clone) {
    return (clone ? isFunction(clone) ? clone : fnClone : fnBypass);
}
function defaultParse(clone) {
    return (clone ? isFunction(clone) ? clone : fnClone : fnBypass);
}
/**
 * Track the change history of a ref, also provides undo and redo functionality.
 *
 * @see https://vueuse.org/useManualRefHistory
 * @param source
 * @param options
 */
function useManualRefHistory(source, options = {}) {
    const { clone = false, dump = defaultDump(clone), parse = defaultParse(clone), setSource = fnSetSource, } = options;
    function _createHistoryRecord() {
        return markRaw({
            snapshot: dump(source.value),
            timestamp: timestamp(),
        });
    }
    const last = ref(_createHistoryRecord());
    const undoStack = ref([]);
    const redoStack = ref([]);
    const _setSource = (record) => {
        setSource(source, parse(record.snapshot));
        last.value = record;
    };
    const commit = () => {
        undoStack.value.unshift(last.value);
        last.value = _createHistoryRecord();
        if (options.capacity && undoStack.value.length > options.capacity)
            undoStack.value.splice(options.capacity, Infinity);
        if (redoStack.value.length)
            redoStack.value.splice(0, redoStack.value.length);
    };
    const clear = () => {
        undoStack.value.splice(0, undoStack.value.length);
        redoStack.value.splice(0, redoStack.value.length);
    };
    const undo = () => {
        const state = undoStack.value.shift();
        if (state) {
            redoStack.value.unshift(last.value);
            _setSource(state);
        }
    };
    const redo = () => {
        const state = redoStack.value.shift();
        if (state) {
            undoStack.value.unshift(last.value);
            _setSource(state);
        }
    };
    const reset = () => {
        _setSource(last.value);
    };
    const history = computed(() => [last.value, ...undoStack.value]);
    const canUndo = computed(() => undoStack.value.length > 0);
    const canRedo = computed(() => redoStack.value.length > 0);
    return {
        source,
        undoStack,
        redoStack,
        last,
        history,
        canUndo,
        canRedo,
        clear,
        commit,
        reset,
        undo,
        redo,
    };
}

/**
 * Automatically check if the ref exists and if it does run the cb fn
 */
function usingElRef(source, cb) {
    if (unref(source))
        cb(unref(source));
}
/**
 * Converts a TimeRange object to an array
 */
function timeRangeToArray(timeRanges) {
    let ranges = [];
    for (let i = 0; i < timeRanges.length; ++i)
        ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
    return ranges;
}
/**
 * Converts a TextTrackList object to an array of `UseMediaTextTrack`
 */
function tracksToArray(tracks) {
    return Array.from(tracks)
        .map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({ id, label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }));
}
const defaultOptions = {
    src: '',
    tracks: [],
};
function useMediaControls(target, options = {}) {
    options = Object.assign(Object.assign({}, defaultOptions), options);
    const { document = defaultDocument, } = options;
    const currentTime = ref(0);
    const duration = ref(0);
    const seeking = ref(false);
    const buffering = ref(false);
    const volume = ref(1);
    const waiting = ref(false);
    const ended = ref(false);
    const playing = ref(false);
    const rate = ref(1);
    const stalled = ref(false);
    const buffered = ref([]);
    const tracks = ref([]);
    const selectedTrack = ref(-1);
    const isPictureInPicture = ref(false);
    const muted = ref(false);
    const supportsPictureInPicture = document && 'pictureInPictureEnabled' in document;
    // Events
    const sourceErrorEvent = createEventHook();
    /**
     * Disables the specified track. If no track is specified then
     * all tracks will be disabled
     *
     * @param track The id of the track to disable
     */
    const disableTrack = (track) => {
        usingElRef(target, (el) => {
            if (track) {
                const id = isNumber(track) ? track : track.id;
                el.textTracks[id].mode = 'disabled';
            }
            else {
                for (let i = 0; i < el.textTracks.length; ++i)
                    el.textTracks[i].mode = 'disabled';
            }
            selectedTrack.value = -1;
        });
    };
    /**
     * Enables the specified track and disables the
     * other tracks unless otherwise specified
     *
     * @param track The track of the id of the track to enable
     * @param disableTracks Disable all other tracks
     */
    const enableTrack = (track, disableTracks = true) => {
        usingElRef(target, (el) => {
            const id = isNumber(track) ? track : track.id;
            if (disableTracks)
                disableTrack();
            el.textTracks[id].mode = 'showing';
            selectedTrack.value = id;
        });
    };
    /**
     * Toggle picture in picture mode for the player.
     */
    const togglePictureInPicture = () => {
        return new Promise((resolve, reject) => {
            usingElRef(target, async (el) => {
                if (supportsPictureInPicture) {
                    if (!isPictureInPicture.value) {
                        el.requestPictureInPicture()
                            .then(resolve)
                            .catch(reject);
                    }
                    else {
                        document.exitPictureInPicture()
                            .then(resolve)
                            .catch(reject);
                    }
                }
            });
        });
    };
    /**
     * This will automatically inject sources to the media element. The sources will be
     * appended as children to the media element as `<source>` elements.
     */
    watchEffect(() => {
        if (!document)
            return;
        const el = unref(target);
        if (!el)
            return;
        const src = unref(options.src);
        let sources = [];
        if (!src)
            return;
        // Merge sources into an array
        if (isString(src))
            sources = [{ src }];
        else if (Array.isArray(src))
            sources = src;
        else if (isObject(src))
            sources = [src];
        // Clear the sources
        el.querySelectorAll('source').forEach((e) => {
            e.removeEventListener('error', sourceErrorEvent.trigger);
            e.remove();
        });
        // Add new sources
        sources.forEach(({ src, type }) => {
            const source = document.createElement('source');
            source.setAttribute('src', src);
            source.setAttribute('type', type || '');
            source.addEventListener('error', sourceErrorEvent.trigger);
            el.appendChild(source);
        });
        // Finally, load the new sources.
        el.load();
    });
    // Remove source error listeners
    tryOnScopeDispose(() => {
        const el = unref(target);
        if (!el)
            return;
        el.querySelectorAll('source').forEach(e => e.removeEventListener('error', sourceErrorEvent.trigger));
    });
    /**
     * Watch volume and change player volume when volume prop changes
     */
    watch(volume, (vol) => {
        const el = unref(target);
        if (!el)
            return;
        el.volume = vol;
    });
    watch(muted, (mute) => {
        const el = unref(target);
        if (!el)
            return;
        el.muted = mute;
    });
    /**
     * Load Tracks
     */
    watchEffect(() => {
        if (!document)
            return;
        const textTracks = unref(options.tracks);
        const el = unref(target);
        if (!textTracks || !textTracks.length || !el)
            return;
        /**
         * The MediaAPI provides an API for adding text tracks, but they don't currently
         * have an API for removing text tracks, so instead we will just create and remove
         * the tracks manually using the HTML api.
         */
        el.querySelectorAll('track').forEach(e => e.remove());
        textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
            const track = document.createElement('track');
            track.default = isDefault || false;
            track.kind = kind;
            track.label = label;
            track.src = src;
            track.srclang = srcLang;
            if (track.default)
                selectedTrack.value = i;
            el.appendChild(track);
        });
    });
    /**
     * This will allow us to update the current time from the timeupdate event
     * without setting the medias current position, but if the user changes the
     * current time via the ref, then the media will seek.
     *
     * If we did not use an ignorable watch, then the current time update from
     * the timeupdate event would cause the media to stutter.
     */
    const { ignoreUpdates: ignoreCurrentTimeUpdates } = ignorableWatch(currentTime, (time) => {
        const el = unref(target);
        if (!el)
            return;
        el.currentTime = time;
    });
    /**
     * Using an ignorable watch so we can control the play state using a ref and not
     * a function
     */
    const { ignoreUpdates: ignorePlayingUpdates } = ignorableWatch(playing, (isPlaying) => {
        const el = unref(target);
        if (!el)
            return;
        isPlaying ? el.play() : el.pause();
    });
    useEventListener(target, 'timeupdate', () => ignoreCurrentTimeUpdates(() => currentTime.value = (unref(target)).currentTime));
    useEventListener(target, 'durationchange', () => duration.value = (unref(target)).duration);
    useEventListener(target, 'progress', () => buffered.value = timeRangeToArray((unref(target)).buffered));
    useEventListener(target, 'seeking', () => seeking.value = true);
    useEventListener(target, 'seeked', () => seeking.value = false);
    useEventListener(target, 'waiting', () => waiting.value = true);
    useEventListener(target, 'playing', () => waiting.value = false);
    useEventListener(target, 'ratechange', () => rate.value = (unref(target)).playbackRate);
    useEventListener(target, 'stalled', () => stalled.value = true);
    useEventListener(target, 'ended', () => ended.value = true);
    useEventListener(target, 'pause', () => ignorePlayingUpdates(() => playing.value = false));
    useEventListener(target, 'play', () => ignorePlayingUpdates(() => playing.value = true));
    useEventListener(target, 'enterpictureinpicture', () => isPictureInPicture.value = true);
    useEventListener(target, 'leavepictureinpicture', () => isPictureInPicture.value = false);
    useEventListener(target, 'volumechange', () => {
        const el = unref(target);
        if (!el)
            return;
        volume.value = el.volume;
        muted.value = el.muted;
    });
    /**
     * The following listeners need to listen to a nested
     * object on the target, so we will have to use a nested
     * watch and manually remove the listeners
     */
    const listeners = [];
    const stop = watch([target], () => {
        const el = unref(target);
        if (!el)
            return;
        stop();
        listeners[0] = useEventListener(el.textTracks, 'addtrack', () => tracks.value = tracksToArray(el.textTracks));
        listeners[1] = useEventListener(el.textTracks, 'removetrack', () => tracks.value = tracksToArray(el.textTracks));
        listeners[2] = useEventListener(el.textTracks, 'change', () => tracks.value = tracksToArray(el.textTracks));
    });
    // Remove text track listeners
    tryOnScopeDispose(() => listeners.forEach(listener => listener()));
    return {
        currentTime,
        duration,
        buffering,
        waiting,
        seeking,
        ended,
        stalled,
        buffered,
        playing,
        // Volume
        volume,
        muted,
        // Tracks
        tracks,
        selectedTrack,
        enableTrack,
        disableTrack,
        // Picture in Picture
        supportsPictureInPicture,
        togglePictureInPicture,
        isPictureInPicture,
        // Events
        onSourceError: sourceErrorEvent.on,
    };
}

/**
 * Reactive mouse position.
 *
 * @see https://vueuse.org/useMouse
 * @param options
 */
function useMouse(options = {}) {
    const { touch = true, resetOnTouchEnds = false, initialValue = { x: 0, y: 0 }, window = defaultWindow, } = options;
    const x = ref(initialValue.x);
    const y = ref(initialValue.y);
    const sourceType = ref(null);
    const mouseHandler = (event) => {
        x.value = event.pageX;
        y.value = event.pageY;
        sourceType.value = 'mouse';
    };
    const reset = () => {
        x.value = initialValue.x;
        y.value = initialValue.y;
    };
    const touchHandler = (event) => {
        if (event.touches.length > 0) {
            x.value = event.touches[0].clientX;
            y.value = event.touches[0].clientY;
            sourceType.value = 'touch';
        }
    };
    if (window) {
        useEventListener(window, 'mousemove', mouseHandler, { passive: true });
        useEventListener(window, 'dragover', mouseHandler, { passive: true });
        if (touch) {
            useEventListener(window, 'touchstart', touchHandler, { passive: true });
            useEventListener(window, 'touchmove', touchHandler, { passive: true });
            if (resetOnTouchEnds)
                useEventListener(window, 'touchend', reset, { passive: true });
        }
    }
    return {
        x,
        y,
        sourceType,
    };
}

/**
 * Reactive mouse position related to an element.
 *
 * @see https://vueuse.org/useMouseInElement
 * @param target
 * @param options
 */
function useMouseInElement(target, options = {}) {
    const { handleOutside = true, window = defaultWindow, } = options;
    const { x, y, sourceType } = useMouse(options);
    const targetRef = ref(target !== null && target !== void 0 ? target : window === null || window === void 0 ? void 0 : window.document.body);
    const elementX = ref(0);
    const elementY = ref(0);
    const elementPositionX = ref(0);
    const elementPositionY = ref(0);
    const elementHeight = ref(0);
    const elementWidth = ref(0);
    const isOutside = ref(false);
    let stop = () => { };
    if (window) {
        stop = watch([targetRef, x, y], () => {
            const el = unrefElement(targetRef);
            if (!el)
                return;
            const { left, top, width, height, } = el.getBoundingClientRect();
            elementPositionX.value = left + window.pageXOffset;
            elementPositionY.value = top + window.pageYOffset;
            elementHeight.value = height;
            elementWidth.value = width;
            const elX = x.value - elementPositionX.value;
            const elY = y.value - elementPositionY.value;
            isOutside.value = elX < 0 || elY < 0 || elX > elementWidth.value || elY > elementHeight.value;
            if (handleOutside || !isOutside.value) {
                elementX.value = elX;
                elementY.value = elY;
            }
        }, { immediate: true });
    }
    return {
        x,
        y,
        sourceType,
        elementX,
        elementY,
        elementPositionX,
        elementPositionY,
        elementHeight,
        elementWidth,
        isOutside,
        stop,
    };
}

/**
 * Reactive mouse position.
 *
 * @see https://vueuse.org/useMousePressed
 * @param options
 */
function useMousePressed(options = {}) {
    const { touch = true, drag = true, initialValue = false, window = defaultWindow, } = options;
    const pressed = ref(initialValue);
    const sourceType = ref(null);
    if (!window) {
        return {
            pressed,
            sourceType,
        };
    }
    const onPressed = (srcType) => () => {
        pressed.value = true;
        sourceType.value = srcType;
    };
    const onReleased = () => {
        pressed.value = false;
        sourceType.value = null;
    };
    const target = computed(() => unrefElement(options.target) || window);
    useEventListener(target, 'mousedown', onPressed('mouse'), { passive: true });
    useEventListener(window, 'mouseleave', onReleased, { passive: true });
    useEventListener(window, 'mouseup', onReleased, { passive: true });
    if (drag) {
        useEventListener(target, 'dragstart', onPressed('mouse'), { passive: true });
        useEventListener(window, 'drop', onReleased, { passive: true });
        useEventListener(window, 'dragend', onReleased, { passive: true });
    }
    if (touch) {
        useEventListener(target, 'touchstart', onPressed('touch'), { passive: true });
        useEventListener(window, 'touchend', onReleased, { passive: true });
        useEventListener(window, 'touchcancel', onReleased, { passive: true });
    }
    return {
        pressed,
        sourceType,
    };
}

/**
 * Watch for changes being made to the DOM tree.
 *
 * @see https://vueuse.org/useMutationObserver
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver MutationObserver MDN
 * @param target
 * @param callback
 * @param options
 */
function useMutationObserver(target, callback, options = {}) {
    const { window = defaultWindow } = options, mutationOptions = index_esm_rest(options, ["window"]);
    let observer;
    const isSupported = window && 'IntersectionObserver' in window;
    const cleanup = () => {
        if (observer) {
            observer.disconnect();
            observer = undefined;
        }
    };
    const stopWatch = watch(() => unrefElement(target), (el) => {
        cleanup();
        if (isSupported && window && el) {
            // @ts-expect-error missing type
            observer = new window.MutationObserver(callback);
            observer.observe(el, mutationOptions);
        }
    }, { immediate: true });
    const stop = () => {
        cleanup();
        stopWatch();
    };
    tryOnScopeDispose(stop);
    return {
        isSupported,
        stop,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive Network status.
 *
 * @see https://vueuse.org/useNetwork
 * @param options
 */
function useNetwork(options = {}) {
    const { window = defaultWindow } = options;
    const navigator = window === null || window === void 0 ? void 0 : window.navigator;
    const isSupported = Boolean(navigator && 'connection' in navigator);
    const isOnline = ref(true);
    const saveData = ref(false);
    const offlineAt = ref(undefined);
    const downlink = ref(undefined);
    const downlinkMax = ref(undefined);
    const rtt = ref(undefined);
    const effectiveType = ref(undefined);
    const type = ref('unknown');
    const connection = isSupported && navigator.connection;
    function updateNetworkInformation() {
        if (!navigator)
            return;
        isOnline.value = navigator.onLine;
        offlineAt.value = isOnline.value ? undefined : Date.now();
        if (connection) {
            downlink.value = connection.downlink;
            downlinkMax.value = connection.downlinkMax;
            effectiveType.value = connection.effectiveType;
            rtt.value = connection.rtt;
            saveData.value = connection.saveData;
            type.value = connection.type;
        }
    }
    if (window) {
        useEventListener(window, 'offline', () => {
            isOnline.value = false;
            offlineAt.value = Date.now();
        });
        useEventListener(window, 'online', () => {
            isOnline.value = true;
        });
    }
    if (connection)
        useEventListener(connection, 'change', updateNetworkInformation, false);
    updateNetworkInformation();
    return {
        isSupported,
        isOnline,
        saveData,
        offlineAt,
        downlink,
        downlinkMax,
        effectiveType,
        rtt,
        type,
    };
}

/**
 * Call function on every `requestAnimationFrame`. With controls of pausing and resuming.
 *
 * @see https://vueuse.org/useRafFn
 * @param fn
 * @param options
 */
function useRafFn(fn, options = {}) {
    const { immediate = true, window = defaultWindow, } = options;
    const isActive = ref(false);
    function loop() {
        if (!isActive.value)
            return;
        fn();
        if (window)
            window.requestAnimationFrame(loop);
    }
    function resume() {
        if (!isActive.value) {
            isActive.value = true;
            loop();
        }
    }
    function pause() {
        isActive.value = false;
    }
    if (immediate)
        resume();
    tryOnScopeDispose(pause);
    return {
        isActive,
        pause,
        resume,
    };
}

function useNow(options = {}) {
    const { controls: exposeControls = false, interval = 'requestAnimationFrame', } = options;
    const now = ref(new Date());
    const update = () => now.value = new Date();
    const controls = interval === 'requestAnimationFrame'
        ? useRafFn(update, { immediate: true })
        : useIntervalFn(update, interval, { immediate: true });
    if (exposeControls) {
        return Object.assign({ now }, controls);
    }
    else {
        return now;
    }
}

/**
 * Reactive online state.
 *
 * @see https://vueuse.org/useOnline
 * @param options
 */
function useOnline(options = {}) {
    const { isOnline } = useNetwork(options);
    return isOnline;
}

/**
 * Reactive state to show whether mouse leaves the page.
 *
 * @see https://vueuse.org/usePageLeave
 * @param options
 */
function usePageLeave(options = {}) {
    const { window = defaultWindow } = options;
    const isLeft = ref(false);
    const handler = (event) => {
        if (!window)
            return;
        event = event || window.event;
        // @ts-ignore
        const from = event.relatedTarget || event.toElement;
        isLeft.value = !from;
    };
    if (window) {
        useEventListener(window, 'mouseout', handler, { passive: true });
        useEventListener(window.document, 'mouseleave', handler, { passive: true });
        useEventListener(window.document, 'mouseenter', handler, { passive: true });
    }
    return isLeft;
}

/**
 * Create parallax effect easily. It uses `useDeviceOrientation` and fallback to `useMouse`
 * if orientation is not supported.
 *
 * @param target
 * @param options
 */
function useParallax(target, options = {}) {
    const { deviceOrientationTiltAdjust = i => i, deviceOrientationRollAdjust = i => i, mouseTiltAdjust = i => i, mouseRollAdjust = i => i, window = defaultWindow, } = options;
    const orientation = reactive(useDeviceOrientation({ window }));
    const { elementX: x, elementY: y, elementWidth: width, elementHeight: height, } = useMouseInElement(target, { handleOutside: false, window });
    const source = computed(() => {
        if (orientation.isSupported
            && ((orientation.alpha != null && orientation.alpha !== 0) || (orientation.gamma != null && orientation.gamma !== 0)))
            return 'deviceOrientation';
        return 'mouse';
    });
    const roll = computed(() => {
        if (source.value === 'deviceOrientation') {
            const value = -orientation.beta / 90;
            return deviceOrientationRollAdjust(value);
        }
        else {
            const value = -(y.value - height.value / 2) / height.value;
            return mouseRollAdjust(value);
        }
    });
    const tilt = computed(() => {
        if (source.value === 'deviceOrientation') {
            const value = orientation.gamma / 90;
            return deviceOrientationTiltAdjust(value);
        }
        else {
            const value = (x.value - width.value / 2) / width.value;
            return mouseTiltAdjust(value);
        }
    });
    return { roll, tilt, source };
}

var SwipeDirection;
(function (SwipeDirection) {
    SwipeDirection["UP"] = "UP";
    SwipeDirection["RIGHT"] = "RIGHT";
    SwipeDirection["DOWN"] = "DOWN";
    SwipeDirection["LEFT"] = "LEFT";
    SwipeDirection["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
/**
 * Reactive swipe detection.
 *
 * @see https://vueuse.org/useSwipe
 * @param target
 * @param options
 */
function useSwipe(target, options = {}) {
    const { threshold = 50, onSwipe, onSwipeEnd, onSwipeStart, passive = true, window = defaultWindow, } = options;
    const coordsStart = reactive({ x: 0, y: 0 });
    const coordsEnd = reactive({ x: 0, y: 0 });
    const diffX = computed(() => coordsStart.x - coordsEnd.x);
    const diffY = computed(() => coordsStart.y - coordsEnd.y);
    const { max, abs } = Math;
    const isThresholdExceeded = computed(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
    const isSwiping = ref(false);
    const direction = computed(() => {
        if (!isThresholdExceeded.value)
            return SwipeDirection.NONE;
        if (abs(diffX.value) > abs(diffY.value)) {
            return diffX.value > 0
                ? SwipeDirection.LEFT
                : SwipeDirection.RIGHT;
        }
        else {
            return diffY.value > 0
                ? SwipeDirection.UP
                : SwipeDirection.DOWN;
        }
    });
    const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
    const updateCoordsStart = (x, y) => {
        coordsStart.x = x;
        coordsStart.y = y;
    };
    const updateCoordsEnd = (x, y) => {
        coordsEnd.x = x;
        coordsEnd.y = y;
    };
    let listenerOptions;
    const isPassiveEventSupported = checkPassiveEventSupport(window === null || window === void 0 ? void 0 : window.document);
    if (!passive)
        listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
    else
        listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
    const onTouchEnd = (e) => {
        if (isSwiping.value)
            onSwipeEnd === null || onSwipeEnd === void 0 ? void 0 : onSwipeEnd(e, direction.value);
        isSwiping.value = false;
    };
    const stops = [
        useEventListener(target, 'touchstart', (e) => {
            if (listenerOptions.capture && !listenerOptions.passive)
                e.preventDefault();
            const [x, y] = getTouchEventCoords(e);
            updateCoordsStart(x, y);
            updateCoordsEnd(x, y);
            onSwipeStart === null || onSwipeStart === void 0 ? void 0 : onSwipeStart(e);
        }, listenerOptions),
        useEventListener(target, 'touchmove', (e) => {
            const [x, y] = getTouchEventCoords(e);
            updateCoordsEnd(x, y);
            if (!isSwiping.value && isThresholdExceeded.value)
                isSwiping.value = true;
            if (isSwiping.value)
                onSwipe === null || onSwipe === void 0 ? void 0 : onSwipe(e);
        }, listenerOptions),
        useEventListener(target, 'touchend', onTouchEnd, listenerOptions),
        useEventListener(target, 'touchcancel', onTouchEnd, listenerOptions),
    ];
    const stop = () => stops.forEach(s => s());
    return {
        isPassiveEventSupported,
        isSwiping,
        direction,
        coordsStart,
        coordsEnd,
        lengthX: diffX,
        lengthY: diffY,
        stop,
    };
}
/**
 * This is a polyfill for passive event support detection
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
function checkPassiveEventSupport(document) {
    if (!document)
        return false;
    let supportsPassive = false;
    const optionsBlock = {
        get passive() {
            supportsPassive = true;
            return false;
        },
    };
    document.addEventListener('x', noop, optionsBlock);
    document.removeEventListener('x', noop);
    return supportsPassive;
}

/**
 * Reactive swipe detection based on PointerEvents.
 *
 * @see https://vueuse.org/usePointerSwipe
 * @param target
 * @param options
 */
function usePointerSwipe(target, options = {}) {
    const targetRef = ref(target);
    const { threshold = 50, onSwipe, onSwipeEnd, onSwipeStart, } = options;
    const posStart = reactive({ x: 0, y: 0 });
    const updatePosStart = (x, y) => {
        posStart.x = x;
        posStart.y = y;
    };
    const posEnd = reactive({ x: 0, y: 0 });
    const updatePosEnd = (x, y) => {
        posEnd.x = x;
        posEnd.y = y;
    };
    const distanceX = computed(() => posStart.x - posEnd.x);
    const distanceY = computed(() => posStart.y - posEnd.y);
    const { max, abs } = Math;
    const isThresholdExceeded = computed(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
    const isSwiping = ref(false);
    const isPointerDown = ref(false);
    const direction = computed(() => {
        if (!isThresholdExceeded.value)
            return SwipeDirection.NONE;
        if (abs(distanceX.value) > abs(distanceY.value)) {
            return distanceX.value > 0
                ? SwipeDirection.LEFT
                : SwipeDirection.RIGHT;
        }
        else {
            return distanceY.value > 0
                ? SwipeDirection.UP
                : SwipeDirection.DOWN;
        }
    });
    const stops = [
        useEventListener(target, 'pointerdown', (e) => {
            var _a, _b;
            isPointerDown.value = true;
            // Disable scroll on for TouchEvents
            (_b = (_a = targetRef.value) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.setProperty('touch-action', 'none');
            // Future pointer events will be retargeted to target until pointerup/cancel
            const eventTarget = e.target;
            eventTarget === null || eventTarget === void 0 ? void 0 : eventTarget.setPointerCapture(e.pointerId);
            const { clientX: x, clientY: y } = e;
            updatePosStart(x, y);
            updatePosEnd(x, y);
            onSwipeStart === null || onSwipeStart === void 0 ? void 0 : onSwipeStart(e);
        }),
        useEventListener(target, 'pointermove', (e) => {
            if (!isPointerDown.value)
                return;
            const { clientX: x, clientY: y } = e;
            updatePosEnd(x, y);
            if (!isSwiping.value && isThresholdExceeded.value)
                isSwiping.value = true;
            if (isSwiping.value)
                onSwipe === null || onSwipe === void 0 ? void 0 : onSwipe(e);
        }),
        useEventListener(target, 'pointerup', (e) => {
            var _a, _b;
            if (isSwiping.value)
                onSwipeEnd === null || onSwipeEnd === void 0 ? void 0 : onSwipeEnd(e, direction.value);
            isPointerDown.value = false;
            isSwiping.value = false;
            (_b = (_a = targetRef.value) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.setProperty('touch-action', 'initial');
        }),
    ];
    const stop = () => stops.forEach(s => s());
    return {
        isSwiping: readonly(isSwiping),
        direction: readonly(direction),
        posStart: readonly(posStart),
        posEnd: readonly(posEnd),
        distanceX,
        distanceY,
        stop,
    };
}

/**
 * Reactive prefers-color-scheme media query.
 *
 * @see https://vueuse.org/usePreferredColorScheme
 * @param [options]
 */
function usePreferredColorScheme(options) {
    const isLight = useMediaQuery('(prefers-color-scheme: light)', options);
    const isDark = useMediaQuery('(prefers-color-scheme: dark)', options);
    return computed(() => {
        if (isDark.value)
            return 'dark';
        if (isLight.value)
            return 'light';
        return 'no-preference';
    });
}

/**
 * Reactive Navigator Languages.
 *
 * @see https://vueuse.org/usePreferredLanguages
 * @param options
 */
function usePreferredLanguages(options = {}) {
    const { window = defaultWindow } = options;
    if (!window)
        return ref(['en']);
    const navigator = window.navigator;
    const value = ref(navigator.languages);
    useEventListener(window, 'languagechange', () => {
        value.value = navigator.languages;
    });
    return value;
}

/**
 * Track the change history of a ref, also provides undo and redo functionality.
 *
 * @see https://vueuse.org/useRefHistory
 * @param source
 * @param options
 */
function useRefHistory(source, options = {}) {
    const { deep = false, flush = 'pre', } = options;
    const { eventFilter, pause, resume: resumeTracking, isActive: isTracking } = pausableFilter();
    const { ignoreUpdates, ignorePrevAsyncUpdates, stop } = ignorableWatch(source, commit, { deep, flush, eventFilter });
    function setSource(source, value) {
        // Support changes that are done after the last history operation
        // examples:
        //   undo, modify
        //   undo, undo, modify
        // If there were already changes in the state, they will be ignored
        // examples:
        //   modify, undo
        //   undo, modify, undo
        ignorePrevAsyncUpdates();
        ignoreUpdates(() => {
            source.value = value;
        });
    }
    const manualHistory = useManualRefHistory(source, Object.assign(Object.assign({}, options), { clone: options.clone || deep, setSource }));
    const { clear, commit: manualCommit } = manualHistory;
    function commit() {
        // This guard only applies for flush 'pre' and 'post'
        // If the user triggers a commit manually, then reset the watcher
        // so we do not trigger an extra commit in the async watcher
        ignorePrevAsyncUpdates();
        manualCommit();
    }
    function resume(commitNow) {
        resumeTracking();
        if (commitNow)
            commit();
    }
    function batch(fn) {
        let canceled = false;
        const cancel = () => canceled = true;
        ignoreUpdates(() => {
            fn(cancel);
        });
        if (!canceled)
            commit();
    }
    function dispose() {
        stop();
        clear();
    }
    return Object.assign(Object.assign({}, manualHistory), { isTracking,
        pause,
        resume,
        commit,
        batch,
        dispose });
}

/**
 * Async script tag loading.
 *
 * @see https://vueuse.org/useScriptTag
 * @param src
 */
function useScriptTag(src, onLoaded = noop, options = {}) {
    const { immediate = true, manual = false, type = 'text/javascript', async = true, crossOrigin, referrerPolicy, noModule, defer, document = defaultDocument, } = options;
    const scriptTag = ref(null);
    let _promise = null;
    /**
     * Load the script specified via `src`.
     *
     * @param waitForScriptLoad Whether if the Promise should resolve once the "load" event is emitted by the <script> attribute, or right after appending it to the DOM.
     * @returns Promise<HTMLScriptElement>
     */
    const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
        // Some little closure for resolving the Promise.
        const resolveWithElement = (el) => {
            scriptTag.value = el;
            resolve(el);
            return el;
        };
        // Check if document actually exists, otherwise resolve the Promise (SSR Support).
        if (!document) {
            resolve(false);
            return;
        }
        // Local variable defining if the <script> tag should be appended or not.
        let shouldAppend = false;
        let el = document.querySelector(`script[src="${src}"]`);
        // Script tag not found, preparing the element for appending
        if (!el) {
            el = document.createElement('script');
            el.type = type;
            el.async = async;
            el.src = unref(src);
            // Optional attributes
            if (defer)
                el.defer = defer;
            if (crossOrigin)
                el.crossOrigin = crossOrigin;
            if (noModule)
                el.noModule = noModule;
            if (referrerPolicy)
                el.referrerPolicy = referrerPolicy;
            // Enables shouldAppend
            shouldAppend = true;
        }
        // Script tag already exists, resolve the loading Promise with it.
        else if (el.hasAttribute('data-loaded')) {
            resolveWithElement(el);
        }
        // Event listeners
        el.addEventListener('error', event => reject(event));
        el.addEventListener('abort', event => reject(event));
        el.addEventListener('load', () => {
            el.setAttribute('data-loaded', 'true');
            onLoaded(el);
            resolveWithElement(el);
        });
        // Append the <script> tag to head.
        if (shouldAppend)
            el = document.head.appendChild(el);
        // If script load awaiting isn't needed, we can resolve the Promise.
        if (!waitForScriptLoad)
            resolveWithElement(el);
    });
    /**
     * Exposed singleton wrapper for `loadScript`, avoiding calling it twice.
     *
     * @param waitForScriptLoad Whether if the Promise should resolve once the "load" event is emitted by the <script> attribute, or right after appending it to the DOM.
     * @returns Promise<HTMLScriptElement>
     */
    const load = (waitForScriptLoad = true) => {
        if (!_promise)
            _promise = loadScript(waitForScriptLoad);
        return _promise;
    };
    /**
     * Unload the script specified by `src`.
     */
    const unload = () => {
        if (!document)
            return;
        _promise = null;
        if (scriptTag.value) {
            document.head.removeChild(scriptTag.value);
            scriptTag.value = null;
        }
    };
    if (immediate && !manual)
        tryOnMounted(load);
    if (!manual)
        tryOnUnmounted(unload);
    return { scriptTag, load, unload };
}

/**
 * Reactive SessionStorage.
 *
 * @see https://vueuse.org/useSessionStorage
 * @param key
 * @param defaultValue
 * @param options
 */
function useSessionStorage(key, defaultValue, options = {}) {
    const { window = defaultWindow } = options;
    return useStorage(key, defaultValue, window === null || window === void 0 ? void 0 : window.sessionStorage, options);
}

/**
 * Reactive Web Share API.
 *
 * @see https://vueuse.org/useShare
 * @param shareOptions
 * @param options
 */
function useShare(shareOptions = {}, options = {}) {
    const { navigator = defaultNavigator } = options;
    const _navigator = navigator;
    const isSupported = _navigator && 'canShare' in _navigator;
    const share = async (overrideOptions = {}) => {
        if (isSupported) {
            const data = Object.assign(Object.assign({}, unref(shareOptions)), unref(overrideOptions));
            let granted = true;
            if (data.files && _navigator.canShare)
                granted = _navigator.canShare({ files: data.files });
            if (granted)
                return _navigator.share(data);
        }
    };
    return {
        isSupported,
        share,
    };
}

// ported from https://www.reddit.com/r/vuejs/comments/jksizl/speech_recognition_as_a_vue_3_hook
/**
 * Reactive SpeechRecognition.
 *
 * @see https://vueuse.org/useSpeechRecognition
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition SpeechRecognition
 * @param options
 */
function useSpeechRecognition(options = {}) {
    const { lang = 'en-US', interimResults = true, continuous = true, window = defaultWindow, } = options;
    const isListening = ref(false);
    const isFinal = ref(false);
    const result = ref('');
    const error = shallowRef(undefined);
    const toggle = (value = !isListening.value) => {
        isListening.value = value;
    };
    const start = () => {
        isListening.value = true;
    };
    const stop = () => {
        isListening.value = false;
    };
    const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
    const isSupported = Boolean(SpeechRecognition);
    let recognition;
    if (isSupported) {
        recognition = new SpeechRecognition();
        recognition.continuous = continuous;
        recognition.interimResults = interimResults;
        recognition.lang = lang;
        recognition.onstart = () => {
            isFinal.value = false;
        };
        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map((result) => {
                isFinal.value = result.isFinal;
                return result[0];
            })
                .map(result => result.transcript)
                .join('');
            result.value = transcript;
            error.value = undefined;
        };
        recognition.onerror = (event) => {
            error.value = event;
        };
        recognition.onend = () => {
            isListening.value = false;
        };
        watch(isListening, () => {
            if (isListening.value)
                recognition.start();
            else
                recognition.stop();
        });
    }
    tryOnScopeDispose(() => {
        isListening.value = false;
    });
    return {
        isSupported,
        isListening,
        isFinal,
        recognition,
        result,
        error,
        toggle,
        start,
        stop,
    };
}

function useTemplateRefsList() {
    const refs = ref([]);
    refs.value.set = (el) => {
        if (el)
            refs.value.push(el);
    };
    onBeforeUpdate(() => {
        refs.value.length = 0;
    });
    return refs;
}

const UNITS = [
    { max: 60000, value: 1000, name: 'second' },
    { max: 2760000, value: 60000, name: 'minute' },
    { max: 72000000, value: 3600000, name: 'hour' },
    { max: 518400000, value: 86400000, name: 'day' },
    { max: 2419200000, value: 604800000, name: 'week' },
    { max: 28512000000, value: 2592000000, name: 'month' },
    { max: Infinity, value: 31536000000, name: 'year' },
];
const DEFAULT_MESSAGES = {
    justNow: 'just now',
    past: n => n.match(/\d/) ? `${n} ago` : n,
    future: n => n.match(/\d/) ? `in ${n}` : n,
    month: (n, past) => n === 1
        ? past
            ? 'last month'
            : 'next month'
        : `${n} month${n > 1 ? 's' : ''}`,
    year: (n, past) => n === 1
        ? past
            ? 'last year'
            : 'next year'
        : `${n} year${n > 1 ? 's' : ''}`,
    day: (n, past) => n === 1
        ? past
            ? 'yesterday'
            : 'tomorrow'
        : `${n} day${n > 1 ? 's' : ''}`,
    week: (n, past) => n === 1
        ? past
            ? 'last week'
            : 'next week'
        : `${n} week${n > 1 ? 's' : ''}`,
    hour: n => `${n} hour${n > 1 ? 's' : ''}`,
    minute: n => `${n} minute${n > 1 ? 's' : ''}`,
    second: n => `${n} second${n > 1 ? 's' : ''}`,
};
const DEFAULT_FORMATTER = (date) => date.toISOString().slice(0, 10);
function useTimeAgo(time, options = {}) {
    const { controls: exposeControls = false, max, updateInterval = 30000, messages = DEFAULT_MESSAGES, fullDateFormatter = DEFAULT_FORMATTER, } = options;
    const { abs, round } = Math;
    const _a = useNow({ interval: updateInterval, controls: true }), { now } = _a, controls = index_esm_rest(_a, ["now"]);
    function getTimeago(from, now) {
        var _a;
        const diff = +now - +from;
        const absDiff = abs(diff);
        // less than a minute
        if (absDiff < 60000)
            return messages.justNow;
        if (typeof max === 'number' && absDiff > max)
            return fullDateFormatter(new Date(from));
        if (typeof max === 'string') {
            const unitMax = (_a = UNITS.find(i => i.name === max)) === null || _a === void 0 ? void 0 : _a.max;
            if (unitMax && absDiff > unitMax)
                return fullDateFormatter(new Date(from));
        }
        for (const unit of UNITS) {
            if (absDiff < unit.max)
                return format(diff, unit);
        }
    }
    function applyFormat(name, val, isPast) {
        const formatter = messages[name];
        if (typeof formatter === 'function')
            return formatter(val, isPast);
        return formatter.replace('{0}', val.toString());
    }
    function format(diff, unit) {
        const val = round(abs(diff) / unit.value);
        const past = diff > 0;
        const str = applyFormat(unit.name, val, past);
        return applyFormat(past ? 'past' : 'future', str, past);
    }
    const timeAgo = computed(() => getTimeago(new Date(unref(time)), unref(now.value)));
    if (exposeControls) {
        return Object.assign({ timeAgo }, controls);
    }
    else {
        return timeAgo;
    }
}

function useTimestamp(options = {}) {
    const { controls: exposeControls = false, offset = 0, interval = 'requestAnimationFrame', } = options;
    const ts = ref(timestamp() + offset);
    const update = () => ts.value = timestamp() + offset;
    const controls = interval === 'requestAnimationFrame'
        ? useRafFn(update, { immediate: true })
        : useIntervalFn(update, interval, { immediate: true });
    if (exposeControls) {
        return Object.assign({ timestamp: ts }, controls);
    }
    else {
        return ts;
    }
}

/**
 * Reactive document title.
 *
 * @see https://vueuse.org/useTitle
 * @param newTitle
 * @param options
 */
function useTitle(newTitle = null, options = {}) {
    var _a, _b;
    const { document = defaultDocument, observe = false, } = options;
    const title = ref((_a = newTitle !== null && newTitle !== void 0 ? newTitle : document === null || document === void 0 ? void 0 : document.title) !== null && _a !== void 0 ? _a : null);
    watch(title, (t, o) => {
        if (isString(t) && t !== o && document)
            document.title = t;
    }, { immediate: true });
    if (observe && document) {
        useMutationObserver((_b = document.head) === null || _b === void 0 ? void 0 : _b.querySelector('title'), () => {
            if (document && document.title !== title.value)
                title.value = document.title;
        }, { childList: true });
    }
    return title;
}

/**
 * Common transitions
 *
 * @see https://easings.net
 */
const TransitionPresets = {
    linear: index_esm_identity,
    easeInSine: [0.12, 0, 0.39, 0],
    easeOutSine: [0.61, 1, 0.88, 1],
    easeInOutSine: [0.37, 0, 0.63, 1],
    easeInQuad: [0.11, 0, 0.5, 0],
    easeOutQuad: [0.5, 1, 0.89, 1],
    easeInOutQuad: [0.45, 0, 0.55, 1],
    easeInCubic: [0.32, 0, 0.67, 0],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeInQuart: [0.5, 0, 0.75, 0],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInQuint: [0.64, 0, 0.78, 0],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
    easeInExpo: [0.7, 0, 0.84, 0],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeInCirc: [0.55, 0, 1, 0.45],
    easeOutCirc: [0, 0.55, 0.45, 1],
    easeInOutCirc: [0.85, 0, 0.15, 1],
    easeInBack: [0.36, 0, 0.66, -0.56],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
/**
 * Create an easing function from cubic bezier points.
 */
function createEasingFunction([p0, p1, p2, p3]) {
    const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
    const b = (a1, a2) => 3 * a2 - 6 * a1;
    const c = (a1) => 3 * a1;
    const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
    const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
    const getTforX = (x) => {
        let aGuessT = x;
        for (let i = 0; i < 4; ++i) {
            const currentSlope = getSlope(aGuessT, p0, p2);
            if (currentSlope === 0)
                return aGuessT;
            const currentX = calcBezier(aGuessT, p0, p2) - x;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
/**
 * Transition between values.
 *
 * @see https://vueuse.org/useTransition
 * @param source
 * @param options
 */
function useTransition(source, options = {}) {
    const { delay = 0, disabled = false, duration = 1000, onFinished = noop, onStarted = noop, transition = identity, } = options;
    // current easing function
    const currentTransition = computed(() => {
        const t = unref(transition);
        return isFunction(t) ? t : createEasingFunction(t);
    });
    // raw source value
    const sourceValue = computed(() => {
        const s = unref(source);
        return isNumber(s) ? s : s.map(unref);
    });
    // normalized source vector
    const sourceVector = computed(() => isNumber(sourceValue.value) ? [sourceValue.value] : sourceValue.value);
    // transitioned output vector
    const outputVector = ref(sourceVector.value.slice(0));
    // current transition values
    let currentDuration;
    let diffVector;
    let endAt;
    let startAt;
    let startVector;
    // transition loop
    const { resume, pause } = useRafFn(() => {
        const now = Date.now();
        const progress = clamp(1 - ((endAt - now) / currentDuration), 0, 1);
        outputVector.value = startVector.map((val, i) => { var _a; return val + (((_a = diffVector[i]) !== null && _a !== void 0 ? _a : 0) * currentTransition.value(progress)); });
        if (progress >= 1) {
            pause();
            onFinished();
        }
    }, { immediate: false });
    // start the animation loop when source vector changes
    const start = () => {
        pause();
        currentDuration = unref(duration);
        diffVector = outputVector.value.map((n, i) => { var _a, _b; return ((_a = sourceVector.value[i]) !== null && _a !== void 0 ? _a : 0) - ((_b = outputVector.value[i]) !== null && _b !== void 0 ? _b : 0); });
        startVector = outputVector.value.slice(0);
        startAt = Date.now();
        endAt = startAt + currentDuration;
        resume();
        onStarted();
    };
    const timeout = useTimeoutFn(start, delay, { immediate: false });
    watch(sourceVector, () => {
        if (unref(disabled)) {
            outputVector.value = sourceVector.value.slice(0);
        }
        else {
            if (unref(delay) <= 0)
                start();
            else
                timeout.start();
        }
    }, { deep: true });
    return computed(() => {
        const targetVector = unref(disabled) ? sourceVector : outputVector;
        return isNumber(sourceValue.value) ? targetVector.value[0] : targetVector.value;
    });
}

/**
 * Reactive URLSearchParams
 *
 * @see https://vueuse.org/useUrlSearchParams
 * @param mode
 * @param options
 */
function useUrlSearchParams(mode = 'history', options = {}) {
    const { window = defaultWindow } = options;
    if (!window)
        return reactive(Object.assign({}));
    const hashWithoutParams = computed(() => {
        const hash = window.location.hash || '';
        const index = hash.indexOf('?');
        return index > 0 ? hash.substring(0, index) : hash;
    });
    const read = () => {
        if (mode === 'hash') {
            const hash = window.location.hash || '';
            const index = hash.indexOf('?');
            return new URLSearchParams(index >= 0 ? hash.substring(index + 1) : '');
        }
        else {
            return new URLSearchParams(window.location.search || '');
        }
    };
    let params = read();
    const paramsMap = reactive(Object.assign({}));
    function writeToParamsMap(key, value) {
        return paramsMap[key] = value;
    }
    function updateParamsMap() {
        Object.keys(paramsMap).forEach(key => delete paramsMap[key]);
        for (const key of params.keys()) {
            const paramsForKey = params.getAll(key);
            writeToParamsMap(key, paramsForKey.length > 1 ? paramsForKey : (params.get(key) || ''));
        }
    }
    // Update the paramsMap with initial values
    updateParamsMap();
    const { pause, resume } = pausableWatch(paramsMap, () => {
        params = new URLSearchParams('');
        Object.keys(paramsMap).forEach((key) => {
            const mapEntry = paramsMap[key];
            if (Array.isArray(mapEntry))
                mapEntry.forEach(value => params.append(key, value));
            else
                params.set(key, mapEntry);
        });
        write(params);
    }, { deep: true });
    function write(params, shouldUpdateParamsMap) {
        pause();
        if (shouldUpdateParamsMap)
            updateParamsMap();
        const empty = !params.keys().next();
        const query = empty
            ? hashWithoutParams.value
            : (mode === 'hash')
                ? `${hashWithoutParams.value}?${params}`
                : `?${params}${hashWithoutParams.value}`;
        if (window)
            window.history.replaceState({}, '', window.location.pathname + query);
        resume();
    }
    useEventListener(window, 'popstate', () => {
        params = read();
        write(params, true);
    });
    return paramsMap;
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Reactive `mediaDevices.getUserMedia` streaming
 *
 * @see https://vueuse.org/useUserMedia
 * @param options
 */
function useUserMedia(options = {}) {
    var _a, _b, _c;
    const enabled = ref((_a = options.enabled) !== null && _a !== void 0 ? _a : false);
    const autoSwitch = ref((_b = options.autoSwitch) !== null && _b !== void 0 ? _b : true);
    const videoDeviceId = ref(options.videoDeviceId);
    const audioDeviceId = ref(options.audioDeviceId);
    const { navigator = defaultNavigator } = options;
    const isSupported = Boolean((_c = navigator === null || navigator === void 0 ? void 0 : navigator.mediaDevices) === null || _c === void 0 ? void 0 : _c.getUserMedia);
    const stream = shallowRef();
    function getDeviceOptions(device) {
        if (device.value === 'none' || device.value === false)
            return false;
        if (device.value == null)
            return true;
        return {
            deviceId: device.value,
        };
    }
    async function _start() {
        if (!isSupported || stream.value)
            return;
        stream.value = await navigator.mediaDevices.getUserMedia({
            video: getDeviceOptions(videoDeviceId),
            audio: getDeviceOptions(audioDeviceId),
        });
        return stream.value;
    }
    async function _stop() {
        var _a;
        (_a = stream.value) === null || _a === void 0 ? void 0 : _a.getTracks().forEach(t => t.stop());
        stream.value = undefined;
    }
    function stop() {
        _stop();
        enabled.value = false;
    }
    async function start() {
        await _start();
        if (stream.value)
            enabled.value = true;
        return stream.value;
    }
    async function restart() {
        _stop();
        return await start();
    }
    watch(enabled, (v) => {
        if (v)
            _start();
        else
            _stop();
    }, { immediate: true });
    watch([videoDeviceId, audioDeviceId], () => {
        if (autoSwitch.value && stream.value)
            restart();
    }, { immediate: true });
    return {
        isSupported,
        stream,
        start,
        stop,
        restart,
        videoDeviceId,
        audioDeviceId,
        enabled,
        autoSwitch,
    };
}

/**
 * Shorthand for v-model binding, props + emit -> ref
 *
 * @see https://vueuse.org/useVModel
 * @param props
 * @param key (default 'value' in Vue 2 and 'modelValue' in Vue 3)
 * @param emit
 */
function useVModel(props, key, emit, options = {}) {
    var _a, _b, _c;
    const { passive = false, eventName, } = options;
    const vm = getCurrentInstance();
    // @ts-expect-error mis-alignment with @vue/composition-api
    const _emit = emit || (vm === null || vm === void 0 ? void 0 : vm.emit) || ((_a = vm === null || vm === void 0 ? void 0 : vm.$emit) === null || _a === void 0 ? void 0 : _a.bind(vm));
    let event = eventName;
    if (!key) {
        if (isVue2) {
            const modelOptions = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.proxy) === null || _b === void 0 ? void 0 : _b.$options) === null || _c === void 0 ? void 0 : _c.model;
            key = (modelOptions === null || modelOptions === void 0 ? void 0 : modelOptions.value) || 'value';
            if (!eventName)
                event = (modelOptions === null || modelOptions === void 0 ? void 0 : modelOptions.event) || 'input';
        }
        else {
            key = 'modelValue';
        }
    }
    event = eventName || event || `update:${key}`;
    if (passive) {
        const proxy = ref(props[key]);
        watch(() => props[key], v => proxy.value = v);
        watch(proxy, (v) => {
            if (v !== props[key])
                _emit(event, v);
        });
        return proxy;
    }
    else {
        return computed({
            get() {
                return props[key];
            },
            set(value) {
                _emit(event, value);
            },
        });
    }
}

/**
 * Shorthand for props v-model binding. Think like `toRefs(props)` but changes will also emit out.
 *
 * @see https://vueuse.org/useVModels
 * @param props
 * @param emit
 */
function useVModels(props, emit, options = {}) {
    const ret = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in props)
        ret[key] = useVModel(props, key, emit, options);
    return ret;
}

function resolveNestedOptions(options) {
    if (options === true)
        return {};
    return options;
}
/**
 * Reactive WebSocket client.
 *
 * @see https://vueuse.org/useWebSocket
 * @param url
 */
function useWebSocket(url, options = {}) {
    const { onConnected, onDisconnected, onError, onMessage, immediate = true, } = options;
    const data = ref(null);
    const status = ref('CONNECTING');
    const wsRef = ref();
    let heartbeatPause;
    let heartbeatResume;
    let explicitlyClosed = false;
    let retried = 0;
    let bufferedData = [];
    const close = (code, reason) => {
        if (!wsRef.value)
            return;
        explicitlyClosed = true;
        heartbeatPause === null || heartbeatPause === void 0 ? void 0 : heartbeatPause();
        wsRef.value.close(code, reason);
    };
    const _sendBuffer = () => {
        if (bufferedData.length && wsRef.value && status.value === 'OPEN') {
            for (const buffer of bufferedData)
                wsRef.value.send(buffer);
            bufferedData = [];
        }
    };
    const send = (data, useBuffer = true) => {
        if (!wsRef.value || status.value !== 'OPEN') {
            if (useBuffer)
                bufferedData.push(data);
            return false;
        }
        _sendBuffer();
        wsRef.value.send(data);
        return true;
    };
    const _init = () => {
        const ws = new WebSocket(url);
        wsRef.value = ws;
        status.value = 'CONNECTING';
        explicitlyClosed = false;
        ws.onopen = () => {
            status.value = 'OPEN';
            onConnected === null || onConnected === void 0 ? void 0 : onConnected(ws);
            heartbeatResume === null || heartbeatResume === void 0 ? void 0 : heartbeatResume();
            _sendBuffer();
        };
        ws.onclose = (ev) => {
            status.value = 'CLOSED';
            wsRef.value = undefined;
            onDisconnected === null || onDisconnected === void 0 ? void 0 : onDisconnected(ws, ev);
            if (!explicitlyClosed && options.autoReconnect) {
                const { retries = -1, delay = 1000, onFailed, } = resolveNestedOptions(options.autoReconnect);
                retried += 1;
                if (retries < 0 || retried < retries)
                    setTimeout(_init, delay);
                else
                    onFailed === null || onFailed === void 0 ? void 0 : onFailed();
            }
        };
        ws.onerror = (e) => {
            onError === null || onError === void 0 ? void 0 : onError(ws, e);
        };
        ws.onmessage = (e) => {
            data.value = e.data;
            onMessage === null || onMessage === void 0 ? void 0 : onMessage(ws, e);
        };
    };
    if (options.heartbeat) {
        const { message = 'ping', interval = 1000, } = resolveNestedOptions(options.heartbeat);
        const { pause, resume } = useIntervalFn(() => send(message, false), interval, { immediate: false });
        heartbeatPause = pause;
        heartbeatResume = resume;
    }
    if (immediate)
        _init();
    const open = () => {
        close();
        retried = 0;
        _init();
    };
    tryOnScopeDispose(close);
    return {
        data,
        status,
        close,
        send,
        open,
        ws: wsRef,
    };
}

/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */
/**
 * Simple Web Workers registration and communication.
 *
 * @see https://vueuse.org/useWebWorker
 * @param url
 * @param workerOptions
 * @param options
 */
function useWebWorker(url, workerOptions, options = {}) {
    const { window = defaultWindow, } = options;
    const data = ref(null);
    const worker = shallowRef();
    const post = function post(val) {
        if (!worker.value)
            return;
        worker.value.postMessage(val);
    };
    const terminate = function terminate() {
        if (!worker.value)
            return;
        worker.value.terminate();
    };
    if (window) {
        // @ts-expect-error untyped
        worker.value = new window.Worker(url, workerOptions);
        worker.value.onmessage = (e) => {
            data.value = e.data;
        };
        tryOnScopeDispose(() => {
            if (worker.value)
                worker.value.terminate();
        });
    }
    return {
        data,
        post,
        terminate,
        worker,
    };
}

/**
 * This function accepts as a parameter a function "userFunc"
 * And as a result returns an anonymous function.
 * This anonymous function, accepts as arguments,
 * the parameters to pass to the function "useArgs" and returns a Promise
 * This function can be used as a wrapper, only inside a Worker
 * because it depends by "postMessage".
 *
 * @param {Function} userFunc {Function} fn the function to run with web worker
 *
 * @returns {Function} returns a function that accepts the parameters
 * to be passed to the "userFunc" function
 */
const jobRunner = (userFunc) => (e) => {
    const userFuncArgs = e.data[0];
    // eslint-disable-next-line prefer-spread
    return Promise.resolve(userFunc.apply(undefined, userFuncArgs))
        .then((result) => {
        // @ts-ignore
        postMessage(['SUCCESS', result]);
    })
        .catch((error) => {
        // @ts-ignore
        postMessage(['ERROR', error]);
    });
};

/**
 *
 * Concatenates the dependencies into a comma separated string.
 * this string will then be passed as an argument to the "importScripts" function
 *
 * @param {Array.<String>}} deps array of string
 * @returns {String} a string composed by the concatenation of the array
 * elements "deps" and "importScripts".
 *
 * @example
 * depsParser(['demo1', 'demo2']) // return importScripts('demo1, demo2')
 */
const depsParser = (deps) => {
    if (deps.length === 0)
        return '';
    const depsString = deps.map(dep => `${dep}`).toString();
    return `importScripts('${depsString}')`;
};

/**
 * Converts the "fn" function into the syntax needed to be executed within a web worker
 *
 * @param {Function} fn the function to run with web worker
 * @param {Array.<String>} deps array of strings, imported into the worker through "importScripts"
 *
 * @returns {String} a blob url, containing the code of "fn" as a string
 *
 * @example
 * createWorkerBlobUrl((a,b) => a+b, [])
 * // return "onmessage=return Promise.resolve((a,b) => a + b)
 * .then(postMessage(['SUCCESS', result]))
 * .catch(postMessage(['ERROR', error])"
 */
const createWorkerBlobUrl = (fn, deps) => {
    const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`;
    const blob = new Blob([blobCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    return url;
};

/* this implementation is a vue port of https://github.com/alewin/useWorker by Alessio Koci */
/**
 * Run expensive function without blocking the UI, using a simple syntax that makes use of Promise.
 *
 * @see https://vueuse.org/useWebWorkerFn
 * @param fn
 * @param options
 */
const useWebWorkerFn = (fn, options = {}) => {
    const { dependencies = [], timeout, window = defaultWindow, } = options;
    const worker = ref();
    const workerStatus = ref('PENDING');
    const promise = ref({});
    const timeoutId = ref();
    const workerTerminate = (status = 'PENDING') => {
        if (worker.value && worker.value._url && window) {
            worker.value.terminate();
            URL.revokeObjectURL(worker.value._url);
            promise.value = {};
            worker.value = undefined;
            window.clearTimeout(timeoutId.value);
            workerStatus.value = status;
        }
    };
    workerTerminate();
    tryOnScopeDispose(workerTerminate);
    const generateWorker = () => {
        const blobUrl = createWorkerBlobUrl(fn, dependencies);
        const newWorker = new Worker(blobUrl);
        newWorker._url = blobUrl;
        newWorker.onmessage = (e) => {
            const { resolve = () => { }, reject = () => { } } = promise.value;
            const [status, result] = e.data;
            switch (status) {
                case 'SUCCESS':
                    resolve(result);
                    workerTerminate(status);
                    break;
                default:
                    reject(result);
                    workerTerminate('ERROR');
                    break;
            }
        };
        newWorker.onerror = (e) => {
            const { reject = () => { } } = promise.value;
            reject(e);
            workerTerminate('ERROR');
        };
        if (timeout) {
            timeoutId.value = setTimeout(() => workerTerminate('TIMEOUT_EXPIRED'), timeout);
        }
        return newWorker;
    };
    const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
        promise.value = {
            resolve,
            reject,
        };
        worker.value && worker.value.postMessage([[...fnArgs]]);
        workerStatus.value = 'RUNNING';
    });
    const workerFn = (...fnArgs) => {
        if (workerStatus.value === 'RUNNING') {
            /* eslint-disable-next-line no-console */
            console.error('[useWebWorkerFn] You can only run one instance of the worker at a time.');
            /* eslint-disable-next-line prefer-promise-reject-errors */
            return Promise.reject();
        }
        worker.value = generateWorker();
        return callWorker(...fnArgs);
    };
    return {
        workerFn,
        workerStatus,
        workerTerminate,
    };
};

/**
 * Reactively track window focus with `window.onfocus` and `window.onblur`.
 *
 * @see https://vueuse.org/useWindowFocus
 * @param options
 */
function useWindowFocus({ window = defaultWindow } = {}) {
    if (!window)
        return ref(false);
    const focused = ref(window.document.hasFocus());
    useEventListener(window, 'blur', () => {
        focused.value = false;
    });
    useEventListener(window, 'focus', () => {
        focused.value = true;
    });
    return focused;
}

/**
 * Reactive window scroll.
 *
 * @see https://vueuse.org/useWindowScroll
 * @param options
 */
function useWindowScroll({ window = defaultWindow } = {}) {
    if (!window) {
        return {
            x: ref(0),
            y: ref(0),
        };
    }
    const x = ref(window.pageXOffset);
    const y = ref(window.pageYOffset);
    useEventListener('scroll', () => {
        x.value = window.pageXOffset;
        y.value = window.pageYOffset;
    }, {
        capture: false,
        passive: true,
    });
    return { x, y };
}

/**
 * Reactive window size.
 *
 * @see https://vueuse.org/useWindowSize
 * @param options
 */
function useWindowSize({ window = defaultWindow, initialWidth = Infinity, initialHeight = Infinity } = {}) {
    if (!window) {
        return {
            width: ref(initialWidth),
            height: ref(initialHeight),
        };
    }
    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);
    useEventListener('resize', () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    }, { passive: true });
    return { width, height };
}



// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useDarkMode.js



const darkModeSymbol = Symbol( false ? 0 : '');
/**
 * Inject dark mode global computed
 */
const useDarkMode = () => {
    const isDarkMode = (0,external_vue_.inject)(darkModeSymbol);
    if (!isDarkMode) {
        throw new Error('useDarkMode() is called without provider.');
    }
    return isDarkMode;
};
/**
 * Create dark mode ref and provide as global computed in setup
 */
const setupDarkMode = () => {
    const themeLocale = useThemeLocaleData();
    const isDarkPreferred = usePreferredDark();
    const darkStorage = useStorage('vuepress-color-scheme', 'auto');
    const isDarkMode = (0,external_vue_.computed)({
        get() {
            // disable dark mode
            if (!themeLocale.value.darkMode) {
                return false;
            }
            // auto detected from prefers-color-scheme
            if (darkStorage.value === 'auto') {
                return isDarkPreferred.value;
            }
            // storage value
            return darkStorage.value === 'dark';
        },
        set(val) {
            if (val === isDarkPreferred.value) {
                darkStorage.value = 'auto';
            }
            else {
                darkStorage.value = val ? 'dark' : 'light';
            }
        },
    });
    (0,external_vue_.provide)(darkModeSymbol, isDarkMode);
    updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
    const update = (value = isDarkMode.value) => {
        // set `class="dark"` on `<html>` element
        const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector('html');
        htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle('dark', value);
    };
    (0,external_vue_.onMounted)(() => {
        (0,external_vue_.watch)(isDarkMode, update, { immediate: true });
    });
    (0,external_vue_.onUnmounted)(() => update());
};

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(615);
// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(736);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useResolveRouteWithRedirect.js


/**
 * Resolve a route with redirection
 */
const useResolveRouteWithRedirect = (...args) => {
    const router = (0,external_vue_router_.useRouter)();
    const route = router.resolve(...args);
    const lastMatched = route.matched[route.matched.length - 1];
    if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
        return route;
    }
    const { redirect } = lastMatched;
    const resolvedRedirect = (0,esm/* isFunction */.mf)(redirect) ? redirect(route) : redirect;
    const resolvedRedirectObj = (0,esm/* isString */.HD)(resolvedRedirect)
        ? { path: resolvedRedirect }
        : resolvedRedirect;
    return useResolveRouteWithRedirect({
        hash: route.hash,
        query: route.query,
        params: route.params,
        ...resolvedRedirectObj,
    });
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useNavLink.js

/**
 * Resolve NavLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
const useNavLink = (item) => {
    const resolved = useResolveRouteWithRedirect(item);
    return {
        text: resolved.meta.title || item,
        link: resolved.name === '404' ? item : resolved.fullPath,
    };
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useScrollPromise.js
let promise = null;
let promiseResolve = null;
const scrollPromise = {
    wait: () => promise,
    pending: () => {
        promise = new Promise((resolve) => (promiseResolve = resolve));
    },
    resolve: () => {
        promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
        promise = null;
        promiseResolve = null;
    },
};
const useScrollPromise = () => scrollPromise;

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/index.js
var client_lib = __webpack_require__(621);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useSidebarItems.js





const sidebarItemsSymbol = Symbol('sidebarItems');
/**
 * Inject sidebar items global computed
 */
const useSidebarItems = () => {
    const sidebarItems = (0,external_vue_.inject)(sidebarItemsSymbol);
    if (!sidebarItems) {
        throw new Error('useSidebarItems() is called without provider.');
    }
    return sidebarItems;
};
/**
 * Create sidebar items ref and provide as global computed in setup
 */
const setupSidebarItems = () => {
    const themeLocale = useThemeLocaleData();
    const frontmatter = (0,client_lib/* usePageFrontmatter */.I2)();
    const sidebarItems = (0,external_vue_.computed)(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
    (0,external_vue_.provide)(sidebarItemsSymbol, sidebarItems);
};
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
const resolveSidebarItems = (frontmatter, themeLocale) => {
    var _a, _b, _c, _d;
    // get sidebar config from frontmatter > themeConfig
    const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : 'auto';
    const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
    // resolve sidebar items according to the config
    if (frontmatter.home || sidebarConfig === false) {
        return [];
    }
    if (sidebarConfig === 'auto') {
        return resolveAutoSidebarItems(sidebarDepth);
    }
    if ((0,esm/* isArray */.kJ)(sidebarConfig)) {
        return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
    }
    if ((0,esm/* isPlainObject */.PO)(sidebarConfig)) {
        return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
    }
    return [];
};
/**
 * Util to transform page header to sidebar item
 */
const headerToSidebarItem = (header, sidebarDepth) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, sidebarDepth),
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0
    ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1))
    : [];
/**
 * Resolve sidebar items if the config is `auto`
 */
const resolveAutoSidebarItems = (sidebarDepth) => {
    const page = (0,client_lib/* usePageData */.Vi)();
    return [
        {
            text: page.value.title,
            children: headersToSidebarItemChildren(page.value.headers, sidebarDepth),
        },
    ];
};
/**
 * Resolve sidebar items if the config is an array
 */
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
    const route = (0,external_vue_router_.useRoute)();
    const page = (0,client_lib/* usePageData */.Vi)();
    const handleChildItem = (item) => {
        var _a;
        let childItem;
        if ((0,esm/* isString */.HD)(item)) {
            childItem = useNavLink(item);
        }
        else {
            childItem = item;
        }
        if (childItem.children) {
            return {
                ...childItem,
                children: childItem.children.map((item) => handleChildItem(item)),
            };
        }
        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        if (childItem.link === route.path) {
            // skip h1 header
            const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1
                ? page.value.headers[0].children
                : page.value.headers;
            return {
                ...childItem,
                children: headersToSidebarItemChildren(headers, sidebarDepth),
            };
        }
        return childItem;
    };
    return sidebarConfig.map((item) => handleChildItem(item));
};
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
    var _a;
    const route = (0,external_vue_router_.useRoute)();
    const sidebarPath = (0,esm/* resolveLocalePath */.gb)(sidebarConfig, route.path);
    const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
    return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};

// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/index.js + 3 modules
var composables = __webpack_require__(958);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/index.js


;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useThemeData.js

const useThemeData = () => _useThemeData();
const useThemeLocaleData = () => (0,composables/* useThemeLocaleData */.X6)();

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/index.js








/***/ }),

/***/ 53:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon.outbound{position:relative;display:inline-block;color:#aaa;vertical-align:middle;top:-1px}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/client/lib/components/OutboundLink.css"],"names":[],"mappings":"AAAA,eACE,iBAAkB,CAClB,oBAAqB,CACrB,UAAW,CACX,qBAAsB,CACtB,QACF","sourcesContent":[".icon.outbound {\n  position: relative;\n  display: inline-block;\n  color: #aaa;\n  vertical-align: middle;\n  top: -1px;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 714:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(691), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".back-to-top{cursor:pointer;position:fixed;bottom:2rem;right:2.5rem;width:2rem;height:1.2rem;background-color:var(--back-to-top-color);-webkit-mask:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;mask:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;z-index:var(--back-to-top-z-index)}.back-to-top:hover{background-color:var(--back-to-top-color-hover)}@media (max-width:959px){.back-to-top{display:none}}.back-to-top-enter-active,.back-to-top-leave-active{transition:opacity .3s}.back-to-top-enter-from,.back-to-top-leave-to{opacity:0}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/plugin-back-to-top/lib/client/styles/back-to-top.css"],"names":[],"mappings":"AAAA,aACE,cAAe,CACf,cAAe,CACf,WAAY,CACZ,YAAa,CACb,UAAW,CACX,aAAc,CACd,yCAA0C,CAC1C,8DAAsC,CAAtC,sDAAsC,CACtC,kCACF,CAEA,mBACE,+CACF,CAEA,yBACE,aACE,YACF,CACF,CAEA,oDAEE,sBACF,CAEA,8CAEE,SACF","sourcesContent":[".back-to-top {\n  cursor: pointer;\n  position: fixed;\n  bottom: 2rem;\n  right: 2.5rem;\n  width: 2rem;\n  height: 1.2rem;\n  background-color: var(--back-to-top-color);\n  mask: url('back-to-top.svg') no-repeat;\n  z-index: var(--back-to-top-z-index);\n}\n\n.back-to-top:hover {\n  background-color: var(--back-to-top-color-hover);\n}\n\n@media (max-width: 959px) {\n  .back-to-top {\n    display: none;\n  }\n}\n\n.back-to-top-enter-active,\n.back-to-top-leave-active {\n  transition: opacity 0.3s;\n}\n\n.back-to-top-enter-from,\n.back-to-top-leave-to {\n  opacity: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 612:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--back-to-top-z-index:5;--back-to-top-color:#3eaf7c;--back-to-top-color-hover:#71cda3}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/plugin-back-to-top/lib/client/styles/vars.css"],"names":[],"mappings":"AAAA,MACE,uBAAwB,CAExB,2BAA4B,CAC5B,iCACF","sourcesContent":[":root {\n  --back-to-top-z-index: 5;\n\n  --back-to-top-color: #3eaf7c;\n  --back-to-top-color-hover: #71cda3;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 837:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".medium-zoom-overlay{background-color:var(--medium-zoom-bg-color)!important;z-index:var(--medium-zoom-z-index)}.medium-zoom-overlay~img{z-index:calc(var(--medium-zoom-z-index) + 1)}.medium-zoom--opened .medium-zoom-overlay{opacity:var(--medium-zoom-opacity)}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/plugin-medium-zoom/lib/client/styles/medium-zoom.css"],"names":[],"mappings":"AAAA,qBAEE,sDAAwD,CACxD,kCACF,CAEA,yBACE,4CACF,CAEA,0CACE,kCACF","sourcesContent":[".medium-zoom-overlay {\n  /* override element style set by medium-zoom script */\n  background-color: var(--medium-zoom-bg-color) !important;\n  z-index: var(--medium-zoom-z-index);\n}\n\n.medium-zoom-overlay ~ img {\n  z-index: calc(var(--medium-zoom-z-index) + 1);\n}\n\n.medium-zoom--opened .medium-zoom-overlay {\n  opacity: var(--medium-zoom-opacity);\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 757:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--medium-zoom-z-index:100;--medium-zoom-bg-color:#ffffff;--medium-zoom-opacity:1}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/plugin-medium-zoom/lib/client/styles/vars.css"],"names":[],"mappings":"AAAA,MACE,yBAA0B,CAC1B,8BAA+B,CAC/B,uBACF","sourcesContent":[":root {\n  --medium-zoom-z-index: 100;\n  --medium-zoom-bg-color: #ffffff;\n  --medium-zoom-opacity: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 359:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#nprogress{pointer-events:none}#nprogress .bar{background:var(--nprogress-color);position:fixed;z-index:var(--nprogress-z-index);top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px var(--nprogress-color),0 0 5px var(--nprogress-color);opacity:1;transform:rotate(3deg) translate(0,-4px)}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/plugin-nprogress/lib/client/styles/nprogress.css"],"names":[],"mappings":"AAAA,WACE,mBACF,CAEA,gBACE,iCAAkC,CAClC,cAAe,CACf,gCAAiC,CACjC,KAAM,CACN,MAAO,CACP,UAAW,CACX,UACF,CAEA,gBACE,aAAc,CACd,iBAAkB,CAClB,OAAU,CACV,WAAY,CACZ,WAAY,CACZ,yEAA2E,CAC3E,SAAU,CACV,wCACF","sourcesContent":["#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: var(--nprogress-color);\n  position: fixed;\n  z-index: var(--nprogress-z-index);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px var(--nprogress-color), 0 0 5px var(--nprogress-color);\n  opacity: 1;\n  transform: rotate(3deg) translate(0px, -4px);\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 135:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--nprogress-color:#29d;--nprogress-z-index:1031}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/plugin-nprogress/lib/client/styles/vars.css"],"names":[],"mappings":"AAAA,MACE,sBAAuB,CACvB,wBACF","sourcesContent":[":root {\n  --nprogress-color: #29d;\n  --nprogress-z-index: 1031;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 500:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--c-brand:#3eaf7c;--c-brand-light:#4abf8a;--c-bg:#ffffff;--c-bg-light:#f3f4f5;--c-bg-lighter:#eeeeee;--c-bg-navbar:var(--c-bg);--c-bg-sidebar:var(--c-bg);--c-bg-arrow:#cccccc;--c-text:#2c3e50;--c-text-accent:var(--c-brand);--c-text-light:#3a5169;--c-text-lighter:#4e6e8e;--c-text-lightest:#6a8bad;--c-text-quote:#999999;--c-border:#eaecef;--c-border-dark:#dfe2e5;--c-tip:#42b983;--c-tip-bg:var(--c-bg-light);--c-tip-title:var(--c-text);--c-tip-text:var(--c-text);--c-tip-text-accent:var(--c-text-accent);--c-warning:#e7c000;--c-warning-bg:#fffae3;--c-warning-title:#ad9000;--c-warning-text:#746000;--c-warning-text-accent:var(--c-text);--c-danger:#cc0000;--c-danger-bg:#ffe0e0;--c-danger-title:#990000;--c-danger-text:#660000;--c-danger-text-accent:var(--c-text);--c-details-bg:#eeeeee;--c-badge-tip:var(--c-tip);--c-badge-warning:var(--c-warning);--c-badge-danger:var(--c-danger);--t-color:0.3s ease;--t-transform:0.3s ease;--code-bg-color:#282c34;--code-hl-bg-color:rgba(0, 0, 0, 0.66);--code-ln-color:#9e9e9e;--code-ln-wrapper-width:3.5rem;--font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;--font-family-code:Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;--navbar-height:3.6rem;--navbar-padding-v:0.7rem;--navbar-padding-h:1.5rem;--sidebar-width:20rem;--sidebar-width-mobile:calc(var(--sidebar-width) * 0.82);--content-width:740px;--homepage-width:960px}.back-to-top{--back-to-top-color:var(--c-brand);--back-to-top-color-hover:var(--c-brand-light)}.DocSearch{--docsearch-primary-color:var(--c-brand);--docsearch-text-color:var(--c-text);--docsearch-highlight-color:var(--c-brand);--docsearch-muted-color:var(--c-text-quote);--docsearch-container-background:rgba(9, 10, 17, 0.8);--docsearch-modal-background:var(--c-bg-light);--docsearch-searchbox-background:var(--c-bg-lighter);--docsearch-searchbox-focus-background:var(--c-bg);--docsearch-searchbox-shadow:inset 0 0 0 2px var(--c-brand);--docsearch-hit-color:var(--c-text-light);--docsearch-hit-active-color:var(--c-bg);--docsearch-hit-background:var(--c-bg);--docsearch-hit-shadow:0 1px 3px 0 var(--c-border-dark);--docsearch-footer-background:var(--c-bg)}.medium-zoom-overlay{--medium-zoom-bg-color:var(--c-bg)}#nprogress{--nprogress-color:var(--c-brand)}.pwa-popup{--pwa-popup-text-color:var(--c-text);--pwa-popup-bg-color:var(--c-bg);--pwa-popup-border-color:var(--c-brand);--pwa-popup-shadow:0 4px 16px var(--c-brand);--pwa-popup-btn-text-color:var(--c-bg);--pwa-popup-btn-bg-color:var(--c-brand);--pwa-popup-btn-hover-bg-color:var(--c-brand-light)}.search-box{--search-bg-color:var(--c-bg);--search-accent-color:var(--c-brand);--search-text-color:var(--c-text);--search-border-color:var(--c-border);--search-item-text-color:var(--c-text-lighter);--search-item-focus-bg-color:var(--c-bg-light)}html.dark{--c-brand:#3aa675;--c-brand-light:#349469;--c-bg:#22272e;--c-bg-light:#2b313a;--c-bg-lighter:#262c34;--c-text:#adbac7;--c-text-light:#96a7b7;--c-text-lighter:#8b9eb0;--c-text-lightest:#8094a8;--c-border:#3e4c5a;--c-border-dark:#34404c;--c-tip:#318a62;--c-warning:#ceab00;--c-warning-bg:#7e755b;--c-warning-title:#ceac03;--c-warning-text:#362e00;--c-danger:#940000;--c-danger-bg:#806161;--c-danger-title:#610000;--c-danger-text:#3a0000;--c-details-bg:#323843;--code-hl-bg-color:#363b46;color-scheme:dark}html.dark .DocSearch{--docsearch-logo-color:var(--c-text);--docsearch-modal-shadow:inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;--docsearch-key-shadow:inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d, 0 2px 2px 0 rgba(3, 4, 9, 0.3);--docsearch-key-gradient:linear-gradient(-225deg, #444950, #1c1e21);--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73, 76, 106, 0.5), 0 -4px 8px 0 rgba(0, 0, 0, 0.2)}body,html{padding:0;margin:0;background-color:var(--c-bg);transition:background-color var(--t-color)}body{font-family:var(--font-family);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:var(--c-text)}a,p a code{color:var(--c-text-accent)}a{font-weight:500;overflow-wrap:break-word}p a code{font-weight:400}code,kbd{font-family:var(--font-family-code)}kbd{background:var(--c-bg-lighter);border:solid .15rem var(--c-border-dark);border-bottom:solid .25rem var(--c-border-dark);border-radius:.15rem;padding:0 .15em}code{color:var(--c-text-lighter);padding:.25rem .5rem;font-size:.85em;background-color:var(--c-bg-light);border-radius:3px;overflow-wrap:break-word;transition:background-color var(--t-color),color var(--t-color)}blockquote{color:var(--c-text-quote);border-left:.2rem solid var(--c-border-dark);margin:1rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p,code{margin:0}ol,ul{padding-left:1.2em}strong{font-weight:600}h1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.25}h1:hover .header-anchor,h2:hover .header-anchor,h3:hover .header-anchor,h4:hover .header-anchor,h5:hover .header-anchor,h6:hover .header-anchor{opacity:1}h1{font-size:2.2rem}h2{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid var(--c-border);transition:border-color var(--t-color)}h3{font-size:1.35rem}h4{font-size:1.15rem}h5{font-size:1.05rem}blockquote,h6{font-size:1rem}a.header-anchor{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a,a.header-anchor:hover{text-decoration:none}a.header-anchor:focus-visible{opacity:1}ol,p,ul{line-height:1.7}hr{border:0;border-top:1px solid var(--c-border)}table{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr{border-top:1px solid var(--c-border-dark)}tr:nth-child(2n){background-color:var(--c-bg-light)}td,th{border:1px solid var(--c-border-dark);padding:.6em 1em}.arrow,.badge{display:inline-block}.arrow{width:0;height:0}.arrow.down,.arrow.up{border-left:4px solid transparent;border-right:4px solid transparent}.arrow.up{border-bottom:6px solid var(--c-bg-arrow)}.arrow.down{border-top:6px solid var(--c-bg-arrow)}.arrow.left,.arrow.right{border-top:4px solid transparent;border-bottom:4px solid transparent}.arrow.right{border-left:6px solid var(--c-bg-arrow)}.arrow.left{border-right:6px solid var(--c-bg-arrow)}.badge{font-size:14px;height:18px;line-height:18px;border-radius:3px;padding:0 6px;color:var(--c-bg);vertical-align:top;transition:color var(--t-color),background-color var(--t-color)}.badge.tip{background-color:var(--c-badge-tip)}.badge.warning{background-color:var(--c-badge-warning)}.badge.danger{background-color:var(--c-badge-danger)}.badge+.badge{margin-left:5px}code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:var(--font-family-code);font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#ec5975}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:#3eaf7c}.theme-default-content pre,.theme-default-content pre[class*=language-]{line-height:1.4;padding:1.25rem 1.5rem;margin:.85rem 0;border-radius:6px;overflow:auto}.theme-default-content pre code,.theme-default-content pre[class*=language-] code{color:#fff;padding:0;background-color:transparent;border-radius:0;-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.theme-default-content .line-number{font-family:var(--font-family-code)}div[class*=language-]{position:relative;background-color:var(--code-bg-color);border-radius:6px}div[class*=language-]::before{position:absolute;z-index:3;top:.8em;right:1em;font-size:.75rem;color:var(--code-ln-color)}div[class*=language-] pre,div[class*=language-] pre[class*=language-]{background:0 0!important;position:relative;z-index:1}div[class*=language-] .highlight-lines{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:1.3rem;position:absolute;top:0;left:0;width:100%;line-height:1.4}div[class*=language-] .highlight-lines .highlight-line{background-color:var(--code-hl-bg-color)}div[class*=language-]:not(.line-numbers-mode) .line-numbers{display:none}div[class*=language-].line-numbers-mode .highlight-lines .highlight-line{position:relative}div[class*=language-].line-numbers-mode .highlight-lines .highlight-line::before{content:\" \";position:absolute;z-index:2;left:0;top:0;display:block;width:var(--code-ln-wrapper-width);height:100%}div[class*=language-].line-numbers-mode pre{margin-left:var(--code-ln-wrapper-width);padding-left:1rem;vertical-align:middle}div[class*=language-].line-numbers-mode .line-numbers{position:absolute;top:0;width:var(--code-ln-wrapper-width);text-align:center;color:var(--code-ln-color);padding-top:1.25rem;line-height:1.4}div[class*=language-].line-numbers-mode .line-numbers .line-number,div[class*=language-].line-numbers-mode .line-numbers br{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div[class*=language-].line-numbers-mode .line-numbers .line-number{position:relative;z-index:3;font-size:.85em}div[class*=language-].line-numbers-mode::after{content:\"\";position:absolute;top:0;left:0;width:var(--code-ln-wrapper-width);height:100%;border-radius:6px 0 0 6px;border-right:1px solid var(--code-hl-bg-color)}div[class*=language-].ext-c:before{content:\"c\"}div[class*=language-].ext-cpp:before{content:\"cpp\"}div[class*=language-].ext-cs:before{content:\"cs\"}div[class*=language-].ext-css:before{content:\"css\"}div[class*=language-].ext-dart:before{content:\"dart\"}div[class*=language-].ext-docker:before{content:\"docker\"}div[class*=language-].ext-fs:before{content:\"fs\"}div[class*=language-].ext-go:before{content:\"go\"}div[class*=language-].ext-html:before{content:\"html\"}div[class*=language-].ext-java:before{content:\"java\"}div[class*=language-].ext-js:before{content:\"js\"}div[class*=language-].ext-json:before{content:\"json\"}div[class*=language-].ext-kt:before{content:\"kt\"}div[class*=language-].ext-less:before{content:\"less\"}div[class*=language-].ext-makefile:before{content:\"makefile\"}div[class*=language-].ext-md:before{content:\"md\"}div[class*=language-].ext-php:before{content:\"php\"}div[class*=language-].ext-py:before{content:\"py\"}div[class*=language-].ext-rb:before{content:\"rb\"}div[class*=language-].ext-rs:before{content:\"rs\"}div[class*=language-].ext-sass:before{content:\"sass\"}div[class*=language-].ext-scss:before{content:\"scss\"}div[class*=language-].ext-sh:before{content:\"sh\"}div[class*=language-].ext-styl:before{content:\"styl\"}div[class*=language-].ext-ts:before{content:\"ts\"}div[class*=language-].ext-toml:before{content:\"toml\"}div[class*=language-].ext-vue:before{content:\"vue\"}div[class*=language-].ext-yml:before{content:\"yml\"}@media (max-width:419px){.theme-default-content div[class*=language-]{margin:.85rem -1.5rem;border-radius:0}}.code-group__nav{margin-top:.85rem;margin-bottom:calc(-1.7rem - 6px);padding-bottom:calc(1.7rem - 6px);padding-left:10px;padding-top:10px;border-top-left-radius:6px;border-top-right-radius:6px;background-color:var(--code-bg-color)}.code-group__ul{margin:auto 0;padding-left:0;display:inline-flex;list-style:none}.code-group__nav-tab{border:0;padding:5px;cursor:pointer;background-color:transparent;font-size:.85em;line-height:1.4;color:rgba(255,255,255,.9);font-weight:600}.code-group__nav-tab:focus{outline:0}.code-group__nav-tab:focus-visible{outline:1px solid rgba(255,255,255,.9)}.code-group__nav-tab-active{border-bottom:var(--c-brand) 1px solid}@media (max-width:419px){.code-group__nav{margin-left:-1.5rem;margin-right:-1.5rem;border-radius:0}}.code-group-item,.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle>a.router-link-active::after{display:none}.code-group-item__active{display:block}.code-group-item>pre{background-color:orange}.custom-container{transition:color var(--t-color),border-color var(--t-color),background-color var(--t-color)}.custom-container .custom-container-title{font-weight:600;margin-bottom:-.4rem}.custom-container.danger,.custom-container.tip,.custom-container.warning{padding:.1rem 1.5rem;border-left-width:.5rem;border-left-style:solid;margin:1rem 0}.custom-container.tip{border-color:var(--c-tip);background-color:var(--c-tip-bg);color:var(--c-tip-text)}.custom-container.tip .custom-container-title{color:var(--c-tip-title)}.custom-container.tip a{color:var(--c-tip-text-accent)}.custom-container.warning{border-color:var(--c-warning);background-color:var(--c-warning-bg);color:var(--c-warning-text)}.custom-container.warning .custom-container-title{color:var(--c-warning-title)}.custom-container.warning a{color:var(--c-warning-text-accent)}.custom-container.danger{border-color:var(--c-danger);background-color:var(--c-danger-bg);color:var(--c-danger-text)}.custom-container.danger .custom-container-title{color:var(--c-danger-title)}.custom-container.danger a{color:var(--c-danger-text-accent)}.custom-container.details{display:block;position:relative;border-radius:2px;margin:1.6em 0;padding:1.6em;background-color:var(--c-details-bg)}.custom-container.details h4{margin-top:0}.custom-container.details figure:last-child,.custom-container.details p:last-child{margin-bottom:0;padding-bottom:0}.custom-container.details summary{outline:0;cursor:pointer}.dropdown-wrapper{cursor:pointer}.dropdown-wrapper .dropdown-title,.dropdown-wrapper .mobile-dropdown-title{display:block;font-size:.9rem;font-family:inherit;cursor:inherit;padding:inherit;line-height:1.4rem;background:0 0;border:0;font-weight:500;color:var(--c-text)}.dropdown-wrapper .mobile-dropdown-title{display:none;font-weight:600;font-size:inherit}.dropdown-wrapper .dropdown-title:hover,.dropdown-wrapper .mobile-dropdown-title:hover{border-color:transparent}.dropdown-wrapper .dropdown-title .arrow,.dropdown-wrapper .mobile-dropdown-title .arrow{vertical-align:middle;margin-top:-1px;margin-left:.4rem}.dropdown-wrapper .mobile-dropdown-title:hover{color:var(--c-text-accent)}.dropdown-wrapper .nav-dropdown .dropdown-item{color:inherit;line-height:1.7rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle{margin:.45rem 0 0;border-top:1px solid var(--c-border);padding:1rem 0 .45rem;font-size:.9rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle>span{padding:0 1.5rem 0 1.25rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle>a{font-weight:inherit}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem-wrapper{padding:0;list-style:none}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem-wrapper .dropdown-subitem{font-size:.9em}.dropdown-wrapper .nav-dropdown .dropdown-item a{display:block;line-height:1.7rem;position:relative;border-bottom:none;font-weight:400;margin-bottom:0;padding:0 1.5rem 0 1.25rem}.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active,.dropdown-wrapper .nav-dropdown .dropdown-item a:hover,.navbar-links a.router-link-active,.navbar-links a:hover{color:var(--c-text-accent)}.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after{content:\"\";width:0;height:0;border-left:5px solid var(--c-text-accent);border-top:3px solid transparent;border-bottom:3px solid transparent;position:absolute;top:calc(50% - 2px);left:9px}.dropdown-wrapper .nav-dropdown .dropdown-item:first-child .dropdown-subtitle{margin-top:0;padding-top:0;border-top:0}@media (max-width:719px){.dropdown-wrapper.open .dropdown-title,.dropdown-wrapper.open .mobile-dropdown-title{margin-bottom:.5rem}.dropdown-wrapper .dropdown-title{display:none}.dropdown-wrapper .mobile-dropdown-title{display:block}.dropdown-wrapper .nav-dropdown{transition:height .1s ease-out;overflow:hidden}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle{border-top:0;margin-top:0;padding-top:0;padding-bottom:0;font-size:15px;line-height:2rem}.dropdown-wrapper .nav-dropdown .dropdown-item>a{font-size:15px;line-height:2rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem{font-size:14px;padding-left:1rem}}@media (min-width:720px){.dropdown-wrapper{height:1.8rem}.dropdown-wrapper.open .nav-dropdown,.dropdown-wrapper:hover .nav-dropdown{display:block!important}.dropdown-wrapper.open:blur{display:none}.dropdown-wrapper .nav-dropdown{display:none;height:auto!important;box-sizing:border-box;max-height:calc(100vh - 2.7rem);overflow-y:auto;position:absolute;top:100%;right:0;background-color:var(--c-bg-navbar);padding:.6rem 0;border:1px solid var(--c-border);border-bottom-color:var(--c-border-dark);text-align:left;border-radius:.25rem;white-space:nowrap;margin:0}}.dropdown-enter-from,.dropdown-leave-to{height:0!important}.home{padding:var(--navbar-height) 2rem 0;max-width:var(--homepage-width);margin:0 auto;display:block}.home .hero{text-align:center}.home .hero img{max-width:100%;max-height:280px;display:block;margin:3rem auto 1.5rem}.home .hero h1{font-size:3rem}.home .hero .actions,.home .hero .description,.home .hero h1{margin:1.8rem auto}.home .hero .description{max-width:35rem;font-size:1.6rem;line-height:1.3;color:var(--c-text-lightest)}.home .hero .action-button{display:inline-block;font-size:1.2rem;padding:.8rem 1.6rem;border-width:2px;border-style:solid;border-radius:4px;transition:background-color var(--t-color);box-sizing:border-box}.home .hero .action-button:not(:first-child){margin-left:1.5rem}.home .hero .action-button.primary{color:var(--c-bg);background-color:var(--c-brand);border-color:var(--c-brand)}.home .hero .action-button.primary:hover{background-color:var(--c-brand-light)}.home .hero .action-button.secondary{color:var(--c-brand);background-color:var(--c-bg);border-color:var(--c-brand)}.home .hero .action-button.secondary:hover{color:var(--c-bg);background-color:var(--c-brand-light)}.home .features{border-top:1px solid var(--c-border);transition:border-color var(--t-color);padding:1.2rem 0;margin-top:2.5rem;display:flex;flex-wrap:wrap;align-items:flex-start;align-content:stretch;justify-content:space-between}.home .feature{flex-grow:1;flex-basis:30%;max-width:30%}.home .feature h2{font-size:1.4rem;font-weight:500;border-bottom:none;padding-bottom:0;color:var(--c-text-light)}.home .feature p,.home .footer{color:var(--c-text-lighter)}.home .footer{padding:2.5rem;border-top:1px solid var(--c-border);text-align:center;transition:border-color var(--t-color)}@media (max-width:719px){.home .features{flex-direction:column}.home .feature{max-width:100%;padding:0 2.5rem}}@media (max-width:419px){.home{padding-left:1.5rem;padding-right:1.5rem}.home .hero img{max-height:210px;margin:2rem auto 1.2rem}.home .hero h1{font-size:2rem}.home .hero .actions,.home .hero .description,.home .hero h1{margin:1.2rem auto}.home .hero .description{font-size:1.2rem}.home .hero .action-button{font-size:1rem;padding:.6rem 1.2rem}.home .feature h2{font-size:1.25rem}}.theme-default-content:not(.custom){max-width:var(--content-width);margin:0 auto;padding:2rem 2.5rem}@media (max-width:959px){.theme-default-content:not(.custom){padding:2rem}}@media (max-width:419px){.theme-default-content:not(.custom){padding:1.5rem}}.page{padding-top:var(--navbar-height);padding-left:var(--sidebar-width)}.navbar,.sidebar{position:fixed;left:0;box-sizing:border-box}.navbar{z-index:20;top:0;right:0;height:var(--navbar-height);border-bottom:1px solid var(--c-border);background-color:var(--c-bg-navbar);transition:background-color var(--t-color),border-color var(--t-color)}.sidebar{font-size:16px;width:var(--sidebar-width);z-index:10;margin:0;top:var(--navbar-height);bottom:0;border-right:1px solid var(--c-border);overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--c-brand) var(--c-border);background-color:var(--c-bg-sidebar);transition:transform var(--t-transform),background-color var(--t-color),border-color var(--t-color)}.sidebar::-webkit-scrollbar{width:7px}.sidebar::-webkit-scrollbar-track{background-color:var(--c-border)}.sidebar::-webkit-scrollbar-thumb{background-color:var(--c-brand)}.sidebar-mask{position:fixed;z-index:9;top:0;left:0;width:100vw;height:100vh;display:none}.theme-container.sidebar-open .sidebar-mask{display:block}.theme-container.sidebar-open .navbar>.toggle-sidebar-button .icon span:nth-child(1){transform:rotate(45deg) translate3d(5.5px,5.5px,0)}.theme-container.sidebar-open .navbar>.toggle-sidebar-button .icon span:nth-child(2){transform:scale3d(0,1,1)}.theme-container.sidebar-open .navbar>.toggle-sidebar-button .icon span:nth-child(3){transform:rotate(-45deg) translate3d(6px,-6px,0)}.theme-container.sidebar-open .navbar>.toggle-sidebar-button .icon span:nth-child(1),.theme-container.sidebar-open .navbar>.toggle-sidebar-button .icon span:nth-child(3){transform-origin:center}.theme-container.no-navbar .theme-default-content:not(.custom)>h1,.theme-container.no-navbar h2,.theme-container.no-navbar h3,.theme-container.no-navbar h4,.theme-container.no-navbar h5,.theme-container.no-navbar h6{margin-top:1.5rem;padding-top:0}.theme-container.no-navbar .page{padding-top:0}.theme-container.no-navbar .sidebar{top:0}@media (min-width:720px){.theme-container.no-sidebar .sidebar{display:none}.theme-container.no-sidebar .page{padding-left:0}}.theme-default-content:not(.custom)>h1,.theme-default-content:not(.custom)>h2,.theme-default-content:not(.custom)>h3,.theme-default-content:not(.custom)>h4,.theme-default-content:not(.custom)>h5,.theme-default-content:not(.custom)>h6{margin-top:calc(.5rem - var(--navbar-height));padding-top:calc(1rem + var(--navbar-height));margin-bottom:0}.theme-default-content:not(.custom)>h1:first-child,.theme-default-content:not(.custom)>h2:first-child,.theme-default-content:not(.custom)>h3:first-child,.theme-default-content:not(.custom)>h4:first-child,.theme-default-content:not(.custom)>h5:first-child,.theme-default-content:not(.custom)>h6:first-child{margin-bottom:1rem}.theme-default-content:not(.custom)>h1:first-child+.custom-container,.theme-default-content:not(.custom)>h1:first-child+p,.theme-default-content:not(.custom)>h1:first-child+pre,.theme-default-content:not(.custom)>h2:first-child+.custom-container,.theme-default-content:not(.custom)>h2:first-child+p,.theme-default-content:not(.custom)>h2:first-child+pre,.theme-default-content:not(.custom)>h3:first-child+.custom-container,.theme-default-content:not(.custom)>h3:first-child+p,.theme-default-content:not(.custom)>h3:first-child+pre,.theme-default-content:not(.custom)>h4:first-child+.custom-container,.theme-default-content:not(.custom)>h4:first-child+p,.theme-default-content:not(.custom)>h4:first-child+pre,.theme-default-content:not(.custom)>h5:first-child+.custom-container,.theme-default-content:not(.custom)>h5:first-child+p,.theme-default-content:not(.custom)>h5:first-child+pre,.theme-default-content:not(.custom)>h6:first-child+.custom-container,.theme-default-content:not(.custom)>h6:first-child+p,.theme-default-content:not(.custom)>h6:first-child+pre{margin-top:2rem}.theme-default-content:not(.custom){padding-top:0}.theme-default-content:not(.custom) a:hover{text-decoration:underline}.theme-default-content:not(.custom) img{max-width:100%}.theme-default-content.custom{padding:0;margin:0}.theme-default-content.custom img{max-width:100%}@media (max-width:959px){.sidebar{font-size:15px;width:var(--sidebar-width-mobile)}.page{padding-left:var(--sidebar-width-mobile)}}@media (max-width:719px){.sidebar{top:0;padding-top:var(--navbar-height);transform:translateX(-100%)}.page{padding-left:0}.theme-container.sidebar-open .sidebar{transform:translateX(0)}.theme-container.no-navbar .sidebar{padding-top:0}}@media (max-width:419px){h1{font-size:1.9rem}}.navbar{--navbar-line-height:calc( var(--navbar-height) - 2 * var(--navbar-padding-v) );padding:var(--navbar-padding-v) var(--navbar-padding-h);line-height:var(--navbar-line-height)}.navbar .logo{height:var(--navbar-line-height);min-width:var(--navbar-line-height);margin-right:var(--navbar-padding-v);vertical-align:top}.navbar .site-name{font-size:1.3rem;font-weight:600;color:var(--c-text);position:relative}.navbar .navbar-links-wrapper{display:flex;position:absolute;box-sizing:border-box;top:var(--navbar-padding-v);right:var(--navbar-padding-h);height:var(--navbar-line-height);padding-left:var(--navbar-padding-h);white-space:nowrap;font-size:.9rem}.navbar .navbar-links-wrapper .search-box{flex:0 0 auto;vertical-align:top}@media (max-width:719px){.navbar{padding-left:4rem}.navbar .can-hide{display:none}.navbar .site-name{width:calc(100vw - 9.4rem);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}}.navbar-links,.navbar-links a{display:inline-block}.navbar-links a{line-height:1.4rem;color:inherit}.navbar-links .navbar-links-item{position:relative;display:inline-block;margin-left:1.5rem;line-height:var(--navbar-line-height)}.navbar-links .navbar-links-item:first-child{margin-left:0}@media (max-width:719px){.navbar-links .navbar-links-item{margin-left:0}}@media (min-width:719px){.navbar-links a.router-link-active,.navbar-links a:hover{color:var(--c-text)}.navbar-links-item>a:not(.external).router-link-active,.navbar-links-item>a:not(.external):hover{margin-bottom:-2px;border-bottom:2px solid var(--c-text-accent)}}.toggle-sidebar-button{position:absolute;top:.6rem;left:1rem;display:none;padding:.6rem;cursor:pointer}.toggle-sidebar-button .icon{display:flex;flex-direction:column;justify-content:center;align-items:center;width:1.25rem;height:1.25rem;cursor:inherit}.toggle-sidebar-button .icon span{display:inline-block;width:100%;height:2px;border-radius:2px;background-color:var(--c-text);transition:transform ease .3s}.toggle-sidebar-button .icon span:nth-child(2){margin:6px 0}@media screen and (max-width:719px){.toggle-sidebar-button{display:block}}.toggle-dark-button{display:flex;margin:auto;margin-left:1rem;border:0;background:0 0;color:var(--c-text);opacity:.8;cursor:pointer}.toggle-dark-button:hover{opacity:1}.toggle-dark-button .icon{width:1.25rem;height:1.25rem}.page-meta,.page-nav{max-width:var(--content-width);margin:0 auto;padding:2rem 2.5rem}@media (max-width:959px){.page-meta,.page-nav{padding:2rem}}@media (max-width:419px){.page-meta,.page-nav{padding:1.5rem}}.page{padding-bottom:2rem;display:block}.page-meta{padding-top:1rem;padding-bottom:1rem;overflow:auto}.page-meta .meta-item{cursor:default;margin-top:.8rem}.page-meta .meta-item .meta-item-label{font-weight:500;color:var(--c-text-lighter)}.page-meta .meta-item .meta-item-info{font-weight:400;color:var(--c-text-quote)}.page-meta .edit-link{display:inline-block;margin-right:.25rem}.page-meta .last-updated{float:right}@media (max-width:719px){.page-meta .last-updated{font-size:.8em;float:none}.page-meta .contributors{font-size:.8em}}.page-nav{padding-top:1rem;padding-bottom:0}.page-nav .inner{min-height:2rem;margin-top:0;border-top:1px solid var(--c-border);transition:border-color var(--t-color);padding-top:1rem;overflow:auto}.page-nav .next{float:right}.sidebar ul{padding:0;margin:0;list-style-type:none}.sidebar a{display:inline-block}.sidebar .navbar-links{display:none;border-bottom:1px solid var(--c-border);transition:border-color var(--t-color);padding:.5rem 0 .75rem}.sidebar .navbar-links a{font-weight:600}.sidebar .navbar-links .navbar-links-item{display:block;line-height:1.25rem;font-size:1.1em;padding:.5rem 0 .5rem 1.5rem}.sidebar .sidebar-links{padding:1.5rem 0}.sidebar .sidebar-links>li:not(:first-child),.sidebar-links>.sidebar-item:not(.sidebar-heading):not(:first-child){margin-top:.75rem}.sidebar .sidebar-links .sidebar-sub-items{padding-left:1rem;font-size:.95em}@media (max-width:719px){.sidebar .navbar-links{display:block}.sidebar .navbar-links .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after{top:calc(1rem - 2px)}.sidebar .sidebar-links{padding:1rem 0}}.sidebar-heading{color:var(--c-text);transition:color .15s ease;font-size:1.1em;font-weight:700;padding:.35rem 1.5rem .35rem 1.25rem;width:100%;box-sizing:border-box;margin:0;border-left:.25rem solid transparent}.sidebar-heading .arrow{position:relative;top:-.12em;left:.5em}.sidebar-item:not(.sidebar-heading){font-size:1em;font-weight:400;display:inline-block;color:var(--c-text);border-left:.25rem solid transparent;margin:0;padding:.35rem 1rem .35rem 2rem;line-height:1.4;width:100%;box-sizing:border-box}.sidebar-sub-items .sidebar-item:not(.sidebar-heading){padding:.25rem 1rem .25rem 1.75rem}.sidebar-item{cursor:default}a.sidebar-item{cursor:pointer}a.sidebar-item.active,a.sidebar-item:hover{color:var(--c-text-accent)}a.sidebar-item.active{font-weight:600;border-left-color:var(--c-text-accent)}a.sidebar-item.sidebar-heading.active{font-weight:700;border-left-color:transparent}.sidebar-sub-items a.sidebar-item.active{font-weight:500;border-left-color:transparent}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.table-of-contents .badge{vertical-align:middle}.fade-slide-y-enter-active{transition:all .3s ease}.fade-slide-y-leave-active{transition:all .3s cubic-bezier(1,.5,.8,1)}.fade-slide-y-enter-from,.fade-slide-y-leave-to{transform:translateY(10px);opacity:0}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/theme-default/lib/client/styles/vars.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/vars-dark.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/normalize.scss","<no source>","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/badge.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/arrow.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/code.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/code-group.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/custom-container.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/dropdown.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/home.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/_wrapper.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/layout.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/navbar.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/page.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/sidebar.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/sr-only.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/toc.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/transitions.scss"],"names":[],"mappings":"AAAA,MAEE,iBAAA,CACA,uBAAA,CAGA,cAAA,CACA,oBAAA,CACA,sBAAA,CACA,yBAAA,CACA,0BAAA,CACA,oBAAA,CAGA,gBAAA,CACA,8BAAA,CACA,sBAAA,CACA,wBAAA,CACA,yBAAA,CACA,sBAAA,CAGA,kBAAA,CACA,uBAAA,CAGA,eAAA,CACA,4BAAA,CACA,2BAAA,CACA,0BAAA,CACA,wCAAA,CACA,mBAAA,CACA,sBAAA,CACA,yBAAA,CACA,wBAAA,CACA,qCAAA,CACA,kBAAA,CACA,qBAAA,CACA,wBAAA,CACA,uBAAA,CACA,oCAAA,CACA,sBAAA,CAGA,0BAAA,CACA,kCAAA,CACA,gCAAA,CAGA,mBAAA,CACA,uBAAA,CAGA,uBAAA,CACA,sCAAA,CACA,uBAAA,CACA,8BAAA,CAGA,uJAAA,CAEA,4EAAA,CAGA,sBAAA,CACA,yBAAA,CACA,yBAAA,CACA,qBAAA,CACA,wDAAA,CACA,qBAAA,CACA,sBAAA,CAIF,aACE,kCAAA,CACA,8CAAA,CAIF,WACE,wCAAA,CACA,oCAAA,CACA,0CAAA,CACA,2CAAA,CACA,qDAAA,CACA,8CAAA,CACA,oDAAA,CACA,kDAAA,CACA,2DAAA,CACA,yCAAA,CACA,wCAAA,CACA,sCAAA,CACA,uDAAA,CACA,yCAAA,CAIF,qBACE,kCAAA,CAIF,WACE,gCAAA,CAIF,WACE,oCAAA,CACA,gCAAA,CACA,uCAAA,CACA,4CAAA,CACA,sCAAA,CACA,uCAAA,CACA,mDAAA,CAIF,YACE,6BAAA,CACA,oCAAA,CACA,iCAAA,CACA,qCAAA,CAEA,8CAAA,CACA,8CAAA,CC9HF,UAEE,iBAAA,CACA,uBAAA,CAGA,cAAA,CACA,oBAAA,CACA,sBAAA,CAGA,gBAAA,CACA,sBAAA,CACA,wBAAA,CACA,yBAAA,CAGA,kBAAA,CACA,uBAAA,CAGA,eAAA,CACA,mBAAA,CACA,sBAAA,CACA,yBAAA,CACA,wBAAA,CACA,kBAAA,CACA,qBAAA,CACA,wBAAA,CACA,uBAAA,CACA,sBAAA,CAGA,0BAAA,CCxBA,iBDwBA,CAIF,qBACE,oCAAA,CACA,uEAAA,CACA,0GAAA,CAEA,mEAAA,CACA,iGAAA,CC3CF,UAEE,SAAA,CACA,QAAA,CACA,4BAAA,CACA,0CAAA,CAOF,KACE,8BAAA,CACA,kCAAA,CACA,iCAAA,CACA,cAAA,CACA,mBAAA,CCjBF,WD6BE,yBAAA,EC7BF,ADoBA,EACE,eAAA,CAGA,wBAAA,CAGF,SACE,eACA,CC7BF,SD0CE,kCAAA,EC1CF,ADgCA,IAEE,8BAAA,CACA,wCAAA,CACA,+CAAA,CACA,oBAAA,CACA,eAAA,CAGF,KAEE,2BAAA,CACA,oBAAA,CAEA,eAAA,CACA,kCAAA,CACA,iBAAA,CACA,wBAAA,CACA,+DAAA,CAGF,WAEE,yBAAA,CACA,4CAAA,CACA,aAAA,CACA,4BAAA,CAEA,kBACE,QAAA,CAIJ,MAEE,kBAAA,CAGF,OACE,eAAA,CAGF,kBAME,eAAA,CACA,gBAAA,CAEA,gJACE,SAAA,CAIJ,GACE,gBAAA,CAGF,GACE,iBAAA,CACA,oBAAA,CACA,uCAAA,CACA,sCAAA,CAGF,GACE,iBAAA,CAGF,GACE,iBAAA,CAGF,GACE,iBAAA,CAGF,cACE,cAAA,CAGF,gBACE,eAAA,CACA,UAAA,CACA,kBAAA,CACA,mBAAA,CACA,iBAAA,CACA,SAAA,CAEA,wBACE,oBAAA,CAGF,8BACE,SAAA,CAIJ,QAGE,eAAA,CAGF,GACE,QAAA,CACA,oCAAA,CAGF,MACE,wBAAA,CACA,aAAA,CACA,aAAA,CACA,eAAA,CAGF,GACE,yCAAA,CAEA,iBACE,kCAAA,CAIJ,MAEE,qCAAA,CACA,gBAAA,CCjKF,cCCE,mBAAA,EDDF,AEAA,OAEE,OAAA,CACA,QAAA,CFHF,sBEeM,iCAAA,CACA,iCAAA,EFhBN,AEKE,UAII,yCAAA,CAIJ,YAII,sCAAA,CFjBN,yBE+BM,gCAAA,CACA,kCAAA,EFhCN,AEqBE,aAII,uCAAA,CAIJ,YAII,wCAAA,CDjCN,OAEE,cAAA,CACA,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,aAAA,CACA,iBAAA,CACA,kBAAA,CACA,+DAAA,CAEA,WACE,mCAAA,CAGF,eACE,uCAAA,CAGF,cACE,sCAAA,CAOF,cACE,eAAA,CEvBJ,6CAEE,UAAA,CACA,cAAA,CACA,mCAAA,CACA,aAAA,CACA,eAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,gBAAA,CACA,eAAA,CAEA,eAAA,CACA,aAAA,CACA,UAAA,CAEA,oBAAA,CAEA,gBAAA,CACA,YAAA,CAIF,sBACE,WAAA,CACA,aAAA,CACA,aAAA,CAGF,uDAEE,kBAAA,CAIF,iCACE,YAAA,CACA,kBAAA,CACA,kBAAA,CAGF,8EAKE,UAAA,CAGF,mBACE,UAAA,CAGF,4DAIE,aAAA,CAGF,qBACE,aAAA,CAGF,6CAGE,aAAA,CAGF,gEAIE,aAAA,CAGF,6EAKE,aAAA,CAGF,yEAKE,aAAA,CAGF,yCAGE,aAAA,CAGF,6BAEE,eAAA,CAEF,cACE,iBAAA,CAGF,cACE,WAAA,CAGF,gBACE,aAAA,CAMA,wEAEE,eAAA,CACA,sBAAA,CACA,eAAA,CACA,iBAAA,CACA,aAAA,CAEA,kFACE,UAAA,CACA,SAAA,CACA,4BAAA,CACA,eAAA,CACA,2BAAA,CACA,4BAAA,CAIJ,oCACE,mCAAA,CAIJ,sBACE,iBAAA,CACA,qCAAA,CACA,iBAAA,CAEA,8BACE,iBAAA,CACA,SAAA,CACA,QAAA,CACA,SAAA,CACA,gBAAA,CACA,0BAAA,CAGF,sEAGE,wBAAA,CACA,iBAAA,CACA,SAAA,CAGF,uCACE,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CACA,kBAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,eAAA,CAEA,uDACE,wCAAA,CAKF,4DACE,YAAA,CAKF,yEACE,iBAAA,CAEA,iFACE,WAAA,CACA,iBAAA,CACA,SAAA,CACA,MAAA,CACA,KAAA,CACA,aAAA,CACA,kCAAA,CACA,WAAA,CAIJ,4CACE,wCAAA,CACA,iBAAA,CACA,qBAAA,CAGF,sDACE,iBAAA,CACA,KAAA,CACA,kCAAA,CACA,iBAAA,CACA,0BAAA,CACA,mBAAA,CACA,eAAA,CAEA,4HACE,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAGF,mEACE,iBAAA,CACA,SAAA,CAEA,eAAA,CAIJ,+CACE,UAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,kCAAA,CACA,WAAA,CACA,yBAAA,CACA,8CAAA,CAOF,mCACE,WAAA,CADF,qCACE,aAAA,CADF,oCACE,YAAA,CADF,qCACE,aAAA,CADF,sCACE,cAAA,CADF,wCACE,gBAAA,CADF,oCACE,YAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,sCACE,cAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,0CACE,kBAAA,CADF,oCACE,YAAA,CADF,qCACE,aAAA,CADF,oCACE,YAAA,CADF,oCACE,YAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,sCACE,cAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,oCACE,YAAA,CADF,sCACE,cAAA,CADF,qCACE,aAAA,CADF,qCACE,aAAA,CAMN,yBAEI,6CACE,qBAAA,CACA,eAAA,CAAA,CC7PN,iBACE,iBAAA,CAEA,iCAAA,CACA,iCAAA,CACA,iBAAA,CACA,gBAAA,CACA,0BAAA,CACA,2BAAA,CACA,qCAAA,CAGF,gBACE,aAAA,CACA,cAAA,CACA,mBAAA,CACA,eAAA,CAGF,qBACE,QAAA,CACA,WAAA,CACA,cAAA,CACA,4BAAA,CACA,eAAA,CACA,eAAA,CACA,0BAAA,CACA,eAAA,CAGF,2BACE,SAAA,CAGF,mCACE,sCAAA,CAGF,4BACE,sCAAA,CAGF,yBACE,iBACE,mBAAA,CACA,oBAAA,CACA,eAAA,CAAA,CAOJ,+GACE,YAAA,CAGF,yBACE,aAAA,CAGF,qBACE,uBAAA,CCnEF,kBACE,2FAAA,CAGA,0CACE,eAAA,CACA,oBAAA,CAGF,yEAGE,oBAAA,CACA,uBAAA,CACA,uBAAA,CACA,aAAA,CAGF,sBACE,yBAAA,CACA,gCAAA,CACA,uBAAA,CAEA,8CACE,wBAAA,CAGF,wBACE,8BAAA,CAIJ,0BACE,6BAAA,CACA,oCAAA,CACA,2BAAA,CAEA,kDACE,4BAAA,CAGF,4BACE,kCAAA,CAIJ,yBACE,4BAAA,CACA,mCAAA,CACA,0BAAA,CAEA,iDACE,2BAAA,CAGF,2BACE,iCAAA,CAIJ,0BACE,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,aAAA,CACA,oCAAA,CAEA,6BACE,YAAA,CAKA,mFACE,eAAA,CACA,gBAAA,CAIJ,kCACE,SAAA,CACA,cAAA,CChFN,kBACE,cAAA,CAEA,2EACE,aAAA,CACA,eAAA,CACA,mBAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,cAAA,CACA,QAAA,CACA,eAAA,CACA,mBAAA,CAVF,yCAyBE,YAAA,CACA,eAAA,CACA,iBAjBA,CAEA,uFACE,wBAAA,CAGF,yFACE,qBAAA,CACA,eAAA,CACA,iBAAA,CASF,+CACE,0BAAA,CAKF,+CACE,aAAA,CACA,kBAAA,CAEA,kEACE,iBAAA,CACA,oCAAA,CACA,qBAAA,CACA,eAAA,CAEA,uEACE,0BAAA,CAGF,oEACE,mBAAA,CASJ,yEACE,SAAA,CACA,eAAA,CAEA,2FACE,cAAA,CAIJ,iDACE,aAAA,CACA,kBAAA,CACA,iBAAA,CACA,kBAAA,CACA,eAAA,CACA,eAAA,CACA,0BAAA,CAEA,oLACE,0BAAA,CAMA,2EACE,UAAA,CACA,OAAA,CACA,QAAA,CACA,0CAAA,CACA,gCAAA,CACA,mCAAA,CACA,iBAAA,CACA,mBAAA,CACA,QAAA,CAKN,8EACE,YAAA,CACA,aAAA,CACA,YAAA,CAMR,yBAEI,qFACE,mBAAA,CAGF,kCACE,YAAA,CAGF,yCACE,aAAA,CAGF,gCACE,8BAAA,CACA,eAAA,CAGE,kEACE,YAAA,CACA,YAAA,CACA,aAAA,CACA,gBAAA,CAKA,cAAA,CACA,eAAA,CANA,CAGF,iDAEE,cAAA,CACA,gBAAA,CAGF,iEACE,cAAA,CACA,iBAAA,CAAA,CAOV,yBACE,kBACE,aAAA,CAEA,2EAGE,uBAAA,CAGF,4BACE,YAAA,CAGF,gCACE,YAAA,CAEA,qBAAA,CACA,qBAAA,CACA,+BAAA,CACA,eAAA,CACA,iBAAA,CACA,QAAA,CACA,OAAA,CACA,mCAAA,CACA,eAAA,CACA,gCAAA,CACA,wCAAA,CACA,eAAA,CACA,oBAAA,CACA,kBAAA,CACA,QAAA,CAAA,CAQN,wCAEE,kBAAA,CC/LF,MACE,mCAAA,CACA,+BAAA,CACA,aAAA,CACA,aAAA,CAEA,YACE,iBAAA,CAEA,gBACE,cAAA,CACA,gBAAA,CACA,aAAA,CACA,uBAAA,CAGF,eACE,cAAA,CAGF,6DAGE,kBAAA,CAGF,yBACE,eAAA,CACA,gBAAA,CACA,eAAA,CACA,4BAAA,CAGF,2BACE,oBAAA,CACA,gBAAA,CACA,oBAAA,CACA,gBAAA,CACA,kBAAA,CACA,iBAAA,CACA,0CAAA,CACA,qBAAA,CAEA,6CACE,kBAAA,CAGF,mCACE,iBAAA,CACA,+BAAA,CACA,2BAAA,CACA,yCACE,qCAAA,CAIJ,qCACE,oBAAA,CACA,4BAAA,CACA,2BAAA,CACA,2CACE,iBAAA,CACA,qCAAA,CAMR,gBACE,oCAAA,CACA,sCAAA,CACA,gBAAA,CACA,iBAAA,CACA,YAAA,CACA,cAAA,CACA,sBAAA,CACA,qBAAA,CACA,6BAAA,CAGF,eACE,WAAA,CACA,cAAA,CACA,aAAA,CAEA,kBACE,gBAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CACA,yBAAA,CAGF,+BACE,2BAAA,CAIJ,cACE,cAAA,CACA,oCAAA,CACA,iBAAA,CAEA,sCAAA,CAIJ,yBAEI,gBACE,qBAAA,CAGF,eACE,cAAA,CACA,gBAAA,CAAA,CAKN,yBACE,MACE,mBAAA,CACA,oBAAA,CAGE,gBACE,gBAAA,CACA,uBAAA,CAGF,eACE,cAAA,CAGF,6DAGE,kBAAA,CAGF,yBACE,gBAAA,CAGF,2BACE,cAAA,CACA,oBAAA,CAKF,kBACE,iBAAA,CAAA,CCzJR,oCACE,8BAAA,CACA,aAAA,CACA,mBAAA,CAEA,yBALF,oCAMI,YAAA,CAAA,CAGF,yBATF,oCAUI,cAAA,CAAA,CCTJ,MACE,gCAAA,CACA,iCAAA,CTLF,iBSwBE,cAAA,CAIA,MAAA,CAEA,oBAAA,ET9BF,ASQA,QAEE,UAAA,CACA,KAAA,CAEA,OAAA,CACA,2BAAA,CAEA,uCAAA,CACA,mCAAA,CACA,sEAAA,CAGF,SACE,cAAA,CACA,0BAAA,CAEA,UAAA,CACA,QAAA,CACA,wBAAA,CAEA,QAAA,CAEA,sCAAA,CACA,eAAA,CACA,oBAAA,CACA,8CAAA,CACA,oCAAA,CACA,mGAAA,CAEA,4BACE,SAAA,CAEF,kCACE,gCAAA,CAEF,kCACE,+BAAA,CAIJ,cACE,cAAA,CACA,SAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,YAAA,CACA,YAAA,CAKE,4CACE,aAAA,CAKE,qFACE,kDAAA,CAGF,qFACE,wBAAA,CAGF,qFACE,gDAAA,CAGF,0KAEE,uBAAA,CAON,wNAME,iBAAA,CACA,aAAA,CAGF,iCACE,aAAA,CAGF,oCACE,KAAA,CAKN,yBAEI,qCACE,YAAA,CAGF,kCACE,cAAA,CAAA,CAWJ,0OACE,6CAAA,CACA,6CAAA,CACA,eAAA,CAEA,kTACE,kBAAA,CAEA,siCAGE,eAAA,CAMR,oCAGE,aAAA,CAEA,4CACE,yBAAA,CAGF,wCACE,cAAA,CAIJ,8BACE,SAAA,CACA,QAAA,CAEA,kCACE,cAAA,CAKJ,yBACE,SACE,cAAA,CACA,iCAAA,CAGF,MACE,wCAAA,CAAA,CAKJ,yBACE,SACE,KAAA,CACA,gCAAA,CACA,2BAAA,CAGF,MACE,cAAA,CAKE,uCACE,uBAAA,CAKF,oCACE,aAAA,CAAA,CAOR,yBACE,GACE,gBAAA,CAAA,CC9MJ,QACE,+EAAA,CAIA,uDAAA,CACA,qCAAA,CAEA,cACE,gCAAA,CACA,mCAAA,CACA,oCAAA,CACA,kBAAA,CAGF,mBACE,gBAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CAGF,8BACE,YAAA,CACA,iBAAA,CACA,qBAAA,CACA,2BAAA,CACA,6BAAA,CACA,gCAAA,CACA,oCAAA,CACA,kBAAA,CACA,eAAA,CAEA,0CACE,aAAA,CACA,kBAAA,CAKN,yBACE,QACE,iBAAA,CAEA,kBACE,YAAA,CAGF,mBACE,0BAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAAA,CAQN,8BACE,oBAAA,CAEA,gBAEE,kBAAA,CACA,aAAA,CAQF,iCACE,iBAAA,CACA,oBAAA,CACA,kBAAA,CACA,qCAAA,CAEA,6CACE,aAAA,CAKN,yBAEI,iCACE,aAAA,CAAA,CAKN,yBAEI,yDAEE,mBAAA,CAKF,iGAEE,kBAAA,CACA,4CAAA,CAAA,CAQN,uBACE,iBAAA,CACA,SAAA,CACA,SAAA,CACA,YAAA,CACA,aAAA,CACA,cAAA,CAGF,6BACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,aAAA,CACA,cAAA,CACA,cAAA,CAEA,kCACE,oBAAA,CACA,UAAA,CACA,UAAA,CACA,iBAAA,CACA,8BAAA,CACA,6BAAA,CAEA,+CACE,YAAA,CAKN,oCACE,uBACE,aAAA,CAAA,CAOJ,oBACE,YAAA,CACA,WAAA,CACA,gBAAA,CACA,QAAA,CACA,cAAA,CACA,mBAAA,CACA,UAAA,CACA,cAAA,CACA,0BACE,SAAA,CAEF,0BACE,aAAA,CACA,cAAA,CFzKJ,qBACE,8BAAA,CACA,aAAA,CACA,mBAAA,CAEA,yBALF,qBAMI,YAAA,CAAA,CAGF,yBATF,qBAUI,cAAA,CAAA,CGTJ,MACE,mBAAA,CACA,aAAA,CAGF,WAEE,gBAAA,CACA,mBAAA,CACA,aAAA,CAEA,sBACE,cAAA,CACA,gBAAA,CAEA,uCACE,eAAA,CACA,2BAAA,CAGF,sCACE,eAAA,CACA,yBAAA,CAIJ,sBACE,oBAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CAIJ,yBAEI,yBACE,cAAA,CACA,UAAA,CAGF,yBACE,cAAA,CAAA,CAKN,UAEE,gBAAA,CACA,gBAAA,CAEA,iBACE,eAAA,CACA,YAAA,CACA,oCAAA,CACA,sCAAA,CACA,gBAAA,CACA,aAAA,CAGF,gBACE,WAAA,CChEF,YACE,SAAA,CACA,QAAA,CACA,oBAAA,CAGF,WACE,oBAAA,CAGF,uBACE,YAAA,CACA,uCAAA,CACA,sCAAA,CACA,sBAAA,CAEA,yBACE,eAAA,CAGF,0CACE,aAAA,CACA,mBAAA,CACA,eAAA,CACA,4BAAA,CAIJ,wBACE,gBAAA,CAEA,kHACE,iBAAA,CAGF,2CACE,iBAAA,CACA,eAAA,CAKN,yBAEI,uBACE,aAAA,CAEA,kGAIE,oBAAA,CAIJ,wBACE,cAAA,CAAA,CAKN,iBACE,mBAAA,CACA,0BAAA,CACA,eAAA,CACA,eAAA,CACA,oCAAA,CACA,UAAA,CACA,qBAAA,CACA,QAAA,CACA,oCAAA,CAEA,wBACE,iBAAA,CACA,UAAA,CACA,SAAA,CAIJ,oCACE,aAAA,CACA,eAAA,CACA,oBAAA,CACA,mBAAA,CACA,oCAAA,CACA,QAAA,CACA,+BAAA,CACA,eAAA,CACA,UAAA,CACA,qBAAA,CAMA,uDACE,kCAAA,CAIJ,cACE,cAAA,CAGF,eACE,cAAA,CAEA,2CACE,0BAAA,CAGF,sBACE,eAAA,CAEA,sCAAA,CAGF,sCACE,eAAA,CACA,6BAAA,CAGF,yCACE,eAAA,CACA,6BAAA,CC/HJ,SACE,iBAAA,CACA,SAAA,CACA,UAAA,CACA,SAAA,CACA,WAAA,CACA,eAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CCTA,0BACE,qBAAA,CCFJ,2BACE,uBAAA,CAGF,2BACE,0CAAA,CAGF,gDAEE,0BAAA,CACA,SAAA","sourcesContent":[":root {\n  // brand colors\n  --c-brand: #3eaf7c;\n  --c-brand-light: #4abf8a;\n\n  // background colors\n  --c-bg: #ffffff;\n  --c-bg-light: #f3f4f5;\n  --c-bg-lighter: #eeeeee;\n  --c-bg-navbar: var(--c-bg);\n  --c-bg-sidebar: var(--c-bg);\n  --c-bg-arrow: #cccccc;\n\n  // text colors\n  --c-text: #2c3e50;\n  --c-text-accent: var(--c-brand);\n  --c-text-light: #3a5169;\n  --c-text-lighter: #4e6e8e;\n  --c-text-lightest: #6a8bad;\n  --c-text-quote: #999999;\n\n  // border colors\n  --c-border: #eaecef;\n  --c-border-dark: #dfe2e5;\n\n  // custom container colors\n  --c-tip: #42b983;\n  --c-tip-bg: var(--c-bg-light);\n  --c-tip-title: var(--c-text);\n  --c-tip-text: var(--c-text);\n  --c-tip-text-accent: var(--c-text-accent);\n  --c-warning: #e7c000;\n  --c-warning-bg: #fffae3;\n  --c-warning-title: #ad9000;\n  --c-warning-text: #746000;\n  --c-warning-text-accent: var(--c-text);\n  --c-danger: #cc0000;\n  --c-danger-bg: #ffe0e0;\n  --c-danger-title: #990000;\n  --c-danger-text: #660000;\n  --c-danger-text-accent: var(--c-text);\n  --c-details-bg: #eeeeee;\n\n  // badge component colors\n  --c-badge-tip: var(--c-tip);\n  --c-badge-warning: var(--c-warning);\n  --c-badge-danger: var(--c-danger);\n\n  // transition vars\n  --t-color: 0.3s ease;\n  --t-transform: 0.3s ease;\n\n  // code blocks vars\n  --code-bg-color: #282c34;\n  --code-hl-bg-color: rgba(0, 0, 0, 0.66);\n  --code-ln-color: #9e9e9e;\n  --code-ln-wrapper-width: 3.5rem;\n\n  // font vars\n  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  --font-family-code: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\n  // layout vars\n  --navbar-height: 3.6rem;\n  --navbar-padding-v: 0.7rem;\n  --navbar-padding-h: 1.5rem;\n  --sidebar-width: 20rem;\n  --sidebar-width-mobile: calc(var(--sidebar-width) * 0.82);\n  --content-width: 740px;\n  --homepage-width: 960px;\n}\n\n// plugin-back-to-top\n.back-to-top {\n  --back-to-top-color: var(--c-brand);\n  --back-to-top-color-hover: var(--c-brand-light);\n}\n\n// plugin-docsearch\n.DocSearch {\n  --docsearch-primary-color: var(--c-brand);\n  --docsearch-text-color: var(--c-text);\n  --docsearch-highlight-color: var(--c-brand);\n  --docsearch-muted-color: var(--c-text-quote);\n  --docsearch-container-background: rgba(9, 10, 17, 0.8);\n  --docsearch-modal-background: var(--c-bg-light);\n  --docsearch-searchbox-background: var(--c-bg-lighter);\n  --docsearch-searchbox-focus-background: var(--c-bg);\n  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--c-brand);\n  --docsearch-hit-color: var(--c-text-light);\n  --docsearch-hit-active-color: var(--c-bg);\n  --docsearch-hit-background: var(--c-bg);\n  --docsearch-hit-shadow: 0 1px 3px 0 var(--c-border-dark);\n  --docsearch-footer-background: var(--c-bg);\n}\n\n// plugin-medium-zoom\n.medium-zoom-overlay {\n  --medium-zoom-bg-color: var(--c-bg);\n}\n\n// plugin-nprogress\n#nprogress {\n  --nprogress-color: var(--c-brand);\n}\n\n// plugin-pwa-popup\n.pwa-popup {\n  --pwa-popup-text-color: var(--c-text);\n  --pwa-popup-bg-color: var(--c-bg);\n  --pwa-popup-border-color: var(--c-brand);\n  --pwa-popup-shadow: 0 4px 16px var(--c-brand);\n  --pwa-popup-btn-text-color: var(--c-bg);\n  --pwa-popup-btn-bg-color: var(--c-brand);\n  --pwa-popup-btn-hover-bg-color: var(--c-brand-light);\n}\n\n// plugin-search\n.search-box {\n  --search-bg-color: var(--c-bg);\n  --search-accent-color: var(--c-brand);\n  --search-text-color: var(--c-text);\n  --search-border-color: var(--c-border);\n\n  --search-item-text-color: var(--c-text-lighter);\n  --search-item-focus-bg-color: var(--c-bg-light);\n}\n","html.dark {\n  // brand colors\n  --c-brand: #3aa675;\n  --c-brand-light: #349469;\n\n  // background colors\n  --c-bg: #22272e;\n  --c-bg-light: #2b313a;\n  --c-bg-lighter: #262c34;\n\n  // text colors\n  --c-text: #adbac7;\n  --c-text-light: #96a7b7;\n  --c-text-lighter: #8b9eb0;\n  --c-text-lightest: #8094a8;\n\n  // border colors\n  --c-border: #3e4c5a;\n  --c-border-dark: #34404c;\n\n  // custom container colors\n  --c-tip: #318a62;\n  --c-warning: #ceab00;\n  --c-warning-bg: #7e755b;\n  --c-warning-title: #ceac03;\n  --c-warning-text: #362e00;\n  --c-danger: #940000;\n  --c-danger-bg: #806161;\n  --c-danger-title: #610000;\n  --c-danger-text: #3a0000;\n  --c-details-bg: #323843;\n\n  // code blocks vars\n  --code-hl-bg-color: #363b46;\n}\n\n// plugin-docsearch\nhtml.dark .DocSearch {\n  --docsearch-logo-color: var(--c-text);\n  --docsearch-modal-shadow: inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;\n  --docsearch-key-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d,\n    0 2px 2px 0 rgba(3, 4, 9, 0.3);\n  --docsearch-key-gradient: linear-gradient(-225deg, #444950, #1c1e21);\n  --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),\n    0 -4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n","html,\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: var(--c-bg);\n  transition: background-color var(--t-color);\n}\n\nhtml.dark {\n  color-scheme: dark;\n}\n\nbody {\n  font-family: var(--font-family);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 16px;\n  color: var(--c-text);\n}\n\na {\n  font-weight: 500;\n  color: var(--c-text-accent);\n  text-decoration: none;\n  overflow-wrap: break-word;\n}\n\np a code {\n  font-weight: 400;\n  color: var(--c-text-accent);\n}\n\nkbd {\n  font-family: var(--font-family-code);\n  background: var(--c-bg-lighter);\n  border: solid 0.15rem var(--c-border-dark);\n  border-bottom: solid 0.25rem var(--c-border-dark);\n  border-radius: 0.15rem;\n  padding: 0 0.15em;\n}\n\ncode {\n  font-family: var(--font-family-code);\n  color: var(--c-text-lighter);\n  padding: 0.25rem 0.5rem;\n  margin: 0;\n  font-size: 0.85em;\n  background-color: var(--c-bg-light);\n  border-radius: 3px;\n  overflow-wrap: break-word;\n  transition: background-color var(--t-color), color var(--t-color);\n}\n\nblockquote {\n  font-size: 1rem;\n  color: var(--c-text-quote);\n  border-left: 0.2rem solid var(--c-border-dark);\n  margin: 1rem 0;\n  padding: 0.25rem 0 0.25rem 1rem;\n\n  & > p {\n    margin: 0;\n  }\n}\n\nul,\nol {\n  padding-left: 1.2em;\n}\n\nstrong {\n  font-weight: 600;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n  line-height: 1.25;\n\n  &:hover .header-anchor {\n    opacity: 1;\n  }\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nh2 {\n  font-size: 1.65rem;\n  padding-bottom: 0.3rem;\n  border-bottom: 1px solid var(--c-border);\n  transition: border-color var(--t-color);\n}\n\nh3 {\n  font-size: 1.35rem;\n}\n\nh4 {\n  font-size: 1.15rem;\n}\n\nh5 {\n  font-size: 1.05rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\na.header-anchor {\n  font-size: 0.85em;\n  float: left;\n  margin-left: -0.87em;\n  padding-right: 0.23em;\n  margin-top: 0.125em;\n  opacity: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:focus-visible {\n    opacity: 1;\n  }\n}\n\np,\nul,\nol {\n  line-height: 1.7;\n}\n\nhr {\n  border: 0;\n  border-top: 1px solid var(--c-border);\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 1rem 0;\n  display: block;\n  overflow-x: auto;\n}\n\ntr {\n  border-top: 1px solid var(--c-border-dark);\n\n  &:nth-child(2n) {\n    background-color: var(--c-bg-light);\n  }\n}\n\nth,\ntd {\n  border: 1px solid var(--c-border-dark);\n  padding: 0.6em 1em;\n}\n",null,".badge {\n  display: inline-block;\n  font-size: 14px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 3px;\n  padding: 0 6px;\n  color: var(--c-bg);\n  vertical-align: top;\n  transition: color var(--t-color), background-color var(--t-color);\n\n  &.tip {\n    background-color: var(--c-badge-tip);\n  }\n\n  &.warning {\n    background-color: var(--c-badge-warning);\n  }\n\n  &.danger {\n    background-color: var(--c-badge-danger);\n  }\n\n  .table-of-contents & {\n    vertical-align: middle;\n  }\n\n  & + & {\n    margin-left: 5px;\n  }\n}\n",".arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n\n  &.up {\n    border: {\n      left: 4px solid transparent;\n      right: 4px solid transparent;\n      bottom: 6px solid var(--c-bg-arrow);\n    }\n  }\n\n  &.down {\n    border: {\n      left: 4px solid transparent;\n      right: 4px solid transparent;\n      top: 6px solid var(--c-bg-arrow);\n    }\n  }\n\n  &.right {\n    border: {\n      top: 4px solid transparent;\n      bottom: 4px solid transparent;\n      left: 6px solid var(--c-bg-arrow);\n    }\n  }\n\n  &.left {\n    border: {\n      top: 4px solid transparent;\n      bottom: 4px solid transparent;\n      right: 6px solid var(--c-bg-arrow);\n    }\n  }\n}\n","@import '_variables';\n\n// ===============================\n// Forked and modified from prismjs/themes/prism-tomorrow.css\n\ncode[class*='language-'],\npre[class*='language-'] {\n  color: #ccc;\n  background: none;\n  font-family: var(--font-family-code);\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\n/* Code blocks */\npre[class*='language-'] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n}\n\n:not(pre) > code[class*='language-'],\npre[class*='language-'] {\n  background: #2d2d2d;\n}\n\n/* Inline code */\n:not(pre) > code[class*='language-'] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #999;\n}\n\n.token.punctuation {\n  color: #ccc;\n}\n\n.token.tag,\n.token.attr-name,\n.token.namespace,\n.token.deleted {\n  color: #ec5975;\n}\n\n.token.function-name {\n  color: #6196cc;\n}\n\n.token.boolean,\n.token.number,\n.token.function {\n  color: #f08d49;\n}\n\n.token.property,\n.token.class-name,\n.token.constant,\n.token.symbol {\n  color: #f8c555;\n}\n\n.token.selector,\n.token.important,\n.token.atrule,\n.token.keyword,\n.token.builtin {\n  color: #cc99cd;\n}\n\n.token.string,\n.token.char,\n.token.attr-value,\n.token.regex,\n.token.variable {\n  color: #7ec699;\n}\n\n.token.operator,\n.token.entity,\n.token.url {\n  color: #67cdcc;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n\n.token.entity {\n  cursor: help;\n}\n\n.token.inserted {\n  color: #3eaf7c;\n}\n\n// ===============================\n\n.theme-default-content {\n  pre,\n  pre[class*='language-'] {\n    line-height: 1.4;\n    padding: 1.25rem 1.5rem;\n    margin: 0.85rem 0;\n    border-radius: 6px;\n    overflow: auto;\n\n    code {\n      color: #fff;\n      padding: 0;\n      background-color: transparent;\n      border-radius: 0;\n      -webkit-font-smoothing: auto;\n      -moz-osx-font-smoothing: auto;\n    }\n  }\n\n  .line-number {\n    font-family: var(--font-family-code);\n  }\n}\n\ndiv[class*='language-'] {\n  position: relative;\n  background-color: var(--code-bg-color);\n  border-radius: 6px;\n\n  &::before {\n    position: absolute;\n    z-index: 3;\n    top: 0.8em;\n    right: 1em;\n    font-size: 0.75rem;\n    color: var(--code-ln-color);\n  }\n\n  pre,\n  pre[class*='language-'] {\n    // force override the background color to be compatible with shiki\n    background: transparent !important;\n    position: relative;\n    z-index: 1;\n  }\n\n  .highlight-lines {\n    user-select: none;\n    padding-top: 1.3rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    line-height: 1.4;\n\n    .highlight-line {\n      background-color: var(--code-hl-bg-color);\n    }\n  }\n\n  &:not(.line-numbers-mode) {\n    .line-numbers {\n      display: none;\n    }\n  }\n\n  &.line-numbers-mode {\n    .highlight-lines .highlight-line {\n      position: relative;\n\n      &::before {\n        content: ' ';\n        position: absolute;\n        z-index: 2;\n        left: 0;\n        top: 0;\n        display: block;\n        width: var(--code-ln-wrapper-width);\n        height: 100%;\n      }\n    }\n\n    pre {\n      margin-left: var(--code-ln-wrapper-width);\n      padding-left: 1rem;\n      vertical-align: middle;\n    }\n\n    .line-numbers {\n      position: absolute;\n      top: 0;\n      width: var(--code-ln-wrapper-width);\n      text-align: center;\n      color: var(--code-ln-color);\n      padding-top: 1.25rem;\n      line-height: 1.4;\n\n      br {\n        user-select: none;\n      }\n\n      .line-number {\n        position: relative;\n        z-index: 3;\n        user-select: none;\n        font-size: 0.85em;\n      }\n    }\n\n    &::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: var(--code-ln-wrapper-width);\n      height: 100%;\n      border-radius: 6px 0 0 6px;\n      border-right: 1px solid var(--code-hl-bg-color);\n    }\n  }\n}\n\n@each $lang in $codeLang {\n  div[class*='language-'].ext-#{$lang} {\n    &:before {\n      content: '' + $lang;\n    }\n  }\n}\n\n// narrow mobile\n@media (max-width: $MQMobileNarrow) {\n  .theme-default-content {\n    div[class*='language-'] {\n      margin: 0.85rem -1.5rem;\n      border-radius: 0;\n    }\n  }\n}\n","@import '_variables';\n\n/**\n * code-group\n */\n.code-group__nav {\n  margin-top: 0.85rem;\n  // 2 * margin + border-radius of <pre> tag\n  margin-bottom: calc(-1.7rem - 6px);\n  padding-bottom: calc(1.7rem - 6px);\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  background-color: var(--code-bg-color);\n}\n\n.code-group__ul {\n  margin: auto 0;\n  padding-left: 0;\n  display: inline-flex;\n  list-style: none;\n}\n\n.code-group__nav-tab {\n  border: 0;\n  padding: 5px;\n  cursor: pointer;\n  background-color: transparent;\n  font-size: 0.85em;\n  line-height: 1.4;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n\n.code-group__nav-tab:focus {\n  outline: none;\n}\n\n.code-group__nav-tab:focus-visible {\n  outline: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.code-group__nav-tab-active {\n  border-bottom: var(--c-brand) 1px solid;\n}\n\n@media (max-width: $MQMobileNarrow) {\n  .code-group__nav {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n    border-radius: 0;\n  }\n}\n\n/**\n * code-group-item\n */\n.code-group-item {\n  display: none;\n}\n\n.code-group-item__active {\n  display: block;\n}\n\n.code-group-item > pre {\n  background-color: orange;\n}\n",".custom-container {\n  transition: color var(--t-color), border-color var(--t-color),\n    background-color var(--t-color);\n\n  .custom-container-title {\n    font-weight: 600;\n    margin-bottom: -0.4rem;\n  }\n\n  &.tip,\n  &.warning,\n  &.danger {\n    padding: 0.1rem 1.5rem;\n    border-left-width: 0.5rem;\n    border-left-style: solid;\n    margin: 1rem 0;\n  }\n\n  &.tip {\n    border-color: var(--c-tip);\n    background-color: var(--c-tip-bg);\n    color: var(--c-tip-text);\n\n    .custom-container-title {\n      color: var(--c-tip-title);\n    }\n\n    a {\n      color: var(--c-tip-text-accent);\n    }\n  }\n\n  &.warning {\n    border-color: var(--c-warning);\n    background-color: var(--c-warning-bg);\n    color: var(--c-warning-text);\n\n    .custom-container-title {\n      color: var(--c-warning-title);\n    }\n\n    a {\n      color: var(--c-warning-text-accent);\n    }\n  }\n\n  &.danger {\n    border-color: var(--c-danger);\n    background-color: var(--c-danger-bg);\n    color: var(--c-danger-text);\n\n    .custom-container-title {\n      color: var(--c-danger-title);\n    }\n\n    a {\n      color: var(--c-danger-text-accent);\n    }\n  }\n\n  &.details {\n    display: block;\n    position: relative;\n    border-radius: 2px;\n    margin: 1.6em 0;\n    padding: 1.6em;\n    background-color: var(--c-details-bg);\n\n    h4 {\n      margin-top: 0;\n    }\n\n    figure,\n    p {\n      &:last-child {\n        margin-bottom: 0;\n        padding-bottom: 0;\n      }\n    }\n\n    summary {\n      outline: none;\n      cursor: pointer;\n    }\n  }\n}\n","@import '_variables';\n\n.dropdown-wrapper {\n  cursor: pointer;\n\n  .dropdown-title {\n    display: block;\n    font-size: 0.9rem;\n    font-family: inherit;\n    cursor: inherit;\n    padding: inherit;\n    line-height: 1.4rem;\n    background: transparent;\n    border: none;\n    font-weight: 500;\n    color: var(--c-text);\n\n    &:hover {\n      border-color: transparent;\n    }\n\n    .arrow {\n      vertical-align: middle;\n      margin-top: -1px;\n      margin-left: 0.4rem;\n    }\n  }\n\n  .mobile-dropdown-title {\n    @extend .dropdown-title;\n    display: none;\n    font-weight: 600;\n    font-size: inherit;\n    &:hover {\n      color: var(--c-text-accent);\n    }\n  }\n\n  .nav-dropdown {\n    .dropdown-item {\n      color: inherit;\n      line-height: 1.7rem;\n\n      .dropdown-subtitle {\n        margin: 0.45rem 0 0;\n        border-top: 1px solid var(--c-border);\n        padding: 1rem 0 0.45rem 0;\n        font-size: 0.9rem;\n\n        & > span {\n          padding: 0 1.5rem 0 1.25rem;\n        }\n\n        & > a {\n          font-weight: inherit;\n          &.router-link-active {\n            &::after {\n              display: none;\n            }\n          }\n        }\n      }\n\n      .dropdown-subitem-wrapper {\n        padding: 0;\n        list-style: none;\n\n        .dropdown-subitem {\n          font-size: 0.9em;\n        }\n      }\n\n      a {\n        display: block;\n        line-height: 1.7rem;\n        position: relative;\n        border-bottom: none;\n        font-weight: 400;\n        margin-bottom: 0;\n        padding: 0 1.5rem 0 1.25rem;\n\n        &:hover {\n          color: var(--c-text-accent);\n        }\n\n        &.router-link-active {\n          color: var(--c-text-accent);\n\n          &::after {\n            content: '';\n            width: 0;\n            height: 0;\n            border-left: 5px solid var(--c-text-accent);\n            border-top: 3px solid transparent;\n            border-bottom: 3px solid transparent;\n            position: absolute;\n            top: calc(50% - 2px);\n            left: 9px;\n          }\n        }\n      }\n\n      &:first-child .dropdown-subtitle {\n        margin-top: 0;\n        padding-top: 0;\n        border-top: 0;\n      }\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .dropdown-wrapper {\n    &.open .dropdown-title {\n      margin-bottom: 0.5rem;\n    }\n\n    .dropdown-title {\n      display: none;\n    }\n\n    .mobile-dropdown-title {\n      display: block;\n    }\n\n    .nav-dropdown {\n      transition: height 0.1s ease-out;\n      overflow: hidden;\n\n      .dropdown-item {\n        .dropdown-subtitle {\n          border-top: 0;\n          margin-top: 0;\n          padding-top: 0;\n          padding-bottom: 0;\n        }\n\n        .dropdown-subtitle,\n        & > a {\n          font-size: 15px;\n          line-height: 2rem;\n        }\n\n        .dropdown-subitem {\n          font-size: 14px;\n          padding-left: 1rem;\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: ($MQMobile + 1)) {\n  .dropdown-wrapper {\n    height: 1.8rem;\n\n    &:hover .nav-dropdown,\n    &.open .nav-dropdown {\n      // override the inline style.\n      display: block !important;\n    }\n\n    &.open:blur {\n      display: none;\n    }\n\n    .nav-dropdown {\n      display: none;\n      // Avoid height shaked by clicking\n      height: auto !important;\n      box-sizing: border-box;\n      max-height: calc(100vh - 2.7rem);\n      overflow-y: auto;\n      position: absolute;\n      top: 100%;\n      right: 0;\n      background-color: var(--c-bg-navbar);\n      padding: 0.6rem 0;\n      border: 1px solid var(--c-border);\n      border-bottom-color: var(--c-border-dark);\n      text-align: left;\n      border-radius: 0.25rem;\n      white-space: nowrap;\n      margin: 0;\n    }\n  }\n}\n\n/**\n * transition\n */\n.dropdown-enter-from,\n.dropdown-leave-to {\n  height: 0 !important;\n}\n","@import '_variables';\n\n.home {\n  padding: var(--navbar-height) 2rem 0;\n  max-width: var(--homepage-width);\n  margin: 0px auto;\n  display: block;\n\n  .hero {\n    text-align: center;\n\n    img {\n      max-width: 100%;\n      max-height: 280px;\n      display: block;\n      margin: 3rem auto 1.5rem;\n    }\n\n    h1 {\n      font-size: 3rem;\n    }\n\n    h1,\n    .description,\n    .actions {\n      margin: 1.8rem auto;\n    }\n\n    .description {\n      max-width: 35rem;\n      font-size: 1.6rem;\n      line-height: 1.3;\n      color: var(--c-text-lightest);\n    }\n\n    .action-button {\n      display: inline-block;\n      font-size: 1.2rem;\n      padding: 0.8rem 1.6rem;\n      border-width: 2px;\n      border-style: solid;\n      border-radius: 4px;\n      transition: background-color var(--t-color);\n      box-sizing: border-box;\n\n      &:not(:first-child) {\n        margin-left: 1.5rem;\n      }\n\n      &.primary {\n        color: var(--c-bg);\n        background-color: var(--c-brand);\n        border-color: var(--c-brand);\n        &:hover {\n          background-color: var(--c-brand-light);\n        }\n      }\n\n      &.secondary {\n        color: var(--c-brand);\n        background-color: var(--c-bg);\n        border-color: var(--c-brand);\n        &:hover {\n          color: var(--c-bg);\n          background-color: var(--c-brand-light);\n        }\n      }\n    }\n  }\n\n  .features {\n    border-top: 1px solid var(--c-border);\n    transition: border-color var(--t-color);\n    padding: 1.2rem 0;\n    margin-top: 2.5rem;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    align-content: stretch;\n    justify-content: space-between;\n  }\n\n  .feature {\n    flex-grow: 1;\n    flex-basis: 30%;\n    max-width: 30%;\n\n    h2 {\n      font-size: 1.4rem;\n      font-weight: 500;\n      border-bottom: none;\n      padding-bottom: 0;\n      color: var(--c-text-light);\n    }\n\n    p {\n      color: var(--c-text-lighter);\n    }\n  }\n\n  .footer {\n    padding: 2.5rem;\n    border-top: 1px solid var(--c-border);\n    text-align: center;\n    color: var(--c-text-lighter);\n    transition: border-color var(--t-color);\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .home {\n    .features {\n      flex-direction: column;\n    }\n\n    .feature {\n      max-width: 100%;\n      padding: 0 2.5rem;\n    }\n  }\n}\n\n@media (max-width: $MQMobileNarrow) {\n  .home {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n\n    .hero {\n      img {\n        max-height: 210px;\n        margin: 2rem auto 1.2rem;\n      }\n\n      h1 {\n        font-size: 2rem;\n      }\n\n      h1,\n      .description,\n      .actions {\n        margin: 1.2rem auto;\n      }\n\n      .description {\n        font-size: 1.2rem;\n      }\n\n      .action-button {\n        font-size: 1rem;\n        padding: 0.6rem 1.2rem;\n      }\n    }\n\n    .feature {\n      h2 {\n        font-size: 1.25rem;\n      }\n    }\n  }\n}\n","@import '_variables';\n\n%wrapper {\n  max-width: var(--content-width);\n  margin: 0 auto;\n  padding: 2rem 2.5rem;\n\n  @media (max-width: $MQNarrow) {\n    padding: 2rem;\n  }\n\n  @media (max-width: $MQMobileNarrow) {\n    padding: 1.5rem;\n  }\n}\n","@import '_variables';\n@import '_wrapper';\n\n.page {\n  padding-top: var(--navbar-height);\n  padding-left: var(--sidebar-width);\n}\n\n.navbar {\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: var(--navbar-height);\n  box-sizing: border-box;\n  border-bottom: 1px solid var(--c-border);\n  background-color: var(--c-bg-navbar);\n  transition: background-color var(--t-color), border-color var(--t-color);\n}\n\n.sidebar {\n  font-size: 16px;\n  width: var(--sidebar-width);\n  position: fixed;\n  z-index: 10;\n  margin: 0;\n  top: var(--navbar-height);\n  left: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  border-right: 1px solid var(--c-border);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--c-brand) var(--c-border);\n  background-color: var(--c-bg-sidebar);\n  transition: transform var(--t-transform), background-color var(--t-color),\n    border-color var(--t-color);\n  &::-webkit-scrollbar {\n    width: 7px;\n  }\n  &::-webkit-scrollbar-track {\n    background-color: var(--c-border);\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: var(--c-brand);\n  }\n}\n\n.sidebar-mask {\n  position: fixed;\n  z-index: 9;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n}\n\n.theme-container {\n  &.sidebar-open {\n    .sidebar-mask {\n      display: block;\n    }\n\n    .navbar > .toggle-sidebar-button .icon {\n      span {\n        &:nth-child(1) {\n          transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);\n        }\n\n        &:nth-child(2) {\n          transform: scale3d(0, 1, 1);\n        }\n\n        &:nth-child(3) {\n          transform: rotate(-45deg) translate3d(6px, -6px, 0);\n        }\n\n        &:nth-child(1),\n        &:nth-child(3) {\n          transform-origin: center;\n        }\n      }\n    }\n  }\n\n  &.no-navbar {\n    .theme-default-content:not(.custom) > h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin-top: 1.5rem;\n      padding-top: 0;\n    }\n\n    .page {\n      padding-top: 0;\n    }\n\n    .sidebar {\n      top: 0;\n    }\n  }\n}\n\n@media (min-width: ($MQMobile + 1px)) {\n  .theme-container.no-sidebar {\n    .sidebar {\n      display: none;\n    }\n\n    .page {\n      padding-left: 0;\n    }\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  .theme-default-content:not(.custom) > & {\n    margin-top: calc(0.5rem - var(--navbar-height));\n    padding-top: calc(1rem + var(--navbar-height));\n    margin-bottom: 0;\n\n    &:first-child {\n      margin-bottom: 1rem;\n\n      + p,\n      + pre,\n      + .custom-container {\n        margin-top: 2rem;\n      }\n    }\n  }\n}\n\n.theme-default-content:not(.custom) {\n  @extend %wrapper;\n\n  padding-top: 0;\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  img {\n    max-width: 100%;\n  }\n}\n\n.theme-default-content.custom {\n  padding: 0;\n  margin: 0;\n\n  img {\n    max-width: 100%;\n  }\n}\n\n// narrow desktop / iPad\n@media (max-width: $MQNarrow) {\n  .sidebar {\n    font-size: 15px;\n    width: var(--sidebar-width-mobile);\n  }\n\n  .page {\n    padding-left: var(--sidebar-width-mobile);\n  }\n}\n\n// wide mobile\n@media (max-width: $MQMobile) {\n  .sidebar {\n    top: 0;\n    padding-top: var(--navbar-height);\n    transform: translateX(-100%);\n  }\n\n  .page {\n    padding-left: 0;\n  }\n\n  .theme-container {\n    &.sidebar-open {\n      .sidebar {\n        transform: translateX(0);\n      }\n    }\n\n    &.no-navbar {\n      .sidebar {\n        padding-top: 0;\n      }\n    }\n  }\n}\n\n// narrow mobile\n@media (max-width: $MQMobileNarrow) {\n  h1 {\n    font-size: 1.9rem;\n  }\n}\n","@import '_variables';\n\n.navbar {\n  --navbar-line-height: calc(\n    var(--navbar-height) - 2 * var(--navbar-padding-v)\n  );\n\n  padding: var(--navbar-padding-v) var(--navbar-padding-h);\n  line-height: var(--navbar-line-height);\n\n  .logo {\n    height: var(--navbar-line-height);\n    min-width: var(--navbar-line-height);\n    margin-right: var(--navbar-padding-v);\n    vertical-align: top;\n  }\n\n  .site-name {\n    font-size: 1.3rem;\n    font-weight: 600;\n    color: var(--c-text);\n    position: relative;\n  }\n\n  .navbar-links-wrapper {\n    display: flex;\n    position: absolute;\n    box-sizing: border-box;\n    top: var(--navbar-padding-v);\n    right: var(--navbar-padding-h);\n    height: var(--navbar-line-height);\n    padding-left: var(--navbar-padding-h);\n    white-space: nowrap;\n    font-size: 0.9rem;\n\n    .search-box {\n      flex: 0 0 auto;\n      vertical-align: top;\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .navbar {\n    padding-left: 4rem;\n\n    .can-hide {\n      display: none;\n    }\n\n    .site-name {\n      width: calc(100vw - 9.4rem);\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n  }\n}\n\n/**\n * navbar-links\n */\n.navbar-links {\n  display: inline-block;\n\n  a {\n    display: inline-block;\n    line-height: 1.4rem;\n    color: inherit;\n\n    &:hover,\n    &.router-link-active {\n      color: var(--c-text-accent);\n    }\n  }\n\n  .navbar-links-item {\n    position: relative;\n    display: inline-block;\n    margin-left: 1.5rem;\n    line-height: var(--navbar-line-height);\n\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .navbar-links {\n    .navbar-links-item {\n      margin-left: 0;\n    }\n  }\n}\n\n@media (min-width: $MQMobile) {\n  .navbar-links a {\n    &:hover,\n    &.router-link-active {\n      color: var(--c-text);\n    }\n  }\n\n  .navbar-links-item > a:not(.external) {\n    &:hover,\n    &.router-link-active {\n      margin-bottom: -2px;\n      border-bottom: 2px solid var(--c-text-accent);\n    }\n  }\n}\n\n/**\n * toggle sidebar button\n */\n.toggle-sidebar-button {\n  position: absolute;\n  top: 0.6rem;\n  left: 1rem;\n  display: none;\n  padding: 0.6rem;\n  cursor: pointer;\n}\n\n.toggle-sidebar-button .icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 1.25rem;\n  height: 1.25rem;\n  cursor: inherit;\n\n  span {\n    display: inline-block;\n    width: 100%;\n    height: 2px;\n    border-radius: 2px;\n    background-color: var(--c-text);\n    transition: transform ease 0.3s;\n\n    &:nth-child(2) {\n      margin: 6px 0;\n    }\n  }\n}\n\n@media screen and (max-width: $MQMobile) {\n  .toggle-sidebar-button {\n    display: block;\n  }\n}\n\n/**\n * toggle dark button\n */\n.toggle-dark-button {\n  display: flex;\n  margin: auto;\n  margin-left: 1rem;\n  border: 0;\n  background: none;\n  color: var(--c-text);\n  opacity: 0.8;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n  .icon {\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n}\n","@import '_variables';\n@import '_wrapper';\n\n.page {\n  padding-bottom: 2rem;\n  display: block;\n}\n\n.page-meta {\n  @extend %wrapper;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  overflow: auto;\n\n  .meta-item {\n    cursor: default;\n    margin-top: 0.8rem;\n\n    .meta-item-label {\n      font-weight: 500;\n      color: var(--c-text-lighter);\n    }\n\n    .meta-item-info {\n      font-weight: 400;\n      color: var(--c-text-quote);\n    }\n  }\n\n  .edit-link {\n    display: inline-block;\n    margin-right: 0.25rem;\n  }\n\n  .last-updated {\n    float: right;\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .page-meta {\n    .last-updated {\n      font-size: 0.8em;\n      float: none;\n    }\n\n    .contributors {\n      font-size: 0.8em;\n    }\n  }\n}\n\n.page-nav {\n  @extend %wrapper;\n  padding-top: 1rem;\n  padding-bottom: 0;\n\n  .inner {\n    min-height: 2rem;\n    margin-top: 0;\n    border-top: 1px solid var(--c-border);\n    transition: border-color var(--t-color);\n    padding-top: 1rem;\n    overflow: auto;\n  }\n\n  .next {\n    float: right;\n  }\n}\n","@import '_variables';\n\n.sidebar {\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n  }\n\n  a {\n    display: inline-block;\n  }\n\n  .navbar-links {\n    display: none;\n    border-bottom: 1px solid var(--c-border);\n    transition: border-color var(--t-color);\n    padding: 0.5rem 0 0.75rem 0;\n\n    a {\n      font-weight: 600;\n    }\n\n    .navbar-links-item {\n      display: block;\n      line-height: 1.25rem;\n      font-size: 1.1em;\n      padding: 0.5rem 0 0.5rem 1.5rem;\n    }\n  }\n\n  .sidebar-links {\n    padding: 1.5rem 0;\n\n    > li:not(:first-child) {\n      margin-top: 0.75rem;\n    }\n\n    .sidebar-sub-items {\n      padding-left: 1rem;\n      font-size: 0.95em;\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .sidebar {\n    .navbar-links {\n      display: block;\n\n      .dropdown-wrapper\n        .nav-dropdown\n        .dropdown-item\n        a.router-link-active::after {\n        top: calc(1rem - 2px);\n      }\n    }\n\n    .sidebar-links {\n      padding: 1rem 0;\n    }\n  }\n}\n\n.sidebar-heading {\n  color: var(--c-text);\n  transition: color 0.15s ease;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding: 0.35rem 1.5rem 0.35rem 1.25rem;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  border-left: 0.25rem solid transparent;\n\n  .arrow {\n    position: relative;\n    top: -0.12em;\n    left: 0.5em;\n  }\n}\n\n.sidebar-item:not(.sidebar-heading) {\n  font-size: 1em;\n  font-weight: 400;\n  display: inline-block;\n  color: var(--c-text);\n  border-left: 0.25rem solid transparent;\n  margin: 0;\n  padding: 0.35rem 1rem 0.35rem 2rem;\n  line-height: 1.4;\n  width: 100%;\n  box-sizing: border-box;\n\n  .sidebar-links > &:not(:first-child) {\n    margin-top: 0.75rem;\n  }\n\n  .sidebar-sub-items & {\n    padding: 0.25rem 1rem 0.25rem 1.75rem;\n  }\n}\n\n.sidebar-item {\n  cursor: default;\n}\n\na.sidebar-item {\n  cursor: pointer;\n\n  &:hover {\n    color: var(--c-text-accent);\n  }\n\n  &.active {\n    font-weight: 600;\n    color: var(--c-text-accent);\n    border-left-color: var(--c-text-accent);\n  }\n\n  &.sidebar-heading.active {\n    font-weight: bold;\n    border-left-color: transparent;\n  }\n\n  .sidebar-sub-items &.active {\n    font-weight: 500;\n    border-left-color: transparent;\n  }\n}\n",".sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n  user-select: none;\n}\n",".table-of-contents {\n  .badge {\n    vertical-align: middle;\n  }\n}\n",".fade-slide-y-enter-active {\n  transition: all 0.3s ease;\n}\n\n.fade-slide-y-leave-active {\n  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);\n}\n\n.fade-slide-y-enter-from,\n.fade-slide-y-leave-to {\n  transform: translateY(10px);\n  opacity: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 15:
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 667:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ 691:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/back-to-top.8b37f773.svg";

/***/ }),

/***/ 745:
/***/ ((module) => {

"use strict";
module.exports = require("@vue/server-renderer");

/***/ }),

/***/ 103:
/***/ ((module) => {

"use strict";
module.exports = require("vue");

/***/ }),

/***/ 615:
/***/ ((module) => {

"use strict";
module.exports = require("vue-router");

/***/ }),

/***/ 236:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var Vue = __webpack_require__(103)

Object.keys(Vue).forEach(function(key) {
  exports[key] = Vue[key]
})

exports.set = function(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}

exports.del = function(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}

exports.Vue = Vue
exports.Vue2 = undefined
exports.isVue2 = false
exports.isVue3 = true
exports.install = function(){}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = require("url").pathToFileURL(__filename);
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			143: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(50);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map