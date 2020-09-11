import { ClassicLayoutPreview, ParametricLayoutPreview } from "../../components/grid-generator/preview";
import Post from "./post";
import classnames from "classnames";
import { CollectionHeader } from "../../components/collection";

const {
	Fragment
} = wp.element;

const Preview = ( props ) => {

	const {
		attributes,
		setAttributes,
		posts,
		clientId,
		markPostsAsDisplayed,
		className,
		isSelected,
	} = props;

	const {
		layoutStyle,
		contentAlign,
		contentStyle,
		blockStyle,

		headerPosition,
	} = attributes;

	markPostsAsDisplayed( clientId, posts );

	if ( ! posts || ! posts.length ) {
		return null;
	}

	const getContent = ( index, attributes, isLandscape ) => {
		const post = posts?.[index];

		return (
			<Fragment>
				{
					headerPosition - 1 === index &&
				    <div className="novablocks-grid__item">
					    <CollectionHeader { ...props } />
				    </div>
				}
				{
					post &&
					<div className="novablocks-grid__item">
						<Post post={ post } isLandscape={ isLandscape } attributes={ attributes } />
					</div>
				}
			</Fragment>
		)
	};

	const classname = classnames(
		'novablocks-block',

		`novablocks-collection`,
		`novablocks-collection--align-${ contentAlign }`,
		`block-is-${ blockStyle }`,
		`content-is-${ contentStyle }`,
		className
	);

	return (
		<div className={ classname }>
			{
				layoutStyle === 'classic' &&
				<ClassicLayoutPreview { ...props } />
			}
			{
				layoutStyle === 'parametric' &&
				<ParametricLayoutPreview
					getContent={ getContent }
					cardsCount={ posts.length }
					attributes={ attributes }
					setAttributes={ setAttributes }
					posts={ posts }
					isSelected={ isSelected }
				/>
			}
		</div>
	)
};

export default Preview;
