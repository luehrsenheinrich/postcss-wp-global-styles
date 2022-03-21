const postcss = require('postcss');
const plugin = require('./index.js');

test('if the tests run', () => {
  expect(true).toBe(true);
});

test('the valid postcss return', () => {
  expect(plugin().postcssPlugin).toBe('postcss-wp-global-styles');
});

test('the processing of AtRules', () => {
  expect(plugin().AtRule).toBeDefined();
});

test('that the global styles keyword is properly replaced.', async () => {
  const styles = await postcss()
    .use(plugin({
      'themeJson': './test/fixtures/theme.json',
    }))
    .process('@wp-global-styles', { from: undefined });

  expect(styles.css).not.toMatch('@wp-global-styles');
});

test('that proper CSS classes are generated', async () => {
  const styles = await postcss()
  .use(plugin({
    'themeJson': './test/fixtures/theme.json',
  }))
  .process('@wp-global-styles', { from: undefined });

  expect(styles.css).toMatch('.has-foreground-color');
});
