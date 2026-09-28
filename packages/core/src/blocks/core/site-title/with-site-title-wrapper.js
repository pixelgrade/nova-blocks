import { store as blockEditorStore } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { useDispatch } from '@wordpress/data';
import { useEffect, useRef } from '@wordpress/element';

import {
	measureFitTextMetrics,
	shouldStoreFitTextMetrics,
} from './fit-text-metrics';

export const normalizeSiteTitleWidth = ( width ) => {
	const numericWidth = Number( width );

	if ( ! Number.isFinite( numericWidth ) ) {
		return 395;
	}

	return Math.min( 800, Math.max( 80, Math.round( numericWidth ) ) );
};

// Measure the fitted title as the editor renders it (real fonts, real
// typography) and keep the ratio on the block, so the front end can size the
// title without core's fit-text script (issue #680). The update is marked
// non-persistent: opening the editor adds no undo level and does not dirty the
// template part; the ratio is saved with the next save of that part.
const useFitTextMetrics = ( containerRef, clientId, fitTextMetrics ) => {
	const storedRef = useRef( fitTextMetrics );
	storedRef.current = fitTextMetrics;

	const {
		updateBlockAttributes,
		__unstableMarkNextChangeAsNotPersistent,
	} = useDispatch( blockEditorStore );

	useEffect( () => {
		const title = containerRef.current?.querySelector( '.wp-block-site-title' );
		const view = title?.ownerDocument?.defaultView;

		if ( ! title || ! view ) {
			return undefined;
		}

		let frame = 0;
		let cancelled = false;

		const measure = () => {
			frame = 0;

			if ( cancelled ) {
				return;
			}

			const next = measureFitTextMetrics( title );

			if ( ! shouldStoreFitTextMetrics( storedRef.current, next ) ) {
				return;
			}

			storedRef.current = next;
			__unstableMarkNextChangeAsNotPersistent();
			updateBlockAttributes( clientId, { fitTextMetrics: next } );
		};

		const schedule = () => {
			if ( ! frame ) {
				frame = view.requestAnimationFrame( measure );
			}
		};

		// Web fonts change the ratio; only trust measurements once they load.
		const fontsReady = title.ownerDocument.fonts?.ready || Promise.resolve();
		fontsReady.then( schedule );

		// Core refits (and the text reflows) on every text, typography and
		// width change; each one resizes the title.
		const observer = view.ResizeObserver ? new view.ResizeObserver( schedule ) : null;
		observer?.observe( title );

		return () => {
			cancelled = true;
			observer?.disconnect();

			if ( frame ) {
				view.cancelAnimationFrame( frame );
			}
		};
	}, [ clientId, containerRef, updateBlockAttributes, __unstableMarkNextChangeAsNotPersistent ] );
};

const FittedSiteTitle = ( { BlockListBlock, props } ) => {
	const { attributes, clientId } = props;
	const { fitTextWidth = 395, fitTextMetrics } = attributes;
	const containerRef = useRef();

	useFitTextMetrics( containerRef, clientId, fitTextMetrics );

	const normalizedWidth = normalizeSiteTitleWidth( fitTextWidth );

	return (
		<div
			ref={ containerRef }
			className="nb-site-title-fit-container"
			style={ {
				'--nb-site-title-fit-width': `${ normalizedWidth }px`,
			} }
		>
			<BlockListBlock { ...props } />
		</div>
	);
};

export const withSiteTitleWrapper = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const { attributes, name } = props;
		const { fitText } = attributes;

		if ( name !== 'core/site-title' || ! fitText ) {
			return <BlockListBlock { ...props } />;
		}

		return <FittedSiteTitle BlockListBlock={ BlockListBlock } props={ props } />;
	};
}, 'withSiteTitleWrapper' );
