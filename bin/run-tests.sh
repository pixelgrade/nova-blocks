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
run "detect-legacy-spacing (node:test)" node --test packages/block-editor/src/filters/with-legacy-spacing-markup/detect-legacy-spacing.test.js

echo "== header JS tests =="
run "layout-definitions (node:test)" node --test packages/block-library/src/blocks/header/layout-definitions.test.js
run "header frontend (jest)" npx --no-install jest packages/block-library/src/blocks/header/frontend/components/index.test.js

rm -f "$tmp"

if [ "$fail" -eq 0 ]; then
	echo "ALL TESTS PASSED"
else
	echo "SOME TESTS FAILED"
fi
exit "$fail"
