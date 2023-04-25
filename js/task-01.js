
  const  categorii = document.getElementById("categories");
  const liItems = [];

  for (let i = 0; i < categorii.childNodes.length; i++) {
      if (categorii.childNodes[i].nodeName == "LI") {
          liItems.push(categorii.childNodes[i]);
      }
  }

const totalList = liItems.length;
console.log(`Number of categories:${totalList}`);
