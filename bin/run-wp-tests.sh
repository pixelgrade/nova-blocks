#!/usr/bin/env bash
#
# Run every live WordPress contract against the current Local site.
#
set -uo pipefail

cd "$( dirname "${BASH_SOURCE[0]}" )/.."
fail=0

for test_file in tests/wp-eval/*.php; do
	if ./bin/run-wp-eval.sh "$test_file"; then
		printf '  ok    %s\n' "$( basename "$test_file" )"
	else
		printf '  FAIL  %s\n' "$( basename "$test_file" )"
		fail=1
	fi
done

exit "$fail"
