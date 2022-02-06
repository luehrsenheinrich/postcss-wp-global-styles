const { AtRule } = require('postcss');
const processAtRules = require( '../lib/processAtRules' );
const processConfig = require( '../lib/processConfig' );

test( 'the atRule processing to ignore a generic import.', () => {
  const atRule = new AtRule( { name: 'import', params: '"something.css"' } );

  const processed = [];
  const config = processConfig( {} );

  const result = processAtRules( atRule, processed, config );

  expect( result ).toBeFalsy();
} );

test( 'the atRule processing to process our specified import.', () => {
  const atRule = new AtRule( { name: 'import', params: '"wp-global-styles"' } );

  const processed = [];
  const config = processConfig( {
    'themeJson': './test/fixtures/theme.json',
  } );

  const result = processAtRules( atRule, processed, config );

  expect( result ).not.toBeFalsy();
} );
