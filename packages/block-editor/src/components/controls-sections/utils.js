
export const mergeChildrenProps = ( children1, children2 ) => {

	if ( typeof children1 === "undefined" ) {
		return children2;
	}

	if ( typeof children2 === "undefined" ) {
		return children1;
	}

	let children1Array = Array.isArray( children1 ) ? children1 : [ children1 ];
	let children2Array = Array.isArray( children2 ) ? children2 : [ children2 ];

	return children1Array.concat( children2Array );
};

// Design is the common case: any section that doesn't opt into 'settings'
// renders in the Styles tab.
export const DEFAULT_CONTROLS_SECTION_PLACEMENT = 'styles';

export const resolveControlsSectionPlacement = ( props ) => {
	return props?.placement === 'settings' ? 'settings' : DEFAULT_CONTROLS_SECTION_PLACEMENT;
};

// Builds the memory-state scope suffix shared by Drawers, ActiveSectionTabs,
// and SectionLink, so the same block type + tab (Settings vs Styles) always
// reads/writes the same keys, and never leaks into another block type or tab.
export const getControlsSectionsScopeKey = ( { placement, blockName } = {} ) => {
	return `${ placement || DEFAULT_CONTROLS_SECTION_PLACEMENT }:${ blockName || '' }`;
};

export const getSectionsFromFills = ( fills ) => {
	const sections = [];

	// Merge sections with the same label
	fills.forEach( fill => {
		const incomingProps = fill[0].props;
		const index = sections.findIndex( section => {
			return section.props.id === incomingProps.id;
		} );

		if ( index === -1 ) {
			sections.push( {
				props: incomingProps,
			} );
		} else {
			const existingProps = sections[ index ].props;
			const existingPlacement = resolveControlsSectionPlacement( existingProps );
			const incomingPlacement = resolveControlsSectionPlacement( incomingProps );

			if (
				typeof process !== 'undefined' &&
				process.env &&
				process.env.NODE_ENV !== 'production' &&
				existingPlacement !== incomingPlacement
			) {
				// eslint-disable-next-line no-console
				console.warn(
					`ControlsSection "${ incomingProps.id }" was registered with conflicting placements ` +
					`("${ existingPlacement }" vs "${ incomingPlacement }"). Keeping "${ existingPlacement }" ` +
					`(first-registered wins).`
				);
			}

			sections.splice(index, 1, {
				props: {
					...existingProps,
					children: mergeChildrenProps( existingProps.children, incomingProps.children ),
					// First-registered contributor's placement always wins.
					placement: existingPlacement,
				}
			});
		}
	} );

	return sections;
};
