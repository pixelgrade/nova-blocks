const { __ } = wp.i18n;

const {
	Component,
} = wp.element;

const {
	ServerSideRender,
} = wp.components;

export default class Edit extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			menus: [],
			selectedMenuSlug: null
		}
	}

	componentDidMount() {

		wp.apiRequest( { path: '/menus/v1/menus' } ).then( menus => {
			this.setState( {
				menus,
				selectedMenuSlug: menus[0].slug
			} );
		} );

	}

	render() {
		const {
			attributes: {
				slug
			}
		} = this.props;

		return [
			<ServerSideRender
					block="novablocks/navigation"
					attributes={ this.props.attributes }
				/>
		]
	}
}
