const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemsArray = ingredients.reduce((acc, item) => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  acc.push(listItem);
  return acc;
},[]);

const ingredientsListRef = document.querySelector('#ingredients');
 ingredientsListRef.append(...itemsArray);

//========================= variant-2 =============================================

// const itemsArray = ingredients.forEach(item => {
//   const listItem = document.createElement('li');
//   listItem.textContent = item;
//   const ingredientsListRef = document.querySelector('#ingredients');
//   ingredientsListRef.append(listItem);
// });
