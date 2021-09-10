export const data = {
  "key": "v-1931efa2",
  "path": "/en/team.html",
  "title": "Team",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Team",
    "description": "Get to know and contact our team"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/team.md",
  "git": {
    "updatedTime": 1631100062000,
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
