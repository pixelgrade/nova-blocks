import { createHigherOrderComponent } from '@wordpress/compose';

import { getSiteTaglineRuleStyle } from './rule-style';

export const withSiteTaglineWrapper = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const { attributes, name } = props;
		const hasRuledLabel = ( attributes.className || '' ).split( /\s+/ ).includes( 'is-style-ruled-label' );

		if ( 'core/site-tagline' !== name || ! hasRuledLabel ) {
			return <BlockListBlock { ...props } />;
		}

		return (
			<BlockListBlock
				{ ...props }
				wrapperProps={ {
					...props.wrapperProps,
					style: {
						...props.wrapperProps?.style,
						...getSiteTaglineRuleStyle( attributes ),
					},
				} }
			/>
		);
	};
}, 'withSiteTaglineWrapper' );
