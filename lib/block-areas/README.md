[![WordPress plugin](https://img.shields.io/wordpress/plugin/v/block-areas.svg?maxAge=2592000)](https://wordpress.org/plugins/block-areas/)
[![WordPress](https://img.shields.io/wordpress/v/block-areas.svg?maxAge=2592000)](https://wordpress.org/plugins/block-areas/)

# Block Areas

Introduces a simple method for defining block areas to use the block editor outside of the post content.

This is an experimental plugin that explores basic usage of Gutenberg blocks outside of the content bubble, on a sitewide level.

See the [WP Rig Blockade](https://github.com/wprig/wprig-blockade) project for experimental usage of it.

## Requirements

* WordPress >= 5.0
* PHP >= 7.0

## Usage

After activating the plugin, you can create and edit block areas under *Appearance > Block Areas*. There should be two block areas already, `header` and `footer`.

Block areas are identified by their unique slug. Since `header` and `footer` are expected to exist, make sure not to delete them.

In order to print a specific block area, for example in your theme, use `block_areas()->render( $slug )` (e.g. `block_areas()->render( 'header' )`).

## Contributing

Any kind of contributions to Block Areas are welcome. Please [read the contributing guidelines](https://github.com/wprig/block-areas/blob/master/CONTRIBUTING.md) to get started.
