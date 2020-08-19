import { prepareAttributes, getGridStyle, fillAreaColumnsWithPosts, getAreaClassName } from "../../components/grid-generator/utils";
import { applyLayoutEngine } from "../../components/grid-generator/layoutEngine";
import Post from "./post";

const Preview = ( props ) => {

	const {
		attributes,
		posts,
		clientId,
		markPostsAsDisplayed,
	} = props;

	const {
		toggleScale,
		toggleMask,
	} = attributes;

	markPostsAsDisplayed( clientId, posts );

	let areaColumns = applyLayoutEngine( prepareAttributes( attributes ) );

	if ( ! posts || ! posts.length ) {
		return null;
	}

	fillAreaColumnsWithPosts( areaColumns, posts );

	return (
		<div className="wp-block-group__inner-container">
			<div className={ `novablocks-grid ${ toggleScale ? '' : 'novablocks-grid--scaled' } ${ toggleMask ? '' : 'novablocks-grid--mask' }` } style={ getGridStyle( attributes ) }>
				{
					!! areaColumns && areaColumns.map( ( areaColumn, idx ) => {
						let { areas, nth, row, col, width, height } = areaColumn;

						const style = {
							gridColumnStart: col,
							gridColumnEnd: col + width,
							gridRowStart: row,
							gridRowEnd: row + height,
						};

						return (
							<div className={ `novablocks-grid__column` } style={ style }>
								{ areas.map( area => {

									return (
										<div className={ getAreaClassName( area, attributes ) }>
											<div className={ 'novablocks-grid__debug' }>
												{`nth: ${ area.nth }`}<br />
												{`image weight: ${ area.imageWeight }`}<br />
												{`meta details: ${ area.metaDetails }`}<br />
												{`width: ${ area.width }`}<br />
												{`height: ${ area.height }`}<br />
												{`spot ratio: ${ area.spotRatio }`}
											</div>
											{
												area.posts && area.posts.map( post => {

													return (
														<div className="novablocks-grid__item">
															<Post post={ post } attributes={ attributes } />
														</div>
													);
												} )
											}
										</div>
									)
								} ) }
							</div>
						);
					} )
				}
			</div>
		</div>
	)
};

export default Preview;
