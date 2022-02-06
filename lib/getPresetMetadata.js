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
    'classes': {
      '.has-$slug-color': 'color',
      '.has-$slug-background-color': 'background-color',
      '.has-$slug-border-color': 'border-color',
    },
    'generator': options.colorPaletteGenerator,
  },
  {
    'path': 'color.gradients',
    'valueKey': 'gradient',
    'cssVars': '--wp--preset--gradient--$slug',
    'classes': {
      '.has-$slug-gradient-background': 'background',
    },
    'generator': options.colorGradientGenerator,
  },
  {
    'path': 'typography.fontSizes',
    'valueKey': 'size',
    'cssVars': '--wp--preset--font-size--$slug',
    'classes': {
      '.has-$slug-font-size': 'font-size',
    },
    'generator': options.typographyFontSizesGenerator,
  },
  {
    'path': 'typography.fontFamilies',
    'valueKey': 'fontFamily',
    'cssVars': '--wp--preset--font-family--$slug',
    'classes': {
      '.has-$slug-font-family': 'font-family',
    },
    'generator': options.typographyFontFamiliesGenerator,
  }
]
