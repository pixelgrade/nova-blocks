const assert = require( 'node:assert/strict' );

global.window = {
  innerHeight: 900,
  innerWidth: 1440,
  pageYOffset: 0,
  matchMedia: () => ( {
    matches: false,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
  } ),
  addEventListener() {},
  removeEventListener() {},
  requestIdleCallback( callback ) {
    callback();
  },
  getComputedStyle: () => ( {
    getPropertyValue() {
      return '16px';
    },
  } ),
  styleManager: {
    colorsConfig: [
      {
        id: 'contextual-post',
        label: 'Current Page',
        source: [ '#33c200' ],
        sourceIndex: 6,
        variations: [
          { bg: '#f5fff0', accent: '#33c200', fg1: '#15210f', fg2: '#15210f' },
          { bg: '#ebffe0', accent: '#33c200', fg1: '#15210f', fg2: '#15210f' },
          { bg: '#dcffc9', accent: '#33c200', fg1: '#15210f', fg2: '#15210f' },
          { bg: '#c8f7ae', accent: '#33c200', fg1: '#15210f', fg2: '#15210f' },
          { bg: '#9fe77e', accent: '#1f6f05', fg1: '#15210f', fg2: '#15210f' },
          { bg: '#70d945', accent: '#1f6f05', fg1: '#15210f', fg2: '#15210f' },
          { bg: '#33c200', accent: '#f5fff0', fg1: '#ffffff', fg2: '#ffffff' },
          { bg: '#2ca300', accent: '#f5fff0', fg1: '#ffffff', fg2: '#ffffff' },
          { bg: '#247f00', accent: '#f5fff0', fg1: '#ffffff', fg2: '#ffffff' },
          { bg: '#1b5d00', accent: '#f5fff0', fg1: '#ffffff', fg2: '#ffffff' },
          { bg: '#123d00', accent: '#f5fff0', fg1: '#ffffff', fg2: '#ffffff' },
          { bg: '#091f00', accent: '#f5fff0', fg1: '#ffffff', fg2: '#ffffff' },
        ],
        darkVariations: [],
      },
    ],
  },
};

global.document = {
  readyState: 'complete',
  body: {
    classList: {
      contains() {
        return false;
      },
    },
  },
  documentElement: {
    clientHeight: 900,
    clientWidth: 1440,
  },
  addEventListener() {},
};

const { getSignals } = require( '../../packages/utils/build/color-signal.js' );

assert.deepEqual(
  getSignals( 'contextual-post' ),
  [ 2, 5, 8, 11 ],
  'Runtime contextual palettes should derive signals from variations when legacy colors are absent.'
);

console.log( 'contextual-color-signal-runtime-palette-contract: ok' );
