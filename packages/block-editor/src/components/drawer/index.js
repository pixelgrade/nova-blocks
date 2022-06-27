import classnames from 'classnames';
import { orderBy } from 'lodash';

import {
	Children,
	cloneElement,
	useEffect,
	useMemo,
	useRef,
	useState,
 } from '@wordpress/element';

import { useMemoryState } from '../../index';

const Drawers = ( ownProps ) => {

  const { children } = ownProps;
	const childrenArray = Children.toArray( children );
	const drawerLists = childrenArray.filter( child => child.type === DrawerList );
	const drawerPanels = childrenArray.filter( child => child.type === DrawerPanel );
  const beforeChildren = children.filter( child => child.type === DrawerListBefore );

	const [ open, setOpen ] = useMemoryState( 'drawerOpen' );
	const [ lastActiveDrawerId, setLastActiveDrawerId ] = useMemoryState( 'drawerActiveId' );
	const [ wrapperHeight, setWrapperHeight ] = useMemoryState( 'drawerHeight', 0 );

	const existingDrawer = useMemo( () => drawerLists.some( drawerList => {
		const drawers = getDrawersFromList( drawerList );
		return drawers.some( drawer => drawer?.props?.id === lastActiveDrawerId );
	} ), [ drawerLists ] );

	useEffect( () => {

    if ( ! existingDrawer ) {
      setOpen( false );
    }

  }, [ existingDrawer ] );

	const ref = useRef( null );
	const [ refMap ] = useState( () => new WeakMap() );

	const noop = () => {};
	const onOpen = typeof ownProps.onOpen === 'function' ? ownProps.onOpen : noop;
	const onClose = typeof ownProps.onClose === 'function' ? ownProps.onClose : noop;

	const getDrawerListHeight = () => {
		return !! ref.current ? ref.current.clientHeight : 0;
	};

	const getActiveDrawerTitleHeight = () => {
	  const drawerPanel = drawerPanels.find( drawerPanel => drawerPanel.props.id === lastActiveDrawerId );
		const activeRef = refMap.get( drawerPanel );
		return !! activeRef ? activeRef.clientHeight : 0;
	};

	const updateHeight = () => {
		const drawerListHeight = getDrawerListHeight();
		const drawerPanelHeight = getActiveDrawerTitleHeight();

		setWrapperHeight( !! open ? drawerPanelHeight : drawerListHeight );
	};

	useEffect( updateHeight, [ open ] );

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
													onOpen();
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
							<div key={ `drawer_panel_${ drawerPanel.props.id }` } className={ className } ref={ ref => ref && refMap.set( drawerPanel, ref ) }>
								<DrawerWithProps { ...drawerPanel.props } isActive={ lastActiveDrawerId === drawerPanel.props.id } goBack={ () => {
									setOpen( false );
									onClose();
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
