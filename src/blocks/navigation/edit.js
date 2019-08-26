const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	Placeholder,
	SelectControl,
	Spinner,
	ServerSideRender,
	Button,
	Toolbar,
	IconButton,
} = wp.components;

const {
	BlockControls
} = wp.blockEditor;

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

	renderNavigationPlaceholder() {
		const {
			attributes: {
				slug
			},
			setAttributes
		} = this.props;

		const selectOptions = this.state.menus.map( menu => {
			return {
				label: menu.name,
				value: menu.slug
			}
		} );

		const selectedMenuSlug = this.state.selectedMenuSlug;

		return (
			<Placeholder
				icon='menu'
				label={ __( 'Choose Menu' ) }
				instructions={ __( 'Select one of the menus listed below or go to Appearance → Settings and create a new one.') }
			>
				<form>
					<SelectControl
						value={ selectedMenuSlug }
						options={ selectOptions }
						onChange={ selectedMenuSlug => { this.setState( { selectedMenuSlug } ) } }
						className={ 'components-placeholder__input' }
					/>
					<Button
						type="button"
						onClick={ () => { setAttributes( { slug: selectedMenuSlug } ) } }
						isDefault
					>
						{ __( 'Apply' ) }
					</Button>
				</form>
			</Placeholder>
		)
	}

	render() {
		const {
			attributes: {
				slug
			},
			setAttributes
		} = this.props;

		return [
			<BlockControls>
				<Toolbar>
					<IconButton
						className="components-icon-button components-toolbar__control"
						label={ __( 'Change Menu' ) }
						onClick={ () => setAttributes( { slug: null } ) }
						icon="edit"
					/>
				</Toolbar>
			</BlockControls>,
			!! slug ? <ServerSideRender
					block="novablocks/navigation"
					attributes={ this.props.attributes }
				/> : this.state.menus.length ? this.renderNavigationPlaceholder() : <Spinner />
		]
	}
}
