import {
	ControlsGroup,
	ControlsSection,
	ControlsTab,
	RuleControls,
} from '@novablocks/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { hasSeparatorRuleWeight } from './rule-style';

export const withSeparatorRuleControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { attributes, clientId, name, setAttributes } = props;

		if ( 'core/separator' !== name || ! hasSeparatorRuleWeight( attributes.className ) ) {
			return <BlockEdit { ...props } />;
		}

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<ControlsSection id={ 'separator-rule' } label={ __( 'Rule', '__plugin_txtd' ) } placement={ 'settings' }>
					<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
						<ControlsGroup>
							<RuleControls
								clientId={ clientId }
								ruleWeight={ attributes.ruleWeight }
								hasStrength={ false }
								setAttributes={ setAttributes }
							/>
						</ControlsGroup>
					</ControlsTab>
				</ControlsSection>
			</Fragment>
		);
	};
}, 'withSeparatorRuleControls' );
