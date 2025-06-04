=== Nova Blocks by Pixelgrade ===
Contributors: pixelgrade, vlad.olaru, babbardel, razvanonofrei, gorby31
Tags: blocks, editor, gutenberg, gutenberg blocks, page builder, block enabled, page building, full site editing, site editor, posts collection
Requires at least: 5.9
Tested up to: 6.8
Stable tag: 2.1.9
Requires PHP: 7.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A collection of distinctive Gutenberg blocks, committed to making your site shine like a newborn star.

== Description ==

Nova Blocks is a collection of **distinctive Gutenberg blocks,** committed to making your site shine like a newborn star. It is taking a design-driven approach to help you made the right decisions and showcase your content in the best shape.

= Positioning =

*Clear and obvious, exciting and not afraid to take risks, distinctive, forward thinking.*

1. Obvious, not *confusing*
2. Exciting, not *dull*
3. Distinctive, not *common*

= Principles =

1. Decisions not options
2. Purpose-driven
3. Distinctive
4. Cross-themes oriented

= Tested with the following WordPress themes: =

* [Julia LT](https://pixelgrade.com/themes/blogging/julia-lt/) _by Pixelgrade_
* [Rosa LT](https://pixelgrade.com/themes/restaurants/rosa-lt/) _by Pixelgrade_
* [Felt LT](https://pixelgrade.com/themes/blogging/felt-lt/) _by Pixelgrade_
* [Twenty Nineteen](https://wordpress.org/themes/twentynineteen/) _by WordPress team_
* [Storefront](https://wordpress.org/themes/storefront/) _by Automattic_
* [Osteria](https://pixelgrade.com/themes/restaurants/osteria/) _by Pixelgrade_

**Made with love by [Pixelgrade](https://pixelgrade.com/)**

== Contributing ==

The proposed value of **Open Source** is that by freely sharing the code with the community, others can use, improve and contribute back to it.

It's great if you're willing to use your skills, knowledge, and experience to help further refine this project with your own improvements. We really appreciate it and you're 💯 welcome to submit an issue or pull request on any topic.

=== How can you help? ===

* **Discovered an issue?** Please report it [here](https://github.com/pixelgrade/nova-blocks/issues/new "here").
* **Fixed a bug?** Send a [pull request](https://github.com/pixelgrade/nova-blocks/pulls "pull request").
* **Need a feature?** Propose it [here](https://github.com/pixelgrade/nova-blocks/issues/new "here").
* **Have you made something great?** [Share](https://github.com/pixelgrade/nova-blocks/issues/new "Share") it with us.

== Translations ==

You can translate Nova Blocks on [__translate.wordpress.org__](https://translate.wordpress.org/projects/wp-plugins/nova-blocks).

== Credits ==

Unless otherwise specified, all the plugins files, scripts and images are licensed under GNU General Public License v2 or later.

The Nova Blocks plugin bundles the following third-party resources:

* [jQuery Bully plugin](http://pixelgrade.github.io/rellax/) Copyright (c) 2016 Pixelgrade - License: MIT
* [jQuery Slick plugin](http://kenwheeler.github.io) Copyright (c) 2017 Ken Wheeler - License: MIT
* [jQuery Velocity plugin](http://velocityjs.org/) Copyright (c) 2014-2017 Julian Shapiro - License: MIT
* [JS Cookie](https://github.com/js-cookie/js-cookie) Copyright (c) 2018 Klaus Hartl, Fagner Brack, GitHub Contributors - License: MIT

== Installation ==

Installing "Nova Blocks" can be done either by searching for "Nova Blocks" via the `Plugins → Add New` screen in your WordPress dashboard, or by using the following steps:

1. Download the plugin via WordPress.org.
2. Upload the ZIP file through the `Plugins → Add New → Upload` screen in your WordPress dashboard.
3. Activate the plugin through the `Plugins` menu in WordPress.

== Frequently Asked Questions ==

= Can I use the Nova Blocks with my own theme? =

Yes! The editor blocks in Nova Blocks are build to inherit your theme style as much as possible.

= Is Nova Blocks free? =

Yes! Nova Block's core features are free to use.

== Screenshots ==

1. Hero of the Galaxy block options
2. Media Card Constellation block options
3. Slideshow Me the Way block options

== Changelog ==

= 2.1.9 =
* Fixed an authenticated (Contributor+) stored XSS in the Cards Collection → supernova-item block (`buttonsStyle` attribute).
* Added whitelist sanitization + `esc_attr()` escaping for `buttonsStyle`; verified with WordPress 6.8 & PHP 8.3.

= 2.1.8 =
* Fixed an authenticated (Contributor+) stored cross-site scripting (XSS) vulnerability via the 'align' attribute of the 'wp:separator' Gutenberg block.
* Improved sanitization and escaping of the 'align' attribute to prevent potential XSS attacks.

= 2.1.7 =
* Resolved a compatibility issue with WordPress 6.5.x where blocks displayed the error "This block has encountered an error and cannot be previewed."
* Fixed an intermittent issue where 'novablocks-drawers' could collapse due to a miscalculation of height at 0px. This was caused by the 'getActiveDrawerTitleHeight' function returning incorrect values under certain rendering conditions.
* Modified the Conversation System to make the "Background" field optional, addressing errors encountered when users tried to comment without filling this field.
* Tested compatibility with the latest WordPress 6.5.3 version.

= 2.1.6 =
* Fixed issue with blocks options being hidden when opening a sliding panel
* Restored missing Content Alignment icons in Space and Sizing component

= 2.1.5 =
* Fix Supernova query in certain situations.
* Fix PHP warnings.
* Test with the latest WordPress version (6.0.3).

= 2.1.4 =
* Add scrolling effect preview for Supernova blocks with carousel layout.
* Improve container and content height behavior for blocks with or without Doppler effect.
* Fix PHP 8.0+ error.
* Test with the latest WordPress version (6.0.1).

= 2.1.3 =
* Improve cards management for Supernova Item blocks
* Improve display of Hero blocks inside block pattern preview
* Improve Open Hours block's instructions inside the block editor
* Improve Site Color Variation setting preview in Customizer
* Fix display of Author meta for posts inside the Supernova block
* Fix masonry layout preview in editor for Supernova block
* Fix parametric grid layout display on mobile devices

= 2.1.2 =
* Add the ability to preview the scrolling effect set for supernova blocks inside the editor
* Add the block appender to the novablocks/supernova-item block for easier inner blocks insertion
* Add support for custom id and classnames for supernova and supernova-item blocks
* Fix header foreground color when overlapping colorful blocks
* Fix header block animation on scroll in Safari

= 2.1.1 =
* Fix Supernova block controlling its innerBlocks count and their attributes
* Fix shapes generated by ShapeModeling component; remove animations from editor

= 2.1.0 =
* Removed deprecated blocks
* Performance optimization
* Fixes to i18n (missing translatable strings)
* Add advanced filtering block (FacetWP integration)
* Add CPT metafields block
* Many styling fixes and improvements
* Ensure compatibility with WordPress 6.0

= 2.0.4 =
* Fix query loop card's blocks alignment
* Fix site branding alignment
* Fix the display of carousel pagination inside editor
* Update the .pot file with all the translatable strings
* Fix Supernova hero variation initial content (buttons)
* Fix Supernova preview for items with predefined fields
* Post Meta block: Use a more standard avatar size for avatar URL
* Add "alignfull" class to Sidecar block to allow layout inside hero-like Supernova items
* Improve build process

= 2.0.3 =
* Fix announcement-bar block (missing blockId attribute)
* Fix error in site editor (related to hide deprecated blocks)
* Styling fixes for images in content
* Styling adjustments to the conversation starter section of the post-comments block
* Improve the google-map block to adjust styling in dark mode
* Styling fixes for sticky widgets
* Styling fixes for carousels inside heroes
* Improve duotone component
* Styling improvements to dropcap
* Improve Supernova block media aspect-ratio handling
* Styling fixes and improvements to parametric grid layouts (media handling)
* Apply color-signal logic to all scroll indicators in heroes

= 2.0.2 =
* Change post comments block default avatar size to a more standard one (96) to avoid further thumbnail generation.
* Fix styling for the reading bar
* Decrease hero and promo bar heights when used together
* Fix Supernova Item block padding
* Improve sidebars width calculations
* Cleanup and improve the menu-food block
* Fix separators color in dark-mode
* Fix content width in certain situations
* Hide deprecated blocks from the inserter via the block editor preferences logic.

= 2.0.1 =
* Ensure blocks full compatibility with other custom post types (e.g. WooCommerce products)
* Minor improvements and fixes for the integration with the Style Manager plugin and its Color and Fonts Systems
* General blocks interface improvements and fixes
* Improvements and fixes for the google-map block
* Improve global spacing styling
* Improvements and fixes for the carousel styles
* Improvements and fixes for the header block
* Improve masonry layouts styling for Cards Collection blocks
* Fixes for the sharing popup colors
* Fixes for card button alignment
* Fixes for the OpenTable block
* Update blocks interface copy
* Ensure compatibility with the latest Gutenberg version

= 2.0.0 =
* Major update with a lot of new features, improvements and bug fixes
* Integrated Full Site Editing experience
* New Blocks for card collections, heroes, slideshows, carousels and more
* Improved Color Signal controls and behaviour
* Improved Header block layout and styling
* Added Masonry layout for Cards Collection blocks
* Added Color Signal and Space and Sizing controls to some core blocks

= 1.13.4 =
* Fixes Doppler Scrolling effect for Hero and Slideshow blocks
* Fixes some bugs that were breaking the Customizer

= 1.13.3 =
* Better handling of block configuration.

= 1.13.2 =
* Fix migration to the new Matrix Alignment control

= 1.13.1 =
* Escape data attributes on blocks that were messing up layout.

= 1.13.0 =
* Added Space and Sizing controls for the Group, Hero and Slideshow block
* Enhanced Hero block content layout
* Fixed Color Signal component logic for nested blocks
* Fixed styling conflicts with menu items inside the Customizer

= 1.12.8 =
* Improved selection of Header Row and Sidecar blocks inside the block editor
* Improved Header Row blocks layout when Site Logo is missing
* Fixed Block Alignment Matrix toolbar control
* Fixed blocks layout inside the Widget Editor

= 1.12.7 =
* Fixed spacing inside Conversations block.
* Fixed Food Menu label color.
* Fixed OpenTable Block preview.
* Add palette shifted class on frontend when Use Color as Reference is checked.
* Fixed a bug in Advanced Gallery that was preventing the block from being inserted.
* Improved OpenTable styling inside the Editor.
* Removed theme related styles for Site Logo.
* Update logic for Scroll Button.
* Removed Header Row background on mobiles.

= 1.12.0 =
* New Color Signal component for an enhanced experience editing block colors
* Updated Hero, Media and Slideshow blocks to use core Matrix Alignment component
* Extended core List block for more flexibility on the block's appearance

= 1.11.2 =
* Improved reading progress bar.
* Updated default pull value for Group block.
* Use novablocks_medium image size for Posts Collection thumbnail.

= 1.11.1 =
* Fixed error caused by missing sidebar element.

= 1.11.0 =
* New Block: Sidecar that will help users to create layouts with sidebar.
* Extended Header block with new features inside articles (reading progress bar, current article, next article, sharing buttons).

= 1.10.0 =
* Conversation System: Style properly message shown after a discussion  has been closed.
* Card: Use class added by the user inside Additional Class field.
* Header: Fix header remaining open when navigating between pages.
* Cards Collection: Fix layout with 4 columns inside the editor.

= 1.9.0 =
* Enhance Header block to allow multiple rows layouts
* Improve frontend performance by reducing scripts size
* Fix Separator block selection inside the block editor
* Fix display of scrolling indicators

= 1.8.0 =
* New Block: Conversation System to display an improved comments list and comment form
* New Block: Sharing System to display a popup with multiple ways of sharing the page it is used on
* Added proper video support for the Cards Collection block
* Fixed templates for Hero and Media Card block which weren't working with WordPress 5.6

= 1.7.1 =
* Fix spacing inside block areas on pages that aren't built with the block editor

= 1.7.0 =
* Add colour variations for the Media Card, Posts Collection and Cards Collection blocks
* Add "Reading time" option to article meta source for the Posts Collection block
* Improve frontend performance by better handling scripts and styles loading
* Improve user experience by making the active controls tab persistent when navigating between blocks
* Improve the experience of editing galleries in the Media Card Constellation and Gallery of the Stars blocks
* Improve the organization of controls for various blocks
* Improve display of Media Card blocks that have no inner blocks
* Fix display of the Cards Collection block

= 1.6.2 =
* Add card placeholders when loading posts for the Posts Collection block in the editor
* Improve alignment and spacing for the Posts Collection block in the frontend

= 1.6.1 =
* Fix gallery display in the frontend for Gallery of the Stars block

= 1.6.0 =
* Add parametric layout generation controls for the Posts Collection block
* Add video support for the Media Card Constellation block
* Improve performance by splitting and enqueueing only for blocks that are used on a page

= 1.5.4 =
* Fix Media Card Constellation block Image Resizing and Image Position options
* Fix buttons alignment inside Cards Collection when using Content Alignment option
* Reduce size of placeholder images fetched from Unsplash on Slideshow Me the Way
* Load Posts Collection block only for themes which support this block
* Allow the accent colour of the map to be updated after the a block was saved to a page

= 1.5.3 =
* Add caption and description to Media Card and Gallery of the stars images
* Add toggle to hide content of the Hero block
* Improve Slideshow gallery creation UX
* Fix Announcement Bar vertical alignment
* Fix Focal Point picker guides in WordPress 5.5
* Fix automatic Slideshow height in the block editor

= 1.5.2 =
* Fix Slideshow Me The Way block display in the block editor

= 1.5.1 =
* Fix Media Card Constellation block deprecation method

= 1.5.0 =
* New Block: Posts Collection for displaying posts
* Added placeholder images for most blocks
* Added an advanced vertical alignment system for the Media Card block
* Added new controls for the Media Card block
* Added new controls for the Food Menu blocks
* Improved usability of blocks by reorganising sidebar controls in sections

= 1.4.3 =
* Add video support for Slideshow Block
* Fix video background autoplay for Hero block on mobile devices
* Fix alignment and display for Slideshow Block in editor

= 1.4.2 =
* Improved labels for Map block options in the editor
* Improved Cards Collection block alignment
* Fixed display of Media Card block on small devices
* Fixed Map controls in the frontend

= 1.4.0 =
* New Block: Gallery of the Stars for creative gallery layouts
* Enhanced block: Media Card Constellation's gallery can also use creative layouts

= 1.3.2 =
* Fix Hero block minimum height attribute

= 1.3.1 =
* Fix fatal error

= 1.3.0 =
* New Block: Open Hours to display businesses open hours
* New Block: Cards Collection to display related items in a coherent layout
* Added a new style for the Food Menu block
* Fixed parallax scaling and overflow issues
* Fixed block toolbar positioning for full width blocks
* Fixed Media Card block images attribute parsing
* Improved controls display and copy for the Headline block

= 1.2.2 =
* Fixed parallax scrolling for Safari browser

= 1.2.1 =
* Quick fix for blocks crashing after some class name changes in the block editor in Gutenberg 7.5

= 1.2.0 =
* New: Implemented Doppler scrolling effect for the hero block
* New: Added video support for the Hero Block
* Improved accessibility by taking into consideration the user's prefers-reduced-motion setting and disabling parallax
* Fixed style controls and display for Map Block
* Fixed a few visual issues for the Food Menu, Headline and Media Card blocks

= 1.1.6 =
* Fixed customized map style.
* Quick fix to avoid "Undefined index" PHP notice.
* Fixed Scroll and Position Indicators on the latest version of Gutenberg.

= 1.1.5 =
* Added anchor links for creating a one-page site.
* Allow themes to declare support for more complex blocks.
* Fix for Hero block background logic and focal point missing.
* Bug fix for Slideshow block.
* Minor refactoring and cleanup.

= 1.1.4 =
* Improved parallax performance on mobile devices.
* Removed script dependencies and reduced bundle size.
* Fixed Media Card display in the editor.

= 1.1.3 =
* Quick, but very important fix for the latest version of the Gutenberg plugin (v6.6.0). This is a temporary fix until the situation in Gutenberg gets fixed.

= 1.1.2 =
* Quick fix for parallax on Safari 13.

= 1.1.1 =
* Minor fix for the Media Card block.

= 1.1.0 =
* New block: **Headline**
* New block: **Map** (Google Map)
* New block: **Food Menu**
* New block: **Announcement Bar**
* Significant **improvements** to block controls and behavior.
* Updated translation file.

= 1.0 =
* Initial release
