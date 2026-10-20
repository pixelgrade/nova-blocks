# Choosing the header navigation editor

Themes that support Nova header navigation expose **Appearance → Header Navigation**.
The page lists the menus currently assigned to each header location and links directly to them.

Existing classic menus stay in **Appearance → Menus** by default. Empty header locations
can use the inline header editor automatically. Menus already managed by an earlier version
keep their block editing workflow when compatible.

Choose **Classic menus** to stop block projection and edit the currently assigned menus in
Appearance → Menus or the Customizer. This keeps the latest generated menu and its edits;
it does not restore an older source menu. The Menus screen also links to this setting and
identifies the menu currently used by each header location.

Choose **Header block editor** to import the currently assigned compatible menus. Applying
this option again imports the latest classic edits. Reopen the header editor afterward:
previously open editors are no longer connected to the imported menus. If a previously used
header location is now unassigned, assign its intended menu before importing. Nova keeps
that deliberate unassignment instead of restoring an older generated menu.

Menus with additional per-item plugin settings stay in the classic editor. Nova checks the
assigned menu, its generated target and recorded source before writing. Older generated menus
without a recorded source also require a conservative check of potential original menus. This
may keep an older location in classic editing until its configuration is reviewed. Unrelated
menus do not affect fresh empty locations or new projections with known provenance.

Switching editors cannot reconstruct settings omitted by an older conversion. Review the
currently assigned menu and its original before deciding which to use. Nova does not
silently replace newer menu edits with an older original.

## Developer override

The existing `novablocks/enable_block_nav_editing` filter still overrides the site mode.
Returning `false` stops all block projection and inline references. Returning `true` allows
explicit adoption of compatible menus but cannot bypass compatibility or location ownership.
After classic edits, use the settings page to explicitly reimport; toggling a PHP filter does
not automatically synchronize an older navigation entity. Changing a location assignment
away from its generated menu prevents an old entity from reclaiming the location.

The compatibility check deliberately avoids copying arbitrary extension metadata. It covers
per-item post metadata; it does not establish compatibility with extensions storing their
configuration outside WordPress menu-item metadata.
