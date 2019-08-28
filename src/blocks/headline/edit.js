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

const {
	PanelBody
} = wp.components;

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
				<HeadingToolbar minLevel={ 2 } maxLevel={ 5 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
			</BlockControls>
			<InspectorControls>
				<p>{ __( 'Level' ) }</p>
				<HeadingToolbar minLevel={ 1 } maxLevel={ 7 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
				<p>{ __( 'Text Alignment' ) }</p>
				<AlignmentToolbar
					isCollapsed={ false }
					value={ align }
					onChange={ ( nextAlign ) => {
						setAttributes( { align: nextAlign } );
					} }
				/>
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
					placeholder={ __( 'Secondary…', '__plugin_txtd' ) }
				/>
				<RichText
					className="c-headline__primary"
					identifier="primary"
					tagName="span"
					value={ primary }
					onChange={ ( value ) => setAttributes( { primary: value } ) }
					placeholder={ __( 'Primary…', '__plugin_txtd' ) }
				/>

			</TagName>
		</Fragment>
	)
}
