#!/usr/bin/env bash
#
# Fresh-site smoke: install a brand-new WordPress into a throwaway directory
# and database, symlink THIS working tree's stack (Anima + Style Manager +
# Nova Blocks), activate it the way a new user would, and assert the seams
# that have actually broken on fresh sites:
#
#   - plugin/theme activation fatals (the SM 2.3.0-beta1 class);
#   - the empty-header class (Anima registering header patterns before
#     Nova Blocks' patterns exist — init-priority ordering);
#   - fatals/uncaught errors in debug.log after a full activation pass.
#
# Assertions live in tests/fresh-site/assertions.php — grow that file by one
# assertion per fresh-site incident.
#
# Reuses the Local plumbing conventions of bin/run-wp-eval.sh: newest
# Lightning php-8.x and the run dir whose MySQL socket serves this site.
# wp-cli core downloads are cached (~/.wp-cli/cache), so only the first run
# needs the network.
#
# Usage:  bin/run-fresh-site-smoke.sh          (per release, not pre-commit)
#         NB_SMOKE_KEEP=1 ... to keep the site dir on success too
#
set -uo pipefail

PLUGIN_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
SITE_ROOT="$( cd "$PLUGIN_ROOT/../../.." && pwd )"        # .../app/public
WP_CONTENT="$SITE_ROOT/wp-content"
LOCAL_BASE="$HOME/Library/Application Support/Local"

DB_NAME="nova_fresh_smoke"
SMOKE_DIR="${NB_SMOKE_DIR:-${TMPDIR:-/tmp}/nova-fresh-smoke}"

fail() { echo "  FAIL  $1"; echo "== fresh-site smoke: FAILED (site kept at $SMOKE_DIR) =="; exit 1; }
note() { echo "  ok    $1"; }

# --- Local plumbing discovery -------------------------------------------------
# Prefer the php-8.2 line (what the site itself runs; 8.5 makes the wp-cli
# phar itself noisy), fall back to the newest 8.x.
NB_PHP="${NB_PHP:-$( ls -d "$LOCAL_BASE/lightning-services/php-8.2"*/bin/darwin-arm64/bin/php 2>/dev/null | sort -V | tail -1 )}"
NB_PHP="${NB_PHP:-$( ls -d "$LOCAL_BASE/lightning-services/php-8."*/bin/darwin-arm64/bin/php 2>/dev/null | sort -V | tail -1 )}"
[ -x "${NB_PHP:-}" ] || fail "no Lightning php-8.x binary found (set NB_PHP)"

# wp-cli's db commands shell out to a `mysql` client — Local bundles one.
MYSQL_BIN="$( ls -d "$LOCAL_BASE/lightning-services/mysql-8."*/bin/darwin-arm64/bin 2>/dev/null | sort -V | tail -1 )"
[ -n "$MYSQL_BIN" ] && export PATH="$MYSQL_BIN:$PATH"

SOCK=""
for d in "$LOCAL_BASE/run/"*/; do
	if [ -S "$d/mysql/mysqld.sock" ] && grep -rqs "$SITE_ROOT" "$d/conf/" 2>/dev/null; then
		SOCK="$d/mysql/mysqld.sock"
		break
	fi
done
[ -S "${SOCK:-}" ] || fail "no live Local MySQL socket for this site (is the site running in Local?)"

# /usr/local/bin/wp is the raw phar (`#!/usr/bin/env php`), which would pick
# up whatever broken PHP sits first on PATH — run it under the Lightning
# binary explicitly instead of trusting WP_CLI_PHP.
WP_CLI_PHAR="${NB_WP_CLI:-/usr/local/bin/wp}"
[ -f "$WP_CLI_PHAR" ] || fail "wp-cli not found at $WP_CLI_PHAR (set NB_WP_CLI)"
WP() { "$NB_PHP" -d error_reporting='E_ALL & ~E_DEPRECATED' "$WP_CLI_PHAR" --path="$SMOKE_DIR" "$@"; }

echo "== fresh-site smoke (php: $NB_PHP) =="
echo "   site: $SMOKE_DIR  db: $DB_NAME"

# --- Fresh WordPress -----------------------------------------------------------
rm -rf "$SMOKE_DIR"
mkdir -p "$SMOKE_DIR"

WP core download --skip-content --quiet || fail "wp core download"
note "core downloaded"

WP config create --dbname="$DB_NAME" --dbuser=root --dbpass=root \
	--dbhost="localhost:$SOCK" --skip-check --quiet \
	--extra-php <<'PHP' || fail "wp config create"
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
PHP

WP db drop --yes >/dev/null 2>&1 || true
WP db create --quiet || fail "wp db create (root/root on the Local socket)"
WP core install --url="http://nova-fresh-smoke.local" --title="Fresh Smoke" \
	--admin_user=admin --admin_password=fresh-smoke-pass \
	--admin_email=smoke@example.com --skip-email --quiet || fail "wp core install"
note "fresh WordPress installed"

# --- This working tree's stack, exactly as a user would activate it ------------
mkdir -p "$SMOKE_DIR/wp-content/plugins" "$SMOKE_DIR/wp-content/themes"
ln -s "$WP_CONTENT/themes/anima" "$SMOKE_DIR/wp-content/themes/anima"
ln -s "$WP_CONTENT/plugins/style-manager" "$SMOKE_DIR/wp-content/plugins/style-manager"
ln -s "$PLUGIN_ROOT" "$SMOKE_DIR/wp-content/plugins/nova-blocks"

# Activation order mirrors a fresh setup; each step alone so a fatal is
# attributed to the component that raised it.
WP plugin activate style-manager --quiet || fail "ACTIVATION FATAL: style-manager"
note "style-manager activated"
WP plugin activate nova-blocks --quiet || fail "ACTIVATION FATAL: nova-blocks"
note "nova-blocks activated"
WP theme activate anima --quiet || fail "ACTIVATION FATAL: anima"
note "anima activated"

# --- The seam assertions ---------------------------------------------------------
WP eval-file "$PLUGIN_ROOT/tests/fresh-site/assertions.php" || fail "seam assertions (see output above)"

# --- No fatals slipped into the debug log ----------------------------------------
DEBUG_LOG="$SMOKE_DIR/wp-content/debug.log"
if [ -f "$DEBUG_LOG" ] && grep -qE "PHP Fatal|Uncaught" "$DEBUG_LOG"; then
	grep -E "PHP Fatal|Uncaught" "$DEBUG_LOG" | head -5 | sed 's/^/        /'
	fail "fatals in debug.log"
fi
note "debug.log clean of fatals"

# --- Teardown ---------------------------------------------------------------------
WP db drop --yes >/dev/null 2>&1 || true
if [ "${NB_SMOKE_KEEP:-0}" != "1" ]; then
	rm -rf "$SMOKE_DIR"
fi
echo "== fresh-site smoke: PASSED =="
