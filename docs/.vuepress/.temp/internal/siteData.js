export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [],
  "locales": {
    "/OCR4all/OCR4all.github.io": {
      "lang": "de-DE",
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

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
