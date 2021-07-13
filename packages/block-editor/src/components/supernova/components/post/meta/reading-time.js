import { __, sprintf } from '@wordpress/i18n';

const ReadingTime = ( props ) => {

	let   wordsPerMinute = 250,
		  imgWeight = 12,
		  imagesTime = 0,
		  videoTime = 0,
		  content = props.post?.content.rendered,
		  strippedContent = content.replace( /(<([^>]+)>)/ig, ''),
	      wordCount = strippedContent.split(' ')
		                   .filter(function(n) { return n != '' })
						   .length,
		  words_time = Math.floor(wordCount / ( wordsPerMinute/60 ) );

	let matchImage = content.match(/<img\s[^>]+>/g);
	let matchVideo = content.match(/<iframe\s[^>]+>/g);

	if( matchImage !== null ) {

		let numImages = matchImage.length;

		for( let i = 0; i < numImages; i++) {
			imagesTime += imgWeight;

			if (imgWeight > 3) {
				imgWeight--;
			}
		}
	}

	if( matchVideo !== null ) {
		videoTime = matchVideo.length * 60;
	}

	let minutes = Math.ceil( ( words_time + imagesTime + videoTime ) / 60 );

	if ( minutes < 1 ) {
		minutes = 1;
	}

	return sprintf(__('%s min read', '__plugin_txtd'), minutes);

};

export default ReadingTime;
