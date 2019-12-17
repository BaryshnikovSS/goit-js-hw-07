'use strict';

export function task_03() {

    // Напиши скрипт для создания галлереи изображений по массиву данных.

    // В HTML есть список ul#gallery.

    /* <ul id="gallery"></ul> */

    const unList = document.createElement('ul');
    unList.id = 'gallery';
    unList.style.display = 'flex';
    unList.style.justifyContent = 'space-between';
    unList.style.alignItems = 'center';
    unList.style.padding = '20px';
    unList.style.width = 'calc(100vw-20%)';
    document.body.appendChild(unList);

    console.log(unList)

    // Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

    // Все элементы галереи должны добавляться в DOM за одну операцию вставки.
    // Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

    const images = [
        {
            url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
        },
        {
            url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'White and Black Long Fur Cat',
        },
        {
            url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'Group of Horses Running',
        },
    ];

    const createUnList = function (mainArr, ul) {

        const getGallery = mainArr.reduce((acc, el) => acc += `<li style="list-style: none";><img style="width: calc(100vw*0.3); heught:auto;" src=${el.url} alt="${el.alt}"></li>`, '');

        ul.insertAdjacentHTML('afterbegin', getGallery);

    }

    createUnList(images, unList);



}