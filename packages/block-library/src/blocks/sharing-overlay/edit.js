import classnames from "classnames";

import { Fragment, useEffect, useRef } from "@wordpress/element";
import { useInnerBlocksProps } from '@wordpress/block-editor';

import { getIconSvg } from "@novablocks/block-editor";
import { library as icons } from '@novablocks/icons';
import { getColorSignalClassnames } from '@novablocks/utils';

import Controls from './controls';
import { createSharingTriggerTemplate } from './template';
import {
  getInlineSharingTriggerIcon,
  getTransitionTime,
  needsSharingTriggerEditorLayout,
  prependSharingTriggerEditorIcon,
} from './trigger';

const sharingTriggerIcon = getInlineSharingTriggerIcon( icons.share );
const editorIconClass = 'novablocks-sharing__trigger-editor-icon';
const editorButtonClass = 'has-novablocks-sharing-trigger-icon';
const editorMeasureClass = 'is-measuring-novablocks-sharing-trigger';

const getButtonClassSignature = button => Array.from( button.classList )
  .filter( className => ! [ editorButtonClass, editorMeasureClass ].includes( className ) )
  .sort()
  .join( ' ' );

const syncEditorIconColor = trigger => {
  const button = trigger?.closest( '.wp-block-button' );
  const icon = button?.querySelector( `:scope > .${ editorIconClass }` );
  const view = trigger?.ownerDocument?.defaultView;
  if ( ! button || ! icon || ! view ) {
    return;
  }

  const color = view.getComputedStyle( trigger ).color;
  if ( button.style.getPropertyValue( '--nb-sharing-trigger-icon-color' ) !== color ) {
    button.style.setProperty( '--nb-sharing-trigger-icon-color', color );
  }
};

const syncEditorIconLayout = ( trigger, force = false ) => {
  const button = trigger?.closest( '.wp-block-button' );
  const view = trigger?.ownerDocument?.defaultView;
  if ( ! button || ! view ) {
    return;
  }

  const classSignature = getButtonClassSignature( button );
  if ( needsSharingTriggerEditorLayout( button, classSignature, force ) ) {
    button.classList.add( editorMeasureClass );
    button.classList.remove( editorButtonClass );
    // Reading layout while transitions are disabled prevents measuring an
    // interpolated padding value when a Button style changes.
    trigger.getBoundingClientRect();
    const triggerStyle = view.getComputedStyle( trigger );
    if ( button.style.getPropertyValue( '--nb-sharing-trigger-padding-inline-start' ) !== triggerStyle.paddingInlineStart ) {
      button.style.setProperty( '--nb-sharing-trigger-padding-inline-start', triggerStyle.paddingInlineStart );
    }
    button.dataset.nbSharingTriggerClasses = classSignature;
    button.classList.add( editorButtonClass );
    button.classList.remove( editorMeasureClass );
  }

  syncEditorIconColor( trigger );
};

const SharingEdit = ( props ) => {

  const {
    isSelected,
    attributes,
  } = props;

  const { buttonLabel } = attributes;
  const triggerRef = useRef();
  const innerBlocksProps = useInnerBlocksProps( {
    className: 'novablocks-sharing__trigger',
    ref: triggerRef,
  }, {
    allowedBlocks: [ 'core/buttons' ],
    template: createSharingTriggerTemplate( buttonLabel ),
    templateLock: 'all',
  } );

  useEffect( () => {
    const triggerWrapper = triggerRef.current;
    if ( ! triggerWrapper ) {
      return undefined;
    }

    const view = triggerWrapper.ownerDocument.defaultView;
    if ( ! view ) {
      return undefined;
    }

    const decorateTrigger = ( forceLayout = false ) => {
      const trigger = triggerWrapper.querySelector( '.wp-block-button__link' );
      prependSharingTriggerEditorIcon( trigger, sharingTriggerIcon );
      syncEditorIconLayout( trigger, forceLayout );
    };

    const cleanupDecoration = () => {
      triggerWrapper.querySelectorAll( `.${ editorIconClass }` ).forEach( icon => icon.remove() );
      triggerWrapper.querySelectorAll( `.${ editorButtonClass }, .${ editorMeasureClass }` ).forEach( button => {
        button.classList.remove( editorButtonClass, editorMeasureClass );
        button.style.removeProperty( '--nb-sharing-trigger-icon-color' );
        button.style.removeProperty( '--nb-sharing-trigger-padding-inline-start' );
        delete button.dataset.nbSharingTriggerClasses;
      } );
    };

    let colorFrame;
    let colorSyncUntil = 0;
    const syncColorFrame = timestamp => {
      const trigger = triggerWrapper.querySelector( '.wp-block-button__link' );
      syncEditorIconColor( trigger );
      if ( timestamp < colorSyncUntil ) {
        colorFrame = view.requestAnimationFrame( syncColorFrame );
      } else {
        colorFrame = undefined;
      }
    };
    const scheduleColorSync = () => {
      const trigger = triggerWrapper.querySelector( '.wp-block-button__link' );
      if ( ! trigger ) {
        return;
      }

      const transitionTime = getTransitionTime( view.getComputedStyle( trigger ) );
      colorSyncUntil = Math.max( colorSyncUntil, view.performance.now() + transitionTime + 32 );
      if ( ! colorFrame ) {
        colorFrame = view.requestAnimationFrame( syncColorFrame );
      }
    };

    decorateTrigger();
    scheduleColorSync();

    const MutationObserver = view.MutationObserver;
    if ( ! MutationObserver ) {
      return cleanupDecoration;
    }

    const observer = new MutationObserver( mutations => {
      const forceLayout = mutations.some( mutation => (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'style' &&
        mutation.target.classList.contains( 'wp-block-button__link' )
      ) );
      decorateTrigger( forceLayout );
      scheduleColorSync();
    } );
    observer.observe( triggerWrapper, {
      attributes: true,
      attributeFilter: [ 'class', 'style' ],
      childList: true,
      subtree: true,
    } );

    [ 'pointerover', 'pointerout', 'focusin', 'focusout' ].forEach( eventName => {
      triggerWrapper.addEventListener( eventName, scheduleColorSync );
    } );

    return () => {
      observer.disconnect();
      view.cancelAnimationFrame( colorFrame );
      [ 'pointerover', 'pointerout', 'focusin', 'focusout' ].forEach( eventName => {
        triggerWrapper.removeEventListener( eventName, scheduleColorSync );
      } );
      cleanupDecoration();
    };
  }, [] );

  return (
    <Fragment>
      <div { ...innerBlocksProps } />
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
    headingLevel
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
          { showSocialIcons && ( showTwitter || showFacebook || showLinkedin || showPinterest || showWhatsapp ) &&
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
