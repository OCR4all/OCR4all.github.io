export const themeData = {
  "locales": {
    "/": {
      "selectLanguageName": "Deutsch",
      "navbar": [
        {
          "text": "Über OCR4all",
          "link": "/about.md/"
        },
        {
          "text": "Software und Download",
          "link": "/software_download/software_download.md/"
        },
        {
          "text": "Aktivitäten",
          "link": "/activities.md/"
        },
        {
          "text": "Team",
          "link": "/team.md/"
        },
        {
          "text": "Libraries",
          "link": "/libraries.md/"
        }
      ]
    },
    "/en/": {
      "selectLanguageName": "English",
      "navbar": [
        {
          "text": "About",
          "link": "/about.md/"
        },
        {
          "text": "Software and Download",
          "link": "/software_download/software_download.md/"
        },
        {
          "text": "Activities",
          "link": "/activities.md/"
        },
        {
          "text": "Team",
          "link": "/team.md/"
        },
        {
          "text": "Libraries",
          "link": "/libraries.md/"
        }
      ]
    }
  },
  "logo": "http://ocr4all.org/images/logo.jpg",
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
