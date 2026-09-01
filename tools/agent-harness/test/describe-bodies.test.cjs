'use strict';

const test = require( 'node:test' );
const assert = require( 'node:assert' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const {
	extractBlockBody,
	describeBodies,
} = require( '../lib/describe-bodies.cjs' );

test( 'extractBlockBody returns only the canonical inner HTML', () => {
	const serialized = '<!-- wp:novablocks/headline {"level":2} -->\n<h2>Title</h2>\n<!-- /wp:novablocks/headline -->';
	assert.strictEqual( extractBlockBody( serialized ), '<h2>Title</h2>' );
	assert.strictEqual( extractBlockBody( '<!-- wp:novablocks/navigation-search /-->' ), '' );
} );

test( 'describeBodies classifies real save output and keeps the generated body', () => {
	const context = {
		wp: {
			blocks: {
				getBlockType: name => name === 'novablocks/headline' ? { name } : null,
				createBlock: ( name, attributes ) => ( { name, attributes } ),
				serialize: blocks => {
					const block = blocks[ 0 ];
					return `<!-- wp:${ block.name } -->\n<h2><span>${ block.attributes.secondary }</span> <span>${ block.attributes.primary }</span></h2>\n<!-- /wp:${ block.name } -->`;
				},
			},
		},
	};

	const result = describeBodies( context, [ {
		name: 'novablocks/headline',
		has_render_callback: false,
		attributes: { primary: '{{primary}}', secondary: '{{secondary}}' },
		template_slots: [
			{ attribute: 'level', kind: 'heading_tag', value: 2 },
			{ attribute: 'secondary', kind: 'literal', value: '{{secondary}}' },
			{ attribute: 'primary', kind: 'literal', value: '{{primary}}' },
		],
		template_constraints: { className: null },
	} ] );

	assert.deepStrictEqual( result, {
		'novablocks/headline': {
			save_body: 'static',
			body_template: '<h{{level}}><span>{{secondary}}</span> <span>{{primary}}</span></h{{level}}>',
			body_template_slots: [ 'level', 'secondary', 'primary' ],
			body_template_constraints: { className: null },
		},
	} );
} );

test( 'default-only static bodies are withheld rather than advertised as fillable', () => {
	const context = {
		wp: {
			blocks: {
				getBlockType: name => ( { name } ),
				createBlock: name => ( { name } ),
				serialize: () => '<!-- wp:novablocks/opentable --><div class="default-only"></div><!-- /wp:novablocks/opentable -->',
			},
		},
	};

	assert.deepStrictEqual(
		describeBodies( context, [ { name: 'novablocks/opentable', has_render_callback: false } ] ),
		{
			'novablocks/opentable': {
				save_body: 'static',
				body_template: null,
			},
		}
	);
} );

test( 'a server renderer or an empty save result is dynamic', () => {
	const context = {
		wp: {
			blocks: {
				getBlockType: name => ( { name } ),
				createBlock: name => ( { name } ),
				serialize: blocks => blocks[ 0 ].name.endsWith( 'callback' )
					? '<!-- wp:novablocks/callback --><p>fallback</p><!-- /wp:novablocks/callback -->'
					: '<!-- wp:novablocks/null-save /-->',
			},
		},
	};

	assert.deepStrictEqual(
		describeBodies( context, [
			{ name: 'novablocks/callback', has_render_callback: true },
			{ name: 'novablocks/null-save', has_render_callback: false },
		] ),
		{
			'novablocks/callback': { save_body: 'dynamic' },
			'novablocks/null-save': { save_body: 'dynamic' },
		}
	);
} );

test( 'an unregistered curated block is refused rather than guessed', () => {
	const context = { wp: { blocks: { getBlockType: () => null } } };
	assert.deepStrictEqual(
		describeBodies( context, [ { name: 'novablocks/server-only', has_render_callback: true } ] ),
		{ 'novablocks/server-only': { save_body: 'dynamic' } },
		'a registered server renderer decides a legacy PHP-only block without a JS save guess'
	);
	assert.throws(
		() => describeBodies( context, [ { name: 'novablocks/missing', has_render_callback: false } ] ),
		/unregistered block/
	);
} );

test( 'the checked-in catalog is a complete generated artifact', () => {
	const manifest = JSON.parse( fs.readFileSync(
		path.join( __dirname, '..', '..', '..', 'lib', 'cli', 'blocks-describe-body-templates.json' ),
		'utf8'
	) );

	assert.strictEqual( manifest.schema_version, 1 );
	assert.strictEqual( manifest.generated_by, '@pixelgrade/agent-harness' );
	assert.ok( Object.keys( manifest.blocks ).length >= 30, 'the curated Nova catalog must not shrink silently' );

	for ( const [ name, record ] of Object.entries( manifest.blocks ) ) {
		assert.ok( [ 'static', 'dynamic' ].includes( record.save_body ), `${ name } has a closed save_body value` );
		if ( 'static' === record.save_body ) {
			if ( record.body_template ) {
				assert.ok( record.body_template_slots.length > 0, `${ name } fillable template names its slots` );
			} else {
				assert.strictEqual( record.body_template, null, `${ name } withholds default-only serializer bytes` );
				assert.strictEqual( record.body_template_note, undefined, `${ name } keeps translatable prose out of the generated artifact` );
			}
		} else {
			assert.strictEqual( record.body_template, undefined, `${ name } dynamic body has no static template` );
		}
	}

	assert.match( manifest.blocks['novablocks/headline'].body_template, /\{\{secondary\}\}.*\{\{primary\}\}/ );
	assert.match( manifest.blocks['novablocks/headline'].body_template, /<h\{\{level\}\}[^>]*has-text-align-\{\{textAlign\}\} align\{\{align\}\}/ );
	assert.deepStrictEqual( manifest.blocks['novablocks/headline'].body_template_slots, [ 'level', 'textAlign', 'align', 'secondary', 'primary' ] );
	assert.deepStrictEqual( manifest.blocks['novablocks/headline'].body_template_constraints, { className: null } );
	assert.strictEqual( manifest.blocks['novablocks/opentable'].save_body, 'static', 'legacy static bundles stay in the catalog' );
	assert.strictEqual( manifest.blocks['novablocks/opentable'].body_template, null, 'default-only static markup is not advertised as fillable' );
	assert.strictEqual( manifest.blocks['novablocks/opentable'].body_template_note, undefined, 'generated catalog contains no untranslatable prose' );
	assert.strictEqual( manifest.blocks['novablocks/openhours'].save_body, 'dynamic', 'legacy dynamic bundles stay in the catalog' );
} );

test( 'the loader does not skip legacy block bundles without block.json', () => {
	const source = fs.readFileSync( path.join( __dirname, '..', 'lib', 'loader.cjs' ), 'utf8' );

	assert.match( source, /const hasMetadata = fs\.existsSync\( metaPath \)/ );
	assert.match( source, /const blockName = meta \? meta\.name : `novablocks\/\$\{ name \}`/ );
	assert.doesNotMatch( source, /if \( ! fs\.existsSync\( metaPath \) \) \{\s*continue/ );
} );
