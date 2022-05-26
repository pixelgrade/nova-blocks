import { useBlockProps } from "@wordpress/block-editor";

const Edit = ( props ) => {
  const { attributes } = props;
  const blockProps = useBlockProps( {
    className: 'nb-facetwp-filter__item'
  } );

  return (
    <div { ...blockProps }>
      Toggle
    </div>
  )
}

export default Edit;
