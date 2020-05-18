import { useSpring, animated } from 'react-spring';

const {
	Children,
	Fragment,
	cloneElement,
	useEffect,
	useRef,
	useState,
} = wp.element;

const Drawers = ( ownProps ) => {

	const children = Children.toArray( ownProps.children );

	const drawerLists = children.filter( child => child.type === DrawerList );
	const drawerPanels = children.filter( child => child.type === DrawerPanel );
	const otherChildren = children.filter( child => child.type !== DrawerList && child.type !== DrawerPanel);

	const [ active, setActive ] = useState( false );
	const [ open, setOpen ] = useState( false );

	const [ wrapperHeight, setWrapperHeight ] = useState(0);

	const ref = useRef( null );
	const [ refMap ] = useState( () => new WeakMap() );

	const getDrawerListHeight = () => {
		return !! ref.current ? ref.current.clientHeight : 0;
	}

	const getActiveDrawerHeight = () => {
		const activeRef = refMap.get( drawerPanels[active] );
		return !! activeRef ? activeRef.clientHeight : 0;
	}

	const updateHeight = () => {
		const drawerListHeight = getDrawerListHeight();
		const drawerPanelHeight = getActiveDrawerHeight();

		setWrapperHeight( !! open ? drawerPanelHeight : drawerListHeight );
	}

	const { height, transform } = useSpring({
		transform: open ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)',
		height: wrapperHeight
	} );

	useEffect( () => {
		updateHeight();
	}, [ open, active ] );

	return (
		<animated.div
			className={ `novablocks-drawers` }
			style={ { height } }>
			<animated.div
				className={ `novablocks-drawers__wrap` }
				style={ { transform } }>
				<div className={ `novablocks-drawers__front` } ref={ ref }>
					{ otherChildren }
					{ drawerLists.map( drawerList => {
						const drawers = getDrawersFromList( drawerList );
						const title = drawerList?.props?.title;

						return (
							<div className={ `novablocks-drawers__list` }>
								{ title && <div className={ `novablocks-drawers__list-title` }>{ title }</div> }
								{ drawers.map( ( drawer, index ) => {
									return (
										<Drawer { ...drawer.props }
											onClick={ () => {
												const target = Number.isInteger( drawer.props?.target ) ? drawer.props.target : index;
												setActive( target );
												setOpen( true );

												if ( typeof drawer.props.onOpen === "function" ) {
													drawer.props.onOpen();
												}
											} } />
									)
								} ) }
							</div>
						)
					} ) }
					{ drawerPanels.map( ( drawerPanel, index ) => {
						return (
							<div className={ `novablocks-drawers__panel` } hidden={ index !== active } ref={ ref => ref && refMap.set( drawerPanel, ref ) }>
								<DrawerWithProps { ...drawerPanel.props } goBack={ () => { setOpen( false ) } } updateHeight={ updateHeight } />
							</div>
						)
					} ) }
				</div>
			</animated.div>
		</animated.div>
	);
}

const DrawerWithProps = ( props ) => {
	const { goBack, isActive, updateHeight } = props;

	return addPropsToChildren( props.children, {
		goBack,
		isActive,
		updateHeight,
	} );
}

const addPropsToChildren = ( children, props ) => {

	if ( typeof children === "undefined" ) {
		return children;
	}

	if ( Array.isArray( children ) ) {
		return children.map( child => cloneElement( child, props ) )
	}

	return cloneElement( children, props );
}

const getDrawersFromList = ( drawerList ) => {

	const children = drawerList?.props?.children;

	if ( ! Array.isArray( children ) ) {
		return [];
	}

	return children.filter( child => child.type === Drawer );
}

const DrawerList = ( props ) => {
	return (
		<div className={ 'novablocks-drawers__list' }>{ props.children }</div>
	);
}

const DrawerPanel = ( props ) => {
	return props.children;
}

const Drawer = ( props ) => {
	const { title, onClick } = props;

	return (
		<div className={ 'novablocks-drawer' } onClick={ onClick }>{ title }</div>
	)
}

export { Drawer, Drawers, DrawerList, DrawerPanel };
