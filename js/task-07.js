const input = document.getElementById('font-size-control');
input.addEventListener("input", increaseFontSize);
function increaseFontSize(currentSize){
    if(16< currentSize < 96 ){
     const text = document.getElementById("text");
   const style = window.getComputedStyle(text, null).getPropertyValue('font-size');
   const currentSize = parseFloat(style);
    text.style.fontSize = (currentSize + 1) + 'px';
}}

