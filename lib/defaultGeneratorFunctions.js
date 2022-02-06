const { Rule, Declaration } = require("postcss");

/**
 * Generate the stylesheet for one color pallete preset.
 *
 * @param {object} element - The element to generate the stylesheet for.
 *
 * @returns {object} The AST representing the stylesheet.
 */
function colorPaletteGenerator (element) {
  const stylesheet = [];


  const colorRule = new Rule({ selector: `.has-${element.slug}-color` });
  colorRule.append(new Declaration({ prop: 'color', value: element.color }));
  stylesheet.push(colorRule);

  const backgroundRule = new Rule({ selector: `.has-${element.slug}-background-color` });
  backgroundRule.append(new Declaration({ prop: 'background-color', value: element.color }));
  stylesheet.push(backgroundRule);

  const borderRule = new Rule({ selector: `.has-${element.slug}-border-color` });
  borderRule.append(new Declaration({ prop: 'border-color', value: element.color }));
  stylesheet.push(borderRule);

  return stylesheet;
}

module.exports = {
  colorPaletteGenerator,
}
