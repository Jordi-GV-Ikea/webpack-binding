const {cteHTML, ppeHTML, prodHTML} = require('./htmlValues')


module.exports = function HTMLconfig(environment) {
  if (environment === "cte") return cteHTML;
  else if (environment === "ppe") return ppeHTML;
  else if (environment === "prod") return prodHTML;
};
