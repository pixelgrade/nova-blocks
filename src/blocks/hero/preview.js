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
		attributes,
		className,
		clientId,
		settings,
	} = props;

	const {
		// layout
		contentPadding,
		contentPaddingCustom,
		contentWidth,
		contentWidthCustom,
		// alignment
		verticalAlignment,
		horizontalAlignment,
		// height
		minHeightFallback,
		// indicators
		scrollIndicatorBlock,
		// colors
		contentColor,
		overlayFilterStyle,

		scrollingEffect,
	} = attributes;

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
			'--novablocks-hero-text-color': contentColor,
		},
		foreground: {},
		content: {},
	};

	const heroBlocks = select( 'core/block-editor' ).getBlocks().filter( ( block ) => {
		return block.name === 'novablocks/hero';
	} );

	const index = heroBlocks.findIndex( ( block ) => block.clientId === clientId );
	const scrollIndicatorFallback = index === 0 && minHeightFallback === 100;
	const scrollIndicator = settings.usePostMetaAttributes ? scrollIndicatorBlock : scrollIndicatorFallback;

	styles.hero.minHeight = minHeightFallback + 'vh';

	if ( scrollingEffect === 'doppler' ) {
		styles.hero.alignItems = 'flex-start';
		styles.hero.minHeight = minHeightFallback * 2 + 'vh';
	}

	if ( contentPadding === 'custom' ) {
		styles.foreground.paddingTop = `${ contentPaddingCustom }%`;
		styles.foreground.paddingBottom = `${ contentPaddingCustom }%`;
	}

	if ( scrollingEffect === 'doppler' ) {
		styles.foreground.minHeight = '100vh';
	}

	if ( contentWidth === 'custom' ) {
		styles.content.maxWidth = `${ contentWidthCustom }%`;
	}

	return (
		<div className={ classes.join( ' ' ) } style={ styles.hero }>
			<HeroBackground { ...props } />
			<div className="novablocks-hero__foreground novablocks-u-content-padding novablocks-u-content-align" style={ styles.foreground }>
				<div className="novablocks-hero__inner-container novablocks-u-content-width" style={ styles.content }>
					<InnerBlocks template={ settings.hero.template } />
				</div>
				{ scrollIndicator && <div className="novablocks-hero__indicator"></div> }
			</div>
		</div>
	);
};

export default HeroPreview;
