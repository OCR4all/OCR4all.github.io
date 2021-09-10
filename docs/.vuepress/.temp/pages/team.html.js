export const data = {
  "key": "v-1d79747a",
  "path": "/team.html",
  "title": "Team",
  "lang": "de-DE",
  "frontmatter": {
    "lang": "de-DE",
    "title": "Team",
    "description": "Lernen Sie unser Team kennen und kontaktieren Sie es"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "team.md",
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
