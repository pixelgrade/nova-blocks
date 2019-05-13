const { __ } = wp.i18n;

const {
	BlockIcon,
	RichText,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	BlockVerticalAlignmentToolbar,
	MediaUpload,
	MediaPlaceholder,
	InnerBlocks
} = wp.blockEditor;

const {
	Component,
	Fragment
} = wp.element;

const {
	IconButton,
	PanelBody,
	PanelRow,
	RangeControl,
	RadioControl,
	ToggleControl,
	Toolbar
} = wp.components;

export default class Edit extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			attributes: {
				contentSpacing,
				enableParallax,
				parallaxAmount,
				verticalAlignment,
				horizontalAlignment,
				enableMinHeight,
				minHeight,
				backgroundColor,
				foregroundColor,
				backgroundOpacity,
				images
			},
			className,
			setAttributes,
			isSelected
		} = this.props;

		const hasImages = !! images.length;

		const styles = {
			hero: {
				minHeight: enableMinHeight ? minHeight + 'vh' : 0
			},
			image: {
				opacity: backgroundOpacity / 100
			}
		}

		const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

		const onSelectImages = images => {
			setAttributes( { images } );
		}

		const classes = [
			className,
			'c-hero',
			`c-hero--v-align-${verticalAlignment}`,
			`c-hero--h-align-${horizontalAlignment}`,
			`c-hero--spacing-${contentSpacing}`,
			`c-hero--content-${foregroundColor}`,
			`c-hero--background-${backgroundColor}`
		]

		const wrapperClasses = [
			'c-hero__content-wrapper',
		];

		if ( enableMinHeight ) {
			wrapperClasses.push( 'c-hero__layer' );
		}

		const mediaPlaceholder = (
			<MediaPlaceholder
				addToGallery
				isAppender
				className={ className }
				dropZoneUIOnly={ ! isSelected }
				icon={ <BlockIcon icon="images-alt2" /> }
				onSelect={ onSelectImages }
				accept="image/*"
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				multiple
				value={ hasImages ? images : undefined }
			/>
		);

		const blockControls = (
			<BlockControls>
				<Toolbar>
					<MediaUpload
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						multiple
						gallery
						value={ images.map( ( img ) => img.id ) }
						onSelect={ onSelectImages }
						render={ ( { open } ) => {
							return <IconButton
								label={ __( 'Edit Gallery', '__plugin_txtd' ) }
								icon="images-alt2"
								onClick={ open }
							/>
						}}
					/>
				</Toolbar>
			</BlockControls>
		);

		const hero = (
			<div className={classes.join(' ')} style={styles.hero}>
				<div className="c-hero__background-mask c-hero__layer">
					<div className="c-hero__background c-hero__layer">
						{ !! images.length && <img className="c-hero__image" src={images[0].sizes.large.url} style={styles.image}/> }
					</div>
				</div>
				<div className={wrapperClasses.join(' ')}>
					<div className="c-hero__content">
						<InnerBlocks />
					</div>
				</div>
			</div>
		);

		return [
			<Fragment>
				{ hero }
				{ mediaPlaceholder }
				{ blockControls }
			</Fragment>,
			<InspectorControls>

				<PanelBody title={ __( 'Spacing', '__plugin_txtd' ) }>
					<RadioControl
						label={ __( 'Spacing Content', '__plugin_txtd' ) }
						selected={ contentSpacing }
						options={ [
							{ label: 'Small', value: 's' },
							{ label: 'Medium', value: 'm' },
							{ label: 'Large', value: 'l' }
						] }
						onChange={ contentSpacing => setAttributes( { contentSpacing } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Content Alignment', '__plugin_txtd' ) }>
					<PanelRow>
						<label htmlFor='pixelgrade-hero-horizontal-alignment'>{ __( 'Horizontal Alignment', '__plugin_txtd' ) }</label>
						<AlignmentToolbar
							value={ horizontalAlignment }
							onChange={ horizontalAlignment => setAttributes( { horizontalAlignment } ) }
						/>
					</PanelRow>
					<PanelRow>
						<label htmlFor='pixelgrade-hero-verical-alignment'>{ __( 'Vertical Alignment', '__plugin_txtd' ) }</label>
						<BlockVerticalAlignmentToolbar
							value={ verticalAlignment }
							onChange={ verticalAlignment => setAttributes( { verticalAlignment } ) }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'Parallax', '__plugin_txtd' ) }>
					<ToggleControl
						label={ __( "Enable Parallax", "__plugin_txtd" ) }
						checked={ enableParallax }
						onChange={ () => setAttributes( { enableParallax: ! enableParallax } ) }
					/>
					{ enableParallax && <RangeControl
						beforeIcon="arrow-left-alt2"
						afterIcon="arrow-right-alt2"
						label={ __( "Parallax Amount", "__plugin_txtd" ) }
						value={ parallaxAmount }
						onChange={ parallaxAmount => setAttributes( { parallaxAmount } ) }
						min={0}
						max={100}
					/> }
				</PanelBody>

				<PanelBody title={ __( 'Hero Height', '__plugin_txtd' ) }>
					<ToggleControl
						label={ __( "Enable Minimum Height", "__plugin_txtd" ) }
						checked={ enableMinHeight }
						onChange={ () => setAttributes( { enableMinHeight: ! enableMinHeight } ) }
					/>
					{ enableMinHeight && <RangeControl
						beforeIcon="arrow-left-alt2"
						afterIcon="arrow-right-alt2"
						label={ __( "Minimum Height", "__plugin_txtd" ) }
						value={ minHeight }
						onChange={ minHeight => setAttributes( { minHeight } ) }
						min={50}
						max={100}
					/> }
				</PanelBody>

				<PanelBody title={ __( 'Colors', '__plugin_txtd' ) }>
					<RadioControl
						label={ __( 'Foreground Color', '__plugin_txtd' ) }
						selected={ foregroundColor }
						options={ [
							{ label: 'Color', value: 'color' },
							{ label: 'Dark', value: 'dark' },
							{ label: 'Light', value: 'light' }
						] }
						onChange={ foregroundColor => setAttributes( { foregroundColor } ) }
					/>

					<RadioControl
						label={ __( 'Background Color', '__plugin_txtd' ) }
						selected={ backgroundColor }
						options={ [
							{ label: 'Color', value: 'color' },
							{ label: 'Dark', value: 'dark' },
							{ label: 'Light', value: 'light' }
						] }
						onChange={ backgroundColor => setAttributes( { backgroundColor } ) }
					/>

					<RangeControl
						beforeIcon="arrow-left-alt2"
						afterIcon="arrow-right-alt2"
						label={ __( "Background Opacity", "__plugin_txtd" ) }
						value={ backgroundOpacity }
						onChange={ backgroundOpacity => setAttributes( { backgroundOpacity } ) }
						min={0}
						max={100}
					/>
				</PanelBody>

			</InspectorControls>
		]
	}
}