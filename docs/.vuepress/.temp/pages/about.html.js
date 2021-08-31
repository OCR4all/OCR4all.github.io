export const data = {
  "key": "v-22a39d25",
  "path": "/about.html",
  "title": "about",
  "lang": "de-GER",
  "frontmatter": {
    "lang": "de-GER",
    "title": "about",
    "description": "about OCR4all"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Workflow",
      "slug": "workflow",
      "children": []
    }
  ],
  "filePathRelative": "about.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
