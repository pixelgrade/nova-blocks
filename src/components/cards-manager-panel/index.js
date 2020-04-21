import { ToggleGroup } from "../../components";

const { __ }  = wp.i18n;

const CardsManagerPanel = ( props ) => {

	const { attributes } = props;

	const toggles = [
		{
			label: __( 'Collection Title' ),
			value: attributes[ 'showCollectionTitle' ],
			attribute: 'showCollectionTitle'
		}, {
			label: __( 'Collection Subtitle' ),
			value: attributes[ 'showCollectionSubtitle' ],
			attribute: 'showCollectionSubtitle',
		}, {
			label: __( 'Media' ),
			value: attributes[ 'showMedia' ],
			attribute: 'showMedia',
		}, {
			label: __( 'Title' ),
			value: attributes[ 'showTitle' ],
			attribute: 'showTitle',
		}, {
			label: __( 'Subtitle' ),
			value: attributes[ 'showSubtitle' ],
			attribute: 'showSubtitle',
		}, {
			label: __( 'Description' ),
			value: attributes[ 'showDescription' ],
			attribute: 'showDescription',
		}, {
			label: __( 'Buttons' ),
			value: attributes[ 'showButtons' ],
			attribute: 'showButtons',
		}, {
			label: __( 'Meta' ),
			value: attributes[ 'showMeta' ],
			attribute: 'showMeta',
		}
	];

	const {
		label,
		onChange,
	} = props;

	return (
		<ToggleGroup
			label={ label }
			onChange={ onChange }
			toggles={ toggles }
		/>
	);
}

export default CardsManagerPanel;
