const Inputtext = document.getElementById("validation-input");
Inputtext.addEventListener('blur', addColor);
const saveInput = document.querySelector('input[ data-length="6"]')
  function addColor (event){
    event.preventDefault();
    const number = parseInt(saveInput.dataset.length)
if (Inputtext.textContent.length >= number){
 
  Inputtext.style.borderColor="#4caf50"
        
}
else {  Inputtext.style.borderColor="#f44336";}
  };
