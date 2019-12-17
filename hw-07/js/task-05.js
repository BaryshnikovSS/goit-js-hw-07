'use strict';

export function task_05() {

    /* <input type="text" placeholder="Ваше имя?" id="name-input" /> */
    /* <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

    document.body.insertAdjacentHTML('afterbegin', '<input type="text" placeholder="Ваше имя?" id="name-input" /><h1>Привет, <span id="name-output">незнакомец</span>!</h1>')

    // Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
    // подставляет его текущее значение в span#name-output.
    // Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

    const input = document.getElementById('name-input');
    const span = document.getElementById('name-output');

    const getSpanValue = function () {

        if (input.value === '') {

            span.innerText = 'незнакомец';

        } else

            span.innerText = input.value;

    }

    const value = input.addEventListener('input', getSpanValue)


}