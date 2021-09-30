export const data = {
  "key": "v-272a7ab2",
  "path": "/en/projects.html",
  "title": "Projects",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Projects",
    "description": "summary and project-group"
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
  "filePathRelative": "en/projects.md",
  "git": {
    "updatedTime": 1633022687000,
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
