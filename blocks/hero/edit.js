import { debounce } from '../utils';
import { alignTop, alignCenter, alignBottom } from '../icons';

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
	Button,
	ButtonGroup,
	ColorPalette,
	IconButton,
	PanelBody,
	PanelRow,
	RadioControl,
	RangeControl,
	SelectControl,
	ToggleControl,
	Toolbar,
} = wp.components;

const editorData = wp.data.select( 'core/editor' );

const updateBlocks = ( attributes ) => {

	editorData.getBlocks().filter( block => {
		return block.name === 'pixelgrade/hero';
	} ).filter( ( block, index ) => {
		const { applyMinimumHeight, scrollIndicator } = { ...block.attributes, ...attributes };
		const applyMinimumHeightBlock = applyMinimumHeight === 'first' && index === 0 || applyMinimumHeight === 'all';
		const scrollIndicatorBlock = scrollIndicator === true && index === 0;

		wp.data.dispatch( 'core/editor' ).updateBlockAttributes( block.clientId, {
			applyMinimumHeightBlock,
			scrollIndicatorBlock
		} );

		return true;
	} );

}

let blockList = editorData.getBlocks();
let debouncedOnSubscribe = debounce(() => {

	const newBlockList = editorData.getBlocks();
	let blockListChanged = blockList.length !== newBlockList.length;

	if ( ! blockListChanged ) {
		blockListChanged = blockList.some( ( block, index ) => {
			return ( blockList[index].clientId !== newBlockList[index].clientId );
		} );
	}

	if ( blockListChanged ) {
		blockList = newBlockList;
		updateBlocks();
	}
}, 30);

