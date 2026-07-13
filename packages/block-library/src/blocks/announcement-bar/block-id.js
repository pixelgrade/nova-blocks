export const getAnnouncementBlockId = ( blockId, clientId, matchingClientIds = [] ) => {
	if ( ! blockId ) {
		return clientId;
	}

	if ( matchingClientIds.length > 1 && matchingClientIds[0] !== clientId ) {
		return clientId;
	}

	return blockId;
};
