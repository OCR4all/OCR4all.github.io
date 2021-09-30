export const data = {
  "key": "v-139b5e2a",
  "path": "/en/guide.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/guide.md",
  "git": {
    "updatedTime": 1632920227000,
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
