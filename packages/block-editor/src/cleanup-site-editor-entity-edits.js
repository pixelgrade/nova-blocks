import { dispatch, select, subscribe } from '@wordpress/data';

const SITE_EDITOR_ENTITY_NAMES = [ 'wp_template', 'wp_template_part' ];

export const isSiteEditor = () => {
  return window.pagenow === 'site-editor' || document.body.classList.contains( 'site-editor-php' );
};

const getContentString = ( content, record ) => {
  if ( typeof content === 'function' ) {
    try {
      return content( record );
    } catch ( error ) {
      try {
        return content();
      } catch ( fallbackError ) {
        return null;
      }
    }
  }

  if ( typeof content === 'string' ) {
    return content;
  }

  if ( typeof content?.raw === 'string' ) {
    return content.raw;
  }

  return null;
};

export const shouldClearSerializedContentEdit = ( record, editedRecord, nonTransientEdits ) => {
  const editKeys = Object.keys( nonTransientEdits || {} );

  if ( editKeys.length !== 1 || editKeys[0] !== 'content' ) {
    return false;
  }

  const persistedContent = getContentString( record?.content, record );
  const editedContent = getContentString( editedRecord?.content, editedRecord );

  return persistedContent !== null && editedContent !== null && persistedContent === editedContent;
};

export const cleanupSiteEditorEntityEdits = () => {
  const core = select( 'core' );

  if ( ! core.__experimentalGetDirtyEntityRecords ) {
    return;
  }

  core.__experimentalGetDirtyEntityRecords().forEach( ( { kind, name, key } ) => {
    if ( kind !== 'postType' || ! SITE_EDITOR_ENTITY_NAMES.includes( name ) ) {
      return;
    }

    const record = core.getEntityRecord( kind, name, key );
    const editedRecord = core.getEditedEntityRecord( kind, name, key );
    const nonTransientEdits = core.getEntityRecordNonTransientEdits( kind, name, key );

    if ( shouldClearSerializedContentEdit( record, editedRecord, nonTransientEdits ) ) {
      dispatch( 'core' ).clearEntityRecordEdits( kind, name, key );
    }
  } );
};

const scheduleCleanup = ( callback ) => {
  if ( window.requestIdleCallback ) {
    window.requestIdleCallback( callback );
    return;
  }

  window.requestAnimationFrame( callback );
};

export const startSiteEditorEntityEditCleanup = () => {
  if ( ! isSiteEditor() ) {
    return;
  }

  let cleanupScheduled = false;

  scheduleCleanup( cleanupSiteEditorEntityEdits );

  subscribe( () => {
    if ( cleanupScheduled ) {
      return;
    }

    cleanupScheduled = true;

    scheduleCleanup( () => {
      cleanupScheduled = false;
      cleanupSiteEditorEntityEdits();
    } );
  } );
};

startSiteEditorEntityEditCleanup();
