const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const blockRenderingPath = path.join(__dirname, 'block-rendering.php');

test('collection layout css includes the vertical row spacing multiplier for server-rendered cards', () => {
  const phpSnippet = `
function add_filter() {}
require ${JSON.stringify(blockRenderingPath)};
echo json_encode(
  novablocks_get_collection_layout_css(
    [
      'columns' => 3,
      'gridGap' => 50,
      'verticalGapModifier' => 1.5,
      'pile3dEffect' => false,
    ]
  )
);
`;

  const result = spawnSync('php', [ '-r', phpSnippet ], { encoding: 'utf8' });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.deepEqual(
    JSON.parse(result.stdout),
    [
      '--nb-collection-columns-count: 3',
      '--nb-grid-spacing-modifier: 50',
      '--nb-grid-spacing-multiplier: 1',
      '--nb-grid-row-spacing-multiplier: 1.5',
      '--nb-pile-3d-scale: 1',
    ]
  );
});
