export const data = {
  "key": "v-0d52f22d",
  "path": "/en/libraries.html",
  "title": "OCR4all-libraries",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "OCR4all-libraries",
    "description": "summary and project-group"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Summary",
      "slug": "summary",
      "children": []
    },
    {
      "level": 3,
      "title": "Project-Group",
      "slug": "project-group",
      "children": []
    }
  ],
  "filePathRelative": "en/libraries.md",
  "git": {
    "updatedTime": 1632761619000,
    "contributors": [
      {
        "name": "Isabel",
        "email": "isabel.mueller1@stud-mail.uni-wuerzburg.de",
        "commits": 3
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
