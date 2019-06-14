import classnames from "classnames";

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
			className,
			isSelected,
		} = this.props;

		const {
			mediaStyle,
			contentStyle,
			blockStyle,
			mediaPosition
		} = attributes;

		const classNames = classnames(className, {
			'has-image-on-the-right': 'right' === mediaPosition,
			'content-is-moderate': 'moderate' === contentStyle,
			'content-is-highlighted': 'highlighted' === contentStyle,
			'block-is-moderate': 'moderate' === blockStyle,
			'block-is-highlighted': 'highlighted' === blockStyle,
			'is-simple-grid': 'simple-grid' === mediaStyle,
			'is-selected': isSelected,
		});

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

			return (
				<img
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		return <div className = { classNames } >
			<div className="nova-media">
				<div className="nova-media__image" >
					{ cardImage(attributes.imageUrl, attributes.imageAlt) }
				</div>
				<div className="nova-media__content">
					<InnerBlocks.Content/>
				</div>
			</div>
		</div>
	}
}
