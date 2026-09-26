import classnames from 'classnames';

import { useBlockProps } from "@wordpress/block-editor";

import { useSettings } from "@novablocks/block-editor";

import withControlsVisibility from './with-controls-visibility';
import { getSeparatorRuleStyle } from './rule-style';

const SeparatorEdit = ( props ) => {

  const { attributes } = props;
  const novablocksSettings = useSettings();
  const { align } = attributes;

  const className = classnames(
    'wp-block-separator',
    props.className,
  );

  const blockProps = useBlockProps( {
    className: className,
    style: {
      ...props.style,
      ...getSeparatorRuleStyle( attributes ),
    }
  } );

  return (
    <div { ...blockProps } dangerouslySetInnerHTML={ { __html: novablocksSettings?.separator?.markup } } />
  );
};

export default withControlsVisibility( SeparatorEdit );
