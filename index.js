const getGlobalStylesheet = require('./lib/getGlobalStylesheet');
const defaultGeneratorfunctions = require('./lib/defaultGeneratorFunctions');

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {

  // Declare some default options.
  var defaults = {
    'themeJson': './theme.json',
    'colorPaletteGenerator': defaultGeneratorfunctions.colorPaletteGenerator,
  }

  // Merge the default options with the user-defined options.
  opts = Object.assign(defaults, opts);

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
      import: (atRule) => {
        // Only process import statements wich include the string 'wp-global-styles'.
        // We also ignore the import statements that are already processed.
        if ( atRule.params.includes('wp-global-styles') && ! processed.includes(atRule) ) {
          processed.push(atRule);
          let stylesheet = getGlobalStylesheet(opts);
          atRule.replaceWith(stylesheet);
        }
      }
    }
  }
}

module.exports.postcss = true
