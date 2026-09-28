// Fit Text metrics for the no-script fallback (issue #680).
//
// A fitted title's rendered width is proportional to its font size, so one
// number describes it: the ratio of the text's width to its font size. The
// server writes that ratio next to the Wordmark Width, and CSS turns the
// container's inline size into a font size (`100cqi / ratio`) that stands in
// for core's fit-text script until (or unless) that script runs.

// Round the fallback slightly down in size: engines disagree on sub-pixel
// glyph advances, and a title a hair small reads better than one that spills.
export const FIT_RATIO_SAFETY = 1.01;

// Any ratio outside this range is a broken measurement, not a title.
const MIN_RATIO = 0.3;
const MAX_RATIO = 200;

// Changes below this share of the stored ratio are measurement jitter.
const RATIO_TOLERANCE = 0.005;

export const getFitRatio = ( textWidth, fontSize ) => {
	const width = Number( textWidth );
	const size = Number( fontSize );

	if ( ! Number.isFinite( width ) || ! Number.isFinite( size ) || width <= 0 || size <= 0 ) {
		return null;
	}

	const ratio = Math.ceil( ( width / size ) * FIT_RATIO_SAFETY * 1000 ) / 1000;

	return ratio >= MIN_RATIO && ratio <= MAX_RATIO ? ratio : null;
};

export const measureFitTextMetrics = ( title ) => {
	const text = title?.textContent?.trim();

	if ( ! text ) {
		return null;
	}

	const doc = title.ownerDocument;
	const view = doc.defaultView || window;
	const range = doc.createRange();
	range.selectNodeContents( title );

	if ( typeof range.getBoundingClientRect !== 'function' ) {
		return null;
	}

	const ratio = getFitRatio(
		range.getBoundingClientRect().width,
		parseFloat( view.getComputedStyle( title ).fontSize )
	);

	if ( range.detach ) {
		range.detach();
	}

	return ratio ? { text, ratio } : null;
};

export const shouldStoreFitTextMetrics = ( stored, next ) => {
	if ( ! next ) {
		return false;
	}

	const storedRatio = Number( stored?.ratio );

	if ( stored?.text !== next.text || ! Number.isFinite( storedRatio ) || storedRatio <= 0 ) {
		return true;
	}

	return Math.abs( next.ratio - storedRatio ) / storedRatio > RATIO_TOLERANCE;
};
