// const   REACT_APP_PHRASE_TRANSLATIONS = () => require('./locales/en-AU.json'),


module.exports = {
    REACT_APP_CMS_MARKET : 'australia',
    REACT_APP_CMS_LOCALE : null,
    REACT_APP_SENTRY_DSN :    'https://4da7bee2e9604058bd10bf0917f4d6b1@o478484.ingest.sentry.io/6389707',
    REACT_APP_BUILD_PATH : '/au/en',
    REACT_APP_MARKET_NAME : 'au-en',
    REACT_APP_MARKET_TEMPLATE : '/markets/au/en',
    REACT_APP_PORT : 3006,
    REACT_APP_FAQ_LANG_INTEGRATION : 'au-EN',
    REACT_APP_FAQ_LANG_ACCORDION : 'en',
    REACT_APP_FAQ_WIDGET_NON_PROD : 'm250',
    REACT_APP_FAQ_WIDGET_PROD : 'm393',
    REACT_APP_REFERENCE_TIMEZONE : 'Australia/Sydney',
    REACT_APP_GOOGLE_ANALYTICS_ID : 'UA-101279823-6',
    REACT_APP_PHRASE_TRANSLATIONS: () => require('./locales/en-AU.json'),
    entry: "./src/index.js",
    filename: "[name].bundle.js",
    build: 'build',
    template: "./webpack-utils/cte-index.html",
    googleAnalyticsId: "'CTE-UA-101279823-34'",
    title: "CTE-Customer service – how can we help you?",
    metaContent: JSON.stringify(
      "CTE-Want to contact IKEA? No problem. Contact us today via phone, email or chat. Select the topic and we will help you on the right channel."
    ),
    canonicalLink: "https://www.ikea.com/au/en/customer-service/support",
    preconectLink: JSON.stringify("https://www.ikea.com"),
    headerFooterStyleSrc: JSON.stringify(
      "https://www.cte.ikeadt.com/ca/en/header-footer/style-fragment-recursive.html?request-path=$(REQUEST_PATH)"
    ),
    headerSrc: JSON.stringify(
      "https://www.cte.ikeadt.com/ca/en/header-footer/header-fragment-recursive.html"
    ),
    footerSrc: JSON.stringify(
      "https://www.cte.ikeadt.com/ca/en/header-footer/footer-fragment-recursive.html"
    ),
    headerFooterScriptSrc: JSON.stringify(
      "https://www.cte.ikeadt.com/au/en/header-footer/script-fragment-recursive.html?request-path=$(REQUEST_PATH)"
    ),
}
