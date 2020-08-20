const AreaDebug = ( { area } ) => {
	return (
		<div className={ 'novablocks-grid__debug' }>
			{`nth: ${ area.nth }`}<br />
			{`posts: ${ area.postsCount }`}<br />
			{`width: ${ area.width }`}<br />
			{`height: ${ area.height }`}<br />
			{`spot ratio: ${ area.spotRatio }`}
		</div>
	);
};

export default AreaDebug;
