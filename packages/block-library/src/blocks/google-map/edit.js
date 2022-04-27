import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { models, loadPromise } from '@wordpress/api';

import {
  Component,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from '@wordpress/element';

import { Spinner } from '@wordpress/components';

import {
  BlockAlignmentToolbar,
  BlockControls,
  useBlockProps,
} from '@wordpress/block-editor';

import { createHigherOrderComponent } from '@wordpress/compose';

import { useDidUpdateEffect } from '@novablocks/block-editor';

import MapPlaceholder from './placeholder';
import Map from './map';
import InspectorControls from './inspector-controls';

const API_KEY_SETTING_ID = 'novablocks_google_maps_api_key';

// This is a GLOBAL function that, when present, gets called by the Google Maps script on authentication errors.
window.gm_authFailure = function() {
  window.googlemaps_authfailure = true;
  window.dispatchEvent( new Event( 'novablock.googlemaps_authfailure' ) );
};

const Edit = props => {
  const { attributes, setAttributes } = props;
  const { align, styleData } = attributes;
  const [ fetchedScript, setFetchedScript ] = useState( false );
  const [ fetchedApiKey, setFetchedApiKey ] = useState( false );
  const [ savedApiKey, setSavedApiKey ] = useState( null );
  const [ apiKey, setApiKey ] = useState( null );

  const blockProps = useBlockProps( {
    className: classnames(
      props.className,
      `align${ align }`
    ),
    style: props.style
  } );

  const initialGmAuthFailure = useMemo( () => {
    return window?.googlemaps_authfailure ?? false;
  }, [] );

  const [ gmAuthFailure, setGmAuthFailure ] = useState( initialGmAuthFailure );
  const onGoogleMapsAuthFailure = useCallback( ( event ) => {
    setGmAuthFailure( true );
  }, [] );

  const settings = useRef( null );

  useDidUpdateEffect(() => {
    const keyParam = savedApiKey !== '' ? `key=${ savedApiKey }&` : '';
    const scriptSrc = `//maps.googleapis.com/maps/api/js?${ keyParam }libraries=places`;
    const scripts = document.querySelectorAll( 'script[src*="maps.googleapis.com"]' );

    if ( scripts.length ) {
      setFetchedScript( true );
      return Promise.resolve();
    }

    const promise = new Promise( ( resolve, reject ) => {
      const script = document.createElement( 'script' );
      script.onload = resolve;
      script.onerror = reject;
      script.async = true;
      script.src = scriptSrc;
      document.body.appendChild( script );
    } );

    return promise.then( () => {
      setFetchedScript( true );
    } );
  }, [ savedApiKey ] );

  useEffect( () => {
    window.addEventListener( 'novablock.googlemaps_authfailure', onGoogleMapsAuthFailure );

    loadPromise.done( () => {
      settings.current = new models.Settings();

      settings.current.on( `change:${ API_KEY_SETTING_ID }`, model => {
        const apiKey = model.get( API_KEY_SETTING_ID );
        setFetchedApiKey( true );
        setSavedApiKey( apiKey );
        setApiKey( apiKey );
      } );

      settings.current.fetch();
    } );

    return ( () => {
      window.removeEventListener( 'novablock.googlemaps_authfailure', onGoogleMapsAuthFailure );
    } )
  }, [] );

  const passedProps = useMemo( () => {
    const passedProps = Object.assign( props );
    if ( typeof styleData === "string" ) {
      passedProps.attributes.styleData = JSON.parse( styleData );
    }
    return passedProps;
  }, [ props ] );

  const onSaveApiKey = ( apiKey ) => {
    const key = new models.Settings( { [ API_KEY_SETTING_ID ]: apiKey } );

    key.save().then( () => {
      setGmAuthFailure( false );
      settings.current.fetch();
    } );
  }

  const instructions = useMemo( () => {
    const url = '//developers.google.com/maps/documentation/javascript/get-api-key';
    const hyperlink = <a target="_blank" href={ url }>{ __( 'register a Google Maps API Key', '__plugin_txtd' ) }</a>;

    if ( gmAuthFailure ) {
      return (
        <Fragment>
          { __( 'It seems that your Google Maps API key is INVALID. Please REFRESH the page, double check that you pasted it correctly, and that it is a valid API key. More information about how to', '__plugin_txtd' ) }
          { hyperlink }
        </Fragment>
      )
    }

    return (
      <Fragment>
        { __( 'To display the map, you need to', '__plugin_txtd' ) }
        { hyperlink }
        { __( 'and include it bellow.', '__plugin_txtd' ) }
      </Fragment>
    )
  }, [ gmAuthFailure ] );

  const showInspectorControls = useMemo( () => {
    return fetchedApiKey && fetchedScript && savedApiKey && ! gmAuthFailure;
  }, [ fetchedApiKey, fetchedScript, savedApiKey, gmAuthFailure ] );

  const showSpinner = useMemo( () => {
    return ! fetchedApiKey;
  }, [ fetchedApiKey ] );

  const showPlaceholder = useMemo( () => {
    return ! showSpinner && ( ! fetchedScript || ! savedApiKey || gmAuthFailure );
  }, [ showSpinner, fetchedScript, savedApiKey, gmAuthFailure ] );

  const showMap = useMemo( () => {
    return ! showSpinner && ! showPlaceholder;
  }, [ showSpinner, showPlaceholder ] );

  return (
    <Fragment>
      <MapBlockControls { ...props } />
      {
        showInspectorControls &&
        <InspectorControls
          { ...passedProps }
          apiKey={ apiKey }
          savedApiKey={ savedApiKey }
          onChangeApiKey={ setApiKey }
          onSaveApiKey={ onSaveApiKey }
          apiKeyInstructions={ instructions }
        />
      }
      <div { ...blockProps }>
        { showSpinner && <Spinner /> }
        { showPlaceholder && <MapPlaceholder
          saveApiKey={ onSaveApiKey }
          apiKey={ savedApiKey }
          apiKeyInstructions={ instructions }
        /> }
        { showMap && <Map { ...props } onChange={ markers => { setAttributes( { markers } ) } } /> }
      </div>
    </Fragment>
  );

}

const MapBlockControls = props => {
  const { attributes, setAttributes } = props;
  return (
    <BlockControls>
      <BlockAlignmentToolbar
        value={ attributes.align }
        onChange={ align => setAttributes( { align } ) }
        controls={ [ 'wide', 'full' ] }
      />
    </BlockControls>
  )
}

const withControlsVisibility = Component => {

  return ( props ) => {

    const { setControlsVisibility } = props;

    useEffect( () => {
      setControlsVisibility( {
        'start-frame-panel': false,
      } );
    }, [] );

    return (
      <Component { ...props } />
    )
  }
}

export default withControlsVisibility( Edit );
