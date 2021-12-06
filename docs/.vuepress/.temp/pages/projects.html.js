export const data = {
  "key": "v-3ac5ce46",
  "path": "/projects.html",
  "title": "Projekte",
  "lang": "de-GE",
  "frontmatter": {
    "lang": "de-GE",
    "title": "Projekte",
    "description": "Zusammenfassung und Projektgruppe"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "OCR4all libraries",
      "slug": "ocr4all-libraries",
      "children": [
        {
          "level": 3,
          "title": "Zusammenfassung",
          "slug": "zusammenfassung",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Camerarius digital",
      "slug": "camerarius-digital",
      "children": []
    },
    {
      "level": 2,
      "title": "Narragonien digital",
      "slug": "narragonien-digital",
      "children": []
    }
  ],
  "filePathRelative": "projects.md"
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
