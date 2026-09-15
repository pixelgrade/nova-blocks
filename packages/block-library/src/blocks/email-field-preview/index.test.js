import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createBlock, getBlockType, getCategories, parse, serialize, setCategories, unregisterBlockType } from '@wordpress/blocks';

jest.mock( '@wordpress/block-editor', () => ( { useBlockProps: ( extra = {} ) => extra } ) );

test( 'registers a native dynamic email preview with canonical round trips and no transport', () => {
	expect( fs.existsSync( path.join( __dirname, 'index.js' ) ) ).toBe( true );
	const categories = getCategories();
	setCategories( [ ...categories, { slug: 'nova-blocks', title: 'Nova Blocks' } ] );
	require( './index' );
	const block = getBlockType( 'novablocks/email-field-preview' );
	expect( block.supports.html ).toBe( false );
	expect( block.save() ).toBeNull();
	const canonical = serialize( [ createBlock( block.name ) ] );
	expect( canonical ).toBe( '<!-- wp:novablocks/email-field-preview /-->' );
	const parsed = parse( canonical );
	expect( parsed[0].isValid ).toBe( true );
	expect( serialize( parsed ) ).toBe( canonical );
	const compactCanonical = serialize( [ createBlock( block.name, { compact: true } ) ] );
	expect( compactCanonical ).toBe( '<!-- wp:novablocks/email-field-preview {"compact":true} /-->' );
	expect( serialize( parse( compactCanonical ) ) ).toBe( compactCanonical );
	const html = renderToStaticMarkup( React.createElement( block.edit, { clientId: 'preview-1' } ) );
	expect( html ).toContain( 'Email address' );
	expect( html ).toContain( 'placeholder="you@mail.com"' );
	expect( html ).not.toContain( 'Presentation only' );
	expect( html ).not.toContain( 'aria-describedby' );
	expect( html ).toMatch( /readOnly=""/i );
	expect( html ).toMatch( /<button[^>]*type="button"[^>]*aria-disabled="true"/ );
	expect( html ).not.toMatch( /\sdisabled(?:\s|>|=)/ );
	expect( html ).not.toMatch( /<form|<script|<style|\bname=|\baction=/i );
	const container = document.createElement( 'div' );
	container.innerHTML = html;
	document.body.appendChild( container );
	const beforeInteraction = container.innerHTML;
	const button = container.querySelector( 'button' );
	const input = container.querySelector( 'input' );
	expect( container.firstElementChild.className ).toBe( 'form-column' );
	expect( container.querySelector( 'label' ).parentElement.className ).toBe( 'h5' );
	expect( input.value ).toBe( '' );
	expect( input.placeholder ).toBe( 'you@mail.com' );
	expect( input.parentElement.className ).toBe( 'form-inline' );
	expect( input.nextElementSibling.className ).toBe( 'wp-block-button' );
	expect( container.querySelector( '.wp-block-buttons' ) ).toBeNull();
	const submit = jest.fn();
	container.addEventListener( 'submit', submit );
	expect( button.form ).toBeNull();
	expect( input.form ).toBeNull();
	expect( button.type ).toBe( 'button' );
	expect( input.readOnly ).toBe( true );
	button.click();
	for ( const element of [ input, button ] ) {
		element.dispatchEvent( new KeyboardEvent( 'keydown', { key: 'Enter', bubbles: true } ) );
		element.dispatchEvent( new KeyboardEvent( 'keyup', { key: 'Enter', bubbles: true } ) );
	}
	expect( submit ).not.toHaveBeenCalled();
	expect( input.value ).toBe( '' );
	expect( container.innerHTML ).toBe( beforeInteraction );
	container.remove();
	const compactHtml = renderToStaticMarkup( React.createElement( block.edit, { attributes: { compact: true }, clientId: 'preview-compact' } ) );
	expect( compactHtml ).toContain( 'form-column is-compact' );
	expect( compactHtml ).toContain( 'aria-label="Email address"' );
	expect( compactHtml ).not.toContain( '<p class="h5">' );
	for ( const file of [ 'edit.js', 'index.js' ] ) {
		expect( fs.readFileSync( path.join( __dirname, file ), 'utf8' ) ).not.toMatch( /fetch|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|onClick|onSubmit|onKey/ );
	}
	expect( fs.existsSync( path.join( __dirname, 'frontend.js' ) ) ).toBe( false );
	unregisterBlockType( block.name );
	setCategories( categories );
} );
