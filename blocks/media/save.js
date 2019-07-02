import classnames from "classnames";

const {
	InnerBlocks
} = wp.blockEditor;

const {
	Component
} = wp.element;

export default class Save extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {

		const {
			attributes: {
				className,
				mediaStyle,
				contentStyle,
				blockStyle,
				mediaPosition,
				images
			}
		} = this.props;

		const settings = wp.data.select( 'core/block-editor' ).getSettings();

		const classNames = classnames(
			className,
			`nova-media`,
			`has-image-on-the-${mediaPosition}`,
			`content-is-${contentStyle}`,
			`grid-is-${mediaStyle}`,
			`alignfull`
		);


		const galleryImages = images.map( ( image ) => JSON.parse( image ) );

		const displayImages = ( images ) => {
			return (
				galleryImages.map( ( image ) => {
					return (
						<div className='nova-media__image'>
							<img alt={image.alt} src={image.url}/>
						</div>
					)
				} )
			)
		};

		return (
			<div className={classNames}>
				<div className={`block-is-${blockStyle} nova-media__inner-container`}>
					<div className="nova-media__layout alignwide">
						<div className="nova-media__content nova-media__inner-container">
							<InnerBlocks.Content/>
						</div>
						<div className="nova-media__aside">
							{displayImages( images )}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
