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
    locales: {
      '/': {
        selectLanguageName: 'Deutsch',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
    logo: 'http://ocr4all.org/images/logo.jpg',
  },
}
