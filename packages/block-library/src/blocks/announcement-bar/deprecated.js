const { omit } = lodash;
import { createBlock } from '@wordpress/blocks';

const blockAttributes = {
	align: {
		type: 'string',
		default: 'full'
	},
	url: {
		type: 'string',
		default: ''
	},
	opensInNewTab: {
		type: 'boolean',
		default: false
	},
};

const deprecatedStyles = {
  'is-style-accent': 'sm-variation-6',
  'is-style-alternative': 'sm-variation-10',
  'is-style-alert': '',
};

const deprecated = [
  {
    isEligible: ( attributes, innerBlocks ) => {
      const classAttr = attributes.className || '';
      const classes = classAttr.split(/\b\s+/);

      return classes.some( className => Object.keys( deprecatedStyles ).includes( className ) );
    },
    attributes: {
      content: {
        type: 'string',
        default: '<b>Find me on Instagram!</b> New photos and interesting facts every day.',
      },
      ...blockAttributes
    },

    migrate( attributes, innerBlocks ) {
      const classAttr = attributes.className;
      const classes = classAttr.split(/\b\s+/);

      const newClassName = classes.map( className => {
        if ( typeof deprecatedStyles[className] !== "undefined" ) {
          return deprecatedStyles[className];
        }
        return className;
      } ).filter( className => !! className.length ).join( ' ' );

      return [
        Object.assign( {}, attributes, { className: newClassName } ),
        innerBlocks
      ]
    },

    save: function() {},
  },
	{
		isEligible: ( attributes, innerBlocks ) => {
			return typeof attributes.content !== 'undefined' && ! innerBlocks.length;
		},
		attributes: {
			content: {
				type: 'string',
				default: '<b>Find me on Instagram!</b> New photos and interesting facts every day.',
			},
			...blockAttributes
		},

		migrate( attributes, innerBlocks ) {
			return [
				omit( attributes, 'content' ),
				[
					createBlock( 'core/paragraph', {
						content: attributes.content
					} ),
					...innerBlocks
				]
			]
		},

		save: function() {},
	}
];

export default deprecated;
