const ulRef = document.querySelector('#categories');
const ulItemsRef = ulRef.querySelectorAll('.item');

console.log(`В списке ${ulItemsRef.length} элементов`);

ulItemsRef.forEach(item => {
  const ulItemsTitleRef = item.querySelector('h2');
  const ulItemsElemRef = item.querySelectorAll('ul > li');
  console.log(`Категория: ${ulItemsTitleRef.textContent}`);
  console.log(`Количетсво элементов: ${ulItemsElemRef.length}`);
});
