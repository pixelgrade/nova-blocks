import {
	ControlsGroup,
	ControlsSection,
	ControlsTab,
	RuleControls,
} from '@novablocks/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export const withSiteTaglineControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { attributes, name, setAttributes } = props;
		const hasRuledLabel = ( attributes.className || '' ).split( /\s+/ ).includes( 'is-style-ruled-label' );

		if ( 'core/site-tagline' !== name || ! hasRuledLabel ) {
			return <BlockEdit { ...props } />;
		}

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<ControlsSection id={ 'site-tagline-rule' } label={ __( 'Rule', '__plugin_txtd' ) } placement={ 'settings' }>
					<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
						<ControlsGroup>
							<RuleControls
								ruleWeight={ attributes.ruleWeight }
								ruleStrength={ attributes.ruleStrength }
								setAttributes={ setAttributes }
							/>
						</ControlsGroup>
					</ControlsTab>
				</ControlsSection>
			</Fragment>
		);
	};
}, 'withSiteTaglineControls' );
