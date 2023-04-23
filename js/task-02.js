const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listaElemente =document.getElementById('ingredients');
for (let i = 0; i < ingredients.length; i++) {
  const name = ingredients[i];
  const liItem = document.createElement('li');
  liItem.appendChild(document.createTextNode(name));
  listaElemente.appendChild(liItem);
  liItem.classList.add('item');
  console.log(liItem);
}
