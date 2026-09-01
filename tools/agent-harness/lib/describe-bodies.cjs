/**
 * Generate the static-body catalog consumed by `wp pixelgrade blocks describe`.
 *
 * This deliberately runs on top of the agent harness's editor-equivalent bootstrap: the body's
 * bytes come from the registered block type's real save() implementation and Nova save filters,
 * never from a PHP transcription of JSX. The generated catalog is copied into the distributable;
 * this helper and its jsdom runtime remain in the separately-installed harness package.
 */

'use strict';

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
 * Classify a curated block set and capture canonical static bodies.
 *
 * A registered server renderer makes a block dynamic even when save() preserves fallback or
 * InnerBlocks markup. Without one, an empty serializer body identifies a null-save block. Only a
 * non-empty body with no server renderer is static and receives a template.
 *
 * @param {object} context Harness bootstrap context.
 * @param {Array<object>} requested `{name, has_render_callback, attributes?}` rows.
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

		catalog[ name ] = dynamic
			? { save_body: 'dynamic' }
			: { save_body: 'static', body_template: body };
	}

	return catalog;
}

module.exports = {
	extractBlockBody,
	describeBodies,
};
