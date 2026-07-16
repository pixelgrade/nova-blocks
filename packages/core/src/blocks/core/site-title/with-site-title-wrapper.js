import { createHigherOrderComponent } from '@wordpress/compose';

export const normalizeSiteTitleWidth = ( width ) => {
	const numericWidth = Number( width );

	if ( ! Number.isFinite( numericWidth ) ) {
		return 395;
	}

	return Math.min( 800, Math.max( 80, Math.round( numericWidth ) ) );
};

export const withSiteTitleWrapper = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const { attributes, name } = props;
		const { fitText, fitTextWidth = 395 } = attributes;

		if ( name !== 'core/site-title' || ! fitText ) {
			return <BlockListBlock { ...props } />;
		}

		const normalizedWidth = normalizeSiteTitleWidth( fitTextWidth );

		return (
			<div
				className="nb-site-title-fit-container"
				style={ {
					'--nb-site-title-fit-width': `${ normalizedWidth }px`,
				} }
			>
				<BlockListBlock { ...props } />
			</div>
		);
	};
}, 'withSiteTitleWrapper' );
