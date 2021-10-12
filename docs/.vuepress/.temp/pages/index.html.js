export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Startseite",
  "lang": "de-DE",
  "frontmatter": {
    "home": true,
    "lang": "de-DE",
    "title": "Startseite",
    "description": "Herzlich Willkommen bei OCR4all",
    "footer": "© ZPD Universität Würzburg - Deutschland 2017-2021 | Alle Rechte vorbehalten"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "index.md"
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
