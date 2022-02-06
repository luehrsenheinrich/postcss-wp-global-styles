const { get } = require("lodash");
const { Rule, Declaration } = require("postcss");

/**
 * Generate the stylesheet needed for a preset meta element.
 *
 * @param {object} element - The element to generate the stylesheet for.
 * @param {object} meta - The metadata for the generator.
 * @returns {object} The AST representing the stylesheet.
 */
function defaultMetadataGenerator (element, meta) {
  const stylesheet = [];

  for( let className in get(meta, 'classes', {}) ) {
    const prop = get(meta, 'classes', {})[className];
    className = className.replace('$slug', element.slug);

    const rule = new Rule({ selector: className });
    rule.append(new Declaration({ prop: prop, value: get(element, meta.valueKey) }));
    stylesheet.push(rule);
  }

  return stylesheet;
}

module.exports = {
  defaultMetadataGenerator,
}
