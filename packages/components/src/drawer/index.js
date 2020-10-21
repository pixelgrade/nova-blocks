import { useSpring, animated } from 'react-spring';
import { orderBy } from 'lodash';
import classnames from 'classnames';
import { useMemoryState, useResizeObserver } from '@novablocks/utils';

import {
	Children,
	cloneElement,
	useEffect,
	useRef,
	useState,
 } from '@wordpress/element';

const Drawers = ( ownProps ) => {

	const children = Children.toArray( ownProps.children );

	const drawerLists = children.filter( child => child.type === DrawerList );
	const drawerPanels = children.filter( child => child.type === DrawerPanel );
	const beforeChildren = children.filter( child => child.type === DrawerListBefore );
	const afterChildren = children.filter( child => child.type === DrawerListAfter );

	let [ active, setActive ] = useState( false );
	let [ open, setOpen ] = useMemoryState( 'drawerOpen', false );
	const [ lastActiveDrawerTitle, setLastActiveDrawerTitle ] = useMemoryState( 'drawerActiveTitle',false );
	const [ wrapperHeight, setWrapperHeight ] = useMemoryState( 'drawerHeight', 0 );

	const existingDrawer = drawerLists.some( drawerList => {
		const drawers = getDrawersFromList( drawerList );
		return drawers.some( drawer => drawer?.props?.title === lastActiveDrawerTitle );
	} );

	if ( existingDrawer ) {
		let index = 0;

		drawerLists.some( drawerList => {
			const drawers = getDrawersFromList( drawerList );
			const drawerIndex = drawers.findIndex( drawer => drawer?.props?.title === lastActiveDrawerTitle );

			if ( drawerIndex > -1 ) {
				index += drawerIndex;
			} else {
				index += drawers.length;
			}

			return drawerIndex > -1;
		} );

		active = index;
	} else {
		open = false;
	}

	const ref = useRef( null );
	const [ refMap ] = useState( () => new WeakMap() );

	const noop = () => {};
	const onOpen = typeof ownProps.onOpen === 'function' ? ownProps.onOpen : noop;
	const onClose = typeof ownProps.onClose === 'function' ? ownProps.onClose : noop;

	const getDrawerListHeight = () => {
		return !! ref.current ? ref.current.clientHeight : 0;
	};

	const getActiveDrawerTitleHeight = () => {
		const activeRef = refMap.get( drawerPanels[active] );
		return !! activeRef ? activeRef.clientHeight : 0;
	};

	const updateHeight = () => {
		const drawerListHeight = getDrawerListHeight();
		const drawerPanelHeight = getActiveDrawerTitleHeight();

		setWrapperHeight( !! open ? drawerPanelHeight : drawerListHeight );
	};

	const { height, transform } = useSpring({
		transform: open ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)',
		height: wrapperHeight,
		// avoid height animation on first render
		immediate: ! open && false === active
	} );

	useEffect( () => {
		updateHeight();
	}, [ open, active ] );

	// keep track of number of drawers in previous drawerLists
	let totalDrawers = 0;

	return (
		<animated.div
			className={ `novablocks-drawers` }
			style={ { height } }>
			<animated.div
				className={ `novablocks-drawers__wrap` }
				style={ { transform } }>
				<div className={ `novablocks-drawers__front` } ref={ ref }>
					{ beforeChildren }
					{ drawerLists.map( ( drawerList, drawerListIndex ) => {
						const drawers = getDrawersFromList( drawerList );
						const title = drawerList?.props?.title;
						totalDrawers = totalDrawers + drawers.length;

						const drawersWithTarget = drawers.map( ( drawer, index ) => {
							const defaultTarget = totalDrawers - drawers.length + index;
							const target = Number.isInteger( drawer.props?.target ) ? drawer.props.target : defaultTarget;

							return {
								...drawer,
								target,
							}
						} );

						const orderedDrawers = orderBy( drawersWithTarget, drawer => drawer.props.priority || 0, ['desc'] );

						return (
							<div className={ `novablocks-drawers__list` } key={ `drawer-list-${ drawerListIndex }` }>
								{ title && <div className={ `novablocks-drawers__list-title` }>{ title }</div> }
								{
									orderedDrawers.map( ( orderedDrawer, drawerIndex ) => {
										const { props, target } = orderedDrawer;
										const { title } = props;

										return (
											<Drawer { ...props }
												key={ `drawer-${ drawerListIndex }-${ drawerIndex }` }
												onClick={ () => {
													setActive( target );
													setLastActiveDrawerTitle( title );
													setOpen( true );
													onOpen();
												} } />
										)
									} )
								}
							</div>
						)
					} ) }
					{ afterChildren.map( ( afterChild, index ) => {
						const [ childRef, { contentRect } ] = useResizeObserver();

						useEffect( updateHeight, [ contentRect?.height ] );

						return (
							<div ref={ childRef } key={ `drawer-list-after-child-${ index }` }>
								{ afterChild }
							</div>
						)
					} ) }
				</div>
				{
					drawerPanels.map( ( drawerPanel, index ) => {

						const className = classnames(
							'novablocks-drawers__panel',
							{
								'novablocks-drawers__panel--hidden': index !== active
							}
						);

						return (
							<div key={ `drawer-panel-${ index }` } className={ className } ref={ ref => ref && refMap.set( drawerPanel, ref ) }>
								<DrawerWithProps { ...drawerPanel.props } isActive={ index === active } goBack={ () => {
									setOpen( false );
									onClose();
								} } updateHeight={ updateHeight } />
							</div>
						)

					} )
				}
			</animated.div>
		</animated.div>
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
