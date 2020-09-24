import $ from 'jquery';

$.fn.animationsPlugin = function (data) {
    if (data === 'destroy') {
    } else {
        const $targetThis = $(this);
        const $targetElement = $targetThis[0];
        const $targetElementWidth = $targetElement.getBoundingClientRect().width;
        const $rightEdge = $targetElement.getBoundingClientRect().right;
        const $leftEdge = $targetElement.getBoundingClientRect().left;
        const pageWidth = document.documentElement.clientWidth;
        const oldRight = pageWidth - $rightEdge;
        const newRight = pageWidth - $leftEdge;
        let elementHided = false;
        let animationInProcess = false;
        $('body').mousemove(function (e) {
            let screenHeight = document.documentElement.clientHeight;
            if (e.clientY < screenHeight/2 && !animationInProcess && !elementHided) {
                animationInProcess = true;
                elementHided = true;
                $targetThis.css({
                    justifyContent: 'flex-start',
                    transition: 'transform .4s',
                    transform: 'scale(0.6)',
                });
                $targetThis.animate({
                    width: '0',
                    right: newRight + 'px',
                }, function () {
                    animationInProcess = false;
                })
            }
            if (e.clientY > screenHeight/2 && !animationInProcess && elementHided ) {
                animationInProcess = true;
                elementHided = false;
                $targetThis.css({
                    right: oldRight + 'px',
                    justifyContent: 'flex-end',
                    transform: 'scale(1)',
                });
                $targetThis.animate({
                    width: $targetElementWidth
                }, function () {
                    animationInProcess = false;
                })
            }
        })
    }
};
