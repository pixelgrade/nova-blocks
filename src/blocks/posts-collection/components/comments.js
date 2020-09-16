const { apiFetch } = wp;
const { addQueryArgs } = wp.url;
const { __ } = wp.i18n;

const {
	Component,
} = wp.element;

class Comments extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			name: null
		};
	}

	componentDidMount() {
		const { postId } = this.props;

		this.isStillMounted = true;
		this.fetchRequest = apiFetch( {
			path: addQueryArgs( `/wp/v2/comments`, {
				post: postId
			} )
		} )
		.then( ( comments ) => {
				if ( this.isStillMounted ) {
					const count = comments.length;

					this.setState( {
						name: ! count ? __( 'No Comments' ) : `${ count } Comment${ count > 1 ? 's' : ''}`
					} )
				}
			}
		).catch( () => {} );
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	render() {
		return this.state.name;
	}
}

export default Comments;
