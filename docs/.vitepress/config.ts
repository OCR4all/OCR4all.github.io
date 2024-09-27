export default({
  lang: 'en-US',
  title: 'OCR4all',
  description: 'Guides, documentation and more',

  base: "/",

  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  ignoreDeadLinks: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/': sidebarDefault(),
    },

    logo: '/assets/brand/logo.svg',

    socialLinks: [
      { icon: 'github',
        link: 'https://github.com/OCR4all/OCR4all' },
      { icon: 'twitter',
        link: 'https://mobile.twitter.com/ocr4all/'},
      { icon: {
        svg: '<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7l8-5V6l-8 5l-8-5v2Z"/></svg>'
        },
        link: 'mailto:ocr4all@uni-wuerzburg.de?subject=OCR4all contact'},
      { icon: {
        svg: '<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .64L8.23 3H5v2L2.97 6.29C2.39 6.64 2 7.27 2 8v10a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V8c0-.73-.39-1.36-.97-1.71L19 5V3h-3.23M7 5h10v4.88L12 13L7 9.88M8 6v1.5h8V6M5 7.38v1.25L4 8m15-.62L20 8l-1 .63M8 8.5V10h8V8.5Z"/></svg>'
        },
        link: 'https://lists.uni-wuerzburg.de/mailman/listinfo/ocr4all'}
    ],

    footer: {
      message: '<b>Released</b> under the MIT License.',
      copyright: 'Copyright © 2022-present <a href="https://www.uni-wuerzburg.de/sonstiges/impressum" target="_blank">Centre for Philology and Digitality</a>'
    },

    algolia: {
      appId: 'HY0F9NASL4',
      apiKey: 'bce3da54a336228940192ce49b675989',
      indexName: 'ocr4all'
    },

  }
})

function nav() {
  return [
    {
      text: 'About',
      items: [
        { text: "What is OCR4all?", link: "/about/ocr4all"},
        { text: "Activities", link: "/about/activities"},
        { text: "Projects", link: "/about/projects"},
        { text: "Team", link: "/about/team"}
      ]
    },
    {
      text: 'Guides',
      items: [
        { text: "Setup Guide", link: "/guide/setup-guide/quickstart"},
        { text: "User Guide", link: "/guide/user-guide/introduction"}
      ]
    }
  ]
}

function sidebarDefault() {
  return [
    {
      text: 'About',
      collapsible: true,
      items: [
        { text: "What is OCR4all?", link: "/about/ocr4all"},
        { text: "Activities", link: "/about/activities"},
        { text: "Projects", link: "/about/projects"},
        { text: "Team", link: "/about/team"}
      ]
    },
    {
      text: 'Guides',
      collapsible: true,
      items: [
        {
          text: "Setup Guide",
          collapsible: true,
          items: [
            {text: "Quickstart", link: "/guide/setup-guide/quickstart"},
            {text: "Linux", link: "/guide/setup-guide/linux"},
            {text: "macOS", link: "/guide/setup-guide/macos"},
            {text: "Windows", link: "/guide/setup-guide/windows"},
          ]
        },
        {
          text: "User Guide",
          collapsible: true,
          items: [
            {text: "Introduction", link: "/guide/user-guide/introduction"},
            {text: "Setup and folder structure", link: "/guide/user-guide/setup-and-folder-structure"},
            {text: "Scan preparation", link: "/guide/user-guide/scan-preparation"},
            {text: "Project Start and Overview", link: "/guide/user-guide/project-start-and-overview"},
            {text: "Workflow", link: "/guide/user-guide/workflow"},
            {text: "Errors, frequent problems and how to avoid them", link: "/guide/user-guide/common-errors"},
          ]
        }
      ]
    },
    {
      text: "OCR4all-libraries",
      collapsible: true,
      items: [
        {text: "Overview", link: "/ocr4all-libraries"},
        {text: "Introduction", link: "/ocr4all-libraries/introduction"},
        {text: "Setup", link: "/ocr4all-libraries/setup"},
      ]
    }
  ]
}

