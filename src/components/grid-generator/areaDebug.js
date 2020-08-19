const AreaDebug = ( { area } ) => {
	return (
		<div className={ 'novablocks-grid__debug' }>
			{`nth: ${ area.nth }`}<br />
			{`image weight: ${ area.imageWeight }`}<br />
			{`meta details: ${ area.metaDetails }`}<br />
			{`width: ${ area.width }`}<br />
			{`height: ${ area.height }`}<br />
			{`spot ratio: ${ area.spotRatio }`}
		</div>
	);
};

export default AreaDebug;
