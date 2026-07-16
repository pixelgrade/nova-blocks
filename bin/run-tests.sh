#!/usr/bin/env bash
#
# Run every environment-independent Nova Blocks test through the consolidated
# runner. JavaScript test files are discovered automatically; live WordPress
# contracts remain in `npm run test:wp` because they require a running site.
#
# Usage: bin/run-tests.sh (also wired as `npm test` and the pre-commit hook)
#
set -euo pipefail

cd "$( dirname "${BASH_SOURCE[0]}" )/.."

# Find a working PHP CLI (prefer Local's arm64 builds; the stock
# macOS/Homebrew PHP is often broken for this stack).
PHP="${NB_PHP_CLI:-}"
if [ -z "$PHP" ]; then
	for candidate in "$HOME/Library/Application Support/Local/lightning-services/php-8."*/bin/darwin-arm64/bin/php; do
		if [ -x "$candidate" ]; then
			PHP="$candidate"
			break
		fi
	done
fi
[ -z "$PHP" ] && PHP="php"

export NB_PHP_CLI="$PHP"
exec node ./bin/run-fast-tests.cjs "$@"
