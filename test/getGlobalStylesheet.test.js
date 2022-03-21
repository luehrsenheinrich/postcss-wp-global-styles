const getGlobalStylesheet = require('../lib/getGlobalStylesheet');
const processConfig = require('../lib/processConfig');

test( 'that the global stylesheet is generated', () => {
  const config = processConfig( {
    'themeJson': './test/fixtures/theme.json',
  } );

  const stylesheet = getGlobalStylesheet(config);

  expect( stylesheet instanceof Object ).toBe(true);
});

test( 'that loading a non existent theme.json will fail', () => {
  const config = processConfig( {
    'themeJson': './test/wrong-fixtures/theme.json',
  } );

  expect( () => {
    getGlobalStylesheet(config);
  }).toThrowError();
});
