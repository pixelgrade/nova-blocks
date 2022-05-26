import { useBlockProps } from "@wordpress/block-editor";

const Edit = ( props ) => {
  const { attributes } = props;
  const blockProps = useBlockProps( {
    className: 'nb-facetwp-filter__item'
  } );

  return (
    <div { ...blockProps }>
      Selections
    </div>
  )
}

export default Edit;
