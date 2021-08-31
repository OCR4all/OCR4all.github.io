export const data = {
  "key": "v-953546a4",
  "path": "/test.html",
  "title": "Test",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "test.md",
  "git": {
    "updatedTime": 1629890999000,
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
