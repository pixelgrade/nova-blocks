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
	Toolbar,
	Button,
	ButtonGroup
} = wp.components;

import { alignTop, alignCenter, alignBottom } from './icons';

export default class Edit extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			attributes: {
				// layout
				contentPadding,
				contentPaddingCustom,
				contentWidth,
				contentWidthCustom,

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
			`c-hero--spacing-${contentPadding}`,
			`c-hero--foreground-${foregroundColor}`,
			`c-hero--background-${backgroundColor}`
		]

		const mediaPlaceholder = (
			! hasImages && <MediaPlaceholder
				addToGallery
				isAppender
				className={ className }
				dropZoneUIOnly={ ! isSelected }
				icon={ <BlockIcon icon="images-alt2" /> }
				onSelect={ onSelectImages }
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				multiple
				gallery
				value={ hasImages ? images : undefined }
			/>
		);

		const blockControls = (
			<BlockControls>
				{ hasImages && <Toolbar>
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
				</Toolbar> }
			</BlockControls>
		);

		const hero = (
			<div className={classes.join(' ')} style={styles.hero}>
				<div className="c-hero__mask c-hero__layer">
					<div className="c-hero__background c-hero__layer">
						{ !! images.length && <img className="c-hero__image" src={images[0].sizes.large.url} style={styles.image}/> }
					</div>
				</div>
				<div className="c-hero__foreground">
					<div className="c-hero__content">
						<InnerBlocks />
					</div>
				</div>
			</div>
		);


		const contentPaddingControls = () => {

			const contentPaddingOptions = [
				{ label: __( 'Small', '__plugin_txtd' ), value: 'small' },
				{ label: __( 'Medium', '__plugin_txtd' ), value: 'medium' },
				{ label: __( 'Large', '__plugin_txtd' ), value: 'large' },
				{ label: __( 'Custom', '__plugin_txtd' ), value: 'custom' },
			];

			return <Fragment>
				<label>{ __( 'Content Padding', '__plugin_txtd') }</label>
				<ButtonGroup>
					{ contentPaddingOptions.map( option =>
						<Button isSmall
						        isDefault={ option.value !== contentPadding }
						        isPrimary={ option.value === contentPadding }
						        onClick={ () => { setAttributes( { contentPadding: option.value } ) } }>
							{ option.label }
						</Button>
					) }
				</ButtonGroup>
				{ 'custom' === contentPadding && <RangeControl
					value={ contentPaddingCustom }
					onChange={ contentPaddingCustom => setAttributes( { contentPaddingCustom } ) }
					min={0}
					max={100}
				/> }
			</Fragment>
		}

		const contentWidthControls = () => {

			const contentWidthOptions = [
				{ label: __( 'Full', '__plugin_txtd' ), value: 'full' },
				{ label: __( 'Large', '__plugin_txtd' ), value: 'large' },
				{ label: __( 'Narrow', '__plugin_txtd' ), value: 'narrow' },
				{ label: __( 'Custom', '__plugin_txtd' ), value: 'custom' },
			];

			return <Fragment>
				<label>{ __( 'Content Width', '__plugin_txtd') }</label>
				<ButtonGroup>
					{ contentWidthOptions.map( option =>
						<Button isSmall
						        isDefault={ option.value !== contentWidth }
						        isPrimary={ option.value === contentWidth }
						        onClick={ () => { setAttributes( { contentWidth: option.value } ) } }>
							{ option.label }
						</Button>
					) }
				</ButtonGroup>
				{ 'custom' === contentWidth && <RangeControl
					value={ contentWidthCustom }
					onChange={ contentWidthCustom => setAttributes( { contentWidthCustom } ) }
					min={0}
					max={100}
				/> }
			</Fragment>
		}

		const alignmentControls = () => {

			const BLOCK_ALIGNMENTS_CONTROLS = {
				left: {
					icon: alignTop,
					title: __( 'Align Left', '__plugin_txtd' ),
				},
				center: {
					icon: alignCenter,
					title: __( 'Align Middle', '__plugin_txtd' ),
				},
				right: {
					icon: alignBottom,
					title: __( 'Align Right', '__plugin_txtd' ),
				},
			};

			const DEFAULT_CONTROLS = [ 'left', 'center', 'right' ];
			const DEFAULT_CONTROL = 'center';

			return (
				<Fragment>
					<PanelRow>
						<label
							htmlFor='pixelgrade-hero-horizontal-alignment'>{__( 'Horizontal Alignment', '__plugin_txtd' )}</label>
						<Toolbar
							className="pixelgrade-hero-horizontal-alignment-toolbar"
							controls={
								DEFAULT_CONTROLS.map( ( control ) => {
									return {
										...BLOCK_ALIGNMENTS_CONTROLS[ control ],
										isActive: horizontalAlignment === control,
										onClick: () => setAttributes( { horizontalAlignment: control } )
									};
								} )
							}
						/>
					</PanelRow>
					<PanelRow>
						<label
							htmlFor='pixelgrade-hero-verical-alignment'>{__( 'Vertical Alignment', '__plugin_txtd' )}</label>
						<BlockVerticalAlignmentToolbar
							value={verticalAlignment}
							onChange={verticalAlignment => setAttributes( {verticalAlignment} )}
						/>
					</PanelRow>
				</Fragment>
			)
		}

		return [
			<Fragment>
				{ hero }
				{ mediaPlaceholder }
				{ blockControls }
			</Fragment>,
			<InspectorControls>

				<PanelBody title={ __( 'Layout', '__plugin_txtd' ) }>

					{ contentPaddingControls() }
					{ contentWidthControls() }

				</PanelBody>

				<PanelBody title={ __( 'Content Alignment', '__plugin_txtd' ) }>
					{ alignmentControls() }
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