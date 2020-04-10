import Cookies from 'js-cookie';

const {
	useState
} = wp.element;

const {
	Button,
} = wp.components;

const Notice = ( props ) => {

	const {
		id,
		content,
		dismissLabel
	} = props;

	const [ hidden, setHidden ] = useState( Cookies.get( id ) );

	const onClick = () => {
		Cookies.set( id, true, { expires: 365 } );
		setHidden( true );
	}

	if ( hidden ) {
		return null;
	}

	return (
		<div className={ 'novablocks-notice' }>
			{ content }
			<Button isPrimary isSmall onClick={ onClick }>{ dismissLabel }</Button>
		</div>
	);
}

export default Notice;
