# Pixelgrade agent harness

The Node runtime behind `wp pixelgrade blocks validate` and `wp pixelgrade blocks canonicalize`.

It reproduces the block editor's canonical serialization **headlessly** — no browser, no login, no
running web server — by loading *the site's own* `wp-includes/js/dist/*` bundles and *the site's
own* installed `nova-blocks/build/*` bundles into a jsdom window. It reimplements nothing.

## This is not part of the plugin

Per the agentic-stack contract (`docs/plans/agentic-stack/CONTRACT.md` §3.11, Gate-1, 2026-08-31)
this package ships **separately** from the nova-blocks distributable. Its dependency is `jsdom` —
~25 MB with its transitive tree — which is not something a WordPress plugin should carry into every
install for a capability almost no site uses. `.zipignore` excludes `tools/` from the zip.

The two `blocks` verbs detect its absence and fail with `ok:false`, `code:"harness_unavailable"`,
exit 1, and a summary naming the install step below. On a stock install the `sm`, `plus` and
`assist` subtrees work fully and these two verbs report `harness_unavailable`. That is the intended
shape, not a gap.

## Install

```bash
npm ci --omit=dev --prefix <plugin>/tools/agent-harness
```

Install it on the surfaces that need it: the lab, agent hosts, CI. Verify:

```bash
node <plugin>/tools/agent-harness/bin/harness.cjs --selftest
# {"ok":true,"protocol":1,"selftest":true,"node":"v22.x.x"}
```

The PHP side runs exactly that probe before doing any other work, which is what separates
"installed" from "cloned but never `npm ci`-ed".

### Node binary discovery (contract §3.11)

1. the `PIXELGRADE_NODE_BINARY` constant, if defined;
2. the `novablocks/node_binary` filter;
3. `node` on `PATH`.

The package directory is discovered the same way: the `PIXELGRADE_AGENT_HARNESS_PATH` constant, the
`novablocks/agent_harness_path` filter, then `<plugin>/tools/agent-harness`.

## Protocol

One JSON request on stdin, one JSON response on stdout. Diagnostics go to stderr, so stdout is
always parsable.

```jsonc
// PHP -> node
{
  "mode": "validate" | "canonicalize",
  "site_bundles_meta": { "abspath": "…/", "plugin_dir": "…/nova-blocks", "site_url": "http://…" },
  "server_block_settings":      { /* get_block_editor_server_block_settings() */ },
  "novablocks_editor_settings": { /* novablocks_get_block_editor_settings()   */ },
  "documents": [ { "id": 12, "content": "<!-- wp:… -->" } ]
}

// node -> PHP
{
  "ok": true,
  "protocol": 1,
  "bootstrap": { "core_bundles_loaded": 53, "registered_block_types": 145, … },
  "documents": [ {
    "id": 12,
    "invalid": [ { "index": 3, "block_name": "core/heading", "reason": "…" } ],
    "canonical_content": "…",          // canonicalize mode only
    "converged": true,
    "inner_text_preserved": true,
    "nested_paragraphs_before": 1,
    "nested_paragraphs_after": 0
  } ]
}
```

`converged` is a same-session signal only. The contract's actual proof is the **second** invocation
PHP makes in `validate` mode over what it read back from the database after the write (§3.9: "a
same-session zero proves nothing").

## Why the two settings blobs are mandatory

Both were the difference between ~60 % and 100 % parity in the W4 spike:

1. **`get_block_editor_server_block_settings()`** — Nova Blocks `block.json` files declare an empty
   `attributes: {}`; PHP merges the real set through `novablocks_merge_attributes_from_array()`.
   Serialization order is the registered attribute key order, which *is* the JSON key order inside
   the block comment. Register from `block.json` alone and attributes reorder and drop (spike F1).
2. **`novablocks_get_block_editor_settings()`** — `core/separator`'s save() reads
   `select('novablocks').getSettings().separator.markup`. Serialization is therefore not a pure
   function of `(blockType, attributes, innerBlocks)`; without the store the block serializes an
   empty `<div>` and then parses invalid (spike F3).

Two load-order rules matter just as much: WP core bundles are ordered from WP's own
`script-loader-packages.php` manifest, and Nova Blocks per-block bundles load **before**
`registerCoreBlocks()` (because `novablocks/supernova` rewrites `core/query` through a
`MAX_SAFE_INTEGER` `registerBlockType` filter — spike F2).

## Non-converging documents

Some hand-authored markup legitimately does not converge: a `core/paragraph` valid before the
recovery pass parses invalid after it. This is **nova-blocks#610**, cross-checked in a real editor
with identical before/after invalid lists and byte-identical serialization — a property of the
markup, not a harness artefact. Those documents report `converged: false`, the command exits **2**,
and nothing retries. `test/corpus/nested-inline-paragraph.html` is a checked-in probe of that class.

## Regenerate the `blocks describe` save-body catalog

`lib/cli/blocks-describe-body-templates.json` is generated output, not hand-authored block markup.
From a built site running the target Nova Blocks revision, pipe the WordPress registry/settings
request into the harness serializer:

```bash
wp --path=/path/to/site eval-file tools/agent-harness/bin/describe-bodies-request.php \
  | node tools/agent-harness/bin/generate-describe-bodies.cjs \
  > lib/cli/blocks-describe-body-templates.json
```

The request helper curates shipped `novablocks/*` editor bundles and supplies fillable Headline
sentinels. The generator loads the site's real WordPress and Nova editor bundles, classifies server
renderers/null-save bodies as dynamic, and copies only serializer-produced inner HTML for static
blocks. Review the generated diff and run `npm test`; never edit template strings by hand.

## Tests

```bash
npm test            # node --test test/
```

Protocol, recovery, text-preservation and reporting logic run against a stubbed `wp` and need no
site. The corpus test needs a WordPress install and is **skipped** unless both are pointed at:

```bash
PIXELGRADE_HARNESS_TEST_ABSPATH=/path/to/site/ \
PIXELGRADE_HARNESS_TEST_PLUGIN_DIR=/path/to/site/wp-content/plugins/nova-blocks \
npm test
```
