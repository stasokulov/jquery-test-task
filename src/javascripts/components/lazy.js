import $ from 'jquery';
$.fn.lazyPlugin = function (data) {
    const $targetElement = $(this)[0];
    const windowHeight = document.documentElement.clientHeight;

    $(window).scroll(function () {
        if (
            $targetElement.getBoundingClientRect().y < windowHeight
            &&
            !$targetElement.srcset
        ) {
            $targetElement.srcset = data.src;
        }
    })
}
