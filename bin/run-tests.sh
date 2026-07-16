#!/usr/bin/env bash
#
# Run the fast, environment-independent Nova Blocks tests:
#   - standalone PHP contract tests (tests/php/*.php — mock WP, no DB)
#   - node contract tests (tests/node/*.cjs)
#   - header JS tests (node:test + jest)
#
# The live-WordPress E2E (tests/wp-eval) is intentionally NOT run here because it
# needs a running site — run it separately with bin/run-wp-eval.sh.
#
# Usage:  bin/run-tests.sh        (also wired as `npm test`)
# Used by the optional pre-commit hook (bin/install-git-hooks.sh).
#
set -uo pipefail

cd "$( dirname "${BASH_SOURCE[0]}" )/.."   # plugin root
fail=0
tmp="$( mktemp )"

run() { # label, command...
	local label="$1"; shift
	if "$@" >"$tmp" 2>&1; then
		printf '  ok    %s\n' "$label"
	else
		printf '  FAIL  %s\n' "$label"; sed 's/^/        /' "$tmp"; fail=1
	fi
}

# Find a working PHP CLI (prefer the newest Local Lightning arm64 build; the
# stock macOS/Homebrew php is often broken for this stack).
PHP="${NB_PHP_CLI:-}"
if [ -z "$PHP" ]; then
	for c in "$HOME/Library/Application Support/Local/lightning-services/php-8."*/bin/darwin-arm64/bin/php; do
		[ -x "$c" ] && PHP="$c" && break
	done
fi
[ -z "$PHP" ] && PHP="php"

