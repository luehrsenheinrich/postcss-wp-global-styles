const processConfig = require( '../lib/processConfig' );

test( 'that the config returns an object', () => {
  const config = processConfig();

  expect( config instanceof Object ).toBe(true);
} );

test( 'that the config is properly formatted', () => {
  const config = processConfig();

  expect( config.themeJson ).toBeDefined();
  expect( config.themeJson.endsWith( 'theme.json' ) ).toBe(true);
});
