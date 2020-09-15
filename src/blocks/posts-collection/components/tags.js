const { apiFetch } = wp;

const {
	Component,
} = wp.element;

class Tags extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			name: null
		};
	}

	componentDidMount() {
		const { tags } = this.props;

		this.isStillMounted = true;

		const promises = tags.map( id => {
			return apiFetch( {
				path: `/wp/v2/tags/${ id }`,
			} )
		} );

		Promise.all( promises ).then( tags => {
			if ( this.isStillMounted ) {
				this.setState( { name: tags.map( tag => tag.name ).join( ', ' ) } )
			}
		} );
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	render() {
		return this.state.name;
	}
}

export default Tags;
