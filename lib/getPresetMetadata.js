/**
 * Presets are a set of values that serve
 * to bootstrap some styles: colors, font sizes, etc.
 *
 * @see https://github.com/WordPress/wordpress-develop/blob/831dae429625557e6ef80fb05f562bc73e9f2b34/src/wp-includes/class-wp-theme-json.php#L60
 *
 * @param {object} options The config object.
 * @returns The preset metadata.
 */
module.exports = (options) => [
  {
    'path': 'color.palette',
    'valueKey': 'color',
    'cssVars': '--wp--preset--color--$slug',
    'generator': options.colorPaletteGenerator,
  },
  {
    'path': 'color.gradients',
    'valueKey': 'gradient',
    'cssVars': '--wp--preset--gradient--$slug',
    'generator': options.colorGradientGenerator,
  }
]
