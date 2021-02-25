import * as icons from './icons';

import { addSocialMenuClass } from './utils';

import classnames from 'classnames';
import get from 'lodash/get';
import map from "lodash/map";

import { __ } from '@wordpress/i18n';

import {
	Component,
	Fragment
 } from '@wordpress/element';

import { InnerBlocks, __experimentalBlockVariationPicker, BlockControls } from '@wordpress/block-editor';

import { createBlock, registerBlockVariation } from '@wordpress/blocks';

import {
	compose
 } from '@wordpress/compose';

import {
	withSelect,
	withDispatch,
  select,
  dispatch,
 } from '@wordpress/data';

import {
  Toolbar,
  IconButton
} from '@wordpress/components';

import InspectorControls from "./inspector-controls";

const TEMPLATE_OPTIONS = [
	{
		title: __( 'Logo on the left side and one navigation menu', '__plugin_txtd' ),
		name: 'logo-left',
		icon: icons.logoLeft,
		template: [
			[ 'novablocks/logo' ],
			[ 'novablocks/navigation', {
				className: "novablocks-navigation novablocks-navigation--primary",
				slug: "primary"
			} ],
		],
	},
	{
		title: __( 'Logo centered and one navigation menu on each side', '__plugin_txtd' ),
		name: 'logo-center',
		icon: icons.logoCenter,
		template: [
			[ 'novablocks/navigation', {
				className: "novablocks-navigation novablocks-navigation--secondary",
				slug: "secondary"
			} ],
			[ 'novablocks/logo' ],
			[ 'novablocks/navigation', {
				className: "novablocks-navigation novablocks-navigation--primary",
				slug: "primary"
			} ],
		],
	}
];

class Edit extends Component {

	constructor() {
		super( ...arguments );
	}

	setTemplate( layout ) {
		this.setState( { template: layout } );
	}

	createBlocksFromInnerBlocksTemplate( innerBlocksTemplate ) {
		return map( innerBlocksTemplate, ( [ name, attributes, innerBlocks = [] ] ) => createBlock( name, attributes, this.createBlocksFromInnerBlocksTemplate( innerBlocks ) ) );
	}

	supportsInnerBlocksPicker() {
		return typeof InnerBlocks.prototype!=='undefined';
	}

	supportsBlockVariationPicker() {
		return !!registerBlockVariation;
	}

	blockVariationPicker() {
		return (
			<Fragment>
				<InnerBlocks
					renderAppender = { false }
				/>
			</Fragment>
		);
	}

	componentDidMount() {
		const { hasInnerBlocks, innerBlocks, defaultVariation } = this.props;
		if ( hasInnerBlocks ) {
			this.setState( { template: innerBlocks } );
		}

		if ( !this.supportsInnerBlocksPicker() && !this.supportsBlockVariationPicker() && hasInnerBlocks === false ) {
			this.setTemplate( defaultVariation );
		}
	}

	componentDidUpdate() {
    addSocialMenuClass();
  }

	innerBlocksPicker() {
		return (
			<Fragment>
				<InnerBlocks
					__experimentalTemplateOptions={ TEMPLATE_OPTIONS }
					__experimentalOnSelectTemplateOption={ ( chosenTemplate ) => {
						if ( chosenTemplate === undefined ) {
							chosenTemplate = TEMPLATE_OPTIONS[ 0 ].template;
						}
						this.setTemplate( chosenTemplate );
					} }
					__experimentalAllowTemplateOptionSkip
					template={ this.supportsInnerBlocksPicker() ? this.state.template : TEMPLATE_OPTIONS[ 0 ].template }
					templateInsertUpdatesSelection={ false }
				/>
			</Fragment>
		);
	}

	render() {
		const {
			attributes: {
				layout,
			},
      clientId,
			blockType,
			defaultVariation,
			replaceInnerBlocks,
			hasInnerBlocks,
			variations,
			className,
			setAttributes
		} = this.props;

		const classNames = classnames(
			className,
			`novablocks-header`,
			`novablocks-header-${ layout }`,
		);

    const currentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
    const childBlocks = currentBlock.innerBlocks;

    const clientIds = childBlocks.map( block => block.clientId );
    const removeInnerBlocks = () => wp.data.dispatch( 'core/block-editor' ).removeBlocks( clientIds );


		if ( hasInnerBlocks || !this.supportsBlockVariationPicker() ) {
			return (
				<Fragment>
          <BlockControls>
            <Toolbar>
              <IconButton
                className="components-icon-button components-toolbar__control"
                label={ __( 'Change Layout', '__plugin_txtd' ) }
                onClick={ () => removeInnerBlocks() }
                icon="edit"
              />
            </Toolbar>
          </BlockControls>
          <InspectorControls {...this.props} />
					<div className={ classNames }>
						{ this.supportsBlockVariationPicker() ? this.blockVariationPicker() : this.innerBlocksPicker() }
					</div>
				</Fragment>
			);
		}

		const blockVariationPickerOnSelect = ( nextVariation = defaultVariation ) => {

			const nextVariationName = nextVariation.name;
			setAttributes( { layout: nextVariationName } );

			if ( nextVariation.attributes ) {
				this.props.setAttributes( nextVariation.attributes );
			}

			if ( nextVariation.innerBlocks ) {
				replaceInnerBlocks(
					this.props.clientId,
					this.createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks )
				);
			}
		};

		return (
			<Fragment>
				<__experimentalBlockVariationPicker
					icon={ get( blockType, [ 'icon', 'src' ] ) }
					label={ get( blockType, [ 'title' ] ) }
					instructions={ __( 'Select a variation to start with.', '__plugin_txtd' ) }
					variations={ variations }
					allowSkip
					onSelect={ ( nextVariation ) => blockVariationPickerOnSelect( nextVariation ) }
				/>
			</Fragment>
		);
	}
}


const applyWithSelect = withSelect( ( select, props ) => {
	const { getBlocks } = select( 'core/block-editor' );
	const { getBlocksByClientId } = select( 'core/editor' );
	const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( 'core/blocks' );
	const innerBlocks = getBlocks( props.clientId );

	return {
		blockType: getBlockType( props.name ),
		defaultVariation: typeof getDefaultBlockVariation === 'undefined' ? null : getDefaultBlockVariation( props.name ),
		getBlocksByClientId,
		hasInnerBlocks: select( 'core/block-editor' ).getBlocks( props.clientId ).length > 0,
		innerBlocks,
		variations: typeof getBlockVariations === 'undefined' ? null : getBlockVariations( props.name ),
	};
} );

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const {
		insertBlock,
		replaceInnerBlocks,
	} = dispatch( 'core/block-editor' );

	const {
		updateBlockAttributes,
	} = dispatch( 'core/editor' );

	return {
		insertBlock,
		replaceInnerBlocks,
		updateBlockAttributes,
	};
} );

export default compose( [ applyWithSelect, applyWithDispatch ] )( Edit );



