# Tweet cards

Tweets cards is a simple app. It has two pages: homepage and page wich tweet cards. The backent is created using UI-service [mockapi.io](https://mockapi.io/).

# Technical stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)


# Тестове завдання

**Мета**: створити картки твітів та додати інтерактивності при клікові на
кнопку.

# Критерії виконання

- Верстка фіксована в рх, семантична та валідна.
- Немає помилок в консолі браузера.
- Робота виконана на нативному JS з використанням зборщиків або на React.
- Інтерактивність працює відповідно до технічного завдання.
- Код відформатований та без коментарів.
- В репозиторії має бути описаний README.md.

## Технічне завдання

1. Відповідно до
   [макету](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1)
   потрібно реалізувати картки юзера.
2. При клікові на кнопку `Follow` - текст змінюється на `Following`. Також
   змінюється колір кнопки. А до кількості фоловерів додається і ваш. Тобто,
   початкова кількість складає 100,500 фоловерів. При клікові на кнопку буде
   100,501.
3. При оновлені сторінки має фіксуватись кінцевий результат дій юзера. Тобто,
   якщо клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається
   в стані `Following` із відповідним кольором, а кількість фоловерів НЕ
   зменшується до початкового значення.
4. При повторному клікові на кнопку її текст та колір змінюються до початкового
   стану. Також змінюється і кількість фоловерів. Вона зменшується на 1
   (100,500).5. В коді цифра 100,500 має бути прописана одним значенням
   (100500). В UI - виведено через кому (100,500). Створи свій персональний
   бекенд для розробки за допомогою UI-сервісу
   [mockapi.io](https://mockapi.io/). Створи ресурс users. Використай
   конструктор ресурсу та опиши об'єкт юзера, як описано нижче.

## Юзер

1. Створюєте юзера в Mockapi з наступними полями: id, user, tweets, followers,
   avatar (див приклад нижче).
2. Зображення аватарів мають бути прописані окремими url у властивості “avatar”.
   Можете підібрати їх самостійно.
3. Має бути від 12 юзерів з різними значеннями(на ваш розсуд) в базі. Зроби
   пагінацію. На одній сторінці пагінації має відображатися від 3 твітів, решта
   підгружатись при натисканні Load More.
4. Решта вимог аналогічні до вищеописаного технічного завдання.

```json
[
  {
    user: 'Willie Bailey Jr.',
    tweets: 777,
    followers: 100500,
    avatar:
      'https://res.cloudinary.com/db633bc6x/image/upload/v1697265983/others/strange.jpg',
    id: '1',
  },
  {
    user: 'Anna Kuhn',
    tweets: 851,
    followers: 42051,
    avatar:
      'https://res.cloudinary.com/db633bc6x/image/upload/v1697265982/others/ironmangit.png',
    id: '2',
  }
]
```

[Макет](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1)

### Додаткове завдання

**_За виконання вам будуть нараховані додаткові бали! Без виконання додаткового
завдання ви не зможете отримати максимальний бал._**

Створи маршрутизацію, використовуючи React Router.

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим
маршрутом, його необхідно перенаправляти на домашню сторінку. `'/'` – компонент
`Home`, домашня сторінка. Стилізація та оформлення на ваш розсуд `'/tweets'` -
компонент `tweets`, сторінка із відображенням твітів. На сторінці `tweets` має
бути кнопка `Back`, яка веде на головну сторінку.

**Завдання із зірочкою**

Додай фільтрацію. Це має бути Dropdown із 3 опціями(оформлення на ваш розсуд):
show **all, follow, followings show all** - показати всі твіти. **follow** -
показати твіти, у яких стан follow. **followings** - показати твіти, у яких стан
following
