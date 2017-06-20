# Bootstrappers

At its core, a bootstrapper is a standalone module exporting a `boot()` method. All bootstrappers should then be referenced inside `autoload.js`.

In practice, one bootstrapper should equal one specific role fulfilled. As such, Bük ships with default bootstrappers making it easy to extend its capabilities out of the box.

>> **autoload.js**

Entry point of all bootstrappers.

>> **localizationBootstap**

Returns the right localization according to the manifest `lang` option.
>> **renderBootstrap**

Returns the appropriate markdown parser.

>> **routes**

Registers all application specific routes.
>> **searchBootstrap**

Returns a flat array of unique articles based on their slug. Used to feed the search feature.
>> **sidebarBootstrap**

Used to define specific behaviour related to the sidebar (logo eg.).
>> **slugBootstrap**

Returns an object representative of the article hierarchy defined in manifest.json. Each article will be generated a slug if necessary.

>> **themeBootstrap**

Returns the right theme according to the manifest `theme` option.

Bük is compatible with [Marked 2](http://marked2app.com/help/Writing_Custom_CSS.html) theme.
If you wish to add themes or change the theme used, simply 
1) Drop a `scss` stylesheet in `resources/assets/sass/themes`
2) Reference it in this bootstrapper.
3) Update the `theme` key in your manifest.