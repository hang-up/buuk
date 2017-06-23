# Bootstrappers

At its core, a bootstrapper is a standalone module exporting a `boot()` method. All bootstrappers should then be referenced inside `autoload.js`.

In practice, one bootstrapper should equal one specific role fulfilled. As such, Bük ships with default bootstrappers making it easy to extend its capabilities out of the box.

>> **autoload.js**

Entry point of all bootstrappers.

>> **renderBootstrap**

Bük makes use of [markdown-it](https://github.com/markdown-it/markdown-it) as the underlying parser.
This bootstrap will return the appropriate parser using the right options.

>> **routes**

Registers all application specific routes.

>> **themeBootstrap**

Returns the right theme according to the manifest `theme` option.

Bük is compatible with [Marked 2](http://marked2app.com/help/Writing_Custom_CSS.html) theme.
If you wish to add themes or change the theme used, simply 
1) Drop a `scss` stylesheet in `resources/assets/sass/themes`
2) Reference it in this bootstrapper.
3) Update the `theme` key in your manifest.