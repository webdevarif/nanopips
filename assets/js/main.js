
;
(function ($) {
    $(document).ready(function () {

        /*-------------------------------------------------------------------------------
        javaScript for sticky header
        -------------------------------------------------------------------------------*/
        $(".header-area").sticky();

        $(".navbar-toggler").on("click", function () {
            $(".header-area").toggleClass("active");
        });

        /*---------------------------------
		Javascript for wow animation
		----------------------------------*/
    	new WOW().init();

        /*-------------------------------------------------------------------------------
        featured Slider 
        -------------------------------------------------------------------------------*/
        $('.range-slider-trigger').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            responsive: [{
                breakpoint: 1681,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
        });

    })
}(jQuery));