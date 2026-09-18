# Nova Blocks #607 — final isolated investigation, 2026-09-18

**Recommendation: keep #607 open.** Current Nova corrects the reported page/hero width geometry through the already implemented #608 change. This does not prove full Rosa 2 visual parity or general Nova 2.x compatibility. Reliable legacy update prevention is still unresolved and needs explicit theme compatibility metadata plus Care changes and a defined behavior when Care is absent. No tracked source, customer site, GitHub issue, or update policy was modified by this investigation.

## Reproduction and bounded result

The isolated site uses the actual classic **Rosa2 1.13.1** theme source from Anima commit `e3483ee393d42e4c324d21edd28fe96f78b00224` (`origin/release/1.13.x`), WordPress 7.1.1, Style Manager 2.5.2, Pixelgrade Care 1.20.1, PHP 8.2.29, and a fresh SQLite database. It uses six independently authored fixtures, rather than customer content. Gutenberg is not separately activated; this is frontend template and width testing, not editor or customer-content migration certification.

The fixtures are a plain page, legacy Hero page, wide Group page, Hero plus inner Sidecar page, inner Sidecar page, and stock single post. Each was measured at **390, 768, 1024, 1440, and 1920 px**, under official Nova **1.13.4**, historical **2.5.3**, and current **2.6.6.1**: **90 final geometry observations**. The actual Rosa page template supplies `main#main > article.hentry > Sidecar`, reproducing the customer wrapper chain.

At 1440 px, all five page fixtures produce:

| Nova | `main` display | Article grid column | Article left / width | Legacy Hero left / width |
| --- | --- | --- | --- | --- |
| 1.13.4 supported line | block | auto | 32 / 1376 | 0 / 1440 |
| 2.5.3 historical regression | grid | cs / ce | 489 / 462 | 489 / 840 |
| 2.6.6.1 current | block | auto | 32 / 1376 | 32 / 1376 |

All **25 current page cases** have symmetric article margins and document scroll width equal to viewport width. The historical desktop values reproduce the issue's exact narrow-parent trap. Removing generic `[id="main"]` from the layout roots in Nova commit `0650614589020c3f253566fa9c85e1fca4f83cc1` leaves this classic wrapper block-level, so it no longer forces the article onto central grid tracks before the Sidecar establishes its own grid. Current Sidebar None markup also has `nb-sidecar--no-left-rail nb-sidecar--no-right-rail`; an extra generic Sidebar None rule is not required to establish the page result. Adding arbitrary `.hentry` or `.entry-content` roots is not supported by these results.

**The proof is limited to page/hero width geometry.** Supported and current screenshots differ in header treatment, Hero colors/text and vertical sizing. Current Hero width is centered inside the article rather than matching the supported version's full-viewport Hero. Those visible differences mean these tests must not be presented as full Rosa 2 visual parity or as a recommendation to upgrade this legacy theme to Nova 2.x.

### Stock single-post limitation

The stock single-post fixture overflows at desktop in **every version, including supported Nova 1.13.4**. At 1440 px, document scroll widths are **2449 / 2373 / 2391** for Nova 1.13.4 / 2.5.3 / 2.6.6.1 respectively. It fits at 390 and 768 px in all three variants. This is a baseline/environment failure in this fixture, not evidence of a new Nova 2 regression, and it was deliberately not pursued as another fix. Do not claim that all six fixtures are overflow-free, or that this matrix certifies a complete customer recovery across every template.

## Update protection: actual current Care runtime

`live-care-policy-{version}.json` contains **18 cases**, six per installed Nova variant, running real WordPress bootstrap and the actual Care 1.20.1 conditional-updates module. Each records hook presence, Nova remaining active after bootstrap, the active-plugin compatibility diagnostic count, theme/parent names and headers, and the resulting update offer. The theme source and active Rosa theme were restored after each matrix, with byte-hash verification.

**The offered candidate `2.6.7` is simulated test data from a mocked WordPress.org versions response. These results make no claim that Nova 2.6.7 is a published release.** The simulation tests the actual update transient filter; it does not install an update.

