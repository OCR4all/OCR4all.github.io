export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "Homepage",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "lang": "en-US",
    "title": "Homepage",
    "description": "Welcome to OCR4all",
    "footer": "© ZPD University of Würzburg - Germany 2017-2021 | All rights reserved"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/README.md"
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
