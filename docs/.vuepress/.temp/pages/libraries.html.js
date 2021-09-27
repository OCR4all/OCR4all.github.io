export const data = {
  "key": "v-6d221119",
  "path": "/libraries.html",
  "title": "OCR4all-libraries",
  "lang": "de-GE",
  "frontmatter": {
    "lang": "de-GE",
    "title": "OCR4all-libraries",
    "description": "Zusammenfassung und Projektgruppe"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Zusammenfassung",
      "slug": "zusammenfassung",
      "children": []
    },
    {
      "level": 3,
      "title": "Projektgruppe",
      "slug": "projektgruppe",
      "children": []
    }
  ],
  "filePathRelative": "libraries.md",
  "git": {
    "updatedTime": 1632345345000,
    "contributors": [
      {
        "name": "Isabel",
        "email": "isabel.mueller1@stud-mail.uni-wuerzburg.de",
        "commits": 1
      }
    ]
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
