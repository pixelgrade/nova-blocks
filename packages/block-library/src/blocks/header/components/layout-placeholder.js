import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import {
	Card,
	CardBody,
	Flex,
	FlexBlock,
	Placeholder,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useCallback } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

import * as icons from '../icons';
import layoutDefinitionsModule from '../layout-definitions';

const { HEADER_LAYOUT_DEFINITIONS } = layoutDefinitionsModule;

const ICONS_BY_NAME = {
  logoLeft: icons.logoLeft,
  logoLeftCenterRight: icons.logoLeftCenterRight,
  logoCenter: icons.logoCenter,
  logoCenterTwoRows: icons.logoCenterTwoRows,
  logoCenterThreeRows: icons.logoCenterThreeRows,
};

const EDITOR_FONT_FAMILY = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const HeaderLayoutPlaceholder = ( { clientId, name, setAttributes } ) => {
  const blockType = useSelect(
    ( select ) => select( 'core/blocks' ).getBlockType( name ),
    [ name ]
  );
  const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

  const onSelect = useCallback( ( definition ) => {
    setAttributes( definition.attributes );
    replaceInnerBlocks(
      clientId,
      createBlocksFromInnerBlocksTemplate( definition.innerBlocks )
    );
  }, [ clientId, replaceInnerBlocks, setAttributes ] );

	const onCardKeyDown = useCallback( ( event, definition ) => {
		if ( event.key !== 'Enter' && event.key !== ' ' ) {
			return;
		}

		event.preventDefault();
		onSelect( definition );
	}, [ onSelect ] );

	return (
		<Placeholder
			className="nb-header-layout-placeholder"
			label={ __( 'Choose a header layout', '__plugin_txtd' ) }
			instructions={ __(
				'Start with one of these header structures. You can customize the content and styling after insertion.',
				'__plugin_txtd'
			) }
			style={ { fontFamily: EDITOR_FONT_FAMILY } }
		>
			<div
				className="nb-header-layout-placeholder__grid"
				role="list"
				aria-label={ __( 'Header layout options', '__plugin_txtd' ) }
			>
				{ HEADER_LAYOUT_DEFINITIONS.map( ( definition ) => (
					<div key={ definition.name } role="listitem">
					<Card
						className="nb-header-layout-placeholder__card"
						size="small"
						role="button"
						tabIndex={ 0 }
						onClick={ () => onSelect( definition ) }
						onKeyDown={ ( event ) => onCardKeyDown( event, definition ) }
						aria-label={ sprintf(
							/* translators: %s: header layout title. */
							__( 'Use %s layout', '__plugin_txtd' ),
							definition.title
						) }
					>
						<CardBody className="nb-header-layout-placeholder__card-body">
							<Flex
								align="flex-start"
								gap={ 4 }
								justify="flex-start"
							>
								<div
									className="nb-header-layout-placeholder__icon"
									aria-hidden="true"
								>
									{ ICONS_BY_NAME[ definition.icon ] }
								</div>
								<FlexBlock>
									<VStack spacing={ 2 }>
										<div className="nb-header-layout-placeholder__title">
											{ definition.title }
										</div>
										<div className="nb-header-layout-placeholder__description">
											{ definition.description }
										</div>
									</VStack>
								</FlexBlock>
							</Flex>
						</CardBody>
					</Card>
					</div>
				) ) }
			</div>
		</Placeholder>
	);
};

export default HeaderLayoutPlaceholder;
