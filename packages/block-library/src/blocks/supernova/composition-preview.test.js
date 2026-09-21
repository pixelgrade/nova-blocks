const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const supernovaPhp = fs.readFileSync( path.resolve( __dirname, 'init.php' ), 'utf8' );
const cardScss = fs.readFileSync( path.resolve( __dirname, 'scss/_card.scss' ), 'utf8' );
const itemScss = fs.readFileSync( path.resolve( __dirname, '../supernova-item/scss/_dropcap.scss' ), 'utf8' );
const alignmentScss = fs.readFileSync( path.resolve( __dirname, 'scss/_content-alignments.scss' ), 'utf8' );
const carouselScss = fs.readFileSync( path.resolve( __dirname, 'scss/_carousel.scss' ), 'utf8' );
const postCollection = fs.readFileSync( path.resolve( __dirname, 'components/posts-collection-layout/index.js' ), 'utf8' );

test( 'automatic cards enqueue their item stylesheet on the frontend', () => {
	assert.match(
		supernovaPhp,
		/if\s*\(\s*'auto'\s*===\s*\$attributes\['contentType'\]\s*\)[\s\S]*?wp_enqueue_style\(\s*'novablocks\/supernova-item-style'\s*\)/,
		'the parent block creates items dynamically, so Core cannot discover and enqueue their CSS'
	);
} );

test( 'linked Card titles inherit the author-selected font size and line height', () => {
	assert.match( cardScss, /\.nb-card__title\s*\{[\s\S]*?a\s*\{[^}]*font-size:\s*inherit;[^}]*line-height:\s*inherit;/ );
} );

test( 'the default Read More affordance is hidden without outranking hover recipes', () => {
	assert.doesNotMatch(
		itemScss,
		/:is\(\.nb-supernova-item__dropcap-wrapper,\s*#very#specific\)\s*\{[^}]*display:\s*flex;/,
		'the high-specificity positioning rule must not force the otherwise hidden affordance to display'
	);
	assert.match( itemScss, /\.nb-supernova-item__dropcap-wrapper\s*\{[^}]*display:\s*flex;/ );
} );

test( 'editorial carousel alignment is opt-in and ordinary carousels keep mobile centering', () => {
	assert.match( alignmentScss, /\.nb-supernova--layout-carousel\s*\{\s*@include below\(tablet\)\s*\{\s*text-align:\s*center;/ );
	assert.match( alignmentScss, /&\.is-style-editorial-hero\.nb-supernova--halign-left\s*\{\s*text-align:\s*left;/ );
	assert.match( carouselScss, /\.nb-supernova\.is-style-editorial-hero\.nb-supernova--halign-left[^\{]*\.slick-dots\s*\{[^}]*text-align:\s*left;/ );
	assert.match( carouselScss, /\.nb-supernova\.is-style-editorial-hero\.nb-supernova--halign-left[^\{]*\.slick-dots[^}]*padding-left:\s*var\(--nb-wrapper-sides-spacings\)/ );
	assert.doesNotMatch( carouselScss, /(?<!hero)\.nb-supernova--halign-left \.slick-dots/ );
} );

test( 'an editorial hero is an opt-in style with contained mobile media and inline desktop caption', () => {
	assert.match( supernovaPhp, /register_block_style\(\s*'novablocks\/supernova'[\s\S]*?'name'\s*=>\s*'editorial-hero'/ );
	assert.match( carouselScss, /\.nb-supernova\.is-style-editorial-hero[^{]*\{[\s\S]*?overflow:\s*clip;/ );
	assert.match( carouselScss, /\.nb-supernova-item__inner-container[^{]*\{[^}]*display:\s*grid;[^}]*grid-template-columns:\s*auto minmax\(0,\s*1fr\) auto;/ );
} );

test( 'the editor forwards Query position so PostCard can render the same ordinal as PHP', () => {
	assert.match( postCollection, /<PostCard[^>]*collectionOrdinal=\{ index \+ 1 \}/ );
} );
