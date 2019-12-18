'use strict';

export function task_07() {

    // <input id="font-size-control" type="range" />
    // <br />
    // <span id="text">Абракадабра!</span>

    document.body.insertAdjacentHTML('afterbegin', '<input id="font-size-control" type="range" /> <br/> <span id="text">Абракадабра!</span>');
    const input = document.getElementById('font-size-control');
    const span = document.getElementById('text');


    // Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
    // и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании 
    // ползунка будет меняться размер текста.

    const getSpanSize = function (event) {
        span.style.fontSize = event.target.value + 'px';
    }

    input.addEventListener('input', getSpanSize)

}