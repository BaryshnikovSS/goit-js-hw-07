'use strict';

export function task_06() {

    document.body.insertAdjacentHTML('afterbegin', '<input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" />')

    // Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
    // на правильное количество символов.

    // Для добавления стилей, используй CSS-классы valid и invalid.
    // Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
    // Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

    const input = document.getElementById('validation-input');

    const getValid = function () {

        if (input.value.length == input.dataset.length) {

            input.classList.contains('valid') ? input.classList.replace('invalid', 'valid') : input.classList.add('valid');

        } else {

            input.classList.contains('invalid') ? input.classList.replace('valid', 'invalid') : input.classList.add('invalid');

        }
    }

    input.addEventListener('blur', getValid);

}