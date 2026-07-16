import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	RangeControl,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { getIdentityEditorWidthStyle } from './dimensions';

const ALLOWED_BLOCKS = [ 'core/site-title', 'core/site-tagline' ];

const SITE_IDENTITY_TEMPLATE = [
	[ 'core/site-title', {
		className: 'is-style-wordmark',
		level: 0,
		fitText: true,
		fitTextWidth: 800,
		textAlign: 'center',
		style: {
			typography: {
				fontWeight: '900',
				letterSpacing: '-0.055em',
				lineHeight: '1',
				textTransform: 'uppercase',
			},
		},
	} ],
	[ 'core/site-tagline', {
		className: 'is-style-ruled-label',
		fontSize: 'small',
		textAlign: 'center',
		style: {
			typography: {
				letterSpacing: '0.32em',
				lineHeight: '1',
				textTransform: 'uppercase',
			},
		},
	} ],
];

const SiteIdentityEdit = ( { attributes, clientId, setAttributes } ) => {
	const { identityWidth = 395 } = attributes;
	const blockProps = useBlockProps( {
		className: 'nb-site-identity c-branding',
		style: getIdentityEditorWidthStyle( identityWidth ),
	} );
	const innerBlocksProps = useInnerBlocksProps( {
		className: 'nb-site-identity__inner',
	}, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: SITE_IDENTITY_TEMPLATE,
		templateLock: false,
	} );

	return (
		<div { ...blockProps }>
			<InspectorControls group="dimensions">
				<ToolsPanelItem
					label={ __( 'Identity Width', '__plugin_txtd' ) }
					isShownByDefault
					hasValue={ () => identityWidth !== 395 }
					onDeselect={ () => setAttributes( { identityWidth: 395 } ) }
					resetAllFilter={ () => ( { identityWidth: 395 } ) }
					panelId={ clientId }
				>
					<RangeControl
						label={ __( 'Identity Width', '__plugin_txtd' ) }
						help={ __( 'Sets the shared maximum width for the title and tagline.', '__plugin_txtd' ) }
						value={ identityWidth }
						min={ 80 }
						max={ 800 }
						step={ 5 }
						onChange={ ( value ) => setAttributes( { identityWidth: value } ) }
					/>
				</ToolsPanelItem>
			</InspectorControls>
			<div { ...innerBlocksProps } />
		</div>
	);
};

export default SiteIdentityEdit;
