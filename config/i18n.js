// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    default: true,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
  es: {
    default: false,
    path: `es`,
    locale: `es-ES`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `es`,
    ogLanguage: `es-ES`,
    defaultTitle: `i18n mit Gatsby nutzen`,
    defaultDescription: `Gatsby Beispielseite, die MDX und i18n (frei von dependencies) nutzt`,
  },
  fr: {
    default: false,
    path: `fr`,
    locale: `fr-FR`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `fr`,
    ogLanguage: `fr-FR`,
    defaultTitle: `i18n mit Gatsby nutzen`,
    defaultDescription: `Gatsby Beispielseite, die MDX und i18n (frei von dependencies) nutzt`,
  },
};
