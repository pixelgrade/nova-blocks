/**
 * Internal dependencies
 */
import HeroBackground from './background';

/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

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
			applyMinimumHeightBlock,
			// indicators
			scrollIndicatorBlock,
			// colors
			contentColor,
			overlayFilterStyle,
		},
		className,
		settings,
	} = props;

	const classes = [
		className,
		'novablocks-hero',
		`nova-u-valign-${ verticalAlignment }`,
		`nova-u-halign-${ horizontalAlignment }`,
		`nova-u-spacing-${ contentPadding }`,
		`nova-u-content-width-${ contentWidth }`,
		`nova-u-background`,
		`nova-u-background-${ overlayFilterStyle }`,
	];

	const styles = {
		hero: {
			color: contentColor,
		},
		foreground: {},
		content: {},
	};

	if ( !! applyMinimumHeightBlock ) {
		styles.hero.minHeight = minHeight + 'vh';
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
			<div className="novablocks-hero__foreground nova-u-content-padding" style={ styles.foreground }>
				<div className="nova-u-content-align">
					<div className="novablocks-hero__inner-container nova-u-content-width" style={ styles.content }>
						<InnerBlocks template={ settings.hero.template } />
					</div>
					{ scrollIndicatorBlock && <div className="novablocks-hero__indicator"></div> }
				</div>
			</div>
		</div>
	);
};

export default HeroPreview;
