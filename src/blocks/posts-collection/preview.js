import { ClassicLayoutPreview, ParametricLayoutPreview } from "../../components/grid-generator/preview";
import Post from "./post";
import classnames from "classnames";
import { CollectionHeader } from "../../components/collection";

const Preview = ( props ) => {

	const {
		attributes,
		setAttributes,
		posts,
		clientId,
		markPostsAsDisplayed,
		className,
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
		const idx = headerPosition !== 0 && headerPosition - 1 < index ? index - 1 : index;
		const post = posts?.[idx];

		if ( headerPosition - 1 === index ) {
			return <CollectionHeader { ...props } />
		}

		return post && <Post post={ post } isLandscape={ isLandscape } attributes={ attributes } />;
	};

	const classname = classnames(
		'novablocks-block',
		'novablocks-block--parametric-grid',

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
					cardsCount={ posts.length + ( headerPosition !== 0 ? 1 : 0 ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					posts={ posts }
				/>
			}
		</div>
	)
};

export default Preview;
