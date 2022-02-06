const fs = require('fs');

/**
 * Function that loads a WordPress theme JSON file and returns a JS object.
 *
 * @param {string} themeJsonPath - Path to the theme JSON file.
 *
 * @returns {object} - The theme JSON object.
 */
function loadThemeJson(themeJsonPath) {
  const themeJson = fs.readFileSync(themeJsonPath, 'utf8');

  return JSON.parse(themeJson);
}

module.exports = loadThemeJson;
