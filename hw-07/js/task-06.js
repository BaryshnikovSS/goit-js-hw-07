'use strict';

// export function task_06() {

/* <input
type="text"
id="validation-input"
data-length="6"
placeholder="Введи 6 символов"
/> */

document.body.insertAdjacentHTML('afterbegin', '<input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" />')

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
// на правильное количество символов.

// Для добавления стилей, используй CSS-классы valid и invalid.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// }

const input = document.getElementById('validation-input');
console.log(input);
console.log(input.value.length);

const getInvalid = function () {
    if(input.value.length < 6) {
        input.style.borderColor = '#f44336';
    }

}

document.addEventListener('blur', getInvalid);