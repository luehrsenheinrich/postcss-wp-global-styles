const { get } = require("lodash");
const { Rule, Declaration } = require("postcss");
const getPresetMetadata = require("./getPresetMetadata");
const loadThemeJson = require("./loadThemeJson");

/**
 * Returns an AST representing the stylesheed resulting of the theme.json file.
 *
 * @param {object} options - Options object.
 * @param {array}  types   - Types of styles to load. Optional
 *                           It accepts 'variables', 'styles' as values.
 *                           If not specified, all styles are loaded.
 *
 * @see https://github.com/WordPress/wordpress-develop/blob/831dae429625557e6ef80fb05f562bc73e9f2b34/src/wp-includes/class-wp-theme-json.php#L676
 *
 * @returns {object}       - The AST representing the stylesheet.
 */
function getGlobalStylesheet(options, types) {
  if ( ! types ) {
    types = ['presets'];
  }

  let stylesheet = [];

  // Generate a root node to hold vars.
  let varsNode = new Rule( { 'selector': ':root' } );
  stylesheet.push(varsNode);

  // Load the theme.json file.
  const themeJson = loadThemeJson(options.themeJson);

  if ( types.includes('variables') ) {
    // TODO: Generate the variables.
  }

  if ( types.includes('styles') ) {
    // TODO: Generate the styles.
  }

  if ( types.includes('presets') ) {
    // Load the preset metadata.
    var presetMetadata = getPresetMetadata(options);
    var themeJsonSettings = get(themeJson, 'settings', {});

    // Iterate over the preset metadata.
    presetMetadata.forEach(meta => {
      const themeContent = get(themeJsonSettings, meta.path, []);
      themeContent.forEach(element => {
        // Generate the needed variable
        const variableName = meta.cssVars.replace('$slug', element.slug);
        const variable = new Declaration({ prop: variableName, value: element[meta.valueKey] });
        varsNode.append(variable);

        // Check if the generator is defined and callable.
        if ( typeof meta.generator === 'function' ) {
          var generatorResults = meta.generator(element, meta);
          generatorResults.forEach(result => {
            stylesheet.push(result);
          });
        }
      });
    });
  }

  return stylesheet;
}

module.exports = getGlobalStylesheet;
