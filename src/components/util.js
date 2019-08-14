// https://stackoverflow.com/a/2450976
export const shuffleArray = function( array ) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while ( 0 !== currentIndex ) {
		// eslint-disable-next-line no-restricted-syntax
		randomIndex = Math.floor( Math.random() * currentIndex );
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[ currentIndex ];
		array[ currentIndex ] = array[ randomIndex ];
		array[ randomIndex ] = temporaryValue;
	}

	return array;
};
