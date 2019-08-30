export default <svg
	width="62"
	height="75"
	xmlns="http://www.w3.org/2000/svg"
	xmlnsXlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 62 75"
>
	<defs>
		<path
			id="b"
			d="M31 69s27-18 27-40C58 14.088 46 2 31 2S4 14.088 4 29c0 22 27 40 27 40zm7.725-31.206c-4.26 4.275-11.264 4.275-15.53 0-4.26-4.277-4.26-11.305 0-15.587 4.26-4.276 11.265-4.276 15.53 0 4.367 4.282 4.367 11.304 0 15.587z"
		/>
		<filter
			id="a"
			width="200%"
			height="200%"
			x="-50%"
			y="-50%"
			filterUnits="objectBoundingBox"
		>
			<feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
			<feGaussianBlur
				in="shadowOffsetOuter1"
				result="shadowBlurOuter1"
				stdDeviation="2"
			/>
			<feColorMatrix
				in="shadowBlurOuter1"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
			/>
		</filter>
	</defs>
	<g fill="none" fillRule="evenodd">
		<use fill="#000" filter="url(#a)" xlinkHref="#b" style={ { display: 'none' } }/>
		<use fill="#9660C6" xlinkHref="#b" />
	</g>
</svg>
