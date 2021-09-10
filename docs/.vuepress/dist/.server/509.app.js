"use strict";
exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "de-GER",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1631100062000,
    "contributors": [
      {
        "name": "Isabel",
        "email": "isabel.mueller1@stud-mail.uni-wuerzburg.de",
        "commits": 8
      },
      {
        "name": "Sina Bock",
        "email": "sina.bock@uni-wuerzburg.de",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/index.html.vue?vue&type=template&id=74331cdc



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> Home</h1><p><img src="ocr4all-zpd.png" alt="I love ZPD"></p><p>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/about.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Über OCR4all`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Über OCR4all")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/software_download.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Software und Download`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Software und Download")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/activities.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Aktivitäten`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Aktivitäten")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/index.html.vue?vue&type=template&id=74331cdc

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("C:\\Users\\Isabel\\PycharmProjects\\OCR4all.github.io\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!C:\\Users\\Isabel\\PycharmProjects\\OCR4all.github.io\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!C:\\Users\\Isabel\\PycharmProjects\\OCR4all.github.io\\docs\\.vuepress\\.temp\\pages\\index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=509.app.js.map