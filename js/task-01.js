
  const  categorii = document.getElementById("categories");
  const liItems = [];

  for (let i = 0; i < categorii.childNodes.length; i++) {
      if (categorii.childNodes[i].nodeName == "LI") {
          liItems.push(categorii.childNodes[i]);
      }
  }

  console.log(`Number of categories:${liItems.length}`)

const listItems = document.querySelectorAll('.items')
const elements = document.querySelectorAll('H2')
const category =[]
function numaraE(){
  for (let i = 0 ; i < listItems.childNodes.length; i++){
    if (listItems.childNodes[i].nodeName == "H2") {
       category.push(elements)       }
    }
}
  console.log(category)

