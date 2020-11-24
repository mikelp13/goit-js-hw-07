const navRef = document.querySelector('#categories');
console.log(`В списке ${navRef.children.length} категории`);

const itemsRef = document.querySelectorAll('.item');

const itemsArray = [...itemsRef].forEach(item =>{
  console.log (`Категория: ${item.children[0].textContent}`);
  console.log( `Количество элементов: ${item.children[1].children.length}`);
});



