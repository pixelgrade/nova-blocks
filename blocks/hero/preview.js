const {
	Component,
} = wp.element;

const {
	InnerBlocks,
} = wp.blockEditor;

import HeroBackground from './background';

export default class HeroPreview extends Component {

	render() {
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
		} = this.props;

		const classes = [
			className,
			'nova-hero',
			`nova-u-valign-${verticalAlignment}`,
			`nova-u-halign-${horizontalAlignment}`,
			`nova-u-spacing-${contentPadding}`,
			`nova-u-content-width-${contentWidth}`,
			`nova-u-background`,
			`nova-u-background-${overlayFilterStyle}`
		]

		const styles = {
			hero: {
				color: contentColor,
			},
			foreground: {},
			content: {},
		}

		if ( !! applyMinimumHeightBlock ) {
			styles.hero.minHeight = minHeight + 'vh'
		}

		if ( contentPadding === 'custom' ) {
			styles.foreground.paddingTop = `${contentPaddingCustom}%`
			styles.foreground.paddingBottom = `${contentPaddingCustom}%`
		}

		if ( contentWidth === 'custom' ) {
			styles.content.maxWidth = `${contentWidthCustom}%`
		}

		return (
			<div className={classes.join(' ')} style={styles.hero}>
				<HeroBackground { ...this.props } />
				<div className='nova-hero__foreground nova-u-content-padding' style={ styles.foreground }>
					<div className='nova-u-content-align'>
						<div className='nova-hero__inner-container nova-u-content-width' style={ styles.content }>
							<InnerBlocks template={[
								[ 'core/heading', { content: 'This is a catchy title', align: 'center', level: 1 } ],
								[ 'core/paragraph', { content: 'A brilliant subtitle to explain its catchiness', align: 'center' } ],
								[ 'core/button', { text: 'Discover more', align: 'center' } ],
							]} />
						</div>
						{ scrollIndicatorBlock && <div className='nova-hero__indicator'></div> }
					</div>
				</div>
			</div>
		)
	}
}
