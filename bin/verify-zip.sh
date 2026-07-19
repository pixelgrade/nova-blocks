#!/usr/bin/env bash
#
# Release gate: verify a Nova Blocks release zip is actually shippable.
# The executable version of the manual checklist in AGENTS.md — every check
# here corresponds to a way a broken zip has actually shipped (stale zip
# without build/, private files leaking, version fields out of sync).
#
# Usage:
#   bin/verify-zip.sh                 # verify ../nova-blocks-<version>.zip
#   bin/verify-zip.sh path/to/x.zip   # verify an explicit artifact
#
# Wired as `postzip`, so `npm run zip` fails loudly instead of leaving a
# bad artifact behind. NB_ZIP_EXPECT_FRESH=1 (set by postzip) additionally
# requires the zip to be newer than 30 minutes — the stale-zip trap where a
# crashed packaging run leaves last release's artifact in place.
#
set -uo pipefail

cd "$( dirname "${BASH_SOURCE[0]}" )/.."   # plugin root

fail=0
note() { printf '  ok    %s\n' "$1"; }
err()  { printf '  FAIL  %s\n' "$1"; fail=1; }

# --- Derive the expected version from the source of truth -------------------
VERSION="$( sed -n 's/^[[:space:]]*\**[[:space:]]*Version:[[:space:]]*\([0-9.]*\).*/\1/p' nova-blocks.php | head -1 )"
[ -n "$VERSION" ] || { err "could not read Version: from nova-blocks.php"; exit 1; }

ZIP="${1:-../nova-blocks-${VERSION//./-}.zip}"

echo "== verify-zip: $ZIP (source version $VERSION) =="

# --- Existence and freshness -------------------------------------------------
if [ ! -f "$ZIP" ]; then
	err "zip not found — packaging did not produce the expected artifact"
	exit 1
fi
note "zip exists"

if [ "${NB_ZIP_EXPECT_FRESH:-0}" = "1" ]; then
	if [ -n "$( find "$ZIP" -mmin +30 2>/dev/null )" ]; then
		err "zip is older than 30 minutes — a stale artifact from a previous run"
	else
		note "zip is fresh"
	fi
fi

# --- Size floor (a zip without build/ is ~270KB; a good one ~1MB) ------------
SIZE=$( stat -f%z "$ZIP" 2>/dev/null || stat -c%s "$ZIP" )
if [ "$SIZE" -lt 800000 ]; then
	err "zip is ${SIZE} bytes (< 800KB) — build/ is almost certainly missing"
else
	note "size ${SIZE} bytes"
fi

# Capture archive contents ONCE, grep the variables via herestrings — never
# `stream | grep -q`: under pipefail, grep -q quitting on first match SIGPIPEs
# the producer and a SUCCESSFUL match reads as a failed pipeline.
LISTING="$( unzip -l "$ZIP" )"
MAIN_PHP="$( unzip -p "$ZIP" nova-blocks/nova-blocks.php )"
README="$( unzip -p "$ZIP" nova-blocks/readme.txt )"

# --- Compiled assets present --------------------------------------------------
BUILD_COUNT=$( printf '%s\n' "$LISTING" | grep -c "nova-blocks/build/" || true )
if [ "$BUILD_COUNT" -lt 10 ]; then
	err "only ${BUILD_COUNT} build/ entries — compiled JS/CSS missing"
else
	note "build/ present (${BUILD_COUNT} entries)"
fi

# --- Private/dev files must not ship ------------------------------------------
DENYLIST='nova-blocks/AGENTS|nova-blocks/CLAUDE\.md|nova-blocks/\.ai/|nova-blocks/\.claude|nova-blocks/\.env|napkin\.md|nova-blocks/node_modules/|nova-blocks/\.git|nova-blocks/package\.json|nova-blocks/CHANGELOG\.md|nova-blocks/.+\.test\.(js|cjs|php)'
LEAKS="$( printf '%s\n' "$LISTING" | grep -E "$DENYLIST" || true )"
if [ -n "$LEAKS" ]; then
	err "private/dev files leaked into the zip:"
	printf '%s\n' "$LEAKS" | sed 's/^/        /'
else
	note "no private/dev files"
fi

# --- Version fields inside the artifact ---------------------------------------
ZIP_PLUGIN_VERSION="$( sed -n 's/^[[:space:]]*\**[[:space:]]*Version:[[:space:]]*\([0-9.]*\).*/\1/p' <<< "$MAIN_PHP" | head -1 )"
ZIP_STABLE_TAG="$( sed -n 's/^Stable tag:[[:space:]]*\([0-9.]*\).*/\1/p' <<< "$README" | head -1 )"
if [ "$ZIP_PLUGIN_VERSION" != "$VERSION" ]; then
	err "zip plugin Version '$ZIP_PLUGIN_VERSION' != source '$VERSION'"
else
	note "plugin Version $ZIP_PLUGIN_VERSION"
fi
if [ "$ZIP_STABLE_TAG" != "$VERSION" ]; then
	err "readme Stable tag '$ZIP_STABLE_TAG' != Version '$VERSION'"
else
	note "readme Stable tag matches"
fi

TESTED_PHP="$( sed -n 's/^[[:space:]]*\**[[:space:]]*Tested up to:[[:space:]]*\([0-9.]*\).*/\1/p' <<< "$MAIN_PHP" | head -1 )"
TESTED_README="$( sed -n 's/^Tested up to:[[:space:]]*\([0-9.]*\).*/\1/p' <<< "$README" | head -1 )"
if [ -z "$TESTED_README" ] || [ "$TESTED_PHP" != "$TESTED_README" ]; then
	err "Tested up to mismatch: plugin header '$TESTED_PHP' vs readme '$TESTED_README'"
else
	note "Tested up to $TESTED_README"
fi

# --- Translation step ran ------------------------------------------------------
if ! grep -q "nova-blocks/languages/.*\.pot" <<< "$LISTING"; then
	err "no .pot file — build:translate did not run"
else
	note ".pot present"
fi
if grep -q "__plugin_txtd" <<< "$MAIN_PHP"; then
	err "text domain placeholder __plugin_txtd not replaced"
else
	note "text domain replaced"
fi

# --- Already-released version (warning only: SVN re-packaging is legitimate) ---
if [ -n "$( git tag -l "$VERSION" 2>/dev/null )" ]; then
	echo "  WARN  version $VERSION is already tagged — re-packaging a release is fine, but if this zip contains NEW work, bump the version first"
fi

# -------------------------------------------------------------------------------
if [ "$fail" -ne 0 ]; then
	echo "== verify-zip: FAILED — do not release this artifact =="
	exit 1
fi
echo "== verify-zip: PASSED =="
