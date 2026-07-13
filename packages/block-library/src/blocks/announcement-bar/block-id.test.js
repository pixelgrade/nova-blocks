import { getAnnouncementBlockId } from './block-id';

describe( 'getAnnouncementBlockId', () => {
	it( 'uses the editor client ID for a newly inserted block', () => {
		expect( getAnnouncementBlockId( '', 'client-new', [] ) ).toBe( 'client-new' );
	} );

	it( 'preserves a unique saved block ID after an editor reload', () => {
		expect( getAnnouncementBlockId( 'saved-id', 'client-new', [ 'client-new' ] ) ).toBe( 'saved-id' );
	} );

	it( 'preserves the first block ID when a block is duplicated', () => {
		expect( getAnnouncementBlockId( 'saved-id', 'client-original', [ 'client-original', 'client-copy' ] ) ).toBe( 'saved-id' );
	} );

	it( 'gives a duplicated block its own editor client ID', () => {
		expect( getAnnouncementBlockId( 'saved-id', 'client-copy', [ 'client-original', 'client-copy' ] ) ).toBe( 'client-copy' );
	} );
} );
