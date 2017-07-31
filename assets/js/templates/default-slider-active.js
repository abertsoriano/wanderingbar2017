(function ($) {
    'use strict';
    
    $('#slidea').slidea({
        autoplay: true,
        layout: "fluid",
        layoutSettings: {
            anchor: 'center',
            size: 'fullscreen'
        },
        contentScaling: {
            enabled: true, // Default: false
            mode: 'responsive', // Modes: responsive, native
            factor: {
                xs: 1,
                sm: 1,
                md: 1,
                lg: 1,
                xlg: 1
            }
        },
        overlap: 0,
        progress: {
            enabled: true
        },
        controls: {
            enabled: true,
            thumbnail: false
        },
        canvas_parallax: true,
        content_parallax: true,
        content_scaling: true,
        slide: {
            '#default_slidea_slide_one': {
                background: {
                    0: {
                        duration: 10000,
                        initial: "y -100%, opacity 0, duration 1000",
                        out: "y 100%, opacity 0, duration 1000"
                    }
                },               
                object: {
                    '#title-one': {
                        start: 1000,
                        initial: "y 30%, opacity 0, duration 500",
                        out: "y 30%, opacity 0, duration 500"
                    },
                    '#description-one': {
                        start: 2000,
                        initial: "y -30%, opacity 0, duration 500",
                        out: "y -30%, opacity 0, duration 500"
                    },
                    '#btn-one': {
                        start: 3000,
                        initial: "y 30%, opacity 0, duration 500",
                        out: "y 30%, opacity 0, duration 500"
                    }
                }
            },
            '#default_slidea_slide_two': {
                background: {
                    0: {
                        duration: 10000,
                        initial: 'x -300, scale 0.5, opacity 0, duration 1000',
                        out: 'x 100, scale 1.2, opacity 0, duration 1000'
                    }
                },
                object: {
                    '#title-two': {
                        start: 1000,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 500"
                    },
                    '#description-two': {
                        start: 2000,
                        initial: 'opacity 0, y 100%',
                        out: 'opacity 0, y 100%'
                    },
                    '#btn-two': {
                        start: 3000,
                        initial: 'opacity 0, x -50',
                        out: 'opacity 0, x -50'
                    }
                },
                layer: {
                    '#layer-cactus': {
                        start: 4000,
                        initial: "opacity 0, y 20%, easing easeOutQuad, duration 1000",
                        out: "opacity 0, y -20%, easing easeOutQuad, duration 1000",
                        bottom: 100,
                        left: 100
                    }
                }
            }
        }
    });

})(jQuery);