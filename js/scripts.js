(function ($) {

    'use strict';

    $(function () {

        // слайдеры
        (function () {
            var $sliders = $('.js-slick');
            if ($sliders.length > 0) {
                $sliders.slick();
            }
        })();

    });

})(jQuery);



