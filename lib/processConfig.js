const defaultGeneratorfunctions = require('./defaultGeneratorFunctions');

const defaultConfig = {
  'themeJson': './theme.json',
  'colorPaletteGenerator': defaultGeneratorfunctions.defaultMetadataGenerator,
  'colorGradientGenerator': defaultGeneratorfunctions.defaultMetadataGenerator,
  'typographyFontSizesGenerator': defaultGeneratorfunctions.defaultMetadataGenerator,
  'typographyFontFamiliesGenerator': defaultGeneratorfunctions.defaultMetadataGenerator,
}

/**
 * Merge the user config with the default config.
 *
 * @param {object} userConfig The user configuration for the plugin.
 * @returns The user configuration with default values.
 */
const processConfig = (userConfig) => {
  const config = Object.assign(defaultConfig, userConfig);

  return config;
}

module.exports = processConfig;
