jQuery(function ($) {

    'use strict';
	
	/*==============================================================*/
    // Table of index
    /*==============================================================*/

    /*==============================================================
    # sticky-nav
    # Date Time
    # language Select
	# Search Slide
	# Breaking News
	# Owl Carousel
	# magnificPopup
	# newsletter
	# weather	
	
    ==============================================================*/
		
		
	/*==============================================================*/
	// Search Slide
	/*==============================================================*/
	
	$('.search-icon').on('click', function() {
		$('.searchNlogin').toggleClass("expanded");
	});
	
	/*==============================================================*/
    // Owl Carousel
    /*==============================================================*/
	$("#home-slider").owlCarousel({ 
		pagination	: true,	
		autoPlay	: true,
		singleItem	: true,
		stopOnHover	: true,
	});
	
	$("#latest-news").owlCarousel({ 
		items : 4,
		pagination	: true,	
		autoPlay	: true,
		stopOnHover	: true,
	});
	
	$(".twitter-feeds").owlCarousel({ 
		items : 1,
		singleItem : true,
		pagination	: false,	
		autoPlay	: true,
		stopOnHover	: true,
	});
	
	$("#main-slider").owlCarousel({ 
		items : 4,
		pagination	: false,
		navigation	: false,
		autoPlay	: true,
		stopOnHover	: true
		
	});
	
	$("#related-news-carousel").owlCarousel({ 
		items : 3,
		pagination	: false,
		navigation	: false,
		autoPlay	: true,
		stopOnHover	: true,
		slideSpeed	: 500
	});
	
	$("#top-news").owlCarousel({ 
		items : 1,
		singleItem	: true,
		pagination	: false,
		navigation	: false,
		autoPlay	: true,
		stopOnHover	: true,
		slideSpeed	: 500
	});
	
	
	

	/*==============================================================*/
    // Magnific Popup
    /*==============================================================*/
	
	(function () {
		$('.image-link').magnificPopup({
			gallery: {
			enabled: true
			},		
			type: 'image' 
		});
		$('.feature-image .image-link').magnificPopup({
			gallery: {
				enabled: false
			},		
			type: 'image' 
		});
		$('.image-popup').magnificPopup({	
			type: 'image' 
		});
		$('.video-link').magnificPopup({type:'iframe'});
	}());
	
	
	
	
});