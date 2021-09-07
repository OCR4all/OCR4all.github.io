module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
      title: 'OCR4all',
      description: 'OCR4all documentation',
    },
    '/en/': {
      lang: 'en-US',
      title: 'OCR4all',
      description: 'OCR4all documentation',
    },
    '/de/': {
      lang: 'de-GE',
      title: 'OCR4all',
      description: 'OCR4all Dokumentation',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
      '/de/': {
        selectLanguageName: 'Deutsch',
      },
    },
    logo: 'http://ocr4all.org/images/logo.jpg',
  },
}
