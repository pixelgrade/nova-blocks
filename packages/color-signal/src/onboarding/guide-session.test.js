let mockBlocks;
let mockSubscriptionCallback;
const mockUnsubscribe = jest.fn( () => {
  mockSubscriptionCallback = null;
} );
const mockOpenGuide = jest.fn( () => true );

jest.mock( '@wordpress/data', () => ( {
  dispatch: jest.fn( () => ( {} ) ),
  select: jest.fn( () => ( {
    getBlocks: () => mockBlocks,
  } ) ),
  subscribe: jest.fn( callback => {
    mockSubscriptionCallback = callback;
    return mockUnsubscribe;
  } ),
} ) );

import {
  isGuideVisible,
  startGuideSession,
} from './guide-session';
import {
  PRACTICE_CTA_CLASSNAME,
  PRACTICE_GUIDE_ID,
  PRACTICE_INTRO_CLASSNAME,
  PRACTICE_SECTION_CLASSNAME,
} from './constants';

const practiceBlocks = ( introSignal = 3 ) => {
  const intro = {
    name: 'core/group',
    clientId: 'practice-intro',
    attributes: {
      className: PRACTICE_INTRO_CLASSNAME,
      colorSignal: introSignal,
      palette: '1',
    },
    innerBlocks: [],
  };
  const cta = {
    name: 'core/group',
    clientId: 'practice-cta',
    attributes: {
      className: PRACTICE_CTA_CLASSNAME,
      colorSignal: 0,
      palette: '1',
    },
    innerBlocks: [],
  };

  return [ {
    name: 'core/group',
    clientId: 'practice-wrapper',
    attributes: { className: PRACTICE_SECTION_CLASSNAME },
    innerBlocks: [ intro, cta ],
  } ];
};

describe( 'Color Signal guide session', () => {
  beforeAll( () => {
    window.pixelgradeAdminHub = { docs: { openGuide: mockOpenGuide } };
  } );

  afterAll( () => {
    delete window.pixelgradeAdminHub;
  } );

  test( 'closing the guide stops live updates until the user explicitly reopens it', () => {
    mockBlocks = practiceBlocks();

    expect( startGuideSession() ).toBe( true );
    expect( isGuideVisible() ).toBe( true );
    expect( mockOpenGuide ).toHaveBeenCalledTimes( 1 );

    window.dispatchEvent( new window.CustomEvent( 'pixelgrade-docs:openstate', {
      detail: { open: false, guideId: PRACTICE_GUIDE_ID },
    } ) );

    expect( isGuideVisible() ).toBe( false );
    expect( mockUnsubscribe ).toHaveBeenCalledTimes( 1 );
    expect( mockSubscriptionCallback ).toBeNull();

    mockBlocks = practiceBlocks( 0 );
    expect( mockOpenGuide ).toHaveBeenCalledTimes( 1 );

    expect( startGuideSession() ).toBe( true );
    expect( mockOpenGuide ).toHaveBeenCalledTimes( 2 );
    expect( isGuideVisible() ).toBe( true );

    window.dispatchEvent( new window.CustomEvent( 'pixelgrade-docs:openstate', {
      detail: { open: false, guideId: PRACTICE_GUIDE_ID },
    } ) );
    expect( mockUnsubscribe ).toHaveBeenCalledTimes( 2 );
  } );
} );
