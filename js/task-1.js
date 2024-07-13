const listItems = document.querySelectorAll('.item');

console.log(`Numbers of categories: ${listItems.length}`);

listItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const elementsAmount = item.querySelectorAll('ul>li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsAmount}`);
});