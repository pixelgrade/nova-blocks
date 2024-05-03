/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl } from '@wordpress/components';
import { Fragment, useState } from "@wordpress/element";
import { ControlsGroup, ControlsSection, ControlsTab } from "@novablocks/block-editor";
import { useEffect } from '@wordpress/element'; // Import useEffect

const PostCommentsInspectorControls = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    hasUserExperience: hasUserExperienceAttribute = true
  } = attributes;

  const [hasUserExperience, setHasUserExperience] = useState(hasUserExperienceAttribute);

  useEffect(() => {
    setHasUserExperience(hasUserExperienceAttribute);
  }, [hasUserExperienceAttribute]);

  return (
    <Fragment>
      <ControlsSection
        id={ 'layout' }
        order={ 10 }
        label={ __( 'Elements Visibility', '__plugin_txtd' ) }
        group={ __( 'Block Anatomy', '__plugin_txtd' ) }
        key={ 'post_comments' }>
        <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
          <ControlsGroup>

          <ToggleControl
                label="User Background or Experience"
                help={
                    hasUserExperience
                        ? 'Display user background field.'
                        : 'Hide the user background field.'
                }
                checked={ hasUserExperience }
                onChange={() => {
                    setHasUserExperience(!hasUserExperience);
                    setAttributes({
                        ...attributes,
                        hasUserExperience: !hasUserExperience,
                    });
                }}
            />

    
          </ControlsGroup>
        </ControlsTab>
      </ControlsSection>
    </Fragment>
  );
};

export default PostCommentsInspectorControls;
