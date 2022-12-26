// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    default: true,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    flag: '🇺🇸',
  },
  es: {
    default: false,
    path: `es`,
    locale: `es-ES`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `es`,
    flag: '🇪🇸',
  },
  fr: {
    default: false,
    path: `fr`,
    locale: `fr-FR`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `fr`,
    flag: '🇫🇷',
  },
  pt: {
    default: false,
    path: `pt`,
    locale: `pt-BR`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `pt`,
    flag: '🇧🇷',
  },
};
