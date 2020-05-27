import "./filters/with-block-id";
import "./filters/with-block-index";
import "./filters/with-font-size-picker";
import "./filters/with-emphasis-level";
import "./filters/with-controls-sections";
import "./filters/with-latest-posts";

import "./blocks/openhours/hoursparser";
import "./blocks/core/separator";

import advancedGalleryInit from "./blocks/advanced-gallery";
import announcementBarBlockInit from "./blocks/announcement-bar";
import googleMapBlockInit from "./blocks/google-map";
import headerBlockInit from "./blocks/header";
import headlineInit from "./blocks/headline";
import heroInit from "./blocks/hero";
import logoInit from "./blocks/logo";
import mediaInit from "./blocks/media";
import slideshowInit from "./blocks/slideshow";
import navigationInit from "./blocks/navigation";
import menuFoodInit from "./blocks/menu-food";
import menuFoodSectionInit from "./blocks/menu-food-section";
import menuFoodItemInit from "./blocks/menu-food-item";
import opentableInit from "./blocks/opentable";
import openHoursInit from "./blocks/openhours";
import cardInit from "./blocks/card";
import cardsCollectionInit from "./blocks/cards-collection";
import postsCollectionInit from "./blocks/posts-collection"

import { STORE_NAME } from './store';

import { nova } from './icons';

import { addSeparatorFilters } from "./blocks/core/separator";

const {
	dispatch,
} = wp.data;

const {
	updateCategory
} = wp.blocks;

class novaBlocks {

	initialize( settings ) {
		addSeparatorFilters( settings );
		dispatch( STORE_NAME ).updateSettings( settings );
		updateCategory( 'nova-blocks', {
			icon: nova
		} );

		const supports = ( typeof settings[ 'theme_support' ] === 'object' ) ? Object.values( settings[ 'theme_support' ] ) : settings[ 'theme_support' ];

		if ( supports.indexOf('announcement-bar') > -1 ) {
			announcementBarBlockInit();
		}

		if ( supports.indexOf('google-map') > -1 ) {
			googleMapBlockInit();
		}

		if ( supports.indexOf('header') > -1 ) {
			headerBlockInit();
			logoInit();
		}

		if ( supports.indexOf('headline') > -1 ) {
			headlineInit();
		}

		if ( supports.indexOf('navigation') > -1 ) {
			navigationInit();
		}

		if ( supports.indexOf('menu-food') > -1 ) {
			menuFoodInit();
			menuFoodSectionInit();
			menuFoodItemInit();
		}

		if ( supports.indexOf('opentable') > -1 ) {
			opentableInit();
		}

		if ( supports.indexOf('cards-collection') > -1 ) {
			cardInit();
			cardsCollectionInit();
		}

		if ( supports.indexOf( 'openhours' ) > -1 ) {
			openHoursInit();
		}

		if ( supports.indexOf( 'advanced-gallery' ) > -1 ) {
			advancedGalleryInit();
		}

		heroInit();
		mediaInit();
		slideshowInit();
		postsCollectionInit();
	}
}

wp.novaBlocks = new novaBlocks();
