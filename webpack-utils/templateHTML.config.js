const environment = "prod"; // cte || ppe || prod;

module.exports = function HTMLconfig() {
  const template = "./public/template.html";
  const title = "Customer service – how can we help you?";
  const metaContent = JSON.stringify(
    "Want to contact IKEA? No problem. Contact us today via phone, email or chat. Select the topic and we will help you on the right channel."
  );
  const googleAnalyticsId = "'UA-101279823-34'";

  if (environment === "cte") {
    return {
      title,
      template,
      googleAnalyticsId,
      metaContent,
      myHeader: "My Header Tag minor than 5",
      canonicalLink: "https://cte.ikeadt.com/gb/en/customer-service/support",
      headerSrc: JSON.stringify(
        "https://cte.ikeadt.com/au/en/header-footer/style-fragment-recursive.html?request-path=$(REQUEST_PATH)"
      ),
      footerSrc: JSON.stringify("https://cte.ikeadt.co/au/en/header-footer/header-fragment-recursive.html"),
    };
  } else if (environment === "ppe") {
    return {
      title,
      template,
      googleAnalyticsId,
      metaContent,
      myHeader: "My Header Tag minor than 5",
      canonicalLink: "https://ppe.ikeadt.com/gb/en/customer-service/support",
      headerSrc: JSON.stringify(
        "https://ppe.ikeadt.com/au/en/header-footer/style-fragment-recursive.html?request-path=$(REQUEST_PATH)"
      ),
      footerSrc: JSON.stringify("https://ppe.ikeadt.co/au/en/header-footer/header-fragment-recursive.html"),
    };
  } else if (environment === "prod") {
    return {
      title,
      template,
      googleAnalyticsId,
      metaContent,
      myHeader: "My Header Tag",
      canonicalLink: "https://www.ikea.com/gb/en/customer-service/support",
      headerSrc: JSON.stringify(
        "https://www.ikea.com/au/en/header-footer/style-fragment-recursive.html?request-path=$(REQUEST_PATH)"
      ),
      footerSrc: JSON.stringify("https://www.ikea.com/au/en/header-footer/header-fragment-recursive.html"),
    };
  }
};
