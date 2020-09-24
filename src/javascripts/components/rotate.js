import $ from 'jquery';
$.fn.rotatePlugin = function (data) {
    const $targetThis = $(this);
    let rotate = 0;
    $(window).scroll(function () {
        rotate = rotate + 5;
        $targetThis.css({transform: 'rotate('+rotate+'deg)'})
    })
}
