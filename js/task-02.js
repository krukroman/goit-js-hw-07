const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngrRef = document.querySelector('#ingredients');
const ulIngrItemRef = document.createElement('li');

ingredients.forEach(ingr => {
  const ulIngrItemRef = document.createElement('li');
  ulIngrItemRef.textContent = `${ingr}`;
  ulIngrRef.append(ulIngrItemRef);
});
