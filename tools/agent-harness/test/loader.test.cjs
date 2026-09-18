'use strict';

const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const { webcrypto } = require( 'node:crypto' );
const { TextEncoder, TextDecoder } = require( 'node:util' );
const { JSDOM } = require( 'jsdom' );
const { installShims } = require( '../lib/loader.cjs' );

const createWindow = t => {
	const dom = new JSDOM( '', { url: 'http://localhost/wp-admin/post.php', runScripts: 'outside-only' } );
	t.after( () => dom.window.close() );
	return dom.window;
};

test( 'missing Web Crypto can hash the bytes WordPress encodes at startup', async t => {
	const win = createWindow( t );
	Object.defineProperty( win, 'crypto', { value: undefined, configurable: true } );
	installShims( win );

	assert.ok( win.crypto && win.crypto.subtle, 'missing Web Crypto must be supplied' );
	const hash = await win.crypto.subtle.digest( 'SHA-256', new Uint8Array( [ 97, 98, 99 ] ) );
	assert.equal( Buffer.from( hash ).toString( 'hex' ), 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad' );
} );

test( 'getter-only crypto gains subtle encryption without replacing its random generator', async t => {
	const win = createWindow( t );
	const getRandomValues = webcrypto.getRandomValues.bind( webcrypto );
	const crypto = { getRandomValues };
	Object.defineProperty( win, 'crypto', { get: () => crypto, configurable: true } );
	installShims( win );

	assert.equal( win.crypto, crypto, 'the accessor-backed browser crypto object stays intact' );
	assert.equal( win.crypto.getRandomValues, getRandomValues );
	assert.ok( win.crypto.subtle, 'a partial crypto object must gain the missing subtle API' );
	const key = await win.crypto.subtle.generateKey( { name: 'AES-GCM', length: 128 }, false, [ 'encrypt', 'decrypt' ] );
	const iv = win.crypto.getRandomValues( new win.Uint8Array( 12 ) );
	const message = new Uint8Array( [ 0, 1, 2, 127, 128, 255 ] );
	const encrypted = await win.crypto.subtle.encrypt( { name: 'AES-GCM', iv }, key, message );
	const decrypted = await win.crypto.subtle.decrypt( { name: 'AES-GCM', iv }, key, encrypted );
	assert.deepEqual( Buffer.from( decrypted ), Buffer.from( message ) );
	assert.notDeepEqual( Buffer.from( encrypted ), Buffer.from( message ) );
} );

test( 'a partial crypto object gains bound UUID and random-value methods', t => {
	const win = createWindow( t );
	const crypto = { subtle: webcrypto.subtle };
	Object.defineProperty( win, 'crypto', { get: () => crypto, configurable: true } );
	installShims( win );

	assert.equal( typeof win.crypto.randomUUID, 'function', 'the missing UUID method must be supplied' );
	assert.equal( typeof win.crypto.getRandomValues, 'function', 'the missing random-value method must be supplied' );
	assert.equal( win.crypto.subtle, webcrypto.subtle );
	const first = win.crypto.randomUUID();
	const second = win.crypto.randomUUID();
	assert.match( first, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/ );
	assert.notEqual( first, second );
	const bytes = new win.Uint8Array( 32 );
	assert.equal( win.crypto.getRandomValues( bytes ), bytes );
	assert.ok( bytes.some( byte => byte !== 0 ) );
	assert.throws( () => win.crypto.getRandomValues( new win.Float32Array( 2 ) ), { name: 'TypeMismatchError' } );
} );

test( 'missing text encoders round-trip Unicode and reject invalid UTF-8 in fatal mode', t => {
	const win = createWindow( t );
	win.TextEncoder = undefined;
	win.TextDecoder = undefined;
	installShims( win );

	assert.equal( typeof win.TextEncoder, 'function', 'TextEncoder must be supplied' );
	assert.equal( typeof win.TextDecoder, 'function', 'TextDecoder must be supplied' );
	const text = 'Rosa — cafea și crème brûlée ☕ 🧱';
	const bytes = new win.TextEncoder().encode( text );
	assert.deepEqual( Buffer.from( bytes ), Buffer.from( text, 'utf8' ) );
	assert.equal( new win.TextDecoder().decode( bytes ), text );
	assert.throws( () => new win.TextDecoder( 'utf-8', { fatal: true } ).decode( new Uint8Array( [ 0xff ] ) ), TypeError );
} );

test( 'complete crypto and text APIs remain intact on repeated shim installation', async t => {
	const win = createWindow( t );
	const crypto = {
		subtle: webcrypto.subtle,
		getRandomValues: webcrypto.getRandomValues.bind( webcrypto ),
		randomUUID: webcrypto.randomUUID.bind( webcrypto ),
	};
	Object.defineProperty( win, 'crypto', { get: () => crypto, configurable: true } );
	win.TextEncoder = TextEncoder;
	win.TextDecoder = TextDecoder;
	const before = { ...crypto };
	installShims( win );
	installShims( win );

	assert.equal( win.crypto, crypto );
	assert.equal( win.crypto.subtle, before.subtle );
	assert.equal( win.crypto.getRandomValues, before.getRandomValues );
	assert.equal( win.crypto.randomUUID, before.randomUUID );
	assert.equal( win.TextEncoder, TextEncoder );
	assert.equal( win.TextDecoder, TextDecoder );
	const bytes = new win.TextEncoder().encode( 'saved content' );
	const hash = await win.crypto.subtle.digest( 'SHA-256', bytes );
	assert.equal( hash.byteLength, 32 );
	assert.equal( new win.TextDecoder().decode( bytes ), 'saved content' );
} );

test( 'the installed jsdom crypto keeps its accessor and existing native methods', async t => {
	const win = createWindow( t );
	const original = win.crypto;
	const descriptor = Object.getOwnPropertyDescriptor( win, 'crypto' );
	const methods = original && {
		getRandomValues: original.getRandomValues,
		randomUUID: original.randomUUID,
		subtle: original.subtle,
	};
	installShims( win );

	if ( original ) {
		assert.equal( win.crypto, original );
		assert.equal( Object.getOwnPropertyDescriptor( win, 'crypto' ).get, descriptor.get );
		for ( const [ name, value ] of Object.entries( methods ) ) {
			if ( value ) {
				assert.equal( win.crypto[ name ], value, `existing ${ name } must stay intact` );
			}
		}
	}
	const bytes = win.crypto.getRandomValues( new win.Uint8Array( 16 ) );
	const hash = await win.crypto.subtle.digest( 'SHA-256', bytes );
	assert.equal( hash.byteLength, 32 );
	assert.match( win.crypto.randomUUID(), /^[0-9a-f-]{36}$/ );
} );
