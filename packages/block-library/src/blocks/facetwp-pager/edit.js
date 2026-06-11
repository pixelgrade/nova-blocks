import { useBlockProps, Warning } from "@wordpress/block-editor";
import { SelectControl } from "@wordpress/components";
import { Fragment, useMemo } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { ControlsSection, ControlsTab, useSettings } from "@novablocks/block-editor";

const getPagerFacets = ( facets = [] ) => {
	return facets.filter( currentFacet => currentFacet.type === 'pager' );
};

const Edit = ( props ) => {
	const { attributes } = props;
	const { facet } = attributes;
	const settings = useSettings();
	const facets = settings?.facetwp_facets || [];
	const pagerFacets = useMemo( () => getPagerFacets( facets ), [ facets ] );
	const activeFacet = pagerFacets.find( currentFacet => currentFacet.name === facet );

	const blockProps = useBlockProps( {
		className: "nb-facetwp-pager wp-block-query-pagination"
	} );

	return (
		<Fragment>
			<nav { ...blockProps } aria-label={ __( 'FacetWP Pagination', '__plugin_txtd' ) }>
				{ pagerFacets.length === 0 ? (
					<Warning>
						{ __( 'Create a FacetWP Pager facet, then select it here. Do not use core Query Pagination with FacetWP templates.', '__plugin_txtd' ) }
					</Warning>
				) : (
					<div className="nb-facetwp-pager__preview">
						<span className="nb-facetwp-pager__label">
							{ activeFacet?.label || __( 'Select a Pager facet', '__plugin_txtd' ) }
						</span>
						<span className="nb-facetwp-pager__type">
							{ __( 'pager', '__plugin_txtd' ) }
						</span>
					</div>
				) }
			</nav>
			<PagerInspectorControls { ...props } pagerFacets={ pagerFacets } />
		</Fragment>
	)
}

const PagerInspectorControls = ( props ) => {
	const { attributes, pagerFacets, setAttributes } = props;
	const { facet } = attributes;
	const options = [
		{ label: __( 'Select a Pager facet', '__plugin_txtd' ), value: '' },
		...pagerFacets.map( currentFacet => ( {
			label: currentFacet.label,
			value: currentFacet.name,
		} ) ),
	];

	return (
		<ControlsSection id={ 'setup' } label={ __( 'Setup', '__plugin_txtd' ) }>
			<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
				<SelectControl
					label={ __( 'Pager Facet', '__plugin_txtd' ) }
					value={ facet }
					options={ options }
					onChange={ facet => setAttributes( { facet } ) }
					help={ __( 'FacetWP Pager facets should be placed outside the listing container with the facetwp-template class.', '__plugin_txtd' ) }
				/>
			</ControlsTab>
		</ControlsSection>
	)
}

export default Edit;
