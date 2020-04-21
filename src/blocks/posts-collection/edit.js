import classnames from 'classnames';

import {
	some,
	pickBy,
	isUndefined,
} from "lodash";

const {
	compose
} = wp.compose;

import {CardsManagerPanel, withPosts} from '../../components';
import * as icons from "../../icons";

const {
	BlockIcon,
	RichText,
	InspectorControls,
} = wp.blockEditor;

const { __ } = wp.i18n;

const {
	__experimentalGetSettings,
	dateI18n,
	format
} = wp.date;

const {
	withSelect
} = wp.data;

const {
	Placeholder,
	Spinner
} = wp.components;

const {
	Component,
	Fragment,
	RawHTML
} = wp.element;

class PostsEdit extends Component {

	render() {

		const {
			attributes,
			setAttributes,
			className,
			posts,
		} = this.props;

		console.log( posts );

		const hasPosts = Array.isArray( posts ) && posts.length;

		return (
			<Fragment>
				<InspectorControls>
					<CardsManagerPanel
						label={ __( 'Cards Manager', '__plugin_txtd' ) }
						onChange={ ( attributes ) => { setAttributes( attributes ) } }
						{ ...this.props }
					/>
				</InspectorControls>
				<div className={ "novablocks-collection" }>
					<div className={ "novablocks-collection__layout" }>
						<div className="block-editor-inner-blocks">
							<div className="block-editor-block-list__layout">
								{
									!! posts && posts.map( ( post, idx ) => {
										console.log( post );
										return (
											<div className={ `novablocks-card novablocks-card__inner-container novablocks-block__content` } key={ idx }>
												<div className="novablocks-card__media-wrap">
													<div className="novablocks-card__media">
														<div className="novablocks-card__media-placeholder">{ icons.placeholder }</div>
													</div>
												</div>
												<div className="novablocks-card__meta"></div>
												<div className="novablocks-card__title">{ post.title.raw }</div>
												<div className="novablocks-card__subtitle"></div>
												<div className="novablocks-card__description">{ post.excerpt.raw }</div>
												<div className="novablocks-card__buttons"></div>
											</div>
										);

									} )
								}
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default withPosts( PostsEdit );
