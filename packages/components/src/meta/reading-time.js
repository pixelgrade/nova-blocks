import { __, sprintf } from '@wordpress/i18n';

const ReadingTime = ( props ) => {

	let   wordsPerMinute = 265,
		  wordsPerSecond = wordsPerMinute/ 60,
		  content = props.post?.content.rendered,
		  strippedContent = content.replace( /(<([^>]+)>)/ig, ''),
	      wordCount = strippedContent.split(' ')
		                   .filter(function(n) { return n != '' })
						   .length,
		  seconds = Math.floor(wordCount/wordsPerSecond),
		  minutes = Math.floor(wordCount/wordsPerMinute),

		  secondsRemainder = seconds % 60;

	if ( minutes < 1 || secondsRemainder > 40 ) {
		minutes += 1;
	}

	return sprintf(__('%s min read', '__plugin_txtd'), minutes);

};

export default ReadingTime;
