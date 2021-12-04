module.exports = {
  plugins: [
    ["vuepress-plugin-auto-sidebar", {
      //options
    }]
  ]
  base: '/',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'de-DE',
      title: 'OCR4all',
      description: 'OCR4all Dokumentation',
    },
    '/en/': {
      lang: 'en-US',
      title: 'OCR4all',
      description: 'OCR4all Documentation',
    },
  },
  themeConfig: {
    repo: 'SinaB0ck/OCR4all',
    lastUpdated: false,
    contributors: false,
    locales: {
      '/': {
        selectLanguageName: 'Deutsch',
        navbar: [
      { text: 'Über OCR4all', link: '/about.md/' },
      { text: 'Software und Download', link: '/software_download/software_download.md/' },
      { text: 'Benutzeranleitung',
        children: ['/ocr4all_userguide/0.FrontPage/0.FrontPage.md',
        '/ocr4all_userguide/1.OCR4all/1.1_Introduction.md',
        '/ocr4all_userguide/1.OCR4all/1.2_Set up and folder structure.md',
        '/ocr4all_userguide/2.ScanAndImagePreparation/2-ScanPreparation.md',
        '/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting started.md',
        '/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project Overview.md',
        '/ocr4all_userguide/4.Workflow/4.001-Process_Flow.md',
        '/ocr4all_userguide/5.Errors/5-Errors-Problems.md'], },
      { text: 'Aktivitäten', link: '/activities.md/' },
      { text: 'Team', link: '/team.md/' },
      { text: 'Projekte', link: '/projects.md/'},
      { text: 'Weiterführende Informationen', link: '/info_contact.md/'},
    ],
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
      { text: 'About', link: '/en/about.md/'},
      { text: 'Software and Download', link: '/en/software_download/software_download.md/' },
      { text: 'User Guide',
        children: ['/en/ocr4all_userguide/0.FrontPage/0.FrontPage.md',
        '/en/ocr4all_userguide/1.OCR4all/1.1_Introduction.md',
        '/en/ocr4all_userguide/2.ScanAndImagePreparation/2-ScanPreparation.md',
        '/en/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting started.md',
        '/en/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project Overview.md',
        '/en/ocr4all_userguide/4.Workflow/4.001-Process_Flow.md',
        '/en/ocr4all_userguide/5.Errors/5-Errors-Problems.md'], },
      { text: 'Activities', link: '/en/activities.md/' },
      { text: 'Team', link: '/en/team.md/' },
      { text: 'Projects', link: '/en/projects.md/'},
      { text: 'Further Information', link: '/en/info_contact.md/'}
    ],
      },
    },
    logo: 'https://raw.githubusercontent.com/SinaB0ck/OCR4all/main/docs/.vuepress/public/images/logoLight.png',
    logoDark: 'https://raw.githubusercontent.com/SinaB0ck/OCR4all/main/docs/.vuepress/public/images/logoDark.png',
  },
}
