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
  'is-style-accent': {
    paletteVariation: 6,
    colorSignal: 2,
  },
  'is-style-alternative': {
    palette: 2,
    paletteVariation: 6,
    colorSignal: 2,
  },
  'is-style-alert': {
    palette: '_error',
    paletteVariation: 6,
    colorSignal: 2,
  },
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
      let newAttributes = {};

      const newClassName = classes.filter( className => {
        if ( typeof deprecatedStyles[className] !== "undefined" ) {
          newAttributes = deprecatedStyles[className];
          return false;
        }
        return !! className.length;
      } ).join( ' ' );

      return [
        Object.assign( {}, attributes, newAttributes, { className: newClassName } ),
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
