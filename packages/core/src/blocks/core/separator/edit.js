import classnames from 'classnames';

import { useBlockProps } from "@wordpress/block-editor";

import withControlsVisibility from './with-controls-visibility';

const SeparatorEdit = ( props ) => {

  const { attributes, settings } = props;
  const { align } = attributes;

  const separatorMarkup = settings?.separator?.markup;

  const className = classnames(
    'wp-block-separator',
    `align${ align }`,
    props.className,
  );

  const blockProps = useBlockProps( {
    className: className,
    style: props.style
  } );

  return <div { ...blockProps } dangerouslySetInnerHTML={ { __html: separatorMarkup } } />
};

export default withControlsVisibility( SeparatorEdit );
