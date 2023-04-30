const input = document.getElementById('font-size-control');
const increaseFontSize = ()=>{
     const text = document.getElementById("text");
   const style = window.getComputedStyle(text, null).getPropertyValue('font-size');
   const currentSize = parseInt(style);
   if(16 < currentSize < 96 ){
    text.style.fontSize = (currentSize + 1) + 'px';
}}

input.addEventListener("input", increaseFontSize);