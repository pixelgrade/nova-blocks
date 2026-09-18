import hashlib
import json
import struct
from pathlib import Path

base = Path(__file__).parent
versions = ["1.13.4", "2.5.3", "2.6.6.1"]
widths = [390, 768, 1024, 1440, 1920]
fixtures = json.loads((base / "native-fixtures.json").read_text())
page_names = [name for name in fixtures if name != "single-post"]
layouts = {}
policies = {}
bundles = {}
for version in versions:
    rows = json.loads((base / f"layout-{version}.json").read_text())
    assert len(rows) == 30
    assert {(r["fixture"], r["viewport"]) for r in rows} == {
        (name, width) for name in fixtures for width in widths
    }
    assert all(r["version"] == version and r["stableGeometrySamples"] == 5
               and r["fontLoaderComplete"] and "foreground" in r for r in rows)
    layouts[version] = rows
    bundle = json.loads((base / f"bundle-proof-{version}.json").read_text())
    assert len(bundle) == 6 and all(r["status"] == 200 and r["matchesFixtureFile"] for r in bundle)
    bundles[version] = bundle
    policy = json.loads((base / f"live-care-policy-{version}.json").read_text())
    assert policy["sourceOriginalRestored"] and policy["careVersion"] == "1.20.1"
    assert len(policy["cases"]) == 6
    legacy_installed = version == "1.13.4"
    expected = [None if legacy_installed else "2.6.7", None,
                None if legacy_installed else "2.6.7", None, "2.6.7", "2.6.7"]
    expected_failed = [0, 0 if legacy_installed else 1, 0,
                       0 if legacy_installed else 1, 0 if legacy_installed else 1,
                       1 if legacy_installed else 0]
    for i, case in enumerate(policy["cases"]):
        assert case["installedVersion"] == version and case["novaActiveAfterBootstrap"]
        assert case["resultOffer"] == expected[i]
        assert case["incompatibleActivePluginCount"] == expected_failed[i]
        assert case["careHookActive"] == (i != 4)
    policies[version] = policy

current_pages = [r for r in layouts["2.6.6.1"] if r["fixture"] in page_names]
assert len(current_pages) == 25
assert all(r["scrollWidth"] == r["viewport"] and
           abs(r["article"]["left"] - r["article"]["rightGap"]) < 0.01 and
           r["main"]["display"] == "block" and
           r["article"]["gridColumn"] == "auto" for r in current_pages)

at_1440 = {}
for version in versions:
    rows = [r for r in layouts[version] if r["viewport"] == 1440]
    at_1440[version] = [{"fixture": r["fixture"], "articleLeft": r["article"]["left"],
                          "articleWidth": r["article"]["width"], "scrollWidth": r["scrollWidth"],
                          "mainDisplay": r["main"]["display"],
                          "articleGridColumn": r["article"]["gridColumn"],
                          "heroWidths": [h["width"] for h in r["heroes"]]} for r in rows]
    for row in rows:
        if row["fixture"] in page_names:
            assert row["article"]["left"] == (489 if version == "2.5.3" else 32)
            assert row["article"]["width"] == (462 if version == "2.5.3" else 1376)

single_post_limit = {}
for version in versions:
    rows = [r for r in layouts[version] if r["fixture"] == "single-post"]
    single_post_limit[version] = [{"viewport": r["viewport"], "scrollWidth": r["scrollWidth"]} for r in rows]
    assert all(r["scrollWidth"] > r["viewport"] for r in rows if r["viewport"] >= 1024)

unit_cases = json.loads((base / "care-policy-results.json").read_text())["cases"]
assert len(unit_cases) == 7 and all(r["pass"] for r in unit_cases)
content = json.loads((base / "content-integrity.json").read_text())
assert len(content) == 6 and all(r["authoredMatchesSeed"] and
                               r["storedContentMatchesSeedAfterWordPressUnslash"] for r in content)
screenshots = []
for version in versions:
    for name in ["plain", "legacy-hero", "hero-plus-sidecar", "single-post"]:
        path = base / "screenshots" / f"{version}-{name}-1440.png"
        data = path.read_bytes()
        assert data.startswith(b"\x89PNG\r\n\x1a\n")
        assert struct.unpack(">II", data[16:24]) == (1440, 900)
        screenshots.append({"file": str(path.relative_to(base)), "sha256": hashlib.sha256(data).hexdigest(),
                            "width": 1440, "height": 900, "unedited": True})

summary = {"issue": 607, "recommendation": "KEEP OPEN: page-width correction proved; reliable prevention remains unresolved",
           "site": "http://localhost:9127", "theme": "actual Rosa2 1.13.1 source",
           "wordpress": "7.1.1", "styleManager": "2.5.2", "care": "1.20.1", "php": "8.2.29",
           "cacheIsolation": {"nativeServerRestartedBetweenVersions": True,
                              "realpathCacheSize": 0, "ownedPageNetworkCacheDisabled": True,
                              "stableGeometryAndForegroundSamplesPerCase": 5},
           "geometryMeasurementCount": 90, "measurementsPerVersion": 30,
           "currentCenteredNonOverflowPageCases": 25, "servedBundleByteComparisons": 18,
           "liveCarePolicyCases": 18, "standaloneCarePolicyCases": 7,
           "simulatedUpdateCandidate": {"version": "2.6.7", "publishedReleaseClaim": False},
           "articleMeasurements1440": at_1440, "stockSinglePostBaselineLimitation": single_post_limit,
           "contentControlCount": 6, "screenshots": screenshots}
(base / "summary.json").write_text(json.dumps(summary, indent=2) + "\n")
print("Verified: 90 final geometry observations, 25 corrected current page cases, 18 served bundle matches,")
print("18 actual Care policy cases, 7 standalone policy cases, 6 normalized seed controls, 12 unedited screenshots.")
print("Issue 607 must remain open. Stock single-post overflow exists in the supported 1.13.4 baseline.")
