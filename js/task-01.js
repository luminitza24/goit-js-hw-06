
  const  categorii = document.getElementById("categories");
  const liItems = [];

  for (let i = 0; i < categorii.childNodes.length; i++) {
      if (categorii.childNodes[i].nodeName == "LI") {
          liItems.push(categorii.childNodes[i]);
      }
  }
const totalList = liItems.length;
console.log(`Number of categories:${totalList}`);
const listItems = document.querySelector(".items")
const elements = listItems.querySelectorAll("ul")
const category =[]
function numaraE(){
  for (let i = 0 ; i < elements.childNodes.length; i++){
    if (elements.childNodes[i].nodeName == "LI") {
        category.push(elements.childNodes[i])
        }
    }
}
  console.log(category)