import { useBlockProps } from "@wordpress/block-editor";

const Edit = ( props ) => {
  const { attributes, setAttributes } = props;
  const { text } = attributes;
  const blockProps = useBlockProps( {
    className: 'nb-facetwp-filter__item  nb-facetwp-filter__item--title'
  } );

  return (
    <div { ...blockProps }>
      <input type={ "text" } value={ text } onChange={ event => setAttributes( { text: event.target.value } ) } />
    </div>
  )
}

export default Edit;
