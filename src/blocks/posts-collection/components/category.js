const { apiFetch } = wp;

const {
	Component,
} = wp.element;

class Category extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			name: null
		};
	}

	componentDidMount() {
		const { id } = this.props;

		this.isStillMounted = true;
		this.fetchRequest = apiFetch( {
			path: `/wp/v2/categories/${id}`,
		} )
		.then( ( category ) => {
				if ( this.isStillMounted ) {
					this.setState( { name: category.name } )
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

export default Category;