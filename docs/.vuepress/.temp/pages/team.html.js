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
  "headers": [
    {
      "level": 3,
      "title": "Leitung",
      "slug": "leitung",
      "children": []
    },
    {
      "level": 3,
      "title": "User Support",
      "slug": "user-support",
      "children": []
    },
    {
      "level": 3,
      "title": "Entwicklung",
      "slug": "entwicklung",
      "children": []
    },
    {
      "level": 3,
      "title": "Verschiedenes",
      "slug": "verschiedenes",
      "children": []
    },
    {
      "level": 3,
      "title": "Ehemalige Projektmitarbeiter",
      "slug": "ehemalige-projektmitarbeiter",
      "children": []
    }
  ],
  "filePathRelative": "team.md",
  "git": {
    "updatedTime": 1631306807000,
    "contributors": [
      {
        "name": "Isabel",
        "email": "isabel.mueller1@stud-mail.uni-wuerzburg.de",
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
