import { getPreviewAttributes } from '../../utils';

const withPreviewAttributes = WrappedComponent => {
  return props => {
    return (
      <WrappedComponent { ...props } attributes={ getPreviewAttributes( props.attributes ) } />
    );
  }
}

export default withPreviewAttributes;
