=== Block Areas ===

Contributors:      felixarntz
Requires at least: 5.0
Tested up to:      5.2
Requires PHP:      7.0
Stable tag:        0.2.0
License:           GNU General Public License v2 (or later)
License URI:       https://www.gnu.org/licenses/gpl-2.0.html
Tags:              wprig, gutenberg, blocks, editor, theming

Introduces a simple method for defining block areas to use the block editor outside of the post content.

== Description ==

Introduces a simple method for defining block areas to use the block editor outside of the post content.

This is an experimental plugin that explores basic usage of Gutenberg blocks outside of the content bubble, on a sitewide level.

In the long term it will likely eliminate itself once WordPress core and Gutenberg will have completed the next phase of advancing to the sitewide level. The plugin exists as a baseline to have an easy way for experimenting with similar functionality already today.

= Usage =

After activating the plugin, you can create and edit block areas under *Appearance > Block Areas*. There should be two block areas already, `header` and `footer`.

Block areas are identified by their unique slug. Since `header` and `footer` are expected to exist, make sure not to delete them.

In order to print a specific block area, for example in your theme, use `block_areas()->render( $slug )` (e.g. `block_areas()->render( 'header' )`).

You can also explicitly add theme support, specifying which block area slugs your theme relies on (e.g. `add_theme_support( 'block-areas', 'header', 'footer' )`).

== Installation ==

1. Upload the entire `block-areas` folder to the `/wp-content/plugins/` directory or download it through the WordPress backend.
2. Activate the plugin through the 'Plugins' menu in WordPress.

== Frequently Asked Questions ==

= Where should I submit my support request? =

For regular support requests, please use the [wordpress.org support forums](https://wordpress.org/support/plugin/block-areas). If you have a technical issue with the plugin where you already have more insight on how to fix it, you can also [open an issue on Github instead](https://github.com/wprig/block-areas/issues).

= How can I contribute to the plugin? =

If you have some ideas to improve the plugin or to solve a bug, feel free to raise an issue or submit a pull request in the [Github repository for the plugin](https://github.com/wprig/block-areas). Please stick to the [contributing guidelines](https://github.com/wprig/block-areas/blob/master/CONTRIBUTING.md).

You can also contribute to the plugin by translating it. Simply visit [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/block-areas) to get started.

== Screenshots ==

1. Block areas admin screen

== Changelog ==

= 0.2.0 =

* Allow themes to explicitly add `block-areas` theme support and specify which areas they use.

= 0.1.0 =

* Initial release
