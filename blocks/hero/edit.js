import { debounce } from '../utils';
import * as icons from '../icons';

import ColorControls from '../../components/color-controls';

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
	Dropdown,
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
				// media
				media,
			},
			className,
			setAttributes,
			isSelected
		} = this.props;

		const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

		const blockControls = (
			<BlockControls>
				<Toolbar className="pixelgrade-hero-block-toolbar">
					<Dropdown
						position="bottom"
						className="pixelgrade-hero-block-toolbar-dropdown"
						contentClassName="table-of-contents__popover"
						renderToggle={ ( { isOpen, onToggle } ) => (
							<IconButton
								onClick={ onToggle }
								icon={ icons.alignment }
								aria-expanded={ isOpen }
								label={ __( 'Content alignment', '__plugin_txtd' ) }
								labelPosition="bottom"
							/>
						) }
						renderContent={ ( { onClose } ) => <Fragment>
							{ alignmentControls() }
						</Fragment> }
					/>
				</Toolbar>
				<Toolbar className="pixelgrade-hero-block-toolbar">
					<Dropdown
						position="bottom"
						className="pixelgrade-hero-block-toolbar-dropdown"
						contentClassName="table-of-contents__popover"
						renderToggle={ ( { isOpen, onToggle } ) => (
							<IconButton
								onClick={ onToggle }
								icon={ icons.invert }
								aria-expanded={ isOpen }
								label={ __( 'Invert colors', '__plugin_txtd' ) }
								labelPosition="bottom"
							/>
						) }
						renderContent={ ( { onClose } ) => <Fragment>
							<ColorControls { ...this.props } />
						</Fragment> }
					/>
				</Toolbar>
				<Toolbar>
					<MediaUpload
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						onSelect={ media => setAttributes( { media } ) }
						render={ ( { open } ) => {
							return <IconButton
								label={ __( 'Swap Media', '__plugin_txtd' ) }
								icon="format-image"
								onClick={ open }
							/>
						}}
					/>
				</Toolbar>
			</BlockControls>
		);

		const hero = () => {
			const classes = [
				className,
				'c-hero',
				`c-hero--v-align-${verticalAlignment}`,
				`c-hero--h-align-${horizontalAlignment}`,
				`c-hero--spacing-${contentPadding}`,
				`c-hero--content-width-${contentWidth}`,
				`u-background`,
				`u-background-${overlayFilterStyle}`
			]

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
				styles.foreground.paddingTop = `${contentPaddingCustom}%`
				styles.foreground.paddingBottom = `${contentPaddingCustom}%`
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
						{ media.type === "image" && typeof media.sizes !== "undefined"
						  && <img className="c-hero__image" src={ media.sizes.full.url } style={ styles.image }/> }
						{ media.type === "video"
						  && <video muted autoplay loop className="c-hero__image" src={ media.url } style={ styles.image }/> }
					</div>
				</div>
				<div className="c-hero__foreground" style={ styles.foreground }>
					<div className="c-hero__content-wrapper">
						<div className="c-hero__content" style={ styles.content }>
							<InnerBlocks template={[
								[ 'core/heading', { content: 'This is a catchy title', align: 'center' } ],
								[ 'core/paragraph', { content: 'A brilliant subtitle to explain its catchiness', align: 'center' } ],
								[ 'core/button', { text: 'Discover more', align: 'center' } ],
							]} />
						</div>
						{ scrollIndicatorBlock && <div className="c-hero__indicator"></div> }
					</div>
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
					max={25}
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
				<ButtonGroup label="Content Width">
					{ contentWidthOptions.map( option =>
						<Button isDefault={ option.value !== contentWidth }
						        isPrimary={ option.value === contentWidth }
						        onClick={ () => { setAttributes( { contentWidth: option.value} ) } }>
							{ option.label }
						</Button>
					) }
				</ButtonGroup>
				{ 'custom' === contentWidth && <RangeControl
					value={ contentWidthCustom }
					onChange={ contentWidthCustom => setAttributes( { contentWidthCustom } ) }
					min={20}
					max={90}
					step={10}
				/> }
			</Fragment>
		}

		const alignmentPanel = () => {

			return (
				<PanelBody title={ __( 'Content Position', '__plugin_txtd' ) }>
					{ alignmentControls() }
				</PanelBody>
			)
		}

		const alignmentControls = () => {

			const BLOCK_ALIGNMENTS_CONTROLS = {
				left: {
					icon: icons.alignTop,
					title: __( 'Align Left', '__plugin_txtd' ),
				},
				center: {
					icon: icons.alignCenter,
					title: __( 'Align Middle', '__plugin_txtd' ),
				},
				right: {
					icon: icons.alignBottom,
					title: __( 'Align Right', '__plugin_txtd' ),
				},
			};

			const DEFAULT_CONTROLS = [ 'left', 'center', 'right' ];
			const DEFAULT_CONTROL = 'center';

			return (
				<Fragment>
					<PanelRow>
						<label
							htmlFor='pixelgrade-hero-horizontal-alignment'>{__( 'Horizontal', '__plugin_txtd' )}</label>
						<Toolbar
							className="pixelgrade-hero-horizontal-alignment-toolbar"
							controls={
								DEFAULT_CONTROLS.map( ( control ) => {
									return {
										...BLOCK_ALIGNMENTS_CONTROLS[ control ],
										isActive: horizontalAlignment === control,
										onClick: () => {
											wp.data.select('core/editor').getSelectedBlock().innerBlocks.map( block => {
												wp.data.dispatch( 'core/editor' ).updateBlockAttributes( block.clientId, { align: control } );
											} );
											setAttributes( { horizontalAlignment: control } )
										}
									};
								} )
							}
						/>
					</PanelRow>
					<PanelRow>
						<label
							htmlFor='pixelgrade-hero-verical-alignment'>{__( 'Vertical', '__plugin_txtd' )}</label>
						<BlockVerticalAlignmentToolbar
							value={verticalAlignment}
							onChange={verticalAlignment => setAttributes( {verticalAlignment} )}
						/>
					</PanelRow>
				</Fragment>
			)
		}

		const parallaxControls = () => {

			return (
				<PanelBody title={ __( 'Parallax', '__plugin_txtd' ) }>
					<ToggleControl
						label={ __( "Enable Parallax Scrolling", "__plugin_txtd" ) }
						checked={ enableParallax }
						onChange={ () => setAttributes( { enableParallax: ! enableParallax } ) }
					/>
					{ !! enableParallax &&
					 <Fragment>
						 <SelectControl
						 	 label="Parallax Orbital Speed"
							 id="pixelgrade-hero-parallax-orbital-speed-control"
							 help={'The speed at which the parallax effect runs. '}
							 value={parallaxAmount}
							 onChange={ parallaxAmount => {

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
									 label: __( 'Fast as Mercure +20', '__plugin_txtd' ),
									 value: 20
								 }, {
									 label: __( 'Natural as Earth +50', '__plugin_txtd' ),
									 value: 50
								 }, {
									 label: __( 'Slow as Neptune +70', '__plugin_txtd' ),
									 value: 70
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
						min={10}
						max={100}
						step={10}
						help={'It starts from 0 when the image will keep with the content (no parallax) up to 100 when the image appears fixed in place.'}
					/> }
				</PanelBody>
			)
		}

		const heightControls = () => {

			return (
				<PanelBody title={ __( 'Height', '__plugin_txtd' ) }>
					<SelectControl
						label="Apply Minimum Height"
						id="pixelgrade-hero-apply-minimum-height-control"
						options={[{
							label: __( 'None', '__plugin_txtd' ),
							value: 'none'
						}, {
							label: __( 'First Block Only', '__plugin_txtd' ),
							value: 'first'
						}, {
							label: __( 'All Blocks', '__plugin_txtd' ),
							value: 'all'
						}]}
						value={ applyMinimumHeight }
						onChange={ applyMinimumHeight => {
							setAttributes( { applyMinimumHeight } );
							updateBlocks( { applyMinimumHeight } );
						} }
					/>
					{ 'none' !== applyMinimumHeight && <Fragment>
						<SelectControl
							label="Minimum Height"
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
				{ blockControls }
			</Fragment>,
			<InspectorControls>

				{ alignmentPanel() }
				<PanelBody title={ __( 'Colors', '__plugin_txtd' ) }>
					<ColorControls { ...this.props } />
				</PanelBody>

				{ layoutControls() }
				{ heightControls() }
				{ scrollIndicatorControl() }
				{ parallaxControls() }

			</InspectorControls>
		]
	}
}