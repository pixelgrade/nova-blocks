import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import ContentEditable from "react-contenteditable";

const Edit = ( props ) => {
  const { attributes, setAttributes } = props;
  const { text } = attributes;
  const blockProps = useBlockProps( {
    className: 'nb-facetwp-filter__item  nb-facetwp-filter__item--title'
  } );

  return (
    <div { ...blockProps }>
      <div className="nb-facetwp-filter__item-text">
        <ContentEditable html={ text } className="nb-facetwp-filter__item-label" onChange={ event => setAttributes( { text: event.target.value } ) } />
        <span className="nb-facetwp-filter__item-type">{ __( 'title', '__plugin_txtd') }</span>
      </div>
    </div>
  )
}

export default Edit;
