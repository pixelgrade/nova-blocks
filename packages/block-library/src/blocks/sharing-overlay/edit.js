import classnames from "classnames";

import { Fragment } from "@wordpress/element";

import { getIconSvg } from "@novablocks/block-editor";
import { getColorSignalClassnames } from '@novablocks/utils';

import Controls from './controls';

const SharingEdit = ( props ) => {

  const {
    isSelected,
  } = props;

  return (
    <Fragment>
      <div className="wp-block-buttons">
        <div className="wp-block-button">
          <button className="wp-block-button__link">View sharing options</button>
        </div>
      </div>
      { isSelected && <SharingOverlayPreview { ...props } /> }
      <Controls { ...props } />
    </Fragment>
  )
};

const SharingOverlayPreview = ( props ) => {

  const { attributes } = props;

  const {
    showCopy,
    showSharePrivately,
    showSocialIcons,
    showShareInPerson,
    showTwitter,
    showFacebook,
    showLinkedin,
    showPinterest,
    showWhatsapp,
    headingLevel,
    buttonLabel
  } = attributes;

  const classNames = classnames(
    'novablocks-sharing__wrap',
    getColorSignalClassnames( attributes, true )
  );

  const TitleTag = `h${ headingLevel }`;

  return (
    <div className={ classNames }>
      <div className="novablocks-sharing__container">
        <div className="novablocks-sharing__content">
          <TitleTag className="novablocks-sharing__title">Sharing Options</TitleTag>
          { showCopy && <SharingItemsGroup title={ 'Use a link for everything' } description={ 'Copy link and paste it anywhere you want it' }>
            <input className="novablocks-sharing__copy-input" type="text" value="http://rosa2.work/reservations/" readOnly="" />
            <div className="novablocks-sharing__list">
              <SharingButton icon={ 'link' } label={ 'Copy link to clipboard' } />
            </div>
          </SharingItemsGroup> }
          { showSharePrivately && <SharingItemsGroup title={ 'Share privately with friends' }>
            <div className="novablocks-sharing__list">
              <SharingButton icon={ 'email' } label={ 'Email' } />
            </div>
          </SharingItemsGroup> }
          { showSocialIcons && ( showTwitter || showFacebook || showLinkedin ) &&
            <SharingItemsGroup title={ 'Share publicly on social networks' }>
              <div className="novablocks-sharing__list">
                { showTwitter && <SharingButton icon={ 'twitter' } label={ 'Twitter' } /> }
                { showFacebook && <SharingButton icon={ 'facebook' } label={ 'Facebook' } /> }
                { showLinkedin && <SharingButton icon={ 'linkedin' } label={ 'Linkedin' } /> }
                { showPinterest && <SharingButton icon={ 'share' } label={ 'Pinterest' } /> }
                { showWhatsapp && <SharingButton icon={ 'whatsapp' } label={ 'WhatsApp' } /> }
              </div>
            </SharingItemsGroup>
          }
          { showShareInPerson && <SharingItemsGroup title={ 'Or maybe you want in person?' }>
            <div className="novablocks-sharing__list">
              <SharingButton icon={ 'printer' } label={ 'Print' } />
            </div>
          </SharingItemsGroup> }
          <div className="novablocks-sharing__footer">Thanks for spreading the word!</div>
        </div>
      </div>
      <div className="novablocks-sharing__close">
        { getIconSvg( 'cancel' ) }
      </div>
    </div>
  )
};

const SharingItemsGroup = ( props ) => {

  const {
    title,
    description,
    children
  } = props;

  return (
    <div className="novablocks-sharing__group novablocks-sharing__group--public">
      { title &&
        <h5 className="novablocks-sharing__group-title">{ title }</h5>
      }
      { description &&
        <div className="novablocks-sharing__group-description">{ description }</div>
      }
      { children &&
        <div className="novablocks-sharing__group-content">
          { children }
        </div>
      }
    </div>
  );
};

const SharingButton = ( props ) => {

  const {
    icon,
    label,
  } = props;

  return (
    <div className="novablocks-sharing__list-item">
      <a className="novablocks-sharing__link" href="#">
        <div className="novablocks-sharing__link-icon">
          { getIconSvg( icon ) }
        </div>
        <div className="novablocks-sharing__link-label">{ label }</div>
      </a>
    </div>
  )
};

export default SharingEdit;
