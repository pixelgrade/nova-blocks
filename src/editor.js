import "./filters/with-block-id";
import "./filters/with-block-index";
import "./filters/with-font-size-picker";

import "./blocks/core/separator";

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

		const supports = settings[ 'theme_support' ];

		if ( supports[ 'announcement-bar' ] ) {
			announcementBarBlockInit();
		}

		if ( supports[ 'google-map' ] ) {
			googleMapBlockInit();
		}

		if ( supports[ 'header' ] ) {
			headerBlockInit();
			logoInit();
		}

		if ( supports[ 'headline' ] ) {
			headlineInit();
		}

		if ( supports[ 'hero' ] ) {
			heroInit();
		}

		if ( supports[ 'media' ] ) {
			mediaInit();
		}

		if ( supports[ 'navigation' ] ) {
			navigationInit();
		}

		if ( supports[ 'menu-food' ] ) {
			menuFoodInit();
			menuFoodSectionInit();
			menuFoodItemInit();
		}

		if ( supports[ 'opentable' ] ) {
			opentableInit();
		}
	}
}

wp.novaBlocks = new novaBlocks();
