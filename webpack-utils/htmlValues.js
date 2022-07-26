module.exports.cteHTML = function (marketValues) {
  return {
    template: marketValues.template, 
    googleAnalyticsId:marketValues.googleAnalyticsId,
    title:marketValues.title,
    metaContent: marketValues.metaContent,
    canonicalLink: marketValues.canonicalLink,
    preconectLink: marketValues.preconectLink,
    headerFooterStyleSrc: marketValues.headerFooterScriptSrc,
    headerSrc: marketValues.headerSrc,
    footerSrc: marketValues.footerSrc,
    headerFooterScriptSrc: marketValues.headerFooterScriptSrc,
  };
};
module.exports.prodHTML = {
  template: "./public/template.html",
  // template: "./webpack-utils/prod-index.html",
  googleAnalyticsId: "'UA-101279823-34'",
  title: "Customer service – how can we help you?",
  metaContent: JSON.stringify(
    "Want to contact IKEA? No problem. Contact us today via phone, email or chat. Select the topic and we will help you on the right channel."
  ),
  canonicalLink: "https://www.ikea.com/gb/en/customer-service/support",
  preconectLink: JSON.stringify("https://www.ikea.com"),
  headerFooterStyleSrc: JSON.stringify(
    "https://www.ikea.com/au/en/header-footer/style-fragment-recursive.html?request-path=$(REQUEST_PATH)"
  ),
  headerSrc: JSON.stringify(
    "https://www.ikea.com/au/en/header-footer/header-fragment-recursive.html"
  ),
  footerSrc: JSON.stringify(
    "https://www.ikea.com/au/en/header-footer/footer-fragment-recursive.html"
  ),
  headerFooterScriptSrc: JSON.stringify(
    "https://www.ikea.com/au/en/header-footer/script-fragment-recursive.html?request-path=$(REQUEST_PATH)"
  ),
};
