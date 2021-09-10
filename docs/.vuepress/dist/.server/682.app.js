"use strict";
exports.id = 682;
exports.ids = [682];
exports.modules = {

/***/ 405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-64f82839",
  "path": "/en/about.html",
  "title": "About",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "About",
    "description": "Learn more about the OCR4all project"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Workflow",
      "slug": "workflow",
      "children": []
    },
    {
      "level": 3,
      "title": "Cooperation with OCR-D",
      "slug": "cooperation-with-ocr-d",
      "children": []
    },
    {
      "level": 3,
      "title": "Reporting (assortment)",
      "slug": "reporting-assortment",
      "children": []
    },
    {
      "level": 3,
      "title": "Zitation",
      "slug": "zitation",
      "children": []
    },
    {
      "level": 3,
      "title": "Funding",
      "slug": "funding",
      "children": []
    }
  ],
  "filePathRelative": "en/about.md",
  "git": {
    "updatedTime": 1631100062000,
    "contributors": [
      {
        "name": "Isabel",
        "email": "isabel.mueller1@stud-mail.uni-wuerzburg.de",
        "commits": 4
      }
    ]
  }
}


/***/ }),

/***/ 69:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/en/about.html.vue?vue&type=template&id=1a2a2d5c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#workflow" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Workflow`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Workflow")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#cooperation-with-ocr-d" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Cooperation with OCR-D`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Cooperation with OCR-D")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#reporting-assortment" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Reporting (assortment)`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Reporting (assortment)")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#zitation" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Zitation`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Zitation")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "#funding" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Funding`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Funding")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><p>The OCR4all software was developed for the digitization of primarily very early printed documents. As many text recognition programs are often not able to handle the high complexity of the types and layout conceptions these texts hold, an option to organize the process of digitization in a variable way, orienting on the peculiarities of the specific corpus or document is urgently needed.</p><p>By combining different tools within a uniform user interface, the constant need to switch between different programs is eliminated. The comprehensible and intuitive handling combined with the semi-automatic workflow of OCR4all explicitly addresses non-computer-scientists as well.</p><p>With the <a href="http://kallimachos.de/kallimachos/index.php/Kallimachos_II_(Eingehende_Darstellung)#AP1:_OCR-Optimierung" target="_blank" rel="noopener noreferrer">closure`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> of the second project stage of the BMBF-funded joint project <a href="http://kallimachos.de" target="_blank" rel="noopener noreferrer">Kallimachos`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> the software is now being established at the <a href="https://www.uni-wuerzburg.de/zpd" target="_blank" rel="noopener noreferrer">center for philology and digitally`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> of the University of Würzburg, which opens the program up for the widest possible user group.</p><h3 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow" aria-hidden="true">#</a> Workflow</h3><p>The workflow starts with the Preprocessing of the relevant image files. Layout segmentation (so-called Region Segmentation carried out with <a href="https://github.com/OCR4all/LAREX" target="_blank" rel="noopener noreferrer">LAREX`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> and Line Segmentation follow. Next is the Text Recognition which is carried out with <a href="https://github.com/Calamari-OCR" target="_blank" rel="noopener noreferrer">Calamari`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. The final stage is the correction of the recognized texts the so-called Ground Truth Production. This Ground Truth is then the foundation for creating work-specific OCR models in a training module. Therefore OCR4all entails a full-featured OCR workflow.</p><p>Particularly due to the capacity to create and train work-specific text recognition models, OCR4all makes achieving high-quality results in the digitization of texts in nearly all printed documents possible.</p><h3 id="cooperation-with-ocr-d" tabindex="-1"><a class="header-anchor" href="#cooperation-with-ocr-d" aria-hidden="true">#</a> Cooperation with OCR-D</h3><p>In the summer of 2020, a co-operation between OCR4all and the coordinated funding initiative for further development of processes involving Optical Character Recognition (<a href="https://ocr-d.de" target="_blank" rel="noopener noreferrer">OCR-D`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>) was arranged.</p><p>The main goal of the DFG-funded OCR-D project was the conceptual as well as technical preparation of the mass digitization of printed texts published in german-speaking areas from the 16th to the 18th century (VD16, VD17, VD18).</p><p>For this purpose, the automatic full-text recognition, analogous to the OCR4all approach, is divided into individual process steps that can be reproduced in the Open Source OCR-D software. This aims to create optimized workflows for the old prints to be processed and thus generating scientifically applicable full texts.</p><p>The aim of the co-operation is not only the continuous exchange of information mainly about interfaces, scalable software implementations, creation and provision of GT but the upcoming developments in the OCR field as well. Furthermore, it strives to achieve a technical convergence of the two projects. For this purpose, OCR4all will implement the OCR-D specifications in its OCR solution and realize its interfaces for OCR-D tools. With OCR4all&#39;s internal use of OCR-D solutions, OCR4all users will benefit from the extended selection of tools and the associated possibilities, whereas OCR-D will have a broader scope and, through simplified access, will also reach new user groups inside and outside VD mass digitization.</p><h3 id="reporting-assortment" tabindex="-1"><a class="header-anchor" href="#reporting-assortment" aria-hidden="true">#</a> Reporting (assortment)</h3><ul><li>Radiointerview SWR2 Impuls: Mittelalterliche Handschriften werden Textdokumente</li><li><a href="https://fortext.net/tools/tools/ocr4all" target="_blank" rel="noopener noreferrer">Toolvorstellung`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> im Rahmen des DFG-geförderten Projekts <a href="https://fortext.net" target="_blank" rel="noopener noreferrer">forText`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li>Dr. Johann Ramminger: <a href="https://jramminger.github.io/ocr4all" target="_blank" rel="noopener noreferrer">ocr4all - OCR for Incunables`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li>Der Tagesspiegel: Computertool für alte Texte</li><li>Der Standard: <a href="https://www.derstandard.de/story/2000101916347/zuverlaessige-texterkennungs-tool-fuer-historische-druckschriften" target="_blank" rel="noopener noreferrer">Zuverlässiges Texterkennungs-Tool für historische Druckschriften`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> -Augsburger Allgemeine: <a href="https://www.augsburger-allgemeine.de/bayern/Computer-liest-alte-Texte-id54130851.html" target="_blank" rel="noopener noreferrer">Computer liest alte Texte`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li>einBlick: <a href="https://www.uni-wuerzburg.de/aktuelles/einblick/single/news/modernes-tool-fuer-alte-texte" target="_blank" rel="noopener noreferrer">Modernes Tool für alte Texte`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h3 id="zitation" tabindex="-1"><a class="header-anchor" href="#zitation" aria-hidden="true">#</a> Zitation</h3><p>If you are using OCR4all please cite the corresponding <a href="https://www.mdpi.com/2076-3417/9/22/4853%22" target="_blank" rel="noopener noreferrer">paper`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>: Reul, C., Christ, D., Hartelt, A., Balbach, N., Wehner, M., Springmann, U., Wick, C., Grundig, Büttner, A., C., Puppe, F.: OCR4all — An open-source tool providing a (semi-) automatic OCR workflow for historical printings, Applied Sciences 9(22) (2019)</p><h3 id="funding" tabindex="-1"><a class="header-anchor" href="#funding" aria-hidden="true">#</a> Funding</h3><ul><li><a href="https://ocr-d.de/en/" target="_blank" rel="noopener noreferrer">DFG-funded Initiative &quot;OCR-D&quot;`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, (phase 2 and 3)</li><li><a href="https://www.uni-wuerzburg.de/zpd" target="_blank" rel="noopener noreferrer">Zentrum für Philologie und Digitalität (ZPD)`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, Universität Würzburg</li><li>BMBF gefördertes Projekt <a href="http://kallimachos.de" target="_blank" rel="noopener noreferrer">Kallimachos`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.informatik.uni-wuerzburg.de/is" target="_blank" rel="noopener noreferrer">Lehrstuhl für Künstliche Intelligenz und Wissenssysteme`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, Universität Würzburg</li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/en/about.html.vue?vue&type=template&id=1a2a2d5c

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/en/about.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("C:\\Users\\Isabel\\PycharmProjects\\OCR4all.github.io\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!C:\\Users\\Isabel\\PycharmProjects\\OCR4all.github.io\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!C:\\Users\\Isabel\\PycharmProjects\\OCR4all.github.io\\docs\\.vuepress\\.temp\\pages\\en\\about.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const about_html = (script);

/***/ })

};
;
//# sourceMappingURL=682.app.js.map