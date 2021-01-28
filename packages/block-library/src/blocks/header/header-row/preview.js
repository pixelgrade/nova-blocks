/**
 * WordPress dependencies
 */
import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies.
 */
const ALLOWED_BLOCKS = [ 'novablocks/logo', 'novablocks/navigation' ];
let TEMPLATE = [
  ['novablocks/navigation',
    {
      className: "site-header__menu site-header__menu--secondary",
      slug: "secondary"
    }
  ],
  ['novablocks/navigation',
    {
      className: "site-header__menu site-header__menu--tertiary",
      slug: "tertiary"
    }
  ]
];



const HeaderRowPreview = function( props ) {
  const {
    attributes: {
      shouldBeSticky,
    },
    clientId,
    setAttributes,
    className,
  } = props;

  const classNames = classnames(
    className,
    {
      'site-header-row--sticky' : shouldBeSticky === true
    }
  );

  const { innerBlocksLength } = useSelect(select => ({
    innerBlocks_length: select("core/block-editor").getBlockCount(clientId)
  }));

  useEffect(() => {
    setAttributes({ innerBlocksLength });
  }, [innerBlocksLength]);

  return (
    <div className={classNames}>
        <InnerBlocks
          allowedBlocks={ALLOWED_BLOCKS}
          template={TEMPLATE}
          renderAppender={false}
        />
    </div>

  );
};

export default HeaderRowPreview;
