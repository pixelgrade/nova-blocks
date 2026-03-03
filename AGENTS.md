# Nova Blocks Development Notes

## Local Setup

- Repo path: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks`
- Site URL: `http://style-manager.local`
- GitHub: `https://github.com/pixelgrade/nova-blocks`

## Build Prerequisites

- Node: **22 LTS** (required)
- NPM: use repo defaults from `.npmrc`
- Build command must run from plugin root

Switch Node first:

```bash
export NVM_DIR="/Users/georgeolaru/.nvm" && source "/Users/georgeolaru/.nvm/nvm.sh" && nvm use 22
```

## Critical Build Warnings

- `npm run build` runs `preclean:packages` and removes `build/` + `dist/` before rebuilding.
- Running build with wrong Node version can leave plugin artifacts missing.
- Use `npm run zip` for release packages. It runs the full build first via `prezip`.

## Build Commands

### Production build

```bash
npm run build
```

### Build + release zip

```bash
npm run zip
```

Zip output is created one directory above the repo (for example `../nova-blocks-2-1-13.zip`).

## Release Verification

Before publishing a zip:

```bash
ls -la ../nova-blocks-*.zip
unzip -l ../nova-blocks-X-Y-Z.zip | grep "nova-blocks/build/" | head -3
unzip -l ../nova-blocks-X-Y-Z.zip | grep "CLAUDE.md"
unzip -p ../nova-blocks-X-Y-Z.zip nova-blocks/readme.txt | grep -E "Stable tag|Tested up to"
unzip -p ../nova-blocks-X-Y-Z.zip nova-blocks/nova-blocks.php | grep "Version:"
```

Expected:
- zip contains `build/`
- `CLAUDE.md` is not packaged
- version headers match release tag

## Version Update Checklist

When shipping a new version, update all:

- `nova-blocks.php` -> `Version`
- `nova-blocks.php` -> `Tested up to`
- `readme.txt` -> `Stable tag`
- `readme.txt` -> `Tested up to`

## GitHub Release Flow

```bash
git add <files>
git commit -m "message"
git push origin main

git tag -f X.Y.Z
git push origin X.Y.Z --force

gh release create X.Y.Z ../nova-blocks-X-Y-Z.zip --title "X.Y.Z" --notes "Release notes"
# or update existing release asset:
# gh release upload X.Y.Z ../nova-blocks-X-Y-Z.zip --clobber
```

## WordPress.org SVN Flow

```bash
svn co https://plugins.svn.wordpress.org/nova-blocks /tmp/nova-blocks-svn
rm -rf /tmp/nova-blocks-svn/trunk/*
unzip -o ../nova-blocks-X-Y-Z.zip -d /tmp/nova-blocks-extract
cp -r /tmp/nova-blocks-extract/nova-blocks/* /tmp/nova-blocks-svn/trunk/
cd /tmp/nova-blocks-svn
svn add trunk/* --force
svn status trunk | grep '^!' | awk '{print $2}' | xargs -I{} svn rm {}
```

Commit/tag in SVN with your configured credentials.

## Issue and Commit Workflow

For each change:

1. Create or link a GitHub issue.
2. Assign it to the active milestone.
3. Reference issue in commit message (`Refs #N` or `Fixes #N` when appropriate).
4. Push and verify issue/milestone status.