| Policy / guard | Installed 1.13.4 | Installed 2.5.3 or 2.6.6.1 |
| --- | --- | --- |
| Unmodified Rosa2, missing supports header, Care active | blocks simulated 2.6.7 | allows simulated 2.6.7; no incompatibility diagnostic |
| Actual parent header `Nova Blocks (>=1.13.4 <2.0.0)`, Care active | blocks | blocks; incompatible active Nova is diagnosed |
| Child without header, parent has legacy cap | blocks through installed-major fallback | allows; parent policy is lost |
| Child explicitly repeats legacy cap | blocks | blocks; incompatible active Nova is diagnosed |
| Legacy cap present, Care update hook explicitly removed | allows | allows |
| Child explicitly declares `Nova Blocks (>=2.0.0 <3.0.0)` | allows offer; existing 1.x diagnosed | allows; compatible modern policy preserved |

The hook-removed case models an absent/disabled update guard while keeping the rest of the runtime fixed; it is not a claim that the customer's Care plugin was deactivated. Seven additional standalone cases using the actual Care class prove selection of 1.13.4 from 1.12.8 and preservation of modern update ranges while blocking the next major.

Care's conditional-updates module was introduced in **1.12.0**, commit `00485ac3316a38bb40383ee879fc4169113f2ec0`; Care **1.8.1** has no such module. Current Care 1.20.1 loads it after its PHP/WP compatibility gates (PHP >=7.4, WP >=4.9.9) without requiring account connection. The test runtime passes those gates. It filters `pre_set_site_transient_update_plugins` at priority 21 and shows compatibility notices; it does **not** refuse an incompatible plugin activation. Nova remained active in every actual bootstrap case, including cases with explicit incompatible theme policy.

When a theme does not declare a range, current Care derives `~1` or `~2` from the **installed plugin major**. Thus a normal guarded 1.x-to-2.x update is blocked, but a site already moved incorrectly onto 2.x has no independent legacy-theme limit. Care reads only `wp_get_theme()`'s header; it does not inherit parent declarations for a child with a missing header.

## Reliable resolution path and ownership

1. **Rosa2 / Anima:** declare a real maximum compatibility range for the known classic Rosa2 1.x family, using `Pixelgrade Plugin Supports: Nova Blocks (>=1.13.4 <2.0.0)` after maintainer confirmation. For older installed copies, Care needs a narrowly scoped theme-family/version compatibility fallback or a delivered theme update. TGMPA's requested `version` is a **minimum**, not a maximum. Rosa2 1.13.1 requests Care 1.15.0, Style Manager 2.2.3 and Nova 1.13.4, so a blanket prohibition on Style Manager 2.x would be incorrect.
2. **Care:** inherit parent policy **per plugin** when a child omits that plugin's range, while preserving explicit child overrides; use theme-declared or narrowly scoped legacy compatibility rather than the installed Nova major to recover incorrectly upgraded sites. Preserve supported modern classic themes and ordinary explicit Nova 2.x policies. Care's Rosa2 migration already deliberately downloads Nova 1.13.4 because 2.0.0 was unsupported, independently supporting the legacy-line recovery direction.
3. **Care / Nova bootstrap:** define and verify what protects explicitly unsupported legacy theme/version combinations when the guard is old, absent, disabled or bypassed by a manual upload/CLI route. An update-offer filter alone cannot cover those paths. This should use explicit compatibility policy and parent/child resolution; banning every classic theme is unjustified. No blanket runtime gate or automatic downgrade was implemented here.
4. **Customer recovery:** back up and inspect customer content and version history, validate supported Nova 1.13.4 on an isolated copy of the real site, then deliver explicit legacy compatibility policy and verify both update and activation paths. Controlled fixture markup matches its original WordPress-normalized seed after these tests; that does not establish rollback safety for customer content already edited and saved under Nova 2.x. Do not silently downgrade or migrate such content.

A complete reliable fix is feasible through these scoped cross-repository changes and real customer-copy validation. It has not been implemented/proven by this investigation, so the user's condition for dismissing #607 is not met. The narrow page trap is already corrected by #608; adding another broad Nova CSS patch would not resolve reliable prevention or establish full legacy compatibility.

## Public-site observation and uncertainty

Read-only inspection on 2026-09-18 found the public customer site serving legacy Sidecar markup and Nova core CSS byte-identical to official 1.13.4 (`sha256 8dba9ce1a7bfbdde502b3480c8716e377112703bf2e3d55b7e90d87508e4735c`, 14303 bytes). This suggests the public frontend has already been rolled back, rather than providing a present-day live 2.x reproduction. Its Rosa CSS matches the historical theme assets. Public readme requests were blocked by ModSecurity. The `pixcare` REST namespace proves namespace exposure only: the exact Care version, whether its guard ran at the reported incident, and the customer's upgrade route cannot be established from that namespace or script query strings. No customer authentication or production changes were attempted.

## Final evidence only

