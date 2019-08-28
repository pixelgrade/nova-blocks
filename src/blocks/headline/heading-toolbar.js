/**
 * External dependencies
 */
import { range } from 'lodash';

/**
 * WordPress dependencies
 */
const {
	__,
	sprintf
} = wp.i18n;

const { Component } = wp.element;
const { Toolbar } = wp.components;

class HeadingToolbar extends Component {
	createLevelControl( targetLevel, selectedLevel, onChange ) {
		return {
			icon: 'heading',
			// translators: %s: heading level e.g: "1", "2", "3"
			title: sprintf( __( 'Heading %d' ), targetLevel ),
			isActive: targetLevel === selectedLevel,
			onClick: () => onChange( targetLevel ),
			subscript: String( targetLevel ),
		};
	}

	render() {
		const { minLevel, maxLevel, selectedLevel, onChange } = this.props;
		return (
			<Toolbar controls={ range( minLevel, maxLevel ).map( ( index ) => this.createLevelControl( index, selectedLevel, onChange ) ) } />
		);
	}
}

export default HeadingToolbar;
