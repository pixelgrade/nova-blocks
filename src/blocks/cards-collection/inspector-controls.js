import { CardsManagerPanel } from "../../components";

const { __ } = wp.i18n;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	dispatch,
} = wp.data;


const CardsCollectionInspectorControls = ( props ) => {

	const { innerBlocks } = props;

	const updateChildrenAttributes = ( attributes ) => {
		innerBlocks.forEach( ( { clientId } ) => {
			dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, attributes );
		} );
	}

	const updateAttributes = ( attributes ) => {
		setAttributes( attributes );
		updateChildrenAttributes( attributes );
	}

	return (
		<InspectorControls>
			<CardsManagerPanel
				label={ __( 'Cards Manager', '__plugin_txtd' ) }
				onChange={ updateAttributes }
				{ ...props }
			/>
		</InspectorControls>
   );
}

export default CardsCollectionInspectorControls;
