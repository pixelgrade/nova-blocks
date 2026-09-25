/**
 * Media Alignment (#627) — where each card's picture sits inside its media
 * box: the part a fixed ratio keeps, or where a shorter picture sits in a
 * Fit to Row box. Uses core's alignment matrix, the same grammar as the
 * toolbar's content position.
 */
import { BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { isMediaAlignRelevant, MEDIA_ALIGN_DEFAULT } from './items-aspect-ratio-options';

const AlignmentMatrixControl = wp.components.AlignmentMatrixControl || wp.components.__experimentalAlignmentMatrixControl;

const MediaAlignControl = ( { attributes, setAttributes } ) => {
  if ( ! AlignmentMatrixControl || ! isMediaAlignRelevant( attributes ) ) {
    return null;
  }

  const value = attributes.mediaAlign || MEDIA_ALIGN_DEFAULT;

  return (
    <BaseControl
      id={ 'novablocks-media-align' }
      label={ __( 'Media Alignment', '__plugin_txtd' ) }
      help={ __( 'Where each picture sits in its box — the part kept when it is cropped, or the free space when it is shown whole.', '__plugin_txtd' ) }
      __nextHasNoMarginBottom
    >
      <div className={ 'nb-media-align-control' } style={ { display: 'flex', alignItems: 'center', gap: '12px' } }>
        <AlignmentMatrixControl
          id={ 'novablocks-media-align' }
          label={ __( 'Media Alignment', '__plugin_txtd' ) }
          value={ value }
          onChange={ ( mediaAlign ) => setAttributes( { mediaAlign } ) }
        />
        { MEDIA_ALIGN_DEFAULT !== value && (
          <Button variant={ 'tertiary' } size={ 'small' } onClick={ () => setAttributes( { mediaAlign: MEDIA_ALIGN_DEFAULT } ) }>
            { __( 'Reset', '__plugin_txtd' ) }
          </Button>
        ) }
      </div>
    </BaseControl>
  );
};

export default MediaAlignControl;
