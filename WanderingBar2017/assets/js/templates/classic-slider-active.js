(function ($) {
    'use strict';

    $('#slidea').slidea({
        autoplay: false,
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
            enabled: false
        },
        pagination: {
            enabled: true,
            position: "bottom"
        },
        controls: {
            enabled: true,
            thumbnail: false
        },
        canvas_parallax: true,
        content_parallax: true,
        content_scaling: true,
        slide: {
            '#classic_slidea_slide_one': {
                background: {
                    0: {
                        duration: 6000,
                        initial: "x 100%, opacity 0, duration 1000",
                        out: "x -100%, opacity 0, duration 1000"
                    }
                },
                object: {
                    '#classic-title-one': {
                        start: 1000,
                        initial: "y -10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "y 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    },
                    '#classic-description-one': {
                        start: 1500,
                        initial: "y -10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "y 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    },
                    '#classic-btn-one': {
                        start: 2000,
                        initial: "y -10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "y 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    }
                }
            },
            '#classic_slidea_slide_two': {
                background: {
                    0: {
                        duration: 6000,
                        initial: "x 100%, opacity 0, duration 1000",
                        out: "x -100%, opacity 0, duration 1000"
                    }
                },
                object: {
                    '#classic-title-two': {
                        start: 1000,
                        initial: "y 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "y -10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    },
                    '#classic-description-two': {
                        start: 1500,
                        initial: "y 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "y -10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    },
                    '#classic-btn-two': {
                        start: 2000,
                        initial: "y 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "y -10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    }
                }
            },
            '#classic_slidea_slide_three': {
                background: {
                    0: {
                        duration: 6000,
                        initial: "x 100%, opacity 0, duration 1000",
                        out: "x -100%, opacity 0, duration 1000"
                    }
                },
                object: {
                    '#classic-title-three': {
                        start: 1000,
                        initial: "y -10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "y 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    },
                    '#classic-description-three': {
                        start: 1500,
                        initial: "y -10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "y 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    },
                    '#classic-btn-three': {
                        start: 2000,
                        initial: "y -10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "y 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    }
                }
            }
        }
    });

})(jQuery);