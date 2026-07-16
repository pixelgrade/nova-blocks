import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import { getIdentityWidthStyle } from './dimensions';

const SiteIdentitySave = ( { attributes } ) => {
	const { identityWidth = 395 } = attributes;
	const blockProps = useBlockProps.save( {
		className: 'nb-site-identity c-branding',
		style: getIdentityWidthStyle( identityWidth ),
	} );

	return (
		<div { ...blockProps }>
			<div className="nb-site-identity__inner">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default SiteIdentitySave;