wp.data.subscribe( debouncedOnSubscribe );

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
				// alignment
				verticalAlignment,
				horizontalAlignment,
				// height
				minHeight,
				applyMinimumHeight,
				applyMinimumHeightBlock,
				scrollIndicator,
				scrollIndicatorBlock,
				// parallax
				enableParallax,
				parallaxAmount,
				parallaxCustomAmount,
				// colors
				contentColor,
				overlayFilterStyle,
				overlayFilterStrength,
				// images
				images
			},
			className,
			setAttributes,
			isSelected
		} = this.props;

		const hasImages = !! images.length;

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
			`c-hero--content-width-${contentWidth}`,
			`c-hero--background-${overlayFilterStyle}`
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

		const hero = () => {

			const styles = {
				hero: {
					color: contentColor,
				},
				foreground: {

				},
				content: {

				},
				image: {

				}
			}

			if ( !! applyMinimumHeightBlock ) {
				styles.hero.minHeight = minHeight + 'vh'
			}

			if ( contentPadding === 'custom' ) {
				styles.foreground.padding = contentPaddingCustom
			}

			if ( contentWidth === 'custom' ) {
				styles.content.maxWidth = `${contentWidthCustom}%`
			}

			if ( overlayFilterStyle !== 'none' ) {
				styles.image.opacity = 1 - overlayFilterStrength / 100
			}

			return <div className={classes.join(' ')} style={styles.hero}>
				<div className="c-hero__mask c-hero__layer">
					<div className="c-hero__background c-hero__layer">
						{ !! images.length && <img className="c-hero__image" src={ images[0].sizes.large.url } style={ styles.image }/> }
					</div>
				</div>
				<div className="c-hero__foreground" style={ styles.foreground }>
					<div className="c-hero__content" style={ styles.content }>
						<InnerBlocks />
					</div>
					{ scrollIndicatorBlock && <div className="c-hero__indicator">
						Scroll Down
					</div> }
				</div>
			</div>
		}


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
						<Button isDefault={ option.value !== contentPadding }
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
						<Button isDefault={ option.value !== contentWidth }
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
				<PanelBody title={ __( 'Content Alignment', '__plugin_txtd' ) }>
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
				</PanelBody>
			)
		}

		const parallaxControls = () => {

			return (
				<PanelBody title={ __( 'Parallax', '__plugin_txtd' ) }>
					<ToggleControl
						label={ __( "Enable Parallax", "__plugin_txtd" ) }
						checked={ enableParallax }
						onChange={ () => setAttributes( { enableParallax: ! enableParallax } ) }
					/>
					{ !! enableParallax &&
					 <Fragment>
						 <label htmlFor="pixelgrade-hero-parallax-orbital-speed-control">
							 { __( 'Parallax Orbital Speed', '__plugin_txtd' ) }
						 </label>
						 <SelectControl
							 id="pixelgrade-hero-parallax-orbital-speed-control"
							 value={parallaxAmount}
							 onChange={ parallaxAmount => {

							 	console.log( parallaxAmount, parallaxCustomAmount );
							 	if ( parallaxAmount === 'custom' ) {
								    setAttributes( { parallaxAmount } );
							    } else {
								    setAttributes( {
									    parallaxAmount: parallaxAmount,
									    parallaxCustomAmount: parseInt( parallaxAmount, 10 )
								    } );
							    }
							 } }
							 options={[
								 {
									 label: __( 'Neptune', '__plugin_txtd' ),
									 value: 100
								 }, {
									 label: __( 'Earth', '__plugin_txtd' ),
									 value: 50
								 }, {
									 label: __( 'Mercur', '__plugin_txtd' ),
									 value: 20
								 }, {
									 label: __( 'Custom', '__plugin_txtd' ),
									 value: 'custom'
								 }
							 ]}
						 />
					 </Fragment>
					}
					{ !! enableParallax && 'custom' === parallaxAmount && <RangeControl
						value={ parallaxCustomAmount }
						onChange={ parallaxCustomAmount => setAttributes( { parallaxCustomAmount } ) }
						min={0}
						max={100}
					/> }
				</PanelBody>
			)
		}

		const heightControls = () => {

			return (
				<PanelBody title={ __( 'Height', '__plugin_txtd' ) }>
					<label htmlFor="pixelgrade-hero-apply-minimum-height-control">{ __( 'Apply Minimum Height', '__plugin_txtd' ) }</label>
					<SelectControl
						id="pixelgrade-hero-apply-minimum-height-control"
						options={[{
							label: __( 'None', '__plugin_txtd' ),
							value: 'none'
						}, {
							label: __( 'First Block Only', '__plugin_txtd' ),
							value: 'first'
						}, {
							label: __( 'All', '__plugin_txtd' ),
							value: 'all'
						}]}
						value={ applyMinimumHeight }
						onChange={ applyMinimumHeight => {
							setAttributes( { applyMinimumHeight } );
							updateBlocks( { applyMinimumHeight } );
						} }
					/>
					{ 'none' !== applyMinimumHeight && <Fragment>
						<label htmlFor="pixelgrade-hero-minimum-height-control">{ __( 'Minimum Height', '__plugin_txtd' ) }</label>
						<SelectControl
							id="pixelgrade-hero-minimum-height-control"
							value={ minHeight }
							onChange={ minHeight => {
								setAttributes( { minHeight } );
								updateBlocks( { minHeight } );
							} }
							options={[{
								label: __( 'Half', '__plugin_txtd' ),
								value: 50
							}, {
								label: __( 'Two Thirds', '__plugin_txtd' ),
								value: 66
							}, {
								label: __( 'Three Quarters', '__plugin_txtd' ),
								value: 75
							}, {
								label: __( 'Full', '__plugin_txtd' ),
								value: 100
							}]}
						/>
					</Fragment> }
				</PanelBody>
			)
		}

		const layoutControls = () => {
			return (
				<PanelBody
					className="pixelgrade-hero-button-group-wrapper"
					title={ __( 'Layout', '__plugin_txtd' ) }>

					{ contentPaddingControls() }
					{ contentWidthControls() }

				</PanelBody>
			)
		}

		const scrollIndicatorControl = () => {
			const heroBlocks = editorData.getBlocks().filter( block => {
				return block.name === 'pixelgrade/hero';
			} );

			const index = heroBlocks.findIndex( block => block.clientId === editorData.getSelectedBlockClientId() );

			return <PanelBody title={ __( 'Scroll Indicator', '__plugin_txtd' ) } style={ { display: index === 0 ? 'block' : 'none' } }>
				<ToggleControl
					label={ __( "Enable Scroll Indicator", "__plugin_txtd" ) }
					checked={ scrollIndicator }
					onChange={ scrollIndicator => {
						setAttributes( { scrollIndicator } );
						updateBlocks( { scrollIndicator } );
					} }
				/>
			</PanelBody>
		}

		return [
			<Fragment>
				{ hero() }
				{ mediaPlaceholder }
				{ blockControls }
			</Fragment>,
			<InspectorControls>

				{ layoutControls() }
				{ alignmentControls() }
				{ heightControls() }
				{ parallaxControls() }

				<PanelBody title={ __( 'Colors', '__plugin_txtd' ) }>

					<ColorPalette
						label={ __( 'Content Color', '__plugin_txtd' ) }
						colors={[
							{
								name: __( 'Dark', '__plugin_txtd' ),
								color: '#000'
							}, {
								name: __( 'Light', '__plugin_txtd' ),
								color: '#FFF'
							}
						]}
						value={ contentColor }
						onChange={ contentColor => setAttributes( { contentColor } ) }
					/>

					<SelectControl
						label={ __( 'Overlay Filter Style', '__plugin_txtd' ) }
						value={ overlayFilterStyle }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Dark', value: 'dark' },
							{ label: 'Light', value: 'light' }
						] }
						onChange={ overlayFilterStyle => setAttributes( { overlayFilterStyle } ) }
					/>

					{ overlayFilterStyle !== 'none' && <RangeControl
						label={ __( "Overlay Filter Strength", "__plugin_txtd" ) }
						value={ overlayFilterStrength }
						onChange={ overlayFilterStrength => setAttributes( { overlayFilterStrength } ) }
						min={0}
						max={100}
						step={10}
					/> }
				</PanelBody>

				{ scrollIndicatorControl() }

			</InspectorControls>
		]
	}
}