const AreaDebug = ( { area } ) => {
  return (
    <div className={ 'nb-grid__debug' }>
      { `nth: ${ area.nth }` }<br/>
      { `posts count: ${ area.postsCount }` }<br/>
      { `initial posts count: ${ area.initialPostsCount }` }<br/>
      { `width: ${ area.width }` }<br/>
      { `height: ${ area.height }` }<br/>
      { `spot ratio: ${ area.spotRatio }` }
    </div>
  );
};

export default AreaDebug;
