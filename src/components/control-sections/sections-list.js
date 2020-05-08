import { kebabCase } from "lodash";
import Cube from "./cube";

const { Fragment } = wp.element;
const { __ } = wp.i18n;

const SectionsListItem = ( props ) => {
	const {
		label,
		onClick,
	} = props;

	return <div key={ kebabCase( label ) } className={ 'novablocks-sections__button' } onClick={ () => { onClick( label ) } }>{ label }</div>
}

const SectionsList = ( props ) => {

	const {
		activeSectionLabel,
		sections,
		onSectionClick
	} = props;

	const active = sections.find( section => section.props.label === activeSectionLabel );

	const blockSections = sections.filter( section => ! section.props.module );
	const modules = sections.filter( section => !! section.props.module );

	if ( !! active ) {
		return false;
	}

	return (
		<div className="novablocks-sections">
			<div className="novablocks-sections__header">
				<div className="novablocks-sections__title">{ __( 'Design Customization' ) }</div>
				<Cube />
			</div>
			<div className={ 'novablocks-sections__buttons' }>
				{ blockSections.map( ( section, index ) => <SectionsListItem key={ index } label={ section.props.label } onClick={ onSectionClick } /> ) }
			</div>
			{
				!! modules.length &&
				<Fragment>
					<div className="novablocks-sections__title">{ __( 'Modules' ) }</div>
					<div className={ 'novablocks-sections__buttons' }>
						{ modules.map( ( section, index ) => <SectionsListItem key={ index } label={ section.props.label } onClick={ onSectionClick } /> ) }
					</div>
				</Fragment>
			}
		</div>
	)
}

export { SectionsList, SectionsListItem };
