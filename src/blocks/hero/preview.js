/**
 * Internal dependencies
 */
import HeroBackground from './background';

/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

const {
	select,
} = wp.data;

const HeroPreview = function( props ) {
	const {
		attributes: {
			// layout
			contentPadding,
			contentPaddingCustom,
			contentWidth,
			contentWidthCustom,
			// alignment
			verticalAlignment,
			horizontalAlignment,
			// height
			minHeight,
			minHeightFallback,
			applyMinimumHeightBlock,
			// indicators
			scrollIndicatorBlock,
			// colors
			contentColor,
			overlayFilterStyle,
		},
		className,
		clientId,
		settings,
	} = props;

	const classes = [
		className,
		'novablocks-hero',
		`novablocks-u-valign-${ verticalAlignment }`,
		`novablocks-u-halign-${ horizontalAlignment }`,
		`novablocks-u-spacing-${ contentPadding }`,
		`novablocks-u-content-width-${ contentWidth }`,
		`novablocks-u-background`,
		`novablocks-u-background-${ overlayFilterStyle }`,
	];

	const styles = {
		hero: {
			color: contentColor,
		},
		foreground: {},
		content: {},
	};

	const minimumHeight = settings.usePostMetaAttributes ? minHeight : minHeightFallback;

	const heroBlocks = select( 'core/block-editor' ).getBlocks().filter( ( block ) => {
		return block.name === 'novablocks/hero';
	} );

	const index = heroBlocks.findIndex( ( block ) => block.clientId === clientId );
	const scrollIndicatorFallback = index === 0 && minimumHeight === 100;
	const scrollIndicator = settings.usePostMetaAttributes ? scrollIndicatorBlock : scrollIndicatorFallback;

	if ( !! applyMinimumHeightBlock ) {
		styles.hero.minHeight = minimumHeight + 'vh';
	}

	if ( contentPadding === 'custom' ) {
		styles.foreground.paddingTop = `${ contentPaddingCustom }%`;
		styles.foreground.paddingBottom = `${ contentPaddingCustom }%`;
	}

	if ( contentWidth === 'custom' ) {
		styles.content.maxWidth = `${ contentWidthCustom }%`;
	}

	return (
		<div className={ classes.join( ' ' ) } style={ styles.hero }>
			<HeroBackground { ...props } />
			<div className="novablocks-hero__foreground novablocks-u-content-padding" style={ styles.foreground }>
				<div className="novablocks-u-content-align">
					<div className="novablocks-hero__inner-container novablocks-u-content-width" style={ styles.content }>
						<InnerBlocks template={ settings.hero.template } />
					</div>
					{ scrollIndicator && <div className="novablocks-hero__indicator"></div> }
				</div>
			</div>
		</div>
	);
};

export default HeroPreview;
