import classnames from 'classnames';
import HeadingToolbar from './heading-toolbar';

const { __ } = wp.i18n;

const {
	Fragment
} = wp.element;

/**
 * WordPress dependencies
 */
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} = wp.blockEditor;

export default function HeadlineEdit( props ) {

	const {
		attributes,
		setAttributes,
		className,
	} = props;

	const {
		align,
		primary,
		secondary,
		level
	} = attributes;

	const TagName = `h${level}`;

	return (
		<Fragment>
			<BlockControls>
				<HeadingToolbar minLevel={ 2 } maxLevel={ 4 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
				<AlignmentToolbar
					value={ align }
					onChange={ ( nextAlign ) => {
						setAttributes( { align: nextAlign } );
					} }
				/>
			</BlockControls>
			<InspectorControls>
				<p>{ __( 'Level', '__plugin_txtd' ) }</p>
				<HeadingToolbar minLevel={ 1 } maxLevel={ 6 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
			</InspectorControls>

			<TagName
				className={ classnames( className, 'c-headline', {
				[ `has-text-align-${ align }` ]: align,
			} ) }>

				<RichText
					className="c-headline__secondary"
					identifier="secondary"
					tagName="span"
					value={ secondary }
					onChange={ ( value ) => setAttributes( { secondary: value } ) }
					placeholder={ __( 'Subtitle…', '__plugin_txtd' ) }
					keepPlaceholderOnFocus = {true}
					allowedFormats={ [] }
				/>
				<RichText
					className="c-headline__primary"
					identifier="primary"
					tagName="span"
					value={ primary }
					onChange={ ( value ) => setAttributes( { primary: value } ) }
					placeholder={ __( 'Write title…', '__plugin_txtd' ) }
					keepPlaceholderOnFocus = {true}
					allowedFormats={ [] }
				/>

			</TagName>
		</Fragment>
	)
}
