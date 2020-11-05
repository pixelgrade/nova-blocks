import { withSettings } from '../../hooks';

import {
	ControlsGroup,
	ControlsTab,
	ControlsSection
} from "../index";

import { __ } from '@wordpress/i18n';

import { useBlockEditContext } from '@wordpress/block-editor';

import {
	RangeControl,
	RadioControl,
	createSlotFill,
} from '@wordpress/components';

const EmphasisContentAreaSlotFill = createSlotFill( 'EmphasisContentArea' );
const EmphasisContentAreaSlot = EmphasisContentAreaSlotFill.Slot;
const EmphasisContentAreaFill = EmphasisContentAreaSlotFill.Fill;

const EmphasisBlockAreaSlotFill = createSlotFill( 'EmphasisBlockArea' );
const EmphasisBlockAreaSlot = EmphasisBlockAreaSlotFill.Slot;
const EmphasisBlockAreaFill = EmphasisBlockAreaSlotFill.Fill;

const EmphasisLevelControls = ( props ) => {

	const {
		attributes: {
			contentStyle,
			blockStyle,
		},
		setAttributes,
		settings: {
			media: {
				contentAreaOptions,
				blockAreaOptions,
			},
		},
	} = props;

	const getEmphasisByContrastValue = () => {
		const blockIndex = blockAreaOptions.findIndex( option => option.value === blockStyle );
		const contentIndex = contentAreaOptions.findIndex( option => option.value === contentStyle );
		return blockIndex * 3 + contentIndex;
	};

	return [
		<ControlsSection label={ __( 'Color Contrast' ) }>
			<ControlsTab label={ __( 'Customize' ) }>
				<RangeControl
					key={ 'emphasis-by-contrast-controls' }
					value={ getEmphasisByContrastValue() }
					onChange={ contrast => {
						const blockIndex = Math.floor( contrast / 3 );
						const contentIndex = contrast % 3;

						setAttributes( {
							blockStyle: blockAreaOptions[ blockIndex ].value,
							contentStyle: contentAreaOptions[ contentIndex ].value
						} );
					} }
					label={ __( 'Emphasis by Contrast' ) }
					min={ 0 }
					max={ 8 }
				/>
			</ControlsTab>

			<ControlsTab label={ __( 'Settings' ) }>
				<ControlsGroup title={ __( 'Contrast' ) }>
					<RadioControl
						key={ 'block-emphasis-controls' }
						label={ __( 'Block Emphasis', '__plugin_txtd' ) }
						selected={ blockStyle }
						options={ blockAreaOptions }
						onChange={ ( nextBlockStyle ) => setAttributes( { blockStyle: nextBlockStyle } ) }
					/>
					<EmphasisBlockAreaSlot />

					<RadioControl
						key={ 'content-emphasis-controls' }
						label={ __( 'Content Area Emphasis', '__plugin_txtd' ) }
						selected={ contentStyle }
						options={ contentAreaOptions }
						onChange={ ( nextContentStyle ) => setAttributes( { contentStyle: nextContentStyle } ) }
					/>
					<EmphasisContentAreaSlot />
				</ControlsGroup>
				<ColorSetsControl { ...props } />
			</ControlsTab>
		</ControlsSection>
	]
};

const ColorSetsControl = ( props ) => {

	const {
		attributes,
		setAttributes,
		settings: {
			colors
		}
	} = props;

	const {
		style,
		accentColor
	} = attributes;

	let accentColorValue = 'var(--novablocks-color-1)';

	if ( accentColor === 'secondary' ) {
		accentColorValue = 'var(--novablocks-color-2)';
	}

	if ( accentColor === 'tertiary' ) {
		accentColorValue = 'var(--novablocks-color-3)';
	}

	let paletteStyleOptions = [ {
		label: __( 'Primary', '__plugin_txtd' ),
		value: 'primary',
		colors: [ 'var(--novablocks-color-1)', 'var(--novablocks-light-1)' ]
	}, {
		label: __( 'Secondary', '__plugin_txtd' ),
		value: 'secondary',
		colors: [ 'var(--novablocks-color-2)', 'var(--novablocks-light-1)' ]
	}, {
		label: __( 'Tertiary', '__plugin_txtd' ),
		value: 'tertiary',
		colors: [ 'var(--novablocks-color-3)', 'var(--novablocks-light-1)' ] },
	];

	if ( style === 'default' ) {
		paletteStyleOptions = paletteStyleOptions.map( palette => {
			return {
				...palette,
				colors: [
					'var(--novablocks-dark-1)',
					...palette.colors,
				]
			}
		} )
	}

	return (
		<ControlsGroup title={ __( 'Colors' ) }>
			<ColorPaletteControl
				label={ __( 'Main color scheme', '__plugin_txtd' ) }
				key={ 'emphasis-styles-controls' }
				selected={ style }
				options={ [ {
					label: __( 'Default', '__plugin_txtd' ),
					value: 'default',
					colors: [ 'var(--novablocks-dark-1)', accentColorValue, 'var(--novablocks-light-1)' ]
				}, {
					label: __( 'Alternate', '__plugin_txtd' ),
					value: 'alternate',
					colors: [ accentColorValue, 'var(--novablocks-light-1)' ]
				} ] }
				onChange={ ( style ) => setAttributes( { style } ) }
			/>
			<ColorPaletteControl
				label={ __( 'Variation', '__plugin_txtd' ) }
				key={ 'accent-color-style-controls' }
				selected={ accentColor }
				options={ paletteStyleOptions }
				onChange={ ( accentColor ) => setAttributes( { accentColor } ) }
			/>
		</ControlsGroup>
	)
};

const ColorPaletteControl = ( props ) => {
	const { label, options, selected, onChange } = props;

	return (
		<div className={ 'components-base-control components-palette-control' }>
			<div className={ 'components-base-control__field' }>
				{
					label &&
					<label className={ 'components-base-control__label' }>
						{ label }
					</label>
				}
				{
					options.length &&
					<div className={ 'components-palette-control__options' }>
						{
							options.map( option => {
								const { label, colors, value } = option;
								const className = classnames(
									'novablocks-palette',
									'components-palette-control__option',
									{
										'novablocks-palette--active': value === selected
									}
								);

								return (
										<div className={ className } onClick={ () => { onChange( value ) } }>
											{ colors.map( color => {
												const style = { color };

												return (
													<div className={ 'novablocks-palette__color' } style={ style }></div>
												)
											} ) }
										</div>
								);
							} )
						}
					</div>
				}
			</div>
		</div>
	)
};

const EmphasisContentAreaControls = ( props ) => {
	const { isSelected } = useBlockEditContext();

	return (
		<EmphasisContentAreaFill>
			{ isSelected && props.children }
		</EmphasisContentAreaFill>
	)
};

const EmphasisBlockAreaControls = ( props ) => {
	const { isSelected } = useBlockEditContext();

	return (
		<EmphasisBlockAreaFill>
			{ isSelected && props.children }
		</EmphasisBlockAreaFill>
	)
};

export { EmphasisContentAreaControls, EmphasisBlockAreaControls };

export default withSettings( EmphasisLevelControls );
