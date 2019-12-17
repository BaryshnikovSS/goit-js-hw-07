'use strict';

export function task_02() {

    // В HTML есть пустой список ul#ingredients.

    // <ul id="ingredients"></ul>

    const unList = document.createElement('ul');
    unList.id = 'ingredients';

    // В JS есть массив строк.

    const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

    // Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
    // после чего вставит все li за одну операцию в список ul.ingredients. 
    // Для создания DOM-узлов используй document.createElement().

    const getList = function (arr, ul) {

        arr.forEach(elem => {
            const listItem = document.createElement('li');
            listItem.classList.add('item')
            listItem.innerText = elem;
            ul.appendChild(listItem);
        });

        document.body.appendChild(unList);
    }

    getList(ingredients, unList);


}