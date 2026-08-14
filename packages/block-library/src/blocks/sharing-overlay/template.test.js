import { createSharingTriggerTemplate } from './template';

describe( 'createSharingTriggerTemplate', () => {
	it( 'creates one semantic core Button inside its required Buttons parent', () => {
		expect( createSharingTriggerTemplate( 'Share this story' ) ).toEqual( [
			[
				'core/buttons',
				{},
				[
					[
						'core/button',
						{
							tagName: 'button',
							type: 'button',
							text: 'Share this story',
						},
					],
				],
			],
		] );
	} );
} );