echo "== PHP contract tests (php: $PHP) =="
for f in tests/php/*.php; do
	run "$( basename "$f" )" "$PHP" "$f"
done

echo "== node contract tests =="
for f in tests/node/*.cjs; do
	run "$( basename "$f" )" node "$f"
done

echo "== filter JS tests =="
run "detect-legacy-spacing (jest)" npx --no-install jest packages/block-editor/src/filters/with-legacy-spacing-markup/detect-legacy-spacing.test.js
run "custom defaults hook (node:test)" node --test packages/block-editor/src/hooks/use-custom-defaults/index.test.js
run "inner blocks count undo history (node:test)" node --test packages/block-editor/src/hooks/use-inner-blocks-count/index.test.js
run "plus gating analyze (jest)" npx --no-install jest packages/block-editor/src/plus-gating/analyze.test.js
run "plus gate merged boundary (node:test)" node --test packages/block-editor/src/components/plus-gate/group.test.js
run "drawer panel height (jest)" npx --no-install jest packages/block-editor/src/components/drawer/index.test.js
run "group Density removal (jest)" npx --no-install jest packages/block-editor/src/filters/with-space-and-sizing/density-removal.test.js
run "announcement block id persistence (jest)" npx --no-install jest packages/block-library/src/blocks/announcement-bar/block-id.test.js
run "color signal onboarding (jest)" npx --no-install jest packages/color-signal/src/onboarding/build-guide-content.test.js packages/color-signal/src/onboarding/derive-steps.test.js packages/color-signal/src/onboarding/guide-session.test.js packages/color-signal/src/onboarding/practice-section.test.js
run "color toolbar cycling (jest)" npx --no-install jest packages/color-signal/src/components/block-color-signal-toolbar/get-color-signal-levels.test.js packages/color-signal/src/components/palette-picker/palette-options.test.js
run "collection free presets (jest)" npx --no-install jest packages/block-editor/src/filters/with-collection-layout/controls/composition/free-presets.test.js
run "card metadata style control (node:test)" node --test packages/block-editor/src/filters/with-card-details/metadata-style-control.test.js
run "collection style tiles (node:test)" node --test packages/block-editor/src/filters/with-collection-layout/controls/composition/style-tiles.test.js
run "collection layout recipe controls (node:test)" node --test packages/block-editor/src/filters/with-collection-layout/controls/composition/layout-recipe-controls.test.js
run "collection layout recipes (jest)" npx --no-install jest packages/block-editor/src/filters/with-collection-layout/controls/composition/layout-recipes.test.js
run "collection layout custom properties (node:test)" node --test packages/block-editor/src/filters/with-collection-layout/get-collection-layout-custom-properties.test.js
run "server collection layout css (node:test)" env NB_PHP_CLI="$PHP" node --test lib/block-rendering.collection-layout-css.test.js
run "parametric layout events (node:test)" node --test packages/collection/src/frontend/grid/parametric-layout-events.test.js
run "masonry layout engine (jest)" npx --no-install jest packages/collection/src/frontend/grid/masonry-layout-engine.test.js
run "masonry layout events (node:test)" node --test packages/collection/src/frontend/grid/masonry-layout-events.test.js
run "masonry layout lifecycle (jest)" npx --no-install jest packages/collection/src/frontend/grid/handle-masonry-grid.test.js
run "editor masonry layout (jest)" npx --no-install jest packages/collection/src/components/masonry-layout/editor-layout.test.js
run "editor query post order (jest)" npx --no-install jest packages/block-library/src/blocks/supernova/editor-post-order.test.js
run "collection external participant (jest)" npx --no-install jest packages/collection/src/components/external-layout-participant/index.test.js
run "collection load-more payload (jest)" npx --no-install jest packages/collection/src/frontend/load-more/extract-payload.test.js
run "post card rendering contracts (jest)" npx --no-install jest packages/block-editor/src/components/post-card/index.contract.test.js
run "legacy Color Signal markup (node:test)" node --test packages/color-signal/src/filters/legacy-markup.test.js
run "cards depth support (jest)" npx --no-install jest packages/scrolling-effect/src/controls/cards-depth-support.test.js
run "motion recipe gates (node:test)" node --test packages/scrolling-effect/src/controls/motion-recipes-gates.test.js
run "preset engine managed bundles (jest)" npx --no-install jest packages/block-editor/src/preset-engine packages/block-editor/src/components/preset-control packages/block-editor/src/components/preset-cards packages/block-editor/src/filters/with-space-and-sizing/controls/space-and-sizing-presets.test.js packages/scrolling-effect/src/controls/motion-recipes-managed.test.js
run "motion recipes managed contract (node:test)" node --test packages/scrolling-effect/src/controls/motion-recipes-managed-contract.test.js
run "focal point preset-clear guard (jest)" npx --no-install jest packages/utils/src/focal-point.test.js
run "start frame panel contract (node:test)" node --test packages/scrolling-effect/src/controls/start-frame-panel-contract.test.js
run "focal point live drag preview (jest)" npx --no-install jest packages/scrolling-effect/src/controls/start-frame-panel-live-preview.test.js packages/scrolling-effect/src/controls/end-frame-panel-live-preview.test.js packages/scrolling-effect/src/filters/with-scrolling-effect-controls.test.js packages/scrolling-effect/src/filters/with-scrolling-effect-provider.test.js --runInBand --modulePathIgnorePatterns=/packages/block-library/
run "color tile definition builders (jest)" npx --no-install jest packages/color-signal/src/presets/resolve-color-tile-values.test.js packages/block-library/src/blocks/supernova/card-styles/definitions.test.js
run "preset tiles wiring contracts (node:test)" node --test packages/color-signal/src/presets/row-surfaces-wiring.test.js packages/block-library/src/blocks/supernova/card-styles/wiring.test.js
run "placeholder image fallback (jest)" npx --no-install jest packages/block-editor/src/components/get-placeholder-images/index.test.js
run "empty hero media placeholder (jest)" npx --no-install jest packages/block-library/src/blocks/supernova/utils/empty-hero-media-placeholder.test.js
run "unique placeholder image selection (jest)" npx --no-install jest packages/block-library/src/blocks/supernova/utils/placeholder-image-selection.test.js
run "cards collection placeholder defaults (node:test)" node --test packages/block-library/src/blocks/supernova/components/not-posts-collection-layout/index.test.js
run "cards collection add controls (node:test)" node --test packages/block-library/src/blocks/supernova/block-controls.test.js
run "supernova-item media placeholder wiring (node:test)" node --test packages/block-library/src/blocks/supernova-item/edit.test.js
run "supernova-item placeholder defaults (node:test)" node --test packages/block-library/src/blocks/supernova-item/utils.test.js
run "supernova edit contracts (node:test)" node --test packages/block-library/src/blocks/supernova/edit.test.js
run "supernova content alignments css (jest)" npx --no-install jest packages/block-library/src/blocks/supernova/content-alignments.test.js
run "supernova card and pile 3D styles (node:test)" node --test packages/block-library/src/blocks/supernova/card-style.test.js packages/block-library/src/blocks/supernova/collection-style.test.js packages/block-library/src/blocks/supernova/editor-styles.test.js
run "vertical gap + settings tab (node:test)" node --test packages/block-editor/src/filters/with-collection-layout/controls/vertical-gap-modifier-control.test.js
run "sharing color-signal attributes (node:test)" node --test packages/block-library/src/blocks/sharing-overlay/block.test.js
run "core list counter defaults (jest)" npx --no-install jest packages/core/src/blocks/core/list/utils.test.js packages/core/src/blocks/core/list/components/with-altered-settings.test.js packages/core/src/blocks/core/list/legacy-markup.test.js

echo "== header JS tests =="
run "layout-definitions (node:test)" node --test packages/block-library/src/blocks/header/layout-definitions.test.js
run "header styles (node:test)" node --test packages/block-library/src/blocks/header/style.test.js
run "header frontend (jest)" npx --no-install jest packages/block-library/src/blocks/header/frontend/components/index.test.js packages/block-library/src/blocks/header/frontend/components/menu-toggle.test.js

rm -f "$tmp"

if [ "$fail" -eq 0 ]; then
	echo "ALL TESTS PASSED"
else
	echo "SOME TESTS FAILED"
fi
exit "$fail"
