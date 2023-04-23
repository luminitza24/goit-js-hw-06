
  const  categorii = document.getElementById("categories");
  const liItems = [];

  for (let i = 0; i < categorii.childNodes.length; i++) {
      if (categorii.childNodes[i].nodeName == "LI") {
          liItems.push(categorii.childNodes[i]);
      }
  }

const totalList = liItems.length;
console.log(totalList);

const category = document.getElementById("item");
const listItems = [];
for (let i = 0; i < category.childNodes.length; i++) {
  if (category.childNodes[i].nodeName == "UL") {
      listItems.push(category.childNodes[i]);
  }
}

const elements = listItems.length;
