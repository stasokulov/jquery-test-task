import $ from 'jquery';
import validate from 'jquery-validation';

$.fn.validationsPlugin = function (data) {
    const $targetForm = $(this);
    $targetForm.validate({
        rules: {
            text: {
                required: true
            },
            tel1: {
                required: true,
                minlength: 6,
                digits: {
                    depends: function(element) {
                        const firstPlus = element.value[0] === '+';
                        const isDigids = Number(element.value.slice(1));
                        return !firstPlus || !isDigids;
                    }
                }
            },
            tel2: {
                required: true,
                minlength: 6,
                digits: {
                    depends: function(element) {
                        const firstPlus = element.value[0] === '+';
                        const isDigids = Number(element.value.slice(1));
                        return !firstPlus || !isDigids;
                    }
                }
            }
        },
        submitHandler: function() {
            $targetForm.fadeOut();
            $('.form-modal-success').fadeIn();
        },
        showErrors: function(errorMap, errorList) {
            $('.warning').css({display: 'none'});
            errorList.forEach(error => {
                const inputName = error.element.name;
                const method = error.method;
                const warningList = document.querySelectorAll('[data-name='+inputName+']');
                warningList.forEach(warningItem => {
                    if (warningItem.dataset.method === method) {
                        warningItem.style.display = 'block'
                    }
                })
            })
        }
    });

    $('.form-modal-success button').on('click', function () {
        $('.form-modal-success').fadeOut();
        $targetForm.fadeIn();
    })
}
