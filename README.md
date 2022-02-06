# postcss-wp-global-styles

[PostCSS] plugin to render WordPress global styles from a theme.json file..

[PostCSS]: https://github.com/postcss/postcss

```css
@import "wp-global-styles"
```

```css
:root{
  --wp--preset--color--foreground: #000000;
  --wp--preset--color--background: #ffffff;
  --wp--preset--color--primary: #1a4548;
  --wp--preset--color--secondary: #ffe2c7;
  --wp--preset--color--tertiary: #F6F6F6;
}

.has-foreground-color{
  color: #000000;
}

.has-foreground-background-color{
  background-color: #000000;
}

.has-foreground-border-color{
  border-color: #000000;
}

.has-background-color{
  color: #ffffff;
}

.has-background-background-color{
  background-color: #ffffff;
}

.has-background-border-color{
  border-color: #ffffff;
}

.has-primary-color{
  color: #1a4548;
}

.has-primary-background-color{
  background-color: #1a4548;
}

.has-primary-border-color{
  border-color: #1a4548;
}

.has-secondary-color{
  color: #ffe2c7;
}

.has-secondary-background-color{
  background-color: #ffe2c7;
}

.has-secondary-border-color{
  border-color: #ffe2c7;
}

.has-tertiary-color{
  color: #F6F6F6;
}

.has-tertiary-background-color{
  background-color: #F6F6F6;
}

.has-tertiary-border-color{
  border-color: #F6F6F6;
}
```

## Usage

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
