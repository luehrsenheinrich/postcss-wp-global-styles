const processAtRules = require('./lib/processAtRules');
const processConfig = require('./lib/processConfig');

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (userConfig = {}) => {

  const config = processConfig(userConfig);

  // Hold AtRule instances that have been processed.
  let processed = [];

  return {
    postcssPlugin: 'postcss-wp-global-styles',

    /**
     * Process all at-rules in the CSS stylesheets.
     */
    AtRule: {
      /**
       * Process all @import statements in the CSS stylesheets.
       */
      '*': (atRule) => {
				if( atRule.name === 'wp-global-styles' ) {
					console.log(atRule);
					processAtRules(atRule, processed, config);
				}
      }
    }
  }
}

module.exports.postcss = true
