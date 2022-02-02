import { getRandomBetween } from "@novablocks/utils";

const TextPlaceholder = ( props ) => {
	const rows = props.rows || 2;
	const arr = Array.from( Array( rows ).keys() );

	return (
		<div className={ 'novablocks-text-placeholder' }>
			{ arr.map( ( obj, index ) => {
				const units = index === arr.length - 1 ? getRandomBetween(6, 12) : getRandomBetween(17, 20);
				const width = `${ units * 5 }%`;
				const style = { width };
				return <div className={ 'novablocks-text-placeholder__row' } style={ style }></div>
			} ) }
		</div>
	);
};

export default TextPlaceholder;
