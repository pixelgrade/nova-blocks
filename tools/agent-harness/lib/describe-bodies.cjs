/**
 * Generate the static-body catalog consumed by `wp pixelgrade blocks describe`.
 *
 * This deliberately runs on top of the agent harness's editor-equivalent bootstrap: the body's
 * bytes come from the registered block type's real save() implementation and Nova save filters,
 * never from a PHP transcription of JSX. The generated catalog is copied into the distributable;
 * this helper and its jsdom runtime remain in the separately-installed harness package.
 */

'use strict';

const UNPARAMETERIZED_STATIC_NOTE = 'The real serializer emitted a static body, but no complete fillable template is curated for this block. Do not author it from describe alone; obtain canonical markup from the editor or harness, then validate/canonicalize.';

/**
 * Strip the outer block comments from one serialized block.
 *
 * @param {string} serialized A single result from wp.blocks.serialize().
 * @return {string} Canonical inner HTML, or an empty string for a self-closing/null-save block.
 */
function extractBlockBody( serialized ) {
	const source = String( serialized || '' ).trim();
	const openingEnd = source.indexOf( '-->' );
	const closingStart = source.lastIndexOf( '<!-- /wp:' );

	if ( -1 === openingEnd ) {
		throw new Error( 'serializer returned no opening block comment' );
	}

	if ( -1 === closingStart || closingStart < openingEnd ) {
		return '';
	}

	return source.slice( openingEnd + 3, closingStart ).trim();
}

/**
 * Turn serializer-produced sentinel values into named template slots.
 *
 * Slot kinds deliberately describe semantic output locations rather than hand-written HTML:
 * `heading_tag` replaces both tags, `class_suffix` replaces one generated class token, and
 * `literal` verifies/replaces one serialized content value. Every replacement must be unique;
 * drift in a save() implementation therefore fails generation instead of emitting a guess.
 *
 * @param {string} body  Canonical inner HTML from the real serializer.
 * @param {Array<object>} slots Slot descriptions from the WordPress request.
 * @return {object} Static catalog record.
 */
function parameterizeBody( body, slots ) {
	if ( ! Array.isArray( slots ) || 0 === slots.length ) {
		return {
			save_body: 'static',
			body_template: null,
			body_template_note: UNPARAMETERIZED_STATIC_NOTE,
		};
	}

	let template = body;
	const names = [];
	const replaceOne = ( search, replacement, label ) => {
		const occurrences = template.split( search ).length - 1;
		if ( 1 !== occurrences ) {
			throw new Error( `${ label } expected exactly one serializer occurrence, found ${ occurrences }` );
		}
		template = template.replace( search, replacement );
	};

	for ( const slot of slots ) {
		const attribute = String( slot && slot.attribute || '' );
		const placeholder = `{{${ attribute }}}`;
		if ( ! /^[A-Za-z][A-Za-z0-9_]*$/.test( attribute ) || names.includes( attribute ) ) {
			throw new Error( `invalid or duplicate body-template slot: ${ attribute || '(empty)' }` );
		}

		if ( 'heading_tag' === slot.kind ) {
			replaceOne( `<h${ slot.value }`, `<h${ placeholder }`, `${ attribute } opening tag` );
			replaceOne( `</h${ slot.value }>`, `</h${ placeholder }>`, `${ attribute } closing tag` );
		} else if ( 'class_suffix' === slot.kind ) {
			const prefix = String( slot.prefix || '' );
			if ( ! prefix ) {
				throw new Error( `${ attribute } class_suffix needs a prefix` );
			}
			replaceOne( `${ prefix }${ slot.value }`, `${ prefix }${ placeholder }`, `${ attribute } class` );
		} else if ( 'literal' === slot.kind ) {
			replaceOne( String( slot.value ), placeholder, `${ attribute } literal` );
		} else {
			throw new Error( `${ attribute } has unknown body-template slot kind: ${ slot.kind }` );
		}

		names.push( attribute );
	}

	return {
		save_body: 'static',
		body_template: template,
		body_template_slots: names,
	};
}

/**
 * Classify a curated block set and capture canonical static bodies.
 *
 * A registered server renderer makes a block dynamic even when save() preserves fallback or
 * InnerBlocks markup. Without one, an empty serializer body identifies a null-save block. A
 * non-empty body is static, but receives a fillable template only when every configured sentinel
 * is uniquely parameterized; otherwise the default-only body is withheld with an explicit note.
 *
 * @param {object} context Harness bootstrap context.
 * @param {Array<object>} requested `{name, has_render_callback, attributes?, template_slots?}` rows.
 * @return {object} Catalog keyed by block name.
 */
function describeBodies( context, requested ) {
	const blocksApi = context && context.wp && context.wp.blocks;
	if ( ! blocksApi ) {
		throw new Error( 'harness context has no wp.blocks API' );
	}

	const catalog = {};
	for ( const request of requested ) {
		const name = String( request && request.name || '' );
		if ( ! name ) {
			throw new Error( `unregistered block in curated set: ${ name || '(empty)' }` );
		}

		const blockType = blocksApi.getBlockType( name );
		if ( ! blockType && request.has_render_callback ) {
			// A legacy PHP-only block may have no block.json for the harness loader to discover. Its
			// registered server renderer still decides the classification without any save-body guess.
			catalog[ name ] = { save_body: 'dynamic' };
			continue;
		}
		if ( ! blockType ) {
			throw new Error( `unregistered block in curated set: ${ name }` );
		}

		const block = blocksApi.createBlock( name, request.attributes || {}, [] );
		const body = extractBlockBody( blocksApi.serialize( [ block ] ) );
		const dynamic = !! request.has_render_callback || '' === body;

		catalog[ name ] = dynamic ? { save_body: 'dynamic' } : parameterizeBody( body, request.template_slots );
	}

	return catalog;
}

module.exports = {
	extractBlockBody,
	parameterizeBody,
	describeBodies,
};
