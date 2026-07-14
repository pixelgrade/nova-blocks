import classnames from 'classnames';
import { orderBy } from 'lodash';

import {
	Children,
	cloneElement,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from '@wordpress/element';

import { useMemoryState } from '../../index';

const Drawers = ( ownProps ) => {

  const { children, scopeKey } = ownProps;
	const childrenArray = Children.toArray( children );
	const drawerLists = childrenArray.filter( child => child.type === DrawerList );
	const drawerPanels = childrenArray.filter( child => child.type === DrawerPanel );
  const beforeChildren = children.filter( child => child.type === DrawerListBefore );

  // Scoped per block-type + inspector tab (Settings vs Styles) so the same
  // block type keeps remembering its open section, without leaking state
  // into a different block type or the other tab.
  const openKey = scopeKey ? `drawerOpen:${ scopeKey }` : 'drawerOpen';
  const activeIdKey = scopeKey ? `drawerActiveId:${ scopeKey }` : 'drawerActiveId';

	const [ open, setOpen ] = useMemoryState( openKey );
	const [ lastActiveDrawerId, setLastActiveDrawerId ] = useMemoryState( activeIdKey );
	// Height is never persisted across selections — always measured fresh on
	// mount, then kept in sync by the ResizeObserver below. Starting from
	// `undefined` (instead of a stale/shared value) avoids a flash of
	// clipped content before the first measurement lands.
	const [ wrapperHeight, setWrapperHeight ] = useState( undefined );

	// Graceful reset: if the remembered active id doesn't exist in the
	// current section list (block type changed, or a section is
	// conditionally absent), fall back to the closed list state instead of
	// rendering an empty panel.
	const existingDrawer = useMemo( () => drawerLists.some( drawerList => {
		const drawers = getDrawersFromList( drawerList );
		return drawers.some( drawer => drawer?.props?.id === lastActiveDrawerId );
	} ), [ drawerLists, lastActiveDrawerId ] );

	useLayoutEffect( () => {

    if ( ! existingDrawer ) {
      setOpen( false );
    }

  }, [ existingDrawer ] );

	const ref = useRef( null );
	const [ activePanelElement, setActivePanelElement ] = useState( null );

	const getDrawerListHeight = () => {
		return !! ref.current ? ref.current.clientHeight : 0;
	};

	const getActiveDrawerPanelHeight = () => {
		return !! activePanelElement ? activePanelElement.clientHeight : 0;
	};

	const updateHeight = () => {
		const drawerListHeight = getDrawerListHeight();
		const drawerPanelHeight = getActiveDrawerPanelHeight();

		// If the drawer is open, the height of the wrapper should be the height of the drawer panel.
		setWrapperHeight( (!!open ? drawerPanelHeight : drawerListHeight) || 'auto' );
	};

	// Track the actual active panel instead of transient React element identities. The panel DOM
	// node usually survives block-selection changes, while its controls and height do not.
	useLayoutEffect( () => {
		updateHeight();

		if ( ! open || ! activePanelElement ) {
			return undefined;
		}

		const observer = new window.ResizeObserver( updateHeight );
		observer.observe( activePanelElement );

		return () => observer.disconnect();
	}, [ open, lastActiveDrawerId, activePanelElement ] );

	// Translate the drawer to the left when the menu button is clicked.
	const transform = open ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)';

	// keep track of number of drawers in previous drawerLists
	let totalDrawers = 0;

	return (
		<div
			className={ `novablocks-drawers` }
			style={ { height: wrapperHeight } }>
			<div
				className={ `novablocks-drawers__wrap` }
				style={ { transform } }>
				<div className={ `novablocks-drawers__front` } ref={ ref }>
					{ beforeChildren }
					{ drawerLists.map( ( drawerList, drawerListIndex ) => {
						const drawers = getDrawersFromList( drawerList );
						const title = drawerList?.props?.title;

						totalDrawers = totalDrawers + drawers.length;

						const orderedDrawers = orderBy( drawers, drawer => drawer.props.order || 100, ['asc'] );

						return (
							<div className={ `novablocks-drawers__list` } key={ `drawer_list_${ drawerListIndex }` }>
								{ title && <div className={ `novablocks-drawers__list-title` }>{ title }</div> }
								{
									orderedDrawers.map( ( orderedDrawer, drawerIndex ) => {
										const { props } = orderedDrawer;
										const { id } = props;

										return (
											<Drawer { ...props }
												key={ `drawer_${ drawerListIndex }-${ drawerIndex }` }
												onClick={ () => {
													setLastActiveDrawerId( id );
													setOpen( true );
												} } />
										)
									} )
								}
							</div>
						)
					} ) }
				</div>
				{
					drawerPanels.map( ( drawerPanel, index ) => {

						const className = classnames(
							'novablocks-drawers__panel',
							{
								'novablocks-drawers__panel--hidden': lastActiveDrawerId !== drawerPanel.props.id
							}
						);

            if ( lastActiveDrawerId !== drawerPanel.props.id ) {
              return null;
            }

						return (
							<div key={ `drawer_panel_${ drawerPanel.props.id }` } className={ className } ref={ setActivePanelElement }>
								<DrawerWithProps { ...drawerPanel.props } isActive={ lastActiveDrawerId === drawerPanel.props.id } goBack={ () => {
									setOpen( false );
								} } updateHeight={ updateHeight } />
							</div>
						)

					} )
				}
			</div>
		</div>
	);
};

const DrawerWithProps = ( props ) => {
	const { goBack, isActive, updateHeight } = props;

	return addPropsToChildren( props.children, {
		goBack,
		isActive,
		updateHeight,
	} );
};

const addPropsToChildren = ( children, props ) => {

	if ( typeof children === "undefined" ) {
		return children;
	}

	if ( Array.isArray( children ) ) {
		return children.map( child => cloneElement( child, props ) )
	}

	return cloneElement( children, props );
};

const getDrawersFromList = ( drawerList ) => {

	const children = drawerList?.props?.children;

	if ( ! Array.isArray( children ) ) {
		return [];
	}

	return children.filter( child => child.type === Drawer );
};

const DrawerList = ( props ) => {
	return (
		<div className={ 'novablocks-drawers__list' }>{ props.children }</div>
	);
};

const DrawerPanel = ( props ) => {
	return props.children;
};

const DrawerListBefore = ( props ) => {
	return props.children;
};

const DrawerListAfter = ( props ) => {
	return props.children;
};

const Drawer = ( props ) => {
	const { title, onClick } = props;

	return (
		<div className={ 'novablocks-drawer' } onClick={ onClick }>{ title }</div>
	)
};

export {
	Drawer,
	Drawers,
	DrawerList,
	DrawerListBefore,
	DrawerListAfter,
	DrawerPanel,
};
