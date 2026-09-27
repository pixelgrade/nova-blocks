# nova-blocks#661 (H2) - results

Site http://localhost:8884 (/Users/georgeolaru/Studio/pxg-smoke-nova-661), Anima LT 2.0.50 build + Plus DevMode. Pages /page-dark/ (hero sm-variation-11 sm-color-signal-3) and /page-light/, Nova header logo-center with a sticky primary row. 1280x800 headless Chrome, 10 dark<->light navigations. Page load -> after 10th navigation.

Before = Nova main (b962cfa3) + Anima 2.0.50. After = nova-661 + anima-661.

| Combination | Build | Live MutationObservers | window scroll listeners (net) | window resize listeners (net) | rAF callbacks / frame | Mobile header bar present | Top parity | Sticky parity | Console errors | is-loaded (hard load, ms) |
|---|---|---|---|---|---|---|---|---|---|---|
| border_iris-progress_bar | before | 9 -> 20 | 5 -> 56 | 11 -> 132 | 10.3 -> 109.8 | 1 -> 0 | 10/10 | 10/10 | 0 | 3482 |
| border_iris-progress_bar | after | 9 -> 9 | 5 -> 6 | 11 -> 22 | 10.1 -> 10 | 1 -> 1 | 10/10 | 10/10 | 0 | 3474 |
| border_iris-cycling_images | before | 9 -> 20 | 5 -> 56 | 11 -> 132 | 12 -> 112 | 1 -> 0 | 10/10 | 10/10 | 0 | 339 |
| border_iris-cycling_images | after | 9 -> 9 | 5 -> 6 | 11 -> 22 | 12 -> 12 | 1 -> 1 | 10/10 | 10/10 | 0 | 405 |
| slide_wipe-progress_bar | before | 9 -> 20 | 5 -> 56 | 11 -> 132 | 10 -> 110.7 | 1 -> 0 | 10/10 | 10/10 | 0 | 372 |
| slide_wipe-progress_bar | after | 9 -> 9 | 5 -> 6 | 11 -> 22 | 10 -> 10 | 1 -> 1 | 10/10 | 10/10 | 0 | 309 |
| slide_wipe-cycling_images | before | 9 -> 20 | 5 -> 56 | 11 -> 132 | 12.5 -> 111.8 | 1 -> 0 | 10/10 | 10/10 | 0 | 374 |
| slide_wipe-cycling_images | after | 9 -> 9 | 5 -> 6 | 11 -> 22 | 12.6 -> 12 | 1 -> 1 | 10/10 | 10/10 | 0 | 336 |

Notes
- After: the one extra scroll listener (and one resize listener) appears on the FIRST navigation only and then stays flat: Anima's pile-parallax binding installed once by the page-transitions bundle's own copy of App (pre-existing, present in the before runs too). The remaining +1 resize listener per navigation is Anima's SiteFrame (`new App()` per navigation), not Nova.
- Before: the mobile header bar was lost after every navigation (0 bars): Barba keeps the hidden outgoing container in the DOM until enter resolves, so the re-executed header script built the bar inside the outgoing page. After: 1 bar, same as a hard reload.
- Mixed versions: new Nova + Anima 2.0.50 -> observers 9 -> 10 (the 2.0.50 guard observer) flat, scroll 5 -> 8 flat, parity 10/10, no errors. New Anima + Nova main -> legacy re-execution fallback, parity 6/6, no errors, mobile bar kept, leak reduced (+3 scroll/nav).

Screenshots: composite-dark-header-iris.png, composite-dark-header-slide-wipe.png, composite-mobile-bar.png (raw: before-*/after-*/mobile-*.png). Raw data: before-*.json, after-*.json.

