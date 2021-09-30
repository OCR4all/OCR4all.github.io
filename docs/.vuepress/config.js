module.exports = {
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
    lastUpdated: false,
    contributors: false,
    locales: {
      '/': {
        selectLanguageName: 'Deutsch',
        navbar: [
      { text: 'Über OCR4all', link: '/about.md/' },
      { text: 'Software und Download', link: '/software_download/software_download.md/' },
      { text: 'Aktivitäten', link: '/activities.md/' },
      { text: 'Team', link: '/team.md/' },
      { text: 'Projekte', link: '/projects.md/'},
    ],
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
      { text: 'About', link: '/en/about.md/'},
      { text: 'Software and Download', link: '/en/software_download/software_download.md/' },
      { text: 'Activities', link: '/en/activities.md/' },
      { text: 'Team', link: '/en/team.md/' },
      { text: 'Projects', link: '/en/projects.md/'},
    ],
      },
    },
    logo: 'http://ocr4all.org/images/logo.jpg',
  },
}
