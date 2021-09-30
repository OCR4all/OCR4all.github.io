export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "de-DE",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1633022687000,
    "contributors": [
      {
        "name": "Isabel",
        "email": "isabel.mueller1@stud-mail.uni-wuerzburg.de",
        "commits": 11
      },
      {
        "name": "Sina Bock",
        "email": "sina.bock@uni-wuerzburg.de",
        "commits": 2
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
