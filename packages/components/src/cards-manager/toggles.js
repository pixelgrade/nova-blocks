const { __ }  = wp.i18n;

const toggles = [
	{
		label: __( 'Collection Title' ),
		attribute: 'showCollectionTitle'
	}, {
		label: __( 'Collection Subtitle' ),
		attribute: 'showCollectionSubtitle',
	}, {
		label: __( 'Media' ),
		attribute: 'showMedia',
	}, {
		label: __( 'Title' ),
		attribute: 'showTitle',
	}, {
		label: __( 'Subtitle' ),
		attribute: 'showSubtitle',
	}, {
		label: __( 'Description' ),
		attribute: 'showDescription',
	}, {
		label: __( 'Buttons' ),
		attribute: 'showButtons',
	}, {
		label: __( 'Meta' ),
		attribute: 'showMeta',
	}
];

export default toggles;
