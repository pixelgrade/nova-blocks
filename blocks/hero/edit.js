import { debounce } from '../utils';
import * as icons from '../icons';

import {
	AlignmentControls,
	LayoutControls,
	ColorControls,
	ColorPanel,
	OverlayControls,
	ParallaxControls
} from "../../components";

const { __ } = wp.i18n;

const {
	InspectorControls,
	BlockControls,
	MediaUpload,
	InnerBlocks
} = wp.blockEditor;

const {
	Component,
	Fragment
} = wp.element;

const {
	Button,
	Dropdown,
	IconButton,
	PanelBody,
	PanelRow,
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
				<Toolbar className='pixelgrade-hero-block-toolbar'>
					<Dropdown
						position='bottom'
						className='pixelgrade-hero-block-toolbar-dropdown'
						contentClassName='components-nova--popover'
						renderToggle={ ( { isOpen, onToggle } ) => (
							<IconButton
								onClick={ onToggle }
								icon={ icons.alignment }
								aria-expanded={ isOpen }
								label={ __( 'Content alignment', '__plugin_txtd' ) }
								labelPosition='bottom'
							/>
						) }
						focusOnMount={ false }
						renderContent={ ( { onClose } ) => <Fragment>
							<AlignmentControls { ...this.props } />
						</Fragment> }
					/>
				</Toolbar>
				<Toolbar className='pixelgrade-hero-block-toolbar'>
					<Dropdown
						position='bottom'
						className='pixelgrade-hero-block-toolbar-dropdown'
						contentClassName='components-nova--popover'
						renderToggle={ ( { isOpen, onToggle } ) => (
							<IconButton
								onClick={ onToggle }
								icon={ icons.invert }
								aria-expanded={ isOpen }
								label={ __( 'Invert colors', '__plugin_txtd' ) }
								labelPosition='bottom'
							/>
						) }
						focusOnMount={ false }
						renderContent={ ( { onClose } ) => <Fragment>
							<ColorControls { ...this.props } />
							<OverlayControls { ...this.props } />
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
								icon='format-image'
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
				<div className='nova-hero__mask'>
					<div className='nova-hero__background'>
						{ media.type === 'image' && typeof media.sizes !== 'undefined'
						  && <img className='nova-hero__media' src={ media.sizes.full.url } style={ styles.image }/> }
						{ media.type === 'video'
						  && <video muted autoplay loop className='nova-hero__media' src={ media.url } style={ styles.image }/> }
					</div>
				</div>
				<div className='nova-hero__foreground nova-u-content-padding' style={ styles.foreground }>
					<div className='nova-u-content-align'>
						<div className='nova-hero__content nova-u-content-width' style={ styles.content }>
							<InnerBlocks template={[
								[ 'core/heading', { content: 'This is a catchy title', align: 'center' } ],
								[ 'core/paragraph', { content: 'A brilliant subtitle to explain its catchiness', align: 'center' } ],
								[ 'core/button', { text: 'Discover more', align: 'center' } ],
							]} />
						</div>
						{ scrollIndicatorBlock && <div className='nova-hero__indicator'></div> }
					</div>
				</div>
			</div>
		}

		const heightControls = () => {

			return (
				<PanelBody title={ __( 'Height', '__plugin_txtd' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Apply Minimum Height', '__plugin_txtd' ) }
						value={ applyMinimumHeight }
						onChange={ applyMinimumHeight => {
							setAttributes( { applyMinimumHeight } );
							updateBlocks( { applyMinimumHeight } );
						} }
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
					/>
					{ 'none' !== applyMinimumHeight && <Fragment>
						<SelectControl
							label={ __( 'Minimum Height', '__plugin_txtd' ) }
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

		const scrollIndicatorControl = () => {
			const heroBlocks = editorData.getBlocks().filter( block => {
				return block.name === 'pixelgrade/hero';
			} );

			const index = heroBlocks.findIndex( block => block.clientId === editorData.getSelectedBlockClientId() );

			return <PanelBody title={ __( 'Scroll Indicator', '__plugin_txtd' ) } style={ { display: index === 0 ? 'block' : 'none' } } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Enable Scroll Indicator', '__plugin_txtd' ) }
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

				<PanelBody title={ __( 'Content Position', '__plugin_txtd' ) }>
					<AlignmentControls { ...this.props } />
				</PanelBody>

				<ColorPanel { ...this.props } />
				<LayoutControls { ...this.props } />

				{ heightControls() }
				{ scrollIndicatorControl() }

				<ParallaxControls { ...this.props } />

			</InspectorControls>
		]
	}
}