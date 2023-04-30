const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
const defaultText = output.textContent;

const myEvent = ()=>{
    let typedValue = input.value;
    typedValue = typedValue.charAt(0).toUpperCase() + typedValue.slice(1)
    if ( typedValue !== "") {
 output.innerHTML = typedValue;   
    }
    else{ output.innerHTML = defaultText}
};

input.addEventListener('keyup',  myEvent);

