const cteHTML = {
  template: "./public/template.html",
  googleAnalyticsId: "'UA-101279823-34'",
  title: "Customer service – how can we help you?",
  metaContent: JSON.stringify(
    "Want to contact IKEA? No problem. Contact us today via phone, email or chat. Select the topic and we will help you on the right channel."
  ),
  canonicalLink: "https://cte.ikeadt.com/gb/en/customer-service/support",
  preconectLink: JSON.stringify(("https:/cte.ikeadt.com")),
  headerFooterStyleSrc: JSON.stringify("https://cte.ikeadt.com/au/en/header-footer/style-fragment-recursive.html?request-path=$(REQUEST_PATH)"
  ),
  headerSrc: JSON.stringify(
    "https://cte.ikeadt.co/au/en/header-footer/header-fragment-recursive.html"
  ),
  footerSrc: JSON.stringify("https://cte.ikeadt.com/au/en/header-footer/footer-fragment-recursive.html"),
  headerFooterScriptSrc: JSON.stringify("https://cte.ikeadt.com/au/en/header-footer/script-fragment-recursive.html?request-path=$(REQUEST_PATH)")
};

const ppeHTML = {
  template: "./public/template.html",
  googleAnalyticsId: "'UA-101279823-34'",
  title: "Customer service – how can we help you?",
  metaContent: JSON.stringify(
    "Want to contact IKEA? No problem. Contact us today via phone, email or chat. Select the topic and we will help you on the right channel."
  ),
  canonicalLink: "https://ppe.ikeadt.com/gb/en/customer-service/support",
  preconectLink: JSON.stringify("https:/ppe.ikeadt.com"),
  headerFooterStyleSrc: JSON.stringify(
    "https://ppe.ikeadt.com/au/en/header-footer/style-fragment-recursive.html?request-path=$(REQUEST_PATH)"
  ),
  headerSrc: JSON.stringify(
    "https://ppe.ikeadt.com/au/en/header-footer/header-fragment-recursive.html"
  ),
  footerSrc: JSON.stringify("https://ppe.ikeadt.com/au/en/header-footer/footer-fragment-recursive.html"),
  headerFooterScriptSrc: JSON.stringify("https://ppe.ikeadt.com/au/en/header-footer/script-fragment-recursive.html?request-path=$(REQUEST_PATH)")
};

const prodHTML = {
  template: "./public/template.html",
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
  footerSrc: JSON.stringify("https://www.ikea.com/au/en/header-footer/footer-fragment-recursive.html"),
  headerFooterScriptSrc: JSON.stringify("https://www.ikea.com/au/en/header-footer/script-fragment-recursive.html?request-path=$(REQUEST_PATH)")
};

const environment = "prod"; // cte || ppe || prod;

module.exports = function HTMLconfig() {
  if (environment === "cte") return cteHTML;
  else if (environment === "ppe") return ppeHTML;
  else if (environment === "prod") return prodHTML;
};
