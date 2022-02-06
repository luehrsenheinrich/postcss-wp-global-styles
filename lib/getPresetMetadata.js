module.exports = (options) => [
  {
    'path': 'color.palette',
    'valueKey': 'color',
    'cssVars': '--wp--preset--color--$slug',
    'generator': options.colorPaletteGenerator,
  }
]
