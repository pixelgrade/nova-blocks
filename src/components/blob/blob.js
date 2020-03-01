import $ from 'jquery';
import anime from 'animejs';
import { BaseComponent } from '../models/DefaultComponent';

export class Blob extends BaseComponent {
	protected element: JQuery<SVGSVGElement>;
	protected presetOffset: number;

	private radius = 10;
	private preset = 245;
	private mostSides = 20;
	private complexity = 0.84;
	private smoothness = 1;

	constructor(preset: number, complexity: number, smoothness: number, presetOffset: number = 0) {
		super();

		this.presetOffset = presetOffset;

		this.setPreset(preset);
		this.setComplexity(complexity);
		this.setSmoothness(smoothness);

		this.bindEvents();
		this.render();
	}

	public generateSvg() {
		const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg' );
		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path' );

		svg.setAttribute( 'viewBox', '0 0 ' + 2 * this.radius + ' ' + 2 * this.radius );
		svg.setAttribute( 'fill', 'currentColor' );
		path.setAttribute( 'd', this.generatePoints() );
		svg.appendChild( path );

		return svg;
	}

	public morph( options: object = {} ) {
		const target = this.element.find( 'path' ).get(0);

		const opts = $.extend({
			complexity: this.complexity,
			preset: this.preset,
			smoothness: this.smoothness,
		}, options);

		anime({
			d: this.generatePoints( opts ),
			duration: 1000,
			easing: 'easeOutQuad',
			targets: target,
		});
	}

	public render() {
		const $svg = $( this.generateSvg() );

		if ( this.element ) {
			this.element.replaceWith( $svg );
		}

		this.element = $svg;
	}

	public getRatio(preset: number, i: number): number {
		const pow = Math.pow( preset, i );
		return ( 1 + this.getMagicDigit( pow ) ) / 10;
	}

	public getMagicDigit( n ) {
		let sum = 0;

		while ( n > 0 || sum > 9 ) {
			if ( n === 0 ) {
				n = sum;
				sum = 0;
			}
			sum += n % 10;
			n = Math.floor(n / 10 );
		}
		return sum;
	}

	public setPreset(preset: number) {
		this.preset = preset;
	}

	public getSidesFromPreset( preset ) {
		return Math.min( Math.max( 3, Math.floor( Math.sqrt( preset ) ) ), this.mostSides );
	}

	public setComplexity( complexity ) {
		this.complexity = complexity;
	}

	public setSmoothness( smoothness ) {
		this.smoothness = smoothness;
	}

	public generatePoints(opts: object = {}): string {
		const points = [];
		let path = '';
		let firstPoint = '';
		let curves = '';

		const options = $.extend({
			complexity: this.complexity,
			preset: this.preset,
			smoothness: this.smoothness,
		}, opts);

		const sides = this.getSidesFromPreset( options.preset );

		for (let i = 1; i <= sides; i++) {
			// generate a regular polygon
			// we add pi/2 to the angle to have the tip of polygons with odd number of edges pointing upwards
			const angle = 2 * Math.PI * i / sides - Math.PI / 2;

			// default ratio is 0.7 because the random one varies between 0.4 and 1
			const defaultRatio = 0.7;
			const initialRatio = this.getRatio(options.preset + this.presetOffset, i);
			const ratio = defaultRatio + ( initialRatio - defaultRatio ) * options.complexity;

			points.push({
				x: this.radius * ( Math.cos( angle ) * ratio + 1 ),
				y: this.radius * ( Math.sin( angle ) * ratio + 1 )
			});
		}

		let missingPoints = this.mostSides - sides;

		for (let i = 0; i < points.length; i++) {
			const nextIdx = (i + 1) % points.length;
			const prevIdx = (i + points.length - 1) % points.length;
			const nextPt = points[nextIdx];
			const thisPt = points[i];
			const prevPt = points[prevIdx];
			const smoothness = Math.sqrt(options.smoothness);

			const M1 = {
				x: (prevPt.x + thisPt.x) / 2,
				y: (prevPt.y + thisPt.y) / 2,
			};

			const M2 = {
				x: (thisPt.x + nextPt.x) / 2,
				y: (thisPt.y + nextPt.y) / 2,
			};

			const x1 = M1.x * (1 - smoothness) + thisPt.x * smoothness;
			const y1 = M1.y * (1 - smoothness) + thisPt.y * smoothness;

			const x2 = M2.x * (1 - smoothness) + thisPt.x * smoothness;
			const y2 = M2.y * (1 - smoothness) + thisPt.y * smoothness;

			if ( i === 0 ) {
				firstPoint = M1.x + ' ' + M1.y;
			}

			curves += ' C ' + x1 + ' ' + y1 + ' ' + x2 + ' ' + y2 + ' ' + M2.x + ' ' + M2.y;

			const dummyPointsCount = Math.round(missingPoints / (points.length - i) );

			for (let j = 0; j < dummyPointsCount; j++) {
				curves += ' C ' + M2.x + ' ' + M2.y + ' ' + M2.x + ' ' + M2.y + ' ' + M2.x + ' ' + M2.y;
			}

			missingPoints -= dummyPointsCount;
		}

		// move to first point
		path = 'M ' + firstPoint;

		// add the curves to draw the actual path
		path += curves;

		// close the path
		path += ' Z';

		return path;
	}

	public getSvg(): JQuery<SVGSVGElement> {
		return this.element;
	}

	public getPreset(): number {
		return this.preset;
	}

	public bindEvents(): void {

	}

	public destroy(): void {

	}
}
