
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
}

export const getSectionsFromFills = ( fills ) => {
	const sections = [];

	// Merge sections with the same label
	fills.forEach( fill => {
		const index = sections.findIndex( section => {
			return section.props.id === fill[0].props.id;
		} );

		if ( index === -1 ) {
			sections.push( {
				props: fill[0].props,
			} );
		} else {
			sections.splice(index, 1, {
				props: {
					...sections[index].props,
					children: mergeChildrenProps( sections[index].props.children, fill[0].props.children ),
				}
			});
		}
	} );

	return sections;
};
