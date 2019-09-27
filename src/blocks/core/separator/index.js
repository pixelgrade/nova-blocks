import classnames from 'classnames';
import HTMLReactParser from 'html-react-parser';

const {
	Component
} = wp.element;

export const addSeparatorFilters = ( settings ) => {

	const Separator = ( props ) => {
		const className = classnames(
			'wp-block-separator',
			props.className
		);

		return (
			<div className={ className }>
				{ settings.separator && HTMLReactParser( settings.separator.markup ) }
			</div>
		);
	};

	const replaceSeparatorEdit = wp.compose.createHigherOrderComponent( ( BlockEdit ) => {
		return class extends Component {
			render() {
				const props = this.props;

				if ( 'core/separator' === props.name ) {
					return <Separator className={ props.attributes.className } />;
				} else {
					return <BlockEdit { ...props } />;
				}
			}
		}
	}, "replaceSeparatorEdit" );

	const replaceSeparatorSave = ( element, blockType, attributes ) => {
		if ( 'core/separator' !== blockType.name ) {
			return element;
		}

		return null;
	}

	wp.hooks.addFilter( 'editor.BlockEdit', 'nova-theme/separator', replaceSeparatorEdit );
	wp.hooks.addFilter( 'blocks.getSaveElement', 'nova-theme/separator', replaceSeparatorSave );
}