Publishable evidence is this report, `summary.json`, the three final `layout-*.json`, three `bundle-proof-*.json`, three `live-care-policy-*.json`, and the twelve unedited PNGs under `screenshots/`. `care-policy-results.json` and `content-integrity.json` are additional controlled-test evidence. Commercial theme archives, full source trees and raw customer inspection artifacts remain private. The earlier `single-overflow-trace-1.13.4.json` was transitional diagnostic work and is **not final evidence**.

The final batches restart only the owned native server between variants with `realpath_cache_size=0`, disable network cache on the owned browser page, wait for complete document/font loading, then require **five identical geometry and foreground-style samples**. Each variant has six served critical runtime asset byte comparisons matching its exact fixture files (18 total). Screenshots are direct 1440 x 900 browser captures; no crops, annotations, compositing or other edits were applied. The final current hashes also match the root's final Nova build. Authored Hero JSON URL slashes were normalized by `wp_insert_post` at fixture import; the integrity check explicitly verifies that normalization rather than misreporting it as a frontend content rewrite.

Selected screenshots:

- [Historical 2.5.3 Hero width regression](screenshots/2.5.3-legacy-hero-1440.png)
- [Current 2.6.6.1 centered Hero width](screenshots/2.6.6.1-legacy-hero-1440.png)
- [Supported 1.13.4 Hero baseline — visual differences are intentional evidence limits](screenshots/1.13.4-legacy-hero-1440.png)
- [Historical 2.5.3 plain-page trap](screenshots/2.5.3-plain-1440.png)
- [Current 2.6.6.1 plain-page width](screenshots/2.6.6.1-plain-1440.png)
- [Supported 1.13.4 plain-page width](screenshots/1.13.4-plain-1440.png)

`python3 verify-evidence.py` verifies all counts, case coverage, expected policy outcomes and notices, page-width assertions, six normalized seed controls, served-byte comparisons, and screenshot hashes/dimensions, and generates `summary.json`. The ninety observations include expected historical failures and the stock single-post limitation; they must not be described as ninety universally successful renders.

## Isolated runtime and reproduction

The site remains available at **http://localhost:9127**, path `/tmp/nova-607-rosa2-site`. Studio creation hit its existing 36/36 capacity limit, so a native Local PHP 8.2.29 server was used with a fresh database/configuration. Existing Studio sites, including QA8997, were preserved. Full WordPress/plugin trees are outside the Nova repository so they cannot pollute the canonical Jest discovery. The site's Nova symlink and precise retained active variant are recorded in `native-runtime.json`; all version fixtures are outside the repository under `/tmp/nova607-version-artifacts/`.

Use the Local PHP binary, not the broken default PHP path:

```sh
'/Users/georgeolaru/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php' /usr/local/bin/wp --path=/tmp/nova-607-rosa2-site eval-file '/absolute/path/to/check-content-integrity.php'
```

Only owned browser pages were used; no customer/browser login was created, so there is no customer or user authentication to remove. The isolated runtime remains running for follow-up inspection. Private fixture scripts and exact artifact hashes are retained locally for reproducibility; they are not release files.

## Primary source references

- [Issue #607](https://github.com/pixelgrade/nova-blocks/issues/607)
- [Nova #608 generic-main root removal](https://github.com/pixelgrade/nova-blocks/commit/0650614589020c3f253566fa9c85e1fca4f83cc1)
- [Exact Rosa2 1.13.1 required-plugin declarations](https://github.com/pixelgrade/anima/blob/e3483ee393d42e4c324d21edd28fe96f78b00224/inc/required-plugins.php)
- [Care 1.20.1 conditional update ranges and header resolution](https://github.com/pixelgrade/pixelgrade-care/blob/567506faa515eab28bd1065ba90557a19b5b3dbe/includes/modules/conditional-updates/class-pixelgrade_care-conditional-updates.php)
- [Care bootstrap/load gates](https://github.com/pixelgrade/pixelgrade-care/blob/567506faa515eab28bd1065ba90557a19b5b3dbe/includes/class-pixelgrade_care.php)
- [Care's scoped Rosa2 migration selecting Nova 1.13.4](https://github.com/pixelgrade/pixelgrade-care/blob/567506faa515eab28bd1065ba90557a19b5b3dbe/migrations/sync-versions_rosa2-style_manager-nova_blocks.php)
- [Conditional update module introduction](https://github.com/pixelgrade/pixelgrade-care/commit/00485ac3316a38bb40383ee879fc4169113f2ec0)
