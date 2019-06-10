import classnames from "classnames";

const { __ } = wp.i18n;

const { InnerBlocks } = wp.blockEditor;

const {
	Component
} = wp.element;

export default class Save extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			isCroppedImage,
			contentStyle
		} = attributes;

		const cardImage = (src, alt) => {
			if( !src ) return null;

			if( alt ) {
				return (
					<img
						src={ src }
						alt={ alt }
					/>
				);
			}

			// No alt set, so let's hide it from screen readers
			return (
				<img
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		return (
			<div className="nova-media">
				<div className={ classnames(
					'nova-media__image', {
						'nova-media__image--full': isCroppedImage,
					}
				) } >
					{ cardImage(attributes.imageUrl, attributes.imageAlt) }
				</div>
				<div className="nova-media--content">
					<InnerBlocks.Content/>
				</div>
			</div>
		);
	}
}
