export const data = {
  "key": "v-5d7259d4",
  "path": "/guide.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide.md",
  "git": {
    "updatedTime": 1631400061000,
    "contributors": [
      {
        "name": "Sina Bock",
        "email": "sina.bock@uni-wuerzburg.de",
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
