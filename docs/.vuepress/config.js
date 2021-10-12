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
      description: 'OCR4all documentation',
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
            { text: 'Home', link: '/' },
      { text: 'Über OCR4all', link: '/about.md/' },
      { text: 'Software und Download', link: '/software_download/software_download.md/' },
      { text: 'Aktivitäten', link: '/activities.md/' },
      { text: 'Team', link: '/team.md/' },
      { text: 'Projekte', link: '/projects.md/'},
      { text: 'Info', link: '/info_contact.md/'},
    ],
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
            { text: 'Home', link: '/' },
      { text: 'About', link: '/about.md/'},
      { text: 'Software and Download', link: '/software_download/software_download.md/' },
      { text: 'Activities', link: '/activities.md/' },
      { text: 'Team', link: '/team.md/' },
      { text: 'Projects', link: '/projects.md/'},
      { text: 'Info', link: '/info_contact.md/'}
    ],
      },
    },
    logo: 'http://ocr4all.org/images/logo.jpg',
    logoDark: 'https://raw.githubusercontent.com/SinaB0ck/OCR4all/main/docs/.vuepress/public/images/logoDark.png',
  },
}
