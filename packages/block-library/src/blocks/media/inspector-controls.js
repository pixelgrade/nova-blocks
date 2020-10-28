import {
	ControlsGroup,
	ControlsTab,
	ControlsSection,
	EmphasisBlockAreaControls,
} from "@novablocks/block-editor";

import { getControlsClasses } from "@novablocks/utils";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import {
	RadioControl,
	RangeControl,
} from '@wordpress/components';

const CONTENT_AREA_MAX_WIDTH = 70;
const CONTENT_AREA_MIN_WIDTH = 30;
const CONTENT_AREA_MID_VALUE = ( CONTENT_AREA_MIN_WIDTH + CONTENT_AREA_MAX_WIDTH ) * 0.5;

const MediaInspectorControls = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const {
		emphasisArea,

		contentAreaWidth,
		layoutGutter,
		blockStyle,

		// customize tab attributes
		balanceEmphasis,
		balanceFocalPoint,
	} = attributes;

	const getBalanceAttributes = ( { balanceEmphasis, balanceFocalPoint } ) => {
		const width = balanceEmphasis * ( CONTENT_AREA_MAX_WIDTH - CONTENT_AREA_MID_VALUE ) / 100 + CONTENT_AREA_MID_VALUE;
		const contentAreaWidth = 'content' === balanceFocalPoint ? width : 100 - width;

		return {
			balanceEmphasis,
			balanceFocalPoint,
			contentAreaWidth,
		}
	};


	return (
		<Fragment>

			<EmphasisBlockAreaControls>
				{
					blockStyle !== 'basic' &&
					<RangeControl
						value={ emphasisArea }
						onChange={ ( emphasisArea ) => setAttributes( { emphasisArea } ) }
						label={ __( 'Emphasis Area' ) }
						min={ 10 }
						max={ 100 }
						step={ 5 }
					/>
				}
			</EmphasisBlockAreaControls>

			<ControlsSection label={ __( 'Visual Balance' ) }>
				<ControlsTab label={ __( 'Customize' ) }>
					<div key={ 'media-card-visual-balance-customize-1' } className={ getControlsClasses( attributes, getBalanceAttributes ) }>
						<RangeControl
							value={ balanceEmphasis }
							onChange={ ( balanceEmphasis ) => {
								setAttributes( getBalanceAttributes( { ...attributes, balanceEmphasis } ) );
							} }
							label={ __( 'Emphasis by Balance' ) }
							min={ 0 }
							max={ 100 }
							step={ 25 }
						/>
						<RadioControl
							label={ __( 'Focal Point', '__plugin_txtd' ) }
							selected={ balanceFocalPoint }
							onChange={ ( balanceFocalPoint ) => {
								setAttributes( getBalanceAttributes( { ...attributes, balanceFocalPoint } ) );
							} }
							options={ [
								{ label: __( 'Content Area' ), value: 'content' },
								{ label: __( 'Media / Gallery' ), value: 'media' },
							] }
						/>
					</div>
				</ControlsTab>

				<ControlsTab label={ __( 'Settings' ) }>
					<ControlsGroup title={ __( 'Layout' ) }>
						<RangeControl
							key={ 'media-card-content-area-width' }
							value={ contentAreaWidth }
							onChange={ ( contentAreaWidth ) => setAttributes( { contentAreaWidth } ) }
							label={ __( 'Content Area Width' ) }
							min={ CONTENT_AREA_MIN_WIDTH }
							max={ CONTENT_AREA_MAX_WIDTH }
							step={ 5 }
						/>
						<RangeControl
							key={ 'media-card-layout-gutter' }
							value={ layoutGutter }
							onChange={ ( layoutGutter ) => setAttributes( { layoutGutter } ) }
							label={ __( 'Layout Gutter' ) }
							min={ 0 }
							max={ 100 }
							step={ 10 }
						/>
					</ControlsGroup>
				</ControlsTab>

			</ControlsSection>

		</Fragment>
	);
};

export default MediaInspectorControls;
