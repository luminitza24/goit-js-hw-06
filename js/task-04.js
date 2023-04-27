const element = document.querySelectorAll("button");
document.addEventListener("click", addUp);
function addUp() {
    if(element.dataset.action === "increment")
   {const x = document.getElementById("value");
    document.getElementById("value").innerHTML = x.innerHTML +1;
} 
else{ document.getElementById("value").innerHTML = x.innerHTML -1}
};