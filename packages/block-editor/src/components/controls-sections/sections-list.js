import { kebabCase } from "lodash";
import Cube from "./cube";

import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const SectionsListItem = ( props ) => {

	const {
		label,
		onClick,
	} = props;

	return <div key={ kebabCase( label ) } className={ 'novablocks-sections__button' } onClick={ () => { onClick( label ) } }>{ label }</div>
};

const SectionsList = ( props ) => {

	const {
		activeSectionLabel,
		sections,
		onSectionClick
	} = props;

	const blockSections = sections.filter( section => ! section.props.module );
	const modules = sections.filter( section => !! section.props.module );

	return (
		<div className="novablocks-sections">
			<div className="novablocks-sections__header">
				<div className="novablocks-sections__title">{ __( 'Design Customization', '__plugin_txtd' ) }</div>
				<Cube />
			</div>
			<div className={ 'novablocks-sections__buttons' }>
				{ blockSections.map( ( section, index ) =>
          <SectionsListItem key={ 'block_section_button_' + index } label={ section.props.label } onClick={ onSectionClick } /> )
        }
			</div>
			{
				!! modules.length &&
				<Fragment>
					<div className="novablocks-sections__title">{ __( 'Modules', '__plugin_txtd' ) }</div>
					<div className={ 'novablocks-sections__buttons' }>
						{ modules.map( ( section, index ) =>
              <SectionsListItem key={ 'module_section_button_' + index } label={ section.props.label } onClick={ onSectionClick } /> )
            }
					</div>
				</Fragment>
			}
		</div>
	)
};

export { SectionsList, SectionsListItem };
