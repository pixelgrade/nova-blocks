import { Spring, animated } from 'react-spring/renderprops';
import { useTransition } from 'react-spring';

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

	const drawerList = children.filter( child => child.type === DrawerList );
	const drawers = getDrawersFromList( drawerList );
	const drawerPanels = children.filter( child => child.type === DrawerPanel );
	const otherChildren = children.filter( child => child.type !== DrawerList && child.type !== DrawerPanel);

	if ( ! drawers.length ) {
		return null;
	}

	const [ active, setActive ] = useState( false );
	const [ open, setOpen ] = useState( false );

	const [ height, setHeight ] = useState(0);

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

		setHeight( !! open ? drawerPanelHeight : drawerListHeight );
	}

	useEffect( updateHeight );

	return (
		<Spring from={ { progress: 0, height: getDrawerListHeight() } } to={ { progress: open ? 1 : 0, height: height } }>
			{ ( { progress, height } ) => {
				return (
					<animated.div
						className={ `novablocks-drawers` }
						style={ { height: height } }>
						<animated.div
							className={ `novablocks-drawers__wrap` }
							style={ { transform: `translateX(-${ progress * 100 }%)` } }>
							<div className={ `novablocks-drawers__front` } ref={ ref }>
								{ otherChildren }
								<div className={ `novablocks-drawers__list` }>
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
									{ drawerPanels.map( ( drawerPanel, index ) => {
										return (
											<div className={ `novablocks-drawers__panel` } hidden={ index !== active } ref={ ref => ref && refMap.set( drawerPanel, ref ) }>
												<DrawerWithProps { ...drawerPanel.props } goBack={ () => { setOpen( false ) } } updateHeight={ updateHeight } />
											</div>
										)
									} ) }
								</div>
							</div>
						</animated.div>
					</animated.div>
				);
			} }
		</Spring>
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

	const children = drawerList?.[0]?.props?.children;

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

export {
	Drawer,
	Drawers,
	DrawerList,
	DrawerPanel
};
