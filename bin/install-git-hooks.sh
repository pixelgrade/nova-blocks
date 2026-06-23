#!/usr/bin/env bash
#
# Install the Nova Blocks git hooks (currently: pre-commit -> bin/run-tests.sh).
#
set -euo pipefail

ROOT="$( git rev-parse --show-toplevel )"
chmod +x "$ROOT/bin/run-tests.sh" "$ROOT/bin/git-hooks/pre-commit" "$ROOT/bin/run-wp-eval.sh" 2>/dev/null || true
ln -sf ../../bin/git-hooks/pre-commit "$ROOT/.git/hooks/pre-commit"

echo "Installed pre-commit hook -> bin/run-tests.sh"
echo "Skip once with: git commit --no-verify"
