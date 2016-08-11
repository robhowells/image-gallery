var carousels = (function ($) {

    //carousel configs

    var imageGalleryConfig = function () {
        return {
            arrows: true,
            speed: 400,
            cssEase: 'ease', 
            dots: true,
            fade: true,
            appendDots: $('.image-gallery-controls'),   
            responsive: [
                {
                    breakpoint: 760,
                    settings: { 
                        arrows: false
                    }
                }
            ],
            customPaging: function(slider, i) {
                var thumbnail = $(slider.$slides[i]).context.src;
                return '<img src=" ' + thumbnail + '">';
            }
        }
    };

    //carousel init

    var init = function(selector, config) {
        var $carousel = $(selector),
            config = carousels[config];

        $carousel.on('init', function (event, slick) {
            $carousel.addClass('fade-in-simple');
        });

        if (typeof config === "function") {
            $carousel.slick(config());
        }
    }

    return {
        init: init,
        imageGalleryConfig: imageGalleryConfig
    };

})(jQuery);
