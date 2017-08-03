(function ($) {
    'use strict';

    // Fullscreen Active Code
    $(window).on('resizeEnd', function () {
        $(".welcome_area, .comingsoon_area, .welcome_slides .single_slide, .single_slide").height($(window).height());
    });

    $(window).on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // Fitness Classes Slider Active Code (For Fitness Version)
    if ($.fn.owlCarousel) {
        $(".fitness_class_slides").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: false,
            autoplayTimeout: 8000,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }

    // Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.gallery_img').magnificPopup({
            type: 'image'
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 2000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="ion-ios-arrow-thin-up" aria-hidden="true"></i>'
        });
    }
    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // Footer Reveal Active Code
    if ($.fn.footerReveal) {
        $('.footer_area').footerReveal({
            shadowOpacity: 0.2
        });
    }

    // Masonary Gallery Active Code
    $('.gallery_full_width_images_area').imagesLoaded(function () {
        var $grid = $('.gallery_full_width_images_area').isotope({
            itemSelector: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item',
            percentPosition: true,
            masonry: {
                columnWidth: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item'
            }
        });
    });

    // ScrollUp Active Code
    if ($.fn.stellar) {
        $(window).stellar({
            responsive: true,
            positionProperty: 'transform',
            horizontalScrolling: false,
            parallaxBackgrounds: true,
            parallaxElements: true
        });
    }

    // YouTube Video Active Code
    if ($.fn.mb_YTPlayer) {
        $('.player').mb_YTPlayer();
    }

    // :: 8.0 MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    // Sticky Active Code
    $(window).on('scroll', function () {
        // Fadeout text code
        $(".business_startup_wc_text").css("opacity", 1 - $(window).scrollTop() / $('.business_startup_wc_text').height());

        if ($(window).scrollTop() > 300) {
            $('.main_header_area').addClass('sticky slideInDown');
            $('body').addClass('mobile_menu_on');

        } else {
            $('.main_header_area').removeClass('sticky slideInDown');
            $('body').removeClass('mobile_menu_on');
        }
    });

    $('#slidea').slidea({
        autoplay: true,
        layout: "fluid",
        layoutSettings: {
            anchor: 'center'
        },
        scroller: true,
        delay: 4000,
        overlap: 0,
        progress: {
            enabled: false
        },
        controls: {
            enabled: true
        },
        canvas_parallax: true,
        content_parallax: true,
        content_scaling: true,
        animation: {
            initial: "opacity 0, rotationX 90, scale 2, duration 500",
            out: "opacity 0, rotationX -90, scale 2, duration 500"
        },
        slide: {
            '#slide-destroy-limits': {
                object: {
                    '#slide-limits-text': {
                        start: 900,
                        initial: "y 100%, opacity 0, easing easeOutElastic, duration 500",
                        out: 'rotationX 360'
                    },
                    '#slide-destroy-text': {
                        start: 700,
                        initial: "y -100%, rotationX 40, scale 0.1, opacity 0, easing easeOutQuad, duration 600",
                        out: "y -100%, rotationX 40, scale 0.1, opacity 0, easing easeOutQuad, duration 600"
                    },
                    '#slide-destroy-description': {
                        start: 1400,
                        initial: 'opacity 0, y 100%',
                        out: 'opacity 0, y 100%'
                    }
                }
            },
            '#slide-towel': {
                background: {
                    0: {
                        duration: 5000
                    }
                },
                layer: {
                    '#slide-towel-girl': {
                        right: 100,
                        top: 0,
                        start: 1000,
                        initial: 'x 150%, duration 2000',
                        out: 'x 150%, duration 1000'
                    },
                    '#slide-towel-pack': {
                        left: 0,
                        bottom: 0,
                        start: 0,
                        initial: 'x -100%, duration 1000',
                        out: 'x -100%, duration 1000'
                    }
                },
                object: {
                    '#slide-towel-description': {
                        start: 600,
                        initial: 'opacity 0, y 100%',
                        out: 'opacity 0, y 100%'
                    }
                }
            }
        }
    });
})(jQuery);