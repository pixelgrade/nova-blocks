import {
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	RangeControl,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { store as coreDataStore } from '@wordpress/core-data';
import { useDispatch, useSelect } from '@wordpress/data';
import { Fragment, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const SiteTitleFitTextContentSync = ( {
	fitTextContentRevision,
	setAttributes,
} ) => {
	const siteTitle = useSelect( ( select ) => (
		select( coreDataStore ).getEditedEntityRecord( 'root', 'site' )?.title ?? ''
	), [] );
	const {
		__unstableMarkNextChangeAsNotPersistent,
	} = useDispatch( blockEditorStore );

	useEffect( () => {
		if ( fitTextContentRevision === siteTitle ) {
			return;
		}

		// Core Fit Text reacts to block attributes, while Site Title stores its
		// text in the global site entity. Mirror only a local revision so core's
		// own fitting algorithm recalculates without changing saved markup or
		// adding an undo level.
		__unstableMarkNextChangeAsNotPersistent();
		setAttributes( { fitTextContentRevision: siteTitle } );
	}, [
		fitTextContentRevision,
		setAttributes,
		siteTitle,
		__unstableMarkNextChangeAsNotPersistent,
	] );

	return null;
};

const SiteTitleWidthControl = ( {
	clientId,
	fitTextWidth,
	setAttributes,
} ) => {
	const isInsideSiteIdentity = useSelect( ( select ) => {
		const blockEditor = select( 'core/block-editor' );
		const parentId = blockEditor.getBlockRootClientId( clientId );

		return blockEditor.getBlockName( parentId ) === 'novablocks/site-identity';
	}, [ clientId ] );

	if ( isInsideSiteIdentity ) {
		return null;
	}

	return (
		<InspectorControls group="dimensions">
			<ToolsPanelItem
				label={ __( 'Wordmark Width', '__plugin_txtd' ) }
				isShownByDefault
				hasValue={ () => fitTextWidth !== 395 }
				onDeselect={ () => setAttributes( { fitTextWidth: 395 } ) }
				resetAllFilter={ () => ( { fitTextWidth: 395 } ) }
				panelId={ clientId }
			>
				<RangeControl
					label={ __( 'Wordmark Width', '__plugin_txtd' ) }
					help={ __( 'Sets the maximum width used by Fit Text.', '__plugin_txtd' ) }
					value={ fitTextWidth }
					min={ 80 }
					max={ 800 }
					step={ 5 }
					onChange={ ( value ) => setAttributes( { fitTextWidth: value } ) }
				/>
			</ToolsPanelItem>
		</InspectorControls>
	);
};

export const withSiteTitleControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { attributes, clientId, name, setAttributes } = props;
		const {
			fitText,
			fitTextContentRevision,
			fitTextWidth = 395,
		} = attributes;

		if ( name !== 'core/site-title' || ! fitText ) {
			return <BlockEdit { ...props } />;
		}

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<SiteTitleFitTextContentSync
					fitTextContentRevision={ fitTextContentRevision }
					setAttributes={ setAttributes }
				/>
				<SiteTitleWidthControl
					clientId={ clientId }
					fitTextWidth={ fitTextWidth }
					setAttributes={ setAttributes }
				/>
			</Fragment>
		);
	};
}, 'withSiteTitleControls' );
