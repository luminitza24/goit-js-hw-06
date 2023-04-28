const elementIncrease = document.querySelector('button[data-action="increment"]');
elementIncrease.addEventListener("click", addUp);
function addUp() {
   const x = document.getElementById("value");
    document.getElementById("value").innerHTML = parseInt(x.innerHTML) +1;
};
const elementDecrease =  document.querySelector('button[data-action="decrement"]');
elementDecrease.addEventListener("click", scaleDown);
function scaleDown(){
    const y = document.getElementById("value");
    document.getElementById("value").innerHTML = parseInt(y.innerHTML) -1;
}