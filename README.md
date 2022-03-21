# postcss-wp-global-styles

[PostCSS] plugin to render WordPress global styles from a [theme.json] file and inline them.

As of now it only supports preset styles.

[PostCSS]: https://github.com/postcss/postcss
[theme.json]: https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/

## Usage
Add this keyword to one of the CSS files processed by PostCSS.

`css/input.css`:
```css
@wp-global-styles;

body {
  background: black;
}
```
will give you
```css
/* ... result of the rendered WordPress global styles inlined into the CSS file */

body {
  background: black;
}
```

## Options

### `themeJson``

Type: `String`
Default: `./theme.json`

The location where the theme.json will be loaded from.

## Installation

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-wp-global-styles
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-wp-global-styles'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
