#!/usr/bin/env bash
#
# Run a wp-eval test in a live WordPress context (DB + active theme loaded).
# These tests assume WP is loaded — they are not standalone like tests/php/*.
#
# Usage:
#   bin/run-wp-eval.sh tests/wp-eval/header-nav-projection-e2e.php
#
# Auto-discovers the Local run dir (MySQL socket + php.ini) and the newest
# php-8.x Lightning binary. Override with env vars if discovery is wrong:
#   NB_LOCAL_RUN=/path/to/Local/run/<id>  NB_PHP=/path/to/php  bin/run-wp-eval.sh <test>
#
set -euo pipefail

TEST="${1:?Usage: $0 <path-to-wp-eval-test.php>}"

# public/ web root (this script lives in .../plugins/nova-blocks/bin).
SITE_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../../../.." && pwd )"
LOCAL_BASE="$HOME/Library/Application Support/Local"

# Newest Lightning php-8.x arm64 (Local's php.ini references a matching version).
NB_PHP="${NB_PHP:-$( ls -d "$LOCAL_BASE/lightning-services/php-8."*/bin/darwin-arm64/bin/php 2>/dev/null | sort -V | tail -1 )}"

# Run dir whose conf references this site AND has a live MySQL socket.
if [ -z "${NB_LOCAL_RUN:-}" ]; then
	for d in "$LOCAL_BASE/run/"*/; do
		if [ -S "$d/mysql/mysqld.sock" ] && grep -rqs "$SITE_ROOT" "$d/conf/" 2>/dev/null; then
			NB_LOCAL_RUN="${d%/}"
			break
		fi
	done
fi

: "${NB_PHP:?Could not find a php-8.x binary; set NB_PHP}"
: "${NB_LOCAL_RUN:?Could not find the Local run dir; set NB_LOCAL_RUN}"

ABS_TEST="$( cd "$( dirname "$TEST" )" && pwd )/$( basename "$TEST" )"

cd "$SITE_ROOT"
PHPRC="$NB_LOCAL_RUN/conf/php" "$NB_PHP" -r \
	"define('WP_USE_THEMES', false); require 'wp-load.php'; require '$ABS_TEST';"
