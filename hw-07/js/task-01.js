'use strict';

export function task_01() {

  // В HTML есть список категорий ul#categories.

  /* <ul id="categories">
    <li class="item">
      <h2>Животные</h2>

      <ul>
        <li>Кот</li>
        <li>Хомяк</li>
        <li>Лошадь</li>
        <li>Попугай</li>
      </ul>
    </li>
    <li class="item">
      <h2>Продукты</h2>

      <ul>
        <li>Хлеб</li>
        <li>Петрушка</li>
        <li>Творог</li>
      </ul>
    </li>
    <li class="item">
      <h2>Технологии</h2>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </li>
  </ul> */



  const baza = [
    {
      category: 'Животные',
      arr: ['Кот', 'Хомяк', 'Лошадь', 'Попугай'],
    },
    {
      category: 'Продукты',
      arr: ['Хлеб', 'Петрушка', 'Творог'],
    },
    {
      category: 'Технологии',
      arr: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
    }
  ]


  const infoList = document.createElement('ul');
  infoList.id = 'categories';

  const createUnList = function (mainArr, ul) {

    mainArr.forEach(elem => {

      const title = elem.category;
      const arr = elem.arr;

      const getList = function (arr, title) {

        const mainTitle = document.createElement('h2');
        mainTitle.innerText = title;
        ul.appendChild(mainTitle);

        const unList = document.createElement('ul');

        arr.forEach(elem => {
          const listItem = document.createElement('li');
          listItem.classList.add('item')
          listItem.innerText = elem;
          unList.appendChild(listItem);
        });

        ul.appendChild(unList);
      }

      getList(arr, title)

    })

  }

  createUnList(baza, infoList);
  document.body.appendChild(infoList);

  // Напиши скрипт, который выполнит следующие операции.

  // Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
  // Получится 'В списке 3 категории.'.

  console.log(`В списке ${infoList.getElementsByTagName('ul').length} категории.`);

  // Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) 
  // и количество элементов в категории (всех вложенных в него элементов li).

  Array.from(infoList.getElementsByTagName('h2')).forEach((value, indx) => console.log(`В категории ${value.innerText} количество вложенных ел-тов ${infoList.querySelectorAll('ul')[indx].children.length}`));

  // Например для первой категории получится:

  // Категория: Животные
  // Количество элементов: 4

}