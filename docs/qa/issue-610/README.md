# Issue 610: lossless paragraph migration

18 September 2026. Source baseline: 455bd998. Source fix: 1df1bf62e4ef1c2dc88aca70710409e83886b0a9.

Nova's font-size registration filter replaced the font-size schema in every historical Core paragraph definition with today's `normal` default. Otherwise valid paragraphs without a normal-size class no longer matched safe historical saves; Core's oldest selector-less fallback read the entire `<p>` element as content. One rebuild nested it; another discarded the body copy.

The fix preserves Core's historical font-size schemas and adds a compatibility definition at registration priority 100. It captures the running Core paragraph's attributes, API version, supports and save function, removes only the font-size default for validation, and migrates an omitted font size to `normal`. This retains newer capabilities such as anchors, direction and typography, which historical Core definitions may lack. Current defaults and explicit sizes remain unchanged; default `normal` is omitted from block-comment JSON.

The harness startup repair supplies missing native Web Crypto and UTF-8 APIs, preserves accessor-backed/existing crypto capabilities, and keeps failed editor bundles fatal. Its Node engine metadata matches pinned jsdom's requirements.

## Verification

- Schema regression: three expected failures before the first fix; all eleven final schema/compatibility tests pass.
- Real WordPress corpus: original footer and authored athletics paragraph rebuilds failed before the fix. The anchor test exposed the first patch's incomplete support coverage; the compatibility definition fixes it.
- Twelve fixtures each rebuilt twice in both real Post and Site Editors: original footer, authored/repaired athletics, colored line breaks, formatted links, custom classes, anchor/RTL, drop cap, explicit small, current normal, plain legacy and custom pixel size. All remain valid, preserve paragraph semantics, introduce no nesting and stabilize after the first rebuild.
- Actual UI Duplicate creates an identical tenth paragraph; one-step Undo restores nine and a clean editor in both editors.
- Nine variants saved and reloaded twice in each editor. The first round edits plain text; the second restores it. Authenticated REST readback confirms all original text, inline markup, classes, authored styles, anchors and direction are preserved, all blocks validate, and another two rebuilds are stable.
- Full agent-harness suite with the site's actual bundles/settings: 78 passed, zero skipped/failed. The already double-wrapped athletics fixture still triggers the text-loss check rather than being certified as safe.
- Native API contracts: SHA-256, AES-GCM, random values/UUID, Unicode UTF-8, idempotency and installed-jsdom accessor preservation. Worker also verified pinned jsdom 29.1.1 and fatal broken-bundle startup.
- Canonical `npm test` passed on final code (64.3 seconds); source commit hooks rerun it.
- Node 22.22.0 build passed. Source, installed QA and HTTP-served editor bundle SHA-256: 6649486bb3c3f2f7a0337cf10012cb6d769f2668892ad1856b8c8c894989cb7f.
- Frontend: all nine paragraphs present with blue authored color, retained anchor/RTL and custom pixel sizing. WordPress transforms authored 23px into its existing fluid `clamp(..., 23px)`; observed 21.082px at 1440px viewport.

## Environment and evidence

WordPress 7.1.1; Anima LT 2.0.49; Nova development header 2.6.6.1 with source fix 1df1bf62e4ef1c2dc88aca70710409e83886b0a9; Pixelgrade Assistant and Style Manager. Isolated Studio QA: localhost:8997. Desktop/editor viewport 1440 by 1100. Both editor canvases are iframes in this environment. The QA watcher was busy; the final compiled editor JS/asset metadata were copied to the owned QA target and source/installed/served byte hashes verified. The full real-site harness ran against that installed bundle.

Screenshots are unedited browser captures after the second save/reload. The frontend screenshot captures the actual post-content element after Anima's loaded state and finite animations complete. JSON files hold browser rebuild results and database readback/runtime measurements; no authentication cookies, nonces or session tokens are included. Temporary QA authentication was revoked; only owned tabs/sessions were closed. QA entities remain available for inspection.

This prevents new corruption of valid content. Previously damaged/double-wrapped content can still require recovery from revisions or backups; the harness continues to refuse lossy recovery.

Target release: 2.6.7. No release published or version bumped by this work.
