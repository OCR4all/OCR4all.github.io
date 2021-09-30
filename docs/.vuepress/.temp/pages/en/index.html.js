export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/README.md",
  "git": {
    "updatedTime": 1633022687000,
    "contributors": [
      {
        "name": "Isabel",
        "email": "isabel.mueller1@stud-mail.uni-wuerzburg.de",
        "commits": 5
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
