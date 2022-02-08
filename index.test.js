const index = require('./index.js');
const plugin = index();

test('if the tests run', () => {
  expect(true).toBe(true);
});

test('the valid postcss return', () => {
  expect(plugin.postcssPlugin).toBe('postcss-wp-global-styles');
});

test('the processing of AtRules', () => {
  expect(plugin.AtRule).toBeDefined();
});
