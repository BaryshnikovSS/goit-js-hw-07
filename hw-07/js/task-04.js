'use strict';

export function task_04() {

    // Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
    
    document.body.insertAdjacentHTML('afterbegin', '<div id="counter"><button type="button" data-action="decrement">-1</button><span id="value">0</span><button type="button" data-action="increment">+1</button></div>');

    // Создай переменную counterValue в которой будет хранится текущее значение счетчика.
    // Создай функции increment и decrement для увеличения и уменьшения значения счетчика
    // Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

    let counterValue = 0;

    const span = document.getElementById('value');

    const leftBtn = document.querySelector('button[data-action="increment"]');
    const rightBtn = document.querySelector('button[data-action="decrement"]');

    const increment = function () {
        counterValue += 1;
        span.innerText = counterValue;
    }

    const decrement = function () {
        counterValue -= 1
        span.innerText = counterValue;
    }

    leftBtn.addEventListener('click', increment);
    rightBtn.addEventListener('click', decrement);
}