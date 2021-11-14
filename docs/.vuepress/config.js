module.exports = {
  base: '/OCR4all/',
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
      { text: 'Benutzeranleitung', children: ['/ocr4all_userguide/0.FrontPage/0.FrontPage.md', '/ocr4all_userguide/1.OCR4all/1.1_Introduction.md'], },
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
      { text: 'Userguide', link: '/en/ocr4all_userguide/0.FrontPage/0.FrontPage.md/' },
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
