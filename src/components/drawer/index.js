import { Spring, animated } from 'react-spring/renderprops';
import { useTransition } from 'react-spring';

const {
	cloneElement,
	Fragment,
	useRef,
	useState,
} = wp.element;

const Drawers = ( ownProps ) => {

	const { children } = ownProps;

	const drawerList = children.filter( child => child.type === DrawerList );
	const drawers = getDrawersFromList( drawerList );
	const drawerPanels = children.filter( child => child.type === DrawerPanel );

	if ( ! drawers.length ) {
		return null;
	}

	const [ active, setActive ] = useState( false );
	const [ open, setOpen ] = useState( false );

	const refs = [];
	const [ height, setHeight ] = useState(0);
	const ref = useRef( null );

	useEffect(() => {
		setHeight( !! ref.current ? ref.current.clientHeight : 0 );
	});

	return (
		<Spring from={ { progress: 0 } } to={ { progress: open ? 1 : 0 } }>
			{ ( { progress } ) => {
				return (
					<animated.div
						style={ { transform: `translateX(-${ progress * 100 }%)` } }
						className={ `novablocks-drawers` }>
						{ drawers.map( ( drawer, index ) => {
							const drawerPanel = drawerPanels[index];

							return (
								<Fragment key={ index }>
									<Drawer { ...drawer.props }
										onClick={ () => {
											setActive( index );
											setOpen( true );
										} } />
									<div className={ `novablocks-drawers__panel` } hidden={ index !== active }>
										<DrawerWithBack { ...drawerPanel.props } goBack={ () => { setOpen( false ) } } />
									</div>
								</Fragment>
							)
						} ) }
					</animated.div>
				);
			} }
		</Spring>
	);
}

const DrawerWithBack = ( props ) => {

	const { goBack, isActive } = props;

	return addPropsToChildren( props.children, { goBack, isActive } );
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
