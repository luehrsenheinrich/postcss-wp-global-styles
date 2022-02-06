const getGlobalStylesheet = require('./getGlobalStylesheet');

const processAtRules = (atRule, processed, opts) => {
  // Only process import statements wich include the string 'wp-global-styles'.
  // We also ignore the import statements that are already processed.
  if ( atRule.params.includes('wp-global-styles') && ! processed.includes(atRule) ) {
    processed.push(atRule);
    let stylesheet = getGlobalStylesheet(opts);
    return atRule.replaceWith(stylesheet);
  }

  return false;
};

module.exports = processAtRules;
