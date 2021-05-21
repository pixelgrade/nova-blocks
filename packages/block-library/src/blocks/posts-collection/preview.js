import classnames from "classnames";

import { Card } from "@novablocks/components";
import { PostCard } from "@novablocks/block-editor";

import {
	CollectionHeader,
	GridGenerator,
} from "@novablocks/collection";

const {
	ClassicLayoutPreview,
	ParametricLayoutPreview
} = GridGenerator;

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

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
		showMedia,
		showMeta,
		showTitle,
		showDescription,
		showButtons,

		layoutStyle,
		contentAlign,
		contentStyle,
		blockStyle,

		headerPosition,
	} = attributes;

	markPostsAsDisplayed( clientId, posts );

	if ( Array.isArray( posts ) && ! posts.length ) {
		return (
			<div className={ 'wp-block__inner-container' }>
				<p>{ __( 'There are no posts to be displayed in this block. Try changing the Content Filter settings.' ) }</p>
			</div>
		)
	}

	const getContent = ( index, attributes, isLandscape ) => {
		const post = posts?.[index];
		const cardProps = {
			placeholder: true,
			hasFixedAspectRatio: true,
			isLandscape,
			showMedia,
			showMeta,
			showTitle,
			showContent: showDescription,
			showButtons,
		};

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
						<PostCard post={ post } isLandscape={ isLandscape } attributes={ attributes } />
					</div>
				}
				{
					! post &&
					<div className="novablocks-grid__item">
						<Card { ...cardProps } />
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
		<Fragment>
			{
				layoutStyle === 'classic' &&
				<ClassicLayoutPreview { ...props } />
			}
			{
				layoutStyle === 'parametric' &&
				<div className={ classname }>
					<ParametricLayoutPreview
						getContent={ getContent }
						cardsCount={ posts?.length || attributes?.postsToShow || 0 }
						attributes={ attributes }
						setAttributes={ setAttributes }
						posts={ posts }
						isSelected={ isSelected }
					/>
				</div>
			}
		</Fragment>
	)
};

export default Preview;
